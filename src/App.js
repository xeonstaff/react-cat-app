import React, { useState } from 'react'
import { UserContext } from './Context'

import InfoFooter from './components/InfoFooter';
import SideBar from "./components/SideBar";
import CatCard from "./components/CatCard";

import Button from "@mui/material/Button"
import SearchBar from "material-ui-search-bar";


import './index.css'

function App() {
  const [catsearchname, setCatSearchName] = useState("")

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <UserContext.Provider value={catsearchname}>
      <main className="App">
        <SideBar />
        <div className='searchbarbox'>
          <SearchBar
            placeholder="serach for cat "
            catsearchname={catsearchname}
            onRequestSearch={(value) => setCatSearchName(value)}
          />
        </div>
        <div className='picbox'>
          <CatCard catsearchname="catsearchname" />
        </div>
        <div className='buttonbox'>
          <Button variant='contained'
            size='large'
            onClick={refreshPage}
            style={{ width: 120, height: 60 }}>
            New Cat
          </Button>
        </div>
        <div className='footerbox'>
          <InfoFooter />
        </div>
      </main>
    </UserContext.Provider>
  );
}

export default App;
