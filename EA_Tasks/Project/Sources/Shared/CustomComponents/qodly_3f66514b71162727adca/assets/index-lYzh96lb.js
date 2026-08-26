import { _ as __mf_1$1, a as __mf_2 } from './qodly_3f66514b71162727adca__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CEn9rQZz.js';
import { a as __mf_17, b as __mf_121, c as __mf_10, d as __mf_1, e as __mf_56, f as __mf_16, g as __mf_144, h as __mf_161, i as __mf_180, j as __mf_182, k as __mf_160 } from './qodly_3f66514b71162727adca__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.js-BpBweKc3.js';
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
import { R, _ as __mf_26, a as __mf_23, b as __mf_20, c as __mf_17$1, d as __mf_16$1, e as __mf_25 } from './qodly_3f66514b71162727adca__loadShare__react__loadShare__.js-xqf2XqU7.js';

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = R.createContext && R.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return R.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return R.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return R.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && R.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? R.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdDeleteOutline (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(props);
}function MdDragIndicator (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(props);
}function MdEvent (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}}]})(props);
}function MdViewColumn (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}}]})(props);
}function MdAdd (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(props);
}function MdLinkOff (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11A4.991 4.991 0 002 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"}},{"tag":"path","attr":{"fill":"none","d":"M0 24V0"}}]})(props);
}function MdLink (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}}]})(props);
}function MdFormatAlignCenter (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"}}]})(props);
}function MdFormatAlignJustify (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"}}]})(props);
}function MdFormatAlignLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"}}]})(props);
}function MdFormatAlignRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"}}]})(props);
}function MdFormatBold (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}}]})(props);
}function MdFormatItalic (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}}]})(props);
}function MdFormatListBulleted (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}}]})(props);
}function MdFormatListNumbered (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}}]})(props);
}function MdFormatUnderlined (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}}]})(props);
}function MdReceiptLong (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"}},{"tag":"path","attr":{"d":"M9 7h6v2H9zM16 7h2v2h-2zM9 10h6v2H9zM16 10h2v2h-2z"}}]})(props);
}function MdOutlineContactPage (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M13.17 4L18 8.83V20H6V4h7.17M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 00-5.56 0A2.01 2.01 0 008 17.43V18h8v-.57z"}}]})(props);
}function MdOutlineDonutLarge (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M13 5.08A7 7 0 0118.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13A7 7 0 0113 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"}}]})(props);
}function MdOutlineEditNote (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13l.71-.71a.996.996 0 011.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"}}]})(props);
}function MdOutlineTextSnippet (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.17 5L19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z"}}]})(props);
}

const dataSettings$5 = [
  {
    key: "datasource",
    label: "Contact",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  }
];
const fieldSettings = [
  {
    key: "nameAttr",
    label: "Name attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "name"
  },
  {
    key: "companyAttr",
    label: "Company attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "company"
  },
  {
    key: "jobTitleAttr",
    label: "Job title attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "jobTitle"
  },
  {
    key: "emailAttr",
    label: "Email attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "email"
  },
  {
    key: "phoneAttr",
    label: "Phone attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "phone"
  },
  {
    key: "addressAttr",
    label: "Address attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "address"
  },
  {
    key: "photoAttr",
    label: "Photo attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "photo"
  }
];
const designSettings$2 = [
  {
    key: "accentColor",
    label: "Accent color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#0F766E"
  },
  {
    key: "surfaceColor",
    label: "Surface color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#FFFFFF"
  },
  {
    key: "textColor",
    label: "Text color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#1C1917"
  },
  {
    key: "mutedColor",
    label: "Muted color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#78716C"
  },
  {
    key: "cornerRadius",
    label: "Corner radius (px)",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 20
  }
];
const commonSettings$5 = [...dataSettings$5, ...fieldSettings, ...designSettings$2];
const Settings$5 = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings$5
  },
  {
    key: "fields",
    label: "Field mapping",
    type: __mf_17.GROUP,
    components: fieldSettings
  },
  {
    key: "design",
    label: "Design",
    type: __mf_17.GROUP,
    components: designSettings$2
  },
  ...__mf_121(__mf_10).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];
const BasicSettings$5 = [
  ...commonSettings$5,
  ...__mf_121(__mf_1).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];

const EMPTY_CONTACT = {
  name: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  address: "",
  photo: ""
};
const DEFAULT_ATTRS = {
  nameAttr: "name",
  companyAttr: "company",
  jobTitleAttr: "jobTitle",
  emailAttr: "email",
  phoneAttr: "phone",
  addressAttr: "address",
  photoAttr: "photo"
};

const config$5 = {
  craft: {
    displayName: "Contact Card",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings$5, BasicSettings$5)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Contact Card",
    exposed: true,
    icon: MdOutlineContactPage,
    events: [],
    datasources: {
      accept: ["entity", "object"],
      declarations: (props) => {
        const datasource = props.datasource?.trim() ?? "";
        const declarations = [{ path: datasource }];
        const { id: ds, namespace } = __mf_144(datasource) || {};
        if (!ds) return declarations;
        const withNs = (path) => namespace ? `${namespace}:${path}` : path;
        const attrs = [
          props.nameAttr,
          props.companyAttr,
          props.jobTitleAttr,
          props.emailAttr,
          props.phoneAttr,
          props.addressAttr,
          props.photoAttr
        ].map((attr) => attr?.trim()).filter((attr) => !!attr);
        const unique = /* @__PURE__ */ new Set([...Object.values(DEFAULT_ATTRS), ...attrs]);
        unique.forEach((attr) => {
          declarations.push({ path: withNs(`${ds}.${attr}`) });
        });
        return declarations;
      }
    }
  },
  defaultProps: {
    ...DEFAULT_ATTRS,
    accentColor: "#0F766E",
    surfaceColor: "#FFFFFF",
    textColor: "#1C1917",
    mutedColor: "#78716C",
    cornerRadius: 20,
    style: {
      width: "100%",
      minHeight: "220px"
    }
  }
};

function sanitizeVCardValue(value) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
function asTrimmedString(value) {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value).trim();
  return "";
}
function resolvePhotoSrc(raw) {
  if (raw == null) return "";
  if (typeof raw === "string") {
    const s = raw.trim();
    if (!s) return "";
    if (s.startsWith("data:") || s.startsWith("blob:") || s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/")) {
      return s;
    }
    if (/^[A-Za-z0-9+/=\s]+$/.test(s) && s.length > 64) {
      return `data:image/jpeg;base64,${s.replace(/\s/g, "")}`;
    }
    return s;
  }
  if (typeof raw === "object") {
    const obj = raw;
    const deferred = obj.__deferred;
    if (deferred?.uri) return deferred.uri;
    if (typeof obj.uri === "string") return obj.uri;
    if (typeof obj.url === "string") return obj.url;
    if (typeof obj.src === "string") return obj.src;
    if (typeof obj.data === "string") return resolvePhotoSrc(obj.data);
  }
  return "";
}
function readAttr(entity, attr) {
  if (!attr) return void 0;
  if (attr.includes(".")) {
    return attr.split(".").reduce((acc, key) => {
      if (acc && typeof acc === "object") return acc[key];
      return void 0;
    }, entity);
  }
  return entity[attr];
}
function mergeAttrKeys(partial) {
  return {
    nameAttr: partial?.nameAttr?.trim() || DEFAULT_ATTRS.nameAttr,
    companyAttr: partial?.companyAttr?.trim() || DEFAULT_ATTRS.companyAttr,
    jobTitleAttr: partial?.jobTitleAttr?.trim() || DEFAULT_ATTRS.jobTitleAttr,
    emailAttr: partial?.emailAttr?.trim() || DEFAULT_ATTRS.emailAttr,
    phoneAttr: partial?.phoneAttr?.trim() || DEFAULT_ATTRS.phoneAttr,
    addressAttr: partial?.addressAttr?.trim() || DEFAULT_ATTRS.addressAttr,
    photoAttr: partial?.photoAttr?.trim() || DEFAULT_ATTRS.photoAttr
  };
}
function extractContact(raw, attrKeys) {
  if (!raw || typeof raw !== "object") return { ...EMPTY_CONTACT };
  const entity = raw;
  const attrs = mergeAttrKeys(attrKeys);
  return {
    name: asTrimmedString(readAttr(entity, attrs.nameAttr)),
    company: asTrimmedString(readAttr(entity, attrs.companyAttr)),
    jobTitle: asTrimmedString(readAttr(entity, attrs.jobTitleAttr)),
    email: asTrimmedString(readAttr(entity, attrs.emailAttr)),
    phone: asTrimmedString(readAttr(entity, attrs.phoneAttr)),
    address: asTrimmedString(readAttr(entity, attrs.addressAttr)),
    photo: resolvePhotoSrc(readAttr(entity, attrs.photoAttr))
  };
}
function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { family: "", given: "" };
  if (parts.length === 1) return { family: parts[0], given: "" };
  return { family: parts[parts.length - 1], given: parts.slice(0, -1).join(" ") };
}
function buildVCard(contact) {
  const lines = ["BEGIN:VCARD", "VERSION:3.0"];
  if (contact.name) {
    const { family, given } = splitName(contact.name);
    lines.push(`FN:${sanitizeVCardValue(contact.name)}`);
    lines.push(`N:${sanitizeVCardValue(family)};${sanitizeVCardValue(given)};;;`);
  }
  if (contact.company) lines.push(`ORG:${sanitizeVCardValue(contact.company)}`);
  if (contact.jobTitle) lines.push(`TITLE:${sanitizeVCardValue(contact.jobTitle)}`);
  if (contact.email) lines.push(`EMAIL;TYPE=INTERNET:${sanitizeVCardValue(contact.email)}`);
  if (contact.phone) lines.push(`TEL;TYPE=CELL:${sanitizeVCardValue(contact.phone)}`);
  if (contact.address) {
    lines.push(`ADR;TYPE=WORK:;;${sanitizeVCardValue(contact.address)};;;;`);
  }
  if (contact.photo) {
    if (contact.photo.startsWith("data:")) {
      const match = /^data:([^;]+);base64,(.+)$/i.exec(contact.photo);
      if (match) {
        const mime = match[1].toLowerCase();
        const type = mime.includes("png") ? "PNG" : mime.includes("gif") ? "GIF" : "JPEG";
        lines.push(`PHOTO;ENCODING=b;TYPE=${type}:${match[2].replace(/\s/g, "")}`);
      }
    } else {
      lines.push(`PHOTO;VALUE=URI:${sanitizeVCardValue(contact.photo)}`);
    }
  }
  lines.push("END:VCARD");
  return lines.join("\r\n");
}
function contactFileName(contact) {
  const base = (contact.name || contact.email || "contact").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "_").slice(0, 64);
  return `${base || "contact"}.vcf`;
}
function downloadVCard(contact) {
  const vcard = buildVCard(contact);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = contactFileName(contact);
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function initialsFromName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}
const SAMPLE_CONTACT = {
  name: "Alex Morgan",
  company: "4D Method",
  jobTitle: "Product Designer",
  email: "alex.morgan@example.com",
  phone: "+1 415 555 0199",
  address: "500 Howard St, San Francisco, CA",
  photo: ""
};

var browser = {};

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

var canPromise$1 = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
};

var qrcode = {};

var utils$1 = {};

let toSJISFunction;
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
utils$1.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
utils$1.getBCHDigit = function (data) {
  let digit = 0;

  while (data !== 0) {
    digit++;
    data >>>= 1;
  }

  return digit
};

utils$1.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f;
};

utils$1.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
};

utils$1.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
};

var errorCorrectionLevel = {};

(function (exports) {
	exports.L = { bit: 1 };
	exports.M = { bit: 0 };
	exports.Q = { bit: 3 };
	exports.H = { bit: 2 };

	function fromString (string) {
	  if (typeof string !== 'string') {
	    throw new Error('Param is not a string')
	  }

	  const lcStr = string.toLowerCase();

	  switch (lcStr) {
	    case 'l':
	    case 'low':
	      return exports.L

	    case 'm':
	    case 'medium':
	      return exports.M

	    case 'q':
	    case 'quartile':
	      return exports.Q

	    case 'h':
	    case 'high':
	      return exports.H

	    default:
	      throw new Error('Unknown EC Level: ' + string)
	  }
	}

	exports.isValid = function isValid (level) {
	  return level && typeof level.bit !== 'undefined' &&
	    level.bit >= 0 && level.bit < 4
	};

	exports.from = function from (value, defaultValue) {
	  if (exports.isValid(value)) {
	    return value
	  }

	  try {
	    return fromString(value)
	  } catch (e) {
	    return defaultValue
	  }
	}; 
} (errorCorrectionLevel));

function BitBuffer$1 () {
  this.buffer = [];
  this.length = 0;
}

BitBuffer$1.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1);
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
    }

    this.length++;
  }
};

var bitBuffer = BitBuffer$1;

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */

function BitMatrix$1 (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix$1.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix$1.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix$1.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix$1.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
};

var bitMatrix = BitMatrix$1;

var alignmentPattern = {};

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

(function (exports) {
	const getSymbolSize = utils$1.getSymbolSize;

	/**
	 * Calculate the row/column coordinates of the center module of each alignment pattern
	 * for the specified QR Code version.
	 *
	 * The alignment patterns are positioned symmetrically on either side of the diagonal
	 * running from the top left corner of the symbol to the bottom right corner.
	 *
	 * Since positions are simmetrical only half of the coordinates are returned.
	 * Each item of the array will represent in turn the x and y coordinate.
	 * @see {@link getPositions}
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinate
	 */
	exports.getRowColCoords = function getRowColCoords (version) {
	  if (version === 1) return []

	  const posCount = Math.floor(version / 7) + 2;
	  const size = getSymbolSize(version);
	  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
	  const positions = [size - 7]; // Last coord is always (size - 7)

	  for (let i = 1; i < posCount - 1; i++) {
	    positions[i] = positions[i - 1] - intervals;
	  }

	  positions.push(6); // First coord is always 6

	  return positions.reverse()
	};

	/**
	 * Returns an array containing the positions of each alignment pattern.
	 * Each array's element represent the center point of the pattern as (x, y) coordinates
	 *
	 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
	 * and filtering out the items that overlaps with finder pattern
	 *
	 * @example
	 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
	 * The alignment patterns, therefore, are to be centered on (row, column)
	 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
	 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
	 * and are not therefore used for alignment patterns.
	 *
	 * let pos = getPositions(7)
	 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinates
	 */
	exports.getPositions = function getPositions (version) {
	  const coords = [];
	  const pos = exports.getRowColCoords(version);
	  const posLength = pos.length;

	  for (let i = 0; i < posLength; i++) {
	    for (let j = 0; j < posLength; j++) {
	      // Skip if position is occupied by finder patterns
	      if ((i === 0 && j === 0) || // top-left
	          (i === 0 && j === posLength - 1) || // bottom-left
	          (i === posLength - 1 && j === 0)) { // top-right
	        continue
	      }

	      coords.push([pos[i], pos[j]]);
	    }
	  }

	  return coords
	}; 
} (alignmentPattern));

var finderPattern = {};

const getSymbolSize = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
finderPattern.getPositions = function getPositions (version) {
  const size = getSymbolSize(version);

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
};

var maskPattern = {};

/**
 * Data mask pattern reference
 * @type {Object}
 */

(function (exports) {
	exports.Patterns = {
	  PATTERN000: 0,
	  PATTERN001: 1,
	  PATTERN010: 2,
	  PATTERN011: 3,
	  PATTERN100: 4,
	  PATTERN101: 5,
	  PATTERN110: 6,
	  PATTERN111: 7
	};

	/**
	 * Weighted penalty scores for the undesirable features
	 * @type {Object}
	 */
	const PenaltyScores = {
	  N1: 3,
	  N2: 3,
	  N3: 40,
	  N4: 10
	};

	/**
	 * Check if mask pattern value is valid
	 *
	 * @param  {Number}  mask    Mask pattern
	 * @return {Boolean}         true if valid, false otherwise
	 */
	exports.isValid = function isValid (mask) {
	  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
	};

	/**
	 * Returns mask pattern from a value.
	 * If value is not valid, returns undefined
	 *
	 * @param  {Number|String} value        Mask pattern value
	 * @return {Number}                     Valid mask pattern or undefined
	 */
	exports.from = function from (value) {
	  return exports.isValid(value) ? parseInt(value, 10) : undefined
	};

	/**
	* Find adjacent modules in row/column with the same color
	* and assign a penalty value.
	*
	* Points: N1 + i
	* i is the amount by which the number of adjacent modules of the same color exceeds 5
	*/
	exports.getPenaltyN1 = function getPenaltyN1 (data) {
	  const size = data.size;
	  let points = 0;
	  let sameCountCol = 0;
	  let sameCountRow = 0;
	  let lastCol = null;
	  let lastRow = null;

	  for (let row = 0; row < size; row++) {
	    sameCountCol = sameCountRow = 0;
	    lastCol = lastRow = null;

	    for (let col = 0; col < size; col++) {
	      let module = data.get(row, col);
	      if (module === lastCol) {
	        sameCountCol++;
	      } else {
	        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
	        lastCol = module;
	        sameCountCol = 1;
	      }

	      module = data.get(col, row);
	      if (module === lastRow) {
	        sameCountRow++;
	      } else {
	        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
	        lastRow = module;
	        sameCountRow = 1;
	      }
	    }

	    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
	    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
	  }

	  return points
	};

	/**
	 * Find 2x2 blocks with the same color and assign a penalty value
	 *
	 * Points: N2 * (m - 1) * (n - 1)
	 */
	exports.getPenaltyN2 = function getPenaltyN2 (data) {
	  const size = data.size;
	  let points = 0;

	  for (let row = 0; row < size - 1; row++) {
	    for (let col = 0; col < size - 1; col++) {
	      const last = data.get(row, col) +
	        data.get(row, col + 1) +
	        data.get(row + 1, col) +
	        data.get(row + 1, col + 1);

	      if (last === 4 || last === 0) points++;
	    }
	  }

	  return points * PenaltyScores.N2
	};

	/**
	 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
	 * preceded or followed by light area 4 modules wide
	 *
	 * Points: N3 * number of pattern found
	 */
	exports.getPenaltyN3 = function getPenaltyN3 (data) {
	  const size = data.size;
	  let points = 0;
	  let bitsCol = 0;
	  let bitsRow = 0;

	  for (let row = 0; row < size; row++) {
	    bitsCol = bitsRow = 0;
	    for (let col = 0; col < size; col++) {
	      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
	      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;

	      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
	      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
	    }
	  }

	  return points * PenaltyScores.N3
	};

	/**
	 * Calculate proportion of dark modules in entire symbol
	 *
	 * Points: N4 * k
	 *
	 * k is the rating of the deviation of the proportion of dark modules
	 * in the symbol from 50% in steps of 5%
	 */
	exports.getPenaltyN4 = function getPenaltyN4 (data) {
	  let darkCount = 0;
	  const modulesCount = data.data.length;

	  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];

	  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);

	  return k * PenaltyScores.N4
	};

	/**
	 * Return mask value at given position
	 *
	 * @param  {Number} maskPattern Pattern reference value
	 * @param  {Number} i           Row
	 * @param  {Number} j           Column
	 * @return {Boolean}            Mask value
	 */
	function getMaskAt (maskPattern, i, j) {
	  switch (maskPattern) {
	    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
	    case exports.Patterns.PATTERN001: return i % 2 === 0
	    case exports.Patterns.PATTERN010: return j % 3 === 0
	    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
	    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
	    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
	    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
	    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

	    default: throw new Error('bad maskPattern:' + maskPattern)
	  }
	}

	/**
	 * Apply a mask pattern to a BitMatrix
	 *
	 * @param  {Number}    pattern Pattern reference number
	 * @param  {BitMatrix} data    BitMatrix data
	 */
	exports.applyMask = function applyMask (pattern, data) {
	  const size = data.size;

	  for (let col = 0; col < size; col++) {
	    for (let row = 0; row < size; row++) {
	      if (data.isReserved(row, col)) continue
	      data.xor(row, col, getMaskAt(pattern, row, col));
	    }
	  }
	};

	/**
	 * Returns the best mask pattern for data
	 *
	 * @param  {BitMatrix} data
	 * @return {Number} Mask pattern reference number
	 */
	exports.getBestMask = function getBestMask (data, setupFormatFunc) {
	  const numPatterns = Object.keys(exports.Patterns).length;
	  let bestPattern = 0;
	  let lowerPenalty = Infinity;

	  for (let p = 0; p < numPatterns; p++) {
	    setupFormatFunc(p);
	    exports.applyMask(p, data);

	    // Calculate penalty
	    const penalty =
	      exports.getPenaltyN1(data) +
	      exports.getPenaltyN2(data) +
	      exports.getPenaltyN3(data) +
	      exports.getPenaltyN4(data);

	    // Undo previously applied mask
	    exports.applyMask(p, data);

	    if (penalty < lowerPenalty) {
	      lowerPenalty = penalty;
	      bestPattern = p;
	    }
	  }

	  return bestPattern
	}; 
} (maskPattern));

var errorCorrectionCode = {};

const ECLevel$1 = errorCorrectionLevel;

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
];

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
errorCorrectionCode.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

var polynomial = {};

var galoisField = {};

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;

    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
}());

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.exp = function exp (n) {
  return EXP_TABLE[n]
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
galoisField.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
};

