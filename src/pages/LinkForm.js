import React from 'react';
import { useParams } from 'react-router-dom';

const LinkForm = ()=>{
  const prams = useParams()
  return (
    <div>
     <h1>LinkForm here</h1>
     <p>{prams.id ? 'Update Form':'New Form'}</p>
     <p>id: {prams.id ? prams.id :'No id'}</p>
    </div>
  )
}

export default LinkForm;