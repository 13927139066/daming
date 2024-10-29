"use strict";
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