(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css-regular.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const loadCss = __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css.js");

module.exports = function () {
  loadCss(function () {
    const appCssContext = __webpack_require__("./ sync ^\\.\\/app\\.(css|scss|less|sass)$");

    global.registerWebpackModules(appCssContext);
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (loadModuleFn) {
  const application = __webpack_require__("tns-core-modules/application");

  __webpack_require__("tns-core-modules/ui/styling/style-scope");

  loadModuleFn();
  application.loadAppCss();
};

/***/ }),

/***/ "../node_modules/tns-core-modules/debugger/debugger.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});
var network;

function getNetwork() {
  return network;
}

exports.getNetwork = getNetwork;

function setNetwork(newNetwork) {
  network = newNetwork;
}

exports.setNetwork = setNetwork;
var dom;

function getDOM() {
  return dom;
}

exports.getDOM = getDOM;

function setDOM(newDOM) {
  dom = newDOM;
}

exports.setDOM = setDOM;
var css;

function getCSS() {
  return css;
}

exports.getCSS = getCSS;

function setCSS(newCSS) {
  css = newCSS;
}

exports.setCSS = setCSS;
var NetworkAgent;

(function (NetworkAgent) {
  function responseReceived(requestId, result, headers) {
    var requestIdStr = requestId.toString();
    var mimeType = headers["Content-Type"] || headers["content-type"] || "application/octet-stream";
    var contentLengthHeader = headers["Content-Length"] || headers["content-length"];
    var contentLength = parseInt(contentLengthHeader, 10);

    if (isNaN(contentLength)) {
      contentLength = 0;
    }

    var response = {
      url: result.url || "",
      status: result.statusCode,
      statusText: result.statusText || "",
      headers: headers,
      mimeType: mimeType,
      fromDiskCache: false,
      connectionReused: true,
      connectionId: 0,
      encodedDataLength: contentLength,
      securityState: "info"
    };
    var responseData = {
      requestId: requestIdStr,
      type: mimeTypeToType(response.mimeType),
      response: response,
      timestamp: getTimeStamp()
    };

    global.__inspector.responseReceived(responseData);

    global.__inspector.loadingFinished({
      requestId: requestIdStr,
      timestamp: getTimeStamp(),
      encodedDataLength: contentLength
    });

    var hasTextContent = responseData.type === "Document" || responseData.type === "Script";
    var data;

    if (!hasTextContent) {
      if (responseData.type === "Image") {
        var bitmap = result.responseAsImage;

        if (bitmap) {
          var outputStream = new java.io.ByteArrayOutputStream();
          bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, outputStream);
          var base64Image = android.util.Base64.encodeToString(outputStream.toByteArray(), android.util.Base64.DEFAULT);
          data = base64Image;
        }
      }
    } else {
      data = result.responseAsString;
    }

    var successfulRequestData = {
      requestId: requestIdStr,
      data: data,
      hasTextContent: hasTextContent
    };

    global.__inspector.dataForRequestId(successfulRequestData);
  }

  NetworkAgent.responseReceived = responseReceived;

  function requestWillBeSent(requestId, options) {
    var request = {
      url: options.url,
      method: options.method,
      headers: options.headers || {},
      postData: options.content ? options.content.toString() : "",
      initialPriority: "Medium",
      referrerPolicy: "no-referrer-when-downgrade"
    };
    var requestData = {
      requestId: requestId.toString(),
      url: request.url,
      request: request,
      timestamp: getTimeStamp(),
      type: "Document",
      wallTime: 0
    };

    global.__inspector.requestWillBeSent(requestData);
  }

  NetworkAgent.requestWillBeSent = requestWillBeSent;

  function getTimeStamp() {
    var d = new Date();
    return Math.round(d.getTime() / 1000);
  }

  function mimeTypeToType(mimeType) {
    var type = "Document";

    if (mimeType) {
      if (mimeType.indexOf("image") === 0) {
        type = "Image";
      } else if (mimeType.indexOf("javascript") !== -1 || mimeType.indexOf("json") !== -1) {
        type = "Script";
      }
    }

    return type;
  }
})(NetworkAgent = exports.NetworkAgent || (exports.NetworkAgent = {}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/tns-core-modules/file-system/file-system-access.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var text_1 = __webpack_require__("../node_modules/tns-core-modules/text/text.js");

var utils_1 = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

var FileSystemAccess = function () {
  function FileSystemAccess() {}

  FileSystemAccess.prototype.getLastModified = function (path) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
    var attributes = fileManager.attributesOfItemAtPathError(path);

    if (attributes) {
      return attributes.objectForKey("NSFileModificationDate");
    } else {
      return new Date();
    }
  };

  FileSystemAccess.prototype.getFileSize = function (path) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
    var attributes = fileManager.attributesOfItemAtPathError(path);

    if (attributes) {
      return attributes.objectForKey("NSFileSize");
    } else {
      return 0;
    }
  };

  FileSystemAccess.prototype.getParent = function (path, onError) {
    try {
      var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
      var nsString = NSString.stringWithString(path);
      var parentPath = nsString.stringByDeletingLastPathComponent;
      var name_1 = fileManager.displayNameAtPath(parentPath);
      return {
        path: parentPath.toString(),
        name: name_1
      };
    } catch (exception) {
      if (onError) {
        onError(exception);
      }

      return undefined;
    }
  };

  FileSystemAccess.prototype.getFile = function (path, onError) {
    try {
      var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
      var exists = fileManager.fileExistsAtPath(path);

      if (!exists) {
        var parentPath = this.getParent(path, onError).path;

        if (!fileManager.createDirectoryAtPathWithIntermediateDirectoriesAttributesError(parentPath, true, null) || !fileManager.createFileAtPathContentsAttributes(path, null, null)) {
          if (onError) {
            onError(new Error("Failed to create file at path '" + path + "'"));
          }

          return undefined;
        }
      }

      var fileName = fileManager.displayNameAtPath(path);
      return {
        path: path,
        name: fileName,
        extension: this.getFileExtension(path)
      };
    } catch (exception) {
      if (onError) {
        onError(exception);
      }

      return undefined;
    }
  };

  FileSystemAccess.prototype.getFolder = function (path, onError) {
    try {
      var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
      var exists = this.folderExists(path);

      if (!exists) {
        try {
          fileManager.createDirectoryAtPathWithIntermediateDirectoriesAttributesError(path, true, null);
        } catch (ex) {
          if (onError) {
            onError(new Error("Failed to create folder at path '" + path + "': " + ex));
          }

          return undefined;
        }
      }

      var dirName = fileManager.displayNameAtPath(path);
      return {
        path: path,
        name: dirName
      };
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to create folder at path '" + path + "'"));
      }

      return undefined;
    }
  };

  FileSystemAccess.prototype.getExistingFolder = function (path, onError) {
    try {
      var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
      var exists = this.folderExists(path);

      if (exists) {
        var dirName = fileManager.displayNameAtPath(path);
        return {
          path: path,
          name: dirName
        };
      }

      return undefined;
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to get folder at path '" + path + "'"));
      }

      return undefined;
    }
  };

  FileSystemAccess.prototype.eachEntity = function (path, onEntity, onError) {
    if (!onEntity) {
      return;
    }

    this.enumEntities(path, onEntity, onError);
  };

  FileSystemAccess.prototype.getEntities = function (path, onError) {
    var fileInfos = new Array();

    var onEntity = function (entity) {
      fileInfos.push(entity);
      return true;
    };

    var errorOccurred;

    var localError = function (error) {
      if (onError) {
        onError(error);
      }

      errorOccurred = true;
    };

    this.enumEntities(path, onEntity, localError);

    if (!errorOccurred) {
      return fileInfos;
    }

    return null;
  };

  FileSystemAccess.prototype.fileExists = function (path) {
    var result = this.exists(path);
    return result.exists;
  };

  FileSystemAccess.prototype.folderExists = function (path) {
    var result = this.exists(path);
    return result.exists && result.isDirectory;
  };

  FileSystemAccess.prototype.exists = function (path) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
    var isDirectory = new interop.Reference(interop.types.bool, false);
    var exists = fileManager.fileExistsAtPathIsDirectory(path, isDirectory);
    return {
      exists: exists,
      isDirectory: isDirectory.value
    };
  };

  FileSystemAccess.prototype.concatPath = function (left, right) {
    return NSString.pathWithComponents([left, right]).toString();
  };

  FileSystemAccess.prototype.deleteFile = function (path, onError) {
    this.deleteEntity(path, onError);
  };

  FileSystemAccess.prototype.deleteFolder = function (path, onError) {
    this.deleteEntity(path, onError);
  };

  FileSystemAccess.prototype.emptyFolder = function (path, onError) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
    var entities = this.getEntities(path, onError);

    if (!entities) {
      return;
    }

    for (var i = 0; i < entities.length; i++) {
      try {
        fileManager.removeItemAtPathError(entities[i].path);
      } catch (ex) {
        if (onError) {
          onError(new Error("Failed to empty folder '" + path + "': " + ex));
        }

        return;
      }
    }
  };

  FileSystemAccess.prototype.rename = function (path, newPath, onError) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);

    try {
      fileManager.moveItemAtPathToPathError(path, newPath);
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to rename '" + path + "' to '" + newPath + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.getLogicalRootPath = function () {
    var mainBundlePath = utils_1.ios.getter(NSBundle, NSBundle.mainBundle).bundlePath;
    var resolvedPath = NSString.stringWithString(mainBundlePath).stringByResolvingSymlinksInPath;
    return resolvedPath;
  };

  FileSystemAccess.prototype.getDocumentsFolderPath = function () {
    return this.getKnownPath(9);
  };

  FileSystemAccess.prototype.getTempFolderPath = function () {
    return this.getKnownPath(13);
  };

  FileSystemAccess.prototype.getCurrentAppPath = function () {
    return utils_1.ios.getCurrentAppPath();
  };

  FileSystemAccess.prototype.readText = function (path, onError, encoding) {
    var actualEncoding = encoding || text_1.encoding.UTF_8;

    try {
      var nsString = NSString.stringWithContentsOfFileEncodingError(path, actualEncoding);
      return nsString.toString();
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to read file at path '" + path + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.read = function (path, onError) {
    try {
      return NSData.dataWithContentsOfFile(path);
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to read file at path '" + path + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.writeText = function (path, content, onError, encoding) {
    var nsString = NSString.stringWithString(content);
    var actualEncoding = encoding || text_1.encoding.UTF_8;

    try {
      nsString.writeToFileAtomicallyEncodingError(path, false, actualEncoding);
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to write to file '" + path + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.write = function (path, content, onError) {
    try {
      content.writeToFileAtomically(path, true);
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to write to file '" + path + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.getKnownPath = function (folderType) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
    var paths = fileManager.URLsForDirectoryInDomains(folderType, 1);
    var url = paths.objectAtIndex(0);
    return url.path;
  };

  FileSystemAccess.prototype.getFileExtension = function (path) {
    var dotIndex = path.lastIndexOf(".");

    if (dotIndex && dotIndex >= 0 && dotIndex < path.length) {
      return path.substring(dotIndex);
    }

    return "";
  };

  FileSystemAccess.prototype.deleteEntity = function (path, onError) {
    var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);

    try {
      fileManager.removeItemAtPathError(path);
    } catch (ex) {
      if (onError) {
        onError(new Error("Failed to delete file at path '" + path + "': " + ex));
      }
    }
  };

  FileSystemAccess.prototype.enumEntities = function (path, callback, onError) {
    try {
      var fileManager = utils_1.ios.getter(NSFileManager, NSFileManager.defaultManager);
      var files = void 0;

      try {
        files = fileManager.contentsOfDirectoryAtPathError(path);
      } catch (ex) {
        if (onError) {
          onError(new Error("Failed to enum files for folder '" + path + "': " + ex));
        }

        return;
      }

      for (var i = 0; i < files.count; i++) {
        var file = files.objectAtIndex(i);
        var info = {
          path: this.concatPath(path, file),
          name: file,
          extension: ""
        };

        if (!this.folderExists(this.joinPath(path, file))) {
          info.extension = this.getFileExtension(info.path);
        }

        var retVal = callback(info);

        if (retVal === false) {
          break;
        }
      }
    } catch (ex) {
      if (onError) {
        onError(ex);
      }
    }
  };

  FileSystemAccess.prototype.getPathSeparator = function () {
    return "/";
  };

  FileSystemAccess.prototype.normalizePath = function (path) {
    var nsString = NSString.stringWithString(path);
    var normalized = nsString.stringByStandardizingPath;
    return normalized;
  };

  FileSystemAccess.prototype.joinPath = function (left, right) {
    var nsString = NSString.stringWithString(left);
    return nsString.stringByAppendingPathComponent(right);
  };

  FileSystemAccess.prototype.joinPaths = function (paths) {
    return utils_1.ios.joinPaths.apply(utils_1.ios, paths);
  };

  return FileSystemAccess;
}();

exports.FileSystemAccess = FileSystemAccess;

/***/ }),

