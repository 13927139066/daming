"use strict";
cc._RF.push(module, '1ce59Jg/9JNU52zLtP8+4EV', 'ShopItemList');
// Script/panel/ShopItemList.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    persion: {
      "default": null,
      type: cc.Node,
      displayName: "人物"
    },
    level: {
      "default": null,
      type: cc.Node,
      displayName: "人物等级"
    },
    perName: {
      "default": null,
      type: cc.Label,
      displayName: "角色名"
    },
    coinNode: {
      "default": null,
      type: cc.Node,
      displayName: "元宝"
    },
    moneytbtn: {
      "default": null,
      type: cc.Node,
      displayName: "金钱购买按钮"
    },
    unlock: {
      "default": null,
      type: cc.Sprite,
      displayName: "解锁"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    },
    unpersion: {
      "default": null,
      type: cc.Node,
      displayName: "解锁的小人"
    },
    number: 1
  },
  initItem: function initItem(number) {
    console.log(this);
    this.number = number;
    this.showItemList();
  },
  coinButtonFunc: function coinButtonFunc() {
    if (GameConfig.main.buyCoinFunc(this.number)) {
      console.log("元宝成功购买");
      this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
    }
  },
  showItemList: function showItemList() {
    this.level.getComponent('Number').showNumber(this.number);
    GameUiTools.setSpriteFrame("persion/LV" + this.number, this.persion.getComponent(cc.Sprite));
    if (this.number <= GameConfig.GamePersonMaxLevel) {
      this.persion.color = cc.Color.WHITE;
      this.perName.string = GameConfig.perName[this.number - 1];
      if (this.number == 1 || this.number <= GameConfig.GamePersonMaxLevel - 4) {
        GameUiTools.setSpriteFrame("shop/qb", this.unlock);
        this.moneyLabel.node.active = true;
        this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
        GameUiTools.setButtonClickEvents(this, this.moneytbtn, "buyButtonFunc");
      } else {
        this.unpersion.active = true;
        if (this.number <= GameConfig.GamePersonMaxLevel - 2) {
          this.coinNode.active = true;
          this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
          //显示元宝的购买价格
          GameUiTools.setButtonClickEvents(this, this.coinNode, "coinButtonFunc");
        }
      }
    } else {
      this.persion.color = cc.Color.BLACK;
      this.perName.string = "??";
      this.unpersion.active = true;
    }
  },
  buyButtonFunc: function buyButtonFunc() {
    if (GameConfig.main.bugGoldFunc(this.number)) {
      console.log("购买成功");
      this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
    }
  }
});

cc._RF.pop();