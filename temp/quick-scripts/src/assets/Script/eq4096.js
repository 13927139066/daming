"use strict";
cc._RF.push(module, '5b4d8xPgKNFmqt5jom0Qwwj', 'eq4096');
// Script/eq4096.js

"use strict";

var eqconf = require('./eqconf.js');
var EQ = {
  peq: null,
  Enable: function Enable() {
    if (this.peq) this.peq.config.enable = true;
  },
  Disable: function Disable() {
    if (this.peq) this.peq.config.enable = false;
  },
  init: function init(config) {
    var _this = this;
    this.config = config;
    this.config.cid = eqconf.EQCID;
    this.config.appid = eqconf.WXAPPID;
    this.config.wxauth = eqconf.EQWXAUTH;
    this.config.version = eqconf.EQVERSION;
    this.config.enable = false;
    this.config.data = {};
    wx.onShow(function (res) {
      _this.onShow(res);
    });
    wx.onHide(function (res) {
      _this.onHide(res);
    });
    wx.onError(function (msg, stack) {
      _this.onError(msg, stack);
    });
    this.config.launcheroption = wx.getLaunchOptionsSync();
    wx.getSystemInfo(function (res) {
      _this.config.sysinfo = res;
    }, function (e) {}, function (f) {});
    wx.onTouchEnd(function (res) {
      _this.touchend(res);
    });
    this.peq = this;
    this.peq.syncdata();
  },
  event: function event(e) {
    this.peq.config.event = e;
    this.peq.syncdata();
    this.peq.config.event = undefined;
  },
  codelogin: function codelogin(res) {
    var _this2 = this;
    console.log("codelogin===》", res);
    this.d(res);
    this.config.code = res.code;
    this.d(this.config);
    wx.request({
      url: this.config.wxlogin,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: function success(d) {
        _this2.d(d);
        console.log("微信登录===》", d.data.data);
        if (d.data.ret == 0) {
          var openid = d.data.data.openid;
          res.openid = openid;
          _this2.showuserinfobutton(res);
        } else {
          res.fail(d.data);
        }
      },
      fail: function fail(data) {
        _this2.d(data);
        res.fail(data);
      }
    });
  },
  wxlogin: function wxlogin(config) {
    var _this3 = this;
    console.log("wxlogin===》", config);
    wx.login({
      success: function success(res) {
        _this3.d(res);
        console.log("微信登录code===》", res);
        if (res.code) {
          config.code = res.code;
          _this3.peq.codelogin(config);
        } else {
          config.fail(res);
        }
      }
    });
  },
  login: function login(config) {
    var _this4 = this;
    console.log("login===》", config);
    wx.checkSession({
      success: function success(res) {
        // 未过期
        config.success(res);
        wx.getStorage({
          key: 'eq4096user.json',
          success: function success(res) {
            if (res.data) {
              _this4.peq.d("read userinfo");
              config.success(res.data);
            } else {
              _this4.peq.wxlogin(config);
            }
          },
          fail: function fail(res) {
            _this4.peq.wxlogin(config);
          }
        });
      },
      fail: function fail() {
        // 过期
        _this4.peq.wxlogin(config);
      }
    });
  },
  showuserinfobutton: function showuserinfobutton(res) {
    var _this5 = this;
    var button = wx.createUserInfoButton(res);
    button.onTap(function (p) {
      _this5.d(p);
      p.openId = res.openid;
      p.userInfo.openId = res.openid;
      _this5.config.userinfo = p;
      wx.setStorage({
        key: 'eq4096user.json',
        data: p,
        success: function success(p2) {
          res.success(p);
          button.destroy();
        },
        fail: function fail(p3) {
          res.fail(p3);
        }
      });
      _this5.syncdata();
    });
  },
  getconfig: function getconfig() {
    return this.peq.config;
  },
  setuserinfo: function setuserinfo(userinfo) {
    if (!this.peq.config.userinfo) {
      this.peq.config.userinfo = userinfo;
      this.peq.syncdata();
    }
  },
  d: function d(s) {
    if (this.config.debug) console.log(s);
  },
  onError: function onError(msg, stack) {
    this.config.error = {
      msg: msg,
      stack: stack
    };
    this.syncdata();
    this.config.error = undefined;
    if (this.config.onError) {
      this.config.onError(msg, stack);
    }
  },
  touchend: function touchend(res) {
    this.touchflag = true;
  },
  syncdata: function syncdata() {
    var _this6 = this;
    this.d(JSON.stringify(this.config));
    wx.request({
      url: this.config.api_url,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: function success(d) {
        _this6.d(d);
        if (d.data.ret == 0) {
          _this6.parseconfig(d.data.data);
        }
      },
      fail: function fail(data) {
        console.log(data);
      }
    });
  },
  touch: function touch(d) {
    var _this7 = this;
    switch (d.type) {
      case "img":
        wx.previewImage({
          urls: [d["shareimage"]]
        });
        break;
      case "wxapp":
        {
          d.success = function () {
            _this7.peq.config.opdata = d;
            _this7.peq.syncdata();
            _this7.peq.config.opdata = undefined;
          };
          wx[d["op"]](d);
        }
        break;
    }
  },
  SyncData: function SyncData() {
    if (this.peq) this.peq.syncdata();
  },
  onShow: function onShow(res) {
    this.config.start_res = res;
    if (this.config.onShow) {
      this.config.onShow(res);
    }
  },
  onHide: function onHide(res) {
    if (this.config.onHide) this.config.onHide(res);
  },
  parseconfig: function parseconfig(data) {
    this.config.data = data;
    if (this.config.parse) {
      this.config.parse(data);
    }
  }
};
module.exports = EQ;

cc._RF.pop();