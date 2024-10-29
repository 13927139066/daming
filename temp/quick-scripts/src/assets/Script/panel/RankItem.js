"use strict";
cc._RF.push(module, 'dd553fmL+BGfJ9idSJ4ApIP', 'RankItem');
// Script/panel/RankItem.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  name: "RankItem",
  properties: {
    backSprite: cc.Node,
    rankImage: cc.Sprite,
    rankLabel: cc.Label,
    avatarImgSprite: cc.Sprite,
    nickLabel: cc.Label,
    topScoreLabel: cc.Label,
    levelName: cc.Label
  },
  start: function start() {},
  init: function init(rank, data) {
    var _this = this;
    var avatarUrl = data.url;
    // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
    var nick = data.nick;
    var grade = data.score;
    var level = data.a1;
    if (rank < 3) {
      this.rankLabel.node.active = false;
      this.rankImage.node.active = true;
      cc.loader.loadRes("r" + (rank + 1), cc.SpriteFrame, function (err, spriteFrame) {
        _this.rankImage.spriteFrame = spriteFrame;
      });
    } else {
      this.rankLabel.string = (rank + 1).toString();
    }
    this.createImage(avatarUrl);
    this.nickLabel.string = nick;
    // this.topScoreLabel.string = grade.toString();
    this.topScoreLabel.string = GameTools.getNumberString(grade);
    if (level) {
      if (level > 42) {
        this.levelName.string = GameConfig.perName[0];
      } else this.levelName.string = GameConfig.perName[level - 1];
    } else {
      this.levelName.string = GameConfig.perName[0];
    }
  },
  createImage: function createImage(avatarUrl) {
    var _this2 = this;
    cc.loader.load({
      url: avatarUrl,
      type: 'jpg'
    }, function (err, texture) {
      _this2.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
    });
  }
});

cc._RF.pop();