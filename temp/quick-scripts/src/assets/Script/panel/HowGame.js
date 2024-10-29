"use strict";
cc._RF.push(module, '8d60ahmrI5MSqUfkleNmeSM', 'HowGame');
// Script/panel/HowGame.js

"use strict";

var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  }
});

cc._RF.pop();