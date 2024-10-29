
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ce59Jg/9JNU52zLtP8+4EV', 'ShopItemList');
// Script/panel/ShopItemList.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    persion: {
      "default": null,
      type: cc.Node,
      displayName: "人物"
    },
    level: {
      "default": null,
      type: cc.Node,
      displayName: "人物等级"
    },
    perName: {
      "default": null,
      type: cc.Label,
      displayName: "角色名"
    },
    coinNode: {
      "default": null,
      type: cc.Node,
      displayName: "元宝"
    },
    moneytbtn: {
      "default": null,
      type: cc.Node,
      displayName: "金钱购买按钮"
    },
    unlock: {
      "default": null,
      type: cc.Sprite,
      displayName: "解锁"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    },
    unpersion: {
      "default": null,
      type: cc.Node,
      displayName: "解锁的小人"
    },
    number: 1
  },
  initItem: function initItem(number) {
    console.log(this);
    this.number = number;
    this.showItemList();
  },
  coinButtonFunc: function coinButtonFunc() {
    if (GameConfig.main.buyCoinFunc(this.number)) {
      console.log("元宝成功购买");
      this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
    }
  },
  showItemList: function showItemList() {
    this.level.getComponent('Number').showNumber(this.number);
    GameUiTools.setSpriteFrame("persion/LV" + this.number, this.persion.getComponent(cc.Sprite));
    if (this.number <= GameConfig.GamePersonMaxLevel) {
      this.persion.color = cc.Color.WHITE;
      this.perName.string = GameConfig.perName[this.number - 1];
      if (this.number == 1 || this.number <= GameConfig.GamePersonMaxLevel - 4) {
        GameUiTools.setSpriteFrame("shop/qb", this.unlock);
        this.moneyLabel.node.active = true;
        this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
        GameUiTools.setButtonClickEvents(this, this.moneytbtn, "buyButtonFunc");
      } else {
        this.unpersion.active = true;
        if (this.number <= GameConfig.GamePersonMaxLevel - 2) {
          this.coinNode.active = true;
          this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
          //显示元宝的购买价格
          GameUiTools.setButtonClickEvents(this, this.coinNode, "coinButtonFunc");
        }
      }
    } else {
      this.persion.color = cc.Color.BLACK;
      this.perName.string = "??";
      this.unpersion.active = true;
    }
  },
  buyButtonFunc: function buyButtonFunc() {
    if (GameConfig.main.bugGoldFunc(this.number)) {
      console.log("购买成功");
      this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcEl0ZW1MaXN0LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBlcnNpb24iLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwibGV2ZWwiLCJwZXJOYW1lIiwiTGFiZWwiLCJjb2luTm9kZSIsIm1vbmV5dGJ0biIsInVubG9jayIsIlNwcml0ZSIsIm1vbmV5TGFiZWwiLCJ1bnBlcnNpb24iLCJudW1iZXIiLCJpbml0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzaG93SXRlbUxpc3QiLCJjb2luQnV0dG9uRnVuYyIsIm1haW4iLCJidXlDb2luRnVuYyIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiZ2V0TnVtYmVyU3RyaW5nIiwiYnV5Q29pblVwZ3JhZGUiLCJzaG93TnVtYmVyIiwic2V0U3ByaXRlRnJhbWUiLCJHYW1lUGVyc29uTWF4TGV2ZWwiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJub2RlIiwiYWN0aXZlIiwiYnV5R29sZFVwZ3JhZGUiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIkJMQUNLIiwiYnV5QnV0dG9uRnVuYyIsImJ1Z0dvbGRGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBRXhDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBQztNQUNKLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVB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SUFDWCxJQUFHN0MsVUFBVSxDQUFDMkIsSUFBSSxDQUFDbUIsV0FBVyxDQUFDLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQyxFQUFDO01BQ3hDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDbkIsSUFBSSxDQUFDTCxVQUFVLENBQUNZLE1BQU0sR0FBRzdCLFNBQVMsQ0FBQzhCLGVBQWUsQ0FBQ2hDLFVBQVUsQ0FBQzBDLGNBQWMsQ0FBQyxJQUFJLENBQUNyQixNQUFNLENBQUMsQ0FBQztJQUM5RjtFQUNKO0FBR0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBlcnNpb246e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLkurrnialcIlxuICAgICAgICB9LFxuICAgICAgICBsZXZlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqeetiee6p1wiXG4gICAgICAgIH0sXG4gICAgICAgIHBlck5hbWU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6KeS6Imy5ZCNXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29pbk5vZGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhYPlrp1cIlxuICAgICAgICB9LFxuICAgICAgICBtb25leXRidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLph5HpkrHotK3kubDmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2s6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuino+mUgVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vbmV5TGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6YeR6ZKxXCJcbiAgICAgICAgfSxcbiAgICAgICAgdW5wZXJzaW9uOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6Kej6ZSB55qE5bCP5Lq6XCJcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyOjEsXG5cbiAgICB9LFxuICAgIGluaXRJdGVtKG51bWJlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnNob3dJdGVtTGlzdCgpO1xuICAgIH0sXG4gICAgY29pbkJ1dHRvbkZ1bmMoKXtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5tYWluLmJ1eUNvaW5GdW5jKHRoaXMubnVtYmVyKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFg+WuneaIkOWKn+i0reS5sFwiKTtcbiAgICAgICAgICAgIHRoaXMuY29pbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW3RoaXMubnVtYmVyXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dJdGVtTGlzdCgpe1xuICAgICAgICB0aGlzLmxldmVsLmdldENvbXBvbmVudCgnTnVtYmVyJykuc2hvd051bWJlcih0aGlzLm51bWJlcik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldFNwcml0ZUZyYW1lKFwicGVyc2lvbi9MVlwiK3RoaXMubnVtYmVyLHRoaXMucGVyc2lvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIGlmKHRoaXMubnVtYmVyIDw9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKXtcbiAgICAgICAgICAgIHRoaXMucGVyc2lvbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgdGhpcy5wZXJOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVt0aGlzLm51bWJlci0xXTtcbiAgICAgICAgICAgIGlmKHRoaXMubnVtYmVyID09IDEgfHwgdGhpcy5udW1iZXIgPD0gKEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsIC00KSl7XG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJzaG9wL3FiXCIsdGhpcy51bmxvY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUxhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVt0aGlzLm51bWJlcl0pO1xuICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubW9uZXl0YnRuLCBcImJ1eUJ1dHRvbkZ1bmNcIik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnVucGVyc2lvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubnVtYmVyIDw9IChHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCAtMikpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvaW5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29pbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW3RoaXMubnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65YWD5a6d55qE6LSt5Lmw5Lu35qC8XG4gICAgICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuY29pbk5vZGUsIFwiY29pbkJ1dHRvbkZ1bmNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucGVyc2lvbi5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgdGhpcy5wZXJOYW1lLnN0cmluZyA9IFwiPz9cIjtcbiAgICAgICAgICAgIHRoaXMudW5wZXJzaW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1eUJ1dHRvbkZ1bmMoKXtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5tYWluLmJ1Z0dvbGRGdW5jKHRoaXMubnVtYmVyKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui0reS5sOaIkOWKn1wiKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbdGhpcy5udW1iZXJdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxufSk7XG4iXX0=