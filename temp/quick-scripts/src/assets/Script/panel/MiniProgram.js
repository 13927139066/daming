"use strict";
cc._RF.push(module, 'c633dGipg5GwLP5E7pNhJN2', 'MiniProgram');
// Script/panel/MiniProgram.js

"use strict";

var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    iconSprite: cc.Sprite,
    nameLabel: cc.Label
  },
  start: function start() {},
  init: function init(data) {
    this.appId = data.appId;
    this.path = data.path;
    GameTools.createImageApp(data.icon, this.iconSprite);
    this.nameLabel.string = data.name;
  },
  navigateToMiniProgram: function navigateToMiniProgram() {
    GameTools.playSimpleAudioEngine(3);
    GameTools.navigateToMiniProgram(this.appId, this.path);
  }
});

cc._RF.pop();