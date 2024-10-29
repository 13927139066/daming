"use strict";
cc._RF.push(module, 'c4b023hyS5P+ptp2Mi/3lZA', 'CblPanel');
// Script/panel/CblPanel.js

"use strict";

var GameConfig = require("GameConfig");
cc.Class({
  "extends": cc.Component,
  properties: {
    cancelButton: cc.Node,
    //分享按钮
    confirmButton: cc.Node //分享按钮
  },
  onLoad: function onLoad() {},
  start: function start() {
    window.cp = this;
    if (cc.sys.platform === cc.sys.QQ_PLAY) {} else {
      if (!GameConfig.IS_GAME_SHARE) {
        this.cancelButton.active = false;
      }
    }
  },
  buttonCancelFunc: function buttonCancelFunc(event) {
    this.node.destroy();
  },
  buttonConfirmFunc: function buttonConfirmFunc(event) {
    var _this = this;
    if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      tt.navigateToScene({
        scene: "sidebar",
        success: function success(res) {
          console.log("navigate to scene success");
          // 跳转成功回调逻辑
          var coins = [100];
          console.log("元宝变更前", GameConfig.GameCoin);
          GameConfig.GameCoin += coins[0];
          GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
          console.log("元宝变更后", GameConfig.GameCoin);
          GameTools.showToast("获得元宝+" + coins[0]);
        },
        fail: function fail(res) {
          console.log("navigate to scene fail: ", res);
          // 跳转失败回调逻辑
        },

        complete: function complete(res) {
          _this.node.destroy();
        }
      });
    }
  }
});

cc._RF.pop();