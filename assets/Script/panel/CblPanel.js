var GameConfig = require("GameConfig");
cc.Class({
    extends: cc.Component,
    properties: {
        cancelButton: cc.Node, //分享按钮
        confirmButton: cc.Node, //分享按钮
    },
    onLoad() {
    },
    start() {
        window.cp = this;
        if(cc.sys.platform === cc.sys.QQ_PLAY){
        }else{
            if(!GameConfig.IS_GAME_SHARE){
                this.cancelButton.active = false;
            }
        } 
    },

    buttonCancelFunc: function (event) {
        this.node.destroy();
    },

    buttonConfirmFunc: function (event) {
        if (cc.sys.platform === cc.sys.BYTEDANCE_GAME){
            tt.navigateToScene({
                scene: "sidebar",
                success: (res) => {
                    console.log("navigate to scene success");
                    // 跳转成功回调逻辑
                    let coins = [100];
                    console.log("元宝变更前", GameConfig.GameCoin  )
                    GameConfig.GameCoin += coins[0];
                    GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
                    console.log("元宝变更后", GameConfig.GameCoin  )
                    GameTools.showToast("获得元宝+" + coins[0]);
                },
                fail: (res) => {
                    console.log("navigate to scene fail: ", res);
                    // 跳转失败回调逻辑
                },
                complete: (res) => {
                    this.node.destroy();
                }
            });
        }
    },


});
