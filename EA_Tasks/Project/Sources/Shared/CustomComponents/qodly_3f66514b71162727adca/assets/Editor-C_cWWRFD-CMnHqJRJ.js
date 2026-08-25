import { _ as __mf_1, a as __mf_2, b as __mf_0 } from './qodly_3f66514b71162727adca__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CEn9rQZz.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { aJ as __mf_73, i as __mf_20$1, aK as __mf_41 } from './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.js-CJNGhNoJ.js';
import { r as rk, o as oGa, I as II, B as BI, k as kr, G as GM, d as dD, A as Af, O as Of, R as Rf, x as xn, p as p_, X as X7a, s as sGa, E as EGt, _ as _oe, g as gGa, q as q$, a as qr, w as wM, b as wf, n as nI, D as Dt, $ as $M, j as jN, F as FN } from './index.es-pvHAhbKO.js';
import { b as __mf_20 } from './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js-xqf2XqU7.js';
import './qodly_3f66514b71162727adca__loadShare__react_mf_2_dom__loadShare__.js-DzY4qdT3.js';
import './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.js-BweE8nCT.js';
import './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_layers__loadShare__.js-C9y67QUw.js';
import './preload-helper-CqoC6PUU.js';
import './emotion-react.browser.esm-r2vS8aIH.js';
import './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js_commonjs-proxy-CQCMyYyT.js';
import './tiny-invariant-w-EUxzzv.js';

const J = () => {
  const t = kr($M), s = BI();
  return /* @__PURE__ */ __mf_1(__mf_0, { children: t.map((o, n) => /* @__PURE__ */ __mf_1(
    __mf_41,
    {
      hasOverlay: n === 0,
      ...o,
      onClose: (r) => s(FN(r)),
      onEdit: (r) => s(jN(r))
    },
    o.id
  )) });
};
function K(t) {
  const s = BI(), o = kr(qr(t.path)), n = kr(wM);
  return __mf_20(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(wf(o)), n !== t.path && s(nI(t.path))) : s(
      Dt({
        date: t.date,
        view: {
          panel: {
            isOpen: false,
            type: "",
            current: ""
          }
        },
        flags: { enabled: true },
        name: t.name,
        path: t.path,
        type: __mf_20$1.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function Q({ webform: t, onChange: s, userComponents: o }) {
  const { inited: n, lastError: r, reload: S } = useLSP(), i = BI(), c = K(t), d = kr(
    GM("studio.tips", "studio.tipsBaseUrl")
  ), f = d["studio.tips"], m = d["studio.tipsBaseUrl"];
  return __mf_20(() => {
    i(dD()), i(Af()), i(Of()), i(Rf()), i(xn()), i(p_());
  }, []), /* @__PURE__ */ __mf_2("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ __mf_1(X7a, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ __mf_1(__mf_73, { enabled: f, baseUrl: m, children: /* @__PURE__ */ __mf_1(sGa, { children: /* @__PURE__ */ __mf_1(EGt, { children: /* @__PURE__ */ __mf_2(_oe, { children: [
      /* @__PURE__ */ __mf_1(
        gGa,
        {
          useDispatch: BI,
          useSelector: kr,
          store: II(),
          lspProps: {
            inited: n,
            lastError: r,
            reload: S
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ __mf_1(q$.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ __mf_1(J, {})
  ] });
}
const nt = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ __mf_1(rk, { store: II(), children: /* @__PURE__ */ __mf_1(oGa, { children: /* @__PURE__ */ __mf_1(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ __mf_1(Q, { ...t })
    }
  ) }) });
};

export { nt as default };
