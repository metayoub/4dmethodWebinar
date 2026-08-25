import { _ as __vitePreload } from './assets/preload-helper-CqoC6PUU.js';

var dist$3 = {};

var utils$2 = {};

var dist$2 = {};

var logger$3 = {};

var dist$1 = {};

var constant$1 = {};

//#region src/constant.ts
const FederationModuleManifest = "federation-manifest.json";
const MANIFEST_EXT = ".json";
const BROWSER_LOG_KEY = "FEDERATION_DEBUG";
const NameTransformSymbol = {
	AT: "@",
	HYPHEN: "-",
	SLASH: "/"
};
const NameTransformMap = {
	[NameTransformSymbol.AT]: "scope_",
	[NameTransformSymbol.HYPHEN]: "_",
	[NameTransformSymbol.SLASH]: "__"
};
const EncodedNameTransformMap = {
	[NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
	[NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
	[NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ":";
const ManifestFileName = "mf-manifest.json";
const StatsFileName = "mf-stats.json";
const MFModuleType = {
	NPM: "npm",
	APP: "app"
};
const MODULE_DEVTOOL_IDENTIFIER = "__MF_DEVTOOLS_MODULE_INFO__";
const ENCODE_NAME_PREFIX = "ENCODE_NAME_PREFIX";
const TEMP_DIR = ".federation";
const MFPrefetchCommon = {
	identifier: "MFDataPrefetch",
	globalKey: "__PREFETCH__",
	library: "mf-data-prefetch",
	exportsKey: "__PREFETCH_EXPORTS__",
	fileName: "bootstrap.js"
};
let TreeShakingStatus = /* @__PURE__ */ function(TreeShakingStatus) {
	/**
	* Not handled by deploy server, needs to infer by the real runtime period.
	*/
	TreeShakingStatus[TreeShakingStatus["UNKNOWN"] = 1] = "UNKNOWN";
	/**
	* It means the shared has been calculated , runtime should take this shared as first choice.
	*/
	TreeShakingStatus[TreeShakingStatus["CALCULATED"] = 2] = "CALCULATED";
	/**
	* It means the shared has been calculated, and marked as no used
	*/
	TreeShakingStatus[TreeShakingStatus["NO_USE"] = 0] = "NO_USE";
	return TreeShakingStatus;
}({});

//#endregion
constant$1.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
constant$1.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
constant$1.EncodedNameTransformMap = EncodedNameTransformMap;
constant$1.FederationModuleManifest = FederationModuleManifest;
constant$1.MANIFEST_EXT = MANIFEST_EXT;
constant$1.MFModuleType = MFModuleType;
constant$1.MFPrefetchCommon = MFPrefetchCommon;
constant$1.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
constant$1.ManifestFileName = ManifestFileName;
constant$1.NameTransformMap = NameTransformMap;
constant$1.NameTransformSymbol = NameTransformSymbol;
constant$1.SEPARATOR = SEPARATOR;
constant$1.StatsFileName = StatsFileName;
constant$1.TEMP_DIR = TEMP_DIR;
constant$1.TreeShakingStatus = TreeShakingStatus;

var ContainerPlugin = {};

var runtime$1 = {};

//#region \0rolldown/runtime.js
var __defProp$1 = Object.defineProperty;
var __exportAll$1 = (all, no_symbols) => {
	let target = {};
	for (var name in all) {
		__defProp$1(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (!no_symbols) {
		__defProp$1(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion

runtime$1.__exportAll = __exportAll$1;

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/ContainerPlugin.ts
	var ContainerPlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'ContainerPlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return ContainerPlugin_exports;
	  }
	});
	
} (ContainerPlugin));

var ContainerReferencePlugin = {};

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/ContainerReferencePlugin.ts
	var ContainerReferencePlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'ContainerReferencePlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return ContainerReferencePlugin_exports;
	  }
	});
	
} (ContainerReferencePlugin));

var ModuleFederationPlugin = {};

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/ModuleFederationPlugin.ts
	var ModuleFederationPlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'ModuleFederationPlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return ModuleFederationPlugin_exports;
	  }
	});
	
} (ModuleFederationPlugin));

var SharePlugin = {};

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/SharePlugin.ts
	var SharePlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'SharePlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return SharePlugin_exports;
	  }
	});
	
} (SharePlugin));

var ConsumeSharedPlugin = {};

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/ConsumeSharedPlugin.ts
	var ConsumeSharedPlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'ConsumeSharedPlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return ConsumeSharedPlugin_exports;
	  }
	});
	
} (ConsumeSharedPlugin));

var ProvideSharedPlugin = {};

(function (exports) {
	const require_runtime = runtime$1;

	//#region src/types/plugins/ProvideSharedPlugin.ts
	var ProvideSharedPlugin_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'ProvideSharedPlugin_exports', {
	  enumerable: true,
	  get: function () {
	    return ProvideSharedPlugin_exports;
	  }
	});
	
} (ProvideSharedPlugin));

var env$1 = {};

var define_process_env_default = {};
const require_constant$7 = constant$1;
const isBrowserEnvValue = true ;
function isBrowserEnv() {
  return isBrowserEnvValue;
}
function isReactNativeEnv() {
  return typeof navigator !== "undefined" && navigator?.product === "ReactNative";
}
function isBrowserDebug() {
  try {
    if (isBrowserEnv() && window.localStorage) return Boolean(localStorage.getItem(require_constant$7.BROWSER_LOG_KEY));
  } catch (error) {
    return false;
  }
  return false;
}
function isDebugMode() {
  if (typeof process !== "undefined" && define_process_env_default && define_process_env_default["FEDERATION_DEBUG"]) return Boolean(define_process_env_default["FEDERATION_DEBUG"]);
  if (typeof FEDERATION_DEBUG !== "undefined" && Boolean(FEDERATION_DEBUG)) return true;
  return isBrowserDebug();
}
const getProcessEnv = function() {
  return typeof process !== "undefined" && define_process_env_default ? define_process_env_default : {};
};
env$1.getProcessEnv = getProcessEnv;
env$1.isBrowserEnv = isBrowserEnv;
env$1.isBrowserEnvValue = isBrowserEnvValue;
env$1.isDebugMode = isDebugMode;
env$1.isReactNativeEnv = isReactNativeEnv;

var utils$1 = {};

const require_constant$6 = constant$1;
const require_env$2 = env$1;

//#region src/utils.ts
const LOG_CATEGORY$1 = "[ Federation Runtime ]";
const parseEntry = (str, devVerOrUrl, separator = require_constant$6.SEPARATOR) => {
	const strSplit = str.split(separator);
	const devVersionOrUrl = require_env$2.getProcessEnv()["NODE_ENV"] === "development" && devVerOrUrl;
	const defaultVersion = "*";
	const isEntry = (s) => s.startsWith("http") || s.includes(require_constant$6.MANIFEST_EXT);
	if (strSplit.length >= 2) {
		let [name, ...versionOrEntryArr] = strSplit;
		if (str.startsWith(separator)) {
			name = strSplit.slice(0, 2).join(separator);
			versionOrEntryArr = [devVersionOrUrl || strSplit.slice(2).join(separator)];
		}
		let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
		if (isEntry(versionOrEntry)) return {
			name,
			entry: versionOrEntry
		};
		else return {
			name,
			version: versionOrEntry || defaultVersion
		};
	} else if (strSplit.length === 1) {
		const [name] = strSplit;
		if (devVersionOrUrl && isEntry(devVersionOrUrl)) return {
			name,
			entry: devVersionOrUrl
		};
		return {
			name,
			version: devVersionOrUrl || defaultVersion
		};
	} else throw `Invalid entry value: ${str}`;
};
const composeKeyWithSeparator = function(...args) {
	if (!args.length) return "";
	return args.reduce((sum, cur) => {
		if (!cur) return sum;
		if (!sum) return cur;
		return `${sum}${require_constant$6.SEPARATOR}${cur}`;
	}, "");
};
const encodeName = function(name, prefix = "", withExt = false) {
	try {
		const ext = withExt ? ".js" : "";
		return `${prefix}${name.replace(new RegExp(`${require_constant$6.NameTransformSymbol.AT}`, "g"), require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.AT]).replace(new RegExp(`${require_constant$6.NameTransformSymbol.HYPHEN}`, "g"), require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.HYPHEN]).replace(new RegExp(`${require_constant$6.NameTransformSymbol.SLASH}`, "g"), require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.SLASH])}${ext}`;
	} catch (err) {
		throw err;
	}
};
const decodeName = function(name, prefix, withExt) {
	try {
		let decodedName = name;
		if (prefix) {
			if (!decodedName.startsWith(prefix)) return decodedName;
			decodedName = decodedName.replace(new RegExp(prefix, "g"), "");
		}
		decodedName = decodedName.replace(new RegExp(`${require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.AT]}`, "g"), require_constant$6.EncodedNameTransformMap[require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.AT]]).replace(new RegExp(`${require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.SLASH]}`, "g"), require_constant$6.EncodedNameTransformMap[require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.SLASH]]).replace(new RegExp(`${require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.HYPHEN]}`, "g"), require_constant$6.EncodedNameTransformMap[require_constant$6.NameTransformMap[require_constant$6.NameTransformSymbol.HYPHEN]]);
		if (withExt) decodedName = decodedName.replace(".js", "");
		return decodedName;
	} catch (err) {
		throw err;
	}
};
const generateExposeFilename = (exposeName, withExt) => {
	if (!exposeName) return "";
	let expose = exposeName;
	if (expose === ".") expose = "default_export";
	if (expose.startsWith("./")) expose = expose.replace("./", "");
	return encodeName(expose, "__federation_expose_", withExt);
};
const generateShareFilename = (pkgName, withExt) => {
	if (!pkgName) return "";
	return encodeName(pkgName, "__federation_shared_", withExt);
};
const getResourceUrl = (module, sourceUrl) => {
	if ("getPublicPath" in module) {
		let publicPath;
		if (!module.getPublicPath.startsWith("function")) publicPath = new Function(module.getPublicPath)();
		else publicPath = new Function("return " + module.getPublicPath)()();
		return `${publicPath}${sourceUrl}`;
	} else if ("publicPath" in module) {
		if (!require_env$2.isBrowserEnv() && !require_env$2.isReactNativeEnv() && "ssrPublicPath" in module && typeof module.ssrPublicPath === "string") return `${module.ssrPublicPath}${sourceUrl}`;
		return `${module.publicPath}${sourceUrl}`;
	} else {
		console.warn("Cannot get resource URL. If in debug mode, please ignore.", module, sourceUrl);
		return "";
	}
};
const assert$1 = (condition, msg) => {
	if (!condition) error$1(msg);
};
const error$1 = (msg) => {
	throw new Error(`${LOG_CATEGORY$1}: ${msg}`);
};
const warn$1 = (msg) => {
	console.warn(`${LOG_CATEGORY$1}: ${msg}`);
};
function safeToString(info) {
	try {
		return JSON.stringify(info, null, 2);
	} catch (e) {
		return "";
	}
}
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
	return VERSION_PATTERN_REGEXP.test(str);
}

//#endregion
utils$1.assert = assert$1;
utils$1.composeKeyWithSeparator = composeKeyWithSeparator;
utils$1.decodeName = decodeName;
utils$1.encodeName = encodeName;
utils$1.error = error$1;
utils$1.generateExposeFilename = generateExposeFilename;
utils$1.generateShareFilename = generateShareFilename;
utils$1.getResourceUrl = getResourceUrl;
utils$1.isRequiredVersion = isRequiredVersion;
utils$1.parseEntry = parseEntry;
utils$1.safeToString = safeToString;
utils$1.warn = warn$1;

var generateSnapshotFromManifest$1 = {};

const require_constant$5 = constant$1;

//#region src/generateSnapshotFromManifest.ts
const simpleJoinRemoteEntry = (rPath, rName) => {
	if (!rPath) return rName;
	const transformPath = (str) => {
		if (str === ".") return "";
		if (str.startsWith("./")) return str.replace("./", "");
		if (str.startsWith("/")) {
			const strWithoutSlash = str.slice(1);
			if (strWithoutSlash.endsWith("/")) return strWithoutSlash.slice(0, -1);
			return strWithoutSlash;
		}
		return str;
	};
	const transformedPath = transformPath(rPath);
	if (!transformedPath) return rName;
	if (transformedPath.endsWith("/")) return `${transformedPath}${rName}`;
	return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
	return url.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
}
function generateSnapshotFromManifest(manifest, options = {}) {
	const { remotes = {}, overrides = {}, version } = options;
	let remoteSnapshot;
	const getPublicPath = () => {
		if ("publicPath" in manifest.metaData) {
			if ((manifest.metaData.publicPath === "auto" || manifest.metaData.publicPath === "") && version) return inferAutoPublicPath(version);
			return manifest.metaData.publicPath;
		} else return manifest.metaData.getPublicPath;
	};
	const overridesKeys = Object.keys(overrides);
	let remotesInfo = {};
	if (!Object.keys(remotes).length) remotesInfo = manifest.remotes?.reduce((res, next) => {
		let matchedVersion;
		const name = next.federationContainerName;
		if (overridesKeys.includes(name)) matchedVersion = overrides[name];
		else if ("version" in next) matchedVersion = next.version;
		else matchedVersion = next.entry;
		res[name] = { matchedVersion };
		return res;
	}, {}) || {};
	Object.keys(remotes).forEach((key) => remotesInfo[key] = { matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key] });
	const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes = {
		path: "",
		name: "",
		zip: "",
		api: ""
	}, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
	const { exposes } = manifest;
	let basicRemoteSnapshot = {
		version: version ? version : "",
		buildVersion,
		globalName,
		remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
		remoteEntryType,
		remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
		remoteTypesZip: remoteTypes.zip || "",
		remoteTypesAPI: remoteTypes.api || "",
		remotesInfo,
		shared: manifest?.shared.map((item) => ({
			assets: item.assets,
			sharedName: item.name,
			version: item.version,
			usedExports: item.referenceExports || []
		})),
		modules: exposes?.map((expose) => ({
			moduleName: expose.name,
			modulePath: expose.path,
			assets: expose.assets
		}))
	};
	if (manifest.metaData?.prefetchInterface) {
		const prefetchInterface = manifest.metaData.prefetchInterface;
		basicRemoteSnapshot = {
			...basicRemoteSnapshot,
			prefetchInterface
		};
	}
	if (manifest.metaData?.prefetchEntry) {
		const { path, name, type } = manifest.metaData.prefetchEntry;
		basicRemoteSnapshot = {
			...basicRemoteSnapshot,
			prefetchEntry: simpleJoinRemoteEntry(path, name),
			prefetchEntryType: type
		};
	}
	if ("publicPath" in manifest.metaData) {
		remoteSnapshot = {
			...basicRemoteSnapshot,
			publicPath: getPublicPath()
		};
		if (typeof manifest.metaData.ssrPublicPath === "string") remoteSnapshot.ssrPublicPath = manifest.metaData.ssrPublicPath;
	} else remoteSnapshot = {
		...basicRemoteSnapshot,
		getPublicPath: getPublicPath()
	};
	if (ssrRemoteEntry) {
		const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
		remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
		remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || "commonjs-module";
	}
	return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
	if ("remoteEntry" in moduleInfo && moduleInfo.remoteEntry.includes(require_constant$5.MANIFEST_EXT)) return true;
	else return false;
}
function getManifestFileName(manifestOptions) {
	if (!manifestOptions) return {
		statsFileName: require_constant$5.StatsFileName,
		manifestFileName: require_constant$5.ManifestFileName
	};
	let filePath = typeof manifestOptions === "boolean" ? "" : manifestOptions.filePath || "";
	let fileName = typeof manifestOptions === "boolean" ? "" : manifestOptions.fileName || "";
	const JSON_EXT = ".json";
	const addExt = (name) => {
		if (name.endsWith(JSON_EXT)) return name;
		return `${name}${JSON_EXT}`;
	};
	const insertSuffix = (name, suffix) => {
		return name.replace(JSON_EXT, `${suffix}${JSON_EXT}`);
	};
	const manifestFileName = fileName ? addExt(fileName) : require_constant$5.ManifestFileName;
	return {
		statsFileName: simpleJoinRemoteEntry(filePath, fileName ? insertSuffix(manifestFileName, "-stats") : require_constant$5.StatsFileName),
		manifestFileName: simpleJoinRemoteEntry(filePath, manifestFileName)
	};
}

//#endregion
generateSnapshotFromManifest$1.generateSnapshotFromManifest = generateSnapshotFromManifest;
generateSnapshotFromManifest$1.getManifestFileName = getManifestFileName;
generateSnapshotFromManifest$1.inferAutoPublicPath = inferAutoPublicPath;
generateSnapshotFromManifest$1.isManifestProvider = isManifestProvider;
generateSnapshotFromManifest$1.simpleJoinRemoteEntry = simpleJoinRemoteEntry;

var logger$2 = {};

const require_env$1 = env$1;

//#region src/logger.ts
const PREFIX = "[ Module Federation ]";
const DEFAULT_DELEGATE = console;
const LOGGER_STACK_SKIP_TOKENS = [
	"logger.ts",
	"logger.js",
	"captureStackTrace",
	"Logger.emit",
	"Logger.log",
	"Logger.info",
	"Logger.warn",
	"Logger.error",
	"Logger.debug"
];
function captureStackTrace() {
	try {
		const stack = (/* @__PURE__ */ new Error()).stack;
		if (!stack) return;
		const [, ...rawLines] = stack.split("\n");
		const filtered = rawLines.filter((line) => !LOGGER_STACK_SKIP_TOKENS.some((token) => line.includes(token)));
		if (!filtered.length) return;
		return `Stack trace:\n${filtered.slice(0, 5).join("\n")}`;
	} catch {
		return;
	}
}
var Logger = class {
	constructor(prefix, delegate = DEFAULT_DELEGATE) {
		this.prefix = prefix;
		this.delegate = delegate ?? DEFAULT_DELEGATE;
	}
	setPrefix(prefix) {
		this.prefix = prefix;
	}
	setDelegate(delegate) {
		this.delegate = delegate ?? DEFAULT_DELEGATE;
	}
	emit(method, args) {
		const delegate = this.delegate;
		const stackTrace = require_env$1.isDebugMode() ? captureStackTrace() : void 0;
		const enrichedArgs = stackTrace ? [...args, stackTrace] : args;
		const order = (() => {
			switch (method) {
				case "log": return ["log", "info"];
				case "info": return ["info", "log"];
				case "warn": return [
					"warn",
					"info",
					"log"
				];
				case "error": return [
					"error",
					"warn",
					"log"
				];
				default: return ["debug", "log"];
			}
		})();
		for (const candidate of order) {
			const handler = delegate[candidate];
			if (typeof handler === "function") {
				handler.call(delegate, this.prefix, ...enrichedArgs);
				return;
			}
		}
		for (const candidate of order) {
			const handler = DEFAULT_DELEGATE[candidate];
			if (typeof handler === "function") {
				handler.call(DEFAULT_DELEGATE, this.prefix, ...enrichedArgs);
				return;
			}
		}
	}
	log(...args) {
		this.emit("log", args);
	}
	warn(...args) {
		this.emit("warn", args);
	}
	error(...args) {
		this.emit("error", args);
	}
	success(...args) {
		this.emit("info", args);
	}
	info(...args) {
		this.emit("info", args);
	}
	ready(...args) {
		this.emit("info", args);
	}
	debug(...args) {
		if (require_env$1.isDebugMode()) this.emit("debug", args);
	}
};
function createLogger(prefix) {
	return new Logger(prefix);
}
function createInfrastructureLogger(prefix) {
	const infrastructureLogger = new Logger(prefix);
	Object.defineProperty(infrastructureLogger, "__mf_infrastructure_logger__", {
		value: true,
		enumerable: false,
		configurable: false
	});
	return infrastructureLogger;
}
function bindLoggerToCompiler(loggerInstance, compiler, name) {
	if (!loggerInstance.__mf_infrastructure_logger__) return;
	if (!compiler?.getInfrastructureLogger) return;
	try {
		const infrastructureLogger = compiler.getInfrastructureLogger(name);
		if (infrastructureLogger && typeof infrastructureLogger === "object" && (typeof infrastructureLogger.log === "function" || typeof infrastructureLogger.info === "function" || typeof infrastructureLogger.warn === "function" || typeof infrastructureLogger.error === "function")) loggerInstance.setDelegate(infrastructureLogger);
	} catch {
		loggerInstance.setDelegate(void 0);
	}
}
const logger$1 = createLogger(PREFIX);
const infrastructureLogger = createInfrastructureLogger(PREFIX);

//#endregion
logger$2.bindLoggerToCompiler = bindLoggerToCompiler;
logger$2.createInfrastructureLogger = createInfrastructureLogger;
logger$2.createLogger = createLogger;
logger$2.infrastructureLogger = infrastructureLogger;
logger$2.logger = logger$1;

var dom = {};

const require_utils$2 = utils$1;

