"use strict";
cc._RF.push(module, '88f8fhtf7xH87nhaVzumEAM', 'ShopPanel');
// Script/panel/ShopPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: {
      "default": null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    shopItemPrefab: {
      "default": null,
      type: cc.Prefab,
      displayName: "商品节点"
    },
    showContent: {
      "default": null,
      type: cc.Node,
      displayName: "显示商品内容"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    this.setMoney();
    this.init(0);
    var i = 1;
    this.schedule(function () {
      _this.init(i++);
    }, 0.5, 5, 0.5);
  },
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.closebtn, "buttonFunc");
  },
  init: function init(count) {
    for (var i = count * 6; i < count * 6 + 6; i++) {
      var shopItem = cc.instantiate(this.shopItemPrefab);
      shopItem.getComponent('ShopItemList').initItem(i + 1);
      this.showContent.addChild(shopItem, i, "shopItem");
    }
  },
  closePanel: function closePanel() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.closebtn == button) {
      this.closePanel();
    }
  },
  setMoney: function setMoney() {
    this.moneyLabel.string = GameTools.getNumberString(GameConfig.GameMoney);
  },
  update: function update(dt) {
    this.setMoney();
  }
});

cc._RF.pop();