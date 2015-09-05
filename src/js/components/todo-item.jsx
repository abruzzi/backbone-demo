var React = require('react');

module.exports = React.createClass({
  handleChange: function(){
    this.props.changeStatus(this.props.todo.id);
  },

  render: function(){
    return (
      <div className="panel">
        <h5>{this.props.todo.description}</h5>
        <a href="#" className="toggle  tiny right" data-id='1' onClick={this.handleChange}>
          { this.props.todo.status ? 'Done' : 'Undo' }
        </a>
      </div>
    );
  }
});
