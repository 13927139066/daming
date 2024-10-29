
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c954TQ/CJDXJp0vbhbIAOQ', 'GameConfig');
// Script/GameConfig.js

"use strict";

var GameConfig = {
  IS_GAME_MUSIC: true,
  IS_GAME_VOICE: true,
  CurrentLevel: 1,
  Row: 3,
  //列
  Col: 4,
  //行
  GameMoney: 1000,
  //金钱
  GameCoin: 100,
  //元宝
  GamePersonMaxLevel: 1,
  //当前最大人物等级
  buyGoldUpgrade: [100],
  buyCoinUpgrade: [50],
  turnTableNum: 0,
  MAIN_MENU_NUM: "Classic",
  //无用

  showPersonNumber: -1,
  //显示当前解锁最大人物等级

  lastTime: 0,
  //离线的时间戳

  IS_GAME_SHARE: true,
  //是否允许分享
  shareTime: 0,
  //分享时间
  shareData: {
    title: "一起解解压",
    url: "https://6665-fengkuang-4g9tlbxqdf49e9be-1330392479.tcb.qcloud.la/images/fengkuang.png"
  },
  //游戏跳转
  APPID: null,
  PATH: null,
  MiniProgram: [],
  IS_LOAD_MINI: false,
  boxApps: [],
  selfBoxApps: [],
  perName: ["贫民", "渔夫", "长工", "学徒", "店小二", "书童", "杂役", "牢头", "衙役", "秀才", "监生", "贡生", "举人", "守门小兵", "巡检", "百户", "守备", "校尉", "参将", "副将", "总兵", "提督", "都綐", "将军", "县主簿", "县丞", "知县", "通判", "翰林学士", "御史", "大理寺卿", "尚书", "大学士", "太傅", "国公", "世子", "郡王", "亲王", "皇子", "皇太子", "皇帝", "太上皇"]
};
module.exports = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJJU19HQU1FX01VU0lDIiwiSVNfR0FNRV9WT0lDRSIsIkN1cnJlbnRMZXZlbCIsIlJvdyIsIkNvbCIsIkdhbWVNb25leSIsIkdhbWVDb2luIiwiR2FtZVBlcnNvbk1heExldmVsIiwiYnV5R29sZFVwZ3JhZGUiLCJidXlDb2luVXBncmFkZSIsInR1cm5UYWJsZU51bSIsIk1BSU5fTUVOVV9OVU0iLCJzaG93UGVyc29uTnVtYmVyIiwibGFzdFRpbWUiLCJJU19HQU1FX1NIQVJFIiwic2hhcmVUaW1lIiwic2hhcmVEYXRhIiwidGl0bGUiLCJ1cmwiLCJBUFBJRCIsIlBBVEgiLCJNaW5pUHJvZ3JhbSIsIklTX0xPQURfTUlOSSIsImJveEFwcHMiLCJzZWxmQm94QXBwcyIsInBlck5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBRztFQUNiQyxhQUFhLEVBQUMsSUFBSTtFQUNsQkMsYUFBYSxFQUFDLElBQUk7RUFDbEJDLFlBQVksRUFBQyxDQUFDO0VBQ2RDLEdBQUcsRUFBQyxDQUFDO0VBQUM7RUFDTkMsR0FBRyxFQUFDLENBQUM7RUFBQztFQUNOQyxTQUFTLEVBQUMsSUFBSTtFQUFDO0VBQ2ZDLFFBQVEsRUFBQyxHQUFHO0VBQUM7RUFDYkMsa0JBQWtCLEVBQUMsQ0FBQztFQUFDO0VBQ3JCQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDckJDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNwQkMsWUFBWSxFQUFDLENBQUM7RUFFZEMsYUFBYSxFQUFFLFNBQVM7RUFBQzs7RUFFekJDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztFQUFDOztFQUVwQkMsUUFBUSxFQUFDLENBQUM7RUFBQzs7RUFFWEMsYUFBYSxFQUFDLElBQUk7RUFBQztFQUNuQkMsU0FBUyxFQUFDLENBQUM7RUFBQztFQUNaQyxTQUFTLEVBQUM7SUFDTkMsS0FBSyxFQUFDLE9BQU87SUFDYkMsR0FBRyxFQUFDO0VBQ1IsQ0FBQztFQUVEO0VBQ0FDLEtBQUssRUFBRyxJQUFJO0VBQ1pDLElBQUksRUFBRyxJQUFJO0VBQ1hDLFdBQVcsRUFBRyxFQUFFO0VBQ2hCQyxZQUFZLEVBQUcsS0FBSztFQUNwQkMsT0FBTyxFQUFDLEVBQUU7RUFDVkMsV0FBVyxFQUFDLEVBQUU7RUFFZEMsT0FBTyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUMzRCxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQ25ELElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFDcEQsTUFBTSxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUNyRCxJQUFJLEVBQUMsS0FBSztBQUVkLENBQUM7QUFDREMsTUFBTSxDQUFDQyxPQUFPLEdBQUc1QixVQUFVIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHtcbiAgICBJU19HQU1FX01VU0lDOnRydWUsXG4gICAgSVNfR0FNRV9WT0lDRTp0cnVlLFxuICAgIEN1cnJlbnRMZXZlbDoxLFxuICAgIFJvdzozLC8v5YiXXG4gICAgQ29sOjQsLy/ooYxcbiAgICBHYW1lTW9uZXk6MTAwMCwvL+mHkemSsVxuICAgIEdhbWVDb2luOjEwMCwvL+WFg+WunVxuICAgIEdhbWVQZXJzb25NYXhMZXZlbDoxLC8v5b2T5YmN5pyA5aSn5Lq654mp562J57qnXG4gICAgYnV5R29sZFVwZ3JhZGU6IFsxMDBdLFxuICAgIGJ1eUNvaW5VcGdyYWRlOiBbNTBdLFxuICAgIHR1cm5UYWJsZU51bTowLFxuXG4gICAgTUFJTl9NRU5VX05VTTogXCJDbGFzc2ljXCIsLy/ml6DnlKhcblxuICAgIHNob3dQZXJzb25OdW1iZXI6LTEsLy/mmL7npLrlvZPliY3op6PplIHmnIDlpKfkurrniannrYnnuqdcblxuICAgIGxhc3RUaW1lOjAsLy/nprvnur/nmoTml7bpl7TmiLNcbiAgICBcbiAgICBJU19HQU1FX1NIQVJFOnRydWUsLy/mmK/lkKblhYHorrjliIbkuqtcbiAgICBzaGFyZVRpbWU6MCwvL+WIhuS6q+aXtumXtFxuICAgIHNoYXJlRGF0YTp7XG4gICAgICAgIHRpdGxlOlwi5LiA6LW36Kej6Kej5Y6LXCIsXG4gICAgICAgIHVybDpcImh0dHBzOi8vNjY2NS1mZW5na3VhbmctNGc5dGxieHFkZjQ5ZTliZS0xMzMwMzkyNDc5LnRjYi5xY2xvdWQubGEvaW1hZ2VzL2ZlbmdrdWFuZy5wbmdcIixcbiAgICB9LFxuXG4gICAgLy/muLjmiI/ot7PovaxcbiAgICBBUFBJRCA6IG51bGwsXG4gICAgUEFUSCA6IG51bGwsXG4gICAgTWluaVByb2dyYW0gOiBbXSxcbiAgICBJU19MT0FEX01JTkkgOiBmYWxzZSxcbiAgICBib3hBcHBzOltdLFxuICAgIHNlbGZCb3hBcHBzOltdLFxuXG4gICAgcGVyTmFtZTpbXCLotKvmsJFcIixcIua4lOWkq1wiLFwi6ZW/5belXCIsXCLlrablvpJcIixcIuW6l+Wwj+S6jFwiLFwi5Lmm56ulXCIsXCLmnYLlvblcIixcIueJouWktFwiLFwi6KGZ5b25XCIsXCLnp4DmiY1cIixcbiAgICBcIuebkeeUn1wiLFwi6LSh55SfXCIsXCLkuL7kurpcIixcIuWuiOmXqOWwj+WFtVwiLFwi5beh5qOAXCIsXCLnmb7miLdcIixcIuWuiOWkh1wiLFwi5qCh5bCJXCIsXCLlj4LlsIZcIixcIuWJr+WwhlwiLFxuICAgIFwi5oC75YW1XCIsXCLmj5DnnaNcIixcIumDvee2kFwiLFwi5bCG5YabXCIsXCLljr/kuLvnsL9cIixcIuWOv+S4nlwiLFwi55+l5Y6/XCIsXCLpgJrliKRcIixcIue/sOael+WtpuWjq1wiLFwi5b6h5Y+yXCIsXG4gICAgXCLlpKfnkIblr7rljb9cIixcIuWwmuS5plwiLFwi5aSn5a2m5aOrXCIsXCLlpKrlgoVcIixcIuWbveWFrFwiLFwi5LiW5a2QXCIsXCLpg6HnjotcIixcIuS6sueOi1wiLFwi55qH5a2QXCIsXCLnmoflpKrlrZBcIixcbiAgICBcIueah+W4nVwiLFwi5aSq5LiK55qHXCJcbiAgICBdXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lQ29uZmlnO1xuIl19