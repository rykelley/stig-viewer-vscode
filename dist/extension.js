"use strict";var Dr=Object.create;var ce=Object.defineProperty;var kr=Object.getOwnPropertyDescriptor;var Nr=Object.getOwnPropertyNames;var Or=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty;var B=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Mr=(t,e)=>{for(var i in e)ce(t,i,{get:e[i],enumerable:!0})},yi=(t,e,i,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Nr(e))!Pr.call(t,n)&&n!==i&&ce(t,n,{get:()=>e[n],enumerable:!(l=kr(e,n))||l.enumerable});return t};var $=(t,e,i)=>(i=t!=null?Dr(Or(t)):{},yi(e||!t||!t.__esModule?ce(i,"default",{value:t,enumerable:!0}):i,t)),Rr=t=>yi(ce({},"__esModule",{value:!0}),t);var fe=B(Xe=>{(function(){Xe.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(Xe)});var vt=B((Ii,xt)=>{(function(){var t,e,i,l,n,o,c,u=[].slice,d={}.hasOwnProperty;t=function(){var f,g,y,w,h,I;if(I=arguments[0],h=2<=arguments.length?u.call(arguments,1):[],n(Object.assign))Object.assign.apply(null,arguments);else for(f=0,y=h.length;f<y;f++)if(w=h[f],w!=null)for(g in w)d.call(w,g)&&(I[g]=w[g]);return I},n=function(f){return!!f&&Object.prototype.toString.call(f)==="[object Function]"},o=function(f){var g;return!!f&&((g=typeof f)=="function"||g==="object")},i=function(f){return n(Array.isArray)?Array.isArray(f):Object.prototype.toString.call(f)==="[object Array]"},l=function(f){var g;if(i(f))return!f.length;for(g in f)if(d.call(f,g))return!1;return!0},c=function(f){var g,y;return o(f)&&(y=Object.getPrototypeOf(f))&&(g=y.constructor)&&typeof g=="function"&&g instanceof g&&Function.prototype.toString.call(g)===Function.prototype.toString.call(Object)},e=function(f){return n(f.valueOf)?f.valueOf():f},xt.exports.assign=t,xt.exports.isFunction=n,xt.exports.isObject=o,xt.exports.isArray=i,xt.exports.isEmpty=l,xt.exports.isPlainObject=c,xt.exports.getValue=e}).call(Ii)});var Ge=B((Ti,xi)=>{(function(){var t;xi.exports=t=(function(){function e(){}return e.prototype.hasFeature=function(i,l){return!0},e.prototype.createDocumentType=function(i,l,n){throw new Error("This DOM method is not implemented.")},e.prototype.createDocument=function(i,l,n){throw new Error("This DOM method is not implemented.")},e.prototype.createHTMLDocument=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.getFeature=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(Ti)});var Ei=B((_i,Si)=>{(function(){var t;Si.exports=t=(function(){function e(){}return e.prototype.handleError=function(i){throw new Error(i)},e})()}).call(_i)});var ki=B((Ai,Di)=>{(function(){var t;Di.exports=t=(function(){function e(i){this.arr=i||[]}return Object.defineProperty(e.prototype,"length",{get:function(){return this.arr.length}}),e.prototype.item=function(i){return this.arr[i]||null},e.prototype.contains=function(i){return this.arr.indexOf(i)!==-1},e})()}).call(Ai)});var Pi=B((Ni,Oi)=>{(function(){var t,e,i;e=Ei(),i=ki(),Oi.exports=t=(function(){function l(){var n;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=n=Object.create(this.defaultParams)}return Object.defineProperty(l.prototype,"parameterNames",{get:function(){return new i(Object.keys(this.defaultParams))}}),l.prototype.getParameter=function(n){return this.params.hasOwnProperty(n)?this.params[n]:null},l.prototype.canSetParameter=function(n,o){return!0},l.prototype.setParameter=function(n,o){return o!=null?this.params[n]=o:delete this.params[n]},l})()}).call(Ni)});var Y=B((Mi,Ri)=>{(function(){Ri.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(Mi)});var We=B((Li,Fi)=>{(function(){var t,e,i;t=Y(),i=dt(),Fi.exports=e=(function(){function l(n,o,c){if(this.parent=n,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),o==null)throw new Error("Missing attribute name. "+this.debugInfo(o));this.name=this.stringify.name(o),this.value=this.stringify.attValue(c),this.type=t.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(l.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(l.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(l.prototype,"textContent",{get:function(){return this.value},set:function(n){return this.value=n||""}}),Object.defineProperty(l.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(l.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(l.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(l.prototype,"specified",{get:function(){return!0}}),l.prototype.clone=function(){return Object.create(this)},l.prototype.toString=function(n){return this.options.writer.attribute(this,this.options.writer.filterOptions(n))},l.prototype.debugInfo=function(n){return n=n||this.name,n==null?"parent: <"+this.parent.name+">":"attribute: {"+n+"}, parent: <"+this.parent.name+">"},l.prototype.isEqualNode=function(n){return!(n.namespaceURI!==this.namespaceURI||n.prefix!==this.prefix||n.localName!==this.localName||n.value!==this.value)},l})()}).call(Li)});var he=B((Bi,$i)=>{(function(){var t;$i.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(i){return this.nodes[i]},e.prototype.setNamedItem=function(i){var l;return l=this.nodes[i.nodeName],this.nodes[i.nodeName]=i,l||null},e.prototype.removeNamedItem=function(i){var l;return l=this.nodes[i],delete this.nodes[i],l||null},e.prototype.item=function(i){return this.nodes[Object.keys(this.nodes)[i]]||null},e.prototype.getNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(Bi)});var me=B((Ui,qi)=>{(function(){var t,e,i,l,n,o,c,u,d,f=function(y,w){for(var h in w)g.call(w,h)&&(y[h]=w[h]);function I(){this.constructor=y}return I.prototype=w.prototype,y.prototype=new I,y.__super__=w.prototype,y},g={}.hasOwnProperty;d=vt(),u=d.isObject,c=d.isFunction,o=d.getValue,n=dt(),t=Y(),e=We(),l=he(),qi.exports=i=(function(y){f(w,y);function w(h,I,T){var A,D,x,v;if(w.__super__.constructor.call(this,h),I==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(I),this.type=t.Element,this.attribs={},this.schemaTypeInfo=null,T!=null&&this.attribute(T),h.type===t.Document&&(this.isRoot=!0,this.documentObject=h,h.rootObject=this,h.children)){for(v=h.children,D=0,x=v.length;D<x;D++)if(A=v[D],A.type===t.DocType){A.name=this.name;break}}}return Object.defineProperty(w.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(w.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(w.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new l(this.attribs)),this.attributeMap}}),w.prototype.clone=function(){var h,I,T,A;T=Object.create(this),T.isRoot&&(T.documentObject=null),T.attribs={},A=this.attribs;for(I in A)g.call(A,I)&&(h=A[I],T.attribs[I]=h.clone());return T.children=[],this.children.forEach(function(D){var x;return x=D.clone(),x.parent=T,T.children.push(x)}),T},w.prototype.attribute=function(h,I){var T,A;if(h!=null&&(h=o(h)),u(h))for(T in h)g.call(h,T)&&(A=h[T],this.attribute(T,A));else c(I)&&(I=I.apply()),this.options.keepNullAttributes&&I==null?this.attribs[h]=new e(this,h,""):I!=null&&(this.attribs[h]=new e(this,h,I));return this},w.prototype.removeAttribute=function(h){var I,T,A;if(h==null)throw new Error("Missing attribute name. "+this.debugInfo());if(h=o(h),Array.isArray(h))for(T=0,A=h.length;T<A;T++)I=h[T],delete this.attribs[I];else delete this.attribs[h];return this},w.prototype.toString=function(h){return this.options.writer.element(this,this.options.writer.filterOptions(h))},w.prototype.att=function(h,I){return this.attribute(h,I)},w.prototype.a=function(h,I){return this.attribute(h,I)},w.prototype.getAttribute=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h].value:null},w.prototype.setAttribute=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNode=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h]:null},w.prototype.setAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNS=function(h,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNodeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNodeNS=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.hasAttribute=function(h){return this.attribs.hasOwnProperty(h)},w.prototype.hasAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttribute=function(h,I){return this.attribs.hasOwnProperty(h)?this.attribs[h].isId:I},w.prototype.setIdAttributeNS=function(h,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttributeNode=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByClassName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.isEqualNode=function(h){var I,T,A;if(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.namespaceURI!==this.namespaceURI||h.prefix!==this.prefix||h.localName!==this.localName||h.attribs.length!==this.attribs.length)return!1;for(I=T=0,A=this.attribs.length-1;0<=A?T<=A:T>=A;I=0<=A?++T:--T)if(!this.attribs[I].isEqualNode(h.attribs[I]))return!1;return!0},w})(n)}).call(Ui)});var Wt=B((Vi,zi)=>{(function(){var t,e,i=function(n,o){for(var c in o)l.call(o,c)&&(n[c]=o[c]);function u(){this.constructor=n}return u.prototype=o.prototype,n.prototype=new u,n.__super__=o.prototype,n},l={}.hasOwnProperty;e=dt(),zi.exports=t=(function(n){i(o,n);function o(c){o.__super__.constructor.call(this,c),this.value=""}return Object.defineProperty(o.prototype,"data",{get:function(){return this.value},set:function(c){return this.value=c||""}}),Object.defineProperty(o.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(o.prototype,"textContent",{get:function(){return this.value},set:function(c){return this.value=c||""}}),o.prototype.clone=function(){return Object.create(this)},o.prototype.substringData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.appendData=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.insertData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.deleteData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.replaceData=function(c,u,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isEqualNode=function(c){return!(!o.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.data!==this.data)},o})(e)}).call(Vi)});var ge=B((ji,Hi)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;t=Y(),i=Wt(),Hi.exports=e=(function(o){l(c,o);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=t.CData,this.value=this.stringify.cdata(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.cdata(this,this.options.writer.filterOptions(u))},c})(i)}).call(ji)});var ye=B((Xi,Gi)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;t=Y(),e=Wt(),Gi.exports=i=(function(o){l(c,o);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=t.Comment,this.value=this.stringify.comment(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.comment(this,this.options.writer.filterOptions(u))},c})(e)}).call(Xi)});var ve=B((Wi,Ki)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)o.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},o={}.hasOwnProperty;l=vt().isObject,i=dt(),t=Y(),Ki.exports=e=(function(c){n(u,c);function u(d,f,g,y){var w;u.__super__.constructor.call(this,d),l(f)&&(w=f,f=w.version,g=w.encoding,y=w.standalone),f||(f="1.0"),this.type=t.Declaration,this.version=this.stringify.xmlVersion(f),g!=null&&(this.encoding=this.stringify.xmlEncoding(g)),y!=null&&(this.standalone=this.stringify.xmlStandalone(y))}return u.prototype.toString=function(d){return this.options.writer.declaration(this,this.options.writer.filterOptions(d))},u})(i)}).call(Wi)});var we=B((Yi,Ji)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;i=dt(),t=Y(),Ji.exports=e=(function(o){l(c,o);function c(u,d,f,g,y,w){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(f==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(d));if(!g)throw new Error("Missing DTD attribute type. "+this.debugInfo(d));if(!y)throw new Error("Missing DTD attribute default. "+this.debugInfo(d));if(y.indexOf("#")!==0&&(y="#"+y),!y.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(d));if(w&&!y.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(d));this.elementName=this.stringify.name(d),this.type=t.AttributeDeclaration,this.attributeName=this.stringify.name(f),this.attributeType=this.stringify.dtdAttType(g),w&&(this.defaultValue=this.stringify.dtdAttDefault(w)),this.defaultValueType=y}return c.prototype.toString=function(u){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(u))},c})(i)}).call(Yi)});var be=B((Qi,Zi)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)o.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},o={}.hasOwnProperty;l=vt().isObject,i=dt(),t=Y(),Zi.exports=e=(function(c){n(u,c);function u(d,f,g,y){if(u.__super__.constructor.call(this,d),g==null)throw new Error("Missing DTD entity name. "+this.debugInfo(g));if(y==null)throw new Error("Missing DTD entity value. "+this.debugInfo(g));if(this.pe=!!f,this.name=this.stringify.name(g),this.type=t.EntityDeclaration,!l(y))this.value=this.stringify.dtdEntityValue(y),this.internal=!0;else{if(!y.pubID&&!y.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(g));if(y.pubID&&!y.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(g));if(this.internal=!1,y.pubID!=null&&(this.pubID=this.stringify.dtdPubID(y.pubID)),y.sysID!=null&&(this.sysID=this.stringify.dtdSysID(y.sysID)),y.nData!=null&&(this.nData=this.stringify.dtdNData(y.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(g))}}return Object.defineProperty(u.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(u.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(u.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(u.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(u.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(u.prototype,"xmlVersion",{get:function(){return null}}),u.prototype.toString=function(d){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(d))},u})(i)}).call(Qi)});var Ce=B((tn,en)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;i=dt(),t=Y(),en.exports=e=(function(o){l(c,o);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());f||(f="(#PCDATA)"),Array.isArray(f)&&(f="("+f.join(",")+")"),this.name=this.stringify.name(d),this.type=t.ElementDeclaration,this.value=this.stringify.dtdElementValue(f)}return c.prototype.toString=function(u){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(u))},c})(i)}).call(tn)});var Ie=B((nn,rn)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;i=dt(),t=Y(),rn.exports=e=(function(o){l(c,o);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD notation name. "+this.debugInfo(d));if(!f.pubID&&!f.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(d));this.name=this.stringify.name(d),this.type=t.NotationDeclaration,f.pubID!=null&&(this.pubID=this.stringify.dtdPubID(f.pubID)),f.sysID!=null&&(this.sysID=this.stringify.dtdSysID(f.sysID))}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),c.prototype.toString=function(u){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(u))},c})(i)}).call(nn)});var Te=B((on,sn)=>{(function(){var t,e,i,l,n,o,c,u,d,f=function(y,w){for(var h in w)g.call(w,h)&&(y[h]=w[h]);function I(){this.constructor=y}return I.prototype=w.prototype,y.prototype=new I,y.__super__=w.prototype,y},g={}.hasOwnProperty;d=vt().isObject,u=dt(),t=Y(),e=we(),l=be(),i=Ce(),n=Ie(),c=he(),sn.exports=o=(function(y){f(w,y);function w(h,I,T){var A,D,x,v,r,a;if(w.__super__.constructor.call(this,h),this.type=t.DocType,h.children){for(v=h.children,D=0,x=v.length;D<x;D++)if(A=v[D],A.type===t.Element){this.name=A.name;break}}this.documentObject=h,d(I)&&(r=I,I=r.pubID,T=r.sysID),T==null&&(a=[I,T],T=a[0],I=a[1]),I!=null&&(this.pubID=this.stringify.dtdPubID(I)),T!=null&&(this.sysID=this.stringify.dtdSysID(T))}return Object.defineProperty(w.prototype,"entities",{get:function(){var h,I,T,A,D;for(A={},D=this.children,I=0,T=D.length;I<T;I++)h=D[I],h.type===t.EntityDeclaration&&!h.pe&&(A[h.name]=h);return new c(A)}}),Object.defineProperty(w.prototype,"notations",{get:function(){var h,I,T,A,D;for(A={},D=this.children,I=0,T=D.length;I<T;I++)h=D[I],h.type===t.NotationDeclaration&&(A[h.name]=h);return new c(A)}}),Object.defineProperty(w.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(w.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(w.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),w.prototype.element=function(h,I){var T;return T=new i(this,h,I),this.children.push(T),this},w.prototype.attList=function(h,I,T,A,D){var x;return x=new e(this,h,I,T,A,D),this.children.push(x),this},w.prototype.entity=function(h,I){var T;return T=new l(this,!1,h,I),this.children.push(T),this},w.prototype.pEntity=function(h,I){var T;return T=new l(this,!0,h,I),this.children.push(T),this},w.prototype.notation=function(h,I){var T;return T=new n(this,h,I),this.children.push(T),this},w.prototype.toString=function(h){return this.options.writer.docType(this,this.options.writer.filterOptions(h))},w.prototype.ele=function(h,I){return this.element(h,I)},w.prototype.att=function(h,I,T,A,D){return this.attList(h,I,T,A,D)},w.prototype.ent=function(h,I){return this.entity(h,I)},w.prototype.pent=function(h,I){return this.pEntity(h,I)},w.prototype.not=function(h,I){return this.notation(h,I)},w.prototype.up=function(){return this.root()||this.documentObject},w.prototype.isEqualNode=function(h){return!(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.name!==this.name||h.publicId!==this.publicId||h.systemId!==this.systemId)},w})(u)}).call(on)});var xe=B((an,cn)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;t=Y(),e=dt(),cn.exports=i=(function(o){l(c,o);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=t.Raw,this.value=this.stringify.raw(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.raw(this,this.options.writer.filterOptions(u))},c})(e)}).call(an)});var _e=B((ln,dn)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;t=Y(),e=Wt(),dn.exports=i=(function(o){l(c,o);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=t.Text,this.value=this.stringify.text(d)}return Object.defineProperty(c.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(c.prototype,"wholeText",{get:function(){var u,d,f;for(f="",d=this.previousSibling;d;)f=d.data+f,d=d.previousSibling;for(f+=this.data,u=this.nextSibling;u;)f=f+u.data,u=u.nextSibling;return f}}),c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.text(this,this.options.writer.filterOptions(u))},c.prototype.splitText=function(u){throw new Error("This DOM method is not implemented."+this.debugInfo())},c.prototype.replaceWholeText=function(u){throw new Error("This DOM method is not implemented."+this.debugInfo())},c})(e)}).call(ln)});var Se=B((un,pn)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;t=Y(),e=Wt(),pn.exports=i=(function(o){l(c,o);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=t.ProcessingInstruction,this.target=this.stringify.insTarget(d),this.name=this.target,f&&(this.value=this.stringify.insValue(f))}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(u))},c.prototype.isEqualNode=function(u){return!(!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(u)||u.target!==this.target)},c})(e)}).call(un)});var Ke=B((fn,hn)=>{(function(){var t,e,i,l=function(o,c){for(var u in c)n.call(c,u)&&(o[u]=c[u]);function d(){this.constructor=o}return d.prototype=c.prototype,o.prototype=new d,o.__super__=c.prototype,o},n={}.hasOwnProperty;i=dt(),t=Y(),hn.exports=e=(function(o){l(c,o);function c(u){c.__super__.constructor.call(this,u),this.type=t.Dummy}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return""},c})(i)}).call(fn)});var yn=B((mn,gn)=>{(function(){var t;gn.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return this.nodes.length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.item=function(i){return this.nodes[i]||null},e})()}).call(mn)});var bn=B((vn,wn)=>{(function(){wn.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(vn)});var dt=B((Cn,In)=>{(function(){var t,e,i,l,n,o,c,u,d,f,g,y,w,h,I,T,A,D,x,v={}.hasOwnProperty;x=vt(),D=x.isObject,A=x.isFunction,T=x.isEmpty,I=x.getValue,u=null,i=null,l=null,n=null,o=null,w=null,h=null,y=null,c=null,e=null,g=null,d=null,t=null,In.exports=f=(function(){function r(a){this.parent=a,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,u||(u=me(),i=ge(),l=ye(),n=ve(),o=Te(),w=xe(),h=_e(),y=Se(),c=Ke(),e=Y(),g=yn(),d=he(),t=bn())}return Object.defineProperty(r.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(r.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(r.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(r.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(r.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new g(this.children)),this.childNodeList}}),Object.defineProperty(r.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(r.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(r.prototype,"previousSibling",{get:function(){var a;return a=this.parent.children.indexOf(this),this.parent.children[a-1]||null}}),Object.defineProperty(r.prototype,"nextSibling",{get:function(){var a;return a=this.parent.children.indexOf(this),this.parent.children[a+1]||null}}),Object.defineProperty(r.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(r.prototype,"textContent",{get:function(){var a,C,E,_,m;if(this.nodeType===e.Element||this.nodeType===e.DocumentFragment){for(m="",_=this.children,C=0,E=_.length;C<E;C++)a=_[C],a.textContent&&(m+=a.textContent);return m}else return null},set:function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),r.prototype.setParent=function(a){var C,E,_,m,b;for(this.parent=a,a&&(this.options=a.options,this.stringify=a.stringify),m=this.children,b=[],E=0,_=m.length;E<_;E++)C=m[E],b.push(C.setParent(this));return b},r.prototype.element=function(a,C,E){var _,m,b,k,O,P,L,R,M,F,U;if(P=null,C===null&&E==null&&(M=[{},null],C=M[0],E=M[1]),C==null&&(C={}),C=I(C),D(C)||(F=[C,E],E=F[0],C=F[1]),a!=null&&(a=I(a)),Array.isArray(a))for(b=0,L=a.length;b<L;b++)m=a[b],P=this.element(m);else if(A(a))P=this.element(a.apply());else if(D(a)){for(O in a)if(v.call(a,O))if(U=a[O],A(U)&&(U=U.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)P=this.attribute(O.substr(this.stringify.convertAttKey.length),U);else if(!this.options.separateArrayItems&&Array.isArray(U)&&T(U))P=this.dummy();else if(D(U)&&T(U))P=this.element(O);else if(!this.options.keepNullNodes&&U==null)P=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray(U))for(k=0,R=U.length;k<R;k++)m=U[k],_={},_[O]=m,P=this.element(_);else D(U)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?P=this.element(U):(P=this.element(O),P.element(U)):P=this.element(O,U)}else!this.options.keepNullNodes&&E===null?P=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&a.indexOf(this.stringify.convertTextKey)===0?P=this.text(E):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&a.indexOf(this.stringify.convertCDataKey)===0?P=this.cdata(E):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&a.indexOf(this.stringify.convertCommentKey)===0?P=this.comment(E):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&a.indexOf(this.stringify.convertRawKey)===0?P=this.raw(E):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&a.indexOf(this.stringify.convertPIKey)===0?P=this.instruction(a.substr(this.stringify.convertPIKey.length),E):P=this.node(a,C,E);if(P==null)throw new Error("Could not create any elements with: "+a+". "+this.debugInfo());return P},r.prototype.insertBefore=function(a,C,E){var _,m,b,k,O;if(a?.type)return b=a,k=C,b.setParent(this),k?(m=children.indexOf(k),O=children.splice(m),children.push(b),Array.prototype.push.apply(children,O)):children.push(b),b;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(a));return m=this.parent.children.indexOf(this),O=this.parent.children.splice(m),_=this.parent.element(a,C,E),Array.prototype.push.apply(this.parent.children,O),_},r.prototype.insertAfter=function(a,C,E){var _,m,b;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(a));return m=this.parent.children.indexOf(this),b=this.parent.children.splice(m+1),_=this.parent.element(a,C,E),Array.prototype.push.apply(this.parent.children,b),_},r.prototype.remove=function(){var a,C;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return a=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[a,a-a+1].concat(C=[])),this.parent},r.prototype.node=function(a,C,E){var _,m;return a!=null&&(a=I(a)),C||(C={}),C=I(C),D(C)||(m=[C,E],E=m[0],C=m[1]),_=new u(this,a,C),E!=null&&_.text(E),this.children.push(_),_},r.prototype.text=function(a){var C;return D(a)&&this.element(a),C=new h(this,a),this.children.push(C),this},r.prototype.cdata=function(a){var C;return C=new i(this,a),this.children.push(C),this},r.prototype.comment=function(a){var C;return C=new l(this,a),this.children.push(C),this},r.prototype.commentBefore=function(a){var C,E,_;return E=this.parent.children.indexOf(this),_=this.parent.children.splice(E),C=this.parent.comment(a),Array.prototype.push.apply(this.parent.children,_),this},r.prototype.commentAfter=function(a){var C,E,_;return E=this.parent.children.indexOf(this),_=this.parent.children.splice(E+1),C=this.parent.comment(a),Array.prototype.push.apply(this.parent.children,_),this},r.prototype.raw=function(a){var C;return C=new w(this,a),this.children.push(C),this},r.prototype.dummy=function(){var a;return a=new c(this),a},r.prototype.instruction=function(a,C){var E,_,m,b,k;if(a!=null&&(a=I(a)),C!=null&&(C=I(C)),Array.isArray(a))for(b=0,k=a.length;b<k;b++)E=a[b],this.instruction(E);else if(D(a))for(E in a)v.call(a,E)&&(_=a[E],this.instruction(E,_));else A(C)&&(C=C.apply()),m=new y(this,a,C),this.children.push(m);return this},r.prototype.instructionBefore=function(a,C){var E,_,m;return _=this.parent.children.indexOf(this),m=this.parent.children.splice(_),E=this.parent.instruction(a,C),Array.prototype.push.apply(this.parent.children,m),this},r.prototype.instructionAfter=function(a,C){var E,_,m;return _=this.parent.children.indexOf(this),m=this.parent.children.splice(_+1),E=this.parent.instruction(a,C),Array.prototype.push.apply(this.parent.children,m),this},r.prototype.declaration=function(a,C,E){var _,m;return _=this.document(),m=new n(_,a,C,E),_.children.length===0?_.children.unshift(m):_.children[0].type===e.Declaration?_.children[0]=m:_.children.unshift(m),_.root()||_},r.prototype.dtd=function(a,C){var E,_,m,b,k,O,P,L,R,M;for(_=this.document(),m=new o(_,a,C),R=_.children,b=k=0,P=R.length;k<P;b=++k)if(E=R[b],E.type===e.DocType)return _.children[b]=m,m;for(M=_.children,b=O=0,L=M.length;O<L;b=++O)if(E=M[b],E.isRoot)return _.children.splice(b,0,m),m;return _.children.push(m),m},r.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},r.prototype.root=function(){var a;for(a=this;a;){if(a.type===e.Document)return a.rootObject;if(a.isRoot)return a;a=a.parent}},r.prototype.document=function(){var a;for(a=this;a;){if(a.type===e.Document)return a;a=a.parent}},r.prototype.end=function(a){return this.document().end(a)},r.prototype.prev=function(){var a;if(a=this.parent.children.indexOf(this),a<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[a-1]},r.prototype.next=function(){var a;if(a=this.parent.children.indexOf(this),a===-1||a===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[a+1]},r.prototype.importDocument=function(a){var C;return C=a.root().clone(),C.parent=this,C.isRoot=!1,this.children.push(C),this},r.prototype.debugInfo=function(a){var C,E;return a=a||this.name,a==null&&!((C=this.parent)!=null&&C.name)?"":a==null?"parent: <"+this.parent.name+">":(E=this.parent)!=null&&E.name?"node: <"+a+">, parent: <"+this.parent.name+">":"node: <"+a+">"},r.prototype.ele=function(a,C,E){return this.element(a,C,E)},r.prototype.nod=function(a,C,E){return this.node(a,C,E)},r.prototype.txt=function(a){return this.text(a)},r.prototype.dat=function(a){return this.cdata(a)},r.prototype.com=function(a){return this.comment(a)},r.prototype.ins=function(a,C){return this.instruction(a,C)},r.prototype.doc=function(){return this.document()},r.prototype.dec=function(a,C,E){return this.declaration(a,C,E)},r.prototype.e=function(a,C,E){return this.element(a,C,E)},r.prototype.n=function(a,C,E){return this.node(a,C,E)},r.prototype.t=function(a){return this.text(a)},r.prototype.d=function(a){return this.cdata(a)},r.prototype.c=function(a){return this.comment(a)},r.prototype.r=function(a){return this.raw(a)},r.prototype.i=function(a,C){return this.instruction(a,C)},r.prototype.u=function(){return this.up()},r.prototype.importXMLBuilder=function(a){return this.importDocument(a)},r.prototype.replaceChild=function(a,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.removeChild=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.appendChild=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.hasChildNodes=function(){return this.children.length!==0},r.prototype.cloneNode=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isSupported=function(a,C){return!0},r.prototype.hasAttributes=function(){return this.attribs.length!==0},r.prototype.compareDocumentPosition=function(a){var C,E;return C=this,C===a?0:this.document()!==a.document()?(E=t.Disconnected|t.ImplementationSpecific,Math.random()<.5?E|=t.Preceding:E|=t.Following,E):C.isAncestor(a)?t.Contains|t.Preceding:C.isDescendant(a)?t.Contains|t.Following:C.isPreceding(a)?t.Preceding:t.Following},r.prototype.isSameNode=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.lookupPrefix=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isDefaultNamespace=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.lookupNamespaceURI=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isEqualNode=function(a){var C,E,_;if(a.nodeType!==this.nodeType||a.children.length!==this.children.length)return!1;for(C=E=0,_=this.children.length-1;0<=_?E<=_:E>=_;C=0<=_?++E:--E)if(!this.children[C].isEqualNode(a.children[C]))return!1;return!0},r.prototype.getFeature=function(a,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.setUserData=function(a,C,E){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getUserData=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.contains=function(a){return a?a===this||this.isDescendant(a):!1},r.prototype.isDescendant=function(a){var C,E,_,m,b;for(b=this.children,_=0,m=b.length;_<m;_++)if(C=b[_],a===C||(E=C.isDescendant(a),E))return!0;return!1},r.prototype.isAncestor=function(a){return a.isDescendant(this)},r.prototype.isPreceding=function(a){var C,E;return C=this.treePosition(a),E=this.treePosition(this),C===-1||E===-1?!1:C<E},r.prototype.isFollowing=function(a){var C,E;return C=this.treePosition(a),E=this.treePosition(this),C===-1||E===-1?!1:C>E},r.prototype.treePosition=function(a){var C,E;return E=0,C=!1,this.foreachTreeNode(this.document(),function(_){if(E++,!C&&_===a)return C=!0}),C?E:-1},r.prototype.foreachTreeNode=function(a,C){var E,_,m,b,k;for(a||(a=this.document()),b=a.children,_=0,m=b.length;_<m;_++){if(E=b[_],k=C(E))return k;if(k=this.foreachTreeNode(E,C),k)return k}},r})()}).call(Cn)});var Ye=B((Tn,xn)=>{(function(){var t,e=function(l,n){return function(){return l.apply(n,arguments)}},i={}.hasOwnProperty;xn.exports=t=(function(){function l(n){this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this);var o,c,u;n||(n={}),this.options=n,this.options.version||(this.options.version="1.0"),c=n.stringify||{};for(o in c)i.call(c,o)&&(u=c[o],this[o]=u)}return l.prototype.name=function(n){return this.options.noValidation?n:this.assertLegalName(""+n||"")},l.prototype.text=function(n){return this.options.noValidation?n:this.assertLegalChar(this.textEscape(""+n||""))},l.prototype.cdata=function(n){return this.options.noValidation?n:(n=""+n||"",n=n.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(n))},l.prototype.comment=function(n){if(this.options.noValidation)return n;if(n=""+n||"",n.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+n);return this.assertLegalChar(n)},l.prototype.raw=function(n){return this.options.noValidation?n:""+n||""},l.prototype.attValue=function(n){return this.options.noValidation?n:this.assertLegalChar(this.attEscape(n=""+n||""))},l.prototype.insTarget=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.insValue=function(n){if(this.options.noValidation)return n;if(n=""+n||"",n.match(/\?>/))throw new Error("Invalid processing instruction value: "+n);return this.assertLegalChar(n)},l.prototype.xmlVersion=function(n){if(this.options.noValidation)return n;if(n=""+n||"",!n.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+n);return n},l.prototype.xmlEncoding=function(n){if(this.options.noValidation)return n;if(n=""+n||"",!n.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+n);return this.assertLegalChar(n)},l.prototype.xmlStandalone=function(n){return this.options.noValidation?n:n?"yes":"no"},l.prototype.dtdPubID=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdSysID=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdElementValue=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdAttType=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdAttDefault=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdEntityValue=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdNData=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.convertAttKey="@",l.prototype.convertPIKey="?",l.prototype.convertTextKey="#text",l.prototype.convertCDataKey="#cdata",l.prototype.convertCommentKey="#comment",l.prototype.convertRawKey="#raw",l.prototype.assertLegalChar=function(n){var o,c;if(this.options.noValidation)return n;if(o="",this.options.version==="1.0"){if(o=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=n.match(o))throw new Error("Invalid character in string: "+n+" at index "+c.index)}else if(this.options.version==="1.1"&&(o=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=n.match(o)))throw new Error("Invalid character in string: "+n+" at index "+c.index);return n},l.prototype.assertLegalName=function(n){var o;if(this.options.noValidation)return n;if(this.assertLegalChar(n),o=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!n.match(o))throw new Error("Invalid character in name");return n},l.prototype.textEscape=function(n){var o;return this.options.noValidation?n:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,n.replace(o,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},l.prototype.attEscape=function(n){var o;return this.options.noValidation?n:(o=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,n.replace(o,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},l})()}).call(Tn)});var Kt=B((_n,Sn)=>{(function(){Sn.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(_n)});var Je=B((En,An)=>{(function(){var t,e,i,l,n,o,c,u,d,f,g,y,w,h,I,T,A,D={}.hasOwnProperty;A=vt().assign,t=Y(),d=ve(),f=Te(),i=ge(),l=ye(),y=me(),h=xe(),I=_e(),w=Se(),g=Ke(),n=we(),o=Ce(),c=be(),u=Ie(),e=Kt(),An.exports=T=(function(){function x(v){var r,a,C;v||(v={}),this.options=v,a=v.writer||{};for(r in a)D.call(a,r)&&(C=a[r],this["_"+r]=this[r],this[r]=C)}return x.prototype.filterOptions=function(v){var r,a,C,E,_,m,b,k;return v||(v={}),v=A({},this.options,v),r={writer:this},r.pretty=v.pretty||!1,r.allowEmpty=v.allowEmpty||!1,r.indent=(a=v.indent)!=null?a:"  ",r.newline=(C=v.newline)!=null?C:`
`,r.offset=(E=v.offset)!=null?E:0,r.dontPrettyTextNodes=(_=(m=v.dontPrettyTextNodes)!=null?m:v.dontprettytextnodes)!=null?_:0,r.spaceBeforeSlash=(b=(k=v.spaceBeforeSlash)!=null?k:v.spacebeforeslash)!=null?b:"",r.spaceBeforeSlash===!0&&(r.spaceBeforeSlash=" "),r.suppressPrettyCount=0,r.user={},r.state=e.None,r},x.prototype.indent=function(v,r,a){var C;return!r.pretty||r.suppressPrettyCount?"":r.pretty&&(C=(a||0)+r.offset+1,C>0)?new Array(C).join(r.indent):""},x.prototype.endline=function(v,r,a){return!r.pretty||r.suppressPrettyCount?"":r.newline},x.prototype.attribute=function(v,r,a){var C;return this.openAttribute(v,r,a),C=" "+v.name+'="'+v.value+'"',this.closeAttribute(v,r,a),C},x.prototype.cdata=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<![CDATA[",r.state=e.InsideTag,C+=v.value,r.state=e.CloseTag,C+="]]>"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.comment=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<!-- ",r.state=e.InsideTag,C+=v.value,r.state=e.CloseTag,C+=" -->"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.declaration=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<?xml",r.state=e.InsideTag,C+=' version="'+v.version+'"',v.encoding!=null&&(C+=' encoding="'+v.encoding+'"'),v.standalone!=null&&(C+=' standalone="'+v.standalone+'"'),r.state=e.CloseTag,C+=r.spaceBeforeSlash+"?>",C+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.docType=function(v,r,a){var C,E,_,m,b;if(a||(a=0),this.openNode(v,r,a),r.state=e.OpenTag,m=this.indent(v,r,a),m+="<!DOCTYPE "+v.root().name,v.pubID&&v.sysID?m+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(m+=' SYSTEM "'+v.sysID+'"'),v.children.length>0){for(m+=" [",m+=this.endline(v,r,a),r.state=e.InsideTag,b=v.children,E=0,_=b.length;E<_;E++)C=b[E],m+=this.writeChildNode(C,r,a+1);r.state=e.CloseTag,m+="]"}return r.state=e.CloseTag,m+=r.spaceBeforeSlash+">",m+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),m},x.prototype.element=function(v,r,a){var C,E,_,m,b,k,O,P,L,R,M,F,U,J;a||(a=0),R=!1,M="",this.openNode(v,r,a),r.state=e.OpenTag,M+=this.indent(v,r,a)+"<"+v.name,F=v.attribs;for(L in F)D.call(F,L)&&(C=F[L],M+=this.attribute(C,r,a));if(_=v.children.length,m=_===0?null:v.children[0],_===0||v.children.every(function(lt){return(lt.type===t.Text||lt.type===t.Raw)&&lt.value===""}))r.allowEmpty?(M+=">",r.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,r,a)):(r.state=e.CloseTag,M+=r.spaceBeforeSlash+"/>"+this.endline(v,r,a));else if(r.pretty&&_===1&&(m.type===t.Text||m.type===t.Raw)&&m.value!=null)M+=">",r.state=e.InsideTag,r.suppressPrettyCount++,R=!0,M+=this.writeChildNode(m,r,a+1),r.suppressPrettyCount--,R=!1,r.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,r,a);else{if(r.dontPrettyTextNodes){for(U=v.children,b=0,O=U.length;b<O;b++)if(E=U[b],(E.type===t.Text||E.type===t.Raw)&&E.value!=null){r.suppressPrettyCount++,R=!0;break}}for(M+=">"+this.endline(v,r,a),r.state=e.InsideTag,J=v.children,k=0,P=J.length;k<P;k++)E=J[k],M+=this.writeChildNode(E,r,a+1);r.state=e.CloseTag,M+=this.indent(v,r,a)+"</"+v.name+">",R&&r.suppressPrettyCount--,M+=this.endline(v,r,a),r.state=e.None}return this.closeNode(v,r,a),M},x.prototype.writeChildNode=function(v,r,a){switch(v.type){case t.CData:return this.cdata(v,r,a);case t.Comment:return this.comment(v,r,a);case t.Element:return this.element(v,r,a);case t.Raw:return this.raw(v,r,a);case t.Text:return this.text(v,r,a);case t.ProcessingInstruction:return this.processingInstruction(v,r,a);case t.Dummy:return"";case t.Declaration:return this.declaration(v,r,a);case t.DocType:return this.docType(v,r,a);case t.AttributeDeclaration:return this.dtdAttList(v,r,a);case t.ElementDeclaration:return this.dtdElement(v,r,a);case t.EntityDeclaration:return this.dtdEntity(v,r,a);case t.NotationDeclaration:return this.dtdNotation(v,r,a);default:throw new Error("Unknown XML node type: "+v.constructor.name)}},x.prototype.processingInstruction=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<?",r.state=e.InsideTag,C+=v.target,v.value&&(C+=" "+v.value),r.state=e.CloseTag,C+=r.spaceBeforeSlash+"?>",C+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.raw=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a),r.state=e.InsideTag,C+=v.value,r.state=e.CloseTag,C+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.text=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a),r.state=e.InsideTag,C+=v.value,r.state=e.CloseTag,C+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.dtdAttList=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<!ATTLIST",r.state=e.InsideTag,C+=" "+v.elementName+" "+v.attributeName+" "+v.attributeType,v.defaultValueType!=="#DEFAULT"&&(C+=" "+v.defaultValueType),v.defaultValue&&(C+=' "'+v.defaultValue+'"'),r.state=e.CloseTag,C+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.dtdElement=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<!ELEMENT",r.state=e.InsideTag,C+=" "+v.name+" "+v.value,r.state=e.CloseTag,C+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.dtdEntity=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<!ENTITY",r.state=e.InsideTag,v.pe&&(C+=" %"),C+=" "+v.name,v.value?C+=' "'+v.value+'"':(v.pubID&&v.sysID?C+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(C+=' SYSTEM "'+v.sysID+'"'),v.nData&&(C+=" NDATA "+v.nData)),r.state=e.CloseTag,C+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.dtdNotation=function(v,r,a){var C;return this.openNode(v,r,a),r.state=e.OpenTag,C=this.indent(v,r,a)+"<!NOTATION",r.state=e.InsideTag,C+=" "+v.name,v.pubID&&v.sysID?C+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.pubID?C+=' PUBLIC "'+v.pubID+'"':v.sysID&&(C+=' SYSTEM "'+v.sysID+'"'),r.state=e.CloseTag,C+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),C},x.prototype.openNode=function(v,r,a){},x.prototype.closeNode=function(v,r,a){},x.prototype.openAttribute=function(v,r,a){},x.prototype.closeAttribute=function(v,r,a){},x})()}).call(En)});var Ee=B((Dn,kn)=>{(function(){var t,e,i=function(n,o){for(var c in o)l.call(o,c)&&(n[c]=o[c]);function u(){this.constructor=n}return u.prototype=o.prototype,n.prototype=new u,n.__super__=o.prototype,n},l={}.hasOwnProperty;e=Je(),kn.exports=t=(function(n){i(o,n);function o(c){o.__super__.constructor.call(this,c)}return o.prototype.document=function(c,u){var d,f,g,y,w;for(u=this.filterOptions(u),y="",w=c.children,f=0,g=w.length;f<g;f++)d=w[f],y+=this.writeChildNode(d,u,0);return u.pretty&&y.slice(-u.newline.length)===u.newline&&(y=y.slice(0,-u.newline.length)),y},o})(e)}).call(Dn)});var Qe=B((Nn,On)=>{(function(){var t,e,i,l,n,o,c,u,d=function(g,y){for(var w in y)f.call(y,w)&&(g[w]=y[w]);function h(){this.constructor=g}return h.prototype=y.prototype,g.prototype=new h,g.__super__=y.prototype,g},f={}.hasOwnProperty;u=vt().isPlainObject,i=Ge(),e=Pi(),n=dt(),t=Y(),c=Ye(),o=Ee(),On.exports=l=(function(g){d(y,g);function y(w){y.__super__.constructor.call(this,null),this.name="#document",this.type=t.Document,this.documentURI=null,this.domConfig=new e,w||(w={}),w.writer||(w.writer=new o),this.options=w,this.stringify=new c(w)}return Object.defineProperty(y.prototype,"implementation",{value:new i}),Object.defineProperty(y.prototype,"doctype",{get:function(){var w,h,I,T;for(T=this.children,h=0,I=T.length;h<I;h++)if(w=T[h],w.type===t.DocType)return w;return null}}),Object.defineProperty(y.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(y.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(y.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(y.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].encoding:null}}),Object.defineProperty(y.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(y.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(y.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(y.prototype,"origin",{get:function(){return null}}),Object.defineProperty(y.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(y.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(y.prototype,"contentType",{get:function(){return null}}),y.prototype.end=function(w){var h;return h={},w?u(w)&&(h=w,w=this.options.writer):w=this.options.writer,w.document(this,w.filterOptions(h))},y.prototype.toString=function(w){return this.options.writer.document(this,this.options.writer.filterOptions(w))},y.prototype.createElement=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTextNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createComment=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createCDATASection=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createProcessingInstruction=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttribute=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEntityReference=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.importNode=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createElementNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttributeNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagNameNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementById=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.adoptNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.renameNode=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByClassName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEvent=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createNodeIterator=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTreeWalker=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y})(n)}).call(Nn)});var Rn=B((Pn,Mn)=>{(function(){var t,e,i,l,n,o,c,u,d,f,g,y,w,h,I,T,A,D,x,v,r,a,C,E,_={}.hasOwnProperty;E=vt(),a=E.isObject,r=E.isFunction,C=E.isPlainObject,v=E.getValue,t=Y(),y=Qe(),h=me(),l=ge(),n=ye(),T=xe(),x=_e(),I=Se(),f=ve(),g=Te(),o=we(),u=be(),c=Ce(),d=Ie(),i=We(),D=Ye(),A=Ee(),e=Kt(),Mn.exports=w=(function(){function m(b,k,O){var P;this.name="?xml",this.type=t.Document,b||(b={}),P={},b.writer?C(b.writer)&&(P=b.writer,b.writer=new A):b.writer=new A,this.options=b,this.writer=b.writer,this.writerOptions=this.writer.filterOptions(P),this.stringify=new D(b),this.onDataCallback=k||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return m.prototype.createChildNode=function(b){var k,O,P,L,R,M,F,U;switch(b.type){case t.CData:this.cdata(b.value);break;case t.Comment:this.comment(b.value);break;case t.Element:P={},F=b.attribs;for(O in F)_.call(F,O)&&(k=F[O],P[O]=k.value);this.node(b.name,P);break;case t.Dummy:this.dummy();break;case t.Raw:this.raw(b.value);break;case t.Text:this.text(b.value);break;case t.ProcessingInstruction:this.instruction(b.target,b.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+b.constructor.name)}for(U=b.children,R=0,M=U.length;R<M;R++)L=U[R],this.createChildNode(L),L.type===t.Element&&this.up();return this},m.prototype.dummy=function(){return this},m.prototype.node=function(b,k,O){var P;if(b==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(b));return this.openCurrent(),b=v(b),k==null&&(k={}),k=v(k),a(k)||(P=[k,O],O=P[0],k=P[1]),this.currentNode=new h(this,b,k),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},m.prototype.element=function(b,k,O){var P,L,R,M,F,U;if(this.currentNode&&this.currentNode.type===t.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(b)||a(b)||r(b))for(M=this.options.noValidation,this.options.noValidation=!0,U=new y(this.options).element("TEMP_ROOT"),U.element(b),this.options.noValidation=M,F=U.children,L=0,R=F.length;L<R;L++)P=F[L],this.createChildNode(P),P.type===t.Element&&this.up();else this.node(b,k,O);return this},m.prototype.attribute=function(b,k){var O,P;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(b));if(b!=null&&(b=v(b)),a(b))for(O in b)_.call(b,O)&&(P=b[O],this.attribute(O,P));else r(k)&&(k=k.apply()),this.options.keepNullAttributes&&k==null?this.currentNode.attribs[b]=new i(this,b,""):k!=null&&(this.currentNode.attribs[b]=new i(this,b,k));return this},m.prototype.text=function(b){var k;return this.openCurrent(),k=new x(this,b),this.onData(this.writer.text(k,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.cdata=function(b){var k;return this.openCurrent(),k=new l(this,b),this.onData(this.writer.cdata(k,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.comment=function(b){var k;return this.openCurrent(),k=new n(this,b),this.onData(this.writer.comment(k,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.raw=function(b){var k;return this.openCurrent(),k=new T(this,b),this.onData(this.writer.raw(k,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.instruction=function(b,k){var O,P,L,R,M;if(this.openCurrent(),b!=null&&(b=v(b)),k!=null&&(k=v(k)),Array.isArray(b))for(O=0,R=b.length;O<R;O++)P=b[O],this.instruction(P);else if(a(b))for(P in b)_.call(b,P)&&(L=b[P],this.instruction(P,L));else r(k)&&(k=k.apply()),M=new I(this,b,k),this.onData(this.writer.processingInstruction(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},m.prototype.declaration=function(b,k,O){var P;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return P=new f(this,b,k,O),this.onData(this.writer.declaration(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.doctype=function(b,k,O){if(this.openCurrent(),b==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new g(this,k,O),this.currentNode.rootNodeName=b,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},m.prototype.dtdElement=function(b,k){var O;return this.openCurrent(),O=new c(this,b,k),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.attList=function(b,k,O,P,L){var R;return this.openCurrent(),R=new o(this,b,k,O,P,L),this.onData(this.writer.dtdAttList(R,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.entity=function(b,k){var O;return this.openCurrent(),O=new u(this,!1,b,k),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.pEntity=function(b,k){var O;return this.openCurrent(),O=new u(this,!0,b,k),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.notation=function(b,k){var O;return this.openCurrent(),O=new d(this,b,k),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},m.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},m.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},m.prototype.openNode=function(b){var k,O,P,L;if(!b.isOpen){if(!this.root&&this.currentLevel===0&&b.type===t.Element&&(this.root=b),O="",b.type===t.Element){this.writerOptions.state=e.OpenTag,O=this.writer.indent(b,this.writerOptions,this.currentLevel)+"<"+b.name,L=b.attribs;for(P in L)_.call(L,P)&&(k=L[P],O+=this.writer.attribute(k,this.writerOptions,this.currentLevel));O+=(b.children?">":"/>")+this.writer.endline(b,this.writerOptions,this.currentLevel),this.writerOptions.state=e.InsideTag}else this.writerOptions.state=e.OpenTag,O=this.writer.indent(b,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+b.rootNodeName,b.pubID&&b.sysID?O+=' PUBLIC "'+b.pubID+'" "'+b.sysID+'"':b.sysID&&(O+=' SYSTEM "'+b.sysID+'"'),b.children?(O+=" [",this.writerOptions.state=e.InsideTag):(this.writerOptions.state=e.CloseTag,O+=">"),O+=this.writer.endline(b,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),b.isOpen=!0}},m.prototype.closeNode=function(b){var k;if(!b.isClosed)return k="",this.writerOptions.state=e.CloseTag,b.type===t.Element?k=this.writer.indent(b,this.writerOptions,this.currentLevel)+"</"+b.name+">"+this.writer.endline(b,this.writerOptions,this.currentLevel):k=this.writer.indent(b,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(b,this.writerOptions,this.currentLevel),this.writerOptions.state=e.None,this.onData(k,this.currentLevel),b.isClosed=!0},m.prototype.onData=function(b,k){return this.documentStarted=!0,this.onDataCallback(b,k+1)},m.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},m.prototype.debugInfo=function(b){return b==null?"":"node: <"+b+">"},m.prototype.ele=function(){return this.element.apply(this,arguments)},m.prototype.nod=function(b,k,O){return this.node(b,k,O)},m.prototype.txt=function(b){return this.text(b)},m.prototype.dat=function(b){return this.cdata(b)},m.prototype.com=function(b){return this.comment(b)},m.prototype.ins=function(b,k){return this.instruction(b,k)},m.prototype.dec=function(b,k,O){return this.declaration(b,k,O)},m.prototype.dtd=function(b,k,O){return this.doctype(b,k,O)},m.prototype.e=function(b,k,O){return this.element(b,k,O)},m.prototype.n=function(b,k,O){return this.node(b,k,O)},m.prototype.t=function(b){return this.text(b)},m.prototype.d=function(b){return this.cdata(b)},m.prototype.c=function(b){return this.comment(b)},m.prototype.r=function(b){return this.raw(b)},m.prototype.i=function(b,k){return this.instruction(b,k)},m.prototype.att=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},m.prototype.a=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},m.prototype.ent=function(b,k){return this.entity(b,k)},m.prototype.pent=function(b,k){return this.pEntity(b,k)},m.prototype.not=function(b,k){return this.notation(b,k)},m})()}).call(Pn)});var Bn=B((Ln,Fn)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)o.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},o={}.hasOwnProperty;t=Y(),l=Je(),e=Kt(),Fn.exports=i=(function(c){n(u,c);function u(d,f){this.stream=d,u.__super__.constructor.call(this,f)}return u.prototype.endline=function(d,f,g){return d.isLastRootNode&&f.state===e.CloseTag?"":u.__super__.endline.call(this,d,f,g)},u.prototype.document=function(d,f){var g,y,w,h,I,T,A,D,x;for(A=d.children,y=w=0,I=A.length;w<I;y=++w)g=A[y],g.isLastRootNode=y===d.children.length-1;for(f=this.filterOptions(f),D=d.children,x=[],h=0,T=D.length;h<T;h++)g=D[h],x.push(this.writeChildNode(g,f,0));return x},u.prototype.attribute=function(d,f,g){return this.stream.write(u.__super__.attribute.call(this,d,f,g))},u.prototype.cdata=function(d,f,g){return this.stream.write(u.__super__.cdata.call(this,d,f,g))},u.prototype.comment=function(d,f,g){return this.stream.write(u.__super__.comment.call(this,d,f,g))},u.prototype.declaration=function(d,f,g){return this.stream.write(u.__super__.declaration.call(this,d,f,g))},u.prototype.docType=function(d,f,g){var y,w,h,I;if(g||(g=0),this.openNode(d,f,g),f.state=e.OpenTag,this.stream.write(this.indent(d,f,g)),this.stream.write("<!DOCTYPE "+d.root().name),d.pubID&&d.sysID?this.stream.write(' PUBLIC "'+d.pubID+'" "'+d.sysID+'"'):d.sysID&&this.stream.write(' SYSTEM "'+d.sysID+'"'),d.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(d,f,g)),f.state=e.InsideTag,I=d.children,w=0,h=I.length;w<h;w++)y=I[w],this.writeChildNode(y,f,g+1);f.state=e.CloseTag,this.stream.write("]")}return f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+">"),this.stream.write(this.endline(d,f,g)),f.state=e.None,this.closeNode(d,f,g)},u.prototype.element=function(d,f,g){var y,w,h,I,T,A,D,x,v,r;g||(g=0),this.openNode(d,f,g),f.state=e.OpenTag,this.stream.write(this.indent(d,f,g)+"<"+d.name),v=d.attribs;for(D in v)o.call(v,D)&&(y=v[D],this.attribute(y,f,g));if(h=d.children.length,I=h===0?null:d.children[0],h===0||d.children.every(function(a){return(a.type===t.Text||a.type===t.Raw)&&a.value===""}))f.allowEmpty?(this.stream.write(">"),f.state=e.CloseTag,this.stream.write("</"+d.name+">")):(f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+"/>"));else if(f.pretty&&h===1&&(I.type===t.Text||I.type===t.Raw)&&I.value!=null)this.stream.write(">"),f.state=e.InsideTag,f.suppressPrettyCount++,x=!0,this.writeChildNode(I,f,g+1),f.suppressPrettyCount--,x=!1,f.state=e.CloseTag,this.stream.write("</"+d.name+">");else{for(this.stream.write(">"+this.endline(d,f,g)),f.state=e.InsideTag,r=d.children,T=0,A=r.length;T<A;T++)w=r[T],this.writeChildNode(w,f,g+1);f.state=e.CloseTag,this.stream.write(this.indent(d,f,g)+"</"+d.name+">")}return this.stream.write(this.endline(d,f,g)),f.state=e.None,this.closeNode(d,f,g)},u.prototype.processingInstruction=function(d,f,g){return this.stream.write(u.__super__.processingInstruction.call(this,d,f,g))},u.prototype.raw=function(d,f,g){return this.stream.write(u.__super__.raw.call(this,d,f,g))},u.prototype.text=function(d,f,g){return this.stream.write(u.__super__.text.call(this,d,f,g))},u.prototype.dtdAttList=function(d,f,g){return this.stream.write(u.__super__.dtdAttList.call(this,d,f,g))},u.prototype.dtdElement=function(d,f,g){return this.stream.write(u.__super__.dtdElement.call(this,d,f,g))},u.prototype.dtdEntity=function(d,f,g){return this.stream.write(u.__super__.dtdEntity.call(this,d,f,g))},u.prototype.dtdNotation=function(d,f,g){return this.stream.write(u.__super__.dtdNotation.call(this,d,f,g))},u})(l)}).call(Ln)});var Un=B(($n,_t)=>{(function(){var t,e,i,l,n,o,c,u,d,f;f=vt(),u=f.assign,d=f.isFunction,i=Ge(),l=Qe(),n=Rn(),c=Ee(),o=Bn(),t=Y(),e=Kt(),_t.exports.create=function(g,y,w,h){var I,T;if(g==null)throw new Error("Root element needs a name.");return h=u({},y,w,h),I=new l(h),T=I.element(g),h.headless||(I.declaration(h),(h.pubID!=null||h.sysID!=null)&&I.dtd(h)),T},_t.exports.begin=function(g,y,w){var h;return d(g)&&(h=[g,y],y=h[0],w=h[1],g={}),y?new n(g,y,w):new l(g)},_t.exports.stringWriter=function(g){return new c(g)},_t.exports.streamWriter=function(g,y){return new o(g,y)},_t.exports.implementation=new i,_t.exports.nodeType=t,_t.exports.writerState=e}).call($n)});var qn=B(Ze=>{(function(){"use strict";var t,e,i,l,n,o={}.hasOwnProperty;t=Un(),e=fe().defaults,l=function(c){return typeof c=="string"&&(c.indexOf("&")>=0||c.indexOf(">")>=0||c.indexOf("<")>=0)},n=function(c){return"<![CDATA["+i(c)+"]]>"},i=function(c){return c.replace("]]>","]]]]><![CDATA[>")},Ze.Builder=(function(){function c(u){var d,f,g;this.options={},f=e["0.2"];for(d in f)o.call(f,d)&&(g=f[d],this.options[d]=g);for(d in u)o.call(u,d)&&(g=u[d],this.options[d]=g)}return c.prototype.buildObject=function(u){var d,f,g,y,w;return d=this.options.attrkey,f=this.options.charkey,Object.keys(u).length===1&&this.options.rootName===e["0.2"].rootName?(w=Object.keys(u)[0],u=u[w]):w=this.options.rootName,g=(function(h){return function(I,T){var A,D,x,v,r,a;if(typeof T!="object")h.options.cdata&&l(T)?I.raw(n(T)):I.txt(T);else if(Array.isArray(T)){for(v in T)if(o.call(T,v)){D=T[v];for(r in D)x=D[r],I=g(I.ele(r),x).up()}}else for(r in T)if(o.call(T,r))if(D=T[r],r===d){if(typeof D=="object")for(A in D)a=D[A],I=I.att(A,a)}else if(r===f)h.options.cdata&&l(D)?I=I.raw(n(D)):I=I.txt(D);else if(Array.isArray(D))for(v in D)o.call(D,v)&&(x=D[v],typeof x=="string"?h.options.cdata&&l(x)?I=I.ele(r).raw(n(x)).up():I=I.ele(r,x).up():I=g(I.ele(r),x).up());else typeof D=="object"?I=g(I.ele(r),D).up():typeof D=="string"&&h.options.cdata&&l(D)?I=I.ele(r).raw(n(D)).up():(D==null&&(D=""),I=I.ele(r,D.toString()).up());return I}})(this),y=t.create(w,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),g(y,u).end(this.options.renderOpts)},c})()}).call(Ze)});var Vn=B(Ae=>{(function(t){t.parser=function(p,s){return new i(p,s)},t.SAXParser=i,t.SAXStream=g,t.createStream=d,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function i(p,s){if(!(this instanceof i))return new i(p,s);var N=this;n(N),N.q=N.c="",N.bufferCheckPosition=t.MAX_BUFFER_LENGTH,N.encoding=null,N.opt=s||{},N.opt.lowercase=N.opt.lowercase||N.opt.lowercasetags,N.looseCase=N.opt.lowercase?"toLowerCase":"toUpperCase",N.opt.maxEntityCount=N.opt.maxEntityCount||512,N.opt.maxEntityDepth=N.opt.maxEntityDepth||4,N.entityCount=N.entityDepth=0,N.tags=[],N.closed=N.closedRoot=N.sawRoot=!1,N.tag=N.error=null,N.strict=!!p,N.noscript=!!(p||N.opt.noscript),N.state=m.BEGIN,N.strictEntities=N.opt.strictEntities,N.ENTITIES=N.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),N.attribList=[],N.opt.xmlns&&(N.ns=Object.create(T)),N.opt.unquotedAttributeValues===void 0&&(N.opt.unquotedAttributeValues=!p),N.trackPosition=N.opt.position!==!1,N.trackPosition&&(N.position=N.line=N.column=0),k(N,"onready")}Object.create||(Object.create=function(p){function s(){}s.prototype=p;var N=new s;return N}),Object.keys||(Object.keys=function(p){var s=[];for(var N in p)p.hasOwnProperty(N)&&s.push(N);return s});function l(p){for(var s=Math.max(t.MAX_BUFFER_LENGTH,10),N=0,S=0,j=e.length;S<j;S++){var G=p[e[S]].length;if(G>s)switch(e[S]){case"textNode":F(p);break;case"cdata":M(p,"oncdata",p.cdata),p.cdata="";break;case"script":M(p,"onscript",p.script),p.script="";break;default:J(p,"Max buffer length exceeded: "+e[S])}N=Math.max(N,G)}var K=t.MAX_BUFFER_LENGTH-N;p.bufferCheckPosition=K+p.position}function n(p){for(var s=0,N=e.length;s<N;s++)p[e[s]]=""}function o(p){F(p),p.cdata!==""&&(M(p,"oncdata",p.cdata),p.cdata=""),p.script!==""&&(M(p,"onscript",p.script),p.script="")}i.prototype={end:function(){lt(this)},write:ae,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){o(this)}};var c;try{c=require("stream").Stream}catch{c=function(){}}c||(c=function(){});var u=t.EVENTS.filter(function(p){return p!=="error"&&p!=="end"});function d(p,s){return new g(p,s)}function f(p,s){if(p.length>=2){if(p[0]===255&&p[1]===254)return"utf-16le";if(p[0]===254&&p[1]===255)return"utf-16be"}return p.length>=3&&p[0]===239&&p[1]===187&&p[2]===191?"utf8":p.length>=4?p[0]===60&&p[1]===0&&p[2]===63&&p[3]===0?"utf-16le":p[0]===0&&p[1]===60&&p[2]===0&&p[3]===63?"utf-16be":"utf8":s?"utf8":null}function g(p,s){if(!(this instanceof g))return new g(p,s);c.apply(this),this._parser=new i(p,s),this.writable=!0,this.readable=!0;var N=this;this._parser.onend=function(){N.emit("end")},this._parser.onerror=function(S){N.emit("error",S),N._parser.error=null},this._decoder=null,this._decoderBuffer=null,u.forEach(function(S){Object.defineProperty(N,"on"+S,{get:function(){return N._parser["on"+S]},set:function(j){if(!j)return N.removeAllListeners(S),N._parser["on"+S]=j,j;N.on(S,j)},enumerable:!0,configurable:!1})})}g.prototype=Object.create(c.prototype,{constructor:{value:g}}),g.prototype._decodeBuffer=function(p,s){if(this._decoderBuffer&&(p=Buffer.concat([this._decoderBuffer,p]),this._decoderBuffer=null),!this._decoder){var N=f(p,s);if(!N)return this._decoderBuffer=p,"";this._parser.encoding=N,this._decoder=new TextDecoder(N)}return this._decoder.decode(p,{stream:!s})},g.prototype.write=function(p){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(p))p=this._decodeBuffer(p,!1);else if(this._decoderBuffer){var s=this._decodeBuffer(Buffer.alloc(0),!0);s&&(this._parser.write(s),this.emit("data",s))}return this._parser.write(p.toString()),this.emit("data",p),!0},g.prototype.end=function(p){if(p&&p.length&&this.write(p),this._decoderBuffer){var s=this._decodeBuffer(Buffer.alloc(0),!0);s&&(this._parser.write(s),this.emit("data",s))}else if(this._decoder){var N=this._decoder.decode();N&&(this._parser.write(N),this.emit("data",N))}return this._parser.end(),!0},g.prototype.on=function(p,s){var N=this;return!N._parser["on"+p]&&u.indexOf(p)!==-1&&(N._parser["on"+p]=function(){var S=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);S.splice(0,0,p),N.emit.apply(N,S)}),c.prototype.on.call(N,p,s)};var y="[CDATA[",w="DOCTYPE",h="http://www.w3.org/XML/1998/namespace",I="http://www.w3.org/2000/xmlns/",T={xml:h,xmlns:I},A=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,D=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,x=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function r(p){return p===" "||p===`
`||p==="\r"||p==="	"}function a(p){return p==='"'||p==="'"}function C(p){return p===">"||r(p)}function E(p,s){return p.test(s)}function _(p,s){return!E(p,s)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(p){var s=t.ENTITIES[p],N=typeof s=="number"?String.fromCharCode(s):s;t.ENTITIES[p]=N});for(var b in t.STATE)t.STATE[t.STATE[b]]=b;m=t.STATE;function k(p,s,N){p[s]&&p[s](N)}function O(p){var s=p&&p.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return s?s[2]:null}function P(p){return p?p.toLowerCase().replace(/[^a-z0-9]/g,""):null}function L(p,s){let N=P(p),S=P(s);return!N||!S?!0:S==="utf16"?N==="utf16le"||N==="utf16be":N===S}function R(p,s){if(!(!p.strict||!p.encoding||!s||s.name!=="xml")){var N=O(s.body);N&&!L(p.encoding,N)&&H(p,"XML declaration encoding "+N+" does not match detected stream encoding "+p.encoding.toUpperCase())}}function M(p,s,N){p.textNode&&F(p),k(p,s,N)}function F(p){p.textNode=U(p.opt,p.textNode),p.textNode&&k(p,"ontext",p.textNode),p.textNode=""}function U(p,s){return p.trim&&(s=s.trim()),p.normalize&&(s=s.replace(/\s+/g," ")),s}function J(p,s){return F(p),p.trackPosition&&(s+=`
Line: `+p.line+`
Column: `+p.column+`
Char: `+p.c),s=new Error(s),p.error=s,k(p,"onerror",s),p}function lt(p){return p.sawRoot&&!p.closedRoot&&H(p,"Unclosed root tag"),p.state!==m.BEGIN&&p.state!==m.BEGIN_WHITESPACE&&p.state!==m.TEXT&&J(p,"Unexpected end"),F(p),p.c="",p.closed=!0,k(p,"onend"),i.call(p,p.strict,p.opt),p}function H(p,s){if(typeof p!="object"||!(p instanceof i))throw new Error("bad call to strictFail");p.strict&&J(p,s)}function ze(p){p.strict||(p.tagName=p.tagName[p.looseCase]());var s=p.tags[p.tags.length-1]||p,N=p.tag={name:p.tagName,attributes:{}};p.opt.xmlns&&(N.ns=s.ns),p.attribList.length=0,M(p,"onopentagstart",N)}function jt(p,s){var N=p.indexOf(":"),S=N<0?["",p]:p.split(":"),j=S[0],G=S[1];return s&&p==="xmlns"&&(j="xmlns",G=""),{prefix:j,local:G}}function Ht(p){if(p.strict||(p.attribName=p.attribName[p.looseCase]()),p.attribList.indexOf(p.attribName)!==-1||p.tag.attributes.hasOwnProperty(p.attribName)){p.attribName=p.attribValue="";return}if(p.opt.xmlns){var s=jt(p.attribName,!0),N=s.prefix,S=s.local;if(N==="xmlns")if(S==="xml"&&p.attribValue!==h)H(p,"xml: prefix must be bound to "+h+`
Actual: `+p.attribValue);else if(S==="xmlns"&&p.attribValue!==I)H(p,"xmlns: prefix must be bound to "+I+`
Actual: `+p.attribValue);else{var j=p.tag,G=p.tags[p.tags.length-1]||p;j.ns===G.ns&&(j.ns=Object.create(G.ns)),j.ns[S]=p.attribValue}p.attribList.push([p.attribName,p.attribValue])}else p.tag.attributes[p.attribName]=p.attribValue,M(p,"onattribute",{name:p.attribName,value:p.attribValue});p.attribName=p.attribValue=""}function bt(p,s){if(p.opt.xmlns){var N=p.tag,S=jt(p.tagName);N.prefix=S.prefix,N.local=S.local,N.uri=N.ns[S.prefix]||"",N.prefix&&!N.uri&&(H(p,"Unbound namespace prefix: "+JSON.stringify(p.tagName)),N.uri=S.prefix);var j=p.tags[p.tags.length-1]||p;N.ns&&j.ns!==N.ns&&Object.keys(N.ns).forEach(function(gi){M(p,"onopennamespace",{prefix:gi,uri:N.ns[gi]})});for(var G=0,K=p.attribList.length;G<K;G++){var tt=p.attribList[G],nt=tt[0],W=tt[1],Q=jt(nt,!0),pt=Q.prefix,Ar=Q.local,mi=pt===""?"":N.ns[pt]||"",He={name:nt,value:W,prefix:pt,local:Ar,uri:mi};pt&&pt!=="xmlns"&&!mi&&(H(p,"Unbound namespace prefix: "+JSON.stringify(pt)),He.uri=pt),p.tag.attributes[nt]=He,M(p,"onattribute",He)}p.attribList.length=0}p.tag.isSelfClosing=!!s,p.sawRoot=!0,p.tags.push(p.tag),M(p,"onopentag",p.tag),s||(!p.noscript&&p.tagName.toLowerCase()==="script"?p.state=m.SCRIPT:p.state=m.TEXT,p.tag=null,p.tagName=""),p.attribName=p.attribValue="",p.attribList.length=0}function Xt(p){if(!p.tagName){H(p,"Weird empty close tag."),p.textNode+="</>",p.state=m.TEXT;return}if(p.script){if(p.tagName!=="script"){p.script+="</"+p.tagName+">",p.tagName="",p.state=m.SCRIPT;return}M(p,"onscript",p.script),p.script=""}var s=p.tags.length,N=p.tagName;p.strict||(N=N[p.looseCase]());for(var S=N;s--;){var j=p.tags[s];if(j.name!==S)H(p,"Unexpected close tag");else break}if(s<0){H(p,"Unmatched closing tag: "+p.tagName),p.textNode+="</"+p.tagName+">",p.state=m.TEXT;return}p.tagName=N;for(var G=p.tags.length;G-- >s;){var K=p.tag=p.tags.pop();p.tagName=p.tag.name,M(p,"onclosetag",p.tagName);var tt={};for(var nt in K.ns)tt[nt]=K.ns[nt];var W=p.tags[p.tags.length-1]||p;p.opt.xmlns&&K.ns!==W.ns&&Object.keys(K.ns).forEach(function(Q){var pt=K.ns[Q];M(p,"onclosenamespace",{prefix:Q,uri:pt})})}s===0&&(p.closedRoot=!0),p.tagName=p.attribValue=p.attribName="",p.attribList.length=0,p.state=m.TEXT}function je(p){var s=p.entity,N=s.toLowerCase(),S,j="";return p.ENTITIES[s]?p.ENTITIES[s]:p.ENTITIES[N]?p.ENTITIES[N]:(s=N,s.charAt(0)==="#"&&(s.charAt(1)==="x"?(s=s.slice(2),S=parseInt(s,16),j=S.toString(16)):(s=s.slice(1),S=parseInt(s,10),j=S.toString(10))),s=s.replace(/^0+/,""),isNaN(S)||j.toLowerCase()!==s||S<0||S>1114111?(H(p,"Invalid character entity"),"&"+p.entity+";"):String.fromCodePoint(S))}function se(p,s){s==="<"?(p.state=m.OPEN_WAKA,p.startTagPosition=p.position):r(s)||(H(p,"Non-whitespace before first tag."),p.textNode=s,p.state=m.TEXT)}function Gt(p,s){var N="";return s<p.length&&(N=p.charAt(s)),N}function ae(p){var s=this;if(this.error)throw this.error;if(s.closed)return J(s,"Cannot write after close. Assign an onready handler.");if(p===null)return lt(s);typeof p=="object"&&(p=p.toString());for(var N=0,S="";S=Gt(p,N++),s.c=S,!!S;)switch(s.trackPosition&&(s.position++,S===`
`?(s.line++,s.column=0):s.column++),s.state){case m.BEGIN:if(s.state=m.BEGIN_WHITESPACE,S==="\uFEFF")continue;se(s,S);continue;case m.BEGIN_WHITESPACE:se(s,S);continue;case m.TEXT:if(s.sawRoot&&!s.closedRoot){for(var G=N-1;S&&S!=="<"&&S!=="&";)S=Gt(p,N++),S&&s.trackPosition&&(s.position++,S===`
`?(s.line++,s.column=0):s.column++);s.textNode+=p.substring(G,N-1)}S==="<"&&!(s.sawRoot&&s.closedRoot&&!s.strict)?(s.state=m.OPEN_WAKA,s.startTagPosition=s.position):(!r(S)&&(!s.sawRoot||s.closedRoot)&&H(s,"Text data outside of root node."),S==="&"?s.state=m.TEXT_ENTITY:s.textNode+=S);continue;case m.SCRIPT:S==="<"?s.state=m.SCRIPT_ENDING:s.script+=S;continue;case m.SCRIPT_ENDING:S==="/"?s.state=m.CLOSE_TAG:(s.script+="<"+S,s.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(S==="!")s.state=m.SGML_DECL,s.sgmlDecl="";else if(!r(S))if(E(A,S))s.state=m.OPEN_TAG,s.tagName=S;else if(S==="/")s.state=m.CLOSE_TAG,s.tagName="";else if(S==="?")s.state=m.PROC_INST,s.procInstName=s.procInstBody="";else{if(H(s,"Unencoded <"),s.startTagPosition+1<s.position){var j=s.position-s.startTagPosition;S=new Array(j).join(" ")+S}s.textNode+="<"+S,s.state=m.TEXT}continue;case m.SGML_DECL:if(s.sgmlDecl+S==="--"){s.state=m.COMMENT,s.comment="",s.sgmlDecl="";continue}s.doctype&&s.doctype!==!0&&s.sgmlDecl?(s.state=m.DOCTYPE_DTD,s.doctype+="<!"+s.sgmlDecl+S,s.sgmlDecl=""):(s.sgmlDecl+S).toUpperCase()===y?(M(s,"onopencdata"),s.state=m.CDATA,s.sgmlDecl="",s.cdata=""):(s.sgmlDecl+S).toUpperCase()===w?(s.state=m.DOCTYPE,(s.doctype||s.sawRoot)&&H(s,"Inappropriately located doctype declaration"),s.doctype="",s.sgmlDecl=""):S===">"?(M(s,"onsgmldeclaration",s.sgmlDecl),s.sgmlDecl="",s.state=m.TEXT):(a(S)&&(s.state=m.SGML_DECL_QUOTED),s.sgmlDecl+=S);continue;case m.SGML_DECL_QUOTED:S===s.q&&(s.state=m.SGML_DECL,s.q=""),s.sgmlDecl+=S;continue;case m.DOCTYPE:S===">"?(s.state=m.TEXT,M(s,"ondoctype",s.doctype),s.doctype=!0):(s.doctype+=S,S==="["?s.state=m.DOCTYPE_DTD:a(S)&&(s.state=m.DOCTYPE_QUOTED,s.q=S));continue;case m.DOCTYPE_QUOTED:s.doctype+=S,S===s.q&&(s.q="",s.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:S==="]"?(s.doctype+=S,s.state=m.DOCTYPE):S==="<"?(s.state=m.OPEN_WAKA,s.startTagPosition=s.position):a(S)?(s.doctype+=S,s.state=m.DOCTYPE_DTD_QUOTED,s.q=S):s.doctype+=S;continue;case m.DOCTYPE_DTD_QUOTED:s.doctype+=S,S===s.q&&(s.state=m.DOCTYPE_DTD,s.q="");continue;case m.COMMENT:S==="-"?s.state=m.COMMENT_ENDING:s.comment+=S;continue;case m.COMMENT_ENDING:S==="-"?(s.state=m.COMMENT_ENDED,s.comment=U(s.opt,s.comment),s.comment&&M(s,"oncomment",s.comment),s.comment=""):(s.comment+="-"+S,s.state=m.COMMENT);continue;case m.COMMENT_ENDED:S!==">"?(H(s,"Malformed comment"),s.comment+="--"+S,s.state=m.COMMENT):s.doctype&&s.doctype!==!0?s.state=m.DOCTYPE_DTD:s.state=m.TEXT;continue;case m.CDATA:for(var G=N-1;S&&S!=="]";)S=Gt(p,N++),S&&s.trackPosition&&(s.position++,S===`
`?(s.line++,s.column=0):s.column++);s.cdata+=p.substring(G,N-1),S==="]"&&(s.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:S==="]"?s.state=m.CDATA_ENDING_2:(s.cdata+="]"+S,s.state=m.CDATA);continue;case m.CDATA_ENDING_2:S===">"?(s.cdata&&M(s,"oncdata",s.cdata),M(s,"onclosecdata"),s.cdata="",s.state=m.TEXT):S==="]"?s.cdata+="]":(s.cdata+="]]"+S,s.state=m.CDATA);continue;case m.PROC_INST:S==="?"?s.state=m.PROC_INST_ENDING:r(S)?s.state=m.PROC_INST_BODY:s.procInstName+=S;continue;case m.PROC_INST_BODY:if(!s.procInstBody&&r(S))continue;S==="?"?s.state=m.PROC_INST_ENDING:s.procInstBody+=S;continue;case m.PROC_INST_ENDING:if(S===">"){let W={name:s.procInstName,body:s.procInstBody};R(s,W),M(s,"onprocessinginstruction",W),s.procInstName=s.procInstBody="",s.state=m.TEXT}else s.procInstBody+="?"+S,s.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:E(D,S)?s.tagName+=S:(ze(s),S===">"?bt(s):S==="/"?s.state=m.OPEN_TAG_SLASH:(r(S)||H(s,"Invalid character in tag name"),s.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:S===">"?(bt(s,!0),Xt(s)):(H(s,"Forward-slash in opening tag not followed by >"),s.state=m.ATTRIB);continue;case m.ATTRIB:if(r(S))continue;S===">"?bt(s):S==="/"?s.state=m.OPEN_TAG_SLASH:E(A,S)?(s.attribName=S,s.attribValue="",s.state=m.ATTRIB_NAME):H(s,"Invalid attribute name");continue;case m.ATTRIB_NAME:S==="="?s.state=m.ATTRIB_VALUE:S===">"?(H(s,"Attribute without value"),s.attribValue=s.attribName,Ht(s),bt(s)):r(S)?s.state=m.ATTRIB_NAME_SAW_WHITE:E(D,S)?s.attribName+=S:H(s,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(S==="=")s.state=m.ATTRIB_VALUE;else{if(r(S))continue;H(s,"Attribute without value"),s.tag.attributes[s.attribName]="",s.attribValue="",M(s,"onattribute",{name:s.attribName,value:""}),s.attribName="",S===">"?bt(s):E(A,S)?(s.attribName=S,s.state=m.ATTRIB_NAME):(H(s,"Invalid attribute name"),s.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(r(S))continue;a(S)?(s.q=S,s.state=m.ATTRIB_VALUE_QUOTED):(s.opt.unquotedAttributeValues||J(s,"Unquoted attribute value"),s.state=m.ATTRIB_VALUE_UNQUOTED,s.attribValue=S);continue;case m.ATTRIB_VALUE_QUOTED:if(S!==s.q){S==="&"?s.state=m.ATTRIB_VALUE_ENTITY_Q:s.attribValue+=S;continue}Ht(s),s.q="",s.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:r(S)?s.state=m.ATTRIB:S===">"?bt(s):S==="/"?s.state=m.OPEN_TAG_SLASH:E(A,S)?(H(s,"No whitespace between attributes"),s.attribName=S,s.attribValue="",s.state=m.ATTRIB_NAME):H(s,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!C(S)){S==="&"?s.state=m.ATTRIB_VALUE_ENTITY_U:s.attribValue+=S;continue}Ht(s),S===">"?bt(s):s.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(s.tagName)S===">"?Xt(s):E(D,S)?s.tagName+=S:s.script?(s.script+="</"+s.tagName+S,s.tagName="",s.state=m.SCRIPT):(r(S)||H(s,"Invalid tagname in closing tag"),s.state=m.CLOSE_TAG_SAW_WHITE);else{if(r(S))continue;_(A,S)?s.script?(s.script+="</"+S,s.state=m.SCRIPT):H(s,"Invalid tagname in closing tag."):s.tagName=S}continue;case m.CLOSE_TAG_SAW_WHITE:if(r(S))continue;S===">"?Xt(s):H(s,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var K,tt;switch(s.state){case m.TEXT_ENTITY:K=m.TEXT,tt="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:K=m.ATTRIB_VALUE_QUOTED,tt="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:K=m.ATTRIB_VALUE_UNQUOTED,tt="attribValue";break}if(S===";"){var nt=je(s);s.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(nt)?((s.entityCount+=1)>s.opt.maxEntityCount&&J(s,"Parsed entity count exceeds max entity count"),(s.entityDepth+=1)>s.opt.maxEntityDepth&&J(s,"Parsed entity depth exceeds max entity depth"),s.entity="",s.state=K,s.write(nt),s.entityDepth-=1):(s[tt]+=nt,s.entity="",s.state=K)}else E(s.entity.length?v:x,S)?s.entity+=S:(H(s,"Invalid character in entity name"),s[tt]+="&"+s.entity+S,s.entity="",s.state=K);continue;default:throw new Error(s,"Unknown state: "+s.state)}return s.position>=s.bufferCheckPosition&&l(s),s}String.fromCodePoint||(function(){var p=String.fromCharCode,s=Math.floor,N=function(){var S=16384,j=[],G,K,tt=-1,nt=arguments.length;if(!nt)return"";for(var W="";++tt<nt;){var Q=Number(arguments[tt]);if(!isFinite(Q)||Q<0||Q>1114111||s(Q)!==Q)throw RangeError("Invalid code point: "+Q);Q<=65535?j.push(Q):(Q-=65536,G=(Q>>10)+55296,K=Q%1024+56320,j.push(G,K)),(tt+1===nt||j.length>S)&&(W+=p.apply(null,j),j.length=0)}return W};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:N,configurable:!0,writable:!0}):String.fromCodePoint=N})()})(typeof Ae>"u"?Ae.sax={}:Ae)});var zn=B(ti=>{(function(){"use strict";ti.stripBOM=function(t){return t[0]==="\uFEFF"?t.substring(1):t}}).call(ti)});var ei=B(kt=>{(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),kt.normalize=function(e){return e.toLowerCase()},kt.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},kt.stripPrefix=function(e){return e.replace(t,"")},kt.parseNumbers=function(e){return isNaN(e)||(e=e%1===0?parseInt(e,10):parseFloat(e)),e},kt.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e=e.toLowerCase()==="true"),e}}).call(kt)});var jn=B(Ct=>{(function(){"use strict";var t,e,i,l,n,o,c,u,d,f=function(w,h){return function(){return w.apply(h,arguments)}},g=function(w,h){for(var I in h)y.call(h,I)&&(w[I]=h[I]);function T(){this.constructor=w}return T.prototype=h.prototype,w.prototype=new T,w.__super__=h.prototype,w},y={}.hasOwnProperty;u=Vn(),l=require("events"),t=zn(),c=ei(),d=require("timers").setImmediate,e=fe().defaults,n=function(w){return typeof w=="object"&&w!=null&&Object.keys(w).length===0},o=function(w,h,I){var T,A,D;for(T=0,A=w.length;T<A;T++)D=w[T],h=D(h,I);return h},i=function(w,h,I){var T;return T=Object.create(null),T.value=I,T.writable=!0,T.enumerable=!0,T.configurable=!0,Object.defineProperty(w,h,T)},Ct.Parser=(function(w){g(h,w);function h(I){this.parseStringPromise=f(this.parseStringPromise,this),this.parseString=f(this.parseString,this),this.reset=f(this.reset,this),this.assignOrPush=f(this.assignOrPush,this),this.processAsync=f(this.processAsync,this);var T,A,D;if(!(this instanceof Ct.Parser))return new Ct.Parser(I);this.options={},A=e["0.2"];for(T in A)y.call(A,T)&&(D=A[T],this.options[T]=D);for(T in I)y.call(I,T)&&(D=I[T],this.options[T]=D);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}return h.prototype.processAsync=function(){var I,T;try{return this.remaining.length<=this.options.chunkSize?(I=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(I),this.saxParser.close()):(I=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(I),d(this.processAsync))}catch(A){if(T=A,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(T)}},h.prototype.assignOrPush=function(I,T,A){return T in I?(I[T]instanceof Array||i(I,T,[I[T]]),I[T].push(A)):this.options.explicitArray?i(I,T,[A]):i(I,T,A)},h.prototype.reset=function(){var I,T,A,D;return this.removeAllListeners(),this.saxParser=u.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(x){return function(v){if(x.saxParser.resume(),!x.saxParser.errThrown)return x.saxParser.errThrown=!0,x.emit("error",v)}})(this),this.saxParser.onend=(function(x){return function(){if(!x.saxParser.ended)return x.saxParser.ended=!0,x.emit("end",x.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,D=[],I=this.options.attrkey,T=this.options.charkey,this.saxParser.onopentag=(function(x){return function(v){var r,a,C,E,_;if(C={},C[T]="",!x.options.ignoreAttrs){_=v.attributes;for(r in _)y.call(_,r)&&(!(I in C)&&!x.options.mergeAttrs&&(C[I]={}),a=x.options.attrValueProcessors?o(x.options.attrValueProcessors,v.attributes[r],r):v.attributes[r],E=x.options.attrNameProcessors?o(x.options.attrNameProcessors,r):r,x.options.mergeAttrs?x.assignOrPush(C,E,a):i(C[I],E,a))}return C["#name"]=x.options.tagNameProcessors?o(x.options.tagNameProcessors,v.name):v.name,x.options.xmlns&&(C[x.options.xmlnskey]={uri:v.uri,local:v.local}),D.push(C)}})(this),this.saxParser.onclosetag=(function(x){return function(){var v,r,a,C,E,_,m,b,k,O;if(_=D.pop(),E=_["#name"],(!x.options.explicitChildren||!x.options.preserveChildrenOrder)&&delete _["#name"],_.cdata===!0&&(v=_.cdata,delete _.cdata),k=D[D.length-1],_[T].match(/^\s*$/)&&!v?(r=_[T],delete _[T]):(x.options.trim&&(_[T]=_[T].trim()),x.options.normalize&&(_[T]=_[T].replace(/\s{2,}/g," ").trim()),_[T]=x.options.valueProcessors?o(x.options.valueProcessors,_[T],E):_[T],Object.keys(_).length===1&&T in _&&!x.EXPLICIT_CHARKEY&&(_=_[T])),n(_)&&(typeof x.options.emptyTag=="function"?_=x.options.emptyTag():_=x.options.emptyTag!==""?x.options.emptyTag:r),x.options.validator!=null&&(O="/"+(function(){var P,L,R;for(R=[],P=0,L=D.length;P<L;P++)C=D[P],R.push(C["#name"]);return R})().concat(E).join("/"),(function(){var P;try{return _=x.options.validator(O,k&&k[E],_)}catch(L){return P=L,x.emit("error",P)}})()),x.options.explicitChildren&&!x.options.mergeAttrs&&typeof _=="object"){if(!x.options.preserveChildrenOrder)C={},x.options.attrkey in _&&(C[x.options.attrkey]=_[x.options.attrkey],delete _[x.options.attrkey]),!x.options.charsAsChildren&&x.options.charkey in _&&(C[x.options.charkey]=_[x.options.charkey],delete _[x.options.charkey]),Object.getOwnPropertyNames(_).length>0&&(C[x.options.childkey]=_),_=C;else if(k){k[x.options.childkey]=k[x.options.childkey]||[],m={};for(a in _)y.call(_,a)&&i(m,a,_[a]);k[x.options.childkey].push(m),delete _["#name"],Object.keys(_).length===1&&T in _&&!x.EXPLICIT_CHARKEY&&(_=_[T])}}return D.length>0?x.assignOrPush(k,E,_):(x.options.explicitRoot&&(b=_,_={},i(_,E,b)),x.resultObject=_,x.saxParser.ended=!0,x.emit("end",x.resultObject))}})(this),A=(function(x){return function(v){var r,a;if(a=D[D.length-1],a)return a[T]+=v,x.options.explicitChildren&&x.options.preserveChildrenOrder&&x.options.charsAsChildren&&(x.options.includeWhiteChars||v.replace(/\\n/g,"").trim()!=="")&&(a[x.options.childkey]=a[x.options.childkey]||[],r={"#name":"__text__"},r[T]=v,x.options.normalize&&(r[T]=r[T].replace(/\s{2,}/g," ").trim()),a[x.options.childkey].push(r)),a}})(this),this.saxParser.ontext=A,this.saxParser.oncdata=(function(x){return function(v){var r;if(r=A(v),r)return r.cdata=!0}})(this)},h.prototype.parseString=function(I,T){var A;T!=null&&typeof T=="function"&&(this.on("end",function(D){return this.reset(),T(null,D)}),this.on("error",function(D){return this.reset(),T(D)}));try{return I=I.toString(),I.trim()===""?(this.emit("end",null),!0):(I=t.stripBOM(I),this.options.async?(this.remaining=I,d(this.processAsync),this.saxParser):this.saxParser.write(I).close())}catch(D){if(A=D,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw A}else return this.emit("error",A),this.saxParser.errThrown=!0}},h.prototype.parseStringPromise=function(I){return new Promise((function(T){return function(A,D){return T.parseString(I,function(x,v){return x?D(x):A(v)})}})(this))},h})(l),Ct.parseString=function(w,h,I){var T,A,D;return I!=null?(typeof I=="function"&&(T=I),typeof h=="object"&&(A=h)):(typeof h=="function"&&(T=h),A={}),D=new Ct.Parser(A),D.parseString(w,T)},Ct.parseStringPromise=function(w,h){var I,T;return typeof h=="object"&&(I=h),T=new Ct.Parser(I),T.parseStringPromise(w)}}).call(Ct)});var Yt=B(It=>{(function(){"use strict";var t,e,i,l,n=function(c,u){for(var d in u)o.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},o={}.hasOwnProperty;e=fe(),t=qn(),i=jn(),l=ei(),It.defaults=e.defaults,It.processors=l,It.ValidationError=(function(c){n(u,c);function u(d){this.message=d}return u})(Error),It.Builder=t.Builder,It.Parser=i.Parser,It.parseString=i.parseString,It.parseStringPromise=i.parseStringPromise}).call(It)});var Vo={};Mr(Vo,{activate:()=>Uo,deactivate:()=>qo});module.exports=Rr(Vo);var z=$(require("vscode"));var q=$(require("vscode")),pe=$(require("fs")),ot=$(require("path"));function ft(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Lr(t){return t==="high"?"I":t==="medium"?"II":"III"}function Fr(t){let e={total:t.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let i of t)e[i.status]++,e[i.severity]++;return e}function vi(t){return JSON.stringify(t).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function wi(t){let e=vi(Object.fromEntries(t.stigs.flatMap(i=>i.rules.map(l=>[l.uuid,l]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${ft(t.title)}</title>
<style>${Vr}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1>${ft(t.title)}</h1>
    <span class="chip chip-accent">CKLB v${ft(t.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${Br(t.target_data)}
</header>

${t.stigs.map((i,l)=>$r(i,l)).join(`
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
${qr}
</script>
</body>
</html>`}function Br(t){let e=[t.host_name&&`Host: ${t.host_name}`,t.ip_address&&`IP: ${t.ip_address}`,t.fqdn&&`FQDN: ${t.fqdn}`,t.mac_address&&`MAC: ${t.mac_address}`,t.target_type&&`Type: ${t.target_type}`,t.role&&t.role!=="None"&&`Role: ${t.role}`].filter(Boolean);return e.length?`<div class="target-row">${e.map(i=>`<span class="chip">${ft(i)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function $r(t,e){let i=Fr(t.rules),l=n=>i.total?Math.round(n/i.total*100):0;return`
<section class="stig" data-idx="${e}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${ft(t.display_name||t.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${ft(t.release_info)}</span>
      <span class="chip">Version ${ft(t.version)}</span>
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
        ${t.rules.map(n=>Ur(n,t.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function Ur(t,e){let i=`${t.group_id} ${t.rule_version} ${t.rule_title} ${t.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${t.uuid}" data-stig="${e}"
    data-sev="${t.severity}" data-status="${t.status}" data-search="${ft(i)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${t.uuid}" data-stig="${e}" /></td>
  <td><span class="pill sev-${t.severity}">CAT ${Lr(t.severity)}</span></td>
  <td><code>${ft(t.group_id)}</code></td>
  <td><code>${ft(t.rule_version)}</code></td>
  <td class="td-title">${ft(t.rule_title)}</td>
  <td><select class="inline-status st-${t.status}" data-uuid="${t.uuid}" data-stig="${e}">
    <option value="not_reviewed" ${t.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${t.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${t.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${t.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var qr=`
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
`,Vr=`
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
`;var zr={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},jr={high:"CAT I",medium:"CAT II",low:"CAT III"};function bi(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function le(t){let i=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(bi).join(",")];for(let l of t.stigs)for(let n of l.rules)i.push([n.group_id,n.rule_id,n.rule_version,jr[n.severity]||n.severity,zr[n.status]||n.status,n.rule_title,n.finding_details,n.comments,n.ccis.join("; "),n.srg_id].map(bi).join(","));return i.join(`\r
`)}function et(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var Hr={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function X(t,e){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${et(t)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${et(e)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function Xr(t){let e=[X("Vuln_Num",t.group_id),X("Severity",t.severity),X("Group_Title",t.group_title),X("Rule_ID",t.rule_id),X("Rule_Ver",t.rule_version),X("Rule_Title",t.rule_title),X("Vuln_Discuss",t.discussion),X("IA_Controls",t.ia_controls),X("Check_Content",t.check_content),X("Fix_Text",t.fix_text),X("False_Positives",t.false_positives),X("False_Negatives",t.false_negatives),X("Documentable",t.documentable),X("Mitigations",t.mitigations),X("Potential_Impact",t.potential_impacts),X("Third_Party_Tools",t.third_party_tools),X("Mitigation_Control",t.mitigation_control),X("Responsibility",t.responsibility),X("Security_Override_Guidance",t.security_override_guidance),X("Check_Content_Ref",t.check_content_ref?.href||""),X("Weight",t.weight),X("Class",t.classification),X("STIGRef",t.stig_ref||""),X("TargetKey",t.target_key||"")];for(let i of t.ccis??[])e.push(X("CCI_REF",i));for(let i of t.legacy_ids??[])e.push(X("Legacy_ID",i));return`      <VULN>
${e.join(`
`)}
        <STATUS>${et(Hr[t.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${et(t.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${et(t.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function ht(t,e){return`          <SI_DATA>
            <SID_NAME>${et(t)}</SID_NAME>
            <SID_DATA>${et(e)}</SID_DATA>
          </SI_DATA>`}function Gr(t){let e=[ht("version",t.version),ht("classification","UNCLASSIFIED"),ht("customname",""),ht("stigid",t.stig_id),ht("description",""),ht("filename",""),ht("releaseinfo",t.release_info),ht("title",t.stig_name),ht("uuid",t.uuid),ht("notice","terms-of-use"),ht("source","")].join(`
`),i=t.rules.map(Xr).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${e}
        </STIG_INFO>
${i}
    </iSTIG>`}function de(t){let e=t.target_data,i=e.is_web_database?"true":"false",l=`  <ASSET>
    <ROLE>${et(e.role)}</ROLE>
    <ASSET_TYPE>${et(e.target_type)}</ASSET_TYPE>
    <HOST_NAME>${et(e.host_name)}</HOST_NAME>
    <HOST_IP>${et(e.ip_address)}</HOST_IP>
    <HOST_MAC>${et(e.mac_address)}</HOST_MAC>
    <HOST_FQDN>${et(e.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${et(e.comments)}</TARGET_COMMENT>
    <TECH_AREA>${et(e.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${i}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${et(e.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${et(e.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`,n=t.stigs.map(Gr).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${l}
  <STIGS>
${n}
  </STIGS>
</CHECKLIST>`}var Wr={high:"CAT I",medium:"CAT II",low:"CAT III"};function Ci(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function ue(t){let i=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(Ci).join(",")],l=1;for(let n of t.stigs){let o=n.rules.filter(c=>c.status==="open");for(let c of o)i.push([String(l++),c.group_id,c.rule_id,c.rule_version,Wr[c.severity]||c.severity,c.rule_title,`${n.stig_name} ${n.release_info}`,c.finding_details,"","","","","","","Ongoing",c.comments,c.ccis.join("; "),t.target_data.host_name].map(Ci).join(","))}return i.join(`\r
`)}var st=class t{constructor(e){this._context=e}static get activeDocumentUri(){return t._activeDocumentUri}static register(e){return q.window.registerCustomEditorProvider("stigViewer.cklbEditor",new t(e),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(e,i,l){i.webview.options={enableScripts:!0},(()=>{try{let u=JSON.parse(e.getText());i.webview.html=wi(u)}catch(u){i.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(u)}</pre></body></html>`}})(),t._activeDocumentUri=e.uri,i.onDidChangeViewState(()=>{i.active&&(t._activeDocumentUri=e.uri)});let o,c=q.workspace.onDidChangeTextDocument(u=>{u.document.uri.toString()===e.uri.toString()&&(clearTimeout(o),o=setTimeout(()=>{try{let d=JSON.parse(e.getText()),f=Object.fromEntries(d.stigs.flatMap(g=>g.rules.map(y=>[y.uuid,y])));i.webview.postMessage({type:"dataUpdate",rules:f})}catch{}},150))});i.webview.onDidReceiveMessage(async u=>{if(u.type==="saveRule"){let{ruleUuid:d,stigUuid:f,status:g,finding_details:y,comments:w}=u;try{let h=JSON.parse(e.getText()),T=h.stigs.find(A=>A.uuid===f)?.rules.find(A=>A.uuid===d);if(T){T.status=g,T.finding_details=y,T.comments=w;let A=new q.WorkspaceEdit,D=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));A.replace(e.uri,D,JSON.stringify(h,null,2)),await q.workspace.applyEdit(A)}}catch(h){q.window.showErrorMessage(`Save failed: ${h}`)}}if(u.type==="saveTargetData")try{let d=JSON.parse(e.getText());Object.assign(d.target_data,u.targetData);let f=new q.WorkspaceEdit,g=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));f.replace(e.uri,g,JSON.stringify(d,null,2)),await q.workspace.applyEdit(f),q.window.showInformationMessage("Target data updated")}catch(d){q.window.showErrorMessage(`Save target data failed: ${d}`)}if(u.type==="exportPoam")try{let d=JSON.parse(e.getText()),f=ue(d),g=d.stigs.reduce((h,I)=>h+I.rules.filter(T=>T.status==="open").length,0),y=ot.basename(e.uri.fsPath,".cklb")+"_POAM.csv",w=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),y)),filters:{CSV:["csv"]},title:`Export POA&M (${g} open findings)`});w&&(pe.writeFileSync(w.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported POA&M (${g} findings) \u2192 ${ot.basename(w.fsPath)}`))}catch(d){q.window.showErrorMessage(`POA&M export failed: ${d}`)}if(u.type==="exportCsv")try{let d=JSON.parse(e.getText()),f=le(d),g=ot.basename(e.uri.fsPath,".cklb")+".csv",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),g)),filters:{CSV:["csv"]},title:"Export Summary CSV"});y&&(pe.writeFileSync(y.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CSV \u2192 ${ot.basename(y.fsPath)}`))}catch(d){q.window.showErrorMessage(`CSV export failed: ${d}`)}if(u.type==="exportCkl")try{let d=JSON.parse(e.getText()),f=de(d),g=ot.basename(e.uri.fsPath,".cklb")+".ckl",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),g)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});y&&(pe.writeFileSync(y.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CKL \u2192 ${ot.basename(y.fsPath)}`))}catch(d){q.window.showErrorMessage(`CKL export failed: ${d}`)}if(u.type==="bulkSaveRules"){let{ruleUuids:d,stigUuid:f,status:g,comments:y}=u;try{let w=JSON.parse(e.getText()),h=w.stigs.find(D=>D.uuid===f);if(!h)return;let I=0;for(let D of h.rules)d.includes(D.uuid)&&(D.status=g,y&&(D.comments=y),I++);let T=new q.WorkspaceEdit,A=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));T.replace(e.uri,A,JSON.stringify(w,null,2)),await q.workspace.applyEdit(T),q.window.showInformationMessage(`Bulk updated ${I} rules \u2192 ${g.replace(/_/g," ")}`)}catch(w){q.window.showErrorMessage(`Bulk save failed: ${w}`)}}}),i.onDidDispose(()=>c.dispose())}};var Mt=$(require("vscode")),Ne=$(require("fs")),Rt=$(require("path")),Oe=$(Yt());var it=[];for(let t=0;t<256;++t)it.push((t+256).toString(16).slice(1));function Hn(t,e=0){return(it[t[e+0]]+it[t[e+1]]+it[t[e+2]]+it[t[e+3]]+"-"+it[t[e+4]]+it[t[e+5]]+"-"+it[t[e+6]]+it[t[e+7]]+"-"+it[t[e+8]]+it[t[e+9]]+"-"+it[t[e+10]]+it[t[e+11]]+it[t[e+12]]+it[t[e+13]]+it[t[e+14]]+it[t[e+15]]).toLowerCase()}var Xn=require("node:crypto"),ke=new Uint8Array(256),De=ke.length;function ii(){return De>ke.length-16&&((0,Xn.randomFillSync)(ke),De=0),ke.slice(De,De+=16)}var Gn=require("node:crypto"),ni={randomUUID:Gn.randomUUID};function Kr(t,e,i){t=t||{};let l=t.random??t.rng?.()??ii();if(l.length<16)throw new Error("Random bytes length must be >= 16");if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){if(i=i||0,i<0||i+16>e.length)throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);for(let n=0;n<16;++n)e[i+n]=l[n];return e}return Hn(l)}function Yr(t,e,i){return ni.randomUUID&&!e&&!t?ni.randomUUID():Kr(t,e,i)}var ut=Yr;function St(t){return t==null?[]:Array.isArray(t)?t:[t]}function ct(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?ct(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}function mt(t,e){let i=t.match(new RegExp(`<${e}>([\\s\\S]*?)<\\/${e}>`));return i?i[1].trim():""}function Jr(t){let e=t.match(/(V-\d+)/);return e?e[1]:t}function Qr(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}function Zr(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}function to(t){let e=t;if(e.Benchmark)return e.Benchmark;let i=t["data-stream-collection"];if(i?.component!=null)for(let l of St(i.component)){let n=l.Benchmark;if(n)return n}return null}async function Wn(t){let e=t.fsPath,i=Ne.readFileSync(e,"utf-8"),l=await(0,Oe.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[Oe.processors.stripPrefix]}),n=to(l);if(!n)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let c=(n.$||{}).id||"",u=ct(n.title),d=ct(n.version),f="";for(let a of St(n["plain-text"]))if((a?.$||{}).id==="release-info"){f=ct(a);break}let g=ut(),y=ut(),w=new Date().toISOString(),h=St(n.Group),I=[];for(let a of h){let C=a?.$||{},E=Jr(C.id||""),_=ct(a.title),m=ct(a.description);for(let b of St(a.Rule)){let k=b?.$||{},O=Qr(k.id||""),P=Zr(k.severity),L=k.weight||"10.0",R=ct(b.version),M=ct(b.title),F=ct(b.description),U=mt(F,"VulnDiscussion"),J=mt(F,"FalsePositives"),lt=mt(F,"FalseNegatives"),H=mt(F,"Documentable"),ze=mt(F,"Mitigations"),jt=mt(F,"SeverityOverrideGuidance"),Ht=mt(F,"PotentialImpacts"),bt=mt(F,"ThirdPartyTools"),Xt=mt(F,"MitigationControl"),je=mt(F,"Responsibility"),se=mt(F,"IAControls"),Gt=ct(b.fixtext),ae=St(b.check),p="",s={href:"",name:""},S=ae.find(W=>W["check-content"])||ae[0];if(S){p=ct(S["check-content"]);let W=St(S["check-content-ref"])[0];W?.$&&(s={href:W.$.href||"",name:W.$.name||""})}let j=[],G=[];for(let W of St(b.ident)){let Q=W?.$?.system||"",pt=ct(W);Q.includes("cci")?j.push(pt):Q.includes("legacy")&&G.push(pt)}let K=null,tt=null;for(let W of St(b.reference))W?.identifier&&(K=ct(W.identifier)),W?.title&&(tt=ct(W.title));let nt=ut();I.push({uuid:nt,stig_uuid:g,target_key:K,stig_ref:tt,group_id:E,rule_id:O,rule_id_src:O,weight:L,classification:"Unclassified",severity:P,rule_version:R,group_title:_,rule_title:M,fix_text:Gt,false_positives:J,false_negatives:lt,discussion:U,check_content:p,documentable:H,mitigations:ze,potential_impacts:Ht,third_party_tools:bt,mitigation_control:Xt,responsibility:je,security_override_guidance:jt,ia_controls:se,check_content_ref:s,legacy_ids:G,ccis:j,group_tree:[{id:E,title:_,description:m}],createdAt:w,updatedAt:w,STIGUuid:g,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:_})}}let T={stig_name:u,display_name:u,stig_id:c,release_info:f,version:d,uuid:g,reference_identifier:c,size:I.length,rules:I},D={title:u,id:y,stigs:[T],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},x=Rt.basename(e).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),v=Rt.join(Rt.dirname(e),x);Ne.writeFileSync(v,JSON.stringify(D,null,2));let r=Mt.Uri.file(v);await Mt.commands.executeCommand("vscode.openWith",r,"stigViewer.cklbEditor"),Mt.window.showInformationMessage(`Imported ${I.length} rules from XCCDF \u2192 ${x}`)}var Lt=$(require("vscode")),Me=$(require("fs")),Ft=$(require("path")),Re=$(Yt());function Pe(t){return t==null?[]:Array.isArray(t)?t:[t]}function Z(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Z(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var eo={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function io(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}async function Kn(t){let e=t.fsPath,i=Me.readFileSync(e,"utf-8"),n=(await(0,Re.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[Re.processors.stripPrefix]})).CHECKLIST;if(!n)throw new Error("No <CHECKLIST> element found in the CKL file.");let o=n.ASSET||{},c={target_type:Z(o.ASSET_TYPE)||"Computing",host_name:Z(o.HOST_NAME),ip_address:Z(o.HOST_IP),mac_address:Z(o.HOST_MAC),fqdn:Z(o.HOST_FQDN),comments:Z(o.TARGET_COMMENT),role:Z(o.ROLE)||"None",is_web_database:Z(o.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Z(o.TECH_AREA),web_db_site:Z(o.WEB_DB_SITE),web_db_instance:Z(o.WEB_DB_INSTANCE),classification:null},u=Pe(n.STIGS?.iSTIG),d=ut(),f=new Date().toISOString(),g=[];for(let A of u){let D=new Map;for(let m of Pe(A.STIG_INFO?.SI_DATA))D.set(Z(m.SID_NAME),Z(m.SID_DATA));let x=D.get("uuid")||ut(),v=D.get("title")||"",r=D.get("stigid")||"",a=D.get("version")||"",C=D.get("releaseinfo")||"",E=Pe(A.VULN),_=[];for(let m of E){let b=new Map,k=[],O=[];for(let U of Pe(m.STIG_DATA)){let J=Z(U.VULN_ATTRIBUTE),lt=Z(U.ATTRIBUTE_DATA);J==="CCI_REF"?k.push(lt):J==="Legacy_ID"&&lt?O.push(lt):b.set(J,lt)}let P=b.get("Vuln_Num")||"",L=b.get("Rule_ID")||"",R=ut(),M=Z(m.STATUS),F=eo[M]||"not_reviewed";_.push({uuid:R,stig_uuid:x,target_key:b.get("TargetKey")||null,stig_ref:b.get("STIGRef")||null,group_id:P,rule_id:L,rule_id_src:L,weight:b.get("Weight")||"10.0",classification:b.get("Class")||"Unclassified",severity:io(b.get("Severity")),rule_version:b.get("Rule_Ver")||"",group_title:b.get("Group_Title")||"",rule_title:b.get("Rule_Title")||"",fix_text:b.get("Fix_Text")||"",false_positives:b.get("False_Positives")||"",false_negatives:b.get("False_Negatives")||"",discussion:b.get("Vuln_Discuss")||"",check_content:b.get("Check_Content")||"",documentable:b.get("Documentable")||"",mitigations:b.get("Mitigations")||"",potential_impacts:b.get("Potential_Impact")||"",third_party_tools:b.get("Third_Party_Tools")||"",mitigation_control:b.get("Mitigation_Control")||"",responsibility:b.get("Responsibility")||"",security_override_guidance:b.get("Security_Override_Guidance")||"",ia_controls:b.get("IA_Controls")||"",check_content_ref:{href:b.get("Check_Content_Ref")||"",name:""},legacy_ids:O,ccis:k,group_tree:[{id:P,title:b.get("Group_Title")||"",description:""}],createdAt:f,updatedAt:f,STIGUuid:x,status:F,overrides:{},comments:Z(m.COMMENTS),finding_details:Z(m.FINDING_DETAILS),srg_id:b.get("Group_Title")||""})}g.push({stig_name:v,display_name:v,stig_id:r,release_info:C,version:a,uuid:x,reference_identifier:r,size:_.length,rules:_})}let y={title:g[0]?.stig_name||"Imported CKL",id:d,stigs:g,active:!0,mode:1,has_path:!0,target_data:c,cklb_version:"1"},w=Ft.basename(e,".ckl")+".cklb",h=Ft.join(Ft.dirname(e),w);Me.writeFileSync(h,JSON.stringify(y,null,2));let I=Lt.Uri.file(h);await Lt.commands.executeCommand("vscode.openWith",I,"stigViewer.cklbEditor");let T=g.reduce((A,D)=>A+D.rules.length,0);Lt.window.showInformationMessage(`Imported ${T} rules from CKL \u2192 ${w}`)}var Bt=$(require("vscode")),Jt=$(require("fs"));async function Yn(t){let e=await Bt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!e?.[0])return;let i=t;if(!i){let y=await Bt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!y?.[0])return;i=y[0]}let l=JSON.parse(Jt.readFileSync(e[0].fsPath,"utf-8")),n=JSON.parse(Jt.readFileSync(i.fsPath,"utf-8")),o=new Map;for(let y of l.stigs)for(let w of y.rules)o.set(w.rule_version,w);let c=0,u=0,d=0;for(let y of n.stigs)for(let w of y.rules){d++;let h=o.get(w.rule_version);h?(w.status=h.status,w.finding_details=h.finding_details,w.comments=h.comments,w.updatedAt=new Date().toISOString(),c++):u++}let f=new Set;for(let y of n.stigs)for(let w of y.rules)f.add(w.rule_version);let g=0;for(let y of o.keys())f.has(y)||g++;Jt.writeFileSync(i.fsPath,JSON.stringify(n,null,2)),await Bt.commands.executeCommand("vscode.openWith",i,"stigViewer.cklbEditor"),Bt.window.showInformationMessage(`Merge complete: ${c} carried forward, ${u} new rules, ${g} removed from old STIG`)}var gt=$(require("vscode")),Jn=$(require("fs")),Fe=class t{static async show(e){if(t._panel){t._panel.reveal(),await t._refresh();return}let i=gt.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",gt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=i,i.onDidDispose(()=>{t._panel=void 0}),i.webview.onDidReceiveMessage(async l=>{if(l.type==="openFile"){let n=gt.Uri.file(l.path);await gt.commands.executeCommand("vscode.openWith",n,"stigViewer.cklbEditor")}l.type==="refresh"&&await t._refresh()}),await t._refresh()}static async _refresh(){let e=t._panel;if(!e)return;let i=await gt.workspace.findFiles("**/*.cklb","**/node_modules/**"),l=[];for(let n of i)try{let o=Jn.readFileSync(n.fsPath,"utf-8"),c=JSON.parse(o);for(let u of c.stigs){let d={file:gt.workspace.asRelativePath(n),uri:n.fsPath,title:c.title,hostName:c.target_data.host_name||"\u2014",stigName:u.display_name||u.stig_name,total:u.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let f of u.rules)d[f.status]++,d[f.severity]++;l.push(d)}}catch{}e.webview.html=no(l)}};function no(t){let e={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let o of t)e.total+=o.total,e.open+=o.open,e.not_a_finding+=o.not_a_finding,e.not_reviewed+=o.not_reviewed,e.not_applicable+=o.not_applicable,e.high+=o.high,e.medium+=o.medium,e.low+=o.low;let i=o=>e.total?Math.round(o/e.total*100):0,l=i(e.not_a_finding+e.not_applicable),n=t.map(o=>{let c=o.total?Math.round((o.not_a_finding+o.not_applicable)/o.total*100):0;return`<tr class="row" data-path="${Le(o.uri)}">
      <td class="td-host">${Le(o.hostName)}</td>
      <td class="td-stig">${Le(o.stigName)}</td>
      <td class="td-n">${o.total}</td>
      <td class="td-n td-open">${o.open}</td>
      <td class="td-n td-naf">${o.not_a_finding}</td>
      <td class="td-n td-nr">${o.not_reviewed}</td>
      <td class="td-n td-na">${o.not_applicable}</td>
      <td class="td-n">${c}%</td>
      <td class="td-file">${Le(o.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${ro}</style>
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
    <tbody>${n}</tbody>
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
</body></html>`}function Le(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var ro=`
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
`;var $t=$(require("vscode")),ri=$(require("fs")),Qn={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Zn={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function oo(t){return t==="high"?"I":t==="medium"?"II":"III"}var Be=class{static async show(e){let i=e;if(!i){let x=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!x?.[0])return;i=x[0]}let l=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!l?.[0])return;let n=JSON.parse(ri.readFileSync(i.fsPath,"utf-8")),o=JSON.parse(ri.readFileSync(l[0].fsPath,"utf-8")),c=new Map;for(let x of n.stigs)for(let v of x.rules)c.set(v.rule_version,v);let u=new Map;for(let x of o.stigs)for(let v of x.rules)u.set(v.rule_version,v);let d=[],f=new Set([...c.keys(),...u.keys()]);for(let x of f){let v=c.get(x),r=u.get(x);if(v&&r){let a="unchanged";v.status!==r.status&&(a=Zn[r.status]>Zn[v.status]?"improved":"regression"),d.push({ruleVersion:x,groupId:r.group_id,ruleTitle:r.rule_title,severity:r.severity,statusA:v.status,statusB:r.status,change:a})}else r&&!v?d.push({ruleVersion:x,groupId:r.group_id,ruleTitle:r.rule_title,severity:r.severity,statusA:"",statusB:r.status,change:"new"}):v&&!r&&d.push({ruleVersion:x,groupId:v.group_id,ruleTitle:v.rule_title,severity:v.severity,statusA:v.status,statusB:"",change:"removed"})}let g={regression:0,new:1,improved:2,removed:3,unchanged:4};d.sort((x,v)=>g[x.change]-g[v.change]);let y=d.filter(x=>x.change==="regression").length,w=d.filter(x=>x.change==="improved").length,h=d.filter(x=>x.change==="new").length,I=d.filter(x=>x.change==="removed").length,T=d.filter(x=>x.change==="unchanged").length,A=d.filter(x=>x.change!=="unchanged"),D=$t.window.createWebviewPanel("stigViewer.diff","STIG Diff",$t.ViewColumn.One,{enableScripts:!0});D.webview.html=so(i.fsPath,l[0].fsPath,A,d,{regressions:y,improvements:w,newRules:h,removed:I,unchanged:T})}};function Qt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function so(t,e,i,l,n){let o=t.split("/").pop()||t,c=e.split("/").pop()||e,u={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},d={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},f=g=>g.map(y=>`<tr class="row ${d[y.change]}" data-change="${y.change}">
    <td><span class="pill sev-${y.severity}">CAT ${oo(y.severity)}</span></td>
    <td><code>${Qt(y.groupId)}</code></td>
    <td><code>${Qt(y.ruleVersion)}</code></td>
    <td class="td-title">${Qt(y.ruleTitle)}</td>
    <td>${y.statusA?`<span class="pill st-${y.statusA}">${Qn[y.statusA]||y.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${y.statusB?`<span class="pill st-${y.statusB}">${Qn[y.statusB]||y.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${d[y.change]}">${u[y.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${ao}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${Qt(o)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${Qt(c)}</span>
  </div>
</header>

<div class="cards">
  <div class="card card-reg"><div class="card-n">${n.regressions}</div><div class="card-l">Regressions</div></div>
  <div class="card card-imp"><div class="card-n">${n.improvements}</div><div class="card-l">Improvements</div></div>
  <div class="card card-new"><div class="card-n">${n.newRules}</div><div class="card-l">New Rules</div></div>
  <div class="card card-rem"><div class="card-n">${n.removed}</div><div class="card-l">Removed</div></div>
  <div class="card card-unc"><div class="card-n">${n.unchanged}</div><div class="card-l">Unchanged</div></div>
</div>

<div class="filters">
  <label><input type="checkbox" id="showUnchanged" /> Show ${n.unchanged} unchanged rules</label>
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
      ${f(i)}
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
</body></html>`}var ao=`
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
`;var Ut=$(require("vscode")),Zt=$(require("fs")),Ue=$(Yt());function tr(t){return t==null?[]:Array.isArray(t)?t:[t]}function $e(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?$e(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var co={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function lo(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}async function er(t){let e=t;if(!e){let y=await Ut.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!y?.[0])return;e=y[0]}let i=await Ut.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!i?.[0])return;let l=JSON.parse(Zt.readFileSync(e.fsPath,"utf-8")),n=Zt.readFileSync(i[0].fsPath,"utf-8"),o=await(0,Ue.parseStringPromise)(n,{explicitArray:!1,tagNameProcessors:[Ue.processors.stripPrefix]}),c=null;if(o.TestResult?c=o.TestResult:o.Benchmark?.TestResult&&(c=o.Benchmark.TestResult,Array.isArray(c)&&(c=c[c.length-1])),!c)throw new Error("No <TestResult> element found in the XCCDF results file.");let u=new Map;for(let y of tr(c["rule-result"])){let w=y?.$?.idref||"",h=lo(w),I=$e(y.result).toLowerCase(),T=co[I]||"not_reviewed",A="",D=tr(y.check)[0];D&&(A=$e(D["check-content"])),!A&&y.message&&(A=$e(y.message)),u.set(h,{status:T,detail:A})}let d=0,f=0,g=new Date().toISOString();for(let y of l.stigs)for(let w of y.rules){let h=u.get(w.rule_id);h?(w.status=h.status,h.detail&&(w.finding_details=h.detail),w.updatedAt=g,d++):f++}Zt.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await Ut.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),Ut.window.showInformationMessage(`SCAP import: ${d} rules updated, ${f} unmatched`)}var yt=$(require("vscode")),wt=$(require("fs")),Nt=$(require("path"));function uo(t){let e=Nt.join(__dirname,"..","scan-patterns.json"),i=t||e;if(!wt.existsSync(i))throw new Error(`Scan patterns file not found: ${i}`);return JSON.parse(wt.readFileSync(i,"utf-8"))}function po(t,e){let i=[e.rule_title,e.discussion,e.check_content,e.group_title].join(" ").toLowerCase();return t.ruleKeywords.some(l=>i.includes(l.toLowerCase()))}function ir(t){let e=t.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${e}$`)}function oi(t,e){let i=t.replace(/\\/g,"/");return e.some(l=>{if(l.includes("{")){let n=l.match(/^(.*)\{([^}]+)\}(.*)$/);if(n){let[,o,c,u]=n;return c.split(",").some(d=>{let f=o+d.trim()+u;return ir(f).test(i)})}}return ir(l).test(i)})}function fo(t,e){let i=[];function l(n){let o;try{o=wt.readdirSync(n,{withFileTypes:!0})}catch{return}for(let c of o){let u=Nt.join(n,c.name),d=Nt.relative(t,u);oi(d,e)||(c.isDirectory()?oi(d+"/",e)||l(u):c.isFile()&&i.push(u))}}return l(t),i}function ho(t,e,i){let l;try{let c=wt.readFileSync(t);if(c.includes(0))return[];l=c.toString("utf-8")}catch{return[]}let n=l.split(`
`),o=[];for(let c of e){let u=i?"g":"gi",d;try{d=new RegExp(c,u)}catch{continue}for(let f=0;f<n.length;f++)d.test(n[f])&&o.push({line:f+1,content:n[f].trim().substring(0,200)}),d.lastIndex=0}return o}async function nr(t){let e=t;if(!e){let d=await yt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!d?.[0])return;e=d[0]}let i=await yt.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!i?.[0])return;let l=await yt.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!l)return;let n;if(l.includes("custom")){let d=await yt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!d?.[0])return;n=d[0].fsPath}let o=uo(n),c=JSON.parse(wt.readFileSync(e.fsPath,"utf-8")),u=i[0].fsPath;await yt.window.withProgress({location:yt.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(d,f)=>{d.report({message:"Discovering files..."});let g=fo(u,o.excludeGlobs);if(f.isCancellationRequested)return;let y=[],w=new Date().toISOString(),h=0,I=0,T=0,A=0,D=c.stigs.reduce((v,r)=>v+r.rules.length,0);for(let v of c.stigs)for(let r of v.rules){if(f.isCancellationRequested)return;let a=o.scanPatterns.filter(P=>po(P,r));if(a.length===0)continue;h++,d.report({message:`Scanning ${r.group_id} (${h}/${D})`,increment:1/D*100});let C=[],E=[];for(let P of a){let L=g.filter(M=>{let F=Nt.relative(u,M);return oi(F,P.fileGlobs)}),R=!1;for(let M of L){if(f.isCancellationRequested)return;let F=ho(M,P.patterns,P.caseSensitive);if(F.length>0){R=!0;let U=Nt.relative(u,M);for(let J of F)C.push({file:U,line:J.line,content:J.content,patternId:P.id})}}R&&E.push(P.name)}let _=a.some(P=>P.matchMeansOpen),m=a.filter(P=>P.matchMeansOpen),b=C.filter(P=>m.some(L=>L.id===P.patternId)),k,O;if(b.length>0){k="open",T++;let P=a.find(L=>L.findingDetailOverride&&C.some(R=>R.patternId===L.id));if(P?.findingDetailOverride){let L=C.filter(R=>R.patternId===P.id).slice(0,20).map(R=>`  ${R.file}:${R.line} \u2014 ${R.content}`).join(`
`);O=P.findingDetailOverride.replace("{count}",String(C.filter(R=>R.patternId===P.id).length)).replace("{matches}",L).replace("{file}",C[0]?.file||"")}else{let L=b.slice(0,20).map(M=>`  ${M.file}:${M.line} \u2014 ${M.content}`).join(`
`),R=b.length>20?`
  ... and ${b.length-20} more`:"";O=`[AUTO-SCAN] Found ${b.length} potential issue(s) matching: ${E.join(", ")}

${L}${R}`}}else if(_)k="not_a_finding",A++,O=`[AUTO-SCAN] Scanned ${g.length} files for: ${a.map(P=>P.name).join(", ")}. No issues detected.`;else{let P=C.slice(0,10);if(P.length>0){k="not_reviewed";let L=a.find(R=>R.findingDetailOverride);L?.findingDetailOverride?O=L.findingDetailOverride.replace("{count}",String(C.length)).replace("{matches}",P.map(R=>R.file).join(", ")).replace("{file}",P[0]?.file||""):O=`[AUTO-SCAN] Found relevant files: ${P.map(R=>R.file).join(", ")}. Manual review required.`}else continue}r.status=k,r.finding_details=O,r.updatedAt=w,I++}wt.writeFileSync(e.fsPath,JSON.stringify(c,null,2)),await yt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let x=D-I;yt.window.showInformationMessage(`Scan complete: ${I} rules evaluated (${T} open, ${A} not a finding, ${x} unmatched \u2014 review manually)`)})}var qt=$(require("vscode")),te=$(require("fs"));var si=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function mo(t,e){let i=[];if(t.taxa)for(let n of t.taxa){let o=ai(n.id);o&&i.push(o)}if(e?.relationships){for(let n of e.relationships)if(n.target.toolComponent?.name?.toUpperCase()==="CWE"||n.target.id.startsWith("CWE-")){let o=ai(n.target.id);o&&i.push(o)}}if(e?.properties?.tags)for(let n of e.properties.tags){let o=n.match(/cwe[/-](\d+)/i);o&&i.push(parseInt(o[1],10))}let l=ai(t.ruleId);return l&&i.push(l),[...new Set(i)]}function ai(t){let e=t.match(/(?:CWE-?)(\d+)/i);return e?parseInt(e[1],10):null}async function rr(t){let e=t;if(!e){let h=await qt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!h?.[0])return;e=h[0]}let i=await qt.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!i?.length)return;let l=JSON.parse(te.readFileSync(e.fsPath,"utf-8")),n=new Date().toISOString(),o=[];for(let h of l.stigs)o.push(...h.rules);let c=new Map,u=0,d=0,f=new Set,g=[];for(let h of i){let I=JSON.parse(te.readFileSync(h.fsPath,"utf-8"));for(let T of I.runs){let A=T.tool.driver.name;g.includes(A)||g.push(A);let D=new Map;if(T.tool.driver.rules)for(let x of T.tool.driver.rules)D.set(x.id,x);for(let x of T.results){u++;let v=D.get(x.ruleId),r=mo(x,v);if(r.length===0)continue;let a=x.locations?.[0]?.physicalLocation,C=a?.artifactLocation?.uri||"",E=a?.region?.startLine||0,_=!1;for(let m of r){let b=si.get(m);if(!b){f.add(m);continue}for(let k of o){let O=`${k.rule_title} ${k.discussion} ${k.check_content}`.toLowerCase();b.keywords.some(P=>O.includes(P.toLowerCase()))&&(c.has(k.uuid)||c.set(k.uuid,[]),c.get(k.uuid).push({tool:A,cwe:m,file:C.replace(/^file:\/\//,""),line:E,message:x.message.text.substring(0,300)}),_=!0)}}_&&d++}}}let y=0;for(let[h,I]of c){let T=o.find(x=>x.uuid===h);if(!T)continue;T.status="open",y++;let A=new Map;for(let x of I){let v=`CWE-${x.cwe}`;A.has(v)||A.set(v,[]),A.get(v).push(x)}let D=[`[SARIF IMPORT] ${I.length} finding(s) from: ${g.join(", ")}
`];for(let[x,v]of A){let r=si.get(parseInt(x.replace("CWE-","")))?.name||x;D.push(`${x} \u2014 ${r}:`);let a=v.slice(0,10);for(let C of a)D.push(`  ${C.file}:${C.line} \u2014 ${C.message}`);v.length>10&&D.push(`  ... and ${v.length-10} more`)}T.finding_details=D.join(`
`),T.updatedAt=n}te.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await qt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let w=`SARIF import: ${u} findings processed, ${d} mapped to ${y} rules`;f.size>0&&(w+=` (${f.size} unmapped CWEs: ${[...f].slice(0,5).map(h=>`CWE-${h}`).join(", ")}${f.size>5?"...":""})`),qt.window.showInformationMessage(w)}var Et=$(require("vscode")),ee=$(require("fs"));function go(t){let e=[];if(!t.vulnerabilities)return e;for(let[i,l]of Object.entries(t.vulnerabilities))for(let n of l.via)typeof n=="object"&&e.push({name:i,severity:n.severity,title:n.title,url:n.url,cwe:n.cwe?.[0],fixAvailable:l.fixAvailable?"Yes":"No"});return e}function or(t){let e=[],i=Array.isArray(t)?t:t.dependencies||[];for(let l of i)if(l.vulns?.length)for(let n of l.vulns)e.push({name:l.name,version:l.version,id:n.id,description:n.description,fixAvailable:n.fix_versions?.length?n.fix_versions.join(", "):"No"});return e}function yo(t){if(t.vulnerabilities&&typeof t.vulnerabilities=="object")return{entries:go(t),source:"npm audit"};if(Array.isArray(t)&&t[0]?.vulns!==void 0)return{entries:or(t),source:"pip-audit"};if(t.dependencies&&Array.isArray(t.dependencies))return{entries:or(t),source:"pip-audit"};if(Array.isArray(t))return{entries:t.map(e=>({name:e.name||e.package||e.module||"",version:e.version||e.installed_version||"",severity:e.severity||e.level||"",title:e.title||e.advisory||e.description||"",id:e.id||e.cve||e.advisory_id||"",url:e.url||e.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function sr(t){let e=t;if(!e){let g=await Et.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!g?.[0])return;e=g[0]}let i=await Et.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!i?.[0])return;let l=JSON.parse(ee.readFileSync(e.fsPath,"utf-8")),n=JSON.parse(ee.readFileSync(i[0].fsPath,"utf-8")),{entries:o,source:c}=yo(n);if(o.length===0){Et.window.showInformationMessage(`No vulnerabilities found in ${c} output.`);return}let u=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],d=new Date().toISOString(),f=0;for(let g of l.stigs)for(let y of g.rules){let w=`${y.rule_title} ${y.discussion} ${y.check_content}`.toLowerCase();if(!u.some(x=>w.includes(x)))continue;f++,y.status="open",y.updatedAt=d;let I={};for(let x of o){let v=(x.severity||"unknown").toLowerCase();I[v]=(I[v]||0)+1}let T=Object.entries(I).map(([x,v])=>`${v} ${x}`).join(", "),A=[`[AUDIT IMPORT] ${o.length} vulnerable dependencies found via ${c}`,`Severity breakdown: ${T}
`],D=o.slice(0,25);for(let x of D){let v=[x.name];x.version&&v.push(`v${x.version}`),x.severity&&v.push(`[${x.severity}]`),x.title&&v.push(`\u2014 ${x.title}`),x.id&&v.push(`(${x.id})`),x.fixAvailable&&x.fixAvailable!=="No"&&v.push(`fix: ${x.fixAvailable}`),A.push(`  ${v.join(" ")}`)}o.length>25&&A.push(`  ... and ${o.length-25} more`),y.finding_details=A.join(`
`)}ee.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await Et.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),f>0?Et.window.showInformationMessage(`Imported ${o.length} vulnerabilities from ${c} \u2192 ${f} STIG rule(s) marked open`):Et.window.showWarningMessage(`Imported ${o.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var Tt=$(require("vscode")),ne=$(require("fs")),vo={"not reviewed":"not_reviewed",not_reviewed:"not_reviewed",open:"open","not a finding":"not_a_finding",not_a_finding:"not_a_finding",notafinding:"not_a_finding","not applicable":"not_applicable",not_applicable:"not_applicable",notapplicable:"not_applicable"};function wo(t){t.charCodeAt(0)===65279&&(t=t.slice(1));let e=[],i=[],l="",n=!1,o=0;for(;o<t.length;){let c=t[o];if(n){if(c==='"'){if(t[o+1]==='"'){l+='"',o+=2;continue}n=!1,o++;continue}l+=c,o++;continue}if(c==='"'){n=!0,o++;continue}if(c===","){i.push(l),l="",o++;continue}if(c==="\r"){o++;continue}if(c===`
`){i.push(l),e.push(i),i=[],l="",o++;continue}l+=c,o++}return(l.length>0||i.length>0)&&(i.push(l),e.push(i)),e}function ar(t){return t.toLowerCase().replace(/[\s_-]+/g,"")}function ie(t,...e){let i=t.map(ar);for(let l of e){let n=i.indexOf(ar(l));if(n!==-1)return n}return-1}async function cr(t){let e=t;if(!e){let E=await Tt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update from CSV"});if(!E?.[0])return;e=E[0]}let i=await Tt.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select CSV file to merge into checklist"});if(!i?.[0])return;let l=ne.readFileSync(i[0].fsPath,"utf-8"),n=wo(l);if(n.length<2){Tt.window.showErrorMessage("CSV is empty or has no data rows.");return}let o=n[0],c=ie(o,"Vuln ID","VulnID","group_id"),u=ie(o,"Rule ID","RuleID","rule_id"),d=ie(o,"Status"),f=ie(o,"Finding Details","FindingDetails","finding_details"),g=ie(o,"Comments");if(c===-1&&u===-1){Tt.window.showErrorMessage('CSV must contain a "Vuln ID" or "Rule ID" column to match rules.');return}if(d===-1&&f===-1&&g===-1){Tt.window.showErrorMessage('CSV must contain at least one of: "Status", "Finding Details", or "Comments".');return}let y=[];for(let E=1;E<n.length;E++){let _=n[E];_.every(m=>m.trim()==="")||y.push({vulnId:c!==-1?(_[c]||"").trim():"",ruleId:u!==-1?(_[u]||"").trim():"",status:d!==-1?(_[d]||"").trim():"",findingDetails:f!==-1&&_[f]||"",comments:g!==-1&&_[g]||"",rowNumber:E+1})}let w=JSON.parse(ne.readFileSync(e.fsPath,"utf-8")),h=new Map,I=new Map;for(let E of w.stigs)for(let _ of E.rules)_.group_id&&h.set(_.group_id,_),_.rule_id&&I.set(_.rule_id,_);let T=new Date().toISOString(),A=0,D=0,x=0,v=[],r=[],a=new Set;for(let E of y){let _;if(E.vulnId&&(_=h.get(E.vulnId)),!_&&E.ruleId&&(_=I.get(E.ruleId)),!_){D++;let b=E.vulnId||E.ruleId||`(row ${E.rowNumber})`;v.length<10&&v.push(b);continue}a.has(_.uuid),a.add(_.uuid);let m=!1;if(d!==-1&&E.status!==""){let b=vo[E.status.toLowerCase()];b?_.status!==b&&(_.status=b,m=!0):(x++,r.length<5&&!r.includes(E.status)&&r.push(E.status))}f!==-1&&_.finding_details!==E.findingDetails&&(_.finding_details=E.findingDetails,m=!0),g!==-1&&_.comments!==E.comments&&(_.comments=E.comments,m=!0),m&&(_.updatedAt=T,A++)}ne.writeFileSync(e.fsPath,JSON.stringify(w,null,2)),await Tt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let C=`CSV import: ${A} rule(s) updated, ${D} unmatched`;x>0&&(C+=`, ${x} row(s) had unrecognized Status (${r.join(", ")})`),D>0&&v.length>0&&(C+=` \u2014 first unmatched: ${v.slice(0,5).join(", ")}${v.length>5?"\u2026":""}`),Tt.window.showInformationMessage(C)}var At=$(require("vscode")),re=$(require("fs")),Dt=$(require("path")),lr=$(require("zlib"));var ci=class{constructor(){this.files=[]}addFile(e,i){let l=typeof i=="string"?Buffer.from(i,"utf-8"):i,n=lr.deflateRawSync(l),o=this.crc32(l);this.files.push({name:e,data:l,crc:o,compressedData:n})}build(){let e=[],i=[],l=0;for(let u of this.files){let d=Buffer.from(u.name,"utf-8"),f=Buffer.alloc(30+d.length);f.writeUInt32LE(67324752,0),f.writeUInt16LE(20,4),f.writeUInt16LE(0,6),f.writeUInt16LE(8,8),f.writeUInt16LE(0,10),f.writeUInt16LE(0,12),f.writeUInt32LE(u.crc,14),f.writeUInt32LE(u.compressedData.length,18),f.writeUInt32LE(u.data.length,22),f.writeUInt16LE(d.length,26),f.writeUInt16LE(0,28),d.copy(f,30);let g=Buffer.alloc(46+d.length);g.writeUInt32LE(33639248,0),g.writeUInt16LE(20,4),g.writeUInt16LE(20,6),g.writeUInt16LE(0,8),g.writeUInt16LE(8,10),g.writeUInt16LE(0,12),g.writeUInt16LE(0,14),g.writeUInt32LE(u.crc,16),g.writeUInt32LE(u.compressedData.length,20),g.writeUInt32LE(u.data.length,24),g.writeUInt16LE(d.length,28),g.writeUInt16LE(0,30),g.writeUInt16LE(0,32),g.writeUInt16LE(0,34),g.writeUInt16LE(0,36),g.writeUInt32LE(0,38),g.writeUInt32LE(l,42),d.copy(g,46),e.push(f,u.compressedData),i.push(g),l+=f.length+u.compressedData.length}let n=l,o=0;for(let u of i)e.push(u),o+=u.length;let c=Buffer.alloc(22);return c.writeUInt32LE(101010256,0),c.writeUInt16LE(0,4),c.writeUInt16LE(0,6),c.writeUInt16LE(this.files.length,8),c.writeUInt16LE(this.files.length,10),c.writeUInt32LE(o,12),c.writeUInt32LE(n,16),c.writeUInt16LE(0,20),e.push(c),Buffer.concat(e)}crc32(e){let i=4294967295;for(let l=0;l<e.length;l++){i^=e[l];for(let n=0;n<8;n++)i=i>>>1^(i&1?3988292384:0)}return(i^4294967295)>>>0}};function bo(t){let e=[];e.push("STIG ASSESSMENT EVIDENCE PACKAGE"),e.push(`================================
`),e.push(`Generated: ${new Date().toISOString()}`),e.push(`Title: ${t.title}`),e.push(`Host: ${t.target_data.host_name||"N/A"}`),e.push(`IP: ${t.target_data.ip_address||"N/A"}`),e.push(`FQDN: ${t.target_data.fqdn||"N/A"}
`);for(let i of t.stigs){let l={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let u of i.rules)l[u.status]++,l[u.severity]++;let n=i.rules.length,o=n?Math.round((l.not_a_finding+l.not_applicable)/n*100):0;e.push(`STIG: ${i.stig_name}`),e.push(`  ${i.release_info} | Version ${i.version}`),e.push(`  Total Rules: ${n}`),e.push(`  Open: ${l.open} | Not a Finding: ${l.not_a_finding} | Not Reviewed: ${l.not_reviewed} | Not Applicable: ${l.not_applicable}`),e.push(`  CAT I: ${l.high} | CAT II: ${l.medium} | CAT III: ${l.low}`),e.push(`  Completion: ${o}%
`);let c=i.rules.filter(u=>u.status==="open");if(c.length>0){e.push("  OPEN FINDINGS:");for(let u of c){let d=u.severity==="high"?"I":u.severity==="medium"?"II":"III";if(e.push(`    [CAT ${d}] ${u.group_id} \u2014 ${u.rule_title}`),u.finding_details){let f=u.finding_details.substring(0,200).replace(/\n/g,`
      `);e.push(`      ${f}`)}}e.push("")}}return e.push(`
PACKAGE CONTENTS:`),e.push("  checklist.cklb    \u2014 Full checklist in JSON format"),e.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),e.push("  summary.csv       \u2014 All rules with status and findings"),e.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),e.push("  report.txt        \u2014 This summary report"),e.join(`
`)}async function dr(t){let e=t;if(!e){let g=await At.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!g?.[0])return;e=g[0]}let i=JSON.parse(re.readFileSync(e.fsPath,"utf-8")),l=Dt.basename(e.fsPath,".cklb"),n=new ci;if(n.addFile("checklist.cklb",JSON.stringify(i,null,2)),n.addFile("checklist.ckl",de(i)),n.addFile("summary.csv",le(i)),n.addFile("poam.csv",ue(i)),n.addFile("report.txt",bo(i)),(await At.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let g=await At.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(g)for(let y of g){let w="evidence/"+Dt.basename(y.fsPath);n.addFile(w,re.readFileSync(y.fsPath))}}let c=`${l}_evidence_${new Date().toISOString().slice(0,10)}.zip`,u=await At.window.showSaveDialog({defaultUri:At.Uri.file(Dt.join(Dt.dirname(e.fsPath),c)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!u)return;re.writeFileSync(u.fsPath,n.build());let d=i.stigs.reduce((g,y)=>g+y.rules.length,0),f=i.stigs.reduce((g,y)=>g+y.rules.filter(w=>w.status==="open").length,0);At.window.showInformationMessage(`Evidence package saved: ${d} rules, ${f} open findings \u2192 ${Dt.basename(u.fsPath)}`)}var rt=$(require("vscode")),zt=$(require("fs")),Ot=$(require("path"));var qe=$(Yt()),pr={"CCI-000005":{control:"AC-2",title:"Account Management",definition:"The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts."},"CCI-000009":{control:"AC-2",title:"Account Management",definition:"The organization reviews information system accounts for compliance with account management requirements."},"CCI-000010":{control:"AC-2",title:"Account Management",definition:"The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts."},"CCI-000012":{control:"AC-2",title:"Account Management",definition:"The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions."},"CCI-000015":{control:"AC-2 (1)",title:"Account Management | Automated System Account Management",definition:"The organization employs automated mechanisms to support the management of information system accounts."},"CCI-000017":{control:"AC-2 (2)",title:"Account Management | Removal of Temporary/Emergency Accounts",definition:"The information system automatically removes or disables temporary and emergency accounts after a defined time period."},"CCI-000018":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after a defined time period."},"CCI-000019":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The organization defines the time period after which the information system automatically disables inactive accounts."},"CCI-000020":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after the organization-defined time period."},"CCI-000023":{control:"AC-2 (4)",title:"Account Management | Automated Audit Actions",definition:"The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles."},"CCI-000032":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources."},"CCI-000033":{control:"AC-3 (3)",title:"Access Enforcement | Mandatory Access Control",definition:"The information system enforces organization-defined mandatory access control policy."},"CCI-000038":{control:"AC-6",title:"Least Privilege",definition:"The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks."},"CCI-000039":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions and security-relevant information."},"CCI-000040":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions."},"CCI-000044":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period."},"CCI-000045":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The organization defines the number of consecutive invalid logon attempts allowed."},"CCI-000047":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded."},"CCI-000048":{control:"AC-8",title:"System Use Notification",definition:"The information system displays an approved system use notification message or banner before granting access."},"CCI-000050":{control:"AC-8",title:"System Use Notification",definition:"The information system retains the notification message or banner on the screen until users acknowledge the usage conditions."},"CCI-000054":{control:"AC-10",title:"Concurrent Session Control",definition:"The information system limits the number of concurrent sessions for each account to an organization-defined number."},"CCI-000056":{control:"AC-11",title:"Session Lock",definition:"The information system initiates a session lock after the organization-defined time period of inactivity."},"CCI-000057":{control:"AC-11",title:"Session Lock",definition:"The information system provides the capability for users to initiate a session lock for display devices."},"CCI-000058":{control:"AC-11 (1)",title:"Session Lock | Pattern-Hiding Displays",definition:"The information system conceals, via the session lock, information previously visible on the display."},"CCI-000060":{control:"AC-11",title:"Session Lock",definition:"The organization defines the time period of inactivity after which the information system initiates a session lock."},"CCI-000068":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions."},"CCI-000070":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions."},"CCI-000082":{control:"AC-17 (9)",title:"Remote Access | Disconnect/Disable Access",definition:"The organization provides the capability to expeditiously disconnect or disable remote access."},"CCI-000213":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies."},"CCI-001084":{control:"SC-3",title:"Security Function Isolation",definition:"The information system isolates security functions from nonsecurity functions."},"CCI-000126":{control:"AU-2",title:"Audit Events",definition:"The organization determines that the information system is capable of auditing organization-defined auditable events."},"CCI-000130":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes what type of event occurred."},"CCI-000131":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes when an event occurred."},"CCI-000132":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes where the event occurred."},"CCI-000133":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the source of the event."},"CCI-000134":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the outcome of the event."},"CCI-000135":{control:"AU-3 (1)",title:"Content of Audit Records | Additional Audit Information",definition:"The information system generates audit records containing organization-defined additional, more detailed information."},"CCI-000136":{control:"AU-3 (2)",title:"Content of Audit Records | Centralized Management",definition:"The information system provides centralized management and configuration of the content to be captured in audit records."},"CCI-000139":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system alerts designated personnel in the event of an audit processing failure."},"CCI-000140":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system takes organization-defined actions in the event of an audit processing failure."},"CCI-000154":{control:"AU-6",title:"Audit Review, Analysis, and Reporting",definition:"The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity."},"CCI-000158":{control:"AU-7",title:"Audit Reduction and Report Generation",definition:"The information system provides an audit reduction and report generation capability."},"CCI-000162":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized access."},"CCI-000163":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized modification."},"CCI-000164":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized deletion."},"CCI-000166":{control:"AU-10",title:"Non-repudiation",definition:"The information system protects against an individual falsely denying having performed a particular action."},"CCI-000167":{control:"AU-10",title:"Non-repudiation",definition:"The information system provides irrefutable evidence that a specific action was performed."},"CCI-000169":{control:"AU-12",title:"Audit Generation",definition:"The information system provides audit record generation capability for the auditable events defined."},"CCI-000171":{control:"AU-12",title:"Audit Generation",definition:"The information system allows designated personnel to select which auditable events are to be audited by specific components."},"CCI-000172":{control:"AU-12 (3)",title:"Audit Generation | Changes by Authorized Individuals",definition:"The information system provides the capability for authorized individuals to change the auditing to be performed on specific components."},"CCI-001464":{control:"AU-4",title:"Audit Storage Capacity",definition:"The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded."},"CCI-001487":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information and audit tools from unauthorized access, modification, and deletion."},"CCI-001493":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users."},"CCI-001494":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only a defined subset of privileged users."},"CCI-001495":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization defines the subset of privileged users authorized for audit management."},"CCI-001496":{control:"AU-9 (5)",title:"Protection of Audit Information | Dual Authorization",definition:"The organization enforces dual authorization for movement and/or deletion of organization-defined audit information."},"CCI-001851":{control:"AU-4 (1)",title:"Audit Storage Capacity | Transfer to Alternate Storage",definition:"The information system off-loads audit records onto a different system or media."},"CCI-001855":{control:"AU-5 (1)",title:"Response to Audit Processing Failures | Audit Storage Capacity",definition:"The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage."},"CCI-001857":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The information system provides an alert in real-time to organization-defined personnel when audit failure events occur."},"CCI-001858":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The organization defines the audit failure events requiring real-time alerts."},"CCI-000345":{control:"CM-5",title:"Access Restrictions for Change",definition:"The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system."},"CCI-000363":{control:"CM-6",title:"Configuration Settings",definition:"The organization defines security configuration settings for the information system components."},"CCI-000366":{control:"CM-6",title:"Configuration Settings",definition:"The organization ensures that the information system components comply with organization-defined configuration settings."},"CCI-000370":{control:"CM-6",title:"Configuration Settings",definition:"The organization establishes and documents configuration settings for information technology products employed within the information system."},"CCI-000379":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities."},"CCI-000381":{control:"CM-7",title:"Least Functionality",definition:"The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services."},"CCI-000382":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services."},"CCI-001749":{control:"CM-5 (3)",title:"Access Restrictions for Change | Signed Components",definition:"The information system prevents the installation of software and firmware components without verification that the component has been digitally signed."},"CCI-001812":{control:"CM-11",title:"User-Installed Software",definition:"The organization defines policies governing the installation of software by users."},"CCI-001813":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system enforces access restrictions and supports auditing of the enforcement actions."},"CCI-001814":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system supports auditing of the enforcement actions."},"CCI-000185":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system validates certificates by constructing and verifying a certification path."},"CCI-000186":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system enforces authorized access to the corresponding private key."},"CCI-000187":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system maps the authenticated identity to the account of the individual or group."},"CCI-000192":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of uppercase characters used."},"CCI-000193":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of lowercase characters used."},"CCI-000194":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of numeric characters used."},"CCI-000195":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of special characters used."},"CCI-000196":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, stores only cryptographically-protected passwords."},"CCI-000197":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, transmits only cryptographically-protected passwords."},"CCI-000198":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password lifetime restrictions."},"CCI-000199":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces maximum password lifetime restrictions."},"CCI-000200":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system prohibits password reuse for a defined number of generations."},"CCI-000205":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password length."},"CCI-000764":{control:"IA-2",title:"Identification and Authentication (Organizational Users)",definition:"The information system uniquely identifies and authenticates organizational users."},"CCI-000765":{control:"IA-2 (1)",title:"Identification and Authentication | Multi-Factor Authentication to Privileged Accounts",definition:"The information system implements multifactor authentication for network access to privileged accounts."},"CCI-000766":{control:"IA-2 (2)",title:"Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for network access to non-privileged accounts."},"CCI-000767":{control:"IA-2 (3)",title:"Identification and Authentication | Local Access to Privileged Accounts",definition:"The information system implements multifactor authentication for local access to privileged accounts."},"CCI-000768":{control:"IA-2 (4)",title:"Identification and Authentication | Local Access to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for local access to non-privileged accounts."},"CCI-000770":{control:"IA-2 (5)",title:"Identification and Authentication | Group Authentication",definition:"The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed."},"CCI-000778":{control:"IA-3",title:"Device Identification and Authentication",definition:"The information system uniquely identifies and authenticates devices before establishing a connection."},"CCI-000795":{control:"IA-4",title:"Identifier Management",definition:"The organization manages information system identifiers for users and devices."},"CCI-000803":{control:"IA-7",title:"Cryptographic Module Authentication",definition:"The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws."},"CCI-001941":{control:"IA-2 (8)",title:"Identification and Authentication | Network Access to Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to privileged accounts."},"CCI-001942":{control:"IA-2 (9)",title:"Identification and Authentication | Network Access to Non-Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts."},"CCI-001953":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials."},"CCI-001954":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts PIV credentials from other agencies."},"CCI-002007":{control:"IA-5",title:"Authenticator Management",definition:"The organization manages information system authenticators."},"CCI-002009":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, enforces the password complexity defined by the organization."},"CCI-002010":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces the number of characters that are changed when new passwords are created."},"CCI-002041":{control:"IA-11",title:"Re-authentication",definition:"The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication."},"CCI-000877":{control:"MA-4",title:"Nonlocal Maintenance",definition:"The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities."},"CCI-001880":{control:"MA-4 (6)",title:"Nonlocal Maintenance | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications."},"CCI-001199":{control:"SC-28",title:"Protection of Information at Rest",definition:"The information system protects the confidentiality and integrity of information at rest."},"CCI-000924":{control:"PE-2",title:"Physical Access Authorizations",definition:"The organization develops, approves, and maintains a list of individuals with authorized access to the facility."},"CCI-001643":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization scans for vulnerabilities in the information system and hosted applications."},"CCI-001644":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization defines the frequency at which vulnerability scans are conducted."},"CCI-002233":{control:"SA-11",title:"Developer Security Testing and Evaluation",definition:"The organization requires the developer of the information system to create and implement a security assessment plan."},"CCI-003123":{control:"SA-11 (1)",title:"Developer Security Testing and Evaluation | Static Code Analysis",definition:"The organization requires the developer to employ static code analysis tools."},"CCI-001130":{control:"SC-5",title:"Denial of Service Protection",definition:"The information system protects against or limits the effects of organization-defined types of denial-of-service attacks."},"CCI-001184":{control:"SC-23",title:"Session Authenticity",definition:"The information system protects the authenticity of communications sessions."},"CCI-001188":{control:"SC-23 (1)",title:"Session Authenticity | Invalidate Session Identifiers at Logout",definition:"The information system invalidates session identifiers upon user logout or other session termination."},"CCI-002418":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system protects the confidentiality and integrity of transmitted information."},"CCI-002420":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission."},"CCI-002421":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to recognize changes to information during transmission."},"CCI-002422":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception."},"CCI-002450":{control:"SC-13",title:"Cryptographic Protection",definition:"The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies."},"CCI-002530":{control:"SC-17",title:"Public Key Infrastructure Certificates",definition:"The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider."},"CCI-002824":{control:"SI-16",title:"Memory Protection",definition:"The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution."},"CCI-003568":{control:"SC-28 (1)",title:"Protection of Information at Rest | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest."},"CCI-001310":{control:"SI-10",title:"Information Input Validation",definition:"The information system checks the validity of organization-defined information inputs."},"CCI-001312":{control:"SI-11",title:"Error Handling",definition:"The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries."},"CCI-001314":{control:"SI-11",title:"Error Handling",definition:"The information system reveals error messages only to authorized personnel."},"CCI-002235":{control:"SI-2 (2)",title:"Flaw Remediation | Automated Flaw Remediation Status",definition:"The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation."},"CCI-002605":{control:"SI-6",title:"Security Function Verification",definition:"The information system verifies the correct operation of security-relevant software and firmware."},"CCI-002617":{control:"SI-2",title:"Flaw Remediation",definition:"The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source."},"CCI-002699":{control:"SI-6",title:"Security Function Verification",definition:"The information system notifies defined personnel of failed security verification tests."},"CCI-002702":{control:"SI-6",title:"Security Function Verification",definition:"The information system implements organization-defined security safeguards when anomalies in security function verification are discovered."},"CCI-000537":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of user-level information contained in the information system."},"CCI-000538":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of system-level information contained in the information system."},"CCI-000539":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of information system documentation including security-related documentation."},"CCI-001682":{control:"PM-6",title:"Information Security Measures of Performance",definition:"The organization develops, monitors, and reports on the results of information security measures of performance."},"CCI-000971":{control:"PS-4",title:"Personnel Termination",definition:"The organization, upon termination of individual employment, disables information system access within the organization-defined time period."}};function ur(t){return t==null?[]:Array.isArray(t)?t:[t]}function fr(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?fr(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}async function hr(t){let e=await(0,qe.parseStringPromise)(t,{explicitArray:!1,tagNameProcessors:[qe.processors.stripPrefix]}),i=e.cci_list??e["cci-list"];if(!i)throw new Error("Not a valid CCI List XML \u2014 no <cci_list> root element found.");let l=ur((i.cci_items??i["cci-items"])?.cci_item??(i.cci_items??i["cci-items"])?.["cci-item"]);if(l.length===0)throw new Error("No <cci_item> elements found in the CCI List XML.");let n={};for(let o of l){let c=o?.$?.id||"";if(!c.startsWith("CCI-"))continue;let u=fr(o.definition),d=ur(o.references?.reference),f="",g="";for(let y of d){let w=y?.$??y??{},h=String(w.version??"");if((h==="5"||h==="4")&&(f=w.index??"",g=w.title??"",h==="5"))break}if(!f&&d.length>0){let y=d[d.length-1],w=y?.$??y??{};f=w.index??"",g=w.title??""}f&&(n[c]={control:f,title:g,definition:u})}return n}var li=/^[A-Z]{2}-\d+(\s*\(\d+\))?$/;function di(t){let e=[],i="",l=!1;for(let n=0;n<t.length;n++){let o=t[n];l?o==='"'?n+1<t.length&&t[n+1]==='"'?(i+='"',n++):l=!1:i+=o:o==='"'?l=!0:o===","?(e.push(i.trim()),i=""):i+=o}return e.push(i.trim()),e}function gr(t){let e=t.split(/\r?\n/).filter(g=>g.trim().length>0);if(e.length<2)return[];let i=di(e[0]),l=i.map(g=>g.toLowerCase().replace(/[_\s-]+/g," ").trim()),n=-1;for(let g=0;g<i.length;g++){let y=l[g];if(y.includes("control")&&(y.includes("id")||y.includes("identifier"))){n=g;break}}if(n<0)for(let g=0;g<i.length;g++){let y=0;for(let w=1;w<Math.min(e.length,10);w++){let h=di(e[w]);h[g]&&li.test(h[g].trim())&&y++}if(y>=Math.min(e.length-1,3)){n=g;break}}if(n<0)for(let g=0;g<i.length;g++){if(li.test(i[g].trim()))continue;let y=l[g];if(y.includes("control")||y==="id"){n=g;break}}n<0&&(n=0);let o=l.findIndex((g,y)=>y!==n&&(g.includes("title")||g.includes("name"))),c=l.findIndex((g,y)=>y!==n&&g.includes("family")),u=l.findIndex((g,y)=>y!==n&&(g.includes("description")||g.includes("text"))),d=new Set,f=[];for(let g=1;g<e.length;g++){let y=di(e[g]),w=(y[n]??"").trim();if(!w||!li.test(w))continue;let h=w.replace(/\s+/g," ");if(d.has(h))continue;d.add(h);let I={controlId:h};o>=0&&y[o]&&(I.title=y[o].trim()),c>=0&&y[c]&&(I.family=y[c].trim()),u>=0&&y[u]&&(I.description=y[u].trim());let T={};for(let A=0;A<i.length;A++)A===n||A===o||A===c||A===u||y[A]?.trim()&&(T[i[A]]=y[A].trim());Object.keys(T).length>0&&(I.extra=T),f.push(I)}return f}function Co(t){return t.replace(/\s*\(\d+\)$/,"").trim()}function Io(t){return t==="not_a_finding"||t==="not_applicable"?"passing":t==="open"?"open":"not_reviewed"}function To(t){return t.length===0?"not_covered":t.every(l=>l.mappedStatus==="passing")?"fully_satisfied":t.some(l=>l.mappedStatus==="passing")?"partially_satisfied":"at_risk"}var mr={not_covered:0,at_risk:1,partially_satisfied:2,fully_satisfied:3};function yr(t,e,i){let l={...pr,...i},n=new Map;for(let[f,g]of Object.entries(l)){let y=g.control;n.has(y)||n.set(y,new Set),n.get(y).add(f)}let o=new Map,c=0;for(let f of t.stigs)for(let g of f.rules)for(let y of g.ccis){if(!l[y]){c++;continue}o.has(y)||o.set(y,[]),o.get(y).push({rule:g,cci:y})}let u=[];for(let f of e){let g=!f.controlId.includes("("),y=new Set;if(g){for(let[I,T]of n.entries())if(Co(I)===f.controlId)for(let A of T)y.add(A)}else{let I=n.get(f.controlId);if(I)for(let T of I)y.add(T)}let w=new Set,h=[];for(let I of y){let T=o.get(I)??[];for(let{rule:A}of T){let D=`${A.group_id}::${I}`;w.has(D)||(w.add(D),h.push({groupId:A.group_id,ruleVersion:A.rule_version,severity:A.severity,ruleTitle:A.rule_title,status:A.status,mappedStatus:Io(A.status),cci:I}))}}u.push({control:f,status:To(h),mappedRules:h,ccis:[...y].sort()})}u.sort((f,g)=>{let y=mr[f.status]-mr[g.status];return y!==0?y:f.control.controlId.localeCompare(g.control.controlId,void 0,{numeric:!0})});let d=t.stigs.map(f=>f.display_name||f.stig_name).join(", ");return{analyzedAt:new Date().toISOString(),checklistTitle:t.title,stigName:d,totalNistControls:e.length,coveredControls:u.filter(f=>f.status!=="not_covered").length,uncoveredControls:u.filter(f=>f.status==="not_covered").length,fullySatisfiedControls:u.filter(f=>f.status==="fully_satisfied").length,partiallySatisfiedControls:u.filter(f=>f.status==="partially_satisfied").length,atRiskControls:u.filter(f=>f.status==="at_risk").length,controlMappings:u,unmappedCciCount:c}}function Vt(t){return t.includes(",")||t.includes('"')||t.includes(`
`)?`"${t.replace(/"/g,'""')}"`:t}function vr(t){let e="Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details",i=t.controlMappings.map(l=>{let n=l.mappedRules.filter(d=>d.mappedStatus==="passing").length,o=l.mappedRules.filter(d=>d.mappedStatus==="open").length,c=l.mappedRules.filter(d=>d.mappedStatus==="not_reviewed").length,u=l.mappedRules.map(d=>`${d.groupId} (${d.status.replace(/_/g," ")})`).join("; ");return[Vt(l.control.controlId),Vt(l.control.title??""),Vt(l.control.family??""),Vt(l.status.replace(/_/g," ")),String(l.mappedRules.length),String(n),String(o),String(c),Vt(l.ccis.join(", ")),Vt(u)].join(",")});return[e,...i].join(`
`)}var Ve=class t{static async show(e){let i=e;if(!i){let g=await rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select STIG Checklist for Crosswalk"});if(!g?.[0])return;i=g[0]}let l=JSON.parse(zt.readFileSync(i.fsPath,"utf-8")),n=await rt.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select NIST 800-53 Controls CSV"});if(!n?.[0])return;let o=zt.readFileSync(n[0].fsPath,"utf-8"),c=gr(o);if(c.length===0){rt.window.showErrorMessage("No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.");return}let u;if((await rt.window.showQuickPick(["Use bundled CCI mapping (covers common CCIs)","Import full CCI List XML from DISA"],{title:"CCI Mapping Source"}))?.includes("Import")){let g=await rt.window.showOpenDialog({canSelectMany:!1,filters:{"CCI List (XML)":["xml","XML"],"All Files":["*"]},title:"Select U_CCI_List.xml (extract U_CCI_List.zip from cyber.mil first)"});if(g?.[0])try{let y=zt.readFileSync(g[0].fsPath,"utf-8");u=await hr(y),rt.window.showInformationMessage(`Loaded ${Object.keys(u).length} CCI entries from XML.`)}catch(y){rt.window.showWarningMessage(`Failed to parse CCI List XML: ${y}. Falling back to bundled map.`)}}let f=yr(l,c,u);if(f.unmappedCciCount>0&&rt.window.showInformationMessage(`${f.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`),t._panel)t._panel.reveal();else{let g=rt.window.createWebviewPanel("stigViewer.crosswalk",`NIST 800-53 Crosswalk \u2014 ${l.title}`,rt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=g,g.onDidDispose(()=>{t._panel=void 0}),g.webview.onDidReceiveMessage(async y=>{if(y.type==="exportCsv"){let w=Ot.basename(i.fsPath,".cklb")+"_NIST_crosswalk.csv",h=await rt.window.showSaveDialog({defaultUri:rt.Uri.file(Ot.join(Ot.dirname(i.fsPath),w)),filters:{CSV:["csv"]},title:"Export Crosswalk Report"});h&&(zt.writeFileSync(h.fsPath,vr(f),"utf-8"),rt.window.showInformationMessage(`Exported crosswalk \u2192 ${Ot.basename(h.fsPath)}`))}})}t._panel.webview.html=So(f)}};function at(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function xo(t){switch(t){case"fully_satisfied":return'<span class="st-icon st-sat">\u2714</span>';case"partially_satisfied":return'<span class="st-icon st-par">\u25D1</span>';case"at_risk":return'<span class="st-icon st-risk">\u26A0</span>';default:return'<span class="st-icon st-gap">\u25CF</span>'}}function _o(t){return t.replace(/_/g," ")}function So(t){let i=[...new Set(t.controlMappings.map(o=>o.control.family).filter(Boolean))].sort().map(o=>`<option value="${at(o)}">${at(o)}</option>`).join(""),l=t.totalNistControls?Math.round(t.coveredControls/t.totalNistControls*100):0,n=t.controlMappings.map((o,c)=>{let u=o.mappedRules.filter(h=>h.mappedStatus==="passing").length,d=o.mappedRules.filter(h=>h.mappedStatus==="open").length,f=o.mappedRules.filter(h=>h.mappedStatus==="not_reviewed").length,g=o.mappedRules.map(h=>{let I=h.severity==="high"?"sev-high":h.severity==="medium"?"sev-med":"sev-low",T=h.mappedStatus==="passing"?"rs-pass":h.mappedStatus==="open"?"rs-open":"rs-nr";return`<tr>
        <td class="sub-td">${at(h.groupId)}</td>
        <td class="sub-td">${at(h.ruleVersion)}</td>
        <td class="sub-td ${I}">${h.severity==="high"?"CAT I":h.severity==="medium"?"CAT II":"CAT III"}</td>
        <td class="sub-td ${T}">${at(_o(h.status))}</td>
        <td class="sub-td sub-title">${at(h.ruleTitle)}</td>
        <td class="sub-td sub-cci">${at(h.cci)}</td>
      </tr>`}).join(""),y=o.control.description?`<div class="ctrl-desc">${at(o.control.description)}</div>`:o.status==="not_covered"?'<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>':"",w=o.mappedRules.length>0?`<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${g}</tbody>
    </table>`:"";return`<tr class="cw-row" data-idx="${c}" data-status="${o.status}" data-family="${at(o.control.family??"")}">
      <td class="td-st">${xo(o.status)}</td>
      <td class="td-ctrl">${at(o.control.controlId)}</td>
      <td class="td-title">${at(o.control.title??"")}</td>
      <td class="td-fam">${at(o.control.family??"")}</td>
      <td class="td-n">${o.mappedRules.length}</td>
      <td class="td-n td-pass">${u||""}</td>
      <td class="td-n td-open">${d||""}</td>
      <td class="td-n td-nr">${f||""}</td>
      <td class="td-ccis">${at(o.ccis.slice(0,5).join(", "))}${o.ccis.length>5?"\u2026":""}</td>
    </tr>
    <tr class="cw-detail" data-idx="${c}" style="display:none">
      <td colspan="9">
        <div class="detail-wrap">${y}${w}</div>
      </td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>NIST 800-53 Crosswalk</title>
<style>${Eo}</style>
</head>
<body>

<header class="hdr">
  <h1>NIST 800-53 Crosswalk</h1>
  <span class="chip">${at(t.checklistTitle)}</span>
  <span class="chip">${at(t.stigName)}</span>
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
  <tbody>${n}</tbody>
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
</body></html>`}var Eo=`
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
`;var V=$(require("vscode")),fi=$(require("path"));var Pt="The selected file is not valid HDF JSON. Expected structure: profiles[] with controls[].";function Cr(t){let e;try{e=JSON.parse(t)}catch(l){throw new Error(`${Pt} (JSON parse error: ${l.message})`)}if(!e||typeof e!="object")throw new Error(Pt);let i=e;if(!Array.isArray(i.profiles)||i.profiles.length===0)throw new Error(Pt);for(let l of i.profiles){if(!l||typeof l!="object")throw new Error(Pt);if(!Array.isArray(l.controls))throw new Error(Pt);for(let n of l.controls){if(!n||typeof n!="object")throw new Error(Pt);if(typeof n.id!="string"||typeof n.title!="string")throw new Error(Pt);(!n.tags||typeof n.tags!="object")&&(n.tags={})}}return i}function Ir(t){if(!t||t.length===0)return"not_reviewed";if(t.some(o=>o.status==="failed"))return"open";let i=t.some(o=>o.status==="error"),l=t.some(o=>o.status==="passed");return t.every(o=>o.status==="skipped")?"not_applicable":i&&!l?"not_reviewed":l?"not_a_finding":"not_reviewed"}function Ao(t){let e=t.tags?.severity;return e==="high"||e==="medium"||e==="low"?e:typeof t.impact=="number"?t.impact>=.7?"high":t.impact>=.4?"medium":"low":"medium"}function ui(t,e){return t.descriptions?t.descriptions.find(l=>l.label===e)?.data??"":""}function Do(t){return t.desc?t.desc:ui(t,"default")}function Tr(t){if(!t.results||t.results.length===0)return t.code?`[HDF IMPORT] No test results recorded.
InSpec control source (truncated):
${t.code.length>500?`${t.code.slice(0,500)}\u2026`:t.code}`:"";let e=["[HDF IMPORT] InSpec automated scan results:",""];for(let i=0;i<t.results.length;i++){let l=t.results[i];e.push(`Test ${i+1}: ${l.status.toUpperCase()}`),e.push(`  ${l.code_desc}`),l.message&&e.push(`  Message: ${l.message}`),l.exception&&e.push(`  Exception: ${l.exception}`),l.run_time!==void 0&&e.push(`  Duration: ${l.run_time}s`),l.start_time&&e.push(`  Started: ${l.start_time}`),e.push("")}return e.join(`
`).trim()}function ko(t,e,i){return e?!t||!i?e:`${t}

--- HDF Import ---
${e}`:t}function No(t,e,i){let l=e.passthrough;if(!l)return;let n=l.target;n&&(!t.host_name&&n.hostname&&(t.host_name=n.hostname),!t.fqdn&&n.fqdn&&(t.fqdn=n.fqdn),!t.ip_address&&n.ip_address&&(t.ip_address=n.ip_address),!t.mac_address&&n.mac_address&&(t.mac_address=n.mac_address));let o={};for(let[c,u]of Object.entries(l))c!=="target"&&(o[c]=u);if(Object.keys(o).length>0){let c=`[HDF passthrough] ${JSON.stringify(o)}`;t.comments?t.comments.includes("[HDF passthrough]")||(t.comments=`${t.comments}
${c}`):t.comments=c}if(i.length>1){let c=`[HDF] Scan covered ${i.length} profiles: ${i.map(u=>u.title||u.name).join(", ")}`;t.comments?t.comments.includes("[HDF] Scan covered")||(t.comments=`${t.comments}
${c}`):t.comments=c}}function pi(t,e,i){let l={overwriteExistingStatus:i?.overwriteExistingStatus??!1,preserveExistingFindingDetails:i?.preserveExistingFindingDetails??!0,updateTargetData:i?.updateTargetData??!0},n=JSON.parse(JSON.stringify(t)),o=new Map,c=new Map;for(let v of n.stigs)for(let r of v.rules)r.rule_version&&o.set(r.rule_version,r),r.group_id&&c.set(r.group_id,r);let u=[],d={passed:0,failed:0,skipped:0,error:0,noResults:0},f=[],g=[],y=new Set,w=0,h=0,I=new Map;for(let v of e.profiles)for(let r of v.controls){if(w++,!r.results||r.results.length===0)d.noResults++;else{let _=r.results.some(O=>O.status==="failed"),m=r.results.some(O=>O.status==="error"),b=r.results.some(O=>O.status==="passed"),k=r.results.every(O=>O.status==="skipped");_?d.failed++:k?d.skipped++:b?d.passed++:m?d.error++:d.noResults++}r.tags?.stig_id||h++;let a,C,E=r.tags?.stig_id;if(E&&o.has(E)?(a=o.get(E),C="rule_version"):r.id&&c.has(r.id)?(a=c.get(r.id),C="group_id"):r.tags?.gid&&c.has(r.tags.gid)&&(a=c.get(r.tags.gid),C="gid_tag"),!a||!C){g.push(r.tags?.stig_id||r.id);continue}I.set(a.uuid,{control:r,rule:a,matchedBy:C})}let T=new Date().toISOString();for(let{control:v,rule:r,matchedBy:a}of I.values()){let C=Ir(v.results),E=r.status,_=l.overwriteExistingStatus||r.status==="not_reviewed",m=E;_&&(r.status=C,m=C);let b=Tr(v);b&&(r.finding_details=ko(r.finding_details,b,l.preserveExistingFindingDetails)),r.updatedAt=T,y.add(r.uuid),f.push({ruleVersion:r.rule_version,groupId:r.group_id,oldStatus:E,newStatus:m,matchedBy:a})}let A=[];for(let v of n.stigs)for(let r of v.rules)y.has(r.uuid)||A.push(r.rule_version||r.group_id);l.updateTargetData&&No(n.target_data,e,e.profiles),h>0&&u.push(`${h} HDF control(s) lacked tags.stig_id; matching fell back to control.id / tags.gid.`);let D=e.profiles[0],x={profileName:D?.title||D?.name||"(unknown profile)",profileVersion:D?.version,hostName:e.passthrough?.target?.hostname||e.passthrough?.target?.fqdn,totalControls:w,matchedRules:y.size,unmatchedControls:g.length,unmatchedRules:A.length,statusBreakdown:d,appliedChanges:f,unmatchedControlIds:g,unmatchedRuleVersions:A,warnings:u};return{updated:n,summary:x}}function Oo(){return{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null}}function Po(t,e,i){let l=Do(t),n=ui(t,"check"),o=ui(t,"fix"),c=Ao(t),u=Ir(t.results),d=Tr(t),f=ut(),g=t.tags?.gid||t.id,y=t.tags?.rid||"",w=t.tags?.stig_id||t.id,h=t.tags?.gtitle||"",I=Array.isArray(t.tags?.cci)?[...t.tags.cci]:[],T=Array.isArray(t.tags?.legacy)?[...t.tags.legacy]:[];return{uuid:f,stig_uuid:e,target_key:null,stig_ref:null,group_id:g,rule_id:y,rule_id_src:y,weight:"10.0",classification:"Unclassified",severity:c,rule_version:w,group_title:h,rule_title:t.title,fix_text:o,false_positives:"",false_negatives:"",discussion:l,check_content:n,documentable:"",mitigations:"",potential_impacts:"",third_party_tools:"",mitigation_control:"",responsibility:"",security_override_guidance:"",ia_controls:"",check_content_ref:{href:"",name:""},legacy_ids:T,ccis:I,group_tree:[{id:g,title:h,description:l}],createdAt:i,updatedAt:i,STIGUuid:e,status:u,overrides:{},comments:"",finding_details:d,srg_id:h}}function xr(t){let e=new Date().toISOString(),i=ut(),l=[];for(let d of t.profiles){let f=ut(),g=d.controls.map(w=>Po(w,f,e)),y=d.title||d.name||"InSpec Profile";l.push({stig_name:y,display_name:y,stig_id:d.name,release_info:d.version?`Version ${d.version}`:"",version:d.version||"1",uuid:f,reference_identifier:d.name,size:g.length,rules:g})}let n=Oo(),o=t.passthrough?.target;if(o&&(o.hostname&&(n.host_name=o.hostname),o.fqdn&&(n.fqdn=o.fqdn),o.ip_address&&(n.ip_address=o.ip_address),o.mac_address&&(n.mac_address=o.mac_address)),t.passthrough){let d={};for(let[f,g]of Object.entries(t.passthrough))f!=="target"&&(d[f]=g);Object.keys(d).length>0&&(n.comments=`[HDF passthrough] ${JSON.stringify(d)}`)}let c=t.profiles[0];return{title:c?.title||c?.name||"InSpec / HDF Import",id:i,stigs:l,active:!0,mode:1,has_path:!0,target_data:n,cklb_version:"1"}}var wr={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"};function br(t){return t.replace(/\|/g,"\\|").replace(/\n/g," ")}function _r(t,e){let i=[];if(i.push("# HDF Import Report"),i.push(""),i.push(`**Source:** ${t.profileName}`),t.profileVersion&&i.push(`**Profile Version:** ${t.profileVersion}`),t.hostName&&i.push(`**Target Host:** ${t.hostName}`),i.push(`**Imported:** ${new Date().toISOString()}`),i.push(`**Checklist:** ${e}`),i.push(""),i.push("## Summary"),i.push(""),i.push("| Metric | Count |"),i.push("|--------|-------|"),i.push(`| HDF Controls | ${t.totalControls} |`),i.push(`| Matched to Checklist | ${t.matchedRules} |`),i.push(`| Unmatched HDF Controls | ${t.unmatchedControls} |`),i.push(`| Unmatched Checklist Rules | ${t.unmatchedRules} |`),i.push(""),i.push("## Status Breakdown (HDF Results)"),i.push(""),i.push("| Status | Count |"),i.push("|--------|-------|"),i.push(`| Open (failed) | ${t.statusBreakdown.failed} |`),i.push(`| Not a Finding (passed) | ${t.statusBreakdown.passed} |`),i.push(`| Not Applicable (skipped) | ${t.statusBreakdown.skipped} |`),i.push(`| Not Reviewed (error/no results) | ${t.statusBreakdown.error+t.statusBreakdown.noResults} |`),i.push(""),t.warnings.length>0){i.push("## Warnings"),i.push("");for(let l of t.warnings)i.push(`- ${l}`);i.push("")}if(i.push("## Rules Updated"),i.push(""),t.appliedChanges.length===0)i.push("_No rules were updated._");else{i.push("| Rule Version | Vuln ID | Old Status | New Status | Matched By |"),i.push("|--------------|---------|------------|------------|------------|");for(let l of t.appliedChanges)i.push(`| ${br(l.ruleVersion)} | ${br(l.groupId)} | ${wr[l.oldStatus]||l.oldStatus} | ${wr[l.newStatus]||l.newStatus} | ${l.matchedBy} |`)}if(i.push(""),i.push("## Unmatched HDF Controls"),i.push(""),i.push("These controls in the HDF file had no corresponding rule in the checklist. This may indicate a STIG version mismatch or that the HDF covers additional controls beyond the checklist's STIG."),i.push(""),t.unmatchedControlIds.length===0)i.push("_None._");else for(let l of t.unmatchedControlIds)i.push(`- ${l}`);if(i.push(""),i.push("## Unmatched Checklist Rules"),i.push(""),i.push("These rules in the checklist were not addressed by any HDF control. They retain their previous status."),i.push(""),t.unmatchedRuleVersions.length===0)i.push("_None._");else for(let l of t.unmatchedRuleVersions)i.push(`- ${l}`);return i.push(""),i.join(`
`)}async function Er(t,e){let i=e;if(!i){let d=await V.window.showOpenDialog({canSelectMany:!1,filters:{"HDF / InSpec JSON":["json"]},title:"Select InSpec / HDF Results File"});if(!d?.[0])return;i=d[0]}let l;try{let d=await V.workspace.fs.readFile(i),f=new TextDecoder("utf-8").decode(d);l=Cr(f)}catch(d){V.window.showErrorMessage(d.message);return}let n=st.activeDocumentUri,o;if(n){let d=await V.window.showQuickPick([{label:"Apply results to the current checklist",description:fi.basename(n.fsPath),value:"apply"},{label:"Generate a new checklist from these results",description:l.profiles[0]?.title||l.profiles[0]?.name,value:"new"}],{placeHolder:"How should the HDF file be imported?"});if(!d)return;o=d.value}else o="new";let c=null,u=null;if(o==="apply"&&n)try{let d=await V.workspace.openTextDocument(n);c=JSON.parse(d.getText()),u=n}catch(d){V.window.showErrorMessage(`Failed to read active checklist: ${d}`);return}Mo(t,{hdf:l,checklistDoc:c,checklistUri:u,mode:o})}function Mo(t,e){let i=V.window.createWebviewPanel("stigWorkbenchHdfImport","HDF Import",V.ViewColumn.Active,{enableScripts:!0,retainContextWhenHidden:!0});i.webview.html=$o();let l=()=>{if(e.mode==="apply"&&e.checklistDoc){let o=Sr(e.checklistDoc,e.hdf,oe());i.webview.postMessage({type:"showPreview",summary:o.summary,profile:hi(e.hdf),checklistTitle:e.checklistDoc.title,options:oe()})}else Lo(i,e)},n=i.webview.onDidReceiveMessage(async o=>{if(o?.type==="ready"&&l(),o?.type==="reproject"&&e.mode==="apply"&&e.checklistDoc){let c=Sr(e.checklistDoc,e.hdf,o.options||oe());i.webview.postMessage({type:"updatePreview",summary:c.summary,options:o.options||oe()})}o?.type==="apply"&&e.mode==="apply"&&e.checklistDoc&&e.checklistUri&&await Ro(i,e,o.options||oe()),o?.type==="downloadReport"&&o.summary&&o.checklistTitle!==void 0&&await Fo(o.summary,o.checklistTitle),o?.type==="cancel"&&i.dispose()});i.onDidDispose(()=>n.dispose())}function oe(){return{overwriteExistingStatus:!1,preserveExistingFindingDetails:!0,updateTargetData:!0}}function hi(t){let e=t.profiles[0];return{name:e?.title||e?.name||"(unknown)",version:e?.version||"",hostName:t.passthrough?.target?.hostname||t.passthrough?.target?.fqdn||"",inspecVersion:t.version||"",profileCount:t.profiles.length}}function Sr(t,e,i){let{summary:l}=pi(t,e,i);return{summary:l}}async function Ro(t,e,i){if(!(!e.checklistDoc||!e.checklistUri))try{let{updated:l,summary:n}=pi(e.checklistDoc,e.hdf,i),o=await V.workspace.openTextDocument(e.checklistUri),c=new V.WorkspaceEdit,u=new V.Range(o.positionAt(0),o.positionAt(o.getText().length));if(c.replace(o.uri,u,JSON.stringify(l,null,2)),!await V.workspace.applyEdit(c)){V.window.showErrorMessage("HDF import: failed to apply edit to the checklist.");return}await o.save(),await V.commands.executeCommand("vscode.openWith",e.checklistUri,"stigViewer.cklbEditor"),t.webview.postMessage({type:"showSummary",summary:n,profile:hi(e.hdf),checklistTitle:l.title}),V.window.showInformationMessage(`HDF import: ${n.matchedRules} rule(s) updated, ${n.unmatchedControls} unmatched control(s).`)}catch(l){V.window.showErrorMessage(`HDF import failed: ${l}`)}}async function Lo(t,e){try{let i=xr(e.hdf),l=(i.title||"hdf-import").replace(/\s+/g,"-")+".cklb",n=await V.window.showSaveDialog({title:"Save New Checklist",defaultUri:V.Uri.file(l),filters:{"CKLB Checklist":["cklb"]}});if(!n){t.dispose();return}let o=new TextEncoder().encode(JSON.stringify(i,null,2));await V.workspace.fs.writeFile(n,o),await V.commands.executeCommand("vscode.openWith",n,"stigViewer.cklbEditor");let c=e.hdf.profiles.reduce((I,T)=>I+T.controls.length,0),u=0,d=0,f=0,g=0,y=0;for(let I of e.hdf.profiles)for(let T of I.controls){if(!T.results||T.results.length===0){y++;continue}let A=T.results.some(r=>r.status==="failed"),D=T.results.some(r=>r.status==="error"),x=T.results.some(r=>r.status==="passed"),v=T.results.every(r=>r.status==="skipped");A?d++:v?f++:x?u++:D?g++:y++}let w=hi(e.hdf),h={profileName:w.name,profileVersion:w.version,hostName:w.hostName,totalControls:c,matchedRules:c,unmatchedControls:0,unmatchedRules:0,statusBreakdown:{passed:u,failed:d,skipped:f,error:g,noResults:y},appliedChanges:[],unmatchedControlIds:[],unmatchedRuleVersions:[],warnings:[]};t.webview.postMessage({type:"showSummary",summary:h,profile:w,checklistTitle:i.title,modeB:!0}),V.window.showInformationMessage(`HDF import: created new checklist with ${c} rules.`)}catch(i){V.window.showErrorMessage(`HDF new-checklist import failed: ${i}`),t.dispose()}}async function Fo(t,e){let i=_r(t,e),l=`hdf-import-${(t.profileName||"report").replace(/\s+/g,"-")}.md`,n=await V.window.showSaveDialog({title:"Save HDF Import Report",defaultUri:V.Uri.file(l),filters:{Markdown:["md"]}});if(!n)return;let o=new TextEncoder().encode(i);await V.workspace.fs.writeFile(n,o),V.window.showInformationMessage(`HDF report saved: ${fi.basename(n.fsPath)}`)}function Bo(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function $o(){let t=Bo();return`<!DOCTYPE html>
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
</html>`}function Uo(t){t.subscriptions.push(st.register(t)),t.subscriptions.push(z.commands.registerCommand("stigViewer.openFile",async()=>{let e=await z.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});e?.[0]&&await z.commands.executeCommand("vscode.openWith",e[0],"stigViewer.cklbEditor")})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importXccdf",async e=>{if(!e){let i=await z.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!i?.[0])return;e=i[0]}try{await Wn(e)}catch(i){z.window.showErrorMessage(`XCCDF import failed: ${i}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importCkl",async e=>{if(!e){let i=await z.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!i?.[0])return;e=i[0]}try{await Kn(e)}catch(i){z.window.showErrorMessage(`CKL import failed: ${i}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await er(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`SCAP import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.mergeFindings",async()=>{try{await Yn(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Merge failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.dashboard",async()=>{try{await Fe.show(t)}catch(e){z.window.showErrorMessage(`Dashboard failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.diffChecklists",async()=>{try{await Be.show(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Diff failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.scanRepo",async()=>{try{await nr(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Repo scan failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importSarif",async()=>{try{await rr(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`SARIF import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importAudit",async()=>{try{await sr(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Dependency audit import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importCsv",async()=>{try{await cr(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`CSV import failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.exportEvidence",async()=>{try{await dr(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`Evidence package failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.nistCrosswalk",async()=>{try{await Ve.show(st.activeDocumentUri)}catch(e){z.window.showErrorMessage(`NIST crosswalk failed: ${e}`)}})),t.subscriptions.push(z.commands.registerCommand("stigViewer.importHdf",async e=>{try{await Er(t,e)}catch(i){z.window.showErrorMessage(`HDF import failed: ${i}`)}}))}function qo(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
