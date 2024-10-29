"use strict";
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