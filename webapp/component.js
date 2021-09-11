sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device",
    "./controller/Dialog"
], function (UIComponent, JSONModel, ResourceModel, Device,Dialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            //set Dialog
            this._helloDialog = new Dialog(this.getRootControl());

            //create the views based on the url/hash
            this.getRouter().initialize();
        },

        exit : function (){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openDialog : function(){
            this._helloDialog.open();
        }

    });
});