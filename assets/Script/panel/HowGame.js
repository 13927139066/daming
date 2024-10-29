var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    properties: {
        
    },
    onLoad(){

    },
    close : function(){
        GameTools.playSimpleAudioEngine(3);
        this.node.destroy();
    },

});
