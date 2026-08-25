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

    
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/webform-editor", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^1.5.15"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { AIModelProvider: __mf_0, BASIC_SETTINGS: __mf_1, BuildResolver: __mf_2, CONTROLLED_MAP: __mf_3, Checkbox: __mf_4, Collapse: __mf_5, CustomPicker: __mf_6, DEFAULT_DATE_FORMAT: __mf_7, DEFAULT_ITERATOR: __mf_8, DEFAULT_NAMESPACE: __mf_9, DEFAULT_SETTINGS: __mf_10, DEFAULT_WEEK_START_DAY: __mf_11, DataLoader: __mf_12, DnDContext: __mf_13, DndScope: __mf_14, EComponentCategory: __mf_15, EComponentKind: __mf_16, ESetting: __mf_17, ETextFieldModifier: __mf_18, EntityActions: __mf_19, EntityProvider: __mf_20, ErrorBoundary: __mf_21, ExcludeMap: __mf_22, FloatingTooltip: __mf_23, I18N_ACTIONS: __mf_24, I18N_CONSTANT: __mf_25, I18nProvider: __mf_26, IteratorDatasource: __mf_27, IteratorProvider: __mf_28, LocalizationProvider: __mf_29, MainFrame: __mf_30, MinifiedDs: __mf_31, NavigationProvider: __mf_32, NodeError: __mf_33, PANEL_EXPANDED_HEIGHT: __mf_34, PANEL_INITIAL_HEIGHT: __mf_35, Panel: __mf_36, PopoverBody: __mf_37, PopoverButton: __mf_38, PopoverCombobox: __mf_39, PopoverField: __mf_40, PopoverIcon: __mf_41, PopoverInput: __mf_42, PopoverSelect: __mf_43, PopoverTooltip: __mf_44, PopperTooltip: __mf_45, Portal: __mf_46, PreviewModeActions: __mf_47, PreviewModeSubject: __mf_48, RadioItem: __mf_49, RenderResolver: __mf_50, RendererStyleSheets: __mf_51, RendererWebform: __mf_52, Resizer: __mf_53, SCALAR_TYPES: __mf_54, SearchInput: __mf_55, Settings: __mf_56, StatesProvider: __mf_57, StudioContextProvider: __mf_58, StudioStyleSheets: __mf_59, StyleSheetsProvider: __mf_60, Switch: __mf_61, ToolbarIcon: __mf_62, Tooltip: __mf_63, TruncatedText: __mf_64, UserPrivilegesProvider: __mf_65, WEEEK_DAYS: __mf_66, Webform: __mf_67, WebformEditorStandalone: __mf_68, WebformEventsActions: __mf_69, WebformLoaderActions: __mf_70, WebformPathProvider: __mf_71, WebformStateActions: __mf_72, WebformsProvider: __mf_73, addPrefix: __mf_74, allOptions: __mf_75, arrayToTree: __mf_76, attachDatasourceEvents: __mf_77, buildComponentsDataSources: __mf_78, buildDataSources: __mf_79, buildStatesConditionsDataSources: __mf_80, capitalizeFirstLetter: __mf_81, chakraTheme: __mf_82, computeWebform: __mf_83, contextualPanelSubject: __mf_84, controller: __mf_85, datasourceActionsIcons: __mf_86, datasourceQuerySelector: __mf_87, dateTo4DFormat: __mf_88, dedup: __mf_89, dialogSubject: __mf_90, dndObservable: __mf_91, entitySubject: __mf_92, filterSources: __mf_93, findAndReplace: __mf_94, formatValue: __mf_95, getAttributeExcludeType: __mf_96, getComponentInfo: __mf_97, getDataTransferSourceID: __mf_98, getDataTransferSourceType: __mf_99, getDatasourceExcludeType: __mf_100, getDatasourceID: __mf_101, getDatasourceIcon: __mf_102, getElementDimensions: __mf_103, getIterableNodes: __mf_104, getMatchingParentEntity: __mf_105, getStaticFeaturesExperimentalFlag: __mf_106, getStyleSheet: __mf_107, getWeekDayIndex: __mf_108, globalScopePrefix: __mf_109, i18nSubject: __mf_110, initialState: __mf_111, initializeDataSources: __mf_112, isAttributePayload: __mf_113, isDataSourceDataTransfer: __mf_114, isDatasourcePayload: __mf_115, isIterableNode: __mf_116, isLocalArrayDataSource: __mf_117, isPercentage: __mf_118, isStyleDataTransfer: __mf_119, isT4DComponent: __mf_120, load: __mf_121, memoizedDebounce: __mf_122, methodSelectorStyles: __mf_123, os: __mf_124, parseIterator: __mf_125, parseRules: __mf_126, parseValue: __mf_127, parseWebForm: __mf_128, parseWebformName: __mf_129, percentToPx: __mf_130, pxToPercent: __mf_131, rebuildDataSources: __mf_132, renderComponents: __mf_133, reorder: __mf_134, safeParseJSON: __mf_135, sanitizeDoc: __mf_136, sanitizePrefix: __mf_137, sanitizeStyle: __mf_138, searchComponents: __mf_139, selectNodeId: __mf_140, selectReadOnly: __mf_141, selectResolver: __mf_142, sortByDependency: __mf_143, splitDatasourceID: __mf_144, splitDatasourceStr: __mf_145, ssRefSubject: __mf_146, takeOne: __mf_147, unhideComponents: __mf_148, unsubscribeFromDatasource: __mf_149, updateEntity: __mf_150, useAIModels: __mf_151, useCurrentIterableParentNode: __mf_152, useCurrentWebformState: __mf_153, useDataLoader: __mf_154, useDatasourceAdapter: __mf_155, useDatasourceSub: __mf_156, useDnd: __mf_157, useDsChangeHandler: __mf_158, useDsChangeRenderer: __mf_159, useEnhancedEditor: __mf_160, useEnhancedNode: __mf_161, useEntity: __mf_162, useEntityIterator: __mf_163, useEntityUpdate: __mf_164, useForceUpdate: __mf_165, useHeight: __mf_166, useI18n: __mf_167, useIsMounted: __mf_168, useIterableParentNode: __mf_169, useIterableParentNodeGetter: __mf_170, useIterator: __mf_171, useIteratorDatasource: __mf_172, useIteratorDatasourceGetter: __mf_173, useLayout: __mf_174, useLocalization: __mf_175, useNavigation: __mf_176, useParentNodeProps: __mf_177, useParentWebformPath: __mf_178, usePrivilegesList: __mf_179, useRenderer: __mf_180, useServerSideRefHandler: __mf_181, useSources: __mf_182, useStudioContext: __mf_183, useStudioPanel: __mf_184, useStyleSheet: __mf_185, useStyleSheets: __mf_186, useStyleboxSize: __mf_187, useStylesParser: __mf_188, useUserPrivileges: __mf_189, useWebformPath: __mf_190, useWebformStates: __mf_191, useWebforms: __mf_192, useWelcomeTourFlags: __mf_193, validate: __mf_194, webformEditorSubject: __mf_195, webformEventsSubject: __mf_196, webformLoaderSubject: __mf_197, webformStatesSubject: __mf_198 } = exportModule;

export { __mf_68 as _, __mf_17 as a, __mf_121 as b, __mf_10 as c, __mf_1 as d, __mf_56 as e, __mf_16 as f, __mf_144 as g, __mf_161 as h, __mf_180 as i, __mf_182 as j, __mf_160 as k };
