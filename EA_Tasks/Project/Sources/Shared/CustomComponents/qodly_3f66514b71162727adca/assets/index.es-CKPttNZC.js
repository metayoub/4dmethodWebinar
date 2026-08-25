import { _ as __mf_1, a as __mf_2, b as __mf_0 } from './qodly_3f66514b71162727adca__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CEn9rQZz.js';
import { k as __mf_22, b as __mf_20, R, c as __mf_17, o as __mf_13, _ as __mf_26, g as __mf_0$1, e as __mf_25, d as __mf_16, a as __mf_23, f as __mf_18, h as __mf_9, p as __mf_21, j as __mf_10, m as __mf_8, q as __mf_6, r as __mf_24, i as __mf_4, s as __moduleExports, n as __mf_14, l as le$1 } from './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js-xqf2XqU7.js';
import { O as Oi$1, _ as __mf_1$1, a as __mf_3 } from './qodly_3f66514b71162727adca__loadShare__react_mf_2_dom__loadShare__.js-DzY4qdT3.js';
import { k as keyframes, w as withEmotionCache, T as ThemeContext } from './emotion-react.browser.esm-r2vS8aIH.js';

var define_process_env_default = {};
var NR = Object.defineProperty;
var Qv = (e6) => {
  throw TypeError(e6);
};
var MR = (e6, t, r) => t in e6 ? NR(e6, t, { enumerable: true, configurable: true, writable: true, value: r }) : e6[t] = r;
var Te = (e6, t, r) => MR(e6, typeof t != "symbol" ? t + "" : t, r), Vd = (e6, t, r) => t.has(e6) || Qv("Cannot " + r);
var le = (e6, t, r) => (Vd(e6, t, "read from private field"), r ? r.call(e6) : t.get(e6)), Yt = (e6, t, r) => t.has(e6) ? Qv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e6) : t.set(e6, r), rt = (e6, t, r, n) => (Vd(e6, t, "write to private field"), t.set(e6, r), r), _e = (e6, t, r) => (Vd(e6, t, "access private method"), r);
const WR = ({
  children: e6,
  container: t = document.body
}) => __mf_1$1(e6, t);
var em = function(t) {
  return t.reduce(function(r, n) {
    var i = n[0], o = n[1];
    return r[i] = o, r;
  }, {});
}, tm = typeof window < "u" && window.document && window.document.createElement ? __mf_22 : __mf_20, mr = "top", Qr = "bottom", en = "right", br = "left", Mp = "auto", Da = [mr, Qr, en, br], Go = "start", _a = "end", VR = "clippingParents", Vy = "viewport", Rs = "popper", UR = "reference", rm = /* @__PURE__ */ Da.reduce(function(e6, t) {
  return e6.concat([t + "-" + Go, t + "-" + _a]);
}, []), Uy = /* @__PURE__ */ [].concat(Da, [Mp]).reduce(function(e6, t) {
  return e6.concat([t, t + "-" + Go, t + "-" + _a]);
}, []), qR = "beforeRead", GR = "read", ZR = "afterRead", KR = "beforeMain", YR = "main", XR = "afterMain", JR = "beforeWrite", QR = "write", eC = "afterWrite", tC = [qR, GR, ZR, KR, YR, XR, JR, QR, eC];
function zn(e6) {
  return e6 ? (e6.nodeName || "").toLowerCase() : null;
}
function Dr(e6) {
  if (e6 == null)
    return window;
  if (e6.toString() !== "[object Window]") {
    var t = e6.ownerDocument;
    return t && t.defaultView || window;
  }
  return e6;
}
function no(e6) {
  var t = Dr(e6).Element;
  return e6 instanceof t || e6 instanceof Element;
}
function Jr(e6) {
  var t = Dr(e6).HTMLElement;
  return e6 instanceof t || e6 instanceof HTMLElement;
}
function Dp(e6) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Dr(e6).ShadowRoot;
  return e6 instanceof t || e6 instanceof ShadowRoot;
}
function rC(e6) {
  var t = e6.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, o = t.elements[r];
    !Jr(o) || !zn(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(l) {
      var c = i[l];
      c === false ? o.removeAttribute(l) : o.setAttribute(l, c === true ? "" : c);
    }));
  });
}
function nC(e6) {
  var t = e6.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], o = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = l.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !Jr(i) || !zn(i) || (Object.assign(i.style, c), Object.keys(o).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const iC = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: rC,
  effect: nC,
  requires: ["computeStyles"]
};
function Nn(e6) {
  return e6.split("-")[0];
}
var eo = Math.max, Hc = Math.min, Zo = Math.round;
function Yf() {
  var e6 = navigator.userAgentData;
  return e6 != null && e6.brands && Array.isArray(e6.brands) ? e6.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qy() {
  return !/^((?!chrome|android).)*safari/i.test(Yf());
}
function Ko(e6, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e6.getBoundingClientRect(), i = 1, o = 1;
  t && Jr(e6) && (i = e6.offsetWidth > 0 && Zo(n.width) / e6.offsetWidth || 1, o = e6.offsetHeight > 0 && Zo(n.height) / e6.offsetHeight || 1);
  var l = no(e6) ? Dr(e6) : window, c = l.visualViewport, u = !qy() && r, d = (n.left + (u && c ? c.offsetLeft : 0)) / i, g = (n.top + (u && c ? c.offsetTop : 0)) / o, f = n.width / i, h = n.height / o;
  return {
    width: f,
    height: h,
    top: g,
    right: d + f,
    bottom: g + h,
    left: d,
    x: d,
    y: g
  };
}
function zp(e6) {
  var t = Ko(e6), r = e6.offsetWidth, n = e6.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e6.offsetLeft,
    y: e6.offsetTop,
    width: r,
    height: n
  };
}
function Gy(e6, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e6.contains(t))
    return true;
  if (r && Dp(r)) {
    var n = t;
    do {
      if (n && e6.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function ii(e6) {
  return Dr(e6).getComputedStyle(e6);
}
function oC(e6) {
  return ["table", "td", "th"].indexOf(zn(e6)) >= 0;
}
function Ci(e6) {
  return ((no(e6) ? e6.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e6.document
  )) || window.document).documentElement;
}
function lu(e6) {
  return zn(e6) === "html" ? e6 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e6.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e6.parentNode || // DOM Element detected
    (Dp(e6) ? e6.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ci(e6)
  );
}
function nm(e6) {
  return !Jr(e6) || // https://github.com/popperjs/popper-core/issues/837
  ii(e6).position === "fixed" ? null : e6.offsetParent;
}
function sC(e6) {
  var t = /firefox/i.test(Yf()), r = /Trident/i.test(Yf());
  if (r && Jr(e6)) {
    var n = ii(e6);
    if (n.position === "fixed")
      return null;
  }
  var i = lu(e6);
  for (Dp(i) && (i = i.host); Jr(i) && ["html", "body"].indexOf(zn(i)) < 0; ) {
    var o = ii(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function za(e6) {
  for (var t = Dr(e6), r = nm(e6); r && oC(r) && ii(r).position === "static"; )
    r = nm(r);
  return r && (zn(r) === "html" || zn(r) === "body" && ii(r).position === "static") ? t : r || sC(e6) || t;
}
function Lp(e6) {
  return ["top", "bottom"].indexOf(e6) >= 0 ? "x" : "y";
}
function ga(e6, t, r) {
  return eo(e6, Hc(t, r));
}
function aC(e6, t, r) {
  var n = ga(e6, t, r);
  return n > r ? r : n;
}
function Zy() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ky(e6) {
  return Object.assign({}, Zy(), e6);
}
function Yy(e6, t) {
  return t.reduce(function(r, n) {
    return r[n] = e6, r;
  }, {});
}
var lC = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ky(typeof t != "number" ? t : Yy(t, Da));
};
function cC(e6) {
  var t, r = e6.state, n = e6.name, i = e6.options, o = r.elements.arrow, l = r.modifiersData.popperOffsets, c = Nn(r.placement), u = Lp(c), d = [br, en].indexOf(c) >= 0, g = d ? "height" : "width";
  if (!(!o || !l)) {
    var f = lC(i.padding, r), h = zp(o), b = u === "y" ? mr : br, x = u === "y" ? Qr : en, v = r.rects.reference[g] + r.rects.reference[u] - l[u] - r.rects.popper[g], w = l[u] - r.rects.reference[u], m = za(o), y = m ? u === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, S = v / 2 - w / 2, O = f[b], E = y - h[g] - f[x], A = y / 2 - h[g] / 2 + S, $ = ga(O, A, E), T = u;
    r.modifiersData[n] = (t = {}, t[T] = $, t.centerOffset = $ - A, t);
  }
}
function uC(e6) {
  var t = e6.state, r = e6.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Gy(t.elements.popper, i) && (t.elements.arrow = i));
}
const dC = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: cC,
  effect: uC,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yo(e6) {
  return e6.split("-")[1];
}
var fC = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function pC(e6, t) {
  var r = e6.x, n = e6.y, i = t.devicePixelRatio || 1;
  return {
    x: Zo(r * i) / i || 0,
    y: Zo(n * i) / i || 0
  };
}
function im(e6) {
  var t, r = e6.popper, n = e6.popperRect, i = e6.placement, o = e6.variation, l = e6.offsets, c = e6.position, u = e6.gpuAcceleration, d = e6.adaptive, g = e6.roundOffsets, f = e6.isFixed, h = l.x, b = h === void 0 ? 0 : h, x = l.y, v = x === void 0 ? 0 : x, w = typeof g == "function" ? g({
    x: b,
    y: v
  }) : {
    x: b,
    y: v
  };
  b = w.x, v = w.y;
  var m = l.hasOwnProperty("x"), y = l.hasOwnProperty("y"), S = br, O = mr, E = window;
  if (d) {
    var A = za(r), $ = "clientHeight", T = "clientWidth";
    if (A === Dr(r) && (A = Ci(r), ii(A).position !== "static" && c === "absolute" && ($ = "scrollHeight", T = "scrollWidth")), A = A, i === mr || (i === br || i === en) && o === _a) {
      O = Qr;
      var D = f && A === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        A[$]
      );
      v -= D - n.height, v *= u ? 1 : -1;
    }
    if (i === br || (i === mr || i === Qr) && o === _a) {
      S = en;
      var j = f && A === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        A[T]
      );
      b -= j - n.width, b *= u ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: c
  }, d && fC), M = g === true ? pC({
    x: b,
    y: v
  }, Dr(r)) : {
    x: b,
    y: v
  };
  if (b = M.x, v = M.y, u) {
    var W;
    return Object.assign({}, z, (W = {}, W[O] = y ? "0" : "", W[S] = m ? "0" : "", W.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + v + "px)" : "translate3d(" + b + "px, " + v + "px, 0)", W));
  }
  return Object.assign({}, z, (t = {}, t[O] = y ? v + "px" : "", t[S] = m ? b + "px" : "", t.transform = "", t));
}
function hC(e6) {
  var t = e6.state, r = e6.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, o = r.adaptive, l = o === void 0 ? true : o, c = r.roundOffsets, u = c === void 0 ? true : c, d = {
    placement: Nn(t.placement),
    variation: Yo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, im(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, im(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const gC = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: hC,
  data: {}
};
var Hl = {
  passive: true
};
function vC(e6) {
  var t = e6.state, r = e6.instance, n = e6.options, i = n.scroll, o = i === void 0 ? true : i, l = n.resize, c = l === void 0 ? true : l, u = Dr(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && d.forEach(function(g) {
    g.addEventListener("scroll", r.update, Hl);
  }), c && u.addEventListener("resize", r.update, Hl), function() {
    o && d.forEach(function(g) {
      g.removeEventListener("scroll", r.update, Hl);
    }), c && u.removeEventListener("resize", r.update, Hl);
  };
}
const mC = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: vC,
  data: {}
};
var bC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Sc(e6) {
  return e6.replace(/left|right|bottom|top/g, function(t) {
    return bC[t];
  });
}
var yC = {
  start: "end",
  end: "start"
};
function om(e6) {
  return e6.replace(/start|end/g, function(t) {
    return yC[t];
  });
}
function $p(e6) {
  var t = Dr(e6), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Fp(e6) {
  return Ko(Ci(e6)).left + $p(e6).scrollLeft;
}
function wC(e6, t) {
  var r = Dr(e6), n = Ci(e6), i = r.visualViewport, o = n.clientWidth, l = n.clientHeight, c = 0, u = 0;
  if (i) {
    o = i.width, l = i.height;
    var d = qy();
    (d || !d && t === "fixed") && (c = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: c + Fp(e6),
    y: u
  };
}
function xC(e6) {
  var t, r = Ci(e6), n = $p(e6), i = (t = e6.ownerDocument) == null ? void 0 : t.body, o = eo(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = eo(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -n.scrollLeft + Fp(e6), u = -n.scrollTop;
  return ii(i || r).direction === "rtl" && (c += eo(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: c,
    y: u
  };
}
function Hp(e6) {
  var t = ii(e6), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Xy(e6) {
  return ["html", "body", "#document"].indexOf(zn(e6)) >= 0 ? e6.ownerDocument.body : Jr(e6) && Hp(e6) ? e6 : Xy(lu(e6));
}
function va(e6, t) {
  var r;
  t === void 0 && (t = []);
  var n = Xy(e6), i = n === ((r = e6.ownerDocument) == null ? void 0 : r.body), o = Dr(n), l = i ? [o].concat(o.visualViewport || [], Hp(n) ? n : []) : n, c = t.concat(l);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(va(lu(l)))
  );
}
function Xf(e6) {
  return Object.assign({}, e6, {
    left: e6.x,
    top: e6.y,
    right: e6.x + e6.width,
    bottom: e6.y + e6.height
  });
}
function SC(e6, t) {
  var r = Ko(e6, false, t === "fixed");
  return r.top = r.top + e6.clientTop, r.left = r.left + e6.clientLeft, r.bottom = r.top + e6.clientHeight, r.right = r.left + e6.clientWidth, r.width = e6.clientWidth, r.height = e6.clientHeight, r.x = r.left, r.y = r.top, r;
}
function sm(e6, t, r) {
  return t === Vy ? Xf(wC(e6, r)) : no(t) ? SC(t, r) : Xf(xC(Ci(e6)));
}
function _C(e6) {
  var t = va(lu(e6)), r = ["absolute", "fixed"].indexOf(ii(e6).position) >= 0, n = r && Jr(e6) ? za(e6) : e6;
  return no(n) ? t.filter(function(i) {
    return no(i) && Gy(i, n) && zn(i) !== "body";
  }) : [];
}
function EC(e6, t, r, n) {
  var i = t === "clippingParents" ? _C(e6) : [].concat(t), o = [].concat(i, [r]), l = o[0], c = o.reduce(function(u, d) {
    var g = sm(e6, d, n);
    return u.top = eo(g.top, u.top), u.right = Hc(g.right, u.right), u.bottom = Hc(g.bottom, u.bottom), u.left = eo(g.left, u.left), u;
  }, sm(e6, l, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Jy(e6) {
  var t = e6.reference, r = e6.element, n = e6.placement, i = n ? Nn(n) : null, o = n ? Yo(n) : null, l = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, u;
  switch (i) {
    case mr:
      u = {
        x: l,
        y: t.y - r.height
      };
      break;
    case Qr:
      u = {
        x: l,
        y: t.y + t.height
      };
      break;
    case en:
      u = {
        x: t.x + t.width,
        y: c
      };
      break;
    case br:
      u = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var d = i ? Lp(i) : null;
  if (d != null) {
    var g = d === "y" ? "height" : "width";
    switch (o) {
      case Go:
        u[d] = u[d] - (t[g] / 2 - r[g] / 2);
        break;
      case _a:
        u[d] = u[d] + (t[g] / 2 - r[g] / 2);
        break;
    }
  }
  return u;
}
function Ea(e6, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e6.placement : n, o = r.strategy, l = o === void 0 ? e6.strategy : o, c = r.boundary, u = c === void 0 ? VR : c, d = r.rootBoundary, g = d === void 0 ? Vy : d, f = r.elementContext, h = f === void 0 ? Rs : f, b = r.altBoundary, x = b === void 0 ? false : b, v = r.padding, w = v === void 0 ? 0 : v, m = Ky(typeof w != "number" ? w : Yy(w, Da)), y = h === Rs ? UR : Rs, S = e6.rects.popper, O = e6.elements[x ? y : h], E = EC(no(O) ? O : O.contextElement || Ci(e6.elements.popper), u, g, l), A = Ko(e6.elements.reference), $ = Jy({
    reference: A,
    element: S,
    placement: i
  }), T = Xf(Object.assign({}, S, $)), D = h === Rs ? T : A, j = {
    top: E.top - D.top + m.top,
    bottom: D.bottom - E.bottom + m.bottom,
    left: E.left - D.left + m.left,
    right: D.right - E.right + m.right
  }, z = e6.modifiersData.offset;
  if (h === Rs && z) {
    var M = z[i];
    Object.keys(j).forEach(function(W) {
      var V = [en, Qr].indexOf(W) >= 0 ? 1 : -1, P = [mr, Qr].indexOf(W) >= 0 ? "y" : "x";
      j[W] += M[P] * V;
    });
  }
  return j;
}
function OC(e6, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, o = r.rootBoundary, l = r.padding, c = r.flipVariations, u = r.allowedAutoPlacements, d = u === void 0 ? Uy : u, g = Yo(n), f = g ? c ? rm : rm.filter(function(x) {
    return Yo(x) === g;
  }) : Da, h = f.filter(function(x) {
    return d.indexOf(x) >= 0;
  });
  h.length === 0 && (h = f);
  var b = h.reduce(function(x, v) {
    return x[v] = Ea(e6, {
      placement: v,
      boundary: i,
      rootBoundary: o,
      padding: l
    })[Nn(v)], x;
  }, {});
  return Object.keys(b).sort(function(x, v) {
    return b[x] - b[v];
  });
}
function kC(e6) {
  if (Nn(e6) === Mp)
    return [];
  var t = Sc(e6);
  return [om(e6), t, om(t)];
}
function AC(e6) {
  var t = e6.state, r = e6.options, n = e6.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? true : i, l = r.altAxis, c = l === void 0 ? true : l, u = r.fallbackPlacements, d = r.padding, g = r.boundary, f = r.rootBoundary, h = r.altBoundary, b = r.flipVariations, x = b === void 0 ? true : b, v = r.allowedAutoPlacements, w = t.options.placement, m = Nn(w), y = m === w, S = u || (y || !x ? [Sc(w)] : kC(w)), O = [w].concat(S).reduce(function(Y, ie) {
      return Y.concat(Nn(ie) === Mp ? OC(t, {
        placement: ie,
        boundary: g,
        rootBoundary: f,
        padding: d,
        flipVariations: x,
        allowedAutoPlacements: v
      }) : ie);
    }, []), E = t.rects.reference, A = t.rects.popper, $ = /* @__PURE__ */ new Map(), T = true, D = O[0], j = 0; j < O.length; j++) {
      var z = O[j], M = Nn(z), W = Yo(z) === Go, V = [mr, Qr].indexOf(M) >= 0, P = V ? "width" : "height", K = Ea(t, {
        placement: z,
        boundary: g,
        rootBoundary: f,
        altBoundary: h,
        padding: d
      }), X = V ? W ? en : br : W ? Qr : mr;
      E[P] > A[P] && (X = Sc(X));
      var ne = Sc(X), he = [];
      if (o && he.push(K[M] <= 0), c && he.push(K[X] <= 0, K[ne] <= 0), he.every(function(Y) {
        return Y;
      })) {
        D = z, T = false;
        break;
      }
      $.set(z, he);
    }
    if (T)
      for (var N = x ? 3 : 1, F = function(ie) {
        var Q = O.find(function(ae) {
          var de = $.get(ae);
          if (de)
            return de.slice(0, ie).every(function(ee) {
              return ee;
            });
        });
        if (Q)
          return D = Q, "break";
      }, G = N; G > 0; G--) {
        var te = F(G);
        if (te === "break") break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = true, t.placement = D, t.reset = true);
  }
}
const TC = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: AC,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function am(e6, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e6.top - t.height - r.y,
    right: e6.right - t.width + r.x,
    bottom: e6.bottom - t.height + r.y,
    left: e6.left - t.width - r.x
  };
}
function lm(e6) {
  return [mr, en, Qr, br].some(function(t) {
    return e6[t] >= 0;
  });
}
function RC(e6) {
  var t = e6.state, r = e6.name, n = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, l = Ea(t, {
    elementContext: "reference"
  }), c = Ea(t, {
    altBoundary: true
  }), u = am(l, n), d = am(c, i, o), g = lm(u), f = lm(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: d,
    isReferenceHidden: g,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": g,
    "data-popper-escaped": f
  });
}
const CC = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: RC
};
function IC(e6, t, r) {
  var n = Nn(e6), i = [br, mr].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e6
  })) : r, l = o[0], c = o[1];
  return l = l || 0, c = (c || 0) * i, [br, en].indexOf(n) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function PC(e6) {
  var t = e6.state, r = e6.options, n = e6.name, i = r.offset, o = i === void 0 ? [0, 0] : i, l = Uy.reduce(function(g, f) {
    return g[f] = IC(f, t.rects, o), g;
  }, {}), c = l[t.placement], u = c.x, d = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = l;
}
const NC = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: PC
};
function MC(e6) {
  var t = e6.state, r = e6.name;
  t.modifiersData[r] = Jy({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const DC = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: MC,
  data: {}
};
function zC(e6) {
  return e6 === "x" ? "y" : "x";
}
function LC(e6) {
  var t = e6.state, r = e6.options, n = e6.name, i = r.mainAxis, o = i === void 0 ? true : i, l = r.altAxis, c = l === void 0 ? false : l, u = r.boundary, d = r.rootBoundary, g = r.altBoundary, f = r.padding, h = r.tether, b = h === void 0 ? true : h, x = r.tetherOffset, v = x === void 0 ? 0 : x, w = Ea(t, {
    boundary: u,
    rootBoundary: d,
    padding: f,
    altBoundary: g
  }), m = Nn(t.placement), y = Yo(t.placement), S = !y, O = Lp(m), E = zC(O), A = t.modifiersData.popperOffsets, $ = t.rects.reference, T = t.rects.popper, D = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, j = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (A) {
    if (o) {
      var W, V = O === "y" ? mr : br, P = O === "y" ? Qr : en, K = O === "y" ? "height" : "width", X = A[O], ne = X + w[V], he = X - w[P], N = b ? -T[K] / 2 : 0, F = y === Go ? $[K] : T[K], G = y === Go ? -T[K] : -$[K], te = t.elements.arrow, Y = b && te ? zp(te) : {
        width: 0,
        height: 0
      }, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zy(), Q = ie[V], ae = ie[P], de = ga(0, $[K], Y[K]), ee = S ? $[K] / 2 - N - de - Q - j.mainAxis : F - de - Q - j.mainAxis, fe = S ? -$[K] / 2 + N + de + ae + j.mainAxis : G + de + ae + j.mainAxis, Se = t.elements.arrow && za(t.elements.arrow), Z = Se ? O === "y" ? Se.clientTop || 0 : Se.clientLeft || 0 : 0, Me = (W = z == null ? void 0 : z[O]) != null ? W : 0, ge = X + ee - Me - Z, ct = X + fe - Me, bt = ga(b ? Hc(ne, ge) : ne, X, b ? eo(he, ct) : he);
      A[O] = bt, M[O] = bt - X;
    }
    if (c) {
      var Wt, Mt = O === "x" ? mr : br, Lt = O === "x" ? Qr : en, ut = A[E], dt = E === "y" ? "height" : "width", qe = ut + w[Mt], Fr = ut - w[Lt], ir = [mr, br].indexOf(m) !== -1, fo = (Wt = z == null ? void 0 : z[E]) != null ? Wt : 0, tn = ir ? qe : ut - $[dt] - T[dt] - fo + j.altAxis, or = ir ? ut + $[dt] + T[dt] - fo - j.altAxis : Fr, vn = b && ir ? aC(tn, ut, or) : ga(b ? tn : qe, ut, b ? or : Fr);
      A[E] = vn, M[E] = vn - ut;
    }
    t.modifiersData[n] = M;
  }
}
const $C = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: LC,
  requiresIfExists: ["offset"]
};
function FC(e6) {
  return {
    scrollLeft: e6.scrollLeft,
    scrollTop: e6.scrollTop
  };
}
function HC(e6) {
  return e6 === Dr(e6) || !Jr(e6) ? $p(e6) : FC(e6);
}
function jC(e6) {
  var t = e6.getBoundingClientRect(), r = Zo(t.width) / e6.offsetWidth || 1, n = Zo(t.height) / e6.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function BC(e6, t, r) {
  r === void 0 && (r = false);
  var n = Jr(t), i = Jr(t) && jC(t), o = Ci(t), l = Ko(e6, i, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((zn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Hp(o)) && (c = HC(t)), Jr(t) ? (u = Ko(t, true), u.x += t.clientLeft, u.y += t.clientTop) : o && (u.x = Fp(o))), {
    x: l.left + c.scrollLeft - u.x,
    y: l.top + c.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
function WC(e6) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e6.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(c) {
      if (!r.has(c)) {
        var u = t.get(c);
        u && i(u);
      }
    }), n.push(o);
  }
  return e6.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function VC(e6) {
  var t = WC(e6);
  return tC.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function UC(e6) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e6());
      });
    })), t;
  };
}
function qC(e6) {
  var t = e6.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var cm = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function um() {
  for (var e6 = arguments.length, t = new Array(e6), r = 0; r < e6; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function GC(e6) {
  e6 === void 0 && (e6 = {});
  var t = e6, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, o = i === void 0 ? cm : i;
  return function(c, u, d) {
    d === void 0 && (d = o);
    var g = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cm, o),
      modifiersData: {},
      elements: {
        reference: c,
        popper: u
      },
      attributes: {},
      styles: {}
    }, f = [], h = false, b = {
      state: g,
      setOptions: function(m) {
        var y = typeof m == "function" ? m(g.options) : m;
        v(), g.options = Object.assign({}, o, g.options, y), g.scrollParents = {
          reference: no(c) ? va(c) : c.contextElement ? va(c.contextElement) : [],
          popper: va(u)
        };
        var S = VC(qC([].concat(n, g.options.modifiers)));
        return g.orderedModifiers = S.filter(function(O) {
          return O.enabled;
        }), x(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var m = g.elements, y = m.reference, S = m.popper;
          if (um(y, S)) {
            g.rects = {
              reference: BC(y, za(S), g.options.strategy === "fixed"),
              popper: zp(S)
            }, g.reset = false, g.placement = g.options.placement, g.orderedModifiers.forEach(function(j) {
              return g.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var O = 0; O < g.orderedModifiers.length; O++) {
              if (g.reset === true) {
                g.reset = false, O = -1;
                continue;
              }
              var E = g.orderedModifiers[O], A = E.fn, $ = E.options, T = $ === void 0 ? {} : $, D = E.name;
              typeof A == "function" && (g = A({
                state: g,
                options: T,
                name: D,
                instance: b
              }) || g);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: UC(function() {
        return new Promise(function(w) {
          b.forceUpdate(), w(g);
        });
      }),
      destroy: function() {
        v(), h = true;
      }
    };
    if (!um(c, u))
      return b;
    b.setOptions(d).then(function(w) {
      !h && d.onFirstUpdate && d.onFirstUpdate(w);
    });
    function x() {
      g.orderedModifiers.forEach(function(w) {
        var m = w.name, y = w.options, S = y === void 0 ? {} : y, O = w.effect;
        if (typeof O == "function") {
          var E = O({
            state: g,
            name: m,
            instance: b,
            options: S
          }), A = function() {
          };
          f.push(E || A);
        }
      });
    }
    function v() {
      f.forEach(function(w) {
        return w();
      }), f = [];
    }
    return b;
  };
}
var ZC = [mC, DC, gC, iC, NC, TC, $C, dC, CC], KC = /* @__PURE__ */ GC({
  defaultModifiers: ZC
}), jl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qy(e6) {
  return e6 && e6.__esModule && Object.prototype.hasOwnProperty.call(e6, "default") ? e6.default : e6;
}
var Ud, dm;
function YC() {
  if (dm) return Ud;
  dm = 1;
  var e6 = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(o, l) {
    if (o === l) return true;
    if (o && l && typeof o == "object" && typeof l == "object") {
      if (o.constructor !== l.constructor) return false;
      var c, u, d;
      if (Array.isArray(o)) {
        if (c = o.length, c != l.length) return false;
        for (u = c; u-- !== 0; )
          if (!i(o[u], l[u])) return false;
        return true;
      }
      var g;
      if (t && o instanceof Map && l instanceof Map) {
        if (o.size !== l.size) return false;
        for (g = o.entries(); !(u = g.next()).done; )
          if (!l.has(u.value[0])) return false;
        for (g = o.entries(); !(u = g.next()).done; )
          if (!i(u.value[1], l.get(u.value[0]))) return false;
        return true;
      }
      if (r && o instanceof Set && l instanceof Set) {
        if (o.size !== l.size) return false;
        for (g = o.entries(); !(u = g.next()).done; )
          if (!l.has(u.value[0])) return false;
        return true;
      }
      if (n && ArrayBuffer.isView(o) && ArrayBuffer.isView(l)) {
        if (c = o.length, c != l.length) return false;
        for (u = c; u-- !== 0; )
          if (o[u] !== l[u]) return false;
        return true;
      }
      if (o.constructor === RegExp) return o.source === l.source && o.flags === l.flags;
      if (o.valueOf !== Object.prototype.valueOf && typeof o.valueOf == "function" && typeof l.valueOf == "function") return o.valueOf() === l.valueOf();
      if (o.toString !== Object.prototype.toString && typeof o.toString == "function" && typeof l.toString == "function") return o.toString() === l.toString();
      if (d = Object.keys(o), c = d.length, c !== Object.keys(l).length) return false;
      for (u = c; u-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, d[u])) return false;
      if (e6 && o instanceof Element) return false;
      for (u = c; u-- !== 0; )
        if (!((d[u] === "_owner" || d[u] === "__v" || d[u] === "__o") && o.$$typeof) && !i(o[d[u]], l[d[u]]))
          return false;
      return true;
    }
    return o !== o && l !== l;
  }
  return Ud = function(l, c) {
    try {
      return i(l, c);
    } catch (u) {
      if ((u.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw u;
    }
  }, Ud;
}
var XC = YC();
const JC = /* @__PURE__ */ Qy(XC);
var QC = [], jp = function(t, r, n) {
  n === void 0 && (n = {});
  var i = __mf_25(null), o = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || QC
  }, l = __mf_26({
    styles: {
      popper: {
        position: o.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = l[0], u = l[1], d = __mf_23(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(b) {
        var x = b.state, v = Object.keys(x.elements);
        __mf_3(function() {
          u({
            styles: em(v.map(function(w) {
              return [w, x.styles[w] || {}];
            })),
            attributes: em(v.map(function(w) {
              return [w, x.attributes[w]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), g = __mf_23(function() {
    var h = {
      onFirstUpdate: o.onFirstUpdate,
      placement: o.placement,
      strategy: o.strategy,
      modifiers: [].concat(o.modifiers, [d, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return JC(i.current, h) ? i.current || h : (i.current = h, h);
  }, [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]), f = __mf_25();
  return tm(function() {
    f.current && f.current.setOptions(g);
  }, [g]), tm(function() {
    if (!(t == null || r == null)) {
      var h = n.createPopper || KC, b = h(t, r, g);
      return f.current = b, function() {
        b.destroy(), f.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: f.current ? f.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: f.current ? f.current.update : null,
    forceUpdate: f.current ? f.current.forceUpdate : null
  };
};
(function() {
  try {
    const e6 = document.createElement("style");
    e6.setAttribute("data-vite-dev-id", "ui-components.css"), e6.textContent = `/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-scrollbar-thumb:#0000;--tw-scrollbar-track:#0000;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}:root:not(#\\#),:host:not(#\\#){--color-green-500:oklch(72.3% .219 149.579);--color-blue-500:oklch(62.3% .214 259.815);--color-pink-500:oklch(65.6% .241 354.308);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-800:oklch(27.8% .033 256.848);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.65rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--text-7xl:4.5rem;--text-7xl--line-height:1;--text-8xl:6rem;--text-8xl--line-height:1;--text-9xl:8rem;--text-9xl--line-height:1;--font-weight-thin:100;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-xs:.125rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-bounce:bounce 1s infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--color-grey-50:var(--ws-grey-50);--color-grey-100:var(--ws-grey-100);--color-grey-200:var(--ws-grey-200);--color-grey-300:var(--ws-grey-300);--color-grey-400:var(--ws-grey-400);--color-grey-500:var(--ws-grey-500);--color-grey-600:var(--ws-grey-600);--color-grey-700:var(--ws-grey-700);--color-grey-800:var(--ws-grey-800);--color-primary-500:var(--ws-primary-500);--color-primary-600:var(--ws-primary-600);--color-primary-700:var(--ws-primary-700);--color-positive-200:var(--ws-positive-200);--color-positive-400:var(--ws-positive-400);--color-positive-500:var(--ws-positive-500);--color-positive-600:var(--ws-positive-600);--color-warning-500:var(--ws-warning-500);--color-negative-400:var(--ws-negative-400);--color-negative-500:var(--ws-negative-500);--text-xxs:.55rem;--text-s:.75rem;--min-height-6:1.5rem;--color-canvas-default:var(--ws-bg-default);--color-canvas-subtle:var(--ws-grey-100);--color-panel:var(--ws-grey-300);--color-panel-subtle:var(--ws-grey-200);--color-card:var(--ws-card-bg);--color-card-border:var(--ws-card-border);--color-body:var(--ws-bg-foreground);--color-body-bg:var(--ws-bg-default);--color-body-light:var(--ws-grey-100);--color-muted:var(--ws-text-muted);--color-neutral:var(--ws-grey-200);--color-button-text:var(--ws-button-fg);--color-primary:var(--ws-primary-default);--color-primary-hover:var(--ws-primary-hover);--color-primary-light:var(--ws-primary-light);--color-primary-dark:var(--ws-primary-dark);--color-positive:var(--ws-positive-500);--color-positive-hover:var(--ws-positive-hover);--color-positive-text:var(--ws-positive-text);--color-positive-bg:var(--ws-positive-bg);--color-positive-light:var(--ws-positive-light);--color-positive-dark:var(--ws-positive-dark);--color-negative:var(--ws-negative-500);--color-negative-hover:var(--ws-negative-hover);--color-negative-text:var(--ws-negative-text);--color-negative-bg:var(--ws-negative-bg);--color-negative-light:var(--ws-negative-light);--color-negative-dark:var(--ws-negative-dark);--color-warning:var(--ws-warning-500);--color-warning-hover:var(--ws-warning-hover);--color-warning-text:var(--ws-warning-text);--color-warning-bg:var(--ws-warning-bg);--color-warning-light:var(--ws-warning-light);--color-warning-dark:var(--ws-warning-dark);--color-input-bg:var(--ws-input-bg);--color-input-border:var(--ws-input-border);--color-input-text:var(--ws-input-text);--color-input-placeholder:var(--ws-input-placeholder);--color-input-focus-border:var(--ws-input-focus-border);--color-select-border:var(--ws-select-border);--color-select-text:var(--ws-select-text);--color-select-list-bg:var(--ws-select-list-bg);--color-input-option-hover-bg:var(--ws-input-option-hover-bg);--color-input-option-active-bg:var(--ws-input-option-active-bg);--color-input-option-active-text:var(--ws-input-option-active-text);--color-input-error-border:var(--ws-input-error-border);--color-input-error-bg:var(--ws-input-error-bg);--color-input-warning-border:var(--ws-input-warning-border);--color-input-warning-bg:var(--ws-input-warning-bg);--color-input-message-bg:var(--ws-input-message-bg);--color-input-message-text:var(--ws-input-message-text);--color-input-disable:var(--ws-disable-input);--color-inactive-text:var(--ws-inactive-text);--color-panel-0:var(--ws-panel-0);--color-panel-1:var(--ws-panel-1);--color-panel-2:var(--ws-panel-2);--color-panel-3:var(--ws-panel-3);--color-panel-4:var(--ws-panel-4);--color-panel-5:var(--ws-panel-5);--color-panel-border-subtle:var(--ws-panel-border-subtle);--color-tab-bg-default:var(--ws-tab-bg-default);--color-tab-border:var(--ws-tab-border);--color-tab-active-bg:var(--ws-tab-active-bg);--color-tab-active-fg:var(--ws-tab-active-fg);--color-tab-inactive-bg:var(--ws-tab-inactive-bg);--color-tab-inactive-fg:var(--ws-tab-inactive-fg);--color-panel-border:var(--ws-panel-border)}.pointer-events-auto:not(#\\#){pointer-events:auto}.pointer-events-none:not(#\\#){pointer-events:none}.collapse:not(#\\#){visibility:collapse}.visible:not(#\\#){visibility:visible}.sr-only:not(#\\#){clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute:not(#\\#){position:absolute}.fixed:not(#\\#){position:fixed}.relative:not(#\\#){position:relative}.static:not(#\\#){position:static}.inset-0:not(#\\#){top:0;right:0;bottom:0;left:0}.-top-1\\/5:not(#\\#){top:-20%}.top-0:not(#\\#){top:0}.top-1:not(#\\#){top:var(--spacing)}.top-full:not(#\\#){top:100%}.-right-12:not(#\\#){right:calc(var(--spacing) * -12)}.-right-px:not(#\\#){right:-1px}.right-0:not(#\\#){right:0}.right-1:not(#\\#){right:var(--spacing)}.bottom-0:not(#\\#){bottom:0}.bottom-full:not(#\\#){bottom:100%}.-left-px:not(#\\#){left:-1px}.left-0:not(#\\#){left:0}.left-0\\.5:not(#\\#){left:calc(var(--spacing) * .5)}.left-1\\/2:not(#\\#){left:50%}.left-3\\.5:not(#\\#){left:calc(var(--spacing) * 3.5)}.left-4:not(#\\#){left:calc(var(--spacing) * 4)}.left-4\\.5:not(#\\#){left:calc(var(--spacing) * 4.5)}.left-5\\.5:not(#\\#){left:calc(var(--spacing) * 5.5)}.left-full:not(#\\#){left:100%}.z-1:not(#\\#){z-index:1}.z-2:not(#\\#){z-index:2}.z-10:not(#\\#){z-index:10}.z-40:not(#\\#){z-index:40}.z-50:not(#\\#){z-index:50}.z-60:not(#\\#){z-index:60}.z-9999:not(#\\#){z-index:9999}.container:not(#\\#){width:100%}@media(min-width:40rem){.container:not(#\\#){max-width:40rem}}@media(min-width:48rem){.container:not(#\\#){max-width:48rem}}@media(min-width:64rem){.container:not(#\\#){max-width:64rem}}@media(min-width:80rem){.container:not(#\\#){max-width:80rem}}@media(min-width:96rem){.container:not(#\\#){max-width:96rem}}.m-0:not(#\\#){margin:0}.m-0\\.5:not(#\\#){margin:calc(var(--spacing) * .5)}.m-px:not(#\\#){margin:1px}.mx-1:not(#\\#){margin-inline:var(--spacing)}.-my-1:not(#\\#){margin-block:calc(var(--spacing) * -1)}.mt-1:not(#\\#){margin-top:var(--spacing)}.mt-2:not(#\\#){margin-top:calc(var(--spacing) * 2)}.mt-4:not(#\\#){margin-top:calc(var(--spacing) * 4)}.mt-8:not(#\\#){margin-top:calc(var(--spacing) * 8)}.mr-1:not(#\\#){margin-right:var(--spacing)}.mr-2:not(#\\#){margin-right:calc(var(--spacing) * 2)}.mb-1:not(#\\#){margin-bottom:var(--spacing)}.mb-2:not(#\\#){margin-bottom:calc(var(--spacing) * 2)}.mb-4:not(#\\#){margin-bottom:calc(var(--spacing) * 4)}.ml-1:not(#\\#){margin-left:var(--spacing)}.ml-1\\.5:not(#\\#){margin-left:calc(var(--spacing) * 1.5)}.ml-2:not(#\\#){margin-left:calc(var(--spacing) * 2)}.box-border:not(#\\#){box-sizing:border-box}.block:not(#\\#){display:block}.flex:not(#\\#){display:flex}.grid:not(#\\#){display:grid}.hidden:not(#\\#){display:none}.inline:not(#\\#){display:inline}.inline-block:not(#\\#){display:inline-block}.inline-flex:not(#\\#){display:inline-flex}.table:not(#\\#){display:table}.size-1\\.5:not(#\\#){width:calc(var(--spacing) * 1.5);height:calc(var(--spacing) * 1.5)}.size-1\\.75:not(#\\#){width:calc(var(--spacing) * 1.75);height:calc(var(--spacing) * 1.75)}.size-2:not(#\\#){width:calc(var(--spacing) * 2);height:calc(var(--spacing) * 2)}.size-2\\.5:not(#\\#){width:calc(var(--spacing) * 2.5);height:calc(var(--spacing) * 2.5)}.size-3:not(#\\#){width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-3\\.5:not(#\\#){width:calc(var(--spacing) * 3.5);height:calc(var(--spacing) * 3.5)}.size-3\\.25:not(#\\#){width:calc(var(--spacing) * 3.25);height:calc(var(--spacing) * 3.25)}.size-4:not(#\\#){width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.size-5:not(#\\#){width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.size-6:not(#\\#){width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.size-fit:not(#\\#){width:fit-content;height:fit-content}.h-2:not(#\\#){height:calc(var(--spacing) * 2)}.h-3:not(#\\#){height:calc(var(--spacing) * 3)}.h-3\\.5:not(#\\#){height:calc(var(--spacing) * 3.5)}.h-4:not(#\\#){height:calc(var(--spacing) * 4)}.h-4\\.5:not(#\\#){height:calc(var(--spacing) * 4.5)}.h-5:not(#\\#){height:calc(var(--spacing) * 5)}.h-5\\.5:not(#\\#){height:calc(var(--spacing) * 5.5)}.h-6:not(#\\#){height:calc(var(--spacing) * 6)}.h-7:not(#\\#){height:calc(var(--spacing) * 7)}.h-7\\.5:not(#\\#){height:calc(var(--spacing) * 7.5)}.h-8:not(#\\#){height:calc(var(--spacing) * 8)}.h-10:not(#\\#){height:calc(var(--spacing) * 10)}.h-14:not(#\\#){height:calc(var(--spacing) * 14)}.h-20:not(#\\#){height:calc(var(--spacing) * 20)}.h-30:not(#\\#){height:calc(var(--spacing) * 30)}.h-100:not(#\\#){height:calc(var(--spacing) * 100)}.h-fit:not(#\\#){height:fit-content}.h-full:not(#\\#){height:100%}.h-screen:not(#\\#){height:100vh}.max-h-\\[400px\\]:not(#\\#){max-height:400px}.max-h-full:not(#\\#){max-height:100%}.min-h-5:not(#\\#){min-height:calc(var(--spacing) * 5)}.min-h-6:not(#\\#){min-height:var(--min-height-6)}.min-h-7:not(#\\#){min-height:calc(var(--spacing) * 7)}.min-h-\\[100px\\]:not(#\\#){min-height:100px}.min-h-fit:not(#\\#){min-height:fit-content}.min-h-screen:not(#\\#){min-height:100vh}.w-0\\.5:not(#\\#){width:calc(var(--spacing) * .5)}.w-1\\/2:not(#\\#){width:50%}.w-3:not(#\\#){width:calc(var(--spacing) * 3)}.w-3\\.5:not(#\\#){width:calc(var(--spacing) * 3.5)}.w-4:not(#\\#){width:calc(var(--spacing) * 4)}.w-5:not(#\\#){width:calc(var(--spacing) * 5)}.w-6:not(#\\#){width:calc(var(--spacing) * 6)}.w-7:not(#\\#){width:calc(var(--spacing) * 7)}.w-8:not(#\\#){width:calc(var(--spacing) * 8)}.w-9:not(#\\#){width:calc(var(--spacing) * 9)}.w-11:not(#\\#){width:calc(var(--spacing) * 11)}.w-16:not(#\\#){width:calc(var(--spacing) * 16)}.w-20:not(#\\#){width:calc(var(--spacing) * 20)}.w-32:not(#\\#){width:calc(var(--spacing) * 32)}.w-48:not(#\\#){width:calc(var(--spacing) * 48)}.w-52:not(#\\#){width:calc(var(--spacing) * 52)}.w-60:not(#\\#){width:calc(var(--spacing) * 60)}.w-64:not(#\\#){width:calc(var(--spacing) * 64)}.w-72:not(#\\#){width:calc(var(--spacing) * 72)}.w-80:not(#\\#){width:calc(var(--spacing) * 80)}.w-96:not(#\\#){width:calc(var(--spacing) * 96)}.w-fit:not(#\\#){width:fit-content}.w-full:not(#\\#){width:100%}.w-px:not(#\\#){width:1px}.max-w-100:not(#\\#){max-width:calc(var(--spacing) * 100)}.max-w-\\[300px\\]:not(#\\#){max-width:300px}.max-w-md:not(#\\#){max-width:var(--container-md)}.min-w-0:not(#\\#){min-width:0}.min-w-3\\.5:not(#\\#){min-width:calc(var(--spacing) * 3.5)}.min-w-4\\.5:not(#\\#){min-width:calc(var(--spacing) * 4.5)}.min-w-5:not(#\\#){min-width:calc(var(--spacing) * 5)}.min-w-7\\.5:not(#\\#){min-width:calc(var(--spacing) * 7.5)}.min-w-50:not(#\\#){min-width:calc(var(--spacing) * 50)}.min-w-\\[150px\\]:not(#\\#){min-width:150px}.min-w-fit:not(#\\#){min-width:fit-content}.min-w-full:not(#\\#){min-width:100%}.flex-1:not(#\\#){flex:1}.flex-3:not(#\\#){flex:3}.flex-none:not(#\\#){flex:none}.shrink-0:not(#\\#){flex-shrink:0}.grow:not(#\\#){flex-grow:1}.origin-top-right:not(#\\#){transform-origin:100% 0}.-translate-x-1\\/2:not(#\\#){--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-full:not(#\\#){--tw-translate-x:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0:not(#\\#){--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-full:not(#\\#){--tw-translate-x:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-full:not(#\\#){--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0:not(#\\#){--tw-translate-y:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-1\\/2:not(#\\#){--tw-translate-y: 50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-full:not(#\\#){--tw-translate-y:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-0:not(#\\#){--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-95:not(#\\#){--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-100:not(#\\#){--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-110:not(#\\#){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.-rotate-45:not(#\\#){rotate:-45deg}.rotate-45:not(#\\#){rotate:45deg}.rotate-90:not(#\\#){rotate:90deg}.rotate-180:not(#\\#){rotate:180deg}.transform:not(#\\#){transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-bounce:not(#\\#){animation:var(--animate-bounce)}.cursor-auto:not(#\\#){cursor:auto}.cursor-default:not(#\\#){cursor:default}.cursor-not-allowed:not(#\\#){cursor:not-allowed}.cursor-pointer:not(#\\#){cursor:pointer}.cursor-se-resize:not(#\\#){cursor:se-resize}.resize:not(#\\#){resize:both}.resize-none:not(#\\#){resize:none}.scrollbar-thin:not(#\\#){scrollbar-width:thin}.scrollbar-thumb-input-border:not(#\\#){--tw-scrollbar-thumb:var(--color-input-border);scrollbar-color:var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)}.scrollbar-track-transparent:not(#\\#){--tw-scrollbar-track:transparent;scrollbar-color:var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)}.list-disc:not(#\\#){list-style-type:disc}.appearance-none:not(#\\#){-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-2:not(#\\#){grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3:not(#\\#){grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col:not(#\\#){flex-direction:column}.flex-row:not(#\\#){flex-direction:row}.flex-wrap:not(#\\#){flex-wrap:wrap}.place-content-center:not(#\\#){place-content:center}.place-items-center:not(#\\#){place-items:center}.items-center:not(#\\#){align-items:center}.items-end:not(#\\#){align-items:flex-end}.items-start:not(#\\#){align-items:flex-start}.justify-around:not(#\\#){justify-content:space-around}.justify-between:not(#\\#){justify-content:space-between}.justify-center:not(#\\#){justify-content:center}.gap-0\\.5:not(#\\#){gap:calc(var(--spacing) * .5)}.gap-1:not(#\\#){gap:var(--spacing)}.gap-1\\.5:not(#\\#){gap:calc(var(--spacing) * 1.5)}.gap-2:not(#\\#){gap:calc(var(--spacing) * 2)}.gap-2\\.5:not(#\\#){gap:calc(var(--spacing) * 2.5)}.gap-3:not(#\\#){gap:calc(var(--spacing) * 3)}.gap-4:not(#\\#){gap:calc(var(--spacing) * 4)}.gap-6:not(#\\#){gap:calc(var(--spacing) * 6)}.gap-8:not(#\\#){gap:calc(var(--spacing) * 8)}.gap-10:not(#\\#){gap:calc(var(--spacing) * 10)}.gap-14:not(#\\#){gap:calc(var(--spacing) * 14)}:where(.space-y-1>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-1:not(#\\#){column-gap:var(--spacing)}.gap-x-2:not(#\\#){column-gap:calc(var(--spacing) * 2)}.gap-x-3:not(#\\#){column-gap:calc(var(--spacing) * 3)}.gap-x-4:not(#\\#){column-gap:calc(var(--spacing) * 4)}.gap-x-12:not(#\\#){column-gap:calc(var(--spacing) * 12)}.gap-x-20:not(#\\#){column-gap:calc(var(--spacing) * 20)}:where(.space-x-4>:not(:last-child)):not(#\\#){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)))}.truncate:not(#\\#){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden:not(#\\#){overflow:hidden}.overflow-y-auto:not(#\\#){overflow-y:auto}.scroll-auto:not(#\\#){scroll-behavior:auto}.rounded:not(#\\#){border-radius:.25rem}.rounded-full:not(#\\#){border-radius:3.40282e38px}.rounded-lg:not(#\\#){border-radius:var(--radius-lg)}.rounded-md:not(#\\#){border-radius:var(--radius-md)}.rounded-xs:not(#\\#){border-radius:var(--radius-xs)}.rounded-t:not(#\\#){border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-b:not(#\\#){border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-b-none:not(#\\#){border-bottom-right-radius:0;border-bottom-left-radius:0}.border:not(#\\#){border-style:var(--tw-border-style);border-width:1px}.border-0:not(#\\#){border-style:var(--tw-border-style);border-width:0}.border-2:not(#\\#){border-style:var(--tw-border-style);border-width:2px}.border-px:not(#\\#){border-width:1px}.divide:not(#\\#){border-width:.5px}.border-t:not(#\\#){border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0:not(#\\#){border-top-style:var(--tw-border-style);border-top-width:0}.border-r:not(#\\#){border-right-style:var(--tw-border-style);border-right-width:1px}.border-b:not(#\\#){border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0:not(#\\#){border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-dashed:not(#\\#){--tw-border-style:dashed;border-style:dashed}.border-body:not(#\\#){border-color:var(--color-body)}.border-body-light:not(#\\#){border-color:var(--color-body-light)}.border-canvas-default:not(#\\#){border-color:var(--color-canvas-default)}.border-card-border:not(#\\#){border-color:var(--color-card-border)}.border-grey-100:not(#\\#){border-color:var(--color-grey-100)}.border-grey-200:not(#\\#){border-color:var(--color-grey-200)}.border-input-border:not(#\\#){border-color:var(--color-input-border)}.border-input-disable:not(#\\#){border-color:var(--color-input-disable)}.border-input-error-border:not(#\\#){border-color:var(--color-input-error-border)}.border-input-focus-border:not(#\\#){border-color:var(--color-input-focus-border)}.border-input-warning-border:not(#\\#){border-color:var(--color-input-warning-border)}.border-negative:not(#\\#){border-color:var(--color-negative)}.border-negative-500:not(#\\#){border-color:var(--color-negative-500)}.border-neutral:not(#\\#){border-color:var(--color-neutral)}.border-panel:not(#\\#){border-color:var(--color-panel)}.border-panel-border:not(#\\#){border-color:var(--color-panel-border)}.border-panel-border-subtle:not(#\\#){border-color:var(--color-panel-border-subtle)}.border-panel-subtle:not(#\\#){border-color:var(--color-panel-subtle)}.border-positive:not(#\\#){border-color:var(--color-positive)}.border-positive-text:not(#\\#){border-color:var(--color-positive-text)}.border-primary:not(#\\#){border-color:var(--color-primary)}.border-primary-700:not(#\\#){border-color:var(--color-primary-700)}.border-primary-hover:not(#\\#){border-color:var(--color-primary-hover)}.border-select-border:not(#\\#){border-color:var(--color-select-border)}.border-tab-border:not(#\\#){border-color:var(--color-tab-border)}.border-transparent:not(#\\#){border-color:#0000}.border-warning:not(#\\#){border-color:var(--color-warning)}.border-warning-bg:not(#\\#){border-color:var(--color-warning-bg)}.border-white:not(#\\#){border-color:var(--color-white)}.bg-blue-500:not(#\\#){background-color:var(--color-blue-500)}.bg-body:not(#\\#){background-color:var(--color-body)}.bg-body-bg:not(#\\#){background-color:var(--color-body-bg)}.bg-canvas-default:not(#\\#){background-color:var(--color-canvas-default)}.bg-canvas-subtle:not(#\\#){background-color:var(--color-canvas-subtle)}.bg-card:not(#\\#){background-color:var(--color-card)}.bg-gray-100:not(#\\#){background-color:var(--color-gray-100)}.bg-grey-50:not(#\\#){background-color:var(--color-grey-50)}.bg-grey-200:not(#\\#){background-color:var(--color-grey-200)}.bg-grey-300:not(#\\#){background-color:var(--color-grey-300)}.bg-grey-400:not(#\\#){background-color:var(--color-grey-400)}.bg-grey-500:not(#\\#){background-color:var(--color-grey-500)}.bg-grey-600:not(#\\#){background-color:var(--color-grey-600)}.bg-grey-700:not(#\\#){background-color:var(--color-grey-700)}.bg-grey-800:not(#\\#){background-color:var(--color-grey-800)}.bg-input-bg:not(#\\#){background-color:var(--color-input-bg)}.bg-input-border:not(#\\#){background-color:var(--color-input-border)}.bg-input-disable:not(#\\#){background-color:var(--color-input-disable)}.bg-input-error-bg:not(#\\#){background-color:var(--color-input-error-bg)}.bg-input-message-bg:not(#\\#){background-color:var(--color-input-message-bg)}.bg-input-option-active-bg:not(#\\#){background-color:var(--color-input-option-active-bg)}.bg-input-option-hover-bg:not(#\\#){background-color:var(--color-input-option-hover-bg)}.bg-input-text:not(#\\#){background-color:var(--color-input-text)}.bg-input-warning-bg:not(#\\#){background-color:var(--color-input-warning-bg)}.bg-negative:not(#\\#){background-color:var(--color-negative)}.bg-negative-400:not(#\\#){background-color:var(--color-negative-400)}.bg-negative-500:not(#\\#){background-color:var(--color-negative-500)}.bg-negative-bg:not(#\\#){background-color:var(--color-negative-bg)}.bg-negative-hover:not(#\\#){background-color:var(--color-negative-hover)}.bg-negative-light:not(#\\#){background-color:var(--color-negative-light)}.bg-panel:not(#\\#){background-color:var(--color-panel)}.bg-panel-0:not(#\\#){background-color:var(--color-panel-0)}.bg-panel-1:not(#\\#){background-color:var(--color-panel-1)}.bg-panel-2:not(#\\#){background-color:var(--color-panel-2)}.bg-panel-3:not(#\\#){background-color:var(--color-panel-3)}.bg-panel-4:not(#\\#){background-color:var(--color-panel-4)}.bg-panel-5:not(#\\#){background-color:var(--color-panel-5)}.bg-panel-subtle:not(#\\#){background-color:var(--color-panel-subtle)}.bg-positive:not(#\\#){background-color:var(--color-positive)}.bg-positive-200:not(#\\#){background-color:var(--color-positive-200)}.bg-positive-500:not(#\\#){background-color:var(--color-positive-500)}.bg-positive-bg:not(#\\#){background-color:var(--color-positive-bg)}.bg-positive-hover:not(#\\#){background-color:var(--color-positive-hover)}.bg-positive-light:not(#\\#){background-color:var(--color-positive-light)}.bg-primary:not(#\\#){background-color:var(--color-primary)}.bg-primary-500:not(#\\#){background-color:var(--color-primary-500)}.bg-primary-600:not(#\\#){background-color:var(--color-primary-600)}.bg-primary-hover:not(#\\#){background-color:var(--color-primary-hover)}.bg-primary-light:not(#\\#){background-color:var(--color-primary-light)}.bg-primary\\/30:not(#\\#){background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/30:not(#\\#){background-color:color-mix(in oklab,var(--color-primary) 30%,transparent)}}.bg-select-list-bg:not(#\\#){background-color:var(--color-select-list-bg)}.bg-tab-active-bg:not(#\\#){background-color:var(--color-tab-active-bg)}.bg-tab-bg-default:not(#\\#){background-color:var(--color-tab-bg-default)}.bg-tab-inactive-bg:not(#\\#){background-color:var(--color-tab-inactive-bg)}.bg-transparent:not(#\\#){background-color:#0000}.bg-warning:not(#\\#){background-color:var(--color-warning)}.bg-warning-500:not(#\\#){background-color:var(--color-warning-500)}.bg-warning-bg:not(#\\#){background-color:var(--color-warning-bg)}.bg-warning-hover:not(#\\#){background-color:var(--color-warning-hover)}.bg-warning-light:not(#\\#){background-color:var(--color-warning-light)}.bg-white:not(#\\#){background-color:var(--color-white)}.bg-linear-to-r:not(#\\#){--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-r:not(#\\#){--tw-gradient-position:to right in oklab}}.bg-linear-to-r:not(#\\#){background-image:linear-gradient(var(--tw-gradient-stops))}.from-green-500:not(#\\#){--tw-gradient-from:var(--color-green-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-primary:not(#\\#){--tw-gradient-from:var(--color-primary);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-blue-500:not(#\\#){--tw-gradient-to:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-pink-500:not(#\\#){--tw-gradient-to:var(--color-pink-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.stroke-current:not(#\\#){stroke:currentColor}.p-0:not(#\\#){padding:0}.p-0\\.5:not(#\\#){padding:calc(var(--spacing) * .5)}.p-1:not(#\\#){padding:var(--spacing)}.p-1\\!{padding:var(--spacing)!important}.p-1\\.5:not(#\\#){padding:calc(var(--spacing) * 1.5)}.p-2:not(#\\#){padding:calc(var(--spacing) * 2)}.p-2\\.5:not(#\\#){padding:calc(var(--spacing) * 2.5)}.p-3:not(#\\#){padding:calc(var(--spacing) * 3)}.p-4:not(#\\#){padding:calc(var(--spacing) * 4)}.p-6:not(#\\#){padding:calc(var(--spacing) * 6)}.p-8:not(#\\#){padding:calc(var(--spacing) * 8)}.p-10:not(#\\#){padding:calc(var(--spacing) * 10)}.p-50:not(#\\#){padding:calc(var(--spacing) * 50)}.p-px:not(#\\#){padding:1px}.px-0\\.5:not(#\\#){padding-inline:calc(var(--spacing) * .5)}.px-1:not(#\\#){padding-inline:var(--spacing)}.px-1\\.5:not(#\\#){padding-inline:calc(var(--spacing) * 1.5)}.px-2:not(#\\#){padding-inline:calc(var(--spacing) * 2)}.px-3:not(#\\#){padding-inline:calc(var(--spacing) * 3)}.px-4:not(#\\#){padding-inline:calc(var(--spacing) * 4)}.px-6:not(#\\#){padding-inline:calc(var(--spacing) * 6)}.px-7:not(#\\#){padding-inline:calc(var(--spacing) * 7)}.px-8:not(#\\#){padding-inline:calc(var(--spacing) * 8)}.py-0\\.5:not(#\\#){padding-block:calc(var(--spacing) * .5)}.py-1:not(#\\#){padding-block:var(--spacing)}.py-1\\.5:not(#\\#){padding-block:calc(var(--spacing) * 1.5)}.py-2:not(#\\#){padding-block:calc(var(--spacing) * 2)}.py-3:not(#\\#){padding-block:calc(var(--spacing) * 3)}.pt-0\\.5:not(#\\#){padding-top:calc(var(--spacing) * .5)}.pt-1:not(#\\#){padding-top:var(--spacing)}.pt-1\\.5:not(#\\#){padding-top:calc(var(--spacing) * 1.5)}.pt-2:not(#\\#){padding-top:calc(var(--spacing) * 2)}.pl-1:not(#\\#){padding-left:var(--spacing)}.pl-4:not(#\\#){padding-left:calc(var(--spacing) * 4)}.text-center:not(#\\#){text-align:center}.text-left:not(#\\#){text-align:left}.text-2xl:not(#\\#){font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl:not(#\\#){font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl:not(#\\#){font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl:not(#\\#){font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-6xl:not(#\\#){font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.text-7xl:not(#\\#){font-size:var(--text-7xl);line-height:var(--tw-leading,var(--text-7xl--line-height))}.text-8xl:not(#\\#){font-size:var(--text-8xl);line-height:var(--tw-leading,var(--text-8xl--line-height))}.text-9xl:not(#\\#){font-size:var(--text-9xl);line-height:var(--tw-leading,var(--text-9xl--line-height))}.text-base:not(#\\#){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg:not(#\\#){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm:not(#\\#){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl:not(#\\#){font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs:not(#\\#){font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-s:not(#\\#){font-size:var(--text-s)}.text-xxs:not(#\\#){font-size:var(--text-xxs)}.leading-3:not(#\\#){--tw-leading:calc(var(--spacing) * 3);line-height:calc(var(--spacing) * 3)}.leading-4:not(#\\#){--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.leading-5:not(#\\#){--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none:not(#\\#){--tw-leading:1;line-height:1}.font-bold:not(#\\#){--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium:not(#\\#){--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold:not(#\\#){--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-thin:not(#\\#){--tw-font-weight:var(--font-weight-thin);font-weight:var(--font-weight-thin)}.whitespace-nowrap:not(#\\#){white-space:nowrap}.text-body:not(#\\#){color:var(--color-body)}.text-button-text:not(#\\#){color:var(--color-button-text)}.text-gray-50:not(#\\#){color:var(--color-gray-50)}.text-gray-400:not(#\\#){color:var(--color-gray-400)}.text-gray-500:not(#\\#){color:var(--color-gray-500)}.text-gray-800:not(#\\#){color:var(--color-gray-800)}.text-grey-100:not(#\\#){color:var(--color-grey-100)}.text-grey-200:not(#\\#){color:var(--color-grey-200)}.text-grey-300:not(#\\#){color:var(--color-grey-300)}.text-grey-700:not(#\\#){color:var(--color-grey-700)}.text-inactive-text:not(#\\#){color:var(--color-inactive-text)}.text-inherit:not(#\\#){color:inherit}.text-input-disable:not(#\\#){color:var(--color-input-disable)}.text-input-message-text:not(#\\#){color:var(--color-input-message-text)}.text-input-option-active-text:not(#\\#){color:var(--color-input-option-active-text)}.text-input-placeholder:not(#\\#){color:var(--color-input-placeholder)}.text-input-text:not(#\\#){color:var(--color-input-text)}.text-muted:not(#\\#){color:var(--color-muted)}.text-negative:not(#\\#){color:var(--color-negative)}.text-negative-500:not(#\\#){color:var(--color-negative-500)}.text-negative-dark:not(#\\#){color:var(--color-negative-dark)}.text-negative-text:not(#\\#){color:var(--color-negative-text)}.text-panel-subtle:not(#\\#){color:var(--color-panel-subtle)}.text-positive:not(#\\#){color:var(--color-positive)}.text-positive-500:not(#\\#){color:var(--color-positive-500)}.text-positive-600:not(#\\#){color:var(--color-positive-600)}.text-positive-dark:not(#\\#){color:var(--color-positive-dark)}.text-positive-text:not(#\\#),.text-positive-text\\/70:not(#\\#){color:var(--color-positive-text)}@supports (color:color-mix(in lab,red,red)){.text-positive-text\\/70:not(#\\#){color:color-mix(in oklab,var(--color-positive-text) 70%,transparent)}}.text-primary:not(#\\#){color:var(--color-primary)}.text-primary-dark:not(#\\#){color:var(--color-primary-dark)}.text-primary-hover:not(#\\#){color:var(--color-primary-hover)}.text-select-text:not(#\\#){color:var(--color-select-text)}.text-tab-active-fg:not(#\\#){color:var(--color-tab-active-fg)}.text-tab-inactive-fg:not(#\\#){color:var(--color-tab-inactive-fg)}.text-warning:not(#\\#){color:var(--color-warning)}.text-warning-dark:not(#\\#){color:var(--color-warning-dark)}.text-warning-text:not(#\\#){color:var(--color-warning-text)}.capitalize:not(#\\#){text-transform:capitalize}.lowercase:not(#\\#){text-transform:lowercase}.uppercase:not(#\\#){text-transform:uppercase}.italic:not(#\\#){font-style:italic}.underline:not(#\\#){text-decoration-line:underline}.decoration-transparent:not(#\\#){text-decoration-color:#0000}.caret-transparent:not(#\\#){caret-color:#0000}.opacity-0:not(#\\#){opacity:0}.opacity-50:not(#\\#){opacity:.5}.opacity-60:not(#\\#){opacity:.6}.opacity-80:not(#\\#){opacity:.8}.opacity-100:not(#\\#){opacity:1}.shadow:not(#\\#){--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner:not(#\\#){--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg:not(#\\#){--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md:not(#\\#){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs:not(#\\#){--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-input-error-border:not(#\\#){--tw-ring-color:var(--color-input-error-border)}.ring-input-focus-border:not(#\\#){--tw-ring-color:var(--color-input-focus-border)}.ring-input-warning-border:not(#\\#){--tw-ring-color:var(--color-input-warning-border)}.ring-positive:not(#\\#){--tw-ring-color:var(--color-positive)}.outline-hidden:not(#\\#){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.outline-hidden:not(#\\#){outline-offset:2px;outline:2px solid #0000}}.outline:not(#\\#),.outline-1:not(#\\#){outline-style:var(--tw-outline-style);outline-width:1px}.outline-s:not(#\\#){outline-width:.5px}.outline-xs:not(#\\#){outline-width:.3px}.outline-xxs:not(#\\#){outline-width:.1px}.outline-canvas-default:not(#\\#){outline-color:var(--color-canvas-default)}.outline-primary:not(#\\#){outline-color:var(--color-primary)}.blur:not(#\\#){--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter:not(#\\#){filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition:not(#\\#){transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all:not(#\\#){transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors:not(#\\#){transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity:not(#\\#){transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform:not(#\\#){transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150:not(#\\#){--tw-duration:.15s;transition-duration:.15s}.duration-200:not(#\\#){--tw-duration:.2s;transition-duration:.2s}.duration-300:not(#\\#){--tw-duration:.3s;transition-duration:.3s}.ease-in-out:not(#\\#){--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out:not(#\\#){--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-solid:not(#\\#){--tw-outline-style:solid;outline-style:solid}.select-none:not(#\\#){-webkit-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:flex:is(:where(.group):hover *):not(#\\#){display:flex}.group-hover\\:grid:is(:where(.group):hover *):not(#\\#){display:grid}.group-hover\\:border-body:is(:where(.group):hover *):not(#\\#){border-color:var(--color-body)}.group-hover\\:border-negative-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-negative-text)}.group-hover\\:border-positive-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-positive-text)}.group-hover\\:border-warning-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-warning-text)}.group-hover\\:bg-grey-400:is(:where(.group):hover *):not(#\\#){background-color:var(--color-grey-400)}.group-hover\\:bg-negative-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-negative-hover)}.group-hover\\:bg-negative-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-negative-light)}.group-hover\\:bg-positive-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-positive-hover)}.group-hover\\:bg-positive-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-positive-light)}.group-hover\\:bg-primary-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-primary-hover)}.group-hover\\:bg-primary-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-primary-light)}.group-hover\\:bg-warning-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-warning-hover)}.group-hover\\:bg-warning-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-warning-light)}.group-hover\\:opacity-100:is(:where(.group):hover *):not(#\\#){opacity:1}}.placeholder\\:text-sm:not(#\\#)::placeholder{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.placeholder\\:text-xs:not(#\\#)::placeholder{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.placeholder\\:text-s:not(#\\#)::placeholder{font-size:var(--text-s)}.placeholder\\:text-input-placeholder:not(#\\#)::placeholder{color:var(--color-input-placeholder)}.placeholder\\:opacity-60:not(#\\#)::placeholder{opacity:.6}.first\\:bottom-full:first-child:not(#\\#){bottom:100%}.first\\:-ml-1\\.5:first-child:not(#\\#){margin-left:calc(var(--spacing) * -1.5)}.first\\:rounded-t:first-child:not(#\\#){border-top-left-radius:.25rem;border-top-right-radius:.25rem}.first\\:rounded-l:first-child:not(#\\#){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.last\\:top-full:last-child:not(#\\#){top:100%}.last\\:-mr-1\\.5:last-child:not(#\\#){margin-right:calc(var(--spacing) * -1.5)}.last\\:rounded-r:last-child:not(#\\#){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.last\\:rounded-b:last-child:not(#\\#){border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.only\\:top-full:only-child:not(#\\#){top:100%}.only\\:-mx-0\\.5:only-child:not(#\\#){margin-inline:calc(var(--spacing) * -.5)}.only\\:rounded:only-child:not(#\\#){border-radius:.25rem}.only\\:ring-1:only-child:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:border-input-error-border:focus-within:not(#\\#){border-color:var(--color-input-error-border)}.focus-within\\:border-input-focus-border:focus-within:not(#\\#){border-color:var(--color-input-focus-border)}.focus-within\\:border-input-warning-border:focus-within:not(#\\#){border-color:var(--color-input-warning-border)}.focus-within\\:border-positive:focus-within:not(#\\#){border-color:var(--color-positive)}@media(hover:hover){.hover\\:border-canvas-default:hover:not(#\\#){border-color:var(--color-canvas-default)}.hover\\:border-canvas-subtle:hover:not(#\\#){border-color:var(--color-canvas-subtle)}.hover\\:border-negative-hover:hover:not(#\\#){border-color:var(--color-negative-hover)}.hover\\:border-positive-hover:hover:not(#\\#){border-color:var(--color-positive-hover)}.hover\\:border-primary-hover:hover:not(#\\#){border-color:var(--color-primary-hover)}.hover\\:border-warning-hover:hover:not(#\\#){border-color:var(--color-warning-hover)}.hover\\:bg-canvas-default:hover:not(#\\#){background-color:var(--color-canvas-default)}.hover\\:bg-canvas-subtle:hover:not(#\\#){background-color:var(--color-canvas-subtle)}.hover\\:bg-grey-500:hover:not(#\\#){background-color:var(--color-grey-500)}.hover\\:bg-grey-700:hover:not(#\\#){background-color:var(--color-grey-700)}.hover\\:bg-input-option-hover-bg:hover:not(#\\#){background-color:var(--color-input-option-hover-bg)}.hover\\:bg-negative:hover:not(#\\#){background-color:var(--color-negative)}.hover\\:bg-negative-hover:hover:not(#\\#){background-color:var(--color-negative-hover)}.hover\\:bg-positive:hover:not(#\\#){background-color:var(--color-positive)}.hover\\:bg-positive-hover:hover:not(#\\#){background-color:var(--color-positive-hover)}.hover\\:bg-primary:hover:not(#\\#){background-color:var(--color-primary)}.hover\\:bg-primary-600:hover:not(#\\#){background-color:var(--color-primary-600)}.hover\\:bg-primary-hover:hover:not(#\\#){background-color:var(--color-primary-hover)}.hover\\:bg-primary\\/20:hover:not(#\\#){background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/20:hover:not(#\\#){background-color:color-mix(in oklab,var(--color-primary) 20%,transparent)}}.hover\\:bg-transparent:hover:not(#\\#){background-color:#0000}.hover\\:bg-warning:hover:not(#\\#){background-color:var(--color-warning)}.hover\\:bg-warning-hover:hover:not(#\\#){background-color:var(--color-warning-hover)}.hover\\:text-body:hover:not(#\\#){color:var(--color-body)}.hover\\:text-button-text:hover:not(#\\#){color:var(--color-button-text)}.hover\\:text-grey-200:hover:not(#\\#){color:var(--color-grey-200)}.hover\\:text-negative-400:hover:not(#\\#){color:var(--color-negative-400)}.hover\\:text-positive-400:hover:not(#\\#){color:var(--color-positive-400)}.hover\\:text-positive-text:hover:not(#\\#){color:var(--color-positive-text)}.hover\\:text-primary:hover:not(#\\#){color:var(--color-primary)}.hover\\:text-primary-hover:hover:not(#\\#){color:var(--color-primary-hover)}.hover\\:text-tab-active-fg:hover:not(#\\#){color:var(--color-tab-active-fg)}.hover\\:decoration-current:hover:not(#\\#){text-decoration-color:currentColor}}.focus\\:bg-transparent:focus:not(#\\#){background-color:#0000}.focus\\:ring-2:focus:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-negative:focus:not(#\\#){--tw-ring-color:var(--color-negative)}.focus\\:ring-positive:focus:not(#\\#){--tw-ring-color:var(--color-positive)}.focus\\:ring-primary:focus:not(#\\#){--tw-ring-color:var(--color-primary)}.focus\\:ring-warning:focus:not(#\\#){--tw-ring-color:var(--color-warning)}.focus\\:ring-offset-0:focus:not(#\\#){--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus:not(#\\#){--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus:not(#\\#){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus\\:outline-hidden:focus:not(#\\#){outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-2:focus-visible:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-primary:focus-visible:not(#\\#){--tw-ring-color:var(--color-primary)}.focus-visible\\:ring-offset-2:focus-visible:not(#\\#){--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}:root:not(#\\#){--ws-primary-50:#f2ddff;--ws-primary-100:#edd0ff;--ws-primary-300:#d0acef;--ws-primary-400:#c190ea;--ws-primary-600:#935ebf;--ws-primary-800:#563374;--ws-primary-900:#381e4f;--ws-primary-950:#29133c;--ws-positive-50:#ecf9f2;--ws-positive-100:#d9f2e6;--ws-positive-300:#8ed9b3;--ws-positive-400:#68cd99;--ws-positive-700:#28734d;--ws-positive-800:#28734d;--ws-positive-900:#0d261a;--ws-positive-950:#07130d;--ws-warning-50:#fff7e6;--ws-warning-100:#ffefcc;--ws-warning-300:#fed066;--ws-warning-400:#fdc133;--ws-warning-700:#986a00;--ws-warning-800:#654700;--ws-warning-900:#332300;--ws-warning-950:#191200;--ws-negative-50:#feeeee;--ws-negative-100:#fcdcdc;--ws-negative-300:#f69797;--ws-negative-400:#f37575;--ws-negative-700:#9a3232;--ws-negative-800:#6e2222;--ws-negative-900:#431212;--ws-negative-950:#2e0a0a;--ws-grey-300:#535353;--ws-grey-400:#484848;--ws-grey-600:#3f3f3f;--ws-palette-primary-200:#e0c7f5;--ws-palette-primary-500:#b174e5;--ws-palette-primary-700:#75499a;--ws-button-bg:var(--vscode-button-background,var(--theia-button-background,var(--ws-palette-primary-500)));--ws-button-fg:var(--vscode-button-foreground,var(--theia-button-foreground,var(--ws-palette-white)));--ws-primary-default:var(--ws-button-bg);--ws-button-text:var(--ws-button-fg);--ws-primary-hover:var(--vscode-button-hoverBackground,var(--theia-button-hoverBackground,var(--ws-palette-primary-700)));--ws-primary-light:var(--vscode-editorInfo-foreground,var(--vscode-button-background,var(--theia-button-secondaryForeground,var(--theia-button-background,var(--ws-palette-primary-200)))));--ws-primary-dark:var(--vscode-editor-lineHighlightBackground,var(--vscode-button-foreground,var(--theia-button-secondaryBackground,var(--theia-button-foreground,var(--ws-palette-primary-700)))));--ws-primary-200:var(--ws-primary-light);--ws-primary-500:var(--ws-primary-default);--ws-primary-700:var(--ws-primary-hover);--ws-palette-positive-200:#b3e6cc;--ws-palette-positive-500:#42c080;--ws-palette-positive-600:#359a66;--ws-positive-dark:var(--vscode-gitDecoration-addedResourceForeground,var(--ws-palette-positive-600));--ws-positive-hover:var(--ws-positive-dark);--ws-positive-bg:var(--ws-palette-positive-100);--ws-positive-light:var(--ws-palette-positive-200);--ws-positive-border:var(--ws-positive-500);--ws-positive-text:var(--ws-positive-500);--ws-positive-500:var(--vscode-testing-iconPassed,var(--ws-palette-positive-500));--ws-positive-200:var(--ws-positive-light);--ws-positive-600:var(--ws-positive-dark);--ws-palette-warning-200:#fee099;--ws-palette-warning-500:#fdb100;--ws-palette-warning-600:#ca8e00;--ws-warning-hover:var(--ws-warning-600);--ws-warning-text:var(--ws-warning-500);--ws-warning-border:var(--ws-warning-500);--ws-warning-500:var(--vscode-list-warningForeground,var(--ws-palette-warning-500));--ws-warning-bg:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-500));--ws-warning-light:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-200));--ws-warning-dark:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-600));--ws-warning-200:var(--ws-warning-light);--ws-warning-600:var(--ws-warning-dark);--ws-palette-negative-200:#f9baba;--ws-palette-negative-500:#f05252;--ws-palette-negative-600:#c54242;--ws-negative-hover:var(--ws-negative-600);--ws-negative-text:var(--ws-negative-500);--ws-negative-500:var(--vscode-errorForeground,var(--ws-palette-negative-500));--ws-negative-light:var(--ws-palette-negative-200);--ws-negative-dark:var(--ws-palette-negative-600);--ws-negative-200:var(--ws-negative-light);--ws-negative-600:var(--ws-negative-dark);--ws-palette-white:#fff;--ws-palette-grey-50:#f1f5f9;--ws-palette-grey-100:#ccc;--ws-palette-grey-200:#888;--ws-palette-grey-300:#535353;--ws-palette-grey-400:#484848;--ws-palette-grey-500:#444;--ws-palette-grey-600:#3f3f3f;--ws-palette-grey-700:#393939;--ws-palette-grey-800:#383838;--ws-palette-grey-900:#262626;--ws-palette-grey-950:#151515;--ws-bg-default:var(--vscode-editor-background,var(--theia-editor-background,var(--ws-palette-white)));--ws-bg-foreground:var(--vscode-editor-foreground,var(--theia-editor-foreground,var(--ws-palette-grey-50)));--ws-grey-50:var(--ws-bg-foreground);--ws-grey-100:var(--vscode-panel-background,var(--theia-panel-background,var(--ws-palette-grey-100)));--ws-grey-200:var(--vscode-editor-background,var(--theia-editor-background,var(--ws-palette-grey-200)));--ws-grey-950:var(--vscode-panel-border,var(--theia-border-color,var(--ws-palette-grey-950)));--ws-grey-500:var(--vscode-descriptionForeground,var(--ws-palette-grey-500));--ws-grey-800:var(--vscode-descriptionForeground,var(--ws-palette-grey-800));--ws-card-bg:var(--vscode-editorGroupHeader-tabsBackground,var(--theia-editorGroupHeader-tabsBackground,var(--ws-palette-grey-900)));--ws-card-border:var(--vscode-editorGroupHeader-tabsBorder,var(--theia-editorGroupHeader-tabsBorder,var(--ws-palette-grey-50)));--ws-palette-input-bg:var(--ws-palette-grey-300);--ws-palette-input-border:var(--ws-palette-grey-300);--ws-palette-input-text:var(--ws-palette-grey-50);--ws-palette-input-placeholder:var(--ws-palette-grey-200);--ws-palette-input-focus-border:var(--ws-palette-grey-50);--ws-input-bg:var(--vscode-input-background,var(--vscode-editorWidget-background,var(--theia-input-background,var(--ws-palette-input-bg))));--ws-input-border:var(--vscode-input-border,var(--vscode-panel-border,var(--theia-input-border,var(--ws-palette-input-border))));--ws-input-text:var(--vscode-input-foreground,var(--vscode-editor-foreground,var(--theia-input-foreground,var(--ws-palette-input-text))));--ws-input-placeholder:var(--vscode-input-placeholderForeground,var(--vscode-editor-foreground,var(--theia-input-placeholderForeground,var(--ws-palette-input-placeholder))));--ws-input-focus-border:var(--vscode-focusBorder,var(--vscode-button-background,var(--theia-focusBorder,var(--ws-palette-primary-500))));--ws-select-bg:var(--vscode-dropdown-background,var(--vscode-editorWidget-background,var(--theia-dropdown-background,var(--ws-input-bg))));--ws-select-border:var(--vscode-dropdown-border,var(--vscode-panel-border,var(--theia-dropdown-border,var(--ws-input-border))));--ws-select-text:var(--vscode-dropdown-foreground,var(--vscode-editor-foreground,var(--theia-dropdown-foreground,var(--ws-input-text))));--ws-select-list-bg:var(--vscode-dropdown-listBackground,var(--vscode-editorWidget-background,var(--theia-editorWidget-background,var(--ws-palette-grey-900))));--ws-input-option-hover-bg:var(--vscode-list-hoverBackground,var(--vscode-button-hoverBackground,var(--theia-list-hoverBackground,var(--ws-palette-primary-700))));--ws-input-option-active-bg:var(--vscode-list-activeSelectionBackground,var(--theia-list-activeSelectionBackground,var(--ws-palette-primary-500)));--ws-input-option-active-text:var(--vscode-list-activeSelectionForeground,var(--theia-list-activeSelectionForeground,var(--ws-palette-white)));--ws-input-error-border:var(--vscode-inputValidation-errorBorder,var(--theia-inputValidation-errorBorder,var(--ws-palette-negative-500)));--ws-input-error-bg:var(--vscode-inputValidation-errorBackground,var(--theia-inputValidation-errorBackground,var(--ws-palette-negative-200)));--ws-input-warning-border:var(--vscode-inputValidation-warningBorder,var(--theia-inputValidation-warningBorder,var(--ws-palette-warning-500)));--ws-input-warning-bg:var(--vscode-inputValidation-warningBackground,var(--theia-inputValidation-warningBackground,var(--ws-palette-warning-200)));--ws-input-info-bg:var(--vscode-panel-background,var(--theia-inputValidation-infoBackground,var(--ws-palette-primary-200)));--ws-input-message-bg:var(--vscode-editor-lineHighlightBackground,var(--vscode-editorWidget-background,var(--theia-inputValidation-infoBackground,var(--ws-palette-primary-200))));--ws-input-message-text:var(--vscode-editorInfo-foreground,var(--vscode-editor-foreground,var(--theia-inputValidation-infoForeground,var(--ws-palette-primary-500))));--ws-inactive-text:var(--vscode-disabledForeground,var(--theia-disabled-foreground,var(--ws-palette-grey-200)));--ws-text-muted:var(--vscode-descriptionForeground,var(--vscode-editor-foreground,var(--theia-descriptionForeground,var(--ws-palette-grey-100))));--ws-disable-bg:var(--vscode-button-disabledBackground,var(--theia-button-disabledBackground,var(--ws-palette-grey-300)));--ws-disable-input:var(--vscode-button-disabledBackground,var(--theia-button-disabledBackground,var(--ws-palette-grey-200)));--ws-panel-base-ide:var(--vscode-editor-background,var(--theia-editor-background));--ws-panel-shift-ide:var(--vscode-editor-foreground,var(--theia-panel-foreground));--ws-panel-0-mix:var(--ws-panel-base-ide);--ws-panel-1-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-1-mix:color-mix(in srgb, var(--ws-panel-base-ide) 96%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-2-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-2-mix:color-mix(in srgb, var(--ws-panel-base-ide) 92%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-3-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-3-mix:color-mix(in srgb, var(--ws-panel-base-ide) 88%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-4-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-4-mix:color-mix(in srgb, var(--ws-panel-base-ide) 84%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-5-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-5-mix:color-mix(in srgb, var(--ws-panel-base-ide) 80%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-light-mix:var(--ws-panel-base-ide)}@supports (color:color-mix(in lab,red,red)){:root:not(#\\#){--ws-panel-light-mix:color-mix(in srgb, var(--ws-panel-base-ide) 70%, var(--ws-panel-shift-ide))}}:root:not(#\\#){--ws-panel-0:var(--ws-panel-0-mix,var(--ws-palette-grey-900));--ws-panel-1:var(--ws-panel-1-mix,var(--ws-palette-grey-700));--ws-panel-2:var(--ws-panel-2-mix,var(--ws-palette-grey-900));--ws-panel-3:var(--ws-panel-3-mix,var(--ws-palette-grey-900));--ws-panel-4:var(--ws-panel-4-mix,var(--ws-palette-grey-300));--ws-panel-5:var(--ws-panel-5-mix,var(--ws-palette-grey-950));--ws-panel-light:var(--ws-panel-light-mix,var(--ws-palette-grey-200));--ws-panel-border-subtle:var(--vscode-panel-border,var(--vscode-tab-border,var(--theia-border-color,var(--ws-palette-grey-100))));--ws-panel-border-strong:var(--vscode-contrastBorder,var(--vscode-focusBorder,var(--theia-contrastBorder,var(--ws-palette-grey-300))));--ws-tab-bg-default:var(--vscode-editorGroupHeader-tabsBackground,var(--vscode-editorWidget-background,var(--ws-palette-grey-900)));--ws-tab-border:var(--vscode-tab-border,var(--vscode-editorGroupHeader-tabsBorder,var(--ws-palette-grey-950)));--ws-tab-active-bg:var(--vscode-tab-activeBackground,var(--ws-palette-grey-800));--ws-tab-active-fg:var(--vscode-tab-activeForeground,var(--vscode-editor-foreground,var(--ws-bg-foreground)));--ws-tab-inactive-bg:var(--vscode-tab-inactiveBackground,var(--ws-palette-grey-900));--ws-tab-inactive-fg:var(--vscode-tab-inactiveForeground,var(--vscode-descriptionForeground,var(--ws-palette-grey-200)));--ws-tab-hover-bg:var(--vscode-tab-hoverBackground,var(--vscode-toolbar-hoverBackground,var(--ws-palette-grey-700)));--ws-panel-header-bg:var(--vscode-sideBarSectionHeader-background,var(--vscode-editorGroupHeader-tabsBackground,var(--ws-palette-grey-800)));--ws-panel-header-fg:var(--vscode-sideBarSectionHeader-foreground,var(--vscode-editor-foreground,var(--ws-bg-foreground)));--ws-panel-bg:var(--vscode-panel-background,var(--vscode-editor-background,var(--ws-bg-default)));--ws-panel-border:var(--vscode-panel-border,var(--vscode-tab-border,var(--ws-palette-grey-950)));--ws-panel-title-active-border:var(--vscode-panelTitle-activeBorder,var(--vscode-focusBorder,var(--ws-palette-primary-500)));--ws-panel-title-active-fg:var(--vscode-panelTitle-activeForeground,var(--vscode-editor-foreground,var(--ws-bg-foreground)));--ws-panel-title-inactive-fg:var(--vscode-panelTitle-inactiveForeground,var(--vscode-descriptionForeground,var(--ws-palette-grey-100)))}.center-absolute:not(#\\#){--tw-translate-x: -50% ;--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y);transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);position:absolute;top:50%;left:50%}.ws-group:hover .ws-checkbox-hover-target{opacity:1!important}.simplebar-scrollbar:not(#\\#):before{background-color:#ccc}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-scrollbar-thumb{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-scrollbar-track{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging,[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:"";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{top:2px;bottom:2px;left:2px;right:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:0;bottom:0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}
`, document.head.prepend(e6);
  } catch (e6) {
    console.error("vite-plugin-inject-css: failed to inject css", e6);
  }
})();
const e2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M8.82 19.748c.001.245.075.486.214.69l.38 1.004c.117.172.573.312.758.41.185.097.391.148.601.148h2.454c.21 0 .417-.05.601-.148.185-.098.621-.238.737-.41l.402-1.003c.138-.205.213-.445.213-.691l.001-1.498H8.82l.002 1.498ZM5 8.875c0 1.733.654 3.314 1.732 4.522.658.737 1.685 2.275 2.077 3.573l.004.03h6.374l.004-.03c.392-1.298 1.42-2.836 2.076-3.573A6.766 6.766 0 0 0 19 8.875C19 5.07 15.854 1.988 11.978 2 7.921 2.012 5 5.241 5 8.875Z",
    fill: "currentColor"
  }
) }), t2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M21.66 6.28a.5.5 0 0 0 0-.697l-.967-.993a.5.5 0 0 0-.716 0L8.499 16.373 4.023 11.78a.5.5 0 0 0-.716 0l-.967.993a.5.5 0 0 0 0 .697l5.889 6.046.014-.014a.377.377 0 0 0 .54 0L21.66 6.28Z",
    fill: "currentColor"
  }
) }), r2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M10.84 2.714c0-.394.346-.714.773-.714h.774c.427 0 .773.32.773.714V9.5h5.025c.427 0 .773.32.773.714v3.572H5.042v-3.572c0-.394.346-.714.773-.714h5.025V2.714ZM5.042 14.5h13.916l1.034 6.685c.067.43-.295.815-.765.815h-2.1l-.681-5.929L15.764 22h-3.236l-.721-2.143L11.086 22h-2.85l-.682-3.929L6.872 22H4.773c-.47 0-.832-.385-.765-.815L5.042 14.5Z",
    fill: "currentColor"
  }
) }), es = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M4.497 5.361a.5.5 0 0 0 0 .707L10.429 12l-5.932 5.932a.5.5 0 0 0 0 .707l.864.864a.5.5 0 0 0 .707 0L12 13.571l5.932 5.932a.5.5 0 0 0 .707 0l.864-.864a.5.5 0 0 0 0-.707L13.571 12l5.932-5.932a.5.5 0 0 0 0-.707l-.864-.864a.5.5 0 0 0-.707 0L12 10.429 6.068 4.497a.5.5 0 0 0-.707 0l-.864.864Z",
    fill: "currentColor"
  }
) }), n2 = (e6) => /* @__PURE__ */ __mf_2("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: [
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M7.105 12.87a.47.47 0 0 0 .003.689l3.713 3.491.027.027.768.722a.528.528 0 0 0 .407.14.523.523 0 0 0 .32-.143l.761-.73a.513.513 0 0 0 .025-.024l3.682-3.529a.47.47 0 0 0-.003-.688l-.768-.722a.533.533 0 0 0-.726.003l-3.346 3.206-3.377-3.174a.533.533 0 0 0-.725.003l-.761.73Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M7.105 6.87a.47.47 0 0 0 .003.689l3.713 3.491.027.027.768.722a.528.528 0 0 0 .407.14.523.523 0 0 0 .32-.143l.761-.73a.513.513 0 0 0 .025-.025l3.682-3.528a.47.47 0 0 0-.003-.688l-.768-.722a.533.533 0 0 0-.726.003l-3.346 3.206L8.59 6.138a.533.533 0 0 0-.725.003l-.761.73Z",
      fill: "currentColor"
    }
  )
] }), i2 = (e6) => /* @__PURE__ */ __mf_2("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: [
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M16.811 11.031a.47.47 0 0 0-.003-.688l-3.714-3.491a.485.485 0 0 0-.026-.027l-.768-.722a.528.528 0 0 0-.408-.14.524.524 0 0 0-.32.143l-.76.73a.518.518 0 0 0-.025.025l-3.682 3.528a.47.47 0 0 0 .003.688l.768.722c.201.19.526.188.725-.003l3.347-3.206 3.377 3.174c.2.19.526.188.725-.003l.761-.73Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M16.811 17.032a.47.47 0 0 0-.003-.689l-3.714-3.491a.514.514 0 0 0-.026-.027l-.768-.722a.528.528 0 0 0-.408-.139.523.523 0 0 0-.32.142l-.76.73a.563.563 0 0 0-.025.025l-3.682 3.528a.47.47 0 0 0 .003.688l.768.722c.201.19.526.188.725-.003l3.347-3.206 3.377 3.174c.2.19.526.188.725-.003l.761-.73Z",
      fill: "currentColor"
    }
  )
] }), _c = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M11.701 18.797c.206.195.52.195.726 0l2.487-2.349-.008-.007 6.973-6.585a.58.58 0 0 0 0-.835l-2.045-1.932a.524.524 0 0 0-.726 0l-7.052 6.66-7.051-6.66a.524.524 0 0 0-.726 0L2.234 9.021a.58.58 0 0 0 0 .835l9.467 8.941Z",
    fill: "currentColor"
  }
) }), Jf = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5v4h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H12V8.5Z",
    fill: "currentColor"
  }
) }), o2 = (e6) => /* @__PURE__ */ __mf_2("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: [
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M13 17.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v8ZM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ __mf_1(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
      fill: "currentColor"
    }
  )
] }), s2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M21.5 10.889a.5.5 0 0 1 .5.5v1.222a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V11.39a.5.5 0 0 1 .5-.5h19Z",
    fill: "currentColor"
  }
) }), ew = (e6) => /* @__PURE__ */ __mf_2("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: [
  /* @__PURE__ */ __mf_1(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.7 6.7v13.6h13.6v-8.925c0-.235.19-.425.425-.425h.85c.235 0 .425.19.425.425v9.775c0 .47-.38.85-.85.85H2.85a.85.85 0 0 1-.85-.85V5.85c0-.47.38-.85.85-.85h9.775c.235 0 .425.19.425.425v.85c0 .235-.19.425-.425.425H3.7Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ __mf_1(
    "path",
    {
      d: "M21.435 2.01a.468.468 0 0 1 .554.555L20.42 9.757a.454.454 0 0 1-.77.215l-1.555-1.555-3.453 3.453a.444.444 0 0 1-.628 0L12.13 9.986a.444.444 0 0 1 0-.628l3.453-3.453-1.555-1.555a.454.454 0 0 1 .215-.77l7.192-1.57Z",
      fill: "currentColor"
    }
  )
] }), a2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M11.389 2a.5.5 0 0 0-.5.5v8.389H2.5a.5.5 0 0 0-.5.5v1.222a.5.5 0 0 0 .5.5h8.389V21.5a.5.5 0 0 0 .5.5h1.222a.5.5 0 0 0 .5-.5v-8.389H21.5a.5.5 0 0 0 .5-.5V11.39a.5.5 0 0 0-.5-.5h-8.389V2.5a.5.5 0 0 0-.5-.5H11.39Z",
    fill: "currentColor"
  }
) }), l2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M20.673 5.133c.136.24.053.55-.185.69l-16.25 9.623a.487.487 0 0 1-.676-.18l-.497-.884a.513.513 0 0 1 .185-.69L19.5 4.069c.238-.141.54-.06.676.18l.497.884ZM20.938 9.657c.136.24.053.55-.185.69L7.925 17.944a.487.487 0 0 1-.676-.181l-.497-.884a.513.513 0 0 1 .185-.69l12.829-7.597c.237-.14.54-.06.675.181l.497.884ZM20.16 15.376c.237-.14.32-.45.184-.69l-.497-.884a.487.487 0 0 0-.676-.18l-7.695 4.556a.513.513 0 0 0-.185.69l.498.884c.135.24.437.322.675.181l7.695-4.557Z",
    fill: "currentColor"
  }
) }), c2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    d: "M18.797 12.299a.524.524 0 0 0 0-.726l-2.349-2.487-.007.008L9.856 2.12a.58.58 0 0 0-.835 0L7.089 4.166a.524.524 0 0 0 0 .726l6.66 7.051-6.66 7.053a.524.524 0 0 0 0 .725l1.932 2.045a.58.58 0 0 0 .835 0l8.941-9.467Z",
    fill: "currentColor"
  }
) }), u2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm1 15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7ZM11 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
    fill: "currentColor"
  }
) }), d2 = (e6) => /* @__PURE__ */ __mf_2("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: [
  /* @__PURE__ */ __mf_1("path", { fill: "#fff", d: "M8 5h8v14H8z" }),
  /* @__PURE__ */ __mf_1(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      fill: "currentColor"
    }
  )
] }), f2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.076 2.203a.5.5 0 0 0-.354-.146H3.001a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.335a.5.5 0 0 0-.147-.354l-5.778-5.778ZM12 19.057a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8-14.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-4Z",
    fill: "currentColor"
  }
) }), p2 = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.774 15.7A7.513 7.513 0 0 1 4.2 4.2a7.511 7.511 0 0 1 10.623 0 7.515 7.515 0 0 1 .876 9.573l6.01 6.01a.995.995 0 0 1 0 1.407l-.52.519a.995.995 0 0 1-1.406 0l-6.009-6.01Zm-1.076-3a4.507 4.507 0 1 1-6.373-6.374 4.507 4.507 0 0 1 6.373 6.373Z",
    fill: "currentColor"
  }
) }), Bp = (e6) => /* @__PURE__ */ __mf_1("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e6, children: /* @__PURE__ */ __mf_1(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.953 3.53c-.393-.707-1.513-.707-1.906 0L2.114 19.612c-.354.638.16 1.388.953 1.388h17.866c.792 0 1.307-.75.953-1.388L12.953 3.53ZM11.508 8a.504.504 0 0 0-.507.531l.491 8A.505.505 0 0 0 12 17c.269 0 .49-.205.508-.469l.492-8A.504.504 0 0 0 12.492 8h-.984ZM12 20c.561 0 1.016-.448 1.016-1s-.455-1-1.016-1c-.561 0-1.016.448-1.016 1s.455 1 1.016 1Z",
    fill: "currentColor"
  }
) }), h2 = (e6, t) => {
  const r = new Array(e6.length + t.length);
  for (let n = 0; n < e6.length; n++)
    r[n] = e6[n];
  for (let n = 0; n < t.length; n++)
    r[e6.length + n] = t[n];
  return r;
}, g2 = (e6, t) => ({
  classGroupId: e6,
  validator: t
}), tw = (e6 = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e6,
  validators: t,
  classGroupId: r
}), jc = "-", fm = [], v2 = "arbitrary..", m2 = (e6) => {
  const t = y2(e6), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e6;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return b2(i);
      const o = i.split(jc), l = o[0] === "" && o.length > 1 ? 1 : 0;
      return rw(o, l, t);
    },
    getConflictingClassGroupIds: (i, o) => {
      if (o) {
        const l = n[i], c = r[i];
        return l ? c ? h2(c, l) : l : c || fm;
      }
      return r[i] || fm;
    }
  };
}, rw = (e6, t, r) => {
  if (e6.length - t === 0)
    return r.classGroupId;
  const n = e6[t], i = r.nextPart.get(n);
  if (i) {
    const u = rw(e6, t + 1, i);
    if (u) return u;
  }
  const o = r.validators;
  if (o === null)
    return;
  const l = t === 0 ? e6.join(jc) : e6.slice(t).join(jc), c = o.length;
  for (let u = 0; u < c; u++) {
    const d = o[u];
    if (d.validator(l))
      return d.classGroupId;
  }
}, b2 = (e6) => e6.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e6.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? v2 + n : void 0;
})(), y2 = (e6) => {
  const {
    theme: t,
    classGroups: r
  } = e6;
  return w2(r, t);
}, w2 = (e6, t) => {
  const r = tw();
  for (const n in e6) {
    const i = e6[n];
    Wp(i, r, n, t);
  }
  return r;
}, Wp = (e6, t, r, n) => {
  const i = e6.length;
  for (let o = 0; o < i; o++) {
    const l = e6[o];
    x2(l, t, r, n);
  }
}, x2 = (e6, t, r, n) => {
  if (typeof e6 == "string") {
    S2(e6, t, r);
    return;
  }
  if (typeof e6 == "function") {
    _2(e6, t, r, n);
    return;
  }
  E2(e6, t, r, n);
}, S2 = (e6, t, r) => {
  const n = e6 === "" ? t : nw(t, e6);
  n.classGroupId = r;
}, _2 = (e6, t, r, n) => {
  if (O2(e6)) {
    Wp(e6(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(g2(r, e6));
}, E2 = (e6, t, r, n) => {
  const i = Object.entries(e6), o = i.length;
  for (let l = 0; l < o; l++) {
    const [c, u] = i[l];
    Wp(u, nw(t, c), r, n);
  }
}, nw = (e6, t) => {
  let r = e6;
  const n = t.split(jc), i = n.length;
  for (let o = 0; o < i; o++) {
    const l = n[o];
    let c = r.nextPart.get(l);
    c || (c = tw(), r.nextPart.set(l, c)), r = c;
  }
  return r;
}, O2 = (e6) => "isThemeGetter" in e6 && e6.isThemeGetter === true, k2 = (e6) => {
  if (e6 < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const i = (o, l) => {
    r[o] = l, t++, t > e6 && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let l = r[o];
      if (l !== void 0)
        return l;
      if ((l = n[o]) !== void 0)
        return i(o, l), l;
    },
    set(o, l) {
      o in r ? r[o] = l : i(o, l);
    }
  };
}, Qf = "!", pm = ":", A2 = [], hm = (e6, t, r, n, i) => ({
  modifiers: e6,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: i
}), T2 = (e6) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e6;
  let n = (i) => {
    const o = [];
    let l = 0, c = 0, u = 0, d;
    const g = i.length;
    for (let v = 0; v < g; v++) {
      const w = i[v];
      if (l === 0 && c === 0) {
        if (w === pm) {
          o.push(i.slice(u, v)), u = v + 1;
          continue;
        }
        if (w === "/") {
          d = v;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" ? l-- : w === "(" ? c++ : w === ")" && c--;
    }
    const f = o.length === 0 ? i : i.slice(u);
    let h = f, b = false;
    f.endsWith(Qf) ? (h = f.slice(0, -1), b = true) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Qf) && (h = f.slice(1), b = true)
    );
    const x = d && d > u ? d - u : void 0;
    return hm(o, b, h, x);
  };
  if (t) {
    const i = t + pm, o = n;
    n = (l) => l.startsWith(i) ? o(l.slice(i.length)) : hm(A2, false, l, void 0, true);
  }
  if (r) {
    const i = n;
    n = (o) => r({
      className: o,
      parseClassName: i
    });
  }
  return n;
}, R2 = (e6) => {
  const t = /* @__PURE__ */ new Map();
  return e6.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let i = [];
    for (let o = 0; o < r.length; o++) {
      const l = r[o], c = l[0] === "[", u = t.has(l);
      c || u ? (i.length > 0 && (i.sort(), n.push(...i), i = []), n.push(l)) : i.push(l);
    }
    return i.length > 0 && (i.sort(), n.push(...i)), n;
  };
}, C2 = (e6) => ({
  cache: k2(e6.cacheSize),
  parseClassName: T2(e6),
  sortModifiers: R2(e6),
  postfixLookupClassGroupIds: I2(e6),
  ...m2(e6)
}), I2 = (e6) => {
  const t = /* @__PURE__ */ Object.create(null), r = e6.postfixLookupClassGroups;
  if (r)
    for (let n = 0; n < r.length; n++)
      t[r[n]] = true;
  return t;
}, P2 = /\s+/, N2 = (e6, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: o,
    postfixLookupClassGroupIds: l
  } = t, c = [], u = e6.trim().split(P2);
  let d = "";
  for (let g = u.length - 1; g >= 0; g -= 1) {
    const f = u[g], {
      isExternal: h,
      modifiers: b,
      hasImportantModifier: x,
      baseClassName: v,
      maybePostfixModifierPosition: w
    } = r(f);
    if (h) {
      d = f + (d.length > 0 ? " " + d : d);
      continue;
    }
    let m = !!w, y;
    if (m) {
      const $ = v.substring(0, w);
      y = n($);
      const T = y && l[y] ? n(v) : void 0;
      T && T !== y && (y = T, m = false);
    } else
      y = n(v);
    if (!y) {
      if (!m) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (y = n(v), !y) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      m = false;
    }
    const S = b.length === 0 ? "" : b.length === 1 ? b[0] : o(b).join(":"), O = x ? S + Qf : S, E = O + y;
    if (c.indexOf(E) > -1)
      continue;
    c.push(E);
    const A = i(y, m);
    for (let $ = 0; $ < A.length; ++$) {
      const T = A[$];
      c.push(O + T);
    }
    d = f + (d.length > 0 ? " " + d : d);
  }
  return d;
}, M2 = (...e6) => {
  let t = 0, r, n, i = "";
  for (; t < e6.length; )
    (r = e6[t++]) && (n = iw(r)) && (i && (i += " "), i += n);
  return i;
}, iw = (e6) => {
  if (typeof e6 == "string")
    return e6;
  let t, r = "";
  for (let n = 0; n < e6.length; n++)
    e6[n] && (t = iw(e6[n])) && (r && (r += " "), r += t);
  return r;
}, gm = (e6, ...t) => {
  let r, n, i, o;
  const l = (u) => {
    const d = t.reduce((g, f) => f(g), e6());
    return r = C2(d), n = r.cache.get, i = r.cache.set, o = c, c(u);
  }, c = (u) => {
    const d = n(u);
    if (d)
      return d;
    const g = N2(u, r);
    return i(u, g), g;
  };
  return o = l, (...u) => o(M2(...u));
}, D2 = [], Ht = (e6) => {
  const t = (r) => r[e6] || D2;
  return t.isThemeGetter = true, t;
}, ow = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sw = /^\((?:(\w[\w-]*):)?(.+)\)$/i, z2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, L2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, F2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, H2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, j2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mi = (e6) => z2.test(e6), Fe = (e6) => !!e6 && !Number.isNaN(Number(e6)), wn = (e6) => !!e6 && Number.isInteger(Number(e6)), qd = (e6) => e6.endsWith("%") && Fe(e6.slice(0, -1)), Kn = (e6) => L2.test(e6), aw = () => true, B2 = (e6) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $2.test(e6) && !F2.test(e6)
), Vp = () => false, W2 = (e6) => H2.test(e6), V2 = (e6) => j2.test(e6), U2 = (e6) => !be(e6) && !we(e6), q2 = (e6) => e6.startsWith("@container") && (e6[10] === "/" && e6[11] !== void 0 || e6[11] === "s" && e6[16] !== void 0 && e6.startsWith("-size/", 10) || e6[11] === "n" && e6[18] !== void 0 && e6.startsWith("-normal/", 10)), G2 = (e6) => Ii(e6, uw, Vp), be = (e6) => ow.test(e6), qi = (e6) => Ii(e6, dw, B2), vm = (e6) => Ii(e6, t5, Fe), Z2 = (e6) => Ii(e6, pw, aw), K2 = (e6) => Ii(e6, fw, Vp), mm = (e6) => Ii(e6, lw, Vp), Y2 = (e6) => Ii(e6, cw, V2), Bl = (e6) => Ii(e6, hw, W2), we = (e6) => sw.test(e6), Cs = (e6) => ao(e6, dw), X2 = (e6) => ao(e6, fw), bm = (e6) => ao(e6, lw), J2 = (e6) => ao(e6, uw), Q2 = (e6) => ao(e6, cw), Wl = (e6) => ao(e6, hw, true), e5 = (e6) => ao(e6, pw, true), Ii = (e6, t, r) => {
  const n = ow.exec(e6);
  return n ? n[1] ? t(n[1]) : r(n[2]) : false;
}, ao = (e6, t, r = false) => {
  const n = sw.exec(e6);
  return n ? n[1] ? t(n[1]) : r : false;
}, lw = (e6) => e6 === "position" || e6 === "percentage", cw = (e6) => e6 === "image" || e6 === "url", uw = (e6) => e6 === "length" || e6 === "size" || e6 === "bg-size", dw = (e6) => e6 === "length", t5 = (e6) => e6 === "number", fw = (e6) => e6 === "family-name", pw = (e6) => e6 === "number" || e6 === "weight", hw = (e6) => e6 === "shadow", ym = () => {
  const e6 = Ht("color"), t = Ht("font"), r = Ht("text"), n = Ht("font-weight"), i = Ht("tracking"), o = Ht("leading"), l = Ht("breakpoint"), c = Ht("container"), u = Ht("spacing"), d = Ht("radius"), g = Ht("shadow"), f = Ht("inset-shadow"), h = Ht("text-shadow"), b = Ht("drop-shadow"), x = Ht("blur"), v = Ht("perspective"), w = Ht("aspect"), m = Ht("ease"), y = Ht("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], O = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], E = () => [...O(), we, be], A = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", "contain", "none"], T = () => [we, be, u], D = () => [mi, "full", "auto", ...T()], j = () => [wn, "none", "subgrid", we, be], z = () => ["auto", {
    span: ["full", wn, we, be]
  }, wn, we, be], M = () => [wn, "auto", we, be], W = () => ["auto", "min", "max", "fr", we, be], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...T()], X = () => [mi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...T()], ne = () => [mi, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...T()], he = () => [mi, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...T()], N = () => [e6, we, be], F = () => [...O(), bm, mm, {
    position: [we, be]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], te = () => ["auto", "cover", "contain", J2, G2, {
    size: [we, be]
  }], Y = () => [qd, Cs, qi], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    we,
    be
  ], Q = () => ["", Fe, Cs, qi], ae = () => ["solid", "dashed", "dotted", "double"], de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ee = () => [Fe, qd, bm, mm], fe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    we,
    be
  ], Se = () => ["none", Fe, we, be], Z = () => ["none", Fe, we, be], Me = () => [Fe, we, be], ge = () => [mi, "full", ...T()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Kn],
      breakpoint: [Kn],
      color: [aw],
      container: [Kn],
      "drop-shadow": [Kn],
      ease: ["in", "out", "in-out"],
      font: [U2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Kn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Kn],
      shadow: [Kn],
      spacing: ["px", Fe],
      text: [Kn],
      "text-shadow": [Kn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", mi, be, we, w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", we, be]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [q2],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Fe, be, we, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: D()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: D()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: D()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": D()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [wn, "auto", we, be]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [mi, "full", "auto", c, ...T()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Fe, mi, "auto", "initial", "none", be]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Fe, we, be]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Fe, we, be]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [wn, "first", "last", "none", we, be]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": j()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": j()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: T()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": T()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": T()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...V(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...V()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": V()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: T()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: T()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: T()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: T()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: T()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: T()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: T()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: T()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: T()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: T()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: T()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: K()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": T()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": T()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: X()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...ne()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...ne()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...ne()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...he()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...he()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...he()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Cs, qi]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, e5, Z2]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qd, be]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [X2, K2, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [be]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, we, be]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Fe, "none", we, vm]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...T()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", we, be]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", we, be]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ae(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Fe, "from-font", "auto", we, qi]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Fe, "auto", we, be]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: T()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [wn, we, be]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", we, be]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", we, be]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: te()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, wn, we, be],
          radial: ["", we, be],
          conic: [wn, we, be]
        }, Q2, Y2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Q()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Q()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Q()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Q()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Q()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Q()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Q()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Q()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ae(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ae(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": N()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ae(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, we, be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Fe, Cs, qi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: N()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Wl,
          Bl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Wl, Bl]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Q()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Fe, qi]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Wl, Bl]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Fe, we, be]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...de(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": de()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Fe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ee()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ee()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": N()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": N()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ee()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ee()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": N()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": N()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ee()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ee()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": N()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": N()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ee()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ee()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": N()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": N()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ee()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ee()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": N()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": N()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ee()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ee()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": N()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": N()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ee()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ee()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": N()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": N()
      }],
      "mask-image-radial": [{
        "mask-radial": [we, be]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ee()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ee()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": N()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": N()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": O()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Fe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ee()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ee()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": N()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": N()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: te()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", we, be]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          we,
          be
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: fe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Fe, we, be]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Fe, we, be]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          b,
          Wl,
          Bl
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": N()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Fe, we, be]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Fe, we, be]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Fe, we, be]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Fe, we, be]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Fe, we, be]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          we,
          be
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": fe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Fe, we, be]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Fe, we, be]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Fe, we, be]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Fe, we, be]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Fe, we, be]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Fe, we, be]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Fe, we, be]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Fe, we, be]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": T()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": T()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": T()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", we, be]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Fe, "initial", we, be]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, we, be]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Fe, we, be]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, we, be]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, we, be]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Z()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Z()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Z()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Z()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Me()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [we, be, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ge()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ge()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ge()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ge()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [wn, we, be]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: N()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: N()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", we, be]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": N()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": N()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": T()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": T()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": T()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", we, be]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Fe, Cs, qi, vm]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, r5 = (e6, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: i = {},
  override: o = {}
}) => (Lo(e6, "cacheSize", t), Lo(e6, "prefix", r), Lo(e6, "experimentalParseClassName", n), Vl(e6.theme, o.theme), Vl(e6.classGroups, o.classGroups), Vl(e6.conflictingClassGroups, o.conflictingClassGroups), Vl(e6.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Lo(e6, "postfixLookupClassGroups", o.postfixLookupClassGroups), Lo(e6, "orderSensitiveModifiers", o.orderSensitiveModifiers), Ul(e6.theme, i.theme), Ul(e6.classGroups, i.classGroups), Ul(e6.conflictingClassGroups, i.conflictingClassGroups), Ul(e6.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ep(e6, i, "postfixLookupClassGroups"), ep(e6, i, "orderSensitiveModifiers"), e6), Lo = (e6, t, r) => {
  r !== void 0 && (e6[t] = r);
}, Vl = (e6, t) => {
  if (t)
    for (const r in t)
      Lo(e6, r, t[r]);
}, Ul = (e6, t) => {
  if (t)
    for (const r in t)
      ep(e6, t, r);
}, ep = (e6, t, r) => {
  const n = t[r];
  n !== void 0 && (e6[r] = e6[r] ? e6[r].concat(n) : n);
}, n5 = (e6, ...t) => typeof e6 == "function" ? gm(ym, e6, ...t) : gm(() => r5(ym(), e6), ...t);
function gw(e6) {
  return e6 && e6.__esModule && Object.prototype.hasOwnProperty.call(e6, "default") ? e6.default : e6;
}
var wm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xm;
function i5() {
  return xm || (xm = 1, (function(e6) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (o = i(o, n(c)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return r.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var c in o)
          t.call(o, c) && o[c] && (l = i(l, c));
        return l;
      }
      function i(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      e6.exports ? (r.default = r, e6.exports = r) : window.classNames = r;
    })();
  })(wm)), wm.exports;
}
var o5 = i5();
const s5 = /* @__PURE__ */ gw(o5), a5 = n5({
  extend: {
    classGroups: {
      "font-size": ["text-xxs", "text-xs", "text-s", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"],
      "text-color": [
        "text-body",
        "text-muted",
        "text-inactive-text",
        "text-button-text",
        "text-positive-text",
        "text-negative-text",
        "text-negative",
        "text-warning-text",
        "text-input-text",
        "text-select-text",
        "text-input-message-text",
        "text-placeholder"
      ]
    }
  }
});
function ce(...e6) {
  return a5(s5(e6));
}
const La = {
  sm: {
    checkbox: "size-4",
    hoverSquare: "size-2.5",
    text: "text-xs",
    spacing: "gap-1",
    icon: "size-3.25"
  },
  md: {
    checkbox: "size-5",
    hoverSquare: "size-3.5",
    text: "text-sm",
    spacing: "gap-1.5",
    icon: "size-4"
  },
  lg: {
    checkbox: "size-6",
    hoverSquare: "size-4",
    text: "text-base",
    spacing: "gap-2",
    icon: "size-5"
  }
}, Yr = {
  primary: {
    checked: "bg-primary border-primary",
    unchecked: "border border-body bg-transparent",
    checkedHover: "hover:bg-primary-hover hover:border-primary-hover",
    hoverSquare: "bg-primary-hover",
    focus: "focus:ring-primary",
    label: "text-body"
  },
  positive: {
    checked: "bg-positive border-positive",
    unchecked: "border border-positive bg-transparent",
    checkedHover: "hover:bg-positive-hover hover:border-positive-hover",
    hoverSquare: "bg-positive-hover",
    focus: "focus:ring-positive",
    label: "text-positive"
  },
  warning: {
    checked: "bg-warning border-warning",
    unchecked: "border border-warning bg-transparent",
    checkedHover: "hover:bg-warning-hover hover:border-warning-hover",
    hoverSquare: "bg-warning-hover",
    focus: "focus:ring-warning",
    label: "text-warning"
  },
  negative: {
    checked: "bg-negative border-negative",
    unchecked: "border border-negative bg-transparent",
    checkedHover: "hover:bg-negative-hover hover:border-negative-hover",
    hoverSquare: "bg-negative-hover",
    focus: "focus:ring-negative",
    label: "text-negative"
  }
}, l5 = `
  appearance-none border rounded transition-all duration-200
  focus:ring-2 focus:ring-offset-2 focus:outline-hidden
  relative shrink-0
`, c5 = (e6, t, r) => {
  const { isChecked: n, isIndeterminate: i, isDisabled: o, isInvalid: l } = r, c = n || i;
  return ce(
    l5,
    La[e6].checkbox,
    { "cursor-pointer": !o },
    l ? {
      // Invalid state uses negative color scheme
      [Yr.negative.checked]: c,
      [Yr.negative.unchecked]: !c,
      // Hover states (only when not disabled)
      [Yr.negative.checkedHover]: !o && c,
      // Focus and disabled states
      [Yr.negative.focus]: !o,
      "border-input-disable": o
    } : {
      // Checked/unchecked state styles
      [Yr[t].checked]: c && !o,
      [Yr[t].unchecked]: !c && !o,
      // Hover states (only when not disabled)
      [Yr[t].checkedHover]: !o && c,
      // Focus and disabled states
      [Yr[t].focus]: !o,
      "border-input-disable": o,
      "bg-input-disable": o && c
    }
  );
}, u5 = (e6, t, r) => {
  const { isDisabled: n, isInvalid: i } = r;
  return ce(
    La[e6].text,
    i ? {
      [Yr.negative.label]: i
    } : {
      "text-input-disable": n,
      [Yr[t].label]: !n,
      "cursor-pointer": !n
    }
  );
}, d5 = (e6) => ce(
  "inline-flex items-center ws-group",
  La[e6].spacing
), f5 = (e6, t, r) => ce(
  "center-absolute rounded-xs transition-all duration-200 opacity-0  ws-checkbox-hover-target",
  La[e6].hoverSquare,
  {
    [Yr.negative.hoverSquare]: r,
    [Yr[t].hoverSquare]: !r
  }
), p5 = (e6) => `${La[e6].icon}`, h5 = (e6) => /* @__PURE__ */ __mf_1(
  "svg",
  {
    className: `absolute inset-0 ${e6.className}`,
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e6,
    children: /* @__PURE__ */ __mf_1(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
        fill: "none"
      }
    )
  }
), g5 = __mf_13(
  ({
    label: e6,
    isDisabled: t = false,
    isInvalid: r = false,
    isRequired: n = false,
    size: i = "md",
    color: o = "primary",
    onChange: l,
    onFocus: c,
    onBlur: u,
    value: d,
    defaultValue: g,
    name: f,
    id: h,
    ...b
  }, x) => {
    const [v, w] = __mf_26(g), m = d === true || v === true, y = d === null, S = m || y, O = {
      isChecked: m,
      isIndeterminate: y,
      isDisabled: t,
      isInvalid: r
    }, E = c5(i, o, O), A = u5(i, o, O), $ = d5(i), T = f5(i, o, r), D = p5(i);
    return /* @__PURE__ */ __mf_2("label", { "data-qui": "Checkbox", className: $, children: [
      /* @__PURE__ */ __mf_2("div", { className: E, children: [
        /* @__PURE__ */ __mf_1(
          "input",
          {
            ref: x,
            type: "checkbox",
            className: "sr-only",
            checked: m,
            disabled: t,
            required: n,
            onChange: (j) => {
              d === void 0 && w(j.target.checked), l == null || l(j);
            },
            onFocus: c,
            onBlur: u,
            name: f,
            id: h,
            ...b
          }
        ),
        S && /* @__PURE__ */ __mf_1("div", { className: "center-absolute", children: y ? /* @__PURE__ */ __mf_1(h5, { className: D }) : /* @__PURE__ */ __mf_1(t2, { className: D }) }),
        !S && !t && /* @__PURE__ */ __mf_1("div", { className: T })
      ] }),
      e6 && /* @__PURE__ */ __mf_2("span", { className: A, children: [
        e6,
        n && /* @__PURE__ */ __mf_1("span", { className: "text-negative ml-1", children: "*" })
      ] })
    ] });
  }
);
g5.displayName = "Checkbox";
const $a = {
  sm: {
    container: "gap-2",
    radio: "size-3",
    label: "text-xs",
    dot: "size-2",
    hoverDot: "size-1.5"
  },
  md: {
    container: "gap-2.5",
    radio: "size-4",
    label: "text-sm",
    dot: "size-2.5",
    hoverDot: "size-2"
  },
  lg: {
    container: "gap-3",
    radio: "size-6",
    label: "text-base",
    dot: "size-4",
    hoverDot: "size-3"
  }
}, Oa = {
  primary: {
    radio: "border-body-light group-hover:border-body",
    radioInvalid: "border-negative",
    dot: "bg-primary group-hover:bg-primary-hover",
    hoverDot: "bg-primary-hover",
    label: "text-body"
  },
  positive: {
    radio: "border-positive group-hover:border-positive-text",
    radioInvalid: "border-negative",
    dot: "bg-positive group-hover:bg-positive-hover",
    hoverDot: "bg-positive-bg",
    label: "text-positive-text"
  },
  warning: {
    radio: "border-warning group-hover:border-warning-text",
    radioInvalid: "border-negative",
    dot: "bg-warning group-hover:bg-warning-hover",
    hoverDot: "bg-warning-bg",
    label: "text-warning-text"
  },
  negative: {
    radio: "border-negative group-hover:border-negative-text",
    radioInvalid: "border-negative",
    dot: "bg-negative group-hover:bg-negative-hover",
    hoverDot: "bg-negative-bg",
    label: "text-negative"
  }
}, v5 = `
  relative rounded-full border transition-all duration-200 ease-in-out bg-transparent
  focus:outline-hidden focus:ring-2 focus:ring-offset-0
  cursor-pointer peer
`, m5 = (e6, t, r) => {
  const { isDisabled: n, isInvalid: i } = r;
  return ce(
    v5,
    $a[e6].radio,
    i ? Oa[t].radioInvalid : {
      [Oa[t].radio]: !n,
      "cursor-not-allowed opacity-60": n
    }
  );
}, b5 = (e6, t, r) => {
  const { checked: n, isDisabled: i, isInvalid: o } = r;
  return ce(
    "center-absolute rounded-full transition-all duration-200 ease-in-out",
    $a[e6].dot,
    o ? "bg-negative" : {
      [Oa[t].dot]: !i,
      "border-neutral": i,
      "opacity-0 scale-0": !n,
      "opacity-100 scale-100": n && !i
    }
  );
}, y5 = (e6, t, r) => ce(
  "center-absolute rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100",
  $a[e6].hoverDot,
  {
    [Oa[t].hoverDot]: !r,
    "bg-negative-bg": r
  }
), w5 = (e6) => ce(
  "cursor-pointer select-none transition-colors duration-200",
  $a[e6].label
), x5 = (e6, t, r, n) => {
  const { isDisabled: i, isInvalid: o } = r;
  return ce(
    "inline-flex items-center group",
    $a[e6].container,
    o ? {
      "text-negative": o
    } : {
      [Oa[t].label]: !i,
      "text-muted": i
    },
    n
  );
}, S5 = __mf_9(null), _5 = () => {
  const e6 = __mf_18(S5);
  if (!e6)
    throw new Error("Radio.Item must be used within Radio.Group");
  return e6;
}, E5 = __mf_13(
  ({
    value: e6,
    label: t,
    size: r,
    color: n,
    isDisabled: i,
    isInvalid: o,
    isRequired: l,
    className: c,
    ...u
  }, d) => {
    const g = _5(), f = r ?? g.size, h = n ?? g.color, b = i ?? g.isDisabled, x = o ?? g.isInvalid, v = l ?? g.isRequired, w = g.value === e6, m = {
      checked: w,
      isDisabled: b,
      isInvalid: x
    }, y = m5(f, h, m), S = b5(f, h, m), O = y5(f, h, x), E = w5(f), A = x5(f, h, m, c), $ = () => {
      b || g.onChange(e6);
    };
    return /* @__PURE__ */ __mf_2("label", { "data-qui": "RadioItem", className: A, children: [
      /* @__PURE__ */ __mf_2("div", { className: ce("relative", { hidden: g.hideIndicator }), children: [
        /* @__PURE__ */ __mf_1(
          "input",
          {
            ref: d,
            type: "radio",
            value: e6,
            checked: w,
            disabled: b,
            required: v,
            "aria-invalid": x,
            "aria-label": t ? void 0 : u["aria-label"],
            name: g.name,
            onChange: $,
            className: "sr-only",
            ...u
          }
        ),
        /* @__PURE__ */ __mf_2("div", { className: y, children: [
          /* @__PURE__ */ __mf_1("div", { className: S }),
          !w && !b && /* @__PURE__ */ __mf_1("div", { className: O })
        ] })
      ] }),
      t && /* @__PURE__ */ __mf_2("span", { className: E, children: [
        t,
        v && /* @__PURE__ */ __mf_1("span", { className: "text-negative ml-1", children: "*" })
      ] })
    ] });
  }
);
E5.displayName = "RadioItem";
const vw = {
  sm: {
    container: "h-4.5 p-1 rounded",
    text: "text-xxs"
  },
  md: {
    container: "h-6 p-1 rounded",
    text: "text-s"
  },
  lg: {
    container: "h-7 p-1 rounded",
    text: "text-sm"
  },
  xl: {
    container: "h-7.5 p-1 rounded",
    text: "text-lg"
  }
}, O5 = {
  primary: {
    bg: {
      solid: "bg-primary",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-primary",
      ghost: "text-primary"
    },
    border: {
      solid: "border-primary",
      outline: "border-primary",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-primary-hover hover:border-primary-hover",
      outline: "hover:border-primary-hover hover:bg-primary hover:text-body",
      ghost: "hover:bg-primary-hover hover:text-body"
    }
  },
  white: {
    bg: {
      solid: "bg-body",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-primary",
      outline: "text-body",
      ghost: "text-body"
    },
    border: {
      solid: "border-body",
      outline: "border-body",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-canvas-subtle hover:border-canvas-subtle",
      outline: "hover:border-canvas-default hover:bg-canvas-default hover:text-primary",
      ghost: "hover:bg-primary-hover hover:text-body"
    }
  },
  positive: {
    bg: {
      solid: "bg-positive",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-positive-text",
      ghost: "text-positive-text"
    },
    border: {
      solid: "border-positive",
      outline: "border-positive",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-positive-hover hover:border-positive-hover",
      outline: "hover:border-positive-hover hover:bg-positive-hover hover:text-body",
      ghost: "hover:bg-positive-hover hover:text-body"
    }
  },
  warning: {
    bg: {
      solid: "bg-warning",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-warning-text",
      ghost: "text-warning-text"
    },
    border: {
      solid: "border-warning",
      outline: "border-warning",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-warning-hover hover:border-warning-hover",
      outline: "hover:border-warning-hover hover:bg-warning-hover hover:text-body",
      ghost: "hover:bg-warning-hover hover:text-body"
    }
  },
  negative: {
    bg: {
      solid: "bg-negative",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-negative",
      ghost: "text-negative"
    },
    border: {
      solid: "border-negative",
      outline: "border-negative",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-negative-hover hover:border-negative-hover",
      outline: "hover:border-negative-hover hover:bg-negative-hover hover:text-body",
      ghost: "hover:bg-negative-hover hover:text-body"
    }
  }
}, k5 = (e6, t, r, n) => {
  const i = vw[e6], o = O5[r], l = ce(
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-hidden border",
    { "cursor-pointer": !n },
    i.container
  );
  return n ? ce(l, "text-inactive-text pointer-events-none", {
    "border-panel": t !== "ghost" && t === "solid",
    "border-panel-subtle": t === "outline",
    "bg-panel": t === "solid",
    "bg-transparent ": t === "outline" || t === "ghost",
    "border-transparent": t === "ghost"
  }) : ce(
    l,
    o.bg[t],
    o.text[t],
    o.hover[t],
    o.border[t]
  );
}, A5 = (e6) => ce(
  "flex items-center justify-center gap-1",
  vw[e6].text
), Mn = __mf_13(
  ({
    size: e6 = "md",
    variant: t = "solid",
    color: r = "primary",
    className: n,
    children: i,
    disabled: o,
    ...l
  }, c) => /* @__PURE__ */ __mf_1(
    "button",
    {
      "data-qui": "Button",
      ref: c,
      type: "button",
      className: ce(
        k5(e6, t, r, o),
        A5(e6),
        n
      ),
      disabled: o,
      ...l,
      children: i
    }
  )
);
Mn.displayName = "Button";
const mw = __mf_9(null), Fa = () => {
  const e6 = __mf_18(mw);
  if (!e6)
    throw new Error("Input components must be used within Input.Root");
  return e6;
}, ts = {
  sm: {
    group: "h-5 min-h-fit",
    input: "text-xxs",
    message: "text-xxs p-1.5",
    icon: "text-sm"
  },
  md: {
    group: "h-6 min-h-fit",
    input: "text-xs",
    message: "text-xs p-2",
    icon: "text-base"
  },
  lg: {
    group: "h-7 min-h-fit",
    input: "text-s",
    message: "text-s p-2.5",
    icon: "text-lg"
  }
}, to = {
  primary: {
    border: "border border-input-border focus-within:border-input-focus-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-focus-border",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-input-message-text",
    messageBackground: "bg-input-message-bg",
    icon: "text-input-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  positive: {
    border: "border border-input-border focus-within:border-positive",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-positive",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-positive-dark",
    messageBackground: "bg-positive-light",
    icon: "text-positive-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  warning: {
    border: "border border-input-border focus-within:border-input-warning-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-warning-border",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-warning-dark",
    messageBackground: "bg-input-warning-bg",
    icon: "text-warning-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  negative: {
    border: "border border-input-border focus-within:border-input-error-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-error-border",
    text: "text-negative",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-negative-dark",
    messageBackground: "bg-input-error-bg",
    icon: "text-negative",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  }
}, T5 = () => ce("flex flex-col relative"), R5 = ({
  size: e6,
  color: t,
  isDisabled: r,
  isReadOnly: n,
  hasMessage: i,
  hasArea: o,
  isInvalid: l
}) => {
  const c = to[l ? "negative" : t];
  return ce(
    "bg-input-bg flex gap-1 relative px-1 transition-all duration-200 ease-in-out only:rounded first:rounded-t last:rounded-b",
    c.text,
    i ? c.borderMessage : !n && c.border,
    ts[e6].group,
    {
      "ring-1": i,
      "opacity-60": r,
      "items-center": !o
    }
  );
}, C5 = ({
  size: e6,
  color: t
}) => ce(
  "bg-transparent ring-0 w-full",
  "focus:outline-hidden",
  [ts[e6].input],
  to[t].placeholder
), Sm = ({
  size: e6,
  color: t
}) => ce(
  "bg-transparent ring-0 w-full h-fit resize-none py-0.5",
  "focus:outline-hidden",
  ts[e6].input,
  to[t].placeholder
), I5 = ({
  size: e6,
  color: t,
  isDisabled: r,
  isAction: n
}) => {
  const i = to[t];
  return ce(
    "transition-colors duration-200 rounded max-h-full h-fit",
    ts[e6].icon,
    e6 === "sm" ? "m-px" : "m-0.5",
    r ? "text-muted opacity-60 pointer-events-none" : n ? i.action : i.icon,
    {
      "cursor-pointer p-0.5": n && !r,
      [i.actionHover]: n && !r,
      "pointer-events-none": !n
    }
  );
}, P5 = ({
  size: e6,
  color: t,
  isDisabled: r,
  usePortal: n = false,
  portalPlacement: i = "bottom"
}) => ce(
  "flex items-start gap-x-2 ring-1",
  n ? i === "top" ? "rounded-t ring-b-0" : "rounded-b ring-t-0" : [
    "absolute left-0 right-0 z-10",
    "first:bottom-full first:rounded-t first:ring-b-0",
    "last:top-full last:rounded-b last:ring-t-0",
    "only:top-full only:rounded only:ring-1"
  ],
  r ? "text-muted" : to[t].messageText,
  to[t].borderMessage,
  to[t].messageBackground,
  ts[e6].message,
  { "opacity-60": r }
), N5 = ({ size: e6 }) => ce(ts[e6].icon);
function Bc(e6) {
  var t = typeof e6;
  return e6 != null && (t == "object" || t == "function");
}
var M5 = typeof global == "object" && global && global.Object === Object && global, D5 = typeof self == "object" && self && self.Object === Object && self, bw = M5 || D5 || Function("return this")(), Gd = function() {
  return bw.Date.now();
}, z5 = /\s/;
function L5(e6) {
  for (var t = e6.length; t-- && z5.test(e6.charAt(t)); )
    ;
  return t;
}
var $5 = /^\s+/;
function F5(e6) {
  return e6 && e6.slice(0, L5(e6) + 1).replace($5, "");
}
var Wc = bw.Symbol, yw = Object.prototype, H5 = yw.hasOwnProperty, j5 = yw.toString, Is = Wc ? Wc.toStringTag : void 0;
function B5(e6) {
  var t = H5.call(e6, Is), r = e6[Is];
  try {
    e6[Is] = void 0;
    var n = true;
  } catch {
  }
  var i = j5.call(e6);
  return n && (t ? e6[Is] = r : delete e6[Is]), i;
}
var W5 = Object.prototype, V5 = W5.toString;
function U5(e6) {
  return V5.call(e6);
}
var q5 = "[object Null]", G5 = "[object Undefined]", _m = Wc ? Wc.toStringTag : void 0;
function Z5(e6) {
  return e6 == null ? e6 === void 0 ? G5 : q5 : _m && _m in Object(e6) ? B5(e6) : U5(e6);
}
function K5(e6) {
  return e6 != null && typeof e6 == "object";
}
var Y5 = "[object Symbol]";
function X5(e6) {
  return typeof e6 == "symbol" || K5(e6) && Z5(e6) == Y5;
}
var Em = NaN, J5 = /^[-+]0x[0-9a-f]+$/i, Q5 = /^0b[01]+$/i, eI = /^0o[0-7]+$/i, tI = parseInt;
function Om(e6) {
  if (typeof e6 == "number")
    return e6;
  if (X5(e6))
    return Em;
  if (Bc(e6)) {
    var t = typeof e6.valueOf == "function" ? e6.valueOf() : e6;
    e6 = Bc(t) ? t + "" : t;
  }
  if (typeof e6 != "string")
    return e6 === 0 ? e6 : +e6;
  e6 = F5(e6);
  var r = Q5.test(e6);
  return r || eI.test(e6) ? tI(e6.slice(2), r ? 2 : 8) : J5.test(e6) ? Em : +e6;
}
var rI = "Expected a function", nI = Math.max, iI = Math.min;
function Ec(e6, t, r) {
  var n, i, o, l, c, u, d = 0, g = false, f = false, h = true;
  if (typeof e6 != "function")
    throw new TypeError(rI);
  t = Om(t) || 0, Bc(r) && (g = !!r.leading, f = "maxWait" in r, o = f ? nI(Om(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);
  function b(A) {
    var $ = n, T = i;
    return n = i = void 0, d = A, l = e6.apply(T, $), l;
  }
  function x(A) {
    return d = A, c = setTimeout(m, t), g ? b(A) : l;
  }
  function v(A) {
    var $ = A - u, T = A - d, D = t - $;
    return f ? iI(D, o - T) : D;
  }
  function w(A) {
    var $ = A - u, T = A - d;
    return u === void 0 || $ >= t || $ < 0 || f && T >= o;
  }
  function m() {
    var A = Gd();
    if (w(A))
      return y(A);
    c = setTimeout(m, v(A));
  }
  function y(A) {
    return c = void 0, h && n ? b(A) : (n = i = void 0, l);
  }
  function S() {
    c !== void 0 && clearTimeout(c), d = 0, n = u = i = c = void 0;
  }
  function O() {
    return c === void 0 ? l : y(Gd());
  }
  function E() {
    var A = Gd(), $ = w(A);
    if (n = arguments, i = this, u = A, $) {
      if (c === void 0)
        return x(u);
      if (f)
        return clearTimeout(c), c = setTimeout(m, t), b(u);
    }
    return c === void 0 && (c = setTimeout(m, t)), l;
  }
  return E.cancel = S, E.flush = O, E;
}
var oI = "Expected a function";
function sI(e6, t, r) {
  var n = true, i = true;
  if (typeof e6 != "function")
    throw new TypeError(oI);
  return Bc(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ec(e6, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var jo = function() {
  return jo = Object.assign || function(e6) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e6[i] = t[i]);
    }
    return e6;
  }, jo.apply(this, arguments);
};
function ww(e6) {
  return !e6 || !e6.ownerDocument || !e6.ownerDocument.defaultView ? window : e6.ownerDocument.defaultView;
}
function xw(e6) {
  return !e6 || !e6.ownerDocument ? document : e6.ownerDocument;
}
var Sw = function(e6) {
  var t = {}, r = Array.prototype.reduce.call(e6, function(n, i) {
    var o = i.name.match(/data-simplebar-(.+)/);
    if (o) {
      var l = o[1].replace(/\W+(.)/g, function(c, u) {
        return u.toUpperCase();
      });
      switch (i.value) {
        case "true":
          n[l] = true;
          break;
        case "false":
          n[l] = false;
          break;
        case void 0:
          n[l] = true;
          break;
        default:
          n[l] = i.value;
      }
    }
    return n;
  }, t);
  return r;
};
function _w(e6, t) {
  var r;
  e6 && (r = e6.classList).add.apply(r, t.split(" "));
}
function Ew(e6, t) {
  e6 && t.split(" ").forEach(function(r) {
    e6.classList.remove(r);
  });
}
function Ow(e6) {
  return ".".concat(e6.split(" ").join("."));
}
var Up = !!(typeof window < "u" && window.document && window.document.createElement), aI = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: _w,
  canUseDOM: Up,
  classNamesToQuery: Ow,
  getElementDocument: xw,
  getElementWindow: ww,
  getOptions: Sw,
  removeClasses: Ew
}), $o = null, km = null;
Up && window.addEventListener("resize", function() {
  km !== window.devicePixelRatio && (km = window.devicePixelRatio, $o = null);
});
function Am() {
  if ($o === null) {
    if (typeof document > "u")
      return $o = 0, $o;
    var e6 = document.body, t = document.createElement("div");
    t.classList.add("simplebar-hide-scrollbar"), e6.appendChild(t);
    var r = t.getBoundingClientRect().right;
    e6.removeChild(t), $o = r;
  }
  return $o;
}
var bi = ww, Zd = xw, lI = Sw, yi = _w, wi = Ew, gr = Ow, Ps = (
  /** @class */
  (function() {
    function e6(t, r) {
      r === void 0 && (r = {});
      var n = this;
      if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = false, this.isMouseEntering = false, this.isDragging = false, this.scrollXTicking = false, this.scrollYTicking = false, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {
      }, this.onWindowResize = function() {
      }, this.onStopScrolling = function() {
      }, this.onMouseEntered = function() {
      }, this.onScroll = function() {
        var i = bi(n.el);
        n.scrollXTicking || (i.requestAnimationFrame(n.scrollX), n.scrollXTicking = true), n.scrollYTicking || (i.requestAnimationFrame(n.scrollY), n.scrollYTicking = true), n.isScrolling || (n.isScrolling = true, yi(n.el, n.classNames.scrolling)), n.showScrollbar("x"), n.showScrollbar("y"), n.onStopScrolling();
      }, this.scrollX = function() {
        n.axis.x.isOverflowing && n.positionScrollbar("x"), n.scrollXTicking = false;
      }, this.scrollY = function() {
        n.axis.y.isOverflowing && n.positionScrollbar("y"), n.scrollYTicking = false;
      }, this._onStopScrolling = function() {
        wi(n.el, n.classNames.scrolling), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isScrolling = false;
      }, this.onMouseEnter = function() {
        n.isMouseEntering || (yi(n.el, n.classNames.mouseEntered), n.showScrollbar("x"), n.showScrollbar("y"), n.isMouseEntering = true), n.onMouseEntered();
      }, this._onMouseEntered = function() {
        wi(n.el, n.classNames.mouseEntered), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isMouseEntering = false;
      }, this._onMouseMove = function(i) {
        n.mouseX = i.clientX, n.mouseY = i.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1;
      }, this._onWindowResize = function() {
        n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar();
      }, this.onPointerEvent = function(i) {
        if (!(!n.axis.x.track.el || !n.axis.y.track.el || !n.axis.x.scrollbar.el || !n.axis.y.scrollbar.el)) {
          var o, l;
          n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (o = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (l = n.isWithinBounds(n.axis.y.track.rect)), (o || l) && (i.stopPropagation(), i.type === "pointerdown" && i.pointerType !== "touch" && (o && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(i, "x") : n.onTrackClick(i, "x")), l && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(i, "y") : n.onTrackClick(i, "y"))));
        }
      }, this.drag = function(i) {
        var o, l, c, u, d, g, f, h, b, x, v;
        if (!(!n.draggedAxis || !n.contentWrapperEl)) {
          var w, m = n.axis[n.draggedAxis].track, y = (l = (o = m.rect) === null || o === void 0 ? void 0 : o[n.axis[n.draggedAxis].sizeAttr]) !== null && l !== void 0 ? l : 0, S = n.axis[n.draggedAxis].scrollbar, O = (u = (c = n.contentWrapperEl) === null || c === void 0 ? void 0 : c[n.axis[n.draggedAxis].scrollSizeAttr]) !== null && u !== void 0 ? u : 0, E = parseInt((g = (d = n.elStyles) === null || d === void 0 ? void 0 : d[n.axis[n.draggedAxis].sizeAttr]) !== null && g !== void 0 ? g : "0px", 10);
          i.preventDefault(), i.stopPropagation(), n.draggedAxis === "y" ? w = i.pageY : w = i.pageX;
          var A = w - ((h = (f = m.rect) === null || f === void 0 ? void 0 : f[n.axis[n.draggedAxis].offsetAttr]) !== null && h !== void 0 ? h : 0) - n.axis[n.draggedAxis].dragOffset;
          A = n.draggedAxis === "x" && n.isRtl ? ((x = (b = m.rect) === null || b === void 0 ? void 0 : b[n.axis[n.draggedAxis].sizeAttr]) !== null && x !== void 0 ? x : 0) - S.size - A : A;
          var $ = A / (y - S.size), T = $ * (O - E);
          n.draggedAxis === "x" && n.isRtl && (T = !((v = e6.getRtlHelpers()) === null || v === void 0) && v.isScrollingToNegative ? -T : T), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = T;
        }
      }, this.onEndDrag = function(i) {
        n.isDragging = false;
        var o = Zd(n.el), l = bi(n.el);
        i.preventDefault(), i.stopPropagation(), wi(n.el, n.classNames.dragging), n.onStopScrolling(), o.removeEventListener("mousemove", n.drag, true), o.removeEventListener("mouseup", n.onEndDrag, true), n.removePreventClickId = l.setTimeout(function() {
          o.removeEventListener("click", n.preventClick, true), o.removeEventListener("dblclick", n.preventClick, true), n.removePreventClickId = null;
        });
      }, this.preventClick = function(i) {
        i.preventDefault(), i.stopPropagation();
      }, this.el = t, this.options = jo(jo({}, e6.defaultOptions), r), this.classNames = jo(jo({}, e6.defaultOptions.classNames), r.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      }, typeof this.el != "object" || !this.el.nodeName)
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      this.onMouseMove = sI(this._onMouseMove, 64), this.onWindowResize = Ec(this._onWindowResize, 64, { leading: true }), this.onStopScrolling = Ec(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = Ec(this._onMouseEntered, this.stopScrollDelay), this.init();
    }
    return e6.getRtlHelpers = function() {
      if (e6.rtlHelpers)
        return e6.rtlHelpers;
      var t = document.createElement("div");
      t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var r = t.firstElementChild, n = r == null ? void 0 : r.firstElementChild;
      if (!n)
        return null;
      document.body.appendChild(r), r.scrollLeft = 0;
      var i = e6.getOffset(r), o = e6.getOffset(n);
      r.scrollLeft = -999;
      var l = e6.getOffset(n);
      return document.body.removeChild(r), e6.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: i.left !== o.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: o.left !== l.left
      }, e6.rtlHelpers;
    }, e6.prototype.getScrollbarWidth = function() {
      try {
        return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Am();
      } catch {
        return Am();
      }
    }, e6.getOffset = function(t) {
      var r = t.getBoundingClientRect(), n = Zd(t), i = bi(t);
      return {
        top: r.top + (i.pageYOffset || n.documentElement.scrollTop),
        left: r.left + (i.pageXOffset || n.documentElement.scrollLeft)
      };
    }, e6.prototype.init = function() {
      Up && (this.initDOM(), this.rtlHelpers = e6.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e6.prototype.initDOM = function() {
      var t, r;
      this.wrapperEl = this.el.querySelector(gr(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(gr(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(gr(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(gr(this.classNames.offset)), this.maskEl = this.el.querySelector(gr(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, gr(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(gr(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(gr(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(gr(this.classNames.track)).concat(gr(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(gr(this.classNames.track)).concat(gr(this.classNames.vertical))), this.axis.x.scrollbar.el = ((t = this.axis.x.track.el) === null || t === void 0 ? void 0 : t.querySelector(gr(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((r = this.axis.y.track.el) === null || r === void 0 ? void 0 : r.querySelector(gr(this.classNames.scrollbar))) || null, this.options.autoHide || (yi(this.axis.x.scrollbar.el, this.classNames.visible), yi(this.axis.y.scrollbar.el, this.classNames.visible));
    }, e6.prototype.initListeners = function() {
      var t = this, r, n = bi(this.el);
      if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, true), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), (r = this.contentWrapperEl) === null || r === void 0 || r.addEventListener("scroll", this.onScroll), n.addEventListener("resize", this.onWindowResize), !!this.contentEl) {
        if (window.ResizeObserver) {
          var i = false, o = n.ResizeObserver || ResizeObserver;
          this.resizeObserver = new o(function() {
            i && n.requestAnimationFrame(function() {
              t.recalculate();
            });
          }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), n.requestAnimationFrame(function() {
            i = true;
          });
        }
        this.mutationObserver = new n.MutationObserver(function() {
          n.requestAnimationFrame(function() {
            t.recalculate();
          });
        }), this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    }, e6.prototype.recalculate = function() {
      if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
        var t = bi(this.el);
        this.elStyles = t.getComputedStyle(this.el), this.isRtl = this.elStyles.direction === "rtl";
        var r = this.contentEl.offsetWidth, n = this.heightAutoObserverEl.offsetHeight <= 1, i = this.heightAutoObserverEl.offsetWidth <= 1 || r > 0, o = this.contentWrapperEl.offsetWidth, l = this.elStyles.overflowX, c = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var u = this.contentEl.scrollHeight, d = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = n ? "auto" : "100%", this.placeholderEl.style.width = i ? "".concat(r || d, "px") : "auto", this.placeholderEl.style.height = "".concat(u, "px");
        var g = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = r !== 0 && d > r, this.axis.y.isOverflowing = u > g, this.axis.x.isOverflowing = l === "hidden" ? false : this.axis.x.isOverflowing, this.axis.y.isOverflowing = c === "hidden" ? false : this.axis.y.isOverflowing, this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true, this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true, this.hideNativeScrollbar();
        var f = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && d > o - h, this.axis.y.isOverflowing = this.axis.y.isOverflowing && u > g - f, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
      }
    }, e6.prototype.getScrollbarSize = function(t) {
      var r, n;
      if (t === void 0 && (t = "y"), !this.axis[t].isOverflowing || !this.contentEl)
        return 0;
      var i = this.contentEl[this.axis[t].scrollSizeAttr], o = (n = (r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) !== null && n !== void 0 ? n : 0, l = o / i, c;
      return c = Math.max(~~(l * o), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (c = Math.min(c, this.options.scrollbarMaxSize)), c;
    }, e6.prototype.positionScrollbar = function(t) {
      var r, n, i;
      t === void 0 && (t = "y");
      var o = this.axis[t].scrollbar;
      if (!(!this.axis[t].isOverflowing || !this.contentWrapperEl || !o.el || !this.elStyles)) {
        var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr], c = ((r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) || 0, u = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), d = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
        d = t === "x" && this.isRtl && !((n = e6.getRtlHelpers()) === null || n === void 0) && n.isScrollOriginAtZero ? -d : d, t === "x" && this.isRtl && (d = !((i = e6.getRtlHelpers()) === null || i === void 0) && i.isScrollingToNegative ? d : -d);
        var g = d / (l - u), f = ~~((c - o.size) * g);
        f = t === "x" && this.isRtl ? -f + (c - o.size) : f, o.el.style.transform = t === "x" ? "translate3d(".concat(f, "px, 0, 0)") : "translate3d(0, ".concat(f, "px, 0)");
      }
    }, e6.prototype.toggleTrackVisibility = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t].track.el, n = this.axis[t].scrollbar.el;
      !r || !n || !this.contentWrapperEl || (this.axis[t].isOverflowing || this.axis[t].forceVisible ? (r.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(t))) : (r.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(t))), this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none");
    }, e6.prototype.showScrollbar = function(t) {
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (yi(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = true);
    }, e6.prototype.hideScrollbar = function(t) {
      t === void 0 && (t = "y"), !this.isDragging && this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (wi(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = false);
    }, e6.prototype.hideNativeScrollbar = function() {
      this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px");
    }, e6.prototype.onMouseMoveForAxis = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t];
      !r.track.el || !r.scrollbar.el || (r.track.rect = r.track.el.getBoundingClientRect(), r.scrollbar.rect = r.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(r.track.rect) ? (this.showScrollbar(t), yi(r.track.el, this.classNames.hover), this.isWithinBounds(r.scrollbar.rect) ? yi(r.scrollbar.el, this.classNames.hover) : wi(r.scrollbar.el, this.classNames.hover)) : (wi(r.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t)));
    }, e6.prototype.onMouseLeaveForAxis = function(t) {
      t === void 0 && (t = "y"), wi(this.axis[t].track.el, this.classNames.hover), wi(this.axis[t].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t);
    }, e6.prototype.onDragStart = function(t, r) {
      var n;
      r === void 0 && (r = "y"), this.isDragging = true;
      var i = Zd(this.el), o = bi(this.el), l = this.axis[r].scrollbar, c = r === "y" ? t.pageY : t.pageX;
      this.axis[r].dragOffset = c - (((n = l.rect) === null || n === void 0 ? void 0 : n[this.axis[r].offsetAttr]) || 0), this.draggedAxis = r, yi(this.el, this.classNames.dragging), i.addEventListener("mousemove", this.drag, true), i.addEventListener("mouseup", this.onEndDrag, true), this.removePreventClickId === null ? (i.addEventListener("click", this.preventClick, true), i.addEventListener("dblclick", this.preventClick, true)) : (o.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e6.prototype.onTrackClick = function(t, r) {
      var n = this, i, o, l, c;
      r === void 0 && (r = "y");
      var u = this.axis[r];
      if (!(!this.options.clickOnTrack || !u.scrollbar.el || !this.contentWrapperEl)) {
        t.preventDefault();
        var d = bi(this.el);
        this.axis[r].scrollbar.rect = u.scrollbar.el.getBoundingClientRect();
        var g = this.axis[r].scrollbar, f = (o = (i = g.rect) === null || i === void 0 ? void 0 : i[this.axis[r].offsetAttr]) !== null && o !== void 0 ? o : 0, h = parseInt((c = (l = this.elStyles) === null || l === void 0 ? void 0 : l[this.axis[r].sizeAttr]) !== null && c !== void 0 ? c : "0px", 10), b = this.contentWrapperEl[this.axis[r].scrollOffsetAttr], x = r === "y" ? this.mouseY - f : this.mouseX - f, v = x < 0 ? -1 : 1, w = v === -1 ? b - h : b + h, m = 40, y = function() {
          n.contentWrapperEl && (v === -1 ? b > w && (b -= m, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = b, d.requestAnimationFrame(y)) : b < w && (b += m, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = b, d.requestAnimationFrame(y)));
        };
        y();
      }
    }, e6.prototype.getContentElement = function() {
      return this.contentEl;
    }, e6.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e6.prototype.removeListeners = function() {
      var t = bi(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, true), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel();
    }, e6.prototype.unMount = function() {
      this.removeListeners();
    }, e6.prototype.isWithinBounds = function(t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, e6.prototype.findChild = function(t, r) {
      var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      return Array.prototype.filter.call(t.children, function(i) {
        return n.call(i, r);
      })[0];
    }, e6.rtlHelpers = null, e6.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    }, e6.getOptions = lI, e6.helpers = aI, e6;
  })()
), Pr = function() {
  return Pr = Object.assign || function(e6) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e6[i] = t[i]);
    }
    return e6;
  }, Pr.apply(this, arguments);
};
function cI(e6, t) {
  var r = {};
  for (var n in e6) Object.prototype.hasOwnProperty.call(e6, n) && t.indexOf(n) < 0 && (r[n] = e6[n]);
  if (e6 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e6); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, n[i]) && (r[n[i]] = e6[n[i]]);
  return r;
}
var qp = __mf_13(function(e6, t) {
  var r = e6.children, n = e6.scrollableNodeProps, i = n === void 0 ? {} : n, o = cI(e6, ["children", "scrollableNodeProps"]), l = __mf_25(), c = __mf_25(), u = __mf_25(), d = {}, g = {};
  Object.keys(o).forEach(function(b) {
    Object.prototype.hasOwnProperty.call(Ps.defaultOptions, b) ? d[b] = o[b] : g[b] = o[b];
  });
  var f = Pr(Pr({}, Ps.defaultOptions.classNames), d.classNames), h = Pr(Pr({}, i), { className: "".concat(f.contentWrapper).concat(i.className ? " ".concat(i.className) : ""), tabIndex: d.tabIndex || Ps.defaultOptions.tabIndex, role: "region", "aria-label": d.ariaLabel || Ps.defaultOptions.ariaLabel });
  return __mf_20(function() {
    var b;
    return c.current = h.ref ? h.ref.current : c.current, l.current && (b = new Ps(l.current, Pr(Pr(Pr({}, d), c.current && {
      scrollableNode: c.current
    }), u.current && {
      contentNode: u.current
    })), typeof t == "function" ? t(b) : t && (t.current = b)), function() {
      b == null || b.unMount(), b = null, typeof t == "function" && t(null);
    };
  }, []), __mf_10(
    "div",
    Pr({ "data-simplebar": "init", ref: l }, g),
    __mf_10(
      "div",
      { className: f.wrapper },
      __mf_10(
        "div",
        { className: f.heightAutoObserverWrapperEl },
        __mf_10("div", { className: f.heightAutoObserverEl })
      ),
      __mf_10(
        "div",
        { className: f.mask },
        __mf_10("div", { className: f.offset }, typeof r == "function" ? r({
          scrollableNodeRef: c,
          scrollableNodeProps: Pr(Pr({}, h), { ref: c }),
          contentNodeRef: u,
          contentNodeProps: {
            className: f.contentEl,
            ref: u
          }
        }) : __mf_10(
          "div",
          Pr({}, h),
          __mf_10("div", { className: f.contentEl }, r)
        ))
      ),
      __mf_10("div", { className: f.placeholder })
    ),
    __mf_10(
      "div",
      { className: "".concat(f.track, " ").concat(f.horizontal) },
      __mf_10("div", { className: f.scrollbar })
    ),
    __mf_10(
      "div",
      { className: "".concat(f.track, " ").concat(f.vertical) },
      __mf_10("div", { className: f.scrollbar })
    )
  );
});
qp.displayName = "SimpleBar";
const kw = __mf_13(
  ({
    size: e6 = "md",
    color: t = "primary",
    isInvalid: r = false,
    isDisabled: n = false,
    isReadOnly: i = false,
    className: o,
    children: l,
    ...c
  }, u) => {
    const [d, g] = __mf_26(false), [f, h] = __mf_26(false), b = {
      size: e6,
      color: r ? "negative" : t,
      isInvalid: r,
      isDisabled: n,
      isReadOnly: i,
      hasMessage: d,
      setHasMessage: g,
      hasArea: f,
      setHasArea: h
    };
    return /* @__PURE__ */ __mf_1(mw.Provider, { value: b, children: /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: u,
        "data-qui": "Input",
        className: ce(T5(), o),
        ...c,
        children: l
      }
    ) });
  }
), Aw = __mf_13(
  ({ className: e6, children: t, ...r }, n) => {
    const {
      size: i,
      color: o,
      isDisabled: l,
      isReadOnly: c,
      hasMessage: u,
      hasArea: d,
      isInvalid: g
    } = Fa();
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: n,
        "data-qui": "InputGroup",
        className: ce(
          R5({
            size: i,
            color: o,
            isDisabled: l,
            isReadOnly: c,
            hasMessage: u,
            hasArea: d,
            isInvalid: g
          }),
          e6
        ),
        ...r,
        children: t
      }
    );
  }
), Tw = __mf_13(
  ({ className: e6, ...t }, r) => {
    const {
      size: n,
      color: i,
      isInvalid: o,
      isDisabled: l,
      isReadOnly: c
    } = Fa(), {
      isDisabled: u,
      isReadOnly: d,
      readOnly: g,
      tabIndex: f,
      onMouseDown: h,
      ...b
    } = t, x = d || c || g || false;
    return /* @__PURE__ */ __mf_1(
      "input",
      {
        ...b,
        ref: r,
        disabled: l || u,
        readOnly: x,
        tabIndex: x ? -1 : f,
        onMouseDown: (v) => {
          x && v.preventDefault(), h == null || h(v);
        },
        "aria-invalid": o,
        className: ce(
          C5({ size: n, color: i }),
          x && "cursor-default caret-transparent",
          e6
        )
      }
    );
  }
), uI = __mf_13(
  ({ className: e6, wrapperClassName: t, autoHeight: r, ...n }, i) => {
    const {
      size: o,
      color: l,
      isInvalid: c,
      isDisabled: u,
      isReadOnly: d,
      setHasArea: g
    } = Fa(), f = __mf_25(null), h = i || f, b = __mf_25(null);
    __mf_20(() => (g(true), () => {
      g(false);
    }), [g]);
    const x = __mf_17(() => {
      if (f.current) {
        const j = f.current;
        j.style.height = "auto", j.style.height = `${j.scrollHeight}px`;
      }
    }, []), {
      isDisabled: v,
      isReadOnly: w,
      onInput: m,
      readOnly: y,
      tabIndex: S,
      onMouseDown: O,
      ...E
    } = n, A = w || d || y || false, $ = (j) => {
      x(), m == null || m(j);
    }, T = (j) => {
      A && j.preventDefault(), O == null || O(j);
    };
    __mf_20(() => {
      x();
    }, [x, n.value]), __mf_20(() => {
      r && b.current && b.current.style.removeProperty("height");
    }, [r]);
    const D = (j) => {
      j.preventDefault();
      const z = b.current;
      if (!z) return;
      const M = j.clientY, W = z.offsetHeight, V = (K) => {
        const X = W + (K.clientY - M);
        X > 30 && (z.style.height = X + "px");
      }, P = () => {
        document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", V), document.addEventListener("mouseup", P);
    };
    return /* @__PURE__ */ __mf_2(
      "div",
      {
        ref: b,
        className: ce(
          "w-full relative",
          !r && !n.rows && "h-30",
          t
        ),
        children: [
          r ? /* @__PURE__ */ __mf_1(
            "textarea",
            {
              ...E,
              ref: h,
              rows: 1,
              className: ce(
                Sm({ size: o, color: l }),
                A && "cursor-default caret-transparent",
                e6
              ),
              disabled: u || v,
              onInput: $,
              onMouseDown: T,
              readOnly: A,
              tabIndex: A ? -1 : S,
              "aria-invalid": c,
              style: { overflow: "hidden" }
            }
          ) : /* @__PURE__ */ __mf_1(qp, { style: { height: "100%" }, children: /* @__PURE__ */ __mf_1(
            "textarea",
            {
              ...E,
              ref: h,
              rows: 1,
              className: ce(
                Sm({ size: o, color: l }),
                A && "cursor-default caret-transparent",
                e6
              ),
              disabled: u || v,
              onInput: $,
              onMouseDown: T,
              readOnly: A,
              tabIndex: A ? -1 : S,
              "aria-invalid": c,
              style: { height: "auto", overflow: "hidden", width: "100%" }
            }
          ) }),
          !r && /* @__PURE__ */ __mf_1(
            "div",
            {
              className: "absolute right-0 bottom-0 -translate-x-full -translate-y-full size-1.75 text-sm cursor-se-resize z-10",
              onMouseDown: D,
              children: /* @__PURE__ */ __mf_1(l2, {})
            }
          )
        ]
      }
    );
  }
), Rw = __mf_13(
  ({
    isAction: e6 = false,
    className: t,
    isDisabled: r = false,
    style: n,
    children: i,
    ...o
  }, l) => {
    const { size: c, color: u, isDisabled: d } = Fa(), g = r || d, f = I5({
      size: c,
      color: u,
      isDisabled: g,
      isAction: e6
    });
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: l,
        "data-qui": "InputIcon",
        className: ce(f, t),
        style: n,
        role: e6 || o.onClick ? "button" : void 0,
        tabIndex: (e6 || o.onClick) && !g ? 0 : void 0,
        "aria-disabled": g,
        ...o,
        children: i
      }
    );
  }
), dI = __mf_13(
  ({ icon: e6, usePortal: t = false, className: r, children: n, ...i }, o) => {
    const { size: l, color: c, setHasMessage: u, isDisabled: d } = Fa(), g = __mf_25(null), f = __mf_25("bottom"), [h, b] = __mf_26(null);
    __mf_20(() => (u(true), () => u(false)), [u]), __mf_20(() => {
      if (!t || !g.current) return;
      const w = g.current, m = w.closest(
        '[data-qui="Input"]'
      ), y = m == null ? void 0 : m.querySelector(
        '[data-qui="InputGroup"]'
      ), S = y || m;
      if (!S) return;
      const O = !!(y && w.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING);
      f.current = O ? "top" : "bottom";
      const E = () => {
        const $ = S.getBoundingClientRect();
        b({
          top: O ? $.top : $.bottom,
          left: $.left,
          width: $.width
        });
      };
      E();
      const A = new ResizeObserver(E);
      return A.observe(S), window.addEventListener("resize", E), window.addEventListener("scroll", E, true), () => {
        A.disconnect(), window.removeEventListener("resize", E), window.removeEventListener("scroll", E, true);
      };
    }, [t]);
    const x = f.current, v = /* @__PURE__ */ __mf_2(
      "div",
      {
        ref: o,
        "data-qui": "InputMessage",
        role: "alert",
        className: ce(
          P5({
            size: l,
            color: c,
            isDisabled: d,
            usePortal: t,
            portalPlacement: x
          }),
          r
        ),
        ...i,
        children: [
          e6 !== void 0 && /* @__PURE__ */ __mf_1("div", { className: ce(N5({ size: l })), children: e6 }),
          /* @__PURE__ */ __mf_1("p", { children: n })
        ]
      }
    );
    return t ? /* @__PURE__ */ __mf_2(__mf_0, { children: [
      /* @__PURE__ */ __mf_1("span", { ref: g, style: { display: "none" } }),
      h && __mf_1$1(
        /* @__PURE__ */ __mf_1(
          "div",
          {
            "data-qui": "InputMessagePortal",
            style: {
              position: "fixed",
              top: x === "top" ? void 0 : h.top,
              bottom: x === "top" ? `calc(100vh - ${h.top}px)` : void 0,
              left: h.left,
              width: h.width,
              zIndex: 50
            },
            children: v
          }
        ),
        document.body
      )
    ] }) : v;
  }
);
kw.displayName = "InputRoot";
Aw.displayName = "InputGroup";
Tw.displayName = "InputField";
uI.displayName = "InputArea";
Rw.displayName = "InputIcon";
dI.displayName = "InputMessage";
const Ns = {
  Root: kw,
  Group: Aw,
  Field: Tw,
  Icon: Rw
}, ka = {
  primary: {
    container: "bg-primary-light",
    text: "text-primary-dark",
    icon: "text-primary-dark",
    button: "hover:bg-primary-hover hover:text-body"
  },
  positive: {
    container: "bg-positive-light",
    text: "text-positive-dark",
    icon: "text-positive-dark",
    button: "hover:bg-positive hover:text-body"
  },
  negative: {
    container: "bg-negative-light",
    text: "text-negative-dark",
    icon: "text-negative-dark",
    button: "hover:bg-negative hover:text-body"
  },
  warning: {
    container: "bg-warning-light",
    text: "text-warning-dark",
    icon: "text-warning-dark",
    button: "hover:bg-warning hover:text-body"
  }
}, fI = ({ color: e6 }) => ce(
  "min-h-6 absolute py-0.5 px-1 rounded whitespace-nowrap flex items-center gap-1",
  ka[e6].container,
  ka[e6].icon
), pI = ({ color: e6 }) => ce(
  "text-xs font-medium leading-3",
  ka[e6].text
), hI = ({ color: e6 }) => ce(
  "p-0.5 rounded cursor-pointer",
  ka[e6].button,
  ka[e6].icon
), Cw = ({
  label: e6,
  color: t = "primary",
  position: r = "up",
  showCloseButton: n = false,
  icon: i,
  children: o,
  delay: l = 0,
  trigger: c = "hover",
  className: u,
  container: d,
  isHidden: g = false,
  usePortal: f = false,
  zIndex: h = 1e3
}) => {
  const [b, x] = __mf_26(false), [v, w] = __mf_26(false), [m, y] = __mf_26({
    position: r,
    transform: ""
  }), S = __mf_25(null), O = __mf_25(null), E = __mf_25(null), A = f || d != null, $ = b && !g;
  __mf_20(() => {
    $ || w(false);
  }, [$]);
  const T = __mf_17(() => {
    if (!S.current || !O.current) return;
    const F = S.current.getBoundingClientRect(), G = O.current.getBoundingClientRect(), te = window.innerWidth, Y = window.innerHeight, ie = window.scrollX, Q = window.scrollY, ae = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      te
    ), de = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      Y
    ), ee = 4;
    let fe = r, Se = {
      position: fe,
      transform: ""
    };
    const Z = (bt) => {
      const { top: Wt, left: Mt, width: Lt, height: ut } = F, dt = A ? Wt + Q : 0, qe = A ? Mt + ie : 0;
      switch (bt) {
        case "up":
          return {
            top: `${dt - G.height - ee}px`,
            left: `${qe + Lt / 2}px`,
            transform: "translateX(-50%)"
          };
        case "up-start":
          return {
            top: `${dt - G.height - ee}px`,
            left: `${qe}px`,
            transform: "translateX(0)"
          };
        case "up-end":
          return {
            top: `${dt - G.height - ee}px`,
            left: `${qe + Lt - G.width}px`,
            transform: "translateX(0)"
          };
        case "down":
          return {
            top: `${dt + ut + ee}px`,
            left: `${qe + Lt / 2}px`,
            transform: "translateX(-50%)"
          };
        case "down-start":
          return {
            top: `${dt + ut + ee}px`,
            left: `${qe}px`,
            transform: "translateX(0)"
          };
        case "down-end":
          return {
            top: `${dt + ut + ee}px`,
            left: `${qe + Lt - G.width}px`,
            transform: "translateX(0)"
          };
        case "left":
          return {
            top: `${dt + ut / 2}px`,
            left: `${qe - G.width - ee}px`,
            transform: "translateY(-50%)"
          };
        case "left-start":
          return {
            top: `${dt}px`,
            left: `${qe - G.width - ee}px`,
            transform: "translateY(0)"
          };
        case "left-end":
          return {
            top: `${dt + ut - G.height}px`,
            left: `${qe - G.width - ee}px`,
            transform: "translateY(0)"
          };
        case "right":
          return {
            top: `${dt + ut / 2}px`,
            left: `${qe + Lt + ee}px`,
            transform: "translateY(-50%)"
          };
        case "right-start":
          return {
            top: `${dt}px`,
            left: `${qe + Lt + ee}px`,
            transform: "translateY(0)"
          };
        case "right-end":
          return {
            top: `${dt + ut - G.height}px`,
            left: `${qe + Lt + ee}px`,
            transform: "translateY(0)"
          };
        default:
          return {};
      }
    }, Me = {
      up: {
        fits: F.top - G.height - ee >= 0
      },
      "up-start": {
        fits: F.top - G.height - ee >= 0 && F.left + G.width <= te
      },
      "up-end": {
        fits: F.top - G.height - ee >= 0 && F.right - G.width >= 0
      },
      down: {
        fits: F.bottom + G.height + ee <= Y && F.bottom + G.height + ee <= de
      },
      "down-start": {
        fits: F.bottom + G.height + ee <= Y && F.bottom + G.height + ee <= de && F.left + G.width <= te
      },
      "down-end": {
        fits: F.bottom + G.height + ee <= Y && F.bottom + G.height + ee <= de && F.right - G.width >= 0
      },
      left: {
        fits: F.left - G.width - ee >= 0
      },
      "left-start": {
        fits: F.left - G.width - ee >= 0 && F.top + G.height <= Y
      },
      "left-end": {
        fits: F.left - G.width - ee >= 0 && F.bottom - G.height >= 0
      },
      right: {
        fits: F.right + G.width + ee <= te && F.right + G.width + ee <= ae
      },
      "right-start": {
        fits: F.right + G.width + ee <= te && F.right + G.width + ee <= ae && F.top + G.height <= Y
      },
      "right-end": {
        fits: F.right + G.width + ee <= te && F.right + G.width + ee <= ae && F.bottom - G.height >= 0
      }
    }, ge = F.left + F.width / 2 - G.width / 2, ct = F.left + F.width / 2 + G.width / 2;
    if ((r === "up" || r === "down") && (ge < 0 || ct > te) && (Me[r].fits = false), Me[r].fits) {
      const bt = Z(r);
      Se = {
        position: r,
        ...bt,
        transform: bt.transform || ""
      };
    } else {
      const bt = [
        "up",
        "up-start",
        "up-end",
        "down",
        "down-start",
        "down-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end"
      ].find((Wt) => Me[Wt].fits);
      if (bt) {
        fe = bt;
        const Wt = Z(bt);
        Se = {
          position: fe,
          ...Wt,
          transform: Wt.transform || ""
        };
      } else {
        const Wt = {
          up: F.top,
          "up-start": F.top,
          "up-end": F.top,
          down: Math.min(
            Y - F.bottom,
            de - F.bottom
          ),
          "down-start": Math.min(
            Y - F.bottom,
            de - F.bottom
          ),
          "down-end": Math.min(
            Y - F.bottom,
            de - F.bottom
          ),
          left: F.left,
          "left-start": F.left,
          "left-end": F.left,
          right: Math.min(
            te - F.right,
            ae - F.right
          ),
          "right-start": Math.min(
            te - F.right,
            ae - F.right
          ),
          "right-end": Math.min(
            te - F.right,
            ae - F.right
          )
        }, Mt = Object.entries(Wt).reduce(
          (ut, [dt, qe]) => qe > ut.space ? { position: dt, space: qe } : ut,
          { position: "up", space: 0 }
        ).position;
        fe = Mt;
        const Lt = Z(Mt);
        Se = {
          position: fe,
          ...Lt,
          transform: Lt.transform || ""
        };
      }
    }
    y(Se);
  }, [r, A]), D = () => {
    E.current && (clearTimeout(E.current), E.current = null);
  }, j = __mf_17(() => {
    E.current && (clearTimeout(E.current), E.current = null), x(false);
  }, []), z = () => {
    D(), l === 0 ? x(false) : E.current = setTimeout(() => x(false), l);
  }, M = () => {
    c === "click" && (x(true), D(), E.current = setTimeout(() => {
      v || x(false);
    }, l));
  }, W = (F) => {
    F.stopPropagation(), j();
  }, V = () => {
    w(true), D();
  }, P = () => {
    w(false), b && z();
  }, K = () => {
    c === "hover" && (D(), x(true));
  }, X = () => {
    c === "hover" && z();
  };
  __mf_20(() => {
    if (!b || g || !S.current) return;
    const F = S.current;
    let G = false, te = false;
    const Y = new IntersectionObserver(
      ([ie]) => {
        if (!G) {
          te = ie.isIntersecting, G = true;
          return;
        }
        te && !ie.isIntersecting && j(), te = ie.isIntersecting;
      },
      { threshold: 0 }
    );
    return Y.observe(F), () => Y.disconnect();
  }, [b, g, j]), __mf_20(() => {
    if (b) {
      const F = requestAnimationFrame(() => T());
      return () => cancelAnimationFrame(F);
    }
  }, [b, e6, T]), __mf_20(() => {
    if (b) {
      const F = setTimeout(() => T(), 0);
      return () => clearTimeout(F);
    }
  }, [b, T]), __mf_20(() => {
    const F = () => {
      b && T();
    }, G = () => {
      b && T();
    };
    return window.addEventListener("resize", F), window.addEventListener("scroll", G, true), () => {
      window.removeEventListener("resize", F), window.removeEventListener("scroll", G, true), D();
    };
  }, [b, T]);
  const ne = d || (typeof document < "u" ? document.body : null), he = b && !g && !!e6, N = /* @__PURE__ */ __mf_2(
    "div",
    {
      ref: O,
      role: "tooltip",
      className: fI({
        color: t
      }),
      style: {
        position: "absolute",
        left: m.left ?? 0,
        top: m.top ?? 0,
        transform: m.transform,
        zIndex: h,
        opacity: m.left ? 1 : 0,
        pointerEvents: n ? "auto" : "none"
      },
      onMouseEnter: n ? V : void 0,
      onMouseLeave: n ? P : void 0,
      children: [
        i && /* @__PURE__ */ __mf_1("span", { "data-testid": "tooltip-icon", children: i }),
        /* @__PURE__ */ __mf_1("div", { className: pI({ color: t }), children: e6 }),
        n && /* @__PURE__ */ __mf_1(
          "div",
          {
            onClick: W,
            className: hI({ color: t }),
            role: "button",
            children: /* @__PURE__ */ __mf_1(es, {})
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ __mf_2(__mf_0, { children: [
    /* @__PURE__ */ __mf_2(
      "div",
      {
        "data-qui": "Tooltip",
        ref: S,
        onClick: M,
        onMouseEnter: K,
        onMouseLeave: X,
        className: ce("relative inline-flex items-center", u),
        children: [
          o,
          he && !A && N
        ]
      }
    ),
    he && A && ne && __mf_1$1(N, ne)
  ] });
};
var Tm;
(function(e6) {
  e6.DragStart = "dragStart", e6.DragMove = "dragMove", e6.DragEnd = "dragEnd", e6.DragCancel = "dragCancel", e6.DragOver = "dragOver", e6.RegisterDroppable = "registerDroppable", e6.SetDroppableDisabled = "setDroppableDisabled", e6.UnregisterDroppable = "unregisterDroppable";
})(Tm || (Tm = {}));
const gI = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
var Bo;
(function(e6) {
  e6[e6.Forward = 1] = "Forward", e6[e6.Backward = -1] = "Backward";
})(Bo || (Bo = {}));
var Rm;
(function(e6) {
  e6.Click = "click", e6.DragStart = "dragstart", e6.Keydown = "keydown", e6.ContextMenu = "contextmenu", e6.Resize = "resize", e6.SelectionChange = "selectionchange", e6.VisibilityChange = "visibilitychange";
})(Rm || (Rm = {}));
var Xr;
(function(e6) {
  e6.Space = "Space", e6.Down = "ArrowDown", e6.Right = "ArrowRight", e6.Left = "ArrowLeft", e6.Up = "ArrowUp", e6.Esc = "Escape", e6.Enter = "Enter", e6.Tab = "Tab";
})(Xr || (Xr = {}));
Xr.Space, Xr.Enter, Xr.Esc, Xr.Space, Xr.Enter, Xr.Tab;
var Cm;
(function(e6) {
  e6[e6.RightClick = 2] = "RightClick";
})(Cm || (Cm = {}));
var Im;
(function(e6) {
  e6[e6.Pointer = 0] = "Pointer", e6[e6.DraggableRect = 1] = "DraggableRect";
})(Im || (Im = {}));
var Pm;
(function(e6) {
  e6[e6.TreeOrder = 0] = "TreeOrder", e6[e6.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Pm || (Pm = {}));
Bo.Backward + "", Bo.Forward + "", Bo.Backward + "", Bo.Forward + "";
var tp;
(function(e6) {
  e6[e6.Always = 0] = "Always", e6[e6.BeforeDragging = 1] = "BeforeDragging", e6[e6.WhileDragging = 2] = "WhileDragging";
})(tp || (tp = {}));
var rp;
(function(e6) {
  e6.Optimized = "optimized";
})(rp || (rp = {}));
tp.WhileDragging, rp.Optimized;
({
  ...gI
});
var Nm;
(function(e6) {
  e6[e6.Uninitialized = 0] = "Uninitialized", e6[e6.Initializing = 1] = "Initializing", e6[e6.Initialized = 2] = "Initialized";
})(Nm || (Nm = {}));
Xr.Down, Xr.Right, Xr.Up, Xr.Left;
const Iw = {
  sm: {
    padding: "px-4 py-0.5",
    text: "text-xxs",
    icon: "w-3 h-3",
    gap: "gap-0.5",
    badge: "min-w-3.5 h-3.5 text-2"
  },
  md: {
    padding: "px-6 py-1",
    text: "text-s",
    icon: "w-4 h-4",
    gap: "gap-1",
    badge: "min-w-4.5 h-4.5 text-xxs"
  },
  lg: {
    padding: "px-8 py-1.5",
    text: "text-base",
    icon: "w-5 h-5",
    gap: "gap-1.5",
    badge: "min-w-5 h-5 text-xs"
  }
}, vI = {
  primary: {
    active: {
      bg: "bg-primary",
      text: "text-button-text",
      border: "border-primary"
    },
    inactive: {
      bg: "bg-input-bg",
      text: "text-inactive-text",
      border: "border-transparent"
    },
    hover: {
      bg: "hover:bg-primary-hover",
      text: "hover:text-button-text"
    }
  },
  positive: {
    active: {
      bg: "bg-positive",
      text: "text-button-text",
      border: "border-positive"
    },
    inactive: {
      bg: "bg-input-bg",
      text: "text-inactive-text",
      border: "border-transparent"
    },
    hover: {
      bg: "hover:bg-positive-hover",
      text: "hover:text-body"
    }
  },
  warning: {
    active: {
      bg: "bg-warning",
      text: "text-warning-text",
      border: "border-warning"
    },
    inactive: {
      bg: "bg-input-bg",
      text: "text-inactive-text",
      border: "border-transparent"
    },
    hover: {
      bg: "hover:bg-warning-hover",
      text: "hover:text-body"
    }
  },
  negative: {
    active: {
      bg: "bg-negative",
      text: "text-button-text",
      border: "border-negative"
    },
    inactive: {
      bg: "bg-input-bg",
      text: "text-inactive-text",
      border: "border-transparent"
    },
    hover: {
      bg: "hover:bg-negative-hover",
      text: "hover:text-body"
    }
  }
}, mI = (e6, t, r, n) => {
  const i = vI[e6], o = Iw[t], l = "relative inline-flex items-center font-medium cursor-pointer transition-all duration-200";
  return n ? ce(
    l,
    o.padding,
    o.text,
    o.gap,
    "pointer-events-none cursor-not-allowed opacity-50",
    "bg-card",
    "text-inactive-text"
  ) : r ? ce(
    l,
    o.padding,
    o.text,
    o.gap,
    i.active.bg,
    i.active.text,
    "shadow-xs"
  ) : ce(
    l,
    o.padding,
    o.text,
    o.gap,
    i.inactive.bg,
    i.inactive.text,
    i.hover.bg,
    i.hover.text
  );
}, bI = (e6, t) => ce(
  "flex items-center justify-center",
  Iw[e6].icon,
  {
    "opacity-50": t
  }
), yI = () => ce("whitespace-nowrap"), Pw = (e6, t) => {
  const r = ce(
    "group flex items-center justify-between space-x-4",
    "rounded-t px-2 text-xs",
    "focus:outline-hidden"
  );
  return e6 && !t ? ce(
    r,
    "z-2 border border-b-0 border-tab-border",
    "bg-tab-active-bg font-semibold text-tab-active-fg"
  ) : t && !e6 ? ce(
    r,
    "border border-transparent bg-tab-inactive-bg text-inactive-text"
  ) : ce(
    r,
    "border border-transparent bg-tab-inactive-bg text-tab-inactive-fg",
    "hover:text-tab-active-fg"
  );
}, wI = __mf_9(void 0), xI = R.forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ value: e6, label: t, icon: r, disabled: n, children: i, className: o, onClick: l, active: c, onClose: u, closable: d, touched: g, content: f, renderTab: h, ...b }, x) => {
    const v = __mf_18(wI);
    if (!v) return null;
    const { activeTab: w, onTabChange: m, variant: y, color: S, size: O, showIcons: E, disabled: A } = v, $ = c !== void 0 ? c : w === e6, T = n || A, D = (j) => {
      T || (m(e6), l == null || l(j));
    };
    return y === "file" ? /* @__PURE__ */ __mf_1(
      "div",
      {
        "data-qui": "FileTabItem",
        className: ce(Pw($, false), "cursor-pointer", o),
        onClick: (j) => !T && D(j),
        children: i || /* @__PURE__ */ __mf_1(__mf_0, { children: /* @__PURE__ */ __mf_2("span", { className: "flex items-center gap-2", children: [
          r,
          /* @__PURE__ */ __mf_1("span", { children: t })
        ] }) })
      }
    ) : /* @__PURE__ */ __mf_2(
      "button",
      {
        ref: x,
        "data-qui": "TabItem",
        type: "button",
        role: "tab",
        "aria-selected": $,
        "aria-disabled": T,
        className: ce(mI(S, O, $, T || false), o),
        onClick: D,
        disabled: T,
        ...b,
        children: [
          E && r && /* @__PURE__ */ __mf_1("span", { className: bI(O, T || false), children: r }),
          /* @__PURE__ */ __mf_1("span", { className: yI(), children: i || t })
        ]
      }
    );
  }
);
xI.displayName = "TabItem";
const SI = R.forwardRef(({ isActive: e6 = false, isDesactive: t = false, children: r, ...n }, i) => /* @__PURE__ */ __mf_1("div", { "data-qui": "TabNavContainer", className: Pw(e6, t), ref: i, ...n, children: r }));
SI.displayName = "TabNavContainer";
var zt = function() {
  return zt = Object.assign || function(e6) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e6[i] = t[i]);
    }
    return e6;
  }, zt.apply(this, arguments);
}, Mm = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
}, Dm = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
}, ql = {
  width: "20px",
  height: "20px",
  position: "absolute",
  zIndex: 1
}, _I = {
  top: zt(zt({}, Mm), { top: "-5px" }),
  right: zt(zt({}, Dm), { left: void 0, right: "-5px" }),
  bottom: zt(zt({}, Mm), { top: void 0, bottom: "-5px" }),
  left: zt(zt({}, Dm), { left: "-5px" }),
  topRight: zt(zt({}, ql), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: zt(zt({}, ql), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: zt(zt({}, ql), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: zt(zt({}, ql), { left: "-10px", top: "-10px", cursor: "nw-resize" })
}, EI = __mf_16(function(e6) {
  var t = e6.onResizeStart, r = e6.direction, n = e6.children, i = e6.replaceStyles, o = e6.className, l = __mf_17(function(d) {
    t(d, r);
  }, [t, r]), c = __mf_17(function(d) {
    t(d, r);
  }, [t, r]), u = __mf_23(function() {
    return zt(zt({ position: "absolute", userSelect: "none" }, _I[r]), i ?? {});
  }, [i, r]);
  return __mf_1("div", { className: o || void 0, style: u, onMouseDown: l, onTouchStart: c, children: n });
}), OI = /* @__PURE__ */ (function() {
  var e6 = function(t, r) {
    return e6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }, e6(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e6(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
})(), On = function() {
  return On = Object.assign || function(e6) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e6[i] = t[i]);
    }
    return e6;
  }, On.apply(this, arguments);
}, kI = {
  width: "auto",
  height: "auto"
}, Gl = function(e6, t, r) {
  return Math.max(Math.min(e6, r), t);
}, zm = function(e6, t, r) {
  var n = Math.round(e6 / t);
  return n * t + r * (n - 1);
}, Co = function(e6, t) {
  return new RegExp(e6, "i").test(t);
}, Zl = function(e6) {
  return !!(e6.touches && e6.touches.length);
}, AI = function(e6) {
  return !!((e6.clientX || e6.clientX === 0) && (e6.clientY || e6.clientY === 0));
}, Lm = function(e6, t, r) {
  r === void 0 && (r = 0);
  var n = t.reduce(function(o, l, c) {
    return Math.abs(l - e6) < Math.abs(t[o] - e6) ? c : o;
  }, 0), i = Math.abs(t[n] - e6);
  return r === 0 || i < r ? t[n] : e6;
}, Kd = function(e6) {
  return e6 = e6.toString(), e6 === "auto" || e6.endsWith("px") || e6.endsWith("%") || e6.endsWith("vh") || e6.endsWith("vw") || e6.endsWith("vmax") || e6.endsWith("vmin") ? e6 : "".concat(e6, "px");
}, Kl = function(e6, t, r, n) {
  if (e6 && typeof e6 == "string") {
    if (e6.endsWith("px"))
      return Number(e6.replace("px", ""));
    if (e6.endsWith("%")) {
      var i = Number(e6.replace("%", "")) / 100;
      return t * i;
    }
    if (e6.endsWith("vw")) {
      var i = Number(e6.replace("vw", "")) / 100;
      return r * i;
    }
    if (e6.endsWith("vh")) {
      var i = Number(e6.replace("vh", "")) / 100;
      return n * i;
    }
  }
  return e6;
}, TI = function(e6, t, r, n, i, o, l) {
  return n = Kl(n, e6.width, t, r), i = Kl(i, e6.height, t, r), o = Kl(o, e6.width, t, r), l = Kl(l, e6.height, t, r), {
    maxWidth: typeof n > "u" ? void 0 : Number(n),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
    minWidth: typeof o > "u" ? void 0 : Number(o),
    minHeight: typeof l > "u" ? void 0 : Number(l)
  };
}, RI = function(e6) {
  return Array.isArray(e6) ? e6 : [e6, e6];
}, CI = [
  "as",
  "ref",
  "style",
  "className",
  "grid",
  "gridGap",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], $m = "__resizable_base__", II = (
  /** @class */
  (function(e6) {
    OI(t, e6);
    function t(r) {
      var n, i, o, l, c = e6.call(this, r) || this;
      return c.ratio = 1, c.resizable = null, c.parentLeft = 0, c.parentTop = 0, c.resizableLeft = 0, c.resizableRight = 0, c.resizableTop = 0, c.resizableBottom = 0, c.targetLeft = 0, c.targetTop = 0, c.delta = {
        width: 0,
        height: 0
      }, c.appendBase = function() {
        if (!c.resizable || !c.window)
          return null;
        var u = c.parentNode;
        if (!u)
          return null;
        var d = c.window.document.createElement("div");
        return d.style.width = "100%", d.style.height = "100%", d.style.position = "absolute", d.style.transform = "scale(0, 0)", d.style.left = "0", d.style.flex = "0 0 100%", d.classList ? d.classList.add($m) : d.className += $m, u.appendChild(d), d;
      }, c.removeBase = function(u) {
        var d = c.parentNode;
        d && d.removeChild(u);
      }, c.state = {
        isResizing: false,
        width: (i = (n = c.propsSize) === null || n === void 0 ? void 0 : n.width) !== null && i !== void 0 ? i : "auto",
        height: (l = (o = c.propsSize) === null || o === void 0 ? void 0 : o.height) !== null && l !== void 0 ? l : "auto",
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, c.onResizeStart = c.onResizeStart.bind(c), c.onMouseMove = c.onMouseMove.bind(c), c.onMouseUp = c.onMouseUp.bind(c), c;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || kI;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "size", {
      get: function() {
        var r = 0, n = 0;
        if (this.resizable && this.window) {
          var i = this.resizable.offsetWidth, o = this.resizable.offsetHeight, l = this.resizable.style.position;
          l !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : i, n = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : o, this.resizable.style.position = l;
        }
        return { width: r, height: n };
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "sizeStyle", {
      get: function() {
        var r = this, n = this.props.size, i = function(c) {
          var u;
          if (typeof r.state[c] > "u" || r.state[c] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[c] && !((u = r.propsSize[c]) === null || u === void 0) && u.toString().endsWith("%")) {
            if (r.state[c].toString().endsWith("%"))
              return r.state[c].toString();
            var d = r.getParentSize(), g = Number(r.state[c].toString().replace("px", "")), f = g / d[c] * 100;
            return "".concat(f, "%");
          }
          return Kd(r.state[c]);
        }, o = n && typeof n.width < "u" && !this.state.isResizing ? Kd(n.width) : i("width"), l = n && typeof n.height < "u" && !this.state.isResizing ? Kd(n.height) : i("height");
        return { width: o, height: l };
      },
      enumerable: false,
      configurable: true
    }), t.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var n = false, i = this.parentNode.style.flexWrap;
      i !== "wrap" && (n = true, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var o = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return n && (this.parentNode.style.flexWrap = i), this.removeBase(r), o;
    }, t.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: true,
        passive: false
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, t.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, true), this.window.removeEventListener("touchend", this.onMouseUp));
    }, t.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, t.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, t.prototype.createSizeForCssProperty = function(r, n) {
      var i = this.propsSize && this.propsSize[n];
      return this.state[n] === "auto" && this.state.original[n] === r && (typeof i > "u" || i === "auto") ? "auto" : r;
    }, t.prototype.calculateNewMaxFromBoundary = function(r, n) {
      var i = this.props.boundsByDirection, o = this.state.direction, l = i && Co("left", o), c = i && Co("top", o), u, d;
      if (this.props.bounds === "parent") {
        var g = this.parentNode;
        g && (u = l ? this.resizableRight - this.parentLeft : g.offsetWidth + (this.parentLeft - this.resizableLeft), d = c ? this.resizableBottom - this.parentTop : g.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (u = l ? this.resizableRight : this.window.innerWidth - this.resizableLeft, d = c ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (u = l ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), d = c ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return u && Number.isFinite(u) && (r = r && r < u ? r : u), d && Number.isFinite(d) && (n = n && n < d ? n : d), { maxWidth: r, maxHeight: n };
    }, t.prototype.calculateNewSizeFromDirection = function(r, n) {
      var i = this.props.scale || 1, o = RI(this.props.resizeRatio || 1), l = o[0], c = o[1], u = this.state, d = u.direction, g = u.original, f = this.props, h = f.lockAspectRatio, b = f.lockAspectRatioExtraHeight, x = f.lockAspectRatioExtraWidth, v = g.width, w = g.height, m = b || 0, y = x || 0;
      return Co("right", d) && (v = g.width + (r - g.x) * l / i, h && (w = (v - y) / this.ratio + m)), Co("left", d) && (v = g.width - (r - g.x) * l / i, h && (w = (v - y) / this.ratio + m)), Co("bottom", d) && (w = g.height + (n - g.y) * c / i, h && (v = (w - m) * this.ratio + y)), Co("top", d) && (w = g.height - (n - g.y) * c / i, h && (v = (w - m) * this.ratio + y)), { newWidth: v, newHeight: w };
    }, t.prototype.calculateNewSizeFromAspectRatio = function(r, n, i, o) {
      var l = this.props, c = l.lockAspectRatio, u = l.lockAspectRatioExtraHeight, d = l.lockAspectRatioExtraWidth, g = typeof o.width > "u" ? 10 : o.width, f = typeof i.width > "u" || i.width < 0 ? r : i.width, h = typeof o.height > "u" ? 10 : o.height, b = typeof i.height > "u" || i.height < 0 ? n : i.height, x = u || 0, v = d || 0;
      if (c) {
        var w = (h - x) * this.ratio + v, m = (b - x) * this.ratio + v, y = (g - v) / this.ratio + x, S = (f - v) / this.ratio + x, O = Math.max(g, w), E = Math.min(f, m), A = Math.max(h, y), $ = Math.min(b, S);
        r = Gl(r, O, E), n = Gl(n, A, $);
      } else
        r = Gl(r, g, f), n = Gl(n, h, b);
      return { newWidth: r, newHeight: n };
    }, t.prototype.setBoundingClientRect = function() {
      var r = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var n = this.parentNode;
        if (n) {
          var i = n.getBoundingClientRect();
          this.parentLeft = i.left * r, this.parentTop = i.top * r;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var o = this.props.bounds.getBoundingClientRect();
        this.targetLeft = o.left * r, this.targetTop = o.top * r;
      }
      if (this.resizable) {
        var l = this.resizable.getBoundingClientRect(), c = l.left, u = l.top, d = l.right, g = l.bottom;
        this.resizableLeft = c * r, this.resizableRight = d * r, this.resizableTop = u * r, this.resizableBottom = g * r;
      }
    }, t.prototype.onResizeStart = function(r, n) {
      if (!(!this.resizable || !this.window)) {
        var i = 0, o = 0;
        if (r.nativeEvent && AI(r.nativeEvent) ? (i = r.nativeEvent.clientX, o = r.nativeEvent.clientY) : r.nativeEvent && Zl(r.nativeEvent) && (i = r.nativeEvent.touches[0].clientX, o = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var l = this.props.onResizeStart(r, n, this.resizable);
          if (l === false)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var c, u = this.window.getComputedStyle(this.resizable);
        if (u.flexBasis !== "auto") {
          var d = this.parentNode;
          if (d) {
            var g = this.window.getComputedStyle(d).flexDirection;
            this.flexDir = g.startsWith("row") ? "row" : "column", c = u.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var f = {
          original: {
            x: i,
            y: o,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: true,
          backgroundStyle: On(On({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: n,
          flexBasis: c
        };
        this.setState(f);
      }
    }, t.prototype.onMouseMove = function(r) {
      var n = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && Zl(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var i = this.props, o = i.maxWidth, l = i.maxHeight, c = i.minWidth, u = i.minHeight, d = Zl(r) ? r.touches[0].clientX : r.clientX, g = Zl(r) ? r.touches[0].clientY : r.clientY, f = this.state, h = f.direction, b = f.original, x = f.width, v = f.height, w = this.getParentSize(), m = TI(w, this.window.innerWidth, this.window.innerHeight, o, l, c, u);
        o = m.maxWidth, l = m.maxHeight, c = m.minWidth, u = m.minHeight;
        var y = this.calculateNewSizeFromDirection(d, g), S = y.newHeight, O = y.newWidth, E = this.calculateNewMaxFromBoundary(o, l);
        this.props.snap && this.props.snap.x && (O = Lm(O, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (S = Lm(S, this.props.snap.y, this.props.snapGap));
        var A = this.calculateNewSizeFromAspectRatio(O, S, { width: E.maxWidth, height: E.maxHeight }, { width: c, height: u });
        if (O = A.newWidth, S = A.newHeight, this.props.grid) {
          var $ = zm(O, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), T = zm(S, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), D = this.props.snapGap || 0, j = D === 0 || Math.abs($ - O) <= D ? $ : O, z = D === 0 || Math.abs(T - S) <= D ? T : S;
          O = j, S = z;
        }
        var M = {
          width: O - b.width,
          height: S - b.height
        };
        if (this.delta = M, x && typeof x == "string") {
          if (x.endsWith("%")) {
            var W = O / w.width * 100;
            O = "".concat(W, "%");
          } else if (x.endsWith("vw")) {
            var V = O / this.window.innerWidth * 100;
            O = "".concat(V, "vw");
          } else if (x.endsWith("vh")) {
            var P = O / this.window.innerHeight * 100;
            O = "".concat(P, "vh");
          }
        }
        if (v && typeof v == "string") {
          if (v.endsWith("%")) {
            var W = S / w.height * 100;
            S = "".concat(W, "%");
          } else if (v.endsWith("vw")) {
            var V = S / this.window.innerWidth * 100;
            S = "".concat(V, "vw");
          } else if (v.endsWith("vh")) {
            var P = S / this.window.innerHeight * 100;
            S = "".concat(P, "vh");
          }
        }
        var K = {
          width: this.createSizeForCssProperty(O, "width"),
          height: this.createSizeForCssProperty(S, "height")
        };
        this.flexDir === "row" ? K.flexBasis = K.width : this.flexDir === "column" && (K.flexBasis = K.height);
        var X = this.state.width !== K.width, ne = this.state.height !== K.height, he = this.state.flexBasis !== K.flexBasis, N = X || ne || he;
        N && __mf_3(function() {
          n.setState(K);
        }), this.props.onResize && N && this.props.onResize(r, h, this.resizable, M);
      }
    }, t.prototype.onMouseUp = function(r) {
      var n, i, o = this.state, l = o.isResizing, c = o.direction;
      o.original, !(!l || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(r, c, this.resizable, this.delta), this.props.size && this.setState({ width: (n = this.props.size.width) !== null && n !== void 0 ? n : "auto", height: (i = this.props.size.height) !== null && i !== void 0 ? i : "auto" }), this.unbindEvents(), this.setState({
        isResizing: false,
        backgroundStyle: On(On({}, this.state.backgroundStyle), { cursor: "auto" })
      }));
    }, t.prototype.updateSize = function(r) {
      var n, i;
      this.setState({ width: (n = r.width) !== null && n !== void 0 ? n : "auto", height: (i = r.height) !== null && i !== void 0 ? i : "auto" });
    }, t.prototype.renderResizer = function() {
      var r = this, n = this.props, i = n.enable, o = n.handleStyles, l = n.handleClasses, c = n.handleWrapperStyle, u = n.handleWrapperClass, d = n.handleComponent;
      if (!i)
        return null;
      var g = Object.keys(i).map(function(f) {
        return i[f] !== false ? __mf_1(EI, { direction: f, onResizeStart: r.onResizeStart, replaceStyles: o && o[f], className: l && l[f], children: d && d[f] ? d[f] : null }, f) : null;
      });
      return __mf_1("div", { className: u, style: c, children: g });
    }, t.prototype.render = function() {
      var r = this, n = Object.keys(this.props).reduce(function(l, c) {
        return CI.indexOf(c) !== -1 || (l[c] = r.props[c]), l;
      }, {}), i = On(On(On({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var o = this.props.as || "div";
      return __mf_2(o, On({ style: i, className: this.props.className }, n, {
        // `ref` is after `extendsProps` to ensure this one wins over a version
        // passed in
        ref: function(l) {
          l && (r.resizable = l);
        },
        children: [this.state.isResizing && __mf_1("div", { style: this.state.backgroundStyle }), this.props.children, this.renderResizer()]
      }));
    }, t.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true
      },
      style: {},
      grid: [1, 1],
      gridGap: [0, 0],
      lockAspectRatio: false,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, t;
  })(__mf_6)
);
const PI = {
  0: "bg-panel-0",
  1: "bg-panel-1",
  2: "bg-panel-2",
  3: "bg-panel-3",
  4: "bg-panel-4",
  5: "bg-panel-5"
}, NI = {
  tabs: "border-tab-border",
  primary: "border-primary",
  negative: "border-input-error-border",
  positive: "border-positive",
  light: "border-panel-border-subtle",
  default: "border-panel-border"
}, Nw = ({
  depth: e6 = 0,
  className: t,
  borderType: r,
  disabled: n
}) => ce(
  "transition-colors duration-200",
  {
    "text-body": !n,
    "text-inactive-text": n
  },
  r ? NI[r] : "border-panel-border",
  PI[e6],
  t
), MI = (e6) => {
  if (!e6) return {};
  const t = {}, r = e6.match(/min-w-\[(\d+)px\]/);
  r && (t.minWidth = parseInt(r[1], 10));
  const n = e6.match(/max-w-\[(\d+)px\]/);
  n && (t.maxWidth = parseInt(n[1], 10));
  const i = e6.match(/min-h-\[(\d+)px\]/);
  i && (t.minHeight = parseInt(i[1], 10));
  const o = e6.match(/max-h-\[(\d+)px\]/);
  return o && (t.maxHeight = parseInt(o[1], 10)), t;
}, Mw = __mf_13(
  ({
    children: e6,
    width: t,
    height: r,
    minWidth: n = 10,
    minHeight: i = 10,
    maxWidth: o,
    maxHeight: l,
    defaultWidth: c,
    defaultHeight: u,
    defaultSize: d,
    size: g,
    grid: f,
    snap: h,
    lockAspectRatio: b = false,
    enable: x,
    handleStyles: v = {},
    handleClasses: w = {},
    handleComponent: m = {},
    style: y = {},
    className: S,
    onResizeStart: O,
    onResize: E,
    onResizeStop: A,
    scale: $ = 1,
    bounds: T,
    snapGap: D,
    as: j = "div",
    depth: z,
    disabled: M
  }, W) => {
    const V = Nw({
      depth: z,
      className: S,
      disabled: M
    }), P = MI(S), K = g ? { size: g } : t !== void 0 || r !== void 0 ? {
      size: {
        width: t ?? "auto",
        height: r ?? "auto"
      }
    } : {}, X = d ? { defaultSize: d } : c !== void 0 || u !== void 0 ? {
      defaultSize: {
        width: c ?? "auto",
        height: u ?? "auto"
      }
    } : {}, ne = __mf_25(null);
    return __mf_21(W, () => {
      var he;
      return (he = ne.current) == null ? void 0 : he.resizable;
    }), /* @__PURE__ */ __mf_1(
      II,
      {
        "data-qui": "Resizable",
        ref: ne,
        ...K,
        ...X,
        minWidth: n ?? P.minWidth,
        minHeight: i ?? P.minHeight,
        maxWidth: o ?? P.maxWidth,
        maxHeight: l ?? P.maxHeight,
        grid: f,
        snap: h,
        lockAspectRatio: b,
        enable: x,
        handleStyles: v,
        handleClasses: w,
        handleComponent: m,
        style: y,
        className: ce("relative box-border", V),
        onResizeStart: O,
        onResize: E,
        onResizeStop: A,
        scale: $,
        bounds: T,
        snapGap: D,
        as: j,
        children: e6
      }
    );
  }
);
Mw.displayName = "Resizable";
const Dw = ({ isDragging: e6 = false, className: t }) => /* @__PURE__ */ __mf_1(
  "div",
  {
    className: ce(
      "absolute inset-0 flex items-center justify-center transition-colors",
      {
        "bg-primary/30": e6
      },
      t
    ),
    children: /* @__PURE__ */ __mf_1(
      "div",
      {
        className: ce("h-full w-full transition-all", {
          "bg-primary": e6,
          "bg-transparent hover:bg-primary/20": !e6
        })
      }
    )
  }
);
Dw.displayName = "Handle";
const Io = {
  sm: {
    track: "h-4 w-7",
    thumb: "size-3",
    thumbUnchecked: "left-0.5",
    thumbChecked: "left-3.5",
    label: "text-xs",
    gap: "gap-2"
  },
  md: {
    track: "h-5 w-9",
    thumb: "size-4",
    thumbUnchecked: "left-0.5",
    thumbChecked: "left-4.5",
    label: "text-sm",
    gap: "gap-2.5"
  },
  lg: {
    track: "h-6 w-11",
    thumb: "size-5",
    thumbUnchecked: "left-0.5",
    thumbChecked: "left-5.5",
    label: "text-base",
    gap: "gap-3"
  }
}, Yl = {
  primary: {
    bg: "bg-primary",
    thumb: "group-hover:bg-primary-light",
    icon: "text-primary"
  },
  positive: {
    bg: "bg-positive",
    thumb: "group-hover:bg-positive-light",
    icon: "text-positive"
  },
  warning: {
    bg: "bg-warning",
    thumb: "group-hover:bg-warning-light",
    icon: "text-warning"
  },
  negative: {
    bg: "bg-negative",
    thumb: "group-hover:bg-negative-light",
    icon: "text-negative"
  }
}, DI = (e6, t, r, n, i, o) => ({
  container: ce(
    "inline-flex items-center",
    Io[e6].gap,
    o
  ),
  track: ce(
    "relative inline-flex items-center shrink-0 group",
    "transition-colors duration-200 ease-in-out",
    "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "border border-input-border rounded-full justify-between",
    Io[e6].track,
    {
      [Yl[t].bg]: r && !n && !i,
      "bg-input-bg": !r && !n || i,
      "bg-panel cursor-not-allowed": n,
      "cursor-pointer": !n
    }
  ),
  thumb: ce(
    "bg-input-text pointer-events-none inline-flex items-center justify-center shadow-xs",
    "transition-all duration-200 ease-in-out",
    "rounded-full absolute",
    Io[e6].thumb,
    r ? Io[e6].thumbChecked : Io[e6].thumbUnchecked,
    {
      [Yl[t].thumb]: !n,
      "bg-canvas-subtle": n
    }
  ),
  iconLeft: ce(
    "flex items-center justify-center z-10 w-1/2 p-0.5",
    {
      [Yl[t].icon]: !r && !n,
      "text-panel-subtle": n || r
    }
  ),
  iconRight: ce(
    "flex items-center justify-center z-10 w-1/2 p-0.5",
    {
      [Yl[t].icon]: r && !n,
      "text-panel-subtle": n || !r
    }
  ),
  label: ce("font-medium text-body", Io[e6].label, {
    "cursor-pointer": !n,
    "cursor-not-allowed text-muted": n
  })
}), zw = __mf_13(({
  label: e6,
  checked: t,
  defaultChecked: r = false,
  disabled: n = false,
  size: i = "md",
  color: o = "primary",
  icons: l,
  onChange: c,
  className: u,
  id: d,
  name: g,
  ...f
}, h) => {
  const [b, x] = __mf_26(r), v = t !== void 0, w = v ? t : b, m = () => {
    const S = !w;
    v || x(S), c == null || c(S);
  }, y = DI(
    i,
    o,
    w,
    n,
    !!l,
    u
  );
  return /* @__PURE__ */ __mf_2("div", { "data-qui": "Toggle", className: y.container, children: [
    e6 && /* @__PURE__ */ __mf_1("label", { htmlFor: d, className: y.label, children: e6 }),
    /* @__PURE__ */ __mf_2(
      "button",
      {
        ref: h,
        ...f,
        type: "button",
        role: "switch",
        "aria-checked": w,
        "aria-label": e6,
        disabled: n,
        onClick: m,
        name: g,
        id: d,
        className: y.track,
        children: [
          l && /* @__PURE__ */ __mf_1("span", { className: y.iconLeft, children: l.unchecked }),
          /* @__PURE__ */ __mf_1("span", { className: y.thumb, "aria-hidden": "true" }),
          l && /* @__PURE__ */ __mf_1("span", { className: y.iconRight, children: l.checked })
        ]
      }
    )
  ] });
});
zw.displayName = "Toggle";
__mf_9(null);
const oi = R.forwardRef(
  ({ depth: e6 = 0, className: t, children: r, borderType: n, disabled: i, ...o }, l) => {
    const c = Nw({
      depth: e6,
      className: t,
      borderType: n,
      disabled: i
    });
    return /* @__PURE__ */ __mf_1("div", { "data-qui": "Panel", ref: l, className: c, "aria-disabled": i, ...o, children: r });
  }
);
oi.displayName = "Panel";
const Aa = {
  sm: {
    container: "h-5 px-0.5 gap-1 rounded",
    text: "text-xxs leading-3",
    icon: "text-s",
    iconButton: "text-s p-0.5 cursor-pointer"
  },
  md: {
    container: "h-5.5 px-1 gap-1 rounded",
    text: "text-xs leading-4",
    icon: "text-sm",
    iconButton: " text-sm p-0.5 cursor-pointer"
  },
  lg: {
    container: "h-6 px-1.5 gap-1.5 rounded",
    text: "text-s leading-none",
    icon: "text-base",
    iconButton: "text-base p-0.5 cursor-pointer"
  }
}, Oc = {
  primary: {
    bg: "bg-primary",
    text: "text-button-text",
    border: "border-primary",
    buttonHover: "hover:bg-primary-hover"
  },
  white: {
    bg: "bg-canvas-default",
    text: "text-primary",
    border: "border-canvas-default",
    buttonHover: "hover:bg-primary-hover hover:text-button-text"
  },
  positive: {
    bg: "bg-positive",
    text: "text-button-text",
    border: "border-positive",
    buttonHover: "hover:bg-positive-hover"
  },
  warning: {
    bg: "bg-warning",
    text: "text-button-text",
    border: "border-warning",
    buttonHover: "hover:bg-warning-hover"
  },
  negative: {
    bg: "bg-negative",
    text: "text-button-text",
    border: "border-negative",
    buttonHover: "hover:bg-negative-hover"
  },
  grey: {
    bg: "bg-input-bg",
    text: "text-input-text",
    border: "border-input-border",
    buttonHover: "hover:bg-input-hover"
  },
  dark: {
    bg: "bg-tab-inactive-bg",
    text: "text-input-text",
    border: "border-input-border",
    // Using primary hover pattern for actions on dark background
    buttonHover: "hover:bg-primary-hover hover:text-button-text"
  }
}, zI = (e6, t, r, n) => ce(
  "inline-flex items-center justify-center font-medium border",
  Aa[e6].container,
  Oc[t].bg,
  Oc[t].text,
  Oc[t].border,
  Aa[e6].text,
  {
    "opacity-60 pointer-events-none": r,
    "cursor-pointer hover:bg-opacity-90 transition-opacity": n && !r
  }
), LI = (e6, t, r) => ce({
  [Aa[e6].icon]: !r,
  "bg-canvas-default outline-canvas-default text-primary": r && t !== "white" || r,
  "bg-primary outline-primary text-button-text": r && t === "white" && !r,
  "outline-solid outline-1 h-full py-0.5 grid place-items-center -my-1 only:-mx-0.5 first:-ml-1.5 last:-mr-1.5 only:rounded first:rounded-l last:rounded-r": r || r
}), $I = (e6) => ce(Aa[e6].text), Lw = (e6, t, r) => ce(
  "inline-flex items-center justify-center rounded transition-colors duration-200 focus:outline-hidden ",
  Aa[e6].iconButton,
  Oc[t].buttonHover,
  {
    "pointer-events-none": r
  }
), $w = __mf_9(null), cu = () => {
  const e6 = __mf_18($w);
  if (!e6)
    throw new Error("Pill components must be used within a Pill.Root");
  return e6;
}, Gp = __mf_13(
  ({
    size: e6 = "md",
    color: t = "primary",
    className: r,
    children: n,
    disabled: i = false,
    onClick: o,
    ...l
  }, c) => {
    const u = {
      size: e6,
      color: t,
      disabled: i
    }, d = !!o;
    return /* @__PURE__ */ __mf_1($w.Provider, { value: u, children: /* @__PURE__ */ __mf_1(
      "div",
      {
        "data-qui": "Pill",
        ref: c,
        onClick: o,
        className: ce(
          zI(e6, t, i, d),
          r
        ),
        ...l,
        children: n
      }
    ) });
  }
);
Gp.displayName = "Pill.Root";
const Zp = __mf_13(
  ({ className: e6, children: t, ...r }, n) => {
    const { size: i } = cu();
    return /* @__PURE__ */ __mf_1(
      "span",
      {
        ref: n,
        className: ce($I(i), e6),
        ...r,
        children: t
      }
    );
  }
);
Zp.displayName = "Pill.Text";
const Kp = __mf_13(
  ({ className: e6, children: t, label: r, position: n, ...i }, o) => {
    const { size: l, color: c, disabled: u } = cu(), d = !!r, g = /* @__PURE__ */ __mf_1(
      "span",
      {
        ref: o,
        className: ce(
          LI(l, c, d),
          e6,
          { "opacity-60": u }
        ),
        ...i,
        children: t
      }
    );
    return d && !u ? /* @__PURE__ */ __mf_1(Cw, { label: r || "", position: n || "up", children: g }) : g;
  }
);
Kp.displayName = "Pill.Icon";
const Fw = __mf_13(
  ({ className: e6, children: t, ...r }, n) => {
    const { size: i, color: o, disabled: l } = cu();
    return /* @__PURE__ */ __mf_1(
      "button",
      {
        ref: n,
        type: "button",
        disabled: l,
        className: ce(
          Lw(i, o, l),
          e6
        ),
        ...r,
        children: t
      }
    );
  }
);
Fw.displayName = "Pill.Button";
const Yp = __mf_13(
  ({
    className: e6,
    onClose: t,
    "aria-label": r = "Remove pill",
    children: n,
    ...i
  }, o) => {
    const { size: l, color: c, disabled: u } = cu();
    return /* @__PURE__ */ __mf_1(
      "button",
      {
        ref: o,
        type: "button",
        disabled: u,
        className: ce(
          Lw(l, c, u),
          e6
        ),
        onClick: t,
        "aria-label": r,
        ...i,
        children: n || /* @__PURE__ */ __mf_1(es, {})
      }
    );
  }
);
Yp.displayName = "Pill.Close";
const Hw = __mf_13(
  ({
    size: e6 = "md",
    color: t = "primary",
    label: r,
    icon: n,
    onClose: i,
    closable: o = false,
    className: l,
    children: c,
    disabled: u = false,
    ...d
  }, g) => /* @__PURE__ */ __mf_2(
    Gp,
    {
      ref: g,
      size: e6,
      color: t,
      className: l,
      disabled: u,
      ...d,
      children: [
        n && /* @__PURE__ */ __mf_1(Kp, { children: n }),
        c || r && /* @__PURE__ */ __mf_1(Zp, { children: r }),
        o && /* @__PURE__ */ __mf_1(Yp, { onClose: i })
      ]
    }
  )
);
Hw.displayName = "Pill";
Object.assign(Hw, {
  Root: Gp,
  Text: Zp,
  Icon: Kp,
  Button: Fw,
  Close: Yp
});
function FI(e6, t, r) {
  const n = new Array(e6);
  return new Proxy(n, {
    get(i, o, l) {
      if (typeof o == "string") {
        const c = o.charCodeAt(0);
        if (c >= 48 && c <= 57) {
          const u = +o;
          if (Number.isInteger(u) && u >= 0 && u < e6) {
            let d = i[u];
            if (!d) {
              const g = t[u * 2];
              d = i[u] = {
                index: u,
                key: r(u),
                start: g,
                size: t[u * 2 + 1],
                end: g + t[u * 2 + 1],
                lane: 0
              };
            }
            return d;
          }
        }
        if (o === "length") return e6;
      }
      return Reflect.get(i, o, l);
    }
  });
}
function Po(e6, t, r) {
  let n = r.initialDeps ?? [], i, o = true;
  function l() {
    const u = false;
    const g = e6();
    if (!(g.length !== n.length || g.some((h, b) => n[b] !== h)))
      return i;
    n = g;
    if (i = t(...g), u) ;
    return r != null && r.onChange && !(o && r.skipInitialOnChange) && r.onChange(i), o = false, i;
  }
  return l.updateDeps = (c) => {
    n = c;
  }, l;
}
function Fm(e6, t) {
  if (e6 === void 0)
    throw new Error("Unexpected undefined");
  return e6;
}
const HI = (e6, t) => Math.abs(e6 - t) < 1.01, jI = (e6, t, r) => {
  let n;
  return function(...i) {
    e6.clearTimeout(n), n = e6.setTimeout(() => t.apply(this, i), r);
  };
};
let Ms;
const Yd = () => {
  if (Ms !== void 0) return Ms;
  if (typeof navigator > "u") return Ms = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return Ms = true;
  const e6 = navigator.maxTouchPoints;
  return Ms = navigator.platform === "MacIntel" && e6 !== void 0 && e6 > 0;
}, Hm = (e6) => {
  const { offsetWidth: t, offsetHeight: r } = e6;
  return { width: t, height: r };
}, BI = (e6) => e6, WI = (e6) => {
  const t = Math.max(e6.startIndex - e6.overscan, 0), r = Math.min(e6.endIndex + e6.overscan, e6.count - 1) - t + 1, n = new Array(r);
  for (let i = 0; i < r; i++)
    n[i] = t + i;
  return n;
}, VI = (e6, t) => {
  const r = e6.scrollElement;
  if (!r)
    return;
  const n = e6.targetWindow;
  if (!n)
    return;
  const i = (l) => {
    const { width: c, height: u } = l;
    t({ width: Math.round(c), height: Math.round(u) });
  };
  if (i(Hm(r)), !n.ResizeObserver)
    return () => {
    };
  const o = new n.ResizeObserver((l) => {
    const c = () => {
      const u = l[0];
      if (u != null && u.borderBoxSize) {
        const d = u.borderBoxSize[0];
        if (d) {
          i({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      i(Hm(r));
    };
    e6.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(c) : c();
  });
  return o.observe(r, { box: "border-box" }), () => {
    o.unobserve(r);
  };
}, Vc = {
  passive: true
}, UI = typeof window > "u" ? true : "onscrollend" in window, qI = (e6, t, r) => {
  const n = e6.scrollElement;
  if (!n)
    return;
  const i = e6.targetWindow;
  if (!i)
    return;
  const o = e6.options.useScrollendEvent && UI;
  let l = 0;
  const c = o ? null : jI(
    i,
    () => t(l, false),
    e6.options.isScrollingResetDelay
  ), u = (f) => () => {
    l = r(n), c == null || c(), t(l, f);
  }, d = u(true), g = u(false);
  return n.addEventListener("scroll", d, Vc), o && n.addEventListener("scrollend", g, Vc), () => {
    n.removeEventListener("scroll", d), o && n.removeEventListener("scrollend", g);
  };
}, GI = (e6, t) => qI(e6, t, (r) => {
  const { horizontal: n, isRtl: i } = e6.options;
  return n ? r.scrollLeft * (i && -1 || 1) : r.scrollTop;
}), ZI = (e6, t, r) => {
  if (r.options.useCachedMeasurements) {
    const n = r.indexFromElement(e6), i = r.options.getItemKey(n);
    return r.itemSizeCache.get(i) ?? r.options.estimateSize(n);
  }
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[r.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  if (!t) {
    const n = r.indexFromElement(e6), i = r.options.getItemKey(n), o = r.itemSizeCache.get(i);
    if (o !== void 0)
      return o;
  }
  return e6[r.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, KI = (e6, {
  adjustments: t = 0,
  behavior: r
}, n) => {
  var i, o;
  (o = (i = n.scrollElement) == null ? void 0 : i.scrollTo) == null || o.call(i, {
    [n.options.horizontal ? "left" : "top"]: e6 + t,
    behavior: r
  });
}, YI = KI;
class XI {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = false, this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var r, n, i;
      return ((i = (n = (r = this.targetWindow) == null ? void 0 : r.performance) == null ? void 0 : n.now) == null ? void 0 : i.call(n)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let r = null;
      const n = () => r || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : r = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((o) => {
          const l = () => {
            const c = o.target, u = this.indexFromElement(c);
            if (!c.isConnected) {
              this.observer.unobserve(c);
              for (const [d, g] of this.elementsCache)
                if (g === c) {
                  this.elementsCache.delete(d);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(u) && this.resizeItem(
              u,
              this.options.measureElement(c, o, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var i;
          (i = n()) == null || i.disconnect(), r = null;
        },
        observe: (i) => {
          var o;
          return (o = n()) == null ? void 0 : o.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var o;
          return (o = n()) == null ? void 0 : o.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (r) => {
      var n, i;
      const o = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: BI,
        rangeExtractor: WI,
        onChange: () => {
        },
        measureElement: ZI,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: false,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate",
        useCachedMeasurements: false
      };
      for (const h in r) {
        const b = r[h];
        b !== void 0 && (o[h] = b);
      }
      const l = this.options;
      let c = null, u = null, d = false;
      if (l !== void 0 && l.enabled && o.enabled && o.anchorTo === "end" && this.scrollElement !== null) {
        const h = l.count, b = o.count, x = this.getMeasurements(), v = h > 0 ? ((n = x[0]) == null ? void 0 : n.key) ?? l.getItemKey(0) : null, w = h > 0 ? ((i = x[h - 1]) == null ? void 0 : i.key) ?? l.getItemKey(h - 1) : null;
        if (b !== h || h > 0 && b > 0 && (o.getItemKey(0) !== v || o.getItemKey(b - 1) !== w)) {
          d = true;
          const m = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? x[0] : null;
          m && (c = [m.key, this.getScrollOffset() - m.start]);
          const y = o.followOnAppend === true ? "auto" : o.followOnAppend || null;
          y && b > h && this.isAtEnd(l.scrollEndThreshold) && (h === 0 || o.getItemKey(b - 1) !== w) && (u = y);
        }
      }
      this.options = o, d && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let g = false, f = 0;
      if (c && this.scrollOffset !== null) {
        const [h, b] = c, x = this.getMeasurements(), { count: v, getItemKey: w } = this.options;
        let m = 0;
        for (; m < v && w(m) !== h; )
          m++;
        if (m < v) {
          const y = x[m];
          if (y) {
            const S = Math.max(0, y.start + b);
            S !== this.scrollOffset && (f = S - this.scrollOffset, this.scrollOffset = S, g = true);
          }
        }
      }
      (g || u) && (this.pendingScrollAnchor = [
        g ? c[0] : null,
        g ? c[1] : 0,
        u,
        f
      ]);
    }, this.notify = (r) => {
      var n, i;
      (i = (n = this.options).onChange) == null || i.call(n, this, r);
    }, this.maybeNotify = Po(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (r) => {
        this.notify(r);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((r) => r()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this._iosDeferredAdjustment = 0, this._iosTouching = false, this._iosJustTouchEnded = false, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var r;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((r = this.scrollElement) == null ? void 0 : r.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, l) => {
            if (l && this._intendedScrollOffset === null && o === this.scrollOffset)
              return;
            this._intendedScrollOffset !== null && Math.abs(o - this._intendedScrollOffset) < 1.5 && (o = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
            const c = this.getScrollOffset();
            this.scrollDirection = l ? c === o ? this.scrollDirection : c < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = l, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const o = this.scrollElement, l = () => {
            this._iosTouching = true, this._iosJustTouchEnded = false, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, c = () => {
            this._iosTouching = false, !(!Yd() || this.targetWindow == null) && (this._iosJustTouchEnded = true, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          o.addEventListener(
            "touchstart",
            l,
            Vc
          ), o.addEventListener(
            "touchend",
            c,
            Vc
          ), this.unsubs.push(() => {
            o.removeEventListener("touchstart", l), o.removeEventListener("touchend", c), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const i = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, i && this.scrollElement && this.options.enabled) {
        const [o, l, c, u] = i;
        o !== null && !c && (Yd() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? u !== 0 && (this._iosDeferredAdjustment += u) : this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        })), c && this.scrollToEnd({ behavior: c });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const r = this.getScrollOffset(), n = this.getMaxScrollOffset();
      if (r < 0 || r > n) return;
      if (this._iosDeferredAdjustment < 0 && r >= n - 1) {
        this._iosDeferredAdjustment = 0;
        return;
      }
      const i = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(r, {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = Po(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode,
        this.options.gap
      ],
      (r, n, i, o, l, c, u, d) => (this.prevLanes !== void 0 && this.prevLanes !== c && (this.lanesChangedFlag = true), this.prevLanes = c, this.pendingMin = null, {
        count: r,
        paddingStart: n,
        scrollMargin: i,
        getItemKey: o,
        enabled: l,
        lanes: c,
        laneAssignmentMode: u,
        gap: d
      }),
      {
        key: false
      }
    ), this.getMeasurements = Po(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: r,
        paddingStart: n,
        scrollMargin: i,
        getItemKey: o,
        enabled: l,
        lanes: c,
        laneAssignmentMode: u,
        gap: d
      }, g) => {
        const f = this.itemSizeCache;
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > r)
          for (const m of this.laneAssignments.keys())
            m >= r && this.laneAssignments.delete(m);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((m) => {
          this.itemSizeCache.set(m.key, m.size);
        }));
        const h = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === r && (this.lanesSettling = false), c === 1) {
          const m = r * 2;
          let y = this._flatMeasurements;
          if (!y || y.length < m) {
            const E = new Float64Array(m);
            y && h > 0 && E.set(y.subarray(0, h * 2)), y = E, this._flatMeasurements = y;
          }
          let S;
          if (h === 0)
            S = n + i;
          else {
            const E = h - 1;
            S = y[E * 2] + y[E * 2 + 1] + d;
          }
          for (let E = h; E < r; E++) {
            const A = o(E), $ = f.get(A), T = typeof $ == "number" ? $ : this.options.estimateSize(E);
            y[E * 2] = S, y[E * 2 + 1] = T, S += T + d;
          }
          const O = FI(r, y, o);
          return this.measurementsCache = O, O;
        }
        const b = this.measurementsCache.slice(0, h), x = new Array(c).fill(
          void 0
        ), v = new Float64Array(c);
        let w = 0;
        for (let m = 0; m < h; m++) {
          const y = b[m];
          y && (x[y.lane] === void 0 && w++, x[y.lane] = m, v[y.lane] = y.end);
        }
        for (let m = h; m < r; m++) {
          const y = o(m), S = this.laneAssignments.get(m);
          let O, E;
          const A = u === "estimate" || f.has(y);
          if (S !== void 0 && this.options.lanes > 1) {
            O = S;
            const j = x[O], z = j !== void 0 ? b[j] : void 0;
            E = z ? z.end + d : n + i;
          } else if (w === c) {
            let j = 0, z = v[0], M = x[0];
            for (let W = 1; W < c; W++) {
              const V = v[W];
              (V < z || V === z && x[W] < M) && (j = W, z = V, M = x[W]);
            }
            O = j, E = z + d, A && this.laneAssignments.set(m, O);
          } else
            O = m % this.options.lanes, E = n + i, A && this.laneAssignments.set(m, O);
          const $ = f.get(y), T = typeof $ == "number" ? $ : this.options.estimateSize(m), D = E + T;
          b[m] = {
            index: m,
            start: E,
            size: T,
            end: D,
            key: y,
            lane: O
          }, x[O] === void 0 && w++, x[O] = m, v[O] = D;
        }
        return this.measurementsCache = b, b;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Po(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (r, n, i, o) => r.length === 0 || n === 0 ? (this.range = null, null) : (this.range = QI(
        r,
        n,
        i,
        o,
        // Pass the typed array so binary search + forward-walk can read
        // start/end directly from Float64Array, skipping the Proxy traps.
        o === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      ), this.range),
      {
        key: false,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Po(
      () => {
        let r = null, n = null;
        const i = this.calculateRange();
        return i && (r = i.startIndex, n = i.endIndex), this.maybeNotify.updateDeps([this.isScrolling, r, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          r,
          n
        ];
      },
      (r, n, i, o, l) => o === null || l === null ? [] : r({
        startIndex: o,
        endIndex: l,
        overscan: n,
        count: i
      }),
      {
        key: false,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (r) => {
      const n = this.options.indexAttribute, i = r.getAttribute(n);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (r) => {
      var n;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return true;
      const i = this.scrollState.index ?? ((n = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : n.index);
      if (i !== void 0 && this.range) {
        const o = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), l = Math.max(0, i - o), c = Math.min(
          this.options.count - 1,
          i + o
        );
        return r >= l && r <= c;
      }
      return true;
    }, this.measureElement = (r) => {
      if (!r) {
        this.elementsCache.forEach((l, c) => {
          l.isConnected || (this.observer.unobserve(l), this.elementsCache.delete(c));
        });
        return;
      }
      const n = this.indexFromElement(r), i = this.options.getItemKey(n), o = this.elementsCache.get(i);
      o !== r && (o && this.observer.unobserve(o), this.observer.observe(r), this.elementsCache.set(i, r)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(n) && this.resizeItem(n, this.options.measureElement(r, void 0, this));
    }, this.resizeItem = (r, n) => {
      var i, o;
      if (r < 0 || r >= this.options.count) return;
      let l, c, u;
      const d = this._flatMeasurements;
      if (this.options.lanes === 1 && d !== null)
        u = this.options.getItemKey(r), c = d[r * 2], l = d[r * 2 + 1];
      else {
        const h = this.measurementsCache[r];
        if (!h) return;
        u = h.key, c = h.start, l = h.size;
      }
      const g = this.itemSizeCache.get(u) ?? l, f = n - g;
      if (f !== 0) {
        const h = this.options.anchorTo === "end" && ((i = this.scrollState) == null ? void 0 : i.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, b = h ? this.getTotalSize() : 0, x = ((o = this.scrollState) == null ? void 0 : o.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[r] ?? {
            index: r,
            key: u,
            start: c,
            size: l,
            end: c + l,
            lane: 0
          },
          f,
          this
        ) : (
          // Default: adjust when the resize is an above-viewport item.
          // First measurement (!has(key)): always adjust — the item
          // has never been sized, so the estimate→actual delta must
          // be compensated regardless of scroll direction.
          // Re-measurement (has(key)): skip during backward scroll
          // to avoid the "items jump while scrolling up" cascade.
          c < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(u) || this.scrollDirection !== "backward")
        ));
        (this.pendingMin === null || r < this.pendingMin) && (this.pendingMin = r), this.itemSizeCache.set(u, n), this.itemSizeCacheVersion++, h ? this.applyScrollAdjustment(this.getTotalSize() - b) : x && this.applyScrollAdjustment(f), this.notify(false);
      }
    }, this.getVirtualItems = Po(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (r, n) => {
        const i = [];
        for (let o = 0, l = r.length; o < l; o++) {
          const c = r[o], u = n[c];
          i.push(u);
        }
        return i;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (r) => {
      const n = this.getMeasurements();
      if (n.length === 0)
        return;
      const i = this._flatMeasurements, o = this.options.lanes === 1 && i != null, l = jw(
        0,
        n.length - 1,
        o ? (c) => i[c * 2] : (c) => Fm(n[c]).start,
        r
      );
      return Fm(n[l]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const r = this.scrollElement.document.documentElement;
        return this.options.horizontal ? r.scrollWidth - this.scrollElement.innerWidth : r.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (r = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= r, this.getOffsetForAlignment = (r, n, i = 0) => {
      if (!this.scrollElement) return 0;
      const o = this.getSize(), l = this.getScrollOffset();
      n === "auto" && (n = r >= l + o ? "end" : "start"), n === "center" ? r += (i - o) / 2 : n === "end" && (r -= o);
      const c = this.getMaxScrollOffset();
      return Math.max(Math.min(c, r), 0);
    }, this.getOffsetForIndex = (r, n = "auto") => {
      r = Math.max(0, Math.min(r, this.options.count - 1));
      const i = this.getSize(), o = this.getScrollOffset(), l = this.measurementsCache[r];
      if (!l) return;
      if (n === "auto")
        if (l.end >= o + i - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= o + this.options.scrollPaddingStart)
          n = "start";
        else
          return [o, n];
      if (n === "end" && r === this.options.count - 1)
        return [this.getMaxScrollOffset(), n];
      const c = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(c, n, l.size),
        n
      ];
    }, this.scrollToOffset = (r, { align: n = "start", behavior: i = "auto" } = {}) => {
      this._iosDeferredAdjustment = 0;
      const o = this.getOffsetForAlignment(r, n), l = this.now();
      this.scrollState = {
        index: null,
        align: n,
        behavior: i,
        startedAt: l,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (r, {
      align: n = "auto",
      behavior: i = "auto"
    } = {}) => {
      this._iosDeferredAdjustment = 0, r = Math.max(0, Math.min(r, this.options.count - 1));
      const o = this.getOffsetForIndex(r, n);
      if (!o)
        return;
      const [l, c] = o, u = this.now();
      this.scrollState = {
        index: r,
        align: c,
        behavior: i,
        startedAt: u,
        lastTargetOffset: l,
        stableFrames: 0
      }, this._scrollToOffset(l, { adjustments: void 0, behavior: i }), this.scheduleScrollReconcile();
    }, this.scrollBy = (r, { behavior: n = "auto" } = {}) => {
      const i = this.getScrollOffset() + r, o = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: n,
        startedAt: o,
        lastTargetOffset: i,
        stableFrames: 0
      }, this._scrollToOffset(i, { adjustments: void 0, behavior: n }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: r = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: r
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: r
      });
    }, this.getTotalSize = () => {
      var r;
      const n = this.getMeasurements();
      let i;
      if (n.length === 0)
        i = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const o = n.length - 1, l = this._flatMeasurements;
        l != null ? i = l[o * 2] + l[o * 2 + 1] : i = ((r = n[o]) == null ? void 0 : r.end) ?? 0;
      } else {
        const o = Array(this.options.lanes).fill(null);
        let l = n.length - 1;
        for (; l >= 0 && o.some((c) => c === null); ) {
          const c = n[l];
          o[c.lane] === null && (o[c.lane] = c.end), l--;
        }
        i = Math.max(...o.filter((c) => c !== null));
      }
      return Math.max(
        i - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const r = [];
      if (this.itemSizeCache.size === 0) return r;
      const n = this.getMeasurements();
      for (const i of n)
        i && this.itemSizeCache.has(i.key) && r.push({
          index: i.index,
          key: i.key,
          start: i.start,
          size: i.size,
          end: i.end,
          lane: i.lane
        });
      return r;
    }, this._scrollToOffset = (r, {
      adjustments: n,
      behavior: i
    }) => {
      this._intendedScrollOffset = r + (n ?? 0), this.options.scrollToFn(r, { behavior: i, adjustments: n }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(false);
    }, this.setOptions(t);
  }
  applyScrollAdjustment(t, r) {
    t !== 0 && (Yd() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += t : (this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += t,
      behavior: r
    }), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0)));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const t = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, r = t ? t[0] : this.scrollState.lastTargetOffset, n = 1, i = r !== this.scrollState.lastTargetOffset;
    if (!i && HI(r, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= n) {
        this.getScrollOffset() !== r && this._scrollToOffset(r, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, i) {
      const o = this.getSize() || 600, l = Math.abs(r - this.getScrollOffset()), c = this.scrollState.behavior === "smooth" && l > o;
      this.scrollState.lastTargetOffset = r, c || (this.scrollState.behavior = "auto"), this._scrollToOffset(r, {
        adjustments: void 0,
        behavior: c ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const jw = (e6, t, r, n) => {
  for (; e6 <= t; ) {
    const i = (e6 + t) / 2 | 0, o = r(i);
    if (o < n)
      e6 = i + 1;
    else if (o > n)
      t = i - 1;
    else
      return i;
  }
  return e6 > 0 ? e6 - 1 : 0;
};
function JI(e6, t, r) {
  let n = 0;
  for (; n <= t; ) {
    const i = (n + t) / 2 | 0, o = e6[i * 2];
    if (o < r)
      n = i + 1;
    else if (o > r)
      t = i - 1;
    else
      return i;
  }
  return n > 0 ? n - 1 : 0;
}
function QI(e6, t, r, n, i) {
  const o = e6.length - 1;
  if (e6.length <= n)
    return { startIndex: 0, endIndex: o };
  if (n === 1 && i !== null) {
    const u = JI(
      i,
      o,
      r
    );
    let d = u;
    const g = r + t;
    for (; d < o && i[d * 2] + i[d * 2 + 1] < g; )
      d++;
    return { startIndex: u, endIndex: d };
  }
  let l = jw(0, o, (u) => e6[u].start, r), c = l;
  if (n === 1)
    for (; c < o && e6[c].end < r + t; )
      c++;
  else if (n > 1) {
    const u = Array(n).fill(0);
    for (; c < o && u.some((g) => g < r + t); ) {
      const g = e6[c];
      u[g.lane] = g.end, c++;
    }
    const d = Array(n).fill(r + t);
    for (; l >= 0 && d.some((g) => g >= r); ) {
      const g = e6[l];
      d[g.lane] = g.start, l--;
    }
    l = Math.max(0, l - l % n), c = Math.min(o, c + (n - 1 - c % n));
  }
  return { startIndex: l, endIndex: c };
}
const Xd = typeof document < "u" ? __mf_22 : __mf_20;
function eP({
  useFlushSync: e6 = true,
  directDomUpdates: t = false,
  directDomUpdatesMode: r = "transform",
  ...n
}) {
  const i = __mf_24((d) => d + 1, 0)[1], o = __mf_25({
    enabled: t,
    mode: r,
    container: null,
    lastSize: null,
    // Keyed by the element itself so a remounted node (same key, new DOM
    // node — e.g. when `enabled` is toggled off then on) is treated as fresh
    // and gets its style written.
    lastPositions: /* @__PURE__ */ new WeakMap(),
    prevRange: null
  });
  o.current.enabled = t, o.current.mode = r;
  const l = (d) => {
    const g = o.current;
    if (!g.enabled || !g.container) return;
    const f = d.getTotalSize();
    if (f !== g.lastSize) {
      g.lastSize = f;
      const m = d.options.horizontal ? "width" : "height";
      g.container.style[m] = `${f}px`;
    }
    const h = !!d.options.horizontal, b = g.mode === "transform", x = h ? "left" : "top", v = d.options.scrollMargin, w = d.getVirtualItems();
    for (const m of w) {
      const y = m.start - v, S = d.elementsCache.get(m.key);
      S && g.lastPositions.get(S) !== y && (g.lastPositions.set(S, y), b ? S.style.transform = h ? `translate3d(${y}px, 0, 0)` : `translate3d(0, ${y}px, 0)` : S.style[x] = `${y}px`);
    }
  }, c = {
    ...n,
    onChange: (d, g) => {
      var f;
      const h = o.current;
      let b = true;
      if (h.enabled) {
        l(d);
        const x = d.range, v = h.prevRange;
        b = !v || v.isScrolling !== d.isScrolling || v.startIndex !== (x == null ? void 0 : x.startIndex) || v.endIndex !== (x == null ? void 0 : x.endIndex), b && (h.prevRange = x ? {
          startIndex: x.startIndex,
          endIndex: x.endIndex,
          isScrolling: d.isScrolling
        } : null);
      }
      b && (e6 && g ? __mf_3(i) : i()), (f = n.onChange) == null || f.call(n, d, g);
    }
  }, [u] = __mf_26(() => {
    const d = new XI(c);
    return Object.assign(d, {
      containerRef: (g) => {
        const f = o.current;
        if (f.container = g, f.lastSize = null, g && f.enabled) {
          const h = d.getTotalSize();
          f.lastSize = h;
          const b = d.options.horizontal ? "width" : "height";
          g.style[b] = `${h}px`;
        }
      }
    });
  });
  return u.setOptions(c), Xd(() => u._didMount(), []), Xd(() => u._willUpdate()), Xd(() => {
    l(u);
  }), u;
}
function tP(e6) {
  return eP({
    observeElementRect: VI,
    observeElementOffset: GI,
    scrollToFn: YI,
    ...e6
  });
}
const rP = __mf_9(null), qt = () => {
  const e6 = __mf_18(rP);
  if (!e6)
    throw new Error(
      "Select compound components must be used within Select.Root"
    );
  return e6;
}, jt = {
  sm: {
    trigger: "h-5 min-h-fit",
    control: "min-h-5 p-0.5 gap-1",
    input: "text-xs h-3.5",
    placeholder: "placeholder:text-xs text-xs",
    singleValue: "text-xs",
    multiValue: "h-3.5 px-0.5 gap-1 text-xxs",
    multiValueLabel: "text-xxs",
    multiValueRemove: "w-3 h-3",
    indicatorsContainer: "gap-1",
    clearIndicator: "p-0.5 size-3",
    dropdownIndicator: "p-0.5 size-3",
    indicatorSeparator: "h-3",
    loadingIndicator: "w-3 h-3",
    menu: "m-0",
    menuList: "py-1",
    option: "px-1 py-0.5 text-xs",
    group: "pt-1",
    groupHeading: "px-2 py-0.5 text-xxs",
    noOptionsMessage: "px-2 py-1 text-xxs",
    loadingMessage: "px-2 py-1 text-xxs",
    message: "text-xxs p-1.5",
    icon: "text-sm"
  },
  md: {
    trigger: "h-6 min-h-fit",
    control: "min-h-6 p-1 gap-1.5",
    input: "text-s h-4",
    placeholder: "placeholder:text-s text-s",
    singleValue: "text-s",
    multiValue: "h-4 p-1 gap-1 text-xs",
    multiValueLabel: "text-xs",
    multiValueRemove: "w-3.5 h-3.5",
    indicatorsContainer: "gap-1",
    clearIndicator: "p-0.5 size-4",
    dropdownIndicator: "p-0.5 size-4",
    indicatorSeparator: "h-4",
    loadingIndicator: "w-4 h-4",
    menu: "m-0",
    menuList: "py-1",
    option: "px-2 py-1 text-s",
    group: "pt-1.5",
    groupHeading: "px-3 py-1 text-xs",
    noOptionsMessage: "px-2 py-1.5 text-xs",
    loadingMessage: "px-3 py-1.5 text-xs",
    message: "text-xs p-2",
    icon: "text-base"
  },
  lg: {
    trigger: "h-7 min-h-fit",
    control: "min-h-7 p-1.5 gap-2",
    input: "text-sm h-5",
    placeholder: "placeholder:text-sm text-sm",
    singleValue: "text-sm",
    multiValue: "h-5 px-1.5 gap-1.5 text-s",
    multiValueLabel: "text-xs",
    multiValueRemove: "w-4 h-4",
    indicatorsContainer: "gap-1.5",
    clearIndicator: "p-0.5 size-5",
    dropdownIndicator: "p-1 size-5",
    indicatorSeparator: "h-5",
    loadingIndicator: "w-5 h-5",
    menu: "m-0",
    menuList: "py-1.5",
    option: "px-3 py-2 text-sm",
    group: "pt-2",
    groupHeading: "px-4 py-1.5 text-s",
    noOptionsMessage: "px-4 py-2 text-s",
    loadingMessage: "px-4 py-2 text-s",
    message: "text-s p-2.5",
    icon: "text-lg"
  }
}, Tt = {
  primary: {
    // Control
    control: "cursor-pointer bg-input-bg text-select-text",
    controlFocused: "border-input-focus-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-input-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "placeholder:text-input-placeholder text-input-text placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-primary",
    // Menu
    menu: "bg-select-list-bg border-input-focus-border shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-primary-dark",
    messageBackground: "bg-input-message-bg",
    messageBorder: "ring-input-info-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  positive: {
    // Control
    control: "cursor-pointer bg-input-bg text-select-text",
    controlFocused: "border-positive",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-input-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "placeholder:text-input-placeholder text-input-text placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-positive",
    // Menu
    menu: "bg-select-list-bg border-positive shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-positive-dark",
    messageBackground: "bg-positive-light",
    messageBorder: "ring-positive",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  warning: {
    // Control
    control: "cursor-pointer bg-input-bg text-select-text",
    controlFocused: "border-input-warning-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-input-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "placeholder:text-input-placeholder text-input-text placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-warning",
    // Menu
    menu: "bg-select-list-bg border-input-warning-border shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-warning-dark",
    messageBackground: "bg-input-warning-bg",
    messageBorder: "ring-input-warning-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  negative: {
    // Control
    control: "cursor-pointer bg-input-bg text-negative",
    controlFocused: "border-input-error-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-input-bg border-input-error-border text-negative",
    // Placeholder
    placeholder: "placeholder:text-input-placeholder text-input-text placeholder:opacity-60",
    // Single value
    singleValue: "text-negative",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-negative",
    // Menu
    menu: "bg-select-list-bg border-input-error-border shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-negative-dark",
    messageBackground: "bg-input-error-bg",
    messageBorder: "ring-input-error-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  }
}, Bw = ({
  menuOpen: e6,
  menuPlacement: t,
  hasMessage: r,
  fallback: n
}) => {
  if (!e6) return n;
  const i = t === "top";
  return r ? i ? "last:rounded-b" : "first:rounded-t" : i ? "rounded-b" : "rounded-t";
}, nP = ({
  size: e6,
  color: t,
  isDisabled: r,
  isReadOnly: n,
  hasMessage: i,
  isInvalid: o,
  isFocused: l,
  menuPlacement: c
}) => {
  const u = Tt[o ? "negative" : t], d = Bw({
    menuOpen: !!(l && c),
    menuPlacement: c,
    hasMessage: i,
    fallback: "only:rounded first:rounded-t last:rounded-b"
  });
  return ce(
    "bg-input-bg flex relative transition-all duration-200 ease-in-out items-center min-w-0",
    d,
    u.control,
    // A read-only select displays its value as plain text: drop the interactive
    // pointer cursor and the border (unless a message ring is shown).
    n && "cursor-default",
    i ? ["ring-1", u.messageBorder] : n ? [] : [
      "border",
      r ? "border-input-border" : l ? u.controlFocused : `border-select-border focus-within:${u.controlFocused}`
    ],
    jt[e6].trigger,
    {
      "ring-1": i,
      [u.controlDisabled]: r
    }
  );
}, iP = ({
  size: e6,
  color: t,
  isDisabled: r,
  isAction: n
}) => {
  const i = Tt[t];
  return ce(
    "transition-colors duration-200 rounded max-h-full h-fit px-0.5",
    jt[e6].icon,
    e6 === "sm" ? "m-px" : "m-0.5",
    r ? "text-muted opacity-60 pointer-events-none" : n ? i.iconAction : i.icon,
    {
      "cursor-pointer p-0.5": n && !r,
      [i.iconActionHover]: n && !r,
      "pointer-events-none": !n
    }
  );
}, oP = ({
  size: e6,
  color: t,
  isDisabled: r,
  isReadOnly: n,
  isFocused: i,
  isInvalid: o,
  hasMessage: l,
  hasGroup: c,
  menuPlacement: u
}) => {
  const d = Tt[o ? "negative" : t], g = Bw({
    menuOpen: !!(i && u),
    menuPlacement: u,
    hasMessage: l,
    fallback: "rounded"
  });
  return c ? ce(
    "flex items-center justify-between flex-1 min-w-0",
    jt[e6].control,
    "bg-transparent border-0",
    n && "cursor-default",
    {
      [d.controlDisabled]: r
    }
  ) : ce(
    "flex items-center justify-between",
    g,
    jt[e6].control,
    d.control,
    n && "cursor-default",
    l ? ["ring-1", d.messageBorder] : n ? [] : [
      "border",
      r ? "border-input-border" : i ? d.controlFocused : `border-select-border
            focus-within:${d.controlFocused}`
    ],
    {
      [d.controlDisabled]: r
    }
  );
}, sP = ({
  isMulti: e6
}) => ce("flex items-center gap-1 flex-1 min-w-0 overflow-hidden", {
  "flex-wrap": e6,
  "px-0.5": !e6
}), aP = ({
  size: e6,
  color: t
}) => ce(
  "bg-transparent border-0 outline-hidden flex-1 min-w-7.5 text-input-text",
  jt[e6].input,
  Tt[t].placeholder
), lP = ({
  size: e6
}) => ce(
  "select-none truncate text-input-placeholder",
  jt[e6].placeholder
), cP = ({
  size: e6,
  color: t,
  isDisabled: r
}) => ce(
  "truncate",
  jt[e6].singleValue,
  r ? Tt[t].singleValueDisabled : Tt[t].singleValue
), uP = ({
  size: e6,
  color: t,
  isDisabled: r,
  isFocused: n
}) => ce(
  "inline-flex items-center rounded-xs",
  jt[e6].multiValue,
  r ? Tt[t].multiValueDisabled : Tt[t].multiValue,
  {
    "border border-white": n && !r
  }
), dP = ({
  size: e6
}) => ce("truncate", jt[e6].multiValueLabel), fP = ({
  size: e6,
  color: t,
  isDisabled: r
}) => ce(
  "flex items-center justify-center cursor-pointer transition-colors",
  jt[e6].multiValueRemove,
  Tt[t].multiValueRemove
), Ww = ({
  size: e6,
  color: t,
  isDisabled: r
}) => ce(
  "flex items-center justify-center transition-colors rounded",
  jt[e6].clearIndicator,
  r ? "hidden" : [
    Tt[t].clearIndicator,
    Tt[t].clearIndicatorHover
  ]
), pP = ({
  size: e6,
  color: t,
  isDisabled: r
}) => ce(
  "flex items-center justify-center transition-colors rounded",
  jt[e6].dropdownIndicator,
  r ? "text-grey-200" : [
    Tt[t].dropdownIndicator,
    Tt[t].dropdownIndicatorHover
  ]
), hP = ({
  size: e6,
  placement: t,
  hasMessage: r,
  color: n,
  hasGroup: i
}) => {
  const o = t === "top";
  return ce(
    "absolute z-50 overflow-hidden border",
    // In grouped mode the containing block is SelectGroup (which has a 1px border).
    // w-full would only cover the content-box (W-2px). Using -left-px/-right-px
    // stretches the menu to cover SelectGroup's full border-box instead.
    i ? "-left-px -right-px" : "w-full",
    Tt[n].menu,
    {
      [Tt[n].messageBorder]: r
    },
    o ? "bottom-full rounded-t rounded-b-none border-b-0" : "top-full rounded-b border-t-0",
    jt[e6].menu
  );
}, gP = ({ size: e6 }) => ce(
  "overflow-y-auto",
  jt[e6].menuList,
  Tt.primary.menuList
), vP = ({
  size: e6,
  color: t,
  isDisabled: r,
  isFocused: n,
  isSelected: i
}) => ce(
  "transition-colors duration-150 cursor-pointer mx-1 rounded flex items-center gap-2 min-w-fit",
  jt[e6].option,
  {
    [Tt[t].optionDisabled]: r,
    [Tt[t].optionSelected]: i && !r,
    [Tt[t].optionFocused]: n && !i && !r,
    [Tt[t].option]: !i && !n && !r
  }
), mP = ({ size: e6 }) => ce(jt[e6].group), bP = ({
  size: e6,
  color: t
}) => ce(jt[e6].groupHeading, Tt[t].groupHeading), yP = ({
  size: e6
}) => ce("text-grey-100", jt[e6].loadingMessage), wP = ({
  size: e6
}) => ce(
  jt[e6].noOptionsMessage,
  Tt.primary.noOptionsMessage
), jm = (e6) => {
  const t = e6[0];
  return e6.length > 0 && typeof t == "object" && t !== null && "options" in t && Array.isArray(t.options);
};
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, xt.apply(null, arguments);
}
var Xl = { exports: {} };
var ef, qm;
function Xp() {
  if (qm) return ef;
  qm = 1;
  var e6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ef = e6, ef;
}
var nf, Xm;
function AP() {
  if (Xm) return nf;
  Xm = 1;
  var e6 = /* @__PURE__ */ Xp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, nf = function() {
    function n(l, c, u, d, g, f) {
      if (f !== e6) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, nf;
}
var Jm;
function TP() {
  if (Jm) return Xl.exports;
  if (Jm = 1, false) ; else
    Xl.exports = /* @__PURE__ */ AP()();
  return Xl.exports;
}
var RP = /* @__PURE__ */ TP();
const pe = /* @__PURE__ */ gw(RP);
var of = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qm;
function CP() {
  if (Qm) return Qe;
  Qm = 1;
  var e6 = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function v(w) {
    if (typeof w == "object" && w !== null) {
      var m = w.$$typeof;
      switch (m) {
        case e6:
          switch (w = w.type, w) {
            case r:
            case i:
            case n:
            case d:
            case g:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case c:
                case l:
                case u:
                case h:
                case f:
                case o:
                  return w;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return Qe.ContextConsumer = l, Qe.ContextProvider = o, Qe.Element = e6, Qe.ForwardRef = u, Qe.Fragment = r, Qe.Lazy = h, Qe.Memo = f, Qe.Portal = t, Qe.Profiler = i, Qe.StrictMode = n, Qe.Suspense = d, Qe.SuspenseList = g, Qe.isAsyncMode = function() {
    return false;
  }, Qe.isConcurrentMode = function() {
    return false;
  }, Qe.isContextConsumer = function(w) {
    return v(w) === l;
  }, Qe.isContextProvider = function(w) {
    return v(w) === o;
  }, Qe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e6;
  }, Qe.isForwardRef = function(w) {
    return v(w) === u;
  }, Qe.isFragment = function(w) {
    return v(w) === r;
  }, Qe.isLazy = function(w) {
    return v(w) === h;
  }, Qe.isMemo = function(w) {
    return v(w) === f;
  }, Qe.isPortal = function(w) {
    return v(w) === t;
  }, Qe.isProfiler = function(w) {
    return v(w) === i;
  }, Qe.isStrictMode = function(w) {
    return v(w) === n;
  }, Qe.isSuspense = function(w) {
    return v(w) === d;
  }, Qe.isSuspenseList = function(w) {
    return v(w) === g;
  }, Qe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === i || w === n || w === d || w === g || w === b || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === f || w.$$typeof === o || w.$$typeof === l || w.$$typeof === u || w.$$typeof === x || w.getModuleId !== void 0);
  }, Qe.typeOf = v, Qe;
}
var t0;
function PP() {
  return t0 || (t0 = 1, of.exports = CP() ), of.exports;
}
PP();
var QP = {
  environment: pe.shape({
    addEventListener: pe.func.isRequired,
    removeEventListener: pe.func.isRequired,
    document: pe.shape({
      createElement: pe.func.isRequired,
      getElementById: pe.func.isRequired,
      activeElement: pe.any.isRequired,
      body: pe.any.isRequired
    }).isRequired,
    Node: pe.func.isRequired
  }),
  itemToKey: pe.func,
  stateReducer: pe.func
};
var ma = xt({}, QP, {
  getA11yStatusMessage: pe.func,
  highlightedIndex: pe.number,
  defaultHighlightedIndex: pe.number,
  initialHighlightedIndex: pe.number,
  isOpen: pe.bool,
  defaultIsOpen: pe.bool,
  initialIsOpen: pe.bool,
  selectedItem: pe.any,
  initialSelectedItem: pe.any,
  defaultSelectedItem: pe.any,
  id: pe.string,
  labelId: pe.string,
  menuId: pe.string,
  getItemId: pe.func,
  toggleButtonId: pe.string,
  onSelectedItemChange: pe.func,
  onHighlightedIndexChange: pe.func,
  onStateChange: pe.func,
  onIsOpenChange: pe.func,
  scrollIntoView: pe.func
}), eN = xt({}, le$1);
eN.useId;
xt({}, ma, {
  items: pe.array.isRequired,
  isItemDisabled: pe.func
});
xt({}, ma, {
  items: pe.array.isRequired,
  isItemDisabled: pe.func,
  inputValue: pe.string,
  defaultInputValue: pe.string,
  initialInputValue: pe.string,
  inputId: pe.string,
  onInputValueChange: pe.func
});
({
  stateReducer: ma.stateReducer,
  itemToKey: ma.itemToKey,
  environment: ma.environment,
  selectedItems: pe.array,
  initialSelectedItems: pe.array,
  defaultSelectedItems: pe.array,
  getA11yStatusMessage: pe.func,
  activeIndex: pe.number,
  initialActiveIndex: pe.number,
  defaultActiveIndex: pe.number,
  onActiveIndexChange: pe.func,
  onSelectedItemsChange: pe.func,
  keyNavigationNext: pe.string,
  keyNavigationPrevious: pe.string
});
var rN = xt({}, le$1);
rN.useId;
pe.func;
const nN = __mf_13(
  ({
    className: e6,
    children: t,
    isFocused: r,
    isDisabled: n,
    ...i
  }, o) => {
    const {
      size: l,
      color: c,
      isDisabled: u,
      isReadOnly: d,
      hasMessage: g,
      hasGroup: f,
      downshift: h,
      isInvalid: b,
      menuPlacement: x
    } = qt(), v = n ?? u, w = r ?? h.isOpen;
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: o,
        className: ce(
          oP({
            size: l,
            color: c,
            isDisabled: v,
            isReadOnly: d,
            isFocused: !!w,
            isInvalid: b && !h.isOpen,
            hasMessage: g,
            hasGroup: f,
            menuPlacement: h.isOpen ? x : void 0
          }),
          e6
        ),
        "aria-disabled": v,
        "aria-readonly": d,
        "aria-invalid": b,
        role: "combobox",
        tabIndex: v ? -1 : 0,
        ...i,
        children: t
      }
    );
  }
), iN = ({
  className: e6,
  children: t,
  isMulti: r
}) => /* @__PURE__ */ __mf_1("div", { className: ce(sP({ isMulti: r }), e6), children: t }), Tc = __mf_13(
  ({ isHidden: e6, inputClassName: t, className: r, ...n }, i) => {
    const { size: o, color: l } = qt();
    return e6 ? /* @__PURE__ */ __mf_1(
      "input",
      {
        ref: i,
        type: "text",
        className: r,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        },
        tabIndex: -1,
        ...n
      }
    ) : /* @__PURE__ */ __mf_1(
      "input",
      {
        ref: i,
        type: "text",
        "data-qui": "SelectSearchInput",
        className: ce(
          aP({ size: o, color: l }),
          t,
          e6 ? "" : r
        ),
        ...n
      }
    );
  }
), oN = ({ className: e6, children: t }) => {
  const { size: r } = qt();
  return /* @__PURE__ */ __mf_1("div", { className: ce(lP({ size: r }), e6), children: t });
}, sN = ({
  className: e6,
  children: t,
  data: r,
  isDisabled: n
}) => {
  const { size: i, color: o, getOptionLabel: l } = qt();
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      className: ce(
        cP({ size: i, color: o, isDisabled: n }),
        e6
      ),
      children: t || l(r)
    }
  );
}, ux = ({
  className: e6,
  children: t,
  data: r,
  isDisabled: n,
  isFocused: i,
  onRemove: o
}) => {
  const { size: l, color: c, downshift: u, getOptionLabel: d, isReadOnly: g } = qt(), f = () => {
    o ? o(r) : u.removeItem(r);
  };
  return /* @__PURE__ */ __mf_2(
    "div",
    {
      className: ce(
        uP({ size: l, color: c, isDisabled: n, isFocused: i }),
        e6
      ),
      children: [
        /* @__PURE__ */ __mf_1("div", { className: dP({ size: l }), children: t || d(r) }),
        !n && !g && /* @__PURE__ */ __mf_1(
          "div",
          {
            className: fP({
              size: l,
              color: c,
              isDisabled: false
            }),
            onClick: f,
            children: /* @__PURE__ */ __mf_1(es, { className: "w-3 h-3" })
          }
        )
      ]
    }
  );
}, dx = ({
  color: e6,
  className: t,
  children: r,
  onClick: n,
  isDisabled: i,
  ...o
}) => {
  const {
    size: l,
    color: c,
    isDisabled: u,
    downshift: d
  } = qt(), g = i ?? u, f = d.selectedItems.length > 0;
  if (g || !f) return null;
  const h = (b) => {
    b.stopPropagation(), n ? n(b) : d.clearSelection();
  };
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      className: ce(
        Ww({
          size: l,
          color: e6 || c,
          isDisabled: g
        }),
        t
      ),
      onClick: h,
      role: "button",
      tabIndex: 0,
      "aria-label": "Clear selection",
      ...o,
      children: r || /* @__PURE__ */ __mf_1(r2, {})
    }
  );
}, aN = ({
  className: e6,
  children: t,
  onClick: r,
  isDisabled: n,
  ...i
}) => {
  const {
    size: o,
    color: l,
    isDisabled: c,
    downshift: u
  } = qt(), d = n ?? c, g = u.inputValue.length > 0 && u.isSearchable;
  if (d || !g) return null;
  const f = (h) => {
    d || (h.preventDefault(), h.stopPropagation(), r ? r(h) : (u.setInputValue(""), u.clearSelection()));
  };
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      "data-qui": "SelectIndicator",
      className: ce(
        Ww({ size: o, color: l, isDisabled: d }),
        "cursor-pointer",
        e6
      ),
      onClick: f,
      onMouseDown: (h) => {
        h.preventDefault(), h.stopPropagation();
      },
      role: "button",
      tabIndex: -1,
      "aria-label": "Clear selection",
      ...i,
      children: t || /* @__PURE__ */ __mf_1(es, {})
    }
  );
}, fx = __mf_13(
  ({
    color: e6,
    className: t,
    children: r,
    onClick: n,
    isDisabled: i,
    ...o
  }, l) => {
    const {
      size: c,
      color: u,
      isDisabled: d,
      downshift: g
    } = qt(), f = i ?? d, h = g.isOpen, b = (v) => {
      f || (v.preventDefault(), v.stopPropagation(), n ? n(v) : g.toggleMenu());
    }, x = (v) => {
      v.preventDefault(), v.stopPropagation();
    };
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: l,
        "data-qui": "SelectIndicator",
        className: ce(
          pP({
            size: c,
            color: e6 || u,
            isDisabled: f
          }),
          "cursor-pointer",
          t
        ),
        onClick: x,
        onMouseDown: b,
        role: "button",
        tabIndex: -1,
        "aria-label": h ? "Close menu" : "Open menu",
        "aria-expanded": h,
        "aria-disabled": f,
        ...o,
        children: r || /* @__PURE__ */ __mf_1(
          _c,
          {
            className: ce("transition-transform duration-200", {
              "rotate-180": h
            })
          }
        )
      }
    );
  }
), lN = __mf_13(
  ({ className: e6, children: t, placement: r, ...n }, i) => {
    const { size: o, hasMessage: l, color: c, hasGroup: u } = qt();
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        "data-qui": "SelectMenu",
        ref: i,
        className: ce(
          hP({ size: o, placement: r, hasMessage: l, color: c, hasGroup: u }),
          e6
        ),
        ...n,
        children: t
      }
    );
  }
), cN = __mf_13(
  ({ className: e6, children: t, maxHeight: r = 300, totalHeight: n, ...i }, o) => {
    const { size: l } = qt();
    return /* @__PURE__ */ __mf_1(
      qp,
      {
        scrollableNodeProps: { ref: o },
        className: ce(gP({ size: l }), e6),
        style: { maxHeight: r },
        ...i,
        children: n !== void 0 ? /* @__PURE__ */ __mf_1(
          "div",
          {
            style: { height: n, position: "relative", width: "100%" },
            children: t
          }
        ) : t
      }
    );
  }
), Rc = ({
  className: e6,
  children: t,
  data: r,
  isDisabled: n,
  isFocused: i,
  isSelected: o,
  innerProps: l,
  optionClassName: c,
  ...u
}) => {
  const { size: d, color: g, getOptionLabel: f } = qt();
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      "data-qui": "SelectOption",
      className: ce(
        vP({ size: d, color: g, isDisabled: n, isFocused: i, isSelected: o }),
        c,
        e6
      ),
      ...l,
      ...u,
      children: t ?? f(r)
    }
  );
}, px = ({
  className: e6,
  children: t,
  data: r,
  label: n,
  renderGroupHeading: i
}) => {
  const { size: o } = qt();
  return /* @__PURE__ */ __mf_2(
    "div",
    {
      "data-qui": "SelectOptionGroup",
      className: ce(mP({ size: o }), e6),
      children: [
        /* @__PURE__ */ __mf_1(uN, { children: i ? i(r) : n || r.label }),
        t
      ]
    }
  );
}, uN = ({
  className: e6,
  children: t
}) => {
  const { size: r, color: n } = qt();
  return /* @__PURE__ */ __mf_1("div", { className: ce(bP({ size: r, color: n }), e6), children: t });
}, af = ({
  className: e6,
  children: t,
  inputValue: r
}) => {
  const { size: n } = qt();
  return /* @__PURE__ */ __mf_1("div", { className: ce(wP({ size: n }), e6), children: t || `No options found${r ? ` for "${r}"` : ""}` });
}, dN = __mf_13(
  ({ className: e6, children: t, ...r }, n) => {
    const {
      size: i,
      color: o,
      isDisabled: l,
      isReadOnly: c,
      hasMessage: u,
      isInvalid: d,
      setHasGroup: g,
      groupRef: f,
      menuVisible: h,
      menuPlacement: b
    } = qt();
    return __mf_20(() => (g(true), () => {
      g(false);
    }), [g]), /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: Fo([n, f]),
        "data-qui": "SelectGroup",
        className: ce(
          nP({
            size: i,
            color: o,
            isDisabled: l,
            isReadOnly: c,
            hasMessage: u,
            isInvalid: d,
            isFocused: h,
            menuPlacement: h ? b : void 0
          }),
          e6
        ),
        ...r,
        children: t
      }
    );
  }
), fN = __mf_13(
  ({
    isAction: e6 = false,
    className: t,
    isDisabled: r = false,
    style: n,
    children: i,
    ...o
  }, l) => {
    const { size: c, color: u, isDisabled: d } = qt(), g = r || d, f = iP({
      size: c,
      color: u,
      isDisabled: g,
      isAction: e6
    });
    return /* @__PURE__ */ __mf_1(
      "div",
      {
        ref: l,
        "data-qui": "SelectIcon",
        className: ce(f, t),
        style: n,
        role: e6 || o.onClick ? "button" : void 0,
        tabIndex: (e6 || o.onClick) && !g ? 0 : void 0,
        "aria-disabled": g,
        ...o,
        children: i
      }
    );
  }
), pN = ({
  isOpen: e6,
  usePortal: t,
  controlRef: r,
  selectId: n,
  children: i
}) => {
  const [o, l] = __mf_26(null);
  return __mf_22(() => {
    if (t && e6 && r.current) {
      const c = () => {
        var u;
        const d = (u = r.current) == null ? void 0 : u.closest(
          '[data-qui="SelectGroup"]'
        ), g = d || r.current;
        if (!g) return;
        const f = g.getBoundingClientRect();
        l(d ? {
          top: f.top + window.scrollY + d.clientTop,
          left: f.left + window.scrollX + d.clientLeft,
          width: d.clientWidth,
          height: d.clientHeight
        } : {
          top: f.top + window.scrollY,
          left: f.left + window.scrollX,
          width: f.width,
          height: f.height
        });
      };
      return c(), window.addEventListener("resize", c), window.addEventListener("scroll", c, true), () => {
        window.removeEventListener("resize", c), window.removeEventListener("scroll", c, true);
      };
    }
  }, [e6, t, r]), e6 ? t && o ? __mf_1$1(
    /* @__PURE__ */ __mf_1(
      "div",
      {
        "data-qui": "SelectPortal",
        "data-select-id": n,
        style: {
          position: "absolute",
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height,
          zIndex: 50,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ __mf_1("div", { style: { pointerEvents: "auto" }, children: i })
      }
    ),
    document.body
  ) : /* @__PURE__ */ __mf_1(__mf_0, { children: i }) : null;
}, Fo = (e6) => (t) => {
  e6.forEach((r) => {
    typeof r == "function" ? r(t) : r != null && "current" in r && (r.current = t);
  });
}, hN = (e6) => {
  let t = 0, r = window.innerHeight, n = e6.parentElement;
  for (; n && n !== document.body && n !== document.documentElement; ) {
    const { overflowY: i } = window.getComputedStyle(n);
    if (i !== "visible") {
      const o = n.getBoundingClientRect();
      t = Math.max(t, o.top), r = Math.min(r, o.bottom);
    }
    n = n.parentElement;
  }
  return { top: t, bottom: r };
}, gN = __mf_13(
  ({
    placeholder: e6,
    noOptionsMessage: t,
    hideNoOptions: r = false,
    loadingMessage: n = "Loading...",
    isClearable: i = false,
    isSearchClearable: o = false,
    isLoading: l = false,
    isRequired: c = false,
    hideIndicators: u = false,
    hideDropdownIndicator: d = false,
    searchPlacement: g = "trigger",
    menuPlacement: f = "bottom",
    hideSelectedOptions: h = false,
    closeMenuOnSelect: b,
    onFocus: x,
    onBlur: v,
    renderMenuHeader: w,
    formatOptionLabel: m,
    renderOption: y,
    optionClassName: S,
    renderValue: O,
    renderGroupHeading: E,
    inputRef: A,
    controlShouldRenderValue: $ = true,
    name: T,
    id: D,
    onSelectionComplete: j,
    "aria-label": z,
    "aria-labelledby": M,
    "aria-describedby": W,
    children: V,
    usePortal: P = false,
    virtualizeThreshold: K = 100,
    className: X,
    inputClassName: ne,
    ...he
  }, N) => {
    const {
      size: F,
      isInvalid: G,
      isDisabled: te,
      isReadOnly: Y,
      hasGroup: ie,
      downshift: Q,
      options: ae = [],
      getOptionLabel: de,
      getOptionValue: ee,
      isOptionDisabled: fe,
      menuPlacement: Se,
      setMenuPlacement: Z,
      menuVisible: Me,
      setMenuVisible: ge,
      inputClassName: ct,
      placeholder: bt,
      closeMenuOnSelect: Wt
    } = qt(), Mt = ne || ct, Lt = e6 ?? bt;
    Q.closeMenuOnSelectRef.current = b ?? Wt;
    const ut = __mf_23(() => {
      if (y) return y;
      if (m)
        return ({ data: Ee }) => m(Ee);
    }, [y, m]), dt = __mf_25(null), qe = A || dt, Fr = __mf_25(null), [ir, fo] = __mf_26(null), tn = __mf_25(null), {
      isOpen: or,
      openMenu: vn,
      selectedItem: $n,
      inputValue: yr,
      highlightedIndex: rn,
      getToggleButtonProps: po,
      getMenuProps: os,
      getInputProps: ho,
      getItemProps: Ni,
      isMulti: si,
      isSearchable: wr,
      multipleSelection: ss
    } = Q, { getDropdownProps: ku } = ss;
    __mf_22(() => {
      if (!or) return;
      if (f === "top" || f === "bottom") {
        Z(f);
        return;
      }
      const Ee = Fr.current;
      if (!Ee) return;
      const Ie = () => {
        const Rt = Ee.getBoundingClientRect(), Sr = P ? { top: 0, bottom: window.innerHeight } : hN(Ee), _r = Sr.bottom - Rt.bottom, jr = Rt.top - Sr.top, nn = F === "sm" ? 22 : F === "lg" ? 36 : 28, Hn = Math.min(
          (Q.filteredItems.length || 1) * nn + 16,
          300
        ), ai = ir == null ? void 0 : ir.getBoundingClientRect().height, ps = ai && ai > 0 ? ai : Hn, Pu = _r >= ps;
        Z(
          !Pu && jr > _r ? "top" : "bottom"
        );
      };
      Ie(), window.addEventListener("resize", Ie), window.addEventListener("scroll", Ie, true);
      const xr = ir && typeof ResizeObserver < "u" ? new ResizeObserver(() => Ie()) : void 0;
      return ir && (xr == null || xr.observe(ir)), () => {
        window.removeEventListener("resize", Ie), window.removeEventListener("scroll", Ie, true), xr == null || xr.disconnect();
      };
    }, [
      or,
      Z,
      F,
      Q.filteredItems.length,
      f,
      P,
      ir
    ]), __mf_22(() => {
      const Ee = or && !(r && Q.filteredItems.length === 0);
      return ge(Ee), () => ge(false);
    }, [or, r, Q.filteredItems.length, ge]);
    const Hr = si ? Q.selectedItems ?? [] : $n ? [$n] : [], as = Hr.length > 0, Wa = o && !!yr && !te && !Y && !u, ls = i && (as || !!yr) && !te && !Y && !u, Va = !d && !u && !Y, Au = !as && (!wr || !yr) || !$, Ua = {}, qa = {};
    Object.entries(he).forEach(([Ee, Ie]) => {
      Ee.startsWith("data-") || Ee.startsWith("aria-") || Ee === "role" ? Ua[Ee] = Ie : qa[Ee] = Ie;
    });
    const cs = __mf_23(() => Fo([Fr, N]), [N]), Ga = os({}, { suppressRefError: true }), Mi = ku({
      preventKeyAction: or
    }), us = {
      ref: qe,
      disabled: te,
      required: c,
      name: T,
      id: D,
      "aria-label": z,
      "aria-labelledby": M,
      "aria-describedby": W,
      "aria-invalid": G,
      onFocus: x,
      onBlur: v,
      ...qa
    }, ds = wr ? (ho == null ? void 0 : ho({
      ...us,
      ...Mi
    })) ?? us : {
      ...us,
      ...Mi
    }, { ref: Za, ...Di } = ds, fs = __mf_23(
      () => Fo([Za]),
      // Only use the input ref from downshift
      [Za]
    ), { ref: Ka, ...Ya } = Ga, Xa = __mf_25(Ka);
    Xa.current = Ka;
    const Tu = __mf_17(
      (Ee) => {
        fo((Ie) => Ie === Ee ? Ie : Ee), Fo([Xa.current])(Ee);
      },
      []
    ), Ja = (Ee) => Hr.some(
      (Ie) => ee(Ie) === ee(Ee)
    ), Qa = (Ee) => h ? Ee.filter((Ie) => !Ja(Ie)) : Ee, Ru = (Ee) => h ? Ee.map((Ie) => ({
      ...Ie,
      options: Qa(Ie.options)
    })).filter((Ie) => Ie.options.length > 0) : Ee, Fn = jm(ae) ? [] : Qa(Q.filteredItems), Cu = { sm: 22, md: 28, lg: 36 }[F] ?? 28, zi = Fn.length >= K, go = tP({
      count: zi ? Fn.length : 0,
      getScrollElement: () => tn.current,
      estimateSize: () => Cu,
      overscan: 5
    });
    __mf_20(() => {
      zi && or && rn >= 0 && rn < Fn.length && go.scrollToIndex(rn, { align: "auto" });
    }, [rn, zi, or]);
    const { registerOnSelectionComplete: el } = qt();
    __mf_20(() => {
      if (j)
        return el(j);
    }, [j, el]);
    const Iu = wr ? {} : po({
      disabled: te,
      ...Mi,
      ref: Fo([cs, Mi.ref])
    });
    return /* @__PURE__ */ __mf_2("div", { className: ce({ relative: !ie, "flex-1 min-w-0": ie }), children: [
      /* @__PURE__ */ __mf_2(
        nN,
        {
          "data-qui": "SelectControl",
          className: X,
          ...wr ? { ref: Fo([cs, Mi.ref]) } : Iu,
          ...Ua,
          isFocused: Me,
          isDisabled: te,
          onClick: (Ee) => {
            Ee.defaultPrevented || Y || (wr ? vn() : Q.toggleMenu());
          },
          children: [
            V || /* @__PURE__ */ __mf_2(iN, { isMulti: si, children: [
              si && $ && Hr.map((Ee, Ie) => /* @__PURE__ */ __mf_1(
                ux,
                {
                  data: Ee,
                  index: Ie,
                  isDisabled: te,
                  children: O ? O(Ee) : void 0
                },
                ee(Ee)
              )),
              !si && as && $ && (!wr || Y) && /* @__PURE__ */ __mf_1("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ __mf_1(
                sN,
                {
                  data: Hr[0],
                  isDisabled: te,
                  children: O ? O(Hr[0]) : de(Hr[0])
                }
              ) }),
              wr && !Y && g === "trigger" ? /* @__PURE__ */ __mf_1(
                Tc,
                {
                  ref: fs,
                  ...Di,
                  className: X,
                  inputClassName: Mt,
                  placeholder: Lt
                }
              ) : /* @__PURE__ */ __mf_2(__mf_0, { children: [
                /* @__PURE__ */ __mf_1(
                  Tc,
                  {
                    ref: fs,
                    ...Di,
                    className: X,
                    inputClassName: Mt,
                    isHidden: true,
                    readOnly: true,
                    value: Hr.map((Ee) => ee(Ee)).join(",")
                  }
                ),
                Au && /* @__PURE__ */ __mf_1(oN, { children: Lt })
              ] })
            ] }),
            /* @__PURE__ */ __mf_2(
              "div",
              {
                className: ce("flex items-center size-fit gap-1", {
                  hidden: !ls && !Va
                }),
                children: [
                  Wa && /* @__PURE__ */ __mf_1(aN, {}),
                  ls && /* @__PURE__ */ __mf_1(dx, {}),
                  Va && /* @__PURE__ */ __mf_1(
                    fx,
                    {
                      ...wr ? po({
                        disabled: te,
                        "aria-label": or ? "Close menu" : "Open menu"
                      }) : {}
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      !or && /* @__PURE__ */ __mf_1(
        "div",
        {
          ref: Ga.ref,
          style: { display: "none" },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ __mf_1(
        pN,
        {
          isOpen: or,
          usePortal: P,
          controlRef: Fr,
          selectId: Q.selectId,
          children: r && Q.filteredItems.length === 0 ? /* @__PURE__ */ __mf_1(
            "div",
            {
              ...Ya,
              style: { display: "none" },
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ __mf_2(
            lN,
            {
              ref: Tu,
              ...Ya,
              placement: Se,
              children: [
                w && w(Q),
                wr && g === "menu" && /* @__PURE__ */ __mf_1("div", { className: "p-2", children: /* @__PURE__ */ __mf_1(
                  Tc,
                  {
                    ref: fs,
                    ...Di,
                    className: X,
                    inputClassName: Mt,
                    autoFocus: true,
                    placeholder: Lt,
                    onClick: (Ee) => Ee.stopPropagation()
                  }
                ) }),
                /* @__PURE__ */ __mf_1(
                  cN,
                  {
                    ref: tn,
                    totalHeight: zi ? go.getTotalSize() : void 0,
                    children: l ? /* @__PURE__ */ __mf_1("div", { className: yP({ size: F }), children: n }) : Q.filteredItems.length === 0 ? /* @__PURE__ */ __mf_1(af, { inputValue: yr, children: typeof t == "function" ? t(yr) : t }) : jm(ae) ? (() => {
                      const Ee = Ru(
                        ae
                      );
                      return Ee.length === 0 ? /* @__PURE__ */ __mf_1(af, { inputValue: yr, children: typeof t == "function" ? t(yr) : t }) : Ee.map((Ie, xr) => /* @__PURE__ */ __mf_1(
                        px,
                        {
                          data: Ie,
                          label: Ie.label,
                          options: Ie.options,
                          renderGroupHeading: E,
                          children: Ie.options.map((Rt) => {
                            const Sr = ee(Rt), _r = Hr.some(
                              (ps) => ee(ps) === Sr
                            ), jr = Q.filteredItems.indexOf(Rt), nn = rn === jr, Hn = fe(Rt), ai = Ni({
                              item: Rt,
                              index: jr
                            });
                            return /* @__PURE__ */ __mf_1(
                              Rc,
                              {
                                ...ai,
                                data: Rt,
                                isDisabled: Hn,
                                isFocused: nn,
                                isSelected: _r,
                                optionClassName: S,
                                children: ut ? ut({
                                  data: Rt,
                                  isFocused: nn,
                                  isSelected: _r,
                                  isDisabled: Hn
                                }) : void 0
                              },
                              `${Sr}-${jr}`
                            );
                          })
                        },
                        `${Ie.label}-${xr}`
                      ));
                    })() : Fn.length === 0 ? /* @__PURE__ */ __mf_1(af, { inputValue: yr, children: typeof t == "function" ? t(yr) : t }) : zi ? go.getVirtualItems().map((Ee) => {
                      const Ie = Fn[Ee.index], xr = ee(Ie), Rt = Hr.some(
                        (Hn) => ee(Hn) === xr
                      ), Sr = Q.filteredItems.indexOf(Ie), _r = rn === Sr, jr = fe(Ie), nn = Ni({
                        item: Ie,
                        index: Sr
                      });
                      return /* @__PURE__ */ __mf_1(
                        "div",
                        {
                          "data-index": Ee.index,
                          ref: go.measureElement,
                          style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            transform: `translateY(${Ee.start}px)`
                          },
                          children: /* @__PURE__ */ __mf_1(
                            Rc,
                            {
                              ...nn,
                              data: Ie,
                              isDisabled: jr,
                              isFocused: _r,
                              isSelected: Rt,
                              optionClassName: S,
                              children: ut ? ut({
                                data: Ie,
                                isFocused: _r,
                                isSelected: Rt,
                                isDisabled: jr
                              }) : void 0
                            }
                          )
                        },
                        Ee.key
                      );
                    }) : Fn.map((Ee) => {
                      const Ie = ee(Ee), xr = Hr.some(
                        (nn) => ee(nn) === Ie
                      ), Rt = Q.filteredItems.indexOf(Ee), Sr = rn === Rt, _r = fe(Ee), jr = Ni({
                        item: Ee,
                        index: Rt
                      });
                      return /* @__PURE__ */ __mf_1(
                        Rc,
                        {
                          ...jr,
                          data: Ee,
                          isDisabled: _r,
                          isFocused: Sr,
                          isSelected: xr,
                          optionClassName: S,
                          children: ut ? ut({
                            data: Ee,
                            isFocused: Sr,
                            isSelected: xr,
                            isDisabled: _r
                          }) : void 0
                        },
                        `${Ie}-${Rt}`
                      );
                    })
                  }
                )
              ]
            }
          )
        }
      )
    ] });
  }
);
dN.displayName = "Select.Group";
fN.displayName = "Select.Icon";
Tc.displayName = "Select.Input";
ux.displayName = "Select.MultiValue";
dx.displayName = "Select.ClearIndicator";
fx.displayName = "Select.DropdownIndicator";
Rc.displayName = "Select.Option";
px.displayName = "Select.OptionGroup";
const vN = gN;
vN.displayName = "Select.Field";
__mf_9(void 0);
const mN = ({
  active: e6,
  disabled: t,
  error: r,
  isOpen: n,
  className: i
}) => ce(
  // Base classes
  "flex w-full items-center justify-between text-left leading-5 transition-colors duration-200",
  {
    // Interactive cursor
    "cursor-pointer": !t,
    // Disabled State
    "text-inactive-text": t,
    // Active State (Selected)
    // Using bg-primary-dark/hover as requested in snippets for active state
    "bg-primary hover:bg-primary-hover": e6 && !t,
    // Error State
    "text-negative": r && !e6 && !t,
    // Open State (Expanded but not necessarily active)
    "bg-primary-hover text-body": n && !e6 && !t,
    // Default State (if not active/disabled/error)
    "text-body": !e6 && !t && !r,
    // Hover State (only applied if not disabled)
    // Using opacity or specific hover color
    "hover:bg-primary-hover hover:text-tab-active-fg": !t && !e6
  },
  i
), bN = __mf_13(
  ({
    active: e6,
    disabled: t,
    error: r,
    isOpen: n,
    className: i,
    children: o,
    as: l = "div",
    ...c
  }, u) => {
    const d = mN({
      active: e6,
      disabled: t,
      error: r,
      isOpen: n,
      className: i
    });
    return /* @__PURE__ */ __mf_1(
      l,
      {
        "data-qui": "ListItem",
        ref: u,
        className: d,
        "aria-disabled": t,
        "aria-selected": e6,
        "aria-invalid": r,
        "aria-expanded": n,
        role: c.onClick ? "button" : "listitem",
        ...c,
        children: o
      }
    );
  }
);
bN.displayName = "ListItem";
const yN = (e6) => /* @__PURE__ */ __mf_1("div", { className: "absolute inset-0 z-[1999]", onClick: e6.onClick }), wN = R.forwardRef(({ children: e6, style: t, attributes: r }, n) => /* @__PURE__ */ __mf_1(
  oi,
  {
    depth: 3,
    borderType: "light",
    style: {
      ...t,
      zIndex: 2e3
    },
    ...r,
    ref: n,
    className: "w-80 rounded border shadow-2xl",
    "data-cy": "dialogBody",
    children: e6
  }
)), GF = ({
  referenceElement: e6,
  placement: t,
  isOpen: r,
  children: n,
  onClose: i
}) => {
  const [o, l] = R.useState(null), { styles: c, attributes: u } = jp(e6, o, {
    placement: t || "bottom-start"
  }), d = __mf_17(() => {
    i && i();
  }, [i]);
  return r ? /* @__PURE__ */ __mf_2(WR, { children: [
    /* @__PURE__ */ __mf_1(yN, { onClick: () => d() }),
    /* @__PURE__ */ __mf_1(
      wN,
      {
        ref: l,
        style: c.popper,
        attributes: u.popper,
        children: n
      }
    )
  ] }) : null;
};
var lf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var f0;
function hx() {
  return f0 || (f0 = 1, (function(e6) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (o = i(o, n(c)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return r.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var l = "";
        for (var c in o)
          t.call(o, c) && o[c] && (l = i(l, c));
        return l;
      }
      function i(o, l) {
        return l ? o ? o + " " + l : o + l : o;
      }
      e6.exports ? (r.default = r, e6.exports = r) : window.classNames = r;
    })();
  })(lf)), lf.exports;
}
var xN = hx();
const gt = /* @__PURE__ */ Qy(xN);
function Xi() {
  return Xi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Xi.apply(this, arguments);
}
const SN = ["children", "options"], p0 = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e6, t) => (e6[t.toLowerCase()] = t, e6), { class: "className", for: "htmlFor" }), h0 = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, _N = ["style", "script", "pre"], EN = ["src", "href", "data", "formAction", "srcDoc", "action"], ON = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, kN = /\n{2,}$/, g0 = /^(\s*>[\s\S]*?)(?=\n\n|$)/, AN = /^ *> ?/gm, TN = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, RN = /^ {2,}\n/, CN = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, v0 = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, m0 = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, IN = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, PN = /^(?:\n *)*\n/, NN = /\r\n?/g, MN = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, DN = /^\[\^([^\]]+)]/, zN = /\f/g, LN = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, $N = /^\s*?\[(x|\s)\]/, b0 = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, y0 = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, w0 = /^([^\n]+)\n *(=|-)\2{2,} *\n/, cf = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, FN = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, x0 = /^<!--[\s\S]*?(?:-->)/, HN = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, uf = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, jN = /^\{.*\}$/, BN = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, WN = /^<([^ >]+[:@\/][^ >]+)>/, VN = /-([a-z])?/gi, S0 = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, UN = /^[^\n]+(?:  \n|\n{2,})/, qN = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, GN = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ZN = /^\[([^\]]*)\] ?\[([^\]]*)\]/, KN = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, YN = /\t/g, XN = /(^ *\||\| *$)/g, JN = /^ *:-+: *$/, QN = /^ *:-+ *$/, eM = /^ *-+: *$/, uu = (e6) => `(?=[\\s\\S]+?\\1${e6 ? "\\1" : ""})`, du = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", tM = RegExp(`^([*_])\\1${uu(1)}${du}\\1\\1(?!\\1)`), rM = RegExp(`^([*_])${uu(0)}${du}\\1(?!\\1)`), nM = RegExp(`^(==)${uu(0)}${du}\\1`), iM = RegExp(`^(~~)${uu(0)}${du}\\1`), oM = /^(:[a-zA-Z0-9-_]+:)/, sM = /^\\([^0-9A-Za-z\s])/, aM = /\\([^0-9A-Za-z\s])/g, lM = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/, cM = /^\n+/, uM = /^([ \t]*)/, dM = /(?:^|\n)( *)$/, eh = "(?:\\d+\\.)", th = "(?:[*+-])";
function gx(e6) {
  return "( *)(" + (e6 === 1 ? eh : th) + ") +";
}
const vx = gx(1), mx = gx(2);
function bx(e6) {
  return RegExp("^" + (e6 === 1 ? vx : mx));
}
const fM = bx(1), pM = bx(2);
function yx(e6) {
  return RegExp("^" + (e6 === 1 ? vx : mx) + "[^\\n]*(?:\\n(?!\\1" + (e6 === 1 ? eh : th) + " )[^\\n]*)*(\\n|$)", "gm");
}
const hM = yx(1), gM = yx(2);
function wx(e6) {
  const t = e6 === 1 ? eh : th;
  return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const xx = wx(1), Sx = wx(2);
function _0(e6, t) {
  const r = t === 1, n = r ? xx : Sx, i = r ? hM : gM, o = r ? fM : pM;
  return { t: (l) => o.test(l), o: Xo(function(l, c) {
    const u = dM.exec(c.prevCapture);
    return u && (c.list || !c.inline && !c.simple) ? n.exec(l = u[1] + l) : null;
  }), i: 1, u(l, c, u) {
    const d = r ? +l[2] : void 0, g = l[0].replace(kN, `
`).match(i);
    let f = false;
    return { items: g.map(function(h, b) {
      const x = o.exec(h)[0].length, v = RegExp("^ {1," + x + "}", "gm"), w = h.replace(v, "").replace(o, ""), m = b === g.length - 1, y = w.indexOf(`

`) !== -1 || m && f;
      f = y;
      const S = u.inline, O = u.list;
      let E;
      u.list = true, y ? (u.inline = false, E = ba(w) + `

`) : (u.inline = true, E = ba(w));
      const A = c(E, u);
      return u.inline = S, u.list = O, A;
    }), ordered: r, start: d };
  }, l: (l, c, u) => e6(l.ordered ? "ol" : "ul", { key: u.key, start: l.type === "20" ? l.start : void 0 }, l.items.map(function(d, g) {
    return e6("li", { key: g }, c(d, u));
  })) };
}
const vM = RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), mM = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function E0(e6) {
  return typeof e6 == "string";
}
function ba(e6) {
  let t = e6.length;
  for (; t > 0 && e6[t - 1] <= " "; ) t--;
  return e6.slice(0, t);
}
function Cc(e6, t) {
  return e6.startsWith(t);
}
function bM(e6, t, r) {
  if (Array.isArray(r)) {
    for (let n = 0; n < r.length; n++) if (Cc(e6, r[n])) return true;
    return false;
  }
  return r(e6, t);
}
function zs(e6) {
  return e6.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function yM(e6) {
  return eM.test(e6) ? "right" : JN.test(e6) ? "center" : QN.test(e6) ? "left" : null;
}
function O0(e6, t, r, n) {
  const i = r.inTable;
  r.inTable = true;
  let o = [[]], l = "";
  function c() {
    if (!l) return;
    const u = o[o.length - 1];
    u.push.apply(u, t(l, r)), l = "";
  }
  return e6.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((u, d, g) => {
    u.trim() === "|" && (c(), n) ? d !== 0 && d !== g.length - 1 && o.push([]) : l += u;
  }), c(), r.inTable = i, o;
}
function wM(e6, t, r) {
  r.inline = true;
  const n = e6[2] ? e6[2].replace(XN, "").split("|").map(yM) : [], i = e6[3] ? (function(l, c, u) {
    return l.trim().split(`
`).map(function(d) {
      return O0(d, c, u, true);
    });
  })(e6[3], t, r) : [], o = O0(e6[1], t, r, !!i.length);
  return r.inline = false, i.length ? { align: n, cells: i, header: o, type: "25" } : { children: o, type: "21" };
}
function k0(e6, t) {
  return e6.align[t] == null ? {} : { textAlign: e6.align[t] };
}
function Xo(e6) {
  return e6.inline = 1, e6;
}
function Gi(e6) {
  return Xo(function(t, r) {
    return r.inline ? e6.exec(t) : null;
  });
}
function xi(e6) {
  return Xo(function(t, r) {
    return r.inline || r.simple ? e6.exec(t) : null;
  });
}
function Yn(e6) {
  return function(t, r) {
    return r.inline || r.simple ? null : e6.exec(t);
  };
}
function tc(e6) {
  return Xo(function(t) {
    return e6.exec(t);
  });
}
const xM = /(javascript|vbscript|data(?!:image)):/i;
function SM(e6) {
  try {
    const t = decodeURIComponent(e6).replace(/[^A-Za-z0-9/:]/g, "");
    if (xM.test(t)) return null;
  } catch {
    return null;
  }
  return e6;
}
function Sn(e6) {
  return e6 && e6.replace(aM, "$1");
}
function Ic(e6, t, r) {
  const n = r.inline || false, i = r.simple || false;
  r.inline = true, r.simple = true;
  const o = e6(t, r);
  return r.inline = n, r.simple = i, o;
}
function _M(e6, t, r) {
  const n = r.inline || false, i = r.simple || false;
  r.inline = false, r.simple = true;
  const o = e6(t, r);
  return r.inline = n, r.simple = i, o;
}
function EM(e6, t, r) {
  const n = r.inline || false;
  r.inline = false;
  const i = e6(t, r);
  return r.inline = n, i;
}
const df = (e6, t, r) => ({ children: Ic(t, e6[2], r) });
function ff() {
  return {};
}
function pf() {
  return null;
}
function OM(...e6) {
  return e6.filter(Boolean).join(" ");
}
function hf(e6, t, r) {
  let n = e6;
  const i = t.split(".");
  for (; i.length && (n = n[i[0]], n !== void 0); ) i.shift();
  return n || r;
}
function kM(e6 = "", t = {}) {
  t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? Xi({}, h0, t.namedCodesToUnicode) : h0;
  const r = t.slugify || zs, n = t.sanitizer || SM, i = t.createElement || __mf_10, o = [g0, v0, m0, t.enforceAtxHeadings ? y0 : b0, w0, S0, xx, Sx], l = [...o, UN, cf, x0, uf];
  function c(m, y) {
    for (let S = 0; S < m.length; S++) if (m[S].test(y)) return true;
    return false;
  }
  function u(m, y, ...S) {
    const O = hf(t.overrides, m + ".props", {});
    return i((function(E, A) {
      const $ = hf(A, E);
      return $ ? typeof $ == "function" || typeof $ == "object" && "render" in $ ? $ : hf(A, E + ".component", E) : E;
    })(m, t.overrides), Xi({}, y, O, { className: OM(y == null ? void 0 : y.className, O.className) || void 0 }), ...S);
  }
  function d(m) {
    m = m.replace(LN, "");
    let y = false;
    t.forceInline ? y = true : t.forceBlock || (y = KN.test(m) === false);
    const S = v(x(y ? m : ba(m).replace(cM, "") + `

`, { inline: y }));
    for (; E0(S[S.length - 1]) && !S[S.length - 1].trim(); ) S.pop();
    if (t.wrapper === null) return S;
    const O = t.wrapper || (y ? "span" : "div");
    let E;
    if (S.length > 1 || t.forceWrapper) E = S;
    else {
      if (S.length === 1) return E = S[0], typeof E == "string" ? u("span", { key: "outer" }, E) : E;
      E = null;
    }
    return i(O, { key: "outer" }, E);
  }
  function g(m, y) {
    if (!y || !y.trim()) return null;
    const S = y.match(ON);
    return S ? S.reduce(function(O, E) {
      const A = E.indexOf("=");
      if (A !== -1) {
        const $ = (function(z) {
          return z.indexOf("-") !== -1 && z.match(HN) === null && (z = z.replace(VN, function(M, W) {
            return W.toUpperCase();
          })), z;
        })(E.slice(0, A)).trim(), T = (function(z) {
          const M = z[0];
          return (M === '"' || M === "'") && z.length >= 2 && z[z.length - 1] === M ? z.slice(1, -1) : z;
        })(E.slice(A + 1).trim()), D = p0[$] || $;
        if (D === "ref") return O;
        const j = O[D] = (function(z, M, W, V) {
          return M === "style" ? (function(P) {
            const K = [];
            let X = "", ne = false, he = false, N = "";
            if (!P) return K;
            for (let G = 0; G < P.length; G++) {
              const te = P[G];
              if (te !== '"' && te !== "'" || ne || (he ? te === N && (he = false, N = "") : (he = true, N = te)), te === "(" && X.endsWith("url") ? ne = true : te === ")" && ne && (ne = false), te !== ";" || he || ne) X += te;
              else {
                const Y = X.trim();
                if (Y) {
                  const ie = Y.indexOf(":");
                  if (ie > 0) {
                    const Q = Y.slice(0, ie).trim(), ae = Y.slice(ie + 1).trim();
                    K.push([Q, ae]);
                  }
                }
                X = "";
              }
            }
            const F = X.trim();
            if (F) {
              const G = F.indexOf(":");
              if (G > 0) {
                const te = F.slice(0, G).trim(), Y = F.slice(G + 1).trim();
                K.push([te, Y]);
              }
            }
            return K;
          })(W).reduce(function(P, [K, X]) {
            return P[K.replace(/(-[a-z])/g, (ne) => ne[1].toUpperCase())] = V(X, z, K), P;
          }, {}) : EN.indexOf(M) !== -1 ? V(Sn(W), z, M) : (W.match(jN) && (W = Sn(W.slice(1, W.length - 1))), W === "true" || W !== "false" && W);
        })(m, $, T, n);
        typeof j == "string" && (cf.test(j) || uf.test(j)) && (O[D] = d(j.trim()));
      } else E !== "style" && (O[p0[E] || E] = true);
      return O;
    }, {}) : null;
  }
  const f = [], h = {}, b = { 0: { t: [">"], o: Yn(g0), i: 1, u(m, y, S) {
    const [, O, E] = m[0].replace(AN, "").match(TN);
    return { alert: O, children: y(E, S) };
  }, l(m, y, S) {
    const O = { key: S.key };
    return m.alert && (O.className = "markdown-alert-" + r(m.alert.toLowerCase(), zs), m.children.unshift({ attrs: {}, children: [{ type: "27", text: m.alert }], noInnerParse: true, type: "11", tag: "header" })), u("blockquote", O, y(m.children, S));
  } }, 1: { t: ["  "], o: tc(RN), i: 1, u: ff, l: (m, y, S) => u("br", { key: S.key }) }, 2: { t: ["--", "__", "**", "- ", "* ", "_ "], o: Yn(CN), i: 1, u: ff, l: (m, y, S) => u("hr", { key: S.key }) }, 3: { t: ["    "], o: Yn(m0), i: 0, u: (m) => ({ lang: void 0, text: Sn(ba(m[0].replace(/^ {4}/gm, ""))) }), l: (m, y, S) => u("pre", { key: S.key }, u("code", Xi({}, m.attrs, { className: m.lang ? "lang-" + m.lang : "" }), m.text)) }, 4: { t: ["```", "~~~"], o: Yn(v0), i: 0, u: (m) => ({ attrs: g("code", m[3] || ""), lang: m[2] || void 0, text: m[4], type: "3" }) }, 5: { t: ["`"], o: xi(IN), i: 3, u: (m) => ({ text: Sn(m[2]) }), l: (m, y, S) => u("code", { key: S.key }, m.text) }, 6: { t: ["[^"], o: Yn(MN), i: 0, u: (m) => (f.push({ footnote: m[2], identifier: m[1] }), {}), l: pf }, 7: { t: ["[^"], o: Gi(DN), i: 1, u: (m) => ({ target: "#" + r(m[1], zs), text: m[1] }), l: (m, y, S) => u("a", { key: S.key, href: n(m.target, "a", "href") }, u("sup", { key: S.key }, m.text)) }, 8: { t: ["[ ]", "[x]"], o: Gi($N), i: 1, u: (m) => ({ completed: m[1].toLowerCase() === "x" }), l: (m, y, S) => u("input", { checked: m.completed, key: S.key, readOnly: true, type: "checkbox" }) }, 9: { t: ["#"], o: Yn(t.enforceAtxHeadings ? y0 : b0), i: 1, u: (m, y, S) => ({ children: Ic(y, m[2], S), id: r(m[2], zs), level: m[1].length }), l: (m, y, S) => u("h" + m.level, { id: m.id, key: S.key }, y(m.children, S)) }, 10: { t: (m) => {
    const y = m.indexOf(`
`);
    return y > 0 && y < m.length - 1 && (m[y + 1] === "=" || m[y + 1] === "-");
  }, o: Yn(w0), i: 0, u: (m, y, S) => ({ children: Ic(y, m[1], S), level: m[2] === "=" ? 1 : 2, type: "9" }) }, 11: { t: ["<"], o: tc(cf), i: 1, u(m, y, S) {
    const [, O] = m[3].match(uM), E = RegExp("^" + O, "gm"), A = m[3].replace(E, ""), $ = c(l, A) ? EM : Ic, T = m[1].toLowerCase(), D = _N.indexOf(T) !== -1, j = (D ? T : m[1]).trim(), z = { attrs: g(j, m[2]), noInnerParse: D, tag: j };
    if (S.inAnchor = S.inAnchor || T === "a", D) z.text = m[3];
    else {
      const M = S.inHTML;
      S.inHTML = true, z.children = $(y, A, S), S.inHTML = M;
    }
    return S.inAnchor = false, z;
  }, l: (m, y, S) => u(m.tag, Xi({ key: S.key }, m.attrs), m.text || (m.children ? y(m.children, S) : "")) }, 13: { t: ["<"], o: tc(uf), i: 1, u(m) {
    const y = m[1].trim();
    return { attrs: g(y, m[2] || ""), tag: y };
  }, l: (m, y, S) => u(m.tag, Xi({}, m.attrs, { key: S.key })) }, 12: { t: ["<!--"], o: tc(x0), i: 1, u: () => ({}), l: pf }, 14: { t: ["!["], o: xi(mM), i: 1, u: (m) => ({ alt: Sn(m[1]), target: Sn(m[2]), title: Sn(m[3]) }), l: (m, y, S) => u("img", { key: S.key, alt: m.alt || void 0, title: m.title || void 0, src: n(m.target, "img", "src") }) }, 15: { t: ["["], o: Gi(vM), i: 3, u: (m, y, S) => ({ children: _M(y, m[1], S), target: Sn(m[2]), title: Sn(m[3]) }), l: (m, y, S) => u("a", { key: S.key, href: n(m.target, "a", "href"), title: m.title }, y(m.children, S)) }, 16: { t: ["<"], o: Gi(WN), i: 0, u(m) {
    let y = m[1], S = false;
    return y.indexOf("@") !== -1 && y.indexOf("//") === -1 && (S = true, y = y.replace("mailto:", "")), { children: [{ text: y, type: "27" }], target: S ? "mailto:" + y : y, type: "15" };
  } }, 17: { t: (m, y) => !y.inAnchor && !t.disableAutoLink && (Cc(m, "http://") || Cc(m, "https://")), o: Gi(BN), i: 0, u: (m) => ({ children: [{ text: m[1], type: "27" }], target: m[1], title: void 0, type: "15" }) }, 20: _0(u, 1), 33: _0(u, 2), 19: { t: [`
`], o: Yn(PN), i: 3, u: ff, l: () => `
` }, 21: { o: Xo(function(m, y) {
    if (y.inline || y.simple || y.inHTML && m.indexOf(`

`) === -1 && y.prevCapture.indexOf(`

`) === -1) return null;
    let S = "", O = 0;
    for (; ; ) {
      const A = m.indexOf(`
`, O), $ = m.slice(O, A === -1 ? void 0 : A + 1);
      if (c(o, $) || (S += $, A === -1 || !$.trim())) break;
      O = A + 1;
    }
    const E = ba(S);
    return E === "" ? null : [S, , E];
  }), i: 3, u: df, l: (m, y, S) => u("p", { key: S.key }, y(m.children, S)) }, 22: { t: ["["], o: Gi(qN), i: 0, u: (m) => (h[m[1]] = { target: m[2], title: m[4] }, {}), l: pf }, 23: { t: ["!["], o: xi(GN), i: 0, u: (m) => ({ alt: m[1] ? Sn(m[1]) : void 0, ref: m[2] }), l: (m, y, S) => h[m.ref] ? u("img", { key: S.key, alt: m.alt, src: n(h[m.ref].target, "img", "src"), title: h[m.ref].title }) : null }, 24: { t: (m) => m[0] === "[" && m.indexOf("](") === -1, o: Gi(ZN), i: 0, u: (m, y, S) => ({ children: y(m[1], S), fallbackChildren: m[0], ref: m[2] }), l: (m, y, S) => h[m.ref] ? u("a", { key: S.key, href: n(h[m.ref].target, "a", "href"), title: h[m.ref].title }, y(m.children, S)) : u("span", { key: S.key }, m.fallbackChildren) }, 25: { t: ["|"], o: Yn(S0), i: 1, u: wM, l(m, y, S) {
    const O = m;
    return u("table", { key: S.key }, u("thead", null, u("tr", null, O.header.map(function(E, A) {
      return u("th", { key: A, style: k0(O, A) }, y(E, S));
    }))), u("tbody", null, O.cells.map(function(E, A) {
      return u("tr", { key: A }, E.map(function($, T) {
        return u("td", { key: T, style: k0(O, T) }, y($, S));
      }));
    })));
  } }, 27: { o: Xo(function(m, y) {
    let S;
    return Cc(m, ":") && (S = oM.exec(m)), S || lM.exec(m);
  }), i: 4, u(m) {
    const y = m[0];
    return { text: y.indexOf("&") === -1 ? y : y.replace(FN, (S, O) => t.namedCodesToUnicode[O] || S) };
  }, l: (m) => m.text }, 28: { t: ["**", "__"], o: xi(tM), i: 2, u: (m, y, S) => ({ children: y(m[2], S) }), l: (m, y, S) => u("strong", { key: S.key }, y(m.children, S)) }, 29: { t: (m) => {
    const y = m[0];
    return (y === "*" || y === "_") && m[1] !== y;
  }, o: xi(rM), i: 3, u: (m, y, S) => ({ children: y(m[2], S) }), l: (m, y, S) => u("em", { key: S.key }, y(m.children, S)) }, 30: { t: ["\\"], o: xi(sM), i: 1, u: (m) => ({ text: m[1], type: "27" }) }, 31: { t: ["=="], o: xi(nM), i: 3, u: df, l: (m, y, S) => u("mark", { key: S.key }, y(m.children, S)) }, 32: { t: ["~~"], o: xi(iM), i: 3, u: df, l: (m, y, S) => u("del", { key: S.key }, y(m.children, S)) } };
  t.disableParsingRawHTML === true && (delete b[11], delete b[13]);
  const x = (function(m) {
    var y = Object.keys(m);
    function S(O, E) {
      var A = [];
      if (E.prevCapture = E.prevCapture || "", O.trim()) for (; O; ) for (var $ = 0; $ < y.length; ) {
        var T = y[$], D = m[T];
        if (!D.t || bM(O, E, D.t)) {
          var j = D.o(O, E);
          if (j && j[0]) {
            O = O.substring(j[0].length);
            var z = D.u(j, S, E);
            E.prevCapture += j[0], z.type || (z.type = T), A.push(z);
            break;
          }
          $++;
        } else $++;
      }
      return E.prevCapture = "", A;
    }
    return y.sort(function(O, E) {
      return m[O].i - m[E].i || (O < E ? -1 : 1);
    }), function(O, E) {
      return S((function(A) {
        return A.replace(NN, `
`).replace(zN, "").replace(YN, "    ");
      })(O), E);
    };
  })(b), v = /* @__PURE__ */ (function(m, y) {
    return function S(O, E = {}) {
      if (Array.isArray(O)) {
        const A = E.key, $ = [];
        let T = false;
        for (let D = 0; D < O.length; D++) {
          E.key = D;
          const j = S(O[D], E), z = E0(j);
          z && T ? $[$.length - 1] += j : j !== null && $.push(j), T = z;
        }
        return E.key = A, $;
      }
      return (function(A, $, T) {
        const D = m[A.type].l;
        return y ? y(() => D(A, $, T), A, $, T) : D(A, $, T);
      })(O, S, E);
    };
  })(b, t.renderRule), w = d(e6);
  return f.length ? u("div", null, w, u("footer", { key: "footer" }, f.map(function(m) {
    return u("div", { id: r(m.identifier, zs), key: m.identifier }, m.identifier, v(x(m.footnote, { inline: true })));
  }))) : w;
}
const qc = (e6) => {
  let { children: t = "", options: r } = e6, n = (function(i, o) {
    if (i == null) return {};
    var l, c, u = {}, d = Object.keys(i);
    for (c = 0; c < d.length; c++) o.indexOf(l = d[c]) >= 0 || (u[l] = i[l]);
    return u;
  })(e6, SN);
  return __mf_8(kM(t, r), n);
}, A0 = ({ kind: e6, customIcon: t }) => {
  const r = {
    "text-yellow-400": e6 === "warning",
    "text-red-500": e6 === "danger" || e6 === "error",
    "text-primary": e6 === "info",
    "text-green-500": e6 === "message"
  };
  if (t)
    return /* @__PURE__ */ __mf_1(t, { className: gt("flex-none size-6", r) });
  switch (e6) {
    case "error":
    case "danger":
      return /* @__PURE__ */ __mf_1(d2, { className: gt("flex-none size-6", r) });
    case "info":
      return /* @__PURE__ */ __mf_1(__mf_0, { children: /* @__PURE__ */ __mf_1(Jf, { className: gt("flex-none size-6", r) }) });
    case "warning":
      return /* @__PURE__ */ __mf_1(__mf_0, { children: /* @__PURE__ */ __mf_1(Bp, { className: gt("flex-none size-6", r) }) });
    case "message":
      return /* @__PURE__ */ __mf_1(__mf_0, { children: /* @__PURE__ */ __mf_1(Jf, { className: gt("flex-none size-6", r) }) });
    default:
      return null;
  }
}, AM = ({
  id: e6,
  onClose: t,
  kind: r,
  message: n,
  markdown: i,
  customIcon: o
}) => {
  const l = ({ className: c } = {}) => /* @__PURE__ */ __mf_1(
    "button",
    {
      onClick: t,
      className: gt("flex justify-center p-1", c),
      children: /* @__PURE__ */ __mf_1(es, { className: "size-4 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      className: gt(
        "relative flex items-center rounded-lg py-2 px-4 text-sm text-slate-500 bg-white shadow-md"
      ),
      children: typeof n == "string" ? /* @__PURE__ */ __mf_2("div", { className: "w-full flex justify-between gap-x-3", children: [
        /* @__PURE__ */ __mf_1("div", { className: "pt-1", children: /* @__PURE__ */ __mf_1(A0, { kind: r, customIcon: o }) }),
        /* @__PURE__ */ __mf_1("div", { className: "flex items-center gap-1 prose", children: i ? /* @__PURE__ */ __mf_1(qc, { children: n }) : /* @__PURE__ */ __mf_1(__mf_0, { children: n }) }),
        l()
      ] }) : /* @__PURE__ */ __mf_2("div", { className: "flex items-start", children: [
        /* @__PURE__ */ __mf_1("div", { className: "flex flex-col gap-2 justify-between", children: n.filter((c) => c.messages.length > 0).map((c) => /* @__PURE__ */ __mf_2(__mf_0, { children: [
          c.title && /* @__PURE__ */ __mf_2("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ __mf_1(A0, { kind: r, customIcon: o }),
            /* @__PURE__ */ __mf_2("span", { children: [
              c.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ __mf_1(
            "ul",
            {
              className: gt("list-disc", {
                "px-12": c.title,
                "px-6": !c.title
              }),
              children: c.messages.map((u) => /* @__PURE__ */ __mf_1("li", { children: i ? /* @__PURE__ */ __mf_1(qc, { children: u }) : /* @__PURE__ */ __mf_1(__mf_0, { children: u }) }))
            }
          )
        ] })) }),
        l({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e6
  );
}, TM = ({
  children: e6,
  size: t,
  className: r,
  ...n
}) => /* @__PURE__ */ __mf_1(
  "div",
  {
    style: { "--width": `${t || 24}px` },
    className: gt("h-6 flex items-center pr-1 w-[--width]", r),
    ...n,
    children: e6
  }
);
var gf = {}, Ls = {}, rc = {}, T0;
function _x() {
  if (T0) return rc;
  T0 = 1, Object.defineProperty(rc, "__esModule", {
    value: true
  }), rc.default = r;
  let e6;
  const t = new Uint8Array(16);
  function r() {
    if (!e6 && (e6 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e6))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e6(t);
  }
  return rc;
}
var No = {}, $s = {}, Fs = {}, R0;
function RM() {
  if (R0) return Fs;
  R0 = 1, Object.defineProperty(Fs, "__esModule", {
    value: true
  }), Fs.default = void 0;
  var e6 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return Fs.default = e6, Fs;
}
var C0;
function fu() {
  if (C0) return $s;
  C0 = 1, Object.defineProperty($s, "__esModule", {
    value: true
  }), $s.default = void 0;
  var e6 = t(/* @__PURE__ */ RM());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    return typeof i == "string" && e6.default.test(i);
  }
  var n = r;
  return $s.default = n, $s;
}
var I0;
function pu() {
  if (I0) return No;
  I0 = 1, Object.defineProperty(No, "__esModule", {
    value: true
  }), No.default = void 0, No.unsafeStringify = n;
  var e6 = t(/* @__PURE__ */ fu());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const r = [];
  for (let l = 0; l < 256; ++l)
    r.push((l + 256).toString(16).slice(1));
  function n(l, c = 0) {
    return r[l[c + 0]] + r[l[c + 1]] + r[l[c + 2]] + r[l[c + 3]] + "-" + r[l[c + 4]] + r[l[c + 5]] + "-" + r[l[c + 6]] + r[l[c + 7]] + "-" + r[l[c + 8]] + r[l[c + 9]] + "-" + r[l[c + 10]] + r[l[c + 11]] + r[l[c + 12]] + r[l[c + 13]] + r[l[c + 14]] + r[l[c + 15]];
  }
  function i(l, c = 0) {
    const u = n(l, c);
    if (!(0, e6.default)(u))
      throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var o = i;
  return No.default = o, No;
}
var P0;
function CM() {
  if (P0) return Ls;
  P0 = 1, Object.defineProperty(Ls, "__esModule", {
    value: true
  }), Ls.default = void 0;
  var e6 = r(/* @__PURE__ */ _x()), t = /* @__PURE__ */ pu();
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  let n, i, o = 0, l = 0;
  function c(d, g, f) {
    let h = g && f || 0;
    const b = g || new Array(16);
    d = d || {};
    let x = d.node || n, v = d.clockseq !== void 0 ? d.clockseq : i;
    if (x == null || v == null) {
      const E = d.random || (d.rng || e6.default)();
      x == null && (x = n = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]), v == null && (v = i = (E[6] << 8 | E[7]) & 16383);
    }
    let w = d.msecs !== void 0 ? d.msecs : Date.now(), m = d.nsecs !== void 0 ? d.nsecs : l + 1;
    const y = w - o + (m - l) / 1e4;
    if (y < 0 && d.clockseq === void 0 && (v = v + 1 & 16383), (y < 0 || w > o) && d.nsecs === void 0 && (m = 0), m >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    o = w, l = m, i = v, w += 122192928e5;
    const S = ((w & 268435455) * 1e4 + m) % 4294967296;
    b[h++] = S >>> 24 & 255, b[h++] = S >>> 16 & 255, b[h++] = S >>> 8 & 255, b[h++] = S & 255;
    const O = w / 4294967296 * 1e4 & 268435455;
    b[h++] = O >>> 8 & 255, b[h++] = O & 255, b[h++] = O >>> 24 & 15 | 16, b[h++] = O >>> 16 & 255, b[h++] = v >>> 8 | 128, b[h++] = v & 255;
    for (let E = 0; E < 6; ++E)
      b[h + E] = x[E];
    return g || (0, t.unsafeStringify)(b);
  }
  var u = c;
  return Ls.default = u, Ls;
}
var Hs = {}, Si = {}, js = {}, N0;
function Ex() {
  if (N0) return js;
  N0 = 1, Object.defineProperty(js, "__esModule", {
    value: true
  }), js.default = void 0;
  var e6 = t(/* @__PURE__ */ fu());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e6.default)(i))
      throw TypeError("Invalid UUID");
    let o;
    const l = new Uint8Array(16);
    return l[0] = (o = parseInt(i.slice(0, 8), 16)) >>> 24, l[1] = o >>> 16 & 255, l[2] = o >>> 8 & 255, l[3] = o & 255, l[4] = (o = parseInt(i.slice(9, 13), 16)) >>> 8, l[5] = o & 255, l[6] = (o = parseInt(i.slice(14, 18), 16)) >>> 8, l[7] = o & 255, l[8] = (o = parseInt(i.slice(19, 23), 16)) >>> 8, l[9] = o & 255, l[10] = (o = parseInt(i.slice(24, 36), 16)) / 1099511627776 & 255, l[11] = o / 4294967296 & 255, l[12] = o >>> 24 & 255, l[13] = o >>> 16 & 255, l[14] = o >>> 8 & 255, l[15] = o & 255, l;
  }
  var n = r;
  return js.default = n, js;
}
var M0;
function Ox() {
  if (M0) return Si;
  M0 = 1, Object.defineProperty(Si, "__esModule", {
    value: true
  }), Si.URL = Si.DNS = void 0, Si.default = l;
  var e6 = /* @__PURE__ */ pu(), t = r(/* @__PURE__ */ Ex());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c) {
    c = unescape(encodeURIComponent(c));
    const u = [];
    for (let d = 0; d < c.length; ++d)
      u.push(c.charCodeAt(d));
    return u;
  }
  const i = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  Si.DNS = i;
  const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  Si.URL = o;
  function l(c, u, d) {
    function g(f, h, b, x) {
      var v;
      if (typeof f == "string" && (f = n(f)), typeof h == "string" && (h = (0, t.default)(h)), ((v = h) === null || v === void 0 ? void 0 : v.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let w = new Uint8Array(16 + f.length);
      if (w.set(h), w.set(f, h.length), w = d(w), w[6] = w[6] & 15 | u, w[8] = w[8] & 63 | 128, b) {
        x = x || 0;
        for (let m = 0; m < 16; ++m)
          b[x + m] = w[m];
        return b;
      }
      return (0, e6.unsafeStringify)(w);
    }
    try {
      g.name = c;
    } catch {
    }
    return g.DNS = i, g.URL = o, g;
  }
  return Si;
}
var Bs = {}, D0;
function IM() {
  if (D0) return Bs;
  D0 = 1, Object.defineProperty(Bs, "__esModule", {
    value: true
  }), Bs.default = void 0;
  function e6(b) {
    if (typeof b == "string") {
      const x = unescape(encodeURIComponent(b));
      b = new Uint8Array(x.length);
      for (let v = 0; v < x.length; ++v)
        b[v] = x.charCodeAt(v);
    }
    return t(n(i(b), b.length * 8));
  }
  function t(b) {
    const x = [], v = b.length * 32, w = "0123456789abcdef";
    for (let m = 0; m < v; m += 8) {
      const y = b[m >> 5] >>> m % 32 & 255, S = parseInt(w.charAt(y >>> 4 & 15) + w.charAt(y & 15), 16);
      x.push(S);
    }
    return x;
  }
  function r(b) {
    return (b + 64 >>> 9 << 4) + 14 + 1;
  }
  function n(b, x) {
    b[x >> 5] |= 128 << x % 32, b[r(x) - 1] = x;
    let v = 1732584193, w = -271733879, m = -1732584194, y = 271733878;
    for (let S = 0; S < b.length; S += 16) {
      const O = v, E = w, A = m, $ = y;
      v = u(v, w, m, y, b[S], 7, -680876936), y = u(y, v, w, m, b[S + 1], 12, -389564586), m = u(m, y, v, w, b[S + 2], 17, 606105819), w = u(w, m, y, v, b[S + 3], 22, -1044525330), v = u(v, w, m, y, b[S + 4], 7, -176418897), y = u(y, v, w, m, b[S + 5], 12, 1200080426), m = u(m, y, v, w, b[S + 6], 17, -1473231341), w = u(w, m, y, v, b[S + 7], 22, -45705983), v = u(v, w, m, y, b[S + 8], 7, 1770035416), y = u(y, v, w, m, b[S + 9], 12, -1958414417), m = u(m, y, v, w, b[S + 10], 17, -42063), w = u(w, m, y, v, b[S + 11], 22, -1990404162), v = u(v, w, m, y, b[S + 12], 7, 1804603682), y = u(y, v, w, m, b[S + 13], 12, -40341101), m = u(m, y, v, w, b[S + 14], 17, -1502002290), w = u(w, m, y, v, b[S + 15], 22, 1236535329), v = d(v, w, m, y, b[S + 1], 5, -165796510), y = d(y, v, w, m, b[S + 6], 9, -1069501632), m = d(m, y, v, w, b[S + 11], 14, 643717713), w = d(w, m, y, v, b[S], 20, -373897302), v = d(v, w, m, y, b[S + 5], 5, -701558691), y = d(y, v, w, m, b[S + 10], 9, 38016083), m = d(m, y, v, w, b[S + 15], 14, -660478335), w = d(w, m, y, v, b[S + 4], 20, -405537848), v = d(v, w, m, y, b[S + 9], 5, 568446438), y = d(y, v, w, m, b[S + 14], 9, -1019803690), m = d(m, y, v, w, b[S + 3], 14, -187363961), w = d(w, m, y, v, b[S + 8], 20, 1163531501), v = d(v, w, m, y, b[S + 13], 5, -1444681467), y = d(y, v, w, m, b[S + 2], 9, -51403784), m = d(m, y, v, w, b[S + 7], 14, 1735328473), w = d(w, m, y, v, b[S + 12], 20, -1926607734), v = g(v, w, m, y, b[S + 5], 4, -378558), y = g(y, v, w, m, b[S + 8], 11, -2022574463), m = g(m, y, v, w, b[S + 11], 16, 1839030562), w = g(w, m, y, v, b[S + 14], 23, -35309556), v = g(v, w, m, y, b[S + 1], 4, -1530992060), y = g(y, v, w, m, b[S + 4], 11, 1272893353), m = g(m, y, v, w, b[S + 7], 16, -155497632), w = g(w, m, y, v, b[S + 10], 23, -1094730640), v = g(v, w, m, y, b[S + 13], 4, 681279174), y = g(y, v, w, m, b[S], 11, -358537222), m = g(m, y, v, w, b[S + 3], 16, -722521979), w = g(w, m, y, v, b[S + 6], 23, 76029189), v = g(v, w, m, y, b[S + 9], 4, -640364487), y = g(y, v, w, m, b[S + 12], 11, -421815835), m = g(m, y, v, w, b[S + 15], 16, 530742520), w = g(w, m, y, v, b[S + 2], 23, -995338651), v = f(v, w, m, y, b[S], 6, -198630844), y = f(y, v, w, m, b[S + 7], 10, 1126891415), m = f(m, y, v, w, b[S + 14], 15, -1416354905), w = f(w, m, y, v, b[S + 5], 21, -57434055), v = f(v, w, m, y, b[S + 12], 6, 1700485571), y = f(y, v, w, m, b[S + 3], 10, -1894986606), m = f(m, y, v, w, b[S + 10], 15, -1051523), w = f(w, m, y, v, b[S + 1], 21, -2054922799), v = f(v, w, m, y, b[S + 8], 6, 1873313359), y = f(y, v, w, m, b[S + 15], 10, -30611744), m = f(m, y, v, w, b[S + 6], 15, -1560198380), w = f(w, m, y, v, b[S + 13], 21, 1309151649), v = f(v, w, m, y, b[S + 4], 6, -145523070), y = f(y, v, w, m, b[S + 11], 10, -1120210379), m = f(m, y, v, w, b[S + 2], 15, 718787259), w = f(w, m, y, v, b[S + 9], 21, -343485551), v = o(v, O), w = o(w, E), m = o(m, A), y = o(y, $);
    }
    return [v, w, m, y];
  }
  function i(b) {
    if (b.length === 0)
      return [];
    const x = b.length * 8, v = new Uint32Array(r(x));
    for (let w = 0; w < x; w += 8)
      v[w >> 5] |= (b[w / 8] & 255) << w % 32;
    return v;
  }
  function o(b, x) {
    const v = (b & 65535) + (x & 65535);
    return (b >> 16) + (x >> 16) + (v >> 16) << 16 | v & 65535;
  }
  function l(b, x) {
    return b << x | b >>> 32 - x;
  }
  function c(b, x, v, w, m, y) {
    return o(l(o(o(x, b), o(w, y)), m), v);
  }
  function u(b, x, v, w, m, y, S) {
    return c(x & v | ~x & w, b, x, m, y, S);
  }
  function d(b, x, v, w, m, y, S) {
    return c(x & w | v & ~w, b, x, m, y, S);
  }
  function g(b, x, v, w, m, y, S) {
    return c(x ^ v ^ w, b, x, m, y, S);
  }
  function f(b, x, v, w, m, y, S) {
    return c(v ^ (x | ~w), b, x, m, y, S);
  }
  var h = e6;
  return Bs.default = h, Bs;
}
var z0;
function PM() {
  if (z0) return Hs;
  z0 = 1, Object.defineProperty(Hs, "__esModule", {
    value: true
  }), Hs.default = void 0;
  var e6 = r(/* @__PURE__ */ Ox()), t = r(/* @__PURE__ */ IM());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e6.default)("v3", 48, t.default);
  return Hs.default = i, Hs;
}
var Ws = {}, Vs = {}, L0;
function NM() {
  if (L0) return Vs;
  L0 = 1, Object.defineProperty(Vs, "__esModule", {
    value: true
  }), Vs.default = void 0;
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return Vs.default = t, Vs;
}
var $0;
function MM() {
  if ($0) return Ws;
  $0 = 1, Object.defineProperty(Ws, "__esModule", {
    value: true
  }), Ws.default = void 0;
  var e6 = n(/* @__PURE__ */ NM()), t = n(/* @__PURE__ */ _x()), r = /* @__PURE__ */ pu();
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i(l, c, u) {
    if (e6.default.randomUUID && !c && !l)
      return e6.default.randomUUID();
    l = l || {};
    const d = l.random || (l.rng || t.default)();
    if (d[6] = d[6] & 15 | 64, d[8] = d[8] & 63 | 128, c) {
      u = u || 0;
      for (let g = 0; g < 16; ++g)
        c[u + g] = d[g];
      return c;
    }
    return (0, r.unsafeStringify)(d);
  }
  var o = i;
  return Ws.default = o, Ws;
}
var Us = {}, qs = {}, F0;
function DM() {
  if (F0) return qs;
  F0 = 1, Object.defineProperty(qs, "__esModule", {
    value: true
  }), qs.default = void 0;
  function e6(i, o, l, c) {
    switch (i) {
      case 0:
        return o & l ^ ~o & c;
      case 1:
        return o ^ l ^ c;
      case 2:
        return o & l ^ o & c ^ l & c;
      case 3:
        return o ^ l ^ c;
    }
  }
  function t(i, o) {
    return i << o | i >>> 32 - o;
  }
  function r(i) {
    const o = [1518500249, 1859775393, 2400959708, 3395469782], l = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof i == "string") {
      const g = unescape(encodeURIComponent(i));
      i = [];
      for (let f = 0; f < g.length; ++f)
        i.push(g.charCodeAt(f));
    } else Array.isArray(i) || (i = Array.prototype.slice.call(i));
    i.push(128);
    const c = i.length / 4 + 2, u = Math.ceil(c / 16), d = new Array(u);
    for (let g = 0; g < u; ++g) {
      const f = new Uint32Array(16);
      for (let h = 0; h < 16; ++h)
        f[h] = i[g * 64 + h * 4] << 24 | i[g * 64 + h * 4 + 1] << 16 | i[g * 64 + h * 4 + 2] << 8 | i[g * 64 + h * 4 + 3];
      d[g] = f;
    }
    d[u - 1][14] = (i.length - 1) * 8 / Math.pow(2, 32), d[u - 1][14] = Math.floor(d[u - 1][14]), d[u - 1][15] = (i.length - 1) * 8 & 4294967295;
    for (let g = 0; g < u; ++g) {
      const f = new Uint32Array(80);
      for (let m = 0; m < 16; ++m)
        f[m] = d[g][m];
      for (let m = 16; m < 80; ++m)
        f[m] = t(f[m - 3] ^ f[m - 8] ^ f[m - 14] ^ f[m - 16], 1);
      let h = l[0], b = l[1], x = l[2], v = l[3], w = l[4];
      for (let m = 0; m < 80; ++m) {
        const y = Math.floor(m / 20), S = t(h, 5) + e6(y, b, x, v) + w + o[y] + f[m] >>> 0;
        w = v, v = x, x = t(b, 30) >>> 0, b = h, h = S;
      }
      l[0] = l[0] + h >>> 0, l[1] = l[1] + b >>> 0, l[2] = l[2] + x >>> 0, l[3] = l[3] + v >>> 0, l[4] = l[4] + w >>> 0;
    }
    return [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, l[0] & 255, l[1] >> 24 & 255, l[1] >> 16 & 255, l[1] >> 8 & 255, l[1] & 255, l[2] >> 24 & 255, l[2] >> 16 & 255, l[2] >> 8 & 255, l[2] & 255, l[3] >> 24 & 255, l[3] >> 16 & 255, l[3] >> 8 & 255, l[3] & 255, l[4] >> 24 & 255, l[4] >> 16 & 255, l[4] >> 8 & 255, l[4] & 255];
  }
  var n = r;
  return qs.default = n, qs;
}
var H0;
function zM() {
  if (H0) return Us;
  H0 = 1, Object.defineProperty(Us, "__esModule", {
    value: true
  }), Us.default = void 0;
  var e6 = r(/* @__PURE__ */ Ox()), t = r(/* @__PURE__ */ DM());
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (0, e6.default)("v5", 80, t.default);
  return Us.default = i, Us;
}
var Gs = {}, j0;
function LM() {
  if (j0) return Gs;
  j0 = 1, Object.defineProperty(Gs, "__esModule", {
    value: true
  }), Gs.default = void 0;
  var e6 = "00000000-0000-0000-0000-000000000000";
  return Gs.default = e6, Gs;
}
var Zs = {}, B0;
function $M() {
  if (B0) return Zs;
  B0 = 1, Object.defineProperty(Zs, "__esModule", {
    value: true
  }), Zs.default = void 0;
  var e6 = t(/* @__PURE__ */ fu());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i) {
    if (!(0, e6.default)(i))
      throw TypeError("Invalid UUID");
    return parseInt(i.slice(14, 15), 16);
  }
  var n = r;
  return Zs.default = n, Zs;
}
var W0;
function FM() {
  return W0 || (W0 = 1, (function(e6) {
    Object.defineProperty(e6, "__esModule", {
      value: true
    }), Object.defineProperty(e6, "NIL", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    }), Object.defineProperty(e6, "parse", {
      enumerable: true,
      get: function() {
        return d.default;
      }
    }), Object.defineProperty(e6, "stringify", {
      enumerable: true,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(e6, "v1", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e6, "v3", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e6, "v4", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(e6, "v5", {
      enumerable: true,
      get: function() {
        return i.default;
      }
    }), Object.defineProperty(e6, "validate", {
      enumerable: true,
      get: function() {
        return c.default;
      }
    }), Object.defineProperty(e6, "version", {
      enumerable: true,
      get: function() {
        return l.default;
      }
    });
    var t = g(/* @__PURE__ */ CM()), r = g(/* @__PURE__ */ PM()), n = g(/* @__PURE__ */ MM()), i = g(/* @__PURE__ */ zM()), o = g(/* @__PURE__ */ LM()), l = g(/* @__PURE__ */ $M()), c = g(/* @__PURE__ */ fu()), u = g(/* @__PURE__ */ pu()), d = g(/* @__PURE__ */ Ex());
    function g(f) {
      return f && f.__esModule ? f : { default: f };
    }
  })(gf)), gf;
}
var vf, V0;
function HM() {
  if (V0) return vf;
  V0 = 1;
  function e6(t, r) {
    if (!t || !r || !t.length || !r.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = t, this.dstAlphabet = r;
  }
  return e6.prototype.convert = function(t) {
    var r, n, i, o = {}, l = this.srcAlphabet.length, c = this.dstAlphabet.length, u = t.length, d = typeof t == "string" ? "" : [];
    if (!this.isValid(t))
      throw new Error('Number "' + t + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return t;
    for (r = 0; r < u; r++)
      o[r] = this.srcAlphabet.indexOf(t[r]);
    do {
      for (n = 0, i = 0, r = 0; r < u; r++)
        n = n * l + o[r], n >= c ? (o[i++] = parseInt(n / c, 10), n = n % c) : i > 0 && (o[i++] = 0);
      u = i, d = this.dstAlphabet.slice(n, n + 1).concat(d);
    } while (i !== 0);
    return d;
  }, e6.prototype.isValid = function(t) {
    for (var r = 0; r < t.length; ++r)
      if (this.srcAlphabet.indexOf(t[r]) === -1)
        return false;
    return true;
  }, vf = e6, vf;
}
var mf, U0;
function jM() {
  if (U0) return mf;
  U0 = 1;
  var e6 = HM();
  function t(r, n) {
    var i = new e6(r, n);
    return function(o) {
      return i.convert(o);
    };
  }
  return t.BIN = "01", t.OCT = "01234567", t.DEC = "0123456789", t.HEX = "0123456789abcdef", mf = t, mf;
}
var bf, q0;
function BM() {
  if (q0) return bf;
  q0 = 1;
  const { v4: e6, validate: t } = /* @__PURE__ */ FM(), r = jM(), n = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, i = {
    consistentLength: true
  };
  let o;
  const l = (d, g, f) => {
    const h = g(d.toLowerCase().replace(/-/g, ""));
    return !f || !f.consistentLength ? h : h.padStart(
      f.shortIdLength,
      f.paddingChar
    );
  }, c = (d, g) => {
    const h = g(d).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [h[1], h[2], h[3], h[4], h[5]].join("-");
  }, u = (d) => Math.ceil(Math.log(2 ** 128) / Math.log(d));
  return bf = (() => {
    const d = (g, f) => {
      const h = g || n.flickrBase58, b = { ...i, ...f };
      if ([...new Set(Array.from(h))].length !== h.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const x = u(h.length), v = {
        shortIdLength: x,
        consistentLength: b.consistentLength,
        paddingChar: h[0]
      }, w = r(r.HEX, h), m = r(h, r.HEX), y = () => l(e6(), w, v), O = {
        alphabet: h,
        fromUUID: (E) => l(E, w, v),
        maxLength: x,
        generate: y,
        new: y,
        toUUID: (E) => c(E, m),
        uuid: e6,
        validate: (E, A = false) => {
          if (!E || typeof E != "string") return false;
          const $ = b.consistentLength ? E.length === x : E.length <= x, T = E.split("").every((D) => h.includes(D));
          return A === false ? $ && T : $ && T && t(c(E, m));
        }
      };
      return Object.freeze(O), O;
    };
    return d.constants = n, d.uuid = e6, d.generate = () => (o || (o = d(n.flickrBase58).generate), o()), d;
  })(), bf;
}
var Ri = BM();
const WM = ({ depth: e6, height: t = 24, width: r = 11, showLines: n = true, stroke: i }) => {
  const o = `indent_line_${Ri.generate()}`;
  return /* @__PURE__ */ __mf_2(
    "svg",
    {
      viewBox: `0 0 ${11 * e6} ${t}`,
      width: `${11 * e6}`,
      height: t,
      children: [
        /* @__PURE__ */ __mf_1("defs", { children: /* @__PURE__ */ __mf_1(
          "pattern",
          {
            id: o,
            x: "0",
            y: "0",
            width: r,
            height: t,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ __mf_1(
              "line",
              {
                x1: r / 2,
                y1: "0",
                x2: r / 2,
                y2: t,
                className: i ? `stroke-[${i}]` : "stroke-body"
              }
            )
          }
        ) }),
        n ? /* @__PURE__ */ __mf_1(
          "rect",
          {
            fill: `url(#${o})`,
            x: "0",
            y: "0",
            width: `${11 * e6}`,
            height: t
          }
        ) : /* @__PURE__ */ __mf_1(
          "rect",
          {
            fill: n ? `url(#${o})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: t
          }
        )
      ]
    }
  );
}, VM = ({ show: e6, expanded: t, onClick: r, variant: n = "arrow" }) => e6 ? /* @__PURE__ */ __mf_1(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (i) => r && r(i),
    children: (() => {
      switch (n) {
        case "arrow":
          return /* @__PURE__ */ __mf_1(
            _c,
            {
              className: gt([
                "h-3 w-3 transform transition ease-in-out",
                {
                  "rotate-0": t,
                  "-rotate-90": !t
                }
              ])
            }
          );
        case "caret":
          return t ? /* @__PURE__ */ __mf_1(_c, {}) : /* @__PURE__ */ __mf_1(c2, {});
        default:
          return /* @__PURE__ */ __mf_1(_c, { className: "h-3 w-3 transform transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ __mf_1("div", { className: "flex h-6 w-3 items-center" }), kx = ({
  node: e6,
  depth: t,
  expandedKeys: r,
  selectedKeys: n,
  actions: i,
  searchQuery: o,
  renderNode: l,
  onNodeClick: c
}) => {
  var b;
  const { key: u, children: d } = e6, g = __mf_23(
    () => ({
      expanded: r.includes(e6.key),
      selected: n.includes(e6.key)
    }),
    [r, e6.key, n]
  ), f = l && typeof l == "function" ? l(e6, t, g, i, o) : GM(e6, t, g, c);
  return !((b = e6.options) != null && b.filterable) || !o || e6.title.toLowerCase().includes(o.toLowerCase()) ? /* @__PURE__ */ __mf_2(__mf_0, { children: [
    /* @__PURE__ */ __mf_1("div", { className: "flex items-center gap-x-2", children: f }, u),
    qM(
      d || [],
      t,
      o,
      r,
      n,
      g.expanded,
      i,
      c,
      l
    )
  ] }) : null;
}, UM = function(e6, t) {
  var l;
  const { title: r, icon: n, subtitle: i } = e6;
  let o = null;
  return n && (o = /* @__PURE__ */ __mf_1(TM, { children: n })), /* @__PURE__ */ __mf_2(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (l = e6.options) == null ? void 0 : l.draggable,
      onClick: () => {
        t && t(e6);
      },
      children: [
        o,
        /* @__PURE__ */ __mf_1(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: r
          }
        ),
        i && /* @__PURE__ */ __mf_1("div", { className: "mx-1 min-w-0 text-xxs italic text-muted", children: i })
      ]
    }
  );
}, qM = function(e6, t, r, n, i, o, l, c, u) {
  var d, g;
  return e6.length && o ? (["dataclass-attribute", "datasource-attribute", "method"].includes(
    ((d = e6[0].data) == null ? void 0 : d.nodeType) || ((g = e6[0].data) == null ? void 0 : g.type)
  ) ? e6 : e6.sort((f, h) => j$(f.title, h.title))).map((f) => /* @__PURE__ */ __mf_1(
    kx,
    {
      actions: l,
      node: f,
      searchQuery: r,
      depth: t + 1,
      expandedKeys: n,
      selectedKeys: i,
      onNodeClick: c,
      renderNode: u
    },
    f.key
  )) : null;
}, GM = function(e6, t, r, n) {
  return /* @__PURE__ */ __mf_2(__mf_0, { children: [
    /* @__PURE__ */ __mf_1(WM, { showLines: true, depth: t }),
    /* @__PURE__ */ __mf_1(
      VM,
      {
        show: e6.children && e6.children.length > 0 || false,
        expanded: r.expanded
      }
    ),
    UM(e6, n)
  ] });
}, nc = (e6) => (t) => e6 === t, ZF = function({
  treeData: t,
  renderNode: r,
  onNodeClick: n,
  onExpandNode: i,
  searchQuery: o,
  expandedKeys: l,
  expandCondition: c = "always",
  encapsulated: u,
  className: d
}) {
  const [g, f] = __mf_26(() => ({
    expandedKeys: l || [],
    selectedKeys: []
  }));
  __mf_20(() => {
    c === "when-collapsed" && g.expandedKeys.length > 0 || f({
      ...g,
      expandedKeys: l || g.expandedKeys
    });
  }, [l]);
  const h = __mf_17(
    (m) => {
      if (!m) return;
      const y = g.expandedKeys.findIndex(nc(m.key));
      let S = [];
      y === -1 ? (S = [...g.expandedKeys, m.key], f(() => ({
        ...g,
        expandedKeys: S
      })), i && i(S)) : (S = g.expandedKeys.filter((O) => O !== m.key), f(() => ({
        ...g,
        expandedKeys: S
      })), i && i(S));
    },
    [g]
  ), b = __mf_17(
    (m) => {
      var S;
      if (!((S = m == null ? void 0 : m.options) != null && S.selectable)) return;
      g.selectedKeys.findIndex(nc(m.key)) === -1 && f({
        ...g,
        selectedKeys: [...g.selectedKeys, m.key]
      });
    },
    [g]
  ), x = __mf_17(
    (m) => {
      var S;
      if (!((S = m == null ? void 0 : m.options) != null && S.selectable)) return;
      g.selectedKeys.findIndex(nc(m.key)) === -1 && f({ ...g, selectedKeys: [m.key] });
    },
    [g]
  ), v = __mf_17(
    (m) => {
      var S;
      if (!((S = m == null ? void 0 : m.options) != null && S.selectable)) {
        f({ ...g, selectedKeys: [] });
        return;
      }
      g.selectedKeys.findIndex(nc(m.key)) !== -1 && f({
        ...g,
        selectedKeys: g.selectedKeys.filter((O) => O !== m.key)
      });
    },
    [g]
  ), w = __mf_23(
    () => ({
      expand: h,
      select: b,
      selectSingle: x,
      deselect: v
    }),
    [v, h, b, x]
  );
  return /* @__PURE__ */ __mf_1(
    oi,
    {
      depth: u ? 0 : 1,
      borderType: "light",
      className: gt("fd-tree", d, {
        "pl-2 mb-1 rounded border p-1": u
      }),
      children: t.map((m) => /* @__PURE__ */ __mf_1(
        kx,
        {
          node: m,
          searchQuery: o || "",
          depth: 0,
          expandedKeys: g.expandedKeys,
          selectedKeys: g.selectedKeys,
          actions: w,
          renderNode: r,
          onNodeClick: n
        },
        m.key
      ))
    }
  );
};
function yf(e6) {
  return e6.of && e6.children ? /* @__PURE__ */ __mf_1(__mf_0, { children: e6.children }) : null;
}
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Gt.apply(null, arguments);
}
function ZM(e6) {
  for (var t = 0, r, n = 0, i = e6.length; i >= 4; ++n, i -= 4)
    r = e6.charCodeAt(n) & 255 | (e6.charCodeAt(++n) & 255) << 8 | (e6.charCodeAt(++n) & 255) << 16 | (e6.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e6.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e6.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e6.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var KM = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Ax(e6) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e6(r)), t[r];
  };
}
var YM = /[A-Z]|^ms/g, XM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Tx = function(t) {
  return t.charCodeAt(1) === 45;
}, G0 = function(t) {
  return t != null && typeof t != "boolean";
}, wf = /* @__PURE__ */ Ax(function(e6) {
  return Tx(e6) ? e6 : e6.replace(YM, "-$&").toLowerCase();
}), Z0 = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(XM, function(n, i, o) {
          return Tn = {
            name: i,
            styles: o,
            next: Tn
          }, i;
        });
  }
  return KM[t] !== 1 && !Tx(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ta(e6, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return Tn = {
          name: i.name,
          styles: i.styles,
          next: Tn
        }, i.name;
      var o = r;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Tn = {
              name: l.name,
              styles: l.styles,
              next: Tn
            }, l = l.next;
        var c = o.styles + ";";
        return c;
      }
      return JM(e6, t, r);
    }
    case "function": {
      if (e6 !== void 0) {
        var u = Tn, d = r(e6);
        return Tn = u, Ta(e6, t, d);
      }
      break;
    }
  }
  var g = r;
  if (t == null)
    return g;
  var f = t[g];
  return f !== void 0 ? f : g;
}
function JM(e6, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Ta(e6, t, r[i]) + ";";
  else
    for (var o in r) {
      var l = r[o];
      if (typeof l != "object") {
        var c = l;
        t != null && t[c] !== void 0 ? n += o + "{" + t[c] + "}" : G0(c) && (n += wf(o) + ":" + Z0(o, c) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var u = 0; u < l.length; u++)
          G0(l[u]) && (n += wf(o) + ":" + Z0(o, l[u]) + ";");
      else {
        var d = Ta(e6, t, l);
        switch (o) {
          case "animation":
          case "animationName": {
            n += wf(o) + ":" + d + ";";
            break;
          }
          default:
            n += o + "{" + d + "}";
        }
      }
    }
  return n;
}
var K0 = /label:\s*([^\s;{]+)\s*(;|$)/g, Tn;
function QM(e6, t, r) {
  if (e6.length === 1 && typeof e6[0] == "object" && e6[0] !== null && e6[0].styles !== void 0)
    return e6[0];
  var n = true, i = "";
  Tn = void 0;
  var o = e6[0];
  if (o == null || o.raw === void 0)
    n = false, i += Ta(r, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var c = 1; c < e6.length; c++)
    if (i += Ta(r, t, e6[c]), n) {
      var u = o;
      i += u[c];
    }
  K0.lastIndex = 0;
  for (var d = "", g; (g = K0.exec(i)) !== null; )
    d += "-" + g[1];
  var f = ZM(i) + d;
  return {
    name: f,
    styles: i,
    next: Tn
  };
}
var eD = function(t) {
  return t();
}, tD = __moduleExports.useInsertionEffect ? __moduleExports.useInsertionEffect : false, rD = tD || eD, nD = true;
function iD(e6, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e6[i] !== void 0 ? t.push(e6[i] + ";") : i && (n += i + " ");
  }), n;
}
var Rx = function(t, r, n) {
  var i = t.key + "-" + r.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  nD === false) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, oD = function(t, r, n) {
  Rx(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var o = r;
    do
      t.insert(r === o ? "." + i : "", o, t.sheet, true), o = o.next;
    while (o !== void 0);
  }
}, sD = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, aD = /* @__PURE__ */ Ax(
  function(e6) {
    return sD.test(e6) || e6.charCodeAt(0) === 111 && e6.charCodeAt(1) === 110 && e6.charCodeAt(2) < 91;
  }
  /* Z+1 */
), lD = aD, cD = function(t) {
  return t !== "theme";
}, Y0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? lD : cD;
}, X0 = function(t, r, n) {
  var i;
  if (r) {
    var o = r.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(l) {
      return t.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, uD = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Rx(r, n, i), rD(function() {
    return oD(r, n, i);
  }), null;
}, dD = function e(t, r) {
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, o, l;
  r !== void 0 && (o = r.label, l = r.target);
  var c = X0(t, r, n), u = c || Y0(i), d = !u("as");
  return function() {
    var g = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), g[0] == null || g[0].raw === void 0)
      f.push.apply(f, g);
    else {
      var h = g[0];
      f.push(h[0]);
      for (var b = g.length, x = 1; x < b; x++)
        f.push(g[x], h[x]);
    }
    var v = withEmotionCache(function(w, m, y) {
      var S = d && w.as || i, O = "", E = [], A = w;
      if (w.theme == null) {
        A = {};
        for (var $ in w)
          A[$] = w[$];
        A.theme = __mf_18(ThemeContext);
      }
      typeof w.className == "string" ? O = iD(m.registered, E, w.className) : w.className != null && (O = w.className + " ");
      var T = QM(f.concat(E), m.registered, A);
      O += m.key + "-" + T.name, l !== void 0 && (O += " " + l);
      var D = d && c === void 0 ? Y0(S) : u, j = {};
      for (var z in w)
        d && z === "as" || D(z) && (j[z] = w[z]);
      return j.className = O, y && (j.ref = y), /* @__PURE__ */ __mf_10(__mf_0$1, null, /* @__PURE__ */ __mf_10(uD, {
        cache: m,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ __mf_10(S, j));
    });
    return v.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = f, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + l;
      }
    }), v.withComponent = function(w, m) {
      var y = e(w, Gt({}, r, m, {
        shouldForwardProp: X0(v, m, true)
      }));
      return y.apply(void 0, f);
    }, v;
  };
}, fD = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Gc = dD.bind(null);
fD.forEach(function(e6) {
  Gc[e6] = Gc(e6);
});
var pD = function(e6) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e6) ? e6[0] : e6;
  return t.ownerDocument.body;
}, Mo = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), oc = {}, xf = 0, Cx = function(e6) {
  return e6 && (e6.host || Cx(e6.parentNode));
}, hD = function(e6, t) {
  return t.map(function(r) {
    if (e6.contains(r))
      return r;
    var n = Cx(r);
    return n && e6.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e6, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, gD = function(e6, t, r, n) {
  var i = hD(t, Array.isArray(e6) ? e6 : [e6]);
  oc[r] || (oc[r] = /* @__PURE__ */ new WeakMap());
  var o = oc[r], l = [], c = /* @__PURE__ */ new Set(), u = new Set(i), d = function(f) {
    !f || c.has(f) || (c.add(f), d(f.parentNode));
  };
  i.forEach(d);
  var g = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (c.has(h))
        g(h);
      else
        try {
          var b = h.getAttribute(n), x = b !== null && b !== "false", v = (Mo.get(h) || 0) + 1, w = (o.get(h) || 0) + 1;
          Mo.set(h, v), o.set(h, w), l.push(h), v === 1 && x && ic.set(h, true), w === 1 && h.setAttribute(r, "true"), x || h.setAttribute(n, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", h, m);
        }
    });
  };
  return g(t), c.clear(), xf++, function() {
    l.forEach(function(f) {
      var h = Mo.get(f) - 1, b = o.get(f) - 1;
      Mo.set(f, h), o.set(f, b), h || (ic.has(f) || f.removeAttribute(n), ic.delete(f)), b || f.removeAttribute(r);
    }), xf--, xf || (Mo = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), oc = {});
  };
}, vD = function(e6, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e6) ? e6 : [e6]), i = pD(e6);
  return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live], script"))), gD(n, i, r, "aria-hidden")) : function() {
    return null;
  };
}, op = function(e6, t) {
  return op = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, op(e6, t);
};
function hu(e6, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  op(e6, t);
  function r() {
    this.constructor = e6;
  }
  e6.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Rn = function() {
  return Rn = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, Rn.apply(this, arguments);
};
function Ix(e6, t) {
  var r = {};
  for (var n in e6) Object.prototype.hasOwnProperty.call(e6, n) && t.indexOf(n) < 0 && (r[n] = e6[n]);
  if (e6 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e6); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, n[i]) && (r[n[i]] = e6[n[i]]);
  return r;
}
function sp(e6) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e6[t], n = 0;
  if (r) return r.call(e6);
  if (e6 && typeof e6.length == "number") return {
    next: function() {
      return e6 && n >= e6.length && (e6 = void 0), { value: e6 && e6[n++], done: !e6 };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ap(e6, t) {
  var r = typeof Symbol == "function" && e6[Symbol.iterator];
  if (!r) return e6;
  var n = r.call(e6), i, o = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
  } catch (c) {
    l = { error: c };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (l) throw l.error;
    }
  }
  return o;
}
function Zc(e6, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, o; n < i; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e6.concat(o || Array.prototype.slice.call(t));
}
var Pc = "right-scroll-bar-position", Nc = "width-before-scroll-bar", mD = "with-scroll-bars-hidden", bD = "--removed-body-scroll-bar-size";
function Sf(e6, t) {
  return typeof e6 == "function" ? e6(t) : e6 && (e6.current = t), e6;
}
function yD(e6, t) {
  var r = __mf_26(function() {
    return {
      // value
      value: e6,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && (r.value = n, r.callback(n, i));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var wD = typeof window < "u" ? __mf_22 : __mf_20, J0 = /* @__PURE__ */ new WeakMap();
function xD(e6, t) {
  var r = yD(null, function(n) {
    return e6.forEach(function(i) {
      return Sf(i, n);
    });
  });
  return wD(function() {
    var n = J0.get(r);
    if (n) {
      var i = new Set(n), o = new Set(e6), l = r.current;
      i.forEach(function(c) {
        o.has(c) || Sf(c, null);
      }), o.forEach(function(c) {
        i.has(c) || Sf(c, l);
      });
    }
    J0.set(r, e6);
  }, [e6]), r;
}
function SD(e6) {
  return e6;
}
function _D(e6, t) {
  t === void 0 && (t = SD);
  var r = [], n = false, i = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e6;
    },
    useMedium: function(o) {
      var l = t(o, n);
      return r.push(l), function() {
        r = r.filter(function(c) {
          return c !== l;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (n = true; r.length; ) {
        var l = r;
        r = [], l.forEach(o);
      }
      r = {
        push: function(c) {
          return o(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(o) {
      n = true;
      var l = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(o), l = r;
      }
      var u = function() {
        var g = l;
        l = [], g.forEach(o);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), r = {
        push: function(g) {
          l.push(g), d();
        },
        filter: function(g) {
          return l = l.filter(g), r;
        }
      };
    }
  };
  return i;
}
function ED(e6) {
  e6 === void 0 && (e6 = {});
  var t = _D(null);
  return t.options = Rn({ async: true, ssr: false }, e6), t;
}
var Px = function(e6) {
  var t = e6.sideCar, r = Ix(e6, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return __mf_10(n, Rn({}, r));
};
Px.isSideCarExport = true;
function OD(e6, t) {
  return e6.useMedium(t), Px;
}
var Nx = ED(), _f = function() {
}, gu = __mf_13(function(e6, t) {
  var r = __mf_25(null), n = __mf_26({
    onScrollCapture: _f,
    onWheelCapture: _f,
    onTouchMoveCapture: _f
  }), i = n[0], o = n[1], l = e6.forwardProps, c = e6.children, u = e6.className, d = e6.removeScrollBar, g = e6.enabled, f = e6.shards, h = e6.sideCar, b = e6.noRelative, x = e6.noIsolation, v = e6.inert, w = e6.allowPinchZoom, m = e6.as, y = m === void 0 ? "div" : m, S = e6.gapMode, O = Ix(e6, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, A = xD([r, t]), $ = Rn(Rn({}, O), i);
  return __mf_10(
    __mf_0$1,
    null,
    g && __mf_10(E, { sideCar: Nx, removeScrollBar: d, shards: f, noRelative: b, noIsolation: x, inert: v, setCallbacks: o, allowPinchZoom: !!w, lockRef: r, gapMode: S }),
    l ? __mf_8(__mf_4.only(c), Rn(Rn({}, $), { ref: A })) : __mf_10(y, Rn({}, $, { className: u, ref: A }), c)
  );
});
gu.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
gu.classNames = {
  fullWidth: Nc,
  zeroRight: Pc
};
var kD = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function AD() {
  if (!document)
    return null;
  var e6 = document.createElement("style");
  e6.type = "text/css";
  var t = kD();
  return t && e6.setAttribute("nonce", t), e6;
}
function TD(e6, t) {
  e6.styleSheet ? e6.styleSheet.cssText = t : e6.appendChild(document.createTextNode(t));
}
function RD(e6) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e6);
}
var CD = function() {
  var e6 = 0, t = null;
  return {
    add: function(r) {
      e6 == 0 && (t = AD()) && (TD(t, r), RD(t)), e6++;
    },
    remove: function() {
      e6--, !e6 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ID = function() {
  var e6 = CD();
  return function(t, r) {
    __mf_20(function() {
      return e6.add(t), function() {
        e6.remove();
      };
    }, [t && r]);
  };
}, Mx = function() {
  var e6 = ID(), t = function(r) {
    var n = r.styles, i = r.dynamic;
    return e6(n, i), null;
  };
  return t;
}, PD = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ef = function(e6) {
  return parseInt(e6 || "", 10) || 0;
}, ND = function(e6) {
  var t = window.getComputedStyle(document.body), r = t[e6 === "padding" ? "paddingLeft" : "marginLeft"], n = t[e6 === "padding" ? "paddingTop" : "marginTop"], i = t[e6 === "padding" ? "paddingRight" : "marginRight"];
  return [Ef(r), Ef(n), Ef(i)];
}, MD = function(e6) {
  if (e6 === void 0 && (e6 = "margin"), typeof window > "u")
    return PD;
  var t = ND(e6), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, DD = Mx(), Vo = "data-scroll-locked", zD = function(e6, t, r, n) {
  var i = e6.left, o = e6.top, l = e6.right, c = e6.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(mD, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(c, "px ").concat(n, `;
  }
  body[`).concat(Vo, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Pc, ` {
    right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(Nc, ` {
    margin-right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(Pc, " .").concat(Pc, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Nc, " .").concat(Nc, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Vo, `] {
    `).concat(bD, ": ").concat(c, `px;
  }
`);
}, Q0 = function() {
  var e6 = parseInt(document.body.getAttribute(Vo) || "0", 10);
  return isFinite(e6) ? e6 : 0;
}, LD = function() {
  __mf_20(function() {
    return document.body.setAttribute(Vo, (Q0() + 1).toString()), function() {
      var e6 = Q0() - 1;
      e6 <= 0 ? document.body.removeAttribute(Vo) : document.body.setAttribute(Vo, e6.toString());
    };
  }, []);
}, $D = function(e6) {
  var t = e6.noRelative, r = e6.noImportant, n = e6.gapMode, i = n === void 0 ? "margin" : n;
  LD();
  var o = __mf_23(function() {
    return MD(i);
  }, [i]);
  return __mf_10(DD, { styles: zD(o, !t, i, r ? "" : "!important") });
}, lp = false;
if (typeof window < "u")
  try {
    var sc = Object.defineProperty({}, "passive", {
      get: function() {
        return lp = true, true;
      }
    });
    window.addEventListener("test", sc, sc), window.removeEventListener("test", sc, sc);
  } catch {
    lp = false;
  }
var Do = lp ? { passive: false } : false, FD = function(e6) {
  return e6.tagName === "TEXTAREA";
}, Dx = function(e6, t) {
  if (!(e6 instanceof Element))
    return false;
  var r = window.getComputedStyle(e6);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !FD(e6) && r[t] === "visible")
  );
}, HD = function(e6) {
  return Dx(e6, "overflowY");
}, jD = function(e6) {
  return Dx(e6, "overflowX");
}, eb = function(e6, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var i = zx(e6, n);
    if (i) {
      var o = Lx(e6, n), l = o[1], c = o[2];
      if (l > c)
        return true;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return false;
}, BD = function(e6) {
  var t = e6.scrollTop, r = e6.scrollHeight, n = e6.clientHeight;
  return [
    t,
    r,
    n
  ];
}, WD = function(e6) {
  var t = e6.scrollLeft, r = e6.scrollWidth, n = e6.clientWidth;
  return [
    t,
    r,
    n
  ];
}, zx = function(e6, t) {
  return e6 === "v" ? HD(t) : jD(t);
}, Lx = function(e6, t) {
  return e6 === "v" ? BD(t) : WD(t);
}, VD = function(e6, t) {
  return e6 === "h" && t === "rtl" ? -1 : 1;
}, UD = function(e6, t, r, n, i) {
  var o = VD(e6, window.getComputedStyle(t).direction), l = o * n, c = r.target, u = t.contains(c), d = false, g = l > 0, f = 0, h = 0;
  do {
    if (!c)
      break;
    var b = Lx(e6, c), x = b[0], v = b[1], w = b[2], m = v - w - o * x;
    (x || m) && zx(e6, c) && (f += m, h += x);
    var y = c.parentNode;
    c = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && c !== document.body || // self content
    u && (t.contains(c) || t === c)
  );
  return (g && Math.abs(f) < 1 || !g && Math.abs(h) < 1) && (d = true), d;
}, ac = function(e6) {
  return "changedTouches" in e6 ? [e6.changedTouches[0].clientX, e6.changedTouches[0].clientY] : [0, 0];
}, tb = function(e6) {
  return [e6.deltaX, e6.deltaY];
}, rb = function(e6) {
  return e6 && "current" in e6 ? e6.current : e6;
}, qD = function(e6, t) {
  return e6[0] === t[0] && e6[1] === t[1];
}, GD = function(e6) {
  return `
  .block-interactivity-`.concat(e6, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e6, ` {pointer-events: all;}
`);
}, ZD = 0, zo = [];
function KD(e6) {
  var t = __mf_25([]), r = __mf_25([0, 0]), n = __mf_25(), i = __mf_26(ZD++)[0], o = __mf_26(Mx)[0], l = __mf_25(e6);
  __mf_20(function() {
    l.current = e6;
  }, [e6]), __mf_20(function() {
    if (e6.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var v = Zc([e6.lockRef.current], (e6.shards || []).map(rb), true).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e6.inert, e6.lockRef.current, e6.shards]);
  var c = __mf_17(function(v, w) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var m = ac(v), y = r.current, S = "deltaX" in v ? v.deltaX : y[0] - m[0], O = "deltaY" in v ? v.deltaY : y[1] - m[1], E, A = v.target, $ = Math.abs(S) > Math.abs(O) ? "h" : "v";
    if ("touches" in v && $ === "h" && A.type === "range")
      return false;
    var T = window.getSelection(), D = T && T.anchorNode, j = D ? D === A || D.contains(A) : false;
    if (j)
      return false;
    var z = eb($, A);
    if (!z)
      return true;
    if (z ? E = $ : (E = $ === "v" ? "h" : "v", z = eb($, A)), !z)
      return false;
    if (!n.current && "changedTouches" in v && (S || O) && (n.current = E), !E)
      return true;
    var M = n.current || E;
    return UD(M, w, v, M === "h" ? S : O);
  }, []), u = __mf_17(function(v) {
    var w = v;
    if (!(!zo.length || zo[zo.length - 1] !== o)) {
      var m = "deltaY" in w ? tb(w) : ac(w), y = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && qD(E.delta, m);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var S = (l.current.shards || []).map(rb).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), O = S.length > 0 ? c(w, S[0]) : !l.current.noIsolation;
        O && w.cancelable && w.preventDefault();
      }
    }
  }, []), d = __mf_17(function(v, w, m, y) {
    var S = { name: v, delta: w, target: m, should: y, shadowParent: YD(m) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(O) {
        return O !== S;
      });
    }, 1);
  }, []), g = __mf_17(function(v) {
    r.current = ac(v), n.current = void 0;
  }, []), f = __mf_17(function(v) {
    d(v.type, tb(v), v.target, c(v, e6.lockRef.current));
  }, []), h = __mf_17(function(v) {
    d(v.type, ac(v), v.target, c(v, e6.lockRef.current));
  }, []);
  __mf_20(function() {
    return zo.push(o), e6.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", u, Do), document.addEventListener("touchmove", u, Do), document.addEventListener("touchstart", g, Do), function() {
      zo = zo.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", u, Do), document.removeEventListener("touchmove", u, Do), document.removeEventListener("touchstart", g, Do);
    };
  }, []);
  var b = e6.removeScrollBar, x = e6.inert;
  return __mf_10(
    __mf_0$1,
    null,
    x ? __mf_10(o, { styles: GD(i) }) : null,
    b ? __mf_10($D, { noRelative: e6.noRelative, gapMode: e6.gapMode }) : null
  );
}
function YD(e6) {
  for (var t = null; e6 !== null; )
    e6 instanceof ShadowRoot && (t = e6.host, e6 = e6.host), e6 = e6.parentNode;
  return t;
}
const XD = OD(Nx, KD);
var $x = __mf_13(function(e6, t) {
  return __mf_10(gu, Rn({}, e6, { ref: t, sideCar: XD }));
});
$x.classNames = gu.classNames;
const JD = globalThis != null && globalThis.document ? __mf_22 : () => {
}, QD = __moduleExports.useId || (() => {
});
let e3 = 0;
function t3(e6) {
  const [t, r] = __mf_26(QD());
  return JD((() => {
    r(((n) => n ?? String(e3++)));
  }), [e6]), e6 || (t ? `radix-${t}` : "");
}
function Fx(...e6) {
  return (t) => e6.forEach(((r) => (function(n, i) {
    typeof n == "function" ? n(i) : n != null && (n.current = i);
  })(r, t)));
}
function lo(...e6) {
  return __mf_17(Fx(...e6), e6);
}
const Hx = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { children: r, ...n } = e6;
  return __mf_4.toArray(r).some(nb) ? /* @__PURE__ */ __mf_10(__mf_0$1, null, __mf_4.map(r, ((i) => nb(i) ? /* @__PURE__ */ __mf_10(cp, Gt({}, n, { ref: t }), i.props.children) : i))) : /* @__PURE__ */ __mf_10(cp, Gt({}, n, { ref: t }), r);
}));
Hx.displayName = "Slot";
const cp = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { children: r, ...n } = e6;
  return __mf_14(r) ? /* @__PURE__ */ __mf_8(r, { ...n3(n, r.props), ref: Fx(t, r.ref) }) : __mf_4.count(r) > 1 ? __mf_4.only(null) : null;
}));
cp.displayName = "SlotClone";
const r3 = ({ children: e6 }) => /* @__PURE__ */ __mf_10(__mf_0$1, null, e6);
function nb(e6) {
  return __mf_14(e6) && e6.type === r3;
}
function n3(e6, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e6[n], o = t[n];
    /^on[A-Z]/.test(n) ? r[n] = (...l) => {
      o == null || o(...l), i == null || i(...l);
    } : n === "style" ? r[n] = { ...i, ...o } : n === "className" && (r[n] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e6, ...r };
}
const rs = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e6, t) => ({ ...e6, [t]: /* @__PURE__ */ __mf_13(((r, n) => {
  const { asChild: i, ...o } = r, l = i ? Hx : t;
  return __mf_20((() => {
    window[Symbol.for("radix-ui")] = true;
  }), []), /* @__PURE__ */ __mf_10(l, Gt({}, o, { ref: n }));
})) })), {}), ib = globalThis != null && globalThis.document ? __mf_22 : () => {
}, jx = (e6) => {
  const { present: t, children: r } = e6, n = (function(l) {
    const [c, u] = __mf_26(), d = __mf_25({}), g = __mf_25(l), f = __mf_25("none"), h = l ? "mounted" : "unmounted", [b, x] = (function(v, w) {
      return __mf_24(((m, y) => {
        const S = w[m][y];
        return S ?? m;
      }), v);
    })(h, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return __mf_20((() => {
      const v = lc(d.current);
      f.current = b === "mounted" ? v : "none";
    }), [b]), ib((() => {
      const v = d.current, w = g.current;
      if (w !== l) {
        const m = f.current, y = lc(v);
        l ? x("MOUNT") : y === "none" || (v == null ? void 0 : v.display) === "none" ? x("UNMOUNT") : x(w && m !== y ? "ANIMATION_OUT" : "UNMOUNT"), g.current = l;
      }
    }), [l, x]), ib((() => {
      if (c) {
        const v = (m) => {
          const y = lc(d.current).includes(m.animationName);
          m.target === c && y && x("ANIMATION_END");
        }, w = (m) => {
          m.target === c && (f.current = lc(d.current));
        };
        return c.addEventListener("animationstart", w), c.addEventListener("animationcancel", v), c.addEventListener("animationend", v), () => {
          c.removeEventListener("animationstart", w), c.removeEventListener("animationcancel", v), c.removeEventListener("animationend", v);
        };
      }
      x("ANIMATION_END");
    }), [c, x]), { isPresent: ["mounted", "unmountSuspended"].includes(b), ref: __mf_17(((v) => {
      v && (d.current = getComputedStyle(v)), u(v);
    }), []) };
  })(t), i = typeof r == "function" ? r({ present: n.isPresent }) : __mf_4.only(r), o = lo(n.ref, i.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ __mf_8(i, { ref: o }) : null;
};
function lc(e6) {
  return (e6 == null ? void 0 : e6.animationName) || "none";
}
jx.displayName = "Presence";
let Of = 0;
function i3() {
  __mf_20((() => {
    var e6, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e6 = r[0]) !== null && e6 !== void 0 ? e6 : ob()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : ob()), Of++, () => {
      Of === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(((n) => n.remove())), Of--;
    };
  }), []);
}
function ob() {
  const e6 = document.createElement("span");
  return e6.setAttribute("data-radix-focus-guard", ""), e6.tabIndex = 0, e6.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e6;
}
const o3 = globalThis != null && globalThis.document ? __mf_22 : () => {
}, Bx = /* @__PURE__ */ __mf_13(((e6, t) => {
  var r, n;
  const { containerRef: i, style: o, ...l } = e6, c = (r = i == null ? void 0 : i.current) !== null && r !== void 0 ? r : globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, [, u] = __mf_26({});
  return o3((() => {
    u({});
  }), []), c ? /* @__PURE__ */ Oi$1.createPortal(/* @__PURE__ */ __mf_10(rs.div, Gt({ "data-radix-portal": "" }, l, { ref: t, style: c === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...o } : void 0 })), c) : null;
}));
function io(e6) {
  const t = __mf_25(e6);
  return __mf_20((() => {
    t.current = e6;
  })), __mf_23((() => (...r) => {
    var n;
    return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
  }), []);
}
const sb = { bubbles: false, cancelable: true }, s3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { loop: r = false, trapped: n = false, onMountAutoFocus: i, onUnmountAutoFocus: o, ...l } = e6, [c, u] = __mf_26(null), d = io(i), g = io(o), f = __mf_25(null), h = lo(t, ((v) => u(v))), b = __mf_25({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  __mf_20((() => {
    if (n) {
      let v = function(m) {
        if (b.paused || !c) return;
        const y = m.target;
        c.contains(y) ? f.current = y : Zi(f.current, { select: true });
      }, w = function(m) {
        !b.paused && c && (c.contains(m.relatedTarget) || Zi(f.current, { select: true }));
      };
      return document.addEventListener("focusin", v), document.addEventListener("focusout", w), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", w);
      };
    }
  }), [n, c, b.paused]), __mf_20((() => {
    if (c) {
      cb.add(b);
      const w = document.activeElement;
      if (!c.contains(w)) {
        const m = new Event("focusScope.autoFocusOnMount", sb);
        c.addEventListener("focusScope.autoFocusOnMount", d), c.dispatchEvent(m), m.defaultPrevented || ((function(y, { select: S = false } = {}) {
          const O = document.activeElement;
          for (const E of y) if (Zi(E, { select: S }), document.activeElement !== O) return;
        })((v = ab(c), v.filter(((y) => y.tagName !== "A"))), { select: true }), document.activeElement === w && Zi(c));
      }
      return () => {
        c.removeEventListener("focusScope.autoFocusOnMount", d), setTimeout((() => {
          const m = new Event("focusScope.autoFocusOnUnmount", sb);
          c.addEventListener("focusScope.autoFocusOnUnmount", g), c.dispatchEvent(m), m.defaultPrevented || Zi(w ?? document.body, { select: true }), c.removeEventListener("focusScope.autoFocusOnUnmount", g), cb.remove(b);
        }), 0);
      };
    }
    var v;
  }), [c, d, g, b]);
  const x = __mf_17(((v) => {
    if (!r && !n || b.paused) return;
    const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement;
    if (w && m) {
      const y = v.currentTarget, [S, O] = (function(E) {
        const A = ab(E), $ = lb(A, E), T = lb(A.reverse(), E);
        return [$, T];
      })(y);
      S && O ? v.shiftKey || m !== O ? v.shiftKey && m === S && (v.preventDefault(), r && Zi(O, { select: true })) : (v.preventDefault(), r && Zi(S, { select: true })) : m === y && v.preventDefault();
    }
  }), [r, n, b.paused]);
  return __mf_10(rs.div, Gt({ tabIndex: -1 }, l, { ref: h, onKeyDown: x }));
}));
function ab(e6) {
  const t = [], r = document.createTreeWalker(e6, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
    const i = n.tagName === "INPUT" && n.type === "hidden";
    return n.disabled || n.hidden || i ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function lb(e6, t) {
  for (const r of e6) if (!a3(r, { upTo: t })) return r;
}
function a3(e6, { upTo: t }) {
  if (getComputedStyle(e6).visibility === "hidden") return true;
  for (; e6; ) {
    if (t !== void 0 && e6 === t) return false;
    if (getComputedStyle(e6).display === "none") return true;
    e6 = e6.parentElement;
  }
  return false;
}
function Zi(e6, { select: t = false } = {}) {
  if (e6 && e6.focus) {
    const r = document.activeElement;
    e6.focus({ preventScroll: true }), e6 !== r && (function(n) {
      return n instanceof HTMLInputElement && "select" in n;
    })(e6) && t && e6.select();
  }
}
const cb = /* @__PURE__ */ (function() {
  let e6 = [];
  return { add(t) {
    const r = e6[0];
    t !== r && (r == null || r.pause()), e6 = ub(e6, t), e6.unshift(t);
  }, remove(t) {
    var r;
    e6 = ub(e6, t), (r = e6[0]) === null || r === void 0 || r.resume();
  } };
})();
function ub(e6, t) {
  const r = [...e6], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function l3(e6) {
  const t = io(e6);
  __mf_20((() => {
    const r = (n) => {
      n.key === "Escape" && t(n);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }), [t]);
}
const c3 = globalThis != null && globalThis.document ? __mf_22 : () => {
};
let db, cc = 0;
function u3({ disabled: e6 }) {
  const t = __mf_25(false);
  c3((() => {
    if (e6) {
      let r = function() {
        cc--, cc === 0 && (document.body.style.pointerEvents = db);
      }, n = function(i) {
        t.current = i.pointerType !== "mouse";
      };
      return cc === 0 && (db = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", cc++, document.addEventListener("pointerup", n), () => {
        t.current ? document.addEventListener("click", r, { once: true }) : r(), document.removeEventListener("pointerup", n);
      };
    }
  }), [e6]);
}
function ro(e6, t, { checkForDefaultPrevented: r = true } = {}) {
  return function(n) {
    if (e6 == null || e6(n), r === false || !n.defaultPrevented) return t == null ? void 0 : t(n);
  };
}
const d3 = /* @__PURE__ */ __mf_9({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), f3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: n, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: l, onDismiss: c, ...u } = e6, d = __mf_18(d3), [g, f] = __mf_26(null), [, h] = __mf_26({}), b = lo(t, ((A) => f(A))), x = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = x.indexOf(v), m = g ? x.indexOf(g) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, S = m >= w, O = (function(A) {
    const $ = io(A), T = __mf_25(false);
    return __mf_20((() => {
      const D = (z) => {
        z.target && !T.current && pb("dismissableLayer.pointerDownOutside", $, { originalEvent: z }), T.current = false;
      }, j = window.setTimeout((() => {
        document.addEventListener("pointerdown", D);
      }), 0);
      return () => {
        window.clearTimeout(j), document.removeEventListener("pointerdown", D);
      };
    }), [$]), { onPointerDownCapture: () => T.current = true };
  })(((A) => {
    const $ = A.target, T = [...d.branches].some(((D) => D.contains($)));
    S && !T && (i == null || i(A), l == null || l(A), A.defaultPrevented || c == null || c());
  })), E = (function(A) {
    const $ = io(A), T = __mf_25(false);
    return __mf_20((() => {
      const D = (j) => {
        j.target && !T.current && pb("dismissableLayer.focusOutside", $, { originalEvent: j });
      };
      return document.addEventListener("focusin", D), () => document.removeEventListener("focusin", D);
    }), [$]), { onFocusCapture: () => T.current = true, onBlurCapture: () => T.current = false };
  })(((A) => {
    const $ = A.target;
    [...d.branches].some(((T) => T.contains($))) || (o == null || o(A), l == null || l(A), A.defaultPrevented || c == null || c());
  }));
  return l3(((A) => {
    m === d.layers.size - 1 && (n == null || n(A), A.defaultPrevented || c == null || c());
  })), u3({ disabled: r }), __mf_20((() => {
    g && (r && d.layersWithOutsidePointerEventsDisabled.add(g), d.layers.add(g), fb());
  }), [g, r, d]), __mf_20((() => () => {
    g && (d.layers.delete(g), d.layersWithOutsidePointerEventsDisabled.delete(g), fb());
  }), [g, d]), __mf_20((() => {
    const A = () => h({});
    return document.addEventListener("dismissableLayer.update", A), () => document.removeEventListener("dismissableLayer.update", A);
  }), []), /* @__PURE__ */ __mf_10(rs.div, Gt({}, u, { ref: b, style: { pointerEvents: y ? S ? "auto" : "none" : void 0, ...e6.style }, onFocusCapture: ro(e6.onFocusCapture, E.onFocusCapture), onBlurCapture: ro(e6.onBlurCapture, E.onBlurCapture), onPointerDownCapture: ro(e6.onPointerDownCapture, O.onPointerDownCapture) }));
}));
function fb() {
  const e6 = new Event("dismissableLayer.update");
  document.dispatchEvent(e6);
}
function pb(e6, t, r) {
  const n = r.originalEvent.target, i = new CustomEvent(e6, { bubbles: false, cancelable: true, detail: r });
  return t && n.addEventListener(e6, t, { once: true }), !n.dispatchEvent(i);
}
function hb(e6) {
  const [t, r] = __mf_26(void 0);
  return __mf_20((() => {
    if (e6) {
      const n = new ResizeObserver(((i) => {
        if (!Array.isArray(i) || !i.length) return;
        const o = i[0];
        let l, c;
        if ("borderBoxSize" in o) {
          const u = o.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else {
          const u = e6.getBoundingClientRect();
          l = u.width, c = u.height;
        }
        r({ width: l, height: c });
      }));
      return n.observe(e6, { box: "border-box" }), () => n.unobserve(e6);
    }
    r(void 0);
  }), [e6]), t;
}
function p3(e6, t) {
  const r = Ki.get(e6);
  return r === void 0 ? (Ki.set(e6, { rect: {}, callbacks: [t] }), Ki.size === 1 && (up = requestAnimationFrame(Wx))) : (r.callbacks.push(t), t(e6.getBoundingClientRect())), () => {
    const n = Ki.get(e6);
    if (n === void 0) return;
    const i = n.callbacks.indexOf(t);
    i > -1 && n.callbacks.splice(i, 1), n.callbacks.length === 0 && (Ki.delete(e6), Ki.size === 0 && cancelAnimationFrame(up));
  };
}
let up;
const Ki = /* @__PURE__ */ new Map();
function Wx() {
  const e6 = [];
  Ki.forEach(((t, r) => {
    const n = r.getBoundingClientRect();
    var i, o;
    i = t.rect, o = n, (i.width !== o.width || i.height !== o.height || i.top !== o.top || i.right !== o.right || i.bottom !== o.bottom || i.left !== o.left) && (t.rect = n, e6.push(t));
  })), e6.forEach(((t) => {
    t.callbacks.forEach(((r) => r(t.rect)));
  })), up = requestAnimationFrame(Wx);
}
function h3(e6) {
  const [t, r] = __mf_26();
  return __mf_20((() => {
    if (e6) {
      const n = p3(e6, r);
      return () => {
        r(void 0), n();
      };
    }
  }), [e6]), t;
}
function Vx(e6, t = []) {
  let r = [];
  const n = () => {
    const i = r.map(((o) => /* @__PURE__ */ __mf_9(o)));
    return function(o) {
      const l = (o == null ? void 0 : o[e6]) || i;
      return __mf_23((() => ({ [`__scope${e6}`]: { ...o, [e6]: l } })), [o, l]);
    };
  };
  return n.scopeName = e6, [function(i, o) {
    const l = /* @__PURE__ */ __mf_9(o), c = r.length;
    function u(d) {
      const { scope: g, children: f, ...h } = d, b = (g == null ? void 0 : g[e6][c]) || l, x = __mf_23((() => h), Object.values(h));
      return __mf_10(b.Provider, { value: x }, f);
    }
    return r = [...r, o], u.displayName = i + "Provider", [u, function(d, g) {
      const f = (g == null ? void 0 : g[e6][c]) || l, h = __mf_18(f);
      if (h) return h;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }];
  }, g3(n, ...t)];
}
function g3(...e6) {
  const t = e6[0];
  if (e6.length === 1) return t;
  const r = () => {
    const n = e6.map(((i) => ({ useScope: i(), scopeName: i.scopeName })));
    return function(i) {
      const o = n.reduce(((l, { useScope: c, scopeName: u }) => ({ ...l, ...c(i)[`__scope${u}`] })), {});
      return __mf_23((() => ({ [`__scope${t.scopeName}`]: o })), [o]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function v3({ anchorRect: e6, popperSize: t, arrowSize: r, arrowOffset: n = 0, side: i, sideOffset: o = 0, align: l, alignOffset: c = 0, shouldAvoidCollisions: u = true, collisionBoundariesRect: d, collisionTolerance: g = 0 }) {
  if (!e6 || !t || !d) return { popperStyles: m3, arrowStyles: kf };
  const f = (function($, T, D = 0, j = 0, z) {
    const M = z ? z.height : 0, W = gb(T, $, "x"), V = gb(T, $, "y"), P = V.before - D - M, K = V.after + D + M, X = W.before - D - M, ne = W.after + D + M;
    return { top: { start: { x: W.start + j, y: P }, center: { x: W.center, y: P }, end: { x: W.end - j, y: P } }, right: { start: { x: ne, y: V.start + j }, center: { x: ne, y: V.center }, end: { x: ne, y: V.end - j } }, bottom: { start: { x: W.start + j, y: K }, center: { x: W.center, y: K }, end: { x: W.end - j, y: K } }, left: { start: { x: X, y: V.start + j }, center: { x: X, y: V.center }, end: { x: X, y: V.end - j } } };
  })(t, e6, o, c, r), h = f[i][l];
  if (u === false) {
    const $ = vb(h);
    let T = kf;
    return r && (T = bb({ popperSize: t, arrowSize: r, arrowOffset: n, side: i, align: l })), { popperStyles: { ...$, "--radix-popper-transform-origin": mb(t, i, l, n, r) }, arrowStyles: T, placedSide: i, placedAlign: l };
  }
  const b = DOMRect.fromRect({ ...t, ...h }), x = (v = d, w = g, DOMRect.fromRect({ width: v.width - 2 * w, height: v.height - 2 * w, x: v.left + w, y: v.top + w }));
  var v, w;
  const m = wb(b, x), y = f[yb(i)][l], S = (function($, T, D) {
    const j = yb($);
    return T[$] && !D[j] ? j : $;
  })(i, m, wb(DOMRect.fromRect({ ...t, ...y }), x)), O = (function($, T, D, j, z) {
    const M = D === "top" || D === "bottom", W = M ? "left" : "top", V = M ? "right" : "bottom", P = M ? "width" : "height", K = T[P] > $[P];
    return (j === "start" || j === "center") && (z[W] && K || z[V] && !K) ? "end" : (j === "end" || j === "center") && (z[V] && K || z[W] && !K) ? "start" : j;
  })(t, e6, i, l, m), E = vb(f[S][O]);
  let A = kf;
  return r && (A = bb({ popperSize: t, arrowSize: r, arrowOffset: n, side: S, align: O })), { popperStyles: { ...E, "--radix-popper-transform-origin": mb(t, S, O, n, r) }, arrowStyles: A, placedSide: S, placedAlign: O };
}
function gb(e6, t, r) {
  const n = e6[r === "x" ? "left" : "top"], i = r === "x" ? "width" : "height", o = e6[i], l = t[i];
  return { before: n - l, start: n, center: n + (o - l) / 2, end: n + o - l, after: n + o };
}
function vb(e6) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e6.x + window.scrollX)}px, ${Math.round(e6.y + window.scrollY)}px, 0)` };
}
function mb(e6, t, r, n, i) {
  const o = t === "top" || t === "bottom", l = i ? i.width : 0, c = i ? i.height : 0, u = l / 2 + n;
  let d = "", g = "";
  return o ? (d = { start: `${u}px`, center: "center", end: e6.width - u + "px" }[r], g = t === "top" ? `${e6.height + c}px` : -c + "px") : (d = t === "left" ? `${e6.width + c}px` : -c + "px", g = { start: `${u}px`, center: "center", end: e6.height - u + "px" }[r]), `${d} ${g}`;
}
const m3 = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, kf = { position: "absolute", opacity: 0 };
function bb({ popperSize: e6, arrowSize: t, arrowOffset: r, side: n, align: i }) {
  const o = (e6.width - t.width) / 2, l = (e6.height - t.width) / 2, c = { top: 0, right: 90, bottom: 180, left: -90 }[n], u = Math.max(t.width, t.height), d = { width: `${u}px`, height: `${u}px`, transform: `rotate(${c}deg)`, willChange: "transform", position: "absolute", [n]: "100%", direction: b3(n, i) };
  return n !== "top" && n !== "bottom" || (i === "start" && (d.left = `${r}px`), i === "center" && (d.left = `${o}px`), i === "end" && (d.right = `${r}px`)), n !== "left" && n !== "right" || (i === "start" && (d.top = `${r}px`), i === "center" && (d.top = `${l}px`), i === "end" && (d.bottom = `${r}px`)), d;
}
function b3(e6, t) {
  return (e6 !== "top" && e6 !== "right" || t !== "end") && (e6 !== "bottom" && e6 !== "left" || t === "end") ? "ltr" : "rtl";
}
function yb(e6) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e6];
}
function wb(e6, t) {
  return { top: e6.top < t.top, right: e6.right > t.right, bottom: e6.bottom > t.bottom, left: e6.left < t.left };
}
const [Ux, qx] = Vx("Popper"), [y3, Gx] = Ux("Popper"), w3 = (e6) => {
  const { __scopePopper: t, children: r } = e6, [n, i] = __mf_26(null);
  return __mf_10(y3, { scope: t, anchor: n, onAnchorChange: i }, r);
}, x3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { __scopePopper: r, virtualRef: n, ...i } = e6, o = Gx("PopperAnchor", r), l = __mf_25(null), c = lo(t, l);
  return __mf_20((() => {
    o.onAnchorChange((n == null ? void 0 : n.current) || l.current);
  })), n ? null : /* @__PURE__ */ __mf_10(rs.div, Gt({}, i, { ref: c }));
})), [S3, KF] = Ux("PopperContent"), _3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { __scopePopper: r, side: n = "bottom", sideOffset: i, align: o = "center", alignOffset: l, collisionTolerance: c, avoidCollisions: u = true, ...d } = e6, g = Gx("PopperContent", r), [f, h] = __mf_26(), b = h3(g.anchor), [x, v] = __mf_26(null), w = hb(x), [m, y] = __mf_26(null), S = hb(m), O = lo(t, ((M) => v(M))), E = (function() {
    const [M, W] = __mf_26(void 0);
    return __mf_20((() => {
      let V;
      function P() {
        W({ width: window.innerWidth, height: window.innerHeight });
      }
      function K() {
        window.clearTimeout(V), V = window.setTimeout(P, 100);
      }
      return P(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
    }), []), M;
  })(), A = E ? DOMRect.fromRect({ ...E, x: 0, y: 0 }) : void 0, { popperStyles: $, arrowStyles: T, placedSide: D, placedAlign: j } = v3({ anchorRect: b, popperSize: w, arrowSize: S, arrowOffset: f, side: n, sideOffset: i, align: o, alignOffset: l, shouldAvoidCollisions: u, collisionBoundariesRect: A, collisionTolerance: c }), z = D !== void 0;
  return __mf_10("div", { style: $, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ __mf_10(S3, { scope: r, arrowStyles: T, onArrowChange: y, onArrowOffsetChange: h }, /* @__PURE__ */ __mf_10(rs.div, Gt({ "data-side": D, "data-align": j }, d, { style: { ...d.style, animation: z ? void 0 : "none" }, ref: O }))));
})), E3 = w3, O3 = x3, k3 = _3;
function A3({ prop: e6, defaultProp: t, onChange: r = (() => {
}) }) {
  const [n, i] = (function({ defaultProp: u, onChange: d }) {
    const g = __mf_26(u), [f] = g, h = __mf_25(f), b = io(d);
    return __mf_20((() => {
      h.current !== f && (b(f), h.current = f);
    }), [f, h, b]), g;
  })({ defaultProp: t, onChange: r }), o = e6 !== void 0, l = o ? e6 : n, c = io(r);
  return [l, __mf_17(((u) => {
    if (o) {
      const d = u, g = typeof u == "function" ? d(e6) : u;
      g !== e6 && c(g);
    } else i(u);
  }), [o, e6, i, c])];
}
const [T3] = Vx("Popover", [qx]), rh = qx(), [R3, Ha] = T3("Popover"), C3 = (e6) => {
  const { __scopePopover: t, children: r, open: n, defaultOpen: i, onOpenChange: o, modal: l = false } = e6, c = rh(t), u = __mf_25(null), [d, g] = __mf_26(false), [f = false, h] = A3({ prop: n, defaultProp: i, onChange: o });
  return __mf_10(E3, c, /* @__PURE__ */ __mf_10(R3, { scope: t, contentId: t3(), triggerRef: u, open: f, onOpenChange: h, onOpenToggle: __mf_17((() => h(((b) => !b))), [h]), hasCustomAnchor: d, onCustomAnchorAdd: __mf_17((() => g(true)), []), onCustomAnchorRemove: __mf_17((() => g(false)), []), modal: l }, r));
}, I3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { __scopePopover: r, ...n } = e6, i = Ha("PopoverTrigger", r), o = rh(r), l = lo(t, i.triggerRef), c = /* @__PURE__ */ __mf_10(rs.button, Gt({ type: "button", "aria-haspopup": "dialog", "aria-expanded": i.open, "aria-controls": i.contentId, "data-state": Kx(i.open) }, n, { ref: l, onClick: ro(e6.onClick, i.onOpenToggle) }));
  return i.hasCustomAnchor ? c : /* @__PURE__ */ __mf_10(O3, Gt({ asChild: true }, o), c);
})), P3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { forceMount: r, ...n } = e6, i = Ha("PopoverContent", e6.__scopePopover);
  return __mf_10(jx, { present: r || i.open }, i.modal ? /* @__PURE__ */ __mf_10(N3, Gt({}, n, { ref: t })) : /* @__PURE__ */ __mf_10(M3, Gt({}, n, { ref: t })));
})), N3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { allowPinchZoom: r, portalled: n = true, ...i } = e6, o = Ha("PopoverContent", e6.__scopePopover), l = __mf_25(null), c = lo(t, l), u = __mf_25(false);
  __mf_20((() => {
    const g = l.current;
    if (g) return vD(g);
  }), []);
  const d = n ? Bx : __mf_0$1;
  return __mf_10(d, null, /* @__PURE__ */ __mf_10($x, { allowPinchZoom: r }, /* @__PURE__ */ __mf_10(Zx, Gt({}, i, { ref: c, trapFocus: o.open, disableOutsidePointerEvents: true, onCloseAutoFocus: ro(e6.onCloseAutoFocus, ((g) => {
    var f;
    g.preventDefault(), u.current || (f = o.triggerRef.current) === null || f === void 0 || f.focus();
  })), onPointerDownOutside: ro(e6.onPointerDownOutside, ((g) => {
    const f = g.detail.originalEvent, h = f.button === 0 && f.ctrlKey === true, b = f.button === 2 || h;
    u.current = b;
  }), { checkForDefaultPrevented: false }), onFocusOutside: ro(e6.onFocusOutside, ((g) => g.preventDefault()), { checkForDefaultPrevented: false }) }))));
})), M3 = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { portalled: r = true, ...n } = e6, i = Ha("PopoverContent", e6.__scopePopover), o = __mf_25(false), l = r ? Bx : __mf_0$1;
  return __mf_10(l, null, /* @__PURE__ */ __mf_10(Zx, Gt({}, n, { ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (c) => {
    var u, d;
    (u = e6.onCloseAutoFocus) === null || u === void 0 || u.call(e6, c), c.defaultPrevented || (o.current || (d = i.triggerRef.current) === null || d === void 0 || d.focus(), c.preventDefault()), o.current = false;
  }, onInteractOutside: (c) => {
    var u, d;
    (u = e6.onInteractOutside) === null || u === void 0 || u.call(e6, c), c.defaultPrevented || (o.current = true);
    const g = c.target;
    !((d = i.triggerRef.current) === null || d === void 0) && d.contains(g) && c.preventDefault();
  } })));
})), Zx = /* @__PURE__ */ __mf_13(((e6, t) => {
  const { __scopePopover: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: o, disableOutsidePointerEvents: l, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: g, ...f } = e6, h = Ha("PopoverContent", r), b = rh(r);
  return i3(), /* @__PURE__ */ __mf_10(s3, { asChild: true, loop: true, trapped: n, onMountAutoFocus: i, onUnmountAutoFocus: o }, /* @__PURE__ */ __mf_10(f3, { asChild: true, disableOutsidePointerEvents: l, onInteractOutside: g, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onDismiss: () => h.onOpenChange(false) }, /* @__PURE__ */ __mf_10(k3, Gt({ "data-state": Kx(h.open), role: "dialog", id: h.contentId }, b, f, { ref: t, style: { ...f.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
}));
function Kx(e6) {
  return e6 ? "open" : "closed";
}
const D3 = C3, z3 = I3, L3 = P3;
var Mc = /* @__PURE__ */ ((e6) => (e6.VIDEO = "video", e6.CAROUSEL = "carousel", e6.TEXT = "text", e6))(Mc || {}), Af = {}, Ks = {}, uc = {}, dc = {}, fc = { exports: {} };
var Rf, Ob;
function nh() {
  if (Ob) return Rf;
  Ob = 1;
  var e6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rf = e6, Rf;
}
var Nf, Rb;
function W3() {
  if (Rb) return Nf;
  Rb = 1;
  var e6 = /* @__PURE__ */ nh();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nf = function() {
    function n(l, c, u, d, g, f) {
      if (f !== e6) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Nf;
}
var Cb;
function V3() {
  if (Cb) return fc.exports;
  if (Cb = 1, false) ; else
    fc.exports = /* @__PURE__ */ W3()();
  return fc.exports;
}
var Ib;
function U3() {
  return Ib || (Ib = 1, (function(e6) {
    (function(t, r) {
      r(e6, R, /* @__PURE__ */ V3());
    })(dc, function(t, r, n) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.setHasSupportToCaptureOption = x;
      var i = l(r), o = l(n);
      function l(y) {
        return y && y.__esModule ? y : {
          default: y
        };
      }
      var c = Object.assign || function(y) {
        for (var S = 1; S < arguments.length; S++) {
          var O = arguments[S];
          for (var E in O)
            Object.prototype.hasOwnProperty.call(O, E) && (y[E] = O[E]);
        }
        return y;
      };
      function u(y, S) {
        var O = {};
        for (var E in y)
          S.indexOf(E) >= 0 || Object.prototype.hasOwnProperty.call(y, E) && (O[E] = y[E]);
        return O;
      }
      function d(y, S) {
        if (!(y instanceof S))
          throw new TypeError("Cannot call a class as a function");
      }
      var g = /* @__PURE__ */ (function() {
        function y(S, O) {
          for (var E = 0; E < O.length; E++) {
            var A = O[E];
            A.enumerable = A.enumerable || false, A.configurable = true, "value" in A && (A.writable = true), Object.defineProperty(S, A.key, A);
          }
        }
        return function(S, O, E) {
          return O && y(S.prototype, O), E && y(S, E), S;
        };
      })();
      function f(y, S) {
        if (!y)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return S && (typeof S == "object" || typeof S == "function") ? S : y;
      }
      function h(y, S) {
        if (typeof S != "function" && S !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof S);
        y.prototype = Object.create(S && S.prototype, {
          constructor: {
            value: y,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(y, S) : y.__proto__ = S);
      }
      var b = false;
      function x(y) {
        b = y;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          x(true);
        } }));
      } catch {
      }
      function v() {
        var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return b ? y : y.capture;
      }
      function w(y) {
        if ("touches" in y) {
          var S = y.touches[0], O = S.pageX, E = S.pageY;
          return { x: O, y: E };
        }
        var A = y.screenX, $ = y.screenY;
        return { x: A, y: $ };
      }
      var m = (function(y) {
        h(S, y);
        function S() {
          var O;
          d(this, S);
          for (var E = arguments.length, A = Array(E), $ = 0; $ < E; $++)
            A[$] = arguments[$];
          var T = f(this, (O = S.__proto__ || Object.getPrototypeOf(S)).call.apply(O, [this].concat(A)));
          return T._handleSwipeStart = T._handleSwipeStart.bind(T), T._handleSwipeMove = T._handleSwipeMove.bind(T), T._handleSwipeEnd = T._handleSwipeEnd.bind(T), T._onMouseDown = T._onMouseDown.bind(T), T._onMouseMove = T._onMouseMove.bind(T), T._onMouseUp = T._onMouseUp.bind(T), T._setSwiperRef = T._setSwiperRef.bind(T), T;
        }
        return g(S, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, v({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, v({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(E) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(E));
          }
        }, {
          key: "_onMouseMove",
          value: function(E) {
            this.mouseDown && this._handleSwipeMove(E);
          }
        }, {
          key: "_onMouseUp",
          value: function(E) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(E);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(E) {
            var A = w(E), $ = A.x, T = A.y;
            this.moveStart = { x: $, y: T }, this.props.onSwipeStart(E);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(E) {
            if (this.moveStart) {
              var A = w(E), $ = A.x, T = A.y, D = $ - this.moveStart.x, j = T - this.moveStart.y;
              this.moving = true;
              var z = this.props.onSwipeMove({
                x: D,
                y: j
              }, E);
              z && E.cancelable && E.preventDefault(), this.movePosition = { deltaX: D, deltaY: j };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(E) {
            this.props.onSwipeEnd(E);
            var A = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -A ? this.props.onSwipeLeft(1, E) : this.movePosition.deltaX > A && this.props.onSwipeRight(1, E), this.movePosition.deltaY < -A ? this.props.onSwipeUp(1, E) : this.movePosition.deltaY > A && this.props.onSwipeDown(1, E)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(E) {
            this.swiper = E, this.props.innerRef(E);
          }
        }, {
          key: "render",
          value: function() {
            var E = this.props;
            E.tagName;
            var A = E.className, $ = E.style, T = E.children;
            E.allowMouseEvents, E.onSwipeUp, E.onSwipeDown, E.onSwipeLeft, E.onSwipeRight, E.onSwipeStart, E.onSwipeMove, E.onSwipeEnd, E.innerRef, E.tolerance;
            var D = u(E, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return i.default.createElement(
              this.props.tagName,
              c({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: A,
                style: $
              }, D),
              T
            );
          }
        }]), S;
      })(r.Component);
      m.displayName = "ReactSwipe", m.propTypes = {
        tagName: o.default.string,
        className: o.default.string,
        style: o.default.object,
        children: o.default.node,
        allowMouseEvents: o.default.bool,
        onSwipeUp: o.default.func,
        onSwipeDown: o.default.func,
        onSwipeLeft: o.default.func,
        onSwipeRight: o.default.func,
        onSwipeStart: o.default.func,
        onSwipeMove: o.default.func,
        onSwipeEnd: o.default.func,
        innerRef: o.default.func,
        tolerance: o.default.number.isRequired
      }, m.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, t.default = m;
    });
  })(dc)), dc;
}
var Pb;
function Jx() {
  return Pb || (Pb = 1, (function(e6) {
    (function(t, r) {
      r(e6, U3());
    })(uc, function(t, r) {
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = i(r);
      function i(o) {
        return o && o.__esModule ? o : {
          default: o
        };
      }
      t.default = n.default;
    });
  })(uc)), uc;
}
var Ys = {}, Nb;
function Qx() {
  if (Nb) return Ys;
  Nb = 1, Object.defineProperty(Ys, "__esModule", {
    value: true
  }), Ys.default = void 0;
  var e6 = t(hx());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function r(i, o, l) {
    return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
  }
  var n = {
    ROOT: function(o) {
      return (0, e6.default)(r({
        "carousel-root": true
      }, o || "", !!o));
    },
    CAROUSEL: function(o) {
      return (0, e6.default)({
        carousel: true,
        "carousel-slider": o
      });
    },
    WRAPPER: function(o, l) {
      return (0, e6.default)({
        "thumbs-wrapper": !o,
        "slider-wrapper": o,
        "axis-horizontal": l === "horizontal",
        "axis-vertical": l !== "horizontal"
      });
    },
    SLIDER: function(o, l) {
      return (0, e6.default)({
        thumbs: !o,
        slider: o,
        animated: !l
      });
    },
    ITEM: function(o, l, c) {
      return (0, e6.default)({
        thumb: !o,
        slide: o,
        selected: l,
        previous: c
      });
    },
    ARROW_PREV: function(o) {
      return (0, e6.default)({
        "control-arrow control-prev": true,
        "control-disabled": o
      });
    },
    ARROW_NEXT: function(o) {
      return (0, e6.default)({
        "control-arrow control-next": true,
        "control-disabled": o
      });
    },
    DOT: function(o) {
      return (0, e6.default)({
        dot: true,
        selected: o
      });
    }
  };
  return Ys.default = n, Ys;
}
var Xs = {}, Js = {}, Mb;
function q3() {
  if (Mb) return Js;
  Mb = 1, Object.defineProperty(Js, "__esModule", {
    value: true
  }), Js.outerWidth = void 0;
  var e6 = function(r) {
    var n = r.offsetWidth, i = getComputedStyle(r);
    return n += parseInt(i.marginLeft) + parseInt(i.marginRight), n;
  };
  return Js.outerWidth = e6, Js;
}
var Qs = {}, Db;
function ih() {
  if (Db) return Qs;
  Db = 1, Object.defineProperty(Qs, "__esModule", {
    value: true
  }), Qs.default = void 0;
  var e6 = function(r, n, i) {
    var o = r === 0 ? r : r + n, l = i === "horizontal" ? [o, 0, 0] : [0, o, 0], c = "translate3d", u = "(" + l.join(",") + ")";
    return c + u;
  };
  return Qs.default = e6, Qs;
}
var ea = {}, zb;
function e1() {
  if (zb) return ea;
  zb = 1, Object.defineProperty(ea, "__esModule", {
    value: true
  }), ea.default = void 0;
  var e6 = function() {
    return window;
  };
  return ea.default = e6, ea;
}
var Lb;
function t1() {
  if (Lb) return Xs;
  Lb = 1, Object.defineProperty(Xs, "__esModule", {
    value: true
  }), Xs.default = void 0;
  var e6 = u(R), t = l(Qx()), r = q3(), n = l(ih()), i = l(Jx()), o = l(e1());
  function l(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var T = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return T;
    }, T;
  }
  function u(T) {
    if (T && T.__esModule)
      return T;
    if (T === null || d(T) !== "object" && typeof T != "function")
      return { default: T };
    var D = c();
    if (D && D.has(T))
      return D.get(T);
    var j = {}, z = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in T)
      if (Object.prototype.hasOwnProperty.call(T, M)) {
        var W = z ? Object.getOwnPropertyDescriptor(T, M) : null;
        W && (W.get || W.set) ? Object.defineProperty(j, M, W) : j[M] = T[M];
      }
    return j.default = T, D && D.set(T, j), j;
  }
  function d(T) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? d = function(j) {
      return typeof j;
    } : d = function(j) {
      return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
    }, d(T);
  }
  function g() {
    return g = Object.assign || function(T) {
      for (var D = 1; D < arguments.length; D++) {
        var j = arguments[D];
        for (var z in j)
          Object.prototype.hasOwnProperty.call(j, z) && (T[z] = j[z]);
      }
      return T;
    }, g.apply(this, arguments);
  }
  function f(T, D) {
    if (!(T instanceof D))
      throw new TypeError("Cannot call a class as a function");
  }
  function h(T, D) {
    for (var j = 0; j < D.length; j++) {
      var z = D[j];
      z.enumerable = z.enumerable || false, z.configurable = true, "value" in z && (z.writable = true), Object.defineProperty(T, z.key, z);
    }
  }
  function b(T, D, j) {
    return D && h(T.prototype, D), T;
  }
  function x(T, D) {
    if (typeof D != "function" && D !== null)
      throw new TypeError("Super expression must either be null or a function");
    T.prototype = Object.create(D && D.prototype, { constructor: { value: T, writable: true, configurable: true } }), D && v(T, D);
  }
  function v(T, D) {
    return v = Object.setPrototypeOf || function(z, M) {
      return z.__proto__ = M, z;
    }, v(T, D);
  }
  function w(T) {
    var D = S();
    return function() {
      var z = O(T), M;
      if (D) {
        var W = O(this).constructor;
        M = Reflect.construct(z, arguments, W);
      } else
        M = z.apply(this, arguments);
      return m(this, M);
    };
  }
  function m(T, D) {
    return D && (d(D) === "object" || typeof D == "function") ? D : y(T);
  }
  function y(T) {
    if (T === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return T;
  }
  function S() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function O(T) {
    return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(j) {
      return j.__proto__ || Object.getPrototypeOf(j);
    }, O(T);
  }
  function E(T, D, j) {
    return D in T ? Object.defineProperty(T, D, { value: j, enumerable: true, configurable: true, writable: true }) : T[D] = j, T;
  }
  var A = function(D) {
    return D.hasOwnProperty("key");
  }, $ = /* @__PURE__ */ (function(T) {
    x(j, T);
    var D = w(j);
    function j(z) {
      var M;
      return f(this, j), M = D.call(this, z), E(y(M), "itemsWrapperRef", void 0), E(y(M), "itemsListRef", void 0), E(y(M), "thumbsRef", void 0), E(y(M), "setItemsWrapperRef", function(W) {
        M.itemsWrapperRef = W;
      }), E(y(M), "setItemsListRef", function(W) {
        M.itemsListRef = W;
      }), E(y(M), "setThumbsRef", function(W, V) {
        M.thumbsRef || (M.thumbsRef = []), M.thumbsRef[V] = W;
      }), E(y(M), "updateSizes", function() {
        if (!(!M.props.children || !M.itemsWrapperRef || !M.thumbsRef)) {
          var W = e6.Children.count(M.props.children), V = M.itemsWrapperRef.clientWidth, P = M.props.thumbWidth ? M.props.thumbWidth : (0, r.outerWidth)(M.thumbsRef[0]), K = Math.floor(V / P), X = K < W, ne = X ? W - K : 0;
          M.setState(function(he, N) {
            return {
              itemSize: P,
              visibleItems: K,
              firstItem: X ? M.getFirstItem(N.selectedItem) : 0,
              lastPosition: ne,
              showArrows: X
            };
          });
        }
      }), E(y(M), "handleClickItem", function(W, V, P) {
        if (!A(P) || P.key === "Enter") {
          var K = M.props.onSelectItem;
          typeof K == "function" && K(W, V);
        }
      }), E(y(M), "onSwipeStart", function() {
        M.setState({
          swiping: true
        });
      }), E(y(M), "onSwipeEnd", function() {
        M.setState({
          swiping: false
        });
      }), E(y(M), "onSwipeMove", function(W) {
        var V = W.x;
        if (!M.state.itemSize || !M.itemsWrapperRef || !M.state.visibleItems)
          return false;
        var P = 0, K = e6.Children.count(M.props.children), X = -(M.state.firstItem * 100) / M.state.visibleItems, ne = Math.max(K - M.state.visibleItems, 0), he = -ne * 100 / M.state.visibleItems;
        X === P && V > 0 && (V = 0), X === he && V < 0 && (V = 0);
        var N = M.itemsWrapperRef.clientWidth, F = X + 100 / (N / V);
        return M.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(G) {
          M.itemsListRef.style[G] = (0, n.default)(F, "%", M.props.axis);
        }), true;
      }), E(y(M), "slideRight", function(W) {
        M.moveTo(M.state.firstItem - (typeof W == "number" ? W : 1));
      }), E(y(M), "slideLeft", function(W) {
        M.moveTo(M.state.firstItem + (typeof W == "number" ? W : 1));
      }), E(y(M), "moveTo", function(W) {
        W = W < 0 ? 0 : W, W = W >= M.state.lastPosition ? M.state.lastPosition : W, M.setState({
          firstItem: W
        });
      }), M.state = {
        selectedItem: z.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, M;
    }
    return b(j, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(M) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== M.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, o.default)().addEventListener("resize", this.updateSizes), (0, o.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, o.default)().removeEventListener("resize", this.updateSizes), (0, o.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(M) {
        var W = M;
        return M >= this.state.lastPosition && (W = this.state.lastPosition), M < this.state.firstItem + this.state.visibleItems && (W = this.state.firstItem), M < this.state.firstItem && (W = M), W;
      }
    }, {
      key: "renderItems",
      value: function() {
        var M = this;
        return this.props.children.map(function(W, V) {
          var P = t.default.ITEM(false, V === M.state.selectedItem), K = {
            key: V,
            ref: function(ne) {
              return M.setThumbsRef(ne, V);
            },
            className: P,
            onClick: M.handleClickItem.bind(M, V, M.props.children[V]),
            onKeyDown: M.handleClickItem.bind(M, V, M.props.children[V]),
            "aria-label": "".concat(M.props.labels.item, " ").concat(V + 1),
            style: {
              width: M.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e6.default.createElement("li", g({}, K, {
            role: "button",
            tabIndex: 0
          }), W);
        });
      }
    }, {
      key: "render",
      value: function() {
        var M = this;
        if (!this.props.children)
          return null;
        var W = e6.Children.count(this.props.children) > 1, V = this.state.showArrows && this.state.firstItem > 0, P = this.state.showArrows && this.state.firstItem < this.state.lastPosition, K = {}, X = -this.state.firstItem * (this.state.itemSize || 0), ne = (0, n.default)(X, "px", this.props.axis), he = this.props.transitionTime + "ms";
        return K = {
          WebkitTransform: ne,
          MozTransform: ne,
          MsTransform: ne,
          OTransform: ne,
          transform: ne,
          msTransform: ne,
          WebkitTransitionDuration: he,
          MozTransitionDuration: he,
          MsTransitionDuration: he,
          OTransitionDuration: he,
          transitionDuration: he,
          msTransitionDuration: he
        }, /* @__PURE__ */ e6.default.createElement("div", {
          className: t.default.CAROUSEL(false)
        }, /* @__PURE__ */ e6.default.createElement("div", {
          className: t.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e6.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!V),
          onClick: function() {
            return M.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), W ? /* @__PURE__ */ e6.default.createElement(i.default, {
          tagName: "ul",
          className: t.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: K,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e6.default.createElement("ul", {
          className: t.default.SLIDER(false, this.state.swiping),
          ref: function(F) {
            return M.setItemsListRef(F);
          },
          style: K
        }, this.renderItems()), /* @__PURE__ */ e6.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!P),
          onClick: function() {
            return M.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), j;
  })(e6.Component);
  return Xs.default = $, E($, "displayName", "Thumbs"), E($, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), Xs;
}
var ta = {}, $b;
function G3() {
  if ($b) return ta;
  $b = 1, Object.defineProperty(ta, "__esModule", {
    value: true
  }), ta.default = void 0;
  var e6 = function() {
    return document;
  };
  return ta.default = e6, ta;
}
var Ir = {}, Fb;
function r1() {
  if (Fb) return Ir;
  Fb = 1, Object.defineProperty(Ir, "__esModule", {
    value: true
  }), Ir.setPosition = Ir.getPosition = Ir.isKeyboardEvent = Ir.defaultStatusFormatter = Ir.noop = void 0;
  var e6 = R, t = r(ih());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var n = function() {
  };
  Ir.noop = n;
  var i = function(d, g) {
    return "".concat(d, " of ").concat(g);
  };
  Ir.defaultStatusFormatter = i;
  var o = function(d) {
    return d ? d.hasOwnProperty("key") : false;
  };
  Ir.isKeyboardEvent = o;
  var l = function(d, g) {
    if (g.infiniteLoop && ++d, d === 0)
      return 0;
    var f = e6.Children.count(g.children);
    if (g.centerMode && g.axis === "horizontal") {
      var h = -d * g.centerSlidePercentage, b = f - 1;
      return d && (d !== b || g.infiniteLoop) ? h += (100 - g.centerSlidePercentage) / 2 : d === b && (h += 100 - g.centerSlidePercentage), h;
    }
    return -d * 100;
  };
  Ir.getPosition = l;
  var c = function(d, g) {
    var f = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(h) {
      f[h] = (0, t.default)(d, "%", g);
    }), f;
  };
  return Ir.setPosition = c, Ir;
}
var un = {}, Hb;
function Z3() {
  if (Hb) return un;
  Hb = 1, Object.defineProperty(un, "__esModule", {
    value: true
  }), un.fadeAnimationHandler = un.slideStopSwipingHandler = un.slideSwipeAnimationHandler = un.slideAnimationHandler = void 0;
  var e6 = R, t = n(ih()), r = r1();
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function i(f, h) {
    var b = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(f);
      h && (x = x.filter(function(v) {
        return Object.getOwnPropertyDescriptor(f, v).enumerable;
      })), b.push.apply(b, x);
    }
    return b;
  }
  function o(f) {
    for (var h = 1; h < arguments.length; h++) {
      var b = arguments[h] != null ? arguments[h] : {};
      h % 2 ? i(Object(b), true).forEach(function(x) {
        l(f, x, b[x]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(b)) : i(Object(b)).forEach(function(x) {
        Object.defineProperty(f, x, Object.getOwnPropertyDescriptor(b, x));
      });
    }
    return f;
  }
  function l(f, h, b) {
    return h in f ? Object.defineProperty(f, h, { value: b, enumerable: true, configurable: true, writable: true }) : f[h] = b, f;
  }
  var c = function(h, b) {
    var x = {}, v = b.selectedItem, w = v, m = e6.Children.count(h.children) - 1, y = h.infiniteLoop && (v < 0 || v > m);
    if (y)
      return w < 0 ? h.centerMode && h.centerSlidePercentage && h.axis === "horizontal" ? x.itemListStyle = (0, r.setPosition)(-(m + 2) * h.centerSlidePercentage - (100 - h.centerSlidePercentage) / 2, h.axis) : x.itemListStyle = (0, r.setPosition)(-(m + 2) * 100, h.axis) : w > m && (x.itemListStyle = (0, r.setPosition)(0, h.axis)), x;
    var S = (0, r.getPosition)(v, h), O = (0, t.default)(S, "%", h.axis), E = h.transitionTime + "ms";
    return x.itemListStyle = {
      WebkitTransform: O,
      msTransform: O,
      OTransform: O,
      transform: O
    }, b.swiping || (x.itemListStyle = o(o({}, x.itemListStyle), {}, {
      WebkitTransitionDuration: E,
      MozTransitionDuration: E,
      OTransitionDuration: E,
      transitionDuration: E,
      msTransitionDuration: E
    })), x;
  };
  un.slideAnimationHandler = c;
  var u = function(h, b, x, v) {
    var w = {}, m = b.axis === "horizontal", y = e6.Children.count(b.children), S = 0, O = (0, r.getPosition)(x.selectedItem, b), E = b.infiniteLoop ? (0, r.getPosition)(y - 1, b) - 100 : (0, r.getPosition)(y - 1, b), A = m ? h.x : h.y, $ = A;
    O === S && A > 0 && ($ = 0), O === E && A < 0 && ($ = 0);
    var T = O + 100 / (x.itemSize / $), D = Math.abs(A) > b.swipeScrollTolerance;
    return b.infiniteLoop && D && (x.selectedItem === 0 && T > -100 ? T -= y * 100 : x.selectedItem === y - 1 && T < -y * 100 && (T += y * 100)), (!b.preventMovementUntilSwipeScrollTolerance || D || x.swipeMovementStarted) && (x.swipeMovementStarted || v({
      swipeMovementStarted: true
    }), w.itemListStyle = (0, r.setPosition)(T, b.axis)), D && !x.cancelClick && v({
      cancelClick: true
    }), w;
  };
  un.slideSwipeAnimationHandler = u;
  var d = function(h, b) {
    var x = (0, r.getPosition)(b.selectedItem, h), v = (0, r.setPosition)(x, h.axis);
    return {
      itemListStyle: v
    };
  };
  un.slideStopSwipingHandler = d;
  var g = function(h, b) {
    var x = h.transitionTime + "ms", v = "ease-in-out", w = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: v,
      msTransitionTimingFunction: v,
      MozTransitionTimingFunction: v,
      WebkitTransitionTimingFunction: v,
      OTransitionTimingFunction: v
    };
    return b.swiping || (w = o(o({}, w), {}, {
      WebkitTransitionDuration: x,
      MozTransitionDuration: x,
      OTransitionDuration: x,
      transitionDuration: x,
      msTransitionDuration: x
    })), {
      slideStyle: w,
      selectedStyle: o(o({}, w), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: o({}, w)
    };
  };
  return un.fadeAnimationHandler = g, un;
}
var jb;
function K3() {
  if (jb) return Ks;
  jb = 1, Object.defineProperty(Ks, "__esModule", {
    value: true
  }), Ks.default = void 0;
  var e6 = g(R), t = u(Jx()), r = u(Qx()), n = u(t1()), i = u(G3()), o = u(e1()), l = r1(), c = Z3();
  function u(z) {
    return z && z.__esModule ? z : { default: z };
  }
  function d() {
    if (typeof WeakMap != "function") return null;
    var z = /* @__PURE__ */ new WeakMap();
    return d = function() {
      return z;
    }, z;
  }
  function g(z) {
    if (z && z.__esModule)
      return z;
    if (z === null || f(z) !== "object" && typeof z != "function")
      return { default: z };
    var M = d();
    if (M && M.has(z))
      return M.get(z);
    var W = {}, V = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in z)
      if (Object.prototype.hasOwnProperty.call(z, P)) {
        var K = V ? Object.getOwnPropertyDescriptor(z, P) : null;
        K && (K.get || K.set) ? Object.defineProperty(W, P, K) : W[P] = z[P];
      }
    return W.default = z, M && M.set(z, W), W;
  }
  function f(z) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? f = function(W) {
      return typeof W;
    } : f = function(W) {
      return W && typeof Symbol == "function" && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W;
    }, f(z);
  }
  function h() {
    return h = Object.assign || function(z) {
      for (var M = 1; M < arguments.length; M++) {
        var W = arguments[M];
        for (var V in W)
          Object.prototype.hasOwnProperty.call(W, V) && (z[V] = W[V]);
      }
      return z;
    }, h.apply(this, arguments);
  }
  function b(z, M) {
    var W = Object.keys(z);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(z);
      M && (V = V.filter(function(P) {
        return Object.getOwnPropertyDescriptor(z, P).enumerable;
      })), W.push.apply(W, V);
    }
    return W;
  }
  function x(z) {
    for (var M = 1; M < arguments.length; M++) {
      var W = arguments[M] != null ? arguments[M] : {};
      M % 2 ? b(Object(W), true).forEach(function(V) {
        D(z, V, W[V]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(W)) : b(Object(W)).forEach(function(V) {
        Object.defineProperty(z, V, Object.getOwnPropertyDescriptor(W, V));
      });
    }
    return z;
  }
  function v(z, M) {
    if (!(z instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function w(z, M) {
    for (var W = 0; W < M.length; W++) {
      var V = M[W];
      V.enumerable = V.enumerable || false, V.configurable = true, "value" in V && (V.writable = true), Object.defineProperty(z, V.key, V);
    }
  }
  function m(z, M, W) {
    return M && w(z.prototype, M), z;
  }
  function y(z, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError("Super expression must either be null or a function");
    z.prototype = Object.create(M && M.prototype, { constructor: { value: z, writable: true, configurable: true } }), M && S(z, M);
  }
  function S(z, M) {
    return S = Object.setPrototypeOf || function(V, P) {
      return V.__proto__ = P, V;
    }, S(z, M);
  }
  function O(z) {
    var M = $();
    return function() {
      var V = T(z), P;
      if (M) {
        var K = T(this).constructor;
        P = Reflect.construct(V, arguments, K);
      } else
        P = V.apply(this, arguments);
      return E(this, P);
    };
  }
  function E(z, M) {
    return M && (f(M) === "object" || typeof M == "function") ? M : A(z);
  }
  function A(z) {
    if (z === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return z;
  }
  function $() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function T(z) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf : function(W) {
      return W.__proto__ || Object.getPrototypeOf(W);
    }, T(z);
  }
  function D(z, M, W) {
    return M in z ? Object.defineProperty(z, M, { value: W, enumerable: true, configurable: true, writable: true }) : z[M] = W, z;
  }
  var j = /* @__PURE__ */ (function(z) {
    y(W, z);
    var M = O(W);
    function W(V) {
      var P;
      v(this, W), P = M.call(this, V), D(A(P), "thumbsRef", void 0), D(A(P), "carouselWrapperRef", void 0), D(A(P), "listRef", void 0), D(A(P), "itemsRef", void 0), D(A(P), "timer", void 0), D(A(P), "animationHandler", void 0), D(A(P), "setThumbsRef", function(X) {
        P.thumbsRef = X;
      }), D(A(P), "setCarouselWrapperRef", function(X) {
        P.carouselWrapperRef = X;
      }), D(A(P), "setListRef", function(X) {
        P.listRef = X;
      }), D(A(P), "setItemsRef", function(X, ne) {
        P.itemsRef || (P.itemsRef = []), P.itemsRef[ne] = X;
      }), D(A(P), "autoPlay", function() {
        e6.Children.count(P.props.children) <= 1 || (P.clearAutoPlay(), P.props.autoPlay && (P.timer = setTimeout(function() {
          P.increment();
        }, P.props.interval)));
      }), D(A(P), "clearAutoPlay", function() {
        P.timer && clearTimeout(P.timer);
      }), D(A(P), "resetAutoPlay", function() {
        P.clearAutoPlay(), P.autoPlay();
      }), D(A(P), "stopOnHover", function() {
        P.setState({
          isMouseEntered: true
        }, P.clearAutoPlay);
      }), D(A(P), "startOnLeave", function() {
        P.setState({
          isMouseEntered: false
        }, P.autoPlay);
      }), D(A(P), "isFocusWithinTheCarousel", function() {
        return P.carouselWrapperRef ? !!((0, i.default)().activeElement === P.carouselWrapperRef || P.carouselWrapperRef.contains((0, i.default)().activeElement)) : false;
      }), D(A(P), "navigateWithKeyboard", function(X) {
        if (P.isFocusWithinTheCarousel()) {
          var ne = P.props.axis, he = ne === "horizontal", N = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, F = he ? N.ArrowRight : N.ArrowDown, G = he ? N.ArrowLeft : N.ArrowUp;
          F === X.keyCode ? P.increment() : G === X.keyCode && P.decrement();
        }
      }), D(A(P), "updateSizes", function() {
        if (!(!P.state.initialized || !P.itemsRef || P.itemsRef.length === 0)) {
          var X = P.props.axis === "horizontal", ne = P.itemsRef[0];
          if (ne) {
            var he = X ? ne.clientWidth : ne.clientHeight;
            P.setState({
              itemSize: he
            }), P.thumbsRef && P.thumbsRef.updateSizes();
          }
        }
      }), D(A(P), "setMountState", function() {
        P.setState({
          hasMount: true
        }), P.updateSizes();
      }), D(A(P), "handleClickItem", function(X, ne) {
        if (e6.Children.count(P.props.children) !== 0) {
          if (P.state.cancelClick) {
            P.setState({
              cancelClick: false
            });
            return;
          }
          P.props.onClickItem(X, ne), X !== P.state.selectedItem && P.setState({
            selectedItem: X
          });
        }
      }), D(A(P), "handleOnChange", function(X, ne) {
        e6.Children.count(P.props.children) <= 1 || P.props.onChange(X, ne);
      }), D(A(P), "handleClickThumb", function(X, ne) {
        P.props.onClickThumb(X, ne), P.moveTo(X);
      }), D(A(P), "onSwipeStart", function(X) {
        P.setState({
          swiping: true
        }), P.props.onSwipeStart(X);
      }), D(A(P), "onSwipeEnd", function(X) {
        P.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), P.props.onSwipeEnd(X), P.clearAutoPlay(), P.state.autoPlay && P.autoPlay();
      }), D(A(P), "onSwipeMove", function(X, ne) {
        P.props.onSwipeMove(ne);
        var he = P.props.swipeAnimationHandler(X, P.props, P.state, P.setState.bind(A(P)));
        return P.setState(x({}, he)), !!Object.keys(he).length;
      }), D(A(P), "decrement", function() {
        var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        P.moveTo(P.state.selectedItem - (typeof X == "number" ? X : 1));
      }), D(A(P), "increment", function() {
        var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        P.moveTo(P.state.selectedItem + (typeof X == "number" ? X : 1));
      }), D(A(P), "moveTo", function(X) {
        if (typeof X == "number") {
          var ne = e6.Children.count(P.props.children) - 1;
          X < 0 && (X = P.props.infiniteLoop ? ne : 0), X > ne && (X = P.props.infiniteLoop ? 0 : ne), P.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: X
          }), P.state.autoPlay && P.state.isMouseEntered === false && P.resetAutoPlay();
        }
      }), D(A(P), "onClickNext", function() {
        P.increment(1);
      }), D(A(P), "onClickPrev", function() {
        P.decrement(1);
      }), D(A(P), "onSwipeForward", function() {
        P.increment(1), P.props.emulateTouch && P.setState({
          cancelClick: true
        });
      }), D(A(P), "onSwipeBackwards", function() {
        P.decrement(1), P.props.emulateTouch && P.setState({
          cancelClick: true
        });
      }), D(A(P), "changeItem", function(X) {
        return function(ne) {
          (!(0, l.isKeyboardEvent)(ne) || ne.key === "Enter") && P.moveTo(X);
        };
      }), D(A(P), "selectItem", function(X) {
        P.setState(x({
          previousItem: P.state.selectedItem
        }, X), function() {
          P.setState(P.animationHandler(P.props, P.state));
        }), P.handleOnChange(X.selectedItem, e6.Children.toArray(P.props.children)[X.selectedItem]);
      }), D(A(P), "getInitialImage", function() {
        var X = P.props.selectedItem, ne = P.itemsRef && P.itemsRef[X], he = ne && ne.getElementsByTagName("img") || [];
        return he[0];
      }), D(A(P), "getVariableItemHeight", function(X) {
        var ne = P.itemsRef && P.itemsRef[X];
        if (P.state.hasMount && ne && ne.children.length) {
          var he = ne.children[0].getElementsByTagName("img") || [];
          if (he.length > 0) {
            var N = he[0];
            if (!N.complete) {
              var F = function Y() {
                P.forceUpdate(), N.removeEventListener("load", Y);
              };
              N.addEventListener("load", F);
            }
          }
          var G = he[0] || ne.children[0], te = G.clientHeight;
          return te > 0 ? te : null;
        }
        return null;
      });
      var K = {
        initialized: false,
        previousItem: V.selectedItem,
        selectedItem: V.selectedItem,
        hasMount: false,
        isMouseEntered: false,
        autoPlay: V.autoPlay,
        swiping: false,
        swipeMovementStarted: false,
        cancelClick: false,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return P.animationHandler = typeof V.animationHandler == "function" && V.animationHandler || V.animationHandler === "fade" && c.fadeAnimationHandler || c.slideAnimationHandler, P.state = x(x({}, K), P.animationHandler(V, K)), P;
    }
    return m(W, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(P, K) {
        !P.children && this.props.children && !this.state.initialized && this.setupCarousel(), !P.autoFocus && this.props.autoFocus && this.forceFocus(), K.swiping && !this.state.swiping && this.setState(x({}, this.props.stopSwipingHandler(this.props, this.state))), (P.selectedItem !== this.props.selectedItem || P.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), P.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
          autoPlay: this.props.autoPlay
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyCarousel();
      }
    }, {
      key: "setupCarousel",
      value: function() {
        var P = this;
        this.bindEvents(), this.state.autoPlay && e6.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var K = P.getInitialImage();
          K && !K.complete ? K.addEventListener("load", P.setMountState) : P.setMountState();
        });
      }
    }, {
      key: "destroyCarousel",
      value: function() {
        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
      }
    }, {
      key: "setupAutoPlay",
      value: function() {
        this.autoPlay();
        var P = this.carouselWrapperRef;
        this.props.stopOnHover && P && (P.addEventListener("mouseenter", this.stopOnHover), P.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var P = this.carouselWrapperRef;
        this.props.stopOnHover && P && (P.removeEventListener("mouseenter", this.stopOnHover), P.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, o.default)().addEventListener("resize", this.updateSizes), (0, o.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, i.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, o.default)().removeEventListener("resize", this.updateSizes), (0, o.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var P = this.getInitialImage();
        P && P.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, i.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var P;
        (P = this.carouselWrapperRef) === null || P === void 0 || P.focus();
      }
    }, {
      key: "renderItems",
      value: function(P) {
        var K = this;
        return this.props.children ? e6.Children.map(this.props.children, function(X, ne) {
          var he = ne === K.state.selectedItem, N = ne === K.state.previousItem, F = he && K.state.selectedStyle || N && K.state.prevStyle || K.state.slideStyle || {};
          K.props.centerMode && K.props.axis === "horizontal" && (F = x(x({}, F), {}, {
            minWidth: K.props.centerSlidePercentage + "%"
          })), K.state.swiping && K.state.swipeMovementStarted && (F = x(x({}, F), {}, {
            pointerEvents: "none"
          }));
          var G = {
            ref: function(Y) {
              return K.setItemsRef(Y, ne);
            },
            key: "itemKey" + ne + (P ? "clone" : ""),
            className: r.default.ITEM(true, ne === K.state.selectedItem, ne === K.state.previousItem),
            onClick: K.handleClickItem.bind(K, ne, X),
            style: F
          };
          return /* @__PURE__ */ e6.default.createElement("li", G, K.props.renderItem(X, {
            isSelected: ne === K.state.selectedItem,
            isPrevious: ne === K.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var P = this, K = this.props, X = K.showIndicators, ne = K.labels, he = K.renderIndicator, N = K.children;
        return X ? /* @__PURE__ */ e6.default.createElement("ul", {
          className: "control-dots"
        }, e6.Children.map(N, function(F, G) {
          return he && he(P.changeItem(G), G === P.state.selectedItem, G, ne.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e6.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e6.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e6.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e6.default.createElement(n.default, {
          ref: this.setThumbsRef,
          onSelectItem: this.handleClickThumb,
          selectedItem: this.state.selectedItem,
          transitionTime: this.props.transitionTime,
          thumbWidth: this.props.thumbWidth,
          labels: this.props.labels,
          emulateTouch: this.props.emulateTouch
        }, this.props.renderThumbs(this.props.children));
      }
    }, {
      key: "render",
      value: function() {
        var P = this;
        if (!this.props.children || e6.Children.count(this.props.children) === 0)
          return null;
        var K = this.props.swipeable && e6.Children.count(this.props.children) > 1, X = this.props.axis === "horizontal", ne = this.props.showArrows && e6.Children.count(this.props.children) > 1, he = ne && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, N = ne && (this.state.selectedItem < e6.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, F = this.renderItems(true), G = F.shift(), te = F.pop(), Y = {
          className: r.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, ie = {};
        if (X) {
          if (Y.onSwipeLeft = this.onSwipeForward, Y.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var Q = this.getVariableItemHeight(this.state.selectedItem);
            ie.height = Q || "auto";
          }
        } else
          Y.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, Y.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, Y.style = x(x({}, Y.style), {}, {
            height: this.state.itemSize
          }), ie.height = this.state.itemSize;
        return /* @__PURE__ */ e6.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: r.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e6.default.createElement("div", {
          className: r.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, he, this.props.labels.leftArrow), /* @__PURE__ */ e6.default.createElement("div", {
          className: r.default.WRAPPER(true, this.props.axis),
          style: ie
        }, K ? /* @__PURE__ */ e6.default.createElement(t.default, h({
          tagName: "ul",
          innerRef: this.setListRef
        }, Y, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && te, this.renderItems(), this.props.infiniteLoop && G) : /* @__PURE__ */ e6.default.createElement("ul", {
          className: r.default.SLIDER(true, this.state.swiping),
          ref: function(de) {
            return P.setListRef(de);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && te, this.renderItems(), this.props.infiniteLoop && G)), this.props.renderArrowNext(this.onClickNext, N, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), W;
  })(e6.default.Component);
  return Ks.default = j, D(j, "displayName", "Carousel"), D(j, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: l.noop,
    onClickThumb: l.noop,
    onChange: l.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return false;
    },
    preventMovementUntilSwipeScrollTolerance: false,
    renderArrowPrev: function(M, W, V) {
      return /* @__PURE__ */ e6.default.createElement("button", {
        type: "button",
        "aria-label": V,
        className: r.default.ARROW_PREV(!W),
        onClick: M
      });
    },
    renderArrowNext: function(M, W, V) {
      return /* @__PURE__ */ e6.default.createElement("button", {
        type: "button",
        "aria-label": V,
        className: r.default.ARROW_NEXT(!W),
        onClick: M
      });
    },
    renderIndicator: function(M, W, V, P) {
      return /* @__PURE__ */ e6.default.createElement("li", {
        className: r.default.DOT(W),
        onClick: M,
        onKeyDown: M,
        value: V,
        key: V,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(P, " ").concat(V + 1)
      });
    },
    renderItem: function(M) {
      return M;
    },
    renderThumbs: function(M) {
      var W = e6.Children.map(M, function(V) {
        var P = V;
        if (V.type !== "img" && (P = e6.Children.toArray(V.props.children).find(function(K) {
          return K.type === "img";
        })), !!P)
          return P;
      });
      return W.filter(function(V) {
        return V;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : W;
    },
    statusFormatter: l.defaultStatusFormatter,
    selectedItem: 0,
    showArrows: true,
    showIndicators: true,
    showStatus: true,
    showThumbs: true,
    stopOnHover: true,
    swipeScrollTolerance: 5,
    swipeable: true,
    transitionTime: 350,
    verticalSwipe: "standard",
    width: "100%",
    animationHandler: "slide",
    swipeAnimationHandler: c.slideSwipeAnimationHandler,
    stopSwipingHandler: c.slideStopSwipingHandler
  }), Ks;
}
var Bb = {};
function Y3() {
  return Bb;
}
var Vb;
function X3() {
  return Vb || (Vb = 1, (function(e6) {
    Object.defineProperty(e6, "__esModule", {
      value: true
    }), Object.defineProperty(e6, "Carousel", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e6, "CarouselProps", {
      enumerable: true,
      get: function() {
        return r.CarouselProps;
      }
    }), Object.defineProperty(e6, "Thumbs", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    });
    var t = i(K3()), r = Y3(), n = i(t1());
    function i(o) {
      return o && o.__esModule ? o : { default: o };
    }
  })(Af)), Af;
}
var J3 = X3();
const Q3 = ({ tip: e6 }) => /* @__PURE__ */ __mf_1("div", { className: "h-full grid pb-8 px-8 place-content-center", children: n1(e6, true) }), ez = ({ pages: e6 }) => /* @__PURE__ */ __mf_1("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ __mf_1(
  J3.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e6 && e6.map((t) => /* @__PURE__ */ __mf_1(Q3, { tip: t }, t.key))
  }
) }), tz = ({ body: e6, isInsideCarousel: t }) => /* @__PURE__ */ __mf_1(
  "article",
  {
    className: gt([
      "prose prose-sm max-h-[10rem] overflow-auto p-1 px-2 text-left text-[12px] text-muted",
      {
        "w-60": !t
      }
    ]),
    children: /* @__PURE__ */ __mf_1(
      qc,
      {
        children: e6,
        options: {
          overrides: {
            a: {
              component: ({ children: r, ...n }) => /* @__PURE__ */ __mf_2(
                "a",
                {
                  ...n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary",
                  children: [
                    r,
                    /* @__PURE__ */ __mf_1(ew, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            },
            strong: {
              component: ({ children: r, ...n }) => /* @__PURE__ */ __mf_1("span", { ...n, className: "font-semibold text-body", children: r })
            }
          }
        }
      }
    )
  }
), rz = ({
  video: e6,
  body: t,
  title: r,
  isInsideCarousel: n
}) => /* @__PURE__ */ __mf_2(
  "div",
  {
    className: gt([
      {
        "flex flex-row": !n,
        "flex max-h-[10rem] flex-col overflow-y-auto": n
      }
    ]),
    children: [
      /* @__PURE__ */ __mf_1(
        "div",
        {
          className: gt([
            {
              "mr-1": !n,
              "mb-1": n
            }
          ]),
          children: /* @__PURE__ */ __mf_1(
            "iframe",
            {
              height: n ? "auto" : 90,
              width: n ? "100%" : 160,
              src: e6 == null ? void 0 : e6.link,
              title: r,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ __mf_1(
        "article",
        {
          className: gt([
            "prose prose-sm p-1 text-left text-xs text-muted",
            {
              "w-60 overflow-auto": !n,
              "-mt-6": n
            }
          ]),
          children: /* @__PURE__ */ __mf_1(
            qc,
            {
              children: t || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: i, ...o }) => /* @__PURE__ */ __mf_2(
                      "a",
                      {
                        ...o,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          i,
                          /* @__PURE__ */ __mf_1(ew, { className: "ml-1 mt-px h-4 w-4" })
                        ]
                      }
                    )
                  }
                }
              }
            }
          )
        }
      )
    ]
  }
), n1 = (e6, t) => {
  switch (e6.type) {
    case Mc.TEXT:
      return /* @__PURE__ */ __mf_1(tz, { body: e6.body, isInsideCarousel: t });
    case Mc.VIDEO:
      return /* @__PURE__ */ __mf_1(
        rz,
        {
          video: e6.video,
          body: e6.body,
          title: e6.title,
          isInsideCarousel: t
        }
      );
    case Mc.CAROUSEL:
      return /* @__PURE__ */ __mf_1(ez, { pages: e6.pages });
  }
}, i1 = __mf_9(void 0);
function Ub(e6, t) {
  const r = [];
  return e6.forEach((n) => {
    n.key === t && r.push(n);
  }), r;
}
const YF = ({
  children: e6,
  enabled: t,
  baseUrl: r = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: n, show: i }, o] = __mf_26({
    tips: {},
    show: true
  });
  __mf_20(() => {
    const c = new AbortController();
    try {
      fetch(
        `${r}/tips.json`,
        // 'tips.json',
        { signal: c.signal }
      ).then((u) => u.json()).then((u) => {
        const d = u.reduce((g, f) => Ub(u, f.key).length > 1 ? {
          ...g,
          [f.key]: {
            type: "carousel",
            pages: Ub(u, f.key)
          }
        } : {
          ...g,
          [f.key]: f
        }, {});
        o((g) => ({ ...g, tips: d }));
      });
    } catch {
    }
    return () => {
      c.abort();
    };
  }, []);
  const l = () => {
    o((c) => ({ ...c, show: !i }));
  };
  return /* @__PURE__ */ __mf_1(i1.Provider, { value: { tips: n, toggleTips: l, show: i, enabled: t }, children: e6 });
}, nz = (e6) => {
  const t = __mf_18(i1);
  if (t === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e6 ? t.tips[e6] : null,
    toggleTips: t.toggleTips,
    show: t.show,
    enabled: t.enabled
  };
}, iz = Gc(z3)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, oz = ({ tipKey: e6, side: t = "right", alwaysOn: r, asButton: n = false }) => {
  const { tip: i, enabled: o } = nz(e6), [l, c] = __mf_26(false), u = __mf_25(null);
  return __mf_20(() => {
    if (u.current) {
      const d = new IntersectionObserver((g) => {
        g[0].isIntersecting || c(false);
      });
      return d.observe(u.current), () => {
        u.current && d.unobserve(u.current);
      };
    }
  }, []), i && o ? /* @__PURE__ */ __mf_2(D3, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ __mf_1(
      iz,
      {
        ref: u,
        className: gt("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": n
        }),
        onClick: (d) => d.stopPropagation(),
        children: /* @__PURE__ */ __mf_1("span", { className: gt("group-hover:flex", { hidden: !r }), children: /* @__PURE__ */ __mf_1(e2, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ __mf_1(
      L3,
      {
        side: t,
        sideOffset: 5,
        onClick: (d) => d.stopPropagation(),
        children: /* @__PURE__ */ __mf_1(
          oi,
          {
            depth: 3,
            borderType: "light",
            className: "relative rounded border p-2 text-xs shadow-2xl",
            children: n1(i)
          }
        )
      }
    )
  ] }) : null;
};
function oh() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var co = oh();
function o1(e6) {
  co = e6;
}
var ya = { exec: () => null };
function Ke(e6, t = "") {
  let r = typeof e6 == "string" ? e6 : e6.source, n = { replace: (i, o) => {
    let l = typeof o == "string" ? o : o.source;
    return l = l.replace(cr.caret, "$1"), r = r.replace(i, l), n;
  }, getRegex: () => new RegExp(r, t) };
  return n;
}
var cr = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e6) => new RegExp(`^( {0,3}${e6})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e6) => new RegExp(`^ {0,${Math.min(3, e6 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e6) => new RegExp(`^ {0,${Math.min(3, e6 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e6) => new RegExp(`^ {0,${Math.min(3, e6 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e6) => new RegExp(`^ {0,${Math.min(3, e6 - 1)}}#`), htmlBeginRegex: (e6) => new RegExp(`^ {0,${Math.min(3, e6 - 1)}}<(?:[a-z].*>|!--)`, "i") }, sz = /^(?:[ \t]*(?:\n|$))+/, az = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, lz = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ja = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, cz = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, sh = /(?:[*+-]|\d{1,9}[.)])/, s1 = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, a1 = Ke(s1).replace(/bull/g, sh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), uz = Ke(s1).replace(/bull/g, sh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ah = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, dz = /^[^\n]+/, lh = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, fz = Ke(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", lh).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pz = Ke(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, sh).getRegex(), vu = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ch = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, hz = Ke("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ch).replace("tag", vu).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), l1 = Ke(ah).replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vu).getRegex(), gz = Ke(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", l1).getRegex(), uh = { blockquote: gz, code: az, def: fz, fences: lz, heading: cz, hr: ja, html: hz, lheading: a1, list: pz, newline: sz, paragraph: l1, table: ya, text: dz }, qb = Ke("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vu).getRegex(), vz = { ...uh, lheading: uz, table: qb, paragraph: Ke(ah).replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", qb).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", vu).getRegex() }, mz = { ...uh, html: Ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ch).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ya, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ke(ah).replace("hr", ja).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", a1).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, bz = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, yz = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, c1 = /^( {2,}|\\)\n(?!\s*$)/, wz = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, mu = /[\p{P}\p{S}]/u, dh = /[\s\p{P}\p{S}]/u, u1 = /[^\s\p{P}\p{S}]/u, xz = Ke(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, dh).getRegex(), d1 = /(?!~)[\p{P}\p{S}]/u, Sz = /(?!~)[\s\p{P}\p{S}]/u, _z = /(?:[^\s\p{P}\p{S}]|~)/u, Ez = /\[(?:[^\[\]`]|`[^`]*?`)*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, f1 = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Oz = Ke(f1, "u").replace(/punct/g, mu).getRegex(), kz = Ke(f1, "u").replace(/punct/g, d1).getRegex(), p1 = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Az = Ke(p1, "gu").replace(/notPunctSpace/g, u1).replace(/punctSpace/g, dh).replace(/punct/g, mu).getRegex(), Tz = Ke(p1, "gu").replace(/notPunctSpace/g, _z).replace(/punctSpace/g, Sz).replace(/punct/g, d1).getRegex(), Rz = Ke("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, u1).replace(/punctSpace/g, dh).replace(/punct/g, mu).getRegex(), Cz = Ke(/\\(punct)/, "gu").replace(/punct/g, mu).getRegex(), Iz = Ke(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Pz = Ke(ch).replace("(?:-->|$)", "-->").getRegex(), Nz = Ke("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Pz).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Kc = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Mz = Ke(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Kc).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), h1 = Ke(/^!?\[(label)\]\[(ref)\]/).replace("label", Kc).replace("ref", lh).getRegex(), g1 = Ke(/^!?\[(ref)\](?:\[\])?/).replace("ref", lh).getRegex(), Dz = Ke("reflink|nolink(?!\\()", "g").replace("reflink", h1).replace("nolink", g1).getRegex(), Gb = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, fh = { _backpedal: ya, anyPunctuation: Cz, autolink: Iz, blockSkip: Ez, br: c1, code: yz, del: ya, emStrongLDelim: Oz, emStrongRDelimAst: Az, emStrongRDelimUnd: Rz, escape: bz, link: Mz, nolink: g1, punctuation: xz, reflink: h1, reflinkSearch: Dz, tag: Nz, text: wz, url: ya }, zz = { ...fh, link: Ke(/^!?\[(label)\]\((.*?)\)/).replace("label", Kc).getRegex(), reflink: Ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Kc).getRegex() }, dp = { ...fh, emStrongRDelimAst: Tz, emStrongLDelim: kz, url: Ke(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Gb).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ke(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Gb).getRegex() }, Lz = { ...dp, br: Ke(c1).replace("{2,}", "*").getRegex(), text: Ke(dp.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, hc = { normal: uh, gfm: vz, pedantic: mz }, ra = { normal: fh, gfm: dp, breaks: Lz, pedantic: zz }, $z = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Zb = (e6) => $z[e6];
function En(e6, t) {
  if (t) {
    if (cr.escapeTest.test(e6)) return e6.replace(cr.escapeReplace, Zb);
  } else if (cr.escapeTestNoEncode.test(e6)) return e6.replace(cr.escapeReplaceNoEncode, Zb);
  return e6;
}
function Kb(e6) {
  try {
    e6 = encodeURI(e6).replace(cr.percentDecode, "%");
  } catch {
    return null;
  }
  return e6;
}
function Yb(e6, t) {
  var o;
  let r = e6.replace(cr.findPipe, (l, c, u) => {
    let d = false, g = c;
    for (; --g >= 0 && u[g] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = r.split(cr.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((o = n.at(-1)) != null && o.trim()) && n.pop(), t) if (n.length > t) n.splice(t);
  else for (; n.length < t; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(cr.slashPipe, "|");
  return n;
}
function na(e6, t, r) {
  let n = e6.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && e6.charAt(n - i - 1) === t; )
    i++;
  return e6.slice(0, n - i);
}
function Fz(e6, t) {
  if (e6.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < e6.length; n++) if (e6[n] === "\\") n++;
  else if (e6[n] === t[0]) r++;
  else if (e6[n] === t[1] && (r--, r < 0)) return n;
  return r > 0 ? -2 : -1;
}
function Xb(e6, t, r, n, i) {
  let o = t.href, l = t.title || null, c = e6[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let u = { type: e6[0].charAt(0) === "!" ? "image" : "link", raw: r, href: o, title: l, text: c, tokens: n.inlineTokens(c) };
  return n.state.inLink = false, u;
}
function Hz(e6, t, r) {
  let n = e6.match(r.other.indentCodeCompensation);
  if (n === null) return t;
  let i = n[1];
  return t.split(`
`).map((o) => {
    let l = o.match(r.other.beginningSpace);
    if (l === null) return o;
    let [c] = l;
    return c.length >= i.length ? o.slice(i.length) : o;
  }).join(`
`);
}
var Yc = class {
  constructor(t) {
    Te(this, "options");
    Te(this, "rules");
    Te(this, "lexer");
    this.options = t || co;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let n = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : na(n, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let n = r[0], i = Hz(n, r[3] || "", this.rules);
      return { type: "code", raw: n, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: i };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let n = r[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let i = na(n, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (n = i.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: na(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let n = na(r[0], `
`).split(`
`), i = "", o = "", l = [];
      for (; n.length > 0; ) {
        let c = false, u = [], d;
        for (d = 0; d < n.length; d++) if (this.rules.other.blockquoteStart.test(n[d])) u.push(n[d]), c = true;
        else if (!c) u.push(n[d]);
        else break;
        n = n.slice(d);
        let g = u.join(`
`), f = g.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${g}` : g, o = o ? `${o}
${f}` : f;
        let h = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(f, l, true), this.lexer.state.top = h, n.length === 0) break;
        let b = l.at(-1);
        if ((b == null ? void 0 : b.type) === "code") break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          let x = b, v = x.raw + `
` + n.join(`
`), w = this.blockquote(v);
          l[l.length - 1] = w, i = i.substring(0, i.length - x.raw.length) + w.raw, o = o.substring(0, o.length - x.text.length) + w.text;
          break;
        } else if ((b == null ? void 0 : b.type) === "list") {
          let x = b, v = x.raw + `
` + n.join(`
`), w = this.list(v);
          l[l.length - 1] = w, i = i.substring(0, i.length - b.raw.length) + w.raw, o = o.substring(0, o.length - x.raw.length) + w.raw, n = v.substring(l.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: i, tokens: l, text: o };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let n = r[1].trim(), i = n.length > 1, o = { type: "list", raw: "", ordered: i, start: i ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
      let l = this.rules.other.listItemRegex(n), c = false;
      for (; t; ) {
        let d = false, g = "", f = "";
        if (!(r = l.exec(t)) || this.rules.block.hr.test(t)) break;
        g = r[0], t = t.substring(g.length);
        let h = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (y) => " ".repeat(3 * y.length)), b = t.split(`
`, 1)[0], x = !h.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, f = h.trimStart()) : x ? v = r[1].length + 1 : (v = r[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, f = h.slice(v), v += r[1].length), x && this.rules.other.blankLine.test(b) && (g += b + `
`, t = t.substring(b.length + 1), d = true), !d) {
          let y = this.rules.other.nextBulletRegex(v), S = this.rules.other.hrRegex(v), O = this.rules.other.fencesBeginRegex(v), E = this.rules.other.headingBeginRegex(v), A = this.rules.other.htmlBeginRegex(v);
          for (; t; ) {
            let $ = t.split(`
`, 1)[0], T;
            if (b = $, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), T = b) : T = b.replace(this.rules.other.tabCharGlobal, "    "), O.test(b) || E.test(b) || A.test(b) || y.test(b) || S.test(b)) break;
            if (T.search(this.rules.other.nonSpaceChar) >= v || !b.trim()) f += `
` + T.slice(v);
            else {
              if (x || h.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || O.test(h) || E.test(h) || S.test(h)) break;
              f += `
` + b;
            }
            !x && !b.trim() && (x = true), g += $ + `
`, t = t.substring($.length + 1), h = T.slice(v);
          }
        }
        o.loose || (c ? o.loose = true : this.rules.other.doubleBlankLine.test(g) && (c = true));
        let w = null, m;
        this.options.gfm && (w = this.rules.other.listIsTask.exec(f), w && (m = w[0] !== "[ ] ", f = f.replace(this.rules.other.listReplaceTask, ""))), o.items.push({ type: "list_item", raw: g, task: !!w, checked: m, loose: false, text: f, tokens: [] }), o.raw += g;
      }
      let u = o.items.at(-1);
      if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let d = 0; d < o.items.length; d++) if (this.lexer.state.top = false, o.items[d].tokens = this.lexer.blockTokens(o.items[d].text, []), !o.loose) {
        let g = o.items[d].tokens.filter((h) => h.type === "space"), f = g.length > 0 && g.some((h) => this.rules.other.anyLine.test(h.raw));
        o.loose = f;
      }
      if (o.loose) for (let d = 0; d < o.items.length; d++) o.items[d].loose = true;
      return o;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: true, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let n = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: n, raw: r[0], href: i, title: o };
    }
  }
  table(t) {
    var c;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let n = Yb(r[1]), i = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = (c = r[3]) != null && c.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (n.length === i.length) {
      for (let u of i) this.rules.other.tableAlignRight.test(u) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(u) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(u) ? l.align.push("left") : l.align.push(null);
      for (let u = 0; u < n.length; u++) l.header.push({ text: n[u], tokens: this.lexer.inline(n[u]), header: true, align: l.align[u] });
      for (let u of o) l.rows.push(Yb(u, l.header.length).map((d, g) => ({ text: d, tokens: this.lexer.inline(d), header: false, align: l.align[g] })));
      return l;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let n = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let n = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let l = na(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        let l = Fz(r[2], "()");
        if (l === -2) return;
        if (l > -1) {
          let c = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + l;
          r[2] = r[2].substring(0, l), r[0] = r[0].substring(0, c).trim(), r[3] = "";
        }
      }
      let i = r[2], o = "";
      if (this.options.pedantic) {
        let l = this.rules.other.pedanticHrefTitle.exec(i);
        l && (i = l[1], o = l[3]);
      } else o = r[3] ? r[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? i = i.slice(1) : i = i.slice(1, -1)), Xb(r, { href: i && i.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      let i = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = r[i.toLowerCase()];
      if (!o) {
        let l = n[0].charAt(0);
        return { type: "text", raw: l, text: l };
      }
      return Xb(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, n = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(i[1] || i[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let o = [...i[0]].length - 1, l, c, u = o, d = 0, g = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (g.lastIndex = 0, r = r.slice(-1 * t.length + o); (i = g.exec(r)) != null; ) {
        if (l = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !l) continue;
        if (c = [...l].length, i[3] || i[4]) {
          u += c;
          continue;
        } else if ((i[5] || i[6]) && o % 3 && !((o + c) % 3)) {
          d += c;
          continue;
        }
        if (u -= c, u > 0) continue;
        c = Math.min(c, c + u + d);
        let f = [...i[0]][0].length, h = t.slice(0, o + i.index + f + c);
        if (Math.min(o, c) % 2) {
          let x = h.slice(1, -1);
          return { type: "em", raw: h, text: x, tokens: this.lexer.inlineTokens(x) };
        }
        let b = h.slice(2, -2);
        return { type: "strong", raw: h, text: b, tokens: this.lexer.inlineTokens(b) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let n = r[2].replace(this.rules.other.newLineCharGlobal, " "), i = this.rules.other.nonSpaceChar.test(n), o = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return i && o && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: r[0], text: n };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let n, i;
      return r[2] === "@" ? (n = r[1], i = "mailto:" + n) : (n = r[1], i = n), { type: "link", raw: r[0], text: n, href: i, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(t) {
    var n;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, o;
      if (r[2] === "@") i = r[0], o = "mailto:" + i;
      else {
        let l;
        do
          l = r[0], r[0] = ((n = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : n[0]) ?? "";
        while (l !== r[0]);
        i = r[0], r[1] === "www." ? o = "http://" + r[0] : o = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: o, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: n };
    }
  }
}, dn = class fp {
  constructor(t) {
    Te(this, "tokens");
    Te(this, "options");
    Te(this, "state");
    Te(this, "tokenizer");
    Te(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || co, this.options.tokenizer = this.options.tokenizer || new Yc(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { other: cr, block: hc.normal, inline: ra.normal };
    this.options.pedantic ? (r.block = hc.pedantic, r.inline = ra.pedantic) : this.options.gfm && (r.block = hc.gfm, this.options.breaks ? r.inline = ra.breaks : r.inline = ra.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: hc, inline: ra };
  }
  static lex(t, r) {
    return new fp(r).lex(t);
  }
  static lexInline(t, r) {
    return new fp(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(cr.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let n = this.inlineQueue[r];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], n = false) {
    var i, o, l;
    for (this.options.pedantic && (t = t.replace(cr.tabCharGlobal, "    ").replace(cr.spaceLine, "")); t; ) {
      let c;
      if ((o = (i = this.options.extensions) == null ? void 0 : i.block) != null && o.some((d) => (c = d.call({ lexer: this }, t, r)) ? (t = t.substring(c.raw.length), r.push(c), true) : false)) continue;
      if (c = this.tokenizer.space(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        c.raw.length === 1 && d !== void 0 ? d.raw += `
` : r.push(c);
        continue;
      }
      if (c = this.tokenizer.code(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.at(-1).src = d.text) : r.push(c);
        continue;
      }
      if (c = this.tokenizer.fences(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.heading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.hr(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.blockquote(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.list(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.html(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.def(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.raw, this.inlineQueue.at(-1).src = d.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = { href: c.href, title: c.title }, r.push(c));
        continue;
      }
      if (c = this.tokenizer.table(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.lheading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      let u = t;
      if ((l = this.options.extensions) != null && l.startBlock) {
        let d = 1 / 0, g = t.slice(1), f;
        this.options.extensions.startBlock.forEach((h) => {
          f = h.call({ lexer: this }, g), typeof f == "number" && f >= 0 && (d = Math.min(d, f));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (this.state.top && (c = this.tokenizer.paragraph(u))) {
        let d = r.at(-1);
        n && (d == null ? void 0 : d.type) === "paragraph" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : r.push(c), n = u.length !== t.length, t = t.substring(c.raw.length);
        continue;
      }
      if (c = this.tokenizer.text(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : r.push(c);
        continue;
      }
      if (t) {
        let d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var c, u, d, g, f;
    let n = t, i = null;
    if (this.tokens.links) {
      let h = Object.keys(this.tokens.links);
      if (h.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) h.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = ((u = (c = this.options.hooks) == null ? void 0 : c.emStrongMask) == null ? void 0 : u.call({ lexer: this }, n)) ?? n;
    let o = false, l = "";
    for (; t; ) {
      o || (l = ""), o = false;
      let h;
      if ((g = (d = this.options.extensions) == null ? void 0 : d.inline) != null && g.some((x) => (h = x.call({ lexer: this }, t, r)) ? (t = t.substring(h.raw.length), r.push(h), true) : false)) continue;
      if (h = this.tokenizer.escape(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.tag(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.link(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(h.raw.length);
        let x = r.at(-1);
        h.type === "text" && (x == null ? void 0 : x.type) === "text" ? (x.raw += h.raw, x.text += h.text) : r.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(t, n, l)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.codespan(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.br(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.del(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (h = this.tokenizer.autolink(t)) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      if (!this.state.inLink && (h = this.tokenizer.url(t))) {
        t = t.substring(h.raw.length), r.push(h);
        continue;
      }
      let b = t;
      if ((f = this.options.extensions) != null && f.startInline) {
        let x = 1 / 0, v = t.slice(1), w;
        this.options.extensions.startInline.forEach((m) => {
          w = m.call({ lexer: this }, v), typeof w == "number" && w >= 0 && (x = Math.min(x, w));
        }), x < 1 / 0 && x >= 0 && (b = t.substring(0, x + 1));
      }
      if (h = this.tokenizer.inlineText(b)) {
        t = t.substring(h.raw.length), h.raw.slice(-1) !== "_" && (l = h.raw.slice(-1)), o = true;
        let x = r.at(-1);
        (x == null ? void 0 : x.type) === "text" ? (x.raw += h.raw, x.text += h.text) : r.push(h);
        continue;
      }
      if (t) {
        let x = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(x);
          break;
        } else throw new Error(x);
      }
    }
    return r;
  }
}, Xc = class {
  constructor(t) {
    Te(this, "options");
    Te(this, "parser");
    this.options = t || co;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: n }) {
    var l;
    let i = (l = (r || "").match(cr.notSpaceStart)) == null ? void 0 : l[0], o = t.replace(cr.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + En(i) + '">' + (n ? o : En(o, true)) + `</code></pre>
` : "<pre><code>" + (n ? o : En(o, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, n = t.start, i = "";
    for (let c = 0; c < t.items.length; c++) {
      let u = t.items[c];
      i += this.listitem(u);
    }
    let o = r ? "ol" : "ul", l = r && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + o + l + `>
` + i + "</" + o + `>
`;
  }
  listitem(t) {
    var n;
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? ((n = t.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + En(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: true }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", n = "";
    for (let o = 0; o < t.header.length; o++) n += this.tablecell(t.header[o]);
    r += this.tablerow({ text: n });
    let i = "";
    for (let o = 0; o < t.rows.length; o++) {
      let l = t.rows[o];
      n = "";
      for (let c = 0; c < l.length; c++) n += this.tablecell(l[c]);
      i += this.tablerow({ text: n });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + r + `</${n}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${En(t, true)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: n }) {
    let i = this.parser.parseInline(n), o = Kb(t);
    if (o === null) return i;
    t = o;
    let l = '<a href="' + t + '"';
    return r && (l += ' title="' + En(r) + '"'), l += ">" + i + "</a>", l;
  }
  image({ href: t, title: r, text: n, tokens: i }) {
    i && (n = this.parser.parseInline(i, this.parser.textRenderer));
    let o = Kb(t);
    if (o === null) return En(n);
    t = o;
    let l = `<img src="${t}" alt="${n}"`;
    return r && (l += ` title="${En(r)}"`), l += ">", l;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : En(t.text);
  }
}, ph = class {
  strong({ text: e6 }) {
    return e6;
  }
  em({ text: e6 }) {
    return e6;
  }
  codespan({ text: e6 }) {
    return e6;
  }
  del({ text: e6 }) {
    return e6;
  }
  html({ text: e6 }) {
    return e6;
  }
  text({ text: e6 }) {
    return e6;
  }
  link({ text: e6 }) {
    return "" + e6;
  }
  image({ text: e6 }) {
    return "" + e6;
  }
  br() {
    return "";
  }
}, fn = class pp {
  constructor(t) {
    Te(this, "options");
    Te(this, "renderer");
    Te(this, "textRenderer");
    this.options = t || co, this.options.renderer = this.options.renderer || new Xc(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ph();
  }
  static parse(t, r) {
    return new pp(r).parse(t);
  }
  static parseInline(t, r) {
    return new pp(r).parseInline(t);
  }
  parse(t, r = true) {
    var i, o;
    let n = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[c.type]) {
        let d = c, g = this.options.extensions.renderers[d.type].call({ parser: this }, d);
        if (g !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(d.type)) {
          n += g || "";
          continue;
        }
      }
      let u = c;
      switch (u.type) {
        case "space": {
          n += this.renderer.space(u);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(u);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(u);
          continue;
        }
        case "code": {
          n += this.renderer.code(u);
          continue;
        }
        case "table": {
          n += this.renderer.table(u);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(u);
          continue;
        }
        case "list": {
          n += this.renderer.list(u);
          continue;
        }
        case "html": {
          n += this.renderer.html(u);
          continue;
        }
        case "def": {
          n += this.renderer.def(u);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(u);
          continue;
        }
        case "text": {
          let d = u, g = this.renderer.text(d);
          for (; l + 1 < t.length && t[l + 1].type === "text"; ) d = t[++l], g += `
` + this.renderer.text(d);
          r ? n += this.renderer.paragraph({ type: "paragraph", raw: g, text: g, tokens: [{ type: "text", raw: g, text: g, escaped: true }] }) : n += g;
          continue;
        }
        default: {
          let d = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
  parseInline(t, r = this.renderer) {
    var i, o;
    let n = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((o = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && o[c.type]) {
        let d = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (d !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(c.type)) {
          n += d || "";
          continue;
        }
      }
      let u = c;
      switch (u.type) {
        case "escape": {
          n += r.text(u);
          break;
        }
        case "html": {
          n += r.html(u);
          break;
        }
        case "link": {
          n += r.link(u);
          break;
        }
        case "image": {
          n += r.image(u);
          break;
        }
        case "strong": {
          n += r.strong(u);
          break;
        }
        case "em": {
          n += r.em(u);
          break;
        }
        case "codespan": {
          n += r.codespan(u);
          break;
        }
        case "br": {
          n += r.br(u);
          break;
        }
        case "del": {
          n += r.del(u);
          break;
        }
        case "text": {
          n += r.text(u);
          break;
        }
        default: {
          let d = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
}, xc, la = (xc = class {
  constructor(t) {
    Te(this, "options");
    Te(this, "block");
    this.options = t || co;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? dn.lex : dn.lexInline;
  }
  provideParser() {
    return this.block ? fn.parse : fn.parseInline;
  }
}, Te(xc, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Te(xc, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), xc), v1 = class {
  constructor(...t) {
    Te(this, "defaults", oh());
    Te(this, "options", this.setOptions);
    Te(this, "parse", this.parseMarkdown(true));
    Te(this, "parseInline", this.parseMarkdown(false));
    Te(this, "Parser", fn);
    Te(this, "Renderer", Xc);
    Te(this, "TextRenderer", ph);
    Te(this, "Lexer", dn);
    Te(this, "Tokenizer", Yc);
    Te(this, "Hooks", la);
    this.use(...t);
  }
  walkTokens(t, r) {
    var i, o;
    let n = [];
    for (let l of t) switch (n = n.concat(r.call(this, l)), l.type) {
      case "table": {
        let c = l;
        for (let u of c.header) n = n.concat(this.walkTokens(u.tokens, r));
        for (let u of c.rows) for (let d of u) n = n.concat(this.walkTokens(d.tokens, r));
        break;
      }
      case "list": {
        let c = l;
        n = n.concat(this.walkTokens(c.items, r));
        break;
      }
      default: {
        let c = l;
        (o = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && o[c.type] ? this.defaults.extensions.childTokens[c.type].forEach((u) => {
          let d = c[u].flat(1 / 0);
          n = n.concat(this.walkTokens(d, r));
        }) : c.tokens && (n = n.concat(this.walkTokens(c.tokens, r)));
      }
    }
    return n;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      let i = { ...n };
      if (i.async = this.defaults.async || i.async || false, n.extensions && (n.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let l = r.renderers[o.name];
          l ? r.renderers[o.name] = function(...c) {
            let u = o.renderer.apply(this, c);
            return u === false && (u = l.apply(this, c)), u;
          } : r.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let l = r[o.level];
          l ? l.unshift(o.tokenizer) : r[o.level] = [o.tokenizer], o.start && (o.level === "block" ? r.startBlock ? r.startBlock.push(o.start) : r.startBlock = [o.start] : o.level === "inline" && (r.startInline ? r.startInline.push(o.start) : r.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (r.childTokens[o.name] = o.childTokens);
      }), i.extensions = r), n.renderer) {
        let o = this.defaults.renderer || new Xc(this.defaults);
        for (let l in n.renderer) {
          if (!(l in o)) throw new Error(`renderer '${l}' does not exist`);
          if (["options", "parser"].includes(l)) continue;
          let c = l, u = n.renderer[c], d = o[c];
          o[c] = (...g) => {
            let f = u.apply(o, g);
            return f === false && (f = d.apply(o, g)), f || "";
          };
        }
        i.renderer = o;
      }
      if (n.tokenizer) {
        let o = this.defaults.tokenizer || new Yc(this.defaults);
        for (let l in n.tokenizer) {
          if (!(l in o)) throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l)) continue;
          let c = l, u = n.tokenizer[c], d = o[c];
          o[c] = (...g) => {
            let f = u.apply(o, g);
            return f === false && (f = d.apply(o, g)), f;
          };
        }
        i.tokenizer = o;
      }
      if (n.hooks) {
        let o = this.defaults.hooks || new la();
        for (let l in n.hooks) {
          if (!(l in o)) throw new Error(`hook '${l}' does not exist`);
          if (["options", "block"].includes(l)) continue;
          let c = l, u = n.hooks[c], d = o[c];
          la.passThroughHooks.has(l) ? o[c] = (g) => {
            if (this.defaults.async && la.passThroughHooksRespectAsync.has(l)) return (async () => {
              let h = await u.call(o, g);
              return d.call(o, h);
            })();
            let f = u.call(o, g);
            return d.call(o, f);
          } : o[c] = (...g) => {
            if (this.defaults.async) return (async () => {
              let h = await u.apply(o, g);
              return h === false && (h = await d.apply(o, g)), h;
            })();
            let f = u.apply(o, g);
            return f === false && (f = d.apply(o, g)), f;
          };
        }
        i.hooks = o;
      }
      if (n.walkTokens) {
        let o = this.defaults.walkTokens, l = n.walkTokens;
        i.walkTokens = function(c) {
          let u = [];
          return u.push(l.call(this, c)), o && (u = u.concat(o.call(this, c))), u;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return dn.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return fn.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, n) => {
      let i = { ...n }, o = { ...this.defaults, ...i }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === true && i.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = t), o.async) return (async () => {
        let c = o.hooks ? await o.hooks.preprocess(r) : r, u = await (o.hooks ? await o.hooks.provideLexer() : t ? dn.lex : dn.lexInline)(c, o), d = o.hooks ? await o.hooks.processAllTokens(u) : u;
        o.walkTokens && await Promise.all(this.walkTokens(d, o.walkTokens));
        let g = await (o.hooks ? await o.hooks.provideParser() : t ? fn.parse : fn.parseInline)(d, o);
        return o.hooks ? await o.hooks.postprocess(g) : g;
      })().catch(l);
      try {
        o.hooks && (r = o.hooks.preprocess(r));
        let c = (o.hooks ? o.hooks.provideLexer() : t ? dn.lex : dn.lexInline)(r, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let u = (o.hooks ? o.hooks.provideParser() : t ? fn.parse : fn.parseInline)(c, o);
        return o.hooks && (u = o.hooks.postprocess(u)), u;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, r) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let i = "<p>An error occurred:</p><pre>" + En(n.message + "", true) + "</pre>";
        return r ? Promise.resolve(i) : i;
      }
      if (r) return Promise.reject(n);
      throw n;
    };
  }
}, oo = new v1();
function lt(e6, t) {
  return oo.parse(e6, t);
}
lt.options = lt.setOptions = function(e6) {
  return oo.setOptions(e6), lt.defaults = oo.defaults, o1(lt.defaults), lt;
};
lt.getDefaults = oh;
lt.defaults = co;
lt.use = function(...e6) {
  return oo.use(...e6), lt.defaults = oo.defaults, o1(lt.defaults), lt;
};
lt.walkTokens = function(e6, t) {
  return oo.walkTokens(e6, t);
};
lt.parseInline = oo.parseInline;
lt.Parser = fn;
lt.parser = fn.parse;
lt.Renderer = Xc;
lt.TextRenderer = ph;
lt.Lexer = dn;
lt.lexer = dn.lex;
lt.Tokenizer = Yc;
lt.Hooks = la;
lt.parse = lt;
lt.options;
lt.setOptions;
lt.use;
lt.walkTokens;
lt.parseInline;
fn.parse;
dn.lex;
const jz = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, m1 = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g, Bz = RegExp(m1.source), Jb = (e6 = "") => Bz.test(e6) ? e6.replace(m1, (t) => jz[t] || "'") : e6, Qb = (e6, t) => {
  if (!t) return e6;
  try {
    return new URL(e6, t).href;
  } catch {
    return e6;
  }
};
var Wz = class {
  constructor(e6) {
    Te(this, "renderer");
    this.renderer = e6.renderer;
  }
  parse(e6) {
    this.renderer.elIdList.push(0);
    const t = e6.map((r) => {
      switch (r.type) {
        case "space":
          return null;
        case "heading": {
          const n = r.depth;
          return this.renderer.heading(this.parseInline(r.tokens), n);
        }
        case "paragraph":
          return this.renderer.paragraph(this.parseInline(r.tokens));
        case "text": {
          const n = r;
          return n.tokens ? this.parseInline(n.tokens) : r.text;
        }
        case "blockquote": {
          const n = r, i = this.parse(n.tokens);
          return this.renderer.blockquote(i);
        }
        case "list": {
          const n = r;
          this.renderer.elIdList.push(0);
          const i = n.items.map((o) => {
            const l = [];
            return o.task && l.push(this.renderer.checkbox(o.checked ?? false)), l.push(this.parse(o.tokens)), this.renderer.listItem(l);
          });
          return this.renderer.elIdList.pop(), this.renderer.list(i, r.ordered, r.ordered ? r.start : void 0);
        }
        case "code":
          return this.renderer.code(r.text, r.lang);
        case "html":
          return this.renderer.html(r.text);
        case "table": {
          const n = r;
          this.renderer.elIdList.push(0);
          const i = n.header.map((d, g) => this.renderer.tableCell(this.parseInline(d.tokens), {
            header: true,
            align: r.align[g]
          }));
          this.renderer.elIdList.pop();
          const o = this.renderer.tableRow(i), l = this.renderer.tableHeader(o);
          this.renderer.elIdList.push(0);
          const c = n.rows.map((d) => {
            this.renderer.elIdList.push(0);
            const g = d.map((f, h) => this.renderer.tableCell(this.parseInline(f.tokens), {
              header: false,
              align: r.align[h]
            }));
            return this.renderer.elIdList.pop(), this.renderer.tableRow(g);
          });
          this.renderer.elIdList.pop();
          const u = this.renderer.tableBody(c);
          return this.renderer.table([l, u]);
        }
        case "hr":
          return this.renderer.hr();
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
  parseInline(e6 = []) {
    this.renderer.elIdList.push(0);
    const t = e6.map((r) => {
      switch (r.type) {
        case "text":
          return this.renderer.text(Jb(r.text));
        case "strong":
          return this.renderer.strong(this.parseInline(r.tokens));
        case "em":
          return this.renderer.em(this.parseInline(r.tokens));
        case "del":
          return this.renderer.del(this.parseInline(r.tokens));
        case "codespan":
          return this.renderer.codespan(Jb(r.text));
        case "link":
          return this.renderer.link(r.href, this.parseInline(r.tokens));
        case "image":
          return this.renderer.image(r.href, r.text, r.title);
        case "html":
          return this.renderer.html(r.text);
        case "br":
          return this.renderer.br();
        case "escape":
          return this.renderer.text(r.text);
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
}, Vz = Wz, Ei, ht, Pt, hp, Hy, Uz = (Hy = class {
  constructor(e6 = {}) {
    Yt(this, ht);
    Te(this, "elIdList", []);
    Yt(this, Ei);
    const { renderer: t } = e6;
    rt(this, Ei, e6), t && typeof t == "object" && Object.entries(t).forEach(([r, n]) => {
      const i = r, o = n;
      !this[i] || i === "elementId" || i === "elIdList" || typeof o != "function" || Object.defineProperty(this, i, {
        value(...l) {
          return _e(this, ht, hp).call(this), o.apply(this, l);
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
  }
  get elementId() {
    return this.elIdList.join("-");
  }
  heading(e6, t) {
    return _e(this, ht, Pt).call(this, `h${t}`, e6);
  }
  paragraph(e6) {
    return _e(this, ht, Pt).call(this, "p", e6);
  }
  link(e6, t) {
    const r = Qb(e6, le(this, Ei).baseURL), n = le(this, Ei).openLinksInNewTab ? "_blank" : null;
    return _e(this, ht, Pt).call(this, "a", t, {
      href: r,
      target: n
    });
  }
  image(e6, t, r = null) {
    const n = Qb(e6, le(this, Ei).baseURL);
    return _e(this, ht, Pt).call(this, "img", null, {
      src: n,
      alt: t,
      title: r
    });
  }
  codespan(e6, t = null) {
    const r = t ? `${le(this, Ei).langPrefix}${t}` : null;
    return _e(this, ht, Pt).call(this, "code", e6, { className: r });
  }
  code(e6, t) {
    return _e(this, ht, Pt).call(this, "pre", this.codespan(e6, t));
  }
  blockquote(e6) {
    return _e(this, ht, Pt).call(this, "blockquote", e6);
  }
  list(e6, t, r) {
    return _e(this, ht, Pt).call(this, t ? "ol" : "ul", e6, t && r !== 1 ? { start: r } : {});
  }
  listItem(e6) {
    return _e(this, ht, Pt).call(this, "li", e6);
  }
  checkbox(e6) {
    return _e(this, ht, Pt).call(this, "input", null, {
      type: "checkbox",
      disabled: true,
      checked: e6
    });
  }
  table(e6) {
    return _e(this, ht, Pt).call(this, "table", e6);
  }
  tableHeader(e6) {
    return _e(this, ht, Pt).call(this, "thead", e6);
  }
  tableBody(e6) {
    return _e(this, ht, Pt).call(this, "tbody", e6);
  }
  tableRow(e6) {
    return _e(this, ht, Pt).call(this, "tr", e6);
  }
  tableCell(e6, t) {
    const r = t.header ? "th" : "td";
    return _e(this, ht, Pt).call(this, r, e6, { align: t.align });
  }
  strong(e6) {
    return _e(this, ht, Pt).call(this, "strong", e6);
  }
  em(e6) {
    return _e(this, ht, Pt).call(this, "em", e6);
  }
  del(e6) {
    return _e(this, ht, Pt).call(this, "del", e6);
  }
  text(e6) {
    return e6;
  }
  html(e6) {
    return e6;
  }
  hr() {
    return _e(this, ht, Pt).call(this, "hr");
  }
  br() {
    return _e(this, ht, Pt).call(this, "br");
  }
}, Ei = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakSet(), Pt = function(e6, t = null, r = {}) {
  const n = {
    key: `marked-react-${this.elementId}`,
    suppressHydrationWarning: true
  };
  return _e(this, ht, hp).call(this), __mf_10(e6, {
    ...r,
    ...n
  }, t);
}, hp = function() {
  this.elIdList[this.elIdList.length - 1] += 1;
}, Hy), qz = Uz;
const Gz = (e6) => {
  if (e6.value && typeof e6.value != "string") throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof e6.value}`);
  if (e6.children && typeof e6.children != "string") throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof e6.children}`);
}, Zz = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: void 0,
  openLinksInNewTab: true,
  langPrefix: "language-",
  renderer: void 0
}, Kz = new v1(), Yz = (e6) => {
  Gz(e6);
  const t = {
    ...Zz,
    ...e6
  }, r = t.instance ?? Kz, n = {
    breaks: t.breaks,
    gfm: t.gfm,
    tokenizer: r.defaults.tokenizer
  }, i = t.value ?? t.children ?? "", o = t.isInline ? r.Lexer.lexInline(i, n) : r.lexer(i, n), l = { renderer: new qz({
    renderer: t.renderer,
    baseURL: t.baseURL,
    openLinksInNewTab: t.openLinksInNewTab,
    langPrefix: t.langPrefix
  }) }, c = new Vz(l), u = t.isInline ? c.parseInline(o) : c.parse(o);
  return __mf_10(__mf_0$1, null, u);
};
var Xz = Yz, Jz = Xz;
const t6 = ({
  children: e6,
  label: t,
  placement: r = "top",
  className: n,
  isDisabled: i,
  container: o
}) => {
  const [l, c] = __mf_26(
    null
  ), u = __mf_25(null), [d, g] = __mf_26(null), [f, h] = __mf_26(false), b = typeof t == "string", { styles: x, attributes: v } = jp(l, d, {
    placement: r,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
          padding: 8
        }
      }
    ]
  }), w = () => {
    u.current && (clearTimeout(u.current), u.current = null);
  };
  __mf_20(() => {
    if (!f || !l) return;
    let y = false, S = false;
    const O = new IntersectionObserver(
      ([E]) => {
        if (!y) {
          S = E.isIntersecting, y = true;
          return;
        }
        S && !E.isIntersecting && (w(), h(false)), S = E.isIntersecting;
      },
      { threshold: 0 }
    );
    return O.observe(l), () => O.disconnect();
  }, [f, l]), __mf_20(() => () => w(), []);
  const m = R.Children.map(e6, (y) => R.isValidElement(y) ? R.cloneElement(y, {
    ref: c,
    onMouseEnter: () => {
      w(), h(true);
    },
    onMouseLeave: () => {
      w(), h(false);
    }
  }) : y);
  return i ? /* @__PURE__ */ __mf_1(__mf_0, { children: m }) : /* @__PURE__ */ __mf_2(__mf_0, { children: [
    m,
    f && t && Oi$1.createPortal(
      /* @__PURE__ */ __mf_1(
        "div",
        {
          ref: g,
          style: {
            ...x.popper,
            zIndex: 1e5
          },
          ...v.popper,
          className: gt(
            b ? "select-none rounded bg-purple-200 font-poppins font-medium text-s px-2 py-0.5 text-purple-900 shadow-md" : void 0,
            n
          ),
          onMouseEnter: () => {
            w(), h(true);
          },
          onMouseLeave: () => {
            w(), h(false);
          },
          children: b ? /* @__PURE__ */ __mf_1(Jz, { openLinksInNewTab: true, children: t }) : t
        }
      ),
      o || document.body
    )
  ] });
}, r6 = ({ referenceElement: e6, label: t }) => {
  const [r, n] = __mf_26(null), { styles: i, attributes: o } = jp(e6, r, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 5]
        }
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport"
        }
      }
    ]
  });
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      className: "rounded bg-purple-200 font-poppins font-medium text-s px-2 py-0.5 text-purple-900 shadow-md",
      ref: n,
      style: {
        ...i.popper,
        zIndex: 1e5
      },
      ...o.popper,
      children: t
    }
  );
}, Qz = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, eL = Gc.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${Qz} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: var(--ws-bg-foreground);
    stroke-width: 2;
    fill: var(--ws-bg-foreground);
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, n6 = ({
  message: e6,
  version: t
}) => /* @__PURE__ */ __mf_1(
  oi,
  {
    depth: 1,
    className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center text-body",
    children: /* @__PURE__ */ __mf_2("div", { className: "flex flex-col text-center", children: [
      /* @__PURE__ */ __mf_1("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ __mf_1("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ __mf_2(eL, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
        /* @__PURE__ */ __mf_1("defs", { children: /* @__PURE__ */ __mf_2("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
          /* @__PURE__ */ __mf_1("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ __mf_1(
            "animate",
            {
              attributeName: "stop-color",
              values: "#ffa4c0; #2743a6;",
              dur: "6s",
              repeatCount: "indefinite"
            }
          ) }),
          /* @__PURE__ */ __mf_1("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ __mf_1(
            "animate",
            {
              attributeName: "stop-color",
              values: "#2743a6; #ffa4c0;",
              dur: "2ds",
              repeatCount: "indefinite"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ __mf_1("g", { id: "a" }),
        /* @__PURE__ */ __mf_1("g", { id: "b", children: /* @__PURE__ */ __mf_1("g", { id: "c", children: /* @__PURE__ */ __mf_2("g", { children: [
          /* @__PURE__ */ __mf_1(
            "path",
            {
              id: "tail",
              className: "e",
              d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
            }
          ),
          /* @__PURE__ */ __mf_1(
            "path",
            {
              id: "circle",
              className: "f",
              d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
            }
          )
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ __mf_2("div", { children: [
        /* @__PURE__ */ __mf_1("span", { className: "text-xs text-inactive-text", children: t }),
        /* @__PURE__ */ __mf_1("h2", { className: "text-lg text-muted", children: e6 })
      ] })
    ] })
  }
);
var tL = Object.defineProperty, rL = (e6, t, r) => t in e6 ? tL(e6, t, { enumerable: true, configurable: true, writable: true, value: r }) : e6[t] = r, Mf = (e6, t, r) => (rL(e6, typeof t != "symbol" ? t + "" : t, r), r);
let nL = class {
  constructor() {
    Mf(this, "current", this.detect()), Mf(this, "handoffState", "pending"), Mf(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Dc = new nL(), Ra = (e6, t) => {
  Dc.isServer ? __mf_20(e6, t) : __mf_22(e6, t);
};
function Uo(e6) {
  let t = __mf_25(e6);
  return Ra(() => {
    t.current = e6;
  }, [e6]), t;
}
let ri = function(e6) {
  let t = Uo(e6);
  return R.useCallback((...r) => t.current(...r), [t]);
};
function iL(e6) {
  typeof queueMicrotask == "function" ? queueMicrotask(e6) : Promise.resolve().then(e6).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ba() {
  let e6 = [], t = { addEventListener(r, n, i, o) {
    return r.addEventListener(n, i, o), t.add(() => r.removeEventListener(n, i, o));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: true };
    return iL(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = false;
    });
  }, style(r, n, i) {
    let o = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: i }), this.add(() => {
      Object.assign(r.style, { [n]: o });
    });
  }, group(r) {
    let n = Ba();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e6.push(r), () => {
      let n = e6.indexOf(r);
      if (n >= 0) for (let i of e6.splice(n, 1)) i();
    };
  }, dispose() {
    for (let r of e6.splice(0)) r();
  } };
  return t;
}
function b1() {
  let [e6] = __mf_26(Ba);
  return __mf_20(() => () => e6.dispose(), [e6]), e6;
}
function oL() {
  let e6 = typeof document > "u";
  return "useSyncExternalStore" in le$1 ? ((t) => t.useSyncExternalStore)(le$1)(() => () => {
  }, () => false, () => !e6) : false;
}
function y1() {
  let e6 = oL(), [t, r] = __mf_26(Dc.isHandoffComplete);
  return t && Dc.isHandoffComplete === false && r(false), __mf_20(() => {
    t !== true && r(true);
  }, [t]), __mf_20(() => Dc.handoff(), []), e6 ? false : t;
}
function Cn(e6, t, ...r) {
  if (e6 in t) {
    let i = t[e6];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e6}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Cn), n;
}
let sL = Symbol();
function w1(...e6) {
  let t = __mf_25(e6);
  __mf_20(() => {
    t.current = e6;
  }, [e6]);
  let r = ri((n) => {
    for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n);
  });
  return e6.every((n) => n == null || (n == null ? void 0 : n[sL])) ? void 0 : r;
}
function Jc(...e6) {
  return Array.from(new Set(e6.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var x1 = ((e6) => (e6[e6.None = 0] = "None", e6[e6.RenderStrategy = 1] = "RenderStrategy", e6[e6.Static = 2] = "Static", e6))(x1 || {}), Ai = ((e6) => (e6[e6.Unmount = 0] = "Unmount", e6[e6.Hidden = 1] = "Hidden", e6))(Ai || {});
function S1({ ourProps: e6, theirProps: t, slot: r, defaultTag: n, features: i, visible: o = true, name: l, mergeRefs: c }) {
  c = c ?? aL;
  let u = _1(t, e6);
  if (o) return gc(u, r, n, l, c);
  let d = i ?? 0;
  if (d & 2) {
    let { static: g = false, ...f } = u;
    if (g) return gc(f, r, n, l, c);
  }
  if (d & 1) {
    let { unmount: g = true, ...f } = u;
    return Cn(g ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return gc({ ...f, hidden: true, style: { display: "none" } }, r, n, l, c);
    } });
  }
  return gc(u, r, n, l, c);
}
function gc(e6, t = {}, r, n, i) {
  let { as: o = r, children: l, refName: c = "ref", ...u } = Df(e6, ["unmount", "static"]), d = e6.ref !== void 0 ? { [c]: e6.ref } : {}, g = typeof l == "function" ? l(t) : l;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let f = {};
  if (t) {
    let h = false, b = [];
    for (let [x, v] of Object.entries(t)) typeof v == "boolean" && (h = true), v === true && b.push(x);
    h && (f["data-headlessui-state"] = b.join(" "));
  }
  if (o === __mf_0$1 && Object.keys(ey(u)).length > 0) {
    if (!__mf_14(g) || Array.isArray(g) && g.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let h = g.props, b = typeof (h == null ? void 0 : h.className) == "function" ? (...v) => Jc(h == null ? void 0 : h.className(...v), u.className) : Jc(h == null ? void 0 : h.className, u.className), x = b ? { className: b } : {};
    return __mf_8(g, Object.assign({}, _1(g.props, ey(Df(u, ["ref"]))), f, d, { ref: i(g.ref, d.ref) }, x));
  }
  return __mf_10(o, Object.assign({}, Df(u, ["ref"]), o !== __mf_0$1 && d, o !== __mf_0$1 && f), g);
}
function aL(...e6) {
  return e6.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e6) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function _1(...e6) {
  if (e6.length === 0) return {};
  if (e6.length === 1) return e6[0];
  let t = {}, r = {};
  for (let n of e6) for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r) Object.assign(t, { [n](i, ...o) {
    let l = r[n];
    for (let c of l) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      c(i, ...o);
    }
  } });
  return t;
}
function hh(e6) {
  var t;
  return Object.assign(__mf_13(e6), { displayName: (t = e6.displayName) != null ? t : e6.name });
}
function ey(e6) {
  let t = Object.assign({}, e6);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Df(e6, t = []) {
  let r = Object.assign({}, e6);
  for (let n of t) n in r && delete r[n];
  return r;
}
let gh = __mf_9(null);
gh.displayName = "OpenClosedContext";
var ei = ((e6) => (e6[e6.Open = 1] = "Open", e6[e6.Closed = 2] = "Closed", e6[e6.Closing = 4] = "Closing", e6[e6.Opening = 8] = "Opening", e6))(ei || {});
function E1() {
  return __mf_18(gh);
}
function lL({ value: e6, children: t }) {
  return R.createElement(gh.Provider, { value: e6 }, t);
}
function vh() {
  let e6 = __mf_25(false);
  return Ra(() => (e6.current = true, () => {
    e6.current = false;
  }), []), e6;
}
function cL(e6 = 0) {
  let [t, r] = __mf_26(e6), n = vh(), i = __mf_17((u) => {
    n.current && r((d) => d | u);
  }, [t, n]), o = __mf_17((u) => !!(t & u), [t]), l = __mf_17((u) => {
    n.current && r((d) => d & ~u);
  }, [r, n]), c = __mf_17((u) => {
    n.current && r((d) => d ^ u);
  }, [r]);
  return { flags: t, addFlag: i, hasFlag: o, removeFlag: l, toggleFlag: c };
}
function uL(e6) {
  let t = { called: false };
  return (...r) => {
    if (!t.called) return t.called = true, e6(...r);
  };
}
function zf(e6, ...t) {
  e6 && t.length > 0 && e6.classList.add(...t);
}
function Lf(e6, ...t) {
  e6 && t.length > 0 && e6.classList.remove(...t);
}
function dL(e6, t) {
  let r = Ba();
  if (!e6) return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e6), [o, l] = [n, i].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((g) => g.includes("ms") ? parseFloat(g) : parseFloat(g) * 1e3).sort((g, f) => f - g);
    return d;
  }), c = o + l;
  if (c !== 0) {
    r.group((d) => {
      d.setTimeout(() => {
        t(), d.dispose();
      }, c), d.addEventListener(e6, "transitionrun", (g) => {
        g.target === g.currentTarget && d.dispose();
      });
    });
    let u = r.addEventListener(e6, "transitionend", (d) => {
      d.target === d.currentTarget && (t(), u());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function fL(e6, t, r, n) {
  let i = r ? "enter" : "leave", o = Ba(), l = n !== void 0 ? uL(n) : () => {
  };
  i === "enter" && (e6.removeAttribute("hidden"), e6.style.display = "");
  let c = Cn(i, { enter: () => t.enter, leave: () => t.leave }), u = Cn(i, { enter: () => t.enterTo, leave: () => t.leaveTo }), d = Cn(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Lf(e6, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), zf(e6, ...t.base, ...c, ...d), o.nextFrame(() => {
    Lf(e6, ...t.base, ...c, ...d), zf(e6, ...t.base, ...c, ...u), dL(e6, () => (Lf(e6, ...t.base, ...c), zf(e6, ...t.base, ...t.entered), l()));
  }), o.dispose;
}
function pL({ immediate: e6, container: t, direction: r, classes: n, onStart: i, onStop: o }) {
  let l = vh(), c = b1(), u = Uo(r);
  Ra(() => {
    e6 && (u.current = "enter");
  }, [e6]), Ra(() => {
    let d = Ba();
    c.add(d.dispose);
    let g = t.current;
    if (g && u.current !== "idle" && l.current) return d.dispose(), i.current(u.current), d.add(fL(g, n.current, u.current === "enter", () => {
      d.dispose(), o.current(u.current);
    })), d.dispose;
  }, [r]);
}
function _i(e6 = "") {
  return e6.split(/\s+/).filter((t) => t.length > 1);
}
let bu = __mf_9(null);
bu.displayName = "TransitionContext";
var hL = ((e6) => (e6.Visible = "visible", e6.Hidden = "hidden", e6))(hL || {});
function gL() {
  let e6 = __mf_18(bu);
  if (e6 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e6;
}
function vL() {
  let e6 = __mf_18(yu);
  if (e6 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e6;
}
let yu = __mf_9(null);
yu.displayName = "NestingContext";
function wu(e6) {
  return "children" in e6 ? wu(e6.children) : e6.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function O1(e6, t) {
  let r = Uo(e6), n = __mf_25([]), i = vh(), o = b1(), l = ri((b, x = Ai.Hidden) => {
    let v = n.current.findIndex(({ el: w }) => w === b);
    v !== -1 && (Cn(x, { [Ai.Unmount]() {
      n.current.splice(v, 1);
    }, [Ai.Hidden]() {
      n.current[v].state = "hidden";
    } }), o.microTask(() => {
      var w;
      !wu(n) && i.current && ((w = r.current) == null || w.call(r));
    }));
  }), c = ri((b) => {
    let x = n.current.find(({ el: v }) => v === b);
    return x ? x.state !== "visible" && (x.state = "visible") : n.current.push({ el: b, state: "visible" }), () => l(b, Ai.Unmount);
  }), u = __mf_25([]), d = __mf_25(Promise.resolve()), g = __mf_25({ enter: [], leave: [], idle: [] }), f = ri((b, x, v) => {
    u.current.splice(0), t && (t.chains.current[x] = t.chains.current[x].filter(([w]) => w !== b)), t == null || t.chains.current[x].push([b, new Promise((w) => {
      u.current.push(w);
    })]), t == null || t.chains.current[x].push([b, new Promise((w) => {
      Promise.all(g.current[x].map(([m, y]) => y)).then(() => w());
    })]), x === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(x)) : v(x);
  }), h = ri((b, x, v) => {
    Promise.all(g.current[x].splice(0).map(([w, m]) => m)).then(() => {
      var w;
      (w = u.current.shift()) == null || w();
    }).then(() => v(x));
  });
  return __mf_23(() => ({ children: n, register: c, unregister: l, onStart: f, onStop: h, wait: d, chains: g }), [c, l, n, f, h, g, d]);
}
function mL() {
}
let bL = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ty(e6) {
  var t;
  let r = {};
  for (let n of bL) r[n] = (t = e6[n]) != null ? t : mL;
  return r;
}
function yL(e6) {
  let t = __mf_25(ty(e6));
  return __mf_20(() => {
    t.current = ty(e6);
  }, [e6]), t;
}
let wL = "div", k1 = x1.RenderStrategy;
function xL(e6, t) {
  var r, n;
  let { beforeEnter: i, afterEnter: o, beforeLeave: l, afterLeave: c, enter: u, enterFrom: d, enterTo: g, entered: f, leave: h, leaveFrom: b, leaveTo: x, ...v } = e6, w = __mf_25(null), m = w1(w, t), y = (r = v.unmount) == null || r ? Ai.Unmount : Ai.Hidden, { show: S, appear: O, initial: E } = gL(), [A, $] = __mf_26(S ? "visible" : "hidden"), T = vL(), { register: D, unregister: j } = T;
  __mf_20(() => D(w), [D, w]), __mf_20(() => {
    if (y === Ai.Hidden && w.current) {
      if (S && A !== "visible") {
        $("visible");
        return;
      }
      return Cn(A, { hidden: () => j(w), visible: () => D(w) });
    }
  }, [A, w, D, j, S, y]);
  let z = Uo({ base: _i(v.className), enter: _i(u), enterFrom: _i(d), enterTo: _i(g), entered: _i(f), leave: _i(h), leaveFrom: _i(b), leaveTo: _i(x) }), M = yL({ beforeEnter: i, afterEnter: o, beforeLeave: l, afterLeave: c }), W = y1();
  __mf_20(() => {
    if (W && A === "visible" && w.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [w, A, W]);
  let V = E && !O, P = O && S && E, K = !W || V ? "idle" : S ? "enter" : "leave", X = cL(0), ne = ri((Y) => Cn(Y, { enter: () => {
    X.addFlag(ei.Opening), M.current.beforeEnter();
  }, leave: () => {
    X.addFlag(ei.Closing), M.current.beforeLeave();
  }, idle: () => {
  } })), he = ri((Y) => Cn(Y, { enter: () => {
    X.removeFlag(ei.Opening), M.current.afterEnter();
  }, leave: () => {
    X.removeFlag(ei.Closing), M.current.afterLeave();
  }, idle: () => {
  } })), N = O1(() => {
    $("hidden"), j(w);
  }, T), F = __mf_25(false);
  pL({ immediate: P, container: w, classes: z, direction: K, onStart: Uo((Y) => {
    F.current = true, N.onStart(w, Y, ne);
  }), onStop: Uo((Y) => {
    F.current = false, N.onStop(w, Y, he), Y === "leave" && !wu(N) && ($("hidden"), j(w));
  }) });
  let G = v, te = { ref: m };
  return P ? G = { ...G, className: Jc(v.className, ...z.current.enter, ...z.current.enterFrom) } : F.current && (G.className = Jc(v.className, (n = w.current) == null ? void 0 : n.className), G.className === "" && delete G.className), R.createElement(yu.Provider, { value: N }, R.createElement(lL, { value: Cn(A, { visible: ei.Open, hidden: ei.Closed }) | X.flags }, S1({ ourProps: te, theirProps: G, defaultTag: wL, features: k1, visible: A === "visible", name: "Transition.Child" })));
}
function SL(e6, t) {
  let { show: r, appear: n = false, unmount: i = true, ...o } = e6, l = __mf_25(null), c = w1(l, t);
  y1();
  let u = E1();
  if (r === void 0 && u !== null && (r = (u & ei.Open) === ei.Open), ![true, false].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [d, g] = __mf_26(r ? "visible" : "hidden"), f = O1(() => {
    g("hidden");
  }), [h, b] = __mf_26(true), x = __mf_25([r]);
  Ra(() => {
    h !== false && x.current[x.current.length - 1] !== r && (x.current.push(r), b(false));
  }, [x, r]);
  let v = __mf_23(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  __mf_20(() => {
    if (r) g("visible");
    else if (!wu(f)) g("hidden");
    else {
      let S = l.current;
      if (!S) return;
      let O = S.getBoundingClientRect();
      O.x === 0 && O.y === 0 && O.width === 0 && O.height === 0 && g("hidden");
    }
  }, [r, f]);
  let w = { unmount: i }, m = ri(() => {
    var S;
    h && b(false), (S = e6.beforeEnter) == null || S.call(e6);
  }), y = ri(() => {
    var S;
    h && b(false), (S = e6.beforeLeave) == null || S.call(e6);
  });
  return R.createElement(yu.Provider, { value: f }, R.createElement(bu.Provider, { value: v }, S1({ ourProps: { ...w, as: __mf_0$1, children: R.createElement(A1, { ref: c, ...w, ...o, beforeEnter: m, beforeLeave: y }) }, theirProps: {}, defaultTag: __mf_0$1, features: k1, visible: d === "visible", name: "Transition" })));
}
function _L(e6, t) {
  let r = __mf_18(bu) !== null, n = E1() !== null;
  return R.createElement(R.Fragment, null, !r && n ? R.createElement(gp, { ref: t, ...e6 }) : R.createElement(A1, { ref: t, ...e6 }));
}
let gp = hh(SL), A1 = hh(xL), EL = hh(_L), Qc = Object.assign(gp, { Child: EL, Root: gp });
var ca = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var OL = ca.exports, ry;
function kL() {
  return ry || (ry = 1, (function(e6, t) {
    (function() {
      var r, n = "4.18.1", i = 200, o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "Invalid `imports` option passed into `_.template`", d = "__lodash_hash_undefined__", g = 500, f = "__lodash_placeholder__", h = 1, b = 2, x = 4, v = 1, w = 2, m = 1, y = 2, S = 4, O = 8, E = 16, A = 32, $ = 64, T = 128, D = 256, j = 512, z = 30, M = "...", W = 800, V = 16, P = 1, K = 2, X = 3, ne = 1 / 0, he = 9007199254740991, N = 17976931348623157e292, F = NaN, G = 4294967295, te = G - 1, Y = G >>> 1, ie = [
        ["ary", T],
        ["bind", m],
        ["bindKey", y],
        ["curry", O],
        ["curryRight", E],
        ["flip", j],
        ["partial", A],
        ["partialRight", $],
        ["rearg", D]
      ], Q = "[object Arguments]", ae = "[object Array]", de = "[object AsyncFunction]", ee = "[object Boolean]", fe = "[object Date]", Se = "[object DOMException]", Z = "[object Error]", Me = "[object Function]", ge = "[object GeneratorFunction]", ct = "[object Map]", bt = "[object Number]", Wt = "[object Null]", Mt = "[object Object]", Lt = "[object Promise]", ut = "[object Proxy]", dt = "[object RegExp]", qe = "[object Set]", Fr = "[object String]", ir = "[object Symbol]", fo = "[object Undefined]", tn = "[object WeakMap]", or = "[object WeakSet]", vn = "[object ArrayBuffer]", $n = "[object DataView]", yr = "[object Float32Array]", rn = "[object Float64Array]", po = "[object Int8Array]", os = "[object Int16Array]", ho = "[object Int32Array]", Ni = "[object Uint8Array]", si = "[object Uint8ClampedArray]", wr = "[object Uint16Array]", ss = "[object Uint32Array]", ku = /\b__p \+= '';/g, Hr = /\b(__p \+=) '' \+/g, as = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Wa = /&(?:amp|lt|gt|quot|#39);/g, ls = /[&<>"']/g, Va = RegExp(Wa.source), Au = RegExp(ls.source), Ua = /<%-([\s\S]+?)%>/g, qa = /<%([\s\S]+?)%>/g, cs = /<%=([\s\S]+?)%>/g, Ga = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mi = /^\w*$/, us = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ds = /[\\^$.*+?()[\]{}|]/g, Za = RegExp(ds.source), Di = /^\s+/, fs = /\s/, Ka = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ya = /\{\n\/\* \[wrapped with (.+)\] \*/, Xa = /,? & /, Tu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ja = /[()=,{}\[\]\/\s]/, Qa = /\\(\\)?/g, Ru = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fn = /\w*$/, Cu = /^[-+]0x[0-9a-f]+$/i, zi = /^0b[01]+$/i, go = /^\[object .+?Constructor\]$/, el = /^0o[0-7]+$/i, Iu = /^(?:0|[1-9]\d*)$/, Ee = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ie = /($^)/, xr = /['\n\r\u2028\u2029\\]/g, Rt = "\\ud800-\\udfff", Sr = "\\u0300-\\u036f", _r = "\\ufe20-\\ufe2f", jr = "\\u20d0-\\u20ff", nn = Sr + _r + jr, Hn = "\\u2700-\\u27bf", ai = "a-z\\xdf-\\xf6\\xf8-\\xff", ps = "\\xac\\xb1\\xd7\\xf7", Pu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", PS = "\\u2000-\\u206f", NS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ch = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ih = "\\ufe0e\\ufe0f", Ph = ps + Pu + PS + NS, Nu = "['’]", MS = "[" + Rt + "]", Nh = "[" + Ph + "]", tl = "[" + nn + "]", Mh = "\\d+", DS = "[" + Hn + "]", Dh = "[" + ai + "]", zh = "[^" + Rt + Ph + Mh + Hn + ai + Ch + "]", Mu = "\\ud83c[\\udffb-\\udfff]", zS = "(?:" + tl + "|" + Mu + ")", Lh = "[^" + Rt + "]", Du = "(?:\\ud83c[\\udde6-\\uddff]){2}", zu = "[\\ud800-\\udbff][\\udc00-\\udfff]", vo = "[" + Ch + "]", $h = "\\u200d", Fh = "(?:" + Dh + "|" + zh + ")", LS = "(?:" + vo + "|" + zh + ")", Hh = "(?:" + Nu + "(?:d|ll|m|re|s|t|ve))?", jh = "(?:" + Nu + "(?:D|LL|M|RE|S|T|VE))?", Bh = zS + "?", Wh = "[" + Ih + "]?", $S = "(?:" + $h + "(?:" + [Lh, Du, zu].join("|") + ")" + Wh + Bh + ")*", FS = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", HS = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Vh = Wh + Bh + $S, jS = "(?:" + [DS, Du, zu].join("|") + ")" + Vh, BS = "(?:" + [Lh + tl + "?", tl, Du, zu, MS].join("|") + ")", WS = RegExp(Nu, "g"), VS = RegExp(tl, "g"), Lu = RegExp(Mu + "(?=" + Mu + ")|" + BS + Vh, "g"), US = RegExp([
        vo + "?" + Dh + "+" + Hh + "(?=" + [Nh, vo, "$"].join("|") + ")",
        LS + "+" + jh + "(?=" + [Nh, vo + Fh, "$"].join("|") + ")",
        vo + "?" + Fh + "+" + Hh,
        vo + "+" + jh,
        HS,
        FS,
        Mh,
        jS
      ].join("|"), "g"), qS = RegExp("[" + $h + Rt + nn + Ih + "]"), GS = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ZS = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], KS = -1, vt = {};
      vt[yr] = vt[rn] = vt[po] = vt[os] = vt[ho] = vt[Ni] = vt[si] = vt[wr] = vt[ss] = true, vt[Q] = vt[ae] = vt[vn] = vt[ee] = vt[$n] = vt[fe] = vt[Z] = vt[Me] = vt[ct] = vt[bt] = vt[Mt] = vt[dt] = vt[qe] = vt[Fr] = vt[tn] = false;
      var pt = {};
      pt[Q] = pt[ae] = pt[vn] = pt[$n] = pt[ee] = pt[fe] = pt[yr] = pt[rn] = pt[po] = pt[os] = pt[ho] = pt[ct] = pt[bt] = pt[Mt] = pt[dt] = pt[qe] = pt[Fr] = pt[ir] = pt[Ni] = pt[si] = pt[wr] = pt[ss] = true, pt[Z] = pt[Me] = pt[tn] = false;
      var YS = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, XS = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, JS = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, QS = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, e_ = parseFloat, t_ = parseInt, Uh = typeof jl == "object" && jl && jl.Object === Object && jl, r_ = typeof self == "object" && self && self.Object === Object && self, Zt = Uh || r_ || Function("return this")(), $u = t && !t.nodeType && t, Li = $u && true && e6 && !e6.nodeType && e6, qh = Li && Li.exports === $u, Fu = qh && Uh.process, Br = (function() {
        try {
          var U = Li && Li.require && Li.require("util").types;
          return U || Fu && Fu.binding && Fu.binding("util");
        } catch {
        }
      })(), Gh = Br && Br.isArrayBuffer, Zh = Br && Br.isDate, Kh = Br && Br.isMap, Yh = Br && Br.isRegExp, Xh = Br && Br.isSet, Jh = Br && Br.isTypedArray;
      function Er(U, re, J) {
        switch (J.length) {
          case 0:
            return U.call(re);
          case 1:
            return U.call(re, J[0]);
          case 2:
            return U.call(re, J[0], J[1]);
          case 3:
            return U.call(re, J[0], J[1], J[2]);
        }
        return U.apply(re, J);
      }
      function n_(U, re, J, me) {
        for (var Re = -1, Ge = U == null ? 0 : U.length; ++Re < Ge; ) {
          var $t = U[Re];
          re(me, $t, J($t), U);
        }
        return me;
      }
      function Or(U, re) {
        for (var J = -1, me = U == null ? 0 : U.length; ++J < me && re(U[J], J, U) !== false; )
          ;
        return U;
      }
      function i_(U, re) {
        for (var J = U == null ? 0 : U.length; J-- && re(U[J], J, U) !== false; )
          ;
        return U;
      }
      function Qh(U, re) {
        for (var J = -1, me = U == null ? 0 : U.length; ++J < me; )
          if (!re(U[J], J, U))
            return false;
        return true;
      }
      function li(U, re) {
        for (var J = -1, me = U == null ? 0 : U.length, Re = 0, Ge = []; ++J < me; ) {
          var $t = U[J];
          re($t, J, U) && (Ge[Re++] = $t);
        }
        return Ge;
      }
      function rl(U, re) {
        var J = U == null ? 0 : U.length;
        return !!J && mo(U, re, 0) > -1;
      }
      function Hu(U, re, J) {
        for (var me = -1, Re = U == null ? 0 : U.length; ++me < Re; )
          if (J(re, U[me]))
            return true;
        return false;
      }
      function yt(U, re) {
        for (var J = -1, me = U == null ? 0 : U.length, Re = Array(me); ++J < me; )
          Re[J] = re(U[J], J, U);
        return Re;
      }
      function ci(U, re) {
        for (var J = -1, me = re.length, Re = U.length; ++J < me; )
          U[Re + J] = re[J];
        return U;
      }
      function ju(U, re, J, me) {
        var Re = -1, Ge = U == null ? 0 : U.length;
        for (me && Ge && (J = U[++Re]); ++Re < Ge; )
          J = re(J, U[Re], Re, U);
        return J;
      }
      function o_(U, re, J, me) {
        var Re = U == null ? 0 : U.length;
        for (me && Re && (J = U[--Re]); Re--; )
          J = re(J, U[Re], Re, U);
        return J;
      }
      function Bu(U, re) {
        for (var J = -1, me = U == null ? 0 : U.length; ++J < me; )
          if (re(U[J], J, U))
            return true;
        return false;
      }
      var s_ = Wu("length");
      function a_(U) {
        return U.split("");
      }
      function l_(U) {
        return U.match(Tu) || [];
      }
      function eg(U, re, J) {
        var me;
        return J(U, function(Re, Ge, $t) {
          if (re(Re, Ge, $t))
            return me = Ge, false;
        }), me;
      }
      function nl(U, re, J, me) {
        for (var Re = U.length, Ge = J + (me ? 1 : -1); me ? Ge-- : ++Ge < Re; )
          if (re(U[Ge], Ge, U))
            return Ge;
        return -1;
      }
      function mo(U, re, J) {
        return re === re ? w_(U, re, J) : nl(U, tg, J);
      }
      function c_(U, re, J, me) {
        for (var Re = J - 1, Ge = U.length; ++Re < Ge; )
          if (me(U[Re], re))
            return Re;
        return -1;
      }
      function tg(U) {
        return U !== U;
      }
      function rg(U, re) {
        var J = U == null ? 0 : U.length;
        return J ? Uu(U, re) / J : F;
      }
      function Wu(U) {
        return function(re) {
          return re == null ? r : re[U];
        };
      }
      function Vu(U) {
        return function(re) {
          return U == null ? r : U[re];
        };
      }
      function ng(U, re, J, me, Re) {
        return Re(U, function(Ge, $t, ft) {
          J = me ? (me = false, Ge) : re(J, Ge, $t, ft);
        }), J;
      }
      function u_(U, re) {
        var J = U.length;
        for (U.sort(re); J--; )
          U[J] = U[J].value;
        return U;
      }
      function Uu(U, re) {
        for (var J, me = -1, Re = U.length; ++me < Re; ) {
          var Ge = re(U[me]);
          Ge !== r && (J = J === r ? Ge : J + Ge);
        }
        return J;
      }
      function qu(U, re) {
        for (var J = -1, me = Array(U); ++J < U; )
          me[J] = re(J);
        return me;
      }
      function d_(U, re) {
        return yt(re, function(J) {
          return [J, U[J]];
        });
      }
      function ig(U) {
        return U && U.slice(0, lg(U) + 1).replace(Di, "");
      }
      function kr(U) {
        return function(re) {
          return U(re);
        };
      }
      function Gu(U, re) {
        return yt(re, function(J) {
          return U[J];
        });
      }
      function hs(U, re) {
        return U.has(re);
      }
      function og(U, re) {
        for (var J = -1, me = U.length; ++J < me && mo(re, U[J], 0) > -1; )
          ;
        return J;
      }
      function sg(U, re) {
        for (var J = U.length; J-- && mo(re, U[J], 0) > -1; )
          ;
        return J;
      }
      function f_(U, re) {
        for (var J = U.length, me = 0; J--; )
          U[J] === re && ++me;
        return me;
      }
      var p_ = Vu(YS), h_ = Vu(XS);
      function g_(U) {
        return "\\" + QS[U];
      }
      function v_(U, re) {
        return U == null ? r : U[re];
      }
      function bo(U) {
        return qS.test(U);
      }
      function m_(U) {
        return GS.test(U);
      }
      function b_(U) {
        for (var re, J = []; !(re = U.next()).done; )
          J.push(re.value);
        return J;
      }
      function Zu(U) {
        var re = -1, J = Array(U.size);
        return U.forEach(function(me, Re) {
          J[++re] = [Re, me];
        }), J;
      }
      function ag(U, re) {
        return function(J) {
          return U(re(J));
        };
      }
      function ui(U, re) {
        for (var J = -1, me = U.length, Re = 0, Ge = []; ++J < me; ) {
          var $t = U[J];
          ($t === re || $t === f) && (U[J] = f, Ge[Re++] = J);
        }
        return Ge;
      }
      function il(U) {
        var re = -1, J = Array(U.size);
        return U.forEach(function(me) {
          J[++re] = me;
        }), J;
      }
      function y_(U) {
        var re = -1, J = Array(U.size);
        return U.forEach(function(me) {
          J[++re] = [me, me];
        }), J;
      }
      function w_(U, re, J) {
        for (var me = J - 1, Re = U.length; ++me < Re; )
          if (U[me] === re)
            return me;
        return -1;
      }
      function x_(U, re, J) {
        for (var me = J + 1; me--; )
          if (U[me] === re)
            return me;
        return me;
      }
      function yo(U) {
        return bo(U) ? __(U) : s_(U);
      }
      function on(U) {
        return bo(U) ? E_(U) : a_(U);
      }
      function lg(U) {
        for (var re = U.length; re-- && fs.test(U.charAt(re)); )
          ;
        return re;
      }
      var S_ = Vu(JS);
      function __(U) {
        for (var re = Lu.lastIndex = 0; Lu.test(U); )
          ++re;
        return re;
      }
      function E_(U) {
        return U.match(Lu) || [];
      }
      function O_(U) {
        return U.match(US) || [];
      }
      var k_ = (function U(re) {
        re = re == null ? Zt : wo.defaults(Zt.Object(), re, wo.pick(Zt, ZS));
        var J = re.Array, me = re.Date, Re = re.Error, Ge = re.Function, $t = re.Math, ft = re.Object, Ku = re.RegExp, A_ = re.String, Wr = re.TypeError, ol = J.prototype, T_ = Ge.prototype, xo = ft.prototype, sl = re["__core-js_shared__"], al = T_.toString, Ye = xo.hasOwnProperty, R_ = 0, cg = (function() {
          var s = /[^.]+$/.exec(sl && sl.keys && sl.keys.IE_PROTO || "");
          return s ? "Symbol(src)_1." + s : "";
        })(), ll = xo.toString, C_ = al.call(ft), I_ = Zt._, P_ = Ku(
          "^" + al.call(Ye).replace(ds, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), cl = qh ? re.Buffer : r, di = re.Symbol, ul = re.Uint8Array, ug = cl ? cl.allocUnsafe : r, dl = ag(ft.getPrototypeOf, ft), dg = ft.create, fg = xo.propertyIsEnumerable, fl = ol.splice, pg = di ? di.isConcatSpreadable : r, gs = di ? di.iterator : r, $i = di ? di.toStringTag : r, pl = (function() {
          try {
            var s = Wi(ft, "defineProperty");
            return s({}, "", {}), s;
          } catch {
          }
        })(), N_ = re.clearTimeout !== Zt.clearTimeout && re.clearTimeout, M_ = me && me.now !== Zt.Date.now && me.now, D_ = re.setTimeout !== Zt.setTimeout && re.setTimeout, hl = $t.ceil, gl = $t.floor, Yu = ft.getOwnPropertySymbols, z_ = cl ? cl.isBuffer : r, hg = re.isFinite, L_ = ol.join, $_ = ag(ft.keys, ft), Ft = $t.max, tr = $t.min, F_ = me.now, H_ = re.parseInt, gg = $t.random, j_ = ol.reverse, Xu = Wi(re, "DataView"), vs = Wi(re, "Map"), Ju = Wi(re, "Promise"), So = Wi(re, "Set"), ms = Wi(re, "WeakMap"), bs = Wi(ft, "create"), vl = ms && new ms(), _o = {}, B_ = Vi(Xu), W_ = Vi(vs), V_ = Vi(Ju), U_ = Vi(So), q_ = Vi(ms), ml = di ? di.prototype : r, ys = ml ? ml.valueOf : r, vg = ml ? ml.toString : r;
        function R(s) {
          if (At(s) && !Ne(s) && !(s instanceof je)) {
            if (s instanceof Vr)
              return s;
            if (Ye.call(s, "__wrapped__"))
              return mv(s);
          }
          return new Vr(s);
        }
        var Eo = /* @__PURE__ */ (function() {
          function s() {
          }
          return function(a) {
            if (!Ot(a))
              return {};
            if (dg)
              return dg(a);
            s.prototype = a;
            var p = new s();
            return s.prototype = r, p;
          };
        })();
        function bl() {
        }
        function Vr(s, a) {
          this.__wrapped__ = s, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r;
        }
        R.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Ua,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: qa,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: cs,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: R
          }
        }, R.prototype = bl.prototype, R.prototype.constructor = R, Vr.prototype = Eo(bl.prototype), Vr.prototype.constructor = Vr;
        function je(s) {
          this.__wrapped__ = s, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = G, this.__views__ = [];
        }
        function G_() {
          var s = new je(this.__wrapped__);
          return s.__actions__ = dr(this.__actions__), s.__dir__ = this.__dir__, s.__filtered__ = this.__filtered__, s.__iteratees__ = dr(this.__iteratees__), s.__takeCount__ = this.__takeCount__, s.__views__ = dr(this.__views__), s;
        }
        function Z_() {
          if (this.__filtered__) {
            var s = new je(this);
            s.__dir__ = -1, s.__filtered__ = true;
          } else
            s = this.clone(), s.__dir__ *= -1;
          return s;
        }
        function K_() {
          var s = this.__wrapped__.value(), a = this.__dir__, p = Ne(s), _ = a < 0, k = p ? s.length : 0, C = aO(0, k, this.__views__), L = C.start, B = C.end, q = B - L, oe = _ ? B : L - 1, se = this.__iteratees__, ue = se.length, ve = 0, xe = tr(q, this.__takeCount__);
          if (!p || !_ && k == q && xe == q)
            return Hg(s, this.__actions__);
          var Ae = [];
          e:
            for (; q-- && ve < xe; ) {
              oe += a;
              for (var ze = -1, Oe = s[oe]; ++ze < ue; ) {
                var He = se[ze], Be = He.iteratee, Rr = He.type, lr = Be(Oe);
                if (Rr == K)
                  Oe = lr;
                else if (!lr) {
                  if (Rr == P)
                    continue e;
                  break e;
                }
              }
              Ae[ve++] = Oe;
            }
          return Ae;
        }
        je.prototype = Eo(bl.prototype), je.prototype.constructor = je;
        function Fi(s) {
          var a = -1, p = s == null ? 0 : s.length;
          for (this.clear(); ++a < p; ) {
            var _ = s[a];
            this.set(_[0], _[1]);
          }
        }
        function Y_() {
          this.__data__ = bs ? bs(null) : {}, this.size = 0;
        }
        function X_(s) {
          var a = this.has(s) && delete this.__data__[s];
          return this.size -= a ? 1 : 0, a;
        }
        function J_(s) {
          var a = this.__data__;
          if (bs) {
            var p = a[s];
            return p === d ? r : p;
          }
          return Ye.call(a, s) ? a[s] : r;
        }
        function Q_(s) {
          var a = this.__data__;
          return bs ? a[s] !== r : Ye.call(a, s);
        }
        function eE(s, a) {
          var p = this.__data__;
          return this.size += this.has(s) ? 0 : 1, p[s] = bs && a === r ? d : a, this;
        }
        Fi.prototype.clear = Y_, Fi.prototype.delete = X_, Fi.prototype.get = J_, Fi.prototype.has = Q_, Fi.prototype.set = eE;
        function jn(s) {
          var a = -1, p = s == null ? 0 : s.length;
          for (this.clear(); ++a < p; ) {
            var _ = s[a];
            this.set(_[0], _[1]);
          }
        }
        function tE() {
          this.__data__ = [], this.size = 0;
        }
        function rE(s) {
          var a = this.__data__, p = yl(a, s);
          if (p < 0)
            return false;
          var _ = a.length - 1;
          return p == _ ? a.pop() : fl.call(a, p, 1), --this.size, true;
        }
        function nE(s) {
          var a = this.__data__, p = yl(a, s);
          return p < 0 ? r : a[p][1];
        }
        function iE(s) {
          return yl(this.__data__, s) > -1;
        }
        function oE(s, a) {
          var p = this.__data__, _ = yl(p, s);
          return _ < 0 ? (++this.size, p.push([s, a])) : p[_][1] = a, this;
        }
        jn.prototype.clear = tE, jn.prototype.delete = rE, jn.prototype.get = nE, jn.prototype.has = iE, jn.prototype.set = oE;
        function Bn(s) {
          var a = -1, p = s == null ? 0 : s.length;
          for (this.clear(); ++a < p; ) {
            var _ = s[a];
            this.set(_[0], _[1]);
          }
        }
        function sE() {
          this.size = 0, this.__data__ = {
            hash: new Fi(),
            map: new (vs || jn)(),
            string: new Fi()
          };
        }
        function aE(s) {
          var a = Il(this, s).delete(s);
          return this.size -= a ? 1 : 0, a;
        }
        function lE(s) {
          return Il(this, s).get(s);
        }
        function cE(s) {
          return Il(this, s).has(s);
        }
        function uE(s, a) {
          var p = Il(this, s), _ = p.size;
          return p.set(s, a), this.size += p.size == _ ? 0 : 1, this;
        }
        Bn.prototype.clear = sE, Bn.prototype.delete = aE, Bn.prototype.get = lE, Bn.prototype.has = cE, Bn.prototype.set = uE;
        function Hi(s) {
          var a = -1, p = s == null ? 0 : s.length;
          for (this.__data__ = new Bn(); ++a < p; )
            this.add(s[a]);
        }
        function dE(s) {
          return this.__data__.set(s, d), this;
        }
        function fE(s) {
          return this.__data__.has(s);
        }
        Hi.prototype.add = Hi.prototype.push = dE, Hi.prototype.has = fE;
        function sn(s) {
          var a = this.__data__ = new jn(s);
          this.size = a.size;
        }
        function pE() {
          this.__data__ = new jn(), this.size = 0;
        }
        function hE(s) {
          var a = this.__data__, p = a.delete(s);
          return this.size = a.size, p;
        }
        function gE(s) {
          return this.__data__.get(s);
        }
        function vE(s) {
          return this.__data__.has(s);
        }
        function mE(s, a) {
          var p = this.__data__;
          if (p instanceof jn) {
            var _ = p.__data__;
            if (!vs || _.length < i - 1)
              return _.push([s, a]), this.size = ++p.size, this;
            p = this.__data__ = new Bn(_);
          }
          return p.set(s, a), this.size = p.size, this;
        }
        sn.prototype.clear = pE, sn.prototype.delete = hE, sn.prototype.get = gE, sn.prototype.has = vE, sn.prototype.set = mE;
        function mg(s, a) {
          var p = Ne(s), _ = !p && Ui(s), k = !p && !_ && vi(s), C = !p && !_ && !k && To(s), L = p || _ || k || C, B = L ? qu(s.length, A_) : [], q = B.length;
          for (var oe in s)
            (a || Ye.call(s, oe)) && !(L && // Safari 9 has enumerable `arguments.length` in strict mode.
            (oe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            k && (oe == "offset" || oe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            C && (oe == "buffer" || oe == "byteLength" || oe == "byteOffset") || // Skip index properties.
            Un(oe, q))) && B.push(oe);
          return B;
        }
        function bg(s) {
          var a = s.length;
          return a ? s[cd(0, a - 1)] : r;
        }
        function bE(s, a) {
          return Pl(dr(s), ji(a, 0, s.length));
        }
        function yE(s) {
          return Pl(dr(s));
        }
        function Qu(s, a, p) {
          (p !== r && !ln(s[a], p) || p === r && !(a in s)) && mn(s, a, p);
        }
        function ws(s, a, p) {
          var _ = s[a];
          (!(Ye.call(s, a) && ln(_, p)) || p === r && !(a in s)) && mn(s, a, p);
        }
        function yl(s, a) {
          for (var p = s.length; p--; )
            if (ln(s[p][0], a))
              return p;
          return -1;
        }
        function wE(s, a, p, _) {
          return fi(s, function(k, C, L) {
            a(_, k, p(k), L);
          }), _;
        }
        function yg(s, a) {
          return s && yn(a, Vt(a), s);
        }
        function xE(s, a) {
          return s && yn(a, pr(a), s);
        }
        function mn(s, a, p) {
          a == "__proto__" && pl ? pl(s, a, {
            configurable: true,
            enumerable: true,
            value: p,
            writable: true
          }) : s[a] = p;
        }
        function ed(s, a) {
          for (var p = -1, _ = a.length, k = J(_), C = s == null; ++p < _; )
            k[p] = C ? r : Dd(s, a[p]);
          return k;
        }
        function ji(s, a, p) {
          return s === s && (p !== r && (s = s <= p ? s : p), a !== r && (s = s >= a ? s : a)), s;
        }
        function Ur(s, a, p, _, k, C) {
          var L, B = a & h, q = a & b, oe = a & x;
          if (p && (L = k ? p(s, _, k, C) : p(s)), L !== r)
            return L;
          if (!Ot(s))
            return s;
          var se = Ne(s);
          if (se) {
            if (L = cO(s), !B)
              return dr(s, L);
          } else {
            var ue = rr(s), ve = ue == Me || ue == ge;
            if (vi(s))
              return Wg(s, B);
            if (ue == Mt || ue == Q || ve && !k) {
              if (L = q || ve ? {} : lv(s), !B)
                return q ? JE(s, xE(L, s)) : XE(s, yg(L, s));
            } else {
              if (!pt[ue])
                return k ? s : {};
              L = uO(s, ue, B);
            }
          }
          C || (C = new sn());
          var xe = C.get(s);
          if (xe)
            return xe;
          C.set(s, L), Lv(s) ? s.forEach(function(Oe) {
            L.add(Ur(Oe, a, p, Oe, s, C));
          }) : Dv(s) && s.forEach(function(Oe, He) {
            L.set(He, Ur(Oe, a, p, He, s, C));
          });
          var Ae = oe ? q ? wd : yd : q ? pr : Vt, ze = se ? r : Ae(s);
          return Or(ze || s, function(Oe, He) {
            ze && (He = Oe, Oe = s[He]), ws(L, He, Ur(Oe, a, p, He, s, C));
          }), L;
        }
        function SE(s) {
          var a = Vt(s);
          return function(p) {
            return wg(p, s, a);
          };
        }
        function wg(s, a, p) {
          var _ = p.length;
          if (s == null)
            return !_;
          for (s = ft(s); _--; ) {
            var k = p[_], C = a[k], L = s[k];
            if (L === r && !(k in s) || !C(L))
              return false;
          }
          return true;
        }
        function xg(s, a, p) {
          if (typeof s != "function")
            throw new Wr(l);
          return As(function() {
            s.apply(r, p);
          }, a);
        }
        function xs(s, a, p, _) {
          var k = -1, C = rl, L = true, B = s.length, q = [], oe = a.length;
          if (!B)
            return q;
          p && (a = yt(a, kr(p))), _ ? (C = Hu, L = false) : a.length >= i && (C = hs, L = false, a = new Hi(a));
          e:
            for (; ++k < B; ) {
              var se = s[k], ue = p == null ? se : p(se);
              if (se = _ || se !== 0 ? se : 0, L && ue === ue) {
                for (var ve = oe; ve--; )
                  if (a[ve] === ue)
                    continue e;
                q.push(se);
              } else C(a, ue, _) || q.push(se);
            }
          return q;
        }
        var fi = Zg(bn), Sg = Zg(rd, true);
        function _E(s, a) {
          var p = true;
          return fi(s, function(_, k, C) {
            return p = !!a(_, k, C), p;
          }), p;
        }
        function wl(s, a, p) {
          for (var _ = -1, k = s.length; ++_ < k; ) {
            var C = s[_], L = a(C);
            if (L != null && (B === r ? L === L && !Tr(L) : p(L, B)))
              var B = L, q = C;
          }
          return q;
        }
        function EE(s, a, p, _) {
          var k = s.length;
          for (p = De(p), p < 0 && (p = -p > k ? 0 : k + p), _ = _ === r || _ > k ? k : De(_), _ < 0 && (_ += k), _ = p > _ ? 0 : Fv(_); p < _; )
            s[p++] = a;
          return s;
        }
        function _g(s, a) {
          var p = [];
          return fi(s, function(_, k, C) {
            a(_, k, C) && p.push(_);
          }), p;
        }
        function Kt(s, a, p, _, k) {
          var C = -1, L = s.length;
          for (p || (p = fO), k || (k = []); ++C < L; ) {
            var B = s[C];
            a > 0 && p(B) ? a > 1 ? Kt(B, a - 1, p, _, k) : ci(k, B) : _ || (k[k.length] = B);
          }
          return k;
        }
        var td = Kg(), Eg = Kg(true);
        function bn(s, a) {
          return s && td(s, a, Vt);
        }
        function rd(s, a) {
          return s && Eg(s, a, Vt);
        }
        function xl(s, a) {
          return li(a, function(p) {
            return qn(s[p]);
          });
        }
        function Bi(s, a) {
          a = hi(a, s);
          for (var p = 0, _ = a.length; s != null && p < _; )
            s = s[an(a[p++])];
          return p && p == _ ? s : r;
        }
        function Og(s, a, p) {
          var _ = a(s);
          return Ne(s) ? _ : ci(_, p(s));
        }
        function sr(s) {
          return s == null ? s === r ? fo : Wt : $i && $i in ft(s) ? sO(s) : yO(s);
        }
        function nd(s, a) {
          return s > a;
        }
        function OE(s, a) {
          return s != null && Ye.call(s, a);
        }
        function kE(s, a) {
          return s != null && a in ft(s);
        }
        function AE(s, a, p) {
          return s >= tr(a, p) && s < Ft(a, p);
        }
        function id(s, a, p) {
          for (var _ = p ? Hu : rl, k = s[0].length, C = s.length, L = C, B = J(C), q = 1 / 0, oe = []; L--; ) {
            var se = s[L];
            L && a && (se = yt(se, kr(a))), q = tr(se.length, q), B[L] = !p && (a || k >= 120 && se.length >= 120) ? new Hi(L && se) : r;
          }
          se = s[0];
          var ue = -1, ve = B[0];
          e:
            for (; ++ue < k && oe.length < q; ) {
              var xe = se[ue], Ae = a ? a(xe) : xe;
              if (xe = p || xe !== 0 ? xe : 0, !(ve ? hs(ve, Ae) : _(oe, Ae, p))) {
                for (L = C; --L; ) {
                  var ze = B[L];
                  if (!(ze ? hs(ze, Ae) : _(s[L], Ae, p)))
                    continue e;
                }
                ve && ve.push(Ae), oe.push(xe);
              }
            }
          return oe;
        }
        function TE(s, a, p, _) {
          return bn(s, function(k, C, L) {
            a(_, p(k), C, L);
          }), _;
        }
        function Ss(s, a, p) {
          a = hi(a, s), s = fv(s, a);
          var _ = s == null ? s : s[an(Gr(a))];
          return _ == null ? r : Er(_, s, p);
        }
        function kg(s) {
          return At(s) && sr(s) == Q;
        }
        function RE(s) {
          return At(s) && sr(s) == vn;
        }
        function CE(s) {
          return At(s) && sr(s) == fe;
        }
        function _s(s, a, p, _, k) {
          return s === a ? true : s == null || a == null || !At(s) && !At(a) ? s !== s && a !== a : IE(s, a, p, _, _s, k);
        }
        function IE(s, a, p, _, k, C) {
          var L = Ne(s), B = Ne(a), q = L ? ae : rr(s), oe = B ? ae : rr(a);
          q = q == Q ? Mt : q, oe = oe == Q ? Mt : oe;
          var se = q == Mt, ue = oe == Mt, ve = q == oe;
          if (ve && vi(s)) {
            if (!vi(a))
              return false;
            L = true, se = false;
          }
          if (ve && !se)
            return C || (C = new sn()), L || To(s) ? ov(s, a, p, _, k, C) : iO(s, a, q, p, _, k, C);
          if (!(p & v)) {
            var xe = se && Ye.call(s, "__wrapped__"), Ae = ue && Ye.call(a, "__wrapped__");
            if (xe || Ae) {
              var ze = xe ? s.value() : s, Oe = Ae ? a.value() : a;
              return C || (C = new sn()), k(ze, Oe, p, _, C);
            }
          }
          return ve ? (C || (C = new sn()), oO(s, a, p, _, k, C)) : false;
        }
        function PE(s) {
          return At(s) && rr(s) == ct;
        }
        function od(s, a, p, _) {
          var k = p.length, C = k, L = !_;
          if (s == null)
            return !C;
          for (s = ft(s); k--; ) {
            var B = p[k];
            if (L && B[2] ? B[1] !== s[B[0]] : !(B[0] in s))
              return false;
          }
          for (; ++k < C; ) {
            B = p[k];
            var q = B[0], oe = s[q], se = B[1];
            if (L && B[2]) {
              if (oe === r && !(q in s))
                return false;
            } else {
              var ue = new sn();
              if (_)
                var ve = _(oe, se, q, s, a, ue);
              if (!(ve === r ? _s(se, oe, v | w, _, ue) : ve))
                return false;
            }
          }
          return true;
        }
        function Ag(s) {
          if (!Ot(s) || hO(s))
            return false;
          var a = qn(s) ? P_ : go;
          return a.test(Vi(s));
        }
        function NE(s) {
          return At(s) && sr(s) == dt;
        }
        function ME(s) {
          return At(s) && rr(s) == qe;
        }
        function DE(s) {
          return At(s) && $l(s.length) && !!vt[sr(s)];
        }
        function Tg(s) {
          return typeof s == "function" ? s : s == null ? hr : typeof s == "object" ? Ne(s) ? Ig(s[0], s[1]) : Cg(s) : Xv(s);
        }
        function sd(s) {
          if (!ks(s))
            return $_(s);
          var a = [];
          for (var p in ft(s))
            Ye.call(s, p) && p != "constructor" && a.push(p);
          return a;
        }
        function zE(s) {
          if (!Ot(s))
            return bO(s);
          var a = ks(s), p = [];
          for (var _ in s)
            _ == "constructor" && (a || !Ye.call(s, _)) || p.push(_);
          return p;
        }
        function ad(s, a) {
          return s < a;
        }
        function Rg(s, a) {
          var p = -1, _ = fr(s) ? J(s.length) : [];
          return fi(s, function(k, C, L) {
            _[++p] = a(k, C, L);
          }), _;
        }
        function Cg(s) {
          var a = Sd(s);
          return a.length == 1 && a[0][2] ? uv(a[0][0], a[0][1]) : function(p) {
            return p === s || od(p, s, a);
          };
        }
        function Ig(s, a) {
          return Ed(s) && cv(a) ? uv(an(s), a) : function(p) {
            var _ = Dd(p, s);
            return _ === r && _ === a ? zd(p, s) : _s(a, _, v | w);
          };
        }
        function Sl(s, a, p, _, k) {
          s !== a && td(a, function(C, L) {
            if (k || (k = new sn()), Ot(C))
              LE(s, a, L, p, Sl, _, k);
            else {
              var B = _ ? _(kd(s, L), C, L + "", s, a, k) : r;
              B === r && (B = C), Qu(s, L, B);
            }
          }, pr);
        }
        function LE(s, a, p, _, k, C, L) {
          var B = kd(s, p), q = kd(a, p), oe = L.get(q);
          if (oe) {
            Qu(s, p, oe);
            return;
          }
          var se = C ? C(B, q, p + "", s, a, L) : r, ue = se === r;
          if (ue) {
            var ve = Ne(q), xe = !ve && vi(q), Ae = !ve && !xe && To(q);
            se = q, ve || xe || Ae ? Ne(B) ? se = B : Ct(B) ? se = dr(B) : xe ? (ue = false, se = Wg(q, true)) : Ae ? (ue = false, se = Vg(q, true)) : se = [] : Ts(q) || Ui(q) ? (se = B, Ui(B) ? se = Hv(B) : (!Ot(B) || qn(B)) && (se = lv(q))) : ue = false;
          }
          ue && (L.set(q, se), k(se, q, _, C, L), L.delete(q)), Qu(s, p, se);
        }
        function Pg(s, a) {
          var p = s.length;
          if (p)
            return a += a < 0 ? p : 0, Un(a, p) ? s[a] : r;
        }
        function Ng(s, a, p) {
          a.length ? a = yt(a, function(C) {
            return Ne(C) ? function(L) {
              return Bi(L, C.length === 1 ? C[0] : C);
            } : C;
          }) : a = [hr];
          var _ = -1;
          a = yt(a, kr(ke()));
          var k = Rg(s, function(C, L, B) {
            var q = yt(a, function(oe) {
              return oe(C);
            });
            return { criteria: q, index: ++_, value: C };
          });
          return u_(k, function(C, L) {
            return YE(C, L, p);
          });
        }
        function $E(s, a) {
          return Mg(s, a, function(p, _) {
            return zd(s, _);
          });
        }
        function Mg(s, a, p) {
          for (var _ = -1, k = a.length, C = {}; ++_ < k; ) {
            var L = a[_], B = Bi(s, L);
            p(B, L) && Es(C, hi(L, s), B);
          }
          return C;
        }
        function FE(s) {
          return function(a) {
            return Bi(a, s);
          };
        }
        function ld(s, a, p, _) {
          var k = _ ? c_ : mo, C = -1, L = a.length, B = s;
          for (s === a && (a = dr(a)), p && (B = yt(s, kr(p))); ++C < L; )
            for (var q = 0, oe = a[C], se = p ? p(oe) : oe; (q = k(B, se, q, _)) > -1; )
              B !== s && fl.call(B, q, 1), fl.call(s, q, 1);
          return s;
        }
        function Dg(s, a) {
          for (var p = s ? a.length : 0, _ = p - 1; p--; ) {
            var k = a[p];
            if (p == _ || k !== C) {
              var C = k;
              Un(k) ? fl.call(s, k, 1) : fd(s, k);
            }
          }
          return s;
        }
        function cd(s, a) {
          return s + gl(gg() * (a - s + 1));
        }
        function HE(s, a, p, _) {
          for (var k = -1, C = Ft(hl((a - s) / (p || 1)), 0), L = J(C); C--; )
            L[_ ? C : ++k] = s, s += p;
          return L;
        }
        function ud(s, a) {
          var p = "";
          if (!s || a < 1 || a > he)
            return p;
          do
            a % 2 && (p += s), a = gl(a / 2), a && (s += s);
          while (a);
          return p;
        }
        function $e(s, a) {
          return Ad(dv(s, a, hr), s + "");
        }
        function jE(s) {
          return bg(Ro(s));
        }
        function BE(s, a) {
          var p = Ro(s);
          return Pl(p, ji(a, 0, p.length));
        }
        function Es(s, a, p, _) {
          if (!Ot(s))
            return s;
          a = hi(a, s);
          for (var k = -1, C = a.length, L = C - 1, B = s; B != null && ++k < C; ) {
            var q = an(a[k]), oe = p;
            if (q === "__proto__" || q === "constructor" || q === "prototype")
              return s;
            if (k != L) {
              var se = B[q];
              oe = _ ? _(se, q, B) : r, oe === r && (oe = Ot(se) ? se : Un(a[k + 1]) ? [] : {});
            }
            ws(B, q, oe), B = B[q];
          }
          return s;
        }
        var zg = vl ? function(s, a) {
          return vl.set(s, a), s;
        } : hr, WE = pl ? function(s, a) {
          return pl(s, "toString", {
            configurable: true,
            enumerable: false,
            value: $d(a),
            writable: true
          });
        } : hr;
        function VE(s) {
          return Pl(Ro(s));
        }
        function qr(s, a, p) {
          var _ = -1, k = s.length;
          a < 0 && (a = -a > k ? 0 : k + a), p = p > k ? k : p, p < 0 && (p += k), k = a > p ? 0 : p - a >>> 0, a >>>= 0;
          for (var C = J(k); ++_ < k; )
            C[_] = s[_ + a];
          return C;
        }
        function UE(s, a) {
          var p;
          return fi(s, function(_, k, C) {
            return p = a(_, k, C), !p;
          }), !!p;
        }
        function _l(s, a, p) {
          var _ = 0, k = s == null ? _ : s.length;
          if (typeof a == "number" && a === a && k <= Y) {
            for (; _ < k; ) {
              var C = _ + k >>> 1, L = s[C];
              L !== null && !Tr(L) && (p ? L <= a : L < a) ? _ = C + 1 : k = C;
            }
            return k;
          }
          return dd(s, a, hr, p);
        }
        function dd(s, a, p, _) {
          var k = 0, C = s == null ? 0 : s.length;
          if (C === 0)
            return 0;
          a = p(a);
          for (var L = a !== a, B = a === null, q = Tr(a), oe = a === r; k < C; ) {
            var se = gl((k + C) / 2), ue = p(s[se]), ve = ue !== r, xe = ue === null, Ae = ue === ue, ze = Tr(ue);
            if (L)
              var Oe = _ || Ae;
            else oe ? Oe = Ae && (_ || ve) : B ? Oe = Ae && ve && (_ || !xe) : q ? Oe = Ae && ve && !xe && (_ || !ze) : xe || ze ? Oe = false : Oe = _ ? ue <= a : ue < a;
            Oe ? k = se + 1 : C = se;
          }
          return tr(C, te);
        }
        function Lg(s, a) {
          for (var p = -1, _ = s.length, k = 0, C = []; ++p < _; ) {
            var L = s[p], B = a ? a(L) : L;
            if (!p || !ln(B, q)) {
              var q = B;
              C[k++] = L === 0 ? 0 : L;
            }
          }
          return C;
        }
        function $g(s) {
          return typeof s == "number" ? s : Tr(s) ? F : +s;
        }
        function Ar(s) {
          if (typeof s == "string")
            return s;
          if (Ne(s))
            return yt(s, Ar) + "";
          if (Tr(s))
            return vg ? vg.call(s) : "";
          var a = s + "";
          return a == "0" && 1 / s == -ne ? "-0" : a;
        }
        function pi(s, a, p) {
          var _ = -1, k = rl, C = s.length, L = true, B = [], q = B;
          if (p)
            L = false, k = Hu;
          else if (C >= i) {
            var oe = a ? null : rO(s);
            if (oe)
              return il(oe);
            L = false, k = hs, q = new Hi();
          } else
            q = a ? [] : B;
          e:
            for (; ++_ < C; ) {
              var se = s[_], ue = a ? a(se) : se;
              if (se = p || se !== 0 ? se : 0, L && ue === ue) {
                for (var ve = q.length; ve--; )
                  if (q[ve] === ue)
                    continue e;
                a && q.push(ue), B.push(se);
              } else k(q, ue, p) || (q !== B && q.push(ue), B.push(se));
            }
          return B;
        }
        function fd(s, a) {
          a = hi(a, s);
          var p = -1, _ = a.length;
          if (!_)
            return true;
          for (; ++p < _; ) {
            var k = an(a[p]);
            if (k === "__proto__" && !Ye.call(s, "__proto__") || (k === "constructor" || k === "prototype") && p < _ - 1)
              return false;
          }
          var C = fv(s, a);
          return C == null || delete C[an(Gr(a))];
        }
        function Fg(s, a, p, _) {
          return Es(s, a, p(Bi(s, a)), _);
        }
        function El(s, a, p, _) {
          for (var k = s.length, C = _ ? k : -1; (_ ? C-- : ++C < k) && a(s[C], C, s); )
            ;
          return p ? qr(s, _ ? 0 : C, _ ? C + 1 : k) : qr(s, _ ? C + 1 : 0, _ ? k : C);
        }
        function Hg(s, a) {
          var p = s;
          return p instanceof je && (p = p.value()), ju(a, function(_, k) {
            return k.func.apply(k.thisArg, ci([_], k.args));
          }, p);
        }
        function pd(s, a, p) {
          var _ = s.length;
          if (_ < 2)
            return _ ? pi(s[0]) : [];
          for (var k = -1, C = J(_); ++k < _; )
            for (var L = s[k], B = -1; ++B < _; )
              B != k && (C[k] = xs(C[k] || L, s[B], a, p));
          return pi(Kt(C, 1), a, p);
        }
        function jg(s, a, p) {
          for (var _ = -1, k = s.length, C = a.length, L = {}; ++_ < k; ) {
            var B = _ < C ? a[_] : r;
            p(L, s[_], B);
          }
          return L;
        }
        function hd(s) {
          return Ct(s) ? s : [];
        }
        function gd(s) {
          return typeof s == "function" ? s : hr;
        }
        function hi(s, a) {
          return Ne(s) ? s : Ed(s, a) ? [s] : vv(Xe(s));
        }
        var qE = $e;
        function gi(s, a, p) {
          var _ = s.length;
          return p = p === r ? _ : p, !a && p >= _ ? s : qr(s, a, p);
        }
        var Bg = N_ || function(s) {
          return Zt.clearTimeout(s);
        };
        function Wg(s, a) {
          if (a)
            return s.slice();
          var p = s.length, _ = ug ? ug(p) : new s.constructor(p);
          return s.copy(_), _;
        }
        function vd(s) {
          var a = new s.constructor(s.byteLength);
          return new ul(a).set(new ul(s)), a;
        }
        function GE(s, a) {
          var p = a ? vd(s.buffer) : s.buffer;
          return new s.constructor(p, s.byteOffset, s.byteLength);
        }
        function ZE(s) {
          var a = new s.constructor(s.source, Fn.exec(s));
          return a.lastIndex = s.lastIndex, a;
        }
        function KE(s) {
          return ys ? ft(ys.call(s)) : {};
        }
        function Vg(s, a) {
          var p = a ? vd(s.buffer) : s.buffer;
          return new s.constructor(p, s.byteOffset, s.length);
        }
        function Ug(s, a) {
          if (s !== a) {
            var p = s !== r, _ = s === null, k = s === s, C = Tr(s), L = a !== r, B = a === null, q = a === a, oe = Tr(a);
            if (!B && !oe && !C && s > a || C && L && q && !B && !oe || _ && L && q || !p && q || !k)
              return 1;
            if (!_ && !C && !oe && s < a || oe && p && k && !_ && !C || B && p && k || !L && k || !q)
              return -1;
          }
          return 0;
        }
        function YE(s, a, p) {
          for (var _ = -1, k = s.criteria, C = a.criteria, L = k.length, B = p.length; ++_ < L; ) {
            var q = Ug(k[_], C[_]);
            if (q) {
              if (_ >= B)
                return q;
              var oe = p[_];
              return q * (oe == "desc" ? -1 : 1);
            }
          }
          return s.index - a.index;
        }
        function qg(s, a, p, _) {
          for (var k = -1, C = s.length, L = p.length, B = -1, q = a.length, oe = Ft(C - L, 0), se = J(q + oe), ue = !_; ++B < q; )
            se[B] = a[B];
          for (; ++k < L; )
            (ue || k < C) && (se[p[k]] = s[k]);
          for (; oe--; )
            se[B++] = s[k++];
          return se;
        }
        function Gg(s, a, p, _) {
          for (var k = -1, C = s.length, L = -1, B = p.length, q = -1, oe = a.length, se = Ft(C - B, 0), ue = J(se + oe), ve = !_; ++k < se; )
            ue[k] = s[k];
          for (var xe = k; ++q < oe; )
            ue[xe + q] = a[q];
          for (; ++L < B; )
            (ve || k < C) && (ue[xe + p[L]] = s[k++]);
          return ue;
        }
        function dr(s, a) {
          var p = -1, _ = s.length;
          for (a || (a = J(_)); ++p < _; )
            a[p] = s[p];
          return a;
        }
        function yn(s, a, p, _) {
          var k = !p;
          p || (p = {});
          for (var C = -1, L = a.length; ++C < L; ) {
            var B = a[C], q = _ ? _(p[B], s[B], B, p, s) : r;
            q === r && (q = s[B]), k ? mn(p, B, q) : ws(p, B, q);
          }
          return p;
        }
        function XE(s, a) {
          return yn(s, _d(s), a);
        }
        function JE(s, a) {
          return yn(s, sv(s), a);
        }
        function Ol(s, a) {
          return function(p, _) {
            var k = Ne(p) ? n_ : wE, C = a ? a() : {};
            return k(p, s, ke(_, 2), C);
          };
        }
        function Oo(s) {
          return $e(function(a, p) {
            var _ = -1, k = p.length, C = k > 1 ? p[k - 1] : r, L = k > 2 ? p[2] : r;
            for (C = s.length > 3 && typeof C == "function" ? (k--, C) : r, L && ar(p[0], p[1], L) && (C = k < 3 ? r : C, k = 1), a = ft(a); ++_ < k; ) {
              var B = p[_];
              B && s(a, B, _, C);
            }
            return a;
          });
        }
        function Zg(s, a) {
          return function(p, _) {
            if (p == null)
              return p;
            if (!fr(p))
              return s(p, _);
            for (var k = p.length, C = a ? k : -1, L = ft(p); (a ? C-- : ++C < k) && _(L[C], C, L) !== false; )
              ;
            return p;
          };
        }
        function Kg(s) {
          return function(a, p, _) {
            for (var k = -1, C = ft(a), L = _(a), B = L.length; B--; ) {
              var q = L[s ? B : ++k];
              if (p(C[q], q, C) === false)
                break;
            }
            return a;
          };
        }
        function QE(s, a, p) {
          var _ = a & m, k = Os(s);
          function C() {
            var L = this && this !== Zt && this instanceof C ? k : s;
            return L.apply(_ ? p : this, arguments);
          }
          return C;
        }
        function Yg(s) {
          return function(a) {
            a = Xe(a);
            var p = bo(a) ? on(a) : r, _ = p ? p[0] : a.charAt(0), k = p ? gi(p, 1).join("") : a.slice(1);
            return _[s]() + k;
          };
        }
        function ko(s) {
          return function(a) {
            return ju(Kv(Zv(a).replace(WS, "")), s, "");
          };
        }
        function Os(s) {
          return function() {
            var a = arguments;
            switch (a.length) {
              case 0:
                return new s();
              case 1:
                return new s(a[0]);
              case 2:
                return new s(a[0], a[1]);
              case 3:
                return new s(a[0], a[1], a[2]);
              case 4:
                return new s(a[0], a[1], a[2], a[3]);
              case 5:
                return new s(a[0], a[1], a[2], a[3], a[4]);
              case 6:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5]);
              case 7:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            }
            var p = Eo(s.prototype), _ = s.apply(p, a);
            return Ot(_) ? _ : p;
          };
        }
        function eO(s, a, p) {
          var _ = Os(s);
          function k() {
            for (var C = arguments.length, L = J(C), B = C, q = Ao(k); B--; )
              L[B] = arguments[B];
            var oe = C < 3 && L[0] !== q && L[C - 1] !== q ? [] : ui(L, q);
            if (C -= oe.length, C < p)
              return tv(
                s,
                a,
                kl,
                k.placeholder,
                r,
                L,
                oe,
                r,
                r,
                p - C
              );
            var se = this && this !== Zt && this instanceof k ? _ : s;
            return Er(se, this, L);
          }
          return k;
        }
        function Xg(s) {
          return function(a, p, _) {
            var k = ft(a);
            if (!fr(a)) {
              var C = ke(p, 3);
              a = Vt(a), p = function(B) {
                return C(k[B], B, k);
              };
            }
            var L = s(a, p, _);
            return L > -1 ? k[C ? a[L] : L] : r;
          };
        }
        function Jg(s) {
          return Vn(function(a) {
            var p = a.length, _ = p, k = Vr.prototype.thru;
            for (s && a.reverse(); _--; ) {
              var C = a[_];
              if (typeof C != "function")
                throw new Wr(l);
              if (k && !L && Cl(C) == "wrapper")
                var L = new Vr([], true);
            }
            for (_ = L ? _ : p; ++_ < p; ) {
              C = a[_];
              var B = Cl(C), q = B == "wrapper" ? xd(C) : r;
              q && Od(q[0]) && q[1] == (T | O | A | D) && !q[4].length && q[9] == 1 ? L = L[Cl(q[0])].apply(L, q[3]) : L = C.length == 1 && Od(C) ? L[B]() : L.thru(C);
            }
            return function() {
              var oe = arguments, se = oe[0];
              if (L && oe.length == 1 && Ne(se))
                return L.plant(se).value();
              for (var ue = 0, ve = p ? a[ue].apply(this, oe) : se; ++ue < p; )
                ve = a[ue].call(this, ve);
              return ve;
            };
          });
        }
        function kl(s, a, p, _, k, C, L, B, q, oe) {
          var se = a & T, ue = a & m, ve = a & y, xe = a & (O | E), Ae = a & j, ze = ve ? r : Os(s);
          function Oe() {
            for (var He = arguments.length, Be = J(He), Rr = He; Rr--; )
              Be[Rr] = arguments[Rr];
            if (xe)
              var lr = Ao(Oe), Cr = f_(Be, lr);
            if (_ && (Be = qg(Be, _, k, xe)), C && (Be = Gg(Be, C, L, xe)), He -= Cr, xe && He < oe) {
              var It = ui(Be, lr);
              return tv(
                s,
                a,
                kl,
                Oe.placeholder,
                p,
                Be,
                It,
                B,
                q,
                oe - He
              );
            }
            var cn = ue ? p : this, Zn = ve ? cn[s] : s;
            return He = Be.length, B ? Be = wO(Be, B) : Ae && He > 1 && Be.reverse(), se && q < He && (Be.length = q), this && this !== Zt && this instanceof Oe && (Zn = ze || Os(Zn)), Zn.apply(cn, Be);
          }
          return Oe;
        }
        function Qg(s, a) {
          return function(p, _) {
            return TE(p, s, a(_), {});
          };
        }
        function Al(s, a) {
          return function(p, _) {
            var k;
            if (p === r && _ === r)
              return a;
            if (p !== r && (k = p), _ !== r) {
              if (k === r)
                return _;
              typeof p == "string" || typeof _ == "string" ? (p = Ar(p), _ = Ar(_)) : (p = $g(p), _ = $g(_)), k = s(p, _);
            }
            return k;
          };
        }
        function md(s) {
          return Vn(function(a) {
            return a = yt(a, kr(ke())), $e(function(p) {
              var _ = this;
              return s(a, function(k) {
                return Er(k, _, p);
              });
            });
          });
        }
        function Tl(s, a) {
          a = a === r ? " " : Ar(a);
          var p = a.length;
          if (p < 2)
            return p ? ud(a, s) : a;
          var _ = ud(a, hl(s / yo(a)));
          return bo(a) ? gi(on(_), 0, s).join("") : _.slice(0, s);
        }
        function tO(s, a, p, _) {
          var k = a & m, C = Os(s);
          function L() {
            for (var B = -1, q = arguments.length, oe = -1, se = _.length, ue = J(se + q), ve = this && this !== Zt && this instanceof L ? C : s; ++oe < se; )
              ue[oe] = _[oe];
            for (; q--; )
              ue[oe++] = arguments[++B];
            return Er(ve, k ? p : this, ue);
          }
          return L;
        }
        function ev(s) {
          return function(a, p, _) {
            return _ && typeof _ != "number" && ar(a, p, _) && (p = _ = r), a = Gn(a), p === r ? (p = a, a = 0) : p = Gn(p), _ = _ === r ? a < p ? 1 : -1 : Gn(_), HE(a, p, _, s);
          };
        }
        function Rl(s) {
          return function(a, p) {
            return typeof a == "string" && typeof p == "string" || (a = Zr(a), p = Zr(p)), s(a, p);
          };
        }
        function tv(s, a, p, _, k, C, L, B, q, oe) {
          var se = a & O, ue = se ? L : r, ve = se ? r : L, xe = se ? C : r, Ae = se ? r : C;
          a |= se ? A : $, a &= ~(se ? $ : A), a & S || (a &= -4);
          var ze = [
            s,
            a,
            k,
            xe,
            ue,
            Ae,
            ve,
            B,
            q,
            oe
          ], Oe = p.apply(r, ze);
          return Od(s) && pv(Oe, ze), Oe.placeholder = _, hv(Oe, s, a);
        }
        function bd(s) {
          var a = $t[s];
          return function(p, _) {
            if (p = Zr(p), _ = _ == null ? 0 : tr(De(_), 292), _ && hg(p)) {
              var k = (Xe(p) + "e").split("e"), C = a(k[0] + "e" + (+k[1] + _));
              return k = (Xe(C) + "e").split("e"), +(k[0] + "e" + (+k[1] - _));
            }
            return a(p);
          };
        }
        var rO = So && 1 / il(new So([, -0]))[1] == ne ? function(s) {
          return new So(s);
        } : jd;
        function rv(s) {
          return function(a) {
            var p = rr(a);
            return p == ct ? Zu(a) : p == qe ? y_(a) : d_(a, s(a));
          };
        }
        function Wn(s, a, p, _, k, C, L, B) {
          var q = a & y;
          if (!q && typeof s != "function")
            throw new Wr(l);
          var oe = _ ? _.length : 0;
          if (oe || (a &= -97, _ = k = r), L = L === r ? L : Ft(De(L), 0), B = B === r ? B : De(B), oe -= k ? k.length : 0, a & $) {
            var se = _, ue = k;
            _ = k = r;
          }
          var ve = q ? r : xd(s), xe = [
            s,
            a,
            p,
            _,
            k,
            se,
            ue,
            C,
            L,
            B
          ];
          if (ve && mO(xe, ve), s = xe[0], a = xe[1], p = xe[2], _ = xe[3], k = xe[4], B = xe[9] = xe[9] === r ? q ? 0 : s.length : Ft(xe[9] - oe, 0), !B && a & (O | E) && (a &= -25), !a || a == m)
            var Ae = QE(s, a, p);
          else a == O || a == E ? Ae = eO(s, a, B) : (a == A || a == (m | A)) && !k.length ? Ae = tO(s, a, p, _) : Ae = kl.apply(r, xe);
          var ze = ve ? zg : pv;
          return hv(ze(Ae, xe), s, a);
        }
        function nv(s, a, p, _) {
          return s === r || ln(s, xo[p]) && !Ye.call(_, p) ? a : s;
        }
        function iv(s, a, p, _, k, C) {
          return Ot(s) && Ot(a) && (C.set(a, s), Sl(s, a, r, iv, C), C.delete(a)), s;
        }
        function nO(s) {
          return Ts(s) ? r : s;
        }
        function ov(s, a, p, _, k, C) {
          var L = p & v, B = s.length, q = a.length;
          if (B != q && !(L && q > B))
            return false;
          var oe = C.get(s), se = C.get(a);
          if (oe && se)
            return oe == a && se == s;
          var ue = -1, ve = true, xe = p & w ? new Hi() : r;
          for (C.set(s, a), C.set(a, s); ++ue < B; ) {
            var Ae = s[ue], ze = a[ue];
            if (_)
              var Oe = L ? _(ze, Ae, ue, a, s, C) : _(Ae, ze, ue, s, a, C);
            if (Oe !== r) {
              if (Oe)
                continue;
              ve = false;
              break;
            }
            if (xe) {
              if (!Bu(a, function(He, Be) {
                if (!hs(xe, Be) && (Ae === He || k(Ae, He, p, _, C)))
                  return xe.push(Be);
              })) {
                ve = false;
                break;
              }
            } else if (!(Ae === ze || k(Ae, ze, p, _, C))) {
              ve = false;
              break;
            }
          }
          return C.delete(s), C.delete(a), ve;
        }
        function iO(s, a, p, _, k, C, L) {
          switch (p) {
            case $n:
              if (s.byteLength != a.byteLength || s.byteOffset != a.byteOffset)
                return false;
              s = s.buffer, a = a.buffer;
            case vn:
              return !(s.byteLength != a.byteLength || !C(new ul(s), new ul(a)));
            case ee:
            case fe:
            case bt:
              return ln(+s, +a);
            case Z:
              return s.name == a.name && s.message == a.message;
            case dt:
            case Fr:
              return s == a + "";
            case ct:
              var B = Zu;
            case qe:
              var q = _ & v;
              if (B || (B = il), s.size != a.size && !q)
                return false;
              var oe = L.get(s);
              if (oe)
                return oe == a;
              _ |= w, L.set(s, a);
              var se = ov(B(s), B(a), _, k, C, L);
              return L.delete(s), se;
            case ir:
              if (ys)
                return ys.call(s) == ys.call(a);
          }
          return false;
        }
        function oO(s, a, p, _, k, C) {
          var L = p & v, B = yd(s), q = B.length, oe = yd(a), se = oe.length;
          if (q != se && !L)
            return false;
          for (var ue = q; ue--; ) {
            var ve = B[ue];
            if (!(L ? ve in a : Ye.call(a, ve)))
              return false;
          }
          var xe = C.get(s), Ae = C.get(a);
          if (xe && Ae)
            return xe == a && Ae == s;
          var ze = true;
          C.set(s, a), C.set(a, s);
          for (var Oe = L; ++ue < q; ) {
            ve = B[ue];
            var He = s[ve], Be = a[ve];
            if (_)
              var Rr = L ? _(Be, He, ve, a, s, C) : _(He, Be, ve, s, a, C);
            if (!(Rr === r ? He === Be || k(He, Be, p, _, C) : Rr)) {
              ze = false;
              break;
            }
            Oe || (Oe = ve == "constructor");
          }
          if (ze && !Oe) {
            var lr = s.constructor, Cr = a.constructor;
            lr != Cr && "constructor" in s && "constructor" in a && !(typeof lr == "function" && lr instanceof lr && typeof Cr == "function" && Cr instanceof Cr) && (ze = false);
          }
          return C.delete(s), C.delete(a), ze;
        }
        function Vn(s) {
          return Ad(dv(s, r, wv), s + "");
        }
        function yd(s) {
          return Og(s, Vt, _d);
        }
        function wd(s) {
          return Og(s, pr, sv);
        }
        var xd = vl ? function(s) {
          return vl.get(s);
        } : jd;
        function Cl(s) {
          for (var a = s.name + "", p = _o[a], _ = Ye.call(_o, a) ? p.length : 0; _--; ) {
            var k = p[_], C = k.func;
            if (C == null || C == s)
              return k.name;
          }
          return a;
        }
        function Ao(s) {
          var a = Ye.call(R, "placeholder") ? R : s;
          return a.placeholder;
        }
        function ke() {
          var s = R.iteratee || Fd;
          return s = s === Fd ? Tg : s, arguments.length ? s(arguments[0], arguments[1]) : s;
        }
        function Il(s, a) {
          var p = s.__data__;
          return pO(a) ? p[typeof a == "string" ? "string" : "hash"] : p.map;
        }
        function Sd(s) {
          for (var a = Vt(s), p = a.length; p--; ) {
            var _ = a[p], k = s[_];
            a[p] = [_, k, cv(k)];
          }
          return a;
        }
        function Wi(s, a) {
          var p = v_(s, a);
          return Ag(p) ? p : r;
        }
        function sO(s) {
          var a = Ye.call(s, $i), p = s[$i];
          try {
            s[$i] = r;
            var _ = true;
          } catch {
          }
          var k = ll.call(s);
          return _ && (a ? s[$i] = p : delete s[$i]), k;
        }
        var _d = Yu ? function(s) {
          return s == null ? [] : (s = ft(s), li(Yu(s), function(a) {
            return fg.call(s, a);
          }));
        } : Bd, sv = Yu ? function(s) {
          for (var a = []; s; )
            ci(a, _d(s)), s = dl(s);
          return a;
        } : Bd, rr = sr;
        (Xu && rr(new Xu(new ArrayBuffer(1))) != $n || vs && rr(new vs()) != ct || Ju && rr(Ju.resolve()) != Lt || So && rr(new So()) != qe || ms && rr(new ms()) != tn) && (rr = function(s) {
          var a = sr(s), p = a == Mt ? s.constructor : r, _ = p ? Vi(p) : "";
          if (_)
            switch (_) {
              case B_:
                return $n;
              case W_:
                return ct;
              case V_:
                return Lt;
              case U_:
                return qe;
              case q_:
                return tn;
            }
          return a;
        });
        function aO(s, a, p) {
          for (var _ = -1, k = p.length; ++_ < k; ) {
            var C = p[_], L = C.size;
            switch (C.type) {
              case "drop":
                s += L;
                break;
              case "dropRight":
                a -= L;
                break;
              case "take":
                a = tr(a, s + L);
                break;
              case "takeRight":
                s = Ft(s, a - L);
                break;
            }
          }
          return { start: s, end: a };
        }
        function lO(s) {
          var a = s.match(Ya);
          return a ? a[1].split(Xa) : [];
        }
        function av(s, a, p) {
          a = hi(a, s);
          for (var _ = -1, k = a.length, C = false; ++_ < k; ) {
            var L = an(a[_]);
            if (!(C = s != null && p(s, L)))
              break;
            s = s[L];
          }
          return C || ++_ != k ? C : (k = s == null ? 0 : s.length, !!k && $l(k) && Un(L, k) && (Ne(s) || Ui(s)));
        }
        function cO(s) {
          var a = s.length, p = new s.constructor(a);
          return a && typeof s[0] == "string" && Ye.call(s, "index") && (p.index = s.index, p.input = s.input), p;
        }
        function lv(s) {
          return typeof s.constructor == "function" && !ks(s) ? Eo(dl(s)) : {};
        }
        function uO(s, a, p) {
          var _ = s.constructor;
          switch (a) {
            case vn:
              return vd(s);
            case ee:
            case fe:
              return new _(+s);
            case $n:
              return GE(s, p);
            case yr:
            case rn:
            case po:
            case os:
            case ho:
            case Ni:
            case si:
            case wr:
            case ss:
              return Vg(s, p);
            case ct:
              return new _();
            case bt:
            case Fr:
              return new _(s);
            case dt:
              return ZE(s);
            case qe:
              return new _();
            case ir:
              return KE(s);
          }
        }
        function dO(s, a) {
          var p = a.length;
          if (!p)
            return s;
          var _ = p - 1;
          return a[_] = (p > 1 ? "& " : "") + a[_], a = a.join(p > 2 ? ", " : " "), s.replace(Ka, `{
/* [wrapped with ` + a + `] */
`);
        }
        function fO(s) {
          return Ne(s) || Ui(s) || !!(pg && s && s[pg]);
        }
        function Un(s, a) {
          var p = typeof s;
          return a = a ?? he, !!a && (p == "number" || p != "symbol" && Iu.test(s)) && s > -1 && s % 1 == 0 && s < a;
        }
        function ar(s, a, p) {
          if (!Ot(p))
            return false;
          var _ = typeof a;
          return (_ == "number" ? fr(p) && Un(a, p.length) : _ == "string" && a in p) ? ln(p[a], s) : false;
        }
        function Ed(s, a) {
          if (Ne(s))
            return false;
          var p = typeof s;
          return p == "number" || p == "symbol" || p == "boolean" || s == null || Tr(s) ? true : Mi.test(s) || !Ga.test(s) || a != null && s in ft(a);
        }
        function pO(s) {
          var a = typeof s;
          return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? s !== "__proto__" : s === null;
        }
        function Od(s) {
          var a = Cl(s), p = R[a];
          if (typeof p != "function" || !(a in je.prototype))
            return false;
          if (s === p)
            return true;
          var _ = xd(p);
          return !!_ && s === _[0];
        }
        function hO(s) {
          return !!cg && cg in s;
        }
        var gO = sl ? qn : Wd;
        function ks(s) {
          var a = s && s.constructor, p = typeof a == "function" && a.prototype || xo;
          return s === p;
        }
        function cv(s) {
          return s === s && !Ot(s);
        }
        function uv(s, a) {
          return function(p) {
            return p == null ? false : p[s] === a && (a !== r || s in ft(p));
          };
        }
        function vO(s) {
          var a = zl(s, function(_) {
            return p.size === g && p.clear(), _;
          }), p = a.cache;
          return a;
        }
        function mO(s, a) {
          var p = s[1], _ = a[1], k = p | _, C = k < (m | y | T), L = _ == T && p == O || _ == T && p == D && s[7].length <= a[8] || _ == (T | D) && a[7].length <= a[8] && p == O;
          if (!(C || L))
            return s;
          _ & m && (s[2] = a[2], k |= p & m ? 0 : S);
          var B = a[3];
          if (B) {
            var q = s[3];
            s[3] = q ? qg(q, B, a[4]) : B, s[4] = q ? ui(s[3], f) : a[4];
          }
          return B = a[5], B && (q = s[5], s[5] = q ? Gg(q, B, a[6]) : B, s[6] = q ? ui(s[5], f) : a[6]), B = a[7], B && (s[7] = B), _ & T && (s[8] = s[8] == null ? a[8] : tr(s[8], a[8])), s[9] == null && (s[9] = a[9]), s[0] = a[0], s[1] = k, s;
        }
        function bO(s) {
          var a = [];
          if (s != null)
            for (var p in ft(s))
              a.push(p);
          return a;
        }
        function yO(s) {
          return ll.call(s);
        }
        function dv(s, a, p) {
          return a = Ft(a === r ? s.length - 1 : a, 0), function() {
            for (var _ = arguments, k = -1, C = Ft(_.length - a, 0), L = J(C); ++k < C; )
              L[k] = _[a + k];
            k = -1;
            for (var B = J(a + 1); ++k < a; )
              B[k] = _[k];
            return B[a] = p(L), Er(s, this, B);
          };
        }
        function fv(s, a) {
          return a.length < 2 ? s : Bi(s, qr(a, 0, -1));
        }
        function wO(s, a) {
          for (var p = s.length, _ = tr(a.length, p), k = dr(s); _--; ) {
            var C = a[_];
            s[_] = Un(C, p) ? k[C] : r;
          }
          return s;
        }
        function kd(s, a) {
          if (!(a === "constructor" && typeof s[a] == "function") && a != "__proto__")
            return s[a];
        }
        var pv = gv(zg), As = D_ || function(s, a) {
          return Zt.setTimeout(s, a);
        }, Ad = gv(WE);
        function hv(s, a, p) {
          var _ = a + "";
          return Ad(s, dO(_, xO(lO(_), p)));
        }
        function gv(s) {
          var a = 0, p = 0;
          return function() {
            var _ = F_(), k = V - (_ - p);
            if (p = _, k > 0) {
              if (++a >= W)
                return arguments[0];
            } else
              a = 0;
            return s.apply(r, arguments);
          };
        }
        function Pl(s, a) {
          var p = -1, _ = s.length, k = _ - 1;
          for (a = a === r ? _ : a; ++p < a; ) {
            var C = cd(p, k), L = s[C];
            s[C] = s[p], s[p] = L;
          }
          return s.length = a, s;
        }
        var vv = vO(function(s) {
          var a = [];
          return s.charCodeAt(0) === 46 && a.push(""), s.replace(us, function(p, _, k, C) {
            a.push(k ? C.replace(Qa, "$1") : _ || p);
          }), a;
        });
        function an(s) {
          if (typeof s == "string" || Tr(s))
            return s;
          var a = s + "";
          return a == "0" && 1 / s == -ne ? "-0" : a;
        }
        function Vi(s) {
          if (s != null) {
            try {
              return al.call(s);
            } catch {
            }
            try {
              return s + "";
            } catch {
            }
          }
          return "";
        }
        function xO(s, a) {
          return Or(ie, function(p) {
            var _ = "_." + p[0];
            a & p[1] && !rl(s, _) && s.push(_);
          }), s.sort();
        }
        function mv(s) {
          if (s instanceof je)
            return s.clone();
          var a = new Vr(s.__wrapped__, s.__chain__);
          return a.__actions__ = dr(s.__actions__), a.__index__ = s.__index__, a.__values__ = s.__values__, a;
        }
        function SO(s, a, p) {
          (p ? ar(s, a, p) : a === r) ? a = 1 : a = Ft(De(a), 0);
          var _ = s == null ? 0 : s.length;
          if (!_ || a < 1)
            return [];
          for (var k = 0, C = 0, L = J(hl(_ / a)); k < _; )
            L[C++] = qr(s, k, k += a);
          return L;
        }
        function _O(s) {
          for (var a = -1, p = s == null ? 0 : s.length, _ = 0, k = []; ++a < p; ) {
            var C = s[a];
            C && (k[_++] = C);
          }
          return k;
        }
        function EO() {
          var s = arguments.length;
          if (!s)
            return [];
          for (var a = J(s - 1), p = arguments[0], _ = s; _--; )
            a[_ - 1] = arguments[_];
          return ci(Ne(p) ? dr(p) : [p], Kt(a, 1));
        }
        var OO = $e(function(s, a) {
          return Ct(s) ? xs(s, Kt(a, 1, Ct, true)) : [];
        }), kO = $e(function(s, a) {
          var p = Gr(a);
          return Ct(p) && (p = r), Ct(s) ? xs(s, Kt(a, 1, Ct, true), ke(p, 2)) : [];
        }), AO = $e(function(s, a) {
          var p = Gr(a);
          return Ct(p) && (p = r), Ct(s) ? xs(s, Kt(a, 1, Ct, true), r, p) : [];
        });
        function TO(s, a, p) {
          var _ = s == null ? 0 : s.length;
          return _ ? (a = p || a === r ? 1 : De(a), qr(s, a < 0 ? 0 : a, _)) : [];
        }
        function RO(s, a, p) {
          var _ = s == null ? 0 : s.length;
          return _ ? (a = p || a === r ? 1 : De(a), a = _ - a, qr(s, 0, a < 0 ? 0 : a)) : [];
        }
        function CO(s, a) {
          return s && s.length ? El(s, ke(a, 3), true, true) : [];
        }
        function IO(s, a) {
          return s && s.length ? El(s, ke(a, 3), true) : [];
        }
        function PO(s, a, p, _) {
          var k = s == null ? 0 : s.length;
          return k ? (p && typeof p != "number" && ar(s, a, p) && (p = 0, _ = k), EE(s, a, p, _)) : [];
        }
        function bv(s, a, p) {
          var _ = s == null ? 0 : s.length;
          if (!_)
            return -1;
          var k = p == null ? 0 : De(p);
          return k < 0 && (k = Ft(_ + k, 0)), nl(s, ke(a, 3), k);
        }
        function yv(s, a, p) {
          var _ = s == null ? 0 : s.length;
          if (!_)
            return -1;
          var k = _ - 1;
          return p !== r && (k = De(p), k = p < 0 ? Ft(_ + k, 0) : tr(k, _ - 1)), nl(s, ke(a, 3), k, true);
        }
        function wv(s) {
          var a = s == null ? 0 : s.length;
          return a ? Kt(s, 1) : [];
        }
        function NO(s) {
          var a = s == null ? 0 : s.length;
          return a ? Kt(s, ne) : [];
        }
        function MO(s, a) {
          var p = s == null ? 0 : s.length;
          return p ? (a = a === r ? 1 : De(a), Kt(s, a)) : [];
        }
        function DO(s) {
          for (var a = -1, p = s == null ? 0 : s.length, _ = {}; ++a < p; ) {
            var k = s[a];
            mn(_, k[0], k[1]);
          }
          return _;
        }
        function xv(s) {
          return s && s.length ? s[0] : r;
        }
        function zO(s, a, p) {
          var _ = s == null ? 0 : s.length;
          if (!_)
            return -1;
          var k = p == null ? 0 : De(p);
          return k < 0 && (k = Ft(_ + k, 0)), mo(s, a, k);
        }
        function LO(s) {
          var a = s == null ? 0 : s.length;
          return a ? qr(s, 0, -1) : [];
        }
        var $O = $e(function(s) {
          var a = yt(s, hd);
          return a.length && a[0] === s[0] ? id(a) : [];
        }), FO = $e(function(s) {
          var a = Gr(s), p = yt(s, hd);
          return a === Gr(p) ? a = r : p.pop(), p.length && p[0] === s[0] ? id(p, ke(a, 2)) : [];
        }), HO = $e(function(s) {
          var a = Gr(s), p = yt(s, hd);
          return a = typeof a == "function" ? a : r, a && p.pop(), p.length && p[0] === s[0] ? id(p, r, a) : [];
        });
        function jO(s, a) {
          return s == null ? "" : L_.call(s, a);
        }
        function Gr(s) {
          var a = s == null ? 0 : s.length;
          return a ? s[a - 1] : r;
        }
        function BO(s, a, p) {
          var _ = s == null ? 0 : s.length;
          if (!_)
            return -1;
          var k = _;
          return p !== r && (k = De(p), k = k < 0 ? Ft(_ + k, 0) : tr(k, _ - 1)), a === a ? x_(s, a, k) : nl(s, tg, k, true);
        }
        function WO(s, a) {
          return s && s.length ? Pg(s, De(a)) : r;
        }
        var VO = $e(Sv);
        function Sv(s, a) {
          return s && s.length && a && a.length ? ld(s, a) : s;
        }
        function UO(s, a, p) {
          return s && s.length && a && a.length ? ld(s, a, ke(p, 2)) : s;
        }
        function qO(s, a, p) {
          return s && s.length && a && a.length ? ld(s, a, r, p) : s;
        }
        var GO = Vn(function(s, a) {
          var p = s == null ? 0 : s.length, _ = ed(s, a);
          return Dg(s, yt(a, function(k) {
            return Un(k, p) ? +k : k;
          }).sort(Ug)), _;
        });
        function ZO(s, a) {
          var p = [];
          if (!(s && s.length))
            return p;
          var _ = -1, k = [], C = s.length;
          for (a = ke(a, 3); ++_ < C; ) {
            var L = s[_];
            a(L, _, s) && (p.push(L), k.push(_));
          }
          return Dg(s, k), p;
        }
        function Td(s) {
          return s == null ? s : j_.call(s);
        }
        function KO(s, a, p) {
          var _ = s == null ? 0 : s.length;
          return _ ? (p && typeof p != "number" && ar(s, a, p) ? (a = 0, p = _) : (a = a == null ? 0 : De(a), p = p === r ? _ : De(p)), qr(s, a, p)) : [];
        }
        function YO(s, a) {
          return _l(s, a);
        }
        function XO(s, a, p) {
          return dd(s, a, ke(p, 2));
        }
        function JO(s, a) {
          var p = s == null ? 0 : s.length;
          if (p) {
            var _ = _l(s, a);
            if (_ < p && ln(s[_], a))
              return _;
          }
          return -1;
        }
        function QO(s, a) {
          return _l(s, a, true);
        }
        function ek(s, a, p) {
          return dd(s, a, ke(p, 2), true);
        }
        function tk(s, a) {
          var p = s == null ? 0 : s.length;
          if (p) {
            var _ = _l(s, a, true) - 1;
            if (ln(s[_], a))
              return _;
          }
          return -1;
        }
        function rk(s) {
          return s && s.length ? Lg(s) : [];
        }
        function nk(s, a) {
          return s && s.length ? Lg(s, ke(a, 2)) : [];
        }
        function ik(s) {
          var a = s == null ? 0 : s.length;
          return a ? qr(s, 1, a) : [];
        }
        function ok(s, a, p) {
          return s && s.length ? (a = p || a === r ? 1 : De(a), qr(s, 0, a < 0 ? 0 : a)) : [];
        }
        function sk(s, a, p) {
          var _ = s == null ? 0 : s.length;
          return _ ? (a = p || a === r ? 1 : De(a), a = _ - a, qr(s, a < 0 ? 0 : a, _)) : [];
        }
        function ak(s, a) {
          return s && s.length ? El(s, ke(a, 3), false, true) : [];
        }
        function lk(s, a) {
          return s && s.length ? El(s, ke(a, 3)) : [];
        }
        var ck = $e(function(s) {
          return pi(Kt(s, 1, Ct, true));
        }), uk = $e(function(s) {
          var a = Gr(s);
          return Ct(a) && (a = r), pi(Kt(s, 1, Ct, true), ke(a, 2));
        }), dk = $e(function(s) {
          var a = Gr(s);
          return a = typeof a == "function" ? a : r, pi(Kt(s, 1, Ct, true), r, a);
        });
        function fk(s) {
          return s && s.length ? pi(s) : [];
        }
        function pk(s, a) {
          return s && s.length ? pi(s, ke(a, 2)) : [];
        }
        function hk(s, a) {
          return a = typeof a == "function" ? a : r, s && s.length ? pi(s, r, a) : [];
        }
        function Rd(s) {
          if (!(s && s.length))
            return [];
          var a = 0;
          return s = li(s, function(p) {
            if (Ct(p))
              return a = Ft(p.length, a), true;
          }), qu(a, function(p) {
            return yt(s, Wu(p));
          });
        }
        function _v(s, a) {
          if (!(s && s.length))
            return [];
          var p = Rd(s);
          return a == null ? p : yt(p, function(_) {
            return Er(a, r, _);
          });
        }
        var gk = $e(function(s, a) {
          return Ct(s) ? xs(s, a) : [];
        }), vk = $e(function(s) {
          return pd(li(s, Ct));
        }), mk = $e(function(s) {
          var a = Gr(s);
          return Ct(a) && (a = r), pd(li(s, Ct), ke(a, 2));
        }), bk = $e(function(s) {
          var a = Gr(s);
          return a = typeof a == "function" ? a : r, pd(li(s, Ct), r, a);
        }), yk = $e(Rd);
        function wk(s, a) {
          return jg(s || [], a || [], ws);
        }
        function xk(s, a) {
          return jg(s || [], a || [], Es);
        }
        var Sk = $e(function(s) {
          var a = s.length, p = a > 1 ? s[a - 1] : r;
          return p = typeof p == "function" ? (s.pop(), p) : r, _v(s, p);
        });
        function Ev(s) {
          var a = R(s);
          return a.__chain__ = true, a;
        }
        function _k(s, a) {
          return a(s), s;
        }
        function Nl(s, a) {
          return a(s);
        }
        var Ek = Vn(function(s) {
          var a = s.length, p = a ? s[0] : 0, _ = this.__wrapped__, k = function(C) {
            return ed(C, s);
          };
          return a > 1 || this.__actions__.length || !(_ instanceof je) || !Un(p) ? this.thru(k) : (_ = _.slice(p, +p + (a ? 1 : 0)), _.__actions__.push({
            func: Nl,
            args: [k],
            thisArg: r
          }), new Vr(_, this.__chain__).thru(function(C) {
            return a && !C.length && C.push(r), C;
          }));
        });
        function Ok() {
          return Ev(this);
        }
        function kk() {
          return new Vr(this.value(), this.__chain__);
        }
        function Ak() {
          this.__values__ === r && (this.__values__ = $v(this.value()));
          var s = this.__index__ >= this.__values__.length, a = s ? r : this.__values__[this.__index__++];
          return { done: s, value: a };
        }
        function Tk() {
          return this;
        }
        function Rk(s) {
          for (var a, p = this; p instanceof bl; ) {
            var _ = mv(p);
            _.__index__ = 0, _.__values__ = r, a ? k.__wrapped__ = _ : a = _;
            var k = _;
            p = p.__wrapped__;
          }
          return k.__wrapped__ = s, a;
        }
        function Ck() {
          var s = this.__wrapped__;
          if (s instanceof je) {
            var a = s;
            return this.__actions__.length && (a = new je(this)), a = a.reverse(), a.__actions__.push({
              func: Nl,
              args: [Td],
              thisArg: r
            }), new Vr(a, this.__chain__);
          }
          return this.thru(Td);
        }
        function Ik() {
          return Hg(this.__wrapped__, this.__actions__);
        }
        var Pk = Ol(function(s, a, p) {
          Ye.call(s, p) ? ++s[p] : mn(s, p, 1);
        });
        function Nk(s, a, p) {
          var _ = Ne(s) ? Qh : _E;
          return p && ar(s, a, p) && (a = r), _(s, ke(a, 3));
        }
        function Mk(s, a) {
          var p = Ne(s) ? li : _g;
          return p(s, ke(a, 3));
        }
        var Dk = Xg(bv), zk = Xg(yv);
        function Lk(s, a) {
          return Kt(Ml(s, a), 1);
        }
        function $k(s, a) {
          return Kt(Ml(s, a), ne);
        }
        function Fk(s, a, p) {
          return p = p === r ? 1 : De(p), Kt(Ml(s, a), p);
        }
        function Ov(s, a) {
          var p = Ne(s) ? Or : fi;
          return p(s, ke(a, 3));
        }
        function kv(s, a) {
          var p = Ne(s) ? i_ : Sg;
          return p(s, ke(a, 3));
        }
        var Hk = Ol(function(s, a, p) {
          Ye.call(s, p) ? s[p].push(a) : mn(s, p, [a]);
        });
        function jk(s, a, p, _) {
          s = fr(s) ? s : Ro(s), p = p && !_ ? De(p) : 0;
          var k = s.length;
          return p < 0 && (p = Ft(k + p, 0)), Fl(s) ? p <= k && s.indexOf(a, p) > -1 : !!k && mo(s, a, p) > -1;
        }
        var Bk = $e(function(s, a, p) {
          var _ = -1, k = typeof a == "function", C = fr(s) ? J(s.length) : [];
          return fi(s, function(L) {
            C[++_] = k ? Er(a, L, p) : Ss(L, a, p);
          }), C;
        }), Wk = Ol(function(s, a, p) {
          mn(s, p, a);
        });
        function Ml(s, a) {
          var p = Ne(s) ? yt : Rg;
          return p(s, ke(a, 3));
        }
        function Vk(s, a, p, _) {
          return s == null ? [] : (Ne(a) || (a = a == null ? [] : [a]), p = _ ? r : p, Ne(p) || (p = p == null ? [] : [p]), Ng(s, a, p));
        }
        var Uk = Ol(function(s, a, p) {
          s[p ? 0 : 1].push(a);
        }, function() {
          return [[], []];
        });
        function qk(s, a, p) {
          var _ = Ne(s) ? ju : ng, k = arguments.length < 3;
          return _(s, ke(a, 4), p, k, fi);
        }
        function Gk(s, a, p) {
          var _ = Ne(s) ? o_ : ng, k = arguments.length < 3;
          return _(s, ke(a, 4), p, k, Sg);
        }
        function Zk(s, a) {
          var p = Ne(s) ? li : _g;
          return p(s, Ll(ke(a, 3)));
        }
        function Kk(s) {
          var a = Ne(s) ? bg : jE;
          return a(s);
        }
        function Yk(s, a, p) {
          (p ? ar(s, a, p) : a === r) ? a = 1 : a = De(a);
          var _ = Ne(s) ? bE : BE;
          return _(s, a);
        }
        function Xk(s) {
          var a = Ne(s) ? yE : VE;
          return a(s);
        }
        function Jk(s) {
          if (s == null)
            return 0;
          if (fr(s))
            return Fl(s) ? yo(s) : s.length;
          var a = rr(s);
          return a == ct || a == qe ? s.size : sd(s).length;
        }
        function Qk(s, a, p) {
          var _ = Ne(s) ? Bu : UE;
          return p && ar(s, a, p) && (a = r), _(s, ke(a, 3));
        }
        var eA = $e(function(s, a) {
          if (s == null)
            return [];
          var p = a.length;
          return p > 1 && ar(s, a[0], a[1]) ? a = [] : p > 2 && ar(a[0], a[1], a[2]) && (a = [a[0]]), Ng(s, Kt(a, 1), []);
        }), Dl = M_ || function() {
          return Zt.Date.now();
        };
        function tA(s, a) {
          if (typeof a != "function")
            throw new Wr(l);
          return s = De(s), function() {
            if (--s < 1)
              return a.apply(this, arguments);
          };
        }
        function Av(s, a, p) {
          return a = p ? r : a, a = s && a == null ? s.length : a, Wn(s, T, r, r, r, r, a);
        }
        function Tv(s, a) {
          var p;
          if (typeof a != "function")
            throw new Wr(l);
          return s = De(s), function() {
            return --s > 0 && (p = a.apply(this, arguments)), s <= 1 && (a = r), p;
          };
        }
        var Cd = $e(function(s, a, p) {
          var _ = m;
          if (p.length) {
            var k = ui(p, Ao(Cd));
            _ |= A;
          }
          return Wn(s, _, a, p, k);
        }), Rv = $e(function(s, a, p) {
          var _ = m | y;
          if (p.length) {
            var k = ui(p, Ao(Rv));
            _ |= A;
          }
          return Wn(a, _, s, p, k);
        });
        function Cv(s, a, p) {
          a = p ? r : a;
          var _ = Wn(s, O, r, r, r, r, r, a);
          return _.placeholder = Cv.placeholder, _;
        }
        function Iv(s, a, p) {
          a = p ? r : a;
          var _ = Wn(s, E, r, r, r, r, r, a);
          return _.placeholder = Iv.placeholder, _;
        }
        function Pv(s, a, p) {
          var _, k, C, L, B, q, oe = 0, se = false, ue = false, ve = true;
          if (typeof s != "function")
            throw new Wr(l);
          a = Zr(a) || 0, Ot(p) && (se = !!p.leading, ue = "maxWait" in p, C = ue ? Ft(Zr(p.maxWait) || 0, a) : C, ve = "trailing" in p ? !!p.trailing : ve);
          function xe(It) {
            var cn = _, Zn = k;
            return _ = k = r, oe = It, L = s.apply(Zn, cn), L;
          }
          function Ae(It) {
            return oe = It, B = As(He, a), se ? xe(It) : L;
          }
          function ze(It) {
            var cn = It - q, Zn = It - oe, Jv = a - cn;
            return ue ? tr(Jv, C - Zn) : Jv;
          }
          function Oe(It) {
            var cn = It - q, Zn = It - oe;
            return q === r || cn >= a || cn < 0 || ue && Zn >= C;
          }
          function He() {
            var It = Dl();
            if (Oe(It))
              return Be(It);
            B = As(He, ze(It));
          }
          function Be(It) {
            return B = r, ve && _ ? xe(It) : (_ = k = r, L);
          }
          function Rr() {
            B !== r && Bg(B), oe = 0, _ = q = k = B = r;
          }
          function lr() {
            return B === r ? L : Be(Dl());
          }
          function Cr() {
            var It = Dl(), cn = Oe(It);
            if (_ = arguments, k = this, q = It, cn) {
              if (B === r)
                return Ae(q);
              if (ue)
                return Bg(B), B = As(He, a), xe(q);
            }
            return B === r && (B = As(He, a)), L;
          }
          return Cr.cancel = Rr, Cr.flush = lr, Cr;
        }
        var rA = $e(function(s, a) {
          return xg(s, 1, a);
        }), nA = $e(function(s, a, p) {
          return xg(s, Zr(a) || 0, p);
        });
        function iA(s) {
          return Wn(s, j);
        }
        function zl(s, a) {
          if (typeof s != "function" || a != null && typeof a != "function")
            throw new Wr(l);
          var p = function() {
            var _ = arguments, k = a ? a.apply(this, _) : _[0], C = p.cache;
            if (C.has(k))
              return C.get(k);
            var L = s.apply(this, _);
            return p.cache = C.set(k, L) || C, L;
          };
          return p.cache = new (zl.Cache || Bn)(), p;
        }
        zl.Cache = Bn;
        function Ll(s) {
          if (typeof s != "function")
            throw new Wr(l);
          return function() {
            var a = arguments;
            switch (a.length) {
              case 0:
                return !s.call(this);
              case 1:
                return !s.call(this, a[0]);
              case 2:
                return !s.call(this, a[0], a[1]);
              case 3:
                return !s.call(this, a[0], a[1], a[2]);
            }
            return !s.apply(this, a);
          };
        }
        function oA(s) {
          return Tv(2, s);
        }
        var sA = qE(function(s, a) {
          a = a.length == 1 && Ne(a[0]) ? yt(a[0], kr(ke())) : yt(Kt(a, 1), kr(ke()));
          var p = a.length;
          return $e(function(_) {
            for (var k = -1, C = tr(_.length, p); ++k < C; )
              _[k] = a[k].call(this, _[k]);
            return Er(s, this, _);
          });
        }), Id = $e(function(s, a) {
          var p = ui(a, Ao(Id));
          return Wn(s, A, r, a, p);
        }), Nv = $e(function(s, a) {
          var p = ui(a, Ao(Nv));
          return Wn(s, $, r, a, p);
        }), aA = Vn(function(s, a) {
          return Wn(s, D, r, r, r, a);
        });
        function lA(s, a) {
          if (typeof s != "function")
            throw new Wr(l);
          return a = a === r ? a : De(a), $e(s, a);
        }
        function cA(s, a) {
          if (typeof s != "function")
            throw new Wr(l);
          return a = a == null ? 0 : Ft(De(a), 0), $e(function(p) {
            var _ = p[a], k = gi(p, 0, a);
            return _ && ci(k, _), Er(s, this, k);
          });
        }
        function uA(s, a, p) {
          var _ = true, k = true;
          if (typeof s != "function")
            throw new Wr(l);
          return Ot(p) && (_ = "leading" in p ? !!p.leading : _, k = "trailing" in p ? !!p.trailing : k), Pv(s, a, {
            leading: _,
            maxWait: a,
            trailing: k
          });
        }
        function dA(s) {
          return Av(s, 1);
        }
        function fA(s, a) {
          return Id(gd(a), s);
        }
        function pA() {
          if (!arguments.length)
            return [];
          var s = arguments[0];
          return Ne(s) ? s : [s];
        }
        function hA(s) {
          return Ur(s, x);
        }
        function gA(s, a) {
          return a = typeof a == "function" ? a : r, Ur(s, x, a);
        }
        function vA(s) {
          return Ur(s, h | x);
        }
        function mA(s, a) {
          return a = typeof a == "function" ? a : r, Ur(s, h | x, a);
        }
        function bA(s, a) {
          return a == null || wg(s, a, Vt(a));
        }
        function ln(s, a) {
          return s === a || s !== s && a !== a;
        }
        var yA = Rl(nd), wA = Rl(function(s, a) {
          return s >= a;
        }), Ui = kg(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? kg : function(s) {
          return At(s) && Ye.call(s, "callee") && !fg.call(s, "callee");
        }, Ne = J.isArray, xA = Gh ? kr(Gh) : RE;
        function fr(s) {
          return s != null && $l(s.length) && !qn(s);
        }
        function Ct(s) {
          return At(s) && fr(s);
        }
        function SA(s) {
          return s === true || s === false || At(s) && sr(s) == ee;
        }
        var vi = z_ || Wd, _A = Zh ? kr(Zh) : CE;
        function EA(s) {
          return At(s) && s.nodeType === 1 && !Ts(s);
        }
        function OA(s) {
          if (s == null)
            return true;
          if (fr(s) && (Ne(s) || typeof s == "string" || typeof s.splice == "function" || vi(s) || To(s) || Ui(s)))
            return !s.length;
          var a = rr(s);
          if (a == ct || a == qe)
            return !s.size;
          if (ks(s))
            return !sd(s).length;
          for (var p in s)
            if (Ye.call(s, p))
              return false;
          return true;
        }
        function kA(s, a) {
          return _s(s, a);
        }
        function AA(s, a, p) {
          p = typeof p == "function" ? p : r;
          var _ = p ? p(s, a) : r;
          return _ === r ? _s(s, a, r, p) : !!_;
        }
        function Pd(s) {
          if (!At(s))
            return false;
          var a = sr(s);
          return a == Z || a == Se || typeof s.message == "string" && typeof s.name == "string" && !Ts(s);
        }
        function TA(s) {
          return typeof s == "number" && hg(s);
        }
        function qn(s) {
          if (!Ot(s))
            return false;
          var a = sr(s);
          return a == Me || a == ge || a == de || a == ut;
        }
        function Mv(s) {
          return typeof s == "number" && s == De(s);
        }
        function $l(s) {
          return typeof s == "number" && s > -1 && s % 1 == 0 && s <= he;
        }
        function Ot(s) {
          var a = typeof s;
          return s != null && (a == "object" || a == "function");
        }
        function At(s) {
          return s != null && typeof s == "object";
        }
        var Dv = Kh ? kr(Kh) : PE;
        function RA(s, a) {
          return s === a || od(s, a, Sd(a));
        }
        function CA(s, a, p) {
          return p = typeof p == "function" ? p : r, od(s, a, Sd(a), p);
        }
        function IA(s) {
          return zv(s) && s != +s;
        }
        function PA(s) {
          if (gO(s))
            throw new Re(o);
          return Ag(s);
        }
        function NA(s) {
          return s === null;
        }
        function MA(s) {
          return s == null;
        }
        function zv(s) {
          return typeof s == "number" || At(s) && sr(s) == bt;
        }
        function Ts(s) {
          if (!At(s) || sr(s) != Mt)
            return false;
          var a = dl(s);
          if (a === null)
            return true;
          var p = Ye.call(a, "constructor") && a.constructor;
          return typeof p == "function" && p instanceof p && al.call(p) == C_;
        }
        var Nd = Yh ? kr(Yh) : NE;
        function DA(s) {
          return Mv(s) && s >= -he && s <= he;
        }
        var Lv = Xh ? kr(Xh) : ME;
        function Fl(s) {
          return typeof s == "string" || !Ne(s) && At(s) && sr(s) == Fr;
        }
        function Tr(s) {
          return typeof s == "symbol" || At(s) && sr(s) == ir;
        }
        var To = Jh ? kr(Jh) : DE;
        function zA(s) {
          return s === r;
        }
        function LA(s) {
          return At(s) && rr(s) == tn;
        }
        function $A(s) {
          return At(s) && sr(s) == or;
        }
        var FA = Rl(ad), HA = Rl(function(s, a) {
          return s <= a;
        });
        function $v(s) {
          if (!s)
            return [];
          if (fr(s))
            return Fl(s) ? on(s) : dr(s);
          if (gs && s[gs])
            return b_(s[gs]());
          var a = rr(s), p = a == ct ? Zu : a == qe ? il : Ro;
          return p(s);
        }
        function Gn(s) {
          if (!s)
            return s === 0 ? s : 0;
          if (s = Zr(s), s === ne || s === -ne) {
            var a = s < 0 ? -1 : 1;
            return a * N;
          }
          return s === s ? s : 0;
        }
        function De(s) {
          var a = Gn(s), p = a % 1;
          return a === a ? p ? a - p : a : 0;
        }
        function Fv(s) {
          return s ? ji(De(s), 0, G) : 0;
        }
        function Zr(s) {
          if (typeof s == "number")
            return s;
          if (Tr(s))
            return F;
          if (Ot(s)) {
            var a = typeof s.valueOf == "function" ? s.valueOf() : s;
            s = Ot(a) ? a + "" : a;
          }
          if (typeof s != "string")
            return s === 0 ? s : +s;
          s = ig(s);
          var p = zi.test(s);
          return p || el.test(s) ? t_(s.slice(2), p ? 2 : 8) : Cu.test(s) ? F : +s;
        }
        function Hv(s) {
          return yn(s, pr(s));
        }
        function jA(s) {
          return s ? ji(De(s), -he, he) : s === 0 ? s : 0;
        }
        function Xe(s) {
          return s == null ? "" : Ar(s);
        }
        var BA = Oo(function(s, a) {
          if (ks(a) || fr(a)) {
            yn(a, Vt(a), s);
            return;
          }
          for (var p in a)
            Ye.call(a, p) && ws(s, p, a[p]);
        }), jv = Oo(function(s, a) {
          yn(a, pr(a), s);
        }), Bv = Oo(function(s, a, p, _) {
          yn(a, pr(a), s, _);
        }), Md = Oo(function(s, a, p, _) {
          yn(a, Vt(a), s, _);
        }), WA = Vn(ed);
        function VA(s, a) {
          var p = Eo(s);
          return a == null ? p : yg(p, a);
        }
        var UA = $e(function(s, a) {
          s = ft(s);
          var p = -1, _ = a.length, k = _ > 2 ? a[2] : r;
          for (k && ar(a[0], a[1], k) && (_ = 1); ++p < _; )
            for (var C = a[p], L = pr(C), B = -1, q = L.length; ++B < q; ) {
              var oe = L[B], se = s[oe];
              (se === r || ln(se, xo[oe]) && !Ye.call(s, oe)) && (s[oe] = C[oe]);
            }
          return s;
        }), qA = $e(function(s) {
          return s.push(r, iv), Er(Wv, r, s);
        });
        function GA(s, a) {
          return eg(s, ke(a, 3), bn);
        }
        function ZA(s, a) {
          return eg(s, ke(a, 3), rd);
        }
        function KA(s, a) {
          return s == null ? s : td(s, ke(a, 3), pr);
        }
        function YA(s, a) {
          return s == null ? s : Eg(s, ke(a, 3), pr);
        }
        function XA(s, a) {
          return s && bn(s, ke(a, 3));
        }
        function JA(s, a) {
          return s && rd(s, ke(a, 3));
        }
        function QA(s) {
          return s == null ? [] : xl(s, Vt(s));
        }
        function eT(s) {
          return s == null ? [] : xl(s, pr(s));
        }
        function Dd(s, a, p) {
          var _ = s == null ? r : Bi(s, a);
          return _ === r ? p : _;
        }
        function tT(s, a) {
          return s != null && av(s, a, OE);
        }
        function zd(s, a) {
          return s != null && av(s, a, kE);
        }
        var rT = Qg(function(s, a, p) {
          a != null && typeof a.toString != "function" && (a = ll.call(a)), s[a] = p;
        }, $d(hr)), nT = Qg(function(s, a, p) {
          a != null && typeof a.toString != "function" && (a = ll.call(a)), Ye.call(s, a) ? s[a].push(p) : s[a] = [p];
        }, ke), iT = $e(Ss);
        function Vt(s) {
          return fr(s) ? mg(s) : sd(s);
        }
        function pr(s) {
          return fr(s) ? mg(s, true) : zE(s);
        }
        function oT(s, a) {
          var p = {};
          return a = ke(a, 3), bn(s, function(_, k, C) {
            mn(p, a(_, k, C), _);
          }), p;
        }
        function sT(s, a) {
          var p = {};
          return a = ke(a, 3), bn(s, function(_, k, C) {
            mn(p, k, a(_, k, C));
          }), p;
        }
        var aT = Oo(function(s, a, p) {
          Sl(s, a, p);
        }), Wv = Oo(function(s, a, p, _) {
          Sl(s, a, p, _);
        }), lT = Vn(function(s, a) {
          var p = {};
          if (s == null)
            return p;
          var _ = false;
          a = yt(a, function(C) {
            return C = hi(C, s), _ || (_ = C.length > 1), C;
          }), yn(s, wd(s), p), _ && (p = Ur(p, h | b | x, nO));
          for (var k = a.length; k--; )
            fd(p, a[k]);
          return p;
        });
        function cT(s, a) {
          return Vv(s, Ll(ke(a)));
        }
        var uT = Vn(function(s, a) {
          return s == null ? {} : $E(s, a);
        });
        function Vv(s, a) {
          if (s == null)
            return {};
          var p = yt(wd(s), function(_) {
            return [_];
          });
          return a = ke(a), Mg(s, p, function(_, k) {
            return a(_, k[0]);
          });
        }
        function dT(s, a, p) {
          a = hi(a, s);
          var _ = -1, k = a.length;
          for (k || (k = 1, s = r); ++_ < k; ) {
            var C = s == null ? r : s[an(a[_])];
            C === r && (_ = k, C = p), s = qn(C) ? C.call(s) : C;
          }
          return s;
        }
        function fT(s, a, p) {
          return s == null ? s : Es(s, a, p);
        }
        function pT(s, a, p, _) {
          return _ = typeof _ == "function" ? _ : r, s == null ? s : Es(s, a, p, _);
        }
        var Uv = rv(Vt), qv = rv(pr);
        function hT(s, a, p) {
          var _ = Ne(s), k = _ || vi(s) || To(s);
          if (a = ke(a, 4), p == null) {
            var C = s && s.constructor;
            k ? p = _ ? new C() : [] : Ot(s) ? p = qn(C) ? Eo(dl(s)) : {} : p = {};
          }
          return (k ? Or : bn)(s, function(L, B, q) {
            return a(p, L, B, q);
          }), p;
        }
        function gT(s, a) {
          return s == null ? true : fd(s, a);
        }
        function vT(s, a, p) {
          return s == null ? s : Fg(s, a, gd(p));
        }
        function mT(s, a, p, _) {
          return _ = typeof _ == "function" ? _ : r, s == null ? s : Fg(s, a, gd(p), _);
        }
        function Ro(s) {
          return s == null ? [] : Gu(s, Vt(s));
        }
        function bT(s) {
          return s == null ? [] : Gu(s, pr(s));
        }
        function yT(s, a, p) {
          return p === r && (p = a, a = r), p !== r && (p = Zr(p), p = p === p ? p : 0), a !== r && (a = Zr(a), a = a === a ? a : 0), ji(Zr(s), a, p);
        }
        function wT(s, a, p) {
          return a = Gn(a), p === r ? (p = a, a = 0) : p = Gn(p), s = Zr(s), AE(s, a, p);
        }
        function xT(s, a, p) {
          if (p && typeof p != "boolean" && ar(s, a, p) && (a = p = r), p === r && (typeof a == "boolean" ? (p = a, a = r) : typeof s == "boolean" && (p = s, s = r)), s === r && a === r ? (s = 0, a = 1) : (s = Gn(s), a === r ? (a = s, s = 0) : a = Gn(a)), s > a) {
            var _ = s;
            s = a, a = _;
          }
          if (p || s % 1 || a % 1) {
            var k = gg();
            return tr(s + k * (a - s + e_("1e-" + ((k + "").length - 1))), a);
          }
          return cd(s, a);
        }
        var ST = ko(function(s, a, p) {
          return a = a.toLowerCase(), s + (p ? Gv(a) : a);
        });
        function Gv(s) {
          return Ld(Xe(s).toLowerCase());
        }
        function Zv(s) {
          return s = Xe(s), s && s.replace(Ee, p_).replace(VS, "");
        }
        function _T(s, a, p) {
          s = Xe(s), a = Ar(a);
          var _ = s.length;
          p = p === r ? _ : ji(De(p), 0, _);
          var k = p;
          return p -= a.length, p >= 0 && s.slice(p, k) == a;
        }
        function ET(s) {
          return s = Xe(s), s && Au.test(s) ? s.replace(ls, h_) : s;
        }
        function OT(s) {
          return s = Xe(s), s && Za.test(s) ? s.replace(ds, "\\$&") : s;
        }
        var kT = ko(function(s, a, p) {
          return s + (p ? "-" : "") + a.toLowerCase();
        }), AT = ko(function(s, a, p) {
          return s + (p ? " " : "") + a.toLowerCase();
        }), TT = Yg("toLowerCase");
        function RT(s, a, p) {
          s = Xe(s), a = De(a);
          var _ = a ? yo(s) : 0;
          if (!a || _ >= a)
            return s;
          var k = (a - _) / 2;
          return Tl(gl(k), p) + s + Tl(hl(k), p);
        }
        function CT(s, a, p) {
          s = Xe(s), a = De(a);
          var _ = a ? yo(s) : 0;
          return a && _ < a ? s + Tl(a - _, p) : s;
        }
        function IT(s, a, p) {
          s = Xe(s), a = De(a);
          var _ = a ? yo(s) : 0;
          return a && _ < a ? Tl(a - _, p) + s : s;
        }
        function PT(s, a, p) {
          return p || a == null ? a = 0 : a && (a = +a), H_(Xe(s).replace(Di, ""), a || 0);
        }
        function NT(s, a, p) {
          return (p ? ar(s, a, p) : a === r) ? a = 1 : a = De(a), ud(Xe(s), a);
        }
        function MT() {
          var s = arguments, a = Xe(s[0]);
          return s.length < 3 ? a : a.replace(s[1], s[2]);
        }
        var DT = ko(function(s, a, p) {
          return s + (p ? "_" : "") + a.toLowerCase();
        });
        function zT(s, a, p) {
          return p && typeof p != "number" && ar(s, a, p) && (a = p = r), p = p === r ? G : p >>> 0, p ? (s = Xe(s), s && (typeof a == "string" || a != null && !Nd(a)) && (a = Ar(a), !a && bo(s)) ? gi(on(s), 0, p) : s.split(a, p)) : [];
        }
        var LT = ko(function(s, a, p) {
          return s + (p ? " " : "") + Ld(a);
        });
        function $T(s, a, p) {
          return s = Xe(s), p = p == null ? 0 : ji(De(p), 0, s.length), a = Ar(a), s.slice(p, p + a.length) == a;
        }
        function FT(s, a, p) {
          var _ = R.templateSettings;
          p && ar(s, a, p) && (a = r), s = Xe(s), a = Md({}, a, _, nv);
          var k = Md({}, a.imports, _.imports, nv), C = Vt(k), L = Gu(k, C);
          Or(C, function(Oe) {
            if (Ja.test(Oe))
              throw new Re(u);
          });
          var B, q, oe = 0, se = a.interpolate || Ie, ue = "__p += '", ve = Ku(
            (a.escape || Ie).source + "|" + se.source + "|" + (se === cs ? Ru : Ie).source + "|" + (a.evaluate || Ie).source + "|$",
            "g"
          ), xe = "//# sourceURL=" + (Ye.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++KS + "]") + `
`;
          s.replace(ve, function(Oe, He, Be, Rr, lr, Cr) {
            return Be || (Be = Rr), ue += s.slice(oe, Cr).replace(xr, g_), He && (B = true, ue += `' +
__e(` + He + `) +
'`), lr && (q = true, ue += `';
` + lr + `;
__p += '`), Be && (ue += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), oe = Cr + Oe.length, Oe;
          }), ue += `';
`;
          var Ae = Ye.call(a, "variable") && a.variable;
          if (!Ae)
            ue = `with (obj) {
` + ue + `
}
`;
          else if (Ja.test(Ae))
            throw new Re(c);
          ue = (q ? ue.replace(ku, "") : ue).replace(Hr, "$1").replace(as, "$1;"), ue = "function(" + (Ae || "obj") + `) {
` + (Ae ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (B ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ue + `return __p
}`;
          var ze = Yv(function() {
            return Ge(C, xe + "return " + ue).apply(r, L);
          });
          if (ze.source = ue, Pd(ze))
            throw ze;
          return ze;
        }
        function HT(s) {
          return Xe(s).toLowerCase();
        }
        function jT(s) {
          return Xe(s).toUpperCase();
        }
        function BT(s, a, p) {
          if (s = Xe(s), s && (p || a === r))
            return ig(s);
          if (!s || !(a = Ar(a)))
            return s;
          var _ = on(s), k = on(a), C = og(_, k), L = sg(_, k) + 1;
          return gi(_, C, L).join("");
        }
        function WT(s, a, p) {
          if (s = Xe(s), s && (p || a === r))
            return s.slice(0, lg(s) + 1);
          if (!s || !(a = Ar(a)))
            return s;
          var _ = on(s), k = sg(_, on(a)) + 1;
          return gi(_, 0, k).join("");
        }
        function VT(s, a, p) {
          if (s = Xe(s), s && (p || a === r))
            return s.replace(Di, "");
          if (!s || !(a = Ar(a)))
            return s;
          var _ = on(s), k = og(_, on(a));
          return gi(_, k).join("");
        }
        function UT(s, a) {
          var p = z, _ = M;
          if (Ot(a)) {
            var k = "separator" in a ? a.separator : k;
            p = "length" in a ? De(a.length) : p, _ = "omission" in a ? Ar(a.omission) : _;
          }
          s = Xe(s);
          var C = s.length;
          if (bo(s)) {
            var L = on(s);
            C = L.length;
          }
          if (p >= C)
            return s;
          var B = p - yo(_);
          if (B < 1)
            return _;
          var q = L ? gi(L, 0, B).join("") : s.slice(0, B);
          if (k === r)
            return q + _;
          if (L && (B += q.length - B), Nd(k)) {
            if (s.slice(B).search(k)) {
              var oe, se = q;
              for (k.global || (k = Ku(k.source, Xe(Fn.exec(k)) + "g")), k.lastIndex = 0; oe = k.exec(se); )
                var ue = oe.index;
              q = q.slice(0, ue === r ? B : ue);
            }
          } else if (s.indexOf(Ar(k), B) != B) {
            var ve = q.lastIndexOf(k);
            ve > -1 && (q = q.slice(0, ve));
          }
          return q + _;
        }
        function qT(s) {
          return s = Xe(s), s && Va.test(s) ? s.replace(Wa, S_) : s;
        }
        var GT = ko(function(s, a, p) {
          return s + (p ? " " : "") + a.toUpperCase();
        }), Ld = Yg("toUpperCase");
        function Kv(s, a, p) {
          return s = Xe(s), a = p ? r : a, a === r ? m_(s) ? O_(s) : l_(s) : s.match(a) || [];
        }
        var Yv = $e(function(s, a) {
          try {
            return Er(s, r, a);
          } catch (p) {
            return Pd(p) ? p : new Re(p);
          }
        }), ZT = Vn(function(s, a) {
          return Or(a, function(p) {
            p = an(p), mn(s, p, Cd(s[p], s));
          }), s;
        });
        function KT(s) {
          var a = s == null ? 0 : s.length, p = ke();
          return s = a ? yt(s, function(_) {
            if (typeof _[1] != "function")
              throw new Wr(l);
            return [p(_[0]), _[1]];
          }) : [], $e(function(_) {
            for (var k = -1; ++k < a; ) {
              var C = s[k];
              if (Er(C[0], this, _))
                return Er(C[1], this, _);
            }
          });
        }
        function YT(s) {
          return SE(Ur(s, h));
        }
        function $d(s) {
          return function() {
            return s;
          };
        }
        function XT(s, a) {
          return s == null || s !== s ? a : s;
        }
        var JT = Jg(), QT = Jg(true);
        function hr(s) {
          return s;
        }
        function Fd(s) {
          return Tg(typeof s == "function" ? s : Ur(s, h));
        }
        function eR(s) {
          return Cg(Ur(s, h));
        }
        function tR(s, a) {
          return Ig(s, Ur(a, h));
        }
        var rR = $e(function(s, a) {
          return function(p) {
            return Ss(p, s, a);
          };
        }), nR = $e(function(s, a) {
          return function(p) {
            return Ss(s, p, a);
          };
        });
        function Hd(s, a, p) {
          var _ = Vt(a), k = xl(a, _);
          p == null && !(Ot(a) && (k.length || !_.length)) && (p = a, a = s, s = this, k = xl(a, Vt(a)));
          var C = !(Ot(p) && "chain" in p) || !!p.chain, L = qn(s);
          return Or(k, function(B) {
            var q = a[B];
            s[B] = q, L && (s.prototype[B] = function() {
              var oe = this.__chain__;
              if (C || oe) {
                var se = s(this.__wrapped__), ue = se.__actions__ = dr(this.__actions__);
                return ue.push({ func: q, args: arguments, thisArg: s }), se.__chain__ = oe, se;
              }
              return q.apply(s, ci([this.value()], arguments));
            });
          }), s;
        }
        function iR() {
          return Zt._ === this && (Zt._ = I_), this;
        }
        function jd() {
        }
        function oR(s) {
          return s = De(s), $e(function(a) {
            return Pg(a, s);
          });
        }
        var sR = md(yt), aR = md(Qh), lR = md(Bu);
        function Xv(s) {
          return Ed(s) ? Wu(an(s)) : FE(s);
        }
        function cR(s) {
          return function(a) {
            return s == null ? r : Bi(s, a);
          };
        }
        var uR = ev(), dR = ev(true);
        function Bd() {
          return [];
        }
        function Wd() {
          return false;
        }
        function fR() {
          return {};
        }
        function pR() {
          return "";
        }
        function hR() {
          return true;
        }
        function gR(s, a) {
          if (s = De(s), s < 1 || s > he)
            return [];
          var p = G, _ = tr(s, G);
          a = ke(a), s -= G;
          for (var k = qu(_, a); ++p < s; )
            a(p);
          return k;
        }
        function vR(s) {
          return Ne(s) ? yt(s, an) : Tr(s) ? [s] : dr(vv(Xe(s)));
        }
        function mR(s) {
          var a = ++R_;
          return Xe(s) + a;
        }
        var bR = Al(function(s, a) {
          return s + a;
        }, 0), yR = bd("ceil"), wR = Al(function(s, a) {
          return s / a;
        }, 1), xR = bd("floor");
        function SR(s) {
          return s && s.length ? wl(s, hr, nd) : r;
        }
        function _R(s, a) {
          return s && s.length ? wl(s, ke(a, 2), nd) : r;
        }
        function ER(s) {
          return rg(s, hr);
        }
        function OR(s, a) {
          return rg(s, ke(a, 2));
        }
        function kR(s) {
          return s && s.length ? wl(s, hr, ad) : r;
        }
        function AR(s, a) {
          return s && s.length ? wl(s, ke(a, 2), ad) : r;
        }
        var TR = Al(function(s, a) {
          return s * a;
        }, 1), RR = bd("round"), CR = Al(function(s, a) {
          return s - a;
        }, 0);
        function IR(s) {
          return s && s.length ? Uu(s, hr) : 0;
        }
        function PR(s, a) {
          return s && s.length ? Uu(s, ke(a, 2)) : 0;
        }
        return R.after = tA, R.ary = Av, R.assign = BA, R.assignIn = jv, R.assignInWith = Bv, R.assignWith = Md, R.at = WA, R.before = Tv, R.bind = Cd, R.bindAll = ZT, R.bindKey = Rv, R.castArray = pA, R.chain = Ev, R.chunk = SO, R.compact = _O, R.concat = EO, R.cond = KT, R.conforms = YT, R.constant = $d, R.countBy = Pk, R.create = VA, R.curry = Cv, R.curryRight = Iv, R.debounce = Pv, R.defaults = UA, R.defaultsDeep = qA, R.defer = rA, R.delay = nA, R.difference = OO, R.differenceBy = kO, R.differenceWith = AO, R.drop = TO, R.dropRight = RO, R.dropRightWhile = CO, R.dropWhile = IO, R.fill = PO, R.filter = Mk, R.flatMap = Lk, R.flatMapDeep = $k, R.flatMapDepth = Fk, R.flatten = wv, R.flattenDeep = NO, R.flattenDepth = MO, R.flip = iA, R.flow = JT, R.flowRight = QT, R.fromPairs = DO, R.functions = QA, R.functionsIn = eT, R.groupBy = Hk, R.initial = LO, R.intersection = $O, R.intersectionBy = FO, R.intersectionWith = HO, R.invert = rT, R.invertBy = nT, R.invokeMap = Bk, R.iteratee = Fd, R.keyBy = Wk, R.keys = Vt, R.keysIn = pr, R.map = Ml, R.mapKeys = oT, R.mapValues = sT, R.matches = eR, R.matchesProperty = tR, R.memoize = zl, R.merge = aT, R.mergeWith = Wv, R.method = rR, R.methodOf = nR, R.mixin = Hd, R.negate = Ll, R.nthArg = oR, R.omit = lT, R.omitBy = cT, R.once = oA, R.orderBy = Vk, R.over = sR, R.overArgs = sA, R.overEvery = aR, R.overSome = lR, R.partial = Id, R.partialRight = Nv, R.partition = Uk, R.pick = uT, R.pickBy = Vv, R.property = Xv, R.propertyOf = cR, R.pull = VO, R.pullAll = Sv, R.pullAllBy = UO, R.pullAllWith = qO, R.pullAt = GO, R.range = uR, R.rangeRight = dR, R.rearg = aA, R.reject = Zk, R.remove = ZO, R.rest = lA, R.reverse = Td, R.sampleSize = Yk, R.set = fT, R.setWith = pT, R.shuffle = Xk, R.slice = KO, R.sortBy = eA, R.sortedUniq = rk, R.sortedUniqBy = nk, R.split = zT, R.spread = cA, R.tail = ik, R.take = ok, R.takeRight = sk, R.takeRightWhile = ak, R.takeWhile = lk, R.tap = _k, R.throttle = uA, R.thru = Nl, R.toArray = $v, R.toPairs = Uv, R.toPairsIn = qv, R.toPath = vR, R.toPlainObject = Hv, R.transform = hT, R.unary = dA, R.union = ck, R.unionBy = uk, R.unionWith = dk, R.uniq = fk, R.uniqBy = pk, R.uniqWith = hk, R.unset = gT, R.unzip = Rd, R.unzipWith = _v, R.update = vT, R.updateWith = mT, R.values = Ro, R.valuesIn = bT, R.without = gk, R.words = Kv, R.wrap = fA, R.xor = vk, R.xorBy = mk, R.xorWith = bk, R.zip = yk, R.zipObject = wk, R.zipObjectDeep = xk, R.zipWith = Sk, R.entries = Uv, R.entriesIn = qv, R.extend = jv, R.extendWith = Bv, Hd(R, R), R.add = bR, R.attempt = Yv, R.camelCase = ST, R.capitalize = Gv, R.ceil = yR, R.clamp = yT, R.clone = hA, R.cloneDeep = vA, R.cloneDeepWith = mA, R.cloneWith = gA, R.conformsTo = bA, R.deburr = Zv, R.defaultTo = XT, R.divide = wR, R.endsWith = _T, R.eq = ln, R.escape = ET, R.escapeRegExp = OT, R.every = Nk, R.find = Dk, R.findIndex = bv, R.findKey = GA, R.findLast = zk, R.findLastIndex = yv, R.findLastKey = ZA, R.floor = xR, R.forEach = Ov, R.forEachRight = kv, R.forIn = KA, R.forInRight = YA, R.forOwn = XA, R.forOwnRight = JA, R.get = Dd, R.gt = yA, R.gte = wA, R.has = tT, R.hasIn = zd, R.head = xv, R.identity = hr, R.includes = jk, R.indexOf = zO, R.inRange = wT, R.invoke = iT, R.isArguments = Ui, R.isArray = Ne, R.isArrayBuffer = xA, R.isArrayLike = fr, R.isArrayLikeObject = Ct, R.isBoolean = SA, R.isBuffer = vi, R.isDate = _A, R.isElement = EA, R.isEmpty = OA, R.isEqual = kA, R.isEqualWith = AA, R.isError = Pd, R.isFinite = TA, R.isFunction = qn, R.isInteger = Mv, R.isLength = $l, R.isMap = Dv, R.isMatch = RA, R.isMatchWith = CA, R.isNaN = IA, R.isNative = PA, R.isNil = MA, R.isNull = NA, R.isNumber = zv, R.isObject = Ot, R.isObjectLike = At, R.isPlainObject = Ts, R.isRegExp = Nd, R.isSafeInteger = DA, R.isSet = Lv, R.isString = Fl, R.isSymbol = Tr, R.isTypedArray = To, R.isUndefined = zA, R.isWeakMap = LA, R.isWeakSet = $A, R.join = jO, R.kebabCase = kT, R.last = Gr, R.lastIndexOf = BO, R.lowerCase = AT, R.lowerFirst = TT, R.lt = FA, R.lte = HA, R.max = SR, R.maxBy = _R, R.mean = ER, R.meanBy = OR, R.min = kR, R.minBy = AR, R.stubArray = Bd, R.stubFalse = Wd, R.stubObject = fR, R.stubString = pR, R.stubTrue = hR, R.multiply = TR, R.nth = WO, R.noConflict = iR, R.noop = jd, R.now = Dl, R.pad = RT, R.padEnd = CT, R.padStart = IT, R.parseInt = PT, R.random = xT, R.reduce = qk, R.reduceRight = Gk, R.repeat = NT, R.replace = MT, R.result = dT, R.round = RR, R.runInContext = U, R.sample = Kk, R.size = Jk, R.snakeCase = DT, R.some = Qk, R.sortedIndex = YO, R.sortedIndexBy = XO, R.sortedIndexOf = JO, R.sortedLastIndex = QO, R.sortedLastIndexBy = ek, R.sortedLastIndexOf = tk, R.startCase = LT, R.startsWith = $T, R.subtract = CR, R.sum = IR, R.sumBy = PR, R.template = FT, R.times = gR, R.toFinite = Gn, R.toInteger = De, R.toLength = Fv, R.toLower = HT, R.toNumber = Zr, R.toSafeInteger = jA, R.toString = Xe, R.toUpper = jT, R.trim = BT, R.trimEnd = WT, R.trimStart = VT, R.truncate = UT, R.unescape = qT, R.uniqueId = mR, R.upperCase = GT, R.upperFirst = Ld, R.each = Ov, R.eachRight = kv, R.first = xv, Hd(R, (function() {
          var s = {};
          return bn(R, function(a, p) {
            Ye.call(R.prototype, p) || (s[p] = a);
          }), s;
        })(), { chain: false }), R.VERSION = n, Or(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(s) {
          R[s].placeholder = R;
        }), Or(["drop", "take"], function(s, a) {
          je.prototype[s] = function(p) {
            p = p === r ? 1 : Ft(De(p), 0);
            var _ = this.__filtered__ && !a ? new je(this) : this.clone();
            return _.__filtered__ ? _.__takeCount__ = tr(p, _.__takeCount__) : _.__views__.push({
              size: tr(p, G),
              type: s + (_.__dir__ < 0 ? "Right" : "")
            }), _;
          }, je.prototype[s + "Right"] = function(p) {
            return this.reverse()[s](p).reverse();
          };
        }), Or(["filter", "map", "takeWhile"], function(s, a) {
          var p = a + 1, _ = p == P || p == X;
          je.prototype[s] = function(k) {
            var C = this.clone();
            return C.__iteratees__.push({
              iteratee: ke(k, 3),
              type: p
            }), C.__filtered__ = C.__filtered__ || _, C;
          };
        }), Or(["head", "last"], function(s, a) {
          var p = "take" + (a ? "Right" : "");
          je.prototype[s] = function() {
            return this[p](1).value()[0];
          };
        }), Or(["initial", "tail"], function(s, a) {
          var p = "drop" + (a ? "" : "Right");
          je.prototype[s] = function() {
            return this.__filtered__ ? new je(this) : this[p](1);
          };
        }), je.prototype.compact = function() {
          return this.filter(hr);
        }, je.prototype.find = function(s) {
          return this.filter(s).head();
        }, je.prototype.findLast = function(s) {
          return this.reverse().find(s);
        }, je.prototype.invokeMap = $e(function(s, a) {
          return typeof s == "function" ? new je(this) : this.map(function(p) {
            return Ss(p, s, a);
          });
        }), je.prototype.reject = function(s) {
          return this.filter(Ll(ke(s)));
        }, je.prototype.slice = function(s, a) {
          s = De(s);
          var p = this;
          return p.__filtered__ && (s > 0 || a < 0) ? new je(p) : (s < 0 ? p = p.takeRight(-s) : s && (p = p.drop(s)), a !== r && (a = De(a), p = a < 0 ? p.dropRight(-a) : p.take(a - s)), p);
        }, je.prototype.takeRightWhile = function(s) {
          return this.reverse().takeWhile(s).reverse();
        }, je.prototype.toArray = function() {
          return this.take(G);
        }, bn(je.prototype, function(s, a) {
          var p = /^(?:filter|find|map|reject)|While$/.test(a), _ = /^(?:head|last)$/.test(a), k = R[_ ? "take" + (a == "last" ? "Right" : "") : a], C = _ || /^find/.test(a);
          k && (R.prototype[a] = function() {
            var L = this.__wrapped__, B = _ ? [1] : arguments, q = L instanceof je, oe = B[0], se = q || Ne(L), ue = function(He) {
              var Be = k.apply(R, ci([He], B));
              return _ && ve ? Be[0] : Be;
            };
            se && p && typeof oe == "function" && oe.length != 1 && (q = se = false);
            var ve = this.__chain__, xe = !!this.__actions__.length, Ae = C && !ve, ze = q && !xe;
            if (!C && se) {
              L = ze ? L : new je(this);
              var Oe = s.apply(L, B);
              return Oe.__actions__.push({ func: Nl, args: [ue], thisArg: r }), new Vr(Oe, ve);
            }
            return Ae && ze ? s.apply(this, B) : (Oe = this.thru(ue), Ae ? _ ? Oe.value()[0] : Oe.value() : Oe);
          });
        }), Or(["pop", "push", "shift", "sort", "splice", "unshift"], function(s) {
          var a = ol[s], p = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru", _ = /^(?:pop|shift)$/.test(s);
          R.prototype[s] = function() {
            var k = arguments;
            if (_ && !this.__chain__) {
              var C = this.value();
              return a.apply(Ne(C) ? C : [], k);
            }
            return this[p](function(L) {
              return a.apply(Ne(L) ? L : [], k);
            });
          };
        }), bn(je.prototype, function(s, a) {
          var p = R[a];
          if (p) {
            var _ = p.name + "";
            Ye.call(_o, _) || (_o[_] = []), _o[_].push({ name: a, func: p });
          }
        }), _o[kl(r, y).name] = [{
          name: "wrapper",
          func: r
        }], je.prototype.clone = G_, je.prototype.reverse = Z_, je.prototype.value = K_, R.prototype.at = Ek, R.prototype.chain = Ok, R.prototype.commit = kk, R.prototype.next = Ak, R.prototype.plant = Rk, R.prototype.reverse = Ck, R.prototype.toJSON = R.prototype.valueOf = R.prototype.value = Ik, R.prototype.first = R.prototype.head, gs && (R.prototype[gs] = Tk), R;
      }), wo = k_();
      Li ? ((Li.exports = wo)._ = wo, $u._ = wo) : Zt._ = wo;
    }).call(OL);
  })(ca, ca.exports)), ca.exports;
}
var Ve = kL();
const ny = {
  FdSave: f2,
  FdWarningDanger: Bp,
  FdInfoCircle: o2,
  FdInfoBold: Jf
};
var T1 = /* @__PURE__ */ ((e6) => (e6.ALERT = "alert", e6.CONFIRM = "confirm", e6))(T1 || {}), wa = /* @__PURE__ */ ((e6) => (e6.PRIMARY = "primary", e6.WARNING = "warning", e6.DANGER = "danger", e6))(wa || {}), ua = /* @__PURE__ */ ((e6) => (e6.CONFIRMED = "confirmed", e6.CANCELED = "canceled", e6))(ua || {});
const AL = {
  [wa.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [wa.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [wa.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, TL = ({
  name: e6,
  color: t = wa.PRIMARY,
  className: r = "w-8 h-8"
}) => {
  const n = ny[e6] || ny.FdInfoCircle, i = `text-${AL[t].icon}`;
  return /* @__PURE__ */ __mf_1(n, { className: gt(r, i) });
}, o6 = ({
  id: e6,
  title: t,
  message: r,
  icon: n,
  type: i,
  color: o,
  zIndex: l = 3e3,
  views: c,
  width: u = 520,
  hasOverlay: d = true,
  container: g,
  onClose: f,
  onEdit: h
}) => {
  const b = (w) => {
    f({
      id: e6,
      reason: w
    });
  };
  __mf_20(() => {
    function w(m) {
      m.key === "Escape" && b(ua.CANCELED);
    }
    return window.addEventListener("keyup", w), () => {
      window.removeEventListener("keyup", w);
    };
  }, []);
  const x = Ve.merge(
    Ve.values(c == null ? void 0 : c.toggles).flatMap((w) => w.value ? w.warnings || [] : []),
    c == null ? void 0 : c.tips
  ), v = (w, m) => {
    var S;
    if (!(c != null && c.toggles)) return;
    const y = Ve.cloneDeep(c);
    (S = y.toggles) != null && S[w] && (y.toggles[w].value = m), h({
      id: e6,
      views: y
    });
  };
  return Oi$1.createPortal(
    /* @__PURE__ */ __mf_1(Qc, { appear: true, show: true, as: __mf_0$1, children: /* @__PURE__ */ __mf_1(
      "div",
      {
        className: gt(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black/80": d }
        ),
        style: { zIndex: l },
        onClick: () => b(ua.CANCELED),
        children: /* @__PURE__ */ __mf_1(
          Qc.Child,
          {
            as: __mf_0$1,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ __mf_1(
              oi,
              {
                depth: 3,
                borderType: "light",
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border",
                style: { width: u },
                onClick: (w) => w.stopPropagation(),
                children: /* @__PURE__ */ __mf_2("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  n ? /* @__PURE__ */ __mf_1("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ __mf_1(TL, { name: n, color: o, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ __mf_1(RL, { condition: t, children: /* @__PURE__ */ __mf_1("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-center", children: t }) }),
                  /* @__PURE__ */ __mf_1("p", { className: "w-full text-wrap text-center text-sm font-medium", children: r }),
                  /* @__PURE__ */ __mf_1("div", { className: "text-xs", children: Ve.values(c == null ? void 0 : c.toggles).map((w) => /* @__PURE__ */ __mf_1("div", { children: /* @__PURE__ */ __mf_2("label", { htmlFor: w.key, className: "flex items-center", children: [
                    /* @__PURE__ */ __mf_1(
                      zw,
                      {
                        size: "sm",
                        checked: w.value,
                        onChange: (m) => v(w.key, m)
                      }
                    ),
                    /* @__PURE__ */ __mf_1("span", { className: "ml-1", children: w.title })
                  ] }) }, w.key)) }),
                  /* @__PURE__ */ __mf_1(CL, { warnings: x }),
                  /* @__PURE__ */ __mf_1("div", { className: "flex items-center gap-4", children: i === T1.CONFIRM ? /* @__PURE__ */ __mf_2(__mf_0, { children: [
                    /* @__PURE__ */ __mf_1(
                      Mn,
                      {
                        autoFocus: true,
                        color: "primary",
                        onClick: () => b(ua.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ __mf_1(
                      Mn,
                      {
                        color: "white",
                        variant: "outline",
                        onClick: () => b(ua.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ __mf_1(Mn, { autoFocus: true, onClick: () => b(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    g || document.body
  );
}, RL = (e6) => e6.condition ? /* @__PURE__ */ __mf_1(__mf_0, { children: e6.children }) : null, CL = (e6) => e6.warnings ? /* @__PURE__ */ __mf_1(Qc, { appear: true, show: !!e6.warnings.length, as: __mf_0$1, children: /* @__PURE__ */ __mf_1(oi, { depth: 1, className: "flex flex-col gap-1 rounded-sm p-2 text-xs", children: e6.warnings.map((t, r) => /* @__PURE__ */ __mf_1(
  Qc.Child,
  {
    as: __mf_0$1,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ __mf_2("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ __mf_1(
        Bp,
        {
          className: gt(
            {
              "h-3 w-3": true,
              "text-warning-text": t.type === "warning",
              "text-negative-text": t.type === "error",
              "text-primary": t.type === "info"
            },
            "mr-3"
          )
        }
      ),
      /* @__PURE__ */ __mf_1("div", { className: "flex-1", children: t.message })
    ] })
  },
  `modal-warnings-${r}`
)) }) }) : null;
var IL = /* @__PURE__ */ ((e6) => (e6[e6.MIN = 0.5] = "MIN", e6[e6.MAX = 10] = "MAX", e6[e6.STEP = 0.5] = "STEP", e6[e6.INIT = 1] = "INIT", e6[e6.TRANSITION = 200] = "TRANSITION", e6))(IL || {});
const s6 = ({
  zoom: e6,
  minZoom: t = 0.5,
  maxZoom: r = 10,
  handleZoomIn: n,
  handleZoomOut: i
}) => /* @__PURE__ */ __mf_2(oi, { depth: 4, className: "flex items-center rounded p-1", children: [
  /* @__PURE__ */ __mf_1(
    s2,
    {
      onClick: i,
      className: gt("h-5 w-5 p-1", {
        "text-inactive-text": e6 <= t,
        "cursor-pointer rounded hover:bg-primary-hover": e6 > t
      })
    }
  ),
  /* @__PURE__ */ __mf_2("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e6 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ __mf_1(
    a2,
    {
      onClick: n,
      className: gt("h-5 w-5 p-1", {
        "text-inactive-text": e6 >= r,
        "cursor-pointer rounded hover:bg-primary-hover": e6 < r
      })
    }
  )
] }), Xn = 30, PL = 0.3, NL = 0.6, ML = () => typeof window > "u" ? 400 : Math.round(window.innerHeight * PL), R1 = () => typeof window > "u" ? 600 : Math.round(window.innerHeight * NL), iy = (e6) => {
  const t = R1();
  return Math.min(Math.max(e6, Xn), t);
}, a6 = (e6) => {
  const [t, r] = __mf_26(Xn), n = __mf_25(), i = __mf_25(null), o = R1(), l = ML(), c = t > Xn;
  __mf_20(() => {
    r(e6.isOpen ? l : Xn);
  }, [e6.isOpen, l]), __mf_20(() => {
    const d = () => {
      r((g) => g <= Xn ? Xn : iy(g));
    };
    return window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d), i.current && cancelAnimationFrame(i.current);
    };
  }, []);
  const u = () => {
    if (c) {
      r(Xn), e6.onClose();
      return;
    }
    r(l), e6.onOpen();
  };
  return /* @__PURE__ */ __mf_1(
    Mw,
    {
      enable: { top: true },
      className: "relative w-full select-none border-t isolate",
      style: { zIndex: 49 },
      size: { height: t, width: "100%" },
      maxHeight: o,
      minHeight: Xn,
      onResizeStart: () => {
        n.current && Date.now() - n.current < 200 ? r(c ? Xn : l) : n.current = Date.now();
      },
      onResize: (d, g, f) => {
        i.current && cancelAnimationFrame(i.current), i.current = requestAnimationFrame(() => {
          var h;
          (h = e6.onResize) == null || h.call(e6), i.current = null;
        });
      },
      onResizeStop: (d, g, f, h) => {
        r((b) => iy(b + h.height));
      },
      handleComponent: {
        top: /* @__PURE__ */ __mf_1(Dw, {})
      },
      depth: 1,
      children: /* @__PURE__ */ __mf_2(
        "div",
        {
          "data-cy": "contextualPanel",
          className: "absolute inset-0 flex flex-col overflow-hidden",
          id: `__cp-${Ve.kebabCase(e6.path)}`,
          children: [
            /* @__PURE__ */ __mf_2(
              "div",
              {
                className: gt("flex justify-between items-center px-3 py-0.5", {
                  "flex-1": !c
                }),
                children: [
                  /* @__PURE__ */ __mf_2("div", { className: "group flex items-center justify-start", children: [
                    /* @__PURE__ */ __mf_1("span", { className: "mr-2 text-sm", children: "Contextual panel" }),
                    e6.tipKey ? /* @__PURE__ */ __mf_1(oz, { tipKey: e6.tipKey, alwaysOn: true, asButton: true }) : null,
                    /* @__PURE__ */ __mf_1(
                      Mn,
                      {
                        variant: "ghost",
                        color: "white",
                        "data-cy": `contextualPanel-toggle-button-${c ? "close" : "open"}`,
                        onClick: u,
                        children: c ? /* @__PURE__ */ __mf_1(n2, { className: "h-4 w-4" }) : /* @__PURE__ */ __mf_1(i2, { className: "h-4 w-4" })
                      }
                    )
                  ] }),
                  e6.headerRightSide
                ]
              }
            ),
            /* @__PURE__ */ __mf_2(yf, { of: c, children: [
              /* @__PURE__ */ __mf_1(yf, { of: e6.render, children: e6.render }),
              /* @__PURE__ */ __mf_1(yf, { of: !e6.render, children: e6.children })
            ] })
          ]
        }
      )
    }
  );
}, l6 = ({
  title: e6 = "Invalid page structure",
  error: t,
  onClose: r,
  onOpenInTextEditor: n,
  onReset: i,
  resetButtonLabel: o = "Reset Page"
}) => /* @__PURE__ */ __mf_1("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ __mf_2(
  oi,
  {
    depth: 4,
    borderType: "light",
    className: "flex flex-col items-center rounded px-10 py-6 text-center shadow-md",
    children: [
      /* @__PURE__ */ __mf_2("div", { className: "relative", children: [
        /* @__PURE__ */ __mf_1(u2, { className: "relative z-20 h-12 w-12 text-negative-text rounded-full" }),
        /* @__PURE__ */ __mf_1("div", { className: "size-full absolute inset-0 rounded-full z-0 bg-white" })
      ] }),
      /* @__PURE__ */ __mf_1("p", { className: "mb-2 mt-4 text-2xl text-body", children: e6 }),
      /* @__PURE__ */ __mf_1("p", { className: "text-md mb-4 font-extralight text-muted", children: t }),
      /* @__PURE__ */ __mf_2("div", { className: "flex gap-4", children: [
        n && /* @__PURE__ */ __mf_1(Mn, { onClick: n, children: "Open in Text Editor" }),
        i && /* @__PURE__ */ __mf_1(Mn, { color: "negative", onClick: i, children: o }),
        r && /* @__PURE__ */ __mf_1(Mn, { color: "white", variant: "outline", onClick: r, children: "Close" })
      ] })
    ]
  }
) }), c6 = ({
  onChange: e6,
  value: t,
  delay: r,
  placeholder: n,
  containerClassName: i,
  onFocusInput: o,
  icon: l,
  "data-cy": c
}) => {
  const [u, d] = __mf_26(t), g = __mf_25(null);
  return /* @__PURE__ */ __mf_1(Ns.Root, { className: gt("w-full", i), children: /* @__PURE__ */ __mf_2(Ns.Group, { children: [
    /* @__PURE__ */ __mf_1(Ns.Icon, { children: l ? /* @__PURE__ */ __mf_1(
      Mn,
      {
        color: "white",
        variant: "ghost",
        className: "mr-1",
        onClick: () => {
          var f;
          return (f = g.current) == null ? void 0 : f.focus();
        },
        children: /* @__PURE__ */ __mf_1("span", { className: `text-base fa ${l}` })
      }
    ) : /* @__PURE__ */ __mf_1(p2, {}) }),
    /* @__PURE__ */ __mf_1(
      Ns.Field,
      {
        ref: g,
        "data-cy": c || "search-cy",
        placeholder: n || "Search",
        onChange: (f) => {
          d(f.currentTarget.value);
          const h = Ve.escapeRegExp(f.target.value);
          if (!r) return e6(h);
          Ve.debounce(e6, r)(h);
        },
        value: u,
        onFocus: () => o && o(),
        onDrop: (f) => f.preventDefault()
      }
    ),
    t && /* @__PURE__ */ __mf_1(
      Ns.Icon,
      {
        isAction: true,
        onClick: () => {
          e6(""), d("");
        },
        children: /* @__PURE__ */ __mf_1(es, {})
      }
    )
  ] }) });
}, u6 = __mf_13(
  ({
    label: e6,
    Icon: t,
    className: r = "",
    disableHover: n = false,
    iconClassname: i,
    ...o
  }, l) => /* @__PURE__ */ __mf_1(__mf_0, { children: /* @__PURE__ */ __mf_1(Cw, { label: e6, usePortal: true, children: /* @__PURE__ */ __mf_1(Mn, { ref: l, variant: "ghost", color: "white", ...o, children: /* @__PURE__ */ __mf_1(t, { className: gt("size-4", i) }) }) }) })
);
function Wo(e6) {
  if (e6 !== void 0)
    return typeof e6 == "number" ? `${e6}px` : e6;
}
function d6({
  rowGap: e6,
  columnGap: t,
  templateColumns: r,
  templateRows: n,
  height: i,
  width: o,
  style: l,
  ...c
}) {
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      ...c,
      style: {
        display: "grid",
        rowGap: Wo(e6),
        columnGap: Wo(t),
        gridTemplateColumns: r,
        gridTemplateRows: n,
        height: Wo(i),
        width: Wo(o),
        ...l
      }
    }
  );
}
function f6({
  colStart: e6,
  colSpan: t,
  rowStart: r,
  rowSpan: n,
  sx: i,
  style: o,
  ...l
}) {
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      ...l,
      style: {
        gridColumnStart: e6,
        gridColumnEnd: t ? `span ${t}` : void 0,
        gridRowStart: r,
        gridRowEnd: n ? `span ${n}` : void 0,
        ...i,
        ...o
      }
    }
  );
}
function p6({
  columns: e6 = 1,
  spacingX: t,
  spacingY: r,
  style: n,
  ...i
}) {
  return /* @__PURE__ */ __mf_1(
    "div",
    {
      ...i,
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e6}, minmax(0, 1fr))`,
        columnGap: Wo(t),
        rowGap: Wo(r),
        ...n
      }
    }
  );
}
const DL = __mf_13(
  ({ fallback: e6 = null, onError: t, onLoad: r, src: n, style: i, ...o }, l) => {
    const [c, u] = __mf_26(false);
    return __mf_20(() => {
      u(false);
    }, [n]), !n || c ? /* @__PURE__ */ __mf_1(__mf_0, { children: e6 }) : /* @__PURE__ */ __mf_1(
      "img",
      {
        ...o,
        ref: l,
        src: n,
        style: i,
        onLoad: (d) => {
          u(false), r == null || r(d);
        },
        onError: (d) => {
          u(true), t == null || t(d);
        }
      }
    );
  }
);
DL.displayName = "Image";
function h6(e6, t) {
  const r = __mf_25(false);
  __mf_20(() => {
    if (r.current) return e6();
    r.current = true;
  }, t);
}
const $f = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function Ff(e6, t, r, n) {
  e6.addEventListener ? e6.addEventListener(t, r, n) : e6.attachEvent && e6.attachEvent("on".concat(t), r);
}
function ia(e6, t, r, n) {
  e6.removeEventListener ? e6.removeEventListener(t, r, n) : e6.detachEvent && e6.detachEvent("on".concat(t), r);
}
function C1(e6, t) {
  const r = t.slice(0, t.length - 1);
  for (let n = 0; n < r.length; n++) r[n] = e6[r[n].toLowerCase()];
  return r;
}
function I1(e6) {
  typeof e6 != "string" && (e6 = ""), e6 = e6.replace(/\s/g, "");
  const t = e6.split(",");
  let r = t.lastIndexOf("");
  for (; r >= 0; )
    t[r - 1] += ",", t.splice(r, 1), r = t.lastIndexOf("");
  return t;
}
function zL(e6, t) {
  const r = e6.length >= t.length ? e6 : t, n = e6.length >= t.length ? t : e6;
  let i = true;
  for (let o = 0; o < r.length; o++)
    n.indexOf(r[o]) === -1 && (i = false);
  return i;
}
const Ca = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  /// https://w3c.github.io/uievents/#events-keyboard-key-location
  arrowup: 38,
  arrowdown: 40,
  arrowleft: 37,
  arrowright: 39,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": $f ? 173 : 189,
  "=": $f ? 61 : 187,
  ";": $f ? 59 : 186,
  "'": 222,
  "{": 219,
  "}": 221,
  "[": 219,
  "]": 221,
  "\\": 220
}, hn = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  meta: 91,
  command: 91
}, da = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, Jt = {
  16: false,
  18: false,
  17: false,
  91: false
}, kt = {};
for (let e6 = 1; e6 < 20; e6++)
  Ca["f".concat(e6)] = 111 + e6;
let St = [], xa = null, P1 = "all";
const Qn = /* @__PURE__ */ new Map(), ns = (e6) => Ca[e6.toLowerCase()] || hn[e6.toLowerCase()] || e6.toUpperCase().charCodeAt(0), LL = (e6) => Object.keys(Ca).find((t) => Ca[t] === e6), $L = (e6) => Object.keys(hn).find((t) => hn[t] === e6);
function N1(e6) {
  P1 = e6 || "all";
}
function Ia() {
  return P1 || "all";
}
function FL() {
  return St.slice(0);
}
function HL() {
  return St.map((e6) => LL(e6) || $L(e6) || String.fromCharCode(e6));
}
function jL() {
  const e6 = [];
  return Object.keys(kt).forEach((t) => {
    kt[t].forEach((r) => {
      let {
        key: n,
        scope: i,
        mods: o,
        shortcut: l
      } = r;
      e6.push({
        scope: i,
        shortcut: l,
        mods: o,
        keys: n.split("+").map((c) => ns(c))
      });
    });
  }), e6;
}
function BL(e6) {
  const t = e6.target || e6.srcElement, {
    tagName: r
  } = t;
  let n = true;
  const i = r === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (i || r === "TEXTAREA" || r === "SELECT") && !t.readOnly) && (n = false), n;
}
function WL(e6) {
  return typeof e6 == "string" && (e6 = ns(e6)), St.indexOf(e6) !== -1;
}
function VL(e6, t) {
  let r, n;
  e6 || (e6 = Ia());
  for (const i in kt)
    if (Object.prototype.hasOwnProperty.call(kt, i))
      for (r = kt[i], n = 0; n < r.length; )
        r[n].scope === e6 ? r.splice(n, 1).forEach((l) => {
          let {
            element: c
          } = l;
          return mh(c);
        }) : n++;
  Ia() === e6 && N1(t || "all");
}
function UL(e6) {
  let t = e6.keyCode || e6.which || e6.charCode;
  e6.key && e6.key.toLowerCase() === "capslock" && (t = ns(e6.key));
  const r = St.indexOf(t);
  if (r >= 0 && St.splice(r, 1), e6.key && e6.key.toLowerCase() === "meta" && St.splice(0, St.length), (t === 93 || t === 224) && (t = 91), t in Jt) {
    Jt[t] = false;
    for (const n in hn) hn[n] === t && (pn[n] = false);
  }
}
function M1(e6) {
  if (typeof e6 > "u")
    Object.keys(kt).forEach((i) => {
      Array.isArray(kt[i]) && kt[i].forEach((o) => vc(o)), delete kt[i];
    }), mh(null);
  else if (Array.isArray(e6))
    e6.forEach((i) => {
      i.key && vc(i);
    });
  else if (typeof e6 == "object")
    e6.key && vc(e6);
  else if (typeof e6 == "string") {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    let [i, o] = r;
    typeof i == "function" && (o = i, i = ""), vc({
      key: e6,
      scope: i,
      method: o,
      splitKey: "+"
    });
  }
}
const vc = (e6) => {
  let {
    key: t,
    scope: r,
    method: n,
    splitKey: i = "+"
  } = e6;
  I1(t).forEach((l) => {
    const c = l.split(i), u = c.length, d = c[u - 1], g = d === "*" ? "*" : ns(d);
    if (!kt[g]) return;
    r || (r = Ia());
    const f = u > 1 ? C1(hn, c) : [], h = [];
    kt[g] = kt[g].filter((b) => {
      const v = (n ? b.method === n : true) && b.scope === r && zL(b.mods, f);
      return v && h.push(b.element), !v;
    }), h.forEach((b) => mh(b));
  });
};
function oy(e6, t, r, n) {
  if (t.element !== n)
    return;
  let i;
  if (t.scope === r || t.scope === "all") {
    i = t.mods.length > 0;
    for (const o in Jt)
      Object.prototype.hasOwnProperty.call(Jt, o) && (!Jt[o] && t.mods.indexOf(+o) > -1 || Jt[o] && t.mods.indexOf(+o) === -1) && (i = false);
    (t.mods.length === 0 && !Jt[16] && !Jt[18] && !Jt[17] && !Jt[91] || i || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(St), t.method(e6, t) === false && (e6.preventDefault ? e6.preventDefault() : e6.returnValue = false, e6.stopPropagation && e6.stopPropagation(), e6.cancelBubble && (e6.cancelBubble = true)));
  }
}
function sy(e6, t) {
  const r = kt["*"];
  let n = e6.keyCode || e6.which || e6.charCode;
  if (e6.key && e6.key.toLowerCase() === "capslock" || !pn.filter.call(this, e6)) return;
  if ((n === 93 || n === 224) && (n = 91), St.indexOf(n) === -1 && n !== 229 && St.push(n), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((c) => {
    const u = da[c];
    e6[c] && St.indexOf(u) === -1 ? St.push(u) : !e6[c] && St.indexOf(u) > -1 ? St.splice(St.indexOf(u), 1) : c === "metaKey" && e6[c] && (St = St.filter((d) => d in da || d === n));
  }), n in Jt) {
    Jt[n] = true;
    for (const c in hn)
      if (Object.prototype.hasOwnProperty.call(hn, c)) {
        const u = da[hn[c]];
        pn[c] = e6[u];
      }
    if (!r) return;
  }
  for (const c in Jt)
    Object.prototype.hasOwnProperty.call(Jt, c) && (Jt[c] = e6[da[c]]);
  e6.getModifierState && !(e6.altKey && !e6.ctrlKey) && e6.getModifierState("AltGraph") && (St.indexOf(17) === -1 && St.push(17), St.indexOf(18) === -1 && St.push(18), Jt[17] = true, Jt[18] = true);
  const i = Ia();
  if (r)
    for (let c = 0; c < r.length; c++)
      r[c].scope === i && (e6.type === "keydown" && r[c].keydown || e6.type === "keyup" && r[c].keyup) && oy(e6, r[c], i, t);
  if (!(n in kt)) return;
  const o = kt[n], l = o.length;
  for (let c = 0; c < l; c++)
    if ((e6.type === "keydown" && o[c].keydown || e6.type === "keyup" && o[c].keyup) && o[c].key) {
      const u = o[c], {
        splitKey: d
      } = u, g = u.key.split(d), f = [];
      for (let h = 0; h < g.length; h++)
        f.push(ns(g[h]));
      f.sort().join("") === St.sort().join("") && oy(e6, u, i, t);
    }
}
function pn(e6, t, r) {
  St = [];
  const n = I1(e6);
  let i = [], o = "all", l = document, c = 0, u = false, d = true, g = "+", f = false, h = false;
  for (r === void 0 && typeof t == "function" && (r = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (o = t.scope), t.element && (l = t.element), t.keyup && (u = t.keyup), t.keydown !== void 0 && (d = t.keydown), t.capture !== void 0 && (f = t.capture), typeof t.splitKey == "string" && (g = t.splitKey), t.single === true && (h = true)), typeof t == "string" && (o = t), h && M1(e6, o); c < n.length; c++)
    e6 = n[c].split(g), i = [], e6.length > 1 && (i = C1(hn, e6)), e6 = e6[e6.length - 1], e6 = e6 === "*" ? "*" : ns(e6), e6 in kt || (kt[e6] = []), kt[e6].push({
      keyup: u,
      keydown: d,
      scope: o,
      mods: i,
      shortcut: n[c],
      method: r,
      key: n[c],
      splitKey: g,
      element: l
    });
  if (typeof l < "u" && window) {
    if (!Qn.has(l)) {
      const b = function() {
        let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return sy(v, l);
      }, x = function() {
        let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        sy(v, l), UL(v);
      };
      Qn.set(l, {
        keydownListener: b,
        keyupListenr: x,
        capture: f
      }), Ff(l, "keydown", b, f), Ff(l, "keyup", x, f);
    }
    if (!xa) {
      const b = () => {
        St = [];
      };
      xa = {
        listener: b,
        capture: f
      }, Ff(window, "focus", b, f);
    }
  }
}
function qL(e6) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(kt).forEach((r) => {
    kt[r].filter((i) => i.scope === t && i.shortcut === e6).forEach((i) => {
      i && i.method && i.method();
    });
  });
}
function mh(e6) {
  const t = Object.values(kt).flat();
  if (t.findIndex((n) => {
    let {
      element: i
    } = n;
    return i === e6;
  }) < 0) {
    const {
      keydownListener: n,
      keyupListenr: i,
      capture: o
    } = Qn.get(e6) || {};
    n && i && (ia(e6, "keyup", i, o), ia(e6, "keydown", n, o), Qn.delete(e6));
  }
  if ((t.length <= 0 || Qn.size <= 0) && (Object.keys(Qn).forEach((i) => {
    const {
      keydownListener: o,
      keyupListenr: l,
      capture: c
    } = Qn.get(i) || {};
    o && l && (ia(i, "keyup", l, c), ia(i, "keydown", o, c), Qn.delete(i));
  }), Qn.clear(), Object.keys(kt).forEach((i) => delete kt[i]), xa)) {
    const {
      listener: i,
      capture: o
    } = xa;
    ia(window, "focus", i, o), xa = null;
  }
}
const Hf = {
  getPressedKeyString: HL,
  setScope: N1,
  getScope: Ia,
  deleteScope: VL,
  getPressedKeyCodes: FL,
  getAllKeyCodes: jL,
  isPressed: WL,
  filter: BL,
  trigger: qL,
  unbind: M1,
  keyMap: Ca,
  modifier: hn,
  modifierMap: da
};
for (const e6 in Hf)
  Object.prototype.hasOwnProperty.call(Hf, e6) && (pn[e6] = Hf[e6]);
if (typeof window < "u") {
  const e6 = window.hotkeys;
  pn.noConflict = (t) => (t && window.hotkeys === pn && (window.hotkeys = e6), pn), window.hotkeys = pn;
}
pn.filter = () => true;
function g6(e6, t, r, n) {
  r instanceof Array && (n = r, r = void 0), n = n || [], r = r || {};
  const { preventDefault: i = true } = r, o = __mf_17(
    (c, u) => {
      i && c.preventDefault(), setTimeout(() => t(c, u));
    },
    n
  ), l = () => {
    pn.unbind(e6, o);
  };
  __mf_20(() => (pn(e6, r, o), l), [e6, r, o]);
}
const v6 = (e6, t = "click") => {
  const r = __mf_25(null), n = __mf_25(e6);
  return n.current = e6, __mf_20(() => {
    const i = (o) => {
      r.current && !r.current.contains(o.target) && n.current(o);
    };
    return document.addEventListener(t, i, true), () => {
      document.removeEventListener(t, i, true);
    };
  }, [e6, t]), r;
};
function m6(e6) {
  const t = __mf_25();
  return __mf_20(() => {
    t.current = e6;
  }, [e6]), t.current;
}
function b6(e6) {
  const t = __mf_25(e6);
  return __mf_20(() => {
    t.current = e6;
  }, [e6]), t;
}
function y6(e6) {
  const t = __mf_25(null);
  return __mf_20(() => {
    e6 && (typeof e6 == "function" ? e6(t.current) : e6.current = t.current);
  }), t;
}
function w6(e6) {
  const [t, r] = __mf_26(e6), n = (o, l) => {
    r((c) => ({
      ...c,
      features: {
        ...c.features,
        [o]: {
          enabled: l
        }
      }
    }));
  }, i = __mf_17(
    (...o) => o.every((l) => {
      var c;
      return (c = t.features[l]) == null ? void 0 : c.enabled;
    }),
    [t.features]
  );
  return {
    setFeature: n,
    isFeatureEnabled: i
  };
}
const D1 = __mf_9(""), x6 = (e6) => /* @__PURE__ */ __mf_1(D1.Provider, { value: e6.value, children: e6.children }), S6 = () => {
  const e6 = __mf_18(D1);
  if (typeof e6 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e6;
};
function _6(e6) {
  const [t, r] = __mf_26(e6), n = __mf_23(() => GL(t, r), []);
  return {
    state: t,
    actions: {
      ...n,
      set: (i) => {
        r(
          typeof i == "function" ? i : (o) => ({
            ...o,
            ...i
          })
        );
      }
    }
  };
}
function GL(e6, t = () => {
}) {
  return Object.keys(e6).reduce(
    (n, i) => ({
      ...n,
      [`set${Ve.upperFirst(i)}`]: (o) => t((l) => ({
        ...l,
        [i]: o
      }))
    }),
    {}
  );
}
const E6 = (e6, t, r = {}) => {
  r = {
    timeout: 200,
    ...r
  };
  const n = __mf_25(), i = () => {
    n.current && (clearTimeout(n.current), n.current = null);
  };
  return __mf_17(
    (o, ...l) => {
      i(), t && o.detail === 1 && (n.current = setTimeout(() => {
        t(o, ...l);
      }, r.timeout)), o.detail % 2 === 0 && e6(o, ...l);
    },
    [t, e6, r.timeout]
  );
};
function Qt(e6) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Error("[Immer] minified error nr: " + e6 + (r.length ? " " + r.map((function(l) {
    return "'" + l + "'";
  })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Jo(e6) {
  return !!e6 && !!e6[zr];
}
function so(e6) {
  var t;
  return !!e6 && ((function(r) {
    if (!r || typeof r != "object") return false;
    var n = Object.getPrototypeOf(r);
    if (n === null) return true;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === t4;
  })(e6) || Array.isArray(e6) || !!e6[hy] || !!(!((t = e6.constructor) === null || t === void 0) && t[hy]) || bh(e6) || yh(e6));
}
function Pa(e6, t, r) {
  r === void 0 && (r = false), is(e6) === 0 ? (r ? Object.keys : _h)(e6).forEach((function(n) {
    r && typeof n == "symbol" || t(n, e6[n], e6);
  })) : e6.forEach((function(n, i) {
    return t(i, n, e6);
  }));
}
function is(e6) {
  var t = e6[zr];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e6) ? 1 : bh(e6) ? 2 : yh(e6) ? 3 : 0;
}
function vp(e6, t) {
  return is(e6) === 2 ? e6.has(t) : Object.prototype.hasOwnProperty.call(e6, t);
}
function ZL(e6, t) {
  return is(e6) === 2 ? e6.get(t) : e6[t];
}
function z1(e6, t, r) {
  var n = is(e6);
  n === 2 ? e6.set(t, r) : n === 3 ? e6.add(r) : e6[t] = r;
}
function KL(e6, t) {
  return e6 === t ? e6 !== 0 || 1 / e6 == 1 / t : e6 != e6 && t != t;
}
function bh(e6) {
  return JL && e6 instanceof Map;
}
function yh(e6) {
  return QL && e6 instanceof Set;
}
function Yi(e6) {
  return e6.o || e6.t;
}
function wh(e6) {
  if (Array.isArray(e6)) return Array.prototype.slice.call(e6);
  var t = r4(e6);
  delete t[zr];
  for (var r = _h(t), n = 0; n < r.length; n++) {
    var i = r[n], o = t[i];
    o.writable === false && (o.writable = true, o.configurable = true), (o.get || o.set) && (t[i] = { configurable: true, writable: true, enumerable: o.enumerable, value: e6[i] });
  }
  return Object.create(Object.getPrototypeOf(e6), t);
}
function Na(e6, t) {
  return t === void 0 && (t = false), xh(e6) || Jo(e6) || !so(e6) || (is(e6) > 1 && (e6.set = e6.add = e6.clear = e6.delete = YL), Object.freeze(e6), t && Pa(e6, (function(r, n) {
    return Na(n, true);
  }), true)), e6;
}
function YL() {
  Qt(2);
}
function xh(e6) {
  return e6 == null || typeof e6 != "object" || Object.isFrozen(e6);
}
function Dn(e6) {
  var t = n4[e6];
  return t || Qt(18, e6), t;
}
function ay() {
  return Qo;
}
function jf(e6, t) {
  t && (Dn("Patches"), e6.u = [], e6.s = [], e6.v = t);
}
function eu(e6) {
  mp(e6), e6.p.forEach(XL), e6.p = null;
}
function mp(e6) {
  e6 === Qo && (Qo = e6.l);
}
function ly(e6) {
  return Qo = { p: [], l: Qo, h: e6, m: true, _: 0 };
}
function XL(e6) {
  var t = e6[zr];
  t.i === 0 || t.i === 1 ? t.j() : t.g = true;
}
function Bf(e6, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e6 !== void 0 && e6 !== r;
  return t.h.O || Dn("ES5").S(t, e6, n), n ? (r[zr].P && (eu(t), Qt(4)), so(e6) && (e6 = tu(t, e6), t.l || ru(t, e6)), t.u && Dn("Patches").M(r[zr].t, e6, t.u, t.s)) : e6 = tu(t, r, []), eu(t), t.u && t.v(t.u, t.s), e6 !== $1 ? e6 : void 0;
}
function tu(e6, t, r) {
  if (xh(t)) return t;
  var n = t[zr];
  if (!n) return Pa(t, (function(c, u) {
    return cy(e6, n, t, c, u, r);
  }), true), t;
  if (n.A !== e6) return t;
  if (!n.P) return ru(e6, n.t, true), n.t;
  if (!n.I) {
    n.I = true, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = wh(n.k) : n.o, o = i, l = false;
    n.i === 3 && (o = new Set(i), i.clear(), l = true), Pa(o, (function(c, u) {
      return cy(e6, n, i, c, u, r, l);
    })), ru(e6, i, false), r && e6.u && Dn("Patches").N(n, r, e6.u, e6.s);
  }
  return n.o;
}
function cy(e6, t, r, n, i, o, l) {
  if (Jo(i)) {
    var c = tu(e6, i, o && t && t.i !== 3 && !vp(t.R, n) ? o.concat(n) : void 0);
    if (z1(r, n, c), !Jo(c)) return;
    e6.m = false;
  } else l && r.add(i);
  if (so(i) && !xh(i)) {
    if (!e6.h.D && e6._ < 1) return;
    tu(e6, i), t && t.A.l || ru(e6, i);
  }
}
function ru(e6, t, r) {
  r === void 0 && (r = false), !e6.l && e6.h.D && e6.m && Na(t, r);
}
function Wf(e6, t) {
  var r = e6[zr];
  return (r ? Yi(r) : e6)[t];
}
function uy(e6, t) {
  if (t in e6) for (var r = Object.getPrototypeOf(e6); r; ) {
    var n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function bp(e6) {
  e6.P || (e6.P = true, e6.l && bp(e6.l));
}
function Vf(e6) {
  e6.o || (e6.o = wh(e6.t));
}
function yp(e6, t, r) {
  var n = bh(t) ? Dn("MapSet").F(t, r) : yh(t) ? Dn("MapSet").T(t, r) : e6.O ? (function(i, o) {
    var l = Array.isArray(i), c = { i: l ? 1 : 0, A: o ? o.A : ay(), P: false, I: false, R: {}, l: o, t: i, k: null, o: null, j: null, C: false }, u = c, d = wp;
    l && (u = [c], d = fa);
    var g = Proxy.revocable(u, d), f = g.revoke, h = g.proxy;
    return c.k = h, c.j = f, h;
  })(t, r) : Dn("ES5").J(t, r);
  return (r ? r.A : ay()).p.push(n), n;
}
function L1(e6) {
  return Jo(e6) || Qt(22, e6), (function t(r) {
    if (!so(r)) return r;
    var n, i = r[zr], o = is(r);
    if (i) {
      if (!i.P && (i.i < 4 || !Dn("ES5").K(i))) return i.t;
      i.I = true, n = dy(r, o), i.I = false;
    } else n = dy(r, o);
    return Pa(n, (function(l, c) {
      i && ZL(i.t, l) === c || z1(n, l, t(c));
    })), o === 3 ? new Set(n) : n;
  })(e6);
}
function dy(e6, t) {
  switch (t) {
    case 2:
      return new Map(e6);
    case 3:
      return Array.from(e6);
  }
  return wh(e6);
}
var fy, Qo, Sh = typeof Symbol < "u" && typeof Symbol("x") == "symbol", JL = typeof Map < "u", QL = typeof Set < "u", py = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", $1 = Sh ? Symbol.for("immer-nothing") : ((fy = {})["immer-nothing"] = true, fy), hy = Sh ? Symbol.for("immer-draftable") : "__$immer_draftable", zr = Sh ? Symbol.for("immer-state") : "__$immer_state", t4 = "" + Object.prototype.constructor, _h = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e6) {
  return Object.getOwnPropertyNames(e6).concat(Object.getOwnPropertySymbols(e6));
} : Object.getOwnPropertyNames, r4 = Object.getOwnPropertyDescriptors || function(e6) {
  var t = {};
  return _h(e6).forEach((function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e6, r);
  })), t;
}, n4 = {}, wp = { get: function(e6, t) {
  if (t === zr) return e6;
  var r = Yi(e6);
  if (!vp(r, t)) return (function(i, o, l) {
    var c, u = uy(o, l);
    return u ? "value" in u ? u.value : (c = u.get) === null || c === void 0 ? void 0 : c.call(i.k) : void 0;
  })(e6, r, t);
  var n = r[t];
  return e6.I || !so(n) ? n : n === Wf(e6.t, t) ? (Vf(e6), e6.o[t] = yp(e6.A.h, n, e6)) : n;
}, has: function(e6, t) {
  return t in Yi(e6);
}, ownKeys: function(e6) {
  return Reflect.ownKeys(Yi(e6));
}, set: function(e6, t, r) {
  var n = uy(Yi(e6), t);
  if (n != null && n.set) return n.set.call(e6.k, r), true;
  if (!e6.P) {
    var i = Wf(Yi(e6), t), o = i == null ? void 0 : i[zr];
    if (o && o.t === r) return e6.o[t] = r, e6.R[t] = false, true;
    if (KL(r, i) && (r !== void 0 || vp(e6.t, t))) return true;
    Vf(e6), bp(e6);
  }
  return e6.o[t] === r && (r !== void 0 || t in e6.o) || Number.isNaN(r) && Number.isNaN(e6.o[t]) || (e6.o[t] = r, e6.R[t] = true), true;
}, deleteProperty: function(e6, t) {
  return Wf(e6.t, t) !== void 0 || t in e6.t ? (e6.R[t] = false, Vf(e6), bp(e6)) : delete e6.R[t], e6.o && delete e6.o[t], true;
}, getOwnPropertyDescriptor: function(e6, t) {
  var r = Yi(e6), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e6.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  Qt(11);
}, getPrototypeOf: function(e6) {
  return Object.getPrototypeOf(e6.t);
}, setPrototypeOf: function() {
  Qt(12);
} }, fa = {};
Pa(wp, (function(e6, t) {
  fa[e6] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
})), fa.deleteProperty = function(e6, t) {
  return fa.set.call(this, e6, t, void 0);
}, fa.set = function(e6, t, r) {
  return wp.set.call(this, e6[0], t, r, e6[0]);
};
var i4 = (function() {
  function e6(r) {
    var n = this;
    this.O = py, this.D = true, this.produce = function(i, o, l) {
      if (typeof i == "function" && typeof o != "function") {
        var c = o;
        o = i;
        var u = n;
        return function(v) {
          var w = this;
          v === void 0 && (v = c);
          for (var m = arguments.length, y = Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++) y[S - 1] = arguments[S];
          return u.produce(v, (function(O) {
            var E;
            return (E = o).call.apply(E, [w, O].concat(y));
          }));
        };
      }
      var d;
      if (typeof o != "function" && Qt(6), l !== void 0 && typeof l != "function" && Qt(7), so(i)) {
        var g = ly(n), f = yp(n, i, void 0), h = true;
        try {
          d = o(f), h = false;
        } finally {
          h ? eu(g) : mp(g);
        }
        return typeof Promise < "u" && d instanceof Promise ? d.then((function(v) {
          return jf(g, l), Bf(v, g);
        }), (function(v) {
          throw eu(g), v;
        })) : (jf(g, l), Bf(d, g));
      }
      if (!i || typeof i != "object") {
        if ((d = o(i)) === void 0 && (d = i), d === $1 && (d = void 0), n.D && Na(d, true), l) {
          var b = [], x = [];
          Dn("Patches").M(i, d, b, x), l(b, x);
        }
        return d;
      }
      Qt(21, i);
    }, this.produceWithPatches = function(i, o) {
      if (typeof i == "function") return function(d) {
        for (var g = arguments.length, f = Array(g > 1 ? g - 1 : 0), h = 1; h < g; h++) f[h - 1] = arguments[h];
        return n.produceWithPatches(d, (function(b) {
          return i.apply(void 0, [b].concat(f));
        }));
      };
      var l, c, u = n.produce(i, o, (function(d, g) {
        l = d, c = g;
      }));
      return typeof Promise < "u" && u instanceof Promise ? u.then((function(d) {
        return [d, l, c];
      })) : [u, l, c];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e6.prototype;
  return t.createDraft = function(r) {
    so(r) || Qt(8), Jo(r) && (r = L1(r));
    var n = ly(this), i = yp(this, r, void 0);
    return i[zr].C = true, mp(n), i;
  }, t.finishDraft = function(r, n) {
    var i = r && r[zr];
    var o = i.A;
    return jf(o, n), Bf(void 0, o);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !py && Qt(20), this.O = r;
  }, t.applyPatches = function(r, n) {
    var i;
    for (i = n.length - 1; i >= 0; i--) {
      var o = n[i];
      if (o.path.length === 0 && o.op === "replace") {
        r = o.value;
        break;
      }
    }
    i > -1 && (n = n.slice(i + 1));
    var l = Dn("Patches").$;
    return Jo(r) ? l(r, n) : this.produce(r, (function(c) {
      return l(c, n);
    }));
  }, e6;
})(), Lr = new i4(), o4 = Lr.produce;
Lr.produceWithPatches.bind(Lr);
Lr.setAutoFreeze.bind(Lr);
Lr.setUseProxies.bind(Lr);
Lr.applyPatches.bind(Lr);
Lr.createDraft.bind(Lr);
Lr.finishDraft.bind(Lr);
function s4(e6) {
  var t = __mf_26(function() {
    return Na(typeof e6 == "function" ? e6() : e6, true);
  }), r = t[1];
  return [t[0], __mf_17(function(n) {
    r(typeof n == "function" ? o4(n) : Na(n));
  }, [])];
}
const O6 = (e6, t, r) => {
  const [n, i] = s4(e6), o = __mf_25(null);
  __mf_20(() => {
    var u;
    return r && (o.current = void 0 , (u = o.current) == null || u.init(e6)), () => {
      var d, g;
      (g = (d = o.current) == null ? void 0 : d.disconnect) == null || g.call(d);
    };
  }, []);
  const l = t && typeof t == "object" ? t : {}, c = __mf_23(
    () => Object.keys(l).reduce((u, d) => ({
      ...u,
      [d]: (g) => (i((f) => {
        var h;
        l[d](f, g), (h = o.current) == null || h.send(
          {
            type: l[d].name
          },
          L1(f)
        );
      }), c)
    }), {}),
    [i]
  );
  return { state: n, dispatch: c };
}, k6 = (e6) => {
  const t = bS(e6), r = () => {
    const { id: n, namespace: i } = t, o = window.DataSource.spaces[i];
    if (o && o.sources)
      return o.sources[n];
  };
  return {
    actions: {
      setProperty: (n, i) => {
        try {
          const o = r();
          o && o.setValue(n, i);
        } catch {
        }
      },
      getValue: () => r()
    }
  };
}, A6 = ({
  datasourceId: e6,
  isDsBuild: t = false,
  onChange: r
}) => {
  const { id: n, namespace: i } = bS(e6), [o, l] = __mf_26(false), c = __mf_17(() => {
    try {
      return window.DataSource.getSource(n, i);
    } catch {
      return;
    }
  }, [i, n]), u = (f, h) => {
    const b = c();
    b && b.setValue(f, h);
  }, d = async () => {
    const f = c();
    if (!f) return;
    const h = await (f == null ? void 0 : f.getValue());
    r == null || r(h);
  }, g = (f) => {
    const { id: h } = f;
    !o && h && h.startsWith(n) && l(true);
  };
  return __mf_20(() => {
    if (o) {
      const f = c();
      return f ? (f == null || f.addListener("changed", d), () => f == null ? void 0 : f.removeListener("changed", d)) : void 0;
    }
  }, [o]), __mf_20(() => {
    if (t)
      return window.addEventListener("datasource:created", g), () => window.removeEventListener(
        "datasource:created",
        g
      );
  }, [t]), {
    loaded: o,
    setCurrentSource: u
  };
};
function T6(e6 = false) {
  const [t, r] = __mf_26(e6), n = __mf_23(
    () => ({
      on: () => r(true),
      off: () => r(false),
      toggle: () => r((i) => !i)
    }),
    []
  );
  return [t, n];
}
function R6(e6) {
  const t = __mf_25(e6);
  return __mf_20(() => {
    t.current = e6;
  }), __mf_17((...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function l4(e6, t) {
  const r = e6 !== void 0;
  return [r, r ? e6 : t];
}
function C6({
  value: e6,
  defaultValue: t,
  onChange: r
}) {
  const [n, i] = __mf_26(t), [o, l] = l4(
    e6,
    n
  ), c = __mf_17(
    (u) => {
      const d = typeof u == "function" ? u(l) : u;
      o || i(d), d !== l && (r == null || r(d));
    },
    [l, o, r]
  );
  return [l, c];
}
const I6 = typeof window < "u" ? __mf_22 : __mf_20;
function P6(e6, t) {
  const r = __mf_25(false);
  __mf_20(() => {
    if (!r.current) {
      r.current = true;
      return;
    }
    return e6();
  }, t);
}
function N6(e6) {
  return {
    ...e6,
    isDisabled: e6.isDisabled ?? e6.disabled,
    isReadOnly: e6.isReadOnly ?? e6.readOnly,
    isRequired: e6.isRequired ?? e6.required
  };
}
function ni(e6) {
  return typeof e6 == "function";
}
function F1(e6) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e6(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var qf = F1(function(e6) {
  return function(r) {
    e6(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function xp(e6, t) {
  if (e6) {
    var r = e6.indexOf(t);
    0 <= r && e6.splice(r, 1);
  }
}
var xu = (function() {
  function e6(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e6.prototype.unsubscribe = function() {
    var t, r, n, i, o;
    if (!this.closed) {
      this.closed = true;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var c = sp(l), u = c.next(); !u.done; u = c.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var g = this.initialTeardown;
      if (ni(g))
        try {
          g();
        } catch (v) {
          o = v instanceof qf ? v.errors : [v];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var h = sp(f), b = h.next(); !b.done; b = h.next()) {
            var x = b.value;
            try {
              gy(x);
            } catch (v) {
              o = o ?? [], v instanceof qf ? o = Zc(Zc([], ap(o)), ap(v.errors)) : o.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            b && !b.done && (i = h.return) && i.call(h);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (o)
        throw new qf(o);
    }
  }, e6.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        gy(t);
      else {
        if (t instanceof e6) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e6.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e6.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e6.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && xp(r, t);
  }, e6.prototype.remove = function(t) {
    var r = this._finalizers;
    r && xp(r, t), t instanceof e6 && t._removeParent(this);
  }, e6.EMPTY = (function() {
    var t = new e6();
    return t.closed = true, t;
  })(), e6;
})(), H1 = xu.EMPTY;
function j1(e6) {
  return e6 instanceof xu || e6 && "closed" in e6 && ni(e6.remove) && ni(e6.add) && ni(e6.unsubscribe);
}
function gy(e6) {
  ni(e6) ? e6() : e6.unsubscribe();
}
var c4 = {
  Promise: void 0
}, u4 = {
  setTimeout: function(e6, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Zc([e6, t], ap(r)));
  },
  clearTimeout: function(e6) {
    return clearTimeout(e6);
  },
  delegate: void 0
};
function d4(e6) {
  u4.setTimeout(function() {
    throw e6;
  });
}
function vy() {
}
function zc(e6) {
  e6();
}
var B1 = (function(e6) {
  hu(t, e6);
  function t(r) {
    var n = e6.call(this) || this;
    return n.isStopped = false, r ? (n.destination = r, j1(r) && r.add(n)) : n.destination = h4, n;
  }
  return t.create = function(r, n, i) {
    return new Sp(r, n, i);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = true, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e6.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
})(xu), f4 = (function() {
  function e6(t) {
    this.partialObserver = t;
  }
  return e6.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        mc(n);
      }
  }, e6.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        mc(n);
      }
    else
      mc(t);
  }, e6.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        mc(r);
      }
  }, e6;
})(), Sp = (function(e6) {
  hu(t, e6);
  function t(r, n, i) {
    var o = e6.call(this) || this, l;
    return ni(r) || !r ? l = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : l = r, o.destination = new f4(l), o;
  }
  return t;
})(B1);
function mc(e6) {
  d4(e6);
}
function p4(e6) {
  throw e6;
}
var h4 = {
  closed: true,
  next: vy,
  error: p4,
  complete: vy
}, g4 = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function v4(e6) {
  return e6;
}
function m4(e6) {
  return e6.length === 0 ? v4 : e6.length === 1 ? e6[0] : function(r) {
    return e6.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var my = (function() {
  function e6(t) {
    t && (this._subscribe = t);
  }
  return e6.prototype.lift = function(t) {
    var r = new e6();
    return r.source = this, r.operator = t, r;
  }, e6.prototype.subscribe = function(t, r, n) {
    var i = this, o = y4(t) ? t : new Sp(t, r, n);
    return zc(function() {
      var l = i, c = l.operator, u = l.source;
      o.add(c ? c.call(o, u) : u ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e6.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e6.prototype.forEach = function(t, r) {
    var n = this;
    return r = by(r), new r(function(i, o) {
      var l = new Sp({
        next: function(c) {
          try {
            t(c);
          } catch (u) {
            o(u), l.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(l);
    });
  }, e6.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e6.prototype[g4] = function() {
    return this;
  }, e6.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return m4(t)(this);
  }, e6.prototype.toPromise = function(t) {
    var r = this;
    return t = by(t), new t(function(n, i) {
      var o;
      r.subscribe(function(l) {
        return o = l;
      }, function(l) {
        return i(l);
      }, function() {
        return n(o);
      });
    });
  }, e6.create = function(t) {
    return new e6(t);
  }, e6;
})();
function by(e6) {
  var t;
  return (t = e6 ?? c4.Promise) !== null && t !== void 0 ? t : Promise;
}
function b4(e6) {
  return e6 && ni(e6.next) && ni(e6.error) && ni(e6.complete);
}
function y4(e6) {
  return e6 && e6 instanceof B1 || b4(e6) && j1(e6);
}
var w4 = F1(function(e6) {
  return function() {
    e6(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ln = (function(e6) {
  hu(t, e6);
  function t() {
    var r = e6.call(this) || this;
    return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new yy(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new w4();
  }, t.prototype.next = function(r) {
    var n = this;
    zc(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var l = sp(n.currentObservers), c = l.next(); !c.done; c = l.next()) {
            var u = c.value;
            u.next(r);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            c && !c.done && (o = l.return) && o.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    zc(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = true, n.thrownError = r;
        for (var i = n.observers; i.length; )
          i.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    zc(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = true;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e6.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, i = this, o = i.hasError, l = i.isStopped, c = i.observers;
    return o || l ? H1 : (this.currentObservers = null, c.push(r), new xu(function() {
      n.currentObservers = null, xp(c, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, o = n.thrownError, l = n.isStopped;
    i ? r.error(o) : l && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new my();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new yy(r, n);
  }, t;
})(my), yy = (function(e6) {
  hu(t, e6);
  function t(r, n) {
    var i = e6.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return t.prototype.next = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, r);
  }, t.prototype.error = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0 ? i : H1;
  }, t;
})(Ln), x4 = /* @__PURE__ */ ((e6) => (e6.RELOAD = "reload", e6.RECOMPUTE = "recompute", e6))(x4 || {}), S4 = /* @__PURE__ */ ((e6) => (e6.RENAME = "rename", e6.TYPE_CHANGE = "type-change", e6))(S4 || {});
const M6 = new Ln(), D6 = new Ln(), W1 = new Ln();
var _4 = /* @__PURE__ */ ((e6) => (e6.SAVE_ALL = "save-all", e6))(_4 || {});
const z6 = new Ln();
var E4 = /* @__PURE__ */ ((e6) => (e6.WILL_SAVE = "will-save", e6.DID_SAVE = "did-save", e6.WILL_CREATE = "will-create", e6.WILL_RENAME = "will-rename", e6.WILL_DELETE = "will-delete", e6.DID_CREATE = "did-create", e6.DID_RENAME = "did-rename", e6.DID_DELETE = "did-delete", e6.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e6))(E4 || {});
const L6 = new Ln();
var O4 = /* @__PURE__ */ ((e6) => (e6.RESEND_BREAKPOINTS = "resend-breakpoints", e6))(O4 || {});
const $6 = new Ln(), F6 = new Ln();
var nu = /* @__PURE__ */ ((e6) => (e6.EVENT_STARTED = "event-started", e6.EVENT_ENDED = "event-ended", e6.EVENT_EMITED = "event-emited", e6.REQUEST_SENT = "request-sent", e6))(nu || {});
const _p = new Ln(), H6 = new Ln(), V1 = 255;
var U1 = ((e6) => (e6.EMPTY = "Please enter a valid name", e6.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${V1} characters (including extension)`, e6.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e6.INVALID = "Invalid name", e6))(U1 || {});
function Eh(e6, t) {
  const r = t ? e6.replace(/\.[^.]+$/, "") : e6;
  if (e6 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e6.length > V1)
    throw new Error(U1.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(r))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(r))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function j6(e6) {
  if (!e6) return null;
  if (typeof e6 == "string")
    try {
      Eh(e6);
    } catch (t) {
      return t.message;
    }
}
function B6(e6, t) {
  let r = "";
  if (["array", "object"].includes(t))
    try {
      const n = JSON.parse(e6);
      t === "array" && (!Array.isArray(n) || !Ve.isObject(n)) && (r = `Invalid value for type ${t}`), t === "object" && (!Ve.isObject(n) || Array.isArray(n)) && (r = `Invalid value for type ${t}`);
    } catch {
      r = `Invalid value for type ${t}`;
    }
  return t === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e6) || (r = `Invalid value for type ${t}`)), t === "number" && isNaN(+e6) && (r = `Invalid value for type ${t}`), ["boolean", "bool"].includes(t) && typeof e6 != "boolean" && !["true", "false"].includes(e6) && (r = `Invalid value for type ${t}`), r;
}
function k4() {
  return {
    PLACEHOLDER_PREFIX: `@!MASK_${Date.now().toString(36) + Math.random().toString(36).substring(2, 8)}_`,
    counter: 0
  };
}
function Oh(e6) {
  const { PLACEHOLDER_PREFIX: t, counter: r } = k4();
  let n = r;
  const i = [], o = "@!", l = (g) => (i.push(g), `${t}${n++}${o}`);
  let c = e6.replace(
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
    l
  );
  c = c.replace(
    /([\{\s]\s*\w+\s*)(:\s*\d+)/g,
    (g, f, h) => f + l(h)
  ), c = c.replace(/:\d{2}:\d{2}/g, l);
  const u = new RegExp(":(?!4D\\.\\w+)[CPK]?\\d+", "g");
  let d = c.replace(u, "");
  for (let g = 0; g < i.length; g++) {
    const h = `${t}${g}${o}`.replace(
      /([.*+?^${}()|[\]\\])/g,
      "\\$1"
    ), b = new RegExp(h, "g");
    d = d.replace(b, i[g]);
  }
  return d;
}
const q1 = (e6, t, r) => {
  const n = e6 instanceof RegExp ? wy(e6, r) : e6, i = t instanceof RegExp ? wy(t, r) : t, o = n !== null && i != null && A4(n, i, r);
  return o && {
    start: o[0],
    end: o[1],
    pre: r.slice(0, o[0]),
    body: r.slice(o[0] + n.length, o[1]),
    post: r.slice(o[1] + i.length)
  };
}, wy = (e6, t) => {
  const r = t.match(e6);
  return r ? r[0] : null;
}, A4 = (e6, t, r) => {
  let n, i, o, l, c, u = r.indexOf(e6), d = r.indexOf(t, u + 1), g = u;
  if (u >= 0 && d > 0) {
    if (e6 === t)
      return [u, d];
    for (n = [], o = r.length; g >= 0 && !c; ) {
      if (g === u)
        n.push(g), u = r.indexOf(e6, g + 1);
      else if (n.length === 1) {
        const f = n.pop();
        f !== void 0 && (c = [f, d]);
      } else
        i = n.pop(), i !== void 0 && i < o && (o = i, l = d), d = r.indexOf(t, g + 1);
      g = u < d && u >= 0 ? u : d;
    }
    n.length && l !== void 0 && (c = [o, l]);
  }
  return c;
}, G1 = "\0SLASH" + Math.random() + "\0", Z1 = "\0OPEN" + Math.random() + "\0", kh = "\0CLOSE" + Math.random() + "\0", K1 = "\0COMMA" + Math.random() + "\0", Y1 = "\0PERIOD" + Math.random() + "\0", T4 = new RegExp(G1, "g"), R4 = new RegExp(Z1, "g"), C4 = new RegExp(kh, "g"), I4 = new RegExp(K1, "g"), P4 = new RegExp(Y1, "g"), N4 = /\\\\/g, M4 = /\\{/g, D4 = /\\}/g, z4 = /\\,/g, L4 = /\\\./g, $4 = 1e5;
function Gf(e6) {
  return isNaN(e6) ? e6.charCodeAt(0) : parseInt(e6, 10);
}
function F4(e6) {
  return e6.replace(N4, G1).replace(M4, Z1).replace(D4, kh).replace(z4, K1).replace(L4, Y1);
}
function H4(e6) {
  return e6.replace(T4, "\\").replace(R4, "{").replace(C4, "}").replace(I4, ",").replace(P4, ".");
}
function X1(e6) {
  if (!e6)
    return [""];
  const t = [], r = q1("{", "}", e6);
  if (!r)
    return e6.split(",");
  const { pre: n, body: i, post: o } = r, l = n.split(",");
  l[l.length - 1] += "{" + i + "}";
  const c = X1(o);
  return o.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c)), t.push.apply(t, l), t;
}
function j4(e6, t = {}) {
  if (!e6)
    return [];
  const { max: r = $4 } = t;
  return e6.slice(0, 2) === "{}" && (e6 = "\\{\\}" + e6.slice(2)), pa(F4(e6), r, true).map(H4);
}
function B4(e6) {
  return "{" + e6 + "}";
}
function W4(e6) {
  return /^-?0\d/.test(e6);
}
function V4(e6, t) {
  return e6 <= t;
}
function U4(e6, t) {
  return e6 >= t;
}
function pa(e6, t, r) {
  const n = [], i = q1("{", "}", e6);
  if (!i)
    return [e6];
  const o = i.pre, l = i.post.length ? pa(i.post, t, false) : [""];
  if (/\$$/.test(i.pre))
    for (let c = 0; c < l.length && c < t; c++) {
      const u = o + "{" + i.body + "}" + l[c];
      n.push(u);
    }
  else {
    const c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), d = c || u, g = i.body.indexOf(",") >= 0;
    if (!d && !g)
      return i.post.match(/,(?!,).*\}/) ? (e6 = i.pre + "{" + i.body + kh + i.post, pa(e6, t, true)) : [e6];
    let f;
    if (d)
      f = i.body.split(/\.\./);
    else if (f = X1(i.body), f.length === 1 && f[0] !== void 0 && (f = pa(f[0], t, false).map(B4), f.length === 1))
      return l.map((b) => i.pre + f[0] + b);
    let h;
    if (d && f[0] !== void 0 && f[1] !== void 0) {
      const b = Gf(f[0]), x = Gf(f[1]), v = Math.max(f[0].length, f[1].length);
      let w = f.length === 3 && f[2] !== void 0 ? Math.max(Math.abs(Gf(f[2])), 1) : 1, m = V4;
      x < b && (w *= -1, m = U4);
      const S = f.some(W4);
      h = [];
      for (let O = b; m(O, x); O += w) {
        let E;
        if (u)
          E = String.fromCharCode(O), E === "\\" && (E = "");
        else if (E = String(O), S) {
          const A = v - E.length;
          if (A > 0) {
            const $ = new Array(A + 1).join("0");
            O < 0 ? E = "-" + $ + E.slice(1) : E = $ + E;
          }
        }
        h.push(E);
      }
    } else {
      h = [];
      for (let b = 0; b < f.length; b++)
        h.push.apply(h, pa(f[b], t, false));
    }
    for (let b = 0; b < h.length; b++)
      for (let x = 0; x < l.length && n.length < t; x++) {
        const v = o + h[b] + l[x];
        (!r || d || v) && n.push(v);
      }
  }
  return n;
}
const q4 = 1024 * 64, iu = (e6) => {
  if (typeof e6 != "string")
    throw new TypeError("invalid pattern");
  if (e6.length > q4)
    throw new TypeError("pattern is too long");
}, G4 = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
}, oa = (e6) => e6.replace(/[[\]\\-]/g, "\\$&"), Z4 = (e6) => e6.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), xy = (e6) => e6.join(""), K4 = (e6, t) => {
  const r = t;
  if (e6.charAt(r) !== "[")
    throw new Error("not in a brace expression");
  const n = [], i = [];
  let o = r + 1, l = false, c = false, u = false, d = false, g = r, f = "";
  e: for (; o < e6.length; ) {
    const v = e6.charAt(o);
    if ((v === "!" || v === "^") && o === r + 1) {
      d = true, o++;
      continue;
    }
    if (v === "]" && l && !u) {
      g = o + 1;
      break;
    }
    if (l = true, v === "\\" && !u) {
      u = true, o++;
      continue;
    }
    if (v === "[" && !u) {
      for (const [w, [m, y, S]] of Object.entries(G4))
        if (e6.startsWith(w, o)) {
          if (f)
            return ["$.", false, e6.length - r, true];
          o += w.length, S ? i.push(m) : n.push(m), c = c || y;
          continue e;
        }
    }
    if (u = false, f) {
      v > f ? n.push(oa(f) + "-" + oa(v)) : v === f && n.push(oa(v)), f = "", o++;
      continue;
    }
    if (e6.startsWith("-]", o + 1)) {
      n.push(oa(v + "-")), o += 2;
      continue;
    }
    if (e6.startsWith("-", o + 1)) {
      f = v, o += 2;
      continue;
    }
    n.push(oa(v)), o++;
  }
  if (g < o)
    return ["", false, 0, false];
  if (!n.length && !i.length)
    return ["$.", false, e6.length - r, true];
  if (i.length === 0 && n.length === 1 && /^\\?.$/.test(n[0]) && !d) {
    const v = n[0].length === 2 ? n[0].slice(-1) : n[0];
    return [Z4(v), false, g - r, false];
  }
  const h = "[" + (d ? "^" : "") + xy(n) + "]", b = "[" + (d ? "" : "^") + xy(i) + "]";
  return [n.length && i.length ? "(" + h + "|" + b + ")" : n.length ? h : b, c, g - r, true];
}, ha = (e6, { windowsPathsNoEscape: t = false, magicalBraces: r = true } = {}) => r ? t ? e6.replace(/\[([^/\\])\]/g, "$1") : e6.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : t ? e6.replace(/\[([^/\\{}])\]/g, "$1") : e6.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
var vr;
const Y4 = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Ep = (e6) => Y4.has(e6), Sy = (e6) => Ep(e6.type), X4 = /* @__PURE__ */ new Map([
  ["!", ["@"]],
  ["?", ["?", "@"]],
  ["@", ["@"]],
  ["*", ["*", "+", "?", "@"]],
  ["+", ["+", "@"]]
]), J4 = /* @__PURE__ */ new Map([
  ["!", ["?"]],
  ["@", ["?"]],
  ["+", ["?", "*"]]
]), Q4 = /* @__PURE__ */ new Map([
  ["!", ["?", "@"]],
  ["?", ["?", "@"]],
  ["@", ["?", "@"]],
  ["*", ["*", "+", "?", "@"]],
  ["+", ["+", "@", "?", "*"]]
]), _y = /* @__PURE__ */ new Map([
  ["!", /* @__PURE__ */ new Map([["!", "@"]])],
  [
    "?",
    /* @__PURE__ */ new Map([
      ["*", "*"],
      ["+", "*"]
    ])
  ],
  [
    "@",
    /* @__PURE__ */ new Map([
      ["!", "!"],
      ["?", "?"],
      ["@", "@"],
      ["*", "*"],
      ["+", "+"]
    ])
  ],
  [
    "+",
    /* @__PURE__ */ new Map([
      ["?", "*"],
      ["*", "*"]
    ])
  ]
]), e$ = "(?!(?:^|/)\\.\\.?(?:$|/))", bc = "(?!\\.)", t$ = /* @__PURE__ */ new Set(["[", "."]), r$ = /* @__PURE__ */ new Set(["..", "."]), n$ = new Set("().*{}+?[]^$\\!"), i$ = (e6) => e6.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ah = "[^/]", Ey = Ah + "*?", Oy = Ah + "+?";
let o$ = 0;
var Dt, Ut, ti, Ce, wt, Oi, Qi, ki, kn, An, qo, Ze, J1, Ti, Lc, Q1, Op, $c, eS, kp, tS, rS, nS, Fc, Ap, iS;
class Su {
  constructor(t, r, n = {}) {
    Yt(this, Ze);
    Te(this, "type");
    Yt(this, Dt);
    Yt(this, Ut);
    Yt(this, ti, false);
    Yt(this, Ce, []);
    Yt(this, wt);
    Yt(this, Oi);
    Yt(this, Qi);
    Yt(this, ki, false);
    Yt(this, kn);
    Yt(this, An);
    Yt(this, qo, false);
    Te(this, "id", ++o$);
    this.type = t, t && rt(this, Ut, true), rt(this, wt, r), rt(this, Dt, le(this, wt) ? le(le(this, wt), Dt) : this), rt(this, kn, le(this, Dt) === this ? n : le(le(this, Dt), kn)), rt(this, Qi, le(this, Dt) === this ? [] : le(le(this, Dt), Qi)), t === "!" && !le(le(this, Dt), ki) && le(this, Qi).push(this), rt(this, Oi, le(this, wt) ? le(le(this, wt), Ce).length : 0);
  }
  get depth() {
    var t;
    return (((t = le(this, wt)) == null ? void 0 : t.depth) ?? -1) + 1;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    var t;
    return {
      "@@type": "AST",
      id: this.id,
      type: this.type,
      root: le(this, Dt).id,
      parent: (t = le(this, wt)) == null ? void 0 : t.id,
      depth: this.depth,
      partsLength: le(this, Ce).length,
      parts: le(this, Ce)
    };
  }
  get hasMagic() {
    if (le(this, Ut) !== void 0)
      return le(this, Ut);
    for (const t of le(this, Ce))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return rt(this, Ut, true);
    return le(this, Ut);
  }
  // reconstructs the pattern
  toString() {
    return le(this, An) !== void 0 ? le(this, An) : this.type ? rt(this, An, this.type + "(" + le(this, Ce).map((t) => String(t)).join("|") + ")") : rt(this, An, le(this, Ce).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (const r of t)
      if (r !== "") {
        if (typeof r != "string" && !(r instanceof vr && le(r, wt) === this))
          throw new Error("invalid part: " + r);
        le(this, Ce).push(r);
      }
  }
  toJSON() {
    var r;
    const t = this.type === null ? le(this, Ce).slice().map((n) => typeof n == "string" ? n : n.toJSON()) : [this.type, ...le(this, Ce).map((n) => n.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === le(this, Dt) || le(le(this, Dt), ki) && ((r = le(this, wt)) == null ? void 0 : r.type) === "!") && t.push({}), t;
  }
  isStart() {
    var r;
    if (le(this, Dt) === this)
      return true;
    if (!((r = le(this, wt)) != null && r.isStart()))
      return false;
    if (le(this, Oi) === 0)
      return true;
    const t = le(this, wt);
    for (let n = 0; n < le(this, Oi); n++) {
      const i = le(t, Ce)[n];
      if (!(i instanceof vr && i.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var r, n, i;
    if (le(this, Dt) === this || ((r = le(this, wt)) == null ? void 0 : r.type) === "!")
      return true;
    if (!((n = le(this, wt)) != null && n.isEnd()))
      return false;
    if (!this.type)
      return (i = le(this, wt)) == null ? void 0 : i.isEnd();
    const t = le(this, wt) ? le(le(this, wt), Ce).length : 0;
    return le(this, Oi) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const r = new vr(this.type, t);
    for (const n of le(this, Ce))
      r.copyIn(n);
    return r;
  }
  static fromGlob(t, r = {}) {
    var i;
    const n = new vr(null, void 0, r);
    return _e(i = vr, Ti, Lc).call(i, t, n, 0, r, 0), n;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== le(this, Dt))
      return le(this, Dt).toMMPattern();
    const t = this.toString(), [r, n, i, o] = this.toRegExpSource();
    if (!(i || le(this, Ut) || le(this, kn).nocase && !le(this, kn).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return n;
    const c = (le(this, kn).nocase ? "i" : "") + (o ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, c), {
      _src: r,
      _glob: t
    });
  }
  get options() {
    return le(this, kn);
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(t) {
    var u;
    const r = t ?? !!le(this, kn).dot;
    if (le(this, Dt) === this && (_e(this, Ze, Fc).call(this), _e(this, Ze, J1).call(this)), !Sy(this)) {
      const d = this.isStart() && this.isEnd() && !le(this, Ce).some((x) => typeof x != "string"), g = le(this, Ce).map((x) => {
        var S;
        const [v, w, m, y] = typeof x == "string" ? _e(S = vr, Ti, iS).call(S, x, le(this, Ut), d) : x.toRegExpSource(t);
        return rt(this, Ut, le(this, Ut) || m), rt(this, ti, le(this, ti) || y), v;
      }).join("");
      let f = "";
      if (this.isStart() && typeof le(this, Ce)[0] == "string" && !(le(this, Ce).length === 1 && r$.has(le(this, Ce)[0]))) {
        const v = t$, w = (
          // dots are allowed, and the pattern starts with [ or .
          r && v.has(g.charAt(0)) || // the pattern starts with \., and then [ or .
          g.startsWith("\\.") && v.has(g.charAt(2)) || // the pattern starts with \.\., and then [ or .
          g.startsWith("\\.\\.") && v.has(g.charAt(4))
        ), m = !r && !t && v.has(g.charAt(0));
        f = w ? e$ : m ? bc : "";
      }
      let h = "";
      return this.isEnd() && le(le(this, Dt), ki) && ((u = le(this, wt)) == null ? void 0 : u.type) === "!" && (h = "(?:$|\\/)"), [
        f + g + h,
        ha(g),
        rt(this, Ut, !!le(this, Ut)),
        le(this, ti)
      ];
    }
    const n = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let o = _e(this, Ze, Ap).call(this, r);
    if (this.isStart() && this.isEnd() && !o && this.type !== "!") {
      const d = this.toString(), g = this;
      return rt(g, Ce, [d]), g.type = null, rt(g, Ut, void 0), [d, ha(this.toString()), false, false];
    }
    let l = !n || t || r || !bc ? "" : _e(this, Ze, Ap).call(this, true);
    l === o && (l = ""), l && (o = `(?:${o})(?:${l})*?`);
    let c = "";
    if (this.type === "!" && le(this, qo))
      c = (this.isStart() && !r ? bc : "") + Oy;
    else {
      const d = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !r && !t ? bc : "") + Ey + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`;
      c = i + o + d;
    }
    return [
      c,
      ha(o),
      rt(this, Ut, !!le(this, Ut)),
      le(this, ti)
    ];
  }
}
Dt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakSet(), J1 = function() {
  if (this !== le(this, Dt))
    throw new Error("should only call on root");
  if (le(this, ki))
    return this;
  this.toString(), rt(this, ki, true);
  let t;
  for (; t = le(this, Qi).pop(); ) {
    if (t.type !== "!")
      continue;
    let r = t, n = le(r, wt);
    for (; n; ) {
      for (let i = le(r, Oi) + 1; !n.type && i < le(n, Ce).length; i++)
        for (const o of le(t, Ce)) {
          if (typeof o == "string")
            throw new Error("string part in extglob AST??");
          o.copyIn(le(n, Ce)[i]);
        }
      r = n, n = le(r, wt);
    }
  }
  return this;
}, Ti = /* @__PURE__ */ new WeakSet(), Lc = function(t, r, n, i, o) {
  var v, w, m, y;
  const l = i.maxExtglobRecursion ?? 2;
  let c = false, u = false, d = -1, g = false;
  if (r.type === null) {
    let S = n, O = "";
    for (; S < t.length; ) {
      const E = t.charAt(S++);
      if (c || E === "\\") {
        c = !c, O += E;
        continue;
      }
      if (u) {
        S === d + 1 ? (E === "^" || E === "!") && (g = true) : E === "]" && !(S === d + 2 && g) && (u = false), O += E;
        continue;
      } else if (E === "[") {
        u = true, d = S, g = false, O += E;
        continue;
      }
      if (!i.noext && Ep(E) && t.charAt(S) === "(" && o <= l) {
        r.push(O), O = "";
        const $ = new vr(E, r);
        S = _e(v = vr, Ti, Lc).call(v, t, $, S, i, o + 1), r.push($);
        continue;
      }
      O += E;
    }
    return r.push(O), S;
  }
  let f = n + 1, h = new vr(null, r);
  const b = [];
  let x = "";
  for (; f < t.length; ) {
    const S = t.charAt(f++);
    if (c || S === "\\") {
      c = !c, x += S;
      continue;
    }
    if (u) {
      f === d + 1 ? (S === "^" || S === "!") && (g = true) : S === "]" && !(f === d + 2 && g) && (u = false), x += S;
      continue;
    } else if (S === "[") {
      u = true, d = f, g = false, x += S;
      continue;
    }
    if (!i.noext && Ep(S) && t.charAt(f) === "(" && /* c8 ignore start - the maxDepth is sufficient here */
    (o <= l || r && _e(w = r, Ze, $c).call(w, S))) {
      const E = r && _e(m = r, Ze, $c).call(m, S) ? 0 : 1;
      h.push(x), x = "";
      const A = new vr(S, h);
      h.push(A), f = _e(y = vr, Ti, Lc).call(y, t, A, f, i, o + E);
      continue;
    }
    if (S === "|") {
      h.push(x), x = "", b.push(h), h = new vr(null, r);
      continue;
    }
    if (S === ")")
      return x === "" && le(r, Ce).length === 0 && rt(r, qo, true), h.push(x), x = "", r.push(...b, h), f;
    x += S;
  }
  return r.type = null, rt(r, Ut, void 0), rt(r, Ce, [t.substring(n - 1)]), f;
}, Q1 = function(t) {
  return _e(this, Ze, Op).call(this, t, J4);
}, Op = function(t, r = X4) {
  if (!t || typeof t != "object" || t.type !== null || le(t, Ce).length !== 1 || this.type === null)
    return false;
  const n = le(t, Ce)[0];
  return !n || typeof n != "object" || n.type === null ? false : _e(this, Ze, $c).call(this, n.type, r);
}, $c = function(t, r = Q4) {
  var n;
  return !!((n = r.get(this.type)) != null && n.includes(t));
}, eS = function(t, r) {
  const n = le(t, Ce)[0], i = new vr(null, n, this.options);
  le(i, Ce).push(""), n.push(i), _e(this, Ze, kp).call(this, t, r);
}, kp = function(t, r) {
  const n = le(t, Ce)[0];
  le(this, Ce).splice(r, 1, ...le(n, Ce));
  for (const i of le(n, Ce))
    typeof i == "object" && rt(i, wt, this);
  rt(this, An, void 0);
}, tS = function(t) {
  const r = _y.get(this.type);
  return !!(r != null && r.has(t));
}, rS = function(t) {
  if (!t || typeof t != "object" || t.type !== null || le(t, Ce).length !== 1 || this.type === null || le(this, Ce).length !== 1)
    return false;
  const r = le(t, Ce)[0];
  return !r || typeof r != "object" || r.type === null ? false : _e(this, Ze, tS).call(this, r.type);
}, nS = function(t) {
  const r = _y.get(this.type), n = le(t, Ce)[0], i = r == null ? void 0 : r.get(n.type);
  if (!i)
    return false;
  rt(this, Ce, le(n, Ce));
  for (const o of le(this, Ce))
    typeof o == "object" && rt(o, wt, this);
  this.type = i, rt(this, An, void 0), rt(this, qo, false);
}, Fc = function() {
  var t, r;
  if (Sy(this)) {
    let n = 0, i = false;
    do {
      i = true;
      for (let o = 0; o < le(this, Ce).length; o++) {
        const l = le(this, Ce)[o];
        typeof l == "object" && (_e(r = l, Ze, Fc).call(r), _e(this, Ze, Op).call(this, l) ? (i = false, _e(this, Ze, kp).call(this, l, o)) : _e(this, Ze, Q1).call(this, l) ? (i = false, _e(this, Ze, eS).call(this, l, o)) : _e(this, Ze, rS).call(this, l) && (i = false, _e(this, Ze, nS).call(this, l)));
      }
    } while (!i && ++n < 10);
  } else
    for (const n of le(this, Ce))
      typeof n == "object" && _e(t = n, Ze, Fc).call(t);
  rt(this, An, void 0);
}, Ap = function(t) {
  return le(this, Ce).map((r) => {
    if (typeof r == "string")
      throw new Error("string type in extglob ast??");
    const [n, i, o, l] = r.toRegExpSource(t);
    return rt(this, ti, le(this, ti) || l), n;
  }).filter((r) => !(this.isStart() && this.isEnd()) || !!r).join("|");
}, iS = function(t, r, n = false) {
  let i = false, o = "", l = false, c = false;
  for (let u = 0; u < t.length; u++) {
    const d = t.charAt(u);
    if (i) {
      i = false, o += (n$.has(d) ? "\\" : "") + d;
      continue;
    }
    if (d === "*") {
      if (c)
        continue;
      c = true, o += n && /^[*]+$/.test(t) ? Oy : Ey, r = true;
      continue;
    } else
      c = false;
    if (d === "\\") {
      u === t.length - 1 ? o += "\\\\" : i = true;
      continue;
    }
    if (d === "[") {
      const [g, f, h, b] = K4(t, u);
      if (h) {
        o += g, l = l || f, u += h - 1, r = r || b;
        continue;
      }
    }
    if (d === "?") {
      o += Ah, r = true;
      continue;
    }
    o += i$(d);
  }
  return [o, ha(t), !!r, l];
}, Yt(Su, Ti);
vr = Su;
const s$ = (e6, { windowsPathsNoEscape: t = false, magicalBraces: r = false } = {}) => r ? t ? e6.replace(/[?*()[\]{}]/g, "[$&]") : e6.replace(/[?*()[\]\\{}]/g, "\\$&") : t ? e6.replace(/[?*()[\]]/g, "[$&]") : e6.replace(/[?*()[\]\\]/g, "\\$&"), er = (e6, t, r = {}) => (iu(t), !r.nocomment && t.charAt(0) === "#" ? false : new _u(t, r).match(e6)), a$ = /^\*+([^+@!?*[(]*)$/, l$ = (e6) => (t) => !t.startsWith(".") && t.endsWith(e6), c$ = (e6) => (t) => t.endsWith(e6), u$ = (e6) => (e6 = e6.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e6)), d$ = (e6) => (e6 = e6.toLowerCase(), (t) => t.toLowerCase().endsWith(e6)), f$ = /^\*+\.\*+$/, p$ = (e6) => !e6.startsWith(".") && e6.includes("."), h$ = (e6) => e6 !== "." && e6 !== ".." && e6.includes("."), g$ = /^\.\*+$/, v$ = (e6) => e6 !== "." && e6 !== ".." && e6.startsWith("."), m$ = /^\*+$/, b$ = (e6) => e6.length !== 0 && !e6.startsWith("."), y$ = (e6) => e6.length !== 0 && e6 !== "." && e6 !== "..", w$ = /^\?+([^+@!?*[(]*)?$/, x$ = ([e6, t = ""]) => {
  const r = oS([e6]);
  return t ? (t = t.toLowerCase(), (n) => r(n) && n.toLowerCase().endsWith(t)) : r;
}, S$ = ([e6, t = ""]) => {
  const r = sS([e6]);
  return t ? (t = t.toLowerCase(), (n) => r(n) && n.toLowerCase().endsWith(t)) : r;
}, _$ = ([e6, t = ""]) => {
  const r = sS([e6]);
  return t ? (n) => r(n) && n.endsWith(t) : r;
}, E$ = ([e6, t = ""]) => {
  const r = oS([e6]);
  return t ? (n) => r(n) && n.endsWith(t) : r;
}, oS = ([e6]) => {
  const t = e6.length;
  return (r) => r.length === t && !r.startsWith(".");
}, sS = ([e6]) => {
  const t = e6.length;
  return (r) => r.length === t && r !== "." && r !== "..";
}, aS = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", ky = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, O$ = aS === "win32" ? ky.win32.sep : ky.posix.sep;
er.sep = O$;
const nr = Symbol("globstar **");
er.GLOBSTAR = nr;
const k$ = "[^/]", A$ = k$ + "*?", T$ = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", R$ = "(?:(?!(?:\\/|^)\\.).)*?", C$ = (e6, t = {}) => (r) => er(r, e6, t);
er.filter = C$;
const Kr = (e6, t = {}) => Object.assign({}, e6, t), I$ = (e6) => {
  if (!e6 || typeof e6 != "object" || !Object.keys(e6).length)
    return er;
  const t = er;
  return Object.assign((n, i, o = {}) => t(n, i, Kr(e6, o)), {
    Minimatch: class extends t.Minimatch {
      constructor(i, o = {}) {
        super(i, Kr(e6, o));
      }
      static defaults(i) {
        return t.defaults(Kr(e6, i)).Minimatch;
      }
    },
    AST: class extends t.AST {
      /* c8 ignore start */
      constructor(i, o, l = {}) {
        super(i, o, Kr(e6, l));
      }
      /* c8 ignore stop */
      static fromGlob(i, o = {}) {
        return t.AST.fromGlob(i, Kr(e6, o));
      }
    },
    unescape: (n, i = {}) => t.unescape(n, Kr(e6, i)),
    escape: (n, i = {}) => t.escape(n, Kr(e6, i)),
    filter: (n, i = {}) => t.filter(n, Kr(e6, i)),
    defaults: (n) => t.defaults(Kr(e6, n)),
    makeRe: (n, i = {}) => t.makeRe(n, Kr(e6, i)),
    braceExpand: (n, i = {}) => t.braceExpand(n, Kr(e6, i)),
    match: (n, i, o = {}) => t.match(n, i, Kr(e6, o)),
    sep: t.sep,
    GLOBSTAR: nr
  });
};
er.defaults = I$;
const lS = (e6, t = {}) => (iu(e6), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e6) ? [e6] : j4(e6, { max: t.braceExpandMax }));
er.braceExpand = lS;
const P$ = (e6, t = {}) => new _u(e6, t).makeRe();
er.makeRe = P$;
const N$ = (e6, t, r = {}) => {
  const n = new _u(t, r);
  return e6 = e6.filter((i) => n.match(i)), n.options.nonull && !e6.length && e6.push(t), e6;
};
er.match = N$;
const Ay = /[?*]|[+@!]\(.*?\)|\[|\]/, M$ = (e6) => e6.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
var Nr, cS, Tp, Ho;
class _u {
  constructor(t, r = {}) {
    Yt(this, Nr);
    Te(this, "options");
    Te(this, "set");
    Te(this, "pattern");
    Te(this, "windowsPathsNoEscape");
    Te(this, "nonegate");
    Te(this, "negate");
    Te(this, "comment");
    Te(this, "empty");
    Te(this, "preserveMultipleSlashes");
    Te(this, "partial");
    Te(this, "globSet");
    Te(this, "globParts");
    Te(this, "nocase");
    Te(this, "isWindows");
    Te(this, "platform");
    Te(this, "windowsNoMagicRoot");
    Te(this, "maxGlobstarRecursion");
    Te(this, "regexp");
    iu(t), r = r || {}, this.options = r, this.maxGlobstarRecursion = r.maxGlobstarRecursion ?? 200, this.pattern = t, this.platform = r.platform || aS, this.isWindows = this.platform === "win32";
    const n = "allowWindowsEscape";
    this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r[n] === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!r.nonegate, this.comment = false, this.empty = false, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (const t of this.set)
      for (const r of t)
        if (typeof r != "string")
          return true;
    return false;
  }
  debug(...t) {
  }
  make() {
    const t = this.pattern, r = this.options;
    if (!r.nocomment && t.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!t) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = (...o) => console.error(...o)), this.debug(this.pattern, this.globSet);
    const n = this.globSet.map((o) => this.slashSplit(o));
    this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
    let i = this.globParts.map((o, l, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const u = o[0] === "" && o[1] === "" && (o[2] === "?" || !Ay.test(o[2])) && !Ay.test(o[3]), d = /^[a-z]:/i.test(o[0]);
        if (u)
          return [
            ...o.slice(0, 4),
            ...o.slice(4).map((g) => this.parse(g))
          ];
        if (d)
          return [o[0], ...o.slice(1).map((g) => this.parse(g))];
      }
      return o.map((u) => this.parse(u));
    });
    if (this.debug(this.pattern, i), this.set = i.filter((o) => o.indexOf(false) === -1), this.isWindows)
      for (let o = 0; o < this.set.length; o++) {
        const l = this.set[o];
        l[0] === "" && l[1] === "" && this.globParts[o][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(t) {
    if (this.options.noglobstar)
      for (const n of t)
        for (let i = 0; i < n.length; i++)
          n[i] === "**" && (n[i] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : r >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((r) => {
      let n = -1;
      for (; (n = r.indexOf("**", n + 1)) !== -1; ) {
        let i = n;
        for (; r[i + 1] === "**"; )
          i++;
        i !== n && r.splice(n, i - n);
      }
      return r;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((r) => (r = r.reduce((n, i) => {
      const o = n[n.length - 1];
      return i === "**" && o === "**" ? n : i === ".." && o && o !== ".." && o !== "." && o !== "**" ? (n.pop(), n) : (n.push(i), n);
    }, []), r.length === 0 ? [""] : r));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let r = false;
    do {
      if (r = false, !this.preserveMultipleSlashes) {
        for (let i = 1; i < t.length - 1; i++) {
          const o = t[i];
          i === 1 && o === "" && t[0] === "" || (o === "." || o === "") && (r = true, t.splice(i, 1), i--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (r = true, t.pop());
      }
      let n = 0;
      for (; (n = t.indexOf("..", n + 1)) !== -1; ) {
        const i = t[n - 1];
        i && i !== "." && i !== ".." && i !== "**" && !(this.isWindows && /^[a-z]:$/i.test(i)) && (r = true, t.splice(n - 1, 2), n -= 2);
      }
    } while (r);
    return t.length === 0 ? [""] : t;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(t) {
    let r = false;
    do {
      r = false;
      for (let n of t) {
        let i = -1;
        for (; (i = n.indexOf("**", i + 1)) !== -1; ) {
          let l = i;
          for (; n[l + 1] === "**"; )
            l++;
          l > i && n.splice(i + 1, l - i);
          let c = n[i + 1];
          const u = n[i + 2], d = n[i + 3];
          if (c !== ".." || !u || u === "." || u === ".." || !d || d === "." || d === "..")
            continue;
          r = true, n.splice(i, 1);
          const g = n.slice(0);
          g[i] = "**", t.push(g), i--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < n.length - 1; l++) {
            const c = n[l];
            l === 1 && c === "" && n[0] === "" || (c === "." || c === "") && (r = true, n.splice(l, 1), l--);
          }
          n[0] === "." && n.length === 2 && (n[1] === "." || n[1] === "") && (r = true, n.pop());
        }
        let o = 0;
        for (; (o = n.indexOf("..", o + 1)) !== -1; ) {
          const l = n[o - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            r = true;
            const u = o === 1 && n[o + 1] === "**" ? ["."] : [];
            n.splice(o - 1, 2, ...u), n.length === 0 && n.push(""), o -= 2;
          }
        }
      }
    } while (r);
    return t;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(t) {
    for (let r = 0; r < t.length - 1; r++)
      for (let n = r + 1; n < t.length; n++) {
        const i = this.partsMatch(t[r], t[n], !this.preserveMultipleSlashes);
        if (i) {
          t[r] = [], t[n] = i;
          break;
        }
      }
    return t.filter((r) => r.length);
  }
  partsMatch(t, r, n = false) {
    let i = 0, o = 0, l = [], c = "";
    for (; i < t.length && o < r.length; )
      if (t[i] === r[o])
        l.push(c === "b" ? r[o] : t[i]), i++, o++;
      else if (n && t[i] === "**" && r[o] === t[i + 1])
        l.push(t[i]), i++;
      else if (n && r[o] === "**" && t[i] === r[o + 1])
        l.push(r[o]), o++;
      else if (t[i] === "*" && r[o] && (this.options.dot || !r[o].startsWith(".")) && r[o] !== "**") {
        if (c === "b")
          return false;
        c = "a", l.push(t[i]), i++, o++;
      } else if (r[o] === "*" && t[i] && (this.options.dot || !t[i].startsWith(".")) && t[i] !== "**") {
        if (c === "a")
          return false;
        c = "b", l.push(r[o]), i++, o++;
      } else
        return false;
    return t.length === r.length && l;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const t = this.pattern;
    let r = false, n = 0;
    for (let i = 0; i < t.length && t.charAt(i) === "!"; i++)
      r = !r, n++;
    n && (this.pattern = t.slice(n)), this.negate = r;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, r, n = false) {
    let i = 0, o = 0;
    if (this.isWindows) {
      const c = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), u = !c && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), d = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), g = !d && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]), f = u ? 3 : c ? 0 : void 0, h = g ? 3 : d ? 0 : void 0;
      if (typeof f == "number" && typeof h == "number") {
        const [b, x] = [
          t[f],
          r[h]
        ];
        b.toLowerCase() === x.toLowerCase() && (r[h] = b, o = h, i = f);
      }
    }
    const { optimizationLevel: l = 1 } = this.options;
    return l >= 2 && (t = this.levelTwoFileOptimize(t)), r.includes(nr) ? _e(this, Nr, cS).call(this, t, r, n, i, o) : _e(this, Nr, Ho).call(this, t, r, n, i, o);
  }
  braceExpand() {
    return lS(this.pattern, this.options);
  }
  parse(t) {
    iu(t);
    const r = this.options;
    if (t === "**")
      return nr;
    if (t === "")
      return "";
    let n, i = null;
    (n = t.match(m$)) ? i = r.dot ? y$ : b$ : (n = t.match(a$)) ? i = (r.nocase ? r.dot ? d$ : u$ : r.dot ? c$ : l$)(n[1]) : (n = t.match(w$)) ? i = (r.nocase ? r.dot ? S$ : x$ : r.dot ? _$ : E$)(n) : (n = t.match(f$)) ? i = r.dot ? h$ : p$ : (n = t.match(g$)) && (i = v$);
    const o = Su.fromGlob(t, this.options).toMMPattern();
    return i && typeof o == "object" && Reflect.defineProperty(o, "test", { value: i }), o;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const t = this.set;
    if (!t.length)
      return this.regexp = false, this.regexp;
    const r = this.options, n = r.noglobstar ? A$ : r.dot ? T$ : R$, i = new Set(r.nocase ? ["i"] : []);
    let o = t.map((u) => {
      const d = u.map((f) => {
        if (f instanceof RegExp)
          for (const h of f.flags.split(""))
            i.add(h);
        return typeof f == "string" ? M$(f) : f === nr ? nr : f._src;
      });
      d.forEach((f, h) => {
        const b = d[h + 1], x = d[h - 1];
        f !== nr || x === nr || (x === void 0 ? b !== void 0 && b !== nr ? d[h + 1] = "(?:\\/|" + n + "\\/)?" + b : d[h] = n : b === void 0 ? d[h - 1] = x + "(?:\\/|\\/" + n + ")?" : b !== nr && (d[h - 1] = x + "(?:\\/|\\/" + n + "\\/)" + b, d[h + 1] = nr));
      });
      const g = d.filter((f) => f !== nr);
      if (this.partial && g.length >= 1) {
        const f = [];
        for (let h = 1; h <= g.length; h++)
          f.push(g.slice(0, h).join("/"));
        return "(?:" + f.join("|") + ")";
      }
      return g.join("/");
    }).join("|");
    const [l, c] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    o = "^" + l + o + c + "$", this.partial && (o = "^(?:\\/|" + l + o.slice(1, -1) + c + ")$"), this.negate && (o = "^(?!" + o + ").+$");
    try {
      this.regexp = new RegExp(o, [...i].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, r = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return false;
    if (this.empty)
      return t === "";
    if (t === "/" && r)
      return true;
    const n = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    const i = this.slashSplit(t);
    this.debug(this.pattern, "split", i);
    const o = this.set;
    this.debug(this.pattern, "set", o);
    let l = i[i.length - 1];
    if (!l)
      for (let c = i.length - 2; !l && c >= 0; c--)
        l = i[c];
    for (const c of o) {
      let u = i;
      if (n.matchBase && c.length === 1 && (u = [l]), this.matchOne(u, c, r))
        return n.flipNegate ? true : !this.negate;
    }
    return n.flipNegate ? false : this.negate;
  }
  static defaults(t) {
    return er.defaults(t).Minimatch;
  }
}
Nr = /* @__PURE__ */ new WeakSet(), cS = function(t, r, n, i, o) {
  const l = r.indexOf(nr, o), c = r.lastIndexOf(nr), [u, d, g] = n ? [
    r.slice(o, l),
    r.slice(l + 1),
    []
  ] : [
    r.slice(o, l),
    r.slice(l + 1, c),
    r.slice(c + 1)
  ];
  if (u.length) {
    const y = t.slice(i, i + u.length);
    if (!_e(this, Nr, Ho).call(this, y, u, n, 0, 0))
      return false;
    i += u.length, o += u.length;
  }
  let f = 0;
  if (g.length) {
    if (g.length + i > t.length)
      return false;
    let y = t.length - g.length;
    if (_e(this, Nr, Ho).call(this, t, g, n, y, 0))
      f = g.length;
    else {
      if (t[t.length - 1] !== "" || i + g.length === t.length || (y--, !_e(this, Nr, Ho).call(this, t, g, n, y, 0)))
        return false;
      f = g.length + 1;
    }
  }
  if (!d.length) {
    let y = !!f;
    for (let S = i; S < t.length - f; S++) {
      const O = String(t[S]);
      if (y = true, O === "." || O === ".." || !this.options.dot && O.startsWith("."))
        return false;
    }
    return n || y;
  }
  const h = [[[], 0]];
  let b = h[0], x = 0;
  const v = [0];
  for (const y of d)
    y === nr ? (v.push(x), b = [[], 0], h.push(b)) : (b[0].push(y), x++);
  let w = h.length - 1;
  const m = t.length - f;
  for (const y of h)
    y[1] = m - (v[w--] + y[0].length);
  return !!_e(this, Nr, Tp).call(this, t, h, i, 0, n, 0, !!f);
}, // return false for "nope, not matching"
// return null for "not matching, cannot keep trying"
Tp = function(t, r, n, i, o, l, c) {
  const u = r[i];
  if (!u) {
    for (let f = n; f < t.length; f++) {
      c = true;
      const h = t[f];
      if (h === "." || h === ".." || !this.options.dot && h.startsWith("."))
        return false;
    }
    return c;
  }
  const [d, g] = u;
  for (; n <= g; ) {
    if (_e(this, Nr, Ho).call(this, t.slice(0, n + d.length), d, o, n, 0) && l < this.maxGlobstarRecursion) {
      const b = _e(this, Nr, Tp).call(this, t, r, n + d.length, i + 1, o, l + 1, c);
      if (b !== false)
        return b;
    }
    const h = t[n];
    if (h === "." || h === ".." || !this.options.dot && h.startsWith("."))
      return false;
    n++;
  }
  return o || null;
}, Ho = function(t, r, n, i, o) {
  let l, c, u, d;
  for (l = i, c = o, d = t.length, u = r.length; l < d && c < u; l++, c++) {
    this.debug("matchOne loop");
    let g = r[c], f = t[l];
    if (this.debug(r, g, f), g === false || g === nr)
      return false;
    let h;
    if (typeof g == "string" ? (h = f === g, this.debug("string match", g, f, h)) : (h = g.test(f), this.debug("pattern match", g, f, h)), !h)
      return false;
  }
  if (l === d && c === u)
    return true;
  if (l === d)
    return n;
  if (c === u)
    return l === d - 1 && t[l] === "";
  throw new Error("wtf?");
};
er.AST = Su;
er.Minimatch = _u;
er.escape = s$;
er.unescape = ha;
var uS = /* @__PURE__ */ ((e6) => (e6.METHODS = "method", e6.WEBFORMS = "webform", e6.CLASSES = "class", e6.WELCOME = "welcome", e6.SETTINGS = "settings", e6.ROOT = "root", e6.REPORTS = "report", e6))(uS || {});
const In = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var We = /* @__PURE__ */ ((e6) => (e6.FOLDER = "folder", e6.WEBFORM = "webform", e6.REPORT = "report", e6.METHOD = "method", e6.CLASS = "class", e6.CLASS_FOLDER = "classfolder", e6.DEBUGGER = "debugger", e6.WELCOME = "welcome", e6.SETTINGS = "settings", e6.METHODS = "method", e6.WEBFORMS = "webform", e6.CLASSES = "class", e6.DEBUGGERS = "debugger", e6.MODELS = "models", e6.ROLES = "roles", e6.HTTP_HANDLERS = "http-handlers", e6.LOCALIZATION = "localization", e6.MODEL = "model", e6.DATA_EXPLORER = "dataexplorer", e6.MOBILE = "mobile", e6.MOBILEFORM = "mform", e6.FILE = "file", e6.TEXT = "text", e6))(We || {}), uo = /* @__PURE__ */ ((e6) => (e6.GET_FOLDER = "getFolder", e6.GET = "get", e6.SAVE = "save", e6.RENAME = "rename", e6.DROP = "drop", e6.ADD_FOLDER = "addFolder", e6.CREATE_FOLDER = "mkdir", e6.RENAME_FOLDER = "renameFolder", e6.DROP_FOLDER = "dropFolder", e6.REMOVE_ITEM = "removeItem", e6.MOVE_ITEM = "moveItem", e6.GET_INFO = "getInfo", e6.SAVE_CONTENT = "save", e6.UPDATE_CHECK = "update:check", e6.UPDATE_INSTALL = "update:install", e6.GET_APP_SETTINGS = "getWebServerInfo", e6.GET_FILE_CONTENT = "getFileContent", e6.SET_FILE_CONTENT = "setFileContent", e6.GET_FILES_INFO = "getFilesInfo", e6))(uo || {}), dS = /* @__PURE__ */ ((e6) => (e6[e6.DISABLED = 0] = "DISABLED", e6[e6.ENABLED = 1] = "ENABLED", e6))(dS || {});
const fS = "roles.json", pS = "qodlyApp.json", D$ = "model.4DModel", hS = "HTTPHandlers.json", gS = "Shared/i18n.json", z$ = [
  {
    pattern: pS,
    editor: {
      key: "editors:settings"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: {
          language: "json",
          theme: "vs-dark"
        }
      }
    ]
  },
  {
    pattern: fS,
    editor: {
      key: "editors:roles"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: {
          language: "json",
          theme: "vs-dark"
        }
      }
    ]
  },
  {
    pattern: hS,
    editor: {
      key: "editors:http-handlers"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: { language: "json" }
      }
    ]
  },
  {
    pattern: gS,
    editor: {
      key: "editors:localization"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: { language: "json" }
      }
    ]
  },
  {
    pattern: D$,
    editor: {
      key: "editors:model"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: {
          language: "json",
          theme: "vs-dark"
        }
      }
    ]
  },
  {
    pattern: "**/*.webform",
    editor: {
      key: "editors:webforms"
    },
    supportedEditors: [
      {
        key: "editors:event-report"
      },
      {
        key: "editors:code",
        config: {
          language: "json",
          theme: "vs-dark"
        }
      }
    ]
  },
  {
    pattern: "**/*.qodoc",
    editor: {
      key: "editors:reports"
    },
    supportedEditors: [
      {
        key: "editors:code",
        config: {
          language: "json",
          theme: "vs-dark"
        }
      }
    ]
  },
  {
    pattern: "Methods/*.4dm",
    editor: {
      key: "editors:code:method",
      config: {
        theme: "fd-dark",
        language: "4d"
      }
    }
  },
  {
    pattern: "Methods/*.4qs",
    editor: {
      key: "editors:code:method",
      config: {
        theme: "fd-dark",
        language: "4d"
      }
    }
  },
  {
    pattern: "Classes/*.4dm",
    editor: {
      key: "editors:code",
      config: {
        theme: "fd-dark",
        language: "4d"
      }
    }
  },
  {
    pattern: "Classes/*.4qs",
    editor: {
      key: "editors:code",
      config: {
        theme: "fd-dark",
        language: "4d"
      }
    }
  },
  {
    pattern: "**/*.+(json)",
    editor: {
      key: "editors:code",
      config: {
        language: "json"
      }
    }
  },
  {
    pattern: "**/*.+(js)",
    editor: {
      key: "editors:code",
      config: {
        language: "js"
      }
    }
  },
  {
    pattern: "**/*.+(css)",
    editor: {
      key: "editors:code",
      config: {
        language: "css"
      }
    }
  },
  {
    pattern: "**/*.+(txt)",
    editor: {
      key: "editors:code",
      config: {
        language: ""
      }
    }
  },
  {
    pattern: "Debugger/*",
    editor: {
      key: "editors:code",
      config: {
        theme: "fd-dark",
        language: "4d"
      }
    }
  },
  {
    pattern: "**/*.+(png|jpeg|jpg|gif|svg)",
    editor: {
      key: "editors:img"
    }
  }
];
function U6(e6) {
  const t = vS(e6);
  switch (t) {
    case We.SETTINGS:
      return {
        filename: "Settings",
        type: t
      };
    case We.HTTP_HANDLERS:
      return {
        filename: "HTTP Handlers",
        type: t
      };
    case We.ROLES:
      return {
        filename: "Roles & Privileges",
        type: t
      };
    case We.LOCALIZATION:
      return {
        filename: "Localization",
        type: t
      };
    case We.MODEL:
      return {
        filename: "Model",
        type: t
      };
    default: {
      const r = e6.split("/"), [n] = r[1].split(".");
      return {
        filename: n,
        type: t
      };
    }
  }
}
function q6(e6) {
  const t = z$.find(
    ({ pattern: r }) => er(e6, r, {
      nocase: true
    })
  );
  return t || {
    pattern: "",
    editor: {
      key: "editors:unknown",
      config: {
        language: "text"
      }
    }
  };
}
function vS(e6) {
  const t = e6.split("."), r = t.pop(), n = t.join(".").split("/")[0];
  switch (true) {
    case r === "4DModel":
      return We.MODEL;
    case r === "WebForm":
      return We.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(r) && n === In.METHODS):
      return We.METHOD;
    case (["4dm", "4qs", "4qm"].includes(r) && n === In.CLASSES):
      return We.CLASS;
    case e6 === fS:
      return We.ROLES;
    case e6 === hS:
      return We.HTTP_HANDLERS;
    case e6 === pS:
      return We.SETTINGS;
    case e6 === gS:
      return We.LOCALIZATION;
    default:
      return We.TEXT;
  }
}
function L$(e6, t = false) {
  switch (e6) {
    case In.REPORTS:
    case "report":
      return "QoDoc";
    case In.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case In.CLASSES:
    case In.METHODS:
      return t ? "4qs" : "4dm";
    default:
      return "";
  }
}
function G6(e6, t = "") {
  const r = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e6);
  return r ? r[1] : t;
}
function Z6(e6, t, r) {
  switch (t) {
    case We.MOBILEFORM:
      return `${e6}.MForm`;
    case We.WEBFORM:
      return `${e6}.WebForm`;
    case We.REPORT:
      return `${e6}.QoDoc`;
    case We.METHOD:
    case We.CLASS:
      return `${e6}.${r ? "4qs" : "4dm"}`;
    default:
      return e6;
  }
}
class $$ {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let t;
    const r = new Promise((i) => {
      t = i;
    }), n = this.current.then(() => t);
    return this.current = r, n;
  }
}
function mS() {
  const e6 = new $$();
  return async (t) => {
    const r = await e6.lock();
    try {
      const n = await t();
      return r(), n;
    } catch (n) {
      console.error(n), r();
      return;
    }
  };
}
const F$ = "4DWS_PREFS", H$ = Ve.curry(
  (e6, t, r) => e6 && Ve.get(r, e6) === t
), K6 = Ve.curry((e6, t, r) => Ve.get(r, e6) !== t), Y6 = Ve.curry((e6, t) => Ve.get(t, "id") !== e6), X6 = Ve.curry((e6, t) => Ve.get(t, "id") === e6), J6 = Ve.curry((e6, t) => Ve.get(t, "path") === e6);
function Q6(e6 = "id", t, r) {
  return r.findIndex(H$(e6, t)) !== -1;
}
function j$(e6, t) {
  return e6 == null ? void 0 : e6.localeCompare(t, void 0, { numeric: true });
}
function e9() {
  try {
    const e6 = localStorage.getItem(F$);
    return {
      ...e6 ? JSON.parse(e6) : {},
      "features.experimental.i18n": true
    };
  } catch (e6) {
    console.error(e6);
  }
}
function t9(e6) {
  if (!e6) return "";
  const { id: t, namespace: r } = e6;
  return r && t ? `${r}:${t}` : t;
}
function bS(e6 = "") {
  const t = e6.trim().split(":") || [];
  let r = "", n = "";
  return t.length > 1 ? (r = t[1], n = t[0]) : r = t[0], {
    id: r,
    namespace: n,
    root: r.split(".").filter(Boolean)[0],
    original: n ? `${n}:${r}` : r,
    parts: t
  };
}
function B$(e6) {
  return [
    "bool",
    "word",
    "string",
    "text",
    "uuid",
    "short",
    "long",
    "number",
    "long64",
    "duration",
    "object",
    "date",
    "image",
    "blob"
  ].includes(e6.type || "");
}
const W$ = {
  bool: "bool",
  string: "string",
  text: "string",
  uuid: "string",
  short: "number",
  long: "number",
  number: "number",
  long64: "number",
  duration: "number",
  object: "object",
  date: "date",
  blob: "blob",
  image: "image",
  word: "number"
};
function r9(e6) {
  return e6 ? W$[e6] : void 0;
}
function n9(e6) {
  return e6.type === "object";
}
function V$(e6) {
  var t;
  return e6.kind === "relatedEntities" || ((t = e6.type) == null ? void 0 : t.includes("Selection")) || e6.behavior === "relatedEntities";
}
function U$(e6) {
  return e6.kind === "relatedEntity" || e6.behavior === "relatedEntity" || !B$(e6);
}
function i9(e6) {
  return V$(e6) || U$(e6);
}
function o9(e6) {
  return e6.applyTo === "dataStore";
}
function s9(e6) {
  return e6.applyTo === "dataClass";
}
function a9(e6) {
  return e6.applyTo === "entity";
}
function l9(e6) {
  return e6.applyTo === "entityCollection";
}
function c9(e6) {
  return e6.type === "entity";
}
function u9(e6) {
  return e6.type === "entitysel";
}
function q$(e6) {
  return e6.dataType === "array";
}
function G$(e6) {
  return e6.dataType === "object";
}
function Z$(e6) {
  return e6.type === "scalar";
}
function d9(e6) {
  return q$(e6) || G$(e6) || Z$(e6);
}
const f9 = (e6) => e6 != null && e6.type === "entity", p9 = (e6) => e6.type === "entitysel", h9 = (e6) => e6.type === "array" || e6.type === "scalar" && e6.dataType === "array", g9 = (e6) => e6.type === "object" || e6.type === "scalar" && e6.dataType === "object", v9 = (e6) => e6.type === "scalar" && e6.dataType === "date", m9 = (e6, t) => (e6 || "") === (t || "");
function b9() {
  return new Promise((e6, t) => {
    window.addEventListener("bundle:ready", (r) => r.data ? e6() : t(r.caughtErr));
  });
}
function y9() {
  return new Promise((e6) => {
    window.addEventListener("i18n:ready", () => e6());
  });
}
const yc = "Qodly", K$ = "Location", Y$ = "UserLanguage", X$ = "Title", Rp = {
  [yc]: [
    {
      id: X$,
      dataType: "string",
      type: "scalar",
      namespace: yc,
      initialValue: ""
    },
    {
      id: K$,
      dataType: "object",
      type: "scalar",
      namespace: yc,
      initialValue: {
        urlQuery: [],
        urlPath: {},
        Anchor: ""
      },
      schema: {
        type: "object",
        properties: [
          { name: "urlQuery", type: "object", initialValue: {} },
          // URL segments
          { name: "urlPath", type: "array", initialValue: [] },
          // Query params
          { name: "Anchor", type: "string", initialValue: "" }
          // Hash anchor
        ]
      }
    },
    {
      id: Y$,
      dataType: "object",
      type: "scalar",
      namespace: yc,
      initialValue: {
        selected: {},
        supported: []
      },
      schema: {
        type: "object",
        properties: [
          {
            name: "selected",
            type: "object",
            initialValue: {},
            attributes: [
              { name: "isocode", type: "string" },
              { name: "local", type: "string" },
              { name: "native", type: "string" },
              { name: "flag", type: "string" }
            ]
          },
          {
            name: "supported",
            type: "array",
            initialValue: [],
            attributes: [
              { name: "isocode", type: "string" },
              { name: "local", type: "string" },
              { name: "native", type: "string" },
              { name: "flag", type: "string" }
            ]
          }
        ]
      }
    }
  ]
};
var ou = /* @__PURE__ */ ((e6) => (e6.capable = "capable", e6.incapable = "incapable", e6.indifferent = "indifferent", e6))(ou || {}), J$ = /* @__PURE__ */ ((e6) => (e6.soap = "soap", e6.web = "web", e6.sql = "sql", e6.rest = "rest", e6))(J$ || {}), yS = /* @__PURE__ */ ((e6) => (e6.table = "table", e6.catalog = "catalog", e6.currentRecord = "currentRecord", e6.currentSelection = "currentSelection", e6))(yS || {});
const w9 = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function x9(e6) {
  var o;
  let t = {};
  try {
    const l = ((o = e6.match(/\/\/%attributes = (.*)/)) == null ? void 0 : o[1]) || "";
    t = JSON.parse(l);
  } catch {
  }
  const { published4DMobile: r, ...n } = t;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: ou.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!r,
      publishedRestOptions: r || {
        table: "",
        scope: yS.table
      }
    },
    ...n
  };
}
function Q$(e6) {
  const t = {};
  return e6.invisible && (t.invisible = true), e6.shared && (t.shared = true), e6.executedOnServer && (t.executedOnServer = true), e6.preemptive && [ou.capable, ou.incapable].includes(e6.preemptive) && (t.preemptive = e6.preemptive), e6.publishedSoap && (t.publishedSoap = true, e6.publishedWsdl && (t.publishedWsdl = true)), e6.publishedWeb && (t.publishedWeb = true), e6.publishedSql && (t.publishedSql = true), e6.publishedRest && e6.publishedRestOptions && (t.published4DMobile = e6.publishedRestOptions), JSON.stringify(t).replace(/"(true|false)"/g, "$1");
}
function S9(e6, t, r = false) {
  const n = Ve.isString(t) ? t : Q$(t);
  if (!r && eF(e6))
    return e6;
  const i = tF(e6);
  return `//%attributes = ${n}\r
${i}`;
}
function eF(e6) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e6);
}
function tF(e6) {
  return e6.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const Ty = () => Ri.uuid().replaceAll("-", "").toUpperCase();
function _9(e6) {
  var i, o;
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return (i = e6.singletons) == null || i.forEach(({ methods: l = [], ...c }) => {
    n.set(c.name, { ...c, methods: l });
  }), (o = e6.dataClasses) == null || o.forEach(({ methods: l = [], ...c }) => {
    const u = { ...c, methods: l };
    if (u.uuid || (u.uuid = Ty()), u.attributes) {
      const d = ["storage", "relatedEntity"];
      u.attributes = u.attributes.map(
        (g) => d.includes(g.kind) && !g.uuid ? {
          ...g,
          uuid: Ty()
        } : g
      );
    }
    r.set(u.className, u), t.set(
      u.collectionName,
      u
    );
  }), {
    ...e6,
    methods: e6.methods || [],
    dataClasses: Object.fromEntries(r.entries()),
    dataClassByCollectionName: Object.fromEntries(
      t.entries()
    ),
    singletons: Object.fromEntries(n.entries())
  };
}
const E9 = (e6) => e6.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_{2,}/g, "_").replace(/^_|_$/g, "");
var ot = /* @__PURE__ */ ((e6) => (e6.DATACLASS = "dataclass", e6.METHOD = "method", e6.ATTRIBUTE = "attribute", e6.DATASTORE = "datastore", e6.SINGLETON = "singleton", e6.SINGLETON_METHOD = "singletonMethod", e6))(ot || {}), _t = /* @__PURE__ */ ((e6) => (e6.DS_METHOD = "dsMethod", e6.DATACLASS_METHOD = "dataclassMethod", e6.ENTITY_METHOD = "entityMethod", e6.ENTITY_SEL_METHOD = "entityselMethod", e6))(_t || {});
const rF = [
  ot.DATASTORE,
  ot.DATACLASS,
  ot.ATTRIBUTE,
  ot.SINGLETON_METHOD,
  ot.SINGLETON,
  ot.METHOD,
  _t.DS_METHOD,
  _t.DATACLASS_METHOD,
  _t.ENTITY_METHOD,
  _t.ENTITY_SEL_METHOD
], Ry = (e6) => [
  _t.DS_METHOD,
  _t.ENTITY_METHOD,
  _t.DATACLASS_METHOD
].includes(e6) ? ot.METHOD : e6, su = "guest", wS = [
  {
    key: "read",
    label: "Read",
    canApplyTo: [
      ot.DATASTORE,
      ot.DATACLASS,
      ot.ATTRIBUTE
    ]
  },
  {
    key: "create",
    label: "Create",
    canApplyTo: [
      ot.DATASTORE,
      ot.DATACLASS,
      ot.ATTRIBUTE
    ]
  },
  {
    key: "update",
    label: "Update",
    canApplyTo: [
      ot.DATASTORE,
      ot.DATACLASS,
      ot.ATTRIBUTE
    ]
  },
  {
    key: "drop",
    label: "Delete",
    canApplyTo: [
      ot.DATASTORE,
      ot.DATACLASS,
      ot.ATTRIBUTE
    ]
  },
  {
    key: "execute",
    label: "Execute",
    canApplyTo: [
      ot.DATASTORE,
      ot.DATACLASS,
      ot.METHOD,
      _t.DS_METHOD,
      _t.DATACLASS_METHOD,
      _t.ENTITY_METHOD,
      _t.ENTITY_SEL_METHOD,
      ot.SINGLETON,
      ot.SINGLETON_METHOD
    ]
  },
  {
    key: "promote",
    label: "Promote",
    canApplyTo: [
      ot.METHOD,
      _t.DS_METHOD,
      _t.DATACLASS_METHOD,
      _t.ENTITY_METHOD,
      _t.ENTITY_SEL_METHOD,
      ot.SINGLETON_METHOD
    ]
  }
];
function gn(e6, ...t) {
  return Array.from(/* @__PURE__ */ new Set([...e6, ...t]));
}
function nF(e6) {
  const t = {}, r = /* @__PURE__ */ new Map();
  e6.forEach((u) => {
    const d = u.id || Ri.generate();
    t[d] = {
      ...u,
      id: d,
      parents: [],
      includes: gn(u.includes || []),
      resources: []
    }, r.set(u.privilege, d);
  }), Object.entries(t).forEach(([u, d]) => {
    const g = d.includes.map((f) => {
      const h = r.get(f);
      return h ? (t[h].parents = gn(t[h].parents, h), h) : "";
    }).filter(Boolean);
    t[u] = {
      ...d,
      includes: g
    };
  });
  const n = iF(t), i = /* @__PURE__ */ new Set();
  function o(u) {
    i.add(u.id), u.includes = u.includes.filter((d) => !i.has(d));
  }
  if (n.forEach(o), n.forEach((u) => u.parents = []), n.forEach((u) => {
    u.includes.forEach((d) => t[d].parents.push(u.id));
  }), Object.values(t).find(
    ({ privilege: u }) => u === su
  )) return t;
  const c = Ri.generate();
  return {
    [c]: {
      id: c,
      privilege: su,
      includes: [],
      parents: [],
      resources: []
    },
    ...t
  };
}
function iF(e6) {
  return Object.values(e6).sort(
    (t, r) => t.parents.length - r.parents.length
  );
}
function Th(e6, t) {
  const r = t[e6];
  let n = [];
  return r && r.parents.forEach((i) => {
    n = gn(n, ...Th(i, t), i);
  }), n;
}
function Cp(e6, t) {
  const r = t[e6];
  let n = [];
  return r && r.includes.forEach((i) => {
    n = gn(n, ...Cp(i, t), i);
  }), n;
}
function O9(e6, t) {
  const r = t[e6];
  if (!r)
    return [];
  const n = [e6, ...Th(e6, t), ...r.includes];
  return Object.keys(t).filter((i) => !n.includes(i));
}
function k9(e6, t) {
  return t[e6] ? Object.keys(t).reduce((n, i) => i === e6 ? n : {
    ...n,
    [i]: {
      ...t[i],
      parents: t[i].parents.filter((o) => o !== e6),
      includes: t[i].includes.filter((o) => o !== e6)
    }
  }, {}) : t;
}
function A9(e6, t, r) {
  const n = r[e6], i = r[t];
  return !n || !i ? r : {
    ...r,
    [e6]: {
      ...r[e6],
      includes: gn(n.includes, t)
    },
    [t]: {
      ...r[t],
      parents: gn(i.parents, e6)
    }
  };
}
function T9(e6, t, r) {
  const n = r[e6], i = r[t];
  return !n || !i ? r : {
    ...r,
    [e6]: {
      ...r[e6],
      includes: r[e6].includes.filter((o) => o !== t)
    },
    [t]: {
      ...r[t],
      parents: r[t].parents.filter((o) => o !== e6)
    }
  };
}
function R9(e6, t) {
  Eh(e6), Object.entries(t).forEach(([, { privilege: n }]) => {
    if (e6.toLowerCase() === n.toLowerCase())
      throw new Error(`There's already a Privilege with the name ${e6}`);
  });
  const r = Ri.generate();
  return {
    [r]: {
      id: r,
      privilege: e6,
      includes: [],
      parents: [],
      resources: []
    },
    ...t
  };
}
function C9(e6, t, r) {
  if (!e6)
    throw new Error("Please enter a name");
  if (!r[t])
    throw new Error("Invalid privilege");
  return Object.entries(r).forEach(([, { privilege: n, id: i }]) => {
    if (e6.toLowerCase() === n.toLowerCase() && t !== i)
      throw new Error(`There's already a Privilege with the name ${e6}`);
  }), {
    ...r,
    [t]: {
      ...r[t],
      privilege: e6
    }
  };
}
function I9(e6, t) {
  return e6.map((r) => Pi(r, t));
}
function Pi(e6, t) {
  return t[e6] ? t[e6] : null;
}
function oF({ applyTo: e6, type: t, ...r }) {
  return Object.entries(r).reduce((n, [i, o]) => {
    const l = Ve.find(wS, ["key", i]);
    return !l || !l.canApplyTo.includes(t) || (typeof o == "string" ? o.split(",") : o).forEach((u) => {
      n[u] = gn(n[u] || [], i);
    }), n;
  }, {});
}
const Cy = (e6, t = false) => ["read", "create", "update", "delete"].includes(e6.toLowerCase()) ? `All ${t ? "dataclasses and " : ""}attributes have the '${e6.toLowerCase()}' permission` : e6.toLowerCase() === "execute" ? `All functions defined ${t ? "through the model (DataStore, Dataclasses, Entity selections, Entities) have the execute permission" : "on this Dataclass, Entity selection class, Entity class have the execute permission"}` : `All ${t ? "dataclasses, " : ""}attributes and functions have the '${e6.toLowerCase()}' permission`;
function xS(e6) {
  return {
    permissions: wS.filter(
      ({ canApplyTo: t }) => t.includes(e6.type)
    ).map(({ key: t, label: r }) => {
      const n = { name: t, from: [] };
      switch (e6.type) {
        case ot.DATASTORE:
          return {
            ...n,
            info: Cy(r, true)
          };
        case ot.DATACLASS:
          return {
            ...n,
            info: Cy(r)
          };
        default:
          return n;
      }
    }),
    resource: e6.applyTo,
    type: e6.type
  };
}
function sF(e6, t) {
  const r = aF(t), n = {};
  return e6.filter(({ type: i }) => rF.includes(i)).forEach((i) => {
    const o = oF(i);
    Object.entries(o).forEach(([l, c]) => {
      var g;
      const u = (g = r[l]) == null ? void 0 : g.id;
      if (!u)
        return;
      n[u] = n[u] || { ...t[u] };
      let d = Ve.find(n[u].resources, {
        resource: i.applyTo,
        type: i.type
      });
      d || (d = xS(i), n[u].resources.push(d)), d.permissions = d.permissions.map((f) => ({
        ...f,
        checked: f.checked || c.includes(f.name)
      }));
    });
  }), {
    ...t,
    ...n
  };
}
function aF(e6) {
  return Object.values(e6).reduce(
    (t, r) => ({
      ...t,
      [r.privilege]: r
    }),
    {}
  );
}
function P9(e6) {
  var r;
  if (!e6)
    throw new Error("Invalid roles data");
  const t = nF(e6.privileges || []);
  return {
    forceLogin: (e6 == null ? void 0 : e6.forceLogin) || false,
    restrictedByDefault: (e6 == null ? void 0 : e6.restrictedByDefault) || false,
    privileges: sF(((r = e6 == null ? void 0 : e6.permissions) == null ? void 0 : r.allowed) || [], t),
    roles: ((e6 == null ? void 0 : e6.roles) || []).map(({ id: n = Ri.generate(), role: i, privileges: o = [] }) => ({
      id: n,
      role: i,
      privileges: gn(o).map(
        (l) => {
          var c;
          return (c = Object.values(t).find(
            ({ privilege: u }) => u === l
          )) == null ? void 0 : c.id;
        }
      ).filter(Boolean)
    })).reduce((n, i) => ({
      ...n,
      [i.id]: {
        ...i
      }
    }), {})
  };
}
function N9(e6) {
  const t = Object.values(e6.privileges).filter(({ includes: n }) => n.length === 0).map(({ id: n }) => n), r = [
    ...t,
    ...t.map((n) => Th(n, e6.privileges).reverse())
  ].flat().filter((n, i, o) => o.indexOf(n) === i).map((n) => e6.privileges[n]);
  return {
    forceLogin: e6.forceLogin || false,
    restrictedByDefault: e6.restrictedByDefault || false,
    permissions: {
      allowed: Object.values(e6.privileges).reduce(
        (n, i) => (i.resources.forEach(({ permissions: o, resource: l, type: c }) => {
          let u = Ve.find(n, {
            applyTo: l,
            type: Ry(c)
          });
          u || (u = {
            applyTo: l,
            type: Ry(c)
          }, n.push(u)), o.forEach(({ name: d, checked: g }) => {
            g && u && (u[d] = u[d] || [], u[d].push(i.privilege));
          });
        }), n),
        []
      )
    },
    privileges: r.filter(({ privilege: n }) => n !== su).map(({ id: n, includes: i, privilege: o }) => ({
      id: n,
      privilege: o,
      includes: i.map((l) => e6.privileges[l].privilege)
    })),
    roles: Object.values(e6.roles).map((n) => ({
      ...n,
      privileges: n.privileges.map((i) => {
        var o;
        return (o = e6.privileges[i]) == null ? void 0 : o.privilege;
      }).filter(Boolean)
    }))
  };
}
function M9(e6, t) {
  const r = t[e6], n = {
    children: [],
    links: [],
    parents: [],
    selected: e6
  };
  if (!r)
    return n;
  function i(c, u, d = []) {
    const g = c.reduce(
      (f, h) => {
        var b;
        return [...f, ...((b = t[h]) == null ? void 0 : b[u]) ?? []];
      },
      []
    );
    return g.length === 0 ? d : (d.push(g), i(g, u, d));
  }
  function o(c) {
    const u = [], d = [];
    for (let g = c.length - 1; g >= 0; g -= 1) {
      const f = c[g].filter((h) => u.includes(h) ? false : (u.push(h), true));
      f.length > 0 && d.unshift(gn(f));
    }
    return d;
  }
  function l(c, u) {
    const d = [];
    return c.reduce((g, f) => (f.forEach((h) => {
      var x;
      (((x = t[h]) == null ? void 0 : x[u === "parents" ? "includes" : "parents"]) ?? []).forEach((v) => {
        d.includes(v) && g.push(
          u === "parents" ? {
            source: h,
            target: v
          } : {
            source: v,
            target: h
          }
        );
      }), d.push(h);
    }), g), []);
  }
  return n.children = i([e6], "includes"), n.children = o(n.children), n.parents = i([e6], "parents"), n.parents = o(n.parents), n.links = [
    ...l([[e6], ...n.parents], "parents"),
    ...l([[e6], ...n.children], "includes")
  ], n;
}
function D9(e6, t, r) {
  const n = Pi(e6, r);
  if (!n || Ve.find(n.resources, {
    resource: t.applyTo,
    type: t.type
  }))
    return r;
  const i = {
    ...n,
    resources: [...n.resources, xS(t)]
  };
  return {
    ...r,
    [e6]: i
  };
}
function z9(e6, t, r) {
  const n = Pi(e6, r);
  if (!n) return r;
  const i = {
    ...n,
    resources: n.resources.filter(
      ({ resource: o, type: l }) => o !== t.applyTo || l !== t.type
    )
  };
  return {
    ...r,
    [e6]: i
  };
}
function L9(e6, t) {
  const r = Object.entries(e6).map(([n, i]) => {
    const o = Pi(n, t);
    if (!o) return { [n]: t[n] };
    const l = {
      ...o,
      resources: o.resources.filter(
        ({ resource: c, type: u }) => !i.some(
          (d) => d.applyTo === c && d.type === u
        )
      )
    };
    return {
      [n]: l
    };
  }).reduce((n, i) => ({ ...n, ...i }), {});
  return {
    ...t,
    ...r
  };
}
function $9(e6, t) {
  const r = Pi(e6, t);
  if (!r) return t;
  const n = {
    ...r,
    resources: r.resources.filter((i) => i.permissions.some((o) => o.from.length)).map((i) => ({
      ...i,
      permissions: i.permissions.map((o) => ({ ...o, checked: false }))
    }))
  };
  return {
    ...t,
    [e6]: n
  };
}
function F9(e6, t, r, n) {
  const i = Pi(e6, n);
  if (!i) return n;
  const l = Ve.find(i.resources, {
    type: t.type,
    resource: t.resource
  }) ? {
    ...i,
    resources: i.resources.map((c) => c.type === t.type && c.resource === t.resource ? {
      ...c,
      permissions: t.permissions.map((u) => u.name === r.name ? {
        ...u,
        checked: !u.checked,
        from: []
      } : u)
    } : c)
  } : {
    ...i,
    resources: [
      ...i.resources,
      {
        ...t,
        permissions: t.permissions.map((c) => ({
          ...c,
          checked: r.name === c.name,
          from: []
        }))
      }
    ]
  };
  return {
    ...n,
    [e6]: l
  };
}
function H9(e6, t) {
  var u;
  const r = lF(e6, t) || [], n = ((u = Pi(e6, t)) == null ? void 0 : u.resources) || [], l = ([...r, ...n].filter(
    ({ type: d }) => [
      _t.DS_METHOD,
      _t.DATACLASS_METHOD,
      _t.ENTITY_METHOD,
      _t.ENTITY_SEL_METHOD
    ].includes(d)
  ) || []).map(({ resource: d }) => d);
  return Object.entries(t).reduce(
    (d, [g, { resources: f }]) => (f.filter(
      ({ resource: h, type: b }) => [
        _t.DS_METHOD,
        _t.DATACLASS_METHOD,
        _t.ENTITY_METHOD,
        _t.ENTITY_SEL_METHOD
      ].includes(b) && l.includes(h)
    ).forEach(({ permissions: h, resource: b }) => {
      var v;
      ((v = h.find(
        ({ name: w }) => w === "promote"
      )) == null ? void 0 : v.checked) && (d[b] = gn(d[b] || [], g));
    }), d),
    {}
  );
}
function lF(e6, t) {
  var l;
  const r = Pi(e6, t);
  if (!r) return [];
  const n = (l = Object.values(t).find(
    (c) => c.privilege === su
  )) == null ? void 0 : l.id;
  return (n && n !== e6 ? gn(Cp(e6, t), n) : Cp(e6, t)).reduce(
    (c, u) => {
      const d = t[u];
      return d && d.resources.forEach((g) => {
        if (g.permissions.filter(
          ({ checked: b, name: x }) => b && x !== "promote"
        ).length === 0)
          return;
        const h = Ve.find(c, {
          type: g.type,
          resource: g.resource
        });
        if (!h) {
          c.push({
            ...g,
            permissions: g.permissions.map((b) => ({
              ...b,
              from: b.checked ? [u] : [],
              checked: false
            }))
          });
          return;
        }
        h.permissions = h.permissions.map((b, x) => {
          let { from: v = [] } = b;
          return g.permissions[x].checked && !v.includes(u) && (v = [...v, u]), {
            ...b,
            from: v,
            checked: b.checked
          };
        });
      }), c;
    },
    Ve.clone(
      r.resources.map((c) => ({
        ...c,
        permissions: c.permissions.map(({ checked: u, ...d }) => ({
          ...d,
          checked: !!u
        }))
      }))
    )
  );
}
const j9 = (e6, t, r) => {
  const n = {
    id: e6,
    role: t,
    privileges: []
  };
  return {
    ...r,
    [n.id]: n
  };
}, B9 = (e6, t) => t[e6] ? Object.values(t).reduce((r, n) => e6 === n.id || n.role === "" ? r : {
  ...r,
  [n.id]: n
}, {}) : t, W9 = (e6, t) => {
  if (Eh(e6.role), Object.values(t).find((n) => n.role === e6.role))
    throw new Error(`a role with the name ${e6.role} already exists`);
  return Object.values(t).reduce((n, i) => e6.id === i.id ? {
    ...n,
    [e6.id]: e6
  } : {
    ...n,
    [i.id]: i
  }, {});
};
function cF(e6) {
  var r;
  if (!e6 || typeof e6 != "object") return [];
  const t = ((r = e6.__STATUS) == null ? void 0 : r.errors) ?? e6.__ERRORS ?? e6.errorStack;
  return Array.isArray(t) ? t : [];
}
function uF(e6, t) {
  return t ? e6.filter((r) => r.seriousError === true) : [];
}
function V9(e6, t) {
  const r = cF(e6);
  return uF(r, t);
}
function U9(e6) {
  const t = e6.map(
    (r) => typeof r.message == "string" ? r.message : String(r)
  );
  return t.length === 0 ? [] : [{ messages: t }];
}
var dF = /* @__PURE__ */ ((e6) => (e6.LOCAL = "local", e6.SHARED = "shared", e6.THEME = "theme", e6))(dF || {}), fF = /* @__PURE__ */ ((e6) => (e6.GROUP = "group", e6.TEXT_FIELD = "textfield", e6.COLOR_PICKER = "colorpicker", e6.LAYOUT = "layout", e6.RADIOGROUP = "radiogroup", e6.SELECT = "select", e6.BORDERS = "borders", e6.BORDER_RADIUS = "borderRadius", e6.DIMENSIONS = "dimensions", e6.COMBOBOX = "combobox", e6.UNITFIELD = "unitfield", e6.DATAGRID = "datagrid", e6.CHECKBOX = "checkbox", e6.NUMBER_FIELD = "number", e6.FORMAT_FIELD = "format", e6.DISPLAY = "display", e6.BOXSHADOW = "boxshadow", e6.CSSCLASS_SELECTOR = "cssClassSelector", e6.CUSTOM_STYLE_PROPS_SELECTOR = "customStylePropertiesSelector", e6.ICON_PICKER = "iconPicker", e6.ASYNC_SELECT = "asyncSelect", e6.DS_AUTO_SUGGEST = "dsAutoSuggest", e6.POSITION = "position", e6.BACKGROUND = "background", e6.SELECTBOXLENGTH = "selectBoxLength", e6.I18NFIELD = "i18nField", e6.DATE_INTERVALS = "dateIntervals", e6.SEARCH_MODE = "searchMode", e6))(fF || {}), pF = /* @__PURE__ */ ((e6) => (e6.SHOW_AFTER_TIMEOUT = "show_after_timeout", e6.HIDE_AFTER_TIMEOUT = "hide_after_timeout", e6))(pF || {}), SS = /* @__PURE__ */ ((e6) => (e6.AIRY = "airy", e6.COMPACT = "neutral", e6))(SS || {}), hF = /* @__PURE__ */ ((e6) => (e6.GRID = "grid", e6.COMPACT = "compact", e6))(hF || {}), gF = /* @__PURE__ */ ((e6) => (e6[e6.METHOD = 1] = "METHOD", e6[e6.CLASS = 10] = "CLASS", e6))(gF || {}), vF = /* @__PURE__ */ ((e6) => (e6.WelCome = "WelCome", e6.ActionPanel = "ActionPanel", e6.SideBar = "SideBar", e6.Settings = "Settings", e6.Main = "Main", e6.Explorer = "Explorer", e6.Header = "Header", e6.ComponentList = "ComponentList", e6))(vF || {});
const q9 = {
  SIDEBAR_SECTION_RESIZABLE: "sidebar.section.resizable"
};
var mF = /* @__PURE__ */ ((e6) => (e6[e6.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e6[e6.JSON_MALFORMED = 554] = "JSON_MALFORMED", e6[e6.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e6))(mF || {});
const bF = { label: "Base", id: "root" }, G9 = [
  "rounded-full",
  "rounded-lg",
  "border-gray-400",
  "border-2",
  "bg-red-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-transparent",
  "bg-primary-dark",
  "bg-green-500",
  "bg-yellow-400",
  "text-gray-500",
  "text-4xl",
  "text-white",
  "px-4",
  "py-2",
  "primary",
  "info",
  "secondary",
  "success",
  "warning",
  "danger",
  "w-10",
  "w-20",
  "w-40",
  "w-60",
  "w-80",
  "mb-2",
  "mb-3",
  "shadow",
  "shadow-lg",
  "shadow-xl",
  "shadow-2xl"
], Z9 = (e6) => e6.id === bF.id, _S = (e6, t, r = "") => t ? e6.type === "currentState" && e6.value === t ? { ...e6, value: r } : e6.type === "combination" && e6.conditions ? {
  ...e6,
  conditions: e6.conditions.map(
    (n) => _S(n, t, r)
  )
} : e6 : e6;
function K9(e6, t) {
  const { id: r, label: n } = t;
  return {
    ...e6,
    components: Object.entries(e6.components || {}).reduce(
      (i, [o, l]) => ({
        ...i,
        [o]: {
          ...l,
          custom: Object.entries(l.custom).reduce(
            (c, [u, d]) => u === `states:${r}` ? c : {
              ...c,
              [u]: d
            },
            {}
          ),
          props: Object.entries(l.props).reduce(
            (c, [u, d]) => {
              let g = d;
              return u === "events" && (g = g.map((f) => {
                var h, b;
                return f.type === "simple-action" ? {
                  ...f,
                  state: {
                    ...f.state,
                    states: (b = (h = f.state) == null ? void 0 : h.states) == null ? void 0 : b.filter(
                      (x) => x !== r
                    )
                  }
                } : f;
              })), {
                ...c,
                [u]: g
              };
            },
            {}
          )
        }
      }),
      {}
    ),
    metadata: {
      ...e6.metadata,
      states: e6.metadata.states.filter((i) => (i == null ? void 0 : i.id) !== r).map((i) => i.conditions ? {
        ...i,
        conditions: _S(i.conditions, n)
      } : i)
    }
  };
}
const yF = (e6, t, r) => {
  switch (e6.type) {
    case "datasource":
      return {
        ...e6,
        path: e6.path === t ? r : e6.path,
        value: e6.valueType === "datasource" && e6.value === t ? r : e6.value,
        compareValue: e6.compareValueType === "datasource" && e6.compareValue === t ? r : e6.compareValue
      };
    case "privilege":
    case "currentState":
    case "parentState":
      if (e6.valueType === "datasource")
        return {
          ...e6,
          value: e6.value === t ? r : e6.value
        };
      break;
    case "combination":
      return {
        ...e6,
        conditions: (e6.conditions || []).map(
          (n) => yF(n, t, r)
        )
      };
  }
  return e6;
}, wF = (e6, t) => {
  if (e6.id === t || e6.type === "reference" && e6.ref === t)
    return null;
  if (e6.type === "combination" && e6.conditions) {
    const r = e6.conditions.map((n) => wF(n, t)).filter(Boolean);
    return r.length === 1 ? {
      ...r[0],
      id: e6.id
    } : {
      ...e6,
      conditions: r
    };
  }
  return e6;
}, xF = (e6) => e6.id ? e6.type === "combination" && e6.conditions ? {
  ...e6,
  conditions: e6.conditions.map(xF)
} : e6 : {
  ...e6,
  id: Ri.generate()
};
function Y9(e6, t = {}) {
  switch (e6) {
    case We.WEBFORM:
    case We.WEBFORMS: {
      const r = {
        metadata: {
          v: "1.0",
          datasources: [],
          styles: []
        },
        components: {
          ROOT: {
            parent: "",
            type: {
              resolvedName: "Container"
            },
            isCanvas: true,
            props: {
              airyMode: false,
              className: "bg-white w-full px-6",
              classNames: [],
              events: []
            },
            displayName: "Page",
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {}
          }
        }
      };
      return t["webforms.display-mode"] === SS.AIRY && (r.components.ROOT.props.airyMode = true), r;
    }
    case We.REPORT:
      return {
        metadata: {
          v: "1.0",
          datasources: [],
          styles: []
        },
        pages: [
          {
            name: "doc",
            id: "index",
            components: {
              ROOT: {
                type: {
                  resolvedName: "Document"
                },
                isCanvas: true,
                props: {
                  classNames: [],
                  events: [],
                  airyMode: false,
                  className: "bg-white w-full px-6"
                },
                displayName: "Document",
                custom: {},
                parent: "",
                hidden: false,
                nodes: [],
                linkedNodes: {}
              }
            }
          }
        ]
      };
    case We.METHOD:
    case We.METHODS:
      return `//%attributes = {}
`;
    case We.HTTP_HANDLERS:
      return [];
    case We.LOCALIZATION:
    case We.SETTINGS:
      return {};
    case We.ROLES:
      return {
        permissions: {
          allowed: []
        },
        privileges: [],
        roles: []
      };
    default:
      return "";
  }
}
function X9(e6, t) {
  return Ve.isEqual(e6, t);
}
function J9(e6, t) {
  const { qodly: r = true, withExtension: n = true } = t || {}, i = L$(e6.type, r);
  let o = "";
  switch (e6.type) {
    case We.WEBFORM:
      o = `${In.WEBFORMS}/${e6.name}`;
      break;
    case We.METHOD:
      o = `${In.METHODS}/${e6.name}`;
      break;
    case We.CLASS:
      o = `${In.CLASSES}/${e6.name}`;
      break;
    default:
      return "";
  }
  return `${o}${n ? `.${i}` : ""}`;
}
function SF(...e6) {
  return (...t) => {
    e6.forEach((r) => r == null ? void 0 : r(...t));
  };
}
const Q9 = SF;
function e7(e6) {
  return e6 ? "" : void 0;
}
function t7(e6, t) {
  if (!e6) return;
  const r = () => {
    e6.focus(t);
  };
  if (t != null && t.nextTick) {
    requestAnimationFrame(r);
    return;
  }
  r();
}
function r7(...e6) {
  return (t) => {
    e6.forEach((r) => {
      if (r) {
        if (typeof r == "function") {
          r(t);
          return;
        }
        r.current = t;
      }
    });
  };
}
function n7({
  condition: e6,
  message: t
}) {
}
const i7 = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function o7(e6, t) {
  return e6.some((r) => String(r) === String(t)) ? e6 : [...e6, t];
}
function s7(e6) {
  return typeof e6 == "object" && e6 !== null && "target" in e6 && typeof e6.target == "object";
}
function a7(e6) {
  e6.preventDefault(), e6.stopPropagation();
}
const ES = "studio.appearance", OS = "(prefers-color-scheme: dark)", Iy = {
  // Editor surfaces (white / light greys)
  "--vscode-editor-background": "#ffffff",
  "--vscode-editor-foreground": "#1f2328",
  "--vscode-editor-lineHighlightBackground": "#f4f0fa",
  "--vscode-editor-selectionBackground": "#e0c7f5",
  "--vscode-editorCursor-foreground": "#935ebf",
  "--vscode-editorLineNumber-foreground": "#8c959f",
  "--vscode-editorLineNumber-activeForeground": "#1f2328",
  // Primary (Studio purple)
  "--vscode-button-background": "#c190ea",
  "--vscode-button-foreground": "#ffffff",
  "--vscode-button-hoverBackground": "#b174e5",
  // Inputs
  "--vscode-input-background": "#ffffff",
  "--vscode-input-foreground": "#1f2328",
  "--vscode-input-border": "#d0d7de",
  "--vscode-dropdown-background": "#ffffff",
  "--vscode-dropdown-foreground": "#1f2328",
  "--vscode-checkbox-background": "#ffffff",
  "--vscode-checkbox-border": "#d0d7de",
  // Side bar / panels (light grey)
  "--vscode-sideBar-background": "#f6f6fb",
  "--vscode-sideBar-foreground": "#1f2328",
  "--vscode-sideBarSectionHeader-background": "#ffffff",
  "--vscode-panel-background": "#ffffff",
  "--vscode-panel-border": "#d0d7de",
  "--vscode-activityBar-background": "#f6f6fb",
  "--vscode-activityBar-foreground": "#935ebf",
  "--vscode-statusBar-background": "#c190ea",
  "--vscode-statusBar-foreground": "#ffffff",
  "--vscode-focusBorder": "#c190ea",
  "--vscode-widget-shadow": "#0000001f",
  // Lists
  "--vscode-list-activeSelectionBackground": "#e0c7f5",
  "--vscode-list-activeSelectionForeground": "#29133c",
  "--vscode-list-hoverBackground": "#f2ecf9",
  "--vscode-list-focusBackground": "#f2ecf9",
  // Semantic
  "--vscode-editorError-foreground": "#cf222e",
  "--vscode-editorWarning-foreground": "#9a6700",
  "--vscode-editorInfo-foreground": "#c190ea",
  "--vscode-descriptionForeground": "#636c76",
  "--vscode-errorForeground": "#cf222e",
  // Tabs
  "--vscode-tab-activeBackground": "#ffffff",
  "--vscode-tab-activeForeground": "#1f2328",
  "--vscode-tab-inactiveBackground": "#f0f0f6",
  "--vscode-tab-border": "#d0d7de",
  "--vscode-editorGroupHeader-tabsBackground": "#f6f6fb",
  "--vscode-tab-hoverBackground": "#f2ecf9",
  "--vscode-tab-activeBorderTop": "#c190ea",
  "--vscode-editorWidget-background": "#ffffff"
};
function _F() {
  var e6;
  try {
    return ((e6 = window.matchMedia) == null ? void 0 : e6.call(window, OS).matches) ?? true;
  } catch (t) {
    return console.error(t), true;
  }
}
function kS(e6) {
  return e6 === "light" || e6 === "system" && !_F();
}
function l7(e6) {
  return kS(e6) ? "Default Light+" : "Default Dark+";
}
function EF() {
  try {
    const e6 = localStorage.getItem(ES);
    if (e6 === "light" || e6 === "system") return e6;
  } catch (e6) {
    console.error(e6);
  }
  return "dark";
}
function Py(e6) {
  const t = document.documentElement;
  kS(e6) ? Object.entries(Iy).forEach(
    ([r, n]) => t.style.setProperty(r, n)
  ) : Object.keys(Iy).forEach((r) => t.style.removeProperty(r));
}
let sa = null, aa = null;
function Ny(e6) {
  try {
    localStorage.setItem(ES, e6);
  } catch (t) {
    console.error(t);
  }
  sa && aa && (sa.removeEventListener("change", aa), sa = null, aa = null), e6 === "system" && (sa = window.matchMedia(OS), aa = () => Py("system"), sa.addEventListener("change", aa)), Py(e6);
}
function c7() {
  window.setStudioAppearance = Ny, Ny(EF());
}
const Bt = "/rest/$designer", Eu = "/rest/$designer-ext";
function u7(...e6) {
  return (t) => {
    if (e6.length === 0)
      return t;
    const r = { ...t };
    return e6.forEach((n) => {
      typeof r[n] == "string" && (r[n] = new Date(r[n]));
    }), r;
  };
}
class My extends Error {
  constructor(t, r, n) {
    super(), this.url = t, this.response = r, this.data = n;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function st(e6, t) {
  var i;
  _p.next({ action: nu.REQUEST_SENT });
  const r = await window.fetch(e6, t);
  if (/401/.test(r.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(r.status.toString())) {
    let o;
    try {
      const l = await r.json();
      ((i = l == null ? void 0 : l.__ERROR) == null ? void 0 : i.some(
        (u) => u.errCode === 1651
      )) && _p.next({
        action: nu.EVENT_EMITED,
        payload: {
          eventName: "onsessionexpired"
        }
      }), o = new My(e6, r, l);
    } catch {
      o = new My(e6, r);
    }
    throw o.log(), o;
  }
  return await r.json();
}
function d7(e6) {
  return _p.next({ action: nu.REQUEST_SENT }), e6;
}
var _n = {}, Xt = {}, Dy;
function Ji() {
  if (Dy) return Xt;
  Dy = 1;
  var e6 = Xt.ValidationError = function(v, w, m, y, S, O) {
    if (Array.isArray(y) ? (this.path = y, this.property = y.reduce(function(A, $) {
      return A + c($);
    }, "instance")) : y !== void 0 && (this.property = y), v && (this.message = v), m) {
      var E = m.$id || m.id;
      this.schema = E || m;
    }
    w !== void 0 && (this.instance = w), this.name = S, this.argument = O, this.stack = this.toString();
  };
  e6.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var t = Xt.ValidatorResult = function(v, w, m, y) {
    this.instance = v, this.schema = w, this.options = m, this.path = y.path, this.propertyPath = y.propertyPath, this.errors = [], this.throwError = m && m.throwError, this.throwFirst = m && m.throwFirst, this.throwAll = m && m.throwAll, this.disableFormat = m && m.disableFormat === true;
  };
  t.prototype.addError = function(v) {
    var w;
    if (typeof v == "string")
      w = new e6(v, this.instance, this.schema, this.path);
    else {
      if (!v) throw new Error("Missing error detail");
      if (!v.message) throw new Error("Missing error message");
      if (!v.name) throw new Error("Missing validator type");
      w = new e6(v.message, this.instance, this.schema, this.path, v.name, v.argument);
    }
    if (this.errors.push(w), this.throwFirst)
      throw new n(this);
    if (this.throwError)
      throw w;
    return w;
  }, t.prototype.importErrors = function(v) {
    typeof v == "string" || v && v.validatorType ? this.addError(v) : v && v.errors && (this.errors = this.errors.concat(v.errors));
  };
  function r(x, v) {
    return v + ": " + x.toString() + `
`;
  }
  t.prototype.toString = function(v) {
    return this.errors.map(r).join("");
  }, Object.defineProperty(t.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), Xt.ValidatorResultError = n;
  function n(x) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, n), this.instance = x.instance, this.schema = x.schema, this.options = x.options, this.errors = x.errors;
  }
  n.prototype = new Error(), n.prototype.constructor = n, n.prototype.name = "Validation Error";
  var i = Xt.SchemaError = function x(v, w) {
    this.message = v, this.schema = w, Error.call(this, v), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, x);
  };
  i.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: i, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var o = Xt.SchemaContext = function(v, w, m, y, S) {
    this.schema = v, this.options = w, Array.isArray(m) ? (this.path = m, this.propertyPath = m.reduce(function(O, E) {
      return O + c(E);
    }, "instance")) : this.propertyPath = m, this.base = y, this.schemas = S;
  };
  o.prototype.resolve = function(v) {
    return b(this.base, v);
  }, o.prototype.makeChild = function(v, w) {
    var m = w === void 0 ? this.path : this.path.concat([w]), y = v.$id || v.id;
    let S = b(this.base, y || "");
    var O = new o(v, this.options, m, S, Object.create(this.schemas));
    return y && !O.schemas[S] && (O.schemas[S] = v), O;
  };
  var l = Xt.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(x) {
      return typeof x == "string" && parseFloat(x) === parseInt(x, 10) && !isNaN(x);
    },
    // 7.3.8. regex
    regex: function(x) {
      var v = true;
      try {
        new RegExp(x);
      } catch {
        v = false;
      }
      return v;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };
  l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], Xt.isFormat = function(v, w, m) {
    if (typeof v == "string" && l[w] !== void 0) {
      if (l[w] instanceof RegExp)
        return l[w].test(v);
      if (typeof l[w] == "function")
        return l[w](v);
    } else if (m && m.customFormats && typeof m.customFormats[w] == "function")
      return m.customFormats[w](v);
    return true;
  };
  var c = Xt.makeSuffix = function(v) {
    return v = v.toString(), !v.match(/[.\s\[\]]/) && !v.match(/^[\d]/) ? "." + v : v.match(/^\d+$/) ? "[" + v + "]" : "[" + JSON.stringify(v) + "]";
  };
  Xt.deepCompareStrict = function x(v, w) {
    if (typeof v != typeof w)
      return false;
    if (Array.isArray(v))
      return !Array.isArray(w) || v.length !== w.length ? false : v.every(function(S, O) {
        return x(v[O], w[O]);
      });
    if (typeof v == "object") {
      if (!v || !w)
        return v === w;
      var m = Object.keys(v), y = Object.keys(w);
      return m.length !== y.length ? false : m.every(function(S) {
        return x(v[S], w[S]);
      });
    }
    return v === w;
  };
  function u(x, v, w, m) {
    typeof w == "object" ? v[m] = f(x[m], w) : x.indexOf(w) === -1 && v.push(w);
  }
  function d(x, v, w) {
    v[w] = x[w];
  }
  function g(x, v, w, m) {
    typeof v[m] != "object" || !v[m] ? w[m] = v[m] : x[m] ? w[m] = f(x[m], v[m]) : w[m] = v[m];
  }
  function f(x, v) {
    var w = Array.isArray(v), m = w && [] || {};
    return w ? (x = x || [], m = m.concat(x), v.forEach(u.bind(null, x, m))) : (x && typeof x == "object" && Object.keys(x).forEach(d.bind(null, x, m)), Object.keys(v).forEach(g.bind(null, x, v, m))), m;
  }
  Xt.deepMerge = f, Xt.objectGetPath = function(v, w) {
    for (var m = w.split("/").slice(1), y; typeof (y = m.shift()) == "string"; ) {
      var S = decodeURIComponent(y.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(S in v)) return;
      v = v[S];
    }
    return v;
  };
  function h(x) {
    return "/" + encodeURIComponent(x).replace(/~/g, "%7E");
  }
  Xt.encodePath = function(v) {
    return v.map(h).join("");
  }, Xt.getDecimalPlaces = function(v) {
    var w = 0;
    if (isNaN(v)) return w;
    typeof v != "number" && (v = Number(v));
    var m = v.toString().split("e");
    if (m.length === 2) {
      if (m[1][0] !== "-")
        return w;
      w = Number(m[1].slice(1));
    }
    var y = m[0].split(".");
    return y.length === 2 && (w += y[1].length), w;
  }, Xt.isSchema = function(v) {
    return typeof v == "object" && v || typeof v == "boolean";
  };
  var b = Xt.resolveUrl = function(v, w) {
    const m = new URL(w, new URL(v, "resolve://"));
    if (m.protocol === "resolve:") {
      const { pathname: y, search: S, hash: O } = m;
      return y + S + O;
    }
    return m.toString();
  };
  return Xt;
}
var Zf, zy;
function OF() {
  if (zy) return Zf;
  zy = 1;
  var e6 = Ji(), t = e6.ValidatorResult, r = e6.SchemaError, n = {};
  n.ignoreProperties = {
    // informative properties
    id: true,
    default: true,
    description: true,
    title: true,
    // arguments to other properties
    additionalItems: true,
    then: true,
    else: true,
    // special-handled properties
    $schema: true,
    $ref: true,
    extends: true
  };
  var i = n.validators = {};
  i.type = function(f, h, b, x) {
    if (f === void 0)
      return null;
    var v = new t(f, h, b, x), w = Array.isArray(h.type) ? h.type : [h.type];
    if (!w.some(this.testType.bind(this, f, h, b, x))) {
      var m = w.map(function(y) {
        if (y) {
          var S = y.$id || y.id;
          return S ? "<" + S + ">" : y + "";
        }
      });
      v.addError({
        name: "type",
        argument: m,
        message: "is not of a type(s) " + m
      });
    }
    return v;
  };
  function o(g, f, h, b, x) {
    var v = f.throwError, w = f.throwAll;
    f.throwError = false, f.throwAll = false;
    var m = this.validateSchema(g, x, f, h);
    return f.throwError = v, f.throwAll = w, !m.valid && b instanceof Function && b(m), m.valid;
  }
  i.anyOf = function(f, h, b, x) {
    if (f === void 0)
      return null;
    var v = new t(f, h, b, x), w = new t(f, h, b, x);
    if (!Array.isArray(h.anyOf))
      throw new r("anyOf must be an array");
    if (!h.anyOf.some(
      o.bind(
        this,
        f,
        b,
        x,
        function(y) {
          w.importErrors(y);
        }
      )
    )) {
      var m = h.anyOf.map(function(y, S) {
        var O = y.$id || y.id;
        return O ? "<" + O + ">" : y.title && JSON.stringify(y.title) || y.$ref && "<" + y.$ref + ">" || "[subschema " + S + "]";
      });
      b.nestedErrors && v.importErrors(w), v.addError({
        name: "anyOf",
        argument: m,
        message: "is not any of " + m.join(",")
      });
    }
    return v;
  }, i.allOf = function(f, h, b, x) {
    if (f === void 0)
      return null;
    if (!Array.isArray(h.allOf))
      throw new r("allOf must be an array");
    var v = new t(f, h, b, x), w = this;
    return h.allOf.forEach(function(m, y) {
      var S = w.validateSchema(f, m, b, x);
      if (!S.valid) {
        var O = m.$id || m.id, E = O || m.title && JSON.stringify(m.title) || m.$ref && "<" + m.$ref + ">" || "[subschema " + y + "]";
        v.addError({
          name: "allOf",
          argument: { id: E, length: S.errors.length, valid: S },
          message: "does not match allOf schema " + E + " with " + S.errors.length + " error[s]:"
        }), v.importErrors(S);
      }
    }), v;
  }, i.oneOf = function(f, h, b, x) {
    if (f === void 0)
      return null;
    if (!Array.isArray(h.oneOf))
      throw new r("oneOf must be an array");
    var v = new t(f, h, b, x), w = new t(f, h, b, x), m = h.oneOf.filter(
      o.bind(
        this,
        f,
        b,
        x,
        function(S) {
          w.importErrors(S);
        }
      )
    ).length, y = h.oneOf.map(function(S, O) {
      var E = S.$id || S.id;
      return E || S.title && JSON.stringify(S.title) || S.$ref && "<" + S.$ref + ">" || "[subschema " + O + "]";
    });
    return m !== 1 && (b.nestedErrors && v.importErrors(w), v.addError({
      name: "oneOf",
      argument: y,
      message: "is not exactly one from " + y.join(",")
    })), v;
  }, i.if = function(f, h, b, x) {
    if (f === void 0) return null;
    if (!e6.isSchema(h.if)) throw new Error('Expected "if" keyword to be a schema');
    var v = o.call(this, f, b, x, null, h.if), w = new t(f, h, b, x), m;
    if (v) {
      if (h.then === void 0) return;
      if (!e6.isSchema(h.then)) throw new Error('Expected "then" keyword to be a schema');
      m = this.validateSchema(f, h.then, b, x.makeChild(h.then)), w.importErrors(m);
    } else {
      if (h.else === void 0) return;
      if (!e6.isSchema(h.else)) throw new Error('Expected "else" keyword to be a schema');
      m = this.validateSchema(f, h.else, b, x.makeChild(h.else)), w.importErrors(m);
    }
    return w;
  };
  function l(g, f) {
    if (Object.hasOwnProperty.call(g, f)) return g[f];
    if (f in g) {
      for (; g = Object.getPrototypeOf(g); )
        if (Object.propertyIsEnumerable.call(g, f)) return g[f];
    }
  }
  i.propertyNames = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x), w = h.propertyNames !== void 0 ? h.propertyNames : {};
      if (!e6.isSchema(w)) throw new r('Expected "propertyNames" to be a schema (object or boolean)');
      for (var m in f)
        if (l(f, m) !== void 0) {
          var y = this.validateSchema(m, w, b, x.makeChild(w));
          v.importErrors(y);
        }
      return v;
    }
  }, i.properties = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x), w = h.properties || {};
      for (var m in w) {
        var y = w[m];
        if (y !== void 0) {
          if (y === null)
            throw new r('Unexpected null, expected schema in "properties"');
          typeof b.preValidateProperty == "function" && b.preValidateProperty(f, m, y, b, x);
          var S = l(f, m), O = this.validateSchema(S, y, b, x.makeChild(y, m));
          O.instance !== v.instance[m] && (v.instance[m] = O.instance), v.importErrors(O);
        }
      }
      return v;
    }
  };
  function c(g, f, h, b, x, v) {
    if (this.types.object(g) && !(f.properties && f.properties[x] !== void 0))
      if (f.additionalProperties === false)
        v.addError({
          name: "additionalProperties",
          argument: x,
          message: "is not allowed to have the additional property " + JSON.stringify(x)
        });
      else {
        var w = f.additionalProperties || {};
        typeof h.preValidateProperty == "function" && h.preValidateProperty(g, x, w, h, b);
        var m = this.validateSchema(g[x], w, h, b.makeChild(w, x));
        m.instance !== v.instance[x] && (v.instance[x] = m.instance), v.importErrors(m);
      }
  }
  i.patternProperties = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x), w = h.patternProperties || {};
      for (var m in f) {
        var y = true;
        for (var S in w) {
          var O = w[S];
          if (O !== void 0) {
            if (O === null)
              throw new r('Unexpected null, expected schema in "patternProperties"');
            try {
              var E = new RegExp(S, "u");
            } catch {
              E = new RegExp(S);
            }
            if (E.test(m)) {
              y = false, typeof b.preValidateProperty == "function" && b.preValidateProperty(f, m, O, b, x);
              var A = this.validateSchema(f[m], O, b, x.makeChild(O, m));
              A.instance !== v.instance[m] && (v.instance[m] = A.instance), v.importErrors(A);
            }
          }
        }
        y && c.call(this, f, h, b, x, m, v);
      }
      return v;
    }
  }, i.additionalProperties = function(f, h, b, x) {
    if (this.types.object(f)) {
      if (h.patternProperties)
        return null;
      var v = new t(f, h, b, x);
      for (var w in f)
        c.call(this, f, h, b, x, w, v);
      return v;
    }
  }, i.minProperties = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x), w = Object.keys(f);
      return w.length >= h.minProperties || v.addError({
        name: "minProperties",
        argument: h.minProperties,
        message: "does not meet minimum property length of " + h.minProperties
      }), v;
    }
  }, i.maxProperties = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x), w = Object.keys(f);
      return w.length <= h.maxProperties || v.addError({
        name: "maxProperties",
        argument: h.maxProperties,
        message: "does not meet maximum property length of " + h.maxProperties
      }), v;
    }
  }, i.items = function(f, h, b, x) {
    var v = this;
    if (this.types.array(f) && h.items !== void 0) {
      var w = new t(f, h, b, x);
      return f.every(function(m, y) {
        if (Array.isArray(h.items))
          var S = h.items[y] === void 0 ? h.additionalItems : h.items[y];
        else
          var S = h.items;
        if (S === void 0)
          return true;
        if (S === false)
          return w.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var O = v.validateSchema(m, S, b, x.makeChild(S, y));
        return O.instance !== w.instance[y] && (w.instance[y] = O.instance), w.importErrors(O), true;
      }), w;
    }
  }, i.contains = function(f, h, b, x) {
    var v = this;
    if (this.types.array(f) && h.contains !== void 0) {
      if (!e6.isSchema(h.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var w = new t(f, h, b, x), m = f.some(function(y, S) {
        var O = v.validateSchema(y, h.contains, b, x.makeChild(h.contains, S));
        return O.errors.length === 0;
      });
      return m === false && w.addError({
        name: "contains",
        argument: h.contains,
        message: "must contain an item matching given schema"
      }), w;
    }
  }, i.minimum = function(f, h, b, x) {
    if (this.types.number(f)) {
      var v = new t(f, h, b, x);
      return h.exclusiveMinimum && h.exclusiveMinimum === true ? f > h.minimum || v.addError({
        name: "minimum",
        argument: h.minimum,
        message: "must be greater than " + h.minimum
      }) : f >= h.minimum || v.addError({
        name: "minimum",
        argument: h.minimum,
        message: "must be greater than or equal to " + h.minimum
      }), v;
    }
  }, i.maximum = function(f, h, b, x) {
    if (this.types.number(f)) {
      var v = new t(f, h, b, x);
      return h.exclusiveMaximum && h.exclusiveMaximum === true ? f < h.maximum || v.addError({
        name: "maximum",
        argument: h.maximum,
        message: "must be less than " + h.maximum
      }) : f <= h.maximum || v.addError({
        name: "maximum",
        argument: h.maximum,
        message: "must be less than or equal to " + h.maximum
      }), v;
    }
  }, i.exclusiveMinimum = function(f, h, b, x) {
    if (typeof h.exclusiveMinimum != "boolean" && this.types.number(f)) {
      var v = new t(f, h, b, x), w = f > h.exclusiveMinimum;
      return w || v.addError({
        name: "exclusiveMinimum",
        argument: h.exclusiveMinimum,
        message: "must be strictly greater than " + h.exclusiveMinimum
      }), v;
    }
  }, i.exclusiveMaximum = function(f, h, b, x) {
    if (typeof h.exclusiveMaximum != "boolean" && this.types.number(f)) {
      var v = new t(f, h, b, x), w = f < h.exclusiveMaximum;
      return w || v.addError({
        name: "exclusiveMaximum",
        argument: h.exclusiveMaximum,
        message: "must be strictly less than " + h.exclusiveMaximum
      }), v;
    }
  };
  var u = function(f, h, b, x, v, w) {
    if (this.types.number(f)) {
      var m = h[v];
      if (m == 0)
        throw new r(v + " cannot be zero");
      var y = new t(f, h, b, x), S = e6.getDecimalPlaces(f), O = e6.getDecimalPlaces(m), E = Math.max(S, O), A = Math.pow(10, E);
      return Math.round(f * A) % Math.round(m * A) !== 0 && y.addError({
        name: v,
        argument: m,
        message: w + JSON.stringify(m)
      }), y;
    }
  };
  i.multipleOf = function(f, h, b, x) {
    return u.call(this, f, h, b, x, "multipleOf", "is not a multiple of (divisible by) ");
  }, i.divisibleBy = function(f, h, b, x) {
    return u.call(this, f, h, b, x, "divisibleBy", "is not divisible by (multiple of) ");
  }, i.required = function(f, h, b, x) {
    var v = new t(f, h, b, x);
    return f === void 0 && h.required === true ? v.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(f) && Array.isArray(h.required) && h.required.forEach(function(w) {
      l(f, w) === void 0 && v.addError({
        name: "required",
        argument: w,
        message: "requires property " + JSON.stringify(w)
      });
    }), v;
  }, i.pattern = function(f, h, b, x) {
    if (this.types.string(f)) {
      var v = new t(f, h, b, x), w = h.pattern;
      try {
        var m = new RegExp(w, "u");
      } catch {
        m = new RegExp(w);
      }
      return f.match(m) || v.addError({
        name: "pattern",
        argument: h.pattern,
        message: "does not match pattern " + JSON.stringify(h.pattern.toString())
      }), v;
    }
  }, i.format = function(f, h, b, x) {
    if (f !== void 0) {
      var v = new t(f, h, b, x);
      return !v.disableFormat && !e6.isFormat(f, h.format, this) && v.addError({
        name: "format",
        argument: h.format,
        message: "does not conform to the " + JSON.stringify(h.format) + " format"
      }), v;
    }
  }, i.minLength = function(f, h, b, x) {
    if (this.types.string(f)) {
      var v = new t(f, h, b, x), w = f.match(/[\uDC00-\uDFFF]/g), m = f.length - (w ? w.length : 0);
      return m >= h.minLength || v.addError({
        name: "minLength",
        argument: h.minLength,
        message: "does not meet minimum length of " + h.minLength
      }), v;
    }
  }, i.maxLength = function(f, h, b, x) {
    if (this.types.string(f)) {
      var v = new t(f, h, b, x), w = f.match(/[\uDC00-\uDFFF]/g), m = f.length - (w ? w.length : 0);
      return m <= h.maxLength || v.addError({
        name: "maxLength",
        argument: h.maxLength,
        message: "does not meet maximum length of " + h.maxLength
      }), v;
    }
  }, i.minItems = function(f, h, b, x) {
    if (this.types.array(f)) {
      var v = new t(f, h, b, x);
      return f.length >= h.minItems || v.addError({
        name: "minItems",
        argument: h.minItems,
        message: "does not meet minimum length of " + h.minItems
      }), v;
    }
  }, i.maxItems = function(f, h, b, x) {
    if (this.types.array(f)) {
      var v = new t(f, h, b, x);
      return f.length <= h.maxItems || v.addError({
        name: "maxItems",
        argument: h.maxItems,
        message: "does not meet maximum length of " + h.maxItems
      }), v;
    }
  };
  function d(g, f, h) {
    var b, x = h.length;
    for (b = f + 1, x; b < x; b++)
      if (e6.deepCompareStrict(g, h[b]))
        return false;
    return true;
  }
  return i.uniqueItems = function(f, h, b, x) {
    if (h.uniqueItems === true && this.types.array(f)) {
      var v = new t(f, h, b, x);
      return f.every(d) || v.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), v;
    }
  }, i.dependencies = function(f, h, b, x) {
    if (this.types.object(f)) {
      var v = new t(f, h, b, x);
      for (var w in h.dependencies)
        if (f[w] !== void 0) {
          var m = h.dependencies[w], y = x.makeChild(m, w);
          if (typeof m == "string" && (m = [m]), Array.isArray(m))
            m.forEach(function(O) {
              f[O] === void 0 && v.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: y.propertyPath,
                message: "property " + O + " not found, required by " + y.propertyPath
              });
            });
          else {
            var S = this.validateSchema(f, m, b, y);
            v.instance !== S.instance && (v.instance = S.instance), S && S.errors.length && (v.addError({
              name: "dependencies",
              argument: y.propertyPath,
              message: "does not meet dependency required by " + y.propertyPath
            }), v.importErrors(S));
          }
        }
      return v;
    }
  }, i.enum = function(f, h, b, x) {
    if (f === void 0)
      return null;
    if (!Array.isArray(h.enum))
      throw new r("enum expects an array", h);
    var v = new t(f, h, b, x);
    return h.enum.some(e6.deepCompareStrict.bind(null, f)) || v.addError({
      name: "enum",
      argument: h.enum,
      message: "is not one of enum values: " + h.enum.map(String).join(",")
    }), v;
  }, i.const = function(f, h, b, x) {
    if (f === void 0)
      return null;
    var v = new t(f, h, b, x);
    return e6.deepCompareStrict(h.const, f) || v.addError({
      name: "const",
      argument: h.const,
      message: "does not exactly match expected constant: " + h.const
    }), v;
  }, i.not = i.disallow = function(f, h, b, x) {
    var v = this;
    if (f === void 0) return null;
    var w = new t(f, h, b, x), m = h.not || h.disallow;
    return m ? (Array.isArray(m) || (m = [m]), m.forEach(function(y) {
      if (v.testType(f, h, b, x, y)) {
        var S = y && (y.$id || y.id), O = S || y;
        w.addError({
          name: "not",
          argument: O,
          message: "is of prohibited type " + O
        });
      }
    }), w) : null;
  }, Zf = n, Zf;
}
var wc = {}, Ly;
function Ip() {
  if (Ly) return wc;
  Ly = 1;
  var e6 = Ji();
  wc.SchemaScanResult = t;
  function t(r, n) {
    this.id = r, this.ref = n;
  }
  return wc.scan = function(n, i) {
    function o(g, f) {
      if (!f || typeof f != "object") return;
      if (f.$ref) {
        let v = e6.resolveUrl(g, f.$ref);
        d[v] = d[v] ? d[v] + 1 : 0;
        return;
      }
      var h = f.$id || f.id;
      let b = e6.resolveUrl(g, h);
      var x = h ? b : g;
      if (x) {
        if (x.indexOf("#") < 0 && (x += "#"), u[x]) {
          if (!e6.deepCompareStrict(u[x], f))
            throw new Error("Schema <" + x + "> already exists with different definition");
          return u[x];
        }
        u[x] = f, x[x.length - 1] == "#" && (u[x.substring(0, x.length - 1)] = f);
      }
      l(x + "/items", Array.isArray(f.items) ? f.items : [f.items]), l(x + "/extends", Array.isArray(f.extends) ? f.extends : [f.extends]), o(x + "/additionalItems", f.additionalItems), c(x + "/properties", f.properties), o(x + "/additionalProperties", f.additionalProperties), c(x + "/definitions", f.definitions), c(x + "/patternProperties", f.patternProperties), c(x + "/dependencies", f.dependencies), l(x + "/disallow", f.disallow), l(x + "/allOf", f.allOf), l(x + "/anyOf", f.anyOf), l(x + "/oneOf", f.oneOf), o(x + "/not", f.not);
    }
    function l(g, f) {
      if (Array.isArray(f))
        for (var h = 0; h < f.length; h++)
          o(g + "/" + h, f[h]);
    }
    function c(g, f) {
      if (!(!f || typeof f != "object"))
        for (var h in f)
          o(g + "/" + h, f[h]);
    }
    var u = {}, d = {};
    return o(n, i), new t(u, d);
  }, wc;
}
var Kf, $y;
function kF() {
  if ($y) return Kf;
  $y = 1;
  var e6 = OF(), t = Ji(), r = Ip().scan, n = t.ValidatorResult, i = t.ValidatorResultError, o = t.SchemaError, l = t.SchemaContext, c = "/", u = function f() {
    this.customFormats = Object.create(f.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(g), this.attributes = Object.create(e6.validators);
  };
  u.prototype.customFormats = {}, u.prototype.schemas = null, u.prototype.types = null, u.prototype.attributes = null, u.prototype.unresolvedRefs = null, u.prototype.addSchema = function(h, b) {
    var x = this;
    if (!h)
      return null;
    var v = r(b || c, h), w = b || h.$id || h.id;
    for (var m in v.id)
      this.schemas[m] = v.id[m];
    for (var m in v.ref)
      this.unresolvedRefs.push(m);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(y) {
      return typeof x.schemas[y] > "u";
    }), this.schemas[w];
  }, u.prototype.addSubSchemaArray = function(h, b) {
    if (Array.isArray(b))
      for (var x = 0; x < b.length; x++)
        this.addSubSchema(h, b[x]);
  }, u.prototype.addSubSchemaObject = function(h, b) {
    if (!(!b || typeof b != "object"))
      for (var x in b)
        this.addSubSchema(h, b[x]);
  }, u.prototype.setSchemas = function(h) {
    this.schemas = h;
  }, u.prototype.getSchema = function(h) {
    return this.schemas[h];
  }, u.prototype.validate = function(h, b, x, v) {
    if (typeof b != "boolean" && typeof b != "object" || b === null)
      throw new o("Expected `schema` to be an object or boolean");
    x || (x = {});
    var w = b.$id || b.id;
    let m = t.resolveUrl(x.base, w || "");
    if (!v) {
      v = new l(b, x, [], m, Object.create(this.schemas)), v.schemas[m] || (v.schemas[m] = b);
      var y = r(m, b);
      for (var S in y.id) {
        var O = y.id[S];
        v.schemas[S] = O;
      }
    }
    if (x.required && h === void 0) {
      var E = new n(h, b, x, v);
      return E.addError("is required, but is undefined"), E;
    }
    var E = this.validateSchema(h, b, x, v);
    if (E) {
      if (x.throwAll && E.errors.length)
        throw new i(E);
    } else throw new Error("Result undefined");
    return E;
  };
  function d(f) {
    var h = typeof f == "string" ? f : f.$ref;
    return typeof h == "string" ? h : false;
  }
  u.prototype.validateSchema = function(h, b, x, v) {
    var w = new n(h, b, x, v);
    if (typeof b == "boolean")
      b === true ? b = {} : b === false && (b = { type: [] });
    else if (!b)
      throw new Error("schema is undefined");
    if (b.extends)
      if (Array.isArray(b.extends)) {
        var m = { schema: b, ctx: v };
        b.extends.forEach(this.schemaTraverser.bind(this, m)), b = m.schema, m.schema = null, m.ctx = null, m = null;
      } else
        b = t.deepMerge(b, this.superResolve(b.extends, v));
    var y = d(b);
    if (y) {
      var S = this.resolve(b, y, v), O = new l(S.subschema, x, v.path, S.switchSchema, v.schemas);
      return this.validateSchema(h, S.subschema, x, O);
    }
    var E = x && x.skipAttributes || [];
    for (var A in b)
      if (!e6.ignoreProperties[A] && E.indexOf(A) < 0) {
        var $ = null, T = this.attributes[A];
        if (T)
          $ = T.call(this, h, b, x, v);
        else if (x.allowUnknownAttributes === false)
          throw new o("Unsupported attribute: " + A, b);
        $ && w.importErrors($);
      }
    if (typeof x.rewrite == "function") {
      var D = x.rewrite.call(this, h, b, x, v);
      w.instance = D;
    }
    return w;
  }, u.prototype.schemaTraverser = function(h, b) {
    h.schema = t.deepMerge(h.schema, this.superResolve(b, h.ctx));
  }, u.prototype.superResolve = function(h, b) {
    var x = d(h);
    return x ? this.resolve(h, x, b).subschema : h;
  }, u.prototype.resolve = function(h, b, x) {
    if (b = x.resolve(b), x.schemas[b])
      return { subschema: x.schemas[b], switchSchema: b };
    let w = new URL(b, "thismessage::/").hash;
    var m = w && w.length && b.substr(0, b.length - w.length);
    if (!m || !x.schemas[m])
      throw new o("no such schema <" + b + ">", h);
    var y = t.objectGetPath(x.schemas[m], w.substr(1));
    if (y === void 0)
      throw new o("no such schema " + w + " located in <" + m + ">", h);
    return { subschema: y, switchSchema: b };
  }, u.prototype.testType = function(h, b, x, v, w) {
    if (w !== void 0) {
      if (w === null)
        throw new o('Unexpected null in "type" keyword');
      if (typeof this.types[w] == "function")
        return this.types[w].call(this, h);
      if (w && typeof w == "object") {
        var m = this.validateSchema(h, w, x, v);
        return m === void 0 || !(m && m.errors.length);
      }
      return true;
    }
  };
  var g = u.prototype.types = {};
  return g.string = function(h) {
    return typeof h == "string";
  }, g.number = function(h) {
    return typeof h == "number" && isFinite(h);
  }, g.integer = function(h) {
    return typeof h == "number" && h % 1 === 0;
  }, g.boolean = function(h) {
    return typeof h == "boolean";
  }, g.array = function(h) {
    return Array.isArray(h);
  }, g.null = function(h) {
    return h === null;
  }, g.date = function(h) {
    return h instanceof Date;
  }, g.any = function(h) {
    return true;
  }, g.object = function(h) {
    return h && typeof h == "object" && !Array.isArray(h) && !(h instanceof Date);
  }, Kf = u, Kf;
}
var Fy;
function AF() {
  if (Fy) return _n;
  Fy = 1;
  var e6 = _n.Validator = kF();
  return _n.ValidatorResult = Ji().ValidatorResult, _n.ValidatorResultError = Ji().ValidatorResultError, _n.ValidationError = Ji().ValidationError, _n.SchemaError = Ji().SchemaError, _n.SchemaScanResult = Ip().SchemaScanResult, _n.scan = Ip().scan, _n.validate = function(t, r, n) {
    var i = new e6();
    return i.validate(t, r, n);
  }, _n;
}
var TF = AF();
const au = "/$shared", RF = {
  "**/saved_conditions.json": {
    parser: "json",
    content: {
      conditions: []
    },
    schema: {
      type: "object",
      properties: {
        conditions: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["conditions"]
    }
  },
  "**/shared_datasources.json": {
    parser: "json",
    content: {},
    schema: {
      type: "object",
      additionalProperties: true,
      patternProperties: {
        "^.*$": {
          type: "array"
        }
      }
    }
  },
  "**/shared_css.json": {
    parser: "json",
    content: {
      classes: []
    },
    schema: {
      type: "object",
      properties: {
        classes: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["classes"]
    }
  },
  "**/shared_app_events.json": {
    parser: "json",
    content: []
  },
  "**/CustomComponents/manifest.json": {
    parser: "json",
    content: [],
    schema: {
      type: "array",
      items: {
        type: "object"
      }
    }
  },
  "**/crafted_components.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/HTTPHandlers.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/i18n.json": {
    parser: "json",
    content: {
      keys: {},
      userLang: {
        primary: "",
        supported: []
      }
    },
    schema: {
      type: "object",
      properties: {
        keys: {
          type: "object"
        },
        userLang: {
          type: "object",
          properties: {
            primary: { type: "string" },
            supported: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["primary", "supported"]
        }
      },
      required: ["keys", "userLang"]
    }
  },
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function AS(e6) {
  const t = Object.entries(RF).find(
    ([r]) => er(e6, r)
  );
  return t == null ? void 0 : t[1];
}
function Rh(e6) {
  var n;
  const t = (n = AS(e6)) == null ? void 0 : n.content;
  if (!t) return;
  const r = e6.replace(`${au}/`, "Shared/");
  RS({
    name: r,
    content: t,
    asText: typeof t == "string"
  });
}
async function f7() {
  const e6 = [
    "CustomComponents/manifest.json",
    "shared_app_events.json",
    "shared_css.json",
    "saved_conditions.json",
    "i18n.json"
  ];
  for (const t of e6)
    try {
      await st(`${au}/${t}?t=${Date.now()}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
    } catch (r) {
      TS(r) && Rh(`${au}/${t}`);
    }
}
function Ou({
  path: e6,
  createIfNotExists: t = false
}) {
  const r = `${au}/${e6}`;
  return st(`${r}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((n) => {
    const i = AS(e6);
    let o = n;
    if (!i) return o;
    if (typeof o == "string")
      try {
        switch (i.parser) {
          case "json":
            o = JSON.parse(o);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (i.schema && !new TF.Validator().validate(o, i.schema).valid)
      throw new Error("Invalid Schema");
    return o;
  }).catch((n) => {
    if (TS(n) && t) {
      const i = CF(n, e6);
      W1.next({
        message: i,
        kind: "warning"
      }), Rh(r);
    }
    throw n;
  });
}
function TS(e6) {
  var t;
  return ((t = e6 == null ? void 0 : e6.response) == null ? void 0 : t.status) === 404 || (e6 == null ? void 0 : e6.message) === "Invalid Schema" || (e6 == null ? void 0 : e6.message) === "Cannot parse" || (e6 == null ? void 0 : e6.name) === "SyntaxError";
}
function CF(e6, t) {
  var r;
  switch (true) {
    case ((e6 == null ? void 0 : e6.message) === "Cannot parse " || (e6 == null ? void 0 : e6.name) === "SyntaxError"):
      return `Cannot parse file '${t}', resetting...`;
    case (e6 == null ? void 0 : e6.message) === "Invalid Schema":
      return `File '${t}' is corrupt, resetting...`;
    case ((r = e6 == null ? void 0 : e6.response) == null ? void 0 : r.status) === 404:
      return `File '${t}' not found, creating...`;
    default:
      return e6 == null ? void 0 : e6.message;
  }
}
function p7(e6) {
  return st(Eu, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function h7(e6) {
  return st(Eu, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const IF = () => {
  const { host: e6, protocol: t } = window.location, r = t === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: dS.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${r ? "s" : ""}://${e6}/remoteDebugger`,
      lsp: `ws${r ? "s" : ""}://${e6}/LSP`
    },
    isRestActive: true
  };
};
async function g7() {
  const { hostname: e6, host: t, protocol: r } = window.location, n = r === "https:";
  try {
    const i = await st(Bt, {
      method: "POST",
      body: JSON.stringify({
        verb: uo.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), o = (() => {
      if (i.rendererPath)
        return i.rendererPath;
      const l = `http://${e6}:${i.webServerHTTPPort}`, c = `https://${e6}:${i.webServerHTTPSPort}`;
      return i.webServerHTTPPort && i.webServerHTTPSPort ? n ? c : l : i.webServerHTTPPort ? l : c;
    })();
    return {
      projectOpened: i.webServerHTTPSPort > 0 || i.webServerHTTPPort > 0,
      remoteDebuggerMode: i.remoteDebuggerMode,
      baseUrl: o,
      qodly: typeof i.qodly > "u" ? true : i.qodly,
      urls: {
        renderer: i.rendererPath || `${o}/$lib/renderer/`,
        debugger: `ws${n ? "s" : ""}://${t}/remoteDebugger`,
        lsp: `ws${n ? "s" : ""}://${t}/LSP`
      },
      isRestActive: i.isRESTActive
    };
  } catch (i) {
    return console.error(i), IF();
  }
}
async function PF(e6) {
  return await st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function v7(...e6) {
  return (await Promise.all(
    e6.map(
      (n) => PF({
        root: n,
        verb: uo.GET_FOLDER
      })
    )
  )).map(
    ({ children: n }) => n.map(({ name: i, date: o, type: l }) => ({
      name: i,
      type: l,
      date: o,
      path: `${l}/${i}`
    }))
  ).flat();
}
function m7(e6, t = {}) {
  const { sanitize: r = true } = t;
  return st(`/rest/$getWebForm/${e6}`, {
    method: "GET"
  }).then((n) => {
    if (!(n != null && n.components) || !r)
      return n;
    const i = /* @__PURE__ */ new Map();
    return {
      ...n,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: Ve.entries(n.components).map(([o, l]) => {
        const c = o, { resolvedName: u } = l.type;
        if (u === "WebformLoader") {
          const d = Ri.generate();
          i.set(o, d), o = d;
        }
        return [o, l, c];
      }).reduce((o, [l, c, u]) => {
        var d;
        return c.nodes && (c.nodes = c.nodes.map((g) => i.get(g) || g)), c.linkedNodes && (c.linkedNodes = Ve.entries(c.linkedNodes).reduce(
          (g, [f, h]) => ({
            ...g,
            [f]: i.get(h) || h
          }),
          {}
        )), (d = c.props) != null && d.events && (c.props.events = c.props.events.map(
          (g) => (g.type === "navigation" && g.loader && (g.loader = i.get(g.loader) || g.loader), g)
        )), {
          ...o,
          [l]: {
            ...c,
            props: {
              ...c.props,
              __originalID: u
            }
          }
        };
      }, {})
    };
  });
}
function b7(e6) {
  return st(Bt, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e6)
  }).then((t) => ({
    ...t,
    content: [We.METHOD, We.CLASS].includes(
      t.type
    ) ? Oh(t.content) : t.content
  }));
}
function y7(e6) {
  return e6.type === "folder" ? st(Eu, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function w7(e6) {
  return e6.type === "folder" ? (await st(Eu, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function x7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function S7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function _7(e6) {
  return (await st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function E7(...e6) {
  return await st(Bt, {
    method: "POST",
    body: JSON.stringify({
      verb: uo.GET_FILES_INFO,
      files: e6
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function O7(e6) {
  const t = await st("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e6
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return t.isLogged && t.success;
}
async function k7() {
  return await st(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function A7(e6) {
  try {
    const t = false ? "/i18n/languages.json" : `/$lib/${e6 ? "studio" : "renderer"}/i18n/languages.json`, n = await (await fetch(t)).text(), { supported: i } = JSON.parse(n);
    return i;
  } catch {
    return [];
  }
}
async function T7({
  name: e6,
  path: t = "",
  root: r = "root",
  asText: n = false
}) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: r,
      path: t,
      name: e6,
      asText: n
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function R7(e6 = {}) {
  try {
    return {
      ...await Ou({
        path: "shared_datasources.json",
        ...e6
      }),
      ...Rp
    };
  } catch {
    return {
      ...Rp
    };
  }
}
async function C7(e6 = {}) {
  try {
    return await Ou({
      path: "shared_app_events.json",
      ...e6
    });
  } catch {
    return [];
  }
}
async function I7(e6 = {}) {
  try {
    return await Ou({
      path: "shared_css.json",
      ...e6
    });
  } catch {
    return { classes: [] };
  }
}
async function P7(e6 = {}) {
  try {
    return await Ou({
      path: "saved_conditions.json",
      ...e6
    });
  } catch {
    return { conditions: [] };
  }
}
async function N7() {
  try {
    return await st(
      "/rest/$info/privileges",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch {
    return { privileges: [] };
  }
}
async function M7() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const NF = mS(), D7 = async (e6) => {
  const t = {
    verb: uo.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: Ve.omit(e6, Ve.keys(Rp))
  };
  return NF(
    () => st(Bt, {
      method: "POST",
      body: JSON.stringify(t),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  );
}, MF = mS(), z7 = async (e6) => {
  const t = {
    verb: uo.SET_FILE_CONTENT,
    asText: false,
    name: "shared_app_events.json",
    path: "",
    root: "shared",
    content: e6
  };
  return MF(
    () => st(Bt, {
      method: "POST",
      body: JSON.stringify(t),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
  );
}, RS = async (e6) => {
  const t = await st(Bt, {
    method: "POST",
    body: JSON.stringify({
      ...e6,
      verb: uo.SET_FILE_CONTENT,
      root: uS.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), r = vS(
    `${e6.path || "Sources"}/${e6.name}`
  );
  return {
    ...t,
    type: r,
    size: 0
  };
}, L7 = async (e6) => await RS({
  name: "crafted_components.json",
  path: In.WEBFORMS,
  content: e6
});
function $7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function F7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function H7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function j7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((t) => Array.isArray(t) ? t : {
    ...t,
    content: ["4dm", "4qm", "4qs"].includes(t.ext) ? Oh(t.content) : t.content
  }).catch((t) => {
    var r, n;
    throw ((n = (r = t.data) == null ? void 0 : r.__ERROR[0]) == null ? void 0 : n.errCode) === 1839 && Rh(e6.path), t;
  });
}
function B7(e6) {
  return st(Bt, {
    method: "POST",
    body: JSON.stringify(e6),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function DF(e6) {
  const t = new RegExp(/^\((.+)(?=\))/gi).exec(e6);
  return t !== null ? t[1] : "";
}
function zF(e6) {
  const t = new RegExp(/(->)(.*)/gi).exec(e6);
  if (t !== null)
    return t[0].replace("->", "");
  const r = /:([^)]*)$/.exec(e6);
  return r !== null ? `result : ${r[1].trim()}` : "";
}
function LF(e6) {
  const t = DF(e6).split(/[;,]/g).filter(Boolean).map((i) => {
    const o = i.split(":")[0].trim(), l = i.split(":")[1].trim();
    return {
      name: o,
      type: l
    };
  }), r = zF(e6), n = r ? {
    name: r.split(":")[0].trim(),
    type: r.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: t,
    result: n
  };
}
async function W7(e6, t) {
  const n = e6.split(".").pop();
  try {
    const i = await st(Bt, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: t,
        functionName: n
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    i.content = Oh(i.content);
    const { params: o, result: l } = LF(i.parameters);
    return {
      ...i,
      params: o,
      returns: l
    };
  } catch (i) {
    return console.error(i), {
      className: t,
      functionName: n,
      filePath: e6,
      content: "",
      params: []
    };
  }
}
var $F = /* @__PURE__ */ ((e6) => (e6.STUDIO_LOADED = "UA-1-0", e6.WELCOME_TOUR_INIT = "UA-1-3", e6.WELCOME_TOUR_END = "UA-1-4", e6))($F || {});
function V7(e6, t) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e6,
      ...t
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((r) => {
  });
}
function U7(e6) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e6]);
}
const q7 = {
  transparent: {
    backgroundColor: "transparent"
  },
  black: {
    backgroundColor: "#4a4a4a",
    color: "white",
    padding: "3px 5px",
    borderRadius: 5
  },
  grey: {
    backgroundColor: "#e8e8e8",
    color: "#262626",
    padding: "3px 5px",
    borderRadius: 5
  }
}, G7 = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
}, CS = __mf_9(void 0), Z7 = __mf_16(
  ({ children: e6, isInsideStudio: t, isStandaloneEditor: r }) => {
    const n = __mf_23(
      () => ({
        isInsideStudio: t,
        isStandaloneEditor: r
      }),
      [t, r]
    );
    return /* @__PURE__ */ __mf_1(CS.Provider, { value: n, children: e6 });
  }
);
function K7() {
  const e6 = __mf_18(CS);
  return e6 === void 0 ? { isInsideStudio: false, isStandaloneEditor: false } : e6;
}
const IS = __mf_9(null), FF = 5e3, HF = {
  top: "top-4",
  bottom: "bottom-4"
};
function Y7({ children: e6 }) {
  const [t, r] = __mf_26([]), n = __mf_25(0), i = __mf_17((c) => {
    r((u) => u.filter((d) => d.id !== c));
  }, []), o = __mf_17(
    (c, u) => {
      const d = ++n.current, g = {
        id: d,
        containerStyle: u == null ? void 0 : u.containerStyle,
        duration: c.duration ?? FF,
        position: c.position ?? "bottom",
        render: c.render
      };
      return r((f) => [...f, g]), d;
    },
    []
  );
  __mf_20(() => {
    const c = W1.subscribe((u) => {
      o({
        position: "bottom",
        render: ({ onClose: d }) => /* @__PURE__ */ __mf_1(AM, { ...u, onClose: d })
      });
    });
    return () => {
      c.unsubscribe();
    };
  }, [o]);
  const l = __mf_23(
    () => ({
      pushToast: o,
      removeToast: i
    }),
    [o, i]
  );
  return /* @__PURE__ */ __mf_2(IS.Provider, { value: l, children: [
    e6,
    typeof document < "u" ? __mf_1$1(
      /* @__PURE__ */ __mf_1(__mf_0, { children: ["top", "bottom"].map((c) => {
        const u = t.filter(
          (d) => d.position === c
        );
        return u.length === 0 ? null : /* @__PURE__ */ __mf_1(
          "div",
          {
            className: `pointer-events-none fixed inset-x-4 z-2147483647 flex flex-col items-center gap-3 ${HF[c]}`,
            children: u.map((d) => /* @__PURE__ */ __mf_1(
              jF,
              {
                toast: d,
                onClose: () => i(d.id)
              },
              d.id
            ))
          },
          c
        );
      }) }),
      document.body
    ) : null
  ] });
}
function jF({
  toast: e6,
  onClose: t
}) {
  return __mf_20(() => {
    if (e6.duration === null) return;
    const r = window.setTimeout(t, e6.duration);
    return () => window.clearTimeout(r);
  }, [t, e6.duration]), /* @__PURE__ */ __mf_1("div", { className: "pointer-events-auto", style: e6.containerStyle, children: e6.render({ onClose: t }) });
}
function X7(e6) {
  const t = __mf_18(IS);
  if (!t)
    throw new Error("useToast must be used within a ToastProvider");
  return __mf_17(
    (r) => t.pushToast(r, e6),
    [t, e6]
  );
}

export { Bt as API_PREFIX, n6 as AppLoader, q7 as DATASOURCE_THEMES, S4 as DatasourcesActions, O4 as DebuggerActions, uo as DesignerRequestVerb, GF as Dialog, wN as DialogBody, $F as EActivity, hF as ECustomStylePropsViewMode, G7 as EDITOR, SS as EDisplayMode, vF as EIDENTIFIERS, ot as EPermissionType, mF as ERROR_CODES, fF as ESetting, _t as ESubPermissionType, pF as ETooltipBehavior, dF as EWebFormStyleClassScope, Eu as EXT_API_PREFIX, We as FileFolderType, In as FolderRootPath, uS as FolderRootType, d6 as Grid, f6 as GridItem, My as HTTPError, hS as HTTP_HANDLERS_TAB_PATH, ou as IPreemptive, J$ as IPublished, yS as IPublishedRestScope, x6 as IdentityProvider, DL as Image, yf as Incase, WM as IndentLines, l6 as InvalidJsonError, gS as LOCALIZATION_TAB_PATH, K$ as LOCATION_DATASOURCE_ID, eL as LogoSVG, E4 as LspActions, V1 as MAX_FILE_NAME_LENGTH, D$ as MODEL_TAB_PATH, o6 as Modal, ua as ModalCloseReason, wa as ModalColor, ny as ModalIcons, T1 as ModalType, $$ as Mutex, U1 as NameError, yN as Overlay, Xn as PANEL_COLLAPSED_HEIGHT, PL as PANEL_INITIAL_OPEN_RATIO, NL as PANEL_MAX_RATIO, wS as PERMISSIONS, a6 as Panel, r6 as PopperTooltip, WR as Portal, w9 as PublishOptions, yc as QODLY_NAMESPACE, fS as ROLES_TAB_PATH, bF as ROOT_WEBFORM_STATE, dS as RemoteDebuggerMode, pS as SETTINGS_TAB_PATH, au as SHARED_API_PREFIX, Rp as SHARED_USER_NAMESPACE, c6 as SearchInput, p6 as SimpleGrid, gF as SourceCodeDescriptor, Z7 as StudioContextProvider, VM as Switcher, G9 as THEME_CLASSES, X$ as TITLE_DATASOURCE_ID, _4 as TabEventsActions, oz as Tip, YF as TipsProvider, AM as Toast, Y7 as ToastProvider, u6 as ToolbarIcon, t6 as Tooltip, ZF as Tree, TM as TreeIcon, kx as TreeNode, Y$ as USER_LANGUAGE_DATASOURCE_ID, q9 as WT_FLAGS_KEYS, x4 as WebformActions, nu as WebformEventsActions, s6 as ZoomComponent, IL as ZoomLevel, h9 as _isArrayDatasource, g9 as _isObjectDatasource, oF as actionsToPrivs, S9 as addAttributesToContent, x7 as addFolder, o7 as addItem, D9 as addPermission, A9 as addPrivilegeIn, O9 as allowed, H$ as by, X6 as byId, J6 as byPath, SF as callAll, Q9 as callAllHandlers, d7 as callServerSideParser, p7 as checkUpdates, Cp as children, $7 as createFolder, R9 as createPrivilege, j9 as createRole, e7 as dataAttr, M6 as datasourcesSubject, $6 as debuggerSubject, wF as deepDeleteCondition, xF as deepSanitizeCondition, w7 as dropFile, _7 as dropFolder, z$ as editors, Q6 as exists, G6 as extractWebformName, uF as filterBySeriousError, t7 as focus, U9 as formatErrorsAsBulletToast, Ty as generateUUID, g7 as getAppSettings, e9 as getCashedPrefrences, k7 as getCatalog, t9 as getDatasourceId, IF as getDefaultAppSettings, Y9 as getDefaultContent, aF as getDictByName, V9 as getDisplayableFeedbackErrors, q6 as getEditors, cF as getErrorListFromPayload, b7 as getFile, T7 as getFileContent, L$ as getFileExtentionFromType, J9 as getFilePath, U6 as getFilenameAndTypeFromPath, Z6 as getFilenameFromType, E7 as getFilesInfo, PF as getFolder, v7 as getFolders, W7 as getFunctionContent, M9 as getGraphData, lF as getInheritedResources, M7 as getMonacoTheme, j7 as getNodeInfo, r9 as getNormalizedDataType, Pi as getPrivilegeById, H9 as getPromotions, xS as getResourceFromType, P7 as getSavedConditions, C7 as getSharedAppEvents, I7 as getSharedCSS, R7 as getSharedDatasources, Ou as getSharedResource, EF as getStoredAppearance, A7 as getSupportedLanguages, vS as getTypeFromExtension, N7 as getUserPrivileges, m7 as getWebForm, eF as hasAttributesString, st as http, H6 as i18nSubject, c7 as initStudioAppearance, f7 as initializeDefaultProjectFiles, h7 as installUpdates, q$ as isArrayDatasource, Z9 as isBaseState, s9 as isDataClassMethod, o9 as isDataStoreMethod, v9 as isDateDatasource, f9 as isEntity, c9 as isEntityDatasource, a9 as isEntityMethod, p9 as isEntitySelection, u9 as isEntitySelectionDatasource, l9 as isEntitySelectionMethod, s7 as isInputEvent, n9 as isObjectAttribute, G$ as isObjectDatasource, i9 as isRelatedAttribute, V$ as isRelatedEntitiesAttribute, U$ as isRelatedEntityAttribute, m9 as isSameNamespace, Z$ as isScalarDatasource, B$ as isSimpleAttribute, d9 as isSimpleDatasource, b9 as loadDS, y9 as loadI18n, j$ as localeCompare, V7 as log, O7 as login, L6 as lspSubject, r7 as mergeRefs, H7 as moveItem, K6 as outBy, Y6 as outById, Th as parents, x9 as parseAttributes, _9 as parseCatalog, I9 as populateShallow, mS as queue, _S as refactorConditions, K9 as refactorWebform, tF as removeAttributesString, F7 as removeItem, L9 as removeMultiplePermissions, z9 as removePermission, k9 as removePrivilege, T9 as removePrivilegeFrom, B9 as removeRole, y7 as renameFile, S7 as renameFolder, C9 as renamePrivilege, $9 as resetResources, l7 as resolveMonacoTheme, N9 as rolesToAPI, Oh as sanitizeContent, E9 as sanitizeNameCY, sF as sanitizePermissions, nF as sanitizePrivileges, P9 as sanitizeRoles, B7 as saveContent, W9 as saveRole, X9 as selectorEqualityFn, L7 as setCraftedComponents, RS as setFileContent, z7 as setSharedAppEvents, D7 as setSharedSources, Ny as setStudioAppearance, iF as sortPrivileges, bS as splitDatasourceID, a7 as stopEvent, Q$ as stringifyAttributes, z6 as tabEventsSubject, F6 as tasksManagerSubject, W1 as toastSubject, F9 as togglePermission, U7 as trackEvent, u7 as transformDates, Rh as tryCreateSharedResource, gn as uniquePush, yF as updateDsCondition, T6 as useBoolean, R6 as useCallbackRef, l4 as useControllableProp, C6 as useControllableState, h6 as useDidMountEffect, E6 as useDoubleClick, A6 as useDsChangeRenderer, k6 as useDsRendererAdapter, O6 as useEnhancedState, w6 as useFeatureFlags, N6 as useFormControlProps, y6 as useForwardedRef, g6 as useHotkeys, S6 as useIdentity, v6 as useOutsideClick, m6 as usePrevious, I6 as useSafeLayoutEffect, _6 as useStateObject, b6 as useStateRef, K7 as useStudioContext, nz as useTip, X7 as useToast, P6 as useUpdateEffect, Eh as validateName, j6 as validateServerSide, B6 as validateValue, i7 as visuallyHiddenStyle, n7 as warn, _p as webformEventsSubject, D6 as webformSubject };
