import React from 'react';
import HeaderComponent from './components/headerComponent';
import PlayerComponent from './components/playerComponent';

React.render(
  <HeaderComponent/>,
  document.getElementById('header')
)

React.render(
    <PlayerComponent/>,
    document.getElementById('player-container')
)
