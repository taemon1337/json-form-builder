define(function(require) {
    var kendo       = require('kendo');
    var formModel   = require('models/form');
    
    var formsDataSource = new kendo.data.DataSource({
        schema: {
            data: "forms",
            total: "total",
            model: formModel,
        },
        transport: {
           read: {
               url: "data/forms.json",
               dataType: "json",
               contentType: "application/json"
           }
        }
    });

    return formsDataSource;
});