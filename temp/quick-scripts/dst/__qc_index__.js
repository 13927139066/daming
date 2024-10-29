
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/DeskSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/Home');
require('./assets/Script/Number');
require('./assets/Script/eq4096');
require('./assets/Script/eqconf');
require('./assets/Script/main');
require('./assets/Script/panel/CblPanel');
require('./assets/Script/panel/HowGame');
require('./assets/Script/panel/JiasuPanel');
require('./assets/Script/panel/Jptj');
require('./assets/Script/panel/LixianPanel');
require('./assets/Script/panel/MiniProgram');
require('./assets/Script/panel/MoneyPanel');
require('./assets/Script/panel/NewPersion');
require('./assets/Script/panel/RankItem');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/SelfApp');
require('./assets/Script/panel/ShopItemList');
require('./assets/Script/panel/ShopPanel');
require('./assets/Script/panel/ShopTopLevel');
require('./assets/Script/panel/ShowMessage');
require('./assets/Script/panel/Sign');
require('./assets/Script/panel/TurnTable');
require('./assets/Script/sdk/EyouClientKs');
require('./assets/migration/use_reversed_rotateBy');
require('./assets/migration/use_reversed_rotateTo');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');

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