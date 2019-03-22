module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./axios/dist/axios.js");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _createSerie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/createSerie.vue");
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Series.vue");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var file_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_background_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-background-http");
/* harmony import */ var nativescript_background_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_background_http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tns-core-modules/ui/image");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tns-core-modules/image-source");
/* harmony import */ var tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_image_source__WEBPACK_IMPORTED_MODULE_11__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import de la caméra












/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["token"],

  data() {
    return {
      description: "",
      lat: "",
      lon: "",
      locations: [],
      saveToGallery: false,
      keepAspectRatio: true,
      width: 320,
      height: 240,
      cameraImage: null,
      labelText: "",
      LoginP: _LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"],
      myImg: null
    };
  },

  methods: {
    onTakePictureTap: function onTakePictureTap(args) {
      let page = args.object.page;
      let that = this;
      Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_10__["requestPermissions"])().then(() => {
        Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_10__["takePicture"])({
          width: that.width,
          height: that.height,
          keepAspectRatio: that.keepAspectRatio,
          saveToGallery: that.saveToGallery
        }).then(imageAsset => {
          that.cameraImage = imageAsset;
          this.myImg = new tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_8__["Image"]();
          this.myImg.src = imageAsset;
          this.getLocation();
          imageAsset.getImageAsync(function (nativeImage) {
            let scale = 1;
            let actualWidth = 0;
            let actualHeight = 0;

            if (imageAsset.android) {
              scale = nativeImage.getDensity() / android.util.DisplayMetrics.DENSITY_DEFAULT;
              actualWidth = nativeImage.getWidth();
              actualHeight = nativeImage.getHeight();
            } else {
              scale = nativeImage.scale;
              actualWidth = nativeImage.size.width * scale;
              actualHeight = nativeImage.size.height * scale;
            }

            console.log(imageAsset);
            console.log('mlkmlklmkmlkmlkmlkmlkmlkm');
          });
        }, err => {
          console.log("Error -> " + err.message);
        });
      }, () => alert("permissions rejected"));
    },

    createPhoto() {
      let session = nativescript_background_http__WEBPACK_IMPORTED_MODULE_7__["session"]("image-upload");
      let request = {
        url: 'http://7da64424.ngrok.io/photos',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': "Bearer " + this.token
        }
      };
      var params = [{
        name: "desc",
        value: this.description
      }, {
        name: "lat",
        value: this.lat.toString()
      }, {
        name: "lng",
        value: this.lon.toString()
      }, {
        name: "image",
        filename: this.myImg.src.android,
        mimeType: 'image/jpeg'
      }];
      let task = session.multipartUpload(params, request);
      task.on('error', e => {
        console.log('error', e);
      });
      task.on('complete', e => {
        console.log('complete', JSON.stringify(e));
      });
    },

    getLocation() {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__["getCurrentLocation"]({
        desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_9__["Accuracy"].high,
        maximumAge: 5000,
        timeout: 20000
      }).then(res => {
        this.lat = res.latitude;
        this.lon = res.longitude;
        console.log(this.lat);
        fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=YOUR-API-KEY").then(response => response.json()).then(r => {
          this.addr = r.results[0].formatted_address;
        });
      });
    },

    mounted() {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__["enableLocationRequest"]();
    },

    goToSeries(args) {
      this.$navigateTo(_Series__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreateSerie(args) {
      this.$navigateTo(_createSerie__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreatephoto(args) {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToLogin(args) {
      this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Series.vue");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./axios/dist/axios.js");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_axios_dist_axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        fullname: "",
        email: "",
        password: ""
      }
    };
  },

  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      return new Promise((resolve, reject) => {
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://7da64424.ngrok.io/login", {}, {
          auth: {
            username: this.user.email,
            password: this.user.password
          }
        }).then(response => {
          console.log(response.data.token);
          this.$navigateTo(_Series__WEBPACK_IMPORTED_MODULE_1__["default"], {
            props: {
              token: response.data.token
            }
          });
          resolve(response);
        }).catch(error => {
          console.log(error);
          reject(error);
        });
      });
    },

    register() {
      return new Promise((resolve, reject) => {
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://7da64424.ngrok.io/register", {
          fullname: this.user.fullname,
          email: this.user.email,
          password: this.user.password
        }).then(response => {
          this.isLoggingIn = true;
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for GEOQUIZZ to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          this.$backendService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: GEOQUIZZ,
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./axios/dist/axios.js");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _createSerie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/createSerie.vue");
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Series.vue");
/* harmony import */ var _seriePhotos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/seriePhotos.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import de la caméra









/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["token"],

  data() {
    return {
      lat: "",
      lon: "",
      series: []
    };
  },

  methods: {
    onButtonTap(args) {
      this.$navigateTo(_seriePhotos__WEBPACK_IMPORTED_MODULE_5__["default"], {
        props: {
          token: this.token,
          ville: this.series[args.index].ville,
          id: this.series[args.index].id
        }
      });
    },

    goToSeries(args) {
      this.$navigateTo(_Series__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreateSerie(args) {
      this.$navigateTo(_createSerie__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreatephoto(args) {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToLogin(args) {
      this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    getSeries() {
      return new Promise((resolve, reject) => {
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://7da64424.ngrok.io/series").then(response => {
          //alert(response.data);
          console.log(response.data);
          this.series = response.data.series;
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }

  },

  mounted() {},

  created() {
    this.getSeries();
  },

  computed: {
    theSeries() {
      return this.series;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./axios/dist/axios.js");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _createSerie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/createSerie.vue");
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Series.vue");
/* harmony import */ var _seriePhotos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/seriePhotos.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import de la caméra









/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["token"],

  data() {
    return {
      lat: "",
      lon: "",
      ville: "",
      dist: ""
    };
  },

  methods: {
    goToSeries(args) {
      this.$navigateTo(_Series__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreateSerie(args) {
      this.$navigateTo(_createSerie__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreatephoto(args) {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToLogin(args) {
      this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    createSerie() {
      return new Promise((resolve, reject) => {
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://7da64424.ngrok.io/series", {
          ville: this.ville,
          lat: this.lat,
          lng: this.lon,
          dist: this.dist
        }).then(response => {
          alert("okyy");
          console.log(response.data);
          this.ville = "";
          this.lat = "";
          this.lon = "";
          this.dist = "";
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }

  },

  mounted() {},

  created() {},

  computed: {}
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./axios/dist/axios.js");
/* harmony import */ var _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios_dist_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _createSerie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/createSerie.vue");
/* harmony import */ var _Series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Series.vue");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-geolocation");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import de la caméra








const Detail = {
  props: ['url'],
  template: "\n    <Frame>\n      <Page>\n        <ActionBar title=\"Detail\"/>\n        <StackLayout>\n        <Image :src=\"'http://7da64424.ngrok.io/uploads/'+url\"\n                  class=\"thumb img-circle\"\n                />\n          <Button @tap=\"$modal.close\" text=\"Close\" />\n        </StackLayout>\n      </Page>\n    </Frame>\n  "
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["token", "ville", "id"],

  data() {
    return {
      photos: []
    };
  },

  methods: {
    showDetailPageModally(args) {
      this.$showModal(Detail, {
        fullscreen: true,
        props: {
          url: this.photos[args.index].url
        }
      });
    },

    onButtonTap() {
      console.log("Button was pressed");
    },

    goToSeries(args) {
      this.$navigateTo(_Series__WEBPACK_IMPORTED_MODULE_4__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreateSerie(args) {
      this.$navigateTo(_createSerie__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToCreatephoto(args) {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          token: this.token
        }
      });
    },

    goToLogin(args) {
      this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    },

    getPhotos() {
      return new Promise((resolve, reject) => {
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        _axios_dist_axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://7da64424.ngrok.io/series/" + this.id + "/photos").then(response => {
          console.log(response.data);
          this.photos = response.data.photos;
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }

  },

  mounted() {},

  created() {
    this.getPhotos();
    console.log(this.ville);
  },

  computed: {
    thePhotos() {
      return this.photos;
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-bar[data-v-67410f3a] {\n  background-color: deepskyblue;\n}\n#bouton[data-v-67410f3a] {\n  color: deepskyblue;\n  background-color: deepskyblue;\n}\n.tabview.active[data-v-67410f3a] {\n  border-bottom-color: white;\n  border-bottom-width: 3;\n  margin: 0;\n  height: 50;\n}\n.tabviewText[data-v-67410f3a] {\n  margin-top: 15;\n  margin-bottom: 5;\n  font-size: 13;\n  color: #d8d2d2;\n  horizontal-align: center;\n}\n.tabviewText.active[data-v-67410f3a] {\n  margin-top: 0;\n  margin-bottom: 5;\n  font-weight: bold;\n  color: white;\n  vertical-align: center;\n}\n.navTab[data-v-67410f3a] {\n  background-color: deepskyblue;\n}\n.navTabview[data-v-67410f3a] {\n  background-color: blue;\n}\n.progressbar[data-v-67410f3a] {\n  height: 50;\n  margin: 10;\n  border-radius: 10;\n  border-color: black;\n  border-width: 1;\n}\n.progressbar-value[data-v-67410f3a] {\n  background: #337ab7;\n}\n.status-img[data-v-67410f3a] {\n  margin-top: 4;\n  margin-right: 20;\n  width: 30;\n  height: 30;\n}\n.btnP[data-v-67410f3a] {\n  background-color: deepskyblue;\n  border-radius: 20px;\n  width: 400px;\n  color: white;\n  margin-top: -30px;\n}\n.btnB[data-v-67410f3a] {\n  background-color: deepskyblue;\n  width: 100%;\n  color: white;\n}\n.status-profile[data-v-67410f3a] {\n  border-width: 1;\n  border-color: #ffffff;\n  background-color: #f1ebeb;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 30;\n  height: 30;\n}\n.status-title[data-v-67410f3a] {\n  color: white;\n  font-size: 18;\n  margin-left: 15;\n  margin-top: 8;\n  horizontal-align: left;\n  vertical-align: center;\n}\nActionBar[data-v-67410f3a] {\n  background-color: #53ba82;\n  color: #ffffff;\n}\n.title[data-v-67410f3a] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-67410f3a] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-67410f3a] {\n  padding: 50 16 16 16;\n  margin-bottom: 16;\n  background-color: deepskyblue;\n  color: #ffffff;\n  font-size: 24;\n}\n.drawer-item[data-v-67410f3a] {\n  padding: 8 16;\n  color: #333333;\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=style&index=0&id=ef766fdc&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-bar[data-v-ef766fdc] {\n  background-color: deepskyblue;\n}\n#bouton[data-v-ef766fdc] {\n  color: deepskyblue;\n  background-color: deepskyblue;\n}\n.tabview.active[data-v-ef766fdc] {\n  border-bottom-color: white;\n  border-bottom-width: 3;\n  margin: 0;\n  height: 50;\n}\n.tabviewText[data-v-ef766fdc] {\n  margin-top: 15;\n  margin-bottom: 5;\n  font-size: 13;\n  color: #d8d2d2;\n  horizontal-align: center;\n}\n.tabviewText.active[data-v-ef766fdc] {\n  margin-top: 0;\n  margin-bottom: 5;\n  font-weight: bold;\n  color: white;\n  vertical-align: center;\n}\n.navTab[data-v-ef766fdc] {\n  background-color: deepskyblue;\n}\n.navTabview[data-v-ef766fdc] {\n  background-color: deepskyblue;\n}\n.status-img[data-v-ef766fdc] {\n  margin-top: 4;\n  margin-right: 20;\n  width: 30;\n  height: 30;\n}\n.status-profile[data-v-ef766fdc] {\n  border-width: 1;\n  border-color: #ffffff;\n  background-color: #f1ebeb;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 30;\n  height: 30;\n}\n.status-title[data-v-ef766fdc] {\n  color: white;\n  font-size: 18;\n  margin-left: 15;\n  margin-top: 8;\n  horizontal-align: left;\n  vertical-align: center;\n}\nActionBar[data-v-ef766fdc] {\n  background-color: deepskyblue;\n  color: #ffffff;\n}\n.title[data-v-ef766fdc] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-ef766fdc] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-ef766fdc] {\n  padding: 50 16 16 16;\n  margin-bottom: 16;\n  background-color: deepskyblue;\n  color: #ffffff;\n  font-size: 24;\n}\n.drawer-item[data-v-ef766fdc] {\n  padding: 8 16;\n  color: #333333;\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=style&index=0&id=790dd7f5&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-bar[data-v-790dd7f5] {\n  background-color: deepskyblue;\n}\n#bouton[data-v-790dd7f5] {\n  color: deepskyblue;\n  background-color: deepskyblue;\n}\n.tabview.active[data-v-790dd7f5] {\n  border-bottom-color: white;\n  border-bottom-width: 3;\n  margin: 0;\n  height: 50;\n}\n.tabviewText[data-v-790dd7f5] {\n  margin-top: 15;\n  margin-bottom: 5;\n  font-size: 13;\n  color: #d8d2d2;\n  horizontal-align: center;\n}\n.tabviewText.active[data-v-790dd7f5] {\n  margin-top: 0;\n  margin-bottom: 5;\n  font-weight: bold;\n  color: white;\n  vertical-align: center;\n}\n.navTab[data-v-790dd7f5] {\n  background-color: deepskyblue;\n}\n.navTabview[data-v-790dd7f5] {\n  background-color: blue;\n}\n.status-img[data-v-790dd7f5] {\n  margin-top: 4;\n  margin-right: 20;\n  width: 30;\n  height: 30;\n}\n.status-profile[data-v-790dd7f5] {\n  border-width: 1;\n  border-color: #ffffff;\n  background-color: #f1ebeb;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 30;\n  height: 30;\n}\n.status-title[data-v-790dd7f5] {\n  color: white;\n  font-size: 18;\n  margin-left: 15;\n  margin-top: 8;\n  horizontal-align: left;\n  vertical-align: center;\n}\nActionBar[data-v-790dd7f5] {\n  background-color: deepskyblue;\n  color: #ffffff;\n}\n.title[data-v-790dd7f5] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-790dd7f5] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-790dd7f5] {\n  padding: 50 16 16 16;\n  margin-bottom: 16;\n  background-color: deepskyblue;\n  color: #ffffff;\n  font-size: 24;\n}\n.drawer-item[data-v-790dd7f5] {\n  padding: 8 16;\n  color: #333333;\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=style&index=0&id=3afea69c&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-bar[data-v-3afea69c] {\n  background-color: deepskyblue;\n}\n#bouton[data-v-3afea69c] {\n  color: deepskyblue;\n  background-color: deepskyblue;\n}\n.tabview.active[data-v-3afea69c] {\n  border-bottom-color: white;\n  border-bottom-width: 3;\n  margin: 0;\n  height: 50;\n}\n.tabviewText[data-v-3afea69c] {\n  margin-top: 15;\n  margin-bottom: 5;\n  font-size: 13;\n  color: #d8d2d2;\n  horizontal-align: center;\n}\n.tabviewText.active[data-v-3afea69c] {\n  margin-top: 0;\n  margin-bottom: 5;\n  font-weight: bold;\n  color: white;\n  vertical-align: center;\n}\n.navTab[data-v-3afea69c] {\n  background-color: deepskyblue;\n}\n.navTabview[data-v-3afea69c] {\n  background-color: blue;\n}\n.status-img[data-v-3afea69c] {\n  margin-top: 4;\n  margin-right: 20;\n  width: 30;\n  height: 30;\n}\n.status-profile[data-v-3afea69c] {\n  border-width: 1;\n  border-color: #ffffff;\n  background-color: #f1ebeb;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 30;\n  height: 30;\n}\n.status-title[data-v-3afea69c] {\n  color: white;\n  font-size: 18;\n  margin-left: 15;\n  margin-top: 8;\n  horizontal-align: left;\n  vertical-align: center;\n}\nActionBar[data-v-3afea69c] {\n  background-color: deepskyblue;\n  color: #ffffff;\n}\n.title[data-v-3afea69c] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-3afea69c] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-3afea69c] {\n  padding: 50 16 16 16;\n  margin-bottom: 16;\n  background-color: deepskyblue;\n  color: #ffffff;\n  font-size: 24;\n}\n.drawer-item[data-v-3afea69c] {\n  padding: 8 16;\n  color: #333333;\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=style&index=0&id=e0bd9a66&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-e0bd9a66] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-e0bd9a66] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-e0bd9a66] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-e0bd9a66] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-e0bd9a66] {\n    margin-bottom: 25;\n}\n.input[data-v-e0bd9a66] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-e0bd9a66]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-e0bd9a66] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-e0bd9a66] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-e0bd9a66] {\n    margin-bottom: 20;\n}\n.bold[data-v-e0bd9a66] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { backgroundColor: "deepskyblue" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "100%", columns: "auto, *" } },
            [
              _c("Label", {
                attrs: { text: "MENU", col: "0" },
                on: {
                  tap: function($event) {
                    _vm.$refs.drawer.nativeView.showDrawer()
                  }
                }
              }),
              _c("Label", { staticClass: "title", attrs: { col: "1" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        { ref: "drawer" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#ffffff" }
            },
            [
              _c("Label", {
                staticClass: "drawer-header",
                attrs: { text: "GeoQuizz" }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "SERIES" },
                on: { tap: _vm.goToSeries }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE SERIES" },
                on: { tap: _vm.goToCreateSerie }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { color: "red", text: "CREATE PHOTO" },
                on: { tap: _vm.goToCreatephoto }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "LOGOUT" },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { columns: "*", rows: "*" }
            },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "auto,auto,*,auto", columns: "auto" } },
                [
                  _c(
                    "GridLayout",
                    {
                      ref: "navStatusBar",
                      staticClass: "navStatusBar",
                      attrs: {
                        row: "0",
                        backgroundColor: "deepskyblue",
                        verticalAlignment: "top",
                        height: "0",
                        width: "100%",
                        rows: "auto",
                        columns: "*,auto,auto,auto"
                      }
                    },
                    [
                      _c("Label", {
                        staticClass: "status-title",
                        attrs: { col: "0", row: "0" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    {
                      staticClass: "tabview",
                      class: _vm.selectedTabview == 1 ? "active" : "",
                      attrs: {
                        rows: "*,auto",
                        cols: "auto",
                        col: "1",
                        row: "0",
                        width: "34%"
                      }
                    },
                    [
                      _c("Image", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.selectedTabview == 1,
                            expression: "selectedTabview == 1"
                          }
                        ],
                        staticClass: "navIcon",
                        attrs: {
                          row: "0",
                          src:
                            _vm.selectedTabview == 1
                              ? "~/assets/images/category.png"
                              : ""
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      attrs: { row: "2", orientation: "vertical", padding: "" }
                    },
                    [
                      _c("Button", {
                        staticClass: "btnP",
                        attrs: {
                          row: "4",
                          text: "Take Picture",
                          "-": "",
                          padding: "10"
                        },
                        on: { tap: _vm.onTakePictureTap }
                      }),
                      _c("Image", {
                        attrs: {
                          row: "2",
                          src: _vm.cameraImage,
                          id: "image",
                          stretch: "aspectFit",
                          margin: "8"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      attrs: { row: "3", orientation: "vertical", padding: "" }
                    },
                    [
                      _c("TextField", {
                        staticClass: "textF",
                        attrs: {
                          hint: "Enter description...",
                          text: _vm.description
                        },
                        on: {
                          textChange: function($event) {
                            _vm.description = $event.value
                          }
                        }
                      }),
                      _c("Button", {
                        staticClass: "btnB",
                        attrs: {
                          row: "5",
                          text: "Send to backend",
                          padding: "10"
                        },
                        on: { tap: _vm.createPhoto }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=template&id=e0bd9a66&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/images/logo.png" }
              }),
              _c("Label", {
                staticClass: "header",
                attrs: { text: "GEOQUIZZ", color: "deepskyblue" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _vm.isLoggingIn == false
                    ? _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "0" } },
                        [
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              hint: "Fullname",
                              isEnabled: !_vm.processing,
                              keyboardType: "text",
                              autocorrect: "false",
                              autocapitalizationType: "none",
                              returnKeyType: "next",
                              text: _vm.user.fullname
                            },
                            on: {
                              returnPress: _vm.focusPassword,
                              textChange: function($event) {
                                _vm.$set(_vm.user, "fullname", $event.value)
                              }
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.email
                        },
                        on: {
                          returnPress: _vm.focusPassword,
                          textChange: function($event) {
                            _vm.$set(_vm.user, "email", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "2" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Password",
                          secure: "true",
                          returnKeyType: _vm.isLoggingIn ? "done" : "next",
                          text: _vm.user.password
                        },
                        on: {
                          returnPress: _vm.focusConfirmPassword,
                          textChange: function($event) {
                            _vm.$set(_vm.user, "password", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                  isEnabled: !_vm.processing,
                  borderRadius: "20px"
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Forgot your password?"
                },
                on: {
                  tap: function($event) {
                    _vm.forgotPassword()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=template&id=ef766fdc&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { backgroundColor: "deepskyblue" } },
        [
          _c(
            "GridLayout",
            {
              attrs: {
                width: "100%",
                columns: "auto, *",
                backgroundColor: "deepskyblue"
              }
            },
            [
              _c("Label", {
                attrs: { text: "MENU", col: "0" },
                on: {
                  tap: function($event) {
                    _vm.$refs.drawer.nativeView.showDrawer()
                  }
                }
              }),
              _c("Label", { staticClass: "title", attrs: { col: "1" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        { ref: "drawer" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#ffffff" }
            },
            [
              _c("Label", {
                staticClass: "drawer-header",
                attrs: { text: "GeoQuizz" }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { color: "red", text: "SERIES" },
                on: { tap: _vm.goToSeries }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE SERIES" },
                on: { tap: _vm.goToCreateSerie }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE PHOTO" },
                on: { tap: _vm.goToCreatephoto }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "LOGOUT" },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { columns: "*", rows: "*" }
            },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "vertical",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray"
                  }
                },
                [
                  _c(
                    "ListView",
                    {
                      staticClass: "list-group",
                      staticStyle: { height: "1250px" },
                      attrs: { items: _vm.series, "+alias": "serie" },
                      on: { itemTap: _vm.onButtonTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var serie = ref.serie
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                {
                                  staticClass: "list-group-item",
                                  attrs: { flexDirection: "row" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "list-group-item-heading",
                                    staticStyle: { width: "60%" },
                                    attrs: { text: serie.ville }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=template&id=790dd7f5&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c(
            "GridLayout",
            { attrs: { width: "100%", columns: "auto, *" } },
            [
              _c("Label", {
                attrs: { text: "MENU", col: "0" },
                on: {
                  tap: function($event) {
                    _vm.$refs.drawer.nativeView.showDrawer()
                  }
                }
              }),
              _c("Label", { staticClass: "title", attrs: { col: "1" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        { ref: "drawer" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#ffffff" }
            },
            [
              _c("Label", {
                staticClass: "drawer-header",
                attrs: { text: "GeoQuizz" }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "SERIES" },
                on: { tap: _vm.goToSeries }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { color: "red", text: "CREATE SERIE" },
                on: { tap: _vm.goToCreateSerie }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE PHOTO" },
                on: { tap: _vm.goToCreatephoto }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "LOGOUT" },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { columns: "*", rows: "*" }
            },
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "vertical", padding: "" } },
                [
                  _c("TextField", {
                    attrs: { hint: "Enter ville...", text: _vm.ville },
                    on: {
                      textChange: function($event) {
                        _vm.ville = $event.value
                      }
                    }
                  }),
                  _c("TextField", {
                    attrs: { hint: "Enter lat...", text: _vm.lat },
                    on: {
                      textChange: function($event) {
                        _vm.lat = $event.value
                      }
                    }
                  }),
                  _c("TextField", {
                    attrs: { hint: "Enter lon...", text: _vm.lon },
                    on: {
                      textChange: function($event) {
                        _vm.lon = $event.value
                      }
                    }
                  }),
                  _c("TextField", {
                    attrs: { hint: "Enter dist...", text: _vm.dist },
                    on: {
                      textChange: function($event) {
                        _vm.dist = $event.value
                      }
                    }
                  }),
                  _c("Button", {
                    attrs: { text: "create serie", padding: "10" },
                    on: { tap: _vm.createSerie }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=template&id=3afea69c&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c(
            "GridLayout",
            { attrs: { width: "100%", columns: "auto, *" } },
            [
              _c("Label", {
                attrs: { text: "MENU", col: "0" },
                on: {
                  tap: function($event) {
                    _vm.$refs.drawer.nativeView.showDrawer()
                  }
                }
              }),
              _c("Label", { staticClass: "title", attrs: { col: "1" } })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        { ref: "drawer" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#ffffff" }
            },
            [
              _c("Label", {
                staticClass: "drawer-header",
                attrs: { text: "GeoQuizz" }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "SERIES" },
                on: { tap: _vm.goToSeries }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE SERIE" },
                on: { tap: _vm.goToCreateSerie }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "CREATE PHOTO" },
                on: { tap: _vm.goToCreatephoto }
              }),
              _c("Label", {
                staticClass: "drawer-item",
                attrs: { text: "DECONNEXION" },
                on: { tap: _vm.goToLogin }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { columns: "*", rows: "*" }
            },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "vertical",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray"
                  }
                },
                [
                  _c(
                    "ListView",
                    {
                      staticClass: "list-group",
                      staticStyle: { height: "1250px" },
                      attrs: {
                        width: "100%",
                        items: _vm.thePhotos,
                        "+alias": "photo"
                      },
                      on: { itemTap: _vm.showDetailPageModally }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var photo = ref.photo
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "FlexboxLayout",
                                {
                                  staticClass: "list-group-item",
                                  attrs: { flexDirection: "row" }
                                },
                                [
                                  _c("Image", {
                                    staticClass: "thumb img-circle",
                                    attrs: {
                                      src:
                                        "http://7da64424.ngrok.io/uploads/" +
                                        photo.url
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "list-group-item-heading",
                                    staticStyle: { width: "60%" },
                                    attrs: { text: photo.desc }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style Ucomponents.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n*/\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('RadSideDrawer', () => __webpack_require__("nativescript-ui-sidedrawer").RadSideDrawer);
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <LoginPage />\n        </Frame>",
  components: {
    LoginPage: _components_LoginPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./axios/dist/axios.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/

        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(1);
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      var bind = __webpack_require__(3);

      var Axios = __webpack_require__(5);

      var defaults = __webpack_require__(6);
      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */


      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

        utils.extend(instance, Axios.prototype, context); // Copy context to instance

        utils.extend(instance, context);
        return instance;
      } // Create the default instance to be exported


      var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

      axios.Axios = Axios; // Factory for creating new instances

      axios.create = function create(instanceConfig) {
        return createInstance(utils.merge(defaults, instanceConfig));
      }; // Expose Cancel & CancelToken


      axios.Cancel = __webpack_require__(23);
      axios.CancelToken = __webpack_require__(24);
      axios.isCancel = __webpack_require__(20); // Expose all/spread

      axios.all = function all(promises) {
        return Promise.all(promises);
      };

      axios.spread = __webpack_require__(25);
      module.exports = axios; // Allow use of default import syntax in TypeScript

      module.exports.default = axios;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var bind = __webpack_require__(3);

      var isBuffer = __webpack_require__(4);
      /*global toString:true*/
      // utils is a library of generic helper functions non-specific to axios


      var toString = Object.prototype.toString;
      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */

      function isArray(val) {
        return toString.call(val) === '[object Array]';
      }
      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */


      function isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
      }
      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */


      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }
      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */


      function isArrayBufferView(val) {
        var result;

        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }

        return result;
      }
      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */


      function isString(val) {
        return typeof val === 'string';
      }
      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */


      function isNumber(val) {
        return typeof val === 'number';
      }
      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */


      function isUndefined(val) {
        return typeof val === 'undefined';
      }
      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */


      function isObject(val) {
        return val !== null && typeof val === 'object';
      }
      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */


      function isDate(val) {
        return toString.call(val) === '[object Date]';
      }
      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */


      function isFile(val) {
        return toString.call(val) === '[object File]';
      }
      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */


      function isBlob(val) {
        return toString.call(val) === '[object Blob]';
      }
      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */


      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }
      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */


      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */


      function isURLSearchParams(val) {
        return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
      }
      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */


      function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }
      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       */


      function isStandardBrowserEnv() {
        if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          return false;
        }

        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }
      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */


      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === 'undefined') {
          return;
        } // Force an array if not already something iterable


        if (typeof obj !== 'object') {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */


      function merge()
      /* obj1, obj2, obj3, ... */
      {
        var result = {};

        function assignValue(val, key) {
          if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }

        return result;
      }
      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */


      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
      };
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      'use strict';

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);

          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }

          return fn.apply(thisArg, args);
        };
      };
      /***/

    },
    /* 4 */

    /***/
    function (module, exports) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      } // For Node v0.10 support. Remove this eventually.


      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var defaults = __webpack_require__(6);

      var utils = __webpack_require__(2);

      var InterceptorManager = __webpack_require__(17);

      var dispatchRequest = __webpack_require__(18);
      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */


      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */


      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof config === 'string') {
          config = utils.merge({
            url: arguments[0]
          }, arguments[1]);
        }

        config = utils.merge(defaults, {
          method: 'get'
        }, this.defaults, config);
        config.method = config.method.toLowerCase(); // Hook up interceptors middleware

        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      }; // Provide aliases for supported request methods


      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url
          }));
        };
      });
      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, data, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
          }));
        };
      });
      module.exports = Axios;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      var normalizeHeaderName = __webpack_require__(7);

      var DEFAULT_CONTENT_TYPE = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
          headers['Content-Type'] = value;
        }
      }

      function getDefaultAdapter() {
        var adapter;

        if (typeof XMLHttpRequest !== 'undefined') {
          // For browsers use XHR adapter
          adapter = __webpack_require__(8);
        } else if (typeof process !== 'undefined') {
          // For node use HTTP adapter
          adapter = __webpack_require__(8);
        }

        return adapter;
      }

      var defaults = {
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, 'Content-Type');

          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }

          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }

          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
            return data.toString();
          }

          if (utils.isObject(data)) {
            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
            return JSON.stringify(data);
          }

          return data;
        }],
        transformResponse: [function transformResponse(data) {
          /*eslint no-param-reassign:0*/
          if (typeof data === 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) {
              /* Ignore */
            }
          }

          return data;
        }],

        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          'Accept': 'application/json, text/plain, */*'
        }
      };
      utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      var settle = __webpack_require__(9);

      var buildURL = __webpack_require__(12);

      var parseHeaders = __webpack_require__(13);

      var isURLSameOrigin = __webpack_require__(14);

      var createError = __webpack_require__(10);

      var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(15);

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;

          if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
          }

          var request = new XMLHttpRequest();
          var loadEvent = 'onreadystatechange';
          var xDomain = false; // For IE 8/9 CORS support
          // Only supports POST and GET calls and doesn't returns the response headers.
          // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

          if ( true && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
            request = new window.XDomainRequest();
            loadEvent = 'onload';
            xDomain = true;

            request.onprogress = function handleProgress() {};

            request.ontimeout = function handleTimeout() {};
          } // HTTP basic authentication


          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
          }

          request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

          request.timeout = config.timeout; // Listen for ready state

          request[loadEvent] = function handleLoad() {
            if (!request || request.readyState !== 4 && !xDomain) {
              return;
            } // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request


            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            } // Prepare the response


            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
              data: responseData,
              // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
              status: request.status === 1223 ? 204 : request.status,
              statusText: request.status === 1223 ? 'No Content' : request.statusText,
              headers: responseHeaders,
              config: config,
              request: request
            };
            settle(resolve, reject, response); // Clean up request

            request = null;
          }; // Handle low level network errors


          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request)); // Clean up request

            request = null;
          }; // Handle timeout


          request.ontimeout = function handleTimeout() {
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

            request = null;
          }; // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.


          if (utils.isStandardBrowserEnv()) {
            var cookies = __webpack_require__(16); // Add xsrf header


            var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          } // Add headers to the request


          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                // Remove Content-Type if data is undefined
                delete requestHeaders[key];
              } else {
                // Otherwise add header to the request
                request.setRequestHeader(key, val);
              }
            });
          } // Add withCredentials to request if needed


          if (config.withCredentials) {
            request.withCredentials = true;
          } // Add responseType to request if needed


          if (config.responseType) {
            try {
              request.responseType = config.responseType;
            } catch (e) {
              // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
              // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
              if (config.responseType !== 'json') {
                throw e;
              }
            }
          } // Handle progress if needed


          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
          } // Not all browsers support upload events


          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
          }

          if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }

              request.abort();
              reject(cancel); // Clean up request

              request = null;
            });
          }

          if (requestData === undefined) {
            requestData = null;
          } // Send the request


          request.send(requestData);
        });
      };
      /***/

    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var createError = __webpack_require__(10);
      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */


      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus; // Note: status is not exposed by XDomainRequest

        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
        }
      };
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var enhanceError = __webpack_require__(11);
      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */


      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
      /***/

    },
    /* 11 */

    /***/
    function (module, exports) {
      'use strict';
      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */

      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;

        if (code) {
          error.code = code;
        }

        error.request = request;
        error.response = response;
        return error;
      };
      /***/

    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      }
      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */


      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;

        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }

              parts.push(encode(key) + '=' + encode(v));
            });
          });
          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };
      /***/

    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2); // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers


      var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */

      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }

            if (key === 'set-cookie') {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          }
        });
        return parsed;
      };
      /***/

    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */

        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);
        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */

        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
      /***/
    },
    /* 15 */

    /***/
    function (module, exports) {
      'use strict'; // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

      function E() {
        this.message = 'String contains an invalid character';
      }

      E.prototype = new Error();
      E.prototype.code = 5;
      E.prototype.name = 'InvalidCharacterError';

      function btoa(input) {
        var str = String(input);
        var output = '';

        for ( // initialize result and counter
        var block, charCode, idx = 0, map = chars; // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
          charCode = str.charCodeAt(idx += 3 / 4);

          if (charCode > 0xFF) {
            throw new E();
          }

          block = block << 8 | charCode;
        }

        return output;
      }

      module.exports = btoa;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() : // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      }();
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      function InterceptorManager() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */


      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected
        });
        return this.handlers.length - 1;
      };
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */


      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */


      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);

      var transformData = __webpack_require__(19);

      var isCancel = __webpack_require__(20);

      var defaults = __webpack_require__(6);

      var isAbsoluteURL = __webpack_require__(21);

      var combineURLs = __webpack_require__(22);
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */


      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }
      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */


      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config); // Support baseURL config

        if (config.baseURL && !isAbsoluteURL(config.url)) {
          config.url = combineURLs(config.baseURL, config.url);
        } // Ensure headers exist


        config.headers = config.headers || {}; // Transform request data

        config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config); // Transform response data

          response.data = transformData(response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config); // Transform response data

            if (reason && reason.response) {
              reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
          }

          return Promise.reject(reason);
        });
      };
      /***/

    },
    /* 19 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var utils = __webpack_require__(2);
      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */


      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });
        return data;
      };
      /***/

    },
    /* 20 */

    /***/
    function (module, exports) {
      'use strict';

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
      /***/

    },
    /* 21 */

    /***/
    function (module, exports) {
      'use strict';
      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */

      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
      /***/

    },
    /* 22 */

    /***/
    function (module, exports) {
      'use strict';
      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */

      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
      };
      /***/

    },
    /* 23 */

    /***/
    function (module, exports) {
      'use strict';
      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */

      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      };

      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
      /***/
    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var Cancel = __webpack_require__(23);
      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */


      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      /**
       * Throws a `Cancel` if cancellation has been requested.
       */


      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */


      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;
      /***/
    },
    /* 25 */

    /***/
    function (module, exports) {
      'use strict';
      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */

      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
      /***/

    }])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/process/browser.js")))

