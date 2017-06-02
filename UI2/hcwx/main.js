define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("css!./wx").load();

	var Model = function(){
		this.callParent();
	};

	return Model;
});