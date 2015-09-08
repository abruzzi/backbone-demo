describe('TodoItem', function(){
  "use strict";

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var TodoItem = require('../../src/js/components/todo-item.jsx');

  it('#render', function(){
    var todo = {id: 1, description: "再不杀人，就开学了", status: false};
    var changeStatus = jasmine.createSpy('changeStatus');

    var todoItem = TestUtils.renderIntoDocument(
      <TodoItem todo={todo} changeStatus={changeStatus}/>
    );

    var panel = TestUtils.findRenderedDOMComponentWithClass(todoItem, 'panel');
    var h5 = TestUtils.findRenderedDOMComponentWithTag(todoItem, 'h5');
    var a =  TestUtils.findRenderedDOMComponentWithTag(todoItem, 'a');

    expect(panel.getDOMNode()).toBeDefined();
    expect(h5.getDOMNode().textContent).toEqual('再不杀人，就开学了');
    expect(a.getDOMNode().textContent).toEqual('Undo');

    React.addons.TestUtils.Simulate.click(a);
    expect(changeStatus).toHaveBeenCalled();
  });
});
