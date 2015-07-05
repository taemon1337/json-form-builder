define([
    'jquery',
    'kendo'
],
function($, kendo) {
    var FormFieldModel = kendo.data.Model.define({
        id: "id",
        
        fields: {
            form_id: {
                type: "integer",
                defaultValue: 0,
                nullable: true,
                validation: { required: true }
            },
            field: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            title: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            description: {
                type: "string",
                defaultValue: "",
                nullable: true,
                validation: { required: true }
            },
            element: {
                type: "string",
                defaultValue: "<input />",
                nullable: false,
                validation: { required: true }
            },
            role: {
                type: "string",
                validation: { required: false },
                nullable: true
            },
            options: {
                defaultValue: {}
            }
        },
        
        build: function(el, wrapper) {
            var wrap = $(wrapper.get('template'));
            var field = this.buildField().appendTo( $(wrap).find(wrapper.get('field_selector')));
            var title = this.buildTitle().appendTo( $(wrap).find(wrapper.get('title_selector')));
            $(el).append( $(wrap));
            var component = this.buildKendoComponent( field );
            this.buildEventHandlers( wrap );
            
            return {
                wrapper: wrap,
                field: field,
                title: title,
                component: component
            }
        },
        
        buildKendoComponent: function(el) {
            switch(this.get('role')) {
                case "kendoDropDownList":
                    return $(el).kendoDropDownList(this.get('options')).data("kendoDropDownList");
                case "kendoAutoComplete":
                    return $(el).kendoAutoComplete(this.get('options')).data("kendoDropDownList");
                case "kendoComboBox":
                    return $(el).kendoComboBox(this.get('options')).data("kendoComboBox");
                case "kendoDateTimePicker":
                    return $(el).kendoDateTimePicker(this.get('options')).data("kendoDateTimePicker");
                case "kendoDatePicker":
                    return $(el).kendoDatePicker(this.get('options')).data("kendoDatePicker");
                case "kendoTimePicker":
                    return $(el).kendoTimePicker(this.get('options')).data("kendoTimePicker");
                case "kendoEditor":
                    return $(el).kendoEditor(this.get('options')).data("kendoEditor");
                case "kendoMaskedTextBox":
                    return $(el).kendoMaskedTextBox(this.get('options')).data("kendoMaskedTextBox");
                default:
                    return $(el);
            }
        },
        
        buildField: function() {
            return $(this.get('element')).attr('data-uid', this.get('uid'));
        },
        
        buildTitle: function() {
            return $("<b>"+this.get('title')+"</b>").attr('title', this.get('description'));
        },
        
        buildEventHandlers: function(el) {
            var  that = this;
            if(this.get('field') == '_actions') {
                if( $(el).find('.k-action-close').length > 0) {
                    $(el).find('.k-action-close').on('click', function() {
                        that.trigger('form:close');
                    });
                    $(el).find('.k-action-save').on('click', function() {
                        that.trigger('form:save');
                    });
                }
            }
        },
        
        bindToActions: function(win, form) {
            if(this.get('field') == '_actions') {
                this.bind('form:close', function() {
                    this.unbind('form:close');
                    win.close(); 
                });
                this.bind('form:save', function() {
                    form.save(win);
                });
            }
        },
        
         getValue: function(win) {
             return $(win.wrapper).find("[data-uid='"+this.get('uid')+"']").val();
         }
    });
    
    return FormFieldModel;
});