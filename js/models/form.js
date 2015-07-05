define(function(require) {
    var kendo       = require('kendo');
    var formFields  = require('datasources/form-fields');
    
    var FormModel = kendo.data.Model.define({
        id: "id",
        
        fields: {
            name: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            description: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            class_name: {
                type: "string",
                nullable: false,
                validation: { required: true }
            },
            wrapper: {
                type: "string",
                nullable: false,
                validation: { required: true }
            }
        },
        
        showForm: function() {
            var that = this;
            var el = $("<div></div>").insertAfter('body');
            return $(el).append(that.buildWindow()).kendoWindow({
                title: that.get('name'),
                width: "40%",
                height: "50%",
                position: {
                  top: "10%",
                  left: "10%"
                },
                actions: ['maximize','minimize','close'],
                close: function() {
                    this.destroy();
                }
            }).data("kendoWindow");
        },
        
        buildWindow: function() {
            return $("<div id='"+this.get('name')+"-window'></div>")
                .attr('title', this.get('description'));
        },
        
        save: function(win) {
            console.log('Saving Record:', this.buildRecord(win));
        },
        
        buildRecord: function(win) {
            var that = this;
            var record = {};
            
            if(this.form_fields) {
                this.form_fields.forEach(function(field) {
                    if(field.form_id == that.id) {
                        record[field.get('field')] = field.getValue(win);
                    }
                });
            }
            
            return record;
        }
    });
    
    return FormModel;
});