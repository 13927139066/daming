
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/NewPersion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '571afPXn1lOrogD+XxkAQQi', 'NewPersion');
// Script/panel/NewPersion.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    colsebtn: {
      "default": null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    clickbtn: {
      "default": null,
      type: cc.Node,
      displayName: "确定按钮"
    },
    persion: {
      "default": null,
      type: cc.Sprite,
      displayName: "人物"
    },
    persionName: {
      "default": null,
      type: cc.Label,
      displayName: "人物名称"
    },
    tip: {
      "default": null,
      type: cc.Node,
      displayName: "提示字"
    }
  },
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.colsebtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.clickbtn, "btnFunc");
  },
  onLoad: function onLoad() {
    GameUiTools.setSpriteFrame("persion/LV" + GameConfig.GamePersonMaxLevel, this.persion);
    this.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
    if (!GameConfig.IS_GAME_SHARE) {
      this.tip.active = false;
    }
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameMoney += GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
    GameConfig.main.setGameMoney();
    this.colsePanel();
    GameTools.showToast('获得' + GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2 + '铜钱');
  },
  btnFunc: function btnFunc(event) {
    GameTools.playSimpleAudioEngine(3);
    var button = event.target;
    if (this.colsebtn == button) {
      this.colsePanel();
    } else if (this.clickbtn == button) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    }
  },
  colsePanel: function colsePanel() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTmV3UGVyc2lvbi5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb2xzZWJ0biIsInR5cGUiLCJOb2RlIiwiZGlzcGxheU5hbWUiLCJjbGlja2J0biIsInBlcnNpb24iLCJTcHJpdGUiLCJwZXJzaW9uTmFtZSIsIkxhYmVsIiwidGlwIiwic3RhcnQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIm9uTG9hZCIsInNldFNwcml0ZUZyYW1lIiwiR2FtZVBlcnNvbk1heExldmVsIiwic3RyaW5nIiwicGVyTmFtZSIsIklTX0dBTUVfU0hBUkUiLCJhY3RpdmUiLCJzaGFyZVN1Y2Nlc3MiLCJHYW1lTW9uZXkiLCJidXlHb2xkVXBncmFkZSIsIm1haW4iLCJzZXRHYW1lTW9uZXkiLCJjb2xzZVBhbmVsIiwic2hvd1RvYXN0IiwiYnRuRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiYnV0dG9uIiwidGFyZ2V0Iiwic2hhcmVDb21wb25lbnQiLCJzaGFyZVBpY3R1cmUiLCJzaGFyZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBRXhDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQztNQUNMLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEQyxRQUFRLEVBQUM7TUFDTCxXQUFRLElBQUk7TUFDWkgsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREUsT0FBTyxFQUFDO01BQ0osV0FBUSxJQUFJO01BQ1pKLElBQUksRUFBQ0wsRUFBRSxDQUFDVSxNQUFNO01BQ2RILFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RJLFdBQVcsRUFBQztNQUNSLFdBQVEsSUFBSTtNQUNaTixJQUFJLEVBQUNMLEVBQUUsQ0FBQ1ksS0FBSztNQUNiTCxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNETSxHQUFHLEVBQUM7TUFDQSxXQUFRLElBQUk7TUFDWlIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCO0VBRUosQ0FBQztFQUVETyxLQUFLLFdBQUFBLE1BQUEsRUFBSTtJQUNMZixXQUFXLENBQUNnQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDWCxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQ2hFTCxXQUFXLENBQUNnQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxRQUFRLEVBQUUsU0FBUyxDQUFDO0VBQ3BFLENBQUM7RUFDRFEsTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFDTmpCLFdBQVcsQ0FBQ2tCLGNBQWMsQ0FBQyxZQUFZLEdBQUdyQixVQUFVLENBQUNzQixrQkFBa0IsRUFBRSxJQUFJLENBQUNULE9BQU8sQ0FBQztJQUN0RixJQUFJLENBQUNFLFdBQVcsQ0FBQ1EsTUFBTSxHQUFHdkIsVUFBVSxDQUFDd0IsT0FBTyxDQUFDeEIsVUFBVSxDQUFDc0Isa0JBQWtCLEdBQUMsQ0FBQyxDQUFDO0lBQzdFLElBQUcsQ0FBQ3RCLFVBQVUsQ0FBQ3lCLGFBQWEsRUFBQztNQUN6QixJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsTUFBTSxHQUFHLEtBQUs7SUFDM0I7RUFDSixDQUFDO0VBRURDLFlBQVksV0FBQUEsYUFBQSxFQUFFO0lBQ1YzQixVQUFVLENBQUM0QixTQUFTLElBQUk1QixVQUFVLENBQUM2QixjQUFjLENBQUM3QixVQUFVLENBQUNzQixrQkFBa0IsQ0FBQyxHQUFDLENBQUM7SUFDbEZ0QixVQUFVLENBQUM4QixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUM5QixJQUFJLENBQUNDLFVBQVUsRUFBRTtJQUNqQjlCLFNBQVMsQ0FBQytCLFNBQVMsQ0FBQyxJQUFJLEdBQUNqQyxVQUFVLENBQUM2QixjQUFjLENBQUM3QixVQUFVLENBQUNzQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7RUFDN0YsQ0FBQztFQUNEWSxPQUFPLFdBQUFBLFFBQUNDLEtBQUssRUFBQztJQUNWakMsU0FBUyxDQUFDa0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUlDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxNQUFNO0lBQ3pCLElBQUcsSUFBSSxDQUFDOUIsUUFBUSxJQUFJNkIsTUFBTSxFQUFDO01BQ3ZCLElBQUksQ0FBQ0wsVUFBVSxFQUFFO0lBQ3JCLENBQUMsTUFBSyxJQUFHLElBQUksQ0FBQ3BCLFFBQVEsSUFBSXlCLE1BQU0sRUFBQztNQUM3QnJDLFVBQVUsQ0FBQ3VDLGNBQWMsR0FBRyxJQUFJO01BQ2hDckMsU0FBUyxDQUFDc0MsWUFBWSxFQUFFO01BQ3hCeEMsVUFBVSxDQUFDeUMsU0FBUyxHQUFJLElBQUlDLElBQUksRUFBRSxDQUFFQyxPQUFPLEVBQUU7SUFDakQ7RUFDSixDQUFDO0VBRURYLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDWSxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QixDQUFDLENBQ0Q7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29sc2VidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhbPpl63mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBjbGlja2J0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuehruWumuaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHBlcnNpb246e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqVwiXG4gICAgICAgIH0sXG4gICAgICAgIHBlcnNpb25OYW1lOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqeWQjeensFwiXG4gICAgICAgIH0sXG4gICAgICAgIHRpcDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuaPkOekuuWtl1wiXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuY29sc2VidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5jbGlja2J0biwgXCJidG5GdW5jXCIpO1xuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIgKyBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCwgdGhpcy5wZXJzaW9uKTtcbiAgICAgICAgdGhpcy5wZXJzaW9uTmFtZS5zdHJpbmcgPSBHYW1lQ29uZmlnLnBlck5hbWVbR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwtMV07XG4gICAgICAgIGlmKCFHYW1lQ29uZmlnLklTX0dBTUVfU0hBUkUpe1xuICAgICAgICAgICAgdGhpcy50aXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcmVTdWNjZXNzKCl7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWxdKjI7XG4gICAgICAgIEdhbWVDb25maWcubWFpbi5zZXRHYW1lTW9uZXkoKTtcbiAgICAgICAgdGhpcy5jb2xzZVBhbmVsKCk7XG4gICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbF0qMisn6ZOc6ZKxJyk7XG4gICAgfSxcbiAgICBidG5GdW5jKGV2ZW50KXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYodGhpcy5jb2xzZWJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgdGhpcy5jb2xzZVBhbmVsKCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY2xpY2tidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZVRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbHNlUGFuZWwoKXtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=