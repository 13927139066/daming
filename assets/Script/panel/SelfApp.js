var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    properties: {
        content : cc.Node,
        miniProgramItemPrb : cc.Node, 
        tip  : cc.Label
    },

    onLoad(){
        if(GameConfig.selfBoxApps.length == 0){
            this.tip.node.active = true;
        }
        console.log(GameConfig.selfBoxApps.length);
        for(let i=0; i<GameConfig.selfBoxApps.length; i++){
            let item = cc.instantiate(this.miniProgramItemPrb);
            let app = item.getComponent(cc.Sprite);
            GameTools.createImage(GameConfig.selfBoxApps[i].icon,app);

            item.on(cc.Node.EventType.TOUCH_START,()=>{
                GameTools.navigateToMiniProgram(null,GameConfig.selfBoxApps[i].path)
            })
            item.active = true;
            this.content.addChild(item);
        }
    },

    close : function(){
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
    }
});
