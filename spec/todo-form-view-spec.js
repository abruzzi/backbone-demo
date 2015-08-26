var Backbone = require('backbone');
var $ = require('jquery');

var TodoFormView = require('../src/js/views/todo-form-view');
var CustomMacthers = require('./custom-matchers');

describe('TodoFormView', function(){
  'use strict';

  beforeEach(function() {
    jasmine.addMatchers(CustomMacthers);
  });

  it('#initialize', function(){
    var todoFormView = new TodoFormView(new Backbone.Model());
    expect(todoFormView).toBeDefined();
  });

  it('#render', function() {
    var todoFormView = new TodoFormView(new Backbone.Model());
    var html = todoFormView.render();

    expect(html.find('#todoInput')).toExist();
    expect(html.find('#addButton')).toExist();
  });

  it('#addTodoItem', function() {
    var model = new Backbone.Model({todos: []});
    var todoFormView = new TodoFormView(model);
    var html = todoFormView.render();

    expect(model.get('todos').length).toBe(0);
    $(html).find('#todoInput').val('Maintainable JavaScript workshop');
    $(html).find('#addButton').trigger('click');
    expect(model.get('todos').length).toBe(1);

    var item = model.get('todos')[0];
    expect(item.description).toBe('Maintainable JavaScript workshop');
    expect(item.status).toBe(false);
  })
});