(function (exports) {
	const GF = galoisField;

	/**
	 * Multiplies two polynomials inside Galois Field
	 *
	 * @param  {Uint8Array} p1 Polynomial
	 * @param  {Uint8Array} p2 Polynomial
	 * @return {Uint8Array}    Product of p1 and p2
	 */
	exports.mul = function mul (p1, p2) {
	  const coeff = new Uint8Array(p1.length + p2.length - 1);

	  for (let i = 0; i < p1.length; i++) {
	    for (let j = 0; j < p2.length; j++) {
	      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
	    }
	  }

	  return coeff
	};

	/**
	 * Calculate the remainder of polynomials division
	 *
	 * @param  {Uint8Array} divident Polynomial
	 * @param  {Uint8Array} divisor  Polynomial
	 * @return {Uint8Array}          Remainder
	 */
	exports.mod = function mod (divident, divisor) {
	  let result = new Uint8Array(divident);

	  while ((result.length - divisor.length) >= 0) {
	    const coeff = result[0];

	    for (let i = 0; i < divisor.length; i++) {
	      result[i] ^= GF.mul(divisor[i], coeff);
	    }

	    // remove all zeros from buffer head
	    let offset = 0;
	    while (offset < result.length && result[offset] === 0) offset++;
	    result = result.slice(offset);
	  }

	  return result
	};

	/**
	 * Generate an irreducible generator polynomial of specified degree
	 * (used by Reed-Solomon encoder)
	 *
	 * @param  {Number} degree Degree of the generator polynomial
	 * @return {Uint8Array}    Buffer containing polynomial coefficients
	 */
	exports.generateECPolynomial = function generateECPolynomial (degree) {
	  let poly = new Uint8Array([1]);
	  for (let i = 0; i < degree; i++) {
	    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
	  }

	  return poly
	}; 
} (polynomial));

const Polynomial = polynomial;

function ReedSolomonEncoder$1 (degree) {
  this.genPoly = undefined;
  this.degree = degree;

  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder$1.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder$1.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);

    return buff
  }

  return remainder
};

var reedSolomonEncoder = ReedSolomonEncoder$1;

var version = {};

var mode = {};

var versionCheck = {};

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */

versionCheck.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
};

var regex = {};

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

regex.KANJI = new RegExp(kanji, 'g');
regex.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
regex.BYTE = new RegExp(byte, 'g');
regex.NUMERIC = new RegExp(numeric, 'g');
regex.ALPHANUMERIC = new RegExp(alphanumeric, 'g');

const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

regex.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
};

regex.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
};

regex.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
};

(function (exports) {
	const VersionCheck = versionCheck;
	const Regex = regex;

	/**
	 * Numeric mode encodes data from the decimal digit set (0 - 9)
	 * (byte values 30HEX to 39HEX).
	 * Normally, 3 data characters are represented by 10 bits.
	 *
	 * @type {Object}
	 */
	exports.NUMERIC = {
	  id: 'Numeric',
	  bit: 1 << 0,
	  ccBits: [10, 12, 14]
	};

	/**
	 * Alphanumeric mode encodes data from a set of 45 characters,
	 * i.e. 10 numeric digits (0 - 9),
	 *      26 alphabetic characters (A - Z),
	 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
	 * Normally, two input characters are represented by 11 bits.
	 *
	 * @type {Object}
	 */
	exports.ALPHANUMERIC = {
	  id: 'Alphanumeric',
	  bit: 1 << 1,
	  ccBits: [9, 11, 13]
	};

	/**
	 * In byte mode, data is encoded at 8 bits per character.
	 *
	 * @type {Object}
	 */
	exports.BYTE = {
	  id: 'Byte',
	  bit: 1 << 2,
	  ccBits: [8, 16, 16]
	};

	/**
	 * The Kanji mode efficiently encodes Kanji characters in accordance with
	 * the Shift JIS system based on JIS X 0208.
	 * The Shift JIS values are shifted from the JIS X 0208 values.
	 * JIS X 0208 gives details of the shift coded representation.
	 * Each two-byte character value is compacted to a 13-bit binary codeword.
	 *
	 * @type {Object}
	 */
	exports.KANJI = {
	  id: 'Kanji',
	  bit: 1 << 3,
	  ccBits: [8, 10, 12]
	};

	/**
	 * Mixed mode will contain a sequences of data in a combination of any of
	 * the modes described above
	 *
	 * @type {Object}
	 */
	exports.MIXED = {
	  bit: -1
	};

	/**
	 * Returns the number of bits needed to store the data length
	 * according to QR Code specifications.
	 *
	 * @param  {Mode}   mode    Data mode
	 * @param  {Number} version QR Code version
	 * @return {Number}         Number of bits
	 */
	exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
	  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

	  if (!VersionCheck.isValid(version)) {
	    throw new Error('Invalid version: ' + version)
	  }

	  if (version >= 1 && version < 10) return mode.ccBits[0]
	  else if (version < 27) return mode.ccBits[1]
	  return mode.ccBits[2]
	};

	/**
	 * Returns the most efficient mode to store the specified data
	 *
	 * @param  {String} dataStr Input data string
	 * @return {Mode}           Best mode
	 */
	exports.getBestModeForData = function getBestModeForData (dataStr) {
	  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
	  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
	  else if (Regex.testKanji(dataStr)) return exports.KANJI
	  else return exports.BYTE
	};

	/**
	 * Return mode name as string
	 *
	 * @param {Mode} mode Mode object
	 * @returns {String}  Mode name
	 */
	exports.toString = function toString (mode) {
	  if (mode && mode.id) return mode.id
	  throw new Error('Invalid mode')
	};

	/**
	 * Check if input param is a valid mode object
	 *
	 * @param   {Mode}    mode Mode object
	 * @returns {Boolean} True if valid mode, false otherwise
	 */
	exports.isValid = function isValid (mode) {
	  return mode && mode.bit && mode.ccBits
	};

	/**
	 * Get mode object from its name
	 *
	 * @param   {String} string Mode name
	 * @returns {Mode}          Mode object
	 */
	function fromString (string) {
	  if (typeof string !== 'string') {
	    throw new Error('Param is not a string')
	  }

	  const lcStr = string.toLowerCase();

	  switch (lcStr) {
	    case 'numeric':
	      return exports.NUMERIC
	    case 'alphanumeric':
	      return exports.ALPHANUMERIC
	    case 'kanji':
	      return exports.KANJI
	    case 'byte':
	      return exports.BYTE
	    default:
	      throw new Error('Unknown mode: ' + string)
	  }
	}

	/**
	 * Returns mode from a value.
	 * If value is not a valid mode, returns defaultValue
	 *
	 * @param  {Mode|String} value        Encoding mode
	 * @param  {Mode}        defaultValue Fallback value
	 * @return {Mode}                     Encoding mode
	 */
	exports.from = function from (value, defaultValue) {
	  if (exports.isValid(value)) {
	    return value
	  }

	  try {
	    return fromString(value)
	  } catch (e) {
	    return defaultValue
	  }
	}; 
} (mode));

(function (exports) {
	const Utils = utils$1;
	const ECCode = errorCorrectionCode;
	const ECLevel = errorCorrectionLevel;
	const Mode = mode;
	const VersionCheck = versionCheck;

	// Generator polynomial used to encode version information
	const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
	const G18_BCH = Utils.getBCHDigit(G18);

	function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
	  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
	    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
	      return currentVersion
	    }
	  }

	  return undefined
	}

	function getReservedBitsCount (mode, version) {
	  // Character count indicator + mode indicator bits
	  return Mode.getCharCountIndicator(mode, version) + 4
	}

	function getTotalBitsFromDataArray (segments, version) {
	  let totalBits = 0;

	  segments.forEach(function (data) {
	    const reservedBits = getReservedBitsCount(data.mode, version);
	    totalBits += reservedBits + data.getBitsLength();
	  });

	  return totalBits
	}

	function getBestVersionForMixedData (segments, errorCorrectionLevel) {
	  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
	    const length = getTotalBitsFromDataArray(segments, currentVersion);
	    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
	      return currentVersion
	    }
	  }

	  return undefined
	}

	/**
	 * Returns version number from a value.
	 * If value is not a valid version, returns defaultValue
	 *
	 * @param  {Number|String} value        QR Code version
	 * @param  {Number}        defaultValue Fallback value
	 * @return {Number}                     QR Code version number
	 */
	exports.from = function from (value, defaultValue) {
	  if (VersionCheck.isValid(value)) {
	    return parseInt(value, 10)
	  }

	  return defaultValue
	};

	/**
	 * Returns how much data can be stored with the specified QR code version
	 * and error correction level
	 *
	 * @param  {Number} version              QR Code version (1-40)
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @param  {Mode}   mode                 Data mode
	 * @return {Number}                      Quantity of storable data
	 */
	exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
	  if (!VersionCheck.isValid(version)) {
	    throw new Error('Invalid QR Code version')
	  }

	  // Use Byte mode as default
	  if (typeof mode === 'undefined') mode = Mode.BYTE;

	  // Total codewords for this QR code version (Data + Error correction)
	  const totalCodewords = Utils.getSymbolTotalCodewords(version);

	  // Total number of error correction codewords
	  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

	  // Total number of data codewords
	  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

	  if (mode === Mode.MIXED) return dataTotalCodewordsBits

	  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

	  // Return max number of storable codewords
	  switch (mode) {
	    case Mode.NUMERIC:
	      return Math.floor((usableBits / 10) * 3)

	    case Mode.ALPHANUMERIC:
	      return Math.floor((usableBits / 11) * 2)

	    case Mode.KANJI:
	      return Math.floor(usableBits / 13)

	    case Mode.BYTE:
	    default:
	      return Math.floor(usableBits / 8)
	  }
	};

	/**
	 * Returns the minimum version needed to contain the amount of data
	 *
	 * @param  {Segment} data                    Segment of data
	 * @param  {Number} [errorCorrectionLevel=H] Error correction level
	 * @param  {Mode} mode                       Data mode
	 * @return {Number}                          QR Code version
	 */
	exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
	  let seg;

	  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

	  if (Array.isArray(data)) {
	    if (data.length > 1) {
	      return getBestVersionForMixedData(data, ecl)
	    }

	    if (data.length === 0) {
	      return 1
	    }

	    seg = data[0];
	  } else {
	    seg = data;
	  }

	  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
	};

	/**
	 * Returns version information with relative error correction bits
	 *
	 * The version information is included in QR Code symbols of version 7 or larger.
	 * It consists of an 18-bit sequence containing 6 data bits,
	 * with 12 error correction bits calculated using the (18, 6) Golay code.
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         Encoded version info bits
	 */
	exports.getEncodedBits = function getEncodedBits (version) {
	  if (!VersionCheck.isValid(version) || version < 7) {
	    throw new Error('Invalid QR Code version')
	  }

	  let d = version << 12;

	  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
	    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH));
	  }

	  return (version << 12) | d
	}; 
} (version));

var formatInfo = {};

const Utils$3 = utils$1;

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
const G15_BCH = Utils$3.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
formatInfo.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask);
  let d = data << 10;

  while (Utils$3.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils$3.getBCHDigit(d) - G15_BCH));
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
};

var segments = {};

const Mode$4 = mode;

function NumericData (data) {
  this.mode = Mode$4.NUMERIC;
  this.data = data.toString();
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
};

NumericData.prototype.getLength = function getLength () {
  return this.data.length
};

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
};

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);

    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);

    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};

var numericData = NumericData;

const Mode$3 = mode;

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];

function AlphanumericData (data) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
};

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
};

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
};

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};

var alphanumericData = AlphanumericData;

const Mode$2 = mode;

function ByteData (data) {
  this.mode = Mode$2.BYTE;
  if (typeof (data) === 'string') {
    this.data = new TextEncoder().encode(data);
  } else {
    this.data = new Uint8Array(data);
  }
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
};

ByteData.prototype.getLength = function getLength () {
  return this.data.length
};

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
};

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

var byteData = ByteData;

const Mode$1 = mode;
const Utils$2 = utils$1;

function KanjiData (data) {
  this.mode = Mode$1.KANJI;
  this.data = data;
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
};

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
};

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
};

KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils$2.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};

var kanjiData = KanjiData;

var dijkstra = {exports: {}};

(function (module) {

	/******************************************************************************
	 * Created 2008-08-19.
	 *
	 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
	 *
	 * Copyright (C) 2008
	 *   Wyatt Baldwin <self@wyattbaldwin.com>
	 *   All rights reserved
	 *
	 * Licensed under the MIT license.
	 *
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *****************************************************************************/
	var dijkstra = {
	  single_source_shortest_paths: function(graph, s, d) {
	    // Predecessor map for each node that has been encountered.
	    // node ID => predecessor node ID
	    var predecessors = {};

	    // Costs of shortest paths from s to all nodes encountered.
	    // node ID => cost
	    var costs = {};
	    costs[s] = 0;

	    // Costs of shortest paths from s to all nodes encountered; differs from
	    // `costs` in that it provides easy access to the node that currently has
	    // the known shortest path from s.
	    // XXX: Do we actually need both `costs` and `open`?
	    var open = dijkstra.PriorityQueue.make();
	    open.push(s, 0);

	    var closest,
	        u, v,
	        cost_of_s_to_u,
	        adjacent_nodes,
	        cost_of_e,
	        cost_of_s_to_u_plus_cost_of_e,
	        cost_of_s_to_v,
	        first_visit;
	    while (!open.empty()) {
	      // In the nodes remaining in graph that have a known cost from s,
	      // find the node, u, that currently has the shortest path from s.
	      closest = open.pop();
	      u = closest.value;
	      cost_of_s_to_u = closest.cost;

	      // Get nodes adjacent to u...
	      adjacent_nodes = graph[u] || {};

	      // ...and explore the edges that connect u to those nodes, updating
	      // the cost of the shortest paths to any or all of those nodes as
	      // necessary. v is the node across the current edge from u.
	      for (v in adjacent_nodes) {
	        if (adjacent_nodes.hasOwnProperty(v)) {
	          // Get the cost of the edge running from u to v.
	          cost_of_e = adjacent_nodes[v];

	          // Cost of s to u plus the cost of u to v across e--this is *a*
	          // cost from s to v that may or may not be less than the current
	          // known cost to v.
	          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

	          // If we haven't visited v yet OR if the current known cost from s to
	          // v is greater than the new cost we just found (cost of s to u plus
	          // cost of u to v across e), update v's cost in the cost list and
	          // update v's predecessor in the predecessor list (it's now u).
	          cost_of_s_to_v = costs[v];
	          first_visit = (typeof costs[v] === 'undefined');
	          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
	            costs[v] = cost_of_s_to_u_plus_cost_of_e;
	            open.push(v, cost_of_s_to_u_plus_cost_of_e);
	            predecessors[v] = u;
	          }
	        }
	      }
	    }

	    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
	      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
	      throw new Error(msg);
	    }

	    return predecessors;
	  },

	  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
	    var nodes = [];
	    var u = d;
	    while (u) {
	      nodes.push(u);
	      predecessors[u];
	      u = predecessors[u];
	    }
	    nodes.reverse();
	    return nodes;
	  },

	  find_path: function(graph, s, d) {
	    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
	    return dijkstra.extract_shortest_path_from_predecessor_list(
	      predecessors, d);
	  },

	  /**
	   * A very naive priority queue implementation.
	   */
	  PriorityQueue: {
	    make: function (opts) {
	      var T = dijkstra.PriorityQueue,
	          t = {},
	          key;
	      opts = opts || {};
	      for (key in T) {
	        if (T.hasOwnProperty(key)) {
	          t[key] = T[key];
	        }
	      }
	      t.queue = [];
	      t.sorter = opts.sorter || T.default_sorter;
	      return t;
	    },

	    default_sorter: function (a, b) {
	      return a.cost - b.cost;
	    },

	    /**
	     * Add a new item to the queue and ensure the highest priority element
	     * is at the front of the queue.
	     */
	    push: function (value, cost) {
	      var item = {value: value, cost: cost};
	      this.queue.push(item);
	      this.queue.sort(this.sorter);
	    },

	    /**
	     * Return the highest priority element in the queue.
	     */
	    pop: function () {
	      return this.queue.shift();
	    },

	    empty: function () {
	      return this.queue.length === 0;
	    }
	  }
	};


	// node.js module exports
	{
	  module.exports = dijkstra;
	} 
} (dijkstra));

var dijkstraExports = dijkstra.exports;

(function (exports) {
	const Mode = mode;
	const NumericData = numericData;
	const AlphanumericData = alphanumericData;
	const ByteData = byteData;
	const KanjiData = kanjiData;
	const Regex = regex;
	const Utils = utils$1;
	const dijkstra = dijkstraExports;

	/**
	 * Returns UTF8 byte length
	 *
	 * @param  {String} str Input string
	 * @return {Number}     Number of byte
	 */
	function getStringByteLength (str) {
	  return unescape(encodeURIComponent(str)).length
	}

	/**
	 * Get a list of segments of the specified mode
	 * from a string
	 *
	 * @param  {Mode}   mode Segment mode
	 * @param  {String} str  String to process
	 * @return {Array}       Array of object with segments data
	 */
	function getSegments (regex, mode, str) {
	  const segments = [];
	  let result;

	  while ((result = regex.exec(str)) !== null) {
	    segments.push({
	      data: result[0],
	      index: result.index,
	      mode: mode,
	      length: result[0].length
	    });
	  }

	  return segments
	}

	/**
	 * Extracts a series of segments with the appropriate
	 * modes from a string
	 *
	 * @param  {String} dataStr Input string
	 * @return {Array}          Array of object with segments data
	 */
	function getSegmentsFromString (dataStr) {
	  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
	  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
	  let byteSegs;
	  let kanjiSegs;

	  if (Utils.isKanjiModeEnabled()) {
	    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
	    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
	  } else {
	    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
	    kanjiSegs = [];
	  }

	  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

	  return segs
	    .sort(function (s1, s2) {
	      return s1.index - s2.index
	    })
	    .map(function (obj) {
	      return {
	        data: obj.data,
	        mode: obj.mode,
	        length: obj.length
	      }
	    })
	}

	/**
	 * Returns how many bits are needed to encode a string of
	 * specified length with the specified mode
	 *
	 * @param  {Number} length String length
	 * @param  {Mode} mode     Segment mode
	 * @return {Number}        Bit length
	 */
	function getSegmentBitsLength (length, mode) {
	  switch (mode) {
	    case Mode.NUMERIC:
	      return NumericData.getBitsLength(length)
	    case Mode.ALPHANUMERIC:
	      return AlphanumericData.getBitsLength(length)
	    case Mode.KANJI:
	      return KanjiData.getBitsLength(length)
	    case Mode.BYTE:
	      return ByteData.getBitsLength(length)
	  }
	}

	/**
	 * Merges adjacent segments which have the same mode
	 *
	 * @param  {Array} segs Array of object with segments data
	 * @return {Array}      Array of object with segments data
	 */
	function mergeSegments (segs) {
	  return segs.reduce(function (acc, curr) {
	    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
	    if (prevSeg && prevSeg.mode === curr.mode) {
	      acc[acc.length - 1].data += curr.data;
	      return acc
	    }

	    acc.push(curr);
	    return acc
	  }, [])
	}

	/**
	 * Generates a list of all possible nodes combination which
	 * will be used to build a segments graph.
	 *
	 * Nodes are divided by groups. Each group will contain a list of all the modes
	 * in which is possible to encode the given text.
	 *
	 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
	 * The group for '12345' will contain then 3 objects, one for each
	 * possible encoding mode.
	 *
	 * Each node represents a possible segment.
	 *
	 * @param  {Array} segs Array of object with segments data
	 * @return {Array}      Array of object with segments data
	 */
	function buildNodes (segs) {
	  const nodes = [];
	  for (let i = 0; i < segs.length; i++) {
	    const seg = segs[i];

	    switch (seg.mode) {
	      case Mode.NUMERIC:
	        nodes.push([seg,
	          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
	          { data: seg.data, mode: Mode.BYTE, length: seg.length }
	        ]);
	        break
	      case Mode.ALPHANUMERIC:
	        nodes.push([seg,
	          { data: seg.data, mode: Mode.BYTE, length: seg.length }
	        ]);
	        break
	      case Mode.KANJI:
	        nodes.push([seg,
	          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
	        ]);
	        break
	      case Mode.BYTE:
	        nodes.push([
	          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
	        ]);
	    }
	  }

	  return nodes
	}

	/**
	 * Builds a graph from a list of nodes.
	 * All segments in each node group will be connected with all the segments of
	 * the next group and so on.
	 *
	 * At each connection will be assigned a weight depending on the
	 * segment's byte length.
	 *
	 * @param  {Array} nodes    Array of object with segments data
	 * @param  {Number} version QR Code version
	 * @return {Object}         Graph of all possible segments
	 */
	function buildGraph (nodes, version) {
	  const table = {};
	  const graph = { start: {} };
	  let prevNodeIds = ['start'];

	  for (let i = 0; i < nodes.length; i++) {
	    const nodeGroup = nodes[i];
	    const currentNodeIds = [];

	    for (let j = 0; j < nodeGroup.length; j++) {
	      const node = nodeGroup[j];
	      const key = '' + i + j;

	      currentNodeIds.push(key);
	      table[key] = { node: node, lastCount: 0 };
	      graph[key] = {};

	      for (let n = 0; n < prevNodeIds.length; n++) {
	        const prevNodeId = prevNodeIds[n];

	        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
	          graph[prevNodeId][key] =
	            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
	            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

	          table[prevNodeId].lastCount += node.length;
	        } else {
	          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;

	          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
	            4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
	        }
	      }
	    }

	    prevNodeIds = currentNodeIds;
	  }

	  for (let n = 0; n < prevNodeIds.length; n++) {
	    graph[prevNodeIds[n]].end = 0;
	  }

	  return { map: graph, table: table }
	}

	/**
	 * Builds a segment from a specified data and mode.
	 * If a mode is not specified, the more suitable will be used.
	 *
	 * @param  {String} data             Input data
	 * @param  {Mode | String} modesHint Data mode
	 * @return {Segment}                 Segment
	 */
	function buildSingleSegment (data, modesHint) {
	  let mode;
	  const bestMode = Mode.getBestModeForData(data);

	  mode = Mode.from(modesHint, bestMode);

	  // Make sure data can be encoded
	  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
	    throw new Error('"' + data + '"' +
	      ' cannot be encoded with mode ' + Mode.toString(mode) +
	      '.\n Suggested mode is: ' + Mode.toString(bestMode))
	  }

	  // Use Mode.BYTE if Kanji support is disabled
	  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
	    mode = Mode.BYTE;
	  }

	  switch (mode) {
	    case Mode.NUMERIC:
	      return new NumericData(data)

	    case Mode.ALPHANUMERIC:
	      return new AlphanumericData(data)

	    case Mode.KANJI:
	      return new KanjiData(data)

	    case Mode.BYTE:
	      return new ByteData(data)
	  }
	}

	/**
	 * Builds a list of segments from an array.
	 * Array can contain Strings or Objects with segment's info.
	 *
	 * For each item which is a string, will be generated a segment with the given
	 * string and the more appropriate encoding mode.
	 *
	 * For each item which is an object, will be generated a segment with the given
	 * data and mode.
	 * Objects must contain at least the property "data".
	 * If property "mode" is not present, the more suitable mode will be used.
	 *
	 * @param  {Array} array Array of objects with segments data
	 * @return {Array}       Array of Segments
	 */
	exports.fromArray = function fromArray (array) {
	  return array.reduce(function (acc, seg) {
	    if (typeof seg === 'string') {
	      acc.push(buildSingleSegment(seg, null));
	    } else if (seg.data) {
	      acc.push(buildSingleSegment(seg.data, seg.mode));
	    }

	    return acc
	  }, [])
	};

	/**
	 * Builds an optimized sequence of segments from a string,
	 * which will produce the shortest possible bitstream.
	 *
	 * @param  {String} data    Input string
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of segments
	 */
	exports.fromString = function fromString (data, version) {
	  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());

	  const nodes = buildNodes(segs);
	  const graph = buildGraph(nodes, version);
	  const path = dijkstra.find_path(graph.map, 'start', 'end');

	  const optimizedSegs = [];
	  for (let i = 1; i < path.length - 1; i++) {
	    optimizedSegs.push(graph.table[path[i]].node);
	  }

	  return exports.fromArray(mergeSegments(optimizedSegs))
	};

	/**
	 * Splits a string in various segments with the modes which
	 * best represent their content.
	 * The produced segments are far from being optimized.
	 * The output of this function is only used to estimate a QR Code version
	 * which may contain the data.
	 *
	 * @param  {string} data Input string
	 * @return {Array}       Array of segments
	 */
	exports.rawSplit = function rawSplit (data) {
	  return exports.fromArray(
	    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
	  )
	}; 
} (segments));

