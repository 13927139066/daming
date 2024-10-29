"use strict";
cc._RF.push(module, 'c0885UakEpDfKv50U/v34Q/', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameUiTools = {
  setSpriteFrame: function setSpriteFrame(spriteName, sprite) {
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (sprite.node != null) {
        sprite.spriteFrame = spriteFrame;
      }
    });
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();
    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }
    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点
      clickEventHandler.component = component.node.name; //这个是代码文件名
      clickEventHandler.handler = handler;
      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }
      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);
      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      }
    }
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

cc._RF.pop();