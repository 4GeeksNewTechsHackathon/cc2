import React from 'react';
import HeaderComponent from './components/headerComponent';
import PlayerComponent from './components/playerComponent';
import DetailComponent from './components/detailComponent';
import DataActions from './actions/DataActions';

// Cada 5 segundos: recargar!
// setInterval(function() {
//     DataActions.fetchData();
// }, 5000);

DataActions.fetchData();

React.render(<HeaderComponent/>, document.getElementById('header'))
React.render(<PlayerComponent/>,document.getElementById('player-container'))
React.render(<DetailComponent/>,document.getElementById('detail-container'))
