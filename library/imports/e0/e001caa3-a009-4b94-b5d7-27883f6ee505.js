"use strict";
cc._RF.push(module, 'e001cqjoAlLlLXXJ4g/buUF', 'SelfApp');
// Script/panel/SelfApp.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    miniProgramItemPrb: cc.Node,
    tip: cc.Label
  },
  onLoad: function onLoad() {
    var _this = this;
    if (GameConfig.selfBoxApps.length == 0) {
      this.tip.node.active = true;
    }
    console.log(GameConfig.selfBoxApps.length);
    var _loop = function _loop(i) {
      var item = cc.instantiate(_this.miniProgramItemPrb);
      var app = item.getComponent(cc.Sprite);
      GameTools.createImage(GameConfig.selfBoxApps[i].icon, app);
      item.on(cc.Node.EventType.TOUCH_START, function () {
        GameTools.navigateToMiniProgram(null, GameConfig.selfBoxApps[i].path);
      });
      item.active = true;
      _this.content.addChild(item);
    };
    for (var i = 0; i < GameConfig.selfBoxApps.length; i++) {
      _loop(i);
    }
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  }
});

cc._RF.pop();