/***/ "../node_modules/tns-core-modules/file-system/file-system.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var file_access_module = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system-access.js");

var profiling_1 = __webpack_require__("../node_modules/tns-core-modules/profiling/profiling.js");

var fileAccess;

var getFileAccess = function () {
  if (!fileAccess) {
    fileAccess = new file_access_module.FileSystemAccess();
  }

  return fileAccess;
};

var platform;

function ensurePlatform() {
  if (!platform) {
    platform = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
  }
}

var createFile = function (info) {
  var file = new File();
  file._path = info.path;
  file._name = info.name;
  file._extension = info.extension;
  return file;
};

var createFolder = function (info) {
  var documents = knownFolders.documents();

  if (info.path === documents.path) {
    return documents;
  }

  var temp = knownFolders.temp();

  if (info.path === temp.path) {
    return temp;
  }

  var folder = new Folder();
  folder._path = info.path;
  folder._name = info.name;
  return folder;
};

var FileSystemEntity = function () {
  function FileSystemEntity() {}

  Object.defineProperty(FileSystemEntity.prototype, "parent", {
    get: function () {
      var onError = function (error) {
        throw error;
      };

      var folderInfo = getFileAccess().getParent(this.path, onError);

      if (!folderInfo) {
        return undefined;
      }

      return createFolder(folderInfo);
    },
    enumerable: true,
    configurable: true
  });

  FileSystemEntity.prototype.remove = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var localError = function (error) {
        hasError = true;
        reject(error);
      };

      _this.removeSync(localError);

      if (!hasError) {
        resolve();
      }
    });
  };

  FileSystemEntity.prototype.removeSync = function (onError) {
    if (this._isKnown) {
      if (onError) {
        onError({
          message: "Cannot delete known folder."
        });
      }

      return;
    }

    var fileAccess = getFileAccess();

    if (this instanceof File) {
      fileAccess.deleteFile(this.path, onError);
    } else if (this instanceof Folder) {
      fileAccess.deleteFolder(this.path, onError);
    }
  };

  FileSystemEntity.prototype.rename = function (newName) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var localError = function (error) {
        hasError = true;
        reject(error);
      };

      _this.renameSync(newName, localError);

      if (!hasError) {
        resolve();
      }
    });
  };

  FileSystemEntity.prototype.renameSync = function (newName, onError) {
    if (this._isKnown) {
      if (onError) {
        onError(new Error("Cannot rename known folder."));
      }

      return;
    }

    var parentFolder = this.parent;

    if (!parentFolder) {
      if (onError) {
        onError(new Error("No parent folder."));
      }

      return;
    }

    var fileAccess = getFileAccess();
    var path = parentFolder.path;
    var newPath = fileAccess.joinPath(path, newName);

    var localError = function (error) {
      if (onError) {
        onError(error);
      }

      return null;
    };

    fileAccess.rename(this.path, newPath, localError);
    this._path = newPath;
    this._name = newName;

    if (this instanceof File) {
      this._extension = fileAccess.getFileExtension(newPath);
    }
  };

  Object.defineProperty(FileSystemEntity.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FileSystemEntity.prototype, "path", {
    get: function () {
      return this._path;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FileSystemEntity.prototype, "lastModified", {
    get: function () {
      var value = this._lastModified;

      if (!this._lastModified) {
        value = this._lastModified = getFileAccess().getLastModified(this.path);
      }

      return value;
    },
    enumerable: true,
    configurable: true
  });
  return FileSystemEntity;
}();

exports.FileSystemEntity = FileSystemEntity;

var File = function (_super) {
  __extends(File, _super);

  function File() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  File.fromPath = function (path) {
    var onError = function (error) {
      throw error;
    };

    var fileInfo = getFileAccess().getFile(path, onError);

    if (!fileInfo) {
      return undefined;
    }

    return createFile(fileInfo);
  };

  File.exists = function (path) {
    return getFileAccess().fileExists(path);
  };

  Object.defineProperty(File.prototype, "extension", {
    get: function () {
      return this._extension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(File.prototype, "isLocked", {
    get: function () {
      return !!this._locked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(File.prototype, "size", {
    get: function () {
      return getFileAccess().getFileSize(this.path);
    },
    enumerable: true,
    configurable: true
  });

  File.prototype.readSync = function (onError) {
    this.checkAccess();
    this._locked = true;
    var that = this;

    var localError = function (error) {
      that._locked = false;

      if (onError) {
        onError(error);
      }
    };

    var content = getFileAccess().read(this.path, localError);
    this._locked = false;
    return content;
  };

  File.prototype.writeSync = function (content, onError) {
    this.checkAccess();

    try {
      this._locked = true;
      var that = this;

      var localError = function (error) {
        that._locked = false;

        if (onError) {
          onError(error);
        }
      };

      getFileAccess().write(this.path, content, localError);
    } finally {
      this._locked = false;
    }
  };

  File.prototype.readText = function (encoding) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var localError = function (error) {
        hasError = true;
        reject(error);
      };

      var content = _this.readTextSync(localError, encoding);

      if (!hasError) {
        resolve(content);
      }
    });
  };

  File.prototype.readTextSync = function (onError, encoding) {
    this.checkAccess();
    this._locked = true;
    var that = this;

    var localError = function (error) {
      that._locked = false;

      if (onError) {
        onError(error);
      }
    };

    var content = getFileAccess().readText(this.path, localError, encoding);
    this._locked = false;
    return content;
  };

  File.prototype.writeText = function (content, encoding) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var localError = function (error) {
        hasError = true;
        reject(error);
      };

      _this.writeTextSync(content, localError, encoding);

      if (!hasError) {
        resolve();
      }
    });
  };

  File.prototype.writeTextSync = function (content, onError, encoding) {
    this.checkAccess();

    try {
      this._locked = true;
      var that = this;

      var localError = function (error) {
        that._locked = false;

        if (onError) {
          onError(error);
        }
      };

      getFileAccess().writeText(this.path, content, localError, encoding);
    } finally {
      this._locked = false;
    }
  };

  File.prototype.checkAccess = function () {
    if (this.isLocked) {
      throw new Error("Cannot access a locked file.");
    }
  };

  __decorate([profiling_1.profile], File.prototype, "readTextSync", null);

  return File;
}(FileSystemEntity);

exports.File = File;

var Folder = function (_super) {
  __extends(Folder, _super);

  function Folder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Folder.fromPath = function (path) {
    var onError = function (error) {
      throw error;
    };

    var folderInfo = getFileAccess().getFolder(path, onError);

    if (!folderInfo) {
      return undefined;
    }

    return createFolder(folderInfo);
  };

  Folder.exists = function (path) {
    return getFileAccess().folderExists(path);
  };

  Folder.prototype.contains = function (name) {
    var fileAccess = getFileAccess();
    var path = fileAccess.joinPath(this.path, name);

    if (fileAccess.fileExists(path)) {
      return true;
    }

    return fileAccess.folderExists(path);
  };

  Folder.prototype.clear = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var onError = function (error) {
        hasError = true;
        reject(error);
      };

      _this.clearSync(onError);

      if (!hasError) {
        resolve();
      }
    });
  };

  Folder.prototype.clearSync = function (onError) {
    getFileAccess().emptyFolder(this.path, onError);
  };

  Object.defineProperty(Folder.prototype, "isKnown", {
    get: function () {
      return this._isKnown;
    },
    enumerable: true,
    configurable: true
  });

  Folder.prototype.getFile = function (name) {
    var fileAccess = getFileAccess();
    var path = fileAccess.joinPath(this.path, name);

    var onError = function (error) {
      throw error;
    };

    var fileInfo = fileAccess.getFile(path, onError);

    if (!fileInfo) {
      return undefined;
    }

    return createFile(fileInfo);
  };

  Folder.prototype.getFolder = function (name) {
    var fileAccess = getFileAccess();
    var path = fileAccess.joinPath(this.path, name);

    var onError = function (error) {
      throw error;
    };

    var folderInfo = fileAccess.getFolder(path, onError);

    if (!folderInfo) {
      return undefined;
    }

    return createFolder(folderInfo);
  };

  Folder.prototype.getEntities = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var hasError = false;

      var localError = function (error) {
        hasError = true;
        reject(error);
      };

      var entities = _this.getEntitiesSync(localError);

      if (!hasError) {
        resolve(entities);
      }
    });
  };

  Folder.prototype.getEntitiesSync = function (onError) {
    var fileInfos = getFileAccess().getEntities(this.path, onError);

    if (!fileInfos) {
      return null;
    }

    var entities = new Array();
    var i;

    for (i = 0; i < fileInfos.length; i++) {
      if (fileInfos[i].extension) {
        entities.push(createFile(fileInfos[i]));
      } else {
        entities.push(createFolder(fileInfos[i]));
      }
    }

    return entities;
  };

  Folder.prototype.eachEntity = function (onEntity) {
    if (!onEntity) {
      return;
    }

    var onSuccess = function (fileInfo) {
      var entity;

      if (fileInfo.extension) {
        entity = createFile(fileInfo);
      } else {
        entity = createFolder(fileInfo);
      }

      return onEntity(entity);
    };

    var onError = function (error) {
      throw error;
    };

    getFileAccess().eachEntity(this.path, onSuccess, onError);
  };

  return Folder;
}(FileSystemEntity);