const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size;

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version);

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = ((bits >> i) & 1) === 1;

    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
          }

          matrix.set(row, col - c, dark);
          bitIndex--;

          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);

  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);

    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments;

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils$1.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);

  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
qrcode.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);

    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
};

var canvas = {};

var utils = {};

(function (exports) {
	function hex2rgba (hex) {
	  if (typeof hex === 'number') {
	    hex = hex.toString();
	  }

	  if (typeof hex !== 'string') {
	    throw new Error('Color should be defined as hex string')
	  }

	  let hexCode = hex.slice().replace('#', '').split('');
	  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
	    throw new Error('Invalid hex color: ' + hex)
	  }

	  // Convert from short to long form (fff -> ffffff)
	  if (hexCode.length === 3 || hexCode.length === 4) {
	    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
	      return [c, c]
	    }));
	  }

	  // Add default alpha value
	  if (hexCode.length === 6) hexCode.push('F', 'F');

	  const hexValue = parseInt(hexCode.join(''), 16);

	  return {
	    r: (hexValue >> 24) & 255,
	    g: (hexValue >> 16) & 255,
	    b: (hexValue >> 8) & 255,
	    a: hexValue & 255,
	    hex: '#' + hexCode.slice(0, 6).join('')
	  }
	}

	exports.getOptions = function getOptions (options) {
	  if (!options) options = {};
	  if (!options.color) options.color = {};

	  const margin = typeof options.margin === 'undefined' ||
	    options.margin === null ||
	    options.margin < 0
	    ? 4
	    : options.margin;

	  const width = options.width && options.width >= 21 ? options.width : undefined;
	  const scale = options.scale || 4;

	  return {
	    width: width,
	    scale: width ? 4 : scale,
	    margin: margin,
	    color: {
	      dark: hex2rgba(options.color.dark || '#000000ff'),
	      light: hex2rgba(options.color.light || '#ffffffff')
	    },
	    type: options.type,
	    rendererOpts: options.rendererOpts || {}
	  }
	};

	exports.getScale = function getScale (qrSize, opts) {
	  return opts.width && opts.width >= qrSize + opts.margin * 2
	    ? opts.width / (qrSize + opts.margin * 2)
	    : opts.scale
	};

	exports.getImageWidth = function getImageWidth (qrSize, opts) {
	  const scale = exports.getScale(qrSize, opts);
	  return Math.floor((qrSize + opts.margin * 2) * scale)
	};

	exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
	  const size = qr.modules.size;
	  const data = qr.modules.data;
	  const scale = exports.getScale(size, opts);
	  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
	  const scaledMargin = opts.margin * scale;
	  const palette = [opts.color.light, opts.color.dark];

	  for (let i = 0; i < symbolSize; i++) {
	    for (let j = 0; j < symbolSize; j++) {
	      let posDst = (i * symbolSize + j) * 4;
	      let pxColor = opts.color.light;

	      if (i >= scaledMargin && j >= scaledMargin &&
	        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
	        const iSrc = Math.floor((i - scaledMargin) / scale);
	        const jSrc = Math.floor((j - scaledMargin) / scale);
	        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
	      }

	      imgData[posDst++] = pxColor.r;
	      imgData[posDst++] = pxColor.g;
	      imgData[posDst++] = pxColor.b;
	      imgData[posDst] = pxColor.a;
	    }
	  }
	}; 
} (utils));

(function (exports) {
	const Utils = utils;

	function clearCanvas (ctx, canvas, size) {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);

	  if (!canvas.style) canvas.style = {};
	  canvas.height = size;
	  canvas.width = size;
	  canvas.style.height = size + 'px';
	  canvas.style.width = size + 'px';
	}

	function getCanvasElement () {
	  try {
	    return document.createElement('canvas')
	  } catch (e) {
	    throw new Error('You need to specify a canvas element')
	  }
	}

	exports.render = function render (qrData, canvas, options) {
	  let opts = options;
	  let canvasEl = canvas;

	  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
	    opts = canvas;
	    canvas = undefined;
	  }

	  if (!canvas) {
	    canvasEl = getCanvasElement();
	  }

	  opts = Utils.getOptions(opts);
	  const size = Utils.getImageWidth(qrData.modules.size, opts);

	  const ctx = canvasEl.getContext('2d');
	  const image = ctx.createImageData(size, size);
	  Utils.qrToImageData(image.data, qrData, opts);

	  clearCanvas(ctx, canvasEl, size);
	  ctx.putImageData(image, 0, 0);

	  return canvasEl
	};

	exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
	  let opts = options;

	  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
	    opts = canvas;
	    canvas = undefined;
	  }

	  if (!opts) opts = {};

	  const canvasEl = exports.render(qrData, canvas, opts);

	  const type = opts.type || 'image/png';
	  const rendererOpts = opts.rendererOpts || {};

	  return canvasEl.toDataURL(type, rendererOpts.quality)
	}; 
} (canvas));

var svgTag = {};

const Utils = utils;

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;

  return str
}

function qrToPath (data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);

    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0);

        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path
}

svgTag.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>';

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag
};

const canPromise = canPromise$1;

const QRCode = qrcode;
const CanvasRenderer = canvas;
const SvgRenderer = svgTag;

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    })
  }

  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

browser.create = QRCode.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
browser.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
});

const root$3 = "_root_vqkqx_1";
const card$2 = "_card_vqkqx_21";
const main = "_main_vqkqx_55";
const identity = "_identity_vqkqx_63";
const avatar = "_avatar_vqkqx_70";
const avatarFallback = "_avatarFallback_vqkqx_81";
const who = "_who_vqkqx_91";
const name$1 = "_name_vqkqx_98";
const role = "_role_vqkqx_107";
const details = "_details_vqkqx_115";
const detail = "_detail_vqkqx_115";
const detailLabel = "_detailLabel_vqkqx_133";
const detailValue = "_detailValue_vqkqx_141";
const actions$1 = "_actions_vqkqx_158";
const downloadBtn = "_downloadBtn_vqkqx_163";
const qrPanel = "_qrPanel_vqkqx_209";
const qrImage = "_qrImage_vqkqx_223";
const qrCaption = "_qrCaption_vqkqx_231";
const empty$1 = "_empty_vqkqx_240";
const styles$5 = {
	root: root$3,
	card: card$2,
	main: main,
	identity: identity,
	avatar: avatar,
	avatarFallback: avatarFallback,
	who: who,
	name: name$1,
	role: role,
	details: details,
	detail: detail,
	detailLabel: detailLabel,
	detailValue: detailValue,
	actions: actions$1,
	downloadBtn: downloadBtn,
	qrPanel: qrPanel,
	qrImage: qrImage,
	qrCaption: qrCaption,
	empty: empty$1
};

const ContactCardView = ({
  contact,
  accentColor = "#0F766E",
  surfaceColor = "#FFFFFF",
  textColor = "#1C1917",
  mutedColor = "#78716C",
  cornerRadius = 20,
  className,
  interactive = true
}) => {
  const [qrDataUrl, setQrDataUrl] = __mf_26("");
  const [photoFailed, setPhotoFailed] = __mf_26(false);
  const [loadedPhoto, setLoadedPhoto] = __mf_26(contact.photo);
  if (contact.photo !== loadedPhoto) {
    setLoadedPhoto(contact.photo);
    setPhotoFailed(false);
  }
  const hasIdentity = Boolean(
    contact.name || contact.company || contact.jobTitle || contact.email || contact.phone || contact.address
  );
  const vcard = __mf_23(() => buildVCard(contact), [contact]);
  __mf_20(() => {
    let cancelled = false;
    if (!hasIdentity) {
      setQrDataUrl("");
      return;
    }
    void browser.toDataURL(vcard, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 224,
      color: {
        dark: textColor,
        light: "#FFFFFFFF"
      }
    }).then((url) => {
      if (!cancelled) setQrDataUrl(url);
    }).catch(() => {
      if (!cancelled) setQrDataUrl("");
    });
    return () => {
      cancelled = true;
    };
  }, [vcard, hasIdentity, textColor]);
  const roleLine = __mf_23(() => {
    if (contact.jobTitle && contact.company) return `${contact.jobTitle} · ${contact.company}`;
    return contact.jobTitle || contact.company || "";
  }, [contact.jobTitle, contact.company]);
  const handleDownload = __mf_17$1(() => {
    if (!interactive || !hasIdentity) return;
    downloadVCard(contact);
  }, [contact, hasIdentity, interactive]);
  const cssVars = {
    "--cc-accent": accentColor,
    "--cc-surface": surfaceColor,
    "--cc-text": textColor,
    "--cc-muted": mutedColor,
    "--cc-radius": `${cornerRadius}px`
  };
  if (!hasIdentity) {
    return /* @__PURE__ */ __mf_1$1("div", { className: cn(styles$5.root, className), style: cssVars, children: /* @__PURE__ */ __mf_1$1("div", { className: styles$5.empty, children: "Bind a contact entity to preview the card." }) });
  }
  const showPhoto = Boolean(contact.photo) && !photoFailed;
  const initials = initialsFromName(contact.name || contact.email || "C");
  return /* @__PURE__ */ __mf_1$1("div", { className: cn(styles$5.root, className), style: cssVars, children: /* @__PURE__ */ __mf_2("article", { className: styles$5.card, "aria-label": contact.name || "Contact card", children: [
    /* @__PURE__ */ __mf_2("div", { className: styles$5.main, children: [
      /* @__PURE__ */ __mf_2("div", { className: styles$5.identity, children: [
        showPhoto ? /* @__PURE__ */ __mf_1$1(
          "img",
          {
            className: styles$5.avatar,
            src: contact.photo,
            alt: contact.name ? `${contact.name} photo` : "Contact photo",
            onError: () => setPhotoFailed(true)
          }
        ) : /* @__PURE__ */ __mf_1$1("div", { className: cn(styles$5.avatar, styles$5.avatarFallback), "aria-hidden": "true", children: initials }),
        /* @__PURE__ */ __mf_2("div", { className: styles$5.who, children: [
          contact.name ? /* @__PURE__ */ __mf_1$1("h2", { className: styles$5.name, children: contact.name }) : null,
          roleLine ? /* @__PURE__ */ __mf_1$1("p", { className: styles$5.role, children: roleLine }) : null
        ] })
      ] }),
      /* @__PURE__ */ __mf_2("ul", { className: styles$5.details, children: [
        contact.email ? /* @__PURE__ */ __mf_2("li", { className: styles$5.detail, children: [
          /* @__PURE__ */ __mf_1$1("span", { className: styles$5.detailLabel, children: "Email" }),
          /* @__PURE__ */ __mf_1$1("p", { className: styles$5.detailValue, children: /* @__PURE__ */ __mf_1$1("a", { href: `mailto:${contact.email}`, children: contact.email }) })
        ] }) : null,
        contact.phone ? /* @__PURE__ */ __mf_2("li", { className: styles$5.detail, children: [
          /* @__PURE__ */ __mf_1$1("span", { className: styles$5.detailLabel, children: "Phone" }),
          /* @__PURE__ */ __mf_1$1("p", { className: styles$5.detailValue, children: /* @__PURE__ */ __mf_1$1("a", { href: `tel:${contact.phone.replace(/\s+/g, "")}`, children: contact.phone }) })
        ] }) : null,
        contact.address ? /* @__PURE__ */ __mf_2("li", { className: styles$5.detail, children: [
          /* @__PURE__ */ __mf_1$1("span", { className: styles$5.detailLabel, children: "Address" }),
          /* @__PURE__ */ __mf_1$1("p", { className: styles$5.detailValue, children: contact.address })
        ] }) : null
      ] }),
      /* @__PURE__ */ __mf_1$1("div", { className: styles$5.actions, children: /* @__PURE__ */ __mf_1$1(
        "button",
        {
          type: "button",
          className: styles$5.downloadBtn,
          onClick: handleDownload,
          disabled: !interactive || !hasIdentity,
          children: "Add to Contacts"
        }
      ) })
    ] }),
    /* @__PURE__ */ __mf_2("aside", { className: styles$5.qrPanel, "aria-label": "vCard QR code", children: [
      qrDataUrl ? /* @__PURE__ */ __mf_1$1("img", { className: styles$5.qrImage, src: qrDataUrl, alt: "QR code with contact vCard" }) : /* @__PURE__ */ __mf_1$1("div", { className: styles$5.qrImage, "aria-hidden": "true" }),
      /* @__PURE__ */ __mf_1$1("p", { className: styles$5.qrCaption, children: "Scan vCard" })
    ] })
  ] }) });
};

const ContactCardBuild = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config$5.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    ContactCardView,
    {
      contact: SAMPLE_CONTACT,
      accentColor: merged.accentColor,
      surfaceColor: merged.surfaceColor,
      textColor: merged.textColor,
      mutedColor: merged.mutedColor,
      cornerRadius: merged.cornerRadius,
      interactive: false
    }
  ) });
};

const ContactCardRender = (props) => {
  const merged = { ...config$5.defaultProps, ...props };
  const { connect } = __mf_180();
  const {
    sources: { datasource: ds }
  } = __mf_182();
  const [contact, setContact] = __mf_26(EMPTY_CONTACT);
  const attrKeys = __mf_23(
    () => mergeAttrKeys({
      nameAttr: merged.nameAttr,
      companyAttr: merged.companyAttr,
      jobTitleAttr: merged.jobTitleAttr,
      emailAttr: merged.emailAttr,
      phoneAttr: merged.phoneAttr,
      addressAttr: merged.addressAttr,
      photoAttr: merged.photoAttr
    }),
    [
      merged.nameAttr,
      merged.companyAttr,
      merged.jobTitleAttr,
      merged.emailAttr,
      merged.phoneAttr,
      merged.addressAttr,
      merged.photoAttr
    ]
  );
  __mf_20(() => {
    if (!ds) {
      setContact(EMPTY_CONTACT);
      return;
    }
    let cancelled = false;
    const listener = async () => {
      try {
        const raw = await ds.getValue();
        if (cancelled) return;
        setContact(extractContact(raw, attrKeys));
      } catch {
        if (!cancelled) setContact(EMPTY_CONTACT);
      }
    };
    void listener();
    ds.addListener("changed", listener);
    return () => {
      cancelled = true;
      ds.removeListener("changed", listener);
    };
  }, [ds, attrKeys]);
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    ContactCardView,
    {
      contact,
      accentColor: merged.accentColor,
      surfaceColor: merged.surfaceColor,
      textColor: merged.textColor,
      mutedColor: merged.mutedColor,
      cornerRadius: merged.cornerRadius,
      interactive: true
    }
  ) });
};

const ContactCard = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(ContactCardBuild, { ...props }) : /* @__PURE__ */ __mf_1$1(ContactCardRender, { ...props });
};
ContactCard.craft = config$5.craft;
ContactCard.info = config$5.info;
ContactCard.defaultProps = config$5.defaultProps;

const dataSettings$4 = [
  {
    key: "datasource",
    label: "Invoice or lines",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "linesRelation",
    label: "Lines relation (when bound to Invoice)",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Lines_Fm_Invoices"
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  }
];
const formattingSettings = [
  {
    key: "currency",
    label: "Currency",
    type: __mf_17.TEXT_FIELD,
    defaultValue: ""
  },
  {
    key: "locale",
    label: "Locale",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "fr-FR"
  }
];
const designSettings$1 = [
  {
    key: "accentColor",
    label: "Accent color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#6E56CF"
  },
  {
    key: "surfaceColor",
    label: "Surface color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#FFFFFF"
  },
  {
    key: "textColor",
    label: "Text color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#23202E"
  },
  {
    key: "mutedColor",
    label: "Muted color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#6F6B7D"
  },
  {
    key: "cornerRadius",
    label: "Corner radius (px)",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 16
  },
  {
    key: "density",
    label: "Density",
    type: __mf_17.SELECT,
    defaultValue: "comfortable",
    options: [
      { value: "comfortable", label: "Comfortable" },
      { value: "compact", label: "Compact" }
    ]
  },
  {
    type: __mf_17.DATAGRID,
    key: "categoryColors",
    name: "Category colors",
    label: "Category colors",
    data: [
      { key: "category", label: "Category", type: __mf_17.TEXT_FIELD },
      { key: "color", label: "Color", type: __mf_17.COLOR_PICKER }
    ]
  }
];
const sectionSettings = [
  {
    key: "showSummary",
    label: "Show summary",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  },
  {
    key: "showChart",
    label: "Show chart",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  },
  {
    key: "showQuantityRing",
    label: "Show quantity ring",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  },
  {
    key: "showCategoryChips",
    label: "Show category chips",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  }
];
const commonSettings$4 = [
  ...dataSettings$4,
  ...formattingSettings,
  ...designSettings$1,
  ...sectionSettings
];
const Settings$4 = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings$4
  },
  {
    key: "formatting",
    label: "Formatting",
    type: __mf_17.GROUP,
    components: formattingSettings
  },
  {
    key: "design",
    label: "Design",
    type: __mf_17.GROUP,
    components: designSettings$1
  },
  {
    key: "sections",
    label: "Sections",
    type: __mf_17.GROUP,
    components: sectionSettings
  },
  ...__mf_121(__mf_10).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];
const BasicSettings$4 = [
  ...commonSettings$4,
  ...__mf_121(__mf_1).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];

