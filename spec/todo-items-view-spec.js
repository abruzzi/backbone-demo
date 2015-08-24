describe('TodoItemsView', function(){
  'use strict';

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
    loadFixtures('todo-items.template');
  });

  it('#initialize', function(){
    var todoItemsView = new TodoItemsView(new Backbone.Model());
    expect(todoItemsView).toBeDefined();
  });

  describe('#render', function() {
    it('#render', function() {
      var model = new Backbone.Model({todos: []});
      var todoItemsView = new TodoItemsView(model);
      var html = todoItemsView.render();
      expect(html.find('h4')).toExist();
      expect(html.find('.panel')).not.toExist();
    });

    it('#render', function() {
      var model = new Backbone.Model({todos: [
        {
          id: 1,
          description: 'Maintainable JavaScript workshop',
          status: false
        }
      ]});

      var todoItemsView = new TodoItemsView(model);
      var html = todoItemsView.render();
      expect(html.find('h4')).toExist();
      expect(html.find('.panel')).toExist();

      var first = html.find('.panel').first();
      expect(first.find('h5'))
      .toContainText('Maintainable JavaScript workshop');
    });
  });
});