exports.Folder = Folder;
var knownFolders;

(function (knownFolders) {
  var _documents;

  var _temp;

  var _app;

  knownFolders.documents = function () {
    if (!_documents) {
      var path = getFileAccess().getDocumentsFolderPath();
      _documents = new Folder();
      _documents._path = path;
      _documents._isKnown = true;
    }

    return _documents;
  };

  knownFolders.temp = function () {
    if (!_temp) {
      var path = getFileAccess().getTempFolderPath();
      _temp = new Folder();
      _temp._path = path;
      _temp._isKnown = true;
    }

    return _temp;
  };

  knownFolders.currentApp = function () {
    if (!_app) {
      var path = getFileAccess().getCurrentAppPath();
      _app = new Folder();
      _app._path = path;
      _app._isKnown = true;
    }

    return _app;
  };

  var ios;

  (function (ios) {
    function _checkPlatform(knownFolderName) {
      ensurePlatform();

      if (!platform.isIOS) {
        throw new Error("The \"" + knownFolderName + "\" known folder is available on iOS only!");
      }
    }

    var _library;

    ios.library = function () {
      _checkPlatform("library");

      if (!_library) {
        var existingFolderInfo = getExistingFolderInfo(5);

        if (existingFolderInfo) {
          _library = existingFolderInfo.folder;
          _library._path = existingFolderInfo.path;
          _library._isKnown = true;
        }
      }

      return _library;
    };

    var _developer;

    ios.developer = function () {
      _checkPlatform("developer");

      if (!_developer) {
        var existingFolderInfo = getExistingFolderInfo(6);

        if (existingFolderInfo) {
          _developer = existingFolderInfo.folder;
          _developer._path = existingFolderInfo.path;
          _developer._isKnown = true;
        }
      }

      return _developer;
    };

    var _desktop;

    ios.desktop = function () {
      _checkPlatform("desktop");

      if (!_desktop) {
        var existingFolderInfo = getExistingFolderInfo(12);

        if (existingFolderInfo) {
          _desktop = existingFolderInfo.folder;
          _desktop._path = existingFolderInfo.path;
          _desktop._isKnown = true;
        }
      }

      return _desktop;
    };

    var _downloads;

    ios.downloads = function () {
      _checkPlatform("downloads");

      if (!_downloads) {
        var existingFolderInfo = getExistingFolderInfo(15);

        if (existingFolderInfo) {
          _downloads = existingFolderInfo.folder;
          _downloads._path = existingFolderInfo.path;
          _downloads._isKnown = true;
        }
      }

      return _downloads;
    };

    var _movies;

    ios.movies = function () {
      _checkPlatform("movies");

      if (!_movies) {
        var existingFolderInfo = getExistingFolderInfo(17);

        if (existingFolderInfo) {
          _movies = existingFolderInfo.folder;
          _movies._path = existingFolderInfo.path;
          _movies._isKnown = true;
        }
      }

      return _movies;
    };

    var _music;

    ios.music = function () {
      _checkPlatform("music");

      if (!_music) {
        var existingFolderInfo = getExistingFolderInfo(18);

        if (existingFolderInfo) {
          _music = existingFolderInfo.folder;
          _music._path = existingFolderInfo.path;
          _music._isKnown = true;
        }
      }

      return _music;
    };

    var _pictures;

    ios.pictures = function () {
      _checkPlatform("pictures");

      if (!_pictures) {
        var existingFolderInfo = getExistingFolderInfo(19);

        if (existingFolderInfo) {
          _pictures = existingFolderInfo.folder;
          _pictures._path = existingFolderInfo.path;
          _pictures._isKnown = true;
        }
      }

      return _pictures;
    };

    var _sharedPublic;

    ios.sharedPublic = function () {
      _checkPlatform("sharedPublic");

      if (!_sharedPublic) {
        var existingFolderInfo = getExistingFolderInfo(21);

        if (existingFolderInfo) {
          _sharedPublic = existingFolderInfo.folder;
          _sharedPublic._path = existingFolderInfo.path;
          _sharedPublic._isKnown = true;
        }
      }

      return _sharedPublic;
    };

    function getExistingFolderInfo(pathDirectory) {
      var fileAccess = getFileAccess();
      var folderPath = fileAccess.getKnownPath(pathDirectory);
      var folderInfo = fileAccess.getExistingFolder(folderPath);

      if (folderInfo) {
        return {
          folder: createFolder(folderInfo),
          path: folderPath
        };
      }

      return undefined;
    }
  })(ios = knownFolders.ios || (knownFolders.ios = {}));
})(knownFolders = exports.knownFolders || (exports.knownFolders = {}));

var path;

(function (path_1) {
  function normalize(path) {
    return getFileAccess().normalizePath(path);
  }

  path_1.normalize = normalize;

  function join() {
    var paths = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      paths[_i] = arguments[_i];
    }

    var fileAccess = getFileAccess();
    return fileAccess.joinPaths(paths);
  }

  path_1.join = join;
  path_1.separator = getFileAccess().getPathSeparator();
})(path = exports.path || (exports.path = {}));

/***/ }),

