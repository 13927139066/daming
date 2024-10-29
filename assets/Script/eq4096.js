
var eqconf = require('./eqconf.js');

var EQ = {
    peq : null,
    Enable() {
    if (this.peq) this.peq.config.enable = true;
  },
   Disable() {
    if (this.peq)this.peq.config.enable = false;
  },
  init(config) {
    this.config = config;
    this.config.cid = eqconf.EQCID;
    this.config.appid = eqconf.WXAPPID;
    this.config.wxauth = eqconf.EQWXAUTH;
    this.config.version = eqconf.EQVERSION;
    this.config.enable = false;
    this.config.data = {};
    wx.onShow((res) => { this.onShow(res); });
    wx.onHide((res) => { this.onHide(res); });
    wx.onError((msg, stack) => { this.onError(msg, stack); });
    this.config.launcheroption = wx.getLaunchOptionsSync();
    wx.getSystemInfo((res) => {
      this.config.sysinfo = res;
    }, (e) => { }, (f) => { });
    wx.onTouchEnd((res) => {
      this.touchend(res);
    });
    this.peq = this;
    this.peq.syncdata();

  },
  event(e) {
    this.peq.config.event = e;
    this.peq.syncdata();
    this.peq.config.event = undefined;
  },
  codelogin(res) {
    console.log("codelogin===》", res)
    this.d(res);
    this.config.code = res.code;
    this.d(this.config);
    wx.request({
      url: this.config.wxlogin,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: (d) => {
        this.d(d);
        console.log("微信登录===》", d.data.data)
        if (d.data.ret == 0) {
          var openid = d.data.data.openid;
          res.openid = openid;
          this.showuserinfobutton(res);
        } else {
          res.fail(d.data);
        }
      },
      fail: (data) => {
        this.d(data);
        res.fail(data);
      }
    });
  },



  wxlogin(config) {
    console.log("wxlogin===》", config)
    wx.login({
      success: (res) => {
        this.d(res);
        console.log("微信登录code===》", res)
        if (res.code) {
          config.code = res.code;
          this.peq.codelogin(config);
        } else {
          config.fail(res);
        }
      }
    });
  },

  login(config) {
    console.log("login===》", config)
    wx.checkSession({
      success:(res)=>{
        // 未过期
        config.success(res);
        wx.getStorage({
          key:'eq4096user.json', 
          success: (res)=> {
            if(res.data) {
              this.peq.d("read userinfo");
              config.success(res.data);
            } else {
              this.peq.wxlogin(config);
            }
          },
          fail:(res)=>{
            this.peq.wxlogin(config);
          }
        });
      },
      fail:()=>{
        // 过期
        this.peq.wxlogin(config);
      }
    });
  },
  showuserinfobutton(res) {
    let button = wx.createUserInfoButton(res);
    button.onTap((p) => {
      this.d(p);
      p.openId = res.openid;
      p.userInfo.openId = res.openid;
      this.config.userinfo = p;
      wx.setStorage({
        key: 'eq4096user.json',
        data: p,
        success: (p2)=> {
          res.success(p);
          button.destroy();
        },
        fail: (p3)=> {
          res.fail(p3);
        }
      });
      this.syncdata();
    });
  },

  getconfig() {
    return this.peq.config;
  },
  setuserinfo(userinfo) {
    if (!this.peq.config.userinfo) {
      this.peq.config.userinfo = userinfo;
      this.peq.syncdata();
    }
  },
  d(s) {
    if (this.config.debug) console.log(s);
  },


  onError(msg, stack) {
    this.config.error = { msg, stack };
    this.syncdata();
    this.config.error = undefined;
    if (this.config.onError) {
      this.config.onError(msg, stack);
    }
  },
  touchend(res) {
    this.touchflag = true;
  },
  syncdata() {
    this.d(JSON.stringify(this.config));
    wx.request({
      url: this.config.api_url,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: (d) => {
        this.d(d);
        if (d.data.ret == 0) {
          this.parseconfig(d.data.data);
        }
      },
      fail: (data) => {
        console.log(data);
      }
    });
  },

  touch(d) {
    switch (d.type) {
      case "img":
        wx.previewImage({ urls: [d["shareimage"]] });
        break;
      case "wxapp": {
        d.success = () => {
          this.peq.config.opdata = d;
          this.peq.syncdata();
          this.peq.config.opdata = undefined;
        };
        wx[d["op"]](d);
      }
        break;
    }
  },
  SyncData()
  {
    if(this.peq) this.peq.syncdata();
  },
  onShow(res) {
    this.config.start_res = res;
    if (this.config.onShow) {
      this.config.onShow(res);
    }
  },

  onHide(res) {
    if (this.config.onHide)
      this.config.onHide(res);
  },

  parseconfig(data) {
      this.config.data = data;
      if(this.config.parse) {
        this.config.parse(data);
      }

  }
};
module.exports = EQ;
