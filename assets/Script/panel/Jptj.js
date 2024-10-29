var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    properties: {
        content : cc.Node,
        miniProgramItemPrb : cc.Prefab,
        // titleLabel : cc.Label,  
        tip  : cc.Label
    },

    onLoad(){
        if(GameConfig.boxApps.length == 0){
            this.tip.node.active = true;
        }
        console.log(GameConfig.boxApps.length);
        for(let i=0; i<GameConfig.boxApps.length; i++){
            let item = cc.instantiate(this.miniProgramItemPrb);
            item.getComponent("MiniProgram").init(GameConfig.boxApps[i]);
            this.content.addChild(item);
        }
    },

    close : function(){
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
        GameConfig.main.jptj.active = true;
    }
});
