window.__justep.__ResourceEngine.loadCss([{url: '/v_5569_nol_zh_CNs_desktopd_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_5569_nol_zh_CNs_desktopd_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_5569_nol_zh_CNs_desktopd_m/system/components/comp2.min.js','/v_5569_nol_zh_CNs_desktopd_m/system/core.min.js','/v_5569_nol_zh_CNs_desktopd_m/system/common.min.js','/v_5569_nol_zh_CNs_desktopd_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/menu/menu');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/toolBar/toolBar');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/popMenu/popMenu');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/components/justep/data/designer/editBaasDataColumn'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbYFrEf';
	this._flag_='464338f5493c8276aff314127162f738';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmDeleteText":"确定删除当前列定义?","confirmRefresh":true,"defCols":{"displayName":{"define":"displayName","label":"显示名称","name":"displayName","relation":"displayName","type":"String"},"isCalculate":{"define":"isCalculate","label":"是否计算列","name":"isCalculate","relation":"isCalculate","rules":{"readonly":"$model.type=='baas'"},"type":"Boolean"},"isIDColumn":{"define":"isIDColumn","label":"是否ID列","name":"isIDColumn","relation":"isIDColumn","rules":{"readonly":"$model.type=='baas'"},"type":"Boolean"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"type":{"define":"type","label":"数据类型","name":"type","relation":"type","type":"String"},"xid":{"define":"xid","label":"xid","name":"xid","relation":"xid","type":"String"}},"directDelete":false,"events":{"onBeforeDelete":"dataBeforeDelete","onBeforeNew":"dataBeforeNew"},"idColumn":"name","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"name\":\"String\"},{\"name\":\"Integer\"},{\"name\":\"Long\"},{\"name\":\"Float\"},{\"name\":\"Double\"},{\"name\":\"Decimal\"},{\"name\":\"Boolean\"},{\"name\":\"Date\"},{\"name\":\"Time\"},{\"name\":\"DateTime\"}]","limit":20,"xid":"typeData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
