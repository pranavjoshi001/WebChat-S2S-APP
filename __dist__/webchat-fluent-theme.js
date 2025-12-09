"use strict";
(() => {
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

  // src/external.umd/botframework-webchat-component/index.ts
  var require_botframework_webchat_component = __commonJS({
    "src/external.umd/botframework-webchat-component/index.ts"(exports, module) {
      module.exports = {
        Components: globalThis.WebChat.Components,
        hooks: globalThis.WebChat.hooks,
        testIds: globalThis.WebChat.testIds
      };
    }
  });

  // ../../node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "../../node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          var classes20 = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes20 = appendClass(classes20, parseValue(arg));
            }
          }
          return classes20;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes20 = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes20 = appendClass(classes20, key);
            }
          }
          return classes20;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (false) {
          (void 0)("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // src/external.umd/react.ts
  var require_react = __commonJS({
    "src/external.umd/react.ts"(exports, module) {
      module.exports = globalThis.React;
    }
  });

  // ../../node_modules/core-js-pure/internals/global-this.js
  var require_global_this = __commonJS({
    "../../node_modules/core-js-pure/internals/global-this.js"(exports, module) {
      "use strict";
      var check3 = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check3(typeof globalThis == "object" && globalThis) || check3(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check3(typeof self == "object" && self) || check3(typeof global == "object" && global) || check3(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ function() {
        return this;
      }() || Function("return this")();
    }
  });

  // ../../node_modules/core-js-pure/internals/fails.js
  var require_fails = __commonJS({
    "../../node_modules/core-js-pure/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec2) {
        try {
          return !!exec2();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "../../node_modules/core-js-pure/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = (function() {
        }).bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/function-apply.js
  var require_function_apply = __commonJS({
    "../../node_modules/core-js-pure/internals/function-apply.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var apply2 = FunctionPrototype.apply;
      var call2 = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call2.bind(apply2) : function() {
        return call2.apply(apply2, arguments);
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "../../node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call2 = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call2, call2);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call2.apply(fn, arguments);
        };
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "../../node_modules/core-js-pure/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toString3 = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString3(it), 8, -1);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "../../node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/is-callable.js
  var require_is_callable = __commonJS({
    "../../node_modules/core-js-pure/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/descriptors.js
  var require_descriptors = __commonJS({
    "../../node_modules/core-js-pure/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/function-call.js
  var require_function_call = __commonJS({
    "../../node_modules/core-js-pure/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var call2 = Function.prototype.call;
      module.exports = NATIVE_BIND ? call2.bind(call2) : function() {
        return call2.apply(call2, arguments);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "../../node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // ../../node_modules/core-js-pure/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "../../node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "../../node_modules/core-js-pure/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // ../../node_modules/core-js-pure/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "../../node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "../../node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "../../node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/is-object.js
  var require_is_object = __commonJS({
    "../../node_modules/core-js-pure/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/path.js
  var require_path = __commonJS({
    "../../node_modules/core-js-pure/internals/path.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // ../../node_modules/core-js-pure/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "../../node_modules/core-js-pure/internals/get-built-in.js"(exports, module) {
      "use strict";
      var path = require_path();
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var aFunction = function(variable) {
        return isCallable(variable) ? variable : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "../../node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // ../../node_modules/core-js-pure/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "../../node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var navigator = globalThis2.navigator;
      var userAgent = navigator && navigator.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // ../../node_modules/core-js-pure/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "../../node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var process2 = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process2 && process2.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version2;
      if (v8) {
        match = v8.split(".");
        version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version2 && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version2 = +match[1];
        }
      }
      module.exports = version2;
    }
  });

  // ../../node_modules/core-js-pure/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "../../node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version();
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol5 = Symbol("symbol detection");
        return !$String(symbol5) || !(Object(symbol5) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "../../node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // ../../node_modules/core-js-pure/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "../../node_modules/core-js-pure/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "../../node_modules/core-js-pure/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/a-callable.js
  var require_a_callable = __commonJS({
    "../../node_modules/core-js-pure/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/get-method.js
  var require_get_method = __commonJS({
    "../../node_modules/core-js-pure/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P) {
        var func3 = V[P];
        return isNullOrUndefined(func3) ? void 0 : aCallable(func3);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "../../node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call2 = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call2(fn, input))) return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call2(fn, input))) return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call2(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/is-pure.js
  var require_is_pure = __commonJS({
    "../../node_modules/core-js-pure/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = true;
    }
  });

  // ../../node_modules/core-js-pure/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "../../node_modules/core-js-pure/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/shared-store.js
  var require_shared_store = __commonJS({
    "../../node_modules/core-js-pure/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure();
      var globalThis2 = require_global_this();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store5 = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store5.versions || (store5.versions = [])).push({
        version: "3.44.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/shared.js
  var require_shared = __commonJS({
    "../../node_modules/core-js-pure/internals/shared.js"(exports, module) {
      "use strict";
      var store5 = require_shared_store();
      module.exports = function(key, value) {
        return store5[key] || (store5[key] = value || {});
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-object.js
  var require_to_object = __commonJS({
    "../../node_modules/core-js-pure/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "../../node_modules/core-js-pure/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/uid.js
  var require_uid = __commonJS({
    "../../node_modules/core-js-pure/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString3 = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString3(++id + postfix, 36);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "../../node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "../../node_modules/core-js-pure/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call2 = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0) pref = "default";
          result = call2(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0) pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "../../node_modules/core-js-pure/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "../../node_modules/core-js-pure/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var document2 = globalThis2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "../../node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var call2 = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
        if (hasOwn(O, P)) return createPropertyDescriptor(!call2(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/is-forced.js
  var require_is_forced = __commonJS({
    "../../node_modules/core-js-pure/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string6) {
        return String(string6).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // ../../node_modules/core-js-pure/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "../../node_modules/core-js-pure/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause();
      var aCallable = require_a_callable();
      var NATIVE_BIND = require_function_bind_native();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "../../node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // ../../node_modules/core-js-pure/internals/an-object.js
  var require_an_object = __commonJS({
    "../../node_modules/core-js-pure/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "../../node_modules/core-js-pure/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current2 = $getOwnPropertyDescriptor(O, P);
          if (current2 && current2[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current2[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current2[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O, P, Attributes);
      } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "../../node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object4, key, value) {
        return definePropertyModule.f(object4, key, createPropertyDescriptor(1, value));
      } : function(object4, key, value) {
        object4[key] = value;
        return object4;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/export.js
  var require_export = __commonJS({
    "../../node_modules/core-js-pure/internals/export.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var apply2 = require_function_apply();
      var uncurryThis = require_function_uncurry_this_clause();
      var isCallable = require_is_callable();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var isForced = require_is_forced();
      var path = require_path();
      var bind = require_function_bind_context();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      require_shared_store();
      var wrapConstructor = function(NativeConstructor) {
        var Wrapper = function(a, b, c) {
          if (this instanceof Wrapper) {
            switch (arguments.length) {
              case 0:
                return new NativeConstructor();
              case 1:
                return new NativeConstructor(a);
              case 2:
                return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
          }
          return apply2(NativeConstructor, this, arguments);
        };
        Wrapper.prototype = NativeConstructor.prototype;
        return Wrapper;
      };
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var PROTO = options.proto;
        var nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype;
        var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
        var targetPrototype = target.prototype;
        var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
        var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
        for (key in source) {
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
          targetProperty = target[key];
          if (USE_NATIVE) if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(nativeSource, key);
            nativeProperty = descriptor && descriptor.value;
          } else nativeProperty = nativeSource[key];
          sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
          if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
          if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis2);
          else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
          else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
          else resultProperty = sourceProperty;
          if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(resultProperty, "sham", true);
          }
          createNonEnumerableProperty(target, key, resultProperty);
          if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + "Prototype";
            if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
              createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
            }
            createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
            if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
              createNonEnumerableProperty(targetPrototype, key, sourceProperty);
            }
          }
        }
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "../../node_modules/core-js-pure/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "../../node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number2 = +argument;
        return number2 !== number2 || number2 === 0 ? 0 : trunc(number2);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "../../node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer2 = toIntegerOrInfinity(index);
        return integer2 < 0 ? max(integer2 + length, 0) : min(integer2, length);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/to-length.js
  var require_to_length = __commonJS({
    "../../node_modules/core-js-pure/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "../../node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/array-includes.js
  var require_array_includes = __commonJS({
    "../../node_modules/core-js-pure/internals/array-includes.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          if (length === 0) return !IS_INCLUDES && -1;
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el !== el) while (length > index) {
            value = O[index++];
            if (value !== value) return true;
          }
          else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "../../node_modules/core-js-pure/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // ../../node_modules/core-js-pure/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "../../node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object4, names) {
        var O = toIndexedObject(object4);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i) if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
        return result;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "../../node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // ../../node_modules/core-js-pure/internals/object-keys.js
  var require_object_keys = __commonJS({
    "../../node_modules/core-js-pure/internals/object-keys.js"(exports, module) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "../../node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/html.js
  var require_html = __commonJS({
    "../../node_modules/core-js-pure/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // ../../node_modules/core-js-pure/internals/shared-key.js
  var require_shared_key = __commonJS({
    "../../node_modules/core-js-pure/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // ../../node_modules/core-js-pure/internals/object-create.js
  var require_object_create = __commonJS({
    "../../node_modules/core-js-pure/internals/object-create.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var definePropertiesModule = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // ../../node_modules/core-js-pure/modules/es.object.create.js
  var require_es_object_create = __commonJS({
    "../../node_modules/core-js-pure/modules/es.object.create.js"() {
      "use strict";
      var $ = require_export();
      var DESCRIPTORS = require_descriptors();
      var create = require_object_create();
      $({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
        create
      });
    }
  });

  // ../../node_modules/core-js-pure/es/object/create.js
  var require_create = __commonJS({
    "../../node_modules/core-js-pure/es/object/create.js"(exports, module) {
      "use strict";
      require_es_object_create();
      var path = require_path();
      var Object2 = path.Object;
      module.exports = function create(P, D) {
        return Object2.create(P, D);
      };
    }
  });

  // ../../node_modules/core-js-pure/stable/object/create.js
  var require_create2 = __commonJS({
    "../../node_modules/core-js-pure/stable/object/create.js"(exports, module) {
      "use strict";
      var parent = require_create();
      module.exports = parent;
    }
  });

  // ../../node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js
  var require_create3 = __commonJS({
    "../../node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js"(exports, module) {
      module.exports = require_create2();
    }
  });

  // src/external.umd/botframework-webchat-component/internal.ts
  var require_internal = __commonJS({
    "src/external.umd/botframework-webchat-component/internal.ts"(exports, module) {
      module.exports = globalThis.WebChat.internal;
    }
  });

  // ../../node_modules/math-random/browser/crypto.js
  var require_crypto = __commonJS({
    "../../node_modules/math-random/browser/crypto.js"(exports, module) {
      var global2 = typeof window !== "undefined" ? window : self;
      module.exports = global2.crypto || global2.msCrypto;
    }
  });

  // ../../node_modules/math-random/browser/index.js
  var require_browser = __commonJS({
    "../../node_modules/math-random/browser/index.js"(exports, module) {
      module.exports = function(crypto) {
        if (!crypto) return Math.random;
        var max = Math.pow(2, 32);
        var u32 = new Uint32Array(1);
        return function random2() {
          return crypto.getRandomValues(u32)[0] / max;
        };
      }(require_crypto());
    }
  });

  // ../../node_modules/simple-update-in/dist/simple-update-in.production.min.js
  var require_simple_update_in_production_min = __commonJS({
    "../../node_modules/simple-update-in/dist/simple-update-in.production.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : false ? (void 0)(e) : (t = t || self).simpleUpdateIn = e();
      }(exports, function() {
        "use strict";
        function l(t2) {
          return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function c(t2, e2, r2, n2, o2, a2, i2) {
          try {
            var u2 = t2[a2](i2), c2 = u2.value;
          } catch (t3) {
            return void r2(t3);
          }
          u2.done ? e2(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function t(u2) {
          return function() {
            var t2 = this, i2 = arguments;
            return new Promise(function(e2, r2) {
              var n2 = u2.apply(t2, i2);
              function o2(t3) {
                c(n2, e2, r2, o2, a2, "next", t3);
              }
              function a2(t3) {
                c(n2, e2, r2, o2, a2, "throw", t3);
              }
              o2(void 0);
            });
          };
        }
        function p(t2, e2, r2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
        }
        function n(e2, t2) {
          var r2, n2 = Object.keys(e2);
          return Object.getOwnPropertySymbols && (r2 = Object.getOwnPropertySymbols(e2), t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2)), n2;
        }
        function y(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = null != arguments[t2] ? arguments[t2] : {};
            t2 % 2 ? n(Object(r2), true).forEach(function(t3) {
              p(e2, t3, r2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : n(Object(r2)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
            });
          }
          return e2;
        }
        function b(t2) {
          return function(t3) {
            if (Array.isArray(t3)) return t3;
          }(t2) || e(t2) || u(t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function v(t2) {
          return function(t3) {
            if (Array.isArray(t3)) return o(t3);
          }(t2) || e(t2) || u(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function e(t2) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t2)) return Array.from(t2);
        }
        function u(t2, e2) {
          if (t2) {
            if ("string" == typeof t2) return o(t2, e2);
            var r2 = Object.prototype.toString.call(t2).slice(8, -1);
            return "Object" === r2 && t2.constructor && (r2 = t2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? o(t2, e2) : void 0;
          }
        }
        function o(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var r2 = 0, n2 = new Array(e2); r2 < e2; r2++) n2[r2] = t2[r2];
          return n2;
        }
        function f(t2) {
          if ("undefined" == typeof Symbol || null == t2[Symbol.iterator]) {
            if (Array.isArray(t2) || (t2 = u(t2))) {
              var e2 = 0, r2 = function() {
              };
              return { s: r2, n: function() {
                return e2 >= t2.length ? { done: true } : { done: false, value: t2[e2++] };
              }, e: function(t3) {
                throw t3;
              }, f: r2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var n2, o2, a2 = true, i2 = false;
          return { s: function() {
            n2 = t2[Symbol.iterator]();
          }, n: function() {
            var t3 = n2.next();
            return a2 = t3.done, t3;
          }, e: function(t3) {
            i2 = true, o2 = t3;
          }, f: function() {
            try {
              a2 || null == n2.return || n2.return();
            } finally {
              if (i2) throw o2;
            }
          } };
        }
        var d = Object.is || function(t2, e2) {
          return t2 === e2 ? 0 !== t2 || 1 / t2 == 1 / e2 : t2 != t2 && e2 != e2;
        };
        function r(t2, e2, r2) {
          s(e2);
          var n2, o2 = f(function t3(e3, r3) {
            if (!r3.length) return;
            var n3 = b(r3), o3 = n3[0], a3 = n3.slice(1);
            if ("function" == typeof o3) {
              var i2 = [];
              if (Array.isArray(e3)) for (var u2 = 0, c2 = e3.length; u2 < c2; u2++) o3.call(e3, e3[u2], u2) && i2.push.apply(i2, v(t3(e3, [u2].concat(v(a3)))));
              else for (var f2 in e3 || {}) o3.call(e3, e3[f2], f2) && i2.push.apply(i2, v(t3(e3, [f2].concat(v(a3)))));
              return i2;
            }
            var s2 = t3(void 0 !== e3 && e3[o3], a3);
            return s2 ? s2.map(function(t4) {
              return [o3].concat(v(t4));
            }) : [[o3]];
          }(t2, e2));
          try {
            for (o2.s(); !(n2 = o2.n()).done; ) {
              var a2 = n2.value;
              t2 = g(t2, a2, r2 ? r2(x(t2, a2)) : void 0);
            }
          } catch (t3) {
            o2.e(t3);
          } finally {
            o2.f();
          }
          return t2;
        }
        function a() {
          return (a = t(regeneratorRuntime.mark(function t2(e2, r2, n2) {
            var o2, a2, i2, u2;
            return regeneratorRuntime.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  return s(r2), t3.next = 3, h(e2, r2);
                case 3:
                  o2 = t3.sent, a2 = f(o2), t3.prev = 5, a2.s();
                case 7:
                  if ((i2 = a2.n()).done) {
                    t3.next = 23;
                    break;
                  }
                  if (u2 = i2.value, t3.t0 = g, t3.t1 = e2, t3.t2 = u2, n2) return t3.next = 15, n2(x(e2, u2));
                  t3.next = 18;
                  break;
                case 15:
                  t3.t3 = t3.sent, t3.next = 19;
                  break;
                case 18:
                  t3.t3 = void 0;
                case 19:
                  t3.t4 = t3.t3, e2 = (0, t3.t0)(t3.t1, t3.t2, t3.t4);
                case 21:
                  t3.next = 7;
                  break;
                case 23:
                  t3.next = 28;
                  break;
                case 25:
                  t3.prev = 25, t3.t5 = t3.catch(5), a2.e(t3.t5);
                case 28:
                  return t3.prev = 28, a2.f(), t3.finish(28);
                case 31:
                  return t3.abrupt("return", e2);
                case 32:
                case "end":
                  return t3.stop();
              }
            }, t2, null, [[5, 25, 28, 31]]);
          }))).apply(this, arguments);
        }
        function s(t2) {
          if (!Array.isArray(t2)) throw new Error("path must be an array");
        }
        r.updateInAsync = function(t2, e2, r2) {
          return a.apply(this, arguments);
        };
        var m = ["__proto__", "constructor", "prototype"];
        function h() {
          return i.apply(this, arguments);
        }
        function i() {
          return (i = t(regeneratorRuntime.mark(function t2(e2, r2) {
            var n2, o2, a2, i2, u2, c2, f2, s2;
            return regeneratorRuntime.wrap(function(t3) {
              for (; ; ) switch (t3.prev = t3.next) {
                case 0:
                  if (r2.length) {
                    t3.next = 2;
                    break;
                  }
                  return t3.abrupt("return");
                case 2:
                  if (n2 = b(r2), o2 = n2[0], a2 = n2.slice(1), "function" != typeof o2) {
                    t3.next = 43;
                    break;
                  }
                  if (i2 = [], !Array.isArray(e2)) {
                    t3.next = 25;
                    break;
                  }
                  u2 = 0, c2 = e2.length;
                case 7:
                  if (u2 < c2) return t3.next = 10, o2.call(e2, e2[u2], u2);
                  t3.next = 23;
                  break;
                case 10:
                  if (t3.t0 = t3.sent, t3.t0) return t3.t1 = i2.push, t3.t2 = i2, t3.t3 = v, t3.next = 17, h(e2, [u2].concat(v(a2)));
                  t3.next = 20;
                  break;
                case 17:
                  t3.t4 = t3.sent, t3.t5 = (0, t3.t3)(t3.t4), t3.t1.apply.call(t3.t1, t3.t2, t3.t5);
                case 20:
                  u2++, t3.next = 7;
                  break;
                case 23:
                  t3.next = 42;
                  break;
                case 25:
                  t3.t6 = regeneratorRuntime.keys(e2 || {});
                case 26:
                  if ((t3.t7 = t3.t6()).done) {
                    t3.next = 42;
                    break;
                  }
                  return f2 = t3.t7.value, t3.next = 30, o2.call(e2, e2[f2], f2);
                case 30:
                  if (t3.t8 = t3.sent, t3.t8) return t3.t9 = i2.push, t3.t10 = i2, t3.t11 = v, t3.next = 37, h(e2, [f2].concat(v(a2)));
                  t3.next = 40;
                  break;
                case 37:
                  t3.t12 = t3.sent, t3.t13 = (0, t3.t11)(t3.t12), t3.t9.apply.call(t3.t9, t3.t10, t3.t13);
                case 40:
                  t3.next = 26;
                  break;
                case 42:
                  return t3.abrupt("return", i2);
                case 43:
                  return t3.next = 45, h(void 0 !== e2 && e2[o2], a2);
                case 45:
                  return s2 = t3.sent, t3.abrupt("return", s2 ? s2.map(function(t4) {
                    return [o2].concat(v(t4));
                  }) : [[o2]]);
                case 47:
                case "end":
                  return t3.stop();
              }
            }, t2);
          }))).apply(this, arguments);
        }
        function x(t2, e2) {
          return e2.reduce(function(t3, e3) {
            return t3 && t3[e3];
          }, t2);
        }
        function g(t2, e2, r2) {
          if (!e2.length) return r2;
          var n2, o2 = b(e2), a2 = o2[0], i2 = o2.slice(1), u2 = void 0 !== t2 && t2[a2], c2 = t2;
          if (n2 = a2, m.includes(n2)) return t2;
          if ("string" != typeof a2 || "object" === l(c2) && !Array.isArray(c2) ? "number" != typeof a2 || Array.isArray(c2) || (c2 = []) : c2 = {}, "number" == typeof a2) {
            var f2 = g(u2, i2, r2);
            return void 0 === f2 ? void 0 === t2 ? t2 : (a2 in c2 && (c2 = v(c2)).splice(a2, 1), c2) : d(f2, u2) ? t2 : ((c2 = v(c2))[a2] = f2, c2);
          }
          var s2 = g(u2, i2, r2);
          return void 0 === s2 ? void 0 === t2 ? t2 : (a2 in c2 && delete (c2 = y({}, c2))[a2], c2) : d(s2, u2) ? t2 : y(y({}, c2), {}, p({}, a2, s2));
        }
        return r;
      });
    }
  });

  // src/external.umd/botframework-webchat-api/index.ts
  var require_botframework_webchat_api = __commonJS({
    "src/external.umd/botframework-webchat-api/index.ts"(exports, module) {
      module.exports = {
        hooks: globalThis.WebChat.hooks
      };
    }
  });

  // src/external.umd/botframework-webchat-api/decorator.ts
  var require_decorator = __commonJS({
    "src/external.umd/botframework-webchat-api/decorator.ts"(exports, module) {
      module.exports = globalThis.WebChat.decorator;
    }
  });

  // src/external.umd/botframework-webchat-component/decorator.ts
  var require_decorator2 = __commonJS({
    "src/external.umd/botframework-webchat-component/decorator.ts"(exports, module) {
      module.exports = globalThis.WebChat.decorator;
    }
  });

  // src/components/sendBox/SendBox.tsx
  var import_botframework_webchat_component13 = __toESM(require_botframework_webchat_component());
  var import_classnames11 = __toESM(require_classnames());
  var import_react36 = __toESM(require_react());

  // ../../node_modules/use-ref-from/lib/esmodules/useRefFrom.js
  var import_create = __toESM(require_create3());
  var import_react = __toESM(require_react());
  function useRefFrom(value) {
    var ref = (0, import_react.useRef)();
    var readOnlyRef = (0, import_react.useMemo)(function() {
      return (0, import_create.default)({}, {
        current: {
          get: function get() {
            return ref.current;
          }
        }
      });
    }, [ref]);
    ref.current = value;
    return readOnlyRef;
  }

  // src/components/icon/FluentIcon.tsx
  var import_internal = __toESM(require_internal());

  // ../../node_modules/valibot/dist/index.js
  var store;
  // @__NO_SIDE_EFFECTS__
  function getGlobalConfig(config2) {
    return {
      lang: config2?.lang ?? store?.lang,
      message: config2?.message,
      abortEarly: config2?.abortEarly ?? store?.abortEarly,
      abortPipeEarly: config2?.abortPipeEarly ?? store?.abortPipeEarly
    };
  }
  var store2;
  // @__NO_SIDE_EFFECTS__
  function getGlobalMessage(lang) {
    return store2?.get(lang);
  }
  var store3;
  // @__NO_SIDE_EFFECTS__
  function getSchemaMessage(lang) {
    return store3?.get(lang);
  }
  var store4;
  // @__NO_SIDE_EFFECTS__
  function getSpecificMessage(reference, lang) {
    return store4?.get(reference)?.get(lang);
  }
  // @__NO_SIDE_EFFECTS__
  function _stringify(input) {
    const type = typeof input;
    if (type === "string") {
      return `"${input}"`;
    }
    if (type === "number" || type === "bigint" || type === "boolean") {
      return `${input}`;
    }
    if (type === "object" || type === "function") {
      return (input && Object.getPrototypeOf(input)?.constructor?.name) ?? "null";
    }
    return type;
  }
  function _addIssue(context, label, dataset, config2, other) {
    const input = other && "input" in other ? other.input : dataset.value;
    const expected = other?.expected ?? context.expects ?? null;
    const received = other?.received ?? /* @__PURE__ */ _stringify(input);
    const issue = {
      kind: context.kind,
      type: context.type,
      input,
      expected,
      received,
      message: `Invalid ${label}: ${expected ? `Expected ${expected} but r` : "R"}eceived ${received}`,
      requirement: context.requirement,
      path: other?.path,
      issues: other?.issues,
      lang: config2.lang,
      abortEarly: config2.abortEarly,
      abortPipeEarly: config2.abortPipeEarly
    };
    const isSchema = context.kind === "schema";
    const message2 = other?.message ?? context.message ?? /* @__PURE__ */ getSpecificMessage(context.reference, issue.lang) ?? (isSchema ? /* @__PURE__ */ getSchemaMessage(issue.lang) : null) ?? config2.message ?? /* @__PURE__ */ getGlobalMessage(issue.lang);
    if (message2 !== void 0) {
      issue.message = typeof message2 === "function" ? (
        // @ts-expect-error
        message2(issue)
      ) : message2;
    }
    if (isSchema) {
      dataset.typed = false;
    }
    if (dataset.issues) {
      dataset.issues.push(issue);
    } else {
      dataset.issues = [issue];
    }
  }
  // @__NO_SIDE_EFFECTS__
  function _getStandardProps(context) {
    return {
      version: 1,
      vendor: "valibot",
      validate(value2) {
        return context["~run"]({ value: value2 }, /* @__PURE__ */ getGlobalConfig());
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function _isValidObjectKey(object22, key) {
    return Object.hasOwn(object22, key) && key !== "__proto__" && key !== "prototype" && key !== "constructor";
  }
  // @__NO_SIDE_EFFECTS__
  function _joinExpects(values2, separator) {
    const list = [...new Set(values2)];
    if (list.length > 1) {
      return `(${list.join(` ${separator} `)})`;
    }
    return list[0] ?? "never";
  }
  var ValiError = class extends Error {
    /**
     * Creates a Valibot error with useful information.
     *
     * @param issues The error issues.
     */
    constructor(issues) {
      super(issues[0].message);
      this.name = "ValiError";
      this.issues = issues;
    }
  };
  var EMOJI_REGEX = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex, regexp/no-dupe-disjunctions -- false positives
    new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}))*)+$", "u")
  );
  // @__NO_SIDE_EFFECTS__
  function check(requirement, message2) {
    return {
      kind: "validation",
      type: "check",
      reference: check,
      async: false,
      expects: null,
      requirement,
      message: message2,
      "~run"(dataset, config2) {
        if (dataset.typed && !this.requirement(dataset.value)) {
          _addIssue(this, "input", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function findItem(operation) {
    return {
      kind: "transformation",
      type: "find_item",
      reference: findItem,
      async: false,
      operation,
      "~run"(dataset) {
        dataset.value = dataset.value.find(this.operation);
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function integer(message2) {
    return {
      kind: "validation",
      type: "integer",
      reference: integer,
      async: false,
      expects: null,
      requirement: Number.isInteger,
      message: message2,
      "~run"(dataset, config2) {
        if (dataset.typed && !this.requirement(dataset.value)) {
          _addIssue(this, "integer", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function minValue(requirement, message2) {
    return {
      kind: "validation",
      type: "min_value",
      reference: minValue,
      async: false,
      expects: `>=${requirement instanceof Date ? requirement.toJSON() : /* @__PURE__ */ _stringify(requirement)}`,
      requirement,
      message: message2,
      "~run"(dataset, config2) {
        if (dataset.typed && !(dataset.value >= this.requirement)) {
          _addIssue(this, "value", dataset, config2, {
            received: dataset.value instanceof Date ? dataset.value.toJSON() : /* @__PURE__ */ _stringify(dataset.value)
          });
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function nonEmpty(message2) {
    return {
      kind: "validation",
      type: "non_empty",
      reference: nonEmpty,
      async: false,
      expects: "!0",
      message: message2,
      "~run"(dataset, config2) {
        if (dataset.typed && dataset.value.length === 0) {
          _addIssue(this, "length", dataset, config2, {
            received: "0"
          });
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function readonly() {
    return {
      kind: "transformation",
      type: "readonly",
      reference: readonly,
      async: false,
      "~run"(dataset) {
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function transform(operation) {
    return {
      kind: "transformation",
      type: "transform",
      reference: transform,
      async: false,
      operation,
      "~run"(dataset) {
        dataset.value = this.operation(dataset.value);
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function getFallback(schema, dataset, config2) {
    return typeof schema.fallback === "function" ? (
      // @ts-expect-error
      schema.fallback(dataset, config2)
    ) : (
      // @ts-expect-error
      schema.fallback
    );
  }
  // @__NO_SIDE_EFFECTS__
  function fallback(schema, fallback2) {
    return {
      ...schema,
      fallback: fallback2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        const outputDataset = schema["~run"](dataset, config2);
        return outputDataset.issues ? { typed: true, value: /* @__PURE__ */ getFallback(this, outputDataset, config2) } : outputDataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function getDefault(schema, dataset, config2) {
    return typeof schema.default === "function" ? (
      // @ts-expect-error
      schema.default(dataset, config2)
    ) : (
      // @ts-expect-error
      schema.default
    );
  }
  // @__NO_SIDE_EFFECTS__
  function is(schema, input) {
    return !schema["~run"]({ value: input }, { abortEarly: true }).issues;
  }
  // @__NO_SIDE_EFFECTS__
  function any() {
    return {
      kind: "schema",
      type: "any",
      reference: any,
      expects: "any",
      async: false,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset) {
        dataset.typed = true;
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function array(item, message2) {
    return {
      kind: "schema",
      type: "array",
      reference: array,
      expects: "Array",
      async: false,
      item,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        const input = dataset.value;
        if (Array.isArray(input)) {
          dataset.typed = true;
          dataset.value = [];
          for (let key = 0; key < input.length; key++) {
            const value2 = input[key];
            const itemDataset = this.item["~run"]({ value: value2 }, config2);
            if (itemDataset.issues) {
              const pathItem = {
                type: "array",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of itemDataset.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                dataset.issues?.push(issue);
              }
              if (!dataset.issues) {
                dataset.issues = itemDataset.issues;
              }
              if (config2.abortEarly) {
                dataset.typed = false;
                break;
              }
            }
            if (!itemDataset.typed) {
              dataset.typed = false;
            }
            dataset.value.push(itemDataset.value);
          }
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function custom(check22, message2) {
    return {
      kind: "schema",
      type: "custom",
      reference: custom,
      expects: "unknown",
      async: false,
      check: check22,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (this.check(dataset.value)) {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function function_(message2) {
    return {
      kind: "schema",
      type: "function",
      reference: function_,
      expects: "Function",
      async: false,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (typeof dataset.value === "function") {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function lazy(getter) {
    return {
      kind: "schema",
      type: "lazy",
      reference: lazy,
      expects: "unknown",
      async: false,
      getter,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        return this.getter(dataset.value)["~run"](dataset, config2);
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function literal(literal_, message2) {
    return {
      kind: "schema",
      type: "literal",
      reference: literal,
      expects: /* @__PURE__ */ _stringify(literal_),
      async: false,
      literal: literal_,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (dataset.value === this.literal) {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function looseObject(entries2, message2) {
    return {
      kind: "schema",
      type: "loose_object",
      reference: looseObject,
      expects: "Object",
      async: false,
      entries: entries2,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        const input = dataset.value;
        if (input && typeof input === "object") {
          dataset.typed = true;
          dataset.value = {};
          for (const key in this.entries) {
            const valueSchema = this.entries[key];
            if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
            valueSchema.default !== void 0) {
              const value2 = key in input ? (
                // @ts-expect-error
                input[key]
              ) : /* @__PURE__ */ getDefault(valueSchema);
              const valueDataset = valueSchema["~run"]({ value: value2 }, config2);
              if (valueDataset.issues) {
                const pathItem = {
                  type: "object",
                  origin: "value",
                  input,
                  key,
                  value: value2
                };
                for (const issue of valueDataset.issues) {
                  if (issue.path) {
                    issue.path.unshift(pathItem);
                  } else {
                    issue.path = [pathItem];
                  }
                  dataset.issues?.push(issue);
                }
                if (!dataset.issues) {
                  dataset.issues = valueDataset.issues;
                }
                if (config2.abortEarly) {
                  dataset.typed = false;
                  break;
                }
              }
              if (!valueDataset.typed) {
                dataset.typed = false;
              }
              dataset.value[key] = valueDataset.value;
            } else if (valueSchema.fallback !== void 0) {
              dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
            } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
              _addIssue(this, "key", dataset, config2, {
                input: void 0,
                expected: `"${key}"`,
                path: [
                  {
                    type: "object",
                    origin: "key",
                    input,
                    key,
                    // @ts-expect-error
                    value: input[key]
                  }
                ]
              });
              if (config2.abortEarly) {
                break;
              }
            }
          }
          if (!dataset.issues || !config2.abortEarly) {
            for (const key in input) {
              if (/* @__PURE__ */ _isValidObjectKey(input, key) && !(key in this.entries)) {
                dataset.value[key] = input[key];
              }
            }
          }
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function number(message2) {
    return {
      kind: "schema",
      type: "number",
      reference: number,
      expects: "number",
      async: false,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (typeof dataset.value === "number" && !isNaN(dataset.value)) {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function object(entries2, message2) {
    return {
      kind: "schema",
      type: "object",
      reference: object,
      expects: "Object",
      async: false,
      entries: entries2,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        const input = dataset.value;
        if (input && typeof input === "object") {
          dataset.typed = true;
          dataset.value = {};
          for (const key in this.entries) {
            const valueSchema = this.entries[key];
            if (key in input || (valueSchema.type === "exact_optional" || valueSchema.type === "optional" || valueSchema.type === "nullish") && // @ts-expect-error
            valueSchema.default !== void 0) {
              const value2 = key in input ? (
                // @ts-expect-error
                input[key]
              ) : /* @__PURE__ */ getDefault(valueSchema);
              const valueDataset = valueSchema["~run"]({ value: value2 }, config2);
              if (valueDataset.issues) {
                const pathItem = {
                  type: "object",
                  origin: "value",
                  input,
                  key,
                  value: value2
                };
                for (const issue of valueDataset.issues) {
                  if (issue.path) {
                    issue.path.unshift(pathItem);
                  } else {
                    issue.path = [pathItem];
                  }
                  dataset.issues?.push(issue);
                }
                if (!dataset.issues) {
                  dataset.issues = valueDataset.issues;
                }
                if (config2.abortEarly) {
                  dataset.typed = false;
                  break;
                }
              }
              if (!valueDataset.typed) {
                dataset.typed = false;
              }
              dataset.value[key] = valueDataset.value;
            } else if (valueSchema.fallback !== void 0) {
              dataset.value[key] = /* @__PURE__ */ getFallback(valueSchema);
            } else if (valueSchema.type !== "exact_optional" && valueSchema.type !== "optional" && valueSchema.type !== "nullish") {
              _addIssue(this, "key", dataset, config2, {
                input: void 0,
                expected: `"${key}"`,
                path: [
                  {
                    type: "object",
                    origin: "key",
                    input,
                    key,
                    // @ts-expect-error
                    value: input[key]
                  }
                ]
              });
              if (config2.abortEarly) {
                break;
              }
            }
          }
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function optional(wrapped, default_) {
    return {
      kind: "schema",
      type: "optional",
      reference: optional,
      expects: `(${wrapped.expects} | undefined)`,
      async: false,
      wrapped,
      default: default_,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (dataset.value === void 0) {
          if (this.default !== void 0) {
            dataset.value = /* @__PURE__ */ getDefault(this, dataset, config2);
          }
          if (dataset.value === void 0) {
            dataset.typed = true;
            return dataset;
          }
        }
        return this.wrapped["~run"](dataset, config2);
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function picklist(options, message2) {
    return {
      kind: "schema",
      type: "picklist",
      reference: picklist,
      expects: /* @__PURE__ */ _joinExpects(options.map(_stringify), "|"),
      async: false,
      options,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (this.options.includes(dataset.value)) {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function string(message2) {
    return {
      kind: "schema",
      type: "string",
      reference: string,
      expects: "string",
      async: false,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (typeof dataset.value === "string") {
          dataset.typed = true;
        } else {
          _addIssue(this, "type", dataset, config2);
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function undefinedable(wrapped, default_) {
    return {
      kind: "schema",
      type: "undefinedable",
      reference: undefinedable,
      expects: `(${wrapped.expects} | undefined)`,
      async: false,
      wrapped,
      default: default_,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        if (dataset.value === void 0) {
          if (this.default !== void 0) {
            dataset.value = /* @__PURE__ */ getDefault(this, dataset, config2);
          }
          if (dataset.value === void 0) {
            dataset.typed = true;
            return dataset;
          }
        }
        return this.wrapped["~run"](dataset, config2);
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function _subIssues(datasets) {
    let issues;
    if (datasets) {
      for (const dataset of datasets) {
        if (issues) {
          issues.push(...dataset.issues);
        } else {
          issues = dataset.issues;
        }
      }
    }
    return issues;
  }
  // @__NO_SIDE_EFFECTS__
  function union(options, message2) {
    return {
      kind: "schema",
      type: "union",
      reference: union,
      expects: /* @__PURE__ */ _joinExpects(
        options.map((option) => option.expects),
        "|"
      ),
      async: false,
      options,
      message: message2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        let validDataset;
        let typedDatasets;
        let untypedDatasets;
        for (const schema of this.options) {
          const optionDataset = schema["~run"]({ value: dataset.value }, config2);
          if (optionDataset.typed) {
            if (optionDataset.issues) {
              if (typedDatasets) {
                typedDatasets.push(optionDataset);
              } else {
                typedDatasets = [optionDataset];
              }
            } else {
              validDataset = optionDataset;
              break;
            }
          } else {
            if (untypedDatasets) {
              untypedDatasets.push(optionDataset);
            } else {
              untypedDatasets = [optionDataset];
            }
          }
        }
        if (validDataset) {
          return validDataset;
        }
        if (typedDatasets) {
          if (typedDatasets.length === 1) {
            return typedDatasets[0];
          }
          _addIssue(this, "type", dataset, config2, {
            issues: /* @__PURE__ */ _subIssues(typedDatasets)
          });
          dataset.typed = true;
        } else if (untypedDatasets?.length === 1) {
          return untypedDatasets[0];
        } else {
          _addIssue(this, "type", dataset, config2, {
            issues: /* @__PURE__ */ _subIssues(untypedDatasets)
          });
        }
        return dataset;
      }
    };
  }
  function parse(schema, input, config2) {
    const dataset = schema["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config2));
    if (dataset.issues) {
      throw new ValiError(dataset.issues);
    }
    return dataset.value;
  }
  // @__NO_SIDE_EFFECTS__
  function pipe(...pipe2) {
    return {
      ...pipe2[0],
      pipe: pipe2,
      get "~standard"() {
        return /* @__PURE__ */ _getStandardProps(this);
      },
      "~run"(dataset, config2) {
        for (const item of pipe2) {
          if (item.kind !== "metadata") {
            if (dataset.issues && (item.kind === "schema" || item.kind === "transformation")) {
              dataset.typed = false;
              break;
            }
            if (!dataset.issues || !config2.abortEarly && !config2.abortPipeEarly) {
              dataset = item["~run"](dataset, config2);
            }
          }
        }
        return dataset;
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function safeParse(schema, input, config2) {
    const dataset = schema["~run"]({ value: input }, /* @__PURE__ */ getGlobalConfig(config2));
    return {
      typed: dataset.typed,
      success: !dataset.issues,
      output: dataset.value,
      issues: dataset.issues
    };
  }

  // ../react-valibot/dist/botframework-webchat-react-valibot.mjs
  function validateProps(propsSchema, props, isolationMode) {
    if (typeof props === "undefined") {
      return;
    }
    if (false) {
      return props;
    }
    if (isolationMode !== "strict" && safeParse(propsSchema, props).success) {
      return props;
    }
    try {
      return parse(propsSchema, props);
    } catch (error) {
      const validationError = new Error("botframework-webchat: Validation error while parsing props.");
      console.error(validationError, error && typeof error === "object" && "issues" in error && error.issues);
      validationError.cause = error;
      throw validationError;
    }
  }

  // ../styles/dist/botframework-webchat-styles.react.mjs
  var import_react2 = __toESM(require_react(), 1);
  function useStyles(styles2) {
    return (0, import_react2.useMemo)(
      () => Object.freeze(
        Object.fromEntries(
          Object.entries(styles2).map(([baseClassName, resultClassName]) => [
            baseClassName,
            `${baseClassName} ${resultClassName}`
          ])
        )
      ),
      [styles2]
    );
  }
  var useStyles_default = useStyles;

  // src/components/icon/FluentIcon.tsx
  var import_classnames = __toESM(require_classnames());
  var import_react4 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\icon\FluentIcon.module.css?css_module
  var classes = { "icon--info-16": "wwIplWq_icon--info-16", "icon--keypad": "wwIplWq_icon--keypad", "appearance--text": "wwIplWq_appearance--text", "icon--send": "wwIplWq_icon--send", "icon--microphone": "wwIplWq_icon--microphone", "icon--add-document": "wwIplWq_icon--add-document", "icon--attachment": "wwIplWq_icon--attachment", "icon--audio": "wwIplWq_icon--audio", "fluent-icon": "wwIplWq_fluent-icon" };
  var FluentIcon_module_default = classes;
  var _icon__info_160 = classes["icon--info-16"];
  var _icon__keypad0 = classes["icon--keypad"];
  var _appearance__text0 = classes["appearance--text"];
  var _icon__send0 = classes["icon--send"];
  var _icon__microphone0 = classes["icon--microphone"];
  var _icon__add_document0 = classes["icon--add-document"];
  var _icon__attachment0 = classes["icon--attachment"];
  var _icon__audio0 = classes["icon--audio"];
  var _fluent_icon0 = classes["fluent-icon"];

  // src/components/icon/FluentIcon.tsx
  var baseFluentIconPropsSchema = pipe(
    object({
      className: optional(string()),
      mask: optional(string())
    }),
    readonly()
  );
  function BaseFluentIcon(props) {
    const { className } = validateProps(baseFluentIconPropsSchema, props);
    const classNames = useStyles_default(FluentIcon_module_default);
    const maskStyle = (0, import_react4.useMemo)(
      () => props.mask ? { "--webchat__fluent-icon--mask": `url(${JSON.stringify(props.mask)})` } : {},
      [props.mask]
    );
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: (0, import_classnames.default)(classNames["fluent-icon"], className), style: maskStyle });
  }
  var { component: FluentIcon, modifierPropsSchema } = (0, import_internal.createIconComponent)(
    FluentIcon_module_default,
    ["appearance", "icon"],
    BaseFluentIcon
  );
  FluentIcon.displayName = "FluentIcon";
  var fluentIconPropsSchema = pipe(
    object({
      ...baseFluentIconPropsSchema.entries,
      ...modifierPropsSchema.entries
    }),
    readonly()
  );
  var FluentIcon_default = (0, import_react4.memo)(FluentIcon);

  // ../styles/dist/botframework-webchat-styles.mjs
  function createStyle(content, origin) {
    const style = document.createElement("style");
    style.append(document.createTextNode(content));
    if (origin) {
      style.dataset["webchatInjected"] = origin;
    }
    return style;
  }
  function makeCreateStyles(...contents) {
    return function createStyles(origin) {
      if (!globalThis.document) {
        throw new Error("Unable to create styles: document is not defined");
      }
      return contents.map((content) => createStyle(content, origin));
    };
  }

  // src/styles/createStyles.ts
  var fluentStyleContent = "/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/icon/FluentIcon.module_built.css */\n.webchat-fluent .wwIplWq_fluent-icon {\n  min-width: var(--webchat__fluent-icon--size, 1em);\n  min-height: var(--webchat__fluent-icon--size, 1em);\n  background-image: var(--webchat__fluent-icon--image, none);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: var(--webchat__fluent-icon--size, 1em);\n  background-color: var(--webchat__fluent-icon--color, transparent);\n  -webkit-mask-image: var(--webchat__fluent-icon--mask);\n  -webkit-mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-size: var(--webchat__fluent-icon--size, 1em);\n  mask-image: var(--webchat__fluent-icon--mask);\n  mask-position: center;\n  mask-repeat: no-repeat;\n  mask-size: var(--webchat__fluent-icon--size, 1em);\n  place-self: center;\n}\n.webchat .wwIplWq_appearance--text {\n  --webchat__fluent-icon--color: currentColor;\n}\n.webchat .wwIplWq_icon--add-document {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 2a2 2 0 0 0-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--attachment {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m4.83 10.48 5.65-5.65a3 3 0 0 1 4.25 4.24L8 15.8a1.5 1.5 0 0 1-2.12-2.12l6-6.01a.5.5 0 1 0-.7-.71l-6 6.01a2.5 2.5 0 0 0 3.53 3.54l6.71-6.72a4 4 0 1 0-5.65-5.66L4.12 9.78a.5.5 0 0 0 .7.7Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--info-16 {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.5 7.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3Zm.25-2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--send {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.18 2.11a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 0 1 0 .9l-15 7.5a.5.5 0 0 1-.7-.58L3.98 10 2.02 2.63a.5.5 0 0 1 .16-.52Zm2.7 8.39-1.61 6.06L16.38 10 3.27 3.44 4.88 9.5h6.62a.5.5 0 1 1 0 1H4.88Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--keypad {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM14 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM14 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--microphone {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M5.5 9.99998C5.5 9.72384 5.27614 9.49998 5 9.49998C4.72386 9.49998 4.5 9.72384 4.5 9.99998C4.5 12.869 6.69675 15.2249 9.5 15.4776V17.5C9.5 17.7761 9.72386 18 10 18C10.2761 18 10.5 17.7761 10.5 17.5V15.4776C13.3033 15.2249 15.5 12.869 15.5 9.99998C15.5 9.72384 15.2761 9.49998 15 9.49998C14.7239 9.49998 14.5 9.72384 14.5 9.99998C14.5 12.4853 12.4853 14.5 10 14.5C7.51472 14.5 5.5 12.4853 5.5 9.99998ZM13 10.0007C12.9996 11.6573 11.6566 13 10 13C8.34315 13 7 11.6568 7 9.99998V5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5V10.0007Z\"/></svg>');\n}\n.webchat .wwIplWq_icon--audio {\n  --webchat__fluent-icon--mask: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M10 2C10.4142 2 10.75 2.33579 10.75 2.75V17.25C10.75 17.6642 10.4142 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25V2.75C9.25 2.33579 9.58579 2 10 2ZM13.75 5C14.1642 5 14.5 5.33579 14.5 5.75V14.25C14.5 14.6642 14.1642 15 13.75 15C13.3358 15 13 14.6642 13 14.25V5.75C13 5.33579 13.3358 5 13.75 5ZM7 5.75C7 5.33579 6.66421 5 6.25 5C5.83579 5 5.5 5.33579 5.5 5.75V14.25C5.5 14.6642 5.83579 15 6.25 15C6.66421 15 7 14.6642 7 14.25V5.75ZM17.25 8C17.6642 8 18 8.33579 18 8.75V11.25C18 11.6642 17.6642 12 17.25 12C16.8358 12 16.5 11.6642 16.5 11.25V8.75C16.5 8.33579 16.8358 8 17.25 8ZM3.5 8.75C3.5 8.33579 3.16421 8 2.75 8C2.33579 8 2 8.33579 2 8.75V11.25C2 11.6642 2.33579 12 2.75 12C3.16421 12 3.5 11.6642 3.5 11.25V8.75Z\"/></svg>');\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/dropZone/DropZone.module_built.css */\n.webchat-fluent .w_MplrG_sendbox__attachment-drop-zone {\n  background-color: var(--webchat-colorNeutralBackground4);\n  border-radius: inherit;\n  cursor: copy;\n  transition: all var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n  place-content: center;\n  place-items: center;\n  gap: 8px;\n  display: grid;\n  position: absolute;\n  inset: 0;\n}\n.webchat-fluent .w_MplrG_sendbox__attachment-drop-zone--droppable {\n  background-color: var(--webchat-colorBrandBackground2Hover);\n}\n.webchat-fluent .w_MplrG_sendbox__attachment-drop-zone-icon {\n  pointer-events: none;\n  font-size: 36px;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/preChatActivity/PreChatMessageActivity.module_built.css */\n.webchat-fluent .wVBFYeW_pre-chat-message-activity {\n  box-sizing: border-box;\n  gap: var(--webchat-spacingHorizontalXXXL);\n  padding: var(--webchat-spacingHorizontalXXXL) var(--webchat-spacingHorizontalM);\n  grid-template-rows: auto auto;\n  grid-template-areas: \"body\" \"toolbar\";\n  display: grid;\n  position: relative;\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body {\n  font-family: var(--webchat-fontFamilyBase);\n  font-size: var(--webchat-fontSizeBase300);\n  font-weight: var(--webchat-fontWeightRegular);\n  align-items: center;\n  gap: var(--webchat-spacingVerticalXS);\n  line-height: var(--webchat-lineHeightBase300);\n  text-align: center;\n  flex-flow: column;\n  grid-area: body;\n  display: flex;\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body--blueprint {\n  opacity: .65;\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body--blueprint .wVBFYeW_pre-chat-message-activity__body-avatar {\n  filter: grayscale();\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body-avatar {\n  border-radius: var(--webchat-borderRadiusMedium);\n  height: 64px;\n  margin-block-end: var(--webchat-spacingVerticalM);\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body-title {\n  color: var(--webchat-colorNeutralForeground1);\n  font-family: inherit;\n  font-size: var(--webchat-fontSizeHero700);\n  font-weight: var(--webchat-fontWeightSemibold);\n  line-height: var(--webchat-lineHeightHero700);\n  overflow-wrap: anywhere;\n  margin: 0;\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__body-subtitle {\n  color: var(--webchat-colorNeutralForeground1);\n  font-size: var(--webchat-fontSizeBase300);\n  line-height: var(--webchat-lineHeightBase300);\n  overflow-wrap: anywhere;\n}\n.webchat-fluent .wVBFYeW_pre-chat-message-activity__toolbar {\n  grid-area: toolbar;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/preChatActivity/StarterPromptsCardAction.module_built.css */\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--webchat-colorNeutralBackground1);\n  box-shadow: var(--webchat-shadow2);\n  color: var(--webchat-colorNeutralForeground1);\n  cursor: pointer;\n  gap: var(--webchat-spacingVerticalS);\n  text-align: left;\n  transition: background-color var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n  -webkit-user-select: none;\n  user-select: none;\n  border: 0;\n  border-radius: 16px;\n  grid-template: \"title\" \"subtitle\" 1fr / 1fr;\n  padding: 16px 20px;\n  display: grid;\n  overflow: hidden;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:has(.wl8Upuq_pre-chat-message-activity__card-action-image) {\n  grid-template-columns: 20px 1fr;\n  grid-template-areas: \"image title\" \"empty subtitle\";\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty {\n  row-gap: 14px;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box[aria-disabled=true],\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty {\n  cursor: default;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box[aria-disabled=true]:not(:empty) {\n  background-color: var(--webchat-colorNeutralBackgroundDisabled);\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:hover:not([aria-disabled=true], :empty) {\n  background-color: var(--webchat-colorNeutralBackground1Hover);\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:active:not([aria-disabled=true], :empty) {\n  background-color: var(--webchat-colorNeutralBackground1Pressed);\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:focus-visible {\n  outline: solid 2px var(--webchat-colorStrokeFocus2);\n  outline-offset: -2px;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:after,\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:before {\n  background-attachment: fixed;\n  background-image:\n    linear-gradient(\n      -90deg,\n      var(--webchat-colorNeutralStencil1) 0%,\n      var(--webchat-colorNeutralStencil2) 50%,\n      var(--webchat-colorNeutralStencil1) 100%);\n  content: \"\";\n  background-size: 300% 100%;\n  animation: 3s linear infinite blueprintAnimation;\n  display: block;\n}\n@media (prefers-reduced-motion: reduce) {\n  .webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:after,\n  .webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:before {\n    animation-play-state: paused;\n    animation-delay: -1s;\n  }\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:dir(rtl):empty:after,\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:dir(rtl):empty:before {\n  animation-direction: reverse;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:after {\n  border-radius: 16px;\n  width: 100%;\n  height: 16px;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-box:empty:before {\n  border-radius: 18px;\n  width: 66%;\n  height: 18px;\n}\n@keyframes blueprintAnimation {\n  from {\n    background-position-x: 0%;\n  }\n  to {\n    background-position-x: -300%;\n  }\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-image {\n  color: var(--webchat-colorNeutralForeground4);\n  grid-area: image;\n  font-size: 20px;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-subtitle {\n  font-family: var(--webchat-fontFamilyBase);\n  font-size: 14px;\n  font-weight: var(--webchat-fontWeightRegular);\n  pointer-events: none;\n  grid-area: subtitle;\n  line-height: 20px;\n}\n.webchat-fluent .wl8Upuq_pre-chat-message-activity__card-action-title {\n  font-family: var(--webchat-fontFamilyBase);\n  font-size: 14px;\n  font-weight: var(--webchat-fontWeightSemibold);\n  grid-area: title;\n  line-height: 20px;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/preChatActivity/StarterPromptsToolbar.module_built.css */\n.webchat-fluent .wnoev2q_pre-chat-message-activity__card-action-toolbar {\n  container: webchat-container / inline-size;\n}\n.webchat-fluent .wnoev2q_pre-chat-message-activity__card-action-toolbar-grid {\n  gap: var(--webchat-spacingHorizontalM);\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 0;\n  display: grid;\n}\n@container webchat-container (width <= 480px) {\n  .webchat-fluent .wnoev2q_pre-chat-message-activity__card-action-toolbar-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/activity/ActivityDecorator.module_built.css */\n.webchat-fluent .wKDnd3G_activity-decorator {\n  font-family: var(--webchat__font--primary);\n  --webchat__bubble--inline-padding: var(--webchat-spacingHorizontalL);\n  --webchat__bubble--block-padding: var(--webchat-spacingVerticalM);\n  --webchat__bubble--min-height: var(--webchat-bubble-minHeight);\n  --webchat__bubble--max-width: var(--webchat-bubble-maxWidth);\n  --webchat__bubble--min-width: var(--webchat-bubble-minWidth);\n  --webchat-bubble-maxWidth: var(--bubble-maxWidth, max(450px, 75%));\n  --webchat-bubble-minWidth: var(--bubble-minWidth, auto);\n  --webchat-bubble-minHeight: var(--bubble-minHeight, 36px);\n  --webchat-externalLink-mask: var(--externalLink-mask, var(--webchat__icon-url--external-link) center center / 10px 10px);\n  --webchat-externalLink-maxWidth: var(--externalLink-maxWidth, 204px);\n  display: contents;\n}\n.webchat-fluent .wKDnd3G_activity-decorator:has(.stacked-layout .webchat__bubble--from-user) {\n  --webchat__bubble--background-color: var(--webchat-colorBrandBackground2);\n  --webchat__bubble--block-padding: var(--webchat-spacingVerticalS);\n  --webchat__bubble--min-width: auto;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-fluent {\n  --webchat__bubble--background-color: var(--webchat-colorNeutralBackground1);\n  --webchat__bubble--border-radius: var(--webchat-borderRadiusXLarge);\n  --webchat__bubble--box-shadow: var(--webchat-shadow4);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot {\n  --webchat__bubble--border-radius: var(--webchat-borderRadiusXLarge);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot .webchat__activity-status {\n  margin: 0 0 var(--webchat-spacingHorizontalXXS);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot .stacked-layout__status {\n  order: -1;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:has(.webchat__bubble--from-user) .webchat__bubble {\n  margin-block-end: var(--webchat-spacingVerticalM);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot .webchat__bubble .webchat__text-content .webchat__text-content__generated-badge {\n  display: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) {\n  --webchat__bubble--block-padding: 0;\n  --webchat__bubble--border-radius: var(--webchat-borderRadiusMedium);\n  --webchat__bubble--inline-padding: 0;\n  --webchat__bubble--max-width: 100%;\n  --webchat__bubble--min-height: 20px;\n  gap: var(--webchat-spacingVerticalS);\n  margin-inline: var(--webchat-spacingHorizontalM);\n  padding: var(--webchat-spacingVerticalMNudge) var(--webchat-spacingHorizontalM) var(--webchat-spacingVerticalM);\n  flex-flow: column;\n  display: flex;\n  position: relative;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .stacked-layout {\n  margin: 0;\n  position: static;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .webchat__bubble {\n  width: var(--webchat__bubble--max-width);\n  position: static;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .webchat__bubble .webchat__bubble__content {\n  gap: var(--webchat-spacingVerticalS);\n  margin-block: calc(var(--webchat-spacingVerticalS) * -1);\n  margin-inline: 20px calc(var(--webchat-spacingHorizontalS) * -1);\n  padding-block: var(--webchat-spacingVerticalS);\n  padding-inline: var(--webchat-spacingHorizontalS);\n  flex-direction: column;\n  display: flex;\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .webchat__bubble .collapsible-content .collapsible-content__content .stacked-layout__attachment-list {\n  margin-block-start: var(--webchat-spacingVerticalS);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .webchat__bubble .collapsible-content .collapsible-content__content .stacked-layout__attachment {\n  max-width: var(--webchat__bubble--max-width);\n}\n.webchat-fluent .wKDnd3G_activity-decorator.wKDnd3G_variant-copilot:not(:has(.webchat__bubble--from-user)) .stacked-layout__status {\n  display: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__basic-transcript__activity-body:not(:empty) {\n  padding-block-end: var(--webchat-spacingVerticalXL);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout {\n  margin-inline: var(--webchat-spacingHorizontalMNudge);\n  flex-flow: column;\n  display: flex;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .stacked-layout__title {\n  font-size: var(--webchat-fontSizeBase400);\n  line-height: var(--webchat-lineHeightBase400);\n  color: var(--webchat-colorNeutralForeground4);\n  margin: var(--webchat__bubble--block-padding) var(--webchat__bubble--inline-padding);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .stacked-layout__attachment-row {\n  margin-block-start: var(--webchat-spacingVerticalMNudge);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout.stacked-layout--no-message .stacked-layout__attachment-row {\n  margin-block-start: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .stacked-layout__content:has(.webchat__bubble) {\n  max-width: 100%;\n  overflow: visible;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .stacked-layout__status {\n  font-size: var(--webchat__font-size--small);\n  line-height: var(--webchat__line-height--small);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble {\n  max-width: min(var(--webchat__bubble--max-width), 100%);\n  min-width: var(--webchat__bubble--min-width);\n  overflow: visible;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble:has(.activity-loader) .webchat__bubble__content {\n  box-shadow: none;\n  background: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__bubble__content {\n  background-color: var(--webchat__bubble--background-color);\n  border-radius: var(--webchat__bubble--border-radius);\n  box-shadow: var(--webchat__bubble--box-shadow);\n  box-sizing: border-box;\n  color: var(--webchat-colorNeutralForeground1);\n  max-width: 100%;\n  min-height: var(--webchat__bubble--min-height);\n  border-width: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__text-content {\n  font-size: var(--webchat__font-size--medium);\n  line-height: var(--webchat__line-height--medium);\n  min-height: auto;\n  padding-block: var(--webchat__bubble--block-padding);\n  padding-inline: var(--webchat__bubble--inline-padding);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__text-content:empty {\n  padding-block-end: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__text-content + .webchat__text-content {\n  margin-top: calc(var(--webchat__bubble--block-padding) * -1);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__text-content__generated-badge {\n  background-color: var(--webchat-colorNeutralBackground5);\n  border-radius: var(--webchat-borderRadiusMedium);\n  box-sizing: border-box;\n  color: var(--webchat-colorNeutralForeground3);\n  cursor: default;\n  font-size: var(--webchat-fontSizeBase100);\n  height: 16px;\n  line-height: var(--webchat-lineHeightBase100);\n  padding-inline: var(--webchat-spacingHorizontalXS);\n  align-self: flex-start;\n  align-items: center;\n  display: inline-flex;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__fileContent__badge {\n  cursor: default;\n  font-size: var(--webchat-fontSizeBase300);\n  line-height: var(--webchat-lineHeightBase300);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__fileContent__badge .webchat__fileContent__fileName {\n  color: var(--webchat-colorBrandForegroundLink);\n  font-family: inherit;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__fileContent__badge .webchat__fileContent__size {\n  color: var(--webchat-colorNeutralForeground2);\n  font-family: inherit;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .webchat__fileContent__downloadIcon {\n  color: var(--webchat-colorBrandForegroundLink);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__summary {\n  margin-block: var(--webchat__bubble--block-padding);\n  margin-inline: var(--webchat__bubble--inline-padding);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__summary:focus-visible {\n  border-radius: var(--webchat-borderRadiusSmall);\n  outline-offset: 4px;\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__content {\n  margin-block: 0 var(--webchat__bubble--block-padding);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__content .stacked-layout__attachment-list {\n  gap: var(--webchat-spacingVerticalS);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__content .stacked-layout__attachment-row {\n  margin: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .collapsible-content .collapsible-content__content .stacked-layout__attachment-row .webchat__text-content {\n  padding-block: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .code-block-content {\n  border-radius: var(--webchat-borderRadiusXLarge);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1);\n  font-size: var(--webchat-fontSizeBase300);\n  font-weight: var(--webchat-fontWeightRegular);\n  margin-block: 0;\n  margin-inline: var(--webchat__bubble--inline-padding);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .code-block-content .code-block-content__header {\n  padding: var(--webchat-spacingVerticalM) var(--webchat-spacingHorizontalL);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .code-block-content .code-block-content__code-block {\n  padding-block: var(--webchat-spacingVerticalM);\n  padding-inline: var(--webchat-spacingHorizontalL) var(--webchat-spacingHorizontalS);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .stacked-layout .webchat__bubble .code-block-content .webchat__code-block-copy-button {\n  --webchat__code-block__copy-button--color: var(--webchat-colorNeutralForeground1);\n  --webchat__code-block__copy-button--background: var(--webchat-colorNeutralBackground3);\n  margin-block-start: var(--webchat-spacingVerticalM);\n  margin-inline-end: var(--webchat-spacingHorizontalL);\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier) {\n  color: var(--webchat-colorBrandForegroundLink);\n  text-decoration-color: #0000;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier):target {\n  color: var(--webchat-colorBrandForegroundLinkSelected);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier):hover {\n  color: var(--webchat-colorBrandForegroundLinkHover);\n  text-decoration: underline 1px;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier):active {\n  color: var(--webchat-colorBrandForegroundLinkPressed);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier):focus-visible {\n  text-decoration: underline 1px double var(--webchat-colorStrokeFocus2);\n  outline: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown a[href]:not(.webchat__render-markdown__pure-identifier) .webchat__render-markdown__external-link-icon {\n  -webkit-mask: var(--webchat__icon-url--external-link) no-repeat;\n  mask: var(--webchat__icon-url--external-link) no-repeat;\n  background: currentColor;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation,\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier {\n  background-color: var(--webchat-colorNeutralBackground3);\n  border-radius: var(--webchat-borderRadiusMedium);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke2);\n  box-sizing: border-box;\n  color: var(--webchat-colorNeutralForeground2);\n  font-size: var(--webchat-fontSizeBase100);\n  font-weight: var(--webchat-fontWeightSemibold);\n  min-height: 12.4px;\n  margin-left: var(--webchat-spacingHorizontalXXS);\n  margin-right: var(--webchat-spacingHorizontalXXS);\n  min-width: 14px;\n  transition: all var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n  vertical-align: calc((var(--webchat-lineHeightBase100) - var(--webchat-fontSizeBase100)) / 2);\n  justify-content: center;\n  align-items: center;\n  line-height: 12.4px;\n  text-decoration: none;\n  display: inline-flex;\n}\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier):hover {\n  background-color: var(--webchat-colorBrandBackground2Hover);\n  border-color: var(--webchat-colorBrandStroke2Hover);\n  color: var(--webchat-colorBrandForeground2Hover);\n  cursor: pointer;\n}\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier):hover:active {\n  background-color: var(--webchat-colorBrandBackground2Pressed);\n  border-color: var(--webchat-colorBrandStroke2Pressed);\n  color: var(--webchat-colorBrandForeground2Pressed);\n}\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier):before,\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier):after {\n  all: unset;\n}\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier):has(.webchat__render-markdown__external-link-icon) {\n  padding-inline: 3px;\n}\n:is(.webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__citation, .webchat-fluent .wKDnd3G_activity-decorator .webchat__render-markdown .webchat__render-markdown__pure-identifier) .webchat__render-markdown__external-link-icon {\n  height: .7em;\n  -webkit-mask: var(--webchat__icon-url--external-link) no-repeat;\n  mask: var(--webchat__icon-url--external-link) no-repeat;\n  background: currentColor;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions__header {\n  border-radius: var(--webchat-borderRadiusMedium);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions__header .webchat__link-definitions__header-text {\n  color: var(--webchat-colorNeutralForeground3);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions__header .webchat__link-definitions__message-sensitivity-label-text {\n  color: var(--webchat-colorNeutralForeground4);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions__header .webchat__link-definitions__header-chevron {\n  color: var(--webchat-colorNeutralForeground3);\n  font-size: var(--webchat__font-size--small);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions__header:focus-visible {\n  outline-offset: 1px;\n  outline: var(--webchat-strokeWidthThin) solid var(--webchat-colorStrokeFocus2);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions {\n  --webchat__citation__external-link--mask: var(--webchat-externalLink-mask);\n  --webchat__citation__link--max-width: var(--webchat-externalLink-maxWidth);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list {\n  color: var(--webchat__color--subtle);\n  gap: var(--webchat-spacingHorizontalS);\n  flex-flow: wrap;\n  display: flex;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item {\n  border-radius: var(--webchat-borderRadiusMedium);\n  max-width: var(--webchat__citation__link--max-width);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-box {\n  background-color: var(--webchat-colorNeutralBackground3);\n  border-radius: var(--webchat-borderRadiusMedium);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke2);\n  box-sizing: border-box;\n  color: currentColor;\n  font-size: var(--webchat__font-size--small);\n  height: 24px;\n  padding-inline-end: var(--webchat-spacingHorizontalS);\n  display: inline-flex;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-body {\n  gap: var(--webchat-spacingHorizontalSNudge);\n  min-width: 0;\n  padding: 0;\n  font-family: inherit;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__badge {\n  color: currentColor;\n  font-size: var(--webchat-fontSizeBase100);\n  font-weight: var(--webchat-fontWeightSemibold);\n  line-height: var(--webchat-lineHeightBase100);\n  text-align: center;\n  background-color: #0000;\n  border: none;\n  border-radius: 0;\n  align-self: center;\n  min-width: 20px;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__badge:after {\n  border-right: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke2);\n  content: \"\";\n  width: 0;\n  height: 16px;\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-main-text {\n  gap: var(--webchat-spacingHorizontalXS);\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-text {\n  color: currentColor;\n  text-overflow: ellipsis;\n  text-decoration: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-main-text:has(.webchat__link-definitions__open-in-new-window-icon):before {\n  color: currentColor;\n  content: \"\";\n  font-size: var(--webchat-fontSizeBase400);\n  height: 1em;\n  -webkit-mask: var(--webchat__citation__external-link--mask) no-repeat;\n  mask: var(--webchat__citation__external-link--mask) no-repeat;\n  background: currentColor;\n  flex: none;\n  align-self: center;\n  width: 1em;\n  padding: 0;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__list-item-badge {\n  display: none;\n}\n.webchat-fluent .wKDnd3G_activity-decorator .webchat__link-definitions .webchat__link-definitions__open-in-new-window-icon {\n  display: none;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/activity/CopilotMessageHeader.module_built.css */\n.webchat-fluent .wV7TleG_copilot-message-header {\n  box-sizing: border-box;\n  cursor: default;\n  align-items: center;\n  gap: var(--webchat-spacingHorizontalS);\n  max-width: var(--webchat__bubble--max-width);\n  flex-wrap: nowrap;\n  display: flex;\n}\n.webchat-fluent .wV7TleG_copilot-message-header__avatar {\n  aspect-ratio: 1;\n  background-color: var(--background-color);\n  border-radius: var(--webchat-borderRadiusSmall);\n  width: 20px;\n}\n.webchat-fluent .wV7TleG_copilot-message-header__title {\n  font-size: var(--webchat-fontSizeBase300);\n  font-weight: var(--webchat-fontWeightSemibold);\n  line-height: var(--webchat-lineHeightBase300);\n  text-overflow: ellipsis;\n  text-wrap: nowrap;\n  overflow: hidden;\n}\n.webchat-fluent .wV7TleG_copilot-message-header__ai-generated-content {\n  background-color: var(--webchat-colorNeutralBackground5);\n  border-radius: var(--webchat-borderRadiusMedium);\n  color: var(--webchat-colorNeutralForeground3);\n  font-size: var(--webchat-fontSizeBase100);\n  height: 20px;\n  line-height: var(--webchat-lineHeightBase100);\n  padding-inline: var(--webchat-spacingHorizontalXS);\n  flex: none;\n  align-items: center;\n  display: flex;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/suggestedActions/SuggestedAction.module_built.css */\n.webchat-fluent .whTKh-W_suggested-action {\n  border-radius: var(--webchat-borderRadiusXLarge);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorBrandStroke2);\n  color: currentColor;\n  cursor: pointer;\n  font-family: var(--webchat__font--primary);\n  font-size: var(--webchat-fontSizeBase200);\n  align-items: center;\n  gap: var(--webchat-spacingHorizontalXS);\n  padding: var(--webchat-spacingVerticalXS) var(--webchat-spacingHorizontalS);\n  text-align: start;\n  transition: all var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n  background: none;\n  display: flex;\n}\n@media (hover: hover) {\n  .webchat-fluent .whTKh-W_suggested-action:not([aria-disabled=true]):hover {\n    background-color: var(--webchat-colorBrandBackground2Hover);\n    color: var(--webchat-colorBrandForeground2Hover);\n  }\n}\n.webchat-fluent .whTKh-W_suggested-action:not([aria-disabled=true]):active {\n  background-color: var(--webchat-colorBrandBackground2Pressed);\n  color: var(--webchat-colorBrandForeground2Pressed);\n}\n.webchat-fluent .whTKh-W_suggested-action[aria-disabled=true] {\n  color: var(--webchat-colorNeutralForegroundDisabled);\n  cursor: not-allowed;\n}\n.webchat-fluent .whTKh-W_suggested-action__image {\n  font-size: var(--webchat-fontSizeBase200);\n  width: 1em;\n  height: 1em;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/suggestedActions/SuggestedActions.module_built.css */\n.webchat-fluent .wmPEMWG_suggested-actions {\n  flex-direction: column;\n  align-self: flex-end;\n  align-items: flex-end;\n  gap: 8px;\n  display: flex;\n}\n.webchat-fluent .wmPEMWG_suggested-actions:not(:empty) {\n  padding-block-end: 8px;\n  padding-inline-start: 4px;\n}\n.webchat-fluent .wmPEMWG_suggested-actions.wmPEMWG_suggested-actions--flow {\n  flex-flow: wrap;\n  justify-content: flex-end;\n}\n.webchat-fluent .wmPEMWG_suggested-actions.wmPEMWG_suggested-actions--stacked {\n  flex-direction: column;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/telephoneKeypad/private/Button.module_built.css */\n.webchat-fluent .wB0ADxG_telephone-keypad__button {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: solid 1px var(--webchat-colorNeutralStroke1);\n  color: var(--webchat-colorGray200);\n  font-weight: var(--webchat-fontWeightSemibold);\n  cursor: pointer;\n  opacity: .7;\n  touch-action: none;\n  background-color: #fff;\n  border-radius: 100%;\n  flex-direction: column;\n  align-items: center;\n  width: 60px;\n  height: 60px;\n  padding: 0;\n  display: flex;\n  position: relative;\n}\n.webchat-fluent .wB0ADxG_telephone-keypad__button:hover {\n  background-color: var(--webchat-colorGray30);\n}\n.webchat-fluent .wB0ADxG_telephone-keypad__button__ruby {\n  color: var(--webchat-colorGray190);\n  font-size: 10px;\n}\n.webchat-fluent .wB0ADxG_telephone-keypad__button__text {\n  margin-top: 8px;\n  font-size: 24px;\n}\n.webchat-fluent .wB0ADxG_telephone-keypad--horizontal .wB0ADxG_telephone-keypad__button {\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  margin: 8px 4px;\n}\n.webchat-fluent .wB0ADxG_telephone-keypad--horizontal .wB0ADxG_telephone-keypad__button__ruby {\n  display: none;\n}\n.webchat-fluent .wB0ADxG_telephone-keypad--horizontal .wB0ADxG_telephone-keypad__button__text {\n  margin-top: 0;\n  font-size: 20px;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/telephoneKeypad/private/TelephoneKeypad.module_built.css */\n.webchat-fluent .wjMTHeW_telephone-keypad {\n  background: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-borderRadiusXLarge);\n  font-family: var(--webchat-fontFamilyBase);\n  border: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__box {\n  box-sizing: border-box;\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  gap: 16px;\n  width: 100%;\n  padding: 16px;\n  display: grid;\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message {\n  color: var(--webchat-colorNeutralForeground4);\n  align-items: center;\n  gap: 6px;\n  margin-block-end: 6px;\n  font-size: 12px;\n  display: flex;\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message-link {\n  color: var(--webchat-colorBrandForegroundLink);\n  text-decoration-color: #0000;\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message-link:target {\n  color: var(--webchat-colorBrandForegroundLinkSelected);\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message-link:hover {\n  color: var(--webchat-colorBrandForegroundLinkHover);\n  text-decoration: underline 1px;\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message-link:active {\n  color: var(--webchat-colorBrandForegroundLinkPressed);\n}\n.webchat-fluent .wjMTHeW_telephone-keypad__info-message-link:focus-visible {\n  text-decoration: underline 1px double var(--webchat-colorStrokeFocus2);\n  outline: none;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/sendBox/Toolbar.module_built.css */\n.webchat-fluent .wGTvbUW_sendbox__toolbar {\n  --webchat__sendbox-button-height: 32px;\n  height: var(--webchat__sendbox-button-height);\n  gap: 4px;\n  margin-inline-start: auto;\n  display: flex;\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-button {\n  -webkit-appearance: none;\n  appearance: none;\n  aspect-ratio: 1;\n  border-radius: var(--webchat-borderRadiusSmall);\n  color: currentColor;\n  cursor: pointer;\n  height: var(--webchat__sendbox-button-height);\n  --webchat__fluent-icon--size: 20px;\n  background: none;\n  border: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  display: flex;\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-button > .webchat__monochrome-image-masker {\n  pointer-events: none;\n  font-size: 20px;\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-button.wGTvbUW_sendbox__toolbar-button--selected {\n  color: var(--webchat-colorNeutralForeground2BrandSelected);\n}\n@media (hover: hover) {\n  .webchat-fluent .wGTvbUW_sendbox__toolbar-button:not([aria-disabled=true]):hover {\n    color: var(--webchat-colorNeutralForeground2BrandHover);\n  }\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-button:not([aria-disabled=true]):active {\n  color: var(--webchat-colorNeutralForeground2BrandPressed);\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-button[aria-disabled=true] {\n  color: var(--webchat-colorNeutralForegroundDisabled);\n  cursor: not-allowed;\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-separator {\n  border-inline-end: 1px solid var(--webchat-colorNeutralStroke2);\n  align-self: center;\n  height: 28px;\n}\n.webchat-fluent .wGTvbUW_sendbox__toolbar-separator:first-child,\n.webchat-fluent .wGTvbUW_sendbox__toolbar-separator:last-child,\n.webchat-fluent .wGTvbUW_sendbox__toolbar-separator:only-child {\n  display: none;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/sendBox/AddAttachmentButton.module_built.css */\n.webchat-fluent .wQ6IG8W_sendbox__add-attachment {\n  display: grid;\n}\n.webchat-fluent .wQ6IG8W_sendbox__add-attachment-input {\n  opacity: 0;\n  width: 1px;\n  height: 0;\n  font-size: 0;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/sendBox/ErrorMessage.module_built.css */\n.webchat-fluent .wMD6w7G_sendbox__error-message {\n  color: #0000;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/sendBox/SendBox.module_built.css */\n.webchat-fluent .w3KprPW_sendbox {\n  --webchat__sendbox--padding: var(--webchat__padding--sendbox);\n  color: var(--webchat-colorNeutralForeground1);\n  font-family: var(--webchat-fontFamilyBase);\n  padding: var(--webchat__sendbox--padding);\n  text-rendering: optimizeLegibility;\n  --webchat-sendbox-attachment-area-active: ;\n  --webchat-sendbox-border-radius: var(--webchat-borderRadiusLarge);\n}\n.webchat-fluent .w3KprPW_sendbox.w3KprPW_variant-copilot .w3KprPW_sendbox__text-counter:not(.w3KprPW_sendbox__text-counter--error) {\n  visibility: hidden;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox {\n  background-color: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-sendbox-border-radius);\n  border: 1px solid var(--webchat-colorNeutralStroke1);\n  font-family: var(--webchat-fontFamilyBase);\n  grid-template: [telephone-keypad-start] \"text-area\" [telephone-keypad-end] var(--webchat-sendbox-attachment-area-active) \"controls\" / [telephone-keypad] 1fr;\n  gap: 6px;\n  padding: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  display: grid;\n  position: relative;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox:has(.w3KprPW_sendbox__attachment-bar--in-grid) {\n  --webchat-sendbox-attachment-area-active: \"attachment-bar\";\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox:focus-within {\n  border-color: var(--webchat-colorNeutralStroke1Selected);\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox:after {\n  border-bottom-left-radius: var(--webchat-sendbox-border-radius);\n  border-bottom-right-radius: var(--webchat-sendbox-border-radius);\n  border-bottom: var(--webchat-strokeWidthThicker) solid var(--webchat-colorCompoundBrandForeground1Hover);\n  clip-path: inset(calc(100% - var(--webchat-strokeWidthThicker)) 50% 0 50%);\n  content: \"\";\n  height: var(--webchat-sendbox-border-radius);\n  transition: clip-path var(--webchat-durationUltraFast) var(--webchat-curveAccelerateMid);\n  position: absolute;\n  bottom: -1px;\n  left: -1px;\n  right: -1px;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox:focus-within:after {\n  clip-path: inset(calc(100% - var(--webchat-strokeWidthThicker)) 0 0 0);\n  transition: clip-path var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox > .w3KprPW_sendbox__text-area--in-grid {\n  grid-area: text-area;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox > .w3KprPW_sendbox__attachment-bar--in-grid {\n  grid-area: attachment-bar;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox > .w3KprPW_sendbox__sendbox-controls--in-grid {\n  grid-area: controls;\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox > .w3KprPW_sendbox__telephone-keypad--in-grid {\n  grid-area: telephone-keypad;\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar__box {\n  gap: var(--webchat-spacingVerticalXS) var(--webchat-spacingHorizontalXS);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar.send-box-attachment-bar--as-list-item {\n  margin-inline-end: calc(-1 * var(--webchat-spacingHorizontalS));\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar.send-box-attachment-bar--as-list-item .send-box-attachment-bar__box:not(:empty) {\n  padding: var(--webchat-spacingVerticalXS) var(--webchat-spacingHorizontalXS);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item.send-box-attachment-bar-item--as-list-item {\n  box-shadow: var(--webchat-shadow2);\n  border-radius: var(--webchat-borderRadiusMedium);\n  padding: var(--webchat-spacingVerticalXXS) var(--webchat-spacingHorizontalXXS);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item.send-box-attachment-bar-item--as-thumbnail {\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1Selected);\n  border-radius: var(--webchat-borderRadiusXLarge);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item .send-box-attachment-bar-item__delete-button {\n  background-color: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-borderRadiusMedium);\n  color: var(--webchat-colorNeutralForeground1);\n  transition:\n    background-color var(--webchat-durationNormal) var(--webchat-curveAccelerateMid),\n    color var(--webchat-durationNormal) var(--webchat-curveAccelerateMid),\n    opacity var(--webchat-durationUltraFast) var(--webchat-curveAccelerateMid);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item .send-box-attachment-bar-item__delete-button:hover {\n  background-color: var(--webchat-colorNeutralBackground1Hover);\n  color: var(--webchat-colorNeutralForeground1Hover);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item .send-box-attachment-bar-item__delete-button:active {\n  background-color: var(--webchat-colorNeutralBackground1Pressed);\n  color: var(--webchat-colorNeutralForeground1Pressed);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item .send-box-attachment-bar-item__delete-button:disabled,\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item .send-box-attachment-bar-item__delete-button[aria-disabled=true] {\n  background-color: var(--webchat-colorNeutralBackgroundDisabled);\n  border-color: var(--webchat-colorNeutralStrokeDisabled);\n  color: var(--webchat-colorNeutralForegroundDisabled);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item.send-box-attachment-bar-item.send-box-attachment-bar-item.send-box-attachment-bar-item--as-list-item .send-box-attachment-bar-item__preview {\n  padding-inline: var(--webchat-spacingHorizontalS);\n}\n.webchat-fluent .w3KprPW_sendbox__attachment-bar.send-box-attachment-bar .send-box-attachment-bar-item-file-preview.send-box-attachment-bar-item-file-preview--as-list-item {\n  gap: var(--webchat-spacingVerticalS) var(--webchat-spacingHorizontalS);\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox-text-area {\n  font-family: var(--webchat-fontFamilyBase);\n  margin: var(--webchat-spacingVerticalXS) var(--webchat-spacingHorizontalXS) var(--webchat-spacingVerticalNone);\n  resize: none;\n  --webchat__text-area--carret-color: var(--webchat-colorNeutralForeground1);\n  background-color: #0000;\n  border: none;\n  outline: none;\n  flex: auto;\n  font-size: 14px;\n  line-height: 20px;\n}\n@media only screen and (hover: none) and (pointer: coarse) {\n  .webchat-fluent .w3KprPW_sendbox__sendbox-text-area:focus-within {\n    font-size: 16px;\n  }\n}\n.webchat-fluent .w3KprPW_sendbox__sendbox-controls {\n  align-items: center;\n  padding-inline-start: 4px;\n  display: flex;\n}\n.webchat-fluent .w3KprPW_sendbox__text-counter {\n  color: var(--webchat-colorNeutralForeground4);\n  cursor: default;\n  font-family: var(--webchat-fontFamilyNumeric);\n  margin-inline-end: 4px;\n  font-size: 10px;\n  line-height: 14px;\n}\n.webchat-fluent .w3KprPW_sendbox__text-counter--error {\n  color: var(--webchat-colorStatusDangerForeground1);\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/activity/ActivityLoader.module_built.css */\n.webchat-fluent .wbnCP9q_activity-loader {\n  height: 8px;\n  margin: var(--webchat-spacingVerticalM) 0 0 18px;\n  flex: none;\n  align-self: flex-start;\n  width: auto;\n}\n.webchat-fluent .wbnCP9q_activity-loader.wbnCP9q_variant-fluent {\n  margin: 0 var(--webchat-spacingHorizontalSNudge) var(--webchat-spacingVerticalM) var(--webchat-spacingHorizontalSNudge);\n}\n.webchat-fluent .wbnCP9q_activity-loader.wbnCP9q_variant-copilot {\n  margin: var(--webchat-spacingVerticalXS) 0 0 -10px;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/linerActivity/private/LinerMessageActivity.module_built.css */\n.webchat-fluent .wSy9HDa_liner-message-activity {\n  box-sizing: border-box;\n  color: var(--webchat-colorNeutralForeground3);\n  font-family: var(--webchat__font--primary);\n  font-size: var(--webchat-fontSizeBase200);\n  font-weight: var(--webchat-fontWeightRegular);\n  align-items: center;\n  gap: var(--webchat-spacingHorizontalM);\n  line-height: var(--webchat-lineHeightBase200);\n  padding: var(--webchat-spacingVerticalSNudge) var(--webchat-spacingHorizontalM);\n  text-align: center;\n  flex-direction: row;\n  width: 100%;\n  display: flex;\n}\n.webchat-fluent .wSy9HDa_liner-message-activity:before,\n.webchat-fluent .wSy9HDa_liner-message-activity:after {\n  border-top: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke2);\n  content: \"\";\n  flex: auto;\n  min-width: 8px;\n  display: flex;\n}\n.webchat-fluent .wSy9HDa_liner-message-activity__text {\n  text-align: center;\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/theme/Theme.module_built.css */\n.webchat-fluent.w7FjtUW_theme {\n  --webchat-colorNeutralForegroundDisabled: var(--colorNeutralForegroundDisabled, #bdbdbd);\n  --webchat-colorNeutralForeground1: var(--colorNeutralForeground1, #242424);\n  --webchat-colorNeutralForeground1Hover: var(--colorNeutralForeground1Hover, #242424);\n  --webchat-colorNeutralForeground1Pressed: var(--colorNeutralForeground1Pressed, #242424);\n  --webchat-colorNeutralForeground2: var(--colorNeutralForeground2, #424242);\n  --webchat-colorNeutralForeground2BrandHover: var(--colorNeutralForeground2BrandHover, #02729c);\n  --webchat-colorNeutralForeground2BrandPressed: var(--colorNeutralForeground2BrandPressed, #01678c);\n  --webchat-colorNeutralForeground2BrandSelected: var(--colorNeutralForeground2BrandSelected, #067191);\n  --webchat-colorNeutralForeground3: var(--colorNeutralForeground3, #616161);\n  --webchat-colorNeutralForeground4: var(--colorNeutralForeground4, #707070);\n  --webchat-colorNeutralForeground5: var(--colorNeutralForeground5, #7e7e7e);\n  --webchat-colorNeutralForegroundOnBrand: var(--colorNeutralForegroundOnBrand, #fff);\n  --webchat-colorNeutralBackgroundDisabled: var(--colorNeutralBackgroundDisabled, #f0f0f0);\n  --webchat-colorNeutralBackground1: var(--colorNeutralBackground1, #fff);\n  --webchat-colorNeutralBackground1Hover: var(--colorNeutralBackground1Hover, #f5f5f5);\n  --webchat-colorNeutralBackground1Pressed: var(--colorNeutralBackground1Pressed, #e0e0e0);\n  --webchat-colorNeutralBackground3: var(--colorNeutralBackground3, #f5f5f5);\n  --webchat-colorNeutralBackground4: var(--colorNeutralBackground4, #f0f0f0);\n  --webchat-colorNeutralBackground5: var(--colorNeutralBackground5, #ebebeb);\n  --webchat-colorNeutralBackground6: var(--colorNeutralBackground6, #e6e6e6);\n  --webchat-colorNeutralStencil1: var(--colorNeutralStencil1, #e6e6e6);\n  --webchat-colorNeutralStencil2: var(--colorNeutralStencil2, #fafafa);\n  --webchat-colorNeutralShadowAmbient: var(--colorNeutralShadowAmbient, #0000001f);\n  --webchat-colorNeutralShadowKey: var(--colorNeutralShadowKey, #00000024);\n  --webchat-colorTransparentBackground: var(--colorTransparentBackground, #0006);\n  --webchat-colorNeutralStrokeDisabled: var(--colorNeutralStrokeDisabled, #e0e0e0);\n  --webchat-colorNeutralStroke1: var(--colorNeutralStroke1, #d1d1d1);\n  --webchat-colorNeutralStroke1Hover: var(--colorNeutralStroke1Hover, #c7c7c7);\n  --webchat-colorNeutralStroke1Pressed: var(--colorNeutralStroke1Pressed, #b3b3b3);\n  --webchat-colorNeutralStroke1Selected: var(--colorNeutralStroke1Selected, #bdbdbd);\n  --webchat-colorNeutralStroke2: var(--colorNeutralStroke2, #e0e0e0);\n  --webchat-colorStrokeFocus2: var(--colorStrokeFocus2, #000);\n  --webchat-colorBrandStroke2: var(--colorBrandStroke2, #9edcf7);\n  --webchat-colorBrandStroke2Pressed: var(--colorBrandStroke2Pressed, #01384d);\n  --webchat-colorTransparentStroke: var(--colorTransparentStroke, transparent);\n  --webchat-colorBrandForeground1: var(--colorBrandForeground1, #01678c);\n  --webchat-colorBrandForeground2Hover: var(--colorBrandForeground2Hover, #015a7a);\n  --webchat-colorBrandForeground2Pressed: var(--colorBrandForeground2Pressed, #01384d);\n  --webchat-colorBrandForegroundLink: var(--colorBrandForegroundLink, #01678c);\n  --webchat-colorBrandForegroundLinkHover: var(--colorBrandForegroundLinkHover, #015a7a);\n  --webchat-colorBrandForegroundLinkPressed: var(--colorBrandForegroundLinkPressed, #014259);\n  --webchat-colorBrandForegroundLinkSelected: var(--colorBrandForegroundLinkSelected, #01678c);\n  --webchat-colorBrandBackground: var(--colorBrandBackground, #077fab);\n  --webchat-colorBrandBackgroundHover: var(--colorBrandBackgroundHover, #06729a);\n  --webchat-colorBrandBackgroundPressed: var(--colorBrandBackgroundPressed, #044760);\n  --webchat-colorBrandBackground2: var(--colorBrandBackground2, #def2fc);\n  --webchat-colorBrandBackground2Hover: var(--colorBrandBackground2Hover, #bee7fa);\n  --webchat-colorBrandBackground2Pressed: var(--colorBrandBackground2Pressed, #7fd2f5);\n  --webchat-colorCompoundBrandForeground1Hover: var(--colorCompoundBrandForeground1Hover, #02729c);\n  --webchat-colorStatusDangerForeground1: var(--colorStatusDangerForeground1, #b10e1c);\n  --webchat-colorGray30: var(--colorGray30, #edebe9);\n  --webchat-colorGray160: var(--colorGray160, #323130);\n  --webchat-colorGray190: var(--colorGray190, #201f1e);\n  --webchat-colorGray200: var(--colorGray200, #1b1a19);\n  --webchat-colorGrey8: #141414;\n  --webchat-colorGrey14: #242424;\n  --webchat-colorGrey92: #ebebeb;\n  --webchat-colorGrey98: #fafafa;\n  --webchat-shadow2: var(--shadow2, 0 0 2px #0000001f, 0 1px 2px #00000024);\n  --webchat-shadow4: var(--shadow4, 0 0 2px #0000001f, 0 2px 4px #00000024);\n  --webchat-shadow16: var(--shadow16, 0 6.4px 14.4px 0 #0002, 0 1.2px 3.6px 0 #0000001c);\n  --webchat-shadow64: var(--shadow64, 0 0 8px #0000001f, 0 32px 64px #00000024);\n  --webchat-spacingHorizontalNone: var(--spacingHorizontalNone, 0);\n  --webchat-spacingHorizontalXXS: var(--spacingHorizontalXXS, 2px);\n  --webchat-spacingHorizontalXS: var(--spacingHorizontalXS, 4px);\n  --webchat-spacingHorizontalSNudge: var(--spacingHorizontalSNudge, 6px);\n  --webchat-spacingHorizontalS: var(--spacingHorizontalS, 8px);\n  --webchat-spacingHorizontalMNudge: var(--spacingHorizontalMNudge, 10px);\n  --webchat-spacingHorizontalM: var(--spacingHorizontalM, 12px);\n  --webchat-spacingHorizontalL: var(--spacingHorizontalL, 16px);\n  --webchat-spacingHorizontalXL: var(--spacingHorizontalXL, 20px);\n  --webchat-spacingHorizontalXXL: var(--spacingHorizontalXXL, 24px);\n  --webchat-spacingHorizontalXXXL: var(--spacingHorizontalXXXL, 32px);\n  --webchat-spacingVerticalNone: var(--spacingVerticalNone, 0);\n  --webchat-spacingVerticalXXS: var(--spacingVerticalXXS, 2px);\n  --webchat-spacingVerticalXS: var(--spacingVerticalXS, 4px);\n  --webchat-spacingVerticalSNudge: var(--spacingVerticalSNudge, 6px);\n  --webchat-spacingVerticalS: var(--spacingVerticalS, 8px);\n  --webchat-spacingVerticalMNudge: var(--spacingVerticalMNudge, 10px);\n  --webchat-spacingVerticalM: var(--spacingVerticalM, 12px);\n  --webchat-spacingVerticalL: var(--spacingVerticalL, 16px);\n  --webchat-spacingVerticalXL: var(--spacingVerticalXL, 20px);\n  --webchat-spacingVerticalXXL: var(--spacingVerticalXXL, 24px);\n  --webchat-spacingVerticalXXXL: var(--spacingVerticalXXXL, 32px);\n  --webchat-fontFamilyBase: var(--fontFamilyBase, \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif);\n  --webchat-fontFamilyMonospace: var(--fontFamilyMonospace, Consolas, \"Courier New\", Courier, monospace);\n  --webchat-fontFamilyNumeric: var(--fontFamilyNumeric, Bahnschrift, \"Segoe UI\", \"Segoe UI Web (West European)\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif);\n  --webchat-fontWeightRegular: var(--fontWeightRegular, 400);\n  --webchat-fontWeightSemibold: var(--fontWeightSemibold, 600);\n  --webchat-fontSizeBase100: var(--fontSizeBase100, 10px);\n  --webchat-fontSizeBase200: var(--fontSizeBase200, 12px);\n  --webchat-fontSizeBase300: var(--fontSizeBase300, 14px);\n  --webchat-fontSizeBase400: var(--fontSizeBase400, 16px);\n  --webchat-fontSizeBase500: var(--fontSizeBase500, 20px);\n  --webchat-fontSizeBase600: var(--fontSizeBase600, 24px);\n  --webchat-fontSizeHero700: var(--fontSizeHero700, 28px);\n  --webchat-fontSizeHero800: var(--fontSizeHero800, 32px);\n  --webchat-fontSizeHero900: var(--fontSizeHero900, 40px);\n  --webchat-lineHeightBase100: var(--lineHeightBase100, 14px);\n  --webchat-lineHeightBase200: var(--lineHeightBase200, 16px);\n  --webchat-lineHeightBase300: var(--lineHeightBase300, 20px);\n  --webchat-lineHeightBase400: var(--lineHeightBase400, 22px);\n  --webchat-lineHeightBase500: var(--lineHeightBase500, 28px);\n  --webchat-lineHeightBase600: var(--lineHeightBase600, 32px);\n  --webchat-lineHeightHero700: var(--lineHeightHero700, 36px);\n  --webchat-lineHeightHero800: var(--lineHeightHero800, 40px);\n  --webchat-lineHeightHero900: var(--lineHeightHero900, 52px);\n  --webchat-lineHeightHero1000: var(--lineHeightHero1000, 92px);\n  --webchat-borderRadiusSmall: var(--borderRadiusSmall, 2px);\n  --webchat-borderRadiusMedium: var(--borderRadiusMedium, 4px);\n  --webchat-borderRadiusLarge: var(--borderRadiusLarge, 6px);\n  --webchat-borderRadiusXLarge: var(--borderRadiusXLarge, 8px);\n  --webchat-strokeWidthThin: var(--strokeWidthThin, 1px);\n  --webchat-strokeWidthThick: var(--strokeWidthThick, 2px);\n  --webchat-strokeWidthThicker: var(--strokeWidthThicker, 3px);\n  --webchat-durationUltraFast: var(--durationUltraFast, 50ms);\n  --webchat-durationNormal: var(--durationNormal, .2s);\n  --webchat-durationUltraSlow: var(--durationUltraSlow, .5s);\n  --webchat-curveAccelerateMid: var(--curveAccelerateMid, cubic-bezier(1, 0, 1, 1));\n  --webchat-curveDecelerateMid: var(--curveDecelerateMid, cubic-bezier(0, 0, 0, 1));\n  display: contents;\n}\n@media (prefers-reduced-motion) {\n  .webchat-fluent.w7FjtUW_theme {\n    --webchat-durationUltraFast: .01ms;\n    --webchat-durationNormal: .01ms;\n  }\n}\n.webchat-fluent.w7FjtUW_theme .webchat__css-custom-properties {\n  --webchat__color--accent: var(--webchat-colorBrandForeground1);\n  --webchat__color--subtle: var(--webchat-colorNeutralForeground2);\n  --webchat__color--timestamp: var(--webchat-colorNeutralForeground3);\n  --webchat__font--primary: var(--webchat-fontFamilyBase);\n  --webchat__font-size--small: var(--webchat-fontSizeBase200);\n  --webchat__font-size--medium: var(--webchat-fontSizeBase300);\n  --webchat__line-height--small: var(--webchat-lineHeightBase200);\n  --webchat__line-height--medium: var(--webchat-lineHeightBase300);\n  --webchat__max-width--bubble: var(--webchat-bubble-maxWidth);\n  --webchat__max-width--attachment-bubble: var(--webchat-bubble-maxWidth);\n  --webchat__min-height--bubble: var(--webchat-bubble-minHeight);\n  --webchat__padding--regular: var(--webchat-spacingVerticalS);\n  --webchat__padding--sendbox: var(--webchat-spacingVerticalNone) var(--webchat-spacingHorizontalMNudge) var(--webchat-spacingHorizontalMNudge);\n  --webchat__border-animation--color-1: #464feb;\n  --webchat__border-animation--color-2: #47cffa;\n  --webchat__border-animation--color-3: #b47cf8;\n}\n.webchat-fluent.w7FjtUW_theme.w7FjtUW_variant-copilot .webchat__css-custom-properties {\n  --webchat__padding--sendbox: var(--webchat-spacingVerticalNone) var(--webchat-spacingHorizontalXL) var(--webchat-spacingVerticalMNudge) var(--webchat-spacingHorizontalMNudge);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__surface {\n  background-color: var(--webchat__color--surface);\n}\n.webchat-fluent.w7FjtUW_theme.w7FjtUW_variant-copilot .webchat__surface {\n  box-sizing: border-box;\n  padding-inline-start: var(--webchat-spacingHorizontalMNudge);\n}\n.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block,\n.webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item,\n.webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll,\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable,\n.webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block],\n.webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body,\n.webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body {\n  scrollbar-color: unset;\n  scrollbar-width: unset;\n  -moz-scrollbar-color: var(--webchat-colorNeutralForeground5) transparent;\n  -moz-scrollbar-width: thin;\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body)::-webkit-scrollbar {\n  height: var(--webchat-spacingVerticalMNudge);\n  width: var(--webchat-spacingVerticalMNudge);\n  visibility: hidden;\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body)::-webkit-scrollbar-corner {\n  background: none;\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body):hover::-webkit-scrollbar {\n  height: var(--webchat-spacingVerticalMNudge);\n  width: var(--webchat-spacingVerticalMNudge);\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body)::-webkit-scrollbar-thumb {\n  background-color: #0000;\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body):hover::-webkit-scrollbar-thumb,\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body):has(> .text-area-input:focus)::-webkit-scrollbar-thumb {\n  background-clip: padding-box;\n  background-color: var(--webchat-colorNeutralForeground5);\n  border: 3px solid #0000;\n  border-radius: 10px;\n}\n:is(.webchat-fluent.w7FjtUW_theme .code-block-content .code-block-content__code-block, .webchat-fluent.w7FjtUW_theme .send-box-attachment-bar.send-box-attachment-bar--as-list-item, .webchat-fluent.w7FjtUW_theme .text-area.text-area--scroll, .webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__scrollable, .webchat-fluent.w7FjtUW_theme .webchat__render-markdown [data-math-type=block], .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__body, .webchat-fluent.w7FjtUW_theme .webchat__view-code-dialog__code-body):hover::-webkit-scrollbar-thumb:hover {\n  background-clip: padding-box;\n  background-color: var(--webchat-colorNeutralForeground5);\n  border: 1px solid #0000;\n  border-radius: 10px;\n}\n.webchat-fluent.w7FjtUW_theme.w7FjtUW_variant-copilot .webchat__basic-transcript .webchat__basic-transcript__scrollable {\n  scrollbar-gutter: stable;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript .webchat__basic-transcript__terminator:focus-visible + .webchat__basic-transcript__focus-indicator {\n  border-color: var(--webchat-colorStrokeFocus2);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:not(:focus-visible) .webchat__basic-transcript__activity-indicator--focus {\n  display: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible:has(.webchat__basic-transcript__activity-indicator--focus) .webchat__basic-transcript__focus-indicator {\n  display: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible .webchat__basic-transcript__activity:has(.webchat__basic-transcript__activity-indicator--focus) .webchat__basic-transcript__activity-indicator--focus {\n  display: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible .webchat__basic-transcript__activity:has(.webchat__basic-transcript__activity-indicator--focus) .webchat__bubble:after,\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible .webchat__basic-transcript__activity:has(.webchat__basic-transcript__activity-indicator--focus) .pre-chat-message-activity:after {\n  border-radius: var(--webchat__bubble--border-radius);\n  content: \"\";\n  outline-offset: 0;\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  pointer-events: none;\n  position: absolute;\n  inset: 0;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible .webchat__basic-transcript__activity:has(.webchat__basic-transcript__activity-indicator--focus) .pre-chat-message-activity:after {\n  border-radius: var(--webchat-borderRadiusMedium);\n  outline-offset: -3px;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:focus-visible .webchat__basic-transcript__activity:has(.webchat__basic-transcript__activity-indicator--focus) .liner-message-activity__text {\n  outline-offset: 4px;\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  border-radius: 20px;\n}\n.webchat-fluent.w7FjtUW_theme.w7FjtUW_variant-copilot .webchat__basic-transcript .webchat__basic-transcript__filler {\n  flex-grow: 0;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__basic-transcript:has(.webchat__basic-transcript__activity:only-child):has(.pre-chat-message-activity) .webchat__basic-transcript__filler {\n  flex-grow: .5;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog {\n  place-items: center;\n  height: 100%;\n  display: grid;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog::backdrop {\n  background-color: var(--webchat-colorTransparentBackground);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__box {\n  background-color: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-borderRadiusXLarge);\n  color: var(--webchat-colorNeutralForeground1);\n  box-shadow: var(--webchat-shadow64);\n  position: relative;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button {\n  color: var(--webchat-colorNeutralForeground1);\n  transition: background-color var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button:not(:active):hover {\n  background-color: var(--webchat-colorNeutralBackground3);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button:focus:active {\n  background-color: var(--webchat-colorNeutralBackground4);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button:not(:focus-visible) {\n  border: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button:focus {\n  border-color: var(--webchat-colorStrokeFocus2);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog .webchat__modal-dialog__close-button-icon {\n  color: currentColor;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block {\n  font-family: var(--webchat-fontFamilyMonospace);\n  font-size: var(--webchat-fontSizeBase300);\n  --webchat__code-block__copy-button--color: var(--webchat-colorNeutralForeground1);\n  --webchat__code-block__copy-button--background: var(--webchat-colorNeutralBackground3);\n  border: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block .webchat__code-block-copy-button {\n  color: var(--webchat__code-block__copy-button--color);\n  height: 20px;\n  width: 20px;\n  transition: background-color var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n  background: none;\n  border: none;\n  margin-inline-start: var(--webchat-spacingHorizontalS);\n  padding: 0;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block .webchat__code-block-copy-button .webchat__code-block-copy-button__icon {\n  --webchat__component-icon--color: currentColor;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block .webchat__code-block-copy-button:hover,\n.webchat-fluent.w7FjtUW_theme .webchat__code-block .webchat__code-block-copy-button:active {\n  background: var(--webchat__code-block__copy-button--background);\n  color: var(--webchat__code-block__copy-button--color);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block .webchat__code-block-copy-button:focus {\n  color: var(--webchat__code-block__copy-button--color);\n  outline-color: currentColor;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block:has(.webchat__code-block__body:focus-visible):focus-within {\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  outline-offset: calc(var(--webchat-strokeWidthThick) * -1);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block:has(.webchat__code-block__body:focus-visible):focus-within .webchat__code-block__body {\n  outline: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block:has(> .webchat__code-block__theme--github-dark-default) {\n  --webchat__background--code-block: var(--codeBlockBackground, var(--webchat-colorGrey8));\n  --webchat__code-block__copy-button--background: var(--codeBlockCopyButtonBackgroundPressed, var(--webchat-colorGrey14));\n  --webchat__code-block__copy-button--color: var(--codeBlockCopyButtonForeground, var(--webchat__color--code-block));\n  --webchat__color--code-block: var(--codeBlockForeground, var(--webchat-colorGrey98));\n}\n.webchat-fluent.w7FjtUW_theme .webchat__code-block:has(> .webchat__code-block__theme--github-light-default) {\n  --webchat__background--code-block: var(--codeBlockBackground, var(--webchat-colorGrey98));\n  --webchat__code-block__copy-button--background: var(--codeBlockBackgroundPressed, var(--webchat-colorGrey92));\n  --webchat__code-block__copy-button--color: var(--codeBlockCopyButtonForeground, var(--webchat__color--code-block));\n  --webchat__color--code-block: var(--codeBlockForeground, var(--webchat-colorGrey8));\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__modal-dialog__close-button-layout {\n  padding: var(--webchat-spacingVerticalS) var(--webchat-spacingHorizontalS);\n  display: flex;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__modal-dialog__close-button {\n  aspect-ratio: 1;\n  height: var(--webchat-lineHeightBase300);\n  width: unset;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  display: flex;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__code-block-copy-button {\n  --webchat__code-block__copy-button--color: var(--webchat-colorNeutralForeground1);\n  --webchat__code-block__copy-button--background: var(--webchat-colorNeutralBackground3);\n  margin-block-start: var(--webchat-spacingVerticalS);\n  position: absolute;\n  top: 0;\n  right: 32px;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__modal-dialog__box {\n  width: fit-content;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__modal-dialog__body {\n  padding: var(--webchat-spacingVerticalS) var(--webchat-spacingHorizontalM);\n  margin: 0;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__title {\n  font-size: var(--webchat-fontSizeBase300);\n  font-weight: var(--webchat-fontWeightSemibold);\n  line-height: var(--webchat-lineHeightBase300);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__body {\n  font-family: var(--webchat-fontFamilyMonospace);\n  font-size: var(--webchat-fontSizeBase300);\n  margin: 0 calc(var(--webchat-spacingHorizontalM) * -1);\n  padding: 0 var(--webchat-spacingHorizontalM);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__footer {\n  color: var(--webchat-colorNeutralForeground4);\n  font-size: var(--webchat-fontSizeBase100);\n  line-height: var(--webchat-lineHeightBase100);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__link {\n  color: var(--webchat-colorBrandForegroundLink);\n  text-decoration-color: #0000;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__link:target {\n  color: var(--webchat-colorBrandForegroundLinkSelected);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__link:hover {\n  color: var(--webchat-colorBrandForegroundLinkHover);\n  text-decoration: underline 1px;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__link:active {\n  color: var(--webchat-colorBrandForegroundLinkPressed);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__modal-dialog.webchat__view-code-dialog .webchat__view-code-dialog__link:focus-visible {\n  text-decoration: underline 1px double var(--webchat-colorStrokeFocus2);\n  outline: none;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button {\n  background: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-borderRadiusMedium);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1);\n  color: var(--webchat-colorNeutralForeground1);\n  gap: var(--webchat-spacingHorizontalXS);\n  padding: 5px var(--webchat-spacingHorizontalM);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button:hover {\n  background: var(--webchat-colorNeutralBackground1Hover);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1Hover);\n  color: var(--webchat-colorNeutralForeground1Hover);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button:active {\n  background: var(--webchat-colorNeutralBackground1Pressed);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1Pressed);\n  color: var(--webchat-colorNeutralForeground1Pressed);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button:focus-visible {\n  background: var(--webchat-colorNeutralBackground1);\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  outline-offset: calc(var(--webchat-strokeWidthThick) * -1);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button[aria-disabled=true] {\n  background: var(--webchat-colorNeutralBackgroundDisabled);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStrokeDisabled);\n  color: var(--webchat-colorNeutralForegroundDisabled);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-button .webchat__activity-button__icon {\n  --webchat__component-icon--color: var(--webchat-colorNeutralForeground2);\n  width: 20px;\n  height: 20px;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-copy-button .webchat__activity-copy-button__copied-text {\n  background-color: var(--webchat-colorNeutralBackground1);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__activity-copy-button.webchat__activity-copy-button--copied .webchat__activity-copy-button__copied-text {\n  animation-duration: var(--webchat-durationUltraSlow);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__monochrome-image-masker {\n  background-color: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.webchat-fluent.w7FjtUW_theme .webchat__thumb-button .webchat__thumb-button__image {\n  color: var(--webchat-colorNeutralForeground1);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__thumb-button:has(.webchat__thumb-button__input:focus-visible) {\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__thumb-button:has(.webchat__thumb-button__input[aria-disabled=true]) .webchat__thumb-button__image {\n  color: var(--webchat-colorNeutralForegroundDisabled);\n}\n.webchat-fluent.w7FjtUW_theme .webchat__tooltip {\n  --webchat__tooltip-background: var(--tooltip-background, var(--webchat-colorNeutralBackground1));\n  color: var(--webchat-colorNeutralForeground1);\n  filter: drop-shadow(0 0 2px var(--webchat-colorNeutralShadowAmbient)) drop-shadow(0 4px 8px var(--webchat-colorNeutralShadowKey));\n  font-family: var(--webchat-fontFamilyBase);\n  font-size: var(--webchat-fontSizeBase200);\n  font-weight: var(--webchat-fontWeightRegular);\n  line-height: var(--webchat-lineHeightBase200);\n  padding: var(--webchat-spacingVerticalSNudge) var(--webchat-spacingHorizontalM);\n  transition: opacity var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__form-header {\n  color: var(--webchat-colorNeutralForeground1);\n  font-size: var(--webchat-fontSizeBase300);\n  font-weight: var(--webchat-fontWeightRegular);\n  line-height: var(--webchat-lineHeightBase300);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__form {\n  gap: var(--webchat-spacingVerticalXS);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__form-footer {\n  color: var(--webchat-colorNeutralForeground1);\n  font-size: var(--webchat-fontSizeBase100);\n  font-weight: var(--webchat-fontWeightRegular);\n  line-height: var(--webchat-lineHeightBase200);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__submit-button {\n  background-color: var(--webchat-colorBrandBackground);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorBrandBackground);\n  border-radius: var(--webchat-borderRadiusMedium);\n  color: var(--webchat-colorNeutralForegroundOnBrand);\n  cursor: pointer;\n  font-size: var(--webchat-fontSizeBase300);\n  padding: var(--webchat-spacingVerticalNone) var(--webchat-spacingHorizontalS);\n  transition: background-color var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__submit-button:hover {\n  background-color: var(--webchat-colorBrandBackgroundHover);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorBrandBackgroundHover);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__submit-button:focus-visible {\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  outline-offset: calc(var(--webchat-strokeWidthThin) * -1);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__submit-button:active {\n  background-color: var(--webchat-colorBrandBackgroundPressed);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorBrandBackgroundPressed);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__cancel-button {\n  background-color: var(--webchat-colorNeutralBackground1);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1);\n  border-radius: var(--webchat-borderRadiusMedium);\n  color: var(--webchat-colorNeutralForeground1);\n  cursor: pointer;\n  font-size: var(--webchat-fontSizeBase300);\n  padding: var(--webchat-spacingVerticalNone) var(--webchat-spacingHorizontalS);\n  transition: background-color var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__cancel-button:hover {\n  background-color: var(--webchat-colorNeutralBackground1Hover);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1Hover);\n  color: currentColor;\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__cancel-button:focus-visible {\n  outline: var(--webchat-strokeWidthThick) solid var(--webchat-colorStrokeFocus2);\n  outline-offset: calc(var(--webchat-strokeWidthThin) * -1);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__cancel-button:active {\n  background-color: var(--webchat-colorNeutralBackground1Pressed);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1Pressed);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__text-box {\n  background-color: var(--webchat-colorNeutralBackground1);\n  border-radius: var(--webchat-borderRadiusMedium);\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1);\n  font-size: var(--webchat-fontSizeBase300);\n  line-height: var(--webchat-lineHeightBase300);\n  gap: var(--webchat-spacingVerticalSNudge);\n  padding: var(--webchat-spacingVerticalS) var(--webchat-spacingHorizontalM);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__text-box:after {\n  border-bottom-left-radius: var(--webchat-borderRadiusMedium);\n  border-bottom-right-radius: var(--webchat-borderRadiusMedium);\n  border-bottom: var(--webchat-strokeWidthThicker) solid var(--webchat-colorBrandForeground1);\n  clip-path: inset(calc(100% - var(--webchat-strokeWidthThicker)) 50% 0 50%);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__text-box:focus-within {\n  border: var(--webchat-strokeWidthThin) solid var(--webchat-colorNeutralStroke1);\n}\n.webchat-fluent.w7FjtUW_theme .feedback-form .feedback-form__text-box:focus-within:after {\n  clip-path: inset(calc(100% - var(--webchat-strokeWidthThicker)) 0 0 0);\n  transition: clip-path var(--webchat-durationNormal) var(--webchat-curveDecelerateMid);\n}\n\n/* unplugin-lightningcss:C:/bot framework forked/BotFramework-WebChat/packages/fluent-theme/src/components/typingIndicator/SlidingDotsTypingIndicator.module_built.css */\n.webchat-fluent .wIVqVSW_sliding-dots-typing-indicator {\n  height: 16px;\n  margin: auto var(--webchat-spacingHorizontalMNudge) var(--webchat-spacingVerticalNone);\n  flex: none;\n  align-self: start;\n  display: flex;\n}\n.webchat-fluent .wIVqVSW_sliding-dots-typing-indicator__image {\n  width: auto;\n  height: 6px;\n}\n";
  var createStyles_default = makeCreateStyles(fluentStyleContent);

  // src/styles/useVariantClassName.ts
  var import_react9 = __toESM(require_react());

  // src/private/useVariants.ts
  var import_react8 = __toESM(require_react());

  // src/private/VariantComposer.ts
  var import_react7 = __toESM(require_react());

  // src/private/createComposer.tsx
  var import_react6 = __toESM(require_react());
  function createComposer({ Provider: Provider2 }, { defaults, displayName }) {
    const Composer = ({ children, ...props }) => {
      const value = (0, import_react6.useMemo)(() => Object.freeze({ ...defaults, ...props }), [props]);
      return /* @__PURE__ */ import_react6.default.createElement(Provider2, { value }, children);
    };
    Composer.displayName = displayName;
    return (0, import_react6.memo)(Composer);
  }

  // src/private/VariantComposer.ts
  var VariantContext = (0, import_react7.createContext)(
    new Proxy(
      {},
      {
        get() {
          throw new Error("Unable to use VariantContext without VariantComposer");
        }
      }
    )
  );
  var VariantComposer = createComposer(VariantContext, {
    defaults: { variant: "" },
    displayName: "VariantComposer"
  });
  var VariantComposer_default = VariantComposer;

  // src/private/useVariants.ts
  function useVariants() {
    const { variant } = (0, import_react8.useContext)(VariantContext);
    return (0, import_react8.useMemo)(() => variant.split(" "), [variant]);
  }

  // src/styles/useVariantClassName.ts
  function useVariantClassName(styles2) {
    const classNames = useStyles_default(styles2);
    const variants = useVariants();
    return (0, import_react9.useMemo)(
      () => variants.map((variant) => classNames[`variant-${variant}`]).filter((value) => value).join(" "),
      [classNames, variants]
    );
  }

  // src/testIds.ts
  var testIds = {
    preChatMessageActivityStarterPromptsCardAction: "pre-chat message activity starter prompts card action",
    sendBoxContainer: "send box container",
    sendBoxDropZone: "send box drop zone",
    sendBoxSendButton: "send box send button",
    sendBoxSuggestedAction: "send box suggested action",
    sendBoxTextBox: "send box text area",
    sendBoxTelephoneKeypadButton1: `send box telephone keypad button 1`,
    sendBoxTelephoneKeypadButton2: `send box telephone keypad button 2`,
    sendBoxTelephoneKeypadButton3: `send box telephone keypad button 3`,
    sendBoxTelephoneKeypadButton4: `send box telephone keypad button 4`,
    sendBoxTelephoneKeypadButton5: `send box telephone keypad button 5`,
    sendBoxTelephoneKeypadButton6: `send box telephone keypad button 6`,
    sendBoxTelephoneKeypadButton7: `send box telephone keypad button 7`,
    sendBoxTelephoneKeypadButton8: `send box telephone keypad button 8`,
    sendBoxTelephoneKeypadButton9: `send box telephone keypad button 9`,
    sendBoxTelephoneKeypadButton0: `send box telephone keypad button 0`,
    sendBoxTelephoneKeypadButtonStar: `send box telephone keypad button star`,
    sendBoxTelephoneKeypadButtonPound: `send box telephone keypad button pound`,
    sendBoxTelephoneKeypadToolbarButton: "send box telephone keypad toolbar button",
    sendBoxUploadButton: "send box upload button"
  };
  var testIds_default = testIds;

  // src/components/dropZone/DropZone.tsx
  var import_botframework_webchat_component = __toESM(require_botframework_webchat_component());
  var import_classnames2 = __toESM(require_classnames());
  var import_react10 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\dropZone\DropZone.module.css?css_module
  var classes2 = { "sendbox__attachment-drop-zone": "w_MplrG_sendbox__attachment-drop-zone", "sendbox__attachment-drop-zone--droppable": "w_MplrG_sendbox__attachment-drop-zone--droppable", "sendbox__attachment-drop-zone-icon": "w_MplrG_sendbox__attachment-drop-zone-icon" };
  var DropZone_module_default = classes2;
  var _sendbox__attachment_drop_zone0 = classes2["sendbox__attachment-drop-zone"];
  var _sendbox__attachment_drop_zone__droppable0 = classes2["sendbox__attachment-drop-zone--droppable"];
  var _sendbox__attachment_drop_zone_icon0 = classes2["sendbox__attachment-drop-zone-icon"];

  // src/components/dropZone/DropZone.tsx
  var { useLocalizer } = import_botframework_webchat_component.hooks;
  var handleDragOver = (event) => {
    event.preventDefault();
  };
  var isFilesTransferEvent = (event) => !!event.dataTransfer?.types?.some((type) => type.toLowerCase() === "files");
  function isDescendantOf(target, ancestor) {
    let current2 = target.parentNode;
    while (current2) {
      if (current2 === ancestor) {
        return true;
      }
      current2 = current2.parentNode;
    }
    return false;
  }
  var DropZone = (props) => {
    const [dropZoneState, setDropZoneState] = (0, import_react10.useState)(false);
    const classNames = useStyles_default(DropZone_module_default);
    const dropZoneRef = (0, import_react10.useRef)(null);
    const localize = useLocalizer();
    const onFilesAddedRef = useRefFrom(props.onFilesAdded);
    (0, import_react10.useEffect)(() => {
      let entranceCounter = 0;
      const handleDragEnter = (event) => {
        document.addEventListener("dragover", handleDragOver);
        entranceCounter++;
        if (isFilesTransferEvent(event)) {
          setDropZoneState(
            dropZoneRef.current && (event.target === dropZoneRef.current || event.target instanceof HTMLElement && isDescendantOf(event.target, dropZoneRef.current)) ? "droppable" : "visible"
          );
        }
      };
      const handleDragLeave = () => --entranceCounter <= 0 && setDropZoneState(false);
      const handleDragEnd = () => {
        document.removeEventListener("dragover", handleDragOver);
        entranceCounter = 0;
        setDropZoneState(false);
      };
      const handleDocumentDrop = (event) => {
        if (!dropZoneRef.current?.contains(event.target)) {
          handleDragEnd();
        }
      };
      document.addEventListener("dragend", handleDragEnd);
      document.addEventListener("dragenter", handleDragEnter);
      document.addEventListener("dragleave", handleDragLeave);
      document.addEventListener("drop", handleDocumentDrop);
      return () => {
        document.removeEventListener("dragend", handleDragEnd);
        document.removeEventListener("dragenter", handleDragEnter);
        document.removeEventListener("dragleave", handleDragLeave);
        document.removeEventListener("dragover", handleDragOver);
        document.removeEventListener("drop", handleDocumentDrop);
      };
    }, [setDropZoneState]);
    const handleDrop = (0, import_react10.useCallback)(
      (event) => {
        event.preventDefault();
        setDropZoneState(false);
        if (!isFilesTransferEvent(event.nativeEvent)) {
          return;
        }
        onFilesAddedRef.current([...event.dataTransfer.files]);
      },
      [onFilesAddedRef, setDropZoneState]
    );
    return dropZoneState ? /* @__PURE__ */ import_react10.default.createElement(
      "div",
      {
        className: (0, import_classnames2.default)(classNames["sendbox__attachment-drop-zone"], {
          [classNames["sendbox__attachment-drop-zone--droppable"]]: dropZoneState === "droppable"
        }),
        "data-testid": testIds_default.sendBoxDropZone,
        onDragOver: handleDragOver,
        onDrop: handleDrop,
        ref: dropZoneRef
      },
      /* @__PURE__ */ import_react10.default.createElement(FluentIcon_default, { appearance: "text", className: classNames["sendbox__attachment-drop-zone-icon"], icon: "add-document" }),
      localize("TEXT_INPUT_DROP_ZONE")
    ) : null;
  };
  DropZone.displayName = "DropZone";
  var DropZone_default = (0, import_react10.memo)(DropZone);

  // src/components/suggestedActions/SuggestedActions.tsx
  var import_botframework_webchat_component7 = __toESM(require_botframework_webchat_component());
  var import_classnames8 = __toESM(require_classnames());
  var import_react21 = __toESM(require_react());

  // ../core/dist/chunk-HRI4NU4M.mjs
  var __defProp2 = Object.defineProperty;
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp2(target, name, { get: all2[name], enumerable: true });
  };
  var suggestedActionsStateSchema = pipe(array(custom(() => true)), readonly());
  var suggestedActionsOriginActivityStateSchema = pipe(
    object({
      // activity: undefinedable(custom<WebChatActivity>(() => true))
      activity: undefinedable(custom(() => true))
    }),
    readonly()
  );
  var SET_RAW_STATE = "WEB_CHAT_INTERNAL/SET_RAW_STATE";
  var setRawStateActionSchema = pipe(
    object({
      payload: union([
        pipe(
          object({
            name: literal("suggestedActions"),
            state: suggestedActionsStateSchema
          }),
          readonly()
        ),
        pipe(
          object({
            name: literal("suggestedActionsOriginActivity"),
            state: suggestedActionsOriginActivityStateSchema
          }),
          readonly()
        )
      ]),
      type: literal(SET_RAW_STATE)
    }),
    readonly()
  );

  // ../core/dist/botframework-webchat-core.mjs
  var import_math_random = __toESM(require_browser(), 1);

  // ../../node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js
  var createSymbol = function createSymbol2(name) {
    return "@@redux-saga/" + name;
  };
  var CANCEL = /* @__PURE__ */ createSymbol("CANCEL_PROMISE");
  var CHANNEL_END_TYPE = /* @__PURE__ */ createSymbol("CHANNEL_END");
  var IO = /* @__PURE__ */ createSymbol("IO");
  var SELF_CANCELLATION = /* @__PURE__ */ createSymbol("SELF_CANCELLATION");
  var TASK = /* @__PURE__ */ createSymbol("TASK");
  var TASK_CANCEL = /* @__PURE__ */ createSymbol("TASK_CANCEL");
  var TERMINATE = /* @__PURE__ */ createSymbol("TERMINATE");
  var SAGA_LOCATION = /* @__PURE__ */ createSymbol("LOCATION");

  // ../../node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  // ../../node_modules/@redux-saga/is/dist/redux-saga-is.esm.js
  var undef = function undef2(v) {
    return v === null || v === void 0;
  };
  var notUndef = function notUndef2(v) {
    return v !== null && v !== void 0;
  };
  var func = function func2(f) {
    return typeof f === "function";
  };
  var string2 = function string3(s) {
    return typeof s === "string";
  };
  var array2 = Array.isArray;
  var object2 = function object3(obj) {
    return obj && !array2(obj) && typeof obj === "object";
  };
  var promise = function promise2(p) {
    return p && func(p.then);
  };
  var iterator = function iterator2(it) {
    return it && func(it.next) && func(it.throw);
  };
  var buffer = function buffer2(buf) {
    return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
  };
  var stringableFunc = function stringableFunc2(f) {
    return func(f) && f.hasOwnProperty("toString");
  };
  var symbol = function symbol2(sym) {
    return Boolean(sym) && typeof Symbol === "function" && sym.constructor === Symbol && sym !== Symbol.prototype;
  };

  // ../../node_modules/@redux-saga/core/dist/io-22ea0cf9.js
  var konst = function konst2(v) {
    return function() {
      return v;
    };
  };
  var kTrue = /* @__PURE__ */ konst(true);
  var noop = function noop2() {
  };
  if (typeof Proxy !== "undefined") {
    noop = /* @__PURE__ */ new Proxy(noop, {
      set: function set() {
        throw internalErr("There was an attempt to assign a property to internal `noop` function.");
      }
    });
  }
  var hasSymbol = typeof Symbol === "function";
  var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
  function check2(value, predicate3, error) {
    if (!predicate3(value)) {
      throw new Error(error);
    }
  }
  var assignWithSymbols = function assignWithSymbols2(target, source) {
    _extends(target, source);
    if (Object.getOwnPropertySymbols) {
      Object.getOwnPropertySymbols(source).forEach(function(s) {
        target[s] = source[s];
      });
    }
  };
  var flatMap = function flatMap2(mapper, arr) {
    var _ref;
    return (_ref = []).concat.apply(_ref, arr.map(mapper));
  };
  function remove(array5, item) {
    var index = array5.indexOf(item);
    if (index >= 0) {
      array5.splice(index, 1);
    }
  }
  var kThrow = function kThrow2(err) {
    throw err;
  };
  var kReturn = function kReturn2(value) {
    return {
      value,
      done: true
    };
  };
  function makeIterator(next, thro, name) {
    if (thro === void 0) {
      thro = kThrow;
    }
    if (name === void 0) {
      name = "iterator";
    }
    var iterator3 = {
      meta: {
        name
      },
      next,
      throw: thro,
      return: kReturn,
      isSagaIterator: true
    };
    if (typeof Symbol !== "undefined") {
      iterator3[Symbol.iterator] = function() {
        return iterator3;
      };
    }
    return iterator3;
  }
  var internalErr = function internalErr2(err) {
    return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
  };
  var createSetContextWarning = function createSetContextWarning2(ctx, props) {
    return (ctx ? ctx + "." : "") + "setContext(props): argument " + props + " is not a plain object";
  };
  var createEmptyArray = function createEmptyArray2(n) {
    return Array.apply(null, new Array(n));
  };
  var shouldTerminate = function shouldTerminate2(res) {
    return res === TERMINATE;
  };
  var shouldCancel = function shouldCancel2(res) {
    return res === TASK_CANCEL;
  };
  var shouldComplete = function shouldComplete2(res) {
    return shouldTerminate(res) || shouldCancel(res);
  };
  function createAllStyleChildCallbacks(shape, parentCallback) {
    var keys = Object.keys(shape);
    var totalCount = keys.length;
    if (true) {
      check2(totalCount, function(c) {
        return c > 0;
      }, "createAllStyleChildCallbacks: get an empty array or object");
    }
    var completedCount = 0;
    var completed;
    var results = array2(shape) ? createEmptyArray(totalCount) : {};
    var childCallbacks = {};
    function checkEnd() {
      if (completedCount === totalCount) {
        completed = true;
        parentCallback(results);
      }
    }
    keys.forEach(function(key) {
      var chCbAtKey = function chCbAtKey2(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || shouldComplete(res)) {
          parentCallback.cancel();
          parentCallback(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEnd();
        }
      };
      chCbAtKey.cancel = noop;
      childCallbacks[key] = chCbAtKey;
    });
    parentCallback.cancel = function() {
      if (!completed) {
        completed = true;
        keys.forEach(function(key) {
          return childCallbacks[key].cancel();
        });
      }
    };
    return childCallbacks;
  }
  function getMetaInfo(fn) {
    return {
      name: fn.name || "anonymous",
      location: getLocation(fn)
    };
  }
  function getLocation(instrumented) {
    return instrumented[SAGA_LOCATION];
  }
  var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
  var ON_OVERFLOW_THROW = 1;
  var ON_OVERFLOW_SLIDE = 3;
  var ON_OVERFLOW_EXPAND = 4;
  function ringBuffer(limit, overflowAction) {
    if (limit === void 0) {
      limit = 10;
    }
    var arr = new Array(limit);
    var length = 0;
    var pushIndex = 0;
    var popIndex = 0;
    var push = function push2(it) {
      arr[pushIndex] = it;
      pushIndex = (pushIndex + 1) % limit;
      length++;
    };
    var take2 = function take3() {
      if (length != 0) {
        var it = arr[popIndex];
        arr[popIndex] = null;
        length--;
        popIndex = (popIndex + 1) % limit;
        return it;
      }
    };
    var flush3 = function flush4() {
      var items = [];
      while (length) {
        items.push(take2());
      }
      return items;
    };
    return {
      isEmpty: function isEmpty() {
        return length == 0;
      },
      put: function put2(it) {
        if (length < limit) {
          push(it);
        } else {
          var doubledLimit;
          switch (overflowAction) {
            case ON_OVERFLOW_THROW:
              throw new Error(BUFFER_OVERFLOW);
            case ON_OVERFLOW_SLIDE:
              arr[pushIndex] = it;
              pushIndex = (pushIndex + 1) % limit;
              popIndex = pushIndex;
              break;
            case ON_OVERFLOW_EXPAND:
              doubledLimit = 2 * limit;
              arr = flush3();
              length = arr.length;
              pushIndex = arr.length;
              popIndex = 0;
              arr.length = doubledLimit;
              limit = doubledLimit;
              push(it);
              break;
            default:
          }
        }
      },
      take: take2,
      flush: flush3
    };
  }
  var expanding = function expanding2(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  };
  var TAKE = "TAKE";
  var PUT = "PUT";
  var ALL = "ALL";
  var RACE = "RACE";
  var CALL = "CALL";
  var CPS = "CPS";
  var FORK = "FORK";
  var JOIN = "JOIN";
  var CANCEL2 = "CANCEL";
  var SELECT = "SELECT";
  var ACTION_CHANNEL = "ACTION_CHANNEL";
  var CANCELLED = "CANCELLED";
  var FLUSH = "FLUSH";
  var GET_CONTEXT = "GET_CONTEXT";
  var SET_CONTEXT = "SET_CONTEXT";

  // ../../node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js
  function deferred() {
    var def = {};
    def.promise = new Promise(function(resolve, reject) {
      def.resolve = resolve;
      def.reject = reject;
    });
    return def;
  }
  var redux_saga_deferred_esm_default = deferred;

  // ../../node_modules/@redux-saga/core/dist/redux-saga-core.esm.js
  var queue = [];
  var semaphore = 0;
  function exec(task2) {
    try {
      suspend();
      task2();
    } finally {
      release();
    }
  }
  function asap(task2) {
    queue.push(task2);
    if (!semaphore) {
      suspend();
      flush();
    }
  }
  function immediately(task2) {
    try {
      suspend();
      return task2();
    } finally {
      flush();
    }
  }
  function suspend() {
    semaphore++;
  }
  function release() {
    semaphore--;
  }
  function flush() {
    release();
    var task2;
    while (!semaphore && (task2 = queue.shift()) !== void 0) {
      exec(task2);
    }
  }
  var array3 = function array4(patterns) {
    return function(input) {
      return patterns.some(function(p) {
        return matcher(p)(input);
      });
    };
  };
  var predicate = function predicate2(_predicate) {
    return function(input) {
      return _predicate(input);
    };
  };
  var string4 = function string5(pattern2) {
    return function(input) {
      return input.type === String(pattern2);
    };
  };
  var symbol3 = function symbol4(pattern2) {
    return function(input) {
      return input.type === pattern2;
    };
  };
  var wildcard = function wildcard2() {
    return kTrue;
  };
  function matcher(pattern2) {
    var matcherCreator = pattern2 === "*" ? wildcard : string2(pattern2) ? string4 : array2(pattern2) ? array3 : stringableFunc(pattern2) ? string4 : func(pattern2) ? predicate : symbol(pattern2) ? symbol3 : null;
    if (matcherCreator === null) {
      throw new Error("invalid pattern: " + pattern2);
    }
    return matcherCreator(pattern2);
  }
  var END = {
    type: CHANNEL_END_TYPE
  };
  var isEnd = function isEnd2(a) {
    return a && a.type === CHANNEL_END_TYPE;
  };
  var CLOSED_CHANNEL_WITH_TAKERS = "Cannot have a closed channel with pending takers";
  var INVALID_BUFFER = "invalid buffer passed to channel factory function";
  var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
  function channel2(buffer$1) {
    if (buffer$1 === void 0) {
      buffer$1 = expanding();
    }
    var closed = false;
    var takers = [];
    if (true) {
      check2(buffer$1, buffer, INVALID_BUFFER);
    }
    function checkForbiddenStates() {
      if (closed && takers.length) {
        throw internalErr(CLOSED_CHANNEL_WITH_TAKERS);
      }
      if (takers.length && !buffer$1.isEmpty()) {
        throw internalErr("Cannot have pending takers with non empty buffer");
      }
    }
    function put2(input) {
      if (true) {
        checkForbiddenStates();
        check2(input, notUndef, UNDEFINED_INPUT_ERROR);
      }
      if (closed) {
        return;
      }
      if (takers.length === 0) {
        return buffer$1.put(input);
      }
      var cb = takers.shift();
      cb(input);
    }
    function take2(cb) {
      if (true) {
        checkForbiddenStates();
        check2(cb, func, "channel.take's callback must be a function");
      }
      if (closed && buffer$1.isEmpty()) {
        cb(END);
      } else if (!buffer$1.isEmpty()) {
        cb(buffer$1.take());
      } else {
        takers.push(cb);
        cb.cancel = function() {
          remove(takers, cb);
        };
      }
    }
    function flush3(cb) {
      if (true) {
        checkForbiddenStates();
        check2(cb, func, "channel.flush' callback must be a function");
      }
      if (closed && buffer$1.isEmpty()) {
        cb(END);
        return;
      }
      cb(buffer$1.flush());
    }
    function close() {
      if (true) {
        checkForbiddenStates();
      }
      if (closed) {
        return;
      }
      closed = true;
      var arr = takers;
      takers = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        var taker = arr[i];
        taker(END);
      }
    }
    return {
      take: take2,
      put: put2,
      flush: flush3,
      close
    };
  }
  var RUNNING = 0;
  var CANCELLED2 = 1;
  var ABORTED = 2;
  var DONE = 3;
  function resolvePromise(promise3, cb) {
    var cancelPromise = promise3[CANCEL];
    if (func(cancelPromise)) {
      cb.cancel = cancelPromise;
    }
    promise3.then(cb, function(error) {
      cb(error, true);
    });
  }
  var current = 0;
  var nextSagaId = function() {
    return ++current;
  };
  var _effectRunnerMap;
  function getIteratorMetaInfo(iterator3, fn) {
    if (iterator3.isSagaIterator) {
      return {
        name: iterator3.meta.name
      };
    }
    return getMetaInfo(fn);
  }
  function createTaskIterator(_ref) {
    var context = _ref.context, fn = _ref.fn, args = _ref.args;
    try {
      var result = fn.apply(context, args);
      if (iterator(result)) {
        return result;
      }
      var resolved = false;
      var next = function next2(arg) {
        if (!resolved) {
          resolved = true;
          return {
            value: result,
            done: !promise(result)
          };
        } else {
          return {
            value: arg,
            done: true
          };
        }
      };
      return makeIterator(next);
    } catch (err) {
      return makeIterator(function() {
        throw err;
      });
    }
  }
  function runPutEffect(env, _ref2, cb) {
    var channel3 = _ref2.channel, action2 = _ref2.action, resolve = _ref2.resolve;
    asap(function() {
      var result;
      try {
        result = (channel3 ? channel3.put : env.dispatch)(action2);
      } catch (error) {
        cb(error, true);
        return;
      }
      if (resolve && promise(result)) {
        resolvePromise(result, cb);
      } else {
        cb(result);
      }
    });
  }
  function runTakeEffect(env, _ref3, cb) {
    var _ref3$channel = _ref3.channel, channel3 = _ref3$channel === void 0 ? env.channel : _ref3$channel, pattern2 = _ref3.pattern, maybe = _ref3.maybe;
    var takeCb = function takeCb2(input) {
      if (input instanceof Error) {
        cb(input, true);
        return;
      }
      if (isEnd(input) && !maybe) {
        cb(TERMINATE);
        return;
      }
      cb(input);
    };
    try {
      channel3.take(takeCb, notUndef(pattern2) ? matcher(pattern2) : null);
    } catch (err) {
      cb(err, true);
      return;
    }
    cb.cancel = takeCb.cancel;
  }
  function runCallEffect(env, _ref4, cb, _ref5) {
    var context = _ref4.context, fn = _ref4.fn, args = _ref4.args;
    var task2 = _ref5.task;
    try {
      var result = fn.apply(context, args);
      if (promise(result)) {
        resolvePromise(result, cb);
        return;
      }
      if (iterator(result)) {
        proc(
          env,
          result,
          task2.context,
          current,
          getMetaInfo(fn),
          /* isRoot */
          false,
          cb
        );
        return;
      }
      cb(result);
    } catch (error) {
      cb(error, true);
    }
  }
  function runCPSEffect(env, _ref6, cb) {
    var context = _ref6.context, fn = _ref6.fn, args = _ref6.args;
    try {
      var cpsCb = function cpsCb2(err, res) {
        if (undef(err)) {
          cb(res);
        } else {
          cb(err, true);
        }
      };
      fn.apply(context, args.concat(cpsCb));
      if (cpsCb.cancel) {
        cb.cancel = cpsCb.cancel;
      }
    } catch (error) {
      cb(error, true);
    }
  }
  function runForkEffect(env, _ref7, cb, _ref8) {
    var context = _ref7.context, fn = _ref7.fn, args = _ref7.args, detached = _ref7.detached;
    var parent = _ref8.task;
    var taskIterator = createTaskIterator({
      context,
      fn,
      args
    });
    var meta = getIteratorMetaInfo(taskIterator, fn);
    immediately(function() {
      var child = proc(env, taskIterator, parent.context, current, meta, detached, void 0);
      if (detached) {
        cb(child);
      } else {
        if (child.isRunning()) {
          parent.queue.addTask(child);
          cb(child);
        } else if (child.isAborted()) {
          parent.queue.abort(child.error());
        } else {
          cb(child);
        }
      }
    });
  }
  function runJoinEffect(env, taskOrTasks, cb, _ref9) {
    var task2 = _ref9.task;
    var joinSingleTask = function joinSingleTask2(taskToJoin, cb2) {
      if (taskToJoin.isRunning()) {
        var joiner = {
          task: task2,
          cb: cb2
        };
        cb2.cancel = function() {
          if (taskToJoin.isRunning()) remove(taskToJoin.joiners, joiner);
        };
        taskToJoin.joiners.push(joiner);
      } else {
        if (taskToJoin.isAborted()) {
          cb2(taskToJoin.error(), true);
        } else {
          cb2(taskToJoin.result());
        }
      }
    };
    if (array2(taskOrTasks)) {
      if (taskOrTasks.length === 0) {
        cb([]);
        return;
      }
      var childCallbacks = createAllStyleChildCallbacks(taskOrTasks, cb);
      taskOrTasks.forEach(function(t, i) {
        joinSingleTask(t, childCallbacks[i]);
      });
    } else {
      joinSingleTask(taskOrTasks, cb);
    }
  }
  function cancelSingleTask(taskToCancel) {
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
  }
  function runCancelEffect(env, taskOrTasks, cb, _ref10) {
    var task2 = _ref10.task;
    if (taskOrTasks === SELF_CANCELLATION) {
      cancelSingleTask(task2);
    } else if (array2(taskOrTasks)) {
      taskOrTasks.forEach(cancelSingleTask);
    } else {
      cancelSingleTask(taskOrTasks);
    }
    cb();
  }
  function runAllEffect(env, effects, cb, _ref11) {
    var digestEffect = _ref11.digestEffect;
    var effectId = current;
    var keys = Object.keys(effects);
    if (keys.length === 0) {
      cb(array2(effects) ? [] : {});
      return;
    }
    var childCallbacks = createAllStyleChildCallbacks(effects, cb);
    keys.forEach(function(key) {
      digestEffect(effects[key], effectId, childCallbacks[key], key);
    });
  }
  function runRaceEffect(env, effects, cb, _ref12) {
    var digestEffect = _ref12.digestEffect;
    var effectId = current;
    var keys = Object.keys(effects);
    var response = array2(effects) ? createEmptyArray(keys.length) : {};
    var childCbs = {};
    var completed = false;
    keys.forEach(function(key) {
      var chCbAtKey = function chCbAtKey2(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || shouldComplete(res)) {
          cb.cancel();
          cb(res, isErr);
        } else {
          cb.cancel();
          completed = true;
          response[key] = res;
          cb(response);
        }
      };
      chCbAtKey.cancel = noop;
      childCbs[key] = chCbAtKey;
    });
    cb.cancel = function() {
      if (!completed) {
        completed = true;
        keys.forEach(function(key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function(key) {
      if (completed) {
        return;
      }
      digestEffect(effects[key], effectId, childCbs[key], key);
    });
  }
  function runSelectEffect(env, _ref13, cb) {
    var selector = _ref13.selector, args = _ref13.args;
    try {
      var state = selector.apply(void 0, [env.getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }
  function runChannelEffect(env, _ref14, cb) {
    var pattern2 = _ref14.pattern, buffer3 = _ref14.buffer;
    var chan = channel2(buffer3);
    var match = matcher(pattern2);
    var taker = function taker2(action2) {
      if (!isEnd(action2)) {
        env.channel.take(taker2, match);
      }
      chan.put(action2);
    };
    var close = chan.close;
    chan.close = function() {
      taker.cancel();
      close();
    };
    env.channel.take(taker, match);
    cb(chan);
  }
  function runCancelledEffect(env, data, cb, _ref15) {
    var task2 = _ref15.task;
    cb(task2.isCancelled());
  }
  function runFlushEffect(env, channel3, cb) {
    channel3.flush(cb);
  }
  function runGetContextEffect(env, prop, cb, _ref16) {
    var task2 = _ref16.task;
    cb(task2.context[prop]);
  }
  function runSetContextEffect(env, props, cb, _ref17) {
    var task2 = _ref17.task;
    assignWithSymbols(task2.context, props);
    cb();
  }
  var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[TAKE] = runTakeEffect, _effectRunnerMap[PUT] = runPutEffect, _effectRunnerMap[ALL] = runAllEffect, _effectRunnerMap[RACE] = runRaceEffect, _effectRunnerMap[CALL] = runCallEffect, _effectRunnerMap[CPS] = runCPSEffect, _effectRunnerMap[FORK] = runForkEffect, _effectRunnerMap[JOIN] = runJoinEffect, _effectRunnerMap[CANCEL2] = runCancelEffect, _effectRunnerMap[SELECT] = runSelectEffect, _effectRunnerMap[ACTION_CHANNEL] = runChannelEffect, _effectRunnerMap[CANCELLED] = runCancelledEffect, _effectRunnerMap[FLUSH] = runFlushEffect, _effectRunnerMap[GET_CONTEXT] = runGetContextEffect, _effectRunnerMap[SET_CONTEXT] = runSetContextEffect, _effectRunnerMap);
  function forkQueue(mainTask, onAbort, cont) {
    var tasks = [];
    var result;
    var completed = false;
    addTask(mainTask);
    var getTasks = function getTasks2() {
      return tasks;
    };
    function abort(err) {
      onAbort();
      cancelAll();
      cont(err, true);
    }
    function addTask(task2) {
      tasks.push(task2);
      task2.cont = function(res, isErr) {
        if (completed) {
          return;
        }
        remove(tasks, task2);
        task2.cont = noop;
        if (isErr) {
          abort(res);
        } else {
          if (task2 === mainTask) {
            result = res;
          }
          if (!tasks.length) {
            completed = true;
            cont(result);
          }
        }
      };
    }
    function cancelAll() {
      if (completed) {
        return;
      }
      completed = true;
      tasks.forEach(function(t) {
        t.cont = noop;
        t.cancel();
      });
      tasks = [];
    }
    return {
      addTask,
      cancelAll,
      abort,
      getTasks
    };
  }
  function formatLocation(fileName, lineNumber) {
    return fileName + "?" + lineNumber;
  }
  function effectLocationAsString(effect2) {
    var location = getLocation(effect2);
    if (location) {
      var code = location.code, fileName = location.fileName, lineNumber = location.lineNumber;
      var source = code + "  " + formatLocation(fileName, lineNumber);
      return source;
    }
    return "";
  }
  function sagaLocationAsString(sagaMeta) {
    var name = sagaMeta.name, location = sagaMeta.location;
    if (location) {
      return name + "  " + formatLocation(location.fileName, location.lineNumber);
    }
    return name;
  }
  function cancelledTasksAsString(sagaStack2) {
    var cancelledTasks = flatMap(function(i) {
      return i.cancelledTasks;
    }, sagaStack2);
    if (!cancelledTasks.length) {
      return "";
    }
    return ["Tasks cancelled due to error:"].concat(cancelledTasks).join("\n");
  }
  var crashedEffect = null;
  var sagaStack = [];
  var addSagaFrame = function addSagaFrame2(frame) {
    frame.crashedEffect = crashedEffect;
    sagaStack.push(frame);
  };
  var clear = function clear2() {
    crashedEffect = null;
    sagaStack.length = 0;
  };
  var setCrashedEffect = function setCrashedEffect2(effect2) {
    crashedEffect = effect2;
  };
  var toString = function toString2() {
    var firstSaga = sagaStack[0], otherSagas = sagaStack.slice(1);
    var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
    var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : "");
    return [errorMessage].concat(otherSagas.map(function(s) {
      return "    created by " + sagaLocationAsString(s.meta);
    }), [cancelledTasksAsString(sagaStack)]).join("\n");
  };
  function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
    var _task;
    if (cont === void 0) {
      cont = noop;
    }
    var status = RUNNING;
    var taskResult;
    var taskError;
    var deferredEnd = null;
    var cancelledDueToErrorTasks = [];
    var context = Object.create(parentContext);
    var queue2 = forkQueue(mainTask, function onAbort() {
      cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue2.getTasks().map(function(t) {
        return t.meta.name;
      }));
    }, end);
    function cancel2() {
      if (status === RUNNING) {
        status = CANCELLED2;
        queue2.cancelAll();
        end(TASK_CANCEL, false);
      }
    }
    function end(result, isErr) {
      if (!isErr) {
        if (result === TASK_CANCEL) {
          status = CANCELLED2;
        } else if (status !== CANCELLED2) {
          status = DONE;
        }
        taskResult = result;
        deferredEnd && deferredEnd.resolve(result);
      } else {
        status = ABORTED;
        addSagaFrame({
          meta,
          cancelledTasks: cancelledDueToErrorTasks
        });
        if (task2.isRoot) {
          var sagaStack2 = toString();
          clear();
          env.onError(result, {
            sagaStack: sagaStack2
          });
        }
        taskError = result;
        deferredEnd && deferredEnd.reject(result);
      }
      task2.cont(result, isErr);
      task2.joiners.forEach(function(joiner) {
        joiner.cb(result, isErr);
      });
      task2.joiners = null;
    }
    function setContext2(props) {
      if (true) {
        check2(props, object2, createSetContextWarning("task", props));
      }
      assignWithSymbols(context, props);
    }
    function toPromise() {
      if (deferredEnd) {
        return deferredEnd.promise;
      }
      deferredEnd = redux_saga_deferred_esm_default();
      if (status === ABORTED) {
        deferredEnd.reject(taskError);
      } else if (status !== RUNNING) {
        deferredEnd.resolve(taskResult);
      }
      return deferredEnd.promise;
    }
    var task2 = (_task = {}, _task[TASK] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue2, _task.cancel = cancel2, _task.cont = cont, _task.end = end, _task.setContext = setContext2, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
      return status === RUNNING;
    }, _task.isCancelled = function isCancelled() {
      return status === CANCELLED2 || status === RUNNING && mainTask.status === CANCELLED2;
    }, _task.isAborted = function isAborted() {
      return status === ABORTED;
    }, _task.result = function result() {
      return taskResult;
    }, _task.error = function error() {
      return taskError;
    }, _task);
    return task2;
  }
  function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
    if (iterator$1[asyncIteratorSymbol]) {
      throw new Error("redux-saga doesn't support async generators, please use only regular ones");
    }
    var finalRunEffect = env.finalizeRunEffect(runEffect);
    next.cancel = noop;
    var mainTask = {
      meta,
      cancel: cancelMain,
      status: RUNNING
    };
    var task2 = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
    var executingContext = {
      task: task2,
      digestEffect
    };
    function cancelMain() {
      if (mainTask.status === RUNNING) {
        mainTask.status = CANCELLED2;
        next(TASK_CANCEL);
      }
    }
    if (cont) {
      cont.cancel = task2.cancel;
    }
    next();
    return task2;
    function next(arg, isErr) {
      try {
        var result;
        if (isErr) {
          result = iterator$1.throw(arg);
          clear();
        } else if (shouldCancel(arg)) {
          mainTask.status = CANCELLED2;
          next.cancel();
          result = func(iterator$1.return) ? iterator$1.return(TASK_CANCEL) : {
            done: true,
            value: TASK_CANCEL
          };
        } else if (shouldTerminate(arg)) {
          result = func(iterator$1.return) ? iterator$1.return() : {
            done: true
          };
        } else {
          result = iterator$1.next(arg);
        }
        if (!result.done) {
          digestEffect(result.value, parentEffectId, next);
        } else {
          if (mainTask.status !== CANCELLED2) {
            mainTask.status = DONE;
          }
          mainTask.cont(result.value);
        }
      } catch (error) {
        if (mainTask.status === CANCELLED2) {
          throw error;
        }
        mainTask.status = ABORTED;
        mainTask.cont(error, true);
      }
    }
    function runEffect(effect2, effectId, currCb) {
      if (promise(effect2)) {
        resolvePromise(effect2, currCb);
      } else if (iterator(effect2)) {
        proc(
          env,
          effect2,
          task2.context,
          effectId,
          meta,
          /* isRoot */
          false,
          currCb
        );
      } else if (effect2 && effect2[IO]) {
        var effectRunner = effectRunnerMap[effect2.type];
        effectRunner(env, effect2.payload, currCb, executingContext);
      } else {
        currCb(effect2);
      }
    }
    function digestEffect(effect2, parentEffectId2, cb, label) {
      if (label === void 0) {
        label = "";
      }
      var effectId = nextSagaId();
      env.sagaMonitor && env.sagaMonitor.effectTriggered({
        effectId,
        parentEffectId: parentEffectId2,
        label,
        effect: effect2
      });
      var effectSettled;
      function currCb(res, isErr) {
        if (effectSettled) {
          return;
        }
        effectSettled = true;
        cb.cancel = noop;
        if (env.sagaMonitor) {
          if (isErr) {
            env.sagaMonitor.effectRejected(effectId, res);
          } else {
            env.sagaMonitor.effectResolved(effectId, res);
          }
        }
        if (isErr) {
          setCrashedEffect(effect2);
        }
        cb(res, isErr);
      }
      currCb.cancel = noop;
      cb.cancel = function() {
        if (effectSettled) {
          return;
        }
        effectSettled = true;
        currCb.cancel();
        currCb.cancel = noop;
        env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
      };
      finalRunEffect(effect2, effectId, currCb);
    }
  }
  var RUN_SAGA_SIGNATURE = "runSaga(options, saga, ...args)";
  var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";

  // ../core/dist/botframework-webchat-core.mjs
  var import_simple_update_in = __toESM(require_simple_update_in_production_min(), 1);
  var import_simple_update_in2 = __toESM(require_simple_update_in_production_min(), 1);
  var import_simple_update_in3 = __toESM(require_simple_update_in_production_min(), 1);

  // ../../node_modules/jwt-decode/build/esm/index.js
  var InvalidTokenError = class extends Error {
  };
  InvalidTokenError.prototype.name = "InvalidTokenError";

  // ../core/dist/botframework-webchat-core.mjs
  var import_simple_update_in4 = __toESM(require_simple_update_in_production_min(), 1);

  // ../core/node_modules/mime/dist/types/other.js
  var types = {
    "application/prs.cww": ["cww"],
    "application/prs.xsf+xml": ["xsf"],
    "application/vnd.1000minds.decision-model+xml": ["1km"],
    "application/vnd.3gpp.pic-bw-large": ["plb"],
    "application/vnd.3gpp.pic-bw-small": ["psb"],
    "application/vnd.3gpp.pic-bw-var": ["pvb"],
    "application/vnd.3gpp2.tcap": ["tcap"],
    "application/vnd.3m.post-it-notes": ["pwn"],
    "application/vnd.accpac.simply.aso": ["aso"],
    "application/vnd.accpac.simply.imp": ["imp"],
    "application/vnd.acucobol": ["acu"],
    "application/vnd.acucorp": ["atc", "acutc"],
    "application/vnd.adobe.air-application-installer-package+zip": ["air"],
    "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
    "application/vnd.adobe.fxp": ["fxp", "fxpl"],
    "application/vnd.adobe.xdp+xml": ["xdp"],
    "application/vnd.adobe.xfdf": ["*xfdf"],
    "application/vnd.age": ["age"],
    "application/vnd.ahead.space": ["ahead"],
    "application/vnd.airzip.filesecure.azf": ["azf"],
    "application/vnd.airzip.filesecure.azs": ["azs"],
    "application/vnd.amazon.ebook": ["azw"],
    "application/vnd.americandynamics.acc": ["acc"],
    "application/vnd.amiga.ami": ["ami"],
    "application/vnd.android.package-archive": ["apk"],
    "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
    "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
    "application/vnd.antix.game-component": ["atx"],
    "application/vnd.apple.installer+xml": ["mpkg"],
    "application/vnd.apple.keynote": ["key"],
    "application/vnd.apple.mpegurl": ["m3u8"],
    "application/vnd.apple.numbers": ["numbers"],
    "application/vnd.apple.pages": ["pages"],
    "application/vnd.apple.pkpass": ["pkpass"],
    "application/vnd.aristanetworks.swi": ["swi"],
    "application/vnd.astraea-software.iota": ["iota"],
    "application/vnd.audiograph": ["aep"],
    "application/vnd.autodesk.fbx": ["fbx"],
    "application/vnd.balsamiq.bmml+xml": ["bmml"],
    "application/vnd.blueice.multipass": ["mpm"],
    "application/vnd.bmi": ["bmi"],
    "application/vnd.businessobjects": ["rep"],
    "application/vnd.chemdraw+xml": ["cdxml"],
    "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
    "application/vnd.cinderella": ["cdy"],
    "application/vnd.citationstyles.style+xml": ["csl"],
    "application/vnd.claymore": ["cla"],
    "application/vnd.cloanto.rp9": ["rp9"],
    "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
    "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
    "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
    "application/vnd.commonspace": ["csp"],
    "application/vnd.contact.cmsg": ["cdbcmsg"],
    "application/vnd.cosmocaller": ["cmc"],
    "application/vnd.crick.clicker": ["clkx"],
    "application/vnd.crick.clicker.keyboard": ["clkk"],
    "application/vnd.crick.clicker.palette": ["clkp"],
    "application/vnd.crick.clicker.template": ["clkt"],
    "application/vnd.crick.clicker.wordbank": ["clkw"],
    "application/vnd.criticaltools.wbs+xml": ["wbs"],
    "application/vnd.ctc-posml": ["pml"],
    "application/vnd.cups-ppd": ["ppd"],
    "application/vnd.curl.car": ["car"],
    "application/vnd.curl.pcurl": ["pcurl"],
    "application/vnd.dart": ["dart"],
    "application/vnd.data-vision.rdz": ["rdz"],
    "application/vnd.dbf": ["dbf"],
    "application/vnd.dcmp+xml": ["dcmp"],
    "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
    "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
    "application/vnd.dece.unspecified": ["uvx", "uvvx"],
    "application/vnd.dece.zip": ["uvz", "uvvz"],
    "application/vnd.denovo.fcselayout-link": ["fe_launch"],
    "application/vnd.dna": ["dna"],
    "application/vnd.dolby.mlp": ["mlp"],
    "application/vnd.dpgraph": ["dpg"],
    "application/vnd.dreamfactory": ["dfac"],
    "application/vnd.ds-keypoint": ["kpxx"],
    "application/vnd.dvb.ait": ["ait"],
    "application/vnd.dvb.service": ["svc"],
    "application/vnd.dynageo": ["geo"],
    "application/vnd.ecowin.chart": ["mag"],
    "application/vnd.enliven": ["nml"],
    "application/vnd.epson.esf": ["esf"],
    "application/vnd.epson.msf": ["msf"],
    "application/vnd.epson.quickanime": ["qam"],
    "application/vnd.epson.salt": ["slt"],
    "application/vnd.epson.ssf": ["ssf"],
    "application/vnd.eszigno3+xml": ["es3", "et3"],
    "application/vnd.ezpix-album": ["ez2"],
    "application/vnd.ezpix-package": ["ez3"],
    "application/vnd.fdf": ["*fdf"],
    "application/vnd.fdsn.mseed": ["mseed"],
    "application/vnd.fdsn.seed": ["seed", "dataless"],
    "application/vnd.flographit": ["gph"],
    "application/vnd.fluxtime.clip": ["ftc"],
    "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
    "application/vnd.frogans.fnc": ["fnc"],
    "application/vnd.frogans.ltf": ["ltf"],
    "application/vnd.fsc.weblaunch": ["fsc"],
    "application/vnd.fujitsu.oasys": ["oas"],
    "application/vnd.fujitsu.oasys2": ["oa2"],
    "application/vnd.fujitsu.oasys3": ["oa3"],
    "application/vnd.fujitsu.oasysgp": ["fg5"],
    "application/vnd.fujitsu.oasysprs": ["bh2"],
    "application/vnd.fujixerox.ddd": ["ddd"],
    "application/vnd.fujixerox.docuworks": ["xdw"],
    "application/vnd.fujixerox.docuworks.binder": ["xbd"],
    "application/vnd.fuzzysheet": ["fzs"],
    "application/vnd.genomatix.tuxedo": ["txd"],
    "application/vnd.geogebra.file": ["ggb"],
    "application/vnd.geogebra.slides": ["ggs"],
    "application/vnd.geogebra.tool": ["ggt"],
    "application/vnd.geometry-explorer": ["gex", "gre"],
    "application/vnd.geonext": ["gxt"],
    "application/vnd.geoplan": ["g2w"],
    "application/vnd.geospace": ["g3w"],
    "application/vnd.gmx": ["gmx"],
    "application/vnd.google-apps.document": ["gdoc"],
    "application/vnd.google-apps.drawing": ["gdraw"],
    "application/vnd.google-apps.form": ["gform"],
    "application/vnd.google-apps.jam": ["gjam"],
    "application/vnd.google-apps.map": ["gmap"],
    "application/vnd.google-apps.presentation": ["gslides"],
    "application/vnd.google-apps.script": ["gscript"],
    "application/vnd.google-apps.site": ["gsite"],
    "application/vnd.google-apps.spreadsheet": ["gsheet"],
    "application/vnd.google-earth.kml+xml": ["kml"],
    "application/vnd.google-earth.kmz": ["kmz"],
    "application/vnd.gov.sk.xmldatacontainer+xml": ["xdcf"],
    "application/vnd.grafeq": ["gqf", "gqs"],
    "application/vnd.groove-account": ["gac"],
    "application/vnd.groove-help": ["ghf"],
    "application/vnd.groove-identity-message": ["gim"],
    "application/vnd.groove-injector": ["grv"],
    "application/vnd.groove-tool-message": ["gtm"],
    "application/vnd.groove-tool-template": ["tpl"],
    "application/vnd.groove-vcard": ["vcg"],
    "application/vnd.hal+xml": ["hal"],
    "application/vnd.handheld-entertainment+xml": ["zmm"],
    "application/vnd.hbci": ["hbci"],
    "application/vnd.hhe.lesson-player": ["les"],
    "application/vnd.hp-hpgl": ["hpgl"],
    "application/vnd.hp-hpid": ["hpid"],
    "application/vnd.hp-hps": ["hps"],
    "application/vnd.hp-jlyt": ["jlt"],
    "application/vnd.hp-pcl": ["pcl"],
    "application/vnd.hp-pclxl": ["pclxl"],
    "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
    "application/vnd.ibm.minipay": ["mpy"],
    "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
    "application/vnd.ibm.rights-management": ["irm"],
    "application/vnd.ibm.secure-container": ["sc"],
    "application/vnd.iccprofile": ["icc", "icm"],
    "application/vnd.igloader": ["igl"],
    "application/vnd.immervision-ivp": ["ivp"],
    "application/vnd.immervision-ivu": ["ivu"],
    "application/vnd.insors.igm": ["igm"],
    "application/vnd.intercon.formnet": ["xpw", "xpx"],
    "application/vnd.intergeo": ["i2g"],
    "application/vnd.intu.qbo": ["qbo"],
    "application/vnd.intu.qfx": ["qfx"],
    "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
    "application/vnd.irepository.package+xml": ["irp"],
    "application/vnd.is-xpr": ["xpr"],
    "application/vnd.isac.fcs": ["fcs"],
    "application/vnd.jam": ["jam"],
    "application/vnd.jcp.javame.midlet-rms": ["rms"],
    "application/vnd.jisp": ["jisp"],
    "application/vnd.joost.joda-archive": ["joda"],
    "application/vnd.kahootz": ["ktz", "ktr"],
    "application/vnd.kde.karbon": ["karbon"],
    "application/vnd.kde.kchart": ["chrt"],
    "application/vnd.kde.kformula": ["kfo"],
    "application/vnd.kde.kivio": ["flw"],
    "application/vnd.kde.kontour": ["kon"],
    "application/vnd.kde.kpresenter": ["kpr", "kpt"],
    "application/vnd.kde.kspread": ["ksp"],
    "application/vnd.kde.kword": ["kwd", "kwt"],
    "application/vnd.kenameaapp": ["htke"],
    "application/vnd.kidspiration": ["kia"],
    "application/vnd.kinar": ["kne", "knp"],
    "application/vnd.koan": ["skp", "skd", "skt", "skm"],
    "application/vnd.kodak-descriptor": ["sse"],
    "application/vnd.las.las+xml": ["lasxml"],
    "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
    "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
    "application/vnd.lotus-1-2-3": ["123"],
    "application/vnd.lotus-approach": ["apr"],
    "application/vnd.lotus-freelance": ["pre"],
    "application/vnd.lotus-notes": ["nsf"],
    "application/vnd.lotus-organizer": ["org"],
    "application/vnd.lotus-screencam": ["scm"],
    "application/vnd.lotus-wordpro": ["lwp"],
    "application/vnd.macports.portpkg": ["portpkg"],
    "application/vnd.mapbox-vector-tile": ["mvt"],
    "application/vnd.mcd": ["mcd"],
    "application/vnd.medcalcdata": ["mc1"],
    "application/vnd.mediastation.cdkey": ["cdkey"],
    "application/vnd.mfer": ["mwf"],
    "application/vnd.mfmp": ["mfm"],
    "application/vnd.micrografx.flo": ["flo"],
    "application/vnd.micrografx.igx": ["igx"],
    "application/vnd.mif": ["mif"],
    "application/vnd.mobius.daf": ["daf"],
    "application/vnd.mobius.dis": ["dis"],
    "application/vnd.mobius.mbk": ["mbk"],
    "application/vnd.mobius.mqy": ["mqy"],
    "application/vnd.mobius.msl": ["msl"],
    "application/vnd.mobius.plc": ["plc"],
    "application/vnd.mobius.txf": ["txf"],
    "application/vnd.mophun.application": ["mpn"],
    "application/vnd.mophun.certificate": ["mpc"],
    "application/vnd.mozilla.xul+xml": ["xul"],
    "application/vnd.ms-artgalry": ["cil"],
    "application/vnd.ms-cab-compressed": ["cab"],
    "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
    "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
    "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
    "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
    "application/vnd.ms-fontobject": ["eot"],
    "application/vnd.ms-htmlhelp": ["chm"],
    "application/vnd.ms-ims": ["ims"],
    "application/vnd.ms-lrm": ["lrm"],
    "application/vnd.ms-officetheme": ["thmx"],
    "application/vnd.ms-outlook": ["msg"],
    "application/vnd.ms-pki.seccat": ["cat"],
    "application/vnd.ms-pki.stl": ["*stl"],
    "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
    "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
    "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
    "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
    "application/vnd.ms-project": ["*mpp", "mpt"],
    "application/vnd.ms-visio.viewer": ["vdx"],
    "application/vnd.ms-word.document.macroenabled.12": ["docm"],
    "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
    "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
    "application/vnd.ms-wpl": ["wpl"],
    "application/vnd.ms-xpsdocument": ["xps"],
    "application/vnd.mseq": ["mseq"],
    "application/vnd.musician": ["mus"],
    "application/vnd.muvee.style": ["msty"],
    "application/vnd.mynfc": ["taglet"],
    "application/vnd.nato.bindingdataobject+xml": ["bdo"],
    "application/vnd.neurolanguage.nlu": ["nlu"],
    "application/vnd.nitf": ["ntf", "nitf"],
    "application/vnd.noblenet-directory": ["nnd"],
    "application/vnd.noblenet-sealer": ["nns"],
    "application/vnd.noblenet-web": ["nnw"],
    "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
    "application/vnd.nokia.n-gage.data": ["ngdat"],
    "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
    "application/vnd.nokia.radio-preset": ["rpst"],
    "application/vnd.nokia.radio-presets": ["rpss"],
    "application/vnd.novadigm.edm": ["edm"],
    "application/vnd.novadigm.edx": ["edx"],
    "application/vnd.novadigm.ext": ["ext"],
    "application/vnd.oasis.opendocument.chart": ["odc"],
    "application/vnd.oasis.opendocument.chart-template": ["otc"],
    "application/vnd.oasis.opendocument.database": ["odb"],
    "application/vnd.oasis.opendocument.formula": ["odf"],
    "application/vnd.oasis.opendocument.formula-template": ["odft"],
    "application/vnd.oasis.opendocument.graphics": ["odg"],
    "application/vnd.oasis.opendocument.graphics-template": ["otg"],
    "application/vnd.oasis.opendocument.image": ["odi"],
    "application/vnd.oasis.opendocument.image-template": ["oti"],
    "application/vnd.oasis.opendocument.presentation": ["odp"],
    "application/vnd.oasis.opendocument.presentation-template": ["otp"],
    "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
    "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
    "application/vnd.oasis.opendocument.text": ["odt"],
    "application/vnd.oasis.opendocument.text-master": ["odm"],
    "application/vnd.oasis.opendocument.text-template": ["ott"],
    "application/vnd.oasis.opendocument.text-web": ["oth"],
    "application/vnd.olpc-sugar": ["xo"],
    "application/vnd.oma.dd2+xml": ["dd2"],
    "application/vnd.openblox.game+xml": ["obgx"],
    "application/vnd.openofficeorg.extension": ["oxt"],
    "application/vnd.openstreetmap.data+xml": ["osm"],
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
      "pptx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.slide": [
      "sldx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": [
      "ppsx"
    ],
    "application/vnd.openxmlformats-officedocument.presentationml.template": [
      "potx"
    ],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": [
      "xltx"
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      "docx"
    ],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": [
      "dotx"
    ],
    "application/vnd.osgeo.mapguide.package": ["mgp"],
    "application/vnd.osgi.dp": ["dp"],
    "application/vnd.osgi.subsystem": ["esa"],
    "application/vnd.palm": ["pdb", "pqa", "oprc"],
    "application/vnd.pawaafile": ["paw"],
    "application/vnd.pg.format": ["str"],
    "application/vnd.pg.osasli": ["ei6"],
    "application/vnd.picsel": ["efif"],
    "application/vnd.pmi.widget": ["wg"],
    "application/vnd.pocketlearn": ["plf"],
    "application/vnd.powerbuilder6": ["pbd"],
    "application/vnd.previewsystems.box": ["box"],
    "application/vnd.procrate.brushset": ["brushset"],
    "application/vnd.procreate.brush": ["brush"],
    "application/vnd.procreate.dream": ["drm"],
    "application/vnd.proteus.magazine": ["mgz"],
    "application/vnd.publishare-delta-tree": ["qps"],
    "application/vnd.pvi.ptid1": ["ptid"],
    "application/vnd.pwg-xhtml-print+xml": ["xhtm"],
    "application/vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "application/vnd.rar": ["rar"],
    "application/vnd.realvnc.bed": ["bed"],
    "application/vnd.recordare.musicxml": ["mxl"],
    "application/vnd.recordare.musicxml+xml": ["musicxml"],
    "application/vnd.rig.cryptonote": ["cryptonote"],
    "application/vnd.rim.cod": ["cod"],
    "application/vnd.rn-realmedia": ["rm"],
    "application/vnd.rn-realmedia-vbr": ["rmvb"],
    "application/vnd.route66.link66+xml": ["link66"],
    "application/vnd.sailingtracker.track": ["st"],
    "application/vnd.seemail": ["see"],
    "application/vnd.sema": ["sema"],
    "application/vnd.semd": ["semd"],
    "application/vnd.semf": ["semf"],
    "application/vnd.shana.informed.formdata": ["ifm"],
    "application/vnd.shana.informed.formtemplate": ["itp"],
    "application/vnd.shana.informed.interchange": ["iif"],
    "application/vnd.shana.informed.package": ["ipk"],
    "application/vnd.simtech-mindmapper": ["twd", "twds"],
    "application/vnd.smaf": ["mmf"],
    "application/vnd.smart.teacher": ["teacher"],
    "application/vnd.software602.filler.form+xml": ["fo"],
    "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
    "application/vnd.spotfire.dxp": ["dxp"],
    "application/vnd.spotfire.sfs": ["sfs"],
    "application/vnd.stardivision.calc": ["sdc"],
    "application/vnd.stardivision.draw": ["sda"],
    "application/vnd.stardivision.impress": ["sdd"],
    "application/vnd.stardivision.math": ["smf"],
    "application/vnd.stardivision.writer": ["sdw", "vor"],
    "application/vnd.stardivision.writer-global": ["sgl"],
    "application/vnd.stepmania.package": ["smzip"],
    "application/vnd.stepmania.stepchart": ["sm"],
    "application/vnd.sun.wadl+xml": ["wadl"],
    "application/vnd.sun.xml.calc": ["sxc"],
    "application/vnd.sun.xml.calc.template": ["stc"],
    "application/vnd.sun.xml.draw": ["sxd"],
    "application/vnd.sun.xml.draw.template": ["std"],
    "application/vnd.sun.xml.impress": ["sxi"],
    "application/vnd.sun.xml.impress.template": ["sti"],
    "application/vnd.sun.xml.math": ["sxm"],
    "application/vnd.sun.xml.writer": ["sxw"],
    "application/vnd.sun.xml.writer.global": ["sxg"],
    "application/vnd.sun.xml.writer.template": ["stw"],
    "application/vnd.sus-calendar": ["sus", "susp"],
    "application/vnd.svd": ["svd"],
    "application/vnd.symbian.install": ["sis", "sisx"],
    "application/vnd.syncml+xml": ["xsm"],
    "application/vnd.syncml.dm+wbxml": ["bdm"],
    "application/vnd.syncml.dm+xml": ["xdm"],
    "application/vnd.syncml.dmddf+xml": ["ddf"],
    "application/vnd.tao.intent-module-archive": ["tao"],
    "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
    "application/vnd.tmobile-livetv": ["tmo"],
    "application/vnd.trid.tpt": ["tpt"],
    "application/vnd.triscape.mxs": ["mxs"],
    "application/vnd.trueapp": ["tra"],
    "application/vnd.ufdl": ["ufd", "ufdl"],
    "application/vnd.uiq.theme": ["utz"],
    "application/vnd.umajin": ["umj"],
    "application/vnd.unity": ["unityweb"],
    "application/vnd.uoml+xml": ["uoml", "uo"],
    "application/vnd.vcx": ["vcx"],
    "application/vnd.visio": ["vsd", "vst", "vss", "vsw", "vsdx", "vtx"],
    "application/vnd.visionary": ["vis"],
    "application/vnd.vsf": ["vsf"],
    "application/vnd.wap.wbxml": ["wbxml"],
    "application/vnd.wap.wmlc": ["wmlc"],
    "application/vnd.wap.wmlscriptc": ["wmlsc"],
    "application/vnd.webturbo": ["wtb"],
    "application/vnd.wolfram.player": ["nbp"],
    "application/vnd.wordperfect": ["wpd"],
    "application/vnd.wqd": ["wqd"],
    "application/vnd.wt.stf": ["stf"],
    "application/vnd.xara": ["xar"],
    "application/vnd.xfdl": ["xfdl"],
    "application/vnd.yamaha.hv-dic": ["hvd"],
    "application/vnd.yamaha.hv-script": ["hvs"],
    "application/vnd.yamaha.hv-voice": ["hvp"],
    "application/vnd.yamaha.openscoreformat": ["osf"],
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
    "application/vnd.yamaha.smaf-audio": ["saf"],
    "application/vnd.yamaha.smaf-phrase": ["spf"],
    "application/vnd.yellowriver-custom-menu": ["cmp"],
    "application/vnd.zul": ["zir", "zirz"],
    "application/vnd.zzazz.deck+xml": ["zaz"],
    "application/x-7z-compressed": ["7z"],
    "application/x-abiword": ["abw"],
    "application/x-ace-compressed": ["ace"],
    "application/x-apple-diskimage": ["*dmg"],
    "application/x-arj": ["arj"],
    "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
    "application/x-authorware-map": ["aam"],
    "application/x-authorware-seg": ["aas"],
    "application/x-bcpio": ["bcpio"],
    "application/x-bdoc": ["*bdoc"],
    "application/x-bittorrent": ["torrent"],
    "application/x-blender": ["blend"],
    "application/x-blorb": ["blb", "blorb"],
    "application/x-bzip": ["bz"],
    "application/x-bzip2": ["bz2", "boz"],
    "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
    "application/x-cdlink": ["vcd"],
    "application/x-cfs-compressed": ["cfs"],
    "application/x-chat": ["chat"],
    "application/x-chess-pgn": ["pgn"],
    "application/x-chrome-extension": ["crx"],
    "application/x-cocoa": ["cco"],
    "application/x-compressed": ["*rar"],
    "application/x-conference": ["nsc"],
    "application/x-cpio": ["cpio"],
    "application/x-csh": ["csh"],
    "application/x-debian-package": ["*deb", "udeb"],
    "application/x-dgc-compressed": ["dgc"],
    "application/x-director": [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "application/x-doom": ["wad"],
    "application/x-dtbncx+xml": ["ncx"],
    "application/x-dtbook+xml": ["dtb"],
    "application/x-dtbresource+xml": ["res"],
    "application/x-dvi": ["dvi"],
    "application/x-envoy": ["evy"],
    "application/x-eva": ["eva"],
    "application/x-font-bdf": ["bdf"],
    "application/x-font-ghostscript": ["gsf"],
    "application/x-font-linux-psf": ["psf"],
    "application/x-font-pcf": ["pcf"],
    "application/x-font-snf": ["snf"],
    "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
    "application/x-freearc": ["arc"],
    "application/x-futuresplash": ["spl"],
    "application/x-gca-compressed": ["gca"],
    "application/x-glulx": ["ulx"],
    "application/x-gnumeric": ["gnumeric"],
    "application/x-gramps-xml": ["gramps"],
    "application/x-gtar": ["gtar"],
    "application/x-hdf": ["hdf"],
    "application/x-httpd-php": ["php"],
    "application/x-install-instructions": ["install"],
    "application/x-ipynb+json": ["ipynb"],
    "application/x-iso9660-image": ["*iso"],
    "application/x-iwork-keynote-sffkey": ["*key"],
    "application/x-iwork-numbers-sffnumbers": ["*numbers"],
    "application/x-iwork-pages-sffpages": ["*pages"],
    "application/x-java-archive-diff": ["jardiff"],
    "application/x-java-jnlp-file": ["jnlp"],
    "application/x-keepass2": ["kdbx"],
    "application/x-latex": ["latex"],
    "application/x-lua-bytecode": ["luac"],
    "application/x-lzh-compressed": ["lzh", "lha"],
    "application/x-makeself": ["run"],
    "application/x-mie": ["mie"],
    "application/x-mobipocket-ebook": ["*prc", "mobi"],
    "application/x-ms-application": ["application"],
    "application/x-ms-shortcut": ["lnk"],
    "application/x-ms-wmd": ["wmd"],
    "application/x-ms-wmz": ["wmz"],
    "application/x-ms-xbap": ["xbap"],
    "application/x-msaccess": ["mdb"],
    "application/x-msbinder": ["obd"],
    "application/x-mscardfile": ["crd"],
    "application/x-msclip": ["clp"],
    "application/x-msdos-program": ["*exe"],
    "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
    "application/x-msmediaview": ["mvb", "m13", "m14"],
    "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
    "application/x-msmoney": ["mny"],
    "application/x-mspublisher": ["pub"],
    "application/x-msschedule": ["scd"],
    "application/x-msterminal": ["trm"],
    "application/x-mswrite": ["wri"],
    "application/x-netcdf": ["nc", "cdf"],
    "application/x-ns-proxy-autoconfig": ["pac"],
    "application/x-nzb": ["nzb"],
    "application/x-perl": ["pl", "pm"],
    "application/x-pilot": ["*prc", "*pdb"],
    "application/x-pkcs12": ["p12", "pfx"],
    "application/x-pkcs7-certificates": ["p7b", "spc"],
    "application/x-pkcs7-certreqresp": ["p7r"],
    "application/x-rar-compressed": ["*rar"],
    "application/x-redhat-package-manager": ["rpm"],
    "application/x-research-info-systems": ["ris"],
    "application/x-sea": ["sea"],
    "application/x-sh": ["sh"],
    "application/x-shar": ["shar"],
    "application/x-shockwave-flash": ["swf"],
    "application/x-silverlight-app": ["xap"],
    "application/x-sql": ["*sql"],
    "application/x-stuffit": ["sit"],
    "application/x-stuffitx": ["sitx"],
    "application/x-subrip": ["srt"],
    "application/x-sv4cpio": ["sv4cpio"],
    "application/x-sv4crc": ["sv4crc"],
    "application/x-t3vm-image": ["t3"],
    "application/x-tads": ["gam"],
    "application/x-tar": ["tar"],
    "application/x-tcl": ["tcl", "tk"],
    "application/x-tex": ["tex"],
    "application/x-tex-tfm": ["tfm"],
    "application/x-texinfo": ["texinfo", "texi"],
    "application/x-tgif": ["*obj"],
    "application/x-ustar": ["ustar"],
    "application/x-virtualbox-hdd": ["hdd"],
    "application/x-virtualbox-ova": ["ova"],
    "application/x-virtualbox-ovf": ["ovf"],
    "application/x-virtualbox-vbox": ["vbox"],
    "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
    "application/x-virtualbox-vdi": ["vdi"],
    "application/x-virtualbox-vhd": ["vhd"],
    "application/x-virtualbox-vmdk": ["vmdk"],
    "application/x-wais-source": ["src"],
    "application/x-web-app-manifest+json": ["webapp"],
    "application/x-x509-ca-cert": ["der", "crt", "pem"],
    "application/x-xfig": ["fig"],
    "application/x-xliff+xml": ["*xlf"],
    "application/x-xpinstall": ["xpi"],
    "application/x-xz": ["xz"],
    "application/x-zip-compressed": ["*zip"],
    "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
    "audio/vnd.dece.audio": ["uva", "uvva"],
    "audio/vnd.digital-winds": ["eol"],
    "audio/vnd.dra": ["dra"],
    "audio/vnd.dts": ["dts"],
    "audio/vnd.dts.hd": ["dtshd"],
    "audio/vnd.lucent.voice": ["lvp"],
    "audio/vnd.ms-playready.media.pya": ["pya"],
    "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
    "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
    "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
    "audio/vnd.rip": ["rip"],
    "audio/x-aac": ["*aac"],
    "audio/x-aiff": ["aif", "aiff", "aifc"],
    "audio/x-caf": ["caf"],
    "audio/x-flac": ["flac"],
    "audio/x-m4a": ["*m4a"],
    "audio/x-matroska": ["mka"],
    "audio/x-mpegurl": ["m3u"],
    "audio/x-ms-wax": ["wax"],
    "audio/x-ms-wma": ["wma"],
    "audio/x-pn-realaudio": ["ram", "ra"],
    "audio/x-pn-realaudio-plugin": ["rmp"],
    "audio/x-realaudio": ["*ra"],
    "audio/x-wav": ["*wav"],
    "chemical/x-cdx": ["cdx"],
    "chemical/x-cif": ["cif"],
    "chemical/x-cmdf": ["cmdf"],
    "chemical/x-cml": ["cml"],
    "chemical/x-csml": ["csml"],
    "chemical/x-xyz": ["xyz"],
    "image/prs.btif": ["btif", "btf"],
    "image/prs.pti": ["pti"],
    "image/vnd.adobe.photoshop": ["psd"],
    "image/vnd.airzip.accelerator.azv": ["azv"],
    "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
    "image/vnd.djvu": ["djvu", "djv"],
    "image/vnd.dvb.subtitle": ["*sub"],
    "image/vnd.dwg": ["dwg"],
    "image/vnd.dxf": ["dxf"],
    "image/vnd.fastbidsheet": ["fbs"],
    "image/vnd.fpx": ["fpx"],
    "image/vnd.fst": ["fst"],
    "image/vnd.fujixerox.edmics-mmr": ["mmr"],
    "image/vnd.fujixerox.edmics-rlc": ["rlc"],
    "image/vnd.microsoft.icon": ["ico"],
    "image/vnd.ms-dds": ["dds"],
    "image/vnd.ms-modi": ["mdi"],
    "image/vnd.ms-photo": ["wdp"],
    "image/vnd.net-fpx": ["npx"],
    "image/vnd.pco.b16": ["b16"],
    "image/vnd.tencent.tap": ["tap"],
    "image/vnd.valve.source.texture": ["vtf"],
    "image/vnd.wap.wbmp": ["wbmp"],
    "image/vnd.xiff": ["xif"],
    "image/vnd.zbrush.pcx": ["pcx"],
    "image/x-3ds": ["3ds"],
    "image/x-adobe-dng": ["dng"],
    "image/x-cmu-raster": ["ras"],
    "image/x-cmx": ["cmx"],
    "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
    "image/x-icon": ["*ico"],
    "image/x-jng": ["jng"],
    "image/x-mrsid-image": ["sid"],
    "image/x-ms-bmp": ["*bmp"],
    "image/x-pcx": ["*pcx"],
    "image/x-pict": ["pic", "pct"],
    "image/x-portable-anymap": ["pnm"],
    "image/x-portable-bitmap": ["pbm"],
    "image/x-portable-graymap": ["pgm"],
    "image/x-portable-pixmap": ["ppm"],
    "image/x-rgb": ["rgb"],
    "image/x-tga": ["tga"],
    "image/x-xbitmap": ["xbm"],
    "image/x-xpixmap": ["xpm"],
    "image/x-xwindowdump": ["xwd"],
    "message/vnd.wfa.wsc": ["wsc"],
    "model/vnd.bary": ["bary"],
    "model/vnd.cld": ["cld"],
    "model/vnd.collada+xml": ["dae"],
    "model/vnd.dwf": ["dwf"],
    "model/vnd.gdl": ["gdl"],
    "model/vnd.gtw": ["gtw"],
    "model/vnd.mts": ["*mts"],
    "model/vnd.opengex": ["ogex"],
    "model/vnd.parasolid.transmit.binary": ["x_b"],
    "model/vnd.parasolid.transmit.text": ["x_t"],
    "model/vnd.pytha.pyox": ["pyo", "pyox"],
    "model/vnd.sap.vds": ["vds"],
    "model/vnd.usda": ["usda"],
    "model/vnd.usdz+zip": ["usdz"],
    "model/vnd.valve.source.compiled-map": ["bsp"],
    "model/vnd.vtu": ["vtu"],
    "text/prs.lines.tag": ["dsc"],
    "text/vnd.curl": ["curl"],
    "text/vnd.curl.dcurl": ["dcurl"],
    "text/vnd.curl.mcurl": ["mcurl"],
    "text/vnd.curl.scurl": ["scurl"],
    "text/vnd.dvb.subtitle": ["sub"],
    "text/vnd.familysearch.gedcom": ["ged"],
    "text/vnd.fly": ["fly"],
    "text/vnd.fmi.flexstor": ["flx"],
    "text/vnd.graphviz": ["gv"],
    "text/vnd.in3d.3dml": ["3dml"],
    "text/vnd.in3d.spot": ["spot"],
    "text/vnd.sun.j2me.app-descriptor": ["jad"],
    "text/vnd.wap.wml": ["wml"],
    "text/vnd.wap.wmlscript": ["wmls"],
    "text/x-asm": ["s", "asm"],
    "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
    "text/x-component": ["htc"],
    "text/x-fortran": ["f", "for", "f77", "f90"],
    "text/x-handlebars-template": ["hbs"],
    "text/x-java-source": ["java"],
    "text/x-lua": ["lua"],
    "text/x-markdown": ["mkd"],
    "text/x-nfo": ["nfo"],
    "text/x-opml": ["opml"],
    "text/x-org": ["*org"],
    "text/x-pascal": ["p", "pas"],
    "text/x-processing": ["pde"],
    "text/x-sass": ["sass"],
    "text/x-scss": ["scss"],
    "text/x-setext": ["etx"],
    "text/x-sfv": ["sfv"],
    "text/x-suse-ymp": ["ymp"],
    "text/x-uuencode": ["uu"],
    "text/x-vcalendar": ["vcs"],
    "text/x-vcard": ["vcf"],
    "video/vnd.dece.hd": ["uvh", "uvvh"],
    "video/vnd.dece.mobile": ["uvm", "uvvm"],
    "video/vnd.dece.pd": ["uvp", "uvvp"],
    "video/vnd.dece.sd": ["uvs", "uvvs"],
    "video/vnd.dece.video": ["uvv", "uvvv"],
    "video/vnd.dvb.file": ["dvb"],
    "video/vnd.fvt": ["fvt"],
    "video/vnd.mpegurl": ["mxu", "m4u"],
    "video/vnd.ms-playready.media.pyv": ["pyv"],
    "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
    "video/vnd.vivo": ["viv"],
    "video/x-f4v": ["f4v"],
    "video/x-fli": ["fli"],
    "video/x-flv": ["flv"],
    "video/x-m4v": ["m4v"],
    "video/x-matroska": ["mkv", "mk3d", "mks"],
    "video/x-mng": ["mng"],
    "video/x-ms-asf": ["asf", "asx"],
    "video/x-ms-vob": ["vob"],
    "video/x-ms-wm": ["wm"],
    "video/x-ms-wmv": ["wmv"],
    "video/x-ms-wmx": ["wmx"],
    "video/x-ms-wvx": ["wvx"],
    "video/x-msvideo": ["avi"],
    "video/x-sgi-movie": ["movie"],
    "video/x-smv": ["smv"],
    "x-conference/x-cooltalk": ["ice"]
  };
  Object.freeze(types);
  var other_default = types;

  // ../core/node_modules/mime/dist/types/standard.js
  var types2 = {
    "application/andrew-inset": ["ez"],
    "application/appinstaller": ["appinstaller"],
    "application/applixware": ["aw"],
    "application/appx": ["appx"],
    "application/appxbundle": ["appxbundle"],
    "application/atom+xml": ["atom"],
    "application/atomcat+xml": ["atomcat"],
    "application/atomdeleted+xml": ["atomdeleted"],
    "application/atomsvc+xml": ["atomsvc"],
    "application/atsc-dwd+xml": ["dwd"],
    "application/atsc-held+xml": ["held"],
    "application/atsc-rsat+xml": ["rsat"],
    "application/automationml-aml+xml": ["aml"],
    "application/automationml-amlx+zip": ["amlx"],
    "application/bdoc": ["bdoc"],
    "application/calendar+xml": ["xcs"],
    "application/ccxml+xml": ["ccxml"],
    "application/cdfx+xml": ["cdfx"],
    "application/cdmi-capability": ["cdmia"],
    "application/cdmi-container": ["cdmic"],
    "application/cdmi-domain": ["cdmid"],
    "application/cdmi-object": ["cdmio"],
    "application/cdmi-queue": ["cdmiq"],
    "application/cpl+xml": ["cpl"],
    "application/cu-seeme": ["cu"],
    "application/cwl": ["cwl"],
    "application/dash+xml": ["mpd"],
    "application/dash-patch+xml": ["mpp"],
    "application/davmount+xml": ["davmount"],
    "application/dicom": ["dcm"],
    "application/docbook+xml": ["dbk"],
    "application/dssc+der": ["dssc"],
    "application/dssc+xml": ["xdssc"],
    "application/ecmascript": ["ecma"],
    "application/emma+xml": ["emma"],
    "application/emotionml+xml": ["emotionml"],
    "application/epub+zip": ["epub"],
    "application/exi": ["exi"],
    "application/express": ["exp"],
    "application/fdf": ["fdf"],
    "application/fdt+xml": ["fdt"],
    "application/font-tdpfr": ["pfr"],
    "application/geo+json": ["geojson"],
    "application/gml+xml": ["gml"],
    "application/gpx+xml": ["gpx"],
    "application/gxf": ["gxf"],
    "application/gzip": ["gz"],
    "application/hjson": ["hjson"],
    "application/hyperstudio": ["stk"],
    "application/inkml+xml": ["ink", "inkml"],
    "application/ipfix": ["ipfix"],
    "application/its+xml": ["its"],
    "application/java-archive": ["jar", "war", "ear"],
    "application/java-serialized-object": ["ser"],
    "application/java-vm": ["class"],
    "application/javascript": ["*js"],
    "application/json": ["json", "map"],
    "application/json5": ["json5"],
    "application/jsonml+json": ["jsonml"],
    "application/ld+json": ["jsonld"],
    "application/lgr+xml": ["lgr"],
    "application/lost+xml": ["lostxml"],
    "application/mac-binhex40": ["hqx"],
    "application/mac-compactpro": ["cpt"],
    "application/mads+xml": ["mads"],
    "application/manifest+json": ["webmanifest"],
    "application/marc": ["mrc"],
    "application/marcxml+xml": ["mrcx"],
    "application/mathematica": ["ma", "nb", "mb"],
    "application/mathml+xml": ["mathml"],
    "application/mbox": ["mbox"],
    "application/media-policy-dataset+xml": ["mpf"],
    "application/mediaservercontrol+xml": ["mscml"],
    "application/metalink+xml": ["metalink"],
    "application/metalink4+xml": ["meta4"],
    "application/mets+xml": ["mets"],
    "application/mmt-aei+xml": ["maei"],
    "application/mmt-usd+xml": ["musd"],
    "application/mods+xml": ["mods"],
    "application/mp21": ["m21", "mp21"],
    "application/mp4": ["*mp4", "*mpg4", "mp4s", "m4p"],
    "application/msix": ["msix"],
    "application/msixbundle": ["msixbundle"],
    "application/msword": ["doc", "dot"],
    "application/mxf": ["mxf"],
    "application/n-quads": ["nq"],
    "application/n-triples": ["nt"],
    "application/node": ["cjs"],
    "application/octet-stream": [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ],
    "application/oda": ["oda"],
    "application/oebps-package+xml": ["opf"],
    "application/ogg": ["ogx"],
    "application/omdoc+xml": ["omdoc"],
    "application/onenote": [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg",
      "one",
      "onea"
    ],
    "application/oxps": ["oxps"],
    "application/p2p-overlay+xml": ["relo"],
    "application/patch-ops-error+xml": ["xer"],
    "application/pdf": ["pdf"],
    "application/pgp-encrypted": ["pgp"],
    "application/pgp-keys": ["asc"],
    "application/pgp-signature": ["sig", "*asc"],
    "application/pics-rules": ["prf"],
    "application/pkcs10": ["p10"],
    "application/pkcs7-mime": ["p7m", "p7c"],
    "application/pkcs7-signature": ["p7s"],
    "application/pkcs8": ["p8"],
    "application/pkix-attr-cert": ["ac"],
    "application/pkix-cert": ["cer"],
    "application/pkix-crl": ["crl"],
    "application/pkix-pkipath": ["pkipath"],
    "application/pkixcmp": ["pki"],
    "application/pls+xml": ["pls"],
    "application/postscript": ["ai", "eps", "ps"],
    "application/provenance+xml": ["provx"],
    "application/pskc+xml": ["pskcxml"],
    "application/raml+yaml": ["raml"],
    "application/rdf+xml": ["rdf", "owl"],
    "application/reginfo+xml": ["rif"],
    "application/relax-ng-compact-syntax": ["rnc"],
    "application/resource-lists+xml": ["rl"],
    "application/resource-lists-diff+xml": ["rld"],
    "application/rls-services+xml": ["rs"],
    "application/route-apd+xml": ["rapd"],
    "application/route-s-tsid+xml": ["sls"],
    "application/route-usd+xml": ["rusd"],
    "application/rpki-ghostbusters": ["gbr"],
    "application/rpki-manifest": ["mft"],
    "application/rpki-roa": ["roa"],
    "application/rsd+xml": ["rsd"],
    "application/rss+xml": ["rss"],
    "application/rtf": ["rtf"],
    "application/sbml+xml": ["sbml"],
    "application/scvp-cv-request": ["scq"],
    "application/scvp-cv-response": ["scs"],
    "application/scvp-vp-request": ["spq"],
    "application/scvp-vp-response": ["spp"],
    "application/sdp": ["sdp"],
    "application/senml+xml": ["senmlx"],
    "application/sensml+xml": ["sensmlx"],
    "application/set-payment-initiation": ["setpay"],
    "application/set-registration-initiation": ["setreg"],
    "application/shf+xml": ["shf"],
    "application/sieve": ["siv", "sieve"],
    "application/smil+xml": ["smi", "smil"],
    "application/sparql-query": ["rq"],
    "application/sparql-results+xml": ["srx"],
    "application/sql": ["sql"],
    "application/srgs": ["gram"],
    "application/srgs+xml": ["grxml"],
    "application/sru+xml": ["sru"],
    "application/ssdl+xml": ["ssdl"],
    "application/ssml+xml": ["ssml"],
    "application/swid+xml": ["swidtag"],
    "application/tei+xml": ["tei", "teicorpus"],
    "application/thraud+xml": ["tfi"],
    "application/timestamped-data": ["tsd"],
    "application/toml": ["toml"],
    "application/trig": ["trig"],
    "application/ttml+xml": ["ttml"],
    "application/ubjson": ["ubj"],
    "application/urc-ressheet+xml": ["rsheet"],
    "application/urc-targetdesc+xml": ["td"],
    "application/voicexml+xml": ["vxml"],
    "application/wasm": ["wasm"],
    "application/watcherinfo+xml": ["wif"],
    "application/widget": ["wgt"],
    "application/winhlp": ["hlp"],
    "application/wsdl+xml": ["wsdl"],
    "application/wspolicy+xml": ["wspolicy"],
    "application/xaml+xml": ["xaml"],
    "application/xcap-att+xml": ["xav"],
    "application/xcap-caps+xml": ["xca"],
    "application/xcap-diff+xml": ["xdf"],
    "application/xcap-el+xml": ["xel"],
    "application/xcap-ns+xml": ["xns"],
    "application/xenc+xml": ["xenc"],
    "application/xfdf": ["xfdf"],
    "application/xhtml+xml": ["xhtml", "xht"],
    "application/xliff+xml": ["xlf"],
    "application/xml": ["xml", "xsl", "xsd", "rng"],
    "application/xml-dtd": ["dtd"],
    "application/xop+xml": ["xop"],
    "application/xproc+xml": ["xpl"],
    "application/xslt+xml": ["*xsl", "xslt"],
    "application/xspf+xml": ["xspf"],
    "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
    "application/yang": ["yang"],
    "application/yin+xml": ["yin"],
    "application/zip": ["zip"],
    "application/zip+dotlottie": ["lottie"],
    "audio/3gpp": ["*3gpp"],
    "audio/aac": ["adts", "aac"],
    "audio/adpcm": ["adp"],
    "audio/amr": ["amr"],
    "audio/basic": ["au", "snd"],
    "audio/midi": ["mid", "midi", "kar", "rmi"],
    "audio/mobile-xmf": ["mxmf"],
    "audio/mp3": ["*mp3"],
    "audio/mp4": ["m4a", "mp4a", "m4b"],
    "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
    "audio/ogg": ["oga", "ogg", "spx", "opus"],
    "audio/s3m": ["s3m"],
    "audio/silk": ["sil"],
    "audio/wav": ["wav"],
    "audio/wave": ["*wav"],
    "audio/webm": ["weba"],
    "audio/xm": ["xm"],
    "font/collection": ["ttc"],
    "font/otf": ["otf"],
    "font/ttf": ["ttf"],
    "font/woff": ["woff"],
    "font/woff2": ["woff2"],
    "image/aces": ["exr"],
    "image/apng": ["apng"],
    "image/avci": ["avci"],
    "image/avcs": ["avcs"],
    "image/avif": ["avif"],
    "image/bmp": ["bmp", "dib"],
    "image/cgm": ["cgm"],
    "image/dicom-rle": ["drle"],
    "image/dpx": ["dpx"],
    "image/emf": ["emf"],
    "image/fits": ["fits"],
    "image/g3fax": ["g3"],
    "image/gif": ["gif"],
    "image/heic": ["heic"],
    "image/heic-sequence": ["heics"],
    "image/heif": ["heif"],
    "image/heif-sequence": ["heifs"],
    "image/hej2k": ["hej2"],
    "image/ief": ["ief"],
    "image/jaii": ["jaii"],
    "image/jais": ["jais"],
    "image/jls": ["jls"],
    "image/jp2": ["jp2", "jpg2"],
    "image/jpeg": ["jpg", "jpeg", "jpe"],
    "image/jph": ["jph"],
    "image/jphc": ["jhc"],
    "image/jpm": ["jpm", "jpgm"],
    "image/jpx": ["jpx", "jpf"],
    "image/jxl": ["jxl"],
    "image/jxr": ["jxr"],
    "image/jxra": ["jxra"],
    "image/jxrs": ["jxrs"],
    "image/jxs": ["jxs"],
    "image/jxsc": ["jxsc"],
    "image/jxsi": ["jxsi"],
    "image/jxss": ["jxss"],
    "image/ktx": ["ktx"],
    "image/ktx2": ["ktx2"],
    "image/pjpeg": ["jfif"],
    "image/png": ["png"],
    "image/sgi": ["sgi"],
    "image/svg+xml": ["svg", "svgz"],
    "image/t38": ["t38"],
    "image/tiff": ["tif", "tiff"],
    "image/tiff-fx": ["tfx"],
    "image/webp": ["webp"],
    "image/wmf": ["wmf"],
    "message/disposition-notification": ["disposition-notification"],
    "message/global": ["u8msg"],
    "message/global-delivery-status": ["u8dsn"],
    "message/global-disposition-notification": ["u8mdn"],
    "message/global-headers": ["u8hdr"],
    "message/rfc822": ["eml", "mime", "mht", "mhtml"],
    "model/3mf": ["3mf"],
    "model/gltf+json": ["gltf"],
    "model/gltf-binary": ["glb"],
    "model/iges": ["igs", "iges"],
    "model/jt": ["jt"],
    "model/mesh": ["msh", "mesh", "silo"],
    "model/mtl": ["mtl"],
    "model/obj": ["obj"],
    "model/prc": ["prc"],
    "model/step": ["step", "stp", "stpnc", "p21", "210"],
    "model/step+xml": ["stpx"],
    "model/step+zip": ["stpz"],
    "model/step-xml+zip": ["stpxz"],
    "model/stl": ["stl"],
    "model/u3d": ["u3d"],
    "model/vrml": ["wrl", "vrml"],
    "model/x3d+binary": ["*x3db", "x3dbz"],
    "model/x3d+fastinfoset": ["x3db"],
    "model/x3d+vrml": ["*x3dv", "x3dvz"],
    "model/x3d+xml": ["x3d", "x3dz"],
    "model/x3d-vrml": ["x3dv"],
    "text/cache-manifest": ["appcache", "manifest"],
    "text/calendar": ["ics", "ifb"],
    "text/coffeescript": ["coffee", "litcoffee"],
    "text/css": ["css"],
    "text/csv": ["csv"],
    "text/html": ["html", "htm", "shtml"],
    "text/jade": ["jade"],
    "text/javascript": ["js", "mjs"],
    "text/jsx": ["jsx"],
    "text/less": ["less"],
    "text/markdown": ["md", "markdown"],
    "text/mathml": ["mml"],
    "text/mdx": ["mdx"],
    "text/n3": ["n3"],
    "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
    "text/richtext": ["rtx"],
    "text/rtf": ["*rtf"],
    "text/sgml": ["sgml", "sgm"],
    "text/shex": ["shex"],
    "text/slim": ["slim", "slm"],
    "text/spdx": ["spdx"],
    "text/stylus": ["stylus", "styl"],
    "text/tab-separated-values": ["tsv"],
    "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
    "text/turtle": ["ttl"],
    "text/uri-list": ["uri", "uris", "urls"],
    "text/vcard": ["vcard"],
    "text/vtt": ["vtt"],
    "text/wgsl": ["wgsl"],
    "text/xml": ["*xml"],
    "text/yaml": ["yaml", "yml"],
    "video/3gpp": ["3gp", "3gpp"],
    "video/3gpp2": ["3g2"],
    "video/h261": ["h261"],
    "video/h263": ["h263"],
    "video/h264": ["h264"],
    "video/iso.segment": ["m4s"],
    "video/jpeg": ["jpgv"],
    "video/jpm": ["*jpm", "*jpgm"],
    "video/mj2": ["mj2", "mjp2"],
    "video/mp2t": ["ts", "m2t", "m2ts", "mts"],
    "video/mp4": ["mp4", "mp4v", "mpg4"],
    "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
    "video/ogg": ["ogv"],
    "video/quicktime": ["qt", "mov"],
    "video/webm": ["webm"]
  };
  Object.freeze(types2);
  var standard_default = types2;

  // ../core/node_modules/mime/dist/src/Mime.js
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _Mime_extensionToType;
  var _Mime_typeToExtension;
  var _Mime_typeToExtensions;
  var Mime = class {
    constructor(...args) {
      _Mime_extensionToType.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtension.set(this, /* @__PURE__ */ new Map());
      _Mime_typeToExtensions.set(this, /* @__PURE__ */ new Map());
      for (const arg of args) {
        this.define(arg);
      }
    }
    define(typeMap, force = false) {
      for (let [type, extensions] of Object.entries(typeMap)) {
        type = type.toLowerCase();
        extensions = extensions.map((ext) => ext.toLowerCase());
        if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
          __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, /* @__PURE__ */ new Set());
        }
        const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
        let first = true;
        for (let extension of extensions) {
          const starred = extension.startsWith("*");
          extension = starred ? extension.slice(1) : extension;
          allExtensions?.add(extension);
          if (first) {
            __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
          }
          first = false;
          if (starred)
            continue;
          const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
          if (currentType && currentType != type && !force) {
            throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
          }
          __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
        }
      }
      return this;
    }
    getType(path) {
      if (typeof path !== "string")
        return null;
      const last = path.replace(/^.*[/\\]/s, "").toLowerCase();
      const ext = last.replace(/^.*\./s, "").toLowerCase();
      const hasPath = last.length < path.length;
      const hasDot = ext.length < last.length - 1;
      if (!hasDot && hasPath)
        return null;
      return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
      if (typeof type !== "string")
        return null;
      type = type?.split?.(";")[0];
      return (type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null;
    }
    getAllExtensions(type) {
      if (typeof type !== "string")
        return null;
      return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
      this.define = () => {
        throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
      };
      Object.freeze(this);
      for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
        Object.freeze(extensions);
      }
      return this;
    }
    _getTestState() {
      return {
        types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
        extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f")
      };
    }
  };
  _Mime_extensionToType = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtension = /* @__PURE__ */ new WeakMap(), _Mime_typeToExtensions = /* @__PURE__ */ new WeakMap();
  var Mime_default = Mime;

  // ../core/node_modules/mime/dist/src/index.js
  var src_default = new Mime_default(standard_default, other_default)._freeze();

  // ../core/dist/botframework-webchat-core.mjs
  var __create2 = Object.create;
  var __defProp3 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps2 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_global_this2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/global-this.js"(exports, module) {
      "use strict";
      var check22 = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check22(typeof globalThis == "object" && globalThis) || check22(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check22(typeof self == "object" && self) || check22(typeof global == "object" && global) || check22(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ function() {
        return this;
      }() || Function("return this")();
    }
  });
  var require_fails2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec2) {
        try {
          return !!exec2();
        } catch (error) {
          return true;
        }
      };
    }
  });
  var require_function_bind_native2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails2();
      module.exports = !fails(function() {
        var test = (function() {
        }).bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });
  var require_function_apply2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-apply.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native2();
      var FunctionPrototype = Function.prototype;
      var apply2 = FunctionPrototype.apply;
      var call10 = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call10.bind(apply2) : function() {
        return call10.apply(apply2, arguments);
      });
    }
  });
  var require_function_uncurry_this2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native2();
      var FunctionPrototype = Function.prototype;
      var call10 = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call10, call10);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call10.apply(fn, arguments);
        };
      };
    }
  });
  var require_classof_raw2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var toString3 = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString3(it), 8, -1);
      };
    }
  });
  var require_function_uncurry_this_clause2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw2();
      var uncurryThis = require_function_uncurry_this2();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });
  var require_is_callable2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });
  var require_descriptors2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails2();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });
  var require_function_call2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native2();
      var call10 = Function.prototype.call;
      module.exports = NATIVE_BIND ? call10.bind(call10) : function() {
        return call10.apply(call10, arguments);
      };
    }
  });
  var require_object_property_is_enumerable2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });
  var require_create_property_descriptor2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });
  var require_indexed_object2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var fails = require_fails2();
      var classof = require_classof_raw2();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });
  var require_is_null_or_undefined2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });
  var require_require_object_coercible2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined2();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });
  var require_to_indexed_object2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object2();
      var requireObjectCoercible = require_require_object_coercible2();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });
  var require_is_object2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable2();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });
  var require_path2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/path.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });
  var require_get_built_in2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/get-built-in.js"(exports, module) {
      "use strict";
      var path = require_path2();
      var globalThis2 = require_global_this2();
      var isCallable = require_is_callable2();
      var aFunction = function(variable) {
        return isCallable(variable) ? variable : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });
  var require_object_is_prototype_of2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });
  var require_environment_user_agent2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var navigator = globalThis2.navigator;
      var userAgent = navigator && navigator.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });
  var require_environment_v8_version2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var userAgent = require_environment_user_agent2();
      var process2 = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process2 && process2.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version2;
      if (v8) {
        match = v8.split(".");
        version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version2 && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version2 = +match[1];
        }
      }
      module.exports = version2;
    }
  });
  var require_symbol_constructor_detection2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version2();
      var fails = require_fails2();
      var globalThis2 = require_global_this2();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol5 = Symbol("symbol detection");
        return !$String(symbol5) || !(Object(symbol5) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });
  var require_use_symbol_as_uid2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection2();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });
  var require_is_symbol2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in2();
      var isCallable = require_is_callable2();
      var isPrototypeOf = require_object_is_prototype_of2();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid2();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });
  var require_try_to_string2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });
  var require_a_callable2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable2();
      var tryToString = require_try_to_string2();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });
  var require_get_method2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable2();
      var isNullOrUndefined = require_is_null_or_undefined2();
      module.exports = function(V, P) {
        var func3 = V[P];
        return isNullOrUndefined(func3) ? void 0 : aCallable(func3);
      };
    }
  });
  var require_ordinary_to_primitive2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call10 = require_function_call2();
      var isCallable = require_is_callable2();
      var isObject = require_is_object2();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call10(fn, input))) return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call10(fn, input))) return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call10(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });
  var require_is_pure2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = true;
    }
  });
  var require_define_global_property2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });
  var require_shared_store2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure2();
      var globalThis2 = require_global_this2();
      var defineGlobalProperty = require_define_global_property2();
      var SHARED = "__core-js_shared__";
      var store5 = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store5.versions || (store5.versions = [])).push({
        version: "3.44.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });
  var require_shared2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/shared.js"(exports, module) {
      "use strict";
      var store5 = require_shared_store2();
      module.exports = function(key, value) {
        return store5[key] || (store5[key] = value || {});
      };
    }
  });
  var require_to_object2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible2();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });
  var require_has_own_property2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var toObject = require_to_object2();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });
  var require_uid2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var id = 0;
      var postfix = Math.random();
      var toString3 = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString3(++id + postfix, 36);
      };
    }
  });
  var require_well_known_symbol2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var shared = require_shared2();
      var hasOwn = require_has_own_property2();
      var uid = require_uid2();
      var NATIVE_SYMBOL = require_symbol_constructor_detection2();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid2();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });
  var require_to_primitive2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call10 = require_function_call2();
      var isObject = require_is_object2();
      var isSymbol = require_is_symbol2();
      var getMethod = require_get_method2();
      var ordinaryToPrimitive = require_ordinary_to_primitive2();
      var wellKnownSymbol = require_well_known_symbol2();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0) pref = "default";
          result = call10(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0) pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });
  var require_to_property_key2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive2();
      var isSymbol = require_is_symbol2();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });
  var require_document_create_element2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var isObject = require_is_object2();
      var document2 = globalThis2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });
  var require_ie8_dom_define2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors2();
      var fails = require_fails2();
      var createElement = require_document_create_element2();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });
  var require_object_get_own_property_descriptor2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors2();
      var call10 = require_function_call2();
      var propertyIsEnumerableModule = require_object_property_is_enumerable2();
      var createPropertyDescriptor = require_create_property_descriptor2();
      var toIndexedObject = require_to_indexed_object2();
      var toPropertyKey = require_to_property_key2();
      var hasOwn = require_has_own_property2();
      var IE8_DOM_DEFINE = require_ie8_dom_define2();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
        if (hasOwn(O, P)) return createPropertyDescriptor(!call10(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });
  var require_is_forced2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails2();
      var isCallable = require_is_callable2();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string10) {
        return String(string10).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });
  var require_function_bind_context2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause2();
      var aCallable = require_a_callable2();
      var NATIVE_BIND = require_function_bind_native2();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });
  var require_v8_prototype_define_bug2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors2();
      var fails = require_fails2();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });
  var require_an_object2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject = require_is_object2();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });
  var require_object_define_property2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors2();
      var IE8_DOM_DEFINE = require_ie8_dom_define2();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug2();
      var anObject = require_an_object2();
      var toPropertyKey = require_to_property_key2();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current2 = $getOwnPropertyDescriptor(O, P);
          if (current2 && current2[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current2[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current2[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O, P, Attributes);
      } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });
  var require_create_non_enumerable_property2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors2();
      var definePropertyModule = require_object_define_property2();
      var createPropertyDescriptor = require_create_property_descriptor2();
      module.exports = DESCRIPTORS ? function(object7, key, value) {
        return definePropertyModule.f(object7, key, createPropertyDescriptor(1, value));
      } : function(object7, key, value) {
        object7[key] = value;
        return object7;
      };
    }
  });
  var require_export2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/export.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var apply2 = require_function_apply2();
      var uncurryThis = require_function_uncurry_this_clause2();
      var isCallable = require_is_callable2();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor2().f;
      var isForced = require_is_forced2();
      var path = require_path2();
      var bind = require_function_bind_context2();
      var createNonEnumerableProperty = require_create_non_enumerable_property2();
      var hasOwn = require_has_own_property2();
      require_shared_store2();
      var wrapConstructor = function(NativeConstructor) {
        var Wrapper = function(a, b, c) {
          if (this instanceof Wrapper) {
            switch (arguments.length) {
              case 0:
                return new NativeConstructor();
              case 1:
                return new NativeConstructor(a);
              case 2:
                return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
          }
          return apply2(NativeConstructor, this, arguments);
        };
        Wrapper.prototype = NativeConstructor.prototype;
        return Wrapper;
      };
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var PROTO = options.proto;
        var nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype;
        var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
        var targetPrototype = target.prototype;
        var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
        var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
        for (key in source) {
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
          targetProperty = target[key];
          if (USE_NATIVE) if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(nativeSource, key);
            nativeProperty = descriptor && descriptor.value;
          } else nativeProperty = nativeSource[key];
          sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
          if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
          if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis2);
          else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
          else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
          else resultProperty = sourceProperty;
          if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(resultProperty, "sham", true);
          }
          createNonEnumerableProperty(target, key, resultProperty);
          if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + "Prototype";
            if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
              createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
            }
            createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
            if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
              createNonEnumerableProperty(targetPrototype, key, sourceProperty);
            }
          }
        }
      };
    }
  });
  var require_environment = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var userAgent = require_environment_user_agent2();
      var classof = require_classof_raw2();
      var userAgentStartsWith = function(string10) {
        return userAgent.slice(0, string10.length) === string10;
      };
      module.exports = function() {
        if (userAgentStartsWith("Bun/")) return "BUN";
        if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
        if (userAgentStartsWith("Deno/")) return "DENO";
        if (userAgentStartsWith("Node.js/")) return "NODE";
        if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
        if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
        if (classof(globalThis2.process) === "process") return "NODE";
        if (globalThis2.window && globalThis2.document) return "BROWSER";
        return "REST";
      }();
    }
  });
  var require_environment_is_node = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-is-node.js"(exports, module) {
      "use strict";
      var ENVIRONMENT = require_environment();
      module.exports = ENVIRONMENT === "NODE";
    }
  });
  var require_define_built_in = __commonJS2({
    "../../node_modules/core-js-pure/internals/define-built-in.js"(exports, module) {
      "use strict";
      var createNonEnumerableProperty = require_create_non_enumerable_property2();
      module.exports = function(target, key, value, options) {
        if (options && options.enumerable) target[key] = value;
        else createNonEnumerableProperty(target, key, value);
        return target;
      };
    }
  });
  var require_function_uncurry_this_accessor = __commonJS2({
    "../../node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var aCallable = require_a_callable2();
      module.exports = function(object7, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object7, key)[method]));
        } catch (error) {
        }
      };
    }
  });
  var require_is_possible_prototype = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module) {
      "use strict";
      var isObject = require_is_object2();
      module.exports = function(argument) {
        return isObject(argument) || argument === null;
      };
    }
  });
  var require_a_possible_prototype = __commonJS2({
    "../../node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module) {
      "use strict";
      var isPossiblePrototype = require_is_possible_prototype();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isPossiblePrototype(argument)) return argument;
        throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
      };
    }
  });
  var require_object_set_prototype_of = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var isObject = require_is_object2();
      var requireObjectCoercible = require_require_object_coercible2();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
          setter(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          requireObjectCoercible(O);
          aPossiblePrototype(proto);
          if (!isObject(O)) return O;
          if (CORRECT_SETTER) setter(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });
  var require_to_string_tag_support = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol2();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });
  var require_classof = __commonJS2({
    "../../node_modules/core-js-pure/internals/classof.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable2();
      var classofRaw = require_classof_raw2();
      var wellKnownSymbol = require_well_known_symbol2();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $Object = Object;
      var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
        return arguments;
      }()) === "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });
  var require_object_to_string = __commonJS2({
    "../../node_modules/core-js-pure/internals/object-to-string.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString3() {
        return "[object " + classof(this) + "]";
      };
    }
  });
  var require_set_to_string_tag = __commonJS2({
    "../../node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var defineProperty = require_object_define_property2().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property2();
      var hasOwn = require_has_own_property2();
      var toString3 = require_object_to_string();
      var wellKnownSymbol = require_well_known_symbol2();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(it, TAG, STATIC, SET_METHOD) {
        var target = STATIC ? it : it && it.prototype;
        if (target) {
          if (!hasOwn(target, TO_STRING_TAG)) {
            defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
          }
          if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
            createNonEnumerableProperty(target, "toString", toString3);
          }
        }
      };
    }
  });
  var require_define_built_in_accessor = __commonJS2({
    "../../node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property2();
      module.exports = function(target, name, descriptor) {
        return defineProperty.f(target, name, descriptor);
      };
    }
  });
  var require_set_species = __commonJS2({
    "../../node_modules/core-js-pure/internals/set-species.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in2();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var wellKnownSymbol = require_well_known_symbol2();
      var DESCRIPTORS = require_descriptors2();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineBuiltInAccessor(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });
  var require_an_instance = __commonJS2({
    "../../node_modules/core-js-pure/internals/an-instance.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of2();
      var $TypeError = TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it)) return it;
        throw new $TypeError("Incorrect invocation");
      };
    }
  });
  var require_inspect_source = __commonJS2({
    "../../node_modules/core-js-pure/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var isCallable = require_is_callable2();
      var store5 = require_shared_store2();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store5.inspectSource)) {
        store5.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store5.inspectSource;
    }
  });
  var require_is_constructor = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-constructor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      var fails = require_fails2();
      var isCallable = require_is_callable2();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in2();
      var inspectSource = require_inspect_source();
      var noop3 = function() {
      };
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec2 = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.test(noop3);
      var isConstructorModern = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        try {
          construct(noop3, [], argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return INCORRECT_TO_STRING || !!exec2(constructorRegExp, inspectSource(argument));
        } catch (error) {
          return true;
        }
      };
      isConstructorLegacy.sham = true;
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });
  var require_a_constructor = __commonJS2({
    "../../node_modules/core-js-pure/internals/a-constructor.js"(exports, module) {
      "use strict";
      var isConstructor = require_is_constructor();
      var tryToString = require_try_to_string2();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isConstructor(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a constructor");
      };
    }
  });
  var require_species_constructor = __commonJS2({
    "../../node_modules/core-js-pure/internals/species-constructor.js"(exports, module) {
      "use strict";
      var anObject = require_an_object2();
      var aConstructor = require_a_constructor();
      var isNullOrUndefined = require_is_null_or_undefined2();
      var wellKnownSymbol = require_well_known_symbol2();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
      };
    }
  });
  var require_html2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in2();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });
  var require_array_slice = __commonJS2({
    "../../node_modules/core-js-pure/internals/array-slice.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this2();
      module.exports = uncurryThis([].slice);
    }
  });
  var require_validate_arguments_length = __commonJS2({
    "../../node_modules/core-js-pure/internals/validate-arguments-length.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      module.exports = function(passed, required) {
        if (passed < required) throw new $TypeError("Not enough arguments");
        return passed;
      };
    }
  });
  var require_environment_is_ios = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-is-ios.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent2();
      module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
    }
  });
  var require_task = __commonJS2({
    "../../node_modules/core-js-pure/internals/task.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var apply2 = require_function_apply2();
      var bind = require_function_bind_context2();
      var isCallable = require_is_callable2();
      var hasOwn = require_has_own_property2();
      var fails = require_fails2();
      var html = require_html2();
      var arraySlice = require_array_slice();
      var createElement = require_document_create_element2();
      var validateArgumentsLength = require_validate_arguments_length();
      var IS_IOS = require_environment_is_ios();
      var IS_NODE = require_environment_is_node();
      var set = globalThis2.setImmediate;
      var clear3 = globalThis2.clearImmediate;
      var process2 = globalThis2.process;
      var Dispatch = globalThis2.Dispatch;
      var Function2 = globalThis2.Function;
      var MessageChannel = globalThis2.MessageChannel;
      var String2 = globalThis2.String;
      var counter = 0;
      var queue2 = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var $location;
      var defer;
      var channel3;
      var port;
      fails(function() {
        $location = globalThis2.location;
      });
      var run = function(id) {
        if (hasOwn(queue2, id)) {
          var fn = queue2[id];
          delete queue2[id];
          fn();
        }
      };
      var runner = function(id) {
        return function() {
          run(id);
        };
      };
      var eventListener = function(event) {
        run(event.data);
      };
      var globalPostMessageDefer = function(id) {
        globalThis2.postMessage(String2(id), $location.protocol + "//" + $location.host);
      };
      if (!set || !clear3) {
        set = function setImmediate2(handler) {
          validateArgumentsLength(arguments.length, 1);
          var fn = isCallable(handler) ? handler : Function2(handler);
          var args = arraySlice(arguments, 1);
          queue2[++counter] = function() {
            apply2(fn, void 0, args);
          };
          defer(counter);
          return counter;
        };
        clear3 = function clearImmediate2(id) {
          delete queue2[id];
        };
        if (IS_NODE) {
          defer = function(id) {
            process2.nextTick(runner(id));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(runner(id));
          };
        } else if (MessageChannel && !IS_IOS) {
          channel3 = new MessageChannel();
          port = channel3.port2;
          channel3.port1.onmessage = eventListener;
          defer = bind(port.postMessage, port);
        } else if (globalThis2.addEventListener && isCallable(globalThis2.postMessage) && !globalThis2.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
          defer = globalPostMessageDefer;
          globalThis2.addEventListener("message", eventListener, false);
        } else if (ONREADYSTATECHANGE in createElement("script")) {
          defer = function(id) {
            html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(runner(id), 0);
          };
        }
      }
      module.exports = {
        set,
        clear: clear3
      };
    }
  });
  var require_safe_get_built_in = __commonJS2({
    "../../node_modules/core-js-pure/internals/safe-get-built-in.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var DESCRIPTORS = require_descriptors2();
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      module.exports = function(name) {
        if (!DESCRIPTORS) return globalThis2[name];
        var descriptor = getOwnPropertyDescriptor(globalThis2, name);
        return descriptor && descriptor.value;
      };
    }
  });
  var require_queue = __commonJS2({
    "../../node_modules/core-js-pure/internals/queue.js"(exports, module) {
      "use strict";
      var Queue = function() {
        this.head = null;
        this.tail = null;
      };
      Queue.prototype = {
        add: function(item) {
          var entry = { item, next: null };
          var tail = this.tail;
          if (tail) tail.next = entry;
          else this.head = entry;
          this.tail = entry;
        },
        get: function() {
          var entry = this.head;
          if (entry) {
            var next = this.head = entry.next;
            if (next === null) this.tail = null;
            return entry.item;
          }
        }
      };
      module.exports = Queue;
    }
  });
  var require_environment_is_ios_pebble = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-is-ios-pebble.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent2();
      module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
    }
  });
  var require_environment_is_webos_webkit = __commonJS2({
    "../../node_modules/core-js-pure/internals/environment-is-webos-webkit.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent2();
      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
    }
  });
  var require_microtask = __commonJS2({
    "../../node_modules/core-js-pure/internals/microtask.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var safeGetBuiltIn = require_safe_get_built_in();
      var bind = require_function_bind_context2();
      var macrotask = require_task().set;
      var Queue = require_queue();
      var IS_IOS = require_environment_is_ios();
      var IS_IOS_PEBBLE = require_environment_is_ios_pebble();
      var IS_WEBOS_WEBKIT = require_environment_is_webos_webkit();
      var IS_NODE = require_environment_is_node();
      var MutationObserver = globalThis2.MutationObserver || globalThis2.WebKitMutationObserver;
      var document2 = globalThis2.document;
      var process2 = globalThis2.process;
      var Promise2 = globalThis2.Promise;
      var microtask = safeGetBuiltIn("queueMicrotask");
      var notify;
      var toggle;
      var node;
      var promise3;
      var then;
      if (!microtask) {
        queue2 = new Queue();
        flush3 = function() {
          var parent, fn;
          if (IS_NODE && (parent = process2.domain)) parent.exit();
          while (fn = queue2.get()) try {
            fn();
          } catch (error) {
            if (queue2.head) notify();
            throw error;
          }
          if (parent) parent.enter();
        };
        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
          toggle = true;
          node = document2.createTextNode("");
          new MutationObserver(flush3).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
          promise3 = Promise2.resolve(void 0);
          promise3.constructor = Promise2;
          then = bind(promise3.then, promise3);
          notify = function() {
            then(flush3);
          };
        } else if (IS_NODE) {
          notify = function() {
            process2.nextTick(flush3);
          };
        } else {
          macrotask = bind(macrotask, globalThis2);
          notify = function() {
            macrotask(flush3);
          };
        }
        microtask = function(fn) {
          if (!queue2.head) notify();
          queue2.add(fn);
        };
      }
      var queue2;
      var flush3;
      module.exports = microtask;
    }
  });
  var require_host_report_errors = __commonJS2({
    "../../node_modules/core-js-pure/internals/host-report-errors.js"(exports, module) {
      "use strict";
      module.exports = function(a, b) {
        try {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        } catch (error) {
        }
      };
    }
  });
  var require_perform = __commonJS2({
    "../../node_modules/core-js-pure/internals/perform.js"(exports, module) {
      "use strict";
      module.exports = function(exec2) {
        try {
          return { error: false, value: exec2() };
        } catch (error) {
          return { error: true, value: error };
        }
      };
    }
  });
  var require_weak_map_basic_detection = __commonJS2({
    "../../node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var isCallable = require_is_callable2();
      var WeakMap2 = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
    }
  });
  var require_shared_key2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared2();
      var uid = require_uid2();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });
  var require_hidden_keys2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });
  var require_internal_state = __commonJS2({
    "../../node_modules/core-js-pure/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var globalThis2 = require_global_this2();
      var isObject = require_is_object2();
      var createNonEnumerableProperty = require_create_non_enumerable_property2();
      var hasOwn = require_has_own_property2();
      var shared = require_shared_store2();
      var sharedKey = require_shared_key2();
      var hiddenKeys = require_hidden_keys2();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = globalThis2.TypeError;
      var WeakMap2 = globalThis2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store5 = shared.state || (shared.state = new WeakMap2());
        store5.get = store5.get;
        store5.has = store5.has;
        store5.set = store5.set;
        set = function(it, metadata) {
          if (store5.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          store5.set(it, metadata);
          return metadata;
        };
        get = function(it) {
          return store5.get(it) || {};
        };
        has = function(it) {
          return store5.has(it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store5;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });
  var require_promise_native_constructor = __commonJS2({
    "../../node_modules/core-js-pure/internals/promise-native-constructor.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      module.exports = globalThis2.Promise;
    }
  });
  var require_promise_constructor_detection = __commonJS2({
    "../../node_modules/core-js-pure/internals/promise-constructor-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this2();
      var NativePromiseConstructor = require_promise_native_constructor();
      var isCallable = require_is_callable2();
      var isForced = require_is_forced2();
      var inspectSource = require_inspect_source();
      var wellKnownSymbol = require_well_known_symbol2();
      var ENVIRONMENT = require_environment();
      var IS_PURE = require_is_pure2();
      var V8_VERSION = require_environment_v8_version2();
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      var SPECIES = wellKnownSymbol("species");
      var SUBCLASSING = false;
      var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis2.PromiseRejectionEvent);
      var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
        if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
        if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
          var promise3 = new NativePromiseConstructor(function(resolve) {
            resolve(1);
          });
          var FakePromise = function(exec2) {
            exec2(function() {
            }, function() {
            });
          };
          var constructor = promise3.constructor = {};
          constructor[SPECIES] = FakePromise;
          SUBCLASSING = promise3.then(function() {
          }) instanceof FakePromise;
          if (!SUBCLASSING) return true;
        }
        return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
      });
      module.exports = {
        CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
        REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
        SUBCLASSING
      };
    }
  });
  var require_new_promise_capability = __commonJS2({
    "../../node_modules/core-js-pure/internals/new-promise-capability.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable2();
      var $TypeError = TypeError;
      var PromiseCapability = function(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aCallable(resolve);
        this.reject = aCallable(reject);
      };
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });
  var require_es_promise_constructor = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.constructor.js"() {
      "use strict";
      var $ = require_export2();
      var IS_PURE = require_is_pure2();
      var IS_NODE = require_environment_is_node();
      var globalThis2 = require_global_this2();
      var path = require_path2();
      var call10 = require_function_call2();
      var defineBuiltIn = require_define_built_in();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var setSpecies = require_set_species();
      var aCallable = require_a_callable2();
      var isCallable = require_is_callable2();
      var isObject = require_is_object2();
      var anInstance = require_an_instance();
      var speciesConstructor = require_species_constructor();
      var task2 = require_task().set;
      var microtask = require_microtask();
      var hostReportErrors = require_host_report_errors();
      var perform = require_perform();
      var Queue = require_queue();
      var InternalStateModule = require_internal_state();
      var NativePromiseConstructor = require_promise_native_constructor();
      var PromiseConstructorDetection = require_promise_constructor_detection();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var PROMISE = "Promise";
      var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
      var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
      var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var setInternalState = InternalStateModule.set;
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      var PromiseConstructor = NativePromiseConstructor;
      var PromisePrototype = NativePromisePrototype;
      var TypeError2 = globalThis2.TypeError;
      var document2 = globalThis2.document;
      var process2 = globalThis2.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document2 && document2.createEvent && globalThis2.dispatchEvent);
      var UNHANDLED_REJECTION = "unhandledrejection";
      var REJECTION_HANDLED = "rejectionhandled";
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var Internal;
      var OwnPromiseCapability;
      var PromiseWrapper;
      var nativeThen;
      var isThenable = function(it) {
        var then;
        return isObject(it) && isCallable(then = it.then) ? then : false;
      };
      var callReaction = function(reaction, state) {
        var value = state.value;
        var ok = state.state === FULFILLED;
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(new TypeError2("Promise-chain cycle"));
            } else if (then = isThenable(result)) {
              call10(then, result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      };
      var notify = function(state, isReject) {
        if (state.notified) return;
        state.notified = true;
        microtask(function() {
          var reactions = state.reactions;
          var reaction;
          while (reaction = reactions.get()) {
            callReaction(reaction, state);
          }
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };
      var dispatchEvent = function(name, promise3, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
          event = document2.createEvent("Event");
          event.promise = promise3;
          event.reason = reason;
          event.initEvent(name, false, true);
          globalThis2.dispatchEvent(event);
        } else event = { promise: promise3, reason };
        if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis2["on" + name])) handler(event);
        else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
      };
      var onUnhandled = function(state) {
        call10(task2, globalThis2, function() {
          var promise3 = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;
          if (IS_UNHANDLED) {
            result = perform(function() {
              if (IS_NODE) {
                process2.emit("unhandledRejection", value, promise3);
              } else dispatchEvent(UNHANDLED_REJECTION, promise3, value);
            });
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };
      var isUnhandled = function(state) {
        return state.rejection !== HANDLED && !state.parent;
      };
      var onHandleUnhandled = function(state) {
        call10(task2, globalThis2, function() {
          var promise3 = state.facade;
          if (IS_NODE) {
            process2.emit("rejectionHandled", promise3);
          } else dispatchEvent(REJECTION_HANDLED, promise3, state.value);
        });
      };
      var bind = function(fn, state, unwrap) {
        return function(value) {
          fn(state, value, unwrap);
        };
      };
      var internalReject = function(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };
      var internalResolve = function(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        try {
          if (state.facade === value) throw new TypeError2("Promise can't be resolved itself");
          var then = isThenable(value);
          if (then) {
            microtask(function() {
              var wrapper = { done: false };
              try {
                call10(
                  then,
                  value,
                  bind(internalResolve, wrapper, state),
                  bind(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({ done: false }, error, state);
        }
      };
      if (FORCED_PROMISE_CONSTRUCTOR) {
        PromiseConstructor = function Promise2(executor) {
          anInstance(this, PromisePrototype);
          aCallable(executor);
          call10(Internal, this);
          var state = getInternalPromiseState(this);
          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };
        PromisePrototype = PromiseConstructor.prototype;
        Internal = function Promise2(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new Queue(),
            rejection: false,
            state: PENDING,
            value: null
          });
        };
        Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
          var state = getInternalPromiseState(this);
          var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
          state.parent = true;
          reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
          reaction.fail = isCallable(onRejected) && onRejected;
          reaction.domain = IS_NODE ? process2.domain : void 0;
          if (state.state === PENDING) state.reactions.add(reaction);
          else microtask(function() {
            callReaction(reaction, state);
          });
          return reaction.promise;
        });
        OwnPromiseCapability = function() {
          var promise3 = new Internal();
          var state = getInternalPromiseState(promise3);
          this.promise = promise3;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
        if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;
          if (!NATIVE_PROMISE_SUBCLASSING) {
            defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve, reject) {
                call10(nativeThen, that, resolve, reject);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
          }
          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
          }
          if (setPrototypeOf) {
            setPrototypeOf(NativePromisePrototype, PromisePrototype);
          }
        }
      }
      $({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        Promise: PromiseConstructor
      });
      PromiseWrapper = path.Promise;
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
    }
  });
  var require_iterators = __commonJS2({
    "../../node_modules/core-js-pure/internals/iterators.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });
  var require_is_array_iterator_method = __commonJS2({
    "../../node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol2();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });
  var require_math_trunc2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });
  var require_to_integer_or_infinity2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc2();
      module.exports = function(argument) {
        var number3 = +argument;
        return number3 !== number3 || number3 === 0 ? 0 : trunc(number3);
      };
    }
  });
  var require_to_length2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity2();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });
  var require_length_of_array_like2 = __commonJS2({
    "../../node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length2();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });
  var require_get_iterator_method = __commonJS2({
    "../../node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var getMethod = require_get_method2();
      var isNullOrUndefined = require_is_null_or_undefined2();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol2();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
      };
    }
  });
  var require_get_iterator = __commonJS2({
    "../../node_modules/core-js-pure/internals/get-iterator.js"(exports, module) {
      "use strict";
      var call10 = require_function_call2();
      var aCallable = require_a_callable2();
      var anObject = require_an_object2();
      var tryToString = require_try_to_string2();
      var getIteratorMethod = require_get_iterator_method();
      var $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (aCallable(iteratorMethod)) return anObject(call10(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });
  var require_iterator_close = __commonJS2({
    "../../node_modules/core-js-pure/internals/iterator-close.js"(exports, module) {
      "use strict";
      var call10 = require_function_call2();
      var anObject = require_an_object2();
      var getMethod = require_get_method2();
      module.exports = function(iterator3, kind, value) {
        var innerResult, innerError;
        anObject(iterator3);
        try {
          innerResult = getMethod(iterator3, "return");
          if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
          }
          innerResult = call10(innerResult, iterator3);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw") throw value;
        if (innerError) throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });
  var require_iterate = __commonJS2({
    "../../node_modules/core-js-pure/internals/iterate.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context2();
      var call10 = require_function_call2();
      var anObject = require_an_object2();
      var tryToString = require_try_to_string2();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like2();
      var isPrototypeOf = require_object_is_prototype_of2();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var iteratorClose = require_iterator_close();
      var $TypeError = TypeError;
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var ResultPrototype = Result.prototype;
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_RECORD = !!(options && options.IS_RECORD);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that);
        var iterator3, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          if (iterator3) iteratorClose(iterator3, "normal");
          return new Result(true, condition);
        };
        var callFn = function(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }
          return INTERRUPTED ? fn(value, stop) : fn(value);
        };
        if (IS_RECORD) {
          iterator3 = iterable.iterator;
        } else if (IS_ITERATOR) {
          iterator3 = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
          }
          iterator3 = getIterator(iterable, iterFn);
        }
        next = IS_RECORD ? iterable.next : iterator3.next;
        while (!(step = call10(next, iterator3)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator3, "throw", error);
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      };
    }
  });
  var require_check_correctness_of_iteration = __commonJS2({
    "../../node_modules/core-js-pure/internals/check-correctness-of-iteration.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol2();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module.exports = function(exec2, SKIP_CLOSING) {
        try {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        } catch (error) {
          return false;
        }
        var ITERATION_SUPPORT = false;
        try {
          var object7 = {};
          object7[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec2(object7);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });
  var require_promise_statics_incorrect_iteration = __commonJS2({
    "../../node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js"(exports, module) {
      "use strict";
      var NativePromiseConstructor = require_promise_native_constructor();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
        NativePromiseConstructor.all(iterable).then(void 0, function() {
        });
      });
    }
  });
  var require_es_promise_all = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.all.js"() {
      "use strict";
      var $ = require_export2();
      var call10 = require_function_call2();
      var aCallable = require_a_callable2();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var iterate = require_iterate();
      var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        all: function all2(iterable) {
          var C = this;
          var capability = newPromiseCapabilityModule.f(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise3) {
              var index = counter++;
              var alreadyCalled = false;
              remaining++;
              call10($promiseResolve, C, promise3).then(function(value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
    }
  });
  var require_es_promise_catch = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.catch.js"() {
      "use strict";
      var $ = require_export2();
      var IS_PURE = require_is_pure2();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      var NativePromiseConstructor = require_promise_native_constructor();
      var getBuiltIn = require_get_built_in2();
      var isCallable = require_is_callable2();
      var defineBuiltIn = require_define_built_in();
      var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
      $({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
        "catch": function(onRejected) {
          return this.then(void 0, onRejected);
        }
      });
      if (!IS_PURE && isCallable(NativePromiseConstructor)) {
        method = getBuiltIn("Promise").prototype["catch"];
        if (NativePromisePrototype["catch"] !== method) {
          defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: true });
        }
      }
      var method;
    }
  });
  var require_es_promise_race = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.race.js"() {
      "use strict";
      var $ = require_export2();
      var call10 = require_function_call2();
      var aCallable = require_a_callable2();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var iterate = require_iterate();
      var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
      $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
        race: function race5(iterable) {
          var C = this;
          var capability = newPromiseCapabilityModule.f(C);
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise3) {
              call10($promiseResolve, C, promise3).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
    }
  });
  var require_es_promise_reject = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.reject.js"() {
      "use strict";
      var $ = require_export2();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      $({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
        reject: function reject(r) {
          var capability = newPromiseCapabilityModule.f(this);
          var capabilityReject = capability.reject;
          capabilityReject(r);
          return capability.promise;
        }
      });
    }
  });
  var require_promise_resolve = __commonJS2({
    "../../node_modules/core-js-pure/internals/promise-resolve.js"(exports, module) {
      "use strict";
      var anObject = require_an_object2();
      var isObject = require_is_object2();
      var newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
    }
  });
  var require_es_promise_resolve = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.resolve.js"() {
      "use strict";
      var $ = require_export2();
      var getBuiltIn = require_get_built_in2();
      var IS_PURE = require_is_pure2();
      var NativePromiseConstructor = require_promise_native_constructor();
      var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
      var promiseResolve = require_promise_resolve();
      var PromiseConstructorWrapper = getBuiltIn("Promise");
      var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
      $({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
        resolve: function resolve(x) {
          return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
        }
      });
    }
  });
  var require_es_promise = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.js"() {
      "use strict";
      require_es_promise_constructor();
      require_es_promise_all();
      require_es_promise_catch();
      require_es_promise_race();
      require_es_promise_reject();
      require_es_promise_resolve();
    }
  });
  var require_es_promise_with_resolvers = __commonJS2({
    "../../node_modules/core-js-pure/modules/es.promise.with-resolvers.js"() {
      "use strict";
      var $ = require_export2();
      var newPromiseCapabilityModule = require_new_promise_capability();
      $({ target: "Promise", stat: true }, {
        withResolvers: function withResolvers2() {
          var promiseCapability = newPromiseCapabilityModule.f(this);
          return {
            promise: promiseCapability.promise,
            resolve: promiseCapability.resolve,
            reject: promiseCapability.reject
          };
        }
      });
    }
  });
  var require_with_resolvers = __commonJS2({
    "../../node_modules/core-js-pure/es/promise/with-resolvers.js"(exports, module) {
      "use strict";
      require_es_promise();
      require_es_promise_with_resolvers();
      var call10 = require_function_call2();
      var isCallable = require_is_callable2();
      var path = require_path2();
      var Promise2 = path.Promise;
      var promiseWithResolvers = Promise2.withResolvers;
      module.exports = function withResolvers2() {
        return call10(promiseWithResolvers, isCallable(this) ? this : Promise2);
      };
    }
  });
  var require_with_resolvers2 = __commonJS2({
    "../../node_modules/core-js-pure/stable/promise/with-resolvers.js"(exports, module) {
      "use strict";
      var parent = require_with_resolvers();
      module.exports = parent;
    }
  });
  var require_esnext_promise_with_resolvers = __commonJS2({
    "../../node_modules/core-js-pure/modules/esnext.promise.with-resolvers.js"() {
      "use strict";
      require_es_promise_with_resolvers();
    }
  });
  var require_with_resolvers3 = __commonJS2({
    "../../node_modules/core-js-pure/actual/promise/with-resolvers.js"(exports, module) {
      "use strict";
      var parent = require_with_resolvers2();
      require_esnext_promise_with_resolvers();
      module.exports = parent;
    }
  });
  var require_with_resolvers4 = __commonJS2({
    "../../node_modules/core-js-pure/full/promise/with-resolvers.js"(exports, module) {
      "use strict";
      var parent = require_with_resolvers3();
      module.exports = parent;
    }
  });
  var require_with_resolvers5 = __commonJS2({
    "../../node_modules/core-js-pure/features/promise/with-resolvers.js"(exports, module) {
      "use strict";
      module.exports = require_with_resolvers4();
    }
  });
  var import_with_resolvers = __toESM2(require_with_resolvers5());
  var CONNECT = "DIRECT_LINE/CONNECT";
  var CONNECT_FULFILLED = `${CONNECT}_FULFILLED`;
  var CONNECT_FULFILLING = `${CONNECT}_FULFILLING`;
  var CONNECT_PENDING = `${CONNECT}_PENDING`;
  var CONNECT_REJECTED = `${CONNECT}_REJECTED`;
  var CONNECT_STILL_PENDING = `${CONNECT}_STILL_PENDING`;
  var DISCONNECT = "DIRECT_LINE/DISCONNECT";
  var DISCONNECT_PENDING = `${DISCONNECT}_PENDING`;
  var DISCONNECT_REJECTED = `${DISCONNECT}_REJECTED`;
  var DISCONNECT_FULFILLED = `${DISCONNECT}_FULFILLED`;
  var POST_ACTIVITY = "DIRECT_LINE/POST_ACTIVITY";
  var POST_ACTIVITY_FULFILLED = `${POST_ACTIVITY}_FULFILLED`;
  var POST_ACTIVITY_IMPEDED = `${POST_ACTIVITY}_IMPEDED`;
  var POST_ACTIVITY_PENDING = `${POST_ACTIVITY}_PENDING`;
  var POST_ACTIVITY_REJECTED = `${POST_ACTIVITY}_REJECTED`;
  var ActivityClientState_exports = {};
  __export(ActivityClientState_exports, {
    SENDING: () => SENDING,
    SEND_FAILED: () => SEND_FAILED,
    SENT: () => SENT
  });
  var SEND_FAILED = "send failed";
  var SENDING = "sending";
  var SENT = "sent";
  var DictateState_exports = {};
  __export(DictateState_exports, {
    DICTATING: () => DICTATING,
    IDLE: () => IDLE,
    STARTING: () => STARTING,
    STOPPING: () => STOPPING,
    WILL_START: () => WILL_START
  });
  var IDLE = 0;
  var WILL_START = 1;
  var STARTING = 2;
  var DICTATING = 3;
  var STOPPING = 4;
  var RECONNECT = "DIRECT_LINE/RECONNECT";
  var RECONNECT_FULFILLED = `${RECONNECT}_FULFILLED`;
  var RECONNECT_FULFILLING = `${RECONNECT}_FULFILLING`;
  var RECONNECT_PENDING = `${RECONNECT}_PENDING`;
  var RECONNECT_REJECTED = `${RECONNECT}_REJECTED`;
  var orgSchemaProperty = (schema) => fallback(
    optional(
      union([
        pipe(
          array(schema),
          transform((array5) => array5[0])
        ),
        schema
      ])
    ),
    void 0
  );
  var orgSchemaProperty_default = orgSchemaProperty;
  var project = (entries) => thing({
    slogan: orgSchemaProperty_default(string()),
    ...entries
  });
  var userReview = (entries) => thing({
    reviewAspect: orgSchemaProperty_default(string()),
    ...entries
  });
  var action = (entries) => thing({
    actionOption: orgSchemaProperty_default(string()),
    actionStatus: orgSchemaProperty_default(
      pipe(
        string(),
        picklist(["ActiveActionStatus", "CompletedActionStatus", "FailedActionStatus", "PotentialActionStatus"])
      )
    ),
    provider: orgSchemaProperty_default(lazy(() => project())),
    result: orgSchemaProperty_default(userReview()),
    ...entries
  });
  var singularToArray = (schema) => fallback(
    pipe(
      array(schema),
      transform((value) => value.filter((value2) => typeof value2 !== "undefined"))
    ),
    (value) => value?.value ? [parse(schema, value?.value)] : void 0
  );
  function orgSchemaProperties(schema) {
    return singularToArray(orgSchemaProperty_default(schema));
  }
  var thingEntries = {
    "@context": optional(pipe(string(), literal("https://schema.org"))),
    "@id": optional(string()),
    "@type": string(),
    additionalType: orgSchemaProperty_default(string()),
    alternateName: orgSchemaProperty_default(string()),
    description: orgSchemaProperty_default(string()),
    name: orgSchemaProperty_default(string()),
    potentialAction: orgSchemaProperties(lazy(() => action())),
    url: orgSchemaProperty_default(string())
  };
  var thing = (entries) => (
    // Forward compatibility is the reason why we use unknown() here and not adhere to JSON-LD which drop unknown fields.
    //
    // Example:
    // - CreativeWork.editor must be type of Person (or any of its subtypes, Patient)
    // - Without unknown(), when we parse the CreativeWork, we will drop Patient.diagnosis
    // - That means, CreativeWork.editor.diagnosis will be unset despite CreativeWork.editor is of type Patient
    //
    // We can drop unknown() if there is a way to keep CreativeWork.editor.diagnosis.
    // It is okay to drop future/unsupported properties. But not today/supported properties.
    looseObject({
      ...thingEntries,
      ...entries
    })
  );
  var parseThing = (data) => parse(thing(), data);
  var definedTerm = (entries) => thing({
    inDefinedTermSet: orgSchemaProperty_default(string()),
    termCode: orgSchemaProperty_default(string()),
    ...entries
  });
  var person = (entries) => object({
    description: orgSchemaProperty_default(string()),
    image: orgSchemaProperty_default(string()),
    name: orgSchemaProperty_default(string()),
    ...entries
  });
  var creativeWork = (entries) => thing({
    // For forward compatibility, we did not enforce @type must be "CreativeWork" or any other subtypes.
    // In future, if Schema.org introduced a new subtype of CreativeWork, we should still able to parse that one as a CreativeWork.
    abstract: orgSchemaProperty_default(string()),
    author: orgSchemaProperty_default(union([person(), string()])),
    citation: orgSchemaProperties(lazy(() => creativeWork())),
    isBasedOn: orgSchemaProperty_default(lazy(() => creativeWork())),
    keywords: orgSchemaProperties(union([lazy(() => definedTerm()), string()])),
    pattern: orgSchemaProperty_default(lazy(() => definedTerm())),
    text: orgSchemaProperty_default(string()),
    usageInfo: orgSchemaProperty_default(lazy(() => creativeWork())),
    ...entries
  });
  var parseCreativeWork = (data) => parse(creativeWork(), data);
  function getOrgSchemaMessage(graph) {
    const messageEntity = (graph || []).find((entity) => {
      const isThing = entity.type?.startsWith("https://schema.org/");
      if (isThing) {
        const thing2 = parseThing(entity);
        return thing2["@id"] === "";
      }
    });
    const message = messageEntity && parseCreativeWork(messageEntity);
    return message && parseCreativeWork(message);
  }
  var EMPTY_ARRAY = Object.freeze([]);
  var streamSequenceSchema = pipe(number(), integer(), minValue(1));
  function eitherChannelDataOrEntities(activitySchema, metadataSchema) {
    const metadataInEntitiesSchema = object({
      ...metadataSchema.entries,
      type: literal("streaminfo")
    });
    return union([
      object({
        ...activitySchema.entries,
        channelData: metadataSchema
      }),
      pipe(
        object({
          ...activitySchema.entries,
          // We use `findItem`/`filterItem` than `variant`/`someItem` because the output of the latter is an union type.
          // Consider `{ type: string } | { streamId: string; type: 'streaminfo' }`, it turns into `{ type: string }` immediately.
          // TODO: [P2] valibot@1.1.0 did not infer output type for `filterItem()`, only infer for `findItem()`.
          //       Bump valibot@latest and see if they solved the issue.
          entities: pipe(
            array(any()),
            findItem((value) => is(metadataInEntitiesSchema, value)),
            check((value) => !!value)
          )
        }),
        transform(({ entities, ...value }) => ({ ...value, streamInfoEntity: entities }))
      )
    ]);
  }
  var livestreamingActivitySchema = union([
    // Interim.
    eitherChannelDataOrEntities(
      object({
        attachments: optional(array(any()), EMPTY_ARRAY),
        id: string(),
        // "text" is optional. If not set or empty, it presents a contentless activity.
        text: optional(undefinedable(string())),
        type: literal("typing")
      }),
      object({
        // "streamId" is optional for the very first activity in the session.
        streamId: optional(undefinedable(string())),
        streamSequence: streamSequenceSchema,
        streamType: literal("streaming")
      })
    ),
    // Informative message.
    eitherChannelDataOrEntities(
      object({
        attachments: optional(array(any()), EMPTY_ARRAY),
        id: string(),
        // Informative may not have "text", but should have abstract instead (checked later)
        text: optional(undefinedable(string())),
        type: literal("typing"),
        entities: optional(array(any()), EMPTY_ARRAY)
      }),
      object({
        // "streamId" is optional for the very first activity in the session.
        streamId: optional(undefinedable(string())),
        streamSequence: streamSequenceSchema,
        streamType: literal("informative")
      })
    ),
    // Conclude with a message.
    eitherChannelDataOrEntities(
      object({
        attachments: optional(array(any()), EMPTY_ARRAY),
        id: string(),
        // If "text" is empty, it represents "regretting" the livestream.
        text: optional(undefinedable(string())),
        type: literal("message")
      }),
      object({
        // "streamId" is required for the final activity in the session.
        // The final activity must not be the sole activity in the session.
        streamId: pipe(string(), nonEmpty()),
        streamType: literal("final")
      })
    ),
    // Conclude without a message.
    eitherChannelDataOrEntities(
      object({
        attachments: optional(array(any()), EMPTY_ARRAY),
        id: string(),
        // If "text" is not set or empty, it represents "regretting" the livestream.
        text: optional(undefinedable(literal(""))),
        type: literal("typing")
      }),
      object({
        // "streamId" is required for the final activity in the session.
        // The final activity must not be the sole activity in the session.
        streamId: pipe(string(), nonEmpty()),
        streamType: literal("final")
      })
    )
  ]);
  var DEFAULT_STATE10 = Object.freeze([]);
  var DEFAULT_STATE14 = Object.freeze([]);
  var DEFAULT_STATE15 = Object.freeze({ activity: void 0 });
  var REGISTER_ACTION_SINK = "WEB_CHAT_INTERNAL/REGISTER_ACTION_SINK";
  var registerActionSinkActionSchema = pipe(
    object({
      payload: pipe(
        object({
          sink: custom((value) => safeParse(function_(), value).success)
        }),
        readonly()
      ),
      type: literal(REGISTER_ACTION_SINK)
    }),
    readonly()
  );
  var UNREGISTER_ACTION_SINK = "WEB_CHAT_INTERNAL/UNREGISTER_ACTION_SINK";
  var unregisterActionSinkActionSchema = pipe(
    object({
      payload: pipe(
        object({
          sink: custom((value) => safeParse(function_(), value).success)
        }),
        readonly()
      ),
      type: literal(UNREGISTER_ACTION_SINK)
    }),
    readonly()
  );
  var EMPTY_ARRAY2 = Object.freeze([]);
  var SET_SUGGESTED_ACTIONS = "WEB_CHAT/SET_SUGGESTED_ACTIONS";
  var setSuggestedActionsActionSchema = pipe(
    object({
      payload: pipe(
        object({
          originActivity: optional(custom((value) => safeParse(object({}), value).success)),
          suggestedActions: pipe(
            array(custom((value) => safeParse(object({}), value).success)),
            readonly()
          )
        }),
        readonly()
      ),
      type: literal(SET_SUGGESTED_ACTIONS)
    }),
    readonly()
  );
  var getType = src_default.getType.bind(src_default);
  var CLEAR_SUGGESTED_ACTIONS = "WEB_CHAT/CLEAR_SUGGESTED_ACTIONS";
  var clearSuggestedActionsActionSchema = pipe(
    object({
      type: literal(CLEAR_SUGGESTED_ACTIONS)
    }),
    readonly()
  );

  // src/components/preChatActivity/isPreChatMessageActivity.ts
  function isPreChatMessageActivity(activity) {
    return !!(activity && getOrgSchemaMessage(activity?.entities || [])?.keywords?.includes("PreChatMessage"));
  }

  // src/components/preChatActivity/PreChatMessageActivity.tsx
  var import_botframework_webchat_component5 = __toESM(require_botframework_webchat_component());
  var import_classnames6 = __toESM(require_classnames());
  var import_react17 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\preChatActivity\PreChatMessageActivity.module.css?css_module
  var classes3 = { "pre-chat-message-activity__body--blueprint": "wVBFYeW_pre-chat-message-activity__body--blueprint", "pre-chat-message-activity__body": "wVBFYeW_pre-chat-message-activity__body", "pre-chat-message-activity__body-avatar": "wVBFYeW_pre-chat-message-activity__body-avatar", "pre-chat-message-activity__toolbar": "wVBFYeW_pre-chat-message-activity__toolbar", "pre-chat-message-activity__body-title": "wVBFYeW_pre-chat-message-activity__body-title", "pre-chat-message-activity__body-subtitle": "wVBFYeW_pre-chat-message-activity__body-subtitle", "pre-chat-message-activity": "wVBFYeW_pre-chat-message-activity" };
  var PreChatMessageActivity_module_default = classes3;
  var _pre_chat_message_activity__body__blueprint0 = classes3["pre-chat-message-activity__body--blueprint"];
  var _pre_chat_message_activity__body0 = classes3["pre-chat-message-activity__body"];
  var _pre_chat_message_activity__body_avatar0 = classes3["pre-chat-message-activity__body-avatar"];
  var _pre_chat_message_activity__toolbar0 = classes3["pre-chat-message-activity__toolbar"];
  var _pre_chat_message_activity__body_title0 = classes3["pre-chat-message-activity__body-title"];
  var _pre_chat_message_activity__body_subtitle0 = classes3["pre-chat-message-activity__body-subtitle"];
  var _pre_chat_message_activity0 = classes3["pre-chat-message-activity"];

  // src/components/preChatActivity/StarterPromptsToolbar.tsx
  var import_botframework_webchat_api = __toESM(require_botframework_webchat_api());
  var import_classnames4 = __toESM(require_classnames());
  var import_react12 = __toESM(require_react());

  // src/components/preChatActivity/StarterPromptsCardAction.tsx
  var import_botframework_webchat_component2 = __toESM(require_botframework_webchat_component());
  var import_classnames3 = __toESM(require_classnames());
  var import_react11 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\preChatActivity\StarterPromptsCardAction.module.css?css_module
  var classes4 = { "pre-chat-message-activity__card-action-title": "wl8Upuq_pre-chat-message-activity__card-action-title", "pre-chat-message-activity__card-action-box": "wl8Upuq_pre-chat-message-activity__card-action-box", "pre-chat-message-activity__card-action-image": "wl8Upuq_pre-chat-message-activity__card-action-image", "pre-chat-message-activity__card-action-subtitle": "wl8Upuq_pre-chat-message-activity__card-action-subtitle" };
  var StarterPromptsCardAction_module_default = classes4;
  var _pre_chat_message_activity__card_action_title0 = classes4["pre-chat-message-activity__card-action-title"];
  var _pre_chat_message_activity__card_action_box0 = classes4["pre-chat-message-activity__card-action-box"];
  var _pre_chat_message_activity__card_action_image0 = classes4["pre-chat-message-activity__card-action-image"];
  var _pre_chat_message_activity__card_action_subtitle0 = classes4["pre-chat-message-activity__card-action-subtitle"];

  // src/components/preChatActivity/StarterPromptsCardAction.tsx
  var { useFocus, useRenderMarkdownAsHTML, useSendBoxValue, useUIState } = import_botframework_webchat_component2.hooks;
  var StarterPromptsCardAction = ({ className, messageBackAction }) => {
    const [_, setSendBoxValue] = useSendBoxValue();
    const [uiState] = useUIState();
    const classNames = useStyles_default(StarterPromptsCardAction_module_default);
    const focus = useFocus();
    const inputTextRef = useRefFrom(messageBackAction?.displayText || messageBackAction?.text || "");
    const renderMarkdownAsHTML = useRenderMarkdownAsHTML("message activity");
    const subtitleHTML = (0, import_react11.useMemo)(
      () => renderMarkdownAsHTML ? { __html: renderMarkdownAsHTML(messageBackAction?.text || "") } : void 0,
      [messageBackAction?.text, renderMarkdownAsHTML]
    );
    const disabled = uiState === "disabled";
    const title = messageBackAction && "title" in messageBackAction && messageBackAction.title;
    const shouldShowBlueprint = uiState === "blueprint" || !title;
    const handleClick = (0, import_react11.useCallback)(() => {
      setSendBoxValue(inputTextRef.current);
      focus("sendBox");
    }, [focus, inputTextRef, setSendBoxValue]);
    return shouldShowBlueprint ? /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        className: (0, import_classnames3.default)(className, classNames["pre-chat-message-activity__card-action-box"]),
        "data-testid": testIds_default.preChatMessageActivityStarterPromptsCardAction
      }
    ) : /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        "aria-disabled": disabled ? true : void 0,
        className: (0, import_classnames3.default)(className, classNames["pre-chat-message-activity__card-action-box"]),
        "data-testid": testIds_default.preChatMessageActivityStarterPromptsCardAction,
        onClick: disabled ? void 0 : handleClick,
        tabIndex: disabled ? -1 : void 0,
        type: "button"
      },
      /* @__PURE__ */ import_react11.default.createElement("div", { className: classNames["pre-chat-message-activity__card-action-title"] }, title),
      "image" in messageBackAction && messageBackAction.image && /* @__PURE__ */ import_react11.default.createElement(
        FluentIcon_default,
        {
          appearance: "text",
          className: classNames["pre-chat-message-activity__card-action-image"],
          mask: messageBackAction.image
        }
      ),
      /* @__PURE__ */ import_react11.default.createElement(
        "div",
        {
          className: classNames["pre-chat-message-activity__card-action-subtitle"],
          dangerouslySetInnerHTML: subtitleHTML
        }
      )
    );
  };
  StarterPromptsCardAction.displayName = "StarterPromptsCardAction";
  var StarterPromptsCardAction_default = (0, import_react11.memo)(StarterPromptsCardAction);

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\preChatActivity\StarterPromptsToolbar.module.css?css_module
  var classes5 = { "pre-chat-message-activity__card-action-toolbar": "wnoev2q_pre-chat-message-activity__card-action-toolbar", "pre-chat-message-activity__card-action-toolbar-grid": "wnoev2q_pre-chat-message-activity__card-action-toolbar-grid" };
  var StarterPromptsToolbar_module_default = classes5;
  var _pre_chat_message_activity__card_action_toolbar0 = classes5["pre-chat-message-activity__card-action-toolbar"];
  var _pre_chat_message_activity__card_action_toolbar_grid0 = classes5["pre-chat-message-activity__card-action-toolbar-grid"];

  // src/components/preChatActivity/StarterPromptsToolbar.tsx
  var { useUIState: useUIState2 } = import_botframework_webchat_api.hooks;
  var StarterPromptsToolbar = ({ cardActions, className }) => {
    const classNames = useStyles_default(StarterPromptsToolbar_module_default);
    const [uiState] = useUIState2();
    return (
      // TODO: Accessibility-wise, this should be role="toolbar" with keyboard navigation.
      /* @__PURE__ */ import_react12.default.createElement("div", { className: (0, import_classnames4.default)(className, classNames["pre-chat-message-activity__card-action-toolbar"]) }, /* @__PURE__ */ import_react12.default.createElement("div", { className: classNames["pre-chat-message-activity__card-action-toolbar-grid"] }, uiState !== "blueprint" && cardActions.filter(
        (card) => card.type === "messageBack"
      ).map((cardAction, index) => /* @__PURE__ */ import_react12.default.createElement(StarterPromptsCardAction_default, { key: index, messageBackAction: cardAction }))))
    );
  };
  StarterPromptsToolbar.displayName = "StarterPromptsToolbar";
  var StarterPromptsToolbar_default = (0, import_react12.memo)(StarterPromptsToolbar);

  // src/components/activity/ActivityDecorator.tsx
  var import_classnames5 = __toESM(require_classnames());
  var import_react16 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\activity\ActivityDecorator.module.css?css_module
  var classes6 = { "variant-copilot": "wKDnd3G_variant-copilot", "variant-fluent": "wKDnd3G_variant-fluent", "activity-decorator": "wKDnd3G_activity-decorator" };
  var ActivityDecorator_module_default = classes6;
  var _variant_copilot0 = classes6["variant-copilot"];
  var _variant_fluent0 = classes6["variant-fluent"];
  var _activity_decorator0 = classes6["activity-decorator"];

  // src/components/activity/CopilotMessageHeader.tsx
  var import_react15 = __toESM(require_react());
  var import_botframework_webchat_component4 = __toESM(require_botframework_webchat_component());

  // src/components/activity/private/useActivityStyleOptions.ts
  var import_react13 = __toESM(require_react());
  var import_botframework_webchat_component3 = __toESM(require_botframework_webchat_component());
  var { useStyleOptions } = import_botframework_webchat_component3.hooks;
  function useActivityStyleOptions(activity) {
    const [styleOptions] = useStyleOptions();
    return (0, import_react13.useMemo)(
      () => Object.freeze([
        {
          ...styleOptions,
          ...activity?.channelData?.webChat?.styleOptions
        }
      ]),
      [activity?.channelData?.webChat?.styleOptions, styleOptions]
    );
  }

  // src/components/activity/private/isAIGeneratedActivity.ts
  function isAIGeneratedActivity(activity) {
    return !!(activity && getOrgSchemaMessage(activity?.entities || [])?.keywords?.includes("AIGeneratedContent"));
  }

  // src/components/activity/private/useActivityAuthor.ts
  var import_react14 = __toESM(require_react());
  function useActivityAuthor(activity) {
    return (0, import_react14.useMemo)(() => {
      const entity = getOrgSchemaMessage(activity?.entities || []);
      return typeof entity?.author === "string" ? {
        "@type": "Person",
        description: void 0,
        image: void 0,
        name: entity?.author
      } : entity?.author;
    }, [activity]);
  }

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\activity\CopilotMessageHeader.module.css?css_module
  var classes7 = { "copilot-message-header": "wV7TleG_copilot-message-header", "copilot-message-header__title": "wV7TleG_copilot-message-header__title", "copilot-message-header__avatar": "wV7TleG_copilot-message-header__avatar", "copilot-message-header__ai-generated-content": "wV7TleG_copilot-message-header__ai-generated-content" };
  var CopilotMessageHeader_module_default = classes7;
  var _copilot_message_header0 = classes7["copilot-message-header"];
  var _copilot_message_header__title0 = classes7["copilot-message-header__title"];
  var _copilot_message_header__avatar0 = classes7["copilot-message-header__avatar"];
  var _copilot_message_header__ai_generated_content0 = classes7["copilot-message-header__ai-generated-content"];

  // src/components/activity/CopilotMessageHeader.tsx
  var { useLocalizer: useLocalizer2 } = import_botframework_webchat_component4.hooks;
  function CopilotMessageHeader({ activity }) {
    const [{ botAvatarImage, botAvatarBackgroundColor }] = useActivityStyleOptions(activity);
    const classNames = useStyles_default(CopilotMessageHeader_module_default);
    const localize = useLocalizer2();
    const isAIGenerated = isAIGeneratedActivity(activity);
    const avatarStyle = (0, import_react15.useMemo)(
      () => ({ "--background-color": botAvatarBackgroundColor }),
      [botAvatarBackgroundColor]
    );
    const author = useActivityAuthor(activity);
    const avatarImage = author?.image || botAvatarImage;
    const botTitle = author?.name || activity?.from?.name;
    return /* @__PURE__ */ import_react15.default.createElement("div", { className: classNames["copilot-message-header"] }, avatarImage && /* @__PURE__ */ import_react15.default.createElement(
      "img",
      {
        alt: localize("AVATAR_ALT", botTitle),
        className: classNames["copilot-message-header__avatar"],
        src: avatarImage,
        style: avatarStyle
      }
    ), /* @__PURE__ */ import_react15.default.createElement("span", { className: classNames["copilot-message-header__title"], title: botTitle }, botTitle), isAIGenerated && /* @__PURE__ */ import_react15.default.createElement("span", { className: classNames["copilot-message-header__ai-generated-content"] }, localize("ACTIVITY_CONTENT_CAUTION")));
  }
  var CopilotMessageHeader_default = (0, import_react15.memo)(CopilotMessageHeader);

  // src/components/activity/ActivityDecorator.tsx
  function ActivityDecorator({ activity, children }) {
    const classNames = useStyles_default(ActivityDecorator_module_default);
    const variants = useVariants();
    const variantClassName = useVariantClassName(ActivityDecorator_module_default);
    const shouldRenderHeader = variants.includes("copilot") && activity?.from?.role === "bot" && !!children;
    return /* @__PURE__ */ import_react16.default.createElement("div", { className: (0, import_classnames5.default)(classNames["activity-decorator"], variantClassName) }, shouldRenderHeader && /* @__PURE__ */ import_react16.default.createElement(CopilotMessageHeader_default, { activity }), children);
  }
  ActivityDecorator.displayName = "ActivityDecorator";
  var ActivityDecorator_default = (0, import_react16.memo)(ActivityDecorator);

  // src/components/preChatActivity/PreChatMessageActivity.tsx
  var { useLocalizer: useLocalizer3, useRenderMarkdownAsHTML: useRenderMarkdownAsHTML2, useUIState: useUIState3 } = import_botframework_webchat_component5.hooks;
  var PreChatMessageActivity = ({ activity }) => {
    const [uiState] = useUIState3();
    const classNames = useStyles_default(PreChatMessageActivity_module_default);
    const renderMarkdownAsHTML = useRenderMarkdownAsHTML2();
    const localize = useLocalizer3();
    const author = useActivityAuthor(activity);
    const html = (0, import_react17.useMemo)(
      () => renderMarkdownAsHTML ? { __html: renderMarkdownAsHTML(author?.description || "") } : { __html: "" },
      [author?.description, renderMarkdownAsHTML]
    );
    return /* @__PURE__ */ import_react17.default.createElement("div", { className: classNames["pre-chat-message-activity"] }, author && /* @__PURE__ */ import_react17.default.createElement(
      "div",
      {
        className: (0, import_classnames6.default)(
          classNames["pre-chat-message-activity__body"],
          uiState === "blueprint" && classNames["pre-chat-message-activity__body--blueprint"]
        )
      },
      author.image && /* @__PURE__ */ import_react17.default.createElement(
        "img",
        {
          alt: localize("AVATAR_ALT", author.name),
          className: classNames["pre-chat-message-activity__body-avatar"],
          src: author.image
        }
      ),
      author.name && /* @__PURE__ */ import_react17.default.createElement("h2", { className: classNames["pre-chat-message-activity__body-title"] }, author.name),
      author.description && // eslint-disable-next-line react/no-danger
      /* @__PURE__ */ import_react17.default.createElement("div", { className: classNames["pre-chat-message-activity__body-subtitle"], dangerouslySetInnerHTML: html })
    ), /* @__PURE__ */ import_react17.default.createElement(
      StarterPromptsToolbar_default,
      {
        cardActions: activity.suggestedActions?.actions || [],
        className: classNames["pre-chat-message-activity__toolbar"]
      }
    ));
  };
  PreChatMessageActivity.displayName = "PreChatMessageActivity";
  var PreChatMessageActivity_default = (0, import_react17.memo)(PreChatMessageActivity);

  // src/components/suggestedActions/private/computeSuggestedActionText.ts
  function computeSuggestedActionText(cardAction) {
    const { title } = cardAction;
    const { type, value } = cardAction;
    if (type === "messageBack") {
      return title || cardAction.displayText;
    } else if (title) {
      return title;
    } else if (typeof value === "string") {
      return value;
    }
    return JSON.stringify(value);
  }

  // src/components/suggestedActions/private/rovingFocus.tsx
  var import_react18 = __toESM(require_react());
  var RovingFocusContext = (0, import_react18.createContext)({
    itemEffector: () => {
      throw new Error("botframework-webchat-fluent-theme rovingFocus: no provider for RovingFocusContext.");
    }
  });
  function RovingFocusProvider(props) {
    const activeItemIndexRef = (0, import_react18.useRef)(0);
    const itemRefsRef = (0, import_react18.useRef)([]);
    const updateItemTabIndex = (0, import_react18.useCallback)(
      ({ current: current2 }, index) => current2 && (current2.tabIndex = activeItemIndexRef.current === index ? 0 : -1),
      [activeItemIndexRef]
    );
    const setActiveItemIndex = (0, import_react18.useCallback)(
      (valueOrFunction) => {
        let nextActiveItemIndex;
        if (typeof valueOrFunction === "number") {
          nextActiveItemIndex = valueOrFunction;
        } else {
          nextActiveItemIndex = valueOrFunction(activeItemIndexRef.current);
        }
        if (nextActiveItemIndex && !itemRefsRef.current.at(nextActiveItemIndex)?.current) {
          nextActiveItemIndex = 0;
        }
        if (activeItemIndexRef.current !== nextActiveItemIndex) {
          activeItemIndexRef.current = nextActiveItemIndex;
          itemRefsRef.current.forEach((ref, index) => updateItemTabIndex(ref, index));
          itemRefsRef.current.at(nextActiveItemIndex)?.current?.focus();
        }
      },
      [updateItemTabIndex, itemRefsRef, activeItemIndexRef]
    );
    const handleFocus = (0, import_react18.useCallback)(
      (event) => {
        const { target } = event;
        const index = itemRefsRef.current.findIndex(({ current: current2 }) => current2 === target);
        if (index !== -1) {
          setActiveItemIndex(index);
        }
      },
      [itemRefsRef, setActiveItemIndex]
    );
    const handleSetNextActive = (0, import_react18.useCallback)(
      (key) => (currentIndex) => {
        const isUnidirectional = !props.direction;
        const isVerticalMove = /up|down/iu.test(key) && props.direction === "vertical";
        const isHorizontalMove = /left|right/iu.test(key) && props.direction === "horizontal";
        const isForwardMove = /right|down/iu.test(key);
        const direction = isUnidirectional || isVerticalMove || isHorizontalMove ? isForwardMove ? 1 : -1 : 0;
        const itemIndices = itemRefsRef.current.map((_, index) => index);
        const nextIndex = itemIndices.indexOf(currentIndex) + direction;
        return itemIndices.at(nextIndex) ?? 0;
      },
      [props.direction]
    );
    const handleKeyDown = (0, import_react18.useCallback)(
      (event) => {
        const { key } = event;
        switch (key) {
          case "Up":
          case "ArrowUp":
          case "Left":
          case "ArrowLeft":
          case "Down":
          case "ArrowDown":
          case "Right":
          case "ArrowRight":
            setActiveItemIndex(handleSetNextActive(key));
            break;
          case "Home":
            setActiveItemIndex(0);
            break;
          case "End":
            setActiveItemIndex(-1);
            break;
          case "Escape":
            props.onEscapeKey?.();
            break;
          default:
            return;
        }
        event.preventDefault();
        event.stopPropagation();
      },
      [setActiveItemIndex, handleSetNextActive, props]
    );
    const itemEffector = (0, import_react18.useCallback)(
      (ref, index) => {
        const { current: current2 } = ref;
        itemRefsRef.current[Number(index)] = ref;
        current2.addEventListener("focus", handleFocus);
        current2.addEventListener("keydown", handleKeyDown);
        updateItemTabIndex(ref, index);
        return () => {
          current2.removeEventListener("focus", handleFocus);
          current2.removeEventListener("keydown", handleKeyDown);
          delete itemRefsRef.current[Number(index)];
        };
      },
      [handleFocus, handleKeyDown, updateItemTabIndex, itemRefsRef]
    );
    const value = (0, import_react18.useMemo)(
      () => ({
        itemEffector
      }),
      [itemEffector]
    );
    return /* @__PURE__ */ import_react18.default.createElement(RovingFocusContext.Provider, { value }, props.children);
  }
  function useRovingFocusItemRef(itemIndex) {
    const ref = (0, import_react18.useRef)(null);
    const { itemEffector } = (0, import_react18.useContext)(RovingFocusContext);
    (0, import_react18.useEffect)(() => itemEffector(ref, itemIndex));
    return ref;
  }
  var rovingFocus_default = (0, import_react18.memo)(RovingFocusProvider);

  // src/components/suggestedActions/SuggestedAction.tsx
  var import_botframework_webchat_component6 = __toESM(require_botframework_webchat_component());
  var import_classnames7 = __toESM(require_classnames());
  var import_react20 = __toESM(require_react());

  // src/components/suggestedActions/AccessibleButton.tsx
  var import_react19 = __toESM(require_react());
  var preventDefaultHandler = (event) => event.preventDefault();
  var AccessibleButton = (0, import_react19.forwardRef)(
    ({ "aria-hidden": ariaHidden, children, className, "data-testid": dataTestId, disabled, onClick, tabIndex }, forwardedRef) => {
      const targetRef = (0, import_react19.useRef)(null);
      const ref = forwardedRef || targetRef;
      return /* @__PURE__ */ import_react19.default.createElement(
        "button",
        {
          "aria-disabled": disabled ? "true" : void 0,
          "aria-hidden": ariaHidden,
          className,
          "data-testid": dataTestId,
          onClick: disabled ? preventDefaultHandler : onClick,
          ref,
          tabIndex: disabled ? -1 : tabIndex,
          type: "button"
        },
        children
      );
    }
  );
  var AccessibleButton_default = (0, import_react19.memo)(AccessibleButton);

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\suggestedActions\SuggestedAction.module.css?css_module
  var classes8 = { "suggested-action": "whTKh-W_suggested-action", "suggested-action__image": "whTKh-W_suggested-action__image" };
  var SuggestedAction_module_default = classes8;
  var _suggested_action0 = classes8["suggested-action"];
  var _suggested_action__image0 = classes8["suggested-action__image"];

  // src/components/suggestedActions/SuggestedAction.tsx
  var { useFocus: useFocus2, usePerformCardAction, useScrollToEnd, useStyleSet, useSuggestedActionsHooks, useUIState: useUIState4 } = import_botframework_webchat_component6.hooks;
  function SuggestedAction({
    buttonText,
    className,
    displayText,
    image,
    imageAlt,
    itemIndex,
    text,
    type,
    value
  }) {
    const [_, setSuggestedActions] = useSuggestedActionsHooks().useSuggestedActions();
    const [{ suggestedAction: suggestedActionStyleSet }] = useStyleSet();
    const [uiState] = useUIState4();
    const focus = useFocus2();
    const focusRef = useRovingFocusItemRef(itemIndex);
    const performCardAction = usePerformCardAction();
    const classNames = useStyles_default(SuggestedAction_module_default);
    const scrollToEnd = useScrollToEnd();
    const handleClick = (0, import_react20.useCallback)(
      ({ target }) => {
        (async function() {
          await focus("sendBoxWithoutKeyboard");
          performCardAction({ displayText, text, type, value }, { target });
          type === "openUrl" && setSuggestedActions([]);
          scrollToEnd();
        })();
      },
      [displayText, focus, performCardAction, scrollToEnd, setSuggestedActions, text, type, value]
    );
    return /* @__PURE__ */ import_react20.default.createElement(
      AccessibleButton_default,
      {
        className: (0, import_classnames7.default)(classNames["suggested-action"], suggestedActionStyleSet + "", (className || "") + ""),
        "data-testid": testIds_default.sendBoxSuggestedAction,
        disabled: uiState === "disabled",
        onClick: handleClick,
        ref: focusRef,
        type: "button"
      },
      image && /* @__PURE__ */ import_react20.default.createElement("img", { alt: imageAlt, className: classNames["suggested-action__image"], src: image }),
      /* @__PURE__ */ import_react20.default.createElement("span", null, buttonText)
    );
  }
  var SuggestedAction_default = (0, import_react20.memo)(SuggestedAction);

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\suggestedActions\SuggestedActions.module.css?css_module
  var classes9 = { "suggested-actions--stacked": "wmPEMWG_suggested-actions--stacked", "suggested-actions": "wmPEMWG_suggested-actions", "suggested-actions--flow": "wmPEMWG_suggested-actions--flow" };
  var SuggestedActions_module_default = classes9;
  var _suggested_actions__stacked0 = classes9["suggested-actions--stacked"];
  var _suggested_actions0 = classes9["suggested-actions"];
  var _suggested_actions__flow0 = classes9["suggested-actions--flow"];

  // src/components/suggestedActions/SuggestedActions.tsx
  var { useFocus: useFocus3, useLocalizer: useLocalizer4, useStyleOptions: useStyleOptions2, useStyleSet: useStyleSet2, useSuggestedActionsHooks: useSuggestedActionsHooks2, useUIState: useUIState5 } = import_botframework_webchat_component7.hooks;
  function SuggestedActionStackedOrFlowContainer(props) {
    const [{ suggestedActionLayout }] = useStyleOptions2();
    const [{ suggestedActions: suggestedActionsStyleSet }] = useStyleSet2();
    const [uiState] = useUIState5();
    const classNames = useStyles_default(SuggestedActions_module_default);
    return /* @__PURE__ */ import_react21.default.createElement(
      "div",
      {
        "aria-label": props["aria-label"],
        "aria-orientation": "vertical",
        className: (0, import_classnames8.default)(
          classNames["suggested-actions"],
          suggestedActionsStyleSet + "",
          {
            [classNames["suggested-actions--flow"]]: suggestedActionLayout === "flow",
            [classNames["suggested-actions--stacked"]]: suggestedActionLayout !== "flow"
          },
          props.className
        ),
        role: "toolbar"
      },
      uiState !== "blueprint" && props.children
    );
  }
  function SuggestedActions() {
    const classNames = useStyles_default(SuggestedActions_module_default);
    const localize = useLocalizer4();
    const [suggestedActions, _, { activity }] = useSuggestedActionsHooks2().useSuggestedActions();
    const focus = useFocus3();
    const handleEscapeKey = (0, import_react21.useCallback)(() => {
      focus("sendBox");
    }, [focus]);
    const children = isPreChatMessageActivity(activity) ? [] : suggestedActions.map((cardAction, index) => {
      const { displayText, image, imageAltText, text, type, value } = cardAction;
      if (!suggestedActions?.length) {
        return null;
      }
      return /* @__PURE__ */ import_react21.default.createElement(
        SuggestedAction_default,
        {
          buttonText: computeSuggestedActionText(cardAction),
          displayText,
          image,
          imageAlt: image && (imageAltText || text),
          itemIndex: index,
          key: index,
          text,
          type,
          value
        }
      );
    });
    return /* @__PURE__ */ import_react21.default.createElement(rovingFocus_default, { onEscapeKey: handleEscapeKey }, /* @__PURE__ */ import_react21.default.createElement(
      SuggestedActionStackedOrFlowContainer,
      {
        "aria-label": localize("SUGGESTED_ACTIONS_LABEL_ALT"),
        className: classNames["suggested-actions"]
      },
      children
    ));
  }
  var SuggestedActions_default = (0, import_react21.memo)(SuggestedActions);

  // src/components/telephoneKeypad/Provider.tsx
  var import_react23 = __toESM(require_react());

  // src/components/telephoneKeypad/private/Context.ts
  var import_react22 = __toESM(require_react());
  var Context = (0, import_react22.createContext)(
    new Proxy({}, {
      get() {
        throw new Error("botframework-webchat: This hook can only used under its corresponding <Provider>.");
      }
    })
  );
  Context.displayName = "TelephoneKeypad.Context";
  var Context_default = Context;

  // src/components/telephoneKeypad/Provider.tsx
  var Provider = (0, import_react23.memo)(({ children }) => {
    const [shown, setShown] = (0, import_react23.useState)(false);
    const context = (0, import_react23.useMemo)(
      () => Object.freeze({
        setShown,
        shown
      }),
      [setShown, shown]
    );
    return /* @__PURE__ */ import_react23.default.createElement(Context_default.Provider, { value: context }, children);
  });
  var Provider_default = Provider;

  // src/components/telephoneKeypad/Surrogate.tsx
  var import_react27 = __toESM(require_react());

  // src/components/telephoneKeypad/private/TelephoneKeypad.tsx
  var import_botframework_webchat_component8 = __toESM(require_botframework_webchat_component());
  var import_classnames9 = __toESM(require_classnames());
  var import_react26 = __toESM(require_react());

  // src/components/telephoneKeypad/useShown.ts
  var import_react24 = __toESM(require_react());
  function useShown() {
    const { setShown, shown } = (0, import_react24.useContext)(Context_default);
    return (0, import_react24.useMemo)(() => Object.freeze([shown, setShown]), [shown, setShown]);
  }

  // src/components/telephoneKeypad/private/Button.tsx
  var import_react25 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\telephoneKeypad\private\Button.module.css?css_module
  var classes10 = { "telephone-keypad--horizontal": "wB0ADxG_telephone-keypad--horizontal", "telephone-keypad__button__ruby": "wB0ADxG_telephone-keypad__button__ruby", "telephone-keypad__button__text": "wB0ADxG_telephone-keypad__button__text", "telephone-keypad__button": "wB0ADxG_telephone-keypad__button" };
  var Button_module_default = classes10;
  var _telephone_keypad__horizontal0 = classes10["telephone-keypad--horizontal"];
  var _telephone_keypad__button__ruby0 = classes10["telephone-keypad__button__ruby"];
  var _telephone_keypad__button__text0 = classes10["telephone-keypad__button__text"];
  var _telephone_keypad__button0 = classes10["telephone-keypad__button"];

  // src/components/telephoneKeypad/private/Button.tsx
  var Button = (0, import_react25.memo)(
    (0, import_react25.forwardRef)(({ button, "data-testid": dataTestId, onClick, ruby }, ref) => {
      const classNames = useStyles_default(Button_module_default);
      const onClickRef = useRefFrom(onClick);
      const handleClick = (0, import_react25.useCallback)(() => onClickRef.current?.(), [onClickRef]);
      return /* @__PURE__ */ import_react25.default.createElement(
        "button",
        {
          className: classNames["telephone-keypad__button"],
          "data-testid": dataTestId,
          onClick: handleClick,
          ref,
          type: "button"
        },
        /* @__PURE__ */ import_react25.default.createElement("span", { className: classNames["telephone-keypad__button__text"] }, button === "*" ? "\u2217" : button),
        !!ruby && /* @__PURE__ */ import_react25.default.createElement("ruby", { className: classNames["telephone-keypad__button__ruby"] }, ruby)
      );
    })
  );
  Button.displayName = "TelephoneKeypad.Button";
  var Button_default = Button;

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\telephoneKeypad\private\TelephoneKeypad.module.css?css_module
  var classes11 = { "telephone-keypad": "wjMTHeW_telephone-keypad", "telephone-keypad__box": "wjMTHeW_telephone-keypad__box", "telephone-keypad__info-message": "wjMTHeW_telephone-keypad__info-message", "telephone-keypad__info-message-link": "wjMTHeW_telephone-keypad__info-message-link" };
  var TelephoneKeypad_module_default = classes11;
  var _telephone_keypad0 = classes11["telephone-keypad"];
  var _telephone_keypad__box0 = classes11["telephone-keypad__box"];
  var _telephone_keypad__info_message0 = classes11["telephone-keypad__info-message"];
  var _telephone_keypad__info_message_link0 = classes11["telephone-keypad__info-message-link"];

  // src/components/telephoneKeypad/private/TelephoneKeypad.tsx
  var { LocalizedString } = import_botframework_webchat_component8.Components;
  var Orientation = (0, import_react26.memo)(
    ({ children, isHorizontal }) => {
      const classNames = useStyles_default(TelephoneKeypad_module_default);
      return isHorizontal ? null : (
        // <HorizontalDialPadController>{children}</HorizontalDialPadController>
        /* @__PURE__ */ import_react26.default.createElement("div", { className: classNames["telephone-keypad__box"] }, children)
      );
    }
  );
  Orientation.displayName = "TelephoneKeypad:Orientation";
  var TelephoneKeypad = (0, import_react26.memo)(({ autoFocus, className, onButtonClick, isHorizontal }) => {
    const autoFocusRef = useRefFrom(autoFocus);
    const classNames = useStyles_default(TelephoneKeypad_module_default);
    const firstButtonRef = (0, import_react26.useRef)(null);
    const onButtonClickRef = useRefFrom(onButtonClick);
    const [, setShown] = useShown();
    const handleButton1Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("1"), [onButtonClickRef]);
    const handleButton2Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("2"), [onButtonClickRef]);
    const handleButton3Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("3"), [onButtonClickRef]);
    const handleButton4Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("4"), [onButtonClickRef]);
    const handleButton5Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("5"), [onButtonClickRef]);
    const handleButton6Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("6"), [onButtonClickRef]);
    const handleButton7Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("7"), [onButtonClickRef]);
    const handleButton8Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("8"), [onButtonClickRef]);
    const handleButton9Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("9"), [onButtonClickRef]);
    const handleButton0Click = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("0"), [onButtonClickRef]);
    const handleButtonStarClick = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("*"), [onButtonClickRef]);
    const handleButtonPoundClick = (0, import_react26.useCallback)(() => onButtonClickRef.current?.("#"), [onButtonClickRef]);
    const handleKeyDown = (0, import_react26.useCallback)(
      (event) => {
        if (event.key === "Escape") {
          setShown(false);
        }
      },
      [setShown]
    );
    (0, import_react26.useEffect)(() => {
      autoFocusRef.current && firstButtonRef.current?.focus();
    }, [autoFocusRef, firstButtonRef]);
    return /* @__PURE__ */ import_react26.default.createElement("div", { className: (0, import_classnames9.default)(classNames["telephone-keypad"], className), onKeyDown: handleKeyDown }, /* @__PURE__ */ import_react26.default.createElement(Orientation, { isHorizontal }, /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "1",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton1,
        onClick: handleButton1Click,
        ref: firstButtonRef
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "2",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton2,
        onClick: handleButton2Click,
        ruby: "ABC"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "3",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton3,
        onClick: handleButton3Click,
        ruby: "DEF"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "4",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton4,
        onClick: handleButton4Click,
        ruby: "GHI"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "5",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton5,
        onClick: handleButton5Click,
        ruby: "JKL"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "6",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton6,
        onClick: handleButton6Click,
        ruby: "MNO"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "7",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton7,
        onClick: handleButton7Click,
        ruby: "PQRS"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "8",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton8,
        onClick: handleButton8Click,
        ruby: "TUV"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(
      Button_default,
      {
        button: "9",
        "data-testid": testIds_default.sendBoxTelephoneKeypadButton9,
        onClick: handleButton9Click,
        ruby: "WXYZ"
      }
    ), /* @__PURE__ */ import_react26.default.createElement(Button_default, { button: "*", "data-testid": testIds_default.sendBoxTelephoneKeypadButtonStar, onClick: handleButtonStarClick }), /* @__PURE__ */ import_react26.default.createElement(Button_default, { button: "0", "data-testid": testIds_default.sendBoxTelephoneKeypadButton0, onClick: handleButton0Click, ruby: "+" }), /* @__PURE__ */ import_react26.default.createElement(Button_default, { button: "#", "data-testid": testIds_default.sendBoxTelephoneKeypadButtonPound, onClick: handleButtonPoundClick })), /* @__PURE__ */ import_react26.default.createElement("div", { className: classNames["telephone-keypad__info-message"] }, /* @__PURE__ */ import_react26.default.createElement(FluentIcon_default, { appearance: "text", icon: "info-16" }), /* @__PURE__ */ import_react26.default.createElement(
      LocalizedString,
      {
        linkClassName: classNames["telephone-keypad__info-message-link"],
        stringIds: "TELEPHONE_KEYPAD_INPUT_MESSAGE"
      }
    )));
  });
  TelephoneKeypad.displayName = "TelephoneKeypad";
  var TelephoneKeypad_default = TelephoneKeypad;

  // src/components/telephoneKeypad/Surrogate.tsx
  var TelephoneKeypadSurrogate = (0, import_react27.memo)((props) => useShown()[0] ? /* @__PURE__ */ import_react27.default.createElement(TelephoneKeypad_default, { ...props }) : null);
  TelephoneKeypadSurrogate.displayName = "TelephoneKeypad.Surrogate";
  var Surrogate_default = TelephoneKeypadSurrogate;

  // src/components/sendBox/AddAttachmentButton.tsx
  var import_botframework_webchat_component9 = __toESM(require_botframework_webchat_component());
  var import_react29 = __toESM(require_react());

  // src/components/sendBox/Toolbar.tsx
  var import_botframework_webchat_api2 = __toESM(require_botframework_webchat_api());
  var import_classnames10 = __toESM(require_classnames());
  var import_react28 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\sendBox\Toolbar.module.css?css_module
  var classes12 = { "sendbox__toolbar": "wGTvbUW_sendbox__toolbar", "sendbox__toolbar-button--selected": "wGTvbUW_sendbox__toolbar-button--selected", "sendbox__toolbar-separator": "wGTvbUW_sendbox__toolbar-separator", "sendbox__toolbar-button": "wGTvbUW_sendbox__toolbar-button" };
  var Toolbar_module_default = classes12;
  var _sendbox__toolbar0 = classes12["sendbox__toolbar"];
  var _sendbox__toolbar_button__selected0 = classes12["sendbox__toolbar-button--selected"];
  var _sendbox__toolbar_separator0 = classes12["sendbox__toolbar-separator"];
  var _sendbox__toolbar_button0 = classes12["sendbox__toolbar-button"];

  // src/components/sendBox/Toolbar.tsx
  var { useUIState: useUIState6 } = import_botframework_webchat_api2.hooks;
  var preventDefaultHandler2 = (event) => event.preventDefault();
  var ToolbarButton = (0, import_react28.memo)(
    (props) => {
      const classNames = useStyles_default(Toolbar_module_default);
      const [uiState] = useUIState6();
      const disabled = props.disabled || uiState === "disabled";
      return /* @__PURE__ */ import_react28.default.createElement(
        "button",
        {
          "aria-disabled": disabled ? "true" : void 0,
          "aria-label": props["aria-label"],
          className: (0, import_classnames10.default)(classNames["sendbox__toolbar-button"], props.className, {
            [classNames["sendbox__toolbar-button--selected"]]: props.selected
          }),
          "data-testid": props["data-testid"],
          onClick: disabled ? preventDefaultHandler2 : props.onClick,
          tabIndex: disabled ? -1 : void 0,
          type: props.type === "submit" ? "submit" : "button"
        },
        props.children
      );
    }
  );
  ToolbarButton.displayName = "ToolbarButton";
  var Toolbar = (0, import_react28.memo)((props) => {
    const [uiState] = useUIState6();
    const classNames = useStyles_default(Toolbar_module_default);
    return /* @__PURE__ */ import_react28.default.createElement("div", { className: (0, import_classnames10.default)(classNames["sendbox__toolbar"], props.className) }, uiState !== "blueprint" && props.children);
  });
  Toolbar.displayName = "Toolbar";
  var ToolbarSeparator = (0, import_react28.memo)(
    (props) => {
      const classNames = useStyles_default(Toolbar_module_default);
      return /* @__PURE__ */ import_react28.default.createElement(
        "div",
        {
          "aria-orientation": "vertical",
          className: (0, import_classnames10.default)(classNames["sendbox__toolbar-separator"], props.className),
          role: "separator"
        }
      );
    }
  );
  ToolbarSeparator.displayName = "ToolbarSeparator";

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\sendBox\AddAttachmentButton.module.css?css_module
  var classes13 = { "sendbox__add-attachment-input": "wQ6IG8W_sendbox__add-attachment-input", "sendbox__add-attachment": "wQ6IG8W_sendbox__add-attachment" };
  var AddAttachmentButton_module_default = classes13;
  var _sendbox__add_attachment_input0 = classes13["sendbox__add-attachment-input"];
  var _sendbox__add_attachment0 = classes13["sendbox__add-attachment"];

  // src/components/sendBox/AddAttachmentButton.tsx
  var { useLocalizer: useLocalizer5, useStyleOptions: useStyleOptions3 } = import_botframework_webchat_component9.hooks;
  function AddAttachmentButton(props) {
    const inputRef = (0, import_react29.useRef)(null);
    const classNames = useStyles_default(AddAttachmentButton_module_default);
    const localize = useLocalizer5();
    const [{ uploadAccept, uploadMultiple }] = useStyleOptions3();
    const onFilesAddedRef = useRefFrom(props.onFilesAdded);
    const handleClick = (0, import_react29.useCallback)(() => inputRef.current?.click(), [inputRef]);
    const handleFileChange = (0, import_react29.useCallback)(
      ({ target: { files } }) => {
        if (files) {
          onFilesAddedRef.current?.([...files]);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      },
      [inputRef, onFilesAddedRef]
    );
    return /* @__PURE__ */ import_react29.default.createElement("div", { className: classNames["sendbox__add-attachment"] }, /* @__PURE__ */ import_react29.default.createElement(
      "input",
      {
        accept: uploadAccept,
        "aria-disabled": props.disabled,
        "aria-hidden": "true",
        className: classNames["sendbox__add-attachment-input"],
        multiple: uploadMultiple,
        onInput: props.disabled ? void 0 : handleFileChange,
        readOnly: props.disabled,
        ref: inputRef,
        role: "button",
        tabIndex: -1,
        type: "file"
      }
    ), /* @__PURE__ */ import_react29.default.createElement(
      ToolbarButton,
      {
        "aria-label": localize("TEXT_INPUT_UPLOAD_BUTTON_ALT"),
        "data-testid": testIds_default.sendBoxUploadButton,
        onClick: handleClick
      },
      /* @__PURE__ */ import_react29.default.createElement(FluentIcon_default, { appearance: "text", icon: "attachment" })
    ));
  }
  var AddAttachmentButton_default = (0, import_react29.memo)(AddAttachmentButton);

  // src/components/sendBox/ErrorMessage.tsx
  var import_internal2 = __toESM(require_internal());
  var import_react30 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\sendBox\ErrorMessage.module.css?css_module
  var classes14 = { "sendbox__error-message": "wMD6w7G_sendbox__error-message" };
  var ErrorMessage_module_default = classes14;
  var _sendbox__error_message0 = classes14["sendbox__error-message"];

  // src/components/sendBox/ErrorMessage.tsx
  function ErrorMessage({ error, id }) {
    const classNames = useStyles_default(ErrorMessage_module_default);
    (0, import_internal2.useLiveRegion)(() => error && /* @__PURE__ */ import_react30.default.createElement("div", { className: "sendbox__error-message__status" }, error), [error]);
    return (
      // eslint-disable-next-line react/forbid-dom-props
      /* @__PURE__ */ import_react30.default.createElement("span", { className: classNames["sendbox__error-message"], id }, error)
    );
  }
  ErrorMessage.displayName = "ErrorMessage";
  var ErrorMessage_default = (0, import_react30.memo)(ErrorMessage);

  // src/components/sendBox/private/useSubmitError.ts
  var import_botframework_webchat_component10 = __toESM(require_botframework_webchat_component());
  var import_react31 = __toESM(require_react());
  var { useConnectivityStatus, useLocalizer: useLocalizer6 } = import_botframework_webchat_component10.hooks;
  var useSubmitError = ({
    attachments,
    message
  }) => {
    const [connectivityStatus] = useConnectivityStatus();
    const [error, setError] = (0, import_react31.useState)();
    const localize = useLocalizer6();
    const submitErrorRef = useRefFrom(
      connectivityStatus !== "connected" && connectivityStatus !== "reconnected" ? "offline" : !message && !attachments.length ? "empty" : void 0
    );
    const errorMessageStringMap = (0, import_react31.useMemo)(
      () => Object.freeze(
        (/* @__PURE__ */ new Map()).set("empty", localize("SEND_BOX_IS_EMPTY_TOOLTIP_ALT")).set("offline", localize("CONNECTIVITY_STATUS_ALT_FATAL"))
      ),
      [localize]
    );
    const hasValue = !!message?.trim();
    if (error === "empty" && hasValue) {
      setError(void 0);
    }
    const commitLatestError = (0, import_react31.useCallback)(() => {
      setError(submitErrorRef.current);
      return submitErrorRef.current;
    }, [submitErrorRef]);
    return (0, import_react31.useMemo)(
      () => Object.freeze([error && errorMessageStringMap.get(error), commitLatestError]),
      [error, errorMessageStringMap, commitLatestError]
    );
  };
  var useSubmitError_default = useSubmitError;

  // src/components/sendBox/private/useTranscriptNavigation.ts
  var import_react32 = __toESM(require_react());
  var import_botframework_webchat_component11 = __toESM(require_botframework_webchat_component());
  var { useScrollDown, useScrollUp } = import_botframework_webchat_component11.hooks;
  function useTranscriptNavigation() {
    const scrollDown = useScrollDown();
    const scrollUp = useScrollUp();
    return (0, import_react32.useCallback)(
      (event) => {
        if (event.target instanceof HTMLTextAreaElement && event.target.value) {
          return;
        }
        const { ctrlKey, metaKey, shiftKey } = event;
        if (ctrlKey || metaKey || shiftKey) {
          return;
        }
        let handled = true;
        switch (event.key) {
          case "End":
            scrollDown({ displacement: Infinity });
            break;
          case "Home":
            scrollUp({ displacement: Infinity });
            break;
          case "PageDown":
            scrollDown();
            break;
          case "PageUp":
            scrollUp();
            break;
          default:
            handled = false;
            break;
        }
        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      [scrollDown, scrollUp]
    );
  }

  // src/components/sendBox/private/useUniqueId.ts
  var import_react33 = __toESM(require_react());
  function useUniqueId(prefix) {
    const id = (0, import_react33.useMemo)(() => Math.random().toString(36).substr(2, 5), []);
    prefix = prefix ? `${prefix}--` : "";
    return `${prefix}${id}`;
  }

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\sendBox\SendBox.module.css?css_module
  var classes15 = { "sendbox__telephone-keypad--in-grid": "w3KprPW_sendbox__telephone-keypad--in-grid", "sendbox__sendbox-text-area": "w3KprPW_sendbox__sendbox-text-area", "sendbox": "w3KprPW_sendbox", "sendbox__sendbox-controls": "w3KprPW_sendbox__sendbox-controls", "sendbox__text-counter": "w3KprPW_sendbox__text-counter", "sendbox__attachment-bar": "w3KprPW_sendbox__attachment-bar", "variant-copilot": "w3KprPW_variant-copilot", "sendbox__text-counter--error": "w3KprPW_sendbox__text-counter--error", "sendbox__sendbox": "w3KprPW_sendbox__sendbox", "sendbox__sendbox-controls--in-grid": "w3KprPW_sendbox__sendbox-controls--in-grid", "sendbox__text-area--in-grid": "w3KprPW_sendbox__text-area--in-grid", "sendbox__attachment-bar--in-grid": "w3KprPW_sendbox__attachment-bar--in-grid" };
  var SendBox_module_default = classes15;
  var _sendbox__telephone_keypad__in_grid0 = classes15["sendbox__telephone-keypad--in-grid"];
  var _sendbox__sendbox_text_area0 = classes15["sendbox__sendbox-text-area"];
  var _sendbox0 = classes15["sendbox"];
  var _sendbox__sendbox_controls0 = classes15["sendbox__sendbox-controls"];
  var _sendbox__text_counter0 = classes15["sendbox__text-counter"];
  var _sendbox__attachment_bar0 = classes15["sendbox__attachment-bar"];
  var _variant_copilot02 = classes15["variant-copilot"];
  var _sendbox__text_counter__error0 = classes15["sendbox__text-counter--error"];
  var _sendbox__sendbox0 = classes15["sendbox__sendbox"];
  var _sendbox__sendbox_controls__in_grid0 = classes15["sendbox__sendbox-controls--in-grid"];
  var _sendbox__text_area__in_grid0 = classes15["sendbox__text-area--in-grid"];
  var _sendbox__attachment_bar__in_grid0 = classes15["sendbox__attachment-bar--in-grid"];

  // src/components/sendBox/TelephoneKeypadToolbarButton.tsx
  var import_react34 = __toESM(require_react());
  var import_botframework_webchat_component12 = __toESM(require_botframework_webchat_component());
  var { useLocalizer: useLocalizer7 } = import_botframework_webchat_component12.hooks;
  var TelephoneKeypadToolbarButton = (0, import_react34.memo)(() => {
    const [telephoneKeypadShown, setTelephoneKeypadShown] = useShown();
    const localize = useLocalizer7();
    const handleClick = (0, import_react34.useCallback)(() => setTelephoneKeypadShown((shown) => !shown), [setTelephoneKeypadShown]);
    return /* @__PURE__ */ import_react34.default.createElement(
      ToolbarButton,
      {
        "aria-label": localize("TEXT_INPUT_TELEPHONE_KEYPAD_BUTTON_ALT"),
        "data-testid": testIds_default.sendBoxTelephoneKeypadToolbarButton,
        onClick: handleClick,
        selected: telephoneKeypadShown
      },
      /* @__PURE__ */ import_react34.default.createElement(FluentIcon_default, { appearance: "text", icon: "keypad" })
    );
  });
  TelephoneKeypadToolbarButton.displayName = "SendBox.TelephoneKeypadToolbarButton";
  var TelephoneKeypadToolbarButton_default = TelephoneKeypadToolbarButton;

  // src/components/sendBox/MicrophoneToolbarButton.tsx
  var import_botframework_webchat_api3 = __toESM(require_botframework_webchat_api());
  var import_react35 = __toESM(require_react());
  var { useSpeechToSpeech, useLocalizer: useLocalizer8 } = import_botframework_webchat_api3.hooks;
  function MicrophoneToolbarButton() {
    const localize = useLocalizer8();
    const [{ recording, toggleRecording, speechState }] = useSpeechToSpeech();
    const handleClick = (0, import_react35.useCallback)(() => {
      toggleRecording();
    }, [toggleRecording]);
    const ariaLabel = recording ? localize("SPEECH_INPUT_MICROPHONE_BUTTON_CLOSE_ALT") || "Stop recording" : localize("SPEECH_INPUT_MICROPHONE_BUTTON_OPEN_ALT") || "Start recording";
    return /* @__PURE__ */ import_react35.default.createElement(ToolbarButton, { "aria-label": ariaLabel, onClick: handleClick, selected: recording, type: "button" }, /* @__PURE__ */ import_react35.default.createElement(FluentIcon_default, { appearance: "text", icon: speechState === "bot_speaking" ? "audio" : "microphone" }));
  }
  MicrophoneToolbarButton.displayName = "SendBox.MicrophoneToolbarButton";
  var MicrophoneToolbarButton_default = (0, import_react35.memo)(MicrophoneToolbarButton);

  // src/components/sendBox/SendBox.tsx
  var {
    useFocus: useFocus4,
    useLocalizer: useLocalizer9,
    useMakeThumbnail,
    useRegisterFocusSendBox,
    useSendBoxAttachments,
    useSendBoxValue: useSendBoxValue2,
    useSendMessage,
    useStyleOptions: useStyleOptions4,
    useUIState: useUIState7,
    useSpeechToSpeech: useSpeechToSpeech2
  } = import_botframework_webchat_component13.hooks;
  var { AttachmentBar, TextArea } = import_botframework_webchat_component13.Components;
  function SendBox(props) {
    const [{ disableFileUpload, hideTelephoneKeypadButton, maxMessageLength, showMicrophoneButton }] = useStyleOptions4();
    const [attachments, setAttachments] = useSendBoxAttachments();
    const [globalMessage, setGlobalMessage] = useSendBoxValue2();
    const [localMessage, setLocalMessage] = (0, import_react36.useState)("");
    const [telephoneKeypadShown] = useShown();
    const [uiState] = useUIState7();
    const classNames = useStyles_default(SendBox_module_default);
    const variantClassName = useVariantClassName(SendBox_module_default);
    const errorMessageId = useUniqueId("sendbox__error-message-id");
    const inputRef = (0, import_react36.useRef)(null);
    const localize = useLocalizer9();
    const makeThumbnail = useMakeThumbnail();
    const sendMessage = useSendMessage();
    const setFocus = useFocus4();
    const [{ speechState }] = useSpeechToSpeech2();
    const getSpeechPlaceholder = (0, import_react36.useCallback)(() => {
      switch (speechState) {
        case "idle":
          return "Start talking...";
        case "listening":
          return "Listening...";
        case "processing":
          return "Thinking...";
        case "bot_speaking":
          return "Talk to interrupt...";
        default:
          return props.placeholder ?? localize("TEXT_INPUT_PLACEHOLDER");
      }
    }, [props.placeholder, localize, speechState]);
    const message = props.isPrimary ? globalMessage : localMessage;
    const setMessage = props.isPrimary ? setGlobalMessage : setLocalMessage;
    const isBlueprint = uiState === "blueprint";
    const [errorMessage, commitLatestError] = useSubmitError_default({ message, attachments });
    const isMessageLengthExceeded = !!maxMessageLength && message.length > maxMessageLength;
    const shouldShowMessageLength = !isBlueprint && !telephoneKeypadShown && maxMessageLength && isFinite(maxMessageLength);
    const shouldShowTelephoneKeypad = !isBlueprint && telephoneKeypadShown;
    useRegisterFocusSendBox(
      (0, import_react36.useCallback)(
        ({ noKeyboard, waitUntil }) => {
          if (!inputRef.current) {
            return;
          }
          if (noKeyboard) {
            waitUntil(
              (async () => {
                const previousReadOnly = inputRef.current?.getAttribute("readonly");
                inputRef.current?.setAttribute("readonly", "true");
                await new Promise((resolve) => setTimeout(resolve, 0));
                inputRef.current?.focus();
                if (typeof previousReadOnly !== "string") {
                  inputRef.current?.removeAttribute("readonly");
                } else {
                  inputRef.current?.setAttribute("readonly", previousReadOnly);
                }
              })()
            );
          } else {
            inputRef.current?.focus();
          }
        },
        [inputRef]
      )
    );
    const attachmentsRef = useRefFrom(attachments);
    const messageRef = useRefFrom(message);
    const handleSendBoxClick = (0, import_react36.useCallback)(
      (event) => {
        if ("tabIndex" in event.target && typeof event.target.tabIndex === "number" && event.target.tabIndex >= 0) {
          return;
        }
        setFocus("sendBox");
      },
      [setFocus]
    );
    const handleMessageChange = (0, import_react36.useCallback)(
      (event) => setMessage(event.currentTarget.value),
      [setMessage]
    );
    const handleAddFiles = (0, import_react36.useCallback)(
      async (inputFiles) => {
        const newAttachments = Object.freeze(
          await Promise.all(
            inputFiles.map(
              (file) => makeThumbnail(file).then(
                (thumbnailURL) => Object.freeze({
                  blob: file,
                  ...thumbnailURL && { thumbnailURL }
                })
              )
            )
          )
        );
        setAttachments(attachmentsRef.current.concat(newAttachments));
      },
      [attachmentsRef, makeThumbnail, setAttachments]
    );
    const handleFormSubmit = (0, import_react36.useCallback)(
      (event) => {
        event.preventDefault();
        const error = commitLatestError();
        if (error !== "empty" && !isMessageLengthExceeded) {
          sendMessage(messageRef.current, void 0, { attachments: attachmentsRef.current });
          setMessage("");
          setAttachments([]);
        }
        setFocus("sendBox");
      },
      [
        commitLatestError,
        isMessageLengthExceeded,
        setFocus,
        sendMessage,
        setMessage,
        messageRef,
        attachmentsRef,
        setAttachments
      ]
    );
    const handleTelephoneKeypadButtonClick = (0, import_react36.useCallback)(
      // TODO: We need more official way of sending DTMF.
      (dtmf) => sendMessage(`/DTMFKey ${dtmf}`),
      [sendMessage]
    );
    const handleTranscriptNavigation = useTranscriptNavigation();
    const aria = {
      "aria-invalid": "false",
      ...errorMessage && {
        "aria-describedby": errorMessageId,
        "aria-errormessage": errorMessageId,
        "aria-invalid": "true"
      }
    };
    return /* @__PURE__ */ import_react36.default.createElement(
      "form",
      {
        ...aria,
        className: (0, import_classnames11.default)(classNames["sendbox"], variantClassName, props.className),
        "data-testid": testIds_default.sendBoxContainer,
        onSubmit: handleFormSubmit
      },
      /* @__PURE__ */ import_react36.default.createElement(SuggestedActions_default, null),
      /* @__PURE__ */ import_react36.default.createElement(
        "div",
        {
          className: (0, import_classnames11.default)(classNames["sendbox__sendbox"]),
          onClickCapture: handleSendBoxClick,
          onKeyDown: handleTranscriptNavigation
        },
        /* @__PURE__ */ import_react36.default.createElement(
          TextArea,
          {
            "aria-label": isMessageLengthExceeded ? localize("TEXT_INPUT_LENGTH_EXCEEDED_ALT") : localize("TEXT_INPUT_ALT"),
            className: (0, import_classnames11.default)(classNames["sendbox__sendbox-text-area"], classNames["sendbox__text-area--in-grid"]),
            completion: props.completion,
            "data-testid": testIds_default.sendBoxTextBox,
            hidden: shouldShowTelephoneKeypad,
            onInput: handleMessageChange,
            placeholder: showMicrophoneButton ? getSpeechPlaceholder() : props.placeholder ?? localize("TEXT_INPUT_PLACEHOLDER"),
            ref: inputRef,
            value: message
          }
        ),
        /* @__PURE__ */ import_react36.default.createElement(
          Surrogate_default,
          {
            autoFocus: true,
            className: classNames["sendbox__telephone-keypad--in-grid"],
            isHorizontal: false,
            onButtonClick: handleTelephoneKeypadButtonClick
          }
        ),
        !isBlueprint && /* @__PURE__ */ import_react36.default.createElement(
          AttachmentBar,
          {
            className: (0, import_classnames11.default)(
              "webchat__send-box__attachment-bar",
              classNames["sendbox__attachment-bar"],
              classNames["sendbox__attachment-bar--in-grid"]
            )
          }
        ),
        /* @__PURE__ */ import_react36.default.createElement("div", { className: (0, import_classnames11.default)(classNames["sendbox__sendbox-controls"], classNames["sendbox__sendbox-controls--in-grid"]) }, shouldShowMessageLength && /* @__PURE__ */ import_react36.default.createElement(
          "div",
          {
            className: (0, import_classnames11.default)(classNames["sendbox__text-counter"], {
              [classNames["sendbox__text-counter--error"]]: isMessageLengthExceeded
            })
          },
          `${message.length}/${maxMessageLength}`
        ), /* @__PURE__ */ import_react36.default.createElement(Toolbar, null, !hideTelephoneKeypadButton && /* @__PURE__ */ import_react36.default.createElement(TelephoneKeypadToolbarButton_default, null), !disableFileUpload && /* @__PURE__ */ import_react36.default.createElement(AddAttachmentButton_default, { onFilesAdded: handleAddFiles }), /* @__PURE__ */ import_react36.default.createElement(ToolbarSeparator, null), showMicrophoneButton && /* @__PURE__ */ import_react36.default.createElement(MicrophoneToolbarButton_default, null), !showMicrophoneButton && /* @__PURE__ */ import_react36.default.createElement(
          ToolbarButton,
          {
            "aria-label": localize("TEXT_INPUT_SEND_BUTTON_ALT"),
            "data-testid": testIds_default.sendBoxSendButton,
            disabled: isMessageLengthExceeded || shouldShowTelephoneKeypad,
            type: "submit"
          },
          /* @__PURE__ */ import_react36.default.createElement(FluentIcon_default, { appearance: "text", icon: "send" })
        ))),
        !disableFileUpload && /* @__PURE__ */ import_react36.default.createElement(DropZone_default, { onFilesAdded: handleAddFiles }),
        /* @__PURE__ */ import_react36.default.createElement(ErrorMessage_default, { error: errorMessage, id: errorMessageId })
      )
    );
  }
  var PrimarySendBox = (0, import_react36.memo)((props) => /* @__PURE__ */ import_react36.default.createElement(SendBox, { ...props, isPrimary: true }));
  PrimarySendBox.displayName = "PrimarySendBox";
  var SendBox_default = (0, import_react36.memo)(SendBox);

  // ../../node_modules/inject-meta-tag/lib/esmodules/injectMetaTag.js
  function injectMeta(name, content) {
    try {
      if (typeof document === "undefined") {
        return;
      }
      var metaElement = document.createElement("meta");
      metaElement.setAttribute("name", name);
      content && metaElement.setAttribute("content", content);
      document.head.appendChild(metaElement);
    } catch (error) {
      console.error('inject-meta-tag: Failed to inject <meta name="'.concat(name, '"> tag.'), error);
    }
  }

  // src/private/FluentThemeProvider.tsx
  var import_decorator = __toESM(require_decorator());
  var import_decorator2 = __toESM(require_decorator2());
  var import_botframework_webchat_component16 = __toESM(require_botframework_webchat_component());
  var import_react47 = __toESM(require_react());

  // src/components/activity/ActivityLoader.tsx
  var import_classnames12 = __toESM(require_classnames());
  var import_react41 = __toESM(require_react());

  // src/components/assets/SlidingDots.tsx
  var import_botframework_webchat_component14 = __toESM(require_botframework_webchat_component());
  var import_react39 = __toESM(require_react());

  // src/components/assets/private/useContext.ts
  var import_react38 = __toESM(require_react());

  // src/components/assets/private/Context.ts
  var import_react37 = __toESM(require_react());
  var defaultContextValue = {
    urlStateMap: {
      get() {
        throw new Error("urlMap cannot be used outside of <AssetComposerContext>.");
      }
    }
  };
  var Context2 = (0, import_react37.createContext)(Object.create({}, defaultContextValue));
  Context2.displayName = "AssetComposerContext";
  var Context_default2 = Context2;

  // src/components/assets/private/useContext.ts
  function useContext4() {
    return (0, import_react38.useContext)(Context_default2);
  }

  // src/components/assets/private/useAssetURL.ts
  function useAssetURL(assetName) {
    const urlState = useContext4().urlStateMap.get(assetName);
    if (!urlState) {
      throw new Error(`botframework-webchat-fluent-theme internal: Asset "${assetName}" was not found.`);
    }
    return urlState;
  }

  // src/components/assets/SlidingDots.tsx
  var { useLocalizer: useLocalizer10, useShouldReduceMotion } = import_botframework_webchat_component14.hooks;
  var SlidingDots = ({ className }) => {
    const [shouldReduceMotion] = useShouldReduceMotion();
    const [url] = useAssetURL("sliding dots");
    const localize = useLocalizer10();
    const objectElementRef = (0, import_react39.useRef)(null);
    const altText = localize("TYPING_INDICATOR_ALT");
    const shouldReduceMotionRef = useRefFrom(shouldReduceMotion);
    const pauseAnimations = (0, import_react39.useCallback)(() => {
      const contentDocument = objectElementRef.current?.contentDocument;
      const svgElement = contentDocument?.documentElement;
      const { SVGSVGElement } = contentDocument?.defaultView || {};
      SVGSVGElement && svgElement instanceof SVGSVGElement && svgElement.pauseAnimations();
    }, [objectElementRef]);
    const unpauseAnimations = (0, import_react39.useCallback)(() => {
      const contentDocument = objectElementRef.current?.contentDocument;
      const svgElement = contentDocument?.documentElement;
      const { SVGSVGElement } = contentDocument?.defaultView || {};
      SVGSVGElement && svgElement instanceof SVGSVGElement && svgElement.unpauseAnimations();
    }, [objectElementRef]);
    const pauseOrUnpauseAnimations = (0, import_react39.useCallback)(
      () => shouldReduceMotionRef.current ? pauseAnimations() : unpauseAnimations(),
      [pauseAnimations, shouldReduceMotionRef, unpauseAnimations]
    );
    (0, import_react39.useEffect)(pauseOrUnpauseAnimations, [
      pauseOrUnpauseAnimations,
      // Call "pauseOrUnpauseAnimations()" when "shouldReduceMotion" change.
      shouldReduceMotion
    ]);
    return /* @__PURE__ */ import_react39.default.createElement(
      "object",
      {
        "aria-label": altText,
        className,
        data: url.href,
        onLoad: pauseOrUnpauseAnimations,
        ref: objectElementRef,
        type: "image/svg+xml"
      }
    );
  };
  SlidingDots.displayName = "SlidingDots";
  var SlidingDots_default = (0, import_react39.memo)(SlidingDots);

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\activity\ActivityLoader.module.css?css_module
  var classes16 = { "variant-fluent": "wbnCP9q_variant-fluent", "variant-copilot": "wbnCP9q_variant-copilot", "activity-loader": "wbnCP9q_activity-loader" };
  var ActivityLoader_module_default = classes16;
  var _variant_fluent02 = classes16["variant-fluent"];
  var _variant_copilot03 = classes16["variant-copilot"];
  var _activity_loader0 = classes16["activity-loader"];

  // src/components/activity/ActivityLoader.tsx
  function FluentActivityLoader({
    children,
    showLoader = true
  }) {
    const classNames = useStyles_default(ActivityLoader_module_default);
    const variantClassName = useVariantClassName(classNames);
    return /* @__PURE__ */ import_react41.default.createElement(import_react41.Fragment, null, children, showLoader && /* @__PURE__ */ import_react41.default.createElement(SlidingDots_default, { className: (0, import_classnames12.default)(classNames["activity-loader"], variantClassName) }));
  }
  var ActivityLoader_default = (0, import_react41.memo)(FluentActivityLoader);

  // src/components/assets/AssetComposer.tsx
  var import_react42 = __toESM(require_react());
  var SLIDING_DOTS_SVG_STRING = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="20" viewBox="0 0 400 20"><defs><linearGradient id="a" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%"><animate attributeName="stop-color" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="#ad5ae1;#ad5ae1;#0E94E1;#0E94E1;#669fc2;#669fc2;#ad5ae1"/></stop><stop offset="50%"><animate attributeName="stop-color" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="#e9618d;#e9618d;#57AB82;#57AB82;#6377e0;#6377e0;#e9618d"/></stop><stop offset="100%"><animate attributeName="stop-color" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="#fd9e5f;#fd9e5f;#C6C225;#C6C225;#9b80ec;#9b80ec;#fd9e5f"/></stop></linearGradient></defs><g fill="url(#a)"><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.5;0.66;1" repeatCount="indefinite" values="26;26;0;0"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;1" repeatCount="indefinite" values="20;20;30;30;20;20"/><animate attributeName="opacity" dur="2s" keyTimes="0;0.5;0.66;1" repeatCount="indefinite" values="1;1;0;0"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="62;62;72;72;26;26;0"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="104;104;20;20;70;70;20"/><animate attributeName="opacity" dur="2s" keyTimes="0;0.8;1" repeatCount="indefinite" values="1;1;0"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="182;182;108;108;112;112;26"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;1" repeatCount="indefinite" values="20;20;60;60;20;20"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="218;218;184;184;148;148;62"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="60;60;80;80;40;40;104"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="294;294;280;280;204;204;182"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="40;40;20;20;80;80;20"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="350;350;316;316;300;300;218"/><animate attributeName="width" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="20;20;60;60;20;20;60"/></rect><rect height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="386;386;392;392;336;336;294"/><animate attributeName="width" dur="2s" keyTimes="0;0.5;0.66;1" repeatCount="indefinite" values="20;20;40;40"/><animate attributeName="opacity" dur="2s" keyTimes="0;0.5;0.66;1" repeatCount="indefinite" values="0;0;1;1"/></rect><rect width="20" height="20" rx="10"><animate attributeName="x" dur="2s" keyTimes="0;0.2;0.33;0.5;0.66;0.8;1" repeatCount="indefinite" values="422;422;428;428;392;392;350"/><animate attributeName="opacity" dur="2s" keyTimes="0;0.8;1" repeatCount="indefinite" values="0;0;1"/></rect></g></svg>';
  var AssetComposer = (0, import_react42.memo)(({ children }) => {
    const slidingDotsURL = (0, import_react42.useMemo)(
      // Content is hardcoded.
      // eslint-disable-next-line no-restricted-properties
      () => URL.createObjectURL(new Blob([SLIDING_DOTS_SVG_STRING], { type: "image/svg+xml" })),
      []
    );
    (0, import_react42.useEffect)(() => () => URL.revokeObjectURL(slidingDotsURL), [slidingDotsURL]);
    const context = (0, import_react42.useMemo)(
      () => Object.freeze({
        urlStateMap: /* @__PURE__ */ new Map([["sliding dots", Object.freeze([new URL(slidingDotsURL)])]])
      }),
      [slidingDotsURL]
    );
    return /* @__PURE__ */ import_react42.default.createElement(Context_default2.Provider, { value: context }, children);
  });
  AssetComposer.displayName = "AssetComposer";
  var AssetComposer_default = AssetComposer;

  // src/components/linerActivity/private/isLinerMessageActivity.ts
  function isLinerMessageActivity(activity) {
    return !!(activity && activity.from.role === "channel" && activity.type === "message" && "text" in activity);
  }

  // src/components/linerActivity/private/LinerActivity.tsx
  var import_react43 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\linerActivity\private\LinerMessageActivity.module.css?css_module
  var classes17 = { "liner-message-activity__text": "wSy9HDa_liner-message-activity__text", "liner-message-activity": "wSy9HDa_liner-message-activity" };
  var LinerMessageActivity_module_default = classes17;
  var _liner_message_activity__text0 = classes17["liner-message-activity__text"];
  var _liner_message_activity0 = classes17["liner-message-activity"];

  // src/components/linerActivity/private/LinerActivity.tsx
  var LinerMessageActivity = ({ activity }) => {
    const classNames = useStyles_default(LinerMessageActivity_module_default);
    return /* @__PURE__ */ import_react43.default.createElement("div", { className: classNames["liner-message-activity"], role: "separator" }, /* @__PURE__ */ import_react43.default.createElement("span", { className: classNames["liner-message-activity__text"] }, activity.text));
  };
  LinerMessageActivity.displayName = "LinerMessageActivity";
  var LinerActivity_default = (0, import_react43.memo)(LinerMessageActivity);

  // src/components/theme/Theme.tsx
  var import_react44 = __toESM(require_react());
  var import_classnames13 = __toESM(require_classnames());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\theme\Theme.module.css?css_module
  var classes18 = { "variant-copilot": "w7FjtUW_variant-copilot", "theme": "w7FjtUW_theme" };
  var Theme_module_default = classes18;
  var _variant_copilot04 = classes18["variant-copilot"];
  var _theme0 = classes18["theme"];

  // src/components/theme/Theme.tsx
  var rootClassName = "webchat-fluent";
  function Theme(props) {
    const classNames = useStyles_default(Theme_module_default);
    const variantClassName = useVariantClassName(Theme_module_default);
    return /* @__PURE__ */ import_react44.default.createElement("div", { className: (0, import_classnames13.default)(rootClassName, classNames["theme"], variantClassName) }, props.children);
  }

  // src/components/typingIndicator/SlidingDotsTypingIndicator.tsx
  var import_botframework_webchat_component15 = __toESM(require_botframework_webchat_component());
  var import_classnames14 = __toESM(require_classnames());
  var import_react46 = __toESM(require_react());

  // unplugin-lightningcss:C:\bot framework forked\BotFramework-WebChat\packages\fluent-theme\src\components\typingIndicator\SlidingDotsTypingIndicator.module.css?css_module
  var classes19 = { "sliding-dots-typing-indicator": "wIVqVSW_sliding-dots-typing-indicator", "sliding-dots-typing-indicator__image": "wIVqVSW_sliding-dots-typing-indicator__image" };
  var SlidingDotsTypingIndicator_module_default = classes19;
  var _sliding_dots_typing_indicator0 = classes19["sliding-dots-typing-indicator"];
  var _sliding_dots_typing_indicator__image0 = classes19["sliding-dots-typing-indicator__image"];

  // src/components/typingIndicator/SlidingDotsTypingIndicator.tsx
  function SlidingDotsTypingIndicator() {
    const classNames = useStyles_default(SlidingDotsTypingIndicator_module_default);
    return /* @__PURE__ */ import_react46.default.createElement("div", { className: classNames["sliding-dots-typing-indicator"], "data-testid": import_botframework_webchat_component15.testIds.typingIndicator }, /* @__PURE__ */ import_react46.default.createElement(SlidingDots_default, { className: (0, import_classnames14.default)(classNames["sliding-dots-typing-indicator__image"]) }));
  }
  var SlidingDotsTypingIndicator_default = (0, import_react46.memo)(SlidingDotsTypingIndicator);

  // src/private/FluentThemeProvider.tsx
  var { ThemeProvider } = import_botframework_webchat_component16.Components;
  var activityMiddleware = Object.freeze([
    () => (next) => (...args) => {
      const activity = args[0]?.activity;
      if (isPreChatMessageActivity(activity)) {
        return () => /* @__PURE__ */ import_react47.default.createElement(PreChatMessageActivity_default, { activity });
      }
      if (isLinerMessageActivity(activity)) {
        return () => /* @__PURE__ */ import_react47.default.createElement(LinerActivity_default, { activity });
      }
      const renderActivity = next(...args);
      return renderActivity ? (...args2) => /* @__PURE__ */ import_react47.default.createElement(ActivityDecorator_default, { activity }, renderActivity(...args2)) : renderActivity;
    }
  ]);
  var sendBoxMiddleware = [() => () => () => PrimarySendBox];
  var decoratorMiddleware = Object.freeze([
    (0, import_decorator.createActivityBorderMiddleware)(function FluentBorderLoader({ request, Next, ...props }) {
      return /* @__PURE__ */ import_react47.default.createElement(ActivityLoader_default, { showLoader: props.showLoader ?? request.livestreamingState === "preparing" }, /* @__PURE__ */ import_react47.default.createElement(Next, { ...props, showLoader: false }));
    })
  ]);
  var styles = createStyles_default("fluent-theme");
  var fluentStyleOptions = Object.freeze({
    feedbackActionsPlacement: "activity-actions"
  });
  var typingIndicatorMiddleware = Object.freeze([
    () => (next) => (...args) => args[0].visible ? /* @__PURE__ */ import_react47.default.createElement(SlidingDotsTypingIndicator_default, null) : next(...args)
  ]);
  function FluentThemeProvider({ children, variant = "fluent" }) {
    return /* @__PURE__ */ import_react47.default.createElement(VariantComposer_default, { variant }, /* @__PURE__ */ import_react47.default.createElement(Theme, null, /* @__PURE__ */ import_react47.default.createElement(Provider_default, null, /* @__PURE__ */ import_react47.default.createElement(
      ThemeProvider,
      {
        activityMiddleware,
        sendBoxMiddleware,
        styleOptions: fluentStyleOptions,
        styles,
        typingIndicatorMiddleware
      },
      /* @__PURE__ */ import_react47.default.createElement(AssetComposer_default, null, /* @__PURE__ */ import_react47.default.createElement(import_decorator2.WebChatDecorator, null, /* @__PURE__ */ import_react47.default.createElement(import_decorator.DecoratorComposer, { middleware: decoratorMiddleware }, children)))
    ))));
  }
  var FluentThemeProvider_default = (0, import_react47.memo)(FluentThemeProvider);

  // src/index.ts
  var buildTool = "tsup";
  var moduleFormat = "global";
  var version = "0.0.0-0";
  injectMeta(
    "botframework-webchat:fluent-theme",
    `version=${version || ""}; build-tool=${buildTool || ""}; module-format=${moduleFormat || ""}`
  );

  // src/bundle.ts
  globalThis.WebChat = {
    ...globalThis.WebChat,
    FluentThemeProvider: FluentThemeProvider_default,
    FluentSendBox: SendBox_default,
    testIds: {
      ...globalThis.WebChat?.testIds,
      ...testIds_default
    }
  };
})();
/*! For license information please see botframework-webchat-fluent-theme.development.js.LEGAL.txt */
//# sourceMappingURL=botframework-webchat-fluent-theme.development.js.map