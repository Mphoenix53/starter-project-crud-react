import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider';

const Links = ()=>{

  const {links, getLinks, createLink, updateLink, deleteLink} = useContext(DataContext)

  return (
    <div>
    <h1>Links here</h1>
    <div>{JSON.stringify(links)}</div>
    <button onClick={getLinks}>Get Links</button>
    <button onClick={()=>createLink({title:'title', username:'michealp' })}>Create Links</button>
    <button onClick={()=>updateLink({id:19, title:'updated'})}>Update Link</button>
    <button onClick={()=>deleteLink(99)}>delete Link</button>
    </div>
  )
}

export default Links;