sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel){
    "use strict";

    return Controller.extend("sap.ui.fiori2.controller.App", {

        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.attachRouteMatched(this.onRouteMatched, this);
        },

        // Save route name and product
        onRouteMatched: function(oEvent){
            var oArguments = oEvent.getParameter("arguments");
            this.currentRouteName = oEvent.getParameter("name");
            this.currentProduct = oArguments.product;
        },

        onStateChanged: function(oEvent){
            if(oEvent.getParameter("isNavigationArrow")){
                this.oRouter.navTo(this.currentRouteName, {
                    layout: oEvent.getParameter("layout"),
                    product: this.currentProduct
                }, true);
            }
        },

        onExit: function(){
            this.oRouter.detachRouteMatched(this.onRouteMatched, this);
        }
    });
})