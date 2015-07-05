define(["jquery","kendo","jfb/router","jfb/layout", "views/forms/index"], function($,kendo, router, layout, formIndexView) {

    var start = function() {
        layout.showIn("#forms-wrapper", formIndexView.view());
        
        layout.render("#application");
    };
    
    return {
        start: start
    };
});






