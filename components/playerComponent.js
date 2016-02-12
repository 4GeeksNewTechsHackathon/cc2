import React from 'react';
import Reflux from 'reflux';

var PlayerComponent = React.createClass({
  render: function() {
      return (<div className="player row">
      <div className="col-md-4"><img src="images/player.png" alt="" className="img-fluid"/></div>
      <div className="col-md-8"><span className="text-center">NABILA DIAZ</span><br/><span className="text-center">Level 10</span></div>
      </div>)
  }
});

module.exports = PlayerComponent;


