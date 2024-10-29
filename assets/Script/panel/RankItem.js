var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    name: "RankItem",
    properties: {
        backSprite: cc.Node,
        rankImage: cc.Sprite,
        rankLabel: cc.Label,
        avatarImgSprite: cc.Sprite,
        nickLabel: cc.Label,
        topScoreLabel: cc.Label,
        levelName:cc.Label,
    },
    start() {
    },

    init: function (rank, data) {
        let avatarUrl = data.url;
        // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
        let nick = data.nick;
        let grade = data.score;
        let level = data.a1;

        if (rank < 3) {
            this.rankLabel.node.active = false;
            this.rankImage.node.active = true;
            cc.loader.loadRes("r" + (rank + 1), cc.SpriteFrame, (err, spriteFrame) => {
                this.rankImage.spriteFrame = spriteFrame;
            });
        } else {
            this.rankLabel.string = (rank + 1).toString();
        }

        this.createImage(avatarUrl);
        this.nickLabel.string = nick;
        // this.topScoreLabel.string = grade.toString();
        this.topScoreLabel.string = GameTools.getNumberString(grade);
        if(level){
            if(level>42){
                this.levelName.string = GameConfig.perName[0];
            }else
                this.levelName.string = GameConfig.perName[level-1];
        }else{
            this.levelName.string = GameConfig.perName[0];
        }
    },
    createImage(avatarUrl) {
        cc.loader.load({
            url: avatarUrl, type: 'jpg'
        }, (err, texture) => {
            this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
        });
    },
});
