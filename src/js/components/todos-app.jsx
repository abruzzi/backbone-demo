var React = require('react');
var _ = require('lodash');
var TodoList = require('./todo-list.jsx');
var TodoForm = require('./todo-form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {todos: this.props.todos};
  },

  handleSearch: function (text){
    var data = this.state.todos;
    data.push({"id": _.uniqueId('todo_'), description: text, "status": false});
    this.setState({todos: data});
  },

  render: function(){
    return (
      <div>
      <div className="row" id="todoForm">
        <TodoForm onAdd={this.handleSearch}/>
      </div>

      <div className="row">
        <hr className="large-12 columns" />
      </div>

      <div className="row">
        <div className="large-12 columns">
          <div id="todoItems">
            <TodoList todos={this.state.todos}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
});