//#region src/dom.ts
async function safeWrapper$1(callback, disableWarn) {
	try {
		return await callback();
	} catch (e) {
		!disableWarn && require_utils$2.warn(e);
		return;
	}
}
function isStaticResourcesEqual$1(url1, url2) {
	const REG_EXP = /^(https?:)?\/\//i;
	return url1.replace(REG_EXP, "").replace(/\/$/, "") === url2.replace(REG_EXP, "").replace(/\/$/, "");
}
function createScript(info) {
	let script = null;
	let needAttach = true;
	let timeout = 2e4;
	let timeoutId;
	const scripts = document.getElementsByTagName("script");
	for (let i = 0; i < scripts.length; i++) {
		const s = scripts[i];
		const scriptSrc = s.getAttribute("src");
		if (scriptSrc && isStaticResourcesEqual$1(scriptSrc, info.url)) {
			script = s;
			needAttach = false;
			break;
		}
	}
	if (!script) {
		const attrs = info.attrs;
		script = document.createElement("script");
		script.type = attrs?.["type"] === "module" ? "module" : "text/javascript";
		let createScriptRes = void 0;
		if (info.createScriptHook) {
			createScriptRes = info.createScriptHook(info.url, info.attrs);
			if (createScriptRes instanceof HTMLScriptElement) script = createScriptRes;
			else if (typeof createScriptRes === "object") {
				if ("script" in createScriptRes && createScriptRes.script) script = createScriptRes.script;
				if ("timeout" in createScriptRes && createScriptRes.timeout) timeout = createScriptRes.timeout;
			}
		}
		if (!script.src) script.src = info.url;
		if (attrs && !createScriptRes) Object.keys(attrs).forEach((name) => {
			if (script) {
				if (name === "async" || name === "defer") script[name] = attrs[name];
				else if (!script.getAttribute(name)) script.setAttribute(name, attrs[name]);
			}
		});
	}
	let executionError = null;
	const executionErrorHandler = typeof window !== "undefined" ? (evt) => {
		if (evt.filename && isStaticResourcesEqual$1(evt.filename, info.url)) {
			const err = /* @__PURE__ */ new Error(`ScriptExecutionError: Script "${info.url}" loaded but threw a runtime error during execution: ${evt.message} (${evt.filename}:${evt.lineno}:${evt.colno})`);
			err.name = "ScriptExecutionError";
			executionError = err;
		}
	} : null;
	if (executionErrorHandler) window.addEventListener("error", executionErrorHandler);
	const onScriptComplete = async (prev, event) => {
		clearTimeout(timeoutId);
		if (executionErrorHandler) window.removeEventListener("error", executionErrorHandler);
		const onScriptCompleteCallback = () => {
			if (event?.type === "error") {
				const networkError = /* @__PURE__ */ new Error(`ScriptNetworkError: Failed to load script "${info.url}" - the script URL is unreachable or the server returned an error (network failure, 404, CORS, etc.)`);
				networkError.name = "ScriptNetworkError";
				info?.onErrorCallback && info?.onErrorCallback(networkError);
			} else if (executionError) info?.onErrorCallback && info?.onErrorCallback(executionError);
			else info?.cb && info?.cb();
		};
		if (script) {
			script.onerror = null;
			script.onload = null;
			safeWrapper$1(() => {
				const { needDeleteScript = true } = info;
				if (needDeleteScript) script?.parentNode && script.parentNode.removeChild(script);
			});
			if (prev && typeof prev === "function") {
				const result = prev(event);
				if (result instanceof Promise) {
					const res = await result;
					onScriptCompleteCallback();
					return res;
				}
				onScriptCompleteCallback();
				return result;
			}
		}
		onScriptCompleteCallback();
	};
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	timeoutId = setTimeout(() => {
		onScriptComplete(null, /* @__PURE__ */ new Error(`Remote script "${info.url}" time-outed.`));
	}, timeout);
	return {
		script,
		needAttach
	};
}
function createLink(info) {
	let link = null;
	let needAttach = true;
	const links = document.getElementsByTagName("link");
	for (let i = 0; i < links.length; i++) {
		const l = links[i];
		const linkHref = l.getAttribute("href");
		const linkRel = l.getAttribute("rel");
		if (linkHref && isStaticResourcesEqual$1(linkHref, info.url) && linkRel === info.attrs["rel"]) {
			link = l;
			needAttach = false;
			break;
		}
	}
	if (!link) {
		link = document.createElement("link");
		link.setAttribute("href", info.url);
		let createLinkRes = void 0;
		const attrs = info.attrs;
		if (info.createLinkHook) {
			createLinkRes = info.createLinkHook(info.url, attrs);
			if (createLinkRes instanceof HTMLLinkElement) link = createLinkRes;
		}
		if (attrs && !createLinkRes) Object.keys(attrs).forEach((name) => {
			if (link && !link.getAttribute(name)) link.setAttribute(name, attrs[name]);
		});
	}
	const onLinkComplete = (prev, event) => {
		const onLinkCompleteCallback = () => {
			if (event?.type === "error") info?.onErrorCallback && info?.onErrorCallback(event);
			else info?.cb && info?.cb();
		};
		if (link) {
			link.onerror = null;
			link.onload = null;
			safeWrapper$1(() => {
				const { needDeleteLink = true } = info;
				if (needDeleteLink) link?.parentNode && link.parentNode.removeChild(link);
			});
			if (prev) {
				const res = prev(event);
				onLinkCompleteCallback();
				return res;
			}
		}
		onLinkCompleteCallback();
	};
	link.onerror = onLinkComplete.bind(null, link.onerror);
	link.onload = onLinkComplete.bind(null, link.onload);
	return {
		link,
		needAttach
	};
}
function loadScript(url, info) {
	const { attrs = {}, createScriptHook } = info;
	return new Promise((resolve, reject) => {
		const { script, needAttach } = createScript({
			url,
			cb: resolve,
			onErrorCallback: reject,
			attrs: {
				fetchpriority: "high",
				...attrs
			},
			createScriptHook,
			needDeleteScript: true
		});
		needAttach && document.head.appendChild(script);
	});
}

//#endregion
dom.createLink = createLink;
dom.createScript = createScript;
dom.isStaticResourcesEqual = isStaticResourcesEqual$1;
dom.loadScript = loadScript;
dom.safeWrapper = safeWrapper$1;

var node = {};

const createScriptNode = (url2, cb2, attrs2, loaderHook2) => {
  cb2(/* @__PURE__ */ new Error("createScriptNode is disabled in non-Node.js environment"));
};
const loadScriptNode = (url2, info) => {
  throw new Error("loadScriptNode is disabled in non-Node.js environment");
};
node.createScriptNode = createScriptNode;
node.loadScriptNode = loadScriptNode;

var normalizeOptions$1 = {};

//#region src/normalizeOptions.ts
function normalizeOptions(enableDefault, defaultOptions, key) {
	return function(options) {
		if (options === false) return false;
		if (typeof options === "undefined") if (enableDefault) return defaultOptions;
		else return false;
		if (options === true) return defaultOptions;
		if (options && typeof options === "object") return {
			...defaultOptions,
			...options
		};
		throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
	};
}

//#endregion
normalizeOptions$1.normalizeOptions = normalizeOptions;

var createModuleFederationConfig$1 = {};

//#region src/createModuleFederationConfig.ts
const createModuleFederationConfig = (options) => {
	return options;
};

//#endregion
createModuleFederationConfig$1.createModuleFederationConfig = createModuleFederationConfig;

(function (exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	const require_constant = constant$1;
	const require_ContainerPlugin = ContainerPlugin;
	const require_ContainerReferencePlugin = ContainerReferencePlugin;
	const require_ModuleFederationPlugin = ModuleFederationPlugin;
	const require_SharePlugin = SharePlugin;
	const require_ConsumeSharedPlugin = ConsumeSharedPlugin;
	const require_ProvideSharedPlugin = ProvideSharedPlugin;
	const require_env = env$1;
	const require_utils = utils$1;
	const require_generateSnapshotFromManifest = generateSnapshotFromManifest$1;
	const require_logger = logger$2;
	const require_dom = dom;
	const require_node = node;
	const require_normalizeOptions = normalizeOptions$1;
	const require_createModuleFederationConfig = createModuleFederationConfig$1;

	exports.BROWSER_LOG_KEY = require_constant.BROWSER_LOG_KEY;
	exports.ENCODE_NAME_PREFIX = require_constant.ENCODE_NAME_PREFIX;
	exports.EncodedNameTransformMap = require_constant.EncodedNameTransformMap;
	exports.FederationModuleManifest = require_constant.FederationModuleManifest;
	exports.MANIFEST_EXT = require_constant.MANIFEST_EXT;
	exports.MFModuleType = require_constant.MFModuleType;
	exports.MFPrefetchCommon = require_constant.MFPrefetchCommon;
	exports.MODULE_DEVTOOL_IDENTIFIER = require_constant.MODULE_DEVTOOL_IDENTIFIER;
	exports.ManifestFileName = require_constant.ManifestFileName;
	exports.NameTransformMap = require_constant.NameTransformMap;
	exports.NameTransformSymbol = require_constant.NameTransformSymbol;
	exports.SEPARATOR = require_constant.SEPARATOR;
	exports.StatsFileName = require_constant.StatsFileName;
	exports.TEMP_DIR = require_constant.TEMP_DIR;
	exports.TreeShakingStatus = require_constant.TreeShakingStatus;
	exports.assert = require_utils.assert;
	exports.bindLoggerToCompiler = require_logger.bindLoggerToCompiler;
	exports.composeKeyWithSeparator = require_utils.composeKeyWithSeparator;
	Object.defineProperty(exports, 'consumeSharedPlugin', {
	  enumerable: true,
	  get: function () {
	    return require_ConsumeSharedPlugin.ConsumeSharedPlugin_exports;
	  }
	});
	Object.defineProperty(exports, 'containerPlugin', {
	  enumerable: true,
	  get: function () {
	    return require_ContainerPlugin.ContainerPlugin_exports;
	  }
	});
	Object.defineProperty(exports, 'containerReferencePlugin', {
	  enumerable: true,
	  get: function () {
	    return require_ContainerReferencePlugin.ContainerReferencePlugin_exports;
	  }
	});
	exports.createInfrastructureLogger = require_logger.createInfrastructureLogger;
	exports.createLink = require_dom.createLink;
	exports.createLogger = require_logger.createLogger;
	exports.createModuleFederationConfig = require_createModuleFederationConfig.createModuleFederationConfig;
	exports.createScript = require_dom.createScript;
	exports.createScriptNode = require_node.createScriptNode;
	exports.decodeName = require_utils.decodeName;
	exports.encodeName = require_utils.encodeName;
	exports.error = require_utils.error;
	exports.generateExposeFilename = require_utils.generateExposeFilename;
	exports.generateShareFilename = require_utils.generateShareFilename;
	exports.generateSnapshotFromManifest = require_generateSnapshotFromManifest.generateSnapshotFromManifest;
	exports.getManifestFileName = require_generateSnapshotFromManifest.getManifestFileName;
	exports.getProcessEnv = require_env.getProcessEnv;
	exports.getResourceUrl = require_utils.getResourceUrl;
	exports.inferAutoPublicPath = require_generateSnapshotFromManifest.inferAutoPublicPath;
	exports.infrastructureLogger = require_logger.infrastructureLogger;
	exports.isBrowserEnv = require_env.isBrowserEnv;
	exports.isBrowserEnvValue = require_env.isBrowserEnvValue;
	exports.isDebugMode = require_env.isDebugMode;
	exports.isManifestProvider = require_generateSnapshotFromManifest.isManifestProvider;
	exports.isReactNativeEnv = require_env.isReactNativeEnv;
	exports.isRequiredVersion = require_utils.isRequiredVersion;
	exports.isStaticResourcesEqual = require_dom.isStaticResourcesEqual;
	exports.loadScript = require_dom.loadScript;
	exports.loadScriptNode = require_node.loadScriptNode;
	exports.logger = require_logger.logger;
	Object.defineProperty(exports, 'moduleFederationPlugin', {
	  enumerable: true,
	  get: function () {
	    return require_ModuleFederationPlugin.ModuleFederationPlugin_exports;
	  }
	});
	exports.normalizeOptions = require_normalizeOptions.normalizeOptions;
	exports.parseEntry = require_utils.parseEntry;
	Object.defineProperty(exports, 'provideSharedPlugin', {
	  enumerable: true,
	  get: function () {
	    return require_ProvideSharedPlugin.ProvideSharedPlugin_exports;
	  }
	});
	exports.safeToString = require_utils.safeToString;
	exports.safeWrapper = require_dom.safeWrapper;
	Object.defineProperty(exports, 'sharePlugin', {
	  enumerable: true,
	  get: function () {
	    return require_SharePlugin.SharePlugin_exports;
	  }
	});
	exports.simpleJoinRemoteEntry = require_generateSnapshotFromManifest.simpleJoinRemoteEntry;
	exports.warn = require_utils.warn; 
} (dist$1));

var browser = {};

var getShortErrorMsg$1 = {};

//#region src/getShortErrorMsg.ts
const getDocsUrl = (errorCode) => {
	return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${errorCode.split("-")[0].toLowerCase()}#${errorCode.toLowerCase()}`;
};
const getShortErrorMsg = (errorCode, errorDescMap, args, originalErrorMsg) => {
	const msg = [`${[errorDescMap[errorCode]]} #${errorCode}`];
	args && msg.push(`args: ${JSON.stringify(args)}`);
	msg.push(getDocsUrl(errorCode));
	originalErrorMsg && msg.push(`Original Error Message:\n ${originalErrorMsg}`);
	return msg.join("\n");
};

//#endregion
getShortErrorMsg$1.getShortErrorMsg = getShortErrorMsg;

(function (exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	const require_getShortErrorMsg = getShortErrorMsg$1;

	//#region src/browser.ts
	function logAndReport(code, descMap, args, logger, originalErrorMsg, context) {
		return logger(require_getShortErrorMsg.getShortErrorMsg(code, descMap, args, originalErrorMsg));
	}

	//#endregion
	exports.logAndReport = logAndReport;
	
} (browser));

let _module_federation_sdk$b = dist$1;
let _module_federation_error_codes_browser = browser;

//#region src/utils/logger.ts
const LOG_CATEGORY = "[ Federation Runtime ]";
const logger = (0, _module_federation_sdk$b.createLogger)(LOG_CATEGORY);
function assert(condition, msgOrCode, descMap, args, context) {
	if (!condition) if (descMap !== void 0) error(msgOrCode, descMap, args, void 0, context);
	else error(msgOrCode);
}
function error(msgOrCode, descMap, args, originalErrorMsg, context) {
	if (descMap !== void 0) return (0, _module_federation_error_codes_browser.logAndReport)(msgOrCode, descMap, args ?? {}, (msg) => {
		throw new Error(`${LOG_CATEGORY}: ${msg}`);
	}, originalErrorMsg, context);
	const msg = msgOrCode;
	if (msg instanceof Error) {
		if (!msg.message.startsWith(LOG_CATEGORY)) msg.message = `${LOG_CATEGORY}: ${msg.message}`;
		throw msg;
	}
	throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
	if (msg instanceof Error) {
		if (!msg.message.startsWith(LOG_CATEGORY)) msg.message = `${LOG_CATEGORY}: ${msg.message}`;
		logger.warn(msg);
	} else logger.warn(msg);
}

//#endregion
logger$3.assert = assert;
logger$3.error = error;
logger$3.logger = logger;
logger$3.warn = warn;

var tool = {};

const require_logger$d = logger$3;
let _module_federation_sdk$a = dist$1;

//#region src/utils/tool.ts
function addUniqueItem(arr, item) {
	if (arr.findIndex((name) => name === item) === -1) arr.push(item);
	return arr;
}
function getFMId(remoteInfo) {
	if ("version" in remoteInfo && remoteInfo.version) return `${remoteInfo.name}:${remoteInfo.version}`;
	else if ("entry" in remoteInfo && remoteInfo.entry) return `${remoteInfo.name}:${remoteInfo.entry}`;
	else return `${remoteInfo.name}`;
}
function isRemoteInfoWithEntry(remote) {
	return typeof remote.entry !== "undefined";
}
function isPureRemoteEntry(remote) {
	return !remote.entry.includes(".json");
}
async function safeWrapper(callback, disableWarn) {
	try {
		return await callback();
	} catch (e) {
		!disableWarn && require_logger$d.warn(e);
		return;
	}
}
function isObject(val) {
	return val && typeof val === "object";
}
const objectToString = Object.prototype.toString;
function isPlainObject(val) {
	return objectToString.call(val) === "[object Object]";
}
function isStaticResourcesEqual(url1, url2) {
	const REG_EXP = /^(https?:)?\/\//i;
	return url1.replace(REG_EXP, "").replace(/\/$/, "") === url2.replace(REG_EXP, "").replace(/\/$/, "");
}
function arrayOptions(options) {
	return Array.isArray(options) ? options : [options];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
	const defaultRemoteEntryInfo = {
		url: "",
		type: "global",
		globalName: ""
	};
	if (_module_federation_sdk$a.isBrowserEnvValue || (0, _module_federation_sdk$a.isReactNativeEnv)() || !("ssrRemoteEntry" in snapshot)) return "remoteEntry" in snapshot ? {
		url: snapshot.remoteEntry,
		type: snapshot.remoteEntryType,
		globalName: snapshot.globalName
	} : defaultRemoteEntryInfo;
	if ("ssrRemoteEntry" in snapshot) return {
		url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
		type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
		globalName: snapshot.globalName
	};
	return defaultRemoteEntryInfo;
}
const processModuleAlias = (name, subPath) => {
	let moduleName;
	if (name.endsWith("/")) moduleName = name.slice(0, -1);
	else moduleName = name;
	if (subPath.startsWith(".")) subPath = subPath.slice(1);
	moduleName = moduleName + subPath;
	return moduleName;
};

//#endregion
tool.addUniqueItem = addUniqueItem;
tool.arrayOptions = arrayOptions;
tool.getFMId = getFMId;
tool.getRemoteEntryInfoFromSnapshot = getRemoteEntryInfoFromSnapshot;
tool.isObject = isObject;
tool.isPlainObject = isPlainObject;
tool.isPureRemoteEntry = isPureRemoteEntry;
tool.isRemoteInfoWithEntry = isRemoteInfoWithEntry;
tool.isStaticResourcesEqual = isStaticResourcesEqual;
tool.objectToString = objectToString;
tool.processModuleAlias = processModuleAlias;
tool.safeWrapper = safeWrapper;

var global = {};

const require_logger$c = logger$3;
const require_tool$8 = tool;
let _module_federation_sdk$9 = dist$1;

//#region src/global.ts
const CurrentGlobal = typeof globalThis === "object" ? globalThis : window;
const nativeGlobal = (() => {
	try {
		return document.defaultView;
	} catch {
		return CurrentGlobal;
	}
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
	Object.defineProperty(target, key, {
		value: val,
		configurable: false,
		writable: true
	});
}
function includeOwnProperty(target, key) {
	return Object.hasOwnProperty.call(target, key);
}
if (!includeOwnProperty(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__")) definePropertyGlobalVal(CurrentGlobal, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
	if (includeOwnProperty(target, "__VMOK__") && !includeOwnProperty(target, "__FEDERATION__")) definePropertyGlobalVal(target, "__FEDERATION__", target.__VMOK__);
	if (!includeOwnProperty(target, "__FEDERATION__")) {
		definePropertyGlobalVal(target, "__FEDERATION__", {
			__GLOBAL_PLUGIN__: [],
			__INSTANCES__: [],
			moduleInfo: {},
			__SHARE__: {},
			__MANIFEST_LOADING__: {},
			__PRELOADED_MAP__: /* @__PURE__ */ new Map()
		});
		definePropertyGlobalVal(target, "__VMOK__", target.__FEDERATION__);
	}
	target.__FEDERATION__.__GLOBAL_PLUGIN__ ??= [];
	target.__FEDERATION__.__INSTANCES__ ??= [];
	target.__FEDERATION__.moduleInfo ??= {};
	target.__FEDERATION__.__SHARE__ ??= {};
	target.__FEDERATION__.__MANIFEST_LOADING__ ??= {};
	target.__FEDERATION__.__PRELOADED_MAP__ ??= /* @__PURE__ */ new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
	CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
	CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
	CurrentGlobal.__FEDERATION__.moduleInfo = {};
	CurrentGlobal.__FEDERATION__.__SHARE__ = {};
	CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
	Object.keys(globalLoading).forEach((key) => {
		delete globalLoading[key];
	});
}
function setGlobalFederationInstance(FederationInstance) {
	CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
	return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = (0, _module_federation_sdk$9.isDebugMode)()) {
	if (isDebug) {
		CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
		CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "2.2.3";
	}
}
function getInfoWithoutType(target, key) {
	if (typeof key === "string") if (target[key]) return {
		value: target[key],
		key
	};
	else {
		const targetKeys = Object.keys(target);
		for (const targetKey of targetKeys) {
			const [targetTypeOrName, _] = targetKey.split(":");
			const nKey = `${targetTypeOrName}:${key}`;
			const typeWithKeyRes = target[nKey];
			if (typeWithKeyRes) return {
				value: typeWithKeyRes,
				key: nKey
			};
		}
		return {
			value: void 0,
			key
		};
	}
	else require_logger$c.error(`getInfoWithoutType: "key" must be a string, got ${typeof key} (${JSON.stringify(key)}).`);
}
const getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot) => {
	const getModuleInfo = getInfoWithoutType(snapshot, require_tool$8.getFMId(moduleInfo)).value;
	if (getModuleInfo && !getModuleInfo.version && "version" in moduleInfo && moduleInfo["version"]) getModuleInfo.version = moduleInfo["version"];
	if (getModuleInfo) return getModuleInfo;
	if ("version" in moduleInfo && moduleInfo["version"]) {
		const { version, ...resModuleInfo } = moduleInfo;
		const moduleKeyWithoutVersion = require_tool$8.getFMId(resModuleInfo);
		const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
		if (getModuleInfoWithoutVersion?.version === version) return getModuleInfoWithoutVersion;
	}
};
const getGlobalSnapshotInfoByModuleInfo = (moduleInfo) => getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo) => {
	const moduleKey = require_tool$8.getFMId(remoteInfo);
	nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
	return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = (moduleInfos) => {
	nativeGlobal.__FEDERATION__.moduleInfo = {
		...nativeGlobal.__FEDERATION__.moduleInfo,
		...moduleInfos
	};
	return () => {
		const keys = Object.keys(moduleInfos);
		for (const key of keys) delete nativeGlobal.__FEDERATION__.moduleInfo[key];
	};
};
const getRemoteEntryExports = (name, globalName) => {
	const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
	return {
		remoteEntryKey,
		entryExports: CurrentGlobal[remoteEntryKey]
	};
};
const registerGlobalPlugins = (plugins) => {
	const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
	plugins.forEach((plugin) => {
		if (__GLOBAL_PLUGIN__.findIndex((p) => p.name === plugin.name) === -1) __GLOBAL_PLUGIN__.push(plugin);
		else require_logger$c.warn(`The plugin ${plugin.name} has been registered.`);
	});
};
const getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = (id) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = (id) => CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);

