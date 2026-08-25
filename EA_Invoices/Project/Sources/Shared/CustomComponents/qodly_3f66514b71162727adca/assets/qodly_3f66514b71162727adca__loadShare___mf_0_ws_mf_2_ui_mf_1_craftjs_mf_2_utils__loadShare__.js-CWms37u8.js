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

    
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/craftjs-utils", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^0.2.3"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { EventHandlerUpdates: __mf_0, DEPRECATED_ROOT_NODE: __mf_1, DerivedEventHandlers: __mf_2, ERROR_CANNOT_DRAG: __mf_3, ERROR_DELETE_TOP_LEVEL_NODE: __mf_4, ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER: __mf_5, ERROR_DUPLICATE_NODEID: __mf_6, ERROR_INFINITE_CANVAS: __mf_7, ERROR_INVALID_NODEID: __mf_8, ERROR_INVALID_NODE_ID: __mf_9, ERROR_MISSING_PLACEHOLDER_PLACEMENT: __mf_10, ERROR_MOVE_CANNOT_DROP: __mf_11, ERROR_MOVE_INCOMING_PARENT: __mf_12, ERROR_MOVE_NONCANVAS_CHILD: __mf_13, ERROR_MOVE_OUTGOING_PARENT: __mf_14, ERROR_MOVE_ROOT_NODE: __mf_15, ERROR_MOVE_TOP_LEVEL_NODE: __mf_16, ERROR_MOVE_TO_DESCENDANT: __mf_17, ERROR_MOVE_TO_NONCANVAS_PARENT: __mf_18, ERROR_NOPARENT: __mf_19, ERROR_NOT_IN_RESOLVER: __mf_20, ERROR_RESOLVER_NOT_AN_OBJECT: __mf_21, ERROR_TOP_LEVEL_ELEMENT_NO_ID: __mf_22, ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT: __mf_23, ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT: __mf_24, EventHandlers: __mf_25, HISTORY_ACTIONS: __mf_26, History: __mf_27, ROOT_NODE: __mf_28, RenderIndicator: __mf_29, cloneWithRef: __mf_30, createQuery: __mf_31, deprecationWarning: __mf_32, getDOMInfo: __mf_33, getRandomId: __mf_34, isChromium: __mf_35, isClientSide: __mf_36, isLinux: __mf_37, useCollector: __mf_38, useEffectOnce: __mf_39, useMethods: __mf_40, wrapConnectorHooks: __mf_41, wrapHookToRecognizeElement: __mf_42 } = exportModule;

export { __mf_25 as _, __mf_28 as a, __mf_2 as b, __mf_39 as c, __mf_32 as d, __mf_18 as e, __mf_12 as f, __mf_11 as g, __mf_16 as h, __mf_17 as i, __mf_13 as j, __mf_6 as k, __mf_14 as l, __mf_3 as m, __mf_33 as n, __mf_5 as o, __mf_20 as p, __mf_40 as q, __mf_1 as r, __mf_26 as s, __mf_38 as t, __mf_41 as u, __mf_29 as v, __mf_34 as w, __mf_35 as x, __mf_37 as y };
