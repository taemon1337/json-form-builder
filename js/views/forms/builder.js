define(function(require) {
  var kendo       = require('kendo');
  var formFields  = require('datasources/form-fields');
  var wrapperDS   = require('datasources/wrappers');

  return {
    view: function(form) {
      var win = form.showForm();
      var form_fields = formFields(form);
      var wrappers = wrapperDS();

      wrappers.fetch(function() {
        var wrapper = this.get(form.wrapper);
        var form_content = wrapper.add_to_window(win);

        window.win = win;
        window.form = form;
        window.wrapper = wrapper;

        form_fields.fetch(function() {
          form.form_fields = this.data();

          form.form_fields.forEach(function(field) {
            if(field.form_id == form.id) {
              field.build( form_content, wrapper);
              field.bindToActions(win, form);
            }
          });
        });
      });
    }
  };
});