sap.ui.define([
	"sap/ui/core/mvc/Controller" 
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.smartcontrols.SmartForm", {
		onInit: function() {
			this.getView().byId("smartForm").bindElement("/Products('4711')");
		}
	});

});