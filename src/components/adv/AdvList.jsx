import React, { useState, useEffect } from 'react';
import Adventurer from './Adventurer';
import { listAdv } from '../../state/adv';
import { deleteAdv } from '../../services/listAPI';

const adventureList = () => {

  const [page, setPage] = useState(1);
  const { adventurers, loading } = listAdv(page);



  if(loading) return <h1>Loading List...</h1>;

  const adventureElements = adventurers.map((adv) => (
    <li key={adv.id}>
      <Adventurer {...adv} />
     <button onClick={() => { deleteAdv(adv.id);   setTimeout(function() {
    window.location.reload();}, 1000); }}>Delete Adventurer</button>
    </li>
  ));

  return (
    <>
      <button disabled={page <= 1} onClick={() => setPage((prevPage) => 
        prevPage - 1)}>&lt;</button>
      {page}
      <button disabled={adventurers.length < 3} onClick={() => 
        setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{adventureElements}</ul>
    </>
  );
}

export default adventureList;