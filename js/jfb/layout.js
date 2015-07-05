define(function(require) {
  var kendo       = require('kendo'); 

  var template = require('text!../../templates/layout.html');

  var model = kendo.observable({
    title: "Json Form Builder",
    description: "Builds a custom form based on a JSON definition",
  });

  var layout = new kendo.Layout( template, {
    model: model,
  });

  return layout;
});