const FALLBACK_PALETTE = ["#8B8698", "#A39EAD", "#7A7586", "#9C97A8", "#6F6B7D", "#B4B0BC"];
const LINE_ATTRS = [
  "ID",
  "Quantity",
  "Unit_Price",
  "Discount_Rate",
  "Tax_Rate",
  "_ProductName",
  "_ProductReference",
  "Product_ID",
  "Line_Number",
  "Total",
  "Total_Tax"
];
const INVOICE_ATTRS = ["Paid", "Subtotal_BT", "Tax", "Total"];
const pick$1 = (record, keys) => {
  for (const key of keys) {
    if (record[key] != null && record[key] !== "") return record[key];
  }
  return void 0;
};
const toNumber = (value, fallback = 0) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value.replace(/\s/g, "").replace(",", "."));
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
};
const toOptionalString$1 = (value) => {
  if (value == null) return void 0;
  const s = String(value).trim();
  return s === "" ? void 0 : s;
};
const isPersistedLineId = (id) => /^\d+$/.test(id);
const extractRecords$1 = (raw, relationKeys = ["Lines_Fm_Invoices", "Lines", "lines"]) => {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.filter((item) => item && typeof item === "object");
  }
  if (typeof raw !== "object") return [];
  const obj = raw;
  if (Array.isArray(obj.__ENTITIES)) return obj.__ENTITIES;
  if (Array.isArray(obj.entities)) return obj.entities;
  for (const key of relationKeys) {
    let nested;
    try {
      nested = obj[key];
    } catch {
      continue;
    }
    const inner = extractRecords$1(nested, []);
    if (inner.length > 0) return inner;
  }
  return [];
};
const parseWithPlainFallback$1 = (raw, relationKeys) => {
  const direct = extractRecords$1(raw, relationKeys);
  if (direct.length > 0) return direct;
  if (!raw || typeof raw !== "object") return [];
  try {
    return extractRecords$1(JSON.parse(JSON.stringify(raw)), relationKeys);
  } catch {
    return [];
  }
};
const asRecord = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return void 0;
  return value;
};
const parseInvoiceLines = (raw, relationKeys = ["Lines_Fm_Invoices", "Lines", "lines"]) => {
  const records = parseWithPlainFallback$1(raw, relationKeys);
  const lines = [];
  records.forEach((record, index) => {
    if (!record || typeof record !== "object") return;
    const product = asRecord(pick$1(record, ["Product", "product"]));
    const name = toOptionalString$1(pick$1(record, ["_ProductName", "name", "Name"])) ?? toOptionalString$1(product ? pick$1(product, ["name", "Name"]) : void 0) ?? "";
    const productRef = toOptionalString$1(pick$1(record, ["_ProductReference", "Reference", "product_ref"])) ?? toOptionalString$1(product ? pick$1(product, ["Reference", "reference"]) : void 0);
    const category = toOptionalString$1(pick$1(record, ["category", "Category"])) ?? toOptionalString$1(product ? pick$1(product, ["Category", "category"]) : void 0);
    const quantity = toNumber(pick$1(record, ["Quantity", "quantity"]));
    const unitPrice = toNumber(pick$1(record, ["Unit_Price", "unitPrice", "unit_price"]));
    const discountRaw = pick$1(record, ["Discount_Rate", "discountPct", "Discount"]);
    const taxRaw = pick$1(record, ["Tax_Rate", "taxPct", "tax_pct"]);
    const discountPct = discountRaw == null ? void 0 : toNumber(discountRaw);
    const taxPct = taxRaw == null ? void 0 : toNumber(taxRaw);
    const productIdRaw = pick$1(record, ["Product_ID", "productId"]);
    const lineNumberRaw = pick$1(record, ["Line_Number", "lineNumber"]);
    lines.push({
      id: String(pick$1(record, ["ID", "id", "__KEY"]) ?? index),
      productRef,
      name,
      category,
      quantity,
      unitPrice,
      discountPct: discountPct && discountPct !== 0 ? discountPct : void 0,
      taxPct,
      productId: productIdRaw == null ? void 0 : toNumber(productIdRaw),
      lineNumber: lineNumberRaw == null ? void 0 : toNumber(lineNumberRaw)
    });
  });
  return lines;
};
function hasEntitySelection$1(ds) {
  return ds.entitysel != null;
}
async function loadInvoiceLines(ds, linesRelation) {
  const keys = [linesRelation, "Lines", "lines"].filter((key) => key.trim() !== "");
  const read = async (property) => {
    try {
      const raw = property ? await ds.getValue(property) : await ds.getValue();
      return parseInvoiceLines(raw, keys);
    } catch {
      return [];
    }
  };
  if (ds.type === "entity" || ds.type === "object" || ds.dataType === "object") {
    for (const key of keys) {
      const fromRelation = await read(key);
      if (fromRelation.length > 0) return fromRelation;
    }
  }
  const fromRoot = await read();
  if (fromRoot.length > 0) return fromRoot;
  if (ds.type === "entitysel" && hasEntitySelection$1(ds)) {
    try {
      const collection = await ds.getCollection(0, 200, ds.filterAttributesText || "");
      const parsed = parseInvoiceLines(collection, keys);
      if (parsed.length > 0) return parsed;
    } catch {
    }
  }
  return [];
}
async function loadInvoicePaid(ds, linesRelation) {
  if (ds.type !== "entity" && ds.type !== "object" && ds.dataType !== "object") {
    return void 0;
  }
  const relation = linesRelation.trim();
  const dsId = ds.id?.split(".")[0] ?? "";
  if (dsId && relation && ds.id?.includes(".")) {
    return void 0;
  }
  try {
    const paid = await ds.getValue("Paid");
    return Boolean(paid);
  } catch {
    return void 0;
  }
}
const toCategoryColorMap$1 = (input) => {
  if (!input) return {};
  if (typeof input === "string") {
    try {
      return toCategoryColorMap$1(JSON.parse(input));
    } catch {
      return {};
    }
  }
  if (Array.isArray(input)) {
    const map = {};
    input.forEach((row) => {
      const category = row?.category?.trim();
      const color = row?.color?.trim();
      if (category && color) map[category] = color;
    });
    return map;
  }
  return input;
};
const colorForCategory = (category, map, seen, accentColor) => {
  if (!category) return accentColor;
  const mapped = map[category];
  if (mapped) return mapped;
  const existing = seen.get(category);
  if (existing) return existing;
  const color = FALLBACK_PALETTE[seen.size % FALLBACK_PALETTE.length];
  seen.set(category, color);
  return color;
};
const computeLineAmounts = (line) => {
  const discountPct = line.discountPct ?? 0;
  const taxPct = line.taxPct ?? 0;
  const lineGross = line.quantity * line.unitPrice;
  const lineNet = lineGross * (1 - discountPct / 100);
  const lineTax = lineNet * (taxPct / 100);
  return { lineGross, lineNet, lineTax, lineDiscount: lineGross - lineNet };
};
const computeInvoice = (lines, categoryColors, accentColor) => {
  const seen = /* @__PURE__ */ new Map();
  const rows = lines.map((line) => {
    const { lineGross, lineNet, lineTax, lineDiscount } = computeLineAmounts(line);
    return {
      ...line,
      lineGross,
      lineNet,
      lineTax,
      lineDiscount,
      color: colorForCategory(line.category, categoryColors, seen, accentColor)
    };
  });
  const summary = rows.reduce(
    (acc, row) => {
      acc.subtotal += row.lineGross;
      acc.discount += row.lineDiscount;
      acc.net += row.lineNet;
      acc.tax += row.lineTax;
      acc.totalQuantity += row.quantity;
      return acc;
    },
    { subtotal: 0, discount: 0, net: 0, tax: 0, totalDue: 0, totalQuantity: 0 }
  );
  summary.totalDue = summary.net + summary.tax;
  const maxNet = rows.reduce((max, row) => Math.max(max, row.lineNet), 0);
  const chart = [...rows].sort((a, b) => b.lineNet - a.lineNet).map((row) => ({
    id: row.id,
    label: row.name || row.productRef || row.id,
    net: row.lineNet,
    color: row.color,
    pct: maxNet > 0 ? row.lineNet / maxNet * 100 : 0
  }));
  return {
    rows,
    summary,
    chart,
    hasDiscount: rows.some((row) => (row.discountPct ?? 0) > 0),
    hasTax: rows.some((row) => row.taxPct != null)
  };
};
const buildSaveLinePayload = (line) => {
  const { lineNet, lineTax } = computeLineAmounts(line);
  return {
    line: {
      ID: Number(line.id),
      Quantity: line.quantity,
      Unit_Price: line.unitPrice,
      Discount_Rate: line.discountPct ?? 0,
      Tax_Rate: line.taxPct ?? 0,
      Total: lineNet,
      Total_Tax: lineTax,
      _ProductName: line.name || void 0,
      _ProductReference: line.productRef || void 0,
      Product_ID: line.productId,
      Line_Number: line.lineNumber
    }
  };
};
const buildApplyTotalsPayload = (lines) => {
  const model = computeInvoice(lines, {}, "#6E56CF");
  return {
    Subtotal_BT: model.summary.net,
    Tax: model.summary.tax,
    Total: model.summary.totalDue
  };
};
const formatAmount = (value, locale, currency) => {
  const abs = Number.isFinite(value) ? value : 0;
  if (!currency) {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(abs);
  }
  if (/^[A-Z]{3}$/.test(currency)) {
    try {
      return new Intl.NumberFormat(locale, { style: "currency", currency }).format(abs);
    } catch {
    }
  }
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(abs);
  return `${number} ${currency}`;
};
const formatNumber = (value, locale, digits = 0) => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: digits,
    maximumFractionDigits: 2
  }).format(Number.isFinite(value) ? value : 0);
};
const formatPercent = (value, locale) => {
  return `${formatNumber(value, locale, 0)} %`;
};
const MOCK_LINES = [
  {
    id: "L-01",
    productRef: "PLM-204",
    name: "Plume 204",
    category: "Plume",
    quantity: 2,
    unitPrice: 1290,
    discountPct: 10,
    taxPct: 20
  },
  {
    id: "L-02",
    productRef: "ROL-12",
    name: "Roller Compact 12",
    category: "Roller",
    quantity: 1,
    unitPrice: 890,
    taxPct: 20
  },
  {
    id: "L-03",
    name: "Station multifonction A3",
    category: "Multifonction",
    quantity: 3,
    unitPrice: 450,
    discountPct: 5,
    taxPct: 20
  }
];

const DEFAULT_LINES_RELATION$1 = "Lines_Fm_Invoices";
const DEFAULT_CATEGORY_COLORS$1 = [
  { category: "Plume", color: "#6E56CF" },
  { category: "Roller", color: "#12B886" },
  { category: "Multifonction", color: "#F59F00" }
];
const config$4 = {
  craft: {
    displayName: "Invoice Line Grid",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings$4, BasicSettings$4)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Invoice Line Grid",
    exposed: true,
    icon: MdReceiptLong,
    events: [
      { label: "On Save Line", value: "saveLine" },
      { label: "On Add Line", value: "addLine" },
      { label: "On Remove Line", value: "removeLine" },
      { label: "On Reorder Lines", value: "reorderLines" },
      { label: "On Apply Totals", value: "applyTotals" },
      { label: "On Paid Change", value: "setPaid" }
    ],
    datasources: {
      accept: ["entitysel", "entity"],
      declarations: (props) => {
        const datasource = props.datasource?.trim() ?? "";
        const linesRelation = props.linesRelation?.trim() || DEFAULT_LINES_RELATION$1;
        const { id: ds, namespace } = __mf_144(datasource) || {};
        const withNs = (path) => namespace ? `${namespace}:${path}` : path;
        if (!ds) return [{ path: datasource }];
        const alreadyRelated = ds === linesRelation || ds.endsWith(`.${linesRelation}`);
        const lineRoot = alreadyRelated ? ds : `${ds}.${linesRelation}`;
        const declarations = alreadyRelated ? [{ path: datasource, iterable: true }] : [{ path: datasource }, { path: withNs(lineRoot), iterable: true }];
        LINE_ATTRS.forEach((attr) => {
          declarations.push({ path: withNs(`${lineRoot}.[].${attr}`) });
        });
        if (!alreadyRelated) {
          INVOICE_ATTRS.forEach((attr) => {
            declarations.push({ path: withNs(`${ds}.${attr}`) });
          });
        }
        return declarations;
      }
    }
  },
  defaultProps: {
    linesRelation: DEFAULT_LINES_RELATION$1,
    currency: "",
    locale: "fr-FR",
    accentColor: "#6E56CF",
    surfaceColor: "#FFFFFF",
    textColor: "#23202E",
    mutedColor: "#6F6B7D",
    cornerRadius: 16,
    density: "comfortable",
    categoryColors: DEFAULT_CATEGORY_COLORS$1,
    showSummary: true,
    showChart: true,
    showQuantityRing: true,
    showCategoryChips: true,
    style: {
      width: "100%",
      minHeight: "420px"
    }
  }
};

const card$1 = "_card_lb910_1";
const header = "_header_lb910_16";
const title = "_title_lb910_24";
const headerActions = "_headerActions_lb910_31";
const paidToggle = "_paidToggle_lb910_38";
const paidToggleActive = "_paidToggleActive_lb910_56";
const paidDot = "_paidDot_lb910_62";
const paidDotActive = "_paidDotActive_lb910_69";
const btn$2 = "_btn_lb910_73";
const btnAccent = "_btnAccent_lb910_95";
const btnDanger = "_btnDanger_lb910_100";
const layout = "_layout_lb910_111";
const layoutSolo = "_layoutSolo_lb910_118";
const gridWrap = "_gridWrap_lb910_122";
const table = "_table_lb910_127";
const num = "_num_lb910_152";
const product = "_product_lb910_158";
const actions = "_actions_lb910_164";
const drag = "_drag_lb910_170";
const dragHandle = "_dragHandle_lb910_182";
const dragging = "_dragging_lb910_197";
const dropTarget = "_dropTarget_lb910_201";
const input = "_input_lb910_205";
const productCell = "_productCell_lb910_225";
const productCopy = "_productCopy_lb910_232";
const name = "_name_lb910_236";
const ref = "_ref_lb910_243";
const chip$1 = "_chip_lb910_249";
const chipDot$1 = "_chipDot_lb910_257";
const chipLabel$1 = "_chipLabel_lb910_264";
const empty = "_empty_lb910_272";
const aside = "_aside_lb910_278";
const summary = "_summary_lb910_285";
const summaryRow = "_summaryRow_lb910_291";
const summaryLabel = "_summaryLabel_lb910_299";
const summaryValue = "_summaryValue_lb910_303";
const totalRow = "_totalRow_lb910_308";
const totalLabel = "_totalLabel_lb910_315";
const totalValue = "_totalValue_lb910_323";
const qtyRow = "_qtyRow_lb910_331";
const qtyMeta = "_qtyMeta_lb910_336";
const ring = "_ring_lb910_342";
const chart = "_chart_lb910_347";
const chartTitle = "_chartTitle_lb910_353";
const barRow = "_barRow_lb910_361";
const barLabel = "_barLabel_lb910_368";
const barValue = "_barValue_lb910_376";
const barTrack = "_barTrack_lb910_383";
const barFill = "_barFill_lb910_391";
const styles$4 = {
	card: card$1,
	header: header,
	title: title,
	headerActions: headerActions,
	paidToggle: paidToggle,
	paidToggleActive: paidToggleActive,
	paidDot: paidDot,
	paidDotActive: paidDotActive,
	btn: btn$2,
	btnAccent: btnAccent,
	btnDanger: btnDanger,
	layout: layout,
	layoutSolo: layoutSolo,
	gridWrap: gridWrap,
	table: table,
	num: num,
	product: product,
	actions: actions,
	drag: drag,
	dragHandle: dragHandle,
	dragging: dragging,
	dropTarget: dropTarget,
	input: input,
	productCell: productCell,
	productCopy: productCopy,
	name: name,
	ref: ref,
	chip: chip$1,
	chipDot: chipDot$1,
	chipLabel: chipLabel$1,
	empty: empty,
	aside: aside,
	summary: summary,
	summaryRow: summaryRow,
	summaryLabel: summaryLabel,
	summaryValue: summaryValue,
	totalRow: totalRow,
	totalLabel: totalLabel,
	totalValue: totalValue,
	qtyRow: qtyRow,
	qtyMeta: qtyMeta,
	ring: ring,
	chart: chart,
	chartTitle: chartTitle,
	barRow: barRow,
	barLabel: barLabel,
	barValue: barValue,
	barTrack: barTrack,
	barFill: barFill
};

