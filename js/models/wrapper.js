define(function(require) {
    var kendo       = require('kendo');
    
    var wrapperModel = kendo.data.Model.define({
        id: "name",
        
        fields: {
            name: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            form_wrapper: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            form_selector: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            template: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            field_selector: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            title_selector: {
                type: "string",
                nullable: false,
                validation: { required: true }
            }
        },
        
        add_to_window: function(win) {
            var fw = $(this.get('form_wrapper')).appendTo(win.wrapper.find('.k-window-content'));
            var fs = this.get('form_selector');
            
            if( $(win.wrapper).find('.k-window-content').find(fs).length > 0) {
                return $(win.wrapper).find('.k-window-content').find(fs);
            } else {
                console.error("NO FORM FOUND USING FORM SELECTOR");
            }
        }
        
    });
    
    return wrapperModel;
});