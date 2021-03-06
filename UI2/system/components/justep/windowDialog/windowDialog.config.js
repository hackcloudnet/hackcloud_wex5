/*! 
* WeX5 v3 (http://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
/**
 *  properties type: string, number, boolean, array, object
 *  binds: key是DOM上的属性名称, value是收集到component中的名称

 */
define(function(require){
	return {
		properties: {
			src: "string",
			process: "string",
			activity: "string",
			showTitle: "boolean",
			forceRefreshOnOpen: "boolean",
			title: "string",
			status: "string",
			width: "string",
			height: "string",
			top: "string",
			left: "string",
			routable:"boolean",
			resizable:"boolean"
		},
		events:["onLoad", "onSend", "onOpen", "onClose", "onReceive", "onLoadError", "onReceived"],
		binds:{}
	};
});