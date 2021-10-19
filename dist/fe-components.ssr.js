'use strict';function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}/*!
 * maska v1.4.5
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a);}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}var i={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return u(t).length>1?s(t)(e,t,n,a):l(e,t,n,a)}function u(e){try{return JSON.parse(e)}catch(t){return [e]}}function s(e){var t=u(e).sort((function(e,t){return e.length-t.length}));return function(e,a,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=t.map((function(t){return l(e,t,r,!1)})),u=o.pop();for(var s in t)if(n(u,t[s],r))return l(e,t[s],r,i);return ""};function n(e,t,n){for(var a in n)n[a].escape&&(t=t.replace(new RegExp(a+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function l(e,t,n){for(var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=0,i=0,o="",u="";r<t.length&&i<e.length;){var s=t[r],l=e[i],p=n[s];if(p&&p.pattern)p.pattern.test(l)&&(o+=c(l,p),r++,a&&t[r]&&(n[t[r]]?n[t[r]]&&n[t[r]].escape&&(o+=t[r+1],r+=2):(o+=t[r],r++))),i++;else if(p&&p.repeat){var f=n[t[r-1]];f&&!f.pattern.test(l)?r++:r--;}else p&&p.escape&&(s=t[++r]),a&&(o+=s),l===s&&i++,r++;}for(;a&&r<t.length;){var v=t[r];if(n[v]){u="";break}u+=v,r++;}return o+u}function c(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function p(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function f(e){return "[object String]"===Object.prototype.toString.call(e)}var v=function(){function n(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,n),!t)throw new Error("Maska: no element for mask");if(a.tokens)for(var o in a.tokens)a.tokens[o]=r({},a.tokens[o]),a.tokens[o].pattern&&f(a.tokens[o].pattern)&&(a.tokens[o].pattern=new RegExp(a.tokens[o].pattern));this._opts={mask:a.mask,tokens:r(r({},i),a.tokens)},this._el=f(t)?document.querySelectorAll(t):t.length?t:[t],this.init();}var a,u;return a=n,(u=[{key:"init",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=p(this._el[t]);!this._opts.mask||n.dataset.mask&&n.dataset.mask===this._opts.mask||(n.dataset.mask=this._opts.mask),this.updateValue(n),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.addEventListener("beforeinput",(function(t){return e.beforeInput(t)})));}}},{key:"destroy",value:function(){for(var e=this,t=0;t<this._el.length;t++){var n=p(this._el[t]);n.removeEventListener("input",(function(t){return e.updateValue(t.target,t)})),n.removeEventListener("beforeinput",(function(t){return e.beforeInput(t)})),delete n.dataset.mask,delete n.dataset.maskInited;}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var a=e.selectionEnd,r=e.value,i=r[a-1];e.dataset.maskRawValue=o(e.value,e.dataset.mask,this._opts.tokens,!1),e.value=o(e.value,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&a===r.length&&(a=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t);}),0));}(e,a,i),this.dispatch("maska",e,t),e.value!==r&&this.dispatch("input",e,t);}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault();}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null));}}])&&t(a.prototype,u),n}();var d,h=(d=new WeakMap,function(e,t){if(t.value)return d.has(e)&&!function(e){return !(f(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)?d.get(e).updateValue(e):void d.set(e,new v(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?r({},e.tokens):{}):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value)))});function k(e){e.directive("maska",h);}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(k);//
var script$8 = {
  name: 'FeInput',
  directives: {
    maska: h
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mask: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      isFocused: false,
      rawContent: ''
    };
  },
  computed: {
    inputVal: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
        if ('$nuxt' in this) this.$nuxt.$emit('fieldChanged');
      }
    },
    isActive: function isActive() {
      return !Boolean(!this.inputVal || 0 === this.inputVal.length);
    },
    error: function error() {
      return this.isFocused || !this.errors.length ? '' : this.errors[0];
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.isFocused = true;
    },
    onBlur: function onBlur() {
      this.$emit('blur');
      this.isFocused = false;
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "block"
  }, [_vm._ssrNode((_vm.label ? "<div class=\"\n      flex\n      items-center\n      leading-normal\n      text-2sm text-black text-opacity-85\n      mb-2\n    \">" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n    ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div" + _vm._ssrClass("relative border rounded-lg flex items-center", {
    'bg-lavender-blush border-sunset-orange': _vm.error.length,
    'bg-white border-black border-opacity-15': !_vm.error.length,
    'bg-white border-sunset-orange': _vm.error.length && _vm.isActive
  }) + ">", "</div>", [_vm.type === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputVal,
      expression: "inputVal"
    }, {
      name: "maska",
      rawName: "v-maska",
      value: _vm.mask,
      expression: "mask"
    }],
    ref: "input",
    staticClass: "\n        relative\n        z-10\n        w-full\n        h-11\n        px-4\n        rounded-lg\n        bg-transparent\n        text-2sm text-black text-opacity-85\n        focus:outline-none\n      ",
    attrs: {
      "name": _vm.name,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.inputVal) ? _vm._i(_vm.inputVal, null) > -1 : _vm.inputVal
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "maska": function maska($event) {
        _vm.$emit('raw-value', $event.target.getAttribute('data-mask-raw-value'));
      },
      "change": function change($event) {
        var $$a = _vm.inputVal,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.inputVal = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.inputVal = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.inputVal = $$c;
        }
      }
    }
  }) : _vm.type === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputVal,
      expression: "inputVal"
    }, {
      name: "maska",
      rawName: "v-maska",
      value: _vm.mask,
      expression: "mask"
    }],
    ref: "input",
    staticClass: "\n        relative\n        z-10\n        w-full\n        h-11\n        px-4\n        rounded-lg\n        bg-transparent\n        text-2sm text-black text-opacity-85\n        focus:outline-none\n      ",
    attrs: {
      "name": _vm.name,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.inputVal, null)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "maska": function maska($event) {
        _vm.$emit('raw-value', $event.target.getAttribute('data-mask-raw-value'));
      },
      "change": function change($event) {
        _vm.inputVal = null;
      }
    }
  }, []) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputVal,
      expression: "inputVal"
    }, {
      name: "maska",
      rawName: "v-maska",
      value: _vm.mask,
      expression: "mask"
    }],
    ref: "input",
    staticClass: "\n        relative\n        z-10\n        w-full\n        h-11\n        px-4\n        rounded-lg\n        bg-transparent\n        text-2sm text-black text-opacity-85\n        focus:outline-none\n      ",
    attrs: {
      "name": _vm.name,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.inputVal
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "maska": function maska($event) {
        _vm.$emit('raw-value', $event.target.getAttribute('data-mask-raw-value'));
      },
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.inputVal = $event.target.value;
      }
    }
  }, []), _vm._ssrNode(" "), _vm.icon ? _vm._ssrNode("<div class=\"w-10 h-6 flex flex-shrink-0\">", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": _vm.icon
    }
  })], 1) : _vm._e(), _vm._ssrNode(" <div" + _vm._ssrClass("\n        absolute\n        z-0\n        transform\n        -translate-y-1/2\n        max-w-full\n        whitespace-nowrap\n        overflow-ellipsis overflow-hidden\n        focus:outline-none\n      ", [_vm.isActive ? 'bg-white top-0 left-3 text-xs px-1' : 'top-1/2 left-0 text-2sm px-4', _vm.error.length ? 'text-sunset-orange' : 'text-black text-opacity-25']) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.placeholder) + "\n    ") + "</div>")], 2), _vm._ssrNode(" " + (_vm.description || _vm.errors.length ? "<div" + _vm._ssrClass("leading-5 text-xs ml-4 mt-1", [_vm.error.length ? 'text-sunset-orange' : 'text-black text-opacity-45']) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.error.length ? _vm.error : _vm.description) + "\n  ") + "</div>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-39535714";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: 'FeRangeInput',
  props: {
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    },
    min: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: [String, Number],
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    enablePercent: {
      type: Boolean,
      default: false
    },
    enableYears: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: null
    },
    offers: {
      type: Array,
      default: null
    },
    icon: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners: function listeners() {
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        input: this.updateValue,
        change: this.onChange,
        keypress: this.onKeypress
      });
    },
    rangeValue: function rangeValue() {
      return !this.value || 0 === this.value.length ? 0 : this.value;
    }
  },
  methods: {
    valueToPercent: function valueToPercent(value) {
      return (value - this.min) / (this.max - this.min) * 100;
    },
    percentToValue: function percentToValue(percent) {
      return this.max / 100 * percent;
    },
    getMonths: function getMonths(months) {
      return months - Math.trunc(months / 12) * 12;
    },
    getYears: function getYears(months) {
      return Math.trunc(months / 12);
    },
    range: function range(value) {
      var rangeValue = value;

      if (+value >= this.max) {
        rangeValue = this.max;
      }

      if (+value <= this.min) {
        rangeValue = this.min;
      }

      return rangeValue;
    },
    formatValue: function formatValue(value) {
      return "".concat(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    },
    unformat: function unformat(value) {
      return "".concat(value).replace(/\s/g, '');
    },
    updateValue: function updateValue(evt) {
      var value = evt instanceof Event ? evt.target.value : evt;
      this.$emit('input', this.range(this.unformat(value)));
    },
    setOffer: function setOffer(value) {
      this.updateValue(this.enablePercent ? this.percentToValue(value) : value);
      this.$nuxt.$emit('fieldChanged');
    },
    onChange: function onChange(value) {
      this.updateValue(value);
      this.$nuxt.$emit('fieldChanged');
    },
    onKeypress: function onKeypress(evt) {
      var value = evt instanceof Event ? evt.target.value : evt;
      if ("".concat(this.range(this.unformat(value))).length >= "".concat(this.max).length) return evt.preventDefault();
      if (!/\d/.test(evt.key) && evt.key !== '.') return evt.preventDefault();
    }
  }
};function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode((_vm.label ? "<div class=\"\n      flex\n      items-center\n      leading-normal\n      text-2sm text-black text-opacity-85\n      mb-2\n    \" data-v-2220bff4>" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n  ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"\n      relative\n      border\n      rounded-lg\n      bg-whitess\n      border-black border-opacity-15\n      flex\n    \" data-v-2220bff4>", "</div>", [_vm._ssrNode("<div class=\"flex w-full\" data-v-2220bff4>", "</div>", [_vm._ssrNode("<div class=\"col w-full\" data-v-2220bff4>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("value", _vm.formatValue(_vm.range(_vm.value))) + " class=\"input\" data-v-2220bff4> "), _vm.icon ? _vm._ssrNode("<div class=\"w-10 h-6 flex flex-shrink-0\" data-v-2220bff4>", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": _vm.icon
    }
  })], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm.enablePercent ? _vm._ssrNode("<div class=\"col w-2/5\" data-v-2220bff4>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + " placeholder=\"В процентах\"" + _vm._ssrAttr("value", Math.round(_vm.valueToPercent(_vm.range(_vm.value)))) + " class=\"input\" data-v-2220bff4> "), _vm._ssrNode("<div class=\"w-10 h-6 flex flex-shrink-0\" data-v-2220bff4>", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": "percent"
    }
  })], 1)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.tooltip ? _vm._ssrNode("<div class=\"col\" data-v-2220bff4>", "</div>", [_vm._ssrNode("<div class=\"w-10 h-6 flex flex-shrink-0\" data-v-2220bff4>", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": "info-circle"
    }
  })], 1)]) : _vm._e()], 2), _vm._ssrNode(" <input type=\"range\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("step", _vm.step) + _vm._ssrAttr("value", _vm.rangeValue) + " class=\"range-slider\"" + _vm._ssrStyle(null, {
    '--webkitProgressPercent': _vm.valueToPercent(_vm.range(_vm.value)) + '%'
  }, null) + " data-v-2220bff4>")], 2), _vm._ssrNode(" " + (_vm.offers ? "<div class=\"mt-3\" data-v-2220bff4><div class=\"flex flex-wrap -m-1\" data-v-2220bff4>" + _vm._ssrList(_vm.offers, function (offer) {
    return "<button class=\"\n          focus:outline-none\n          hover:bg-elm hover:text-white hover:border-elm\n          border\n          rounded\n          py-0.5\n          px-2\n          m-1\n          leading-5\n          text-sm text-black text-opacity-50\n          transition-colors\n        \" data-v-2220bff4>" + _vm._ssrEscape("\n        " + _vm._s(offer.label) + "\n      ") + "</button>";
  }) + "</div></div>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2220bff4_0", {
    source: ".col[data-v-2220bff4]{position:relative;display:flex;align-items:center}.col[data-v-2220bff4]:not(:last-child)::after{display:block;--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));--tw-bg-opacity:0.25;content:\"\";width:2px;height:22px}.input[data-v-2220bff4]{position:relative;z-index:10;height:2.75rem;width:100%;-webkit-appearance:none;appearance:none;border-radius:.5rem;background-color:transparent;padding-left:1rem;font-size:.9375rem;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));--tw-text-opacity:0.85}.input[data-v-2220bff4]:focus{outline:2px solid transparent;outline-offset:2px}.input[data-v-2220bff4]{-moz-appearance:textfield}.input[data-v-2220bff4]::-webkit-inner-spin-button,.input[data-v-2220bff4]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.range-slider[data-v-2220bff4]{position:absolute;bottom:0;left:50%;z-index:10;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-translate-x:-50%;--tw-translate-y:50%;-webkit-appearance:none;appearance:none;background-color:transparent;width:calc(100% - 1.75rem);--webkitProgressPercent:0%}.range-slider[data-v-2220bff4]:focus{outline:0}.range-slider[data-v-2220bff4]::-webkit-slider-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;-webkit-appearance:none;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-2220bff4]::-moz-range-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-2220bff4]::-ms-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-2220bff4]::-webkit-slider-runnable-track{width:100%;cursor:pointer;border-style:none;height:.1875rem;background-image:linear-gradient(90deg,rgba(31,134,126,.8) var(--webkitProgressPercent),transparent var(--webkitProgressPercent))}.range-slider[data-v-2220bff4]::-moz-range-track{width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.25;height:.1875rem}.range-slider[data-v-2220bff4]::-ms-track{width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.25;height:.1875rem}.range-slider[data-v-2220bff4]::-moz-range-progress{appearance:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity));--tw-bg-opacity:0.8;height:.1875rem}.range-slider[data-v-2220bff4]::-ms-fill-lower{appearance:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity));--tw-bg-opacity:0.8;height:.1875rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-2220bff4";
/* module identifier */

