import React from 'react'
import { advDetails } from '../../state/adv';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { updateAdv } from '../../services/listAPI'

const AdvDetailPage = () => {

  const [title, setTitle] = useState();
  
  const { id } = useParams();

  const { details, loading } = advDetails(id);

  if(loading) return <h1>Loading Details...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id: id,
      title: title,
    }
    updateAdv(obj)
    setTimeout(function() {
      window.location.href=`/adv/${obj.id}`;}, 1000)
  }

  return (
    <section>
      <h2>Name: {details.alias}</h2>
      <h3>Class: {details.currentClass}</h3>
      <h3>Title: {details.title}</h3>
      <h3>Warrior: {details.warLvl}</h3>
      <h3>Monk: {details.mnkLvl}</h3>
      <h3>Thief: {details.thfLvl}</h3>
      <h3>Wizard: {details.wizLvl}</h3>
      <h3>Cleric: {details.clrLvl}</h3>
      <h3>Bard: {details.brdLvl}</h3>
      <h3>Mission: {details.missionRank}</h3>
      <h3>Zone: {details.zone}</h3>

      <form onSubmit={handleSubmit}>
        New Title: <input placeholder={details.title} onChange={((e) => setTitle(e.target.value))} value={title}></input>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default AdvDetailPage