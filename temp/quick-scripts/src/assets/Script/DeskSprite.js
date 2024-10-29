"use strict";
cc._RF.push(module, 'e27a6lB9LFJWqRnJmb1op53', 'DeskSprite');
// Script/DeskSprite.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var DeskSprite = cc.Class({
  "extends": cc.Component,
  properties: {
    deskSpriteSke: cc.Sprite,
    levelbg: cc.Node,
    //等级红色底片
    level: cc.Node,
    //等级字母
    number: 0,
    // 显示数字
    isSelect: false,
    expNumber: 5,
    //经验值
    showEXP: cc.Node //展示的经验
  },

  ctor: function ctor() {},
  start: function start() {
    this.schedule(function () {
      var _this = this;
      // console.log("次数")
      // 三秒一次
      if (this.number != 0) {
        this.expNumber = GameTools.getEXPNumber(this.number);
        this.showEXP.active = true;
        if (this.isSelect) {
          this.showEXP.getComponent(cc.Label).string = "+" + GameTools.getNumberString(this.expNumber) + "x2";
        } else {
          this.showEXP.getComponent(cc.Label).string = "+" + GameTools.getNumberString(this.expNumber);
        }
        this.showEXP_Pos = this.showEXP.getPosition();
        this.showEXP.runAction(cc.sequence(cc.moveBy(0.2, 0, 60), cc.fadeOut(0.2), cc.callFunc(function () {
          _this.showEXP.active = false;
          _this.showEXP.setPosition(_this.showEXP_Pos);
          _this.showEXP.opacity = 255;
        })));
        this.deskSpriteSke.node.runAction(cc.sequence(cc.scaleTo(0.2, 1, 0.9), cc.scaleTo(0.2, 1, 1)));
      }
    }, 2.5);
  },
  //合成左右摇摆
  addNumberAnim: function addNumberAnim() {
    var _this2 = this;
    var moveTime = 0.1;
    var deskNode = cc.instantiate(this.deskSpriteSke.node);
    deskNode.runAction(cc.sequence(cc.moveBy(moveTime, -70, 0), cc.delayTime(0.1), cc.moveTo(moveTime, 0, 0), cc.removeSelf()));
    this.node.addChild(deskNode);
    var deskNode2 = cc.instantiate(this.deskSpriteSke.node);
    deskNode2.runAction(cc.sequence(cc.moveBy(moveTime, 70, 0), cc.delayTime(0.1), cc.moveTo(moveTime, 0, 0), cc.callFunc(function () {
      _this2.deskShow();
    }), cc.removeSelf()));
    this.node.addChild(deskNode2);
  },
  initDesk: function initDesk(numbers, DeskSpriteX, DeskSpriteY)
  // 初始化
  {
    // 初始化数字
    this.number = numbers;
    this.deskShow();
    this.node.setPosition(DeskSpriteX, DeskSpriteY);
  },
  deskShow: function deskShow() {
    if (this.number == 0) {
      this.deskSpriteSke.node.active = false;
      this.levelbg.active = false;
      // this.level.active = false;
    } else if (this.number >= 1 && this.number <= 42) {
      this.deskSpriteSke.node.active = true;
      this.levelbg.active = true;
      // this.level.active = true;
      GameUiTools.setSpriteFrame("persion/LV" + this.number, this.deskSpriteSke);
      // this.expNumber = GameTools.getBatteryexpNumber(this.number);
      this.level.getComponent('Number').showNumber(this.number);
    }
  },
  deskClickShow: function deskClickShow(clickType) {
    if (clickType == 1) {
      this.deskSpriteSke.node.opacity = 120;
    } else {
      this.deskSpriteSke.node.opacity = 255;
    }
  }
});
module.exports = DeskSprite;

cc._RF.pop();