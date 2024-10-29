"use strict";
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