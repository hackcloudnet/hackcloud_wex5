window.__justep.__ResourceEngine.loadCss([{url: '/v_1f2eb827402c4d8d8f0c295222cc546bl_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_32ed1e38d25e48baa9ddfa80b2e04366l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_b1c398f2095341a5ada6c1a7610ee408l_zh_CNs_desktopd_pc/system/core.min.js','/v_a8b2528cf4214c3e8a59116a1578f574l_zh_CNs_desktopd_pc/system/common.min.js','/v_6d0b8c3dd56e415685472daca1e7d297l_zh_CNs_desktopd_pc/system/components/comp.min.js','/v_87c63ba02a1c47b6b9f5ccc671448404l_zh_CNs_desktopd_pc/system/components/pc.addon.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pcSample/grid/grouping-widthAdaptive'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbmyimu';
	this._flag_='4f8a8f9591b7cabbc06891fc461ce50d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"dept":{"define":"dept","label":"部门","name":"dept","relation":"dept","type":"String"},"enducation":{"define":"enducation","label":"学历","name":"enducation","relation":"enducation","type":"String"},"name":{"define":"name","label":"姓名","name":"name","relation":"name","type":"String"},"sex":{"define":"sex","label":"性别","name":"sex","relation":"sex","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"employeeDataCustomRefresh"},"idColumn":"name","limit":20,"xid":"employeeData"});
}}); 
return __result;});
