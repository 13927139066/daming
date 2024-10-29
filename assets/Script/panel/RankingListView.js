var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
    extends: cc.Component,
    properties: {
        // backButton: cc.Node,
        shareButton: cc.Node, //分享按钮
        rankingScrollView: cc.Sprite,//显示排行榜
        shareTicket: null,
        worldRankLayout:cc.Node,
        prefabRankItem:cc.Prefab,
        selfcontent:cc.Node,
    },
    onLoad() {
    },
    start() {
        window.cp = this;
        if(cc.sys.platform === cc.sys.QQ_PLAY){
            this.drawQQRank();
        }else{
            this.showFriendRank();
            if(!GameConfig.IS_GAME_SHARE){
                this.shareButton.active = false;
            }
        } 
    },

    drawQQRank: function () {
        var attr = "score";
        var order = 1;
        var rankType = 0;
        BK.QQ.getRankListWithoutRoom(attr, order, rankType, function (errCode, cmd, data) {
            BK.Script.log(1, 1, "getRankListWithoutRoom callback  cmd" + cmd + " errCode:" + errCode + "  data:" + JSON.stringify(data));
            // 返回错误码信息
            if (errCode !== 0) {
                BK.Script.log(1, 1, '获取排行榜数据失败!错误码：' + errCode);
                return;
            }
            // 解析数据
            if (data) {
                for (var i = 0; i < data.data.ranking_list.length; ++i) {
                    var rd = data.data.ranking_list[i];
                    // BK.Script.log(1, 1, '解析数据：' + rd);
                    let item = cc.instantiate(window.cp.prefabRankItem);
                    item.getComponent('RankItem').init(i, rd);
                    window.cp.worldRankLayout.addChild(item);
                    if (rd.selfFlag) {
                        let userItem = cc.instantiate(window.cp.prefabRankItem);
                        userItem.getComponent('RankItem').init(i, rd);
                        // userItem.y = -259;
                        window.cp.selfcontent.active = true;
                        window.cp.selfcontent.addChild(userItem);

                    }

                }
            }else{
                let gameTypeNode = new cc.Node();
                gameTypeNode.addComponent(cc.Label).string = "暂无排行榜数据";
                window.cp.node.addChild(gameTypeNode);
            }
        });
    },
    showFriendRank() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (window.sharedCanvas != undefined) {
                this.tex = new cc.Texture2D();
                // window.sharedCanvas.width = 750;
                // window.sharedCanvas.height = 1334;
                // 发消息给子域
                console.log("发消息给子域",this.tex )
                if (this.shareTicket != null) {
                    window.wx.postMessage({
                        messageType: 5,
                        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
                        shareTicket: this.shareTicket
                    });
                } else {
                    window.wx.postMessage({
                        messageType: 1,
                        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
                    });
                }
            }
        } else {
            let gameTypeNode = new cc.Node();
            let label = gameTypeNode.addComponent(cc.Label);
            label.string = "暂无好友排行榜数据";
            label.lineHeight = 60;
            this.node.addChild(gameTypeNode);
        }
    },
    buttonFunc: function (event) {
        GameTools.playSimpleAudioEngine(3);
        // let button = event.target;
        // if (this.shareButton == button) {
        GameTools.sharePicture();
        // }
        // return true;
    },
    backButtonFunc: function (event) {
        GameTools.removeRankData();

        this.node.destroy();
    },

    // 刷新子域的纹理
    _updateSubDomainCanvas() {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (window.sharedCanvas != undefined) {
                console.log("刷新子域的纹理:",this.tex)
                let openDataContext = wx.getOpenDataContext();
                let sharedCanvas = openDataContext.canvas;
                console.log("刷新子域的纹理openDataContext:",openDataContext)
                console.log("刷新子域的纹理sharedCanvas:",sharedCanvas)
                this.tex.initWithElement(window.sharedCanvas);
                this.tex.handleLoadedTexture();
                this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
            }
        }
    },
    update() {
        this._updateSubDomainCanvas();
    },
});
