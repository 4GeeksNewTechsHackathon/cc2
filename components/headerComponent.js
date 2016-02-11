import React from 'react';
import Reflux from 'reflux';

var HeaderComponent = React.createClass({
  render: function() {
      return (<div><div className="logo"></div><div className="logout pull-right"></div></div>)
  }
});

module.exports = HeaderComponent;
