var Backbone = require('backbone');
var $ = require('jquery');

var TodoItemView = require('../src/js/views/todo-item-view');
var CustomMacthers = require('./custom-matchers');

describe("TodoItemView", function() {
  'use strict';

  beforeEach(function() {
    jasmine.addMatchers(CustomMacthers);
  });

  it('#initialize', function() {
    var todoItemView = new TodoItemView(new Backbone.Model());
    expect(todoItemView).toBeDefined();
  });

  describe("#render", function() {
    var data;
    beforeEach(function() {
      data = {
        "description": "Maintainable JavaScript",
        "status": false
      };
    });

    it('single item', function() {
      var todoItemView = new TodoItemView(new Backbone.Model(data));
      var html = todoItemView.render();

      expect(html.find('h5').text()).toEqual('Maintainable JavaScript');
      expect($.trim(html.find('a').text())).toEqual("Undo");
    });

    it('toggle todo', function() {
      var todoItemView = new TodoItemView(new Backbone.Model(data));
      var html = todoItemView.render();

      expect($.trim(html.find('a').text())).toEqual("Undo");

      html.find('a').trigger('click');
      expect($.trim(html.find('a').text())).toEqual("Done");
    });
  })

});
