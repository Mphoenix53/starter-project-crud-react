import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setlinks] = useState([]);

  const getLinks = async()=>{
    try{
      let res = await axios.get(`${baseurl}/api/links`)  
      setlinks(res.data) 
     }catch(err){
      alert('err occured')
    }
  }

  // create an object that will be 'global state'
  const dataProviderThing = {
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
