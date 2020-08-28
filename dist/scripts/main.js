(function () {
  'use strict';

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

  var defineProperty = _defineProperty;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  function onUpdateActor(actor, updated) {
    // if not a resources update, bail out
    if (!get(updated, 'data.resources')) return;

    // get correspondent obsidian resource
    var obsidianEffects = Array.from(actor.data.obsidian.effects).
    map(function (_ref) {var _ref2 = slicedToArray(_ref, 2),value = _ref2[1];return value;}).
    filter(function (effect) {return effect.components.find(function (component) {return component.type === 'resource';});});

    Object.entries(updated.data.resources).map(function (_ref3) {var _ref4 = slicedToArray(_ref3, 2),label = _ref4[0],resource = _ref4[1];
      var currentResource = actor.data.data.resources[label];

      var max = get(resource, 'max') !== undefined ? get(resource, 'max') : currentResource.max;
      var value = get(resource, 'value') !== undefined ? get(resource, 'value') : currentResource.value;

      var correspondentEffect = obsidianEffects.find(function (effect) {return (
          effect.components.find(function (component) {return component.name === currentResource.label;}));});

      if (!correspondentEffect)
      return ui.notifications.warn("There is no Obsidian Effect for resource <b>".concat(
      currentResource.label, "</b> in actor ").concat(actor.data.name, "."));


      var item = actor.getEmbeddedEntity('OwnedItem', correspondentEffect.parentItem);
      if (!item)
      return ui.notifications.warn("There is no OwnedItem for resource <b>".concat(
      currentResource.label, "</b> in actor ").concat(actor.data.name, "."));


      var component = correspondentEffect.components.find(
      function (component) {return component.type === 'resource' && component.name === currentResource.label;});


      var update = defineProperty({
        _id: item._id }, "flags.obsidian.effects.".concat(
      correspondentEffect.idx, ".components.").concat(component.idx, ".remaining"), Math.min(max, value));


      var obsidianRemaining = actor.data.obsidian.effects.get(correspondentEffect.uuid).components[component.idx].
      remaining;
      if (Math.min(max, value) == obsidianRemaining) return;

      actor.updateEmbeddedEntity('OwnedItem', OBSIDIAN.updateArrays(item, update));
    });
  }

  function onUpdateOwnedItem(actor, item) {var _actor$update;
    // get resource name
    var obsidianResourceName = get(item, 'obsidian.bestResource.label');

    if (!obsidianResourceName) return;
    // get correspondent dnd5e system resource
    var _ref5 =
    Object.entries(actor.data.data.resources).find(function (_ref7) {var _ref8 = slicedToArray(_ref7, 2),resource = _ref8[1];return resource.label === obsidianResourceName;}) || [],_ref6 = slicedToArray(_ref5, 2),label = _ref6[0],resource = _ref6[1];

    if (!label) return;
    if (
    resource.max == get(item, 'obsidian.bestResource.max') &&
    resource.value == get(item, 'obsidian.bestResource.remaining'))

    return;

    actor.update((_actor$update = {}, defineProperty(_actor$update, "data.resources.".concat(
    label, ".max"), get(item, 'obsidian.bestResource.max')), defineProperty(_actor$update, "data.resources.".concat(
    label, ".value"), get(item, 'obsidian.bestResource.remaining')), _actor$update));

  }

  var actorResource = { onUpdateActor: onUpdateActor, onUpdateOwnedItem: onUpdateOwnedItem };

  /* global OBSIDIAN, ui */

  function onUpdateDefaultAC(actor, updated) {
    // if not a ac update, bail out
    if (!get(updated, 'data.attributes.ac')) return;

    // console.log('HOOKS >', 'updateActor >', 'updateAC', { actor, updated })

    // get correspondent obsidian ac
    var O_base = get(actor, 'data.flags.obsidian.attributes.ac.base', 10);
    var O_mod1 = get(actor.data, "data.abilities.".concat(get(actor.data, 'flags.obsidian.attributes.ac.ability1'), ".mod"), 0);
    var O_mod2 = get(actor.data, "data.abilities.".concat(get(actor.data, 'flags.obsidian.attributes.ac.ability2'), ".mod"), 0);

    var newAc = get(updated, 'data.attributes.ac.value', 10 + O_mod1 + O_mod2);
    var newBaseAc = newAc - O_mod1 - O_mod2;

    if (newBaseAc === O_base) return;

    actor.update({
      'flags.obsidian.attributes.ac.base': newBaseAc });

  }

  function onUpdatedObsidianAC(actor, updated) {
    // if not a ac update, bail out
    if (!get(updated, 'flags.obsidian.attributes.ac')) return;

    // console.log('HOOKS >', 'updateActor >', 'updateObsidianAC', { actor, updated })

    // get correspondent default ac
    var acValue = get(actor, 'data.data.attributes.ac.value', 10);

    var updatedAc = get(updated, 'flags.obsidian.attributes.ac');
    var obsidianAc = get(actor, 'data.flags.obsidian.attributes.ac');

    var newBase = get(updatedAc, 'base', get(obsidianAc, 'base', 10));
    var newAbility1 = get(updatedAc, 'ability1', get(obsidianAc, 'ability1'));
    var newAbility2 = get(updatedAc, 'ability2', get(obsidianAc, 'ability2'));

    var O_mod1 = get(actor.data, "data.abilities.".concat(newAbility1, ".mod"), 0);
    var O_mod2 = get(actor.data, "data.abilities.".concat(newAbility2, ".mod"), 0);

    var newAc = newBase + O_mod1 + O_mod2;

    if (newAc === acValue) return;

    actor.update({
      'data.attributes.ac.value': newAc,
      'data.attributes.ac.max': newAc });

  }

  function onUpdateActor$1(actor, updated) {
    onUpdateDefaultAC(actor, updated);
    onUpdatedObsidianAC(actor, updated);
  }

  var actorArmorClass = { onUpdateActor: onUpdateActor$1 };

  function onUpdateObsidianSkill(actor, updated) {
    // if not a ac update, bail out
    if (!get(updated, 'flags.obsidian.skills')) return;

    var skills = Object.entries(get(updated, 'flags.obsidian.skills'));

    // console.log('HOOKS >', 'updateActor >', 'updateObsidianSkill', { actor, updated, skills })

    skills.map(function (_ref) {var _actor$update;var _ref2 = slicedToArray(_ref, 2),skill = _ref2[0],data = _ref2[1];
      var defaultSkill = get(actor, "data.data.skills.".concat(skill), {});

      var value = get(data, 'value', get(defaultSkill, 'value', 0));
      var ability = get(data, 'ability', get(defaultSkill, 'ability'));
      var bonus = get(data, 'bonus', get(defaultSkill, 'bonus', 0));

      actor.update((_actor$update = {}, defineProperty(_actor$update, "data.skills.".concat(
      skill, ".value"), value), defineProperty(_actor$update, "data.skills.".concat(
      skill, ".ability"), ability), defineProperty(_actor$update, "data.skills.".concat(
      skill, ".bonus"), bonus), _actor$update));

    });
  }

  function onUpdateDefaultSkill(actor, updated) {
    // if not a ac update, bail out
    if (!get(updated, 'data.skills')) return;

    var skills = Object.entries(get(updated, 'data.skills'));

    // console.log('HOOKS >', 'updateActor >', 'updateSkill', { actor, updated, skills })

    skills.map(function (_ref3) {var _actor$update2;var _ref4 = slicedToArray(_ref3, 2),skill = _ref4[0],data = _ref4[1];
      var obsidianSkill = get(actor, "data.flags.obsidian.skills.".concat(skill), {});

      var value = get(data, 'value', get(obsidianSkill, 'value', 0));
      var ability = get(data, 'ability', get(obsidianSkill, 'ability'));
      var bonus = get(data, 'bonus', get(obsidianSkill, 'bonus', 0));

      if (value === obsidianSkill.value && ability === obsidianSkill.ability && bonus === obsidianSkill.bonus) return;

      actor.update((_actor$update2 = {}, defineProperty(_actor$update2, "flags.obsidian.skills.".concat(
      skill, ".value"), value), defineProperty(_actor$update2, "flags.obsidian.skills.".concat(
      skill, ".ability"), ability), defineProperty(_actor$update2, "flags.obsidian.skills.".concat(
      skill, ".bonus"), bonus), _actor$update2));

    });
  }

  function onUpdateActor$2(actor, updated) {
    onUpdateDefaultSkill(actor, updated);
    onUpdateObsidianSkill(actor, updated);
  }

  var actorSkill = { onUpdateActor: onUpdateActor$2 };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var asyncToGenerator = _asyncToGenerator;

  function runCompendium(_x) {return _runCompendium.apply(this, arguments);}function _runCompendium() {_runCompendium = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(macroPath) {var pack, _macroPath$split$slic, _macroPath$split$slic2, uuid, macro;return regenerator.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              pack = macroPath.split('.').slice(0, -1).join('.');_macroPath$split$slic =
              macroPath.split('.').slice(-1), _macroPath$split$slic2 = slicedToArray(_macroPath$split$slic, 1), uuid = _macroPath$split$slic2[0];_context.next = 4;return (

                game.packs.get(pack).getEntity(uuid));case 4:macro = _context.sent;if (
              macro) {_context.next = 7;break;}return _context.abrupt("return");case 7:

              macro.execute();case 8:case "end":return _context.stop();}}}, _callee);}));return _runCompendium.apply(this, arguments);}

  function getExpressions(item) {
    return new Promise(function (resolve) {
      if (!get(item, 'flags.obsidian.activeEffect', false)) return resolve([]);

      var effects = get(item, 'flags.obsidian.effects', []);

      effects.map(function (effect) {
        var expressions = effect.components.filter(function (component) {return component.type === 'expression';});
        if (!expressions) return resolve([]);
        return resolve(expressions);
      });
    });
  }

  function onCreateOwnedItem(actor, item) {
    getExpressions(item).then(function (expressions) {
      expressions.map(function (expression) {
        var command = expression.expr[0] === '@' ? expression.expr : false;
        var cleanup = expression.flavour[0] === '@' ? expression.flavour : false;

        if (!command) return;var _command$split =

        command.split(/[\[\]]/gi),_command$split2 = slicedToArray(_command$split, 2),at = _command$split2[0],path = _command$split2[1];

        if (at === '@Compendium') runCompendium(path);else
        return ui.notifications.error("Script Effect behaviour not implemented for \"".concat(at, "\""));
      });
    });
  }

  function onDeleteOwnedItem(actor, item) {
    getExpressions(item).then(function (expressions) {
      expressions.map(function (expression) {
        var command = expression.expr[0] === '@' ? expression.expr : false;
        var cleanup = expression.flavour[0] === '@' ? expression.flavour : false;

        if (!cleanup) return;var _cleanup$split =

        cleanup.split(/[\[\]]/gi),_cleanup$split2 = slicedToArray(_cleanup$split, 2),at = _cleanup$split2[0],path = _cleanup$split2[1];

        if (at === '@Compendium') runCompendium(path);else
        return ui.notifications.error("Script Effect behaviour not implemented for \"".concat(at, "\""));
      });
    });
  }

  var actorEffect = { onCreateOwnedItem: onCreateOwnedItem, onDeleteOwnedItem: onDeleteOwnedItem };

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;

      return maxing
        ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
        : timeWaiting;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  var SCOPE = 'may';

  function clear() {return _clear.apply(this, arguments);}function _clear() {_clear = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {return regenerator.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                Promise.all(Object.entries(game.user.data.hotbar).map(function (_ref) {var _ref2 = slicedToArray(_ref, 1),key = _ref2[0];return game.user.assignHotbarMacro(null, key);})));case 2:case "end":return _context.stop();}}}, _callee);}));return _clear.apply(this, arguments);}


  function load(_x) {return _load.apply(this, arguments);}function _load() {_load = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(data) {var currentHotbar, macrosNotFound;return regenerator.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              currentHotbar = duplicate(game.user.data.hotbar); // in case we need to undo
              _context2.next = 3;return (
                clear());case 3:

              macrosNotFound = 0;_context2.prev = 4;_context2.next = 7;return (

                Promise.all(
                Object.entries(data).map(function (_ref3) {var _ref4 = slicedToArray(_ref3, 2),key = _ref4[0],value = _ref4[1];
                  if (!value) return;

                  var macro = game.macros.get(value);

                  if (!macro) {
                    macrosNotFound++;
                    console.error('MAY, Shared Hotbar |', 'Could not find macro', value, data);
                  } else {
                    return game.user.assignHotbarMacro(macro, key);
                  }
                })));case 7:_context2.next = 15;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](4);


              console.error('MAY, Shared Hotbar |', _context2.t0, data);
              ui.notifications.error("MAY \u2014 Could't load hotbar.");_context2.next = 15;return (

                load(currentHotbar));case 15:


              if (macrosNotFound > 0) ui.notifications.warn("MAY \u2014 Some macros were not found on loading the hotbar.");case 16:case "end":return _context2.stop();}}}, _callee2, null, [[4, 9]]);}));return _load.apply(this, arguments);}


  var hotbar = { clear: clear, load: load };

  function loadFromToken(token) {
    var actorLink = get(token, 'data.actorLink');
    var source = actorLink ? token.actor : token;

    return get(source, 'data.flags.may.shared-hotbar', {});
  }

  function saveToToken(token, hotbar) {
    var actorLink = get(token, 'data.actorLink', false);
    var source = actorLink ? token.actor : token;

    // console.log('saveToToken', actorLink, source, hotbar, 'oldValue:', source.getFlag('may', 'shared-hotbar'))
    source.setFlag('may', 'shared-hotbar', hotbar);
  }

  var shared = { loadFromToken: loadFromToken, saveToToken: saveToToken };

  var ignoreUpdateUser = false; // semaphore for updateUser hooks triggered by change in controlled token

  function onReady() {
    // check if user has flag
    var hasFlag = game.user.getFlag(SCOPE, 'shared-hotbar');

    // if it doesnt, get current user.hotbar and save it as user general
    if (!hasFlag) {
      var currentHotbar = game.user.data.hotbar;
      game.user.setFlag(SCOPE, 'shared-hotbar', { general: currentHotbar, locked: false });
    } else {
      // if it does, load user general
      var general = hasFlag.general,locked = hasFlag.locked;

      if (locked) return;
      ignoreUpdateUser = true;
      hotbar.load(general || {}).then(function () {return ignoreUpdateUser = false;});
    }
  }

  function _onControlToken(token, controlled) {
    // console.log('_onControlToken', { token, controlled })
    if (game.user.getFlag('may', 'shared-hotbar.locked')) return;

    var hotbarConfig = {};
    if (!controlled || canvas.tokens.controlled.length > 1) {
      // load user general
      hotbarConfig = game.user.getFlag('may', 'shared-hotbar.general') || {};
    } else {
      // load token specific
      hotbarConfig = shared.loadFromToken(token);
    }

    ignoreUpdateUser = true;
    hotbar.load(hotbarConfig || {}).then(function () {return ignoreUpdateUser = false;});
  }

  var onControlToken = debounce(_onControlToken, 100);

  function onUpdateUser(user, _ref, _ref2, _id) {var hotbar = _ref.hotbar;var diff = _ref2.diff;
    if (game.user.getFlag('may', 'shared-hotbar.locked')) return;
    // console.log('onUpdateUser', user, { hotbar }, { diff }, _id)
    // called when hotbar is updated
    if (!diff) return;
    if (!hotbar) return;
    if (ignoreUpdateUser) return; //console.log('MAY, Shared Hotbar |', 'Ignoring update user')

    var oneTokenSelected = canvas.tokens.controlled.length === 1;
    var currentHotbar = get(user, 'data.hotbar');

    // Iterate over the other object to set removals
    Object.entries(hotbar).map(function (_ref3) {var _ref4 = slicedToArray(_ref3, 2),key = _ref4[0],value = _ref4[1];
      // should delete?
      var toDelete = false;
      if (key.startsWith('-=')) {
        key = key.slice(2);
        toDelete = value === null;
      }

      if (toDelete) currentHotbar[key] = value;
    });

    if (oneTokenSelected) {
      // save to token/actor
      var _canvas$tokens$contro = slicedToArray(canvas.tokens.controlled, 1),token = _canvas$tokens$contro[0];
      shared.saveToToken(token, currentHotbar);
    } else {
      // save as general
      game.user.setFlag(SCOPE, 'shared-hotbar.general', currentHotbar);
    }
  }

  function onCreateToken(scene, tokenData, userId) {
    var token = get(canvas, 'tokens.placeables', []).find(function (p) {return p.id === tokenData._id;});

    if (!token) return;

    if (!tokenData.actorLink) {
      // bring actor hotbar to token
      var _hotbar = token.actor.getFlag('may', 'shared-hotbar');
      if (!_hotbar) return;

      token.setFlag('may', 'shared-hotbar', _hotbar);
    }
  }

  function onToggleSharedHotbar() {var _ref5 =
    game.user.getFlag('may', 'shared-hotbar') || {},locked = _ref5.locked,general = _ref5.general;
    var unlockingSharedHotbar = !locked === false;

    if (unlockingSharedHotbar) game.user.setFlag(SCOPE, 'shared-hotbar.general', game.user.data.hotbar);else
    {
      ignoreUpdateUser = true;
      hotbar.load(general || {}).then(function () {return ignoreUpdateUser = false;});
    }

    game.user.setFlag('may', 'shared-hotbar.locked', !locked);

    $('li[data-control="shared-hotbar-control"]').attr('title', locked ? 'General Hotbar' : 'Shared Hotbar');
    $('li[data-control="shared-hotbar-control"]').find(':first-child').remove();
    $('li[data-control="shared-hotbar-control"]').prepend("<i class=\"fas fa-".concat(locked ? 'lock' : 'fire', "\"></i>"));

    return !locked;
  }

  // UI STUFF

  function onGetSceneControlButtons(controls) {
    var isLocked = game.user.getFlag('may', 'shared-hotbar.locked');

    controls.push({
      name: 'shared-hotbar-control',
      title: !isLocked ? 'General Hotbar' : 'Shared Hotbar',
      // layer: "NotesLayer",
      icon: !isLocked ? 'fas fa-lock' : 'fas fa-fire',
      activeTool: 'select',
      tools: [
      {
        name: 'select',
        title: !isLocked ? 'Lock at General Hotbar' : 'Unlock Shared Hotbar',
        icon: !isLocked ? 'fas fa-lock' : 'fas fa-fire' }] });



  }

  function onRenderSceneControls() {
    $('li[data-control="shared-hotbar-control"]')[0].onclick = function () {
      var locked = onToggleSharedHotbar();
      ui.notifications.info("May \u2014 ".concat(locked ? 'Locking General Hotbar' : 'Unlocking Shared Hotbar'));
    };
  }

  var events = { onReady: onReady, onControlToken: onControlToken, onUpdateUser: onUpdateUser, onCreateToken: onCreateToken, onGetSceneControlButtons: onGetSceneControlButtons, onRenderSceneControls: onRenderSceneControls };

  /* global Hooks, $, game */

  var registerHooks = function registerHooks() {
    Hooks.on('ready', events.onReady);

    Hooks.on('createToken', events.onCreateToken);

    Hooks.on('controlToken', events.onControlToken);

    Hooks.on('updateUser', events.onUpdateUser);

    // Hooks.on('hotbarDrop', function () {
    //   console.log('hotbarDrop', arguments)
    // })

    Hooks.on('getSceneControlButtons', events.onGetSceneControlButtons);

    Hooks.on('renderSceneControls', events.onRenderSceneControls);
  };

  var sharedData = { registerHooks: registerHooks };

  var chroma = createCommonjsModule(function (module, exports) {
  /**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   */

  (function (global, factory) {
       module.exports = factory() ;
  }(commonjsGlobal, (function () {
      var limit = function (x, min, max) {
          if ( min === void 0 ) min=0;
          if ( max === void 0 ) max=1;

          return x < min ? min : x > max ? max : x;
      };

      var clip_rgb = function (rgb) {
          rgb._clipped = false;
          rgb._unclipped = rgb.slice(0);
          for (var i=0; i<=3; i++) {
              if (i < 3) {
                  if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                  rgb[i] = limit(rgb[i], 0, 255);
              } else if (i === 3) {
                  rgb[i] = limit(rgb[i], 0, 1);
              }
          }
          return rgb;
      };

      // ported from jQuery's $.type
      var classToType = {};
      for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
          var name = list[i];

          classToType[("[object " + name + "]")] = name.toLowerCase();
      }
      var type = function(obj) {
          return classToType[Object.prototype.toString.call(obj)] || "object";
      };

      var unpack = function (args, keyOrder) {
          if ( keyOrder === void 0 ) keyOrder=null;

      	// if called with more than 3 arguments, we return the arguments
          if (args.length >= 3) { return Array.prototype.slice.call(args); }
          // with less than 3 args we check if first arg is object
          // and use the keyOrder string to extract and sort properties
      	if (type(args[0]) == 'object' && keyOrder) {
      		return keyOrder.split('')
      			.filter(function (k) { return args[0][k] !== undefined; })
      			.map(function (k) { return args[0][k]; });
      	}
      	// otherwise we just return the first argument
      	// (which we suppose is an array of args)
          return args[0];
      };

      var last = function (args) {
          if (args.length < 2) { return null; }
          var l = args.length-1;
          if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
          return null;
      };

      var PI = Math.PI;

      var utils = {
      	clip_rgb: clip_rgb,
      	limit: limit,
      	type: type,
      	unpack: unpack,
      	last: last,
      	PI: PI,
      	TWOPI: PI*2,
      	PITHIRD: PI/3,
      	DEG2RAD: PI / 180,
      	RAD2DEG: 180 / PI
      };

      var input = {
      	format: {},
      	autodetect: []
      };

      var last$1 = utils.last;
      var clip_rgb$1 = utils.clip_rgb;
      var type$1 = utils.type;


      var Color = function Color() {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var me = this;
          if (type$1(args[0]) === 'object' &&
              args[0].constructor &&
              args[0].constructor === this.constructor) {
              // the argument is already a Color instance
              return args[0];
          }

          // last argument could be the mode
          var mode = last$1(args);
          var autodetect = false;

          if (!mode) {
              autodetect = true;
              if (!input.sorted) {
                  input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                  input.sorted = true;
              }
              // auto-detect format
              for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                  var chk = list[i];

                  mode = chk.test.apply(chk, args);
                  if (mode) { break; }
              }
          }

          if (input.format[mode]) {
              var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
              me._rgb = clip_rgb$1(rgb);
          } else {
              throw new Error('unknown format: '+args);
          }

          // add alpha channel
          if (me._rgb.length === 3) { me._rgb.push(1); }
      };

      Color.prototype.toString = function toString () {
          if (type$1(this.hex) == 'function') { return this.hex(); }
          return ("[" + (this._rgb.join(',')) + "]");
      };

      var Color_1 = Color;

      var chroma = function () {
      	var args = [], len = arguments.length;
      	while ( len-- ) args[ len ] = arguments[ len ];

      	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
      };

      chroma.Color = Color_1;
      chroma.version = '2.1.0';

      var chroma_1 = chroma;

      var unpack$1 = utils.unpack;
      var max = Math.max;

      var rgb2cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$1(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r = r / 255;
          g = g / 255;
          b = b / 255;
          var k = 1 - max(r,max(g,b));
          var f = k < 1 ? 1 / (1-k) : 0;
          var c = (1-r-k) * f;
          var m = (1-g-k) * f;
          var y = (1-b-k) * f;
          return [c,m,y,k];
      };

      var rgb2cmyk_1 = rgb2cmyk;

      var unpack$2 = utils.unpack;

      var cmyk2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$2(args, 'cmyk');
          var c = args[0];
          var m = args[1];
          var y = args[2];
          var k = args[3];
          var alpha = args.length > 4 ? args[4] : 1;
          if (k === 1) { return [0,0,0,alpha]; }
          return [
              c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
              m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
              y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
              alpha
          ];
      };

      var cmyk2rgb_1 = cmyk2rgb;

      var unpack$3 = utils.unpack;
      var type$2 = utils.type;



      Color_1.prototype.cmyk = function() {
          return rgb2cmyk_1(this._rgb);
      };

      chroma_1.cmyk = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
      };

      input.format.cmyk = cmyk2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$3(args, 'cmyk');
              if (type$2(args) === 'array' && args.length === 4) {
                  return 'cmyk';
              }
          }
      });

      var unpack$4 = utils.unpack;
      var last$2 = utils.last;
      var rnd = function (a) { return Math.round(a*100)/100; };

      /*
       * supported arguments:
       * - hsl2css(h,s,l)
       * - hsl2css(h,s,l,a)
       * - hsl2css([h,s,l], mode)
       * - hsl2css([h,s,l,a], mode)
       * - hsl2css({h,s,l,a}, mode)
       */
      var hsl2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hsla = unpack$4(args, 'hsla');
          var mode = last$2(args) || 'lsa';
          hsla[0] = rnd(hsla[0] || 0);
          hsla[1] = rnd(hsla[1]*100) + '%';
          hsla[2] = rnd(hsla[2]*100) + '%';
          if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
              hsla[3] = hsla.length > 3 ? hsla[3] : 1;
              mode = 'hsla';
          } else {
              hsla.length = 3;
          }
          return (mode + "(" + (hsla.join(',')) + ")");
      };

      var hsl2css_1 = hsl2css;

      var unpack$5 = utils.unpack;

      /*
       * supported arguments:
       * - rgb2hsl(r,g,b)
       * - rgb2hsl(r,g,b,a)
       * - rgb2hsl([r,g,b])
       * - rgb2hsl([r,g,b,a])
       * - rgb2hsl({r,g,b,a})
       */
      var rgb2hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$5(args, 'rgba');
          var r = args[0];
          var g = args[1];
          var b = args[2];

          r /= 255;
          g /= 255;
          b /= 255;

          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);

          var l = (max + min) / 2;
          var s, h;

          if (max === min){
              s = 0;
              h = Number.NaN;
          } else {
              s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
          }

          if (r == max) { h = (g - b) / (max - min); }
          else if (g == max) { h = 2 + (b - r) / (max - min); }
          else if (b == max) { h = 4 + (r - g) / (max - min); }

          h *= 60;
          if (h < 0) { h += 360; }
          if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
          return [h,s,l];
      };

      var rgb2hsl_1 = rgb2hsl;

      var unpack$6 = utils.unpack;
      var last$3 = utils.last;


      var round = Math.round;

      /*
       * supported arguments:
       * - rgb2css(r,g,b)
       * - rgb2css(r,g,b,a)
       * - rgb2css([r,g,b], mode)
       * - rgb2css([r,g,b,a], mode)
       * - rgb2css({r,g,b,a}, mode)
       */
      var rgb2css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$6(args, 'rgba');
          var mode = last$3(args) || 'rgb';
          if (mode.substr(0,3) == 'hsl') {
              return hsl2css_1(rgb2hsl_1(rgba), mode);
          }
          rgba[0] = round(rgba[0]);
          rgba[1] = round(rgba[1]);
          rgba[2] = round(rgba[2]);
          if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
              rgba[3] = rgba.length > 3 ? rgba[3] : 1;
              mode = 'rgba';
          }
          return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
      };

      var rgb2css_1 = rgb2css;

      var unpack$7 = utils.unpack;
      var round$1 = Math.round;

      var hsl2rgb = function () {
          var assign;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$7(args, 'hsl');
          var h = args[0];
          var s = args[1];
          var l = args[2];
          var r,g,b;
          if (s === 0) {
              r = g = b = l*255;
          } else {
              var t3 = [0,0,0];
              var c = [0,0,0];
              var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
              var t1 = 2 * l - t2;
              var h_ = h / 360;
              t3[0] = h_ + 1/3;
              t3[1] = h_;
              t3[2] = h_ - 1/3;
              for (var i=0; i<3; i++) {
                  if (t3[i] < 0) { t3[i] += 1; }
                  if (t3[i] > 1) { t3[i] -= 1; }
                  if (6 * t3[i] < 1)
                      { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                  else if (2 * t3[i] < 1)
                      { c[i] = t2; }
                  else if (3 * t3[i] < 2)
                      { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                  else
                      { c[i] = t1; }
              }
              (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
          }
          if (args.length > 3) {
              // keep alpha channel
              return [r,g,b,args[3]];
          }
          return [r,g,b,1];
      };

      var hsl2rgb_1 = hsl2rgb;

      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

      var round$2 = Math.round;

      var css2rgb = function (css) {
          css = css.toLowerCase().trim();
          var m;

          if (input.format.named) {
              try {
                  return input.format.named(css);
              } catch (e) {
                  // eslint-disable-next-line
              }
          }

          // rgb(250,20,0)
          if ((m = css.match(RE_RGB))) {
              var rgb = m.slice(1,4);
              for (var i=0; i<3; i++) {
                  rgb[i] = +rgb[i];
              }
              rgb[3] = 1;  // default alpha
              return rgb;
          }

          // rgba(250,20,0,0.4)
          if ((m = css.match(RE_RGBA))) {
              var rgb$1 = m.slice(1,5);
              for (var i$1=0; i$1<4; i$1++) {
                  rgb$1[i$1] = +rgb$1[i$1];
              }
              return rgb$1;
          }

          // rgb(100%,0%,0%)
          if ((m = css.match(RE_RGB_PCT))) {
              var rgb$2 = m.slice(1,4);
              for (var i$2=0; i$2<3; i$2++) {
                  rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
              }
              rgb$2[3] = 1;  // default alpha
              return rgb$2;
          }

          // rgba(100%,0%,0%,0.4)
          if ((m = css.match(RE_RGBA_PCT))) {
              var rgb$3 = m.slice(1,5);
              for (var i$3=0; i$3<3; i$3++) {
                  rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
              }
              rgb$3[3] = +rgb$3[3];
              return rgb$3;
          }

          // hsl(0,100%,50%)
          if ((m = css.match(RE_HSL))) {
              var hsl = m.slice(1,4);
              hsl[1] *= 0.01;
              hsl[2] *= 0.01;
              var rgb$4 = hsl2rgb_1(hsl);
              rgb$4[3] = 1;
              return rgb$4;
          }

          // hsla(0,100%,50%,0.5)
          if ((m = css.match(RE_HSLA))) {
              var hsl$1 = m.slice(1,4);
              hsl$1[1] *= 0.01;
              hsl$1[2] *= 0.01;
              var rgb$5 = hsl2rgb_1(hsl$1);
              rgb$5[3] = +m[4];  // default alpha = 1
              return rgb$5;
          }
      };

      css2rgb.test = function (s) {
          return RE_RGB.test(s) ||
              RE_RGBA.test(s) ||
              RE_RGB_PCT.test(s) ||
              RE_RGBA_PCT.test(s) ||
              RE_HSL.test(s) ||
              RE_HSLA.test(s);
      };

      var css2rgb_1 = css2rgb;

      var type$3 = utils.type;




      Color_1.prototype.css = function(mode) {
          return rgb2css_1(this._rgb, mode);
      };

      chroma_1.css = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
      };

      input.format.css = css2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                  return 'css';
              }
          }
      });

      var unpack$8 = utils.unpack;

      input.format.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$8(args, 'rgba');
          rgb[0] *= 255;
          rgb[1] *= 255;
          rgb[2] *= 255;
          return rgb;
      };

      chroma_1.gl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
      };

      Color_1.prototype.gl = function() {
          var rgb = this._rgb;
          return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
      };

      var unpack$9 = utils.unpack;

      var rgb2hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$9(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);
          var delta = max - min;
          var c = delta * 100 / 255;
          var _g = min / (255 - delta) * 100;
          var h;
          if (delta === 0) {
              h = Number.NaN;
          } else {
              if (r === max) { h = (g - b) / delta; }
              if (g === max) { h = 2+(b - r) / delta; }
              if (b === max) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, c, _g];
      };

      var rgb2hcg_1 = rgb2hcg;

      var unpack$a = utils.unpack;
      var floor = Math.floor;

      /*
       * this is basically just HSV with some minor tweaks
       *
       * hue.. [0..360]
       * chroma .. [0..1]
       * grayness .. [0..1]
       */

      var hcg2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$a(args, 'hcg');
          var h = args[0];
          var c = args[1];
          var _g = args[2];
          var r,g,b;
          _g = _g * 255;
          var _c = c * 255;
          if (c === 0) {
              r = g = b = _g;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;
              var i = floor(h);
              var f = h - i;
              var p = _g * (1 - c);
              var q = p + _c * (1 - f);
              var t = p + _c * f;
              var v = p + _c;
              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var hcg2rgb_1 = hcg2rgb;

      var unpack$b = utils.unpack;
      var type$4 = utils.type;






      Color_1.prototype.hcg = function() {
          return rgb2hcg_1(this._rgb);
      };

      chroma_1.hcg = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
      };

      input.format.hcg = hcg2rgb_1;

      input.autodetect.push({
          p: 1,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$b(args, 'hcg');
              if (type$4(args) === 'array' && args.length === 3) {
                  return 'hcg';
              }
          }
      });

      var unpack$c = utils.unpack;
      var last$4 = utils.last;
      var round$3 = Math.round;

      var rgb2hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$c(args, 'rgba');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var a = ref[3];
          var mode = last$4(args) || 'auto';
          if (a === undefined) { a = 1; }
          if (mode === 'auto') {
              mode = a < 1 ? 'rgba' : 'rgb';
          }
          r = round$3(r);
          g = round$3(g);
          b = round$3(b);
          var u = r << 16 | g << 8 | b;
          var str = "000000" + u.toString(16); //#.toUpperCase();
          str = str.substr(str.length - 6);
          var hxa = '0' + round$3(a * 255).toString(16);
          hxa = hxa.substr(hxa.length - 2);
          switch (mode.toLowerCase()) {
              case 'rgba': return ("#" + str + hxa);
              case 'argb': return ("#" + hxa + str);
              default: return ("#" + str);
          }
      };

      var rgb2hex_1 = rgb2hex;

      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

      var hex2rgb = function (hex) {
          if (hex.match(RE_HEX)) {
              // remove optional leading #
              if (hex.length === 4 || hex.length === 7) {
                  hex = hex.substr(1);
              }
              // expand short-notation to full six-digit
              if (hex.length === 3) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
              }
              var u = parseInt(hex, 16);
              var r = u >> 16;
              var g = u >> 8 & 0xFF;
              var b = u & 0xFF;
              return [r,g,b,1];
          }

          // match rgba hex format, eg #FF000077
          if (hex.match(RE_HEXA)) {
              if (hex.length === 5 || hex.length === 9) {
                  // remove optional leading #
                  hex = hex.substr(1);
              }
              // expand short-notation to full eight-digit
              if (hex.length === 4) {
                  hex = hex.split('');
                  hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
              }
              var u$1 = parseInt(hex, 16);
              var r$1 = u$1 >> 24 & 0xFF;
              var g$1 = u$1 >> 16 & 0xFF;
              var b$1 = u$1 >> 8 & 0xFF;
              var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
              return [r$1,g$1,b$1,a];
          }

          // we used to check for css colors here
          // if _input.css? and rgb = _input.css hex
          //     return rgb

          throw new Error(("unknown hex color: " + hex));
      };

      var hex2rgb_1 = hex2rgb;

      var type$5 = utils.type;




      Color_1.prototype.hex = function(mode) {
          return rgb2hex_1(this._rgb, mode);
      };

      chroma_1.hex = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
      };

      input.format.hex = hex2rgb_1;
      input.autodetect.push({
          p: 4,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                  return 'hex';
              }
          }
      });

      var unpack$d = utils.unpack;
      var TWOPI = utils.TWOPI;
      var min = Math.min;
      var sqrt = Math.sqrt;
      var acos = Math.acos;

      var rgb2hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
          */
          var ref = unpack$d(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          r /= 255;
          g /= 255;
          b /= 255;
          var h;
          var min_ = min(r,g,b);
          var i = (r+g+b) / 3;
          var s = i > 0 ? 1 - min_/i : 0;
          if (s === 0) {
              h = NaN;
          } else {
              h = ((r-g)+(r-b)) / 2;
              h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
              h = acos(h);
              if (b > g) {
                  h = TWOPI - h;
              }
              h /= TWOPI;
          }
          return [h*360,s,i];
      };

      var rgb2hsi_1 = rgb2hsi;

      var unpack$e = utils.unpack;
      var limit$1 = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos = Math.cos;

      /*
       * hue [0..360]
       * saturation [0..1]
       * intensity [0..1]
       */
      var hsi2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          borrowed from here:
          http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
          */
          args = unpack$e(args, 'hsi');
          var h = args[0];
          var s = args[1];
          var i = args[2];
          var r,g,b;

          if (isNaN(h)) { h = 0; }
          if (isNaN(s)) { s = 0; }
          // normalize hue
          if (h > 360) { h -= 360; }
          if (h < 0) { h += 360; }
          h /= 360;
          if (h < 1/3) {
              b = (1-s)/3;
              r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              g = 1 - (b+r);
          } else if (h < 2/3) {
              h -= 1/3;
              r = (1-s)/3;
              g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              b = 1 - (r+g);
          } else {
              h -= 2/3;
              g = (1-s)/3;
              b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
              r = 1 - (g+b);
          }
          r = limit$1(i*r*3);
          g = limit$1(i*g*3);
          b = limit$1(i*b*3);
          return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
      };

      var hsi2rgb_1 = hsi2rgb;

      var unpack$f = utils.unpack;
      var type$6 = utils.type;






      Color_1.prototype.hsi = function() {
          return rgb2hsi_1(this._rgb);
      };

      chroma_1.hsi = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
      };

      input.format.hsi = hsi2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$f(args, 'hsi');
              if (type$6(args) === 'array' && args.length === 3) {
                  return 'hsi';
              }
          }
      });

      var unpack$g = utils.unpack;
      var type$7 = utils.type;






      Color_1.prototype.hsl = function() {
          return rgb2hsl_1(this._rgb);
      };

      chroma_1.hsl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
      };

      input.format.hsl = hsl2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$g(args, 'hsl');
              if (type$7(args) === 'array' && args.length === 3) {
                  return 'hsl';
              }
          }
      });

      var unpack$h = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;

      /*
       * supported arguments:
       * - rgb2hsv(r,g,b)
       * - rgb2hsv([r,g,b])
       * - rgb2hsv({r,g,b})
       */
      var rgb2hsl$1 = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$h(args, 'rgb');
          var r = args[0];
          var g = args[1];
          var b = args[2];
          var min_ = min$1(r, g, b);
          var max_ = max$1(r, g, b);
          var delta = max_ - min_;
          var h,s,v;
          v = max_ / 255.0;
          if (max_ === 0) {
              h = Number.NaN;
              s = 0;
          } else {
              s = delta / max_;
              if (r === max_) { h = (g - b) / delta; }
              if (g === max_) { h = 2+(b - r) / delta; }
              if (b === max_) { h = 4+(r - g) / delta; }
              h *= 60;
              if (h < 0) { h += 360; }
          }
          return [h, s, v]
      };

      var rgb2hsv = rgb2hsl$1;

      var unpack$i = utils.unpack;
      var floor$1 = Math.floor;

      var hsv2rgb = function () {
          var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];
          args = unpack$i(args, 'hsv');
          var h = args[0];
          var s = args[1];
          var v = args[2];
          var r,g,b;
          v *= 255;
          if (s === 0) {
              r = g = b = v;
          } else {
              if (h === 360) { h = 0; }
              if (h > 360) { h -= 360; }
              if (h < 0) { h += 360; }
              h /= 60;

              var i = floor$1(h);
              var f = h - i;
              var p = v * (1 - s);
              var q = v * (1 - s * f);
              var t = v * (1 - s * (1 - f));

              switch (i) {
                  case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                  case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                  case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                  case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                  case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                  case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
              }
          }
          return [r,g,b,args.length > 3?args[3]:1];
      };

      var hsv2rgb_1 = hsv2rgb;

      var unpack$j = utils.unpack;
      var type$8 = utils.type;






      Color_1.prototype.hsv = function() {
          return rgb2hsv(this._rgb);
      };

      chroma_1.hsv = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
      };

      input.format.hsv = hsv2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$j(args, 'hsv');
              if (type$8(args) === 'array' && args.length === 3) {
                  return 'hsv';
              }
          }
      });

      var labConstants = {
          // Corresponds roughly to RGB brighter/darker
          Kn: 18,

          // D65 standard referent
          Xn: 0.950470,
          Yn: 1,
          Zn: 1.088830,

          t0: 0.137931034,  // 4 / 29
          t1: 0.206896552,  // 6 / 29
          t2: 0.12841855,   // 3 * t1 * t1
          t3: 0.008856452,  // t1 * t1 * t1
      };

      var unpack$k = utils.unpack;
      var pow = Math.pow;

      var rgb2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$k(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2xyz(r,g,b);
          var x = ref$1[0];
          var y = ref$1[1];
          var z = ref$1[2];
          var l = 116 * y - 16;
          return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
      };

      var rgb_xyz = function (r) {
          if ((r /= 255) <= 0.04045) { return r / 12.92; }
          return pow((r + 0.055) / 1.055, 2.4);
      };

      var xyz_lab = function (t) {
          if (t > labConstants.t3) { return pow(t, 1 / 3); }
          return t / labConstants.t2 + labConstants.t0;
      };

      var rgb2xyz = function (r,g,b) {
          r = rgb_xyz(r);
          g = rgb_xyz(g);
          b = rgb_xyz(b);
          var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
          var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
          var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
          return [x,y,z];
      };

      var rgb2lab_1 = rgb2lab;

      var unpack$l = utils.unpack;
      var pow$1 = Math.pow;

      /*
       * L* [0..100]
       * a [-100..100]
       * b [-100..100]
       */
      var lab2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$l(args, 'lab');
          var l = args[0];
          var a = args[1];
          var b = args[2];
          var x,y,z, r,g,b_;

          y = (l + 16) / 116;
          x = isNaN(a) ? y : y + a / 500;
          z = isNaN(b) ? y : y - b / 200;

          y = labConstants.Yn * lab_xyz(y);
          x = labConstants.Xn * lab_xyz(x);
          z = labConstants.Zn * lab_xyz(z);

          r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
          g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
          b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

          return [r,g,b_,args.length > 3 ? args[3] : 1];
      };

      var xyz_rgb = function (r) {
          return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
      };

      var lab_xyz = function (t) {
          return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
      };

      var lab2rgb_1 = lab2rgb;

      var unpack$m = utils.unpack;
      var type$9 = utils.type;






      Color_1.prototype.lab = function() {
          return rgb2lab_1(this._rgb);
      };

      chroma_1.lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
      };

      input.format.lab = lab2rgb_1;

      input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$m(args, 'lab');
              if (type$9(args) === 'array' && args.length === 3) {
                  return 'lab';
              }
          }
      });

      var unpack$n = utils.unpack;
      var RAD2DEG = utils.RAD2DEG;
      var sqrt$1 = Math.sqrt;
      var atan2 = Math.atan2;
      var round$4 = Math.round;

      var lab2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$n(args, 'lab');
          var l = ref[0];
          var a = ref[1];
          var b = ref[2];
          var c = sqrt$1(a * a + b * b);
          var h = (atan2(b, a) * RAD2DEG + 360) % 360;
          if (round$4(c*10000) === 0) { h = Number.NaN; }
          return [l, c, h];
      };

      var lab2lch_1 = lab2lch;

      var unpack$o = utils.unpack;



      var rgb2lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$o(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          var ref$1 = rgb2lab_1(r,g,b);
          var l = ref$1[0];
          var a = ref$1[1];
          var b_ = ref$1[2];
          return lab2lch_1(l,a,b_);
      };

      var rgb2lch_1 = rgb2lch;

      var unpack$p = utils.unpack;
      var DEG2RAD = utils.DEG2RAD;
      var sin = Math.sin;
      var cos$1 = Math.cos;

      var lch2lab = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          /*
          Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
          These formulas were invented by David Dalrymple to obtain maximum contrast without going
          out of gamut if the parameters are in the range 0-1.

          A saturation multiplier was added by Gregor Aisch
          */
          var ref = unpack$p(args, 'lch');
          var l = ref[0];
          var c = ref[1];
          var h = ref[2];
          if (isNaN(h)) { h = 0; }
          h = h * DEG2RAD;
          return [l, cos$1(h) * c, sin(h) * c]
      };

      var lch2lab_1 = lch2lab;

      var unpack$q = utils.unpack;



      var lch2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          args = unpack$q(args, 'lch');
          var l = args[0];
          var c = args[1];
          var h = args[2];
          var ref = lch2lab_1 (l,c,h);
          var L = ref[0];
          var a = ref[1];
          var b_ = ref[2];
          var ref$1 = lab2rgb_1 (L,a,b_);
          var r = ref$1[0];
          var g = ref$1[1];
          var b = ref$1[2];
          return [r, g, b, args.length > 3 ? args[3] : 1];
      };

      var lch2rgb_1 = lch2rgb;

      var unpack$r = utils.unpack;


      var hcl2rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var hcl = unpack$r(args, 'hcl').reverse();
          return lch2rgb_1.apply(void 0, hcl);
      };

      var hcl2rgb_1 = hcl2rgb;

      var unpack$s = utils.unpack;
      var type$a = utils.type;






      Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
      Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

      chroma_1.lch = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
      };
      chroma_1.hcl = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
      };

      input.format.lch = lch2rgb_1;
      input.format.hcl = hcl2rgb_1;

      ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
          p: 2,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$s(args, m);
              if (type$a(args) === 'array' && args.length === 3) {
                  return m;
              }
          }
      }); });

      /**
      	X11 color names

      	http://www.w3.org/TR/css3-color/#svg-color
      */

      var w3cx11 = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflower: '#6495ed',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkgrey: '#a9a9a9',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkslategrey: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dimgrey: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          gold: '#ffd700',
          goldenrod: '#daa520',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          grey: '#808080',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          indianred: '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          laserlemon: '#ffff54',
          lavender: '#e6e6fa',
          lavenderblush: '#fff0f5',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrod: '#fafad2',
          lightgoldenrodyellow: '#fafad2',
          lightgray: '#d3d3d3',
          lightgreen: '#90ee90',
          lightgrey: '#d3d3d3',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightslategrey: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          maroon2: '#7f0000',
          maroon3: '#b03060',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370db',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#db7093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          purple2: '#7f007f',
          purple3: '#a020f0',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          slategrey: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32'
      };

      var w3cx11_1 = w3cx11;

      var type$b = utils.type;





      Color_1.prototype.name = function() {
          var hex = rgb2hex_1(this._rgb, 'rgb');
          for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
              var n = list[i];

              if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
          }
          return hex;
      };

      input.format.named = function (name) {
          name = name.toLowerCase();
          if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
          throw new Error('unknown color name: '+name);
      };

      input.autodetect.push({
          p: 5,
          test: function (h) {
              var rest = [], len = arguments.length - 1;
              while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

              if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                  return 'named';
              }
          }
      });

      var unpack$t = utils.unpack;

      var rgb2num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var ref = unpack$t(args, 'rgb');
          var r = ref[0];
          var g = ref[1];
          var b = ref[2];
          return (r << 16) + (g << 8) + b;
      };

      var rgb2num_1 = rgb2num;

      var type$c = utils.type;

      var num2rgb = function (num) {
          if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
              var r = num >> 16;
              var g = (num >> 8) & 0xFF;
              var b = num & 0xFF;
              return [r,g,b,1];
          }
          throw new Error("unknown num color: "+num);
      };

      var num2rgb_1 = num2rgb;

      var type$d = utils.type;



      Color_1.prototype.num = function() {
          return rgb2num_1(this._rgb);
      };

      chroma_1.num = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
      };

      input.format.num = num2rgb_1;

      input.autodetect.push({
          p: 5,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                  return 'num';
              }
          }
      });

      var unpack$u = utils.unpack;
      var type$e = utils.type;
      var round$5 = Math.round;

      Color_1.prototype.rgb = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          if (rnd === false) { return this._rgb.slice(0,3); }
          return this._rgb.slice(0,3).map(round$5);
      };

      Color_1.prototype.rgba = function(rnd) {
          if ( rnd === void 0 ) rnd=true;

          return this._rgb.slice(0,4).map(function (v,i) {
              return i<3 ? (rnd === false ? v : round$5(v)) : v;
          });
      };

      chroma_1.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
      };

      input.format.rgb = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgba = unpack$u(args, 'rgba');
          if (rgba[3] === undefined) { rgba[3] = 1; }
          return rgba;
      };

      input.autodetect.push({
          p: 3,
          test: function () {
              var args = [], len = arguments.length;
              while ( len-- ) args[ len ] = arguments[ len ];

              args = unpack$u(args, 'rgba');
              if (type$e(args) === 'array' && (args.length === 3 ||
                  args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                  return 'rgb';
              }
          }
      });

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       */

      var log = Math.log;

      var temperature2rgb = function (kelvin) {
          var temp = kelvin / 100;
          var r,g,b;
          if (temp < 66) {
              r = 255;
              g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
              b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
          } else {
              r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
              g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
              b = 255;
          }
          return [r,g,b,1];
      };

      var temperature2rgb_1 = temperature2rgb;

      /*
       * Based on implementation by Neil Bartlett
       * https://github.com/neilbartlett/color-temperature
       **/


      var unpack$v = utils.unpack;
      var round$6 = Math.round;

      var rgb2temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var rgb = unpack$v(args, 'rgb');
          var r = rgb[0], b = rgb[2];
          var minTemp = 1000;
          var maxTemp = 40000;
          var eps = 0.4;
          var temp;
          while (maxTemp - minTemp > eps) {
              temp = (maxTemp + minTemp) * 0.5;
              var rgb$1 = temperature2rgb_1(temp);
              if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                  maxTemp = temp;
              } else {
                  minTemp = temp;
              }
          }
          return round$6(temp);
      };

      var rgb2temperature_1 = rgb2temperature;

      Color_1.prototype.temp =
      Color_1.prototype.kelvin =
      Color_1.prototype.temperature = function() {
          return rgb2temperature_1(this._rgb);
      };

      chroma_1.temp =
      chroma_1.kelvin =
      chroma_1.temperature = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
      };

      input.format.temp =
      input.format.kelvin =
      input.format.temperature = temperature2rgb_1;

      var type$f = utils.type;

      Color_1.prototype.alpha = function(a, mutate) {
          if ( mutate === void 0 ) mutate=false;

          if (a !== undefined && type$f(a) === 'number') {
              if (mutate) {
                  this._rgb[3] = a;
                  return this;
              }
              return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
          }
          return this._rgb[3];
      };

      Color_1.prototype.clipped = function() {
          return this._rgb._clipped || false;
      };

      Color_1.prototype.darken = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lab = me.lab();
      	lab[0] -= labConstants.Kn * amount;
      	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
      };

      Color_1.prototype.brighten = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.darken(-amount);
      };

      Color_1.prototype.darker = Color_1.prototype.darken;
      Color_1.prototype.brighter = Color_1.prototype.brighten;

      Color_1.prototype.get = function(mc) {
          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) { return src[i]; }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var type$g = utils.type;
      var pow$2 = Math.pow;

      var EPS = 1e-7;
      var MAX_ITER = 20;

      Color_1.prototype.luminance = function(lum) {
          if (lum !== undefined && type$g(lum) === 'number') {
              if (lum === 0) {
                  // return pure black
                  return new Color_1([0,0,0,this._rgb[3]], 'rgb');
              }
              if (lum === 1) {
                  // return pure white
                  return new Color_1([255,255,255,this._rgb[3]], 'rgb');
              }
              // compute new color using...
              var cur_lum = this.luminance();
              var mode = 'rgb';
              var max_iter = MAX_ITER;

              var test = function (low, high) {
                  var mid = low.interpolate(high, 0.5, mode);
                  var lm = mid.luminance();
                  if (Math.abs(lum - lm) < EPS || !max_iter--) {
                      // close enough
                      return mid;
                  }
                  return lm > lum ? test(low, mid) : test(mid, high);
              };

              var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
              return new Color_1(rgb.concat( [this._rgb[3]]));
          }
          return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
      };


      var rgb2luminance = function (r,g,b) {
          // relative luminance
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
          r = luminance_x(r);
          g = luminance_x(g);
          b = luminance_x(b);
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };

      var luminance_x = function (x) {
          x /= 255;
          return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
      };

      var interpolator = {};

      var type$h = utils.type;


      var mix = function (col1, col2, f) {
          if ( f === void 0 ) f=0.5;
          var rest = [], len = arguments.length - 3;
          while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

          var mode = rest[0] || 'lrgb';
          if (!interpolator[mode] && !rest.length) {
              // fall back to the first supported mode
              mode = Object.keys(interpolator)[0];
          }
          if (!interpolator[mode]) {
              throw new Error(("interpolation mode " + mode + " is not defined"));
          }
          if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
          if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
          return interpolator[mode](col1, col2, f)
              .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      };

      Color_1.prototype.mix =
      Color_1.prototype.interpolate = function(col2, f) {
      	if ( f === void 0 ) f=0.5;
      	var rest = [], len = arguments.length - 2;
      	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

      	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
      };

      Color_1.prototype.premultiply = function(mutate) {
      	if ( mutate === void 0 ) mutate=false;

      	var rgb = this._rgb;
      	var a = rgb[3];
      	if (mutate) {
      		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
      		return this;
      	} else {
      		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
      	}
      };

      Color_1.prototype.saturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	var me = this;
      	var lch = me.lch();
      	lch[1] += labConstants.Kn * amount;
      	if (lch[1] < 0) { lch[1] = 0; }
      	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
      };

      Color_1.prototype.desaturate = function(amount) {
      	if ( amount === void 0 ) amount=1;

      	return this.saturate(-amount);
      };

      var type$i = utils.type;

      Color_1.prototype.set = function(mc, value, mutate) {
          if ( mutate === void 0 ) mutate=false;

          var ref = mc.split('.');
          var mode = ref[0];
          var channel = ref[1];
          var src = this[mode]();
          if (channel) {
              var i = mode.indexOf(channel);
              if (i > -1) {
                  if (type$i(value) == 'string') {
                      switch(value.charAt(0)) {
                          case '+': src[i] += +value; break;
                          case '-': src[i] += +value; break;
                          case '*': src[i] *= +(value.substr(1)); break;
                          case '/': src[i] /= +(value.substr(1)); break;
                          default: src[i] = +value;
                      }
                  } else if (type$i(value) === 'number') {
                      src[i] = value;
                  } else {
                      throw new Error("unsupported value for Color.set");
                  }
                  var out = new Color_1(src, mode);
                  if (mutate) {
                      this._rgb = out._rgb;
                      return this;
                  }
                  return out;
              }
              throw new Error(("unknown channel " + channel + " in mode " + mode));
          } else {
              return src;
          }
      };

      var rgb$1 = function (col1, col2, f) {
          var xyz0 = col1._rgb;
          var xyz1 = col2._rgb;
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'rgb'
          )
      };

      // register interpolator
      interpolator.rgb = rgb$1;

      var sqrt$2 = Math.sqrt;
      var pow$3 = Math.pow;

      var lrgb = function (col1, col2, f) {
          var ref = col1._rgb;
          var x1 = ref[0];
          var y1 = ref[1];
          var z1 = ref[2];
          var ref$1 = col2._rgb;
          var x2 = ref$1[0];
          var y2 = ref$1[1];
          var z2 = ref$1[2];
          return new Color_1(
              sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
              sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
              sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
              'rgb'
          )
      };

      // register interpolator
      interpolator.lrgb = lrgb;

      var lab$1 = function (col1, col2, f) {
          var xyz0 = col1.lab();
          var xyz1 = col2.lab();
          return new Color_1(
              xyz0[0] + f * (xyz1[0]-xyz0[0]),
              xyz0[1] + f * (xyz1[1]-xyz0[1]),
              xyz0[2] + f * (xyz1[2]-xyz0[2]),
              'lab'
          )
      };

      // register interpolator
      interpolator.lab = lab$1;

      var _hsx = function (col1, col2, f, m) {
          var assign, assign$1;

          var xyz0, xyz1;
          if (m === 'hsl') {
              xyz0 = col1.hsl();
              xyz1 = col2.hsl();
          } else if (m === 'hsv') {
              xyz0 = col1.hsv();
              xyz1 = col2.hsv();
          } else if (m === 'hcg') {
              xyz0 = col1.hcg();
              xyz1 = col2.hcg();
          } else if (m === 'hsi') {
              xyz0 = col1.hsi();
              xyz1 = col2.hsi();
          } else if (m === 'lch' || m === 'hcl') {
              m = 'hcl';
              xyz0 = col1.hcl();
              xyz1 = col2.hcl();
          }

          var hue0, hue1, sat0, sat1, lbv0, lbv1;
          if (m.substr(0, 1) === 'h') {
              (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
              (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
          }

          var sat, hue, lbv, dh;

          if (!isNaN(hue0) && !isNaN(hue1)) {
              // both colors have hue
              if (hue1 > hue0 && hue1 - hue0 > 180) {
                  dh = hue1-(hue0+360);
              } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                  dh = hue1+360-hue0;
              } else {
                  dh = hue1 - hue0;
              }
              hue = hue0 + f * dh;
          } else if (!isNaN(hue0)) {
              hue = hue0;
              if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
          } else if (!isNaN(hue1)) {
              hue = hue1;
              if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
          } else {
              hue = Number.NaN;
          }

          if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
          lbv = lbv0 + f * (lbv1-lbv0);
          return new Color_1([hue, sat, lbv], m);
      };

      var lch$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'lch');
      };

      // register interpolator
      interpolator.lch = lch$1;
      interpolator.hcl = lch$1;

      var num$1 = function (col1, col2, f) {
          var c1 = col1.num();
          var c2 = col2.num();
          return new Color_1(c1 + f * (c2-c1), 'num')
      };

      // register interpolator
      interpolator.num = num$1;

      var hcg$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hcg');
      };

      // register interpolator
      interpolator.hcg = hcg$1;

      var hsi$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsi');
      };

      // register interpolator
      interpolator.hsi = hsi$1;

      var hsl$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsl');
      };

      // register interpolator
      interpolator.hsl = hsl$1;

      var hsv$1 = function (col1, col2, f) {
      	return _hsx(col1, col2, f, 'hsv');
      };

      // register interpolator
      interpolator.hsv = hsv$1;

      var clip_rgb$2 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$3 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$1 = Math.sin;
      var atan2$1 = Math.atan2;

      var average = function (colors, mode, weights) {
          if ( mode === void 0 ) mode='lrgb';
          if ( weights === void 0 ) weights=null;

          var l = colors.length;
          if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
          // normalize weights
          var k = l / weights.reduce(function(a, b) { return a + b; });
          weights.forEach(function (w,i) { weights[i] *= k; });
          // convert colors to Color objects
          colors = colors.map(function (c) { return new Color_1(c); });
          if (mode === 'lrgb') {
              return _average_lrgb(colors, weights)
          }
          var first = colors.shift();
          var xyz = first.get(mode);
          var cnt = [];
          var dx = 0;
          var dy = 0;
          // initial color
          for (var i=0; i<xyz.length; i++) {
              xyz[i] = (xyz[i] || 0) * weights[0];
              cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
              if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                  var A = xyz[i] / 180 * PI$1;
                  dx += cos$2(A) * weights[0];
                  dy += sin$1(A) * weights[0];
              }
          }

          var alpha = first.alpha() * weights[0];
          colors.forEach(function (c,ci) {
              var xyz2 = c.get(mode);
              alpha += c.alpha() * weights[ci+1];
              for (var i=0; i<xyz.length; i++) {
                  if (!isNaN(xyz2[i])) {
                      cnt[i] += weights[ci+1];
                      if (mode.charAt(i) === 'h') {
                          var A = xyz2[i] / 180 * PI$1;
                          dx += cos$2(A) * weights[ci+1];
                          dy += sin$1(A) * weights[ci+1];
                      } else {
                          xyz[i] += xyz2[i] * weights[ci+1];
                      }
                  }
              }
          });

          for (var i$1=0; i$1<xyz.length; i$1++) {
              if (mode.charAt(i$1) === 'h') {
                  var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                  while (A$1 < 0) { A$1 += 360; }
                  while (A$1 >= 360) { A$1 -= 360; }
                  xyz[i$1] = A$1;
              } else {
                  xyz[i$1] = xyz[i$1]/cnt[i$1];
              }
          }
          alpha /= l;
          return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
      };


      var _average_lrgb = function (colors, weights) {
          var l = colors.length;
          var xyz = [0,0,0,0];
          for (var i=0; i < colors.length; i++) {
              var col = colors[i];
              var f = weights[i] / l;
              var rgb = col._rgb;
              xyz[0] += pow$4(rgb[0],2) * f;
              xyz[1] += pow$4(rgb[1],2) * f;
              xyz[2] += pow$4(rgb[2],2) * f;
              xyz[3] += rgb[3] * f;
          }
          xyz[0] = sqrt$3(xyz[0]);
          xyz[1] = sqrt$3(xyz[1]);
          xyz[2] = sqrt$3(xyz[2]);
          if (xyz[3] > 0.9999999) { xyz[3] = 1; }
          return new Color_1(clip_rgb$2(xyz));
      };

      // minimal multi-purpose interface

      // @requires utils color analyze


      var type$j = utils.type;

      var pow$5 = Math.pow;

      var scale = function(colors) {

          // constructor
          var _mode = 'rgb';
          var _nacol = chroma_1('#ccc');
          var _spread = 0;
          // const _fixed = false;
          var _domain = [0, 1];
          var _pos = [];
          var _padding = [0,0];
          var _classes = false;
          var _colors = [];
          var _out = false;
          var _min = 0;
          var _max = 1;
          var _correctLightness = false;
          var _colorCache = {};
          var _useCache = true;
          var _gamma = 1;

          // private methods

          var setColors = function(colors) {
              colors = colors || ['#fff', '#000'];
              if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                  chroma_1.brewer[colors.toLowerCase()]) {
                  colors = chroma_1.brewer[colors.toLowerCase()];
              }
              if (type$j(colors) === 'array') {
                  // handle single color
                  if (colors.length === 1) {
                      colors = [colors[0], colors[0]];
                  }
                  // make a copy of the colors
                  colors = colors.slice(0);
                  // convert to chroma classes
                  for (var c=0; c<colors.length; c++) {
                      colors[c] = chroma_1(colors[c]);
                  }
                  // auto-fill color position
                  _pos.length = 0;
                  for (var c$1=0; c$1<colors.length; c$1++) {
                      _pos.push(c$1/(colors.length-1));
                  }
              }
              resetCache();
              return _colors = colors;
          };

          var getClass = function(value) {
              if (_classes != null) {
                  var n = _classes.length-1;
                  var i = 0;
                  while (i < n && value >= _classes[i]) {
                      i++;
                  }
                  return i-1;
              }
              return 0;
          };

          var tMapLightness = function (t) { return t; };
          var tMapDomain = function (t) { return t; };

          // const classifyValue = function(value) {
          //     let val = value;
          //     if (_classes.length > 2) {
          //         const n = _classes.length-1;
          //         const i = getClass(value);
          //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
          //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
          //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
          //     }
          //     return val;
          // };

          var getColor = function(val, bypassMap) {
              var col, t;
              if (bypassMap == null) { bypassMap = false; }
              if (isNaN(val) || (val === null)) { return _nacol; }
              if (!bypassMap) {
                  if (_classes && (_classes.length > 2)) {
                      // find the class
                      var c = getClass(val);
                      t = c / (_classes.length-2);
                  } else if (_max !== _min) {
                      // just interpolate between min/max
                      t = (val - _min) / (_max - _min);
                  } else {
                      t = 1;
                  }
              } else {
                  t = val;
              }

              // domain map
              t = tMapDomain(t);

              if (!bypassMap) {
                  t = tMapLightness(t);  // lightness correction
              }

              if (_gamma !== 1) { t = pow$5(t, _gamma); }

              t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

              t = Math.min(1, Math.max(0, t));

              var k = Math.floor(t * 10000);

              if (_useCache && _colorCache[k]) {
                  col = _colorCache[k];
              } else {
                  if (type$j(_colors) === 'array') {
                      //for i in [0.._pos.length-1]
                      for (var i=0; i<_pos.length; i++) {
                          var p = _pos[i];
                          if (t <= p) {
                              col = _colors[i];
                              break;
                          }
                          if ((t >= p) && (i === (_pos.length-1))) {
                              col = _colors[i];
                              break;
                          }
                          if (t > p && t < _pos[i+1]) {
                              t = (t-p)/(_pos[i+1]-p);
                              col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                              break;
                          }
                      }
                  } else if (type$j(_colors) === 'function') {
                      col = _colors(t);
                  }
                  if (_useCache) { _colorCache[k] = col; }
              }
              return col;
          };

          var resetCache = function () { return _colorCache = {}; };

          setColors(colors);

          // public interface

          var f = function(v) {
              var c = chroma_1(getColor(v));
              if (_out && c[_out]) { return c[_out](); } else { return c; }
          };

          f.classes = function(classes) {
              if (classes != null) {
                  if (type$j(classes) === 'array') {
                      _classes = classes;
                      _domain = [classes[0], classes[classes.length-1]];
                  } else {
                      var d = chroma_1.analyze(_domain);
                      if (classes === 0) {
                          _classes = [d.min, d.max];
                      } else {
                          _classes = chroma_1.limits(d, 'e', classes);
                      }
                  }
                  return f;
              }
              return _classes;
          };


          f.domain = function(domain) {
              if (!arguments.length) {
                  return _domain;
              }
              _min = domain[0];
              _max = domain[domain.length-1];
              _pos = [];
              var k = _colors.length;
              if ((domain.length === k) && (_min !== _max)) {
                  // update positions
                  for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                      var d = list[i];

                    _pos.push((d-_min) / (_max-_min));
                  }
              } else {
                  for (var c=0; c<k; c++) {
                      _pos.push(c/(k-1));
                  }
                  if (domain.length > 2) {
                      // set domain map
                      var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                      var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                      if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                          tMapDomain = function (t) {
                              if (t <= 0 || t >= 1) { return t; }
                              var i = 0;
                              while (t >= tBreaks[i+1]) { i++; }
                              var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                              var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                              return out;
                          };
                      }

                  }
              }
              _domain = [_min, _max];
              return f;
          };

          f.mode = function(_m) {
              if (!arguments.length) {
                  return _mode;
              }
              _mode = _m;
              resetCache();
              return f;
          };

          f.range = function(colors, _pos) {
              setColors(colors);
              return f;
          };

          f.out = function(_o) {
              _out = _o;
              return f;
          };

          f.spread = function(val) {
              if (!arguments.length) {
                  return _spread;
              }
              _spread = val;
              return f;
          };

          f.correctLightness = function(v) {
              if (v == null) { v = true; }
              _correctLightness = v;
              resetCache();
              if (_correctLightness) {
                  tMapLightness = function(t) {
                      var L0 = getColor(0, true).lab()[0];
                      var L1 = getColor(1, true).lab()[0];
                      var pol = L0 > L1;
                      var L_actual = getColor(t, true).lab()[0];
                      var L_ideal = L0 + ((L1 - L0) * t);
                      var L_diff = L_actual - L_ideal;
                      var t0 = 0;
                      var t1 = 1;
                      var max_iter = 20;
                      while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                          (function() {
                              if (pol) { L_diff *= -1; }
                              if (L_diff < 0) {
                                  t0 = t;
                                  t += (t1 - t) * 0.5;
                              } else {
                                  t1 = t;
                                  t += (t0 - t) * 0.5;
                              }
                              L_actual = getColor(t, true).lab()[0];
                              return L_diff = L_actual - L_ideal;
                          })();
                      }
                      return t;
                  };
              } else {
                  tMapLightness = function (t) { return t; };
              }
              return f;
          };

          f.padding = function(p) {
              if (p != null) {
                  if (type$j(p) === 'number') {
                      p = [p,p];
                  }
                  _padding = p;
                  return f;
              } else {
                  return _padding;
              }
          };

          f.colors = function(numColors, out) {
              // If no arguments are given, return the original colors that were provided
              if (arguments.length < 2) { out = 'hex'; }
              var result = [];

              if (arguments.length === 0) {
                  result = _colors.slice(0);

              } else if (numColors === 1) {
                  result = [f(0.5)];

              } else if (numColors > 1) {
                  var dm = _domain[0];
                  var dd = _domain[1] - dm;
                  result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

              } else { // returns all colors based on the defined classes
                  colors = [];
                  var samples = [];
                  if (_classes && (_classes.length > 2)) {
                      for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                          samples.push((_classes[i-1]+_classes[i])*0.5);
                      }
                  } else {
                      samples = _domain;
                  }
                  result = samples.map(function (v) { return f(v); });
              }

              if (chroma_1[out]) {
                  result = result.map(function (c) { return c[out](); });
              }
              return result;
          };

          f.cache = function(c) {
              if (c != null) {
                  _useCache = c;
                  return f;
              } else {
                  return _useCache;
              }
          };

          f.gamma = function(g) {
              if (g != null) {
                  _gamma = g;
                  return f;
              } else {
                  return _gamma;
              }
          };

          f.nodata = function(d) {
              if (d != null) {
                  _nacol = chroma_1(d);
                  return f;
              } else {
                  return _nacol;
              }
          };

          return f;
      };

      function __range__(left, right, inclusive) {
        var range = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
          range.push(i);
        }
        return range;
      }

      //
      // interpolates between a set of colors uzing a bezier spline
      //

      // @requires utils lab




      var bezier = function(colors) {
          var assign, assign$1, assign$2;

          var I, lab0, lab1, lab2;
          colors = colors.map(function (c) { return new Color_1(c); });
          if (colors.length === 2) {
              // linear interpolation
              (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 3) {
              // quadratic bezier interpolation
              (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 4) {
              // cubic bezier interpolation
              var lab3;
              (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
              I = function(t) {
                  var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                  return new Color_1(lab, 'lab');
              };
          } else if (colors.length === 5) {
              var I0 = bezier(colors.slice(0, 3));
              var I1 = bezier(colors.slice(2, 5));
              I = function(t) {
                  if (t < 0.5) {
                      return I0(t*2);
                  } else {
                      return I1((t-0.5)*2);
                  }
              };
          }
          return I;
      };

      var bezier_1 = function (colors) {
          var f = bezier(colors);
          f.scale = function () { return scale(f); };
          return f;
      };

      /*
       * interpolates between a set of colors uzing a bezier spline
       * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
       */




      var blend = function (bottom, top, mode) {
          if (!blend[mode]) {
              throw new Error('unknown blend mode ' + mode);
          }
          return blend[mode](bottom, top);
      };

      var blend_f = function (f) { return function (bottom,top) {
              var c0 = chroma_1(top).rgb();
              var c1 = chroma_1(bottom).rgb();
              return chroma_1.rgb(f(c0, c1));
          }; };

      var each = function (f) { return function (c0, c1) {
              var out = [];
              out[0] = f(c0[0], c1[0]);
              out[1] = f(c0[1], c1[1]);
              out[2] = f(c0[2], c1[2]);
              return out;
          }; };

      var normal = function (a) { return a; };
      var multiply = function (a,b) { return a * b / 255; };
      var darken$1 = function (a,b) { return a > b ? b : a; };
      var lighten = function (a,b) { return a > b ? a : b; };
      var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
      var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
      var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
      var dodge = function (a,b) {
          if (a === 255) { return 255; }
          a = 255 * (b / 255) / (1 - a / 255);
          return a > 255 ? 255 : a
      };

      // # add = (a,b) ->
      // #     if (a + b > 255) then 255 else a + b

      blend.normal = blend_f(each(normal));
      blend.multiply = blend_f(each(multiply));
      blend.screen = blend_f(each(screen));
      blend.overlay = blend_f(each(overlay));
      blend.darken = blend_f(each(darken$1));
      blend.lighten = blend_f(each(lighten));
      blend.dodge = blend_f(each(dodge));
      blend.burn = blend_f(each(burn));
      // blend.add = blend_f(each(add));

      var blend_1 = blend;

      // cubehelix interpolation
      // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
      // http://astron-soc.in/bulletin/11June/289392011.pdf

      var type$k = utils.type;
      var clip_rgb$3 = utils.clip_rgb;
      var TWOPI$2 = utils.TWOPI;
      var pow$6 = Math.pow;
      var sin$2 = Math.sin;
      var cos$3 = Math.cos;


      var cubehelix = function(start, rotations, hue, gamma, lightness) {
          if ( start === void 0 ) start=300;
          if ( rotations === void 0 ) rotations=-1.5;
          if ( hue === void 0 ) hue=1;
          if ( gamma === void 0 ) gamma=1;
          if ( lightness === void 0 ) lightness=[0,1];

          var dh = 0, dl;
          if (type$k(lightness) === 'array') {
              dl = lightness[1] - lightness[0];
          } else {
              dl = 0;
              lightness = [lightness, lightness];
          }

          var f = function(fract) {
              var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
              var l = pow$6(lightness[0] + (dl * fract), gamma);
              var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
              var amp = (h * l * (1-l)) / 2;
              var cos_a = cos$3(a);
              var sin_a = sin$2(a);
              var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
              var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
              var b = l + (amp * (+1.97294 * cos_a));
              return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
          };

          f.start = function(s) {
              if ((s == null)) { return start; }
              start = s;
              return f;
          };

          f.rotations = function(r) {
              if ((r == null)) { return rotations; }
              rotations = r;
              return f;
          };

          f.gamma = function(g) {
              if ((g == null)) { return gamma; }
              gamma = g;
              return f;
          };

          f.hue = function(h) {
              if ((h == null)) { return hue; }
              hue = h;
              if (type$k(hue) === 'array') {
                  dh = hue[1] - hue[0];
                  if (dh === 0) { hue = hue[1]; }
              } else {
                  dh = 0;
              }
              return f;
          };

          f.lightness = function(h) {
              if ((h == null)) { return lightness; }
              if (type$k(h) === 'array') {
                  lightness = h;
                  dl = h[1] - h[0];
              } else {
                  lightness = [h,h];
                  dl = 0;
              }
              return f;
          };

          f.scale = function () { return chroma_1.scale(f); };

          f.hue(hue);

          return f;
      };

      var digits = '0123456789abcdef';

      var floor$2 = Math.floor;
      var random = Math.random;

      var random_1 = function () {
          var code = '#';
          for (var i=0; i<6; i++) {
              code += digits.charAt(floor$2(random() * 16));
          }
          return new Color_1(code, 'hex');
      };

      var log$1 = Math.log;
      var pow$7 = Math.pow;
      var floor$3 = Math.floor;
      var abs = Math.abs;


      var analyze = function (data, key) {
          if ( key === void 0 ) key=null;

          var r = {
              min: Number.MAX_VALUE,
              max: Number.MAX_VALUE*-1,
              sum: 0,
              values: [],
              count: 0
          };
          if (type(data) === 'object') {
              data = Object.values(data);
          }
          data.forEach(function (val) {
              if (key && type(val) === 'object') { val = val[key]; }
              if (val !== undefined && val !== null && !isNaN(val)) {
                  r.values.push(val);
                  r.sum += val;
                  if (val < r.min) { r.min = val; }
                  if (val > r.max) { r.max = val; }
                  r.count += 1;
              }
          });

          r.domain = [r.min, r.max];

          r.limits = function (mode, num) { return limits(r, mode, num); };

          return r;
      };


      var limits = function (data, mode, num) {
          if ( mode === void 0 ) mode='equal';
          if ( num === void 0 ) num=7;

          if (type(data) == 'array') {
              data = analyze(data);
          }
          var min = data.min;
          var max = data.max;
          var values = data.values.sort(function (a,b) { return a-b; });

          if (num === 1) { return [min,max]; }

          var limits = [];

          if (mode.substr(0,1) === 'c') { // continuous
              limits.push(min);
              limits.push(max);
          }

          if (mode.substr(0,1) === 'e') { // equal interval
              limits.push(min);
              for (var i=1; i<num; i++) {
                  limits.push(min+((i/num)*(max-min)));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'l') { // log scale
              if (min <= 0) {
                  throw new Error('Logarithmic scales are only possible for values > 0');
              }
              var min_log = Math.LOG10E * log$1(min);
              var max_log = Math.LOG10E * log$1(max);
              limits.push(min);
              for (var i$1=1; i$1<num; i$1++) {
                  limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
              }
              limits.push(max);
          }

          else if (mode.substr(0,1) === 'q') { // quantile scale
              limits.push(min);
              for (var i$2=1; i$2<num; i$2++) {
                  var p = ((values.length-1) * i$2)/num;
                  var pb = floor$3(p);
                  if (pb === p) {
                      limits.push(values[pb]);
                  } else { // p > pb
                      var pr = p - pb;
                      limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                  }
              }
              limits.push(max);

          }

          else if (mode.substr(0,1) === 'k') { // k-means clustering
              /*
              implementation based on
              http://code.google.com/p/figue/source/browse/trunk/figue.js#336
              simplified for 1-d input values
              */
              var cluster;
              var n = values.length;
              var assignments = new Array(n);
              var clusterSizes = new Array(num);
              var repeat = true;
              var nb_iters = 0;
              var centroids = null;

              // get seed values
              centroids = [];
              centroids.push(min);
              for (var i$3=1; i$3<num; i$3++) {
                  centroids.push(min + ((i$3/num) * (max-min)));
              }
              centroids.push(max);

              while (repeat) {
                  // assignment step
                  for (var j=0; j<num; j++) {
                      clusterSizes[j] = 0;
                  }
                  for (var i$4=0; i$4<n; i$4++) {
                      var value = values[i$4];
                      var mindist = Number.MAX_VALUE;
                      var best = (void 0);
                      for (var j$1=0; j$1<num; j$1++) {
                          var dist = abs(centroids[j$1]-value);
                          if (dist < mindist) {
                              mindist = dist;
                              best = j$1;
                          }
                          clusterSizes[best]++;
                          assignments[i$4] = best;
                      }
                  }

                  // update centroids step
                  var newCentroids = new Array(num);
                  for (var j$2=0; j$2<num; j$2++) {
                      newCentroids[j$2] = null;
                  }
                  for (var i$5=0; i$5<n; i$5++) {
                      cluster = assignments[i$5];
                      if (newCentroids[cluster] === null) {
                          newCentroids[cluster] = values[i$5];
                      } else {
                          newCentroids[cluster] += values[i$5];
                      }
                  }
                  for (var j$3=0; j$3<num; j$3++) {
                      newCentroids[j$3] *= 1/clusterSizes[j$3];
                  }

                  // check convergence
                  repeat = false;
                  for (var j$4=0; j$4<num; j$4++) {
                      if (newCentroids[j$4] !== centroids[j$4]) {
                          repeat = true;
                          break;
                      }
                  }

                  centroids = newCentroids;
                  nb_iters++;

                  if (nb_iters > 200) {
                      repeat = false;
                  }
              }

              // finished k-means clustering
              // the next part is borrowed from gabrielflor.it
              var kClusters = {};
              for (var j$5=0; j$5<num; j$5++) {
                  kClusters[j$5] = [];
              }
              for (var i$6=0; i$6<n; i$6++) {
                  cluster = assignments[i$6];
                  kClusters[cluster].push(values[i$6]);
              }
              var tmpKMeansBreaks = [];
              for (var j$6=0; j$6<num; j$6++) {
                  tmpKMeansBreaks.push(kClusters[j$6][0]);
                  tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
              }
              tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
              limits.push(tmpKMeansBreaks[0]);
              for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                  var v = tmpKMeansBreaks[i$7];
                  if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                      limits.push(v);
                  }
              }
          }
          return limits;
      };

      var analyze_1 = {analyze: analyze, limits: limits};

      var contrast = function (a, b) {
          // WCAG contrast ratio
          // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.luminance();
          var l2 = b.luminance();
          return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      };

      var sqrt$4 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var abs$1 = Math.abs;
      var cos$4 = Math.cos;
      var PI$2 = Math.PI;

      var deltaE = function(a, b, L, C) {
          if ( L === void 0 ) L=1;
          if ( C === void 0 ) C=1;

          // Delta E (CMC)
          // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
          a = new Color_1(a);
          b = new Color_1(b);
          var ref = Array.from(a.lab());
          var L1 = ref[0];
          var a1 = ref[1];
          var b1 = ref[2];
          var ref$1 = Array.from(b.lab());
          var L2 = ref$1[0];
          var a2 = ref$1[1];
          var b2 = ref$1[2];
          var c1 = sqrt$4((a1 * a1) + (b1 * b1));
          var c2 = sqrt$4((a2 * a2) + (b2 * b2));
          var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
          var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
          var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
          while (h1 < 0) { h1 += 360; }
          while (h1 >= 360) { h1 -= 360; }
          var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
          var c4 = c1 * c1 * c1 * c1;
          var f = sqrt$4(c4 / (c4 + 1900.0));
          var sh = sc * (((f * t) + 1.0) - f);
          var delL = L1 - L2;
          var delC = c1 - c2;
          var delA = a1 - a2;
          var delB = b1 - b2;
          var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
          var v1 = delL / (L * sl);
          var v2 = delC / (C * sc);
          var v3 = sh;
          return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
      };

      // simple Euclidean distance
      var distance = function(a, b, mode) {
          if ( mode === void 0 ) mode='lab';

          // Delta E (CIE 1976)
          // see http://www.brucelindbloom.com/index.html?Equations.html
          a = new Color_1(a);
          b = new Color_1(b);
          var l1 = a.get(mode);
          var l2 = b.get(mode);
          var sum_sq = 0;
          for (var i in l1) {
              var d = (l1[i] || 0) - (l2[i] || 0);
              sum_sq += d*d;
          }
          return Math.sqrt(sum_sq);
      };

      var valid = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          try {
              new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
              return true;
          } catch (e) {
              return false;
          }
      };

      // some pre-defined color scales:




      var scales = {
      	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
      	hot: function hot() { return scale(['#000','#f00','#ff0','#fff']).mode('rgb') }
      };

      /**
          ColorBrewer colors for chroma.js

          Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
          Pennsylvania State University.

          Licensed under the Apache License, Version 2.0 (the "License");
          you may not use this file except in compliance with the License.
          You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0

          Unless required by applicable law or agreed to in writing, software distributed
          under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
          CONDITIONS OF ANY KIND, either express or implied. See the License for the
          specific language governing permissions and limitations under the License.
      */

      var colorbrewer = {
          // sequential
          OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
          PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
          BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
          Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
          BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
          YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
          YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
          Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
          RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
          Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
          YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
          Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
          GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
          Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
          YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
          PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
          Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
          PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
          Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

          // diverging

          Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
          RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
          RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
          PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
          PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
          RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
          BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
          RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
          PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

          // qualitative

          Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
          Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
          Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
          Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
          Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
          Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
          Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
          Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
      };

      // add lowercase aliases for case-insensitive matches
      for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
          var key = list$1[i$1];

          colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }

      var colorbrewer_1 = colorbrewer;

      // feel free to comment out anything to rollup
      // a smaller chroma.js built

      // io --> convert colors















      // operators --> modify existing Colors










      // interpolators










      // generators -- > create new colors
      chroma_1.average = average;
      chroma_1.bezier = bezier_1;
      chroma_1.blend = blend_1;
      chroma_1.cubehelix = cubehelix;
      chroma_1.mix = chroma_1.interpolate = mix;
      chroma_1.random = random_1;
      chroma_1.scale = scale;

      // other utility methods
      chroma_1.analyze = analyze_1.analyze;
      chroma_1.contrast = contrast;
      chroma_1.deltaE = deltaE;
      chroma_1.distance = distance;
      chroma_1.limits = analyze_1.limits;
      chroma_1.valid = valid;

      // scale
      chroma_1.scales = scales;

      // colors
      chroma_1.colors = w3cx11_1;
      chroma_1.brewer = colorbrewer_1;

      var chroma_js = chroma_1;

      return chroma_js;

  })));
  });

  /* global CombatTracker, trPatchLib, canvas */
  function onReady$1() {
    var newClass = CombatTracker;
    newClass = trPatchLib.patchMethod(
    newClass,
    '_onCombatantControl',
    21, "if ( isDefeated && !token.data.overlayEffect ) token.toggleOverlay(CONFIG.controlIcons.defeated);", "if ( isDefeated && token.data.overlayEffect !== CONFIG.controlIcons.defeated ) token.toggleOverlay(CONFIG.controlIcons.defeated);");



    if (!newClass) return;

    CombatTracker.prototype._onCombatantControl = newClass.prototype._onCombatantControl;
  }

  function onUpdateToken(scene, sceneID, update, tokenData, userId) {
    var token = canvas.tokens.get(update._id);
    if (token.owner) token._updateHealthOverlay && token._updateHealthOverlay(token);
  }

  // This hook is required for Tokens linked to an Actor
  function onUpdateActor$3(entity, updated) {
    if (entity.owner) entity.getActiveTokens(true).map(function (x) {return x._updateHealthOverlay && x._updateHealthOverlay(x);});
  }

  var events$1 = {
    onReady: onReady$1,
    onUpdateToken: onUpdateToken,
    onUpdateActor: onUpdateActor$3 };

  /* global Hooks, $, game, CONFIG, Token, Auras */

  var registerHooks$1 = function registerHooks() {
    Hooks.on('ready', events$1.onReady);
    Hooks.on('updateToken', events$1.onUpdateToken);
    Hooks.on('updateActor', events$1.onUpdateActor);
  };

  var registerPrototypes = function registerPrototypes() {
    // Replace selected control icons
    CONFIG.controlIcons.visibility = 'modules/may/icons/invisible.svg';
    CONFIG.controlIcons.defeated = 'modules/may/icons/dead.svg';


    Auras.getHealthAuras = function (token) {
      var maxHP = token.actor.data.data.attributes.hp.max;
      var curHP = token.actor.data.data.attributes.hp.value;

      var scale = chroma.scale(['#E53935', '#1abc1a']).mode('lch');
      var colour = curHP <= 0 ? '#000000' : scale(curHP / maxHP).toString();

      return [
      {
        distance: 0.5,
        colour: colour,
        opacity: 0.75,
        square: false,
        uuid: Auras.uuid() }];


    };

    Auras.getAllAuras = function (token) {
      return Auras.getManualAuras(token).
      concat(token.getFlag('token-auras', 'auras') || []).
      concat(Auras.getHealthAuras(token));
    };

    Token.prototype._updateHealthOverlay = function (tok) {
      var maxHP = tok.actor.data.data.attributes.hp.max;
      var curHP = tok.actor.data.data.attributes.hp.value;
      var priorHealth = tok.data.overlayEffect;

      // let newHealth = null
      // if (curHP <= 0) {
      //   if (priorHealth === SVG.dead) newHealth = priorHealth
      //   else newHealth = SVG.almostdead
      // } else if (curHP / maxHP < 0.5) newHealth = SVG.wounded

      this.drawAuras();
      // if (newHealth !== priorHealth) {
      //   if (newHealth === null) tok.toggleOverlay(priorHealth)
      //   else tok.toggleOverlay(newHealth)
      // }
    };
  };

  var tokenOverlay = { registerHooks: registerHooks$1, registerPrototypes: registerPrototypes };

  /* global Hooks, CONFIG, OBSIDIAN, ui */

  Hooks.once('init', function () {
    console.log('MAY |', 'Initializing May module');
  });

  sharedData.registerHooks();

  tokenOverlay.registerPrototypes();
  tokenOverlay.registerHooks();

  // // This hook is required for Tokens NOT linked to an Actor
  // Hooks.on("updateToken", (scene, sceneID, update, tokenData, userId) => {
  //   const token = canvas.tokens.get(update._id);
  //   // if (token.owner) token._updateHealthOverlay(token);
  //   console.log('UPDATE TOKEN', token, {scene, sceneID, update, tokenData, userId})
  // });

  // This hook is required for Tokens linked to an Actor
  Hooks.on('updateActor', function (actor, updated) {
    // console.log('HOOKS >', 'updateActor', { actor, updated })

    actorResource.onUpdateActor(actor, updated);
    actorArmorClass.onUpdateActor(actor, updated);
    actorSkill.onUpdateActor(actor, updated);
  });

  // This hook is required for Tokens linked to an Actor
  Hooks.on('updateOwnedItem', function (actor, item) {
    // console.log('HOOKS >', 'updateOwnedItem', { actor, item })

    actorResource.onUpdateOwnedItem(actor, item);
  });

  Hooks.on('createOwnedItem', function (actor, item) {
    // console.log('HOOKS >', 'createOwnedItem', { actor, item })

    actorEffect.onCreateOwnedItem(actor, item);
  });

  Hooks.on('deleteOwnedItem', function (actor, item) {
    // console.log('HOOKS >', 'deleteOwnedItem', { actor, item })

    actorEffect.onDeleteOwnedItem(actor, item);
  });

  // HOOK > ready -> Load hotbar with user's default
  // HOOK > token select -> Load hotbar with actors/tokens variant
  // HOOK > drop on hotbar -> Save hotbar to actors/tokens variant/user's default

}());
//# sourceMappingURL=main.js.map
