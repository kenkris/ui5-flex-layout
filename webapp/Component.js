sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/f/library"
], function(UIComponent, JSONModel, fioriLibrary) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.fiori2.Component", {

		metadata: {
			manifest: "json"
		},

		init: function(){

			var oModel = new JSONModel();
			this.setModel(oModel);

			UIComponent.prototype.init.apply(this, arguments);

			var oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/mock") + "/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, "products");

			var oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},

		_onBeforeRouteMatched: function(oEvent){
			var oModel = this.getModel();
			var sLayout = oEvent.getParameters().arguments.layout;

			if(!sLayout)
				sLayout = fioriLibrary.LayoutType.OneColumn;

			oModel.setProperty("/layout", sLayout);
		}
	});
});