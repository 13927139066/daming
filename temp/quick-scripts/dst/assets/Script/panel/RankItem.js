
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd553fmL+BGfJ9idSJ4ApIP', 'RankItem');
// Script/panel/RankItem.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  name: "RankItem",
  properties: {
    backSprite: cc.Node,
    rankImage: cc.Sprite,
    rankLabel: cc.Label,
    avatarImgSprite: cc.Sprite,
    nickLabel: cc.Label,
    topScoreLabel: cc.Label,
    levelName: cc.Label
  },
  start: function start() {},
  init: function init(rank, data) {
    var _this = this;
    var avatarUrl = data.url;
    // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
    var nick = data.nick;
    var grade = data.score;
    var level = data.a1;
    if (rank < 3) {
      this.rankLabel.node.active = false;
      this.rankImage.node.active = true;
      cc.loader.loadRes("r" + (rank + 1), cc.SpriteFrame, function (err, spriteFrame) {
        _this.rankImage.spriteFrame = spriteFrame;
      });
    } else {
      this.rankLabel.string = (rank + 1).toString();
    }
    this.createImage(avatarUrl);
    this.nickLabel.string = nick;
    // this.topScoreLabel.string = grade.toString();
    this.topScoreLabel.string = GameTools.getNumberString(grade);
    if (level) {
      if (level > 42) {
        this.levelName.string = GameConfig.perName[0];
      } else this.levelName.string = GameConfig.perName[level - 1];
    } else {
      this.levelName.string = GameConfig.perName[0];
    }
  },
  createImage: function createImage(avatarUrl) {
    var _this2 = this;
    cc.loader.load({
      url: avatarUrl,
      type: 'jpg'
    }, function (err, texture) {
      _this2.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
    });
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua0l0ZW0uanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwibmFtZSIsInByb3BlcnRpZXMiLCJiYWNrU3ByaXRlIiwiTm9kZSIsInJhbmtJbWFnZSIsIlNwcml0ZSIsInJhbmtMYWJlbCIsIkxhYmVsIiwiYXZhdGFySW1nU3ByaXRlIiwibmlja0xhYmVsIiwidG9wU2NvcmVMYWJlbCIsImxldmVsTmFtZSIsInN0YXJ0IiwiaW5pdCIsInJhbmsiLCJkYXRhIiwiX3RoaXMiLCJhdmF0YXJVcmwiLCJ1cmwiLCJuaWNrIiwiZ3JhZGUiLCJzY29yZSIsImxldmVsIiwiYTEiLCJub2RlIiwiYWN0aXZlIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJzdHJpbmciLCJ0b1N0cmluZyIsImNyZWF0ZUltYWdlIiwiZ2V0TnVtYmVyU3RyaW5nIiwicGVyTmFtZSIsIl90aGlzMiIsImxvYWQiLCJ0eXBlIiwidGV4dHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUVMLEVBQUUsQ0FBQ00sSUFBSTtJQUNuQkMsU0FBUyxFQUFFUCxFQUFFLENBQUNRLE1BQU07SUFDcEJDLFNBQVMsRUFBRVQsRUFBRSxDQUFDVSxLQUFLO0lBQ25CQyxlQUFlLEVBQUVYLEVBQUUsQ0FBQ1EsTUFBTTtJQUMxQkksU0FBUyxFQUFFWixFQUFFLENBQUNVLEtBQUs7SUFDbkJHLGFBQWEsRUFBRWIsRUFBRSxDQUFDVSxLQUFLO0lBQ3ZCSSxTQUFTLEVBQUNkLEVBQUUsQ0FBQ1U7RUFDakIsQ0FBQztFQUNESyxLQUFLLFdBQUFBLE1BQUEsRUFBRyxDQUNSLENBQUM7RUFFREMsSUFBSSxFQUFFLFNBQUFBLEtBQVVDLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUN4QixJQUFJQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csR0FBRztJQUN4QjtJQUNBLElBQUlDLElBQUksR0FBR0osSUFBSSxDQUFDSSxJQUFJO0lBQ3BCLElBQUlDLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxLQUFLO0lBQ3RCLElBQUlDLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxFQUFFO0lBRW5CLElBQUlULElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVixJQUFJLENBQUNSLFNBQVMsQ0FBQ2tCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7TUFDbEMsSUFBSSxDQUFDckIsU0FBUyxDQUFDb0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtNQUNqQzVCLEVBQUUsQ0FBQzZCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsSUFBSWIsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFakIsRUFBRSxDQUFDK0IsV0FBVyxFQUFFLFVBQUNDLEdBQUcsRUFBRUMsV0FBVyxFQUFLO1FBQ3RFZCxLQUFJLENBQUNaLFNBQVMsQ0FBQzBCLFdBQVcsR0FBR0EsV0FBVztNQUM1QyxDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUN4QixTQUFTLENBQUN5QixNQUFNLEdBQUcsQ0FBQ2pCLElBQUksR0FBRyxDQUFDLEVBQUVrQixRQUFRLEVBQUU7SUFDakQ7SUFFQSxJQUFJLENBQUNDLFdBQVcsQ0FBQ2hCLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUNSLFNBQVMsQ0FBQ3NCLE1BQU0sR0FBR1osSUFBSTtJQUM1QjtJQUNBLElBQUksQ0FBQ1QsYUFBYSxDQUFDcUIsTUFBTSxHQUFHbkMsU0FBUyxDQUFDc0MsZUFBZSxDQUFDZCxLQUFLLENBQUM7SUFDNUQsSUFBR0UsS0FBSyxFQUFDO01BQ0wsSUFBR0EsS0FBSyxHQUFDLEVBQUUsRUFBQztRQUNSLElBQUksQ0FBQ1gsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNqRCxDQUFDLE1BQ0csSUFBSSxDQUFDeEIsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDYixLQUFLLEdBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUMsTUFBSTtNQUNELElBQUksQ0FBQ1gsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRDtFQUNKLENBQUM7RUFDREYsV0FBVyxXQUFBQSxZQUFDaEIsU0FBUyxFQUFFO0lBQUEsSUFBQW1CLE1BQUE7SUFDbkJ2QyxFQUFFLENBQUM2QixNQUFNLENBQUNXLElBQUksQ0FBQztNQUNYbkIsR0FBRyxFQUFFRCxTQUFTO01BQUVxQixJQUFJLEVBQUU7SUFDMUIsQ0FBQyxFQUFFLFVBQUNULEdBQUcsRUFBRVUsT0FBTyxFQUFLO01BQ2pCSCxNQUFJLENBQUM1QixlQUFlLENBQUNzQixXQUFXLEdBQUcsSUFBSWpDLEVBQUUsQ0FBQytCLFdBQVcsQ0FBQ1csT0FBTyxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgbmFtZTogXCJSYW5rSXRlbVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tTcHJpdGU6IGNjLk5vZGUsXHJcbiAgICAgICAgcmFua0ltYWdlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgcmFua0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBhdmF0YXJJbWdTcHJpdGU6IGNjLlNwcml0ZSxcclxuICAgICAgICBuaWNrTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIHRvcFNjb3JlTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxldmVsTmFtZTpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKHJhbmssIGRhdGEpIHtcclxuICAgICAgICBsZXQgYXZhdGFyVXJsID0gZGF0YS51cmw7XHJcbiAgICAgICAgLy8gbGV0IG5pY2sgPSBkYXRhLm5pY2tuYW1lLmxlbmd0aCA8PSAxMCA/IGRhdGEubmlja25hbWUgOiBkYXRhLm5pY2tuYW1lLnN1YnN0cigwLCAxMCkgKyBcIi4uLlwiO1xyXG4gICAgICAgIGxldCBuaWNrID0gZGF0YS5uaWNrO1xyXG4gICAgICAgIGxldCBncmFkZSA9IGRhdGEuc2NvcmU7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZGF0YS5hMTtcclxuXHJcbiAgICAgICAgaWYgKHJhbmsgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0xhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0ltYWdlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJyXCIgKyAocmFuayArIDEpLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFua0ltYWdlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0xhYmVsLnN0cmluZyA9IChyYW5rICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoYXZhdGFyVXJsKTtcclxuICAgICAgICB0aGlzLm5pY2tMYWJlbC5zdHJpbmcgPSBuaWNrO1xyXG4gICAgICAgIC8vIHRoaXMudG9wU2NvcmVMYWJlbC5zdHJpbmcgPSBncmFkZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudG9wU2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKGdyYWRlKTtcclxuICAgICAgICBpZihsZXZlbCl7XHJcbiAgICAgICAgICAgIGlmKGxldmVsPjQyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVswXTtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtsZXZlbC0xXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbE5hbWUuc3RyaW5nID0gR2FtZUNvbmZpZy5wZXJOYW1lWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZShhdmF0YXJVcmwpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7XHJcbiAgICAgICAgICAgIHVybDogYXZhdGFyVXJsLCB0eXBlOiAnanBnJ1xyXG4gICAgICAgIH0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXJJbWdTcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19