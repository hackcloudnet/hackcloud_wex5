define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		this.comp('windowDialog1').open();
		//this.comp("windowReceiver1").windowCancel();
	};

	return Model;
});