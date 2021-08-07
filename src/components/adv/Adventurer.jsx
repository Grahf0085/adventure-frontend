import React from 'react'
import { Link } from 'react-router-dom'

const Adventurer = ({ id, alias, currentClass, level }) => {
  return <section>
    <Link to={`/adv/${id}`}><h1>Name: {alias}</h1></Link>
    <h2>Class: {currentClass}</h2>
    <h2>Level: {level}</h2>
  </section>
}

export default Adventurer;