//#endregion
global.CurrentGlobal = CurrentGlobal;
global.Global = Global;
global.addGlobalSnapshot = addGlobalSnapshot;
global.getGlobalFederationConstructor = getGlobalFederationConstructor;
global.getGlobalHostPlugins = getGlobalHostPlugins;
global.getGlobalSnapshot = getGlobalSnapshot;
global.getGlobalSnapshotInfoByModuleInfo = getGlobalSnapshotInfoByModuleInfo;
global.getInfoWithoutType = getInfoWithoutType;
global.getPreloaded = getPreloaded;
global.getRemoteEntryExports = getRemoteEntryExports;
global.getTargetSnapshotInfoByModuleInfo = getTargetSnapshotInfoByModuleInfo;
global.globalLoading = globalLoading;
global.nativeGlobal = nativeGlobal;
global.registerGlobalPlugins = registerGlobalPlugins;
global.resetFederationGlobalInfo = resetFederationGlobalInfo;
global.setGlobalFederationConstructor = setGlobalFederationConstructor;
global.setGlobalFederationInstance = setGlobalFederationInstance;
global.setGlobalSnapshotInfoByModuleInfo = setGlobalSnapshotInfoByModuleInfo;
global.setPreloaded = setPreloaded;

var semver = {};

var utils = {};

var constants = {};

//#region src/utils/semver/constants.ts
const buildIdentifier = "[0-9A-Za-z-]+";
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = "0|[1-9]\\d*";
const numericIdentifierLoose = "[0-9]+";
const nonNumericIdentifier = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const loosePlain = `[v=\\s]*${`(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`}${preReleaseLoose}?${build}?`;
const gtlt = "((?:<|>)?=?)";
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = "(?:~>?)";
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = "(?:\\^)";
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = "(<|>)?=?\\s*\\*";
const caret = `^${loneCaret}${xRangePlain}$`;
const fullPlain = `v?${`(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
const gte0 = "^\\s*>=\\s*0.0.0\\s*$";

//#endregion
constants.caret = caret;
constants.caretTrim = caretTrim;
constants.comparator = comparator;
constants.comparatorTrim = comparatorTrim;
constants.gte0 = gte0;
constants.hyphenRange = hyphenRange;
constants.star = star;
constants.tilde = tilde;
constants.tildeTrim = tildeTrim;
constants.xRange = xRange;

const require_constants$1 = constants;

//#region src/utils/semver/utils.ts
function parseRegex(source) {
	return new RegExp(source);
}
function isXVersion(version) {
	return !version || version.toLowerCase() === "x" || version === "*";
}
function pipe(...fns) {
	return (x) => fns.reduce((v, f) => f(v), x);
}
function extractComparator(comparatorString) {
	return comparatorString.match(parseRegex(require_constants$1.comparator));
}
function combineVersion(major, minor, patch, preRelease) {
	const mainVersion = `${major}.${minor}.${patch}`;
	if (preRelease) return `${mainVersion}-${preRelease}`;
	return mainVersion;
}

//#endregion
utils.combineVersion = combineVersion;
utils.extractComparator = extractComparator;
utils.isXVersion = isXVersion;
utils.parseRegex = parseRegex;
utils.pipe = pipe;

var parser = {};

const require_constants = constants;
const require_utils$1 = utils;

//#region src/utils/semver/parser.ts
function parseHyphen(range) {
	return range.replace(require_utils$1.parseRegex(require_constants.hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
		if (require_utils$1.isXVersion(fromMajor)) from = "";
		else if (require_utils$1.isXVersion(fromMinor)) from = `>=${fromMajor}.0.0`;
		else if (require_utils$1.isXVersion(fromPatch)) from = `>=${fromMajor}.${fromMinor}.0`;
		else from = `>=${from}`;
		if (require_utils$1.isXVersion(toMajor)) to = "";
		else if (require_utils$1.isXVersion(toMinor)) to = `<${Number(toMajor) + 1}.0.0-0`;
		else if (require_utils$1.isXVersion(toPatch)) to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
		else if (toPreRelease) to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
		else to = `<=${to}`;
		return `${from} ${to}`.trim();
	});
}
function parseComparatorTrim(range) {
	return range.replace(require_utils$1.parseRegex(require_constants.comparatorTrim), "$1$2$3");
}
function parseTildeTrim(range) {
	return range.replace(require_utils$1.parseRegex(require_constants.tildeTrim), "$1~");
}
function parseCaretTrim(range) {
	return range.replace(require_utils$1.parseRegex(require_constants.caretTrim), "$1^");
}
function parseCarets(range) {
	return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(require_utils$1.parseRegex(require_constants.caret), (_, major, minor, patch, preRelease) => {
		if (require_utils$1.isXVersion(major)) return "";
		else if (require_utils$1.isXVersion(minor)) return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
		else if (require_utils$1.isXVersion(patch)) if (major === "0") return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
		else return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
		else if (preRelease) if (major === "0") if (minor === "0") return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
		else return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
		else return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
		else {
			if (major === "0") if (minor === "0") return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
			else return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
			return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
		}
	})).join(" ");
}
function parseTildes(range) {
	return range.trim().split(/\s+/).map((rangeVersion) => rangeVersion.replace(require_utils$1.parseRegex(require_constants.tilde), (_, major, minor, patch, preRelease) => {
		if (require_utils$1.isXVersion(major)) return "";
		else if (require_utils$1.isXVersion(minor)) return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
		else if (require_utils$1.isXVersion(patch)) return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
		else if (preRelease) return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
		return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
	})).join(" ");
}
function parseXRanges(range) {
	return range.split(/\s+/).map((rangeVersion) => rangeVersion.trim().replace(require_utils$1.parseRegex(require_constants.xRange), (ret, gtlt, major, minor, patch, preRelease) => {
		const isXMajor = require_utils$1.isXVersion(major);
		const isXMinor = isXMajor || require_utils$1.isXVersion(minor);
		const isXPatch = isXMinor || require_utils$1.isXVersion(patch);
		if (gtlt === "=" && isXPatch) gtlt = "";
		preRelease = "";
		if (isXMajor) if (gtlt === ">" || gtlt === "<") return "<0.0.0-0";
		else return "*";
		else if (gtlt && isXPatch) {
			if (isXMinor) minor = 0;
			patch = 0;
			if (gtlt === ">") {
				gtlt = ">=";
				if (isXMinor) {
					major = Number(major) + 1;
					minor = 0;
					patch = 0;
				} else {
					minor = Number(minor) + 1;
					patch = 0;
				}
			} else if (gtlt === "<=") {
				gtlt = "<";
				if (isXMinor) major = Number(major) + 1;
				else minor = Number(minor) + 1;
			}
			if (gtlt === "<") preRelease = "-0";
			return `${gtlt + major}.${minor}.${patch}${preRelease}`;
		} else if (isXMinor) return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
		else if (isXPatch) return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
		return ret;
	})).join(" ");
}
function parseStar(range) {
	return range.trim().replace(require_utils$1.parseRegex(require_constants.star), "");
}
function parseGTE0(comparatorString) {
	return comparatorString.trim().replace(require_utils$1.parseRegex(require_constants.gte0), "");
}

//#endregion
parser.parseCaretTrim = parseCaretTrim;
parser.parseCarets = parseCarets;
parser.parseComparatorTrim = parseComparatorTrim;
parser.parseGTE0 = parseGTE0;
parser.parseHyphen = parseHyphen;
parser.parseStar = parseStar;
parser.parseTildeTrim = parseTildeTrim;
parser.parseTildes = parseTildes;
parser.parseXRanges = parseXRanges;

var compare$1 = {};

//#region src/utils/semver/compare.ts
function compareAtom(rangeAtom, versionAtom) {
	rangeAtom = Number(rangeAtom) || rangeAtom;
	versionAtom = Number(versionAtom) || versionAtom;
	if (rangeAtom > versionAtom) return 1;
	if (rangeAtom === versionAtom) return 0;
	return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
	const { preRelease: rangePreRelease } = rangeAtom;
	const { preRelease: versionPreRelease } = versionAtom;
	if (rangePreRelease === void 0 && Boolean(versionPreRelease)) return 1;
	if (Boolean(rangePreRelease) && versionPreRelease === void 0) return -1;
	if (rangePreRelease === void 0 && versionPreRelease === void 0) return 0;
	for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
		const rangeElement = rangePreRelease[i];
		const versionElement = versionPreRelease[i];
		if (rangeElement === versionElement) continue;
		if (rangeElement === void 0 && versionElement === void 0) return 0;
		if (!rangeElement) return 1;
		if (!versionElement) return -1;
		return compareAtom(rangeElement, versionElement);
	}
	return 0;
}
function compareVersion(rangeAtom, versionAtom) {
	return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
	return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
	switch (rangeAtom.operator) {
		case "":
		case "=": return eq(rangeAtom, versionAtom);
		case ">": return compareVersion(rangeAtom, versionAtom) < 0;
		case ">=": return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
		case "<": return compareVersion(rangeAtom, versionAtom) > 0;
		case "<=": return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
		case void 0: return true;
		default: return false;
	}
}

//#endregion
compare$1.compare = compare;

const require_utils = utils;
const require_parser = parser;
const require_compare = compare$1;

//#region src/utils/semver/index.ts
function parseComparatorString(range) {
	return require_utils.pipe(require_parser.parseCarets, require_parser.parseTildes, require_parser.parseXRanges, require_parser.parseStar)(range);
}
function parseRange(range) {
	return require_utils.pipe(require_parser.parseHyphen, require_parser.parseComparatorTrim, require_parser.parseTildeTrim, require_parser.parseCaretTrim)(range.trim()).split(/\s+/).join(" ");
}
function satisfy(version, range) {
	if (!version) return false;
	const extractedVersion = require_utils.extractComparator(version);
	if (!extractedVersion) return false;
	const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
	const versionAtom = {
		operator: versionOperator,
		version: require_utils.combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
		major: versionMajor,
		minor: versionMinor,
		patch: versionPatch,
		preRelease: versionPreRelease?.split(".")
	};
	const orRanges = range.split("||");
	for (const orRange of orRanges) {
		const trimmedOrRange = orRange.trim();
		if (!trimmedOrRange) return true;
		if (trimmedOrRange === "*" || trimmedOrRange === "x") return true;
		try {
			const parsedSubRange = parseRange(trimmedOrRange);
			if (!parsedSubRange.trim()) return true;
			const parsedComparatorString = parsedSubRange.split(" ").map((rangeVersion) => parseComparatorString(rangeVersion)).join(" ");
			if (!parsedComparatorString.trim()) return true;
			const comparators = parsedComparatorString.split(/\s+/).map((comparator) => require_parser.parseGTE0(comparator)).filter(Boolean);
			if (comparators.length === 0) continue;
			let subRangeSatisfied = true;
			for (const comparator of comparators) {
				const extractedComparator = require_utils.extractComparator(comparator);
				if (!extractedComparator) {
					subRangeSatisfied = false;
					break;
				}
				const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
				if (!require_compare.compare({
					operator: rangeOperator,
					version: require_utils.combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
					major: rangeMajor,
					minor: rangeMinor,
					patch: rangePatch,
					preRelease: rangePreRelease?.split(".")
				}, versionAtom)) {
					subRangeSatisfied = false;
					break;
				}
			}
			if (subRangeSatisfied) return true;
		} catch (e) {
			console.error(`[semver] Error processing range part "${trimmedOrRange}":`, e);
			continue;
		}
	}
	return false;
}

//#endregion
semver.satisfy = satisfy;

var share = {};

var constant = {};

//#region src/constant.ts
const DEFAULT_SCOPE = "default";
const DEFAULT_REMOTE_TYPE = "global";

//#endregion
constant.DEFAULT_REMOTE_TYPE = DEFAULT_REMOTE_TYPE;
constant.DEFAULT_SCOPE = DEFAULT_SCOPE;

const require_logger$b = logger$3;
const require_tool$7 = tool;
const require_global$6 = global;
const require_constant$4 = constant;
const require_index = semver;
let _module_federation_sdk$8 = dist$1;

//#region src/utils/share.ts
function formatShare(shareArgs, from, name, shareStrategy) {
	let get;
	if ("get" in shareArgs) get = shareArgs.get;
	else if ("lib" in shareArgs) get = () => Promise.resolve(shareArgs.lib);
	else get = () => Promise.resolve(() => {
		require_logger$b.error(`Cannot get shared "${name}" from "${from}": neither "get" nor "lib" is provided in the share config.`);
	});
	if (shareArgs.shareConfig?.eager && shareArgs.treeShaking?.mode) require_logger$b.error(`Invalid shared config for "${name}" from "${from}": cannot use both "eager: true" and "treeShaking.mode" simultaneously. Choose one strategy.`);
	return {
		deps: [],
		useIn: [],
		from,
		loading: null,
		...shareArgs,
		shareConfig: {
			requiredVersion: `^${shareArgs.version}`,
			singleton: false,
			eager: false,
			strictVersion: false,
			...shareArgs.shareConfig
		},
		get,
		loaded: shareArgs?.loaded || "lib" in shareArgs ? true : void 0,
		version: shareArgs.version ?? "0",
		scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [shareArgs.scope ?? "default"],
		strategy: (shareArgs.strategy ?? shareStrategy) || "version-first",
		treeShaking: shareArgs.treeShaking ? {
			...shareArgs.treeShaking,
			mode: shareArgs.treeShaking.mode ?? "server-calc",
			status: shareArgs.treeShaking.status ?? _module_federation_sdk$8.TreeShakingStatus.UNKNOWN,
			useIn: []
		} : void 0
	};
}
function formatShareConfigs(prevOptions, newOptions) {
	const shareArgs = newOptions.shared || {};
	const from = newOptions.name;
	const newShareInfos = Object.keys(shareArgs).reduce((res, pkgName) => {
		const arrayShareArgs = require_tool$7.arrayOptions(shareArgs[pkgName]);
		res[pkgName] = res[pkgName] || [];
		arrayShareArgs.forEach((shareConfig) => {
			res[pkgName].push(formatShare(shareConfig, from, pkgName, newOptions.shareStrategy));
		});
		return res;
	}, {});
	const allShareInfos = { ...prevOptions.shared };
	Object.keys(newShareInfos).forEach((shareKey) => {
		if (!allShareInfos[shareKey]) allShareInfos[shareKey] = newShareInfos[shareKey];
		else newShareInfos[shareKey].forEach((newUserSharedOptions) => {
			if (!allShareInfos[shareKey].find((sharedVal) => sharedVal.version === newUserSharedOptions.version)) allShareInfos[shareKey].push(newUserSharedOptions);
		});
	});
	return {
		allShareInfos,
		newShareInfos
	};
}
function shouldUseTreeShaking(treeShaking, usedExports) {
	if (!treeShaking) return false;
	const { status, mode } = treeShaking;
	if (status === _module_federation_sdk$8.TreeShakingStatus.NO_USE) return false;
	if (status === _module_federation_sdk$8.TreeShakingStatus.CALCULATED) return true;
	if (mode === "runtime-infer") {
		if (!usedExports) return true;
		return isMatchUsedExports(treeShaking, usedExports);
	}
	return false;
}
/**
* compare version a and b, return true if a is less than b
*/
function versionLt(a, b) {
	const transformInvalidVersion = (version) => {
		if (!Number.isNaN(Number(version))) {
			const splitArr = version.split(".");
			let validVersion = version;
			for (let i = 0; i < 3 - splitArr.length; i++) validVersion += ".0";
			return validVersion;
		}
		return version;
	};
	if (require_index.satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) return true;
	else return false;
}
const findVersion = (shareVersionMap, cb) => {
	const callback = cb || function(prev, cur) {
		return versionLt(prev, cur);
	};
	return Object.keys(shareVersionMap).reduce((prev, cur) => {
		if (!prev) return cur;
		if (callback(prev, cur)) return cur;
		if (prev === "0") return cur;
		return prev;
	}, 0);
};
const isLoaded = (shared) => {
	return Boolean(shared.loaded) || typeof shared.lib === "function";
};
const isLoading = (shared) => {
	return Boolean(shared.loading);
};
const isMatchUsedExports = (treeShaking, usedExports) => {
	if (!treeShaking || !usedExports) return false;
	const { usedExports: treeShakingUsedExports } = treeShaking;
	if (!treeShakingUsedExports) return false;
	if (usedExports.every((e) => treeShakingUsedExports.includes(e))) return true;
	return false;
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName, treeShaking) {
	const versions = shareScopeMap[scope][pkgName];
	let version = "";
	let useTreesShaking = shouldUseTreeShaking(treeShaking);
	const callback = function(prev, cur) {
		if (useTreesShaking) {
			if (!versions[prev].treeShaking) return true;
			if (!versions[cur].treeShaking) return false;
			return !isLoaded(versions[prev].treeShaking) && versionLt(prev, cur);
		}
		return !isLoaded(versions[prev]) && versionLt(prev, cur);
	};
	if (useTreesShaking) {
		version = findVersion(shareScopeMap[scope][pkgName], callback);
		if (version) return {
			version,
			useTreesShaking
		};
		useTreesShaking = false;
	}
	return {
		version: findVersion(shareScopeMap[scope][pkgName], callback),
		useTreesShaking
	};
}
const isLoadingOrLoaded = (shared) => {
	return isLoaded(shared) || isLoading(shared);
};
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName, treeShaking) {
	const versions = shareScopeMap[scope][pkgName];
	let version = "";
	let useTreesShaking = shouldUseTreeShaking(treeShaking);
	const callback = function(prev, cur) {
		if (useTreesShaking) {
			if (!versions[prev].treeShaking) return true;
			if (!versions[cur].treeShaking) return false;
			if (isLoadingOrLoaded(versions[cur].treeShaking)) if (isLoadingOrLoaded(versions[prev].treeShaking)) return Boolean(versionLt(prev, cur));
			else return true;
			if (isLoadingOrLoaded(versions[prev].treeShaking)) return false;
		}
		if (isLoadingOrLoaded(versions[cur])) if (isLoadingOrLoaded(versions[prev])) return Boolean(versionLt(prev, cur));
		else return true;
		if (isLoadingOrLoaded(versions[prev])) return false;
		return versionLt(prev, cur);
	};
	if (useTreesShaking) {
		version = findVersion(shareScopeMap[scope][pkgName], callback);
		if (version) return {
			version,
			useTreesShaking
		};
		useTreesShaking = false;
	}
	return {
		version: findVersion(shareScopeMap[scope][pkgName], callback),
		useTreesShaking
	};
}
function getFindShareFunction(strategy) {
	if (strategy === "loaded-first") return findSingletonVersionOrderByLoaded;
	return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
	if (!localShareScopeMap) return;
	const { shareConfig, scope = require_constant$4.DEFAULT_SCOPE, strategy, treeShaking } = shareInfo;
	const scopes = Array.isArray(scope) ? scope : [scope];
	for (const sc of scopes) if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
		const { requiredVersion } = shareConfig;
		const { version: maxOrSingletonVersion, useTreesShaking } = getFindShareFunction(strategy)(localShareScopeMap, sc, pkgName, treeShaking);
		const defaultResolver = () => {
			const shared = localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
			if (shareConfig.singleton) {
				if (typeof requiredVersion === "string" && !require_index.satisfy(maxOrSingletonVersion, requiredVersion)) {
					const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && shared.from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
					if (shareConfig.strictVersion) require_logger$b.error(msg);
					else require_logger$b.warn(msg);
				}
				return {
					shared,
					useTreesShaking
				};
			} else {
				if (requiredVersion === false || requiredVersion === "*") return {
					shared,
					useTreesShaking
				};
				if (require_index.satisfy(maxOrSingletonVersion, requiredVersion)) return {
					shared,
					useTreesShaking
				};
				const _usedTreeShaking = shouldUseTreeShaking(treeShaking);
				if (_usedTreeShaking) for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) {
					if (!shouldUseTreeShaking(versionValue.treeShaking, treeShaking?.usedExports)) continue;
					if (require_index.satisfy(versionKey, requiredVersion)) return {
						shared: versionValue,
						useTreesShaking: _usedTreeShaking
					};
				}
				for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) if (require_index.satisfy(versionKey, requiredVersion)) return {
					shared: versionValue,
					useTreesShaking: false
				};
			}
		};
		const params = {
			shareScopeMap: localShareScopeMap,
			scope: sc,
			pkgName,
			version: maxOrSingletonVersion,
			GlobalFederation: require_global$6.Global.__FEDERATION__,
			shareInfo,
			resolver: defaultResolver
		};
		return (resolveShare.emit(params) || params).resolver();
	}
}
function getGlobalShareScope() {
	return require_global$6.Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
	const { pkgName, extraOptions, shareInfos } = options;
	const defaultResolver = (sharedOptions) => {
		if (!sharedOptions) return;
		const shareVersionMap = {};
		sharedOptions.forEach((shared) => {
			shareVersionMap[shared.version] = shared;
		});
		const callback = function(prev, cur) {
			return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
		};
		return shareVersionMap[findVersion(shareVersionMap, callback)];
	};
	const resolver = extraOptions?.resolver ?? defaultResolver;
	const isPlainObject = (val) => {
		return val !== null && typeof val === "object" && !Array.isArray(val);
	};
	const merge = (...sources) => {
		const out = {};
		for (const src of sources) {
			if (!src) continue;
			for (const [key, value] of Object.entries(src)) {
				const prev = out[key];
				if (isPlainObject(prev) && isPlainObject(value)) out[key] = merge(prev, value);
				else if (value !== void 0) out[key] = value;
			}
		}
		return out;
	};
	return merge(resolver(shareInfos[pkgName]), extraOptions?.customShareInfo);
}
const addUseIn = (shared, from) => {
	if (!shared.useIn) shared.useIn = [];
	require_tool$7.addUniqueItem(shared.useIn, from);
};
function directShare(shared, useTreesShaking) {
	if (useTreesShaking && shared.treeShaking) return shared.treeShaking;
	return shared;
}

