
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0eb5fwQeclJya7iaPvZ+C50', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  var EQ = require("eq4096");
  EQ.init({
    debug: false,
    showself: true
  });
}
var GameTools = {
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_VOICE) {
      switch (engineType) {
        case 0:
          cc.loader.loadRes('music/bg01', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, true, 0.5);
          });
          break;
        case 1:
          cc.loader.loadRes('music/click', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        case 2:
          cc.loader.loadRes('music/new', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        case 3:
          cc.loader.loadRes('music/select', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        default:
          break;
      }
    }
  },
  playAudio: function playAudio(src) {
    cc.loader.loadRes(src, cc.AudioClip, function (err, clip) {
      cc.audioEngine.play(clip, false, 0.5);
    });
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameTools.backMusicIsPlay == null && GameConfig.IS_GAME_MUSIC) {
      cc.loader.loadRes('music/bg01', cc.AudioClip, function (err, clip) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(clip, true, 0.5);
      });
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);
    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }
    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }
      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }
    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  showToast: function showToast(msg) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.showToast({
        title: msg
      });
    }
    if (cc.sys.platform === cc.sys.QQ_PLAY) {
      BK.UI.showToast({
        title: msg,
        duration: 1500
      });
    } else {
      console.log(msg);
    }
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("Panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).setMessage(toastType);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName, successCallFunc) {
    if (!GameConfig.IS_GAME_SHARE) {
      return;
    }
    GameTools.setItemByLocalStorage("GameCompoundShareNumber", GameTools.getItemByLocalStorage("GameCompoundShareNumber", 0) + 1);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      var shareAppMessageValue = {
        title: GameConfig.shareData.title,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        //+ "&" + qingjs.instance.get_share_token(),
        imageUrl: GameConfig.shareData.url
      };
      if (wx.aldShareAppMessage) {
        wx.aldShareAppMessage(shareAppMessageValue);
      } else {
        window.wx.shareAppMessage(shareAppMessageValue);
      }
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      BK.Share.share({
        qqImgUrl: GameConfig.shareData.url,
        // socialPicPath: 'GameRes://localImage.png',
        title: '大明朝',
        summary: GameConfig.shareData.title,
        // extendInfo: '扩展信息，可选，默认为空',
        success: function success(succObj) {
          // callback && callback(true);
          BK.Console.log('分享成功', succObj.code, JSON.stringify(succObj.data));
          GameConfig.shareComponent.shareSuccess();
        },
        fail: function fail(failObj) {
          // callback && callback(false);
          BK.Console.log('分享失败', failObj.code, JSON.stringify(failObj.msg));
        },
        complete: function complete() {
          BK.Console.log('分享完成，不论成功失败');
        }
      });
    } else {
      if (successCallFunc != undefined) {
        successCallFunc();
      }
      this.toastMessage(0);
      cc.log("执行了截图");
    }
  },
  getEXPNumber: function getEXPNumber(number) {
    if (number == 0) {
      return false;
    }
    if (number <= 3) {
      var num = Math.pow(2, number - 1) * 5;
      return num;
    } else if (number > 3) {
      var _num = Math.pow(2.1, number - 3) * 20;
      return _num;
    }
  },
  createImageApp: function createImageApp(avatarUrl, sprite) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      try {
        var image = wx.createImage();
        image.src = avatarUrl;
        image.onload = function () {
          try {
            var texture = new cc.Texture2D();
            texture.initWithElement(image);
            texture.handleLoadedTexture();
            texture.width = 110;
            texture.height = 110;
            sprite.spriteFrame = new cc.SpriteFrame(texture);
          } catch (e) {
            console.log(e);
            sprite.node.active = false;
          }
        };
      } catch (e) {
        console.log(e);
        sprite.node.active = false;
      }
    }
  },
  createImage: function createImage(avatarUrl, sprite) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      try {
        var image = wx.createImage();
        image.src = avatarUrl;
        image.onload = function () {
          try {
            var texture = new cc.Texture2D();
            texture.initWithElement(image);
            texture.handleLoadedTexture();
            sprite.spriteFrame = new cc.SpriteFrame(texture);
          } catch (e) {
            console.log(e);
            sprite.node.active = false;
          }
        };
      } catch (e) {
        console.log(e);
        sprite.node.active = false;
      }
    }
  },
  //小游戏跳转
  navigateToMiniProgram: function navigateToMiniProgram(appId, path) {
    if (path == undefined && appId == undefined) {
      console.log("直接离开");
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //console.log(appId);

      if (appId === null) {
        console.log("二维码跳转");
        if (typeof path == 'array') {
          wx.previewImage({
            urls: path
          });
        } else {
          wx.previewImage({
            urls: [path]
          });
        }
      } else {
        console.log("直接跳转");
        wx.navigateToMiniProgram({
          appId: appId,
          path: path,
          envVersion: "release",
          success: function success() {
            console.log("navigate success");
          },
          fail: function fail() {
            console.log("navicate fail");
          }
        });
      }
    } else {
      cc.log("小程序跳转");
    }
  },
  getNumberString: function getNumberString(number) {
    if (number < 1000) {
      return Math.round(number);
    } else if (number < 1000000) {
      return (number / 1000).toFixed(2) + "K";
    } else if (number < 1000000000) {
      return (number / 1000000).toFixed(2) + "M";
    } else if (number < 1000000000000) {
      return (number / 1000000000).toFixed(2) + "B";
    } else if (number < 1000000000000000) {
      return (number / 1000000000000).toFixed(2) + "T";
    } else if (number < 1000000000000000000) {
      return (number / 1000000000000000).toFixed(2) + "aa";
    } else if (number < 1000000000000000000000) {
      return (number / 1000000000000000000).toFixed(2) + "Q";
    } else {
      return (number / 1000000000000000000).toFixed(2) + "Q+";
    }
  },
  //小游戏显示
  showMinProgram: function showMinProgram(node, flag) {
    if (GameConfig.MiniProgram == undefined || GameConfig.MiniProgram.length == 0) {
      return;
    }
    var randomIndex;
    // if(flag == 2){
    var length = GameConfig.MiniProgram.length - 1;
    randomIndex = Math.round(Math.random() * length);
    // }
    var miniProgram = GameConfig.MiniProgram[randomIndex];
    var image = wx.createImage();
    image.src = miniProgram.icon;
    image.onload = function () {
      try {
        if (node == undefined) {
          return;
        }
        node.active = true;
        var texture = new cc.Texture2D();
        texture.initWithElement(image);
        texture.handleLoadedTexture();
        texture.width = 90;
        texture.height = 90;
        if (node.getComponent(cc.Sprite) != undefined) {
          node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        }
        // cc.loader.load(miniProgram.path, (err, tex) => {
        //     if (!err) {
        //         node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
        //     }
        // });
        GameConfig.APPID = miniProgram.appId;
        GameConfig.PATH = miniProgram.path;
      } catch (e) {
        console.log(e);
      }
    };
  },
  //获取跳转的信息
  initEQMiniProgram: function initEQMiniProgram(userInfo, callback) {
    // if (userInfo == null) {
    //     callback(false);
    //     return;
    // }
    var launchOption = wx.getLaunchOptionsSync();
    EQ.setuserinfo(userInfo, launchOption);
    EQ.Enable();
    // let can = EQ.more();
    // if (can) {
    var config = EQ.getconfig();
    var recommender = config.data.recommender;
    if (recommender != undefined) {
      for (var i = 0; i < recommender.length; i++) {
        var ad = recommender[i];
        if (ad.type == 'wxapp') {
          GameConfig.MiniProgram.push({
            icon: ad.icon[0],
            appId: ad.appId,
            path: ad.path,
            name: ad.name
          });
        }
        if (ad.type == 'img') {
          GameConfig.MiniProgram.push({
            icon: ad.icon[0],
            appId: null,
            path: ad.path,
            name: ad.name
          });
        }
      }
      console.log("可以", GameConfig.MiniProgram);
      // callback && callback(true);
      // }else{
      //     this.initEQMiniProgram();
    }
    //解析盒子数据
    var box = config.data.box;
    if (box != undefined && GameConfig.boxApps.length == 0) {
      if (box.title != undefined) {
        GameConfig.boxTitle = box.title;
      }
      for (var _i = 0; _i < box.apps.length; _i++) {
        var _ad = box.apps[_i];
        // console.log(ad);
        if (_ad.type == 'wxapp') {
          GameConfig.boxApps.push({
            icon: _ad.icon[0],
            appId: _ad.appId,
            path: _ad.path,
            name: _ad.name
          });
        } else if (_ad.type == 'img') {
          GameConfig.boxApps.push({
            icon: _ad.icon[0],
            appId: null,
            path: _ad.path,
            name: _ad.name
          });
        }
      }
    }
    callback && callback(true);
    // } else {
    //     callback && callback(false);
    // } 
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    console.log("获取排行榜");
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        }
        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  //流量主
  _createVedioAd: function _createVedioAd(callback) {
    console.log("平台:", cc.sys.platform);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('观看视频',{'key' : 'value'});
      var _videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-3cf372fd7487fd87'
      });
      _videoAd.load().then(function () {
        return _videoAd.show();
      })["catch"](function (err) {
        console.log("视频加载失败", err);
        wx.showModal({
          title: '提示',
          content: '视频加载失败',
          showCancel: false
        });
      });
      _videoAd.onClose(function (res) {
        if (!_videoAd) {
          return;
        }
        if (res.isEnded) {
          // wx.aldSendEvent('完整观看视频',{'key' : 'value'});
          callback(res);
          _videoAd.offClose();
        } else {
          _videoAd.offClose();
        }
      });
      _videoAd.onError(function (msg) {
        wx.showToast({
          title: '错误'
        });
        console.log(msg);
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      var _videoAd2 = tt.createRewardedVideoAd({
        adUnitId: '19n7dc8ci7g81clruk'
      });
      _videoAd2.load().then(function () {
        return _videoAd2.show();
      })["catch"](function (err) {
        console.log("视频加载失败", err);
        tt.showModal({
          title: '提示',
          content: '视频加载失败',
          showCancel: false
        });
      });
      _videoAd2.onClose(function (res) {
        if (!_videoAd2) {
          return;
        }
        if (res.isEnded) {
          // wx.aldSendEvent('完整观看视频',{'key' : 'value'});
          callback(res);
          _videoAd2.offClose();
        } else {
          console.log("未播放完关闭");
          _videoAd2.offClose();
        }
      });
      _videoAd2.onError(function (msg) {
        tt.showToast({
          title: '错误'
        });
        console.log(msg);
      });

      // videoAd.onLoad(() => {
      //     console.log("广告加载完成");
      // });
      // videoAd.load();
      //
      // videoAd
      //     .show()
      //     .then(() => {
      //         console.log("广告显示成功");
      //     })
      //     .catch((err) => {
      //         console.log("广告组件出现问题", err);
      //         // 可以手动加载一次
      //         videoAd.load().then(() => {
      //             console.log("手动加载成功");
      //             // 加载成功后需要再显示广告
      //             videoAd.show();
      //         }).catch(function (err) {
      //             console.log("视频加载失败",err);
      //             tt.showModal({
      //                 title: '提示',
      //                 content: '视频加载失败',
      //                 showCancel: false
      //             });
      //         });
      //     });
      // videoAd.onClose(function (res) {
      //     if(!videoAd){
      //         return ;
      //     }
      //     if(res.isEnded){
      //         // wx.aldSendEvent('完整观看视频',{'key' : 'value'});
      //         callback(res);
      //         videoAd.offClose();
      //     }else{
      //         videoAd.offClose();
      //         console.log("关闭")
      //     }
      // });
      // videoAd.onError(function(msg){
      //     tt.showToast({
      //         title: '错误'
      //     });
      //     console.log(msg);
      // });
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      var videoAd = BK.Advertisement.createVideoAd();
      videoAd.onLoad(function () {
        //加载成功
        BK.Script.log(1, 1, "onLoad");
      });
      videoAd.onPlayStart(function () {
        //开始播放
        BK.Script.log(1, 1, "onPlayStart");
      });
      videoAd.onPlayFinish(function () {
        //播放结束
        BK.Script.log(1, 1, "onPlayFinish");
        callback({
          isEnded: true
        });
      });
      videoAd.onError(function (err) {
        //加载失败
        BK.Script.log(1, 1, "onError code:" + err.code + " msg:" + err.msg);
      });
      videoAd.show();
    } else {
      callback({
        raw: true
      });
    }
  },
  getUserInfo: function getUserInfo() {
    //获取用户信息
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            //是否授权用户信息
            wx.getUserInfo({
              success: function success(res) {
                var userInfo = res.userInfo;
                GameConfig.UserInfo.nickName = userInfo.nickName;
                GameConfig.UserInfo.avatarUrl = userInfo.avatarUrl;
                GameConfig.UserInfo = userInfo;
              }
            });
          } else {
            wx.authorize({
              scope: 'scope.userInfo',
              success: function success() {
                wx.getUserInfo({
                  success: function success(res) {
                    var userInfo = res.userInfo;
                    GameConfig.UserInfo.nickName = userInfo.nickName;
                    GameConfig.UserInfo.avatarUrl = userInfo.avatarUrl;
                    GameConfig.UserInfo = userInfo;
                  }
                });
              },
              fail: function fail() {
                GameTools.toastMessage(1);
              }
            });
          }
        }
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      console.log("字节getUserInfo");
    } else {
      GameConfig.UserInfo.nickName = GameConfig.playerName[Math.floor(Math.random() * 107)] + Math.floor(Math.random() * 107);
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score,
        level: GameConfig.GamePersonMaxLevel
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {} else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      var data = {
        userData: [{
          openId: GameConfig.OPENID,
          startMs: GameConfig.startMs + '',
          //必填，游戏开始时间，单位为毫秒，字符串类型
          endMs: new Date().getTime().toString(),
          //必填，游戏结束时间，单位为毫秒，字符串类型
          scoreInfo: {
            score: score,
            //分数，类型必须是整型数
            a1: GameConfig.GamePersonMaxLevel
          }
        }],
        attr: {
          score: {
            type: 'rank',
            order: 1
          },
          a1: {
            type: 'rank',
            order: 1
          }
        }
      };
      // gameMode: 游戏模式，如果没有模式区分，直接填 1
      // 必须配置好周期规则后，才能使用数据上报和排行榜功能
      BK.QQ.uploadScoreWithoutRoom(1, data, function (errCode, cmd, data) {
        // 返回错误码信息
        if (errCode !== 0) {
          BK.Script.log(1, 1, '上传分数失败!错误码：' + errCode);
        }
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  //自家的appid
  initSelfMiniProgram: function initSelfMiniProgram(callback) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {}
  }
};
module.exports = GameTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVG9vbHMuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJFUSIsImluaXQiLCJkZWJ1ZyIsInNob3dzZWxmIiwiR2FtZVRvb2xzIiwibnVtYmVyTGFiZWxBdGxhcyIsImJhY2tNdXNpY0lzUGxheSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImVuZ2luZVR5cGUiLCJJU19HQU1FX1ZPSUNFIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwbGF5QXVkaW8iLCJzcmMiLCJwbGF5QmFja2dyb3VuZE11c2ljIiwiSVNfR0FNRV9NVVNJQyIsInN0b3BCYWNrZ3JvdW5kTXVzaWMiLCJzdG9wIiwiZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwia2V5IiwidmFsdWUiLCJ2YWx1ZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0SXRlbSIsIk51bWJlciIsInNldEl0ZW1CeUxvY2FsU3RvcmFnZSIsInNob3dUb2FzdCIsIm1zZyIsInd4IiwidGl0bGUiLCJRUV9QTEFZIiwiQksiLCJVSSIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInRvYXN0TWVzc2FnZSIsInRvYXN0VHlwZSIsInByZWZhYiIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsIkNvbXBvbmVudCIsInNldE1lc3NhZ2UiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2hpbGRyZW4iLCJhZGRDaGlsZCIsInNoYXJlUGljdHVyZSIsInBpY3R1cmVOYW1lIiwic3VjY2Vzc0NhbGxGdW5jIiwiSVNfR0FNRV9TSEFSRSIsInNoYXJlQXBwTWVzc2FnZVZhbHVlIiwic2hhcmVEYXRhIiwicXVlcnkiLCJNQUlOX01FTlVfTlVNIiwiaW1hZ2VVcmwiLCJ1cmwiLCJhbGRTaGFyZUFwcE1lc3NhZ2UiLCJ3aW5kb3ciLCJzaGFyZUFwcE1lc3NhZ2UiLCJTaGFyZSIsInNoYXJlIiwicXFJbWdVcmwiLCJzdW1tYXJ5Iiwic3VjY2VzcyIsInN1Y2NPYmoiLCJDb25zb2xlIiwiY29kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic2hhcmVDb21wb25lbnQiLCJzaGFyZVN1Y2Nlc3MiLCJmYWlsIiwiZmFpbE9iaiIsImNvbXBsZXRlIiwiZ2V0RVhQTnVtYmVyIiwibnVtYmVyIiwibnVtIiwiTWF0aCIsInBvdyIsImNyZWF0ZUltYWdlQXBwIiwiYXZhdGFyVXJsIiwic3ByaXRlIiwiaW1hZ2UiLCJjcmVhdGVJbWFnZSIsIm9ubG9hZCIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiZSIsImFjdGl2ZSIsIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSIsImFwcElkIiwicGF0aCIsInByZXZpZXdJbWFnZSIsInVybHMiLCJlbnZWZXJzaW9uIiwiZ2V0TnVtYmVyU3RyaW5nIiwicm91bmQiLCJ0b0ZpeGVkIiwic2hvd01pblByb2dyYW0iLCJmbGFnIiwiTWluaVByb2dyYW0iLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsInJhbmRvbSIsIm1pbmlQcm9ncmFtIiwiaWNvbiIsIlNwcml0ZSIsIkFQUElEIiwiUEFUSCIsImluaXRFUU1pbmlQcm9ncmFtIiwidXNlckluZm8iLCJjYWxsYmFjayIsImxhdW5jaE9wdGlvbiIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwic2V0dXNlcmluZm8iLCJFbmFibGUiLCJjb25maWciLCJnZXRjb25maWciLCJyZWNvbW1lbmRlciIsImkiLCJhZCIsInR5cGUiLCJwdXNoIiwibmFtZSIsImJveCIsImJveEFwcHMiLCJib3hUaXRsZSIsImFwcHMiLCJnZXRSYW5rRGF0YSIsInNoYXJlVGlja2V0IiwicmVtb3ZlUmFua0RhdGEiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwiX2NyZWF0ZVZlZGlvQWQiLCJ2aWRlb0FkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJsb2FkIiwidGhlbiIsInNob3ciLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm9uQ2xvc2UiLCJyZXMiLCJpc0VuZGVkIiwib2ZmQ2xvc2UiLCJvbkVycm9yIiwiQllURURBTkNFX0dBTUUiLCJ0dCIsIkFkdmVydGlzZW1lbnQiLCJjcmVhdGVWaWRlb0FkIiwib25Mb2FkIiwiU2NyaXB0Iiwib25QbGF5U3RhcnQiLCJvblBsYXlGaW5pc2giLCJyYXciLCJnZXRVc2VySW5mbyIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsIlVzZXJJbmZvIiwibmlja05hbWUiLCJhdXRob3JpemUiLCJzY29wZSIsInBsYXllck5hbWUiLCJmbG9vciIsInN1Ym1pdFNjb3JlIiwic2NvcmUiLCJsZXZlbCIsIkdhbWVQZXJzb25NYXhMZXZlbCIsInVzZXJEYXRhIiwib3BlbklkIiwiT1BFTklEIiwic3RhcnRNcyIsImVuZE1zIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInNjb3JlSW5mbyIsImExIiwiYXR0ciIsIm9yZGVyIiwiUVEiLCJ1cGxvYWRTY29yZVdpdGhvdXRSb29tIiwiZXJyQ29kZSIsImNtZCIsImluaXRTZWxmTWluaVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUV0QyxJQUFJQyxFQUFFLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLRixFQUFFLENBQUNDLEdBQUcsQ0FBQ0UsV0FBVyxFQUFFO0VBQ3hDLElBQUtDLEVBQUUsR0FBSUwsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUM1QkssRUFBRSxDQUFDQyxJQUFJLENBQUM7SUFDSkMsS0FBSyxFQUFFLEtBQUs7SUFDWkMs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QUFDLE1BQU07TUFDSDVNLEVBQUUsQ0FBQzhDLEdBQUcsQ0FBQyxPQUFPLEdBQUdoRCxVQUFVLENBQUNvRSxhQUFhLEdBQUcsS0FBSyxHQUFHeUgsS0FBSyxDQUFDO0lBQzlEO0VBQ0osQ0FBQztFQUNEO0VBQ0FtQixtQkFBbUIsRUFBRSxTQUFBQSxvQkFBVTNFLFFBQVEsRUFBRTtJQUNyQyxJQUFJbkksRUFBRSxDQUFDQyxHQUFHLENBQUNDLFFBQVEsS0FBS0YsRUFBRSxDQUFDQyxHQUFHLENBQUNFLFdBQVcsRUFBRSxDQUM1QztFQUNKO0FBQ0osQ0FBQztBQUVENE0sTUFBTSxDQUFDQyxPQUFPLEdBQUd4TSxTQUFTIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG5cclxuaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICB2YXIgIEVRICA9IHJlcXVpcmUoXCJlcTQwOTZcIik7XHJcbiAgICBFUS5pbml0KHtcclxuICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgc2hvd3NlbGY6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbnZhciBHYW1lVG9vbHMgPSB7XHJcbiAgICBudW1iZXJMYWJlbEF0bGFzOiBudWxsLFxyXG4gICAgYmFja011c2ljSXNQbGF5OiBudWxsLFxyXG4gICAgcGxheVNpbXBsZUF1ZGlvRW5naW5lOiBmdW5jdGlvbiAoZW5naW5lVHlwZSkge1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfVk9JQ0UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChlbmdpbmVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ211c2ljL2JnMDEnLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCB0cnVlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdtdXNpYy9jbGljaycsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdtdXNpYy9uZXcnLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbXVzaWMvc2VsZWN0JywgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlBdWRpbyhzcmMpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhzcmMsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9PSBudWxsICYmIEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbXVzaWMvYmcwMScsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgdHJ1ZSwgMC41KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BCYWNrZ3JvdW5kTXVzaWM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSk7XHJcbiAgICAgICAgICAgIEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRJdGVtQnlMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGlmICh2YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZXMgPT09IG51bGwgfHwgdmFsdWVzID09PSAnJykge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwidHJ1ZVwiID09IHZhbHVlcztcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfSxcclxuICAgIHNldEl0ZW1CeUxvY2FsU3RvcmFnZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dUb2FzdChtc2cpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtc2dcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9aWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuUVFfUExBWSl7XHJcbiAgICAgICAgICAgIEJLLlVJLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbXNnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246MTUwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgdG9hc3RNZXNzYWdlKHRvYXN0VHlwZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiUGFuZWwvU2hvd01lc3NhZ2VcIiwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpLnNldE1lc3NhZ2UodG9hc3RUeXBlKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaGFyZVBpY3R1cmUocGljdHVyZU5hbWUsIHN1Y2Nlc3NDYWxsRnVuYykge1xyXG4gICAgICAgIGlmKCFHYW1lQ29uZmlnLklTX0dBTUVfU0hBUkUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29tcG91bmRTaGFyZU51bWJlclwiLCBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvbXBvdW5kU2hhcmVOdW1iZXJcIiwgMCkgKyAxKTtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgbGV0IHNoYXJlQXBwTWVzc2FnZVZhbHVlID0geyAgIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IEdhbWVDb25maWcuc2hhcmVEYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwieD1cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgLy8rIFwiJlwiICsgcWluZ2pzLmluc3RhbmNlLmdldF9zaGFyZV90b2tlbigpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IEdhbWVDb25maWcuc2hhcmVEYXRhLnVybCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHd4LmFsZFNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgd3guYWxkU2hhcmVBcHBNZXNzYWdlKHNoYXJlQXBwTWVzc2FnZVZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy53eC5zaGFyZUFwcE1lc3NhZ2Uoc2hhcmVBcHBNZXNzYWdlVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuUVFfUExBWSl7XHJcbiAgICAgICAgICAgIEJLLlNoYXJlLnNoYXJlKHtcclxuICAgICAgICAgICAgICAgIHFxSW1nVXJsOiBHYW1lQ29uZmlnLnNoYXJlRGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAvLyBzb2NpYWxQaWNQYXRoOiAnR2FtZVJlczovL2xvY2FsSW1hZ2UucG5nJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSn5piO5pydJyxcclxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IEdhbWVDb25maWcuc2hhcmVEYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgLy8gZXh0ZW5kSW5mbzogJ+aJqeWxleS/oeaBr++8jOWPr+mAie+8jOm7mOiupOS4uuepuicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoc3VjY09iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJLLkNvbnNvbGUubG9nKCfliIbkuqvmiJDlip8nLCBzdWNjT2JqLmNvZGUsIEpTT04uc3RyaW5naWZ5KHN1Y2NPYmouZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGZhaWxPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayAmJiBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQksuQ29uc29sZS5sb2coJ+WIhuS6q+Wksei0pScsIGZhaWxPYmouY29kZSwgSlNPTi5zdHJpbmdpZnkoZmFpbE9iai5tc2cpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEJLLkNvbnNvbGUubG9nKCfliIbkuqvlrozmiJDvvIxcYuS4jeiuuuaIkOWKn+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxGdW5jICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxGdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UoMCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaJp+ihjOS6huaIquWbvlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBnZXRFWFBOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgaWYobnVtYmVyID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudW1iZXIgPD0gMykge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5wb3coMiwobnVtYmVyLTEpKSo1O1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtYmVyID4gMykge1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5wb3coMi4xLChudW1iZXItMykpKjIwO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlSW1hZ2VBcHAoYXZhdGFyVXJsLCBzcHJpdGUpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IHd4LmNyZWF0ZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggPSAxMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ID0gMTEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZShhdmF0YXJVcmwsIHNwcml0ZSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gd3guY3JlYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/lsI/muLjmiI/ot7PovaxcclxuICAgIG5hdmlnYXRlVG9NaW5pUHJvZ3JhbShhcHBJZCwgcGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoID09IHVuZGVmaW5lZCAmJiBhcHBJZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnm7TmjqXnprvlvIBcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXBwSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFwcElkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6jOe7tOeggei3s+i9rFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHBhdGgpID09ICdhcnJheScpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxzOiBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsczogW3BhdGhdXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55u05o6l6Lez6L2sXCIpO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBlbnZWZXJzaW9uOiBcInJlbGVhc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZpY2F0ZSBmYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuWwj+eoi+W6j+i3s+i9rFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtYmVyU3RyaW5nKG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW1iZXIgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgyKSArIFwiS1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgMTAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMDAwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiVFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgMTAwMDAwMDAwMDAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAvIDEwMDAwMDAwMDAwMDAwMDApLnRvRml4ZWQoMikgKyBcImFhXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiUVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiUStcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvL+Wwj+a4uOaIj+aYvuekulxyXG4gICAgc2hvd01pblByb2dyYW0obm9kZSxmbGFnKSB7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuTWluaVByb2dyYW0gPT0gdW5kZWZpbmVkIHx8IEdhbWVDb25maWcuTWluaVByb2dyYW0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXg7XHJcbiAgICAgICAgLy8gaWYoZmxhZyA9PSAyKXtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IEdhbWVDb25maWcuTWluaVByb2dyYW0ubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgbWluaVByb2dyYW0gPSBHYW1lQ29uZmlnLk1pbmlQcm9ncmFtW3JhbmRvbUluZGV4XTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSB3eC5jcmVhdGVJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IG1pbmlQcm9ncmFtLmljb247XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYobm9kZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltYWdlKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCA9IDkwO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgPSA5MDtcclxuICAgICAgICAgICAgICAgIGlmKG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQobWluaVByb2dyYW0ucGF0aCwgKGVyciwgdGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5BUFBJRCA9IG1pbmlQcm9ncmFtLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5QQVRIID0gbWluaVByb2dyYW0ucGF0aDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+iOt+WPlui3s+i9rOeahOS/oeaBr1xyXG4gICAgaW5pdEVRTWluaVByb2dyYW06IGZ1bmN0aW9uICh1c2VySW5mbywgY2FsbGJhY2spe1xyXG4gICAgICAgIC8vIGlmICh1c2VySW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgbGF1bmNoT3B0aW9uID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgICAgICBFUS5zZXR1c2VyaW5mbyh1c2VySW5mbyxsYXVuY2hPcHRpb24pO1xyXG4gICAgICAgIEVRLkVuYWJsZSgpO1xyXG4gICAgICAgIC8vIGxldCBjYW4gPSBFUS5tb3JlKCk7XHJcbiAgICAgICAgLy8gaWYgKGNhbikge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnID0gRVEuZ2V0Y29uZmlnKCk7XHJcbiAgICAgICAgICAgIGxldCByZWNvbW1lbmRlciA9IGNvbmZpZy5kYXRhLnJlY29tbWVuZGVyO1xyXG4gICAgICAgICAgICBpZiAocmVjb21tZW5kZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29tbWVuZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkID0gcmVjb21tZW5kZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkLnR5cGUgPT0gJ3d4YXBwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLk1pbmlQcm9ncmFtLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogYWQuaWNvblswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBhZC5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFkLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWQudHlwZSA9PSAnaW1nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLk1pbmlQcm9ncmFtLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogYWQuaWNvblswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYWQucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj6/ku6VcIixHYW1lQ29uZmlnLk1pbmlQcm9ncmFtKVxyXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5pbml0RVFNaW5pUHJvZ3JhbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6Kej5p6Q55uS5a2Q5pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBib3ggPSBjb25maWcuZGF0YS5ib3g7XHJcbiAgICAgICAgICAgIGlmKGJveCAhPSB1bmRlZmluZWQgJiYgR2FtZUNvbmZpZy5ib3hBcHBzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGlmKGJveC50aXRsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYm94VGl0bGUgPSBib3gudGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveC5hcHBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkID0gYm94LmFwcHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZC50eXBlID09ICd3eGFwcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5ib3hBcHBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogYWQuaWNvblswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBhZC5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFkLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChhZC50eXBlID09ICdpbWcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYm94QXBwcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGFkLmljb25bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGFkLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAvLyB9IFxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIGdldFJhbmtEYXRhKHNoYXJlVGlja2V0KSB7IC8v6I635Y+W5o6S6KGM5qacXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLojrflj5bmjpLooYzmppxcIilcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInBhbmVsL1JhbmtpbmdMaXN0Vmlld1wiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChzaGFyZVRpY2tldCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpLnNoYXJlVGlja2V0ID0gc2hhcmVUaWNrZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlUmFua0RhdGEoKSB7Ly/np7vpmaTmjpLooYzmppzmlbDmja5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLnp7vpmaTmjpLooYzmppzmlbDmja7jgIJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5rWB6YeP5Li7XHJcbiAgICBfY3JlYXRlVmVkaW9BZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlubPlj7A6XCIsY2Muc3lzLnBsYXRmb3JtKVxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvLyB3eC5hbGRTZW5kRXZlbnQoJ+ingueci+inhumikScseydrZXknIDogJ3ZhbHVlJ30pO1xyXG4gICAgICAgICAgICBsZXQgdmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC0zY2YzNzJmZDc0ODdmZDg3J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmlkZW9BZC5sb2FkKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuinhumikeWKoOi9veWksei0pVwiLGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn6KeG6aKR5Yqg6L295aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2aWRlb0FkLm9uQ2xvc2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYoIXZpZGVvQWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuaXNFbmRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd3guYWxkU2VuZEV2ZW50KCflrozmlbTop4LnnIvop4bpopEnLHsna2V5JyA6ICd2YWx1ZSd9KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25FcnJvcihmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mUmeivrydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgbGV0IHZpZGVvQWQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6ICcxOW43ZGM4Y2k3ZzgxY2xydWsnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Yqg6L295aSx6LSlXCIsZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0dC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfop4bpopHliqDovb3lpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25DbG9zZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdmlkZW9BZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHJlcy5pc0VuZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3eC5hbGRTZW5kRXZlbnQoJ+WujOaVtOingueci+inhumikScseydrZXknIDogJ3ZhbHVlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKrmkq3mlL7lrozlhbPpl61cIilcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb0FkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZnVuY3Rpb24obXNnKXtcclxuICAgICAgICAgICAgICAgIHR0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfplJnor68nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdmlkZW9BZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLlub/lkYrliqDovb3lrozmiJBcIik7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAvLyB2aWRlb0FkLmxvYWQoKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gdmlkZW9BZFxyXG4gICAgICAgICAgICAvLyAgICAgLnNob3coKVxyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK5pi+56S65oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrnu4Tku7blh7rnjrDpl67pophcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyDlj6/ku6XmiYvliqjliqDovb3kuIDmrKFcclxuICAgICAgICAgICAgLy8gICAgICAgICB2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYvliqjliqDovb3miJDlip9cIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIOWKoOi9veaIkOWKn+WQjumcgOimgeWGjeaYvuekuuW5v+WRilxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB2aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Yqg6L295aSx6LSlXCIsZXJyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHQuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfop4bpopHliqDovb3lpLHotKUnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gdmlkZW9BZC5vbkNsb3NlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmKCF2aWRlb0FkKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgaWYocmVzLmlzRW5kZWQpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIHd4LmFsZFNlbmRFdmVudCgn5a6M5pW06KeC55yL6KeG6aKRJyx7J2tleScgOiAndmFsdWUnfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB2aWRlb0FkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gICAgICAgICB2aWRlb0FkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLlhbPpl61cIilcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIHZpZGVvQWQub25FcnJvcihmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAvLyAgICAgdHQuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aXRsZTogJ+mUmeivrydcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfWVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuUVFfUExBWSl7XHJcbiAgICAgICAgICAgIHZhciB2aWRlb0FkID0gQksuQWR2ZXJ0aXNlbWVudC5jcmVhdGVWaWRlb0FkKCk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25Mb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295oiQ5YqfXHJcbiAgICAgICAgICAgICAgICBCSy5TY3JpcHQubG9nKDEsIDEsIFwib25Mb2FkXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW9BZC5vblBsYXlTdGFydChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W8gOWni+aSreaUvlxyXG4gICAgICAgICAgICAgICAgQksuU2NyaXB0LmxvZygxLCAxLCBcIm9uUGxheVN0YXJ0XCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW9BZC5vblBsYXlGaW5pc2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7nu5PmnZ9cclxuICAgICAgICAgICAgICAgIEJLLlNjcmlwdC5sb2coMSwgMSwgXCJvblBsYXlGaW5pc2hcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7aXNFbmRlZCA6IHRydWV9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy/liqDovb3lpLHotKVcclxuICAgICAgICAgICAgICAgIEJLLlNjcmlwdC5sb2coMSwgMSwgXCJvbkVycm9yIGNvZGU6XCIgKyBlcnIuY29kZSArIFwiIG1zZzpcIiArIGVyci5tc2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvQWQuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHsgcmF3OiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckluZm8oKSB7Ly/ojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHsvL+aYr+WQpuaOiOadg+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuVXNlckluZm8ubmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvLmF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvID0gdXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmF1dGhvcml6ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvLm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvLmF2YXRhclVybCA9IHVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuVXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a2X6IqCZ2V0VXNlckluZm9cIilcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIEdhbWVDb25maWcuVXNlckluZm8ubmlja05hbWUgPSBHYW1lQ29uZmlnLnBsYXllck5hbWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTA3KV0gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJtaXRTY29yZShzY29yZSkgeyAvL+aPkOS6pOW+l+WIhlxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXHJcbiAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5CWVRFREFOQ0VfR0FNRSl7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlFRX1BMQVkpe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5JZDogR2FtZUNvbmZpZy5PUEVOSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRNczogR2FtZUNvbmZpZy5zdGFydE1zICsgJycsIC8v5b+F5aGr77yM5ri45oiP5byA5aeL5pe26Ze077yM5Y2V5L2N5Li65q+r56eS77yM5a2X56ym5Liy57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kTXM6ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpKS50b1N0cmluZygpLCAvL+W/heWhq++8jOa4uOaIj+e7k+adn+aXtumXtO+8jOWNleS9jeS4uuavq+enku+8jOWtl+espuS4suexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsIC8v5YiG5pWw77yM57G75Z6L5b+F6aG75piv5pW05Z6L5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGExOiBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIF0sXHJcbiAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGExOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBnYW1lTW9kZTog5ri45oiP5qih5byP77yM5aaC5p6c5rKh5pyJ5qih5byP5Yy65YiG77yM55u05o6l5aGrIDFcclxuICAgICAgICAgICAgLy8g5b+F6aG76YWN572u5aW95ZGo5pyf6KeE5YiZ5ZCO77yM5omN6IO95L2/55So5pWw5o2u5LiK5oql5ZKM5o6S6KGM5qac5Yqf6IO9XHJcbiAgICAgICAgICAgIEJLLlFRLnVwbG9hZFNjb3JlV2l0aG91dFJvb20oMSwgZGF0YSwgZnVuY3Rpb24gKGVyckNvZGUsIGNtZCwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8g6L+U5Zue6ZSZ6K+v56CB5L+h5oGvXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyQ29kZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJLLlNjcmlwdC5sb2coMSwgMSwgJ+S4iuS8oOWIhuaVsOWksei0pSHplJnor6/noIHvvJonICsgZXJyQ29kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaPkOS6pOW+l+WIhjpcIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiIDogXCIgKyBzY29yZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/oh6rlrrbnmoRhcHBpZFxyXG4gICAgaW5pdFNlbGZNaW5pUHJvZ3JhbTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVRvb2xzOyJdfQ==