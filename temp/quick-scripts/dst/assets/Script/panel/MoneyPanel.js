
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/MoneyPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e191FlXvBMNZLtRaKcYN/B', 'MoneyPanel');
// Script/panel/MoneyPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    moneylabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱数"
    },
    num: 0
  },
  start: function start() {},
  onLoad: function onLoad() {
    this.moneylabel.string = Math.floor(GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2);
  },
  closeClick: function closeClick() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  doubletakeClick: function doubletakeClick() {
    GameTools.playSimpleAudioEngine(3);
    GameConfig.shareComponent = this;
    GameTools.sharePicture();
    GameConfig.shareTime = new Date().getTime();
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameMoney += GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
    GameConfig.main.setGameMoney();
    this.closeClick();
    GameTools.showToast('获得' + GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2 + '铜钱');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTW9uZXlQYW5lbC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uZXlsYWJlbCIsInR5cGUiLCJMYWJlbCIsImRpc3BsYXlOYW1lIiwibnVtIiwic3RhcnQiLCJvbkxvYWQiLCJzdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJidXlHb2xkVXBncmFkZSIsIkdhbWVQZXJzb25NYXhMZXZlbCIsImNsb3NlQ2xpY2siLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsImRvdWJsZXRha2VDbGljayIsInNoYXJlQ29tcG9uZW50Iiwic2hhcmVQaWN0dXJlIiwic2hhcmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzaGFyZVN1Y2Nlc3MiLCJHYW1lTW9uZXkiLCJtYWluIiwic2V0R2FtZU1vbmV5Iiwic2hvd1RvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcENFLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pDLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxLQUFLO01BQ2JDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RDLEdBQUcsRUFBQztFQUNSLENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FBQyxDQUFDO0VBQ1hDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ04sSUFBSSxDQUFDTixVQUFVLENBQUNPLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNoQixVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsQ0FBQztFQUNuRyxDQUFDO0VBQ0RDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1JqQixTQUFTLENBQUNrQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QixDQUFDO0VBQ0RDLGVBQWUsV0FBQUEsZ0JBQUEsRUFBRTtJQUNickIsU0FBUyxDQUFDa0IscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDcEIsVUFBVSxDQUFDd0IsY0FBYyxHQUFHLElBQUk7SUFDaEN0QixTQUFTLENBQUN1QixZQUFZLEVBQUU7SUFDeEJ6QixVQUFVLENBQUMwQixTQUFTLEdBQUksSUFBSUMsSUFBSSxFQUFFLENBQUVDLE9BQU8sRUFBRTtFQUNqRCxDQUFDO0VBQ0RDLFlBQVksV0FBQUEsYUFBQSxFQUFFO0lBQ1Y3QixVQUFVLENBQUM4QixTQUFTLElBQUk5QixVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUM7SUFDbEZsQixVQUFVLENBQUMrQixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUM5QixJQUFJLENBQUNiLFVBQVUsRUFBRTtJQUNqQmpCLFNBQVMsQ0FBQytCLFNBQVMsQ0FBQyxJQUFJLEdBQUNqQyxVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7RUFDN0YsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb25leWxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSseaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIG51bTowLFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7fSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm1vbmV5bGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSoyKTtcbiAgICB9LFxuICAgIGNsb3NlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGRvdWJsZXRha2VDbGljaygpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICBHYW1lQ29uZmlnLnNoYXJlVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgfSxcbiAgICBzaGFyZVN1Y2Nlc3MoKXtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgKz0gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbF0qMjtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVNb25leSgpO1xuICAgICAgICB0aGlzLmNsb3NlQ2xpY2soKTtcbiAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn6I635b6XJytHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSoyKyfpk5zpkrEnKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==