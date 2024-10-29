"use strict";
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