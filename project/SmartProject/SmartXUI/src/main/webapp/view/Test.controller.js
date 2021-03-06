jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("com.www.smartx.util.Controller");

com.www.smartx.util.Controller.extend("com.www.smartx.view.Test", function() {
  "use strict";
  var i18nModel;
  return {
    onInit : function() {
      var oEventBus = this.getEventBus();
      this.getRouter().getRoute("test").attachPatternMatched(this.onRouteMatched, this);
    },
    onRouteMatched : function(oEvent) {
      var that = this;
      i18nModel = this.getView().getModel("i18n");
      this.loadRequests();
    },
    loadRequests : function() {
      var that = this;
    }
  };
}());
