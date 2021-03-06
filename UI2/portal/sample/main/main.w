<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window portal-main" component="$UI/system/components/justep/window/window">  
  <link type="text/css" rel="stylesheet" href="./main.ext.css"/>  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:75px;left:187px;"/>  
  <div component="$UI/system/components/justep/panel/panel" xid="panel1" class="x-panel">
   <div class="x-panel-top" xid="top1" style="position:fixed;top:0px;right:0px;">
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar" title="WeX5 demo" style="background-color:transparent;">
    <div class="x-titlebar-left" xid="div1">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link " xid="menuBtn" onClick="menuBtnClick" icon="icon-arrow-left-a" style="padding:5px;">
      <i xid="i1" class="icon-arrow-left-a" style="width:30px;height:30px;border:1px solid #ddd;padding:5px;border-radius:50%;"></i>
      <span xid="span1"></span></a> </div> 
    <div class="x-titlebar-title" xid="div2">WeX5 demo</div>
    <div class="x-titlebar-right reverse" xid="div3"></div></div> </div><div xid="content1"><div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel" xid="carousel1" style="height:288px;" interval="4" auto="true">
   <ol class="carousel-indicators" xid="ol1" style="margin-bottom:20px;"></ol>
   <div role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" routable="false" xid="contents1" class="x-contents carousel-inner" style="height:100%;">
    <div class="x-contents-content" xid="page1" style="height:100%;background-color:#009fde;">
     <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/1.png);" xid="div4"></div></div> 
    <div class="x-contents-content" xid="page2" style="height:100%;background: -webkit-linear-gradient(top, #62B326, #52AC26);">
     <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/2.png);" xid="div5"></div></div> 
    <div class="x-contents-content" xid="page3" style="height:100%;background: -webkit-linear-gradient(top, #2F75C8, #281C9A);">
     <div style="height:100%;background-repeat:no-repeat;background-position:center;background-image:url(./images/3.png);" xid="div6"></div></div> </div> </div>
  <div class="container" xid="div12" style="padding:0px;">
   <div component="$UI/system/components/bootstrap/row/row" class="row grid9" xid="row1" style="margin:0 auto;">
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col1">
     <div class="card borderDiv" xid="div13">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="加速传感" xid="button5" icon="linear linear-flag" onClick="openPage" url="/demo/native/accelerometer/mainActivity.w">
       <i xid="i16" class="linear linear-flag" style="color:#FF7979;"></i>
       <span xid="span16">加速传感</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col2">
     <div class="card borderDiv" xid="div14">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="地图定位" xid="button2" icon="linear linear-arrowupcircle" onClick="openPage" url="/demo/native/geolocation/mainActivity.w">
       <i xid="i3" class="linear linear-arrowupcircle" style="color:#FF80FF;"></i>
       <span xid="span53"></span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col3">
     <div class="card borderDiv" xid="div15">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " onClick="openPage" label="屏幕旋转" xid="button7" icon="linear linear-smartphone" url="/demo/plugin/screenOrientation/demo.w">
       <i xid="i8" class="linear linear-smartphone" style="color:#8080FF;"></i>
       <span xid="span8">屏幕旋转</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col4">
     <div class="card borderDiv" xid="div16">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="扫一扫" xid="button3" icon="linear linear-chevronupcircle" onClick="openPage" url="/demo/native/barcode/mainActivity.w">
       <i xid="i14" class="linear linear-chevronupcircle" style="color:#27AC20;"></i>
       <span xid="span14"></span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col5">
     <div class="card borderDiv" xid="div17">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " label="摄像头" xid="button6" icon="linear linear-filmplay" onClick="openPage" url="/demo/native/camera/mainActivity.w">
       <i xid="i7" class="linear linear-filmplay" style="color:#FF0080;"></i>
       <span xid="span7"></span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col6">
     <div class="card borderDiv" xid="div18">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="语音搜索" xid="button1" icon="linear linear-mic" onClick="openPage" url="/demo/native/voiceSearch/index.w">
       <i xid="i2" class="linear linear-mic" style="color:#00CACA;"></i>
       <span xid="span2">语音搜索</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col15">
     <div class="card borderDiv" xid="div19">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " label="音频录播" xid="button4" icon="linear linear-tag" onClick="openPage" url="/demo/native/audio/mainActivity.w">
       <i xid="i15" class="linear linear-tag" style="color:#008040;"></i>
       <span xid="span15"></span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col16">
   <div class="card borderDiv" xid="div20">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " label="消息框" xid="button11" icon="linear linear-dice" onClick="openPage" url="$UI/system/components/justep/messageDialog/demo/demo.w">
     <i xid="i5" class="linear linear-dice" style="color:#408080;"></i>
     <span xid="span5">消息框</span></a> </div> </div><div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col10">
     <div class="card borderDiv" xid="div4">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="分享" xid="button10" icon="linear linear-briefcase" onClick="openPage" url="/demo/native/share/index.w">
       <i xid="i84" class="linear linear-briefcase" style="color:#0000FF;"></i>
       <span xid="span4">分享</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col11">
     <div class="card borderDiv" xid="div5">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " label="键盘" xid="button9" icon="linear linear-map" onClick="openPage" url="/demo/native/keyboard/index.w">
       <i xid="i64" class="linear linear-map" style="color:#0080FF;"></i>
       <span xid="span73">键盘</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col12">
     <div class="card borderDiv" xid="div6">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top " label="日历" xid="button8" icon="linear linear-sun" onClick="openPage" url="/demo/plugin/calendar/demo.w">
       <i xid="i9" class="linear linear-sun" style="color:#800000;"></i>
       <span xid="span9">日历</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col13">
     <div class="card borderDiv" xid="div7">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="图片剪裁" xid="button12" icon="linear linear-construction" onClick="openPage" url="/demo/picCut/mainActivity.w">
       <i xid="i6" class="linear linear-construction" style="color:#800080;"></i>
       <span xid="span6">图片剪裁</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col9">
     <div class="card borderDiv" xid="div10">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="九宫格" xid="button15" icon="icon-grid" onClick="openPage" url="/system/components/bootstrap/row/demo/grid.w">
       <i xid="i11" class="icon-grid" style="color:#8080C0;"></i>
       <span xid="span11">九宫格</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col14">
     <div class="card borderDiv" xid="div11">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="蓝牙" xid="button16" icon="icon-bluetooth" onClick="openPage" url="/demo/plugin/BLECentral/demo.w">
       <i xid="i12" class="icon-bluetooth" style="color:#008080;"></i>
       <span xid="span12">蓝牙</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col7">
     <div class="card borderDiv" xid="div8">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="随手拍" xid="button13" icon="icon-android-hand" onClick="openPage" url="/demo/pai/main.w">
       <i xid="i4" class="icon-android-hand" style="color:#FF8000;"></i>
       <span xid="span3">随手拍</span></a> </div> </div> 
    <div class="col cell col-xs-3 col-sm-2 col-md-2 col-lg-1" xid="col8">
     <div class="card borderDiv" xid="div9">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="外卖" xid="button14" icon="icon-android-call" onClick="openPage" url="/takeout/index.w">
       <i xid="i10" class="icon-android-call" style="color:#FF0000;"></i>
       <span xid="span10">外卖</span></a> </div> </div> </div> </div></div>
   </div></div>
