<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="position:absolute;;left:86.0px;top:170.0px"
    onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/wing/wing" class="x-wing x-wing-xs"
    xid="wing" routable="false" display="push"> 
    <div class="x-wing-left" xid="left"/>  
    <div class="x-wing-content" xid="conter"> 
      <div class="x-wing-backdrop" xid="div1"/>  
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="pages" swipe="false" slidable="true">
        <div class="x-contents-content" xid="main">
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="windowContainer1" src="./main/main.w"/>
        </div>
      </div> 
    </div> 
  </div> 
</div>
