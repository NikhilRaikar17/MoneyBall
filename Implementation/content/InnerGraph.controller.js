sap.ui.controller("content.InnerGraph", {

  onInit: function(){
   /* this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
      this._bKeyboard = oEvent.type === "keyup";
    }, this);*/
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
/*handleChange: function(oEvent) {
        // first, we have to get the new values of the two dates 
        // from our date range selector
        //var content = null;
       //var measure = oEvent.getSource.getSelected();
        
            },
  handlePressOpenMenu: function(oEvent) {
    var oButton = oEvent.getSource();

    // create menu only once
    if (!this._menu) {
      this._menu = sap.ui.xmlfragment(
        "content.Innergraph",
        this
      );
      this.getView().addDependent(this._menu);
    }

    var eDock = sap.ui.core.Popup.Dock;
    this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
  },

  handleMenuItemPress: function(oEvent) {
var content=null;    
    var msg = "";
    if(oEvent.getParameter("item").getMetadata().getName() === "content.graph.MenuTextFieldItem") {
      msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
    }
    else {
      msg = oEvent.getParameter("item").getText();
    }

     // sap.m.MessageToast.show(msg);
  switch (msg)
           {case "OBP":
              sap.m.MessageToast.show(msg);
    		   
    		break;
    		case "SP":
    		 
    	
           }
  },

  handleTextFieldItemPress: function(oEvent) {
    var msg = "'" + oEvent.getParameter("item").getValue() + "' entered";
      sap.m.MessageToast.show(msg);
  }
*/
});