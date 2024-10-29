var GameConfig = require("GameConfig");
var GameTools = require("GameTools");

cc.Class({
    extends: cc.Component,

    properties: {
        closebtn:cc.Node,
        sharebtn:cc.Node,
        videobtn:cc.Node,
    },
    start () {

    },
    onLoad () {
        window.cp = this;
    },

    shareClick(){
        GameTools.playSimpleAudioEngine(3);
        if(GameConfig.GameCoin <10){
            console.log("你的元宝不够");
        }else{
            GameConfig.GameCoin -= 10;
            this.closeClick();
            GameConfig.main.setGameCoin();
            GameConfig.main.gameDouble(60);
        }
    },
    videoClick(){
        GameTools.playSimpleAudioEngine(3);
        GameTools._createVedioAd(function (res) {
            if (res.isEnded || res.raw) {
                window.cp.node.destroy();
                GameConfig.main.gameDouble(200);
            }
        });
    },
    closeClick(){
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
    },

    // update (dt) {},
});
