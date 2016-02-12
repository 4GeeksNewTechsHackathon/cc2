import React from 'react';
import Reflux from 'reflux';

var DetailPlayer = React.createClass({
  render: function() {
      return (<div className="detail row">
          <div className="col-md-3"><img src="images/player.png" alt="" className="img-fluid"/> </div>
          <div className="col-md-3"> <progress className="progress progress-striped progress-success " value="50" max="100">50%</progress>
           </div>
      	</div>)
  }
});

module.exports = DetailPlayer;