//#endregion
share.addUseIn = addUseIn;
share.directShare = directShare;
share.formatShareConfigs = formatShareConfigs;
share.getGlobalShareScope = getGlobalShareScope;
share.getRegisteredShare = getRegisteredShare;
share.getTargetSharedOptions = getTargetSharedOptions;
share.shouldUseTreeShaking = shouldUseTreeShaking;

var manifest = {};

//#region src/utils/manifest.ts
function matchRemoteWithNameAndExpose(remotes, id) {
	for (const remote of remotes) {
		const isNameMatched = id.startsWith(remote.name);
		let expose = id.replace(remote.name, "");
		if (isNameMatched) {
			if (expose.startsWith("/")) {
				const pkgNameOrAlias = remote.name;
				expose = `.${expose}`;
				return {
					pkgNameOrAlias,
					expose,
					remote
				};
			} else if (expose === "") return {
				pkgNameOrAlias: remote.name,
				expose: ".",
				remote
			};
		}
		const isAliasMatched = remote.alias && id.startsWith(remote.alias);
		let exposeWithAlias = remote.alias && id.replace(remote.alias, "");
		if (remote.alias && isAliasMatched) {
			if (exposeWithAlias && exposeWithAlias.startsWith("/")) {
				const pkgNameOrAlias = remote.alias;
				exposeWithAlias = `.${exposeWithAlias}`;
				return {
					pkgNameOrAlias,
					expose: exposeWithAlias,
					remote
				};
			} else if (exposeWithAlias === "") return {
				pkgNameOrAlias: remote.alias,
				expose: ".",
				remote
			};
		}
	}
}
function matchRemote(remotes, nameOrAlias) {
	for (const remote of remotes) {
		if (nameOrAlias === remote.name) return remote;
		if (remote.alias && nameOrAlias === remote.alias) return remote;
	}
}

//#endregion
manifest.matchRemote = matchRemote;
manifest.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;

var load = {};

var dist = {};

var errorCodes = {};

//#region src/error-codes.ts
const RUNTIME_001 = "RUNTIME-001";
const RUNTIME_002 = "RUNTIME-002";
const RUNTIME_003 = "RUNTIME-003";
const RUNTIME_004 = "RUNTIME-004";
const RUNTIME_005 = "RUNTIME-005";
const RUNTIME_006 = "RUNTIME-006";
const RUNTIME_007 = "RUNTIME-007";
const RUNTIME_008 = "RUNTIME-008";
const RUNTIME_009 = "RUNTIME-009";
const RUNTIME_010 = "RUNTIME-010";
const RUNTIME_011 = "RUNTIME-011";
const TYPE_001 = "TYPE-001";
const BUILD_001 = "BUILD-001";
const BUILD_002 = "BUILD-002";

//#endregion
errorCodes.BUILD_001 = BUILD_001;
errorCodes.BUILD_002 = BUILD_002;
errorCodes.RUNTIME_001 = RUNTIME_001;
errorCodes.RUNTIME_002 = RUNTIME_002;
errorCodes.RUNTIME_003 = RUNTIME_003;
errorCodes.RUNTIME_004 = RUNTIME_004;
errorCodes.RUNTIME_005 = RUNTIME_005;
errorCodes.RUNTIME_006 = RUNTIME_006;
errorCodes.RUNTIME_007 = RUNTIME_007;
errorCodes.RUNTIME_008 = RUNTIME_008;
errorCodes.RUNTIME_009 = RUNTIME_009;
errorCodes.RUNTIME_010 = RUNTIME_010;
errorCodes.RUNTIME_011 = RUNTIME_011;
errorCodes.TYPE_001 = TYPE_001;

var desc = {};

const require_error_codes = errorCodes;

//#region src/desc.ts
const runtimeDescMap = {
	[require_error_codes.RUNTIME_001]: "Failed to get remoteEntry exports.",
	[require_error_codes.RUNTIME_002]: "The remote entry interface does not contain \"init\"",
	[require_error_codes.RUNTIME_003]: "Failed to get manifest.",
	[require_error_codes.RUNTIME_004]: "Failed to locate remote.",
	[require_error_codes.RUNTIME_005]: "Invalid loadShareSync function call from bundler runtime",
	[require_error_codes.RUNTIME_006]: "Invalid loadShareSync function call from runtime",
	[require_error_codes.RUNTIME_007]: "Failed to get remote snapshot.",
	[require_error_codes.RUNTIME_008]: "Failed to load script resources.",
	[require_error_codes.RUNTIME_009]: "Please call createInstance first.",
	[require_error_codes.RUNTIME_010]: "The name option cannot be changed after initialization. If you want to create a new instance with a different name, please use \"createInstance\" api.",
	[require_error_codes.RUNTIME_011]: "The remoteEntry URL is missing from the remote snapshot."
};
const typeDescMap = { [require_error_codes.TYPE_001]: "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error." };
const buildDescMap = {
	[require_error_codes.BUILD_001]: "Failed to find expose module.",
	[require_error_codes.BUILD_002]: "PublicPath is required in prod mode."
};
const errorDescMap = {
	...runtimeDescMap,
	...typeDescMap,
	...buildDescMap
};

//#endregion
desc.buildDescMap = buildDescMap;
desc.errorDescMap = errorDescMap;
desc.runtimeDescMap = runtimeDescMap;
desc.typeDescMap = typeDescMap;

(function (exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	const require_error_codes = errorCodes;
	const require_getShortErrorMsg = getShortErrorMsg$1;
	const require_desc = desc;

	exports.BUILD_001 = require_error_codes.BUILD_001;
	exports.BUILD_002 = require_error_codes.BUILD_002;
	exports.RUNTIME_001 = require_error_codes.RUNTIME_001;
	exports.RUNTIME_002 = require_error_codes.RUNTIME_002;
	exports.RUNTIME_003 = require_error_codes.RUNTIME_003;
	exports.RUNTIME_004 = require_error_codes.RUNTIME_004;
	exports.RUNTIME_005 = require_error_codes.RUNTIME_005;
	exports.RUNTIME_006 = require_error_codes.RUNTIME_006;
	exports.RUNTIME_007 = require_error_codes.RUNTIME_007;
	exports.RUNTIME_008 = require_error_codes.RUNTIME_008;
	exports.RUNTIME_009 = require_error_codes.RUNTIME_009;
	exports.RUNTIME_010 = require_error_codes.RUNTIME_010;
	exports.RUNTIME_011 = require_error_codes.RUNTIME_011;
	exports.TYPE_001 = require_error_codes.TYPE_001;
	exports.buildDescMap = require_desc.buildDescMap;
	exports.errorDescMap = require_desc.errorDescMap;
	exports.getShortErrorMsg = require_getShortErrorMsg.getShortErrorMsg;
	exports.runtimeDescMap = require_desc.runtimeDescMap;
	exports.typeDescMap = require_desc.typeDescMap; 
} (dist));

const require_logger$a = logger$3;
const require_global$5 = global;
const require_constant$3 = constant;
let _module_federation_sdk$7 = dist$1;
let _module_federation_error_codes$6 = dist;
const importCallback = ".then(callbacks[0]).catch(callbacks[1])";
async function loadEsmEntry({ entry, remoteEntryExports }) {
  return new Promise((resolve, reject) => {
    try {
      if (!remoteEntryExports) if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== "undefined") new Function("callbacks", `import("${entry}")${importCallback}`)([resolve, reject]);
      else import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        entry
      ).then(resolve).catch(reject);
      else resolve(remoteEntryExports);
    } catch (e) {
      require_logger$a.error(`Failed to load ESM entry from "${entry}". ${e instanceof Error ? e.message : String(e)}`);
    }
  });
}
async function loadSystemJsEntry({ entry, remoteEntryExports }) {
  return new Promise((resolve, reject) => {
    try {
      if (!remoteEntryExports) if (typeof __system_context__ === "undefined") System.import(entry).then(resolve).catch(reject);
      else new Function("callbacks", `System.import("${entry}")${importCallback}`)([resolve, reject]);
      else resolve(remoteEntryExports);
    } catch (e) {
      require_logger$a.error(`Failed to load SystemJS entry from "${entry}". ${e instanceof Error ? e.message : String(e)}`);
    }
  });
}
function handleRemoteEntryLoaded(name, globalName, entry) {
  const { remoteEntryKey, entryExports } = require_global$5.getRemoteEntryExports(name, globalName);
  if (!entryExports) require_logger$a.error(_module_federation_error_codes$6.RUNTIME_001, _module_federation_error_codes$6.runtimeDescMap, {
    remoteName: name,
    remoteEntryUrl: entry,
    remoteEntryKey
  });
  return entryExports;
}
async function loadEntryScript({ name, globalName, entry, loaderHook, getEntryUrl }) {
  const { entryExports: remoteEntryExports } = require_global$5.getRemoteEntryExports(name, globalName);
  if (remoteEntryExports) return remoteEntryExports;
  const url = getEntryUrl ? getEntryUrl(entry) : entry;
  return (0, _module_federation_sdk$7.loadScript)(url, {
    attrs: {},
    createScriptHook: (url2, attrs) => {
      const res = loaderHook.lifecycle.createScript.emit({
        url: url2,
        attrs
      });
      if (!res) return;
      if (res instanceof HTMLScriptElement) return res;
      if ("script" in res || "timeout" in res) return res;
    }
  }).then(() => {
    return handleRemoteEntryLoaded(name, globalName, entry);
  }, (loadError) => {
    const originalMsg = loadError instanceof Error ? loadError.message : String(loadError);
    require_logger$a.error(_module_federation_error_codes$6.RUNTIME_008, _module_federation_error_codes$6.runtimeDescMap, {
      remoteName: name,
      resourceUrl: url
    }, originalMsg);
  });
}
async function loadEntryDom({ remoteInfo, remoteEntryExports, loaderHook, getEntryUrl }) {
  const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
  switch (type) {
    case "esm":
    case "module":
      return loadEsmEntry({
        entry,
        remoteEntryExports
      });
    case "system":
      return loadSystemJsEntry({
        entry,
        remoteEntryExports
      });
    default:
      return loadEntryScript({
        entry,
        globalName,
        name,
        loaderHook,
        getEntryUrl
      });
  }
}
function getRemoteEntryUniqueKey(remoteInfo) {
  const { entry, name } = remoteInfo;
  return (0, _module_federation_sdk$7.composeKeyWithSeparator)(name, entry);
}
async function getRemoteEntry(params) {
  const { origin, remoteEntryExports, remoteInfo, getEntryUrl, _inErrorHandling = false } = params;
  const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
  if (remoteEntryExports) return remoteEntryExports;
  if (!require_global$5.globalLoading[uniqueKey]) {
    const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
    const loaderHook = origin.loaderHook;
    require_global$5.globalLoading[uniqueKey] = loadEntryHook.emit({
      loaderHook,
      remoteInfo,
      remoteEntryExports
    }).then((res) => {
      if (res) return res;
      return loadEntryDom({
        remoteInfo,
        remoteEntryExports,
        loaderHook,
        getEntryUrl
      }) ;
    }).catch(async (err) => {
      const uniqueKey2 = getRemoteEntryUniqueKey(remoteInfo);
      const isScriptExecutionError = err instanceof Error && err.message.includes("ScriptExecutionError");
      if (err instanceof Error && err.message.includes(_module_federation_error_codes$6.RUNTIME_008) && !isScriptExecutionError && !_inErrorHandling) {
        const wrappedGetRemoteEntry = (params2) => {
          return getRemoteEntry({
            ...params2,
            _inErrorHandling: true
          });
        };
        const RemoteEntryExports = await origin.loaderHook.lifecycle.loadEntryError.emit({
          getRemoteEntry: wrappedGetRemoteEntry,
          origin,
          remoteInfo,
          remoteEntryExports,
          globalLoading: require_global$5.globalLoading,
          uniqueKey: uniqueKey2
        });
        if (RemoteEntryExports) return RemoteEntryExports;
      }
      throw err;
    });
  }
  return require_global$5.globalLoading[uniqueKey];
}
function getRemoteInfo(remote) {
  return {
    ...remote,
    entry: "entry" in remote ? remote.entry : "",
    type: remote.type || require_constant$3.DEFAULT_REMOTE_TYPE,
    entryGlobalName: remote.entryGlobalName || remote.name,
    shareScope: remote.shareScope || require_constant$3.DEFAULT_SCOPE
  };
}
load.getRemoteEntry = getRemoteEntry;
load.getRemoteEntryUniqueKey = getRemoteEntryUniqueKey;
load.getRemoteInfo = getRemoteInfo;

var env = {};

//#region src/utils/env.ts
function getBuilderId$1() {
	return typeof FEDERATION_BUILD_IDENTIFIER !== "undefined" ? FEDERATION_BUILD_IDENTIFIER : "";
}

//#endregion
env.getBuilderId = getBuilderId$1;

var plugin = {};

const require_global$4 = global;

//#region src/utils/plugin.ts
function registerPlugins(plugins, instance) {
	const globalPlugins = require_global$4.getGlobalHostPlugins();
	const hookInstances = [
		instance.hooks,
		instance.remoteHandler.hooks,
		instance.sharedHandler.hooks,
		instance.snapshotHandler.hooks,
		instance.loaderHook,
		instance.bridgeHook
	];
	if (globalPlugins.length > 0) globalPlugins.forEach((plugin) => {
		if (plugins?.find((item) => item.name !== plugin.name)) plugins.push(plugin);
	});
	if (plugins && plugins.length > 0) plugins.forEach((plugin) => {
		hookInstances.forEach((hookInstance) => {
			hookInstance.applyPlugin(plugin, instance);
		});
	});
	return plugins;
}

//#endregion
plugin.registerPlugins = registerPlugins;

var context = {};

//#region src/utils/context.ts
function remoteToEntry(r) {
	return {
		name: r.name,
		alias: r.alias,
		entry: "entry" in r ? r.entry : void 0,
		version: "version" in r ? r.version : void 0,
		type: r.type,
		entryGlobalName: r.entryGlobalName,
		shareScope: r.shareScope
	};
}
/**
* Build a partial MFContext from runtime Options.
* Used to enrich diagnostic entries with host context at error sites.
*/
function optionsToMFContext(options) {
	const shared = {};
	for (const [pkgName, versions] of Object.entries(options.shared)) {
		const first = versions[0];
		if (first) shared[pkgName] = {
			version: first.version,
			singleton: first.shareConfig?.singleton,
			requiredVersion: first.shareConfig?.requiredVersion === false ? false : first.shareConfig?.requiredVersion,
			eager: first.eager,
			strictVersion: first.shareConfig?.strictVersion
		};
	}
	return {
		project: {
			name: options.name,
			mfRole: options.remotes?.length > 0 ? "host" : "unknown"
		},
		mfConfig: {
			name: options.name,
			remotes: options.remotes?.map(remoteToEntry) ?? [],
			shared
		}
	};
}

//#endregion
context.optionsToMFContext = optionsToMFContext;

var helpers = {};

var preload = {};

const require_logger$9 = logger$3;
const require_manifest$2 = manifest;
const require_load$4 = load;
let _module_federation_sdk$6 = dist$1;

//#region src/utils/preload.ts
function defaultPreloadArgs(preloadConfig) {
	return {
		resourceCategory: "sync",
		share: true,
		depsRemote: true,
		prefetchInterface: false,
		...preloadConfig
	};
}
function formatPreloadArgs(remotes, preloadArgs) {
	return preloadArgs.map((args) => {
		const remoteInfo = require_manifest$2.matchRemote(remotes, args.nameOrAlias);
		require_logger$9.assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && (0, _module_federation_sdk$6.safeToString)({
			remoteInfo,
			remotes
		})}`);
		return {
			remote: remoteInfo,
			preloadConfig: defaultPreloadArgs(args)
		};
	});
}
function normalizePreloadExposes(exposes) {
	if (!exposes) return [];
	return exposes.map((expose) => {
		if (expose === ".") return expose;
		if (expose.startsWith("./")) return expose.replace("./", "");
		return expose;
	});
}
function preloadAssets(remoteInfo, host, assets, useLinkPreload = true) {
	const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
	if (host.options.inBrowser) {
		entryAssets.forEach((asset) => {
			const { moduleInfo } = asset;
			const module = host.moduleCache.get(remoteInfo.name);
			if (module) require_load$4.getRemoteEntry({
				origin: host,
				remoteInfo: moduleInfo,
				remoteEntryExports: module.remoteEntryExports
			});
			else require_load$4.getRemoteEntry({
				origin: host,
				remoteInfo: moduleInfo,
				remoteEntryExports: void 0
			});
		});
		if (useLinkPreload) {
			const defaultAttrs = {
				rel: "preload",
				as: "style"
			};
			cssAssets.forEach((cssUrl) => {
				const { link: cssEl, needAttach } = (0, _module_federation_sdk$6.createLink)({
					url: cssUrl,
					cb: () => {},
					attrs: defaultAttrs,
					createLinkHook: (url, attrs) => {
						const res = host.loaderHook.lifecycle.createLink.emit({
							url,
							attrs
						});
						if (res instanceof HTMLLinkElement) return res;
					}
				});
				needAttach && document.head.appendChild(cssEl);
			});
		} else {
			const defaultAttrs = {
				rel: "stylesheet",
				type: "text/css"
			};
			cssAssets.forEach((cssUrl) => {
				const { link: cssEl, needAttach } = (0, _module_federation_sdk$6.createLink)({
					url: cssUrl,
					cb: () => {},
					attrs: defaultAttrs,
					createLinkHook: (url, attrs) => {
						const res = host.loaderHook.lifecycle.createLink.emit({
							url,
							attrs
						});
						if (res instanceof HTMLLinkElement) return res;
					},
					needDeleteLink: false
				});
				needAttach && document.head.appendChild(cssEl);
			});
		}
		if (useLinkPreload) {
			const defaultAttrs = {
				rel: "preload",
				as: "script"
			};
			jsAssetsWithoutEntry.forEach((jsUrl) => {
				const { link: linkEl, needAttach } = (0, _module_federation_sdk$6.createLink)({
					url: jsUrl,
					cb: () => {},
					attrs: defaultAttrs,
					createLinkHook: (url, attrs) => {
						const res = host.loaderHook.lifecycle.createLink.emit({
							url,
							attrs
						});
						if (res instanceof HTMLLinkElement) return res;
					}
				});
				needAttach && document.head.appendChild(linkEl);
			});
		} else {
			const defaultAttrs = {
				fetchpriority: "high",
				type: remoteInfo?.type === "module" ? "module" : "text/javascript"
			};
			jsAssetsWithoutEntry.forEach((jsUrl) => {
				const { script: scriptEl, needAttach } = (0, _module_federation_sdk$6.createScript)({
					url: jsUrl,
					cb: () => {},
					attrs: defaultAttrs,
					createScriptHook: (url, attrs) => {
						const res = host.loaderHook.lifecycle.createScript.emit({
							url,
							attrs
						});
						if (res instanceof HTMLScriptElement) return res;
					},
					needDeleteScript: true
				});
				needAttach && document.head.appendChild(scriptEl);
			});
		}
	}
}

//#endregion
preload.defaultPreloadArgs = defaultPreloadArgs;
preload.formatPreloadArgs = formatPreloadArgs;
preload.normalizePreloadExposes = normalizePreloadExposes;
preload.preloadAssets = preloadAssets;

const require_global$3 = global;
const require_share$4 = share;
const require_manifest$1 = manifest;
const require_load$3 = load;

const require_preload$3 = preload;

//#region src/helpers.ts
const ShareUtils = {
	getRegisteredShare: require_share$4.getRegisteredShare,
	getGlobalShareScope: require_share$4.getGlobalShareScope
};
const GlobalUtils = {
	Global: require_global$3.Global,
	nativeGlobal: require_global$3.nativeGlobal,
	resetFederationGlobalInfo: require_global$3.resetFederationGlobalInfo,
	setGlobalFederationInstance: require_global$3.setGlobalFederationInstance,
	getGlobalFederationConstructor: require_global$3.getGlobalFederationConstructor,
	setGlobalFederationConstructor: require_global$3.setGlobalFederationConstructor,
	getInfoWithoutType: require_global$3.getInfoWithoutType,
	getGlobalSnapshot: require_global$3.getGlobalSnapshot,
	getTargetSnapshotInfoByModuleInfo: require_global$3.getTargetSnapshotInfoByModuleInfo,
	getGlobalSnapshotInfoByModuleInfo: require_global$3.getGlobalSnapshotInfoByModuleInfo,
	setGlobalSnapshotInfoByModuleInfo: require_global$3.setGlobalSnapshotInfoByModuleInfo,
	addGlobalSnapshot: require_global$3.addGlobalSnapshot,
	getRemoteEntryExports: require_global$3.getRemoteEntryExports,
	registerGlobalPlugins: require_global$3.registerGlobalPlugins,
	getGlobalHostPlugins: require_global$3.getGlobalHostPlugins,
	getPreloaded: require_global$3.getPreloaded,
	setPreloaded: require_global$3.setPreloaded
};
var helpers_default = {
	global: GlobalUtils,
	share: ShareUtils,
	utils: {
		matchRemoteWithNameAndExpose: require_manifest$1.matchRemoteWithNameAndExpose,
		preloadAssets: require_preload$3.preloadAssets,
		getRemoteInfo: require_load$3.getRemoteInfo
	}
};

//#endregion
helpers.default = helpers_default;

var module$1 = {};

const require_logger$8 = logger$3;
const require_tool$6 = tool;
const require_load$2 = load;
const require_context$3 = context;

let _module_federation_sdk$5 = dist$1;
let _module_federation_error_codes$5 = dist;

//#region src/module/index.ts
function createRemoteEntryInitOptions(remoteInfo, hostShareScopeMap, rawInitScope) {
	const localShareScopeMap = hostShareScopeMap;
	const shareScopeKeys = Array.isArray(remoteInfo.shareScope) ? remoteInfo.shareScope : [remoteInfo.shareScope];
	if (!shareScopeKeys.length) shareScopeKeys.push("default");
	shareScopeKeys.forEach((shareScopeKey) => {
		if (!localShareScopeMap[shareScopeKey]) localShareScopeMap[shareScopeKey] = {};
	});
	const remoteEntryInitOptions = {
		version: remoteInfo.version || "",
		shareScopeKeys: Array.isArray(remoteInfo.shareScope) ? shareScopeKeys : remoteInfo.shareScope || "default"
	};
	Object.defineProperty(remoteEntryInitOptions, "shareScopeMap", {
		value: localShareScopeMap,
		enumerable: false
	});
	return {
		remoteEntryInitOptions,
		shareScope: localShareScopeMap[shareScopeKeys[0]],
		initScope: rawInitScope ?? []
	};
}
var Module = class {
	constructor({ remoteInfo, host }) {
		this.inited = false;
		this.initing = false;
		this.lib = void 0;
		this.remoteInfo = remoteInfo;
		this.host = host;
	}
	async getEntry() {
		if (this.remoteEntryExports) return this.remoteEntryExports;
		const remoteEntryExports = await require_load$2.getRemoteEntry({
			origin: this.host,
			remoteInfo: this.remoteInfo,
			remoteEntryExports: this.remoteEntryExports
		});
		require_logger$8.assert(remoteEntryExports, `remoteEntryExports is undefined \n ${(0, _module_federation_sdk$5.safeToString)(this.remoteInfo)}`);
		this.remoteEntryExports = remoteEntryExports;
		return this.remoteEntryExports;
	}
	async init(id, remoteSnapshot, rawInitScope) {
		const remoteEntryExports = await this.getEntry();
		if (this.inited) return remoteEntryExports;
		if (this.initPromise) {
			await this.initPromise;
			return remoteEntryExports;
		}
		this.initing = true;
		this.initPromise = (async () => {
			const { remoteEntryInitOptions, shareScope, initScope } = createRemoteEntryInitOptions(this.remoteInfo, this.host.shareScopeMap, rawInitScope);
			const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
				shareScope,
				remoteEntryInitOptions,
				initScope,
				remoteInfo: this.remoteInfo,
				origin: this.host
			});
			if (typeof remoteEntryExports?.init === "undefined") require_logger$8.error(_module_federation_error_codes$5.RUNTIME_002, _module_federation_error_codes$5.runtimeDescMap, {
				hostName: this.host.name,
				remoteName: this.remoteInfo.name,
				remoteEntryUrl: this.remoteInfo.entry,
				remoteEntryKey: this.remoteInfo.entryGlobalName
			}, void 0, require_context$3.optionsToMFContext(this.host.options));
			await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
			await this.host.hooks.lifecycle.initContainer.emit({
				...initContainerOptions,
				id,
				remoteSnapshot,
				remoteEntryExports
			});
			this.inited = true;
		})();
		try {
			await this.initPromise;
		} finally {
			this.initing = false;
			this.initPromise = void 0;
		}
		return remoteEntryExports;
	}
	async get(id, expose, options, remoteSnapshot) {
		const { loadFactory = true } = options || { loadFactory: true };
		const remoteEntryExports = await this.init(id, remoteSnapshot);
		this.lib = remoteEntryExports;
		let moduleFactory;
		moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
			remoteEntryExports,
			expose,
			moduleInfo: this.remoteInfo
		});
		if (!moduleFactory) moduleFactory = await remoteEntryExports.get(expose);
		require_logger$8.assert(moduleFactory, `${require_tool$6.getFMId(this.remoteInfo)} remote don't export ${expose}.`);
		const symbolName = require_tool$6.processModuleAlias(this.remoteInfo.name, expose);
		const wrapModuleFactory = this.wraperFactory(moduleFactory, symbolName);
		if (!loadFactory) return wrapModuleFactory;
		return await wrapModuleFactory();
	}
	wraperFactory(moduleFactory, id) {
		function defineModuleId(res, id) {
			if (res && typeof res === "object" && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for("mf_module_id"))) Object.defineProperty(res, Symbol.for("mf_module_id"), {
				value: id,
				enumerable: false
			});
		}
		if (moduleFactory instanceof Promise) return async () => {
			const res = await moduleFactory();
			defineModuleId(res, id);
			return res;
		};
		else return () => {
			const res = moduleFactory();
			defineModuleId(res, id);
			return res;
		};
	}
};

