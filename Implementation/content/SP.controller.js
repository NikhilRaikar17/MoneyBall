sap.ui.controller("content.SP", {

  onInit: function(){
    var dataModel = new sap.ui.model.odata.ODataModel(
            "models/GBI.xsodata"
        ); 
        // next, we can bind the odata model to the 
        // SalesOrders view, so controls within the view can use it
        this.getView().setModel(dataModel);
        
        // before the view is rendered, we want to attach the vizframe
        // popover to the chart. first, we need to get chart and popover
        var oVizFrame = this.byId('barchart');
		var oVizPopover = this.byId('vizPopover');
		// after that, connecting is easy
		oVizPopover.connect(oVizFrame.getVizUid());
        

  }
});