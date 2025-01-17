"use strict";
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