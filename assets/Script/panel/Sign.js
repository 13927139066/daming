var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
    extends: cc.Component,

    properties: {
        signbg:{
            default:[],
            type:cc.Sprite,
            displayName:"签到背景图片"
        },
        choose:{
            default:[],
            type:cc.Node,
            displayName:"勾"
        },
        signBtn:{
            default:null,
            type:cc.Node,
            displayName:"签到按钮"
        },
        doubleSignBtn:{
            default:null,
            type:cc.Node,
            displayName:"双倍领取"
        }
    },
    onLoad() {
        // GameTools.setItemByLocalStorage("checkInTimestamp",0);
        // GameTools.setItemByLocalStorage("checkInDays",0);
        if(!GameConfig.IS_GAME_SHARE){
            this.doubleSignBtn.active = false;
            this.signBtn.setPosition(0,-488);
        }
        if (this.hasCheckedToday()) {
            // GameTools.showToast('已签到');
            this.signBtn.color = new cc.Color(125, 125, 125);
            this.signBtn.removeComponent(cc.Button);
            this.doubleSignBtn.color = new cc.Color(125, 125, 125);
            this.doubleSignBtn.removeComponent(cc.Button);
        }

        // this.isClick = false;
        window.cp = this;
        this.SignDay = GameTools.getItemByLocalStorage('checkInDays',0);
        this.day = this.SignDay % 7;
        let hasChecked = this.hasCheckedToday();
        for(let i = 0;i<7;i++){
            if(i<this.day || (this.day === 0 && hasChecked)){
                this.choose[i].active = true;
                GameUiTools.setSpriteFrame("sign/bb2",this.signbg[i]);
            }else if(i === this.day && hasChecked){
                this.choose[i].active = false;
                // this.takens[i].opacity = 0;
            }else{
                this.choose[i].active = false;
                // this.takens[i].opacity = 0;
            }
        }
    },
    //判断今天是否签到
    hasCheckedToday() {
        console.log("判断今天是否签到")
        let lastCheckInTimestamp = GameTools.getItemByLocalStorage("checkInTimestamp",0);
        let now = new Date();
        let todayBeginTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        return lastCheckInTimestamp >= todayBeginTimestamp;//真为已签到，假没签到
    },

    close: function () {
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
    },

    disableBtn: function (day) {
        // window.cp.takens[day].opacity = 255;
        window.cp.choose[day].active = true;
        GameUiTools.setSpriteFrame("sign/bb2",window.cp.signbg[day]);
        window.cp.doubleSignBtn.color = new cc.Color(125, 125, 125);
        window.cp.doubleSignBtn.removeComponent(cc.Button);
        window.cp.signBtn.color = new cc.Color(125, 125, 125);
        window.cp.signBtn.removeComponent(cc.Button);
    },
    doubleSign: function () {
        GameTools.playSimpleAudioEngine(3);
        // this.isClick = true;
        let coins = [4000, 200, 8000, 400, 16000, 800, 30000];
        if (this.hasCheckedToday()) {
            console.log("已经签到")
            GameTools.showDialog('已经签到');
            return;
        }
        if(cc.sys.platform === cc.sys.WECHAT_GAME){
            // wx.aldSendEvent('看视频双倍签到',{'key' : 'value'});
            GameTools._createVedioAd(function (res) {
                if (res.isEnded || res.raw) {
                    if(window.cp.day % 2 != 0){
                        GameConfig.GameCoin += coins[window.cp.day];
                        GameTools.showToast("获得元宝+" + coins[window.cp.day]);
                        GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
                    }else{
                        GameConfig.GameMoney += coins[window.cp.day];
                        GameTools.showToast("获得铜钱+" + coins[window.cp.day]);
                        GameTools.setItemByLocalStorage("GameMoney",GameConfig.GameMoney);
                    }

                    window.cp.disableBtn(window.cp.day);//按钮的判断
                    GameTools.setItemByLocalStorage("checkInDays",window.cp.SignDay+1);
                    GameTools.setItemByLocalStorage("checkInTimestamp",Date.now());
                }
            });
        }else if(cc.sys.platform === cc.sys.BYTEDANCE_GAME){
            tt.showModal({
                title: "是否观看广告双倍领取",
                confirmColor: "#050511",
                cancelColor: "#FF0000",
                success(res) {
                    console.log("用户点击了" + (res.confirm ? "确定" : "取消"))
                    if (res.confirm) {
                        GameTools._createVedioAd(function (res) {
                            if (res.isEnded || res.raw) {
                                if(window.cp.day % 2 != 0){
                                    GameConfig.GameCoin += coins[window.cp.day];
                                    GameTools.showToast("获得元宝+" + coins[window.cp.day]);
                                    GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
                                }else{
                                    GameConfig.GameMoney += coins[window.cp.day];
                                    GameTools.showToast("获得铜钱+" + coins[window.cp.day]);
                                    GameTools.setItemByLocalStorage("GameMoney",GameConfig.GameMoney);
                                }

                                window.cp.disableBtn(window.cp.day);//按钮的判断
                                GameTools.setItemByLocalStorage("checkInDays",window.cp.SignDay+1);
                                GameTools.setItemByLocalStorage("checkInTimestamp",Date.now());
                            }
                        });
                    }
                    if (res.cancel) {
                        tt.showToast({
                            title: '取消观看广告',
                            icon: "none"
                        });
                    }
                },
                fail(err) {
                    console.log('showModal fail', err);
                },
                complete(res) {
                    console.log('showModal complete', res);
                }
            });
        }


    },

    sign: function () {
        GameTools.playSimpleAudioEngine(3);
        let coins = [2000, 100, 4000, 200, 8000, 400, 15000];

        if (this.hasCheckedToday()) {
            console.log("已经签到")
            GameTools.showDialog('已经签到');
            return;
        }
        if(this.day % 2 != 0){
            GameConfig.GameCoin += coins[this.day];
            GameTools.showToast("获得元宝+" + coins[this.day]);
            GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
        }else{
            GameConfig.GameMoney += coins[this.day];
            GameTools.showToast("获得铜钱+" + coins[this.day]);
            GameTools.setItemByLocalStorage("GameMoney",GameConfig.GameMoney);
        }

        window.cp.disableBtn(this.day);//按钮的判断
        GameTools.setItemByLocalStorage("checkInDays",this.SignDay+1);
        GameTools.setItemByLocalStorage("checkInTimestamp",Date.now());
        // GameData.setSignDay(GameData.getSignDay()+1);
        // GameData.setCheckInTimestamp(Date.now());
    },
});