const DRAG_MIME$1 = "application/x-qodly-invoice-line";
const RING_SIZE = 36;
const RING_STROKE = 3.5;
function QuantityRing({
  quantity,
  accentColor,
  trackColor
}) {
  const radius = (RING_SIZE - RING_STROKE) / 2;
  const circumference = 2 * Math.PI * radius;
  const cap = Math.max(10, Math.ceil(Math.max(quantity, 1) / 10) * 10);
  const progress = Math.max(0, Math.min(1, quantity / cap));
  const dash = `${circumference * progress} ${circumference}`;
  return /* @__PURE__ */ __mf_2(
    "svg",
    {
      className: styles$4.ring,
      width: RING_SIZE,
      height: RING_SIZE,
      viewBox: `0 0 ${RING_SIZE} ${RING_SIZE}`,
      role: "img",
      "aria-label": `Total quantity ${quantity}`,
      children: [
        /* @__PURE__ */ __mf_1$1(
          "circle",
          {
            cx: RING_SIZE / 2,
            cy: RING_SIZE / 2,
            r: radius,
            fill: "none",
            stroke: trackColor,
            strokeWidth: RING_STROKE
          }
        ),
        /* @__PURE__ */ __mf_1$1(
          "circle",
          {
            cx: RING_SIZE / 2,
            cy: RING_SIZE / 2,
            r: radius,
            fill: "none",
            stroke: accentColor,
            strokeWidth: RING_STROKE,
            strokeLinecap: "round",
            strokeDasharray: dash,
            transform: `rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`
          }
        )
      ]
    }
  );
}
function parseFieldValue(field, raw) {
  const normalized = raw.replace(/\s/g, "").replace(",", ".");
  const n = Number(normalized);
  if (!Number.isFinite(n)) return 0;
  if (field === "quantity") return Math.max(0, n);
  if (field === "unitPrice") return Math.max(0, n);
  if (field === "discountPct") return Math.max(0, Math.min(100, n));
  return Math.max(0, n);
}
const InvoiceLineGridView = __mf_16$1(
  ({
    lines,
    currency,
    locale,
    accentColor,
    surfaceColor,
    textColor,
    mutedColor,
    cornerRadius,
    density,
    categoryColors,
    showSummary,
    showChart,
    showQuantityRing,
    showCategoryChips,
    interactive = false,
    paid = false,
    onPaidChange,
    onLineFieldChange,
    onAddLine,
    onRemoveLine,
    onReorder
  }) => {
    const [dragId, setDragId] = __mf_26(null);
    const [dropId, setDropId] = __mf_26(null);
    const colorMap = __mf_23(() => toCategoryColorMap$1(categoryColors), [categoryColors]);
    const model = __mf_23(
      () => computeInvoice(lines, colorMap, accentColor),
      [lines, colorMap, accentColor]
    );
    const compact = density === "compact";
    const showAside = showSummary || showChart;
    const money = (value) => formatAmount(value, locale, currency);
    const cssVars = {
      "--ilg-accent": accentColor,
      "--ilg-surface": surfaceColor,
      "--ilg-text": textColor,
      "--ilg-muted": mutedColor,
      "--ilg-radius": `${cornerRadius}px`,
      "--ilg-pad": compact ? "16px" : "24px",
      "--ilg-gap": compact ? "16px" : "24px",
      "--ilg-row": compact ? "8px" : "16px"
    };
    const handleDragStart = (event, lineId) => {
      if (!interactive) return;
      event.dataTransfer.setData(DRAG_MIME$1, lineId);
      event.dataTransfer.effectAllowed = "move";
      setDragId(lineId);
    };
    const handleDragOver = (event, lineId) => {
      if (!interactive || !dragId || dragId === lineId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      setDropId(lineId);
    };
    const handleDrop = (event, targetId) => {
      if (!interactive || !onReorder) return;
      event.preventDefault();
      const sourceId = event.dataTransfer.getData(DRAG_MIME$1) || dragId;
      if (!sourceId || sourceId === targetId) {
        setDragId(null);
        setDropId(null);
        return;
      }
      const ids = lines.map((line) => line.id);
      const from = ids.indexOf(sourceId);
      const to = ids.indexOf(targetId);
      if (from < 0 || to < 0) return;
      const next = [...ids];
      next.splice(from, 1);
      next.splice(to, 0, sourceId);
      onReorder(next);
      setDragId(null);
      setDropId(null);
    };
    const handleDragEnd = () => {
      setDragId(null);
      setDropId(null);
    };
    const renderEditableCell = (row, field) => {
      const value = row[field] ?? 0;
      if (!interactive || !onLineFieldChange) {
        if (field === "discountPct") {
          return row.discountPct ? formatPercent(row.discountPct, locale) : "";
        }
        if (field === "taxPct") {
          return row.taxPct != null ? formatPercent(row.taxPct, locale) : "";
        }
        if (field === "quantity") return formatNumber(row.quantity, locale);
        return money(row.unitPrice);
      }
      return /* @__PURE__ */ __mf_1$1(
        "input",
        {
          className: styles$4.input,
          type: "text",
          inputMode: "decimal",
          defaultValue: String(value),
          onBlur: (event) => {
            const next = parseFieldValue(field, event.target.value);
            if (next !== value) onLineFieldChange(row.id, field, next);
          },
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.target.blur();
            }
          }
        }
      );
    };
    return /* @__PURE__ */ __mf_2("div", { className: styles$4.card, style: cssVars, children: [
      interactive ? /* @__PURE__ */ __mf_2("div", { className: styles$4.header, children: [
        /* @__PURE__ */ __mf_1$1("div", { className: styles$4.title, children: "Invoice lines" }),
        /* @__PURE__ */ __mf_2("div", { className: styles$4.headerActions, children: [
          /* @__PURE__ */ __mf_2(
            "button",
            {
              type: "button",
              className: cn(styles$4.paidToggle, paid && styles$4.paidToggleActive),
              onClick: () => onPaidChange?.(!paid),
              children: [
                /* @__PURE__ */ __mf_1$1("span", { className: cn(styles$4.paidDot, paid && styles$4.paidDotActive) }),
                paid ? "Paid" : "Unpaid"
              ]
            }
          ),
          /* @__PURE__ */ __mf_2(
            "button",
            {
              type: "button",
              className: cn(styles$4.btn, styles$4.btnAccent),
              onClick: onAddLine,
              children: [
                /* @__PURE__ */ __mf_1$1(MdAdd, { size: 16 }),
                "Add line"
              ]
            }
          )
        ] })
      ] }) : null,
      /* @__PURE__ */ __mf_2("div", { className: cn(styles$4.layout, !showAside && styles$4.layoutSolo), children: [
        /* @__PURE__ */ __mf_1$1("div", { className: styles$4.gridWrap, children: model.rows.length === 0 ? /* @__PURE__ */ __mf_1$1("div", { className: styles$4.empty, children: "No line items" }) : /* @__PURE__ */ __mf_2("table", { className: styles$4.table, children: [
          /* @__PURE__ */ __mf_1$1("thead", { children: /* @__PURE__ */ __mf_2("tr", { children: [
            interactive ? /* @__PURE__ */ __mf_1$1("th", { className: styles$4.drag, "aria-label": "Reorder" }) : null,
            /* @__PURE__ */ __mf_1$1("th", { className: styles$4.product, children: "Product" }),
            /* @__PURE__ */ __mf_1$1("th", { className: styles$4.num, children: "Quantity" }),
            /* @__PURE__ */ __mf_1$1("th", { className: styles$4.num, children: "Unit Price" }),
            model.hasDiscount || interactive ? /* @__PURE__ */ __mf_1$1("th", { className: styles$4.num, children: "Discount %" }) : null,
            model.hasTax || interactive ? /* @__PURE__ */ __mf_1$1("th", { className: styles$4.num, children: "Tax %" }) : null,
            /* @__PURE__ */ __mf_1$1("th", { className: styles$4.num, children: "Line Total" }),
            interactive ? /* @__PURE__ */ __mf_1$1("th", { className: styles$4.actions, "aria-label": "Actions" }) : null
          ] }) }),
          /* @__PURE__ */ __mf_1$1("tbody", { children: model.rows.map((row) => /* @__PURE__ */ __mf_2(
            "tr",
            {
              className: cn(
                dragId === row.id && styles$4.dragging,
                dropId === row.id && styles$4.dropTarget
              ),
              onDragOver: (event) => handleDragOver(event, row.id),
              onDrop: (event) => handleDrop(event, row.id),
              onDragLeave: () => setDropId(null),
              children: [
                interactive ? /* @__PURE__ */ __mf_1$1("td", { className: styles$4.drag, children: /* @__PURE__ */ __mf_1$1(
                  "button",
                  {
                    type: "button",
                    className: styles$4.dragHandle,
                    draggable: true,
                    "aria-label": "Drag to reorder",
                    onDragStart: (event) => handleDragStart(event, row.id),
                    onDragEnd: handleDragEnd,
                    children: /* @__PURE__ */ __mf_1$1(MdDragIndicator, { size: 16 })
                  }
                ) }) : null,
                /* @__PURE__ */ __mf_1$1("td", { className: styles$4.product, children: /* @__PURE__ */ __mf_2("div", { className: styles$4.productCell, children: [
                  showCategoryChips && row.category ? /* @__PURE__ */ __mf_2("span", { className: styles$4.chip, title: row.category, children: [
                    /* @__PURE__ */ __mf_1$1("span", { className: styles$4.chipDot, style: { background: row.color } }),
                    /* @__PURE__ */ __mf_1$1("span", { className: styles$4.chipLabel, children: row.category })
                  ] }) : null,
                  /* @__PURE__ */ __mf_2("div", { className: styles$4.productCopy, children: [
                    /* @__PURE__ */ __mf_1$1("div", { className: styles$4.name, children: row.name || "Untitled" }),
                    row.productRef ? /* @__PURE__ */ __mf_1$1("div", { className: styles$4.ref, children: row.productRef }) : null
                  ] })
                ] }) }),
                /* @__PURE__ */ __mf_1$1("td", { className: styles$4.num, children: renderEditableCell(row, "quantity") }),
                /* @__PURE__ */ __mf_1$1("td", { className: styles$4.num, children: renderEditableCell(row, "unitPrice") }),
                model.hasDiscount || interactive ? /* @__PURE__ */ __mf_1$1("td", { className: styles$4.num, children: renderEditableCell(row, "discountPct") }) : null,
                model.hasTax || interactive ? /* @__PURE__ */ __mf_1$1("td", { className: styles$4.num, children: renderEditableCell(row, "taxPct") }) : null,
                /* @__PURE__ */ __mf_1$1("td", { className: styles$4.num, children: money(row.lineNet) }),
                interactive ? /* @__PURE__ */ __mf_1$1("td", { className: styles$4.actions, children: /* @__PURE__ */ __mf_1$1(
                  "button",
                  {
                    type: "button",
                    className: styles$4.btnDanger,
                    "aria-label": "Remove line",
                    onClick: () => onRemoveLine?.(row.id),
                    children: /* @__PURE__ */ __mf_1$1(MdDeleteOutline, { size: 18 })
                  }
                ) }) : null
              ]
            },
            row.id
          )) })
        ] }) }),
        showAside ? /* @__PURE__ */ __mf_2("aside", { className: styles$4.aside, children: [
          showSummary ? /* @__PURE__ */ __mf_2("div", { className: styles$4.summary, children: [
            /* @__PURE__ */ __mf_2("div", { className: styles$4.summaryRow, children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryLabel, children: "Subtotal" }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryValue, children: money(model.summary.subtotal) })
            ] }),
            model.summary.discount > 0 ? /* @__PURE__ */ __mf_2("div", { className: styles$4.summaryRow, children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryLabel, children: "Discount" }),
              /* @__PURE__ */ __mf_2("span", { className: styles$4.summaryValue, children: [
                "−",
                money(model.summary.discount)
              ] })
            ] }) : null,
            /* @__PURE__ */ __mf_2("div", { className: styles$4.summaryRow, children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryLabel, children: "Net excluding tax" }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryValue, children: money(model.summary.net) })
            ] }),
            /* @__PURE__ */ __mf_2("div", { className: styles$4.summaryRow, children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryLabel, children: "Tax total" }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryValue, children: money(model.summary.tax) })
            ] }),
            /* @__PURE__ */ __mf_2("div", { className: cn(styles$4.summaryRow, styles$4.totalRow), children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.totalLabel, children: "Total due" }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.totalValue, children: money(model.summary.totalDue) })
            ] }),
            /* @__PURE__ */ __mf_2("div", { className: cn(styles$4.summaryRow, styles$4.qtyRow), children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryLabel, children: "Total quantity" }),
              /* @__PURE__ */ __mf_2("span", { className: styles$4.qtyMeta, children: [
                showQuantityRing ? /* @__PURE__ */ __mf_1$1(
                  QuantityRing,
                  {
                    quantity: model.summary.totalQuantity,
                    accentColor,
                    trackColor: "rgba(35, 32, 46, 0.08)"
                  }
                ) : null,
                /* @__PURE__ */ __mf_1$1("span", { className: styles$4.summaryValue, children: formatNumber(model.summary.totalQuantity, locale) })
              ] })
            ] })
          ] }) : null,
          showChart && model.chart.length > 0 ? /* @__PURE__ */ __mf_2("div", { className: styles$4.chart, children: [
            /* @__PURE__ */ __mf_1$1("div", { className: styles$4.chartTitle, children: "Revenue by product line (net)" }),
            model.chart.map((bar) => /* @__PURE__ */ __mf_2("div", { className: styles$4.barRow, children: [
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.barLabel, title: bar.label, children: bar.label }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$4.barValue, children: money(bar.net) }),
              /* @__PURE__ */ __mf_1$1("div", { className: styles$4.barTrack, children: /* @__PURE__ */ __mf_1$1(
                "div",
                {
                  className: styles$4.barFill,
                  style: { width: `${bar.pct}%`, background: bar.color }
                }
              ) })
            ] }, bar.id))
          ] }) : null
        ] }) : null
      ] })
    ] });
  }
);
InvoiceLineGridView.displayName = "InvoiceLineGridView";

const InvoiceLineGridBuild = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config$4.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    InvoiceLineGridView,
    {
      lines: MOCK_LINES,
      currency: merged.currency ?? "",
      locale: merged.locale ?? "fr-FR",
      accentColor: merged.accentColor ?? "#6E56CF",
      surfaceColor: merged.surfaceColor ?? "#FFFFFF",
      textColor: merged.textColor ?? "#23202E",
      mutedColor: merged.mutedColor ?? "#6F6B7D",
      cornerRadius: merged.cornerRadius ?? 16,
      density: merged.density ?? "comfortable",
      categoryColors: merged.categoryColors,
      showSummary: merged.showSummary ?? true,
      showChart: merged.showChart ?? true,
      showQuantityRing: merged.showQuantityRing ?? true,
      showCategoryChips: merged.showCategoryChips ?? true,
      interactive: false
    }
  ) });
};

const DEFAULT_LINES_RELATION = "Lines_Fm_Invoices";
const InvoiceLineGridRender = (props) => {
  const merged = { ...config$4.defaultProps, ...props };
  const linesRelation = merged.linesRelation || DEFAULT_LINES_RELATION;
  const { connect, emit } = __mf_180({ autoBindEvents: false });
  const {
    sources: { datasource: ds }
  } = __mf_182({ acceptIteratorSel: true });
  const [lines, setLines] = __mf_26([]);
  const [paid, setPaid] = __mf_26(false);
  const linesRef = __mf_25([]);
  const paidRef = __mf_25(false);
  const lastTotalsRef = __mf_25("");
  const syncingRef = __mf_25(false);
  const viewProps = __mf_23(
    () => ({
      currency: merged.currency ?? "",
      locale: merged.locale ?? "fr-FR",
      accentColor: merged.accentColor ?? "#6E56CF",
      surfaceColor: merged.surfaceColor ?? "#FFFFFF",
      textColor: merged.textColor ?? "#23202E",
      mutedColor: merged.mutedColor ?? "#6F6B7D",
      cornerRadius: merged.cornerRadius ?? 16,
      density: merged.density ?? "comfortable",
      categoryColors: merged.categoryColors,
      showSummary: merged.showSummary ?? true,
      showChart: merged.showChart ?? true,
      showQuantityRing: merged.showQuantityRing ?? true,
      showCategoryChips: merged.showCategoryChips ?? true
    }),
    [
      merged.currency,
      merged.locale,
      merged.accentColor,
      merged.surfaceColor,
      merged.textColor,
      merged.mutedColor,
      merged.cornerRadius,
      merged.density,
      merged.categoryColors,
      merged.showSummary,
      merged.showChart,
      merged.showQuantityRing,
      merged.showCategoryChips
    ]
  );
  const emitApplyTotals = __mf_17$1(
    (nextLines) => {
      const payload = buildApplyTotalsPayload(nextLines);
      const key = `${payload.Subtotal_BT}|${payload.Tax}|${payload.Total}`;
      if (key === lastTotalsRef.current) return;
      lastTotalsRef.current = key;
      emit("applyTotals", payload);
    },
    [emit]
  );
  const updateLines = __mf_17$1(
    (next, emitTotals = false) => {
      linesRef.current = next;
      setLines(next);
      if (emitTotals) emitApplyTotals(next);
    },
    [emitApplyTotals]
  );
  __mf_20(() => {
    if (!ds) {
      linesRef.current = [];
      setLines([]);
      return;
    }
    let cancelled = false;
    const refresh = async () => {
      if (syncingRef.current) return;
      syncingRef.current = true;
      try {
        const [nextLines, nextPaid] = await Promise.all([
          loadInvoiceLines(ds, linesRelation),
          loadInvoicePaid(ds, linesRelation)
        ]);
        if (cancelled) return;
        linesRef.current = nextLines;
        setLines(nextLines);
        if (nextPaid != null) {
          paidRef.current = nextPaid;
          setPaid(nextPaid);
        }
      } finally {
        syncingRef.current = false;
      }
    };
    void refresh();
    ds.addListener("changed", refresh);
    return () => {
      cancelled = true;
      ds.removeListener("changed", refresh);
    };
  }, [ds, linesRelation]);
  const handleLineFieldChange = __mf_17$1(
    (id, field, value) => {
      const next = linesRef.current.map(
        (line) => line.id === id ? { ...line, [field]: value } : line
      );
      updateLines(next, true);
      const updated = next.find((line) => line.id === id);
      if (updated && isPersistedLineId(id)) {
        emit("saveLine", buildSaveLinePayload(updated));
      }
    },
    [emit, updateLines]
  );
  const handleAddLine = __mf_17$1(() => {
    emit("addLine", {});
  }, [emit]);
  const handleRemoveLine = __mf_17$1(
    (id) => {
      if (isPersistedLineId(id)) {
        emit("removeLine", { ID: Number(id) });
        return;
      }
      const next = linesRef.current.filter((line) => line.id !== id);
      updateLines(next, true);
    },
    [emit, updateLines]
  );
  const handleReorder = __mf_17$1(
    (orderedIds) => {
      const map = new Map(linesRef.current.map((line) => [line.id, line]));
      const next = orderedIds.map((id) => map.get(id)).filter((line) => line != null);
      updateLines(next, false);
      const numericIds = orderedIds.filter(isPersistedLineId).map((id) => Number(id));
      if (numericIds.length > 0) {
        emit("reorderLines", { orderedIds: numericIds });
      }
    },
    [emit, updateLines]
  );
  const handlePaidChange = __mf_17$1(
    (value) => {
      paidRef.current = value;
      setPaid(value);
      emit("setPaid", { value });
    },
    [emit]
  );
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    InvoiceLineGridView,
    {
      ...viewProps,
      lines,
      interactive: true,
      paid,
      onPaidChange: handlePaidChange,
      onLineFieldChange: handleLineFieldChange,
      onAddLine: handleAddLine,
      onRemoveLine: handleRemoveLine,
      onReorder: handleReorder
    }
  ) });
};

const InvoiceLineGrid = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(InvoiceLineGridBuild, { ...props }) : /* @__PURE__ */ __mf_1$1(InvoiceLineGridRender, { ...props });
};
InvoiceLineGrid.craft = config$4.craft;
InvoiceLineGrid.info = config$4.info;
InvoiceLineGrid.defaultProps = config$4.defaultProps;

const dataSettings$3 = [
  {
    key: "datasource",
    label: "Tasks",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  },
  {
    key: "idAttr",
    label: "ID attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "ID"
  },
  {
    key: "titleAttr",
    label: "Title attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Title"
  },
  {
    key: "statusAttr",
    label: "Status attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Status"
  },
  {
    key: "categoryAttr",
    label: "Category attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Category"
  },
  {
    key: "categoryColorAttr",
    label: "Category color attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Color"
  },
  {
    key: "dueDateAttr",
    label: "Due date attribute",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "DueDate"
  }
];
const columnSettings = [
  {
    type: __mf_17.DATAGRID,
    key: "statusColumns",
    name: "Status columns",
    label: "Columns (by status)",
    data: [{ key: "status", label: "Status", type: __mf_17.TEXT_FIELD }]
  },
  {
    key: "locale",
    label: "Locale",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "en-US"
  }
];
const designSettings = [
  {
    key: "accentColor",
    label: "Accent color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#6E56CF"
  },
  {
    key: "surfaceColor",
    label: "Surface color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#F7F6F9"
  },
  {
    key: "textColor",
    label: "Text color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#23202E"
  },
  {
    key: "mutedColor",
    label: "Muted color",
    type: __mf_17.COLOR_PICKER,
    defaultValue: "#6F6B7D"
  },
  {
    key: "cornerRadius",
    label: "Corner radius (px)",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 14
  },
  {
    type: __mf_17.DATAGRID,
    key: "categoryColors",
    name: "Category colors",
    label: "Category colors",
    data: [
      { key: "category", label: "Category", type: __mf_17.TEXT_FIELD },
      { key: "color", label: "Color", type: __mf_17.COLOR_PICKER }
    ]
  }
];
const displaySettings = [
  {
    key: "showCategoryChips",
    label: "Show category chips",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  },
  {
    key: "showDueDates",
    label: "Show due dates",
    type: __mf_17.CHECKBOX,
    defaultValue: true
  }
];
const commonSettings$3 = [
  ...dataSettings$3,
  ...columnSettings,
  ...designSettings,
  ...displaySettings
];
const Settings$3 = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings$3
  },
  {
    key: "columns",
    label: "Columns",
    type: __mf_17.GROUP,
    components: columnSettings
  },
  {
    key: "design",
    label: "Design",
    type: __mf_17.GROUP,
    components: designSettings
  },
  {
    key: "display",
    label: "Display",
    type: __mf_17.GROUP,
    components: displaySettings
  },
  ...__mf_121(__mf_10).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];
const BasicSettings$3 = [
  ...commonSettings$3,
  ...__mf_121(__mf_1).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];

const TASK_ATTRS = [
  "ID",
  "id",
  "Title",
  "title",
  "Description",
  "description",
  "Status",
  "status",
  "Category",
  "category",
  "CategoryColor",
  "categoryColor",
  "Color",
  "color",
  "DueDate",
  "dueDate",
  "Due_Date"
];
const DEFAULT_COLUMNS = [
  { status: "Not Started" },
  { status: "In Progress" },
  { status: "Completed" }
];
const FALLBACK_CATEGORY_COLOR = "#8B8698";
const MOCK_TASKS = [
  {
    id: "1",
    title: "Setup wireless access point",
    status: "In Progress",
    category: "Work",
    categoryColor: "red",
    dueDate: "2019-06-13T23:00:00.000Z"
  },
  {
    id: "2",
    title: "Early Christmas shopping",
    status: "Not Started",
    category: "Family",
    categoryColor: "blue",
    dueDate: "2019-12-24T23:00:00.000Z"
  },
  {
    id: "3",
    title: "Team building exercise",
    status: "Completed",
    category: "Work",
    categoryColor: "red",
    dueDate: "2019-06-05T00:00:00.000Z"
  },
  {
    id: "4",
    title: "Summer vacation planning",
    status: "In Progress",
    category: "Travel",
    categoryColor: "green",
    dueDate: "2019-08-14T23:00:00.000Z"
  },
  {
    id: "5",
    title: "Change brakes in car",
    status: "Not Started",
    category: "Personal",
    categoryColor: "aqua",
    dueDate: "2019-09-15T23:00:00.000Z"
  }
];
const pick = (record, keys) => {
  for (const key of keys) {
    if (record[key] != null && record[key] !== "") return record[key];
  }
  return void 0;
};
const toOptionalString = (value) => {
  if (value == null) return void 0;
  const s = String(value).trim();
  return s === "" ? void 0 : s;
};
const extractRecords = (raw) => {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.filter((item) => item && typeof item === "object");
  }
  if (typeof raw !== "object") return [];
  const obj = raw;
  if (Array.isArray(obj.__ENTITIES)) return obj.__ENTITIES;
  if (Array.isArray(obj.entities)) return obj.entities;
  return [];
};
const parseWithPlainFallback = (raw) => {
  const direct = extractRecords(raw);
  if (direct.length > 0) return direct;
  if (!raw || typeof raw !== "object") return [];
  try {
    return extractRecords(JSON.parse(JSON.stringify(raw)));
  } catch {
    return [];
  }
};
const attrKeys = (custom, fallbacks) => {
  const trimmed = custom?.trim();
  return trimmed ? [trimmed, ...fallbacks.filter((k) => k !== trimmed)] : fallbacks;
};
function hasEntitySelection(ds) {
  return ds.entitysel != null;
}
async function readRaw(ds, property) {
  try {
    return property ? await ds.getValue(property) : await ds.getValue();
  } catch {
    return void 0;
  }
}
async function loadTasks(ds, attrs = {}) {
  const fromRoot = parseTasks(await readRaw(ds), attrs);
  if (fromRoot.length > 0) return fromRoot;
  const dsAny = ds;
  if (typeof dsAny.getCollection === "function") {
    try {
      const collection = await dsAny.getCollection(0, 500, dsAny.filterAttributesText || "");
      const parsed = parseTasks(collection, attrs);
      if (parsed.length > 0) return parsed;
    } catch {
    }
    if (dsAny.type === "entitysel" || hasEntitySelection(ds)) {
      try {
        const collection = await dsAny.getCollection(0, 500, dsAny.filterAttributesText || "*");
        const parsed = parseTasks(collection, attrs);
        if (parsed.length > 0) return parsed;
      } catch {
      }
    }
  }
  const length = typeof dsAny.length === "number" ? dsAny.length : 0;
  if (length > 0 && typeof dsAny.getEntity === "function") {
    const rows = [];
    for (let i = 0; i < Math.min(length, 500); i += 1) {
      try {
        const entity = await dsAny.getEntity(i);
        if (!entity) continue;
        if (entity && typeof entity === "object" && "getValue" in entity) {
          const value = await entity.getValue();
          if (value && typeof value === "object") rows.push(value);
        } else if (entity && typeof entity === "object") {
          rows.push(entity);
        }
      } catch {
      }
    }
    const parsed = parseTasks(rows, attrs);
    if (parsed.length > 0) return parsed;
  }
  return [];
}
const parseTasks = (raw, attrs = {}) => {
  const records = parseWithPlainFallback(raw);
  const tasks = [];
  records.forEach((record, index) => {
    if (!record || typeof record !== "object") return;
    const id = toOptionalString(pick(record, attrKeys(attrs.idAttr, ["ID", "id", "Id"]))) ?? `tmp-${index}`;
    const title = toOptionalString(
      pick(
        record,
        attrKeys(attrs.titleAttr, ["Title", "title", "Description", "description", "Name", "name"])
      )
    ) ?? "Untitled";
    const status = toOptionalString(
      pick(record, attrKeys(attrs.statusAttr, ["Status", "status", "State", "state"]))
    ) ?? "Not Started";
    const category = toOptionalString(
      pick(record, attrKeys(attrs.categoryAttr, ["Category", "category", "Type", "type"]))
    );
    const categoryColor = toOptionalString(
      pick(
        record,
        attrKeys(attrs.categoryColorAttr, ["Color", "color", "CategoryColor", "categoryColor"])
      )
    );
    const dueDate = toOptionalString(
      pick(record, attrKeys(attrs.dueDateAttr, ["DueDate", "dueDate", "Due_Date", "due_date", "Deadline"]))
    );
    tasks.push({ id, title, status, category, categoryColor, dueDate });
  });
  return tasks;
};
const normalizeColumns = (columns) => {
  if (typeof columns === "string") {
    try {
      const parsed = JSON.parse(columns);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((col) => ({ status: String(col?.status ?? "").trim() })).filter((col) => col.status);
      }
    } catch {
      const parts = columns.split(",").map((s) => s.trim()).filter(Boolean);
      if (parts.length > 0) return parts.map((status) => ({ status }));
    }
    return DEFAULT_COLUMNS;
  }
  if (!Array.isArray(columns) || columns.length === 0) return DEFAULT_COLUMNS;
  const normalized = columns.map((col) => ({ status: String(col?.status ?? "").trim() })).filter((col) => col.status);
  return normalized.length > 0 ? normalized : DEFAULT_COLUMNS;
};
const toCategoryColorMap = (categoryColors) => {
  if (!categoryColors) return {};
  let rows = [];
  if (typeof categoryColors === "string") {
    try {
      rows = JSON.parse(categoryColors);
    } catch {
      return {};
    }
  } else {
    rows = categoryColors;
  }
  const map = {};
  rows.forEach((row) => {
    const key = String(row?.category ?? "").trim();
    const color = String(row?.color ?? "").trim();
    if (key && color) map[key] = color;
  });
  return map;
};
const resolveCategoryColor = (task, colorMap) => {
  if (task.categoryColor) return task.categoryColor;
  if (task.category && colorMap[task.category]) return colorMap[task.category];
  return FALLBACK_CATEGORY_COLOR;
};
const tasksFingerprint = (tasks) => tasks.map((t) => `${t.id}|${t.title}|${t.status}|${t.category ?? ""}|${t.dueDate ?? ""}`).join(";");
const groupTasksByStatus = (tasks, columns) => {
  const columnStatuses = columns.map((c) => c.status);
  const known = new Set(columnStatuses);
  const extras = [];
  const grouped = {};
  columnStatuses.forEach((status) => {
    grouped[status] = [];
  });
  tasks.forEach((task) => {
    const status = task.status || "Not Started";
    if (!known.has(status)) {
      known.add(status);
      extras.push(status);
      grouped[status] = [];
    }
    grouped[status].push(task);
  });
  const allColumns = [...columns, ...extras.map((status) => ({ status }))];
  return { columns: allColumns, grouped };
};
const formatDueDate = (value, locale = "en-US") => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(locale, { month: "short", day: "numeric" });
};
const isDueSoonOrOverdue = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "ok";
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(date);
  due.setHours(0, 0, 0, 0);
  const diffDays = Math.round((due.getTime() - today.getTime()) / 864e5);
  if (diffDays < 0) return "overdue";
  if (diffDays <= 2) return "soon";
  return "ok";
};
const moveTaskStatus = (tasks, taskID, newStatus) => {
  let changed = false;
  const next = tasks.map((task) => {
    if (task.id !== taskID || task.status === newStatus) return task;
    changed = true;
    return { ...task, status: newStatus };
  });
  return changed ? next : tasks;
};
const applyPendingMoves = (tasks, pending) => {
  if (pending.size === 0) return tasks;
  return tasks.map((task) => {
    const pendingStatus = pending.get(task.id);
    if (!pendingStatus) return task;
    if (task.status === pendingStatus) {
      pending.delete(task.id);
      return task;
    }
    return { ...task, status: pendingStatus };
  });
};

