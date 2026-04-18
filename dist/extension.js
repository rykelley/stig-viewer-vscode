"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/xml2js/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/xml2js/lib/defaults.js"(exports2) {
    (function() {
      exports2.defaults = {
        "0.1": {
          explicitCharkey: false,
          trim: true,
          normalize: true,
          normalizeTags: false,
          attrkey: "@",
          charkey: "#",
          explicitArray: false,
          ignoreAttrs: false,
          mergeAttrs: false,
          explicitRoot: false,
          validator: null,
          xmlns: false,
          explicitChildren: false,
          childkey: "@@",
          charsAsChildren: false,
          includeWhiteChars: false,
          async: false,
          strict: true,
          attrNameProcessors: null,
          attrValueProcessors: null,
          tagNameProcessors: null,
          valueProcessors: null,
          emptyTag: ""
        },
        "0.2": {
          explicitCharkey: false,
          trim: false,
          normalize: false,
          normalizeTags: false,
          attrkey: "$",
          charkey: "_",
          explicitArray: true,
          ignoreAttrs: false,
          mergeAttrs: false,
          explicitRoot: true,
          validator: null,
          xmlns: false,
          explicitChildren: false,
          preserveChildrenOrder: false,
          childkey: "$$",
          charsAsChildren: false,
          includeWhiteChars: false,
          async: false,
          strict: true,
          attrNameProcessors: null,
          attrValueProcessors: null,
          tagNameProcessors: null,
          valueProcessors: null,
          rootName: "root",
          xmldec: {
            "version": "1.0",
            "encoding": "UTF-8",
            "standalone": true
          },
          doctype: null,
          renderOpts: {
            "pretty": true,
            "indent": "  ",
            "newline": "\n"
          },
          headless: false,
          chunkSize: 1e4,
          emptyTag: "",
          cdata: false
        }
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS({
  "node_modules/xmlbuilder/lib/Utility.js"(exports2, module2) {
    (function() {
      var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
      assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) {
          Object.assign.apply(null, arguments);
        } else {
          for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            if (source != null) {
              for (key in source) {
                if (!hasProp.call(source, key)) continue;
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
      isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
      };
      isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
      };
      isArray = function(val) {
        if (isFunction(Array.isArray)) {
          return Array.isArray(val);
        } else {
          return Object.prototype.toString.call(val) === "[object Array]";
        }
      };
      isEmpty = function(val) {
        var key;
        if (isArray(val)) {
          return !val.length;
        } else {
          for (key in val) {
            if (!hasProp.call(val, key)) continue;
            return false;
          }
          return true;
        }
      };
      isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
      };
      getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
          return obj.valueOf();
        } else {
          return obj;
        }
      };
      module2.exports.assign = assign;
      module2.exports.isFunction = isFunction;
      module2.exports.isObject = isObject;
      module2.exports.isArray = isArray;
      module2.exports.isEmpty = isEmpty;
      module2.exports.isPlainObject = isPlainObject;
      module2.exports.getValue = getValue;
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMImplementation.js"(exports2, module2) {
    (function() {
      var XMLDOMImplementation;
      module2.exports = XMLDOMImplementation = (function() {
        function XMLDOMImplementation2() {
        }
        XMLDOMImplementation2.prototype.hasFeature = function(feature, version) {
          return true;
        };
        XMLDOMImplementation2.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.createHTMLDocument = function(title) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.getFeature = function(feature, version) {
          throw new Error("This DOM method is not implemented.");
        };
        return XMLDOMImplementation2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js"(exports2, module2) {
    (function() {
      var XMLDOMErrorHandler;
      module2.exports = XMLDOMErrorHandler = (function() {
        function XMLDOMErrorHandler2() {
        }
        XMLDOMErrorHandler2.prototype.handleError = function(error) {
          throw new Error(error);
        };
        return XMLDOMErrorHandler2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMStringList.js"(exports2, module2) {
    (function() {
      var XMLDOMStringList;
      module2.exports = XMLDOMStringList = (function() {
        function XMLDOMStringList2(arr) {
          this.arr = arr || [];
        }
        Object.defineProperty(XMLDOMStringList2.prototype, "length", {
          get: function() {
            return this.arr.length;
          }
        });
        XMLDOMStringList2.prototype.item = function(index) {
          return this.arr[index] || null;
        };
        XMLDOMStringList2.prototype.contains = function(str) {
          return this.arr.indexOf(str) !== -1;
        };
        return XMLDOMStringList2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMConfiguration.js"(exports2, module2) {
    (function() {
      var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
      XMLDOMErrorHandler = require_XMLDOMErrorHandler();
      XMLDOMStringList = require_XMLDOMStringList();
      module2.exports = XMLDOMConfiguration = (function() {
        function XMLDOMConfiguration2() {
          var clonedSelf;
          this.defaultParams = {
            "canonical-form": false,
            "cdata-sections": false,
            "comments": false,
            "datatype-normalization": false,
            "element-content-whitespace": true,
            "entities": true,
            "error-handler": new XMLDOMErrorHandler(),
            "infoset": true,
            "validate-if-schema": false,
            "namespaces": true,
            "namespace-declarations": true,
            "normalize-characters": false,
            "schema-location": "",
            "schema-type": "",
            "split-cdata-sections": true,
            "validate": false,
            "well-formed": true
          };
          this.params = clonedSelf = Object.create(this.defaultParams);
        }
        Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
          get: function() {
            return new XMLDOMStringList(Object.keys(this.defaultParams));
          }
        });
        XMLDOMConfiguration2.prototype.getParameter = function(name) {
          if (this.params.hasOwnProperty(name)) {
            return this.params[name];
          } else {
            return null;
          }
        };
        XMLDOMConfiguration2.prototype.canSetParameter = function(name, value) {
          return true;
        };
        XMLDOMConfiguration2.prototype.setParameter = function(name, value) {
          if (value != null) {
            return this.params[name] = value;
          } else {
            return delete this.params[name];
          }
        };
        return XMLDOMConfiguration2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS({
  "node_modules/xmlbuilder/lib/NodeType.js"(exports2, module2) {
    (function() {
      module2.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS({
  "node_modules/xmlbuilder/lib/XMLAttribute.js"(exports2, module2) {
    (function() {
      var NodeType, XMLAttribute, XMLNode;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module2.exports = XMLAttribute = (function() {
        function XMLAttribute2(parent, name, value) {
          this.parent = parent;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.value = this.stringify.attValue(value);
          this.type = NodeType.Attribute;
          this.isId = false;
          this.schemaTypeInfo = null;
        }
        Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "specified", {
          get: function() {
            return true;
          }
        });
        XMLAttribute2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLAttribute2.prototype.toString = function(options) {
          return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        };
        XMLAttribute2.prototype.debugInfo = function(name) {
          name = name || this.name;
          if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else {
            return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
          }
        };
        XMLAttribute2.prototype.isEqualNode = function(node) {
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.value !== this.value) {
            return false;
          }
          return true;
        };
        return XMLAttribute2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"(exports2, module2) {
    (function() {
      var XMLNamedNodeMap;
      module2.exports = XMLNamedNodeMap = (function() {
        function XMLNamedNodeMap2(nodes) {
          this.nodes = nodes;
        }
        Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
          get: function() {
            return Object.keys(this.nodes).length || 0;
          }
        });
        XMLNamedNodeMap2.prototype.clone = function() {
          return this.nodes = null;
        };
        XMLNamedNodeMap2.prototype.getNamedItem = function(name) {
          return this.nodes[name];
        };
        XMLNamedNodeMap2.prototype.setNamedItem = function(node) {
          var oldNode;
          oldNode = this.nodes[node.nodeName];
          this.nodes[node.nodeName] = node;
          return oldNode || null;
        };
        XMLNamedNodeMap2.prototype.removeNamedItem = function(name) {
          var oldNode;
          oldNode = this.nodes[name];
          delete this.nodes[name];
          return oldNode || null;
        };
        XMLNamedNodeMap2.prototype.item = function(index) {
          return this.nodes[Object.keys(this.nodes)[index]] || null;
        };
        XMLNamedNodeMap2.prototype.getNamedItemNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap2.prototype.setNamedItemNS = function(node) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap2.prototype.removeNamedItemNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        };
        return XMLNamedNodeMap2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS({
  "node_modules/xmlbuilder/lib/XMLElement.js"(exports2, module2) {
    (function() {
      var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLAttribute = require_XMLAttribute();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module2.exports = XMLElement = (function(superClass) {
        extend(XMLElement2, superClass);
        function XMLElement2(parent, name, attributes) {
          var child, j, len, ref1;
          XMLElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing element name. " + this.debugInfo());
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.Element;
          this.attribs = {};
          this.schemaTypeInfo = null;
          if (attributes != null) {
            this.attribute(attributes);
          }
          if (parent.type === NodeType.Document) {
            this.isRoot = true;
            this.documentObject = parent;
            parent.rootObject = this;
            if (parent.children) {
              ref1 = parent.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (child.type === NodeType.DocType) {
                  child.name = this.name;
                  break;
                }
              }
            }
          }
        }
        Object.defineProperty(XMLElement2.prototype, "tagName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "id", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "className", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "classList", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "attributes", {
          get: function() {
            if (!this.attributeMap || !this.attributeMap.nodes) {
              this.attributeMap = new XMLNamedNodeMap(this.attribs);
            }
            return this.attributeMap;
          }
        });
        XMLElement2.prototype.clone = function() {
          var att, attName, clonedSelf, ref1;
          clonedSelf = Object.create(this);
          if (clonedSelf.isRoot) {
            clonedSelf.documentObject = null;
          }
          clonedSelf.attribs = {};
          ref1 = this.attribs;
          for (attName in ref1) {
            if (!hasProp.call(ref1, attName)) continue;
            att = ref1[attName];
            clonedSelf.attribs[attName] = att.clone();
          }
          clonedSelf.children = [];
          this.children.forEach(function(child) {
            var clonedChild;
            clonedChild = child.clone();
            clonedChild.parent = clonedSelf;
            return clonedSelf.children.push(clonedChild);
          });
          return clonedSelf;
        };
        XMLElement2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName)) continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLElement2.prototype.removeAttribute = function(name) {
          var attName, j, len;
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo());
          }
          name = getValue(name);
          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              attName = name[j];
              delete this.attribs[attName];
            }
          } else {
            delete this.attribs[name];
          }
          return this;
        };
        XMLElement2.prototype.toString = function(options) {
          return this.options.writer.element(this, this.options.writer.filterOptions(options));
        };
        XMLElement2.prototype.att = function(name, value) {
          return this.attribute(name, value);
        };
        XMLElement2.prototype.a = function(name, value) {
          return this.attribute(name, value);
        };
        XMLElement2.prototype.getAttribute = function(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].value;
          } else {
            return null;
          }
        };
        XMLElement2.prototype.setAttribute = function(name, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNode = function(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name];
          } else {
            return null;
          }
        };
        XMLElement2.prototype.setAttributeNode = function(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.removeAttributeNode = function(oldAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagName = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.removeAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setAttributeNodeNS = function(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.hasAttribute = function(name) {
          return this.attribs.hasOwnProperty(name);
        };
        XMLElement2.prototype.hasAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setIdAttribute = function(name, isId) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].isId;
          } else {
            return isId;
          }
        };
        XMLElement2.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setIdAttributeNode = function(idAttr, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagName = function(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByClassName = function(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.isEqualNode = function(node) {
          var i, j, ref1;
          if (!XMLElement2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.attribs.length !== this.attribs.length) {
            return false;
          }
          for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
            if (!this.attribs[i].isEqualNode(node.attribs[i])) {
              return false;
            }
          }
          return true;
        };
        return XMLElement2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS({
  "node_modules/xmlbuilder/lib/XMLCharacterData.js"(exports2, module2) {
    (function() {
      var XMLCharacterData, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLCharacterData = (function(superClass) {
        extend(XMLCharacterData2, superClass);
        function XMLCharacterData2(parent) {
          XMLCharacterData2.__super__.constructor.call(this, parent);
          this.value = "";
        }
        Object.defineProperty(XMLCharacterData2.prototype, "data", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "length", {
          get: function() {
            return this.value.length;
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        XMLCharacterData2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLCharacterData2.prototype.substringData = function(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.appendData = function(arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.insertData = function(offset, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.deleteData = function(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.replaceData = function(offset, count, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.isEqualNode = function(node) {
          if (!XMLCharacterData2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.data !== this.data) {
            return false;
          }
          return true;
        };
        return XMLCharacterData2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS({
  "node_modules/xmlbuilder/lib/XMLCData.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCData, XMLCharacterData, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLCData = (function(superClass) {
        extend(XMLCData2, superClass);
        function XMLCData2(parent, text) {
          XMLCData2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing CDATA text. " + this.debugInfo());
          }
          this.name = "#cdata-section";
          this.type = NodeType.CData;
          this.value = this.stringify.cdata(text);
        }
        XMLCData2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLCData2.prototype.toString = function(options) {
          return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        };
        return XMLCData2;
      })(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS({
  "node_modules/xmlbuilder/lib/XMLComment.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLComment, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLComment = (function(superClass) {
        extend(XMLComment2, superClass);
        function XMLComment2(parent, text) {
          XMLComment2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing comment text. " + this.debugInfo());
          }
          this.name = "#comment";
          this.type = NodeType.Comment;
          this.value = this.stringify.comment(text);
        }
        XMLComment2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLComment2.prototype.toString = function(options) {
          return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        };
        return XMLComment2;
      })(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDeclaration = (function(superClass) {
        extend(XMLDeclaration2, superClass);
        function XMLDeclaration2(parent, version, encoding, standalone) {
          var ref;
          XMLDeclaration2.__super__.constructor.call(this, parent);
          if (isObject(version)) {
            ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
          }
          if (!version) {
            version = "1.0";
          }
          this.type = NodeType.Declaration;
          this.version = this.stringify.xmlVersion(version);
          if (encoding != null) {
            this.encoding = this.stringify.xmlEncoding(encoding);
          }
          if (standalone != null) {
            this.standalone = this.stringify.xmlStandalone(standalone);
          }
        }
        XMLDeclaration2.prototype.toString = function(options) {
          return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        };
        return XMLDeclaration2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDAttList = (function(superClass) {
        extend(XMLDTDAttList2, superClass);
        function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          XMLDTDAttList2.__super__.constructor.call(this, parent);
          if (elementName == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (attributeName == null) {
            throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
          }
          if (!attributeType) {
            throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
          }
          if (!defaultValueType) {
            throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
          }
          if (defaultValueType.indexOf("#") !== 0) {
            defaultValueType = "#" + defaultValueType;
          }
          if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
            throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
            throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          this.elementName = this.stringify.name(elementName);
          this.type = NodeType.AttributeDeclaration;
          this.attributeName = this.stringify.name(attributeName);
          this.attributeType = this.stringify.dtdAttType(attributeType);
          if (defaultValue) {
            this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
          }
          this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList2.prototype.toString = function(options) {
          return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDAttList2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDEntity = (function(superClass) {
        extend(XMLDTDEntity2, superClass);
        function XMLDTDEntity2(parent, pe, name, value) {
          XMLDTDEntity2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD entity name. " + this.debugInfo(name));
          }
          if (value == null) {
            throw new Error("Missing DTD entity value. " + this.debugInfo(name));
          }
          this.pe = !!pe;
          this.name = this.stringify.name(name);
          this.type = NodeType.EntityDeclaration;
          if (!isObject(value)) {
            this.value = this.stringify.dtdEntityValue(value);
            this.internal = true;
          } else {
            if (!value.pubID && !value.sysID) {
              throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            if (value.pubID && !value.sysID) {
              throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
            }
            this.internal = false;
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
            if (value.nData != null) {
              this.nData = this.stringify.dtdNData(value.nData);
            }
            if (this.pe && this.nData) {
              throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
            }
          }
        }
        Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
          get: function() {
            return this.nData || null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
          get: function() {
            return null;
          }
        });
        XMLDTDEntity2.prototype.toString = function(options) {
          return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDEntity2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDElement, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDElement = (function(superClass) {
        extend(XMLDTDElement2, superClass);
        function XMLDTDElement2(parent, name, value) {
          XMLDTDElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (!value) {
            value = "(#PCDATA)";
          }
          if (Array.isArray(value)) {
            value = "(" + value.join(",") + ")";
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.ElementDeclaration;
          this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement2.prototype.toString = function(options) {
          return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDElement2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDNotation = (function(superClass) {
        extend(XMLDTDNotation2, superClass);
        function XMLDTDNotation2(parent, name, value) {
          XMLDTDNotation2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD notation name. " + this.debugInfo(name));
          }
          if (!value.pubID && !value.sysID) {
            throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.NotationDeclaration;
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
        }
        Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        XMLDTDNotation2.prototype.toString = function(options) {
          return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDNotation2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocType.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module2.exports = XMLDocType = (function(superClass) {
        extend(XMLDocType2, superClass);
        function XMLDocType2(parent, pubID, sysID) {
          var child, i, len, ref, ref1, ref2;
          XMLDocType2.__super__.constructor.call(this, parent);
          this.type = NodeType.DocType;
          if (parent.children) {
            ref = parent.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.Element) {
                this.name = child.name;
                break;
              }
            }
          }
          this.documentObject = parent;
          if (isObject(pubID)) {
            ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
          }
          if (sysID == null) {
            ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
          }
          if (pubID != null) {
            this.pubID = this.stringify.dtdPubID(pubID);
          }
          if (sysID != null) {
            this.sysID = this.stringify.dtdSysID(sysID);
          }
        }
        Object.defineProperty(XMLDocType2.prototype, "entities", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.EntityDeclaration && !child.pe) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "notations", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.NotationDeclaration) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        XMLDocType2.prototype.element = function(name, value) {
          var child;
          child = new XMLDTDElement(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var child;
          child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.entity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, false, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.pEntity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, true, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.notation = function(name, value) {
          var child;
          child = new XMLDTDNotation(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.toString = function(options) {
          return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        };
        XMLDocType2.prototype.ele = function(name, value) {
          return this.element(name, value);
        };
        XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocType2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocType2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        XMLDocType2.prototype.up = function() {
          return this.root() || this.documentObject;
        };
        XMLDocType2.prototype.isEqualNode = function(node) {
          if (!XMLDocType2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.name !== this.name) {
            return false;
          }
          if (node.publicId !== this.publicId) {
            return false;
          }
          if (node.systemId !== this.systemId) {
            return false;
          }
          return true;
        };
        return XMLDocType2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS({
  "node_modules/xmlbuilder/lib/XMLRaw.js"(exports2, module2) {
    (function() {
      var NodeType, XMLNode, XMLRaw, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module2.exports = XMLRaw = (function(superClass) {
        extend(XMLRaw2, superClass);
        function XMLRaw2(parent, text) {
          XMLRaw2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing raw text. " + this.debugInfo());
          }
          this.type = NodeType.Raw;
          this.value = this.stringify.raw(text);
        }
        XMLRaw2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLRaw2.prototype.toString = function(options) {
          return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        };
        return XMLRaw2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS({
  "node_modules/xmlbuilder/lib/XMLText.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLText, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLText = (function(superClass) {
        extend(XMLText2, superClass);
        function XMLText2(parent, text) {
          XMLText2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing element text. " + this.debugInfo());
          }
          this.name = "#text";
          this.type = NodeType.Text;
          this.value = this.stringify.text(text);
        }
        Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLText2.prototype, "wholeText", {
          get: function() {
            var next, prev, str;
            str = "";
            prev = this.previousSibling;
            while (prev) {
              str = prev.data + str;
              prev = prev.previousSibling;
            }
            str += this.data;
            next = this.nextSibling;
            while (next) {
              str = str + next.data;
              next = next.nextSibling;
            }
            return str;
          }
        });
        XMLText2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLText2.prototype.toString = function(options) {
          return this.options.writer.text(this, this.options.writer.filterOptions(options));
        };
        XMLText2.prototype.splitText = function(offset) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLText2.prototype.replaceWholeText = function(content) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLText2;
      })(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS({
  "node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLProcessingInstruction, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLProcessingInstruction = (function(superClass) {
        extend(XMLProcessingInstruction2, superClass);
        function XMLProcessingInstruction2(parent, target, value) {
          XMLProcessingInstruction2.__super__.constructor.call(this, parent);
          if (target == null) {
            throw new Error("Missing instruction target. " + this.debugInfo());
          }
          this.type = NodeType.ProcessingInstruction;
          this.target = this.stringify.insTarget(target);
          this.name = this.target;
          if (value) {
            this.value = this.stringify.insValue(value);
          }
        }
        XMLProcessingInstruction2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLProcessingInstruction2.prototype.toString = function(options) {
          return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        };
        XMLProcessingInstruction2.prototype.isEqualNode = function(node) {
          if (!XMLProcessingInstruction2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.target !== this.target) {
            return false;
          }
          return true;
        };
        return XMLProcessingInstruction2;
      })(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDummy.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDummy, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDummy = (function(superClass) {
        extend(XMLDummy2, superClass);
        function XMLDummy2(parent) {
          XMLDummy2.__super__.constructor.call(this, parent);
          this.type = NodeType.Dummy;
        }
        XMLDummy2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLDummy2.prototype.toString = function(options) {
          return "";
        };
        return XMLDummy2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNodeList.js"(exports2, module2) {
    (function() {
      var XMLNodeList;
      module2.exports = XMLNodeList = (function() {
        function XMLNodeList2(nodes) {
          this.nodes = nodes;
        }
        Object.defineProperty(XMLNodeList2.prototype, "length", {
          get: function() {
            return this.nodes.length || 0;
          }
        });
        XMLNodeList2.prototype.clone = function() {
          return this.nodes = null;
        };
        XMLNodeList2.prototype.item = function(index) {
          return this.nodes[index] || null;
        };
        return XMLNodeList2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS({
  "node_modules/xmlbuilder/lib/DocumentPosition.js"(exports2, module2) {
    (function() {
      module2.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNode.js"(exports2, module2) {
    (function() {
      var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
      ref1 = require_Utility(), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
      XMLElement = null;
      XMLCData = null;
      XMLComment = null;
      XMLDeclaration = null;
      XMLDocType = null;
      XMLRaw = null;
      XMLText = null;
      XMLProcessingInstruction = null;
      XMLDummy = null;
      NodeType = null;
      XMLNodeList = null;
      XMLNamedNodeMap = null;
      DocumentPosition = null;
      module2.exports = XMLNode = (function() {
        function XMLNode2(parent1) {
          this.parent = parent1;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          this.value = null;
          this.children = [];
          this.baseURI = null;
          if (!XMLElement) {
            XMLElement = require_XMLElement();
            XMLCData = require_XMLCData();
            XMLComment = require_XMLComment();
            XMLDeclaration = require_XMLDeclaration();
            XMLDocType = require_XMLDocType();
            XMLRaw = require_XMLRaw();
            XMLText = require_XMLText();
            XMLProcessingInstruction = require_XMLProcessingInstruction();
            XMLDummy = require_XMLDummy();
            NodeType = require_NodeType();
            XMLNodeList = require_XMLNodeList();
            XMLNamedNodeMap = require_XMLNamedNodeMap();
            DocumentPosition = require_DocumentPosition();
          }
        }
        Object.defineProperty(XMLNode2.prototype, "nodeName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeValue", {
          get: function() {
            return this.value;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "childNodes", {
          get: function() {
            if (!this.childNodeList || !this.childNodeList.nodes) {
              this.childNodeList = new XMLNodeList(this.children);
            }
            return this.childNodeList;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "firstChild", {
          get: function() {
            return this.children[0] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "lastChild", {
          get: function() {
            return this.children[this.children.length - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "previousSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nextSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i + 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
          get: function() {
            return this.document() || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "textContent", {
          get: function() {
            var child, j, len, ref2, str;
            if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
              str = "";
              ref2 = this.children;
              for (j = 0, len = ref2.length; j < len; j++) {
                child = ref2[j];
                if (child.textContent) {
                  str += child.textContent;
                }
              }
              return str;
            } else {
              return null;
            }
          },
          set: function(value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        XMLNode2.prototype.setParent = function(parent) {
          var child, j, len, ref2, results;
          this.parent = parent;
          if (parent) {
            this.options = parent.options;
            this.stringify = parent.stringify;
          }
          ref2 = this.children;
          results = [];
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            results.push(child.setParent(this));
          }
          return results;
        };
        XMLNode2.prototype.element = function(name, attributes, text) {
          var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
          lastChild = null;
          if (attributes === null && text == null) {
            ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
          }
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
          }
          if (name != null) {
            name = getValue(name);
          }
          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              item = name[j];
              lastChild = this.element(item);
            }
          } else if (isFunction(name)) {
            lastChild = this.element(name.apply());
          } else if (isObject(name)) {
            for (key in name) {
              if (!hasProp.call(name, key)) continue;
              val = name[key];
              if (isFunction(val)) {
                val = val.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
              } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                lastChild = this.dummy();
              } else if (isObject(val) && isEmpty(val)) {
                lastChild = this.element(key);
              } else if (!this.options.keepNullNodes && val == null) {
                lastChild = this.dummy();
              } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                for (k = 0, len1 = val.length; k < len1; k++) {
                  item = val[k];
                  childNode = {};
                  childNode[key] = item;
                  lastChild = this.element(childNode);
                }
              } else if (isObject(val)) {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                  lastChild = this.element(val);
                } else {
                  lastChild = this.element(key);
                  lastChild.element(val);
                }
              } else {
                lastChild = this.element(key, val);
              }
            }
          } else if (!this.options.keepNullNodes && text === null) {
            lastChild = this.dummy();
          } else {
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.text(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
              lastChild = this.cdata(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
              lastChild = this.comment(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
              lastChild = this.raw(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
              lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
            } else {
              lastChild = this.node(name, attributes, text);
            }
          }
          if (lastChild == null) {
            throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
          }
          return lastChild;
        };
        XMLNode2.prototype.insertBefore = function(name, attributes, text) {
          var child, i, newChild, refChild, removed;
          if (name != null ? name.type : void 0) {
            newChild = name;
            refChild = attributes;
            newChild.setParent(this);
            if (refChild) {
              i = children.indexOf(refChild);
              removed = children.splice(i);
              children.push(newChild);
              Array.prototype.push.apply(children, removed);
            } else {
              children.push(newChild);
            }
            return newChild;
          } else {
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
        };
        XMLNode2.prototype.insertAfter = function(name, attributes, text) {
          var child, i, removed;
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        };
        XMLNode2.prototype.remove = function() {
          var i, ref2;
          if (this.isRoot) {
            throw new Error("Cannot remove the root element. " + this.debugInfo());
          }
          i = this.parent.children.indexOf(this);
          [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref2 = [])), ref2;
          return this.parent;
        };
        XMLNode2.prototype.node = function(name, attributes, text) {
          var child, ref2;
          if (name != null) {
            name = getValue(name);
          }
          attributes || (attributes = {});
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
          }
          child = new XMLElement(this, name, attributes);
          if (text != null) {
            child.text(text);
          }
          this.children.push(child);
          return child;
        };
        XMLNode2.prototype.text = function(value) {
          var child;
          if (isObject(value)) {
            this.element(value);
          }
          child = new XMLText(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.cdata = function(value) {
          var child;
          child = new XMLCData(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.comment = function(value) {
          var child;
          child = new XMLComment(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.commentBefore = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.commentAfter = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.raw = function(value) {
          var child;
          child = new XMLRaw(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.dummy = function() {
          var child;
          child = new XMLDummy(this);
          return child;
        };
        XMLNode2.prototype.instruction = function(target, value) {
          var insTarget, insValue, instruction, j, len;
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (j = 0, len = target.length; j < len; j++) {
              insTarget = target[j];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget)) continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            instruction = new XMLProcessingInstruction(this, target, value);
            this.children.push(instruction);
          }
          return this;
        };
        XMLNode2.prototype.instructionBefore = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.instructionAfter = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.declaration = function(version, encoding, standalone) {
          var doc, xmldec;
          doc = this.document();
          xmldec = new XMLDeclaration(doc, version, encoding, standalone);
          if (doc.children.length === 0) {
            doc.children.unshift(xmldec);
          } else if (doc.children[0].type === NodeType.Declaration) {
            doc.children[0] = xmldec;
          } else {
            doc.children.unshift(xmldec);
          }
          return doc.root() || doc;
        };
        XMLNode2.prototype.dtd = function(pubID, sysID) {
          var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
          doc = this.document();
          doctype = new XMLDocType(doc, pubID, sysID);
          ref2 = doc.children;
          for (i = j = 0, len = ref2.length; j < len; i = ++j) {
            child = ref2[i];
            if (child.type === NodeType.DocType) {
              doc.children[i] = doctype;
              return doctype;
            }
          }
          ref3 = doc.children;
          for (i = k = 0, len1 = ref3.length; k < len1; i = ++k) {
            child = ref3[i];
            if (child.isRoot) {
              doc.children.splice(i, 0, doctype);
              return doctype;
            }
          }
          doc.children.push(doctype);
          return doctype;
        };
        XMLNode2.prototype.up = function() {
          if (this.isRoot) {
            throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          }
          return this.parent;
        };
        XMLNode2.prototype.root = function() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node.rootObject;
            } else if (node.isRoot) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.document = function() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.end = function(options) {
          return this.document().end(options);
        };
        XMLNode2.prototype.prev = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i < 1) {
            throw new Error("Already at the first node. " + this.debugInfo());
          }
          return this.parent.children[i - 1];
        };
        XMLNode2.prototype.next = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i === -1 || i === this.parent.children.length - 1) {
            throw new Error("Already at the last node. " + this.debugInfo());
          }
          return this.parent.children[i + 1];
        };
        XMLNode2.prototype.importDocument = function(doc) {
          var clonedRoot;
          clonedRoot = doc.root().clone();
          clonedRoot.parent = this;
          clonedRoot.isRoot = false;
          this.children.push(clonedRoot);
          return this;
        };
        XMLNode2.prototype.debugInfo = function(name) {
          var ref2, ref3;
          name = name || this.name;
          if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) {
            return "";
          } else if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) {
            return "node: <" + name + ">";
          } else {
            return "node: <" + name + ">, parent: <" + this.parent.name + ">";
          }
        };
        XMLNode2.prototype.ele = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.doc = function() {
          return this.document();
        };
        XMLNode2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLNode2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLNode2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.u = function() {
          return this.up();
        };
        XMLNode2.prototype.importXMLBuilder = function(doc) {
          return this.importDocument(doc);
        };
        XMLNode2.prototype.replaceChild = function(newChild, oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.removeChild = function(oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.appendChild = function(newChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.hasChildNodes = function() {
          return this.children.length !== 0;
        };
        XMLNode2.prototype.cloneNode = function(deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.normalize = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isSupported = function(feature, version) {
          return true;
        };
        XMLNode2.prototype.hasAttributes = function() {
          return this.attribs.length !== 0;
        };
        XMLNode2.prototype.compareDocumentPosition = function(other) {
          var ref, res;
          ref = this;
          if (ref === other) {
            return 0;
          } else if (this.document() !== other.document()) {
            res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
            if (Math.random() < 0.5) {
              res |= DocumentPosition.Preceding;
            } else {
              res |= DocumentPosition.Following;
            }
            return res;
          } else if (ref.isAncestor(other)) {
            return DocumentPosition.Contains | DocumentPosition.Preceding;
          } else if (ref.isDescendant(other)) {
            return DocumentPosition.Contains | DocumentPosition.Following;
          } else if (ref.isPreceding(other)) {
            return DocumentPosition.Preceding;
          } else {
            return DocumentPosition.Following;
          }
        };
        XMLNode2.prototype.isSameNode = function(other) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.lookupPrefix = function(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isDefaultNamespace = function(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.lookupNamespaceURI = function(prefix) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isEqualNode = function(node) {
          var i, j, ref2;
          if (node.nodeType !== this.nodeType) {
            return false;
          }
          if (node.children.length !== this.children.length) {
            return false;
          }
          for (i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
            if (!this.children[i].isEqualNode(node.children[i])) {
              return false;
            }
          }
          return true;
        };
        XMLNode2.prototype.getFeature = function(feature, version) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.setUserData = function(key, data, handler) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.getUserData = function(key) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.contains = function(other) {
          if (!other) {
            return false;
          }
          return other === this || this.isDescendant(other);
        };
        XMLNode2.prototype.isDescendant = function(node) {
          var child, isDescendantChild, j, len, ref2;
          ref2 = this.children;
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            if (node === child) {
              return true;
            }
            isDescendantChild = child.isDescendant(node);
            if (isDescendantChild) {
              return true;
            }
          }
          return false;
        };
        XMLNode2.prototype.isAncestor = function(node) {
          return node.isDescendant(this);
        };
        XMLNode2.prototype.isPreceding = function(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos < thisPos;
          }
        };
        XMLNode2.prototype.isFollowing = function(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos > thisPos;
          }
        };
        XMLNode2.prototype.treePosition = function(node) {
          var found, pos;
          pos = 0;
          found = false;
          this.foreachTreeNode(this.document(), function(childNode) {
            pos++;
            if (!found && childNode === node) {
              return found = true;
            }
          });
          if (found) {
            return pos;
          } else {
            return -1;
          }
        };
        XMLNode2.prototype.foreachTreeNode = function(node, func) {
          var child, j, len, ref2, res;
          node || (node = this.document());
          ref2 = node.children;
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            if (res = func(child)) {
              return res;
            } else {
              res = this.foreachTreeNode(child, func);
              if (res) {
                return res;
              }
            }
          }
        };
        return XMLNode2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStringifier.js"(exports2, module2) {
    (function() {
      var XMLStringifier, bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      }, hasProp = {}.hasOwnProperty;
      module2.exports = XMLStringifier = (function() {
        function XMLStringifier2(options) {
          this.assertLegalName = bind(this.assertLegalName, this);
          this.assertLegalChar = bind(this.assertLegalChar, this);
          var key, ref, value;
          options || (options = {});
          this.options = options;
          if (!this.options.version) {
            this.options.version = "1.0";
          }
          ref = options.stringify || {};
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this[key] = value;
          }
        }
        XMLStringifier2.prototype.name = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalName("" + val || "");
        };
        XMLStringifier2.prototype.text = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.textEscape("" + val || ""));
        };
        XMLStringifier2.prototype.cdata = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          val = val.replace("]]>", "]]]]><![CDATA[>");
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.comment = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/--/)) {
            throw new Error("Comment text cannot contain double-hypen: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.raw = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return "" + val || "";
        };
        XMLStringifier2.prototype.attValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.attEscape(val = "" + val || ""));
        };
        XMLStringifier2.prototype.insTarget = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.insValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/\?>/)) {
            throw new Error("Invalid processing instruction value: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.xmlVersion = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/1\.[0-9]+/)) {
            throw new Error("Invalid version number: " + val);
          }
          return val;
        };
        XMLStringifier2.prototype.xmlEncoding = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
            throw new Error("Invalid encoding: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.xmlStandalone = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          if (val) {
            return "yes";
          } else {
            return "no";
          }
        };
        XMLStringifier2.prototype.dtdPubID = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdSysID = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdElementValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdAttType = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdAttDefault = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdEntityValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdNData = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.convertAttKey = "@";
        XMLStringifier2.prototype.convertPIKey = "?";
        XMLStringifier2.prototype.convertTextKey = "#text";
        XMLStringifier2.prototype.convertCDataKey = "#cdata";
        XMLStringifier2.prototype.convertCommentKey = "#comment";
        XMLStringifier2.prototype.convertRawKey = "#raw";
        XMLStringifier2.prototype.assertLegalChar = function(str) {
          var regex, res;
          if (this.options.noValidation) {
            return str;
          }
          regex = "";
          if (this.options.version === "1.0") {
            regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
          } else if (this.options.version === "1.1") {
            regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
          }
          return str;
        };
        XMLStringifier2.prototype.assertLegalName = function(str) {
          var regex;
          if (this.options.noValidation) {
            return str;
          }
          this.assertLegalChar(str);
          regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
          if (!str.match(regex)) {
            throw new Error("Invalid character in name");
          }
          return str;
        };
        XMLStringifier2.prototype.textEscape = function(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        };
        XMLStringifier2.prototype.attEscape = function(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        };
        return XMLStringifier2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS({
  "node_modules/xmlbuilder/lib/WriterState.js"(exports2, module2) {
    (function() {
      module2.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS({
  "node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
      assign = require_Utility().assign;
      NodeType = require_NodeType();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDummy = require_XMLDummy();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      WriterState = require_WriterState();
      module2.exports = XMLWriterBase = (function() {
        function XMLWriterBase2(options) {
          var key, ref, value;
          options || (options = {});
          this.options = options;
          ref = options.writer || {};
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this["_" + key] = this[key];
            this[key] = value;
          }
        }
        XMLWriterBase2.prototype.filterOptions = function(options) {
          var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          options || (options = {});
          options = assign({}, this.options, options);
          filteredOptions = {
            writer: this
          };
          filteredOptions.pretty = options.pretty || false;
          filteredOptions.allowEmpty = options.allowEmpty || false;
          filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
          filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
          filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
          filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
          filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
          if (filteredOptions.spaceBeforeSlash === true) {
            filteredOptions.spaceBeforeSlash = " ";
          }
          filteredOptions.suppressPrettyCount = 0;
          filteredOptions.user = {};
          filteredOptions.state = WriterState.None;
          return filteredOptions;
        };
        XMLWriterBase2.prototype.indent = function(node, options, level) {
          var indentLevel;
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else if (options.pretty) {
            indentLevel = (level || 0) + options.offset + 1;
            if (indentLevel > 0) {
              return new Array(indentLevel).join(options.indent);
            }
          }
          return "";
        };
        XMLWriterBase2.prototype.endline = function(node, options, level) {
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else {
            return options.newline;
          }
        };
        XMLWriterBase2.prototype.attribute = function(att, options, level) {
          var r;
          this.openAttribute(att, options, level);
          r = " " + att.name + '="' + att.value + '"';
          this.closeAttribute(att, options, level);
          return r;
        };
        XMLWriterBase2.prototype.cdata = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<![CDATA[";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += "]]>" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.comment = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!-- ";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += " -->" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.declaration = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?xml";
          options.state = WriterState.InsideTag;
          r += ' version="' + node.version + '"';
          if (node.encoding != null) {
            r += ' encoding="' + node.encoding + '"';
          }
          if (node.standalone != null) {
            r += ' standalone="' + node.standalone + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.docType = function(node, options, level) {
          var child, i, len, r, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          r += "<!DOCTYPE " + node.root().name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children.length > 0) {
            r += " [";
            r += this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += "]";
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.element = function(node, options, level) {
          var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
          level || (level = 0);
          prettySuppressed = false;
          r = "";
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r += this.indent(node, options, level) + "<" + node.name;
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            r += this.attribute(att, options, level);
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
          })) {
            if (options.allowEmpty) {
              r += ">";
              options.state = WriterState.CloseTag;
              r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
              options.state = WriterState.CloseTag;
              r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
            r += ">";
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            r += this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            if (options.dontPrettyTextNodes) {
              ref1 = node.children;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
                if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                  options.suppressPrettyCount++;
                  prettySuppressed = true;
                  break;
                }
              }
            }
            r += ">" + this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref2 = node.children;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              child = ref2[j];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += this.indent(node, options, level) + "</" + node.name + ">";
            if (prettySuppressed) {
              options.suppressPrettyCount--;
            }
            r += this.endline(node, options, level);
            options.state = WriterState.None;
          }
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.writeChildNode = function(node, options, level) {
          switch (node.type) {
            case NodeType.CData:
              return this.cdata(node, options, level);
            case NodeType.Comment:
              return this.comment(node, options, level);
            case NodeType.Element:
              return this.element(node, options, level);
            case NodeType.Raw:
              return this.raw(node, options, level);
            case NodeType.Text:
              return this.text(node, options, level);
            case NodeType.ProcessingInstruction:
              return this.processingInstruction(node, options, level);
            case NodeType.Dummy:
              return "";
            case NodeType.Declaration:
              return this.declaration(node, options, level);
            case NodeType.DocType:
              return this.docType(node, options, level);
            case NodeType.AttributeDeclaration:
              return this.dtdAttList(node, options, level);
            case NodeType.ElementDeclaration:
              return this.dtdElement(node, options, level);
            case NodeType.EntityDeclaration:
              return this.dtdEntity(node, options, level);
            case NodeType.NotationDeclaration:
              return this.dtdNotation(node, options, level);
            default:
              throw new Error("Unknown XML node type: " + node.constructor.name);
          }
        };
        XMLWriterBase2.prototype.processingInstruction = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?";
          options.state = WriterState.InsideTag;
          r += node.target;
          if (node.value) {
            r += " " + node.value;
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.raw = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.text = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdAttList = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ATTLIST";
          options.state = WriterState.InsideTag;
          r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
          if (node.defaultValueType !== "#DEFAULT") {
            r += " " + node.defaultValueType;
          }
          if (node.defaultValue) {
            r += ' "' + node.defaultValue + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdElement = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ELEMENT";
          options.state = WriterState.InsideTag;
          r += " " + node.name + " " + node.value;
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdEntity = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ENTITY";
          options.state = WriterState.InsideTag;
          if (node.pe) {
            r += " %";
          }
          r += " " + node.name;
          if (node.value) {
            r += ' "' + node.value + '"';
          } else {
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.nData) {
              r += " NDATA " + node.nData;
            }
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdNotation = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!NOTATION";
          options.state = WriterState.InsideTag;
          r += " " + node.name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.pubID) {
            r += ' PUBLIC "' + node.pubID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.openNode = function(node, options, level) {
        };
        XMLWriterBase2.prototype.closeNode = function(node, options, level) {
        };
        XMLWriterBase2.prototype.openAttribute = function(att, options, level) {
        };
        XMLWriterBase2.prototype.closeAttribute = function(att, options, level) {
        };
        return XMLWriterBase2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports2, module2) {
    (function() {
      var XMLStringWriter, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLWriterBase = require_XMLWriterBase();
      module2.exports = XMLStringWriter = (function(superClass) {
        extend(XMLStringWriter2, superClass);
        function XMLStringWriter2(options) {
          XMLStringWriter2.__super__.constructor.call(this, options);
        }
        XMLStringWriter2.prototype.document = function(doc, options) {
          var child, i, len, r, ref;
          options = this.filterOptions(options);
          r = "";
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, 0);
          }
          if (options.pretty && r.slice(-options.newline.length) === options.newline) {
            r = r.slice(0, -options.newline.length);
          }
          return r;
        };
        return XMLStringWriter2;
      })(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocument.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isPlainObject = require_Utility().isPlainObject;
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDOMConfiguration = require_XMLDOMConfiguration();
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module2.exports = XMLDocument = (function(superClass) {
        extend(XMLDocument2, superClass);
        function XMLDocument2(options) {
          XMLDocument2.__super__.constructor.call(this, null);
          this.name = "#document";
          this.type = NodeType.Document;
          this.documentURI = null;
          this.domConfig = new XMLDOMConfiguration();
          options || (options = {});
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.stringify = new XMLStringifier(options);
        }
        Object.defineProperty(XMLDocument2.prototype, "implementation", {
          value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument2.prototype, "doctype", {
          get: function() {
            var child, i, len, ref;
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.DocType) {
                return child;
              }
            }
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "documentElement", {
          get: function() {
            return this.rootObject || null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
          get: function() {
            return false;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].encoding;
            } else {
              return null;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].standalone === "yes";
            } else {
              return false;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].version;
            } else {
              return "1.0";
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "URL", {
          get: function() {
            return this.documentURI;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "origin", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "compatMode", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "characterSet", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "contentType", {
          get: function() {
            return null;
          }
        });
        XMLDocument2.prototype.end = function(writer) {
          var writerOptions;
          writerOptions = {};
          if (!writer) {
            writer = this.options.writer;
          } else if (isPlainObject(writer)) {
            writerOptions = writer;
            writer = this.options.writer;
          }
          return writer.document(this, writer.filterOptions(writerOptions));
        };
        XMLDocument2.prototype.toString = function(options) {
          return this.options.writer.document(this, this.options.writer.filterOptions(options));
        };
        XMLDocument2.prototype.createElement = function(tagName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createDocumentFragment = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createTextNode = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createComment = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createCDATASection = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createProcessingInstruction = function(target, data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createAttribute = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createEntityReference = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByTagName = function(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.importNode = function(importedNode, deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createElementNS = function(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementById = function(elementId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.adoptNode = function(source) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.normalizeDocument = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByClassName = function(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createEvent = function(eventInterface) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createRange = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createNodeIterator = function(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createTreeWalker = function(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLDocument2;
      })(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
      NodeType = require_NodeType();
      XMLDocument = require_XMLDocument();
      XMLElement = require_XMLElement();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLAttribute = require_XMLAttribute();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      WriterState = require_WriterState();
      module2.exports = XMLDocumentCB = (function() {
        function XMLDocumentCB2(options, onData, onEnd) {
          var writerOptions;
          this.name = "?xml";
          this.type = NodeType.Document;
          options || (options = {});
          writerOptions = {};
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          } else if (isPlainObject(options.writer)) {
            writerOptions = options.writer;
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.writer = options.writer;
          this.writerOptions = this.writer.filterOptions(writerOptions);
          this.stringify = new XMLStringifier(options);
          this.onDataCallback = onData || function() {
          };
          this.onEndCallback = onEnd || function() {
          };
          this.currentNode = null;
          this.currentLevel = -1;
          this.openTags = {};
          this.documentStarted = false;
          this.documentCompleted = false;
          this.root = null;
        }
        XMLDocumentCB2.prototype.createChildNode = function(node) {
          var att, attName, attributes, child, i, len, ref1, ref2;
          switch (node.type) {
            case NodeType.CData:
              this.cdata(node.value);
              break;
            case NodeType.Comment:
              this.comment(node.value);
              break;
            case NodeType.Element:
              attributes = {};
              ref1 = node.attribs;
              for (attName in ref1) {
                if (!hasProp.call(ref1, attName)) continue;
                att = ref1[attName];
                attributes[attName] = att.value;
              }
              this.node(node.name, attributes);
              break;
            case NodeType.Dummy:
              this.dummy();
              break;
            case NodeType.Raw:
              this.raw(node.value);
              break;
            case NodeType.Text:
              this.text(node.value);
              break;
            case NodeType.ProcessingInstruction:
              this.instruction(node.target, node.value);
              break;
            default:
              throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
          }
          ref2 = node.children;
          for (i = 0, len = ref2.length; i < len; i++) {
            child = ref2[i];
            this.createChildNode(child);
            if (child.type === NodeType.Element) {
              this.up();
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.dummy = function() {
          return this;
        };
        XMLDocumentCB2.prototype.node = function(name, attributes, text) {
          var ref1;
          if (name == null) {
            throw new Error("Missing node name.");
          }
          if (this.root && this.currentLevel === -1) {
            throw new Error("Document can only have one root node. " + this.debugInfo(name));
          }
          this.openCurrent();
          name = getValue(name);
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
          }
          this.currentNode = new XMLElement(this, name, attributes);
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          if (text != null) {
            this.text(text);
          }
          return this;
        };
        XMLDocumentCB2.prototype.element = function(name, attributes, text) {
          var child, i, len, oldValidationFlag, ref1, root;
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            this.dtdElement.apply(this, arguments);
          } else {
            if (Array.isArray(name) || isObject(name) || isFunction(name)) {
              oldValidationFlag = this.options.noValidation;
              this.options.noValidation = true;
              root = new XMLDocument(this.options).element("TEMP_ROOT");
              root.element(name);
              this.options.noValidation = oldValidationFlag;
              ref1 = root.children;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) {
                  this.up();
                }
              }
            } else {
              this.node(name, attributes, text);
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (!this.currentNode || this.currentNode.children) {
            throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
          }
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName)) continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.text = function(value) {
          var node;
          this.openCurrent();
          node = new XMLText(this, value);
          this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.cdata = function(value) {
          var node;
          this.openCurrent();
          node = new XMLCData(this, value);
          this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.comment = function(value) {
          var node;
          this.openCurrent();
          node = new XMLComment(this, value);
          this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.raw = function(value) {
          var node;
          this.openCurrent();
          node = new XMLRaw(this, value);
          this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.instruction = function(target, value) {
          var i, insTarget, insValue, len, node;
          this.openCurrent();
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (i = 0, len = target.length; i < len; i++) {
              insTarget = target[i];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget)) continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            node = new XMLProcessingInstruction(this, target, value);
            this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          }
          return this;
        };
        XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
          var node;
          this.openCurrent();
          if (this.documentStarted) {
            throw new Error("declaration() must be the first node.");
          }
          node = new XMLDeclaration(this, version, encoding, standalone);
          this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
          this.openCurrent();
          if (root == null) {
            throw new Error("Missing root node name.");
          }
          if (this.root) {
            throw new Error("dtd() must come before the root node.");
          }
          this.currentNode = new XMLDocType(this, pubID, sysID);
          this.currentNode.rootNodeName = root;
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          return this;
        };
        XMLDocumentCB2.prototype.dtdElement = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDElement(this, name, value);
          this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var node;
          this.openCurrent();
          node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.entity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, false, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.pEntity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, true, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.notation = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDNotation(this, name, value);
          this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.up = function() {
          if (this.currentLevel < 0) {
            throw new Error("The document node has no parent.");
          }
          if (this.currentNode) {
            if (this.currentNode.children) {
              this.closeNode(this.currentNode);
            } else {
              this.openNode(this.currentNode);
            }
            this.currentNode = null;
          } else {
            this.closeNode(this.openTags[this.currentLevel]);
          }
          delete this.openTags[this.currentLevel];
          this.currentLevel--;
          return this;
        };
        XMLDocumentCB2.prototype.end = function() {
          while (this.currentLevel >= 0) {
            this.up();
          }
          return this.onEnd();
        };
        XMLDocumentCB2.prototype.openCurrent = function() {
          if (this.currentNode) {
            this.currentNode.children = true;
            return this.openNode(this.currentNode);
          }
        };
        XMLDocumentCB2.prototype.openNode = function(node) {
          var att, chunk, name, ref1;
          if (!node.isOpen) {
            if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
              this.root = node;
            }
            chunk = "";
            if (node.type === NodeType.Element) {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
              ref1 = node.attribs;
              for (name in ref1) {
                if (!hasProp.call(ref1, name)) continue;
                att = ref1[name];
                chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
              }
              chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
              if (node.pubID && node.sysID) {
                chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
              } else if (node.sysID) {
                chunk += ' SYSTEM "' + node.sysID + '"';
              }
              if (node.children) {
                chunk += " [";
                this.writerOptions.state = WriterState.InsideTag;
              } else {
                this.writerOptions.state = WriterState.CloseTag;
                chunk += ">";
              }
              chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.onData(chunk, this.currentLevel);
            return node.isOpen = true;
          }
        };
        XMLDocumentCB2.prototype.closeNode = function(node) {
          var chunk;
          if (!node.isClosed) {
            chunk = "";
            this.writerOptions.state = WriterState.CloseTag;
            if (node.type === NodeType.Element) {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            } else {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.writerOptions.state = WriterState.None;
            this.onData(chunk, this.currentLevel);
            return node.isClosed = true;
          }
        };
        XMLDocumentCB2.prototype.onData = function(chunk, level) {
          this.documentStarted = true;
          return this.onDataCallback(chunk, level + 1);
        };
        XMLDocumentCB2.prototype.onEnd = function() {
          this.documentCompleted = true;
          return this.onEndCallback();
        };
        XMLDocumentCB2.prototype.debugInfo = function(name) {
          if (name == null) {
            return "";
          } else {
            return "node: <" + name + ">";
          }
        };
        XMLDocumentCB2.prototype.ele = function() {
          return this.element.apply(this, arguments);
        };
        XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
          return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLDocumentCB2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLDocumentCB2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.att = function() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.a = function() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocumentCB2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocumentCB2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        return XMLDocumentCB2;
      })();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLWriterBase = require_XMLWriterBase();
      WriterState = require_WriterState();
      module2.exports = XMLStreamWriter = (function(superClass) {
        extend(XMLStreamWriter2, superClass);
        function XMLStreamWriter2(stream, options) {
          this.stream = stream;
          XMLStreamWriter2.__super__.constructor.call(this, options);
        }
        XMLStreamWriter2.prototype.endline = function(node, options, level) {
          if (node.isLastRootNode && options.state === WriterState.CloseTag) {
            return "";
          } else {
            return XMLStreamWriter2.__super__.endline.call(this, node, options, level);
          }
        };
        XMLStreamWriter2.prototype.document = function(doc, options) {
          var child, i, j, k, len, len1, ref, ref1, results;
          ref = doc.children;
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            child = ref[i];
            child.isLastRootNode = i === doc.children.length - 1;
          }
          options = this.filterOptions(options);
          ref1 = doc.children;
          results = [];
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            child = ref1[k];
            results.push(this.writeChildNode(child, options, 0));
          }
          return results;
        };
        XMLStreamWriter2.prototype.attribute = function(att, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.attribute.call(this, att, options, level));
        };
        XMLStreamWriter2.prototype.cdata = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.cdata.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.comment = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.comment.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.declaration = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.declaration.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.docType = function(node, options, level) {
          var child, j, len, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level));
          this.stream.write("<!DOCTYPE " + node.root().name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.children.length > 0) {
            this.stream.write(" [");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (j = 0, len = ref.length; j < len; j++) {
              child = ref[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write("]");
          }
          options.state = WriterState.CloseTag;
          this.stream.write(options.spaceBeforeSlash + ">");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        };
        XMLStreamWriter2.prototype.element = function(node, options, level) {
          var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level) + "<" + node.name);
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name)) continue;
            att = ref[name];
            this.attribute(att, options, level);
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
          })) {
            if (options.allowEmpty) {
              this.stream.write(">");
              options.state = WriterState.CloseTag;
              this.stream.write("</" + node.name + ">");
            } else {
              options.state = WriterState.CloseTag;
              this.stream.write(options.spaceBeforeSlash + "/>");
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
            this.stream.write(">");
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            this.stream.write(">" + this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref1 = node.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
          }
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        };
        XMLStreamWriter2.prototype.processingInstruction = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.processingInstruction.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.raw = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.raw.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.text = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.text.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdAttList = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdAttList.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdElement = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdElement.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdEntity = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdEntity.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdNotation = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdNotation.call(this, node, options, level));
        };
        return XMLStreamWriter2;
      })(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/index.js
var require_lib = __commonJS({
  "node_modules/xmlbuilder/lib/index.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
      ref = require_Utility(), assign = ref.assign, isFunction = ref.isFunction;
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDocument = require_XMLDocument();
      XMLDocumentCB = require_XMLDocumentCB();
      XMLStringWriter = require_XMLStringWriter();
      XMLStreamWriter = require_XMLStreamWriter();
      NodeType = require_NodeType();
      WriterState = require_WriterState();
      module2.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
          throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
          doc.declaration(options);
          if (options.pubID != null || options.sysID != null) {
            doc.dtd(options);
          }
        }
        return root;
      };
      module2.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
          ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
          options = {};
        }
        if (onData) {
          return new XMLDocumentCB(options, onData, onEnd);
        } else {
          return new XMLDocument(options);
        }
      };
      module2.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
      };
      module2.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
      };
      module2.exports.implementation = new XMLDOMImplementation();
      module2.exports.nodeType = NodeType;
      module2.exports.writerState = WriterState;
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/builder.js
var require_builder = __commonJS({
  "node_modules/xml2js/lib/builder.js"(exports2) {
    (function() {
      "use strict";
      var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
      builder = require_lib();
      defaults = require_defaults().defaults;
      requiresCDATA = function(entry) {
        return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
      };
      wrapCDATA = function(entry) {
        return "<![CDATA[" + escapeCDATA(entry) + "]]>";
      };
      escapeCDATA = function(entry) {
        return entry.replace("]]>", "]]]]><![CDATA[>");
      };
      exports2.Builder = (function() {
        function Builder(opts) {
          var key, ref, value;
          this.options = {};
          ref = defaults["0.2"];
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this.options[key] = value;
          }
          for (key in opts) {
            if (!hasProp.call(opts, key)) continue;
            value = opts[key];
            this.options[key] = value;
          }
        }
        Builder.prototype.buildObject = function(rootObj) {
          var attrkey, charkey, render, rootElement, rootName;
          attrkey = this.options.attrkey;
          charkey = this.options.charkey;
          if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
            rootName = Object.keys(rootObj)[0];
            rootObj = rootObj[rootName];
          } else {
            rootName = this.options.rootName;
          }
          render = /* @__PURE__ */ (function(_this) {
            return function(element, obj) {
              var attr, child, entry, index, key, value;
              if (typeof obj !== "object") {
                if (_this.options.cdata && requiresCDATA(obj)) {
                  element.raw(wrapCDATA(obj));
                } else {
                  element.txt(obj);
                }
              } else if (Array.isArray(obj)) {
                for (index in obj) {
                  if (!hasProp.call(obj, index)) continue;
                  child = obj[index];
                  for (key in child) {
                    entry = child[key];
                    element = render(element.ele(key), entry).up();
                  }
                }
              } else {
                for (key in obj) {
                  if (!hasProp.call(obj, key)) continue;
                  child = obj[key];
                  if (key === attrkey) {
                    if (typeof child === "object") {
                      for (attr in child) {
                        value = child[attr];
                        element = element.att(attr, value);
                      }
                    }
                  } else if (key === charkey) {
                    if (_this.options.cdata && requiresCDATA(child)) {
                      element = element.raw(wrapCDATA(child));
                    } else {
                      element = element.txt(child);
                    }
                  } else if (Array.isArray(child)) {
                    for (index in child) {
                      if (!hasProp.call(child, index)) continue;
                      entry = child[index];
                      if (typeof entry === "string") {
                        if (_this.options.cdata && requiresCDATA(entry)) {
                          element = element.ele(key).raw(wrapCDATA(entry)).up();
                        } else {
                          element = element.ele(key, entry).up();
                        }
                      } else {
                        element = render(element.ele(key), entry).up();
                      }
                    }
                  } else if (typeof child === "object") {
                    element = render(element.ele(key), child).up();
                  } else {
                    if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) {
                      element = element.ele(key).raw(wrapCDATA(child)).up();
                    } else {
                      if (child == null) {
                        child = "";
                      }
                      element = element.ele(key, child.toString()).up();
                    }
                  }
                }
              }
              return element;
            };
          })(this);
          rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
            headless: this.options.headless,
            allowSurrogateChars: this.options.allowSurrogateChars
          });
          return render(rootElement, rootObj).end(this.options.renderOpts);
        };
        return Builder;
      })();
    }).call(exports2);
  }
});

// node_modules/sax/lib/sax.js
var require_sax = __commonJS({
  "node_modules/sax/lib/sax.js"(exports2) {
    (function(sax) {
      sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax.SAXParser = SAXParser;
      sax.SAXStream = SAXStream;
      sax.createStream = createStream;
      sax.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.encoding = null;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.opt.maxEntityCount = parser.opt.maxEntityCount || 512;
        parser.opt.maxEntityDepth = parser.opt.maxEntityDepth || 4;
        parser.entityCount = parser.entityDepth = 0;
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        if (parser.opt.unquotedAttributeValues === void 0) {
          parser.opt.unquotedAttributeValues = !strict;
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o) {
          function F() {
          }
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o) {
          var a = [];
          for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
          return a;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
          var len = parser[buffers[i]].length;
          if (len > maxAllowed) {
            switch (buffers[i]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
      }
      function clearBuffers(parser) {
        for (var i = 0, l = buffers.length; i < l; i++) {
          parser[buffers[i]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require("stream").Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream) Stream = function() {
      };
      var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function determineBufferEncoding(data, isEnd) {
        if (data.length >= 2) {
          if (data[0] === 255 && data[1] === 254) {
            return "utf-16le";
          }
          if (data[0] === 254 && data[1] === 255) {
            return "utf-16be";
          }
        }
        if (data.length >= 3 && data[0] === 239 && data[1] === 187 && data[2] === 191) {
          return "utf8";
        }
        if (data.length >= 4) {
          if (data[0] === 60 && data[1] === 0 && data[2] === 63 && data[3] === 0) {
            return "utf-16le";
          }
          if (data[0] === 0 && data[1] === 60 && data[2] === 0 && data[3] === 63) {
            return "utf-16be";
          }
          return "utf8";
        }
        return isEnd ? "utf8" : null;
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        this._decoderBuffer = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h) {
              if (!h) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h;
                return h;
              }
              me.on(ev, h);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype._decodeBuffer = function(data, isEnd) {
        if (this._decoderBuffer) {
          data = Buffer.concat([this._decoderBuffer, data]);
          this._decoderBuffer = null;
        }
        if (!this._decoder) {
          var encoding = determineBufferEncoding(data, isEnd);
          if (!encoding) {
            this._decoderBuffer = data;
            return "";
          }
          this._parser.encoding = encoding;
          this._decoder = new TextDecoder(encoding);
        }
        return this._decoder.decode(data, { stream: !isEnd });
      };
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          data = this._decodeBuffer(data, false);
        } else if (this._decoderBuffer) {
          var remaining = this._decodeBuffer(Buffer.alloc(0), true);
          if (remaining) {
            this._parser.write(remaining);
            this.emit("data", remaining);
          }
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        if (this._decoderBuffer) {
          var finalChunk = this._decodeBuffer(Buffer.alloc(0), true);
          if (finalChunk) {
            this._parser.write(finalChunk);
            this.emit("data", finalChunk);
          }
        } else if (this._decoder) {
          var remaining = this._decoder.decode();
          if (remaining) {
            this._parser.write(remaining);
            this.emit("data", remaining);
          }
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "	";
      }
      function isQuote(c) {
        return c === '"' || c === "'";
      }
      function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
      }
      function isMatch(regex, c) {
        return regex.test(c);
      }
      function notMatch(regex, c) {
        return !isMatch(regex, c);
      }
      var S = 0;
      sax.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      };
      sax.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      };
      sax.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      };
      Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s2;
      });
      for (var s in sax.STATE) {
        sax.STATE[sax.STATE[s]] = s;
      }
      S = sax.STATE;
      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function getDeclaredEncoding(body) {
        var match = body && body.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return match ? match[2] : null;
      }
      function normalizeEncodingName(encoding) {
        if (!encoding) {
          return null;
        }
        return encoding.toLowerCase().replace(/[^a-z0-9]/g, "");
      }
      function encodingsMatch(detectedEncoding, declaredEncoding) {
        const detected = normalizeEncodingName(detectedEncoding);
        const declared = normalizeEncodingName(declaredEncoding);
        if (!detected || !declared) {
          return true;
        }
        if (declared === "utf16") {
          return detected === "utf16le" || detected === "utf16be";
        }
        return detected === declared;
      }
      function validateXmlDeclarationEncoding(parser, data) {
        if (!parser.strict || !parser.encoding || !data || data.name !== "xml") {
          return;
        }
        var declaredEncoding = getDeclaredEncoding(data.body);
        if (declaredEncoding && !encodingsMatch(parser.encoding, declaredEncoding)) {
          strictFail(
            parser,
            "XML declaration encoding " + declaredEncoding + " does not match detected stream encoding " + parser.encoding.toUpperCase()
          );
        }
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot)
          strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(
              parser,
              "Unbound namespace prefix: " + JSON.stringify(parser.tagName)
            );
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              emitNode(parser, "onopennamespace", {
                prefix: p,
                uri: tag.ns[p]
              });
            });
          }
          for (var i = 0, l = parser.attribList.length; i < l; i++) {
            var nv = parser.attribList[i];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(
                parser,
                "Unbound namespace prefix: " + JSON.stringify(prefix)
              );
              a.uri = prefix;
            }
            parser.tag.attributes[name] = a;
            emitNode(parser, "onattribute", a);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S.SCRIPT;
          } else {
            parser.state = S.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
          var close = parser.tags[t];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s2 = parser.tags.length;
        while (s2-- > t) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x2 = {};
          for (var i in tag.ns) {
            x2[i] = tag.ns[i];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              var n = tag.ns[p];
              emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
            });
          }
        }
        if (t === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity || num < 0 || num > 1114111) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser, c) {
        if (c === "<") {
          parser.state = S.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c;
          parser.state = S.TEXT;
        }
      }
      function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) {
          result = chunk.charAt(i);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i = 0;
        var c = "";
        while (true) {
          c = charAt(chunk, i++);
          parser.c = c;
          if (!c) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S.BEGIN:
              parser.state = S.BEGIN_WHITESPACE;
              if (c === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c);
              continue;
            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c);
              continue;
            case S.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i - 1;
                while (c && c !== "<" && c !== "&") {
                  c = charAt(chunk, i++);
                  if (c && parser.trackPosition) {
                    parser.position++;
                    if (c === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i - 1);
              }
              if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c === "&") {
                  parser.state = S.TEXT_ENTITY;
                } else {
                  parser.textNode += c;
                }
              }
              continue;
            case S.SCRIPT:
              if (c === "<") {
                parser.state = S.SCRIPT_ENDING;
              } else {
                parser.script += c;
              }
              continue;
            case S.SCRIPT_ENDING:
              if (c === "/") {
                parser.state = S.CLOSE_TAG;
              } else {
                parser.script += "<" + c;
                parser.state = S.SCRIPT;
              }
              continue;
            case S.OPEN_WAKA:
              if (c === "!") {
                parser.state = S.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c)) {
              } else if (isMatch(nameStart, c)) {
                parser.state = S.OPEN_TAG;
                parser.tagName = c;
              } else if (c === "/") {
                parser.state = S.CLOSE_TAG;
                parser.tagName = "";
              } else if (c === "?") {
                parser.state = S.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c = new Array(pad).join(" ") + c;
                }
                parser.textNode += "<" + c;
                parser.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (parser.sgmlDecl + c === "--") {
                parser.state = S.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
                continue;
              }
              if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                parser.state = S.DOCTYPE_DTD;
                parser.doctype += "<!" + parser.sgmlDecl + c;
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                parser.state = S.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S.TEXT;
              } else if (isQuote(c)) {
                parser.state = S.SGML_DECL_QUOTED;
                parser.sgmlDecl += c;
              } else {
                parser.sgmlDecl += c;
              }
              continue;
            case S.SGML_DECL_QUOTED:
              if (c === parser.q) {
                parser.state = S.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c;
              continue;
            case S.DOCTYPE:
              if (c === ">") {
                parser.state = S.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c;
                if (c === "[") {
                  parser.state = S.DOCTYPE_DTD;
                } else if (isQuote(c)) {
                  parser.state = S.DOCTYPE_QUOTED;
                  parser.q = c;
                }
              }
              continue;
            case S.DOCTYPE_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.q = "";
                parser.state = S.DOCTYPE;
              }
              continue;
            case S.DOCTYPE_DTD:
              if (c === "]") {
                parser.doctype += c;
                parser.state = S.DOCTYPE;
              } else if (c === "<") {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else if (isQuote(c)) {
                parser.doctype += c;
                parser.state = S.DOCTYPE_DTD_QUOTED;
                parser.q = c;
              } else {
                parser.doctype += c;
              }
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              parser.doctype += c;
              if (c === parser.q) {
                parser.state = S.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S.COMMENT:
              if (c === "-") {
                parser.state = S.COMMENT_ENDING;
              } else {
                parser.comment += c;
              }
              continue;
            case S.COMMENT_ENDING:
              if (c === "-") {
                parser.state = S.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c;
                parser.state = S.COMMENT;
              }
              continue;
            case S.COMMENT_ENDED:
              if (c !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c;
                parser.state = S.COMMENT;
              } else if (parser.doctype && parser.doctype !== true) {
                parser.state = S.DOCTYPE_DTD;
              } else {
                parser.state = S.TEXT;
              }
              continue;
            case S.CDATA:
              var starti = i - 1;
              while (c && c !== "]") {
                c = charAt(chunk, i++);
                if (c && parser.trackPosition) {
                  parser.position++;
                  if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                  } else {
                    parser.column++;
                  }
                }
              }
              parser.cdata += chunk.substring(starti, i - 1);
              if (c === "]") {
                parser.state = S.CDATA_ENDING;
              }
              continue;
            case S.CDATA_ENDING:
              if (c === "]") {
                parser.state = S.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.CDATA_ENDING_2:
              if (c === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S.TEXT;
              } else if (c === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c;
                parser.state = S.CDATA;
              }
              continue;
            case S.PROC_INST:
              if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c)) {
                parser.state = S.PROC_INST_BODY;
              } else {
                parser.procInstName += c;
              }
              continue;
            case S.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c)) {
                continue;
              } else if (c === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c;
              }
              continue;
            case S.PROC_INST_ENDING:
              if (c === ">") {
                const procInstEndData = {
                  name: parser.procInstName,
                  body: parser.procInstBody
                };
                validateXmlDeclarationEncoding(parser, procInstEndData);
                emitNode(parser, "onprocessinginstruction", procInstEndData);
                parser.procInstName = parser.procInstBody = "";
                parser.state = S.TEXT;
              } else {
                parser.procInstBody += "?" + c;
                parser.state = S.PROC_INST_BODY;
              }
              continue;
            case S.OPEN_TAG:
              if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else {
                newTag(parser);
                if (c === ">") {
                  openTag(parser);
                } else if (c === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.OPEN_TAG_SLASH:
              if (c === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(
                  parser,
                  "Forward-slash in opening tag not followed by >"
                );
                parser.state = S.ATTRIB;
              }
              continue;
            case S.ATTRIB:
              if (isWhitespace(c)) {
                continue;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (c === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c)) {
                parser.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c)) {
                parser.attribName += c;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (c === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c)) {
                  parser.attribName = c;
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.ATTRIB_VALUE:
              if (isWhitespace(c)) {
                continue;
              } else if (isQuote(c)) {
                parser.q = c;
                parser.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                if (!parser.opt.unquotedAttributeValues) {
                  error(parser, "Unquoted attribute value");
                }
                parser.state = S.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c;
              }
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (c !== parser.q) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c)) {
                parser.state = S.ATTRIB;
              } else if (c === ">") {
                openTag(parser);
              } else if (c === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c)) {
                if (c === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c;
                }
                continue;
              }
              attrib(parser);
              if (c === ">") {
                openTag(parser);
              } else {
                parser.state = S.ATTRIB;
              }
              continue;
            case S.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c)) {
                  continue;
                } else if (notMatch(nameStart, c)) {
                  if (parser.script) {
                    parser.script += "</" + c;
                    parser.state = S.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c;
                }
              } else if (c === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c)) {
                parser.tagName += c;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName + c;
                parser.tagName = "";
                parser.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c)) {
                continue;
              }
              if (c === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = "attribValue";
                  break;
              }
              if (c === ";") {
                var parsedEntity = parseEntity(parser);
                if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
                  if ((parser.entityCount += 1) > parser.opt.maxEntityCount) {
                    error(
                      parser,
                      "Parsed entity count exceeds max entity count"
                    );
                  }
                  if ((parser.entityDepth += 1) > parser.opt.maxEntityDepth) {
                    error(
                      parser,
                      "Parsed entity depth exceeds max entity depth"
                    );
                  }
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                  parser.entityDepth -= 1;
                } else {
                  parser[buffer] += parsedEntity;
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                parser.entity += c;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer] += "&" + parser.entity + c;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      if (!String.fromCodePoint) {
        ;
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(typeof exports2 === "undefined" ? exports2.sax = {} : exports2);
  }
});

// node_modules/xml2js/lib/bom.js
var require_bom = __commonJS({
  "node_modules/xml2js/lib/bom.js"(exports2) {
    (function() {
      "use strict";
      exports2.stripBOM = function(str) {
        if (str[0] === "\uFEFF") {
          return str.substring(1);
        } else {
          return str;
        }
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/processors.js
var require_processors = __commonJS({
  "node_modules/xml2js/lib/processors.js"(exports2) {
    (function() {
      "use strict";
      var prefixMatch;
      prefixMatch = new RegExp(/(?!xmlns)^.*:/);
      exports2.normalize = function(str) {
        return str.toLowerCase();
      };
      exports2.firstCharLowerCase = function(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
      };
      exports2.stripPrefix = function(str) {
        return str.replace(prefixMatch, "");
      };
      exports2.parseNumbers = function(str) {
        if (!isNaN(str)) {
          str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
        }
        return str;
      };
      exports2.parseBooleans = function(str) {
        if (/^(?:true|false)$/i.test(str)) {
          str = str.toLowerCase() === "true";
        }
        return str;
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/parser.js
var require_parser = __commonJS({
  "node_modules/xml2js/lib/parser.js"(exports2) {
    (function() {
      "use strict";
      var bom, defaults, defineProperty, events, isEmpty, processItem, processors5, sax, setImmediate, bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      }, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      sax = require_sax();
      events = require("events");
      bom = require_bom();
      processors5 = require_processors();
      setImmediate = require("timers").setImmediate;
      defaults = require_defaults().defaults;
      isEmpty = function(thing) {
        return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
      };
      processItem = function(processors6, item, key) {
        var i, len, process;
        for (i = 0, len = processors6.length; i < len; i++) {
          process = processors6[i];
          item = process(item, key);
        }
        return item;
      };
      defineProperty = function(obj, key, value) {
        var descriptor;
        descriptor = /* @__PURE__ */ Object.create(null);
        descriptor.value = value;
        descriptor.writable = true;
        descriptor.enumerable = true;
        descriptor.configurable = true;
        return Object.defineProperty(obj, key, descriptor);
      };
      exports2.Parser = (function(superClass) {
        extend(Parser, superClass);
        function Parser(opts) {
          this.parseStringPromise = bind(this.parseStringPromise, this);
          this.parseString = bind(this.parseString, this);
          this.reset = bind(this.reset, this);
          this.assignOrPush = bind(this.assignOrPush, this);
          this.processAsync = bind(this.processAsync, this);
          var key, ref, value;
          if (!(this instanceof exports2.Parser)) {
            return new exports2.Parser(opts);
          }
          this.options = {};
          ref = defaults["0.2"];
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this.options[key] = value;
          }
          for (key in opts) {
            if (!hasProp.call(opts, key)) continue;
            value = opts[key];
            this.options[key] = value;
          }
          if (this.options.xmlns) {
            this.options.xmlnskey = this.options.attrkey + "ns";
          }
          if (this.options.normalizeTags) {
            if (!this.options.tagNameProcessors) {
              this.options.tagNameProcessors = [];
            }
            this.options.tagNameProcessors.unshift(processors5.normalize);
          }
          this.reset();
        }
        Parser.prototype.processAsync = function() {
          var chunk, err;
          try {
            if (this.remaining.length <= this.options.chunkSize) {
              chunk = this.remaining;
              this.remaining = "";
              this.saxParser = this.saxParser.write(chunk);
              return this.saxParser.close();
            } else {
              chunk = this.remaining.substr(0, this.options.chunkSize);
              this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
              this.saxParser = this.saxParser.write(chunk);
              return setImmediate(this.processAsync);
            }
          } catch (error1) {
            err = error1;
            if (!this.saxParser.errThrown) {
              this.saxParser.errThrown = true;
              return this.emit(err);
            }
          }
        };
        Parser.prototype.assignOrPush = function(obj, key, newValue) {
          if (!(key in obj)) {
            if (!this.options.explicitArray) {
              return defineProperty(obj, key, newValue);
            } else {
              return defineProperty(obj, key, [newValue]);
            }
          } else {
            if (!(obj[key] instanceof Array)) {
              defineProperty(obj, key, [obj[key]]);
            }
            return obj[key].push(newValue);
          }
        };
        Parser.prototype.reset = function() {
          var attrkey, charkey, ontext, stack;
          this.removeAllListeners();
          this.saxParser = sax.parser(this.options.strict, {
            trim: false,
            normalize: false,
            xmlns: this.options.xmlns
          });
          this.saxParser.errThrown = false;
          this.saxParser.onerror = /* @__PURE__ */ (function(_this) {
            return function(error) {
              _this.saxParser.resume();
              if (!_this.saxParser.errThrown) {
                _this.saxParser.errThrown = true;
                return _this.emit("error", error);
              }
            };
          })(this);
          this.saxParser.onend = /* @__PURE__ */ (function(_this) {
            return function() {
              if (!_this.saxParser.ended) {
                _this.saxParser.ended = true;
                return _this.emit("end", _this.resultObject);
              }
            };
          })(this);
          this.saxParser.ended = false;
          this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
          this.resultObject = null;
          stack = [];
          attrkey = this.options.attrkey;
          charkey = this.options.charkey;
          this.saxParser.onopentag = /* @__PURE__ */ (function(_this) {
            return function(node) {
              var key, newValue, obj, processedKey, ref;
              obj = {};
              obj[charkey] = "";
              if (!_this.options.ignoreAttrs) {
                ref = node.attributes;
                for (key in ref) {
                  if (!hasProp.call(ref, key)) continue;
                  if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                    obj[attrkey] = {};
                  }
                  newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                  processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                  if (_this.options.mergeAttrs) {
                    _this.assignOrPush(obj, processedKey, newValue);
                  } else {
                    defineProperty(obj[attrkey], processedKey, newValue);
                  }
                }
              }
              obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
              if (_this.options.xmlns) {
                obj[_this.options.xmlnskey] = {
                  uri: node.uri,
                  local: node.local
                };
              }
              return stack.push(obj);
            };
          })(this);
          this.saxParser.onclosetag = /* @__PURE__ */ (function(_this) {
            return function() {
              var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
              obj = stack.pop();
              nodeName = obj["#name"];
              if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
                delete obj["#name"];
              }
              if (obj.cdata === true) {
                cdata = obj.cdata;
                delete obj.cdata;
              }
              s = stack[stack.length - 1];
              if (obj[charkey].match(/^\s*$/) && !cdata) {
                emptyStr = obj[charkey];
                delete obj[charkey];
              } else {
                if (_this.options.trim) {
                  obj[charkey] = obj[charkey].trim();
                }
                if (_this.options.normalize) {
                  obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
                }
                obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
                if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                  obj = obj[charkey];
                }
              }
              if (isEmpty(obj)) {
                if (typeof _this.options.emptyTag === "function") {
                  obj = _this.options.emptyTag();
                } else {
                  obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
                }
              }
              if (_this.options.validator != null) {
                xpath = "/" + (function() {
                  var i, len, results;
                  results = [];
                  for (i = 0, len = stack.length; i < len; i++) {
                    node = stack[i];
                    results.push(node["#name"]);
                  }
                  return results;
                })().concat(nodeName).join("/");
                (function() {
                  var err;
                  try {
                    return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                  } catch (error1) {
                    err = error1;
                    return _this.emit("error", err);
                  }
                })();
              }
              if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === "object") {
                if (!_this.options.preserveChildrenOrder) {
                  node = {};
                  if (_this.options.attrkey in obj) {
                    node[_this.options.attrkey] = obj[_this.options.attrkey];
                    delete obj[_this.options.attrkey];
                  }
                  if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                    node[_this.options.charkey] = obj[_this.options.charkey];
                    delete obj[_this.options.charkey];
                  }
                  if (Object.getOwnPropertyNames(obj).length > 0) {
                    node[_this.options.childkey] = obj;
                  }
                  obj = node;
                } else if (s) {
                  s[_this.options.childkey] = s[_this.options.childkey] || [];
                  objClone = {};
                  for (key in obj) {
                    if (!hasProp.call(obj, key)) continue;
                    defineProperty(objClone, key, obj[key]);
                  }
                  s[_this.options.childkey].push(objClone);
                  delete obj["#name"];
                  if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                    obj = obj[charkey];
                  }
                }
              }
              if (stack.length > 0) {
                return _this.assignOrPush(s, nodeName, obj);
              } else {
                if (_this.options.explicitRoot) {
                  old = obj;
                  obj = {};
                  defineProperty(obj, nodeName, old);
                }
                _this.resultObject = obj;
                _this.saxParser.ended = true;
                return _this.emit("end", _this.resultObject);
              }
            };
          })(this);
          ontext = /* @__PURE__ */ (function(_this) {
            return function(text) {
              var charChild, s;
              s = stack[stack.length - 1];
              if (s) {
                s[charkey] += text;
                if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
                  s[_this.options.childkey] = s[_this.options.childkey] || [];
                  charChild = {
                    "#name": "__text__"
                  };
                  charChild[charkey] = text;
                  if (_this.options.normalize) {
                    charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                  }
                  s[_this.options.childkey].push(charChild);
                }
                return s;
              }
            };
          })(this);
          this.saxParser.ontext = ontext;
          return this.saxParser.oncdata = /* @__PURE__ */ (function(_this) {
            return function(text) {
              var s;
              s = ontext(text);
              if (s) {
                return s.cdata = true;
              }
            };
          })(this);
        };
        Parser.prototype.parseString = function(str, cb) {
          var err;
          if (cb != null && typeof cb === "function") {
            this.on("end", function(result) {
              this.reset();
              return cb(null, result);
            });
            this.on("error", function(err2) {
              this.reset();
              return cb(err2);
            });
          }
          try {
            str = str.toString();
            if (str.trim() === "") {
              this.emit("end", null);
              return true;
            }
            str = bom.stripBOM(str);
            if (this.options.async) {
              this.remaining = str;
              setImmediate(this.processAsync);
              return this.saxParser;
            }
            return this.saxParser.write(str).close();
          } catch (error1) {
            err = error1;
            if (!(this.saxParser.errThrown || this.saxParser.ended)) {
              this.emit("error", err);
              return this.saxParser.errThrown = true;
            } else if (this.saxParser.ended) {
              throw err;
            }
          }
        };
        Parser.prototype.parseStringPromise = function(str) {
          return new Promise(/* @__PURE__ */ (function(_this) {
            return function(resolve, reject) {
              return _this.parseString(str, function(err, value) {
                if (err) {
                  return reject(err);
                } else {
                  return resolve(value);
                }
              });
            };
          })(this));
        };
        return Parser;
      })(events);
      exports2.parseString = function(str, a, b) {
        var cb, options, parser;
        if (b != null) {
          if (typeof b === "function") {
            cb = b;
          }
          if (typeof a === "object") {
            options = a;
          }
        } else {
          if (typeof a === "function") {
            cb = a;
          }
          options = {};
        }
        parser = new exports2.Parser(options);
        return parser.parseString(str, cb);
      };
      exports2.parseStringPromise = function(str, a) {
        var options, parser;
        if (typeof a === "object") {
          options = a;
        }
        parser = new exports2.Parser(options);
        return parser.parseStringPromise(str);
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/xml2js.js
var require_xml2js = __commonJS({
  "node_modules/xml2js/lib/xml2js.js"(exports2) {
    (function() {
      "use strict";
      var builder, defaults, parser, processors5, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      defaults = require_defaults();
      builder = require_builder();
      parser = require_parser();
      processors5 = require_processors();
      exports2.defaults = defaults.defaults;
      exports2.processors = processors5;
      exports2.ValidationError = (function(superClass) {
        extend(ValidationError, superClass);
        function ValidationError(message) {
          this.message = message;
        }
        return ValidationError;
      })(Error);
      exports2.Builder = builder.Builder;
      exports2.Parser = parser.Parser;
      exports2.parseString = parser.parseString;
      exports2.parseStringPromise = parser.parseStringPromise;
    }).call(exports2);
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode13 = __toESM(require("vscode"));

// src/cklbEditorProvider.ts
var vscode = __toESM(require("vscode"));
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

// src/webviewContent.ts
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function sevCat(s) {
  return s === "high" ? "I" : s === "medium" ? "II" : "III";
}
function computeStats(rules) {
  const s = { total: rules.length, not_reviewed: 0, open: 0, not_a_finding: 0, not_applicable: 0, high: 0, medium: 0, low: 0 };
  for (const r of rules) {
    s[r.status]++;
    s[r.severity]++;
  }
  return s;
}
function safeJson(obj) {
  return JSON.stringify(obj).replace(/<\//g, "<\\/").replace(/<!--/g, "<\\!--");
}
function buildWebviewHtml(data) {
  const rulesJson = safeJson(
    Object.fromEntries(
      data.stigs.flatMap((st) => st.rules.map((r) => [r.uuid, r]))
    )
  );
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${esc(data.title)}</title>
<style>${CSS}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1>${esc(data.title)}</h1>
    <span class="chip chip-accent">CKLB v${esc(data.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${targetHtml(data.target_data)}
</header>

${data.stigs.map((st, i) => stigSection(st, i)).join("\n")}

<!-- \u2550\u2550\u2550 TARGET EDIT MODAL \u2550\u2550\u2550 -->
<div id="targetBackdrop" class="backdrop hidden"></div>
<div id="targetModal" class="modal hidden">
  <h2 class="modal-title">Edit Target Data</h2>
  <div class="modal-body">
    <label>Host Name<input type="text" id="td_host_name" class="flt" /></label>
    <label>IP Address<input type="text" id="td_ip_address" class="flt" /></label>
    <label>FQDN<input type="text" id="td_fqdn" class="flt" /></label>
    <label>MAC Address<input type="text" id="td_mac_address" class="flt" /></label>
    <label>Target Type
      <select id="td_target_type" class="flt">
        <option value="Non-Computing">Non-Computing</option>
        <option value="Computing">Computing</option>
      </select>
    </label>
    <label>Role
      <select id="td_role" class="flt">
        <option value="None">None</option>
        <option value="Workstation">Workstation</option>
        <option value="Member Server">Member Server</option>
        <option value="Domain Controller">Domain Controller</option>
      </select>
    </label>
    <label>Technology Area<input type="text" id="td_technology_area" class="flt" /></label>
    <label class="label-row"><input type="checkbox" id="td_is_web_database" /> Web / Database</label>
    <label>Web / DB Site<input type="text" id="td_web_db_site" class="flt" /></label>
    <label>Web / DB Instance<input type="text" id="td_web_db_instance" class="flt" /></label>
    <label>Comments<textarea id="td_comments" class="d-ta" rows="3"></textarea></label>
  </div>
  <div class="modal-actions">
    <button class="btn-save" id="targetSave">Save</button>
    <button class="btn-cancel" id="targetCancel">Cancel</button>
  </div>
</div>

<!-- \u2550\u2550\u2550 DETAIL SLIDE-OVER \u2550\u2550\u2550 -->
<div id="detailBackdrop" class="backdrop hidden"></div>
<aside id="detailPanel" class="detail hidden">
  <div class="detail-hdr">
    <div class="detail-nav-btns">
      <button id="detailPrev" class="btn-nav" title="Previous rule ([ key)">&#8592;</button>
      <button id="detailNext" class="btn-nav" title="Next rule (] key)">&#8594;</button>
    </div>
    <button id="detailClose" class="detail-close" title="Close">&times;</button>
  </div>
  <div id="detailBody"></div>
</aside>

<script>
const vscode = acquireVsCodeApi();
const RULES = ${rulesJson};
const TARGET = ${safeJson(data.target_data)};
${SCRIPT}
</script>
</body>
</html>`;
}
function targetHtml(td) {
  const parts = [
    td.host_name && `Host: ${td.host_name}`,
    td.ip_address && `IP: ${td.ip_address}`,
    td.fqdn && `FQDN: ${td.fqdn}`,
    td.mac_address && `MAC: ${td.mac_address}`,
    td.target_type && `Type: ${td.target_type}`,
    td.role && td.role !== "None" && `Role: ${td.role}`
  ].filter(Boolean);
  if (!parts.length) return '<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>';
  return `<div class="target-row">${parts.map((p) => `<span class="chip">${esc(p)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`;
}
function stigSection(stig, idx) {
  const st = computeStats(stig.rules);
  const pct = (n) => st.total ? Math.round(n / st.total * 100) : 0;
  return `
<section class="stig" data-idx="${idx}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${esc(stig.display_name || stig.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${esc(stig.release_info)}</span>
      <span class="chip">Version ${esc(stig.version)}</span>
      <span class="chip">${stig.size} rules</span>
    </div>
  </div>

  <!-- stat cards -->
  <div class="cards">
    <div class="card card-total"><div class="card-n">${st.total}</div><div class="card-l">Total</div></div>
    <div class="card card-open"><div class="card-n">${st.open}</div><div class="card-l">Open</div></div>
    <div class="card card-naf"><div class="card-n">${st.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
    <div class="card card-nr"><div class="card-n">${st.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
    <div class="card card-na"><div class="card-n">${st.not_applicable}</div><div class="card-l">Not Applicable</div></div>
  </div>

  <!-- severity bar -->
  <div class="sev-bar">
    <div class="sev-seg sev-high" style="width:${pct(st.high)}%"><span>CAT I \xB7 ${st.high}</span></div>
    <div class="sev-seg sev-med"  style="width:${pct(st.medium)}%"><span>CAT II \xB7 ${st.medium}</span></div>
    <div class="sev-seg sev-low"  style="width:${pct(st.low)}%"><span>CAT III \xB7 ${st.low}</span></div>
  </div>

  <!-- completion bar -->
  <div class="completion">
    <div class="completion-label">Completion: ${pct(st.not_a_finding + st.not_applicable)}%</div>
    <div class="completion-track">
      <div class="completion-fill completion-naf" style="width:${pct(st.not_a_finding)}%"></div>
      <div class="completion-fill completion-na"  style="width:${pct(st.not_applicable)}%"></div>
    </div>
  </div>

  <!-- bulk action bar -->
  <div class="bulk-bar hidden" data-stig="${stig.uuid}">
    <span class="bulk-count">0 selected</span>
    <select class="bulk-status">
      <option value="not_reviewed">Not Reviewed</option>
      <option value="open">Open</option>
      <option value="not_a_finding">Not a Finding</option>
      <option value="not_applicable">Not Applicable</option>
    </select>
    <input type="text" class="bulk-comment" placeholder="Comment (optional)\u2026" />
    <button class="btn-bulk-apply">Apply</button>
    <button class="btn-bulk-clear">Clear</button>
  </div>

  <!-- filters -->
  <div class="filters" data-stig="${stig.uuid}">
    <select class="flt" data-kind="status">
      <option value="">All Statuses</option>
      <option value="not_reviewed">Not Reviewed (${st.not_reviewed})</option>
      <option value="open">Open (${st.open})</option>
      <option value="not_a_finding">Not a Finding (${st.not_a_finding})</option>
      <option value="not_applicable">Not Applicable (${st.not_applicable})</option>
    </select>
    <select class="flt" data-kind="severity">
      <option value="">All Severities</option>
      <option value="high">CAT I \u2013 High (${st.high})</option>
      <option value="medium">CAT II \u2013 Medium (${st.medium})</option>
      <option value="low">CAT III \u2013 Low (${st.low})</option>
    </select>
    <input type="text" class="flt flt-search" data-kind="search" placeholder="Search rules\u2026" />
  </div>

  <!-- table -->
  <div class="tbl-wrap">
    <table class="tbl">
      <thead><tr>
        <th style="width:36px"><input type="checkbox" class="select-all" data-stig="${stig.uuid}" title="Select all" /></th>
        <th style="width:72px">CAT</th>
        <th style="width:90px">Vuln ID</th>
        <th style="width:130px">Rule Ver</th>
        <th>Title</th>
        <th style="width:120px">Status</th>
      </tr></thead>
      <tbody>
        ${stig.rules.map((r) => ruleRow(r, stig.uuid)).join("\n")}
      </tbody>
    </table>
  </div>
</section>`;
}
function ruleRow(r, stigUuid) {
  const search = `${r.group_id} ${r.rule_version} ${r.rule_title} ${r.group_title}`.toLowerCase();
  return `<tr class="row" data-uuid="${r.uuid}" data-stig="${stigUuid}"
    data-sev="${r.severity}" data-status="${r.status}" data-search="${esc(search)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${r.uuid}" data-stig="${stigUuid}" /></td>
  <td><span class="pill sev-${r.severity}">CAT ${sevCat(r.severity)}</span></td>
  <td><code>${esc(r.group_id)}</code></td>
  <td><code>${esc(r.rule_version)}</code></td>
  <td class="td-title">${esc(r.rule_title)}</td>
  <td><select class="inline-status st-${r.status}" data-uuid="${r.uuid}" data-stig="${stigUuid}">
    <option value="not_reviewed" ${r.status === "not_reviewed" ? "selected" : ""}>Not Reviewed</option>
    <option value="open" ${r.status === "open" ? "selected" : ""}>Open</option>
    <option value="not_a_finding" ${r.status === "not_a_finding" ? "selected" : ""}>Not a Finding</option>
    <option value="not_applicable" ${r.status === "not_applicable" ? "selected" : ""}>Not Applicable</option>
  </select></td>
</tr>`;
}
var SCRIPT = `
// \u2500\u2500 Stats refresh \u2500\u2500
function refreshStats(stigId) {
  const section = document.querySelector('tr.row[data-stig="'+stigId+'"]')?.closest('.stig');
  if (!section) return;
  const rows = section.querySelectorAll('tr.row[data-stig="'+stigId+'"]');
  const total = rows.length;
  let open=0, naf=0, nr=0, na=0;
  rows.forEach(r => {
    const s = r.dataset.status;
    if (s==='open') open++;
    else if (s==='not_a_finding') naf++;
    else if (s==='not_reviewed') nr++;
    else if (s==='not_applicable') na++;
  });
  const pct = (n) => total ? Math.round((n/total)*100) : 0;

  const cards = section.querySelectorAll('.card');
  cards.forEach(c => {
    const n = c.querySelector('.card-n');
    if (!n) return;
    if (c.classList.contains('card-open')) n.textContent = open;
    else if (c.classList.contains('card-naf')) n.textContent = naf;
    else if (c.classList.contains('card-nr')) n.textContent = nr;
    else if (c.classList.contains('card-na')) n.textContent = na;
  });

  const compLabel = section.querySelector('.completion-label');
  const compNaf = section.querySelector('.completion-naf');
  const compNa = section.querySelector('.completion-na');
  if (compLabel) compLabel.textContent = 'Completion: '+pct(naf+na)+'%';
  if (compNaf) compNaf.style.width = pct(naf)+'%';
  if (compNa) compNa.style.width = pct(na)+'%';

  const statusFlt = section.querySelector('[data-kind="status"]');
  if (statusFlt) {
    statusFlt.options[1].textContent = 'Not Reviewed ('+nr+')';
    statusFlt.options[2].textContent = 'Open ('+open+')';
    statusFlt.options[3].textContent = 'Not a Finding ('+naf+')';
    statusFlt.options[4].textContent = 'Not Applicable ('+na+')';
  }
}

// \u2500\u2500 Filtering \u2500\u2500
document.querySelectorAll('.filters').forEach(bar => {
  const stigId = bar.dataset.stig;
  bar.querySelectorAll('.flt').forEach(el => {
    el.addEventListener(el.tagName === 'INPUT' ? 'input' : 'change', () => filter(stigId));
  });
});

function filter(stigId) {
  const bar = document.querySelector('.filters[data-stig="'+stigId+'"]');
  const sv = bar.querySelector('[data-kind="status"]').value;
  const se = bar.querySelector('[data-kind="severity"]').value;
  const sq = bar.querySelector('[data-kind="search"]').value.toLowerCase();
  document.querySelectorAll('tr.row[data-stig="'+stigId+'"]').forEach(r => {
    let ok = true;
    if (sv && r.dataset.status !== sv) ok = false;
    if (se && r.dataset.sev !== se) ok = false;
    if (sq && !r.dataset.search.includes(sq)) ok = false;
    r.style.display = ok ? '' : 'none';
  });
}

// \u2500\u2500 Detail panel \u2500\u2500
const panel = document.getElementById('detailPanel');
const body  = document.getElementById('detailBody');
const drop  = document.getElementById('detailBackdrop');

let currentDetailUuid   = null;
let currentDetailStigId = null;

function hide() { panel.classList.add('hidden'); drop.classList.add('hidden'); }
document.getElementById('detailClose').onclick = hide;
drop.onclick = hide;
document.getElementById('detailPrev').onclick = () => navigateDetail(-1);
document.getElementById('detailNext').onclick = () => navigateDetail(1);

function updatePanelBorder(status) {
  const colors = { open:'#e74c3c', not_a_finding:'#27ae60', not_applicable:'#7f8c8d', not_reviewed:'#34495e' };
  panel.style.borderLeftColor = colors[status] || '#3c3c3c';
}

function autoGrow(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function getVisibleRows(stigId) {
  return [...document.querySelectorAll('tr.row[data-stig="'+stigId+'"]')]
    .filter(r => r.style.display !== 'none');
}

function navigateDetail(dir) {
  if (!currentDetailUuid || !currentDetailStigId) return;
  const saveBtn = document.getElementById('dSave');
  if (saveBtn) saveBtn.click();
  const rows = getVisibleRows(currentDetailStigId);
  if (!rows.length) return;
  const idx = rows.findIndex(r => r.dataset.uuid === currentDetailUuid);
  const next = dir === 1
    ? (idx < rows.length - 1 ? rows[idx + 1] : rows[0])
    : (idx > 0 ? rows[idx - 1] : rows[rows.length - 1]);
  if (next) {
    const r = RULES[next.dataset.uuid];
    if (r) {
      if (focusedRow) focusedRow.classList.remove('row-focus');
      next.classList.add('row-focus');
      next.scrollIntoView({ block: 'nearest' });
      focusedRow = next;
      renderDetail(r, next.dataset.stig);
    }
  }
}

document.querySelectorAll('tr.row').forEach(tr => {
  tr.addEventListener('click', () => {
    const r = RULES[tr.dataset.uuid];
    if (!r) return;
    renderDetail(r, tr.dataset.stig);
    panel.classList.remove('hidden');
    drop.classList.remove('hidden');
  });
});

const SL = { not_reviewed:'Not Reviewed', open:'Open', not_a_finding:'Not a Finding', not_applicable:'Not Applicable' };

function renderDetail(r, stigUuid) {
  currentDetailUuid   = r.uuid;
  currentDetailStigId = stigUuid;
  updatePanelBorder(r.status);
  const cat = r.severity==='high'?'I':r.severity==='medium'?'II':'III';
  body.innerHTML = \`
    <div class="d-top">
      <span class="pill sev-\${r.severity}">CAT \${cat}</span>
      <code>\${h(r.group_id)}</code> \xB7 <code>\${h(r.rule_version)}</code>
    </div>
    <h2 class="d-title">\${h(r.rule_title)}</h2>

    <div class="d-status-row">
      <label>Status</label>
      <select id="dSt">
        <option value="not_reviewed"   \${r.status==='not_reviewed'?'selected':''}>Not Reviewed</option>
        <option value="open"           \${r.status==='open'?'selected':''}>Open</option>
        <option value="not_a_finding"  \${r.status==='not_a_finding'?'selected':''}>Not a Finding</option>
        <option value="not_applicable" \${r.status==='not_applicable'?'selected':''}>Not Applicable</option>
      </select>
    </div>

    <div class="d-meta">
      <span><b>Rule ID:</b> \${h(r.rule_id)}</span>
      <span><b>SRG:</b> \${h(r.srg_id||'\u2014')}</span>
      <span><b>Weight:</b> \${h(r.weight)}</span>
      <span><b>Class:</b> \${h(r.classification)}</span>
      \${r.ccis?.length ? '<span><b>CCIs:</b> '+r.ccis.map(c=>'<code>'+h(c)+'</code>').join(' ')+'</span>' : ''}
    </div>

    <details class="d-sec" open>
      <summary class="d-sum">Discussion <button class="btn-copy" data-copy="dDisc" title="Copy to clipboard">Copy</button></summary>
      <div class="d-text" id="dDisc">\${fmt(r.discussion)}</div>
    </details>
    <details class="d-sec" open>
      <summary class="d-sum">Check Content <button class="btn-copy" data-copy="dCheck" title="Copy to clipboard">Copy</button></summary>
      <div class="d-text" id="dCheck">\${fmt(r.check_content)}</div>
    </details>
    <details class="d-sec">
      <summary class="d-sum">Fix Text <button class="btn-copy" data-copy="dFix" title="Copy to clipboard">Copy</button></summary>
      <div class="d-text" id="dFix">\${fmt(r.fix_text)}</div>
    </details>

    <details class="d-sec" open>
      <summary class="d-sum">Finding Details</summary>
      <div class="d-tpl-row">
        <select id="dTpl" class="flt d-tpl-select">
          <option value="">Insert template\u2026</option>
          <option value="Verified via [method]. [setting/service] is configured per STIG requirements.">Compliant (verified)</option>
          <option value="N/A \u2014 This system does not [use/have condition]. [Justification].">Not Applicable</option>
          <option value="Open \u2014 [setting] is not configured as required.\\nCurrent value: [value]\\nExpected: [expected value]">Open (with values)</option>
          <option value="Verified via screenshot. Evidence attached.">Screenshot evidence</option>
          <option value="Confirmed by [role] on [date]. [Details].">Confirmed by personnel</option>
          <option value="Inherited control \u2014 managed at [platform/provider] level. See [reference].">Inherited control</option>
        </select>
      </div>
      <textarea id="dFd" class="d-ta d-ta-grow" placeholder="Enter finding details\u2026">\${h(r.finding_details||'')}</textarea>
      <div class="d-char-count" id="dFdCount">\${(r.finding_details||'').length} characters</div>
    </details>
    <details class="d-sec">
      <summary class="d-sum">Comments</summary>
      <textarea id="dCm" class="d-ta d-ta-grow" placeholder="Enter comments\u2026">\${h(r.comments||'')}</textarea>
    </details>

    <div class="d-save-row">
      <button class="btn-save" id="dSave">Save Changes</button>
      <span class="d-save-hint">Ctrl+S</span>
    </div>
  \`;

  // Copy buttons
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      const el = document.getElementById(btn.dataset.copy);
      if (el && navigator.clipboard) {
        navigator.clipboard.writeText(el.innerText).then(() => {
          const orig = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = orig; }, 1500);
        }).catch(() => {});
      }
    });
  });

  // Template insert
  document.getElementById('dTpl').onchange = function() {
    if (this.value) {
      const ta = document.getElementById('dFd');
      const pos = ta.selectionStart || ta.value.length;
      ta.value = ta.value.substring(0, pos) + this.value + ta.value.substring(pos);
      ta.focus();
      this.selectedIndex = 0;
      autoGrow(ta);
      document.getElementById('dFdCount').textContent = ta.value.length + ' characters';
    }
  };

  // Auto-grow + character counter
  const taFd    = document.getElementById('dFd');
  const taCm    = document.getElementById('dCm');
  const fdCount = document.getElementById('dFdCount');
  taFd.addEventListener('input', () => { autoGrow(taFd); fdCount.textContent = taFd.value.length + ' characters'; });
  taCm.addEventListener('input', () => autoGrow(taCm));
  setTimeout(() => { autoGrow(taFd); autoGrow(taCm); }, 0);

  // Auto-save helper for this rule
  function doSave() {
    const ns = document.getElementById('dSt').value;
    const fd = document.getElementById('dFd').value;
    const cm = document.getElementById('dCm').value;
    vscode.postMessage({ type:'saveRule', ruleUuid:r.uuid, stigUuid, status:ns, finding_details:fd, comments:cm });
    const row = document.querySelector('tr.row[data-uuid="'+r.uuid+'"]');
    if (row) {
      row.dataset.status = ns;
      const sel = row.querySelector('.inline-status');
      if (sel) { sel.value = ns; sel.className = 'inline-status st-'+ns; }
    }
    RULES[r.uuid].status = ns;
    RULES[r.uuid].finding_details = fd;
    RULES[r.uuid].comments = cm;
    refreshStats(stigUuid);
    updatePanelBorder(ns);
    const btn = document.getElementById('dSave');
    if (btn) { btn.textContent = 'Saved'; btn.classList.add('btn-saved'); setTimeout(() => { btn.textContent = 'Save Changes'; btn.classList.remove('btn-saved'); }, 1500); }
  }

  document.getElementById('dSt').onchange = doSave;
  document.getElementById('dFd').onblur = doSave;
  document.getElementById('dCm').onblur = doSave;
  document.getElementById('dSave').onclick = doSave;
}

function h(s){if(!s)return'';const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

function linkify(s) {
  return s.replace(/(https?:\\/\\/[^\\s<>"']+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="d-link">$1</a>');
}

function fmt(s) {
  if (!s) return '<span class="muted">None</span>';
  // Automated import blocks get a distinct callout style
  const impMatch = s.match(/^\\[(AUTO-SCAN|SARIF IMPORT|AUDIT IMPORT)\\]/);
  if (impMatch) {
    const rest = s.substring(impMatch[0].length).replace(/^[\\r\\n]+/, '');
    return '<div class="d-imported"><span class="d-imported-badge">'+h(impMatch[0])+'</span>'
      +'<pre class="d-imported-pre">'+linkify(h(rest))+'</pre></div>';
  }
  const lines = s.split(/\\r?\\n|\\\\n/);
  let html = '';
  let inOl  = false;
  for (const line of lines) {
    if (!line.trim()) {
      if (inOl) { html += '</ol>'; inOl = false; }
      html += '<div class="d-blank"></div>';
      continue;
    }
    // Numbered list: "1. " or "1) "
    if (/^\\d+[.)]+\\s/.test(line)) {
      if (!inOl) { html += '<ol class="d-ol">'; inOl = true; }
      html += '<li>'+linkify(h(line.replace(/^\\d+[.)]+\\s+/, '')))+'</li>';
      continue;
    }
    if (inOl) { html += '</ol>'; inOl = false; }
    // Command / code-like lines: start with $, #, > or 4-space indent
    if (/^[$#>]/.test(line.trim()) || /^    /.test(line)) {
      html += '<code class="d-cmd">'+h(line)+'</code>';
      continue;
    }
    html += '<p class="d-p">'+linkify(h(line))+'</p>';
  }
  if (inOl) html += '</ol>';
  return html || '<span class="muted">None</span>';
}

// \u2500\u2500 Inline status editing \u2500\u2500
document.querySelectorAll('.inline-status').forEach(sel => {
  sel.addEventListener('change', (e) => {
    e.stopPropagation();
    const uuid = sel.dataset.uuid;
    const stigUuid = sel.dataset.stig;
    const ns = sel.value;
    const row = sel.closest('tr');
    // Update DOM
    row.dataset.status = ns;
    sel.className = 'inline-status st-' + ns;
    // Update local data
    RULES[uuid].status = ns;
    // Auto-save
    vscode.postMessage({ type: 'saveRule', ruleUuid: uuid, stigUuid: stigUuid, status: ns, finding_details: RULES[uuid].finding_details || '', comments: RULES[uuid].comments || '' });
    refreshStats(stigUuid);
  });
  sel.addEventListener('click', (e) => e.stopPropagation());
});

// \u2500\u2500 Undo/redo sync \u2014 update webview when document changes externally \u2500\u2500
window.addEventListener('message', (event) => {
  const msg = event.data;
  if (msg.type === 'dataUpdate' && msg.rules) {
    // Update local RULES map
    for (const [uuid, rule] of Object.entries(msg.rules)) {
      RULES[uuid] = rule;
    }
    // Update all table rows
    const updatedStigs = new Set();
    document.querySelectorAll('tr.row').forEach(row => {
      const r = msg.rules[row.dataset.uuid];
      if (!r) return;
      row.dataset.status = r.status;
      const sel = row.querySelector('.inline-status');
      if (sel) { sel.value = r.status; sel.className = 'inline-status st-' + r.status; }
      updatedStigs.add(row.dataset.stig);
    });
    updatedStigs.forEach(id => refreshStats(id));
  }
});

// \u2500\u2500 Export buttons \u2500\u2500
document.getElementById('btnExportCsv').onclick = () => vscode.postMessage({ type: 'exportCsv' });
document.getElementById('btnExportCkl').onclick = () => vscode.postMessage({ type: 'exportCkl' });
document.getElementById('btnExportPoam').onclick = () => vscode.postMessage({ type: 'exportPoam' });

// \u2500\u2500 Target data editing \u2500\u2500
const targetModal    = document.getElementById('targetModal');
const targetBackdrop = document.getElementById('targetBackdrop');
const targetSaveBtn  = document.getElementById('targetSave');
const targetCancelBtn = document.getElementById('targetCancel');
const editTargetBtn  = document.getElementById('editTargetBtn');

function openTargetModal() {
  document.getElementById('td_host_name').value      = TARGET.host_name || '';
  document.getElementById('td_ip_address').value      = TARGET.ip_address || '';
  document.getElementById('td_fqdn').value            = TARGET.fqdn || '';
  document.getElementById('td_mac_address').value     = TARGET.mac_address || '';
  document.getElementById('td_target_type').value     = TARGET.target_type || 'Non-Computing';
  document.getElementById('td_role').value            = TARGET.role || 'None';
  document.getElementById('td_technology_area').value = TARGET.technology_area || '';
  document.getElementById('td_is_web_database').checked = !!TARGET.is_web_database;
  document.getElementById('td_web_db_site').value     = TARGET.web_db_site || '';
  document.getElementById('td_web_db_instance').value = TARGET.web_db_instance || '';
  document.getElementById('td_comments').value        = TARGET.comments || '';
  targetModal.classList.remove('hidden');
  targetBackdrop.classList.remove('hidden');
}

function closeTargetModal() {
  targetModal.classList.add('hidden');
  targetBackdrop.classList.add('hidden');
}

if (editTargetBtn) editTargetBtn.onclick = openTargetModal;
targetBackdrop.onclick = closeTargetModal;
targetCancelBtn.onclick = closeTargetModal;
targetSaveBtn.onclick = () => {
  const td = {
    host_name:      document.getElementById('td_host_name').value,
    ip_address:     document.getElementById('td_ip_address').value,
    fqdn:           document.getElementById('td_fqdn').value,
    mac_address:    document.getElementById('td_mac_address').value,
    target_type:    document.getElementById('td_target_type').value,
    role:           document.getElementById('td_role').value,
    technology_area:document.getElementById('td_technology_area').value,
    is_web_database:document.getElementById('td_is_web_database').checked,
    web_db_site:    document.getElementById('td_web_db_site').value,
    web_db_instance:document.getElementById('td_web_db_instance').value,
    comments:       document.getElementById('td_comments').value,
  };
  Object.assign(TARGET, td);
  vscode.postMessage({ type: 'saveTargetData', targetData: td });
  closeTargetModal();
};

// \u2500\u2500 Checkbox / bulk selection \u2500\u2500
function updateBulkBar(stigId) {
  const cbs = document.querySelectorAll('.row-cb[data-stig="'+stigId+'"]');
  const checked = [...cbs].filter(c => c.checked);
  const bar = document.querySelector('.bulk-bar[data-stig="'+stigId+'"]');
  if (!bar) return;
  if (checked.length > 0) {
    bar.classList.remove('hidden');
    bar.querySelector('.bulk-count').textContent = checked.length + ' selected';
  } else {
    bar.classList.add('hidden');
  }
}

// Row checkbox change
document.querySelectorAll('.row-cb').forEach(cb => {
  cb.addEventListener('change', (e) => {
    e.stopPropagation();
    updateBulkBar(cb.dataset.stig);
    // Sync select-all state
    const stigId = cb.dataset.stig;
    const all = document.querySelectorAll('.row-cb[data-stig="'+stigId+'"]');
    const allChecked = [...all].every(c => c.checked);
    const sa = document.querySelector('.select-all[data-stig="'+stigId+'"]');
    if (sa) sa.checked = allChecked;
  });
  cb.addEventListener('click', (e) => e.stopPropagation());
});

// Select-all checkbox
document.querySelectorAll('.select-all').forEach(sa => {
  sa.addEventListener('change', () => {
    const stigId = sa.dataset.stig;
    const val = sa.checked;
    // Only toggle visible (non-filtered) rows
    document.querySelectorAll('tr.row[data-stig="'+stigId+'"]').forEach(row => {
      if (row.style.display !== 'none') {
        row.querySelector('.row-cb').checked = val;
      }
    });
    updateBulkBar(stigId);
  });
});

// Bulk apply
document.querySelectorAll('.btn-bulk-apply').forEach(btn => {
  btn.addEventListener('click', () => {
    const bar = btn.closest('.bulk-bar');
    const stigId = bar.dataset.stig;
    const status = bar.querySelector('.bulk-status').value;
    const comments = bar.querySelector('.bulk-comment').value;
    const cbs = document.querySelectorAll('.row-cb[data-stig="'+stigId+'"]:checked');
    const uuids = [...cbs].map(c => c.dataset.uuid);
    if (!uuids.length) return;

    vscode.postMessage({ type: 'bulkSaveRules', ruleUuids: uuids, stigUuid: stigId, status, comments });

    // Update table rows and local data
    uuids.forEach(uuid => {
      const row = document.querySelector('tr.row[data-uuid="'+uuid+'"]');
      if (row) {
        const old = row.dataset.status;
        row.dataset.status = status;
        const pill = row.querySelectorAll('.pill')[1];
        if (pill) { pill.className = 'pill st-'+status; pill.textContent = SL[status]||status; }
      }
      if (RULES[uuid]) {
        RULES[uuid].status = status;
        if (comments) RULES[uuid].comments = comments;
      }
    });

    refreshStats(stigId);

    // Clear selection
    cbs.forEach(c => { c.checked = false; });
    const sa = document.querySelector('.select-all[data-stig="'+stigId+'"]');
    if (sa) sa.checked = false;
    bar.querySelector('.bulk-comment').value = '';
    updateBulkBar(stigId);
  });
});

// Bulk clear
document.querySelectorAll('.btn-bulk-clear').forEach(btn => {
  btn.addEventListener('click', () => {
    const bar = btn.closest('.bulk-bar');
    const stigId = bar.dataset.stig;
    document.querySelectorAll('.row-cb[data-stig="'+stigId+'"]').forEach(c => { c.checked = false; });
    const sa = document.querySelector('.select-all[data-stig="'+stigId+'"]');
    if (sa) sa.checked = false;
    updateBulkBar(stigId);
  });
});

// \u2500\u2500 Keyboard navigation \u2500\u2500
let focusedRow = null;

document.addEventListener('keydown', (e) => {
  // Escape closes detail panel
  if (e.key === 'Escape') {
    hide();
    return;
  }

  const tag = document.activeElement?.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  // Ctrl/Cmd+S \u2014 save from inside the panel even while typing
  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    const saveBtn = document.getElementById('dSave');
    if (saveBtn && !panel.classList.contains('hidden')) {
      e.preventDefault();
      saveBtn.click();
    }
    return;
  }

  // Don't capture remaining keys when typing in inputs/textareas/selects
  if (inInput) return;

  // [ / ] navigate between rules in the detail panel
  if (e.key === '[' || e.key === ']') {
    if (!panel.classList.contains('hidden')) {
      e.preventDefault();
      navigateDetail(e.key === ']' ? 1 : -1);
    }
    return;
  }

  const rows = [...document.querySelectorAll('tr.row')].filter(r => r.style.display !== 'none');
  if (!rows.length) return;

  if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'j' || e.key === 'k') {
    e.preventDefault();
    const idx = focusedRow ? rows.indexOf(focusedRow) : -1;
    let next;
    if (e.key === 'ArrowDown' || e.key === 'j') {
      next = idx < rows.length - 1 ? rows[idx + 1] : rows[0];
    } else {
      next = idx > 0 ? rows[idx - 1] : rows[rows.length - 1];
    }
    if (focusedRow) focusedRow.classList.remove('row-focus');
    next.classList.add('row-focus');
    next.scrollIntoView({ block: 'nearest' });
    focusedRow = next;
  }

  if (e.key === 'Enter' && focusedRow) {
    e.preventDefault();
    focusedRow.click();
  }
});

// \u2500\u2500 Column sorting \u2500\u2500
document.querySelectorAll('.tbl th').forEach((th, i) => {
  if (i === 0) return; // skip checkbox column
  th.style.cursor = 'pointer';
  th.style.userSelect = 'none';
  th.addEventListener('click', () => {
    const table = th.closest('.tbl');
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr.row')];
    const asc = th.dataset.sort !== 'asc';

    // Reset all headers in this table
    table.querySelectorAll('th').forEach(h => { h.dataset.sort = ''; h.classList.remove('sort-asc','sort-desc'); });
    th.dataset.sort = asc ? 'asc' : 'desc';
    th.classList.add(asc ? 'sort-asc' : 'sort-desc');

    rows.sort((a, b) => {
      const av = a.cells[i].textContent.trim();
      const bv = b.cells[i].textContent.trim();
      return (asc ? 1 : -1) * av.localeCompare(bv, undefined, { numeric: true });
    });
    rows.forEach(r => tbody.appendChild(r));
  });
});
`;
var CSS = `
/* \u2500\u2500 reset & vars \u2500\u2500 */
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:var(--vscode-editor-background,#1e1e1e);
  --fg:var(--vscode-editor-foreground,#ccc);
  --border:var(--vscode-panel-border,#3c3c3c);
  --card:var(--vscode-editorWidget-background,#252526);
  --hover:var(--vscode-list-hoverBackground,#2a2d2e);
  --accent:var(--vscode-focusBorder,#007acc);
  --inp-bg:var(--vscode-input-background,#3c3c3c);
  --inp-fg:var(--vscode-input-foreground,#ccc);
  --inp-bd:var(--vscode-input-border,#555);
  --btn-bg:var(--vscode-button-background,#0e639c);
  --btn-fg:var(--vscode-button-foreground,#fff);
  --red:#e74c3c;--orange:#e67e22;--green:#27ae60;--blue:#3498db;--gray:#7f8c8d;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}

/* \u2500\u2500 header \u2500\u2500 */
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.hdr-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.hdr h1{font-size:1.35em;font-weight:600}
.target-row{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
.muted{color:var(--gray);font-style:italic}

/* \u2500\u2500 chips \u2500\u2500 */
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.chip-accent{background:var(--accent);color:#fff;border-color:var(--accent)}
.chip-row{display:flex;gap:6px;flex-wrap:wrap}

/* \u2500\u2500 stig section \u2500\u2500 */
.stig{margin-bottom:36px}
.stig-title-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px}
.stig-title-row h2{font-size:1.15em}

/* \u2500\u2500 stat cards \u2500\u2500 */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-open  .card-n{color:var(--red)}
.card-naf   .card-n{color:var(--green)}
.card-nr    .card-n{color:var(--orange)}
.card-na    .card-n{color:var(--gray)}
.card-total .card-n{color:var(--blue)}

/* \u2500\u2500 severity bar \u2500\u2500 */
.sev-bar{display:flex;height:28px;border-radius:6px;overflow:hidden;margin-bottom:10px;font-size:.78em;font-weight:600}
.sev-seg{display:flex;align-items:center;justify-content:center;color:#fff;min-width:50px}
.sev-high{background:#c0392b}.sev-med{background:#e67e22}.sev-low{background:#2980b9}

/* \u2500\u2500 completion bar \u2500\u2500 */
.completion{margin-bottom:16px}
.completion-label{font-size:.82em;margin-bottom:3px;color:var(--gray)}
.completion-track{height:8px;background:var(--card);border-radius:4px;display:flex;overflow:hidden}
.completion-fill{height:100%}
.completion-naf{background:var(--green)}.completion-na{background:var(--gray)}

/* \u2500\u2500 filters \u2500\u2500 */
.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.flt{background:var(--inp-bg);color:var(--inp-fg);border:1px solid var(--inp-bd);border-radius:4px;padding:5px 8px;font-size:.85em;outline:none}
.flt:focus{border-color:var(--accent)}
.flt-search{flex:1;min-width:160px}

/* \u2500\u2500 table \u2500\u2500 */
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:8px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-title{max-width:420px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.row{cursor:pointer;transition:background .12s}
.row:hover{background:var(--hover)}

/* \u2500\u2500 pills \u2500\u2500 */
.pill{display:inline-block;padding:2px 8px;border-radius:4px;font-size:.78em;font-weight:600;white-space:nowrap}
.sev-high{background:#c0392b;color:#fff}
.sev-medium{background:#e67e22;color:#fff}
.sev-low{background:#2980b9;color:#fff}
.st-not_reviewed{background:#34495e;color:#ecf0f1}
.st-open{background:#e74c3c;color:#fff}
.st-not_a_finding{background:#27ae60;color:#fff}
.st-not_applicable{background:#7f8c8d;color:#fff}

/* \u2500\u2500 detail slide-over \u2500\u2500 */
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:90}
.detail{position:fixed;top:0;right:0;bottom:0;width:min(680px,96vw);background:var(--bg);border-left:4px solid #3c3c3c;z-index:100;overflow-y:auto;padding:0 0 40px;transform:translateX(0);transition:transform .2s,border-left-color .25s}
.detail.hidden{transform:translateX(110%)}
.backdrop.hidden{display:none}
.detail-hdr{position:sticky;top:0;z-index:10;background:var(--bg);display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-bottom:1px solid var(--border)}
.detail-nav-btns{display:flex;gap:6px}
.btn-nav{background:var(--card);border:1px solid var(--border);color:var(--fg);border-radius:4px;padding:3px 10px;font-size:1em;cursor:pointer;line-height:1.4}
.btn-nav:hover{background:var(--hover);border-color:var(--accent)}
.detail-close{background:none;border:none;color:var(--fg);font-size:1.6em;cursor:pointer;line-height:1;padding:0 4px}
#detailBody{padding:18px 20px 20px}

.d-top{display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:.9em}
.d-title{font-size:1.05em;font-weight:600;margin-bottom:14px;line-height:1.4}

.d-status-row{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:10px 12px;background:var(--card);border-radius:6px;border:1px solid var(--border)}
.d-status-row label{font-weight:600;font-size:.85em}
.d-status-row select{flex:1;background:var(--inp-bg);color:var(--inp-fg);border:1px solid var(--inp-bd);border-radius:4px;padding:5px 8px;font-size:.9em}

.d-meta{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:.82em;margin-bottom:16px;color:var(--gray)}
.d-meta b{color:var(--fg)}
.d-meta code{background:var(--card);padding:1px 5px;border-radius:3px;font-size:.9em}

.d-sec{margin-bottom:10px;border:1px solid var(--border);border-radius:6px;overflow:hidden}
.d-sum{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--card);cursor:pointer;font-weight:600;font-size:.88em;user-select:none;list-style:none}
.d-sum:hover{background:var(--hover)}
.d-sum::-webkit-details-marker{display:none}
.btn-copy{background:var(--card);border:1px solid var(--border);color:var(--gray);border-radius:3px;padding:2px 8px;font-size:.76em;cursor:pointer;margin-left:8px;font-weight:400}
.btn-copy:hover{border-color:var(--accent);color:var(--fg)}
.d-text{padding:10px 12px;font-size:.85em;line-height:1.6;word-break:break-word}
.d-text code{background:var(--card);padding:1px 5px;border-radius:3px;font-size:.88em}
.d-p{margin:0 0 6px}
.d-blank{height:6px}
.d-ol{margin:4px 0 8px 20px;padding:0;font-size:.88em;line-height:1.7}
.d-cmd{display:block;background:var(--card);border-left:3px solid var(--accent);padding:4px 10px;border-radius:3px;margin:3px 0;font-family:monospace;font-size:.84em;white-space:pre-wrap;word-break:break-all}
.d-link{color:var(--accent);text-decoration:underline;word-break:break-all}
.d-imported{background:var(--card);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:6px;padding:8px 12px;margin:4px 0}
.d-imported-badge{display:inline-block;background:var(--accent);color:#fff;font-size:.74em;font-weight:700;border-radius:3px;padding:1px 7px;margin-bottom:6px;letter-spacing:.5px}
.d-imported-pre{margin:0;font-size:.82em;white-space:pre-wrap;word-break:break-word;line-height:1.5}

.d-ta{width:100%;box-sizing:border-box;background:var(--inp-bg);color:var(--inp-fg);border:none;padding:10px 12px;font-family:inherit;font-size:.85em;resize:none;overflow:hidden;outline:none;min-height:60px}
.d-ta:focus{box-shadow:inset 0 0 0 1px var(--accent)}
.d-ta-grow{resize:none}
.d-char-count{font-size:.75em;color:var(--gray);text-align:right;padding:2px 12px 6px}

.d-save-row{display:flex;align-items:center;gap:10px;margin-top:14px}
.d-save-hint{font-size:.75em;color:var(--gray)}
.btn-save{flex:1;padding:10px;background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:6px;font-size:.92em;font-weight:600;cursor:pointer}
.btn-save:hover{opacity:.9}

/* \u2500\u2500 header actions \u2500\u2500 */
.hdr-actions{display:flex;gap:6px;margin-left:auto}
.btn-export{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:4px;padding:4px 12px;font-size:.8em;cursor:pointer;font-weight:600}
.btn-export:hover{background:var(--hover);border-color:var(--accent)}

/* \u2500\u2500 template dropdown \u2500\u2500 */
.d-tpl-row{padding:6px 12px 0}
.d-tpl-select{width:100%;font-size:.82em}

/* \u2500\u2500 edit target button \u2500\u2500 */
.btn-edit-target{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:3px 10px;font-size:.8em;cursor:pointer;margin-left:8px;vertical-align:middle}
.btn-edit-target:hover{opacity:.9}

/* \u2500\u2500 modal \u2500\u2500 */
.modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:min(480px,90vw);max-height:80vh;overflow-y:auto;background:var(--bg);border:1px solid var(--border);border-radius:8px;z-index:110;padding:24px}
.modal.hidden{display:none}
.modal-title{font-size:1.1em;font-weight:600;margin-bottom:16px}
.modal-body{display:flex;flex-direction:column;gap:10px}
.modal-body label{display:flex;flex-direction:column;gap:3px;font-size:.85em;font-weight:600;color:var(--gray)}
.modal-body label input,.modal-body label select,.modal-body label textarea{font-weight:400;color:var(--inp-fg)}
.label-row{flex-direction:row!important;align-items:center;gap:8px!important}
.label-row input[type="checkbox"]{width:16px;height:16px}
.modal-actions{display:flex;gap:8px;margin-top:16px}
.modal-actions .btn-save{flex:1}
.btn-cancel{flex:1;padding:10px;background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:6px;font-size:.92em;font-weight:600;cursor:pointer}
.btn-cancel:hover{background:var(--hover)}

/* \u2500\u2500 bulk action bar \u2500\u2500 */
.bulk-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 12px;background:var(--card);border:1px solid var(--accent);border-radius:6px;margin-bottom:12px}
.bulk-bar.hidden{display:none}
.bulk-count{font-size:.85em;font-weight:600;min-width:80px}
.bulk-status,.bulk-comment{background:var(--inp-bg);color:var(--inp-fg);border:1px solid var(--inp-bd);border-radius:4px;padding:5px 8px;font-size:.85em}
.bulk-comment{flex:1;min-width:120px}
.btn-bulk-apply{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:5px 12px;font-size:.85em;font-weight:600;cursor:pointer}
.btn-bulk-apply:hover{opacity:.9}
.btn-bulk-clear{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:4px;padding:5px 12px;font-size:.85em;cursor:pointer}
.btn-bulk-clear:hover{background:var(--hover)}

/* \u2500\u2500 checkbox column \u2500\u2500 */
.td-cb{width:36px;text-align:center}
.row-cb,.select-all{width:15px;height:15px;cursor:pointer;accent-color:var(--accent)}

/* \u2500\u2500 inline status select \u2500\u2500 */
.inline-status{padding:2px 6px;border-radius:4px;font-size:.78em;font-weight:600;border:1px solid transparent;cursor:pointer;outline:none;color:#fff;appearance:auto}
.inline-status:hover{border-color:var(--accent)}
.inline-status.st-not_reviewed{background:#34495e}
.inline-status.st-open{background:#e74c3c}
.inline-status.st-not_a_finding{background:#27ae60}
.inline-status.st-not_applicable{background:#7f8c8d}

/* \u2500\u2500 saved flash \u2500\u2500 */
.btn-saved{background:var(--green)!important;transition:background .2s}

/* \u2500\u2500 keyboard focus \u2500\u2500 */
.row-focus{outline:2px solid var(--accent);outline-offset:-2px}

/* \u2500\u2500 sort indicators \u2500\u2500 */
.sort-asc::after{content:' \\25B2';font-size:.7em}
.sort-desc::after{content:' \\25BC';font-size:.7em}
`;

// src/exportCsv.ts
var STATUS_LABELS = {
  not_reviewed: "Not Reviewed",
  open: "Open",
  not_a_finding: "Not a Finding",
  not_applicable: "Not Applicable"
};
var SEV_LABELS = {
  high: "CAT I",
  medium: "CAT II",
  low: "CAT III"
};
function csvEsc(s) {
  if (!s) {
    return "";
  }
  if (s.includes('"') || s.includes(",") || s.includes("\n") || s.includes("\r")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}
function buildCsv(data) {
  const headers = [
    "Vuln ID",
    "Rule ID",
    "Rule Version",
    "Severity",
    "Status",
    "Title",
    "Finding Details",
    "Comments",
    "CCIs",
    "SRG ID"
  ];
  const rows = [headers.map(csvEsc).join(",")];
  for (const stig of data.stigs) {
    for (const r of stig.rules) {
      rows.push([
        r.group_id,
        r.rule_id,
        r.rule_version,
        SEV_LABELS[r.severity] || r.severity,
        STATUS_LABELS[r.status] || r.status,
        r.rule_title,
        r.finding_details,
        r.comments,
        r.ccis.join("; "),
        r.srg_id
      ].map(csvEsc).join(","));
    }
  }
  return rows.join("\r\n");
}

// src/exportCkl.ts
function x(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
var STATUS_MAP = {
  not_reviewed: "Not_Reviewed",
  open: "Open",
  not_a_finding: "NotAFinding",
  not_applicable: "Not_Applicable"
};
function stigData(name, data) {
  return `        <STIG_DATA>
          <VULN_ATTRIBUTE>${x(name)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${x(data)}</ATTRIBUTE_DATA>
        </STIG_DATA>`;
}
function buildVuln(r) {
  const parts = [
    stigData("Vuln_Num", r.group_id),
    stigData("Severity", r.severity),
    stigData("Group_Title", r.group_title),
    stigData("Rule_ID", r.rule_id),
    stigData("Rule_Ver", r.rule_version),
    stigData("Rule_Title", r.rule_title),
    stigData("Vuln_Discuss", r.discussion),
    stigData("IA_Controls", r.ia_controls),
    stigData("Check_Content", r.check_content),
    stigData("Fix_Text", r.fix_text),
    stigData("False_Positives", r.false_positives),
    stigData("False_Negatives", r.false_negatives),
    stigData("Documentable", r.documentable),
    stigData("Mitigations", r.mitigations),
    stigData("Potential_Impact", r.potential_impacts),
    stigData("Third_Party_Tools", r.third_party_tools),
    stigData("Mitigation_Control", r.mitigation_control),
    stigData("Responsibility", r.responsibility),
    stigData("Security_Override_Guidance", r.security_override_guidance),
    stigData("Check_Content_Ref", r.check_content_ref?.href || ""),
    stigData("Weight", r.weight),
    stigData("Class", r.classification),
    stigData("STIGRef", r.stig_ref || ""),
    stigData("TargetKey", r.target_key || "")
  ];
  for (const cci of r.ccis) {
    parts.push(stigData("CCI_REF", cci));
  }
  for (const lid of r.legacy_ids) {
    parts.push(stigData("Legacy_ID", lid));
  }
  return `      <VULN>
${parts.join("\n")}
        <STATUS>${x(STATUS_MAP[r.status] || "Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${x(r.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${x(r.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`;
}
function siData(name, data) {
  return `          <SI_DATA>
            <SID_NAME>${x(name)}</SID_NAME>
            <SID_DATA>${x(data)}</SID_DATA>
          </SI_DATA>`;
}
function buildIStig(stig) {
  const info = [
    siData("version", stig.version),
    siData("classification", "UNCLASSIFIED"),
    siData("customname", ""),
    siData("stigid", stig.stig_id),
    siData("description", ""),
    siData("filename", ""),
    siData("releaseinfo", stig.release_info),
    siData("title", stig.stig_name),
    siData("uuid", stig.uuid),
    siData("notice", "terms-of-use"),
    siData("source", "")
  ].join("\n");
  const vulns = stig.rules.map(buildVuln).join("\n");
  return `    <iSTIG>
        <STIG_INFO>
${info}
        </STIG_INFO>
${vulns}
    </iSTIG>`;
}
function buildCkl(data) {
  const td = data.target_data;
  const webDb = td.is_web_database ? "true" : "false";
  const asset = `  <ASSET>
    <ROLE>${x(td.role)}</ROLE>
    <ASSET_TYPE>${x(td.target_type)}</ASSET_TYPE>
    <HOST_NAME>${x(td.host_name)}</HOST_NAME>
    <HOST_IP>${x(td.ip_address)}</HOST_IP>
    <HOST_MAC>${x(td.mac_address)}</HOST_MAC>
    <HOST_FQDN>${x(td.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${x(td.comments)}</TARGET_COMMENT>
    <TECH_AREA>${x(td.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${webDb}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${x(td.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${x(td.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`;
  const stigs = data.stigs.map(buildIStig).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${asset}
  <STIGS>
${stigs}
  </STIGS>
</CHECKLIST>`;
}

// src/exportPoam.ts
var SEV_LABELS2 = {
  high: "CAT I",
  medium: "CAT II",
  low: "CAT III"
};
function csvEsc2(s) {
  if (!s) {
    return "";
  }
  if (s.includes('"') || s.includes(",") || s.includes("\n") || s.includes("\r")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}
function buildPoam(data) {
  const headers = [
    "POA&M ID",
    "Vuln ID",
    "Rule ID",
    "Rule Version",
    "Raw Severity",
    "Weakness Description",
    "Source",
    "Finding Details",
    "Point of Contact",
    "Resources Required",
    "Scheduled Completion Date",
    "Milestones with Completion Dates",
    "Milestone Changes",
    "Identified By",
    "Status",
    "Comments",
    "CCIs",
    "Host Name"
  ];
  const rows = [headers.map(csvEsc2).join(",")];
  let id = 1;
  for (const stig of data.stigs) {
    const openRules = stig.rules.filter((r) => r.status === "open");
    for (const r of openRules) {
      rows.push([
        String(id++),
        r.group_id,
        r.rule_id,
        r.rule_version,
        SEV_LABELS2[r.severity] || r.severity,
        r.rule_title,
        `${stig.stig_name} ${stig.release_info}`,
        r.finding_details,
        "",
        // POC — user fills in
        "",
        // Resources — user fills in
        "",
        // Scheduled completion — user fills in
        "",
        // Milestones — user fills in
        "",
        // Milestone changes — user fills in
        "",
        // Identified by — user fills in
        "Ongoing",
        r.comments,
        r.ccis.join("; "),
        data.target_data.host_name
      ].map(csvEsc2).join(","));
    }
  }
  return rows.join("\r\n");
}

// src/cklbEditorProvider.ts
var CklbEditorProvider = class _CklbEditorProvider {
  constructor(_context) {
    this._context = _context;
  }
  static get activeDocumentUri() {
    return _CklbEditorProvider._activeDocumentUri;
  }
  static register(context) {
    return vscode.window.registerCustomEditorProvider(
      "stigViewer.cklbEditor",
      new _CklbEditorProvider(context),
      { webviewOptions: { retainContextWhenHidden: true }, supportsMultipleEditorsPerDocument: false }
    );
  }
  async resolveCustomTextEditor(document, webviewPanel, _token) {
    webviewPanel.webview.options = { enableScripts: true };
    const updateWebview = () => {
      try {
        const data = JSON.parse(document.getText());
        webviewPanel.webview.html = buildWebviewHtml(data);
      } catch (e) {
        webviewPanel.webview.html = `<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(e)}</pre></body></html>`;
      }
    };
    updateWebview();
    _CklbEditorProvider._activeDocumentUri = document.uri;
    webviewPanel.onDidChangeViewState(() => {
      if (webviewPanel.active) {
        _CklbEditorProvider._activeDocumentUri = document.uri;
      }
    });
    let syncTimeout;
    const changeSub = vscode.workspace.onDidChangeTextDocument((e) => {
      if (e.document.uri.toString() === document.uri.toString()) {
        clearTimeout(syncTimeout);
        syncTimeout = setTimeout(() => {
          try {
            const data = JSON.parse(document.getText());
            const rules = Object.fromEntries(
              data.stigs.flatMap((st) => st.rules.map((r) => [r.uuid, r]))
            );
            webviewPanel.webview.postMessage({ type: "dataUpdate", rules });
          } catch {
          }
        }, 150);
      }
    });
    webviewPanel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.type === "saveRule") {
        const { ruleUuid, stigUuid, status, finding_details, comments } = msg;
        try {
          const data = JSON.parse(document.getText());
          const stig = data.stigs.find((s) => s.uuid === stigUuid);
          const rule = stig?.rules.find((r) => r.uuid === ruleUuid);
          if (rule) {
            rule.status = status;
            rule.finding_details = finding_details;
            rule.comments = comments;
            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
              document.positionAt(0),
              document.positionAt(document.getText().length)
            );
            edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
            await vscode.workspace.applyEdit(edit);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`Save failed: ${e}`);
        }
      }
      if (msg.type === "saveTargetData") {
        try {
          const data = JSON.parse(document.getText());
          Object.assign(data.target_data, msg.targetData);
          const edit = new vscode.WorkspaceEdit();
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          );
          edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
          await vscode.workspace.applyEdit(edit);
          vscode.window.showInformationMessage("Target data updated");
        } catch (e) {
          vscode.window.showErrorMessage(`Save target data failed: ${e}`);
        }
      }
      if (msg.type === "exportPoam") {
        try {
          const data = JSON.parse(document.getText());
          const poam = buildPoam(data);
          const openCount = data.stigs.reduce((n, s) => n + s.rules.filter((r) => r.status === "open").length, 0);
          const defaultName = path.basename(document.uri.fsPath, ".cklb") + "_POAM.csv";
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(document.uri.fsPath), defaultName)),
            filters: { "CSV": ["csv"] },
            title: `Export POA&M (${openCount} open findings)`
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, poam, "utf-8");
            vscode.window.showInformationMessage(`Exported POA&M (${openCount} findings) \u2192 ${path.basename(saveUri.fsPath)}`);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`POA&M export failed: ${e}`);
        }
      }
      if (msg.type === "exportCsv") {
        try {
          const data = JSON.parse(document.getText());
          const csv = buildCsv(data);
          const defaultName = path.basename(document.uri.fsPath, ".cklb") + ".csv";
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(document.uri.fsPath), defaultName)),
            filters: { "CSV": ["csv"] },
            title: "Export Summary CSV"
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, csv, "utf-8");
            vscode.window.showInformationMessage(`Exported CSV \u2192 ${path.basename(saveUri.fsPath)}`);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`CSV export failed: ${e}`);
        }
      }
      if (msg.type === "exportCkl") {
        try {
          const data = JSON.parse(document.getText());
          const ckl = buildCkl(data);
          const defaultName = path.basename(document.uri.fsPath, ".cklb") + ".ckl";
          const saveUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(path.dirname(document.uri.fsPath), defaultName)),
            filters: { "CKL Checklist": ["ckl"] },
            title: "Export CKL (XML)"
          });
          if (saveUri) {
            fs.writeFileSync(saveUri.fsPath, ckl, "utf-8");
            vscode.window.showInformationMessage(`Exported CKL \u2192 ${path.basename(saveUri.fsPath)}`);
          }
        } catch (e) {
          vscode.window.showErrorMessage(`CKL export failed: ${e}`);
        }
      }
      if (msg.type === "bulkSaveRules") {
        const { ruleUuids, stigUuid, status, comments } = msg;
        try {
          const data = JSON.parse(document.getText());
          const stig = data.stigs.find((s) => s.uuid === stigUuid);
          if (!stig) {
            return;
          }
          let count = 0;
          for (const rule of stig.rules) {
            if (ruleUuids.includes(rule.uuid)) {
              rule.status = status;
              if (comments) {
                rule.comments = comments;
              }
              count++;
            }
          }
          const edit = new vscode.WorkspaceEdit();
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
          );
          edit.replace(document.uri, fullRange, JSON.stringify(data, null, 2));
          await vscode.workspace.applyEdit(edit);
          vscode.window.showInformationMessage(
            `Bulk updated ${count} rules \u2192 ${status.replace(/_/g, " ")}`
          );
        } catch (e) {
          vscode.window.showErrorMessage(`Bulk save failed: ${e}`);
        }
      }
    });
    webviewPanel.onDidDispose(() => changeSub.dispose());
  }
};

// src/xccdfImporter.ts
var vscode2 = __toESM(require("vscode"));
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
var import_xml2js = __toESM(require_xml2js());

// node_modules/uuid/dist-node/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist-node/rng.js
var import_node_crypto = require("node:crypto");
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    (0, import_node_crypto.randomFillSync)(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

// node_modules/uuid/dist-node/native.js
var import_node_crypto2 = require("node:crypto");
var native_default = { randomUUID: import_node_crypto2.randomUUID };

// node_modules/uuid/dist-node/v4.js
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  return _v4(options, buf, offset);
}
var v4_default = v4;

// src/xccdfImporter.ts
function toArray(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}
function textOf(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return textOf(node[0]);
  if (typeof node === "object" && "_" in node) {
    return String(node._);
  }
  return String(node);
}
function extractTag(text, tag) {
  const m = text.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return m ? m[1].trim() : "";
}
function normalizeVulnId(id) {
  const m = id.match(/(V-\d+)/);
  return m ? m[1] : id;
}
function normalizeRuleId(id) {
  const m = id.match(/(SV-\d+r\d+_rule)/);
  return m ? m[1] : id;
}
function normalizeSeverity(sev) {
  const s = (sev || "").toLowerCase();
  if (s === "high") return "high";
  if (s === "medium") return "medium";
  return "low";
}
function extractBenchmark(parsed) {
  const root = parsed;
  if (root.Benchmark) {
    return root.Benchmark;
  }
  const dsc = parsed["data-stream-collection"];
  if (dsc?.component != null) {
    for (const comp of toArray(dsc.component)) {
      const b = comp.Benchmark;
      if (b) {
        return b;
      }
    }
  }
  return null;
}
async function importXccdf(uri) {
  const xmlPath = uri.fsPath;
  const xmlContent = fs2.readFileSync(xmlPath, "utf-8");
  const parsed = await (0, import_xml2js.parseStringPromise)(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [import_xml2js.processors.stripPrefix]
  });
  const benchmark = extractBenchmark(parsed);
  if (!benchmark) {
    throw new Error(
      "No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist."
    );
  }
  const attrs = benchmark.$ || {};
  const benchmarkId = attrs.id || "";
  const benchmarkTitle = textOf(benchmark.title);
  const benchmarkVersion = textOf(benchmark.version);
  let releaseInfo = "";
  for (const pt of toArray(benchmark["plain-text"])) {
    const ptAttrs = pt?.$ || {};
    if (ptAttrs.id === "release-info") {
      releaseInfo = textOf(pt);
      break;
    }
  }
  const stigUuid = v4_default();
  const docId = v4_default();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const groups = toArray(benchmark.Group);
  const rules = [];
  for (const group of groups) {
    const gAttrs = group?.$ || {};
    const groupId = normalizeVulnId(gAttrs.id || "");
    const groupTitle = textOf(group.title);
    const groupDesc = textOf(group.description);
    for (const rule of toArray(group.Rule)) {
      const rAttrs = rule?.$ || {};
      const ruleId = normalizeRuleId(rAttrs.id || "");
      const severity = normalizeSeverity(rAttrs.severity);
      const weight = rAttrs.weight || "10.0";
      const ruleVersion = textOf(rule.version);
      const ruleTitle = textOf(rule.title);
      const descRaw = textOf(rule.description);
      const discussion = extractTag(descRaw, "VulnDiscussion");
      const falsePositives = extractTag(descRaw, "FalsePositives");
      const falseNegatives = extractTag(descRaw, "FalseNegatives");
      const documentable = extractTag(descRaw, "Documentable");
      const mitigations = extractTag(descRaw, "Mitigations");
      const severityOverrideGuidance = extractTag(descRaw, "SeverityOverrideGuidance");
      const potentialImpacts = extractTag(descRaw, "PotentialImpacts");
      const thirdPartyTools = extractTag(descRaw, "ThirdPartyTools");
      const mitigationControl = extractTag(descRaw, "MitigationControl");
      const responsibility = extractTag(descRaw, "Responsibility");
      const iaControls = extractTag(descRaw, "IAControls");
      const fixText = textOf(rule.fixtext);
      const checks = toArray(rule.check);
      let checkContent = "";
      let checkContentRef = { href: "", name: "" };
      const manualCheck = checks.find((c) => c["check-content"]);
      const selectedCheck = manualCheck || checks[0];
      if (selectedCheck) {
        checkContent = textOf(selectedCheck["check-content"]);
        const ref = toArray(selectedCheck["check-content-ref"])[0];
        if (ref?.$) {
          checkContentRef = { href: ref.$.href || "", name: ref.$.name || "" };
        }
      }
      const ccis = [];
      const legacyIds = [];
      for (const ident of toArray(rule.ident)) {
        const sys = ident?.$?.system || "";
        const val = textOf(ident);
        if (sys.includes("cci")) {
          ccis.push(val);
        } else if (sys.includes("legacy")) {
          legacyIds.push(val);
        }
      }
      let targetKey = null;
      let stigRef = null;
      for (const ref of toArray(rule.reference)) {
        if (ref?.identifier) {
          targetKey = textOf(ref.identifier);
        }
        if (ref?.title) {
          stigRef = textOf(ref.title);
        }
      }
      const ruleUuid = v4_default();
      rules.push({
        uuid: ruleUuid,
        stig_uuid: stigUuid,
        target_key: targetKey,
        stig_ref: stigRef,
        group_id: groupId,
        rule_id: ruleId,
        rule_id_src: ruleId,
        weight,
        classification: "Unclassified",
        severity,
        rule_version: ruleVersion,
        group_title: groupTitle,
        rule_title: ruleTitle,
        fix_text: fixText,
        false_positives: falsePositives,
        false_negatives: falseNegatives,
        discussion,
        check_content: checkContent,
        documentable,
        mitigations,
        potential_impacts: potentialImpacts,
        third_party_tools: thirdPartyTools,
        mitigation_control: mitigationControl,
        responsibility,
        security_override_guidance: severityOverrideGuidance,
        ia_controls: iaControls,
        check_content_ref: checkContentRef,
        legacy_ids: legacyIds,
        ccis,
        group_tree: [{ id: groupId, title: groupTitle, description: groupDesc }],
        createdAt: now,
        updatedAt: now,
        STIGUuid: stigUuid,
        status: "not_reviewed",
        overrides: {},
        comments: "",
        finding_details: "",
        srg_id: groupTitle
      });
    }
  }
  const stig = {
    stig_name: benchmarkTitle,
    display_name: benchmarkTitle,
    stig_id: benchmarkId,
    release_info: releaseInfo,
    version: benchmarkVersion,
    uuid: stigUuid,
    reference_identifier: benchmarkId,
    size: rules.length,
    rules
  };
  const targetData = {
    target_type: "Non-Computing",
    host_name: "",
    ip_address: "",
    mac_address: "",
    fqdn: "",
    comments: "",
    role: "None",
    is_web_database: false,
    technology_area: "",
    web_db_site: "",
    web_db_instance: "",
    classification: null
  };
  const doc = {
    title: benchmarkTitle,
    id: docId,
    stigs: [stig],
    active: true,
    mode: 1,
    has_path: true,
    target_data: targetData,
    cklb_version: "1"
  };
  const outName = path2.basename(xmlPath).replace(/-xccdf\.xml$/i, ".cklb").replace(/\.xml$/i, ".cklb");
  const outPath = path2.join(path2.dirname(xmlPath), outName);
  fs2.writeFileSync(outPath, JSON.stringify(doc, null, 2));
  const outUri = vscode2.Uri.file(outPath);
  await vscode2.commands.executeCommand("vscode.openWith", outUri, "stigViewer.cklbEditor");
  vscode2.window.showInformationMessage(
    `Imported ${rules.length} rules from XCCDF \u2192 ${outName}`
  );
}

// src/importCkl.ts
var vscode3 = __toESM(require("vscode"));
var fs3 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
var import_xml2js2 = __toESM(require_xml2js());
function toArray2(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}
function txt(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return txt(node[0]);
  if (typeof node === "object" && "_" in node) {
    return String(node._);
  }
  return String(node);
}
var STATUS_MAP2 = {
  "Not_Reviewed": "not_reviewed",
  "Open": "open",
  "NotAFinding": "not_a_finding",
  "Not_Applicable": "not_applicable"
};
function normalizeSeverity2(sev) {
  const s = (sev || "").toLowerCase();
  if (s === "high") return "high";
  if (s === "medium") return "medium";
  return "low";
}
async function importCkl(uri) {
  const xmlPath = uri.fsPath;
  const xmlContent = fs3.readFileSync(xmlPath, "utf-8");
  const parsed = await (0, import_xml2js2.parseStringPromise)(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [import_xml2js2.processors.stripPrefix]
  });
  const checklist = parsed.CHECKLIST;
  if (!checklist) {
    throw new Error("No <CHECKLIST> element found in the CKL file.");
  }
  const asset = checklist.ASSET || {};
  const targetData = {
    target_type: txt(asset.ASSET_TYPE) || "Computing",
    host_name: txt(asset.HOST_NAME),
    ip_address: txt(asset.HOST_IP),
    mac_address: txt(asset.HOST_MAC),
    fqdn: txt(asset.HOST_FQDN),
    comments: txt(asset.TARGET_COMMENT),
    role: txt(asset.ROLE) || "None",
    is_web_database: txt(asset.WEB_OR_DATABASE).toLowerCase() === "true",
    technology_area: txt(asset.TECH_AREA),
    web_db_site: txt(asset.WEB_DB_SITE),
    web_db_instance: txt(asset.WEB_DB_INSTANCE),
    classification: null
  };
  const iStigs = toArray2(checklist.STIGS?.iSTIG);
  const docId = v4_default();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const stigs = [];
  for (const iStig of iStigs) {
    const siMap = /* @__PURE__ */ new Map();
    for (const si of toArray2(iStig.STIG_INFO?.SI_DATA)) {
      siMap.set(txt(si.SID_NAME), txt(si.SID_DATA));
    }
    const stigUuid = siMap.get("uuid") || v4_default();
    const stigName = siMap.get("title") || "";
    const stigId = siMap.get("stigid") || "";
    const version = siMap.get("version") || "";
    const releaseInfo = siMap.get("releaseinfo") || "";
    const vulns = toArray2(iStig.VULN);
    const rules = [];
    for (const vuln of vulns) {
      const attrMap = /* @__PURE__ */ new Map();
      const cciRefs = [];
      const legacyIds = [];
      for (const sd of toArray2(vuln.STIG_DATA)) {
        const attr = txt(sd.VULN_ATTRIBUTE);
        const data = txt(sd.ATTRIBUTE_DATA);
        if (attr === "CCI_REF") {
          cciRefs.push(data);
        } else if (attr === "Legacy_ID" && data) {
          legacyIds.push(data);
        } else {
          attrMap.set(attr, data);
        }
      }
      const groupId = attrMap.get("Vuln_Num") || "";
      const ruleId = attrMap.get("Rule_ID") || "";
      const ruleUuid = v4_default();
      const rawStatus = txt(vuln.STATUS);
      const status = STATUS_MAP2[rawStatus] || "not_reviewed";
      rules.push({
        uuid: ruleUuid,
        stig_uuid: stigUuid,
        target_key: attrMap.get("TargetKey") || null,
        stig_ref: attrMap.get("STIGRef") || null,
        group_id: groupId,
        rule_id: ruleId,
        rule_id_src: ruleId,
        weight: attrMap.get("Weight") || "10.0",
        classification: attrMap.get("Class") || "Unclassified",
        severity: normalizeSeverity2(attrMap.get("Severity")),
        rule_version: attrMap.get("Rule_Ver") || "",
        group_title: attrMap.get("Group_Title") || "",
        rule_title: attrMap.get("Rule_Title") || "",
        fix_text: attrMap.get("Fix_Text") || "",
        false_positives: attrMap.get("False_Positives") || "",
        false_negatives: attrMap.get("False_Negatives") || "",
        discussion: attrMap.get("Vuln_Discuss") || "",
        check_content: attrMap.get("Check_Content") || "",
        documentable: attrMap.get("Documentable") || "",
        mitigations: attrMap.get("Mitigations") || "",
        potential_impacts: attrMap.get("Potential_Impact") || "",
        third_party_tools: attrMap.get("Third_Party_Tools") || "",
        mitigation_control: attrMap.get("Mitigation_Control") || "",
        responsibility: attrMap.get("Responsibility") || "",
        security_override_guidance: attrMap.get("Security_Override_Guidance") || "",
        ia_controls: attrMap.get("IA_Controls") || "",
        check_content_ref: { href: attrMap.get("Check_Content_Ref") || "", name: "" },
        legacy_ids: legacyIds,
        ccis: cciRefs,
        group_tree: [{ id: groupId, title: attrMap.get("Group_Title") || "", description: "" }],
        createdAt: now,
        updatedAt: now,
        STIGUuid: stigUuid,
        status,
        overrides: {},
        comments: txt(vuln.COMMENTS),
        finding_details: txt(vuln.FINDING_DETAILS),
        srg_id: attrMap.get("Group_Title") || ""
      });
    }
    stigs.push({
      stig_name: stigName,
      display_name: stigName,
      stig_id: stigId,
      release_info: releaseInfo,
      version,
      uuid: stigUuid,
      reference_identifier: stigId,
      size: rules.length,
      rules
    });
  }
  const doc = {
    title: stigs[0]?.stig_name || "Imported CKL",
    id: docId,
    stigs,
    active: true,
    mode: 1,
    has_path: true,
    target_data: targetData,
    cklb_version: "1"
  };
  const outName = path3.basename(xmlPath, ".ckl") + ".cklb";
  const outPath = path3.join(path3.dirname(xmlPath), outName);
  fs3.writeFileSync(outPath, JSON.stringify(doc, null, 2));
  const outUri = vscode3.Uri.file(outPath);
  await vscode3.commands.executeCommand("vscode.openWith", outUri, "stigViewer.cklbEditor");
  const totalRules = stigs.reduce((n, s) => n + s.rules.length, 0);
  vscode3.window.showInformationMessage(
    `Imported ${totalRules} rules from CKL \u2192 ${outName}`
  );
}

// src/mergeFindings.ts
var vscode4 = __toESM(require("vscode"));
var fs4 = __toESM(require("fs"));
async function mergeFindings(activeCklbUri) {
  const oldUris = await vscode4.window.showOpenDialog({
    canSelectMany: false,
    filters: { "STIG Checklist": ["cklb"] },
    title: "Select OLD (completed) checklist to carry findings FROM"
  });
  if (!oldUris?.[0]) {
    return;
  }
  let newUri = activeCklbUri;
  if (!newUri) {
    const uris = await vscode4.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select NEW checklist to carry findings INTO"
    });
    if (!uris?.[0]) {
      return;
    }
    newUri = uris[0];
  }
  const oldDoc = JSON.parse(fs4.readFileSync(oldUris[0].fsPath, "utf-8"));
  const newDoc = JSON.parse(fs4.readFileSync(newUri.fsPath, "utf-8"));
  const oldRuleMap = /* @__PURE__ */ new Map();
  for (const stig of oldDoc.stigs) {
    for (const rule of stig.rules) {
      oldRuleMap.set(rule.rule_version, rule);
    }
  }
  let carried = 0;
  let newRules = 0;
  let total = 0;
  for (const stig of newDoc.stigs) {
    for (const rule of stig.rules) {
      total++;
      const oldRule = oldRuleMap.get(rule.rule_version);
      if (oldRule) {
        rule.status = oldRule.status;
        rule.finding_details = oldRule.finding_details;
        rule.comments = oldRule.comments;
        rule.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
        carried++;
      } else {
        newRules++;
      }
    }
  }
  const newRuleVersions = /* @__PURE__ */ new Set();
  for (const stig of newDoc.stigs) {
    for (const rule of stig.rules) {
      newRuleVersions.add(rule.rule_version);
    }
  }
  let removed = 0;
  for (const rv of oldRuleMap.keys()) {
    if (!newRuleVersions.has(rv)) {
      removed++;
    }
  }
  fs4.writeFileSync(newUri.fsPath, JSON.stringify(newDoc, null, 2));
  await vscode4.commands.executeCommand("vscode.openWith", newUri, "stigViewer.cklbEditor");
  vscode4.window.showInformationMessage(
    `Merge complete: ${carried} carried forward, ${newRules} new rules, ${removed} removed from old STIG`
  );
}

// src/dashboardPanel.ts
var vscode5 = __toESM(require("vscode"));
var fs5 = __toESM(require("fs"));
var DashboardPanel = class _DashboardPanel {
  static async show(context) {
    if (_DashboardPanel._panel) {
      _DashboardPanel._panel.reveal();
      await _DashboardPanel._refresh();
      return;
    }
    const panel = vscode5.window.createWebviewPanel(
      "stigViewer.dashboard",
      "STIG Dashboard",
      vscode5.ViewColumn.One,
      { enableScripts: true, retainContextWhenHidden: true }
    );
    _DashboardPanel._panel = panel;
    panel.onDidDispose(() => {
      _DashboardPanel._panel = void 0;
    });
    panel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.type === "openFile") {
        const uri = vscode5.Uri.file(msg.path);
        await vscode5.commands.executeCommand("vscode.openWith", uri, "stigViewer.cklbEditor");
      }
      if (msg.type === "refresh") {
        await _DashboardPanel._refresh();
      }
    });
    await _DashboardPanel._refresh();
  }
  static async _refresh() {
    const panel = _DashboardPanel._panel;
    if (!panel) return;
    const files = await vscode5.workspace.findFiles("**/*.cklb", "**/node_modules/**");
    const summaries = [];
    for (const f of files) {
      try {
        const raw = fs5.readFileSync(f.fsPath, "utf-8");
        const doc = JSON.parse(raw);
        for (const stig of doc.stigs) {
          const s = {
            file: vscode5.workspace.asRelativePath(f),
            uri: f.fsPath,
            title: doc.title,
            hostName: doc.target_data.host_name || "\u2014",
            stigName: stig.display_name || stig.stig_name,
            total: stig.rules.length,
            open: 0,
            not_a_finding: 0,
            not_reviewed: 0,
            not_applicable: 0,
            high: 0,
            medium: 0,
            low: 0
          };
          for (const r of stig.rules) {
            s[r.status]++;
            s[r.severity]++;
          }
          summaries.push(s);
        }
      } catch {
      }
    }
    panel.webview.html = buildDashboardHtml(summaries);
  }
};
function buildDashboardHtml(summaries) {
  const agg = {
    total: 0,
    open: 0,
    not_a_finding: 0,
    not_reviewed: 0,
    not_applicable: 0,
    high: 0,
    medium: 0,
    low: 0
  };
  for (const s of summaries) {
    agg.total += s.total;
    agg.open += s.open;
    agg.not_a_finding += s.not_a_finding;
    agg.not_reviewed += s.not_reviewed;
    agg.not_applicable += s.not_applicable;
    agg.high += s.high;
    agg.medium += s.medium;
    agg.low += s.low;
  }
  const pct = (n) => agg.total ? Math.round(n / agg.total * 100) : 0;
  const completion = pct(agg.not_a_finding + agg.not_applicable);
  const rows = summaries.map((s) => {
    const sPct = s.total ? Math.round((s.not_a_finding + s.not_applicable) / s.total * 100) : 0;
    return `<tr class="row" data-path="${esc2(s.uri)}">
      <td class="td-host">${esc2(s.hostName)}</td>
      <td class="td-stig">${esc2(s.stigName)}</td>
      <td class="td-n">${s.total}</td>
      <td class="td-n td-open">${s.open}</td>
      <td class="td-n td-naf">${s.not_a_finding}</td>
      <td class="td-n td-nr">${s.not_reviewed}</td>
      <td class="td-n td-na">${s.not_applicable}</td>
      <td class="td-n">${sPct}%</td>
      <td class="td-file">${esc2(s.file)}</td>
    </tr>`;
  }).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${CSS2}</style>
</head>
<body>

<header class="hdr">
  <div class="hdr-row">
    <h1>STIG Dashboard</h1>
    <span class="chip">${summaries.length} checklists</span>
    <button class="btn-refresh" id="btnRefresh">Refresh</button>
  </div>
</header>

<div class="cards">
  <div class="card card-total"><div class="card-n">${agg.total}</div><div class="card-l">Total Rules</div></div>
  <div class="card card-open"><div class="card-n">${agg.open}</div><div class="card-l">Open</div></div>
  <div class="card card-naf"><div class="card-n">${agg.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
  <div class="card card-nr"><div class="card-n">${agg.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
  <div class="card card-na"><div class="card-n">${agg.not_applicable}</div><div class="card-l">Not Applicable</div></div>
</div>

<div class="sev-bar">
  <div class="sev-seg sev-high" style="width:${pct(agg.high)}%"><span>CAT I \xB7 ${agg.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${pct(agg.medium)}%"><span>CAT II \xB7 ${agg.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${pct(agg.low)}%"><span>CAT III \xB7 ${agg.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${completion}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${pct(agg.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${pct(agg.not_applicable)}%"></div>
  </div>
</div>

${summaries.length === 0 ? '<p class="muted">No .cklb files found in this workspace.</p>' : `
<div class="tbl-wrap">
  <table class="tbl">
    <thead><tr>
      <th>Host</th>
      <th>STIG</th>
      <th style="width:60px">Total</th>
      <th style="width:60px">Open</th>
      <th style="width:60px">NaF</th>
      <th style="width:60px">NR</th>
      <th style="width:60px">NA</th>
      <th style="width:60px">Done</th>
      <th>File</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>
</div>`}

<script>
const vscode = acquireVsCodeApi();
document.getElementById('btnRefresh').onclick = () => vscode.postMessage({ type: 'refresh' });
document.querySelectorAll('tr.row').forEach(tr => {
  tr.addEventListener('click', () => {
    vscode.postMessage({ type: 'openFile', path: tr.dataset.path });
  });
});

// Sort
document.querySelectorAll('.tbl th').forEach((th, i) => {
  th.style.cursor = 'pointer';
  th.style.userSelect = 'none';
  th.addEventListener('click', () => {
    const table = th.closest('.tbl');
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr.row')];
    const asc = th.dataset.sort !== 'asc';
    table.querySelectorAll('th').forEach(h => { h.dataset.sort = ''; h.classList.remove('sort-asc','sort-desc'); });
    th.dataset.sort = asc ? 'asc' : 'desc';
    th.classList.add(asc ? 'sort-asc' : 'sort-desc');
    rows.sort((a, b) => {
      const av = a.cells[i].textContent.trim();
      const bv = b.cells[i].textContent.trim();
      return (asc ? 1 : -1) * av.localeCompare(bv, undefined, { numeric: true });
    });
    rows.forEach(r => tbody.appendChild(r));
  });
});
</script>
</body></html>`;
}
function esc2(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var CSS2 = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:var(--vscode-editor-background,#1e1e1e);
  --fg:var(--vscode-editor-foreground,#ccc);
  --border:var(--vscode-panel-border,#3c3c3c);
  --card:var(--vscode-editorWidget-background,#252526);
  --hover:var(--vscode-list-hoverBackground,#2a2d2e);
  --accent:var(--vscode-focusBorder,#007acc);
  --btn-bg:var(--vscode-button-background,#0e639c);
  --btn-fg:var(--vscode-button-foreground,#fff);
  --red:#e74c3c;--orange:#e67e22;--green:#27ae60;--blue:#3498db;--gray:#7f8c8d;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.hdr-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.hdr h1{font-size:1.35em;font-weight:600}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.muted{color:var(--gray);font-style:italic;margin-top:20px}
.btn-refresh{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:4px 14px;font-size:.82em;font-weight:600;cursor:pointer;margin-left:auto}
.btn-refresh:hover{opacity:.9}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-open  .card-n{color:var(--red)}
.card-naf   .card-n{color:var(--green)}
.card-nr    .card-n{color:var(--orange)}
.card-na    .card-n{color:var(--gray)}
.card-total .card-n{color:var(--blue)}
.sev-bar{display:flex;height:28px;border-radius:6px;overflow:hidden;margin-bottom:10px;font-size:.78em;font-weight:600}
.sev-seg{display:flex;align-items:center;justify-content:center;color:#fff;min-width:50px}
.sev-high{background:#c0392b}.sev-med{background:#e67e22}.sev-low{background:#2980b9}
.completion{margin-bottom:20px}
.completion-label{font-size:.82em;margin-bottom:3px;color:var(--gray)}
.completion-track{height:8px;background:var(--card);border-radius:4px;display:flex;overflow:hidden}
.completion-fill{height:100%}
.completion-naf{background:var(--green)}.completion-na{background:var(--gray)}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:8px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-n{text-align:center;font-weight:600}
.td-open{color:var(--red)}.td-naf{color:var(--green)}.td-nr{color:var(--orange)}.td-na{color:var(--gray)}
.td-host{font-weight:600}.td-stig{max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.td-file{font-size:.82em;color:var(--gray)}
.row{cursor:pointer;transition:background .12s}
.row:hover{background:var(--hover)}
.sort-asc::after{content:' \\25B2';font-size:.7em}
.sort-desc::after{content:' \\25BC';font-size:.7em}
`;

// src/diffPanel.ts
var vscode6 = __toESM(require("vscode"));
var fs6 = __toESM(require("fs"));
var STATUS_LABELS2 = {
  not_reviewed: "Not Reviewed",
  open: "Open",
  not_a_finding: "Not a Finding",
  not_applicable: "Not Applicable"
};
var STATUS_RANK = {
  open: 0,
  not_reviewed: 1,
  not_applicable: 2,
  not_a_finding: 3
};
function sevCat2(s) {
  return s === "high" ? "I" : s === "medium" ? "II" : "III";
}
var DiffPanel = class {
  static async show(activeCklbUri) {
    let uriAResolved = activeCklbUri;
    if (!uriAResolved) {
      const uriA = await vscode6.window.showOpenDialog({
        canSelectMany: false,
        filters: { "STIG Checklist": ["cklb"] },
        title: "Select FIRST checklist (baseline / old)"
      });
      if (!uriA?.[0]) return;
      uriAResolved = uriA[0];
    }
    const uriB = await vscode6.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select SECOND checklist (current / new)"
    });
    if (!uriB?.[0]) return;
    const docA = JSON.parse(fs6.readFileSync(uriAResolved.fsPath, "utf-8"));
    const docB = JSON.parse(fs6.readFileSync(uriB[0].fsPath, "utf-8"));
    const mapA = /* @__PURE__ */ new Map();
    for (const s of docA.stigs) {
      for (const r of s.rules) {
        mapA.set(r.rule_version, r);
      }
    }
    const mapB = /* @__PURE__ */ new Map();
    for (const s of docB.stigs) {
      for (const r of s.rules) {
        mapB.set(r.rule_version, r);
      }
    }
    const entries = [];
    const allKeys = /* @__PURE__ */ new Set([...mapA.keys(), ...mapB.keys()]);
    for (const rv of allKeys) {
      const a = mapA.get(rv);
      const b = mapB.get(rv);
      if (a && b) {
        let change = "unchanged";
        if (a.status !== b.status) {
          change = STATUS_RANK[b.status] > STATUS_RANK[a.status] ? "improved" : "regression";
        }
        entries.push({
          ruleVersion: rv,
          groupId: b.group_id,
          ruleTitle: b.rule_title,
          severity: b.severity,
          statusA: a.status,
          statusB: b.status,
          change
        });
      } else if (b && !a) {
        entries.push({
          ruleVersion: rv,
          groupId: b.group_id,
          ruleTitle: b.rule_title,
          severity: b.severity,
          statusA: "",
          statusB: b.status,
          change: "new"
        });
      } else if (a && !b) {
        entries.push({
          ruleVersion: rv,
          groupId: a.group_id,
          ruleTitle: a.rule_title,
          severity: a.severity,
          statusA: a.status,
          statusB: "",
          change: "removed"
        });
      }
    }
    const ORDER = { regression: 0, new: 1, improved: 2, removed: 3, unchanged: 4 };
    entries.sort((a, b) => ORDER[a.change] - ORDER[b.change]);
    const regressions = entries.filter((e) => e.change === "regression").length;
    const improvements = entries.filter((e) => e.change === "improved").length;
    const newRules = entries.filter((e) => e.change === "new").length;
    const removed = entries.filter((e) => e.change === "removed").length;
    const unchanged = entries.filter((e) => e.change === "unchanged").length;
    const changedEntries = entries.filter((e) => e.change !== "unchanged");
    const panel = vscode6.window.createWebviewPanel(
      "stigViewer.diff",
      "STIG Diff",
      vscode6.ViewColumn.One,
      { enableScripts: true }
    );
    panel.webview.html = buildDiffHtml(
      uriAResolved.fsPath,
      uriB[0].fsPath,
      changedEntries,
      entries,
      { regressions, improvements, newRules, removed, unchanged }
    );
  }
};
function esc3(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function buildDiffHtml(pathA, pathB, changedEntries, allEntries, stats) {
  const nameA = pathA.split("/").pop() || pathA;
  const nameB = pathB.split("/").pop() || pathB;
  const changeLabel = {
    regression: "\u2193 Regression",
    improved: "\u2191 Improved",
    new: "+ New",
    removed: "\u2212 Removed",
    unchanged: "= Unchanged"
  };
  const changeCls = {
    regression: "chg-reg",
    improved: "chg-imp",
    new: "chg-new",
    removed: "chg-rem",
    unchanged: "chg-unc"
  };
  const rows = (list) => list.map((e) => `<tr class="row ${changeCls[e.change]}" data-change="${e.change}">
    <td><span class="pill sev-${e.severity}">CAT ${sevCat2(e.severity)}</span></td>
    <td><code>${esc3(e.groupId)}</code></td>
    <td><code>${esc3(e.ruleVersion)}</code></td>
    <td class="td-title">${esc3(e.ruleTitle)}</td>
    <td>${e.statusA ? `<span class="pill st-${e.statusA}">${STATUS_LABELS2[e.statusA] || e.statusA}</span>` : '<span class="muted">\u2014</span>'}</td>
    <td>${e.statusB ? `<span class="pill st-${e.statusB}">${STATUS_LABELS2[e.statusB] || e.statusB}</span>` : '<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${changeCls[e.change]}">${changeLabel[e.change]}</span></td>
  </tr>`).join("\n");
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${CSS3}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${esc3(nameA)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${esc3(nameB)}</span>
  </div>
</header>

<div class="cards">
  <div class="card card-reg"><div class="card-n">${stats.regressions}</div><div class="card-l">Regressions</div></div>
  <div class="card card-imp"><div class="card-n">${stats.improvements}</div><div class="card-l">Improvements</div></div>
  <div class="card card-new"><div class="card-n">${stats.newRules}</div><div class="card-l">New Rules</div></div>
  <div class="card card-rem"><div class="card-n">${stats.removed}</div><div class="card-l">Removed</div></div>
  <div class="card card-unc"><div class="card-n">${stats.unchanged}</div><div class="card-l">Unchanged</div></div>
</div>

<div class="filters">
  <label><input type="checkbox" id="showUnchanged" /> Show ${stats.unchanged} unchanged rules</label>
</div>

<div class="tbl-wrap">
  <table class="tbl">
    <thead><tr>
      <th style="width:72px">CAT</th>
      <th style="width:90px">Vuln ID</th>
      <th style="width:130px">Rule Ver</th>
      <th>Title</th>
      <th style="width:120px">Status A</th>
      <th style="width:120px">Status B</th>
      <th style="width:120px">Change</th>
    </tr></thead>
    <tbody id="diffBody">
      ${rows(changedEntries)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(changedEntries)};
const ALL     = ${JSON.stringify(allEntries)};

document.getElementById('showUnchanged').addEventListener('change', function() {
  const list = this.checked ? ALL : CHANGED;
  const tbody = document.getElementById('diffBody');
  tbody.innerHTML = list.map(e => rowHtml(e)).join('');
});

const CL = { regression:'chg-reg', improved:'chg-imp', new:'chg-new', removed:'chg-rem', unchanged:'chg-unc' };
const LB = { regression:'\\u2193 Regression', improved:'\\u2191 Improved', new:'+ New', removed:'\\u2212 Removed', unchanged:'= Unchanged' };
const SL = { not_reviewed:'Not Reviewed', open:'Open', not_a_finding:'Not a Finding', not_applicable:'Not Applicable' };
function sev(s){return s==='high'?'I':s==='medium'?'II':'III';}
function h(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function pill(status){return status?'<span class="pill st-'+status+'">'+(SL[status]||status)+'</span>':'<span class="muted">\\u2014</span>';}
function rowHtml(e){
  return '<tr class="row '+CL[e.change]+'">'
    +'<td><span class="pill sev-'+e.severity+'">CAT '+sev(e.severity)+'</span></td>'
    +'<td><code>'+h(e.groupId)+'</code></td>'
    +'<td><code>'+h(e.ruleVersion)+'</code></td>'
    +'<td class="td-title">'+h(e.ruleTitle)+'</td>'
    +'<td>'+pill(e.statusA)+'</td>'
    +'<td>'+pill(e.statusB)+'</td>'
    +'<td><span class="pill '+CL[e.change]+'">'+LB[e.change]+'</span></td>'
    +'</tr>';
}
</script>
</body></html>`;
}
var CSS3 = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:var(--vscode-editor-background,#1e1e1e);
  --fg:var(--vscode-editor-foreground,#ccc);
  --border:var(--vscode-panel-border,#3c3c3c);
  --card:var(--vscode-editorWidget-background,#252526);
  --hover:var(--vscode-list-hoverBackground,#2a2d2e);
  --accent:var(--vscode-focusBorder,#007acc);
  --red:#e74c3c;--orange:#e67e22;--green:#27ae60;--blue:#3498db;--gray:#7f8c8d;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:20px}
.hdr h1{font-size:1.35em;font-weight:600;margin-bottom:8px}
.diff-files{display:flex;align-items:center;gap:8px}
.arrow{font-size:1.2em;color:var(--gray)}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.muted{color:var(--gray);font-style:italic}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-reg .card-n{color:var(--red)}
.card-imp .card-n{color:var(--green)}
.card-new .card-n{color:var(--blue)}
.card-rem .card-n{color:var(--orange)}
.card-unc .card-n{color:var(--gray)}
.filters{margin-bottom:12px;font-size:.85em}
.filters label{cursor:pointer;display:flex;align-items:center;gap:6px}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:8px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:7px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-title{max-width:360px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.row{transition:background .12s}
.row:hover{background:var(--hover)}
.pill{display:inline-block;padding:2px 8px;border-radius:4px;font-size:.78em;font-weight:600;white-space:nowrap}
.sev-high{background:#c0392b;color:#fff}.sev-medium{background:#e67e22;color:#fff}.sev-low{background:#2980b9;color:#fff}
.st-not_reviewed{background:#34495e;color:#ecf0f1}.st-open{background:#e74c3c;color:#fff}.st-not_a_finding{background:#27ae60;color:#fff}.st-not_applicable{background:#7f8c8d;color:#fff}
.chg-reg{background:rgba(231,76,60,.15);color:#e74c3c}
.chg-imp{background:rgba(39,174,96,.15);color:#27ae60}
.chg-new{background:rgba(52,152,219,.15);color:#3498db}
.chg-rem{background:rgba(230,126,34,.15);color:#e67e22}
.chg-unc{background:var(--card);color:var(--gray)}
tr.chg-reg{border-left:3px solid var(--red)}
tr.chg-imp{border-left:3px solid var(--green)}
tr.chg-new{border-left:3px solid var(--blue)}
tr.chg-rem{border-left:3px solid var(--orange)}
`;

// src/importScapResults.ts
var vscode7 = __toESM(require("vscode"));
var fs7 = __toESM(require("fs"));
var import_xml2js3 = __toESM(require_xml2js());
function toArray3(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}
function txt2(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return txt2(node[0]);
  if (typeof node === "object" && "_" in node) {
    return String(node._);
  }
  return String(node);
}
var RESULT_MAP = {
  "pass": "not_a_finding",
  "fail": "open",
  "error": "open",
  "unknown": "not_reviewed",
  "notapplicable": "not_applicable",
  "notchecked": "not_reviewed",
  "informational": "not_reviewed",
  "fixed": "not_a_finding"
};
function extractRuleId(idref) {
  const m = idref.match(/(SV-\d+r\d+_rule)/);
  return m ? m[1] : idref;
}
async function importScapResults(activeCklbUri) {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode7.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select checklist to update with SCAP results"
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }
  const xmlUris = await vscode7.window.showOpenDialog({
    canSelectMany: false,
    filters: { "XCCDF Results": ["xml"] },
    title: "Select SCAP XCCDF results file"
  });
  if (!xmlUris?.[0]) return;
  const doc = JSON.parse(fs7.readFileSync(cklbUri.fsPath, "utf-8"));
  const xmlContent = fs7.readFileSync(xmlUris[0].fsPath, "utf-8");
  const parsed = await (0, import_xml2js3.parseStringPromise)(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [import_xml2js3.processors.stripPrefix]
  });
  let testResult = null;
  if (parsed.TestResult) {
    testResult = parsed.TestResult;
  } else if (parsed.Benchmark?.TestResult) {
    testResult = parsed.Benchmark.TestResult;
    if (Array.isArray(testResult)) {
      testResult = testResult[testResult.length - 1];
    }
  }
  if (!testResult) {
    throw new Error("No <TestResult> element found in the XCCDF results file.");
  }
  const resultMap = /* @__PURE__ */ new Map();
  for (const rr of toArray3(testResult["rule-result"])) {
    const idref = rr?.$?.idref || "";
    const ruleId = extractRuleId(idref);
    const resultVal = txt2(rr.result).toLowerCase();
    const status = RESULT_MAP[resultVal] || "not_reviewed";
    let detail = "";
    const check = toArray3(rr.check)[0];
    if (check) {
      detail = txt2(check["check-content"]);
    }
    if (!detail && rr.message) {
      detail = txt2(rr.message);
    }
    resultMap.set(ruleId, { status, detail });
  }
  let updated = 0;
  let skipped = 0;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      const result = resultMap.get(rule.rule_id);
      if (result) {
        rule.status = result.status;
        if (result.detail) {
          rule.finding_details = result.detail;
        }
        rule.updatedAt = now;
        updated++;
      } else {
        skipped++;
      }
    }
  }
  fs7.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));
  await vscode7.commands.executeCommand("vscode.openWith", cklbUri, "stigViewer.cklbEditor");
  vscode7.window.showInformationMessage(
    `SCAP import: ${updated} rules updated, ${skipped} unmatched`
  );
}

// src/repoScanner.ts
var vscode8 = __toESM(require("vscode"));
var fs8 = __toESM(require("fs"));
var path4 = __toESM(require("path"));
function loadScanConfig(configPath) {
  const defaultPath = path4.join(__dirname, "..", "scan-patterns.json");
  const cfgPath = configPath || defaultPath;
  if (!fs8.existsSync(cfgPath)) {
    throw new Error(`Scan patterns file not found: ${cfgPath}`);
  }
  return JSON.parse(fs8.readFileSync(cfgPath, "utf-8"));
}
function patternMatchesRule(pattern, rule) {
  const ruleText = [
    rule.rule_title,
    rule.discussion,
    rule.check_content,
    rule.group_title
  ].join(" ").toLowerCase();
  return pattern.ruleKeywords.some((kw) => ruleText.includes(kw.toLowerCase()));
}
function globToRegex(glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "__DOUBLESTAR__").replace(/\*/g, "[^/]*").replace(/__DOUBLESTAR__/g, ".*").replace(/\?/g, ".");
  return new RegExp(`^${escaped}$`);
}
function matchesAnyGlob(filePath, globs) {
  const normalized = filePath.replace(/\\/g, "/");
  return globs.some((g) => {
    if (g.includes("{")) {
      const match = g.match(/^(.*)\{([^}]+)\}(.*)$/);
      if (match) {
        const [, prefix, alts, suffix] = match;
        return alts.split(",").some((alt) => {
          const expanded = prefix + alt.trim() + suffix;
          return globToRegex(expanded).test(normalized);
        });
      }
    }
    return globToRegex(g).test(normalized);
  });
}
function walkDir(dir, excludeGlobs) {
  const results = [];
  function walk(currentDir) {
    let entries;
    try {
      entries = fs8.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path4.join(currentDir, entry.name);
      const relPath = path4.relative(dir, fullPath);
      if (matchesAnyGlob(relPath, excludeGlobs)) {
        continue;
      }
      if (entry.isDirectory()) {
        if (!matchesAnyGlob(relPath + "/", excludeGlobs)) {
          walk(fullPath);
        }
      } else if (entry.isFile()) {
        results.push(fullPath);
      }
    }
  }
  walk(dir);
  return results;
}
function scanFile(filePath, patterns, caseSensitive) {
  let content;
  try {
    const buf = fs8.readFileSync(filePath);
    if (buf.includes(0)) return [];
    content = buf.toString("utf-8");
  } catch {
    return [];
  }
  const lines = content.split("\n");
  const matches = [];
  for (const pat of patterns) {
    const flags = caseSensitive ? "g" : "gi";
    let re;
    try {
      re = new RegExp(pat, flags);
    } catch {
      continue;
    }
    for (let i = 0; i < lines.length; i++) {
      if (re.test(lines[i])) {
        matches.push({
          line: i + 1,
          content: lines[i].trim().substring(0, 200)
        });
      }
      re.lastIndex = 0;
    }
  }
  return matches;
}
async function scanRepo(activeCklbUri) {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode8.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select checklist to populate with scan results"
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }
  const repoUris = await vscode8.window.showOpenDialog({
    canSelectFolders: true,
    canSelectFiles: false,
    canSelectMany: false,
    title: "Select repository folder to scan"
  });
  if (!repoUris?.[0]) return;
  const useCustom = await vscode8.window.showQuickPick(
    ["Use default scan patterns", "Select custom scan-patterns.json"],
    { title: "Scan pattern configuration" }
  );
  if (!useCustom) return;
  let configPath;
  if (useCustom.includes("custom")) {
    const cfgUris = await vscode8.window.showOpenDialog({
      canSelectMany: false,
      filters: { "JSON": ["json"] },
      title: "Select scan-patterns.json"
    });
    if (!cfgUris?.[0]) return;
    configPath = cfgUris[0].fsPath;
  }
  const config = loadScanConfig(configPath);
  const doc = JSON.parse(fs8.readFileSync(cklbUri.fsPath, "utf-8"));
  const repoDir = repoUris[0].fsPath;
  await vscode8.window.withProgress(
    {
      location: vscode8.ProgressLocation.Notification,
      title: "STIG Repo Scan",
      cancellable: true
    },
    async (progress, token) => {
      progress.report({ message: "Discovering files..." });
      const allFiles = walkDir(repoDir, config.excludeGlobs);
      if (token.isCancellationRequested) return;
      const results = [];
      const now = (/* @__PURE__ */ new Date()).toISOString();
      let rulesScanned = 0;
      let rulesUpdated = 0;
      let openCount = 0;
      let nafCount = 0;
      const totalRules = doc.stigs.reduce((n, s) => n + s.rules.length, 0);
      for (const stig of doc.stigs) {
        for (const rule of stig.rules) {
          if (token.isCancellationRequested) return;
          const applicablePatterns = config.scanPatterns.filter(
            (p) => patternMatchesRule(p, rule)
          );
          if (applicablePatterns.length === 0) continue;
          rulesScanned++;
          progress.report({
            message: `Scanning ${rule.group_id} (${rulesScanned}/${totalRules})`,
            increment: 1 / totalRules * 100
          });
          const allMatches = [];
          const matchedPatternNames = [];
          for (const pattern of applicablePatterns) {
            const targetFiles = allFiles.filter((f) => {
              const rel = path4.relative(repoDir, f);
              return matchesAnyGlob(rel, pattern.fileGlobs);
            });
            let patternHasMatch = false;
            for (const file of targetFiles) {
              if (token.isCancellationRequested) return;
              const fileMatches = scanFile(file, pattern.patterns, pattern.caseSensitive);
              if (fileMatches.length > 0) {
                patternHasMatch = true;
                const relFile = path4.relative(repoDir, file);
                for (const m of fileMatches) {
                  allMatches.push({
                    file: relFile,
                    line: m.line,
                    content: m.content,
                    patternId: pattern.id
                  });
                }
              }
            }
            if (patternHasMatch) {
              matchedPatternNames.push(pattern.name);
            }
          }
          const hasOpenPattern = applicablePatterns.some((p) => p.matchMeansOpen);
          const matchingOpenPatterns = applicablePatterns.filter((p) => p.matchMeansOpen);
          const openMatches = allMatches.filter(
            (m) => matchingOpenPatterns.some((p) => p.id === m.patternId)
          );
          let newStatus;
          let findingDetails;
          if (openMatches.length > 0) {
            newStatus = "open";
            openCount++;
            const overridePattern = applicablePatterns.find((p) => p.findingDetailOverride && allMatches.some((m) => m.patternId === p.id));
            if (overridePattern?.findingDetailOverride) {
              const matchList = allMatches.filter((m) => m.patternId === overridePattern.id).slice(0, 20).map((m) => `  ${m.file}:${m.line} \u2014 ${m.content}`).join("\n");
              findingDetails = overridePattern.findingDetailOverride.replace("{count}", String(allMatches.filter((m) => m.patternId === overridePattern.id).length)).replace("{matches}", matchList).replace("{file}", allMatches[0]?.file || "");
            } else {
              const matchList = openMatches.slice(0, 20).map(
                (m) => `  ${m.file}:${m.line} \u2014 ${m.content}`
              ).join("\n");
              const truncated = openMatches.length > 20 ? `
  ... and ${openMatches.length - 20} more` : "";
              findingDetails = `[AUTO-SCAN] Found ${openMatches.length} potential issue(s) matching: ${matchedPatternNames.join(", ")}

${matchList}${truncated}`;
            }
          } else if (hasOpenPattern) {
            newStatus = "not_a_finding";
            nafCount++;
            findingDetails = `[AUTO-SCAN] Scanned ${allFiles.length} files for: ${applicablePatterns.map((p) => p.name).join(", ")}. No issues detected.`;
          } else {
            const infoMatches = allMatches.slice(0, 10);
            if (infoMatches.length > 0) {
              newStatus = "not_reviewed";
              const overridePattern = applicablePatterns.find((p) => p.findingDetailOverride);
              if (overridePattern?.findingDetailOverride) {
                findingDetails = overridePattern.findingDetailOverride.replace("{count}", String(allMatches.length)).replace("{matches}", infoMatches.map((m) => m.file).join(", ")).replace("{file}", infoMatches[0]?.file || "");
              } else {
                findingDetails = `[AUTO-SCAN] Found relevant files: ${infoMatches.map((m) => m.file).join(", ")}. Manual review required.`;
              }
            } else {
              continue;
            }
          }
          rule.status = newStatus;
          rule.finding_details = findingDetails;
          rule.updatedAt = now;
          rulesUpdated++;
        }
      }
      fs8.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));
      await vscode8.commands.executeCommand("vscode.openWith", cklbUri, "stigViewer.cklbEditor");
      const skipped = totalRules - rulesUpdated;
      vscode8.window.showInformationMessage(
        `Scan complete: ${rulesUpdated} rules evaluated (${openCount} open, ${nafCount} not a finding, ${skipped} unmatched \u2014 review manually)`
      );
    }
  );
}

// src/importSarif.ts
var vscode9 = __toESM(require("vscode"));
var fs9 = __toESM(require("fs"));

// src/cweStigMap.ts
var CWE_STIG_MAP = /* @__PURE__ */ new Map([
  // ─── Injection (OWASP A03) ──────────────────────────────────────────
  [89, { cweId: 89, name: "SQL Injection", keywords: ["injection", "SQL", "query", "parameterized", "prepared statement"], stigCategory: "Input Validation" }],
  [78, { cweId: 78, name: "OS Command Injection", keywords: ["injection", "command", "OS command", "execute", "system command"], stigCategory: "Input Validation" }],
  [77, { cweId: 77, name: "Command Injection", keywords: ["injection", "command", "execute"], stigCategory: "Input Validation" }],
  [94, { cweId: 94, name: "Code Injection", keywords: ["injection", "code injection", "eval", "execute"], stigCategory: "Input Validation" }],
  [79, { cweId: 79, name: "Cross-Site Scripting (XSS)", keywords: ["cross-site scripting", "XSS", "script injection", "output encoding", "sanitize"], stigCategory: "Input Validation" }],
  [90, { cweId: 90, name: "LDAP Injection", keywords: ["injection", "LDAP", "directory"], stigCategory: "Input Validation" }],
  [91, { cweId: 91, name: "XML Injection", keywords: ["injection", "XML", "input validation"], stigCategory: "Input Validation" }],
  [917, { cweId: 917, name: "Expression Language Injection", keywords: ["injection", "expression", "template"], stigCategory: "Input Validation" }],
  [116, { cweId: 116, name: "Improper Output Encoding", keywords: ["output encoding", "encoding", "sanitize", "neutralize"], stigCategory: "Input Validation" }],
  [20, { cweId: 20, name: "Improper Input Validation", keywords: ["input validation", "validate", "sanitize", "user input", "untrusted"], stigCategory: "Input Validation" }],
  // ─── Broken Auth (OWASP A07) ────────────────────────────────────────
  [287, { cweId: 287, name: "Improper Authentication", keywords: ["authenticat", "identity", "login", "credential"], stigCategory: "Authentication" }],
  [306, { cweId: 306, name: "Missing Authentication", keywords: ["authenticat", "access control", "login", "identity"], stigCategory: "Authentication" }],
  [798, { cweId: 798, name: "Hardcoded Credentials", keywords: ["credential", "password", "embedded", "hardcoded", "hard-coded"], stigCategory: "Authentication" }],
  [259, { cweId: 259, name: "Hardcoded Password", keywords: ["password", "embedded", "hardcoded", "hard-coded", "credential"], stigCategory: "Authentication" }],
  [522, { cweId: 522, name: "Insufficiently Protected Credentials", keywords: ["credential", "password", "protect", "cleartext", "plain text"], stigCategory: "Authentication" }],
  // ─── Broken Access Control (OWASP A01) ──────────────────────────────
  [862, { cweId: 862, name: "Missing Authorization", keywords: ["authoriz", "access control", "permission", "privilege"], stigCategory: "Access Control" }],
  [863, { cweId: 863, name: "Incorrect Authorization", keywords: ["authoriz", "access control", "permission", "privilege"], stigCategory: "Access Control" }],
  [284, { cweId: 284, name: "Improper Access Control", keywords: ["access control", "permission", "privilege", "authoriz"], stigCategory: "Access Control" }],
  [22, { cweId: 22, name: "Path Traversal", keywords: ["path traversal", "directory traversal", "file access", "canonicalize"], stigCategory: "Access Control" }],
  [434, { cweId: 434, name: "Unrestricted File Upload", keywords: ["file upload", "unrestricted", "file type", "content type"], stigCategory: "Access Control" }],
  [352, { cweId: 352, name: "Cross-Site Request Forgery", keywords: ["CSRF", "cross-site request", "token", "forgery"], stigCategory: "Session Management" }],
  // ─── Cryptographic Failures (OWASP A02) ─────────────────────────────
  [327, { cweId: 327, name: "Broken Crypto Algorithm", keywords: ["cryptograph", "encrypt", "cipher", "algorithm", "FIPS", "approved"], stigCategory: "Cryptography" }],
  [328, { cweId: 328, name: "Weak Hash", keywords: ["hash", "cryptograph", "MD5", "SHA-1", "FIPS"], stigCategory: "Cryptography" }],
  [326, { cweId: 326, name: "Inadequate Encryption Strength", keywords: ["encrypt", "key length", "strength", "cryptograph", "FIPS"], stigCategory: "Cryptography" }],
  [311, { cweId: 311, name: "Missing Encryption of Sensitive Data", keywords: ["encrypt", "sensitive", "cleartext", "plain text", "protect", "transit"], stigCategory: "Cryptography" }],
  [319, { cweId: 319, name: "Cleartext Transmission", keywords: ["cleartext", "plain text", "encrypt", "TLS", "HTTPS", "transit", "transport"], stigCategory: "Cryptography" }],
  // ─── Security Misconfiguration (OWASP A05) ──────────────────────────
  [209, { cweId: 209, name: "Error Info Leak", keywords: ["error", "stack trace", "diagnostic", "verbose", "information exposure"], stigCategory: "Error Handling" }],
  [215, { cweId: 215, name: "Debug Info Leak", keywords: ["debug", "diagnostic", "information exposure", "verbose"], stigCategory: "Error Handling" }],
  [532, { cweId: 532, name: "Log Info Leak", keywords: ["log", "sensitive", "information exposure", "audit"], stigCategory: "Logging" }],
  [614, { cweId: 614, name: "Missing Secure Cookie Flag", keywords: ["cookie", "secure flag", "session", "httpOnly"], stigCategory: "Session Management" }],
  [1004, { cweId: 1004, name: "Missing HttpOnly Cookie Flag", keywords: ["cookie", "httpOnly", "session", "script access"], stigCategory: "Session Management" }],
  // ─── Buffer Overflow (V-70277) ──────────────────────────────────────
  [120, { cweId: 120, name: "Buffer Overflow", keywords: ["buffer overflow", "buffer", "memory", "bounds"], stigCategory: "Buffer Handling" }],
  [119, { cweId: 119, name: "Buffer Boundary Violation", keywords: ["buffer", "boundary", "memory", "bounds check"], stigCategory: "Buffer Handling" }],
  [787, { cweId: 787, name: "Out-of-bounds Write", keywords: ["buffer", "out-of-bounds", "memory", "write"], stigCategory: "Buffer Handling" }],
  [125, { cweId: 125, name: "Out-of-bounds Read", keywords: ["buffer", "out-of-bounds", "memory", "read"], stigCategory: "Buffer Handling" }],
  [190, { cweId: 190, name: "Integer Overflow", keywords: ["integer overflow", "overflow", "arithmetic"], stigCategory: "Buffer Handling" }],
  // ─── Race Conditions (V-70185) ──────────────────────────────────────
  [362, { cweId: 362, name: "Race Condition", keywords: ["race condition", "concurren", "synchroniz", "TOCTOU", "time-of-check"], stigCategory: "Concurrency" }],
  [367, { cweId: 367, name: "TOCTOU Race Condition", keywords: ["race condition", "TOCTOU", "time-of-check", "time-of-use"], stigCategory: "Concurrency" }],
  // ─── Error Handling (V-70391) ───────────────────────────────────────
  [755, { cweId: 755, name: "Improper Exception Handling", keywords: ["error handling", "exception", "catch", "handle error"], stigCategory: "Error Handling" }],
  [754, { cweId: 754, name: "Improper Check for Unusual Conditions", keywords: ["error handling", "exception", "unusual condition", "error check"], stigCategory: "Error Handling" }],
  [390, { cweId: 390, name: "Detection of Error without Action", keywords: ["error handling", "exception", "ignore", "catch"], stigCategory: "Error Handling" }],
  // ─── Insecure Deserialization (OWASP A08) ───────────────────────────
  [502, { cweId: 502, name: "Insecure Deserialization", keywords: ["deserializ", "serializ", "untrusted data", "marshal", "pickle"], stigCategory: "Input Validation" }],
  // ─── Vulnerable Components (OWASP A06) ──────────────────────────────
  [1104, { cweId: 1104, name: "Unmaintained Third-Party Component", keywords: ["third-party", "component", "dependency", "library", "vulnerability", "patch"], stigCategory: "Dependencies" }],
  [937, { cweId: 937, name: "Known Vulnerable Component", keywords: ["known vulnerabilit", "component", "dependency", "library", "patch", "CVE"], stigCategory: "Dependencies" }],
  // ─── Logging & Monitoring (OWASP A09) ───────────────────────────────
  [778, { cweId: 778, name: "Insufficient Logging", keywords: ["log", "audit", "monitor", "record", "event"], stigCategory: "Logging" }],
  [117, { cweId: 117, name: "Log Injection", keywords: ["log", "injection", "audit", "forging"], stigCategory: "Logging" }]
]);

// src/importSarif.ts
function extractCweIds(result, ruleDesc) {
  const ids = [];
  if (result.taxa) {
    for (const t of result.taxa) {
      const n = parseCweId(t.id);
      if (n) ids.push(n);
    }
  }
  if (ruleDesc?.relationships) {
    for (const rel of ruleDesc.relationships) {
      if (rel.target.toolComponent?.name?.toUpperCase() === "CWE" || rel.target.id.startsWith("CWE-")) {
        const n = parseCweId(rel.target.id);
        if (n) ids.push(n);
      }
    }
  }
  if (ruleDesc?.properties?.tags) {
    for (const tag of ruleDesc.properties.tags) {
      const m = tag.match(/cwe[/-](\d+)/i);
      if (m) ids.push(parseInt(m[1], 10));
    }
  }
  const fromId = parseCweId(result.ruleId);
  if (fromId) ids.push(fromId);
  return [...new Set(ids)];
}
function parseCweId(s) {
  const m = s.match(/(?:CWE-?)(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}
async function importSarif(activeCklbUri) {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode9.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select checklist to populate with SARIF findings"
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }
  const sarifUris = await vscode9.window.showOpenDialog({
    canSelectMany: true,
    filters: { "SARIF": ["sarif", "json"] },
    title: "Select SARIF results file(s)"
  });
  if (!sarifUris?.length) return;
  const doc = JSON.parse(fs9.readFileSync(cklbUri.fsPath, "utf-8"));
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const allRules = [];
  for (const stig of doc.stigs) {
    allRules.push(...stig.rules);
  }
  const ruleFindings = /* @__PURE__ */ new Map();
  let totalResults = 0;
  let mappedResults = 0;
  let unmappedCwes = /* @__PURE__ */ new Set();
  const tools = [];
  for (const uri of sarifUris) {
    const sarif = JSON.parse(fs9.readFileSync(uri.fsPath, "utf-8"));
    for (const run of sarif.runs) {
      const toolName = run.tool.driver.name;
      if (!tools.includes(toolName)) tools.push(toolName);
      const ruleMap = /* @__PURE__ */ new Map();
      if (run.tool.driver.rules) {
        for (const r of run.tool.driver.rules) {
          ruleMap.set(r.id, r);
        }
      }
      for (const result of run.results) {
        totalResults++;
        const ruleDesc = ruleMap.get(result.ruleId);
        const cweIds = extractCweIds(result, ruleDesc);
        if (cweIds.length === 0) continue;
        const loc = result.locations?.[0]?.physicalLocation;
        const file = loc?.artifactLocation?.uri || "";
        const line = loc?.region?.startLine || 0;
        let matched = false;
        for (const cweId of cweIds) {
          const mapping = CWE_STIG_MAP.get(cweId);
          if (!mapping) {
            unmappedCwes.add(cweId);
            continue;
          }
          for (const rule of allRules) {
            const ruleText = `${rule.rule_title} ${rule.discussion} ${rule.check_content}`.toLowerCase();
            if (mapping.keywords.some((kw) => ruleText.includes(kw.toLowerCase()))) {
              if (!ruleFindings.has(rule.uuid)) {
                ruleFindings.set(rule.uuid, []);
              }
              ruleFindings.get(rule.uuid).push({
                tool: toolName,
                cwe: cweId,
                file: file.replace(/^file:\/\//, ""),
                line,
                message: result.message.text.substring(0, 300)
              });
              matched = true;
            }
          }
        }
        if (matched) mappedResults++;
      }
    }
  }
  let openCount = 0;
  for (const [uuid, findings] of ruleFindings) {
    const rule = allRules.find((r) => r.uuid === uuid);
    if (!rule) continue;
    rule.status = "open";
    openCount++;
    const grouped = /* @__PURE__ */ new Map();
    for (const f of findings) {
      const key = `CWE-${f.cwe}`;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(f);
    }
    const sections = [`[SARIF IMPORT] ${findings.length} finding(s) from: ${tools.join(", ")}
`];
    for (const [cwe, items] of grouped) {
      const cweName = CWE_STIG_MAP.get(parseInt(cwe.replace("CWE-", "")))?.name || cwe;
      sections.push(`${cwe} \u2014 ${cweName}:`);
      const shown = items.slice(0, 10);
      for (const item of shown) {
        sections.push(`  ${item.file}:${item.line} \u2014 ${item.message}`);
      }
      if (items.length > 10) {
        sections.push(`  ... and ${items.length - 10} more`);
      }
    }
    rule.finding_details = sections.join("\n");
    rule.updatedAt = now;
  }
  fs9.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));
  await vscode9.commands.executeCommand("vscode.openWith", cklbUri, "stigViewer.cklbEditor");
  let msg = `SARIF import: ${totalResults} findings processed, ${mappedResults} mapped to ${openCount} rules`;
  if (unmappedCwes.size > 0) {
    msg += ` (${unmappedCwes.size} unmapped CWEs: ${[...unmappedCwes].slice(0, 5).map((c) => `CWE-${c}`).join(", ")}${unmappedCwes.size > 5 ? "..." : ""})`;
  }
  vscode9.window.showInformationMessage(msg);
}

// src/importAudit.ts
var vscode10 = __toESM(require("vscode"));
var fs10 = __toESM(require("fs"));
function parseNpmAudit(data) {
  const entries = [];
  if (!data.vulnerabilities) return entries;
  for (const [name, vuln] of Object.entries(data.vulnerabilities)) {
    for (const v of vuln.via) {
      if (typeof v === "object") {
        entries.push({
          name,
          severity: v.severity,
          title: v.title,
          url: v.url,
          cwe: v.cwe?.[0],
          fixAvailable: vuln.fixAvailable ? "Yes" : "No"
        });
      }
    }
  }
  return entries;
}
function parsePipAudit(data) {
  const entries = [];
  const items = Array.isArray(data) ? data : data.dependencies || [];
  for (const pkg of items) {
    if (!pkg.vulns?.length) continue;
    for (const v of pkg.vulns) {
      entries.push({
        name: pkg.name,
        version: pkg.version,
        id: v.id,
        description: v.description,
        fixAvailable: v.fix_versions?.length ? v.fix_versions.join(", ") : "No"
      });
    }
  }
  return entries;
}
function detectAndParse(data) {
  if (data.vulnerabilities && typeof data.vulnerabilities === "object") {
    return { entries: parseNpmAudit(data), source: "npm audit" };
  }
  if (Array.isArray(data) && data[0]?.vulns !== void 0) {
    return { entries: parsePipAudit(data), source: "pip-audit" };
  }
  if (data.dependencies && Array.isArray(data.dependencies)) {
    return { entries: parsePipAudit(data), source: "pip-audit" };
  }
  if (Array.isArray(data)) {
    return {
      entries: data.map((d) => ({
        name: d.name || d.package || d.module || "",
        version: d.version || d.installed_version || "",
        severity: d.severity || d.level || "",
        title: d.title || d.advisory || d.description || "",
        id: d.id || d.cve || d.advisory_id || "",
        url: d.url || d.reference || ""
      })),
      source: "dependency audit"
    };
  }
  throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.");
}
async function importAudit(activeCklbUri) {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode10.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select checklist to populate with audit findings"
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }
  const auditUris = await vscode10.window.showOpenDialog({
    canSelectMany: false,
    filters: { "JSON": ["json"] },
    title: "Select dependency audit JSON (npm audit, pip-audit, etc.)"
  });
  if (!auditUris?.[0]) return;
  const doc = JSON.parse(fs10.readFileSync(cklbUri.fsPath, "utf-8"));
  const auditData = JSON.parse(fs10.readFileSync(auditUris[0].fsPath, "utf-8"));
  const { entries, source } = detectAndParse(auditData);
  if (entries.length === 0) {
    vscode10.window.showInformationMessage(`No vulnerabilities found in ${source} output.`);
    return;
  }
  const depKeywords = [
    "third-party",
    "component",
    "dependency",
    "library",
    "vulnerability",
    "known vulnerabilit",
    "patch",
    "update",
    "unsupported",
    "software composition",
    "package",
    "module",
    "open source"
  ];
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let matched = 0;
  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      const ruleText = `${rule.rule_title} ${rule.discussion} ${rule.check_content}`.toLowerCase();
      const isDepRule = depKeywords.some((kw) => ruleText.includes(kw));
      if (!isDepRule) continue;
      matched++;
      rule.status = "open";
      rule.updatedAt = now;
      const sevCounts = {};
      for (const e of entries) {
        const sev = (e.severity || "unknown").toLowerCase();
        sevCounts[sev] = (sevCounts[sev] || 0) + 1;
      }
      const sevSummary = Object.entries(sevCounts).map(([s, n]) => `${n} ${s}`).join(", ");
      const lines = [
        `[AUDIT IMPORT] ${entries.length} vulnerable dependencies found via ${source}`,
        `Severity breakdown: ${sevSummary}
`
      ];
      const shown = entries.slice(0, 25);
      for (const e of shown) {
        const parts = [e.name];
        if (e.version) parts.push(`v${e.version}`);
        if (e.severity) parts.push(`[${e.severity}]`);
        if (e.title) parts.push(`\u2014 ${e.title}`);
        if (e.id) parts.push(`(${e.id})`);
        if (e.fixAvailable && e.fixAvailable !== "No") parts.push(`fix: ${e.fixAvailable}`);
        lines.push(`  ${parts.join(" ")}`);
      }
      if (entries.length > 25) {
        lines.push(`  ... and ${entries.length - 25} more`);
      }
      rule.finding_details = lines.join("\n");
    }
  }
  fs10.writeFileSync(cklbUri.fsPath, JSON.stringify(doc, null, 2));
  await vscode10.commands.executeCommand("vscode.openWith", cklbUri, "stigViewer.cklbEditor");
  if (matched > 0) {
    vscode10.window.showInformationMessage(
      `Imported ${entries.length} vulnerabilities from ${source} \u2192 ${matched} STIG rule(s) marked open`
    );
  } else {
    vscode10.window.showWarningMessage(
      `Imported ${entries.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`
    );
  }
}

// src/evidencePackage.ts
var vscode11 = __toESM(require("vscode"));
var fs11 = __toESM(require("fs"));
var path5 = __toESM(require("path"));
var zlib = __toESM(require("zlib"));
var ZipBuilder = class {
  constructor() {
    this.files = [];
  }
  addFile(name, content) {
    const data = typeof content === "string" ? Buffer.from(content, "utf-8") : content;
    const compressedData = zlib.deflateRawSync(data);
    const crc = this.crc32(data);
    this.files.push({ name, data, crc, compressedData });
  }
  build() {
    const parts = [];
    const centralParts = [];
    let offset = 0;
    for (const file of this.files) {
      const nameBuffer = Buffer.from(file.name, "utf-8");
      const local = Buffer.alloc(30 + nameBuffer.length);
      local.writeUInt32LE(67324752, 0);
      local.writeUInt16LE(20, 4);
      local.writeUInt16LE(0, 6);
      local.writeUInt16LE(8, 8);
      local.writeUInt16LE(0, 10);
      local.writeUInt16LE(0, 12);
      local.writeUInt32LE(file.crc, 14);
      local.writeUInt32LE(file.compressedData.length, 18);
      local.writeUInt32LE(file.data.length, 22);
      local.writeUInt16LE(nameBuffer.length, 26);
      local.writeUInt16LE(0, 28);
      nameBuffer.copy(local, 30);
      const central = Buffer.alloc(46 + nameBuffer.length);
      central.writeUInt32LE(33639248, 0);
      central.writeUInt16LE(20, 4);
      central.writeUInt16LE(20, 6);
      central.writeUInt16LE(0, 8);
      central.writeUInt16LE(8, 10);
      central.writeUInt16LE(0, 12);
      central.writeUInt16LE(0, 14);
      central.writeUInt32LE(file.crc, 16);
      central.writeUInt32LE(file.compressedData.length, 20);
      central.writeUInt32LE(file.data.length, 24);
      central.writeUInt16LE(nameBuffer.length, 28);
      central.writeUInt16LE(0, 30);
      central.writeUInt16LE(0, 32);
      central.writeUInt16LE(0, 34);
      central.writeUInt16LE(0, 36);
      central.writeUInt32LE(0, 38);
      central.writeUInt32LE(offset, 42);
      nameBuffer.copy(central, 46);
      parts.push(local, file.compressedData);
      centralParts.push(central);
      offset += local.length + file.compressedData.length;
    }
    const centralDirOffset = offset;
    let centralDirSize = 0;
    for (const cp of centralParts) {
      parts.push(cp);
      centralDirSize += cp.length;
    }
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(101010256, 0);
    eocd.writeUInt16LE(0, 4);
    eocd.writeUInt16LE(0, 6);
    eocd.writeUInt16LE(this.files.length, 8);
    eocd.writeUInt16LE(this.files.length, 10);
    eocd.writeUInt32LE(centralDirSize, 12);
    eocd.writeUInt32LE(centralDirOffset, 16);
    eocd.writeUInt16LE(0, 20);
    parts.push(eocd);
    return Buffer.concat(parts);
  }
  crc32(buf) {
    let crc = 4294967295;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = crc >>> 1 ^ (crc & 1 ? 3988292384 : 0);
      }
    }
    return (crc ^ 4294967295) >>> 0;
  }
};
function buildSummaryReport(data) {
  const lines = [];
  lines.push("STIG ASSESSMENT EVIDENCE PACKAGE");
  lines.push("================================\n");
  lines.push(`Generated: ${(/* @__PURE__ */ new Date()).toISOString()}`);
  lines.push(`Title: ${data.title}`);
  lines.push(`Host: ${data.target_data.host_name || "N/A"}`);
  lines.push(`IP: ${data.target_data.ip_address || "N/A"}`);
  lines.push(`FQDN: ${data.target_data.fqdn || "N/A"}
`);
  for (const stig of data.stigs) {
    const counts = { open: 0, not_a_finding: 0, not_reviewed: 0, not_applicable: 0, high: 0, medium: 0, low: 0 };
    for (const r of stig.rules) {
      counts[r.status]++;
      counts[r.severity]++;
    }
    const total = stig.rules.length;
    const completion = total ? Math.round((counts.not_a_finding + counts.not_applicable) / total * 100) : 0;
    lines.push(`STIG: ${stig.stig_name}`);
    lines.push(`  ${stig.release_info} | Version ${stig.version}`);
    lines.push(`  Total Rules: ${total}`);
    lines.push(`  Open: ${counts.open} | Not a Finding: ${counts.not_a_finding} | Not Reviewed: ${counts.not_reviewed} | Not Applicable: ${counts.not_applicable}`);
    lines.push(`  CAT I: ${counts.high} | CAT II: ${counts.medium} | CAT III: ${counts.low}`);
    lines.push(`  Completion: ${completion}%
`);
    const openRules = stig.rules.filter((r) => r.status === "open");
    if (openRules.length > 0) {
      lines.push("  OPEN FINDINGS:");
      for (const r of openRules) {
        const cat = r.severity === "high" ? "I" : r.severity === "medium" ? "II" : "III";
        lines.push(`    [CAT ${cat}] ${r.group_id} \u2014 ${r.rule_title}`);
        if (r.finding_details) {
          const detail = r.finding_details.substring(0, 200).replace(/\n/g, "\n      ");
          lines.push(`      ${detail}`);
        }
      }
      lines.push("");
    }
  }
  lines.push("\nPACKAGE CONTENTS:");
  lines.push("  checklist.cklb    \u2014 Full checklist in JSON format");
  lines.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format");
  lines.push("  summary.csv       \u2014 All rules with status and findings");
  lines.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)");
  lines.push("  report.txt        \u2014 This summary report");
  return lines.join("\n");
}
async function exportEvidence(activeCklbUri) {
  let cklbUri = activeCklbUri;
  if (!cklbUri) {
    const uris = await vscode11.window.showOpenDialog({
      canSelectMany: false,
      filters: { "STIG Checklist": ["cklb"] },
      title: "Select checklist to package as evidence"
    });
    if (!uris?.[0]) return;
    cklbUri = uris[0];
  }
  const doc = JSON.parse(fs11.readFileSync(cklbUri.fsPath, "utf-8"));
  const baseName = path5.basename(cklbUri.fsPath, ".cklb");
  const zip = new ZipBuilder();
  zip.addFile("checklist.cklb", JSON.stringify(doc, null, 2));
  zip.addFile("checklist.ckl", buildCkl(doc));
  zip.addFile("summary.csv", buildCsv(doc));
  zip.addFile("poam.csv", buildPoam(doc));
  zip.addFile("report.txt", buildSummaryReport(doc));
  const attachMore = await vscode11.window.showQuickPick(
    ["Save package now", "Attach additional evidence files first"],
    { title: "Evidence package" }
  );
  if (attachMore?.includes("Attach")) {
    const extraUris = await vscode11.window.showOpenDialog({
      canSelectMany: true,
      title: "Select additional evidence files (screenshots, scan reports, etc.)"
    });
    if (extraUris) {
      for (const u of extraUris) {
        const name = "evidence/" + path5.basename(u.fsPath);
        zip.addFile(name, fs11.readFileSync(u.fsPath));
      }
    }
  }
  const defaultName = `${baseName}_evidence_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.zip`;
  const saveUri = await vscode11.window.showSaveDialog({
    defaultUri: vscode11.Uri.file(path5.join(path5.dirname(cklbUri.fsPath), defaultName)),
    filters: { "ZIP Archive": ["zip"] },
    title: "Save Evidence Package"
  });
  if (!saveUri) return;
  fs11.writeFileSync(saveUri.fsPath, zip.build());
  const totalRules = doc.stigs.reduce((n, s) => n + s.rules.length, 0);
  const openCount = doc.stigs.reduce((n, s) => n + s.rules.filter((r) => r.status === "open").length, 0);
  vscode11.window.showInformationMessage(
    `Evidence package saved: ${totalRules} rules, ${openCount} open findings \u2192 ${path5.basename(saveUri.fsPath)}`
  );
}

// src/crosswalkPanel.ts
var vscode12 = __toESM(require("vscode"));
var fs12 = __toESM(require("fs"));
var path6 = __toESM(require("path"));

// src/cciNistMap.ts
var import_xml2js4 = __toESM(require_xml2js());
var CCI_TO_NIST = {
  // ── Access Control (AC) ─────────────────────────────────────────────────
  "CCI-000005": { control: "AC-2", title: "Account Management", definition: "The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts." },
  "CCI-000009": { control: "AC-2", title: "Account Management", definition: "The organization reviews information system accounts for compliance with account management requirements." },
  "CCI-000010": { control: "AC-2", title: "Account Management", definition: "The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts." },
  "CCI-000012": { control: "AC-2", title: "Account Management", definition: "The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions." },
  "CCI-000015": { control: "AC-2 (1)", title: "Account Management | Automated System Account Management", definition: "The organization employs automated mechanisms to support the management of information system accounts." },
  "CCI-000017": { control: "AC-2 (2)", title: "Account Management | Removal of Temporary/Emergency Accounts", definition: "The information system automatically removes or disables temporary and emergency accounts after a defined time period." },
  "CCI-000018": { control: "AC-2 (3)", title: "Account Management | Disable Inactive Accounts", definition: "The information system automatically disables inactive accounts after a defined time period." },
  "CCI-000019": { control: "AC-2 (3)", title: "Account Management | Disable Inactive Accounts", definition: "The organization defines the time period after which the information system automatically disables inactive accounts." },
  "CCI-000020": { control: "AC-2 (3)", title: "Account Management | Disable Inactive Accounts", definition: "The information system automatically disables inactive accounts after the organization-defined time period." },
  "CCI-000023": { control: "AC-2 (4)", title: "Account Management | Automated Audit Actions", definition: "The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles." },
  "CCI-000032": { control: "AC-3", title: "Access Enforcement", definition: "The information system enforces approved authorizations for logical access to information and system resources." },
  "CCI-000033": { control: "AC-3 (3)", title: "Access Enforcement | Mandatory Access Control", definition: "The information system enforces organization-defined mandatory access control policy." },
  "CCI-000038": { control: "AC-6", title: "Least Privilege", definition: "The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks." },
  "CCI-000039": { control: "AC-6 (1)", title: "Least Privilege | Authorize Access to Security Functions", definition: "The organization explicitly authorizes access to organization-defined security functions and security-relevant information." },
  "CCI-000040": { control: "AC-6 (1)", title: "Least Privilege | Authorize Access to Security Functions", definition: "The organization explicitly authorizes access to organization-defined security functions." },
  "CCI-000044": { control: "AC-7", title: "Unsuccessful Logon Attempts", definition: "The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period." },
  "CCI-000045": { control: "AC-7", title: "Unsuccessful Logon Attempts", definition: "The organization defines the number of consecutive invalid logon attempts allowed." },
  "CCI-000047": { control: "AC-7", title: "Unsuccessful Logon Attempts", definition: "The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded." },
  "CCI-000048": { control: "AC-8", title: "System Use Notification", definition: "The information system displays an approved system use notification message or banner before granting access." },
  "CCI-000050": { control: "AC-8", title: "System Use Notification", definition: "The information system retains the notification message or banner on the screen until users acknowledge the usage conditions." },
  "CCI-000054": { control: "AC-10", title: "Concurrent Session Control", definition: "The information system limits the number of concurrent sessions for each account to an organization-defined number." },
  "CCI-000056": { control: "AC-11", title: "Session Lock", definition: "The information system initiates a session lock after the organization-defined time period of inactivity." },
  "CCI-000057": { control: "AC-11", title: "Session Lock", definition: "The information system provides the capability for users to initiate a session lock for display devices." },
  "CCI-000058": { control: "AC-11 (1)", title: "Session Lock | Pattern-Hiding Displays", definition: "The information system conceals, via the session lock, information previously visible on the display." },
  "CCI-000060": { control: "AC-11", title: "Session Lock", definition: "The organization defines the time period of inactivity after which the information system initiates a session lock." },
  "CCI-000068": { control: "AC-17 (2)", title: "Remote Access | Protection of Confidentiality/Integrity Using Encryption", definition: "The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions." },
  "CCI-000070": { control: "AC-17 (2)", title: "Remote Access | Protection of Confidentiality/Integrity Using Encryption", definition: "The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions." },
  "CCI-000082": { control: "AC-17 (9)", title: "Remote Access | Disconnect/Disable Access", definition: "The organization provides the capability to expeditiously disconnect or disable remote access." },
  "CCI-000213": { control: "AC-3", title: "Access Enforcement", definition: "The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies." },
  "CCI-001084": { control: "SC-3", title: "Security Function Isolation", definition: "The information system isolates security functions from nonsecurity functions." },
  // ── Audit and Accountability (AU) ───────────────────────────────────────
  "CCI-000126": { control: "AU-2", title: "Audit Events", definition: "The organization determines that the information system is capable of auditing organization-defined auditable events." },
  "CCI-000130": { control: "AU-3", title: "Content of Audit Records", definition: "The information system generates audit records containing information that establishes what type of event occurred." },
  "CCI-000131": { control: "AU-3", title: "Content of Audit Records", definition: "The information system generates audit records containing information that establishes when an event occurred." },
  "CCI-000132": { control: "AU-3", title: "Content of Audit Records", definition: "The information system generates audit records containing information that establishes where the event occurred." },
  "CCI-000133": { control: "AU-3", title: "Content of Audit Records", definition: "The information system generates audit records containing information that establishes the source of the event." },
  "CCI-000134": { control: "AU-3", title: "Content of Audit Records", definition: "The information system generates audit records containing information that establishes the outcome of the event." },
  "CCI-000135": { control: "AU-3 (1)", title: "Content of Audit Records | Additional Audit Information", definition: "The information system generates audit records containing organization-defined additional, more detailed information." },
  "CCI-000136": { control: "AU-3 (2)", title: "Content of Audit Records | Centralized Management", definition: "The information system provides centralized management and configuration of the content to be captured in audit records." },
  "CCI-000139": { control: "AU-5", title: "Response to Audit Processing Failures", definition: "The information system alerts designated personnel in the event of an audit processing failure." },
  "CCI-000140": { control: "AU-5", title: "Response to Audit Processing Failures", definition: "The information system takes organization-defined actions in the event of an audit processing failure." },
  "CCI-000154": { control: "AU-6", title: "Audit Review, Analysis, and Reporting", definition: "The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity." },
  "CCI-000158": { control: "AU-7", title: "Audit Reduction and Report Generation", definition: "The information system provides an audit reduction and report generation capability." },
  "CCI-000162": { control: "AU-9", title: "Protection of Audit Information", definition: "The information system protects audit information from unauthorized access." },
  "CCI-000163": { control: "AU-9", title: "Protection of Audit Information", definition: "The information system protects audit information from unauthorized modification." },
  "CCI-000164": { control: "AU-9", title: "Protection of Audit Information", definition: "The information system protects audit information from unauthorized deletion." },
  "CCI-000166": { control: "AU-10", title: "Non-repudiation", definition: "The information system protects against an individual falsely denying having performed a particular action." },
  "CCI-000167": { control: "AU-10", title: "Non-repudiation", definition: "The information system provides irrefutable evidence that a specific action was performed." },
  "CCI-000169": { control: "AU-12", title: "Audit Generation", definition: "The information system provides audit record generation capability for the auditable events defined." },
  "CCI-000171": { control: "AU-12", title: "Audit Generation", definition: "The information system allows designated personnel to select which auditable events are to be audited by specific components." },
  "CCI-000172": { control: "AU-12 (3)", title: "Audit Generation | Changes by Authorized Individuals", definition: "The information system provides the capability for authorized individuals to change the auditing to be performed on specific components." },
  "CCI-001464": { control: "AU-4", title: "Audit Storage Capacity", definition: "The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded." },
  "CCI-001487": { control: "AU-9", title: "Protection of Audit Information", definition: "The information system protects audit information and audit tools from unauthorized access, modification, and deletion." },
  "CCI-001493": { control: "AU-9 (4)", title: "Protection of Audit Information | Access by Subset of Privileged Users", definition: "The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users." },
  "CCI-001494": { control: "AU-9 (4)", title: "Protection of Audit Information | Access by Subset of Privileged Users", definition: "The organization authorizes access to management of audit functionality to only a defined subset of privileged users." },
  "CCI-001495": { control: "AU-9 (4)", title: "Protection of Audit Information | Access by Subset of Privileged Users", definition: "The organization defines the subset of privileged users authorized for audit management." },
  "CCI-001496": { control: "AU-9 (5)", title: "Protection of Audit Information | Dual Authorization", definition: "The organization enforces dual authorization for movement and/or deletion of organization-defined audit information." },
  "CCI-001851": { control: "AU-4 (1)", title: "Audit Storage Capacity | Transfer to Alternate Storage", definition: "The information system off-loads audit records onto a different system or media." },
  "CCI-001855": { control: "AU-5 (1)", title: "Response to Audit Processing Failures | Audit Storage Capacity", definition: "The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage." },
  "CCI-001857": { control: "AU-5 (2)", title: "Response to Audit Processing Failures | Real-Time Alerts", definition: "The information system provides an alert in real-time to organization-defined personnel when audit failure events occur." },
  "CCI-001858": { control: "AU-5 (2)", title: "Response to Audit Processing Failures | Real-Time Alerts", definition: "The organization defines the audit failure events requiring real-time alerts." },
  // ── Configuration Management (CM) ───────────────────────────────────────
  "CCI-000345": { control: "CM-5", title: "Access Restrictions for Change", definition: "The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system." },
  "CCI-000363": { control: "CM-6", title: "Configuration Settings", definition: "The organization defines security configuration settings for the information system components." },
  "CCI-000366": { control: "CM-6", title: "Configuration Settings", definition: "The organization ensures that the information system components comply with organization-defined configuration settings." },
  "CCI-000370": { control: "CM-6", title: "Configuration Settings", definition: "The organization establishes and documents configuration settings for information technology products employed within the information system." },
  "CCI-000379": { control: "CM-7", title: "Least Functionality", definition: "The organization configures the information system to provide only essential capabilities." },
  "CCI-000381": { control: "CM-7", title: "Least Functionality", definition: "The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services." },
  "CCI-000382": { control: "CM-7", title: "Least Functionality", definition: "The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services." },
  "CCI-001749": { control: "CM-5 (3)", title: "Access Restrictions for Change | Signed Components", definition: "The information system prevents the installation of software and firmware components without verification that the component has been digitally signed." },
  "CCI-001812": { control: "CM-11", title: "User-Installed Software", definition: "The organization defines policies governing the installation of software by users." },
  "CCI-001813": { control: "CM-5 (1)", title: "Access Restrictions for Change | Automated Access Enforcement/Auditing", definition: "The information system enforces access restrictions and supports auditing of the enforcement actions." },
  "CCI-001814": { control: "CM-5 (1)", title: "Access Restrictions for Change | Automated Access Enforcement/Auditing", definition: "The information system supports auditing of the enforcement actions." },
  // ── Identification and Authentication (IA) ──────────────────────────────
  "CCI-000185": { control: "IA-5 (2)", title: "Authenticator Management | PKI-Based Authentication", definition: "The information system validates certificates by constructing and verifying a certification path." },
  "CCI-000186": { control: "IA-5 (2)", title: "Authenticator Management | PKI-Based Authentication", definition: "The information system enforces authorized access to the corresponding private key." },
  "CCI-000187": { control: "IA-5 (2)", title: "Authenticator Management | PKI-Based Authentication", definition: "The information system maps the authenticated identity to the account of the individual or group." },
  "CCI-000192": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces password complexity by the minimum number of uppercase characters used." },
  "CCI-000193": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces password complexity by the minimum number of lowercase characters used." },
  "CCI-000194": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces password complexity by the minimum number of numeric characters used." },
  "CCI-000195": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces password complexity by the minimum number of special characters used." },
  "CCI-000196": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system, for password-based authentication, stores only cryptographically-protected passwords." },
  "CCI-000197": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system, for password-based authentication, transmits only cryptographically-protected passwords." },
  "CCI-000198": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces minimum password lifetime restrictions." },
  "CCI-000199": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces maximum password lifetime restrictions." },
  "CCI-000200": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system prohibits password reuse for a defined number of generations." },
  "CCI-000205": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces minimum password length." },
  "CCI-000764": { control: "IA-2", title: "Identification and Authentication (Organizational Users)", definition: "The information system uniquely identifies and authenticates organizational users." },
  "CCI-000765": { control: "IA-2 (1)", title: "Identification and Authentication | Multi-Factor Authentication to Privileged Accounts", definition: "The information system implements multifactor authentication for network access to privileged accounts." },
  "CCI-000766": { control: "IA-2 (2)", title: "Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts", definition: "The information system implements multifactor authentication for network access to non-privileged accounts." },
  "CCI-000767": { control: "IA-2 (3)", title: "Identification and Authentication | Local Access to Privileged Accounts", definition: "The information system implements multifactor authentication for local access to privileged accounts." },
  "CCI-000768": { control: "IA-2 (4)", title: "Identification and Authentication | Local Access to Non-Privileged Accounts", definition: "The information system implements multifactor authentication for local access to non-privileged accounts." },
  "CCI-000770": { control: "IA-2 (5)", title: "Identification and Authentication | Group Authentication", definition: "The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed." },
  "CCI-000778": { control: "IA-3", title: "Device Identification and Authentication", definition: "The information system uniquely identifies and authenticates devices before establishing a connection." },
  "CCI-000795": { control: "IA-4", title: "Identifier Management", definition: "The organization manages information system identifiers for users and devices." },
  "CCI-000803": { control: "IA-7", title: "Cryptographic Module Authentication", definition: "The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws." },
  "CCI-001941": { control: "IA-2 (8)", title: "Identification and Authentication | Network Access to Privileged Accounts \u2014 Replay Resistant", definition: "The information system implements replay-resistant authentication mechanisms for network access to privileged accounts." },
  "CCI-001942": { control: "IA-2 (9)", title: "Identification and Authentication | Network Access to Non-Privileged Accounts \u2014 Replay Resistant", definition: "The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts." },
  "CCI-001953": { control: "IA-2 (12)", title: "Identification and Authentication | Acceptance of PIV Credentials", definition: "The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials." },
  "CCI-001954": { control: "IA-2 (12)", title: "Identification and Authentication | Acceptance of PIV Credentials", definition: "The information system accepts PIV credentials from other agencies." },
  "CCI-002007": { control: "IA-5", title: "Authenticator Management", definition: "The organization manages information system authenticators." },
  "CCI-002009": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system, for password-based authentication, enforces the password complexity defined by the organization." },
  "CCI-002010": { control: "IA-5 (1)", title: "Authenticator Management | Password-Based Authentication", definition: "The information system enforces the number of characters that are changed when new passwords are created." },
  "CCI-002041": { control: "IA-11", title: "Re-authentication", definition: "The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication." },
  // ── Maintenance (MA) ────────────────────────────────────────────────────
  "CCI-000877": { control: "MA-4", title: "Nonlocal Maintenance", definition: "The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities." },
  "CCI-001880": { control: "MA-4 (6)", title: "Nonlocal Maintenance | Cryptographic Protection", definition: "The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications." },
  // ── Media Protection (MP) ───────────────────────────────────────────────
  "CCI-001199": { control: "SC-28", title: "Protection of Information at Rest", definition: "The information system protects the confidentiality and integrity of information at rest." },
  // ── Physical and Environmental (PE) ─────────────────────────────────────
  "CCI-000924": { control: "PE-2", title: "Physical Access Authorizations", definition: "The organization develops, approves, and maintains a list of individuals with authorized access to the facility." },
  // ── Risk Assessment (RA) ────────────────────────────────────────────────
  "CCI-001643": { control: "RA-5", title: "Vulnerability Scanning", definition: "The organization scans for vulnerabilities in the information system and hosted applications." },
  "CCI-001644": { control: "RA-5", title: "Vulnerability Scanning", definition: "The organization defines the frequency at which vulnerability scans are conducted." },
  // ── System and Services Acquisition (SA) ────────────────────────────────
  "CCI-002233": { control: "SA-11", title: "Developer Security Testing and Evaluation", definition: "The organization requires the developer of the information system to create and implement a security assessment plan." },
  "CCI-003123": { control: "SA-11 (1)", title: "Developer Security Testing and Evaluation | Static Code Analysis", definition: "The organization requires the developer to employ static code analysis tools." },
  // ── System and Communications Protection (SC) — additional entries ─────
  "CCI-001130": { control: "SC-5", title: "Denial of Service Protection", definition: "The information system protects against or limits the effects of organization-defined types of denial-of-service attacks." },
  "CCI-001184": { control: "SC-23", title: "Session Authenticity", definition: "The information system protects the authenticity of communications sessions." },
  "CCI-001188": { control: "SC-23 (1)", title: "Session Authenticity | Invalidate Session Identifiers at Logout", definition: "The information system invalidates session identifiers upon user logout or other session termination." },
  "CCI-002418": { control: "SC-8", title: "Transmission Confidentiality and Integrity", definition: "The information system protects the confidentiality and integrity of transmitted information." },
  "CCI-002420": { control: "SC-8 (1)", title: "Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection", definition: "The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission." },
  "CCI-002421": { control: "SC-8 (1)", title: "Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection", definition: "The information system implements cryptographic mechanisms to recognize changes to information during transmission." },
  "CCI-002422": { control: "SC-8", title: "Transmission Confidentiality and Integrity", definition: "The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception." },
  "CCI-002450": { control: "SC-13", title: "Cryptographic Protection", definition: "The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies." },
  "CCI-002530": { control: "SC-17", title: "Public Key Infrastructure Certificates", definition: "The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider." },
  "CCI-002824": { control: "SI-16", title: "Memory Protection", definition: "The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution." },
  "CCI-003568": { control: "SC-28 (1)", title: "Protection of Information at Rest | Cryptographic Protection", definition: "The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest." },
  // ── System and Information Integrity (SI) — additional entries ──────────
  "CCI-001310": { control: "SI-10", title: "Information Input Validation", definition: "The information system checks the validity of organization-defined information inputs." },
  "CCI-001312": { control: "SI-11", title: "Error Handling", definition: "The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries." },
  "CCI-001314": { control: "SI-11", title: "Error Handling", definition: "The information system reveals error messages only to authorized personnel." },
  "CCI-002235": { control: "SI-2 (2)", title: "Flaw Remediation | Automated Flaw Remediation Status", definition: "The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation." },
  "CCI-002605": { control: "SI-6", title: "Security Function Verification", definition: "The information system verifies the correct operation of security-relevant software and firmware." },
  "CCI-002617": { control: "SI-2", title: "Flaw Remediation", definition: "The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source." },
  "CCI-002699": { control: "SI-6", title: "Security Function Verification", definition: "The information system notifies defined personnel of failed security verification tests." },
  "CCI-002702": { control: "SI-6", title: "Security Function Verification", definition: "The information system implements organization-defined security safeguards when anomalies in security function verification are discovered." },
  // ── Contingency Planning (CP) ───────────────────────────────────────────
  "CCI-000537": { control: "CP-9", title: "Information System Backup", definition: "The organization conducts backups of user-level information contained in the information system." },
  "CCI-000538": { control: "CP-9", title: "Information System Backup", definition: "The organization conducts backups of system-level information contained in the information system." },
  "CCI-000539": { control: "CP-9", title: "Information System Backup", definition: "The organization conducts backups of information system documentation including security-related documentation." },
  // ── Program Management (PM) ─────────────────────────────────────────────
  "CCI-001682": { control: "PM-6", title: "Information Security Measures of Performance", definition: "The organization develops, monitors, and reports on the results of information security measures of performance." },
  // ── Personnel Security (PS) ─────────────────────────────────────────────
  "CCI-000971": { control: "PS-4", title: "Personnel Termination", definition: "The organization, upon termination of individual employment, disables information system access within the organization-defined time period." }
};
function toArray4(val) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}
function textOf2(node) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return textOf2(node[0]);
  if (typeof node === "object" && "_" in node) {
    return String(node._);
  }
  return String(node);
}
async function parseCciListXml(xmlContent) {
  const parsed = await (0, import_xml2js4.parseStringPromise)(xmlContent, {
    explicitArray: false,
    tagNameProcessors: [import_xml2js4.processors.stripPrefix]
  });
  const root = parsed.cci_list ?? parsed["cci-list"];
  if (!root) {
    throw new Error("Not a valid CCI List XML \u2014 no <cci_list> root element found.");
  }
  const items = toArray4((root.cci_items ?? root["cci-items"])?.cci_item ?? (root.cci_items ?? root["cci-items"])?.["cci-item"]);
  if (items.length === 0) {
    throw new Error("No <cci_item> elements found in the CCI List XML.");
  }
  const map = {};
  for (const item of items) {
    const id = item?.$?.id || "";
    if (!id.startsWith("CCI-")) continue;
    const definition = textOf2(item.definition);
    const refs = toArray4(item.references?.reference);
    let control = "";
    let title = "";
    for (const ref of refs) {
      const attrs = ref?.$ ?? ref ?? {};
      const ver = String(attrs.version ?? "");
      if (ver === "5" || ver === "4") {
        control = attrs.index ?? "";
        title = attrs.title ?? "";
        if (ver === "5") break;
      }
    }
    if (!control && refs.length > 0) {
      const last = refs[refs.length - 1];
      const attrs = last?.$ ?? last ?? {};
      control = attrs.index ?? "";
      title = attrs.title ?? "";
    }
    if (control) {
      map[id] = { control, title, definition };
    }
  }
  return map;
}

// src/nistCrosswalk.ts
var CONTROL_ID_RE = /^[A-Z]{2}-\d+(\s*\(\d+\))?$/;
function parseCsvLine(line) {
  const fields = [];
  let cur = "";
  let inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuote) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuote = false;
        }
      } else {
        cur += ch;
      }
    } else {
      if (ch === '"') {
        inQuote = true;
      } else if (ch === ",") {
        fields.push(cur.trim());
        cur = "";
      } else {
        cur += ch;
      }
    }
  }
  fields.push(cur.trim());
  return fields;
}
function parseNistControlsCsv(csvContent) {
  const lines = csvContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];
  const header = parseCsvLine(lines[0]);
  const lowerHeader = header.map((h) => h.toLowerCase().replace(/[_\s-]+/g, " ").trim());
  let controlCol = -1;
  for (let i = 0; i < header.length; i++) {
    const h = lowerHeader[i];
    if (h.includes("control") && (h.includes("id") || h.includes("identifier"))) {
      controlCol = i;
      break;
    }
  }
  if (controlCol < 0) {
    for (let i = 0; i < header.length; i++) {
      let matches = 0;
      for (let j = 1; j < Math.min(lines.length, 10); j++) {
        const row = parseCsvLine(lines[j]);
        if (row[i] && CONTROL_ID_RE.test(row[i].trim())) matches++;
      }
      if (matches >= Math.min(lines.length - 1, 3)) {
        controlCol = i;
        break;
      }
    }
  }
  if (controlCol < 0) {
    for (let i = 0; i < header.length; i++) {
      if (CONTROL_ID_RE.test(header[i].trim())) continue;
      const h = lowerHeader[i];
      if (h.includes("control") || h === "id") {
        controlCol = i;
        break;
      }
    }
  }
  if (controlCol < 0) controlCol = 0;
  const titleCol = lowerHeader.findIndex((h, i) => i !== controlCol && (h.includes("title") || h.includes("name")));
  const familyCol = lowerHeader.findIndex((h, i) => i !== controlCol && h.includes("family"));
  const descCol = lowerHeader.findIndex((h, i) => i !== controlCol && (h.includes("description") || h.includes("text")));
  const seen = /* @__PURE__ */ new Set();
  const controls = [];
  for (let r = 1; r < lines.length; r++) {
    const row = parseCsvLine(lines[r]);
    const raw = (row[controlCol] ?? "").trim();
    if (!raw || !CONTROL_ID_RE.test(raw)) continue;
    const controlId = raw.replace(/\s+/g, " ");
    if (seen.has(controlId)) continue;
    seen.add(controlId);
    const nc = { controlId };
    if (titleCol >= 0 && row[titleCol]) nc.title = row[titleCol].trim();
    if (familyCol >= 0 && row[familyCol]) nc.family = row[familyCol].trim();
    if (descCol >= 0 && row[descCol]) nc.description = row[descCol].trim();
    const extra = {};
    for (let c = 0; c < header.length; c++) {
      if (c === controlCol || c === titleCol || c === familyCol || c === descCol) continue;
      if (row[c]?.trim()) extra[header[c]] = row[c].trim();
    }
    if (Object.keys(extra).length > 0) nc.extra = extra;
    controls.push(nc);
  }
  return controls;
}
function baseControl(controlId) {
  return controlId.replace(/\s*\(\d+\)$/, "").trim();
}
function ruleStatus(status) {
  if (status === "not_a_finding" || status === "not_applicable") return "passing";
  if (status === "open") return "open";
  return "not_reviewed";
}
function controlStatus(rules) {
  if (rules.length === 0) return "not_covered";
  const allPassing = rules.every((r) => r.mappedStatus === "passing");
  if (allPassing) return "fully_satisfied";
  const anyPassing = rules.some((r) => r.mappedStatus === "passing");
  if (anyPassing) return "partially_satisfied";
  return "at_risk";
}
var STATUS_ORDER = {
  not_covered: 0,
  at_risk: 1,
  partially_satisfied: 2,
  fully_satisfied: 3
};
function analyzeCrosswalk(doc, nistControls, cciMap) {
  const effectiveMap = { ...CCI_TO_NIST, ...cciMap };
  const controlToCcis = /* @__PURE__ */ new Map();
  for (const [cci, entry] of Object.entries(effectiveMap)) {
    const ctrl = entry.control;
    if (!controlToCcis.has(ctrl)) controlToCcis.set(ctrl, /* @__PURE__ */ new Set());
    controlToCcis.get(ctrl).add(cci);
  }
  const cciToRules = /* @__PURE__ */ new Map();
  let unmappedCciCount = 0;
  for (const stig of doc.stigs) {
    for (const rule of stig.rules) {
      for (const cci of rule.ccis) {
        if (!effectiveMap[cci]) {
          unmappedCciCount++;
          continue;
        }
        if (!cciToRules.has(cci)) cciToRules.set(cci, []);
        cciToRules.get(cci).push({ rule, cci });
      }
    }
  }
  const mappings = [];
  for (const nc of nistControls) {
    const isBase = !nc.controlId.includes("(");
    const relevantCcis = /* @__PURE__ */ new Set();
    if (isBase) {
      for (const [ctrl, ccis] of controlToCcis.entries()) {
        if (baseControl(ctrl) === nc.controlId) {
          for (const c of ccis) relevantCcis.add(c);
        }
      }
    } else {
      const ccis = controlToCcis.get(nc.controlId);
      if (ccis) {
        for (const c of ccis) relevantCcis.add(c);
      }
    }
    const seenRules = /* @__PURE__ */ new Set();
    const mapped = [];
    for (const cci of relevantCcis) {
      const entries = cciToRules.get(cci) ?? [];
      for (const { rule } of entries) {
        const key = `${rule.group_id}::${cci}`;
        if (seenRules.has(key)) continue;
        seenRules.add(key);
        mapped.push({
          groupId: rule.group_id,
          ruleVersion: rule.rule_version,
          severity: rule.severity,
          ruleTitle: rule.rule_title,
          status: rule.status,
          mappedStatus: ruleStatus(rule.status),
          cci
        });
      }
    }
    mappings.push({
      control: nc,
      status: controlStatus(mapped),
      mappedRules: mapped,
      ccis: [...relevantCcis].sort()
    });
  }
  mappings.sort((a, b) => {
    const d = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
    if (d !== 0) return d;
    return a.control.controlId.localeCompare(b.control.controlId, void 0, { numeric: true });
  });
  const stigName = doc.stigs.map((s) => s.display_name || s.stig_name).join(", ");
  return {
    analyzedAt: (/* @__PURE__ */ new Date()).toISOString(),
    checklistTitle: doc.title,
    stigName,
    totalNistControls: nistControls.length,
    coveredControls: mappings.filter((m) => m.status !== "not_covered").length,
    uncoveredControls: mappings.filter((m) => m.status === "not_covered").length,
    fullySatisfiedControls: mappings.filter((m) => m.status === "fully_satisfied").length,
    partiallySatisfiedControls: mappings.filter((m) => m.status === "partially_satisfied").length,
    atRiskControls: mappings.filter((m) => m.status === "at_risk").length,
    controlMappings: mappings,
    unmappedCciCount
  };
}
function csvEsc3(v) {
  if (v.includes(",") || v.includes('"') || v.includes("\n")) return `"${v.replace(/"/g, '""')}"`;
  return v;
}
function buildCrosswalkCsv(result) {
  const header = "Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details";
  const rows = result.controlMappings.map((m) => {
    const passing = m.mappedRules.filter((r) => r.mappedStatus === "passing").length;
    const open = m.mappedRules.filter((r) => r.mappedStatus === "open").length;
    const nr = m.mappedRules.filter((r) => r.mappedStatus === "not_reviewed").length;
    const details = m.mappedRules.map((r) => `${r.groupId} (${r.status.replace(/_/g, " ")})`).join("; ");
    return [
      csvEsc3(m.control.controlId),
      csvEsc3(m.control.title ?? ""),
      csvEsc3(m.control.family ?? ""),
      csvEsc3(m.status.replace(/_/g, " ")),
      String(m.mappedRules.length),
      String(passing),
      String(open),
      String(nr),
      csvEsc3(m.ccis.join(", ")),
      csvEsc3(details)
    ].join(",");
  });
  return [header, ...rows].join("\n");
}

// src/crosswalkPanel.ts
var CrosswalkPanel = class _CrosswalkPanel {
  static async show(activeCklbUri) {
    let cklbUri = activeCklbUri;
    if (!cklbUri) {
      const uris = await vscode12.window.showOpenDialog({
        canSelectMany: false,
        filters: { "STIG Checklist": ["cklb"] },
        title: "Select STIG Checklist for Crosswalk"
      });
      if (!uris?.[0]) return;
      cklbUri = uris[0];
    }
    const doc = JSON.parse(fs12.readFileSync(cklbUri.fsPath, "utf-8"));
    const csvUris = await vscode12.window.showOpenDialog({
      canSelectMany: false,
      filters: { "CSV": ["csv"] },
      title: "Select NIST 800-53 Controls CSV"
    });
    if (!csvUris?.[0]) return;
    const csvContent = fs12.readFileSync(csvUris[0].fsPath, "utf-8");
    const nistControls = parseNistControlsCsv(csvContent);
    if (nistControls.length === 0) {
      vscode12.window.showErrorMessage("No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.");
      return;
    }
    let importedCciMap;
    const useCci = await vscode12.window.showQuickPick(
      ["Use bundled CCI mapping (covers common CCIs)", "Import full CCI List XML from DISA"],
      { title: "CCI Mapping Source" }
    );
    if (useCci?.includes("Import")) {
      const xmlUris = await vscode12.window.showOpenDialog({
        canSelectMany: false,
        filters: { "CCI List (XML)": ["xml", "XML"], "All Files": ["*"] },
        title: "Select U_CCI_List.xml (extract U_CCI_List.zip from cyber.mil first)"
      });
      if (xmlUris?.[0]) {
        try {
          const xml = fs12.readFileSync(xmlUris[0].fsPath, "utf-8");
          importedCciMap = await parseCciListXml(xml);
          vscode12.window.showInformationMessage(`Loaded ${Object.keys(importedCciMap).length} CCI entries from XML.`);
        } catch (e) {
          vscode12.window.showWarningMessage(`Failed to parse CCI List XML: ${e}. Falling back to bundled map.`);
        }
      }
    }
    const result = analyzeCrosswalk(doc, nistControls, importedCciMap);
    if (result.unmappedCciCount > 0) {
      vscode12.window.showInformationMessage(
        `${result.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`
      );
    }
    if (_CrosswalkPanel._panel) {
      _CrosswalkPanel._panel.reveal();
    } else {
      const panel = vscode12.window.createWebviewPanel(
        "stigViewer.crosswalk",
        `NIST 800-53 Crosswalk \u2014 ${doc.title}`,
        vscode12.ViewColumn.One,
        { enableScripts: true, retainContextWhenHidden: true }
      );
      _CrosswalkPanel._panel = panel;
      panel.onDidDispose(() => {
        _CrosswalkPanel._panel = void 0;
      });
      panel.webview.onDidReceiveMessage(async (msg) => {
        if (msg.type === "exportCsv") {
          const defaultName = path6.basename(cklbUri.fsPath, ".cklb") + "_NIST_crosswalk.csv";
          const saveUri = await vscode12.window.showSaveDialog({
            defaultUri: vscode12.Uri.file(path6.join(path6.dirname(cklbUri.fsPath), defaultName)),
            filters: { "CSV": ["csv"] },
            title: "Export Crosswalk Report"
          });
          if (saveUri) {
            fs12.writeFileSync(saveUri.fsPath, buildCrosswalkCsv(result), "utf-8");
            vscode12.window.showInformationMessage(`Exported crosswalk \u2192 ${path6.basename(saveUri.fsPath)}`);
          }
        }
      });
    }
    _CrosswalkPanel._panel.webview.html = buildHtml(result);
  }
};
function esc4(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function statusIcon(s) {
  switch (s) {
    case "fully_satisfied":
      return '<span class="st-icon st-sat">\u2714</span>';
    case "partially_satisfied":
      return '<span class="st-icon st-par">\u25D1</span>';
    case "at_risk":
      return '<span class="st-icon st-risk">\u26A0</span>';
    default:
      return '<span class="st-icon st-gap">\u25CF</span>';
  }
}
function statusLabel(s) {
  return s.replace(/_/g, " ");
}
function buildHtml(result) {
  const families = [...new Set(result.controlMappings.map((m) => m.control.family).filter(Boolean))].sort();
  const familyOptions = families.map((f) => `<option value="${esc4(f)}">${esc4(f)}</option>`).join("");
  const covPct = result.totalNistControls ? Math.round(result.coveredControls / result.totalNistControls * 100) : 0;
  const rows = result.controlMappings.map((m, idx) => {
    const passing = m.mappedRules.filter((r) => r.mappedStatus === "passing").length;
    const open = m.mappedRules.filter((r) => r.mappedStatus === "open").length;
    const nr = m.mappedRules.filter((r) => r.mappedStatus === "not_reviewed").length;
    const subRows = m.mappedRules.map((r) => {
      const sevClass = r.severity === "high" ? "sev-high" : r.severity === "medium" ? "sev-med" : "sev-low";
      const stClass = r.mappedStatus === "passing" ? "rs-pass" : r.mappedStatus === "open" ? "rs-open" : "rs-nr";
      return `<tr>
        <td class="sub-td">${esc4(r.groupId)}</td>
        <td class="sub-td">${esc4(r.ruleVersion)}</td>
        <td class="sub-td ${sevClass}">${r.severity === "high" ? "CAT I" : r.severity === "medium" ? "CAT II" : "CAT III"}</td>
        <td class="sub-td ${stClass}">${esc4(statusLabel(r.status))}</td>
        <td class="sub-td sub-title">${esc4(r.ruleTitle)}</td>
        <td class="sub-td sub-cci">${esc4(r.cci)}</td>
      </tr>`;
    }).join("");
    const desc = m.control.description ? `<div class="ctrl-desc">${esc4(m.control.description)}</div>` : m.status === "not_covered" ? '<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>' : "";
    const detail = m.mappedRules.length > 0 ? `<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${subRows}</tbody>
    </table>` : "";
    return `<tr class="cw-row" data-idx="${idx}" data-status="${m.status}" data-family="${esc4(m.control.family ?? "")}">
      <td class="td-st">${statusIcon(m.status)}</td>
      <td class="td-ctrl">${esc4(m.control.controlId)}</td>
      <td class="td-title">${esc4(m.control.title ?? "")}</td>
      <td class="td-fam">${esc4(m.control.family ?? "")}</td>
      <td class="td-n">${m.mappedRules.length}</td>
      <td class="td-n td-pass">${passing || ""}</td>
      <td class="td-n td-open">${open || ""}</td>
      <td class="td-n td-nr">${nr || ""}</td>
      <td class="td-ccis">${esc4(m.ccis.slice(0, 5).join(", "))}${m.ccis.length > 5 ? "\u2026" : ""}</td>
    </tr>
    <tr class="cw-detail" data-idx="${idx}" style="display:none">
      <td colspan="9">
        <div class="detail-wrap">${desc}${detail}</div>
      </td>
    </tr>`;
  }).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>NIST 800-53 Crosswalk</title>
<style>${CSS4}</style>
</head>
<body>

<header class="hdr">
  <h1>NIST 800-53 Crosswalk</h1>
  <span class="chip">${esc4(result.checklistTitle)}</span>
  <span class="chip">${esc4(result.stigName)}</span>
</header>

<div class="cards">
  <div class="card"><div class="card-n">${result.totalNistControls}</div><div class="card-l">Total Controls</div></div>
  <div class="card card-cov"><div class="card-n">${result.coveredControls}</div><div class="card-l">Covered</div></div>
  <div class="card card-gap"><div class="card-n">${result.uncoveredControls}</div><div class="card-l">Gaps</div></div>
  <div class="card card-sat"><div class="card-n">${result.fullySatisfiedControls}</div><div class="card-l">Fully Satisfied</div></div>
  <div class="card card-par"><div class="card-n">${result.partiallySatisfiedControls}</div><div class="card-l">Partial</div></div>
  <div class="card card-risk"><div class="card-n">${result.atRiskControls}</div><div class="card-l">At Risk</div></div>
  <div class="card card-pct"><div class="card-n">${covPct}%</div><div class="card-l">Coverage</div></div>
</div>

<div class="filters">
  <select id="fStatus">
    <option value="">All statuses</option>
    <option value="not_covered">Gaps</option>
    <option value="at_risk">At Risk</option>
    <option value="partially_satisfied">Partially Satisfied</option>
    <option value="fully_satisfied">Fully Satisfied</option>
  </select>
  <select id="fFamily">
    <option value="">All families</option>
    ${familyOptions}
  </select>
  <input type="text" id="fSearch" placeholder="Search control ID or title\u2026" />
  <button class="btn-export" id="btnExport">Export Crosswalk CSV</button>
</div>

<div class="tbl-wrap">
<table class="tbl">
  <thead><tr>
    <th style="width:40px">St</th>
    <th>Control</th>
    <th>Title</th>
    <th>Family</th>
    <th style="width:50px">Rules</th>
    <th style="width:50px">Pass</th>
    <th style="width:50px">Open</th>
    <th style="width:50px">NR</th>
    <th>CCIs</th>
  </tr></thead>
  <tbody>${rows}</tbody>
</table>
</div>

<script>
const vscode = acquireVsCodeApi();
document.getElementById('btnExport').onclick = () => vscode.postMessage({ type: 'exportCsv' });

// Expand/collapse
document.querySelectorAll('tr.cw-row').forEach(tr => {
  tr.addEventListener('click', () => {
    const idx = tr.dataset.idx;
    const detail = document.querySelector('tr.cw-detail[data-idx="'+idx+'"]');
    if (detail) detail.style.display = detail.style.display === 'none' ? '' : 'none';
  });
});

// Filters
const fStatus = document.getElementById('fStatus');
const fFamily = document.getElementById('fFamily');
const fSearch = document.getElementById('fSearch');
function applyFilters() {
  const sv = fStatus.value;
  const fv = fFamily.value.toLowerCase();
  const q = fSearch.value.toLowerCase();
  document.querySelectorAll('tr.cw-row').forEach(tr => {
    const status = tr.dataset.status;
    const family = (tr.dataset.family || '').toLowerCase();
    const text = tr.textContent.toLowerCase();
    const show = (!sv || status === sv) && (!fv || family === fv) && (!q || text.includes(q));
    tr.style.display = show ? '' : 'none';
    const detail = document.querySelector('tr.cw-detail[data-idx="'+tr.dataset.idx+'"]');
    if (detail && !show) detail.style.display = 'none';
  });
}
fStatus.onchange = applyFilters;
fFamily.onchange = applyFilters;
fSearch.oninput = applyFilters;

// Sort
document.querySelectorAll('.tbl thead th').forEach((th, i) => {
  th.style.cursor = 'pointer';
  th.style.userSelect = 'none';
  th.addEventListener('click', () => {
    const tbody = th.closest('.tbl').querySelector('tbody');
    const pairs = [];
    const cwRows = [...tbody.querySelectorAll('tr.cw-row')];
    cwRows.forEach(row => {
      const detail = tbody.querySelector('tr.cw-detail[data-idx="'+row.dataset.idx+'"]');
      pairs.push({ row, detail });
    });
    const asc = th.dataset.sort !== 'asc';
    th.closest('thead').querySelectorAll('th').forEach(h => { h.dataset.sort=''; h.classList.remove('sort-asc','sort-desc'); });
    th.dataset.sort = asc ? 'asc' : 'desc';
    th.classList.add(asc ? 'sort-asc' : 'sort-desc');
    pairs.sort((a, b) => {
      const av = a.row.cells[i].textContent.trim();
      const bv = b.row.cells[i].textContent.trim();
      return (asc ? 1 : -1) * av.localeCompare(bv, undefined, { numeric: true });
    });
    pairs.forEach(p => { tbody.appendChild(p.row); if (p.detail) tbody.appendChild(p.detail); });
  });
});
</script>
</body></html>`;
}
var CSS4 = `
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:var(--vscode-editor-background,#1e1e1e);
  --fg:var(--vscode-editor-foreground,#ccc);
  --border:var(--vscode-panel-border,#3c3c3c);
  --card:var(--vscode-editorWidget-background,#252526);
  --hover:var(--vscode-list-hoverBackground,#2a2d2e);
  --accent:var(--vscode-focusBorder,#007acc);
  --btn-bg:var(--vscode-button-background,#0e639c);
  --btn-fg:var(--vscode-button-foreground,#fff);
  --input-bg:var(--vscode-input-background,#3c3c3c);
  --input-fg:var(--vscode-input-foreground,#ccc);
  --input-border:var(--vscode-input-border,#3c3c3c);
  --green:#27ae60;--amber:#f39c12;--red:#c0392b;--gray:#7f8c8d;--blue:#3498db;
}
body{font-family:var(--vscode-font-family,system-ui,sans-serif);font-size:13px;color:var(--fg);background:var(--bg);padding:0 20px 40px}
.hdr{padding:20px 0 16px;border-bottom:1px solid var(--border);margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.hdr h1{font-size:1.3em;font-weight:600}
.chip{display:inline-block;padding:2px 9px;border-radius:10px;font-size:.8em;background:var(--card);border:1px solid var(--border)}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin-bottom:14px}
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:10px 8px;text-align:center}
.card-n{font-size:1.5em;font-weight:700;line-height:1.2}
.card-l{font-size:.75em;color:var(--gray);margin-top:2px}
.card-cov .card-n{color:var(--green)}
.card-gap .card-n{color:var(--red)}
.card-sat .card-n{color:var(--green)}
.card-par .card-n{color:var(--amber)}
.card-risk .card-n{color:var(--amber)}
.card-pct .card-n{color:var(--blue)}
.filters{display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
.filters select,.filters input{background:var(--input-bg);color:var(--input-fg);border:1px solid var(--input-border);border-radius:4px;padding:5px 8px;font-size:.85em;font-family:inherit}
.filters input{flex:1;min-width:160px}
.btn-export{background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:4px;padding:5px 14px;font-size:.82em;font-weight:600;cursor:pointer;margin-left:auto;white-space:nowrap}
.btn-export:hover{opacity:.9}
.tbl-wrap{overflow-x:auto;border:1px solid var(--border);border-radius:6px}
.tbl{width:100%;border-collapse:collapse}
.tbl th{text-align:left;padding:7px 10px;background:var(--card);border-bottom:1px solid var(--border);font-weight:600;font-size:.82em;color:var(--gray);position:sticky;top:0;z-index:1}
.tbl td{padding:6px 10px;border-bottom:1px solid var(--border);vertical-align:top}
.td-n{text-align:center;font-weight:600}
.td-pass{color:var(--green)}.td-open{color:var(--red)}.td-nr{color:var(--amber)}
.td-ctrl{font-weight:600;white-space:nowrap}
.td-title{max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.td-fam{font-size:.85em;color:var(--gray)}
.td-ccis{font-size:.78em;color:var(--gray);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cw-row{cursor:pointer;transition:background .12s}
.cw-row:hover{background:var(--hover)}
.st-icon{font-size:1.1em}
.st-sat{color:var(--green)}.st-par{color:var(--amber)}.st-risk{color:var(--amber)}.st-gap{color:var(--red)}
.detail-wrap{padding:8px 12px 12px 24px;background:color-mix(in srgb,var(--card) 60%,var(--bg));border-radius:4px;margin:4px 0}
.ctrl-desc{font-size:.85em;color:var(--gray);margin-bottom:8px;line-height:1.45}
.muted{font-style:italic}
.sub-tbl{width:100%;border-collapse:collapse;font-size:.88em;margin-top:4px}
.sub-tbl th{text-align:left;padding:4px 8px;border-bottom:1px solid var(--border);font-weight:600;font-size:.8em;color:var(--gray)}
.sub-td{padding:4px 8px;border-bottom:1px solid color-mix(in srgb,var(--border) 50%,transparent)}
.sub-title{max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sub-cci{font-size:.82em;color:var(--gray)}
.sev-high{color:#c0392b;font-weight:600}.sev-med{color:#e67e22;font-weight:600}.sev-low{color:#2980b9}
.rs-pass{color:var(--green)}.rs-open{color:var(--red)}.rs-nr{color:var(--amber)}
.sort-asc::after{content:' \\25B2';font-size:.7em}
.sort-desc::after{content:' \\25BC';font-size:.7em}
`;

// src/extension.ts
function activate(context) {
  context.subscriptions.push(CklbEditorProvider.register(context));
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.openFile", async () => {
      const uris = await vscode13.window.showOpenDialog({
        canSelectMany: false,
        filters: { "STIG Checklist": ["cklb"] },
        title: "Open STIG Checklist (.cklb)"
      });
      if (uris?.[0]) {
        await vscode13.commands.executeCommand("vscode.openWith", uris[0], "stigViewer.cklbEditor");
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.importXccdf", async (uri) => {
      if (!uri) {
        const uris = await vscode13.window.showOpenDialog({
          canSelectMany: false,
          filters: { "XCCDF Benchmark": ["xml"] },
          title: "Import XCCDF Benchmark"
        });
        if (!uris?.[0]) {
          return;
        }
        uri = uris[0];
      }
      try {
        await importXccdf(uri);
      } catch (e) {
        vscode13.window.showErrorMessage(`XCCDF import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.importCkl", async (uri) => {
      if (!uri) {
        const uris = await vscode13.window.showOpenDialog({
          canSelectMany: false,
          filters: { "CKL Checklist": ["ckl"] },
          title: "Import CKL Checklist"
        });
        if (!uris?.[0]) {
          return;
        }
        uri = uris[0];
      }
      try {
        await importCkl(uri);
      } catch (e) {
        vscode13.window.showErrorMessage(`CKL import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.importScapResults", async () => {
      try {
        await importScapResults(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`SCAP import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.mergeFindings", async () => {
      try {
        await mergeFindings(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`Merge failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.dashboard", async () => {
      try {
        await DashboardPanel.show(context);
      } catch (e) {
        vscode13.window.showErrorMessage(`Dashboard failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.diffChecklists", async () => {
      try {
        await DiffPanel.show(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`Diff failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.scanRepo", async () => {
      try {
        await scanRepo(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`Repo scan failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.importSarif", async () => {
      try {
        await importSarif(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`SARIF import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.importAudit", async () => {
      try {
        await importAudit(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`Dependency audit import failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.exportEvidence", async () => {
      try {
        await exportEvidence(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`Evidence package failed: ${e}`);
      }
    })
  );
  context.subscriptions.push(
    vscode13.commands.registerCommand("stigViewer.nistCrosswalk", async () => {
      try {
        await CrosswalkPanel.show(CklbEditorProvider.activeDocumentUri);
      } catch (e) {
        vscode13.window.showErrorMessage(`NIST crosswalk failed: ${e}`);
      }
    })
  );
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
//# sourceMappingURL=extension.js.map
