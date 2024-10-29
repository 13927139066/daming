
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/MiniProgram.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c633dGipg5GwLP5E7pNhJN2', 'MiniProgram');
// Script/panel/MiniProgram.js

"use strict";

var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    iconSprite: cc.Sprite,
    nameLabel: cc.Label
  },
  start: function start() {},
  init: function init(data) {
    this.appId = data.appId;
    this.path = data.path;
    GameTools.createImageApp(data.icon, this.iconSprite);
    this.nameLabel.string = data.name;
  },
  navigateToMiniProgram: function navigateToMiniProgram() {
    GameTools.playSimpleAudioEngine(3);
    GameTools.navigateToMiniProgram(this.appId, this.path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTWluaVByb2dyYW0uanMiXSwibmFtZXMiOlsiR2FtZVRvb2xzIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWNvblNwcml0ZSIsIlNwcml0ZSIsIm5hbWVMYWJlbCIsIkxhYmVsIiwic3RhcnQiLCJpbml0IiwiZGF0YSIsImFwcElkIiwicGF0aCIsImNyZWF0ZUltYWdlQXBwIiwiaWNvbiIsInN0cmluZyIsIm5hbWUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBR0osRUFBRSxDQUFDSyxNQUFNO0lBQ3RCQyxTQUFTLEVBQUdOLEVBQUUsQ0FBQ087RUFDbkIsQ0FBQztFQUNEQyxLQUFLLFdBQUFBLE1BQUEsRUFBRyxDQUVSLENBQUM7RUFFREMsSUFBSSxFQUFFLFNBQUFBLEtBQVVDLElBQUksRUFBRTtJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixJQUFJLENBQUNFLElBQUk7SUFFckJkLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDSCxJQUFJLENBQUNJLElBQUksRUFBQyxJQUFJLENBQUNWLFVBQVUsQ0FBQztJQUNuRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1MsTUFBTSxHQUFHTCxJQUFJLENBQUNNLElBQUk7RUFDckMsQ0FBQztFQUVEQyxxQkFBcUIsRUFBRyxTQUFBQSxzQkFBQSxFQUFVO0lBQzlCbkIsU0FBUyxDQUFDb0IscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDcEIsU0FBUyxDQUFDbUIscUJBQXFCLENBQUMsSUFBSSxDQUFDTixLQUFLLEVBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUM7RUFDekQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWNvblNwcml0ZSA6IGNjLlNwcml0ZSxcbiAgICAgICAgbmFtZUxhYmVsIDogY2MuTGFiZWxcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcbiAgICBcbiAgICBpbml0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmFwcElkID0gZGF0YS5hcHBJZDtcbiAgICAgICAgdGhpcy5wYXRoID0gZGF0YS5wYXRoO1xuXG4gICAgICAgIEdhbWVUb29scy5jcmVhdGVJbWFnZUFwcChkYXRhLmljb24sdGhpcy5pY29uU3ByaXRlKTtcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgIH0sXG5cbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0gOiBmdW5jdGlvbigpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBHYW1lVG9vbHMubmF2aWdhdGVUb01pbmlQcm9ncmFtKHRoaXMuYXBwSWQsdGhpcy5wYXRoKTtcbiAgICB9XG59KTtcbiJdfQ==