const DEFAULT_CATEGORY_COLORS = [
  { category: "Work", color: "red" },
  { category: "Family", color: "blue" },
  { category: "Travel", color: "green" },
  { category: "Personal", color: "aqua" }
];
const config$3 = {
  craft: {
    displayName: "Kanban Board",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings$3, BasicSettings$3)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Kanban Board",
    exposed: true,
    icon: MdViewColumn,
    events: [{ label: "On Card Move", value: "onCardMove" }],
    datasources: {
      accept: ["entitysel", "array"],
      declarations: (props) => {
        const datasource = props.datasource?.trim() ?? "";
        const declarations = [
          { path: datasource, iterable: true }
        ];
        const { id: ds, namespace } = __mf_144(datasource) || {};
        if (!ds) return declarations;
        const withNs = (path) => namespace ? `${namespace}:${path}` : path;
        const attrNames = [
          props.idAttr,
          props.titleAttr,
          props.statusAttr,
          props.categoryAttr,
          props.categoryColorAttr,
          props.dueDateAttr,
          ...TASK_ATTRS
        ].map((attr) => attr?.trim()).filter((attr) => !!attr);
        const seen = /* @__PURE__ */ new Set();
        attrNames.forEach((attr) => {
          if (seen.has(attr)) return;
          seen.add(attr);
          declarations.push({ path: withNs(`${ds}.[].${attr}`) });
        });
        return declarations;
      }
    }
  },
  defaultProps: {
    idAttr: "ID",
    titleAttr: "Title",
    statusAttr: "Status",
    categoryAttr: "Category",
    categoryColorAttr: "Color",
    dueDateAttr: "DueDate",
    statusColumns: DEFAULT_COLUMNS,
    locale: "en-US",
    accentColor: "#6E56CF",
    surfaceColor: "#F7F6F9",
    textColor: "#23202E",
    mutedColor: "#6F6B7D",
    cornerRadius: 14,
    categoryColors: DEFAULT_CATEGORY_COLORS,
    showCategoryChips: true,
    showDueDates: true,
    style: {
      width: "100%",
      minHeight: "360px"
    }
  }
};

const board = "_board_1l6dv_1";
const column = "_column_1l6dv_19";
const columnDropTarget = "_columnDropTarget_1l6dv_35";
const columnHeader = "_columnHeader_1l6dv_41";
const columnTitle = "_columnTitle_1l6dv_49";
const columnCount = "_columnCount_1l6dv_57";
const columnBody = "_columnBody_1l6dv_72";
const card = "_card_1l6dv_82";
const cardDragging = "_cardDragging_1l6dv_105";
const cardInteractive = "_cardInteractive_1l6dv_110";
const cardStatic = "_cardStatic_1l6dv_115";
const cardTitle = "_cardTitle_1l6dv_119";
const cardMeta = "_cardMeta_1l6dv_128";
const chip = "_chip_1l6dv_135";
const chipDot = "_chipDot_1l6dv_149";
const chipLabel = "_chipLabel_1l6dv_156";
const due = "_due_1l6dv_162";
const dueSoon = "_dueSoon_1l6dv_175";
const dueOverdue = "_dueOverdue_1l6dv_180";
const emptyColumn = "_emptyColumn_1l6dv_185";
const emptyBoard = "_emptyBoard_1l6dv_198";
const styles$3 = {
	board: board,
	column: column,
	columnDropTarget: columnDropTarget,
	columnHeader: columnHeader,
	columnTitle: columnTitle,
	columnCount: columnCount,
	columnBody: columnBody,
	card: card,
	cardDragging: cardDragging,
	cardInteractive: cardInteractive,
	cardStatic: cardStatic,
	cardTitle: cardTitle,
	cardMeta: cardMeta,
	chip: chip,
	chipDot: chipDot,
	chipLabel: chipLabel,
	due: due,
	dueSoon: dueSoon,
	dueOverdue: dueOverdue,
	emptyColumn: emptyColumn,
	emptyBoard: emptyBoard
};

const DRAG_MIME = "application/x-qodly-kanban-task";
const KanbanBoardView = __mf_16$1(
  ({
    tasks,
    columns,
    accentColor,
    surfaceColor,
    textColor,
    mutedColor,
    cornerRadius,
    locale = "en-US",
    categoryColors,
    showCategoryChips = true,
    showDueDates = true,
    interactive = false,
    onCardMove
  }) => {
    const [dragId, setDragId] = __mf_26(null);
    const [dropStatus, setDropStatus] = __mf_26(null);
    const colorMap = __mf_23(() => toCategoryColorMap(categoryColors), [categoryColors]);
    const columnDefs = __mf_23(() => normalizeColumns(columns), [columns]);
    const { columns: boardColumns, grouped } = __mf_23(
      () => groupTasksByStatus(tasks, columnDefs),
      [tasks, columnDefs]
    );
    const cssVars = {
      "--kb-accent": accentColor,
      "--kb-surface": surfaceColor,
      "--kb-text": textColor,
      "--kb-muted": mutedColor,
      "--kb-radius": `${cornerRadius}px`
    };
    const handleDragStart = (event, taskId) => {
      if (!interactive) return;
      event.dataTransfer.setData(DRAG_MIME, taskId);
      event.dataTransfer.effectAllowed = "move";
      setDragId(taskId);
    };
    const handleDragOverColumn = (event, status) => {
      if (!interactive || !dragId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      if (dropStatus !== status) setDropStatus(status);
    };
    const handleDropOnColumn = (event, status) => {
      if (!interactive || !onCardMove) return;
      event.preventDefault();
      const taskID = event.dataTransfer.getData(DRAG_MIME) || dragId;
      setDragId(null);
      setDropStatus(null);
      if (!taskID) return;
      const task = tasks.find((t) => t.id === taskID);
      if (!task || task.status === status) return;
      onCardMove(taskID, status);
    };
    const handleDragEnd = () => {
      setDragId(null);
      setDropStatus(null);
    };
    if (tasks.length === 0 && boardColumns.length === 0) {
      return /* @__PURE__ */ __mf_1$1("div", { className: styles$3.board, style: cssVars, children: /* @__PURE__ */ __mf_1$1("div", { className: styles$3.emptyBoard, children: "No tasks" }) });
    }
    return /* @__PURE__ */ __mf_1$1("div", { className: styles$3.board, style: cssVars, role: "list", children: boardColumns.map((column) => {
      const columnTasks = grouped[column.status] ?? [];
      return /* @__PURE__ */ __mf_2(
        "section",
        {
          className: cn(styles$3.column, dropStatus === column.status && styles$3.columnDropTarget),
          "aria-label": column.status,
          onDragOver: (event) => handleDragOverColumn(event, column.status),
          onDrop: (event) => handleDropOnColumn(event, column.status),
          onDragLeave: () => {
            if (dropStatus === column.status) setDropStatus(null);
          },
          children: [
            /* @__PURE__ */ __mf_2("header", { className: styles$3.columnHeader, children: [
              /* @__PURE__ */ __mf_1$1("h3", { className: styles$3.columnTitle, children: column.status }),
              /* @__PURE__ */ __mf_1$1("span", { className: styles$3.columnCount, children: columnTasks.length })
            ] }),
            /* @__PURE__ */ __mf_1$1("div", { className: styles$3.columnBody, children: columnTasks.length === 0 ? /* @__PURE__ */ __mf_1$1("div", { className: styles$3.emptyColumn, children: interactive ? "Drop a card here" : "No cards" }) : columnTasks.map((task) => {
              const color = resolveCategoryColor(task, colorMap);
              const dueTone = task.dueDate ? isDueSoonOrOverdue(task.dueDate) : "ok";
              return /* @__PURE__ */ __mf_2(
                "article",
                {
                  className: cn(
                    styles$3.card,
                    interactive ? styles$3.cardInteractive : styles$3.cardStatic,
                    dragId === task.id && styles$3.cardDragging
                  ),
                  draggable: interactive,
                  onDragStart: (event) => handleDragStart(event, task.id),
                  onDragEnd: handleDragEnd,
                  role: "listitem",
                  children: [
                    /* @__PURE__ */ __mf_1$1("h4", { className: styles$3.cardTitle, children: task.title }),
                    showCategoryChips && task.category || showDueDates && task.dueDate ? /* @__PURE__ */ __mf_2("div", { className: styles$3.cardMeta, children: [
                      showCategoryChips && task.category ? /* @__PURE__ */ __mf_2("span", { className: styles$3.chip, title: task.category, children: [
                        /* @__PURE__ */ __mf_1$1(
                          "span",
                          {
                            className: styles$3.chipDot,
                            style: { background: color }
                          }
                        ),
                        /* @__PURE__ */ __mf_1$1("span", { className: styles$3.chipLabel, children: task.category })
                      ] }) : null,
                      showDueDates && task.dueDate ? /* @__PURE__ */ __mf_2(
                        "span",
                        {
                          className: cn(
                            styles$3.due,
                            dueTone === "soon" && styles$3.dueSoon,
                            dueTone === "overdue" && styles$3.dueOverdue
                          ),
                          title: task.dueDate,
                          children: [
                            /* @__PURE__ */ __mf_1$1(MdEvent, { size: 12 }),
                            formatDueDate(task.dueDate, locale)
                          ]
                        }
                      ) : null
                    ] }) : null
                  ]
                },
                task.id
              );
            }) })
          ]
        },
        column.status
      );
    }) });
  }
);
KanbanBoardView.displayName = "KanbanBoardView";

const KanbanBoardBuild = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config$3.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    KanbanBoardView,
    {
      tasks: MOCK_TASKS,
      columns: merged.statusColumns,
      accentColor: merged.accentColor ?? "#6E56CF",
      surfaceColor: merged.surfaceColor ?? "#F7F6F9",
      textColor: merged.textColor ?? "#23202E",
      mutedColor: merged.mutedColor ?? "#6F6B7D",
      cornerRadius: merged.cornerRadius ?? 14,
      locale: merged.locale ?? "en-US",
      categoryColors: merged.categoryColors,
      showCategoryChips: merged.showCategoryChips ?? true,
      showDueDates: merged.showDueDates ?? true,
      interactive: false
    }
  ) });
};

const KanbanBoardRender = (props) => {
  const merged = { ...config$3.defaultProps, ...props };
  const { connect, emit } = __mf_180({ autoBindEvents: false });
  const {
    sources: { datasource: ds }
  } = __mf_182({ acceptIteratorSel: true });
  const [tasks, setTasks] = __mf_26([]);
  const tasksRef = __mf_25([]);
  const fingerprintRef = __mf_25("");
  const pendingMovesRef = __mf_25(/* @__PURE__ */ new Map());
  const syncingRef = __mf_25(false);
  const attrMap = __mf_23(
    () => ({
      idAttr: merged.idAttr,
      titleAttr: merged.titleAttr,
      statusAttr: merged.statusAttr,
      categoryAttr: merged.categoryAttr,
      categoryColorAttr: merged.categoryColorAttr,
      dueDateAttr: merged.dueDateAttr
    }),
    [
      merged.idAttr,
      merged.titleAttr,
      merged.statusAttr,
      merged.categoryAttr,
      merged.categoryColorAttr,
      merged.dueDateAttr
    ]
  );
  const viewProps = __mf_23(
    () => ({
      columns: merged.statusColumns,
      accentColor: merged.accentColor ?? "#6E56CF",
      surfaceColor: merged.surfaceColor ?? "#F7F6F9",
      textColor: merged.textColor ?? "#23202E",
      mutedColor: merged.mutedColor ?? "#6F6B7D",
      cornerRadius: merged.cornerRadius ?? 14,
      locale: merged.locale ?? "en-US",
      categoryColors: merged.categoryColors,
      showCategoryChips: merged.showCategoryChips ?? true,
      showDueDates: merged.showDueDates ?? true
    }),
    [
      merged.statusColumns,
      merged.accentColor,
      merged.surfaceColor,
      merged.textColor,
      merged.mutedColor,
      merged.cornerRadius,
      merged.locale,
      merged.categoryColors,
      merged.showCategoryChips,
      merged.showDueDates
    ]
  );
  const applyTasks = __mf_17$1((next) => {
    const withPending = applyPendingMoves(next, pendingMovesRef.current);
    const fingerprint = tasksFingerprint(withPending);
    if (fingerprint === fingerprintRef.current) return;
    fingerprintRef.current = fingerprint;
    tasksRef.current = withPending;
    setTasks(withPending);
  }, []);
  __mf_20(() => {
    if (!ds) {
      applyTasks([]);
      return;
    }
    let cancelled = false;
    const refresh = async () => {
      if (syncingRef.current) return;
      syncingRef.current = true;
      try {
        const next = await loadTasks(ds, attrMap);
        if (cancelled) return;
        applyTasks(next);
      } finally {
        syncingRef.current = false;
      }
    };
    void refresh();
    ds.addListener("changed", refresh);
    return () => {
      cancelled = true;
      ds.removeListener("changed", refresh);
    };
  }, [ds, attrMap, applyTasks]);
  const handleCardMove = __mf_17$1(
    (taskID, newStatus) => {
      const current = tasksRef.current.find((task) => task.id === taskID);
      if (!current || current.status === newStatus) return;
      pendingMovesRef.current.set(taskID, newStatus);
      const next = moveTaskStatus(tasksRef.current, taskID, newStatus);
      fingerprintRef.current = tasksFingerprint(next);
      tasksRef.current = next;
      setTasks(next);
      emit("onCardMove", { taskID, newStatus });
    },
    [emit]
  );
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    KanbanBoardView,
    {
      ...viewProps,
      tasks,
      interactive: true,
      onCardMove: handleCardMove
    }
  ) });
};

const KanbanBoard = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(KanbanBoardBuild, { ...props }) : /* @__PURE__ */ __mf_1$1(KanbanBoardRender, { ...props });
};
KanbanBoard.craft = config$3.craft;
KanbanBoard.info = config$3.info;
KanbanBoard.defaultProps = config$3.defaultProps;

const dataSettings$2 = [
  {
    key: "datasource",
    label: "Data Source",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  }
];
const gaugeSettings = [
  {
    key: "readOnly",
    label: "Read only",
    type: __mf_17.CHECKBOX,
    defaultValue: false
  },
  {
    key: "strokeWidth",
    label: "Stroke width",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 14
  }
];
const commonSettings$2 = [...dataSettings$2, ...gaugeSettings];
const Settings$2 = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings$2
  },
  {
    key: "gauge",
    label: "Gauge",
    type: __mf_17.GROUP,
    components: gaugeSettings
  },
  ...__mf_121(__mf_10).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];
const BasicSettings$2 = [
  ...commonSettings$2,
  ...__mf_121(__mf_1).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];

const config$2 = {
  craft: {
    displayName: "Progress Gauge",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings$2, BasicSettings$2)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Progress Gauge",
    exposed: true,
    icon: MdOutlineDonutLarge,
    events: [{ label: "On Value Change", value: "onValueChange" }],
    datasources: {
      accept: ["number"]
    }
  },
  defaultProps: {
    readOnly: false,
    strokeWidth: 14,
    style: {
      width: "160px",
      height: "160px"
    }
  }
};

const root$2 = "_root_1q9cf_1";
const svg = "_svg_1q9cf_14";
const track = "_track_1q9cf_22";
const progress = "_progress_1q9cf_28";
const progressDragging = "_progressDragging_1q9cf_39";
const label = "_label_1q9cf_43";
const interactive = "_interactive_1q9cf_53";
const readOnly = "_readOnly_1q9cf_61";
const styles$2 = {
	root: root$2,
	svg: svg,
	track: track,
	progress: progress,
	progressDragging: progressDragging,
	label: label,
	interactive: interactive,
	readOnly: readOnly
};

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const COLOR_RED = "#e53935";
const COLOR_ORANGE = "#fb8c00";
const COLOR_GREEN = "#43a047";
const TRACK_COLOR = "#e8e6ed";
function clampValue(raw) {
  const n = typeof raw === "number" ? raw : Number(raw);
  if (!Number.isFinite(n)) return MIN_VALUE;
  return Math.min(MAX_VALUE, Math.max(MIN_VALUE, Math.round(n)));
}
function colorForValue(value) {
  if (value < 30) return COLOR_RED;
  if (value < 70) return COLOR_ORANGE;
  return COLOR_GREEN;
}
function angleFromPointer(clientX, clientY, rect) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return Math.atan2(clientY - cy, clientX - cx) * 180 / Math.PI;
}
function valueFromAngle(angleDeg) {
  let fromTop = angleDeg + 90;
  if (fromTop < 0) fromTop += 360;
  return clampValue(fromTop / 360 * 100);
}

