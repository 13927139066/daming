var GameConfig = require("GameConfig");
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
        this.moneylabel.string = Math.floor(GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel]*2);
    },
    closeClick(){
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
    },
    doubletakeClick(){
        GameTools.playSimpleAudioEngine(3);
        GameConfig.shareComponent = this;
        GameTools.sharePicture();
        GameConfig.shareTime = (new Date()).getTime();
    },
    shareSuccess(){
        GameConfig.GameMoney += GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel]*2;
        GameConfig.main.setGameMoney();
        this.closeClick();
        GameTools.showToast('获得'+GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel]*2+'铜钱');
    },

    // update (dt) {},
});
