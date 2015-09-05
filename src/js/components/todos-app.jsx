var React = require('react');
var _ = require('lodash');
var TodoList = require('./todo-list.jsx');
var TodoForm = require('./todo-form.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    var data = [
      {id: 1, description: "再不杀人，就开学了", status: false},
      {id: 2, description: "黑杨栋和马强", status: true}
    ];

    return {todos: data};
  },

  changeStatus: function(id){
    var todos = this.state.todos;
    var todo = _.first(_.where(todos, {id: id}));
    todo.status = !todo.status;

    this.setState({todos: todos});
  },

  handleAdd: function (text){
    var data = this.state.todos;
    data.push({id: _.uniqueId('todo_'), description: text, status: false});

    this.setState({todos: data});
  },

  render: function(){
    return (
      <div>
      <div className="row" id="todoForm">
        <TodoForm onAdd={this.handleAdd}/>
      </div>

      <div className="row">
        <hr className="large-12 columns" />
      </div>

      <div className="row">
        <div className="large-12 columns">
          <div id="todoItems">
            <TodoList todos={this.state.todos} changeStatus={this.changeStatus}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
});
