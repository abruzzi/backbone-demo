var React = require('react');
var TodoItem = require('./todo-item.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  render: function(){
    var self = this;
    var todoItems = _.map(this.props.todos, function(todo){
      return <TodoItem todo={todo} changeStatus={self.props.changeStatus}/>;
    });

    return (
      <div className="row">
        <div className="large-12 columns">
            <h4>Todo Items</h4>
            <div id="todoItems">
              {todoItems}
            </div>
        </div>
      </div>
    );
  }
});
