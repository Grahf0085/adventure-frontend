import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Adventurer = ({ id, alias, currentClass, level }) => {
  return <section>
    <Link to={`/adv/${id}`}><h1>Name: {alias}</h1></Link>
    <h2>Class: {currentClass}</h2>
    <h2>Level: {level}</h2>
  </section>;
};

Adventurer.propTypes = {
  id: PropTypes.number.isRequired,
  alias: PropTypes.string.isRequired,
  currentClass: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

export default Adventurer;
