import Ember from 'ember';

var EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

// Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);

export default EditTodoView;