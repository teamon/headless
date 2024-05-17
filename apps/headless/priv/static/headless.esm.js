var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// vendor/alpine.js
var require_alpine = __commonJS({
  "vendor/alpine.js"(exports, module) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var require_shared_cjs = __commonJS2({
      "node_modules/@vue/shared/dist/shared.cjs.js"(exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", { value: true });
        function makeMap(str, expectsLowerCase) {
          const map = /* @__PURE__ */ Object.create(null);
          const list = str.split(",");
          for (let i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
        }
        var PatchFlagNames = {
          [
            1
            /* TEXT */
          ]: `TEXT`,
          [
            2
            /* CLASS */
          ]: `CLASS`,
          [
            4
            /* STYLE */
          ]: `STYLE`,
          [
            8
            /* PROPS */
          ]: `PROPS`,
          [
            16
            /* FULL_PROPS */
          ]: `FULL_PROPS`,
          [
            32
            /* HYDRATE_EVENTS */
          ]: `HYDRATE_EVENTS`,
          [
            64
            /* STABLE_FRAGMENT */
          ]: `STABLE_FRAGMENT`,
          [
            128
            /* KEYED_FRAGMENT */
          ]: `KEYED_FRAGMENT`,
          [
            256
            /* UNKEYED_FRAGMENT */
          ]: `UNKEYED_FRAGMENT`,
          [
            512
            /* NEED_PATCH */
          ]: `NEED_PATCH`,
          [
            1024
            /* DYNAMIC_SLOTS */
          ]: `DYNAMIC_SLOTS`,
          [
            2048
            /* DEV_ROOT_FRAGMENT */
          ]: `DEV_ROOT_FRAGMENT`,
          [
            -1
            /* HOISTED */
          ]: `HOISTED`,
          [
            -2
            /* BAIL */
          ]: `BAIL`
        };
        var slotFlagsText = {
          [
            1
            /* STABLE */
          ]: "STABLE",
          [
            2
            /* DYNAMIC */
          ]: "DYNAMIC",
          [
            3
            /* FORWARDED */
          ]: "FORWARDED"
        };
        var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
        var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
        var range = 2;
        function generateCodeFrame(source, start2 = 0, end = source.length) {
          let lines = source.split(/(\r?\n)/);
          const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
          lines = lines.filter((_, idx) => idx % 2 === 0);
          let count = 0;
          const res = [];
          for (let i = 0; i < lines.length; i++) {
            count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
            if (count >= start2) {
              for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                  continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                  const pad = start2 - (count - (lineLength + newLineSeqLength));
                  const length = Math.max(1, end > count ? lineLength - pad : end - start2);
                  res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                  if (end > count) {
                    const length = Math.max(Math.min(end - count, lineLength), 1);
                    res.push(`   |  ` + "^".repeat(length));
                  }
                  count += lineLength + newLineSeqLength;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
        var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
        var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
        var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
        var attrValidationCache = {};
        function isSSRSafeAttrName(name) {
          if (attrValidationCache.hasOwnProperty(name)) {
            return attrValidationCache[name];
          }
          const isUnsafe = unsafeAttrCharRE.test(name);
          if (isUnsafe) {
            console.error(`unsafe attribute name: ${name}`);
          }
          return attrValidationCache[name] = !isUnsafe;
        }
        var propsToAttrMap = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv"
        };
        var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
        var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
        function normalizeStyle(value) {
          if (isArray(value)) {
            const res = {};
            for (let i = 0; i < value.length; i++) {
              const item = value[i];
              const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
              if (normalized) {
                for (const key in normalized) {
                  res[key] = normalized[key];
                }
              }
            }
            return res;
          } else if (isObject(value)) {
            return value;
          }
        }
        var listDelimiterRE = /;(?![^(]*\))/g;
        var propertyDelimiterRE = /:(.+)/;
        function parseStringStyle(cssText) {
          const ret = {};
          cssText.split(listDelimiterRE).forEach((item) => {
            if (item) {
              const tmp = item.split(propertyDelimiterRE);
              tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return ret;
        }
        function stringifyStyle(styles) {
          let ret = "";
          if (!styles) {
            return ret;
          }
          for (const key in styles) {
            const value = styles[key];
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
              ret += `${normalizedKey}:${value};`;
            }
          }
          return ret;
        }
        function normalizeClass(value) {
          let res = "";
          if (isString(value)) {
            res = value;
          } else if (isArray(value)) {
            for (let i = 0; i < value.length; i++) {
              const normalized = normalizeClass(value[i]);
              if (normalized) {
                res += normalized + " ";
              }
            }
          } else if (isObject(value)) {
            for (const name in value) {
              if (value[name]) {
                res += name + " ";
              }
            }
          }
          return res.trim();
        }
        var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
        var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
        var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
        var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
        var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
        var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
        var escapeRE = /["'&<>]/;
        function escapeHtml(string) {
          const str = "" + string;
          const match = escapeRE.exec(str);
          if (!match) {
            return str;
          }
          let html = "";
          let escaped;
          let index;
          let lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escaped = "&quot;";
                break;
              case 38:
                escaped = "&amp;";
                break;
              case 39:
                escaped = "&#39;";
                break;
              case 60:
                escaped = "&lt;";
                break;
              case 62:
                escaped = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escaped;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
        function escapeHtmlComment(src) {
          return src.replace(commentStripRE, "");
        }
        function looseCompareArrays(a, b) {
          if (a.length !== b.length)
            return false;
          let equal = true;
          for (let i = 0; equal && i < a.length; i++) {
            equal = looseEqual(a[i], b[i]);
          }
          return equal;
        }
        function looseEqual(a, b) {
          if (a === b)
            return true;
          let aValidType = isDate(a);
          let bValidType = isDate(b);
          if (aValidType || bValidType) {
            return aValidType && bValidType ? a.getTime() === b.getTime() : false;
          }
          aValidType = isArray(a);
          bValidType = isArray(b);
          if (aValidType || bValidType) {
            return aValidType && bValidType ? looseCompareArrays(a, b) : false;
          }
          aValidType = isObject(a);
          bValidType = isObject(b);
          if (aValidType || bValidType) {
            if (!aValidType || !bValidType) {
              return false;
            }
            const aKeysCount = Object.keys(a).length;
            const bKeysCount = Object.keys(b).length;
            if (aKeysCount !== bKeysCount) {
              return false;
            }
            for (const key in a) {
              const aHasKey = a.hasOwnProperty(key);
              const bHasKey = b.hasOwnProperty(key);
              if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
                return false;
              }
            }
          }
          return String(a) === String(b);
        }
        function looseIndexOf(arr, val) {
          return arr.findIndex((item) => looseEqual(item, val));
        }
        var toDisplayString = (val) => {
          return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
        };
        var replacer = (_key, val) => {
          if (isMap(val)) {
            return {
              [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
                entries[`${key} =>`] = val2;
                return entries;
              }, {})
            };
          } else if (isSet(val)) {
            return {
              [`Set(${val.size})`]: [...val.values()]
            };
          } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
            return String(val);
          }
          return val;
        };
        var babelParserDefaultPlugins = [
          "bigInt",
          "optionalChaining",
          "nullishCoalescingOperator"
        ];
        var EMPTY_OBJ = Object.freeze({});
        var EMPTY_ARR = Object.freeze([]);
        var NOOP = () => {
        };
        var NO = () => false;
        var onRE = /^on[^a-z]/;
        var isOn = (key) => onRE.test(key);
        var isModelListener = (key) => key.startsWith("onUpdate:");
        var extend = Object.assign;
        var remove = (arr, el) => {
          const i = arr.indexOf(el);
          if (i > -1) {
            arr.splice(i, 1);
          }
        };
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasOwn = (val, key) => hasOwnProperty.call(val, key);
        var isArray = Array.isArray;
        var isMap = (val) => toTypeString(val) === "[object Map]";
        var isSet = (val) => toTypeString(val) === "[object Set]";
        var isDate = (val) => val instanceof Date;
        var isFunction = (val) => typeof val === "function";
        var isString = (val) => typeof val === "string";
        var isSymbol = (val) => typeof val === "symbol";
        var isObject = (val) => val !== null && typeof val === "object";
        var isPromise = (val) => {
          return isObject(val) && isFunction(val.then) && isFunction(val.catch);
        };
        var objectToString = Object.prototype.toString;
        var toTypeString = (value) => objectToString.call(value);
        var toRawType = (value) => {
          return toTypeString(value).slice(8, -1);
        };
        var isPlainObject = (val) => toTypeString(val) === "[object Object]";
        var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
        var isReservedProp = /* @__PURE__ */ makeMap(
          // the leading comma is intentional so empty string "" is also included
          ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
        );
        var cacheStringFunction = (fn) => {
          const cache = /* @__PURE__ */ Object.create(null);
          return (str) => {
            const hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        };
        var camelizeRE = /-(\w)/g;
        var camelize = cacheStringFunction((str) => {
          return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
        var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
        var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
        var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
        var invokeArrayFns = (fns, arg) => {
          for (let i = 0; i < fns.length; i++) {
            fns[i](arg);
          }
        };
        var def = (obj, key, value) => {
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: false,
            value
          });
        };
        var toNumber = (val) => {
          const n = parseFloat(val);
          return isNaN(n) ? val : n;
        };
        var _globalThis;
        var getGlobalThis = () => {
          return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
        };
        exports2.EMPTY_ARR = EMPTY_ARR;
        exports2.EMPTY_OBJ = EMPTY_OBJ;
        exports2.NO = NO;
        exports2.NOOP = NOOP;
        exports2.PatchFlagNames = PatchFlagNames;
        exports2.babelParserDefaultPlugins = babelParserDefaultPlugins;
        exports2.camelize = camelize;
        exports2.capitalize = capitalize;
        exports2.def = def;
        exports2.escapeHtml = escapeHtml;
        exports2.escapeHtmlComment = escapeHtmlComment;
        exports2.extend = extend;
        exports2.generateCodeFrame = generateCodeFrame;
        exports2.getGlobalThis = getGlobalThis;
        exports2.hasChanged = hasChanged;
        exports2.hasOwn = hasOwn;
        exports2.hyphenate = hyphenate;
        exports2.invokeArrayFns = invokeArrayFns;
        exports2.isArray = isArray;
        exports2.isBooleanAttr = isBooleanAttr2;
        exports2.isDate = isDate;
        exports2.isFunction = isFunction;
        exports2.isGloballyWhitelisted = isGloballyWhitelisted;
        exports2.isHTMLTag = isHTMLTag;
        exports2.isIntegerKey = isIntegerKey;
        exports2.isKnownAttr = isKnownAttr;
        exports2.isMap = isMap;
        exports2.isModelListener = isModelListener;
        exports2.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
        exports2.isObject = isObject;
        exports2.isOn = isOn;
        exports2.isPlainObject = isPlainObject;
        exports2.isPromise = isPromise;
        exports2.isReservedProp = isReservedProp;
        exports2.isSSRSafeAttrName = isSSRSafeAttrName;
        exports2.isSVGTag = isSVGTag;
        exports2.isSet = isSet;
        exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
        exports2.isString = isString;
        exports2.isSymbol = isSymbol;
        exports2.isVoidTag = isVoidTag;
        exports2.looseEqual = looseEqual;
        exports2.looseIndexOf = looseIndexOf;
        exports2.makeMap = makeMap;
        exports2.normalizeClass = normalizeClass;
        exports2.normalizeStyle = normalizeStyle;
        exports2.objectToString = objectToString;
        exports2.parseStringStyle = parseStringStyle;
        exports2.propsToAttrMap = propsToAttrMap;
        exports2.remove = remove;
        exports2.slotFlagsText = slotFlagsText;
        exports2.stringifyStyle = stringifyStyle;
        exports2.toDisplayString = toDisplayString;
        exports2.toHandlerKey = toHandlerKey;
        exports2.toNumber = toNumber;
        exports2.toRawType = toRawType;
        exports2.toTypeString = toTypeString;
      }
    });
    var require_shared = __commonJS2({
      "node_modules/@vue/shared/index.js"(exports2, module2) {
        "use strict";
        if (false) {
          module2.exports = null;
        } else {
          module2.exports = require_shared_cjs();
        }
      }
    });
    var require_reactivity_cjs = __commonJS2({
      "node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", { value: true });
        var shared = require_shared();
        var targetMap = /* @__PURE__ */ new WeakMap();
        var effectStack = [];
        var activeEffect;
        var ITERATE_KEY = Symbol("iterate");
        var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
        function isEffect(fn) {
          return fn && fn._isEffect === true;
        }
        function effect3(fn, options = shared.EMPTY_OBJ) {
          if (isEffect(fn)) {
            fn = fn.raw;
          }
          const effect4 = createReactiveEffect(fn, options);
          if (!options.lazy) {
            effect4();
          }
          return effect4;
        }
        function stop2(effect4) {
          if (effect4.active) {
            cleanup(effect4);
            if (effect4.options.onStop) {
              effect4.options.onStop();
            }
            effect4.active = false;
          }
        }
        var uid = 0;
        function createReactiveEffect(fn, options) {
          const effect4 = function reactiveEffect() {
            if (!effect4.active) {
              return fn();
            }
            if (!effectStack.includes(effect4)) {
              cleanup(effect4);
              try {
                enableTracking();
                effectStack.push(effect4);
                activeEffect = effect4;
                return fn();
              } finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
              }
            }
          };
          effect4.id = uid++;
          effect4.allowRecurse = !!options.allowRecurse;
          effect4._isEffect = true;
          effect4.active = true;
          effect4.raw = fn;
          effect4.deps = [];
          effect4.options = options;
          return effect4;
        }
        function cleanup(effect4) {
          const { deps } = effect4;
          if (deps.length) {
            for (let i = 0; i < deps.length; i++) {
              deps[i].delete(effect4);
            }
            deps.length = 0;
          }
        }
        var shouldTrack = true;
        var trackStack = [];
        function pauseTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = false;
        }
        function enableTracking() {
          trackStack.push(shouldTrack);
          shouldTrack = true;
        }
        function resetTracking() {
          const last = trackStack.pop();
          shouldTrack = last === void 0 ? true : last;
        }
        function track(target, type, key) {
          if (!shouldTrack || activeEffect === void 0) {
            return;
          }
          let depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
          }
          let dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = /* @__PURE__ */ new Set());
          }
          if (!dep.has(activeEffect)) {
            dep.add(activeEffect);
            activeEffect.deps.push(dep);
            if (activeEffect.options.onTrack) {
              activeEffect.options.onTrack({
                effect: activeEffect,
                target,
                type,
                key
              });
            }
          }
        }
        function trigger(target, type, key, newValue, oldValue, oldTarget) {
          const depsMap = targetMap.get(target);
          if (!depsMap) {
            return;
          }
          const effects = /* @__PURE__ */ new Set();
          const add2 = (effectsToAdd) => {
            if (effectsToAdd) {
              effectsToAdd.forEach((effect4) => {
                if (effect4 !== activeEffect || effect4.allowRecurse) {
                  effects.add(effect4);
                }
              });
            }
          };
          if (type === "clear") {
            depsMap.forEach(add2);
          } else if (key === "length" && shared.isArray(target)) {
            depsMap.forEach((dep, key2) => {
              if (key2 === "length" || key2 >= newValue) {
                add2(dep);
              }
            });
          } else {
            if (key !== void 0) {
              add2(depsMap.get(key));
            }
            switch (type) {
              case "add":
                if (!shared.isArray(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                  if (shared.isMap(target)) {
                    add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                } else if (shared.isIntegerKey(key)) {
                  add2(depsMap.get("length"));
                }
                break;
              case "delete":
                if (!shared.isArray(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                  if (shared.isMap(target)) {
                    add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                  }
                }
                break;
              case "set":
                if (shared.isMap(target)) {
                  add2(depsMap.get(ITERATE_KEY));
                }
                break;
            }
          }
          const run = (effect4) => {
            if (effect4.options.onTrigger) {
              effect4.options.onTrigger({
                effect: effect4,
                target,
                key,
                type,
                newValue,
                oldValue,
                oldTarget
              });
            }
            if (effect4.options.scheduler) {
              effect4.options.scheduler(effect4);
            } else {
              effect4();
            }
          };
          effects.forEach(run);
        }
        var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
        var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
        var get2 = /* @__PURE__ */ createGetter();
        var shallowGet = /* @__PURE__ */ createGetter(false, true);
        var readonlyGet = /* @__PURE__ */ createGetter(true);
        var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
        var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
        function createArrayInstrumentations() {
          const instrumentations = {};
          ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
            instrumentations[key] = function(...args) {
              const arr = toRaw2(this);
              for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get", i + "");
              }
              const res = arr[key](...args);
              if (res === -1 || res === false) {
                return arr[key](...args.map(toRaw2));
              } else {
                return res;
              }
            };
          });
          ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
            instrumentations[key] = function(...args) {
              pauseTracking();
              const res = toRaw2(this)[key].apply(this, args);
              resetTracking();
              return res;
            };
          });
          return instrumentations;
        }
        function createGetter(isReadonly2 = false, shallow = false) {
          return function get3(target, key, receiver) {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
              return target;
            }
            const targetIsArray = shared.isArray(target);
            if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
              return Reflect.get(arrayInstrumentations, key, receiver);
            }
            const res = Reflect.get(target, key, receiver);
            if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
              return res;
            }
            if (!isReadonly2) {
              track(target, "get", key);
            }
            if (shallow) {
              return res;
            }
            if (isRef(res)) {
              const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
              return shouldUnwrap ? res.value : res;
            }
            if (shared.isObject(res)) {
              return isReadonly2 ? readonly(res) : reactive3(res);
            }
            return res;
          };
        }
        var set2 = /* @__PURE__ */ createSetter();
        var shallowSet = /* @__PURE__ */ createSetter(true);
        function createSetter(shallow = false) {
          return function set3(target, key, value, receiver) {
            let oldValue = target[key];
            if (!shallow) {
              value = toRaw2(value);
              oldValue = toRaw2(oldValue);
              if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
              }
            }
            const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
            const result = Reflect.set(target, key, value, receiver);
            if (target === toRaw2(receiver)) {
              if (!hadKey) {
                trigger(target, "add", key, value);
              } else if (shared.hasChanged(value, oldValue)) {
                trigger(target, "set", key, value, oldValue);
              }
            }
            return result;
          };
        }
        function deleteProperty(target, key) {
          const hadKey = shared.hasOwn(target, key);
          const oldValue = target[key];
          const result = Reflect.deleteProperty(target, key);
          if (result && hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        function has(target, key) {
          const result = Reflect.has(target, key);
          if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
          }
          return result;
        }
        function ownKeys(target) {
          track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
          return Reflect.ownKeys(target);
        }
        var mutableHandlers = {
          get: get2,
          set: set2,
          deleteProperty,
          has,
          ownKeys
        };
        var readonlyHandlers = {
          get: readonlyGet,
          set(target, key) {
            {
              console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
            }
            return true;
          },
          deleteProperty(target, key) {
            {
              console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
            }
            return true;
          }
        };
        var shallowReactiveHandlers = /* @__PURE__ */ shared.extend({}, mutableHandlers, {
          get: shallowGet,
          set: shallowSet
        });
        var shallowReadonlyHandlers = /* @__PURE__ */ shared.extend({}, readonlyHandlers, {
          get: shallowReadonlyGet
        });
        var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
        var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
        var toShallow = (value) => value;
        var getProto = (v) => Reflect.getPrototypeOf(v);
        function get$1(target, key, isReadonly2 = false, isShallow = false) {
          target = target[
            "__v_raw"
            /* RAW */
          ];
          const rawTarget = toRaw2(target);
          const rawKey = toRaw2(key);
          if (key !== rawKey) {
            !isReadonly2 && track(rawTarget, "get", key);
          }
          !isReadonly2 && track(rawTarget, "get", rawKey);
          const { has: has2 } = getProto(rawTarget);
          const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
          if (has2.call(rawTarget, key)) {
            return wrap(target.get(key));
          } else if (has2.call(rawTarget, rawKey)) {
            return wrap(target.get(rawKey));
          } else if (target !== rawTarget) {
            target.get(key);
          }
        }
        function has$1(key, isReadonly2 = false) {
          const target = this[
            "__v_raw"
            /* RAW */
          ];
          const rawTarget = toRaw2(target);
          const rawKey = toRaw2(key);
          if (key !== rawKey) {
            !isReadonly2 && track(rawTarget, "has", key);
          }
          !isReadonly2 && track(rawTarget, "has", rawKey);
          return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        }
        function size(target, isReadonly2 = false) {
          target = target[
            "__v_raw"
            /* RAW */
          ];
          !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
          return Reflect.get(target, "size", target);
        }
        function add(value) {
          value = toRaw2(value);
          const target = toRaw2(this);
          const proto = getProto(target);
          const hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        }
        function set$1(key, value) {
          value = toRaw2(value);
          const target = toRaw2(this);
          const { has: has2, get: get3 } = getProto(target);
          let hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw2(key);
            hadKey = has2.call(target, key);
          } else {
            checkIdentityKeys(target, has2, key);
          }
          const oldValue = get3.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (shared.hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
          return this;
        }
        function deleteEntry(key) {
          const target = toRaw2(this);
          const { has: has2, get: get3 } = getProto(target);
          let hadKey = has2.call(target, key);
          if (!hadKey) {
            key = toRaw2(key);
            hadKey = has2.call(target, key);
          } else {
            checkIdentityKeys(target, has2, key);
          }
          const oldValue = get3 ? get3.call(target, key) : void 0;
          const result = target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        function clear() {
          const target = toRaw2(this);
          const hadItems = target.size !== 0;
          const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
          const result = target.clear();
          if (hadItems) {
            trigger(target, "clear", void 0, void 0, oldTarget);
          }
          return result;
        }
        function createForEach(isReadonly2, isShallow) {
          return function forEach(callback, thisArg) {
            const observed = this;
            const target = observed[
              "__v_raw"
              /* RAW */
            ];
            const rawTarget = toRaw2(target);
            const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach((value, key) => {
              return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
          };
        }
        function createIterableMethod(method, isReadonly2, isShallow) {
          return function(...args) {
            const target = this[
              "__v_raw"
              /* RAW */
            ];
            const rawTarget = toRaw2(target);
            const targetIsMap = shared.isMap(rawTarget);
            const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
            const isKeyOnly = method === "keys" && targetIsMap;
            const innerIterator = target[method](...args);
            const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
            !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
            return {
              // iterator protocol
              next() {
                const { value, done } = innerIterator.next();
                return done ? { value, done } : {
                  value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                  done
                };
              },
              // iterable protocol
              [Symbol.iterator]() {
                return this;
              }
            };
          };
        }
        function createReadonlyMethod(type) {
          return function(...args) {
            {
              const key = args[0] ? `on key "${args[0]}" ` : ``;
              console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
            }
            return type === "delete" ? false : this;
          };
        }
        function createInstrumentations() {
          const mutableInstrumentations2 = {
            get(key) {
              return get$1(this, key);
            },
            get size() {
              return size(this);
            },
            has: has$1,
            add,
            set: set$1,
            delete: deleteEntry,
            clear,
            forEach: createForEach(false, false)
          };
          const shallowInstrumentations2 = {
            get(key) {
              return get$1(this, key, false, true);
            },
            get size() {
              return size(this);
            },
            has: has$1,
            add,
            set: set$1,
            delete: deleteEntry,
            clear,
            forEach: createForEach(false, true)
          };
          const readonlyInstrumentations2 = {
            get(key) {
              return get$1(this, key, true);
            },
            get size() {
              return size(this, true);
            },
            has(key) {
              return has$1.call(this, key, true);
            },
            add: createReadonlyMethod(
              "add"
              /* ADD */
            ),
            set: createReadonlyMethod(
              "set"
              /* SET */
            ),
            delete: createReadonlyMethod(
              "delete"
              /* DELETE */
            ),
            clear: createReadonlyMethod(
              "clear"
              /* CLEAR */
            ),
            forEach: createForEach(true, false)
          };
          const shallowReadonlyInstrumentations2 = {
            get(key) {
              return get$1(this, key, true, true);
            },
            get size() {
              return size(this, true);
            },
            has(key) {
              return has$1.call(this, key, true);
            },
            add: createReadonlyMethod(
              "add"
              /* ADD */
            ),
            set: createReadonlyMethod(
              "set"
              /* SET */
            ),
            delete: createReadonlyMethod(
              "delete"
              /* DELETE */
            ),
            clear: createReadonlyMethod(
              "clear"
              /* CLEAR */
            ),
            forEach: createForEach(true, true)
          };
          const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
          iteratorMethods.forEach((method) => {
            mutableInstrumentations2[method] = createIterableMethod(method, false, false);
            readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
            shallowInstrumentations2[method] = createIterableMethod(method, false, true);
            shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
          });
          return [
            mutableInstrumentations2,
            readonlyInstrumentations2,
            shallowInstrumentations2,
            shallowReadonlyInstrumentations2
          ];
        }
        var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
        function createInstrumentationGetter(isReadonly2, shallow) {
          const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
          return (target, key, receiver) => {
            if (key === "__v_isReactive") {
              return !isReadonly2;
            } else if (key === "__v_isReadonly") {
              return isReadonly2;
            } else if (key === "__v_raw") {
              return target;
            }
            return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
          };
        }
        var mutableCollectionHandlers = {
          get: /* @__PURE__ */ createInstrumentationGetter(false, false)
        };
        var shallowCollectionHandlers = {
          get: /* @__PURE__ */ createInstrumentationGetter(false, true)
        };
        var readonlyCollectionHandlers = {
          get: /* @__PURE__ */ createInstrumentationGetter(true, false)
        };
        var shallowReadonlyCollectionHandlers = {
          get: /* @__PURE__ */ createInstrumentationGetter(true, true)
        };
        function checkIdentityKeys(target, has2, key) {
          const rawKey = toRaw2(key);
          if (rawKey !== key && has2.call(target, rawKey)) {
            const type = shared.toRawType(target);
            console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
          }
        }
        var reactiveMap = /* @__PURE__ */ new WeakMap();
        var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
        var readonlyMap = /* @__PURE__ */ new WeakMap();
        var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
        function targetTypeMap(rawType) {
          switch (rawType) {
            case "Object":
            case "Array":
              return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
              return 2;
            default:
              return 0;
          }
        }
        function getTargetType(value) {
          return value[
            "__v_skip"
            /* SKIP */
          ] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
        }
        function reactive3(target) {
          if (target && target[
            "__v_isReadonly"
            /* IS_READONLY */
          ]) {
            return target;
          }
          return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
        }
        function shallowReactive(target) {
          return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
        }
        function readonly(target) {
          return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
        }
        function shallowReadonly(target) {
          return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
        }
        function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
          if (!shared.isObject(target)) {
            {
              console.warn(`value cannot be made reactive: ${String(target)}`);
            }
            return target;
          }
          if (target[
            "__v_raw"
            /* RAW */
          ] && !(isReadonly2 && target[
            "__v_isReactive"
            /* IS_REACTIVE */
          ])) {
            return target;
          }
          const existingProxy = proxyMap.get(target);
          if (existingProxy) {
            return existingProxy;
          }
          const targetType = getTargetType(target);
          if (targetType === 0) {
            return target;
          }
          const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
          proxyMap.set(target, proxy);
          return proxy;
        }
        function isReactive2(value) {
          if (isReadonly(value)) {
            return isReactive2(value[
              "__v_raw"
              /* RAW */
            ]);
          }
          return !!(value && value[
            "__v_isReactive"
            /* IS_REACTIVE */
          ]);
        }
        function isReadonly(value) {
          return !!(value && value[
            "__v_isReadonly"
            /* IS_READONLY */
          ]);
        }
        function isProxy(value) {
          return isReactive2(value) || isReadonly(value);
        }
        function toRaw2(observed) {
          return observed && toRaw2(observed[
            "__v_raw"
            /* RAW */
          ]) || observed;
        }
        function markRaw(value) {
          shared.def(value, "__v_skip", true);
          return value;
        }
        var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
        function isRef(r) {
          return Boolean(r && r.__v_isRef === true);
        }
        function ref(value) {
          return createRef(value);
        }
        function shallowRef(value) {
          return createRef(value, true);
        }
        var RefImpl = class {
          constructor(value, _shallow = false) {
            this._shallow = _shallow;
            this.__v_isRef = true;
            this._rawValue = _shallow ? value : toRaw2(value);
            this._value = _shallow ? value : convert(value);
          }
          get value() {
            track(toRaw2(this), "get", "value");
            return this._value;
          }
          set value(newVal) {
            newVal = this._shallow ? newVal : toRaw2(newVal);
            if (shared.hasChanged(newVal, this._rawValue)) {
              this._rawValue = newVal;
              this._value = this._shallow ? newVal : convert(newVal);
              trigger(toRaw2(this), "set", "value", newVal);
            }
          }
        };
        function createRef(rawValue, shallow = false) {
          if (isRef(rawValue)) {
            return rawValue;
          }
          return new RefImpl(rawValue, shallow);
        }
        function triggerRef(ref2) {
          trigger(toRaw2(ref2), "set", "value", ref2.value);
        }
        function unref(ref2) {
          return isRef(ref2) ? ref2.value : ref2;
        }
        var shallowUnwrapHandlers = {
          get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
          set: (target, key, value, receiver) => {
            const oldValue = target[key];
            if (isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            } else {
              return Reflect.set(target, key, value, receiver);
            }
          }
        };
        function proxyRefs(objectWithRefs) {
          return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
        }
        var CustomRefImpl = class {
          constructor(factory) {
            this.__v_isRef = true;
            const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
            this._get = get3;
            this._set = set3;
          }
          get value() {
            return this._get();
          }
          set value(newVal) {
            this._set(newVal);
          }
        };
        function customRef(factory) {
          return new CustomRefImpl(factory);
        }
        function toRefs(object) {
          if (!isProxy(object)) {
            console.warn(`toRefs() expects a reactive object but received a plain one.`);
          }
          const ret = shared.isArray(object) ? new Array(object.length) : {};
          for (const key in object) {
            ret[key] = toRef(object, key);
          }
          return ret;
        }
        var ObjectRefImpl = class {
          constructor(_object, _key) {
            this._object = _object;
            this._key = _key;
            this.__v_isRef = true;
          }
          get value() {
            return this._object[this._key];
          }
          set value(newVal) {
            this._object[this._key] = newVal;
          }
        };
        function toRef(object, key) {
          return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
        }
        var ComputedRefImpl = class {
          constructor(getter, _setter, isReadonly2) {
            this._setter = _setter;
            this._dirty = true;
            this.__v_isRef = true;
            this.effect = effect3(getter, {
              lazy: true,
              scheduler: () => {
                if (!this._dirty) {
                  this._dirty = true;
                  trigger(toRaw2(this), "set", "value");
                }
              }
            });
            this[
              "__v_isReadonly"
              /* IS_READONLY */
            ] = isReadonly2;
          }
          get value() {
            const self2 = toRaw2(this);
            if (self2._dirty) {
              self2._value = this.effect();
              self2._dirty = false;
            }
            track(self2, "get", "value");
            return self2._value;
          }
          set value(newValue) {
            this._setter(newValue);
          }
        };
        function computed(getterOrOptions) {
          let getter;
          let setter;
          if (shared.isFunction(getterOrOptions)) {
            getter = getterOrOptions;
            setter = () => {
              console.warn("Write operation failed: computed value is readonly");
            };
          } else {
            getter = getterOrOptions.get;
            setter = getterOrOptions.set;
          }
          return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
        }
        exports2.ITERATE_KEY = ITERATE_KEY;
        exports2.computed = computed;
        exports2.customRef = customRef;
        exports2.effect = effect3;
        exports2.enableTracking = enableTracking;
        exports2.isProxy = isProxy;
        exports2.isReactive = isReactive2;
        exports2.isReadonly = isReadonly;
        exports2.isRef = isRef;
        exports2.markRaw = markRaw;
        exports2.pauseTracking = pauseTracking;
        exports2.proxyRefs = proxyRefs;
        exports2.reactive = reactive3;
        exports2.readonly = readonly;
        exports2.ref = ref;
        exports2.resetTracking = resetTracking;
        exports2.shallowReactive = shallowReactive;
        exports2.shallowReadonly = shallowReadonly;
        exports2.shallowRef = shallowRef;
        exports2.stop = stop2;
        exports2.toRaw = toRaw2;
        exports2.toRef = toRef;
        exports2.toRefs = toRefs;
        exports2.track = track;
        exports2.trigger = trigger;
        exports2.triggerRef = triggerRef;
        exports2.unref = unref;
      }
    });
    var require_reactivity = __commonJS2({
      "node_modules/@vue/reactivity/index.js"(exports2, module2) {
        "use strict";
        if (false) {
          module2.exports = null;
        } else {
          module2.exports = require_reactivity_cjs();
        }
      }
    });
    var module_exports = {};
    __export(module_exports, {
      Alpine: () => src_default,
      default: () => module_default
    });
    module.exports = __toCommonJS(module_exports);
    var flushPending = false;
    var flushing = false;
    var queue = [];
    var lastFlushedIndex = -1;
    function scheduler(callback) {
      queueJob(callback);
    }
    function queueJob(job) {
      if (!queue.includes(job))
        queue.push(job);
      queueFlush();
    }
    function dequeueJob(job) {
      let index = queue.indexOf(job);
      if (index !== -1 && index > lastFlushedIndex)
        queue.splice(index, 1);
    }
    function queueFlush() {
      if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
      }
    }
    function flushJobs() {
      flushPending = false;
      flushing = true;
      for (let i = 0; i < queue.length; i++) {
        queue[i]();
        lastFlushedIndex = i;
      }
      queue.length = 0;
      lastFlushedIndex = -1;
      flushing = false;
    }
    var reactive;
    var effect;
    var release;
    var raw;
    var shouldSchedule = true;
    function disableEffectScheduling(callback) {
      shouldSchedule = false;
      callback();
      shouldSchedule = true;
    }
    function setReactivityEngine(engine) {
      reactive = engine.reactive;
      release = engine.release;
      effect = (callback) => engine.effect(callback, { scheduler: (task) => {
        if (shouldSchedule) {
          scheduler(task);
        } else {
          task();
        }
      } });
      raw = engine.raw;
    }
    function overrideEffect(override) {
      effect = override;
    }
    function elementBoundEffect(el) {
      let cleanup = () => {
      };
      let wrappedEffect = (callback) => {
        let effectReference = effect(callback);
        if (!el._x_effects) {
          el._x_effects = /* @__PURE__ */ new Set();
          el._x_runEffects = () => {
            el._x_effects.forEach((i) => i());
          };
        }
        el._x_effects.add(effectReference);
        cleanup = () => {
          if (effectReference === void 0)
            return;
          el._x_effects.delete(effectReference);
          release(effectReference);
        };
        return effectReference;
      };
      return [wrappedEffect, () => {
        cleanup();
      }];
    }
    function watch(getter, callback) {
      let firstTime = true;
      let oldValue;
      let effectReference = effect(() => {
        let value = getter();
        JSON.stringify(value);
        if (!firstTime) {
          queueMicrotask(() => {
            callback(value, oldValue);
            oldValue = value;
          });
        } else {
          oldValue = value;
        }
        firstTime = false;
      });
      return () => release(effectReference);
    }
    var onAttributeAddeds = [];
    var onElRemoveds = [];
    var onElAddeds = [];
    function onElAdded(callback) {
      onElAddeds.push(callback);
    }
    function onElRemoved(el, callback) {
      if (typeof callback === "function") {
        if (!el._x_cleanups)
          el._x_cleanups = [];
        el._x_cleanups.push(callback);
      } else {
        callback = el;
        onElRemoveds.push(callback);
      }
    }
    function onAttributesAdded(callback) {
      onAttributeAddeds.push(callback);
    }
    function onAttributeRemoved(el, name, callback) {
      if (!el._x_attributeCleanups)
        el._x_attributeCleanups = {};
      if (!el._x_attributeCleanups[name])
        el._x_attributeCleanups[name] = [];
      el._x_attributeCleanups[name].push(callback);
    }
    function cleanupAttributes(el, names) {
      if (!el._x_attributeCleanups)
        return;
      Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
        if (names === void 0 || names.includes(name)) {
          value.forEach((i) => i());
          delete el._x_attributeCleanups[name];
        }
      });
    }
    function cleanupElement(el) {
      if (el._x_cleanups) {
        while (el._x_cleanups.length)
          el._x_cleanups.pop()();
      }
    }
    var observer = new MutationObserver(onMutate);
    var currentlyObserving = false;
    function startObservingMutations() {
      observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
      currentlyObserving = true;
    }
    function stopObservingMutations() {
      flushObserver();
      observer.disconnect();
      currentlyObserving = false;
    }
    var queuedMutations = [];
    function flushObserver() {
      let records = observer.takeRecords();
      queuedMutations.push(() => records.length > 0 && onMutate(records));
      let queueLengthWhenTriggered = queuedMutations.length;
      queueMicrotask(() => {
        if (queuedMutations.length === queueLengthWhenTriggered) {
          while (queuedMutations.length > 0)
            queuedMutations.shift()();
        }
      });
    }
    function mutateDom(callback) {
      if (!currentlyObserving)
        return callback();
      stopObservingMutations();
      let result = callback();
      startObservingMutations();
      return result;
    }
    var isCollecting = false;
    var deferredMutations = [];
    function deferMutations() {
      isCollecting = true;
    }
    function flushAndStopDeferringMutations() {
      isCollecting = false;
      onMutate(deferredMutations);
      deferredMutations = [];
    }
    function onMutate(mutations) {
      if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
      }
      let addedNodes = /* @__PURE__ */ new Set();
      let removedNodes = /* @__PURE__ */ new Set();
      let addedAttributes = /* @__PURE__ */ new Map();
      let removedAttributes = /* @__PURE__ */ new Map();
      for (let i = 0; i < mutations.length; i++) {
        if (mutations[i].target._x_ignoreMutationObserver)
          continue;
        if (mutations[i].type === "childList") {
          mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.add(node));
          mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.add(node));
        }
        if (mutations[i].type === "attributes") {
          let el = mutations[i].target;
          let name = mutations[i].attributeName;
          let oldValue = mutations[i].oldValue;
          let add = () => {
            if (!addedAttributes.has(el))
              addedAttributes.set(el, []);
            addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
          };
          let remove = () => {
            if (!removedAttributes.has(el))
              removedAttributes.set(el, []);
            removedAttributes.get(el).push(name);
          };
          if (el.hasAttribute(name) && oldValue === null) {
            add();
          } else if (el.hasAttribute(name)) {
            remove();
            add();
          } else {
            remove();
          }
        }
      }
      removedAttributes.forEach((attrs, el) => {
        cleanupAttributes(el, attrs);
      });
      addedAttributes.forEach((attrs, el) => {
        onAttributeAddeds.forEach((i) => i(el, attrs));
      });
      for (let node of removedNodes) {
        if (addedNodes.has(node))
          continue;
        onElRemoveds.forEach((i) => i(node));
      }
      addedNodes.forEach((node) => {
        node._x_ignoreSelf = true;
        node._x_ignore = true;
      });
      for (let node of addedNodes) {
        if (removedNodes.has(node))
          continue;
        if (!node.isConnected)
          continue;
        delete node._x_ignoreSelf;
        delete node._x_ignore;
        onElAddeds.forEach((i) => i(node));
        node._x_ignore = true;
        node._x_ignoreSelf = true;
      }
      addedNodes.forEach((node) => {
        delete node._x_ignoreSelf;
        delete node._x_ignore;
      });
      addedNodes = null;
      removedNodes = null;
      addedAttributes = null;
      removedAttributes = null;
    }
    function scope(node) {
      return mergeProxies(closestDataStack(node));
    }
    function addScopeToNode(node, data2, referenceNode) {
      node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
      return () => {
        node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
      };
    }
    function closestDataStack(node) {
      if (node._x_dataStack)
        return node._x_dataStack;
      if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
        return closestDataStack(node.host);
      }
      if (!node.parentNode) {
        return [];
      }
      return closestDataStack(node.parentNode);
    }
    function mergeProxies(objects) {
      return new Proxy({ objects }, mergeProxyTrap);
    }
    var mergeProxyTrap = {
      ownKeys({ objects }) {
        return Array.from(
          new Set(objects.flatMap((i) => Object.keys(i)))
        );
      },
      has({ objects }, name) {
        if (name == Symbol.unscopables)
          return false;
        return objects.some(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
        );
      },
      get({ objects }, name, thisProxy) {
        if (name == "toJSON")
          return collapseProxies;
        return Reflect.get(
          objects.find(
            (obj) => Reflect.has(obj, name)
          ) || {},
          name,
          thisProxy
        );
      },
      set({ objects }, name, value, thisProxy) {
        const target = objects.find(
          (obj) => Object.prototype.hasOwnProperty.call(obj, name)
        ) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if ((descriptor == null ? void 0 : descriptor.set) && (descriptor == null ? void 0 : descriptor.get))
          return Reflect.set(target, name, value, thisProxy);
        return Reflect.set(target, name, value);
      }
    };
    function collapseProxies() {
      let keys = Reflect.ownKeys(this);
      return keys.reduce((acc, key) => {
        acc[key] = Reflect.get(this, key);
        return acc;
      }, {});
    }
    function initInterceptors(data2) {
      let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
      let recurse = (obj, basePath = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
          if (enumerable === false || value === void 0)
            return;
          if (typeof value === "object" && value !== null && value.__v_skip)
            return;
          let path = basePath === "" ? key : `${basePath}.${key}`;
          if (typeof value === "object" && value !== null && value._x_interceptor) {
            obj[key] = value.initialize(data2, path, key);
          } else {
            if (isObject(value) && value !== obj && !(value instanceof Element)) {
              recurse(value, path);
            }
          }
        });
      };
      return recurse(data2);
    }
    function interceptor(callback, mutateObj = () => {
    }) {
      let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize(data2, path, key) {
          return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
        }
      };
      mutateObj(obj);
      return (initialValue) => {
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
          let initialize = obj.initialize.bind(obj);
          obj.initialize = (data2, path, key) => {
            let innerValue = initialValue.initialize(data2, path, key);
            obj.initialValue = innerValue;
            return initialize(data2, path, key);
          };
        } else {
          obj.initialValue = initialValue;
        }
        return obj;
      };
    }
    function get(obj, path) {
      return path.split(".").reduce((carry, segment) => carry[segment], obj);
    }
    function set(obj, path, value) {
      if (typeof path === "string")
        path = path.split(".");
      if (path.length === 1)
        obj[path[0]] = value;
      else if (path.length === 0)
        throw error;
      else {
        if (obj[path[0]])
          return set(obj[path[0]], path.slice(1), value);
        else {
          obj[path[0]] = {};
          return set(obj[path[0]], path.slice(1), value);
        }
      }
    }
    var magics = {};
    function magic(name, callback) {
      magics[name] = callback;
    }
    function injectMagics(obj, el) {
      Object.entries(magics).forEach(([name, callback]) => {
        let memoizedUtilities = null;
        function getUtilities() {
          if (memoizedUtilities) {
            return memoizedUtilities;
          } else {
            let [utilities, cleanup] = getElementBoundUtilities(el);
            memoizedUtilities = { interceptor, ...utilities };
            onElRemoved(el, cleanup);
            return memoizedUtilities;
          }
        }
        Object.defineProperty(obj, `$${name}`, {
          get() {
            return callback(el, getUtilities());
          },
          enumerable: false
        });
      });
      return obj;
    }
    function tryCatch(el, expression, callback, ...args) {
      try {
        return callback(...args);
      } catch (e) {
        handleError(e, el, expression);
      }
    }
    function handleError(error2, el, expression = void 0) {
      error2 = Object.assign(
        error2 != null ? error2 : { message: "No error message given." },
        { el, expression }
      );
      console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
      setTimeout(() => {
        throw error2;
      }, 0);
    }
    var shouldAutoEvaluateFunctions = true;
    function dontAutoEvaluateFunctions(callback) {
      let cache = shouldAutoEvaluateFunctions;
      shouldAutoEvaluateFunctions = false;
      let result = callback();
      shouldAutoEvaluateFunctions = cache;
      return result;
    }
    function evaluate(el, expression, extras = {}) {
      let result;
      evaluateLater(el, expression)((value) => result = value, extras);
      return result;
    }
    function evaluateLater(...args) {
      return theEvaluatorFunction(...args);
    }
    var theEvaluatorFunction = normalEvaluator;
    function setEvaluator(newEvaluator) {
      theEvaluatorFunction = newEvaluator;
    }
    function normalEvaluator(el, expression) {
      let overriddenMagics = {};
      injectMagics(overriddenMagics, el);
      let dataStack = [overriddenMagics, ...closestDataStack(el)];
      let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
      return tryCatch.bind(null, el, expression, evaluator);
    }
    function generateEvaluatorFromFunction(dataStack, func) {
      return (receiver = () => {
      }, { scope: scope2 = {}, params = [] } = {}) => {
        let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
        runIfTypeOfFunction(receiver, result);
      };
    }
    var evaluatorMemo = {};
    function generateFunctionFromString(expression, el) {
      if (evaluatorMemo[expression]) {
        return evaluatorMemo[expression];
      }
      let AsyncFunction = Object.getPrototypeOf(async function() {
      }).constructor;
      let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
      const safeAsyncFunction = () => {
        try {
          let func2 = new AsyncFunction(
            ["__self", "scope"],
            `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
          );
          Object.defineProperty(func2, "name", {
            value: `[Alpine] ${expression}`
          });
          return func2;
        } catch (error2) {
          handleError(error2, el, expression);
          return Promise.resolve();
        }
      };
      let func = safeAsyncFunction();
      evaluatorMemo[expression] = func;
      return func;
    }
    function generateEvaluatorFromString(dataStack, expression, el) {
      let func = generateFunctionFromString(expression, el);
      return (receiver = () => {
      }, { scope: scope2 = {}, params = [] } = {}) => {
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([scope2, ...dataStack]);
        if (typeof func === "function") {
          let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
          if (func.finished) {
            runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
            func.result = void 0;
          } else {
            promise.then((result) => {
              runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
          }
        }
      };
    }
    function runIfTypeOfFunction(receiver, value, scope2, params, el) {
      if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) {
          result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
        } else {
          receiver(result);
        }
      } else if (typeof value === "object" && value instanceof Promise) {
        value.then((i) => receiver(i));
      } else {
        receiver(value);
      }
    }
    var prefixAsString = "x-";
    function prefix(subject = "") {
      return prefixAsString + subject;
    }
    function setPrefix(newPrefix) {
      prefixAsString = newPrefix;
    }
    var directiveHandlers = {};
    function directive(name, callback) {
      directiveHandlers[name] = callback;
      return {
        before(directive2) {
          if (!directiveHandlers[directive2]) {
            console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
            return;
          }
          const pos = directiveOrder.indexOf(directive2);
          directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
      };
    }
    function directiveExists(name) {
      return Object.keys(directiveHandlers).includes(name);
    }
    function directives(el, attributes, originalAttributeOverride) {
      attributes = Array.from(attributes);
      if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute) => {
          if (staticAttributes.find((attr) => attr.name === attribute.name)) {
            return {
              name: `x-bind:${attribute.name}`,
              value: `"${attribute.value}"`
            };
          }
          return attribute;
        });
        attributes = attributes.concat(vAttributes);
      }
      let transformedAttributeMap = {};
      let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
      return directives2.map((directive2) => {
        return getDirectiveHandler(el, directive2);
      });
    }
    function attributesOnly(attributes) {
      return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
    }
    var isDeferringHandlers = false;
    var directiveHandlerStacks = /* @__PURE__ */ new Map();
    var currentHandlerStackKey = Symbol();
    function deferHandlingDirectives(callback) {
      isDeferringHandlers = true;
      let key = Symbol();
      currentHandlerStackKey = key;
      directiveHandlerStacks.set(key, []);
      let flushHandlers = () => {
        while (directiveHandlerStacks.get(key).length)
          directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
      };
      let stopDeferring = () => {
        isDeferringHandlers = false;
        flushHandlers();
      };
      callback(flushHandlers);
      stopDeferring();
    }
    function getElementBoundUtilities(el) {
      let cleanups = [];
      let cleanup = (callback) => cleanups.push(callback);
      let [effect3, cleanupEffect] = elementBoundEffect(el);
      cleanups.push(cleanupEffect);
      let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
      };
      let doCleanup = () => cleanups.forEach((i) => i());
      return [utilities, doCleanup];
    }
    function getDirectiveHandler(el, directive2) {
      let noop = () => {
      };
      let handler4 = directiveHandlers[directive2.type] || noop;
      let [utilities, cleanup] = getElementBoundUtilities(el);
      onAttributeRemoved(el, directive2.original, cleanup);
      let fullHandler = () => {
        if (el._x_ignore || el._x_ignoreSelf)
          return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
      };
      fullHandler.runCleanups = cleanup;
      return fullHandler;
    }
    var startingWith = (subject, replacement) => ({ name, value }) => {
      if (name.startsWith(subject))
        name = name.replace(subject, replacement);
      return { name, value };
    };
    var into = (i) => i;
    function toTransformedAttributes(callback = () => {
    }) {
      return ({ name, value }) => {
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
          return transform(carry);
        }, { name, value });
        if (newName !== name)
          callback(newName, name);
        return { name: newName, value: newValue };
      };
    }
    var attributeTransformers = [];
    function mapAttributes(callback) {
      attributeTransformers.push(callback);
    }
    function outNonAlpineAttributes({ name }) {
      return alpineAttributeRegex().test(name);
    }
    var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
    function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
      return ({ name, value }) => {
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
          type: typeMatch ? typeMatch[1] : null,
          value: valueMatch ? valueMatch[1] : null,
          modifiers: modifiers.map((i) => i.replace(".", "")),
          expression: value,
          original
        };
      };
    }
    var DEFAULT = "DEFAULT";
    var directiveOrder = [
      "ignore",
      "ref",
      "data",
      "id",
      "anchor",
      "bind",
      "init",
      "for",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      DEFAULT,
      "teleport"
    ];
    function byPriority(a, b) {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    }
    function dispatch(el, name, detail = {}) {
      el.dispatchEvent(
        new CustomEvent(name, {
          detail,
          bubbles: true,
          // Allows events to pass the shadow DOM barrier.
          composed: true,
          cancelable: true
        })
      );
    }
    function walk(el, callback) {
      if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2) => walk(el2, callback));
        return;
      }
      let skip = false;
      callback(el, () => skip = true);
      if (skip)
        return;
      let node = el.firstElementChild;
      while (node) {
        walk(node, callback, false);
        node = node.nextElementSibling;
      }
    }
    function warn(message, ...args) {
      console.warn(`Alpine Warning: ${message}`, ...args);
    }
    var started = false;
    function start() {
      if (started)
        warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
      started = true;
      if (!document.body)
        warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
      dispatch(document, "alpine:init");
      dispatch(document, "alpine:initializing");
      startObservingMutations();
      onElAdded((el) => initTree(el, walk));
      onElRemoved((el) => destroyTree(el));
      onAttributesAdded((el, attrs) => {
        directives(el, attrs).forEach((handle) => handle());
      });
      let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
      Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
        initTree(el);
      });
      dispatch(document, "alpine:initialized");
      setTimeout(() => {
        warnAboutMissingPlugins();
      });
    }
    var rootSelectorCallbacks = [];
    var initSelectorCallbacks = [];
    function rootSelectors() {
      return rootSelectorCallbacks.map((fn) => fn());
    }
    function allSelectors() {
      return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
    }
    function addRootSelector(selectorCallback) {
      rootSelectorCallbacks.push(selectorCallback);
    }
    function addInitSelector(selectorCallback) {
      initSelectorCallbacks.push(selectorCallback);
    }
    function closestRoot(el, includeInitSelectors = false) {
      return findClosest(el, (element) => {
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector) => element.matches(selector)))
          return true;
      });
    }
    function findClosest(el, callback) {
      if (!el)
        return;
      if (callback(el))
        return el;
      if (el._x_teleportBack)
        el = el._x_teleportBack;
      if (!el.parentElement)
        return;
      return findClosest(el.parentElement, callback);
    }
    function isRoot(el) {
      return rootSelectors().some((selector) => el.matches(selector));
    }
    var initInterceptors2 = [];
    function interceptInit(callback) {
      initInterceptors2.push(callback);
    }
    function initTree(el, walker = walk, intercept = () => {
    }) {
      deferHandlingDirectives(() => {
        walker(el, (el2, skip) => {
          intercept(el2, skip);
          initInterceptors2.forEach((i) => i(el2, skip));
          directives(el2, el2.attributes).forEach((handle) => handle());
          el2._x_ignore && skip();
        });
      });
    }
    function destroyTree(root, walker = walk) {
      walker(root, (el) => {
        cleanupAttributes(el);
        cleanupElement(el);
      });
    }
    function warnAboutMissingPlugins() {
      let pluginDirectives = [
        ["ui", "dialog", ["[x-dialog], [x-popover]"]],
        ["anchor", "anchor", ["[x-anchor]"]],
        ["sort", "sort", ["[x-sort]"]]
      ];
      pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
        if (directiveExists(directive2))
          return;
        selectors.some((selector) => {
          if (document.querySelector(selector)) {
            warn(`found "${selector}", but missing ${plugin2} plugin`);
            return true;
          }
        });
      });
    }
    var tickStack = [];
    var isHolding = false;
    function nextTick(callback = () => {
    }) {
      queueMicrotask(() => {
        isHolding || setTimeout(() => {
          releaseNextTicks();
        });
      });
      return new Promise((res) => {
        tickStack.push(() => {
          callback();
          res();
        });
      });
    }
    function releaseNextTicks() {
      isHolding = false;
      while (tickStack.length)
        tickStack.shift()();
    }
    function holdNextTicks() {
      isHolding = true;
    }
    function setClasses(el, value) {
      if (Array.isArray(value)) {
        return setClassesFromString(el, value.join(" "));
      } else if (typeof value === "object" && value !== null) {
        return setClassesFromObject(el, value);
      } else if (typeof value === "function") {
        return setClasses(el, value());
      }
      return setClassesFromString(el, value);
    }
    function setClassesFromString(el, classString) {
      let split = (classString2) => classString2.split(" ").filter(Boolean);
      let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
      let addClassesAndReturnUndo = (classes) => {
        el.classList.add(...classes);
        return () => {
          el.classList.remove(...classes);
        };
      };
      classString = classString === true ? classString = "" : classString || "";
      return addClassesAndReturnUndo(missingClasses(classString));
    }
    function setClassesFromObject(el, classObject) {
      let split = (classString) => classString.split(" ").filter(Boolean);
      let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
      let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
      let added = [];
      let removed = [];
      forRemove.forEach((i) => {
        if (el.classList.contains(i)) {
          el.classList.remove(i);
          removed.push(i);
        }
      });
      forAdd.forEach((i) => {
        if (!el.classList.contains(i)) {
          el.classList.add(i);
          added.push(i);
        }
      });
      return () => {
        removed.forEach((i) => el.classList.add(i));
        added.forEach((i) => el.classList.remove(i));
      };
    }
    function setStyles(el, value) {
      if (typeof value === "object" && value !== null) {
        return setStylesFromObject(el, value);
      }
      return setStylesFromString(el, value);
    }
    function setStylesFromObject(el, value) {
      let previousStyles = {};
      Object.entries(value).forEach(([key, value2]) => {
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) {
          key = kebabCase(key);
        }
        el.style.setProperty(key, value2);
      });
      setTimeout(() => {
        if (el.style.length === 0) {
          el.removeAttribute("style");
        }
      });
      return () => {
        setStyles(el, previousStyles);
      };
    }
    function setStylesFromString(el, value) {
      let cache = el.getAttribute("style", value);
      el.setAttribute("style", value);
      return () => {
        el.setAttribute("style", cache || "");
      };
    }
    function kebabCase(subject) {
      return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function once(callback, fallback = () => {
    }) {
      let called = false;
      return function() {
        if (!called) {
          called = true;
          callback.apply(this, arguments);
        } else {
          fallback.apply(this, arguments);
        }
      };
    }
    directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
      if (typeof expression === "function")
        expression = evaluate2(expression);
      if (expression === false)
        return;
      if (!expression || typeof expression === "boolean") {
        registerTransitionsFromHelper(el, modifiers, value);
      } else {
        registerTransitionsFromClassString(el, expression, value);
      }
    });
    function registerTransitionsFromClassString(el, classString, stage) {
      registerTransitionObject(el, setClasses, "");
      let directiveStorageMap = {
        "enter": (classes) => {
          el._x_transition.enter.during = classes;
        },
        "enter-start": (classes) => {
          el._x_transition.enter.start = classes;
        },
        "enter-end": (classes) => {
          el._x_transition.enter.end = classes;
        },
        "leave": (classes) => {
          el._x_transition.leave.during = classes;
        },
        "leave-start": (classes) => {
          el._x_transition.leave.start = classes;
        },
        "leave-end": (classes) => {
          el._x_transition.leave.end = classes;
        }
      };
      directiveStorageMap[stage](classString);
    }
    function registerTransitionsFromHelper(el, modifiers, stage) {
      registerTransitionObject(el, setStyles);
      let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
      let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
      let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
      if (modifiers.includes("in") && !doesntSpecify) {
        modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
      }
      if (modifiers.includes("out") && !doesntSpecify) {
        modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
      }
      let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
      let wantsOpacity = wantsAll || modifiers.includes("opacity");
      let wantsScale = wantsAll || modifiers.includes("scale");
      let opacityValue = wantsOpacity ? 0 : 1;
      let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
      let delay = modifierValue(modifiers, "delay", 0) / 1e3;
      let origin = modifierValue(modifiers, "origin", "center");
      let property = "opacity, transform";
      let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
      let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
      let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      if (transitioningIn) {
        el._x_transition.enter.during = {
          transformOrigin: origin,
          transitionDelay: `${delay}s`,
          transitionProperty: property,
          transitionDuration: `${durationIn}s`,
          transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
          opacity: opacityValue,
          transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
          opacity: 1,
          transform: `scale(1)`
        };
      }
      if (transitioningOut) {
        el._x_transition.leave.during = {
          transformOrigin: origin,
          transitionDelay: `${delay}s`,
          transitionProperty: property,
          transitionDuration: `${durationOut}s`,
          transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
          opacity: 1,
          transform: `scale(1)`
        };
        el._x_transition.leave.end = {
          opacity: opacityValue,
          transform: `scale(${scaleValue})`
        };
      }
    }
    function registerTransitionObject(el, setFunction, defaultValue = {}) {
      if (!el._x_transition)
        el._x_transition = {
          enter: { during: defaultValue, start: defaultValue, end: defaultValue },
          leave: { during: defaultValue, start: defaultValue, end: defaultValue },
          in(before = () => {
          }, after = () => {
          }) {
            transition(el, setFunction, {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end
            }, before, after);
          },
          out(before = () => {
          }, after = () => {
          }) {
            transition(el, setFunction, {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end
            }, before, after);
          }
        };
    }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
      const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
      let clickAwayCompatibleShow = () => nextTick2(show);
      if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
          el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        } else {
          el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        }
        return;
      }
      el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
        el._x_transition.out(() => {
        }, () => resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
      }) : Promise.resolve(hide);
      queueMicrotask(() => {
        let closest = closestHide(el);
        if (closest) {
          if (!closest._x_hideChildren)
            closest._x_hideChildren = [];
          closest._x_hideChildren.push(el);
        } else {
          nextTick2(() => {
            let hideAfterChildren = (el2) => {
              let carry = Promise.all([
                el2._x_hidePromise,
                ...(el2._x_hideChildren || []).map(hideAfterChildren)
              ]).then(([i]) => i());
              delete el2._x_hidePromise;
              delete el2._x_hideChildren;
              return carry;
            };
            hideAfterChildren(el).catch((e) => {
              if (!e.isFromCancelledTransition)
                throw e;
            });
          });
        }
      });
    };
    function closestHide(el) {
      let parent = el.parentNode;
      if (!parent)
        return;
      return parent._x_hidePromise ? parent : closestHide(parent);
    }
    function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
    }, after = () => {
    }) {
      if (el._x_transitioning)
        el._x_transitioning.cancel();
      if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
      }
      let undoStart, undoDuring, undoEnd;
      performTransition(el, {
        start() {
          undoStart = setFunction(el, start2);
        },
        during() {
          undoDuring = setFunction(el, during);
        },
        before,
        end() {
          undoStart();
          undoEnd = setFunction(el, end);
        },
        after,
        cleanup() {
          undoDuring();
          undoEnd();
        }
      });
    }
    function performTransition(el, stages) {
      let interrupted, reachedBefore, reachedEnd;
      let finish = once(() => {
        mutateDom(() => {
          interrupted = true;
          if (!reachedBefore)
            stages.before();
          if (!reachedEnd) {
            stages.end();
            releaseNextTicks();
          }
          stages.after();
          if (el.isConnected)
            stages.cleanup();
          delete el._x_transitioning;
        });
      });
      el._x_transitioning = {
        beforeCancels: [],
        beforeCancel(callback) {
          this.beforeCancels.push(callback);
        },
        cancel: once(function() {
          while (this.beforeCancels.length) {
            this.beforeCancels.shift()();
          }
          ;
          finish();
        }),
        finish
      };
      mutateDom(() => {
        stages.start();
        stages.during();
      });
      holdNextTicks();
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0)
          duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(() => {
          stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(() => {
          if (interrupted)
            return;
          mutateDom(() => {
            stages.end();
          });
          releaseNextTicks();
          setTimeout(el._x_transitioning.finish, duration + delay);
          reachedEnd = true;
        });
      });
    }
    function modifierValue(modifiers, key, fallback) {
      if (modifiers.indexOf(key) === -1)
        return fallback;
      const rawValue = modifiers[modifiers.indexOf(key) + 1];
      if (!rawValue)
        return fallback;
      if (key === "scale") {
        if (isNaN(rawValue))
          return fallback;
      }
      if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match)
          return match[1];
      }
      if (key === "origin") {
        if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
          return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
        }
      }
      return rawValue;
    }
    var isCloning = false;
    function skipDuringClone(callback, fallback = () => {
    }) {
      return (...args) => isCloning ? fallback(...args) : callback(...args);
    }
    function onlyDuringClone(callback) {
      return (...args) => isCloning && callback(...args);
    }
    var interceptors = [];
    function interceptClone(callback) {
      interceptors.push(callback);
    }
    function cloneNode(from, to) {
      interceptors.forEach((i) => i(from, to));
      isCloning = true;
      dontRegisterReactiveSideEffects(() => {
        initTree(to, (el, callback) => {
          callback(el, () => {
          });
        });
      });
      isCloning = false;
    }
    var isCloningLegacy = false;
    function clone(oldEl, newEl) {
      if (!newEl._x_dataStack)
        newEl._x_dataStack = oldEl._x_dataStack;
      isCloning = true;
      isCloningLegacy = true;
      dontRegisterReactiveSideEffects(() => {
        cloneTree(newEl);
      });
      isCloning = false;
      isCloningLegacy = false;
    }
    function cloneTree(el) {
      let hasRunThroughFirstEl = false;
      let shallowWalker = (el2, callback) => {
        walk(el2, (el3, skip) => {
          if (hasRunThroughFirstEl && isRoot(el3))
            return skip();
          hasRunThroughFirstEl = true;
          callback(el3, skip);
        });
      };
      initTree(el, shallowWalker);
    }
    function dontRegisterReactiveSideEffects(callback) {
      let cache = effect;
      overrideEffect((callback2, el) => {
        let storedEffect = cache(callback2);
        release(storedEffect);
        return () => {
        };
      });
      callback();
      overrideEffect(cache);
    }
    function bind(el, name, value, modifiers = []) {
      if (!el._x_bindings)
        el._x_bindings = reactive({});
      el._x_bindings[name] = value;
      name = modifiers.includes("camel") ? camelCase(name) : name;
      switch (name) {
        case "value":
          bindInputValue(el, value);
          break;
        case "style":
          bindStyles(el, value);
          break;
        case "class":
          bindClasses(el, value);
          break;
        case "selected":
        case "checked":
          bindAttributeAndProperty(el, name, value);
          break;
        default:
          bindAttribute(el, name, value);
          break;
      }
    }
    function bindInputValue(el, value) {
      if (el.type === "radio") {
        if (el.attributes.value === void 0) {
          el.value = value;
        }
        if (window.fromModel) {
          if (typeof value === "boolean") {
            el.checked = safeParseBoolean(el.value) === value;
          } else {
            el.checked = checkedAttrLooseCompare(el.value, value);
          }
        }
      } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) {
          el.value = value;
        } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
          el.value = String(value);
        } else {
          if (Array.isArray(value)) {
            el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === "SELECT") {
        updateSelect(el, value);
      } else {
        if (el.value === value)
          return;
        el.value = value === void 0 ? "" : value;
      }
    }
    function bindClasses(el, value) {
      if (el._x_undoAddedClasses)
        el._x_undoAddedClasses();
      el._x_undoAddedClasses = setClasses(el, value);
    }
    function bindStyles(el, value) {
      if (el._x_undoAddedStyles)
        el._x_undoAddedStyles();
      el._x_undoAddedStyles = setStyles(el, value);
    }
    function bindAttributeAndProperty(el, name, value) {
      bindAttribute(el, name, value);
      setPropertyIfChanged(el, name, value);
    }
    function bindAttribute(el, name, value) {
      if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
        el.removeAttribute(name);
      } else {
        if (isBooleanAttr(name))
          value = name;
        setIfChanged(el, name, value);
      }
    }
    function setIfChanged(el, attrName, value) {
      if (el.getAttribute(attrName) != value) {
        el.setAttribute(attrName, value);
      }
    }
    function setPropertyIfChanged(el, propName, value) {
      if (el[propName] !== value) {
        el[propName] = value;
      }
    }
    function updateSelect(el, value) {
      const arrayWrappedValue = [].concat(value).map((value2) => {
        return value2 + "";
      });
      Array.from(el.options).forEach((option) => {
        option.selected = arrayWrappedValue.includes(option.value);
      });
    }
    function camelCase(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
    }
    function checkedAttrLooseCompare(valueA, valueB) {
      return valueA == valueB;
    }
    function safeParseBoolean(rawValue) {
      if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
        return true;
      }
      if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
        return false;
      }
      return rawValue ? Boolean(rawValue) : null;
    }
    function isBooleanAttr(attrName) {
      const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
      ];
      return booleanAttributes.includes(attrName);
    }
    function attributeShouldntBePreservedIfFalsy(name) {
      return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
    }
    function getBinding(el, name, fallback) {
      if (el._x_bindings && el._x_bindings[name] !== void 0)
        return el._x_bindings[name];
      return getAttributeBinding(el, name, fallback);
    }
    function extractProp(el, name, fallback, extract = true) {
      if (el._x_bindings && el._x_bindings[name] !== void 0)
        return el._x_bindings[name];
      if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(() => {
          return evaluate(el, binding.expression);
        });
      }
      return getAttributeBinding(el, name, fallback);
    }
    function getAttributeBinding(el, name, fallback) {
      let attr = el.getAttribute(name);
      if (attr === null)
        return typeof fallback === "function" ? fallback() : fallback;
      if (attr === "")
        return true;
      if (isBooleanAttr(name)) {
        return !![name, "true"].includes(attr);
      }
      return attr;
    }
    function debounce(func, wait) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
    function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
      let firstRun = true;
      let outerHash;
      let innerHash;
      let reference = effect(() => {
        let outer = outerGet();
        let inner = innerGet();
        if (firstRun) {
          innerSet(cloneIfObject(outer));
          firstRun = false;
        } else {
          let outerHashLatest = JSON.stringify(outer);
          let innerHashLatest = JSON.stringify(inner);
          if (outerHashLatest !== outerHash) {
            innerSet(cloneIfObject(outer));
          } else if (outerHashLatest !== innerHashLatest) {
            outerSet(cloneIfObject(inner));
          } else {
          }
        }
        outerHash = JSON.stringify(outerGet());
        innerHash = JSON.stringify(innerGet());
      });
      return () => {
        release(reference);
      };
    }
    function cloneIfObject(value) {
      return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
    }
    function plugin(callback) {
      let callbacks = Array.isArray(callback) ? callback : [callback];
      callbacks.forEach((i) => i(alpine_default));
    }
    var stores = {};
    var isReactive = false;
    function store(name, value) {
      if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
      }
      if (value === void 0) {
        return stores[name];
      }
      stores[name] = value;
      if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
        stores[name].init();
      }
      initInterceptors(stores[name]);
    }
    function getStores() {
      return stores;
    }
    var binds = {};
    function bind2(name, bindings) {
      let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
      if (name instanceof Element) {
        return applyBindingsObject(name, getBindings());
      } else {
        binds[name] = getBindings;
      }
      return () => {
      };
    }
    function injectBindingProviders(obj) {
      Object.entries(binds).forEach(([name, callback]) => {
        Object.defineProperty(obj, name, {
          get() {
            return (...args) => {
              return callback(...args);
            };
          }
        });
      });
      return obj;
    }
    function applyBindingsObject(el, obj, original) {
      let cleanupRunners = [];
      while (cleanupRunners.length)
        cleanupRunners.pop()();
      let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
      return () => {
        while (cleanupRunners.length)
          cleanupRunners.pop()();
      };
    }
    var datas = {};
    function data(name, callback) {
      datas[name] = callback;
    }
    function injectDataProviders(obj, context) {
      Object.entries(datas).forEach(([name, callback]) => {
        Object.defineProperty(obj, name, {
          get() {
            return (...args) => {
              return callback.bind(context)(...args);
            };
          },
          enumerable: false
        });
      });
      return obj;
    }
    var Alpine2 = {
      get reactive() {
        return reactive;
      },
      get release() {
        return release;
      },
      get effect() {
        return effect;
      },
      get raw() {
        return raw;
      },
      version: "3.13.10",
      flushAndStopDeferringMutations,
      dontAutoEvaluateFunctions,
      disableEffectScheduling,
      startObservingMutations,
      stopObservingMutations,
      setReactivityEngine,
      onAttributeRemoved,
      onAttributesAdded,
      closestDataStack,
      skipDuringClone,
      onlyDuringClone,
      addRootSelector,
      addInitSelector,
      interceptClone,
      addScopeToNode,
      deferMutations,
      mapAttributes,
      evaluateLater,
      interceptInit,
      setEvaluator,
      mergeProxies,
      extractProp,
      findClosest,
      onElRemoved,
      closestRoot,
      destroyTree,
      interceptor,
      // INTERNAL: not public API and is subject to change without major release.
      transition,
      // INTERNAL
      setStyles,
      // INTERNAL
      mutateDom,
      directive,
      entangle,
      throttle,
      debounce,
      evaluate,
      initTree,
      nextTick,
      prefixed: prefix,
      prefix: setPrefix,
      plugin,
      magic,
      store,
      start,
      clone,
      // INTERNAL
      cloneNode,
      // INTERNAL
      bound: getBinding,
      $data: scope,
      watch,
      walk,
      data,
      bind: bind2
    };
    var alpine_default = Alpine2;
    function cspEvaluator(el, expression) {
      let dataStack = generateDataStack(el);
      if (typeof expression === "function") {
        return generateEvaluatorFromFunction(dataStack, expression);
      }
      let evaluator = generateEvaluator(el, expression, dataStack);
      return tryCatch.bind(null, el, expression, evaluator);
    }
    function generateDataStack(el) {
      let overriddenMagics = {};
      injectMagics(overriddenMagics, el);
      return [overriddenMagics, ...closestDataStack(el)];
    }
    function generateEvaluator(el, expression, dataStack) {
      return (receiver = () => {
      }, { scope: scope2 = {}, params = [] } = {}) => {
        let completeScope = mergeProxies([scope2, ...dataStack]);
        if (completeScope[expression] === void 0) {
          throwExpressionError(el, expression);
        }
        runIfTypeOfFunction(receiver, completeScope[expression], completeScope, params);
      };
    }
    function throwExpressionError(el, expression) {
      console.warn(
        `Alpine Error: Alpine is unable to interpret the following expression using the CSP-friendly build:

"${expression}"

Read more about the Alpine's CSP-friendly build restrictions here: https://alpinejs.dev/advanced/csp

`,
        el
      );
    }
    var import_reactivity10 = __toESM2(require_reactivity());
    magic("nextTick", () => nextTick);
    magic("dispatch", (el) => dispatch.bind(dispatch, el));
    magic("watch", (el, { evaluateLater: evaluateLater2, cleanup }) => (key, callback) => {
      let evaluate2 = evaluateLater2(key);
      let getter = () => {
        let value;
        evaluate2((i) => value = i);
        return value;
      };
      let unwatch = watch(getter, callback);
      cleanup(unwatch);
    });
    magic("store", getStores);
    magic("data", (el) => scope(el));
    magic("root", (el) => closestRoot(el));
    magic("refs", (el) => {
      if (el._x_refs_proxy)
        return el._x_refs_proxy;
      el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
      return el._x_refs_proxy;
    });
    function getArrayOfRefObject(el) {
      let refObjects = [];
      findClosest(el, (i) => {
        if (i._x_refs)
          refObjects.push(i._x_refs);
      });
      return refObjects;
    }
    var globalIdMemo = {};
    function findAndIncrementId(name) {
      if (!globalIdMemo[name])
        globalIdMemo[name] = 0;
      return ++globalIdMemo[name];
    }
    function closestIdRoot(el, name) {
      return findClosest(el, (element) => {
        if (element._x_ids && element._x_ids[name])
          return true;
      });
    }
    function setIdRoot(el, name) {
      if (!el._x_ids)
        el._x_ids = {};
      if (!el._x_ids[name])
        el._x_ids[name] = findAndIncrementId(name);
    }
    magic("id", (el, { cleanup }) => (name, key = null) => {
      let cacheKey = `${name}${key ? `-${key}` : ""}`;
      return cacheIdByNameOnElement(el, cacheKey, cleanup, () => {
        let root = closestIdRoot(el, name);
        let id = root ? root._x_ids[name] : findAndIncrementId(name);
        return key ? `${name}-${id}-${key}` : `${name}-${id}`;
      });
    });
    interceptClone((from, to) => {
      if (from._x_id) {
        to._x_id = from._x_id;
      }
    });
    function cacheIdByNameOnElement(el, cacheKey, cleanup, callback) {
      if (!el._x_id)
        el._x_id = {};
      if (el._x_id[cacheKey])
        return el._x_id[cacheKey];
      let output = callback();
      el._x_id[cacheKey] = output;
      cleanup(() => {
        delete el._x_id[cacheKey];
      });
      return output;
    }
    magic("el", (el) => el);
    warnMissingPluginMagic("Focus", "focus", "focus");
    warnMissingPluginMagic("Persist", "persist", "persist");
    function warnMissingPluginMagic(name, magicName, slug) {
      magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
    }
    directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup }) => {
      let func = evaluateLater2(expression);
      let innerGet = () => {
        let result;
        func((i) => result = i);
        return result;
      };
      let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
      let innerSet = (val) => evaluateInnerSet(() => {
      }, { scope: { "__placeholder": val } });
      let initialValue = innerGet();
      innerSet(initialValue);
      queueMicrotask(() => {
        if (!el._x_model)
          return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle(
          {
            get() {
              return outerGet();
            },
            set(value) {
              outerSet(value);
            }
          },
          {
            get() {
              return innerGet();
            },
            set(value) {
              innerSet(value);
            }
          }
        );
        cleanup(releaseEntanglement);
      });
    });
    directive("teleport", (el, { modifiers, expression }, { cleanup }) => {
      if (el.tagName.toLowerCase() !== "template")
        warn("x-teleport can only be used on a <template> tag", el);
      let target = getTarget(expression);
      let clone2 = el.content.cloneNode(true).firstElementChild;
      el._x_teleport = clone2;
      clone2._x_teleportBack = el;
      el.setAttribute("data-teleport-template", true);
      clone2.setAttribute("data-teleport-target", true);
      if (el._x_forwardEvents) {
        el._x_forwardEvents.forEach((eventName) => {
          clone2.addEventListener(eventName, (e) => {
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
          });
        });
      }
      addScopeToNode(clone2, {}, el);
      let placeInDom = (clone3, target2, modifiers2) => {
        if (modifiers2.includes("prepend")) {
          target2.parentNode.insertBefore(clone3, target2);
        } else if (modifiers2.includes("append")) {
          target2.parentNode.insertBefore(clone3, target2.nextSibling);
        } else {
          target2.appendChild(clone3);
        }
      };
      mutateDom(() => {
        placeInDom(clone2, target, modifiers);
        skipDuringClone(() => {
          initTree(clone2);
          clone2._x_ignore = true;
        })();
      });
      el._x_teleportPutBack = () => {
        let target2 = getTarget(expression);
        mutateDom(() => {
          placeInDom(el._x_teleport, target2, modifiers);
        });
      };
      cleanup(() => clone2.remove());
    });
    var teleportContainerDuringClone = document.createElement("div");
    function getTarget(expression) {
      let target = skipDuringClone(() => {
        return document.querySelector(expression);
      }, () => {
        return teleportContainerDuringClone;
      })();
      if (!target)
        warn(`Cannot find x-teleport element for selector: "${expression}"`);
      return target;
    }
    var handler = () => {
    };
    handler.inline = (el, { modifiers }, { cleanup }) => {
      modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
      cleanup(() => {
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
      });
    };
    directive("ignore", handler);
    directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
      effect3(evaluateLater(el, expression));
    }));
    function on(el, event, modifiers, callback) {
      let listenerTarget = el;
      let handler4 = (e) => callback(e);
      let options = {};
      let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
      if (modifiers.includes("dot"))
        event = dotSyntax(event);
      if (modifiers.includes("camel"))
        event = camelCase2(event);
      if (modifiers.includes("passive"))
        options.passive = true;
      if (modifiers.includes("capture"))
        options.capture = true;
      if (modifiers.includes("window"))
        listenerTarget = window;
      if (modifiers.includes("document"))
        listenerTarget = document;
      if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
      }
      if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
      }
      if (modifiers.includes("prevent"))
        handler4 = wrapHandler(handler4, (next, e) => {
          e.preventDefault();
          next(e);
        });
      if (modifiers.includes("stop"))
        handler4 = wrapHandler(handler4, (next, e) => {
          e.stopPropagation();
          next(e);
        });
      if (modifiers.includes("once")) {
        handler4 = wrapHandler(handler4, (next, e) => {
          next(e);
          listenerTarget.removeEventListener(event, handler4, options);
        });
      }
      if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e) => {
          if (el.contains(e.target))
            return;
          if (e.target.isConnected === false)
            return;
          if (el.offsetWidth < 1 && el.offsetHeight < 1)
            return;
          if (el._x_isShown === false)
            return;
          next(e);
        });
      }
      if (modifiers.includes("self"))
        handler4 = wrapHandler(handler4, (next, e) => {
          e.target === el && next(e);
        });
      handler4 = wrapHandler(handler4, (next, e) => {
        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }
        next(e);
      });
      listenerTarget.addEventListener(event, handler4, options);
      return () => {
        listenerTarget.removeEventListener(event, handler4, options);
      };
    }
    function dotSyntax(subject) {
      return subject.replace(/-/g, ".");
    }
    function camelCase2(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
    }
    function isNumeric(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function kebabCase2(subject) {
      if ([" ", "_"].includes(
        subject
      ))
        return subject;
      return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
    function isKeyEvent(event) {
      return ["keydown", "keyup"].includes(event);
    }
    function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
      let keyModifiers = modifiers.filter((i) => {
        return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
      });
      if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (keyModifiers.length === 0)
        return false;
      if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
      const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
      const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
      keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
      if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
          if (modifier === "cmd" || modifier === "super")
            modifier = "meta";
          return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
          if (keyToModifiers(e.key).includes(keyModifiers[0]))
            return false;
        }
      }
      return true;
    }
    function keyToModifiers(key) {
      if (!key)
        return [];
      key = kebabCase2(key);
      let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "comma": ",",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
      };
      modifierToKeyMap[key] = key;
      return Object.keys(modifierToKeyMap).map((modifier) => {
        if (modifierToKeyMap[modifier] === key)
          return modifier;
      }).filter((modifier) => modifier);
    }
    directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
      let scopeTarget = el;
      if (modifiers.includes("parent")) {
        scopeTarget = el.parentNode;
      }
      let evaluateGet = evaluateLater(scopeTarget, expression);
      let evaluateSet;
      if (typeof expression === "string") {
        evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
      } else if (typeof expression === "function" && typeof expression() === "string") {
        evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
      } else {
        evaluateSet = () => {
        };
      }
      let getValue = () => {
        let result;
        evaluateGet((value) => result = value);
        return isGetterSetter(result) ? result.get() : result;
      };
      let setValue = (value) => {
        let result;
        evaluateGet((value2) => result = value2);
        if (isGetterSetter(result)) {
          result.set(value);
        } else {
          evaluateSet(() => {
          }, {
            scope: { "__placeholder": value }
          });
        }
      };
      if (typeof expression === "string" && el.type === "radio") {
        mutateDom(() => {
          if (!el.hasAttribute("name"))
            el.setAttribute("name", expression);
        });
      }
      var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
      let removeListener = isCloning ? () => {
      } : on(el, event, modifiers, (e) => {
        setValue(getInputValue(el, modifiers, e, getValue()));
      });
      if (modifiers.includes("fill")) {
        if ([void 0, null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
          setValue(
            getInputValue(el, modifiers, { target: el }, getValue())
          );
        }
      }
      if (!el._x_removeModelListeners)
        el._x_removeModelListeners = {};
      el._x_removeModelListeners["default"] = removeListener;
      cleanup(() => el._x_removeModelListeners["default"]());
      if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e) => {
          nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
        });
        cleanup(() => removeResetListener());
      }
      el._x_model = {
        get() {
          return getValue();
        },
        set(value) {
          setValue(value);
        }
      };
      el._x_forceModelUpdate = (value) => {
        if (value === void 0 && typeof expression === "string" && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      };
      effect3(() => {
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
          return;
        el._x_forceModelUpdate(value);
      });
    });
    function getInputValue(el, modifiers, event, currentValue) {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0)
          return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = null;
            if (modifiers.includes("number")) {
              newValue = safeParseNumber(event.target.value);
            } else if (modifiers.includes("boolean")) {
              newValue = safeParseBoolean(event.target.value);
            } else {
              newValue = event.target.value;
            }
            return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          if (modifiers.includes("number")) {
            return Array.from(event.target.selectedOptions).map((option) => {
              let rawValue = option.value || option.text;
              return safeParseNumber(rawValue);
            });
          } else if (modifiers.includes("boolean")) {
            return Array.from(event.target.selectedOptions).map((option) => {
              let rawValue = option.value || option.text;
              return safeParseBoolean(rawValue);
            });
          }
          return Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let newValue;
          if (el.type === "radio") {
            if (event.target.checked) {
              newValue = event.target.value;
            } else {
              newValue = currentValue;
            }
          } else {
            newValue = event.target.value;
          }
          if (modifiers.includes("number")) {
            return safeParseNumber(newValue);
          } else if (modifiers.includes("boolean")) {
            return safeParseBoolean(newValue);
          } else if (modifiers.includes("trim")) {
            return newValue.trim();
          } else {
            return newValue;
          }
        }
      });
    }
    function safeParseNumber(rawValue) {
      let number = rawValue ? parseFloat(rawValue) : null;
      return isNumeric2(number) ? number : rawValue;
    }
    function checkedAttrLooseCompare2(valueA, valueB) {
      return valueA == valueB;
    }
    function isNumeric2(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function isGetterSetter(value) {
      return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
    }
    directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
    addInitSelector(() => `[${prefix("init")}]`);
    directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
      if (typeof expression === "string") {
        return !!expression.trim() && evaluate2(expression, {}, false);
      }
      return evaluate2(expression, {}, false);
    }));
    directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
      let evaluate2 = evaluateLater2(expression);
      effect3(() => {
        evaluate2((value) => {
          mutateDom(() => {
            el.textContent = value;
          });
        });
      });
    });
    directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
      let evaluate2 = evaluateLater2(expression);
      effect3(() => {
        evaluate2((value) => {
          mutateDom(() => {
            el.innerHTML = value;
            el._x_ignoreSelf = true;
            initTree(el);
            delete el._x_ignoreSelf;
          });
        });
      });
    });
    mapAttributes(startingWith(":", into(prefix("bind:"))));
    var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup }) => {
      if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings) => {
          applyBindingsObject(el, bindings, original);
        }, { scope: bindingProviders });
        return;
      }
      if (value === "key")
        return storeKeyForXFor(el, expression);
      if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
        return;
      }
      let evaluate2 = evaluateLater(el, expression);
      effect3(() => evaluate2((result) => {
        if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
          result = "";
        }
        mutateDom(() => bind(el, value, result, modifiers));
      }));
      cleanup(() => {
        el._x_undoAddedClasses && el._x_undoAddedClasses();
        el._x_undoAddedStyles && el._x_undoAddedStyles();
      });
    };
    handler2.inline = (el, { value, modifiers, expression }) => {
      if (!value)
        return;
      if (!el._x_inlineBindings)
        el._x_inlineBindings = {};
      el._x_inlineBindings[value] = { expression, extract: false };
    };
    directive("bind", handler2);
    function storeKeyForXFor(el, expression) {
      el._x_keyExpression = expression;
    }
    addRootSelector(() => `[${prefix("data")}]`);
    directive("data", (el, { expression }, { cleanup }) => {
      if (shouldSkipRegisteringDataDuringClone(el))
        return;
      expression = expression === "" ? "{}" : expression;
      let magicContext = {};
      injectMagics(magicContext, el);
      let dataProviderContext = {};
      injectDataProviders(dataProviderContext, magicContext);
      let data2 = evaluate(el, expression, { scope: dataProviderContext });
      if (data2 === void 0 || data2 === true)
        data2 = {};
      injectMagics(data2, el);
      let reactiveData = reactive(data2);
      initInterceptors(reactiveData);
      let undo = addScopeToNode(el, reactiveData);
      reactiveData["init"] && evaluate(el, reactiveData["init"]);
      cleanup(() => {
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
      });
    });
    interceptClone((from, to) => {
      if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
      }
    });
    function shouldSkipRegisteringDataDuringClone(el) {
      if (!isCloning)
        return false;
      if (isCloningLegacy)
        return true;
      return el.hasAttribute("data-has-alpine-state");
    }
    directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
      let evaluate2 = evaluateLater(el, expression);
      if (!el._x_doHide)
        el._x_doHide = () => {
          mutateDom(() => {
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
          });
        };
      if (!el._x_doShow)
        el._x_doShow = () => {
          mutateDom(() => {
            if (el.style.length === 1 && el.style.display === "none") {
              el.removeAttribute("style");
            } else {
              el.style.removeProperty("display");
            }
          });
        };
      let hide = () => {
        el._x_doHide();
        el._x_isShown = false;
      };
      let show = () => {
        el._x_doShow();
        el._x_isShown = true;
      };
      let clickAwayCompatibleShow = () => setTimeout(show);
      let toggle = once(
        (value) => value ? show() : hide(),
        (value) => {
          if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
            el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
          } else {
            value ? clickAwayCompatibleShow() : hide();
          }
        }
      );
      let oldValue;
      let firstTime = true;
      effect3(() => evaluate2((value) => {
        if (!firstTime && value === oldValue)
          return;
        if (modifiers.includes("immediate"))
          value ? clickAwayCompatibleShow() : hide();
        toggle(value);
        oldValue = value;
        firstTime = false;
      }));
    });
    directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
      let iteratorNames = parseForExpression(expression);
      let evaluateItems = evaluateLater(el, iteratorNames.items);
      let evaluateKey = evaluateLater(
        el,
        // the x-bind:key expression is stored for our use instead of evaluated.
        el._x_keyExpression || "index"
      );
      el._x_prevKeys = [];
      el._x_lookup = {};
      effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
      cleanup(() => {
        Object.values(el._x_lookup).forEach((el2) => el2.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
      });
    });
    function loop(el, iteratorNames, evaluateItems, evaluateKey) {
      let isObject = (i) => typeof i === "object" && !Array.isArray(i);
      let templateEl = el;
      evaluateItems((items) => {
        if (isNumeric3(items) && items >= 0) {
          items = Array.from(Array(items).keys(), (i) => i + 1);
        }
        if (items === void 0)
          items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject(items)) {
          items = Object.entries(items).map(([key, value]) => {
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2) => {
              if (keys.includes(value2))
                warn("Duplicate key on x-for", el);
              keys.push(value2);
            }, { scope: { index: key, ...scope2 } });
            scopes.push(scope2);
          });
        } else {
          for (let i = 0; i < items.length; i++) {
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value) => {
              if (keys.includes(value))
                warn("Duplicate key on x-for", el);
              keys.push(value);
            }, { scope: { index: i, ...scope2 } });
            scopes.push(scope2);
          }
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for (let i = 0; i < prevKeys.length; i++) {
          let key = prevKeys[i];
          if (keys.indexOf(key) === -1)
            removes.push(key);
        }
        prevKeys = prevKeys.filter((key) => !removes.includes(key));
        let lastKey = "template";
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          let prevIndex = prevKeys.indexOf(key);
          if (prevIndex === -1) {
            prevKeys.splice(i, 0, key);
            adds.push([lastKey, i]);
          } else if (prevIndex !== i) {
            let keyInSpot = prevKeys.splice(i, 1)[0];
            let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
            prevKeys.splice(i, 0, keyForSpot);
            prevKeys.splice(prevIndex, 0, keyInSpot);
            moves.push([keyInSpot, keyForSpot]);
          } else {
            sames.push(key);
          }
          lastKey = key;
        }
        for (let i = 0; i < removes.length; i++) {
          let key = removes[i];
          if (!!lookup[key]._x_effects) {
            lookup[key]._x_effects.forEach(dequeueJob);
          }
          lookup[key].remove();
          lookup[key] = null;
          delete lookup[key];
        }
        for (let i = 0; i < moves.length; i++) {
          let [keyInSpot, keyForSpot] = moves[i];
          let elInSpot = lookup[keyInSpot];
          let elForSpot = lookup[keyForSpot];
          let marker = document.createElement("div");
          mutateDom(() => {
            if (!elForSpot)
              warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
            elForSpot.after(marker);
            elInSpot.after(elForSpot);
            elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
            marker.before(elInSpot);
            elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
            marker.remove();
          });
          elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for (let i = 0; i < adds.length; i++) {
          let [lastKey2, index] = adds[i];
          let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
          if (lastEl._x_currentIfEl)
            lastEl = lastEl._x_currentIfEl;
          let scope2 = scopes[index];
          let key = keys[index];
          let clone2 = document.importNode(templateEl.content, true).firstElementChild;
          let reactiveScope = reactive(scope2);
          addScopeToNode(clone2, reactiveScope, templateEl);
          clone2._x_refreshXForScope = (newScope) => {
            Object.entries(newScope).forEach(([key2, value]) => {
              reactiveScope[key2] = value;
            });
          };
          mutateDom(() => {
            lastEl.after(clone2);
            skipDuringClone(() => initTree(clone2))();
          });
          if (typeof key === "object") {
            warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
          }
          lookup[key] = clone2;
        }
        for (let i = 0; i < sames.length; i++) {
          lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        }
        templateEl._x_prevKeys = keys;
      });
    }
    function parseForExpression(expression) {
      let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      let stripParensRE = /^\s*\(|\)\s*$/g;
      let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      let inMatch = expression.match(forAliasRE);
      if (!inMatch)
        return;
      let res = {};
      res.items = inMatch[2].trim();
      let item = inMatch[1].replace(stripParensRE, "").trim();
      let iteratorMatch = item.match(forIteratorRE);
      if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
          res.collection = iteratorMatch[2].trim();
        }
      } else {
        res.item = item;
      }
      return res;
    }
    function getIterationScopeVariables(iteratorNames, item, index, items) {
      let scopeVariables = {};
      if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
        names.forEach((name, i) => {
          scopeVariables[name] = item[i];
        });
      } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
        names.forEach((name) => {
          scopeVariables[name] = item[name];
        });
      } else {
        scopeVariables[iteratorNames.item] = item;
      }
      if (iteratorNames.index)
        scopeVariables[iteratorNames.index] = index;
      if (iteratorNames.collection)
        scopeVariables[iteratorNames.collection] = items;
      return scopeVariables;
    }
    function isNumeric3(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function handler3() {
    }
    handler3.inline = (el, { expression }, { cleanup }) => {
      let root = closestRoot(el);
      if (!root._x_refs)
        root._x_refs = {};
      root._x_refs[expression] = el;
      cleanup(() => delete root._x_refs[expression]);
    };
    directive("ref", handler3);
    directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
      if (el.tagName.toLowerCase() !== "template")
        warn("x-if can only be used on a <template> tag", el);
      let evaluate2 = evaluateLater(el, expression);
      let show = () => {
        if (el._x_currentIfEl)
          return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(() => {
          el.after(clone2);
          skipDuringClone(() => initTree(clone2))();
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = () => {
          walk(clone2, (node) => {
            if (!!node._x_effects) {
              node._x_effects.forEach(dequeueJob);
            }
          });
          clone2.remove();
          delete el._x_currentIfEl;
        };
        return clone2;
      };
      let hide = () => {
        if (!el._x_undoIf)
          return;
        el._x_undoIf();
        delete el._x_undoIf;
      };
      effect3(() => evaluate2((value) => {
        value ? show() : hide();
      }));
      cleanup(() => el._x_undoIf && el._x_undoIf());
    });
    directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
      let names = evaluate2(expression);
      names.forEach((name) => setIdRoot(el, name));
    });
    interceptClone((from, to) => {
      if (from._x_ids) {
        to._x_ids = from._x_ids;
      }
    });
    mapAttributes(startingWith("@", into(prefix("on:"))));
    directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
      let evaluate2 = expression ? evaluateLater(el, expression) : () => {
      };
      if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents)
          el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value))
          el._x_forwardEvents.push(value);
      }
      let removeListener = on(el, value, modifiers, (e) => {
        evaluate2(() => {
        }, { scope: { "$event": e }, params: [e] });
      });
      cleanup(() => removeListener());
    }));
    warnMissingPluginDirective("Collapse", "collapse", "collapse");
    warnMissingPluginDirective("Intersect", "intersect", "intersect");
    warnMissingPluginDirective("Focus", "trap", "focus");
    warnMissingPluginDirective("Mask", "mask", "mask");
    function warnMissingPluginDirective(name, directiveName, slug) {
      directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
    }
    alpine_default.setEvaluator(cspEvaluator);
    alpine_default.setReactivityEngine({ reactive: import_reactivity10.reactive, effect: import_reactivity10.effect, release: import_reactivity10.stop, raw: import_reactivity10.toRaw });
    var src_default = alpine_default;
    var module_default = src_default;
  }
});

// js/headless/index.js
var import_alpine = __toESM(require_alpine());

// js/headless/avatar.js
var component = () => {
  return {
    // state
    src: null,
    // functions
    init() {
      this.$nextTick(() => {
        const src = this.$refs.image.dataset.src;
        if (!src)
          return;
        const media = new Image();
        media.onload = (e) => {
          console.log("onload", media.complete);
          this.src = src;
        };
        media.onerror = () => {
          console.log("onerror");
          this.src = null;
        };
        media.src = src;
      });
    },
    // binds
    image: {
      ["x-ref"]: "image",
      ["x-show"]() {
        return !!this.src;
      },
      ["x-bind:src"]: "src"
    },
    fallback: {
      ["x-ref"]: "fallback",
      ["x-show"]() {
        return !this.src;
      }
    }
  };
};
component.register = () => {
  window.Alpine.data("hsAvatar", component);
};
var avatar_default = component;

// js/headless/clipboard.js
var component2 = () => {
  return {
    // functions
    copy() {
      const el = this.$refs.content;
      const text = el.value === void 0 ? el.innerText : el.value;
      return window.navigator.clipboard.writeText(text);
    },
    // binds
    root: {
      ["x-ref"]: "root"
    },
    trigger: {
      ["x-ref"]: "trigger",
      ["@click"]() {
        this.copy();
      }
    },
    content: {
      ["x-ref"]: "content"
    }
  };
};
component2.register = () => {
  window.Alpine.data("hsClipboard", component2);
};
var clipboard_default = component2;

// js/headless/popover.js
var component3 = () => {
  return {
    // state
    isOpen: false,
    // functions
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    // binds
    root: {
      ["x-ref"]: "root",
      ["x-id"]() {
        return ["hsp-content"];
      },
      ["@keydown.escape.prevent.stop"]() {
        this.close();
        this.$refs.trigger.focus();
      },
      ["@focusin.window"](event) {
        if (!this.$refs.root.contains(event.target)) {
          this.close();
        }
      },
      ["@click.outside"]() {
        this.close();
      }
    },
    trigger: {
      ["x-ref"]: "trigger",
      ["@click"]() {
        this.toggle();
      },
      [":aria-expanded"]() {
        return this.isOpen;
      },
      [":aria-controls"]() {
        return this.$id("hsp-content");
      }
    },
    content: {
      ["x-ref"]: "content",
      [":id"]() {
        return this.$id("hsp-content");
      },
      ["x-show"]() {
        return this.isOpen;
      }
    }
  };
};
component3.register = () => {
  window.Alpine.data("hsPopover", component3);
};
var popover_default = component3;

// js/headless/index.js
var headless_default = {
  start() {
    window.Alpine = import_alpine.default;
    this.register();
    import_alpine.default.start();
  },
  register() {
    avatar_default.register();
    clipboard_default.register();
    popover_default.register();
  }
};
var export_Alpine = import_alpine.default;
export {
  export_Alpine as Alpine,
  avatar_default as Avatar,
  clipboard_default as Clipboard,
  popover_default as Popover,
  headless_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYXNzZXRzL3ZlbmRvci9hbHBpbmUuanMiLCAiLi4vLi4vYXNzZXRzL2pzL2hlYWRsZXNzL2luZGV4LmpzIiwgIi4uLy4uL2Fzc2V0cy9qcy9oZWFkbGVzcy9hdmF0YXIuanMiLCAiLi4vLi4vYXNzZXRzL2pzL2hlYWRsZXNzL2NsaXBib2FyZC5qcyIsICIuLi8uLi9hc3NldHMvanMvaGVhZGxlc3MvcG9wb3Zlci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2NvbW1vbkpTID0gKGNiLCBtb2QpID0+IGZ1bmN0aW9uIF9fcmVxdWlyZSgpIHtcbiAgcmV0dXJuIG1vZCB8fCAoMCwgY2JbX19nZXRPd25Qcm9wTmFtZXMoY2IpWzBdXSkoKG1vZCA9IHsgZXhwb3J0czoge30gfSkuZXhwb3J0cywgbW9kKSwgbW9kLmV4cG9ydHM7XG59O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvZGlzdC9zaGFyZWQuY2pzLmpzXG52YXIgcmVxdWlyZV9zaGFyZWRfY2pzID0gX19jb21tb25KUyh7XG4gIFwibm9kZV9tb2R1bGVzL0B2dWUvc2hhcmVkL2Rpc3Qvc2hhcmVkLmNqcy5qc1wiKGV4cG9ydHMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpIHtcbiAgICAgIGNvbnN0IG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgY29uc3QgbGlzdCA9IHN0ci5zcGxpdChcIixcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHBlY3RzTG93ZXJDYXNlID8gKHZhbCkgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogKHZhbCkgPT4gISFtYXBbdmFsXTtcbiAgICB9XG4gICAgdmFyIFBhdGNoRmxhZ05hbWVzID0ge1xuICAgICAgW1xuICAgICAgICAxXG4gICAgICAgIC8qIFRFWFQgKi9cbiAgICAgIF06IGBURVhUYCxcbiAgICAgIFtcbiAgICAgICAgMlxuICAgICAgICAvKiBDTEFTUyAqL1xuICAgICAgXTogYENMQVNTYCxcbiAgICAgIFtcbiAgICAgICAgNFxuICAgICAgICAvKiBTVFlMRSAqL1xuICAgICAgXTogYFNUWUxFYCxcbiAgICAgIFtcbiAgICAgICAgOFxuICAgICAgICAvKiBQUk9QUyAqL1xuICAgICAgXTogYFBST1BTYCxcbiAgICAgIFtcbiAgICAgICAgMTZcbiAgICAgICAgLyogRlVMTF9QUk9QUyAqL1xuICAgICAgXTogYEZVTExfUFJPUFNgLFxuICAgICAgW1xuICAgICAgICAzMlxuICAgICAgICAvKiBIWURSQVRFX0VWRU5UUyAqL1xuICAgICAgXTogYEhZRFJBVEVfRVZFTlRTYCxcbiAgICAgIFtcbiAgICAgICAgNjRcbiAgICAgICAgLyogU1RBQkxFX0ZSQUdNRU5UICovXG4gICAgICBdOiBgU1RBQkxFX0ZSQUdNRU5UYCxcbiAgICAgIFtcbiAgICAgICAgMTI4XG4gICAgICAgIC8qIEtFWUVEX0ZSQUdNRU5UICovXG4gICAgICBdOiBgS0VZRURfRlJBR01FTlRgLFxuICAgICAgW1xuICAgICAgICAyNTZcbiAgICAgICAgLyogVU5LRVlFRF9GUkFHTUVOVCAqL1xuICAgICAgXTogYFVOS0VZRURfRlJBR01FTlRgLFxuICAgICAgW1xuICAgICAgICA1MTJcbiAgICAgICAgLyogTkVFRF9QQVRDSCAqL1xuICAgICAgXTogYE5FRURfUEFUQ0hgLFxuICAgICAgW1xuICAgICAgICAxMDI0XG4gICAgICAgIC8qIERZTkFNSUNfU0xPVFMgKi9cbiAgICAgIF06IGBEWU5BTUlDX1NMT1RTYCxcbiAgICAgIFtcbiAgICAgICAgMjA0OFxuICAgICAgICAvKiBERVZfUk9PVF9GUkFHTUVOVCAqL1xuICAgICAgXTogYERFVl9ST09UX0ZSQUdNRU5UYCxcbiAgICAgIFtcbiAgICAgICAgLTFcbiAgICAgICAgLyogSE9JU1RFRCAqL1xuICAgICAgXTogYEhPSVNURURgLFxuICAgICAgW1xuICAgICAgICAtMlxuICAgICAgICAvKiBCQUlMICovXG4gICAgICBdOiBgQkFJTGBcbiAgICB9O1xuICAgIHZhciBzbG90RmxhZ3NUZXh0ID0ge1xuICAgICAgW1xuICAgICAgICAxXG4gICAgICAgIC8qIFNUQUJMRSAqL1xuICAgICAgXTogXCJTVEFCTEVcIixcbiAgICAgIFtcbiAgICAgICAgMlxuICAgICAgICAvKiBEWU5BTUlDICovXG4gICAgICBdOiBcIkRZTkFNSUNcIixcbiAgICAgIFtcbiAgICAgICAgM1xuICAgICAgICAvKiBGT1JXQVJERUQgKi9cbiAgICAgIF06IFwiRk9SV0FSREVEXCJcbiAgICB9O1xuICAgIHZhciBHTE9CQUxTX1dISVRFX0xJU1RFRCA9IFwiSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTixwYXJzZUZsb2F0LHBhcnNlSW50LGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLGVuY29kZVVSSUNvbXBvbmVudCxNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsQmlnSW50XCI7XG4gICAgdmFyIGlzR2xvYmFsbHlXaGl0ZWxpc3RlZCA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKEdMT0JBTFNfV0hJVEVfTElTVEVEKTtcbiAgICB2YXIgcmFuZ2UgPSAyO1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29kZUZyYW1lKHNvdXJjZSwgc3RhcnQyID0gMCwgZW5kID0gc291cmNlLmxlbmd0aCkge1xuICAgICAgbGV0IGxpbmVzID0gc291cmNlLnNwbGl0KC8oXFxyP1xcbikvKTtcbiAgICAgIGNvbnN0IG5ld2xpbmVTZXF1ZW5jZXMgPSBsaW5lcy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICUgMiA9PT0gMSk7XG4gICAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggJSAyID09PSAwKTtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY291bnQgKz0gbGluZXNbaV0ubGVuZ3RoICsgKG5ld2xpbmVTZXF1ZW5jZXNbaV0gJiYgbmV3bGluZVNlcXVlbmNlc1tpXS5sZW5ndGggfHwgMCk7XG4gICAgICAgIGlmIChjb3VudCA+PSBzdGFydDIpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gaSAtIHJhbmdlOyBqIDw9IGkgKyByYW5nZSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaiA8IDAgfHwgaiA+PSBsaW5lcy5sZW5ndGgpXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IGogKyAxO1xuICAgICAgICAgICAgcmVzLnB1c2goYCR7bGluZX0ke1wiIFwiLnJlcGVhdChNYXRoLm1heCgzIC0gU3RyaW5nKGxpbmUpLmxlbmd0aCwgMCkpfXwgICR7bGluZXNbal19YCk7XG4gICAgICAgICAgICBjb25zdCBsaW5lTGVuZ3RoID0gbGluZXNbal0ubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgbmV3TGluZVNlcUxlbmd0aCA9IG5ld2xpbmVTZXF1ZW5jZXNbal0gJiYgbmV3bGluZVNlcXVlbmNlc1tqXS5sZW5ndGggfHwgMDtcbiAgICAgICAgICAgIGlmIChqID09PSBpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhZCA9IHN0YXJ0MiAtIChjb3VudCAtIChsaW5lTGVuZ3RoICsgbmV3TGluZVNlcUxlbmd0aCkpO1xuICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heCgxLCBlbmQgPiBjb3VudCA/IGxpbmVMZW5ndGggLSBwYWQgOiBlbmQgLSBzdGFydDIpO1xuICAgICAgICAgICAgICByZXMucHVzaChgICAgfCAgYCArIFwiIFwiLnJlcGVhdChwYWQpICsgXCJeXCIucmVwZWF0KGxlbmd0aCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqID4gaSkge1xuICAgICAgICAgICAgICBpZiAoZW5kID4gY291bnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChNYXRoLm1pbihlbmQgLSBjb3VudCwgbGluZUxlbmd0aCksIDEpO1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGAgICB8ICBgICsgXCJeXCIucmVwZWF0KGxlbmd0aCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvdW50ICs9IGxpbmVMZW5ndGggKyBuZXdMaW5lU2VxTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICB2YXIgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xuICAgIHZhciBpc1NwZWNpYWxCb29sZWFuQXR0ciA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKHNwZWNpYWxCb29sZWFuQXR0cnMpO1xuICAgIHZhciBpc0Jvb2xlYW5BdHRyMiA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKHNwZWNpYWxCb29sZWFuQXR0cnMgKyBgLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjb250cm9scyxkZWZhdWx0LGRlZmVyLGRpc2FibGVkLGhpZGRlbixsb29wLG9wZW4scmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLGNoZWNrZWQsbXV0ZWQsbXVsdGlwbGUsc2VsZWN0ZWRgKTtcbiAgICB2YXIgdW5zYWZlQXR0ckNoYXJSRSA9IC9bPi89XCInXFx1MDAwOVxcdTAwMGFcXHUwMDBjXFx1MDAyMF0vO1xuICAgIHZhciBhdHRyVmFsaWRhdGlvbkNhY2hlID0ge307XG4gICAgZnVuY3Rpb24gaXNTU1JTYWZlQXR0ck5hbWUobmFtZSkge1xuICAgICAgaWYgKGF0dHJWYWxpZGF0aW9uQ2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJWYWxpZGF0aW9uQ2FjaGVbbmFtZV07XG4gICAgICB9XG4gICAgICBjb25zdCBpc1Vuc2FmZSA9IHVuc2FmZUF0dHJDaGFyUkUudGVzdChuYW1lKTtcbiAgICAgIGlmIChpc1Vuc2FmZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGB1bnNhZmUgYXR0cmlidXRlIG5hbWU6ICR7bmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyVmFsaWRhdGlvbkNhY2hlW25hbWVdID0gIWlzVW5zYWZlO1xuICAgIH1cbiAgICB2YXIgcHJvcHNUb0F0dHJNYXAgPSB7XG4gICAgICBhY2NlcHRDaGFyc2V0OiBcImFjY2VwdC1jaGFyc2V0XCIsXG4gICAgICBjbGFzc05hbWU6IFwiY2xhc3NcIixcbiAgICAgIGh0bWxGb3I6IFwiZm9yXCIsXG4gICAgICBodHRwRXF1aXY6IFwiaHR0cC1lcXVpdlwiXG4gICAgfTtcbiAgICB2YXIgaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsYm9yZGVyLWltYWdlLW91dHNldCxib3JkZXItaW1hZ2Utc2xpY2UsYm9yZGVyLWltYWdlLXdpZHRoLGJveC1mbGV4LGJveC1mbGV4LWdyb3VwLGJveC1vcmRpbmFsLWdyb3VwLGNvbHVtbi1jb3VudCxjb2x1bW5zLGZsZXgsZmxleC1ncm93LGZsZXgtcG9zaXRpdmUsZmxleC1zaHJpbmssZmxleC1uZWdhdGl2ZSxmbGV4LW9yZGVyLGdyaWQtcm93LGdyaWQtcm93LWVuZCxncmlkLXJvdy1zcGFuLGdyaWQtcm93LXN0YXJ0LGdyaWQtY29sdW1uLGdyaWQtY29sdW1uLWVuZCxncmlkLWNvbHVtbi1zcGFuLGdyaWQtY29sdW1uLXN0YXJ0LGZvbnQtd2VpZ2h0LGxpbmUtY2xhbXAsbGluZS1oZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYi1zaXplLHdpZG93cyx6LWluZGV4LHpvb20sZmlsbC1vcGFjaXR5LGZsb29kLW9wYWNpdHksc3RvcC1vcGFjaXR5LHN0cm9rZS1kYXNoYXJyYXksc3Ryb2tlLWRhc2hvZmZzZXQsc3Ryb2tlLW1pdGVybGltaXQsc3Ryb2tlLW9wYWNpdHksc3Ryb2tlLXdpZHRoYCk7XG4gICAgdmFyIGlzS25vd25BdHRyID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYGFjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsbG93LGFsdCxhc3luYyxhdXRvY2FwaXRhbGl6ZSxhdXRvY29tcGxldGUsYXV0b2ZvY3VzLGF1dG9wbGF5LGJhY2tncm91bmQsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2FwdHVyZSxjaGFsbGVuZ2UsY2hhcnNldCxjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGNyb3Nzb3JpZ2luLGNzcCxkYXRhLGRhdGV0aW1lLGRlY29kaW5nLGRlZmF1bHQsZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsZW50ZXJrZXloaW50LGZvcixmb3JtLGZvcm1hY3Rpb24sZm9ybWVuY3R5cGUsZm9ybW1ldGhvZCxmb3Jtbm92YWxpZGF0ZSxmb3JtdGFyZ2V0LGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixoaWdoLGhyZWYsaHJlZmxhbmcsaHR0cC1lcXVpdixpY29uLGlkLGltcG9ydGFuY2UsaW50ZWdyaXR5LGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxvYWRpbmcsbGlzdCxsb29wLGxvdyxtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1pbmxlbmd0aCxtZWRpYSxtaW4sbXVsdGlwbGUsbXV0ZWQsbmFtZSxub3ZhbGlkYXRlLG9wZW4sb3B0aW11bSxwYXR0ZXJuLHBpbmcscGxhY2Vob2xkZXIscG9zdGVyLHByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWZlcnJlcnBvbGljeSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsc2NvcGUsc2NvcGVkLHNlbGVjdGVkLHNoYXBlLHNpemUsc2l6ZXMsc2xvdCxzcGFuLHNwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsdGFyZ2V0LHRpdGxlLHRyYW5zbGF0ZSx0eXBlLHVzZW1hcCx2YWx1ZSx3aWR0aCx3cmFwYCk7XG4gICAgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGUodmFsdWUpIHtcbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCByZXMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU3R5bGUoaXNTdHJpbmcoaXRlbSkgPyBwYXJzZVN0cmluZ1N0eWxlKGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgaWYgKG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgICAgICAgcmVzW2tleV0gPSBub3JtYWxpemVkW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBsaXN0RGVsaW1pdGVyUkUgPSAvOyg/IVteKF0qXFwpKS9nO1xuICAgIHZhciBwcm9wZXJ0eURlbGltaXRlclJFID0gLzooLispLztcbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZ1N0eWxlKGNzc1RleHQpIHtcbiAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyUkUpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICBjb25zdCB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyUkUpO1xuICAgICAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXRbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdHJpbmdpZnlTdHlsZShzdHlsZXMpIHtcbiAgICAgIGxldCByZXQgPSBcIlwiO1xuICAgICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkS2V5ID0ga2V5LnN0YXJ0c1dpdGgoYC0tYCkgPyBrZXkgOiBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaXNOb1VuaXROdW1lcmljU3R5bGVQcm9wKG5vcm1hbGl6ZWRLZXkpKSB7XG4gICAgICAgICAgcmV0ICs9IGAke25vcm1hbGl6ZWRLZXl9OiR7dmFsdWV9O2A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUNsYXNzKHZhbHVlKSB7XG4gICAgICBsZXQgcmVzID0gXCJcIjtcbiAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmVzID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplQ2xhc3ModmFsdWVbaV0pO1xuICAgICAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgICAgICByZXMgKz0gbm9ybWFsaXplZCArIFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlW25hbWVdKSB7XG4gICAgICAgICAgICByZXMgKz0gbmFtZSArIFwiIFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy50cmltKCk7XG4gICAgfVxuICAgIHZhciBIVE1MX1RBR1MgPSBcImh0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLGFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbixkaXYsZGQsZGwsZHQsZmlnY2FwdGlvbixmaWd1cmUscGljdHVyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCxhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsc3VtbWFyeSx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiO1xuICAgIHZhciBTVkdfVEFHUyA9IFwic3ZnLGFuaW1hdGUsYW5pbWF0ZU1vdGlvbixhbmltYXRlVHJhbnNmb3JtLGNpcmNsZSxjbGlwUGF0aCxjb2xvci1wcm9maWxlLGRlZnMsZGVzYyxkaXNjYXJkLGVsbGlwc2UsZmVCbGVuZCxmZUNvbG9yTWF0cml4LGZlQ29tcG9uZW50VHJhbnNmZXIsZmVDb21wb3NpdGUsZmVDb252b2x2ZU1hdHJpeCxmZURpZmZ1c2VMaWdodGluZyxmZURpc3BsYWNlbWVudE1hcCxmZURpc3RhbmNlTGlnaHQsZmVEcm9wU2hhZG93LGZlRmxvb2QsZmVGdW5jQSxmZUZ1bmNCLGZlRnVuY0csZmVGdW5jUixmZUdhdXNzaWFuQmx1cixmZUltYWdlLGZlTWVyZ2UsZmVNZXJnZU5vZGUsZmVNb3JwaG9sb2d5LGZlT2Zmc2V0LGZlUG9pbnRMaWdodCxmZVNwZWN1bGFyTGlnaHRpbmcsZmVTcG90TGlnaHQsZmVUaWxlLGZlVHVyYnVsZW5jZSxmaWx0ZXIsZm9yZWlnbk9iamVjdCxnLGhhdGNoLGhhdGNocGF0aCxpbWFnZSxsaW5lLGxpbmVhckdyYWRpZW50LG1hcmtlcixtYXNrLG1lc2gsbWVzaGdyYWRpZW50LG1lc2hwYXRjaCxtZXNocm93LG1ldGFkYXRhLG1wYXRoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJhZGlhbEdyYWRpZW50LHJlY3Qsc2V0LHNvbGlkY29sb3Isc3RvcCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dFBhdGgsdGl0bGUsdHNwYW4sdW5rbm93bix1c2Usdmlld1wiO1xuICAgIHZhciBWT0lEX1RBR1MgPSBcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsaHIsaW1nLGlucHV0LGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCI7XG4gICAgdmFyIGlzSFRNTFRhZyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKEhUTUxfVEFHUyk7XG4gICAgdmFyIGlzU1ZHVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoU1ZHX1RBR1MpO1xuICAgIHZhciBpc1ZvaWRUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChWT0lEX1RBR1MpO1xuICAgIHZhciBlc2NhcGVSRSA9IC9bXCInJjw+XS87XG4gICAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgICAgIGNvbnN0IHN0ciA9IFwiXCIgKyBzdHJpbmc7XG4gICAgICBjb25zdCBtYXRjaCA9IGVzY2FwZVJFLmV4ZWMoc3RyKTtcbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICAgIGxldCBodG1sID0gXCJcIjtcbiAgICAgIGxldCBlc2NhcGVkO1xuICAgICAgbGV0IGluZGV4O1xuICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBlc2NhcGVkID0gXCImcXVvdDtcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICBlc2NhcGVkID0gXCImYW1wO1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgIGVzY2FwZWQgPSBcIiYjMzk7XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgZXNjYXBlZCA9IFwiJmx0O1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgIGVzY2FwZWQgPSBcIiZndDtcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIGh0bWwgKz0gZXNjYXBlZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xuICAgIH1cbiAgICB2YXIgY29tbWVudFN0cmlwUkUgPSAvXi0/Pnw8IS0tfC0tPnwtLSE+fDwhLSQvZztcbiAgICBmdW5jdGlvbiBlc2NhcGVIdG1sQ29tbWVudChzcmMpIHtcbiAgICAgIHJldHVybiBzcmMucmVwbGFjZShjb21tZW50U3RyaXBSRSwgXCJcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvb3NlQ29tcGFyZUFycmF5cyhhLCBiKSB7XG4gICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBsZXQgZXF1YWwgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGVxdWFsICYmIGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVxdWFsID0gbG9vc2VFcXVhbChhW2ldLCBiW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcXVhbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9vc2VFcXVhbChhLCBiKSB7XG4gICAgICBpZiAoYSA9PT0gYilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBsZXQgYVZhbGlkVHlwZSA9IGlzRGF0ZShhKTtcbiAgICAgIGxldCBiVmFsaWRUeXBlID0gaXNEYXRlKGIpO1xuICAgICAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgICAgICByZXR1cm4gYVZhbGlkVHlwZSAmJiBiVmFsaWRUeXBlID8gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpIDogZmFsc2U7XG4gICAgICB9XG4gICAgICBhVmFsaWRUeXBlID0gaXNBcnJheShhKTtcbiAgICAgIGJWYWxpZFR5cGUgPSBpc0FycmF5KGIpO1xuICAgICAgaWYgKGFWYWxpZFR5cGUgfHwgYlZhbGlkVHlwZSkge1xuICAgICAgICByZXR1cm4gYVZhbGlkVHlwZSAmJiBiVmFsaWRUeXBlID8gbG9vc2VDb21wYXJlQXJyYXlzKGEsIGIpIDogZmFsc2U7XG4gICAgICB9XG4gICAgICBhVmFsaWRUeXBlID0gaXNPYmplY3QoYSk7XG4gICAgICBiVmFsaWRUeXBlID0gaXNPYmplY3QoYik7XG4gICAgICBpZiAoYVZhbGlkVHlwZSB8fCBiVmFsaWRUeXBlKSB7XG4gICAgICAgIGlmICghYVZhbGlkVHlwZSB8fCAhYlZhbGlkVHlwZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhS2V5c0NvdW50ID0gT2JqZWN0LmtleXMoYSkubGVuZ3RoO1xuICAgICAgICBjb25zdCBiS2V5c0NvdW50ID0gT2JqZWN0LmtleXMoYikubGVuZ3RoO1xuICAgICAgICBpZiAoYUtleXNDb3VudCAhPT0gYktleXNDb3VudCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhKSB7XG4gICAgICAgICAgY29uc3QgYUhhc0tleSA9IGEuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgICAgICBjb25zdCBiSGFzS2V5ID0gYi5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgICAgIGlmIChhSGFzS2V5ICYmICFiSGFzS2V5IHx8ICFhSGFzS2V5ICYmIGJIYXNLZXkgfHwgIWxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvb3NlSW5kZXhPZihhcnIsIHZhbCkge1xuICAgICAgcmV0dXJuIGFyci5maW5kSW5kZXgoKGl0ZW0pID0+IGxvb3NlRXF1YWwoaXRlbSwgdmFsKSk7XG4gICAgfVxuICAgIHZhciB0b0Rpc3BsYXlTdHJpbmcgPSAodmFsKSA9PiB7XG4gICAgICByZXR1cm4gdmFsID09IG51bGwgPyBcIlwiIDogaXNPYmplY3QodmFsKSA/IEpTT04uc3RyaW5naWZ5KHZhbCwgcmVwbGFjZXIsIDIpIDogU3RyaW5nKHZhbCk7XG4gICAgfTtcbiAgICB2YXIgcmVwbGFjZXIgPSAoX2tleSwgdmFsKSA9PiB7XG4gICAgICBpZiAoaXNNYXAodmFsKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgTWFwKCR7dmFsLnNpemV9KWBdOiBbLi4udmFsLmVudHJpZXMoKV0ucmVkdWNlKChlbnRyaWVzLCBba2V5LCB2YWwyXSkgPT4ge1xuICAgICAgICAgICAgZW50cmllc1tgJHtrZXl9ID0+YF0gPSB2YWwyO1xuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgICAgICAgfSwge30pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGlzU2V0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYFNldCgke3ZhbC5zaXplfSlgXTogWy4uLnZhbC52YWx1ZXMoKV1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSAmJiAhaXNBcnJheSh2YWwpICYmICFpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuICAgIHZhciBiYWJlbFBhcnNlckRlZmF1bHRQbHVnaW5zID0gW1xuICAgICAgXCJiaWdJbnRcIixcbiAgICAgIFwib3B0aW9uYWxDaGFpbmluZ1wiLFxuICAgICAgXCJudWxsaXNoQ29hbGVzY2luZ09wZXJhdG9yXCJcbiAgICBdO1xuICAgIHZhciBFTVBUWV9PQkogPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgRU1QVFlfQVJSID0gT2JqZWN0LmZyZWV6ZShbXSk7XG4gICAgdmFyIE5PT1AgPSAoKSA9PiB7XG4gICAgfTtcbiAgICB2YXIgTk8gPSAoKSA9PiBmYWxzZTtcbiAgICB2YXIgb25SRSA9IC9eb25bXmEtel0vO1xuICAgIHZhciBpc09uID0gKGtleSkgPT4gb25SRS50ZXN0KGtleSk7XG4gICAgdmFyIGlzTW9kZWxMaXN0ZW5lciA9IChrZXkpID0+IGtleS5zdGFydHNXaXRoKFwib25VcGRhdGU6XCIpO1xuICAgIHZhciBleHRlbmQgPSBPYmplY3QuYXNzaWduO1xuICAgIHZhciByZW1vdmUgPSAoYXJyLCBlbCkgPT4ge1xuICAgICAgY29uc3QgaSA9IGFyci5pbmRleE9mKGVsKTtcbiAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gICAgdmFyIGhhc093biA9ICh2YWwsIGtleSkgPT4gaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSk7XG4gICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIHZhciBpc01hcCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgTWFwXVwiO1xuICAgIHZhciBpc1NldCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgU2V0XVwiO1xuICAgIHZhciBpc0RhdGUgPSAodmFsKSA9PiB2YWwgaW5zdGFuY2VvZiBEYXRlO1xuICAgIHZhciBpc0Z1bmN0aW9uID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiO1xuICAgIHZhciBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG4gICAgdmFyIGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbiAgICB2YXIgaXNPYmplY3QgPSAodmFsKSA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIjtcbiAgICB2YXIgaXNQcm9taXNlID0gKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwudGhlbikgJiYgaXNGdW5jdGlvbih2YWwuY2F0Y2gpO1xuICAgIH07XG4gICAgdmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICB2YXIgdG9SYXdUeXBlID0gKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgfTtcbiAgICB2YXIgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuICAgIHZhciBpc0ludGVnZXJLZXkgPSAoa2V5KSA9PiBpc1N0cmluZyhrZXkpICYmIGtleSAhPT0gXCJOYU5cIiAmJiBrZXlbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChrZXksIDEwKSA9PT0ga2V5O1xuICAgIHZhciBpc1Jlc2VydmVkUHJvcCA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFxuICAgICAgLy8gdGhlIGxlYWRpbmcgY29tbWEgaXMgaW50ZW50aW9uYWwgc28gZW1wdHkgc3RyaW5nIFwiXCIgaXMgYWxzbyBpbmNsdWRlZFxuICAgICAgXCIsa2V5LHJlZixvblZub2RlQmVmb3JlTW91bnQsb25Wbm9kZU1vdW50ZWQsb25Wbm9kZUJlZm9yZVVwZGF0ZSxvblZub2RlVXBkYXRlZCxvblZub2RlQmVmb3JlVW5tb3VudCxvblZub2RlVW5tb3VudGVkXCJcbiAgICApO1xuICAgIHZhciBjYWNoZVN0cmluZ0Z1bmN0aW9uID0gKGZuKSA9PiB7XG4gICAgICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIChzdHIpID0+IHtcbiAgICAgICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcbiAgICAgICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xuICAgIHZhciBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCJcIik7XG4gICAgfSk7XG4gICAgdmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbiAgICB2YXIgaHlwaGVuYXRlID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgdmFyIGNhcGl0YWxpemUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKSk7XG4gICAgdmFyIHRvSGFuZGxlcktleSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyID8gYG9uJHtjYXBpdGFsaXplKHN0cil9YCA6IGBgKTtcbiAgICB2YXIgaGFzQ2hhbmdlZCA9ICh2YWx1ZSwgb2xkVmFsdWUpID0+IHZhbHVlICE9PSBvbGRWYWx1ZSAmJiAodmFsdWUgPT09IHZhbHVlIHx8IG9sZFZhbHVlID09PSBvbGRWYWx1ZSk7XG4gICAgdmFyIGludm9rZUFycmF5Rm5zID0gKGZucywgYXJnKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbnNbaV0oYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBkZWYgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIHRvTnVtYmVyID0gKHZhbCkgPT4ge1xuICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgIHJldHVybiBpc05hTihuKSA/IHZhbCA6IG47XG4gICAgfTtcbiAgICB2YXIgX2dsb2JhbFRoaXM7XG4gICAgdmFyIGdldEdsb2JhbFRoaXMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gX2dsb2JhbFRoaXMgfHwgKF9nbG9iYWxUaGlzID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG4gICAgfTtcbiAgICBleHBvcnRzLkVNUFRZX0FSUiA9IEVNUFRZX0FSUjtcbiAgICBleHBvcnRzLkVNUFRZX09CSiA9IEVNUFRZX09CSjtcbiAgICBleHBvcnRzLk5PID0gTk87XG4gICAgZXhwb3J0cy5OT09QID0gTk9PUDtcbiAgICBleHBvcnRzLlBhdGNoRmxhZ05hbWVzID0gUGF0Y2hGbGFnTmFtZXM7XG4gICAgZXhwb3J0cy5iYWJlbFBhcnNlckRlZmF1bHRQbHVnaW5zID0gYmFiZWxQYXJzZXJEZWZhdWx0UGx1Z2lucztcbiAgICBleHBvcnRzLmNhbWVsaXplID0gY2FtZWxpemU7XG4gICAgZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbiAgICBleHBvcnRzLmRlZiA9IGRlZjtcbiAgICBleHBvcnRzLmVzY2FwZUh0bWwgPSBlc2NhcGVIdG1sO1xuICAgIGV4cG9ydHMuZXNjYXBlSHRtbENvbW1lbnQgPSBlc2NhcGVIdG1sQ29tbWVudDtcbiAgICBleHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbiAgICBleHBvcnRzLmdlbmVyYXRlQ29kZUZyYW1lID0gZ2VuZXJhdGVDb2RlRnJhbWU7XG4gICAgZXhwb3J0cy5nZXRHbG9iYWxUaGlzID0gZ2V0R2xvYmFsVGhpcztcbiAgICBleHBvcnRzLmhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkO1xuICAgIGV4cG9ydHMuaGFzT3duID0gaGFzT3duO1xuICAgIGV4cG9ydHMuaHlwaGVuYXRlID0gaHlwaGVuYXRlO1xuICAgIGV4cG9ydHMuaW52b2tlQXJyYXlGbnMgPSBpbnZva2VBcnJheUZucztcbiAgICBleHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuICAgIGV4cG9ydHMuaXNCb29sZWFuQXR0ciA9IGlzQm9vbGVhbkF0dHIyO1xuICAgIGV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuICAgIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4gICAgZXhwb3J0cy5pc0dsb2JhbGx5V2hpdGVsaXN0ZWQgPSBpc0dsb2JhbGx5V2hpdGVsaXN0ZWQ7XG4gICAgZXhwb3J0cy5pc0hUTUxUYWcgPSBpc0hUTUxUYWc7XG4gICAgZXhwb3J0cy5pc0ludGVnZXJLZXkgPSBpc0ludGVnZXJLZXk7XG4gICAgZXhwb3J0cy5pc0tub3duQXR0ciA9IGlzS25vd25BdHRyO1xuICAgIGV4cG9ydHMuaXNNYXAgPSBpc01hcDtcbiAgICBleHBvcnRzLmlzTW9kZWxMaXN0ZW5lciA9IGlzTW9kZWxMaXN0ZW5lcjtcbiAgICBleHBvcnRzLmlzTm9Vbml0TnVtZXJpY1N0eWxlUHJvcCA9IGlzTm9Vbml0TnVtZXJpY1N0eWxlUHJvcDtcbiAgICBleHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4gICAgZXhwb3J0cy5pc09uID0gaXNPbjtcbiAgICBleHBvcnRzLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0O1xuICAgIGV4cG9ydHMuaXNQcm9taXNlID0gaXNQcm9taXNlO1xuICAgIGV4cG9ydHMuaXNSZXNlcnZlZFByb3AgPSBpc1Jlc2VydmVkUHJvcDtcbiAgICBleHBvcnRzLmlzU1NSU2FmZUF0dHJOYW1lID0gaXNTU1JTYWZlQXR0ck5hbWU7XG4gICAgZXhwb3J0cy5pc1NWR1RhZyA9IGlzU1ZHVGFnO1xuICAgIGV4cG9ydHMuaXNTZXQgPSBpc1NldDtcbiAgICBleHBvcnRzLmlzU3BlY2lhbEJvb2xlYW5BdHRyID0gaXNTcGVjaWFsQm9vbGVhbkF0dHI7XG4gICAgZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuICAgIGV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcbiAgICBleHBvcnRzLmlzVm9pZFRhZyA9IGlzVm9pZFRhZztcbiAgICBleHBvcnRzLmxvb3NlRXF1YWwgPSBsb29zZUVxdWFsO1xuICAgIGV4cG9ydHMubG9vc2VJbmRleE9mID0gbG9vc2VJbmRleE9mO1xuICAgIGV4cG9ydHMubWFrZU1hcCA9IG1ha2VNYXA7XG4gICAgZXhwb3J0cy5ub3JtYWxpemVDbGFzcyA9IG5vcm1hbGl6ZUNsYXNzO1xuICAgIGV4cG9ydHMubm9ybWFsaXplU3R5bGUgPSBub3JtYWxpemVTdHlsZTtcbiAgICBleHBvcnRzLm9iamVjdFRvU3RyaW5nID0gb2JqZWN0VG9TdHJpbmc7XG4gICAgZXhwb3J0cy5wYXJzZVN0cmluZ1N0eWxlID0gcGFyc2VTdHJpbmdTdHlsZTtcbiAgICBleHBvcnRzLnByb3BzVG9BdHRyTWFwID0gcHJvcHNUb0F0dHJNYXA7XG4gICAgZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4gICAgZXhwb3J0cy5zbG90RmxhZ3NUZXh0ID0gc2xvdEZsYWdzVGV4dDtcbiAgICBleHBvcnRzLnN0cmluZ2lmeVN0eWxlID0gc3RyaW5naWZ5U3R5bGU7XG4gICAgZXhwb3J0cy50b0Rpc3BsYXlTdHJpbmcgPSB0b0Rpc3BsYXlTdHJpbmc7XG4gICAgZXhwb3J0cy50b0hhbmRsZXJLZXkgPSB0b0hhbmRsZXJLZXk7XG4gICAgZXhwb3J0cy50b051bWJlciA9IHRvTnVtYmVyO1xuICAgIGV4cG9ydHMudG9SYXdUeXBlID0gdG9SYXdUeXBlO1xuICAgIGV4cG9ydHMudG9UeXBlU3RyaW5nID0gdG9UeXBlU3RyaW5nO1xuICB9XG59KTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvc2hhcmVkL2luZGV4LmpzXG52YXIgcmVxdWlyZV9zaGFyZWQgPSBfX2NvbW1vbkpTKHtcbiAgXCJub2RlX21vZHVsZXMvQHZ1ZS9zaGFyZWQvaW5kZXguanNcIihleHBvcnRzLCBtb2R1bGUyKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICBtb2R1bGUyLmV4cG9ydHMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2R1bGUyLmV4cG9ydHMgPSByZXF1aXJlX3NoYXJlZF9janMoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2Rpc3QvcmVhY3Rpdml0eS5janMuanNcbnZhciByZXF1aXJlX3JlYWN0aXZpdHlfY2pzID0gX19jb21tb25KUyh7XG4gIFwibm9kZV9tb2R1bGVzL0B2dWUvcmVhY3Rpdml0eS9kaXN0L3JlYWN0aXZpdHkuY2pzLmpzXCIoZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgc2hhcmVkID0gcmVxdWlyZV9zaGFyZWQoKTtcbiAgICB2YXIgdGFyZ2V0TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gICAgdmFyIGVmZmVjdFN0YWNrID0gW107XG4gICAgdmFyIGFjdGl2ZUVmZmVjdDtcbiAgICB2YXIgSVRFUkFURV9LRVkgPSBTeW1ib2woXCJpdGVyYXRlXCIpO1xuICAgIHZhciBNQVBfS0VZX0lURVJBVEVfS0VZID0gU3ltYm9sKFwiTWFwIGtleSBpdGVyYXRlXCIpO1xuICAgIGZ1bmN0aW9uIGlzRWZmZWN0KGZuKSB7XG4gICAgICByZXR1cm4gZm4gJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlZmZlY3QzKGZuLCBvcHRpb25zID0gc2hhcmVkLkVNUFRZX09CSikge1xuICAgICAgaWYgKGlzRWZmZWN0KGZuKSkge1xuICAgICAgICBmbiA9IGZuLnJhdztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVmZmVjdDQgPSBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucyk7XG4gICAgICBpZiAoIW9wdGlvbnMubGF6eSkge1xuICAgICAgICBlZmZlY3Q0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWZmZWN0NDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcDIoZWZmZWN0NCkge1xuICAgICAgaWYgKGVmZmVjdDQuYWN0aXZlKSB7XG4gICAgICAgIGNsZWFudXAoZWZmZWN0NCk7XG4gICAgICAgIGlmIChlZmZlY3Q0Lm9wdGlvbnMub25TdG9wKSB7XG4gICAgICAgICAgZWZmZWN0NC5vcHRpb25zLm9uU3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVmZmVjdDQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlRWZmZWN0KGZuLCBvcHRpb25zKSB7XG4gICAgICBjb25zdCBlZmZlY3Q0ID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoKSB7XG4gICAgICAgIGlmICghZWZmZWN0NC5hY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdDQpKSB7XG4gICAgICAgICAgY2xlYW51cChlZmZlY3Q0KTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5hYmxlVHJhY2tpbmcoKTtcbiAgICAgICAgICAgIGVmZmVjdFN0YWNrLnB1c2goZWZmZWN0NCk7XG4gICAgICAgICAgICBhY3RpdmVFZmZlY3QgPSBlZmZlY3Q0O1xuICAgICAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGVmZmVjdFN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0U3RhY2tbZWZmZWN0U3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZWZmZWN0NC5pZCA9IHVpZCsrO1xuICAgICAgZWZmZWN0NC5hbGxvd1JlY3Vyc2UgPSAhIW9wdGlvbnMuYWxsb3dSZWN1cnNlO1xuICAgICAgZWZmZWN0NC5faXNFZmZlY3QgPSB0cnVlO1xuICAgICAgZWZmZWN0NC5hY3RpdmUgPSB0cnVlO1xuICAgICAgZWZmZWN0NC5yYXcgPSBmbjtcbiAgICAgIGVmZmVjdDQuZGVwcyA9IFtdO1xuICAgICAgZWZmZWN0NC5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHJldHVybiBlZmZlY3Q0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhbnVwKGVmZmVjdDQpIHtcbiAgICAgIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0NDtcbiAgICAgIGlmIChkZXBzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXBzW2ldLmRlbGV0ZShlZmZlY3Q0KTtcbiAgICAgICAgfVxuICAgICAgICBkZXBzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzaG91bGRUcmFjayA9IHRydWU7XG4gICAgdmFyIHRyYWNrU3RhY2sgPSBbXTtcbiAgICBmdW5jdGlvbiBwYXVzZVRyYWNraW5nKCkge1xuICAgICAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgICAgIHNob3VsZFRyYWNrID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVuYWJsZVRyYWNraW5nKCkge1xuICAgICAgdHJhY2tTdGFjay5wdXNoKHNob3VsZFRyYWNrKTtcbiAgICAgIHNob3VsZFRyYWNrID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRUcmFja2luZygpIHtcbiAgICAgIGNvbnN0IGxhc3QgPSB0cmFja1N0YWNrLnBvcCgpO1xuICAgICAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhY2sodGFyZ2V0LCB0eXBlLCBrZXkpIHtcbiAgICAgIGlmICghc2hvdWxkVHJhY2sgfHwgYWN0aXZlRWZmZWN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWRlcHNNYXApIHtcbiAgICAgICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIGRlcHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICAgIH1cbiAgICAgIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkpO1xuICAgICAgaWYgKCFkZXApIHtcbiAgICAgICAgZGVwc01hcC5zZXQoa2V5LCBkZXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpKTtcbiAgICAgIH1cbiAgICAgIGlmICghZGVwLmhhcyhhY3RpdmVFZmZlY3QpKSB7XG4gICAgICAgIGRlcC5hZGQoYWN0aXZlRWZmZWN0KTtcbiAgICAgICAgYWN0aXZlRWZmZWN0LmRlcHMucHVzaChkZXApO1xuICAgICAgICBpZiAoYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xuICAgICAgICAgIGFjdGl2ZUVmZmVjdC5vcHRpb25zLm9uVHJhY2soe1xuICAgICAgICAgICAgZWZmZWN0OiBhY3RpdmVFZmZlY3QsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAga2V5XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpZ2dlcih0YXJnZXQsIHR5cGUsIGtleSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBvbGRUYXJnZXQpIHtcbiAgICAgIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWRlcHNNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWZmZWN0cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gICAgICBjb25zdCBhZGQyID0gKGVmZmVjdHNUb0FkZCkgPT4ge1xuICAgICAgICBpZiAoZWZmZWN0c1RvQWRkKSB7XG4gICAgICAgICAgZWZmZWN0c1RvQWRkLmZvckVhY2goKGVmZmVjdDQpID0+IHtcbiAgICAgICAgICAgIGlmIChlZmZlY3Q0ICE9PSBhY3RpdmVFZmZlY3QgfHwgZWZmZWN0NC5hbGxvd1JlY3Vyc2UpIHtcbiAgICAgICAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0NCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAodHlwZSA9PT0gXCJjbGVhclwiKSB7XG4gICAgICAgIGRlcHNNYXAuZm9yRWFjaChhZGQyKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImxlbmd0aFwiICYmIHNoYXJlZC5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgZGVwc01hcC5mb3JFYWNoKChkZXAsIGtleTIpID0+IHtcbiAgICAgICAgICBpZiAoa2V5MiA9PT0gXCJsZW5ndGhcIiB8fCBrZXkyID49IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBhZGQyKGRlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChrZXkgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgaWYgKCFzaGFyZWQuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgICAgaWYgKHNoYXJlZC5pc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcmVkLmlzSW50ZWdlcktleShrZXkpKSB7XG4gICAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoXCJsZW5ndGhcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgaWYgKCFzaGFyZWQuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICAgICAgaWYgKHNoYXJlZC5pc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgICAgIGlmIChzaGFyZWQuaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcnVuID0gKGVmZmVjdDQpID0+IHtcbiAgICAgICAgaWYgKGVmZmVjdDQub3B0aW9ucy5vblRyaWdnZXIpIHtcbiAgICAgICAgICBlZmZlY3Q0Lm9wdGlvbnMub25UcmlnZ2VyKHtcbiAgICAgICAgICAgIGVmZmVjdDogZWZmZWN0NCxcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICAgIG9sZFZhbHVlLFxuICAgICAgICAgICAgb2xkVGFyZ2V0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdDQub3B0aW9ucy5zY2hlZHVsZXIpIHtcbiAgICAgICAgICBlZmZlY3Q0Lm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdDQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVmZmVjdDQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGVmZmVjdHMuZm9yRWFjaChydW4pO1xuICAgIH1cbiAgICB2YXIgaXNOb25UcmFja2FibGVLZXlzID0gLyogQF9fUFVSRV9fICovIHNoYXJlZC5tYWtlTWFwKGBfX3Byb3RvX18sX192X2lzUmVmLF9faXNWdWVgKTtcbiAgICB2YXIgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkubWFwKChrZXkpID0+IFN5bWJvbFtrZXldKS5maWx0ZXIoc2hhcmVkLmlzU3ltYm9sKSk7XG4gICAgdmFyIGdldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKCk7XG4gICAgdmFyIHNoYWxsb3dHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKGZhbHNlLCB0cnVlKTtcbiAgICB2YXIgcmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUpO1xuICAgIHZhciBzaGFsbG93UmVhZG9ubHlHZXQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlR2V0dGVyKHRydWUsIHRydWUpO1xuICAgIHZhciBhcnJheUluc3RydW1lbnRhdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCk7XG4gICAgZnVuY3Rpb24gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCkge1xuICAgICAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IHt9O1xuICAgICAgW1wiaW5jbHVkZXNcIiwgXCJpbmRleE9mXCIsIFwibGFzdEluZGV4T2ZcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICBjb25zdCBhcnIgPSB0b1JhdzIodGhpcyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdHJhY2soYXJyLCBcImdldFwiLCBpICsgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlcyA9IGFycltrZXldKC4uLmFyZ3MpO1xuICAgICAgICAgIGlmIChyZXMgPT09IC0xIHx8IHJlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJba2V5XSguLi5hcmdzLm1hcCh0b1JhdzIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIFtcInB1c2hcIiwgXCJwb3BcIiwgXCJzaGlmdFwiLCBcInVuc2hpZnRcIiwgXCJzcGxpY2VcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICAgICAgY29uc3QgcmVzID0gdG9SYXcyKHRoaXMpW2tleV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnN0cnVtZW50YXRpb25zO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVHZXR0ZXIoaXNSZWFkb25seTIgPSBmYWxzZSwgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0Myh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFjdGl2ZVwiKSB7XG4gICAgICAgICAgcmV0dXJuICFpc1JlYWRvbmx5MjtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgICAgIHJldHVybiBpc1JlYWRvbmx5MjtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiICYmIHJlY2VpdmVyID09PSAoaXNSZWFkb25seTIgPyBzaGFsbG93ID8gc2hhbGxvd1JlYWRvbmx5TWFwIDogcmVhZG9ubHlNYXAgOiBzaGFsbG93ID8gc2hhbGxvd1JlYWN0aXZlTWFwIDogcmVhY3RpdmVNYXApLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXJnZXRJc0FycmF5ID0gc2hhcmVkLmlzQXJyYXkodGFyZ2V0KTtcbiAgICAgICAgaWYgKCFpc1JlYWRvbmx5MiAmJiB0YXJnZXRJc0FycmF5ICYmIHNoYXJlZC5oYXNPd24oYXJyYXlJbnN0cnVtZW50YXRpb25zLCBrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KGFycmF5SW5zdHJ1bWVudGF0aW9ucywga2V5LCByZWNlaXZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKTtcbiAgICAgICAgaWYgKHNoYXJlZC5pc1N5bWJvbChrZXkpID8gYnVpbHRJblN5bWJvbHMuaGFzKGtleSkgOiBpc05vblRyYWNrYWJsZUtleXMoa2V5KSkge1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1JlYWRvbmx5Mikge1xuICAgICAgICAgIHRyYWNrKHRhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhbGxvdykge1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVmKHJlcykpIHtcbiAgICAgICAgICBjb25zdCBzaG91bGRVbndyYXAgPSAhdGFyZ2V0SXNBcnJheSB8fCAhc2hhcmVkLmlzSW50ZWdlcktleShrZXkpO1xuICAgICAgICAgIHJldHVybiBzaG91bGRVbndyYXAgPyByZXMudmFsdWUgOiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXJlZC5pc09iamVjdChyZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIGlzUmVhZG9ubHkyID8gcmVhZG9ubHkocmVzKSA6IHJlYWN0aXZlMyhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgc2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIoKTtcbiAgICB2YXIgc2hhbGxvd1NldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVTZXR0ZXIodHJ1ZSk7XG4gICAgZnVuY3Rpb24gY3JlYXRlU2V0dGVyKHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldDModGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKCFzaGFsbG93KSB7XG4gICAgICAgICAgdmFsdWUgPSB0b1JhdzIodmFsdWUpO1xuICAgICAgICAgIG9sZFZhbHVlID0gdG9SYXcyKG9sZFZhbHVlKTtcbiAgICAgICAgICBpZiAoIXNoYXJlZC5pc0FycmF5KHRhcmdldCkgJiYgaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFkS2V5ID0gc2hhcmVkLmlzQXJyYXkodGFyZ2V0KSAmJiBzaGFyZWQuaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBzaGFyZWQuaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRvUmF3MihyZWNlaXZlcikpIHtcbiAgICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcmVkLmhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgICBjb25zdCBoYWRLZXkgPSBzaGFyZWQuaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICAgIGlmIChyZXN1bHQgJiYgaGFkS2V5KSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSk7XG4gICAgICBpZiAoIXNoYXJlZC5pc1N5bWJvbChrZXkpIHx8ICFidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xuICAgICAgICB0cmFjayh0YXJnZXQsIFwiaGFzXCIsIGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvd25LZXlzKHRhcmdldCkge1xuICAgICAgdHJhY2sodGFyZ2V0LCBcIml0ZXJhdGVcIiwgc2hhcmVkLmlzQXJyYXkodGFyZ2V0KSA/IFwibGVuZ3RoXCIgOiBJVEVSQVRFX0tFWSk7XG4gICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBtdXRhYmxlSGFuZGxlcnMgPSB7XG4gICAgICBnZXQ6IGdldDIsXG4gICAgICBzZXQ6IHNldDIsXG4gICAgICBkZWxldGVQcm9wZXJ0eSxcbiAgICAgIGhhcyxcbiAgICAgIG93bktleXNcbiAgICB9O1xuICAgIHZhciByZWFkb25seUhhbmRsZXJzID0ge1xuICAgICAgZ2V0OiByZWFkb25seUdldCxcbiAgICAgIHNldCh0YXJnZXQsIGtleSkge1xuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBTZXQgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBEZWxldGUgb3BlcmF0aW9uIG9uIGtleSBcIiR7U3RyaW5nKGtleSl9XCIgZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBzaGFsbG93UmVhY3RpdmVIYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBzaGFyZWQuZXh0ZW5kKHt9LCBtdXRhYmxlSGFuZGxlcnMsIHtcbiAgICAgIGdldDogc2hhbGxvd0dldCxcbiAgICAgIHNldDogc2hhbGxvd1NldFxuICAgIH0pO1xuICAgIHZhciBzaGFsbG93UmVhZG9ubHlIYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBzaGFyZWQuZXh0ZW5kKHt9LCByZWFkb25seUhhbmRsZXJzLCB7XG4gICAgICBnZXQ6IHNoYWxsb3dSZWFkb25seUdldFxuICAgIH0pO1xuICAgIHZhciB0b1JlYWN0aXZlID0gKHZhbHVlKSA9PiBzaGFyZWQuaXNPYmplY3QodmFsdWUpID8gcmVhY3RpdmUzKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciB0b1JlYWRvbmx5ID0gKHZhbHVlKSA9PiBzaGFyZWQuaXNPYmplY3QodmFsdWUpID8gcmVhZG9ubHkodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHRvU2hhbGxvdyA9ICh2YWx1ZSkgPT4gdmFsdWU7XG4gICAgdmFyIGdldFByb3RvID0gKHYpID0+IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2Yodik7XG4gICAgZnVuY3Rpb24gZ2V0JDEodGFyZ2V0LCBrZXksIGlzUmVhZG9ubHkyID0gZmFsc2UsIGlzU2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgICAgIFwiX192X3Jhd1wiXG4gICAgICAgIC8qIFJBVyAqL1xuICAgICAgXTtcbiAgICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3Mih0YXJnZXQpO1xuICAgICAgY29uc3QgcmF3S2V5ID0gdG9SYXcyKGtleSk7XG4gICAgICBpZiAoa2V5ICE9PSByYXdLZXkpIHtcbiAgICAgICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgICAgIH1cbiAgICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIHJhd0tleSk7XG4gICAgICBjb25zdCB7IGhhczogaGFzMiB9ID0gZ2V0UHJvdG8ocmF3VGFyZ2V0KTtcbiAgICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICAgaWYgKGhhczIuY2FsbChyYXdUYXJnZXQsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChrZXkpKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwgcmF3S2V5KSkge1xuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KHJhd0tleSkpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHJhd1RhcmdldCkge1xuICAgICAgICB0YXJnZXQuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhcyQxKGtleSwgaXNSZWFkb25seTIgPSBmYWxzZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgICAgLyogUkFXICovXG4gICAgICBdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcyKHRhcmdldCk7XG4gICAgICBjb25zdCByYXdLZXkgPSB0b1JhdzIoa2V5KTtcbiAgICAgIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICAgICAgfVxuICAgICAgIWlzUmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwgcmF3S2V5KTtcbiAgICAgIHJldHVybiBrZXkgPT09IHJhd0tleSA/IHRhcmdldC5oYXMoa2V5KSA6IHRhcmdldC5oYXMoa2V5KSB8fCB0YXJnZXQuaGFzKHJhd0tleSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpemUodGFyZ2V0LCBpc1JlYWRvbmx5MiA9IGZhbHNlKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRbXG4gICAgICAgIFwiX192X3Jhd1wiXG4gICAgICAgIC8qIFJBVyAqL1xuICAgICAgXTtcbiAgICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayh0b1JhdzIodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIFwic2l6ZVwiLCB0YXJnZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdG9SYXcyKHZhbHVlKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3Mih0aGlzKTtcbiAgICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICAgIGNvbnN0IGhhZEtleSA9IHByb3RvLmhhcy5jYWxsKHRhcmdldCwgdmFsdWUpO1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCB2YWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldCQxKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdG9SYXcyKHZhbHVlKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3Mih0aGlzKTtcbiAgICAgIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gICAgICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgIGtleSA9IHRvUmF3MihrZXkpO1xuICAgICAgICBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICAgICAgfVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcmVkLmhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJzZXRcIiwga2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZUVudHJ5KGtleSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgICAgY29uc3QgeyBoYXM6IGhhczIsIGdldDogZ2V0MyB9ID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICAgIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAga2V5ID0gdG9SYXcyKGtleSk7XG4gICAgICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSk7XG4gICAgICB9XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldDMgPyBnZXQzLmNhbGwodGFyZ2V0LCBrZXkpIDogdm9pZCAwO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICAgICAgaWYgKGhhZEtleSkge1xuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcyKHRoaXMpO1xuICAgICAgY29uc3QgaGFkSXRlbXMgPSB0YXJnZXQuc2l6ZSAhPT0gMDtcbiAgICAgIGNvbnN0IG9sZFRhcmdldCA9IHNoYXJlZC5pc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmNsZWFyKCk7XG4gICAgICBpZiAoaGFkSXRlbXMpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiY2xlYXJcIiwgdm9pZCAwLCB2b2lkIDAsIG9sZFRhcmdldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGlzUmVhZG9ubHkyLCBpc1NoYWxsb3cpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVkID0gdGhpcztcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXG4gICAgICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgICAgICAvKiBSQVcgKi9cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcyKHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgSVRFUkFURV9LRVkpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB3cmFwKHZhbHVlKSwgd3JhcChrZXkpLCBvYnNlcnZlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5MiwgaXNTaGFsbG93KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1xuICAgICAgICAgIFwiX192X3Jhd1wiXG4gICAgICAgICAgLyogUkFXICovXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3Mih0YXJnZXQpO1xuICAgICAgICBjb25zdCB0YXJnZXRJc01hcCA9IHNoYXJlZC5pc01hcChyYXdUYXJnZXQpO1xuICAgICAgICBjb25zdCBpc1BhaXIgPSBtZXRob2QgPT09IFwiZW50cmllc1wiIHx8IG1ldGhvZCA9PT0gU3ltYm9sLml0ZXJhdG9yICYmIHRhcmdldElzTWFwO1xuICAgICAgICBjb25zdCBpc0tleU9ubHkgPSBtZXRob2QgPT09IFwia2V5c1wiICYmIHRhcmdldElzTWFwO1xuICAgICAgICBjb25zdCBpbm5lckl0ZXJhdG9yID0gdGFyZ2V0W21ldGhvZF0oLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHdyYXAgPSBpc1NoYWxsb3cgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICAgICAhaXNSZWFkb25seTIgJiYgdHJhY2socmF3VGFyZ2V0LCBcIml0ZXJhdGVcIiwgaXNLZXlPbmx5ID8gTUFQX0tFWV9JVEVSQVRFX0tFWSA6IElURVJBVEVfS0VZKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAvLyBpdGVyYXRvciBwcm90b2NvbFxuICAgICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBpbm5lckl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIHJldHVybiBkb25lID8geyB2YWx1ZSwgZG9uZSB9IDoge1xuICAgICAgICAgICAgICB2YWx1ZTogaXNQYWlyID8gW3dyYXAodmFsdWVbMF0pLCB3cmFwKHZhbHVlWzFdKV0gOiB3cmFwKHZhbHVlKSxcbiAgICAgICAgICAgICAgZG9uZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIGl0ZXJhYmxlIHByb3RvY29sXG4gICAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSZWFkb25seU1ldGhvZCh0eXBlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gYXJnc1swXSA/IGBvbiBrZXkgXCIke2FyZ3NbMF19XCIgYCA6IGBgO1xuICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaGFyZWQuY2FwaXRhbGl6ZSh0eXBlKX0gb3BlcmF0aW9uICR7a2V5fWZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRvUmF3Mih0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZGVsZXRlXCIgPyBmYWxzZSA6IHRoaXM7XG4gICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCkge1xuICAgICAgY29uc3QgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBoYXM6IGhhcyQxLFxuICAgICAgICBhZGQsXG4gICAgICAgIHNldDogc2V0JDEsXG4gICAgICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCBmYWxzZSlcbiAgICAgIH07XG4gICAgICBjb25zdCBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBoYXM6IGhhcyQxLFxuICAgICAgICBhZGQsXG4gICAgICAgIHNldDogc2V0JDEsXG4gICAgICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKGZhbHNlLCB0cnVlKVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgcmV0dXJuIHNpemUodGhpcywgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhcyhrZXkpIHtcbiAgICAgICAgICByZXR1cm4gaGFzJDEuY2FsbCh0aGlzLCBrZXksIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgICAgIFwiYWRkXCJcbiAgICAgICAgICAvKiBBREQgKi9cbiAgICAgICAgKSxcbiAgICAgICAgc2V0OiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgICAgICBcInNldFwiXG4gICAgICAgICAgLyogU0VUICovXG4gICAgICAgICksXG4gICAgICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICAgICAgXCJkZWxldGVcIlxuICAgICAgICAgIC8qIERFTEVURSAqL1xuICAgICAgICApLFxuICAgICAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICAgICAgXCJjbGVhclwiXG4gICAgICAgICAgLyogQ0xFQVIgKi9cbiAgICAgICAgKSxcbiAgICAgICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaCh0cnVlLCBmYWxzZSlcbiAgICAgIH07XG4gICAgICBjb25zdCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUsIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzKGtleSkge1xuICAgICAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICAgICAgXCJhZGRcIlxuICAgICAgICAgIC8qIEFERCAqL1xuICAgICAgICApLFxuICAgICAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgICAgIFwic2V0XCJcbiAgICAgICAgICAvKiBTRVQgKi9cbiAgICAgICAgKSxcbiAgICAgICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgICAgICBcImRlbGV0ZVwiXG4gICAgICAgICAgLyogREVMRVRFICovXG4gICAgICAgICksXG4gICAgICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgICAgICBcImNsZWFyXCJcbiAgICAgICAgICAvKiBDTEVBUiAqL1xuICAgICAgICApLFxuICAgICAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIHRydWUpXG4gICAgICB9O1xuICAgICAgY29uc3QgaXRlcmF0b3JNZXRob2RzID0gW1wia2V5c1wiLCBcInZhbHVlc1wiLCBcImVudHJpZXNcIiwgU3ltYm9sLml0ZXJhdG9yXTtcbiAgICAgIGl0ZXJhdG9yTWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIHRydWUpO1xuICAgICAgICBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMlttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCB0cnVlLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbXV0YWJsZUluc3RydW1lbnRhdGlvbnMyLFxuICAgICAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyLFxuICAgICAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIsXG4gICAgICAgIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyXG4gICAgICBdO1xuICAgIH1cbiAgICB2YXIgW211dGFibGVJbnN0cnVtZW50YXRpb25zLCByZWFkb25seUluc3RydW1lbnRhdGlvbnMsIHNoYWxsb3dJbnN0cnVtZW50YXRpb25zLCBzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zXSA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25zKCk7XG4gICAgZnVuY3Rpb24gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGlzUmVhZG9ubHkyLCBzaGFsbG93KSB7XG4gICAgICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0gc2hhbGxvdyA/IGlzUmVhZG9ubHkyID8gc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucyA6IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zIDogaXNSZWFkb25seTIgPyByZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBtdXRhYmxlSW5zdHJ1bWVudGF0aW9ucztcbiAgICAgIHJldHVybiAodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgICAgIHJldHVybiAhaXNSZWFkb25seTI7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgICAgICByZXR1cm4gaXNSZWFkb25seTI7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHNoYXJlZC5oYXNPd24oaW5zdHJ1bWVudGF0aW9ucywga2V5KSAmJiBrZXkgaW4gdGFyZ2V0ID8gaW5zdHJ1bWVudGF0aW9ucyA6IHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICAgIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgZmFsc2UpXG4gICAgfTtcbiAgICB2YXIgc2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICAgIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgdHJ1ZSlcbiAgICB9O1xuICAgIHZhciByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgICAgIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCBmYWxzZSlcbiAgICB9O1xuICAgIHZhciBzaGFsbG93UmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gICAgICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIodHJ1ZSwgdHJ1ZSlcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KSB7XG4gICAgICBjb25zdCByYXdLZXkgPSB0b1JhdzIoa2V5KTtcbiAgICAgIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMyLmNhbGwodGFyZ2V0LCByYXdLZXkpKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBzaGFyZWQudG9SYXdUeXBlKHRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUud2FybihgUmVhY3RpdmUgJHt0eXBlfSBjb250YWlucyBib3RoIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIHRoZSBzYW1lIG9iamVjdCR7dHlwZSA9PT0gYE1hcGAgPyBgIGFzIGtleXNgIDogYGB9LCB3aGljaCBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbmNpZXMuIEF2b2lkIGRpZmZlcmVudGlhdGluZyBiZXR3ZWVuIHRoZSByYXcgYW5kIHJlYWN0aXZlIHZlcnNpb25zIG9mIGFuIG9iamVjdCBhbmQgb25seSB1c2UgdGhlIHJlYWN0aXZlIHZlcnNpb24gaWYgcG9zc2libGUuYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBzaGFsbG93UmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgICB2YXIgcmVhZG9ubHlNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbiAgICB2YXIgc2hhbGxvd1JlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG4gICAgZnVuY3Rpb24gdGFyZ2V0VHlwZU1hcChyYXdUeXBlKSB7XG4gICAgICBzd2l0Y2ggKHJhd1R5cGUpIHtcbiAgICAgICAgY2FzZSBcIk9iamVjdFwiOlxuICAgICAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSBcIk1hcFwiOlxuICAgICAgICBjYXNlIFwiU2V0XCI6XG4gICAgICAgIGNhc2UgXCJXZWFrTWFwXCI6XG4gICAgICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVtcbiAgICAgICAgXCJfX3Zfc2tpcFwiXG4gICAgICAgIC8qIFNLSVAgKi9cbiAgICAgIF0gfHwgIU9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpID8gMCA6IHRhcmdldFR5cGVNYXAoc2hhcmVkLnRvUmF3VHlwZSh2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFjdGl2ZTModGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldFtcbiAgICAgICAgXCJfX3ZfaXNSZWFkb25seVwiXG4gICAgICAgIC8qIElTX1JFQURPTkxZICovXG4gICAgICBdKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBmYWxzZSwgbXV0YWJsZUhhbmRsZXJzLCBtdXRhYmxlQ29sbGVjdGlvbkhhbmRsZXJzLCByZWFjdGl2ZU1hcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNoYWxsb3dSZWFjdGl2ZSh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGZhbHNlLCBzaGFsbG93UmVhY3RpdmVIYW5kbGVycywgc2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycywgc2hhbGxvd1JlYWN0aXZlTWFwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVhZG9ubHkodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCByZWFkb25seUhhbmRsZXJzLCByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycywgcmVhZG9ubHlNYXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaGFsbG93UmVhZG9ubHkodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCBzaGFsbG93UmVhZG9ubHlIYW5kbGVycywgc2hhbGxvd1JlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzLCBzaGFsbG93UmVhZG9ubHlNYXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGlzUmVhZG9ubHkyLCBiYXNlSGFuZGxlcnMsIGNvbGxlY3Rpb25IYW5kbGVycywgcHJveHlNYXApIHtcbiAgICAgIGlmICghc2hhcmVkLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgY2Fubm90IGJlIG1hZGUgcmVhY3RpdmU6ICR7U3RyaW5nKHRhcmdldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRbXG4gICAgICAgIFwiX192X3Jhd1wiXG4gICAgICAgIC8qIFJBVyAqL1xuICAgICAgXSAmJiAhKGlzUmVhZG9ubHkyICYmIHRhcmdldFtcbiAgICAgICAgXCJfX3ZfaXNSZWFjdGl2ZVwiXG4gICAgICAgIC8qIElTX1JFQUNUSVZFICovXG4gICAgICBdKSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgY29uc3QgZXhpc3RpbmdQcm94eSA9IHByb3h5TWFwLmdldCh0YXJnZXQpO1xuICAgICAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRUeXBlID0gZ2V0VGFyZ2V0VHlwZSh0YXJnZXQpO1xuICAgICAgaWYgKHRhcmdldFR5cGUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHRhcmdldCwgdGFyZ2V0VHlwZSA9PT0gMiA/IGNvbGxlY3Rpb25IYW5kbGVycyA6IGJhc2VIYW5kbGVycyk7XG4gICAgICBwcm94eU1hcC5zZXQodGFyZ2V0LCBwcm94eSk7XG4gICAgICByZXR1cm4gcHJveHk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUmVhY3RpdmUyKHZhbHVlKSB7XG4gICAgICBpZiAoaXNSZWFkb25seSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGlzUmVhY3RpdmUyKHZhbHVlW1xuICAgICAgICAgIFwiX192X3Jhd1wiXG4gICAgICAgICAgLyogUkFXICovXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlW1xuICAgICAgICBcIl9fdl9pc1JlYWN0aXZlXCJcbiAgICAgICAgLyogSVNfUkVBQ1RJVkUgKi9cbiAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1JlYWRvbmx5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbXG4gICAgICAgIFwiX192X2lzUmVhZG9ubHlcIlxuICAgICAgICAvKiBJU19SRUFET05MWSAqL1xuICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUHJveHkodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc1JlYWN0aXZlMih2YWx1ZSkgfHwgaXNSZWFkb25seSh2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvUmF3MihvYnNlcnZlZCkge1xuICAgICAgcmV0dXJuIG9ic2VydmVkICYmIHRvUmF3MihvYnNlcnZlZFtcbiAgICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgICAgLyogUkFXICovXG4gICAgICBdKSB8fCBvYnNlcnZlZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFya1Jhdyh2YWx1ZSkge1xuICAgICAgc2hhcmVkLmRlZih2YWx1ZSwgXCJfX3Zfc2tpcFwiLCB0cnVlKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIGNvbnZlcnQgPSAodmFsKSA9PiBzaGFyZWQuaXNPYmplY3QodmFsKSA/IHJlYWN0aXZlMyh2YWwpIDogdmFsO1xuICAgIGZ1bmN0aW9uIGlzUmVmKHIpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHIgJiYgci5fX3ZfaXNSZWYgPT09IHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWYodmFsdWUpIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZWYodmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzaGFsbG93UmVmKHZhbHVlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVmKHZhbHVlLCB0cnVlKTtcbiAgICB9XG4gICAgdmFyIFJlZkltcGwgPSBjbGFzcyB7XG4gICAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgX3NoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9zaGFsbG93ID0gX3NoYWxsb3c7XG4gICAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmF3VmFsdWUgPSBfc2hhbGxvdyA/IHZhbHVlIDogdG9SYXcyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBfc2hhbGxvdyA/IHZhbHVlIDogY29udmVydCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHRyYWNrKHRvUmF3Mih0aGlzKSwgXCJnZXRcIiwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgfVxuICAgICAgc2V0IHZhbHVlKG5ld1ZhbCkge1xuICAgICAgICBuZXdWYWwgPSB0aGlzLl9zaGFsbG93ID8gbmV3VmFsIDogdG9SYXcyKG5ld1ZhbCk7XG4gICAgICAgIGlmIChzaGFyZWQuaGFzQ2hhbmdlZChuZXdWYWwsIHRoaXMuX3Jhd1ZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gbmV3VmFsO1xuICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fc2hhbGxvdyA/IG5ld1ZhbCA6IGNvbnZlcnQobmV3VmFsKTtcbiAgICAgICAgICB0cmlnZ2VyKHRvUmF3Mih0aGlzKSwgXCJzZXRcIiwgXCJ2YWx1ZVwiLCBuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBjcmVhdGVSZWYocmF3VmFsdWUsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgaWYgKGlzUmVmKHJhd1ZhbHVlKSkge1xuICAgICAgICByZXR1cm4gcmF3VmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZkltcGwocmF3VmFsdWUsIHNoYWxsb3cpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyUmVmKHJlZjIpIHtcbiAgICAgIHRyaWdnZXIodG9SYXcyKHJlZjIpLCBcInNldFwiLCBcInZhbHVlXCIsIHJlZjIudmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1bnJlZihyZWYyKSB7XG4gICAgICByZXR1cm4gaXNSZWYocmVmMikgPyByZWYyLnZhbHVlIDogcmVmMjtcbiAgICB9XG4gICAgdmFyIHNoYWxsb3dVbndyYXBIYW5kbGVycyA9IHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4gdW5yZWYoUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKSksXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChpc1JlZihvbGRWYWx1ZSkgJiYgIWlzUmVmKHZhbHVlKSkge1xuICAgICAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwcm94eVJlZnMob2JqZWN0V2l0aFJlZnMpIHtcbiAgICAgIHJldHVybiBpc1JlYWN0aXZlMihvYmplY3RXaXRoUmVmcykgPyBvYmplY3RXaXRoUmVmcyA6IG5ldyBQcm94eShvYmplY3RXaXRoUmVmcywgc2hhbGxvd1Vud3JhcEhhbmRsZXJzKTtcbiAgICB9XG4gICAgdmFyIEN1c3RvbVJlZkltcGwgPSBjbGFzcyB7XG4gICAgICBjb25zdHJ1Y3RvcihmYWN0b3J5KSB7XG4gICAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgeyBnZXQ6IGdldDMsIHNldDogc2V0MyB9ID0gZmFjdG9yeSgoKSA9PiB0cmFjayh0aGlzLCBcImdldFwiLCBcInZhbHVlXCIpLCAoKSA9PiB0cmlnZ2VyKHRoaXMsIFwic2V0XCIsIFwidmFsdWVcIikpO1xuICAgICAgICB0aGlzLl9nZXQgPSBnZXQzO1xuICAgICAgICB0aGlzLl9zZXQgPSBzZXQzO1xuICAgICAgfVxuICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KCk7XG4gICAgICB9XG4gICAgICBzZXQgdmFsdWUobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3NldChuZXdWYWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gY3VzdG9tUmVmKGZhY3RvcnkpIHtcbiAgICAgIHJldHVybiBuZXcgQ3VzdG9tUmVmSW1wbChmYWN0b3J5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9SZWZzKG9iamVjdCkge1xuICAgICAgaWYgKCFpc1Byb3h5KG9iamVjdCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGB0b1JlZnMoKSBleHBlY3RzIGEgcmVhY3RpdmUgb2JqZWN0IGJ1dCByZWNlaXZlZCBhIHBsYWluIG9uZS5gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJldCA9IHNoYXJlZC5pc0FycmF5KG9iamVjdCkgPyBuZXcgQXJyYXkob2JqZWN0Lmxlbmd0aCkgOiB7fTtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICByZXRba2V5XSA9IHRvUmVmKG9iamVjdCwga2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHZhciBPYmplY3RSZWZJbXBsID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3IoX29iamVjdCwgX2tleSkge1xuICAgICAgICB0aGlzLl9vYmplY3QgPSBfb2JqZWN0O1xuICAgICAgICB0aGlzLl9rZXkgPSBfa2V5O1xuICAgICAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgICB9XG4gICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RbdGhpcy5fa2V5XTtcbiAgICAgIH1cbiAgICAgIHNldCB2YWx1ZShuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fb2JqZWN0W3RoaXMuX2tleV0gPSBuZXdWYWw7XG4gICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiB0b1JlZihvYmplY3QsIGtleSkge1xuICAgICAgcmV0dXJuIGlzUmVmKG9iamVjdFtrZXldKSA/IG9iamVjdFtrZXldIDogbmV3IE9iamVjdFJlZkltcGwob2JqZWN0LCBrZXkpO1xuICAgIH1cbiAgICB2YXIgQ29tcHV0ZWRSZWZJbXBsID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3IoZ2V0dGVyLCBfc2V0dGVyLCBpc1JlYWRvbmx5Mikge1xuICAgICAgICB0aGlzLl9zZXR0ZXIgPSBfc2V0dGVyO1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuX192X2lzUmVmID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSBlZmZlY3QzKGdldHRlciwge1xuICAgICAgICAgIGxhenk6IHRydWUsXG4gICAgICAgICAgc2NoZWR1bGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdHJpZ2dlcih0b1JhdzIodGhpcyksIFwic2V0XCIsIFwidmFsdWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpc1tcbiAgICAgICAgICBcIl9fdl9pc1JlYWRvbmx5XCJcbiAgICAgICAgICAvKiBJU19SRUFET05MWSAqL1xuICAgICAgICBdID0gaXNSZWFkb25seTI7XG4gICAgICB9XG4gICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYyID0gdG9SYXcyKHRoaXMpO1xuICAgICAgICBpZiAoc2VsZjIuX2RpcnR5KSB7XG4gICAgICAgICAgc2VsZjIuX3ZhbHVlID0gdGhpcy5lZmZlY3QoKTtcbiAgICAgICAgICBzZWxmMi5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cmFjayhzZWxmMiwgXCJnZXRcIiwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgcmV0dXJuIHNlbGYyLl92YWx1ZTtcbiAgICAgIH1cbiAgICAgIHNldCB2YWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLl9zZXR0ZXIobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gY29tcHV0ZWQoZ2V0dGVyT3JPcHRpb25zKSB7XG4gICAgICBsZXQgZ2V0dGVyO1xuICAgICAgbGV0IHNldHRlcjtcbiAgICAgIGlmIChzaGFyZWQuaXNGdW5jdGlvbihnZXR0ZXJPck9wdGlvbnMpKSB7XG4gICAgICAgIGdldHRlciA9IGdldHRlck9yT3B0aW9ucztcbiAgICAgICAgc2V0dGVyID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIldyaXRlIG9wZXJhdGlvbiBmYWlsZWQ6IGNvbXB1dGVkIHZhbHVlIGlzIHJlYWRvbmx5XCIpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zLmdldDtcbiAgICAgICAgc2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zLnNldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQ29tcHV0ZWRSZWZJbXBsKGdldHRlciwgc2V0dGVyLCBzaGFyZWQuaXNGdW5jdGlvbihnZXR0ZXJPck9wdGlvbnMpIHx8ICFnZXR0ZXJPck9wdGlvbnMuc2V0KTtcbiAgICB9XG4gICAgZXhwb3J0cy5JVEVSQVRFX0tFWSA9IElURVJBVEVfS0VZO1xuICAgIGV4cG9ydHMuY29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICBleHBvcnRzLmN1c3RvbVJlZiA9IGN1c3RvbVJlZjtcbiAgICBleHBvcnRzLmVmZmVjdCA9IGVmZmVjdDM7XG4gICAgZXhwb3J0cy5lbmFibGVUcmFja2luZyA9IGVuYWJsZVRyYWNraW5nO1xuICAgIGV4cG9ydHMuaXNQcm94eSA9IGlzUHJveHk7XG4gICAgZXhwb3J0cy5pc1JlYWN0aXZlID0gaXNSZWFjdGl2ZTI7XG4gICAgZXhwb3J0cy5pc1JlYWRvbmx5ID0gaXNSZWFkb25seTtcbiAgICBleHBvcnRzLmlzUmVmID0gaXNSZWY7XG4gICAgZXhwb3J0cy5tYXJrUmF3ID0gbWFya1JhdztcbiAgICBleHBvcnRzLnBhdXNlVHJhY2tpbmcgPSBwYXVzZVRyYWNraW5nO1xuICAgIGV4cG9ydHMucHJveHlSZWZzID0gcHJveHlSZWZzO1xuICAgIGV4cG9ydHMucmVhY3RpdmUgPSByZWFjdGl2ZTM7XG4gICAgZXhwb3J0cy5yZWFkb25seSA9IHJlYWRvbmx5O1xuICAgIGV4cG9ydHMucmVmID0gcmVmO1xuICAgIGV4cG9ydHMucmVzZXRUcmFja2luZyA9IHJlc2V0VHJhY2tpbmc7XG4gICAgZXhwb3J0cy5zaGFsbG93UmVhY3RpdmUgPSBzaGFsbG93UmVhY3RpdmU7XG4gICAgZXhwb3J0cy5zaGFsbG93UmVhZG9ubHkgPSBzaGFsbG93UmVhZG9ubHk7XG4gICAgZXhwb3J0cy5zaGFsbG93UmVmID0gc2hhbGxvd1JlZjtcbiAgICBleHBvcnRzLnN0b3AgPSBzdG9wMjtcbiAgICBleHBvcnRzLnRvUmF3ID0gdG9SYXcyO1xuICAgIGV4cG9ydHMudG9SZWYgPSB0b1JlZjtcbiAgICBleHBvcnRzLnRvUmVmcyA9IHRvUmVmcztcbiAgICBleHBvcnRzLnRyYWNrID0gdHJhY2s7XG4gICAgZXhwb3J0cy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICBleHBvcnRzLnRyaWdnZXJSZWYgPSB0cmlnZ2VyUmVmO1xuICAgIGV4cG9ydHMudW5yZWYgPSB1bnJlZjtcbiAgfVxufSk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AdnVlL3JlYWN0aXZpdHkvaW5kZXguanNcbnZhciByZXF1aXJlX3JlYWN0aXZpdHkgPSBfX2NvbW1vbkpTKHtcbiAgXCJub2RlX21vZHVsZXMvQHZ1ZS9yZWFjdGl2aXR5L2luZGV4LmpzXCIoZXhwb3J0cywgbW9kdWxlMikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgbW9kdWxlMi5leHBvcnRzID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kdWxlMi5leHBvcnRzID0gcmVxdWlyZV9yZWFjdGl2aXR5X2NqcygpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIHBhY2thZ2VzL2NzcC9idWlsZHMvbW9kdWxlLmpzXG52YXIgbW9kdWxlX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KG1vZHVsZV9leHBvcnRzLCB7XG4gIEFscGluZTogKCkgPT4gc3JjX2RlZmF1bHQsXG4gIGRlZmF1bHQ6ICgpID0+IG1vZHVsZV9kZWZhdWx0XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKG1vZHVsZV9leHBvcnRzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3NjaGVkdWxlci5qc1xudmFyIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgcXVldWUgPSBbXTtcbnZhciBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG5mdW5jdGlvbiBzY2hlZHVsZXIoY2FsbGJhY2spIHtcbiAgcXVldWVKb2IoY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gcXVldWVKb2Ioam9iKSB7XG4gIGlmICghcXVldWUuaW5jbHVkZXMoam9iKSlcbiAgICBxdWV1ZS5wdXNoKGpvYik7XG4gIHF1ZXVlRmx1c2goKTtcbn1cbmZ1bmN0aW9uIGRlcXVldWVKb2Ioam9iKSB7XG4gIGxldCBpbmRleCA9IHF1ZXVlLmluZGV4T2Yoam9iKTtcbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCA+IGxhc3RGbHVzaGVkSW5kZXgpXG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghZmx1c2hpbmcgJiYgIWZsdXNoUGVuZGluZykge1xuICAgIGZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgcXVldWVNaWNyb3Rhc2soZmx1c2hKb2JzKTtcbiAgfVxufVxuZnVuY3Rpb24gZmx1c2hKb2JzKCkge1xuICBmbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKTtcbiAgICBsYXN0Rmx1c2hlZEluZGV4ID0gaTtcbiAgfVxuICBxdWV1ZS5sZW5ndGggPSAwO1xuICBsYXN0Rmx1c2hlZEluZGV4ID0gLTE7XG4gIGZsdXNoaW5nID0gZmFsc2U7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9yZWFjdGl2aXR5LmpzXG52YXIgcmVhY3RpdmU7XG52YXIgZWZmZWN0O1xudmFyIHJlbGVhc2U7XG52YXIgcmF3O1xudmFyIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nKGNhbGxiYWNrKSB7XG4gIHNob3VsZFNjaGVkdWxlID0gZmFsc2U7XG4gIGNhbGxiYWNrKCk7XG4gIHNob3VsZFNjaGVkdWxlID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHNldFJlYWN0aXZpdHlFbmdpbmUoZW5naW5lKSB7XG4gIHJlYWN0aXZlID0gZW5naW5lLnJlYWN0aXZlO1xuICByZWxlYXNlID0gZW5naW5lLnJlbGVhc2U7XG4gIGVmZmVjdCA9IChjYWxsYmFjaykgPT4gZW5naW5lLmVmZmVjdChjYWxsYmFjaywgeyBzY2hlZHVsZXI6ICh0YXNrKSA9PiB7XG4gICAgaWYgKHNob3VsZFNjaGVkdWxlKSB7XG4gICAgICBzY2hlZHVsZXIodGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2soKTtcbiAgICB9XG4gIH0gfSk7XG4gIHJhdyA9IGVuZ2luZS5yYXc7XG59XG5mdW5jdGlvbiBvdmVycmlkZUVmZmVjdChvdmVycmlkZSkge1xuICBlZmZlY3QgPSBvdmVycmlkZTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRCb3VuZEVmZmVjdChlbCkge1xuICBsZXQgY2xlYW51cCA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IHdyYXBwZWRFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0KGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsLl94X2VmZmVjdHMpIHtcbiAgICAgIGVsLl94X2VmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZWwuX3hfcnVuRWZmZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZWwuX3hfZWZmZWN0cy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWwuX3hfZWZmZWN0cy5hZGQoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgaWYgKGVmZmVjdFJlZmVyZW5jZSA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm47XG4gICAgICBlbC5feF9lZmZlY3RzLmRlbGV0ZShlZmZlY3RSZWZlcmVuY2UpO1xuICAgICAgcmVsZWFzZShlZmZlY3RSZWZlcmVuY2UpO1xuICAgIH07XG4gICAgcmV0dXJuIGVmZmVjdFJlZmVyZW5jZTtcbiAgfTtcbiAgcmV0dXJuIFt3cmFwcGVkRWZmZWN0LCAoKSA9PiB7XG4gICAgY2xlYW51cCgpO1xuICB9XTtcbn1cbmZ1bmN0aW9uIHdhdGNoKGdldHRlciwgY2FsbGJhY2spIHtcbiAgbGV0IGZpcnN0VGltZSA9IHRydWU7XG4gIGxldCBvbGRWYWx1ZTtcbiAgbGV0IGVmZmVjdFJlZmVyZW5jZSA9IGVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICghZmlyc3RUaW1lKSB7XG4gICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4gcmVsZWFzZShlZmZlY3RSZWZlcmVuY2UpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbXV0YXRpb24uanNcbnZhciBvbkF0dHJpYnV0ZUFkZGVkcyA9IFtdO1xudmFyIG9uRWxSZW1vdmVkcyA9IFtdO1xudmFyIG9uRWxBZGRlZHMgPSBbXTtcbmZ1bmN0aW9uIG9uRWxBZGRlZChjYWxsYmFjaykge1xuICBvbkVsQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25FbFJlbW92ZWQoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmICghZWwuX3hfY2xlYW51cHMpXG4gICAgICBlbC5feF9jbGVhbnVwcyA9IFtdO1xuICAgIGVsLl94X2NsZWFudXBzLnB1c2goY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrID0gZWw7XG4gICAgb25FbFJlbW92ZWRzLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5mdW5jdGlvbiBvbkF0dHJpYnV0ZXNBZGRlZChjYWxsYmFjaykge1xuICBvbkF0dHJpYnV0ZUFkZGVkcy5wdXNoKGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlUmVtb3ZlZChlbCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICBlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcyA9IHt9O1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdID0gW107XG4gIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xlYW51cEF0dHJpYnV0ZXMoZWwsIG5hbWVzKSB7XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHMpXG4gICAgcmV0dXJuO1xuICBPYmplY3QuZW50cmllcyhlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGlmIChuYW1lcyA9PT0gdm9pZCAwIHx8IG5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgZGVsZXRlIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhbnVwRWxlbWVudChlbCkge1xuICBpZiAoZWwuX3hfY2xlYW51cHMpIHtcbiAgICB3aGlsZSAoZWwuX3hfY2xlYW51cHMubGVuZ3RoKVxuICAgICAgZWwuX3hfY2xlYW51cHMucG9wKCkoKTtcbiAgfVxufVxudmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob25NdXRhdGUpO1xudmFyIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSB9KTtcbiAgY3VycmVudGx5T2JzZXJ2aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKSB7XG4gIGZsdXNoT2JzZXJ2ZXIoKTtcbiAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSBmYWxzZTtcbn1cbnZhciBxdWV1ZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGZsdXNoT2JzZXJ2ZXIoKSB7XG4gIGxldCByZWNvcmRzID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgcXVldWVkTXV0YXRpb25zLnB1c2goKCkgPT4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIG9uTXV0YXRlKHJlY29yZHMpKTtcbiAgbGV0IHF1ZXVlTGVuZ3RoV2hlblRyaWdnZXJlZCA9IHF1ZXVlZE11dGF0aW9ucy5sZW5ndGg7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBpZiAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA9PT0gcXVldWVMZW5ndGhXaGVuVHJpZ2dlcmVkKSB7XG4gICAgICB3aGlsZSAocXVldWVkTXV0YXRpb25zLmxlbmd0aCA+IDApXG4gICAgICAgIHF1ZXVlZE11dGF0aW9ucy5zaGlmdCgpKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIG11dGF0ZURvbShjYWxsYmFjaykge1xuICBpZiAoIWN1cnJlbnRseU9ic2VydmluZylcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucygpO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbnZhciBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xuZnVuY3Rpb24gZGVmZXJNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IHRydWU7XG59XG5mdW5jdGlvbiBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMoKSB7XG4gIGlzQ29sbGVjdGluZyA9IGZhbHNlO1xuICBvbk11dGF0ZShkZWZlcnJlZE11dGF0aW9ucyk7XG4gIGRlZmVycmVkTXV0YXRpb25zID0gW107XG59XG5mdW5jdGlvbiBvbk11dGF0ZShtdXRhdGlvbnMpIHtcbiAgaWYgKGlzQ29sbGVjdGluZykge1xuICAgIGRlZmVycmVkTXV0YXRpb25zID0gZGVmZXJyZWRNdXRhdGlvbnMuY29uY2F0KG11dGF0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhZGRlZE5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgbGV0IHJlbW92ZWROb2RlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGxldCBhZGRlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgcmVtb3ZlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtdXRhdGlvbnNbaV0udGFyZ2V0Ll94X2lnbm9yZU11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYWRkZWROb2Rlcy5hZGQobm9kZSkpO1xuICAgICAgbXV0YXRpb25zW2ldLnJlbW92ZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAxICYmIHJlbW92ZWROb2Rlcy5hZGQobm9kZSkpO1xuICAgIH1cbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICBsZXQgZWwgPSBtdXRhdGlvbnNbaV0udGFyZ2V0O1xuICAgICAgbGV0IG5hbWUgPSBtdXRhdGlvbnNbaV0uYXR0cmlidXRlTmFtZTtcbiAgICAgIGxldCBvbGRWYWx1ZSA9IG11dGF0aW9uc1tpXS5vbGRWYWx1ZTtcbiAgICAgIGxldCBhZGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZCgpO1xuICAgICAgfSBlbHNlIGlmIChlbC5oYXNBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIGFkZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlbW92ZWRBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJzLCBlbCkgPT4ge1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsLCBhdHRycyk7XG4gIH0pO1xuICBhZGRlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgb25BdHRyaWJ1dGVBZGRlZHMuZm9yRWFjaCgoaSkgPT4gaShlbCwgYXR0cnMpKTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgcmVtb3ZlZE5vZGVzKSB7XG4gICAgaWYgKGFkZGVkTm9kZXMuaGFzKG5vZGUpKVxuICAgICAgY29udGludWU7XG4gICAgb25FbFJlbW92ZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIG5vZGUuX3hfaWdub3JlU2VsZiA9IHRydWU7XG4gICAgbm9kZS5feF9pZ25vcmUgPSB0cnVlO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiBhZGRlZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWROb2Rlcy5oYXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmVTZWxmO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZVNlbGY7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlO1xuICB9KTtcbiAgYWRkZWROb2RlcyA9IG51bGw7XG4gIHJlbW92ZWROb2RlcyA9IG51bGw7XG4gIGFkZGVkQXR0cmlidXRlcyA9IG51bGw7XG4gIHJlbW92ZWRBdHRyaWJ1dGVzID0gbnVsbDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3Njb3BlLmpzXG5mdW5jdGlvbiBzY29wZShub2RlKSB7XG4gIHJldHVybiBtZXJnZVByb3hpZXMoY2xvc2VzdERhdGFTdGFjayhub2RlKSk7XG59XG5mdW5jdGlvbiBhZGRTY29wZVRvTm9kZShub2RlLCBkYXRhMiwgcmVmZXJlbmNlTm9kZSkge1xuICBub2RlLl94X2RhdGFTdGFjayA9IFtkYXRhMiwgLi4uY2xvc2VzdERhdGFTdGFjayhyZWZlcmVuY2VOb2RlIHx8IG5vZGUpXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBub2RlLl94X2RhdGFTdGFjayA9IG5vZGUuX3hfZGF0YVN0YWNrLmZpbHRlcigoaSkgPT4gaSAhPT0gZGF0YTIpO1xuICB9O1xufVxuZnVuY3Rpb24gY2xvc2VzdERhdGFTdGFjayhub2RlKSB7XG4gIGlmIChub2RlLl94X2RhdGFTdGFjaylcbiAgICByZXR1cm4gbm9kZS5feF9kYXRhU3RhY2s7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5ob3N0KTtcbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLnBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm94aWVzKG9iamVjdHMpIHtcbiAgcmV0dXJuIG5ldyBQcm94eSh7IG9iamVjdHMgfSwgbWVyZ2VQcm94eVRyYXApO1xufVxudmFyIG1lcmdlUHJveHlUcmFwID0ge1xuICBvd25LZXlzKHsgb2JqZWN0cyB9KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0KG9iamVjdHMuZmxhdE1hcCgoaSkgPT4gT2JqZWN0LmtleXMoaSkpKVxuICAgICk7XG4gIH0sXG4gIGhhcyh7IG9iamVjdHMgfSwgbmFtZSkge1xuICAgIGlmIChuYW1lID09IFN5bWJvbC51bnNjb3BhYmxlcylcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gb2JqZWN0cy5zb21lKFxuICAgICAgKG9iaikgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkgfHwgUmVmbGVjdC5oYXMob2JqLCBuYW1lKVxuICAgICk7XG4gIH0sXG4gIGdldCh7IG9iamVjdHMgfSwgbmFtZSwgdGhpc1Byb3h5KSB7XG4gICAgaWYgKG5hbWUgPT0gXCJ0b0pTT05cIilcbiAgICAgIHJldHVybiBjb2xsYXBzZVByb3hpZXM7XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KFxuICAgICAgb2JqZWN0cy5maW5kKFxuICAgICAgICAob2JqKSA9PiBSZWZsZWN0LmhhcyhvYmosIG5hbWUpXG4gICAgICApIHx8IHt9LFxuICAgICAgbmFtZSxcbiAgICAgIHRoaXNQcm94eVxuICAgICk7XG4gIH0sXG4gIHNldCh7IG9iamVjdHMgfSwgbmFtZSwgdmFsdWUsIHRoaXNQcm94eSkge1xuICAgIGNvbnN0IHRhcmdldCA9IG9iamVjdHMuZmluZChcbiAgICAgIChvYmopID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpXG4gICAgKSB8fCBvYmplY3RzW29iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcbiAgICBpZiAoKGRlc2NyaXB0b3IgPT0gbnVsbCA/IHZvaWQgMCA6IGRlc2NyaXB0b3Iuc2V0KSAmJiAoZGVzY3JpcHRvciA9PSBudWxsID8gdm9pZCAwIDogZGVzY3JpcHRvci5nZXQpKVxuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUsIHRoaXNQcm94eSk7XG4gICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuICB9XG59O1xuZnVuY3Rpb24gY29sbGFwc2VQcm94aWVzKCkge1xuICBsZXQga2V5cyA9IFJlZmxlY3Qub3duS2V5cyh0aGlzKTtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gUmVmbGVjdC5nZXQodGhpcywga2V5KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbnRlcmNlcHRvci5qc1xuZnVuY3Rpb24gaW5pdEludGVyY2VwdG9ycyhkYXRhMikge1xuICBsZXQgaXNPYmplY3QgPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsICE9PSBudWxsO1xuICBsZXQgcmVjdXJzZSA9IChvYmosIGJhc2VQYXRoID0gXCJcIikgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikpLmZvckVhY2goKFtrZXksIHsgdmFsdWUsIGVudW1lcmFibGUgfV0pID0+IHtcbiAgICAgIGlmIChlbnVtZXJhYmxlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLl9fdl9za2lwKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgcGF0aCA9IGJhc2VQYXRoID09PSBcIlwiID8ga2V5IDogYCR7YmFzZVBhdGh9LiR7a2V5fWA7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWUuaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUgIT09IG9iaiAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICByZWN1cnNlKHZhbHVlLCBwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gcmVjdXJzZShkYXRhMik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRvcihjYWxsYmFjaywgbXV0YXRlT2JqID0gKCkgPT4ge1xufSkge1xuICBsZXQgb2JqID0ge1xuICAgIGluaXRpYWxWYWx1ZTogdm9pZCAwLFxuICAgIF94X2ludGVyY2VwdG9yOiB0cnVlLFxuICAgIGluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuaW5pdGlhbFZhbHVlLCAoKSA9PiBnZXQoZGF0YTIsIHBhdGgpLCAodmFsdWUpID0+IHNldChkYXRhMiwgcGF0aCwgdmFsdWUpLCBwYXRoLCBrZXkpO1xuICAgIH1cbiAgfTtcbiAgbXV0YXRlT2JqKG9iaik7XG4gIHJldHVybiAoaW5pdGlhbFZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbml0aWFsVmFsdWUgPT09IFwib2JqZWN0XCIgJiYgaW5pdGlhbFZhbHVlICE9PSBudWxsICYmIGluaXRpYWxWYWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgbGV0IGluaXRpYWxpemUgPSBvYmouaW5pdGlhbGl6ZS5iaW5kKG9iaik7XG4gICAgICBvYmouaW5pdGlhbGl6ZSA9IChkYXRhMiwgcGF0aCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBpbm5lclZhbHVlID0gaW5pdGlhbFZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbm5lclZhbHVlO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG59XG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGNhcnJ5LCBzZWdtZW50KSA9PiBjYXJyeVtzZWdtZW50XSwgb2JqKTtcbn1cbmZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIilcbiAgICBwYXRoID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSlcbiAgICBvYmpbcGF0aFswXV0gPSB2YWx1ZTtcbiAgZWxzZSBpZiAocGF0aC5sZW5ndGggPT09IDApXG4gICAgdGhyb3cgZXJyb3I7XG4gIGVsc2Uge1xuICAgIGlmIChvYmpbcGF0aFswXV0pXG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIGVsc2Uge1xuICAgICAgb2JqW3BhdGhbMF1dID0ge307XG4gICAgICByZXR1cm4gc2V0KG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLmpzXG52YXIgbWFnaWNzID0ge307XG5mdW5jdGlvbiBtYWdpYyhuYW1lLCBjYWxsYmFjaykge1xuICBtYWdpY3NbbmFtZV0gPSBjYWxsYmFjaztcbn1cbmZ1bmN0aW9uIGluamVjdE1hZ2ljcyhvYmosIGVsKSB7XG4gIE9iamVjdC5lbnRyaWVzKG1hZ2ljcykuZm9yRWFjaCgoW25hbWUsIGNhbGxiYWNrXSkgPT4ge1xuICAgIGxldCBtZW1vaXplZFV0aWxpdGllcyA9IG51bGw7XG4gICAgZnVuY3Rpb24gZ2V0VXRpbGl0aWVzKCkge1xuICAgICAgaWYgKG1lbW9pemVkVXRpbGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBtZW1vaXplZFV0aWxpdGllcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBbdXRpbGl0aWVzLCBjbGVhbnVwXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gICAgICAgIG1lbW9pemVkVXRpbGl0aWVzID0geyBpbnRlcmNlcHRvciwgLi4udXRpbGl0aWVzIH07XG4gICAgICAgIG9uRWxSZW1vdmVkKGVsLCBjbGVhbnVwKTtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkVXRpbGl0aWVzO1xuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBgJCR7bmFtZX1gLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlbCwgZ2V0VXRpbGl0aWVzKCkpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZXJyb3IuanNcbmZ1bmN0aW9uIHRyeUNhdGNoKGVsLCBleHByZXNzaW9uLCBjYWxsYmFjaywgLi4uYXJncykge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIGVsLCBleHByZXNzaW9uKTtcbiAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbiA9IHZvaWQgMCkge1xuICBlcnJvcjIgPSBPYmplY3QuYXNzaWduKFxuICAgIGVycm9yMiAhPSBudWxsID8gZXJyb3IyIDogeyBtZXNzYWdlOiBcIk5vIGVycm9yIG1lc3NhZ2UgZ2l2ZW4uXCIgfSxcbiAgICB7IGVsLCBleHByZXNzaW9uIH1cbiAgKTtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgRXhwcmVzc2lvbiBFcnJvcjogJHtlcnJvcjIubWVzc2FnZX1cblxuJHtleHByZXNzaW9uID8gJ0V4cHJlc3Npb246IFwiJyArIGV4cHJlc3Npb24gKyAnXCJcXG5cXG4nIDogXCJcIn1gLCBlbCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRocm93IGVycm9yMjtcbiAgfSwgMCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9ldmFsdWF0b3IuanNcbnZhciBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSB0cnVlO1xuZnVuY3Rpb24gZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyhjYWxsYmFjaykge1xuICBsZXQgY2FjaGUgPSBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnM7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGZhbHNlO1xuICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZShlbCwgZXhwcmVzc2lvbiwgZXh0cmFzID0ge30pIHtcbiAgbGV0IHJlc3VsdDtcbiAgZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikoKHZhbHVlKSA9PiByZXN1bHQgPSB2YWx1ZSwgZXh0cmFzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlTGF0ZXIoLi4uYXJncykge1xuICByZXR1cm4gdGhlRXZhbHVhdG9yRnVuY3Rpb24oLi4uYXJncyk7XG59XG52YXIgdGhlRXZhbHVhdG9yRnVuY3Rpb24gPSBub3JtYWxFdmFsdWF0b3I7XG5mdW5jdGlvbiBzZXRFdmFsdWF0b3IobmV3RXZhbHVhdG9yKSB7XG4gIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbmV3RXZhbHVhdG9yO1xufVxuZnVuY3Rpb24gbm9ybWFsRXZhbHVhdG9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGxldCBvdmVycmlkZGVuTWFnaWNzID0ge307XG4gIGluamVjdE1hZ2ljcyhvdmVycmlkZGVuTWFnaWNzLCBlbCk7XG4gIGxldCBkYXRhU3RhY2sgPSBbb3ZlcnJpZGRlbk1hZ2ljcywgLi4uY2xvc2VzdERhdGFTdGFjayhlbCldO1xuICBsZXQgZXZhbHVhdG9yID0gdHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIiA/IGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZXhwcmVzc2lvbikgOiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCk7XG4gIHJldHVybiB0cnlDYXRjaC5iaW5kKG51bGwsIGVsLCBleHByZXNzaW9uLCBldmFsdWF0b3IpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVFdmFsdWF0b3JGcm9tRnVuY3Rpb24oZGF0YVN0YWNrLCBmdW5jKSB7XG4gIHJldHVybiAocmVjZWl2ZXIgPSAoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHNjb3BlMiA9IHt9LCBwYXJhbXMgPSBbXSB9ID0ge30pID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZnVuYy5hcHBseShtZXJnZVByb3hpZXMoW3Njb3BlMiwgLi4uZGF0YVN0YWNrXSksIHBhcmFtcyk7XG4gICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0KTtcbiAgfTtcbn1cbnZhciBldmFsdWF0b3JNZW1vID0ge307XG5mdW5jdGlvbiBnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyhleHByZXNzaW9uLCBlbCkge1xuICBpZiAoZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXSkge1xuICAgIHJldHVybiBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dO1xuICB9XG4gIGxldCBBc3luY0Z1bmN0aW9uID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFzeW5jIGZ1bmN0aW9uKCkge1xuICB9KS5jb25zdHJ1Y3RvcjtcbiAgbGV0IHJpZ2h0U2lkZVNhZmVFeHByZXNzaW9uID0gL15bXFxuXFxzXSppZi4qXFwoLipcXCkvLnRlc3QoZXhwcmVzc2lvbi50cmltKCkpIHx8IC9eKGxldHxjb25zdClcXHMvLnRlc3QoZXhwcmVzc2lvbi50cmltKCkpID8gYChhc3luYygpPT57ICR7ZXhwcmVzc2lvbn0gfSkoKWAgOiBleHByZXNzaW9uO1xuICBjb25zdCBzYWZlQXN5bmNGdW5jdGlvbiA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGZ1bmMyID0gbmV3IEFzeW5jRnVuY3Rpb24oXG4gICAgICAgIFtcIl9fc2VsZlwiLCBcInNjb3BlXCJdLFxuICAgICAgICBgd2l0aCAoc2NvcGUpIHsgX19zZWxmLnJlc3VsdCA9ICR7cmlnaHRTaWRlU2FmZUV4cHJlc3Npb259IH07IF9fc2VsZi5maW5pc2hlZCA9IHRydWU7IHJldHVybiBfX3NlbGYucmVzdWx0O2BcbiAgICAgICk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuYzIsIFwibmFtZVwiLCB7XG4gICAgICAgIHZhbHVlOiBgW0FscGluZV0gJHtleHByZXNzaW9ufWBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmMyO1xuICAgIH0gY2F0Y2ggKGVycm9yMikge1xuICAgICAgaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICB9O1xuICBsZXQgZnVuYyA9IHNhZmVBc3luY0Z1bmN0aW9uKCk7XG4gIGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0gPSBmdW5jO1xuICByZXR1cm4gZnVuYztcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbVN0cmluZyhkYXRhU3RhY2ssIGV4cHJlc3Npb24sIGVsKSB7XG4gIGxldCBmdW5jID0gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgZnVuYy5maW5pc2hlZCA9IGZhbHNlO1xuICAgIGxldCBjb21wbGV0ZVNjb3BlID0gbWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pO1xuICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IGZ1bmMoZnVuYywgY29tcGxldGVTY29wZSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbikpO1xuICAgICAgaWYgKGZ1bmMuZmluaXNoZWQpIHtcbiAgICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgZnVuYy5yZXN1bHQsIGNvbXBsZXRlU2NvcGUsIHBhcmFtcywgZWwpO1xuICAgICAgICBmdW5jLnJlc3VsdCA9IHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgcmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yMikgPT4gaGFuZGxlRXJyb3IoZXJyb3IyLCBlbCwgZXhwcmVzc2lvbikpLmZpbmFsbHkoKCkgPT4gZnVuYy5yZXN1bHQgPSB2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHZhbHVlLCBzY29wZTIsIHBhcmFtcywgZWwpIHtcbiAgaWYgKHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyAmJiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGxldCByZXN1bHQgPSB2YWx1ZS5hcHBseShzY29wZTIsIHBhcmFtcyk7XG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJlc3VsdC50aGVuKChpKSA9PiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCBpLCBzY29wZTIsIHBhcmFtcykpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY2VpdmVyKHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICB2YWx1ZS50aGVuKChpKSA9PiByZWNlaXZlcihpKSk7XG4gIH0gZWxzZSB7XG4gICAgcmVjZWl2ZXIodmFsdWUpO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzLmpzXG52YXIgcHJlZml4QXNTdHJpbmcgPSBcIngtXCI7XG5mdW5jdGlvbiBwcmVmaXgoc3ViamVjdCA9IFwiXCIpIHtcbiAgcmV0dXJuIHByZWZpeEFzU3RyaW5nICsgc3ViamVjdDtcbn1cbmZ1bmN0aW9uIHNldFByZWZpeChuZXdQcmVmaXgpIHtcbiAgcHJlZml4QXNTdHJpbmcgPSBuZXdQcmVmaXg7XG59XG52YXIgZGlyZWN0aXZlSGFuZGxlcnMgPSB7fTtcbmZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjYWxsYmFjaykge1xuICBkaXJlY3RpdmVIYW5kbGVyc1tuYW1lXSA9IGNhbGxiYWNrO1xuICByZXR1cm4ge1xuICAgIGJlZm9yZShkaXJlY3RpdmUyKSB7XG4gICAgICBpZiAoIWRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTJdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihTdHJpbmcucmF3YENhbm5vdCBmaW5kIGRpcmVjdGl2ZSBcXGAke2RpcmVjdGl2ZTJ9XFxgLiBcXGAke25hbWV9XFxgIHdpbGwgdXNlIHRoZSBkZWZhdWx0IG9yZGVyIG9mIGV4ZWN1dGlvbmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwb3MgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGRpcmVjdGl2ZTIpO1xuICAgICAgZGlyZWN0aXZlT3JkZXIuc3BsaWNlKHBvcyA+PSAwID8gcG9zIDogZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihcIkRFRkFVTFRcIiksIDAsIG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRpcmVjdGl2ZUV4aXN0cyhuYW1lKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkaXJlY3RpdmVIYW5kbGVycykuaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIGF0dHJpYnV0ZXMgPSBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpO1xuICBpZiAoZWwuX3hfdmlydHVhbERpcmVjdGl2ZXMpIHtcbiAgICBsZXQgdkF0dHJpYnV0ZXMgPSBPYmplY3QuZW50cmllcyhlbC5feF92aXJ0dWFsRGlyZWN0aXZlcykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSk7XG4gICAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seSh2QXR0cmlidXRlcyk7XG4gICAgdkF0dHJpYnV0ZXMgPSB2QXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKHN0YXRpY0F0dHJpYnV0ZXMuZmluZCgoYXR0cikgPT4gYXR0ci5uYW1lID09PSBhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBgeC1iaW5kOiR7YXR0cmlidXRlLm5hbWV9YCxcbiAgICAgICAgICB2YWx1ZTogYFwiJHthdHRyaWJ1dGUudmFsdWV9XCJgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0cmlidXRlO1xuICAgIH0pO1xuICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzLmNvbmNhdCh2QXR0cmlidXRlcyk7XG4gIH1cbiAgbGV0IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwID0ge307XG4gIGxldCBkaXJlY3RpdmVzMiA9IGF0dHJpYnV0ZXMubWFwKHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKChuZXdOYW1lLCBvbGROYW1lKSA9PiB0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcFtuZXdOYW1lXSA9IG9sZE5hbWUpKS5maWx0ZXIob3V0Tm9uQWxwaW5lQXR0cmlidXRlcykubWFwKHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkpLnNvcnQoYnlQcmlvcml0eSk7XG4gIHJldHVybiBkaXJlY3RpdmVzMi5tYXAoKGRpcmVjdGl2ZTIpID0+IHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlSGFuZGxlcihlbCwgZGlyZWN0aXZlMik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlc09ubHkoYXR0cmlidXRlcykge1xuICByZXR1cm4gQXJyYXkuZnJvbShhdHRyaWJ1dGVzKS5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKSkuZmlsdGVyKChhdHRyKSA9PiAhb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyhhdHRyKSk7XG59XG52YXIgaXNEZWZlcnJpbmdIYW5kbGVycyA9IGZhbHNlO1xudmFyIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xudmFyIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBTeW1ib2woKTtcbmZ1bmN0aW9uIGRlZmVySGFuZGxpbmdEaXJlY3RpdmVzKGNhbGxiYWNrKSB7XG4gIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSB0cnVlO1xuICBsZXQga2V5ID0gU3ltYm9sKCk7XG4gIGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkgPSBrZXk7XG4gIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3Muc2V0KGtleSwgW10pO1xuICBsZXQgZmx1c2hIYW5kbGVycyA9ICgpID0+IHtcbiAgICB3aGlsZSAoZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5nZXQoa2V5KS5sZW5ndGgpXG4gICAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLnNoaWZ0KCkoKTtcbiAgICBkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmRlbGV0ZShrZXkpO1xuICB9O1xuICBsZXQgc3RvcERlZmVycmluZyA9ICgpID0+IHtcbiAgICBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG4gICAgZmx1c2hIYW5kbGVycygpO1xuICB9O1xuICBjYWxsYmFjayhmbHVzaEhhbmRsZXJzKTtcbiAgc3RvcERlZmVycmluZygpO1xufVxuZnVuY3Rpb24gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKSB7XG4gIGxldCBjbGVhbnVwcyA9IFtdO1xuICBsZXQgY2xlYW51cCA9IChjYWxsYmFjaykgPT4gY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIGxldCBbZWZmZWN0MywgY2xlYW51cEVmZmVjdF0gPSBlbGVtZW50Qm91bmRFZmZlY3QoZWwpO1xuICBjbGVhbnVwcy5wdXNoKGNsZWFudXBFZmZlY3QpO1xuICBsZXQgdXRpbGl0aWVzID0ge1xuICAgIEFscGluZTogYWxwaW5lX2RlZmF1bHQsXG4gICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgIGNsZWFudXAsXG4gICAgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlci5iaW5kKGV2YWx1YXRlTGF0ZXIsIGVsKSxcbiAgICBldmFsdWF0ZTogZXZhbHVhdGUuYmluZChldmFsdWF0ZSwgZWwpXG4gIH07XG4gIGxldCBkb0NsZWFudXAgPSAoKSA9PiBjbGVhbnVwcy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICByZXR1cm4gW3V0aWxpdGllcywgZG9DbGVhbnVwXTtcbn1cbmZ1bmN0aW9uIGdldERpcmVjdGl2ZUhhbmRsZXIoZWwsIGRpcmVjdGl2ZTIpIHtcbiAgbGV0IG5vb3AgPSAoKSA9PiB7XG4gIH07XG4gIGxldCBoYW5kbGVyNCA9IGRpcmVjdGl2ZUhhbmRsZXJzW2RpcmVjdGl2ZTIudHlwZV0gfHwgbm9vcDtcbiAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXBdID0gZ2V0RWxlbWVudEJvdW5kVXRpbGl0aWVzKGVsKTtcbiAgb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBkaXJlY3RpdmUyLm9yaWdpbmFsLCBjbGVhbnVwKTtcbiAgbGV0IGZ1bGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9pZ25vcmUgfHwgZWwuX3hfaWdub3JlU2VsZilcbiAgICAgIHJldHVybjtcbiAgICBoYW5kbGVyNC5pbmxpbmUgJiYgaGFuZGxlcjQuaW5saW5lKGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGhhbmRsZXI0ID0gaGFuZGxlcjQuYmluZChoYW5kbGVyNCwgZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA/IGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkpLnB1c2goaGFuZGxlcjQpIDogaGFuZGxlcjQoKTtcbiAgfTtcbiAgZnVsbEhhbmRsZXIucnVuQ2xlYW51cHMgPSBjbGVhbnVwO1xuICByZXR1cm4gZnVsbEhhbmRsZXI7XG59XG52YXIgc3RhcnRpbmdXaXRoID0gKHN1YmplY3QsIHJlcGxhY2VtZW50KSA9PiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoc3ViamVjdCkpXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShzdWJqZWN0LCByZXBsYWNlbWVudCk7XG4gIHJldHVybiB7IG5hbWUsIHZhbHVlIH07XG59O1xudmFyIGludG8gPSAoaSkgPT4gaTtcbmZ1bmN0aW9uIHRvVHJhbnNmb3JtZWRBdHRyaWJ1dGVzKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9ID0gYXR0cmlidXRlVHJhbnNmb3JtZXJzLnJlZHVjZSgoY2FycnksIHRyYW5zZm9ybSkgPT4ge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShjYXJyeSk7XG4gICAgfSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICBpZiAobmV3TmFtZSAhPT0gbmFtZSlcbiAgICAgIGNhbGxiYWNrKG5ld05hbWUsIG5hbWUpO1xuICAgIHJldHVybiB7IG5hbWU6IG5ld05hbWUsIHZhbHVlOiBuZXdWYWx1ZSB9O1xuICB9O1xufVxudmFyIGF0dHJpYnV0ZVRyYW5zZm9ybWVycyA9IFtdO1xuZnVuY3Rpb24gbWFwQXR0cmlidXRlcyhjYWxsYmFjaykge1xuICBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvdXROb25BbHBpbmVBdHRyaWJ1dGVzKHsgbmFtZSB9KSB7XG4gIHJldHVybiBhbHBpbmVBdHRyaWJ1dGVSZWdleCgpLnRlc3QobmFtZSk7XG59XG52YXIgYWxwaW5lQXR0cmlidXRlUmVnZXggPSAoKSA9PiBuZXcgUmVnRXhwKGBeJHtwcmVmaXhBc1N0cmluZ30oW146Xi5dKylcXFxcYmApO1xuZnVuY3Rpb24gdG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSB7XG4gIHJldHVybiAoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHR5cGVNYXRjaCA9IG5hbWUubWF0Y2goYWxwaW5lQXR0cmlidXRlUmVnZXgoKSk7XG4gICAgbGV0IHZhbHVlTWF0Y2ggPSBuYW1lLm1hdGNoKC86KFthLXpBLVowLTlcXC1fOl0rKS8pO1xuICAgIGxldCBtb2RpZmllcnMgPSBuYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICBsZXQgb3JpZ2luYWwgPSBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlIHx8IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25hbWVdIHx8IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVNYXRjaCA/IHR5cGVNYXRjaFsxXSA6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWVNYXRjaCA/IHZhbHVlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKChpKSA9PiBpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgIGV4cHJlc3Npb246IHZhbHVlLFxuICAgICAgb3JpZ2luYWxcbiAgICB9O1xuICB9O1xufVxudmFyIERFRkFVTFQgPSBcIkRFRkFVTFRcIjtcbnZhciBkaXJlY3RpdmVPcmRlciA9IFtcbiAgXCJpZ25vcmVcIixcbiAgXCJyZWZcIixcbiAgXCJkYXRhXCIsXG4gIFwiaWRcIixcbiAgXCJhbmNob3JcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwibW9kZWxhYmxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcInRlbGVwb3J0XCJcbl07XG5mdW5jdGlvbiBieVByaW9yaXR5KGEsIGIpIHtcbiAgbGV0IHR5cGVBID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihhLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBhLnR5cGU7XG4gIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYi50eXBlO1xuICByZXR1cm4gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQSkgLSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVCKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Rpc3BhdGNoLmpzXG5mdW5jdGlvbiBkaXNwYXRjaChlbCwgbmFtZSwgZGV0YWlsID0ge30pIHtcbiAgZWwuZGlzcGF0Y2hFdmVudChcbiAgICBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgZGV0YWlsLFxuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIC8vIEFsbG93cyBldmVudHMgdG8gcGFzcyB0aGUgc2hhZG93IERPTSBiYXJyaWVyLlxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSlcbiAgKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhbGsuanNcbmZ1bmN0aW9uIHdhbGsoZWwsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIGVsIGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIEFycmF5LmZyb20oZWwuY2hpbGRyZW4pLmZvckVhY2goKGVsMikgPT4gd2FsayhlbDIsIGNhbGxiYWNrKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBza2lwID0gZmFsc2U7XG4gIGNhbGxiYWNrKGVsLCAoKSA9PiBza2lwID0gdHJ1ZSk7XG4gIGlmIChza2lwKVxuICAgIHJldHVybjtcbiAgbGV0IG5vZGUgPSBlbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICB3YWxrKG5vZGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy93YXJuLmpzXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBBbHBpbmUgV2FybmluZzogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbGlmZWN5Y2xlLmpzXG52YXIgc3RhcnRlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmIChzdGFydGVkKVxuICAgIHdhcm4oXCJBbHBpbmUgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCBvbiB0aGlzIHBhZ2UuIENhbGxpbmcgQWxwaW5lLnN0YXJ0KCkgbW9yZSB0aGFuIG9uY2UgY2FuIGNhdXNlIHByb2JsZW1zLlwiKTtcbiAgc3RhcnRlZCA9IHRydWU7XG4gIGlmICghZG9jdW1lbnQuYm9keSlcbiAgICB3YXJuKFwiVW5hYmxlIHRvIGluaXRpYWxpemUuIFRyeWluZyB0byBsb2FkIEFscGluZSBiZWZvcmUgYDxib2R5PmAgaXMgYXZhaWxhYmxlLiBEaWQgeW91IGZvcmdldCB0byBhZGQgYGRlZmVyYCBpbiBBbHBpbmUncyBgPHNjcmlwdD5gIHRhZz9cIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0XCIpO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6aW5nXCIpO1xuICBzdGFydE9ic2VydmluZ011dGF0aW9ucygpO1xuICBvbkVsQWRkZWQoKGVsKSA9PiBpbml0VHJlZShlbCwgd2FsaykpO1xuICBvbkVsUmVtb3ZlZCgoZWwpID0+IGRlc3Ryb3lUcmVlKGVsKSk7XG4gIG9uQXR0cmlidXRlc0FkZGVkKChlbCwgYXR0cnMpID0+IHtcbiAgICBkaXJlY3RpdmVzKGVsLCBhdHRycykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gIH0pO1xuICBsZXQgb3V0TmVzdGVkQ29tcG9uZW50cyA9IChlbCkgPT4gIWNsb3Nlc3RSb290KGVsLnBhcmVudEVsZW1lbnQsIHRydWUpO1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWxsU2VsZWN0b3JzKCkuam9pbihcIixcIikpKS5maWx0ZXIob3V0TmVzdGVkQ29tcG9uZW50cykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpbml0VHJlZShlbCk7XG4gIH0pO1xuICBkaXNwYXRjaChkb2N1bWVudCwgXCJhbHBpbmU6aW5pdGlhbGl6ZWRcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdhcm5BYm91dE1pc3NpbmdQbHVnaW5zKCk7XG4gIH0pO1xufVxudmFyIHJvb3RTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xudmFyIGluaXRTZWxlY3RvckNhbGxiYWNrcyA9IFtdO1xuZnVuY3Rpb24gcm9vdFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFsbFNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5jb25jYXQoaW5pdFNlbGVjdG9yQ2FsbGJhY2tzKS5tYXAoKGZuKSA9PiBmbigpKTtcbn1cbmZ1bmN0aW9uIGFkZFJvb3RTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIHJvb3RTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gYWRkSW5pdFNlbGVjdG9yKHNlbGVjdG9yQ2FsbGJhY2spIHtcbiAgaW5pdFNlbGVjdG9yQ2FsbGJhY2tzLnB1c2goc2VsZWN0b3JDYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9zZXN0Um9vdChlbCwgaW5jbHVkZUluaXRTZWxlY3RvcnMgPSBmYWxzZSkge1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gaW5jbHVkZUluaXRTZWxlY3RvcnMgPyBhbGxTZWxlY3RvcnMoKSA6IHJvb3RTZWxlY3RvcnMoKTtcbiAgICBpZiAoc2VsZWN0b3JzLnNvbWUoKHNlbGVjdG9yKSA9PiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSlcbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0KGVsLCBjYWxsYmFjaykge1xuICBpZiAoIWVsKVxuICAgIHJldHVybjtcbiAgaWYgKGNhbGxiYWNrKGVsKSlcbiAgICByZXR1cm4gZWw7XG4gIGlmIChlbC5feF90ZWxlcG9ydEJhY2spXG4gICAgZWwgPSBlbC5feF90ZWxlcG9ydEJhY2s7XG4gIGlmICghZWwucGFyZW50RWxlbWVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbC5wYXJlbnRFbGVtZW50LCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpc1Jvb3QoZWwpIHtcbiAgcmV0dXJuIHJvb3RTZWxlY3RvcnMoKS5zb21lKChzZWxlY3RvcikgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxudmFyIGluaXRJbnRlcmNlcHRvcnMyID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMyLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gaW5pdFRyZWUoZWwsIHdhbGtlciA9IHdhbGssIGludGVyY2VwdCA9ICgpID0+IHtcbn0pIHtcbiAgZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoKCkgPT4ge1xuICAgIHdhbGtlcihlbCwgKGVsMiwgc2tpcCkgPT4ge1xuICAgICAgaW50ZXJjZXB0KGVsMiwgc2tpcCk7XG4gICAgICBpbml0SW50ZXJjZXB0b3JzMi5mb3JFYWNoKChpKSA9PiBpKGVsMiwgc2tpcCkpO1xuICAgICAgZGlyZWN0aXZlcyhlbDIsIGVsMi5hdHRyaWJ1dGVzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgICAgIGVsMi5feF9pZ25vcmUgJiYgc2tpcCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lUcmVlKHJvb3QsIHdhbGtlciA9IHdhbGspIHtcbiAgd2Fsa2VyKHJvb3QsIChlbCkgPT4ge1xuICAgIGNsZWFudXBBdHRyaWJ1dGVzKGVsKTtcbiAgICBjbGVhbnVwRWxlbWVudChlbCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gd2FybkFib3V0TWlzc2luZ1BsdWdpbnMoKSB7XG4gIGxldCBwbHVnaW5EaXJlY3RpdmVzID0gW1xuICAgIFtcInVpXCIsIFwiZGlhbG9nXCIsIFtcIlt4LWRpYWxvZ10sIFt4LXBvcG92ZXJdXCJdXSxcbiAgICBbXCJhbmNob3JcIiwgXCJhbmNob3JcIiwgW1wiW3gtYW5jaG9yXVwiXV0sXG4gICAgW1wic29ydFwiLCBcInNvcnRcIiwgW1wiW3gtc29ydF1cIl1dXG4gIF07XG4gIHBsdWdpbkRpcmVjdGl2ZXMuZm9yRWFjaCgoW3BsdWdpbjIsIGRpcmVjdGl2ZTIsIHNlbGVjdG9yc10pID0+IHtcbiAgICBpZiAoZGlyZWN0aXZlRXhpc3RzKGRpcmVjdGl2ZTIpKVxuICAgICAgcmV0dXJuO1xuICAgIHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICAgIHdhcm4oYGZvdW5kIFwiJHtzZWxlY3Rvcn1cIiwgYnV0IG1pc3NpbmcgJHtwbHVnaW4yfSBwbHVnaW5gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbmV4dFRpY2suanNcbnZhciB0aWNrU3RhY2sgPSBbXTtcbnZhciBpc0hvbGRpbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNIb2xkaW5nIHx8IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICB0aWNrU3RhY2sucHVzaCgoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgcmVzKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVsZWFzZU5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gZmFsc2U7XG4gIHdoaWxlICh0aWNrU3RhY2subGVuZ3RoKVxuICAgIHRpY2tTdGFjay5zaGlmdCgpKCk7XG59XG5mdW5jdGlvbiBob2xkTmV4dFRpY2tzKCkge1xuICBpc0hvbGRpbmcgPSB0cnVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvY2xhc3Nlcy5qc1xuZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZS5qb2luKFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gc2V0Q2xhc3NlcyhlbCwgdmFsdWUoKSk7XG4gIH1cbiAgcmV0dXJuIHNldENsYXNzZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgY2xhc3NTdHJpbmcpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nMikgPT4gY2xhc3NTdHJpbmcyLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBtaXNzaW5nQ2xhc3NlcyA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKChpKSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyA9IChjbGFzc2VzKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcbiAgICB9O1xuICB9O1xuICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nID09PSB0cnVlID8gY2xhc3NTdHJpbmcgPSBcIlwiIDogY2xhc3NTdHJpbmcgfHwgXCJcIjtcbiAgcmV0dXJuIGFkZENsYXNzZXNBbmRSZXR1cm5VbmRvKG1pc3NpbmdDbGFzc2VzKGNsYXNzU3RyaW5nKSk7XG59XG5mdW5jdGlvbiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgY2xhc3NPYmplY3QpIHtcbiAgbGV0IHNwbGl0ID0gKGNsYXNzU3RyaW5nKSA9PiBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yQWRkID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+IGJvb2wgPyBzcGxpdChjbGFzc1N0cmluZykgOiBmYWxzZSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgZm9yUmVtb3ZlID0gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmplY3QpLmZsYXRNYXAoKFtjbGFzc1N0cmluZywgYm9vbF0pID0+ICFib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGFkZGVkID0gW107XG4gIGxldCByZW1vdmVkID0gW107XG4gIGZvclJlbW92ZS5mb3JFYWNoKChpKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpKTtcbiAgICAgIHJlbW92ZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICBmb3JBZGQuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGkpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgYWRkZWQucHVzaChpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LmFkZChpKSk7XG4gICAgYWRkZWQuZm9yRWFjaCgoaSkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShpKSk7XG4gIH07XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9zdHlsZXMuanNcbmZ1bmN0aW9uIHNldFN0eWxlcyhlbCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHNldFN0eWxlc0Zyb21TdHJpbmcoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldFN0eWxlc0Zyb21PYmplY3QoZWwsIHZhbHVlKSB7XG4gIGxldCBwcmV2aW91c1N0eWxlcyA9IHt9O1xuICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWUyXSkgPT4ge1xuICAgIHByZXZpb3VzU3R5bGVzW2tleV0gPSBlbC5zdHlsZVtrZXldO1xuICAgIGlmICgha2V5LnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuICAgICAga2V5ID0ga2ViYWJDYXNlKGtleSk7XG4gICAgfVxuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUyKTtcbiAgfSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2V0U3R5bGVzKGVsLCBwcmV2aW91c1N0eWxlcyk7XG4gIH07XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSkge1xuICBsZXQgY2FjaGUgPSBlbC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBjYWNoZSB8fCBcIlwiKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uY2UuanNcbmZ1bmN0aW9uIG9uY2UoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICBsZXQgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRyYW5zaXRpb24uanNcbmRpcmVjdGl2ZShcInRyYW5zaXRpb25cIiwgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIpXG4gICAgZXhwcmVzc2lvbiA9IGV2YWx1YXRlMihleHByZXNzaW9uKTtcbiAgaWYgKGV4cHJlc3Npb24gPT09IGZhbHNlKVxuICAgIHJldHVybjtcbiAgaWYgKCFleHByZXNzaW9uIHx8IHR5cGVvZiBleHByZXNzaW9uID09PSBcImJvb2xlYW5cIikge1xuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nKGVsLCBleHByZXNzaW9uLCB2YWx1ZSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgY2xhc3NTdHJpbmcsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0Q2xhc3NlcywgXCJcIik7XG4gIGxldCBkaXJlY3RpdmVTdG9yYWdlTWFwID0ge1xuICAgIFwiZW50ZXJcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJlbnRlci1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmVcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtc3RhcnRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSBjbGFzc2VzO1xuICAgIH0sXG4gICAgXCJsZWF2ZS1lbmRcIjogKGNsYXNzZXMpID0+IHtcbiAgICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0gY2xhc3NlcztcbiAgICB9XG4gIH07XG4gIGRpcmVjdGl2ZVN0b3JhZ2VNYXBbc3RhZ2VdKGNsYXNzU3RyaW5nKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tSGVscGVyKGVsLCBtb2RpZmllcnMsIHN0YWdlKSB7XG4gIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0U3R5bGVzKTtcbiAgbGV0IGRvZXNudFNwZWNpZnkgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIW1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhc3RhZ2U7XG4gIGxldCB0cmFuc2l0aW9uaW5nSW4gPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpIHx8IFtcImVudGVyXCJdLmluY2x1ZGVzKHN0YWdlKTtcbiAgbGV0IHRyYW5zaXRpb25pbmdPdXQgPSBkb2VzbnRTcGVjaWZ5IHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSB8fCBbXCJsZWF2ZVwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA8IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0XCIpICYmICFkb2VzbnRTcGVjaWZ5KSB7XG4gICAgbW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSwgaW5kZXgpID0+IGluZGV4ID4gbW9kaWZpZXJzLmluZGV4T2YoXCJvdXRcIikpO1xuICB9XG4gIGxldCB3YW50c0FsbCA9ICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJzY2FsZVwiKTtcbiAgbGV0IHdhbnRzT3BhY2l0eSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm9wYWNpdHlcIik7XG4gIGxldCB3YW50c1NjYWxlID0gd2FudHNBbGwgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCBvcGFjaXR5VmFsdWUgPSB3YW50c09wYWNpdHkgPyAwIDogMTtcbiAgbGV0IHNjYWxlVmFsdWUgPSB3YW50c1NjYWxlID8gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwic2NhbGVcIiwgOTUpIC8gMTAwIDogMTtcbiAgbGV0IGRlbGF5ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZGVsYXlcIiwgMCkgLyAxZTM7XG4gIGxldCBvcmlnaW4gPSBtb2RpZmllclZhbHVlKG1vZGlmaWVycywgXCJvcmlnaW5cIiwgXCJjZW50ZXJcIik7XG4gIGxldCBwcm9wZXJ0eSA9IFwib3BhY2l0eSwgdHJhbnNmb3JtXCI7XG4gIGxldCBkdXJhdGlvbkluID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgMTUwKSAvIDFlMztcbiAgbGV0IGR1cmF0aW9uT3V0ID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwiZHVyYXRpb25cIiwgNzUpIC8gMWUzO1xuICBsZXQgZWFzaW5nID0gYGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKWA7XG4gIGlmICh0cmFuc2l0aW9uaW5nSW4pIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uSW59c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgfVxuICBpZiAodHJhbnNpdGlvbmluZ091dCkge1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZHVyaW5nID0ge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBvcmlnaW4sXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAke2RlbGF5fXNgLFxuICAgICAgdHJhbnNpdGlvblByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb25PdXR9c2AsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGVhc2luZ1xuICAgIH07XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5sZWF2ZS5zdGFydCA9IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuZW5kID0ge1xuICAgICAgb3BhY2l0eTogb3BhY2l0eVZhbHVlLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZVZhbHVlfSlgXG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uT2JqZWN0KGVsLCBzZXRGdW5jdGlvbiwgZGVmYXVsdFZhbHVlID0ge30pIHtcbiAgaWYgKCFlbC5feF90cmFuc2l0aW9uKVxuICAgIGVsLl94X3RyYW5zaXRpb24gPSB7XG4gICAgICBlbnRlcjogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGxlYXZlOiB7IGR1cmluZzogZGVmYXVsdFZhbHVlLCBzdGFydDogZGVmYXVsdFZhbHVlLCBlbmQ6IGRlZmF1bHRWYWx1ZSB9LFxuICAgICAgaW4oYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmVudGVyLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5lbnRlci5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMuZW50ZXIuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfSxcbiAgICAgIG91dChiZWZvcmUgPSAoKSA9PiB7XG4gICAgICB9LCBhZnRlciA9ICgpID0+IHtcbiAgICAgIH0pIHtcbiAgICAgICAgdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHtcbiAgICAgICAgICBkdXJpbmc6IHRoaXMubGVhdmUuZHVyaW5nLFxuICAgICAgICAgIHN0YXJ0OiB0aGlzLmxlYXZlLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5sZWF2ZS5lbmRcbiAgICAgICAgfSwgYmVmb3JlLCBhZnRlcik7XG4gICAgICB9XG4gICAgfTtcbn1cbndpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID0gZnVuY3Rpb24oZWwsIHZhbHVlLCBzaG93LCBoaWRlKSB7XG4gIGNvbnN0IG5leHRUaWNrMiA9IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRUaW1lb3V0O1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiBuZXh0VGljazIoc2hvdyk7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmIChlbC5feF90cmFuc2l0aW9uICYmIChlbC5feF90cmFuc2l0aW9uLmVudGVyIHx8IGVsLl94X3RyYW5zaXRpb24ubGVhdmUpKSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyICYmIChPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZykubGVuZ3RoIHx8IE9iamVjdC5lbnRyaWVzKGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCkubGVuZ3RoKSA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uID8gZWwuX3hfdHJhbnNpdGlvbi5pbihzaG93KSA6IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBlbC5feF9oaWRlUHJvbWlzZSA9IGVsLl94X3RyYW5zaXRpb24gPyBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5vdXQoKCkgPT4ge1xuICAgIH0sICgpID0+IHJlc29sdmUoaGlkZSkpO1xuICAgIGVsLl94X3RyYW5zaXRpb25pbmcgJiYgZWwuX3hfdHJhbnNpdGlvbmluZy5iZWZvcmVDYW5jZWwoKCkgPT4gcmVqZWN0KHsgaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbjogdHJ1ZSB9KSk7XG4gIH0pIDogUHJvbWlzZS5yZXNvbHZlKGhpZGUpO1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgbGV0IGNsb3Nlc3QgPSBjbG9zZXN0SGlkZShlbCk7XG4gICAgaWYgKGNsb3Nlc3QpIHtcbiAgICAgIGlmICghY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4pXG4gICAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuID0gW107XG4gICAgICBjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbi5wdXNoKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRpY2syKCgpID0+IHtcbiAgICAgICAgbGV0IGhpZGVBZnRlckNoaWxkcmVuID0gKGVsMikgPT4ge1xuICAgICAgICAgIGxldCBjYXJyeSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVsMi5feF9oaWRlUHJvbWlzZSxcbiAgICAgICAgICAgIC4uLihlbDIuX3hfaGlkZUNoaWxkcmVuIHx8IFtdKS5tYXAoaGlkZUFmdGVyQ2hpbGRyZW4pXG4gICAgICAgICAgXSkudGhlbigoW2ldKSA9PiBpKCkpO1xuICAgICAgICAgIGRlbGV0ZSBlbDIuX3hfaGlkZVByb21pc2U7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlQ2hpbGRyZW47XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9O1xuICAgICAgICBoaWRlQWZ0ZXJDaGlsZHJlbihlbCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIWUuaXNGcm9tQ2FuY2VsbGVkVHJhbnNpdGlvbilcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5mdW5jdGlvbiBjbG9zZXN0SGlkZShlbCkge1xuICBsZXQgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgaWYgKCFwYXJlbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gcGFyZW50Ll94X2hpZGVQcm9taXNlID8gcGFyZW50IDogY2xvc2VzdEhpZGUocGFyZW50KTtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7IGR1cmluZywgc3RhcnQ6IHN0YXJ0MiwgZW5kIH0gPSB7fSwgYmVmb3JlID0gKCkgPT4ge1xufSwgYWZ0ZXIgPSAoKSA9PiB7XG59KSB7XG4gIGlmIChlbC5feF90cmFuc2l0aW9uaW5nKVxuICAgIGVsLl94X3RyYW5zaXRpb25pbmcuY2FuY2VsKCk7XG4gIGlmIChPYmplY3Qua2V5cyhkdXJpbmcpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhzdGFydDIpLmxlbmd0aCA9PT0gMCAmJiBPYmplY3Qua2V5cyhlbmQpLmxlbmd0aCA9PT0gMCkge1xuICAgIGJlZm9yZSgpO1xuICAgIGFmdGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCB1bmRvU3RhcnQsIHVuZG9EdXJpbmcsIHVuZG9FbmQ7XG4gIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICB1bmRvU3RhcnQgPSBzZXRGdW5jdGlvbihlbCwgc3RhcnQyKTtcbiAgICB9LFxuICAgIGR1cmluZygpIHtcbiAgICAgIHVuZG9EdXJpbmcgPSBzZXRGdW5jdGlvbihlbCwgZHVyaW5nKTtcbiAgICB9LFxuICAgIGJlZm9yZSxcbiAgICBlbmQoKSB7XG4gICAgICB1bmRvU3RhcnQoKTtcbiAgICAgIHVuZG9FbmQgPSBzZXRGdW5jdGlvbihlbCwgZW5kKTtcbiAgICB9LFxuICAgIGFmdGVyLFxuICAgIGNsZWFudXAoKSB7XG4gICAgICB1bmRvRHVyaW5nKCk7XG4gICAgICB1bmRvRW5kKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHBlcmZvcm1UcmFuc2l0aW9uKGVsLCBzdGFnZXMpIHtcbiAgbGV0IGludGVycnVwdGVkLCByZWFjaGVkQmVmb3JlLCByZWFjaGVkRW5kO1xuICBsZXQgZmluaXNoID0gb25jZSgoKSA9PiB7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIGludGVycnVwdGVkID0gdHJ1ZTtcbiAgICAgIGlmICghcmVhY2hlZEJlZm9yZSlcbiAgICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgICAgaWYgKCFyZWFjaGVkRW5kKSB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgfVxuICAgICAgc3RhZ2VzLmFmdGVyKCk7XG4gICAgICBpZiAoZWwuaXNDb25uZWN0ZWQpXG4gICAgICAgIHN0YWdlcy5jbGVhbnVwKCk7XG4gICAgICBkZWxldGUgZWwuX3hfdHJhbnNpdGlvbmluZztcbiAgICB9KTtcbiAgfSk7XG4gIGVsLl94X3RyYW5zaXRpb25pbmcgPSB7XG4gICAgYmVmb3JlQ2FuY2VsczogW10sXG4gICAgYmVmb3JlQ2FuY2VsKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJlZm9yZUNhbmNlbHMucHVzaChjYWxsYmFjayk7XG4gICAgfSxcbiAgICBjYW5jZWw6IG9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICB3aGlsZSAodGhpcy5iZWZvcmVDYW5jZWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZm9yZUNhbmNlbHMuc2hpZnQoKSgpO1xuICAgICAgfVxuICAgICAgO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSksXG4gICAgZmluaXNoXG4gIH07XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgc3RhZ2VzLnN0YXJ0KCk7XG4gICAgc3RhZ2VzLmR1cmluZygpO1xuICB9KTtcbiAgaG9sZE5leHRUaWNrcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpbnRlcnJ1cHRlZClcbiAgICAgIHJldHVybjtcbiAgICBsZXQgZHVyYXRpb24gPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBsZXQgZGVsYXkgPSBOdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkRlbGF5LnJlcGxhY2UoLywuKi8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBpZiAoZHVyYXRpb24gPT09IDApXG4gICAgICBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbi5yZXBsYWNlKFwic1wiLCBcIlwiKSkgKiAxZTM7XG4gICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgIHN0YWdlcy5iZWZvcmUoKTtcbiAgICB9KTtcbiAgICByZWFjaGVkQmVmb3JlID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBzdGFnZXMuZW5kKCk7XG4gICAgICB9KTtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICAgIHNldFRpbWVvdXQoZWwuX3hfdHJhbnNpdGlvbmluZy5maW5pc2gsIGR1cmF0aW9uICsgZGVsYXkpO1xuICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIGtleSwgZmFsbGJhY2spIHtcbiAgaWYgKG1vZGlmaWVycy5pbmRleE9mKGtleSkgPT09IC0xKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgY29uc3QgcmF3VmFsdWUgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDFdO1xuICBpZiAoIXJhd1ZhbHVlKVxuICAgIHJldHVybiBmYWxsYmFjaztcbiAgaWYgKGtleSA9PT0gXCJzY2FsZVwiKSB7XG4gICAgaWYgKGlzTmFOKHJhd1ZhbHVlKSlcbiAgICAgIHJldHVybiBmYWxsYmFjaztcbiAgfVxuICBpZiAoa2V5ID09PSBcImR1cmF0aW9uXCIgfHwga2V5ID09PSBcImRlbGF5XCIpIHtcbiAgICBsZXQgbWF0Y2ggPSByYXdWYWx1ZS5tYXRjaCgvKFswLTldKyltcy8pO1xuICAgIGlmIChtYXRjaClcbiAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfVxuICBpZiAoa2V5ID09PSBcIm9yaWdpblwiKSB7XG4gICAgaWYgKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdKSkge1xuICAgICAgcmV0dXJuIFtyYXdWYWx1ZSwgbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKGtleSkgKyAyXV0uam9pbihcIiBcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdWYWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2Nsb25lLmpzXG52YXIgaXNDbG9uaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBza2lwRHVyaW5nQ2xvbmUoY2FsbGJhY2ssIGZhbGxiYWNrID0gKCkgPT4ge1xufSkge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyA/IGZhbGxiYWNrKC4uLmFyZ3MpIDogY2FsbGJhY2soLi4uYXJncyk7XG59XG5mdW5jdGlvbiBvbmx5RHVyaW5nQ2xvbmUoY2FsbGJhY2spIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiBpc0Nsb25pbmcgJiYgY2FsbGJhY2soLi4uYXJncyk7XG59XG52YXIgaW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRDbG9uZShjYWxsYmFjaykge1xuICBpbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbG9uZU5vZGUoZnJvbSwgdG8pIHtcbiAgaW50ZXJjZXB0b3JzLmZvckVhY2goKGkpID0+IGkoZnJvbSwgdG8pKTtcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvYmluZC5qc1xuZnVuY3Rpb24gYmluZChlbCwgbmFtZSwgdmFsdWUsIG1vZGlmaWVycyA9IFtdKSB7XG4gIGlmICghZWwuX3hfYmluZGluZ3MpXG4gICAgZWwuX3hfYmluZGluZ3MgPSByZWFjdGl2ZSh7fSk7XG4gIGVsLl94X2JpbmRpbmdzW25hbWVdID0gdmFsdWU7XG4gIG5hbWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSA/IGNhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgYmluZFN0eWxlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgICBiaW5kQ2xhc3NlcyhlbCwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNlbGVjdGVkXCI6XG4gICAgY2FzZSBcImNoZWNrZWRcIjpcbiAgICAgIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJpbmRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5mdW5jdGlvbiBiaW5kSW5wdXRWYWx1ZShlbCwgdmFsdWUpIHtcbiAgaWYgKGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgIGlmIChlbC5hdHRyaWJ1dGVzLnZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZnJvbU1vZGVsKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBlbC5jaGVja2VkID0gc2FmZVBhcnNlQm9vbGVhbihlbC52YWx1ZSkgPT09IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiICYmICFbbnVsbCwgdm9pZCAwXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbCwgZWwudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBlbC52YWx1ZSA9IHZhbHVlID09PSB2b2lkIDAgPyBcIlwiIDogdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcylcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzKCk7XG4gIGVsLl94X3VuZG9BZGRlZENsYXNzZXMgPSBzZXRDbGFzc2VzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kU3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkU3R5bGVzKVxuICAgIGVsLl94X3VuZG9BZGRlZFN0eWxlcygpO1xuICBlbC5feF91bmRvQWRkZWRTdHlsZXMgPSBzZXRTdHlsZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpO1xuICBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKFtudWxsLCB2b2lkIDAsIGZhbHNlXS5pbmNsdWRlcyh2YWx1ZSkgJiYgYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpXG4gICAgICB2YWx1ZSA9IG5hbWU7XG4gICAgc2V0SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldElmQ2hhbmdlZChlbCwgYXR0ck5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9IHZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFByb3BlcnR5SWZDaGFuZ2VkKGVsLCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsW3Byb3BOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZTIpID0+IHtcbiAgICByZXR1cm4gdmFsdWUyICsgXCJcIjtcbiAgfSk7XG4gIEFycmF5LmZyb20oZWwub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpIHtcbiAgaWYgKFsxLCBcIjFcIiwgXCJ0cnVlXCIsIFwib25cIiwgXCJ5ZXNcIiwgdHJ1ZV0uaW5jbHVkZXMocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKFswLCBcIjBcIiwgXCJmYWxzZVwiLCBcIm9mZlwiLCBcIm5vXCIsIGZhbHNlXS5pbmNsdWRlcyhyYXdWYWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlID8gQm9vbGVhbihyYXdWYWx1ZSkgOiBudWxsO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuQXR0cihhdHRyTmFtZSkge1xuICBjb25zdCBib29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJjaGVja2VkXCIsXG4gICAgXCJyZXF1aXJlZFwiLFxuICAgIFwicmVhZG9ubHlcIixcbiAgICBcIm9wZW5cIixcbiAgICBcInNlbGVjdGVkXCIsXG4gICAgXCJhdXRvZm9jdXNcIixcbiAgICBcIml0ZW1zY29wZVwiLFxuICAgIFwibXVsdGlwbGVcIixcbiAgICBcIm5vdmFsaWRhdGVcIixcbiAgICBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgIFwiYWxsb3dwYXltZW50cmVxdWVzdFwiLFxuICAgIFwiZm9ybW5vdmFsaWRhdGVcIixcbiAgICBcImF1dG9wbGF5XCIsXG4gICAgXCJjb250cm9sc1wiLFxuICAgIFwibG9vcFwiLFxuICAgIFwibXV0ZWRcIixcbiAgICBcInBsYXlzaW5saW5lXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJpc21hcFwiLFxuICAgIFwicmV2ZXJzZWRcIixcbiAgICBcImFzeW5jXCIsXG4gICAgXCJkZWZlclwiLFxuICAgIFwibm9tb2R1bGVcIlxuICBdO1xuICByZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0ck5hbWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkge1xuICByZXR1cm4gIVtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtY2hlY2tlZFwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdLmluY2x1ZGVzKG5hbWUpO1xufVxuZnVuY3Rpb24gZ2V0QmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgaWYgKGVsLl94X2JpbmRpbmdzICYmIGVsLl94X2JpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApXG4gICAgcmV0dXJuIGVsLl94X2JpbmRpbmdzW25hbWVdO1xuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZXh0cmFjdFByb3AoZWwsIG5hbWUsIGZhbGxiYWNrLCBleHRyYWN0ID0gdHJ1ZSkge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIGlmIChlbC5feF9pbmxpbmVCaW5kaW5ncyAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKSB7XG4gICAgbGV0IGJpbmRpbmcgPSBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXTtcbiAgICBiaW5kaW5nLmV4dHJhY3QgPSBleHRyYWN0O1xuICAgIHJldHVybiBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zKCgpID0+IHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShlbCwgYmluZGluZy5leHByZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgbGV0IGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIGlmIChhdHRyID09PSBudWxsKVxuICAgIHJldHVybiB0eXBlb2YgZmFsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGZhbGxiYWNrKCkgOiBmYWxsYmFjaztcbiAgaWYgKGF0dHIgPT09IFwiXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKSB7XG4gICAgcmV0dXJuICEhW25hbWUsIFwidHJ1ZVwiXS5pbmNsdWRlcyhhdHRyKTtcbiAgfVxuICByZXR1cm4gYXR0cjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZW50YW5nbGUuanNcbmZ1bmN0aW9uIGVudGFuZ2xlKHsgZ2V0OiBvdXRlckdldCwgc2V0OiBvdXRlclNldCB9LCB7IGdldDogaW5uZXJHZXQsIHNldDogaW5uZXJTZXQgfSkge1xuICBsZXQgZmlyc3RSdW4gPSB0cnVlO1xuICBsZXQgb3V0ZXJIYXNoO1xuICBsZXQgaW5uZXJIYXNoO1xuICBsZXQgcmVmZXJlbmNlID0gZWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3V0ZXIgPSBvdXRlckdldCgpO1xuICAgIGxldCBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICBmaXJzdFJ1biA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb3V0ZXJIYXNoTGF0ZXN0ID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgICAgbGV0IGlubmVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIGlmIChvdXRlckhhc2hMYXRlc3QgIT09IG91dGVySGFzaCkge1xuICAgICAgICBpbm5lclNldChjbG9uZUlmT2JqZWN0KG91dGVyKSk7XG4gICAgICB9IGVsc2UgaWYgKG91dGVySGFzaExhdGVzdCAhPT0gaW5uZXJIYXNoTGF0ZXN0KSB7XG4gICAgICAgIG91dGVyU2V0KGNsb25lSWZPYmplY3QoaW5uZXIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICAgIG91dGVySGFzaCA9IEpTT04uc3RyaW5naWZ5KG91dGVyR2V0KCkpO1xuICAgIGlubmVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyR2V0KCkpO1xuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZWxlYXNlKHJlZmVyZW5jZSk7XG4gIH07XG59XG5mdW5jdGlvbiBjbG9uZUlmT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSkgOiB2YWx1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3BsdWdpbi5qc1xuZnVuY3Rpb24gcGx1Z2luKGNhbGxiYWNrKSB7XG4gIGxldCBjYWxsYmFja3MgPSBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSA/IGNhbGxiYWNrIDogW2NhbGxiYWNrXTtcbiAgY2FsbGJhY2tzLmZvckVhY2goKGkpID0+IGkoYWxwaW5lX2RlZmF1bHQpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3N0b3JlLmpzXG52YXIgc3RvcmVzID0ge307XG52YXIgaXNSZWFjdGl2ZSA9IGZhbHNlO1xuZnVuY3Rpb24gc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc1JlYWN0aXZlKSB7XG4gICAgc3RvcmVzID0gcmVhY3RpdmUoc3RvcmVzKTtcbiAgICBpc1JlYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzdG9yZXNbbmFtZV07XG4gIH1cbiAgc3RvcmVzW25hbWVdID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoXCJpbml0XCIpICYmIHR5cGVvZiB2YWx1ZS5pbml0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBzdG9yZXNbbmFtZV0uaW5pdCgpO1xuICB9XG4gIGluaXRJbnRlcmNlcHRvcnMoc3RvcmVzW25hbWVdKTtcbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xMy4xMFwiLFxuICBmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMsXG4gIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMsXG4gIGRpc2FibGVFZmZlY3RTY2hlZHVsaW5nLFxuICBzdGFydE9ic2VydmluZ011dGF0aW9ucyxcbiAgc3RvcE9ic2VydmluZ011dGF0aW9ucyxcbiAgc2V0UmVhY3Rpdml0eUVuZ2luZSxcbiAgb25BdHRyaWJ1dGVSZW1vdmVkLFxuICBvbkF0dHJpYnV0ZXNBZGRlZCxcbiAgY2xvc2VzdERhdGFTdGFjayxcbiAgc2tpcER1cmluZ0Nsb25lLFxuICBvbmx5RHVyaW5nQ2xvbmUsXG4gIGFkZFJvb3RTZWxlY3RvcixcbiAgYWRkSW5pdFNlbGVjdG9yLFxuICBpbnRlcmNlcHRDbG9uZSxcbiAgYWRkU2NvcGVUb05vZGUsXG4gIGRlZmVyTXV0YXRpb25zLFxuICBtYXBBdHRyaWJ1dGVzLFxuICBldmFsdWF0ZUxhdGVyLFxuICBpbnRlcmNlcHRJbml0LFxuICBzZXRFdmFsdWF0b3IsXG4gIG1lcmdlUHJveGllcyxcbiAgZXh0cmFjdFByb3AsXG4gIGZpbmRDbG9zZXN0LFxuICBvbkVsUmVtb3ZlZCxcbiAgY2xvc2VzdFJvb3QsXG4gIGRlc3Ryb3lUcmVlLFxuICBpbnRlcmNlcHRvcixcbiAgLy8gSU5URVJOQUw6IG5vdCBwdWJsaWMgQVBJIGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG1ham9yIHJlbGVhc2UuXG4gIHRyYW5zaXRpb24sXG4gIC8vIElOVEVSTkFMXG4gIHNldFN0eWxlcyxcbiAgLy8gSU5URVJOQUxcbiAgbXV0YXRlRG9tLFxuICBkaXJlY3RpdmUsXG4gIGVudGFuZ2xlLFxuICB0aHJvdHRsZSxcbiAgZGVib3VuY2UsXG4gIGV2YWx1YXRlLFxuICBpbml0VHJlZSxcbiAgbmV4dFRpY2ssXG4gIHByZWZpeGVkOiBwcmVmaXgsXG4gIHByZWZpeDogc2V0UHJlZml4LFxuICBwbHVnaW4sXG4gIG1hZ2ljLFxuICBzdG9yZSxcbiAgc3RhcnQsXG4gIGNsb25lLFxuICAvLyBJTlRFUk5BTFxuICBjbG9uZU5vZGUsXG4gIC8vIElOVEVSTkFMXG4gIGJvdW5kOiBnZXRCaW5kaW5nLFxuICAkZGF0YTogc2NvcGUsXG4gIHdhdGNoLFxuICB3YWxrLFxuICBkYXRhLFxuICBiaW5kOiBiaW5kMlxufTtcbnZhciBhbHBpbmVfZGVmYXVsdCA9IEFscGluZTtcblxuLy8gcGFja2FnZXMvY3NwL3NyYy9ldmFsdWF0b3IuanNcbmZ1bmN0aW9uIGNzcEV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbikge1xuICBsZXQgZGF0YVN0YWNrID0gZ2VuZXJhdGVEYXRhU3RhY2soZWwpO1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pO1xuICB9XG4gIGxldCBldmFsdWF0b3IgPSBnZW5lcmF0ZUV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbiwgZGF0YVN0YWNrKTtcbiAgcmV0dXJuIHRyeUNhdGNoLmJpbmQobnVsbCwgZWwsIGV4cHJlc3Npb24sIGV2YWx1YXRvcik7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZURhdGFTdGFjayhlbCkge1xuICBsZXQgb3ZlcnJpZGRlbk1hZ2ljcyA9IHt9O1xuICBpbmplY3RNYWdpY3Mob3ZlcnJpZGRlbk1hZ2ljcywgZWwpO1xuICByZXR1cm4gW292ZXJyaWRkZW5NYWdpY3MsIC4uLmNsb3Nlc3REYXRhU3RhY2soZWwpXTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yKGVsLCBleHByZXNzaW9uLCBkYXRhU3RhY2spIHtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGxldCBjb21wbGV0ZVNjb3BlID0gbWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pO1xuICAgIGlmIChjb21wbGV0ZVNjb3BlW2V4cHJlc3Npb25dID09PSB2b2lkIDApIHtcbiAgICAgIHRocm93RXhwcmVzc2lvbkVycm9yKGVsLCBleHByZXNzaW9uKTtcbiAgICB9XG4gICAgcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgY29tcGxldGVTY29wZVtleHByZXNzaW9uXSwgY29tcGxldGVTY29wZSwgcGFyYW1zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHRocm93RXhwcmVzc2lvbkVycm9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBgQWxwaW5lIEVycm9yOiBBbHBpbmUgaXMgdW5hYmxlIHRvIGludGVycHJldCB0aGUgZm9sbG93aW5nIGV4cHJlc3Npb24gdXNpbmcgdGhlIENTUC1mcmllbmRseSBidWlsZDpcblxuXCIke2V4cHJlc3Npb259XCJcblxuUmVhZCBtb3JlIGFib3V0IHRoZSBBbHBpbmUncyBDU1AtZnJpZW5kbHkgYnVpbGQgcmVzdHJpY3Rpb25zIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L2FkdmFuY2VkL2NzcFxuXG5gLFxuICAgIGVsXG4gICk7XG59XG5cbi8vIHBhY2thZ2VzL2NzcC9zcmMvaW5kZXguanNcbnZhciBpbXBvcnRfcmVhY3Rpdml0eTEwID0gX190b0VTTShyZXF1aXJlX3JlYWN0aXZpdHkoKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJG5leHRUaWNrLmpzXG5tYWdpYyhcIm5leHRUaWNrXCIsICgpID0+IG5leHRUaWNrKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGlzcGF0Y2guanNcbm1hZ2ljKFwiZGlzcGF0Y2hcIiwgKGVsKSA9PiBkaXNwYXRjaC5iaW5kKGRpc3BhdGNoLCBlbCkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyR3YXRjaC5qc1xubWFnaWMoXCJ3YXRjaFwiLCAoZWwsIHsgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXAgfSkgPT4gKGtleSwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGtleSk7XG4gIGxldCBnZXR0ZXIgPSAoKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGV2YWx1YXRlMigoaSkgPT4gdmFsdWUgPSBpKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGxldCB1bndhdGNoID0gd2F0Y2goZ2V0dGVyLCBjYWxsYmFjayk7XG4gIGNsZWFudXAodW53YXRjaCk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kc3RvcmUuanNcbm1hZ2ljKFwic3RvcmVcIiwgZ2V0U3RvcmVzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZGF0YS5qc1xubWFnaWMoXCJkYXRhXCIsIChlbCkgPT4gc2NvcGUoZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcm9vdC5qc1xubWFnaWMoXCJyb290XCIsIChlbCkgPT4gY2xvc2VzdFJvb3QoZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kcmVmcy5qc1xubWFnaWMoXCJyZWZzXCIsIChlbCkgPT4ge1xuICBpZiAoZWwuX3hfcmVmc19wcm94eSlcbiAgICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbiAgZWwuX3hfcmVmc19wcm94eSA9IG1lcmdlUHJveGllcyhnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSk7XG4gIHJldHVybiBlbC5feF9yZWZzX3Byb3h5O1xufSk7XG5mdW5jdGlvbiBnZXRBcnJheU9mUmVmT2JqZWN0KGVsKSB7XG4gIGxldCByZWZPYmplY3RzID0gW107XG4gIGZpbmRDbG9zZXN0KGVsLCAoaSkgPT4ge1xuICAgIGlmIChpLl94X3JlZnMpXG4gICAgICByZWZPYmplY3RzLnB1c2goaS5feF9yZWZzKTtcbiAgfSk7XG4gIHJldHVybiByZWZPYmplY3RzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaWRzLmpzXG52YXIgZ2xvYmFsSWRNZW1vID0ge307XG5mdW5jdGlvbiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSkge1xuICBpZiAoIWdsb2JhbElkTWVtb1tuYW1lXSlcbiAgICBnbG9iYWxJZE1lbW9bbmFtZV0gPSAwO1xuICByZXR1cm4gKytnbG9iYWxJZE1lbW9bbmFtZV07XG59XG5mdW5jdGlvbiBjbG9zZXN0SWRSb290KGVsLCBuYW1lKSB7XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbCwgKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5feF9pZHMgJiYgZWxlbWVudC5feF9pZHNbbmFtZV0pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRJZFJvb3QoZWwsIG5hbWUpIHtcbiAgaWYgKCFlbC5feF9pZHMpXG4gICAgZWwuX3hfaWRzID0ge307XG4gIGlmICghZWwuX3hfaWRzW25hbWVdKVxuICAgIGVsLl94X2lkc1tuYW1lXSA9IGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kaWQuanNcbm1hZ2ljKFwiaWRcIiwgKGVsLCB7IGNsZWFudXAgfSkgPT4gKG5hbWUsIGtleSA9IG51bGwpID0+IHtcbiAgbGV0IGNhY2hlS2V5ID0gYCR7bmFtZX0ke2tleSA/IGAtJHtrZXl9YCA6IFwiXCJ9YDtcbiAgcmV0dXJuIGNhY2hlSWRCeU5hbWVPbkVsZW1lbnQoZWwsIGNhY2hlS2V5LCBjbGVhbnVwLCAoKSA9PiB7XG4gICAgbGV0IHJvb3QgPSBjbG9zZXN0SWRSb290KGVsLCBuYW1lKTtcbiAgICBsZXQgaWQgPSByb290ID8gcm9vdC5feF9pZHNbbmFtZV0gOiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSk7XG4gICAgcmV0dXJuIGtleSA/IGAke25hbWV9LSR7aWR9LSR7a2V5fWAgOiBgJHtuYW1lfS0ke2lkfWA7XG4gIH0pO1xufSk7XG5pbnRlcmNlcHRDbG9uZSgoZnJvbSwgdG8pID0+IHtcbiAgaWYgKGZyb20uX3hfaWQpIHtcbiAgICB0by5feF9pZCA9IGZyb20uX3hfaWQ7XG4gIH1cbn0pO1xuZnVuY3Rpb24gY2FjaGVJZEJ5TmFtZU9uRWxlbWVudChlbCwgY2FjaGVLZXksIGNsZWFudXAsIGNhbGxiYWNrKSB7XG4gIGlmICghZWwuX3hfaWQpXG4gICAgZWwuX3hfaWQgPSB7fTtcbiAgaWYgKGVsLl94X2lkW2NhY2hlS2V5XSlcbiAgICByZXR1cm4gZWwuX3hfaWRbY2FjaGVLZXldO1xuICBsZXQgb3V0cHV0ID0gY2FsbGJhY2soKTtcbiAgZWwuX3hfaWRbY2FjaGVLZXldID0gb3V0cHV0O1xuICBjbGVhbnVwKCgpID0+IHtcbiAgICBkZWxldGUgZWwuX3hfaWRbY2FjaGVLZXldO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kZWwuanNcbm1hZ2ljKFwiZWxcIiwgKGVsKSA9PiBlbCk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvaW5kZXguanNcbndhcm5NaXNzaW5nUGx1Z2luTWFnaWMoXCJGb2N1c1wiLCBcImZvY3VzXCIsIFwiZm9jdXNcIik7XG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiUGVyc2lzdFwiLCBcInBlcnNpc3RcIiwgXCJwZXJzaXN0XCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhuYW1lLCBtYWdpY05hbWUsIHNsdWcpIHtcbiAgbWFnaWMobWFnaWNOYW1lLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgWyQke21hZ2ljTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWxhYmxlLmpzXG5kaXJlY3RpdmUoXCJtb2RlbGFibGVcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBjbGVhbnVwIH0pID0+IHtcbiAgbGV0IGZ1bmMgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgbGV0IGlubmVyR2V0ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZnVuYygoaSkgPT4gcmVzdWx0ID0gaSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbGV0IGV2YWx1YXRlSW5uZXJTZXQgPSBldmFsdWF0ZUxhdGVyMihgJHtleHByZXNzaW9ufSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgbGV0IGlubmVyU2V0ID0gKHZhbCkgPT4gZXZhbHVhdGVJbm5lclNldCgoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbCB9IH0pO1xuICBsZXQgaW5pdGlhbFZhbHVlID0gaW5uZXJHZXQoKTtcbiAgaW5uZXJTZXQoaW5pdGlhbFZhbHVlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlmICghZWwuX3hfbW9kZWwpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCk7XG4gICAgbGV0IG91dGVyR2V0ID0gZWwuX3hfbW9kZWwuZ2V0O1xuICAgIGxldCBvdXRlclNldCA9IGVsLl94X21vZGVsLnNldDtcbiAgICBsZXQgcmVsZWFzZUVudGFuZ2xlbWVudCA9IGVudGFuZ2xlKFxuICAgICAge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyR2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIG91dGVyU2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbm5lckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpbm5lclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGNsZWFudXAocmVsZWFzZUVudGFuZ2xlbWVudCk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtdGVsZXBvcnQuanNcbmRpcmVjdGl2ZShcInRlbGVwb3J0XCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwIH0pID0+IHtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZW1wbGF0ZVwiKVxuICAgIHdhcm4oXCJ4LXRlbGVwb3J0IGNhbiBvbmx5IGJlIHVzZWQgb24gYSA8dGVtcGxhdGU+IHRhZ1wiLCBlbCk7XG4gIGxldCB0YXJnZXQgPSBnZXRUYXJnZXQoZXhwcmVzc2lvbik7XG4gIGxldCBjbG9uZTIgPSBlbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgZWwuX3hfdGVsZXBvcnQgPSBjbG9uZTI7XG4gIGNsb25lMi5feF90ZWxlcG9ydEJhY2sgPSBlbDtcbiAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWxlcG9ydC10ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgY2xvbmUyLnNldEF0dHJpYnV0ZShcImRhdGEtdGVsZXBvcnQtdGFyZ2V0XCIsIHRydWUpO1xuICBpZiAoZWwuX3hfZm9yd2FyZEV2ZW50cykge1xuICAgIGVsLl94X2ZvcndhcmRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBjbG9uZTIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IGUuY29uc3RydWN0b3IoZS50eXBlLCBlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gIGxldCBwbGFjZUluRG9tID0gKGNsb25lMywgdGFyZ2V0MiwgbW9kaWZpZXJzMikgPT4ge1xuICAgIGlmIChtb2RpZmllcnMyLmluY2x1ZGVzKFwicHJlcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIpO1xuICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzMi5pbmNsdWRlcyhcImFwcGVuZFwiKSkge1xuICAgICAgdGFyZ2V0Mi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTMsIHRhcmdldDIubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQyLmFwcGVuZENoaWxkKGNsb25lMyk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVEb20oKCkgPT4ge1xuICAgIHBsYWNlSW5Eb20oY2xvbmUyLCB0YXJnZXQsIG1vZGlmaWVycyk7XG4gICAgc2tpcER1cmluZ0Nsb25lKCgpID0+IHtcbiAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgICBjbG9uZTIuX3hfaWdub3JlID0gdHJ1ZTtcbiAgICB9KSgpO1xuICB9KTtcbiAgZWwuX3hfdGVsZXBvcnRQdXRCYWNrID0gKCkgPT4ge1xuICAgIGxldCB0YXJnZXQyID0gZ2V0VGFyZ2V0KGV4cHJlc3Npb24pO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBwbGFjZUluRG9tKGVsLl94X3RlbGVwb3J0LCB0YXJnZXQyLCBtb2RpZmllcnMpO1xuICAgIH0pO1xuICB9O1xuICBjbGVhbnVwKCgpID0+IGNsb25lMi5yZW1vdmUoKSk7XG59KTtcbnZhciB0ZWxlcG9ydENvbnRhaW5lckR1cmluZ0Nsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZ1bmN0aW9uIGdldFRhcmdldChleHByZXNzaW9uKSB7XG4gIGxldCB0YXJnZXQgPSBza2lwRHVyaW5nQ2xvbmUoKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGV4cHJlc3Npb24pO1xuICB9LCAoKSA9PiB7XG4gICAgcmV0dXJuIHRlbGVwb3J0Q29udGFpbmVyRHVyaW5nQ2xvbmU7XG4gIH0pKCk7XG4gIGlmICghdGFyZ2V0KVxuICAgIHdhcm4oYENhbm5vdCBmaW5kIHgtdGVsZXBvcnQgZWxlbWVudCBmb3Igc2VsZWN0b3I6IFwiJHtleHByZXNzaW9ufVwiYCk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaWdub3JlLmpzXG52YXIgaGFuZGxlciA9ICgpID0+IHtcbn07XG5oYW5kbGVyLmlubGluZSA9IChlbCwgeyBtb2RpZmllcnMgfSwgeyBjbGVhbnVwIH0pID0+IHtcbiAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGVsLl94X2lnbm9yZVNlbGYgPSB0cnVlIDogZWwuX3hfaWdub3JlID0gdHJ1ZTtcbiAgY2xlYW51cCgoKSA9PiB7XG4gICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGVsLl94X2lnbm9yZTtcbiAgfSk7XG59O1xuZGlyZWN0aXZlKFwiaWdub3JlXCIsIGhhbmRsZXIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWVmZmVjdC5qc1xuZGlyZWN0aXZlKFwiZWZmZWN0XCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGVmZmVjdDMoZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvb24uanNcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgbW9kaWZpZXJzLCBjYWxsYmFjaykge1xuICBsZXQgbGlzdGVuZXJUYXJnZXQgPSBlbDtcbiAgbGV0IGhhbmRsZXI0ID0gKGUpID0+IGNhbGxiYWNrKGUpO1xuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBsZXQgd3JhcEhhbmRsZXIgPSAoY2FsbGJhY2syLCB3cmFwcGVyKSA9PiAoZSkgPT4gd3JhcHBlcihjYWxsYmFjazIsIGUpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG90XCIpKVxuICAgIGV2ZW50ID0gZG90U3ludGF4KGV2ZW50KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImNhbWVsXCIpKVxuICAgIGV2ZW50ID0gY2FtZWxDYXNlMihldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwYXNzaXZlXCIpKVxuICAgIG9wdGlvbnMucGFzc2l2ZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYXB0dXJlXCIpKVxuICAgIG9wdGlvbnMuY2FwdHVyZSA9IHRydWU7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ3aW5kb3dcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSB3aW5kb3c7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJkb2N1bWVudFwiKSlcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZGVib3VuY2VcIikpIHtcbiAgICBsZXQgbmV4dE1vZGlmaWVyID0gbW9kaWZpZXJzW21vZGlmaWVycy5pbmRleE9mKFwiZGVib3VuY2VcIikgKyAxXSB8fCBcImludmFsaWQtd2FpdFwiO1xuICAgIGxldCB3YWl0ID0gaXNOdW1lcmljKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA/IE51bWJlcihuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgOiAyNTA7XG4gICAgaGFuZGxlcjQgPSBkZWJvdW5jZShoYW5kbGVyNCwgd2FpdCk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInRocm90dGxlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcInRocm90dGxlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gdGhyb3R0bGUoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJwcmV2ZW50XCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic3RvcFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJvbmNlXCIpKSB7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIG5leHQoZSk7XG4gICAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImF3YXlcIikgfHwgbW9kaWZpZXJzLmluY2x1ZGVzKFwib3V0c2lkZVwiKSkge1xuICAgIGxpc3RlbmVyVGFyZ2V0ID0gZG9jdW1lbnQ7XG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGlmIChlbC5jb250YWlucyhlLnRhcmdldCkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlLnRhcmdldC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5vZmZzZXRXaWR0aCA8IDEgJiYgZWwub2Zmc2V0SGVpZ2h0IDwgMSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKGVsLl94X2lzU2hvd24gPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpKVxuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBlLnRhcmdldCA9PT0gZWwgJiYgbmV4dChlKTtcbiAgICB9KTtcbiAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICBpZiAoaXNLZXlFdmVudChldmVudCkpIHtcbiAgICAgIGlmIChpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBuZXh0KGUpO1xuICB9KTtcbiAgbGlzdGVuZXJUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVyVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRvdFN5bnRheChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLy0vZywgXCIuXCIpO1xufVxuZnVuY3Rpb24gY2FtZWxDYXNlMihzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLShcXHcpL2csIChtYXRjaCwgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpYyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBrZWJhYkNhc2UyKHN1YmplY3QpIHtcbiAgaWYgKFtcIiBcIiwgXCJfXCJdLmluY2x1ZGVzKFxuICAgIHN1YmplY3RcbiAgKSlcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgcmV0dXJuIHN1YmplY3QucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS5yZXBsYWNlKC9bX1xcc10vLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGlzS2V5RXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIFtcImtleWRvd25cIiwgXCJrZXl1cFwiXS5pbmNsdWRlcyhldmVudCk7XG59XG5mdW5jdGlvbiBpc0xpc3RlbmluZ0ZvckFTcGVjaWZpY0tleVRoYXRIYXNudEJlZW5QcmVzc2VkKGUsIG1vZGlmaWVycykge1xuICBsZXQga2V5TW9kaWZpZXJzID0gbW9kaWZpZXJzLmZpbHRlcigoaSkgPT4ge1xuICAgIHJldHVybiAhW1wid2luZG93XCIsIFwiZG9jdW1lbnRcIiwgXCJwcmV2ZW50XCIsIFwic3RvcFwiLCBcIm9uY2VcIiwgXCJjYXB0dXJlXCJdLmluY2x1ZGVzKGkpO1xuICB9KTtcbiAgaWYgKGtleU1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IGRlYm91bmNlSW5kZXggPSBrZXlNb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpO1xuICAgIGtleU1vZGlmaWVycy5zcGxpY2UoZGVib3VuY2VJbmRleCwgaXNOdW1lcmljKChrZXlNb2RpZmllcnNbZGVib3VuY2VJbmRleCArIDFdIHx8IFwiaW52YWxpZC13YWl0XCIpLnNwbGl0KFwibXNcIilbMF0pID8gMiA6IDEpO1xuICB9XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChrZXlNb2RpZmllcnMubGVuZ3RoID09PSAxICYmIGtleVRvTW9kaWZpZXJzKGUua2V5KS5pbmNsdWRlcyhrZXlNb2RpZmllcnNbMF0pKVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3lzdGVtS2V5TW9kaWZpZXJzID0gW1wiY3RybFwiLCBcInNoaWZ0XCIsIFwiYWx0XCIsIFwibWV0YVwiLCBcImNtZFwiLCBcInN1cGVyXCJdO1xuICBjb25zdCBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycyA9IHN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiBrZXlNb2RpZmllcnMuaW5jbHVkZXMobW9kaWZpZXIpKTtcbiAga2V5TW9kaWZpZXJzID0ga2V5TW9kaWZpZXJzLmZpbHRlcigoaSkgPT4gIXNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmluY2x1ZGVzKGkpKTtcbiAgaWYgKHNlbGVjdGVkU3lzdGVtS2V5TW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMgPSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5maWx0ZXIoKG1vZGlmaWVyKSA9PiB7XG4gICAgICBpZiAobW9kaWZpZXIgPT09IFwiY21kXCIgfHwgbW9kaWZpZXIgPT09IFwic3VwZXJcIilcbiAgICAgICAgbW9kaWZpZXIgPSBcIm1ldGFcIjtcbiAgICAgIHJldHVybiBlW2Ake21vZGlmaWVyfUtleWBdO1xuICAgIH0pO1xuICAgIGlmIChhY3RpdmVseVByZXNzZWRLZXlNb2RpZmllcnMubGVuZ3RoID09PSBzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGgpIHtcbiAgICAgIGlmIChrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGtleVRvTW9kaWZpZXJzKGtleSkge1xuICBpZiAoIWtleSlcbiAgICByZXR1cm4gW107XG4gIGtleSA9IGtlYmFiQ2FzZTIoa2V5KTtcbiAgbGV0IG1vZGlmaWVyVG9LZXlNYXAgPSB7XG4gICAgXCJjdHJsXCI6IFwiY29udHJvbFwiLFxuICAgIFwic2xhc2hcIjogXCIvXCIsXG4gICAgXCJzcGFjZVwiOiBcIiBcIixcbiAgICBcInNwYWNlYmFyXCI6IFwiIFwiLFxuICAgIFwiY21kXCI6IFwibWV0YVwiLFxuICAgIFwiZXNjXCI6IFwiZXNjYXBlXCIsXG4gICAgXCJ1cFwiOiBcImFycm93LXVwXCIsXG4gICAgXCJkb3duXCI6IFwiYXJyb3ctZG93blwiLFxuICAgIFwibGVmdFwiOiBcImFycm93LWxlZnRcIixcbiAgICBcInJpZ2h0XCI6IFwiYXJyb3ctcmlnaHRcIixcbiAgICBcInBlcmlvZFwiOiBcIi5cIixcbiAgICBcImNvbW1hXCI6IFwiLFwiLFxuICAgIFwiZXF1YWxcIjogXCI9XCIsXG4gICAgXCJtaW51c1wiOiBcIi1cIixcbiAgICBcInVuZGVyc2NvcmVcIjogXCJfXCJcbiAgfTtcbiAgbW9kaWZpZXJUb0tleU1hcFtrZXldID0ga2V5O1xuICByZXR1cm4gT2JqZWN0LmtleXMobW9kaWZpZXJUb0tleU1hcCkubWFwKChtb2RpZmllcikgPT4ge1xuICAgIGlmIChtb2RpZmllclRvS2V5TWFwW21vZGlmaWVyXSA9PT0ga2V5KVxuICAgICAgcmV0dXJuIG1vZGlmaWVyO1xuICB9KS5maWx0ZXIoKG1vZGlmaWVyKSA9PiBtb2RpZmllcik7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtbW9kZWwuanNcbmRpcmVjdGl2ZShcIm1vZGVsXCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXAgfSkgPT4ge1xuICBsZXQgc2NvcGVUYXJnZXQgPSBlbDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhcmVudFwiKSkge1xuICAgIHNjb3BlVGFyZ2V0ID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuICBsZXQgZXZhbHVhdGVHZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlU2V0O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cHJlc3Npb24oKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbigpfSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIHtcbiAgICBldmFsdWF0ZVNldCA9ICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGxldCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUpO1xuICAgIHJldHVybiBpc0dldHRlclNldHRlcihyZXN1bHQpID8gcmVzdWx0LmdldCgpIDogcmVzdWx0O1xuICB9O1xuICBsZXQgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZTIpID0+IHJlc3VsdCA9IHZhbHVlMik7XG4gICAgaWYgKGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5zZXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmFsdWF0ZVNldCgoKSA9PiB7XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWx1ZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBpc0Nsb25pbmcgPyAoKSA9PiB7XG4gIH0gOiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBzZXRWYWx1ZShnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGUsIGdldFZhbHVlKCkpKTtcbiAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmaWxsXCIpKSB7XG4gICAgaWYgKFt2b2lkIDAsIG51bGwsIFwiXCJdLmluY2x1ZGVzKGdldFZhbHVlKCkpIHx8IGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJiBBcnJheS5pc0FycmF5KGdldFZhbHVlKCkpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgc2V0VmFsdWUoXG4gICAgICAgIGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgeyB0YXJnZXQ6IGVsIH0sIGdldFZhbHVlKCkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBpZiAoIWVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzKVxuICAgIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzID0ge307XG4gIGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSA9IHJlbW92ZUxpc3RlbmVyO1xuICBjbGVhbnVwKCgpID0+IGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpKTtcbiAgaWYgKGVsLmZvcm0pIHtcbiAgICBsZXQgcmVtb3ZlUmVzZXRMaXN0ZW5lciA9IG9uKGVsLmZvcm0sIFwicmVzZXRcIiwgW10sIChlKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiBlbC5feF9tb2RlbCAmJiBlbC5feF9tb2RlbC5zZXQoZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCB7IHRhcmdldDogZWwgfSwgZ2V0VmFsdWUoKSkpKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwKCgpID0+IHJlbW92ZVJlc2V0TGlzdGVuZXIoKSk7XG4gIH1cbiAgZWwuX3hfbW9kZWwgPSB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIGdldFZhbHVlKCk7XG4gICAgfSxcbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSlcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB3aW5kb3cuZnJvbU1vZGVsID0gdHJ1ZTtcbiAgICBtdXRhdGVEb20oKCkgPT4gYmluZChlbCwgXCJ2YWx1ZVwiLCB2YWx1ZSkpO1xuICAgIGRlbGV0ZSB3aW5kb3cuZnJvbU1vZGVsO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBnZXRWYWx1ZSgpO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ1bmludHJ1c2l2ZVwiKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzU2FtZU5vZGUoZWwpKVxuICAgICAgcmV0dXJuO1xuICAgIGVsLl94X2ZvcmNlTW9kZWxVcGRhdGUodmFsdWUpO1xuICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlbCwgbW9kaWZpZXJzLCBldmVudCwgY3VycmVudFZhbHVlKSB7XG4gIHJldHVybiBtdXRhdGVEb20oKCkgPT4ge1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIGV2ZW50LmRldGFpbCAhPT0gbnVsbCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMCA/IGV2ZW50LmRldGFpbCA6IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBlbHNlIGlmIChlbC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gc2FmZVBhcnNlQm9vbGVhbihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZCA/IGN1cnJlbnRWYWx1ZS5pbmNsdWRlcyhuZXdWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBjdXJyZW50VmFsdWUuY29uY2F0KFtuZXdWYWx1ZV0pIDogY3VycmVudFZhbHVlLmZpbHRlcigoZWwyKSA9PiAhY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKGVsMiwgbmV3VmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiAmJiBlbC5tdWx0aXBsZSkge1xuICAgICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm51bWJlclwiKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zKS5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgICByZXR1cm4gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImJvb2xlYW5cIikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgcmF3VmFsdWUgPSBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHNhZmVQYXJzZUJvb2xlYW4ocmF3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgfHwgb3B0aW9uLnRleHQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKGVsLnR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpKSB7XG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VOdW1iZXIobmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJib29sZWFuXCIpKSB7XG4gICAgICAgIHJldHVybiBzYWZlUGFyc2VCb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidHJpbVwiKSkge1xuICAgICAgICByZXR1cm4gbmV3VmFsdWUudHJpbSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzYWZlUGFyc2VOdW1iZXIocmF3VmFsdWUpIHtcbiAgbGV0IG51bWJlciA9IHJhd1ZhbHVlID8gcGFyc2VGbG9hdChyYXdWYWx1ZSkgOiBudWxsO1xuICByZXR1cm4gaXNOdW1lcmljMihudW1iZXIpID8gbnVtYmVyIDogcmF3VmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZTIodmFsdWVBLCB2YWx1ZUIpIHtcbiAgcmV0dXJuIHZhbHVlQSA9PSB2YWx1ZUI7XG59XG5mdW5jdGlvbiBpc051bWVyaWMyKHN1YmplY3QpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHN1YmplY3QpICYmICFpc05hTihzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGlzR2V0dGVyU2V0dGVyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLmdldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWx1ZS5zZXQgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1jbG9hay5qc1xuZGlyZWN0aXZlKFwiY2xvYWtcIiwgKGVsKSA9PiBxdWV1ZU1pY3JvdGFzaygoKSA9PiBtdXRhdGVEb20oKCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKHByZWZpeChcImNsb2FrXCIpKSkpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pbml0LmpzXG5hZGRJbml0U2VsZWN0b3IoKCkgPT4gYFske3ByZWZpeChcImluaXRcIil9XWApO1xuZGlyZWN0aXZlKFwiaW5pdFwiLCBza2lwRHVyaW5nQ2xvbmUoKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuICEhZXhwcmVzc2lvbi50cmltKCkgJiYgZXZhbHVhdGUyKGV4cHJlc3Npb24sIHt9LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGV2YWx1YXRlMihleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xufSkpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRleHQuanNcbmRpcmVjdGl2ZShcInRleHRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaHRtbC5qc1xuZGlyZWN0aXZlKFwiaHRtbFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcjIoZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4ge1xuICAgIGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICBlbC5feF9pZ25vcmVTZWxmID0gdHJ1ZTtcbiAgICAgICAgaW5pdFRyZWUoZWwpO1xuICAgICAgICBkZWxldGUgZWwuX3hfaWdub3JlU2VsZjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWJpbmQuanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiOlwiLCBpbnRvKHByZWZpeChcImJpbmQ6XCIpKSkpO1xudmFyIGhhbmRsZXIyID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24sIG9yaWdpbmFsIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIGxldCBiaW5kaW5nUHJvdmlkZXJzID0ge307XG4gICAgaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhiaW5kaW5nUHJvdmlkZXJzKTtcbiAgICBsZXQgZ2V0QmluZGluZ3MgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgICBnZXRCaW5kaW5ncygoYmluZGluZ3MpID0+IHtcbiAgICAgIGFwcGx5QmluZGluZ3NPYmplY3QoZWwsIGJpbmRpbmdzLCBvcmlnaW5hbCk7XG4gICAgfSwgeyBzY29wZTogYmluZGluZ1Byb3ZpZGVycyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSBcImtleVwiKVxuICAgIHJldHVybiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pO1xuICBpZiAoZWwuX3hfaW5saW5lQmluZGluZ3MgJiYgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXS5leHRyYWN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCAmJiB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBleHByZXNzaW9uLm1hdGNoKC9cXC4vKSkge1xuICAgICAgcmVzdWx0ID0gXCJcIjtcbiAgICB9XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIHZhbHVlLCByZXN1bHQsIG1vZGlmaWVycykpO1xuICB9KSk7XG4gIGNsZWFudXAoKCkgPT4ge1xuICAgIGVsLl94X3VuZG9BZGRlZENsYXNzZXMgJiYgZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcygpO1xuICAgIGVsLl94X3VuZG9BZGRlZFN0eWxlcyAmJiBlbC5feF91bmRvQWRkZWRTdHlsZXMoKTtcbiAgfSk7XG59O1xuaGFuZGxlcjIuaW5saW5lID0gKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSkgPT4ge1xuICBpZiAoIXZhbHVlKVxuICAgIHJldHVybjtcbiAgaWYgKCFlbC5feF9pbmxpbmVCaW5kaW5ncylcbiAgICBlbC5feF9pbmxpbmVCaW5kaW5ncyA9IHt9O1xuICBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0gPSB7IGV4cHJlc3Npb24sIGV4dHJhY3Q6IGZhbHNlIH07XG59O1xuZGlyZWN0aXZlKFwiYmluZFwiLCBoYW5kbGVyMik7XG5mdW5jdGlvbiBzdG9yZUtleUZvclhGb3IoZWwsIGV4cHJlc3Npb24pIHtcbiAgZWwuX3hfa2V5RXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtZGF0YS5qc1xuYWRkUm9vdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJkYXRhXCIpfV1gKTtcbmRpcmVjdGl2ZShcImRhdGFcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBjbGVhbnVwIH0pID0+IHtcbiAgaWYgKHNob3VsZFNraXBSZWdpc3RlcmluZ0RhdGFEdXJpbmdDbG9uZShlbCkpXG4gICAgcmV0dXJuO1xuICBleHByZXNzaW9uID0gZXhwcmVzc2lvbiA9PT0gXCJcIiA/IFwie31cIiA6IGV4cHJlc3Npb247XG4gIGxldCBtYWdpY0NvbnRleHQgPSB7fTtcbiAgaW5qZWN0TWFnaWNzKG1hZ2ljQ29udGV4dCwgZWwpO1xuICBsZXQgZGF0YVByb3ZpZGVyQ29udGV4dCA9IHt9O1xuICBpbmplY3REYXRhUHJvdmlkZXJzKGRhdGFQcm92aWRlckNvbnRleHQsIG1hZ2ljQ29udGV4dCk7XG4gIGxldCBkYXRhMiA9IGV2YWx1YXRlKGVsLCBleHByZXNzaW9uLCB7IHNjb3BlOiBkYXRhUHJvdmlkZXJDb250ZXh0IH0pO1xuICBpZiAoZGF0YTIgPT09IHZvaWQgMCB8fCBkYXRhMiA9PT0gdHJ1ZSlcbiAgICBkYXRhMiA9IHt9O1xuICBpbmplY3RNYWdpY3MoZGF0YTIsIGVsKTtcbiAgbGV0IHJlYWN0aXZlRGF0YSA9IHJlYWN0aXZlKGRhdGEyKTtcbiAgaW5pdEludGVyY2VwdG9ycyhyZWFjdGl2ZURhdGEpO1xuICBsZXQgdW5kbyA9IGFkZFNjb3BlVG9Ob2RlKGVsLCByZWFjdGl2ZURhdGEpO1xuICByZWFjdGl2ZURhdGFbXCJpbml0XCJdICYmIGV2YWx1YXRlKGVsLCByZWFjdGl2ZURhdGFbXCJpbml0XCJdKTtcbiAgY2xlYW51cCgoKSA9PiB7XG4gICAgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSAmJiBldmFsdWF0ZShlbCwgcmVhY3RpdmVEYXRhW1wiZGVzdHJveVwiXSk7XG4gICAgdW5kbygpO1xuICB9KTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2RhdGFTdGFjaykge1xuICAgIHRvLl94X2RhdGFTdGFjayA9IGZyb20uX3hfZGF0YVN0YWNrO1xuICAgIHRvLnNldEF0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiLCB0cnVlKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBzaG91bGRTa2lwUmVnaXN0ZXJpbmdEYXRhRHVyaW5nQ2xvbmUoZWwpIHtcbiAgaWYgKCFpc0Nsb25pbmcpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoaXNDbG9uaW5nTGVnYWN5KVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1oYXMtYWxwaW5lLXN0YXRlXCIpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXNob3cuanNcbmRpcmVjdGl2ZShcInNob3dcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKCFlbC5feF9kb0hpZGUpXG4gICAgZWwuX3hfZG9IaWRlID0gKCkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpbXBvcnRhbnRcIikgPyBcImltcG9ydGFudFwiIDogdm9pZCAwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIGlmICghZWwuX3hfZG9TaG93KVxuICAgIGVsLl94X2RvU2hvdyA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGlmIChlbC5zdHlsZS5sZW5ndGggPT09IDEgJiYgZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIGxldCBoaWRlID0gKCkgPT4ge1xuICAgIGVsLl94X2RvSGlkZSgpO1xuICAgIGVsLl94X2lzU2hvd24gPSBmYWxzZTtcbiAgfTtcbiAgbGV0IHNob3cgPSAoKSA9PiB7XG4gICAgZWwuX3hfZG9TaG93KCk7XG4gICAgZWwuX3hfaXNTaG93biA9IHRydWU7XG4gIH07XG4gIGxldCBjbGlja0F3YXlDb21wYXRpYmxlU2hvdyA9ICgpID0+IHNldFRpbWVvdXQoc2hvdyk7XG4gIGxldCB0b2dnbGUgPSBvbmNlKFxuICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBzaG93KCkgOiBoaWRlKCksXG4gICAgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGVsLl94X3RvZ2dsZUFuZENhc2NhZGVXaXRoVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBpZiAoIWZpcnN0VGltZSAmJiB2YWx1ZSA9PT0gb2xkVmFsdWUpXG4gICAgICByZXR1cm47XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImltbWVkaWF0ZVwiKSlcbiAgICAgIHZhbHVlID8gY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKSA6IGhpZGUoKTtcbiAgICB0b2dnbGUodmFsdWUpO1xuICAgIG9sZFZhbHVlID0gdmFsdWU7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH0pKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWZvci5qc1xuZGlyZWN0aXZlKFwiZm9yXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBjbGVhbnVwIH0pID0+IHtcbiAgbGV0IGl0ZXJhdG9yTmFtZXMgPSBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gIGxldCBldmFsdWF0ZUl0ZW1zID0gZXZhbHVhdGVMYXRlcihlbCwgaXRlcmF0b3JOYW1lcy5pdGVtcyk7XG4gIGxldCBldmFsdWF0ZUtleSA9IGV2YWx1YXRlTGF0ZXIoXG4gICAgZWwsXG4gICAgLy8gdGhlIHgtYmluZDprZXkgZXhwcmVzc2lvbiBpcyBzdG9yZWQgZm9yIG91ciB1c2UgaW5zdGVhZCBvZiBldmFsdWF0ZWQuXG4gICAgZWwuX3hfa2V5RXhwcmVzc2lvbiB8fCBcImluZGV4XCJcbiAgKTtcbiAgZWwuX3hfcHJldktleXMgPSBbXTtcbiAgZWwuX3hfbG9va3VwID0ge307XG4gIGVmZmVjdDMoKCkgPT4gbG9vcChlbCwgaXRlcmF0b3JOYW1lcywgZXZhbHVhdGVJdGVtcywgZXZhbHVhdGVLZXkpKTtcbiAgY2xlYW51cCgoKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhlbC5feF9sb29rdXApLmZvckVhY2goKGVsMikgPT4gZWwyLnJlbW92ZSgpKTtcbiAgICBkZWxldGUgZWwuX3hfcHJldktleXM7XG4gICAgZGVsZXRlIGVsLl94X2xvb2t1cDtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSB7XG4gIGxldCBpc09iamVjdCA9IChpKSA9PiB0eXBlb2YgaSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpKTtcbiAgbGV0IHRlbXBsYXRlRWwgPSBlbDtcbiAgZXZhbHVhdGVJdGVtcygoaXRlbXMpID0+IHtcbiAgICBpZiAoaXNOdW1lcmljMyhpdGVtcykgJiYgaXRlbXMgPj0gMCkge1xuICAgICAgaXRlbXMgPSBBcnJheS5mcm9tKEFycmF5KGl0ZW1zKS5rZXlzKCksIChpKSA9PiBpICsgMSk7XG4gICAgfVxuICAgIGlmIChpdGVtcyA9PT0gdm9pZCAwKVxuICAgICAgaXRlbXMgPSBbXTtcbiAgICBsZXQgbG9va3VwID0gZWwuX3hfbG9va3VwO1xuICAgIGxldCBwcmV2S2V5cyA9IGVsLl94X3ByZXZLZXlzO1xuICAgIGxldCBzY29wZXMgPSBbXTtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGlmIChpc09iamVjdChpdGVtcykpIHtcbiAgICAgIGl0ZW1zID0gT2JqZWN0LmVudHJpZXMoaXRlbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGxldCBzY29wZTIgPSBnZXRJdGVyYXRpb25TY29wZVZhcmlhYmxlcyhpdGVyYXRvck5hbWVzLCB2YWx1ZSwga2V5LCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZTIpID0+IHtcbiAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyh2YWx1ZTIpKVxuICAgICAgICAgICAgd2FybihcIkR1cGxpY2F0ZSBrZXkgb24geC1mb3JcIiwgZWwpO1xuICAgICAgICAgIGtleXMucHVzaCh2YWx1ZTIpO1xuICAgICAgICB9LCB7IHNjb3BlOiB7IGluZGV4OiBrZXksIC4uLnNjb3BlMiB9IH0pO1xuICAgICAgICBzY29wZXMucHVzaChzY29wZTIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW1zW2ldLCBpLCBpdGVtcyk7XG4gICAgICAgIGV2YWx1YXRlS2V5KCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGlmIChrZXlzLmluY2x1ZGVzKHZhbHVlKSlcbiAgICAgICAgICAgIHdhcm4oXCJEdXBsaWNhdGUga2V5IG9uIHgtZm9yXCIsIGVsKTtcbiAgICAgICAgICBrZXlzLnB1c2godmFsdWUpO1xuICAgICAgICB9LCB7IHNjb3BlOiB7IGluZGV4OiBpLCAuLi5zY29wZTIgfSB9KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFkZHMgPSBbXTtcbiAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICBsZXQgcmVtb3ZlcyA9IFtdO1xuICAgIGxldCBzYW1lcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBwcmV2S2V5c1tpXTtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgIHJlbW92ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBwcmV2S2V5cyA9IHByZXZLZXlzLmZpbHRlcigoa2V5KSA9PiAhcmVtb3Zlcy5pbmNsdWRlcyhrZXkpKTtcbiAgICBsZXQgbGFzdEtleSA9IFwidGVtcGxhdGVcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHByZXZJbmRleCA9IHByZXZLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChwcmV2SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXkpO1xuICAgICAgICBhZGRzLnB1c2goW2xhc3RLZXksIGldKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkluZGV4ICE9PSBpKSB7XG4gICAgICAgIGxldCBrZXlJblNwb3QgPSBwcmV2S2V5cy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIGxldCBrZXlGb3JTcG90ID0gcHJldktleXMuc3BsaWNlKHByZXZJbmRleCAtIDEsIDEpWzBdO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5Rm9yU3BvdCk7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXgsIDAsIGtleUluU3BvdCk7XG4gICAgICAgIG1vdmVzLnB1c2goW2tleUluU3BvdCwga2V5Rm9yU3BvdF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgICAgbGFzdEtleSA9IGtleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcmVtb3Zlc1tpXTtcbiAgICAgIGlmICghIWxvb2t1cFtrZXldLl94X2VmZmVjdHMpIHtcbiAgICAgICAgbG9va3VwW2tleV0uX3hfZWZmZWN0cy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0ucmVtb3ZlKCk7XG4gICAgICBsb29rdXBba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgbG9va3VwW2tleV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBba2V5SW5TcG90LCBrZXlGb3JTcG90XSA9IG1vdmVzW2ldO1xuICAgICAgbGV0IGVsSW5TcG90ID0gbG9va3VwW2tleUluU3BvdF07XG4gICAgICBsZXQgZWxGb3JTcG90ID0gbG9va3VwW2tleUZvclNwb3RdO1xuICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBpZiAoIWVsRm9yU3BvdClcbiAgICAgICAgICB3YXJuKGB4LWZvciBcIjprZXlcIiBpcyB1bmRlZmluZWQgb3IgaW52YWxpZGAsIHRlbXBsYXRlRWwsIGtleUZvclNwb3QsIGxvb2t1cCk7XG4gICAgICAgIGVsRm9yU3BvdC5hZnRlcihtYXJrZXIpO1xuICAgICAgICBlbEluU3BvdC5hZnRlcihlbEZvclNwb3QpO1xuICAgICAgICBlbEZvclNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxGb3JTcG90LmFmdGVyKGVsRm9yU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5iZWZvcmUoZWxJblNwb3QpO1xuICAgICAgICBlbEluU3BvdC5feF9jdXJyZW50SWZFbCAmJiBlbEluU3BvdC5hZnRlcihlbEluU3BvdC5feF9jdXJyZW50SWZFbCk7XG4gICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgZWxGb3JTcG90Ll94X3JlZnJlc2hYRm9yU2NvcGUoc2NvcGVzW2tleXMuaW5kZXhPZihrZXlGb3JTcG90KV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBbbGFzdEtleTIsIGluZGV4XSA9IGFkZHNbaV07XG4gICAgICBsZXQgbGFzdEVsID0gbGFzdEtleTIgPT09IFwidGVtcGxhdGVcIiA/IHRlbXBsYXRlRWwgOiBsb29rdXBbbGFzdEtleTJdO1xuICAgICAgaWYgKGxhc3RFbC5feF9jdXJyZW50SWZFbClcbiAgICAgICAgbGFzdEVsID0gbGFzdEVsLl94X2N1cnJlbnRJZkVsO1xuICAgICAgbGV0IHNjb3BlMiA9IHNjb3Blc1tpbmRleF07XG4gICAgICBsZXQga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICBsZXQgY2xvbmUyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgbGV0IHJlYWN0aXZlU2NvcGUgPSByZWFjdGl2ZShzY29wZTIpO1xuICAgICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCByZWFjdGl2ZVNjb3BlLCB0ZW1wbGF0ZUVsKTtcbiAgICAgIGNsb25lMi5feF9yZWZyZXNoWEZvclNjb3BlID0gKG5ld1Njb3BlKSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG5ld1Njb3BlKS5mb3JFYWNoKChba2V5MiwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgcmVhY3RpdmVTY29wZVtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBsYXN0RWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgICAgc2tpcER1cmluZ0Nsb25lKCgpID0+IGluaXRUcmVlKGNsb25lMikpKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHdhcm4oXCJ4LWZvciBrZXkgY2Fubm90IGJlIGFuIG9iamVjdCwgaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyXCIsIHRlbXBsYXRlRWwpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0gPSBjbG9uZTI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvb2t1cFtzYW1lc1tpXV0uX3hfcmVmcmVzaFhGb3JTY29wZShzY29wZXNba2V5cy5pbmRleE9mKHNhbWVzW2ldKV0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUVsLl94X3ByZXZLZXlzID0ga2V5cztcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgbGV0IHN0cmlwUGFyZW5zUkUgPSAvXlxccypcXCh8XFwpXFxzKiQvZztcbiAgbGV0IGZvckFsaWFzUkUgPSAvKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS87XG4gIGxldCBpbk1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChmb3JBbGlhc1JFKTtcbiAgaWYgKCFpbk1hdGNoKVxuICAgIHJldHVybjtcbiAgbGV0IHJlcyA9IHt9O1xuICByZXMuaXRlbXMgPSBpbk1hdGNoWzJdLnRyaW0oKTtcbiAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnJlcGxhY2Uoc3RyaXBQYXJlbnNSRSwgXCJcIikudHJpbSgpO1xuICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG4gIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgXCJcIikudHJpbSgpO1xuICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuICAgIGlmIChpdGVyYXRvck1hdGNoWzJdKSB7XG4gICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuaXRlbSA9IGl0ZW07XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcykge1xuICBsZXQgc2NvcGVWYXJpYWJsZXMgPSB7fTtcbiAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwiW1wiLCBcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW2ldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKC9eXFx7LipcXH0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLml0ZW1dID0gaXRlbTtcbiAgfVxuICBpZiAoaXRlcmF0b3JOYW1lcy5pbmRleClcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICBpZiAoaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uKVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgcmV0dXJuIHNjb3BlVmFyaWFibGVzO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtcmVmLmpzXG5mdW5jdGlvbiBoYW5kbGVyMygpIHtcbn1cbmhhbmRsZXIzLmlubGluZSA9IChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cCB9KSA9PiB7XG4gIGxldCByb290ID0gY2xvc2VzdFJvb3QoZWwpO1xuICBpZiAoIXJvb3QuX3hfcmVmcylcbiAgICByb290Ll94X3JlZnMgPSB7fTtcbiAgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dID0gZWw7XG4gIGNsZWFudXAoKCkgPT4gZGVsZXRlIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSk7XG59O1xuZGlyZWN0aXZlKFwicmVmXCIsIGhhbmRsZXIzKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZi5qc1xuZGlyZWN0aXZlKFwiaWZcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGNsZWFudXAgfSkgPT4ge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRlbXBsYXRlXCIpXG4gICAgd2FybihcIngtaWYgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIDx0ZW1wbGF0ZT4gdGFnXCIsIGVsKTtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pO1xuICBsZXQgc2hvdyA9ICgpID0+IHtcbiAgICBpZiAoZWwuX3hfY3VycmVudElmRWwpXG4gICAgICByZXR1cm4gZWwuX3hfY3VycmVudElmRWw7XG4gICAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwge30sIGVsKTtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgZWwuYWZ0ZXIoY2xvbmUyKTtcbiAgICAgIHNraXBEdXJpbmdDbG9uZSgoKSA9PiBpbml0VHJlZShjbG9uZTIpKSgpO1xuICAgIH0pO1xuICAgIGVsLl94X2N1cnJlbnRJZkVsID0gY2xvbmUyO1xuICAgIGVsLl94X3VuZG9JZiA9ICgpID0+IHtcbiAgICAgIHdhbGsoY2xvbmUyLCAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoISFub2RlLl94X2VmZmVjdHMpIHtcbiAgICAgICAgICBub2RlLl94X2VmZmVjdHMuZm9yRWFjaChkZXF1ZXVlSm9iKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbG9uZTIucmVtb3ZlKCk7XG4gICAgICBkZWxldGUgZWwuX3hfY3VycmVudElmRWw7XG4gICAgfTtcbiAgICByZXR1cm4gY2xvbmUyO1xuICB9O1xuICBsZXQgaGlkZSA9ICgpID0+IHtcbiAgICBpZiAoIWVsLl94X3VuZG9JZilcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF91bmRvSWYoKTtcbiAgICBkZWxldGUgZWwuX3hfdW5kb0lmO1xuICB9O1xuICBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICB2YWx1ZSA/IHNob3coKSA6IGhpZGUoKTtcbiAgfSkpO1xuICBjbGVhbnVwKCgpID0+IGVsLl94X3VuZG9JZiAmJiBlbC5feF91bmRvSWYoKSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1pZC5qc1xuZGlyZWN0aXZlKFwiaWRcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBldmFsdWF0ZTogZXZhbHVhdGUyIH0pID0+IHtcbiAgbGV0IG5hbWVzID0gZXZhbHVhdGUyKGV4cHJlc3Npb24pO1xuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiBzZXRJZFJvb3QoZWwsIG5hbWUpKTtcbn0pO1xuaW50ZXJjZXB0Q2xvbmUoKGZyb20sIHRvKSA9PiB7XG4gIGlmIChmcm9tLl94X2lkcykge1xuICAgIHRvLl94X2lkcyA9IGZyb20uX3hfaWRzO1xuICB9XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1vbi5qc1xubWFwQXR0cmlidXRlcyhzdGFydGluZ1dpdGgoXCJAXCIsIGludG8ocHJlZml4KFwib246XCIpKSkpO1xuZGlyZWN0aXZlKFwib25cIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cCB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBleHByZXNzaW9uID8gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikgOiAoKSA9PiB7XG4gIH07XG4gIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidGVtcGxhdGVcIikge1xuICAgIGlmICghZWwuX3hfZm9yd2FyZEV2ZW50cylcbiAgICAgIGVsLl94X2ZvcndhcmRFdmVudHMgPSBbXTtcbiAgICBpZiAoIWVsLl94X2ZvcndhcmRFdmVudHMuaW5jbHVkZXModmFsdWUpKVxuICAgICAgZWwuX3hfZm9yd2FyZEV2ZW50cy5wdXNoKHZhbHVlKTtcbiAgfVxuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBvbihlbCwgdmFsdWUsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBldmFsdWF0ZTIoKCkgPT4ge1xuICAgIH0sIHsgc2NvcGU6IHsgXCIkZXZlbnRcIjogZSB9LCBwYXJhbXM6IFtlXSB9KTtcbiAgfSk7XG4gIGNsZWFudXAoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiSW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJGb2N1c1wiLCBcInRyYXBcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiTWFza1wiLCBcIm1hc2tcIiwgXCJtYXNrXCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlTmFtZSwgc2x1Zykge1xuICBkaXJlY3RpdmUoZGlyZWN0aXZlTmFtZSwgKGVsKSA9PiB3YXJuKGBZb3UgY2FuJ3QgdXNlIFt4LSR7ZGlyZWN0aXZlTmFtZX1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2NzcC9zcmMvaW5kZXguanNcbmFscGluZV9kZWZhdWx0LnNldEV2YWx1YXRvcihjc3BFdmFsdWF0b3IpO1xuYWxwaW5lX2RlZmF1bHQuc2V0UmVhY3Rpdml0eUVuZ2luZSh7IHJlYWN0aXZlOiBpbXBvcnRfcmVhY3Rpdml0eTEwLnJlYWN0aXZlLCBlZmZlY3Q6IGltcG9ydF9yZWFjdGl2aXR5MTAuZWZmZWN0LCByZWxlYXNlOiBpbXBvcnRfcmVhY3Rpdml0eTEwLnN0b3AsIHJhdzogaW1wb3J0X3JlYWN0aXZpdHkxMC50b1JhdyB9KTtcbnZhciBzcmNfZGVmYXVsdCA9IGFscGluZV9kZWZhdWx0O1xuXG4vLyBwYWNrYWdlcy9jc3AvYnVpbGRzL21vZHVsZS5qc1xudmFyIG1vZHVsZV9kZWZhdWx0ID0gc3JjX2RlZmF1bHQ7XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgQWxwaW5lXG59KTtcbiIsICJpbXBvcnQgQWxwaW5lIGZyb20gJy4uLy4uL3ZlbmRvci9hbHBpbmUuanMnXG5cbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInXG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gJy4vY2xpcGJvYXJkJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyJ1xuXG5leHBvcnQgeyBBbHBpbmUsIEF2YXRhciwgQ2xpcGJvYXJkLCBQb3BvdmVyIH1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGFydCAoKSB7XG4gICAgd2luZG93LkFscGluZSA9IEFscGluZVxuICAgIHRoaXMucmVnaXN0ZXIoKVxuICAgIEFscGluZS5zdGFydCgpXG4gIH0sXG4gIHJlZ2lzdGVyICgpIHtcbiAgICBBdmF0YXIucmVnaXN0ZXIoKVxuICAgIENsaXBib2FyZC5yZWdpc3RlcigpXG4gICAgUG9wb3Zlci5yZWdpc3RlcigpXG4gIH1cbn1cbiIsICJjb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gc3RhdGVcbiAgICBzcmM6IG51bGwsXG5cbiAgICAvLyBmdW5jdGlvbnNcbiAgICBpbml0ICgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gdGhpcy4kcmVmcy5pbWFnZS5kYXRhc2V0LnNyY1xuICAgICAgICBpZiAoIXNyYykgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgbWVkaWEgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBtZWRpYS5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwib25sb2FkXCIsIG1lZGlhLmNvbXBsZXRlKVxuICAgICAgICAgIHRoaXMuc3JjID0gc3JjXG4gICAgICAgIH1cbiAgICAgICAgbWVkaWEub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uZXJyb3JcIilcbiAgICAgICAgICB0aGlzLnNyYyA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBtZWRpYS5zcmMgPSBzcmNcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8vIGJpbmRzXG4gICAgaW1hZ2U6IHtcbiAgICAgIFsneC1yZWYnXTogJ2ltYWdlJyxcbiAgICAgIFsneC1zaG93J10gKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnNyY1xuICAgICAgfSxcbiAgICAgIFsneC1iaW5kOnNyYyddOiAnc3JjJ1xuICAgIH0sXG4gICAgZmFsbGJhY2s6IHtcbiAgICAgIFsneC1yZWYnXTogJ2ZhbGxiYWNrJyxcbiAgICAgIFsneC1zaG93J10gKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc3JjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9ICgpID0+IHtcbiAgd2luZG93LkFscGluZS5kYXRhKCdoc0F2YXRhcicsIGNvbXBvbmVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50XG4iLCAiY29uc3QgY29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIGZ1bmN0aW9uc1xuICAgIGNvcHkgKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLiRyZWZzLmNvbnRlbnRcbiAgICAgIGNvbnN0IHRleHQgPSBlbC52YWx1ZSA9PT0gdW5kZWZpbmVkID8gZWwuaW5uZXJUZXh0IDogZWwudmFsdWVcbiAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbiAgICB9LFxuXG4gICAgLy8gYmluZHNcbiAgICByb290OiB7XG4gICAgICBbJ3gtcmVmJ106ICdyb290J1xuICAgIH0sXG4gICAgdHJpZ2dlcjoge1xuICAgICAgWyd4LXJlZiddOiAndHJpZ2dlcicsXG4gICAgICBbJ0BjbGljayddICgpIHtcbiAgICAgICAgdGhpcy5jb3B5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIFsneC1yZWYnXTogJ2NvbnRlbnQnXG4gICAgfVxuICB9XG59XG5cbmNvbXBvbmVudC5yZWdpc3RlciA9ICgpID0+IHtcbiAgd2luZG93LkFscGluZS5kYXRhKCdoc0NsaXBib2FyZCcsIGNvbXBvbmVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50XG4iLCAiY29uc3QgY29tcG9uZW50ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIHN0YXRlXG4gICAgaXNPcGVuOiBmYWxzZSxcblxuICAgIC8vIGZ1bmN0aW9uc1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpXG4gICAgfSxcbiAgICBvcGVuICgpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZVxuICAgIH0sXG5cbiAgICAvLyBiaW5kc1xuICAgIHJvb3Q6IHtcbiAgICAgIFsneC1yZWYnXTogJ3Jvb3QnLFxuICAgICAgWyd4LWlkJ10gKCkge1xuICAgICAgICByZXR1cm4gWydoc3AtY29udGVudCddXG4gICAgICB9LFxuICAgICAgWydAa2V5ZG93bi5lc2NhcGUucHJldmVudC5zdG9wJ10gKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgICAgdGhpcy4kcmVmcy50cmlnZ2VyLmZvY3VzKClcbiAgICAgIH0sXG4gICAgICBbJ0Bmb2N1c2luLndpbmRvdyddIChldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuJHJlZnMucm9vdC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbJ0BjbGljay5vdXRzaWRlJ10gKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyaWdnZXI6IHtcbiAgICAgIFsneC1yZWYnXTogJ3RyaWdnZXInLFxuICAgICAgWydAY2xpY2snXSAoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgIH0sXG4gICAgICBbJzphcmlhLWV4cGFuZGVkJ10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5cbiAgICAgIH0sXG4gICAgICBbJzphcmlhLWNvbnRyb2xzJ10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kaWQoJ2hzcC1jb250ZW50JylcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIFsneC1yZWYnXTogJ2NvbnRlbnQnLFxuICAgICAgWyc6aWQnXSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRpZCgnaHNwLWNvbnRlbnQnKVxuICAgICAgfSxcbiAgICAgIFsneC1zaG93J10gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29tcG9uZW50LnJlZ2lzdGVyID0gKCkgPT4ge1xuICB3aW5kb3cuQWxwaW5lLmRhdGEoJ2hzUG9wb3ZlcicsIGNvbXBvbmVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsUUFBSUEsWUFBVyxPQUFPO0FBQ3RCLFFBQUlDLGFBQVksT0FBTztBQUN2QixRQUFJQyxvQkFBbUIsT0FBTztBQUM5QixRQUFJQyxxQkFBb0IsT0FBTztBQUMvQixRQUFJQyxnQkFBZSxPQUFPO0FBQzFCLFFBQUlDLGdCQUFlLE9BQU8sVUFBVTtBQUNwQyxRQUFJQyxjQUFhLENBQUMsSUFBSSxRQUFRLFNBQVMsWUFBWTtBQUNqRCxhQUFPLFFBQVEsR0FBRyxHQUFHSCxtQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsR0FBRyxHQUFHLElBQUk7QUFBQSxJQUM3RjtBQUNBLFFBQUksV0FBVyxDQUFDLFFBQVEsUUFBUTtBQUM5QixlQUFTLFFBQVE7QUFDZixRQUFBRixXQUFVLFFBQVEsTUFBTSxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsWUFBWSxLQUFLLENBQUM7QUFBQSxJQUNoRTtBQUNBLFFBQUlNLGVBQWMsQ0FBQyxJQUFJLE1BQU0sUUFBUSxTQUFTO0FBQzVDLFVBQUksUUFBUSxPQUFPLFNBQVMsWUFBWSxPQUFPLFNBQVMsWUFBWTtBQUNsRSxpQkFBUyxPQUFPSixtQkFBa0IsSUFBSTtBQUNwQyxjQUFJLENBQUNFLGNBQWEsS0FBSyxJQUFJLEdBQUcsS0FBSyxRQUFRO0FBQ3pDLFlBQUFKLFdBQVUsSUFBSSxLQUFLLEVBQUUsS0FBSyxNQUFNLEtBQUssR0FBRyxHQUFHLFlBQVksRUFBRSxPQUFPQyxrQkFBaUIsTUFBTSxHQUFHLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFBQSxNQUN2SDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQ0EsUUFBSU0sV0FBVSxDQUFDLEtBQUssWUFBWSxZQUFZLFNBQVMsT0FBTyxPQUFPUixVQUFTSSxjQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBR0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS25HLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhTixXQUFVLFFBQVEsV0FBVyxFQUFFLE9BQU8sS0FBSyxZQUFZLEtBQUssQ0FBQyxJQUFJO0FBQUEsTUFDekc7QUFBQSxJQUNGO0FBQ0EsUUFBSSxlQUFlLENBQUMsUUFBUU0sYUFBWU4sV0FBVSxDQUFDLEdBQUcsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsR0FBRztBQUd6RixRQUFJLHFCQUFxQkssWUFBVztBQUFBLE1BQ2xDLDhDQUE4Q0csVUFBUztBQUNyRDtBQUNBLGVBQU8sZUFBZUEsVUFBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsaUJBQVMsUUFBUSxLQUFLLGtCQUFrQjtBQUN0QyxnQkFBTSxNQUFzQix1QkFBTyxPQUFPLElBQUk7QUFDOUMsZ0JBQU0sT0FBTyxJQUFJLE1BQU0sR0FBRztBQUMxQixtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxnQkFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJO0FBQUEsVUFDakI7QUFDQSxpQkFBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNsRjtBQUNBLFlBQUksaUJBQWlCO0FBQUEsVUFDbkI7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsVUFDSDtBQUFBLFlBQ0U7QUFBQTtBQUFBLFVBRUYsR0FBRztBQUFBLFVBQ0g7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsVUFDSDtBQUFBLFlBQ0U7QUFBQTtBQUFBLFVBRUYsR0FBRztBQUFBLFVBQ0g7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsVUFDSDtBQUFBLFlBQ0U7QUFBQTtBQUFBLFVBRUYsR0FBRztBQUFBLFVBQ0g7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsVUFDSDtBQUFBLFlBQ0U7QUFBQTtBQUFBLFVBRUYsR0FBRztBQUFBLFVBQ0g7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsUUFDTDtBQUNBLFlBQUksZ0JBQWdCO0FBQUEsVUFDbEI7QUFBQSxZQUNFO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFBQSxVQUNIO0FBQUEsWUFDRTtBQUFBO0FBQUEsVUFFRixHQUFHO0FBQUEsVUFDSDtBQUFBLFlBQ0U7QUFBQTtBQUFBLFVBRUYsR0FBRztBQUFBLFFBQ0w7QUFDQSxZQUFJLHVCQUF1QjtBQUMzQixZQUFJLHdCQUF3Qyx3QkFBUSxvQkFBb0I7QUFDeEUsWUFBSSxRQUFRO0FBQ1osaUJBQVMsa0JBQWtCLFFBQVEsU0FBUyxHQUFHLE1BQU0sT0FBTyxRQUFRO0FBQ2xFLGNBQUksUUFBUSxPQUFPLE1BQU0sU0FBUztBQUNsQyxnQkFBTSxtQkFBbUIsTUFBTSxPQUFPLENBQUMsR0FBRyxRQUFRLE1BQU0sTUFBTSxDQUFDO0FBQy9ELGtCQUFRLE1BQU0sT0FBTyxDQUFDLEdBQUcsUUFBUSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxjQUFJLFFBQVE7QUFDWixnQkFBTSxNQUFNLENBQUM7QUFDYixtQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxxQkFBUyxNQUFNLENBQUMsRUFBRSxVQUFVLGlCQUFpQixDQUFDLEtBQUssaUJBQWlCLENBQUMsRUFBRSxVQUFVO0FBQ2pGLGdCQUFJLFNBQVMsUUFBUTtBQUNuQix1QkFBUyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksU0FBUyxNQUFNLE9BQU8sS0FBSztBQUMxRCxvQkFBSSxJQUFJLEtBQUssS0FBSyxNQUFNO0FBQ3RCO0FBQ0Ysc0JBQU0sT0FBTyxJQUFJO0FBQ2pCLG9CQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQ25GLHNCQUFNLGFBQWEsTUFBTSxDQUFDLEVBQUU7QUFDNUIsc0JBQU0sbUJBQW1CLGlCQUFpQixDQUFDLEtBQUssaUJBQWlCLENBQUMsRUFBRSxVQUFVO0FBQzlFLG9CQUFJLE1BQU0sR0FBRztBQUNYLHdCQUFNLE1BQU0sVUFBVSxTQUFTLGFBQWE7QUFDNUMsd0JBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxNQUFNLFFBQVEsYUFBYSxNQUFNLE1BQU0sTUFBTTtBQUN4RSxzQkFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQUEsZ0JBQzFELFdBQVcsSUFBSSxHQUFHO0FBQ2hCLHNCQUFJLE1BQU0sT0FBTztBQUNmLDBCQUFNLFNBQVMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLE9BQU8sVUFBVSxHQUFHLENBQUM7QUFDNUQsd0JBQUksS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUM7QUFBQSxrQkFDeEM7QUFDQSwyQkFBUyxhQUFhO0FBQUEsZ0JBQ3hCO0FBQUEsY0FDRjtBQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFDQSxpQkFBTyxJQUFJLEtBQUssSUFBSTtBQUFBLFFBQ3RCO0FBQ0EsWUFBSSxzQkFBc0I7QUFDMUIsWUFBSSx1QkFBdUMsd0JBQVEsbUJBQW1CO0FBQ3RFLFlBQUksaUJBQWlDLHdCQUFRLHNCQUFzQiw4SUFBOEk7QUFDak4sWUFBSSxtQkFBbUI7QUFDdkIsWUFBSSxzQkFBc0IsQ0FBQztBQUMzQixpQkFBUyxrQkFBa0IsTUFBTTtBQUMvQixjQUFJLG9CQUFvQixlQUFlLElBQUksR0FBRztBQUM1QyxtQkFBTyxvQkFBb0IsSUFBSTtBQUFBLFVBQ2pDO0FBQ0EsZ0JBQU0sV0FBVyxpQkFBaUIsS0FBSyxJQUFJO0FBQzNDLGNBQUksVUFBVTtBQUNaLG9CQUFRLE1BQU0sMEJBQTBCLElBQUksRUFBRTtBQUFBLFVBQ2hEO0FBQ0EsaUJBQU8sb0JBQW9CLElBQUksSUFBSSxDQUFDO0FBQUEsUUFDdEM7QUFDQSxZQUFJLGlCQUFpQjtBQUFBLFVBQ25CLGVBQWU7QUFBQSxVQUNmLFdBQVc7QUFBQSxVQUNYLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiO0FBQ0EsWUFBSSwyQkFBMkMsd0JBQVEsdWhCQUF1aEI7QUFDOWtCLFlBQUksY0FBOEIsd0JBQVEsaytCQUFrK0I7QUFDNWdDLGlCQUFTLGVBQWUsT0FBTztBQUM3QixjQUFJLFFBQVEsS0FBSyxHQUFHO0FBQ2xCLGtCQUFNLE1BQU0sQ0FBQztBQUNiLHFCQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLG9CQUFNLE9BQU8sTUFBTSxDQUFDO0FBQ3BCLG9CQUFNLGFBQWEsZUFBZSxTQUFTLElBQUksSUFBSSxpQkFBaUIsSUFBSSxJQUFJLElBQUk7QUFDaEYsa0JBQUksWUFBWTtBQUNkLDJCQUFXLE9BQU8sWUFBWTtBQUM1QixzQkFBSSxHQUFHLElBQUksV0FBVyxHQUFHO0FBQUEsZ0JBQzNCO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFDQSxtQkFBTztBQUFBLFVBQ1QsV0FBVyxTQUFTLEtBQUssR0FBRztBQUMxQixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQ0EsWUFBSSxrQkFBa0I7QUFDdEIsWUFBSSxzQkFBc0I7QUFDMUIsaUJBQVMsaUJBQWlCLFNBQVM7QUFDakMsZ0JBQU0sTUFBTSxDQUFDO0FBQ2Isa0JBQVEsTUFBTSxlQUFlLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDL0MsZ0JBQUksTUFBTTtBQUNSLG9CQUFNLE1BQU0sS0FBSyxNQUFNLG1CQUFtQjtBQUMxQyxrQkFBSSxTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLO0FBQUEsWUFDdEQ7QUFBQSxVQUNGLENBQUM7QUFDRCxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxpQkFBUyxlQUFlLFFBQVE7QUFDOUIsY0FBSSxNQUFNO0FBQ1YsY0FBSSxDQUFDLFFBQVE7QUFDWCxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxxQkFBVyxPQUFPLFFBQVE7QUFDeEIsa0JBQU0sUUFBUSxPQUFPLEdBQUc7QUFDeEIsa0JBQU0sZ0JBQWdCLElBQUksV0FBVyxJQUFJLElBQUksTUFBTSxVQUFVLEdBQUc7QUFDaEUsZ0JBQUksU0FBUyxLQUFLLEtBQUssT0FBTyxVQUFVLFlBQVkseUJBQXlCLGFBQWEsR0FBRztBQUMzRixxQkFBTyxHQUFHLGFBQWEsSUFBSSxLQUFLO0FBQUEsWUFDbEM7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQ0EsaUJBQVMsZUFBZSxPQUFPO0FBQzdCLGNBQUksTUFBTTtBQUNWLGNBQUksU0FBUyxLQUFLLEdBQUc7QUFDbkIsa0JBQU07QUFBQSxVQUNSLFdBQVcsUUFBUSxLQUFLLEdBQUc7QUFDekIscUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsb0JBQU0sYUFBYSxlQUFlLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLGtCQUFJLFlBQVk7QUFDZCx1QkFBTyxhQUFhO0FBQUEsY0FDdEI7QUFBQSxZQUNGO0FBQUEsVUFDRixXQUFXLFNBQVMsS0FBSyxHQUFHO0FBQzFCLHVCQUFXLFFBQVEsT0FBTztBQUN4QixrQkFBSSxNQUFNLElBQUksR0FBRztBQUNmLHVCQUFPLE9BQU87QUFBQSxjQUNoQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0EsaUJBQU8sSUFBSSxLQUFLO0FBQUEsUUFDbEI7QUFDQSxZQUFJLFlBQVk7QUFDaEIsWUFBSSxXQUFXO0FBQ2YsWUFBSSxZQUFZO0FBQ2hCLFlBQUksWUFBNEIsd0JBQVEsU0FBUztBQUNqRCxZQUFJLFdBQTJCLHdCQUFRLFFBQVE7QUFDL0MsWUFBSSxZQUE0Qix3QkFBUSxTQUFTO0FBQ2pELFlBQUksV0FBVztBQUNmLGlCQUFTLFdBQVcsUUFBUTtBQUMxQixnQkFBTSxNQUFNLEtBQUs7QUFDakIsZ0JBQU0sUUFBUSxTQUFTLEtBQUssR0FBRztBQUMvQixjQUFJLENBQUMsT0FBTztBQUNWLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksT0FBTztBQUNYLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSSxZQUFZO0FBQ2hCLGVBQUssUUFBUSxNQUFNLE9BQU8sUUFBUSxJQUFJLFFBQVEsU0FBUztBQUNyRCxvQkFBUSxJQUFJLFdBQVcsS0FBSyxHQUFHO0FBQUEsY0FDN0IsS0FBSztBQUNILDBCQUFVO0FBQ1Y7QUFBQSxjQUNGLEtBQUs7QUFDSCwwQkFBVTtBQUNWO0FBQUEsY0FDRixLQUFLO0FBQ0gsMEJBQVU7QUFDVjtBQUFBLGNBQ0YsS0FBSztBQUNILDBCQUFVO0FBQ1Y7QUFBQSxjQUNGLEtBQUs7QUFDSCwwQkFBVTtBQUNWO0FBQUEsY0FDRjtBQUNFO0FBQUEsWUFDSjtBQUNBLGdCQUFJLGNBQWMsT0FBTztBQUN2QixzQkFBUSxJQUFJLFVBQVUsV0FBVyxLQUFLO0FBQUEsWUFDeEM7QUFDQSx3QkFBWSxRQUFRO0FBQ3BCLG9CQUFRO0FBQUEsVUFDVjtBQUNBLGlCQUFPLGNBQWMsUUFBUSxPQUFPLElBQUksVUFBVSxXQUFXLEtBQUssSUFBSTtBQUFBLFFBQ3hFO0FBQ0EsWUFBSSxpQkFBaUI7QUFDckIsaUJBQVMsa0JBQWtCLEtBQUs7QUFDOUIsaUJBQU8sSUFBSSxRQUFRLGdCQUFnQixFQUFFO0FBQUEsUUFDdkM7QUFDQSxpQkFBUyxtQkFBbUIsR0FBRyxHQUFHO0FBQ2hDLGNBQUksRUFBRSxXQUFXLEVBQUU7QUFDakIsbUJBQU87QUFDVCxjQUFJLFFBQVE7QUFDWixtQkFBUyxJQUFJLEdBQUcsU0FBUyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQzFDLG9CQUFRLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxVQUMvQjtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLFdBQVcsR0FBRyxHQUFHO0FBQ3hCLGNBQUksTUFBTTtBQUNSLG1CQUFPO0FBQ1QsY0FBSSxhQUFhLE9BQU8sQ0FBQztBQUN6QixjQUFJLGFBQWEsT0FBTyxDQUFDO0FBQ3pCLGNBQUksY0FBYyxZQUFZO0FBQzVCLG1CQUFPLGNBQWMsYUFBYSxFQUFFLFFBQVEsTUFBTSxFQUFFLFFBQVEsSUFBSTtBQUFBLFVBQ2xFO0FBQ0EsdUJBQWEsUUFBUSxDQUFDO0FBQ3RCLHVCQUFhLFFBQVEsQ0FBQztBQUN0QixjQUFJLGNBQWMsWUFBWTtBQUM1QixtQkFBTyxjQUFjLGFBQWEsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJO0FBQUEsVUFDL0Q7QUFDQSx1QkFBYSxTQUFTLENBQUM7QUFDdkIsdUJBQWEsU0FBUyxDQUFDO0FBQ3ZCLGNBQUksY0FBYyxZQUFZO0FBQzVCLGdCQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7QUFDOUIscUJBQU87QUFBQSxZQUNUO0FBQ0Esa0JBQU0sYUFBYSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2xDLGtCQUFNLGFBQWEsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNsQyxnQkFBSSxlQUFlLFlBQVk7QUFDN0IscUJBQU87QUFBQSxZQUNUO0FBQ0EsdUJBQVcsT0FBTyxHQUFHO0FBQ25CLG9CQUFNLFVBQVUsRUFBRSxlQUFlLEdBQUc7QUFDcEMsb0JBQU0sVUFBVSxFQUFFLGVBQWUsR0FBRztBQUNwQyxrQkFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztBQUM3RSx1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUNBLGlCQUFPLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQztBQUFBLFFBQy9CO0FBQ0EsaUJBQVMsYUFBYSxLQUFLLEtBQUs7QUFDOUIsaUJBQU8sSUFBSSxVQUFVLENBQUMsU0FBUyxXQUFXLE1BQU0sR0FBRyxDQUFDO0FBQUEsUUFDdEQ7QUFDQSxZQUFJLGtCQUFrQixDQUFDLFFBQVE7QUFDN0IsaUJBQU8sT0FBTyxPQUFPLEtBQUssU0FBUyxHQUFHLElBQUksS0FBSyxVQUFVLEtBQUssVUFBVSxDQUFDLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDekY7QUFDQSxZQUFJLFdBQVcsQ0FBQyxNQUFNLFFBQVE7QUFDNUIsY0FBSSxNQUFNLEdBQUcsR0FBRztBQUNkLG1CQUFPO0FBQUEsY0FDTCxDQUFDLE9BQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxNQUFNO0FBQ3hFLHdCQUFRLEdBQUcsR0FBRyxLQUFLLElBQUk7QUFDdkIsdUJBQU87QUFBQSxjQUNULEdBQUcsQ0FBQyxDQUFDO0FBQUEsWUFDUDtBQUFBLFVBQ0YsV0FBVyxNQUFNLEdBQUcsR0FBRztBQUNyQixtQkFBTztBQUFBLGNBQ0wsQ0FBQyxPQUFPLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDO0FBQUEsWUFDeEM7QUFBQSxVQUNGLFdBQVcsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHO0FBQ2hFLG1CQUFPLE9BQU8sR0FBRztBQUFBLFVBQ25CO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSw0QkFBNEI7QUFBQSxVQUM5QjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUNBLFlBQUksWUFBWSxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQUksWUFBWSxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQUksT0FBTyxNQUFNO0FBQUEsUUFDakI7QUFDQSxZQUFJLEtBQUssTUFBTTtBQUNmLFlBQUksT0FBTztBQUNYLFlBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLEdBQUc7QUFDakMsWUFBSSxrQkFBa0IsQ0FBQyxRQUFRLElBQUksV0FBVyxXQUFXO0FBQ3pELFlBQUksU0FBUyxPQUFPO0FBQ3BCLFlBQUksU0FBUyxDQUFDLEtBQUssT0FBTztBQUN4QixnQkFBTSxJQUFJLElBQUksUUFBUSxFQUFFO0FBQ3hCLGNBQUksSUFBSSxJQUFJO0FBQ1YsZ0JBQUksT0FBTyxHQUFHLENBQUM7QUFBQSxVQUNqQjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLGlCQUFpQixPQUFPLFVBQVU7QUFDdEMsWUFBSSxTQUFTLENBQUMsS0FBSyxRQUFRLGVBQWUsS0FBSyxLQUFLLEdBQUc7QUFDdkQsWUFBSSxVQUFVLE1BQU07QUFDcEIsWUFBSSxRQUFRLENBQUMsUUFBUSxhQUFhLEdBQUcsTUFBTTtBQUMzQyxZQUFJLFFBQVEsQ0FBQyxRQUFRLGFBQWEsR0FBRyxNQUFNO0FBQzNDLFlBQUksU0FBUyxDQUFDLFFBQVEsZUFBZTtBQUNyQyxZQUFJLGFBQWEsQ0FBQyxRQUFRLE9BQU8sUUFBUTtBQUN6QyxZQUFJLFdBQVcsQ0FBQyxRQUFRLE9BQU8sUUFBUTtBQUN2QyxZQUFJLFdBQVcsQ0FBQyxRQUFRLE9BQU8sUUFBUTtBQUN2QyxZQUFJLFdBQVcsQ0FBQyxRQUFRLFFBQVEsUUFBUSxPQUFPLFFBQVE7QUFDdkQsWUFBSSxZQUFZLENBQUMsUUFBUTtBQUN2QixpQkFBTyxTQUFTLEdBQUcsS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLO0FBQUEsUUFDdEU7QUFDQSxZQUFJLGlCQUFpQixPQUFPLFVBQVU7QUFDdEMsWUFBSSxlQUFlLENBQUMsVUFBVSxlQUFlLEtBQUssS0FBSztBQUN2RCxZQUFJLFlBQVksQ0FBQyxVQUFVO0FBQ3pCLGlCQUFPLGFBQWEsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQUEsUUFDeEM7QUFDQSxZQUFJLGdCQUFnQixDQUFDLFFBQVEsYUFBYSxHQUFHLE1BQU07QUFDbkQsWUFBSSxlQUFlLENBQUMsUUFBUSxTQUFTLEdBQUcsS0FBSyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sT0FBTyxLQUFLLFNBQVMsS0FBSyxFQUFFLE1BQU07QUFDM0csWUFBSSxpQkFBaUM7QUFBQTtBQUFBLFVBRW5DO0FBQUEsUUFDRjtBQUNBLFlBQUksc0JBQXNCLENBQUMsT0FBTztBQUNoQyxnQkFBTSxRQUF3Qix1QkFBTyxPQUFPLElBQUk7QUFDaEQsaUJBQU8sQ0FBQyxRQUFRO0FBQ2Qsa0JBQU0sTUFBTSxNQUFNLEdBQUc7QUFDckIsbUJBQU8sUUFBUSxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUc7QUFBQSxVQUNwQztBQUFBLFFBQ0Y7QUFDQSxZQUFJLGFBQWE7QUFDakIsWUFBSSxXQUFXLG9CQUFvQixDQUFDLFFBQVE7QUFDMUMsaUJBQU8sSUFBSSxRQUFRLFlBQVksQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLFlBQVksSUFBSSxFQUFFO0FBQUEsUUFDbkUsQ0FBQztBQUNELFlBQUksY0FBYztBQUNsQixZQUFJLFlBQVksb0JBQW9CLENBQUMsUUFBUSxJQUFJLFFBQVEsYUFBYSxLQUFLLEVBQUUsWUFBWSxDQUFDO0FBQzFGLFlBQUksYUFBYSxvQkFBb0IsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7QUFDeEYsWUFBSSxlQUFlLG9CQUFvQixDQUFDLFFBQVEsTUFBTSxLQUFLLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNqRixZQUFJLGFBQWEsQ0FBQyxPQUFPLGFBQWEsVUFBVSxhQUFhLFVBQVUsU0FBUyxhQUFhO0FBQzdGLFlBQUksaUJBQWlCLENBQUMsS0FBSyxRQUFRO0FBQ2pDLG1CQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxLQUFLO0FBQ25DLGdCQUFJLENBQUMsRUFBRSxHQUFHO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssVUFBVTtBQUM3QixpQkFBTyxlQUFlLEtBQUssS0FBSztBQUFBLFlBQzlCLGNBQWM7QUFBQSxZQUNkLFlBQVk7QUFBQSxZQUNaO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSDtBQUNBLFlBQUksV0FBVyxDQUFDLFFBQVE7QUFDdEIsZ0JBQU0sSUFBSSxXQUFXLEdBQUc7QUFDeEIsaUJBQU8sTUFBTSxDQUFDLElBQUksTUFBTTtBQUFBLFFBQzFCO0FBQ0EsWUFBSTtBQUNKLFlBQUksZ0JBQWdCLE1BQU07QUFDeEIsaUJBQU8sZ0JBQWdCLGNBQWMsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPLE9BQU8sV0FBVyxjQUFjLFNBQVMsT0FBTyxXQUFXLGNBQWMsU0FBUyxDQUFDO0FBQUEsUUFDaE47QUFDQSxRQUFBQSxTQUFRLFlBQVk7QUFDcEIsUUFBQUEsU0FBUSxZQUFZO0FBQ3BCLFFBQUFBLFNBQVEsS0FBSztBQUNiLFFBQUFBLFNBQVEsT0FBTztBQUNmLFFBQUFBLFNBQVEsaUJBQWlCO0FBQ3pCLFFBQUFBLFNBQVEsNEJBQTRCO0FBQ3BDLFFBQUFBLFNBQVEsV0FBVztBQUNuQixRQUFBQSxTQUFRLGFBQWE7QUFDckIsUUFBQUEsU0FBUSxNQUFNO0FBQ2QsUUFBQUEsU0FBUSxhQUFhO0FBQ3JCLFFBQUFBLFNBQVEsb0JBQW9CO0FBQzVCLFFBQUFBLFNBQVEsU0FBUztBQUNqQixRQUFBQSxTQUFRLG9CQUFvQjtBQUM1QixRQUFBQSxTQUFRLGdCQUFnQjtBQUN4QixRQUFBQSxTQUFRLGFBQWE7QUFDckIsUUFBQUEsU0FBUSxTQUFTO0FBQ2pCLFFBQUFBLFNBQVEsWUFBWTtBQUNwQixRQUFBQSxTQUFRLGlCQUFpQjtBQUN6QixRQUFBQSxTQUFRLFVBQVU7QUFDbEIsUUFBQUEsU0FBUSxnQkFBZ0I7QUFDeEIsUUFBQUEsU0FBUSxTQUFTO0FBQ2pCLFFBQUFBLFNBQVEsYUFBYTtBQUNyQixRQUFBQSxTQUFRLHdCQUF3QjtBQUNoQyxRQUFBQSxTQUFRLFlBQVk7QUFDcEIsUUFBQUEsU0FBUSxlQUFlO0FBQ3ZCLFFBQUFBLFNBQVEsY0FBYztBQUN0QixRQUFBQSxTQUFRLFFBQVE7QUFDaEIsUUFBQUEsU0FBUSxrQkFBa0I7QUFDMUIsUUFBQUEsU0FBUSwyQkFBMkI7QUFDbkMsUUFBQUEsU0FBUSxXQUFXO0FBQ25CLFFBQUFBLFNBQVEsT0FBTztBQUNmLFFBQUFBLFNBQVEsZ0JBQWdCO0FBQ3hCLFFBQUFBLFNBQVEsWUFBWTtBQUNwQixRQUFBQSxTQUFRLGlCQUFpQjtBQUN6QixRQUFBQSxTQUFRLG9CQUFvQjtBQUM1QixRQUFBQSxTQUFRLFdBQVc7QUFDbkIsUUFBQUEsU0FBUSxRQUFRO0FBQ2hCLFFBQUFBLFNBQVEsdUJBQXVCO0FBQy9CLFFBQUFBLFNBQVEsV0FBVztBQUNuQixRQUFBQSxTQUFRLFdBQVc7QUFDbkIsUUFBQUEsU0FBUSxZQUFZO0FBQ3BCLFFBQUFBLFNBQVEsYUFBYTtBQUNyQixRQUFBQSxTQUFRLGVBQWU7QUFDdkIsUUFBQUEsU0FBUSxVQUFVO0FBQ2xCLFFBQUFBLFNBQVEsaUJBQWlCO0FBQ3pCLFFBQUFBLFNBQVEsaUJBQWlCO0FBQ3pCLFFBQUFBLFNBQVEsaUJBQWlCO0FBQ3pCLFFBQUFBLFNBQVEsbUJBQW1CO0FBQzNCLFFBQUFBLFNBQVEsaUJBQWlCO0FBQ3pCLFFBQUFBLFNBQVEsU0FBUztBQUNqQixRQUFBQSxTQUFRLGdCQUFnQjtBQUN4QixRQUFBQSxTQUFRLGlCQUFpQjtBQUN6QixRQUFBQSxTQUFRLGtCQUFrQjtBQUMxQixRQUFBQSxTQUFRLGVBQWU7QUFDdkIsUUFBQUEsU0FBUSxXQUFXO0FBQ25CLFFBQUFBLFNBQVEsWUFBWTtBQUNwQixRQUFBQSxTQUFRLGVBQWU7QUFBQSxNQUN6QjtBQUFBLElBQ0YsQ0FBQztBQUdELFFBQUksaUJBQWlCSCxZQUFXO0FBQUEsTUFDOUIsb0NBQW9DRyxVQUFTLFNBQVM7QUFDcEQ7QUFDQSxZQUFJLE9BQU87QUFDVCxrQkFBUSxVQUFVO0FBQUEsUUFDcEIsT0FBTztBQUNMLGtCQUFRLFVBQVUsbUJBQW1CO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBR0QsUUFBSSx5QkFBeUJILFlBQVc7QUFBQSxNQUN0QyxzREFBc0RHLFVBQVM7QUFDN0Q7QUFDQSxlQUFPLGVBQWVBLFVBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQzVELFlBQUksU0FBUyxlQUFlO0FBQzVCLFlBQUksWUFBNEIsb0JBQUksUUFBUTtBQUM1QyxZQUFJLGNBQWMsQ0FBQztBQUNuQixZQUFJO0FBQ0osWUFBSSxjQUFjLE9BQU8sU0FBUztBQUNsQyxZQUFJLHNCQUFzQixPQUFPLGlCQUFpQjtBQUNsRCxpQkFBUyxTQUFTLElBQUk7QUFDcEIsaUJBQU8sTUFBTSxHQUFHLGNBQWM7QUFBQSxRQUNoQztBQUNBLGlCQUFTLFFBQVEsSUFBSSxVQUFVLE9BQU8sV0FBVztBQUMvQyxjQUFJLFNBQVMsRUFBRSxHQUFHO0FBQ2hCLGlCQUFLLEdBQUc7QUFBQSxVQUNWO0FBQ0EsZ0JBQU0sVUFBVSxxQkFBcUIsSUFBSSxPQUFPO0FBQ2hELGNBQUksQ0FBQyxRQUFRLE1BQU07QUFDakIsb0JBQVE7QUFBQSxVQUNWO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQ0EsaUJBQVMsTUFBTSxTQUFTO0FBQ3RCLGNBQUksUUFBUSxRQUFRO0FBQ2xCLG9CQUFRLE9BQU87QUFDZixnQkFBSSxRQUFRLFFBQVEsUUFBUTtBQUMxQixzQkFBUSxRQUFRLE9BQU87QUFBQSxZQUN6QjtBQUNBLG9CQUFRLFNBQVM7QUFBQSxVQUNuQjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLE1BQU07QUFDVixpQkFBUyxxQkFBcUIsSUFBSSxTQUFTO0FBQ3pDLGdCQUFNLFVBQVUsU0FBUyxpQkFBaUI7QUFDeEMsZ0JBQUksQ0FBQyxRQUFRLFFBQVE7QUFDbkIscUJBQU8sR0FBRztBQUFBLFlBQ1o7QUFDQSxnQkFBSSxDQUFDLFlBQVksU0FBUyxPQUFPLEdBQUc7QUFDbEMsc0JBQVEsT0FBTztBQUNmLGtCQUFJO0FBQ0YsK0JBQWU7QUFDZiw0QkFBWSxLQUFLLE9BQU87QUFDeEIsK0JBQWU7QUFDZix1QkFBTyxHQUFHO0FBQUEsY0FDWixVQUFFO0FBQ0EsNEJBQVksSUFBSTtBQUNoQiw4QkFBYztBQUNkLCtCQUFlLFlBQVksWUFBWSxTQUFTLENBQUM7QUFBQSxjQUNuRDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0Esa0JBQVEsS0FBSztBQUNiLGtCQUFRLGVBQWUsQ0FBQyxDQUFDLFFBQVE7QUFDakMsa0JBQVEsWUFBWTtBQUNwQixrQkFBUSxTQUFTO0FBQ2pCLGtCQUFRLE1BQU07QUFDZCxrQkFBUSxPQUFPLENBQUM7QUFDaEIsa0JBQVEsVUFBVTtBQUNsQixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxpQkFBUyxRQUFRLFNBQVM7QUFDeEIsZ0JBQU0sRUFBRSxLQUFLLElBQUk7QUFDakIsY0FBSSxLQUFLLFFBQVE7QUFDZixxQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxtQkFBSyxDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsWUFDeEI7QUFDQSxpQkFBSyxTQUFTO0FBQUEsVUFDaEI7QUFBQSxRQUNGO0FBQ0EsWUFBSSxjQUFjO0FBQ2xCLFlBQUksYUFBYSxDQUFDO0FBQ2xCLGlCQUFTLGdCQUFnQjtBQUN2QixxQkFBVyxLQUFLLFdBQVc7QUFDM0Isd0JBQWM7QUFBQSxRQUNoQjtBQUNBLGlCQUFTLGlCQUFpQjtBQUN4QixxQkFBVyxLQUFLLFdBQVc7QUFDM0Isd0JBQWM7QUFBQSxRQUNoQjtBQUNBLGlCQUFTLGdCQUFnQjtBQUN2QixnQkFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1Qix3QkFBYyxTQUFTLFNBQVMsT0FBTztBQUFBLFFBQ3pDO0FBQ0EsaUJBQVMsTUFBTSxRQUFRLE1BQU0sS0FBSztBQUNoQyxjQUFJLENBQUMsZUFBZSxpQkFBaUIsUUFBUTtBQUMzQztBQUFBLFVBQ0Y7QUFDQSxjQUFJLFVBQVUsVUFBVSxJQUFJLE1BQU07QUFDbEMsY0FBSSxDQUFDLFNBQVM7QUFDWixzQkFBVSxJQUFJLFFBQVEsVUFBMEIsb0JBQUksSUFBSSxDQUFDO0FBQUEsVUFDM0Q7QUFDQSxjQUFJLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDekIsY0FBSSxDQUFDLEtBQUs7QUFDUixvQkFBUSxJQUFJLEtBQUssTUFBc0Isb0JBQUksSUFBSSxDQUFDO0FBQUEsVUFDbEQ7QUFDQSxjQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksR0FBRztBQUMxQixnQkFBSSxJQUFJLFlBQVk7QUFDcEIseUJBQWEsS0FBSyxLQUFLLEdBQUc7QUFDMUIsZ0JBQUksYUFBYSxRQUFRLFNBQVM7QUFDaEMsMkJBQWEsUUFBUSxRQUFRO0FBQUEsZ0JBQzNCLFFBQVE7QUFBQSxnQkFDUjtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxpQkFBUyxRQUFRLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXO0FBQ2pFLGdCQUFNLFVBQVUsVUFBVSxJQUFJLE1BQU07QUFDcEMsY0FBSSxDQUFDLFNBQVM7QUFDWjtBQUFBLFVBQ0Y7QUFDQSxnQkFBTSxVQUEwQixvQkFBSSxJQUFJO0FBQ3hDLGdCQUFNLE9BQU8sQ0FBQyxpQkFBaUI7QUFDN0IsZ0JBQUksY0FBYztBQUNoQiwyQkFBYSxRQUFRLENBQUMsWUFBWTtBQUNoQyxvQkFBSSxZQUFZLGdCQUFnQixRQUFRLGNBQWM7QUFDcEQsMEJBQVEsSUFBSSxPQUFPO0FBQUEsZ0JBQ3JCO0FBQUEsY0FDRixDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFNBQVMsU0FBUztBQUNwQixvQkFBUSxRQUFRLElBQUk7QUFBQSxVQUN0QixXQUFXLFFBQVEsWUFBWSxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBQ3JELG9CQUFRLFFBQVEsQ0FBQyxLQUFLLFNBQVM7QUFDN0Isa0JBQUksU0FBUyxZQUFZLFFBQVEsVUFBVTtBQUN6QyxxQkFBSyxHQUFHO0FBQUEsY0FDVjtBQUFBLFlBQ0YsQ0FBQztBQUFBLFVBQ0gsT0FBTztBQUNMLGdCQUFJLFFBQVEsUUFBUTtBQUNsQixtQkFBSyxRQUFRLElBQUksR0FBRyxDQUFDO0FBQUEsWUFDdkI7QUFDQSxvQkFBUSxNQUFNO0FBQUEsY0FDWixLQUFLO0FBQ0gsb0JBQUksQ0FBQyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBQzNCLHVCQUFLLFFBQVEsSUFBSSxXQUFXLENBQUM7QUFDN0Isc0JBQUksT0FBTyxNQUFNLE1BQU0sR0FBRztBQUN4Qix5QkFBSyxRQUFRLElBQUksbUJBQW1CLENBQUM7QUFBQSxrQkFDdkM7QUFBQSxnQkFDRixXQUFXLE9BQU8sYUFBYSxHQUFHLEdBQUc7QUFDbkMsdUJBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQztBQUFBLGdCQUM1QjtBQUNBO0FBQUEsY0FDRixLQUFLO0FBQ0gsb0JBQUksQ0FBQyxPQUFPLFFBQVEsTUFBTSxHQUFHO0FBQzNCLHVCQUFLLFFBQVEsSUFBSSxXQUFXLENBQUM7QUFDN0Isc0JBQUksT0FBTyxNQUFNLE1BQU0sR0FBRztBQUN4Qix5QkFBSyxRQUFRLElBQUksbUJBQW1CLENBQUM7QUFBQSxrQkFDdkM7QUFBQSxnQkFDRjtBQUNBO0FBQUEsY0FDRixLQUFLO0FBQ0gsb0JBQUksT0FBTyxNQUFNLE1BQU0sR0FBRztBQUN4Qix1QkFBSyxRQUFRLElBQUksV0FBVyxDQUFDO0FBQUEsZ0JBQy9CO0FBQ0E7QUFBQSxZQUNKO0FBQUEsVUFDRjtBQUNBLGdCQUFNLE1BQU0sQ0FBQyxZQUFZO0FBQ3ZCLGdCQUFJLFFBQVEsUUFBUSxXQUFXO0FBQzdCLHNCQUFRLFFBQVEsVUFBVTtBQUFBLGdCQUN4QixRQUFRO0FBQUEsZ0JBQ1I7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRixDQUFDO0FBQUEsWUFDSDtBQUNBLGdCQUFJLFFBQVEsUUFBUSxXQUFXO0FBQzdCLHNCQUFRLFFBQVEsVUFBVSxPQUFPO0FBQUEsWUFDbkMsT0FBTztBQUNMLHNCQUFRO0FBQUEsWUFDVjtBQUFBLFVBQ0Y7QUFDQSxrQkFBUSxRQUFRLEdBQUc7QUFBQSxRQUNyQjtBQUNBLFlBQUkscUJBQXFDLHVCQUFPLFFBQVEsNkJBQTZCO0FBQ3JGLFlBQUksaUJBQWlCLElBQUksSUFBSSxPQUFPLG9CQUFvQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLE9BQU8sUUFBUSxDQUFDO0FBQ2pILFlBQUksT0FBdUIsNkJBQWE7QUFDeEMsWUFBSSxhQUE2Qiw2QkFBYSxPQUFPLElBQUk7QUFDekQsWUFBSSxjQUE4Qiw2QkFBYSxJQUFJO0FBQ25ELFlBQUkscUJBQXFDLDZCQUFhLE1BQU0sSUFBSTtBQUNoRSxZQUFJLHdCQUF3Qyw0Q0FBNEI7QUFDeEUsaUJBQVMsOEJBQThCO0FBQ3JDLGdCQUFNLG1CQUFtQixDQUFDO0FBQzFCLFdBQUMsWUFBWSxXQUFXLGFBQWEsRUFBRSxRQUFRLENBQUMsUUFBUTtBQUN0RCw2QkFBaUIsR0FBRyxJQUFJLFlBQVksTUFBTTtBQUN4QyxvQkFBTSxNQUFNLE9BQU8sSUFBSTtBQUN2Qix1QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDM0Msc0JBQU0sS0FBSyxPQUFPLElBQUksRUFBRTtBQUFBLGNBQzFCO0FBQ0Esb0JBQU0sTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUk7QUFDNUIsa0JBQUksUUFBUSxNQUFNLFFBQVEsT0FBTztBQUMvQix1QkFBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUM7QUFBQSxjQUNyQyxPQUFPO0FBQ0wsdUJBQU87QUFBQSxjQUNUO0FBQUEsWUFDRjtBQUFBLFVBQ0YsQ0FBQztBQUNELFdBQUMsUUFBUSxPQUFPLFNBQVMsV0FBVyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7QUFDN0QsNkJBQWlCLEdBQUcsSUFBSSxZQUFZLE1BQU07QUFDeEMsNEJBQWM7QUFDZCxvQkFBTSxNQUFNLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sSUFBSTtBQUM5Qyw0QkFBYztBQUNkLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLGFBQWEsY0FBYyxPQUFPLFVBQVUsT0FBTztBQUMxRCxpQkFBTyxTQUFTLEtBQUssUUFBUSxLQUFLLFVBQVU7QUFDMUMsZ0JBQUksUUFBUSxrQkFBa0I7QUFDNUIscUJBQU8sQ0FBQztBQUFBLFlBQ1YsV0FBVyxRQUFRLGtCQUFrQjtBQUNuQyxxQkFBTztBQUFBLFlBQ1QsV0FBVyxRQUFRLGFBQWEsY0FBYyxjQUFjLFVBQVUscUJBQXFCLGNBQWMsVUFBVSxxQkFBcUIsYUFBYSxJQUFJLE1BQU0sR0FBRztBQUNoSyxxQkFBTztBQUFBLFlBQ1Q7QUFDQSxrQkFBTSxnQkFBZ0IsT0FBTyxRQUFRLE1BQU07QUFDM0MsZ0JBQUksQ0FBQyxlQUFlLGlCQUFpQixPQUFPLE9BQU8sdUJBQXVCLEdBQUcsR0FBRztBQUM5RSxxQkFBTyxRQUFRLElBQUksdUJBQXVCLEtBQUssUUFBUTtBQUFBLFlBQ3pEO0FBQ0Esa0JBQU0sTUFBTSxRQUFRLElBQUksUUFBUSxLQUFLLFFBQVE7QUFDN0MsZ0JBQUksT0FBTyxTQUFTLEdBQUcsSUFBSSxlQUFlLElBQUksR0FBRyxJQUFJLG1CQUFtQixHQUFHLEdBQUc7QUFDNUUscUJBQU87QUFBQSxZQUNUO0FBQ0EsZ0JBQUksQ0FBQyxhQUFhO0FBQ2hCLG9CQUFNLFFBQVEsT0FBTyxHQUFHO0FBQUEsWUFDMUI7QUFDQSxnQkFBSSxTQUFTO0FBQ1gscUJBQU87QUFBQSxZQUNUO0FBQ0EsZ0JBQUksTUFBTSxHQUFHLEdBQUc7QUFDZCxvQkFBTSxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxhQUFhLEdBQUc7QUFDL0QscUJBQU8sZUFBZSxJQUFJLFFBQVE7QUFBQSxZQUNwQztBQUNBLGdCQUFJLE9BQU8sU0FBUyxHQUFHLEdBQUc7QUFDeEIscUJBQU8sY0FBYyxTQUFTLEdBQUcsSUFBSSxVQUFVLEdBQUc7QUFBQSxZQUNwRDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLE9BQXVCLDZCQUFhO0FBQ3hDLFlBQUksYUFBNkIsNkJBQWEsSUFBSTtBQUNsRCxpQkFBUyxhQUFhLFVBQVUsT0FBTztBQUNyQyxpQkFBTyxTQUFTLEtBQUssUUFBUSxLQUFLLE9BQU8sVUFBVTtBQUNqRCxnQkFBSSxXQUFXLE9BQU8sR0FBRztBQUN6QixnQkFBSSxDQUFDLFNBQVM7QUFDWixzQkFBUSxPQUFPLEtBQUs7QUFDcEIseUJBQVcsT0FBTyxRQUFRO0FBQzFCLGtCQUFJLENBQUMsT0FBTyxRQUFRLE1BQU0sS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHO0FBQy9ELHlCQUFTLFFBQVE7QUFDakIsdUJBQU87QUFBQSxjQUNUO0FBQUEsWUFDRjtBQUNBLGtCQUFNLFNBQVMsT0FBTyxRQUFRLE1BQU0sS0FBSyxPQUFPLGFBQWEsR0FBRyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sU0FBUyxPQUFPLE9BQU8sUUFBUSxHQUFHO0FBQzNILGtCQUFNLFNBQVMsUUFBUSxJQUFJLFFBQVEsS0FBSyxPQUFPLFFBQVE7QUFDdkQsZ0JBQUksV0FBVyxPQUFPLFFBQVEsR0FBRztBQUMvQixrQkFBSSxDQUFDLFFBQVE7QUFDWCx3QkFBUSxRQUFRLE9BQU8sS0FBSyxLQUFLO0FBQUEsY0FDbkMsV0FBVyxPQUFPLFdBQVcsT0FBTyxRQUFRLEdBQUc7QUFDN0Msd0JBQVEsUUFBUSxPQUFPLEtBQUssT0FBTyxRQUFRO0FBQUEsY0FDN0M7QUFBQSxZQUNGO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUNBLGlCQUFTLGVBQWUsUUFBUSxLQUFLO0FBQ25DLGdCQUFNLFNBQVMsT0FBTyxPQUFPLFFBQVEsR0FBRztBQUN4QyxnQkFBTSxXQUFXLE9BQU8sR0FBRztBQUMzQixnQkFBTSxTQUFTLFFBQVEsZUFBZSxRQUFRLEdBQUc7QUFDakQsY0FBSSxVQUFVLFFBQVE7QUFDcEIsb0JBQVEsUUFBUSxVQUFVLEtBQUssUUFBUSxRQUFRO0FBQUEsVUFDakQ7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxpQkFBUyxJQUFJLFFBQVEsS0FBSztBQUN4QixnQkFBTSxTQUFTLFFBQVEsSUFBSSxRQUFRLEdBQUc7QUFDdEMsY0FBSSxDQUFDLE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQyxlQUFlLElBQUksR0FBRyxHQUFHO0FBQ3JELGtCQUFNLFFBQVEsT0FBTyxHQUFHO0FBQUEsVUFDMUI7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxpQkFBUyxRQUFRLFFBQVE7QUFDdkIsZ0JBQU0sUUFBUSxXQUFXLE9BQU8sUUFBUSxNQUFNLElBQUksV0FBVyxXQUFXO0FBQ3hFLGlCQUFPLFFBQVEsUUFBUSxNQUFNO0FBQUEsUUFDL0I7QUFDQSxZQUFJLGtCQUFrQjtBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQ0EsWUFBSSxtQkFBbUI7QUFBQSxVQUNyQixLQUFLO0FBQUEsVUFDTCxJQUFJLFFBQVEsS0FBSztBQUNmO0FBQ0Usc0JBQVEsS0FBSyx5QkFBeUIsT0FBTyxHQUFHLENBQUMsaUNBQWlDLE1BQU07QUFBQSxZQUMxRjtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0EsZUFBZSxRQUFRLEtBQUs7QUFDMUI7QUFDRSxzQkFBUSxLQUFLLDRCQUE0QixPQUFPLEdBQUcsQ0FBQyxpQ0FBaUMsTUFBTTtBQUFBLFlBQzdGO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUNBLFlBQUksMEJBQTBDLHVCQUFPLE9BQU8sQ0FBQyxHQUFHLGlCQUFpQjtBQUFBLFVBQy9FLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNQLENBQUM7QUFDRCxZQUFJLDBCQUEwQyx1QkFBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0I7QUFBQSxVQUNoRixLQUFLO0FBQUEsUUFDUCxDQUFDO0FBQ0QsWUFBSSxhQUFhLENBQUMsVUFBVSxPQUFPLFNBQVMsS0FBSyxJQUFJLFVBQVUsS0FBSyxJQUFJO0FBQ3hFLFlBQUksYUFBYSxDQUFDLFVBQVUsT0FBTyxTQUFTLEtBQUssSUFBSSxTQUFTLEtBQUssSUFBSTtBQUN2RSxZQUFJLFlBQVksQ0FBQyxVQUFVO0FBQzNCLFlBQUksV0FBVyxDQUFDLE1BQU0sUUFBUSxlQUFlLENBQUM7QUFDOUMsaUJBQVMsTUFBTSxRQUFRLEtBQUssY0FBYyxPQUFPLFlBQVksT0FBTztBQUNsRSxtQkFBUztBQUFBLFlBQ1A7QUFBQTtBQUFBLFVBRUY7QUFDQSxnQkFBTSxZQUFZLE9BQU8sTUFBTTtBQUMvQixnQkFBTSxTQUFTLE9BQU8sR0FBRztBQUN6QixjQUFJLFFBQVEsUUFBUTtBQUNsQixhQUFDLGVBQWUsTUFBTSxXQUFXLE9BQU8sR0FBRztBQUFBLFVBQzdDO0FBQ0EsV0FBQyxlQUFlLE1BQU0sV0FBVyxPQUFPLE1BQU07QUFDOUMsZ0JBQU0sRUFBRSxLQUFLLEtBQUssSUFBSSxTQUFTLFNBQVM7QUFDeEMsZ0JBQU0sT0FBTyxZQUFZLFlBQVksY0FBYyxhQUFhO0FBQ2hFLGNBQUksS0FBSyxLQUFLLFdBQVcsR0FBRyxHQUFHO0FBQzdCLG1CQUFPLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFBLFVBQzdCLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxHQUFHO0FBQ3ZDLG1CQUFPLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQztBQUFBLFVBQ2hDLFdBQVcsV0FBVyxXQUFXO0FBQy9CLG1CQUFPLElBQUksR0FBRztBQUFBLFVBQ2hCO0FBQUEsUUFDRjtBQUNBLGlCQUFTLE1BQU0sS0FBSyxjQUFjLE9BQU87QUFDdkMsZ0JBQU0sU0FBUztBQUFBLFlBQ2I7QUFBQTtBQUFBLFVBRUY7QUFDQSxnQkFBTSxZQUFZLE9BQU8sTUFBTTtBQUMvQixnQkFBTSxTQUFTLE9BQU8sR0FBRztBQUN6QixjQUFJLFFBQVEsUUFBUTtBQUNsQixhQUFDLGVBQWUsTUFBTSxXQUFXLE9BQU8sR0FBRztBQUFBLFVBQzdDO0FBQ0EsV0FBQyxlQUFlLE1BQU0sV0FBVyxPQUFPLE1BQU07QUFDOUMsaUJBQU8sUUFBUSxTQUFTLE9BQU8sSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksTUFBTTtBQUFBLFFBQ2hGO0FBQ0EsaUJBQVMsS0FBSyxRQUFRLGNBQWMsT0FBTztBQUN6QyxtQkFBUztBQUFBLFlBQ1A7QUFBQTtBQUFBLFVBRUY7QUFDQSxXQUFDLGVBQWUsTUFBTSxPQUFPLE1BQU0sR0FBRyxXQUFXLFdBQVc7QUFDNUQsaUJBQU8sUUFBUSxJQUFJLFFBQVEsUUFBUSxNQUFNO0FBQUEsUUFDM0M7QUFDQSxpQkFBUyxJQUFJLE9BQU87QUFDbEIsa0JBQVEsT0FBTyxLQUFLO0FBQ3BCLGdCQUFNLFNBQVMsT0FBTyxJQUFJO0FBQzFCLGdCQUFNLFFBQVEsU0FBUyxNQUFNO0FBQzdCLGdCQUFNLFNBQVMsTUFBTSxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQzNDLGNBQUksQ0FBQyxRQUFRO0FBQ1gsbUJBQU8sSUFBSSxLQUFLO0FBQ2hCLG9CQUFRLFFBQVEsT0FBTyxPQUFPLEtBQUs7QUFBQSxVQUNyQztBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLE1BQU0sS0FBSyxPQUFPO0FBQ3pCLGtCQUFRLE9BQU8sS0FBSztBQUNwQixnQkFBTSxTQUFTLE9BQU8sSUFBSTtBQUMxQixnQkFBTSxFQUFFLEtBQUssTUFBTSxLQUFLLEtBQUssSUFBSSxTQUFTLE1BQU07QUFDaEQsY0FBSSxTQUFTLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFDbEMsY0FBSSxDQUFDLFFBQVE7QUFDWCxrQkFBTSxPQUFPLEdBQUc7QUFDaEIscUJBQVMsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUFBLFVBQ2hDLE9BQU87QUFDTCw4QkFBa0IsUUFBUSxNQUFNLEdBQUc7QUFBQSxVQUNyQztBQUNBLGdCQUFNLFdBQVcsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUN0QyxpQkFBTyxJQUFJLEtBQUssS0FBSztBQUNyQixjQUFJLENBQUMsUUFBUTtBQUNYLG9CQUFRLFFBQVEsT0FBTyxLQUFLLEtBQUs7QUFBQSxVQUNuQyxXQUFXLE9BQU8sV0FBVyxPQUFPLFFBQVEsR0FBRztBQUM3QyxvQkFBUSxRQUFRLE9BQU8sS0FBSyxPQUFPLFFBQVE7QUFBQSxVQUM3QztBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLFlBQVksS0FBSztBQUN4QixnQkFBTSxTQUFTLE9BQU8sSUFBSTtBQUMxQixnQkFBTSxFQUFFLEtBQUssTUFBTSxLQUFLLEtBQUssSUFBSSxTQUFTLE1BQU07QUFDaEQsY0FBSSxTQUFTLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFDbEMsY0FBSSxDQUFDLFFBQVE7QUFDWCxrQkFBTSxPQUFPLEdBQUc7QUFDaEIscUJBQVMsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUFBLFVBQ2hDLE9BQU87QUFDTCw4QkFBa0IsUUFBUSxNQUFNLEdBQUc7QUFBQSxVQUNyQztBQUNBLGdCQUFNLFdBQVcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLElBQUk7QUFDakQsZ0JBQU0sU0FBUyxPQUFPLE9BQU8sR0FBRztBQUNoQyxjQUFJLFFBQVE7QUFDVixvQkFBUSxRQUFRLFVBQVUsS0FBSyxRQUFRLFFBQVE7QUFBQSxVQUNqRDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLFFBQVE7QUFDZixnQkFBTSxTQUFTLE9BQU8sSUFBSTtBQUMxQixnQkFBTSxXQUFXLE9BQU8sU0FBUztBQUNqQyxnQkFBTSxZQUFZLE9BQU8sTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTTtBQUN6RSxnQkFBTSxTQUFTLE9BQU8sTUFBTTtBQUM1QixjQUFJLFVBQVU7QUFDWixvQkFBUSxRQUFRLFNBQVMsUUFBUSxRQUFRLFNBQVM7QUFBQSxVQUNwRDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLGNBQWMsYUFBYSxXQUFXO0FBQzdDLGlCQUFPLFNBQVMsUUFBUSxVQUFVLFNBQVM7QUFDekMsa0JBQU0sV0FBVztBQUNqQixrQkFBTSxTQUFTO0FBQUEsY0FDYjtBQUFBO0FBQUEsWUFFRjtBQUNBLGtCQUFNLFlBQVksT0FBTyxNQUFNO0FBQy9CLGtCQUFNLE9BQU8sWUFBWSxZQUFZLGNBQWMsYUFBYTtBQUNoRSxhQUFDLGVBQWUsTUFBTSxXQUFXLFdBQVcsV0FBVztBQUN2RCxtQkFBTyxPQUFPLFFBQVEsQ0FBQyxPQUFPLFFBQVE7QUFDcEMscUJBQU8sU0FBUyxLQUFLLFNBQVMsS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLEdBQUcsUUFBUTtBQUFBLFlBQ2hFLENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRjtBQUNBLGlCQUFTLHFCQUFxQixRQUFRLGFBQWEsV0FBVztBQUM1RCxpQkFBTyxZQUFZLE1BQU07QUFDdkIsa0JBQU0sU0FBUztBQUFBLGNBQ2I7QUFBQTtBQUFBLFlBRUY7QUFDQSxrQkFBTSxZQUFZLE9BQU8sTUFBTTtBQUMvQixrQkFBTSxjQUFjLE9BQU8sTUFBTSxTQUFTO0FBQzFDLGtCQUFNLFNBQVMsV0FBVyxhQUFhLFdBQVcsT0FBTyxZQUFZO0FBQ3JFLGtCQUFNLFlBQVksV0FBVyxVQUFVO0FBQ3ZDLGtCQUFNLGdCQUFnQixPQUFPLE1BQU0sRUFBRSxHQUFHLElBQUk7QUFDNUMsa0JBQU0sT0FBTyxZQUFZLFlBQVksY0FBYyxhQUFhO0FBQ2hFLGFBQUMsZUFBZSxNQUFNLFdBQVcsV0FBVyxZQUFZLHNCQUFzQixXQUFXO0FBQ3pGLG1CQUFPO0FBQUE7QUFBQSxjQUVMLE9BQU87QUFDTCxzQkFBTSxFQUFFLE9BQU8sS0FBSyxJQUFJLGNBQWMsS0FBSztBQUMzQyx1QkFBTyxPQUFPLEVBQUUsT0FBTyxLQUFLLElBQUk7QUFBQSxrQkFDOUIsT0FBTyxTQUFTLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSztBQUFBLGtCQUM3RDtBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUFBO0FBQUEsY0FFQSxDQUFDLE9BQU8sUUFBUSxJQUFJO0FBQ2xCLHVCQUFPO0FBQUEsY0FDVDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLGlCQUFTLHFCQUFxQixNQUFNO0FBQ2xDLGlCQUFPLFlBQVksTUFBTTtBQUN2QjtBQUNFLG9CQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxPQUFPO0FBQy9DLHNCQUFRLEtBQUssR0FBRyxPQUFPLFdBQVcsSUFBSSxDQUFDLGNBQWMsR0FBRywrQkFBK0IsT0FBTyxJQUFJLENBQUM7QUFBQSxZQUNyRztBQUNBLG1CQUFPLFNBQVMsV0FBVyxRQUFRO0FBQUEsVUFDckM7QUFBQSxRQUNGO0FBQ0EsaUJBQVMseUJBQXlCO0FBQ2hDLGdCQUFNLDJCQUEyQjtBQUFBLFlBQy9CLElBQUksS0FBSztBQUNQLHFCQUFPLE1BQU0sTUFBTSxHQUFHO0FBQUEsWUFDeEI7QUFBQSxZQUNBLElBQUksT0FBTztBQUNULHFCQUFPLEtBQUssSUFBSTtBQUFBLFlBQ2xCO0FBQUEsWUFDQSxLQUFLO0FBQUEsWUFDTDtBQUFBLFlBQ0EsS0FBSztBQUFBLFlBQ0wsUUFBUTtBQUFBLFlBQ1I7QUFBQSxZQUNBLFNBQVMsY0FBYyxPQUFPLEtBQUs7QUFBQSxVQUNyQztBQUNBLGdCQUFNLDJCQUEyQjtBQUFBLFlBQy9CLElBQUksS0FBSztBQUNQLHFCQUFPLE1BQU0sTUFBTSxLQUFLLE9BQU8sSUFBSTtBQUFBLFlBQ3JDO0FBQUEsWUFDQSxJQUFJLE9BQU87QUFDVCxxQkFBTyxLQUFLLElBQUk7QUFBQSxZQUNsQjtBQUFBLFlBQ0EsS0FBSztBQUFBLFlBQ0w7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLFFBQVE7QUFBQSxZQUNSO0FBQUEsWUFDQSxTQUFTLGNBQWMsT0FBTyxJQUFJO0FBQUEsVUFDcEM7QUFDQSxnQkFBTSw0QkFBNEI7QUFBQSxZQUNoQyxJQUFJLEtBQUs7QUFDUCxxQkFBTyxNQUFNLE1BQU0sS0FBSyxJQUFJO0FBQUEsWUFDOUI7QUFBQSxZQUNBLElBQUksT0FBTztBQUNULHFCQUFPLEtBQUssTUFBTSxJQUFJO0FBQUEsWUFDeEI7QUFBQSxZQUNBLElBQUksS0FBSztBQUNQLHFCQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSTtBQUFBLFlBQ25DO0FBQUEsWUFDQSxLQUFLO0FBQUEsY0FDSDtBQUFBO0FBQUEsWUFFRjtBQUFBLFlBQ0EsS0FBSztBQUFBLGNBQ0g7QUFBQTtBQUFBLFlBRUY7QUFBQSxZQUNBLFFBQVE7QUFBQSxjQUNOO0FBQUE7QUFBQSxZQUVGO0FBQUEsWUFDQSxPQUFPO0FBQUEsY0FDTDtBQUFBO0FBQUEsWUFFRjtBQUFBLFlBQ0EsU0FBUyxjQUFjLE1BQU0sS0FBSztBQUFBLFVBQ3BDO0FBQ0EsZ0JBQU0sbUNBQW1DO0FBQUEsWUFDdkMsSUFBSSxLQUFLO0FBQ1AscUJBQU8sTUFBTSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBQUEsWUFDcEM7QUFBQSxZQUNBLElBQUksT0FBTztBQUNULHFCQUFPLEtBQUssTUFBTSxJQUFJO0FBQUEsWUFDeEI7QUFBQSxZQUNBLElBQUksS0FBSztBQUNQLHFCQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSTtBQUFBLFlBQ25DO0FBQUEsWUFDQSxLQUFLO0FBQUEsY0FDSDtBQUFBO0FBQUEsWUFFRjtBQUFBLFlBQ0EsS0FBSztBQUFBLGNBQ0g7QUFBQTtBQUFBLFlBRUY7QUFBQSxZQUNBLFFBQVE7QUFBQSxjQUNOO0FBQUE7QUFBQSxZQUVGO0FBQUEsWUFDQSxPQUFPO0FBQUEsY0FDTDtBQUFBO0FBQUEsWUFFRjtBQUFBLFlBQ0EsU0FBUyxjQUFjLE1BQU0sSUFBSTtBQUFBLFVBQ25DO0FBQ0EsZ0JBQU0sa0JBQWtCLENBQUMsUUFBUSxVQUFVLFdBQVcsT0FBTyxRQUFRO0FBQ3JFLDBCQUFnQixRQUFRLENBQUMsV0FBVztBQUNsQyxxQ0FBeUIsTUFBTSxJQUFJLHFCQUFxQixRQUFRLE9BQU8sS0FBSztBQUM1RSxzQ0FBMEIsTUFBTSxJQUFJLHFCQUFxQixRQUFRLE1BQU0sS0FBSztBQUM1RSxxQ0FBeUIsTUFBTSxJQUFJLHFCQUFxQixRQUFRLE9BQU8sSUFBSTtBQUMzRSw2Q0FBaUMsTUFBTSxJQUFJLHFCQUFxQixRQUFRLE1BQU0sSUFBSTtBQUFBLFVBQ3BGLENBQUM7QUFDRCxpQkFBTztBQUFBLFlBQ0w7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyx5QkFBeUIsMEJBQTBCLHlCQUF5QiwrQkFBK0IsSUFBb0IsdUNBQXVCO0FBQzNKLGlCQUFTLDRCQUE0QixhQUFhLFNBQVM7QUFDekQsZ0JBQU0sbUJBQW1CLFVBQVUsY0FBYyxrQ0FBa0MsMEJBQTBCLGNBQWMsMkJBQTJCO0FBQ3RKLGlCQUFPLENBQUMsUUFBUSxLQUFLLGFBQWE7QUFDaEMsZ0JBQUksUUFBUSxrQkFBa0I7QUFDNUIscUJBQU8sQ0FBQztBQUFBLFlBQ1YsV0FBVyxRQUFRLGtCQUFrQjtBQUNuQyxxQkFBTztBQUFBLFlBQ1QsV0FBVyxRQUFRLFdBQVc7QUFDNUIscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU8sUUFBUSxJQUFJLE9BQU8sT0FBTyxrQkFBa0IsR0FBRyxLQUFLLE9BQU8sU0FBUyxtQkFBbUIsUUFBUSxLQUFLLFFBQVE7QUFBQSxVQUNySDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLDRCQUE0QjtBQUFBLFVBQzlCLEtBQXFCLDRDQUE0QixPQUFPLEtBQUs7QUFBQSxRQUMvRDtBQUNBLFlBQUksNEJBQTRCO0FBQUEsVUFDOUIsS0FBcUIsNENBQTRCLE9BQU8sSUFBSTtBQUFBLFFBQzlEO0FBQ0EsWUFBSSw2QkFBNkI7QUFBQSxVQUMvQixLQUFxQiw0Q0FBNEIsTUFBTSxLQUFLO0FBQUEsUUFDOUQ7QUFDQSxZQUFJLG9DQUFvQztBQUFBLFVBQ3RDLEtBQXFCLDRDQUE0QixNQUFNLElBQUk7QUFBQSxRQUM3RDtBQUNBLGlCQUFTLGtCQUFrQixRQUFRLE1BQU0sS0FBSztBQUM1QyxnQkFBTSxTQUFTLE9BQU8sR0FBRztBQUN6QixjQUFJLFdBQVcsT0FBTyxLQUFLLEtBQUssUUFBUSxNQUFNLEdBQUc7QUFDL0Msa0JBQU0sT0FBTyxPQUFPLFVBQVUsTUFBTTtBQUNwQyxvQkFBUSxLQUFLLFlBQVksSUFBSSxrRUFBa0UsU0FBUyxRQUFRLGFBQWEsRUFBRSw4SkFBOEo7QUFBQSxVQUMvUjtBQUFBLFFBQ0Y7QUFDQSxZQUFJLGNBQThCLG9CQUFJLFFBQVE7QUFDOUMsWUFBSSxxQkFBcUMsb0JBQUksUUFBUTtBQUNyRCxZQUFJLGNBQThCLG9CQUFJLFFBQVE7QUFDOUMsWUFBSSxxQkFBcUMsb0JBQUksUUFBUTtBQUNyRCxpQkFBUyxjQUFjLFNBQVM7QUFDOUIsa0JBQVEsU0FBUztBQUFBLFlBQ2YsS0FBSztBQUFBLFlBQ0wsS0FBSztBQUNILHFCQUFPO0FBQUEsWUFDVCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQ0gscUJBQU87QUFBQSxZQUNUO0FBQ0UscUJBQU87QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUNBLGlCQUFTLGNBQWMsT0FBTztBQUM1QixpQkFBTztBQUFBLFlBQ0w7QUFBQTtBQUFBLFVBRUYsS0FBSyxDQUFDLE9BQU8sYUFBYSxLQUFLLElBQUksSUFBSSxjQUFjLE9BQU8sVUFBVSxLQUFLLENBQUM7QUFBQSxRQUM5RTtBQUNBLGlCQUFTLFVBQVUsUUFBUTtBQUN6QixjQUFJLFVBQVU7QUFBQSxZQUNaO0FBQUE7QUFBQSxVQUVGLEdBQUc7QUFDRCxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTyxxQkFBcUIsUUFBUSxPQUFPLGlCQUFpQiwyQkFBMkIsV0FBVztBQUFBLFFBQ3BHO0FBQ0EsaUJBQVMsZ0JBQWdCLFFBQVE7QUFDL0IsaUJBQU8scUJBQXFCLFFBQVEsT0FBTyx5QkFBeUIsMkJBQTJCLGtCQUFrQjtBQUFBLFFBQ25IO0FBQ0EsaUJBQVMsU0FBUyxRQUFRO0FBQ3hCLGlCQUFPLHFCQUFxQixRQUFRLE1BQU0sa0JBQWtCLDRCQUE0QixXQUFXO0FBQUEsUUFDckc7QUFDQSxpQkFBUyxnQkFBZ0IsUUFBUTtBQUMvQixpQkFBTyxxQkFBcUIsUUFBUSxNQUFNLHlCQUF5QixtQ0FBbUMsa0JBQWtCO0FBQUEsUUFDMUg7QUFDQSxpQkFBUyxxQkFBcUIsUUFBUSxhQUFhLGNBQWMsb0JBQW9CLFVBQVU7QUFDN0YsY0FBSSxDQUFDLE9BQU8sU0FBUyxNQUFNLEdBQUc7QUFDNUI7QUFDRSxzQkFBUSxLQUFLLGtDQUFrQyxPQUFPLE1BQU0sQ0FBQyxFQUFFO0FBQUEsWUFDakU7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxjQUFJO0FBQUEsWUFDRjtBQUFBO0FBQUEsVUFFRixLQUFLLEVBQUUsZUFBZTtBQUFBLFlBQ3BCO0FBQUE7QUFBQSxVQUVGLElBQUk7QUFDRixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxnQkFBTSxnQkFBZ0IsU0FBUyxJQUFJLE1BQU07QUFDekMsY0FBSSxlQUFlO0FBQ2pCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGdCQUFNLGFBQWEsY0FBYyxNQUFNO0FBQ3ZDLGNBQUksZUFBZSxHQUFHO0FBQ3BCLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGdCQUFNLFFBQVEsSUFBSSxNQUFNLFFBQVEsZUFBZSxJQUFJLHFCQUFxQixZQUFZO0FBQ3BGLG1CQUFTLElBQUksUUFBUSxLQUFLO0FBQzFCLGlCQUFPO0FBQUEsUUFDVDtBQUNBLGlCQUFTLFlBQVksT0FBTztBQUMxQixjQUFJLFdBQVcsS0FBSyxHQUFHO0FBQ3JCLG1CQUFPLFlBQVk7QUFBQSxjQUNqQjtBQUFBO0FBQUEsWUFFRixDQUFDO0FBQUEsVUFDSDtBQUNBLGlCQUFPLENBQUMsRUFBRSxTQUFTO0FBQUEsWUFDakI7QUFBQTtBQUFBLFVBRUY7QUFBQSxRQUNGO0FBQ0EsaUJBQVMsV0FBVyxPQUFPO0FBQ3pCLGlCQUFPLENBQUMsRUFBRSxTQUFTO0FBQUEsWUFDakI7QUFBQTtBQUFBLFVBRUY7QUFBQSxRQUNGO0FBQ0EsaUJBQVMsUUFBUSxPQUFPO0FBQ3RCLGlCQUFPLFlBQVksS0FBSyxLQUFLLFdBQVcsS0FBSztBQUFBLFFBQy9DO0FBQ0EsaUJBQVMsT0FBTyxVQUFVO0FBQ3hCLGlCQUFPLFlBQVksT0FBTztBQUFBLFlBQ3hCO0FBQUE7QUFBQSxVQUVGLENBQUMsS0FBSztBQUFBLFFBQ1I7QUFDQSxpQkFBUyxRQUFRLE9BQU87QUFDdEIsaUJBQU8sSUFBSSxPQUFPLFlBQVksSUFBSTtBQUNsQyxpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJLFVBQVUsQ0FBQyxRQUFRLE9BQU8sU0FBUyxHQUFHLElBQUksVUFBVSxHQUFHLElBQUk7QUFDL0QsaUJBQVMsTUFBTSxHQUFHO0FBQ2hCLGlCQUFPLFFBQVEsS0FBSyxFQUFFLGNBQWMsSUFBSTtBQUFBLFFBQzFDO0FBQ0EsaUJBQVMsSUFBSSxPQUFPO0FBQ2xCLGlCQUFPLFVBQVUsS0FBSztBQUFBLFFBQ3hCO0FBQ0EsaUJBQVMsV0FBVyxPQUFPO0FBQ3pCLGlCQUFPLFVBQVUsT0FBTyxJQUFJO0FBQUEsUUFDOUI7QUFDQSxZQUFJLFVBQVUsTUFBTTtBQUFBLFVBQ2xCLFlBQVksT0FBTyxXQUFXLE9BQU87QUFDbkMsaUJBQUssV0FBVztBQUNoQixpQkFBSyxZQUFZO0FBQ2pCLGlCQUFLLFlBQVksV0FBVyxRQUFRLE9BQU8sS0FBSztBQUNoRCxpQkFBSyxTQUFTLFdBQVcsUUFBUSxRQUFRLEtBQUs7QUFBQSxVQUNoRDtBQUFBLFVBQ0EsSUFBSSxRQUFRO0FBQ1Ysa0JBQU0sT0FBTyxJQUFJLEdBQUcsT0FBTyxPQUFPO0FBQ2xDLG1CQUFPLEtBQUs7QUFBQSxVQUNkO0FBQUEsVUFDQSxJQUFJLE1BQU0sUUFBUTtBQUNoQixxQkFBUyxLQUFLLFdBQVcsU0FBUyxPQUFPLE1BQU07QUFDL0MsZ0JBQUksT0FBTyxXQUFXLFFBQVEsS0FBSyxTQUFTLEdBQUc7QUFDN0MsbUJBQUssWUFBWTtBQUNqQixtQkFBSyxTQUFTLEtBQUssV0FBVyxTQUFTLFFBQVEsTUFBTTtBQUNyRCxzQkFBUSxPQUFPLElBQUksR0FBRyxPQUFPLFNBQVMsTUFBTTtBQUFBLFlBQzlDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxpQkFBUyxVQUFVLFVBQVUsVUFBVSxPQUFPO0FBQzVDLGNBQUksTUFBTSxRQUFRLEdBQUc7QUFDbkIsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU8sSUFBSSxRQUFRLFVBQVUsT0FBTztBQUFBLFFBQ3RDO0FBQ0EsaUJBQVMsV0FBVyxNQUFNO0FBQ3hCLGtCQUFRLE9BQU8sSUFBSSxHQUFHLE9BQU8sU0FBUyxLQUFLLEtBQUs7QUFBQSxRQUNsRDtBQUNBLGlCQUFTLE1BQU0sTUFBTTtBQUNuQixpQkFBTyxNQUFNLElBQUksSUFBSSxLQUFLLFFBQVE7QUFBQSxRQUNwQztBQUNBLFlBQUksd0JBQXdCO0FBQUEsVUFDMUIsS0FBSyxDQUFDLFFBQVEsS0FBSyxhQUFhLE1BQU0sUUFBUSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUM7QUFBQSxVQUN4RSxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sYUFBYTtBQUNyQyxrQkFBTSxXQUFXLE9BQU8sR0FBRztBQUMzQixnQkFBSSxNQUFNLFFBQVEsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHO0FBQ3BDLHVCQUFTLFFBQVE7QUFDakIscUJBQU87QUFBQSxZQUNULE9BQU87QUFDTCxxQkFBTyxRQUFRLElBQUksUUFBUSxLQUFLLE9BQU8sUUFBUTtBQUFBLFlBQ2pEO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxpQkFBUyxVQUFVLGdCQUFnQjtBQUNqQyxpQkFBTyxZQUFZLGNBQWMsSUFBSSxpQkFBaUIsSUFBSSxNQUFNLGdCQUFnQixxQkFBcUI7QUFBQSxRQUN2RztBQUNBLFlBQUksZ0JBQWdCLE1BQU07QUFBQSxVQUN4QixZQUFZLFNBQVM7QUFDbkIsaUJBQUssWUFBWTtBQUNqQixrQkFBTSxFQUFFLEtBQUssTUFBTSxLQUFLLEtBQUssSUFBSSxRQUFRLE1BQU0sTUFBTSxNQUFNLE9BQU8sT0FBTyxHQUFHLE1BQU0sUUFBUSxNQUFNLE9BQU8sT0FBTyxDQUFDO0FBQy9HLGlCQUFLLE9BQU87QUFDWixpQkFBSyxPQUFPO0FBQUEsVUFDZDtBQUFBLFVBQ0EsSUFBSSxRQUFRO0FBQ1YsbUJBQU8sS0FBSyxLQUFLO0FBQUEsVUFDbkI7QUFBQSxVQUNBLElBQUksTUFBTSxRQUFRO0FBQ2hCLGlCQUFLLEtBQUssTUFBTTtBQUFBLFVBQ2xCO0FBQUEsUUFDRjtBQUNBLGlCQUFTLFVBQVUsU0FBUztBQUMxQixpQkFBTyxJQUFJLGNBQWMsT0FBTztBQUFBLFFBQ2xDO0FBQ0EsaUJBQVMsT0FBTyxRQUFRO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLE1BQU0sR0FBRztBQUNwQixvQkFBUSxLQUFLLDhEQUE4RDtBQUFBLFVBQzdFO0FBQ0EsZ0JBQU0sTUFBTSxPQUFPLFFBQVEsTUFBTSxJQUFJLElBQUksTUFBTSxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBQ2pFLHFCQUFXLE9BQU8sUUFBUTtBQUN4QixnQkFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEdBQUc7QUFBQSxVQUM5QjtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUNBLFlBQUksZ0JBQWdCLE1BQU07QUFBQSxVQUN4QixZQUFZLFNBQVMsTUFBTTtBQUN6QixpQkFBSyxVQUFVO0FBQ2YsaUJBQUssT0FBTztBQUNaLGlCQUFLLFlBQVk7QUFBQSxVQUNuQjtBQUFBLFVBQ0EsSUFBSSxRQUFRO0FBQ1YsbUJBQU8sS0FBSyxRQUFRLEtBQUssSUFBSTtBQUFBLFVBQy9CO0FBQUEsVUFDQSxJQUFJLE1BQU0sUUFBUTtBQUNoQixpQkFBSyxRQUFRLEtBQUssSUFBSSxJQUFJO0FBQUEsVUFDNUI7QUFBQSxRQUNGO0FBQ0EsaUJBQVMsTUFBTSxRQUFRLEtBQUs7QUFDMUIsaUJBQU8sTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksY0FBYyxRQUFRLEdBQUc7QUFBQSxRQUN6RTtBQUNBLFlBQUksa0JBQWtCLE1BQU07QUFBQSxVQUMxQixZQUFZLFFBQVEsU0FBUyxhQUFhO0FBQ3hDLGlCQUFLLFVBQVU7QUFDZixpQkFBSyxTQUFTO0FBQ2QsaUJBQUssWUFBWTtBQUNqQixpQkFBSyxTQUFTLFFBQVEsUUFBUTtBQUFBLGNBQzVCLE1BQU07QUFBQSxjQUNOLFdBQVcsTUFBTTtBQUNmLG9CQUFJLENBQUMsS0FBSyxRQUFRO0FBQ2hCLHVCQUFLLFNBQVM7QUFDZCwwQkFBUSxPQUFPLElBQUksR0FBRyxPQUFPLE9BQU87QUFBQSxnQkFDdEM7QUFBQSxjQUNGO0FBQUEsWUFDRixDQUFDO0FBQ0Q7QUFBQSxjQUNFO0FBQUE7QUFBQSxZQUVGLElBQUk7QUFBQSxVQUNOO0FBQUEsVUFDQSxJQUFJLFFBQVE7QUFDVixrQkFBTSxRQUFRLE9BQU8sSUFBSTtBQUN6QixnQkFBSSxNQUFNLFFBQVE7QUFDaEIsb0JBQU0sU0FBUyxLQUFLLE9BQU87QUFDM0Isb0JBQU0sU0FBUztBQUFBLFlBQ2pCO0FBQ0Esa0JBQU0sT0FBTyxPQUFPLE9BQU87QUFDM0IsbUJBQU8sTUFBTTtBQUFBLFVBQ2Y7QUFBQSxVQUNBLElBQUksTUFBTSxVQUFVO0FBQ2xCLGlCQUFLLFFBQVEsUUFBUTtBQUFBLFVBQ3ZCO0FBQUEsUUFDRjtBQUNBLGlCQUFTLFNBQVMsaUJBQWlCO0FBQ2pDLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSSxPQUFPLFdBQVcsZUFBZSxHQUFHO0FBQ3RDLHFCQUFTO0FBQ1QscUJBQVMsTUFBTTtBQUNiLHNCQUFRLEtBQUssb0RBQW9EO0FBQUEsWUFDbkU7QUFBQSxVQUNGLE9BQU87QUFDTCxxQkFBUyxnQkFBZ0I7QUFDekIscUJBQVMsZ0JBQWdCO0FBQUEsVUFDM0I7QUFDQSxpQkFBTyxJQUFJLGdCQUFnQixRQUFRLFFBQVEsT0FBTyxXQUFXLGVBQWUsS0FBSyxDQUFDLGdCQUFnQixHQUFHO0FBQUEsUUFDdkc7QUFDQSxRQUFBQSxTQUFRLGNBQWM7QUFDdEIsUUFBQUEsU0FBUSxXQUFXO0FBQ25CLFFBQUFBLFNBQVEsWUFBWTtBQUNwQixRQUFBQSxTQUFRLFNBQVM7QUFDakIsUUFBQUEsU0FBUSxpQkFBaUI7QUFDekIsUUFBQUEsU0FBUSxVQUFVO0FBQ2xCLFFBQUFBLFNBQVEsYUFBYTtBQUNyQixRQUFBQSxTQUFRLGFBQWE7QUFDckIsUUFBQUEsU0FBUSxRQUFRO0FBQ2hCLFFBQUFBLFNBQVEsVUFBVTtBQUNsQixRQUFBQSxTQUFRLGdCQUFnQjtBQUN4QixRQUFBQSxTQUFRLFlBQVk7QUFDcEIsUUFBQUEsU0FBUSxXQUFXO0FBQ25CLFFBQUFBLFNBQVEsV0FBVztBQUNuQixRQUFBQSxTQUFRLE1BQU07QUFDZCxRQUFBQSxTQUFRLGdCQUFnQjtBQUN4QixRQUFBQSxTQUFRLGtCQUFrQjtBQUMxQixRQUFBQSxTQUFRLGtCQUFrQjtBQUMxQixRQUFBQSxTQUFRLGFBQWE7QUFDckIsUUFBQUEsU0FBUSxPQUFPO0FBQ2YsUUFBQUEsU0FBUSxRQUFRO0FBQ2hCLFFBQUFBLFNBQVEsUUFBUTtBQUNoQixRQUFBQSxTQUFRLFNBQVM7QUFDakIsUUFBQUEsU0FBUSxRQUFRO0FBQ2hCLFFBQUFBLFNBQVEsVUFBVTtBQUNsQixRQUFBQSxTQUFRLGFBQWE7QUFDckIsUUFBQUEsU0FBUSxRQUFRO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFHRCxRQUFJLHFCQUFxQkgsWUFBVztBQUFBLE1BQ2xDLHdDQUF3Q0csVUFBUyxTQUFTO0FBQ3hEO0FBQ0EsWUFBSSxPQUFPO0FBQ1Qsa0JBQVEsVUFBVTtBQUFBLFFBQ3BCLE9BQU87QUFDTCxrQkFBUSxVQUFVLHVCQUF1QjtBQUFBLFFBQzNDO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUdELFFBQUksaUJBQWlCLENBQUM7QUFDdEIsYUFBUyxnQkFBZ0I7QUFBQSxNQUN2QixRQUFRLE1BQU07QUFBQSxNQUNkLFNBQVMsTUFBTTtBQUFBLElBQ2pCLENBQUM7QUFDRCxXQUFPLFVBQVUsYUFBYSxjQUFjO0FBRzVDLFFBQUksZUFBZTtBQUNuQixRQUFJLFdBQVc7QUFDZixRQUFJLFFBQVEsQ0FBQztBQUNiLFFBQUksbUJBQW1CO0FBQ3ZCLGFBQVMsVUFBVSxVQUFVO0FBQzNCLGVBQVMsUUFBUTtBQUFBLElBQ25CO0FBQ0EsYUFBUyxTQUFTLEtBQUs7QUFDckIsVUFBSSxDQUFDLE1BQU0sU0FBUyxHQUFHO0FBQ3JCLGNBQU0sS0FBSyxHQUFHO0FBQ2hCLGlCQUFXO0FBQUEsSUFDYjtBQUNBLGFBQVMsV0FBVyxLQUFLO0FBQ3ZCLFVBQUksUUFBUSxNQUFNLFFBQVEsR0FBRztBQUM3QixVQUFJLFVBQVUsTUFBTSxRQUFRO0FBQzFCLGNBQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxJQUN6QjtBQUNBLGFBQVMsYUFBYTtBQUNwQixVQUFJLENBQUMsWUFBWSxDQUFDLGNBQWM7QUFDOUIsdUJBQWU7QUFDZix1QkFBZSxTQUFTO0FBQUEsTUFDMUI7QUFBQSxJQUNGO0FBQ0EsYUFBUyxZQUFZO0FBQ25CLHFCQUFlO0FBQ2YsaUJBQVc7QUFDWCxlQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLGNBQU0sQ0FBQyxFQUFFO0FBQ1QsMkJBQW1CO0FBQUEsTUFDckI7QUFDQSxZQUFNLFNBQVM7QUFDZix5QkFBbUI7QUFDbkIsaUJBQVc7QUFBQSxJQUNiO0FBR0EsUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUksaUJBQWlCO0FBQ3JCLGFBQVMsd0JBQXdCLFVBQVU7QUFDekMsdUJBQWlCO0FBQ2pCLGVBQVM7QUFDVCx1QkFBaUI7QUFBQSxJQUNuQjtBQUNBLGFBQVMsb0JBQW9CLFFBQVE7QUFDbkMsaUJBQVcsT0FBTztBQUNsQixnQkFBVSxPQUFPO0FBQ2pCLGVBQVMsQ0FBQyxhQUFhLE9BQU8sT0FBTyxVQUFVLEVBQUUsV0FBVyxDQUFDLFNBQVM7QUFDcEUsWUFBSSxnQkFBZ0I7QUFDbEIsb0JBQVUsSUFBSTtBQUFBLFFBQ2hCLE9BQU87QUFDTCxlQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0YsRUFBRSxDQUFDO0FBQ0gsWUFBTSxPQUFPO0FBQUEsSUFDZjtBQUNBLGFBQVMsZUFBZSxVQUFVO0FBQ2hDLGVBQVM7QUFBQSxJQUNYO0FBQ0EsYUFBUyxtQkFBbUIsSUFBSTtBQUM5QixVQUFJLFVBQVUsTUFBTTtBQUFBLE1BQ3BCO0FBQ0EsVUFBSSxnQkFBZ0IsQ0FBQyxhQUFhO0FBQ2hDLFlBQUksa0JBQWtCLE9BQU8sUUFBUTtBQUNyQyxZQUFJLENBQUMsR0FBRyxZQUFZO0FBQ2xCLGFBQUcsYUFBNkIsb0JBQUksSUFBSTtBQUN4QyxhQUFHLGdCQUFnQixNQUFNO0FBQ3ZCLGVBQUcsV0FBVyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFBQSxVQUNsQztBQUFBLFFBQ0Y7QUFDQSxXQUFHLFdBQVcsSUFBSSxlQUFlO0FBQ2pDLGtCQUFVLE1BQU07QUFDZCxjQUFJLG9CQUFvQjtBQUN0QjtBQUNGLGFBQUcsV0FBVyxPQUFPLGVBQWU7QUFDcEMsa0JBQVEsZUFBZTtBQUFBLFFBQ3pCO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPLENBQUMsZUFBZSxNQUFNO0FBQzNCLGdCQUFRO0FBQUEsTUFDVixDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsTUFBTSxRQUFRLFVBQVU7QUFDL0IsVUFBSSxZQUFZO0FBQ2hCLFVBQUk7QUFDSixVQUFJLGtCQUFrQixPQUFPLE1BQU07QUFDakMsWUFBSSxRQUFRLE9BQU87QUFDbkIsYUFBSyxVQUFVLEtBQUs7QUFDcEIsWUFBSSxDQUFDLFdBQVc7QUFDZCx5QkFBZSxNQUFNO0FBQ25CLHFCQUFTLE9BQU8sUUFBUTtBQUN4Qix1QkFBVztBQUFBLFVBQ2IsQ0FBQztBQUFBLFFBQ0gsT0FBTztBQUNMLHFCQUFXO0FBQUEsUUFDYjtBQUNBLG9CQUFZO0FBQUEsTUFDZCxDQUFDO0FBQ0QsYUFBTyxNQUFNLFFBQVEsZUFBZTtBQUFBLElBQ3RDO0FBR0EsUUFBSSxvQkFBb0IsQ0FBQztBQUN6QixRQUFJLGVBQWUsQ0FBQztBQUNwQixRQUFJLGFBQWEsQ0FBQztBQUNsQixhQUFTLFVBQVUsVUFBVTtBQUMzQixpQkFBVyxLQUFLLFFBQVE7QUFBQSxJQUMxQjtBQUNBLGFBQVMsWUFBWSxJQUFJLFVBQVU7QUFDakMsVUFBSSxPQUFPLGFBQWEsWUFBWTtBQUNsQyxZQUFJLENBQUMsR0FBRztBQUNOLGFBQUcsY0FBYyxDQUFDO0FBQ3BCLFdBQUcsWUFBWSxLQUFLLFFBQVE7QUFBQSxNQUM5QixPQUFPO0FBQ0wsbUJBQVc7QUFDWCxxQkFBYSxLQUFLLFFBQVE7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFDQSxhQUFTLGtCQUFrQixVQUFVO0FBQ25DLHdCQUFrQixLQUFLLFFBQVE7QUFBQSxJQUNqQztBQUNBLGFBQVMsbUJBQW1CLElBQUksTUFBTSxVQUFVO0FBQzlDLFVBQUksQ0FBQyxHQUFHO0FBQ04sV0FBRyx1QkFBdUIsQ0FBQztBQUM3QixVQUFJLENBQUMsR0FBRyxxQkFBcUIsSUFBSTtBQUMvQixXQUFHLHFCQUFxQixJQUFJLElBQUksQ0FBQztBQUNuQyxTQUFHLHFCQUFxQixJQUFJLEVBQUUsS0FBSyxRQUFRO0FBQUEsSUFDN0M7QUFDQSxhQUFTLGtCQUFrQixJQUFJLE9BQU87QUFDcEMsVUFBSSxDQUFDLEdBQUc7QUFDTjtBQUNGLGFBQU8sUUFBUSxHQUFHLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQ2pFLFlBQUksVUFBVSxVQUFVLE1BQU0sU0FBUyxJQUFJLEdBQUc7QUFDNUMsZ0JBQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLGlCQUFPLEdBQUcscUJBQXFCLElBQUk7QUFBQSxRQUNyQztBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFDQSxhQUFTLGVBQWUsSUFBSTtBQUMxQixVQUFJLEdBQUcsYUFBYTtBQUNsQixlQUFPLEdBQUcsWUFBWTtBQUNwQixhQUFHLFlBQVksSUFBSSxFQUFFO0FBQUEsTUFDekI7QUFBQSxJQUNGO0FBQ0EsUUFBSSxXQUFXLElBQUksaUJBQWlCLFFBQVE7QUFDNUMsUUFBSSxxQkFBcUI7QUFDekIsYUFBUywwQkFBMEI7QUFDakMsZUFBUyxRQUFRLFVBQVUsRUFBRSxTQUFTLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxtQkFBbUIsS0FBSyxDQUFDO0FBQ3hHLDJCQUFxQjtBQUFBLElBQ3ZCO0FBQ0EsYUFBUyx5QkFBeUI7QUFDaEMsb0JBQWM7QUFDZCxlQUFTLFdBQVc7QUFDcEIsMkJBQXFCO0FBQUEsSUFDdkI7QUFDQSxRQUFJLGtCQUFrQixDQUFDO0FBQ3ZCLGFBQVMsZ0JBQWdCO0FBQ3ZCLFVBQUksVUFBVSxTQUFTLFlBQVk7QUFDbkMsc0JBQWdCLEtBQUssTUFBTSxRQUFRLFNBQVMsS0FBSyxTQUFTLE9BQU8sQ0FBQztBQUNsRSxVQUFJLDJCQUEyQixnQkFBZ0I7QUFDL0MscUJBQWUsTUFBTTtBQUNuQixZQUFJLGdCQUFnQixXQUFXLDBCQUEwQjtBQUN2RCxpQkFBTyxnQkFBZ0IsU0FBUztBQUM5Qiw0QkFBZ0IsTUFBTSxFQUFFO0FBQUEsUUFDNUI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxVQUFVLFVBQVU7QUFDM0IsVUFBSSxDQUFDO0FBQ0gsZUFBTyxTQUFTO0FBQ2xCLDZCQUF1QjtBQUN2QixVQUFJLFNBQVMsU0FBUztBQUN0Qiw4QkFBd0I7QUFDeEIsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLGVBQWU7QUFDbkIsUUFBSSxvQkFBb0IsQ0FBQztBQUN6QixhQUFTLGlCQUFpQjtBQUN4QixxQkFBZTtBQUFBLElBQ2pCO0FBQ0EsYUFBUyxpQ0FBaUM7QUFDeEMscUJBQWU7QUFDZixlQUFTLGlCQUFpQjtBQUMxQiwwQkFBb0IsQ0FBQztBQUFBLElBQ3ZCO0FBQ0EsYUFBUyxTQUFTLFdBQVc7QUFDM0IsVUFBSSxjQUFjO0FBQ2hCLDRCQUFvQixrQkFBa0IsT0FBTyxTQUFTO0FBQ3REO0FBQUEsTUFDRjtBQUNBLFVBQUksYUFBNkIsb0JBQUksSUFBSTtBQUN6QyxVQUFJLGVBQStCLG9CQUFJLElBQUk7QUFDM0MsVUFBSSxrQkFBa0Msb0JBQUksSUFBSTtBQUM5QyxVQUFJLG9CQUFvQyxvQkFBSSxJQUFJO0FBQ2hELGVBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsWUFBSSxVQUFVLENBQUMsRUFBRSxPQUFPO0FBQ3RCO0FBQ0YsWUFBSSxVQUFVLENBQUMsRUFBRSxTQUFTLGFBQWE7QUFDckMsb0JBQVUsQ0FBQyxFQUFFLFdBQVcsUUFBUSxDQUFDLFNBQVMsS0FBSyxhQUFhLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQztBQUNyRixvQkFBVSxDQUFDLEVBQUUsYUFBYSxRQUFRLENBQUMsU0FBUyxLQUFLLGFBQWEsS0FBSyxhQUFhLElBQUksSUFBSSxDQUFDO0FBQUEsUUFDM0Y7QUFDQSxZQUFJLFVBQVUsQ0FBQyxFQUFFLFNBQVMsY0FBYztBQUN0QyxjQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7QUFDdEIsY0FBSSxPQUFPLFVBQVUsQ0FBQyxFQUFFO0FBQ3hCLGNBQUksV0FBVyxVQUFVLENBQUMsRUFBRTtBQUM1QixjQUFJLE1BQU0sTUFBTTtBQUNkLGdCQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRTtBQUN6Qiw4QkFBZ0IsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM1Qiw0QkFBZ0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sT0FBTyxHQUFHLGFBQWEsSUFBSSxFQUFFLENBQUM7QUFBQSxVQUNyRTtBQUNBLGNBQUksU0FBUyxNQUFNO0FBQ2pCLGdCQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRTtBQUMzQixnQ0FBa0IsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUM5Qiw4QkFBa0IsSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBQUEsVUFDckM7QUFDQSxjQUFJLEdBQUcsYUFBYSxJQUFJLEtBQUssYUFBYSxNQUFNO0FBQzlDLGdCQUFJO0FBQUEsVUFDTixXQUFXLEdBQUcsYUFBYSxJQUFJLEdBQUc7QUFDaEMsbUJBQU87QUFDUCxnQkFBSTtBQUFBLFVBQ04sT0FBTztBQUNMLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0Esd0JBQWtCLFFBQVEsQ0FBQyxPQUFPLE9BQU87QUFDdkMsMEJBQWtCLElBQUksS0FBSztBQUFBLE1BQzdCLENBQUM7QUFDRCxzQkFBZ0IsUUFBUSxDQUFDLE9BQU8sT0FBTztBQUNyQywwQkFBa0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUssQ0FBQztBQUFBLE1BQy9DLENBQUM7QUFDRCxlQUFTLFFBQVEsY0FBYztBQUM3QixZQUFJLFdBQVcsSUFBSSxJQUFJO0FBQ3JCO0FBQ0YscUJBQWEsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFBQSxNQUNyQztBQUNBLGlCQUFXLFFBQVEsQ0FBQyxTQUFTO0FBQzNCLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssWUFBWTtBQUFBLE1BQ25CLENBQUM7QUFDRCxlQUFTLFFBQVEsWUFBWTtBQUMzQixZQUFJLGFBQWEsSUFBSSxJQUFJO0FBQ3ZCO0FBQ0YsWUFBSSxDQUFDLEtBQUs7QUFDUjtBQUNGLGVBQU8sS0FBSztBQUNaLGVBQU8sS0FBSztBQUNaLG1CQUFXLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0FBQ2pDLGFBQUssWUFBWTtBQUNqQixhQUFLLGdCQUFnQjtBQUFBLE1BQ3ZCO0FBQ0EsaUJBQVcsUUFBUSxDQUFDLFNBQVM7QUFDM0IsZUFBTyxLQUFLO0FBQ1osZUFBTyxLQUFLO0FBQUEsTUFDZCxDQUFDO0FBQ0QsbUJBQWE7QUFDYixxQkFBZTtBQUNmLHdCQUFrQjtBQUNsQiwwQkFBb0I7QUFBQSxJQUN0QjtBQUdBLGFBQVMsTUFBTSxNQUFNO0FBQ25CLGFBQU8sYUFBYSxpQkFBaUIsSUFBSSxDQUFDO0FBQUEsSUFDNUM7QUFDQSxhQUFTLGVBQWUsTUFBTSxPQUFPLGVBQWU7QUFDbEQsV0FBSyxlQUFlLENBQUMsT0FBTyxHQUFHLGlCQUFpQixpQkFBaUIsSUFBSSxDQUFDO0FBQ3RFLGFBQU8sTUFBTTtBQUNYLGFBQUssZUFBZSxLQUFLLGFBQWEsT0FBTyxDQUFDLE1BQU0sTUFBTSxLQUFLO0FBQUEsTUFDakU7QUFBQSxJQUNGO0FBQ0EsYUFBUyxpQkFBaUIsTUFBTTtBQUM5QixVQUFJLEtBQUs7QUFDUCxlQUFPLEtBQUs7QUFDZCxVQUFJLE9BQU8sZUFBZSxjQUFjLGdCQUFnQixZQUFZO0FBQ2xFLGVBQU8saUJBQWlCLEtBQUssSUFBSTtBQUFBLE1BQ25DO0FBQ0EsVUFBSSxDQUFDLEtBQUssWUFBWTtBQUNwQixlQUFPLENBQUM7QUFBQSxNQUNWO0FBQ0EsYUFBTyxpQkFBaUIsS0FBSyxVQUFVO0FBQUEsSUFDekM7QUFDQSxhQUFTLGFBQWEsU0FBUztBQUM3QixhQUFPLElBQUksTUFBTSxFQUFFLFFBQVEsR0FBRyxjQUFjO0FBQUEsSUFDOUM7QUFDQSxRQUFJLGlCQUFpQjtBQUFBLE1BQ25CLFFBQVEsRUFBRSxRQUFRLEdBQUc7QUFDbkIsZUFBTyxNQUFNO0FBQUEsVUFDWCxJQUFJLElBQUksUUFBUSxRQUFRLENBQUMsTUFBTSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFBQSxRQUNoRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUksRUFBRSxRQUFRLEdBQUcsTUFBTTtBQUNyQixZQUFJLFFBQVEsT0FBTztBQUNqQixpQkFBTztBQUNULGVBQU8sUUFBUTtBQUFBLFVBQ2IsQ0FBQyxRQUFRLE9BQU8sVUFBVSxlQUFlLEtBQUssS0FBSyxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSTtBQUFBLFFBQ25GO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLFdBQVc7QUFDaEMsWUFBSSxRQUFRO0FBQ1YsaUJBQU87QUFDVCxlQUFPLFFBQVE7QUFBQSxVQUNiLFFBQVE7QUFBQSxZQUNOLENBQUMsUUFBUSxRQUFRLElBQUksS0FBSyxJQUFJO0FBQUEsVUFDaEMsS0FBSyxDQUFDO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLE9BQU8sV0FBVztBQUN2QyxjQUFNLFNBQVMsUUFBUTtBQUFBLFVBQ3JCLENBQUMsUUFBUSxPQUFPLFVBQVUsZUFBZSxLQUFLLEtBQUssSUFBSTtBQUFBLFFBQ3pELEtBQUssUUFBUSxRQUFRLFNBQVMsQ0FBQztBQUMvQixjQUFNLGFBQWEsT0FBTyx5QkFBeUIsUUFBUSxJQUFJO0FBQy9ELGFBQUssY0FBYyxPQUFPLFNBQVMsV0FBVyxTQUFTLGNBQWMsT0FBTyxTQUFTLFdBQVc7QUFDOUYsaUJBQU8sUUFBUSxJQUFJLFFBQVEsTUFBTSxPQUFPLFNBQVM7QUFDbkQsZUFBTyxRQUFRLElBQUksUUFBUSxNQUFNLEtBQUs7QUFBQSxNQUN4QztBQUFBLElBQ0Y7QUFDQSxhQUFTLGtCQUFrQjtBQUN6QixVQUFJLE9BQU8sUUFBUSxRQUFRLElBQUk7QUFDL0IsYUFBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLFFBQVE7QUFDL0IsWUFBSSxHQUFHLElBQUksUUFBUSxJQUFJLE1BQU0sR0FBRztBQUNoQyxlQUFPO0FBQUEsTUFDVCxHQUFHLENBQUMsQ0FBQztBQUFBLElBQ1A7QUFHQSxhQUFTLGlCQUFpQixPQUFPO0FBQy9CLFVBQUksV0FBVyxDQUFDLFFBQVEsT0FBTyxRQUFRLFlBQVksQ0FBQyxNQUFNLFFBQVEsR0FBRyxLQUFLLFFBQVE7QUFDbEYsVUFBSSxVQUFVLENBQUMsS0FBSyxXQUFXLE9BQU87QUFDcEMsZUFBTyxRQUFRLE9BQU8sMEJBQTBCLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLFdBQVcsQ0FBQyxNQUFNO0FBQzlGLGNBQUksZUFBZSxTQUFTLFVBQVU7QUFDcEM7QUFDRixjQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsUUFBUSxNQUFNO0FBQ3ZEO0FBQ0YsY0FBSSxPQUFPLGFBQWEsS0FBSyxNQUFNLEdBQUcsUUFBUSxJQUFJLEdBQUc7QUFDckQsY0FBSSxPQUFPLFVBQVUsWUFBWSxVQUFVLFFBQVEsTUFBTSxnQkFBZ0I7QUFDdkUsZ0JBQUksR0FBRyxJQUFJLE1BQU0sV0FBVyxPQUFPLE1BQU0sR0FBRztBQUFBLFVBQzlDLE9BQU87QUFDTCxnQkFBSSxTQUFTLEtBQUssS0FBSyxVQUFVLE9BQU8sRUFBRSxpQkFBaUIsVUFBVTtBQUNuRSxzQkFBUSxPQUFPLElBQUk7QUFBQSxZQUNyQjtBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQ0EsYUFBTyxRQUFRLEtBQUs7QUFBQSxJQUN0QjtBQUNBLGFBQVMsWUFBWSxVQUFVLFlBQVksTUFBTTtBQUFBLElBQ2pELEdBQUc7QUFDRCxVQUFJLE1BQU07QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGdCQUFnQjtBQUFBLFFBQ2hCLFdBQVcsT0FBTyxNQUFNLEtBQUs7QUFDM0IsaUJBQU8sU0FBUyxLQUFLLGNBQWMsTUFBTSxJQUFJLE9BQU8sSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLE9BQU8sTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHO0FBQUEsUUFDMUc7QUFBQSxNQUNGO0FBQ0EsZ0JBQVUsR0FBRztBQUNiLGFBQU8sQ0FBQyxpQkFBaUI7QUFDdkIsWUFBSSxPQUFPLGlCQUFpQixZQUFZLGlCQUFpQixRQUFRLGFBQWEsZ0JBQWdCO0FBQzVGLGNBQUksYUFBYSxJQUFJLFdBQVcsS0FBSyxHQUFHO0FBQ3hDLGNBQUksYUFBYSxDQUFDLE9BQU8sTUFBTSxRQUFRO0FBQ3JDLGdCQUFJLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxHQUFHO0FBQ3pELGdCQUFJLGVBQWU7QUFDbkIsbUJBQU8sV0FBVyxPQUFPLE1BQU0sR0FBRztBQUFBLFVBQ3BDO0FBQUEsUUFDRixPQUFPO0FBQ0wsY0FBSSxlQUFlO0FBQUEsUUFDckI7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFDQSxhQUFTLElBQUksS0FBSyxNQUFNO0FBQ3RCLGFBQU8sS0FBSyxNQUFNLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxZQUFZLE1BQU0sT0FBTyxHQUFHLEdBQUc7QUFBQSxJQUN2RTtBQUNBLGFBQVMsSUFBSSxLQUFLLE1BQU0sT0FBTztBQUM3QixVQUFJLE9BQU8sU0FBUztBQUNsQixlQUFPLEtBQUssTUFBTSxHQUFHO0FBQ3ZCLFVBQUksS0FBSyxXQUFXO0FBQ2xCLFlBQUksS0FBSyxDQUFDLENBQUMsSUFBSTtBQUFBLGVBQ1IsS0FBSyxXQUFXO0FBQ3ZCLGNBQU07QUFBQSxXQUNIO0FBQ0gsWUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ2IsaUJBQU8sSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxLQUFLO0FBQUEsYUFDMUM7QUFDSCxjQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNoQixpQkFBTyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEtBQUs7QUFBQSxRQUMvQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBR0EsUUFBSSxTQUFTLENBQUM7QUFDZCxhQUFTLE1BQU0sTUFBTSxVQUFVO0FBQzdCLGFBQU8sSUFBSSxJQUFJO0FBQUEsSUFDakI7QUFDQSxhQUFTLGFBQWEsS0FBSyxJQUFJO0FBQzdCLGFBQU8sUUFBUSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxRQUFRLE1BQU07QUFDbkQsWUFBSSxvQkFBb0I7QUFDeEIsaUJBQVMsZUFBZTtBQUN0QixjQUFJLG1CQUFtQjtBQUNyQixtQkFBTztBQUFBLFVBQ1QsT0FBTztBQUNMLGdCQUFJLENBQUMsV0FBVyxPQUFPLElBQUkseUJBQXlCLEVBQUU7QUFDdEQsZ0NBQW9CLEVBQUUsYUFBYSxHQUFHLFVBQVU7QUFDaEQsd0JBQVksSUFBSSxPQUFPO0FBQ3ZCLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFDQSxlQUFPLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSTtBQUFBLFVBQ3JDLE1BQU07QUFDSixtQkFBTyxTQUFTLElBQUksYUFBYSxDQUFDO0FBQUEsVUFDcEM7QUFBQSxVQUNBLFlBQVk7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNILENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDVDtBQUdBLGFBQVMsU0FBUyxJQUFJLFlBQVksYUFBYSxNQUFNO0FBQ25ELFVBQUk7QUFDRixlQUFPLFNBQVMsR0FBRyxJQUFJO0FBQUEsTUFDekIsU0FBUyxHQUFHO0FBQ1Ysb0JBQVksR0FBRyxJQUFJLFVBQVU7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFDQSxhQUFTLFlBQVksUUFBUSxJQUFJLGFBQWEsUUFBUTtBQUNwRCxlQUFTLE9BQU87QUFBQSxRQUNkLFVBQVUsT0FBTyxTQUFTLEVBQUUsU0FBUywwQkFBMEI7QUFBQSxRQUMvRCxFQUFFLElBQUksV0FBVztBQUFBLE1BQ25CO0FBQ0EsY0FBUSxLQUFLLDRCQUE0QixPQUFPLE9BQU87QUFBQTtBQUFBLEVBRXZELGFBQWEsa0JBQWtCLGFBQWEsVUFBVSxFQUFFLElBQUksRUFBRTtBQUM5RCxpQkFBVyxNQUFNO0FBQ2YsY0FBTTtBQUFBLE1BQ1IsR0FBRyxDQUFDO0FBQUEsSUFDTjtBQUdBLFFBQUksOEJBQThCO0FBQ2xDLGFBQVMsMEJBQTBCLFVBQVU7QUFDM0MsVUFBSSxRQUFRO0FBQ1osb0NBQThCO0FBQzlCLFVBQUksU0FBUyxTQUFTO0FBQ3RCLG9DQUE4QjtBQUM5QixhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsU0FBUyxJQUFJLFlBQVksU0FBUyxDQUFDLEdBQUc7QUFDN0MsVUFBSTtBQUNKLG9CQUFjLElBQUksVUFBVSxFQUFFLENBQUMsVUFBVSxTQUFTLE9BQU8sTUFBTTtBQUMvRCxhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsaUJBQWlCLE1BQU07QUFDOUIsYUFBTyxxQkFBcUIsR0FBRyxJQUFJO0FBQUEsSUFDckM7QUFDQSxRQUFJLHVCQUF1QjtBQUMzQixhQUFTLGFBQWEsY0FBYztBQUNsQyw2QkFBdUI7QUFBQSxJQUN6QjtBQUNBLGFBQVMsZ0JBQWdCLElBQUksWUFBWTtBQUN2QyxVQUFJLG1CQUFtQixDQUFDO0FBQ3hCLG1CQUFhLGtCQUFrQixFQUFFO0FBQ2pDLFVBQUksWUFBWSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixFQUFFLENBQUM7QUFDMUQsVUFBSSxZQUFZLE9BQU8sZUFBZSxhQUFhLDhCQUE4QixXQUFXLFVBQVUsSUFBSSw0QkFBNEIsV0FBVyxZQUFZLEVBQUU7QUFDL0osYUFBTyxTQUFTLEtBQUssTUFBTSxJQUFJLFlBQVksU0FBUztBQUFBLElBQ3REO0FBQ0EsYUFBUyw4QkFBOEIsV0FBVyxNQUFNO0FBQ3RELGFBQU8sQ0FBQyxXQUFXLE1BQU07QUFBQSxNQUN6QixHQUFHLEVBQUUsT0FBTyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtBQUM5QyxZQUFJLFNBQVMsS0FBSyxNQUFNLGFBQWEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsTUFBTTtBQUNwRSw0QkFBb0IsVUFBVSxNQUFNO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixhQUFTLDJCQUEyQixZQUFZLElBQUk7QUFDbEQsVUFBSSxjQUFjLFVBQVUsR0FBRztBQUM3QixlQUFPLGNBQWMsVUFBVTtBQUFBLE1BQ2pDO0FBQ0EsVUFBSSxnQkFBZ0IsT0FBTyxlQUFlLGlCQUFpQjtBQUFBLE1BQzNELENBQUMsRUFBRTtBQUNILFVBQUksMEJBQTBCLHFCQUFxQixLQUFLLFdBQVcsS0FBSyxDQUFDLEtBQUssaUJBQWlCLEtBQUssV0FBVyxLQUFLLENBQUMsSUFBSSxlQUFlLFVBQVUsVUFBVTtBQUM1SixZQUFNLG9CQUFvQixNQUFNO0FBQzlCLFlBQUk7QUFDRixjQUFJLFFBQVEsSUFBSTtBQUFBLFlBQ2QsQ0FBQyxVQUFVLE9BQU87QUFBQSxZQUNsQixrQ0FBa0MsdUJBQXVCO0FBQUEsVUFDM0Q7QUFDQSxpQkFBTyxlQUFlLE9BQU8sUUFBUTtBQUFBLFlBQ25DLE9BQU8sWUFBWSxVQUFVO0FBQUEsVUFDL0IsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDVCxTQUFTLFFBQVE7QUFDZixzQkFBWSxRQUFRLElBQUksVUFBVTtBQUNsQyxpQkFBTyxRQUFRLFFBQVE7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLE9BQU8sa0JBQWtCO0FBQzdCLG9CQUFjLFVBQVUsSUFBSTtBQUM1QixhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsNEJBQTRCLFdBQVcsWUFBWSxJQUFJO0FBQzlELFVBQUksT0FBTywyQkFBMkIsWUFBWSxFQUFFO0FBQ3BELGFBQU8sQ0FBQyxXQUFXLE1BQU07QUFBQSxNQUN6QixHQUFHLEVBQUUsT0FBTyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtBQUM5QyxhQUFLLFNBQVM7QUFDZCxhQUFLLFdBQVc7QUFDaEIsWUFBSSxnQkFBZ0IsYUFBYSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkQsWUFBSSxPQUFPLFNBQVMsWUFBWTtBQUM5QixjQUFJLFVBQVUsS0FBSyxNQUFNLGFBQWEsRUFBRSxNQUFNLENBQUMsV0FBVyxZQUFZLFFBQVEsSUFBSSxVQUFVLENBQUM7QUFDN0YsY0FBSSxLQUFLLFVBQVU7QUFDakIsZ0NBQW9CLFVBQVUsS0FBSyxRQUFRLGVBQWUsUUFBUSxFQUFFO0FBQ3BFLGlCQUFLLFNBQVM7QUFBQSxVQUNoQixPQUFPO0FBQ0wsb0JBQVEsS0FBSyxDQUFDLFdBQVc7QUFDdkIsa0NBQW9CLFVBQVUsUUFBUSxlQUFlLFFBQVEsRUFBRTtBQUFBLFlBQ2pFLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVyxZQUFZLFFBQVEsSUFBSSxVQUFVLENBQUMsRUFBRSxRQUFRLE1BQU0sS0FBSyxTQUFTLE1BQU07QUFBQSxVQUM5RjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLGFBQVMsb0JBQW9CLFVBQVUsT0FBTyxRQUFRLFFBQVEsSUFBSTtBQUNoRSxVQUFJLCtCQUErQixPQUFPLFVBQVUsWUFBWTtBQUM5RCxZQUFJLFNBQVMsTUFBTSxNQUFNLFFBQVEsTUFBTTtBQUN2QyxZQUFJLGtCQUFrQixTQUFTO0FBQzdCLGlCQUFPLEtBQUssQ0FBQyxNQUFNLG9CQUFvQixVQUFVLEdBQUcsUUFBUSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVyxZQUFZLFFBQVEsSUFBSSxLQUFLLENBQUM7QUFBQSxRQUN2SCxPQUFPO0FBQ0wsbUJBQVMsTUFBTTtBQUFBLFFBQ2pCO0FBQUEsTUFDRixXQUFXLE9BQU8sVUFBVSxZQUFZLGlCQUFpQixTQUFTO0FBQ2hFLGNBQU0sS0FBSyxDQUFDLE1BQU0sU0FBUyxDQUFDLENBQUM7QUFBQSxNQUMvQixPQUFPO0FBQ0wsaUJBQVMsS0FBSztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUdBLFFBQUksaUJBQWlCO0FBQ3JCLGFBQVMsT0FBTyxVQUFVLElBQUk7QUFDNUIsYUFBTyxpQkFBaUI7QUFBQSxJQUMxQjtBQUNBLGFBQVMsVUFBVSxXQUFXO0FBQzVCLHVCQUFpQjtBQUFBLElBQ25CO0FBQ0EsUUFBSSxvQkFBb0IsQ0FBQztBQUN6QixhQUFTLFVBQVUsTUFBTSxVQUFVO0FBQ2pDLHdCQUFrQixJQUFJLElBQUk7QUFDMUIsYUFBTztBQUFBLFFBQ0wsT0FBTyxZQUFZO0FBQ2pCLGNBQUksQ0FBQyxrQkFBa0IsVUFBVSxHQUFHO0FBQ2xDLG9CQUFRLEtBQUssT0FBTyw4QkFBOEIsVUFBVSxTQUFTLElBQUksNENBQTRDO0FBQ3JIO0FBQUEsVUFDRjtBQUNBLGdCQUFNLE1BQU0sZUFBZSxRQUFRLFVBQVU7QUFDN0MseUJBQWUsT0FBTyxPQUFPLElBQUksTUFBTSxlQUFlLFFBQVEsU0FBUyxHQUFHLEdBQUcsSUFBSTtBQUFBLFFBQ25GO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxhQUFTLGdCQUFnQixNQUFNO0FBQzdCLGFBQU8sT0FBTyxLQUFLLGlCQUFpQixFQUFFLFNBQVMsSUFBSTtBQUFBLElBQ3JEO0FBQ0EsYUFBUyxXQUFXLElBQUksWUFBWSwyQkFBMkI7QUFDN0QsbUJBQWEsTUFBTSxLQUFLLFVBQVU7QUFDbEMsVUFBSSxHQUFHLHNCQUFzQjtBQUMzQixZQUFJLGNBQWMsT0FBTyxRQUFRLEdBQUcsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRSxNQUFNLE1BQU0sRUFBRTtBQUNsRyxZQUFJLG1CQUFtQixlQUFlLFdBQVc7QUFDakQsc0JBQWMsWUFBWSxJQUFJLENBQUMsY0FBYztBQUMzQyxjQUFJLGlCQUFpQixLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsVUFBVSxJQUFJLEdBQUc7QUFDakUsbUJBQU87QUFBQSxjQUNMLE1BQU0sVUFBVSxVQUFVLElBQUk7QUFBQSxjQUM5QixPQUFPLElBQUksVUFBVSxLQUFLO0FBQUEsWUFDNUI7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNULENBQUM7QUFDRCxxQkFBYSxXQUFXLE9BQU8sV0FBVztBQUFBLE1BQzVDO0FBQ0EsVUFBSSwwQkFBMEIsQ0FBQztBQUMvQixVQUFJLGNBQWMsV0FBVyxJQUFJLHdCQUF3QixDQUFDLFNBQVMsWUFBWSx3QkFBd0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sc0JBQXNCLEVBQUUsSUFBSSxtQkFBbUIseUJBQXlCLHlCQUF5QixDQUFDLEVBQUUsS0FBSyxVQUFVO0FBQ3RQLGFBQU8sWUFBWSxJQUFJLENBQUMsZUFBZTtBQUNyQyxlQUFPLG9CQUFvQixJQUFJLFVBQVU7QUFBQSxNQUMzQyxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsZUFBZSxZQUFZO0FBQ2xDLGFBQU8sTUFBTSxLQUFLLFVBQVUsRUFBRSxJQUFJLHdCQUF3QixDQUFDLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDO0FBQUEsSUFDN0c7QUFDQSxRQUFJLHNCQUFzQjtBQUMxQixRQUFJLHlCQUF5QyxvQkFBSSxJQUFJO0FBQ3JELFFBQUkseUJBQXlCLE9BQU87QUFDcEMsYUFBUyx3QkFBd0IsVUFBVTtBQUN6Qyw0QkFBc0I7QUFDdEIsVUFBSSxNQUFNLE9BQU87QUFDakIsK0JBQXlCO0FBQ3pCLDZCQUF1QixJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFVBQUksZ0JBQWdCLE1BQU07QUFDeEIsZUFBTyx1QkFBdUIsSUFBSSxHQUFHLEVBQUU7QUFDckMsaUNBQXVCLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUMxQywrQkFBdUIsT0FBTyxHQUFHO0FBQUEsTUFDbkM7QUFDQSxVQUFJLGdCQUFnQixNQUFNO0FBQ3hCLDhCQUFzQjtBQUN0QixzQkFBYztBQUFBLE1BQ2hCO0FBQ0EsZUFBUyxhQUFhO0FBQ3RCLG9CQUFjO0FBQUEsSUFDaEI7QUFDQSxhQUFTLHlCQUF5QixJQUFJO0FBQ3BDLFVBQUksV0FBVyxDQUFDO0FBQ2hCLFVBQUksVUFBVSxDQUFDLGFBQWEsU0FBUyxLQUFLLFFBQVE7QUFDbEQsVUFBSSxDQUFDLFNBQVMsYUFBYSxJQUFJLG1CQUFtQixFQUFFO0FBQ3BELGVBQVMsS0FBSyxhQUFhO0FBQzNCLFVBQUksWUFBWTtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1I7QUFBQSxRQUNBLGVBQWUsY0FBYyxLQUFLLGVBQWUsRUFBRTtBQUFBLFFBQ25ELFVBQVUsU0FBUyxLQUFLLFVBQVUsRUFBRTtBQUFBLE1BQ3RDO0FBQ0EsVUFBSSxZQUFZLE1BQU0sU0FBUyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakQsYUFBTyxDQUFDLFdBQVcsU0FBUztBQUFBLElBQzlCO0FBQ0EsYUFBUyxvQkFBb0IsSUFBSSxZQUFZO0FBQzNDLFVBQUksT0FBTyxNQUFNO0FBQUEsTUFDakI7QUFDQSxVQUFJLFdBQVcsa0JBQWtCLFdBQVcsSUFBSSxLQUFLO0FBQ3JELFVBQUksQ0FBQyxXQUFXLE9BQU8sSUFBSSx5QkFBeUIsRUFBRTtBQUN0RCx5QkFBbUIsSUFBSSxXQUFXLFVBQVUsT0FBTztBQUNuRCxVQUFJLGNBQWMsTUFBTTtBQUN0QixZQUFJLEdBQUcsYUFBYSxHQUFHO0FBQ3JCO0FBQ0YsaUJBQVMsVUFBVSxTQUFTLE9BQU8sSUFBSSxZQUFZLFNBQVM7QUFDNUQsbUJBQVcsU0FBUyxLQUFLLFVBQVUsSUFBSSxZQUFZLFNBQVM7QUFDNUQsOEJBQXNCLHVCQUF1QixJQUFJLHNCQUFzQixFQUFFLEtBQUssUUFBUSxJQUFJLFNBQVM7QUFBQSxNQUNyRztBQUNBLGtCQUFZLGNBQWM7QUFDMUIsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLGVBQWUsQ0FBQyxTQUFTLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxNQUFNLE1BQU07QUFDaEUsVUFBSSxLQUFLLFdBQVcsT0FBTztBQUN6QixlQUFPLEtBQUssUUFBUSxTQUFTLFdBQVc7QUFDMUMsYUFBTyxFQUFFLE1BQU0sTUFBTTtBQUFBLElBQ3ZCO0FBQ0EsUUFBSSxPQUFPLENBQUMsTUFBTTtBQUNsQixhQUFTLHdCQUF3QixXQUFXLE1BQU07QUFBQSxJQUNsRCxHQUFHO0FBQ0QsYUFBTyxDQUFDLEVBQUUsTUFBTSxNQUFNLE1BQU07QUFDMUIsWUFBSSxFQUFFLE1BQU0sU0FBUyxPQUFPLFNBQVMsSUFBSSxzQkFBc0IsT0FBTyxDQUFDLE9BQU8sY0FBYztBQUMxRixpQkFBTyxVQUFVLEtBQUs7QUFBQSxRQUN4QixHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEIsWUFBSSxZQUFZO0FBQ2QsbUJBQVMsU0FBUyxJQUFJO0FBQ3hCLGVBQU8sRUFBRSxNQUFNLFNBQVMsT0FBTyxTQUFTO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQ0EsUUFBSSx3QkFBd0IsQ0FBQztBQUM3QixhQUFTLGNBQWMsVUFBVTtBQUMvQiw0QkFBc0IsS0FBSyxRQUFRO0FBQUEsSUFDckM7QUFDQSxhQUFTLHVCQUF1QixFQUFFLEtBQUssR0FBRztBQUN4QyxhQUFPLHFCQUFxQixFQUFFLEtBQUssSUFBSTtBQUFBLElBQ3pDO0FBQ0EsUUFBSSx1QkFBdUIsTUFBTSxJQUFJLE9BQU8sSUFBSSxjQUFjLGNBQWM7QUFDNUUsYUFBUyxtQkFBbUIseUJBQXlCLDJCQUEyQjtBQUM5RSxhQUFPLENBQUMsRUFBRSxNQUFNLE1BQU0sTUFBTTtBQUMxQixZQUFJLFlBQVksS0FBSyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELFlBQUksYUFBYSxLQUFLLE1BQU0scUJBQXFCO0FBQ2pELFlBQUksWUFBWSxLQUFLLE1BQU0sdUJBQXVCLEtBQUssQ0FBQztBQUN4RCxZQUFJLFdBQVcsNkJBQTZCLHdCQUF3QixJQUFJLEtBQUs7QUFDN0UsZUFBTztBQUFBLFVBQ0wsTUFBTSxZQUFZLFVBQVUsQ0FBQyxJQUFJO0FBQUEsVUFDakMsT0FBTyxhQUFhLFdBQVcsQ0FBQyxJQUFJO0FBQUEsVUFDcEMsV0FBVyxVQUFVLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxLQUFLLEVBQUUsQ0FBQztBQUFBLFVBQ2xELFlBQVk7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsUUFBSSxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUNBLGFBQVMsV0FBVyxHQUFHLEdBQUc7QUFDeEIsVUFBSSxRQUFRLGVBQWUsUUFBUSxFQUFFLElBQUksTUFBTSxLQUFLLFVBQVUsRUFBRTtBQUNoRSxVQUFJLFFBQVEsZUFBZSxRQUFRLEVBQUUsSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFO0FBQ2hFLGFBQU8sZUFBZSxRQUFRLEtBQUssSUFBSSxlQUFlLFFBQVEsS0FBSztBQUFBLElBQ3JFO0FBR0EsYUFBUyxTQUFTLElBQUksTUFBTSxTQUFTLENBQUMsR0FBRztBQUN2QyxTQUFHO0FBQUEsUUFDRCxJQUFJLFlBQVksTUFBTTtBQUFBLFVBQ3BCO0FBQUEsVUFDQSxTQUFTO0FBQUE7QUFBQSxVQUVULFVBQVU7QUFBQSxVQUNWLFlBQVk7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUdBLGFBQVMsS0FBSyxJQUFJLFVBQVU7QUFDMUIsVUFBSSxPQUFPLGVBQWUsY0FBYyxjQUFjLFlBQVk7QUFDaEUsY0FBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDNUQ7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPO0FBQ1gsZUFBUyxJQUFJLE1BQU0sT0FBTyxJQUFJO0FBQzlCLFVBQUk7QUFDRjtBQUNGLFVBQUksT0FBTyxHQUFHO0FBQ2QsYUFBTyxNQUFNO0FBQ1gsYUFBSyxNQUFNLFVBQVUsS0FBSztBQUMxQixlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUdBLGFBQVMsS0FBSyxZQUFZLE1BQU07QUFDOUIsY0FBUSxLQUFLLG1CQUFtQixPQUFPLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDcEQ7QUFHQSxRQUFJLFVBQVU7QUFDZCxhQUFTLFFBQVE7QUFDZixVQUFJO0FBQ0YsYUFBSyw2R0FBNkc7QUFDcEgsZ0JBQVU7QUFDVixVQUFJLENBQUMsU0FBUztBQUNaLGFBQUsscUlBQXFJO0FBQzVJLGVBQVMsVUFBVSxhQUFhO0FBQ2hDLGVBQVMsVUFBVSxxQkFBcUI7QUFDeEMsOEJBQXdCO0FBQ3hCLGdCQUFVLENBQUMsT0FBTyxTQUFTLElBQUksSUFBSSxDQUFDO0FBQ3BDLGtCQUFZLENBQUMsT0FBTyxZQUFZLEVBQUUsQ0FBQztBQUNuQyx3QkFBa0IsQ0FBQyxJQUFJLFVBQVU7QUFDL0IsbUJBQVcsSUFBSSxLQUFLLEVBQUUsUUFBUSxDQUFDLFdBQVcsT0FBTyxDQUFDO0FBQUEsTUFDcEQsQ0FBQztBQUNELFVBQUksc0JBQXNCLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxlQUFlLElBQUk7QUFDckUsWUFBTSxLQUFLLFNBQVMsaUJBQWlCLGFBQWEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsT0FBTztBQUMxRyxpQkFBUyxFQUFFO0FBQUEsTUFDYixDQUFDO0FBQ0QsZUFBUyxVQUFVLG9CQUFvQjtBQUN2QyxpQkFBVyxNQUFNO0FBQ2YsZ0NBQXdCO0FBQUEsTUFDMUIsQ0FBQztBQUFBLElBQ0g7QUFDQSxRQUFJLHdCQUF3QixDQUFDO0FBQzdCLFFBQUksd0JBQXdCLENBQUM7QUFDN0IsYUFBUyxnQkFBZ0I7QUFDdkIsYUFBTyxzQkFBc0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDO0FBQUEsSUFDL0M7QUFDQSxhQUFTLGVBQWU7QUFDdEIsYUFBTyxzQkFBc0IsT0FBTyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7QUFBQSxJQUM3RTtBQUNBLGFBQVMsZ0JBQWdCLGtCQUFrQjtBQUN6Qyw0QkFBc0IsS0FBSyxnQkFBZ0I7QUFBQSxJQUM3QztBQUNBLGFBQVMsZ0JBQWdCLGtCQUFrQjtBQUN6Qyw0QkFBc0IsS0FBSyxnQkFBZ0I7QUFBQSxJQUM3QztBQUNBLGFBQVMsWUFBWSxJQUFJLHVCQUF1QixPQUFPO0FBQ3JELGFBQU8sWUFBWSxJQUFJLENBQUMsWUFBWTtBQUNsQyxjQUFNLFlBQVksdUJBQXVCLGFBQWEsSUFBSSxjQUFjO0FBQ3hFLFlBQUksVUFBVSxLQUFLLENBQUMsYUFBYSxRQUFRLFFBQVEsUUFBUSxDQUFDO0FBQ3hELGlCQUFPO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsWUFBWSxJQUFJLFVBQVU7QUFDakMsVUFBSSxDQUFDO0FBQ0g7QUFDRixVQUFJLFNBQVMsRUFBRTtBQUNiLGVBQU87QUFDVCxVQUFJLEdBQUc7QUFDTCxhQUFLLEdBQUc7QUFDVixVQUFJLENBQUMsR0FBRztBQUNOO0FBQ0YsYUFBTyxZQUFZLEdBQUcsZUFBZSxRQUFRO0FBQUEsSUFDL0M7QUFDQSxhQUFTLE9BQU8sSUFBSTtBQUNsQixhQUFPLGNBQWMsRUFBRSxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsUUFBUSxDQUFDO0FBQUEsSUFDaEU7QUFDQSxRQUFJLG9CQUFvQixDQUFDO0FBQ3pCLGFBQVMsY0FBYyxVQUFVO0FBQy9CLHdCQUFrQixLQUFLLFFBQVE7QUFBQSxJQUNqQztBQUNBLGFBQVMsU0FBUyxJQUFJLFNBQVMsTUFBTSxZQUFZLE1BQU07QUFBQSxJQUN2RCxHQUFHO0FBQ0QsOEJBQXdCLE1BQU07QUFDNUIsZUFBTyxJQUFJLENBQUMsS0FBSyxTQUFTO0FBQ3hCLG9CQUFVLEtBQUssSUFBSTtBQUNuQiw0QkFBa0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQztBQUM3QyxxQkFBVyxLQUFLLElBQUksVUFBVSxFQUFFLFFBQVEsQ0FBQyxXQUFXLE9BQU8sQ0FBQztBQUM1RCxjQUFJLGFBQWEsS0FBSztBQUFBLFFBQ3hCLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxZQUFZLE1BQU0sU0FBUyxNQUFNO0FBQ3hDLGFBQU8sTUFBTSxDQUFDLE9BQU87QUFDbkIsMEJBQWtCLEVBQUU7QUFDcEIsdUJBQWUsRUFBRTtBQUFBLE1BQ25CLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUywwQkFBMEI7QUFDakMsVUFBSSxtQkFBbUI7QUFBQSxRQUNyQixDQUFDLE1BQU0sVUFBVSxDQUFDLHlCQUF5QixDQUFDO0FBQUEsUUFDNUMsQ0FBQyxVQUFVLFVBQVUsQ0FBQyxZQUFZLENBQUM7QUFBQSxRQUNuQyxDQUFDLFFBQVEsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQUFBLE1BQy9CO0FBQ0EsdUJBQWlCLFFBQVEsQ0FBQyxDQUFDLFNBQVMsWUFBWSxTQUFTLE1BQU07QUFDN0QsWUFBSSxnQkFBZ0IsVUFBVTtBQUM1QjtBQUNGLGtCQUFVLEtBQUssQ0FBQyxhQUFhO0FBQzNCLGNBQUksU0FBUyxjQUFjLFFBQVEsR0FBRztBQUNwQyxpQkFBSyxVQUFVLFFBQVEsa0JBQWtCLE9BQU8sU0FBUztBQUN6RCxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSxZQUFZLENBQUM7QUFDakIsUUFBSSxZQUFZO0FBQ2hCLGFBQVMsU0FBUyxXQUFXLE1BQU07QUFBQSxJQUNuQyxHQUFHO0FBQ0QscUJBQWUsTUFBTTtBQUNuQixxQkFBYSxXQUFXLE1BQU07QUFDNUIsMkJBQWlCO0FBQUEsUUFDbkIsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUNELGFBQU8sSUFBSSxRQUFRLENBQUMsUUFBUTtBQUMxQixrQkFBVSxLQUFLLE1BQU07QUFDbkIsbUJBQVM7QUFDVCxjQUFJO0FBQUEsUUFDTixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsbUJBQW1CO0FBQzFCLGtCQUFZO0FBQ1osYUFBTyxVQUFVO0FBQ2Ysa0JBQVUsTUFBTSxFQUFFO0FBQUEsSUFDdEI7QUFDQSxhQUFTLGdCQUFnQjtBQUN2QixrQkFBWTtBQUFBLElBQ2Q7QUFHQSxhQUFTLFdBQVcsSUFBSSxPQUFPO0FBQzdCLFVBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUN4QixlQUFPLHFCQUFxQixJQUFJLE1BQU0sS0FBSyxHQUFHLENBQUM7QUFBQSxNQUNqRCxXQUFXLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUN0RCxlQUFPLHFCQUFxQixJQUFJLEtBQUs7QUFBQSxNQUN2QyxXQUFXLE9BQU8sVUFBVSxZQUFZO0FBQ3RDLGVBQU8sV0FBVyxJQUFJLE1BQU0sQ0FBQztBQUFBLE1BQy9CO0FBQ0EsYUFBTyxxQkFBcUIsSUFBSSxLQUFLO0FBQUEsSUFDdkM7QUFDQSxhQUFTLHFCQUFxQixJQUFJLGFBQWE7QUFDN0MsVUFBSSxRQUFRLENBQUMsaUJBQWlCLGFBQWEsTUFBTSxHQUFHLEVBQUUsT0FBTyxPQUFPO0FBQ3BFLFVBQUksaUJBQWlCLENBQUMsaUJBQWlCLGFBQWEsTUFBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFVBQVUsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLE9BQU87QUFDdEgsVUFBSSwwQkFBMEIsQ0FBQyxZQUFZO0FBQ3pDLFdBQUcsVUFBVSxJQUFJLEdBQUcsT0FBTztBQUMzQixlQUFPLE1BQU07QUFDWCxhQUFHLFVBQVUsT0FBTyxHQUFHLE9BQU87QUFBQSxRQUNoQztBQUFBLE1BQ0Y7QUFDQSxvQkFBYyxnQkFBZ0IsT0FBTyxjQUFjLEtBQUssZUFBZTtBQUN2RSxhQUFPLHdCQUF3QixlQUFlLFdBQVcsQ0FBQztBQUFBLElBQzVEO0FBQ0EsYUFBUyxxQkFBcUIsSUFBSSxhQUFhO0FBQzdDLFVBQUksUUFBUSxDQUFDLGdCQUFnQixZQUFZLE1BQU0sR0FBRyxFQUFFLE9BQU8sT0FBTztBQUNsRSxVQUFJLFNBQVMsT0FBTyxRQUFRLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTSxPQUFPLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRSxPQUFPLE9BQU87QUFDM0gsVUFBSSxZQUFZLE9BQU8sUUFBUSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxPQUFPLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRSxPQUFPLE9BQU87QUFDL0gsVUFBSSxRQUFRLENBQUM7QUFDYixVQUFJLFVBQVUsQ0FBQztBQUNmLGdCQUFVLFFBQVEsQ0FBQyxNQUFNO0FBQ3ZCLFlBQUksR0FBRyxVQUFVLFNBQVMsQ0FBQyxHQUFHO0FBQzVCLGFBQUcsVUFBVSxPQUFPLENBQUM7QUFDckIsa0JBQVEsS0FBSyxDQUFDO0FBQUEsUUFDaEI7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPLFFBQVEsQ0FBQyxNQUFNO0FBQ3BCLFlBQUksQ0FBQyxHQUFHLFVBQVUsU0FBUyxDQUFDLEdBQUc7QUFDN0IsYUFBRyxVQUFVLElBQUksQ0FBQztBQUNsQixnQkFBTSxLQUFLLENBQUM7QUFBQSxRQUNkO0FBQUEsTUFDRixDQUFDO0FBQ0QsYUFBTyxNQUFNO0FBQ1gsZ0JBQVEsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO0FBQzFDLGNBQU0sUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLE9BQU8sQ0FBQyxDQUFDO0FBQUEsTUFDN0M7QUFBQSxJQUNGO0FBR0EsYUFBUyxVQUFVLElBQUksT0FBTztBQUM1QixVQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUMvQyxlQUFPLG9CQUFvQixJQUFJLEtBQUs7QUFBQSxNQUN0QztBQUNBLGFBQU8sb0JBQW9CLElBQUksS0FBSztBQUFBLElBQ3RDO0FBQ0EsYUFBUyxvQkFBb0IsSUFBSSxPQUFPO0FBQ3RDLFVBQUksaUJBQWlCLENBQUM7QUFDdEIsYUFBTyxRQUFRLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLE1BQU0sTUFBTTtBQUMvQyx1QkFBZSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUc7QUFDbEMsWUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLEdBQUc7QUFDekIsZ0JBQU0sVUFBVSxHQUFHO0FBQUEsUUFDckI7QUFDQSxXQUFHLE1BQU0sWUFBWSxLQUFLLE1BQU07QUFBQSxNQUNsQyxDQUFDO0FBQ0QsaUJBQVcsTUFBTTtBQUNmLFlBQUksR0FBRyxNQUFNLFdBQVcsR0FBRztBQUN6QixhQUFHLGdCQUFnQixPQUFPO0FBQUEsUUFDNUI7QUFBQSxNQUNGLENBQUM7QUFDRCxhQUFPLE1BQU07QUFDWCxrQkFBVSxJQUFJLGNBQWM7QUFBQSxNQUM5QjtBQUFBLElBQ0Y7QUFDQSxhQUFTLG9CQUFvQixJQUFJLE9BQU87QUFDdEMsVUFBSSxRQUFRLEdBQUcsYUFBYSxTQUFTLEtBQUs7QUFDMUMsU0FBRyxhQUFhLFNBQVMsS0FBSztBQUM5QixhQUFPLE1BQU07QUFDWCxXQUFHLGFBQWEsU0FBUyxTQUFTLEVBQUU7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFDQSxhQUFTLFVBQVUsU0FBUztBQUMxQixhQUFPLFFBQVEsUUFBUSxtQkFBbUIsT0FBTyxFQUFFLFlBQVk7QUFBQSxJQUNqRTtBQUdBLGFBQVMsS0FBSyxVQUFVLFdBQVcsTUFBTTtBQUFBLElBQ3pDLEdBQUc7QUFDRCxVQUFJLFNBQVM7QUFDYixhQUFPLFdBQVc7QUFDaEIsWUFBSSxDQUFDLFFBQVE7QUFDWCxtQkFBUztBQUNULG1CQUFTLE1BQU0sTUFBTSxTQUFTO0FBQUEsUUFDaEMsT0FBTztBQUNMLG1CQUFTLE1BQU0sTUFBTSxTQUFTO0FBQUEsUUFDaEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLGNBQVUsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLFdBQVcsV0FBVyxHQUFHLEVBQUUsVUFBVSxVQUFVLE1BQU07QUFDekYsVUFBSSxPQUFPLGVBQWU7QUFDeEIscUJBQWEsVUFBVSxVQUFVO0FBQ25DLFVBQUksZUFBZTtBQUNqQjtBQUNGLFVBQUksQ0FBQyxjQUFjLE9BQU8sZUFBZSxXQUFXO0FBQ2xELHNDQUE4QixJQUFJLFdBQVcsS0FBSztBQUFBLE1BQ3BELE9BQU87QUFDTCwyQ0FBbUMsSUFBSSxZQUFZLEtBQUs7QUFBQSxNQUMxRDtBQUFBLElBQ0YsQ0FBQztBQUNELGFBQVMsbUNBQW1DLElBQUksYUFBYSxPQUFPO0FBQ2xFLCtCQUF5QixJQUFJLFlBQVksRUFBRTtBQUMzQyxVQUFJLHNCQUFzQjtBQUFBLFFBQ3hCLFNBQVMsQ0FBQyxZQUFZO0FBQ3BCLGFBQUcsY0FBYyxNQUFNLFNBQVM7QUFBQSxRQUNsQztBQUFBLFFBQ0EsZUFBZSxDQUFDLFlBQVk7QUFDMUIsYUFBRyxjQUFjLE1BQU0sUUFBUTtBQUFBLFFBQ2pDO0FBQUEsUUFDQSxhQUFhLENBQUMsWUFBWTtBQUN4QixhQUFHLGNBQWMsTUFBTSxNQUFNO0FBQUEsUUFDL0I7QUFBQSxRQUNBLFNBQVMsQ0FBQyxZQUFZO0FBQ3BCLGFBQUcsY0FBYyxNQUFNLFNBQVM7QUFBQSxRQUNsQztBQUFBLFFBQ0EsZUFBZSxDQUFDLFlBQVk7QUFDMUIsYUFBRyxjQUFjLE1BQU0sUUFBUTtBQUFBLFFBQ2pDO0FBQUEsUUFDQSxhQUFhLENBQUMsWUFBWTtBQUN4QixhQUFHLGNBQWMsTUFBTSxNQUFNO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQ0EsMEJBQW9CLEtBQUssRUFBRSxXQUFXO0FBQUEsSUFDeEM7QUFDQSxhQUFTLDhCQUE4QixJQUFJLFdBQVcsT0FBTztBQUMzRCwrQkFBeUIsSUFBSSxTQUFTO0FBQ3RDLFVBQUksZ0JBQWdCLENBQUMsVUFBVSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsU0FBUyxLQUFLLEtBQUssQ0FBQztBQUNoRixVQUFJLGtCQUFrQixpQkFBaUIsVUFBVSxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEtBQUs7QUFDM0YsVUFBSSxtQkFBbUIsaUJBQWlCLFVBQVUsU0FBUyxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxLQUFLO0FBQzdGLFVBQUksVUFBVSxTQUFTLElBQUksS0FBSyxDQUFDLGVBQWU7QUFDOUMsb0JBQVksVUFBVSxPQUFPLENBQUMsR0FBRyxVQUFVLFFBQVEsVUFBVSxRQUFRLEtBQUssQ0FBQztBQUFBLE1BQzdFO0FBQ0EsVUFBSSxVQUFVLFNBQVMsS0FBSyxLQUFLLENBQUMsZUFBZTtBQUMvQyxvQkFBWSxVQUFVLE9BQU8sQ0FBQyxHQUFHLFVBQVUsUUFBUSxVQUFVLFFBQVEsS0FBSyxDQUFDO0FBQUEsTUFDN0U7QUFDQSxVQUFJLFdBQVcsQ0FBQyxVQUFVLFNBQVMsU0FBUyxLQUFLLENBQUMsVUFBVSxTQUFTLE9BQU87QUFDNUUsVUFBSSxlQUFlLFlBQVksVUFBVSxTQUFTLFNBQVM7QUFDM0QsVUFBSSxhQUFhLFlBQVksVUFBVSxTQUFTLE9BQU87QUFDdkQsVUFBSSxlQUFlLGVBQWUsSUFBSTtBQUN0QyxVQUFJLGFBQWEsYUFBYSxjQUFjLFdBQVcsU0FBUyxFQUFFLElBQUksTUFBTTtBQUM1RSxVQUFJLFFBQVEsY0FBYyxXQUFXLFNBQVMsQ0FBQyxJQUFJO0FBQ25ELFVBQUksU0FBUyxjQUFjLFdBQVcsVUFBVSxRQUFRO0FBQ3hELFVBQUksV0FBVztBQUNmLFVBQUksYUFBYSxjQUFjLFdBQVcsWUFBWSxHQUFHLElBQUk7QUFDN0QsVUFBSSxjQUFjLGNBQWMsV0FBVyxZQUFZLEVBQUUsSUFBSTtBQUM3RCxVQUFJLFNBQVM7QUFDYixVQUFJLGlCQUFpQjtBQUNuQixXQUFHLGNBQWMsTUFBTSxTQUFTO0FBQUEsVUFDOUIsaUJBQWlCO0FBQUEsVUFDakIsaUJBQWlCLEdBQUcsS0FBSztBQUFBLFVBQ3pCLG9CQUFvQjtBQUFBLFVBQ3BCLG9CQUFvQixHQUFHLFVBQVU7QUFBQSxVQUNqQywwQkFBMEI7QUFBQSxRQUM1QjtBQUNBLFdBQUcsY0FBYyxNQUFNLFFBQVE7QUFBQSxVQUM3QixTQUFTO0FBQUEsVUFDVCxXQUFXLFNBQVMsVUFBVTtBQUFBLFFBQ2hDO0FBQ0EsV0FBRyxjQUFjLE1BQU0sTUFBTTtBQUFBLFVBQzNCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUNBLFVBQUksa0JBQWtCO0FBQ3BCLFdBQUcsY0FBYyxNQUFNLFNBQVM7QUFBQSxVQUM5QixpQkFBaUI7QUFBQSxVQUNqQixpQkFBaUIsR0FBRyxLQUFLO0FBQUEsVUFDekIsb0JBQW9CO0FBQUEsVUFDcEIsb0JBQW9CLEdBQUcsV0FBVztBQUFBLFVBQ2xDLDBCQUEwQjtBQUFBLFFBQzVCO0FBQ0EsV0FBRyxjQUFjLE1BQU0sUUFBUTtBQUFBLFVBQzdCLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxRQUNiO0FBQ0EsV0FBRyxjQUFjLE1BQU0sTUFBTTtBQUFBLFVBQzNCLFNBQVM7QUFBQSxVQUNULFdBQVcsU0FBUyxVQUFVO0FBQUEsUUFDaEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLGFBQVMseUJBQXlCLElBQUksYUFBYSxlQUFlLENBQUMsR0FBRztBQUNwRSxVQUFJLENBQUMsR0FBRztBQUNOLFdBQUcsZ0JBQWdCO0FBQUEsVUFDakIsT0FBTyxFQUFFLFFBQVEsY0FBYyxPQUFPLGNBQWMsS0FBSyxhQUFhO0FBQUEsVUFDdEUsT0FBTyxFQUFFLFFBQVEsY0FBYyxPQUFPLGNBQWMsS0FBSyxhQUFhO0FBQUEsVUFDdEUsR0FBRyxTQUFTLE1BQU07QUFBQSxVQUNsQixHQUFHLFFBQVEsTUFBTTtBQUFBLFVBQ2pCLEdBQUc7QUFDRCx1QkFBVyxJQUFJLGFBQWE7QUFBQSxjQUMxQixRQUFRLEtBQUssTUFBTTtBQUFBLGNBQ25CLE9BQU8sS0FBSyxNQUFNO0FBQUEsY0FDbEIsS0FBSyxLQUFLLE1BQU07QUFBQSxZQUNsQixHQUFHLFFBQVEsS0FBSztBQUFBLFVBQ2xCO0FBQUEsVUFDQSxJQUFJLFNBQVMsTUFBTTtBQUFBLFVBQ25CLEdBQUcsUUFBUSxNQUFNO0FBQUEsVUFDakIsR0FBRztBQUNELHVCQUFXLElBQUksYUFBYTtBQUFBLGNBQzFCLFFBQVEsS0FBSyxNQUFNO0FBQUEsY0FDbkIsT0FBTyxLQUFLLE1BQU07QUFBQSxjQUNsQixLQUFLLEtBQUssTUFBTTtBQUFBLFlBQ2xCLEdBQUcsUUFBUSxLQUFLO0FBQUEsVUFDbEI7QUFBQSxRQUNGO0FBQUEsSUFDSjtBQUNBLFdBQU8sUUFBUSxVQUFVLHFDQUFxQyxTQUFTLElBQUksT0FBTyxNQUFNLE1BQU07QUFDNUYsWUFBTSxZQUFZLFNBQVMsb0JBQW9CLFlBQVksd0JBQXdCO0FBQ25GLFVBQUksMEJBQTBCLE1BQU0sVUFBVSxJQUFJO0FBQ2xELFVBQUksT0FBTztBQUNULFlBQUksR0FBRyxrQkFBa0IsR0FBRyxjQUFjLFNBQVMsR0FBRyxjQUFjLFFBQVE7QUFDMUUsYUFBRyxjQUFjLFVBQVUsT0FBTyxRQUFRLEdBQUcsY0FBYyxNQUFNLE1BQU0sRUFBRSxVQUFVLE9BQU8sUUFBUSxHQUFHLGNBQWMsTUFBTSxLQUFLLEVBQUUsVUFBVSxPQUFPLFFBQVEsR0FBRyxjQUFjLE1BQU0sR0FBRyxFQUFFLFVBQVUsR0FBRyxjQUFjLEdBQUcsSUFBSSxJQUFJLHdCQUF3QjtBQUFBLFFBQ3JQLE9BQU87QUFDTCxhQUFHLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxJQUFJLElBQUksd0JBQXdCO0FBQUEsUUFDekU7QUFDQTtBQUFBLE1BQ0Y7QUFDQSxTQUFHLGlCQUFpQixHQUFHLGdCQUFnQixJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEUsV0FBRyxjQUFjLElBQUksTUFBTTtBQUFBLFFBQzNCLEdBQUcsTUFBTSxRQUFRLElBQUksQ0FBQztBQUN0QixXQUFHLG9CQUFvQixHQUFHLGlCQUFpQixhQUFhLE1BQU0sT0FBTyxFQUFFLDJCQUEyQixLQUFLLENBQUMsQ0FBQztBQUFBLE1BQzNHLENBQUMsSUFBSSxRQUFRLFFBQVEsSUFBSTtBQUN6QixxQkFBZSxNQUFNO0FBQ25CLFlBQUksVUFBVSxZQUFZLEVBQUU7QUFDNUIsWUFBSSxTQUFTO0FBQ1gsY0FBSSxDQUFDLFFBQVE7QUFDWCxvQkFBUSxrQkFBa0IsQ0FBQztBQUM3QixrQkFBUSxnQkFBZ0IsS0FBSyxFQUFFO0FBQUEsUUFDakMsT0FBTztBQUNMLG9CQUFVLE1BQU07QUFDZCxnQkFBSSxvQkFBb0IsQ0FBQyxRQUFRO0FBQy9CLGtCQUFJLFFBQVEsUUFBUSxJQUFJO0FBQUEsZ0JBQ3RCLElBQUk7QUFBQSxnQkFDSixJQUFJLElBQUksbUJBQW1CLENBQUMsR0FBRyxJQUFJLGlCQUFpQjtBQUFBLGNBQ3RELENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLHFCQUFPLElBQUk7QUFDWCxxQkFBTyxJQUFJO0FBQ1gscUJBQU87QUFBQSxZQUNUO0FBQ0EsOEJBQWtCLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTTtBQUNqQyxrQkFBSSxDQUFDLEVBQUU7QUFDTCxzQkFBTTtBQUFBLFlBQ1YsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxZQUFZLElBQUk7QUFDdkIsVUFBSSxTQUFTLEdBQUc7QUFDaEIsVUFBSSxDQUFDO0FBQ0g7QUFDRixhQUFPLE9BQU8saUJBQWlCLFNBQVMsWUFBWSxNQUFNO0FBQUEsSUFDNUQ7QUFDQSxhQUFTLFdBQVcsSUFBSSxhQUFhLEVBQUUsUUFBUSxPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxTQUFTLE1BQU07QUFBQSxJQUN6RixHQUFHLFFBQVEsTUFBTTtBQUFBLElBQ2pCLEdBQUc7QUFDRCxVQUFJLEdBQUc7QUFDTCxXQUFHLGlCQUFpQixPQUFPO0FBQzdCLFVBQUksT0FBTyxLQUFLLE1BQU0sRUFBRSxXQUFXLEtBQUssT0FBTyxLQUFLLE1BQU0sRUFBRSxXQUFXLEtBQUssT0FBTyxLQUFLLEdBQUcsRUFBRSxXQUFXLEdBQUc7QUFDekcsZUFBTztBQUNQLGNBQU07QUFDTjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLFdBQVcsWUFBWTtBQUMzQix3QkFBa0IsSUFBSTtBQUFBLFFBQ3BCLFFBQVE7QUFDTixzQkFBWSxZQUFZLElBQUksTUFBTTtBQUFBLFFBQ3BDO0FBQUEsUUFDQSxTQUFTO0FBQ1AsdUJBQWEsWUFBWSxJQUFJLE1BQU07QUFBQSxRQUNyQztBQUFBLFFBQ0E7QUFBQSxRQUNBLE1BQU07QUFDSixvQkFBVTtBQUNWLG9CQUFVLFlBQVksSUFBSSxHQUFHO0FBQUEsUUFDL0I7QUFBQSxRQUNBO0FBQUEsUUFDQSxVQUFVO0FBQ1IscUJBQVc7QUFDWCxrQkFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxrQkFBa0IsSUFBSSxRQUFRO0FBQ3JDLFVBQUksYUFBYSxlQUFlO0FBQ2hDLFVBQUksU0FBUyxLQUFLLE1BQU07QUFDdEIsa0JBQVUsTUFBTTtBQUNkLHdCQUFjO0FBQ2QsY0FBSSxDQUFDO0FBQ0gsbUJBQU8sT0FBTztBQUNoQixjQUFJLENBQUMsWUFBWTtBQUNmLG1CQUFPLElBQUk7QUFDWCw2QkFBaUI7QUFBQSxVQUNuQjtBQUNBLGlCQUFPLE1BQU07QUFDYixjQUFJLEdBQUc7QUFDTCxtQkFBTyxRQUFRO0FBQ2pCLGlCQUFPLEdBQUc7QUFBQSxRQUNaLENBQUM7QUFBQSxNQUNILENBQUM7QUFDRCxTQUFHLG1CQUFtQjtBQUFBLFFBQ3BCLGVBQWUsQ0FBQztBQUFBLFFBQ2hCLGFBQWEsVUFBVTtBQUNyQixlQUFLLGNBQWMsS0FBSyxRQUFRO0FBQUEsUUFDbEM7QUFBQSxRQUNBLFFBQVEsS0FBSyxXQUFXO0FBQ3RCLGlCQUFPLEtBQUssY0FBYyxRQUFRO0FBQ2hDLGlCQUFLLGNBQWMsTUFBTSxFQUFFO0FBQUEsVUFDN0I7QUFDQTtBQUNBLGlCQUFPO0FBQUEsUUFDVCxDQUFDO0FBQUEsUUFDRDtBQUFBLE1BQ0Y7QUFDQSxnQkFBVSxNQUFNO0FBQ2QsZUFBTyxNQUFNO0FBQ2IsZUFBTyxPQUFPO0FBQUEsTUFDaEIsQ0FBQztBQUNELG9CQUFjO0FBQ2QsNEJBQXNCLE1BQU07QUFDMUIsWUFBSTtBQUNGO0FBQ0YsWUFBSSxXQUFXLE9BQU8saUJBQWlCLEVBQUUsRUFBRSxtQkFBbUIsUUFBUSxPQUFPLEVBQUUsRUFBRSxRQUFRLEtBQUssRUFBRSxDQUFDLElBQUk7QUFDckcsWUFBSSxRQUFRLE9BQU8saUJBQWlCLEVBQUUsRUFBRSxnQkFBZ0IsUUFBUSxPQUFPLEVBQUUsRUFBRSxRQUFRLEtBQUssRUFBRSxDQUFDLElBQUk7QUFDL0YsWUFBSSxhQUFhO0FBQ2YscUJBQVcsT0FBTyxpQkFBaUIsRUFBRSxFQUFFLGtCQUFrQixRQUFRLEtBQUssRUFBRSxDQUFDLElBQUk7QUFDL0Usa0JBQVUsTUFBTTtBQUNkLGlCQUFPLE9BQU87QUFBQSxRQUNoQixDQUFDO0FBQ0Qsd0JBQWdCO0FBQ2hCLDhCQUFzQixNQUFNO0FBQzFCLGNBQUk7QUFDRjtBQUNGLG9CQUFVLE1BQU07QUFDZCxtQkFBTyxJQUFJO0FBQUEsVUFDYixDQUFDO0FBQ0QsMkJBQWlCO0FBQ2pCLHFCQUFXLEdBQUcsaUJBQWlCLFFBQVEsV0FBVyxLQUFLO0FBQ3ZELHVCQUFhO0FBQUEsUUFDZixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsY0FBYyxXQUFXLEtBQUssVUFBVTtBQUMvQyxVQUFJLFVBQVUsUUFBUSxHQUFHLE1BQU07QUFDN0IsZUFBTztBQUNULFlBQU0sV0FBVyxVQUFVLFVBQVUsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyRCxVQUFJLENBQUM7QUFDSCxlQUFPO0FBQ1QsVUFBSSxRQUFRLFNBQVM7QUFDbkIsWUFBSSxNQUFNLFFBQVE7QUFDaEIsaUJBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxRQUFRLGNBQWMsUUFBUSxTQUFTO0FBQ3pDLFlBQUksUUFBUSxTQUFTLE1BQU0sWUFBWTtBQUN2QyxZQUFJO0FBQ0YsaUJBQU8sTUFBTSxDQUFDO0FBQUEsTUFDbEI7QUFDQSxVQUFJLFFBQVEsVUFBVTtBQUNwQixZQUFJLENBQUMsT0FBTyxTQUFTLFFBQVEsVUFBVSxRQUFRLEVBQUUsU0FBUyxVQUFVLFVBQVUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUc7QUFDaEcsaUJBQU8sQ0FBQyxVQUFVLFVBQVUsVUFBVSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFBQSxRQUNuRTtBQUFBLE1BQ0Y7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUdBLFFBQUksWUFBWTtBQUNoQixhQUFTLGdCQUFnQixVQUFVLFdBQVcsTUFBTTtBQUFBLElBQ3BELEdBQUc7QUFDRCxhQUFPLElBQUksU0FBUyxZQUFZLFNBQVMsR0FBRyxJQUFJLElBQUksU0FBUyxHQUFHLElBQUk7QUFBQSxJQUN0RTtBQUNBLGFBQVMsZ0JBQWdCLFVBQVU7QUFDakMsYUFBTyxJQUFJLFNBQVMsYUFBYSxTQUFTLEdBQUcsSUFBSTtBQUFBLElBQ25EO0FBQ0EsUUFBSSxlQUFlLENBQUM7QUFDcEIsYUFBUyxlQUFlLFVBQVU7QUFDaEMsbUJBQWEsS0FBSyxRQUFRO0FBQUEsSUFDNUI7QUFDQSxhQUFTLFVBQVUsTUFBTSxJQUFJO0FBQzNCLG1CQUFhLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDdkMsa0JBQVk7QUFDWixzQ0FBZ0MsTUFBTTtBQUNwQyxpQkFBUyxJQUFJLENBQUMsSUFBSSxhQUFhO0FBQzdCLG1CQUFTLElBQUksTUFBTTtBQUFBLFVBQ25CLENBQUM7QUFBQSxRQUNILENBQUM7QUFBQSxNQUNILENBQUM7QUFDRCxrQkFBWTtBQUFBLElBQ2Q7QUFDQSxRQUFJLGtCQUFrQjtBQUN0QixhQUFTLE1BQU0sT0FBTyxPQUFPO0FBQzNCLFVBQUksQ0FBQyxNQUFNO0FBQ1QsY0FBTSxlQUFlLE1BQU07QUFDN0Isa0JBQVk7QUFDWix3QkFBa0I7QUFDbEIsc0NBQWdDLE1BQU07QUFDcEMsa0JBQVUsS0FBSztBQUFBLE1BQ2pCLENBQUM7QUFDRCxrQkFBWTtBQUNaLHdCQUFrQjtBQUFBLElBQ3BCO0FBQ0EsYUFBUyxVQUFVLElBQUk7QUFDckIsVUFBSSx1QkFBdUI7QUFDM0IsVUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLGFBQWE7QUFDckMsYUFBSyxLQUFLLENBQUMsS0FBSyxTQUFTO0FBQ3ZCLGNBQUksd0JBQXdCLE9BQU8sR0FBRztBQUNwQyxtQkFBTyxLQUFLO0FBQ2QsaUNBQXVCO0FBQ3ZCLG1CQUFTLEtBQUssSUFBSTtBQUFBLFFBQ3BCLENBQUM7QUFBQSxNQUNIO0FBQ0EsZUFBUyxJQUFJLGFBQWE7QUFBQSxJQUM1QjtBQUNBLGFBQVMsZ0NBQWdDLFVBQVU7QUFDakQsVUFBSSxRQUFRO0FBQ1oscUJBQWUsQ0FBQyxXQUFXLE9BQU87QUFDaEMsWUFBSSxlQUFlLE1BQU0sU0FBUztBQUNsQyxnQkFBUSxZQUFZO0FBQ3BCLGVBQU8sTUFBTTtBQUFBLFFBQ2I7QUFBQSxNQUNGLENBQUM7QUFDRCxlQUFTO0FBQ1QscUJBQWUsS0FBSztBQUFBLElBQ3RCO0FBR0EsYUFBUyxLQUFLLElBQUksTUFBTSxPQUFPLFlBQVksQ0FBQyxHQUFHO0FBQzdDLFVBQUksQ0FBQyxHQUFHO0FBQ04sV0FBRyxjQUFjLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLFNBQUcsWUFBWSxJQUFJLElBQUk7QUFDdkIsYUFBTyxVQUFVLFNBQVMsT0FBTyxJQUFJLFVBQVUsSUFBSSxJQUFJO0FBQ3ZELGNBQVEsTUFBTTtBQUFBLFFBQ1osS0FBSztBQUNILHlCQUFlLElBQUksS0FBSztBQUN4QjtBQUFBLFFBQ0YsS0FBSztBQUNILHFCQUFXLElBQUksS0FBSztBQUNwQjtBQUFBLFFBQ0YsS0FBSztBQUNILHNCQUFZLElBQUksS0FBSztBQUNyQjtBQUFBLFFBQ0YsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNILG1DQUF5QixJQUFJLE1BQU0sS0FBSztBQUN4QztBQUFBLFFBQ0Y7QUFDRSx3QkFBYyxJQUFJLE1BQU0sS0FBSztBQUM3QjtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQ0EsYUFBUyxlQUFlLElBQUksT0FBTztBQUNqQyxVQUFJLEdBQUcsU0FBUyxTQUFTO0FBQ3ZCLFlBQUksR0FBRyxXQUFXLFVBQVUsUUFBUTtBQUNsQyxhQUFHLFFBQVE7QUFBQSxRQUNiO0FBQ0EsWUFBSSxPQUFPLFdBQVc7QUFDcEIsY0FBSSxPQUFPLFVBQVUsV0FBVztBQUM5QixlQUFHLFVBQVUsaUJBQWlCLEdBQUcsS0FBSyxNQUFNO0FBQUEsVUFDOUMsT0FBTztBQUNMLGVBQUcsVUFBVSx3QkFBd0IsR0FBRyxPQUFPLEtBQUs7QUFBQSxVQUN0RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLFdBQVcsR0FBRyxTQUFTLFlBQVk7QUFDakMsWUFBSSxPQUFPLFVBQVUsS0FBSyxHQUFHO0FBQzNCLGFBQUcsUUFBUTtBQUFBLFFBQ2IsV0FBVyxDQUFDLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLGFBQWEsQ0FBQyxDQUFDLE1BQU0sTUFBTSxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQ2pHLGFBQUcsUUFBUSxPQUFPLEtBQUs7QUFBQSxRQUN6QixPQUFPO0FBQ0wsY0FBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3hCLGVBQUcsVUFBVSxNQUFNLEtBQUssQ0FBQyxRQUFRLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQUEsVUFDekUsT0FBTztBQUNMLGVBQUcsVUFBVSxDQUFDLENBQUM7QUFBQSxVQUNqQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLFdBQVcsR0FBRyxZQUFZLFVBQVU7QUFDbEMscUJBQWEsSUFBSSxLQUFLO0FBQUEsTUFDeEIsT0FBTztBQUNMLFlBQUksR0FBRyxVQUFVO0FBQ2Y7QUFDRixXQUFHLFFBQVEsVUFBVSxTQUFTLEtBQUs7QUFBQSxNQUNyQztBQUFBLElBQ0Y7QUFDQSxhQUFTLFlBQVksSUFBSSxPQUFPO0FBQzlCLFVBQUksR0FBRztBQUNMLFdBQUcsb0JBQW9CO0FBQ3pCLFNBQUcsc0JBQXNCLFdBQVcsSUFBSSxLQUFLO0FBQUEsSUFDL0M7QUFDQSxhQUFTLFdBQVcsSUFBSSxPQUFPO0FBQzdCLFVBQUksR0FBRztBQUNMLFdBQUcsbUJBQW1CO0FBQ3hCLFNBQUcscUJBQXFCLFVBQVUsSUFBSSxLQUFLO0FBQUEsSUFDN0M7QUFDQSxhQUFTLHlCQUF5QixJQUFJLE1BQU0sT0FBTztBQUNqRCxvQkFBYyxJQUFJLE1BQU0sS0FBSztBQUM3QiwyQkFBcUIsSUFBSSxNQUFNLEtBQUs7QUFBQSxJQUN0QztBQUNBLGFBQVMsY0FBYyxJQUFJLE1BQU0sT0FBTztBQUN0QyxVQUFJLENBQUMsTUFBTSxRQUFRLEtBQUssRUFBRSxTQUFTLEtBQUssS0FBSyxvQ0FBb0MsSUFBSSxHQUFHO0FBQ3RGLFdBQUcsZ0JBQWdCLElBQUk7QUFBQSxNQUN6QixPQUFPO0FBQ0wsWUFBSSxjQUFjLElBQUk7QUFDcEIsa0JBQVE7QUFDVixxQkFBYSxJQUFJLE1BQU0sS0FBSztBQUFBLE1BQzlCO0FBQUEsSUFDRjtBQUNBLGFBQVMsYUFBYSxJQUFJLFVBQVUsT0FBTztBQUN6QyxVQUFJLEdBQUcsYUFBYSxRQUFRLEtBQUssT0FBTztBQUN0QyxXQUFHLGFBQWEsVUFBVSxLQUFLO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQ0EsYUFBUyxxQkFBcUIsSUFBSSxVQUFVLE9BQU87QUFDakQsVUFBSSxHQUFHLFFBQVEsTUFBTSxPQUFPO0FBQzFCLFdBQUcsUUFBUSxJQUFJO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQ0EsYUFBUyxhQUFhLElBQUksT0FBTztBQUMvQixZQUFNLG9CQUFvQixDQUFDLEVBQUUsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDekQsZUFBTyxTQUFTO0FBQUEsTUFDbEIsQ0FBQztBQUNELFlBQU0sS0FBSyxHQUFHLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVztBQUN6QyxlQUFPLFdBQVcsa0JBQWtCLFNBQVMsT0FBTyxLQUFLO0FBQUEsTUFDM0QsQ0FBQztBQUFBLElBQ0g7QUFDQSxhQUFTLFVBQVUsU0FBUztBQUMxQixhQUFPLFFBQVEsWUFBWSxFQUFFLFFBQVEsVUFBVSxDQUFDLE9BQU8sU0FBUyxLQUFLLFlBQVksQ0FBQztBQUFBLElBQ3BGO0FBQ0EsYUFBUyx3QkFBd0IsUUFBUSxRQUFRO0FBQy9DLGFBQU8sVUFBVTtBQUFBLElBQ25CO0FBQ0EsYUFBUyxpQkFBaUIsVUFBVTtBQUNsQyxVQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsTUFBTSxPQUFPLElBQUksRUFBRSxTQUFTLFFBQVEsR0FBRztBQUMxRCxlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxPQUFPLE1BQU0sS0FBSyxFQUFFLFNBQVMsUUFBUSxHQUFHO0FBQzVELGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTyxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQUEsSUFDeEM7QUFDQSxhQUFTLGNBQWMsVUFBVTtBQUMvQixZQUFNLG9CQUFvQjtBQUFBLFFBQ3hCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQ0EsYUFBTyxrQkFBa0IsU0FBUyxRQUFRO0FBQUEsSUFDNUM7QUFDQSxhQUFTLG9DQUFvQyxNQUFNO0FBQ2pELGFBQU8sQ0FBQyxDQUFDLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGVBQWUsRUFBRSxTQUFTLElBQUk7QUFBQSxJQUMxRjtBQUNBLGFBQVMsV0FBVyxJQUFJLE1BQU0sVUFBVTtBQUN0QyxVQUFJLEdBQUcsZUFBZSxHQUFHLFlBQVksSUFBSSxNQUFNO0FBQzdDLGVBQU8sR0FBRyxZQUFZLElBQUk7QUFDNUIsYUFBTyxvQkFBb0IsSUFBSSxNQUFNLFFBQVE7QUFBQSxJQUMvQztBQUNBLGFBQVMsWUFBWSxJQUFJLE1BQU0sVUFBVSxVQUFVLE1BQU07QUFDdkQsVUFBSSxHQUFHLGVBQWUsR0FBRyxZQUFZLElBQUksTUFBTTtBQUM3QyxlQUFPLEdBQUcsWUFBWSxJQUFJO0FBQzVCLFVBQUksR0FBRyxxQkFBcUIsR0FBRyxrQkFBa0IsSUFBSSxNQUFNLFFBQVE7QUFDakUsWUFBSSxVQUFVLEdBQUcsa0JBQWtCLElBQUk7QUFDdkMsZ0JBQVEsVUFBVTtBQUNsQixlQUFPLDBCQUEwQixNQUFNO0FBQ3JDLGlCQUFPLFNBQVMsSUFBSSxRQUFRLFVBQVU7QUFBQSxRQUN4QyxDQUFDO0FBQUEsTUFDSDtBQUNBLGFBQU8sb0JBQW9CLElBQUksTUFBTSxRQUFRO0FBQUEsSUFDL0M7QUFDQSxhQUFTLG9CQUFvQixJQUFJLE1BQU0sVUFBVTtBQUMvQyxVQUFJLE9BQU8sR0FBRyxhQUFhLElBQUk7QUFDL0IsVUFBSSxTQUFTO0FBQ1gsZUFBTyxPQUFPLGFBQWEsYUFBYSxTQUFTLElBQUk7QUFDdkQsVUFBSSxTQUFTO0FBQ1gsZUFBTztBQUNULFVBQUksY0FBYyxJQUFJLEdBQUc7QUFDdkIsZUFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sRUFBRSxTQUFTLElBQUk7QUFBQSxNQUN2QztBQUNBLGFBQU87QUFBQSxJQUNUO0FBR0EsYUFBUyxTQUFTLE1BQU0sTUFBTTtBQUM1QixVQUFJO0FBQ0osYUFBTyxXQUFXO0FBQ2hCLFlBQUksVUFBVSxNQUFNLE9BQU87QUFDM0IsWUFBSSxRQUFRLFdBQVc7QUFDckIsb0JBQVU7QUFDVixlQUFLLE1BQU0sU0FBUyxJQUFJO0FBQUEsUUFDMUI7QUFDQSxxQkFBYSxPQUFPO0FBQ3BCLGtCQUFVLFdBQVcsT0FBTyxJQUFJO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBR0EsYUFBUyxTQUFTLE1BQU0sT0FBTztBQUM3QixVQUFJO0FBQ0osYUFBTyxXQUFXO0FBQ2hCLFlBQUksVUFBVSxNQUFNLE9BQU87QUFDM0IsWUFBSSxDQUFDLFlBQVk7QUFDZixlQUFLLE1BQU0sU0FBUyxJQUFJO0FBQ3hCLHVCQUFhO0FBQ2IscUJBQVcsTUFBTSxhQUFhLE9BQU8sS0FBSztBQUFBLFFBQzVDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxhQUFTLFNBQVMsRUFBRSxLQUFLLFVBQVUsS0FBSyxTQUFTLEdBQUcsRUFBRSxLQUFLLFVBQVUsS0FBSyxTQUFTLEdBQUc7QUFDcEYsVUFBSSxXQUFXO0FBQ2YsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJLFlBQVksT0FBTyxNQUFNO0FBQzNCLFlBQUksUUFBUSxTQUFTO0FBQ3JCLFlBQUksUUFBUSxTQUFTO0FBQ3JCLFlBQUksVUFBVTtBQUNaLG1CQUFTLGNBQWMsS0FBSyxDQUFDO0FBQzdCLHFCQUFXO0FBQUEsUUFDYixPQUFPO0FBQ0wsY0FBSSxrQkFBa0IsS0FBSyxVQUFVLEtBQUs7QUFDMUMsY0FBSSxrQkFBa0IsS0FBSyxVQUFVLEtBQUs7QUFDMUMsY0FBSSxvQkFBb0IsV0FBVztBQUNqQyxxQkFBUyxjQUFjLEtBQUssQ0FBQztBQUFBLFVBQy9CLFdBQVcsb0JBQW9CLGlCQUFpQjtBQUM5QyxxQkFBUyxjQUFjLEtBQUssQ0FBQztBQUFBLFVBQy9CLE9BQU87QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUNBLG9CQUFZLEtBQUssVUFBVSxTQUFTLENBQUM7QUFDckMsb0JBQVksS0FBSyxVQUFVLFNBQVMsQ0FBQztBQUFBLE1BQ3ZDLENBQUM7QUFDRCxhQUFPLE1BQU07QUFDWCxnQkFBUSxTQUFTO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQ0EsYUFBUyxjQUFjLE9BQU87QUFDNUIsYUFBTyxPQUFPLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxJQUFJO0FBQUEsSUFDekU7QUFHQSxhQUFTLE9BQU8sVUFBVTtBQUN4QixVQUFJLFlBQVksTUFBTSxRQUFRLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUTtBQUM5RCxnQkFBVSxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztBQUFBLElBQzVDO0FBR0EsUUFBSSxTQUFTLENBQUM7QUFDZCxRQUFJLGFBQWE7QUFDakIsYUFBUyxNQUFNLE1BQU0sT0FBTztBQUMxQixVQUFJLENBQUMsWUFBWTtBQUNmLGlCQUFTLFNBQVMsTUFBTTtBQUN4QixxQkFBYTtBQUFBLE1BQ2Y7QUFDQSxVQUFJLFVBQVUsUUFBUTtBQUNwQixlQUFPLE9BQU8sSUFBSTtBQUFBLE1BQ3BCO0FBQ0EsYUFBTyxJQUFJLElBQUk7QUFDZixVQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsUUFBUSxNQUFNLGVBQWUsTUFBTSxLQUFLLE9BQU8sTUFBTSxTQUFTLFlBQVk7QUFDbkgsZUFBTyxJQUFJLEVBQUUsS0FBSztBQUFBLE1BQ3BCO0FBQ0EsdUJBQWlCLE9BQU8sSUFBSSxDQUFDO0FBQUEsSUFDL0I7QUFDQSxhQUFTLFlBQVk7QUFDbkIsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLFFBQVEsQ0FBQztBQUNiLGFBQVMsTUFBTSxNQUFNLFVBQVU7QUFDN0IsVUFBSSxjQUFjLE9BQU8sYUFBYSxhQUFhLE1BQU0sV0FBVztBQUNwRSxVQUFJLGdCQUFnQixTQUFTO0FBQzNCLGVBQU8sb0JBQW9CLE1BQU0sWUFBWSxDQUFDO0FBQUEsTUFDaEQsT0FBTztBQUNMLGNBQU0sSUFBSSxJQUFJO0FBQUEsTUFDaEI7QUFDQSxhQUFPLE1BQU07QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUNBLGFBQVMsdUJBQXVCLEtBQUs7QUFDbkMsYUFBTyxRQUFRLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLFFBQVEsTUFBTTtBQUNsRCxlQUFPLGVBQWUsS0FBSyxNQUFNO0FBQUEsVUFDL0IsTUFBTTtBQUNKLG1CQUFPLElBQUksU0FBUztBQUNsQixxQkFBTyxTQUFTLEdBQUcsSUFBSTtBQUFBLFlBQ3pCO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUNELGFBQU87QUFBQSxJQUNUO0FBQ0EsYUFBUyxvQkFBb0IsSUFBSSxLQUFLLFVBQVU7QUFDOUMsVUFBSSxpQkFBaUIsQ0FBQztBQUN0QixhQUFPLGVBQWU7QUFDcEIsdUJBQWUsSUFBSSxFQUFFO0FBQ3ZCLFVBQUksYUFBYSxPQUFPLFFBQVEsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUUsTUFBTSxNQUFNLEVBQUU7QUFDN0UsVUFBSSxtQkFBbUIsZUFBZSxVQUFVO0FBQ2hELG1CQUFhLFdBQVcsSUFBSSxDQUFDLGNBQWM7QUFDekMsWUFBSSxpQkFBaUIsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLFVBQVUsSUFBSSxHQUFHO0FBQ2pFLGlCQUFPO0FBQUEsWUFDTCxNQUFNLFVBQVUsVUFBVSxJQUFJO0FBQUEsWUFDOUIsT0FBTyxJQUFJLFVBQVUsS0FBSztBQUFBLFVBQzVCO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSxNQUNULENBQUM7QUFDRCxpQkFBVyxJQUFJLFlBQVksUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO0FBQ25ELHVCQUFlLEtBQUssT0FBTyxXQUFXO0FBQ3RDLGVBQU87QUFBQSxNQUNULENBQUM7QUFDRCxhQUFPLE1BQU07QUFDWCxlQUFPLGVBQWU7QUFDcEIseUJBQWUsSUFBSSxFQUFFO0FBQUEsTUFDekI7QUFBQSxJQUNGO0FBR0EsUUFBSSxRQUFRLENBQUM7QUFDYixhQUFTLEtBQUssTUFBTSxVQUFVO0FBQzVCLFlBQU0sSUFBSSxJQUFJO0FBQUEsSUFDaEI7QUFDQSxhQUFTLG9CQUFvQixLQUFLLFNBQVM7QUFDekMsYUFBTyxRQUFRLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLFFBQVEsTUFBTTtBQUNsRCxlQUFPLGVBQWUsS0FBSyxNQUFNO0FBQUEsVUFDL0IsTUFBTTtBQUNKLG1CQUFPLElBQUksU0FBUztBQUNsQixxQkFBTyxTQUFTLEtBQUssT0FBTyxFQUFFLEdBQUcsSUFBSTtBQUFBLFlBQ3ZDO0FBQUEsVUFDRjtBQUFBLFVBQ0EsWUFBWTtBQUFBLFFBQ2QsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUNELGFBQU87QUFBQSxJQUNUO0FBR0EsUUFBSUMsVUFBUztBQUFBLE1BQ1gsSUFBSSxXQUFXO0FBQ2IsZUFBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLElBQUksVUFBVTtBQUNaLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxJQUFJLFNBQVM7QUFDWCxlQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsSUFBSSxNQUFNO0FBQ1IsZUFBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUE7QUFBQTtBQUFBLE1BRUE7QUFBQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUE7QUFBQTtBQUFBLE1BRUEsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsTUFBTTtBQUFBLElBQ1I7QUFDQSxRQUFJLGlCQUFpQkE7QUFHckIsYUFBUyxhQUFhLElBQUksWUFBWTtBQUNwQyxVQUFJLFlBQVksa0JBQWtCLEVBQUU7QUFDcEMsVUFBSSxPQUFPLGVBQWUsWUFBWTtBQUNwQyxlQUFPLDhCQUE4QixXQUFXLFVBQVU7QUFBQSxNQUM1RDtBQUNBLFVBQUksWUFBWSxrQkFBa0IsSUFBSSxZQUFZLFNBQVM7QUFDM0QsYUFBTyxTQUFTLEtBQUssTUFBTSxJQUFJLFlBQVksU0FBUztBQUFBLElBQ3REO0FBQ0EsYUFBUyxrQkFBa0IsSUFBSTtBQUM3QixVQUFJLG1CQUFtQixDQUFDO0FBQ3hCLG1CQUFhLGtCQUFrQixFQUFFO0FBQ2pDLGFBQU8sQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0FBQUEsSUFDbkQ7QUFDQSxhQUFTLGtCQUFrQixJQUFJLFlBQVksV0FBVztBQUNwRCxhQUFPLENBQUMsV0FBVyxNQUFNO0FBQUEsTUFDekIsR0FBRyxFQUFFLE9BQU8sU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDOUMsWUFBSSxnQkFBZ0IsYUFBYSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7QUFDdkQsWUFBSSxjQUFjLFVBQVUsTUFBTSxRQUFRO0FBQ3hDLCtCQUFxQixJQUFJLFVBQVU7QUFBQSxRQUNyQztBQUNBLDRCQUFvQixVQUFVLGNBQWMsVUFBVSxHQUFHLGVBQWUsTUFBTTtBQUFBLE1BQ2hGO0FBQUEsSUFDRjtBQUNBLGFBQVMscUJBQXFCLElBQUksWUFBWTtBQUM1QyxjQUFRO0FBQUEsUUFDTjtBQUFBO0FBQUEsR0FFRCxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxRQUFJLHNCQUFzQkYsU0FBUSxtQkFBbUIsQ0FBQztBQUd0RCxVQUFNLFlBQVksTUFBTSxRQUFRO0FBR2hDLFVBQU0sWUFBWSxDQUFDLE9BQU8sU0FBUyxLQUFLLFVBQVUsRUFBRSxDQUFDO0FBR3JELFVBQU0sU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLGdCQUFnQixRQUFRLE1BQU0sQ0FBQyxLQUFLLGFBQWE7QUFDcEYsVUFBSSxZQUFZLGVBQWUsR0FBRztBQUNsQyxVQUFJLFNBQVMsTUFBTTtBQUNqQixZQUFJO0FBQ0osa0JBQVUsQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUMxQixlQUFPO0FBQUEsTUFDVDtBQUNBLFVBQUksVUFBVSxNQUFNLFFBQVEsUUFBUTtBQUNwQyxjQUFRLE9BQU87QUFBQSxJQUNqQixDQUFDO0FBR0QsVUFBTSxTQUFTLFNBQVM7QUFHeEIsVUFBTSxRQUFRLENBQUMsT0FBTyxNQUFNLEVBQUUsQ0FBQztBQUcvQixVQUFNLFFBQVEsQ0FBQyxPQUFPLFlBQVksRUFBRSxDQUFDO0FBR3JDLFVBQU0sUUFBUSxDQUFDLE9BQU87QUFDcEIsVUFBSSxHQUFHO0FBQ0wsZUFBTyxHQUFHO0FBQ1osU0FBRyxnQkFBZ0IsYUFBYSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3ZELGFBQU8sR0FBRztBQUFBLElBQ1osQ0FBQztBQUNELGFBQVMsb0JBQW9CLElBQUk7QUFDL0IsVUFBSSxhQUFhLENBQUM7QUFDbEIsa0JBQVksSUFBSSxDQUFDLE1BQU07QUFDckIsWUFBSSxFQUFFO0FBQ0oscUJBQVcsS0FBSyxFQUFFLE9BQU87QUFBQSxNQUM3QixDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLGVBQWUsQ0FBQztBQUNwQixhQUFTLG1CQUFtQixNQUFNO0FBQ2hDLFVBQUksQ0FBQyxhQUFhLElBQUk7QUFDcEIscUJBQWEsSUFBSSxJQUFJO0FBQ3ZCLGFBQU8sRUFBRSxhQUFhLElBQUk7QUFBQSxJQUM1QjtBQUNBLGFBQVMsY0FBYyxJQUFJLE1BQU07QUFDL0IsYUFBTyxZQUFZLElBQUksQ0FBQyxZQUFZO0FBQ2xDLFlBQUksUUFBUSxVQUFVLFFBQVEsT0FBTyxJQUFJO0FBQ3ZDLGlCQUFPO0FBQUEsTUFDWCxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsVUFBVSxJQUFJLE1BQU07QUFDM0IsVUFBSSxDQUFDLEdBQUc7QUFDTixXQUFHLFNBQVMsQ0FBQztBQUNmLFVBQUksQ0FBQyxHQUFHLE9BQU8sSUFBSTtBQUNqQixXQUFHLE9BQU8sSUFBSSxJQUFJLG1CQUFtQixJQUFJO0FBQUEsSUFDN0M7QUFHQSxVQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxNQUFNLENBQUMsTUFBTSxNQUFNLFNBQVM7QUFDckQsVUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRTtBQUM3QyxhQUFPLHVCQUF1QixJQUFJLFVBQVUsU0FBUyxNQUFNO0FBQ3pELFlBQUksT0FBTyxjQUFjLElBQUksSUFBSTtBQUNqQyxZQUFJLEtBQUssT0FBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLG1CQUFtQixJQUFJO0FBQzNELGVBQU8sTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUNyRCxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQ0QsbUJBQWUsQ0FBQyxNQUFNLE9BQU87QUFDM0IsVUFBSSxLQUFLLE9BQU87QUFDZCxXQUFHLFFBQVEsS0FBSztBQUFBLE1BQ2xCO0FBQUEsSUFDRixDQUFDO0FBQ0QsYUFBUyx1QkFBdUIsSUFBSSxVQUFVLFNBQVMsVUFBVTtBQUMvRCxVQUFJLENBQUMsR0FBRztBQUNOLFdBQUcsUUFBUSxDQUFDO0FBQ2QsVUFBSSxHQUFHLE1BQU0sUUFBUTtBQUNuQixlQUFPLEdBQUcsTUFBTSxRQUFRO0FBQzFCLFVBQUksU0FBUyxTQUFTO0FBQ3RCLFNBQUcsTUFBTSxRQUFRLElBQUk7QUFDckIsY0FBUSxNQUFNO0FBQ1osZUFBTyxHQUFHLE1BQU0sUUFBUTtBQUFBLE1BQzFCLENBQUM7QUFDRCxhQUFPO0FBQUEsSUFDVDtBQUdBLFVBQU0sTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUd0QiwyQkFBdUIsU0FBUyxTQUFTLE9BQU87QUFDaEQsMkJBQXVCLFdBQVcsV0FBVyxTQUFTO0FBQ3RELGFBQVMsdUJBQXVCLE1BQU0sV0FBVyxNQUFNO0FBQ3JELFlBQU0sV0FBVyxDQUFDLE9BQU8sS0FBSyxtQkFBbUIsU0FBUyxtQ0FBbUMsSUFBSSwrQ0FBK0MsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUFBLElBQzdKO0FBR0EsY0FBVSxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVEsU0FBUyxlQUFlLGdCQUFnQixRQUFRLE1BQU07QUFDMUcsVUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNwQyxVQUFJLFdBQVcsTUFBTTtBQUNuQixZQUFJO0FBQ0osYUFBSyxDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ3RCLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxtQkFBbUIsZUFBZSxHQUFHLFVBQVUsa0JBQWtCO0FBQ3JFLFVBQUksV0FBVyxDQUFDLFFBQVEsaUJBQWlCLE1BQU07QUFBQSxNQUMvQyxHQUFHLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztBQUN0QyxVQUFJLGVBQWUsU0FBUztBQUM1QixlQUFTLFlBQVk7QUFDckIscUJBQWUsTUFBTTtBQUNuQixZQUFJLENBQUMsR0FBRztBQUNOO0FBQ0YsV0FBRyx3QkFBd0IsU0FBUyxFQUFFO0FBQ3RDLFlBQUksV0FBVyxHQUFHLFNBQVM7QUFDM0IsWUFBSSxXQUFXLEdBQUcsU0FBUztBQUMzQixZQUFJLHNCQUFzQjtBQUFBLFVBQ3hCO0FBQUEsWUFDRSxNQUFNO0FBQ0oscUJBQU8sU0FBUztBQUFBLFlBQ2xCO0FBQUEsWUFDQSxJQUFJLE9BQU87QUFDVCx1QkFBUyxLQUFLO0FBQUEsWUFDaEI7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUNKLHFCQUFPLFNBQVM7QUFBQSxZQUNsQjtBQUFBLFlBQ0EsSUFBSSxPQUFPO0FBQ1QsdUJBQVMsS0FBSztBQUFBLFlBQ2hCO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxnQkFBUSxtQkFBbUI7QUFBQSxNQUM3QixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBR0QsY0FBVSxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsV0FBVyxHQUFHLEVBQUUsUUFBUSxNQUFNO0FBQ3BFLFVBQUksR0FBRyxRQUFRLFlBQVksTUFBTTtBQUMvQixhQUFLLG1EQUFtRCxFQUFFO0FBQzVELFVBQUksU0FBUyxVQUFVLFVBQVU7QUFDakMsVUFBSSxTQUFTLEdBQUcsUUFBUSxVQUFVLElBQUksRUFBRTtBQUN4QyxTQUFHLGNBQWM7QUFDakIsYUFBTyxrQkFBa0I7QUFDekIsU0FBRyxhQUFhLDBCQUEwQixJQUFJO0FBQzlDLGFBQU8sYUFBYSx3QkFBd0IsSUFBSTtBQUNoRCxVQUFJLEdBQUcsa0JBQWtCO0FBQ3ZCLFdBQUcsaUJBQWlCLFFBQVEsQ0FBQyxjQUFjO0FBQ3pDLGlCQUFPLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUN4QyxjQUFFLGdCQUFnQjtBQUNsQixlQUFHLGNBQWMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUFBLFVBQy9DLENBQUM7QUFBQSxRQUNILENBQUM7QUFBQSxNQUNIO0FBQ0EscUJBQWUsUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUM3QixVQUFJLGFBQWEsQ0FBQyxRQUFRLFNBQVMsZUFBZTtBQUNoRCxZQUFJLFdBQVcsU0FBUyxTQUFTLEdBQUc7QUFDbEMsa0JBQVEsV0FBVyxhQUFhLFFBQVEsT0FBTztBQUFBLFFBQ2pELFdBQVcsV0FBVyxTQUFTLFFBQVEsR0FBRztBQUN4QyxrQkFBUSxXQUFXLGFBQWEsUUFBUSxRQUFRLFdBQVc7QUFBQSxRQUM3RCxPQUFPO0FBQ0wsa0JBQVEsWUFBWSxNQUFNO0FBQUEsUUFDNUI7QUFBQSxNQUNGO0FBQ0EsZ0JBQVUsTUFBTTtBQUNkLG1CQUFXLFFBQVEsUUFBUSxTQUFTO0FBQ3BDLHdCQUFnQixNQUFNO0FBQ3BCLG1CQUFTLE1BQU07QUFDZixpQkFBTyxZQUFZO0FBQUEsUUFDckIsQ0FBQyxFQUFFO0FBQUEsTUFDTCxDQUFDO0FBQ0QsU0FBRyxxQkFBcUIsTUFBTTtBQUM1QixZQUFJLFVBQVUsVUFBVSxVQUFVO0FBQ2xDLGtCQUFVLE1BQU07QUFDZCxxQkFBVyxHQUFHLGFBQWEsU0FBUyxTQUFTO0FBQUEsUUFDL0MsQ0FBQztBQUFBLE1BQ0g7QUFDQSxjQUFRLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFBQSxJQUMvQixDQUFDO0FBQ0QsUUFBSSwrQkFBK0IsU0FBUyxjQUFjLEtBQUs7QUFDL0QsYUFBUyxVQUFVLFlBQVk7QUFDN0IsVUFBSSxTQUFTLGdCQUFnQixNQUFNO0FBQ2pDLGVBQU8sU0FBUyxjQUFjLFVBQVU7QUFBQSxNQUMxQyxHQUFHLE1BQU07QUFDUCxlQUFPO0FBQUEsTUFDVCxDQUFDLEVBQUU7QUFDSCxVQUFJLENBQUM7QUFDSCxhQUFLLGlEQUFpRCxVQUFVLEdBQUc7QUFDckUsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLFVBQVUsTUFBTTtBQUFBLElBQ3BCO0FBQ0EsWUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLFFBQVEsTUFBTTtBQUNuRCxnQkFBVSxTQUFTLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixPQUFPLEdBQUcsWUFBWTtBQUN0RSxjQUFRLE1BQU07QUFDWixrQkFBVSxTQUFTLE1BQU0sSUFBSSxPQUFPLEdBQUcsZ0JBQWdCLE9BQU8sR0FBRztBQUFBLE1BQ25FLENBQUM7QUFBQSxJQUNIO0FBQ0EsY0FBVSxVQUFVLE9BQU87QUFHM0IsY0FBVSxVQUFVLGdCQUFnQixDQUFDLElBQUksRUFBRSxXQUFXLEdBQUcsRUFBRSxRQUFRLFFBQVEsTUFBTTtBQUMvRSxjQUFRLGNBQWMsSUFBSSxVQUFVLENBQUM7QUFBQSxJQUN2QyxDQUFDLENBQUM7QUFHRixhQUFTLEdBQUcsSUFBSSxPQUFPLFdBQVcsVUFBVTtBQUMxQyxVQUFJLGlCQUFpQjtBQUNyQixVQUFJLFdBQVcsQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQUNoQyxVQUFJLFVBQVUsQ0FBQztBQUNmLFVBQUksY0FBYyxDQUFDLFdBQVcsWUFBWSxDQUFDLE1BQU0sUUFBUSxXQUFXLENBQUM7QUFDckUsVUFBSSxVQUFVLFNBQVMsS0FBSztBQUMxQixnQkFBUSxVQUFVLEtBQUs7QUFDekIsVUFBSSxVQUFVLFNBQVMsT0FBTztBQUM1QixnQkFBUSxXQUFXLEtBQUs7QUFDMUIsVUFBSSxVQUFVLFNBQVMsU0FBUztBQUM5QixnQkFBUSxVQUFVO0FBQ3BCLFVBQUksVUFBVSxTQUFTLFNBQVM7QUFDOUIsZ0JBQVEsVUFBVTtBQUNwQixVQUFJLFVBQVUsU0FBUyxRQUFRO0FBQzdCLHlCQUFpQjtBQUNuQixVQUFJLFVBQVUsU0FBUyxVQUFVO0FBQy9CLHlCQUFpQjtBQUNuQixVQUFJLFVBQVUsU0FBUyxVQUFVLEdBQUc7QUFDbEMsWUFBSSxlQUFlLFVBQVUsVUFBVSxRQUFRLFVBQVUsSUFBSSxDQUFDLEtBQUs7QUFDbkUsWUFBSSxPQUFPLFVBQVUsYUFBYSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxPQUFPLGFBQWEsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7QUFDMUYsbUJBQVcsU0FBUyxVQUFVLElBQUk7QUFBQSxNQUNwQztBQUNBLFVBQUksVUFBVSxTQUFTLFVBQVUsR0FBRztBQUNsQyxZQUFJLGVBQWUsVUFBVSxVQUFVLFFBQVEsVUFBVSxJQUFJLENBQUMsS0FBSztBQUNuRSxZQUFJLE9BQU8sVUFBVSxhQUFhLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLE9BQU8sYUFBYSxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtBQUMxRixtQkFBVyxTQUFTLFVBQVUsSUFBSTtBQUFBLE1BQ3BDO0FBQ0EsVUFBSSxVQUFVLFNBQVMsU0FBUztBQUM5QixtQkFBVyxZQUFZLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFDNUMsWUFBRSxlQUFlO0FBQ2pCLGVBQUssQ0FBQztBQUFBLFFBQ1IsQ0FBQztBQUNILFVBQUksVUFBVSxTQUFTLE1BQU07QUFDM0IsbUJBQVcsWUFBWSxVQUFVLENBQUMsTUFBTSxNQUFNO0FBQzVDLFlBQUUsZ0JBQWdCO0FBQ2xCLGVBQUssQ0FBQztBQUFBLFFBQ1IsQ0FBQztBQUNILFVBQUksVUFBVSxTQUFTLE1BQU0sR0FBRztBQUM5QixtQkFBVyxZQUFZLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFDNUMsZUFBSyxDQUFDO0FBQ04seUJBQWUsb0JBQW9CLE9BQU8sVUFBVSxPQUFPO0FBQUEsUUFDN0QsQ0FBQztBQUFBLE1BQ0g7QUFDQSxVQUFJLFVBQVUsU0FBUyxNQUFNLEtBQUssVUFBVSxTQUFTLFNBQVMsR0FBRztBQUMvRCx5QkFBaUI7QUFDakIsbUJBQVcsWUFBWSxVQUFVLENBQUMsTUFBTSxNQUFNO0FBQzVDLGNBQUksR0FBRyxTQUFTLEVBQUUsTUFBTTtBQUN0QjtBQUNGLGNBQUksRUFBRSxPQUFPLGdCQUFnQjtBQUMzQjtBQUNGLGNBQUksR0FBRyxjQUFjLEtBQUssR0FBRyxlQUFlO0FBQzFDO0FBQ0YsY0FBSSxHQUFHLGVBQWU7QUFDcEI7QUFDRixlQUFLLENBQUM7QUFBQSxRQUNSLENBQUM7QUFBQSxNQUNIO0FBQ0EsVUFBSSxVQUFVLFNBQVMsTUFBTTtBQUMzQixtQkFBVyxZQUFZLFVBQVUsQ0FBQyxNQUFNLE1BQU07QUFDNUMsWUFBRSxXQUFXLE1BQU0sS0FBSyxDQUFDO0FBQUEsUUFDM0IsQ0FBQztBQUNILGlCQUFXLFlBQVksVUFBVSxDQUFDLE1BQU0sTUFBTTtBQUM1QyxZQUFJLFdBQVcsS0FBSyxHQUFHO0FBQ3JCLGNBQUksK0NBQStDLEdBQUcsU0FBUyxHQUFHO0FBQ2hFO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFDQSxhQUFLLENBQUM7QUFBQSxNQUNSLENBQUM7QUFDRCxxQkFBZSxpQkFBaUIsT0FBTyxVQUFVLE9BQU87QUFDeEQsYUFBTyxNQUFNO0FBQ1gsdUJBQWUsb0JBQW9CLE9BQU8sVUFBVSxPQUFPO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBQ0EsYUFBUyxVQUFVLFNBQVM7QUFDMUIsYUFBTyxRQUFRLFFBQVEsTUFBTSxHQUFHO0FBQUEsSUFDbEM7QUFDQSxhQUFTLFdBQVcsU0FBUztBQUMzQixhQUFPLFFBQVEsWUFBWSxFQUFFLFFBQVEsVUFBVSxDQUFDLE9BQU8sU0FBUyxLQUFLLFlBQVksQ0FBQztBQUFBLElBQ3BGO0FBQ0EsYUFBUyxVQUFVLFNBQVM7QUFDMUIsYUFBTyxDQUFDLE1BQU0sUUFBUSxPQUFPLEtBQUssQ0FBQyxNQUFNLE9BQU87QUFBQSxJQUNsRDtBQUNBLGFBQVMsV0FBVyxTQUFTO0FBQzNCLFVBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBQ0UsZUFBTztBQUNULGFBQU8sUUFBUSxRQUFRLG1CQUFtQixPQUFPLEVBQUUsUUFBUSxTQUFTLEdBQUcsRUFBRSxZQUFZO0FBQUEsSUFDdkY7QUFDQSxhQUFTLFdBQVcsT0FBTztBQUN6QixhQUFPLENBQUMsV0FBVyxPQUFPLEVBQUUsU0FBUyxLQUFLO0FBQUEsSUFDNUM7QUFDQSxhQUFTLCtDQUErQyxHQUFHLFdBQVc7QUFDcEUsVUFBSSxlQUFlLFVBQVUsT0FBTyxDQUFDLE1BQU07QUFDekMsZUFBTyxDQUFDLENBQUMsVUFBVSxZQUFZLFdBQVcsUUFBUSxRQUFRLFNBQVMsRUFBRSxTQUFTLENBQUM7QUFBQSxNQUNqRixDQUFDO0FBQ0QsVUFBSSxhQUFhLFNBQVMsVUFBVSxHQUFHO0FBQ3JDLFlBQUksZ0JBQWdCLGFBQWEsUUFBUSxVQUFVO0FBQ25ELHFCQUFhLE9BQU8sZUFBZSxXQUFXLGFBQWEsZ0JBQWdCLENBQUMsS0FBSyxnQkFBZ0IsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQUEsTUFDMUg7QUFDQSxVQUFJLGFBQWEsU0FBUyxVQUFVLEdBQUc7QUFDckMsWUFBSSxnQkFBZ0IsYUFBYSxRQUFRLFVBQVU7QUFDbkQscUJBQWEsT0FBTyxlQUFlLFdBQVcsYUFBYSxnQkFBZ0IsQ0FBQyxLQUFLLGdCQUFnQixNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBQSxNQUMxSDtBQUNBLFVBQUksYUFBYSxXQUFXO0FBQzFCLGVBQU87QUFDVCxVQUFJLGFBQWEsV0FBVyxLQUFLLGVBQWUsRUFBRSxHQUFHLEVBQUUsU0FBUyxhQUFhLENBQUMsQ0FBQztBQUM3RSxlQUFPO0FBQ1QsWUFBTSxxQkFBcUIsQ0FBQyxRQUFRLFNBQVMsT0FBTyxRQUFRLE9BQU8sT0FBTztBQUMxRSxZQUFNLDZCQUE2QixtQkFBbUIsT0FBTyxDQUFDLGFBQWEsYUFBYSxTQUFTLFFBQVEsQ0FBQztBQUMxRyxxQkFBZSxhQUFhLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLFNBQVMsQ0FBQyxDQUFDO0FBQ2pGLFVBQUksMkJBQTJCLFNBQVMsR0FBRztBQUN6QyxjQUFNLDhCQUE4QiwyQkFBMkIsT0FBTyxDQUFDLGFBQWE7QUFDbEYsY0FBSSxhQUFhLFNBQVMsYUFBYTtBQUNyQyx1QkFBVztBQUNiLGlCQUFPLEVBQUUsR0FBRyxRQUFRLEtBQUs7QUFBQSxRQUMzQixDQUFDO0FBQ0QsWUFBSSw0QkFBNEIsV0FBVywyQkFBMkIsUUFBUTtBQUM1RSxjQUFJLGVBQWUsRUFBRSxHQUFHLEVBQUUsU0FBUyxhQUFhLENBQUMsQ0FBQztBQUNoRCxtQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFTLGVBQWUsS0FBSztBQUMzQixVQUFJLENBQUM7QUFDSCxlQUFPLENBQUM7QUFDVixZQUFNLFdBQVcsR0FBRztBQUNwQixVQUFJLG1CQUFtQjtBQUFBLFFBQ3JCLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxNQUNoQjtBQUNBLHVCQUFpQixHQUFHLElBQUk7QUFDeEIsYUFBTyxPQUFPLEtBQUssZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWE7QUFDckQsWUFBSSxpQkFBaUIsUUFBUSxNQUFNO0FBQ2pDLGlCQUFPO0FBQUEsTUFDWCxDQUFDLEVBQUUsT0FBTyxDQUFDLGFBQWEsUUFBUTtBQUFBLElBQ2xDO0FBR0EsY0FBVSxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsV0FBVyxHQUFHLEVBQUUsUUFBUSxTQUFTLFFBQVEsTUFBTTtBQUNsRixVQUFJLGNBQWM7QUFDbEIsVUFBSSxVQUFVLFNBQVMsUUFBUSxHQUFHO0FBQ2hDLHNCQUFjLEdBQUc7QUFBQSxNQUNuQjtBQUNBLFVBQUksY0FBYyxjQUFjLGFBQWEsVUFBVTtBQUN2RCxVQUFJO0FBQ0osVUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNsQyxzQkFBYyxjQUFjLGFBQWEsR0FBRyxVQUFVLGtCQUFrQjtBQUFBLE1BQzFFLFdBQVcsT0FBTyxlQUFlLGNBQWMsT0FBTyxXQUFXLE1BQU0sVUFBVTtBQUMvRSxzQkFBYyxjQUFjLGFBQWEsR0FBRyxXQUFXLENBQUMsa0JBQWtCO0FBQUEsTUFDNUUsT0FBTztBQUNMLHNCQUFjLE1BQU07QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLFdBQVcsTUFBTTtBQUNuQixZQUFJO0FBQ0osb0JBQVksQ0FBQyxVQUFVLFNBQVMsS0FBSztBQUNyQyxlQUFPLGVBQWUsTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQUEsTUFDakQ7QUFDQSxVQUFJLFdBQVcsQ0FBQyxVQUFVO0FBQ3hCLFlBQUk7QUFDSixvQkFBWSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQ3ZDLFlBQUksZUFBZSxNQUFNLEdBQUc7QUFDMUIsaUJBQU8sSUFBSSxLQUFLO0FBQUEsUUFDbEIsT0FBTztBQUNMLHNCQUFZLE1BQU07QUFBQSxVQUNsQixHQUFHO0FBQUEsWUFDRCxPQUFPLEVBQUUsaUJBQWlCLE1BQU07QUFBQSxVQUNsQyxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFDQSxVQUFJLE9BQU8sZUFBZSxZQUFZLEdBQUcsU0FBUyxTQUFTO0FBQ3pELGtCQUFVLE1BQU07QUFDZCxjQUFJLENBQUMsR0FBRyxhQUFhLE1BQU07QUFDekIsZUFBRyxhQUFhLFFBQVEsVUFBVTtBQUFBLFFBQ3RDLENBQUM7QUFBQSxNQUNIO0FBQ0EsVUFBSSxRQUFRLEdBQUcsUUFBUSxZQUFZLE1BQU0sWUFBWSxDQUFDLFlBQVksT0FBTyxFQUFFLFNBQVMsR0FBRyxJQUFJLEtBQUssVUFBVSxTQUFTLE1BQU0sSUFBSSxXQUFXO0FBQ3hJLFVBQUksaUJBQWlCLFlBQVksTUFBTTtBQUFBLE1BQ3ZDLElBQUksR0FBRyxJQUFJLE9BQU8sV0FBVyxDQUFDLE1BQU07QUFDbEMsaUJBQVMsY0FBYyxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUFBLE1BQ3RELENBQUM7QUFDRCxVQUFJLFVBQVUsU0FBUyxNQUFNLEdBQUc7QUFDOUIsWUFBSSxDQUFDLFFBQVEsTUFBTSxFQUFFLEVBQUUsU0FBUyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsY0FBYyxNQUFNLFFBQVEsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLFlBQVksTUFBTSxZQUFZLEdBQUcsVUFBVTtBQUMxSjtBQUFBLFlBQ0UsY0FBYyxJQUFJLFdBQVcsRUFBRSxRQUFRLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFBQSxVQUN6RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsVUFBSSxDQUFDLEdBQUc7QUFDTixXQUFHLDBCQUEwQixDQUFDO0FBQ2hDLFNBQUcsd0JBQXdCLFNBQVMsSUFBSTtBQUN4QyxjQUFRLE1BQU0sR0FBRyx3QkFBd0IsU0FBUyxFQUFFLENBQUM7QUFDckQsVUFBSSxHQUFHLE1BQU07QUFDWCxZQUFJLHNCQUFzQixHQUFHLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU07QUFDeEQsbUJBQVMsTUFBTSxHQUFHLFlBQVksR0FBRyxTQUFTLElBQUksY0FBYyxJQUFJLFdBQVcsRUFBRSxRQUFRLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQUEsUUFDekcsQ0FBQztBQUNELGdCQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFBQSxNQUNyQztBQUNBLFNBQUcsV0FBVztBQUFBLFFBQ1osTUFBTTtBQUNKLGlCQUFPLFNBQVM7QUFBQSxRQUNsQjtBQUFBLFFBQ0EsSUFBSSxPQUFPO0FBQ1QsbUJBQVMsS0FBSztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUNBLFNBQUcsc0JBQXNCLENBQUMsVUFBVTtBQUNsQyxZQUFJLFVBQVUsVUFBVSxPQUFPLGVBQWUsWUFBWSxXQUFXLE1BQU0sSUFBSTtBQUM3RSxrQkFBUTtBQUNWLGVBQU8sWUFBWTtBQUNuQixrQkFBVSxNQUFNLEtBQUssSUFBSSxTQUFTLEtBQUssQ0FBQztBQUN4QyxlQUFPLE9BQU87QUFBQSxNQUNoQjtBQUNBLGNBQVEsTUFBTTtBQUNaLFlBQUksUUFBUSxTQUFTO0FBQ3JCLFlBQUksVUFBVSxTQUFTLGFBQWEsS0FBSyxTQUFTLGNBQWMsV0FBVyxFQUFFO0FBQzNFO0FBQ0YsV0FBRyxvQkFBb0IsS0FBSztBQUFBLE1BQzlCLENBQUM7QUFBQSxJQUNILENBQUM7QUFDRCxhQUFTLGNBQWMsSUFBSSxXQUFXLE9BQU8sY0FBYztBQUN6RCxhQUFPLFVBQVUsTUFBTTtBQUNyQixZQUFJLGlCQUFpQixlQUFlLE1BQU0sV0FBVztBQUNuRCxpQkFBTyxNQUFNLFdBQVcsUUFBUSxNQUFNLFdBQVcsU0FBUyxNQUFNLFNBQVMsTUFBTSxPQUFPO0FBQUEsaUJBQy9FLEdBQUcsU0FBUyxZQUFZO0FBQy9CLGNBQUksTUFBTSxRQUFRLFlBQVksR0FBRztBQUMvQixnQkFBSSxXQUFXO0FBQ2YsZ0JBQUksVUFBVSxTQUFTLFFBQVEsR0FBRztBQUNoQyx5QkFBVyxnQkFBZ0IsTUFBTSxPQUFPLEtBQUs7QUFBQSxZQUMvQyxXQUFXLFVBQVUsU0FBUyxTQUFTLEdBQUc7QUFDeEMseUJBQVcsaUJBQWlCLE1BQU0sT0FBTyxLQUFLO0FBQUEsWUFDaEQsT0FBTztBQUNMLHlCQUFXLE1BQU0sT0FBTztBQUFBLFlBQzFCO0FBQ0EsbUJBQU8sTUFBTSxPQUFPLFVBQVUsYUFBYSxTQUFTLFFBQVEsSUFBSSxlQUFlLGFBQWEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSyxRQUFRLENBQUM7QUFBQSxVQUN4TCxPQUFPO0FBQ0wsbUJBQU8sTUFBTSxPQUFPO0FBQUEsVUFDdEI7QUFBQSxRQUNGLFdBQVcsR0FBRyxRQUFRLFlBQVksTUFBTSxZQUFZLEdBQUcsVUFBVTtBQUMvRCxjQUFJLFVBQVUsU0FBUyxRQUFRLEdBQUc7QUFDaEMsbUJBQU8sTUFBTSxLQUFLLE1BQU0sT0FBTyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDOUQsa0JBQUksV0FBVyxPQUFPLFNBQVMsT0FBTztBQUN0QyxxQkFBTyxnQkFBZ0IsUUFBUTtBQUFBLFlBQ2pDLENBQUM7QUFBQSxVQUNILFdBQVcsVUFBVSxTQUFTLFNBQVMsR0FBRztBQUN4QyxtQkFBTyxNQUFNLEtBQUssTUFBTSxPQUFPLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVztBQUM5RCxrQkFBSSxXQUFXLE9BQU8sU0FBUyxPQUFPO0FBQ3RDLHFCQUFPLGlCQUFpQixRQUFRO0FBQUEsWUFDbEMsQ0FBQztBQUFBLFVBQ0g7QUFDQSxpQkFBTyxNQUFNLEtBQUssTUFBTSxPQUFPLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVztBQUM5RCxtQkFBTyxPQUFPLFNBQVMsT0FBTztBQUFBLFVBQ2hDLENBQUM7QUFBQSxRQUNILE9BQU87QUFDTCxjQUFJO0FBQ0osY0FBSSxHQUFHLFNBQVMsU0FBUztBQUN2QixnQkFBSSxNQUFNLE9BQU8sU0FBUztBQUN4Qix5QkFBVyxNQUFNLE9BQU87QUFBQSxZQUMxQixPQUFPO0FBQ0wseUJBQVc7QUFBQSxZQUNiO0FBQUEsVUFDRixPQUFPO0FBQ0wsdUJBQVcsTUFBTSxPQUFPO0FBQUEsVUFDMUI7QUFDQSxjQUFJLFVBQVUsU0FBUyxRQUFRLEdBQUc7QUFDaEMsbUJBQU8sZ0JBQWdCLFFBQVE7QUFBQSxVQUNqQyxXQUFXLFVBQVUsU0FBUyxTQUFTLEdBQUc7QUFDeEMsbUJBQU8saUJBQWlCLFFBQVE7QUFBQSxVQUNsQyxXQUFXLFVBQVUsU0FBUyxNQUFNLEdBQUc7QUFDckMsbUJBQU8sU0FBUyxLQUFLO0FBQUEsVUFDdkIsT0FBTztBQUNMLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxnQkFBZ0IsVUFBVTtBQUNqQyxVQUFJLFNBQVMsV0FBVyxXQUFXLFFBQVEsSUFBSTtBQUMvQyxhQUFPLFdBQVcsTUFBTSxJQUFJLFNBQVM7QUFBQSxJQUN2QztBQUNBLGFBQVMseUJBQXlCLFFBQVEsUUFBUTtBQUNoRCxhQUFPLFVBQVU7QUFBQSxJQUNuQjtBQUNBLGFBQVMsV0FBVyxTQUFTO0FBQzNCLGFBQU8sQ0FBQyxNQUFNLFFBQVEsT0FBTyxLQUFLLENBQUMsTUFBTSxPQUFPO0FBQUEsSUFDbEQ7QUFDQSxhQUFTLGVBQWUsT0FBTztBQUM3QixhQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sUUFBUSxjQUFjLE9BQU8sTUFBTSxRQUFRO0FBQUEsSUFDaEg7QUFHQSxjQUFVLFNBQVMsQ0FBQyxPQUFPLGVBQWUsTUFBTSxVQUFVLE1BQU0sR0FBRyxnQkFBZ0IsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHckcsb0JBQWdCLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHO0FBQzNDLGNBQVUsUUFBUSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsVUFBVSxVQUFVLE1BQU07QUFDakYsVUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNsQyxlQUFPLENBQUMsQ0FBQyxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFHLEtBQUs7QUFBQSxNQUMvRDtBQUNBLGFBQU8sVUFBVSxZQUFZLENBQUMsR0FBRyxLQUFLO0FBQUEsSUFDeEMsQ0FBQyxDQUFDO0FBR0YsY0FBVSxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxFQUFFLFFBQVEsU0FBUyxlQUFlLGVBQWUsTUFBTTtBQUM1RixVQUFJLFlBQVksZUFBZSxVQUFVO0FBQ3pDLGNBQVEsTUFBTTtBQUNaLGtCQUFVLENBQUMsVUFBVTtBQUNuQixvQkFBVSxNQUFNO0FBQ2QsZUFBRyxjQUFjO0FBQUEsVUFDbkIsQ0FBQztBQUFBLFFBQ0gsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUdELGNBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLEdBQUcsRUFBRSxRQUFRLFNBQVMsZUFBZSxlQUFlLE1BQU07QUFDNUYsVUFBSSxZQUFZLGVBQWUsVUFBVTtBQUN6QyxjQUFRLE1BQU07QUFDWixrQkFBVSxDQUFDLFVBQVU7QUFDbkIsb0JBQVUsTUFBTTtBQUNkLGVBQUcsWUFBWTtBQUNmLGVBQUcsZ0JBQWdCO0FBQ25CLHFCQUFTLEVBQUU7QUFDWCxtQkFBTyxHQUFHO0FBQUEsVUFDWixDQUFDO0FBQUEsUUFDSCxDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSCxDQUFDO0FBR0Qsa0JBQWMsYUFBYSxLQUFLLEtBQUssT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3RELFFBQUksV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLFdBQVcsWUFBWSxTQUFTLEdBQUcsRUFBRSxRQUFRLFNBQVMsUUFBUSxNQUFNO0FBQy9GLFVBQUksQ0FBQyxPQUFPO0FBQ1YsWUFBSSxtQkFBbUIsQ0FBQztBQUN4QiwrQkFBdUIsZ0JBQWdCO0FBQ3ZDLFlBQUksY0FBYyxjQUFjLElBQUksVUFBVTtBQUM5QyxvQkFBWSxDQUFDLGFBQWE7QUFDeEIsOEJBQW9CLElBQUksVUFBVSxRQUFRO0FBQUEsUUFDNUMsR0FBRyxFQUFFLE9BQU8saUJBQWlCLENBQUM7QUFDOUI7QUFBQSxNQUNGO0FBQ0EsVUFBSSxVQUFVO0FBQ1osZUFBTyxnQkFBZ0IsSUFBSSxVQUFVO0FBQ3ZDLFVBQUksR0FBRyxxQkFBcUIsR0FBRyxrQkFBa0IsS0FBSyxLQUFLLEdBQUcsa0JBQWtCLEtBQUssRUFBRSxTQUFTO0FBQzlGO0FBQUEsTUFDRjtBQUNBLFVBQUksWUFBWSxjQUFjLElBQUksVUFBVTtBQUM1QyxjQUFRLE1BQU0sVUFBVSxDQUFDLFdBQVc7QUFDbEMsWUFBSSxXQUFXLFVBQVUsT0FBTyxlQUFlLFlBQVksV0FBVyxNQUFNLElBQUksR0FBRztBQUNqRixtQkFBUztBQUFBLFFBQ1g7QUFDQSxrQkFBVSxNQUFNLEtBQUssSUFBSSxPQUFPLFFBQVEsU0FBUyxDQUFDO0FBQUEsTUFDcEQsQ0FBQyxDQUFDO0FBQ0YsY0FBUSxNQUFNO0FBQ1osV0FBRyx1QkFBdUIsR0FBRyxvQkFBb0I7QUFDakQsV0FBRyxzQkFBc0IsR0FBRyxtQkFBbUI7QUFBQSxNQUNqRCxDQUFDO0FBQUEsSUFDSDtBQUNBLGFBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLFdBQVcsV0FBVyxNQUFNO0FBQzFELFVBQUksQ0FBQztBQUNIO0FBQ0YsVUFBSSxDQUFDLEdBQUc7QUFDTixXQUFHLG9CQUFvQixDQUFDO0FBQzFCLFNBQUcsa0JBQWtCLEtBQUssSUFBSSxFQUFFLFlBQVksU0FBUyxNQUFNO0FBQUEsSUFDN0Q7QUFDQSxjQUFVLFFBQVEsUUFBUTtBQUMxQixhQUFTLGdCQUFnQixJQUFJLFlBQVk7QUFDdkMsU0FBRyxtQkFBbUI7QUFBQSxJQUN4QjtBQUdBLG9CQUFnQixNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsR0FBRztBQUMzQyxjQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsUUFBUSxNQUFNO0FBQ3JELFVBQUkscUNBQXFDLEVBQUU7QUFDekM7QUFDRixtQkFBYSxlQUFlLEtBQUssT0FBTztBQUN4QyxVQUFJLGVBQWUsQ0FBQztBQUNwQixtQkFBYSxjQUFjLEVBQUU7QUFDN0IsVUFBSSxzQkFBc0IsQ0FBQztBQUMzQiwwQkFBb0IscUJBQXFCLFlBQVk7QUFDckQsVUFBSSxRQUFRLFNBQVMsSUFBSSxZQUFZLEVBQUUsT0FBTyxvQkFBb0IsQ0FBQztBQUNuRSxVQUFJLFVBQVUsVUFBVSxVQUFVO0FBQ2hDLGdCQUFRLENBQUM7QUFDWCxtQkFBYSxPQUFPLEVBQUU7QUFDdEIsVUFBSSxlQUFlLFNBQVMsS0FBSztBQUNqQyx1QkFBaUIsWUFBWTtBQUM3QixVQUFJLE9BQU8sZUFBZSxJQUFJLFlBQVk7QUFDMUMsbUJBQWEsTUFBTSxLQUFLLFNBQVMsSUFBSSxhQUFhLE1BQU0sQ0FBQztBQUN6RCxjQUFRLE1BQU07QUFDWixxQkFBYSxTQUFTLEtBQUssU0FBUyxJQUFJLGFBQWEsU0FBUyxDQUFDO0FBQy9ELGFBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNILENBQUM7QUFDRCxtQkFBZSxDQUFDLE1BQU0sT0FBTztBQUMzQixVQUFJLEtBQUssY0FBYztBQUNyQixXQUFHLGVBQWUsS0FBSztBQUN2QixXQUFHLGFBQWEseUJBQXlCLElBQUk7QUFBQSxNQUMvQztBQUFBLElBQ0YsQ0FBQztBQUNELGFBQVMscUNBQXFDLElBQUk7QUFDaEQsVUFBSSxDQUFDO0FBQ0gsZUFBTztBQUNULFVBQUk7QUFDRixlQUFPO0FBQ1QsYUFBTyxHQUFHLGFBQWEsdUJBQXVCO0FBQUEsSUFDaEQ7QUFHQSxjQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxXQUFXLEdBQUcsRUFBRSxRQUFRLFFBQVEsTUFBTTtBQUN4RSxVQUFJLFlBQVksY0FBYyxJQUFJLFVBQVU7QUFDNUMsVUFBSSxDQUFDLEdBQUc7QUFDTixXQUFHLFlBQVksTUFBTTtBQUNuQixvQkFBVSxNQUFNO0FBQ2QsZUFBRyxNQUFNLFlBQVksV0FBVyxRQUFRLFVBQVUsU0FBUyxXQUFXLElBQUksY0FBYyxNQUFNO0FBQUEsVUFDaEcsQ0FBQztBQUFBLFFBQ0g7QUFDRixVQUFJLENBQUMsR0FBRztBQUNOLFdBQUcsWUFBWSxNQUFNO0FBQ25CLG9CQUFVLE1BQU07QUFDZCxnQkFBSSxHQUFHLE1BQU0sV0FBVyxLQUFLLEdBQUcsTUFBTSxZQUFZLFFBQVE7QUFDeEQsaUJBQUcsZ0JBQWdCLE9BQU87QUFBQSxZQUM1QixPQUFPO0FBQ0wsaUJBQUcsTUFBTSxlQUFlLFNBQVM7QUFBQSxZQUNuQztBQUFBLFVBQ0YsQ0FBQztBQUFBLFFBQ0g7QUFDRixVQUFJLE9BQU8sTUFBTTtBQUNmLFdBQUcsVUFBVTtBQUNiLFdBQUcsYUFBYTtBQUFBLE1BQ2xCO0FBQ0EsVUFBSSxPQUFPLE1BQU07QUFDZixXQUFHLFVBQVU7QUFDYixXQUFHLGFBQWE7QUFBQSxNQUNsQjtBQUNBLFVBQUksMEJBQTBCLE1BQU0sV0FBVyxJQUFJO0FBQ25ELFVBQUksU0FBUztBQUFBLFFBQ1gsQ0FBQyxVQUFVLFFBQVEsS0FBSyxJQUFJLEtBQUs7QUFBQSxRQUNqQyxDQUFDLFVBQVU7QUFDVCxjQUFJLE9BQU8sR0FBRyx1Q0FBdUMsWUFBWTtBQUMvRCxlQUFHLG1DQUFtQyxJQUFJLE9BQU8sTUFBTSxJQUFJO0FBQUEsVUFDN0QsT0FBTztBQUNMLG9CQUFRLHdCQUF3QixJQUFJLEtBQUs7QUFBQSxVQUMzQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsVUFBSTtBQUNKLFVBQUksWUFBWTtBQUNoQixjQUFRLE1BQU0sVUFBVSxDQUFDLFVBQVU7QUFDakMsWUFBSSxDQUFDLGFBQWEsVUFBVTtBQUMxQjtBQUNGLFlBQUksVUFBVSxTQUFTLFdBQVc7QUFDaEMsa0JBQVEsd0JBQXdCLElBQUksS0FBSztBQUMzQyxlQUFPLEtBQUs7QUFDWixtQkFBVztBQUNYLG9CQUFZO0FBQUEsTUFDZCxDQUFDLENBQUM7QUFBQSxJQUNKLENBQUM7QUFHRCxjQUFVLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsUUFBUSxTQUFTLFFBQVEsTUFBTTtBQUNyRSxVQUFJLGdCQUFnQixtQkFBbUIsVUFBVTtBQUNqRCxVQUFJLGdCQUFnQixjQUFjLElBQUksY0FBYyxLQUFLO0FBQ3pELFVBQUksY0FBYztBQUFBLFFBQ2hCO0FBQUE7QUFBQSxRQUVBLEdBQUcsb0JBQW9CO0FBQUEsTUFDekI7QUFDQSxTQUFHLGNBQWMsQ0FBQztBQUNsQixTQUFHLFlBQVksQ0FBQztBQUNoQixjQUFRLE1BQU0sS0FBSyxJQUFJLGVBQWUsZUFBZSxXQUFXLENBQUM7QUFDakUsY0FBUSxNQUFNO0FBQ1osZUFBTyxPQUFPLEdBQUcsU0FBUyxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO0FBQ3pELGVBQU8sR0FBRztBQUNWLGVBQU8sR0FBRztBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUNELGFBQVMsS0FBSyxJQUFJLGVBQWUsZUFBZSxhQUFhO0FBQzNELFVBQUksV0FBVyxDQUFDLE1BQU0sT0FBTyxNQUFNLFlBQVksQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUMvRCxVQUFJLGFBQWE7QUFDakIsb0JBQWMsQ0FBQyxVQUFVO0FBQ3ZCLFlBQUksV0FBVyxLQUFLLEtBQUssU0FBUyxHQUFHO0FBQ25DLGtCQUFRLE1BQU0sS0FBSyxNQUFNLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztBQUFBLFFBQ3REO0FBQ0EsWUFBSSxVQUFVO0FBQ1osa0JBQVEsQ0FBQztBQUNYLFlBQUksU0FBUyxHQUFHO0FBQ2hCLFlBQUksV0FBVyxHQUFHO0FBQ2xCLFlBQUksU0FBUyxDQUFDO0FBQ2QsWUFBSSxPQUFPLENBQUM7QUFDWixZQUFJLFNBQVMsS0FBSyxHQUFHO0FBQ25CLGtCQUFRLE9BQU8sUUFBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU07QUFDbEQsZ0JBQUksU0FBUywyQkFBMkIsZUFBZSxPQUFPLEtBQUssS0FBSztBQUN4RSx3QkFBWSxDQUFDLFdBQVc7QUFDdEIsa0JBQUksS0FBSyxTQUFTLE1BQU07QUFDdEIscUJBQUssMEJBQTBCLEVBQUU7QUFDbkMsbUJBQUssS0FBSyxNQUFNO0FBQUEsWUFDbEIsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN2QyxtQkFBTyxLQUFLLE1BQU07QUFBQSxVQUNwQixDQUFDO0FBQUEsUUFDSCxPQUFPO0FBQ0wsbUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsZ0JBQUksU0FBUywyQkFBMkIsZUFBZSxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUs7QUFDekUsd0JBQVksQ0FBQyxVQUFVO0FBQ3JCLGtCQUFJLEtBQUssU0FBUyxLQUFLO0FBQ3JCLHFCQUFLLDBCQUEwQixFQUFFO0FBQ25DLG1CQUFLLEtBQUssS0FBSztBQUFBLFlBQ2pCLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDckMsbUJBQU8sS0FBSyxNQUFNO0FBQUEsVUFDcEI7QUFBQSxRQUNGO0FBQ0EsWUFBSSxPQUFPLENBQUM7QUFDWixZQUFJLFFBQVEsQ0FBQztBQUNiLFlBQUksVUFBVSxDQUFDO0FBQ2YsWUFBSSxRQUFRLENBQUM7QUFDYixpQkFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN4QyxjQUFJLE1BQU0sU0FBUyxDQUFDO0FBQ3BCLGNBQUksS0FBSyxRQUFRLEdBQUcsTUFBTTtBQUN4QixvQkFBUSxLQUFLLEdBQUc7QUFBQSxRQUNwQjtBQUNBLG1CQUFXLFNBQVMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLFNBQVMsR0FBRyxDQUFDO0FBQzFELFlBQUksVUFBVTtBQUNkLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLGNBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsY0FBSSxZQUFZLFNBQVMsUUFBUSxHQUFHO0FBQ3BDLGNBQUksY0FBYyxJQUFJO0FBQ3BCLHFCQUFTLE9BQU8sR0FBRyxHQUFHLEdBQUc7QUFDekIsaUJBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQUEsVUFDeEIsV0FBVyxjQUFjLEdBQUc7QUFDMUIsZ0JBQUksWUFBWSxTQUFTLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUN2QyxnQkFBSSxhQUFhLFNBQVMsT0FBTyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDcEQscUJBQVMsT0FBTyxHQUFHLEdBQUcsVUFBVTtBQUNoQyxxQkFBUyxPQUFPLFdBQVcsR0FBRyxTQUFTO0FBQ3ZDLGtCQUFNLEtBQUssQ0FBQyxXQUFXLFVBQVUsQ0FBQztBQUFBLFVBQ3BDLE9BQU87QUFDTCxrQkFBTSxLQUFLLEdBQUc7QUFBQSxVQUNoQjtBQUNBLG9CQUFVO0FBQUEsUUFDWjtBQUNBLGlCQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUFLO0FBQ3ZDLGNBQUksTUFBTSxRQUFRLENBQUM7QUFDbkIsY0FBSSxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsWUFBWTtBQUM1QixtQkFBTyxHQUFHLEVBQUUsV0FBVyxRQUFRLFVBQVU7QUFBQSxVQUMzQztBQUNBLGlCQUFPLEdBQUcsRUFBRSxPQUFPO0FBQ25CLGlCQUFPLEdBQUcsSUFBSTtBQUNkLGlCQUFPLE9BQU8sR0FBRztBQUFBLFFBQ25CO0FBQ0EsaUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsY0FBSSxDQUFDLFdBQVcsVUFBVSxJQUFJLE1BQU0sQ0FBQztBQUNyQyxjQUFJLFdBQVcsT0FBTyxTQUFTO0FBQy9CLGNBQUksWUFBWSxPQUFPLFVBQVU7QUFDakMsY0FBSSxTQUFTLFNBQVMsY0FBYyxLQUFLO0FBQ3pDLG9CQUFVLE1BQU07QUFDZCxnQkFBSSxDQUFDO0FBQ0gsbUJBQUssd0NBQXdDLFlBQVksWUFBWSxNQUFNO0FBQzdFLHNCQUFVLE1BQU0sTUFBTTtBQUN0QixxQkFBUyxNQUFNLFNBQVM7QUFDeEIsc0JBQVUsa0JBQWtCLFVBQVUsTUFBTSxVQUFVLGNBQWM7QUFDcEUsbUJBQU8sT0FBTyxRQUFRO0FBQ3RCLHFCQUFTLGtCQUFrQixTQUFTLE1BQU0sU0FBUyxjQUFjO0FBQ2pFLG1CQUFPLE9BQU87QUFBQSxVQUNoQixDQUFDO0FBQ0Qsb0JBQVUsb0JBQW9CLE9BQU8sS0FBSyxRQUFRLFVBQVUsQ0FBQyxDQUFDO0FBQUEsUUFDaEU7QUFDQSxpQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxjQUFJLENBQUMsVUFBVSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQzlCLGNBQUksU0FBUyxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVE7QUFDbkUsY0FBSSxPQUFPO0FBQ1QscUJBQVMsT0FBTztBQUNsQixjQUFJLFNBQVMsT0FBTyxLQUFLO0FBQ3pCLGNBQUksTUFBTSxLQUFLLEtBQUs7QUFDcEIsY0FBSSxTQUFTLFNBQVMsV0FBVyxXQUFXLFNBQVMsSUFBSSxFQUFFO0FBQzNELGNBQUksZ0JBQWdCLFNBQVMsTUFBTTtBQUNuQyx5QkFBZSxRQUFRLGVBQWUsVUFBVTtBQUNoRCxpQkFBTyxzQkFBc0IsQ0FBQyxhQUFhO0FBQ3pDLG1CQUFPLFFBQVEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNO0FBQ2xELDRCQUFjLElBQUksSUFBSTtBQUFBLFlBQ3hCLENBQUM7QUFBQSxVQUNIO0FBQ0Esb0JBQVUsTUFBTTtBQUNkLG1CQUFPLE1BQU0sTUFBTTtBQUNuQiw0QkFBZ0IsTUFBTSxTQUFTLE1BQU0sQ0FBQyxFQUFFO0FBQUEsVUFDMUMsQ0FBQztBQUNELGNBQUksT0FBTyxRQUFRLFVBQVU7QUFDM0IsaUJBQUssb0VBQW9FLFVBQVU7QUFBQSxVQUNyRjtBQUNBLGlCQUFPLEdBQUcsSUFBSTtBQUFBLFFBQ2hCO0FBQ0EsaUJBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDckMsaUJBQU8sTUFBTSxDQUFDLENBQUMsRUFBRSxvQkFBb0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsUUFDckU7QUFDQSxtQkFBVyxjQUFjO0FBQUEsTUFDM0IsQ0FBQztBQUFBLElBQ0g7QUFDQSxhQUFTLG1CQUFtQixZQUFZO0FBQ3RDLFVBQUksZ0JBQWdCO0FBQ3BCLFVBQUksZ0JBQWdCO0FBQ3BCLFVBQUksYUFBYTtBQUNqQixVQUFJLFVBQVUsV0FBVyxNQUFNLFVBQVU7QUFDekMsVUFBSSxDQUFDO0FBQ0g7QUFDRixVQUFJLE1BQU0sQ0FBQztBQUNYLFVBQUksUUFBUSxRQUFRLENBQUMsRUFBRSxLQUFLO0FBQzVCLFVBQUksT0FBTyxRQUFRLENBQUMsRUFBRSxRQUFRLGVBQWUsRUFBRSxFQUFFLEtBQUs7QUFDdEQsVUFBSSxnQkFBZ0IsS0FBSyxNQUFNLGFBQWE7QUFDNUMsVUFBSSxlQUFlO0FBQ2pCLFlBQUksT0FBTyxLQUFLLFFBQVEsZUFBZSxFQUFFLEVBQUUsS0FBSztBQUNoRCxZQUFJLFFBQVEsY0FBYyxDQUFDLEVBQUUsS0FBSztBQUNsQyxZQUFJLGNBQWMsQ0FBQyxHQUFHO0FBQ3BCLGNBQUksYUFBYSxjQUFjLENBQUMsRUFBRSxLQUFLO0FBQUEsUUFDekM7QUFBQSxNQUNGLE9BQU87QUFDTCxZQUFJLE9BQU87QUFBQSxNQUNiO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFTLDJCQUEyQixlQUFlLE1BQU0sT0FBTyxPQUFPO0FBQ3JFLFVBQUksaUJBQWlCLENBQUM7QUFDdEIsVUFBSSxXQUFXLEtBQUssY0FBYyxJQUFJLEtBQUssTUFBTSxRQUFRLElBQUksR0FBRztBQUM5RCxZQUFJLFFBQVEsY0FBYyxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsUUFBUSxLQUFLLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUMvRixjQUFNLFFBQVEsQ0FBQyxNQUFNLE1BQU07QUFDekIseUJBQWUsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUFBLFFBQy9CLENBQUM7QUFBQSxNQUNILFdBQVcsV0FBVyxLQUFLLGNBQWMsSUFBSSxLQUFLLENBQUMsTUFBTSxRQUFRLElBQUksS0FBSyxPQUFPLFNBQVMsVUFBVTtBQUNsRyxZQUFJLFFBQVEsY0FBYyxLQUFLLFFBQVEsS0FBSyxFQUFFLEVBQUUsUUFBUSxLQUFLLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUMvRixjQUFNLFFBQVEsQ0FBQyxTQUFTO0FBQ3RCLHlCQUFlLElBQUksSUFBSSxLQUFLLElBQUk7QUFBQSxRQUNsQyxDQUFDO0FBQUEsTUFDSCxPQUFPO0FBQ0wsdUJBQWUsY0FBYyxJQUFJLElBQUk7QUFBQSxNQUN2QztBQUNBLFVBQUksY0FBYztBQUNoQix1QkFBZSxjQUFjLEtBQUssSUFBSTtBQUN4QyxVQUFJLGNBQWM7QUFDaEIsdUJBQWUsY0FBYyxVQUFVLElBQUk7QUFDN0MsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFTLFdBQVcsU0FBUztBQUMzQixhQUFPLENBQUMsTUFBTSxRQUFRLE9BQU8sS0FBSyxDQUFDLE1BQU0sT0FBTztBQUFBLElBQ2xEO0FBR0EsYUFBUyxXQUFXO0FBQUEsSUFDcEI7QUFDQSxhQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsUUFBUSxNQUFNO0FBQ3JELFVBQUksT0FBTyxZQUFZLEVBQUU7QUFDekIsVUFBSSxDQUFDLEtBQUs7QUFDUixhQUFLLFVBQVUsQ0FBQztBQUNsQixXQUFLLFFBQVEsVUFBVSxJQUFJO0FBQzNCLGNBQVEsTUFBTSxPQUFPLEtBQUssUUFBUSxVQUFVLENBQUM7QUFBQSxJQUMvQztBQUNBLGNBQVUsT0FBTyxRQUFRO0FBR3pCLGNBQVUsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLEdBQUcsRUFBRSxRQUFRLFNBQVMsUUFBUSxNQUFNO0FBQ3BFLFVBQUksR0FBRyxRQUFRLFlBQVksTUFBTTtBQUMvQixhQUFLLDZDQUE2QyxFQUFFO0FBQ3RELFVBQUksWUFBWSxjQUFjLElBQUksVUFBVTtBQUM1QyxVQUFJLE9BQU8sTUFBTTtBQUNmLFlBQUksR0FBRztBQUNMLGlCQUFPLEdBQUc7QUFDWixZQUFJLFNBQVMsR0FBRyxRQUFRLFVBQVUsSUFBSSxFQUFFO0FBQ3hDLHVCQUFlLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDN0Isa0JBQVUsTUFBTTtBQUNkLGFBQUcsTUFBTSxNQUFNO0FBQ2YsMEJBQWdCLE1BQU0sU0FBUyxNQUFNLENBQUMsRUFBRTtBQUFBLFFBQzFDLENBQUM7QUFDRCxXQUFHLGlCQUFpQjtBQUNwQixXQUFHLFlBQVksTUFBTTtBQUNuQixlQUFLLFFBQVEsQ0FBQyxTQUFTO0FBQ3JCLGdCQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVk7QUFDckIsbUJBQUssV0FBVyxRQUFRLFVBQVU7QUFBQSxZQUNwQztBQUFBLFVBQ0YsQ0FBQztBQUNELGlCQUFPLE9BQU87QUFDZCxpQkFBTyxHQUFHO0FBQUEsUUFDWjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsVUFBSSxPQUFPLE1BQU07QUFDZixZQUFJLENBQUMsR0FBRztBQUNOO0FBQ0YsV0FBRyxVQUFVO0FBQ2IsZUFBTyxHQUFHO0FBQUEsTUFDWjtBQUNBLGNBQVEsTUFBTSxVQUFVLENBQUMsVUFBVTtBQUNqQyxnQkFBUSxLQUFLLElBQUksS0FBSztBQUFBLE1BQ3hCLENBQUMsQ0FBQztBQUNGLGNBQVEsTUFBTSxHQUFHLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFBQSxJQUM5QyxDQUFDO0FBR0QsY0FBVSxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxFQUFFLFVBQVUsVUFBVSxNQUFNO0FBQy9ELFVBQUksUUFBUSxVQUFVLFVBQVU7QUFDaEMsWUFBTSxRQUFRLENBQUMsU0FBUyxVQUFVLElBQUksSUFBSSxDQUFDO0FBQUEsSUFDN0MsQ0FBQztBQUNELG1CQUFlLENBQUMsTUFBTSxPQUFPO0FBQzNCLFVBQUksS0FBSyxRQUFRO0FBQ2YsV0FBRyxTQUFTLEtBQUs7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUdELGtCQUFjLGFBQWEsS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNwRCxjQUFVLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sV0FBVyxXQUFXLEdBQUcsRUFBRSxRQUFRLE1BQU07QUFDckYsVUFBSSxZQUFZLGFBQWEsY0FBYyxJQUFJLFVBQVUsSUFBSSxNQUFNO0FBQUEsTUFDbkU7QUFDQSxVQUFJLEdBQUcsUUFBUSxZQUFZLE1BQU0sWUFBWTtBQUMzQyxZQUFJLENBQUMsR0FBRztBQUNOLGFBQUcsbUJBQW1CLENBQUM7QUFDekIsWUFBSSxDQUFDLEdBQUcsaUJBQWlCLFNBQVMsS0FBSztBQUNyQyxhQUFHLGlCQUFpQixLQUFLLEtBQUs7QUFBQSxNQUNsQztBQUNBLFVBQUksaUJBQWlCLEdBQUcsSUFBSSxPQUFPLFdBQVcsQ0FBQyxNQUFNO0FBQ25ELGtCQUFVLE1BQU07QUFBQSxRQUNoQixHQUFHLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUFBLE1BQzVDLENBQUM7QUFDRCxjQUFRLE1BQU0sZUFBZSxDQUFDO0FBQUEsSUFDaEMsQ0FBQyxDQUFDO0FBR0YsK0JBQTJCLFlBQVksWUFBWSxVQUFVO0FBQzdELCtCQUEyQixhQUFhLGFBQWEsV0FBVztBQUNoRSwrQkFBMkIsU0FBUyxRQUFRLE9BQU87QUFDbkQsK0JBQTJCLFFBQVEsUUFBUSxNQUFNO0FBQ2pELGFBQVMsMkJBQTJCLE1BQU0sZUFBZSxNQUFNO0FBQzdELGdCQUFVLGVBQWUsQ0FBQyxPQUFPLEtBQUssb0JBQW9CLGFBQWEsbUNBQW1DLElBQUksK0NBQStDLElBQUksSUFBSSxFQUFFLENBQUM7QUFBQSxJQUMxSztBQUdBLG1CQUFlLGFBQWEsWUFBWTtBQUN4QyxtQkFBZSxvQkFBb0IsRUFBRSxVQUFVLG9CQUFvQixVQUFVLFFBQVEsb0JBQW9CLFFBQVEsU0FBUyxvQkFBb0IsTUFBTSxLQUFLLG9CQUFvQixNQUFNLENBQUM7QUFDcEwsUUFBSSxjQUFjO0FBR2xCLFFBQUksaUJBQWlCO0FBQUE7QUFBQTs7O0FDemhJckIsb0JBQW1COzs7QUNBbkIsSUFBTSxZQUFZLE1BQU07QUFDdEIsU0FBTztBQUFBO0FBQUEsSUFFTCxLQUFLO0FBQUE7QUFBQSxJQUdMLE9BQVE7QUFDTixXQUFLLFVBQVUsTUFBTTtBQUNuQixjQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sUUFBUTtBQUNyQyxZQUFJLENBQUM7QUFBSztBQUVWLGNBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsY0FBTSxTQUFTLENBQUMsTUFBTTtBQUNwQixrQkFBUSxJQUFJLFVBQVUsTUFBTSxRQUFRO0FBQ3BDLGVBQUssTUFBTTtBQUFBLFFBQ2I7QUFDQSxjQUFNLFVBQVUsTUFBTTtBQUNwQixrQkFBUSxJQUFJLFNBQVM7QUFDckIsZUFBSyxNQUFNO0FBQUEsUUFDYjtBQUNBLGNBQU0sTUFBTTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFBQTtBQUFBLElBR0EsT0FBTztBQUFBLE1BQ0wsQ0FBQyxPQUFPLEdBQUc7QUFBQSxNQUNYLENBQUMsUUFBUSxJQUFLO0FBQ1osZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxDQUFDLFlBQVksR0FBRztBQUFBLElBQ2xCO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixDQUFDLE9BQU8sR0FBRztBQUFBLE1BQ1gsQ0FBQyxRQUFRLElBQUs7QUFDWixlQUFPLENBQUMsS0FBSztBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsVUFBVSxXQUFXLE1BQU07QUFDekIsU0FBTyxPQUFPLEtBQUssWUFBWSxTQUFTO0FBQzFDO0FBRUEsSUFBTyxpQkFBUTs7O0FDN0NmLElBQU1HLGFBQVksTUFBTTtBQUN0QixTQUFPO0FBQUE7QUFBQSxJQUVMLE9BQVE7QUFDTixZQUFNLEtBQUssS0FBSyxNQUFNO0FBQ3RCLFlBQU0sT0FBTyxHQUFHLFVBQVUsU0FBWSxHQUFHLFlBQVksR0FBRztBQUN4RCxhQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsSUFBSTtBQUFBLElBQ2xEO0FBQUE7QUFBQSxJQUdBLE1BQU07QUFBQSxNQUNKLENBQUMsT0FBTyxHQUFHO0FBQUEsSUFDYjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsQ0FBQyxPQUFPLEdBQUc7QUFBQSxNQUNYLENBQUMsUUFBUSxJQUFLO0FBQ1osYUFBSyxLQUFLO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLENBQUMsT0FBTyxHQUFHO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjtBQUVBQSxXQUFVLFdBQVcsTUFBTTtBQUN6QixTQUFPLE9BQU8sS0FBSyxlQUFlQSxVQUFTO0FBQzdDO0FBRUEsSUFBTyxvQkFBUUE7OztBQzdCZixJQUFNQyxhQUFZLE1BQU07QUFDdEIsU0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUE7QUFBQSxJQUdSLFNBQVU7QUFDUixXQUFLLFNBQVMsS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLO0FBQUEsSUFDekM7QUFBQSxJQUNBLE9BQVE7QUFDTixXQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUFBLElBQ0EsUUFBUztBQUNQLFdBQUssU0FBUztBQUFBLElBQ2hCO0FBQUE7QUFBQSxJQUdBLE1BQU07QUFBQSxNQUNKLENBQUMsT0FBTyxHQUFHO0FBQUEsTUFDWCxDQUFDLE1BQU0sSUFBSztBQUNWLGVBQU8sQ0FBQyxhQUFhO0FBQUEsTUFDdkI7QUFBQSxNQUNBLENBQUMsOEJBQThCLElBQUs7QUFDbEMsYUFBSyxNQUFNO0FBQ1gsYUFBSyxNQUFNLFFBQVEsTUFBTTtBQUFBLE1BQzNCO0FBQUEsTUFDQSxDQUFDLGlCQUFpQixFQUFHLE9BQU87QUFDMUIsWUFBSSxDQUFDLEtBQUssTUFBTSxLQUFLLFNBQVMsTUFBTSxNQUFNLEdBQUc7QUFDM0MsZUFBSyxNQUFNO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLENBQUMsZ0JBQWdCLElBQUs7QUFDcEIsYUFBSyxNQUFNO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLENBQUMsT0FBTyxHQUFHO0FBQUEsTUFDWCxDQUFDLFFBQVEsSUFBSztBQUNaLGFBQUssT0FBTztBQUFBLE1BQ2Q7QUFBQSxNQUNBLENBQUMsZ0JBQWdCLElBQUs7QUFDcEIsZUFBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLE1BQ0EsQ0FBQyxnQkFBZ0IsSUFBSztBQUNwQixlQUFPLEtBQUssSUFBSSxhQUFhO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxDQUFDLE9BQU8sR0FBRztBQUFBLE1BQ1gsQ0FBQyxLQUFLLElBQUs7QUFDVCxlQUFPLEtBQUssSUFBSSxhQUFhO0FBQUEsTUFDL0I7QUFBQSxNQUNBLENBQUMsUUFBUSxJQUFLO0FBQ1osZUFBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQUEsV0FBVSxXQUFXLE1BQU07QUFDekIsU0FBTyxPQUFPLEtBQUssYUFBYUEsVUFBUztBQUMzQztBQUVBLElBQU8sa0JBQVFBOzs7QUh2RGYsSUFBTyxtQkFBUTtBQUFBLEVBQ2IsUUFBUztBQUNQLFdBQU8sU0FBUyxjQUFBQztBQUNoQixTQUFLLFNBQVM7QUFDZCxrQkFBQUEsUUFBTyxNQUFNO0FBQUEsRUFDZjtBQUFBLEVBQ0EsV0FBWTtBQUNWLG1CQUFPLFNBQVM7QUFDaEIsc0JBQVUsU0FBUztBQUNuQixvQkFBUSxTQUFTO0FBQUEsRUFDbkI7QUFDRjsiLAogICJuYW1lcyI6IFsiX19jcmVhdGUiLCAiX19kZWZQcm9wIiwgIl9fZ2V0T3duUHJvcERlc2MiLCAiX19nZXRPd25Qcm9wTmFtZXMiLCAiX19nZXRQcm90b09mIiwgIl9faGFzT3duUHJvcCIsICJfX2NvbW1vbkpTIiwgIl9fY29weVByb3BzIiwgIl9fdG9FU00iLCAiZXhwb3J0cyIsICJBbHBpbmUiLCAiY29tcG9uZW50IiwgImNvbXBvbmVudCIsICJBbHBpbmUiXQp9Cg==
