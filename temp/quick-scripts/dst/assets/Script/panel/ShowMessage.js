
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShowMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZXNzYWdlTGFiZWwiLCJMYWJlbCIsInRvYXN0VHlwZSIsInN0YXJ0Iiwibm9kZSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZmFkZUluIiwiZGVsYXlUaW1lIiwiZmFkZU91dCIsInJlbW92ZVNlbGYiLCJzZXRNZXNzYWdlIiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxLQUFLO0lBQ3RCQyxTQUFTLEVBQUU7RUFDZixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0osSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsRUFBRSxDQUFDVSxRQUFRLENBQUNWLEVBQUUsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFWCxFQUFFLENBQUNZLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRVosRUFBRSxDQUFDYSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUViLEVBQUUsQ0FBQ2MsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUN2RyxDQUFDO0VBRURDLFVBQVUsV0FBQUEsV0FBQ1QsU0FBUyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUlVLFlBQVksR0FBRyxJQUFJLENBQUNWLFNBQVM7SUFDakMsSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDckJVLFlBQVksR0FBRyxTQUFTO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLHVCQUF1QjtJQUMxQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJVLFlBQVksR0FBRyxjQUFjO0lBQ2pDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLFVBQVU7SUFDN0IsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksQ0FBQyxFQUFFO01BQzVCVSxZQUFZLEdBQUcsWUFBWTtJQUMvQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUI7SUFBQSxDQUNILE1BQVEsSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDOUJVLFlBQVksR0FBRyxTQUFTO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLGVBQWU7SUFDbEMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksQ0FBQyxFQUFFO01BQzVCVSxZQUFZLEdBQUcsTUFBTTtJQUN6QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJVLFlBQVksR0FBRyxVQUFVO0lBQzdCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QlUsWUFBWSxHQUFHLE1BQU07SUFDekIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsZ0JBQWdCO0lBQ25DLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QlUsWUFBWSxHQUFHLGVBQWU7SUFDbEMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsUUFBUTtJQUMzQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JVLFlBQVksR0FBRyxrQkFBa0I7SUFDckMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsU0FBUztJQUM1QixDQUFDLE1BQUssSUFBRyxJQUFJLENBQUNWLFNBQVMsSUFBSSxFQUFFLEVBQUM7TUFDMUJVLFlBQVksR0FBRyxpQkFBaUI7SUFDcEMsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFDO01BQzFCVSxZQUFZLEdBQUcsT0FBTztJQUMxQjtJQUNBLElBQUksQ0FBQ1osWUFBWSxDQUFDYSxNQUFNLEdBQUdELFlBQVk7RUFDM0M7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgdG9hc3RUeXBlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVJbigwLjUpLCBjYy5kZWxheVRpbWUoMSksIGNjLmZhZGVPdXQoMC41KSwgY2MucmVtb3ZlU2VsZigpKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE1lc3NhZ2UodG9hc3RUeXBlKSB7XHJcbiAgICAgICAgdGhpcy50b2FzdFR5cGUgPSB0b2FzdFR5cGU7XHJcbiAgICAgICAgbGV0IHRvYXN0TWVzc2FnZSA9IHRoaXMudG9hc3RUeXBlO1xyXG4gICAgICAgIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5Yqf6IO95pyq5byA5Y+R44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5o6I5p2D5aSx6LSl77yM6YeN5paw5o6I5p2D5oiW5omT5byA6K6+572u55WM6Z2i6L+b6KGM5o6I5p2D44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KaB5YiG5Lqr5Yiw576k5omN5Y+v5Lul5YWN6LS56I635b6XXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5pqC5peg6KeG6aKR5bm/5ZGK6KeC55yLXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi56ev5YiG5LiN6Laz77yM5peg5rOV5aSN5rS744CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIC8vIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac5oKo6I635b6X5LiA5Liq6YGT5YW344CCXCI7XHJcbiAgICAgICAgfSAgIGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDYpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLor6Xlip/og73mnKrlvIDlj5HjgIJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDcpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmkq3mlL7kuK3pgJTpgIDlh7rvvIzml6Dms5Xojrflj5blpZblirFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDgpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLlhYPlrp3kuI3otrNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDkpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmsqHmnInnqbrkvZnnmoTkvY3nva7kuoZcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDEwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6ZOc6ZKx5LiN6LazXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxMSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4jeWIsOS4h+S4jeW+l+W3su+8jOS4jeimgeaLluWIsOi/memHjOWTplwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTIpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmga3llpzmgqjlt7Lnu4/ovr7liLDkuobkur/kuIfkurrkuYvkuIpcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDEzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5L2g5bey5Yiw6L6+5beF5bOwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxNCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaIquWbvuW3suS/neWtmOiHs+ebuOWGjO+8jOasoui/juWJjeWOu+WIhuS6q+OAglwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTUpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmga3llpzmgqjljYfnuqfllabvvIFcIjtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnRvYXN0VHlwZSA9PSAxNil7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+35LuO576k6L+b5YWl5ri45oiP77yM5Y2z5Y+v5p+l55yL5o6S6KGM5qacXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy50b2FzdFR5cGUgPT0gMTcpe1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIue9kee7nOWHuumUme+8gVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSB0b2FzdE1lc3NhZ2U7XHJcbiAgICB9LFxyXG59KTtcclxuIl19