import axios from "axios";
import React, { useState } from "react";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setlinks] = useState([]);

  const getLinks = async()=>{
    console.log('get Limks called')
    try{
      let res = await axios.get(`${baseurl}/api/links`) 
      console.log(res) 
      setlinks(res.data) 
     }catch(err){
      alert('err occured')
    }
  }

  const createLink = async(linkObjFromForm)=>{
    try{
      let res = await axios.post(`${baseurl}/api/links`, linkObjFromForm)
        console.log('res:', res)
        setlinks([res.data, ...links])
    }catch(err){
      alert('err occured')
        console.log(err.response)
    }
  }

  // create an object that will be 'global state'
  const dataProviderThing = {
    createLink,
    getLinks,
    links,
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
