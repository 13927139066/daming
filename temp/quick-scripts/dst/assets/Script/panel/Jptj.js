
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/Jptj.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba416ulXmVIiJOk9cVN+oUy', 'Jptj');
// Script/panel/Jptj.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    miniProgramItemPrb: cc.Prefab,
    // titleLabel : cc.Label,  
    tip: cc.Label
  },
  onLoad: function onLoad() {
    if (GameConfig.boxApps.length == 0) {
      this.tip.node.active = true;
    }
    console.log(GameConfig.boxApps.length);
    for (var i = 0; i < GameConfig.boxApps.length; i++) {
      var item = cc.instantiate(this.miniProgramItemPrb);
      item.getComponent("MiniProgram").init(GameConfig.boxApps[i]);
      this.content.addChild(item);
    }
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
    GameConfig.main.jptj.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcSnB0ai5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJtaW5pUHJvZ3JhbUl0ZW1QcmIiLCJQcmVmYWIiLCJ0aXAiLCJMYWJlbCIsIm9uTG9hZCIsImJveEFwcHMiLCJsZW5ndGgiLCJub2RlIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsImkiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiYWRkQ2hpbGQiLCJjbG9zZSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImRlc3Ryb3kiLCJtYWluIiwianB0aiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBR0osRUFBRSxDQUFDSyxJQUFJO0lBQ2pCQyxrQkFBa0IsRUFBR04sRUFBRSxDQUFDTyxNQUFNO0lBQzlCO0lBQ0FDLEdBQUcsRUFBSVIsRUFBRSxDQUFDUztFQUNkLENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFBLEVBQUU7SUFDSixJQUFHYixVQUFVLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBQztNQUM5QixJQUFJLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUMvQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFDdEMsS0FBSSxJQUFJSyxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUNwQixVQUFVLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFSyxDQUFDLEVBQUUsRUFBQztNQUMxQyxJQUFJQyxJQUFJLEdBQUdsQixFQUFFLENBQUNtQixXQUFXLENBQUMsSUFBSSxDQUFDYixrQkFBa0IsQ0FBQztNQUNsRFksSUFBSSxDQUFDRSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUNDLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ2MsT0FBTyxDQUFDTSxDQUFDLENBQUMsQ0FBQztNQUM1RCxJQUFJLENBQUNiLE9BQU8sQ0FBQ2tCLFFBQVEsQ0FBQ0osSUFBSSxDQUFDO0lBQy9CO0VBQ0osQ0FBQztFQUVESyxLQUFLLEVBQUcsU0FBQUEsTUFBQSxFQUFVO0lBQ2R4QixTQUFTLENBQUN5QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDWCxJQUFJLENBQUNZLE9BQU8sRUFBRTtJQUNuQjVCLFVBQVUsQ0FBQzZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDYixNQUFNLEdBQUcsSUFBSTtFQUN0QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvbnRlbnQgOiBjYy5Ob2RlLFxuICAgICAgICBtaW5pUHJvZ3JhbUl0ZW1QcmIgOiBjYy5QcmVmYWIsXG4gICAgICAgIC8vIHRpdGxlTGFiZWwgOiBjYy5MYWJlbCwgIFxuICAgICAgICB0aXAgIDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGlmKEdhbWVDb25maWcuYm94QXBwcy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICB0aGlzLnRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coR2FtZUNvbmZpZy5ib3hBcHBzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPEdhbWVDb25maWcuYm94QXBwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWluaVByb2dyYW1JdGVtUHJiKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiTWluaVByb2dyYW1cIikuaW5pdChHYW1lQ29uZmlnLmJveEFwcHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLmpwdGouYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59KTtcbiJdfQ==