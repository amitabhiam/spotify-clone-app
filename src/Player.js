import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player(spotify) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar />
        <Body spotify = {spotify}/>
        {/* {Sidebar} */}
        {/* {Boody} */}
      </div>
        

        <Footer />
    </div>
  )
}

export default Player;