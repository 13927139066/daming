
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10c24pts1ZLgpdWUSmC+YZp', 'main');
// Script/main.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
cc.Class({
  "extends": cc.Component,
  properties: {
    deskNode: {
      "default": null,
      type: cc.Node,
      displayName: "桌子节点"
    },
    deskSprite: {
      "default": null,
      type: cc.Prefab,
      displayName: '人物预制'
    },
    moveDeskSprite: {
      "default": null,
      type: cc.Sprite,
      displayName: "移动图片"
    },
    selectDeskSprite: {
      "default": null,
      type: cc.Component,
      displayName: "移动的节点"
    },
    deskBg: {
      "default": null,
      type: cc.Node,
      displayName: "可点击的背景"
    },
    jiasuBtn: {
      "default": null,
      type: cc.Node,
      displayName: "加速按钮"
    },
    shopBtn: {
      "default": null,
      type: cc.Node,
      displayName: "商店按钮"
    },
    recoverybtn: {
      "default": null,
      type: cc.Node,
      displayName: "垃圾桶"
    },
    bugGoldbtn: {
      "default": null,
      type: cc.Node,
      displayName: "购买按钮"
    },
    bugLabel: {
      "default": null,
      type: cc.Label,
      displayName: "购买按钮的等级"
    },
    bugGoldLabel: {
      "default": null,
      type: cc.Label,
      displayName: "购买按钮的金额"
    },
    goldLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱label"
    },
    coinBtn: {
      "default": null,
      type: cc.Node,
      displayName: "元宝按钮"
    },
    coinLabel: {
      "default": null,
      type: cc.Label,
      displayName: "元宝"
    },
    moneySpeedLabel: {
      "default": null,
      type: cc.Node,
      displayName: "产生钱的速度"
    },
    rankingBtn: {
      "default": null,
      type: cc.Node,
      displayName: "排行榜按钮"
    },
    moreGiftBtn: {
      "default": null,
      type: cc.Node,
      displayName: "更多好礼按钮"
    },
    signBtn: {
      "default": null,
      type: cc.Node,
      displayName: "签到按钮"
    },
    turnTableBtn: {
      "default": null,
      type: cc.Node,
      displayName: "转盘按钮"
    },
    persionName: {
      "default": null,
      type: cc.Label,
      displayName: "用户的等级"
    },
    giftbtn: {
      "default": null,
      type: cc.Node,
      displayName: "礼物"
    },
    jptj: {
      "default": null,
      type: cc.Node,
      displayName: "合作方浮标入口"
    },
    navigator: {
      "default": null,
      type: cc.Node,
      displayName: "动态浮标"
    },
    howgame: {
      "default": null,
      type: cc.Node,
      displayName: "怎么玩"
    },
    cbBtn: {
      "default": null,
      type: cc.Node,
      displayName: "侧边栏"
    }
  },
  ctor: function ctor() {
    GameConfig.main = this;
  },
  start: function start() {
    var _this = this;
    this.deskBg.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    GameTools.playBackgroundMusic();
    GameUiTools.setButtonClickEvents(this, this.recoverybtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.bugGoldbtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.shopBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.signBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.turnTableBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.jiasuBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.coinBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.giftbtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.rankingBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.jptj, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.navigator, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.moreGiftBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.howgame, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.cbBtn, "btnFunc");
    this.schedule(this.gameGiftBag, 180, cc.macro.REPEAT_FOREVER, 10); //开启礼包按钮动画

    this.bugPersionLevel = 1;
    this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[1]);
    this.setGameMoney();
    this.setGameCoin();
    this.timer = 0;
    this.choose = false;
    this.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
    // this.setBugGoldbtn();

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.onShow(function () {
        if (GameConfig.shareTime != 0) {
          if (GameConfig.shareComponent.name.indexOf("main") != -1) {
            var reTime = new Date().getTime();
            if (reTime - GameConfig.shareTime >= 3000) {
              // GameConfig.shareComponent.shareSuccess();
              GameConfig.GameCoin += 100;
              _this.setGameCoin();
              GameTools.showToast('获得' + 100 + '元宝');
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('NewPersion') != -1) {
            var currentTime = new Date().getTime();
            if (currentTime - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('MoneyPanel') != -1) {
            var _currentTime = new Date().getTime();
            if (_currentTime - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('ShopTopLevel') != -1) {
            var _currentTime2 = new Date().getTime();
            if (_currentTime2 - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          GameConfig.shareTime = 0;
        }
        if (window.sharedCanvas != undefined) {
          _this.tex = new cc.Texture2D();
          window.sharedCanvas.width = 750;
          window.sharedCanvas.height = 1334;
          // 发消息给子域
          window.wx.postMessage({
            messageType: 3,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            score: GameConfig.GameMoney,
            level: GameConfig.GamePersonMaxLevel
          });
          setTimeout(function () {
            console.log("initWithElement......");
            _this.tex.initWithElement(window.sharedCanvas);
            _this.tex.handleLoadedTexture();
            _this.gameNextRank.spriteFrame = new cc.SpriteFrame(_this.tex);
          }, 2000);
        }
      });
      wx.onHide(function () {
        var _time = new Date().getTime();
        GameConfig.lastTime = _time; // 记录离线时间戳
        GameTools.setItemByLocalStorage("lastTime", GameConfig.lastTime);
      });
      // GameTools.showBannerAd();
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      console.log("加载广告");
      // GameTools.showBannerAd();
    }
  },
  onLoad: function onLoad() {
    this.deskArr = new Array();
    for (var i = 0; i < GameConfig.Row; i++) {
      this.deskArr[i] = Array();
    }
    for (var _i = 0; _i < GameConfig.Row; _i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        var desk = cc.instantiate(this.deskSprite);
        // if(i==0&& j==0){
        // desk.getComponent('DeskSprite').initDesk(1,j*173-262.5,-209*i+113);
        // }else{
        desk.getComponent('DeskSprite').initDesk(GameTools.getItemByLocalStorage("deskArr" + _i + j, 0), j * 173 - 262.5, -209 * _i + 113);
        // }
        this.deskArr[_i][j] = desk.getComponent("DeskSprite");
        this.deskNode.addChild(desk, _i, 'DeskSprite');
      }
    }
    this.moveDeskSprite.node.zIndex = 1000;
    this.setFirstGame(); //判断今天是否为第一次进来和离线的时间差
    GameConfig.startMs = new Date().getTime();
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.cp = this;
      if (GameConfig.IS_LOAD_MINI) {
        window.cp.showMinProgram();
        window.cp.schedule(window.cp.showMinProgram, 5);
        // setTimeout(() => {
        //     window.cp.showMinProgram();
        // }, 5000);
      } else {
        GameTools.initSelfMiniProgram(function (flag) {
          GameTools.initEQMiniProgram(GameConfig.UserInfo, function (flag) {
            window.cp.showMinProgram();
            window.cp.schedule(window.cp.showMinProgram, 5);
            // setTimeout(() => {
            //     window.cp.showMinProgram();
            // }, 5000);
            GameConfig.IS_LOAD_MINI = true;
          });
        });
      }
    }
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameCoin += 100;
    this.setGameCoin();
    GameTools.showToast('获得' + 100 + '元宝');
  },
  gameGiftBag: function gameGiftBag() {
    //礼包按钮
    this.giftbtn.active = true;
    this.giftbtn.setPosition(-443, 356);
    this.giftbtn.stopAllActions();
    this.giftbtn.runAction(cc.jumpBy(15, 900, 0, 80, 5));
  },
  setFirstGame: function setFirstGame() {
    var now = new Date();
    var todayBeginTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    GameConfig.lastTime = GameTools.getItemByLocalStorage("lastTime", 0);
    //当前是否是今天的第一次进来
    if (todayBeginTimestamp > GameConfig.lastTime) {
      GameConfig.turnTableNum += 2;
      GameTools.setItemByLocalStorage("turnNum", GameConfig.turnTableNum);
    }
    if (GameConfig.lastTime == 0) {
      return;
    }
    var nowTime = now.getTime();
    var offLineTime = Math.floor((nowTime - GameConfig.lastTime) / 60000);
    //离线是否为10分钟
    if (offLineTime > 10) {
      GameUiTools.loadingLayer("Panel/LixianPanel");
      // this.openOffLineTime();
    }
  },

  showMinProgram: function showMinProgram() {
    // 他人的小程序导航
    GameTools.showMinProgram(this.navigator);
  },
  //按钮功能点击
  btnFunc: function btnFunc(event) {
    GameTools.playSimpleAudioEngine(3);
    var button = event.target;
    if (this.recoverybtn == button) {
      console.log("回收按钮");
      GameTools.toastMessage(11);
    } else if (this.bugGoldbtn == button) {
      console.log("购买按钮");
      this.bugGoldFunc(this.bugPersionLevel);
    } else if (this.shopBtn == button) {
      GameUiTools.loadingLayer("Panel/ShopPanel");
    } else if (this.signBtn == button) {
      GameUiTools.loadingLayer("Panel/SignPanel");
    } else if (this.turnTableBtn == button) {
      GameUiTools.loadingLayer("Panel/TrunPanel");
    } else if (this.jiasuBtn == button) {
      GameUiTools.loadingLayer("Panel/JiasuPanel");
    } else if (this.coinBtn == button) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    } else if (this.giftbtn == button) {
      GameUiTools.loadingLayer("Panel/MoneyPanel");
      this.giftbtn.active = false;
    } else if (this.rankingBtn == button) {
      GameTools.submitScore(GameConfig.GameMoney); //提交排行数据
      GameUiTools.loadingLayer("Panel/rank");
    } else if (this.jptj == button) {
      this.jptj.active = false;
      GameUiTools.loadingLayer("Panel/Jptj");
    } else if (this.navigator == button) {
      GameTools.navigateToMiniProgram(GameConfig.APPID, GameConfig.PATH);
    } else if (this.moreGiftBtn == button) {
      GameUiTools.loadingLayer("Panel/SelfApp");
    } else if (this.howgame == button) {
      GameUiTools.loadingLayer("Panel/HowGame");
    } else if (this.cbBtn == button) {
      console.log("点击侧边栏按钮");
      GameUiTools.loadingLayer("Panel/CblPanel");

      // tt.showModal({
      //     title: "进入侧边栏",
      //     content: "领取奖励100元宝",
      //     confirmColor: "#050511",
      //     cancelColor: "#FF0000",
      //     success(res) {
      //         console.log("用户点击了" + (res.confirm ? "确定" : "取消"))
      //         if (res.confirm) {
      //             tt.navigateToScene({
      //                 scene: "sidebar",
      //                 success: (res) => {
      //
      //                     console.log("navigate to scene success");
      //                     // 跳转成功回调逻辑
      //                     let coins = [100];
      //                     console.log("元宝变更前", GameConfig.GameCoin  )
      //                     GameConfig.GameCoin += coins[0];
      //                     GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
      //                     console.log("元宝变更后", GameConfig.GameCoin  )
      //                     GameTools.showToast("获得元宝+" + coins[0]);
      //                 },
      //                 fail: (res) => {
      //                     console.log("navigate to scene fail: ", res);
      //                     // 跳转失败回调逻辑
      //                 },
      //             });
      //         }
      //         if (res.cancel) {
      //             tt.showToast({
      //                 title: '取消',
      //                 icon: "none"
      //             });
      //         }
      //     },
      //     fail(err) {
      //         console.log('showModal fail', err);
      //     },
      //     complete(res) {
      //         console.log('showModal complete', res);
      //     }
      // });
    }
  },
  //按住不放寻找相同的人物
  selectDeskHide: function selectDeskHide(number) {
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].number != number) {
          this.deskArr[i][j].deskClickShow(1);
        }
      }
    }
  },
  //移动人物
  onTouchMoved: function onTouchMoved(event) {
    var touchPoint = event.touch.getLocation();
    this.moveDeskSprite.node.setPosition(this.deskNode.convertToNodeSpaceAR(touchPoint));
    // console.log("移动",touchPoint);
  },

  //点击
  onTouchBegan: function onTouchBegan(event) {
    var touchPoint = event.touch.getLocation();
    // console.log("点击",touchPoint);
    this.selectDeskSprite = null;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].node.getChildByName("bg").getBoundingBoxToWorld().contains(touchPoint) && this.deskArr[i][j].number != 0) {
          this.selectDeskSprite = this.deskArr[i][j];
          this.deskArr[i][j].deskClickShow(1);
          this.moveDeskSprite.node.active = true;
          this.moveDeskSprite.node.setPosition(this.deskNode.convertToNodeSpaceAR(touchPoint));
          GameUiTools.setSpriteFrame("persion/LV" + this.deskArr[i][j].number, this.moveDeskSprite);
          this.selectDeskHide(this.deskArr[i][j].number);
          return true;
        }
      }
    }
    return false;
  },
  //移出屏幕外
  onTouchCancel: function onTouchCancel(event) {
    var _this2 = this;
    if (this.selectDeskSprite == null) {
      return;
    }
    this.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(0.1, this.selectDeskSprite.node.x, this.selectDeskSprite.node.y), cc.callFunc(function () {
      _this2.selectDeskSprite.deskClickShow(2);
      _this2.moveDeskSprite.node.active = false;
    })));
  },
  // update (dt) {},
  //金钱购买按钮
  bugGoldFunc: function bugGoldFunc(level) {
    GameTools.playSimpleAudioEngine(1);
    if (GameConfig.GameMoney < GameConfig.buyGoldUpgrade[level]) {
      console.log("金钱不足");
      GameTools.toastMessage(10);
      GameUiTools.loadingLayer("Panel/MoneyPanel");
      return false;
    }
    if (this.choose) {
      GameConfig.showPersonNumber = level + 1;
      GameUiTools.loadingLayer("Panel/ShopTopLevel");
      this.choose = false;
    } else {
      if (this.addDeskSpriteByLevel(level)) {
        GameConfig.GameMoney -= GameConfig.buyGoldUpgrade[level];
        if (level == 1) {
          GameConfig.buyGoldUpgrade[1] = Math.floor(GameConfig.buyGoldUpgrade[1] * 1.07);
        } else {
          GameConfig.buyGoldUpgrade[level] = Math.floor(GameConfig.buyGoldUpgrade[level] * 1.175);
        }
        GameTools.setItemByLocalStorage("buyGoldUpgrade" + level, GameConfig.buyGoldUpgrade[level]);
        this.setGameMoney();
        return true;
      } else {
        return false;
      }
    }
  },
  //放开人物
  onTouchEnded: function onTouchEnded(event) {
    var _this3 = this;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j] != this.selectDeskSprite) {
          this.deskArr[i][j].deskClickShow(2);
        }
      }
    }
    var touchPoint = event.touch.getLocation();
    // console.log("放开",touchPoint);
    var moveTime = 0.1;
    var _loop = function _loop(_i2) {
      var _loop2 = function _loop2(_j) {
        if (_this3.selectDeskSprite && _this3.deskArr[_i2][_j].node.getChildByName("bg").getBoundingBoxToWorld().contains(touchPoint) && _this3.deskArr[_i2][_j] != _this3.selectDeskSprite) {
          if (_this3.deskArr[_i2][_j].number == 0) {
            //移动的位置没人
            _this3.deskArr[_i2][_j].number = _this3.selectDeskSprite.number;
            _this3.selectDeskSprite.number = 0;
            _this3.deskArr[_i2][_j].deskShow();
            _this3.deskArr[_i2][_j].deskClickShow(1);
            _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
              _this3.deskArr[_i2][_j].deskClickShow(2);
              _this3.moveDeskSprite.node.active = false;
            })));
          } else if (_this3.deskArr[_i2][_j].number == _this3.selectDeskSprite.number) {
            //相同等级+1
            if (_this3.deskArr[_i2][_j].number < 42) {
              GameTools.playSimpleAudioEngine(2);
              _this3.deskArr[_i2][_j].number++;
              // this.deskArr[i][j].deskShow();
              _this3.deskArr[_i2][_j].addNumberAnim();
              if (_this3.deskArr[_i2][_j].number > GameConfig.GamePersonMaxLevel) {
                //合成超过当前最大人物等级
                GameConfig.GamePersonMaxLevel = _this3.deskArr[_i2][_j].number;
                GameTools.setItemByLocalStorage("GamePersonMaxLevel", GameConfig.GamePersonMaxLevel);
                GameConfig.showPersonNumber = GameConfig.GamePersonMaxLevel;
                console.log("解锁新一级的官啦，现在的官级是" + GameConfig.GamePersonMaxLevel);
                GameUiTools.loadingLayer("Panel/NewPersion");
                _this3.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
                GameTools.toastMessage(15);
                GameTools.submitScore(GameConfig.GameMoney); //提交新的子域信息
                // setTimeout(() => {
                //     //可加人物的钱的显示
                // }, 300);
              } else {
                // GameTools.toastMessage(12);
                // GameTools.playSimpleAudioEngine(2);
              }
              GameTools.setItemByLocalStorage("GamePlayer", GameConfig.GamePersonMaxLevel);
              _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
                _this3.moveDeskSprite.node.active = false;
              })));
              _this3.selectDeskSprite.number = 0;
              GameTools.setItemByLocalStorage("GameCompoundPersonNumber", GameTools.getItemByLocalStorage("GameCompoundPersonNumber", 0) + 1); //添加合成人物次数
            } else {
              console.log("你已到达巅峰");
              GameTools.toastMessage(13);
              _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.selectDeskSprite.node.x, _this3.selectDeskSprite.node.y), cc.callFunc(function () {
                _this3.selectDeskSprite.deskClickShow(2);
                _this3.moveDeskSprite.node.active = false;
              })));
              return {
                v: {
                  v: void 0
                }
              };
            }
          } else {
            var number = _this3.deskArr[_i2][_j].number;
            _this3.deskArr[_i2][_j].number = _this3.selectDeskSprite.number;
            _this3.deskArr[_i2][_j].deskShow();
            _this3.deskArr[_i2][_j].deskClickShow(1);
            _this3.selectDeskSprite.number = number;
            _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
              _this3.deskArr[_i2][_j].deskClickShow(2);
              _this3.moveDeskSprite.node.active = false;
            })));
          }
          _this3.selectDeskSprite.deskShow();
          _this3.selectDeskSprite.deskClickShow(2);
          _this3.saveDeskArr();
          return {
            v: {
              v: void 0
            }
          };
        }
      };
      for (var _j = 0; _j < GameConfig.Col; _j++) {
        var _ret2 = _loop2(_j);
        if (typeof _ret2 === "object") return _ret2.v;
      }
    };
    for (var _i2 = 0; _i2 < GameConfig.Row; _i2++) {
      var _ret = _loop(_i2);
      if (typeof _ret === "object") return _ret.v;
    }
    //回收
    if (this.selectDeskSprite && this.recoverybtn.getBoundingBoxToWorld().contains(touchPoint)) {
      GameTools.playSimpleAudioEngine(3);
      this.moveDeskSprite.node.active = false;
      this.selectDeskSprite.number = 0;
      this.selectDeskSprite.deskShow();
      this.saveDeskArr();
      return;
    }
    if (this.selectDeskSprite) {
      this.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, this.selectDeskSprite.node.x, this.selectDeskSprite.node.y), cc.callFunc(function () {
        _this3.selectDeskSprite.deskClickShow(2);
        _this3.moveDeskSprite.node.active = false;
      })));
    }
  },
  //升高一等级
  chooseLevel: function chooseLevel(level) {
    if (this.addDeskSpriteByLevel(level)) {
      GameConfig.GameMoney -= GameConfig.buyGoldUpgrade[level - 1];
      if (level == 2) {
        GameConfig.buyGoldUpgrade[1] = Math.floor(GameConfig.buyGoldUpgrade[1] * 1.07);
      } else {
        GameConfig.buyGoldUpgrade[level - 1] = Math.floor(GameConfig.buyGoldUpgrade[level - 1] * 1.175);
      }
      GameTools.setItemByLocalStorage("buyGoldUpgrade" + level - 1, GameConfig.buyGoldUpgrade[level - 1]);
      this.setGameMoney();
      return true;
    } else {
      return false;
    }
  },
  //点击购买按钮判断桌子出现人物的功能
  addDeskSpriteByLevel: function addDeskSpriteByLevel(level) {
    var _this4 = this;
    var _loop3 = function _loop3(i) {
      var _loop4 = function _loop4(j) {
        if (_this4.deskArr[i][j].number == 0) {
          _this4.deskArr[i][j].deskClickShow(1);
          _this4.moveDeskSprite.node.active = true;
          _this4.moveDeskSprite.node.setPosition(-55, -366);
          GameUiTools.setSpriteFrame("persion/LV" + level, _this4.moveDeskSprite);
          _this4.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(0.1, _this4.deskArr[i][j].node.getPosition()), cc.callFunc(function () {
            _this4.deskArr[i][j].deskClickShow(2);
            _this4.moveDeskSprite.node.active = false;
          })));
          _this4.deskArr[i][j].number = level;
          _this4.deskArr[i][j].deskShow();
          GameTools.setItemByLocalStorage("deskArr" + i + j, _this4.deskArr[i][j].number);
          // GameTools.setItemByLocalStorage("deskArr" + i + j,this.deskArr[i][j].number);
          return {
            v: {
              v: true
            }
          };
        }
      };
      for (var j = 0; j < GameConfig.Col; j++) {
        var _ret4 = _loop4(j);
        if (typeof _ret4 === "object") return _ret4.v;
      }
    };
    for (var i = 0; i < GameConfig.Row; i++) {
      var _ret3 = _loop3(i);
      if (typeof _ret3 === "object") return _ret3.v;
    }
    console.log("买不下了，已经满了");
    GameTools.toastMessage(9);
    return false;
  },
  //保存桌子上的人物信息
  saveDeskArr: function saveDeskArr() {
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        GameTools.setItemByLocalStorage("deskArr" + i + j, this.deskArr[i][j].number);
      }
    }
  },
  //显示购买信息
  setBugGoldbtn: function setBugGoldbtn() {
    var level = GameConfig.GamePersonMaxLevel - 4;
    if (level > 1) {
      for (var buglevel = level; buglevel > 0; buglevel--) {
        if (GameConfig.GameMoney > GameConfig.buyGoldUpgrade[buglevel]) {
          if (buglevel < level) {
            var math = Math.random();
            if (math > 0.8) {
              this.choose = true;
            }
          }
          this.bugPersionLevel = buglevel;
          this.bugLabel.string = "LV " + buglevel; //购买等级
          this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[buglevel]); //购买金额
          return;
        }
      }
    } else {
      this.bugPersionLevel = 1;
      this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[1]);
      this.bugLabel.string = "LV 1"; //购买等级
    }
  },
  //元宝购买按钮
  buyCoinFunc: function buyCoinFunc(level) {
    GameTools.playSimpleAudioEngine(1);
    if (GameConfig.GameCoin < GameConfig.buyCoinUpgrade[level]) {
      console.log("元宝不足");
      GameTools.toastMessage(8);
      var self = this;
      GameTools._createVedioAd(function (res) {
        if (res.isEnded || res.raw) {
          GameConfig.GameCoin += 100;
          self.setGameCoin();
        }
      });
      return false;
    }
    if (this.addDeskSpriteByLevel(level)) {
      GameConfig.GameCoin -= GameConfig.buyCoinUpgrade[level];
      // if(level == 1){
      //     GameConfig.buyCoinUpgrade[1] = Math.floor(GameConfig.buyCoinUpgrade[1] * 1.07);
      // }else{
      GameConfig.buyCoinUpgrade[level] = Math.floor(GameConfig.buyCoinUpgrade[level] * 1.175);
      // }
      GameTools.setItemByLocalStorage("buyCoinUpgrade" + level, GameConfig.buyCoinUpgrade[level]);
      this.setGameCoin();
      return true;
    } else {
      return false;
    }
  },
  //加速
  gameDouble: function gameDouble(num) {
    this.jiasuBtn.color = cc.Color.GRAY;
    this.jiasuBtn.getComponent(cc.Button).interactable = false;
    this.jiasuBtn.getChildByName("numbg").active = true;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        this.deskArr[i][j].isSelect = true;
      }
    }
    var timer = null;
    var t = num;
    var m = 0;
    var s = 0;
    m = Math.floor(t / 60 % 60);
    m < 10 && (m = '0' + m);
    s = Math.floor(t % 60);
    function countDown() {
      s--;
      s < 10 && (s = '0' + s);
      if (s.length >= 3) {
        s = 59;
        m = "0" + (Number(m) - 1);
      }
      if (m.length >= 3) {
        m = '00';
        s = '00';
        GameConfig.main.jiasuBtn.color = cc.Color.WHITE;
        GameConfig.main.jiasuBtn.getComponent(cc.Button).interactable = true;
        GameConfig.main.jiasuBtn.getChildByName("numbg").active = false;
        for (var _i3 = 0; _i3 < GameConfig.Row; _i3++) {
          for (var _j2 = 0; _j2 < GameConfig.Col; _j2++) {
            GameConfig.main.deskArr[_i3][_j2].isSelect = false;
          }
        }
        clearInterval(timer);
      }
      GameConfig.main.jiasuBtn.getChildByName("numbg").getChildByName("number").getComponent(cc.Label).string = m + ":" + s;
      console.log(m + "分钟" + s + "秒");
    }
    timer = setInterval(countDown, 1000);
  },
  //元宝的变动
  setGameCoin: function setGameCoin() {
    this.coinLabel.string = GameTools.getNumberString(GameConfig.GameCoin);
    GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
  },
  //金钱的变动
  setGameMoney: function setGameMoney() {
    this.goldLabel.string = GameTools.getNumberString(GameConfig.GameMoney);
    GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
    this.setBugGoldbtn();
  },
  //生产金钱的速度
  getMoneySpeed: function getMoneySpeed() {
    var sum = 0;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].number != 0) {
          if (this.deskArr[i][j].isSelect) {
            sum += this.deskArr[i][j].expNumber * 2;
          } else {
            sum += this.deskArr[i][j].expNumber;
          }
        }
      }
    }
    this.moneySpeedLabel.getComponent(cc.Label).string = GameTools.getNumberString(sum) + "/秒";
    this.moneySpeedLabel.runAction(cc.sequence(cc.scaleTo(0.2, 1.3, 1.3), cc.scaleTo(0.2, 1, 1)));
    GameConfig.GameMoney += sum * 3;
    this.setGameMoney();
    return sum;
  },
  update: function update(dt) {
    this.timer += dt;
    if (this.timer >= 3) {
      this.timer = 0;
      this.getMoneySpeed();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbIkdhbWVUb29scyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRlc2tOb2RlIiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsImRlc2tTcHJpdGUiLCJQcmVmYWIiLCJtb3ZlRGVza1Nwcml0ZSIsIlNwcml0ZSIsInNlbGVjdERlc2tTcHJpdGUiLCJkZXNrQmciLCJqaWFzdUJ0biIsInNob3BCdG4iLCJyZWNvdmVyeWJ0biIsImJ1Z0dvbGRidG4iLCJidWdMYWJlbCIsIkxhYmVsIiwiYnVnR29sZExhYmVsIiwiZ29sZExhYmVsIiwiY29pbkJ0biIsImNvaW5MYWJlbCIsIm1vbmV5U3BlZWRMYWJlbCIsInJhbmtpbmdCdG4iLCJtb3JlR2lmdEJ0biIsInNpZ25CdG4iLCJ0dXJuVGFibGVCdG4iLCJwZXJzaW9uTmFtZSIsImdpZnRidG4iLCJqcHRqIiwibmF2aWdhdG9yIiwiaG93Z2FtZSIsImNiQnRuIiwiY3RvciIsIm1haW4iLCJzdGFydCIsIl90aGlzIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hCZWdhbiIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZWQiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kZWQiLCJUT1VDSF9DQU5DRUwiLCJvblRvdWNoQ2FuY2VsIiwicGxheUJhY2tncm91bmRNdXNpYyIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2NoZWR1bGUiLCJnYW1lR2lmdEJhZyIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJidWdQZXJzaW9uTGV2ZWwiLCJzdHJpbmciLCJnZXROdW1iZXJTdHJpbmciLCJidXlHb2xkVXBncmFkZSIsInNldEdhbWVNb25leSIsInNldEdhbWVDb2luIiwidGltZXIiLCJjaG9vc2UiLCJwZXJOYW1lIiwiR2FtZVBlcnNvbk1heExldmVsIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwib25TaG93Iiwic2hhcmVUaW1lIiwic2hhcmVDb21wb25lbnQiLCJuYW1lIiwiaW5kZXhPZiIsInJlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiR2FtZUNvaW4iLCJzaG93VG9hc3QiLCJjdXJyZW50VGltZSIsInNoYXJlU3VjY2VzcyIsIndpbmRvdyIsInNoYXJlZENhbnZhcyIsInVuZGVmaW5lZCIsInRleCIsIlRleHR1cmUyRCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJzY29yZSIsIkdhbWVNb25leSIsImxldmVsIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiZ2FtZU5leHRSYW5rIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm9uSGlkZSIsIl90aW1lIiwibGFzdFRpbWUiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJRUV9QTEFZIiwib25Mb2FkIiwiZGVza0FyciIsIkFycmF5IiwiaSIsIlJvdyIsImoiLCJDb2wiLCJkZXNrIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0RGVzayIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImFkZENoaWxkIiwibm9kZSIsInpJbmRleCIsInNldEZpcnN0R2FtZSIsInN0YXJ0TXMiLCJjcCIsIklTX0xPQURfTUlOSSIsInNob3dNaW5Qcm9ncmFtIiwiaW5pdFNlbGZNaW5pUHJvZ3JhbSIsImZsYWciLCJpbml0RVFNaW5pUHJvZ3JhbSIsIlVzZXJJbmZvIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsImp1bXBCeSIsIm5vdyIsInRvZGF5QmVnaW5UaW1lc3RhbXAiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInR1cm5UYWJsZU51bSIsIm5vd1RpbWUiLCJvZmZMaW5lVGltZSIsIk1hdGgiLCJmbG9vciIsImxvYWRpbmdMYXllciIsImJ0bkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImJ1dHRvbiIsInRhcmdldCIsInRvYXN0TWVzc2FnZSIsImJ1Z0dvbGRGdW5jIiwic2hhcmVQaWN0dXJlIiwic3VibWl0U2NvcmUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJBUFBJRCIsIlBBVEgiLCJzZWxlY3REZXNrSGlkZSIsIm51bWJlciIsImRlc2tDbGlja1Nob3ciLCJ0b3VjaFBvaW50IiwidG91Y2giLCJnZXRMb2NhdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJjb250YWlucyIsInNldFNwcml0ZUZyYW1lIiwiX3RoaXMyIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ4IiwieSIsImNhbGxGdW5jIiwic2hvd1BlcnNvbk51bWJlciIsImFkZERlc2tTcHJpdGVCeUxldmVsIiwiX3RoaXMzIiwibW92ZVRpbWUiLCJfbG9vcCIsIl9pMiIsIl9sb29wMiIsIl9qIiwiZGVza1Nob3ciLCJhZGROdW1iZXJBbmltIiwidiIsInNhdmVEZXNrQXJyIiwiX3JldDIiLCJfcmV0IiwiY2hvb3NlTGV2ZWwiLCJfdGhpczQiLCJfbG9vcDMiLCJfbG9vcDQiLCJnZXRQb3NpdGlvbiIsIl9yZXQ0IiwiX3JldDMiLCJzZXRCdWdHb2xkYnRuIiwiYnVnbGV2ZWwiLCJtYXRoIiwicmFuZG9tIiwiYnV5Q29pbkZ1bmMiLCJidXlDb2luVXBncmFkZSIsInNlbGYiLCJfY3JlYXRlVmVkaW9BZCIsInJlcyIsImlzRW5kZWQiLCJyYXciLCJnYW1lRG91YmxlIiwibnVtIiwiY29sb3IiLCJDb2xvciIsIkdSQVkiLCJCdXR0b24iLCJpbnRlcmFjdGFibGUiLCJpc1NlbGVjdCIsInQiLCJtIiwicyIsImNvdW50RG93biIsImxlbmd0aCIsIk51bWJlciIsIldISVRFIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZ2V0TW9uZXlTcGVlZCIsInN1bSIsImV4cE51bWJlciIsInNjYWxlVG8iLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUlFLFVBQVUsR0FBR0YsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUV0Q0csRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUM7TUFDTCxXQUFRLElBQUk7TUFDWkMsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREMsVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pILElBQUksRUFBQ0wsRUFBRSxDQUFDUyxNQUFNO01BQ2RGLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RHLGNBQWMsRUFBQztNQUNYLFdBQVEsSUFBSTtNQUNaTCxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1csTUFBTTtNQUNkSixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNESyxnQkFBZ0IsRUFBQztNQUNiLFdBQVEsSUFBSTtNQUNaUCxJQUFJLEVBQUNMLEVBQUUsQ0FBQ0UsU0FBUztNQUNqQkssV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRE0sTUFBTSxFQUFDO01BQ0gsV0FBUSxJQUFJO01BQ1pSLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RPLFFBQVEsRUFBQztNQUNMLFdBQVEsSUFBSTtNQUNaVCxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEUSxPQUFPLEVBQUM7TUFDSixXQUFRLElBQUk7TUFDWlYsSUFB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LEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RnJPLFVBQVUsQ0FBQzZGLFNBQVMsSUFBSXNJLEdBQUcsR0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ3ZLLFlBQVksRUFBRTtJQUNuQixPQUFPdUssR0FBRztFQUNkLENBQUM7RUFDREcsTUFBTSxXQUFBQSxPQUFDQyxFQUFFLEVBQUM7SUFDTixJQUFJLENBQUN6SyxLQUFLLElBQUl5SyxFQUFFO0lBQ2hCLElBQUcsSUFBSSxDQUFDekssS0FBSyxJQUFJLENBQUMsRUFBQztNQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFFLENBQUM7TUFDYixJQUFJLENBQUNvSyxhQUFhLEVBQUU7SUFDeEI7RUFDSjtBQUdKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBkZXNrTm9kZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuahjOWtkOiKgueCuVwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2tTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5QcmVmYWIsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTon5Lq654mp6aKE5Yi2J1xuICAgICAgICB9LFxuICAgICAgICBtb3ZlRGVza1Nwcml0ZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi56e75Yqo5Zu+54mHXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0RGVza1Nwcml0ZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkNvbXBvbmVudCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi56e75Yqo55qE6IqC54K5XCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVza0JnOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Y+v54K55Ye755qE6IOM5pmvXCJcbiAgICAgICAgfSxcbiAgICAgICAgamlhc3VCdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLliqDpgJ/mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wQnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5ZWG5bqX5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgcmVjb3ZlcnlidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlnoPlnL7mobZcIlxuICAgICAgICB9LFxuICAgICAgICBidWdHb2xkYnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6LSt5Lmw5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnVnTGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6LSt5Lmw5oyJ6ZKu55qE562J57qnXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnVnR29sZExhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui0reS5sOaMiemSrueahOmHkeminVwiXG4gICAgICAgIH0sXG4gICAgICAgIGdvbGRMYWJlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLph5HpkrFsYWJlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIGNvaW5CdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhYPlrp3mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBjb2luTGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5YWD5a6dXCJcbiAgICAgICAgfSxcbiAgICAgICAgbW9uZXlTcGVlZExhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Lqn55Sf6ZKx55qE6YCf5bqmXCJcbiAgICAgICAgfSxcbiAgICAgICAgcmFua2luZ0J0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuaOkuihjOamnOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vcmVHaWZ0QnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5pu05aSa5aW956S85oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbkJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuetvuWIsOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHR1cm5UYWJsZUJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui9rOebmOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHBlcnNpb25OYW1lOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIueUqOaIt+eahOetiee6p1wiXG4gICAgICAgIH0sXG4gICAgICAgIGdpZnRidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnpLznialcIlxuICAgICAgICB9LFxuICAgICAgICBqcHRqOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5ZCI5L2c5pa55rWu5qCH5YWl5Y+jXCJcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdG9yOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Yqo5oCB5rWu5qCHXCJcbiAgICAgICAgfSxcbiAgICAgICAgaG93Z2FtZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuaAjuS5iOeOqVwiXG4gICAgICAgIH0sXG4gICAgICAgIGNiQnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5L6n6L655qCPXCJcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgY3RvcigpIHtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluID0gdGhpcztcbiAgICB9LFxuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuZGVza0JnLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Ub3VjaEJlZ2FuLHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLHRoaXMub25Ub3VjaE1vdmVkLHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5vblRvdWNoRW5kZWQsdGhpcyk7XG4gICAgICAgIHRoaXMuZGVza0JnLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCx0aGlzLm9uVG91Y2hDYW5jZWwsdGhpcyk7XG4gICAgICAgIEdhbWVUb29scy5wbGF5QmFja2dyb3VuZE11c2ljKCk7XG5cbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5yZWNvdmVyeWJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJ1Z0dvbGRidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5zaG9wQnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuc2lnbkJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnR1cm5UYWJsZUJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmppYXN1QnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuY29pbkJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmdpZnRidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5yYW5raW5nQnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuanB0aiwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm5hdmlnYXRvciwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm1vcmVHaWZ0QnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuaG93Z2FtZSwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmNiQnRuLCBcImJ0bkZ1bmNcIik7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdhbWVHaWZ0QmFnLCAxODAsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSLCAxMCk7Ly/lvIDlkK/npLzljIXmjInpkq7liqjnlLtcblxuICAgICAgICB0aGlzLmJ1Z1BlcnNpb25MZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuYnVnR29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVsxXSk7XG4gICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgIHRoaXMuc2V0R2FtZUNvaW4oKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuY2hvb3NlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyc2lvbk5hbWUuc3RyaW5nID0gR2FtZUNvbmZpZy5wZXJOYW1lW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLTFdO1xuICAgICAgICAvLyB0aGlzLnNldEJ1Z0dvbGRidG4oKTtcblxuXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcbiAgICAgICAgICAgIHd4Lm9uU2hvdygoKT0+e1xuICAgICAgICAgICAgICAgIGlmKEdhbWVDb25maWcuc2hhcmVUaW1lICE9IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50Lm5hbWUuaW5kZXhPZihcIm1haW5cIikgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVUaW1lIC0gR2FtZUNvbmZpZy5zaGFyZVRpbWUgPj0gMzAwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5zaGFyZVN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVDb2luKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn6I635b6XJysxMDArJ+WFg+WunScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn5YiG5Lqr5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5uYW1lLmluZGV4T2YoJ05ld1BlcnNpb24nKSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gR2FtZUNvbmZpZy5zaGFyZVRpbWUgPj0gMzAwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5zaGFyZVN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+WIhuS6q+Wksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQubmFtZS5pbmRleE9mKCdNb25leVBhbmVsJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KCfliIbkuqvlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50Lm5hbWUuaW5kZXhPZignU2hvcFRvcExldmVsJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KCfliIbkuqvlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zaGFyZWRDYW52YXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4ID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLndpZHRoID0gNzUwO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLmhlaWdodCA9IDEzMzQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPkea2iOaBr+e7meWtkOWfn1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBHYW1lQ29uZmlnLkdhbWVNb25leSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFdpdGhFbGVtZW50Li4uLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleC5pbml0V2l0aEVsZW1lbnQod2luZG93LnNoYXJlZENhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleC5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVOZXh0UmFuay5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0sMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHd4Lm9uSGlkZSgoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubGFzdFRpbWUgPSBfdGltZTsvLyDorrDlvZXnprvnur/ml7bpl7TmiLNcbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwibGFzdFRpbWVcIixHYW1lQ29uZmlnLmxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlFRX1BMQVkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3lub/lkYpcIilcbiAgICAgICAgICAgIC8vIEdhbWVUb29scy5zaG93QmFubmVyQWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmRlc2tBcnIgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldID0gQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5Sb3c7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8R2FtZUNvbmZpZy5Db2w7aisrKXtcbiAgICAgICAgICAgICAgICBsZXQgZGVzayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGVza1Nwcml0ZSk7XG4gICAgICAgICAgICAgICAgLy8gaWYoaT09MCYmIGo9PTApe1xuICAgICAgICAgICAgICAgIC8vIGRlc2suZ2V0Q29tcG9uZW50KCdEZXNrU3ByaXRlJykuaW5pdERlc2soMSxqKjE3My0yNjIuNSwtMjA5KmkrMTEzKTtcbiAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICBkZXNrLmdldENvbXBvbmVudCgnRGVza1Nwcml0ZScpLmluaXREZXNrKEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJkZXNrQXJyXCIraStqLDApLGoqMTczLTI2Mi41LC0yMDkqaSsxMTMpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0gPSBkZXNrLmdldENvbXBvbmVudChcIkRlc2tTcHJpdGVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNrTm9kZS5hZGRDaGlsZChkZXNrLGksJ0Rlc2tTcHJpdGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuekluZGV4ID0gMTAwMDtcbiAgICAgICAgdGhpcy5zZXRGaXJzdEdhbWUoKTsvL+WIpOaWreS7iuWkqeaYr+WQpuS4uuesrOS4gOasoei/m+adpeWSjOemu+e6v+eahOaXtumXtOW3rlxuICAgICAgICBHYW1lQ29uZmlnLnN0YXJ0TXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xuICAgICAgICAgICAgd2luZG93LmNwID0gdGhpcztcblxuXG4gICAgICAgICAgICBpZihHYW1lQ29uZmlnLklTX0xPQURfTUlOSSl7XG4gICAgICAgICAgICAgICAgd2luZG93LmNwLnNob3dNaW5Qcm9ncmFtKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmNwLnNjaGVkdWxlKHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSwgNSk7XG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIC8vIH0sIDUwMDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLmluaXRTZWxmTWluaVByb2dyYW0oZnVuY3Rpb24gKGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLmluaXRFUU1pbmlQcm9ncmFtKEdhbWVDb25maWcuVXNlckluZm8sIGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3Auc2hvd01pblByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zY2hlZHVsZSh3aW5kb3cuY3Auc2hvd01pblByb2dyYW0sIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmNwLnNob3dNaW5Qcm9ncmFtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuSVNfTE9BRF9NSU5JID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzaGFyZVN1Y2Nlc3MoKXtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiArPSAxMDA7XG4gICAgICAgIHRoaXMuc2V0R2FtZUNvaW4oKTtcbiAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn6I635b6XJysxMDArJ+WFg+WunScpO1xuICAgIH0sXG5cbiAgICBnYW1lR2lmdEJhZygpIHsvL+ekvOWMheaMiemSrlxuICAgICAgICB0aGlzLmdpZnRidG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5naWZ0YnRuLnNldFBvc2l0aW9uKC00NDMsIDM1Nik7XG4gICAgICAgIHRoaXMuZ2lmdGJ0bi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmdpZnRidG4ucnVuQWN0aW9uKGNjLmp1bXBCeSgxNSwgOTAwLCAwLCA4MCwgNSkpO1xuICAgIH0sXG4gICAgc2V0Rmlyc3RHYW1lKCl7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdG9kYXlCZWdpblRpbWVzdGFtcCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICBHYW1lQ29uZmlnLmxhc3RUaW1lID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImxhc3RUaW1lXCIsMCk7XG4gICAgICAgIC8v5b2T5YmN5piv5ZCm5piv5LuK5aSp55qE56ys5LiA5qyh6L+b5p2lXG4gICAgICAgIGlmKHRvZGF5QmVnaW5UaW1lc3RhbXAgPiBHYW1lQ29uZmlnLmxhc3RUaW1lKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcudHVyblRhYmxlTnVtICs9IDI7XG4gICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwidHVybk51bVwiLEdhbWVDb25maWcudHVyblRhYmxlTnVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZihHYW1lQ29uZmlnLmxhc3RUaW1lID09IDApe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub3dUaW1lID0gbm93LmdldFRpbWUoKTtcbiAgICAgICAgbGV0IG9mZkxpbmVUaW1lID0gTWF0aC5mbG9vcigobm93VGltZSAtIEdhbWVDb25maWcubGFzdFRpbWUpLzYwMDAwKTtcbiAgICAgICAgLy/nprvnur/mmK/lkKbkuLoxMOWIhumSn1xuICAgICAgICBpZihvZmZMaW5lVGltZSA+IDEwKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL0xpeGlhblBhbmVsXCIpO1xuICAgICAgICAgICAgLy8gdGhpcy5vcGVuT2ZmTGluZVRpbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01pblByb2dyYW0gOiBmdW5jdGlvbigpe1xuICAgICAgICAvLyDku5bkurrnmoTlsI/nqIvluo/lr7zoiKpcbiAgICAgICAgR2FtZVRvb2xzLnNob3dNaW5Qcm9ncmFtKHRoaXMubmF2aWdhdG9yKTtcbiAgICB9LFxuICAgIC8v5oyJ6ZKu5Yqf6IO954K55Ye7XG4gICAgYnRuRnVuYyhldmVudCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmKHRoaXMucmVjb3ZlcnlidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Zue5pS25oyJ6ZKuXCIpO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxMSk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYnVnR29sZGJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLotK3kubDmjInpkq5cIik7XG4gICAgICAgICAgICB0aGlzLmJ1Z0dvbGRGdW5jKHRoaXMuYnVnUGVyc2lvbkxldmVsKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zaG9wQnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9TaG9wUGFuZWxcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2lnbkJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2lnblBhbmVsXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnR1cm5UYWJsZUJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvVHJ1blBhbmVsXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmppYXN1QnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9KaWFzdVBhbmVsXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvaW5CdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZVRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmdpZnRidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL01vbmV5UGFuZWxcIik7XG4gICAgICAgICAgICB0aGlzLmdpZnRidG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucmFua2luZ0J0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVRvb2xzLnN1Ym1pdFNjb3JlKEdhbWVDb25maWcuR2FtZU1vbmV5KTsvL+aPkOS6pOaOkuihjOaVsOaNrlxuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvcmFua1wiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5qcHRqID09IGJ1dHRvbil7XG4gICAgICAgICAgICB0aGlzLmpwdGouYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9KcHRqXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm5hdmlnYXRvciA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVRvb2xzLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbShHYW1lQ29uZmlnLkFQUElELCBHYW1lQ29uZmlnLlBBVEgpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vcmVHaWZ0QnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9TZWxmQXBwXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmhvd2dhbWUgPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL0hvd0dhbWVcIik7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLmNiQnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S+p+i+ueagj+aMiemSrlwiKVxuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvQ2JsUGFuZWxcIik7XG5cbiAgICAgICAgICAgIC8vIHR0LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6IFwi6L+b5YWl5L6n6L655qCPXCIsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogXCLpooblj5blpZblirExMDDlhYPlrp1cIixcbiAgICAgICAgICAgIC8vICAgICBjb25maXJtQ29sb3I6IFwiIzA1MDUxMVwiLFxuICAgICAgICAgICAgLy8gICAgIGNhbmNlbENvbG9yOiBcIiNGRjAwMDBcIixcbiAgICAgICAgICAgIC8vICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIueUqOaIt+eCueWHu+S6hlwiICsgKHJlcy5jb25maXJtID8gXCLnoa7lrppcIiA6IFwi5Y+W5raIXCIpKVxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR0Lm5hdmlnYXRlVG9TY2VuZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2NlbmU6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gc2NlbmUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8g6Lez6L2s5oiQ5Yqf5Zue6LCD6YC76L6RXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxldCBjb2lucyA9IFsxMDBdO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFg+WuneWPmOabtOWJjVwiLCBHYW1lQ29uZmlnLkdhbWVDb2luICApXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gY29pbnNbMF07XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29pblwiLEdhbWVDb25maWcuR2FtZUNvaW4pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFg+WuneWPmOabtOWQjlwiLCBHYW1lQ29uZmlnLkdhbWVDb2luICApXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLojrflvpflhYPlrp0rXCIgKyBjb2luc1swXSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gc2NlbmUgZmFpbDogXCIsIHJlcyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rOWksei0peWbnuiwg+mAu+i+kVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAocmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iCcsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICBmYWlsKGVycikge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc2hvd01vZGFsIGZhaWwnLCBlcnIpO1xuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgY29tcGxldGUocmVzKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93TW9kYWwgY29tcGxldGUnLCByZXMpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgLy/mjInkvY/kuI3mlL7lr7vmib7nm7jlkIznmoTkurrnialcbiAgICBzZWxlY3REZXNrSGlkZShudW1iZXIpe1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciAhPSBudW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v56e75Yqo5Lq654mpXG4gICAgb25Ub3VjaE1vdmVkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuc2V0UG9zaXRpb24odGhpcy5kZXNrTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50KSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi56e75YqoXCIsdG91Y2hQb2ludCk7XG4gICAgfSxcblxuICAgIC8v54K55Ye7XG4gICAgb25Ub3VjaEJlZ2FuOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu1wiLHRvdWNoUG9pbnQpO1xuICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUgPSBudWxsO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSAmJiB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyICE9IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUgPSB0aGlzLmRlc2tBcnJbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuZGVza05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hQb2ludCkpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5zZXRTcHJpdGVGcmFtZShcInBlcnNpb24vTFZcIit0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyLHRoaXMubW92ZURlc2tTcHJpdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza0hpZGUodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAvL+enu+WHuuWxj+W5leWkllxuICAgIG9uVG91Y2hDYW5jZWwoZXZlbnQpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdERlc2tTcHJpdGUgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLCB0aGlzLnNlbGVjdERlc2tTcHJpdGUubm9kZS54LCB0aGlzLnNlbGVjdERlc2tTcHJpdGUubm9kZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICAvL+mHkemSsei0reS5sOaMiemSrlxuICAgIGJ1Z0dvbGRGdW5jKGxldmVsKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgxKTtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5HYW1lTW9uZXkgPCBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsXSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHkemSseS4jei2s1wiKTtcbiAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMTApO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvTW9uZXlQYW5lbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmNob29zZSl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnNob3dQZXJzb25OdW1iZXIgPSBsZXZlbCsxO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2hvcFRvcExldmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5jaG9vc2UgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLmFkZERlc2tTcHJpdGVCeUxldmVsKGxldmVsKSl7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgLT0gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF07XG4gICAgICAgICAgICAgICAgaWYobGV2ZWwgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0gKiAxLjA3KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWxdICogMS4xNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiYnV5R29sZFVwZ3JhZGVcIitsZXZlbCxHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lTW9uZXkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/mlL7lvIDkurrnialcbiAgICBvblRvdWNoRW5kZWQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuUm93OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5Db2w7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlc2tBcnJbaV1bal0gIT0gdGhpcy5zZWxlY3REZXNrU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdG91Y2hQb2ludCA9IGV2ZW50LnRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pS+5byAXCIsdG91Y2hQb2ludCk7XG4gICAgICAgIGxldCBtb3ZlVGltZSA9IDAuMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLlJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3REZXNrU3ByaXRlICYmIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModG91Y2hQb2ludCkgJiYgdGhpcy5kZXNrQXJyW2ldW2pdICE9IHRoaXMuc2VsZWN0RGVza1Nwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9PSAwKSB7Ly/np7vliqjnmoTkvY3nva7msqHkurpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPSB0aGlzLnNlbGVjdERlc2tTcHJpdGUubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza1Nob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLngsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyID09IHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIpIHsvL+ebuOWQjOetiee6pysxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA8IDQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmFkZE51bWJlckFuaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA+IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKSB7Ly/lkIjmiJDotoXov4flvZPliY3mnIDlpKfkurrniannrYnnuqdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwgPSB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZVBlcnNvbk1heExldmVsXCIsIEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyID0gR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Kej6ZSB5paw5LiA57qn55qE5a6Y5ZWm77yM546w5Zyo55qE5a6Y57qn5pivXCIrR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL05ld1BlcnNpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lvbk5hbWUuc3RyaW5nID0gR2FtZUNvbmZpZy5wZXJOYW1lW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDE1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnN1Ym1pdFNjb3JlKEdhbWVDb25maWcuR2FtZU1vbmV5KTsvL+aPkOS6pOaWsOeahOWtkOWfn+S/oeaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8v5Y+v5Yqg5Lq654mp55qE6ZKx55qE5pi+56S6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lUGxheWVyXCIsIEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueCwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb21wb3VuZFBlcnNvbk51bWJlclwiLCBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvbXBvdW5kUGVyc29uTnVtYmVyXCIsIDApICsgMSk7Ly/mt7vliqDlkIjmiJDkurrnianmrKHmlbBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvaDlt7LliLDovr7lt4Xls7BcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDEzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueCwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXIgPSB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9IHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza1Nob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS54LCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVEZXNrQXJyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lm57mlLZcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RGVza1Nwcml0ZSAmJiB0aGlzLnJlY292ZXJ5YnRuLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHRvdWNoUG9pbnQpKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlciA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUuZGVza1Nob3coKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZURlc2tBcnIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3REZXNrU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueCwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUuZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+WNh+mrmOS4gOetiee6p1xuICAgIGNob29zZUxldmVsKGxldmVsKXtcbiAgICAgICAgaWYodGhpcy5hZGREZXNrU3ByaXRlQnlMZXZlbChsZXZlbCkpe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgLT0gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbC0xXTtcbiAgICAgICAgICAgIGlmKGxldmVsID09IDIpe1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0gKiAxLjA3KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWwtMV0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWwtMV0gKiAxLjE3NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiYnV5R29sZFVwZ3JhZGVcIitsZXZlbC0xLEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWwtMV0pO1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lTW9uZXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/ngrnlh7votK3kubDmjInpkq7liKTmlq3moYzlrZDlh7rnjrDkurrniannmoTlip/og71cbiAgICBhZGREZXNrU3ByaXRlQnlMZXZlbChsZXZlbCl7XG4gICAgICAgIGZvcihsZXQgaSA9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuc2V0UG9zaXRpb24oLTU1LC0zNjYpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5zZXRTcHJpdGVGcmFtZShcInBlcnNpb24vTFZcIitsZXZlbCx0aGlzLm1vdmVEZXNrU3ByaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLHRoaXMuZGVza0FycltpXVtqXS5ub2RlLmdldFBvc2l0aW9uKCkpLGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza1Nob3coKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImRlc2tBcnJcIiArIGkgKyBqLCB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImRlc2tBcnJcIiArIGkgKyBqLHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLkubDkuI3kuIvkuobvvIzlt7Lnu4/mu6HkuoZcIik7XG4gICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoOSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy/kv53lrZjmoYzlrZDkuIrnmoTkurrniankv6Hmga9cbiAgICBzYXZlRGVza0FycigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLlJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiZGVza0FyclwiICsgaSArIGosIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aYvuekuui0reS5sOS/oeaBr1xuICAgIHNldEJ1Z0dvbGRidG4oKXtcbiAgICAgICAgbGV0IGxldmVsID0gR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwtNDtcbiAgICAgICAgaWYobGV2ZWwgPiAxKXtcbiAgICAgICAgICAgIGZvcihsZXQgYnVnbGV2ZWwgPSBsZXZlbDtidWdsZXZlbD4wO2J1Z2xldmVsLS0pe1xuICAgICAgICAgICAgICAgIGlmKEdhbWVDb25maWcuR2FtZU1vbmV5ID4gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtidWdsZXZlbF0pe1xuICAgICAgICAgICAgICAgICAgICBpZihidWdsZXZlbDxsZXZlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0aCA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGg+MC44KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWdQZXJzaW9uTGV2ZWwgPSBidWdsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWdMYWJlbC5zdHJpbmcgPSBcIkxWIFwiK2J1Z2xldmVsOy8v6LSt5Lmw562J57qnXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVnR29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtidWdsZXZlbF0pOy8v6LSt5Lmw6YeR6aKdXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5idWdQZXJzaW9uTGV2ZWwgPSAxO1xuICAgICAgICAgICAgdGhpcy5idWdHb2xkTGFiZWwuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdKTtcbiAgICAgICAgICAgIHRoaXMuYnVnTGFiZWwuc3RyaW5nID0gXCJMViAxXCI7Ly/otK3kubDnrYnnuqdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/lhYPlrp3otK3kubDmjInpkq5cbiAgICBidXlDb2luRnVuYyhsZXZlbCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMSk7XG4gICAgICAgIGlmKEdhbWVDb25maWcuR2FtZUNvaW4gPCBHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW2xldmVsXSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFg+WuneS4jei2s1wiKTtcbiAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoOCk7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBHYW1lVG9vbHMuX2NyZWF0ZVZlZGlvQWQoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gMTAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEdhbWVDb2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5hZGREZXNrU3ByaXRlQnlMZXZlbChsZXZlbCkpe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiAtPSBHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW2xldmVsXTtcbiAgICAgICAgICAgIC8vIGlmKGxldmVsID09IDEpe1xuICAgICAgICAgICAgLy8gICAgIEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbMV0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbMV0gKiAxLjA3KTtcbiAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF0gPSBNYXRoLmZsb29yKEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbbGV2ZWxdICogMS4xNzUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUNvaW5VcGdyYWRlXCIrbGV2ZWwsR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF0pO1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8v5Yqg6YCfXG4gICAgZ2FtZURvdWJsZShudW0pe1xuICAgICAgICB0aGlzLmppYXN1QnRuLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgdGhpcy5qaWFzdUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qaWFzdUJ0bi5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5Sb3c7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8R2FtZUNvbmZpZy5Db2w7aisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uaXNTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lcj1udWxsO1xuICAgICAgICBsZXQgdD1udW07XG4gICAgICAgIGxldCBtPTA7XG4gICAgICAgIGxldCBzPTA7XG4gICAgICAgIG09TWF0aC5mbG9vcih0LzYwJTYwKTtcbiAgICAgICAgbTwxMCYmKG09JzAnK20pO1xuICAgICAgICBzPU1hdGguZmxvb3IodCU2MCk7XG4gICAgICAgIGZ1bmN0aW9uIGNvdW50RG93bigpe1xuICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgczwxMCYmKHM9JzAnK3MpO1xuICAgICAgICAgICAgaWYocy5sZW5ndGg+PTMpe1xuICAgICAgICAgICAgICAgIHM9NTk7XG4gICAgICAgICAgICAgICAgbT1cIjBcIisoTnVtYmVyKG0pLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobS5sZW5ndGg+PTMpe1xuICAgICAgICAgICAgICAgIG09JzAwJztcbiAgICAgICAgICAgICAgICBzPScwMCc7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLmppYXN1QnRuLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLmppYXN1QnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLmppYXN1QnRuLmdldENoaWxkQnlOYW1lKFwibnVtYmdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLlJvdzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5Db2w7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLmRlc2tBcnJbaV1bal0uaXNTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmdldENoaWxkQnlOYW1lKFwibnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbStcIjpcIiArIHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtK1wi5YiG6ZKfXCIrcytcIuenklwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lcj1zZXRJbnRlcnZhbChjb3VudERvd24sMTAwMCk7XG4gICAgfSxcbiAgICAvL+WFg+WuneeahOWPmOWKqFxuICAgIHNldEdhbWVDb2luKCl7XG4gICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5HYW1lQ29pbik7XG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29pblwiLEdhbWVDb25maWcuR2FtZUNvaW4pO1xuICAgIH0sXG4gICAgLy/ph5HpkrHnmoTlj5jliqhcbiAgICBzZXRHYW1lTW9uZXkoKXtcbiAgICAgICAgdGhpcy5nb2xkTGFiZWwuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lTW9uZXlcIixHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgICAgIHRoaXMuc2V0QnVnR29sZGJ0bigpO1xuICAgIH0sXG4gICAgLy/nlJ/kuqfph5HpkrHnmoTpgJ/luqZcbiAgICBnZXRNb25leVNwZWVkKCl7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciAhPTApe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRlc2tBcnJbaV1bal0uaXNTZWxlY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZGVza0FycltpXVtqXS5leHBOdW1iZXIqMjtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdGhpcy5kZXNrQXJyW2ldW2pdLmV4cE51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vbmV5U3BlZWRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoc3VtKStcIi/np5JcIjtcbiAgICAgICAgdGhpcy5tb25leVNwZWVkTGFiZWwucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4yLDEuMywxLjMpLGNjLnNjYWxlVG8oMC4yLDEsMSkpKTtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgKz0gc3VtKjM7XG4gICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICBpZih0aGlzLnRpbWVyID49IDMpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9MDtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTcGVlZCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBcbn0pO1xuIl19