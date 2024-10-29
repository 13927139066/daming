
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Number.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '530caSlmu1BqoWKE/5ju/Ig', 'Number');
// Script/Number.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    numberSpriteFrames: {
      "default": [],
      type: cc.SpriteFrame
    },
    numberLayoutNode: {
      "default": null,
      type: cc.Node
    }
  },
  showNumber: function showNumber(number) {
    this.numberLayoutNode.removeAllChildren();
    if (number === null || number === '' || isNaN(number)) {
      return;
    }
    var numberString = parseInt(number).toString();
    for (var i = 0; i < numberString.length; i++) {
      this.addNumberNode(parseInt(numberString.charAt(i)));
    }
  },
  addNumberNode: function addNumberNode(num) {
    var numNode = new cc.Node();
    numNode.width = 16;
    numNode.height = 34;
    numNode.addComponent(cc.Sprite).spriteFrame = this.numberSpriteFrames[num];
    this.numberLayoutNode.addChild(numNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOdW1iZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJudW1iZXJTcHJpdGVGcmFtZXMiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJudW1iZXJMYXlvdXROb2RlIiwiTm9kZSIsInNob3dOdW1iZXIiLCJudW1iZXIiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImlzTmFOIiwibnVtYmVyU3RyaW5nIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImkiLCJsZW5ndGgiLCJhZGROdW1iZXJOb2RlIiwiY2hhckF0IiwibnVtIiwibnVtTm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLEVBQUU7TUFDWEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQ2IsQ0FBQztJQUNEQyxnQkFBZ0IsRUFBRTtNQUNkLFdBQVMsSUFBSTtNQUNiRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFDYjtFQUNKLENBQUM7RUFDREMsVUFBVSxXQUFBQSxXQUFDQyxNQUFNLEVBQUU7SUFDZixJQUFJLENBQUNILGdCQUFnQixDQUFDSSxpQkFBaUIsRUFBRTtJQUN6QyxJQUFJRCxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLEtBQUssRUFBRSxJQUFJRSxLQUFLLENBQUNGLE1BQU0sQ0FBQyxFQUFFO01BQ25EO0lBQ0o7SUFDQSxJQUFJRyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDLENBQUNLLFFBQVEsRUFBRTtJQUM5QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsWUFBWSxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQzFDLElBQUksQ0FBQ0UsYUFBYSxDQUFDSixRQUFRLENBQUNELFlBQVksQ0FBQ00sTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hEO0VBQ0osQ0FBQztFQUNERSxhQUFhLFdBQUFBLGNBQUNFLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBRyxJQUFJckIsRUFBRSxDQUFDUSxJQUFJLEVBQUU7SUFDM0JhLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDbEJELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLEVBQUU7SUFDbkJGLE9BQU8sQ0FBQ0csWUFBWSxDQUFDeEIsRUFBRSxDQUFDeUIsTUFBTSxDQUFDLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUN0QixrQkFBa0IsQ0FBQ2dCLEdBQUcsQ0FBQztJQUMxRSxJQUFJLENBQUNiLGdCQUFnQixDQUFDb0IsUUFBUSxDQUFDTixPQUFPLENBQUM7RUFDM0M7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbnVtYmVyU3ByaXRlRnJhbWVzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bWJlckxheW91dE5vZGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNob3dOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMYXlvdXROb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKG51bWJlciA9PT0gbnVsbCB8fCBudW1iZXIgPT09ICcnIHx8IGlzTmFOKG51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbnVtYmVyU3RyaW5nID0gcGFyc2VJbnQobnVtYmVyKS50b1N0cmluZygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTnVtYmVyTm9kZShwYXJzZUludChudW1iZXJTdHJpbmcuY2hhckF0KGkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZE51bWJlck5vZGUobnVtKSB7XHJcbiAgICAgICAgbGV0IG51bU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG51bU5vZGUud2lkdGggPSAxNjtcclxuICAgICAgICBudW1Ob2RlLmhlaWdodCA9IDM0O1xyXG4gICAgICAgIG51bU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm51bWJlclNwcml0ZUZyYW1lc1tudW1dO1xyXG4gICAgICAgIHRoaXMubnVtYmVyTGF5b3V0Tm9kZS5hZGRDaGlsZChudW1Ob2RlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=