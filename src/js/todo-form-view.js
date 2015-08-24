var TodoFormView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.template = $('#todo-form').html();
  },

  events: {
    'click #addButton': 'addTodoItem'
  },

  el: '#todoForm',

  addTodoItem: function(e) {
    e.preventDefault();

    var item = $('#todoInput').val();
    var todos = this.model.get('todos');
    todos.push({"description": item, "status": false});
    this.model.trigger('change:todos', todos);
  },

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled();
    this.$el.html(html);

    return this.$el;
  }
});
