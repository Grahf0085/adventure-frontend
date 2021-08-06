import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Adventurer from './Adventurer';
import { useAdv } from '../../state/adv';
import Adventurer from './Adventurer';

const adventureList = () => {

  const [page, setPage] = useState(1);
  const { adventurers, loading } = useAdv(page);
  
  if(loading) return <h1>Loading List...</h1>;

  const adventureElements = adventurers.map((adv) => (
    <li key={adv.key}>
      <Adventurer {...adv} />
    </li>
  ));

  return (
    <>
      <button disabled={page <= 1} onClick={() => setPage((prevPage) => 
        prevPage - 1)}>&lt;</button>
      {page}
      <button disabled={toons.length < 3} onClick={() => 
        setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{adventureElements}</ul>
    </>
  );
}

export default adventureList;