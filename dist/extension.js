"use strict";var Br=Object.create;var le=Object.defineProperty;var $r=Object.getOwnPropertyDescriptor;var Ur=Object.getOwnPropertyNames;var qr=Object.getPrototypeOf,Vr=Object.prototype.hasOwnProperty;var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),zr=(t,e)=>{for(var i in e)le(t,i,{get:e[i],enumerable:!0})},yi=(t,e,i,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ur(e))!Vr.call(t,r)&&r!==i&&le(t,r,{get:()=>e[r],enumerable:!(l=$r(e,r))||l.enumerable});return t};var B=(t,e,i)=>(i=t!=null?Br(qr(t)):{},yi(e||!t||!t.__esModule?le(i,"default",{value:t,enumerable:!0}):i,t)),jr=t=>yi(le({},"__esModule",{value:!0}),t);var he=U(Xe=>{(function(){Xe.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(Xe)});var yt=U((Ii,xt)=>{(function(){var t,e,i,l,r,o,c,d=[].slice,p={}.hasOwnProperty;t=function(){var h,g,y,v,m,C;if(C=arguments[0],m=2<=arguments.length?d.call(arguments,1):[],r(Object.assign))Object.assign.apply(null,arguments);else for(h=0,y=m.length;h<y;h++)if(v=m[h],v!=null)for(g in v)p.call(v,g)&&(C[g]=v[g]);return C},r=function(h){return!!h&&Object.prototype.toString.call(h)==="[object Function]"},o=function(h){var g;return!!h&&((g=typeof h)=="function"||g==="object")},i=function(h){return r(Array.isArray)?Array.isArray(h):Object.prototype.toString.call(h)==="[object Array]"},l=function(h){var g;if(i(h))return!h.length;for(g in h)if(p.call(h,g))return!1;return!0},c=function(h){var g,y;return o(h)&&(y=Object.getPrototypeOf(h))&&(g=y.constructor)&&typeof g=="function"&&g instanceof g&&Function.prototype.toString.call(g)===Function.prototype.toString.call(Object)},e=function(h){return r(h.valueOf)?h.valueOf():h},xt.exports.assign=t,xt.exports.isFunction=r,xt.exports.isObject=o,xt.exports.isArray=i,xt.exports.isEmpty=l,xt.exports.isPlainObject=c,xt.exports.getValue=e}).call(Ii)});var Ge=U((xi,Ti)=>{(function(){var t;Ti.exports=t=(function(){function e(){}return e.prototype.hasFeature=function(i,l){return!0},e.prototype.createDocumentType=function(i,l,r){throw new Error("This DOM method is not implemented.")},e.prototype.createDocument=function(i,l,r){throw new Error("This DOM method is not implemented.")},e.prototype.createHTMLDocument=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.getFeature=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(xi)});var Si=U((_i,Ei)=>{(function(){var t;Ei.exports=t=(function(){function e(){}return e.prototype.handleError=function(i){throw new Error(i)},e})()}).call(_i)});var ki=U((Ai,Di)=>{(function(){var t;Di.exports=t=(function(){function e(i){this.arr=i||[]}return Object.defineProperty(e.prototype,"length",{get:function(){return this.arr.length}}),e.prototype.item=function(i){return this.arr[i]||null},e.prototype.contains=function(i){return this.arr.indexOf(i)!==-1},e})()}).call(Ai)});var Pi=U((Ni,Oi)=>{(function(){var t,e,i;e=Si(),i=ki(),Oi.exports=t=(function(){function l(){var r;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=r=Object.create(this.defaultParams)}return Object.defineProperty(l.prototype,"parameterNames",{get:function(){return new i(Object.keys(this.defaultParams))}}),l.prototype.getParameter=function(r){return this.params.hasOwnProperty(r)?this.params[r]:null},l.prototype.canSetParameter=function(r,o){return!0},l.prototype.setParameter=function(r,o){return o!=null?this.params[r]=o:delete this.params[r]},l})()}).call(Ni)});var J=U((Mi,Ri)=>{(function(){Ri.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(Mi)});var We=U((Li,Fi)=>{(function(){var t,e,i;t=J(),i=lt(),Fi.exports=e=(function(){function l(r,o,c){if(this.parent=r,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),o==null)throw new Error("Missing attribute name. "+this.debugInfo(o));this.name=this.stringify.name(o),this.value=this.stringify.attValue(c),this.type=t.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(l.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(l.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(l.prototype,"textContent",{get:function(){return this.value},set:function(r){return this.value=r||""}}),Object.defineProperty(l.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(l.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(l.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(l.prototype,"specified",{get:function(){return!0}}),l.prototype.clone=function(){return Object.create(this)},l.prototype.toString=function(r){return this.options.writer.attribute(this,this.options.writer.filterOptions(r))},l.prototype.debugInfo=function(r){return r=r||this.name,r==null?"parent: <"+this.parent.name+">":"attribute: {"+r+"}, parent: <"+this.parent.name+">"},l.prototype.isEqualNode=function(r){return!(r.namespaceURI!==this.namespaceURI||r.prefix!==this.prefix||r.localName!==this.localName||r.value!==this.value)},l})()}).call(Li)});var me=U((Bi,$i)=>{(function(){var t;$i.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(i){return this.nodes[i]},e.prototype.setNamedItem=function(i){var l;return l=this.nodes[i.nodeName],this.nodes[i.nodeName]=i,l||null},e.prototype.removeNamedItem=function(i){var l;return l=this.nodes[i],delete this.nodes[i],l||null},e.prototype.item=function(i){return this.nodes[Object.keys(this.nodes)[i]]||null},e.prototype.getNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(Bi)});var ge=U((Ui,qi)=>{(function(){var t,e,i,l,r,o,c,d,p,h=function(y,v){for(var m in v)g.call(v,m)&&(y[m]=v[m]);function C(){this.constructor=y}return C.prototype=v.prototype,y.prototype=new C,y.__super__=v.prototype,y},g={}.hasOwnProperty;p=yt(),d=p.isObject,c=p.isFunction,o=p.getValue,r=lt(),t=J(),e=We(),l=me(),qi.exports=i=(function(y){h(v,y);function v(m,C,x){var A,k,_,w;if(v.__super__.constructor.call(this,m),C==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(C),this.type=t.Element,this.attribs={},this.schemaTypeInfo=null,x!=null&&this.attribute(x),m.type===t.Document&&(this.isRoot=!0,this.documentObject=m,m.rootObject=this,m.children)){for(w=m.children,k=0,_=w.length;k<_;k++)if(A=w[k],A.type===t.DocType){A.name=this.name;break}}}return Object.defineProperty(v.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(v.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(v.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(v.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(v.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(v.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(v.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(v.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new l(this.attribs)),this.attributeMap}}),v.prototype.clone=function(){var m,C,x,A;x=Object.create(this),x.isRoot&&(x.documentObject=null),x.attribs={},A=this.attribs;for(C in A)g.call(A,C)&&(m=A[C],x.attribs[C]=m.clone());return x.children=[],this.children.forEach(function(k){var _;return _=k.clone(),_.parent=x,x.children.push(_)}),x},v.prototype.attribute=function(m,C){var x,A;if(m!=null&&(m=o(m)),d(m))for(x in m)g.call(m,x)&&(A=m[x],this.attribute(x,A));else c(C)&&(C=C.apply()),this.options.keepNullAttributes&&C==null?this.attribs[m]=new e(this,m,""):C!=null&&(this.attribs[m]=new e(this,m,C));return this},v.prototype.removeAttribute=function(m){var C,x,A;if(m==null)throw new Error("Missing attribute name. "+this.debugInfo());if(m=o(m),Array.isArray(m))for(x=0,A=m.length;x<A;x++)C=m[x],delete this.attribs[C];else delete this.attribs[m];return this},v.prototype.toString=function(m){return this.options.writer.element(this,this.options.writer.filterOptions(m))},v.prototype.att=function(m,C){return this.attribute(m,C)},v.prototype.a=function(m,C){return this.attribute(m,C)},v.prototype.getAttribute=function(m){return this.attribs.hasOwnProperty(m)?this.attribs[m].value:null},v.prototype.setAttribute=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getAttributeNode=function(m){return this.attribs.hasOwnProperty(m)?this.attribs[m]:null},v.prototype.setAttributeNode=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.removeAttributeNode=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getElementsByTagName=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getAttributeNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.setAttributeNS=function(m,C,x){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.removeAttributeNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getAttributeNodeNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.setAttributeNodeNS=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getElementsByTagNameNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.hasAttribute=function(m){return this.attribs.hasOwnProperty(m)},v.prototype.hasAttributeNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.setIdAttribute=function(m,C){return this.attribs.hasOwnProperty(m)?this.attribs[m].isId:C},v.prototype.setIdAttributeNS=function(m,C,x){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.setIdAttributeNode=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getElementsByTagName=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getElementsByTagNameNS=function(m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.getElementsByClassName=function(m){throw new Error("This DOM method is not implemented."+this.debugInfo())},v.prototype.isEqualNode=function(m){var C,x,A;if(!v.__super__.isEqualNode.apply(this,arguments).isEqualNode(m)||m.namespaceURI!==this.namespaceURI||m.prefix!==this.prefix||m.localName!==this.localName||m.attribs.length!==this.attribs.length)return!1;for(C=x=0,A=this.attribs.length-1;0<=A?x<=A:x>=A;C=0<=A?++x:--x)if(!this.attribs[C].isEqualNode(m.attribs[C]))return!1;return!0},v})(r)}).call(Ui)});var Qt=U((Vi,zi)=>{(function(){var t,e,i=function(r,o){for(var c in o)l.call(o,c)&&(r[c]=o[c]);function d(){this.constructor=r}return d.prototype=o.prototype,r.prototype=new d,r.__super__=o.prototype,r},l={}.hasOwnProperty;e=lt(),zi.exports=t=(function(r){i(o,r);function o(c){o.__super__.constructor.call(this,c),this.value=""}return Object.defineProperty(o.prototype,"data",{get:function(){return this.value},set:function(c){return this.value=c||""}}),Object.defineProperty(o.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(o.prototype,"textContent",{get:function(){return this.value},set:function(c){return this.value=c||""}}),o.prototype.clone=function(){return Object.create(this)},o.prototype.substringData=function(c,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.appendData=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.insertData=function(c,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.deleteData=function(c,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.replaceData=function(c,d,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isEqualNode=function(c){return!(!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.data!==this.data)},o})(e)}).call(Vi)});var ye=U((ji,Hi)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;t=J(),i=Qt(),Hi.exports=e=(function(o){l(c,o);function c(d,p){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=t.CData,this.value=this.stringify.cdata(p)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return this.options.writer.cdata(this,this.options.writer.filterOptions(d))},c})(i)}).call(ji)});var ve=U((Xi,Gi)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;t=J(),e=Qt(),Gi.exports=i=(function(o){l(c,o);function c(d,p){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=t.Comment,this.value=this.stringify.comment(p)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return this.options.writer.comment(this,this.options.writer.filterOptions(d))},c})(e)}).call(Xi)});var we=U((Wi,Ki)=>{(function(){var t,e,i,l,r=function(c,d){for(var p in d)o.call(d,p)&&(c[p]=d[p]);function h(){this.constructor=c}return h.prototype=d.prototype,c.prototype=new h,c.__super__=d.prototype,c},o={}.hasOwnProperty;l=yt().isObject,i=lt(),t=J(),Ki.exports=e=(function(c){r(d,c);function d(p,h,g,y){var v;d.__super__.constructor.call(this,p),l(h)&&(v=h,h=v.version,g=v.encoding,y=v.standalone),h||(h="1.0"),this.type=t.Declaration,this.version=this.stringify.xmlVersion(h),g!=null&&(this.encoding=this.stringify.xmlEncoding(g)),y!=null&&(this.standalone=this.stringify.xmlStandalone(y))}return d.prototype.toString=function(p){return this.options.writer.declaration(this,this.options.writer.filterOptions(p))},d})(i)}).call(Wi)});var be=U((Yi,Ji)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;i=lt(),t=J(),Ji.exports=e=(function(o){l(c,o);function c(d,p,h,g,y,v){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(h==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(p));if(!g)throw new Error("Missing DTD attribute type. "+this.debugInfo(p));if(!y)throw new Error("Missing DTD attribute default. "+this.debugInfo(p));if(y.indexOf("#")!==0&&(y="#"+y),!y.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(p));if(v&&!y.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(p));this.elementName=this.stringify.name(p),this.type=t.AttributeDeclaration,this.attributeName=this.stringify.name(h),this.attributeType=this.stringify.dtdAttType(g),v&&(this.defaultValue=this.stringify.dtdAttDefault(v)),this.defaultValueType=y}return c.prototype.toString=function(d){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(d))},c})(i)}).call(Yi)});var Ce=U((Qi,Zi)=>{(function(){var t,e,i,l,r=function(c,d){for(var p in d)o.call(d,p)&&(c[p]=d[p]);function h(){this.constructor=c}return h.prototype=d.prototype,c.prototype=new h,c.__super__=d.prototype,c},o={}.hasOwnProperty;l=yt().isObject,i=lt(),t=J(),Zi.exports=e=(function(c){r(d,c);function d(p,h,g,y){if(d.__super__.constructor.call(this,p),g==null)throw new Error("Missing DTD entity name. "+this.debugInfo(g));if(y==null)throw new Error("Missing DTD entity value. "+this.debugInfo(g));if(this.pe=!!h,this.name=this.stringify.name(g),this.type=t.EntityDeclaration,!l(y))this.value=this.stringify.dtdEntityValue(y),this.internal=!0;else{if(!y.pubID&&!y.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(g));if(y.pubID&&!y.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(g));if(this.internal=!1,y.pubID!=null&&(this.pubID=this.stringify.dtdPubID(y.pubID)),y.sysID!=null&&(this.sysID=this.stringify.dtdSysID(y.sysID)),y.nData!=null&&(this.nData=this.stringify.dtdNData(y.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(g))}}return Object.defineProperty(d.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(d.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(d.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(d.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(d.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(d.prototype,"xmlVersion",{get:function(){return null}}),d.prototype.toString=function(p){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(p))},d})(i)}).call(Qi)});var Ie=U((tn,en)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;i=lt(),t=J(),en.exports=e=(function(o){l(c,o);function c(d,p,h){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing DTD element name. "+this.debugInfo());h||(h="(#PCDATA)"),Array.isArray(h)&&(h="("+h.join(",")+")"),this.name=this.stringify.name(p),this.type=t.ElementDeclaration,this.value=this.stringify.dtdElementValue(h)}return c.prototype.toString=function(d){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(d))},c})(i)}).call(tn)});var xe=U((nn,rn)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;i=lt(),t=J(),rn.exports=e=(function(o){l(c,o);function c(d,p,h){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing DTD notation name. "+this.debugInfo(p));if(!h.pubID&&!h.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(p));this.name=this.stringify.name(p),this.type=t.NotationDeclaration,h.pubID!=null&&(this.pubID=this.stringify.dtdPubID(h.pubID)),h.sysID!=null&&(this.sysID=this.stringify.dtdSysID(h.sysID))}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),c.prototype.toString=function(d){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(d))},c})(i)}).call(nn)});var Te=U((on,sn)=>{(function(){var t,e,i,l,r,o,c,d,p,h=function(y,v){for(var m in v)g.call(v,m)&&(y[m]=v[m]);function C(){this.constructor=y}return C.prototype=v.prototype,y.prototype=new C,y.__super__=v.prototype,y},g={}.hasOwnProperty;p=yt().isObject,d=lt(),t=J(),e=be(),l=Ce(),i=Ie(),r=xe(),c=me(),sn.exports=o=(function(y){h(v,y);function v(m,C,x){var A,k,_,w,n,s;if(v.__super__.constructor.call(this,m),this.type=t.DocType,m.children){for(w=m.children,k=0,_=w.length;k<_;k++)if(A=w[k],A.type===t.Element){this.name=A.name;break}}this.documentObject=m,p(C)&&(n=C,C=n.pubID,x=n.sysID),x==null&&(s=[C,x],x=s[0],C=s[1]),C!=null&&(this.pubID=this.stringify.dtdPubID(C)),x!=null&&(this.sysID=this.stringify.dtdSysID(x))}return Object.defineProperty(v.prototype,"entities",{get:function(){var m,C,x,A,k;for(A={},k=this.children,C=0,x=k.length;C<x;C++)m=k[C],m.type===t.EntityDeclaration&&!m.pe&&(A[m.name]=m);return new c(A)}}),Object.defineProperty(v.prototype,"notations",{get:function(){var m,C,x,A,k;for(A={},k=this.children,C=0,x=k.length;C<x;C++)m=k[C],m.type===t.NotationDeclaration&&(A[m.name]=m);return new c(A)}}),Object.defineProperty(v.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(v.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(v.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),v.prototype.element=function(m,C){var x;return x=new i(this,m,C),this.children.push(x),this},v.prototype.attList=function(m,C,x,A,k){var _;return _=new e(this,m,C,x,A,k),this.children.push(_),this},v.prototype.entity=function(m,C){var x;return x=new l(this,!1,m,C),this.children.push(x),this},v.prototype.pEntity=function(m,C){var x;return x=new l(this,!0,m,C),this.children.push(x),this},v.prototype.notation=function(m,C){var x;return x=new r(this,m,C),this.children.push(x),this},v.prototype.toString=function(m){return this.options.writer.docType(this,this.options.writer.filterOptions(m))},v.prototype.ele=function(m,C){return this.element(m,C)},v.prototype.att=function(m,C,x,A,k){return this.attList(m,C,x,A,k)},v.prototype.ent=function(m,C){return this.entity(m,C)},v.prototype.pent=function(m,C){return this.pEntity(m,C)},v.prototype.not=function(m,C){return this.notation(m,C)},v.prototype.up=function(){return this.root()||this.documentObject},v.prototype.isEqualNode=function(m){return!(!v.__super__.isEqualNode.apply(this,arguments).isEqualNode(m)||m.name!==this.name||m.publicId!==this.publicId||m.systemId!==this.systemId)},v})(d)}).call(on)});var _e=U((an,cn)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;t=J(),e=lt(),cn.exports=i=(function(o){l(c,o);function c(d,p){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=t.Raw,this.value=this.stringify.raw(p)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return this.options.writer.raw(this,this.options.writer.filterOptions(d))},c})(e)}).call(an)});var Ee=U((ln,dn)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;t=J(),e=Qt(),dn.exports=i=(function(o){l(c,o);function c(d,p){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=t.Text,this.value=this.stringify.text(p)}return Object.defineProperty(c.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(c.prototype,"wholeText",{get:function(){var d,p,h;for(h="",p=this.previousSibling;p;)h=p.data+h,p=p.previousSibling;for(h+=this.data,d=this.nextSibling;d;)h=h+d.data,d=d.nextSibling;return h}}),c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return this.options.writer.text(this,this.options.writer.filterOptions(d))},c.prototype.splitText=function(d){throw new Error("This DOM method is not implemented."+this.debugInfo())},c.prototype.replaceWholeText=function(d){throw new Error("This DOM method is not implemented."+this.debugInfo())},c})(e)}).call(ln)});var Se=U((un,pn)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;t=J(),e=Qt(),pn.exports=i=(function(o){l(c,o);function c(d,p,h){if(c.__super__.constructor.call(this,d),p==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=t.ProcessingInstruction,this.target=this.stringify.insTarget(p),this.name=this.target,h&&(this.value=this.stringify.insValue(h))}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(d))},c.prototype.isEqualNode=function(d){return!(!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(d)||d.target!==this.target)},c})(e)}).call(un)});var Ke=U((fn,hn)=>{(function(){var t,e,i,l=function(o,c){for(var d in c)r.call(c,d)&&(o[d]=c[d]);function p(){this.constructor=o}return p.prototype=c.prototype,o.prototype=new p,o.__super__=c.prototype,o},r={}.hasOwnProperty;i=lt(),t=J(),hn.exports=e=(function(o){l(c,o);function c(d){c.__super__.constructor.call(this,d),this.type=t.Dummy}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(d){return""},c})(i)}).call(fn)});var yn=U((mn,gn)=>{(function(){var t;gn.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return this.nodes.length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.item=function(i){return this.nodes[i]||null},e})()}).call(mn)});var bn=U((vn,wn)=>{(function(){wn.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(vn)});var lt=U((Cn,In)=>{(function(){var t,e,i,l,r,o,c,d,p,h,g,y,v,m,C,x,A,k,_,w={}.hasOwnProperty;_=yt(),k=_.isObject,A=_.isFunction,x=_.isEmpty,C=_.getValue,d=null,i=null,l=null,r=null,o=null,v=null,m=null,y=null,c=null,e=null,g=null,p=null,t=null,In.exports=h=(function(){function n(s){this.parent=s,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,d||(d=ge(),i=ye(),l=ve(),r=we(),o=Te(),v=_e(),m=Ee(),y=Se(),c=Ke(),e=J(),g=yn(),p=me(),t=bn())}return Object.defineProperty(n.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(n.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(n.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(n.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new g(this.children)),this.childNodeList}}),Object.defineProperty(n.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(n.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(n.prototype,"previousSibling",{get:function(){var s;return s=this.parent.children.indexOf(this),this.parent.children[s-1]||null}}),Object.defineProperty(n.prototype,"nextSibling",{get:function(){var s;return s=this.parent.children.indexOf(this),this.parent.children[s+1]||null}}),Object.defineProperty(n.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(n.prototype,"textContent",{get:function(){var s,b,S,T,u;if(this.nodeType===e.Element||this.nodeType===e.DocumentFragment){for(u="",T=this.children,b=0,S=T.length;b<S;b++)s=T[b],s.textContent&&(u+=s.textContent);return u}else return null},set:function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),n.prototype.setParent=function(s){var b,S,T,u,I;for(this.parent=s,s&&(this.options=s.options,this.stringify=s.stringify),u=this.children,I=[],S=0,T=u.length;S<T;S++)b=u[S],I.push(b.setParent(this));return I},n.prototype.element=function(s,b,S){var T,u,I,D,O,M,L,F,P,$,R;if(M=null,b===null&&S==null&&(P=[{},null],b=P[0],S=P[1]),b==null&&(b={}),b=C(b),k(b)||($=[b,S],S=$[0],b=$[1]),s!=null&&(s=C(s)),Array.isArray(s))for(I=0,L=s.length;I<L;I++)u=s[I],M=this.element(u);else if(A(s))M=this.element(s.apply());else if(k(s)){for(O in s)if(w.call(s,O))if(R=s[O],A(R)&&(R=R.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)M=this.attribute(O.substr(this.stringify.convertAttKey.length),R);else if(!this.options.separateArrayItems&&Array.isArray(R)&&x(R))M=this.dummy();else if(k(R)&&x(R))M=this.element(O);else if(!this.options.keepNullNodes&&R==null)M=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray(R))for(D=0,F=R.length;D<F;D++)u=R[D],T={},T[O]=u,M=this.element(T);else k(R)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?M=this.element(R):(M=this.element(O),M.element(R)):M=this.element(O,R)}else!this.options.keepNullNodes&&S===null?M=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&s.indexOf(this.stringify.convertTextKey)===0?M=this.text(S):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&s.indexOf(this.stringify.convertCDataKey)===0?M=this.cdata(S):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&s.indexOf(this.stringify.convertCommentKey)===0?M=this.comment(S):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&s.indexOf(this.stringify.convertRawKey)===0?M=this.raw(S):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&s.indexOf(this.stringify.convertPIKey)===0?M=this.instruction(s.substr(this.stringify.convertPIKey.length),S):M=this.node(s,b,S);if(M==null)throw new Error("Could not create any elements with: "+s+". "+this.debugInfo());return M},n.prototype.insertBefore=function(s,b,S){var T,u,I,D,O;if(s?.type)return I=s,D=b,I.setParent(this),D?(u=children.indexOf(D),O=children.splice(u),children.push(I),Array.prototype.push.apply(children,O)):children.push(I),I;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(s));return u=this.parent.children.indexOf(this),O=this.parent.children.splice(u),T=this.parent.element(s,b,S),Array.prototype.push.apply(this.parent.children,O),T},n.prototype.insertAfter=function(s,b,S){var T,u,I;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(s));return u=this.parent.children.indexOf(this),I=this.parent.children.splice(u+1),T=this.parent.element(s,b,S),Array.prototype.push.apply(this.parent.children,I),T},n.prototype.remove=function(){var s,b;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return s=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[s,s-s+1].concat(b=[])),this.parent},n.prototype.node=function(s,b,S){var T,u;return s!=null&&(s=C(s)),b||(b={}),b=C(b),k(b)||(u=[b,S],S=u[0],b=u[1]),T=new d(this,s,b),S!=null&&T.text(S),this.children.push(T),T},n.prototype.text=function(s){var b;return k(s)&&this.element(s),b=new m(this,s),this.children.push(b),this},n.prototype.cdata=function(s){var b;return b=new i(this,s),this.children.push(b),this},n.prototype.comment=function(s){var b;return b=new l(this,s),this.children.push(b),this},n.prototype.commentBefore=function(s){var b,S,T;return S=this.parent.children.indexOf(this),T=this.parent.children.splice(S),b=this.parent.comment(s),Array.prototype.push.apply(this.parent.children,T),this},n.prototype.commentAfter=function(s){var b,S,T;return S=this.parent.children.indexOf(this),T=this.parent.children.splice(S+1),b=this.parent.comment(s),Array.prototype.push.apply(this.parent.children,T),this},n.prototype.raw=function(s){var b;return b=new v(this,s),this.children.push(b),this},n.prototype.dummy=function(){var s;return s=new c(this),s},n.prototype.instruction=function(s,b){var S,T,u,I,D;if(s!=null&&(s=C(s)),b!=null&&(b=C(b)),Array.isArray(s))for(I=0,D=s.length;I<D;I++)S=s[I],this.instruction(S);else if(k(s))for(S in s)w.call(s,S)&&(T=s[S],this.instruction(S,T));else A(b)&&(b=b.apply()),u=new y(this,s,b),this.children.push(u);return this},n.prototype.instructionBefore=function(s,b){var S,T,u;return T=this.parent.children.indexOf(this),u=this.parent.children.splice(T),S=this.parent.instruction(s,b),Array.prototype.push.apply(this.parent.children,u),this},n.prototype.instructionAfter=function(s,b){var S,T,u;return T=this.parent.children.indexOf(this),u=this.parent.children.splice(T+1),S=this.parent.instruction(s,b),Array.prototype.push.apply(this.parent.children,u),this},n.prototype.declaration=function(s,b,S){var T,u;return T=this.document(),u=new r(T,s,b,S),T.children.length===0?T.children.unshift(u):T.children[0].type===e.Declaration?T.children[0]=u:T.children.unshift(u),T.root()||T},n.prototype.dtd=function(s,b){var S,T,u,I,D,O,M,L,F,P;for(T=this.document(),u=new o(T,s,b),F=T.children,I=D=0,M=F.length;D<M;I=++D)if(S=F[I],S.type===e.DocType)return T.children[I]=u,u;for(P=T.children,I=O=0,L=P.length;O<L;I=++O)if(S=P[I],S.isRoot)return T.children.splice(I,0,u),u;return T.children.push(u),u},n.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},n.prototype.root=function(){var s;for(s=this;s;){if(s.type===e.Document)return s.rootObject;if(s.isRoot)return s;s=s.parent}},n.prototype.document=function(){var s;for(s=this;s;){if(s.type===e.Document)return s;s=s.parent}},n.prototype.end=function(s){return this.document().end(s)},n.prototype.prev=function(){var s;if(s=this.parent.children.indexOf(this),s<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[s-1]},n.prototype.next=function(){var s;if(s=this.parent.children.indexOf(this),s===-1||s===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[s+1]},n.prototype.importDocument=function(s){var b;return b=s.root().clone(),b.parent=this,b.isRoot=!1,this.children.push(b),this},n.prototype.debugInfo=function(s){var b,S;return s=s||this.name,s==null&&!((b=this.parent)!=null&&b.name)?"":s==null?"parent: <"+this.parent.name+">":(S=this.parent)!=null&&S.name?"node: <"+s+">, parent: <"+this.parent.name+">":"node: <"+s+">"},n.prototype.ele=function(s,b,S){return this.element(s,b,S)},n.prototype.nod=function(s,b,S){return this.node(s,b,S)},n.prototype.txt=function(s){return this.text(s)},n.prototype.dat=function(s){return this.cdata(s)},n.prototype.com=function(s){return this.comment(s)},n.prototype.ins=function(s,b){return this.instruction(s,b)},n.prototype.doc=function(){return this.document()},n.prototype.dec=function(s,b,S){return this.declaration(s,b,S)},n.prototype.e=function(s,b,S){return this.element(s,b,S)},n.prototype.n=function(s,b,S){return this.node(s,b,S)},n.prototype.t=function(s){return this.text(s)},n.prototype.d=function(s){return this.cdata(s)},n.prototype.c=function(s){return this.comment(s)},n.prototype.r=function(s){return this.raw(s)},n.prototype.i=function(s,b){return this.instruction(s,b)},n.prototype.u=function(){return this.up()},n.prototype.importXMLBuilder=function(s){return this.importDocument(s)},n.prototype.replaceChild=function(s,b){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.removeChild=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.appendChild=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.hasChildNodes=function(){return this.children.length!==0},n.prototype.cloneNode=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isSupported=function(s,b){return!0},n.prototype.hasAttributes=function(){return this.attribs.length!==0},n.prototype.compareDocumentPosition=function(s){var b,S;return b=this,b===s?0:this.document()!==s.document()?(S=t.Disconnected|t.ImplementationSpecific,Math.random()<.5?S|=t.Preceding:S|=t.Following,S):b.isAncestor(s)?t.Contains|t.Preceding:b.isDescendant(s)?t.Contains|t.Following:b.isPreceding(s)?t.Preceding:t.Following},n.prototype.isSameNode=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.lookupPrefix=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isDefaultNamespace=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.lookupNamespaceURI=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isEqualNode=function(s){var b,S,T;if(s.nodeType!==this.nodeType||s.children.length!==this.children.length)return!1;for(b=S=0,T=this.children.length-1;0<=T?S<=T:S>=T;b=0<=T?++S:--S)if(!this.children[b].isEqualNode(s.children[b]))return!1;return!0},n.prototype.getFeature=function(s,b){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setUserData=function(s,b,S){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getUserData=function(s){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.contains=function(s){return s?s===this||this.isDescendant(s):!1},n.prototype.isDescendant=function(s){var b,S,T,u,I;for(I=this.children,T=0,u=I.length;T<u;T++)if(b=I[T],s===b||(S=b.isDescendant(s),S))return!0;return!1},n.prototype.isAncestor=function(s){return s.isDescendant(this)},n.prototype.isPreceding=function(s){var b,S;return b=this.treePosition(s),S=this.treePosition(this),b===-1||S===-1?!1:b<S},n.prototype.isFollowing=function(s){var b,S;return b=this.treePosition(s),S=this.treePosition(this),b===-1||S===-1?!1:b>S},n.prototype.treePosition=function(s){var b,S;return S=0,b=!1,this.foreachTreeNode(this.document(),function(T){if(S++,!b&&T===s)return b=!0}),b?S:-1},n.prototype.foreachTreeNode=function(s,b){var S,T,u,I,D;for(s||(s=this.document()),I=s.children,T=0,u=I.length;T<u;T++){if(S=I[T],D=b(S))return D;if(D=this.foreachTreeNode(S,b),D)return D}},n})()}).call(Cn)});var Ye=U((xn,Tn)=>{(function(){var t,e=function(l,r){return function(){return l.apply(r,arguments)}},i={}.hasOwnProperty;Tn.exports=t=(function(){function l(r){this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this);var o,c,d;r||(r={}),this.options=r,this.options.version||(this.options.version="1.0"),c=r.stringify||{};for(o in c)i.call(c,o)&&(d=c[o],this[o]=d)}return l.prototype.name=function(r){return this.options.noValidation?r:this.assertLegalName(""+r||"")},l.prototype.text=function(r){return this.options.noValidation?r:this.assertLegalChar(this.textEscape(""+r||""))},l.prototype.cdata=function(r){return this.options.noValidation?r:(r=""+r||"",r=r.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(r))},l.prototype.comment=function(r){if(this.options.noValidation)return r;if(r=""+r||"",r.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+r);return this.assertLegalChar(r)},l.prototype.raw=function(r){return this.options.noValidation?r:""+r||""},l.prototype.attValue=function(r){return this.options.noValidation?r:this.assertLegalChar(this.attEscape(r=""+r||""))},l.prototype.insTarget=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.insValue=function(r){if(this.options.noValidation)return r;if(r=""+r||"",r.match(/\?>/))throw new Error("Invalid processing instruction value: "+r);return this.assertLegalChar(r)},l.prototype.xmlVersion=function(r){if(this.options.noValidation)return r;if(r=""+r||"",!r.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+r);return r},l.prototype.xmlEncoding=function(r){if(this.options.noValidation)return r;if(r=""+r||"",!r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+r);return this.assertLegalChar(r)},l.prototype.xmlStandalone=function(r){return this.options.noValidation?r:r?"yes":"no"},l.prototype.dtdPubID=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdSysID=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdElementValue=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdAttType=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdAttDefault=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdEntityValue=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.dtdNData=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},l.prototype.convertAttKey="@",l.prototype.convertPIKey="?",l.prototype.convertTextKey="#text",l.prototype.convertCDataKey="#cdata",l.prototype.convertCommentKey="#comment",l.prototype.convertRawKey="#raw",l.prototype.assertLegalChar=function(r){var o,c;if(this.options.noValidation)return r;if(o="",this.options.version==="1.0"){if(o=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=r.match(o))throw new Error("Invalid character in string: "+r+" at index "+c.index)}else if(this.options.version==="1.1"&&(o=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=r.match(o)))throw new Error("Invalid character in string: "+r+" at index "+c.index);return r},l.prototype.assertLegalName=function(r){var o;if(this.options.noValidation)return r;if(this.assertLegalChar(r),o=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!r.match(o))throw new Error("Invalid character in name");return r},l.prototype.textEscape=function(r){var o;return this.options.noValidation?r:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,r.replace(o,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},l.prototype.attEscape=function(r){var o;return this.options.noValidation?r:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,r.replace(o,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},l})()}).call(xn)});var Zt=U((_n,En)=>{(function(){En.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(_n)});var Je=U((Sn,An)=>{(function(){var t,e,i,l,r,o,c,d,p,h,g,y,v,m,C,x,A,k={}.hasOwnProperty;A=yt().assign,t=J(),p=we(),h=Te(),i=ye(),l=ve(),y=ge(),m=_e(),C=Ee(),v=Se(),g=Ke(),r=be(),o=Ie(),c=Ce(),d=xe(),e=Zt(),An.exports=x=(function(){function _(w){var n,s,b;w||(w={}),this.options=w,s=w.writer||{};for(n in s)k.call(s,n)&&(b=s[n],this["_"+n]=this[n],this[n]=b)}return _.prototype.filterOptions=function(w){var n,s,b,S,T,u,I,D;return w||(w={}),w=A({},this.options,w),n={writer:this},n.pretty=w.pretty||!1,n.allowEmpty=w.allowEmpty||!1,n.indent=(s=w.indent)!=null?s:"  ",n.newline=(b=w.newline)!=null?b:`
`,n.offset=(S=w.offset)!=null?S:0,n.dontPrettyTextNodes=(T=(u=w.dontPrettyTextNodes)!=null?u:w.dontprettytextnodes)!=null?T:0,n.spaceBeforeSlash=(I=(D=w.spaceBeforeSlash)!=null?D:w.spacebeforeslash)!=null?I:"",n.spaceBeforeSlash===!0&&(n.spaceBeforeSlash=" "),n.suppressPrettyCount=0,n.user={},n.state=e.None,n},_.prototype.indent=function(w,n,s){var b;return!n.pretty||n.suppressPrettyCount?"":n.pretty&&(b=(s||0)+n.offset+1,b>0)?new Array(b).join(n.indent):""},_.prototype.endline=function(w,n,s){return!n.pretty||n.suppressPrettyCount?"":n.newline},_.prototype.attribute=function(w,n,s){var b;return this.openAttribute(w,n,s),b=" "+w.name+'="'+w.value+'"',this.closeAttribute(w,n,s),b},_.prototype.cdata=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<![CDATA[",n.state=e.InsideTag,b+=w.value,n.state=e.CloseTag,b+="]]>"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.comment=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<!-- ",n.state=e.InsideTag,b+=w.value,n.state=e.CloseTag,b+=" -->"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.declaration=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<?xml",n.state=e.InsideTag,b+=' version="'+w.version+'"',w.encoding!=null&&(b+=' encoding="'+w.encoding+'"'),w.standalone!=null&&(b+=' standalone="'+w.standalone+'"'),n.state=e.CloseTag,b+=n.spaceBeforeSlash+"?>",b+=this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.docType=function(w,n,s){var b,S,T,u,I;if(s||(s=0),this.openNode(w,n,s),n.state=e.OpenTag,u=this.indent(w,n,s),u+="<!DOCTYPE "+w.root().name,w.pubID&&w.sysID?u+=' PUBLIC "'+w.pubID+'" "'+w.sysID+'"':w.sysID&&(u+=' SYSTEM "'+w.sysID+'"'),w.children.length>0){for(u+=" [",u+=this.endline(w,n,s),n.state=e.InsideTag,I=w.children,S=0,T=I.length;S<T;S++)b=I[S],u+=this.writeChildNode(b,n,s+1);n.state=e.CloseTag,u+="]"}return n.state=e.CloseTag,u+=n.spaceBeforeSlash+">",u+=this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),u},_.prototype.element=function(w,n,s){var b,S,T,u,I,D,O,M,L,F,P,$,R,G;s||(s=0),F=!1,P="",this.openNode(w,n,s),n.state=e.OpenTag,P+=this.indent(w,n,s)+"<"+w.name,$=w.attribs;for(L in $)k.call($,L)&&(b=$[L],P+=this.attribute(b,n,s));if(T=w.children.length,u=T===0?null:w.children[0],T===0||w.children.every(function(ct){return(ct.type===t.Text||ct.type===t.Raw)&&ct.value===""}))n.allowEmpty?(P+=">",n.state=e.CloseTag,P+="</"+w.name+">"+this.endline(w,n,s)):(n.state=e.CloseTag,P+=n.spaceBeforeSlash+"/>"+this.endline(w,n,s));else if(n.pretty&&T===1&&(u.type===t.Text||u.type===t.Raw)&&u.value!=null)P+=">",n.state=e.InsideTag,n.suppressPrettyCount++,F=!0,P+=this.writeChildNode(u,n,s+1),n.suppressPrettyCount--,F=!1,n.state=e.CloseTag,P+="</"+w.name+">"+this.endline(w,n,s);else{if(n.dontPrettyTextNodes){for(R=w.children,I=0,O=R.length;I<O;I++)if(S=R[I],(S.type===t.Text||S.type===t.Raw)&&S.value!=null){n.suppressPrettyCount++,F=!0;break}}for(P+=">"+this.endline(w,n,s),n.state=e.InsideTag,G=w.children,D=0,M=G.length;D<M;D++)S=G[D],P+=this.writeChildNode(S,n,s+1);n.state=e.CloseTag,P+=this.indent(w,n,s)+"</"+w.name+">",F&&n.suppressPrettyCount--,P+=this.endline(w,n,s),n.state=e.None}return this.closeNode(w,n,s),P},_.prototype.writeChildNode=function(w,n,s){switch(w.type){case t.CData:return this.cdata(w,n,s);case t.Comment:return this.comment(w,n,s);case t.Element:return this.element(w,n,s);case t.Raw:return this.raw(w,n,s);case t.Text:return this.text(w,n,s);case t.ProcessingInstruction:return this.processingInstruction(w,n,s);case t.Dummy:return"";case t.Declaration:return this.declaration(w,n,s);case t.DocType:return this.docType(w,n,s);case t.AttributeDeclaration:return this.dtdAttList(w,n,s);case t.ElementDeclaration:return this.dtdElement(w,n,s);case t.EntityDeclaration:return this.dtdEntity(w,n,s);case t.NotationDeclaration:return this.dtdNotation(w,n,s);default:throw new Error("Unknown XML node type: "+w.constructor.name)}},_.prototype.processingInstruction=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<?",n.state=e.InsideTag,b+=w.target,w.value&&(b+=" "+w.value),n.state=e.CloseTag,b+=n.spaceBeforeSlash+"?>",b+=this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.raw=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s),n.state=e.InsideTag,b+=w.value,n.state=e.CloseTag,b+=this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.text=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s),n.state=e.InsideTag,b+=w.value,n.state=e.CloseTag,b+=this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.dtdAttList=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<!ATTLIST",n.state=e.InsideTag,b+=" "+w.elementName+" "+w.attributeName+" "+w.attributeType,w.defaultValueType!=="#DEFAULT"&&(b+=" "+w.defaultValueType),w.defaultValue&&(b+=' "'+w.defaultValue+'"'),n.state=e.CloseTag,b+=n.spaceBeforeSlash+">"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.dtdElement=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<!ELEMENT",n.state=e.InsideTag,b+=" "+w.name+" "+w.value,n.state=e.CloseTag,b+=n.spaceBeforeSlash+">"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.dtdEntity=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<!ENTITY",n.state=e.InsideTag,w.pe&&(b+=" %"),b+=" "+w.name,w.value?b+=' "'+w.value+'"':(w.pubID&&w.sysID?b+=' PUBLIC "'+w.pubID+'" "'+w.sysID+'"':w.sysID&&(b+=' SYSTEM "'+w.sysID+'"'),w.nData&&(b+=" NDATA "+w.nData)),n.state=e.CloseTag,b+=n.spaceBeforeSlash+">"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.dtdNotation=function(w,n,s){var b;return this.openNode(w,n,s),n.state=e.OpenTag,b=this.indent(w,n,s)+"<!NOTATION",n.state=e.InsideTag,b+=" "+w.name,w.pubID&&w.sysID?b+=' PUBLIC "'+w.pubID+'" "'+w.sysID+'"':w.pubID?b+=' PUBLIC "'+w.pubID+'"':w.sysID&&(b+=' SYSTEM "'+w.sysID+'"'),n.state=e.CloseTag,b+=n.spaceBeforeSlash+">"+this.endline(w,n,s),n.state=e.None,this.closeNode(w,n,s),b},_.prototype.openNode=function(w,n,s){},_.prototype.closeNode=function(w,n,s){},_.prototype.openAttribute=function(w,n,s){},_.prototype.closeAttribute=function(w,n,s){},_})()}).call(Sn)});var Ae=U((Dn,kn)=>{(function(){var t,e,i=function(r,o){for(var c in o)l.call(o,c)&&(r[c]=o[c]);function d(){this.constructor=r}return d.prototype=o.prototype,r.prototype=new d,r.__super__=o.prototype,r},l={}.hasOwnProperty;e=Je(),kn.exports=t=(function(r){i(o,r);function o(c){o.__super__.constructor.call(this,c)}return o.prototype.document=function(c,d){var p,h,g,y,v;for(d=this.filterOptions(d),y="",v=c.children,h=0,g=v.length;h<g;h++)p=v[h],y+=this.writeChildNode(p,d,0);return d.pretty&&y.slice(-d.newline.length)===d.newline&&(y=y.slice(0,-d.newline.length)),y},o})(e)}).call(Dn)});var Qe=U((Nn,On)=>{(function(){var t,e,i,l,r,o,c,d,p=function(g,y){for(var v in y)h.call(y,v)&&(g[v]=y[v]);function m(){this.constructor=g}return m.prototype=y.prototype,g.prototype=new m,g.__super__=y.prototype,g},h={}.hasOwnProperty;d=yt().isPlainObject,i=Ge(),e=Pi(),r=lt(),t=J(),c=Ye(),o=Ae(),On.exports=l=(function(g){p(y,g);function y(v){y.__super__.constructor.call(this,null),this.name="#document",this.type=t.Document,this.documentURI=null,this.domConfig=new e,v||(v={}),v.writer||(v.writer=new o),this.options=v,this.stringify=new c(v)}return Object.defineProperty(y.prototype,"implementation",{value:new i}),Object.defineProperty(y.prototype,"doctype",{get:function(){var v,m,C,x;for(x=this.children,m=0,C=x.length;m<C;m++)if(v=x[m],v.type===t.DocType)return v;return null}}),Object.defineProperty(y.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(y.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(y.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(y.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].encoding:null}}),Object.defineProperty(y.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(y.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(y.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(y.prototype,"origin",{get:function(){return null}}),Object.defineProperty(y.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(y.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(y.prototype,"contentType",{get:function(){return null}}),y.prototype.end=function(v){var m;return m={},v?d(v)&&(m=v,v=this.options.writer):v=this.options.writer,v.document(this,v.filterOptions(m))},y.prototype.toString=function(v){return this.options.writer.document(this,this.options.writer.filterOptions(v))},y.prototype.createElement=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTextNode=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createComment=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createCDATASection=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createProcessingInstruction=function(v,m){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttribute=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEntityReference=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagName=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.importNode=function(v,m){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createElementNS=function(v,m){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttributeNS=function(v,m){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagNameNS=function(v,m){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementById=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.adoptNode=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.renameNode=function(v,m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByClassName=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEvent=function(v){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createNodeIterator=function(v,m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTreeWalker=function(v,m,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},y})(r)}).call(Nn)});var Rn=U((Pn,Mn)=>{(function(){var t,e,i,l,r,o,c,d,p,h,g,y,v,m,C,x,A,k,_,w,n,s,b,S,T={}.hasOwnProperty;S=yt(),s=S.isObject,n=S.isFunction,b=S.isPlainObject,w=S.getValue,t=J(),y=Qe(),m=ge(),l=ye(),r=ve(),x=_e(),_=Ee(),C=Se(),h=we(),g=Te(),o=be(),d=Ce(),c=Ie(),p=xe(),i=We(),k=Ye(),A=Ae(),e=Zt(),Mn.exports=v=(function(){function u(I,D,O){var M;this.name="?xml",this.type=t.Document,I||(I={}),M={},I.writer?b(I.writer)&&(M=I.writer,I.writer=new A):I.writer=new A,this.options=I,this.writer=I.writer,this.writerOptions=this.writer.filterOptions(M),this.stringify=new k(I),this.onDataCallback=D||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return u.prototype.createChildNode=function(I){var D,O,M,L,F,P,$,R;switch(I.type){case t.CData:this.cdata(I.value);break;case t.Comment:this.comment(I.value);break;case t.Element:M={},$=I.attribs;for(O in $)T.call($,O)&&(D=$[O],M[O]=D.value);this.node(I.name,M);break;case t.Dummy:this.dummy();break;case t.Raw:this.raw(I.value);break;case t.Text:this.text(I.value);break;case t.ProcessingInstruction:this.instruction(I.target,I.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+I.constructor.name)}for(R=I.children,F=0,P=R.length;F<P;F++)L=R[F],this.createChildNode(L),L.type===t.Element&&this.up();return this},u.prototype.dummy=function(){return this},u.prototype.node=function(I,D,O){var M;if(I==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(I));return this.openCurrent(),I=w(I),D==null&&(D={}),D=w(D),s(D)||(M=[D,O],O=M[0],D=M[1]),this.currentNode=new m(this,I,D),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},u.prototype.element=function(I,D,O){var M,L,F,P,$,R;if(this.currentNode&&this.currentNode.type===t.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(I)||s(I)||n(I))for(P=this.options.noValidation,this.options.noValidation=!0,R=new y(this.options).element("TEMP_ROOT"),R.element(I),this.options.noValidation=P,$=R.children,L=0,F=$.length;L<F;L++)M=$[L],this.createChildNode(M),M.type===t.Element&&this.up();else this.node(I,D,O);return this},u.prototype.attribute=function(I,D){var O,M;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(I));if(I!=null&&(I=w(I)),s(I))for(O in I)T.call(I,O)&&(M=I[O],this.attribute(O,M));else n(D)&&(D=D.apply()),this.options.keepNullAttributes&&D==null?this.currentNode.attribs[I]=new i(this,I,""):D!=null&&(this.currentNode.attribs[I]=new i(this,I,D));return this},u.prototype.text=function(I){var D;return this.openCurrent(),D=new _(this,I),this.onData(this.writer.text(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.cdata=function(I){var D;return this.openCurrent(),D=new l(this,I),this.onData(this.writer.cdata(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.comment=function(I){var D;return this.openCurrent(),D=new r(this,I),this.onData(this.writer.comment(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.raw=function(I){var D;return this.openCurrent(),D=new x(this,I),this.onData(this.writer.raw(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.instruction=function(I,D){var O,M,L,F,P;if(this.openCurrent(),I!=null&&(I=w(I)),D!=null&&(D=w(D)),Array.isArray(I))for(O=0,F=I.length;O<F;O++)M=I[O],this.instruction(M);else if(s(I))for(M in I)T.call(I,M)&&(L=I[M],this.instruction(M,L));else n(D)&&(D=D.apply()),P=new C(this,I,D),this.onData(this.writer.processingInstruction(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},u.prototype.declaration=function(I,D,O){var M;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return M=new h(this,I,D,O),this.onData(this.writer.declaration(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.doctype=function(I,D,O){if(this.openCurrent(),I==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new g(this,D,O),this.currentNode.rootNodeName=I,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},u.prototype.dtdElement=function(I,D){var O;return this.openCurrent(),O=new c(this,I,D),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.attList=function(I,D,O,M,L){var F;return this.openCurrent(),F=new o(this,I,D,O,M,L),this.onData(this.writer.dtdAttList(F,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.entity=function(I,D){var O;return this.openCurrent(),O=new d(this,!1,I,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.pEntity=function(I,D){var O;return this.openCurrent(),O=new d(this,!0,I,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.notation=function(I,D){var O;return this.openCurrent(),O=new p(this,I,D),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},u.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},u.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},u.prototype.openNode=function(I){var D,O,M,L;if(!I.isOpen){if(!this.root&&this.currentLevel===0&&I.type===t.Element&&(this.root=I),O="",I.type===t.Element){this.writerOptions.state=e.OpenTag,O=this.writer.indent(I,this.writerOptions,this.currentLevel)+"<"+I.name,L=I.attribs;for(M in L)T.call(L,M)&&(D=L[M],O+=this.writer.attribute(D,this.writerOptions,this.currentLevel));O+=(I.children?">":"/>")+this.writer.endline(I,this.writerOptions,this.currentLevel),this.writerOptions.state=e.InsideTag}else this.writerOptions.state=e.OpenTag,O=this.writer.indent(I,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+I.rootNodeName,I.pubID&&I.sysID?O+=' PUBLIC "'+I.pubID+'" "'+I.sysID+'"':I.sysID&&(O+=' SYSTEM "'+I.sysID+'"'),I.children?(O+=" [",this.writerOptions.state=e.InsideTag):(this.writerOptions.state=e.CloseTag,O+=">"),O+=this.writer.endline(I,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),I.isOpen=!0}},u.prototype.closeNode=function(I){var D;if(!I.isClosed)return D="",this.writerOptions.state=e.CloseTag,I.type===t.Element?D=this.writer.indent(I,this.writerOptions,this.currentLevel)+"</"+I.name+">"+this.writer.endline(I,this.writerOptions,this.currentLevel):D=this.writer.indent(I,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(I,this.writerOptions,this.currentLevel),this.writerOptions.state=e.None,this.onData(D,this.currentLevel),I.isClosed=!0},u.prototype.onData=function(I,D){return this.documentStarted=!0,this.onDataCallback(I,D+1)},u.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},u.prototype.debugInfo=function(I){return I==null?"":"node: <"+I+">"},u.prototype.ele=function(){return this.element.apply(this,arguments)},u.prototype.nod=function(I,D,O){return this.node(I,D,O)},u.prototype.txt=function(I){return this.text(I)},u.prototype.dat=function(I){return this.cdata(I)},u.prototype.com=function(I){return this.comment(I)},u.prototype.ins=function(I,D){return this.instruction(I,D)},u.prototype.dec=function(I,D,O){return this.declaration(I,D,O)},u.prototype.dtd=function(I,D,O){return this.doctype(I,D,O)},u.prototype.e=function(I,D,O){return this.element(I,D,O)},u.prototype.n=function(I,D,O){return this.node(I,D,O)},u.prototype.t=function(I){return this.text(I)},u.prototype.d=function(I){return this.cdata(I)},u.prototype.c=function(I){return this.comment(I)},u.prototype.r=function(I){return this.raw(I)},u.prototype.i=function(I,D){return this.instruction(I,D)},u.prototype.att=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.a=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.ent=function(I,D){return this.entity(I,D)},u.prototype.pent=function(I,D){return this.pEntity(I,D)},u.prototype.not=function(I,D){return this.notation(I,D)},u})()}).call(Pn)});var Bn=U((Ln,Fn)=>{(function(){var t,e,i,l,r=function(c,d){for(var p in d)o.call(d,p)&&(c[p]=d[p]);function h(){this.constructor=c}return h.prototype=d.prototype,c.prototype=new h,c.__super__=d.prototype,c},o={}.hasOwnProperty;t=J(),l=Je(),e=Zt(),Fn.exports=i=(function(c){r(d,c);function d(p,h){this.stream=p,d.__super__.constructor.call(this,h)}return d.prototype.endline=function(p,h,g){return p.isLastRootNode&&h.state===e.CloseTag?"":d.__super__.endline.call(this,p,h,g)},d.prototype.document=function(p,h){var g,y,v,m,C,x,A,k,_;for(A=p.children,y=v=0,C=A.length;v<C;y=++v)g=A[y],g.isLastRootNode=y===p.children.length-1;for(h=this.filterOptions(h),k=p.children,_=[],m=0,x=k.length;m<x;m++)g=k[m],_.push(this.writeChildNode(g,h,0));return _},d.prototype.attribute=function(p,h,g){return this.stream.write(d.__super__.attribute.call(this,p,h,g))},d.prototype.cdata=function(p,h,g){return this.stream.write(d.__super__.cdata.call(this,p,h,g))},d.prototype.comment=function(p,h,g){return this.stream.write(d.__super__.comment.call(this,p,h,g))},d.prototype.declaration=function(p,h,g){return this.stream.write(d.__super__.declaration.call(this,p,h,g))},d.prototype.docType=function(p,h,g){var y,v,m,C;if(g||(g=0),this.openNode(p,h,g),h.state=e.OpenTag,this.stream.write(this.indent(p,h,g)),this.stream.write("<!DOCTYPE "+p.root().name),p.pubID&&p.sysID?this.stream.write(' PUBLIC "'+p.pubID+'" "'+p.sysID+'"'):p.sysID&&this.stream.write(' SYSTEM "'+p.sysID+'"'),p.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(p,h,g)),h.state=e.InsideTag,C=p.children,v=0,m=C.length;v<m;v++)y=C[v],this.writeChildNode(y,h,g+1);h.state=e.CloseTag,this.stream.write("]")}return h.state=e.CloseTag,this.stream.write(h.spaceBeforeSlash+">"),this.stream.write(this.endline(p,h,g)),h.state=e.None,this.closeNode(p,h,g)},d.prototype.element=function(p,h,g){var y,v,m,C,x,A,k,_,w,n;g||(g=0),this.openNode(p,h,g),h.state=e.OpenTag,this.stream.write(this.indent(p,h,g)+"<"+p.name),w=p.attribs;for(k in w)o.call(w,k)&&(y=w[k],this.attribute(y,h,g));if(m=p.children.length,C=m===0?null:p.children[0],m===0||p.children.every(function(s){return(s.type===t.Text||s.type===t.Raw)&&s.value===""}))h.allowEmpty?(this.stream.write(">"),h.state=e.CloseTag,this.stream.write("</"+p.name+">")):(h.state=e.CloseTag,this.stream.write(h.spaceBeforeSlash+"/>"));else if(h.pretty&&m===1&&(C.type===t.Text||C.type===t.Raw)&&C.value!=null)this.stream.write(">"),h.state=e.InsideTag,h.suppressPrettyCount++,_=!0,this.writeChildNode(C,h,g+1),h.suppressPrettyCount--,_=!1,h.state=e.CloseTag,this.stream.write("</"+p.name+">");else{for(this.stream.write(">"+this.endline(p,h,g)),h.state=e.InsideTag,n=p.children,x=0,A=n.length;x<A;x++)v=n[x],this.writeChildNode(v,h,g+1);h.state=e.CloseTag,this.stream.write(this.indent(p,h,g)+"</"+p.name+">")}return this.stream.write(this.endline(p,h,g)),h.state=e.None,this.closeNode(p,h,g)},d.prototype.processingInstruction=function(p,h,g){return this.stream.write(d.__super__.processingInstruction.call(this,p,h,g))},d.prototype.raw=function(p,h,g){return this.stream.write(d.__super__.raw.call(this,p,h,g))},d.prototype.text=function(p,h,g){return this.stream.write(d.__super__.text.call(this,p,h,g))},d.prototype.dtdAttList=function(p,h,g){return this.stream.write(d.__super__.dtdAttList.call(this,p,h,g))},d.prototype.dtdElement=function(p,h,g){return this.stream.write(d.__super__.dtdElement.call(this,p,h,g))},d.prototype.dtdEntity=function(p,h,g){return this.stream.write(d.__super__.dtdEntity.call(this,p,h,g))},d.prototype.dtdNotation=function(p,h,g){return this.stream.write(d.__super__.dtdNotation.call(this,p,h,g))},d})(l)}).call(Ln)});var Un=U(($n,Tt)=>{(function(){var t,e,i,l,r,o,c,d,p,h;h=yt(),d=h.assign,p=h.isFunction,i=Ge(),l=Qe(),r=Rn(),c=Ae(),o=Bn(),t=J(),e=Zt(),Tt.exports.create=function(g,y,v,m){var C,x;if(g==null)throw new Error("Root element needs a name.");return m=d({},y,v,m),C=new l(m),x=C.element(g),m.headless||(C.declaration(m),(m.pubID!=null||m.sysID!=null)&&C.dtd(m)),x},Tt.exports.begin=function(g,y,v){var m;return p(g)&&(m=[g,y],y=m[0],v=m[1],g={}),y?new r(g,y,v):new l(g)},Tt.exports.stringWriter=function(g){return new c(g)},Tt.exports.streamWriter=function(g,y){return new o(g,y)},Tt.exports.implementation=new i,Tt.exports.nodeType=t,Tt.exports.writerState=e}).call($n)});var qn=U(Ze=>{(function(){"use strict";var t,e,i,l,r,o={}.hasOwnProperty;t=Un(),e=he().defaults,l=function(c){return typeof c=="string"&&(c.indexOf("&")>=0||c.indexOf(">")>=0||c.indexOf("<")>=0)},r=function(c){return"<![CDATA["+i(c)+"]]>"},i=function(c){return c.replace("]]>","]]]]><![CDATA[>")},Ze.Builder=(function(){function c(d){var p,h,g;this.options={},h=e["0.2"];for(p in h)o.call(h,p)&&(g=h[p],this.options[p]=g);for(p in d)o.call(d,p)&&(g=d[p],this.options[p]=g)}return c.prototype.buildObject=function(d){var p,h,g,y,v;return p=this.options.attrkey,h=this.options.charkey,Object.keys(d).length===1&&this.options.rootName===e["0.2"].rootName?(v=Object.keys(d)[0],d=d[v]):v=this.options.rootName,g=(function(m){return function(C,x){var A,k,_,w,n,s;if(typeof x!="object")m.options.cdata&&l(x)?C.raw(r(x)):C.txt(x);else if(Array.isArray(x)){for(w in x)if(o.call(x,w)){k=x[w];for(n in k)_=k[n],C=g(C.ele(n),_).up()}}else for(n in x)if(o.call(x,n))if(k=x[n],n===p){if(typeof k=="object")for(A in k)s=k[A],C=C.att(A,s)}else if(n===h)m.options.cdata&&l(k)?C=C.raw(r(k)):C=C.txt(k);else if(Array.isArray(k))for(w in k)o.call(k,w)&&(_=k[w],typeof _=="string"?m.options.cdata&&l(_)?C=C.ele(n).raw(r(_)).up():C=C.ele(n,_).up():C=g(C.ele(n),_).up());else typeof k=="object"?C=g(C.ele(n),k).up():typeof k=="string"&&m.options.cdata&&l(k)?C=C.ele(n).raw(r(k)).up():(k==null&&(k=""),C=C.ele(n,k.toString()).up());return C}})(this),y=t.create(v,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),g(y,d).end(this.options.renderOpts)},c})()}).call(Ze)});var Vn=U(De=>{(function(t){t.parser=function(f,a){return new i(f,a)},t.SAXParser=i,t.SAXStream=g,t.createStream=p,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function i(f,a){if(!(this instanceof i))return new i(f,a);var N=this;r(N),N.q=N.c="",N.bufferCheckPosition=t.MAX_BUFFER_LENGTH,N.encoding=null,N.opt=a||{},N.opt.lowercase=N.opt.lowercase||N.opt.lowercasetags,N.looseCase=N.opt.lowercase?"toLowerCase":"toUpperCase",N.opt.maxEntityCount=N.opt.maxEntityCount||512,N.opt.maxEntityDepth=N.opt.maxEntityDepth||4,N.entityCount=N.entityDepth=0,N.tags=[],N.closed=N.closedRoot=N.sawRoot=!1,N.tag=N.error=null,N.strict=!!f,N.noscript=!!(f||N.opt.noscript),N.state=u.BEGIN,N.strictEntities=N.opt.strictEntities,N.ENTITIES=N.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),N.attribList=[],N.opt.xmlns&&(N.ns=Object.create(x)),N.opt.unquotedAttributeValues===void 0&&(N.opt.unquotedAttributeValues=!f),N.trackPosition=N.opt.position!==!1,N.trackPosition&&(N.position=N.line=N.column=0),D(N,"onready")}Object.create||(Object.create=function(f){function a(){}a.prototype=f;var N=new a;return N}),Object.keys||(Object.keys=function(f){var a=[];for(var N in f)f.hasOwnProperty(N)&&a.push(N);return a});function l(f){for(var a=Math.max(t.MAX_BUFFER_LENGTH,10),N=0,E=0,H=e.length;E<H;E++){var K=f[e[E]].length;if(K>a)switch(e[E]){case"textNode":$(f);break;case"cdata":P(f,"oncdata",f.cdata),f.cdata="";break;case"script":P(f,"onscript",f.script),f.script="";break;default:G(f,"Max buffer length exceeded: "+e[E])}N=Math.max(N,K)}var Y=t.MAX_BUFFER_LENGTH-N;f.bufferCheckPosition=Y+f.position}function r(f){for(var a=0,N=e.length;a<N;a++)f[e[a]]=""}function o(f){$(f),f.cdata!==""&&(P(f,"oncdata",f.cdata),f.cdata=""),f.script!==""&&(P(f,"onscript",f.script),f.script="")}i.prototype={end:function(){ct(this)},write:ce,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){o(this)}};var c;try{c=require("stream").Stream}catch{c=function(){}}c||(c=function(){});var d=t.EVENTS.filter(function(f){return f!=="error"&&f!=="end"});function p(f,a){return new g(f,a)}function h(f,a){if(f.length>=2){if(f[0]===255&&f[1]===254)return"utf-16le";if(f[0]===254&&f[1]===255)return"utf-16be"}return f.length>=3&&f[0]===239&&f[1]===187&&f[2]===191?"utf8":f.length>=4?f[0]===60&&f[1]===0&&f[2]===63&&f[3]===0?"utf-16le":f[0]===0&&f[1]===60&&f[2]===0&&f[3]===63?"utf-16be":"utf8":a?"utf8":null}function g(f,a){if(!(this instanceof g))return new g(f,a);c.apply(this),this._parser=new i(f,a),this.writable=!0,this.readable=!0;var N=this;this._parser.onend=function(){N.emit("end")},this._parser.onerror=function(E){N.emit("error",E),N._parser.error=null},this._decoder=null,this._decoderBuffer=null,d.forEach(function(E){Object.defineProperty(N,"on"+E,{get:function(){return N._parser["on"+E]},set:function(H){if(!H)return N.removeAllListeners(E),N._parser["on"+E]=H,H;N.on(E,H)},enumerable:!0,configurable:!1})})}g.prototype=Object.create(c.prototype,{constructor:{value:g}}),g.prototype._decodeBuffer=function(f,a){if(this._decoderBuffer&&(f=Buffer.concat([this._decoderBuffer,f]),this._decoderBuffer=null),!this._decoder){var N=h(f,a);if(!N)return this._decoderBuffer=f,"";this._parser.encoding=N,this._decoder=new TextDecoder(N)}return this._decoder.decode(f,{stream:!a})},g.prototype.write=function(f){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(f))f=this._decodeBuffer(f,!1);else if(this._decoderBuffer){var a=this._decodeBuffer(Buffer.alloc(0),!0);a&&(this._parser.write(a),this.emit("data",a))}return this._parser.write(f.toString()),this.emit("data",f),!0},g.prototype.end=function(f){if(f&&f.length&&this.write(f),this._decoderBuffer){var a=this._decodeBuffer(Buffer.alloc(0),!0);a&&(this._parser.write(a),this.emit("data",a))}else if(this._decoder){var N=this._decoder.decode();N&&(this._parser.write(N),this.emit("data",N))}return this._parser.end(),!0},g.prototype.on=function(f,a){var N=this;return!N._parser["on"+f]&&d.indexOf(f)!==-1&&(N._parser["on"+f]=function(){var E=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);E.splice(0,0,f),N.emit.apply(N,E)}),c.prototype.on.call(N,f,a)};var y="[CDATA[",v="DOCTYPE",m="http://www.w3.org/XML/1998/namespace",C="http://www.w3.org/2000/xmlns/",x={xml:m,xmlns:C},A=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,k=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,_=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,w=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function n(f){return f===" "||f===`
`||f==="\r"||f==="	"}function s(f){return f==='"'||f==="'"}function b(f){return f===">"||n(f)}function S(f,a){return f.test(a)}function T(f,a){return!S(f,a)}var u=0;t.STATE={BEGIN:u++,BEGIN_WHITESPACE:u++,TEXT:u++,TEXT_ENTITY:u++,OPEN_WAKA:u++,SGML_DECL:u++,SGML_DECL_QUOTED:u++,DOCTYPE:u++,DOCTYPE_QUOTED:u++,DOCTYPE_DTD:u++,DOCTYPE_DTD_QUOTED:u++,COMMENT_STARTING:u++,COMMENT:u++,COMMENT_ENDING:u++,COMMENT_ENDED:u++,CDATA:u++,CDATA_ENDING:u++,CDATA_ENDING_2:u++,PROC_INST:u++,PROC_INST_BODY:u++,PROC_INST_ENDING:u++,OPEN_TAG:u++,OPEN_TAG_SLASH:u++,ATTRIB:u++,ATTRIB_NAME:u++,ATTRIB_NAME_SAW_WHITE:u++,ATTRIB_VALUE:u++,ATTRIB_VALUE_QUOTED:u++,ATTRIB_VALUE_CLOSED:u++,ATTRIB_VALUE_UNQUOTED:u++,ATTRIB_VALUE_ENTITY_Q:u++,ATTRIB_VALUE_ENTITY_U:u++,CLOSE_TAG:u++,CLOSE_TAG_SAW_WHITE:u++,SCRIPT:u++,SCRIPT_ENDING:u++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(f){var a=t.ENTITIES[f],N=typeof a=="number"?String.fromCharCode(a):a;t.ENTITIES[f]=N});for(var I in t.STATE)t.STATE[t.STATE[I]]=I;u=t.STATE;function D(f,a,N){f[a]&&f[a](N)}function O(f){var a=f&&f.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return a?a[2]:null}function M(f){return f?f.toLowerCase().replace(/[^a-z0-9]/g,""):null}function L(f,a){let N=M(f),E=M(a);return!N||!E?!0:E==="utf16"?N==="utf16le"||N==="utf16be":N===E}function F(f,a){if(!(!f.strict||!f.encoding||!a||a.name!=="xml")){var N=O(a.body);N&&!L(f.encoding,N)&&j(f,"XML declaration encoding "+N+" does not match detected stream encoding "+f.encoding.toUpperCase())}}function P(f,a,N){f.textNode&&$(f),D(f,a,N)}function $(f){f.textNode=R(f.opt,f.textNode),f.textNode&&D(f,"ontext",f.textNode),f.textNode=""}function R(f,a){return f.trim&&(a=a.trim()),f.normalize&&(a=a.replace(/\s+/g," ")),a}function G(f,a){return $(f),f.trackPosition&&(a+=`
Line: `+f.line+`
Column: `+f.column+`
Char: `+f.c),a=new Error(a),f.error=a,D(f,"onerror",a),f}function ct(f){return f.sawRoot&&!f.closedRoot&&j(f,"Unclosed root tag"),f.state!==u.BEGIN&&f.state!==u.BEGIN_WHITESPACE&&f.state!==u.TEXT&&G(f,"Unexpected end"),$(f),f.c="",f.closed=!0,D(f,"onend"),i.call(f,f.strict,f.opt),f}function j(f,a){if(typeof f!="object"||!(f instanceof i))throw new Error("bad call to strictFail");f.strict&&G(f,a)}function Ut(f){f.strict||(f.tagName=f.tagName[f.looseCase]());var a=f.tags[f.tags.length-1]||f,N=f.tag={name:f.tagName,attributes:{}};f.opt.xmlns&&(N.ns=a.ns),f.attribList.length=0,P(f,"onopentagstart",N)}function Kt(f,a){var N=f.indexOf(":"),E=N<0?["",f]:f.split(":"),H=E[0],K=E[1];return a&&f==="xmlns"&&(H="xmlns",K=""),{prefix:H,local:K}}function Yt(f){if(f.strict||(f.attribName=f.attribName[f.looseCase]()),f.attribList.indexOf(f.attribName)!==-1||f.tag.attributes.hasOwnProperty(f.attribName)){f.attribName=f.attribValue="";return}if(f.opt.xmlns){var a=Kt(f.attribName,!0),N=a.prefix,E=a.local;if(N==="xmlns")if(E==="xml"&&f.attribValue!==m)j(f,"xml: prefix must be bound to "+m+`
Actual: `+f.attribValue);else if(E==="xmlns"&&f.attribValue!==C)j(f,"xmlns: prefix must be bound to "+C+`
Actual: `+f.attribValue);else{var H=f.tag,K=f.tags[f.tags.length-1]||f;H.ns===K.ns&&(H.ns=Object.create(K.ns)),H.ns[E]=f.attribValue}f.attribList.push([f.attribName,f.attribValue])}else f.tag.attributes[f.attribName]=f.attribValue,P(f,"onattribute",{name:f.attribName,value:f.attribValue});f.attribName=f.attribValue=""}function vt(f,a){if(f.opt.xmlns){var N=f.tag,E=Kt(f.tagName);N.prefix=E.prefix,N.local=E.local,N.uri=N.ns[E.prefix]||"",N.prefix&&!N.uri&&(j(f,"Unbound namespace prefix: "+JSON.stringify(f.tagName)),N.uri=E.prefix);var H=f.tags[f.tags.length-1]||f;N.ns&&H.ns!==N.ns&&Object.keys(N.ns).forEach(function(gi){P(f,"onopennamespace",{prefix:gi,uri:N.ns[gi]})});for(var K=0,Y=f.attribList.length;K<Y;K++){var it=f.attribList[K],X=it[0],ut=it[1],Q=Kt(X,!0),wt=Q.prefix,Fr=Q.local,mi=wt===""?"":N.ns[wt]||"",He={name:X,value:ut,prefix:wt,local:Fr,uri:mi};wt&&wt!=="xmlns"&&!mi&&(j(f,"Unbound namespace prefix: "+JSON.stringify(wt)),He.uri=wt),f.tag.attributes[X]=He,P(f,"onattribute",He)}f.attribList.length=0}f.tag.isSelfClosing=!!a,f.sawRoot=!0,f.tags.push(f.tag),P(f,"onopentag",f.tag),a||(!f.noscript&&f.tagName.toLowerCase()==="script"?f.state=u.SCRIPT:f.state=u.TEXT,f.tag=null,f.tagName=""),f.attribName=f.attribValue="",f.attribList.length=0}function Jt(f){if(!f.tagName){j(f,"Weird empty close tag."),f.textNode+="</>",f.state=u.TEXT;return}if(f.script){if(f.tagName!=="script"){f.script+="</"+f.tagName+">",f.tagName="",f.state=u.SCRIPT;return}P(f,"onscript",f.script),f.script=""}var a=f.tags.length,N=f.tagName;f.strict||(N=N[f.looseCase]());for(var E=N;a--;){var H=f.tags[a];if(H.name!==E)j(f,"Unexpected close tag");else break}if(a<0){j(f,"Unmatched closing tag: "+f.tagName),f.textNode+="</"+f.tagName+">",f.state=u.TEXT;return}f.tagName=N;for(var K=f.tags.length;K-- >a;){var Y=f.tag=f.tags.pop();f.tagName=f.tag.name,P(f,"onclosetag",f.tagName);var it={};for(var X in Y.ns)it[X]=Y.ns[X];var ut=f.tags[f.tags.length-1]||f;f.opt.xmlns&&Y.ns!==ut.ns&&Object.keys(Y.ns).forEach(function(Q){var wt=Y.ns[Q];P(f,"onclosenamespace",{prefix:Q,uri:wt})})}a===0&&(f.closedRoot=!0),f.tagName=f.attribValue=f.attribName="",f.attribList.length=0,f.state=u.TEXT}function je(f){var a=f.entity,N=a.toLowerCase(),E,H="";return f.ENTITIES[a]?f.ENTITIES[a]:f.ENTITIES[N]?f.ENTITIES[N]:(a=N,a.charAt(0)==="#"&&(a.charAt(1)==="x"?(a=a.slice(2),E=parseInt(a,16),H=E.toString(16)):(a=a.slice(1),E=parseInt(a,10),H=E.toString(10))),a=a.replace(/^0+/,""),isNaN(E)||H.toLowerCase()!==a||E<0||E>1114111?(j(f,"Invalid character entity"),"&"+f.entity+";"):String.fromCodePoint(E))}function ae(f,a){a==="<"?(f.state=u.OPEN_WAKA,f.startTagPosition=f.position):n(a)||(j(f,"Non-whitespace before first tag."),f.textNode=a,f.state=u.TEXT)}function qt(f,a){var N="";return a<f.length&&(N=f.charAt(a)),N}function ce(f){var a=this;if(this.error)throw this.error;if(a.closed)return G(a,"Cannot write after close. Assign an onready handler.");if(f===null)return ct(a);typeof f=="object"&&(f=f.toString());for(var N=0,E="";E=qt(f,N++),a.c=E,!!E;)switch(a.trackPosition&&(a.position++,E===`
`?(a.line++,a.column=0):a.column++),a.state){case u.BEGIN:if(a.state=u.BEGIN_WHITESPACE,E==="\uFEFF")continue;ae(a,E);continue;case u.BEGIN_WHITESPACE:ae(a,E);continue;case u.TEXT:if(a.sawRoot&&!a.closedRoot){for(var K=N-1;E&&E!=="<"&&E!=="&";)E=qt(f,N++),E&&a.trackPosition&&(a.position++,E===`
`?(a.line++,a.column=0):a.column++);a.textNode+=f.substring(K,N-1)}E==="<"&&!(a.sawRoot&&a.closedRoot&&!a.strict)?(a.state=u.OPEN_WAKA,a.startTagPosition=a.position):(!n(E)&&(!a.sawRoot||a.closedRoot)&&j(a,"Text data outside of root node."),E==="&"?a.state=u.TEXT_ENTITY:a.textNode+=E);continue;case u.SCRIPT:E==="<"?a.state=u.SCRIPT_ENDING:a.script+=E;continue;case u.SCRIPT_ENDING:E==="/"?a.state=u.CLOSE_TAG:(a.script+="<"+E,a.state=u.SCRIPT);continue;case u.OPEN_WAKA:if(E==="!")a.state=u.SGML_DECL,a.sgmlDecl="";else if(!n(E))if(S(A,E))a.state=u.OPEN_TAG,a.tagName=E;else if(E==="/")a.state=u.CLOSE_TAG,a.tagName="";else if(E==="?")a.state=u.PROC_INST,a.procInstName=a.procInstBody="";else{if(j(a,"Unencoded <"),a.startTagPosition+1<a.position){var H=a.position-a.startTagPosition;E=new Array(H).join(" ")+E}a.textNode+="<"+E,a.state=u.TEXT}continue;case u.SGML_DECL:if(a.sgmlDecl+E==="--"){a.state=u.COMMENT,a.comment="",a.sgmlDecl="";continue}a.doctype&&a.doctype!==!0&&a.sgmlDecl?(a.state=u.DOCTYPE_DTD,a.doctype+="<!"+a.sgmlDecl+E,a.sgmlDecl=""):(a.sgmlDecl+E).toUpperCase()===y?(P(a,"onopencdata"),a.state=u.CDATA,a.sgmlDecl="",a.cdata=""):(a.sgmlDecl+E).toUpperCase()===v?(a.state=u.DOCTYPE,(a.doctype||a.sawRoot)&&j(a,"Inappropriately located doctype declaration"),a.doctype="",a.sgmlDecl=""):E===">"?(P(a,"onsgmldeclaration",a.sgmlDecl),a.sgmlDecl="",a.state=u.TEXT):(s(E)&&(a.state=u.SGML_DECL_QUOTED),a.sgmlDecl+=E);continue;case u.SGML_DECL_QUOTED:E===a.q&&(a.state=u.SGML_DECL,a.q=""),a.sgmlDecl+=E;continue;case u.DOCTYPE:E===">"?(a.state=u.TEXT,P(a,"ondoctype",a.doctype),a.doctype=!0):(a.doctype+=E,E==="["?a.state=u.DOCTYPE_DTD:s(E)&&(a.state=u.DOCTYPE_QUOTED,a.q=E));continue;case u.DOCTYPE_QUOTED:a.doctype+=E,E===a.q&&(a.q="",a.state=u.DOCTYPE);continue;case u.DOCTYPE_DTD:E==="]"?(a.doctype+=E,a.state=u.DOCTYPE):E==="<"?(a.state=u.OPEN_WAKA,a.startTagPosition=a.position):s(E)?(a.doctype+=E,a.state=u.DOCTYPE_DTD_QUOTED,a.q=E):a.doctype+=E;continue;case u.DOCTYPE_DTD_QUOTED:a.doctype+=E,E===a.q&&(a.state=u.DOCTYPE_DTD,a.q="");continue;case u.COMMENT:E==="-"?a.state=u.COMMENT_ENDING:a.comment+=E;continue;case u.COMMENT_ENDING:E==="-"?(a.state=u.COMMENT_ENDED,a.comment=R(a.opt,a.comment),a.comment&&P(a,"oncomment",a.comment),a.comment=""):(a.comment+="-"+E,a.state=u.COMMENT);continue;case u.COMMENT_ENDED:E!==">"?(j(a,"Malformed comment"),a.comment+="--"+E,a.state=u.COMMENT):a.doctype&&a.doctype!==!0?a.state=u.DOCTYPE_DTD:a.state=u.TEXT;continue;case u.CDATA:for(var K=N-1;E&&E!=="]";)E=qt(f,N++),E&&a.trackPosition&&(a.position++,E===`
`?(a.line++,a.column=0):a.column++);a.cdata+=f.substring(K,N-1),E==="]"&&(a.state=u.CDATA_ENDING);continue;case u.CDATA_ENDING:E==="]"?a.state=u.CDATA_ENDING_2:(a.cdata+="]"+E,a.state=u.CDATA);continue;case u.CDATA_ENDING_2:E===">"?(a.cdata&&P(a,"oncdata",a.cdata),P(a,"onclosecdata"),a.cdata="",a.state=u.TEXT):E==="]"?a.cdata+="]":(a.cdata+="]]"+E,a.state=u.CDATA);continue;case u.PROC_INST:E==="?"?a.state=u.PROC_INST_ENDING:n(E)?a.state=u.PROC_INST_BODY:a.procInstName+=E;continue;case u.PROC_INST_BODY:if(!a.procInstBody&&n(E))continue;E==="?"?a.state=u.PROC_INST_ENDING:a.procInstBody+=E;continue;case u.PROC_INST_ENDING:if(E===">"){let ut={name:a.procInstName,body:a.procInstBody};F(a,ut),P(a,"onprocessinginstruction",ut),a.procInstName=a.procInstBody="",a.state=u.TEXT}else a.procInstBody+="?"+E,a.state=u.PROC_INST_BODY;continue;case u.OPEN_TAG:S(k,E)?a.tagName+=E:(Ut(a),E===">"?vt(a):E==="/"?a.state=u.OPEN_TAG_SLASH:(n(E)||j(a,"Invalid character in tag name"),a.state=u.ATTRIB));continue;case u.OPEN_TAG_SLASH:E===">"?(vt(a,!0),Jt(a)):(j(a,"Forward-slash in opening tag not followed by >"),a.state=u.ATTRIB);continue;case u.ATTRIB:if(n(E))continue;E===">"?vt(a):E==="/"?a.state=u.OPEN_TAG_SLASH:S(A,E)?(a.attribName=E,a.attribValue="",a.state=u.ATTRIB_NAME):j(a,"Invalid attribute name");continue;case u.ATTRIB_NAME:E==="="?a.state=u.ATTRIB_VALUE:E===">"?(j(a,"Attribute without value"),a.attribValue=a.attribName,Yt(a),vt(a)):n(E)?a.state=u.ATTRIB_NAME_SAW_WHITE:S(k,E)?a.attribName+=E:j(a,"Invalid attribute name");continue;case u.ATTRIB_NAME_SAW_WHITE:if(E==="=")a.state=u.ATTRIB_VALUE;else{if(n(E))continue;j(a,"Attribute without value"),a.tag.attributes[a.attribName]="",a.attribValue="",P(a,"onattribute",{name:a.attribName,value:""}),a.attribName="",E===">"?vt(a):S(A,E)?(a.attribName=E,a.state=u.ATTRIB_NAME):(j(a,"Invalid attribute name"),a.state=u.ATTRIB)}continue;case u.ATTRIB_VALUE:if(n(E))continue;s(E)?(a.q=E,a.state=u.ATTRIB_VALUE_QUOTED):(a.opt.unquotedAttributeValues||G(a,"Unquoted attribute value"),a.state=u.ATTRIB_VALUE_UNQUOTED,a.attribValue=E);continue;case u.ATTRIB_VALUE_QUOTED:if(E!==a.q){E==="&"?a.state=u.ATTRIB_VALUE_ENTITY_Q:a.attribValue+=E;continue}Yt(a),a.q="",a.state=u.ATTRIB_VALUE_CLOSED;continue;case u.ATTRIB_VALUE_CLOSED:n(E)?a.state=u.ATTRIB:E===">"?vt(a):E==="/"?a.state=u.OPEN_TAG_SLASH:S(A,E)?(j(a,"No whitespace between attributes"),a.attribName=E,a.attribValue="",a.state=u.ATTRIB_NAME):j(a,"Invalid attribute name");continue;case u.ATTRIB_VALUE_UNQUOTED:if(!b(E)){E==="&"?a.state=u.ATTRIB_VALUE_ENTITY_U:a.attribValue+=E;continue}Yt(a),E===">"?vt(a):a.state=u.ATTRIB;continue;case u.CLOSE_TAG:if(a.tagName)E===">"?Jt(a):S(k,E)?a.tagName+=E:a.script?(a.script+="</"+a.tagName+E,a.tagName="",a.state=u.SCRIPT):(n(E)||j(a,"Invalid tagname in closing tag"),a.state=u.CLOSE_TAG_SAW_WHITE);else{if(n(E))continue;T(A,E)?a.script?(a.script+="</"+E,a.state=u.SCRIPT):j(a,"Invalid tagname in closing tag."):a.tagName=E}continue;case u.CLOSE_TAG_SAW_WHITE:if(n(E))continue;E===">"?Jt(a):j(a,"Invalid characters in closing tag");continue;case u.TEXT_ENTITY:case u.ATTRIB_VALUE_ENTITY_Q:case u.ATTRIB_VALUE_ENTITY_U:var Y,it;switch(a.state){case u.TEXT_ENTITY:Y=u.TEXT,it="textNode";break;case u.ATTRIB_VALUE_ENTITY_Q:Y=u.ATTRIB_VALUE_QUOTED,it="attribValue";break;case u.ATTRIB_VALUE_ENTITY_U:Y=u.ATTRIB_VALUE_UNQUOTED,it="attribValue";break}if(E===";"){var X=je(a);a.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(X)?((a.entityCount+=1)>a.opt.maxEntityCount&&G(a,"Parsed entity count exceeds max entity count"),(a.entityDepth+=1)>a.opt.maxEntityDepth&&G(a,"Parsed entity depth exceeds max entity depth"),a.entity="",a.state=Y,a.write(X),a.entityDepth-=1):(a[it]+=X,a.entity="",a.state=Y)}else S(a.entity.length?w:_,E)?a.entity+=E:(j(a,"Invalid character in entity name"),a[it]+="&"+a.entity+E,a.entity="",a.state=Y);continue;default:throw new Error(a,"Unknown state: "+a.state)}return a.position>=a.bufferCheckPosition&&l(a),a}String.fromCodePoint||(function(){var f=String.fromCharCode,a=Math.floor,N=function(){var E=16384,H=[],K,Y,it=-1,X=arguments.length;if(!X)return"";for(var ut="";++it<X;){var Q=Number(arguments[it]);if(!isFinite(Q)||Q<0||Q>1114111||a(Q)!==Q)throw RangeError("Invalid code point: "+Q);Q<=65535?H.push(Q):(Q-=65536,K=(Q>>10)+55296,Y=Q%1024+56320,H.push(K,Y)),(it+1===X||H.length>E)&&(ut+=f.apply(null,H),H.length=0)}return ut};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:N,configurable:!0,writable:!0}):String.fromCodePoint=N})()})(typeof De>"u"?De.sax={}:De)});var zn=U(ti=>{(function(){"use strict";ti.stripBOM=function(t){return t[0]==="\uFEFF"?t.substring(1):t}}).call(ti)});var ei=U(Ot=>{(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),Ot.normalize=function(e){return e.toLowerCase()},Ot.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},Ot.stripPrefix=function(e){return e.replace(t,"")},Ot.parseNumbers=function(e){return isNaN(e)||(e=e%1===0?parseInt(e,10):parseFloat(e)),e},Ot.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e=e.toLowerCase()==="true"),e}}).call(Ot)});var jn=U(bt=>{(function(){"use strict";var t,e,i,l,r,o,c,d,p,h=function(v,m){return function(){return v.apply(m,arguments)}},g=function(v,m){for(var C in m)y.call(m,C)&&(v[C]=m[C]);function x(){this.constructor=v}return x.prototype=m.prototype,v.prototype=new x,v.__super__=m.prototype,v},y={}.hasOwnProperty;d=Vn(),l=require("events"),t=zn(),c=ei(),p=require("timers").setImmediate,e=he().defaults,r=function(v){return typeof v=="object"&&v!=null&&Object.keys(v).length===0},o=function(v,m,C){var x,A,k;for(x=0,A=v.length;x<A;x++)k=v[x],m=k(m,C);return m},i=function(v,m,C){var x;return x=Object.create(null),x.value=C,x.writable=!0,x.enumerable=!0,x.configurable=!0,Object.defineProperty(v,m,x)},bt.Parser=(function(v){g(m,v);function m(C){this.parseStringPromise=h(this.parseStringPromise,this),this.parseString=h(this.parseString,this),this.reset=h(this.reset,this),this.assignOrPush=h(this.assignOrPush,this),this.processAsync=h(this.processAsync,this);var x,A,k;if(!(this instanceof bt.Parser))return new bt.Parser(C);this.options={},A=e["0.2"];for(x in A)y.call(A,x)&&(k=A[x],this.options[x]=k);for(x in C)y.call(C,x)&&(k=C[x],this.options[x]=k);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}return m.prototype.processAsync=function(){var C,x;try{return this.remaining.length<=this.options.chunkSize?(C=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(C),this.saxParser.close()):(C=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(C),p(this.processAsync))}catch(A){if(x=A,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(x)}},m.prototype.assignOrPush=function(C,x,A){return x in C?(C[x]instanceof Array||i(C,x,[C[x]]),C[x].push(A)):this.options.explicitArray?i(C,x,[A]):i(C,x,A)},m.prototype.reset=function(){var C,x,A,k;return this.removeAllListeners(),this.saxParser=d.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(_){return function(w){if(_.saxParser.resume(),!_.saxParser.errThrown)return _.saxParser.errThrown=!0,_.emit("error",w)}})(this),this.saxParser.onend=(function(_){return function(){if(!_.saxParser.ended)return _.saxParser.ended=!0,_.emit("end",_.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,k=[],C=this.options.attrkey,x=this.options.charkey,this.saxParser.onopentag=(function(_){return function(w){var n,s,b,S,T;if(b={},b[x]="",!_.options.ignoreAttrs){T=w.attributes;for(n in T)y.call(T,n)&&(!(C in b)&&!_.options.mergeAttrs&&(b[C]={}),s=_.options.attrValueProcessors?o(_.options.attrValueProcessors,w.attributes[n],n):w.attributes[n],S=_.options.attrNameProcessors?o(_.options.attrNameProcessors,n):n,_.options.mergeAttrs?_.assignOrPush(b,S,s):i(b[C],S,s))}return b["#name"]=_.options.tagNameProcessors?o(_.options.tagNameProcessors,w.name):w.name,_.options.xmlns&&(b[_.options.xmlnskey]={uri:w.uri,local:w.local}),k.push(b)}})(this),this.saxParser.onclosetag=(function(_){return function(){var w,n,s,b,S,T,u,I,D,O;if(T=k.pop(),S=T["#name"],(!_.options.explicitChildren||!_.options.preserveChildrenOrder)&&delete T["#name"],T.cdata===!0&&(w=T.cdata,delete T.cdata),D=k[k.length-1],T[x].match(/^\s*$/)&&!w?(n=T[x],delete T[x]):(_.options.trim&&(T[x]=T[x].trim()),_.options.normalize&&(T[x]=T[x].replace(/\s{2,}/g," ").trim()),T[x]=_.options.valueProcessors?o(_.options.valueProcessors,T[x],S):T[x],Object.keys(T).length===1&&x in T&&!_.EXPLICIT_CHARKEY&&(T=T[x])),r(T)&&(typeof _.options.emptyTag=="function"?T=_.options.emptyTag():T=_.options.emptyTag!==""?_.options.emptyTag:n),_.options.validator!=null&&(O="/"+(function(){var M,L,F;for(F=[],M=0,L=k.length;M<L;M++)b=k[M],F.push(b["#name"]);return F})().concat(S).join("/"),(function(){var M;try{return T=_.options.validator(O,D&&D[S],T)}catch(L){return M=L,_.emit("error",M)}})()),_.options.explicitChildren&&!_.options.mergeAttrs&&typeof T=="object"){if(!_.options.preserveChildrenOrder)b={},_.options.attrkey in T&&(b[_.options.attrkey]=T[_.options.attrkey],delete T[_.options.attrkey]),!_.options.charsAsChildren&&_.options.charkey in T&&(b[_.options.charkey]=T[_.options.charkey],delete T[_.options.charkey]),Object.getOwnPropertyNames(T).length>0&&(b[_.options.childkey]=T),T=b;else if(D){D[_.options.childkey]=D[_.options.childkey]||[],u={};for(s in T)y.call(T,s)&&i(u,s,T[s]);D[_.options.childkey].push(u),delete T["#name"],Object.keys(T).length===1&&x in T&&!_.EXPLICIT_CHARKEY&&(T=T[x])}}return k.length>0?_.assignOrPush(D,S,T):(_.options.explicitRoot&&(I=T,T={},i(T,S,I)),_.resultObject=T,_.saxParser.ended=!0,_.emit("end",_.resultObject))}})(this),A=(function(_){return function(w){var n,s;if(s=k[k.length-1],s)return s[x]+=w,_.options.explicitChildren&&_.options.preserveChildrenOrder&&_.options.charsAsChildren&&(_.options.includeWhiteChars||w.replace(/\\n/g,"").trim()!=="")&&(s[_.options.childkey]=s[_.options.childkey]||[],n={"#name":"__text__"},n[x]=w,_.options.normalize&&(n[x]=n[x].replace(/\s{2,}/g," ").trim()),s[_.options.childkey].push(n)),s}})(this),this.saxParser.ontext=A,this.saxParser.oncdata=(function(_){return function(w){var n;if(n=A(w),n)return n.cdata=!0}})(this)},m.prototype.parseString=function(C,x){var A;x!=null&&typeof x=="function"&&(this.on("end",function(k){return this.reset(),x(null,k)}),this.on("error",function(k){return this.reset(),x(k)}));try{return C=C.toString(),C.trim()===""?(this.emit("end",null),!0):(C=t.stripBOM(C),this.options.async?(this.remaining=C,p(this.processAsync),this.saxParser):this.saxParser.write(C).close())}catch(k){if(A=k,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw A}else return this.emit("error",A),this.saxParser.errThrown=!0}},m.prototype.parseStringPromise=function(C){return new Promise((function(x){return function(A,k){return x.parseString(C,function(_,w){return _?k(_):A(w)})}})(this))},m})(l),bt.parseString=function(v,m,C){var x,A,k;return C!=null?(typeof C=="function"&&(x=C),typeof m=="object"&&(A=m)):(typeof m=="function"&&(x=m),A={}),k=new bt.Parser(A),k.parseString(v,x)},bt.parseStringPromise=function(v,m){var C,x;return typeof m=="object"&&(C=m),x=new bt.Parser(C),x.parseStringPromise(v)}}).call(bt)});var te=U(Ct=>{(function(){"use strict";var t,e,i,l,r=function(c,d){for(var p in d)o.call(d,p)&&(c[p]=d[p]);function h(){this.constructor=c}return h.prototype=d.prototype,c.prototype=new h,c.__super__=d.prototype,c},o={}.hasOwnProperty;e=he(),t=qn(),i=jn(),l=ei(),Ct.defaults=e.defaults,Ct.processors=l,Ct.ValidationError=(function(c){r(d,c);function d(p){this.message=p}return d})(Error),Ct.Builder=t.Builder,Ct.Parser=i.Parser,Ct.parseString=i.parseString,Ct.parseStringPromise=i.parseStringPromise}).call(Ct)});var rs={};zr(rs,{activate:()=>is,deactivate:()=>ns});module.exports=jr(rs);var z=B(require("vscode"));var q=B(require("vscode")),fe=B(require("fs")),rt=B(require("path"));function pt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Hr(t){return t==="high"?"I":t==="medium"?"II":"III"}function Xr(t){let e={total:t.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let i of t)e[i.status]++,e[i.severity]++;return e}function vi(t){return JSON.stringify(t).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function wi(t){let e=vi(Object.fromEntries(t.stigs.flatMap(i=>i.rules.map(l=>[l.uuid,l]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${pt(t.title)}</title>
<style>${Jr}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1 id="docTitle" class="doc-title" contenteditable="true" spellcheck="false" title="Click to edit title">${pt(t.title)}</h1>
    <span class="chip chip-accent">CKLB v${pt(t.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${Gr(t.target_data)}
</header>

${t.stigs.map((i,l)=>Wr(i,l)).join(`
`)}

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
const RULES = ${e};
const TARGET = ${vi(t.target_data)};
${Yr}
</script>
</body>
</html>`}function Gr(t){let e=[t.host_name&&`Host: ${t.host_name}`,t.ip_address&&`IP: ${t.ip_address}`,t.fqdn&&`FQDN: ${t.fqdn}`,t.mac_address&&`MAC: ${t.mac_address}`,t.target_type&&`Type: ${t.target_type}`,t.role&&t.role!=="None"&&`Role: ${t.role}`].filter(Boolean);return e.length?`<div class="target-row">${e.map(i=>`<span class="chip">${pt(i)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function Wr(t,e){let i=Xr(t.rules),l=r=>i.total?Math.round(r/i.total*100):0;return`
<section class="stig" data-idx="${e}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${pt(t.display_name||t.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${pt(t.release_info)}</span>
      <span class="chip">Version ${pt(t.version)}</span>
      <span class="chip">${t.size} rules</span>
    </div>
  </div>

  <!-- stat cards -->
  <div class="cards">
    <div class="card card-total" data-status="" title="Clear status filter"><div class="card-n">${i.total}</div><div class="card-l">Total</div></div>
    <div class="card card-open" data-status="open" title="Filter to Open"><div class="card-n">${i.open}</div><div class="card-l">Open</div></div>
    <div class="card card-naf" data-status="not_a_finding" title="Filter to Not a Finding"><div class="card-n">${i.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
    <div class="card card-nr" data-status="not_reviewed" title="Filter to Not Reviewed"><div class="card-n">${i.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
    <div class="card card-na" data-status="not_applicable" title="Filter to Not Applicable"><div class="card-n">${i.not_applicable}</div><div class="card-l">Not Applicable</div></div>
  </div>

  <!-- severity bar -->
  <div class="sev-bar">
    <div class="sev-seg sev-high" data-sev="high" title="Filter to CAT I" style="width:${l(i.high)}%"><span>CAT I \xB7 ${i.high}</span></div>
    <div class="sev-seg sev-med"  data-sev="medium" title="Filter to CAT II" style="width:${l(i.medium)}%"><span>CAT II \xB7 ${i.medium}</span></div>
    <div class="sev-seg sev-low"  data-sev="low" title="Filter to CAT III" style="width:${l(i.low)}%"><span>CAT III \xB7 ${i.low}</span></div>
  </div>

  <!-- completion bar -->
  <div class="completion">
    <div class="completion-label">Completion: ${l(i.not_a_finding+i.not_applicable)}%</div>
    <div class="completion-track">
      <div class="completion-fill completion-naf" style="width:${l(i.not_a_finding)}%"></div>
      <div class="completion-fill completion-na"  style="width:${l(i.not_applicable)}%"></div>
    </div>
  </div>

  <!-- bulk action bar -->
  <div class="bulk-bar hidden" data-stig="${t.uuid}">
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
  <div class="filters" data-stig="${t.uuid}">
    <select class="flt" data-kind="status">
      <option value="">All Statuses</option>
      <option value="not_reviewed">Not Reviewed (${i.not_reviewed})</option>
      <option value="open">Open (${i.open})</option>
      <option value="not_a_finding">Not a Finding (${i.not_a_finding})</option>
      <option value="not_applicable">Not Applicable (${i.not_applicable})</option>
    </select>
    <select class="flt" data-kind="severity">
      <option value="">All Severities</option>
      <option value="high">CAT I \u2013 High (${i.high})</option>
      <option value="medium">CAT II \u2013 Medium (${i.medium})</option>
      <option value="low">CAT III \u2013 Low (${i.low})</option>
    </select>
    <input type="text" class="flt flt-search" data-kind="search" placeholder="Search rules\u2026" />
  </div>

  <!-- table -->
  <div class="tbl-wrap">
    <table class="tbl">
      <thead><tr>
        <th style="width:36px"><input type="checkbox" class="select-all" data-stig="${t.uuid}" title="Select all" /></th>
        <th style="width:72px">CAT</th>
        <th style="width:90px">Vuln ID</th>
        <th style="width:130px">Rule Ver</th>
        <th>Title</th>
        <th style="width:120px">Status</th>
      </tr></thead>
      <tbody>
        ${t.rules.map(r=>Kr(r,t.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function Kr(t,e){let i=`${t.group_id} ${t.rule_version} ${t.rule_title} ${t.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${t.uuid}" data-stig="${e}"
    data-sev="${t.severity}" data-status="${t.status}" data-search="${pt(i)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${t.uuid}" data-stig="${e}" /></td>
  <td><span class="pill sev-${t.severity}">CAT ${Hr(t.severity)}</span></td>
  <td><code>${pt(t.group_id)}</code></td>
  <td><code>${pt(t.rule_version)}</code></td>
  <td class="td-title">${pt(t.rule_title)}</td>
  <td><select class="inline-status st-${t.status}" data-uuid="${t.uuid}" data-stig="${e}">
    <option value="not_reviewed" ${t.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${t.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${t.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${t.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var Yr=`
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
  syncStatCardActive(stigId, sv);
  syncSevSegActive(stigId, se);
}

function syncStatCardActive(stigId, status) {
  const section = document.querySelector('tr.row[data-stig="'+stigId+'"]')?.closest('.stig');
  if (!section) return;
  section.querySelectorAll('.card[data-status]').forEach(c => {
    if (status && c.dataset.status === status) c.classList.add('card-active');
    else if (!status && c.dataset.status === '') c.classList.add('card-active');
    else c.classList.remove('card-active');
  });
}

function syncSevSegActive(stigId, sev) {
  const section = document.querySelector('tr.row[data-stig="'+stigId+'"]')?.closest('.stig');
  if (!section) return;
  section.querySelectorAll('.sev-seg[data-sev]').forEach(s => {
    if (sev && s.dataset.sev === sev) s.classList.add('seg-active');
    else s.classList.remove('seg-active');
  });
}

// Click stat cards to filter by status (click again / click Total to clear)
document.querySelectorAll('.card[data-status]').forEach(card => {
  card.addEventListener('click', () => {
    const section = card.closest('.stig');
    if (!section) return;
    const bar = section.querySelector('.filters');
    if (!bar) return;
    const stigId = bar.dataset.stig;
    const statusSel = bar.querySelector('[data-kind="status"]');
    const target = card.dataset.status;
    statusSel.value = (target && statusSel.value === target) ? '' : target;
    filter(stigId);
  });
});

// Click severity bar segments to filter by severity (click same again to clear)
document.querySelectorAll('.sev-seg[data-sev]').forEach(seg => {
  seg.addEventListener('click', () => {
    const section = seg.closest('.stig');
    if (!section) return;
    const bar = section.querySelector('.filters');
    if (!bar) return;
    const stigId = bar.dataset.stig;
    const sevSel = bar.querySelector('[data-kind="severity"]');
    const target = seg.dataset.sev;
    sevSel.value = (sevSel.value === target) ? '' : target;
    filter(stigId);
  });
});

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
  const impMatch = s.match(/^\\[(AUTO-SCAN|SARIF IMPORT|AUDIT IMPORT|HDF IMPORT)\\]/);
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
  if (msg.type === 'dataUpdate') {
    if (msg.rules) {
      for (const [uuid, rule] of Object.entries(msg.rules)) {
        RULES[uuid] = rule;
      }
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
    if (typeof msg.title === 'string') {
      const t = document.getElementById('docTitle');
      if (t && document.activeElement !== t && t.textContent.trim() !== msg.title) {
        t.textContent = msg.title;
        titleOriginal = msg.title;
        document.title = msg.title;
      }
    }
  }
});

// \u2500\u2500 Export buttons \u2500\u2500
document.getElementById('btnExportCsv').onclick = () => vscode.postMessage({ type: 'exportCsv' });
document.getElementById('btnExportCkl').onclick = () => vscode.postMessage({ type: 'exportCkl' });
document.getElementById('btnExportPoam').onclick = () => vscode.postMessage({ type: 'exportPoam' });

// \u2500\u2500 Editable document title \u2500\u2500
const titleEl = document.getElementById('docTitle');
let titleOriginal = titleEl.textContent.trim();
let titleSaving = false;

function commitTitle() {
  if (titleSaving) return;
  const next = titleEl.textContent.replace(/\\s+/g, ' ').trim();
  if (!next) {
    titleEl.textContent = titleOriginal;
    return;
  }
  if (next === titleOriginal) {
    titleEl.textContent = titleOriginal;
    return;
  }
  titleSaving = true;
  titleEl.textContent = next;
  titleOriginal = next;
  vscode.postMessage({ type: 'saveTitle', title: next });
  document.title = next;
  titleEl.classList.add('doc-title-saved');
  setTimeout(() => { titleEl.classList.remove('doc-title-saved'); titleSaving = false; }, 1200);
}

titleEl.addEventListener('focus', () => {
  titleOriginal = titleEl.textContent.trim();
});
titleEl.addEventListener('blur', commitTitle);
titleEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    titleEl.blur();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    titleEl.textContent = titleOriginal;
    titleEl.blur();
  }
});
titleEl.addEventListener('paste', (e) => {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData('text').replace(/[\\r\\n]+/g, ' ');
  document.execCommand('insertText', false, text);
});

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
`,Jr=`
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
.doc-title{outline:none;padding:2px 8px;border-radius:4px;border:1px solid transparent;cursor:text;transition:background .12s,border-color .12s,box-shadow .25s;max-width:100%;white-space:pre-wrap;word-break:break-word}
.doc-title:hover{background:var(--hover);border-color:var(--border)}
.doc-title:focus{background:var(--inp-bg);border-color:var(--accent);box-shadow:0 0 0 1px var(--accent)}
.doc-title-saved{box-shadow:0 0 0 2px var(--green)!important;transition:box-shadow .25s}
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
.card{background:var(--card);border:1px solid var(--border);border-radius:8px;padding:12px 10px;text-align:center;cursor:pointer;transition:border-color .12s,transform .12s,box-shadow .12s;user-select:none}
.card:hover{border-color:var(--accent);transform:translateY(-1px)}
.card-active{border-color:var(--accent);box-shadow:0 0 0 2px var(--accent) inset}
.card-n{font-size:1.6em;font-weight:700;line-height:1.2}
.card-l{font-size:.78em;color:var(--gray);margin-top:2px}
.card-open  .card-n{color:var(--red)}
.card-naf   .card-n{color:var(--green)}
.card-nr    .card-n{color:var(--orange)}
.card-na    .card-n{color:var(--gray)}
.card-total .card-n{color:var(--blue)}

/* \u2500\u2500 severity bar \u2500\u2500 */
.sev-bar{display:flex;height:28px;border-radius:6px;overflow:hidden;margin-bottom:10px;font-size:.78em;font-weight:600}
.sev-seg{display:flex;align-items:center;justify-content:center;color:#fff;min-width:50px;cursor:pointer;transition:filter .12s,outline .12s;user-select:none}
.sev-seg:hover{filter:brightness(1.1)}
.seg-active{outline:2px solid #fff;outline-offset:-3px;filter:brightness(1.15)}
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
`;var Qr={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Zr={high:"CAT I",medium:"CAT II",low:"CAT III"};function bi(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function de(t){let i=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(bi).join(",")];for(let l of t.stigs)for(let r of l.rules)i.push([r.group_id,r.rule_id,r.rule_version,Zr[r.severity]||r.severity,Qr[r.status]||r.status,r.rule_title,r.finding_details,r.comments,r.ccis.join("; "),r.srg_id].map(bi).join(","));return i.join(`\r
`)}function tt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var to={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function W(t,e){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${tt(t)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${tt(e)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function eo(t){let e=[W("Vuln_Num",t.group_id),W("Severity",t.severity),W("Group_Title",t.group_title),W("Rule_ID",t.rule_id),W("Rule_Ver",t.rule_version),W("Rule_Title",t.rule_title),W("Vuln_Discuss",t.discussion),W("IA_Controls",t.ia_controls),W("Check_Content",t.check_content),W("Fix_Text",t.fix_text),W("False_Positives",t.false_positives),W("False_Negatives",t.false_negatives),W("Documentable",t.documentable),W("Mitigations",t.mitigations),W("Potential_Impact",t.potential_impacts),W("Third_Party_Tools",t.third_party_tools),W("Mitigation_Control",t.mitigation_control),W("Responsibility",t.responsibility),W("Security_Override_Guidance",t.security_override_guidance),W("Check_Content_Ref",t.check_content_ref?.href||""),W("Weight",t.weight),W("Class",t.classification),W("STIGRef",t.stig_ref||""),W("TargetKey",t.target_key||"")];for(let i of t.ccis??[])e.push(W("CCI_REF",i));for(let i of t.legacy_ids??[])e.push(W("Legacy_ID",i));return`      <VULN>
${e.join(`
`)}
        <STATUS>${tt(to[t.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${tt(t.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${tt(t.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function ft(t,e){return`          <SI_DATA>
            <SID_NAME>${tt(t)}</SID_NAME>
            <SID_DATA>${tt(e)}</SID_DATA>
          </SI_DATA>`}function io(t){let e=[ft("version",t.version),ft("classification","UNCLASSIFIED"),ft("customname",""),ft("stigid",t.stig_id),ft("description",""),ft("filename",""),ft("releaseinfo",t.release_info),ft("title",t.stig_name),ft("uuid",t.uuid),ft("notice","terms-of-use"),ft("source","")].join(`
`),i=t.rules.map(eo).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${e}
        </STIG_INFO>
${i}
    </iSTIG>`}function ue(t){let e=t.target_data,i=e.is_web_database?"true":"false",l=`  <ASSET>
    <ROLE>${tt(e.role)}</ROLE>
    <ASSET_TYPE>${tt(e.target_type)}</ASSET_TYPE>
    <HOST_NAME>${tt(e.host_name)}</HOST_NAME>
    <HOST_IP>${tt(e.ip_address)}</HOST_IP>
    <HOST_MAC>${tt(e.mac_address)}</HOST_MAC>
    <HOST_FQDN>${tt(e.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${tt(e.comments)}</TARGET_COMMENT>
    <TECH_AREA>${tt(e.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${i}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${tt(e.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${tt(e.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`,r=t.stigs.map(io).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${l}
  <STIGS>
${r}
  </STIGS>
</CHECKLIST>`}var no={high:"CAT I",medium:"CAT II",low:"CAT III"};function Ci(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function pe(t){let i=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(Ci).join(",")],l=1;for(let r of t.stigs){let o=r.rules.filter(c=>c.status==="open");for(let c of o)i.push([String(l++),c.group_id,c.rule_id,c.rule_version,no[c.severity]||c.severity,c.rule_title,`${r.stig_name} ${r.release_info}`,c.finding_details,"","","","","","","Ongoing",c.comments,c.ccis.join("; "),t.target_data.host_name].map(Ci).join(","))}return i.join(`\r
`)}var ot=class t{constructor(e){this._context=e}static get activeDocumentUri(){return t._activeDocumentUri}static register(e){return q.window.registerCustomEditorProvider("stigViewer.cklbEditor",new t(e),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(e,i,l){i.webview.options={enableScripts:!0},(()=>{try{let d=JSON.parse(e.getText());i.webview.html=wi(d)}catch(d){i.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(d)}</pre></body></html>`}})(),t._activeDocumentUri=e.uri,i.onDidChangeViewState(()=>{i.active&&(t._activeDocumentUri=e.uri)});let o,c=q.workspace.onDidChangeTextDocument(d=>{d.document.uri.toString()===e.uri.toString()&&(clearTimeout(o),o=setTimeout(()=>{try{let p=JSON.parse(e.getText()),h=Object.fromEntries(p.stigs.flatMap(g=>g.rules.map(y=>[y.uuid,y])));i.webview.postMessage({type:"dataUpdate",rules:h,title:p.title})}catch{}},150))});i.webview.onDidReceiveMessage(async d=>{if(d.type==="saveRule"){let{ruleUuid:p,stigUuid:h,status:g,finding_details:y,comments:v}=d;try{let m=JSON.parse(e.getText()),x=m.stigs.find(A=>A.uuid===h)?.rules.find(A=>A.uuid===p);if(x){x.status=g,x.finding_details=y,x.comments=v;let A=new q.WorkspaceEdit,k=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));A.replace(e.uri,k,JSON.stringify(m,null,2)),await q.workspace.applyEdit(A)}}catch(m){q.window.showErrorMessage(`Save failed: ${m}`)}}if(d.type==="saveTitle")try{let p=String(d.title??"").trim();if(!p)return;let h=JSON.parse(e.getText());if(h.title===p)return;h.title=p;let g=new q.WorkspaceEdit,y=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));g.replace(e.uri,y,JSON.stringify(h,null,2)),await q.workspace.applyEdit(g)}catch(p){q.window.showErrorMessage(`Save title failed: ${p}`)}if(d.type==="saveTargetData")try{let p=JSON.parse(e.getText());Object.assign(p.target_data,d.targetData);let h=new q.WorkspaceEdit,g=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));h.replace(e.uri,g,JSON.stringify(p,null,2)),await q.workspace.applyEdit(h),q.window.showInformationMessage("Target data updated")}catch(p){q.window.showErrorMessage(`Save target data failed: ${p}`)}if(d.type==="exportPoam")try{let p=JSON.parse(e.getText()),h=pe(p),g=p.stigs.reduce((m,C)=>m+C.rules.filter(x=>x.status==="open").length,0),y=rt.basename(e.uri.fsPath,".cklb")+"_POAM.csv",v=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),y)),filters:{CSV:["csv"]},title:`Export POA&M (${g} open findings)`});v&&(fe.writeFileSync(v.fsPath,h,"utf-8"),q.window.showInformationMessage(`Exported POA&M (${g} findings) \u2192 ${rt.basename(v.fsPath)}`))}catch(p){q.window.showErrorMessage(`POA&M export failed: ${p}`)}if(d.type==="exportCsv")try{let p=JSON.parse(e.getText()),h=de(p),g=rt.basename(e.uri.fsPath,".cklb")+".csv",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),g)),filters:{CSV:["csv"]},title:"Export Summary CSV"});y&&(fe.writeFileSync(y.fsPath,h,"utf-8"),q.window.showInformationMessage(`Exported CSV \u2192 ${rt.basename(y.fsPath)}`))}catch(p){q.window.showErrorMessage(`CSV export failed: ${p}`)}if(d.type==="exportCkl")try{let p=JSON.parse(e.getText()),h=ue(p),g=rt.basename(e.uri.fsPath,".cklb")+".ckl",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),g)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});y&&(fe.writeFileSync(y.fsPath,h,"utf-8"),q.window.showInformationMessage(`Exported CKL \u2192 ${rt.basename(y.fsPath)}`))}catch(p){q.window.showErrorMessage(`CKL export failed: ${p}`)}if(d.type==="bulkSaveRules"){let{ruleUuids:p,stigUuid:h,status:g,comments:y}=d;try{let v=JSON.parse(e.getText()),m=v.stigs.find(k=>k.uuid===h);if(!m)return;let C=0;for(let k of m.rules)p.includes(k.uuid)&&(k.status=g,y&&(k.comments=y),C++);let x=new q.WorkspaceEdit,A=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));x.replace(e.uri,A,JSON.stringify(v,null,2)),await q.workspace.applyEdit(x),q.window.showInformationMessage(`Bulk updated ${C} rules \u2192 ${g.replace(/_/g," ")}`)}catch(v){q.window.showErrorMessage(`Bulk save failed: ${v}`)}}}),i.onDidDispose(()=>c.dispose())}};var Oe=B(require("vscode")),Gn=B(require("fs")),Pt=B(require("path")),Pe=B(te());var et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function Hn(t,e=0){return(et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]).toLowerCase()}var ro=new Uint8Array(16);function ii(){return crypto.getRandomValues(ro)}function oo(t,e,i){return!e&&!t&&crypto.randomUUID?crypto.randomUUID():so(t,e,i)}function so(t,e,i){t=t||{};let l=t.random??t.rng?.()??ii();if(l.length<16)throw new Error("Random bytes length must be >= 16");if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){if(i=i||0,i<0||i+16>e.length)throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);for(let r=0;r<16;++r)e[i+r]=l[r];return e}return Hn(l)}var dt=oo;var _t=B(require("vscode")),Xn=B(require("fs")),ke=B(require("path")),ao=new Set(["EACCES","EPERM","EROFS"]);async function Ne(t,e){try{return Xn.writeFileSync(t,e),_t.Uri.file(t)}catch(o){let c=o.code;if(!c||!ao.has(c))throw o}let i=_t.workspace.workspaceFolders?.[0]?.uri,l=ke.basename(t),r=await _t.window.showSaveDialog({title:`Cannot write to ${ke.dirname(t)} \u2014 choose where to save the checklist`,defaultUri:i?_t.Uri.joinPath(i,l):void 0,filters:{"STIG Checklist":["cklb"]}});if(r)return await _t.workspace.fs.writeFile(r,Buffer.from(e,"utf-8")),r}function Et(t){return t==null?[]:Array.isArray(t)?t:[t]}function at(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?at(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}function ht(t,e){let i=t.match(new RegExp(`<${e}>([\\s\\S]*?)<\\/${e}>`));return i?i[1].trim():""}function co(t){let e=t.match(/(V-\d+)/);return e?e[1]:t}function lo(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}function uo(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}function po(t){let e=t;if(e.Benchmark)return e.Benchmark;let i=t["data-stream-collection"];if(i?.component!=null)for(let l of Et(i.component)){let r=l.Benchmark;if(r)return r}return null}async function Wn(t){let e=t.fsPath,i=Gn.readFileSync(e,"utf-8"),l=await(0,Pe.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[Pe.processors.stripPrefix]}),r=po(l);if(!r)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let c=(r.$||{}).id||"",d=at(r.title),p=at(r.version),h="";for(let n of Et(r["plain-text"]))if((n?.$||{}).id==="release-info"){h=at(n);break}let g=dt(),y=dt(),v=new Date().toISOString(),m=Et(r.Group),C=[];for(let n of m){let s=n?.$||{},b=co(s.id||""),S=at(n.title),T=at(n.description);for(let u of Et(n.Rule)){let I=u?.$||{},D=lo(I.id||""),O=uo(I.severity),M=I.weight||"10.0",L=at(u.version),F=at(u.title),P=at(u.description),$=ht(P,"VulnDiscussion"),R=ht(P,"FalsePositives"),G=ht(P,"FalseNegatives"),ct=ht(P,"Documentable"),j=ht(P,"Mitigations"),Ut=ht(P,"SeverityOverrideGuidance"),Kt=ht(P,"PotentialImpacts"),Yt=ht(P,"ThirdPartyTools"),vt=ht(P,"MitigationControl"),Jt=ht(P,"Responsibility"),je=ht(P,"IAControls"),ae=at(u.fixtext),qt=Et(u.check),ce="",f={href:"",name:""},N=qt.find(X=>X["check-content"])||qt[0];if(N){ce=at(N["check-content"]);let X=Et(N["check-content-ref"])[0];X?.$&&(f={href:X.$.href||"",name:X.$.name||""})}let E=[],H=[];for(let X of Et(u.ident)){let ut=X?.$?.system||"",Q=at(X);ut.includes("cci")?E.push(Q):ut.includes("legacy")&&H.push(Q)}let K=null,Y=null;for(let X of Et(u.reference))X?.identifier&&(K=at(X.identifier)),X?.title&&(Y=at(X.title));let it=dt();C.push({uuid:it,stig_uuid:g,target_key:K,stig_ref:Y,group_id:b,rule_id:D,rule_id_src:D,weight:M,classification:"Unclassified",severity:O,rule_version:L,group_title:S,rule_title:F,fix_text:ae,false_positives:R,false_negatives:G,discussion:$,check_content:ce,documentable:ct,mitigations:j,potential_impacts:Kt,third_party_tools:Yt,mitigation_control:vt,responsibility:Jt,security_override_guidance:Ut,ia_controls:je,check_content_ref:f,legacy_ids:H,ccis:E,group_tree:[{id:b,title:S,description:T}],createdAt:v,updatedAt:v,STIGUuid:g,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:S})}}let x={stig_name:d,display_name:d,stig_id:c,release_info:h,version:p,uuid:g,reference_identifier:c,size:C.length,rules:C},k={title:d,id:y,stigs:[x],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},_=Pt.basename(e).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),w=await Ne(Pt.join(Pt.dirname(e),_),JSON.stringify(k,null,2));w&&(await Oe.commands.executeCommand("vscode.openWith",w,"stigViewer.cklbEditor"),Oe.window.showInformationMessage(`Imported ${C.length} rules from XCCDF \u2192 ${Pt.basename(w.fsPath)}`))}var Re=B(require("vscode")),Kn=B(require("fs")),Mt=B(require("path")),Le=B(te());function Me(t){return t==null?[]:Array.isArray(t)?t:[t]}function Z(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Z(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var fo={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function ho(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}async function Yn(t){let e=t.fsPath,i=Kn.readFileSync(e,"utf-8"),r=(await(0,Le.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[Le.processors.stripPrefix]})).CHECKLIST;if(!r)throw new Error("No <CHECKLIST> element found in the CKL file.");let o=r.ASSET||{},c={target_type:Z(o.ASSET_TYPE)||"Computing",host_name:Z(o.HOST_NAME),ip_address:Z(o.HOST_IP),mac_address:Z(o.HOST_MAC),fqdn:Z(o.HOST_FQDN),comments:Z(o.TARGET_COMMENT),role:Z(o.ROLE)||"None",is_web_database:Z(o.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Z(o.TECH_AREA),web_db_site:Z(o.WEB_DB_SITE),web_db_instance:Z(o.WEB_DB_INSTANCE),classification:null},d=Me(r.STIGS?.iSTIG),p=dt(),h=new Date().toISOString(),g=[];for(let x of d){let A=new Map;for(let T of Me(x.STIG_INFO?.SI_DATA))A.set(Z(T.SID_NAME),Z(T.SID_DATA));let k=A.get("uuid")||dt(),_=A.get("title")||"",w=A.get("stigid")||"",n=A.get("version")||"",s=A.get("releaseinfo")||"",b=Me(x.VULN),S=[];for(let T of b){let u=new Map,I=[],D=[];for(let $ of Me(T.STIG_DATA)){let R=Z($.VULN_ATTRIBUTE),G=Z($.ATTRIBUTE_DATA);R==="CCI_REF"?I.push(G):R==="Legacy_ID"&&G?D.push(G):u.set(R,G)}let O=u.get("Vuln_Num")||"",M=u.get("Rule_ID")||"",L=dt(),F=Z(T.STATUS),P=fo[F]||"not_reviewed";S.push({uuid:L,stig_uuid:k,target_key:u.get("TargetKey")||null,stig_ref:u.get("STIGRef")||null,group_id:O,rule_id:M,rule_id_src:M,weight:u.get("Weight")||"10.0",classification:u.get("Class")||"Unclassified",severity:ho(u.get("Severity")),rule_version:u.get("Rule_Ver")||"",group_title:u.get("Group_Title")||"",rule_title:u.get("Rule_Title")||"",fix_text:u.get("Fix_Text")||"",false_positives:u.get("False_Positives")||"",false_negatives:u.get("False_Negatives")||"",discussion:u.get("Vuln_Discuss")||"",check_content:u.get("Check_Content")||"",documentable:u.get("Documentable")||"",mitigations:u.get("Mitigations")||"",potential_impacts:u.get("Potential_Impact")||"",third_party_tools:u.get("Third_Party_Tools")||"",mitigation_control:u.get("Mitigation_Control")||"",responsibility:u.get("Responsibility")||"",security_override_guidance:u.get("Security_Override_Guidance")||"",ia_controls:u.get("IA_Controls")||"",check_content_ref:{href:u.get("Check_Content_Ref")||"",name:""},legacy_ids:D,ccis:I,group_tree:[{id:O,title:u.get("Group_Title")||"",description:""}],createdAt:h,updatedAt:h,STIGUuid:k,status:P,overrides:{},comments:Z(T.COMMENTS),finding_details:Z(T.FINDING_DETAILS),srg_id:u.get("Group_Title")||""})}g.push({stig_name:_,display_name:_,stig_id:w,release_info:s,version:n,uuid:k,reference_identifier:w,size:S.length,rules:S})}let y={title:g[0]?.stig_name||"Imported CKL",id:p,stigs:g,active:!0,mode:1,has_path:!0,target_data:c,cklb_version:"1"},v=Mt.basename(e,".ckl")+".cklb",m=await Ne(Mt.join(Mt.dirname(e),v),JSON.stringify(y,null,2));if(!m)return;await Re.commands.executeCommand("vscode.openWith",m,"stigViewer.cklbEditor");let C=g.reduce((x,A)=>x+A.rules.length,0);Re.window.showInformationMessage(`Imported ${C} rules from CKL \u2192 ${Mt.basename(m.fsPath)}`)}var Vt=B(require("vscode")),ee=B(require("fs"));async function Jn(t){let e=await Vt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!e?.[0])return;let i=t;if(!i){let y=await Vt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!y?.[0])return;i=y[0]}let l=JSON.parse(ee.readFileSync(e[0].fsPath,"utf-8")),r=JSON.parse(ee.readFileSync(i.fsPath,"utf-8")),o=new Map;for(let y of l.stigs)for(let v of y.rules)o.set(v.rule_version,v);let c=0,d=0,p=0;for(let y of r.stigs)for(let v of y.rules){p++;let m=o.get(v.rule_version);m?(v.status=m.status,v.finding_details=m.finding_details,v.comments=m.comments,v.updatedAt=new Date().toISOString(),c++):d++}let h=new Set;for(let y of r.stigs)for(let v of y.rules)h.add(v.rule_version);let g=0;for(let y of o.keys())h.has(y)||g++;ee.writeFileSync(i.fsPath,JSON.stringify(r,null,2)),await Vt.commands.executeCommand("vscode.openWith",i,"stigViewer.cklbEditor"),Vt.window.showInformationMessage(`Merge complete: ${c} carried forward, ${d} new rules, ${g} removed from old STIG`)}var mt=B(require("vscode")),Qn=B(require("fs")),Be=class t{static async show(e){if(t._panel){t._panel.reveal(),await t._refresh();return}let i=mt.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",mt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=i,i.onDidDispose(()=>{t._panel=void 0}),i.webview.onDidReceiveMessage(async l=>{if(l.type==="openFile"){let r=mt.Uri.file(l.path);await mt.commands.executeCommand("vscode.openWith",r,"stigViewer.cklbEditor")}l.type==="refresh"&&await t._refresh()}),await t._refresh()}static async _refresh(){let e=t._panel;if(!e)return;let i=await mt.workspace.findFiles("**/*.cklb","**/node_modules/**"),l=[];for(let r of i)try{let o=Qn.readFileSync(r.fsPath,"utf-8"),c=JSON.parse(o);for(let d of c.stigs){let p={file:mt.workspace.asRelativePath(r),uri:r.fsPath,title:c.title,hostName:c.target_data.host_name||"\u2014",stigName:d.display_name||d.stig_name,total:d.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let h of d.rules)p[h.status]++,p[h.severity]++;l.push(p)}}catch{}e.webview.html=mo(l)}};function mo(t){let e={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let o of t)e.total+=o.total,e.open+=o.open,e.not_a_finding+=o.not_a_finding,e.not_reviewed+=o.not_reviewed,e.not_applicable+=o.not_applicable,e.high+=o.high,e.medium+=o.medium,e.low+=o.low;let i=o=>e.total?Math.round(o/e.total*100):0,l=i(e.not_a_finding+e.not_applicable),r=t.map(o=>{let c=o.total?Math.round((o.not_a_finding+o.not_applicable)/o.total*100):0;return`<tr class="row" data-path="${Fe(o.uri)}">
      <td class="td-host">${Fe(o.hostName)}</td>
      <td class="td-stig">${Fe(o.stigName)}</td>
      <td class="td-n">${o.total}</td>
      <td class="td-n td-open">${o.open}</td>
      <td class="td-n td-naf">${o.not_a_finding}</td>
      <td class="td-n td-nr">${o.not_reviewed}</td>
      <td class="td-n td-na">${o.not_applicable}</td>
      <td class="td-n">${c}%</td>
      <td class="td-file">${Fe(o.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${go}</style>
</head>
<body>

<header class="hdr">
  <div class="hdr-row">
    <h1>STIG Dashboard</h1>
    <span class="chip">${t.length} checklists</span>
    <button class="btn-refresh" id="btnRefresh">Refresh</button>
  </div>
</header>

<div class="cards">
  <div class="card card-total"><div class="card-n">${e.total}</div><div class="card-l">Total Rules</div></div>
  <div class="card card-open"><div class="card-n">${e.open}</div><div class="card-l">Open</div></div>
  <div class="card card-naf"><div class="card-n">${e.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
  <div class="card card-nr"><div class="card-n">${e.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
  <div class="card card-na"><div class="card-n">${e.not_applicable}</div><div class="card-l">Not Applicable</div></div>
</div>

<div class="sev-bar">
  <div class="sev-seg sev-high" style="width:${i(e.high)}%"><span>CAT I \xB7 ${e.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${i(e.medium)}%"><span>CAT II \xB7 ${e.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${i(e.low)}%"><span>CAT III \xB7 ${e.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${l}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${i(e.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${i(e.not_applicable)}%"></div>
  </div>
</div>

${t.length===0?'<p class="muted">No .cklb files found in this workspace.</p>':`
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
    <tbody>${r}</tbody>
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
</body></html>`}function Fe(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var go=`
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
`;var zt=B(require("vscode")),ni=B(require("fs")),Zn={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},tr={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function yo(t){return t==="high"?"I":t==="medium"?"II":"III"}var $e=class{static async show(e){let i=e;if(!i){let _=await zt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!_?.[0])return;i=_[0]}let l=await zt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!l?.[0])return;let r=JSON.parse(ni.readFileSync(i.fsPath,"utf-8")),o=JSON.parse(ni.readFileSync(l[0].fsPath,"utf-8")),c=new Map;for(let _ of r.stigs)for(let w of _.rules)c.set(w.rule_version,w);let d=new Map;for(let _ of o.stigs)for(let w of _.rules)d.set(w.rule_version,w);let p=[],h=new Set([...c.keys(),...d.keys()]);for(let _ of h){let w=c.get(_),n=d.get(_);if(w&&n){let s="unchanged";w.status!==n.status&&(s=tr[n.status]>tr[w.status]?"improved":"regression"),p.push({ruleVersion:_,groupId:n.group_id,ruleTitle:n.rule_title,severity:n.severity,statusA:w.status,statusB:n.status,change:s})}else n&&!w?p.push({ruleVersion:_,groupId:n.group_id,ruleTitle:n.rule_title,severity:n.severity,statusA:"",statusB:n.status,change:"new"}):w&&!n&&p.push({ruleVersion:_,groupId:w.group_id,ruleTitle:w.rule_title,severity:w.severity,statusA:w.status,statusB:"",change:"removed"})}let g={regression:0,new:1,improved:2,removed:3,unchanged:4};p.sort((_,w)=>g[_.change]-g[w.change]);let y=p.filter(_=>_.change==="regression").length,v=p.filter(_=>_.change==="improved").length,m=p.filter(_=>_.change==="new").length,C=p.filter(_=>_.change==="removed").length,x=p.filter(_=>_.change==="unchanged").length,A=p.filter(_=>_.change!=="unchanged"),k=zt.window.createWebviewPanel("stigViewer.diff","STIG Diff",zt.ViewColumn.One,{enableScripts:!0});k.webview.html=vo(i.fsPath,l[0].fsPath,A,p,{regressions:y,improvements:v,newRules:m,removed:C,unchanged:x})}};function ie(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function vo(t,e,i,l,r){let o=t.split("/").pop()||t,c=e.split("/").pop()||e,d={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},p={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},h=g=>g.map(y=>`<tr class="row ${p[y.change]}" data-change="${y.change}">
    <td><span class="pill sev-${y.severity}">CAT ${yo(y.severity)}</span></td>
    <td><code>${ie(y.groupId)}</code></td>
    <td><code>${ie(y.ruleVersion)}</code></td>
    <td class="td-title">${ie(y.ruleTitle)}</td>
    <td>${y.statusA?`<span class="pill st-${y.statusA}">${Zn[y.statusA]||y.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${y.statusB?`<span class="pill st-${y.statusB}">${Zn[y.statusB]||y.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${p[y.change]}">${d[y.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${wo}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${ie(o)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${ie(c)}</span>
  </div>
</header>

<div class="cards">
  <div class="card card-reg"><div class="card-n">${r.regressions}</div><div class="card-l">Regressions</div></div>
  <div class="card card-imp"><div class="card-n">${r.improvements}</div><div class="card-l">Improvements</div></div>
  <div class="card card-new"><div class="card-n">${r.newRules}</div><div class="card-l">New Rules</div></div>
  <div class="card card-rem"><div class="card-n">${r.removed}</div><div class="card-l">Removed</div></div>
  <div class="card card-unc"><div class="card-n">${r.unchanged}</div><div class="card-l">Unchanged</div></div>
</div>

<div class="filters">
  <label><input type="checkbox" id="showUnchanged" /> Show ${r.unchanged} unchanged rules</label>
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
      ${h(i)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(i)};
const ALL     = ${JSON.stringify(l)};

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
</body></html>`}var wo=`
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
`;var jt=B(require("vscode")),ne=B(require("fs")),qe=B(te());function er(t){return t==null?[]:Array.isArray(t)?t:[t]}function Ue(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Ue(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var bo={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function Co(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}async function ir(t){let e=t;if(!e){let y=await jt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!y?.[0])return;e=y[0]}let i=await jt.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!i?.[0])return;let l=JSON.parse(ne.readFileSync(e.fsPath,"utf-8")),r=ne.readFileSync(i[0].fsPath,"utf-8"),o=await(0,qe.parseStringPromise)(r,{explicitArray:!1,tagNameProcessors:[qe.processors.stripPrefix]}),c=null;if(o.TestResult?c=o.TestResult:o.Benchmark?.TestResult&&(c=o.Benchmark.TestResult,Array.isArray(c)&&(c=c[c.length-1])),!c)throw new Error("No <TestResult> element found in the XCCDF results file.");let d=new Map;for(let y of er(c["rule-result"])){let v=y?.$?.idref||"",m=Co(v),C=Ue(y.result).toLowerCase(),x=bo[C]||"not_reviewed",A="",k=er(y.check)[0];k&&(A=Ue(k["check-content"])),!A&&y.message&&(A=Ue(y.message)),d.set(m,{status:x,detail:A})}let p=0,h=0,g=new Date().toISOString();for(let y of l.stigs)for(let v of y.rules){let m=d.get(v.rule_id);m?(v.status=m.status,m.detail&&(v.finding_details=m.detail),v.updatedAt=g,p++):h++}ne.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await jt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),jt.window.showInformationMessage(`SCAP import: ${p} rules updated, ${h} unmatched`)}var gt=B(require("vscode")),Ft=B(require("fs")),Lt=B(require("path"));var Rt=B(require("vscode"));async function St(t){let e=await Rt.workspace.openTextDocument(t);return{document:e,doc:JSON.parse(e.getText())}}async function At(t,e){let i=new Rt.WorkspaceEdit,l=new Rt.Range(t.positionAt(0),t.positionAt(t.getText().length));if(i.replace(t.uri,l,JSON.stringify(e,null,2)),!await Rt.workspace.applyEdit(i))throw new Error("Failed to apply changes to the checklist.");await t.save()}var rr={prefix:"[AUTO-SCAN]",label:"Repo Scan"},or={prefix:"[SARIF IMPORT]",label:"SARIF Import"},sr={prefix:"[AUDIT IMPORT]",label:"Audit Import"},ar=["[AUTO-SCAN]","[SARIF IMPORT]","[AUDIT IMPORT]","[HDF IMPORT]"],Io=/\n\n--- (.+?) ---\n/;function ri(t){let e=(t||"").split(Io),i=[];for(let l=1;l+1<e.length;l+=2)i.push({label:e[l],body:e[l+1]});return{head:e[0],blocks:i}}function xo(t){let e=t.trim();return e===""||ar.some(i=>e.startsWith(i))}function To(t){return t.status!=="not_reviewed"&&!xo(ri(t.finding_details).head)}function nr(t,e){let i=t.trim();return ar.some(l=>l!==e.prefix&&i.startsWith(l))}function _o(t,e){let{head:i,blocks:l}=ri(t);return nr(i,e)||l.some(r=>r.label!==e.label&&nr(r.body,e))}function Eo(t,e,i){let{head:l,blocks:r}=ri(t),o=l.trim().startsWith(i.prefix)?"":l.trimEnd(),c=r.filter(d=>d.label!==i.label).map(d=>`

--- ${d.label} ---
${d.body}`).join("");return o?`${o}${c}

--- ${i.label} ---
${e}`:e+c}function Ht(t,e,i,l){let r=To(t);t.finding_details=Eo(t.finding_details,i,l);let o=t.status==="open"&&e!=="open"&&_o(t.finding_details,l),c=r||o;return c||(t.status=e),c}function So(t){let e=Lt.join(__dirname,"..","scan-patterns.json"),i=t||e;if(!Ft.existsSync(i))throw new Error(`Scan patterns file not found: ${i}`);return JSON.parse(Ft.readFileSync(i,"utf-8"))}function Ao(t,e){let i=[e.rule_title,e.discussion,e.check_content,e.group_title].join(" ").toLowerCase();return t.ruleKeywords.some(l=>i.includes(l.toLowerCase()))}function cr(t){let e=t.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${e}$`)}function oi(t,e){let i=t.replace(/\\/g,"/");return e.some(l=>{if(l.includes("{")){let r=l.match(/^(.*)\{([^}]+)\}(.*)$/);if(r){let[,o,c,d]=r;return c.split(",").some(p=>{let h=o+p.trim()+d;return cr(h).test(i)})}}return cr(l).test(i)})}function Do(t,e){let i=[];function l(r){let o;try{o=Ft.readdirSync(r,{withFileTypes:!0})}catch{return}for(let c of o){let d=Lt.join(r,c.name),p=Lt.relative(t,d);oi(p,e)||(c.isDirectory()?oi(p+"/",e)||l(d):c.isFile()&&i.push(d))}}return l(t),i}function ko(t,e,i){let l;try{let c=Ft.readFileSync(t);if(c.includes(0))return[];l=c.toString("utf-8")}catch{return[]}let r=l.split(`
`),o=[];for(let c of e){let d=i?"g":"gi",p;try{p=new RegExp(c,d)}catch{continue}for(let h=0;h<r.length;h++)p.test(r[h])&&o.push({line:h+1,content:r[h].trim().substring(0,200)}),p.lastIndex=0}return o}async function lr(t){let e=t;if(!e){let h=await gt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!h?.[0])return;e=h[0]}let i=await gt.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!i?.[0])return;let l=await gt.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!l)return;let r;if(l.includes("custom")){let h=await gt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!h?.[0])return;r=h[0].fsPath}let o=So(r),{document:c,doc:d}=await St(e),p=i[0].fsPath;await gt.window.withProgress({location:gt.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(h,g)=>{h.report({message:"Discovering files..."});let y=Do(p,o.excludeGlobs);if(g.isCancellationRequested)return;let v=[],m=new Date().toISOString(),C=0,x=0,A=0,k=0,_=0,w=d.stigs.reduce((b,S)=>b+S.rules.length,0);for(let b of d.stigs)for(let S of b.rules){if(g.isCancellationRequested)return;let T=o.scanPatterns.filter(P=>Ao(P,S));if(T.length===0)continue;C++,h.report({message:`Scanning ${S.group_id} (${C}/${w})`,increment:1/w*100});let u=[],I=[];for(let P of T){let $=y.filter(G=>{let ct=Lt.relative(p,G);return oi(ct,P.fileGlobs)}),R=!1;for(let G of $){if(g.isCancellationRequested)return;let ct=ko(G,P.patterns,P.caseSensitive);if(ct.length>0){R=!0;let j=Lt.relative(p,G);for(let Ut of ct)u.push({file:j,line:Ut.line,content:Ut.content,patternId:P.id})}}R&&I.push(P.name)}let D=T.some(P=>P.matchMeansOpen),O=T.filter(P=>P.matchMeansOpen),M=u.filter(P=>O.some($=>$.id===P.patternId)),L,F;if(M.length>0){L="open",A++;let P=T.find($=>$.findingDetailOverride&&u.some(R=>R.patternId===$.id));if(P?.findingDetailOverride){let $=u.filter(R=>R.patternId===P.id).slice(0,20).map(R=>`  ${R.file}:${R.line} \u2014 ${R.content}`).join(`
`);F=P.findingDetailOverride.replace("{count}",String(u.filter(R=>R.patternId===P.id).length)).replace("{matches}",$).replace("{file}",u[0]?.file||"")}else{let $=M.slice(0,20).map(G=>`  ${G.file}:${G.line} \u2014 ${G.content}`).join(`
`),R=M.length>20?`
  ... and ${M.length-20} more`:"";F=`[AUTO-SCAN] Found ${M.length} potential issue(s) matching: ${I.join(", ")}

${$}${R}`}}else if(D)L="not_a_finding",k++,F=`[AUTO-SCAN] Scanned ${y.length} files for: ${T.map(P=>P.name).join(", ")}. No issues detected.`;else{let P=u.slice(0,10);if(P.length>0){L="not_reviewed";let $=T.find(R=>R.findingDetailOverride);$?.findingDetailOverride?F=$.findingDetailOverride.replace("{count}",String(u.length)).replace("{matches}",P.map(R=>R.file).join(", ")).replace("{file}",P[0]?.file||""):F=`[AUTO-SCAN] Found relevant files: ${P.map(R=>R.file).join(", ")}. Manual review required.`}else continue}Ht(S,L,F,rr)&&_++,S.updatedAt=m,x++}await At(c,d),await gt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let n=w-x,s=_>0?`; ${_} rules kept their existing status (scan evidence appended)`:"";gt.window.showInformationMessage(`Scan complete: ${x} rules evaluated (${A} open, ${k} not a finding, ${n} unmatched \u2014 review manually)${s}`)})}var Xt=B(require("vscode")),dr=B(require("fs"));var si=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function No(t,e){let i=[];if(t.taxa)for(let r of t.taxa){let o=ai(r.id);o&&i.push(o)}if(e?.relationships){for(let r of e.relationships)if(r.target.toolComponent?.name?.toUpperCase()==="CWE"||r.target.id.startsWith("CWE-")){let o=ai(r.target.id);o&&i.push(o)}}if(e?.properties?.tags)for(let r of e.properties.tags){let o=r.match(/cwe[/-](\d+)/i);o&&i.push(parseInt(o[1],10))}let l=ai(t.ruleId);return l&&i.push(l),[...new Set(i)]}function ai(t){let e=t.match(/(?:CWE-?)(\d+)/i);return e?parseInt(e[1],10):null}async function ur(t){let e=t;if(!e){let x=await Xt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!x?.[0])return;e=x[0]}let i=await Xt.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!i?.length)return;let{document:l,doc:r}=await St(e),o=new Date().toISOString(),c=[];for(let x of r.stigs)c.push(...x.rules);let d=new Map,p=0,h=0,g=new Set,y=[];for(let x of i){let A=JSON.parse(dr.readFileSync(x.fsPath,"utf-8"));for(let k of A.runs){let _=k.tool.driver.name;y.includes(_)||y.push(_);let w=new Map;if(k.tool.driver.rules)for(let n of k.tool.driver.rules)w.set(n.id,n);for(let n of k.results){p++;let s=w.get(n.ruleId),b=No(n,s);if(b.length===0)continue;let S=n.locations?.[0]?.physicalLocation,T=S?.artifactLocation?.uri||"",u=S?.region?.startLine||0,I=!1;for(let D of b){let O=si.get(D);if(!O){g.add(D);continue}for(let M of c){let L=`${M.rule_title} ${M.discussion} ${M.check_content}`.toLowerCase();O.keywords.some(F=>L.includes(F.toLowerCase()))&&(d.has(M.uuid)||d.set(M.uuid,[]),d.get(M.uuid).push({tool:_,cwe:D,file:T.replace(/^file:\/\//,""),line:u,message:n.message.text.substring(0,300)}),I=!0)}}I&&h++}}}let v=0,m=0;for(let[x,A]of d){let k=c.find(n=>n.uuid===x);if(!k)continue;let _=new Map;for(let n of A){let s=`CWE-${n.cwe}`;_.has(s)||_.set(s,[]),_.get(s).push(n)}let w=[`[SARIF IMPORT] ${A.length} finding(s) from: ${y.join(", ")}
`];for(let[n,s]of _){let b=si.get(parseInt(n.replace("CWE-","")))?.name||n;w.push(`${n} \u2014 ${b}:`);let S=s.slice(0,10);for(let T of S)w.push(`  ${T.file}:${T.line} \u2014 ${T.message}`);s.length>10&&w.push(`  ... and ${s.length-10} more`)}Ht(k,"open",w.join(`
`),or)?m++:v++,k.updatedAt=o}await At(l,r),await Xt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let C=`SARIF import: ${p} findings processed, ${h} mapped to ${v+m} rules (${v} marked open)`;m>0&&(C+=`; ${m} rules kept their existing status (evidence appended)`),g.size>0&&(C+=` (${g.size} unmapped CWEs: ${[...g].slice(0,5).map(x=>`CWE-${x}`).join(", ")}${g.size>5?"...":""})`),Xt.window.showInformationMessage(C)}var Dt=B(require("vscode")),fr=B(require("fs"));function Oo(t){let e=[];if(!t.vulnerabilities)return e;for(let[i,l]of Object.entries(t.vulnerabilities))for(let r of l.via)typeof r=="object"&&e.push({name:i,severity:r.severity,title:r.title,url:r.url,cwe:r.cwe?.[0],fixAvailable:l.fixAvailable?"Yes":"No"});return e}function pr(t){let e=[],i=Array.isArray(t)?t:t.dependencies||[];for(let l of i)if(l.vulns?.length)for(let r of l.vulns)e.push({name:l.name,version:l.version,id:r.id,description:r.description,fixAvailable:r.fix_versions?.length?r.fix_versions.join(", "):"No"});return e}function Po(t){if(t.vulnerabilities&&typeof t.vulnerabilities=="object")return{entries:Oo(t),source:"npm audit"};if(Array.isArray(t)&&t[0]?.vulns!==void 0)return{entries:pr(t),source:"pip-audit"};if(t.dependencies&&Array.isArray(t.dependencies))return{entries:pr(t),source:"pip-audit"};if(Array.isArray(t))return{entries:t.map(e=>({name:e.name||e.package||e.module||"",version:e.version||e.installed_version||"",severity:e.severity||e.level||"",title:e.title||e.advisory||e.description||"",id:e.id||e.cve||e.advisory_id||"",url:e.url||e.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function hr(t){let e=t;if(!e){let v=await Dt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!v?.[0])return;e=v[0]}let i=await Dt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!i?.[0])return;let{document:l,doc:r}=await St(e),o=JSON.parse(fr.readFileSync(i[0].fsPath,"utf-8")),{entries:c,source:d}=Po(o);if(c.length===0){Dt.window.showInformationMessage(`No vulnerabilities found in ${d} output.`);return}let p=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],h=new Date().toISOString(),g=0,y=0;for(let v of r.stigs)for(let m of v.rules){let C=`${m.rule_title} ${m.discussion} ${m.check_content}`.toLowerCase();if(!p.some(n=>C.includes(n)))continue;g++,m.updatedAt=h;let A={};for(let n of c){let s=(n.severity||"unknown").toLowerCase();A[s]=(A[s]||0)+1}let k=Object.entries(A).map(([n,s])=>`${s} ${n}`).join(", "),_=[`[AUDIT IMPORT] ${c.length} vulnerable dependencies found via ${d}`,`Severity breakdown: ${k}
`],w=c.slice(0,25);for(let n of w){let s=[n.name];n.version&&s.push(`v${n.version}`),n.severity&&s.push(`[${n.severity}]`),n.title&&s.push(`\u2014 ${n.title}`),n.id&&s.push(`(${n.id})`),n.fixAvailable&&n.fixAvailable!=="No"&&s.push(`fix: ${n.fixAvailable}`),_.push(`  ${s.join(" ")}`)}c.length>25&&_.push(`  ... and ${c.length-25} more`),Ht(m,"open",_.join(`
`),sr)&&y++}if(await At(l,r),await Dt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),g>0){let v=y>0?`; ${y} rule(s) kept their existing status (evidence appended)`:"";Dt.window.showInformationMessage(`Imported ${c.length} vulnerabilities from ${d} \u2192 ${g-y} STIG rule(s) marked open${v}`)}else Dt.window.showWarningMessage(`Imported ${c.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var It=B(require("vscode")),gr=B(require("fs"));var Mo={"not reviewed":"not_reviewed",not_reviewed:"not_reviewed",open:"open","not a finding":"not_a_finding",not_a_finding:"not_a_finding",notafinding:"not_a_finding","not applicable":"not_applicable",not_applicable:"not_applicable",notapplicable:"not_applicable"};function Ro(t){t.charCodeAt(0)===65279&&(t=t.slice(1));let e=[],i=[],l="",r=!1,o=0;for(;o<t.length;){let c=t[o];if(r){if(c==='"'){if(t[o+1]==='"'){l+='"',o+=2;continue}r=!1,o++;continue}l+=c,o++;continue}if(c==='"'){r=!0,o++;continue}if(c===","){i.push(l),l="",o++;continue}if(c==="\r"){o++;continue}if(c===`
`){i.push(l),e.push(i),i=[],l="",o++;continue}l+=c,o++}return(l.length>0||i.length>0)&&(i.push(l),e.push(i)),e}function mr(t){return t.toLowerCase().replace(/[\s_-]+/g,"")}function re(t,...e){let i=t.map(mr);for(let l of e){let r=i.indexOf(mr(l));if(r!==-1)return r}return-1}async function yr(t){let e=t;if(!e){let T=await It.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update from CSV"});if(!T?.[0])return;e=T[0]}let i=await It.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select CSV file to merge into checklist"});if(!i?.[0])return;let l=gr.readFileSync(i[0].fsPath,"utf-8"),r=Ro(l);if(r.length<2){It.window.showErrorMessage("CSV is empty or has no data rows.");return}let o=r[0],c=re(o,"Vuln ID","VulnID","group_id"),d=re(o,"Rule ID","RuleID","rule_id"),p=re(o,"Status"),h=re(o,"Finding Details","FindingDetails","finding_details"),g=re(o,"Comments");if(c===-1&&d===-1){It.window.showErrorMessage('CSV must contain a "Vuln ID" or "Rule ID" column to match rules.');return}if(p===-1&&h===-1&&g===-1){It.window.showErrorMessage('CSV must contain at least one of: "Status", "Finding Details", or "Comments".');return}let y=[];for(let T=1;T<r.length;T++){let u=r[T];u.every(I=>I.trim()==="")||y.push({vulnId:c!==-1?(u[c]||"").trim():"",ruleId:d!==-1?(u[d]||"").trim():"",status:p!==-1?(u[p]||"").trim():"",findingDetails:h!==-1&&u[h]||"",comments:g!==-1&&u[g]||"",rowNumber:T+1})}let{document:v,doc:m}=await St(e),C=new Map,x=new Map;for(let T of m.stigs)for(let u of T.rules)u.group_id&&C.set(u.group_id,u),u.rule_id&&x.set(u.rule_id,u);let A=new Date().toISOString(),k=0,_=0,w=0,n=[],s=[],b=new Set;for(let T of y){let u;if(T.vulnId&&(u=C.get(T.vulnId)),!u&&T.ruleId&&(u=x.get(T.ruleId)),!u){_++;let D=T.vulnId||T.ruleId||`(row ${T.rowNumber})`;n.length<10&&n.push(D);continue}b.has(u.uuid),b.add(u.uuid);let I=!1;if(p!==-1&&T.status!==""){let D=Mo[T.status.toLowerCase()];D?u.status!==D&&(u.status=D,I=!0):(w++,s.length<5&&!s.includes(T.status)&&s.push(T.status))}h!==-1&&u.finding_details!==T.findingDetails&&(u.finding_details=T.findingDetails,I=!0),g!==-1&&u.comments!==T.comments&&(u.comments=T.comments,I=!0),I&&(u.updatedAt=A,k++)}await At(v,m),await It.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let S=`CSV import: ${k} rule(s) updated, ${_} unmatched`;w>0&&(S+=`, ${w} row(s) had unrecognized Status (${s.join(", ")})`),_>0&&n.length>0&&(S+=` \u2014 first unmatched: ${n.slice(0,5).join(", ")}${n.length>5?"\u2026":""}`),It.window.showInformationMessage(S)}var kt=B(require("vscode")),oe=B(require("fs")),Nt=B(require("path")),vr=B(require("zlib"));var ci=class{constructor(){this.files=[]}addFile(e,i){let l=typeof i=="string"?Buffer.from(i,"utf-8"):i,r=vr.deflateRawSync(l),o=this.crc32(l);this.files.push({name:e,data:l,crc:o,compressedData:r})}build(){let e=[],i=[],l=0;for(let d of this.files){let p=Buffer.from(d.name,"utf-8"),h=Buffer.alloc(30+p.length);h.writeUInt32LE(67324752,0),h.writeUInt16LE(20,4),h.writeUInt16LE(0,6),h.writeUInt16LE(8,8),h.writeUInt16LE(0,10),h.writeUInt16LE(0,12),h.writeUInt32LE(d.crc,14),h.writeUInt32LE(d.compressedData.length,18),h.writeUInt32LE(d.data.length,22),h.writeUInt16LE(p.length,26),h.writeUInt16LE(0,28),p.copy(h,30);let g=Buffer.alloc(46+p.length);g.writeUInt32LE(33639248,0),g.writeUInt16LE(20,4),g.writeUInt16LE(20,6),g.writeUInt16LE(0,8),g.writeUInt16LE(8,10),g.writeUInt16LE(0,12),g.writeUInt16LE(0,14),g.writeUInt32LE(d.crc,16),g.writeUInt32LE(d.compressedData.length,20),g.writeUInt32LE(d.data.length,24),g.writeUInt16LE(p.length,28),g.writeUInt16LE(0,30),g.writeUInt16LE(0,32),g.writeUInt16LE(0,34),g.writeUInt16LE(0,36),g.writeUInt32LE(0,38),g.writeUInt32LE(l,42),p.copy(g,46),e.push(h,d.compressedData),i.push(g),l+=h.length+d.compressedData.length}let r=l,o=0;for(let d of i)e.push(d),o+=d.length;let c=Buffer.alloc(22);return c.writeUInt32LE(101010256,0),c.writeUInt16LE(0,4),c.writeUInt16LE(0,6),c.writeUInt16LE(this.files.length,8),c.writeUInt16LE(this.files.length,10),c.writeUInt32LE(o,12),c.writeUInt32LE(r,16),c.writeUInt16LE(0,20),e.push(c),Buffer.concat(e)}crc32(e){let i=4294967295;for(let l=0;l<e.length;l++){i^=e[l];for(let r=0;r<8;r++)i=i>>>1^(i&1?3988292384:0)}return(i^4294967295)>>>0}};function Lo(t){let e=[];e.push("STIG ASSESSMENT EVIDENCE PACKAGE"),e.push(`================================
`),e.push(`Generated: ${new Date().toISOString()}`),e.push(`Title: ${t.title}`),e.push(`Host: ${t.target_data.host_name||"N/A"}`),e.push(`IP: ${t.target_data.ip_address||"N/A"}`),e.push(`FQDN: ${t.target_data.fqdn||"N/A"}
`);for(let i of t.stigs){let l={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let d of i.rules)l[d.status]++,l[d.severity]++;let r=i.rules.length,o=r?Math.round((l.not_a_finding+l.not_applicable)/r*100):0;e.push(`STIG: ${i.stig_name}`),e.push(`  ${i.release_info} | Version ${i.version}`),e.push(`  Total Rules: ${r}`),e.push(`  Open: ${l.open} | Not a Finding: ${l.not_a_finding} | Not Reviewed: ${l.not_reviewed} | Not Applicable: ${l.not_applicable}`),e.push(`  CAT I: ${l.high} | CAT II: ${l.medium} | CAT III: ${l.low}`),e.push(`  Completion: ${o}%
`);let c=i.rules.filter(d=>d.status==="open");if(c.length>0){e.push("  OPEN FINDINGS:");for(let d of c){let p=d.severity==="high"?"I":d.severity==="medium"?"II":"III";if(e.push(`    [CAT ${p}] ${d.group_id} \u2014 ${d.rule_title}`),d.finding_details){let h=d.finding_details.substring(0,200).replace(/\n/g,`
      `);e.push(`      ${h}`)}}e.push("")}}return e.push(`
PACKAGE CONTENTS:`),e.push("  checklist.cklb    \u2014 Full checklist in JSON format"),e.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),e.push("  summary.csv       \u2014 All rules with status and findings"),e.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),e.push("  report.txt        \u2014 This summary report"),e.join(`
`)}async function wr(t){let e=t;if(!e){let g=await kt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!g?.[0])return;e=g[0]}let i=JSON.parse(oe.readFileSync(e.fsPath,"utf-8")),l=Nt.basename(e.fsPath,".cklb"),r=new ci;if(r.addFile("checklist.cklb",JSON.stringify(i,null,2)),r.addFile("checklist.ckl",ue(i)),r.addFile("summary.csv",de(i)),r.addFile("poam.csv",pe(i)),r.addFile("report.txt",Lo(i)),(await kt.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let g=await kt.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(g)for(let y of g){let v="evidence/"+Nt.basename(y.fsPath);r.addFile(v,oe.readFileSync(y.fsPath))}}let c=`${l}_evidence_${new Date().toISOString().slice(0,10)}.zip`,d=await kt.window.showSaveDialog({defaultUri:kt.Uri.file(Nt.join(Nt.dirname(e.fsPath),c)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!d)return;oe.writeFileSync(d.fsPath,r.build());let p=i.stigs.reduce((g,y)=>g+y.rules.length,0),h=i.stigs.reduce((g,y)=>g+y.rules.filter(v=>v.status==="open").length,0);kt.window.showInformationMessage(`Evidence package saved: ${p} rules, ${h} open findings \u2192 ${Nt.basename(d.fsPath)}`)}var nt=B(require("vscode")),Wt=B(require("fs")),Bt=B(require("path"));var Ve=B(te()),Cr={"CCI-000005":{control:"AC-2",title:"Account Management",definition:"The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts."},"CCI-000009":{control:"AC-2",title:"Account Management",definition:"The organization reviews information system accounts for compliance with account management requirements."},"CCI-000010":{control:"AC-2",title:"Account Management",definition:"The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts."},"CCI-000012":{control:"AC-2",title:"Account Management",definition:"The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions."},"CCI-000015":{control:"AC-2 (1)",title:"Account Management | Automated System Account Management",definition:"The organization employs automated mechanisms to support the management of information system accounts."},"CCI-000017":{control:"AC-2 (2)",title:"Account Management | Removal of Temporary/Emergency Accounts",definition:"The information system automatically removes or disables temporary and emergency accounts after a defined time period."},"CCI-000018":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after a defined time period."},"CCI-000019":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The organization defines the time period after which the information system automatically disables inactive accounts."},"CCI-000020":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after the organization-defined time period."},"CCI-000023":{control:"AC-2 (4)",title:"Account Management | Automated Audit Actions",definition:"The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles."},"CCI-000032":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources."},"CCI-000033":{control:"AC-3 (3)",title:"Access Enforcement | Mandatory Access Control",definition:"The information system enforces organization-defined mandatory access control policy."},"CCI-000038":{control:"AC-6",title:"Least Privilege",definition:"The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks."},"CCI-000039":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions and security-relevant information."},"CCI-000040":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions."},"CCI-000044":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period."},"CCI-000045":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The organization defines the number of consecutive invalid logon attempts allowed."},"CCI-000047":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded."},"CCI-000048":{control:"AC-8",title:"System Use Notification",definition:"The information system displays an approved system use notification message or banner before granting access."},"CCI-000050":{control:"AC-8",title:"System Use Notification",definition:"The information system retains the notification message or banner on the screen until users acknowledge the usage conditions."},"CCI-000054":{control:"AC-10",title:"Concurrent Session Control",definition:"The information system limits the number of concurrent sessions for each account to an organization-defined number."},"CCI-000056":{control:"AC-11",title:"Session Lock",definition:"The information system initiates a session lock after the organization-defined time period of inactivity."},"CCI-000057":{control:"AC-11",title:"Session Lock",definition:"The information system provides the capability for users to initiate a session lock for display devices."},"CCI-000058":{control:"AC-11 (1)",title:"Session Lock | Pattern-Hiding Displays",definition:"The information system conceals, via the session lock, information previously visible on the display."},"CCI-000060":{control:"AC-11",title:"Session Lock",definition:"The organization defines the time period of inactivity after which the information system initiates a session lock."},"CCI-000068":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions."},"CCI-000070":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions."},"CCI-000082":{control:"AC-17 (9)",title:"Remote Access | Disconnect/Disable Access",definition:"The organization provides the capability to expeditiously disconnect or disable remote access."},"CCI-000213":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies."},"CCI-001084":{control:"SC-3",title:"Security Function Isolation",definition:"The information system isolates security functions from nonsecurity functions."},"CCI-000126":{control:"AU-2",title:"Audit Events",definition:"The organization determines that the information system is capable of auditing organization-defined auditable events."},"CCI-000130":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes what type of event occurred."},"CCI-000131":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes when an event occurred."},"CCI-000132":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes where the event occurred."},"CCI-000133":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the source of the event."},"CCI-000134":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the outcome of the event."},"CCI-000135":{control:"AU-3 (1)",title:"Content of Audit Records | Additional Audit Information",definition:"The information system generates audit records containing organization-defined additional, more detailed information."},"CCI-000136":{control:"AU-3 (2)",title:"Content of Audit Records | Centralized Management",definition:"The information system provides centralized management and configuration of the content to be captured in audit records."},"CCI-000139":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system alerts designated personnel in the event of an audit processing failure."},"CCI-000140":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system takes organization-defined actions in the event of an audit processing failure."},"CCI-000154":{control:"AU-6",title:"Audit Review, Analysis, and Reporting",definition:"The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity."},"CCI-000158":{control:"AU-7",title:"Audit Reduction and Report Generation",definition:"The information system provides an audit reduction and report generation capability."},"CCI-000162":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized access."},"CCI-000163":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized modification."},"CCI-000164":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized deletion."},"CCI-000166":{control:"AU-10",title:"Non-repudiation",definition:"The information system protects against an individual falsely denying having performed a particular action."},"CCI-000167":{control:"AU-10",title:"Non-repudiation",definition:"The information system provides irrefutable evidence that a specific action was performed."},"CCI-000169":{control:"AU-12",title:"Audit Generation",definition:"The information system provides audit record generation capability for the auditable events defined."},"CCI-000171":{control:"AU-12",title:"Audit Generation",definition:"The information system allows designated personnel to select which auditable events are to be audited by specific components."},"CCI-000172":{control:"AU-12 (3)",title:"Audit Generation | Changes by Authorized Individuals",definition:"The information system provides the capability for authorized individuals to change the auditing to be performed on specific components."},"CCI-001464":{control:"AU-4",title:"Audit Storage Capacity",definition:"The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded."},"CCI-001487":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information and audit tools from unauthorized access, modification, and deletion."},"CCI-001493":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users."},"CCI-001494":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only a defined subset of privileged users."},"CCI-001495":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization defines the subset of privileged users authorized for audit management."},"CCI-001496":{control:"AU-9 (5)",title:"Protection of Audit Information | Dual Authorization",definition:"The organization enforces dual authorization for movement and/or deletion of organization-defined audit information."},"CCI-001851":{control:"AU-4 (1)",title:"Audit Storage Capacity | Transfer to Alternate Storage",definition:"The information system off-loads audit records onto a different system or media."},"CCI-001855":{control:"AU-5 (1)",title:"Response to Audit Processing Failures | Audit Storage Capacity",definition:"The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage."},"CCI-001857":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The information system provides an alert in real-time to organization-defined personnel when audit failure events occur."},"CCI-001858":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The organization defines the audit failure events requiring real-time alerts."},"CCI-000345":{control:"CM-5",title:"Access Restrictions for Change",definition:"The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system."},"CCI-000363":{control:"CM-6",title:"Configuration Settings",definition:"The organization defines security configuration settings for the information system components."},"CCI-000366":{control:"CM-6",title:"Configuration Settings",definition:"The organization ensures that the information system components comply with organization-defined configuration settings."},"CCI-000370":{control:"CM-6",title:"Configuration Settings",definition:"The organization establishes and documents configuration settings for information technology products employed within the information system."},"CCI-000379":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities."},"CCI-000381":{control:"CM-7",title:"Least Functionality",definition:"The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services."},"CCI-000382":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services."},"CCI-001749":{control:"CM-5 (3)",title:"Access Restrictions for Change | Signed Components",definition:"The information system prevents the installation of software and firmware components without verification that the component has been digitally signed."},"CCI-001812":{control:"CM-11",title:"User-Installed Software",definition:"The organization defines policies governing the installation of software by users."},"CCI-001813":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system enforces access restrictions and supports auditing of the enforcement actions."},"CCI-001814":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system supports auditing of the enforcement actions."},"CCI-000185":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system validates certificates by constructing and verifying a certification path."},"CCI-000186":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system enforces authorized access to the corresponding private key."},"CCI-000187":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system maps the authenticated identity to the account of the individual or group."},"CCI-000192":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of uppercase characters used."},"CCI-000193":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of lowercase characters used."},"CCI-000194":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of numeric characters used."},"CCI-000195":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of special characters used."},"CCI-000196":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, stores only cryptographically-protected passwords."},"CCI-000197":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, transmits only cryptographically-protected passwords."},"CCI-000198":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password lifetime restrictions."},"CCI-000199":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces maximum password lifetime restrictions."},"CCI-000200":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system prohibits password reuse for a defined number of generations."},"CCI-000205":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password length."},"CCI-000764":{control:"IA-2",title:"Identification and Authentication (Organizational Users)",definition:"The information system uniquely identifies and authenticates organizational users."},"CCI-000765":{control:"IA-2 (1)",title:"Identification and Authentication | Multi-Factor Authentication to Privileged Accounts",definition:"The information system implements multifactor authentication for network access to privileged accounts."},"CCI-000766":{control:"IA-2 (2)",title:"Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for network access to non-privileged accounts."},"CCI-000767":{control:"IA-2 (3)",title:"Identification and Authentication | Local Access to Privileged Accounts",definition:"The information system implements multifactor authentication for local access to privileged accounts."},"CCI-000768":{control:"IA-2 (4)",title:"Identification and Authentication | Local Access to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for local access to non-privileged accounts."},"CCI-000770":{control:"IA-2 (5)",title:"Identification and Authentication | Group Authentication",definition:"The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed."},"CCI-000778":{control:"IA-3",title:"Device Identification and Authentication",definition:"The information system uniquely identifies and authenticates devices before establishing a connection."},"CCI-000795":{control:"IA-4",title:"Identifier Management",definition:"The organization manages information system identifiers for users and devices."},"CCI-000803":{control:"IA-7",title:"Cryptographic Module Authentication",definition:"The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws."},"CCI-001941":{control:"IA-2 (8)",title:"Identification and Authentication | Network Access to Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to privileged accounts."},"CCI-001942":{control:"IA-2 (9)",title:"Identification and Authentication | Network Access to Non-Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts."},"CCI-001953":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials."},"CCI-001954":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts PIV credentials from other agencies."},"CCI-002007":{control:"IA-5",title:"Authenticator Management",definition:"The organization manages information system authenticators."},"CCI-002009":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, enforces the password complexity defined by the organization."},"CCI-002010":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces the number of characters that are changed when new passwords are created."},"CCI-002041":{control:"IA-11",title:"Re-authentication",definition:"The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication."},"CCI-000877":{control:"MA-4",title:"Nonlocal Maintenance",definition:"The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities."},"CCI-001880":{control:"MA-4 (6)",title:"Nonlocal Maintenance | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications."},"CCI-001199":{control:"SC-28",title:"Protection of Information at Rest",definition:"The information system protects the confidentiality and integrity of information at rest."},"CCI-000924":{control:"PE-2",title:"Physical Access Authorizations",definition:"The organization develops, approves, and maintains a list of individuals with authorized access to the facility."},"CCI-001643":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization scans for vulnerabilities in the information system and hosted applications."},"CCI-001644":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization defines the frequency at which vulnerability scans are conducted."},"CCI-002233":{control:"SA-11",title:"Developer Security Testing and Evaluation",definition:"The organization requires the developer of the information system to create and implement a security assessment plan."},"CCI-003123":{control:"SA-11 (1)",title:"Developer Security Testing and Evaluation | Static Code Analysis",definition:"The organization requires the developer to employ static code analysis tools."},"CCI-001130":{control:"SC-5",title:"Denial of Service Protection",definition:"The information system protects against or limits the effects of organization-defined types of denial-of-service attacks."},"CCI-001184":{control:"SC-23",title:"Session Authenticity",definition:"The information system protects the authenticity of communications sessions."},"CCI-001188":{control:"SC-23 (1)",title:"Session Authenticity | Invalidate Session Identifiers at Logout",definition:"The information system invalidates session identifiers upon user logout or other session termination."},"CCI-002418":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system protects the confidentiality and integrity of transmitted information."},"CCI-002420":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission."},"CCI-002421":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to recognize changes to information during transmission."},"CCI-002422":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception."},"CCI-002450":{control:"SC-13",title:"Cryptographic Protection",definition:"The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies."},"CCI-002530":{control:"SC-17",title:"Public Key Infrastructure Certificates",definition:"The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider."},"CCI-002824":{control:"SI-16",title:"Memory Protection",definition:"The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution."},"CCI-003568":{control:"SC-28 (1)",title:"Protection of Information at Rest | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest."},"CCI-001310":{control:"SI-10",title:"Information Input Validation",definition:"The information system checks the validity of organization-defined information inputs."},"CCI-001312":{control:"SI-11",title:"Error Handling",definition:"The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries."},"CCI-001314":{control:"SI-11",title:"Error Handling",definition:"The information system reveals error messages only to authorized personnel."},"CCI-002235":{control:"SI-2 (2)",title:"Flaw Remediation | Automated Flaw Remediation Status",definition:"The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation."},"CCI-002605":{control:"SI-6",title:"Security Function Verification",definition:"The information system verifies the correct operation of security-relevant software and firmware."},"CCI-002617":{control:"SI-2",title:"Flaw Remediation",definition:"The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source."},"CCI-002699":{control:"SI-6",title:"Security Function Verification",definition:"The information system notifies defined personnel of failed security verification tests."},"CCI-002702":{control:"SI-6",title:"Security Function Verification",definition:"The information system implements organization-defined security safeguards when anomalies in security function verification are discovered."},"CCI-000537":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of user-level information contained in the information system."},"CCI-000538":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of system-level information contained in the information system."},"CCI-000539":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of information system documentation including security-related documentation."},"CCI-001682":{control:"PM-6",title:"Information Security Measures of Performance",definition:"The organization develops, monitors, and reports on the results of information security measures of performance."},"CCI-000971":{control:"PS-4",title:"Personnel Termination",definition:"The organization, upon termination of individual employment, disables information system access within the organization-defined time period."}};function br(t){return t==null?[]:Array.isArray(t)?t:[t]}function Ir(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Ir(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}async function xr(t){let e=await(0,Ve.parseStringPromise)(t,{explicitArray:!1,tagNameProcessors:[Ve.processors.stripPrefix]}),i=e.cci_list??e["cci-list"];if(!i)throw new Error("Not a valid CCI List XML \u2014 no <cci_list> root element found.");let l=br((i.cci_items??i["cci-items"])?.cci_item??(i.cci_items??i["cci-items"])?.["cci-item"]);if(l.length===0)throw new Error("No <cci_item> elements found in the CCI List XML.");let r={};for(let o of l){let c=o?.$?.id||"";if(!c.startsWith("CCI-"))continue;let d=Ir(o.definition),p=br(o.references?.reference),h="",g="";for(let y of p){let v=y?.$??y??{},m=String(v.version??"");if((m==="5"||m==="4")&&(h=v.index??"",g=v.title??"",m==="5"))break}if(!h&&p.length>0){let y=p[p.length-1],v=y?.$??y??{};h=v.index??"",g=v.title??""}h&&(r[c]={control:h,title:g,definition:d})}return r}var li=/^[A-Z]{2}-\d+(\s*\(\d+\))?$/;function di(t){let e=[],i="",l=!1;for(let r=0;r<t.length;r++){let o=t[r];l?o==='"'?r+1<t.length&&t[r+1]==='"'?(i+='"',r++):l=!1:i+=o:o==='"'?l=!0:o===","?(e.push(i.trim()),i=""):i+=o}return e.push(i.trim()),e}function _r(t){let e=t.split(/\r?\n/).filter(g=>g.trim().length>0);if(e.length<2)return[];let i=di(e[0]),l=i.map(g=>g.toLowerCase().replace(/[_\s-]+/g," ").trim()),r=-1;for(let g=0;g<i.length;g++){let y=l[g];if(y.includes("control")&&(y.includes("id")||y.includes("identifier"))){r=g;break}}if(r<0)for(let g=0;g<i.length;g++){let y=0;for(let v=1;v<Math.min(e.length,10);v++){let m=di(e[v]);m[g]&&li.test(m[g].trim())&&y++}if(y>=Math.min(e.length-1,3)){r=g;break}}if(r<0)for(let g=0;g<i.length;g++){if(li.test(i[g].trim()))continue;let y=l[g];if(y.includes("control")||y==="id"){r=g;break}}r<0&&(r=0);let o=l.findIndex((g,y)=>y!==r&&(g.includes("title")||g.includes("name"))),c=l.findIndex((g,y)=>y!==r&&g.includes("family")),d=l.findIndex((g,y)=>y!==r&&(g.includes("description")||g.includes("text"))),p=new Set,h=[];for(let g=1;g<e.length;g++){let y=di(e[g]),v=(y[r]??"").trim();if(!v||!li.test(v))continue;let m=v.replace(/\s+/g," ");if(p.has(m))continue;p.add(m);let C={controlId:m};o>=0&&y[o]&&(C.title=y[o].trim()),c>=0&&y[c]&&(C.family=y[c].trim()),d>=0&&y[d]&&(C.description=y[d].trim());let x={};for(let A=0;A<i.length;A++)A===r||A===o||A===c||A===d||y[A]?.trim()&&(x[i[A]]=y[A].trim());Object.keys(x).length>0&&(C.extra=x),h.push(C)}return h}function Fo(t){return t.replace(/\s*\(\d+\)$/,"").trim()}function Bo(t){return t==="not_a_finding"||t==="not_applicable"?"passing":t==="open"?"open":"not_reviewed"}function $o(t){return t.length===0?"not_covered":t.every(l=>l.mappedStatus==="passing")?"fully_satisfied":t.some(l=>l.mappedStatus==="passing")?"partially_satisfied":"at_risk"}var Tr={not_covered:0,at_risk:1,partially_satisfied:2,fully_satisfied:3};function Er(t,e,i){let l={...Cr,...i},r=new Map;for(let[h,g]of Object.entries(l)){let y=g.control;r.has(y)||r.set(y,new Set),r.get(y).add(h)}let o=new Map,c=0;for(let h of t.stigs)for(let g of h.rules)for(let y of g.ccis){if(!l[y]){c++;continue}o.has(y)||o.set(y,[]),o.get(y).push({rule:g,cci:y})}let d=[];for(let h of e){let g=!h.controlId.includes("("),y=new Set;if(g){for(let[C,x]of r.entries())if(Fo(C)===h.controlId)for(let A of x)y.add(A)}else{let C=r.get(h.controlId);if(C)for(let x of C)y.add(x)}let v=new Set,m=[];for(let C of y){let x=o.get(C)??[];for(let{rule:A}of x){let k=`${A.group_id}::${C}`;v.has(k)||(v.add(k),m.push({groupId:A.group_id,ruleVersion:A.rule_version,severity:A.severity,ruleTitle:A.rule_title,status:A.status,mappedStatus:Bo(A.status),cci:C}))}}d.push({control:h,status:$o(m),mappedRules:m,ccis:[...y].sort()})}d.sort((h,g)=>{let y=Tr[h.status]-Tr[g.status];return y!==0?y:h.control.controlId.localeCompare(g.control.controlId,void 0,{numeric:!0})});let p=t.stigs.map(h=>h.display_name||h.stig_name).join(", ");return{analyzedAt:new Date().toISOString(),checklistTitle:t.title,stigName:p,totalNistControls:e.length,coveredControls:d.filter(h=>h.status!=="not_covered").length,uncoveredControls:d.filter(h=>h.status==="not_covered").length,fullySatisfiedControls:d.filter(h=>h.status==="fully_satisfied").length,partiallySatisfiedControls:d.filter(h=>h.status==="partially_satisfied").length,atRiskControls:d.filter(h=>h.status==="at_risk").length,controlMappings:d,unmappedCciCount:c}}function Gt(t){return t.includes(",")||t.includes('"')||t.includes(`
`)?`"${t.replace(/"/g,'""')}"`:t}function Sr(t){let e="Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details",i=t.controlMappings.map(l=>{let r=l.mappedRules.filter(p=>p.mappedStatus==="passing").length,o=l.mappedRules.filter(p=>p.mappedStatus==="open").length,c=l.mappedRules.filter(p=>p.mappedStatus==="not_reviewed").length,d=l.mappedRules.map(p=>`${p.groupId} (${p.status.replace(/_/g," ")})`).join("; ");return[Gt(l.control.controlId),Gt(l.control.title??""),Gt(l.control.family??""),Gt(l.status.replace(/_/g," ")),String(l.mappedRules.length),String(r),String(o),String(c),Gt(l.ccis.join(", ")),Gt(d)].join(",")});return[e,...i].join(`
`)}var ze=class t{static async show(e){let i=e;if(!i){let g=await nt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select STIG Checklist for Crosswalk"});if(!g?.[0])return;i=g[0]}let l=JSON.parse(Wt.readFileSync(i.fsPath,"utf-8")),r=await nt.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select NIST 800-53 Controls CSV"});if(!r?.[0])return;let o=Wt.readFileSync(r[0].fsPath,"utf-8"),c=_r(o);if(c.length===0){nt.window.showErrorMessage("No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.");return}let d;if((await nt.window.showQuickPick(["Use bundled CCI mapping (covers common CCIs)","Import full CCI List XML from DISA"],{title:"CCI Mapping Source"}))?.includes("Import")){let g=await nt.window.showOpenDialog({canSelectMany:!1,filters:{"CCI List (XML)":["xml","XML"],"All Files":["*"]},title:"Select U_CCI_List.xml (extract U_CCI_List.zip from cyber.mil first)"});if(g?.[0])try{let y=Wt.readFileSync(g[0].fsPath,"utf-8");d=await xr(y),nt.window.showInformationMessage(`Loaded ${Object.keys(d).length} CCI entries from XML.`)}catch(y){nt.window.showWarningMessage(`Failed to parse CCI List XML: ${y}. Falling back to bundled map.`)}}let h=Er(l,c,d);if(h.unmappedCciCount>0&&nt.window.showInformationMessage(`${h.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`),t._panel)t._panel.reveal();else{let g=nt.window.createWebviewPanel("stigViewer.crosswalk",`NIST 800-53 Crosswalk \u2014 ${l.title}`,nt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=g,g.onDidDispose(()=>{t._panel=void 0}),g.webview.onDidReceiveMessage(async y=>{if(y.type==="exportCsv"){let v=Bt.basename(i.fsPath,".cklb")+"_NIST_crosswalk.csv",m=await nt.window.showSaveDialog({defaultUri:nt.Uri.file(Bt.join(Bt.dirname(i.fsPath),v)),filters:{CSV:["csv"]},title:"Export Crosswalk Report"});m&&(Wt.writeFileSync(m.fsPath,Sr(h),"utf-8"),nt.window.showInformationMessage(`Exported crosswalk \u2192 ${Bt.basename(m.fsPath)}`))}})}t._panel.webview.html=Vo(h)}};function st(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Uo(t){switch(t){case"fully_satisfied":return'<span class="st-icon st-sat">\u2714</span>';case"partially_satisfied":return'<span class="st-icon st-par">\u25D1</span>';case"at_risk":return'<span class="st-icon st-risk">\u26A0</span>';default:return'<span class="st-icon st-gap">\u25CF</span>'}}function qo(t){return t.replace(/_/g," ")}function Vo(t){let i=[...new Set(t.controlMappings.map(o=>o.control.family).filter(Boolean))].sort().map(o=>`<option value="${st(o)}">${st(o)}</option>`).join(""),l=t.totalNistControls?Math.round(t.coveredControls/t.totalNistControls*100):0,r=t.controlMappings.map((o,c)=>{let d=o.mappedRules.filter(m=>m.mappedStatus==="passing").length,p=o.mappedRules.filter(m=>m.mappedStatus==="open").length,h=o.mappedRules.filter(m=>m.mappedStatus==="not_reviewed").length,g=o.mappedRules.map(m=>{let C=m.severity==="high"?"sev-high":m.severity==="medium"?"sev-med":"sev-low",x=m.mappedStatus==="passing"?"rs-pass":m.mappedStatus==="open"?"rs-open":"rs-nr";return`<tr>
        <td class="sub-td">${st(m.groupId)}</td>
        <td class="sub-td">${st(m.ruleVersion)}</td>
        <td class="sub-td ${C}">${m.severity==="high"?"CAT I":m.severity==="medium"?"CAT II":"CAT III"}</td>
        <td class="sub-td ${x}">${st(qo(m.status))}</td>
        <td class="sub-td sub-title">${st(m.ruleTitle)}</td>
        <td class="sub-td sub-cci">${st(m.cci)}</td>
      </tr>`}).join(""),y=o.control.description?`<div class="ctrl-desc">${st(o.control.description)}</div>`:o.status==="not_covered"?'<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>':"",v=o.mappedRules.length>0?`<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${g}</tbody>
    </table>`:"";return`<tr class="cw-row" data-idx="${c}" data-status="${o.status}" data-family="${st(o.control.family??"")}">
      <td class="td-st">${Uo(o.status)}</td>
      <td class="td-ctrl">${st(o.control.controlId)}</td>
      <td class="td-title">${st(o.control.title??"")}</td>
      <td class="td-fam">${st(o.control.family??"")}</td>
      <td class="td-n">${o.mappedRules.length}</td>
      <td class="td-n td-pass">${d||""}</td>
      <td class="td-n td-open">${p||""}</td>
      <td class="td-n td-nr">${h||""}</td>
      <td class="td-ccis">${st(o.ccis.slice(0,5).join(", "))}${o.ccis.length>5?"\u2026":""}</td>
    </tr>
    <tr class="cw-detail" data-idx="${c}" style="display:none">
      <td colspan="9">
        <div class="detail-wrap">${y}${v}</div>
      </td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>NIST 800-53 Crosswalk</title>
<style>${zo}</style>
</head>
<body>

<header class="hdr">
  <h1>NIST 800-53 Crosswalk</h1>
  <span class="chip">${st(t.checklistTitle)}</span>
  <span class="chip">${st(t.stigName)}</span>
</header>

<div class="cards">
  <div class="card"><div class="card-n">${t.totalNistControls}</div><div class="card-l">Total Controls</div></div>
  <div class="card card-cov"><div class="card-n">${t.coveredControls}</div><div class="card-l">Covered</div></div>
  <div class="card card-gap"><div class="card-n">${t.uncoveredControls}</div><div class="card-l">Gaps</div></div>
  <div class="card card-sat"><div class="card-n">${t.fullySatisfiedControls}</div><div class="card-l">Fully Satisfied</div></div>
  <div class="card card-par"><div class="card-n">${t.partiallySatisfiedControls}</div><div class="card-l">Partial</div></div>
  <div class="card card-risk"><div class="card-n">${t.atRiskControls}</div><div class="card-l">At Risk</div></div>
  <div class="card card-pct"><div class="card-n">${l}%</div><div class="card-l">Coverage</div></div>
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
    ${i}
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
  <tbody>${r}</tbody>
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
</body></html>`}var zo=`
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
`;var V=B(require("vscode")),fi=B(require("path"));var $t="The selected file is not valid HDF JSON. Expected structure: profiles[] with controls[].";function kr(t){let e;try{e=JSON.parse(t)}catch(l){throw new Error(`${$t} (JSON parse error: ${l.message})`)}if(!e||typeof e!="object")throw new Error($t);let i=e;if(!Array.isArray(i.profiles)||i.profiles.length===0)throw new Error($t);for(let l of i.profiles){if(!l||typeof l!="object")throw new Error($t);if(!Array.isArray(l.controls))throw new Error($t);for(let r of l.controls){if(!r||typeof r!="object")throw new Error($t);if(typeof r.id!="string"||typeof r.title!="string")throw new Error($t);(!r.tags||typeof r.tags!="object")&&(r.tags={})}}return i}function Nr(t){if(!t||t.length===0)return"not_reviewed";if(t.some(o=>o.status==="failed"))return"open";let i=t.some(o=>o.status==="error"),l=t.some(o=>o.status==="passed");return t.every(o=>o.status==="skipped")?"not_applicable":i&&!l?"not_reviewed":l?"not_a_finding":"not_reviewed"}function jo(t){let e=t.tags?.severity;return e==="high"||e==="medium"||e==="low"?e:typeof t.impact=="number"?t.impact>=.7?"high":t.impact>=.4?"medium":"low":"medium"}function ui(t,e){return t.descriptions?t.descriptions.find(l=>l.label===e)?.data??"":""}function Ho(t){return t.desc?t.desc:ui(t,"default")}function Or(t){if(!t.results||t.results.length===0)return t.code?`[HDF IMPORT] No test results recorded.
InSpec control source (truncated):
${t.code.length>500?`${t.code.slice(0,500)}\u2026`:t.code}`:"";let e=["[HDF IMPORT] InSpec automated scan results:",""];for(let i=0;i<t.results.length;i++){let l=t.results[i];e.push(`Test ${i+1}: ${l.status.toUpperCase()}`),e.push(`  ${l.code_desc}`),l.message&&e.push(`  Message: ${l.message}`),l.exception&&e.push(`  Exception: ${l.exception}`),l.run_time!==void 0&&e.push(`  Duration: ${l.run_time}s`),l.start_time&&e.push(`  Started: ${l.start_time}`),e.push("")}return e.join(`
`).trim()}function Xo(t,e,i){return e?!t||!i?e:`${t}

--- HDF Import ---
${e}`:t}function Go(t,e,i){let l=e.passthrough;if(!l)return;let r=l.target;r&&(!t.host_name&&r.hostname&&(t.host_name=r.hostname),!t.fqdn&&r.fqdn&&(t.fqdn=r.fqdn),!t.ip_address&&r.ip_address&&(t.ip_address=r.ip_address),!t.mac_address&&r.mac_address&&(t.mac_address=r.mac_address));let o={};for(let[c,d]of Object.entries(l))c!=="target"&&(o[c]=d);if(Object.keys(o).length>0){let c=`[HDF passthrough] ${JSON.stringify(o)}`;t.comments?t.comments.includes("[HDF passthrough]")||(t.comments=`${t.comments}
${c}`):t.comments=c}if(i.length>1){let c=`[HDF] Scan covered ${i.length} profiles: ${i.map(d=>d.title||d.name).join(", ")}`;t.comments?t.comments.includes("[HDF] Scan covered")||(t.comments=`${t.comments}
${c}`):t.comments=c}}function pi(t,e,i){let l={overwriteExistingStatus:i?.overwriteExistingStatus??!1,preserveExistingFindingDetails:i?.preserveExistingFindingDetails??!0,updateTargetData:i?.updateTargetData??!0},r=JSON.parse(JSON.stringify(t)),o=new Map,c=new Map;for(let w of r.stigs)for(let n of w.rules)n.rule_version&&o.set(n.rule_version,n),n.group_id&&c.set(n.group_id,n);let d=[],p={passed:0,failed:0,skipped:0,error:0,noResults:0},h=[],g=[],y=new Set,v=0,m=0,C=new Map;for(let w of e.profiles)for(let n of w.controls){if(v++,!n.results||n.results.length===0)p.noResults++;else{let T=n.results.some(O=>O.status==="failed"),u=n.results.some(O=>O.status==="error"),I=n.results.some(O=>O.status==="passed"),D=n.results.every(O=>O.status==="skipped");T?p.failed++:D?p.skipped++:I?p.passed++:u?p.error++:p.noResults++}n.tags?.stig_id||m++;let s,b,S=n.tags?.stig_id;if(S&&o.has(S)?(s=o.get(S),b="rule_version"):n.id&&c.has(n.id)?(s=c.get(n.id),b="group_id"):n.tags?.gid&&c.has(n.tags.gid)&&(s=c.get(n.tags.gid),b="gid_tag"),!s||!b){g.push(n.tags?.stig_id||n.id);continue}C.set(s.uuid,{control:n,rule:s,matchedBy:b})}let x=new Date().toISOString();for(let{control:w,rule:n,matchedBy:s}of C.values()){let b=Nr(w.results),S=n.status,T=l.overwriteExistingStatus||n.status==="not_reviewed",u=S;T&&(n.status=b,u=b);let I=Or(w);I&&(n.finding_details=Xo(n.finding_details,I,l.preserveExistingFindingDetails)),n.updatedAt=x,y.add(n.uuid),h.push({ruleVersion:n.rule_version,groupId:n.group_id,oldStatus:S,newStatus:u,matchedBy:s})}let A=[];for(let w of r.stigs)for(let n of w.rules)y.has(n.uuid)||A.push(n.rule_version||n.group_id);l.updateTargetData&&Go(r.target_data,e,e.profiles),m>0&&d.push(`${m} HDF control(s) lacked tags.stig_id; matching fell back to control.id / tags.gid.`);let k=e.profiles[0],_={profileName:k?.title||k?.name||"(unknown profile)",profileVersion:k?.version,hostName:e.passthrough?.target?.hostname||e.passthrough?.target?.fqdn,totalControls:v,matchedRules:y.size,unmatchedControls:g.length,unmatchedRules:A.length,statusBreakdown:p,appliedChanges:h,unmatchedControlIds:g,unmatchedRuleVersions:A,warnings:d};return{updated:r,summary:_}}function Wo(){return{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null}}function Ko(t,e,i){let l=Ho(t),r=ui(t,"check"),o=ui(t,"fix"),c=jo(t),d=Nr(t.results),p=Or(t),h=dt(),g=t.tags?.gid||t.id,y=t.tags?.rid||"",v=t.tags?.stig_id||t.id,m=t.tags?.gtitle||"",C=Array.isArray(t.tags?.cci)?[...t.tags.cci]:[],x=Array.isArray(t.tags?.legacy)?[...t.tags.legacy]:[];return{uuid:h,stig_uuid:e,target_key:null,stig_ref:null,group_id:g,rule_id:y,rule_id_src:y,weight:"10.0",classification:"Unclassified",severity:c,rule_version:v,group_title:m,rule_title:t.title,fix_text:o,false_positives:"",false_negatives:"",discussion:l,check_content:r,documentable:"",mitigations:"",potential_impacts:"",third_party_tools:"",mitigation_control:"",responsibility:"",security_override_guidance:"",ia_controls:"",check_content_ref:{href:"",name:""},legacy_ids:x,ccis:C,group_tree:[{id:g,title:m,description:l}],createdAt:i,updatedAt:i,STIGUuid:e,status:d,overrides:{},comments:"",finding_details:p,srg_id:m}}function Pr(t){let e=new Date().toISOString(),i=dt(),l=[];for(let p of t.profiles){let h=dt(),g=p.controls.map(v=>Ko(v,h,e)),y=p.title||p.name||"InSpec Profile";l.push({stig_name:y,display_name:y,stig_id:p.name,release_info:p.version?`Version ${p.version}`:"",version:p.version||"1",uuid:h,reference_identifier:p.name,size:g.length,rules:g})}let r=Wo(),o=t.passthrough?.target;if(o&&(o.hostname&&(r.host_name=o.hostname),o.fqdn&&(r.fqdn=o.fqdn),o.ip_address&&(r.ip_address=o.ip_address),o.mac_address&&(r.mac_address=o.mac_address)),t.passthrough){let p={};for(let[h,g]of Object.entries(t.passthrough))h!=="target"&&(p[h]=g);Object.keys(p).length>0&&(r.comments=`[HDF passthrough] ${JSON.stringify(p)}`)}let c=t.profiles[0];return{title:c?.title||c?.name||"InSpec / HDF Import",id:i,stigs:l,active:!0,mode:1,has_path:!0,target_data:r,cklb_version:"1"}}var Ar={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"};function Dr(t){return t.replace(/\|/g,"\\|").replace(/\n/g," ")}function Mr(t,e){let i=[];if(i.push("# HDF Import Report"),i.push(""),i.push(`**Source:** ${t.profileName}`),t.profileVersion&&i.push(`**Profile Version:** ${t.profileVersion}`),t.hostName&&i.push(`**Target Host:** ${t.hostName}`),i.push(`**Imported:** ${new Date().toISOString()}`),i.push(`**Checklist:** ${e}`),i.push(""),i.push("## Summary"),i.push(""),i.push("| Metric | Count |"),i.push("|--------|-------|"),i.push(`| HDF Controls | ${t.totalControls} |`),i.push(`| Matched to Checklist | ${t.matchedRules} |`),i.push(`| Unmatched HDF Controls | ${t.unmatchedControls} |`),i.push(`| Unmatched Checklist Rules | ${t.unmatchedRules} |`),i.push(""),i.push("## Status Breakdown (HDF Results)"),i.push(""),i.push("| Status | Count |"),i.push("|--------|-------|"),i.push(`| Open (failed) | ${t.statusBreakdown.failed} |`),i.push(`| Not a Finding (passed) | ${t.statusBreakdown.passed} |`),i.push(`| Not Applicable (skipped) | ${t.statusBreakdown.skipped} |`),i.push(`| Not Reviewed (error/no results) | ${t.statusBreakdown.error+t.statusBreakdown.noResults} |`),i.push(""),t.warnings.length>0){i.push("## Warnings"),i.push("");for(let l of t.warnings)i.push(`- ${l}`);i.push("")}if(i.push("## Rules Updated"),i.push(""),t.appliedChanges.length===0)i.push("_No rules were updated._");else{i.push("| Rule Version | Vuln ID | Old Status | New Status | Matched By |"),i.push("|--------------|---------|------------|------------|------------|");for(let l of t.appliedChanges)i.push(`| ${Dr(l.ruleVersion)} | ${Dr(l.groupId)} | ${Ar[l.oldStatus]||l.oldStatus} | ${Ar[l.newStatus]||l.newStatus} | ${l.matchedBy} |`)}if(i.push(""),i.push("## Unmatched HDF Controls"),i.push(""),i.push("These controls in the HDF file had no corresponding rule in the checklist. This may indicate a STIG version mismatch or that the HDF covers additional controls beyond the checklist's STIG."),i.push(""),t.unmatchedControlIds.length===0)i.push("_None._");else for(let l of t.unmatchedControlIds)i.push(`- ${l}`);if(i.push(""),i.push("## Unmatched Checklist Rules"),i.push(""),i.push("These rules in the checklist were not addressed by any HDF control. They retain their previous status."),i.push(""),t.unmatchedRuleVersions.length===0)i.push("_None._");else for(let l of t.unmatchedRuleVersions)i.push(`- ${l}`);return i.push(""),i.join(`
`)}async function Lr(t,e){let i=e;if(!i){let p=await V.window.showOpenDialog({canSelectMany:!1,filters:{"HDF / InSpec JSON":["json"]},title:"Select InSpec / HDF Results File"});if(!p?.[0])return;i=p[0]}let l;try{let p=await V.workspace.fs.readFile(i),h=new TextDecoder("utf-8").decode(p);l=kr(h)}catch(p){V.window.showErrorMessage(p.message);return}let r=ot.activeDocumentUri,o;if(r){let p=await V.window.showQuickPick([{label:"Apply results to the current checklist",description:fi.basename(r.fsPath),value:"apply"},{label:"Generate a new checklist from these results",description:l.profiles[0]?.title||l.profiles[0]?.name,value:"new"}],{placeHolder:"How should the HDF file be imported?"});if(!p)return;o=p.value}else o="new";let c=null,d=null;if(o==="apply"&&r)try{let p=await V.workspace.openTextDocument(r);c=JSON.parse(p.getText()),d=r}catch(p){V.window.showErrorMessage(`Failed to read active checklist: ${p}`);return}Yo(t,{hdf:l,checklistDoc:c,checklistUri:d,mode:o})}function Yo(t,e){let i=V.window.createWebviewPanel("stigWorkbenchHdfImport","HDF Import",V.ViewColumn.Active,{enableScripts:!0,retainContextWhenHidden:!0});i.webview.html=es();let l=()=>{if(e.mode==="apply"&&e.checklistDoc){let o=Rr(e.checklistDoc,e.hdf,se());i.webview.postMessage({type:"showPreview",summary:o.summary,profile:hi(e.hdf),checklistTitle:e.checklistDoc.title,options:se()})}else Qo(i,e)},r=i.webview.onDidReceiveMessage(async o=>{if(o?.type==="ready"&&l(),o?.type==="reproject"&&e.mode==="apply"&&e.checklistDoc){let c=Rr(e.checklistDoc,e.hdf,o.options||se());i.webview.postMessage({type:"updatePreview",summary:c.summary,options:o.options||se()})}o?.type==="apply"&&e.mode==="apply"&&e.checklistDoc&&e.checklistUri&&await Jo(i,e,o.options||se()),o?.type==="downloadReport"&&o.summary&&o.checklistTitle!==void 0&&await Zo(o.summary,o.checklistTitle),o?.type==="cancel"&&i.dispose()});i.onDidDispose(()=>r.dispose())}function se(){return{overwriteExistingStatus:!1,preserveExistingFindingDetails:!0,updateTargetData:!0}}function hi(t){let e=t.profiles[0];return{name:e?.title||e?.name||"(unknown)",version:e?.version||"",hostName:t.passthrough?.target?.hostname||t.passthrough?.target?.fqdn||"",inspecVersion:t.version||"",profileCount:t.profiles.length}}function Rr(t,e,i){let{summary:l}=pi(t,e,i);return{summary:l}}async function Jo(t,e,i){if(!(!e.checklistDoc||!e.checklistUri))try{let{updated:l,summary:r}=pi(e.checklistDoc,e.hdf,i),o=await V.workspace.openTextDocument(e.checklistUri),c=new V.WorkspaceEdit,d=new V.Range(o.positionAt(0),o.positionAt(o.getText().length));if(c.replace(o.uri,d,JSON.stringify(l,null,2)),!await V.workspace.applyEdit(c)){V.window.showErrorMessage("HDF import: failed to apply edit to the checklist.");return}await o.save(),await V.commands.executeCommand("vscode.openWith",e.checklistUri,"stigViewer.cklbEditor"),t.webview.postMessage({type:"showSummary",summary:r,profile:hi(e.hdf),checklistTitle:l.title}),V.window.showInformationMessage(`HDF import: ${r.matchedRules} rule(s) updated, ${r.unmatchedControls} unmatched control(s).`)}catch(l){V.window.showErrorMessage(`HDF import failed: ${l}`)}}async function Qo(t,e){try{let i=Pr(e.hdf),l=(i.title||"hdf-import").replace(/\s+/g,"-")+".cklb",r=await V.window.showSaveDialog({title:"Save New Checklist",defaultUri:V.Uri.file(l),filters:{"CKLB Checklist":["cklb"]}});if(!r){t.dispose();return}let o=new TextEncoder().encode(JSON.stringify(i,null,2));await V.workspace.fs.writeFile(r,o),await V.commands.executeCommand("vscode.openWith",r,"stigViewer.cklbEditor");let c=e.hdf.profiles.reduce((C,x)=>C+x.controls.length,0),d=0,p=0,h=0,g=0,y=0;for(let C of e.hdf.profiles)for(let x of C.controls){if(!x.results||x.results.length===0){y++;continue}let A=x.results.some(n=>n.status==="failed"),k=x.results.some(n=>n.status==="error"),_=x.results.some(n=>n.status==="passed"),w=x.results.every(n=>n.status==="skipped");A?p++:w?h++:_?d++:k?g++:y++}let v=hi(e.hdf),m={profileName:v.name,profileVersion:v.version,hostName:v.hostName,totalControls:c,matchedRules:c,unmatchedControls:0,unmatchedRules:0,statusBreakdown:{passed:d,failed:p,skipped:h,error:g,noResults:y},appliedChanges:[],unmatchedControlIds:[],unmatchedRuleVersions:[],warnings:[]};t.webview.postMessage({type:"showSummary",summary:m,profile:v,checklistTitle:i.title,modeB:!0}),V.window.showInformationMessage(`HDF import: created new checklist with ${c} rules.`)}catch(i){V.window.showErrorMessage(`HDF new-checklist import failed: ${i}`),t.dispose()}}async function Zo(t,e){let i=Mr(t,e),l=`hdf-import-${(t.profileName||"report").replace(/\s+/g,"-")}.md`,r=await V.window.showSaveDialog({title:"Save HDF Import Report",defaultUri:V.Uri.file(l),filters:{Markdown:["md"]}});if(!r)return;let o=new TextEncoder().encode(i);await V.workspace.fs.writeFile(r,o),V.window.showInformationMessage(`HDF report saved: ${fi.basename(r.fsPath)}`)}function ts(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function es(){let t=ts();return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="Content-Security-Policy"
  content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${t}';" />
<title>HDF Import</title>
<style>
  :root {
    --status-open: #e74c3c;
    --status-naf: #27ae60;
    --status-nr: #e67e22;
    --status-na: #7f8c8d;
  }
  body {
    font-family: var(--vscode-font-family);
    color: var(--vscode-editor-foreground);
    background: var(--vscode-editor-background);
    margin: 0;
    padding: 24px;
    font-size: var(--vscode-font-size);
  }
  h1 { margin-top: 0; font-weight: 400; }
  h2 { font-weight: 500; margin-top: 28px; }
  .card {
    background: var(--vscode-editorWidget-background, rgba(127,127,127,0.08));
    border: 1px solid var(--vscode-widget-border, var(--vscode-panel-border, rgba(127,127,127,0.25)));
    padding: 16px;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
  .stat {
    padding: 12px 16px;
    background: var(--vscode-editor-background);
    border: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.25));
    border-radius: 4px;
  }
  .stat .label { font-size: 11px; text-transform: uppercase; opacity: 0.7; }
  .stat .value { font-size: 22px; font-weight: 500; margin-top: 4px; }
  label.option { display: block; margin: 8px 0; cursor: pointer; }
  label.option input { margin-right: 8px; }
  button {
    background: var(--vscode-button-background);
    color: var(--vscode-button-foreground);
    border: none;
    padding: 6px 14px;
    cursor: pointer;
    font-family: inherit;
    border-radius: 2px;
    margin-right: 8px;
  }
  button:hover { background: var(--vscode-button-hoverBackground); }
  button.secondary {
    background: var(--vscode-button-secondaryBackground, transparent);
    color: var(--vscode-button-secondaryForeground, var(--vscode-editor-foreground));
    border: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.4));
  }
  button.secondary:hover { background: var(--vscode-button-secondaryHoverBackground, rgba(127,127,127,0.1)); }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
    font-size: 12px;
  }
  th, td {
    text-align: left;
    padding: 6px 10px;
    border-bottom: 1px solid var(--vscode-panel-border, rgba(127,127,127,0.2));
  }
  th { font-weight: 500; opacity: 0.8; }
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    color: #fff;
    font-weight: 500;
  }
  .badge.open { background: var(--status-open); }
  .badge.not_a_finding { background: var(--status-naf); }
  .badge.not_reviewed { background: var(--status-nr); }
  .badge.not_applicable { background: var(--status-na); }
  details { margin-top: 10px; }
  details summary { cursor: pointer; padding: 6px 0; font-weight: 500; }
  details ul { margin: 8px 0 8px 20px; font-size: 12px; max-height: 240px; overflow: auto; }
  .hidden { display: none; }
  .actions { margin-top: 16px; display: flex; justify-content: flex-end; }
  .scroll { max-height: 320px; overflow: auto; }
  .warn {
    padding: 8px 12px;
    background: rgba(231, 126, 34, 0.12);
    border-left: 3px solid var(--status-nr);
    margin: 8px 0;
  }
</style>
</head>
<body>
  <div id="viewPreview" class="hidden">
    <h1>Import HDF / InSpec Results</h1>
    <div class="card">
      <div><strong>Profile:</strong> <span id="pProfile"></span></div>
      <div><strong>Profile Version:</strong> <span id="pVersion"></span></div>
      <div><strong>Target Host:</strong> <span id="pHost"></span></div>
      <div><strong>InSpec Version:</strong> <span id="pInspec"></span></div>
      <div><strong>Checklist:</strong> <span id="pChecklist"></span></div>
    </div>

    <div class="stats">
      <div class="stat"><div class="label">Total HDF Controls</div><div class="value" id="sTotal">0</div></div>
      <div class="stat"><div class="label">Projected Matches</div><div class="value" id="sMatched">0</div></div>
      <div class="stat"><div class="label">Unmatched HDF</div><div class="value" id="sUnmatchedHdf">0</div></div>
      <div class="stat"><div class="label">Unmatched Rules</div><div class="value" id="sUnmatchedRules">0</div></div>
    </div>

    <h2>Options</h2>
    <div class="card">
      <label class="option"><input type="checkbox" id="optOverwrite" /> Overwrite existing rule statuses (even if the user has already set them)</label>
      <label class="option"><input type="checkbox" id="optPreserve" checked /> Append HDF evidence to existing finding details instead of replacing</label>
      <label class="option"><input type="checkbox" id="optTarget" checked /> Update empty target data (hostname, IP, FQDN) from HDF</label>
    </div>

    <h2>Preview Changes</h2>
    <div class="card scroll">
      <table id="changesTable">
        <thead>
          <tr>
            <th>Rule Version</th>
            <th>Vuln ID</th>
            <th>Old Status</th>
            <th>New Status</th>
            <th>Matched By</th>
          </tr>
        </thead>
        <tbody id="changesBody"></tbody>
      </table>
    </div>

    <div id="warningsBlock"></div>

    <div class="actions">
      <button class="secondary" id="btnCancel">Cancel</button>
      <button id="btnApply">Apply Import</button>
    </div>
  </div>

  <div id="viewSummary" class="hidden">
    <h1>Import Complete</h1>
    <div class="card">
      <div><strong>Profile:</strong> <span id="rProfile"></span></div>
      <div><strong>Checklist:</strong> <span id="rChecklist"></span></div>
    </div>

    <div class="stats">
      <div class="stat"><div class="label">Controls Processed</div><div class="value" id="rTotal">0</div></div>
      <div class="stat"><div class="label">Matched</div><div class="value" id="rMatched">0</div></div>
      <div class="stat"><div class="label">Unmatched HDF</div><div class="value" id="rUnmatchedHdf">0</div></div>
      <div class="stat"><div class="label">Unmatched Rules</div><div class="value" id="rUnmatchedRules">0</div></div>
    </div>

    <h2>Status Breakdown</h2>
    <div class="stats">
      <div class="stat"><div class="label">Open (failed)</div><div class="value" id="bFailed">0</div></div>
      <div class="stat"><div class="label">Not a Finding (passed)</div><div class="value" id="bPassed">0</div></div>
      <div class="stat"><div class="label">Not Applicable (skipped)</div><div class="value" id="bSkipped">0</div></div>
      <div class="stat"><div class="label">Error</div><div class="value" id="bError">0</div></div>
      <div class="stat"><div class="label">No Results</div><div class="value" id="bNoResults">0</div></div>
    </div>

    <div id="rWarnings"></div>

    <details id="unmatchedHdfDetails">
      <summary>Unmatched HDF Controls (<span id="rUnmatchedHdfCount">0</span>)</summary>
      <ul id="rUnmatchedHdfList"></ul>
    </details>
    <details id="unmatchedRulesDetails">
      <summary>Unmatched Checklist Rules (<span id="rUnmatchedRulesCount">0</span>)</summary>
      <ul id="rUnmatchedRulesList"></ul>
    </details>

    <div class="actions">
      <button class="secondary" id="btnClose">Close</button>
      <button id="btnDownload">Download Import Report</button>
    </div>
  </div>

  <script nonce="${t}">
    (function() {
      const vscode = acquireVsCodeApi();
      let lastSummary = null;
      let lastChecklistTitle = '';

      const previewView = document.getElementById('viewPreview');
      const summaryView = document.getElementById('viewSummary');

      function show(view) {
        previewView.classList.add('hidden');
        summaryView.classList.add('hidden');
        view.classList.remove('hidden');
      }

      function statusLabel(s) {
        return ({
          open: 'Open',
          not_a_finding: 'Not a Finding',
          not_reviewed: 'Not Reviewed',
          not_applicable: 'Not Applicable',
        })[s] || s;
      }

      function renderPreview(summary, profile, checklistTitle, options) {
        document.getElementById('pProfile').textContent = profile.name || '';
        document.getElementById('pVersion').textContent = profile.version || '\u2014';
        document.getElementById('pHost').textContent = profile.hostName || '\u2014';
        document.getElementById('pInspec').textContent = profile.inspecVersion || '\u2014';
        document.getElementById('pChecklist').textContent = checklistTitle || '\u2014';

        document.getElementById('sTotal').textContent = summary.totalControls;
        document.getElementById('sMatched').textContent = summary.matchedRules;
        document.getElementById('sUnmatchedHdf').textContent = summary.unmatchedControls;
        document.getElementById('sUnmatchedRules').textContent = summary.unmatchedRules;

        document.getElementById('optOverwrite').checked = !!options.overwriteExistingStatus;
        document.getElementById('optPreserve').checked = options.preserveExistingFindingDetails !== false;
        document.getElementById('optTarget').checked = options.updateTargetData !== false;

        const body = document.getElementById('changesBody');
        body.innerHTML = '';
        const rows = summary.appliedChanges.slice(0, 500);
        for (const ch of rows) {
          const tr = document.createElement('tr');
          tr.innerHTML = [
            '<td>', escapeHtml(ch.ruleVersion || ''), '</td>',
            '<td>', escapeHtml(ch.groupId || ''), '</td>',
            '<td><span class="badge ', ch.oldStatus, '">', statusLabel(ch.oldStatus), '</span></td>',
            '<td><span class="badge ', ch.newStatus, '">', statusLabel(ch.newStatus), '</span></td>',
            '<td>', ch.matchedBy, '</td>',
          ].join('');
          body.appendChild(tr);
        }
        if (summary.appliedChanges.length > rows.length) {
          const tr = document.createElement('tr');
          tr.innerHTML = '<td colspan="5"><em>\u2026 and ' + (summary.appliedChanges.length - rows.length) + ' more</em></td>';
          body.appendChild(tr);
        }

        const warnBlock = document.getElementById('warningsBlock');
        warnBlock.innerHTML = '';
        for (const w of summary.warnings || []) {
          const div = document.createElement('div');
          div.className = 'warn';
          div.textContent = w;
          warnBlock.appendChild(div);
        }

        show(previewView);
      }

      function renderSummary(summary, profile, checklistTitle) {
        lastSummary = summary;
        lastChecklistTitle = checklistTitle || '';

        document.getElementById('rProfile').textContent = profile?.name || summary.profileName || '';
        document.getElementById('rChecklist').textContent = checklistTitle || '';

        document.getElementById('rTotal').textContent = summary.totalControls;
        document.getElementById('rMatched').textContent = summary.matchedRules;
        document.getElementById('rUnmatchedHdf').textContent = summary.unmatchedControls;
        document.getElementById('rUnmatchedRules').textContent = summary.unmatchedRules;

        document.getElementById('bFailed').textContent = summary.statusBreakdown.failed;
        document.getElementById('bPassed').textContent = summary.statusBreakdown.passed;
        document.getElementById('bSkipped').textContent = summary.statusBreakdown.skipped;
        document.getElementById('bError').textContent = summary.statusBreakdown.error;
        document.getElementById('bNoResults').textContent = summary.statusBreakdown.noResults;

        const warnBlock = document.getElementById('rWarnings');
        warnBlock.innerHTML = '';
        for (const w of summary.warnings || []) {
          const div = document.createElement('div');
          div.className = 'warn';
          div.textContent = w;
          warnBlock.appendChild(div);
        }

        document.getElementById('rUnmatchedHdfCount').textContent = summary.unmatchedControls;
        document.getElementById('rUnmatchedRulesCount').textContent = summary.unmatchedRules;

        fillList('rUnmatchedHdfList', summary.unmatchedControlIds || []);
        fillList('rUnmatchedRulesList', summary.unmatchedRuleVersions || []);

        show(summaryView);
      }

      function fillList(id, items) {
        const ul = document.getElementById(id);
        ul.innerHTML = '';
        const shown = items.slice(0, 500);
        for (const item of shown) {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        }
        if (items.length > shown.length) {
          const li = document.createElement('li');
          li.innerHTML = '<em>\u2026 and ' + (items.length - shown.length) + ' more</em>';
          ul.appendChild(li);
        }
      }

      function escapeHtml(s) {
        return String(s).replace(/[&<>"]/g, c => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
        }[c]));
      }

      function currentOptions() {
        return {
          overwriteExistingStatus: document.getElementById('optOverwrite').checked,
          preserveExistingFindingDetails: document.getElementById('optPreserve').checked,
          updateTargetData: document.getElementById('optTarget').checked,
        };
      }

      for (const id of ['optOverwrite', 'optPreserve', 'optTarget']) {
        document.getElementById(id).addEventListener('change', () => {
          vscode.postMessage({ type: 'reproject', options: currentOptions() });
        });
      }

      document.getElementById('btnCancel').addEventListener('click', () => {
        vscode.postMessage({ type: 'cancel' });
      });
      document.getElementById('btnApply').addEventListener('click', () => {
        vscode.postMessage({ type: 'apply', options: currentOptions() });
      });
      document.getElementById('btnClose').addEventListener('click', () => {
        vscode.postMessage({ type: 'cancel' });
      });
      document.getElementById('btnDownload').addEventListener('click', () => {
        vscode.postMessage({
          type: 'downloadReport',
          summary: lastSummary,
          checklistTitle: lastChecklistTitle,
        });
      });

      window.addEventListener('message', (event) => {
        const msg = event.data;
        if (msg.type === 'showPreview') {
          renderPreview(msg.summary, msg.profile, msg.checklistTitle, msg.options);
        } else if (msg.type === 'updatePreview') {
          renderPreview(msg.summary, lastProfile(), document.getElementById('pChecklist').textContent, msg.options);
        } else if (msg.type === 'showSummary') {
          renderSummary(msg.summary, msg.profile, msg.checklistTitle);
        }
      });

      function lastProfile() {
        return {
          name: document.getElementById('pProfile').textContent,
          version: document.getElementById('pVersion').textContent,
          hostName: document.getElementById('pHost').textContent,
          inspecVersion: document.getElementById('pInspec').textContent,
        };
      }

      vscode.postMessage({ type: 'ready' });
    }());
  </script>
</body>
</html>`}function is(t){t.subscriptions.push(ot.register(t)),t.subscriptions.push(z.commands.registerCommand("stigViewer.openFile",async()=>{let e=await z.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});e?.[0]&&await z.commands.executeCommand("vscode.openWith",e[0],"stigViewer.cklbEditor")})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importXccdf",async e=>{if(!e){let i=await z.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!i?.[0])return;e=i[0]}try{await Wn(e)}catch(i){z.window.showErrorMessage(`XCCDF import failed: ${i}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importCkl",async e=>{if(!e){let i=await z.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!i?.[0])return;e=i[0]}try{await Yn(e)}catch(i){z.window.showErrorMessage(`CKL import failed: ${i}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await ir(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`SCAP import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.mergeFindings",async()=>{try{await Jn(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Merge failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.dashboard",async()=>{try{await Be.show(t)}catch(e){z.window.showErrorMessage(`Dashboard failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.diffChecklists",async()=>{try{await $e.show(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Diff failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.scanRepo",async()=>{try{await lr(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Repo scan failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importSarif",async()=>{try{await ur(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`SARIF import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importAudit",async()=>{try{await hr(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Dependency audit import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importCsv",async()=>{try{await yr(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`CSV import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.exportEvidence",async()=>{try{await wr(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Evidence package failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.nistCrosswalk",async()=>{try{await ze.show(ot.activeDocumentUri)}catch(e){z.window.showErrorMessage(`NIST crosswalk failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importHdf",async e=>{try{await Lr(t,e)}catch(i){z.window.showErrorMessage(`HDF import failed: ${i}`)}}))}function ns(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
