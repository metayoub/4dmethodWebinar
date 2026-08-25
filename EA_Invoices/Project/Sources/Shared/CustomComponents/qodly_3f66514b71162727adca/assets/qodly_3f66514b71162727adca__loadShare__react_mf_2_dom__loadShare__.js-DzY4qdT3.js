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

    
    const res = initPromise.then(runtime => runtime.loadShare("react-dom", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
const Oi = exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __mf_0, createPortal: __mf_1, findDOMNode: __mf_2, flushSync: __mf_3, hydrate: __mf_4, render: __mf_5, unmountComponentAtNode: __mf_6, unstable_batchedUpdates: __mf_7, unstable_createPortal: __mf_8, unstable_renderSubtreeIntoContainer: __mf_9, version: __mf_10 } = exportModule;

export { Oi as O, __mf_1 as _, __mf_3 as a, __mf_5 as b, __mf_7 as c, __mf_2 as d };