/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/LoginPage.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LoginPage.vue?vue&type=template&id=e0bd9a66&scoped=true&");
/* harmony import */ var _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/LoginPage.vue?vue&type=style&index=0&id=e0bd9a66&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e0bd9a66",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/LoginPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/LoginPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/LoginPage.vue?vue&type=style&index=0&id=e0bd9a66&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=style&index=0&id=e0bd9a66&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_style_index_0_id_e0bd9a66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/LoginPage.vue?vue&type=template&id=e0bd9a66&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=template&id=e0bd9a66&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginPage_vue_vue_type_template_id_e0bd9a66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Series.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Series.vue?vue&type=template&id=ef766fdc&scoped=true&");
/* harmony import */ var _Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Series.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Series.vue?vue&type=style&index=0&id=ef766fdc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef766fdc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Series.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Series.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Series.vue?vue&type=style&index=0&id=ef766fdc&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=style&index=0&id=ef766fdc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_style_index_0_id_ef766fdc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Series.vue?vue&type=template&id=ef766fdc&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Series.vue?vue&type=template&id=ef766fdc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Series_vue_vue_type_template_id_ef766fdc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/createSerie.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/createSerie.vue?vue&type=template&id=790dd7f5&scoped=true&");
/* harmony import */ var _createSerie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/createSerie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/createSerie.vue?vue&type=style&index=0&id=790dd7f5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _createSerie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "790dd7f5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/createSerie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/createSerie.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/createSerie.vue?vue&type=style&index=0&id=790dd7f5&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=style&index=0&id=790dd7f5&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_style_index_0_id_790dd7f5_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/createSerie.vue?vue&type=template&id=790dd7f5&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/createSerie.vue?vue&type=template&id=790dd7f5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createSerie_vue_vue_type_template_id_790dd7f5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/seriePhotos.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/seriePhotos.vue?vue&type=template&id=3afea69c&scoped=true&");
/* harmony import */ var _seriePhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/seriePhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/seriePhotos.vue?vue&type=style&index=0&id=3afea69c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _seriePhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3afea69c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/seriePhotos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/seriePhotos.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/seriePhotos.vue?vue&type=style&index=0&id=3afea69c&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=style&index=0&id=3afea69c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_style_index_0_id_3afea69c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/seriePhotos.vue?vue&type=template&id=3afea69c&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/seriePhotos.vue?vue&type=template&id=3afea69c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seriePhotos_vue_vue_type_template_id_3afea69c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true},"main":"app.js","name":"tns-template-vue","version":"3.2.0"};

/***/ }),

/***/ "nativescript-background-http":
/***/ (function(module, exports) {

module.exports = require("nativescript-background-http");

/***/ }),

/***/ "nativescript-camera":
/***/ (function(module, exports) {

module.exports = require("nativescript-camera");

/***/ }),

/***/ "nativescript-geolocation":
/***/ (function(module, exports) {

module.exports = require("nativescript-geolocation");

/***/ }),

/***/ "nativescript-ui-sidedrawer":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/debugger/devtools-elements.js":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/debugger/devtools-elements.js");

/***/ }),

/***/ "tns-core-modules/image-source":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/image-source");

/***/ }),

/***/ "tns-core-modules/ui/enums":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/enums");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

/******/ });