const VIEW_SIZE = 200;
const CENTER = VIEW_SIZE / 2;
const KEY_STEP = 1;
const KEY_STEP_LARGE = 10;
const ProgressGaugeView = ({
  value,
  strokeWidth = 14,
  readOnly = false,
  interactive = true,
  className,
  onValueChange
}) => {
  const clamped = clampValue(value);
  const color = colorForValue(clamped);
  const radius = (VIEW_SIZE - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  const svgRef = __mf_25(null);
  const draggingRef = __mf_25(false);
  const [dragging, setDragging] = __mf_26(false);
  const canDrag = interactive && !readOnly;
  const updateFromPointer = __mf_17$1(
    (clientX, clientY) => {
      const el = svgRef.current;
      if (!el) return;
      const next = valueFromAngle(angleFromPointer(clientX, clientY, el.getBoundingClientRect()));
      onValueChange?.(next);
    },
    [onValueChange]
  );
  const onPointerDown = __mf_17$1(
    (e) => {
      if (!canDrag) return;
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      setDragging(true);
      updateFromPointer(e.clientX, e.clientY);
    },
    [canDrag, updateFromPointer]
  );
  const onPointerMove = __mf_17$1(
    (e) => {
      if (!draggingRef.current) return;
      updateFromPointer(e.clientX, e.clientY);
    },
    [updateFromPointer]
  );
  const endDrag = __mf_17$1((e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);
  const onKeyDown = __mf_17$1(
    (e) => {
      if (!canDrag) return;
      const step = e.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
      let next = null;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          next = clampValue(clamped + step);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          next = clampValue(clamped - step);
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = 100;
          break;
      }
      if (next === null) return;
      e.preventDefault();
      onValueChange?.(next);
    },
    [canDrag, clamped, onValueChange]
  );
  __mf_20(() => {
    return () => {
      draggingRef.current = false;
    };
  }, []);
  return /* @__PURE__ */ __mf_1$1(
    "div",
    {
      className: cn(styles$2.root, canDrag ? styles$2.interactive : styles$2.readOnly, className),
      style: {
        "--pg-color": color,
        "--pg-track": TRACK_COLOR
      },
      role: "slider",
      tabIndex: canDrag ? 0 : -1,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": clamped,
      "aria-readonly": readOnly || void 0,
      "aria-label": "Progress",
      onKeyDown,
      children: /* @__PURE__ */ __mf_2(
        "svg",
        {
          ref: svgRef,
          className: styles$2.svg,
          viewBox: `0 0 ${VIEW_SIZE} ${VIEW_SIZE}`,
          "aria-hidden": "true",
          onPointerDown,
          onPointerMove,
          onPointerUp: endDrag,
          onPointerCancel: endDrag,
          children: [
            /* @__PURE__ */ __mf_1$1(
              "circle",
              {
                className: styles$2.track,
                cx: CENTER,
                cy: CENTER,
                r: radius,
                strokeWidth
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "circle",
              {
                className: cn(styles$2.progress, dragging && styles$2.progressDragging),
                cx: CENTER,
                cy: CENTER,
                r: radius,
                strokeWidth,
                strokeDasharray: circumference,
                strokeDashoffset: offset
              }
            ),
            /* @__PURE__ */ __mf_2("text", { className: styles$2.label, x: CENTER, y: CENTER, fontSize: VIEW_SIZE * 0.22, children: [
              clamped,
              "%"
            ] })
          ]
        }
      )
    }
  );
};

const SAMPLE_VALUE = 65;
const ProgressGaugeBuild = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config$2.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    ProgressGaugeView,
    {
      value: SAMPLE_VALUE,
      strokeWidth: merged.strokeWidth ?? 14,
      readOnly: merged.readOnly ?? false,
      interactive: false
    }
  ) });
};

const ProgressGaugeRender = (props) => {
  const merged = { ...config$2.defaultProps, ...props };
  const { connect, emit } = __mf_180({ autoBindEvents: false });
  const {
    sources: { datasource: ds }
  } = __mf_182();
  const [value, setValue] = __mf_26(0);
  const valueRef = __mf_25(0);
  const writingRef = __mf_25(false);
  const persistingRef = __mf_25(false);
  const needsPersistRef = __mf_25(false);
  const applyValue = __mf_17$1((next) => {
    const clamped = clampValue(next);
    if (clamped === valueRef.current) return;
    valueRef.current = clamped;
    setValue(clamped);
  }, []);
  __mf_20(() => {
    if (!ds) {
      applyValue(0);
      return;
    }
    let cancelled = false;
    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue();
      if (cancelled) return;
      applyValue(raw);
    };
    void listener();
    ds.addListener("changed", listener);
    return () => {
      cancelled = true;
      ds.removeListener("changed", listener);
    };
  }, [ds, applyValue]);
  const persistLatest = __mf_17$1(async () => {
    if (persistingRef.current) {
      needsPersistRef.current = true;
      return;
    }
    persistingRef.current = true;
    try {
      do {
        needsPersistRef.current = false;
        const v = valueRef.current;
        if (ds) {
          writingRef.current = true;
          try {
            await ds.setValue(null, v);
          } finally {
            writingRef.current = false;
          }
        }
        emit("onValueChange", { value: v });
      } while (needsPersistRef.current);
    } finally {
      persistingRef.current = false;
    }
  }, [ds, emit]);
  const handleValueChange = __mf_17$1(
    (next) => {
      const clamped = clampValue(next);
      if (clamped === valueRef.current) return;
      valueRef.current = clamped;
      setValue(clamped);
      void persistLatest();
    },
    [persistLatest]
  );
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    ProgressGaugeView,
    {
      value,
      strokeWidth: merged.strokeWidth ?? 14,
      readOnly: merged.readOnly ?? false,
      interactive: true,
      onValueChange: handleValueChange
    }
  ) });
};

const ProgressGauge = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(ProgressGaugeBuild, { ...props }) : /* @__PURE__ */ __mf_1$1(ProgressGaugeRender, { ...props });
};
ProgressGauge.craft = config$2.craft;
ProgressGauge.info = config$2.info;
ProgressGauge.defaultProps = config$2.defaultProps;

const dataSettings$1 = [
  {
    key: "datasource",
    label: "Data Source",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  }
];
const editorSettings$1 = [
  {
    key: "placeholder",
    label: "Placeholder",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Enter text..."
  },
  {
    key: "readOnly",
    label: "Read only",
    type: __mf_17.CHECKBOX,
    defaultValue: false
  },
  {
    key: "minHeight",
    label: "Min height (px)",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 180
  }
];
const HIDDEN_STYLES = [
  "style.overflow",
  "display",
  "style.textAlign",
  "style.textDecorationLine",
  "style.fontStyle",
  "style.textTransform"
];
const commonSettings$1 = [...dataSettings$1, ...editorSettings$1];
const Settings$1 = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings$1
  },
  {
    key: "editor",
    label: "Editor",
    type: __mf_17.GROUP,
    components: editorSettings$1
  },
  ...__mf_121(__mf_10).filter(...HIDDEN_STYLES)
];
const BasicSettings$1 = [
  ...commonSettings$1,
  ...__mf_121(__mf_1).filter(...HIDDEN_STYLES)
];

const config$1 = {
  craft: {
    displayName: "Rich Text 2",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings$1, BasicSettings$1)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Rich Text 2",
    exposed: true,
    icon: MdOutlineEditNote,
    events: [
      { label: "On Change", value: "onChange" },
      { label: "On Focus", value: "onFocus" },
      { label: "On Blur", value: "onBlur" }
    ],
    datasources: {
      accept: ["string"]
    }
  },
  defaultProps: {
    placeholder: "Enter text...",
    readOnly: false,
    minHeight: 180,
    style: {
      width: "100%",
      minHeight: "180px"
    }
  }
};

const root$1 = "_root_4ch4i_1";
const rootFocused = "_rootFocused_4ch4i_15";
const rootReadOnly$1 = "_rootReadOnly_4ch4i_20";
const toolbar$1 = "_toolbar_4ch4i_25";
const group$1 = "_group_4ch4i_35";
const divider$1 = "_divider_4ch4i_41";
const btn$1 = "_btn_4ch4i_48";
const select$1 = "_select_4ch4i_49";
const btnActive$1 = "_btnActive_4ch4i_81";
const surface$1 = "_surface_4ch4i_99";
const editor$1 = "_editor_4ch4i_106";
const editorEmpty$1 = "_editorEmpty_4ch4i_117";
const editorReadOnly$1 = "_editorReadOnly_4ch4i_125";
const styles$1 = {
	root: root$1,
	rootFocused: rootFocused,
	rootReadOnly: rootReadOnly$1,
	toolbar: toolbar$1,
	group: group$1,
	divider: divider$1,
	btn: btn$1,
	select: select$1,
	btnActive: btnActive$1,
	surface: surface$1,
	editor: editor$1,
	editorEmpty: editorEmpty$1,
	editorReadOnly: editorReadOnly$1
};

const ALLOWED_TAGS = /* @__PURE__ */ new Set([
  "P",
  "BR",
  "H1",
  "H2",
  "H3",
  "STRONG",
  "EM",
  "U",
  "S",
  "UL",
  "OL",
  "LI",
  "A",
  "BLOCKQUOTE"
]);
const TAG_ALIASES = {
  B: "STRONG",
  I: "EM",
  STRIKE: "S",
  DEL: "S",
  H4: "H3",
  H5: "H3",
  H6: "H3",
  DIV: "P"
};
const DROPPED_TAGS = /* @__PURE__ */ new Set([
  "SCRIPT",
  "STYLE",
  "IFRAME",
  "FRAME",
  "FRAMESET",
  "OBJECT",
  "EMBED",
  "APPLET",
  "LINK",
  "META",
  "BASE",
  "FORM",
  "INPUT",
  "BUTTON",
  "SELECT",
  "TEXTAREA",
  "NOSCRIPT",
  "TEMPLATE"
]);
const BLOCK_TAGS = /* @__PURE__ */ new Set(["P", "H1", "H2", "H3", "LI", "UL", "OL", "BLOCKQUOTE"]);
const ALIGNMENTS = /* @__PURE__ */ new Set(["left", "center", "right", "justify"]);
const SAFE_URL = /^(?:https?:\/\/|mailto:|tel:|#|\/|\.{1,2}\/)/i;
function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (SAFE_URL.test(trimmed)) return trimmed;
  if (/^[\w-]+(\.[\w-]+)+([/?#].*)?$/.test(trimmed)) return `https://${trimmed}`;
  return "";
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function readAlignment(el) {
  const inline = el.style?.textAlign?.trim().toLowerCase();
  if (inline && ALIGNMENTS.has(inline)) return inline;
  const attr = el.getAttribute("align")?.trim().toLowerCase();
  return attr && ALIGNMENTS.has(attr) ? attr : "";
}
function stripAttributes(el) {
  const align = BLOCK_TAGS.has(el.tagName) ? readAlignment(el) : "";
  const href = el.tagName === "A" ? sanitizeUrl(el.getAttribute("href") || "") : "";
  for (const attr of Array.from(el.attributes)) {
    el.removeAttribute(attr.name);
  }
  if (align) el.style.textAlign = align;
  if (el.tagName === "A") {
    if (!href) {
      unwrap(el);
      return;
    }
    el.setAttribute("href", href);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
}
function unwrap(el) {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}
function rename(el, tagName) {
  const replacement = el.ownerDocument.createElement(tagName);
  const align = readAlignment(el);
  const href = el.tagName === "A" ? el.getAttribute("href") : null;
  while (el.firstChild) replacement.appendChild(el.firstChild);
  if (align) replacement.style.textAlign = align;
  if (href) replacement.setAttribute("href", href);
  el.parentNode?.replaceChild(replacement, el);
  return replacement;
}
function sanitizeChildren(parent) {
  for (const node of Array.from(parent.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) continue;
    if (node.nodeType !== Node.ELEMENT_NODE) {
      parent.removeChild(node);
      continue;
    }
    let el = node;
    if (DROPPED_TAGS.has(el.tagName)) {
      parent.removeChild(el);
      continue;
    }
    sanitizeChildren(el);
    const target = TAG_ALIASES[el.tagName] ?? el.tagName;
    if (!ALLOWED_TAGS.has(target)) {
      unwrap(el);
      continue;
    }
    if (target !== el.tagName) el = rename(el, target);
    stripAttributes(el);
  }
}
function pruneEmptyNodes(root) {
  for (const el of Array.from(root.querySelectorAll("strong, em, u, s, a"))) {
    if (!el.textContent?.trim() && !el.querySelector("br")) el.remove();
  }
}
function textOf(node) {
  return (node.textContent || "").replace(/\u00a0/g, " ").trim();
}
function isHtmlEmpty$1(html) {
  if (!html?.trim()) return true;
  const probe = document.createElement("div");
  probe.innerHTML = html;
  return !textOf(probe);
}
function sanitizeHtml(html) {
  if (!html?.trim()) return "";
  const root = document.createElement("div");
  root.innerHTML = html;
  sanitizeChildren(root);
  pruneEmptyNodes(root);
  if (!textOf(root)) return "";
  return root.innerHTML.trim();
}

const IDLE_STATE = {
  bold: false,
  italic: false,
  underline: false,
  bulletList: false,
  numberList: false,
  link: false,
  align: "left",
  block: "p"
};
const BLOCKS = ["p", "h1", "h2", "h3", "blockquote"];
const ALIGN_COMMANDS = {
  left: "justifyLeft",
  center: "justifyCenter",
  right: "justifyRight",
  justify: "justifyFull"
};
function exec(command, value) {
  try {
    document.execCommand(command, false, value);
  } catch {
  }
}
function queryState(command) {
  try {
    return document.queryCommandState(command);
  } catch {
    return false;
  }
}
function currentBlock() {
  try {
    const raw = (document.queryCommandValue("formatBlock") || "").toLowerCase();
    if (raw === "div" || !raw) return "p";
    return BLOCKS.includes(raw) ? raw : "p";
  } catch {
    return "p";
  }
}
function currentAlign() {
  if (queryState("justifyCenter")) return "center";
  if (queryState("justifyRight")) return "right";
  if (queryState("justifyFull")) return "justify";
  return "left";
}
function closestLink(root) {
  const node = document.getSelection()?.anchorNode;
  if (!node || !root.contains(node)) return null;
  const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return el?.closest("a") ?? null;
}
function sameState(a, b) {
  return a.bold === b.bold && a.italic === b.italic && a.underline === b.underline && a.bulletList === b.bulletList && a.numberList === b.numberList && a.link === b.link && a.align === b.align && a.block === b.block;
}
const RichText_2View = ({
  value,
  placeholder = "Enter text...",
  readOnly = false,
  minHeight = 180,
  interactive = true,
  className,
  style,
  onContentChange,
  onFocus,
  onBlur
}) => {
  const rootRef = __mf_25(null);
  const editorRef = __mf_25(null);
  const appliedRef = __mf_25("");
  const focusedRef = __mf_25(false);
  const savedRangeRef = __mf_25(null);
  const [empty, setEmpty] = __mf_26(() => isHtmlEmpty$1(value));
  const [focused, setFocused] = __mf_26(false);
  const [state, setState] = __mf_26(IDLE_STATE);
  const editable = interactive && !readOnly;
  const refreshState = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el || !editable) return;
    const next = {
      bold: queryState("bold"),
      italic: queryState("italic"),
      underline: queryState("underline"),
      bulletList: queryState("insertUnorderedList"),
      numberList: queryState("insertOrderedList"),
      link: !!closestLink(el),
      align: currentAlign(),
      block: currentBlock()
    };
    setState((prev) => sameState(prev, next) ? prev : next);
  }, [editable]);
  const applyValue = __mf_17$1((html) => {
    const el = editorRef.current;
    if (!el) return;
    if (focusedRef.current) return;
    if (html !== appliedRef.current || el.innerHTML !== html) {
      el.innerHTML = html;
      appliedRef.current = html;
    }
    setEmpty(isHtmlEmpty$1(html));
  }, []);
  __mf_20(() => {
    applyValue(value || "");
  }, [value, applyValue]);
  __mf_20(() => {
    if (!editable) return;
    exec("defaultParagraphSeparator", "p");
    exec("styleWithCSS", "false");
  }, [editable]);
  __mf_20(() => {
    if (!editable) return;
    const onSelectionChange = () => {
      const el = editorRef.current;
      const selection = document.getSelection();
      if (!el || !selection?.rangeCount) return;
      const range = selection.getRangeAt(0);
      if (!el.contains(range.commonAncestorContainer)) return;
      savedRangeRef.current = range.cloneRange();
      refreshState();
    };
    document.addEventListener("selectionchange", onSelectionChange);
    return () => document.removeEventListener("selectionchange", onSelectionChange);
  }, [editable, refreshState]);
  const emitChange = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el || !editable) return;
    const html = el.innerHTML;
    appliedRef.current = html;
    setEmpty(isHtmlEmpty$1(html));
    onContentChange?.(html);
  }, [editable, onContentChange]);
  const focusEditor = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el) return;
    if (!el.contains(document.activeElement)) el.focus();
    const range = savedRangeRef.current;
    const selection = document.getSelection();
    if (range && selection && el.contains(range.commonAncestorContainer)) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, []);
  const runCommand = __mf_17$1(
    (run) => {
      if (!editable) return;
      focusEditor();
      run();
      emitChange();
      refreshState();
    },
    [editable, emitChange, focusEditor, refreshState]
  );
  const handleInput = __mf_17$1(() => {
    emitChange();
    refreshState();
  }, [emitChange, refreshState]);
  const handleFocusIn = __mf_17$1(() => {
    if (!editable || focusedRef.current) return;
    focusedRef.current = true;
    setFocused(true);
    refreshState();
    onFocus?.();
  }, [editable, onFocus, refreshState]);
  const handleFocusOut = __mf_17$1(
    (event) => {
      if (!editable || !focusedRef.current) return;
      const next = event.relatedTarget;
      if (next && rootRef.current?.contains(next)) return;
      focusedRef.current = false;
      setFocused(false);
      setState(IDLE_STATE);
      const el = editorRef.current;
      if (!el) return;
      const html = sanitizeHtml(el.innerHTML);
      if (el.innerHTML !== html) el.innerHTML = html;
      appliedRef.current = html;
      setEmpty(isHtmlEmpty$1(html));
      onBlur?.(html);
    },
    [editable, onBlur]
  );
  const toggleLink = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el) return;
    runCommand(() => {
      const existing = closestLink(el);
      const url = window.prompt("Link URL", existing?.getAttribute("href") || "https://");
      if (url === null) return;
      const href = sanitizeUrl(url);
      if (!href) {
        exec("unlink");
        return;
      }
      const selection = document.getSelection();
      if (selection?.isCollapsed && !existing) {
        exec("insertHTML", `<a href="${escapeHtml(href)}">${escapeHtml(href)}</a>`);
      } else {
        exec("createLink", href);
      }
    });
  }, [runCommand]);
  const keepSelection = (event) => {
    event.preventDefault();
  };
  const toolbarDisabled = !editable;
  const renderToggle = (label, icon, on, onActivate) => /* @__PURE__ */ __mf_1$1(
    "button",
    {
      type: "button",
      className: cn(styles$1.btn, on && styles$1.btnActive),
      title: label,
      "aria-label": label,
      "aria-pressed": on,
      disabled: toolbarDisabled,
      onMouseDown: keepSelection,
      onClick: onActivate,
      children: icon
    }
  );
  return (
    // biome-ignore lint/a11y/useSemanticElements: a fieldset would not describe an editor shell
    /* @__PURE__ */ __mf_2(
      "div",
      {
        ref: rootRef,
        className: cn(
          styles$1.root,
          focused && styles$1.rootFocused,
          readOnly && styles$1.rootReadOnly,
          className
        ),
        style: { ...style, minHeight },
        role: "group",
        "aria-label": "Rich text editor",
        onFocus: handleFocusIn,
        onBlur: handleFocusOut,
        children: [
          !readOnly && /* @__PURE__ */ __mf_2("div", { className: styles$1.toolbar, role: "toolbar", "aria-label": "Text formatting", children: [
            /* @__PURE__ */ __mf_2("div", { className: styles$1.group, children: [
              renderToggle(
                "Bold",
                /* @__PURE__ */ __mf_1$1(MdFormatBold, { size: 17 }),
                state.bold,
                () => runCommand(() => exec("bold"))
              ),
              renderToggle(
                "Italic",
                /* @__PURE__ */ __mf_1$1(MdFormatItalic, { size: 17 }),
                state.italic,
                () => runCommand(() => exec("italic"))
              ),
              renderToggle(
                "Underline",
                /* @__PURE__ */ __mf_1$1(MdFormatUnderlined, { size: 17 }),
                state.underline,
                () => runCommand(() => exec("underline"))
              )
            ] }),
            /* @__PURE__ */ __mf_1$1("span", { className: styles$1.divider }),
            /* @__PURE__ */ __mf_2(
              "select",
              {
                className: styles$1.select,
                "aria-label": "Paragraph style",
                disabled: toolbarDisabled,
                value: state.block,
                onChange: (event) => {
                  const block = event.target.value;
                  runCommand(() => exec("formatBlock", block));
                },
                children: [
                  /* @__PURE__ */ __mf_1$1("option", { value: "p", children: "Paragraph" }),
                  /* @__PURE__ */ __mf_1$1("option", { value: "h1", children: "Heading 1" }),
                  /* @__PURE__ */ __mf_1$1("option", { value: "h2", children: "Heading 2" }),
                  /* @__PURE__ */ __mf_1$1("option", { value: "h3", children: "Heading 3" }),
                  /* @__PURE__ */ __mf_1$1("option", { value: "blockquote", children: "Quote" })
                ]
              }
            ),
            /* @__PURE__ */ __mf_1$1("span", { className: styles$1.divider }),
            /* @__PURE__ */ __mf_2("div", { className: styles$1.group, children: [
              renderToggle(
                "Bulleted list",
                /* @__PURE__ */ __mf_1$1(MdFormatListBulleted, { size: 17 }),
                state.bulletList,
                () => runCommand(() => exec("insertUnorderedList"))
              ),
              renderToggle(
                "Numbered list",
                /* @__PURE__ */ __mf_1$1(MdFormatListNumbered, { size: 17 }),
                state.numberList,
                () => runCommand(() => exec("insertOrderedList"))
              )
            ] }),
            /* @__PURE__ */ __mf_1$1("span", { className: styles$1.divider }),
            /* @__PURE__ */ __mf_2("div", { className: styles$1.group, children: [
              renderToggle("Insert link", /* @__PURE__ */ __mf_1$1(MdLink, { size: 17 }), state.link, toggleLink),
              renderToggle(
                "Remove link",
                /* @__PURE__ */ __mf_1$1(MdLinkOff, { size: 17 }),
                false,
                () => runCommand(() => exec("unlink"))
              )
            ] }),
            /* @__PURE__ */ __mf_1$1("span", { className: styles$1.divider }),
            /* @__PURE__ */ __mf_2("div", { className: styles$1.group, children: [
              renderToggle(
                "Align left",
                /* @__PURE__ */ __mf_1$1(MdFormatAlignLeft, { size: 17 }),
                state.align === "left",
                () => runCommand(() => exec(ALIGN_COMMANDS.left))
              ),
              renderToggle(
                "Align center",
                /* @__PURE__ */ __mf_1$1(MdFormatAlignCenter, { size: 17 }),
                state.align === "center",
                () => runCommand(() => exec(ALIGN_COMMANDS.center))
              ),
              renderToggle(
                "Align right",
                /* @__PURE__ */ __mf_1$1(MdFormatAlignRight, { size: 17 }),
                state.align === "right",
                () => runCommand(() => exec(ALIGN_COMMANDS.right))
              ),
              renderToggle(
                "Justify",
                /* @__PURE__ */ __mf_1$1(MdFormatAlignJustify, { size: 17 }),
                state.align === "justify",
                () => runCommand(() => exec(ALIGN_COMMANDS.justify))
              )
            ] })
          ] }),
          /* @__PURE__ */ __mf_1$1("div", { className: styles$1.surface, children: /* @__PURE__ */ __mf_1$1(
            "div",
            {
              ref: editorRef,
              className: cn(
                styles$1.editor,
                empty && styles$1.editorEmpty,
                readOnly && styles$1.editorReadOnly
              ),
              contentEditable: editable,
              suppressContentEditableWarning: true,
              role: "textbox",
              tabIndex: editable ? 0 : -1,
              "aria-multiline": "true",
              "aria-readonly": readOnly || void 0,
              "aria-label": placeholder,
              "data-placeholder": placeholder,
              onInput: handleInput,
              onKeyUp: refreshState,
              onMouseUp: refreshState
            }
          ) })
        ]
      }
    )
  );
};