/***/ "../node_modules/tns-core-modules/http/http-request/http-request-common.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getFilenameFromUrl(url) {
  var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");

  var slashPos = url.lastIndexOf("/") + 1;
  var questionMarkPos = url.lastIndexOf("?");
  var actualFileName;

  if (questionMarkPos !== -1) {
    actualFileName = url.substring(slashPos, questionMarkPos);
  } else {
    actualFileName = url.substring(slashPos);
  }

  var result = fs.path.join(fs.knownFolders.documents().path, actualFileName);
  return result;
}

exports.getFilenameFromUrl = getFilenameFromUrl;

/***/ }),

/***/ "../node_modules/tns-core-modules/http/http-request/http-request.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");

var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

var getter = utils.ios.getter;

var domainDebugger = __webpack_require__("../node_modules/tns-core-modules/debugger/debugger.js");

var http_request_common_1 = __webpack_require__("../node_modules/tns-core-modules/http/http-request/http-request-common.js");

var HttpResponseEncoding;

(function (HttpResponseEncoding) {
  HttpResponseEncoding[HttpResponseEncoding["UTF8"] = 0] = "UTF8";
  HttpResponseEncoding[HttpResponseEncoding["GBK"] = 1] = "GBK";
})(HttpResponseEncoding = exports.HttpResponseEncoding || (exports.HttpResponseEncoding = {}));

var currentDevice = utils.ios.getter(UIDevice, UIDevice.currentDevice);
var device = currentDevice.userInterfaceIdiom === 0 ? "Phone" : "Pad";
var osVersion = currentDevice.systemVersion;
var GET = "GET";
var USER_AGENT_HEADER = "User-Agent";
var USER_AGENT = "Mozilla/5.0 (i" + device + "; CPU OS " + osVersion.replace(".", "_") + " like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/" + osVersion + " Mobile/10A5355d Safari/8536.25";
var sessionConfig = getter(NSURLSessionConfiguration, NSURLSessionConfiguration.defaultSessionConfiguration);
var queue = getter(NSOperationQueue, NSOperationQueue.mainQueue);

function parseJSON(source) {
  var src = source.trim();

  if (src.lastIndexOf(")") === src.length - 1) {
    return JSON.parse(src.substring(src.indexOf("(") + 1, src.lastIndexOf(")")));
  }

  return JSON.parse(src);
}

var NSURLSessionTaskDelegateImpl = function (_super) {
  __extends(NSURLSessionTaskDelegateImpl, _super);

  function NSURLSessionTaskDelegateImpl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  NSURLSessionTaskDelegateImpl.prototype.URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler = function (session, task, response, request, completionHandler) {
    completionHandler(null);
  };

  NSURLSessionTaskDelegateImpl.ObjCProtocols = [NSURLSessionTaskDelegate];
  return NSURLSessionTaskDelegateImpl;
}(NSObject);

var sessionTaskDelegateInstance = NSURLSessionTaskDelegateImpl.new();
var defaultSession;

function ensureDefaultSession() {
  if (!defaultSession) {
    defaultSession = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(sessionConfig, null, queue);
  }
}

var sessionNotFollowingRedirects;

function ensureSessionNotFollowingRedirects() {
  if (!sessionNotFollowingRedirects) {
    sessionNotFollowingRedirects = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(sessionConfig, sessionTaskDelegateInstance, queue);
  }
}

var imageSource;

function ensureImageSource() {
  if (!imageSource) {
    imageSource = __webpack_require__("../node_modules/tns-core-modules/image-source/image-source.js");
  }
}

function request(options) {
  return new Promise(function (resolve, reject) {
    if (!options.url) {
      reject(new Error("Request url was empty."));
      return;
    }

    try {
      var network = domainDebugger.getNetwork();
      var debugRequest = network && network.create();
      var urlRequest = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(options.url));
      urlRequest.HTTPMethod = types.isDefined(options.method) ? options.method : GET;
      urlRequest.setValueForHTTPHeaderField(USER_AGENT, USER_AGENT_HEADER);

      if (options.headers) {
        for (var header in options.headers) {
          urlRequest.setValueForHTTPHeaderField(options.headers[header] + "", header);
        }
      }

      if (types.isString(options.content) || options.content instanceof FormData) {
        urlRequest.HTTPBody = NSString.stringWithString(options.content.toString()).dataUsingEncoding(4);
      }

      if (types.isNumber(options.timeout)) {
        urlRequest.timeoutInterval = options.timeout / 1000;
      }

      var session;

      if (types.isBoolean(options.dontFollowRedirects) && options.dontFollowRedirects) {
        ensureSessionNotFollowingRedirects();
        session = sessionNotFollowingRedirects;
      } else {
        ensureDefaultSession();
        session = defaultSession;
      }

      var dataTask = session.dataTaskWithRequestCompletionHandler(urlRequest, function (data, response, error) {
        if (error) {
          reject(new Error(error.localizedDescription));
        } else {
          var headers = {};

          if (response && response.allHeaderFields) {
            var headerFields = response.allHeaderFields;
            headerFields.enumerateKeysAndObjectsUsingBlock(function (key, value, stop) {
              addHeader(headers, key, value);
            });
          }

          if (debugRequest) {
            debugRequest.mimeType = response.MIMEType;
            debugRequest.data = data;
            var debugResponse = {
              url: options.url,
              status: response.statusCode,
              statusText: NSHTTPURLResponse.localizedStringForStatusCode(response.statusCode),
              headers: headers,
              mimeType: response.MIMEType,
              fromDiskCache: false
            };
            debugRequest.responseReceived(debugResponse);
            debugRequest.loadingFinished();
          }

          resolve({
            content: {
              raw: data,
              toString: function (encoding) {
                return NSDataToString(data, encoding);
              },
              toJSON: function (encoding) {
                return parseJSON(NSDataToString(data, encoding));
              },
              toImage: function () {
                ensureImageSource();
                return new Promise(function (resolve, reject) {
                  UIImage.tns_decodeImageWithDataCompletion(data, function (image) {
                    if (image) {
                      resolve(imageSource.fromNativeSource(image));
                    } else {
                      reject(new Error("Response content may not be converted to an Image"));
                    }
                  });
                });
              },
              toFile: function (destinationFilePath) {
                var fs = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");

                if (!destinationFilePath) {
                  destinationFilePath = http_request_common_1.getFilenameFromUrl(options.url);
                }

                if (data instanceof NSData) {
                  data.writeToFileAtomically(destinationFilePath, true);
                  return fs.File.fromPath(destinationFilePath);
                } else {
                  reject(new Error("Cannot save file with path: " + destinationFilePath + "."));
                }
              }
            },
            statusCode: response.statusCode,
            headers: headers
          });
        }
      });

      if (options.url && debugRequest) {
        var request = {
          url: options.url,
          method: "GET",
          headers: options.headers
        };
        debugRequest.requestWillBeSent(request);
      }

      dataTask.resume();
    } catch (ex) {
      reject(ex);
    }
  });
}

exports.request = request;

function NSDataToString(data, encoding) {
  var code = 4;

  if (encoding === HttpResponseEncoding.GBK) {
    code = 1586;
  }

  return NSString.alloc().initWithDataEncoding(data, code).toString();
}

function addHeader(headers, key, value) {
  if (!headers[key]) {
    headers[key] = value;
  } else if (Array.isArray(headers[key])) {
    headers[key].push(value);
  } else {
    var values = [headers[key]];
    values.push(value);
    headers[key] = values;
  }
}

exports.addHeader = addHeader;

/***/ }),

/***/ "../node_modules/tns-core-modules/http/http.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var httpRequest = __webpack_require__("../node_modules/tns-core-modules/http/http-request/http-request.js");

__export(__webpack_require__("../node_modules/tns-core-modules/http/http-request/http-request.js"));

function getString(arg) {
  return new Promise(function (resolve, reject) {
    httpRequest.request(typeof arg === "string" ? {
      url: arg,
      method: "GET"
    } : arg).then(function (r) {
      try {
        var str = r.content.toString();
        resolve(str);
      } catch (e) {
        reject(e);
      }
    }, function (e) {
      return reject(e);
    });
  });
}

exports.getString = getString;

function getJSON(arg) {
  return new Promise(function (resolve, reject) {
    httpRequest.request(typeof arg === "string" ? {
      url: arg,
      method: "GET"
    } : arg).then(function (r) {
      try {
        var json = r.content.toJSON();
        resolve(json);
      } catch (e) {
        reject(e);
      }
    }, function (e) {
      return reject(e);
    });
  });
}

exports.getJSON = getJSON;

function getImage(arg) {
  return new Promise(function (resolve, reject) {
    httpRequest.request(typeof arg === "string" ? {
      url: arg,
      method: "GET"
    } : arg).then(function (r) {
      try {
        resolve(r.content.toImage());
      } catch (err) {
        reject(err);
      }
    }, function (err) {
      reject(err);
    });
  });
}

exports.getImage = getImage;

function getFile(arg, destinationFilePath) {
  return new Promise(function (resolve, reject) {
    httpRequest.request(typeof arg === "string" ? {
      url: arg,
      method: "GET"
    } : arg).then(function (r) {
      try {
        var file = r.content.toFile(destinationFilePath);
        resolve(file);
      } catch (e) {
        reject(e);
      }
    }, function (e) {
      return reject(e);
    });
  });
}

