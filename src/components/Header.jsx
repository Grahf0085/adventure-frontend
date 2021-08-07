import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
      <header>
        <h1>Adventure App</h1>
        <a href ="/"><button>Home</button></a>
        <Link to ={'/create'}>
          <button>Create Adventurer</button>
        </Link>
      </header>
  );
};

export default Header;