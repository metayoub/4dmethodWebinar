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

    
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/craftjs-core", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^0.2.26"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { NodeSelectorType: __mf_0, ROOT_NODE: __mf_1, ActionMethodsWithConfig: __mf_2, Canvas: __mf_3, CoreEventHandlers: __mf_4, DefaultEventHandlers: __mf_5, DerivedCoreEventHandlers: __mf_6, Editor: __mf_7, Element: __mf_8, Events: __mf_9, Frame: __mf_10, NodeElement: __mf_11, NodeHelpers: __mf_12, NodeProvider: __mf_13, Positioner: __mf_14, QueryMethods: __mf_15, connectEditor: __mf_16, connectNode: __mf_17, createShadow: __mf_18, createTestNodes: __mf_19, createTestState: __mf_20, defaultElementProps: __mf_21, deprecateCanvasComponent: __mf_22, editorInitialState: __mf_23, elementPropToNodeData: __mf_24, expectEditorState: __mf_25, getComponentName: __mf_26, resolveComponent: __mf_27, serializeNode: __mf_28, useEditor: __mf_29, useEditorStore: __mf_30, useEventHandler: __mf_31, useNode: __mf_32 } = exportModule;

export { __mf_29 as _, __mf_31 as a, __mf_1 as b, __mf_6 as c, __mf_32 as d, __mf_10 as e, __mf_7 as f, __mf_8 as g, __mf_27 as h };