//#endregion
module$1.Module = Module;

var core = {};

var syncHook = {};

//#region src/utils/hooks/syncHook.ts
var SyncHook = class {
	constructor(type) {
		this.type = "";
		this.listeners = /* @__PURE__ */ new Set();
		if (type) this.type = type;
	}
	on(fn) {
		if (typeof fn === "function") this.listeners.add(fn);
	}
	once(fn) {
		const self = this;
		this.on(function wrapper(...args) {
			self.remove(wrapper);
			return fn.apply(null, args);
		});
	}
	emit(...data) {
		let result;
		if (this.listeners.size > 0) this.listeners.forEach((fn) => {
			result = fn(...data);
		});
		return result;
	}
	remove(fn) {
		this.listeners.delete(fn);
	}
	removeAll() {
		this.listeners.clear();
	}
};

//#endregion
syncHook.SyncHook = SyncHook;

var asyncHook = {};

const require_syncHook$4 = syncHook;

//#region src/utils/hooks/asyncHook.ts
var AsyncHook = class extends require_syncHook$4.SyncHook {
	emit(...data) {
		let result;
		const ls = Array.from(this.listeners);
		if (ls.length > 0) {
			let i = 0;
			const call = (prev) => {
				if (prev === false) return false;
				else if (i < ls.length) return Promise.resolve(ls[i++].apply(null, data)).then(call);
				else return prev;
			};
			result = call();
		}
		return Promise.resolve(result);
	}
};

//#endregion
asyncHook.AsyncHook = AsyncHook;

var syncWaterfallHook = {};

const require_logger$7 = logger$3;
const require_tool$5 = tool;
const require_syncHook$3 = syncHook;

//#region src/utils/hooks/syncWaterfallHook.ts
function checkReturnData(originalData, returnedData) {
	if (!require_tool$5.isObject(returnedData)) return false;
	if (originalData !== returnedData) {
		for (const key in originalData) if (!(key in returnedData)) return false;
	}
	return true;
}
var SyncWaterfallHook = class extends require_syncHook$3.SyncHook {
	constructor(type) {
		super();
		this.onerror = require_logger$7.error;
		this.type = type;
	}
	emit(data) {
		if (!require_tool$5.isObject(data)) require_logger$7.error(`The data for the "${this.type}" hook should be an object.`);
		for (const fn of this.listeners) try {
			const tempData = fn(data);
			if (checkReturnData(data, tempData)) data = tempData;
			else {
				this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
				break;
			}
		} catch (e) {
			require_logger$7.warn(e);
			this.onerror(e);
		}
		return data;
	}
};

//#endregion
syncWaterfallHook.SyncWaterfallHook = SyncWaterfallHook;
syncWaterfallHook.checkReturnData = checkReturnData;

var asyncWaterfallHooks = {};

const require_logger$6 = logger$3;
const require_tool$4 = tool;
const require_syncHook$2 = syncHook;
const require_syncWaterfallHook$3 = syncWaterfallHook;

//#region src/utils/hooks/asyncWaterfallHooks.ts
var AsyncWaterfallHook = class extends require_syncHook$2.SyncHook {
	constructor(type) {
		super();
		this.onerror = require_logger$6.error;
		this.type = type;
	}
	emit(data) {
		if (!require_tool$4.isObject(data)) require_logger$6.error(`The response data for the "${this.type}" hook must be an object.`);
		const ls = Array.from(this.listeners);
		if (ls.length > 0) {
			let i = 0;
			const processError = (e) => {
				require_logger$6.warn(e);
				this.onerror(e);
				return data;
			};
			const call = (prevData) => {
				if (require_syncWaterfallHook$3.checkReturnData(data, prevData)) {
					data = prevData;
					if (i < ls.length) try {
						return Promise.resolve(ls[i++](data)).then(call, processError);
					} catch (e) {
						return processError(e);
					}
				} else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
				return data;
			};
			return Promise.resolve(call(data));
		}
		return Promise.resolve(data);
	}
};

//#endregion
asyncWaterfallHooks.AsyncWaterfallHook = AsyncWaterfallHook;

var pluginSystem = {};

const require_logger$5 = logger$3;
const require_tool$3 = tool;


//#region src/utils/hooks/pluginSystem.ts
var PluginSystem = class {
	constructor(lifecycle) {
		this.registerPlugins = {};
		this.lifecycle = lifecycle;
		this.lifecycleKeys = Object.keys(lifecycle);
	}
	applyPlugin(plugin, instance) {
		require_logger$5.assert(require_tool$3.isPlainObject(plugin), "Plugin configuration is invalid.");
		const pluginName = plugin.name;
		require_logger$5.assert(pluginName, "A name must be provided by the plugin.");
		if (!this.registerPlugins[pluginName]) {
			this.registerPlugins[pluginName] = plugin;
			plugin.apply?.(instance);
			Object.keys(this.lifecycle).forEach((key) => {
				const pluginLife = plugin[key];
				if (pluginLife) this.lifecycle[key].on(pluginLife);
			});
		}
	}
	removePlugin(pluginName) {
		require_logger$5.assert(pluginName, "A name is required.");
		const plugin = this.registerPlugins[pluginName];
		require_logger$5.assert(plugin, `The plugin "${pluginName}" is not registered.`);
		Object.keys(plugin).forEach((key) => {
			if (key !== "name") this.lifecycle[key].remove(plugin[key]);
		});
	}
};

//#endregion
pluginSystem.PluginSystem = PluginSystem;

var snapshot = {};

const require_logger$4 = logger$3;
const require_tool$2 = tool;

const require_preload$2 = preload;
let _module_federation_sdk$4 = dist$1;
let _module_federation_error_codes$4 = dist;

//#region src/plugins/snapshot/index.ts
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
	const remoteEntryInfo = require_tool$2.getRemoteEntryInfoFromSnapshot(remoteSnapshot);
	if (!remoteEntryInfo.url) require_logger$4.error(_module_federation_error_codes$4.RUNTIME_011, _module_federation_error_codes$4.runtimeDescMap, { remoteName: remoteInfo.name });
	let entryUrl = (0, _module_federation_sdk$4.getResourceUrl)(remoteSnapshot, remoteEntryInfo.url);
	if (!_module_federation_sdk$4.isBrowserEnvValue && !entryUrl.startsWith("http")) entryUrl = `https:${entryUrl}`;
	remoteInfo.type = remoteEntryInfo.type;
	remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
	remoteInfo.entry = entryUrl;
	remoteInfo.version = remoteSnapshot.version;
	remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
	return {
		name: "snapshot-plugin",
		async afterResolve(args) {
			const { remote, pkgNameOrAlias, expose, origin, remoteInfo, id } = args;
			if (!require_tool$2.isRemoteInfoWithEntry(remote) || !require_tool$2.isPureRemoteEntry(remote)) {
				const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo({
					moduleInfo: remote,
					id
				});
				assignRemoteInfo(remoteInfo, remoteSnapshot);
				const preloadOptions = {
					remote,
					preloadConfig: {
						nameOrAlias: pkgNameOrAlias,
						exposes: [expose],
						resourceCategory: "sync",
						share: false,
						depsRemote: false
					}
				};
				const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
					origin,
					preloadOptions,
					remoteInfo,
					remote,
					remoteSnapshot,
					globalSnapshot
				});
				if (assets) require_preload$2.preloadAssets(remoteInfo, origin, assets, false);
				return {
					...args,
					remoteSnapshot
				};
			}
			return args;
		}
	};
}

//#endregion
snapshot.assignRemoteInfo = assignRemoteInfo;
snapshot.snapshotPlugin = snapshotPlugin;

var generatePreloadAssets$1 = {};

const require_tool$1 = tool;
const require_global$2 = global;
const require_share$3 = share;

const require_preload$1 = preload;
const require_index$1$2 = snapshot;
let _module_federation_sdk$3 = dist$1;

//#region src/plugins/generate-preload-assets.ts
function splitId(id) {
	const splitInfo = id.split(":");
	if (splitInfo.length === 1) return {
		name: splitInfo[0],
		version: void 0
	};
	else if (splitInfo.length === 2) return {
		name: splitInfo[0],
		version: splitInfo[1]
	};
	else return {
		name: splitInfo[1],
		version: splitInfo[2]
	};
}
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
	const { value: snapshotValue } = require_global$2.getInfoWithoutType(globalSnapshot, require_tool$1.getFMId(remoteInfo));
	const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
	if (effectiveRemoteSnapshot && !(0, _module_federation_sdk$3.isManifestProvider)(effectiveRemoteSnapshot)) {
		traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
		if (effectiveRemoteSnapshot.remotesInfo) {
			const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
			for (const key of remoteKeys) {
				if (memo[key]) continue;
				memo[key] = true;
				const subRemoteInfo = splitId(key);
				const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
				traverseModuleInfo(globalSnapshot, {
					name: subRemoteInfo.name,
					version: remoteValue.matchedVersion
				}, traverse, false, memo, void 0);
			}
		}
	}
}
const isExisted = (type, url) => {
	return document.querySelector(`${type}[${type === "link" ? "href" : "src"}="${url}"]`);
};
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
	const cssAssets = [];
	const jsAssets = [];
	const entryAssets = [];
	const loadedSharedJsAssets = /* @__PURE__ */ new Set();
	const loadedSharedCssAssets = /* @__PURE__ */ new Set();
	const { options } = origin;
	const { preloadConfig: rootPreloadConfig } = preloadOptions;
	const { depsRemote } = rootPreloadConfig;
	traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot) => {
		let preloadConfig;
		if (isRoot) preloadConfig = rootPreloadConfig;
		else if (Array.isArray(depsRemote)) {
			const findPreloadConfig = depsRemote.find((remoteConfig) => {
				if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) return true;
				return false;
			});
			if (!findPreloadConfig) return;
			preloadConfig = require_preload$1.defaultPreloadArgs(findPreloadConfig);
		} else if (depsRemote === true) preloadConfig = rootPreloadConfig;
		else return;
		const remoteEntryUrl = (0, _module_federation_sdk$3.getResourceUrl)(moduleInfoSnapshot, require_tool$1.getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
		if (remoteEntryUrl) entryAssets.push({
			name: remoteInfo.name,
			moduleInfo: {
				name: remoteInfo.name,
				entry: remoteEntryUrl,
				type: "remoteEntryType" in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : "global",
				entryGlobalName: "globalName" in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
				shareScope: "",
				version: "version" in moduleInfoSnapshot ? moduleInfoSnapshot.version : void 0
			},
			url: remoteEntryUrl
		});
		let moduleAssetsInfo = "modules" in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
		const normalizedPreloadExposes = require_preload$1.normalizePreloadExposes(preloadConfig.exposes);
		if (normalizedPreloadExposes.length && "modules" in moduleInfoSnapshot) moduleAssetsInfo = moduleInfoSnapshot?.modules?.reduce((assets, moduleAssetInfo) => {
			if (normalizedPreloadExposes?.indexOf(moduleAssetInfo.moduleName) !== -1) assets.push(moduleAssetInfo);
			return assets;
		}, []);
		function handleAssets(assets) {
			const assetsRes = assets.map((asset) => (0, _module_federation_sdk$3.getResourceUrl)(moduleInfoSnapshot, asset));
			if (preloadConfig.filter) return assetsRes.filter(preloadConfig.filter);
			return assetsRes;
		}
		if (moduleAssetsInfo) {
			const assetsLength = moduleAssetsInfo.length;
			for (let index = 0; index < assetsLength; index++) {
				const assetsInfo = moduleAssetsInfo[index];
				const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
				origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
					id: assetsInfo.moduleName === "." ? remoteInfo.name : exposeFullPath,
					name: remoteInfo.name,
					remoteSnapshot: moduleInfoSnapshot,
					preloadConfig,
					remote: remoteInfo,
					origin
				});
				if (require_global$2.getPreloaded(exposeFullPath)) continue;
				if (preloadConfig.resourceCategory === "all") {
					cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
					cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
					jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
					jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
				} else if (preloadConfig.resourceCategory === "sync") {
					cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
					jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
				}
				require_global$2.setPreloaded(exposeFullPath);
			}
		}
	}, true, {}, remoteSnapshot);
	if (remoteSnapshot.shared && remoteSnapshot.shared.length > 0) {
		const collectSharedAssets = (shareInfo, snapshotShared) => {
			const { shared: registeredShared } = require_share$3.getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare) || {};
			if (registeredShared && typeof registeredShared.lib === "function") {
				snapshotShared.assets.js.sync.forEach((asset) => {
					loadedSharedJsAssets.add(asset);
				});
				snapshotShared.assets.css.sync.forEach((asset) => {
					loadedSharedCssAssets.add(asset);
				});
			}
		};
		remoteSnapshot.shared.forEach((shared) => {
			const shareInfos = options.shared?.[shared.sharedName];
			if (!shareInfos) return;
			const sharedOptions = shared.version ? shareInfos.find((s) => s.version === shared.version) : shareInfos;
			if (!sharedOptions) return;
			require_tool$1.arrayOptions(sharedOptions).forEach((s) => {
				collectSharedAssets(s, shared);
			});
		});
	}
	const needPreloadJsAssets = jsAssets.filter((asset) => !loadedSharedJsAssets.has(asset) && !isExisted("script", asset));
	return {
		cssAssets: cssAssets.filter((asset) => !loadedSharedCssAssets.has(asset) && !isExisted("link", asset)),
		jsAssetsWithoutEntry: needPreloadJsAssets,
		entryAssets: entryAssets.filter((entry) => !isExisted("script", entry.url))
	};
}
const generatePreloadAssetsPlugin = function() {
	return {
		name: "generate-preload-assets-plugin",
		async generatePreloadAssets(args) {
			const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
			if (!_module_federation_sdk$3.isBrowserEnvValue) return {
				cssAssets: [],
				jsAssetsWithoutEntry: [],
				entryAssets: []
			};
			if (require_tool$1.isRemoteInfoWithEntry(remote) && require_tool$1.isPureRemoteEntry(remote)) return {
				cssAssets: [],
				jsAssetsWithoutEntry: [],
				entryAssets: [{
					name: remote.name,
					url: remote.entry,
					moduleInfo: {
						name: remoteInfo.name,
						entry: remote.entry,
						type: remoteInfo.type || "global",
						entryGlobalName: "",
						shareScope: ""
					}
				}]
			};
			require_index$1$2.assignRemoteInfo(remoteInfo, remoteSnapshot);
			return generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
		}
	};
};

//#endregion
generatePreloadAssets$1.generatePreloadAssetsPlugin = generatePreloadAssetsPlugin;

var SnapshotHandler$1 = {};

const require_logger$3 = logger$3;
const require_tool = tool;
const require_global$1 = global;
const require_context$2 = context;

const require_asyncHook$3 = asyncHook;
const require_asyncWaterfallHooks$3 = asyncWaterfallHooks;
const require_pluginSystem$3 = pluginSystem;

let _module_federation_sdk$2 = dist$1;
let _module_federation_error_codes$3 = dist;

