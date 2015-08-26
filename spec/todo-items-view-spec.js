var Backbone = require('backbone');
var $ = require('jquery');

var TodoItemsView = require('../src/js/views/todo-items-view');
var CustomMacthers = require('./custom-matchers');

describe('TodoItemsView', function(){
  'use strict';

  beforeEach(function() {
    jasmine.addMatchers(CustomMacthers);
  });

  it('#initialize', function(){
    var todoItemsView = new TodoItemsView(new Backbone.Model());
    expect(todoItemsView).toBeDefined();
  });

  describe('#render', function() {
    it('no items', function() {
      var model = new Backbone.Model({todos: []});
      var todoItemsView = new TodoItemsView(model);
      var html = todoItemsView.render();
      expect(html.find('.panel')).not.toExist();
    });

    it('1 items', function() {
      var model = new Backbone.Model({todos: [
        {
          id: 1,
          description: 'Maintainable JavaScript workshop',
          status: false
        }
      ]});

      var todoItemsView = new TodoItemsView(model);
      var html = todoItemsView.render();
      expect(html.find('.panel')).toExist();

      var first = html.find('.panel').first();
      expect(first.find('h5'))
      .toContainText('Maintainable JavaScript workshop');
    });
  });
});
