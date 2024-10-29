"use strict";
cc._RF.push(module, '38b70CDgDNDRrOc8pj7+Z2r', 'ShowMessage');
// Script/panel/ShowMessage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    messageLabel: cc.Label,
    toastType: 0
  },
  start: function start() {
    this.node.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5), cc.removeSelf()));
  },
  setMessage: function setMessage(toastType) {
    this.toastType = toastType;
    var toastMessage = this.toastType;
    if (this.toastType == 0) {
      toastMessage = "该功能未开发。";
    } else if (this.toastType == 1) {
      toastMessage = "授权失败，重新授权或打开设置界面进行授权。";
    } else if (this.toastType == 2) {
      toastMessage = "要分享到群才可以免费获得";
    } else if (this.toastType == 3) {
      toastMessage = "暂无视频广告观看";
    } else if (this.toastType == 4) {
      toastMessage = "积分不足，无法复活。";
    } else if (this.toastType == 5) {
      // toastMessage = "恭喜您获得一个道具。";
    } else if (this.toastType == 6) {
      toastMessage = "该功能未开发。";
    } else if (this.toastType == 7) {
      toastMessage = "播放中途退出，无法获取奖励";
    } else if (this.toastType == 8) {
      toastMessage = "元宝不足";
    } else if (this.toastType == 9) {
      toastMessage = "没有空余的位置了";
    } else if (this.toastType == 10) {
      toastMessage = "铜钱不足";
    } else if (this.toastType == 11) {
      toastMessage = "不到万不得已，不要拖到这里哦";
    } else if (this.toastType == 12) {
      toastMessage = "恭喜您已经达到了亿万人之上";
    } else if (this.toastType == 13) {
      toastMessage = "你已到达巅峰";
    } else if (this.toastType == 14) {
      toastMessage = "截图已保存至相册，欢迎前去分享。";
    } else if (this.toastType == 15) {
      toastMessage = "恭喜您升级啦！";
    } else if (this.toastType == 16) {
      toastMessage = "请从群进入游戏，即可查看排行榜";
    } else if (this.toastType == 17) {
      toastMessage = "网络出错！";
    }
    this.messageLabel.string = toastMessage;
  }
});

cc._RF.pop();