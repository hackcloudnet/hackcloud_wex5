window.__justep.__ResourceEngine.loadCss([{url: '/v_31ca87bd5584402a93b5b5a24d17d6dcl_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_6c64665eaf3942d8b9ea7eb325ccbeb5l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_dfbbac4820a64886b7bff0c5749f7aafl_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_2b3737955cb845fc8250cec3743891b9l_zh_CNs_desktopd_pc/system/core.min.js','/v_e7f44f0feb0044d497729b897bb07c06l_zh_CNs_desktopd_pc/system/common.min.js','/v_81f86a7271a5493aa6622b6747779b36l_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/form-element/select'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNRbuui';
	this._flag_='9f6aeed6f6f0004643a2d59a1c06028a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"change":{"define":"change","label":"改变事件","name":"change","relation":"change","type":"String"},"create":{"define":"create","label":"创建","name":"create","relation":"create","type":"String"},"dynamic":{"define":"dynamic","label":"动态改变","name":"dynamic","relation":"dynamic","type":"String"},"enable":{"define":"enable","label":"启用 禁用","name":"enable","relation":"enable","type":"String"},"inputValue":{"define":"inputValue","label":"input","name":"inputValue","relation":"inputValue","type":"String"},"labelInput":{"define":"labelInput","label":"姓名:","name":"labelInput","relation":"labelInput","type":"String"},"normalInput":{"define":"normalInput","label":"普通表单元素","name":"normalInput","relation":"normalInput","type":"String"},"options":{"define":"options","label":"数据","name":"options","relation":"options","type":"String"},"optionsValue":{"define":"optionsValue","label":"选中值","name":"optionsValue","relation":"optionsValue","type":"String"},"selectOne":{"define":"selectOne","label":"下拉框1","name":"selectOne","relation":"selectOne","type":"String"},"selectTwo":{"define":"selectTwo","label":"下拉框2","name":"selectTwo","relation":"selectTwo","type":"String"},"sex":{"define":"sex","label":"性别:","name":"sex","relation":"sex","type":"String"}},"directDelete":false,"events":{},"idColumn":"options","initData":"[{\"options\":\"员工1\",\"optionsValue\":\"员工1\",\"enable\":\"员工1\",\"change\":\"员工1\",\"create\":\"北京\",\"dynamic\":\"北京\",\"selectOne\":\"员工1\",\"selectTwo\":\"员工1\",\"sex\":\"男\"},{\"options\":\"员工2\",\"optionsValue\":\"员工2\",\"enable\":\"员工2\",\"change\":\"员工2\",\"create\":\"上海\",\"dynamic\":\"上海\",\"selectOne\":\"员工2\",\"selectTwo\":\"员工2\",\"sex\":\"女\"},{\"options\":\"员工3\",\"optionsValue\":\"员工3\",\"enable\":\"员工3\",\"change\":\"员工3\",\"create\":\"广州\",\"dynamic\":\"广州\"},{\"options\":\"员工4\",\"optionsValue\":\"员工4\",\"enable\":\"员工4\",\"change\":\"员工4\",\"create\":\"天津\",\"dynamic\":\"天津\"},{\"options\":\"员工5\",\"create\":\"河北\",\"dynamic\":\"河北\"}]","limit":20,"xid":"selectData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"changeValue":{"define":"changeValue","label":"改变值","name":"changeValue","relation":"changeValue","type":"String"},"dynamic":{"define":"dynamic","label":"动态","name":"dynamic","relation":"dynamic","type":"String"},"optionsValue":{"define":"optionsValue","label":"值","name":"optionsValue","relation":"optionsValue","type":"String"},"sample":{"define":"sample","label":"简单","name":"sample","relation":"sample","type":"String"},"selectOne":{"define":"selectOne","label":"下拉框1","name":"selectOne","relation":"selectOne","type":"String"},"selectTwo":{"define":"selectTwo","label":"下拉框2","name":"selectTwo","relation":"selectTwo","type":"String"}},"directDelete":false,"events":{},"idColumn":"optionsValue","initData":"[{\"changeValue\":\"\",\"dynamic\":\"\",\"selectTwo\":\"员工2\"}]","limit":20,"xid":"valueData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