exports.getFile = getFile;

/***/ }),

/***/ "../node_modules/tns-core-modules/image-source/image-source.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var file_system_1 = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");

var utils_1 = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

exports.isFileOrResourcePath = utils_1.isFileOrResourcePath;
var http;

function ensureHttp() {
  if (!http) {
    http = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
  }
}

var ImageSource = function () {
  function ImageSource() {}

  ImageSource.prototype.fromAsset = function (asset) {
    return new Promise(function (resolve, reject) {
      asset.getImageAsync(function (image, err) {
        if (image) {
          resolve(fromNativeSource(image));
        } else {
          reject(err);
        }
      });
    });
  };

  ImageSource.prototype.loadFromResource = function (name) {
    this.ios = UIImage.tns_safeImageNamed(name) || UIImage.tns_safeImageNamed(name + ".jpg");
    return this.ios != null;
  };

  ImageSource.prototype.fromResource = function (name) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      try {
        UIImage.tns_safeDecodeImageNamedCompletion(name, function (image) {
          if (image) {
            _this.ios = image;
            resolve(true);
          } else {
            UIImage.tns_safeDecodeImageNamedCompletion(name + ".jpg", function (image) {
              _this.ios = image;
              resolve(true);
            });
          }
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  ImageSource.prototype.loadFromFile = function (path) {
    this.ios = UIImage.imageWithContentsOfFile(getFileName(path));
    return this.ios != null;
  };

  ImageSource.prototype.fromFile = function (path) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      try {
        UIImage.tns_decodeImageWidthContentsOfFileCompletion(getFileName(path), function (image) {
          _this.ios = image;
          resolve(true);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  ImageSource.prototype.loadFromData = function (data) {
    this.ios = UIImage.imageWithData(data);
    return this.ios != null;
  };

  ImageSource.prototype.fromData = function (data) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      try {
        UIImage.tns_decodeImageWithDataCompletion(data, function (image) {
          _this.ios = image;
          resolve(true);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  ImageSource.prototype.loadFromBase64 = function (source) {
    if (typeof source === "string") {
      var data = NSData.alloc().initWithBase64EncodedStringOptions(source, 1);
      this.ios = UIImage.imageWithData(data);
    }

    return this.ios != null;
  };

  ImageSource.prototype.fromBase64 = function (source) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      try {
        var data = NSData.alloc().initWithBase64EncodedStringOptions(source, 1);
        UIImage.imageWithData["async"](UIImage, [data]).then(function (image) {
          _this.ios = image;
          resolve(true);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

  ImageSource.prototype.setNativeSource = function (source) {
    if (source && !(source instanceof UIImage)) {
      throw new Error("The method setNativeSource() expects UIImage instance.");
    }

    this.ios = source;
  };

  ImageSource.prototype.saveToFile = function (path, format, quality) {
    if (!this.ios) {
      return false;
    }

    if (quality) {
      quality = (quality - 0) / (100 - 0);
    }

    var data = getImageData(this.ios, format, quality);

    if (data) {
      return NSFileManager.defaultManager.createFileAtPathContentsAttributes(path, data, null);
    }

    return false;
  };

  ImageSource.prototype.toBase64String = function (format, quality) {
    var res = null;

    if (!this.ios) {
      return res;
    }

    if (quality) {
      quality = (quality - 0) / (100 - 0);
    }

    var data = getImageData(this.ios, format, quality);

    if (data) {
      res = data.base64Encoding();
    }

    return res;
  };

  Object.defineProperty(ImageSource.prototype, "height", {
    get: function () {
      if (this.ios) {
        return this.ios.size.height;
      }

      return NaN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageSource.prototype, "width", {
    get: function () {
      if (this.ios) {
        return this.ios.size.width;
      }

      return NaN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ImageSource.prototype, "rotationAngle", {
    get: function () {
      return NaN;
    },
    enumerable: true,
    configurable: true
  });
  return ImageSource;
}();

exports.ImageSource = ImageSource;

function getFileName(path) {
  var fileName = typeof path === "string" ? path.trim() : "";

  if (fileName.indexOf("~/") === 0) {
    fileName = file_system_1.path.join(file_system_1.knownFolders.currentApp().path, fileName.replace("~/", ""));
  }

  return fileName;
}

function getImageData(instance, format, quality) {
  if (quality === void 0) {
    quality = 0.9;
  }

  var data = null;

  switch (format) {
    case "png":
      data = UIImagePNGRepresentation(instance);
      break;

    case "jpeg":
    case "jpg":
      data = UIImageJPEGRepresentation(instance, quality);
      break;
  }

  return data;
}

function fromAsset(asset) {
  var image = new ImageSource();
  return image.fromAsset(asset);
}

exports.fromAsset = fromAsset;

function fromResource(name) {
  var image = new ImageSource();
  return image.loadFromResource(name) ? image : null;
}

exports.fromResource = fromResource;

function fromFile(path) {
  var image = new ImageSource();
  return image.loadFromFile(path) ? image : null;
}

exports.fromFile = fromFile;

function fromData(data) {
  var image = new ImageSource();
  return image.loadFromData(data) ? image : null;
}

exports.fromData = fromData;

function fromBase64(source) {
  var image = new ImageSource();
  return image.loadFromBase64(source) ? image : null;
}

exports.fromBase64 = fromBase64;

function fromNativeSource(source) {
  var imageSource = new ImageSource();
  imageSource.setNativeSource(source);
  return imageSource;
}

exports.fromNativeSource = fromNativeSource;

function fromUrl(url) {
  ensureHttp();
  return http.getImage(url);
}

exports.fromUrl = fromUrl;

function fromFileOrResource(path) {
  if (!utils_1.isFileOrResourcePath(path)) {
    throw new Error("Path \"" + "\" is not a valid file or resource.");
  }

  if (path.indexOf(utils_1.RESOURCE_PREFIX) === 0) {
    return fromResource(path.substr(utils_1.RESOURCE_PREFIX.length));
  }

  return fromFile(path);
}

exports.fromFileOrResource = fromFileOrResource;

/***/ }),

/***/ "../node_modules/tns-core-modules/platform/platform.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");

var platformNames;

(function (platformNames) {
  platformNames.android = "Android";
  platformNames.ios = "iOS";
})(platformNames = exports.platformNames || (exports.platformNames = {}));

var Device = function () {
  function Device() {}

  Object.defineProperty(Device.prototype, "manufacturer", {
    get: function () {
      return "Apple";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "os", {
    get: function () {
      return platformNames.ios;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "osVersion", {
    get: function () {
      if (!this._osVersion) {
        this._osVersion = utils.ios.getter(UIDevice, UIDevice.currentDevice).systemVersion;
      }

      return this._osVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "model", {
    get: function () {
      if (!this._model) {
        this._model = utils.ios.getter(UIDevice, UIDevice.currentDevice).model;
      }

      return this._model;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "sdkVersion", {
    get: function () {
      if (!this._sdkVersion) {
        this._sdkVersion = utils.ios.getter(UIDevice, UIDevice.currentDevice).systemVersion;
      }

      return this._sdkVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "deviceType", {
    get: function () {
      if (!this._deviceType) {
        if (utils.ios.getter(UIDevice, UIDevice.currentDevice).userInterfaceIdiom === 0) {
          this._deviceType = "Phone";
        } else {
          this._deviceType = "Tablet";
        }
      }

      return this._deviceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "uuid", {
    get: function () {
      var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
      var uuid_key = "TNSUUID";
      var app_uuid = userDefaults.stringForKey(uuid_key);

      if (!app_uuid) {
        app_uuid = NSUUID.UUID().UUIDString;
        userDefaults.setObjectForKey(app_uuid, uuid_key);
        userDefaults.synchronize();
      }

      return app_uuid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "language", {
    get: function () {
      if (!this._language) {
        var languages = utils.ios.getter(NSLocale, NSLocale.preferredLanguages);
        this._language = languages[0];
      }

      return this._language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Device.prototype, "region", {
    get: function () {
      if (!this._region) {
        this._region = utils.ios.getter(NSLocale, NSLocale.currentLocale).objectForKey(NSLocaleCountryCode);
      }

      return this._region;
    },
    enumerable: true,
    configurable: true
  });
  return Device;
}();

var MainScreen = function () {
  function MainScreen() {}

  Object.defineProperty(MainScreen.prototype, "screen", {
    get: function () {
      if (!this._screen) {
        this._screen = utils.ios.getter(UIScreen, UIScreen.mainScreen);
      }

      return this._screen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MainScreen.prototype, "widthPixels", {
    get: function () {
      return this.widthDIPs * this.scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MainScreen.prototype, "heightPixels", {
    get: function () {
      return this.heightDIPs * this.scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MainScreen.prototype, "scale", {
    get: function () {
      return this.screen.scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MainScreen.prototype, "widthDIPs", {
    get: function () {
      return this.screen.bounds.size.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MainScreen.prototype, "heightDIPs", {
    get: function () {
      return this.screen.bounds.size.height;
    },
    enumerable: true,
    configurable: true
  });
  return MainScreen;
}();

exports.device = new Device();
var screen;

(function (screen) {
  screen.mainScreen = new MainScreen();
})(screen = exports.screen || (exports.screen = {}));

exports.isIOS = true;

/***/ }),

/***/ "../node_modules/tns-core-modules/profiling/profiling.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

function uptime() {
  return global.android ? org.nativescript.Process.getUpTime() : global.__tns_uptime();
}

exports.uptime = uptime;

function log(message) {
  if (global.__nslog) {
    global.__nslog("CONSOLE LOG: " + message);
  }

  console.log(message);
}

exports.log = log;
var timers = {};
var anyGlobal = global;
var profileNames = [];
exports.time = global.__time || Date.now;

function start(name) {
  var info = timers[name];

  if (info) {
    info.currentStart = exports.time();
    info.runCount++;
  } else {
    info = {
      totalTime: 0,
      count: 0,
      currentStart: exports.time(),
      runCount: 1
    };
    timers[name] = info;
    profileNames.push(name);
  }
}

exports.start = start;

function stop(name) {
  var info = timers[name];

  if (!info) {
    throw new Error("No timer started: " + name);
  }

  if (info.runCount) {
    info.runCount--;

    if (info.runCount) {
      info.count++;
    } else {
      info.lastTime = exports.time() - info.currentStart;
      info.totalTime += info.lastTime;
      info.count++;
      info.currentStart = 0;
    }
  } else {
    throw new Error("Timer " + name + " paused more times than started.");
  }

  return info;
}

exports.stop = stop;

function timer(name) {
  return timers[name];
}

exports.timer = timer;

function print(name) {
  var info = timers[name];

  if (!info) {
    throw new Error("No timer started: " + name);
  }

  console.log("---- [" + name + "] STOP total: " + info.totalTime + " count:" + info.count);
  return info;
}

exports.print = print;

function isRunning(name) {
  var info = timers[name];
  return !!(info && info.runCount);
}

exports.isRunning = isRunning;

function countersProfileFunctionFactory(fn, name, type) {
  if (type === void 0) {
    type = 1;
  }

  profileNames.push(name);
  return function () {
    start(name);

    try {
      return fn.apply(this, arguments);
    } finally {
      stop(name);
    }
  };
}

function timelineProfileFunctionFactory(fn, name, type) {
  if (type === void 0) {
    type = 1;
  }

  return type === 1 ? function () {
    var start = exports.time();

    try {
      return fn.apply(this, arguments);
    } finally {
      var end = exports.time();
      console.log("Timeline: Modules: " + name + " " + this + "  (" + start + "ms. - " + end + "ms.)");
    }
  } : function () {
    var start = exports.time();

    try {
      return fn.apply(this, arguments);
    } finally {
      var end = exports.time();
      console.log("Timeline: Modules: " + name + "  (" + start + "ms. - " + end + "ms.)");
    }
  };
}

var Level;

(function (Level) {
  Level[Level["none"] = 0] = "none";
  Level[Level["lifecycle"] = 1] = "lifecycle";
  Level[Level["timeline"] = 2] = "timeline";
})(Level = exports.Level || (exports.Level = {}));

var tracingLevel = Level.none;
var profileFunctionFactory;

function enable(mode) {
  if (mode === void 0) {
    mode = "counters";
  }

  profileFunctionFactory = mode && {
    counters: countersProfileFunctionFactory,
    timeline: timelineProfileFunctionFactory
  }[mode];
  tracingLevel = {
    lifecycle: Level.lifecycle,
    timeline: Level.timeline
  }[mode] || Level.none;
}

exports.enable = enable;

try {
  var appConfig = __webpack_require__("./package.json");

  if (appConfig && appConfig.profiling) {
    enable(appConfig.profiling);
  }
} catch (e1) {
  try {
    console.log("Profiling startup failed to figure out defaults from package.json, error: " + e1);
  } catch (e2) {}
}

function disable() {
  profileFunctionFactory = undefined;
}

exports.disable = disable;

function profileFunction(fn, customName) {
  return profileFunctionFactory(fn, customName || fn.name);
}

var profileMethodUnnamed = function (target, key, descriptor) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(target, key);
  }

  var originalMethod = descriptor.value;
  var className = "";

  if (target && target.constructor && target.constructor.name) {
    className = target.constructor.name + ".";
  }

  var name = className + key;
  descriptor.value = profileFunctionFactory(originalMethod, name, 1);
  return descriptor;
};

var profileStaticMethodUnnamed = function (ctor, key, descriptor) {
  if (descriptor === undefined) {
    descriptor = Object.getOwnPropertyDescriptor(ctor, key);
  }

  var originalMethod = descriptor.value;
  var className = "";

  if (ctor && ctor.name) {
    className = ctor.name + ".";
  }

  var name = className + key;
  descriptor.value = profileFunctionFactory(originalMethod, name, 0);
  return descriptor;
};

function profileMethodNamed(name) {
  return function (target, key, descriptor) {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    var originalMethod = descriptor.value;
    descriptor.value = profileFunctionFactory(originalMethod, name);
    return descriptor;
  };
}

var voidMethodDecorator = function () {};

function profile(nameFnOrTarget, fnOrKey, descriptor) {
  if (typeof nameFnOrTarget === "object" && (typeof fnOrKey === "string" || typeof fnOrKey === "symbol")) {
    if (!profileFunctionFactory) {
      return;
    }

    return profileMethodUnnamed(nameFnOrTarget, fnOrKey, descriptor);
  } else if (typeof nameFnOrTarget === "function" && (typeof fnOrKey === "string" || typeof fnOrKey === "symbol")) {
    if (!profileFunctionFactory) {
      return;
    }

    return profileStaticMethodUnnamed(nameFnOrTarget, fnOrKey, descriptor);
  } else if (typeof nameFnOrTarget === "string" && typeof fnOrKey === "function") {
    if (!profileFunctionFactory) {
      return fnOrKey;
    }

    return profileFunction(fnOrKey, nameFnOrTarget);
  } else if (typeof nameFnOrTarget === "function") {
    if (!profileFunctionFactory) {
      return nameFnOrTarget;
    }

    return profileFunction(nameFnOrTarget);
  } else if (typeof nameFnOrTarget === "string") {
    if (!profileFunctionFactory) {
      return voidMethodDecorator;
    }

    return profileMethodNamed(nameFnOrTarget);
  } else {
    if (!profileFunctionFactory) {
      return voidMethodDecorator;
    }

    return profileMethodUnnamed;
  }
}

exports.profile = profile;

function dumpProfiles() {
  profileNames.forEach(function (name) {
    var info = timers[name];

    if (info) {
      console.log("---- [" + name + "] STOP total: " + info.totalTime + " count:" + info.count);
    } else {
      console.log("---- [" + name + "] Never called");
    }
  });
}

exports.dumpProfiles = dumpProfiles;

function resetProfiles() {
  profileNames.forEach(function (name) {
    var info = timers[name];

    if (info) {
      if (info.runCount) {
        console.log("---- timer with name [" + name + "] is currently running and won't be reset");
      } else {
        timers[name] = undefined;
      }
    }
  });
}

exports.resetProfiles = resetProfiles;

function startCPUProfile(name) {
  if (anyGlobal.android) {
    __startCPUProfiler(name);
  }
}

exports.startCPUProfile = startCPUProfile;

function stopCPUProfile(name) {
  if (anyGlobal.android) {
    __stopCPUProfiler(name);
  }
}

exports.stopCPUProfile = stopCPUProfile;

function level() {
  return tracingLevel;
}

exports.level = level;

function trace(message, start, end) {
  log("Timeline: Modules: " + message + "  (" + start + "ms. - " + end + "ms.)");
}

exports.trace = trace;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/tns-core-modules/text/text.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var encoding;

(function (encoding) {
  encoding.ISO_8859_1 = 5;
  encoding.US_ASCII = 1;
  encoding.UTF_16 = 10;
  encoding.UTF_16BE = 0x90000100;
  encoding.UTF_16LE = 0x94000100;
  encoding.UTF_8 = 4;
})(encoding = exports.encoding || (exports.encoding = {}));

/***/ }),

/***/ "../node_modules/tns-core-modules/trace/trace.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var enabled = false;
var _categories = {};
var _writers = [];
var _eventListeners = [];

var _errorHandler;

function enable() {
  enabled = true;
}

exports.enable = enable;

function disable() {
  enabled = false;
}

exports.disable = disable;

function isEnabled() {
  return enabled;
}

exports.isEnabled = isEnabled;

function isCategorySet(category) {
  return category in _categories;
}

exports.isCategorySet = isCategorySet;

function addWriter(writer) {
  _writers.push(writer);
}

exports.addWriter = addWriter;

function removeWriter(writer) {
  var index = _writers.indexOf(writer);

  if (index >= 0) {
    _writers.splice(index, 1);
  }
}

exports.removeWriter = removeWriter;

function clearWriters() {
  if (_writers.length > 0) {
    _writers.splice(0, _writers.length);
  }
}

exports.clearWriters = clearWriters;

function setCategories(categories) {
  _categories = {};
  addCategories(categories);
}

exports.setCategories = setCategories;

function addCategories(categories) {
  var split = categories.split(",");

  for (var i = 0; i < split.length; i++) {
    _categories[split[i].trim()] = true;
  }
}

exports.addCategories = addCategories;

function write(message, category, type) {
  var i;

  if (type === messageType.error) {
    for (i = 0; i < _writers.length; i++) {
      _writers[i].write(message, category, type);
    }

    return;
  }

  if (!enabled) {
    return;
  }

  if (!(category in _categories)) {
    return;
  }

  for (i = 0; i < _writers.length; i++) {
    _writers[i].write(message, category, type);
  }
}

exports.write = write;

function notifyEvent(object, name, data) {
  if (!enabled) {
    return;
  }

  var i, listener, filters;

  for (i = 0; i < _eventListeners.length; i++) {
    listener = _eventListeners[i];

    if (listener.filter) {
      filters = listener.filter.split(",");
      filters.forEach(function (value) {
        if (value.trim() === name) {
          listener.on(object, name, data);
        }
      });
    } else {
      listener.on(object, name, data);
    }
  }
}

exports.notifyEvent = notifyEvent;

function addEventListener(listener) {
  _eventListeners.push(listener);
}

exports.addEventListener = addEventListener;

function removeEventListener(listener) {
  var index = _eventListeners.indexOf(listener);

  if (index >= 0) {
    _eventListeners.splice(index, 1);
  }
}

exports.removeEventListener = removeEventListener;
var messageType;

(function (messageType) {
  messageType.log = 0;
  messageType.info = 1;
  messageType.warn = 2;
  messageType.error = 3;
})(messageType = exports.messageType || (exports.messageType = {}));

var categories;

(function (categories) {
  categories.VisualTreeEvents = "VisualTreeEvents";
  categories.Layout = "Layout";
  categories.Style = "Style";
  categories.ViewHierarchy = "ViewHierarchy";
  categories.NativeLifecycle = "NativeLifecycle";
  categories.Debug = "Debug";
  categories.Navigation = "Navigation";
  categories.Test = "Test";
  categories.Binding = "Binding";
  categories.BindingError = "BindingError";
  categories.Error = "Error";
  categories.Animation = "Animation";
  categories.Transition = "Transition";
  categories.All = categories.VisualTreeEvents + "," + categories.Layout + "," + categories.Style + "," + categories.ViewHierarchy + "," + categories.NativeLifecycle + "," + categories.Debug + "," + categories.Navigation + "," + categories.Test + "," + categories.Binding + "," + categories.Error + "," + categories.Animation + "," + categories.Transition;
  categories.separator = ",";

  function concat() {
    var i;
    var result;

    for (i = 0; i < arguments.length; i++) {
      if (!result) {
        result = arguments[i];
        continue;
      }

      result = result.concat(categories.separator, arguments[i]);
    }

    return result;
  }

  categories.concat = concat;
})(categories = exports.categories || (exports.categories = {}));

var ConsoleWriter = function () {
  function ConsoleWriter() {}

  ConsoleWriter.prototype.write = function (message, category, type) {
    if (!console) {
      return;
    }

    var msgType;

    if (type === undefined) {
      msgType = messageType.log;
    } else {
      msgType = type;
    }

    switch (msgType) {
      case messageType.log:
        console.log(category + ": " + message);
        break;

      case messageType.info:
        console.info(category + ": " + message);
        break;

      case messageType.warn:
        console.warn(category + ": " + message);
        break;

      case messageType.error:
        console.error(category + ": " + message);
        break;
    }
  };

  return ConsoleWriter;
}();

addWriter(new ConsoleWriter());

var DefaultErrorHandler = function () {
  function DefaultErrorHandler() {}

  DefaultErrorHandler.prototype.handlerError = function (error) {
    throw error;
  };

  return DefaultErrorHandler;
}();

exports.DefaultErrorHandler = DefaultErrorHandler;
setErrorHandler(new DefaultErrorHandler());

function getErrorHandler() {
  return _errorHandler;
}

exports.getErrorHandler = getErrorHandler;

function setErrorHandler(handler) {
  _errorHandler = handler;
}

exports.setErrorHandler = setErrorHandler;

function error(error) {
  if (!_errorHandler) {
    return;
  }

  if (typeof error === "string") {
    error = new Error(error);
  }

  _errorHandler.handlerError(error);
}

exports.error = error;

/***/ }),

/***/ "../node_modules/tns-core-modules/utils/types.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

exports.isString = isString;

function isNumber(value) {
  return typeof value === "number" || value instanceof Number;
}

exports.isNumber = isNumber;

function isBoolean(value) {
  return typeof value === "boolean" || value instanceof Boolean;
}

exports.isBoolean = isBoolean;

function isFunction(value) {
  if (!value) {
    return false;
  }

  return typeof value === "function";
}

exports.isFunction = isFunction;

function isObject(value) {
  if (!value) {
    return false;
  }

  return typeof value === "object";
}

exports.isObject = isObject;

function isUndefined(value) {
  return value === undefined;
}

exports.isUndefined = isUndefined;

function isDefined(value) {
  return typeof value !== "undefined";
}

exports.isDefined = isDefined;

function isNullOrUndefined(value) {
  return value === undefined || value === null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function verifyCallback(value) {
  if (value && !isFunction(value)) {
    throw new TypeError("Callback must be a valid function.");
  }
}

exports.verifyCallback = verifyCallback;
var classInfosMap = new Map();
var funcNameRegex = /function ([_a-zA-Z0-9]{1,})\(/;

function getClass(object) {
  return getClassInfo(object).name;
}

exports.getClass = getClass;

function getClassInfo(object) {
  var constructor = object.constructor;
  var result = classInfosMap.get(constructor);

  if (!result) {
    result = new ClassInfo(constructor);
    classInfosMap.set(constructor, result);
  }

  return result;
}

exports.getClassInfo = getClassInfo;

function getBaseClasses(object) {
  var result = [];
  var info = getClassInfo(object);

  while (info) {
    result.push(info.name);
    info = info.baseClassInfo;
  }

  return result;
}

exports.getBaseClasses = getBaseClasses;

var ClassInfo = function () {
  function ClassInfo(typeCosntructor) {
    this._typeCosntructor = typeCosntructor;
  }

  Object.defineProperty(ClassInfo.prototype, "name", {
    get: function () {
      if (!this._name) {
        var results = funcNameRegex.exec(this._typeCosntructor.toString());
        this._name = results && results.length > 1 ? results[1] : "";
      }

      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClassInfo.prototype, "baseClassInfo", {
    get: function () {
      if (isUndefined(this._baseClassInfo)) {
        this._baseClassInfo = ClassInfo._getBase(this);

        if (this._baseClassInfo && this._baseClassInfo.name === this.name) {
          this._baseClassInfo = ClassInfo._getBase(this._baseClassInfo);
        }
      }

      return this._baseClassInfo;
    },
    enumerable: true,
    configurable: true
  });

  ClassInfo._getBase = function (info) {
    var result = null;
    var constructorProto = info._typeCosntructor.prototype;

    if (constructorProto.__proto__) {
      result = getClassInfo(constructorProto.__proto__);
    }

    return result;
  };

  return ClassInfo;
}();

exports.ClassInfo = ClassInfo;

function toUIString(obj) {
  return isNullOrUndefined(obj) ? "" : obj + "";
}

exports.toUIString = toUIString;

/***/ }),

/***/ "../node_modules/tns-core-modules/utils/utils-common.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var types = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");

exports.RESOURCE_PREFIX = "res://";
exports.FILE_PREFIX = "file:///";

function escapeRegexSymbols(source) {
  var escapeRegex = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
  return source.replace(escapeRegex, "\\$&");
}

exports.escapeRegexSymbols = escapeRegexSymbols;

function convertString(value) {
  var result;

  if (!types.isString(value)) {
    result = value;
  } else if (value.trim() === "") {
    result = value;
  } else {
    var valueAsNumber = +value;

    if (!isNaN(valueAsNumber)) {
      result = valueAsNumber;
    } else if (value && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      result = value.toLowerCase() === "true" ? true : false;
    } else {
      result = value;
    }
  }

  return result;
}

exports.convertString = convertString;
var layout;

(function (layout) {
  var MODE_SHIFT = 30;
  var MODE_MASK = 0x3 << MODE_SHIFT;
  layout.UNSPECIFIED = 0 << MODE_SHIFT;
  layout.EXACTLY = 1 << MODE_SHIFT;
  layout.AT_MOST = 2 << MODE_SHIFT;
  layout.MEASURED_HEIGHT_STATE_SHIFT = 0x00000010;
  layout.MEASURED_STATE_TOO_SMALL = 0x01000000;
  layout.MEASURED_STATE_MASK = 0xff000000;
  layout.MEASURED_SIZE_MASK = 0x00ffffff;

  function getMode(mode) {
    switch (mode) {
      case layout.EXACTLY:
        return "Exact";

      case layout.AT_MOST:
        return "AtMost";

      default:
        return "Unspecified";
    }
  }

  layout.getMode = getMode;

  function getMeasureSpecMode(spec) {
    return spec & MODE_MASK;
  }

  layout.getMeasureSpecMode = getMeasureSpecMode;

  function getMeasureSpecSize(spec) {
    return spec & ~MODE_MASK;
  }

  layout.getMeasureSpecSize = getMeasureSpecSize;

  function measureSpecToString(measureSpec) {
    var mode = getMeasureSpecMode(measureSpec);
    var size = getMeasureSpecSize(measureSpec);
    var text = "MeasureSpec: ";

    if (mode === layout.UNSPECIFIED) {
      text += "UNSPECIFIED ";
    } else if (mode === layout.EXACTLY) {
      text += "EXACTLY ";
    } else if (mode === layout.AT_MOST) {
      text += "AT_MOST ";
    }

    text += size;
    return text;
  }

  layout.measureSpecToString = measureSpecToString;

  function round(value) {
    var res = Math.floor(value + 0.5);

    if (res !== 0) {
      return res;
    } else if (value === 0) {
      return 0;
    } else if (value > 0) {
      return 1;
    }

    return -1;
  }

  layout.round = round;
})(layout = exports.layout || (exports.layout = {}));

function isFileOrResourcePath(path) {
  if (!types.isString(path)) {
    return false;
  }

  return path.indexOf("~/") === 0 || path.indexOf("/") === 0 || path.indexOf(exports.RESOURCE_PREFIX) === 0;
}

exports.isFileOrResourcePath = isFileOrResourcePath;

function isDataURI(uri) {
  if (!types.isString(uri)) {
    return false;
  }

  var firstSegment = uri.trim().split(",")[0];
  return firstSegment && firstSegment.indexOf("data:") === 0 && firstSegment.indexOf("base64") >= 0;
}

exports.isDataURI = isDataURI;

function mergeSort(arr, compareFunc) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = arr.length / 2;
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left, compareFunc), mergeSort(right, compareFunc), compareFunc);
}

exports.mergeSort = mergeSort;

function merge(left, right, compareFunc) {
  var result = [];

  while (left.length && right.length) {
    if (compareFunc(left[0], right[0]) <= 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

exports.merge = merge;

function hasDuplicates(arr) {
  return arr.length !== eliminateDuplicates(arr).length;
}

exports.hasDuplicates = hasDuplicates;

function eliminateDuplicates(arr) {
  return Array.from(new Set(arr));
}

exports.eliminateDuplicates = eliminateDuplicates;

/***/ }),

/***/ "../node_modules/tns-core-modules/utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var trace_1 = __webpack_require__("../node_modules/tns-core-modules/trace/trace.js");

var utils_common_1 = __webpack_require__("../node_modules/tns-core-modules/utils/utils-common.js");

__export(__webpack_require__("../node_modules/tns-core-modules/utils/utils-common.js"));

var mainScreenScale;

function isOrientationLandscape(orientation) {
  return orientation === 3 || orientation === 4;
}

var layout;

(function (layout) {
  var MODE_SHIFT = 30;
  var MODE_MASK = 0x3 << MODE_SHIFT;

  function makeMeasureSpec(size, mode) {
    return Math.round(Math.max(0, size)) & ~MODE_MASK | mode & MODE_MASK;
  }

  layout.makeMeasureSpec = makeMeasureSpec;

  function getDisplayDensity() {
    return mainScreenScale;
  }

  layout.getDisplayDensity = getDisplayDensity;

  function toDevicePixels(value) {
    return value * mainScreenScale;
  }

  layout.toDevicePixels = toDevicePixels;

  function toDeviceIndependentPixels(value) {
    return value / mainScreenScale;
  }

  layout.toDeviceIndependentPixels = toDeviceIndependentPixels;

  function measureNativeView(nativeView, width, widthMode, height, heightMode) {
    var view = nativeView;
    var nativeSize = view.sizeThatFits({
      width: widthMode === 0 ? Number.POSITIVE_INFINITY : toDeviceIndependentPixels(width),
      height: heightMode === 0 ? Number.POSITIVE_INFINITY : toDeviceIndependentPixels(height)
    });
    nativeSize.width = utils_common_1.layout.round(toDevicePixels(nativeSize.width));
    nativeSize.height = utils_common_1.layout.round(toDevicePixels(nativeSize.height));
    return nativeSize;
  }

  layout.measureNativeView = measureNativeView;
})(layout = exports.layout || (exports.layout = {}));

var ios;

(function (ios) {
  function getter(_this, property) {
    if (typeof property === "function") {
      return property.call(_this);
    } else {
      return property;
    }
  }

  ios.getter = getter;
  var collections;

  (function (collections) {
    function jsArrayToNSArray(str) {
      return NSArray.arrayWithArray(str);
    }

    collections.jsArrayToNSArray = jsArrayToNSArray;

    function nsArrayToJSArray(a) {
      var arr = [];

      if (a !== undefined) {
        var count = a.count;

        for (var i = 0; i < count; i++) {
          arr.push(a.objectAtIndex(i));
        }
      }

      return arr;
    }

    collections.nsArrayToJSArray = nsArrayToJSArray;
  })(collections = ios.collections || (ios.collections = {}));

  function isLandscape() {
    var device = getter(UIDevice, UIDevice.currentDevice);
    var statusBarOrientation = getter(UIApplication, UIApplication.sharedApplication).statusBarOrientation;
    var isStatusBarOrientationLandscape = isOrientationLandscape(statusBarOrientation);
    return isOrientationLandscape(device.orientation) || isStatusBarOrientationLandscape;
  }

  ios.isLandscape = isLandscape;
  ios.MajorVersion = NSString.stringWithString(getter(UIDevice, UIDevice.currentDevice).systemVersion).intValue;

  function openFile(filePath) {
    try {
      var appPath = getCurrentAppPath();
      var path = filePath.replace("~", appPath);
      var controller = UIDocumentInteractionController.interactionControllerWithURL(NSURL.fileURLWithPath(path));
      controller.delegate = new UIDocumentInteractionControllerDelegateImpl();
      return controller.presentPreviewAnimated(true);
    } catch (e) {
      trace_1.write("Error in openFile", trace_1.categories.Error, trace_1.messageType.error);
    }

    return false;
  }

  ios.openFile = openFile;

  function getCurrentAppPath() {
    var currentDir = __dirname;
    var tnsModulesIndex = currentDir.indexOf("/tns_modules");
    var appPath = currentDir;

    if (tnsModulesIndex !== -1) {
      appPath = currentDir.substring(0, tnsModulesIndex);
    }

    return appPath;
  }

  ios.getCurrentAppPath = getCurrentAppPath;

  function joinPaths() {
    var paths = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      paths[_i] = arguments[_i];
    }

    if (!paths || paths.length === 0) {
      return "";
    }

    return NSString.stringWithString(NSString.pathWithComponents(paths)).stringByStandardizingPath;
  }

  ios.joinPaths = joinPaths;

  function getVisibleViewController(rootViewController) {
    if (rootViewController.presentedViewController) {
      return getVisibleViewController(rootViewController.presentedViewController);
    }

    if (rootViewController.isKindOfClass(UINavigationController.class())) {
      return getVisibleViewController(rootViewController.visibleViewController);
    }

    if (rootViewController.isKindOfClass(UITabBarController.class())) {
      return getVisibleViewController(rootViewController);
    }

    return rootViewController;
  }

  ios.getVisibleViewController = getVisibleViewController;
})(ios = exports.ios || (exports.ios = {}));

function GC() {
  __collect();
}

exports.GC = GC;

function releaseNativeObject(object) {
  __releaseNativeCounterpart(object);
}

exports.releaseNativeObject = releaseNativeObject;

function openUrl(location) {
  try {
    var url = NSURL.URLWithString(location.trim());

    if (ios.getter(UIApplication, UIApplication.sharedApplication).canOpenURL(url)) {
      return ios.getter(UIApplication, UIApplication.sharedApplication).openURL(url);
    }
  } catch (e) {
    trace_1.write("Error in OpenURL", trace_1.categories.Error, trace_1.messageType.error);
  }

  return false;
}

exports.openUrl = openUrl;

var UIDocumentInteractionControllerDelegateImpl = function (_super) {
  __extends(UIDocumentInteractionControllerDelegateImpl, _super);

  function UIDocumentInteractionControllerDelegateImpl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  UIDocumentInteractionControllerDelegateImpl.prototype.getViewController = function () {
    var app = ios.getter(UIApplication, UIApplication.sharedApplication);
    return app.keyWindow.rootViewController;
  };

  UIDocumentInteractionControllerDelegateImpl.prototype.documentInteractionControllerViewControllerForPreview = function (controller) {
    return this.getViewController();
  };

  UIDocumentInteractionControllerDelegateImpl.prototype.documentInteractionControllerViewForPreview = function (controller) {
    return this.getViewController().view;
  };

  UIDocumentInteractionControllerDelegateImpl.prototype.documentInteractionControllerRectForPreview = function (controller) {
    return this.getViewController().view.frame;
  };

  UIDocumentInteractionControllerDelegateImpl.ObjCProtocols = [UIDocumentInteractionControllerDelegate];
  return UIDocumentInteractionControllerDelegateImpl;
}(NSObject);

mainScreenScale = ios.getter(UIScreen, UIScreen.mainScreen).scale;

/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

}]);