describe('TodoList', function(){
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var TodoList = require('../../src/js/components/todo-list.jsx');

  it('#render', function(){
    TodoList.__set__('TodoItem', React.createClass({
      render: function(){
        return (<div className="fake-todoitem"></div>)
      }
    }));
    var changeStatus = function(){};

    var todos = [
      {id: 1, description: "再不杀人，就开学了", status: false},
      {id: 2, description: "黑杨栋和马强", status: true}
    ];

    var todoList = TestUtils.renderIntoDocument(
      <TodoList todos={todos} changeStatus={changeStatus}/>
    );

    expect(TestUtils.isCompositeComponent(todoList)).toBeTruthy();

    var todoItems = TestUtils.scryRenderedDOMComponentsWithClass(todoList, 'fake-todoitem');
    var h4 = TestUtils.findRenderedDOMComponentWithTag(todoList, 'h4');

    expect(todoItems.length).toEqual(2);
    expect(h4.getDOMNode().textContent).toEqual('Todo Items');
  });
});