const PREVIEW_HTML = "<h2>Rich Text 2</h2><p>Hello <strong>world</strong> — edit <em>formatted</em> HTML and store it as a plain string.</p><ul><li>Headings, lists and links</li><li>Text alignment</li></ul>";
const RichText_2Build = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config$1.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    RichText_2View,
    {
      value: PREVIEW_HTML,
      placeholder: merged.placeholder ?? "Enter text...",
      readOnly: merged.readOnly ?? false,
      minHeight: merged.minHeight ?? 180,
      interactive: false
    }
  ) });
};

const CHANGE_DEBOUNCE_MS$1 = 300;
const RichText_2Render = (props) => {
  const { style, className, classNames = [] } = props;
  const merged = { ...config$1.defaultProps, ...props };
  const { connect, emit } = __mf_180({ autoBindEvents: false });
  const {
    sources: { datasource: ds }
  } = __mf_182();
  const [value, setValue] = __mf_26("");
  const valueRef = __mf_25("");
  const writingRef = __mf_25(false);
  const timerRef = __mf_25(null);
  const clearTimer = __mf_17$1(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  __mf_20(() => clearTimer, [clearTimer]);
  __mf_20(() => {
    if (!ds) return;
    let cancelled = false;
    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue();
      if (cancelled) return;
      const html = sanitizeHtml(typeof raw === "string" ? raw : "");
      if (html === valueRef.current) return;
      valueRef.current = html;
      setValue(html);
    };
    void listener();
    ds.addListener("changed", listener);
    return () => {
      cancelled = true;
      ds.removeListener("changed", listener);
    };
  }, [ds]);
  const persist = __mf_17$1(
    async (html) => {
      const cleaned = sanitizeHtml(html);
      if (cleaned === valueRef.current) return false;
      valueRef.current = cleaned;
      setValue(cleaned);
      if (ds) {
        writingRef.current = true;
        try {
          await ds.setValue(null, cleaned);
        } finally {
          queueMicrotask(() => {
            writingRef.current = false;
          });
        }
      }
      return true;
    },
    [ds]
  );
  const handleContentChange = __mf_17$1(
    (html) => {
      clearTimer();
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void persist(html).then((changed) => {
          if (changed) emit("onChange", { value: valueRef.current });
        });
      }, CHANGE_DEBOUNCE_MS$1);
    },
    [clearTimer, emit, persist]
  );
  const handleFocus = __mf_17$1(() => {
    emit("onFocus", {});
  }, [emit]);
  const handleBlur = __mf_17$1(
    (html) => {
      clearTimer();
      void persist(html).then((changed) => {
        if (changed) emit("onChange", { value: valueRef.current });
        emit("onBlur", { value: valueRef.current });
      });
    },
    [clearTimer, emit, persist]
  );
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(className, classNames), style, children: /* @__PURE__ */ __mf_1$1(
    RichText_2View,
    {
      value,
      placeholder: merged.placeholder ?? "Enter text...",
      readOnly: merged.readOnly ?? false,
      minHeight: merged.minHeight ?? 180,
      onContentChange: handleContentChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    }
  ) });
};

const RichText_2 = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(RichText_2Build, { ...props }) : /* @__PURE__ */ __mf_1$1(RichText_2Render, { ...props });
};
RichText_2.craft = config$1.craft;
RichText_2.info = config$1.info;
RichText_2.defaultProps = config$1.defaultProps;

const dataSettings = [
  {
    key: "datasource",
    label: "Data Source",
    type: __mf_17.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: __mf_17.TEXT_FIELD,
    validateOnEnter: true
  }
];
const editorSettings = [
  {
    key: "placeholder",
    label: "Placeholder",
    type: __mf_17.TEXT_FIELD,
    defaultValue: "Enter text..."
  },
  {
    key: "readOnly",
    label: "Read only",
    type: __mf_17.CHECKBOX,
    defaultValue: false
  },
  {
    key: "minHeight",
    label: "Min height (px)",
    type: __mf_17.NUMBER_FIELD,
    defaultValue: 160
  }
];
const commonSettings = [...dataSettings, ...editorSettings];
const Settings = [
  {
    key: "data",
    label: "Data",
    type: __mf_17.GROUP,
    components: dataSettings
  },
  {
    key: "editor",
    label: "Editor",
    type: __mf_17.GROUP,
    components: editorSettings
  },
  ...__mf_121(__mf_10).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];
const BasicSettings = [
  ...commonSettings,
  ...__mf_121(__mf_1).filter(
    "style.overflow",
    "display",
    "style.boxShadow",
    "style.textShadow",
    "style.textAlign",
    "style.textDecorationLine",
    "style.fontStyle",
    "style.textTransform"
  )
];

const config = {
  craft: {
    displayName: "Rich Text Editor",
    kind: __mf_16.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: __mf_56(Settings, BasicSettings)
    },
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: { keys: ["datasource"], all: false }
  },
  info: {
    displayName: "Rich Text Editor",
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      { label: "On Change", value: "onChange" },
      { label: "On Focus", value: "onFocus" },
      { label: "On Blur", value: "onBlur" }
    ],
    datasources: {
      accept: ["string"]
    }
  },
  defaultProps: {
    placeholder: "Enter text...",
    readOnly: false,
    minHeight: 160,
    style: {
      width: "100%",
      minHeight: "160px"
    }
  }
};

const root = "_root_1ytlc_1";
const rootReadOnly = "_rootReadOnly_1ytlc_15";
const toolbar = "_toolbar_1ytlc_19";
const group = "_group_1ytlc_29";
const divider = "_divider_1ytlc_35";
const btn = "_btn_1ytlc_42";
const select = "_select_1ytlc_43";
const btnActive = "_btnActive_1ytlc_76";
const surface = "_surface_1ytlc_88";
const editor = "_editor_1ytlc_94";
const editorEmpty = "_editorEmpty_1ytlc_106";
const editorReadOnly = "_editorReadOnly_1ytlc_147";
const styles = {
	root: root,
	rootReadOnly: rootReadOnly,
	toolbar: toolbar,
	group: group,
	divider: divider,
	btn: btn,
	select: select,
	btnActive: btnActive,
	surface: surface,
	editor: editor,
	editorEmpty: editorEmpty,
	editorReadOnly: editorReadOnly
};

function normalizeHtml(html) {
  if (html == null) return "";
  const trimmed = html.trim();
  if (!trimmed) return "";
  const probe = document.createElement("div");
  probe.innerHTML = trimmed;
  const text = (probe.textContent || "").replace(/\u00a0/g, " ").trim();
  if (!text) return "";
  return trimmed;
}
function isHtmlEmpty(html) {
  return normalizeHtml(html) === "";
}
function cleanHtml(html) {
  const normalized = normalizeHtml(html);
  if (!normalized) return "";
  const root = document.createElement("div");
  root.innerHTML = normalized;
  root.querySelectorAll("*").forEach((el) => {
    el.removeAttribute("style");
    el.removeAttribute("class");
    el.removeAttribute("id");
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith("data-")) el.removeAttribute(attr.name);
    });
  });
  root.querySelectorAll("span, font, b, i, u, strong, em").forEach((el) => {
    if (!(el.textContent || "").trim() && !el.querySelector("img, br")) {
      el.remove();
    }
  });
  return normalizeHtml(root.innerHTML);
}

function runCommand(command, value) {
  document.execCommand(command, false, value);
}
const RichTextEditorView = ({
  value,
  placeholder = "Enter text...",
  readOnly = false,
  minHeight = 160,
  interactive = true,
  className,
  style,
  onContentChange,
  onFocus,
  onBlur
}) => {
  const editorRef = __mf_25(null);
  const lastAppliedRef = __mf_25("");
  const focusedRef = __mf_25(false);
  const [empty, setEmpty] = __mf_26(() => isHtmlEmpty(value));
  const [active, setActive] = __mf_26({
    bold: false,
    italic: false,
    underline: false
  });
  const syncActiveFormats = __mf_17$1(() => {
    if (!interactive || readOnly) return;
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline")
    });
  }, [interactive, readOnly]);
  const applyExternalValue = __mf_17$1((html, force = false) => {
    const el = editorRef.current;
    if (!el) return;
    if (!force && focusedRef.current) return;
    const next = html || "";
    if (next === lastAppliedRef.current || el.innerHTML === next) {
      lastAppliedRef.current = next;
      setEmpty(isHtmlEmpty(next));
      return;
    }
    el.innerHTML = next;
    lastAppliedRef.current = next;
    setEmpty(isHtmlEmpty(next));
  }, []);
  __mf_20(() => {
    applyExternalValue(value || "");
  }, [value, applyExternalValue]);
  const emitChange = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el || !interactive || readOnly) return;
    const html = cleanHtml(el.innerHTML);
    lastAppliedRef.current = html;
    setEmpty(isHtmlEmpty(html));
    if (!html && el.innerHTML !== "") {
      el.innerHTML = "";
    }
    onContentChange?.(html);
  }, [interactive, onContentChange, readOnly]);
  const handleInput = __mf_17$1(() => {
    const el = editorRef.current;
    if (!el) return;
    setEmpty(isHtmlEmpty(el.innerHTML));
    emitChange();
    syncActiveFormats();
  }, [emitChange, syncActiveFormats]);
  const preserveFocus = (event) => {
    event.preventDefault();
  };
  const withEditorFocus = (fn) => {
    if (!interactive || readOnly) return;
    editorRef.current?.focus();
    fn();
    emitChange();
    syncActiveFormats();
  };
  const setHeading = (tag) => {
    withEditorFocus(() => {
      if (tag === "p") {
        runCommand("formatBlock", "p");
      } else {
        runCommand("formatBlock", tag);
      }
    });
  };
  const setAlign = (align) => {
    const map = {
      left: "justifyLeft",
      center: "justifyCenter",
      right: "justifyRight",
      justify: "justifyFull"
    };
    withEditorFocus(() => runCommand(map[align]));
  };
  const insertLink = () => {
    withEditorFocus(() => {
      const existing = document.queryCommandValue("createLink");
      const url = window.prompt("Link URL", existing || "https://");
      if (url == null) return;
      const trimmed = url.trim();
      if (!trimmed) {
        runCommand("unlink");
        return;
      }
      runCommand("createLink", trimmed);
    });
  };
  const editable = interactive && !readOnly;
  return /* @__PURE__ */ __mf_2(
    "div",
    {
      className: cn(styles.root, readOnly && styles.rootReadOnly, className),
      style: { ...style, minHeight },
      children: [
        editable && /* @__PURE__ */ __mf_2("div", { className: styles.toolbar, role: "toolbar", "aria-label": "Formatting", children: [
          /* @__PURE__ */ __mf_2("div", { className: styles.group, children: [
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: cn(styles.btn, active.bold && styles.btnActive),
                title: "Bold",
                "aria-label": "Bold",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("bold")),
                children: /* @__PURE__ */ __mf_1$1(MdFormatBold, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: cn(styles.btn, active.italic && styles.btnActive),
                title: "Italic",
                "aria-label": "Italic",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("italic")),
                children: /* @__PURE__ */ __mf_1$1(MdFormatItalic, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: cn(styles.btn, active.underline && styles.btnActive),
                title: "Underline",
                "aria-label": "Underline",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("underline")),
                children: /* @__PURE__ */ __mf_1$1(MdFormatUnderlined, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ __mf_1$1("span", { className: styles.divider }),
          /* @__PURE__ */ __mf_1$1("div", { className: styles.group, children: /* @__PURE__ */ __mf_2(
            "select",
            {
              className: styles.select,
              "aria-label": "Heading",
              defaultValue: "",
              onMouseDown: preserveFocus,
              onChange: (e) => {
                const v = e.target.value;
                if (v) setHeading(v);
                e.target.value = "";
              },
              children: [
                /* @__PURE__ */ __mf_1$1("option", { value: "", disabled: true, children: "Heading" }),
                /* @__PURE__ */ __mf_1$1("option", { value: "p", children: "Paragraph" }),
                /* @__PURE__ */ __mf_1$1("option", { value: "h1", children: "Heading 1" }),
                /* @__PURE__ */ __mf_1$1("option", { value: "h2", children: "Heading 2" }),
                /* @__PURE__ */ __mf_1$1("option", { value: "h3", children: "Heading 3" })
              ]
            }
          ) }),
          /* @__PURE__ */ __mf_1$1("span", { className: styles.divider }),
          /* @__PURE__ */ __mf_2("div", { className: styles.group, children: [
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Bulleted list",
                "aria-label": "Bulleted list",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("insertUnorderedList")),
                children: /* @__PURE__ */ __mf_1$1(MdFormatListBulleted, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Numbered list",
                "aria-label": "Numbered list",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("insertOrderedList")),
                children: /* @__PURE__ */ __mf_1$1(MdFormatListNumbered, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ __mf_1$1("span", { className: styles.divider }),
          /* @__PURE__ */ __mf_2("div", { className: styles.group, children: [
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Insert link",
                "aria-label": "Insert link",
                onMouseDown: preserveFocus,
                onClick: insertLink,
                children: /* @__PURE__ */ __mf_1$1(MdLink, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Remove link",
                "aria-label": "Remove link",
                onMouseDown: preserveFocus,
                onClick: () => withEditorFocus(() => runCommand("unlink")),
                children: /* @__PURE__ */ __mf_1$1(MdLinkOff, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ __mf_1$1("span", { className: styles.divider }),
          /* @__PURE__ */ __mf_2("div", { className: styles.group, children: [
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Align left",
                "aria-label": "Align left",
                onMouseDown: preserveFocus,
                onClick: () => setAlign("left"),
                children: /* @__PURE__ */ __mf_1$1(MdFormatAlignLeft, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Align center",
                "aria-label": "Align center",
                onMouseDown: preserveFocus,
                onClick: () => setAlign("center"),
                children: /* @__PURE__ */ __mf_1$1(MdFormatAlignCenter, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Align right",
                "aria-label": "Align right",
                onMouseDown: preserveFocus,
                onClick: () => setAlign("right"),
                children: /* @__PURE__ */ __mf_1$1(MdFormatAlignRight, { size: 16 })
              }
            ),
            /* @__PURE__ */ __mf_1$1(
              "button",
              {
                type: "button",
                className: styles.btn,
                title: "Justify",
                "aria-label": "Justify",
                onMouseDown: preserveFocus,
                onClick: () => setAlign("justify"),
                children: /* @__PURE__ */ __mf_1$1(MdFormatAlignJustify, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ __mf_1$1("div", { className: styles.surface, style: { minHeight: editable ? minHeight - 42 : minHeight }, children: /* @__PURE__ */ __mf_1$1(
          "div",
          {
            ref: editorRef,
            className: cn(
              styles.editor,
              empty && styles.editorEmpty,
              readOnly && styles.editorReadOnly
            ),
            style: { minHeight: editable ? Math.max(80, minHeight - 42) : minHeight },
            contentEditable: editable,
            suppressContentEditableWarning: true,
            "aria-readonly": readOnly || void 0,
            "data-placeholder": placeholder,
            onInput: handleInput,
            onFocus: () => {
              focusedRef.current = true;
              syncActiveFormats();
              onFocus?.();
            },
            onBlur: () => {
              focusedRef.current = false;
              const html = cleanHtml(editorRef.current?.innerHTML || "");
              lastAppliedRef.current = html;
              if (editorRef.current && editorRef.current.innerHTML !== html) {
                editorRef.current.innerHTML = html;
              }
              onBlur?.(html);
            },
            onKeyUp: syncActiveFormats,
            onMouseUp: syncActiveFormats
          }
        ) })
      ]
    }
  );
};

const SAMPLE_HTML = "<p>Hello <strong>world</strong></p><p>Edit formatted text with headings, lists, and links.</p>";
const RichTextEditorBuild = (props) => {
  const {
    connectors: { connect }
  } = __mf_161();
  const merged = { ...config.defaultProps, ...props };
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    RichTextEditorView,
    {
      value: SAMPLE_HTML,
      placeholder: merged.placeholder ?? "Enter text...",
      readOnly: merged.readOnly ?? false,
      minHeight: merged.minHeight ?? 160,
      interactive: false
    }
  ) });
};

const CHANGE_DEBOUNCE_MS = 300;
const RichTextEditorRender = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const { connect, emit } = __mf_180({ autoBindEvents: false });
  const {
    sources: { datasource: ds }
  } = __mf_182();
  const [value, setValue] = __mf_26("");
  const valueRef = __mf_25("");
  const writingRef = __mf_25(false);
  const persistingRef = __mf_25(false);
  const pendingRef = __mf_25(null);
  const debounceRef = __mf_25(null);
  const applyValue = __mf_17$1((next) => {
    const html = normalizeHtml(next);
    if (html === valueRef.current) return;
    valueRef.current = html;
    setValue(html);
  }, []);
  __mf_20(() => {
    if (!ds) {
      applyValue("");
      return;
    }
    let cancelled = false;
    const listener = async () => {
      if (writingRef.current) return;
      const raw = await ds.getValue();
      if (cancelled) return;
      applyValue(typeof raw === "string" ? raw : "");
    };
    void listener();
    ds.addListener("changed", listener);
    return () => {
      cancelled = true;
      ds.removeListener("changed", listener);
    };
  }, [ds, applyValue]);
  __mf_20(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  const persist = __mf_17$1(
    async (html, emitChange) => {
      const prevPending = pendingRef.current;
      pendingRef.current = {
        html,
        emitChange: Boolean(prevPending?.emitChange || emitChange)
      };
      if (persistingRef.current) return;
      persistingRef.current = true;
      try {
        while (pendingRef.current) {
          const { html: nextHtml, emitChange: shouldEmit } = pendingRef.current;
          pendingRef.current = null;
          const cleaned = cleanHtml(nextHtml);
          if (cleaned === valueRef.current) continue;
          valueRef.current = cleaned;
          setValue(cleaned);
          if (ds) {
            writingRef.current = true;
            try {
              await ds.setValue(null, cleaned);
            } finally {
              writingRef.current = false;
            }
          }
          if (shouldEmit) {
            emit("onChange", { value: cleaned });
          }
        }
      } finally {
        persistingRef.current = false;
        if (pendingRef.current) {
          const leftover = pendingRef.current;
          pendingRef.current = null;
          void persist(leftover.html, leftover.emitChange);
        }
      }
    },
    [ds, emit]
  );
  const handleContentChange = __mf_17$1(
    (html) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        void persist(html, true);
      }, CHANGE_DEBOUNCE_MS);
    },
    [persist]
  );
  const handleFocus = __mf_17$1(() => {
    emit("onFocus", {});
  }, [emit]);
  const handleBlur = __mf_17$1(
    (html) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      void persist(html, true).then(() => {
        emit("onBlur", { value: cleanHtml(html) });
      });
    },
    [emit, persist]
  );
  return /* @__PURE__ */ __mf_1$1("div", { ref: connect, className: cn(props.className, props.classNames), style: props.style, children: /* @__PURE__ */ __mf_1$1(
    RichTextEditorView,
    {
      value,
      placeholder: merged.placeholder ?? "Enter text...",
      readOnly: merged.readOnly ?? false,
      minHeight: merged.minHeight ?? 160,
      interactive: true,
      onContentChange: handleContentChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    }
  ) });
};

const RichTextEditor = (props) => {
  const { enabled } = __mf_160((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ __mf_1$1(RichTextEditorBuild, { ...props }) : /* @__PURE__ */ __mf_1$1(RichTextEditorRender, { ...props });
};
RichTextEditor.craft = config.craft;
RichTextEditor.info = config.info;
RichTextEditor.defaultProps = config.defaultProps;

const components = {
  ContactCard,
  InvoiceLineGrid,
  KanbanBoard,
  ProgressGauge,
  RichTextEditor,
  RichText_2
};

export { components as default };
