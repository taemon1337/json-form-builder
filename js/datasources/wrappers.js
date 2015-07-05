define(function(require) {
    var kendo           = require('kendo');
    var wrapperModel    = require('models/wrapper');
    
    return function() {
    
        var wrappersDataSource = new kendo.data.DataSource({
            schema: {
                data: "wrappers",
                total: "total",
                model: wrapperModel
            },
            transport: {
               read: {
                   url: "data/wrappers.json",
                   dataType: "json",
                contentType: "application/json"
            }
            }
        });

        return wrappersDataSource;
    };
});