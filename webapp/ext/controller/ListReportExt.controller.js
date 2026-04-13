sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('rc.com.consignpo.ext.controller.ListReportExt', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf rc.com.consignpo.ext.controller.ListReportExt
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				var oTable = this.getView().byId("rc.com.consignpo::SettleConsignmentPOList--fe::table::SettleConsignmentPO::LineItem::Table");
				oTable.attachSelectionChange(this.onRowSelect, this)
				this._table = oTable;
				this._view = this.getView();
				this._oInternal = this.getView().getModel("internal");

				this._JInternal = new sap.ui.model.json.JSONModel({
       										 isButtonEnabled: false  });

			    this.getView().setModel(this._JInternal, "ActionModel");
			}
		},
		
		onRowSelect: function(oEvent)
		{	
			
			var selectedContext = oEvent.getSource().getSelectedContexts();
			var enableCreatePO = true;

			 enableCreatePO = selectedContext.find(item => item.getObject().SuplrCsgnmtPplineWthdrwlStatus === '1') ? false : true;
				

			// for (let index = 0; index <= selectedContext.length; index++) {
			// 	let selObject = selectedContext[index].getObject();

			// 	enableCreatePO = selObject.SuplrCsgnmtPplineWthdrwlStatus = "1" ? false : true;
			// 	if (enableCreatePO === false )
			// 		break;			
			// }

			this._view.getModel("ActionModel").setProperty("/isButtonEnabled", enableCreatePO);

		},
		test: function() {
			console.log("test");
		}
	});
});
