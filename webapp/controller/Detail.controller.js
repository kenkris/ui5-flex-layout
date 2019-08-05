sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller){
    "use strict";

    return Controller.extend("sap.ui.fiori2.controller.Detail", {

        onInit: function(){
            var oOwnerComponent = this.getOwnerComponent();
            this.oRouter = oOwnerComponent.getRouter();
            this.oModel = oOwnerComponent.getModel();
            this.oRouter.getRoute("master").attachPatternMatched(this._onProductMatched, this);
            this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
        },

        onEditToggleButtonPress: function(){
            var oObjectPageLayout = this.getView().byId("ObjectPageLayout");
            oObjectPageLayout.setShowFooter(!oObjectPageLayout.getShowFooter());
        },

        onExit: function(){
            this.oRouter.getRoute("master").detachPatternMatched(this._onProductMatched, this);
            this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
        },

        _onProductMatched: function(oEvent){
            this._product = oEvent.getParameter("arguments").product || this._product || "0";
            this.getView().bindElement({
                path: "/ProductCollection/" + this._product,
                model: "products"
            });
        }
    });
});