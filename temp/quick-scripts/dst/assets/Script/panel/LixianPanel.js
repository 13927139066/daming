
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/LixianPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd25e8oFlaBLrJwnyPHapWnN', 'LixianPanel');
// Script/panel/LixianPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameUiTools = require("GameUiTools");
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
    this.speed = GameConfig.main.getMoneySpeed();
    var nowTime = new Date().getTime();
    var lastGameTime = GameTools.getItemByLocalStorage("lastTime", 0);
    var offLineTime = Math.floor((nowTime - lastGameTime) / 6000);
    if (offLineTime <= 1000 * 60 * 30) {
      this.num = Math.floor(this.speed * offLineTime);
    } else if (offLineTime <= 1000 * 60 * 60 * 2) {
      this.num = Math.floor(this.speed * offLineTime * 0.5);
    } else {
      this.num = Math.floor(this.speed * offLineTime * 0.3);
    }
    this.moneylabel.string = this.num + "铜钱";
  },
  closeClick: function closeClick() {
    this.node.destroy();
    GameConfig.main.setGameMoney();
  },
  doubletakeClick: function doubletakeClick() {
    GameTools.playSimpleAudioEngine(3);
    var self = this;
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        GameConfig.GameMoney += self.num * 3;
        self.closeClick();
      }
    });
  },
  takeClick: function takeClick() {
    GameTools.playSimpleAudioEngine(3);
    GameConfig.GameMoney += this.num;
    this.closeClick();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTGl4aWFuUGFuZWwuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uZXlsYWJlbCIsInR5cGUiLCJMYWJlbCIsImRpc3BsYXlOYW1lIiwibnVtIiwic3RhcnQiLCJvbkxvYWQiLCJzcGVlZCIsIm1haW4iLCJnZXRNb25leVNwZWVkIiwibm93VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibGFzdEdhbWVUaW1lIiwiZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwib2ZmTGluZVRpbWUiLCJNYXRoIiwiZmxvb3IiLCJzdHJpbmciLCJjbG9zZUNsaWNrIiwibm9kZSIsImRlc3Ryb3kiLCJzZXRHYW1lTW9uZXkiLCJkb3VibGV0YWtlQ2xpY2siLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJzZWxmIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3IiwiR2FtZU1vbmV5IiwidGFrZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBQztNQUNQLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sS0FBSztNQUNiQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEQyxHQUFHLEVBQUM7RUFDUixDQUFDO0VBQ0RDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBQUMsQ0FBQztFQUNYQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHZixVQUFVLENBQUNnQixJQUFJLENBQUNDLGFBQWEsRUFBRTtJQUM1QyxJQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRTtJQUNsQyxJQUFJQyxZQUFZLEdBQUdsQixTQUFTLENBQUNtQixxQkFBcUIsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLElBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ1AsT0FBTyxHQUFHRyxZQUFZLElBQUUsSUFBSSxDQUFDO0lBRTNELElBQUdFLFdBQVcsSUFBSSxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQztNQUN6QixJQUFJLENBQUNYLEdBQUcsR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDVixLQUFLLEdBQUdRLFdBQVcsQ0FBQztJQUNuRCxDQUFDLE1BQUssSUFBR0EsV0FBVyxJQUFJLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsRUFBQztNQUNqQyxJQUFJLENBQUNYLEdBQUcsR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDVixLQUFLLEdBQUdRLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQyxNQUFJO01BQ0QsSUFBSSxDQUFDWCxHQUFHLEdBQUdZLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ1YsS0FBSyxHQUFHUSxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pEO0lBQ0EsSUFBSSxDQUFDZixVQUFVLENBQUNrQixNQUFNLEdBQUcsSUFBSSxDQUFDZCxHQUFHLEdBQUMsSUFBSTtFQUMxQyxDQUFDO0VBRURlLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtJQUNuQjdCLFVBQVUsQ0FBQ2dCLElBQUksQ0FBQ2MsWUFBWSxFQUFFO0VBQ2xDLENBQUM7RUFFREMsZUFBZSxXQUFBQSxnQkFBQSxFQUFFO0lBQ2I1QixTQUFTLENBQUM2QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSUMsSUFBSSxHQUFHLElBQUk7SUFDZjlCLFNBQVMsQ0FBQytCLGNBQWMsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7TUFDcEMsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLElBQUlELEdBQUcsQ0FBQ0UsR0FBRyxFQUFFO1FBQ3hCckMsVUFBVSxDQUFDc0MsU0FBUyxJQUFJTCxJQUFJLENBQUNyQixHQUFHLEdBQUMsQ0FBQztRQUNsQ3FCLElBQUksQ0FBQ04sVUFBVSxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEWSxTQUFTLFdBQUFBLFVBQUEsRUFBRTtJQUNQcEMsU0FBUyxDQUFDNkIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDaEMsVUFBVSxDQUFDc0MsU0FBUyxJQUFJLElBQUksQ0FBQzFCLEdBQUc7SUFDaEMsSUFBSSxDQUFDZSxVQUFVLEVBQUU7RUFDckIsQ0FBQyxDQUNEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb25leWxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSseaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIG51bTowLFxuICAgIH0sXG4gICAgc3RhcnQgKCkge30sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IEdhbWVDb25maWcubWFpbi5nZXRNb25leVNwZWVkKCk7XG4gICAgICAgIGxldCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBsYXN0R2FtZVRpbWUgPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwibGFzdFRpbWVcIiwwKTtcbiAgICAgICAgbGV0IG9mZkxpbmVUaW1lID0gTWF0aC5mbG9vcigobm93VGltZSAtIGxhc3RHYW1lVGltZSkvNjAwMCk7XG4gICAgICAgIFxuICAgICAgICBpZihvZmZMaW5lVGltZSA8PSAxMDAwKjYwKjMwKXtcbiAgICAgICAgICAgIHRoaXMubnVtID0gTWF0aC5mbG9vcih0aGlzLnNwZWVkICogb2ZmTGluZVRpbWUpO1xuICAgICAgICB9ZWxzZSBpZihvZmZMaW5lVGltZSA8PSAxMDAwKjYwKjYwKjIpe1xuICAgICAgICAgICAgdGhpcy5udW0gPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQgKiBvZmZMaW5lVGltZSAqIDAuNSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5udW0gPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQgKiBvZmZMaW5lVGltZSAqIDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25leWxhYmVsLnN0cmluZyA9IHRoaXMubnVtK1wi6ZOc6ZKxXCI7XG4gICAgfSxcblxuICAgIGNsb3NlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVNb25leSgpO1xuICAgIH0sXG5cbiAgICBkb3VibGV0YWtlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBHYW1lVG9vbHMuX2NyZWF0ZVZlZGlvQWQoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5pc0VuZGVkIHx8IHJlcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVNb25leSArPSBzZWxmLm51bSozO1xuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2VDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdGFrZUNsaWNrKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IHRoaXMubnVtO1xuICAgICAgICB0aGlzLmNsb3NlQ2xpY2soKTtcbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=