//#region src/plugins/snapshot/SnapshotHandler.ts
function getGlobalRemoteInfo(moduleInfo, origin) {
	const hostGlobalSnapshot = require_global$1.getGlobalSnapshotInfoByModuleInfo({
		name: origin.name,
		version: origin.options.version
	});
	const globalRemoteInfo = hostGlobalSnapshot && "remotesInfo" in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && require_global$1.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
	if (globalRemoteInfo && globalRemoteInfo.matchedVersion) return {
		hostGlobalSnapshot,
		globalSnapshot: require_global$1.getGlobalSnapshot(),
		remoteSnapshot: require_global$1.getGlobalSnapshotInfoByModuleInfo({
			name: moduleInfo.name,
			version: globalRemoteInfo.matchedVersion
		})
	};
	return {
		hostGlobalSnapshot: void 0,
		globalSnapshot: require_global$1.getGlobalSnapshot(),
		remoteSnapshot: require_global$1.getGlobalSnapshotInfoByModuleInfo({
			name: moduleInfo.name,
			version: "version" in moduleInfo ? moduleInfo.version : void 0
		})
	};
}
var SnapshotHandler = class {
	constructor(HostInstance) {
		this.loadingHostSnapshot = null;
		this.manifestCache = /* @__PURE__ */ new Map();
		this.hooks = new require_pluginSystem$3.PluginSystem({
			beforeLoadRemoteSnapshot: new require_asyncHook$3.AsyncHook("beforeLoadRemoteSnapshot"),
			loadSnapshot: new require_asyncWaterfallHooks$3.AsyncWaterfallHook("loadGlobalSnapshot"),
			loadRemoteSnapshot: new require_asyncWaterfallHooks$3.AsyncWaterfallHook("loadRemoteSnapshot"),
			afterLoadSnapshot: new require_asyncWaterfallHooks$3.AsyncWaterfallHook("afterLoadSnapshot")
		});
		this.manifestLoading = require_global$1.Global.__FEDERATION__.__MANIFEST_LOADING__;
		this.HostInstance = HostInstance;
		this.loaderHook = HostInstance.loaderHook;
	}
	async loadRemoteSnapshotInfo({ moduleInfo, id, expose }) {
		const { options } = this.HostInstance;
		await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
			options,
			moduleInfo
		});
		let hostSnapshot = require_global$1.getGlobalSnapshotInfoByModuleInfo({
			name: this.HostInstance.options.name,
			version: this.HostInstance.options.version
		});
		if (!hostSnapshot) {
			hostSnapshot = {
				version: this.HostInstance.options.version || "",
				remoteEntry: "",
				remotesInfo: {}
			};
			require_global$1.addGlobalSnapshot({ [this.HostInstance.options.name]: hostSnapshot });
		}
		if (hostSnapshot && "remotesInfo" in hostSnapshot && !require_global$1.getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
			if ("version" in moduleInfo || "entry" in moduleInfo) hostSnapshot.remotesInfo = {
				...hostSnapshot?.remotesInfo,
				[moduleInfo.name]: { matchedVersion: "version" in moduleInfo ? moduleInfo.version : moduleInfo.entry }
			};
		}
		const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
		const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
			options,
			moduleInfo,
			hostGlobalSnapshot,
			remoteSnapshot,
			globalSnapshot
		});
		let mSnapshot;
		let gSnapshot;
		if (globalRemoteSnapshot) if ((0, _module_federation_sdk$2.isManifestProvider)(globalRemoteSnapshot)) {
			const remoteEntry = _module_federation_sdk$2.isBrowserEnvValue ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || "";
			const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
			const globalSnapshotRes = require_global$1.setGlobalSnapshotInfoByModuleInfo({
				...moduleInfo,
				entry: remoteEntry
			}, moduleSnapshot);
			mSnapshot = moduleSnapshot;
			gSnapshot = globalSnapshotRes;
		} else {
			const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
				options: this.HostInstance.options,
				moduleInfo,
				remoteSnapshot: globalRemoteSnapshot,
				from: "global"
			});
			mSnapshot = remoteSnapshotRes;
			gSnapshot = globalSnapshotRes;
		}
		else if (require_tool.isRemoteInfoWithEntry(moduleInfo)) {
			const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
			const globalSnapshotRes = require_global$1.setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
			const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
				options: this.HostInstance.options,
				moduleInfo,
				remoteSnapshot: moduleSnapshot,
				from: "global"
			});
			mSnapshot = remoteSnapshotRes;
			gSnapshot = globalSnapshotRes;
		} else require_logger$3.error(_module_federation_error_codes$3.RUNTIME_007, _module_federation_error_codes$3.runtimeDescMap, {
			remoteName: moduleInfo.name,
			remoteVersion: moduleInfo.version,
			hostName: this.HostInstance.options.name,
			globalSnapshot: JSON.stringify(globalSnapshotRes)
		}, void 0, require_context$2.optionsToMFContext(this.HostInstance.options));
		await this.hooks.lifecycle.afterLoadSnapshot.emit({
			id,
			host: this.HostInstance,
			options,
			moduleInfo,
			remoteSnapshot: mSnapshot
		});
		return {
			remoteSnapshot: mSnapshot,
			globalSnapshot: gSnapshot
		};
	}
	getGlobalRemoteInfo(moduleInfo) {
		return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
	}
	async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
		const getManifest = async () => {
			let manifestJson = this.manifestCache.get(manifestUrl);
			if (manifestJson) return manifestJson;
			try {
				let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
				if (!res || !(res instanceof Response)) res = await fetch(manifestUrl, {});
				manifestJson = await res.json();
			} catch (err) {
				manifestJson = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
					id: manifestUrl,
					error: err,
					from: "runtime",
					lifecycle: "afterResolve",
					origin: this.HostInstance
				});
				if (!manifestJson) {
					delete this.manifestLoading[manifestUrl];
					require_logger$3.error(_module_federation_error_codes$3.RUNTIME_003, _module_federation_error_codes$3.runtimeDescMap, {
						manifestUrl,
						moduleName: moduleInfo.name,
						hostName: this.HostInstance.options.name
					}, `${err}`, require_context$2.optionsToMFContext(this.HostInstance.options));
				}
			}
			require_logger$3.assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `"${manifestUrl}" is not a valid federation manifest for remote "${moduleInfo.name}". Missing required fields: ${[
				!manifestJson.metaData && "metaData",
				!manifestJson.exposes && "exposes",
				!manifestJson.shared && "shared"
			].filter(Boolean).join(", ")}.`);
			this.manifestCache.set(manifestUrl, manifestJson);
			return manifestJson;
		};
		const asyncLoadProcess = async () => {
			const manifestJson = await getManifest();
			const remoteSnapshot = (0, _module_federation_sdk$2.generateSnapshotFromManifest)(manifestJson, { version: manifestUrl });
			const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
				options: this.HostInstance.options,
				moduleInfo,
				manifestJson,
				remoteSnapshot,
				manifestUrl,
				from: "manifest"
			});
			return remoteSnapshotRes;
		};
		if (!this.manifestLoading[manifestUrl]) this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res) => res);
		return this.manifestLoading[manifestUrl];
	}
};

//#endregion
SnapshotHandler$1.SnapshotHandler = SnapshotHandler;
SnapshotHandler$1.getGlobalRemoteInfo = getGlobalRemoteInfo;

var shared = {};

const require_logger$2 = logger$3;
const require_constant$2 = constant;
const require_share$2 = share;
const require_context$1 = context;

const require_asyncHook$2 = asyncHook;
const require_syncWaterfallHook$2 = syncWaterfallHook;
const require_asyncWaterfallHooks$2 = asyncWaterfallHooks;
const require_pluginSystem$2 = pluginSystem;

let _module_federation_error_codes$2 = dist;

//#region src/shared/index.ts
var SharedHandler = class {
	constructor(host) {
		this.hooks = new require_pluginSystem$2.PluginSystem({
			beforeRegisterShare: new require_syncWaterfallHook$2.SyncWaterfallHook("beforeRegisterShare"),
			afterResolve: new require_asyncWaterfallHooks$2.AsyncWaterfallHook("afterResolve"),
			beforeLoadShare: new require_asyncWaterfallHooks$2.AsyncWaterfallHook("beforeLoadShare"),
			loadShare: new require_asyncHook$2.AsyncHook(),
			resolveShare: new require_syncWaterfallHook$2.SyncWaterfallHook("resolveShare"),
			initContainerShareScopeMap: new require_syncWaterfallHook$2.SyncWaterfallHook("initContainerShareScopeMap")
		});
		this.host = host;
		this.shareScopeMap = {};
		this.initTokens = {};
		this._setGlobalShareScopeMap(host.options);
	}
	registerShared(globalOptions, userOptions) {
		const { newShareInfos, allShareInfos } = require_share$2.formatShareConfigs(globalOptions, userOptions);
		Object.keys(newShareInfos).forEach((sharedKey) => {
			newShareInfos[sharedKey].forEach((sharedVal) => {
				sharedVal.scope.forEach((sc) => {
					this.hooks.lifecycle.beforeRegisterShare.emit({
						origin: this.host,
						pkgName: sharedKey,
						shared: sharedVal
					});
					if (!this.shareScopeMap[sc]?.[sharedKey]) this.setShared({
						pkgName: sharedKey,
						lib: sharedVal.lib,
						get: sharedVal.get,
						loaded: sharedVal.loaded || Boolean(sharedVal.lib),
						shared: sharedVal,
						from: userOptions.name
					});
				});
			});
		});
		return {
			newShareInfos,
			allShareInfos
		};
	}
	async loadShare(pkgName, extraOptions) {
		const { host } = this;
		const shareOptions = require_share$2.getTargetSharedOptions({
			pkgName,
			extraOptions,
			shareInfos: host.options.shared
		});
		if (shareOptions?.scope) await Promise.all(shareOptions.scope.map(async (shareScope) => {
			await Promise.all(this.initializeSharing(shareScope, { strategy: shareOptions.strategy }));
		}));
		const { shareInfo: shareOptionsRes } = await this.hooks.lifecycle.beforeLoadShare.emit({
			pkgName,
			shareInfo: shareOptions,
			shared: host.options.shared,
			origin: host
		});
		require_logger$2.assert(shareOptionsRes, `Cannot find shared "${pkgName}" in host "${host.options.name}". Ensure the shared config for "${pkgName}" is declared in the federation plugin options and the host has been initialized before loading shares.`);
		const { shared: registeredShared, useTreesShaking } = require_share$2.getRegisteredShare(this.shareScopeMap, pkgName, shareOptionsRes, this.hooks.lifecycle.resolveShare) || {};
		if (registeredShared) {
			const targetShared = require_share$2.directShare(registeredShared, useTreesShaking);
			if (targetShared.lib) {
				require_share$2.addUseIn(targetShared, host.options.name);
				return targetShared.lib;
			} else if (targetShared.loading && !targetShared.loaded) {
				const factory = await targetShared.loading;
				targetShared.loaded = true;
				if (!targetShared.lib) targetShared.lib = factory;
				require_share$2.addUseIn(targetShared, host.options.name);
				return factory;
			} else {
				const asyncLoadProcess = async () => {
					const factory = await targetShared.get();
					require_share$2.addUseIn(targetShared, host.options.name);
					targetShared.loaded = true;
					targetShared.lib = factory;
					return factory;
				};
				const loading = asyncLoadProcess();
				this.setShared({
					pkgName,
					loaded: false,
					shared: registeredShared,
					from: host.options.name,
					lib: null,
					loading,
					treeShaking: useTreesShaking ? targetShared : void 0
				});
				return loading;
			}
		} else {
			if (extraOptions?.customShareInfo) return false;
			const _useTreeShaking = require_share$2.shouldUseTreeShaking(shareOptionsRes.treeShaking);
			const targetShared = require_share$2.directShare(shareOptionsRes, _useTreeShaking);
			const asyncLoadProcess = async () => {
				const factory = await targetShared.get();
				targetShared.lib = factory;
				targetShared.loaded = true;
				require_share$2.addUseIn(targetShared, host.options.name);
				const { shared: gShared, useTreesShaking: gUseTreeShaking } = require_share$2.getRegisteredShare(this.shareScopeMap, pkgName, shareOptionsRes, this.hooks.lifecycle.resolveShare) || {};
				if (gShared) {
					const targetGShared = require_share$2.directShare(gShared, gUseTreeShaking);
					targetGShared.lib = factory;
					targetGShared.loaded = true;
					gShared.from = shareOptionsRes.from;
				}
				return factory;
			};
			const loading = asyncLoadProcess();
			this.setShared({
				pkgName,
				loaded: false,
				shared: shareOptionsRes,
				from: host.options.name,
				lib: null,
				loading,
				treeShaking: _useTreeShaking ? targetShared : void 0
			});
			return loading;
		}
	}
	/**
	* This function initializes the sharing sequence (executed only once per share scope).
	* It accepts one argument, the name of the share scope.
	* If the share scope does not exist, it creates one.
	*/
	initializeSharing(shareScopeName = require_constant$2.DEFAULT_SCOPE, extraOptions) {
		const { host } = this;
		const from = extraOptions?.from;
		const strategy = extraOptions?.strategy;
		let initScope = extraOptions?.initScope;
		const promises = [];
		if (from !== "build") {
			const { initTokens } = this;
			if (!initScope) initScope = [];
			let initToken = initTokens[shareScopeName];
			if (!initToken) initToken = initTokens[shareScopeName] = { from: this.host.name };
			if (initScope.indexOf(initToken) >= 0) return promises;
			initScope.push(initToken);
		}
		const shareScope = this.shareScopeMap;
		const hostName = host.options.name;
		if (!shareScope[shareScopeName]) shareScope[shareScopeName] = {};
		const scope = shareScope[shareScopeName];
		const register = (name, shared) => {
			const { version, eager } = shared;
			scope[name] = scope[name] || {};
			const versions = scope[name];
			const activeVersion = versions[version] && require_share$2.directShare(versions[version]);
			const activeVersionEager = Boolean(activeVersion && ("eager" in activeVersion && activeVersion.eager || "shareConfig" in activeVersion && activeVersion.shareConfig?.eager));
			if (!activeVersion || activeVersion.strategy !== "loaded-first" && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > versions[version].from)) versions[version] = shared;
		};
		const initRemoteModule = async (key) => {
			const { module } = await host.remoteHandler.getRemoteModuleAndOptions({ id: key });
			let remoteEntryExports = void 0;
			try {
				remoteEntryExports = await module.getEntry();
			} catch (error) {
				remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
					id: key,
					error,
					from: "runtime",
					lifecycle: "beforeLoadShare",
					origin: host
				});
				if (!remoteEntryExports) return;
			} finally {
				if (remoteEntryExports?.init && !module.initing) {
					module.remoteEntryExports = remoteEntryExports;
					await module.init(void 0, void 0, initScope);
				}
			}
		};
		Object.keys(host.options.shared).forEach((shareName) => {
			host.options.shared[shareName].forEach((shared) => {
				if (shared.scope.includes(shareScopeName)) register(shareName, shared);
			});
		});
		if (host.options.shareStrategy === "version-first" || strategy === "version-first") host.options.remotes.forEach((remote) => {
			if (remote.shareScope === shareScopeName) promises.push(initRemoteModule(remote.name));
		});
		return promises;
	}
	loadShareSync(pkgName, extraOptions) {
		const { host } = this;
		const shareOptions = require_share$2.getTargetSharedOptions({
			pkgName,
			extraOptions,
			shareInfos: host.options.shared
		});
		if (shareOptions?.scope) shareOptions.scope.forEach((shareScope) => {
			this.initializeSharing(shareScope, { strategy: shareOptions.strategy });
		});
		const { shared: registeredShared, useTreesShaking } = require_share$2.getRegisteredShare(this.shareScopeMap, pkgName, shareOptions, this.hooks.lifecycle.resolveShare) || {};
		if (registeredShared) {
			if (typeof registeredShared.lib === "function") {
				require_share$2.addUseIn(registeredShared, host.options.name);
				if (!registeredShared.loaded) {
					registeredShared.loaded = true;
					if (registeredShared.from === host.options.name) shareOptions.loaded = true;
				}
				return registeredShared.lib;
			}
			if (typeof registeredShared.get === "function") {
				const module = registeredShared.get();
				if (!(module instanceof Promise)) {
					require_share$2.addUseIn(registeredShared, host.options.name);
					this.setShared({
						pkgName,
						loaded: true,
						from: host.options.name,
						lib: module,
						shared: registeredShared
					});
					return module;
				}
			}
		}
		if (shareOptions.lib) {
			if (!shareOptions.loaded) shareOptions.loaded = true;
			return shareOptions.lib;
		}
		if (shareOptions.get) {
			const module = shareOptions.get();
			if (module instanceof Promise) require_logger$2.error(extraOptions?.from === "build" ? _module_federation_error_codes$2.RUNTIME_005 : _module_federation_error_codes$2.RUNTIME_006, _module_federation_error_codes$2.runtimeDescMap, {
				hostName: host.options.name,
				sharedPkgName: pkgName
			}, void 0, require_context$1.optionsToMFContext(host.options));
			shareOptions.lib = module;
			this.setShared({
				pkgName,
				loaded: true,
				from: host.options.name,
				lib: shareOptions.lib,
				shared: shareOptions
			});
			return shareOptions.lib;
		}
		require_logger$2.error(_module_federation_error_codes$2.RUNTIME_006, _module_federation_error_codes$2.runtimeDescMap, {
			hostName: host.options.name,
			sharedPkgName: pkgName
		}, void 0, require_context$1.optionsToMFContext(host.options));
	}
	initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
		const { host } = this;
		this.shareScopeMap[scopeName] = shareScope;
		this.hooks.lifecycle.initContainerShareScopeMap.emit({
			shareScope,
			options: host.options,
			origin: host,
			scopeName,
			hostShareScopeMap: extraOptions.hostShareScopeMap
		});
	}
	setShared({ pkgName, shared, from, lib, loading, loaded, get, treeShaking }) {
		const { version, scope = "default", ...shareInfo } = shared;
		const scopes = Array.isArray(scope) ? scope : [scope];
		const mergeAttrs = (shared) => {
			const merge = (s, key, val) => {
				if (val && !s[key]) s[key] = val;
			};
			const targetShared = treeShaking ? shared.treeShaking : shared;
			merge(targetShared, "loaded", loaded);
			merge(targetShared, "loading", loading);
			merge(targetShared, "get", get);
		};
		scopes.forEach((sc) => {
			if (!this.shareScopeMap[sc]) this.shareScopeMap[sc] = {};
			if (!this.shareScopeMap[sc][pkgName]) this.shareScopeMap[sc][pkgName] = {};
			if (!this.shareScopeMap[sc][pkgName][version]) this.shareScopeMap[sc][pkgName][version] = {
				version,
				scope: [sc],
				...shareInfo,
				lib
			};
			const registeredShared = this.shareScopeMap[sc][pkgName][version];
			mergeAttrs(registeredShared);
			if (from && registeredShared.from !== from) registeredShared.from = from;
		});
	}
	_setGlobalShareScopeMap(hostOptions) {
		const globalShareScopeMap = require_share$2.getGlobalShareScope();
		const identifier = hostOptions.id || hostOptions.name;
		if (identifier && !globalShareScopeMap[identifier]) globalShareScopeMap[identifier] = this.shareScopeMap;
	}
};

//#endregion
shared.SharedHandler = SharedHandler;

var remote = {};

const require_logger$1 = logger$3;
const require_global = global;
const require_constant$1 = constant;
const require_share$1 = share;
const require_manifest = manifest;
const require_load$1 = load;
const require_context = context;

const require_preload = preload;
const require_index$1$1 = module$1;
const require_syncHook$1 = syncHook;
const require_asyncHook$1 = asyncHook;
const require_syncWaterfallHook$1 = syncWaterfallHook;
const require_asyncWaterfallHooks$1 = asyncWaterfallHooks;
const require_pluginSystem$1 = pluginSystem;

const require_SnapshotHandler$1 = SnapshotHandler$1;
let _module_federation_sdk$1 = dist$1;
let _module_federation_error_codes$1 = dist;

