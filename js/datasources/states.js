define(function(require) {
    var kendo       = require('kendo');
    
    var statesDataSource = new kendo.data.DataSource({
        transport: {
           read: {
               url: "data/states.json",
               dataType: "json",
               contentType: "application/json"
           }
        }
    });

    return statesDataSource;
});