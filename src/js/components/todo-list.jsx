var React = require('react');
var TodoItem = require('./todo-item.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
   return {todos: this.props.todos};
  },

  render: function(){
    var todoItems = _.map(this.state.todos, function(todo){
      return <TodoItem description={todo.description} status={todo.status}  />;
    });

    return (
      <div class="row">
        <div class="large-12 columns">
            <h4>Todo Items</h4>
            <div id="todoItems">
              {todoItems}
            </div>
        </div>
      </div>
    );
  }
});
