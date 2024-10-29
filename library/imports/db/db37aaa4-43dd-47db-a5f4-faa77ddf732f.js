"use strict";
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