//#region src/remote/index.ts
var RemoteHandler = class {
	constructor(host) {
		this.hooks = new require_pluginSystem$1.PluginSystem({
			beforeRegisterRemote: new require_syncWaterfallHook$1.SyncWaterfallHook("beforeRegisterRemote"),
			registerRemote: new require_syncWaterfallHook$1.SyncWaterfallHook("registerRemote"),
			beforeRequest: new require_asyncWaterfallHooks$1.AsyncWaterfallHook("beforeRequest"),
			onLoad: new require_asyncHook$1.AsyncHook("onLoad"),
			handlePreloadModule: new require_syncHook$1.SyncHook("handlePreloadModule"),
			errorLoadRemote: new require_asyncHook$1.AsyncHook("errorLoadRemote"),
			beforePreloadRemote: new require_asyncHook$1.AsyncHook("beforePreloadRemote"),
			generatePreloadAssets: new require_asyncHook$1.AsyncHook("generatePreloadAssets"),
			afterPreloadRemote: new require_asyncHook$1.AsyncHook(),
			loadEntry: new require_asyncHook$1.AsyncHook()
		});
		this.host = host;
		this.idToRemoteMap = {};
	}
	formatAndRegisterRemote(globalOptions, userOptions) {
		return (userOptions.remotes || []).reduce((res, remote) => {
			this.registerRemote(remote, res, { force: false });
			return res;
		}, globalOptions.remotes);
	}
	setIdToRemoteMap(id, remoteMatchInfo) {
		const { remote, expose } = remoteMatchInfo;
		const { name, alias } = remote;
		this.idToRemoteMap[id] = {
			name: remote.name,
			expose
		};
		if (alias && id.startsWith(name)) {
			const idWithAlias = id.replace(name, alias);
			this.idToRemoteMap[idWithAlias] = {
				name: remote.name,
				expose
			};
			return;
		}
		if (alias && id.startsWith(alias)) {
			const idWithName = id.replace(alias, name);
			this.idToRemoteMap[idWithName] = {
				name: remote.name,
				expose
			};
		}
	}
	async loadRemote(id, options) {
		const { host } = this;
		try {
			const { loadFactory = true } = options || { loadFactory: true };
			const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({ id });
			const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;
			const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);
			const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
				id: idRes,
				pkgNameOrAlias,
				expose,
				exposeModule: loadFactory ? moduleOrFactory : void 0,
				exposeModuleFactory: loadFactory ? void 0 : moduleOrFactory,
				remote,
				options: moduleOptions,
				moduleInstance: module,
				origin: host
			});
			this.setIdToRemoteMap(id, remoteMatchInfo);
			if (typeof moduleWrapper === "function") return moduleWrapper;
			return moduleOrFactory;
		} catch (error) {
			const { from = "runtime" } = options || { from: "runtime" };
			const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
				id,
				error,
				from,
				lifecycle: "onLoad",
				origin: host
			});
			if (!failOver) throw error;
			return failOver;
		}
	}
	async preloadRemote(preloadOptions) {
		const { host } = this;
		await this.hooks.lifecycle.beforePreloadRemote.emit({
			preloadOps: preloadOptions,
			options: host.options,
			origin: host
		});
		const preloadOps = require_preload.formatPreloadArgs(host.options.remotes, preloadOptions);
		await Promise.all(preloadOps.map(async (ops) => {
			const { remote } = ops;
			const remoteInfo = require_load$1.getRemoteInfo(remote);
			const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo({ moduleInfo: remote });
			const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
				origin: host,
				preloadOptions: ops,
				remote,
				remoteInfo,
				globalSnapshot,
				remoteSnapshot
			});
			if (!assets) return;
			require_preload.preloadAssets(remoteInfo, host, assets);
		}));
	}
	registerRemotes(remotes, options) {
		const { host } = this;
		remotes.forEach((remote) => {
			this.registerRemote(remote, host.options.remotes, { force: options?.force });
		});
	}
	async getRemoteModuleAndOptions(options) {
		const { host } = this;
		const { id } = options;
		let loadRemoteArgs;
		try {
			loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
				id,
				options: host.options,
				origin: host
			});
		} catch (error) {
			loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
				id,
				options: host.options,
				origin: host,
				from: "runtime",
				error,
				lifecycle: "beforeRequest"
			});
			if (!loadRemoteArgs) throw error;
		}
		const { id: idRes } = loadRemoteArgs;
		const remoteSplitInfo = require_manifest.matchRemoteWithNameAndExpose(host.options.remotes, idRes);
		if (!remoteSplitInfo) require_logger$1.error(_module_federation_error_codes$1.RUNTIME_004, _module_federation_error_codes$1.runtimeDescMap, {
			hostName: host.options.name,
			requestId: idRes
		}, void 0, require_context.optionsToMFContext(host.options));
		const { remote: rawRemote } = remoteSplitInfo;
		const remoteInfo = require_load$1.getRemoteInfo(rawRemote);
		const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit({
			id: idRes,
			...remoteSplitInfo,
			options: host.options,
			origin: host,
			remoteInfo
		});
		const { remote, expose } = matchInfo;
		require_logger$1.assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
		let module = host.moduleCache.get(remote.name);
		const moduleOptions = {
			host,
			remoteInfo
		};
		if (!module) {
			module = new require_index$1$1.Module(moduleOptions);
			host.moduleCache.set(remote.name, module);
		}
		return {
			module,
			moduleOptions,
			remoteMatchInfo: matchInfo
		};
	}
	registerRemote(remote, targetRemotes, options) {
		const { host } = this;
		const normalizeRemote = () => {
			if (remote.alias) {
				const findEqual = targetRemotes.find((item) => remote.alias && (item.name.startsWith(remote.alias) || item.alias?.startsWith(remote.alias)));
				require_logger$1.assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
			}
			if ("entry" in remote) {
				if (_module_federation_sdk$1.isBrowserEnvValue && typeof window !== "undefined" && !remote.entry.startsWith("http")) remote.entry = new URL(remote.entry, window.location.origin).href;
			}
			if (!remote.shareScope) remote.shareScope = require_constant$1.DEFAULT_SCOPE;
			if (!remote.type) remote.type = require_constant$1.DEFAULT_REMOTE_TYPE;
		};
		this.hooks.lifecycle.beforeRegisterRemote.emit({
			remote,
			origin: host
		});
		const registeredRemote = targetRemotes.find((item) => item.name === remote.name);
		if (!registeredRemote) {
			normalizeRemote();
			targetRemotes.push(remote);
			this.hooks.lifecycle.registerRemote.emit({
				remote,
				origin: host
			});
		} else {
			const messages = [`The remote "${remote.name}" is already registered.`, "Please note that overriding it may cause unexpected errors."];
			if (options?.force) {
				this.removeRemote(registeredRemote);
				normalizeRemote();
				targetRemotes.push(remote);
				this.hooks.lifecycle.registerRemote.emit({
					remote,
					origin: host
				});
				(0, _module_federation_sdk$1.warn)(messages.join(" "));
			}
		}
	}
	removeRemote(remote) {
		try {
			const { host } = this;
			const { name } = remote;
			const remoteIndex = host.options.remotes.findIndex((item) => item.name === name);
			if (remoteIndex !== -1) host.options.remotes.splice(remoteIndex, 1);
			const loadedModule = host.moduleCache.get(remote.name);
			if (loadedModule) {
				const remoteInfo = loadedModule.remoteInfo;
				const key = remoteInfo.entryGlobalName;
				if (require_global.CurrentGlobal[key]) if (Object.getOwnPropertyDescriptor(require_global.CurrentGlobal, key)?.configurable) delete require_global.CurrentGlobal[key];
				else require_global.CurrentGlobal[key] = void 0;
				const remoteEntryUniqueKey = require_load$1.getRemoteEntryUniqueKey(loadedModule.remoteInfo);
				if (require_global.globalLoading[remoteEntryUniqueKey]) delete require_global.globalLoading[remoteEntryUniqueKey];
				host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
				let remoteInsId = remoteInfo.buildVersion ? (0, _module_federation_sdk$1.composeKeyWithSeparator)(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
				const remoteInsIndex = require_global.CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((ins) => {
					if (remoteInfo.buildVersion) return ins.options.id === remoteInsId;
					else return ins.name === remoteInsId;
				});
				if (remoteInsIndex !== -1) {
					const remoteIns = require_global.CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
					remoteInsId = remoteIns.options.id || remoteInsId;
					const globalShareScopeMap = require_share$1.getGlobalShareScope();
					let isAllSharedNotUsed = true;
					const needDeleteKeys = [];
					Object.keys(globalShareScopeMap).forEach((instId) => {
						const shareScopeMap = globalShareScopeMap[instId];
						shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope) => {
							const shareScopeVal = shareScopeMap[shareScope];
							shareScopeVal && Object.keys(shareScopeVal).forEach((shareName) => {
								const sharedPkgs = shareScopeVal[shareName];
								sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion) => {
									const shared = sharedPkgs[shareVersion];
									if (shared && typeof shared === "object" && shared.from === remoteInfo.name) if (shared.loaded || shared.loading) {
										shared.useIn = shared.useIn.filter((usedHostName) => usedHostName !== remoteInfo.name);
										if (shared.useIn.length) isAllSharedNotUsed = false;
										else needDeleteKeys.push([
											instId,
											shareScope,
											shareName,
											shareVersion
										]);
									} else needDeleteKeys.push([
										instId,
										shareScope,
										shareName,
										shareVersion
									]);
								});
							});
						});
					});
					if (isAllSharedNotUsed) {
						remoteIns.shareScopeMap = {};
						delete globalShareScopeMap[remoteInsId];
					}
					needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion]) => {
						delete globalShareScopeMap[insId]?.[shareScope]?.[shareName]?.[shareVersion];
					});
					require_global.CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
				}
				const { hostGlobalSnapshot } = require_SnapshotHandler$1.getGlobalRemoteInfo(remote, host);
				if (hostGlobalSnapshot) {
					const remoteKey = hostGlobalSnapshot && "remotesInfo" in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && require_global.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
					if (remoteKey) {
						delete hostGlobalSnapshot.remotesInfo[remoteKey];
						if (Boolean(require_global.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) delete require_global.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
					}
				}
				host.moduleCache.delete(remote.name);
			}
		} catch (err) {
			require_logger$1.logger.error(`removeRemote failed: ${err instanceof Error ? err.message : String(err)}`);
		}
	}
};

//#endregion
remote.RemoteHandler = RemoteHandler;

const require_logger = logger$3;
const require_constant = constant;
const require_share = share;
const require_env = env;
const require_plugin = plugin;
const require_load = load;

const require_index$1 = module$1;
const require_syncHook = syncHook;
const require_asyncHook = asyncHook;
const require_syncWaterfallHook = syncWaterfallHook;
const require_asyncWaterfallHooks = asyncWaterfallHooks;
const require_pluginSystem = pluginSystem;

const require_index$3 = snapshot;
const require_generate_preload_assets = generatePreloadAssets$1;
const require_SnapshotHandler = SnapshotHandler$1;
const require_index$4 = shared;
const require_index$5 = remote;
let _module_federation_sdk = dist$1;
let _module_federation_error_codes = dist;

//#region src/core.ts
const USE_SNAPSHOT = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN === "boolean" ? !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN : true;
var ModuleFederation = class {
	constructor(userOptions) {
		this.hooks = new require_pluginSystem.PluginSystem({
			beforeInit: new require_syncWaterfallHook.SyncWaterfallHook("beforeInit"),
			init: new require_syncHook.SyncHook(),
			beforeInitContainer: new require_asyncWaterfallHooks.AsyncWaterfallHook("beforeInitContainer"),
			initContainer: new require_asyncWaterfallHooks.AsyncWaterfallHook("initContainer")
		});
		this.version = "2.2.3";
		this.moduleCache = /* @__PURE__ */ new Map();
		this.loaderHook = new require_pluginSystem.PluginSystem({
			getModuleInfo: new require_syncHook.SyncHook(),
			createScript: new require_syncHook.SyncHook(),
			createLink: new require_syncHook.SyncHook(),
			fetch: new require_asyncHook.AsyncHook(),
			loadEntryError: new require_asyncHook.AsyncHook(),
			getModuleFactory: new require_asyncHook.AsyncHook()
		});
		this.bridgeHook = new require_pluginSystem.PluginSystem({
			beforeBridgeRender: new require_syncHook.SyncHook(),
			afterBridgeRender: new require_syncHook.SyncHook(),
			beforeBridgeDestroy: new require_syncHook.SyncHook(),
			afterBridgeDestroy: new require_syncHook.SyncHook()
		});
		const plugins = USE_SNAPSHOT ? [require_index$3.snapshotPlugin(), require_generate_preload_assets.generatePreloadAssetsPlugin()] : [];
		const defaultOptions = {
			id: require_env.getBuilderId(),
			name: userOptions.name,
			plugins,
			remotes: [],
			shared: {},
			inBrowser: _module_federation_sdk.isBrowserEnvValue
		};
		this.name = userOptions.name;
		this.options = defaultOptions;
		this.snapshotHandler = new require_SnapshotHandler.SnapshotHandler(this);
		this.sharedHandler = new require_index$4.SharedHandler(this);
		this.remoteHandler = new require_index$5.RemoteHandler(this);
		this.shareScopeMap = this.sharedHandler.shareScopeMap;
		this.registerPlugins([...defaultOptions.plugins, ...userOptions.plugins || []]);
		this.options = this.formatOptions(defaultOptions, userOptions);
	}
	initOptions(userOptions) {
		if (userOptions.name && userOptions.name !== this.options.name) require_logger.error((0, _module_federation_error_codes.getShortErrorMsg)(_module_federation_error_codes.RUNTIME_010, _module_federation_error_codes.runtimeDescMap));
		this.registerPlugins(userOptions.plugins);
		const options = this.formatOptions(this.options, userOptions);
		this.options = options;
		return options;
	}
	async loadShare(pkgName, extraOptions) {
		return this.sharedHandler.loadShare(pkgName, extraOptions);
	}
	loadShareSync(pkgName, extraOptions) {
		return this.sharedHandler.loadShareSync(pkgName, extraOptions);
	}
	initializeSharing(shareScopeName = require_constant.DEFAULT_SCOPE, extraOptions) {
		return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
	}
	initRawContainer(name, url, container) {
		const remoteInfo = require_load.getRemoteInfo({
			name,
			entry: url
		});
		const module = new require_index$1.Module({
			host: this,
			remoteInfo
		});
		module.remoteEntryExports = container;
		this.moduleCache.set(name, module);
		return module;
	}
	async loadRemote(id, options) {
		return this.remoteHandler.loadRemote(id, options);
	}
	async preloadRemote(preloadOptions) {
		return this.remoteHandler.preloadRemote(preloadOptions);
	}
	initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
		this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
	}
	formatOptions(globalOptions, userOptions) {
		const { allShareInfos: shared } = require_share.formatShareConfigs(globalOptions, userOptions);
		const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
			origin: this,
			userOptions,
			options: globalOptions,
			shareInfo: shared
		});
		const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
		const { allShareInfos } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
		const plugins = [...globalOptionsRes.plugins];
		if (userOptionsRes.plugins) userOptionsRes.plugins.forEach((plugin) => {
			if (!plugins.includes(plugin)) plugins.push(plugin);
		});
		const optionsRes = {
			...globalOptions,
			...userOptions,
			plugins,
			remotes,
			shared: allShareInfos
		};
		this.hooks.lifecycle.init.emit({
			origin: this,
			options: optionsRes
		});
		return optionsRes;
	}
	registerPlugins(plugins) {
		const pluginRes = require_plugin.registerPlugins(plugins, this);
		this.options.plugins = this.options.plugins.reduce((res, plugin) => {
			if (!plugin) return res;
			if (res && !res.find((item) => item.name === plugin.name)) res.push(plugin);
			return res;
		}, pluginRes || []);
	}
	registerRemotes(remotes, options) {
		return this.remoteHandler.registerRemotes(remotes, options);
	}
	registerShared(shared) {
		this.sharedHandler.registerShared(this.options, {
			...this.options,
			shared
		});
	}
};

//#endregion
core.ModuleFederation = ModuleFederation;

var type = {};

var runtime = {};

//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (!no_symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion

runtime.__exportAll = __exportAll;

(function (exports) {
	const require_runtime = runtime;

	//#region src/type/index.ts
	var type_exports = /* @__PURE__ */ require_runtime.__exportAll({});

	//#endregion
	Object.defineProperty(exports, 'type_exports', {
	  enumerable: true,
	  get: function () {
	    return type_exports;
	  }
	});
	
} (type));

(function (exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	const require_logger = logger$3;
	const require_tool = tool;
	const require_global = global;
	const require_index = semver;
	const require_share = share;
	const require_manifest = manifest;
	const require_load = load;

	const require_helpers = helpers;
	const require_index$2 = module$1;
	const require_core = core;
	const require_index$3 = type;
	let _module_federation_sdk = dist$1;

	//#region src/index.ts
	const helpers$1 = require_helpers.default;

	//#endregion
	exports.CurrentGlobal = require_global.CurrentGlobal;
	exports.Global = require_global.Global;
	exports.Module = require_index$2.Module;
	exports.ModuleFederation = require_core.ModuleFederation;
	exports.addGlobalSnapshot = require_global.addGlobalSnapshot;
	exports.assert = require_logger.assert;
	exports.error = require_logger.error;
	exports.getGlobalFederationConstructor = require_global.getGlobalFederationConstructor;
	exports.getGlobalSnapshot = require_global.getGlobalSnapshot;
	exports.getInfoWithoutType = require_global.getInfoWithoutType;
	exports.getRegisteredShare = require_share.getRegisteredShare;
	exports.getRemoteEntry = require_load.getRemoteEntry;
	exports.getRemoteInfo = require_load.getRemoteInfo;
	exports.helpers = helpers$1;
	exports.isStaticResourcesEqual = require_tool.isStaticResourcesEqual;
	Object.defineProperty(exports, 'loadScript', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_sdk.loadScript;
	  }
	});
	Object.defineProperty(exports, 'loadScriptNode', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_sdk.loadScriptNode;
	  }
	});
	exports.matchRemoteWithNameAndExpose = require_manifest.matchRemoteWithNameAndExpose;
	exports.registerGlobalPlugins = require_global.registerGlobalPlugins;
	exports.resetFederationGlobalInfo = require_global.resetFederationGlobalInfo;
	exports.safeWrapper = require_tool.safeWrapper;
	exports.satisfy = require_index.satisfy;
	exports.setGlobalFederationConstructor = require_global.setGlobalFederationConstructor;
	exports.setGlobalFederationInstance = require_global.setGlobalFederationInstance;
	Object.defineProperty(exports, 'types', {
	  enumerable: true,
	  get: function () {
	    return require_index$3.type_exports;
	  }
	});
	
} (dist$2));

let _module_federation_runtime_core = dist$2;

//#region src/utils.ts
function getBuilderId() {
	return typeof FEDERATION_BUILD_IDENTIFIER !== "undefined" ? FEDERATION_BUILD_IDENTIFIER : "";
}
function getGlobalFederationInstance(name, version) {
	const buildId = getBuilderId();
	return _module_federation_runtime_core.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((GMInstance) => {
		if (buildId && GMInstance.options.id === buildId) return true;
		if (GMInstance.options.name === name && !GMInstance.options.version && !version) return true;
		if (GMInstance.options.name === name && version && GMInstance.options.version === version) return true;
		return false;
	});
}

//#endregion
utils$2.getGlobalFederationInstance = getGlobalFederationInstance;

(function (exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	const require_utils = utils$2;
	let _module_federation_runtime_core = dist$2;
	let _module_federation_error_codes = dist;

	//#region src/index.ts
	function createInstance(options) {
		const instance = new (((0, _module_federation_runtime_core.getGlobalFederationConstructor)()) || _module_federation_runtime_core.ModuleFederation)(options);
		(0, _module_federation_runtime_core.setGlobalFederationInstance)(instance);
		return instance;
	}
	let FederationInstance = null;
	/**
	* @deprecated Use createInstance or getInstance instead
	*/
	function init(options) {
		const instance = require_utils.getGlobalFederationInstance(options.name, options.version);
		if (!instance) {
			FederationInstance = createInstance(options);
			return FederationInstance;
		} else {
			instance.initOptions(options);
			if (!FederationInstance) FederationInstance = instance;
			return instance;
		}
	}
	function loadRemote(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.loadRemote.apply(FederationInstance, args);
	}
	function loadShare(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.loadShare.apply(FederationInstance, args);
	}
	function loadShareSync(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.loadShareSync.apply(FederationInstance, args);
	}
	function preloadRemote(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.preloadRemote.apply(FederationInstance, args);
	}
	function registerRemotes(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.registerRemotes.apply(FederationInstance, args);
	}
	function registerPlugins(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.registerPlugins.apply(FederationInstance, args);
	}
	function getInstance() {
		return FederationInstance;
	}
	function registerShared(...args) {
		(0, _module_federation_runtime_core.assert)(FederationInstance, _module_federation_error_codes.RUNTIME_009, _module_federation_error_codes.runtimeDescMap);
		return FederationInstance.registerShared.apply(FederationInstance, args);
	}
	(0, _module_federation_runtime_core.setGlobalFederationConstructor)(_module_federation_runtime_core.ModuleFederation);

	//#endregion
	Object.defineProperty(exports, 'Module', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.Module;
	  }
	});
	exports.ModuleFederation = _module_federation_runtime_core.ModuleFederation;
	exports.createInstance = createInstance;
	exports.getInstance = getInstance;
	Object.defineProperty(exports, 'getRemoteEntry', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.getRemoteEntry;
	  }
	});
	Object.defineProperty(exports, 'getRemoteInfo', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.getRemoteInfo;
	  }
	});
	exports.init = init;
	exports.loadRemote = loadRemote;
	Object.defineProperty(exports, 'loadScript', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.loadScript;
	  }
	});
	Object.defineProperty(exports, 'loadScriptNode', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.loadScriptNode;
	  }
	});
	exports.loadShare = loadShare;
	exports.loadShareSync = loadShareSync;
	exports.preloadRemote = preloadRemote;
	Object.defineProperty(exports, 'registerGlobalPlugins', {
	  enumerable: true,
	  get: function () {
	    return _module_federation_runtime_core.registerGlobalPlugins;
	  }
	});
	exports.registerPlugins = registerPlugins;
	exports.registerRemotes = registerRemotes;
	exports.registerShared = registerShared;
	
} (dist$3));

// Shim Vue HMR runtime for dev-compiled components loaded by a non-Vite host.
  // When a remote is served by a Vite dev server, Vue's SFC compiler injects HMR
  // hooks that reference __VUE_HMR_RUNTIME__. This global only exists on pages
  // served by Vite's client runtime. When a production host loads the remote,
  // the HMR calls would throw. This no-op shim prevents that.
  if (typeof __VUE_HMR_RUNTIME__ === 'undefined') {
    globalThis.__VUE_HMR_RUNTIME__ = { createRecord() {}, rerender() {}, reload() {} };
  }
  
  
