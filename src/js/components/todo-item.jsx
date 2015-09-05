var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {status: this.props.status ? true : false};
  },

  handleChange: function(){
    this.setState({status: !this.state.status});
  },
  
  render: function(){
    return (
      <div className="panel">
        <h5>{this.props.description}</h5>
        <a href="#" className="toggle  tiny right" data-id='1' onClick={this.handleChange}>
          { this.state.status ? 'Done' : 'Undo' }
        </a>
      </div>
    );
  }
});