var __vue_module_identifier__$7 = "data-v-2220bff4";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: 'FeRangeDate',
  props: {
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: 0
    },
    min: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: [String, Number],
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    tooltip: {
      type: String,
      default: null
    },
    offers: {
      type: Array,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    rangelisteners: function rangelisteners() {
      return _objectSpread2(_objectSpread2({}, this.$listeners), {}, {
        change: this.updateValue,
        input: this.updateValue
      });
    },
    years: {
      get: function get() {
        var value = Math.trunc(this.value / 12);
        var max = Math.trunc(this.max / 12);
        return this.range(value, this.min, max);
      },
      set: function set(value) {
        this.updateValue(Number(this.months) + Number(value) * 12);
      }
    },
    months: {
      get: function get() {
        var value = this.value - Math.trunc(this.value / 12) * 12;
        return this.range(value, 0, 11);
      },
      set: function set(value) {
        this.updateValue(Number(this.range(value, 0, 11)) + Number(this.years) * 12);
      }
    },
    pluralYears: function pluralYears() {
      var number = this.years;
      var titles = ['год', 'года', 'лет'];
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    },
    pluralMonths: function pluralMonths() {
      var number = this.months;
      var titles = ['месяц', 'месяца', 'месяцев'];
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    }
  },
  methods: {
    valueToPercent: function valueToPercent(value) {
      return (value - this.min) / (this.max - this.min) * 100;
    },
    range: function range(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.max;
      var rangeValue = value;

      if (+value >= max) {
        rangeValue = max;
      }

      if (+value <= min) {
        rangeValue = min;
      }

      return rangeValue;
    },
    formatValue: function formatValue(value) {
      return "".concat(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    },
    unformat: function unformat(value) {
      return "".concat(value).replace(/\s/g, '');
    },
    setOffer: function setOffer(value) {
      this.updateValue(value);
      this.$nuxt.$emit('fieldChanged');
    },
    updateValue: function updateValue(evt) {
      var value = evt instanceof Event ? evt.target.value : evt;
      this.$emit('input', this.unformat(value));
      this.$nuxt.$emit('fieldChanged');
    },
    onYearsInputKeypress: function onYearsInputKeypress(evt) {
      var value = evt instanceof Event ? evt.target.value : evt;

      if (!/\d/.test(evt.key) && evt.key !== '') {
        return evt.preventDefault();
      }

      if ("".concat(this.range(this.unformat(value))).length >= "".concat(Math.trunc(this.max / 12)).length) {
        return evt.preventDefault();
      }
    },
    onMonthsInputKeypress: function onMonthsInputKeypress(evt) {
      var value = evt instanceof Event ? evt.target.value : evt;

      if (!/\d/.test(evt.key) && evt.key !== '') {
        return evt.preventDefault();
      }

      if ("".concat(this.unformat(value)).length >= 2) {
        return evt.preventDefault();
      }
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode((_vm.label ? "<div class=\"\n      flex\n      items-center\n      leading-normal\n      text-2sm text-black text-opacity-85\n      mb-2\n    \" data-v-908f1ed4>" + _vm._ssrEscape("\n    " + _vm._s(_vm.label) + "\n  ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<div class=\"\n      relative\n      border\n      rounded-lg\n      bg-whitess\n      border-black border-opacity-15\n      flex\n    \" data-v-908f1ed4>", "</div>", [_vm._ssrNode("<div class=\"flex w-full\" data-v-908f1ed4>", "</div>", [_vm._ssrNode("<div class=\"col w-full\" data-v-908f1ed4><input type=\"text\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + " placeholder=\"В годах\"" + _vm._ssrAttr("value", _vm.years) + " class=\"input\" data-v-908f1ed4> <div class=\"px-3 flex flex-shrink-0 text-xs text-black text-opacity-25\" data-v-908f1ed4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.pluralYears) + "\n        ") + "</div></div> <div class=\"col w-2/5\" data-v-908f1ed4><input type=\"text\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + " placeholder=\"В месяцах\"" + _vm._ssrAttr("value", _vm.months) + " class=\"input\" data-v-908f1ed4> <div class=\"px-3 flex flex-shrink-0 text-xs text-black text-opacity-25\" data-v-908f1ed4>" + _vm._ssrEscape("\n          " + _vm._s(_vm.pluralMonths) + "\n        ") + "</div></div> "), _vm.tooltip ? _vm._ssrNode("<div class=\"col\" data-v-908f1ed4>", "</div>", [_vm._ssrNode("<div class=\"w-10 h-6 flex flex-shrink-0\" data-v-908f1ed4>", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": "info-circle"
    }
  })], 1)]) : _vm._e()], 2), _vm._ssrNode(" <input type=\"range\"" + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("step", _vm.step) + _vm._ssrAttr("value", _vm.value) + " class=\"range-slider\"" + _vm._ssrStyle(null, {
    '--webkitProgressPercent': _vm.valueToPercent(_vm.range(_vm.value)) + '%'
  }, null) + " data-v-908f1ed4>")], 2), _vm._ssrNode(" " + (_vm.offers ? "<div class=\"mt-3\" data-v-908f1ed4><div class=\"flex flex-wrap -m-1\" data-v-908f1ed4>" + _vm._ssrList(_vm.offers, function (offer) {
    return "<button class=\"\n          focus:outline-none\n          hover:bg-elm hover:text-white hover:border-elm\n          border\n          rounded\n          py-0.5\n          px-2\n          m-1\n          leading-5\n          text-sm text-black text-opacity-50\n          transition-colors\n        \" data-v-908f1ed4>" + _vm._ssrEscape("\n        " + _vm._s(offer.label) + "\n      ") + "</button>";
  }) + "</div></div>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-908f1ed4_0", {
    source: ".col[data-v-908f1ed4]{position:relative;display:flex;align-items:center}.col[data-v-908f1ed4]:not(:last-child)::after{display:block;--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));--tw-bg-opacity:0.25;content:\"\";width:2px;height:22px}.input[data-v-908f1ed4]{position:relative;z-index:10;height:2.75rem;width:100%;-webkit-appearance:none;appearance:none;border-radius:.5rem;background-color:transparent;padding-left:1rem;font-size:.9375rem;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));--tw-text-opacity:0.85}.input[data-v-908f1ed4]:focus{outline:2px solid transparent;outline-offset:2px}.input[data-v-908f1ed4]{-moz-appearance:textfield}.input[data-v-908f1ed4]::-webkit-inner-spin-button,.input[data-v-908f1ed4]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.range-slider[data-v-908f1ed4]{position:absolute;bottom:0;left:50%;z-index:10;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-translate-x:-50%;--tw-translate-y:50%;-webkit-appearance:none;appearance:none;background-color:transparent;width:calc(100% - 1.75rem);--webkitProgressPercent:0%}.range-slider[data-v-908f1ed4]:focus{outline:0}.range-slider[data-v-908f1ed4]::-webkit-slider-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;-webkit-appearance:none;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-908f1ed4]::-moz-range-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-908f1ed4]::-ms-thumb{margin-top:-.25rem;height:.75rem;width:.75rem;cursor:pointer;appearance:none;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity))}.range-slider[data-v-908f1ed4]::-webkit-slider-runnable-track{width:100%;cursor:pointer;border-style:none;height:.1875rem;background-image:linear-gradient(90deg,rgba(31,134,126,.8) var(--webkitProgressPercent),transparent var(--webkitProgressPercent))}.range-slider[data-v-908f1ed4]::-moz-range-track{width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.25;height:.1875rem}.range-slider[data-v-908f1ed4]::-ms-track{width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.25;height:.1875rem}.range-slider[data-v-908f1ed4]::-moz-range-progress{appearance:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity));--tw-bg-opacity:0.8;height:.1875rem}.range-slider[data-v-908f1ed4]::-ms-fill-lower{appearance:none;--tw-bg-opacity:1;background-color:rgba(31,134,126,var(--tw-bg-opacity));--tw-bg-opacity:0.8;height:.1875rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-908f1ed4";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-908f1ed4";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: [Array, Object],
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    },
    default: {
      type: Boolean,
      default: false
    },
    returnObject: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isActive: false,
      keyword: '',
      selectedOption: {}
    };
  },
  computed: {
    inputVal: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.keyword = value.name;
        this.$emit('input', this.returnObject ? this.selectedOption : value.val);
      }
    },
    filteredList: function filteredList() {
      return this.search();
    }
  },
  watch: {
    options: function options() {
      if (this.default && this.isEmpty(this.value) && this.options.length) {
        this.updateOption(this.filteredList[0]);
      }
    },
    value: function value(newValue, old) {
      if (newValue !== '') {
        var option = {
          val: newValue,
          name: this.nameFromVal(this.options, newValue)
        };
        this.updateOption(option, true);
      }
    }
  },
  mounted: function mounted() {
    if (this.default && this.isEmpty(this.value) && this.options.length) {
      this.updateOption(this.filteredList[0], false);
    }

    this.keyword = this.nameFromVal(this.options, this.value);
  },
  methods: {
    isEmpty: function isEmpty(str) {
      return !str || str.length === 0;
    },
    isEmptyObject: function isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    updateOption: function updateOption(option, ignoreEmit) {
      this.selectedOption = option;
      this.inputVal = option;
      this.isActive = false;
      this.$nuxt.$emit('fieldChanged');

      if (!ignoreEmit) {
        this.$emit('change');
      }
    },
    search: function search() {
      var _this = this;

      var filteredList = this.options.filter(function (item) {
        return _this.keyword.toLowerCase().split(' ').every(function (v) {
          return item.name.toLowerCase().includes(v);
        });
      });
      return this.default ? this.options : filteredList;
    },
    showDropdown: function showDropdown() {
      this.isActive = true;
      if (!this.default) this.keyword = '';
    },
    nameFromVal: function nameFromVal(options, val) {
      var _this2 = this;

      var value = options.filter(function (item) {
        return item.val === val;
      });

      this.selectedOption = function () {
        _this2.selectedOption = value;
        _this2.inputVal = value;
      };

      return value[0] ? value[0].name : '';
    },
    hideDropdown: function hideDropdown() {
      this.isActive = false;

      if (!this.keyword.length) {
        this.inputVal = {
          name: '',
          val: ''
        };
        this.selectedOption = [];
      }
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.hideDropdown,
      expression: "hideDropdown"
    }],
    staticClass: "block relative"
  }, [_vm._ssrNode("<div class=\"flex border rounded-lg\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("readonly", this.default) + _vm._ssrAttr("value", _vm.keyword) + " class=\"\n        relative\n        z-10\n        w-full\n        h-11\n        pl-4\n        rounded-lg\n        bg-transparent\n        text-2sm text-black text-opacity-85\n        focus:outline-none\n      \"> "), _vm._ssrNode("<div class=\"relative w-10 h-11 flex flex-shrink-0\">", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-3 h-3 fill-current text-black text-opacity-25",
    attrs: {
      "name": "chevron-down"
    }
  })], 1), _vm._ssrNode(" <div" + _vm._ssrClass("\n        absolute\n        z-0\n        transform\n        -translate-y-1/2\n        max-w-full\n        whitespace-nowrap\n        overflow-ellipsis overflow-hidden\n        focus:outline-none\n        text-black text-opacity-25\n      ", [_vm.isActive || _vm.keyword.length ? 'bg-white top-0 left-3 text-xs px-1' : 'top-1/2 left-0 text-2sm px-4']) + ">" + _vm._ssrEscape("\n      " + _vm._s(_vm.placeholder) + "\n    ") + "</div>")], 2), _vm._ssrNode(" " + (_vm.isActive ? "<ul class=\"\n      absolute\n      top-full\n      left-0\n      z-20\n      w-full\n      bg-white\n      py-1\n      shadow\n      transform\n      translate-y-1\n      max-h-48\n      overflow-y-auto\n    \">" + _vm._ssrList(_vm.filteredList, function (option) {
    return "<li class=\"\n        cursor-pointer\n        py-1.5\n        px-4\n        odd:bg-catskill-white\n        hover:bg-elm hover:bg-opacity-10\n        transition-colors\n      \"><div class=\"\n          leading-normal\n          text-2sm text-black text-opacity-85\n          whitespace-nowrap\n          overflow-hidden overflow-ellipsis\n        \">" + _vm._ssrEscape("\n        " + _vm._s(option.name) + "\n      ") + "</div> " + (option.additionally ? "<div class=\"flex flex-wrap -mx-3\">" + _vm._ssrList(option.additionally, function (additional) {
      return "<div class=\"\n            leading-5\n            text-2xs text-black text-opacity-45\n            px-3\n            whitespace-nowrap\n            overflow-hidden overflow-ellipsis\n          \">" + _vm._ssrEscape("\n          " + _vm._s(additional.name) + "\n        ") + "</div>";
    }) + "</div>" : "<!---->") + "</li>";
  }) + " " + (!_vm.filteredList.length ? "<li class=\"\n        cursor-pointer\n        py-1.5\n        px-4\n        odd:bg-catskill-white\n        hover:bg-elm hover:bg-opacity-10\n        transition-colors\n      \"><div class=\"\n          leading-normal\n          text-2sm text-black text-opacity-85\n          whitespace-nowrap\n          overflow-hidden overflow-ellipsis\n        \">\n        Не найдено\n      </div></li>" : "<!---->") + "</ul>" : "<!---->"))], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-ba823c38";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: 'FeSwitch',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);

        if ('$nuxt' in this) {
          this.$nuxt.$emit('fieldChanged');
        }
      }
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('label', {
    staticClass: "switch",
    class: [_vm.isActive ? 'bg-elm' : 'bg-gray-300']
  }, [_vm._ssrNode("<input" + _vm._ssrAttr("name", _vm.name) + " type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.isActive) ? _vm._i(_vm.isActive, null) > -1 : _vm.isActive) + " class=\"hidden\" data-v-3131fa49> " + (_vm.isActive ? "<div class=\"\n      absolute\n      top-1/2\n      left-2\n      transform\n      -translate-y-1/2\n      text-2xs text-white\n    \" data-v-3131fa49>\n    Да\n  </div>" : "<!---->") + " " + (!_vm.isActive ? "<div class=\"\n      absolute\n      top-1/2\n      right-2\n      transform\n      -translate-y-1/2\n      text-2xs text-white\n    \" data-v-3131fa49>\n    Нет\n  </div>" : "<!---->") + " <div" + _vm._ssrClass("mark", {
    'ml-auto': _vm.isActive
  }) + " data-v-3131fa49></div>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3131fa49_0", {
    source: ".switch[data-v-3131fa49]{position:relative;display:block;cursor:pointer;border-radius:.25rem;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;padding:1px;width:3.75rem;height:1.5625rem}.mark[data-v-3131fa49]{border-radius:.25rem;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms;width:1.4375rem;height:1.4375rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-3131fa49";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-3131fa49";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: 'FeAlert',
  props: {
    type: {
      type: String,
      default: 'help'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex"
  }, [_vm._ssrNode("<div class=\"flex h-7 mr-2.5\">", "</div>", [_c('svg-icon', {
    staticClass: "m-auto w-5 h-5 fill-current",
    class: {
      'text-elm': _vm.type === 'success',
      'text-black text-opacity-45': _vm.type === 'help',
      'text-tahiti-gold': _vm.type === 'warning',
      'text-sunset-orange': _vm.type === 'error'
    },
    attrs: {
      "name": "info-circle"
    }
  })], 1), _vm._ssrNode(" <div><div class=\"font-semibold leading-7 text-xl text-black text-opacity-85\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n    ") + "</div> <div class=\"text-2sm leading-normal text-black text-opacity-45\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.description) + "\n    ") + "</div></div>")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-4075d1ca";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  props: {
    size: {
      type: String,
      default: "base"
    },
    appearance: {
      type: String,
      default: "promary"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      sizes: {
        base: "py-3 px-6 leading-6 text-lg",
        lg: "py-4 px-6 leading-7 text-xl",
        sm: "py-2.5 px-6 leading-snug text-base",
        xs: "py-2 px-4 leading-5 text-sm"
      },
      styles: {
        promary: {
          default: "bg-elm rounded-lg font-semibold text-center text-white transition-all focus:outline-none hover:bg-opacity-80",
          active: "bg-elm rounded-lg font-semibold text-center text-white transition-all focus:outline-none bg-opacity-80"
        },
        "outline-primary": {
          default: "border-2 border-elm rounded-lg text-center text-elm transition-all focus:outline-none hover:bg-elm hover:text-white",
          active: "border-2 border-elm rounded-lg text-center transition-all focus:outline-none bg-elm text-white"
        },
        "outline-secondary": {
          default: "border-2 border-black border-opacity-25 rounded-lg text-center text-black text-opacity-25 transition-all focus:outline-none hover:border-opacity-0 hover:bg-black hover:bg-opacity-25 hover:text-white",
          active: "border-2 border-black rounded-lg text-center transition-all focus:outline-none border-opacity-0 bg-black bg-opacity-25 text-white"
        }
      },
      disabled: "pointer-events-none opacity-40"
    };
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    class: [_vm.sizes[_vm.size], _vm.styles[_vm.appearance][_vm.isActive ? 'active' : 'default'], _vm.isDisabled ? _vm.disabled : '']
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = "data-v-d62fcde4";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-d62fcde4";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
var script$1 = {
  name: "Pagination",
  components: {
    FeButton: __vue_component__$2
  },
  props: {
    appearance: {
      type: String,
      default: "promary"
    },
    size: {
      type: String,
      default: "base"
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    pageRange: {
      type: Number,
      default: 2
    }
  },
  computed: {
    pages: function pages() {
      var pages = [];

      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }

      return pages;
    },
    rangeStart: function rangeStart() {
      var start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd: function rangeEnd() {
      var end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages: function totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage: function nextPage() {
      return this.current + 1;
    },
    prevPage: function prevPage() {
      return this.current - 1;
    }
  },
  methods: {
    hasFirst: function hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast: function hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev: function hasPrev() {
      return this.current > 1;
    },
    hasNext: function hasNext() {
      return this.current < this.totalPages;
    },
    changePage: function changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex gap-x-2"
  }, [_vm.hasPrev() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "size": _vm.size
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.changePage(_vm.prevPage);
      }
    }
  }, [_vm.$slots.prev ? _vm._t("prev") : _c('svg-icon', {
    staticClass: "w-4 h-4 fill-current",
    attrs: {
      "name": "arrow"
    }
  })], 2) : _vm._e(), _vm._ssrNode(" "), _vm.hasFirst() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "size": _vm.size
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.changePage(1);
      }
    }
  }, [_vm._v("1")]) : _vm._e(), _vm._ssrNode(" "), _vm.hasFirst() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "size": _vm.size,
      "is-disabled": true
    }
  }, [_vm._v("...")]) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.pages, function (page) {
    return _c('fe-button', {
      key: page,
      attrs: {
        "appearance": _vm.appearance,
        "size": _vm.size,
        "is-active": _vm.current === page
      },
      nativeOn: {
        "click": function click($event) {
          return _vm.changePage(page);
        }
      }
    }, [_vm._v(_vm._s(page))]);
  }), _vm._ssrNode(" "), _vm.hasLast() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "is-disabled": true,
      "size": _vm.size
    }
  }, [_vm._v("...")]) : _vm._e(), _vm._ssrNode(" "), _vm.hasLast() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "size": _vm.size
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.changePage(_vm.totalPages);
      }
    }
  }, [_vm._v(_vm._s(_vm.totalPages))]) : _vm._e(), _vm._ssrNode(" "), _vm.hasNext() ? _c('fe-button', {
    attrs: {
      "appearance": _vm.appearance,
      "size": _vm.size
    },
    nativeOn: {
      "click": function click($event) {
        return _vm.changePage(_vm.nextPage);
      }
    }
  }, [_vm.$slots.prev ? _vm._t("next") : _c('svg-icon', {
    staticClass: "w-4 h-4 fill-current transform rotate-180",
    attrs: {
      "name": "arrow"
    }
  })], 2) : _vm._e()], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-59b9a18d";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
      dataURL: ""
    };
  },
  mounted: function mounted() {
    this.canvas = this.$refs.canvas.getContext("2d");
  },
  watch: {
    isDrawing: function isDrawing() {
      this.dataURL = this.$refs.canvas.toDataURL();
      this.$emit("input", this.dataURL);
    }
  },
  methods: {
    drawLine: function drawLine(x1, y1, x2, y2) {
      var ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    beginDrawing: function beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    keepDrawing: function keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    stopDrawing: function stopDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clear: function clear() {
      var w = this.$refs.canvas.width;
      var h = this.$refs.canvas.height;
      this.canvas.clearRect(0, 0, w, h);
      this.$emit("input", '');
    }
  }
};/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('canvas', {
    ref: "canvas",
    staticClass: "bg-catskill-white border rounded",
    attrs: {
      "width": 288,
      "height": 100
    },
    on: {
      "mousedown": _vm.beginDrawing,
      "mousemove": _vm.keepDrawing,
      "mouseup": _vm.stopDrawing
    }
  }, []);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-9175896a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,FeInput: __vue_component__$8,FeRangeInput: __vue_component__$7,FeRangeDate: __vue_component__$6,FeSelect: __vue_component__$5,FeSwitch: __vue_component__$4,FeAlert: __vue_component__$3,FeButton: __vue_component__$2,FePagination: __vue_component__$1,FeSignature: __vue_component__});var install = function installFeComponents(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,FeInput: __vue_component__$8,FeRangeInput: __vue_component__$7,FeRangeDate: __vue_component__$6,FeSelect: __vue_component__$5,FeSwitch: __vue_component__$4,FeAlert: __vue_component__$3,FeButton: __vue_component__$2,FePagination: __vue_component__$1,FeSignature: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;