const __mfResolveGlobalKey = "__mf_init____mf__virtual/qodly_3f66514b71162727adca__mf_v__runtimeInit__mf_v__.js__";
let __mfResolveState = globalThis[__mfResolveGlobalKey];
if (!__mfResolveState) {
  let initResolve, initReject;
  const initPromise = new Promise((re, rj) => {
    initResolve = re;
    initReject = rj;
  });
  __mfResolveState = globalThis[__mfResolveGlobalKey] = {
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
const initResolve = __mfResolveState.initResolve;

  const initTokens = {};
  const shareScopeName = "default";
  const mfName = "qodly_3f66514b71162727adca";
  let localSharedImportMapPromise;
  let exposesMapPromise;

  async function getLocalSharedImportMap() {
    localSharedImportMapPromise ??= __vitePreload(() => import('./assets/localSharedImportMap-DE3UegMb.js'),true              ?[]:void 0);
    return localSharedImportMapPromise
  }

  async function getExposesMap() {
    exposesMapPromise ??= __vitePreload(() => import('./assets/virtualExposes-Ch6ZKadH.js'),true              ?[]:void 0).then((mod) => mod.default ?? mod);
    return exposesMapPromise
  }

  async function init(shared = {}, initScope = []) {
    const {usedShared, usedRemotes} = await getLocalSharedImportMap();
    const initRes = dist$3.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: 'version-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    initResolve(initRes);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'version-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error('[Module Federation]', e);
    }
    return initRes
  }

  async function getExposes(moduleName) {
    const exposesMap = await getExposesMap();
    if (!(moduleName in exposesMap)) throw new Error(`[Module Federation] Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode("._root_vqkqx_1 {\n  --cc-accent: #0f766e;\n  --cc-surface: #ffffff;\n  --cc-text: #1c1917;\n  --cc-muted: #78716c;\n  --cc-radius: 20px;\n  --cc-ring: color-mix(in srgb, var(--cc-accent) 18%, transparent);\n  --cc-ink-soft: color-mix(in srgb, var(--cc-accent) 12%, #f5f5f4);\n\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  display: flex;\n  align-items: stretch;\n  font-family: \"Segoe UI\", \"Avenir Next\", \"Helvetica Neue\", sans-serif;\n  color: var(--cc-text);\n}\n\n._card_vqkqx_21 {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 1.25rem 1.5rem;\n  width: 100%;\n  padding: 1.35rem 1.5rem;\n  border-radius: var(--cc-radius);\n  background:\n    radial-gradient(120% 80% at 0% 0%, var(--cc-ink-soft), transparent 55%),\n    linear-gradient(\n      160deg,\n      var(--cc-surface) 0%,\n      color-mix(in srgb, var(--cc-surface) 92%, #e7e5e4) 100%\n    );\n  border: 1px solid color-mix(in srgb, var(--cc-text) 8%, transparent);\n  overflow: hidden;\n  isolation: isolate;\n}\n\n._card_vqkqx_21::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: linear-gradient(\n    180deg,\n    var(--cc-accent),\n    color-mix(in srgb, var(--cc-accent) 40%, #292524)\n  );\n  border-radius: var(--cc-radius) 0 0 var(--cc-radius);\n  pointer-events: none;\n}\n\n._main_vqkqx_55 {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n  z-index: 1;\n}\n\n._identity_vqkqx_63 {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  min-width: 0;\n}\n\n._avatar_vqkqx_70 {\n  flex: 0 0 auto;\n  width: 72px;\n  height: 72px;\n  border-radius: 999px;\n  object-fit: cover;\n  background: var(--cc-ink-soft);\n  border: 2px solid color-mix(in srgb, var(--cc-surface) 70%, white);\n  box-shadow: 0 0 0 3px var(--cc-ring);\n}\n\n._avatarFallback_vqkqx_81 {\n  display: grid;\n  place-items: center;\n  font-size: 1.25rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n  color: var(--cc-accent);\n  user-select: none;\n}\n\n._who_vqkqx_91 {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n._name_vqkqx_98 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  line-height: 1.25;\n  letter-spacing: -0.02em;\n  overflow-wrap: anywhere;\n}\n\n._role_vqkqx_107 {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--cc-muted);\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n\n._details_vqkqx_115 {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n._detail_vqkqx_115 {\n  display: grid;\n  grid-template-columns: 4.5rem minmax(0, 1fr);\n  gap: 0.5rem;\n  align-items: baseline;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n\n._detailLabel_vqkqx_133 {\n  color: var(--cc-muted);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n._detailValue_vqkqx_141 {\n  margin: 0;\n  overflow-wrap: anywhere;\n  color: var(--cc-text);\n}\n\n._detailValue_vqkqx_141 a {\n  color: inherit;\n  text-decoration: none;\n  border-bottom: 1px solid color-mix(in srgb, var(--cc-accent) 35%, transparent);\n}\n\n._detailValue_vqkqx_141 a:hover {\n  color: var(--cc-accent);\n  border-bottom-color: var(--cc-accent);\n}\n\n._actions_vqkqx_158 {\n  margin-top: auto;\n  padding-top: 0.25rem;\n}\n\n._downloadBtn_vqkqx_163 {\n  appearance: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1rem;\n  border-radius: 999px;\n  background: var(--cc-accent);\n  color: #fff;\n  font: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition:\n    transform 160ms ease,\n    filter 160ms ease,\n    box-shadow 160ms ease;\n  box-shadow: 0 8px 20px color-mix(in srgb, var(--cc-accent) 28%, transparent);\n}\n\n._downloadBtn_vqkqx_163:hover {\n  filter: brightness(1.05);\n  transform: translateY(-1px);\n}\n\n._downloadBtn_vqkqx_163:active {\n  transform: translateY(0);\n  filter: brightness(0.97);\n}\n\n._downloadBtn_vqkqx_163:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n  box-shadow: none;\n  transform: none;\n  filter: none;\n}\n\n._downloadBtn_vqkqx_163:focus-visible {\n  outline: 2px solid var(--cc-accent);\n  outline-offset: 3px;\n}\n\n._qrPanel_vqkqx_209 {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  padding: 0.65rem;\n  border-radius: calc(var(--cc-radius) - 6px);\n  background: color-mix(in srgb, var(--cc-surface) 70%, #fafaf9);\n  border: 1px solid color-mix(in srgb, var(--cc-text) 7%, transparent);\n  align-self: center;\n}\n\n._qrImage_vqkqx_223 {\n  width: 112px;\n  height: 112px;\n  display: block;\n  border-radius: 8px;\n  background: #fff;\n}\n\n._qrCaption_vqkqx_231 {\n  margin: 0;\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--cc-muted);\n}\n\n._empty_vqkqx_240 {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  min-height: 160px;\n  padding: 1.5rem;\n  border-radius: var(--cc-radius);\n  background:\n    radial-gradient(100% 80% at 50% 0%, var(--cc-ink-soft), transparent 60%), var(--cc-surface);\n  border: 1px dashed color-mix(in srgb, var(--cc-text) 14%, transparent);\n  color: var(--cc-muted);\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 560px) {\n  ._card_vqkqx_21 {\n    grid-template-columns: 1fr;\n    justify-items: stretch;\n  }\n\n  ._qrPanel_vqkqx_209 {\n    width: 100%;\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 0.85rem;\n    padding: 0.75rem 0.9rem;\n  }\n\n  ._qrImage_vqkqx_223 {\n    width: 88px;\n    height: 88px;\n  }\n\n  ._detail_vqkqx_115 {\n    grid-template-columns: 1fr;\n    gap: 0.1rem;\n  }\n}\n._card_lb910_1 {\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  font-family: ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Helvetica, Arial, sans-serif;\n  font-variant-numeric: tabular-nums;\n  color: var(--ilg-text);\n  background: var(--ilg-surface);\n  border: 1px solid rgba(35, 32, 46, 0.08);\n  border-radius: var(--ilg-radius);\n  box-shadow: 0 8px 24px rgba(35, 32, 46, 0.06);\n  padding: var(--ilg-pad);\n  isolation: isolate;\n}\n\n._header_lb910_16 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: var(--ilg-gap);\n}\n\n._title_lb910_24 {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ilg-text);\n  letter-spacing: -0.01em;\n}\n\n._headerActions_lb910_31 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n\n._paidToggle_lb910_38 {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(35, 32, 46, 0.1);\n  background: transparent;\n  color: var(--ilg-muted);\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n\n._paidToggleActive_lb910_56 {\n  background: rgba(110, 86, 207, 0.08);\n  border-color: rgba(110, 86, 207, 0.25);\n  color: var(--ilg-accent);\n}\n\n._paidDot_lb910_62 {\n  width: 8px;\n  height: 8px;\n  border-radius: 99px;\n  background: rgba(35, 32, 46, 0.2);\n}\n\n._paidDotActive_lb910_69 {\n  background: var(--ilg-accent);\n}\n\n._btn_lb910_73 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(35, 32, 46, 0.1);\n  background: transparent;\n  color: var(--ilg-text);\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    border-color 0.15s;\n}\n\n._btn_lb910_73:hover {\n  background: rgba(35, 32, 46, 0.04);\n}\n\n._btnAccent_lb910_95 {\n  border-color: rgba(110, 86, 207, 0.25);\n  color: var(--ilg-accent);\n}\n\n._btnDanger_lb910_100 {\n  color: #c0392b;\n  border: none;\n  padding: 4px 8px;\n  background: transparent;\n}\n\n._btnDanger_lb910_100:hover {\n  background: rgba(192, 57, 43, 0.06);\n}\n\n._layout_lb910_111 {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 280px);\n  gap: var(--ilg-gap);\n  align-items: start;\n}\n\n._layoutSolo_lb910_118 {\n  grid-template-columns: minmax(0, 1fr);\n}\n\n._gridWrap_lb910_122 {\n  min-width: 0;\n  overflow-x: auto;\n}\n\n._table_lb910_127 {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto;\n}\n\n._table_lb910_127 th,\n._table_lb910_127 td {\n  padding: var(--ilg-row) 8px;\n  vertical-align: middle;\n  font-size: 13px;\n  line-height: 1.35;\n  border-bottom: 1px solid rgba(35, 32, 46, 0.06);\n}\n\n._table_lb910_127 th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ilg-muted);\n  text-align: left;\n  white-space: nowrap;\n}\n\n._table_lb910_127 th._num_lb910_152,\n._table_lb910_127 td._num_lb910_152 {\n  text-align: right;\n  white-space: nowrap;\n}\n\n._table_lb910_127 th._product_lb910_158,\n._table_lb910_127 td._product_lb910_158 {\n  text-align: left;\n  width: 38%;\n}\n\n._table_lb910_127 th._actions_lb910_164,\n._table_lb910_127 td._actions_lb910_164 {\n  width: 40px;\n  text-align: center;\n}\n\n._table_lb910_127 th._drag_lb910_170,\n._table_lb910_127 td._drag_lb910_170 {\n  width: 28px;\n  text-align: center;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n._table_lb910_127 tbody tr:last-child td {\n  border-bottom: none;\n}\n\n._dragHandle_lb910_182 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  color: var(--ilg-muted);\n  cursor: grab;\n  border-radius: 4px;\n}\n\n._dragHandle_lb910_182:active {\n  cursor: grabbing;\n}\n\n._dragging_lb910_197 {\n  opacity: 0.45;\n}\n\n._dropTarget_lb910_201 {\n  background: rgba(110, 86, 207, 0.04);\n}\n\n._input_lb910_205 {\n  width: 100%;\n  min-width: 56px;\n  max-width: 96px;\n  padding: 6px 8px;\n  border: 1px solid rgba(35, 32, 46, 0.12);\n  border-radius: 6px;\n  background: var(--ilg-surface);\n  color: var(--ilg-text);\n  font-size: 13px;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n  outline: none;\n}\n\n._input_lb910_205:focus {\n  border-color: rgba(110, 86, 207, 0.45);\n  box-shadow: 0 0 0 2px rgba(110, 86, 207, 0.12);\n}\n\n._productCell_lb910_225 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n\n._productCopy_lb910_232 {\n  min-width: 0;\n}\n\n._name_lb910_236 {\n  font-size: 14px;\n  font-weight: 550;\n  color: var(--ilg-text);\n  letter-spacing: -0.01em;\n}\n\n._ref_lb910_243 {\n  margin-top: 2px;\n  font-size: 12px;\n  color: var(--ilg-muted);\n}\n\n._chip_lb910_249 {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  max-width: 120px;\n}\n\n._chipDot_lb910_257 {\n  width: 8px;\n  height: 8px;\n  border-radius: 99px;\n  flex-shrink: 0;\n}\n\n._chipLabel_lb910_264 {\n  font-size: 11px;\n  color: var(--ilg-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n._empty_lb910_272 {\n  padding: 24px 8px;\n  color: var(--ilg-muted);\n  font-size: 13px;\n}\n\n._aside_lb910_278 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--ilg-gap);\n  min-width: 0;\n}\n\n._summary_lb910_285 {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n._summaryRow_lb910_291 {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 13px;\n}\n\n._summaryLabel_lb910_299 {\n  color: var(--ilg-muted);\n}\n\n._summaryValue_lb910_303 {\n  font-variant-numeric: tabular-nums;\n  color: var(--ilg-text);\n}\n\n._totalRow_lb910_308 {\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(35, 32, 46, 0.08);\n  align-items: center;\n}\n\n._totalLabel_lb910_315 {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ilg-muted);\n}\n\n._totalValue_lb910_323 {\n  font-size: 22px;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: var(--ilg-accent);\n  line-height: 1.1;\n}\n\n._qtyRow_lb910_331 {\n  margin-top: 4px;\n  align-items: center;\n}\n\n._qtyMeta_lb910_336 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n._ring_lb910_342 {\n  display: block;\n  flex-shrink: 0;\n}\n\n._chart_lb910_347 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n._chartTitle_lb910_353 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ilg-muted);\n}\n\n._barRow_lb910_361 {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 72px;\n  gap: 8px 10px;\n  align-items: center;\n}\n\n._barLabel_lb910_368 {\n  font-size: 12px;\n  color: var(--ilg-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n._barValue_lb910_376 {\n  font-size: 12px;\n  text-align: right;\n  color: var(--ilg-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n._barTrack_lb910_383 {\n  grid-column: 1 / -1;\n  height: 8px;\n  border-radius: 99px;\n  background: rgba(35, 32, 46, 0.06);\n  overflow: hidden;\n}\n\n._barFill_lb910_391 {\n  height: 100%;\n  border-radius: 99px;\n  min-width: 2px;\n}\n\n@media (max-width: 720px) {\n  ._layout_lb910_111 {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  ._header_lb910_16 {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n._board_1l6dv_1 {\n  box-sizing: border-box;\n  display: flex;\n  gap: var(--kb-gap, 16px);\n  width: 100%;\n  height: 100%;\n  min-height: 280px;\n  padding: var(--kb-pad, 16px);\n  overflow-x: auto;\n  overflow-y: hidden;\n  background:\n    radial-gradient(120% 80% at 0% 0%, rgba(110, 86, 207, 0.06), transparent 55%),\n    radial-gradient(90% 70% at 100% 100%, rgba(18, 184, 134, 0.05), transparent 50%),\n    var(--kb-surface, #f7f6f9);\n  color: var(--kb-text, #23202e);\n  font-family: \"Segoe UI\", system-ui, -apple-system, sans-serif;\n}\n\n._column_1l6dv_19 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 220px;\n  min-width: 220px;\n  max-width: 320px;\n  border-radius: var(--kb-radius, 14px);\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(35, 32, 46, 0.08);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  transition:\n    border-color 160ms ease,\n    background-color 160ms ease,\n    box-shadow 160ms ease;\n}\n\n._columnDropTarget_1l6dv_35 {\n  border-color: color-mix(in srgb, var(--kb-accent, #6e56cf) 55%, transparent);\n  background: color-mix(in srgb, var(--kb-accent, #6e56cf) 8%, white);\n  box-shadow: 0 0 0 1px color-mix(in srgb, var(--kb-accent, #6e56cf) 25%, transparent);\n}\n\n._columnHeader_1l6dv_41 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 14px 14px 10px;\n}\n\n._columnTitle_1l6dv_49 {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 650;\n  letter-spacing: 0.01em;\n  color: var(--kb-text, #23202e);\n}\n\n._columnCount_1l6dv_57 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: rgba(35, 32, 46, 0.06);\n  color: var(--kb-muted, #6f6b7d);\n  font-size: 11px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n._columnBody_1l6dv_72 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n  min-height: 120px;\n  padding: 0 10px 12px;\n  overflow-y: auto;\n}\n\n._card_1l6dv_82 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px;\n  border-radius: calc(var(--kb-radius, 14px) - 4px);\n  background: #fff;\n  border: 1px solid rgba(35, 32, 46, 0.08);\n  box-shadow: 0 1px 2px rgba(35, 32, 46, 0.04);\n  cursor: grab;\n  user-select: none;\n  transition:\n    transform 140ms ease,\n    opacity 140ms ease,\n    box-shadow 140ms ease,\n    border-color 140ms ease;\n}\n\n._card_1l6dv_82:active {\n  cursor: grabbing;\n}\n\n._cardDragging_1l6dv_105 {\n  opacity: 0.45;\n  transform: scale(0.98);\n}\n\n._cardInteractive_1l6dv_110:hover {\n  border-color: color-mix(in srgb, var(--kb-accent, #6e56cf) 35%, transparent);\n  box-shadow: 0 4px 14px rgba(35, 32, 46, 0.08);\n}\n\n._cardStatic_1l6dv_115 {\n  cursor: default;\n}\n\n._cardTitle_1l6dv_119 {\n  margin: 0;\n  font-size: 13.5px;\n  font-weight: 600;\n  line-height: 1.35;\n  color: var(--kb-text, #23202e);\n  word-break: break-word;\n}\n\n._cardMeta_1l6dv_128 {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n\n._chip_1l6dv_135 {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  max-width: 100%;\n  padding: 3px 8px 3px 6px;\n  border-radius: 999px;\n  background: rgba(35, 32, 46, 0.04);\n  color: var(--kb-muted, #6f6b7d);\n  font-size: 11px;\n  font-weight: 550;\n  line-height: 1.2;\n}\n\n._chipDot_1l6dv_149 {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n._chipLabel_1l6dv_156 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n._due_1l6dv_162 {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: rgba(35, 32, 46, 0.04);\n  color: var(--kb-muted, #6f6b7d);\n  font-size: 11px;\n  font-weight: 550;\n  font-variant-numeric: tabular-nums;\n}\n\n._dueSoon_1l6dv_175 {\n  background: rgba(245, 159, 0, 0.12);\n  color: #b76e00;\n}\n\n._dueOverdue_1l6dv_180 {\n  background: rgba(240, 62, 62, 0.12);\n  color: #c92a2a;\n}\n\n._emptyColumn_1l6dv_185 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 72px;\n  padding: 12px;\n  border: 1px dashed rgba(35, 32, 46, 0.12);\n  border-radius: calc(var(--kb-radius, 14px) - 4px);\n  color: var(--kb-muted, #6f6b7d);\n  font-size: 12px;\n  text-align: center;\n}\n\n._emptyBoard_1l6dv_198 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 200px;\n  color: var(--kb-muted, #6f6b7d);\n  font-size: 14px;\n}\n._root_1q9cf_1 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  user-select: none;\n  touch-action: none;\n}\n\n._svg_1q9cf_14 {\n  display: block;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n._track_1q9cf_22 {\n  fill: none;\n  stroke: var(--pg-track, #e8e6ed);\n  stroke-linecap: round;\n}\n\n._progress_1q9cf_28 {\n  fill: none;\n  stroke: var(--pg-color, #43a047);\n  stroke-linecap: round;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n  transition:\n    stroke-dashoffset 220ms ease-out,\n    stroke 220ms ease-out;\n}\n\n._progressDragging_1q9cf_39 {\n  transition: none;\n}\n\n._label_1q9cf_43 {\n  fill: #23202e;\n  font-family: \"Segoe UI\", system-ui, -apple-system, sans-serif;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  text-anchor: middle;\n  dominant-baseline: central;\n  pointer-events: none;\n}\n\n._interactive_1q9cf_53 {\n  cursor: grab;\n}\n\n._interactive_1q9cf_53:active {\n  cursor: grabbing;\n}\n\n._readOnly_1q9cf_61 {\n  cursor: default;\n}\n._root_1ytlc_1 {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  border: 1px solid #d4d0dc;\n  border-radius: 8px;\n  background: #fff;\n  color: #23202e;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  overflow: hidden;\n}\n\n._rootReadOnly_1ytlc_15 {\n  background: #f7f6f9;\n}\n\n._toolbar_1ytlc_19 {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 2px;\n  padding: 6px 8px;\n  border-bottom: 1px solid #e6e3ec;\n  background: #faf9fb;\n}\n\n._group_1ytlc_29 {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n\n._divider_1ytlc_35 {\n  width: 1px;\n  height: 20px;\n  margin: 0 4px;\n  background: #e0dce8;\n}\n\n._btn_1ytlc_42,\n._select_1ytlc_43 {\n  appearance: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n  color: #3a3648;\n  cursor: pointer;\n  font: inherit;\n  line-height: 1;\n}\n\n._btn_1ytlc_42 {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 28px;\n  height: 28px;\n  padding: 0 6px;\n  font-size: 13px;\n}\n\n._btn_1ytlc_42:hover:not(:disabled),\n._select_1ytlc_43:hover:not(:disabled) {\n  background: #efeaf8;\n  border-color: #ddd6eb;\n}\n\n._btn_1ytlc_42:disabled,\n._select_1ytlc_43:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n._btnActive_1ytlc_76 {\n  background: #e8e1f5;\n  border-color: #cfc4e6;\n}\n\n._select_1ytlc_43 {\n  height: 28px;\n  padding: 0 6px;\n  font-size: 12px;\n  font-family: system-ui, -apple-system, sans-serif;\n}\n\n._surface_1ytlc_88 {\n  position: relative;\n  flex: 1;\n  min-height: inherit;\n}\n\n._editor_1ytlc_94 {\n  box-sizing: border-box;\n  width: 100%;\n  min-height: inherit;\n  padding: 12px 14px;\n  outline: none;\n  font-size: 15px;\n  line-height: 1.55;\n  overflow-wrap: anywhere;\n}\n\n._editor_1ytlc_94:empty::before,\n._editorEmpty_1ytlc_106::before {\n  content: attr(data-placeholder);\n  color: #9a94a8;\n  pointer-events: none;\n  float: left;\n  height: 0;\n}\n\n._editor_1ytlc_94 :is(h1, h2, h3) {\n  margin: 0.4em 0 0.25em;\n  font-family: system-ui, -apple-system, sans-serif;\n  line-height: 1.25;\n}\n\n._editor_1ytlc_94 h1 {\n  font-size: 1.55em;\n}\n\n._editor_1ytlc_94 h2 {\n  font-size: 1.3em;\n}\n\n._editor_1ytlc_94 h3 {\n  font-size: 1.12em;\n}\n\n._editor_1ytlc_94 p {\n  margin: 0 0 0.55em;\n}\n\n._editor_1ytlc_94 ul,\n._editor_1ytlc_94 ol {\n  margin: 0.35em 0 0.55em;\n  padding-left: 1.4em;\n}\n\n._editor_1ytlc_94 a {\n  color: #4b3f8f;\n  text-decoration: underline;\n}\n\n._editorReadOnly_1ytlc_147 {\n  cursor: default;\n}"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
