
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUiTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVWlUb29scy5qcyJdLCJuYW1lcyI6WyJHYW1lVWlUb29scyIsInNldFNwcml0ZUZyYW1lIiwic3ByaXRlTmFtZSIsInNwcml0ZSIsImNjIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb21wb25lbnQiLCJtZW51IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImlzU2NhbGUiLCJhcnJheU1lbnUiLCJBcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjbGlja0V2ZW50SGFuZGxlciIsIkNvbXBvbmVudCIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsIm5hbWUiLCJidXR0b24iLCJhZGRDb21wb25lbnQiLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJzY2hlZHVsZU9uY2UiLCJjYWxsRnVuYyIsImRlbGF5IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJsb2FkaW5nU2NlbmUiLCJzY2VuZU5hbWUiLCJpc1Nob3dMYXllciIsInByZWZhYiIsImluc3RhbnRpYXRlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJwcmVsb2FkU2NlbmUiLCJsb2FkU2NlbmUiLCJsb2FkaW5nTGF5ZXIiLCJwYW5lbE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVcsR0FBRztFQUNkQyxjQUFjLEVBQUUsU0FBQUEsZUFBVUMsVUFBVSxFQUFFQyxNQUFNLEVBQUU7SUFDMUNDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNKLFVBQVUsRUFBRUUsRUFBRSxDQUFDRyxXQUFX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QVMsQ0FBQztRQUNwQyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSHhDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0ksWUFBWSxDQUFDUixTQUFTLEVBQUUsWUFBTTtRQUN0Q3hDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0ssU0FBUyxDQUFDVCxTQUFTLENBQUM7TUFDcEMsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQ0RVLFlBQVksV0FBQUEsYUFBQ0MsU0FBUyxFQUFFO0lBQUM7SUFDckJuRCxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDaUQsU0FBUyxFQUFFLFVBQUMvQyxHQUFHLEVBQUVzQyxNQUFNLEVBQUs7TUFDMUMsSUFBSSxDQUFDdEMsR0FBRyxFQUFFO1FBQ04sSUFBSUUsSUFBSSxHQUFHTixFQUFFLENBQUMyQyxXQUFXLENBQUNELE1BQU0sQ0FBQztRQUNqQzFDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDekMsSUFBSSxDQUFDO01BQ3JEO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDO0FBQ0Q4QyxNQUFNLENBQUNDLE9BQU8sR0FBR3pELFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgR2FtZVVpVG9vbHMgPSB7XHJcbiAgICBzZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIHNwcml0ZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRCdXR0b25DbGlja0V2ZW50czogZnVuY3Rpb24gKGNvbXBvbmVudCwgbWVudSwgaGFuZGxlciwgY3VzdG9tRXZlbnREYXRhLCBpc1NjYWxlKSB7XHJcbiAgICAgICAgbGV0IGFycmF5TWVudSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGlmIChtZW51Lmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYXJyYXlNZW51WzBdID0gbWVudTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXlNZW51ID0gbWVudTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU1lbnUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gY29tcG9uZW50Lm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IGNvbXBvbmVudC5ub2RlLm5hbWU7Ly/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIGlmIChtZW51Lmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGFycmF5TWVudVtpXS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBpZiAoaXNTY2FsZSA9PSB1bmRlZmluZWQgfHwgaXNTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5kdXJhdGlvbiA9IDAuMTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi56b29tU2NhbGUgPSAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2NoZWR1bGVPbmNlOiBmdW5jdGlvbiAobm9kZSwgY2FsbEZ1bmMsIGRlbGF5KSB7Ly/kuovku7bosIPluqZcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXkpLCBjYy5jYWxsRnVuYyhjYWxsRnVuYywgbm9kZSkpKTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nU2NlbmUoc2NlbmVOYW1lLCBpc1Nob3dMYXllcikgey8v5Yqg6L295Zy65pmvXHJcbiAgICAgICAgaWYgKGlzU2hvd0xheWVyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvTG9hZGluZ0xheWVyXCIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2NlbmVOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmdMYXllcihwYW5lbE5hbWUpIHsvL+WKoOi9veWbvuWxglxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhbmVsTmFtZSwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVVpVG9vbHM7Il19