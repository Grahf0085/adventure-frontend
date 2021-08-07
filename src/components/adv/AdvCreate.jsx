import React from 'react';
import { useState } from 'react';
import { makeAdv } from '../../services/listAPI';

const AdvCreate = () => {

  const [alias, setAlias] = useState('Tucker');
  const [currentClass, setCurrentClass] = useState('Coder');
  const [level, setLevel] = useState(37);
  const [title, setTitle] = useState('Learner');
  const [warLvl, setWarLvl] = useState(1);
  const [mnkLvl, setMnkLvl] = useState(2);
  const [thfLvl, setThfLvl] = useState(3);
  const [wizLvl, setWizLvl] = useState(4);
  const [clrLvl, setClrLvl] = useState(5);
  const [brdLvl, setBrdLvl] = useState(6);
  const [missionRank, setMissionRank] = useState(5);
  const [zone, setZone] = useState('Home');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      alias, currentClass, level, title, warLvl, mnkLvl, thfLvl, wizLvl, clrLvl, brdLvl, missionRank, zone
    };
    makeAdv(obj);
    setTimeout(() => {
      window.location.href = '/';}, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="name" onChange={((e) => setAlias(e.target.value))} value={alias}></input>
    <input placeholder="Job" onChange={((e) => setCurrentClass(e.target.value))} value={currentClass}></input>
    <input placeholder="Level" onChange={((e) => setLevel(e.target.value))} value={level}></input>
    <input placeholder="Title" onChange={((e) => setTitle(e.target.value))} value={title}></input>
    <input placeholder="Warrior Level" onChange={((e) => setWarLvl(e.target.value))} value={warLvl}></input>
    <input placeholder="Monk Lvel" onChange={((e) => setMnkLvl(e.target.value))} value={mnkLvl}></input>
    <input placeholder="Thief Level" onChange={((e) => setThfLvl(e.target.value))} value={thfLvl}></input>
    <input placeholder="Wizard Level" onChange={((e) => setWizLvl(e.target.value))} value={wizLvl}></input>
    <input placeholder="Cleric Level" onChange={((e) => setClrLvl(e.target.value))} value={clrLvl}></input>
    <input placeholder="Bard Level" onChange={((e) => setBrdLvl(e.target.value))} value={brdLvl}></input>
    <input placeholder="Mission Rank" onChange={((e) => setMissionRank(e.target.value))} value={missionRank}></input>
    <input placeholder="Zone" onChange={((e) => setZone(e.target.value))} value={zone}></input>
    <button>Submit</button>
  </form>;
};

export default AdvCreate;

