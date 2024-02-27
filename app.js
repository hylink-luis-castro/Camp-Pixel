var ttd_dom_ready = (function () {
    var t,
      n,
      i = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object",
      },
      l = {
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? l.readyWait++ : l.ready(!0);
        },
        ready: function (e) {
          if ((!0 === e && !--l.readyWait) || (!0 !== e && !l.isReady)) {
            if (!document.body) return setTimeout(l.ready, 1);
            ((l.isReady = !0) !== e && 0 < --l.readyWait) ||
              t.resolveWith(document, [l]);
          }
        },
        bindReady: function () {
          if (!t) {
            if (((t = l._Deferred()), "complete" === document.readyState))
              return setTimeout(l.ready, 1);
            if (document.addEventListener)
              document.addEventListener("DOMContentLoaded", n, !1),
                window.addEventListener("load", l.ready, !1);
            else if (document.attachEvent) {
              document.attachEvent("onreadystatechange", n),
                window.attachEvent("onload", l.ready);
              var e = !1;
              try {
                e = null == window.frameElement;
              } catch (e) {}
              document.documentElement.doScroll && e && o();
            }
          }
        },
        _Deferred: function () {
          var a,
            n,
            d,
            c = [],
            u = {
              done: function () {
                if (!d) {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r = arguments;
                  for (a && ((o = a), (a = 0)), e = 0, t = r.length; e < t; e++)
                    "array" === (i = l.type((n = r[e])))
                      ? u.done.apply(u, n)
                      : "function" === i && c.push(n);
                  o && u.resolveWith(o[0], o[1]);
                }
                return this;
              },
              resolveWith: function (e, t) {
                if (!d && !a && !n) {
                  (t = t || []), (n = 1);
                  try {
                    for (; c[0]; ) c.shift().apply(e, t);
                  } finally {
                    (a = [e, t]), (n = 0);
                  }
                }
                return this;
              },
              resolve: function () {
                return u.resolveWith(this, arguments), this;
              },
              isResolved: function () {
                return !(!n && !a);
              },
              cancel: function () {
                return (d = 1), (c = []), this;
              },
            };
          return u;
        },
        type: function (e) {
          return null == e
            ? String(e)
            : i[Object.prototype.toString.call(e)] || "object";
        },
      };
    function o() {
      if (!l.isReady) {
        try {
          document.documentElement.doScroll("left");
        } catch (e) {
          return void setTimeout(o, 1);
        }
        l.ready();
      }
    }
    return (
      document.addEventListener
        ? (n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), l.ready();
          })
        : document.attachEvent &&
          (n = function () {
            "complete" === document.readyState &&
              (document.detachEvent("onreadystatechange", n), l.ready());
          }),
      function (e) {
        l.bindReady(), l.type(e), t.done(e);
      }
    );
  })();
  
  function TTDUniversalPixelApi(C) {
    debugger
    (this.getVersion = function () {
      return "1.1.0";
    }),
    (this.init = function (e, o, t) {
      if (
          "string" == typeof arguments[3] &&
          ((arguments[3] = null), 4 < arguments.length)
      )
          for (var i = 4; i < arguments.length; i++)
              arguments[i - 1] = arguments[i];
      if (e && "" != e && o && !(o.length <= 0)) {
          var r = document.getElementsByTagName("body")[0];
          if (r) {
              var a = "",
                  d = { MonetaryValue: "v", MonetaryValueFormat: "vf" },
                  c = [];
              if ("undefined" != typeof _pixelParams)
                  for (var i in _pixelParams) {
                      var u = _pixelParams[i],
                          l = d[i];
                      l &&
                          u &&
                          !/%%.*%%/i.test(u) &&
                          c.push(l + "=" + encodeURIComponent(u));
                  }
              var p = "adv=" + e,
                  f = "upid=" + o.join(","),
                  s =
                      C ||
                      (function () {
                          var e = window,
                              t = "",
                              n = !1;
                          try {
                              top.location.href && (t = top.location.href);
                          } catch (e) {
                              n = !0;
                          }
                          if (n)
                              for (;;)
                                  try {
                                      if (((t = e.document.referrer), window.parent == e))
                                          break;
                                      e = window.parent;
                                  } catch (e) {
                                      break;
                                  }
                          -1 < t.indexOf("cloudfront.net") &&
                              (t =
                                  (function (e, t) {
                                      t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                                      t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                                      return null === t
                                          ? ""
                                          : decodeURIComponent(t[1].replace(/\+/g, " "));
                                  })(t, "url") || t);
                          return t;
                      })(),
                  a =
                      t +
                      "?" +
                      p +
                      "&ref=" +
                      encodeURIComponent(s) +
                      "&" +
                      f +
                      "&tmp=" +
                      tmp() +
                      "&rurl=" +
                      rUrl() +
                      "&sid=" +
                      sid() +
                      "&inf=" +
                      new OpenProfileId().getId() +
                      "&upv=" +
                      this.getVersion();
              0 < c.length && (a = a + "&" + c.join("&"));
              var g = null,
                  v = !1,
                  y = null,
                  _ =
                      ("function" == typeof __tcfapi
                          ? ((b = setTimeout(x, 1e3)), __tcfapi("addEventListener", 2, A))
                          : "function" == typeof __cmp
                          ? ((g = setTimeout(D, 1e3)), __cmp("ping", null, L))
                          : "function" == typeof __gpp
                          ? void 0 !== (p = w()).gppString
                              ? I(p.gppString, p.gppSid)
                              : ((_ = setTimeout(S, 1e3)), __gpp("addEventListener", j))
                          : T(),
                      null),
                  h = !1,
                  b = null,
                  E = !1;
          }
      }
      function w() {
          var e,
              t = __gpp("getGPPData"),
              t = {
                  gppString: t?.gppString,
                  gppSid: t?.applicableSections?.join(","),
              };
          return (
              void 0 === t.gppString &&
              ((e = __gpp("ping")),
                  (t.gppString = e?.gppString),
                  (t.gppSid = e?.applicableSections?.join(","))),
              t
          );
      }
      function S() {
          (h = !0), T();
      }
      function j(e, t) {
          var n;
          h
              ? __gpp("removeEventListener", function () {}, e.listenerId)
              : "signalStatus" === e.eventName &&
              "ready" === e.data &&
              ((n = w()),
                  clearTimeout(_),
                  (y = new Date()),
                  I(n.gppString, n.gppSid),
                  __gpp("removeEventListener", function () {}, e.listenerId));
      }
      function D() {
          (v = !0), T();
      }
      function L(e) {
          v ||
              (e.cmpLoaded || e.gdprAppliesGlobally
                  ? (clearTimeout(g),
                      (y = new Date()),
                      __cmp("getConsentData", null, T))
                  : setTimeout(function () {
                      __cmp("ping", null, L);
                  }, 200));
      }
      function T(e) {
          null != y && (a = a + "&ret=" + (new Date() - y)),
              v && (a += "&pto=1"),
              null != e &&
              (a =
                  a +
                  "&gdpr=" +
                  (e.gdprApplies ? "1" : "0") +
                  "&gdpr_consent=" +
                  e.consentData),
              R();
      }
      function R() {
          for (
              var e = "universal_pixel_" + o.join("_"),
                  t = document.getElementById(e);
              t && t.parentElement.removeChild(t), (t = document.getElementById(e));
  
          );
          var n = document.createElement("iframe");
          function i() {
              r.appendChild(n);
          }
          n.setAttribute("id", e),
              n.setAttribute("height", 0),
              n.setAttribute("width", 0),
              n.setAttribute("style", "display:none;"),
              n.setAttribute("src", a),
              n.setAttribute("title", "TTD Universal Pixel"),
              "complete" === document.readyState
                  ? setTimeout(i, 0)
                  : window.addEventListener
                      ? window.addEventListener("load", i)
                      : window.attachEvent
                          ? window.attachEvent("onload", i)
                          : i();
      }
      function x() {
          (E = !0), T();
      }
      function A(e, t) {
          E
              ? __tcfapi("removeEventListener", 2, function (e) {}, e.listenerId)
              : t &&
              (clearTimeout(b),
                  (t = e),
                  null != y && (a = a + "&ret=" + (new Date() - y)),
                  E && (a += "&pto=1"),
                  null != t &&
                  (a =
                      a +
                      "&gdpr=" +
                      (function (e) {
                          return e ? "1" : "0";
                      })(t.gdprApplies) +
                      "&gdpr_consent=" +
                      t.tcString),
                  R(),
                  (y = new Date()),
                  __tcfapi("removeEventListener", 2, function (e) {}, e.listenerId));
      }
      function rUrl(){return document.referrer||window.frames.top&&window.frames.top.document.referrer||"";}

      function tmp() {
        var d = new Date(),
            p = n => (n < 10 ? '0' : '') + n;
        return [d.getFullYear(), p(d.getMonth() + 1), p(d.getDate())].join('-') + '-' +
               [p(d.getHours()), p(d.getMinutes()), p(d.getSeconds())].join(':');
      }
      
      function p(number) {
        return number < 10 ? '0' + number : number;
      }
    
      function sidt(){
        const e=new Date,
              t=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),
              n=`${t}-${Math.random().toString(36).substr(2,9)}`,
              o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59);
        document.cookie=`uniqueID=${n}; expires=${o}; path=/`;
        return n
      }
      function sid(){
        for(const e of document.cookie.split(";")){
            const[t,n]=e.trim().split("=");
            if("uniqueID"===t)return n
        }
        return sidt()
      }

        function I(e, t) {
          null != y && (a = a + "&ret=" + (new Date() - y)),
            null != e && (a = a + "&gpp_consent=" + e),
            null != t && (a = a + "&gpp_sid=" + t),
            R();
        }
      });
  }

  function OpenProfileId() {
    function h() {
        var r = !1,
            n = "",
            t = null,
            i = "",
            u = "";
        try {
            i = "AcroPDF.PDF";
            t = new ActiveXObject(i);
        } catch (f) {}
        if (!t)
            try {
                i = "PDF.PdfCtrl";
                t = new ActiveXObject(i);
            } catch (f) {}
        if (t)
            try {
                r = !0;
                u = i;
                n = t.GetVersions().split(",");
                n = n[0].split("=");
                n = parseFloat(n[1]);
            } catch (f) {}
        return { isInstalled: r, version: n, name: u };
    }
    function c() {
        var r = !1,
            n = "",
            t = null,
            i = "",
            u = "";
        try {
            i = "ShockwaveFlash.ShockwaveFlash";
            t = new ActiveXObject(i);
        } catch (f) {}
        if (t)
            try {
                r = !0;
                u = i;
                n = t.GetVariable("$version").substring(4);
                n = n.split(",");
                n = parseFloat(n[0] + "." + n[1]);
            } catch (f) {}
        return { isInstalled: r, version: n, name: u };
    }
    function l() {
        var n = !1,
            t = "";
        try {
            n = navigator.javaEnabled();
            t = n ? "Java" : "";
        } catch (i) {}
        return { isInstalled: n, version: "", name: t };
    }
    function a() {
        var r = !1,
            n = "",
            t = null,
            i = "",
            u = "";
        try {
            i = "QuickTime.QuickTime";
            t = new ActiveXObject(i);
        } catch (f) {}
        if (t)
            try {
                r = !0;
                u = i;
                n = t.QuickTimeVersion.toString(16);
                n = n.substring(0, 1) + "." + n.substring(1, 3);
                n = parseFloat(n);
            } catch (f) {}
        return { isInstalled: r, version: n, name: u };
    }
    function v() {
        for (
            var u = !1,
                n = "",
                r = ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
                t = null,
                f = "",
                e = "",
                i = 0;
            i < r.length;
            i++
        ) {
            try {
                t = new ActiveXObject(r[i]);
            } catch (o) {
                continue;
            }
            if (t) {
                f = r[i];
                break;
            }
        }
        if (t)
            try {
                u = !0;
                e = f;
                n = t.GetVersionInfo();
                n = parseFloat(n);
            } catch (o) {}
        return { isInstalled: u, version: n, name: e };
    }
    function y() {
        var r = !1,
            n = "",
            t = null,
            i = "",
            u = "";
        try {
            i = "SWCtl.SWCtl";
            t = new ActiveXObject(i);
        } catch (f) {}
        if (t)
            try {
                r = !0;
                u = i;
                n = t.ShockwaveVersion("").split("r");
                n = parseFloat(n[0]);
            } catch (f) {}
        return { isInstalled: r, version: n, name: u };
    }
    function p() {
        var i = !1,
            r = "",
            n = null,
            t = "",
            u = "";
        try {
            t = "WMPlayer.OCX";
            n = new ActiveXObject(t);
        } catch (f) {}
        if (n)
            try {
                i = !0;
                u = t;
                r = parseFloat(n.versionInfo);
            } catch (f) {}
        return { isInstalled: i, version: r, name: u };
    }
    function w() {
        var n = "|",
            r = "",
            u = {},
            f = [],
            t,
            e,
            i;
        try {
            if (window.navigator.plugins && window.navigator.plugins.length) {
                for (t = 0, e = window.navigator.plugins.length; t < e; t++) (i = window.navigator.plugins[t].name || ""), u.hasOwnProperty(i) || ((u[i] = ""), f.push(i));
                r = f.join(n);
            } else window.ActiveXObject && (r = h().name + n + c().name + n + l().name + n + a().name + n + v().name + n + y().name + n + p().name);
        } catch (o) {}
        return r;
    }
    function b() {
        var t = new Date(),
            n = t.getTimezoneOffset() / -60;
        return (n = (n > 0 ? "+" : "") + n), "GMT" + n;
    }

    this.getId = function () {
      debugger
        var n = "";
        try {
            var t = window.navigator.userAgent,
                i = w(),
                r = b(),
                u = window.screen.width,
                f = window.screen.height,
                e = window.screen.pixelDepth,
                s = window.navigator.language,
                p = Intl.DateTimeFormat().resolvedOptions().timeZone
                o = t + i + r + u + f + e + s;
            n = o;
        } catch (s) {}
        return n;
    };
    this.getVersion = function () {
        return "1.1";
    };
    this.getSite = function () {
        return window.location.host + window.location.pathname;
    };
}