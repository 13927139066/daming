"use strict";
cc._RF.push(module, '98155fIsX5PzbBTLcSvAMUr', 'TurnTable');
// Script/panel/TurnTable.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    freeCJBtn: cc.Node,
    turnTable: {
      "default": null,
      type: cc.Node,
      displayName: "转盘"
    },
    turnNum: cc.Label
  },
  start: function start() {},
  onLoad: function onLoad() {
    this.isClick = false;
    this.isTurning = false;
    this.lastAngle = 0;
    window.cp = this;
    GameConfig.turnTableNum = GameTools.getItemByLocalStorage("turnNum", 3);
    this.turnCount();
  },
  vedioCJ: function vedioCJ() {
    GameTools.playSimpleAudioEngine(3);
    if (this.isTurning) {
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('视频抽奖',{'key' : 'value'});
    }
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        GameConfig.turnTableNum += 2;
        window.cp.turnCount();
      }
    });
  },
  cjAction: function cjAction(callback) {
    // if(cc.sys.platform === cc.sys.WECHAT_GAME){
    //     wx.aldSendEvent('启动转盘',{'key' : 'value'})
    // }
    this.isClick = true;
    this.isTurning = true;
    //概率出结果
    var thanks = [0, 120, 240]; //金钱
    var coins = [60, 300]; //元宝
    var cards = [180]; //人
    var type;
    var num;
    var angle;
    var random = Math.random();
    if (random < 0.08) {
      angle = cards[0];
    } else if (random < 0.20) {
      type = 'coin';
      num = GameConfig.buyCoinUpgrade[GameConfig.GamePersonMaxLevel + 1] * 2;
      angle = coins[1];
    } else if (random < 0.35) {
      type = 'coin';
      num = GameConfig.buyCoinUpgrade[GameConfig.GamePersonMaxLevel + 1] * 4;
      angle = coins[0];
    } else if (0.7) {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 4;
      angle = thanks[1];
    } else if (0.8) {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
      angle = thanks[0];
    } else {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 6;
      angle = thanks[2];
    }
    var _this = this;
    var clickTimes = 6;
    var rounds = 10;
    var rotateBy = cc.rotateBy(clickTimes, this.lastAngle - (angle + 360 * rounds));
    var actionStep = _this.turnTable.runAction(rotateBy).easing(cc.easeCubicActionOut(clickTimes));
    this.scheduleOnce(function () {
      this.lastAngle = angle;
      callback && callback();
      console.log(type + " : " + num);
      this.isTurning = false;
      if (type == undefined) {
        GameTools.showToast('获得' + GameConfig.perName[GameConfig.GamePersonMaxLevel - 1]);
        GameConfig.main.addDeskSpriteByLevel(GameConfig.GamePersonMaxLevel);
      } else {
        if (type == 'coin') {
          GameTools.showToast("获得" + num + "元宝");
          GameConfig.GameCoin += num;
          GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
          GameConfig.main.setGameCoin();
        } else {
          GameTools.showToast("获得" + num + "铜钱");
          GameConfig.GameMoney += num;
          GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
          GameConfig.main.setGameMoney();
        }
      }
    }, 6);
  },
  freeCJ: function freeCJ() {
    GameTools.playSimpleAudioEngine(3);
    if (this.isTurning) {
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('抽奖',{'key' : 'value'});
    }
    if (GameConfig.turnTableNum < 1) {
      GameTools.showToast("暂无抽奖机会哦");
      return;
    }
    this.cjAction(function () {
      GameConfig.turnTableNum--;
      window.cp.turnCount();
    });
  },
  //抽奖次数的变动
  turnCount: function turnCount() {
    window.cp.turnNum.string = GameConfig.turnTableNum;
    GameTools.setItemByLocalStorage("turnNum", GameConfig.turnTableNum);
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  }
});

cc._RF.pop();