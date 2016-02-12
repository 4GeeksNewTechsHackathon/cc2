import React from 'react';
import Reflux from 'reflux';
import DataStore from '../stores/DataStore';

var PlayerComponent = React.createClass({
  mixins: [Reflux.connect(DataStore, 'playersData')],

  render: function() {
      if (this.state.playersData) {
          return (<div>
              {
                  this.state.playersData.map(function (player) {
                      return (<div className="player row">
                      <div className="col-md-4"><img src={player.picture} alt="Player picture" className="img-fluid"/></div>
                      <div className="col-md-8"><span className="text-center">{player.name}</span><br/><span className="text-center">{player.points}</span></div>
                      </div>)
                  },this)
              }
              </div>)
      } else {
          return (<b>No hay datos que mostrar</b>);
      }
  }
});

module.exports = PlayerComponent;
