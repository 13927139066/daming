
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopTopLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db37aqkQ91H26X0+qd933Mv', 'ShopTopLevel');
// Script/panel/ShopTopLevel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: cc.Node,
    viedeobtn: cc.Node,
    picSprite: cc.Sprite,
    picName: cc.Label
  },
  viedeobtnFunc: function viedeobtnFunc() {
    GameTools.playSimpleAudioEngine(3);
    var math = Math.random();
    if (math < 0.5) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    } else {
      var self = this;
      GameTools._createVedioAd(function (res) {
        if (res.isEnded || res.raw) {
          self.shareSuccess();
        }
      });
    }
  },
  closebtnFunc: function closebtnFunc() {
    GameTools.playSimpleAudioEngine(3);
    // GameConfig.main.choose = false;
    GameConfig.main.bugGoldFunc(GameConfig.showPersonNumber - 1);
    this.node.destroy();
  },
  shareSuccess: function shareSuccess() {
    GameConfig.main.chooseLevel(GameConfig.showPersonNumber);
    this.node.destroy();
  },
  onLoad: function onLoad() {
    GameUiTools.setSpriteFrame("persion/LV" + GameConfig.showPersonNumber, this.picSprite);
    this.picName.string = GameConfig.perName[GameConfig.showPersonNumber - 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcFRvcExldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNsb3NlYnRuIiwiTm9kZSIsInZpZWRlb2J0biIsInBpY1Nwcml0ZSIsIlNwcml0ZSIsInBpY05hbWUiLCJMYWJlbCIsInZpZWRlb2J0bkZ1bmMiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJtYXRoIiwiTWF0aCIsInJhbmRvbSIsInNoYXJlQ29tcG9uZW50Iiwic2hhcmVQaWN0dXJlIiwic2hhcmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzZWxmIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3Iiwic2hhcmVTdWNjZXNzIiwiY2xvc2VidG5GdW5jIiwibWFpbiIsImJ1Z0dvbGRGdW5jIiwic2hvd1BlcnNvbk51bWJlciIsIm5vZGUiLCJkZXN0cm95IiwiY2hvb3NlTGV2ZWwiLCJvbkxvYWQiLCJzZXRTcHJpdGVGcmFtZSIsInN0cmluZyIsInBlck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeENHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDSixFQUFFLENBQUNLLElBQUk7SUFDaEJDLFNBQVMsRUFBQ04sRUFBRSxDQUFDSyxJQUFJO0lBQ2pCRSxTQUFTLEVBQUNQLEVBQUUsQ0FBQ1EsTUFBTTtJQUNuQkMsT0FBTyxFQUFDVCxFQUFFLENBQUNVO0VBRWYsQ0FBQztFQUVEQyxhQUFhLFdBQUFBLGNBQUEsRUFBRTtJQUNYYixTQUFTLENBQUNjLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ3hCLElBQUdGLElBQUksR0FBRyxHQUFHLEVBQUM7TUFDVmpCLFVBQVUsQ0FBQ29CLGNBQWMsR0FBRyxJQUFJO01BQ2hDbEIsU0FBUyxDQUFDbUIsWUFBWSxFQUFFO01BQ3hCckIsVUFBVSxDQUFDc0IsU0FBUyxHQUFJLElBQUlDLElBQUksRUFBRSxDQUFFQyxPQUFPLEVBQUU7SUFDakQsQ0FBQyxNQUFJO01BQ0QsSUFBSUMsSUFBSSxHQUFHLElBQUk7TUFDZnZCLFNBQVMsQ0FBQ3dCLGNBQWMsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7UUFDcEMsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLElBQUlELEdBQUcsQ0FBQ0UsR0FBRyxFQUFFO1VBQ3hCSixJQUFJLENBQUNLLFlBQVksRUFBRTtRQUN2QjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBRUosQ0FBQztFQUNEQyxZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWN0IsU0FBUyxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEM7SUFDQWhCLFVBQVUsQ0FBQ2dDLElBQUksQ0FBQ0MsV0FBVyxDQUFDakMsVUFBVSxDQUFDa0MsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDO0lBQzFELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUNETixZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWOUIsVUFBVSxDQUFDZ0MsSUFBSSxDQUFDSyxXQUFXLENBQUNyQyxVQUFVLENBQUNrQyxnQkFBZ0IsQ0FBQztJQUN4RCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ3ZCLENBQUM7RUFDREUsTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFDTm5DLFdBQVcsQ0FBQ29DLGNBQWMsQ0FBQyxZQUFZLEdBQUN2QyxVQUFVLENBQUNrQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUN2QixTQUFTLENBQUM7SUFDbkYsSUFBSSxDQUFDRSxPQUFPLENBQUMyQixNQUFNLEdBQUd4QyxVQUFVLENBQUN5QyxPQUFPLENBQUN6QyxVQUFVLENBQUNrQyxnQkFBZ0IsR0FBQyxDQUFDLENBQUM7RUFDM0UsQ0FBQyxDQUtEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjbG9zZWJ0bjpjYy5Ob2RlLFxuICAgICAgICB2aWVkZW9idG46Y2MuTm9kZSxcbiAgICAgICAgcGljU3ByaXRlOmNjLlNwcml0ZSxcbiAgICAgICAgcGljTmFtZTpjYy5MYWJlbCxcblxuICAgIH0sXG5cbiAgICB2aWVkZW9idG5GdW5jKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIGxldCBtYXRoID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgaWYobWF0aCA8IDAuNSl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBHYW1lVG9vbHMuX2NyZWF0ZVZlZGlvQWQoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgY2xvc2VidG5GdW5jKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIC8vIEdhbWVDb25maWcubWFpbi5jaG9vc2UgPSBmYWxzZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLmJ1Z0dvbGRGdW5jKEdhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlci0xKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIHNoYXJlU3VjY2Vzcygpe1xuICAgICAgICBHYW1lQ29uZmlnLm1haW4uY2hvb3NlTGV2ZWwoR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldFNwcml0ZUZyYW1lKFwicGVyc2lvbi9MVlwiK0dhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlcix0aGlzLnBpY1Nwcml0ZSk7XG4gICAgICAgIHRoaXMucGljTmFtZS5zdHJpbmcgPSBHYW1lQ29uZmlnLnBlck5hbWVbR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyLTFdXG4gICAgfSxcblxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=