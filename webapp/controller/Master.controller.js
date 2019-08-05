sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/m/MessageBox",
    "sap/f/library"
], function(JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox, fioriLibrary){
    "use strict";

    return Controller.extend("sap.ui.fiori2.controller.Master", {

        onInit: function(){
            this.bDescendingSort = false;
            this.oProductsList = this.getView().byId("productsTable");
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onSearch: function(oEvent){
            var aFilter = [];
            var sSearchTerm = oEvent.getParameter("query");

            if(sSearchTerm)
                aFilter.push( new Filter("Name", "Contains", sSearchTerm));

            var oBinding = this.oProductsList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onAddProduct: function(){
            // TODO
            console.log("not implemented yet");
        },

        onSort: function(){
            this.bDescendingSort = !this.bDescendingSort;
            var oBinding = this.oProductsList.getBinding("items");
            oBinding.sort(new Sorter("Name", this.bDescendingSort));
        },

        onProductPress: function(oEvent){
            var sProductPath = oEvent.getSource().getBindingContext("products").getPath();
            var iProductId = sProductPath.split("/").slice(-1).pop();

            this.oRouter.navTo("detail", {
                layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
                product: iProductId
            });
        }
    });
});