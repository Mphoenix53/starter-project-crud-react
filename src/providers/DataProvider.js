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
    console.log(linkObjFromForm)
    try{
      let res = await axios.post(`${baseurl}/api/links`, linkObjFromForm)
        console.log('res:', res)
        setlinks([res.data, ...links])
    }catch(err){
      alert('err occured')
        console.log(err.response)
    }
  }

  const updateLink = async(linkObjFromForm)=>{
    if(!linkObjFromForm.id){
      alert('no id no work')
      return
    }
    try{
      let res = await axios.put(`${baseurl}/api/links/${linkObjFromForm.id}`, linkObjFromForm)
        console.log('res:', res)
        let updatedLink = res.data
        let updateLinks = links.map(link => link.id === updatedLink.id ? updatedLink : link)
        setlinks(updateLinks)
      }catch(err){
      alert('err occured')
        console.log(err.response)
    }
  }

const deleteLink = async (id)=>{
  try{
    let res = await axios.delete(`${baseurl}/api/links/${id}`)
    console.log(res)
    setlinks(links.filter(l =>l.id !== id))
  }catch(err){
    alert('err occured')
  }
}
  
  // create an object that will be 'global state'
  const dataProviderThing = {
    updateLink,
    createLink,
    getLinks,
    links,
    deleteLink,
    
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
