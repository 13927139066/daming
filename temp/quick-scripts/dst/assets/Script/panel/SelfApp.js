
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/SelfApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e001cqjoAlLlLXXJ4g/buUF', 'SelfApp');
// Script/panel/SelfApp.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    miniProgramItemPrb: cc.Node,
    tip: cc.Label
  },
  onLoad: function onLoad() {
    var _this = this;
    if (GameConfig.selfBoxApps.length == 0) {
      this.tip.node.active = true;
    }
    console.log(GameConfig.selfBoxApps.length);
    var _loop = function _loop(i) {
      var item = cc.instantiate(_this.miniProgramItemPrb);
      var app = item.getComponent(cc.Sprite);
      GameTools.createImage(GameConfig.selfBoxApps[i].icon, app);
      item.on(cc.Node.EventType.TOUCH_START, function () {
        GameTools.navigateToMiniProgram(null, GameConfig.selfBoxApps[i].path);
      });
      item.active = true;
      _this.content.addChild(item);
    };
    for (var i = 0; i < GameConfig.selfBoxApps.length; i++) {
      _loop(i);
    }
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2VsZkFwcC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJtaW5pUHJvZ3JhbUl0ZW1QcmIiLCJ0aXAiLCJMYWJlbCIsIm9uTG9hZCIsIl90aGlzIiwic2VsZkJveEFwcHMiLCJsZW5ndGgiLCJub2RlIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsIl9sb29wIiwiaSIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImFwcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImNyZWF0ZUltYWdlIiwiaWNvbiIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJwYXRoIiwiYWRkQ2hpbGQiLCJjbG9zZSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQ0UsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUdKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNqQkMsa0JBQWtCLEVBQUdOLEVBQUUsQ0FBQ0ssSUFBSTtJQUM1QkUsR0FBRyxFQUFJUCxFQUFFLENBQUNRO0VBQ2QsQ0FBQztFQUVEQyxNQUFNLFdBQUFBLE9BQUEsRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDSixJQUFHYixVQUFVLENBQUNjLFdBQVcsQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBQztNQUNsQyxJQUFJLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUMvQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQ2MsV0FBVyxDQUFDQyxNQUFNLENBQUM7SUFBQyxJQUFBSyxLQUFBLFlBQUFBLE1BQUFDLENBQUEsRUFDTztNQUM5QyxJQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFXLENBQUNWLEtBQUksQ0FBQ0osa0JBQWtCLENBQUM7TUFDbEQsSUFBSWUsR0FBRyxHQUFHRixJQUFJLENBQUNHLFlBQVksQ0FBQ3RCLEVBQUUsQ0FBQ3VCLE1BQU0sQ0FBQztNQUN0Q3hCLFNBQVMsQ0FBQ3lCLFdBQVcsQ0FBQzNCLFVBQVUsQ0FBQ2MsV0FBVyxDQUFDTyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxFQUFDSixHQUFHLENBQUM7TUFFekRGLElBQUksQ0FBQ08sRUFBRSxDQUFDMUIsRUFBRSxDQUFDSyxJQUFJLENBQUNzQixTQUFTLENBQUNDLFdBQVcsRUFBQyxZQUFJO1FBQ3RDN0IsU0FBUyxDQUFDOEIscUJBQXFCLENBQUMsSUFBSSxFQUFDaEMsVUFBVSxDQUFDYyxXQUFXLENBQUNPLENBQUMsQ0FBQyxDQUFDWSxJQUFJLENBQUM7TUFDeEUsQ0FBQyxDQUFDO01BQ0ZYLElBQUksQ0FBQ0wsTUFBTSxHQUFHLElBQUk7TUFDbEJKLEtBQUksQ0FBQ04sT0FBTyxDQUFDMkIsUUFBUSxDQUFDWixJQUFJLENBQUM7SUFDL0IsQ0FBQztJQVZELEtBQUksSUFBSUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDckIsVUFBVSxDQUFDYyxXQUFXLENBQUNDLE1BQU0sRUFBRU0sQ0FBQyxFQUFFO01BQUFELEtBQUEsQ0FBQUMsQ0FBQTtJQUFBO0VBV3JELENBQUM7RUFFRGMsS0FBSyxFQUFHLFNBQUFBLE1BQUEsRUFBVTtJQUNkakMsU0FBUyxDQUFDa0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ3BCLElBQUksQ0FBQ3FCLE9BQU8sRUFBRTtFQUN2QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvbnRlbnQgOiBjYy5Ob2RlLFxuICAgICAgICBtaW5pUHJvZ3JhbUl0ZW1QcmIgOiBjYy5Ob2RlLCBcbiAgICAgICAgdGlwICA6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICBpZihHYW1lQ29uZmlnLnNlbGZCb3hBcHBzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMudGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhHYW1lQ29uZmlnLnNlbGZCb3hBcHBzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPEdhbWVDb25maWcuc2VsZkJveEFwcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1pbmlQcm9ncmFtSXRlbVByYik7XG4gICAgICAgICAgICBsZXQgYXBwID0gaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIEdhbWVUb29scy5jcmVhdGVJbWFnZShHYW1lQ29uZmlnLnNlbGZCb3hBcHBzW2ldLmljb24sYXBwKTtcblxuICAgICAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoKT0+e1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5uYXZpZ2F0ZVRvTWluaVByb2dyYW0obnVsbCxHYW1lQ29uZmlnLnNlbGZCb3hBcHBzW2ldLnBhdGgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiJdfQ==