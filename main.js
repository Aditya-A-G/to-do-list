/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vmin;\n  width: 100vw;\n  overflow-x: hidden;\n  background-color: #a5c7ff;\n}\n\n.main {\n  min-height: 100%;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n  padding: 3.2em;\n  background-color: #5e67ff;\n  height: 15%;\n}\n\n.button {\n  padding: 0.8em;\n  min-height: 0.4em;\n  min-width: 1.6em;\n  border: none;\n  border-radius: 8px;\n}\n\n.content {\n  height: 85%;\n  display: grid;\n  grid-template-columns: 4fr 2fr;\n}\n\n.content .leftSection {\n  height: 100%;\n  padding: 2em;\n}\n\n.content .leftSection p {\n  font-size: 2.4rem;\n  font-weight: bold;\n}\n\n.content .leftSection .projects {\n  height: 100%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 2em;\n}\n\n.content .leftSection .projects .project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid hotpink;\n  aspect-ratio: 2/2;\n}\n\n.content .leftSection .projects .project p {\n  font-size: 3.2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  background-color: whitesmoke;\n  padding-top: 5.5em;\n  width: 100%;\n  height: 100vmin;\n}\n\n.info .tasks {\n  width: 80%;\n  height: 100%;\n  background-color: blanchedalmond;\n}\n\n.info .tasks .task {\n  width: 100%;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  display: grid;\n  justify-content: center;\n  margin-top: 2em;\n}\n\n.task p {\n  font-size: 2.4rem;\n  text-align: center;\n}\n\n.task {\n  background-color: #a5c7ff;\n}\n\n.blur {\n  filter: blur(8px);\n  pointer-events: none;\n}\n\n.pop-up {\n  height: 80%;\n  width: 80%;\n  background-color: hotpink;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 3.2em;\n\n  border-radius: 8px;\n  overflow-y: auto;\n  z-index: -1;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 500ms;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n.active {\n  pointer-events: all;\n  opacity: 1;\n  z-index: 2;\n  transition: opacity 500ms;\n}\n\n.pop-up .close {\n  position: absolute;\n  top: 0;\n  right: 12px;\n  cursor: pointer;\n  color: red;\n  font-size: 3rem;\n  user-select: none;\n}\n\n.pop-up .status .switch input:checked + .slider {\n  background-color: #ccc;\n}\n\n.pop-up .status .switch input:checked + .slider::before {\n  background-color: rgb(28, 230, 28);\n}\n\n.pop-up span {\n  font-size: 3.2rem;\n  color: black;\n}\n\n.input {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.pop-up input {\n  height: 30px;\n  border: none;\n  border-radius: 8px;\n  padding-left: 0.6em;\n  font-size: 2rem;\n}\n\n.pop-up input:focus {\n  outline: none;\n}\n\n.priority p {\n  font-size: 3.2rem;\n  padding-bottom: 0.4em;\n}\n\n.priority label {\n  display: flex;\n  align-items: center;\n  gap: 3em;\n}\n\n.priority span {\n  font-size: 2rem;\n}\n\n.priority label input {\n  width: 5%;\n}\n\n.pop-up .submit {\n  text-align: start;\n  padding: 0;\n}\n\n.submit button, #popUp button{\n  padding: 0.8em;\n  min-height: 0.4em;\n  min-width: 1.6em;\n  border: 3px solid cyan;\n  border-radius: 8px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  height: 30px;\n  width: 50px;\n  margin: 0 10px;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider::before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  bottom: 4px;\n  background-color: white;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: green;\n}\n\ninput:checked + .slider::before {\n  transform: translateX(28px);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  height: 100vmin;\n  width: 100vw;\n  overflow-x: hidden;\n  background-color: #a5c7ff;\n}\n\n.main {\n  min-height: 100%;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n  padding: 3.2em;\n  background-color: #5e67ff;\n  height: 15%;\n}\n\n.button {\n  padding: 0.8em;\n  min-height: 0.4em;\n  min-width: 1.6em;\n  border: none;\n  border-radius: 8px;\n}\n\n.content {\n  height: 85%;\n  display: grid;\n  grid-template-columns: 4fr 2fr;\n}\n\n.content .leftSection {\n  height: 100%;\n  padding: 2em;\n}\n\n.content .leftSection p {\n  font-size: 2.4rem;\n  font-weight: bold;\n}\n\n.content .leftSection .projects {\n  height: 100%;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 2em;\n}\n\n.content .leftSection .projects .project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid hotpink;\n  aspect-ratio: 2/2;\n}\n\n.content .leftSection .projects .project p {\n  font-size: 3.2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  background-color: whitesmoke;\n  padding-top: 5.5em;\n  width: 100%;\n  height: 100vmin;\n}\n\n.info .tasks {\n  width: 80%;\n  height: 100%;\n  background-color: blanchedalmond;\n}\n\n.info .tasks .task {\n  width: 100%;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  display: grid;\n  justify-content: center;\n  margin-top: 2em;\n}\n\n.task p {\n  font-size: 2.4rem;\n  text-align: center;\n}\n\n.task {\n  background-color: #a5c7ff;\n}\n\n.blur {\n  filter: blur(8px);\n  pointer-events: none;\n}\n\n.pop-up {\n  height: 80%;\n  width: 80%;\n  background-color: hotpink;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 3.2em;\n\n  border-radius: 8px;\n  overflow-y: auto;\n  z-index: -1;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 500ms;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n.active {\n  pointer-events: all;\n  opacity: 1;\n  z-index: 2;\n  transition: opacity 500ms;\n}\n\n.pop-up .close {\n  position: absolute;\n  top: 0;\n  right: 12px;\n  cursor: pointer;\n  color: red;\n  font-size: 3rem;\n  user-select: none;\n}\n\n.pop-up .status .switch input:checked + .slider {\n  background-color: #ccc;\n}\n\n.pop-up .status .switch input:checked + .slider::before {\n  background-color: rgb(28, 230, 28);\n}\n\n.pop-up span {\n  font-size: 3.2rem;\n  color: black;\n}\n\n.input {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1em;\n}\n\n.pop-up input {\n  height: 30px;\n  border: none;\n  border-radius: 8px;\n  padding-left: 0.6em;\n  font-size: 2rem;\n}\n\n.pop-up input:focus {\n  outline: none;\n}\n\n.priority p {\n  font-size: 3.2rem;\n  padding-bottom: 0.4em;\n}\n\n.priority label {\n  display: flex;\n  align-items: center;\n  gap: 3em;\n}\n\n.priority span {\n  font-size: 2rem;\n}\n\n.priority label input {\n  width: 5%;\n}\n\n.pop-up .submit {\n  text-align: start;\n  padding: 0;\n}\n\n.submit button, #popUp button{\n  padding: 0.8em;\n  min-height: 0.4em;\n  min-width: 1.6em;\n  border: 3px solid cyan;\n  border-radius: 8px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  height: 30px;\n  width: 50px;\n  margin: 0 10px;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider::before {\n  position: absolute;\n  content: \"\";\n  height: 24px;\n  width: 24px;\n  bottom: 4px;\n  background-color: white;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: green;\n}\n\ninput:checked + .slider::before {\n  transform: translateX(28px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DOMService.js":
/*!***********************************!*\
  !*** ./src/modules/DOMService.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeProjectForm": () => (/* binding */ closeProjectForm),
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm),
/* harmony export */   "openTaskForm": () => (/* binding */ openTaskForm)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const projectPopUpForm = document.querySelector("#projectPopUp");
const taskPopUpForm = document.querySelector("#popUp");
const main = document.querySelector(".main");
const projectsContainer = document.querySelector(".projects");
const tasksContainer = document.querySelector(".tasks");
const taskForm = document.querySelector("#taskForm");
const taskFormNameField = document.querySelector("#name");
const taskFormNoteField = document.querySelector("#note");
const taskFormDateField = document.querySelector("#date");
const taskFormPriorityLow = document.querySelector("#low");
const taskFormPriorityMedium = document.querySelector("#medium");
const taskFormPriorityHigh = document.querySelector("#high");
const taskFormCheckbox = document.querySelector("#checkbox");
const submitWrapper = document.querySelector("#taskSubmitWrapper");
const editTaskButton = document.createElement("button");
const saveTaskButton = document.createElement("button");

function displayTaskInfo(eventName, [task, projectId, taskId]) {
  openTaskForm();

  taskForm.setAttribute("data-projectId", projectId);
  taskForm.setAttribute("data-taskId", taskId);

  taskFormNameField.value = task.name;
  taskFormNoteField.value = task.note;
  taskFormDateField.value = task.dueDate;
  if (task.priority == "low") {
    taskFormPriorityLow.checked = true;
    taskFormPriorityMedium.checked = false;
    taskFormPriorityHigh.checked = false;
  } else if (task.priority == "medium") {
    taskFormPriorityLow.checked = false;
    taskFormPriorityMedium.checked = true;
    taskFormPriorityHigh.checked = false;
  } else {
    taskFormPriorityLow.checked = false;
    taskFormPriorityMedium.checked = false;
    taskFormPriorityHigh.checked = true;
  }

  taskFormCheckbox.checked = task.isCompleted;

  //disable

  taskForm.style.pointerEvents = "none";
  taskFormNoteField.setAttribute("readOnly", true);
  taskFormDateField.setAttribute("readOnly", true);
  taskFormNameField.setAttribute("readOnly", true);

  if (submitWrapper.lastElementChild) {
    submitWrapper.removeChild(submitWrapper.lastElementChild);
  }
  editTaskButton.textContent = "Edit";
  taskPopUpForm.appendChild(editTaskButton);

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("editButtonAdded", editTaskButton);
}

function openProjectForm() {
  projectPopUpForm.classList.add("active");
  main.classList.add("blur");
}

function closeProjectForm() {
  projectPopUpForm.classList.toggle("active");
  main.classList.toggle("blur");
}

function openTaskForm() {
  taskPopUpForm.classList.add("active");
  main.classList.add("blur");
}

function closeTaskForm(eventName, e) {
  taskPopUpForm.classList.toggle("active");
  main.classList.toggle("blur");

  if (
    taskForm.hasAttribute("data-projectId") ||
    taskForm.hasAttribute("data-taskId")
  ) {
    taskForm.style.pointerEvents = "all";
    taskFormNoteField.removeAttribute("readOnly");
    taskFormDateField.removeAttribute("readOnly");
    taskFormNameField.removeAttribute("readOnly");

    taskForm.removeAttribute("data-projectId");
    taskForm.removeAttribute("data-taskId");
  }

  if (taskPopUpForm.contains(editTaskButton)) {
    taskPopUpForm.removeChild(editTaskButton);
    submitWrapper.appendChild(saveTaskButton);
  }
  if (taskForm.contains(saveTaskButton)) {
    saveTaskButton.textContent = "Add Task";
  }
}

function addProjectToDom(eventName, obj) {
  const projectDiv = document.createElement("div");
  const projectName = document.createElement("p");

  projectDiv.setAttribute("data-projectId", obj.projectId);
  projectName.textContent = obj.name;

  projectDiv.classList.add("project");

  projectDiv.appendChild(projectName);
  projectsContainer.appendChild(projectDiv);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectAddedToDom", projectDiv);
}

function addTaskToDom(eventName, obj) {
  const taskDiv = document.createElement("div");
  const taskName = document.createElement("p");
  const taskDueDate = document.createElement("p");

  taskDiv.setAttribute("data-projectId", obj.projectId);
  taskDiv.setAttribute("data-taskId", obj.taskId);

  taskName.textContent = obj.name;
  taskDueDate.textContent = obj.dueDate;

  taskDiv.classList.add("task");

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(taskDueDate);
  tasksContainer.appendChild(taskDiv);

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("taskAddedToDom", { taskDiv, taskName, taskDueDate });
}

function clearTasksContainer() {
  let child = tasksContainer.lastElementChild;
  while (child) {
    tasksContainer.removeChild(child);
    child = tasksContainer.lastElementChild;
  }
}

function makeFormEditable() {
  taskForm.style.pointerEvents = "all";
  taskFormNoteField.removeAttribute("readOnly");
  taskFormDateField.removeAttribute("readOnly");
  taskFormNameField.removeAttribute("readOnly");

  if (taskPopUpForm.contains(editTaskButton)) {
    taskPopUpForm.removeChild(editTaskButton);
  }

  saveTaskButton.textContent = "Save";
  submitWrapper.appendChild(saveTaskButton);
}

function updateTask(eventName, taskObj) {
  const tasks = tasksContainer.childNodes;
  console.log(tasks);
  tasks.forEach((task) => {
    let projectId = task.getAttribute("data-projectId");
    let taskId = task.getAttribute("data-taskId");
    if (taskObj.projectId == projectId && taskObj.taskId == taskId) {
      const childNodes = task.childNodes;
      console.log(childNodes);
      childNodes[0].textContent = taskObj.name;
      childNodes[1].textContent = taskObj.dueDate;
    }
  });
}

pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectObjCreated", addProjectToDom);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("taskObjCreated", addTaskToDom);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectSubmitBtnClicked", closeProjectForm);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("displayTask", addTaskToDom);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("clearTasksContainer", clearTasksContainer);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("displayTaskInfo", displayTaskInfo);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("editButtonClicked", makeFormEditable);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("closeTaskButtonClicked", closeTaskForm);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("reRenderTask", updateTask);


/***/ }),

/***/ "./src/modules/appCoordinator.js":
/*!***************************************!*\
  !*** ./src/modules/appCoordinator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _eventController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventController */ "./src/modules/eventController.js");
/* harmony import */ var _projectStructurer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectStructurer */ "./src/modules/projectStructurer.js");



function init() {
  (0,_eventController__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/modules/eventController.js":
/*!****************************************!*\
  !*** ./src/modules/eventController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DOMService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMService */ "./src/modules/DOMService.js");


// ref

const createProjectButton = document.querySelector(".createProject");
const closeProjectFormButton = document.querySelector(".closeProjectForm");
const addTaskButton = document.querySelector(".addTask");
const closeTaskFormButton = document.querySelector(".closeTaskForm");
const projectSubmitButton = document.querySelector("#projectSubmit");
const taskForm = document.querySelector("#taskForm");

pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectAddedToDom", (eventName, projectDiv) => {
  projectDiv.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-projectId");
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectClicked", projectId);
  });
});
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
  "taskAddedToDom",
  (eventName, { taskDiv, taskName, taskDueDate }) => {
    taskDiv.addEventListener("click", (e) => {
      let projectId;
      let taskId;
      if (e.srcElement.localName == "p") {
        projectId = e.target.parentElement.getAttribute("data-projectId");
        taskId = e.target.parentElement.getAttribute("data-taskId");
      } else {
        projectId = e.target.getAttribute("data-projectId");
        taskId = e.target.getAttribute("data-taskId");
      }

      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("taskClicked", [projectId, taskId]);
    });
  }
);

pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("editButtonAdded",(eventName, editButton)=>{
  editButton.addEventListener("click", ()=>{
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("editButtonClicked");
  })
} );

function init() {
  createProjectButton.addEventListener("click", _DOMService__WEBPACK_IMPORTED_MODULE_1__.openProjectForm);
  closeProjectFormButton.addEventListener("click", _DOMService__WEBPACK_IMPORTED_MODULE_1__.closeProjectForm);
  addTaskButton.addEventListener("click", _DOMService__WEBPACK_IMPORTED_MODULE_1__.openTaskForm);
  closeTaskFormButton.addEventListener("click", (e)=>{
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("closeTaskButtonClicked", e);
  });

  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectSubmitBtnClicked", e);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("taskSubmitBtnClicked", e);
  });
}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
function Projects(e, Id) {
  let name = e.target.form[0].value;
  const projectId = Id;
  let taskId = 0;
  let tasks = [];
  return { name, projectId, taskId, tasks };
}


/***/ }),

/***/ "./src/modules/projectStructurer.js":
/*!******************************************!*\
  !*** ./src/modules/projectStructurer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




const projects = [
  { name: "Default Project", projectId: 1, taskId: 0, tasks: [] },
];

let projectId = 1;
let currentProjectId = 1;

function addProject(eventName, payload) {
  projectId += 1;
  const projectObj = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(payload, projectId);
  projects.push(projectObj);
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectObjCreated", projectObj);
}

function addTask(eventName, payload) {
  projects.forEach((obj) => {
    if (currentProjectId == obj.projectId) {
      obj.taskId += 1;
      const taskObj = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])(payload, currentProjectId, obj.taskId);
      obj.tasks.push(taskObj);
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("taskObjCreated", taskObj);
    }
  });
}

function showTasks(eventName, clickedProjectId) {
  if (currentProjectId != clickedProjectId) {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("clearTasksContainer");
    currentProjectId = clickedProjectId;
    projects.forEach((obj) => {
      if (obj.projectId == clickedProjectId) {
        obj.tasks.forEach((task) => {
          pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("displayTask", task);
        });
      }
    });
  }
}

function showTaskInfo(eventName, [clickedProjectId, taskId]) {
  projects.forEach((obj) => {
    if (clickedProjectId == obj.projectId) {
      obj.tasks.forEach((task) => {
        if (task.taskId == taskId) {
          pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("displayTaskInfo", [task, clickedProjectId, taskId]);
        }
      });
    }
  });
}
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("projectObjCreated", projects[0]);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectSubmitBtnClicked", addProject);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("taskSubmitBtnClicked", (eventName, e) => {
  if (
    e.srcElement.hasAttribute("data-projectId") ||
    e.srcElement.hasAttribute("data-taskId")
  ) {
    const projectID = e.srcElement.getAttribute("data-projectId");
    const taskID = e.srcElement.getAttribute("data-taskId");

    projects.forEach((obj) => {
      if (obj.projectId == projectID) {
        obj.tasks.forEach((task) => {
          if (task.taskId == taskID) {
            task.name = e.target[0].value;
            task.note = e.target[1].value;
            task.dueDate = e.target[2].value;
            task.priority = e.target[3].checked
              ? "low"
              : e.target[4].checked
              ? "medium"
              : e.target[5].checked
              ? "high"
              : false;
            task.isCompleted = e.target[6].checked;
            pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("reRenderTask", task)
          }
        });
      }
    });
  } else {
    addTask("taskSubmitBtnClicked", e);
  }
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("closeTaskButtonClicked", e);
});
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("projectClicked", showTasks);
pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("taskClicked", showTaskInfo);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tasks)
/* harmony export */ });
function Tasks(e, Id, taskID) {
  const projectId = Id;
  const taskId = taskID;
  let name = e.target[0].value;
  let note = e.target[1].value;
  let dueDate = e.target[2].value;
  let priority = e.target[3].checked
    ? "low"
    : e.target[4].checked
    ? "medium"
    : e.target[5].checked
    ? "high"
    : false;
  let isCompleted = e.target[6].checked;
  return { projectId, taskId, name, note, dueDate, priority, isCompleted };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_appCoordinator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/appCoordinator */ "./src/modules/appCoordinator.js");




(0,_modules_appCoordinator__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHFCQUFxQiwyQkFBMkIsR0FBRyw4QkFBOEIsY0FBYyxlQUFlLHdCQUF3QixHQUFHLFVBQVUsb0JBQW9CLGlCQUFpQix1QkFBdUIsOEJBQThCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxjQUFjLGtCQUFrQixtQ0FBbUMsbUJBQW1CLDhCQUE4QixnQkFBZ0IsR0FBRyxhQUFhLG1CQUFtQixzQkFBc0IscUJBQXFCLGlCQUFpQix1QkFBdUIsR0FBRyxjQUFjLGdCQUFnQixrQkFBa0IsbUNBQW1DLEdBQUcsMkJBQTJCLGlCQUFpQixpQkFBaUIsR0FBRyw2QkFBNkIsc0JBQXNCLHNCQUFzQixHQUFHLHFDQUFxQyxpQkFBaUIsaUJBQWlCLGtCQUFrQixnRUFBZ0UsYUFBYSxHQUFHLDhDQUE4QyxrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIsOEJBQThCLHNCQUFzQixHQUFHLGdEQUFnRCxzQkFBc0IsR0FBRyxXQUFXLGtCQUFrQiw0QkFBNEIsaUNBQWlDLHVCQUF1QixnQkFBZ0Isb0JBQW9CLEdBQUcsa0JBQWtCLGVBQWUsaUJBQWlCLHFDQUFxQyxHQUFHLHdCQUF3QixnQkFBZ0IsZ0NBQWdDLG1DQUFtQyxrQkFBa0IsNEJBQTRCLG9CQUFvQixHQUFHLGFBQWEsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsOEJBQThCLEdBQUcsV0FBVyxzQkFBc0IseUJBQXlCLEdBQUcsYUFBYSxnQkFBZ0IsZUFBZSw4QkFBOEIsdUJBQXVCLFlBQVksYUFBYSxXQUFXLGNBQWMsaUJBQWlCLG1CQUFtQix5QkFBeUIscUJBQXFCLGdCQUFnQixlQUFlLHlCQUF5Qiw4QkFBOEIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLGFBQWEsd0JBQXdCLGVBQWUsZUFBZSw4QkFBOEIsR0FBRyxvQkFBb0IsdUJBQXVCLFdBQVcsZ0JBQWdCLG9CQUFvQixlQUFlLG9CQUFvQixzQkFBc0IsR0FBRyxxREFBcUQsMkJBQTJCLEdBQUcsNkRBQTZELHVDQUF1QyxHQUFHLGtCQUFrQixzQkFBc0IsaUJBQWlCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLDJCQUEyQixhQUFhLEdBQUcsbUJBQW1CLGlCQUFpQixpQkFBaUIsdUJBQXVCLHdCQUF3QixvQkFBb0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsaUJBQWlCLHNCQUFzQiwwQkFBMEIsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3QixhQUFhLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLDJCQUEyQixjQUFjLEdBQUcscUJBQXFCLHNCQUFzQixlQUFlLEdBQUcsa0NBQWtDLG1CQUFtQixzQkFBc0IscUJBQXFCLDJCQUEyQix1QkFBdUIsR0FBRyxhQUFhLHVCQUF1QiwwQkFBMEIsaUJBQWlCLGdCQUFnQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1QixvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSwyQkFBMkIscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGdCQUFnQiw0QkFBNEIsdUJBQXVCLEdBQUcsNkJBQTZCLDRCQUE0QixHQUFHLHFDQUFxQyxnQ0FBZ0MsR0FBRyxTQUFTLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxnQ0FBZ0MscUJBQXFCLDJCQUEyQixHQUFHLDhCQUE4QixjQUFjLGVBQWUsd0JBQXdCLEdBQUcsVUFBVSxvQkFBb0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsR0FBRyxXQUFXLHFCQUFxQixHQUFHLGNBQWMsa0JBQWtCLG1DQUFtQyxtQkFBbUIsOEJBQThCLGdCQUFnQixHQUFHLGFBQWEsbUJBQW1CLHNCQUFzQixxQkFBcUIsaUJBQWlCLHVCQUF1QixHQUFHLGNBQWMsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsR0FBRywyQkFBMkIsaUJBQWlCLGlCQUFpQixHQUFHLDZCQUE2QixzQkFBc0Isc0JBQXNCLEdBQUcscUNBQXFDLGlCQUFpQixpQkFBaUIsa0JBQWtCLGdFQUFnRSxhQUFhLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsc0JBQXNCLEdBQUcsZ0RBQWdELHNCQUFzQixHQUFHLFdBQVcsa0JBQWtCLDRCQUE0QixpQ0FBaUMsdUJBQXVCLGdCQUFnQixvQkFBb0IsR0FBRyxrQkFBa0IsZUFBZSxpQkFBaUIscUNBQXFDLEdBQUcsd0JBQXdCLGdCQUFnQixnQ0FBZ0MsbUNBQW1DLGtCQUFrQiw0QkFBNEIsb0JBQW9CLEdBQUcsYUFBYSxzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyw4QkFBOEIsR0FBRyxXQUFXLHNCQUFzQix5QkFBeUIsR0FBRyxhQUFhLGdCQUFnQixlQUFlLDhCQUE4Qix1QkFBdUIsWUFBWSxhQUFhLFdBQVcsY0FBYyxpQkFBaUIsbUJBQW1CLHlCQUF5QixxQkFBcUIsZ0JBQWdCLGVBQWUseUJBQXlCLDhCQUE4QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsYUFBYSx3QkFBd0IsZUFBZSxlQUFlLDhCQUE4QixHQUFHLG9CQUFvQix1QkFBdUIsV0FBVyxnQkFBZ0Isb0JBQW9CLGVBQWUsb0JBQW9CLHNCQUFzQixHQUFHLHFEQUFxRCwyQkFBMkIsR0FBRyw2REFBNkQsdUNBQXVDLEdBQUcsa0JBQWtCLHNCQUFzQixpQkFBaUIsR0FBRyxZQUFZLGtCQUFrQiw0QkFBNEIsMkJBQTJCLGFBQWEsR0FBRyxtQkFBbUIsaUJBQWlCLGlCQUFpQix1QkFBdUIsd0JBQXdCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxpQkFBaUIsc0JBQXNCLDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyxvQkFBb0Isb0JBQW9CLEdBQUcsMkJBQTJCLGNBQWMsR0FBRyxxQkFBcUIsc0JBQXNCLGVBQWUsR0FBRyxrQ0FBa0MsbUJBQW1CLHNCQUFzQixxQkFBcUIsMkJBQTJCLHVCQUF1QixHQUFHLGFBQWEsdUJBQXVCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLG1CQUFtQixHQUFHLGFBQWEsdUJBQXVCLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLDJCQUEyQixxQkFBcUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLDRCQUE0Qix1QkFBdUIsR0FBRyw2QkFBNkIsNEJBQTRCLEdBQUcscUNBQXFDLGdDQUFnQyxHQUFHLHFCQUFxQjtBQUN2aFU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBMkI7QUFDbkM7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxRQUFRLGNBQWMsV0FBVztBQUNqQywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUdKOztBQUVMLENBQUM7QUFDRDs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixXQUFXO0FBQzNCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsV0FBVztBQUMzQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyV0QsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZitCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx3REFBYztBQUNoQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx3REFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsd0RBQWMscUJBQXFCLGdDQUFnQztBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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TkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNTO0FBQ3NCOztBQUVyRCxtRUFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcENvb3JkaW5hdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RTdHJ1Y3R1cmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2bWluO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzdmZjtcXG59XFxuXFxuLm1haW4ge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMuMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNjdmZjtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbiAgbWluLWhlaWdodDogMC40ZW07XFxuICBtaW4td2lkdGg6IDEuNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAyZnI7XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiAucHJvamVjdHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiAucHJvamVjdHMgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7XFxuICBhc3BlY3QtcmF0aW86IDIvMjtcXG59XFxuXFxuLmNvbnRlbnQgLmxlZnRTZWN0aW9uIC5wcm9qZWN0cyAucHJvamVjdCBwIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZy10b3A6IDUuNWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZtaW47XFxufVxcblxcbi5pbmZvIC50YXNrcyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5pbmZvIC50YXNrcyAudGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLnRhc2sgcCB7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzdmZjtcXG59XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMy4yZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcXG59XFxuXFxuLnBvcC11cCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wb3AtdXAgLnN0YXR1cyAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5wb3AtdXAgLnN0YXR1cyAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzAsIDI4KTtcXG59XFxuXFxuLnBvcC11cCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ucG9wLXVwIGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMC42ZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3AtdXAgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5IHAge1xcbiAgZm9udC1zaXplOiAzLjJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4ucHJpb3JpdHkgc3BhbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi5wb3AtdXAgLnN1Ym1pdCB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zdWJtaXQgYnV0dG9uLCAjcG9wVXAgYnV0dG9ue1xcbiAgcGFkZGluZzogMC44ZW07XFxuICBtaW4taGVpZ2h0OiAwLjRlbTtcXG4gIG1pbi13aWR0aDogMS42ZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4cHgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2bWluO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzdmZjtcXG59XFxuXFxuLm1haW4ge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMuMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNjdmZjtcXG4gIGhlaWdodDogMTUlO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbiAgbWluLWhlaWdodDogMC40ZW07XFxuICBtaW4td2lkdGg6IDEuNmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAyZnI7XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiAucHJvamVjdHMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5jb250ZW50IC5sZWZ0U2VjdGlvbiAucHJvamVjdHMgLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7XFxuICBhc3BlY3QtcmF0aW86IDIvMjtcXG59XFxuXFxuLmNvbnRlbnQgLmxlZnRTZWN0aW9uIC5wcm9qZWN0cyAucHJvamVjdCBwIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZy10b3A6IDUuNWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZtaW47XFxufVxcblxcbi5pbmZvIC50YXNrcyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxufVxcblxcbi5pbmZvIC50YXNrcyAudGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuXFxuLnRhc2sgcCB7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YzdmZjtcXG59XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBvcC11cCB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMy4yZW07XFxuXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIG9wYWNpdHk6IDE7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcXG59XFxuXFxuLnBvcC11cCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5wb3AtdXAgLnN0YXR1cyAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5wb3AtdXAgLnN0YXR1cyAuc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAyMzAsIDI4KTtcXG59XFxuXFxuLnBvcC11cCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4ucG9wLXVwIGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMC42ZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3AtdXAgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5IHAge1xcbiAgZm9udC1zaXplOiAzLjJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4ucHJpb3JpdHkgc3BhbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wcmlvcml0eSBsYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogNSU7XFxufVxcblxcbi5wb3AtdXAgLnN1Ym1pdCB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zdWJtaXQgYnV0dG9uLCAjcG9wVXAgYnV0dG9ue1xcbiAgcGFkZGluZzogMC44ZW07XFxuICBtaW4taGVpZ2h0OiAwLjRlbTtcXG4gIG1pbi13aWR0aDogMS42ZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBjeWFuO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4cHgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG5cbiAgICBpZiAocm9vdC5QdWJTdWIpIHtcbiAgICAgICAgUHViU3ViID0gcm9vdC5QdWJTdWI7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlB1YlN1YiBhbHJlYWR5IGxvYWRlZCwgdXNpbmcgZXhpc3RpbmcgdmVyc2lvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICAgICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIH1cbiAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xLFxuICAgICAgICBBTExfU1VCU0NSSUJJTkdfTVNHID0gJyonO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN1YnNjcmliZXJzLCBzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBBTExfU1VCU0NSSUJJTkdfTVNHLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvciggbWVzc2FnZSApIHtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4oT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKSB8fCBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvcihBTExfU1VCU0NSSUJJTkdfTVNHKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiggZnVuYyApe1xuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZShBTExfU1VCU0NSSUJJTkdfTVNHLCBmdW5jKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgaW50IH1cbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgQ291bnQgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNvdW50U3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBBcnJheSB9XG4gICAgKi9cbiAgICBQdWJTdWIuY291bnRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY291bnRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodG9rZW4gaW4gbWVzc2FnZXNbbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAgIEdldHMgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGdldFN1YnNjcmlwdGlvbnNcbiAgICAqL1xuICAgIFB1YlN1Yi5nZXRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgdmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFB1YlN1YiBmcm9tIFwicHVic3ViLWpzXCI7XG5cbmNvbnN0IHByb2plY3RQb3BVcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RQb3BVcFwiKTtcbmNvbnN0IHRhc2tQb3BVcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcFVwXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbmNvbnN0IHRhc2tGb3JtTmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuY29uc3QgdGFza0Zvcm1Ob3RlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVcIik7XG5jb25zdCB0YXNrRm9ybURhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcbmNvbnN0IHRhc2tGb3JtUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvd1wiKTtcbmNvbnN0IHRhc2tGb3JtUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZGl1bVwiKTtcbmNvbnN0IHRhc2tGb3JtUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoXCIpO1xuY29uc3QgdGFza0Zvcm1DaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tib3hcIik7XG5jb25zdCBzdWJtaXRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrU3VibWl0V3JhcHBlclwiKTtcbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IHNhdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tJbmZvKGV2ZW50TmFtZSwgW3Rhc2ssIHByb2plY3RJZCwgdGFza0lkXSkge1xuICBvcGVuVGFza0Zvcm0oKTtcblxuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJZFwiLCBwcm9qZWN0SWQpO1xuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiLCB0YXNrSWQpO1xuXG4gIHRhc2tGb3JtTmFtZUZpZWxkLnZhbHVlID0gdGFzay5uYW1lO1xuICB0YXNrRm9ybU5vdGVGaWVsZC52YWx1ZSA9IHRhc2subm90ZTtcbiAgdGFza0Zvcm1EYXRlRmllbGQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09IFwibG93XCIpIHtcbiAgICB0YXNrRm9ybVByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlO1xuICAgIHRhc2tGb3JtUHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRhc2tGb3JtUHJpb3JpdHlIaWdoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09IFwibWVkaXVtXCIpIHtcbiAgICB0YXNrRm9ybVByaW9yaXR5TG93LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0YXNrRm9ybVByaW9yaXR5TWVkaXVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRhc2tGb3JtUHJpb3JpdHlIaWdoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrRm9ybVByaW9yaXR5TG93LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0YXNrRm9ybVByaW9yaXR5TWVkaXVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0YXNrRm9ybVByaW9yaXR5SGlnaC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHRhc2tGb3JtQ2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG5cbiAgLy9kaXNhYmxlXG5cbiAgdGFza0Zvcm0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICB0YXNrRm9ybU5vdGVGaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZWFkT25seVwiLCB0cnVlKTtcbiAgdGFza0Zvcm1EYXRlRmllbGQuc2V0QXR0cmlidXRlKFwicmVhZE9ubHlcIiwgdHJ1ZSk7XG4gIHRhc2tGb3JtTmFtZUZpZWxkLnNldEF0dHJpYnV0ZShcInJlYWRPbmx5XCIsIHRydWUpO1xuXG4gIGlmIChzdWJtaXRXcmFwcGVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBzdWJtaXRXcmFwcGVyLnJlbW92ZUNoaWxkKHN1Ym1pdFdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbiAgZWRpdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgdGFza1BvcFVwRm9ybS5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG5cbiAgUHViU3ViLnB1Ymxpc2goXCJlZGl0QnV0dG9uQWRkZWRcIiwgZWRpdFRhc2tCdXR0b24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCkge1xuICBwcm9qZWN0UG9wVXBGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICBwcm9qZWN0UG9wVXBGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcImJsdXJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gIHRhc2tQb3BVcEZvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oZXZlbnROYW1lLCBlKSB7XG4gIHRhc2tQb3BVcEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwiYmx1clwiKTtcblxuICBpZiAoXG4gICAgdGFza0Zvcm0uaGFzQXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIikgfHxcbiAgICB0YXNrRm9ybS5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiKVxuICApIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcbiAgICB0YXNrRm9ybU5vdGVGaWVsZC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkT25seVwiKTtcbiAgICB0YXNrRm9ybURhdGVGaWVsZC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkT25seVwiKTtcbiAgICB0YXNrRm9ybU5hbWVGaWVsZC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkT25seVwiKTtcblxuICAgIHRhc2tGb3JtLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcHJvamVjdElkXCIpO1xuICAgIHRhc2tGb3JtLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtdGFza0lkXCIpO1xuICB9XG5cbiAgaWYgKHRhc2tQb3BVcEZvcm0uY29udGFpbnMoZWRpdFRhc2tCdXR0b24pKSB7XG4gICAgdGFza1BvcFVwRm9ybS5yZW1vdmVDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gICAgc3VibWl0V3JhcHBlci5hcHBlbmRDaGlsZChzYXZlVGFza0J1dHRvbik7XG4gIH1cbiAgaWYgKHRhc2tGb3JtLmNvbnRhaW5zKHNhdmVUYXNrQnV0dG9uKSkge1xuICAgIHNhdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbShldmVudE5hbWUsIG9iaikge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdElkXCIsIG9iai5wcm9qZWN0SWQpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG9iai5uYW1lO1xuXG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICBQdWJTdWIucHVibGlzaChcInByb2plY3RBZGRlZFRvRG9tXCIsIHByb2plY3REaXYpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9Eb20oZXZlbnROYW1lLCBvYmopIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJZFwiLCBvYmoucHJvamVjdElkKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiLCBvYmoudGFza0lkKTtcblxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IG9iai5uYW1lO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICBQdWJTdWIucHVibGlzaChcInRhc2tBZGRlZFRvRG9tXCIsIHsgdGFza0RpdiwgdGFza05hbWUsIHRhc2tEdWVEYXRlIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tzQ29udGFpbmVyKCkge1xuICBsZXQgY2hpbGQgPSB0YXNrc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSB0YXNrc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtRWRpdGFibGUoKSB7XG4gIHRhc2tGb3JtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICB0YXNrRm9ybU5vdGVGaWVsZC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkT25seVwiKTtcbiAgdGFza0Zvcm1EYXRlRmllbGQucmVtb3ZlQXR0cmlidXRlKFwicmVhZE9ubHlcIik7XG4gIHRhc2tGb3JtTmFtZUZpZWxkLnJlbW92ZUF0dHJpYnV0ZShcInJlYWRPbmx5XCIpO1xuXG4gIGlmICh0YXNrUG9wVXBGb3JtLmNvbnRhaW5zKGVkaXRUYXNrQnV0dG9uKSkge1xuICAgIHRhc2tQb3BVcEZvcm0ucmVtb3ZlQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xuICB9XG5cbiAgc2F2ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgc3VibWl0V3JhcHBlci5hcHBlbmRDaGlsZChzYXZlVGFza0J1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2soZXZlbnROYW1lLCB0YXNrT2JqKSB7XG4gIGNvbnN0IHRhc2tzID0gdGFza3NDb250YWluZXIuY2hpbGROb2RlcztcbiAgY29uc29sZS5sb2codGFza3MpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgbGV0IHByb2plY3RJZCA9IHRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIik7XG4gICAgbGV0IHRhc2tJZCA9IHRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrSWRcIik7XG4gICAgaWYgKHRhc2tPYmoucHJvamVjdElkID09IHByb2plY3RJZCAmJiB0YXNrT2JqLnRhc2tJZCA9PSB0YXNrSWQpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0YXNrLmNoaWxkTm9kZXM7XG4gICAgICBjb25zb2xlLmxvZyhjaGlsZE5vZGVzKTtcbiAgICAgIGNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgPSB0YXNrT2JqLm5hbWU7XG4gICAgICBjaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlO1xuICAgIH1cbiAgfSk7XG59XG5cblB1YlN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0T2JqQ3JlYXRlZFwiLCBhZGRQcm9qZWN0VG9Eb20pO1xuUHViU3ViLnN1YnNjcmliZShcInRhc2tPYmpDcmVhdGVkXCIsIGFkZFRhc2tUb0RvbSk7XG5QdWJTdWIuc3Vic2NyaWJlKFwicHJvamVjdFN1Ym1pdEJ0bkNsaWNrZWRcIiwgY2xvc2VQcm9qZWN0Rm9ybSk7XG5QdWJTdWIuc3Vic2NyaWJlKFwiZGlzcGxheVRhc2tcIiwgYWRkVGFza1RvRG9tKTtcblB1YlN1Yi5zdWJzY3JpYmUoXCJjbGVhclRhc2tzQ29udGFpbmVyXCIsIGNsZWFyVGFza3NDb250YWluZXIpO1xuUHViU3ViLnN1YnNjcmliZShcImRpc3BsYXlUYXNrSW5mb1wiLCBkaXNwbGF5VGFza0luZm8pO1xuUHViU3ViLnN1YnNjcmliZShcImVkaXRCdXR0b25DbGlja2VkXCIsIG1ha2VGb3JtRWRpdGFibGUpO1xuUHViU3ViLnN1YnNjcmliZShcImNsb3NlVGFza0J1dHRvbkNsaWNrZWRcIiwgY2xvc2VUYXNrRm9ybSk7XG5QdWJTdWIuc3Vic2NyaWJlKFwicmVSZW5kZXJUYXNrXCIsIHVwZGF0ZVRhc2spO1xuIiwiaW1wb3J0IGV2ZW50Q29udHJvbGxlciBmcm9tIFwiLi9ldmVudENvbnRyb2xsZXJcIjtcbmltcG9ydCBwcm9qZWN0U3RydWN0dXJlciBmcm9tIFwiLi9wcm9qZWN0U3RydWN0dXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBldmVudENvbnRyb2xsZXIoKTtcbn1cbiIsImltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuaW1wb3J0ICogYXMgRE9NU2VydmljZSBmcm9tIFwiLi9ET01TZXJ2aWNlXCI7XG4vLyByZWZcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlUHJvamVjdFwiKTtcbmNvbnN0IGNsb3NlUHJvamVjdEZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUHJvamVjdEZvcm1cIik7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuY29uc3QgY2xvc2VUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VUYXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTdWJtaXRcIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1cIik7XG5cblB1YlN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0QWRkZWRUb0RvbVwiLCAoZXZlbnROYW1lLCBwcm9qZWN0RGl2KSA9PiB7XG4gIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIik7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJwcm9qZWN0Q2xpY2tlZFwiLCBwcm9qZWN0SWQpO1xuICB9KTtcbn0pO1xuUHViU3ViLnN1YnNjcmliZShcbiAgXCJ0YXNrQWRkZWRUb0RvbVwiLFxuICAoZXZlbnROYW1lLCB7IHRhc2tEaXYsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSB9KSA9PiB7XG4gICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCBwcm9qZWN0SWQ7XG4gICAgICBsZXQgdGFza0lkO1xuICAgICAgaWYgKGUuc3JjRWxlbWVudC5sb2NhbE5hbWUgPT0gXCJwXCIpIHtcbiAgICAgICAgcHJvamVjdElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJZFwiKTtcbiAgICAgICAgdGFza0lkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdElkXCIpO1xuICAgICAgICB0YXNrSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiKTtcbiAgICAgIH1cblxuICAgICAgUHViU3ViLnB1Ymxpc2goXCJ0YXNrQ2xpY2tlZFwiLCBbcHJvamVjdElkLCB0YXNrSWRdKTtcbiAgICB9KTtcbiAgfVxuKTtcblxuUHViU3ViLnN1YnNjcmliZShcImVkaXRCdXR0b25BZGRlZFwiLChldmVudE5hbWUsIGVkaXRCdXR0b24pPT57XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgUHViU3ViLnB1Ymxpc2goXCJlZGl0QnV0dG9uQ2xpY2tlZFwiKTtcbiAgfSlcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NU2VydmljZS5vcGVuUHJvamVjdEZvcm0pO1xuICBjbG9zZVByb2plY3RGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01TZXJ2aWNlLmNsb3NlUHJvamVjdEZvcm0pO1xuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01TZXJ2aWNlLm9wZW5UYXNrRm9ybSk7XG4gIGNsb3NlVGFza0Zvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiY2xvc2VUYXNrQnV0dG9uQ2xpY2tlZFwiLCBlKTtcbiAgfSk7XG5cbiAgcHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJwcm9qZWN0U3VibWl0QnRuQ2xpY2tlZFwiLCBlKTtcbiAgfSk7XG5cbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBQdWJTdWIucHVibGlzaChcInRhc2tTdWJtaXRCdG5DbGlja2VkXCIsIGUpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKGUsIElkKSB7XG4gIGxldCBuYW1lID0gZS50YXJnZXQuZm9ybVswXS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdElkID0gSWQ7XG4gIGxldCB0YXNrSWQgPSAwO1xuICBsZXQgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJvamVjdElkLCB0YXNrSWQsIHRhc2tzIH07XG59XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHsgbmFtZTogXCJEZWZhdWx0IFByb2plY3RcIiwgcHJvamVjdElkOiAxLCB0YXNrSWQ6IDAsIHRhc2tzOiBbXSB9LFxuXTtcblxubGV0IHByb2plY3RJZCA9IDE7XG5sZXQgY3VycmVudFByb2plY3RJZCA9IDE7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnROYW1lLCBwYXlsb2FkKSB7XG4gIHByb2plY3RJZCArPSAxO1xuICBjb25zdCBwcm9qZWN0T2JqID0gUHJvamVjdChwYXlsb2FkLCBwcm9qZWN0SWQpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3RPYmopO1xuICBQdWJTdWIucHVibGlzaChcInByb2plY3RPYmpDcmVhdGVkXCIsIHByb2plY3RPYmopO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKGV2ZW50TmFtZSwgcGF5bG9hZCkge1xuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcbiAgICBpZiAoY3VycmVudFByb2plY3RJZCA9PSBvYmoucHJvamVjdElkKSB7XG4gICAgICBvYmoudGFza0lkICs9IDE7XG4gICAgICBjb25zdCB0YXNrT2JqID0gVGFzayhwYXlsb2FkLCBjdXJyZW50UHJvamVjdElkLCBvYmoudGFza0lkKTtcbiAgICAgIG9iai50YXNrcy5wdXNoKHRhc2tPYmopO1xuICAgICAgUHViU3ViLnB1Ymxpc2goXCJ0YXNrT2JqQ3JlYXRlZFwiLCB0YXNrT2JqKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3MoZXZlbnROYW1lLCBjbGlja2VkUHJvamVjdElkKSB7XG4gIGlmIChjdXJyZW50UHJvamVjdElkICE9IGNsaWNrZWRQcm9qZWN0SWQpIHtcbiAgICBQdWJTdWIucHVibGlzaChcImNsZWFyVGFza3NDb250YWluZXJcIik7XG4gICAgY3VycmVudFByb2plY3RJZCA9IGNsaWNrZWRQcm9qZWN0SWQ7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnByb2plY3RJZCA9PSBjbGlja2VkUHJvamVjdElkKSB7XG4gICAgICAgIG9iai50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJkaXNwbGF5VGFza1wiLCB0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tJbmZvKGV2ZW50TmFtZSwgW2NsaWNrZWRQcm9qZWN0SWQsIHRhc2tJZF0pIHtcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgaWYgKGNsaWNrZWRQcm9qZWN0SWQgPT0gb2JqLnByb2plY3RJZCkge1xuICAgICAgb2JqLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2sudGFza0lkID09IHRhc2tJZCkge1xuICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVRhc2tJbmZvXCIsIFt0YXNrLCBjbGlja2VkUHJvamVjdElkLCB0YXNrSWRdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblB1YlN1Yi5wdWJsaXNoKFwicHJvamVjdE9iakNyZWF0ZWRcIiwgcHJvamVjdHNbMF0pO1xuUHViU3ViLnN1YnNjcmliZShcInByb2plY3RTdWJtaXRCdG5DbGlja2VkXCIsIGFkZFByb2plY3QpO1xuUHViU3ViLnN1YnNjcmliZShcInRhc2tTdWJtaXRCdG5DbGlja2VkXCIsIChldmVudE5hbWUsIGUpID0+IHtcbiAgaWYgKFxuICAgIGUuc3JjRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RJZFwiKSB8fFxuICAgIGUuc3JjRWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRhc2tJZFwiKVxuICApIHtcbiAgICBjb25zdCBwcm9qZWN0SUQgPSBlLnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIik7XG4gICAgY29uc3QgdGFza0lEID0gZS5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFza0lkXCIpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLnByb2plY3RJZCA9PSBwcm9qZWN0SUQpIHtcbiAgICAgICAgb2JqLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICBpZiAodGFzay50YXNrSWQgPT0gdGFza0lEKSB7XG4gICAgICAgICAgICB0YXNrLm5hbWUgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgICAgICAgICAgIHRhc2subm90ZSA9IGUudGFyZ2V0WzFdLnZhbHVlO1xuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gZS50YXJnZXRbMl0udmFsdWU7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gZS50YXJnZXRbM10uY2hlY2tlZFxuICAgICAgICAgICAgICA/IFwibG93XCJcbiAgICAgICAgICAgICAgOiBlLnRhcmdldFs0XS5jaGVja2VkXG4gICAgICAgICAgICAgID8gXCJtZWRpdW1cIlxuICAgICAgICAgICAgICA6IGUudGFyZ2V0WzVdLmNoZWNrZWRcbiAgICAgICAgICAgICAgPyBcImhpZ2hcIlxuICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlZCA9IGUudGFyZ2V0WzZdLmNoZWNrZWQ7XG4gICAgICAgICAgICBQdWJTdWIucHVibGlzaChcInJlUmVuZGVyVGFza1wiLCB0YXNrKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFzayhcInRhc2tTdWJtaXRCdG5DbGlja2VkXCIsIGUpO1xuICB9XG4gIFB1YlN1Yi5wdWJsaXNoKFwiY2xvc2VUYXNrQnV0dG9uQ2xpY2tlZFwiLCBlKTtcbn0pO1xuUHViU3ViLnN1YnNjcmliZShcInByb2plY3RDbGlja2VkXCIsIHNob3dUYXNrcyk7XG5QdWJTdWIuc3Vic2NyaWJlKFwidGFza0NsaWNrZWRcIiwgc2hvd1Rhc2tJbmZvKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tzKGUsIElkLCB0YXNrSUQpIHtcbiAgY29uc3QgcHJvamVjdElkID0gSWQ7XG4gIGNvbnN0IHRhc2tJZCA9IHRhc2tJRDtcbiAgbGV0IG5hbWUgPSBlLnRhcmdldFswXS52YWx1ZTtcbiAgbGV0IG5vdGUgPSBlLnRhcmdldFsxXS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBlLnRhcmdldFsyXS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gZS50YXJnZXRbM10uY2hlY2tlZFxuICAgID8gXCJsb3dcIlxuICAgIDogZS50YXJnZXRbNF0uY2hlY2tlZFxuICAgID8gXCJtZWRpdW1cIlxuICAgIDogZS50YXJnZXRbNV0uY2hlY2tlZFxuICAgID8gXCJoaWdoXCJcbiAgICA6IGZhbHNlO1xuICBsZXQgaXNDb21wbGV0ZWQgPSBlLnRhcmdldFs2XS5jaGVja2VkO1xuICByZXR1cm4geyBwcm9qZWN0SWQsIHRhc2tJZCwgbmFtZSwgbm90ZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuaW1wb3J0IGFwcENvb3JkaW5hdG9yIGZyb20gJy4vbW9kdWxlcy9hcHBDb29yZGluYXRvcidcblxuYXBwQ29vcmRpbmF0b3IoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=