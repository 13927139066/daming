"use strict";
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