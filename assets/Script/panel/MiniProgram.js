
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    properties: {
        iconSprite : cc.Sprite,
        nameLabel : cc.Label
    },
    start() {

    },
    
    init: function (data) {
        this.appId = data.appId;
        this.path = data.path;

        GameTools.createImageApp(data.icon,this.iconSprite);
        this.nameLabel.string = data.name;
    },

    navigateToMiniProgram : function(){
        GameTools.playSimpleAudioEngine(3);
        GameTools.navigateToMiniProgram(this.appId,this.path);
    }
});
