import React from 'react';
import HeaderComponent from './components/headerComponent';
import PlayerComponent from './components/playerComponent';
import DetailComponent from './components/detailComponent';

React.render(
  <HeaderComponent/>,
  document.getElementById('header')
)

React.render(
    <PlayerComponent/>,
    document.getElementById('player-container')
)

React.render(
    <DetailComponent/>,
    document.getElementById('detail-container')
)