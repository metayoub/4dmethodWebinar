function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

const __mfPromiseGlobalKey = "__mf_init____mf__virtual/qodly_3f66514b71162727adca__mf_v__runtimeInit__mf_v__.js__";
let __mfPromiseState = globalThis[__mfPromiseGlobalKey];
if (!__mfPromiseState) {
  let initResolve, initReject;
  const initPromise = new Promise((re, rj) => {
    initResolve = re;
    initReject = rj;
  });
  __mfPromiseState = globalThis[__mfPromiseGlobalKey] = {
    initPromise,
    initResolve,
    initReject,
  };
  if (typeof window === 'undefined') {
    initResolve({
      loadRemote: function() { return Promise.resolve(undefined); },
      loadShare: function() { return Promise.resolve(undefined); },
    });
  }
}
const initPromise = __mfPromiseState.initPromise;

    
    const res = initPromise.then(runtime => runtime.loadShare("react", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
    const __moduleExports = exportModule;
const R = exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { Fragment: __mf_0, StrictMode: __mf_1, Profiler: __mf_2, Suspense: __mf_3, Children: __mf_4, Component: __mf_5, PureComponent: __mf_6, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __mf_7, cloneElement: __mf_8, createContext: __mf_9, createElement: __mf_10, createFactory: __mf_11, createRef: __mf_12, forwardRef: __mf_13, isValidElement: __mf_14, lazy: __mf_15, memo: __mf_16, useCallback: __mf_17, useContext: __mf_18, useDebugValue: __mf_19, useEffect: __mf_20, useImperativeHandle: __mf_21, useLayoutEffect: __mf_22, useMemo: __mf_23, useReducer: __mf_24, useRef: __mf_25, useState: __mf_26, version: __mf_27 } = exportModule;

const le = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  Children: __mf_4,
  Component: __mf_5,
  Fragment: __mf_0,
  Profiler: __mf_2,
  PureComponent: __mf_6,
  StrictMode: __mf_1,
  Suspense: __mf_3,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __mf_7,
  cloneElement: __mf_8,
  createContext: __mf_9,
  createElement: __mf_10,
  createFactory: __mf_11,
  createRef: __mf_12,
  default: R,
  forwardRef: __mf_13,
  isValidElement: __mf_14,
  lazy: __mf_15,
  memo: __mf_16,
  useCallback: __mf_17,
  useContext: __mf_18,
  useDebugValue: __mf_19,
  useEffect: __mf_20,
  useImperativeHandle: __mf_21,
  useLayoutEffect: __mf_22,
  useMemo: __mf_23,
  useReducer: __mf_24,
  useRef: __mf_25,
  useState: __mf_26,
  version: __mf_27
}, [__moduleExports]);

export { R, __mf_26 as _, __mf_23 as a, __mf_20 as b, __mf_17 as c, __mf_16 as d, __mf_25 as e, __mf_18 as f, __mf_0 as g, __mf_9 as h, __mf_4 as i, __mf_10 as j, __mf_22 as k, le as l, __mf_8 as m, __mf_14 as n, __mf_13 as o, __mf_21 as p, __mf_6 as q, __mf_24 as r, __moduleExports as s, __mf_5 as t, __mf_19 as u, __mf_3 as v, __mf_15 as w, __mf_12 as x, __mf_7 as y };
