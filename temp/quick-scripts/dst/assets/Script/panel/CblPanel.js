
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/CblPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcQ2JsUGFuZWwuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNhbmNlbEJ1dHRvbiIsIk5vZGUiLCJjb25maXJtQnV0dG9uIiwib25Mb2FkIiwic3RhcnQiLCJ3aW5kb3ciLCJjcCIsInN5cyIsInBsYXRmb3JtIiwiUVFfUExBWSIsIklTX0dBTUVfU0hBUkUiLCJhY3RpdmUiLCJidXR0b25DYW5jZWxGdW5jIiwiZXZlbnQiLCJub2RlIiwiZGVzdHJveSIsImJ1dHRvbkNvbmZpcm1GdW5jIiwiX3RoaXMiLCJCWVRFREFOQ0VfR0FNRSIsInR0IiwibmF2aWdhdGVUb1NjZW5lIiwic2NlbmUiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvaW5zIiwiR2FtZUNvaW4iLCJHYW1lVG9vbHMiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJzaG93VG9hc3QiLCJmYWlsIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxJQUFJO0lBQUU7SUFDdkJDLGFBQWEsRUFBRU4sRUFBRSxDQUFDSyxJQUFJLENBQUU7RUFDNUIsQ0FBQztFQUNERSxNQUFNLFdBQUFBLE9BQUEsRUFBRyxDQUNULENBQUM7RUFDREMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7SUFDSkMsTUFBTSxDQUFDQyxFQUFFLEdBQUcsSUFBSTtJQUNoQixJQUFHVixFQUFFLENBQUNXLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLWixFQUFFLENBQUNXLEdBQUcsQ0FBQ0UsT0FBTyxFQUFDLENBQ3RDLENBQUMsTUFBSTtNQUNELElBQUcsQ0FBQ2YsVUFBVSxDQUFDZ0IsYUFBYSxFQUFDO1FBQ3pCLElBQUksQ0FBQ1YsWUFBWSxDQUFDVyxNQUFNLEdBQUcsS0FBSztNQUNwQztJQUNKO0VBQ0osQ0FBQztFQUVEQyxnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBVUMsS0FBSyxFQUFFO0lBQy9CLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUVEQyxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBVUgsS0FBSyxFQUFFO0lBQUEsSUFBQUksS0FBQTtJQUNoQyxJQUFJckIsRUFBRSxDQUFDVyxHQUFHLENBQUNDLFFBQVEsS0FBS1osRUFBRSxDQUFDVyxHQUFHLENBQUNXLGNBQWMsRUFBQztNQUMxQ0MsRUFBRSxDQUFDQyxlQUFlLENBQUM7UUFDZkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLE9BQU8sRUFBRSxTQUFBQSxRQUFDQyxHQUFHLEVBQUs7VUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7VUFDeEM7VUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7VUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRS9CLFVBQVUsQ0FBQ2lDLFFBQVEsQ0FBRztVQUMzQ2pDLFVBQVUsQ0FBQ2lDLFFBQVEsSUFBSUQsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUMvQkUsU0FBUyxDQUFDQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUNuQyxVQUFVLENBQUNpQyxRQUFRLENBQUM7VUFDL0RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRS9CLFVBQVUsQ0FBQ2lDLFFBQVEsQ0FBRztVQUMzQ0MsU0FBUyxDQUFDRSxTQUFTLENBQUMsT0FBTyxHQUFHSixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNESyxJQUFJLEVBQUUsU0FBQUEsS0FBQ1IsR0FBRyxFQUFLO1VBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFRixHQUFHLENBQUM7VUFDNUM7UUFDSixDQUFDOztRQUNEUyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1QsR0FBRyxFQUFLO1VBQ2ZOLEtBQUksQ0FBQ0gsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdkI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBR0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiBjYy5Ob2RlLCAvL+WIhuS6q+aMiemSrlxyXG4gICAgICAgIGNvbmZpcm1CdXR0b246IGNjLk5vZGUsIC8v5YiG5Lqr5oyJ6ZKuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuUVFfUExBWSl7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKCFHYW1lQ29uZmlnLklTX0dBTUVfU0hBUkUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBidXR0b25DYW5jZWxGdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBidXR0b25Db25maXJtRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgdHQubmF2aWdhdGVUb1NjZW5lKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiBcInNpZGViYXJcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Lez6L2s5oiQ5Yqf5Zue6LCD6YC76L6RXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW5zID0gWzEwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TliY1cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gY29pbnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb2luXCIsR2FtZUNvbmZpZy5HYW1lQ29pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TlkI5cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLojrflvpflhYPlrp0rXCIgKyBjb2luc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gc2NlbmUgZmFpbDogXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Lez6L2s5aSx6LSl5Zue6LCD6YC76L6RXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=