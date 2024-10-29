
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f8fhtf7xH87nhaVzumEAM', 'ShopPanel');
// Script/panel/ShopPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: {
      "default": null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    shopItemPrefab: {
      "default": null,
      type: cc.Prefab,
      displayName: "商品节点"
    },
    showContent: {
      "default": null,
      type: cc.Node,
      displayName: "显示商品内容"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    this.setMoney();
    this.init(0);
    var i = 1;
    this.schedule(function () {
      _this.init(i++);
    }, 0.5, 5, 0.5);
  },
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.closebtn, "buttonFunc");
  },
  init: function init(count) {
    for (var i = count * 6; i < count * 6 + 6; i++) {
      var shopItem = cc.instantiate(this.shopItemPrefab);
      shopItem.getComponent('ShopItemList').initItem(i + 1);
      this.showContent.addChild(shopItem, i, "shopItem");
    }
  },
  closePanel: function closePanel() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.closebtn == button) {
      this.closePanel();
    }
  },
  setMoney: function setMoney() {
    this.moneyLabel.string = GameTools.getNumberString(GameConfig.GameMoney);
  },
  update: function update(dt) {
    this.setMoney();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcFBhbmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNsb3NlYnRuIiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInNob3BJdGVtUHJlZmFiIiwiUHJlZmFiIiwic2hvd0NvbnRlbnQiLCJtb25leUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJfdGhpcyIsInNldE1vbmV5IiwiaW5pdCIsImkiLCJzY2hlZHVsZSIsInN0YXJ0Iiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb3VudCIsInNob3BJdGVtIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0SXRlbSIsImFkZENoaWxkIiwiY2xvc2VQYW5lbCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95IiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0Iiwic3RyaW5nIiwiZ2V0TnVtYmVyU3RyaW5nIiwiR2FtZU1vbmV5IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFFeENHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDO01BQ0wsV0FBUSxJQUFJO01BQ1pDLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RDLGNBQWMsRUFBQztNQUNYLFdBQVEsSUFBSTtNQUNaSCxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNkRixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNERyxXQUFXLEVBQUM7TUFDUixXQUFRLElBQUk7TUFDWkwsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREksVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pOLElBQUksRUFBQ0wsRUFBRSxDQUFDWSxLQUFLO01BQ2JMLFdBQVcsRUFBQztJQUNoQjtFQUNKLENBQUM7RUFHRE0sTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFBQSxJQUFBQyxLQUFBO0lBQ04sSUFBSSxDQUFDQyxRQUFRLEVBQUU7SUFDZixJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDWixJQUFJQyxDQUFDLEdBQUMsQ0FBQztJQUNQLElBQUksQ0FBQ0MsUUFBUSxDQUFDLFlBQUk7TUFDZEosS0FBSSxDQUFDRSxJQUFJLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBQ2xCLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQztFQUNoQixDQUFDO0VBRURFLEtBQUssV0FBQUEsTUFBQSxFQUFJO0lBQ0xwQixXQUFXLENBQUNxQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDaEIsUUFBUSxFQUFDLFlBQVksQ0FBQztFQUNyRSxDQUFDO0VBQ0RZLElBQUksV0FBQUEsS0FBQ0ssS0FBSyxFQUFDO0lBQ1AsS0FBSSxJQUFJSixDQUFDLEdBQUNJLEtBQUssR0FBQyxDQUFDLEVBQUNKLENBQUMsR0FBQ0ksS0FBSyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUNKLENBQUMsRUFBRSxFQUFDO01BQzlCLElBQUlLLFFBQVEsR0FBR3RCLEVBQUUsQ0FBQ3VCLFdBQVcsQ0FBQyxJQUFJLENBQUNmLGNBQWMsQ0FBQztNQUNsRGMsUUFBUSxDQUFDRSxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUNDLFFBQVEsQ0FBQ1IsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUNuRCxJQUFJLENBQUNQLFdBQVcsQ0FBQ2dCLFFBQVEsQ0FBQ0osUUFBUSxFQUFDTCxDQUFDLEVBQUMsVUFBVSxDQUFDO0lBRXBEO0VBQ0osQ0FBQztFQUNEVSxVQUFVLFdBQUFBLFdBQUEsRUFBRTtJQUNSN0IsU0FBUyxDQUFDOEIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUVEQyxVQUFVLFdBQUFBLFdBQUNDLEtBQUssRUFBQztJQUNiLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFNO0lBQ3pCLElBQUcsSUFBSSxDQUFDOUIsUUFBUSxJQUFJNkIsTUFBTSxFQUFDO01BQ3ZCLElBQUksQ0FBQ04sVUFBVSxFQUFFO0lBQ3JCO0VBQ0osQ0FBQztFQUNEWixRQUFRLFdBQUFBLFNBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ0osVUFBVSxDQUFDd0IsTUFBTSxHQUFHckMsU0FBUyxDQUFDc0MsZUFBZSxDQUFDeEMsVUFBVSxDQUFDeUMsU0FBUyxDQUFDO0VBQzVFLENBQUM7RUFDREMsTUFBTSxXQUFBQSxPQUFFQyxFQUFFLEVBQUU7SUFDUixJQUFJLENBQUN4QixRQUFRLEVBQUU7RUFDbkI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2xvc2VidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhbPpl63mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wSXRlbVByZWZhYjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5ZWG5ZOB6IqC54K5XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvbnRlbnQ6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmmL7npLrllYblk4HlhoXlrrlcIlxuICAgICAgICB9LFxuICAgICAgICBtb25leUxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSsVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zZXRNb25leSgpO1xuICAgICAgICB0aGlzLmluaXQoMCk7XG4gICAgICAgIGxldCBpPTE7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaW5pdChpKyspO1xuICAgICAgICB9LDAuNSw1LDAuNSlcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLHRoaXMuY2xvc2VidG4sXCJidXR0b25GdW5jXCIpO1xuICAgIH0sXG4gICAgaW5pdChjb3VudCl7XG4gICAgICAgIGZvcihsZXQgaT1jb3VudCo2O2k8Y291bnQqNis2O2krKyl7XG4gICAgICAgICAgICBsZXQgc2hvcEl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNob3BJdGVtUHJlZmFiKTtcbiAgICAgICAgICAgIHNob3BJdGVtLmdldENvbXBvbmVudCgnU2hvcEl0ZW1MaXN0JykuaW5pdEl0ZW0oaSsxKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQuYWRkQ2hpbGQoc2hvcEl0ZW0saSxcInNob3BJdGVtXCIpO1xuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlUGFuZWwoKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYyhldmVudCl7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmKHRoaXMuY2xvc2VidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRNb25leSgpe1xuICAgICAgICB0aGlzLm1vbmV5TGFiZWwuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0TW9uZXkoKTtcbiAgICB9LFxufSk7XG4iXX0=