
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/sdk/EyouClientKs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2f7cpKa/BBhKJUyHUEiGj7', 'EyouClientKs');
// Script/sdk/EyouClientKs.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_URL = 'https://games.hndibei.com';
var EyouClientKs = /*#__PURE__*/function () {
  function EyouClientKs() {
    var F = null,
      I = 0x9,
      n = null,
      q = null,
      f = '-1',
      s = '-1',
      o = '4',
      i = null,
      X = null,
      u = null,
      w = null,
      t = null,
      C = null;
    var j = new Map();
    var P = null;
    var K = function K(S, J) {
        S['gameId'] = F, (S['platformId'] = I, S['sys'] = o), B(S)['then'](function (O) {
          if (O['payType'] == 0x4) tt['previewImage']({
            'urls': [O['payUrl']],
            'showmenu': !![]
          });else {
            if (O['payType'] == 0x8) O['balance'] > 0x0 ? r('充值提示', '账户余额:' + O['balance'] + '元,\x20还需充值:' + O['needPay'] + '元', function () {
              return l(O, J);
            }) : l(O, J);else {
              if (O['payType'] == 0x9) O['balance'] > 0x0 ? r('充值提示', '账户余额:' + O['balance'] + '元,\x20还需充值:' + O['needPay'] + '元', function () {
                return L(O, J);
              }) : L(O, J);else throw new Error('非法支付类型');
            }
          }
        });
      },
      l = function l(S, J) {
        if (S['needPay'] == 0x0) {
          x(S, J);
          return;
        }
        tt['requestGamePayment']({
          'mode': 'game',
          'env': 0x0,
          'currencyType': 'CNY',
          'platform': 'android',
          'buyQuantity': S['needPay'] * S['rate'],
          'zoneId': S['zoneId'],
          'customId': S['orderId'],
          'extraInfo': S['orderId'],
          'success': function success(O) {
            x(S, J);
          }
        });
      },
      L = function L(S, J) {
        if (S['needPay'] == 0x0) {
          x(S, J);
          return;
        }
        tt['openAwemeCustomerService']({
          'buyQuantity': S['needPay'] * S['rate'],
          'customId': S['orderId'],
          'currencyType': 'CNY',
          'zoneId': S['zoneId'],
          'extraInfo': S['orderId'],
          'success': function success(O) {
            J({
              'code': CodeStatus['SUCCESS'],
              'message': '操作成功',
              'data': null
            });
          },
          'fail': function fail(O) {
            J({
              'code': CodeStatus['FAIL'],
              'message': '操作失败',
              'data': null
            });
          }
        });
      },
      h = BASE_URL + '/market-multi-game-server/kuaiShouClient/deduct',
      x = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(S, J) {
          var O, d;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                O = {
                  'orderId': S['orderId'],
                  'gameId': F,
                  'platformId': I,
                  'userId': S['userId']
                };
                _context.next = 4;
                return p(h, O);
              case 4:
                d = _context.sent;
                d['code'] === CodeStatus['SUCCESS'] && J(d);
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console['error']('[扣款失败]异常:>', _context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8]]);
        }));
        return function x(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(),
      e = BASE_URL + '/market-multi-game-server/kuaiShouClient/pullPay',
      B = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(S) {
          var J, O, d, k, g;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                J = 0x3;
                O = 0x0, d = ![], k = ![];
              case 2:
                if (!(O < J && !d)) {
                  _context2.next = 20;
                  break;
                }
                _context2.prev = 3;
                _context2.next = 6;
                return p(e, S);
              case 6:
                g = _context2.sent;
                if (!(g['code'] === CodeStatus['SUCCESS'])) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt("return", g['data']);
              case 11:
                !k && (r('支付拉起失败', g['message']), k = !![]);
              case 12:
                _context2.next = 17;
                break;
              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                !k && (r('支付拉起失败', '网络超时'), k = !![]);
              case 17:
                O++;
                _context2.next = 2;
                break;
              case 20:
                throw new Error('支付拉起失败');
              case 21:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[3, 14]]);
        }));
        return function B(_x3) {
          return _ref2.apply(this, arguments);
        };
      }(),
      Q = function Q() {
        return new Promise(function (S, J) {
          ks['login']({
            'force': !![],
            'success': function success(_ref3) {
              var O = _ref3.code;
              O ? (console['log']('code:>', O), S(O)) : J(new Error('获取code失败'));
            },
            'fail': J
          });
        });
      },
      c = function c(S) {
        F = S;
        var J = ks['getSystemInfoSync']();
        o = J['platform'] === 'android' ? '4' : J['platform'] === 'ios' ? '5' : '6';
        var O = ks['getLaunchOptionsSync']()['query'];
        O && (n = O['channel'], q = O['sub_channel']);
        var d = {
          '10913': ['unit_id', 'callback']
        };
        if (d['hasOwnProperty'](n)) {
          var _d$n = d[n],
            k = _d$n[0],
            g = _d$n[1];
          f = O[k], s = O[g];
        } else n = '10906', q = '' + F + I + n + o + '0';
      },
      E = BASE_URL + '/market-multi-game-server/kuaiShouClient/adAction',
      m = function m(S, J, O) {
        var d = {
          'gameId': F,
          'platformId': I,
          'channelId': n,
          'subChannelId': q,
          'aid': f,
          'traceId': s,
          'sys': o,
          'userId': X,
          'adType': S,
          'adUnitId': J,
          'adActionType': O
        };
        p(E, d)['catch'](function (k) {
          console['log']('发送广告行为失败:>', k);
        });
      },
      M = function M(S) {
        var J = j['get'](S);
        if (!J) throw new Error('未创建编号为' + S + '的客服按钮');
        return J;
      },
      T = function T() {
        if (!P) throw new Error('未创建录屏管理器');
      },
      V = function V(S, J) {
        J(S);
      },
      r = function r(S, J, O, d) {
        tt['showModal']({
          'title': S,
          'content': J,
          'success': function success(k) {
            if (k['confirm'] && O) O();else k['cancel'] && d && d();
          }
        });
      },
      p = function p(S, J) {
        return new Promise(function (O, d) {
          ks['request']({
            'url': S,
            'method': 'POST',
            'header': {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            'data': JSON['stringify'](J),
            'fail': d,
            'success': function success(k) {
              O(k['data']);
            },
            'complete': function complete(k) {
              console['log']('---------------------------------请求\x20BEGIN--------------------------------'), console['log']('Url:>', S), console['log']('请求参数:>', J);
              var g = k && (k['data'] || k['errMsg']) ? k['data'] || k['errMsg'] : 'No\x20response\x20data';
              console['log']('响应:>', g), console['log']('---------------------------------请求\x20END--------------------------------');
            }
          });
        });
      },
      H = BASE_URL + '/market-multi-game-server/kuaiShouClient/initGame';
    this['init'] = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(S, J) {
        var O, d;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              ks['onShareAppMessage'](function (k) {
                return {
                  'templateId': w,
                  'query': '',
                  'success': function success() {
                    console['log']('分享成功');
                  },
                  'fail': function fail(g) {
                    console['log']('分享失败', g);
                  }
                };
              });
              _context3.next = 4;
              return Q();
            case 4:
              i = _context3.sent;
              c(S);
              O = {
                'code': i,
                'gameId': F,
                'platformId': I,
                'channelId': n,
                'subChannelId': q,
                'aid': f,
                'traceId': s,
                'sys': o
              };
              _context3.next = 9;
              return p(H, O);
            case 9:
              d = _context3.sent;
              d['code'] === CodeStatus['SUCCESS'] && (X = d['data']['userId'], u = d['data']['unionId'], w = d['data']['shareTemplateId'], d['data'] = null), J(i);
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console['error']('[初始化游戏]异常:>', _context3.t0);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      }));
      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }(), this['login'] = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(S) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              S({
                'code': CodeStatus['SUCCESS'],
                'message': '操作成功',
                'data': {
                  'code': i
                }
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }(), this['pay'] = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(S, J) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              tt['checkSession']({
                'success': function success(O) {
                  try {
                    K(S, J);
                  } catch (d) {
                    console['error']('[支付拉起]异常:>', d);
                  }
                },
                'fail': function fail(O) {
                  tt['login']({
                    'success': function success(d) {
                      try {
                        K(S, J);
                      } catch (k) {
                        console['error']('[支付拉起]异常:>', k);
                      }
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }();
    var G = BASE_URL + '/market-multi-game-server/kuaiShouClient/uploadRoleInfo';
    this['uploadRoleInfo'] = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(S, J) {
        var O;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              S['gameId'] = F, S['platformId'] = I;
              _context6.next = 4;
              return p(G, S);
            case 4:
              O = _context6.sent;
              J(O);
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              console['error']('上报角色数据异常:>', _context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 8]]);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }();
    var b = BASE_URL + '/market-multi-game-server/kuaiShouClient/antidirt';
    this['antidirt'] = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(S, J) {
        var O, d;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              O = {
                'gameId': F,
                'platformId': I,
                'contents': S
              };
              _context7.next = 4;
              return p(b, O);
            case 4:
              d = _context7.sent;
              J(d);
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console['error']('[内容安全检测]异常:>', _context7.t0);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
      }));
      return function (_x11, _x12) {
        return _ref8.apply(this, arguments);
      };
    }(), this['createRewardedVideoAd'] = function (S, J) {
      var O = {
        'adUnitId': S['adUnitId']
      };
      S['multiton'] && (O['multiton'] = S['multiton'], O['multitonRewardMsg'] = S['multitonRewardMsg'], O['multitonRewardTimes'] = S['multitonRewardTimes']), S['progressTip'] && (O['progressTip'] = S['progressTip']), C = ks['createRewardedVideoAd'](O), C['onClose'](function (d) {
        d && d['isEnded'] && (m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['FINISHED']), console['log']('正常播放结束，可以下发游戏奖励')), S['onClose'] && S['onClose'](d), C['destroy']();
      }), S['onError'] && C['onError'](function (d) {
        S['onError'] && S['onError'](d), C['destroy']();
      }), t = S['adUnitId'], J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showRewardedVideoAd'] = function () {
      C && (C['load'](), C['show']()['then'](function () {
        return m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
      })['catch'](function (S) {
        C['load']()['then'](function () {
          C['show']()['then'](function () {
            return m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
          });
        })['catch'](function (J) {
          return console['log']('激励视频\x20广告显示失败');
        });
      }));
    }, this['createContactButton'] = function (S, J) {
      var O = tt['createContactButton'](S);
      j['set'](j['size'], O), J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': {
          'contactBtnNo': j['size'] - 0x1
        }
      });
    }, this['contactBtnDestory'] = function (S) {
      var J = M(S);
      J['destory'](), j['set'](S, null);
    }, this['contactBtnShow'] = function (S) {
      var J = M(S);
      J['show']();
    }, this['contactBtnHide'] = function (S) {
      var J = M(S);
      J['hide']();
    }, this['createGameRecorder'] = function (S, J) {
      P = ks['getGameRecorder'](), S['onStart'] && P['on']('start', S['onStart']), S['onResume'] && P['on']('resume', S['onResume']), S['onPause'] && P['on']('pause', S['onPause']), S['onStop'] && P['on']('stop', S['onStop']), S['onError'] && P['on']('error', S['onError']), S['onAbort'] && P['on']('abort', S['onAbort']), J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['gameRecorderStart'] = function (S) {
      T(), P['start'](S);
    }, this['gameRecorderPause'] = function () {
      T(), P['pause']();
    }, this['gameRecorderResume'] = function () {
      T(), P['resume']();
    }, this['gameRecorderStop'] = function () {
      T(), console['log']('触发停止录屏'), P['stop']();
    }, this['publishVideo'] = function (S) {
      T(), P['publishVideo']({
        'video': S['videoID'],
        'callback': function callback(J) {
          if (J != null && J != undefined) {
            console['log']('分享录屏失败:\x20', J);
            return;
          }
          console['log']('分享录屏成功');
        }
      });
    }, this['shareAppMessage'] = function (S, J) {
      ks['shareAppMessage'](_extends({}, S, {
        'templateId': w,
        'success': function success() {
          J({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(O) {
          console['log']('[分享失败]:>', O), J({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      }));
    }, this['addShortcut'] = function (S) {
      ks['addShortcut']({
        'complete': S
      });
    }, this['addCommonUse'] = function (S) {
      ks['addCommonUse']({
        'complete': S
      });
    }, this['checkSidebar'] = function (S) {
      tt['checkScene']({
        'scene': 'sidebar',
        'success': function success(J) {
          J && J['isExist'] && S({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        }
      });
    }, this['navigateToSidebar'] = function (S) {
      tt['navigateToScene']({
        'scene': 'sidebar',
        'success': function success(J) {
          S({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(J) {
          console['log']('[跳转侧边栏失败]:>', J), S({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      });
    }, this['onFromSidebar'] = function (S) {
      tt['onShow'](function (_ref9) {
        var J = _ref9.scene,
          O = _ref9.launch_from,
          d = _ref9.location;
        J == '021036' && O == 'homepage' && d == 'sidebar_card' && S({
          'code': CodeStatus['SUCCESS'],
          'message': '操作成功',
          'data': null
        });
      });
    }, this['onKeyboardComplete'] = function (S) {
      var J = function J(O) {
        S({
          'code': CodeStatus['SUCCESS'],
          'message': '操作成功',
          'data': O
        }), tt['offKeyboardComplete'](J);
      };
      tt['onKeyboardComplete'](J);
    }, this['requestSubscribeMessage'] = function (S, J) {
      tt['requestSubscribeMessage']({
        'tmplIds': S,
        'success': function success(O) {
          var d = Object['keys'](O)['filter'](function (k) {
            return O[k] === 'accept';
          });
          J({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': d
          });
        },
        'fail': function fail(O) {
          J({
            'code': CodeStatus['FAILED'],
            'message': O['errMsg'],
            'data': null
          });
        }
      });
    };
  }
  EyouClientKs['getIns'] = function getIns() {
    return !this['ins'] && (this['ins'] = new EyouClientKs()), this['ins'];
  };
  return EyouClientKs;
}();
exports["default"] = EyouClientKs;
var CodeStatus = function CodeStatus() {};
CodeStatus['SUCCESS'] = 0x0;
CodeStatus['FAIL'] = -0x1;
var AdType = function AdType() {};
AdType['REWARDED_VIDEO_AD'] = 0x1;
AdType['BANNER_AD'] = 0x2;
var AdActionType = function AdActionType() {};
AdActionType['SHOW'] = 0x1;
AdActionType['FINISHED'] = 0x2;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZGtcXEV5b3VDbGllbnRLcy5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkJBU0VfVVJMIiwiRXlvdUNsaWVudEtzIiwiRiIsIkkiLCJuIiwicSIsImYiLCJzIiwibyIsIlgiLCJ1IiwidyIsInQiLCJDIiwiaiIsIk1hcCIsIlAiLCJLIiwiUyIsIkoiLCJCIiwiTyIsInR0IiwiciIsImwiLCJMIiwieCIsInN1Y2Nlc3MiLCJDb2RlU3RhdHVzIiwiZmFpbCIsImgiLCJfcmVmIiwiX2NhbGxlZSIsImQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicCIsInQwIiwiY29uc29sZSIsIl94IiwiX3gyIiwiZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJrIiwiZyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MyIsIlEiLCJrcyIsIl9yZWYzIiwiY29kZSIsImMiLCJfZCRuIiwiRSIsIm0iLCJNIiwiVCIsIlYiLCJKU09OIiwiSCIsIl9yZWY0IiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDQiLCJfeDUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g2IiwiX3JlZjYiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94NyIsIl94OCIsIkciLCJfcmVmNyIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX3g5IiwiX3gxMCIsImIiLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX3gxMSIsIl94MTIiLCJBZFR5cGUiLCJBZEFjdGlvblR5cGUiLCJjYWxsYmFjayIsIl9leHRlbmRzIiwiX3JlZjkiLCJzY2VuZSIsImxhdW5jaF9mcm9tIiwibG9jYXRpb24iLCJnZXRJbnMiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixNQUFBLENBQUFILGNBQUEsQ0FBQTFCLFNBQUEsR0FBQThCLE9BQUEsT0FBQUMsT0FBQSxDQUFBTixXQUFBLGdCQUFBdEIsY0FBQSxDQUFBeUIsU0FBQSxlQUFBckIsS0FBQSxFQUFBeUIsZ0JBQUEsQ0FBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsTUFBQUYsU0FBQSxhQUFBSyxTQUFBQyxFQUFBLEVBQUE5QixHQUFBLEVBQUErQixHQUFBLG1CQUFBQyxJQUFBLFlBQUFELEdBQUEsRUFBQUQsRUFBQSxDQUFBRyxJQUFBLENBQUFqQyxHQUFBLEVBQUErQixHQUFBLGNBQUFmLEdBQUEsYUFBQWdCLElBQUEsV0FBQUQsR0FBQSxFQUFBZixHQUFBLFFBQUF2QixPQUFBLENBQUF3QixJQUFBLEdBQUFBLElBQUEsTUFBQWlCLGdCQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLGlCQUFBLE9BQUF6QixNQUFBLENBQUF5QixpQkFBQSxFQUFBL0IsY0FBQSxxQ0FBQWdDLFFBQUEsR0FBQTNDLE1BQUEsQ0FBQTRDLGNBQUEsRUFBQUMsdUJBQUEsR0FBQUYsUUFBQSxJQUFBQSxRQUFBLENBQUFBLFFBQUEsQ0FBQUcsTUFBQSxRQUFBRCx1QkFBQSxJQUFBQSx1QkFBQSxLQUFBOUMsRUFBQSxJQUFBRyxNQUFBLENBQUFvQyxJQUFBLENBQUFPLHVCQUFBLEVBQUFsQyxjQUFBLE1BQUErQixpQkFBQSxHQUFBRyx1QkFBQSxPQUFBRSxFQUFBLEdBQUFOLDBCQUFBLENBQUF4QyxTQUFBLEdBQUEyQixTQUFBLENBQUEzQixTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQVksaUJBQUEsWUFBQU0sc0JBQUEvQyxTQUFBLGdDQUFBZ0QsT0FBQSxXQUFBQyxNQUFBLElBQUFqQyxNQUFBLENBQUFoQixTQUFBLEVBQUFpRCxNQUFBLFlBQUFkLEdBQUEsZ0JBQUFlLE9BQUEsQ0FBQUQsTUFBQSxFQUFBZCxHQUFBLHNCQUFBZ0IsY0FBQXZCLFNBQUEsRUFBQXdCLFdBQUEsYUFBQUMsT0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsUUFBQUMsTUFBQSxHQUFBdkIsUUFBQSxDQUFBTCxTQUFBLENBQUFxQixNQUFBLEdBQUFyQixTQUFBLEVBQUFPLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFFBQUFxQixNQUFBLEdBQUFELE1BQUEsQ0FBQXJCLEdBQUEsRUFBQTVCLEtBQUEsR0FBQWtELE1BQUEsQ0FBQWxELEtBQUEsU0FBQUEsS0FBQSx1QkFBQUEsS0FBQSxJQUFBTixNQUFBLENBQUFvQyxJQUFBLENBQUE5QixLQUFBLGVBQUE2QyxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsQ0FBQW1ELE9BQUEsRUFBQUMsSUFBQSxXQUFBcEQsS0FBQSxJQUFBOEMsTUFBQSxTQUFBOUMsS0FBQSxFQUFBK0MsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxFQUFBb0QsSUFBQSxXQUFBQyxTQUFBLElBQUFILE1BQUEsQ0FBQWxELEtBQUEsR0FBQXFELFNBQUEsRUFBQU4sT0FBQSxDQUFBRyxNQUFBLGdCQUFBSSxLQUFBLFdBQUFSLE1BQUEsVUFBQVEsS0FBQSxFQUFBUCxPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUEyQixlQUFBLEVBQUEzRCxjQUFBLG9CQUFBSSxLQUFBLFdBQUFBLE1BQUEwQyxNQUFBLEVBQUFkLEdBQUEsYUFBQTRCLDJCQUFBLGVBQUFYLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFPLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEvQixpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQWtDLEtBQUEsc0NBQUFmLE1BQUEsRUFBQWQsR0FBQSx3QkFBQTZCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWYsTUFBQSxRQUFBZCxHQUFBLFNBQUErQixVQUFBLFdBQUFwQyxPQUFBLENBQUFtQixNQUFBLEdBQUFBLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBQSxHQUFBLFVBQUFnQyxRQUFBLEdBQUFyQyxPQUFBLENBQUFxQyxRQUFBLE1BQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBQyxtQkFBQSxDQUFBRixRQUFBLEVBQUFyQyxPQUFBLE9BQUFzQyxjQUFBLFFBQUFBLGNBQUEsS0FBQTlCLGdCQUFBLG1CQUFBOEIsY0FBQSxxQkFBQXRDLE9BQUEsQ0FBQW1CLE1BQUEsRUFBQW5CLE9BQUEsQ0FBQXdDLElBQUEsR0FBQXhDLE9BQUEsQ0FBQXlDLEtBQUEsR0FBQXpDLE9BQUEsQ0FBQUssR0FBQSxzQkFBQUwsT0FBQSxDQUFBbUIsTUFBQSw2QkFBQWUsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbEMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTBDLGlCQUFBLENBQUExQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsSUFBQW5CLE9BQUEsQ0FBQTJDLE1BQUEsV0FBQTNDLE9BQUEsQ0FBQUssR0FBQSxHQUFBNkIsS0FBQSxvQkFBQVIsTUFBQSxHQUFBdkIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQTBCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTRCLEtBQUEsR0FBQWxDLE9BQUEsQ0FBQTRDLElBQUEsbUNBQUFsQixNQUFBLENBQUFyQixHQUFBLEtBQUFHLGdCQUFBLHFCQUFBL0IsS0FBQSxFQUFBaUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBdUMsSUFBQSxFQUFBNUMsT0FBQSxDQUFBNEMsSUFBQSxrQkFBQWxCLE1BQUEsQ0FBQXBCLElBQUEsS0FBQTRCLEtBQUEsZ0JBQUFsQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsbUJBQUFrQyxvQkFBQUYsUUFBQSxFQUFBckMsT0FBQSxRQUFBNkMsVUFBQSxHQUFBN0MsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUFrQixRQUFBLENBQUF4RCxRQUFBLENBQUFnRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTNCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQXFDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBeEQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBbUIsTUFBQSxhQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXJDLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTBCLFVBQUEsS0FBQTdDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMEMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXJDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUFrQixRQUFBLENBQUF4RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFxQyxRQUFBLFNBQUE3QixnQkFBQSxNQUFBd0MsSUFBQSxHQUFBdEIsTUFBQSxDQUFBckIsR0FBQSxTQUFBMkMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTVDLE9BQUEsQ0FBQXFDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF2RSxLQUFBLEVBQUF1QixPQUFBLENBQUFrRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBbkQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEdBQUE5QyxPQUFBLENBQUFxQyxRQUFBLFNBQUE3QixnQkFBQSxJQUFBd0MsSUFBQSxJQUFBaEQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEwQyxTQUFBLHNDQUFBL0MsT0FBQSxDQUFBcUMsUUFBQSxTQUFBN0IsZ0JBQUEsY0FBQTRDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTVCLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBcEMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWlELEtBQUEsQ0FBQVEsVUFBQSxHQUFBcEMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBZ0UsVUFBQSxNQUFBSixNQUFBLGFBQUE1RCxXQUFBLENBQUF1QixPQUFBLENBQUFrQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFoRCxPQUFBaUQsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBcEYsY0FBQSxPQUFBcUYsY0FBQSxTQUFBQSxjQUFBLENBQUExRCxJQUFBLENBQUF5RCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUFoRyxNQUFBLENBQUFvQyxJQUFBLENBQUF5RCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQXpFLEtBQUEsR0FBQXVGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBekUsS0FBQSxHQUFBcUUsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBM0QsS0FBQSxFQUFBcUUsU0FBQSxFQUFBRixJQUFBLGlCQUFBbkMsaUJBQUEsQ0FBQXZDLFNBQUEsR0FBQXdDLDBCQUFBLEVBQUFyQyxjQUFBLENBQUEyQyxFQUFBLG1CQUFBdkMsS0FBQSxFQUFBaUMsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQWYsY0FBQSxDQUFBcUMsMEJBQUEsbUJBQUFqQyxLQUFBLEVBQUFnQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQTRELFdBQUEsR0FBQW5GLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQWpCLE9BQUEsQ0FBQXVHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUEvRCxpQkFBQSw2QkFBQStELElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUFFLElBQUEsT0FBQTNHLE9BQUEsQ0FBQTRHLElBQUEsYUFBQUosTUFBQSxXQUFBdEcsTUFBQSxDQUFBMkcsY0FBQSxHQUFBM0csTUFBQSxDQUFBMkcsY0FBQSxDQUFBTCxNQUFBLEVBQUE3RCwwQkFBQSxLQUFBNkQsTUFBQSxDQUFBTSxTQUFBLEdBQUFuRSwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBcUYsTUFBQSxFQUFBdkYsaUJBQUEseUJBQUF1RixNQUFBLENBQUFyRyxTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQXVELE1BQUEsS0FBQXhHLE9BQUEsQ0FBQStHLEtBQUEsYUFBQXpFLEdBQUEsYUFBQXVCLE9BQUEsRUFBQXZCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbkQsU0FBQSxHQUFBZ0IsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbkQsU0FBQSxFQUFBWSxtQkFBQSxpQ0FBQWYsT0FBQSxDQUFBc0QsYUFBQSxHQUFBQSxhQUFBLEVBQUF0RCxPQUFBLENBQUFnSCxLQUFBLGFBQUF2RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMEQsT0FBQSxPQUFBQyxJQUFBLE9BQUE1RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXZELE9BQUEsQ0FBQXVHLG1CQUFBLENBQUE3RSxPQUFBLElBQUF3RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUYsTUFBQSxXQUFBQSxNQUFBLENBQUFpQixJQUFBLEdBQUFqQixNQUFBLENBQUFsRCxLQUFBLEdBQUF3RyxJQUFBLENBQUEvQixJQUFBLFdBQUFqQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWpELE9BQUEsQ0FBQW1ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFuSCxNQUFBLENBQUFrSCxHQUFBLEdBQUFELElBQUEsZ0JBQUEzRyxHQUFBLElBQUE2RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXJGLEdBQUEsVUFBQTJHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE1RixHQUFBLEdBQUEyRyxJQUFBLENBQUFJLEdBQUEsUUFBQS9HLEdBQUEsSUFBQTZHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQXpFLEtBQUEsR0FBQUYsR0FBQSxFQUFBMkUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQW5GLE9BQUEsQ0FBQWdELE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUEvQixTQUFBLEtBQUF1RyxXQUFBLEVBQUF4RSxPQUFBLEVBQUE4RCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFsQixNQUFBLGdCQUFBZCxHQUFBLEdBQUF5QyxTQUFBLE9BQUFhLFVBQUEsQ0FBQXpDLE9BQUEsQ0FBQTJDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF0SCxNQUFBLENBQUFvQyxJQUFBLE9BQUFtRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF0RixJQUFBLFFBQUFzRixVQUFBLENBQUF2RixHQUFBLGNBQUF3RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQTlGLE9BQUEsa0JBQUErRixPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXZFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQXlGLFNBQUEsRUFBQTlGLE9BQUEsQ0FBQWtELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBakcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUF5QyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTFDLE1BQUEsR0FBQTRCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBL0gsTUFBQSxDQUFBb0MsSUFBQSxDQUFBK0MsS0FBQSxlQUFBNkMsVUFBQSxHQUFBaEksTUFBQSxDQUFBb0MsSUFBQSxDQUFBK0MsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXJDLElBQUEsRUFBQUQsR0FBQSxhQUFBK0QsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBckgsTUFBQSxDQUFBb0MsSUFBQSxDQUFBK0MsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQTlGLElBQUEsbUJBQUFBLElBQUEsS0FBQThGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQWxELEdBQUEsSUFBQUEsR0FBQSxJQUFBK0YsWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBMUUsTUFBQSxHQUFBMEUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFwQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBK0YsWUFBQSxTQUFBakYsTUFBQSxnQkFBQStCLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWpELGdCQUFBLFNBQUE2RixRQUFBLENBQUEzRSxNQUFBLE1BQUEyRSxRQUFBLFdBQUFBLFNBQUEzRSxNQUFBLEVBQUFnQyxRQUFBLG9CQUFBaEMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE0QyxJQUFBLEdBQUF4QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBdUYsSUFBQSxRQUFBeEYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBK0IsSUFBQSx5QkFBQXhCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQW9ELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFsRCxnQkFBQSxLQUFBOEYsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUE5QyxnQkFBQSx5QkFBQStGLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBN0IsTUFBQSxHQUFBNEIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBcEMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBa0csTUFBQSxHQUFBOUUsTUFBQSxDQUFBckIsR0FBQSxFQUFBd0QsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF4RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFpRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFoQyxNQUFBLFVBQUFkLEdBQUEsR0FBQXlDLFNBQUEsR0FBQXRDLGdCQUFBLE9BQUF6QyxPQUFBO0FBQUEsU0FBQTJJLG1CQUFBQyxHQUFBLEVBQUFuRixPQUFBLEVBQUFDLE1BQUEsRUFBQW1GLEtBQUEsRUFBQUMsTUFBQSxFQUFBdEksR0FBQSxFQUFBOEIsR0FBQSxjQUFBMkMsSUFBQSxHQUFBMkQsR0FBQSxDQUFBcEksR0FBQSxFQUFBOEIsR0FBQSxPQUFBNUIsS0FBQSxHQUFBdUUsSUFBQSxDQUFBdkUsS0FBQSxXQUFBc0QsS0FBQSxJQUFBTixNQUFBLENBQUFNLEtBQUEsaUJBQUFpQixJQUFBLENBQUFKLElBQUEsSUFBQXBCLE9BQUEsQ0FBQS9DLEtBQUEsWUFBQXVHLE9BQUEsQ0FBQXhELE9BQUEsQ0FBQS9DLEtBQUEsRUFBQW9ELElBQUEsQ0FBQStFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBMUcsRUFBQSw2QkFBQVYsSUFBQSxTQUFBcUgsSUFBQSxHQUFBQyxTQUFBLGFBQUFoQyxPQUFBLFdBQUF4RCxPQUFBLEVBQUFDLE1BQUEsUUFBQWtGLEdBQUEsR0FBQXZHLEVBQUEsQ0FBQTZHLEtBQUEsQ0FBQXZILElBQUEsRUFBQXFILElBQUEsWUFBQUgsTUFBQW5JLEtBQUEsSUFBQWlJLGtCQUFBLENBQUFDLEdBQUEsRUFBQW5GLE9BQUEsRUFBQUMsTUFBQSxFQUFBbUYsS0FBQSxFQUFBQyxNQUFBLFVBQUFwSSxLQUFBLGNBQUFvSSxPQUFBdkgsR0FBQSxJQUFBb0gsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBbkYsT0FBQSxFQUFBQyxNQUFBLEVBQUFtRixLQUFBLEVBQUFDLE1BQUEsV0FBQXZILEdBQUEsS0FBQXNILEtBQUEsQ0FBQTlELFNBQUE7QUFEQSxJQUFNb0UsUUFBUSxHQUFDLDJCQUEyQjtBQUFDLElBQXFCQyxZQUFZO0VBQUMsU0FBQUEsYUFBQSxFQUFhO0lBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUk7TUFBQ0MsQ0FBQyxHQUFDLEdBQUc7TUFBQ0MsQ0FBQyxHQUFDLElBQUk7TUFBQ0MsQ0FBQyxHQUFDLElBQUk7TUFBQ0MsQ0FBQyxHQUFDLElBQUk7TUFBQ0MsQ0FBQyxHQUFDLElBQUk7TUFBQ0MsQ0FBQyxHQUFDLEdBQUc7TUFBQ3RELENBQUMsR0FBQyxJQUFJO01BQUN1RCxDQUFDLEdBQUMsSUFBSTtNQUFDQyxDQUFDLEdBQUMsSUFBSTtNQUFDQyxDQUFDLEdBQUMsSUFBSTtNQUFDQyxDQUFDLEdBQUMsSUFBSTtNQUFDQyxDQUFDLEdBQUMsSUFBSTtJQUFDLElBQU1DLENBQUMsR0FBQyxJQUFJQyxHQUFHLEVBQUU7SUFBQyxJQUFJQyxDQUFDLEdBQUMsSUFBSTtJQUFDLElBQU1DLENBQUMsR0FBQyxTQUFGQSxDQUFDQSxDQUFFQyxDQUFDLEVBQUNDLENBQUMsRUFBRztRQUFDRCxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUNoQixDQUFDLEdBQUVnQixDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUNmLENBQUMsRUFBQ2UsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFDVixDQUFDLEdBQUVZLENBQUMsQ0FBQ0YsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBQUcsQ0FBQyxFQUFFO1VBQUMsSUFBR0EsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFFLEdBQUcsRUFBQ0MsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxFQUFDLENBQUNELENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7VUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJO1lBQUMsSUFBR0EsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFFLEdBQUcsRUFBQ0EsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFDLEdBQUcsR0FBQ0UsQ0FBQyxDQUFDLE1BQU0sRUFBQyxPQUFPLEdBQUNGLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQyxhQUFhLEdBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQyxHQUFHLEVBQUM7Y0FBQSxPQUFJRyxDQUFDLENBQUNILENBQUMsRUFBQ0YsQ0FBQyxDQUFDO1lBQUEsRUFBQyxHQUFDSyxDQUFDLENBQUNILENBQUMsRUFBQ0YsQ0FBQyxDQUFDLENBQUMsS0FBSTtjQUFDLElBQUdFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRSxHQUFHLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBQyxHQUFHLEdBQUNFLENBQUMsQ0FBQyxNQUFNLEVBQUMsT0FBTyxHQUFDRixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUMsYUFBYSxHQUFDQSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUMsR0FBRyxFQUFDO2dCQUFBLE9BQUlJLENBQUMsQ0FBQ0osQ0FBQyxFQUFDRixDQUFDLENBQUM7Y0FBQSxFQUFDLEdBQUNNLENBQUMsQ0FBQ0osQ0FBQyxFQUFDRixDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sSUFBSWxHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFBQztVQUFDO1FBQUMsQ0FBQyxDQUFDO01BQUMsQ0FBQztNQUFDdUcsQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUVOLENBQUMsRUFBQ0MsQ0FBQyxFQUFHO1FBQUMsSUFBR0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFFLEdBQUcsRUFBQztVQUFDUSxDQUFDLENBQUNSLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1VBQUM7UUFBTztRQUFDRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQztVQUFDLE1BQU0sRUFBQyxNQUFNO1VBQUMsS0FBSyxFQUFDLEdBQUc7VUFBQyxjQUFjLEVBQUMsS0FBSztVQUFDLFVBQVUsRUFBQyxTQUFTO1VBQUMsYUFBYSxFQUFDSixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxNQUFNLENBQUM7VUFBQyxRQUFRLEVBQUNBLENBQUMsQ0FBQyxRQUFRLENBQUM7VUFBQyxVQUFVLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUM7VUFBQyxXQUFXLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUM7VUFBQyxTQUFTLEVBQUMsU0FBQVMsUUFBQU4sQ0FBQyxFQUFFO1lBQUNLLENBQUMsQ0FBQ1IsQ0FBQyxFQUFDQyxDQUFDLENBQUM7VUFBQztRQUFDLENBQUMsQ0FBQztNQUFDLENBQUM7TUFBQ00sQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUVQLENBQUMsRUFBQ0MsQ0FBQyxFQUFHO1FBQUMsSUFBR0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFFLEdBQUcsRUFBQztVQUFDUSxDQUFDLENBQUNSLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1VBQUM7UUFBTztRQUFDRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FBQztVQUFDLGFBQWEsRUFBQ0osQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFDQSxDQUFDLENBQUMsTUFBTSxDQUFDO1VBQUMsVUFBVSxFQUFDQSxDQUFDLENBQUMsU0FBUyxDQUFDO1VBQUMsY0FBYyxFQUFDLEtBQUs7VUFBQyxRQUFRLEVBQUNBLENBQUMsQ0FBQyxRQUFRLENBQUM7VUFBQyxXQUFXLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUM7VUFBQyxTQUFTLEVBQUMsU0FBQVMsUUFBQU4sQ0FBQyxFQUFFO1lBQUNGLENBQUMsQ0FBQztjQUFDLE1BQU0sRUFBQ1MsVUFBVSxDQUFDLFNBQVMsQ0FBQztjQUFDLFNBQVMsRUFBQyxNQUFNO2NBQUMsTUFBTSxFQUFDO1lBQUksQ0FBQyxDQUFDO1VBQUMsQ0FBQztVQUFDLE1BQU0sRUFBQyxTQUFBQyxLQUFBUixDQUFDLEVBQUU7WUFBQ0YsQ0FBQyxDQUFDO2NBQUMsTUFBTSxFQUFDUyxVQUFVLENBQUMsTUFBTSxDQUFDO2NBQUMsU0FBUyxFQUFDLE1BQU07Y0FBQyxNQUFNLEVBQUM7WUFBSSxDQUFDLENBQUM7VUFBQztRQUFDLENBQUMsQ0FBQztNQUFDLENBQUM7TUFBQ0UsQ0FBQyxHQUFDOUIsUUFBUSxHQUFDLGlEQUFpRDtNQUFDMEIsQ0FBQztRQUFBLElBQUFLLElBQUEsR0FBQW5DLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxDQUFDLFNBQUF1RSxRQUFNZCxDQUFDLEVBQUNDLENBQUM7VUFBQSxJQUFBRSxDQUFBLEVBQUFZLENBQUE7VUFBQSxPQUFBckwsbUJBQUEsR0FBQXlCLElBQUEsVUFBQTZKLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBN0QsSUFBQSxHQUFBNkQsUUFBQSxDQUFBbkcsSUFBQTtjQUFBO2dCQUFBbUcsUUFBQSxDQUFBN0QsSUFBQTtnQkFBYytDLENBQUMsR0FBQztrQkFBQyxTQUFTLEVBQUNILENBQUMsQ0FBQyxTQUFTLENBQUM7a0JBQUMsUUFBUSxFQUFDaEIsQ0FBQztrQkFBQyxZQUFZLEVBQUNDLENBQUM7a0JBQUMsUUFBUSxFQUFDZSxDQUFDLENBQUMsUUFBUTtnQkFBQyxDQUFDO2dCQUFBaUIsUUFBQSxDQUFBbkcsSUFBQTtnQkFBQSxPQUFhb0csQ0FBQyxDQUFDTixDQUFDLEVBQUNULENBQUMsQ0FBQztjQUFBO2dCQUFkWSxDQUFDLEdBQUFFLFFBQUEsQ0FBQTdHLElBQUE7Z0JBQWMyRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUdMLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBRVQsQ0FBQyxDQUFDYyxDQUFDLENBQUM7Z0JBQUNFLFFBQUEsQ0FBQW5HLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQW1HLFFBQUEsQ0FBQTdELElBQUE7Z0JBQUE2RCxRQUFBLENBQUFFLEVBQUEsR0FBQUYsUUFBQTtnQkFBVUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBQUgsUUFBQSxDQUFBRSxFQUFBLENBQUc7Y0FBQztjQUFBO2dCQUFBLE9BQUFGLFFBQUEsQ0FBQTFELElBQUE7WUFBQTtVQUFBLEdBQUF1RCxPQUFBO1FBQUEsQ0FBRTtRQUFBLGdCQUEzTU4sQ0FBQ0EsQ0FBQWEsRUFBQSxFQUFBQyxHQUFBO1VBQUEsT0FBQVQsSUFBQSxDQUFBaEMsS0FBQSxPQUFBRCxTQUFBO1FBQUE7TUFBQSxHQUEwTTtNQUFDMkMsQ0FBQyxHQUFDekMsUUFBUSxHQUFDLGtEQUFrRDtNQUFDb0IsQ0FBQztRQUFBLElBQUFzQixLQUFBLEdBQUE5QyxpQkFBQSxlQUFBaEosbUJBQUEsR0FBQTZHLElBQUEsQ0FBQyxTQUFBa0YsU0FBTXpCLENBQUM7VUFBQSxJQUFBQyxDQUFBLEVBQUFFLENBQUEsRUFBQVksQ0FBQSxFQUFBVyxDQUFBLEVBQUFDLENBQUE7VUFBQSxPQUFBak0sbUJBQUEsR0FBQXlCLElBQUEsVUFBQXlLLFVBQUFDLFNBQUE7WUFBQSxrQkFBQUEsU0FBQSxDQUFBekUsSUFBQSxHQUFBeUUsU0FBQSxDQUFBL0csSUFBQTtjQUFBO2dCQUFTbUYsQ0FBQyxHQUFDLEdBQUc7Z0JBQUtFLENBQUMsR0FBQyxHQUFHLEVBQUNZLENBQUMsR0FBQyxDQUFDLEVBQUUsRUFBQ1csQ0FBQyxHQUFDLENBQUMsRUFBRTtjQUFBO2dCQUFBLE1BQU92QixDQUFDLEdBQUNGLENBQUMsSUFBRSxDQUFDYyxDQUFDO2tCQUFBYyxTQUFBLENBQUEvRyxJQUFBO2tCQUFBO2dCQUFBO2dCQUFBK0csU0FBQSxDQUFBekUsSUFBQTtnQkFBQXlFLFNBQUEsQ0FBQS9HLElBQUE7Z0JBQUEsT0FBb0JvRyxDQUFDLENBQUNLLENBQUMsRUFBQ3ZCLENBQUMsQ0FBQztjQUFBO2dCQUFkMkIsQ0FBQyxHQUFBRSxTQUFBLENBQUF6SCxJQUFBO2dCQUFBLE1BQWlCdUgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFHakIsVUFBVSxDQUFDLFNBQVMsQ0FBQztrQkFBQW1CLFNBQUEsQ0FBQS9HLElBQUE7a0JBQUE7Z0JBQUE7Z0JBQUEsT0FBQStHLFNBQUEsQ0FBQXRILE1BQUEsV0FBUW9ILENBQUMsQ0FBQyxNQUFNLENBQUM7Y0FBQTtnQkFBSyxDQUFDRCxDQUFDLEtBQUdyQixDQUFDLENBQUMsUUFBUSxFQUFDc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNELENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2NBQUM7Z0JBQUFHLFNBQUEsQ0FBQS9HLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQStHLFNBQUEsQ0FBQXpFLElBQUE7Z0JBQUF5RSxTQUFBLENBQUFWLEVBQUEsR0FBQVUsU0FBQTtnQkFBVSxDQUFDSCxDQUFDLEtBQUdyQixDQUFDLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFDcUIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Y0FBQztnQkFBQ3ZCLENBQUMsRUFBRTtnQkFBQzBCLFNBQUEsQ0FBQS9HLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQSxNQUFPLElBQUlmLEtBQUssQ0FBQyxRQUFRLENBQUM7Y0FBQTtjQUFBO2dCQUFBLE9BQUE4SCxTQUFBLENBQUF0RSxJQUFBO1lBQUE7VUFBQSxHQUFBa0UsUUFBQTtRQUFBLENBQUU7UUFBQSxnQkFBalF2QixDQUFDQSxDQUFBNEIsR0FBQTtVQUFBLE9BQUFOLEtBQUEsQ0FBQTNDLEtBQUEsT0FBQUQsU0FBQTtRQUFBO01BQUEsR0FBZ1E7TUFBQ21ELENBQUMsR0FBQyxTQUFGQSxDQUFDQSxDQUFBLEVBQUs7UUFBQyxPQUFPLElBQUluRixPQUFPLENBQUMsVUFBQ29ELENBQUMsRUFBQ0MsQ0FBQyxFQUFHO1VBQUMrQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEVBQUU7WUFBQyxTQUFTLEVBQUMsU0FBQXZCLFFBQUF3QixLQUFBLEVBQVk7Y0FBQSxJQUFMOUIsQ0FBQyxHQUFBOEIsS0FBQSxDQUFOQyxJQUFJO2NBQU8vQixDQUFDLElBQUVpQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFDakIsQ0FBQyxDQUFDLEVBQUNILENBQUMsQ0FBQ0csQ0FBQyxDQUFDLElBQUVGLENBQUMsQ0FBQyxJQUFJbEcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUFDLE1BQU0sRUFBQ2tHO1VBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDO01BQUMsQ0FBQztNQUFDa0MsQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUNuQyxDQUFDLEVBQUU7UUFBQ2hCLENBQUMsR0FBQ2dCLENBQUM7UUFBQyxJQUFNQyxDQUFDLEdBQUMrQixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRTtRQUFDMUMsQ0FBQyxHQUFDVyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUcsU0FBUyxHQUFDLEdBQUcsR0FBQ0EsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFHLEtBQUssR0FBQyxHQUFHLEdBQUMsR0FBRztRQUFDLElBQU1FLENBQUMsR0FBQzZCLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQUM3QixDQUFDLEtBQUdqQixDQUFDLEdBQUNpQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUNoQixDQUFDLEdBQUNnQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFBQyxJQUFNWSxDQUFDLEdBQUM7VUFBQyxPQUFPLEVBQUMsQ0FBQyxTQUFTLEVBQUMsVUFBVTtRQUFDLENBQUM7UUFBQyxJQUFHQSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzdCLENBQUMsQ0FBQyxFQUFDO1VBQUMsSUFBQWtELElBQUEsR0FBWXJCLENBQUMsQ0FBQzdCLENBQUMsQ0FBQztZQUFUd0MsQ0FBQyxHQUFBVSxJQUFBO1lBQUNULENBQUMsR0FBQVMsSUFBQTtVQUFPaEQsQ0FBQyxHQUFDZSxDQUFDLENBQUN1QixDQUFDLENBQUMsRUFBQ3JDLENBQUMsR0FBQ2MsQ0FBQyxDQUFDd0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxNQUFLekMsQ0FBQyxHQUFDLE9BQU8sRUFBQ0MsQ0FBQyxHQUFDLEVBQUUsR0FBQ0gsQ0FBQyxHQUFDQyxDQUFDLEdBQUNDLENBQUMsR0FBQ0ksQ0FBQyxHQUFDLEdBQUc7TUFBQyxDQUFDO01BQUMrQyxDQUFDLEdBQUN2RCxRQUFRLEdBQUMsbURBQW1EO01BQUN3RCxDQUFDLEdBQUMsU0FBRkEsQ0FBQ0EsQ0FBRXRDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDRSxDQUFDLEVBQUc7UUFBQyxJQUFJWSxDQUFDLEdBQUM7VUFBQyxRQUFRLEVBQUMvQixDQUFDO1VBQUMsWUFBWSxFQUFDQyxDQUFDO1VBQUMsV0FBVyxFQUFDQyxDQUFDO1VBQUMsY0FBYyxFQUFDQyxDQUFDO1VBQUMsS0FBSyxFQUFDQyxDQUFDO1VBQUMsU0FBUyxFQUFDQyxDQUFDO1VBQUMsS0FBSyxFQUFDQyxDQUFDO1VBQUMsUUFBUSxFQUFDQyxDQUFDO1VBQUMsUUFBUSxFQUFDUyxDQUFDO1VBQUMsVUFBVSxFQUFDQyxDQUFDO1VBQUMsY0FBYyxFQUFDRTtRQUFDLENBQUM7UUFBQ2UsQ0FBQyxDQUFDbUIsQ0FBQyxFQUFDdEIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBQVcsQ0FBQyxFQUFFO1VBQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUNNLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQztNQUFDLENBQUM7TUFBQ2EsQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUN2QyxDQUFDLEVBQUU7UUFBQyxJQUFJQyxDQUFDLEdBQUNMLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDO1FBQUMsSUFBRyxDQUFDQyxDQUFDLEVBQUMsTUFBTSxJQUFJbEcsS0FBSyxDQUFDLFFBQVEsR0FBQ2lHLENBQUMsR0FBQyxPQUFPLENBQUM7UUFBQyxPQUFPQyxDQUFDO01BQUMsQ0FBQztNQUFDdUMsQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUEsRUFBSztRQUFDLElBQUcsQ0FBQzFDLENBQUMsRUFBQyxNQUFNLElBQUkvRixLQUFLLENBQUMsVUFBVSxDQUFDO01BQUMsQ0FBQztNQUFDMEksQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUV6QyxDQUFDLEVBQUNDLENBQUMsRUFBRztRQUFDQSxDQUFDLENBQUNELENBQUMsQ0FBQztNQUFDLENBQUM7TUFBQ0ssQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUVMLENBQUMsRUFBQ0MsQ0FBQyxFQUFDRSxDQUFDLEVBQUNZLENBQUMsRUFBRztRQUFDWCxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7VUFBQyxPQUFPLEVBQUNKLENBQUM7VUFBQyxTQUFTLEVBQUNDLENBQUM7VUFBQyxTQUFTLEVBQUMsU0FBQVEsUUFBU2lCLENBQUMsRUFBQztZQUFDLElBQUdBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRXZCLENBQUMsRUFBQ0EsQ0FBQyxFQUFFLENBQUMsS0FBS3VCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBRVgsQ0FBQyxJQUFFQSxDQUFDLEVBQUU7VUFBQztRQUFDLENBQUMsQ0FBQztNQUFDLENBQUM7TUFBQ0csQ0FBQyxHQUFDLFNBQUZBLENBQUNBLENBQUVsQixDQUFDLEVBQUNDLENBQUMsRUFBRztRQUFDLE9BQU8sSUFBSXJELE9BQU8sQ0FBQyxVQUFDdUQsQ0FBQyxFQUFDWSxDQUFDLEVBQUc7VUFBQ2lCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFDLEtBQUssRUFBQ2hDLENBQUM7WUFBQyxRQUFRLEVBQUMsTUFBTTtZQUFDLFFBQVEsRUFBQztjQUFDLGNBQWMsRUFBQztZQUFnQyxDQUFDO1lBQUMsTUFBTSxFQUFDMEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDekMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxFQUFDYyxDQUFDO1lBQUMsU0FBUyxFQUFDLFNBQUFOLFFBQVNpQixDQUFDLEVBQUM7Y0FBQ3ZCLENBQUMsQ0FBQ3VCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUFDLENBQUM7WUFBQyxVQUFVLEVBQUMsU0FBQXpELFNBQVN5RCxDQUFDLEVBQUM7Y0FBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLDhFQUE4RSxDQUFDLEVBQUNBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUNwQixDQUFDLENBQUMsRUFBQ29CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUNuQixDQUFDLENBQUM7Y0FBQyxJQUFNMEIsQ0FBQyxHQUFDRCxDQUFDLEtBQUdBLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBRUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUNBLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBRUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFDLHdCQUF3QjtjQUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFDTyxDQUFDLENBQUMsRUFBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLDRFQUE0RSxDQUFDO1lBQUM7VUFBQyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUM7TUFBQyxDQUFDO01BQUN1QixDQUFDLEdBQUM3RCxRQUFRLEdBQUMsbURBQW1EO0lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztNQUFBLElBQUE4RCxLQUFBLEdBQUFsRSxpQkFBQSxlQUFBaEosbUJBQUEsR0FBQTZHLElBQUEsQ0FBQyxTQUFBc0csU0FBTTdDLENBQUMsRUFBQ0MsQ0FBQztRQUFBLElBQUFFLENBQUEsRUFBQVksQ0FBQTtRQUFBLE9BQUFyTCxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBMkwsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUEzRixJQUFBLEdBQUEyRixTQUFBLENBQUFqSSxJQUFBO1lBQUE7Y0FBQWlJLFNBQUEsQ0FBQTNGLElBQUE7Y0FBUTRFLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQUFOLENBQUMsRUFBRTtnQkFBQyxPQUFNO2tCQUFDLFlBQVksRUFBQ2pDLENBQUM7a0JBQUMsT0FBTyxFQUFDLEVBQUU7a0JBQUMsU0FBUyxFQUFDLFNBQUFnQixRQUFBLEVBQUk7b0JBQUNXLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7a0JBQUMsQ0FBQztrQkFBQyxNQUFNLEVBQUMsU0FBQVQsS0FBQWdCLENBQUMsRUFBRTtvQkFBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBQ08sQ0FBQyxDQUFDO2tCQUFDO2dCQUFDLENBQUM7Y0FBQyxDQUFDLENBQUM7Y0FBQW9CLFNBQUEsQ0FBQWpJLElBQUE7Y0FBQSxPQUFTaUgsQ0FBQyxFQUFFO1lBQUE7Y0FBWC9GLENBQUMsR0FBQStHLFNBQUEsQ0FBQTNJLElBQUE7Y0FBVytILENBQUMsQ0FBQ25DLENBQUMsQ0FBQztjQUFPRyxDQUFDLEdBQUM7Z0JBQUMsTUFBTSxFQUFDbkUsQ0FBQztnQkFBQyxRQUFRLEVBQUNnRCxDQUFDO2dCQUFDLFlBQVksRUFBQ0MsQ0FBQztnQkFBQyxXQUFXLEVBQUNDLENBQUM7Z0JBQUMsY0FBYyxFQUFDQyxDQUFDO2dCQUFDLEtBQUssRUFBQ0MsQ0FBQztnQkFBQyxTQUFTLEVBQUNDLENBQUM7Z0JBQUMsS0FBSyxFQUFDQztjQUFDLENBQUM7Y0FBQXlELFNBQUEsQ0FBQWpJLElBQUE7Y0FBQSxPQUFTb0csQ0FBQyxDQUFDeUIsQ0FBQyxFQUFDeEMsQ0FBQyxDQUFDO1lBQUE7Y0FBZFksQ0FBQyxHQUFBZ0MsU0FBQSxDQUFBM0ksSUFBQTtjQUFjMkcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFHTCxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUduQixDQUFDLEdBQUN3QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUN2QixDQUFDLEdBQUN1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUN0QixDQUFDLEdBQUNzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBQ0EsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFDZCxDQUFDLENBQUNqRSxDQUFDLENBQUM7Y0FBQytHLFNBQUEsQ0FBQWpJLElBQUE7Y0FBQTtZQUFBO2NBQUFpSSxTQUFBLENBQUEzRixJQUFBO2NBQUEyRixTQUFBLENBQUE1QixFQUFBLEdBQUE0QixTQUFBO2NBQVUzQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFBMkIsU0FBQSxDQUFBNUIsRUFBQSxDQUFHO1lBQUM7WUFBQTtjQUFBLE9BQUE0QixTQUFBLENBQUF4RixJQUFBO1VBQUE7UUFBQSxHQUFBc0YsUUFBQTtNQUFBLENBQUU7TUFBQSxpQkFBQUcsR0FBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQUwsS0FBQSxDQUFBL0QsS0FBQSxPQUFBRCxTQUFBO01BQUE7SUFBQSxLQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7TUFBQSxJQUFBc0UsS0FBQSxHQUFBeEUsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUMsU0FBQTRHLFNBQU1uRCxDQUFDO1FBQUEsT0FBQXRLLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFpTSxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQWpHLElBQUEsR0FBQWlHLFNBQUEsQ0FBQXZJLElBQUE7WUFBQTtjQUFHa0YsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sRUFBQ1UsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQkFBQyxTQUFTLEVBQUMsTUFBTTtnQkFBQyxNQUFNLEVBQUM7a0JBQUMsTUFBTSxFQUFDMUU7Z0JBQUM7Y0FBQyxDQUFDLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQXFILFNBQUEsQ0FBQTlGLElBQUE7VUFBQTtRQUFBLEdBQUE0RixRQUFBO01BQUEsQ0FBQztNQUFBLGlCQUFBRyxHQUFBO1FBQUEsT0FBQUosS0FBQSxDQUFBckUsS0FBQSxPQUFBRCxTQUFBO01BQUE7SUFBQSxLQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7TUFBQSxJQUFBMkUsS0FBQSxHQUFBN0UsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUMsU0FBQWlILFNBQU14RCxDQUFDLEVBQUNDLENBQUM7UUFBQSxPQUFBdkssbUJBQUEsR0FBQXlCLElBQUEsVUFBQXNNLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBdEcsSUFBQSxHQUFBc0csU0FBQSxDQUFBNUksSUFBQTtZQUFBO2NBQUlzRixFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQUMsU0FBUyxFQUFDLFNBQUFLLFFBQUFOLENBQUMsRUFBRTtrQkFBQyxJQUFHO29CQUFDSixDQUFDLENBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO2tCQUFDLENBQUMsUUFBTWMsQ0FBQyxFQUFDO29CQUFDSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFDTCxDQUFDLENBQUM7a0JBQUM7Z0JBQUMsQ0FBQztnQkFBQyxNQUFNLEVBQUMsU0FBQUosS0FBQVIsQ0FBQyxFQUFFO2tCQUFDQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQUMsU0FBUyxFQUFDLFNBQUFLLFFBQUFNLENBQUMsRUFBRTtzQkFBQyxJQUFHO3dCQUFDaEIsQ0FBQyxDQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztzQkFBQyxDQUFDLFFBQU15QixDQUFDLEVBQUM7d0JBQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUNNLENBQUMsQ0FBQztzQkFBQztvQkFBQztrQkFBQyxDQUFDLENBQUM7Z0JBQUM7Y0FBQyxDQUFDLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQWdDLFNBQUEsQ0FBQW5HLElBQUE7VUFBQTtRQUFBLEdBQUFpRyxRQUFBO01BQUEsQ0FBQztNQUFBLGlCQUFBRyxHQUFBLEVBQUFDLEdBQUE7UUFBQSxPQUFBTCxLQUFBLENBQUExRSxLQUFBLE9BQUFELFNBQUE7TUFBQTtJQUFBO0lBQUMsSUFBTWlGLENBQUMsR0FBQy9FLFFBQVEsR0FBQyx5REFBeUQ7SUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7TUFBQSxJQUFBZ0YsS0FBQSxHQUFBcEYsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUMsU0FBQXdILFNBQU0vRCxDQUFDLEVBQUNDLENBQUM7UUFBQSxJQUFBRSxDQUFBO1FBQUEsT0FBQXpLLG1CQUFBLEdBQUF5QixJQUFBLFVBQUE2TSxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQTdHLElBQUEsR0FBQTZHLFNBQUEsQ0FBQW5KLElBQUE7WUFBQTtjQUFBbUosU0FBQSxDQUFBN0csSUFBQTtjQUFRNEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFDaEIsQ0FBQyxFQUFDZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFDZixDQUFDO2NBQUNnRixTQUFBLENBQUFuSixJQUFBO2NBQUEsT0FBY29HLENBQUMsQ0FBQzJDLENBQUMsRUFBQzdELENBQUMsQ0FBQztZQUFBO2NBQWRHLENBQUMsR0FBQThELFNBQUEsQ0FBQTdKLElBQUE7Y0FBYzZGLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDO2NBQUM4RCxTQUFBLENBQUFuSixJQUFBO2NBQUE7WUFBQTtjQUFBbUosU0FBQSxDQUFBN0csSUFBQTtjQUFBNkcsU0FBQSxDQUFBOUMsRUFBQSxHQUFBOEMsU0FBQTtjQUFVN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBQTZDLFNBQUEsQ0FBQTlDLEVBQUEsQ0FBRztZQUFDO1lBQUE7Y0FBQSxPQUFBOEMsU0FBQSxDQUFBMUcsSUFBQTtVQUFBO1FBQUEsR0FBQXdHLFFBQUE7TUFBQSxDQUFFO01BQUEsaUJBQUFHLEdBQUEsRUFBQUMsSUFBQTtRQUFBLE9BQUFMLEtBQUEsQ0FBQWpGLEtBQUEsT0FBQUQsU0FBQTtNQUFBO0lBQUE7SUFBQyxJQUFNd0YsQ0FBQyxHQUFDdEYsUUFBUSxHQUFDLG1EQUFtRDtJQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7TUFBQSxJQUFBdUYsS0FBQSxHQUFBM0YsaUJBQUEsZUFBQWhKLG1CQUFBLEdBQUE2RyxJQUFBLENBQUMsU0FBQStILFNBQU10RSxDQUFDLEVBQUNDLENBQUM7UUFBQSxJQUFBRSxDQUFBLEVBQUFZLENBQUE7UUFBQSxPQUFBckwsbUJBQUEsR0FBQXlCLElBQUEsVUFBQW9OLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBcEgsSUFBQSxHQUFBb0gsU0FBQSxDQUFBMUosSUFBQTtZQUFBO2NBQUEwSixTQUFBLENBQUFwSCxJQUFBO2NBQVkrQyxDQUFDLEdBQUM7Z0JBQUMsUUFBUSxFQUFDbkIsQ0FBQztnQkFBQyxZQUFZLEVBQUNDLENBQUM7Z0JBQUMsVUFBVSxFQUFDZTtjQUFDLENBQUM7Y0FBQXdFLFNBQUEsQ0FBQTFKLElBQUE7Y0FBQSxPQUFlb0csQ0FBQyxDQUFDa0QsQ0FBQyxFQUFDakUsQ0FBQyxDQUFDO1lBQUE7Y0FBZFksQ0FBQyxHQUFBeUQsU0FBQSxDQUFBcEssSUFBQTtjQUFjNkYsQ0FBQyxDQUFDYyxDQUFDLENBQUM7Y0FBQ3lELFNBQUEsQ0FBQTFKLElBQUE7Y0FBQTtZQUFBO2NBQUEwSixTQUFBLENBQUFwSCxJQUFBO2NBQUFvSCxTQUFBLENBQUFyRCxFQUFBLEdBQUFxRCxTQUFBO2NBQVVwRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFBb0QsU0FBQSxDQUFBckQsRUFBQSxDQUFHO1lBQUM7WUFBQTtjQUFBLE9BQUFxRCxTQUFBLENBQUFqSCxJQUFBO1VBQUE7UUFBQSxHQUFBK0csUUFBQTtNQUFBLENBQUU7TUFBQSxpQkFBQUcsSUFBQSxFQUFBQyxJQUFBO1FBQUEsT0FBQUwsS0FBQSxDQUFBeEYsS0FBQSxPQUFBRCxTQUFBO01BQUE7SUFBQSxLQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFDLFVBQUNvQixDQUFDLEVBQUNDLENBQUMsRUFBRztNQUFDLElBQUlFLENBQUMsR0FBQztRQUFDLFVBQVUsRUFBQ0gsQ0FBQyxDQUFDLFVBQVU7TUFBQyxDQUFDO01BQUNBLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBR0csQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUNHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFDSCxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBQ0csQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEdBQUNILENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBR0csQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFDSCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBQ0wsQ0FBQyxHQUFDcUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM3QixDQUFDLENBQUMsRUFBQ1IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQUFvQixDQUFDLEVBQUU7UUFBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUd1QixDQUFDLENBQUNxQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBQ2pGLENBQUMsRUFBQ2tGLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBQ3BCLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZSxDQUFDLENBQUMsRUFBQ3BCLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUFDLENBQUMsQ0FBQyxFQUFDSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUVMLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFBb0IsQ0FBQyxFQUFFO1FBQUNmLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDZSxDQUFDLENBQUMsRUFBQ3BCLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUFDLENBQUMsQ0FBQyxFQUFDRCxDQUFDLEdBQUNNLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1FBQUMsTUFBTSxFQUFDUyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQUMsU0FBUyxFQUFDLE1BQU07UUFBQyxNQUFNLEVBQUM7TUFBSSxDQUFDLENBQUM7SUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUMsWUFBSTtNQUFDZixDQUFDLEtBQUdBLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDQSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUFBLE9BQUkyQyxDQUFDLENBQUNxQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBQ2pGLENBQUMsRUFBQ2tGLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFBNUUsQ0FBQyxFQUFFO1FBQUNMLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQUk7VUFBQ0EsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQSxPQUFJMkMsQ0FBQyxDQUFDcUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUNqRixDQUFDLEVBQUNrRixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7VUFBQSxFQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBQTNFLENBQUM7VUFBQSxPQUFFbUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQUEsRUFBQztNQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFDLFVBQUNwQixDQUFDLEVBQUNDLENBQUMsRUFBRztNQUFDLElBQU1FLENBQUMsR0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUNKLENBQUMsQ0FBQztNQUFDSixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUNBLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQ08sQ0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQztRQUFDLE1BQU0sRUFBQ1MsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUFDLFNBQVMsRUFBQyxNQUFNO1FBQUMsTUFBTSxFQUFDO1VBQUMsY0FBYyxFQUFDZCxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUM7UUFBRztNQUFDLENBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBQyxVQUFBSSxDQUFDLEVBQUU7TUFBQyxJQUFJQyxDQUFDLEdBQUNzQyxDQUFDLENBQUN2QyxDQUFDLENBQUM7TUFBQ0MsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUNMLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0ksQ0FBQyxFQUFDLElBQUksQ0FBQztJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBQyxVQUFBQSxDQUFDLEVBQUU7TUFBQyxJQUFJQyxDQUFDLEdBQUNzQyxDQUFDLENBQUN2QyxDQUFDLENBQUM7TUFBQ0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLFVBQUFELENBQUMsRUFBRTtNQUFDLElBQUlDLENBQUMsR0FBQ3NDLENBQUMsQ0FBQ3ZDLENBQUMsQ0FBQztNQUFDQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUMsVUFBQ0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUc7TUFBQ0gsQ0FBQyxHQUFDa0MsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBQ2hDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQ0UsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBQ0UsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFDLE1BQU0sRUFBQ1MsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUFDLFNBQVMsRUFBQyxNQUFNO1FBQUMsTUFBTSxFQUFDO01BQUksQ0FBQyxDQUFDO0lBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFDLFVBQUFWLENBQUMsRUFBRTtNQUFDd0MsQ0FBQyxFQUFFLEVBQUMxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNFLENBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBQyxZQUFJO01BQUN3QyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBQyxZQUFJO01BQUMwQyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBQyxZQUFJO01BQUMwQyxDQUFDLEVBQUUsRUFBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUMsVUFBQUUsQ0FBQyxFQUFFO01BQUN3QyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUFDLFVBQVUsRUFBQyxTQUFBNkUsU0FBQTVFLENBQUMsRUFBRTtVQUFDLElBQUdBLENBQUMsSUFBRSxJQUFJLElB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TSxFQUFDUyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQUMsU0FBUyxFQUFDLE1BQU07WUFBQyxNQUFNLEVBQUNLO1VBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFDLE1BQU0sRUFBQyxTQUFBSixLQUFBUixDQUFDLEVBQUU7VUFBQ0YsQ0FBQyxDQUFDO1lBQUMsTUFBTSxFQUFDUyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQUMsU0FBUyxFQUFDUCxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQUMsTUFBTSxFQUFDO1VBQUksQ0FBQyxDQUFDO1FBQUM7TUFBQyxDQUFDLENBQUM7SUFBQyxDQUFDO0VBQUM7RUFBQ3BCLFlBQUEsQ0FBTyxRQUFRLElBQWYsU0FBQW9HLE9BQUEsRUFBa0I7SUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBQyxJQUFJcEcsWUFBWSxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQUMsQ0FBQztFQUFBLE9BQUFBLFlBQUE7QUFBQTtBQUFBcEosT0FBQSxjQUFBb0osWUFBQTtBQUFBLElBQU8yQixVQUFVLFlBQUFBLFdBQUE7QUFBVkEsVUFBVSxDQUFTLFNBQVMsSUFBRSxHQUFHO0FBQWpDQSxVQUFVLENBQWdDLE1BQU0sSUFBRSxDQUFDLEdBQUc7QUFBQSxJQUFRaUUsTUFBTSxZQUFBQSxPQUFBO0FBQU5BLE1BQU0sQ0FBUyxtQkFBbUIsSUFBRSxHQUFHO0FBQXZDQSxNQUFNLENBQTBDLFdBQVcsSUFBRSxHQUFHO0FBQUEsSUFBUUMsWUFBWSxZQUFBQSxhQUFBO0FBQVpBLFlBQVksQ0FBUyxNQUFNLElBQUUsR0FBRztBQUFoQ0EsWUFBWSxDQUE2QixVQUFVLElBQUUsR0FBRztBQUFBUSxNQUFBLENBQUF6UCxPQUFBLEdBQUFBLE9BQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMPSdodHRwczovL2dhbWVzLmhuZGliZWkuY29tJztleHBvcnQgZGVmYXVsdCBjbGFzcyBFeW91Q2xpZW50S3N7Y29uc3RydWN0b3IoKXtsZXQgRj1udWxsLEk9MHg5LG49bnVsbCxxPW51bGwsZj0nLTEnLHM9Jy0xJyxvPSc0JyxpPW51bGwsWD1udWxsLHU9bnVsbCx3PW51bGwsdD1udWxsLEM9bnVsbDtjb25zdCBqPW5ldyBNYXAoKTtsZXQgUD1udWxsO2NvbnN0IEs9KFMsSik9PntTWydnYW1lSWQnXT1GLChTWydwbGF0Zm9ybUlkJ109SSxTWydzeXMnXT1vKSxCKFMpWyd0aGVuJ10oTz0+e2lmKE9bJ3BheVR5cGUnXT09MHg0KXR0WydwcmV2aWV3SW1hZ2UnXSh7J3VybHMnOltPWydwYXlVcmwnXV0sJ3Nob3dtZW51JzohIVtdfSk7ZWxzZXtpZihPWydwYXlUeXBlJ109PTB4OClPWydiYWxhbmNlJ10+MHgwP3IoJ+WFheWAvOaPkOekuicsJ+i0puaIt+S9meminTonK09bJ2JhbGFuY2UnXSsn5YWDLFxceDIw6L+Y6ZyA5YWF5YC8OicrT1snbmVlZFBheSddKyflhYMnLCgpPT5sKE8sSikpOmwoTyxKKTtlbHNle2lmKE9bJ3BheVR5cGUnXT09MHg5KU9bJ2JhbGFuY2UnXT4weDA/cign5YWF5YC85o+Q56S6Jywn6LSm5oi35L2Z6aKdOicrT1snYmFsYW5jZSddKyflhYMsXFx4MjDov5jpnIDlhYXlgLw6JytPWyduZWVkUGF5J10rJ+WFgycsKCk9PkwoTyxKKSk6TChPLEopO2Vsc2UgdGhyb3cgbmV3IEVycm9yKCfpnZ7ms5XmlK/ku5jnsbvlnosnKTt9fX0pO30sbD0oUyxKKT0+e2lmKFNbJ25lZWRQYXknXT09MHgwKXt4KFMsSik7cmV0dXJuO310dFsncmVxdWVzdEdhbWVQYXltZW50J10oeydtb2RlJzonZ2FtZScsJ2Vudic6MHgwLCdjdXJyZW5jeVR5cGUnOidDTlknLCdwbGF0Zm9ybSc6J2FuZHJvaWQnLCdidXlRdWFudGl0eSc6U1snbmVlZFBheSddKlNbJ3JhdGUnXSwnem9uZUlkJzpTWyd6b25lSWQnXSwnY3VzdG9tSWQnOlNbJ29yZGVySWQnXSwnZXh0cmFJbmZvJzpTWydvcmRlcklkJ10sJ3N1Y2Nlc3MnOk89Pnt4KFMsSik7fX0pO30sTD0oUyxKKT0+e2lmKFNbJ25lZWRQYXknXT09MHgwKXt4KFMsSik7cmV0dXJuO310dFsnb3BlbkF3ZW1lQ3VzdG9tZXJTZXJ2aWNlJ10oeydidXlRdWFudGl0eSc6U1snbmVlZFBheSddKlNbJ3JhdGUnXSwnY3VzdG9tSWQnOlNbJ29yZGVySWQnXSwnY3VycmVuY3lUeXBlJzonQ05ZJywnem9uZUlkJzpTWyd6b25lSWQnXSwnZXh0cmFJbmZvJzpTWydvcmRlcklkJ10sJ3N1Y2Nlc3MnOk89PntKKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sJ2ZhaWwnOk89PntKKHsnY29kZSc6Q29kZVN0YXR1c1snRkFJTCddLCdtZXNzYWdlJzon5pON5L2c5aSx6LSlJywnZGF0YSc6bnVsbH0pO319KTt9LGg9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvZGVkdWN0Jyx4PWFzeW5jKFMsSik9Pnt0cnl7Y29uc3QgTz17J29yZGVySWQnOlNbJ29yZGVySWQnXSwnZ2FtZUlkJzpGLCdwbGF0Zm9ybUlkJzpJLCd1c2VySWQnOlNbJ3VzZXJJZCddfTtsZXQgZD1hd2FpdCBwKGgsTyk7ZFsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiZKKGQpO31jYXRjaChrKXtjb25zb2xlWydlcnJvciddKCdb5omj5qy+5aSx6LSlXeW8guW4uDo+JyxrKTt9fSxlPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL2t1YWlTaG91Q2xpZW50L3B1bGxQYXknLEI9YXN5bmMgUz0+e2NvbnN0IEo9MHgzO2xldCBPPTB4MCxkPSFbXSxrPSFbXTt3aGlsZShPPEomJiFkKXt0cnl7Y29uc3QgZz1hd2FpdCBwKGUsUyk7aWYoZ1snY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddKXJldHVybiBnWydkYXRhJ107ZWxzZSFrJiYocign5pSv5LuY5ouJ6LW35aSx6LSlJyxnWydtZXNzYWdlJ10pLGs9ISFbXSk7fWNhdGNoKFcpeyFrJiYocign5pSv5LuY5ouJ6LW35aSx6LSlJywn572R57uc6LaF5pe2Jyksaz0hIVtdKTt9TysrO310aHJvdyBuZXcgRXJyb3IoJ+aUr+S7mOaLiei1t+Wksei0pScpO30sUT0oKT0+e3JldHVybiBuZXcgUHJvbWlzZSgoUyxKKT0+e2tzWydsb2dpbiddKHsnZm9yY2UnOiEhW10sJ3N1Y2Nlc3MnOih7Y29kZTpPfSk9PntPPyhjb25zb2xlWydsb2cnXSgnY29kZTo+JyxPKSxTKE8pKTpKKG5ldyBFcnJvcign6I635Y+WY29kZeWksei0pScpKTt9LCdmYWlsJzpKfSk7fSk7fSxjPVM9PntGPVM7Y29uc3QgSj1rc1snZ2V0U3lzdGVtSW5mb1N5bmMnXSgpO289SlsncGxhdGZvcm0nXT09PSdhbmRyb2lkJz8nNCc6SlsncGxhdGZvcm0nXT09PSdpb3MnPyc1JzonNic7Y29uc3QgTz1rc1snZ2V0TGF1bmNoT3B0aW9uc1N5bmMnXSgpWydxdWVyeSddO08mJihuPU9bJ2NoYW5uZWwnXSxxPU9bJ3N1Yl9jaGFubmVsJ10pO2NvbnN0IGQ9eycxMDkxMyc6Wyd1bml0X2lkJywnY2FsbGJhY2snXX07aWYoZFsnaGFzT3duUHJvcGVydHknXShuKSl7Y29uc3QgW2ssZ109ZFtuXTtmPU9ba10scz1PW2ddO31lbHNlIG49JzEwOTA2JyxxPScnK0YrSStuK28rJzAnO30sRT1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC9hZEFjdGlvbicsbT0oUyxKLE8pPT57bGV0IGQ9eydnYW1lSWQnOkYsJ3BsYXRmb3JtSWQnOkksJ2NoYW5uZWxJZCc6biwnc3ViQ2hhbm5lbElkJzpxLCdhaWQnOmYsJ3RyYWNlSWQnOnMsJ3N5cyc6bywndXNlcklkJzpYLCdhZFR5cGUnOlMsJ2FkVW5pdElkJzpKLCdhZEFjdGlvblR5cGUnOk99O3AoRSxkKVsnY2F0Y2gnXShrPT57Y29uc29sZVsnbG9nJ10oJ+WPkemAgeW5v+WRiuihjOS4uuWksei0pTo+JyxrKTt9KTt9LE09Uz0+e2xldCBKPWpbJ2dldCddKFMpO2lmKCFKKXRocm93IG5ldyBFcnJvcign5pyq5Yib5bu657yW5Y+35Li6JytTKyfnmoTlrqLmnI3mjInpkq4nKTtyZXR1cm4gSjt9LFQ9KCk9PntpZighUCl0aHJvdyBuZXcgRXJyb3IoJ+acquWIm+W7uuW9leWxj+euoeeQhuWZqCcpO30sVj0oUyxKKT0+e0ooUyk7fSxyPShTLEosTyxkKT0+e3R0WydzaG93TW9kYWwnXSh7J3RpdGxlJzpTLCdjb250ZW50JzpKLCdzdWNjZXNzJzpmdW5jdGlvbihrKXtpZihrWydjb25maXJtJ10mJk8pTygpO2Vsc2Uga1snY2FuY2VsJ10mJmQmJmQoKTt9fSk7fSxwPShTLEopPT57cmV0dXJuIG5ldyBQcm9taXNlKChPLGQpPT57a3NbJ3JlcXVlc3QnXSh7J3VybCc6UywnbWV0aG9kJzonUE9TVCcsJ2hlYWRlcic6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnfSwnZGF0YSc6SlNPTlsnc3RyaW5naWZ5J10oSiksJ2ZhaWwnOmQsJ3N1Y2Nlc3MnOmZ1bmN0aW9uKGspe08oa1snZGF0YSddKTt9LCdjb21wbGV0ZSc6ZnVuY3Rpb24oayl7Y29uc29sZVsnbG9nJ10oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeivt+axglxceDIwQkVHSU4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpLGNvbnNvbGVbJ2xvZyddKCdVcmw6PicsUyksY29uc29sZVsnbG9nJ10oJ+ivt+axguWPguaVsDo+JyxKKTtjb25zdCBnPWsmJihrWydkYXRhJ118fGtbJ2Vyck1zZyddKT9rWydkYXRhJ118fGtbJ2Vyck1zZyddOidOb1xceDIwcmVzcG9uc2VcXHgyMGRhdGEnO2NvbnNvbGVbJ2xvZyddKCflk43lupQ6PicsZyksY29uc29sZVsnbG9nJ10oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeivt+axglxceDIwRU5ELS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTt9fSk7fSk7fSxIPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL2t1YWlTaG91Q2xpZW50L2luaXRHYW1lJzt0aGlzWydpbml0J109YXN5bmMoUyxKKT0+e3RyeXtrc1snb25TaGFyZUFwcE1lc3NhZ2UnXShrPT57cmV0dXJueyd0ZW1wbGF0ZUlkJzp3LCdxdWVyeSc6JycsJ3N1Y2Nlc3MnOigpPT57Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+aIkOWKnycpO30sJ2ZhaWwnOmc9Pntjb25zb2xlWydsb2cnXSgn5YiG5Lqr5aSx6LSlJyxnKTt9fTt9KSxpPWF3YWl0IFEoKSxjKFMpO2NvbnN0IE89eydjb2RlJzppLCdnYW1lSWQnOkYsJ3BsYXRmb3JtSWQnOkksJ2NoYW5uZWxJZCc6biwnc3ViQ2hhbm5lbElkJzpxLCdhaWQnOmYsJ3RyYWNlSWQnOnMsJ3N5cyc6b30sZD1hd2FpdCBwKEgsTyk7ZFsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiYoWD1kWydkYXRhJ11bJ3VzZXJJZCddLHU9ZFsnZGF0YSddWyd1bmlvbklkJ10sdz1kWydkYXRhJ11bJ3NoYXJlVGVtcGxhdGVJZCddLGRbJ2RhdGEnXT1udWxsKSxKKGkpO31jYXRjaChrKXtjb25zb2xlWydlcnJvciddKCdb5Yid5aeL5YyW5ri45oiPXeW8guW4uDo+JyxrKTt9fSx0aGlzWydsb2dpbiddPWFzeW5jIFM9PntTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6eydjb2RlJzppfX0pO30sdGhpc1sncGF5J109YXN5bmMoUyxKKT0+e3R0WydjaGVja1Nlc3Npb24nXSh7J3N1Y2Nlc3MnOk89Pnt0cnl7SyhTLEopO31jYXRjaChkKXtjb25zb2xlWydlcnJvciddKCdb5pSv5LuY5ouJ6LW3XeW8guW4uDo+JyxkKTt9fSwnZmFpbCc6Tz0+e3R0Wydsb2dpbiddKHsnc3VjY2Vzcyc6ZD0+e3RyeXtLKFMsSik7fWNhdGNoKGspe2NvbnNvbGVbJ2Vycm9yJ10oJ1vmlK/ku5jmi4notbdd5byC5bi4Oj4nLGspO319fSk7fX0pO307Y29uc3QgRz1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC91cGxvYWRSb2xlSW5mbyc7dGhpc1sndXBsb2FkUm9sZUluZm8nXT1hc3luYyhTLEopPT57dHJ5e1NbJ2dhbWVJZCddPUYsU1sncGxhdGZvcm1JZCddPUk7Y29uc3QgTz1hd2FpdCBwKEcsUyk7SihPKTt9Y2F0Y2goZCl7Y29uc29sZVsnZXJyb3InXSgn5LiK5oql6KeS6Imy5pWw5o2u5byC5bi4Oj4nLGQpO319O2NvbnN0IGI9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvYW50aWRpcnQnO3RoaXNbJ2FudGlkaXJ0J109YXN5bmMoUyxKKT0+e3RyeXtsZXQgTz17J2dhbWVJZCc6RiwncGxhdGZvcm1JZCc6SSwnY29udGVudHMnOlN9O2NvbnN0IGQ9YXdhaXQgcChiLE8pO0ooZCk7fWNhdGNoKGspe2NvbnNvbGVbJ2Vycm9yJ10oJ1vlhoXlrrnlronlhajmo4DmtYtd5byC5bi4Oj4nLGspO319LHRoaXNbJ2NyZWF0ZVJld2FyZGVkVmlkZW9BZCddPShTLEopPT57bGV0IE89eydhZFVuaXRJZCc6U1snYWRVbml0SWQnXX07U1snbXVsdGl0b24nXSYmKE9bJ211bHRpdG9uJ109U1snbXVsdGl0b24nXSxPWydtdWx0aXRvblJld2FyZE1zZyddPVNbJ211bHRpdG9uUmV3YXJkTXNnJ10sT1snbXVsdGl0b25SZXdhcmRUaW1lcyddPVNbJ211bHRpdG9uUmV3YXJkVGltZXMnXSksU1sncHJvZ3Jlc3NUaXAnXSYmKE9bJ3Byb2dyZXNzVGlwJ109U1sncHJvZ3Jlc3NUaXAnXSksQz1rc1snY3JlYXRlUmV3YXJkZWRWaWRlb0FkJ10oTyksQ1snb25DbG9zZSddKGQ9PntkJiZkWydpc0VuZGVkJ10mJihtKEFkVHlwZVsnUkVXQVJERURfVklERU9fQUQnXSx0LEFkQWN0aW9uVHlwZVsnRklOSVNIRUQnXSksY29uc29sZVsnbG9nJ10oJ+ato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsScpKSxTWydvbkNsb3NlJ10mJlNbJ29uQ2xvc2UnXShkKSxDWydkZXN0cm95J10oKTt9KSxTWydvbkVycm9yJ10mJkNbJ29uRXJyb3InXShkPT57U1snb25FcnJvciddJiZTWydvbkVycm9yJ10oZCksQ1snZGVzdHJveSddKCk7fSksdD1TWydhZFVuaXRJZCddLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydzaG93UmV3YXJkZWRWaWRlb0FkJ109KCk9PntDJiYoQ1snbG9hZCddKCksQ1snc2hvdyddKClbJ3RoZW4nXSgoKT0+bShBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpWydjYXRjaCddKFM9PntDWydsb2FkJ10oKVsndGhlbiddKCgpPT57Q1snc2hvdyddKClbJ3RoZW4nXSgoKT0+bShBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpO30pWydjYXRjaCddKEo9PmNvbnNvbGVbJ2xvZyddKCfmv4DlirHop4bpopFcXHgyMOW5v+WRiuaYvuekuuWksei0pScpKTt9KSk7fSx0aGlzWydjcmVhdGVDb250YWN0QnV0dG9uJ109KFMsSik9Pntjb25zdCBPPXR0WydjcmVhdGVDb250YWN0QnV0dG9uJ10oUyk7alsnc2V0J10oalsnc2l6ZSddLE8pLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzp7J2NvbnRhY3RCdG5Obyc6alsnc2l6ZSddLTB4MX19KTt9LHRoaXNbJ2NvbnRhY3RCdG5EZXN0b3J5J109Uz0+e2xldCBKPU0oUyk7SlsnZGVzdG9yeSddKCksalsnc2V0J10oUyxudWxsKTt9LHRoaXNbJ2NvbnRhY3RCdG5TaG93J109Uz0+e2xldCBKPU0oUyk7Slsnc2hvdyddKCk7fSx0aGlzWydjb250YWN0QnRuSGlkZSddPVM9PntsZXQgSj1NKFMpO0pbJ2hpZGUnXSgpO30sdGhpc1snY3JlYXRlR2FtZVJlY29yZGVyJ109KFMsSik9PntQPWtzWydnZXRHYW1lUmVjb3JkZXInXSgpLFNbJ29uU3RhcnQnXSYmUFsnb24nXSgnc3RhcnQnLFNbJ29uU3RhcnQnXSksU1snb25SZXN1bWUnXSYmUFsnb24nXSgncmVzdW1lJyxTWydvblJlc3VtZSddKSxTWydvblBhdXNlJ10mJlBbJ29uJ10oJ3BhdXNlJyxTWydvblBhdXNlJ10pLFNbJ29uU3RvcCddJiZQWydvbiddKCdzdG9wJyxTWydvblN0b3AnXSksU1snb25FcnJvciddJiZQWydvbiddKCdlcnJvcicsU1snb25FcnJvciddKSxTWydvbkFib3J0J10mJlBbJ29uJ10oJ2Fib3J0JyxTWydvbkFib3J0J10pLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydnYW1lUmVjb3JkZXJTdGFydCddPVM9PntUKCksUFsnc3RhcnQnXShTKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclBhdXNlJ109KCk9PntUKCksUFsncGF1c2UnXSgpO30sdGhpc1snZ2FtZVJlY29yZGVyUmVzdW1lJ109KCk9PntUKCksUFsncmVzdW1lJ10oKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclN0b3AnXT0oKT0+e1QoKSxjb25zb2xlWydsb2cnXSgn6Kem5Y+R5YGc5q2i5b2V5bGPJyksUFsnc3RvcCddKCk7fSx0aGlzWydwdWJsaXNoVmlkZW8nXT1TPT57VCgpLFBbJ3B1Ymxpc2hWaWRlbyddKHsndmlkZW8nOlNbJ3ZpZGVvSUQnXSwnY2FsbGJhY2snOko9PntpZihKIT1udWxsJiZKIT11bmRlZmluZWQpe2NvbnNvbGVbJ2xvZyddKCfliIbkuqvlvZXlsY/lpLHotKU6XFx4MjAnLEopO3JldHVybjt9Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+W9leWxj+aIkOWKnycpO319KTt9LHRoaXNbJ3NoYXJlQXBwTWVzc2FnZSddPShTLEopPT57a3NbJ3NoYXJlQXBwTWVzc2FnZSddKHsuLi5TLCd0ZW1wbGF0ZUlkJzp3LCdzdWNjZXNzJzooKT0+e0ooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSwnZmFpbCc6Tz0+e2NvbnNvbGVbJ2xvZyddKCdb5YiG5Lqr5aSx6LSlXTo+JyxPKSxKKHsnY29kZSc6Q29kZVN0YXR1c1snRkFJTCddLCdtZXNzYWdlJzon5pON5L2c5aSx6LSlJywnZGF0YSc6bnVsbH0pO319KTt9LHRoaXNbJ2FkZFNob3J0Y3V0J109Uz0+e2tzWydhZGRTaG9ydGN1dCddKHsnY29tcGxldGUnOlN9KTt9LHRoaXNbJ2FkZENvbW1vblVzZSddPVM9Pntrc1snYWRkQ29tbW9uVXNlJ10oeydjb21wbGV0ZSc6U30pO30sdGhpc1snY2hlY2tTaWRlYmFyJ109Uz0+e3R0WydjaGVja1NjZW5lJ10oeydzY2VuZSc6J3NpZGViYXInLCdzdWNjZXNzJzpKPT57SiYmSlsnaXNFeGlzdCddJiZTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO319KTt9LHRoaXNbJ25hdmlnYXRlVG9TaWRlYmFyJ109Uz0+e3R0WyduYXZpZ2F0ZVRvU2NlbmUnXSh7J3NjZW5lJzonc2lkZWJhcicsJ3N1Y2Nlc3MnOko9PntTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sJ2ZhaWwnOko9Pntjb25zb2xlWydsb2cnXSgnW+i3s+i9rOS+p+i+ueagj+Wksei0pV06PicsSiksUyh7J2NvZGUnOkNvZGVTdGF0dXNbJ0ZBSUwnXSwnbWVzc2FnZSc6J+aTjeS9nOWksei0pScsJ2RhdGEnOm51bGx9KTt9fSk7fSx0aGlzWydvbkZyb21TaWRlYmFyJ109Uz0+e3R0WydvblNob3cnXSgoe3NjZW5lOkosbGF1bmNoX2Zyb206Tyxsb2NhdGlvbjpkfSk9PntKPT0nMDIxMDM2JyYmTz09J2hvbWVwYWdlJyYmZD09J3NpZGViYXJfY2FyZCcmJlMoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSk7fSx0aGlzWydvbktleWJvYXJkQ29tcGxldGUnXT1TPT57Y29uc3QgSj1PPT57Uyh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOk99KSx0dFsnb2ZmS2V5Ym9hcmRDb21wbGV0ZSddKEopO307dHRbJ29uS2V5Ym9hcmRDb21wbGV0ZSddKEopO30sdGhpc1sncmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UnXT0oUyxKKT0+e3R0WydyZXF1ZXN0U3Vic2NyaWJlTWVzc2FnZSddKHsndG1wbElkcyc6Uywnc3VjY2Vzcyc6Tz0+e2xldCBkPU9iamVjdFsna2V5cyddKE8pWydmaWx0ZXInXShrPT5PW2tdPT09J2FjY2VwdCcpO0ooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpkfSk7fSwnZmFpbCc6Tz0+e0ooeydjb2RlJzpDb2RlU3RhdHVzWydGQUlMRUQnXSwnbWVzc2FnZSc6T1snZXJyTXNnJ10sJ2RhdGEnOm51bGx9KTt9fSk7fTt9c3RhdGljWydnZXRJbnMnXSgpe3JldHVybiF0aGlzWydpbnMnXSYmKHRoaXNbJ2lucyddPW5ldyBFeW91Q2xpZW50S3MoKSksdGhpc1snaW5zJ107fX1jbGFzcyBDb2RlU3RhdHVze3N0YXRpYyBbJ1NVQ0NFU1MnXT0weDA7c3RhdGljIFsnRkFJTCddPS0weDE7fWNsYXNzIEFkVHlwZXtzdGF0aWMgWydSRVdBUkRFRF9WSURFT19BRCddPTB4MTtzdGF0aWMgWydCQU5ORVJfQUQnXT0weDI7fWNsYXNzIEFkQWN0aW9uVHlwZXtzdGF0aWMgWydTSE9XJ109MHgxO3N0YXRpYyBbJ0ZJTklTSEVEJ109MHgyO30iXX0=