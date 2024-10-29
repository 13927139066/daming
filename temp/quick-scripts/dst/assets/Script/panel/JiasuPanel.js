
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/JiasuPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11f69zmTQlOLKd+DTsp3N7o', 'JiasuPanel');
// Script/panel/JiasuPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: cc.Node,
    sharebtn: cc.Node,
    videobtn: cc.Node
  },
  start: function start() {},
  onLoad: function onLoad() {
    window.cp = this;
  },
  shareClick: function shareClick() {
    GameTools.playSimpleAudioEngine(3);
    if (GameConfig.GameCoin < 10) {
      console.log("你的元宝不够");
    } else {
      GameConfig.GameCoin -= 10;
      this.closeClick();
      GameConfig.main.setGameCoin();
      GameConfig.main.gameDouble(60);
    }
  },
  videoClick: function videoClick() {
    GameTools.playSimpleAudioEngine(3);
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        window.cp.node.destroy();
        GameConfig.main.gameDouble(200);
      }
    });
  },
  closeClick: function closeClick() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  } // update (dt) {},
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcSmlhc3VQYW5lbC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2xvc2VidG4iLCJOb2RlIiwic2hhcmVidG4iLCJ2aWRlb2J0biIsInN0YXJ0Iiwib25Mb2FkIiwid2luZG93IiwiY3AiLCJzaGFyZUNsaWNrIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiR2FtZUNvaW4iLCJjb25zb2xlIiwibG9nIiwiY2xvc2VDbGljayIsIm1haW4iLCJzZXRHYW1lQ29pbiIsImdhbWVEb3VibGUiLCJ2aWRlb0NsaWNrIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3Iiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUVwQ0UsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNoQkMsUUFBUSxFQUFDTixFQUFFLENBQUNLLElBQUk7SUFDaEJFLFFBQVEsRUFBQ1AsRUFBRSxDQUFDSztFQUNoQixDQUFDO0VBQ0RHLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUNEQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOQyxNQUFNLENBQUNDLEVBQUUsR0FBRyxJQUFJO0VBQ3BCLENBQUM7RUFFREMsVUFBVSxXQUFBQSxXQUFBLEVBQUU7SUFDUmIsU0FBUyxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBR2hCLFVBQVUsQ0FBQ2lCLFFBQVEsR0FBRSxFQUFFLEVBQUM7TUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDLE1BQUk7TUFDRG5CLFVBQVUsQ0FBQ2lCLFFBQVEsSUFBSSxFQUFFO01BQ3pCLElBQUksQ0FBQ0csVUFBVSxFQUFFO01BQ2pCcEIsVUFBVSxDQUFDcUIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDN0J0QixVQUFVLENBQUNxQixJQUFJLENBQUNFLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDbEM7RUFDSixDQUFDO0VBQ0RDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1J0QixTQUFTLENBQUNjLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsQ2QsU0FBUyxDQUFDdUIsY0FBYyxDQUFDLFVBQVVDLEdBQUcsRUFBRTtNQUNwQyxJQUFJQSxHQUFHLENBQUNDLE9BQU8sSUFBSUQsR0FBRyxDQUFDRSxHQUFHLEVBQUU7UUFDeEJmLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDZSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN4QjlCLFVBQVUsQ0FBQ3FCLElBQUksQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDREgsVUFBVSxXQUFBQSxXQUFBLEVBQUU7SUFDUmxCLFNBQVMsQ0FBQ2MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ2EsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNsb3NlYnRuOmNjLk5vZGUsXG4gICAgICAgIHNoYXJlYnRuOmNjLk5vZGUsXG4gICAgICAgIHZpZGVvYnRuOmNjLk5vZGUsXG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNoYXJlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5HYW1lQ29pbiA8MTApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvaDnmoTlhYPlrp3kuI3lpJ9cIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiAtPSAxMDtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDbGljaygpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVDb2luKCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLm1haW4uZ2FtZURvdWJsZSg2MCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHZpZGVvQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgR2FtZVRvb2xzLl9jcmVhdGVWZWRpb0FkKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNwLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5nYW1lRG91YmxlKDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xvc2VDbGljaygpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19