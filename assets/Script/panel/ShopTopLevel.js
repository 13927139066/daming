var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
    extends: cc.Component,

    properties: {
        closebtn:cc.Node,
        viedeobtn:cc.Node,
        picSprite:cc.Sprite,
        picName:cc.Label,

    },

    viedeobtnFunc(){
        GameTools.playSimpleAudioEngine(3);
        let math = Math.random();
        if(math < 0.5){
            GameConfig.shareComponent = this;
            GameTools.sharePicture();
            GameConfig.shareTime = (new Date()).getTime();
        }else{
            let self = this;
            GameTools._createVedioAd(function (res) {
                if (res.isEnded || res.raw) {
                    self.shareSuccess();
                }
            });
        }

    },
    closebtnFunc(){
        GameTools.playSimpleAudioEngine(3);
        // GameConfig.main.choose = false;
        GameConfig.main.bugGoldFunc(GameConfig.showPersonNumber-1);
        this.node.destroy();
    },
    shareSuccess(){
        GameConfig.main.chooseLevel(GameConfig.showPersonNumber);
        this.node.destroy();
    },
    onLoad () {
        GameUiTools.setSpriteFrame("persion/LV"+GameConfig.showPersonNumber,this.picSprite);
        this.picName.string = GameConfig.perName[GameConfig.showPersonNumber-1]
    },




    // update (dt) {},
});
