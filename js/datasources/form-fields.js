define(function(require) {
    var kendo           = require('kendo');
    var formFieldModel  = require('models/form-field');
    
    var formFieldsDataSource = function(form) {

        return new kendo.data.DataSource({
            schema: {
                data: "form_fields",
                total: "total",
                model: formFieldModel,
            },
            transport: {
               read: {
                   url: "data/form-fields.json",
                   dataType: "json",
                   contentType: "application/json"
               }
            }
        });
    };

    return formFieldsDataSource;
});