var GameConfig = require("GameConfig");
var GameUiTools = require("GameUiTools");
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,

    properties: {
        moneylabel:{
            default:null,
            type:cc.Label,
            displayName:"金钱数"
        },
        num:0,
    },
    start () {},
    onLoad () {
        this.speed = GameConfig.main.getMoneySpeed();
        let nowTime = new Date().getTime();
        let lastGameTime = GameTools.getItemByLocalStorage("lastTime",0);
        let offLineTime = Math.floor((nowTime - lastGameTime)/6000);
        
        if(offLineTime <= 1000*60*30){
            this.num = Math.floor(this.speed * offLineTime);
        }else if(offLineTime <= 1000*60*60*2){
            this.num = Math.floor(this.speed * offLineTime * 0.5);
        }else{
            this.num = Math.floor(this.speed * offLineTime * 0.3);
        }
        this.moneylabel.string = this.num+"铜钱";
    },

    closeClick(){
        this.node.destroy();
        GameConfig.main.setGameMoney();
    },

    doubletakeClick(){
        GameTools.playSimpleAudioEngine(3);
        let self = this;
        GameTools._createVedioAd(function (res) {
            if (res.isEnded || res.raw) {
                GameConfig.GameMoney += self.num*3;
                self.closeClick();
            }
        });
    },

    takeClick(){
        GameTools.playSimpleAudioEngine(3);
        GameConfig.GameMoney += this.num;
        this.closeClick();
    },
    // update (dt) {},
});
