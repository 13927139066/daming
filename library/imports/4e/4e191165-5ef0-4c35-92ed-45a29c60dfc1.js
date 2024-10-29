"use strict";
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