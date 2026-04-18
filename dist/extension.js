"use strict";var cr=Object.create;var ie=Object.defineProperty;var lr=Object.getOwnPropertyDescriptor;var dr=Object.getOwnPropertyNames;var ur=Object.getPrototypeOf,pr=Object.prototype.hasOwnProperty;var $=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),fr=(t,e)=>{for(var s in e)ie(t,s,{get:e[s],enumerable:!0})},ai=(t,e,s,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of dr(e))!pr.call(t,r)&&r!==s&&ie(t,r,{get:()=>e[r],enumerable:!(m=lr(e,r))||m.enumerable});return t};var B=(t,e,s)=>(s=t!=null?cr(ur(t)):{},ai(e||!t||!t.__esModule?ie(s,"default",{value:t,enumerable:!0}):s,t)),hr=t=>ai(ie({},"__esModule",{value:!0}),t);var ae=$(Be=>{(function(){Be.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(Be)});var gt=$((pi,It)=>{(function(){var t,e,s,m,r,d,a,c=[].slice,u={}.hasOwnProperty;t=function(){var f,y,g,b,p,I;if(I=arguments[0],p=2<=arguments.length?c.call(arguments,1):[],r(Object.assign))Object.assign.apply(null,arguments);else for(f=0,g=p.length;f<g;f++)if(b=p[f],b!=null)for(y in b)u.call(b,y)&&(I[y]=b[y]);return I},r=function(f){return!!f&&Object.prototype.toString.call(f)==="[object Function]"},d=function(f){var y;return!!f&&((y=typeof f)=="function"||y==="object")},s=function(f){return r(Array.isArray)?Array.isArray(f):Object.prototype.toString.call(f)==="[object Array]"},m=function(f){var y;if(s(f))return!f.length;for(y in f)if(u.call(f,y))return!1;return!0},a=function(f){var y,g;return d(f)&&(g=Object.getPrototypeOf(f))&&(y=g.constructor)&&typeof y=="function"&&y instanceof y&&Function.prototype.toString.call(y)===Function.prototype.toString.call(Object)},e=function(f){return r(f.valueOf)?f.valueOf():f},It.exports.assign=t,It.exports.isFunction=r,It.exports.isObject=d,It.exports.isArray=s,It.exports.isEmpty=m,It.exports.isPlainObject=a,It.exports.getValue=e}).call(pi)});var qe=$((fi,hi)=>{(function(){var t;hi.exports=t=(function(){function e(){}return e.prototype.hasFeature=function(s,m){return!0},e.prototype.createDocumentType=function(s,m,r){throw new Error("This DOM method is not implemented.")},e.prototype.createDocument=function(s,m,r){throw new Error("This DOM method is not implemented.")},e.prototype.createHTMLDocument=function(s){throw new Error("This DOM method is not implemented.")},e.prototype.getFeature=function(s,m){throw new Error("This DOM method is not implemented.")},e})()}).call(fi)});var yi=$((mi,gi)=>{(function(){var t;gi.exports=t=(function(){function e(){}return e.prototype.handleError=function(s){throw new Error(s)},e})()}).call(mi)});var wi=$((vi,bi)=>{(function(){var t;bi.exports=t=(function(){function e(s){this.arr=s||[]}return Object.defineProperty(e.prototype,"length",{get:function(){return this.arr.length}}),e.prototype.item=function(s){return this.arr[s]||null},e.prototype.contains=function(s){return this.arr.indexOf(s)!==-1},e})()}).call(vi)});var Ti=$((Ci,Ii)=>{(function(){var t,e,s;e=yi(),s=wi(),Ii.exports=t=(function(){function m(){var r;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=r=Object.create(this.defaultParams)}return Object.defineProperty(m.prototype,"parameterNames",{get:function(){return new s(Object.keys(this.defaultParams))}}),m.prototype.getParameter=function(r){return this.params.hasOwnProperty(r)?this.params[r]:null},m.prototype.canSetParameter=function(r,d){return!0},m.prototype.setParameter=function(r,d){return d!=null?this.params[r]=d:delete this.params[r]},m})()}).call(Ci)});var K=$((xi,_i)=>{(function(){_i.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(xi)});var ze=$((Ei,Si)=>{(function(){var t,e,s;t=K(),s=ct(),Si.exports=e=(function(){function m(r,d,a){if(this.parent=r,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),d==null)throw new Error("Missing attribute name. "+this.debugInfo(d));this.name=this.stringify.name(d),this.value=this.stringify.attValue(a),this.type=t.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(m.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(m.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(m.prototype,"textContent",{get:function(){return this.value},set:function(r){return this.value=r||""}}),Object.defineProperty(m.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(m.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(m.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(m.prototype,"specified",{get:function(){return!0}}),m.prototype.clone=function(){return Object.create(this)},m.prototype.toString=function(r){return this.options.writer.attribute(this,this.options.writer.filterOptions(r))},m.prototype.debugInfo=function(r){return r=r||this.name,r==null?"parent: <"+this.parent.name+">":"attribute: {"+r+"}, parent: <"+this.parent.name+">"},m.prototype.isEqualNode=function(r){return!(r.namespaceURI!==this.namespaceURI||r.prefix!==this.prefix||r.localName!==this.localName||r.value!==this.value)},m})()}).call(Ei)});var ce=$((Ai,Di)=>{(function(){var t;Di.exports=t=(function(){function e(s){this.nodes=s}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(s){return this.nodes[s]},e.prototype.setNamedItem=function(s){var m;return m=this.nodes[s.nodeName],this.nodes[s.nodeName]=s,m||null},e.prototype.removeNamedItem=function(s){var m;return m=this.nodes[s],delete this.nodes[s],m||null},e.prototype.item=function(s){return this.nodes[Object.keys(this.nodes)[s]]||null},e.prototype.getNamedItemNS=function(s,m){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(s){throw new Error("This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(s,m){throw new Error("This DOM method is not implemented.")},e})()}).call(Ai)});var le=$((Ni,ki)=>{(function(){var t,e,s,m,r,d,a,c,u,f=function(g,b){for(var p in b)y.call(b,p)&&(g[p]=b[p]);function I(){this.constructor=g}return I.prototype=b.prototype,g.prototype=new I,g.__super__=b.prototype,g},y={}.hasOwnProperty;u=gt(),c=u.isObject,a=u.isFunction,d=u.getValue,r=ct(),t=K(),e=ze(),m=ce(),ki.exports=s=(function(g){f(b,g);function b(p,I,T){var S,N,x,v;if(b.__super__.constructor.call(this,p),I==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(I),this.type=t.Element,this.attribs={},this.schemaTypeInfo=null,T!=null&&this.attribute(T),p.type===t.Document&&(this.isRoot=!0,this.documentObject=p,p.rootObject=this,p.children)){for(v=p.children,N=0,x=v.length;N<x;N++)if(S=v[N],S.type===t.DocType){S.name=this.name;break}}}return Object.defineProperty(b.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(b.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(b.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(b.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(b.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new m(this.attribs)),this.attributeMap}}),b.prototype.clone=function(){var p,I,T,S;T=Object.create(this),T.isRoot&&(T.documentObject=null),T.attribs={},S=this.attribs;for(I in S)y.call(S,I)&&(p=S[I],T.attribs[I]=p.clone());return T.children=[],this.children.forEach(function(N){var x;return x=N.clone(),x.parent=T,T.children.push(x)}),T},b.prototype.attribute=function(p,I){var T,S;if(p!=null&&(p=d(p)),c(p))for(T in p)y.call(p,T)&&(S=p[T],this.attribute(T,S));else a(I)&&(I=I.apply()),this.options.keepNullAttributes&&I==null?this.attribs[p]=new e(this,p,""):I!=null&&(this.attribs[p]=new e(this,p,I));return this},b.prototype.removeAttribute=function(p){var I,T,S;if(p==null)throw new Error("Missing attribute name. "+this.debugInfo());if(p=d(p),Array.isArray(p))for(T=0,S=p.length;T<S;T++)I=p[T],delete this.attribs[I];else delete this.attribs[p];return this},b.prototype.toString=function(p){return this.options.writer.element(this,this.options.writer.filterOptions(p))},b.prototype.att=function(p,I){return this.attribute(p,I)},b.prototype.a=function(p,I){return this.attribute(p,I)},b.prototype.getAttribute=function(p){return this.attribs.hasOwnProperty(p)?this.attribs[p].value:null},b.prototype.setAttribute=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNode=function(p){return this.attribs.hasOwnProperty(p)?this.attribs[p]:null},b.prototype.setAttributeNode=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.removeAttributeNode=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagName=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setAttributeNS=function(p,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.removeAttributeNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNodeNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setAttributeNodeNS=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagNameNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.hasAttribute=function(p){return this.attribs.hasOwnProperty(p)},b.prototype.hasAttributeNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setIdAttribute=function(p,I){return this.attribs.hasOwnProperty(p)?this.attribs[p].isId:I},b.prototype.setIdAttributeNS=function(p,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setIdAttributeNode=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagName=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagNameNS=function(p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByClassName=function(p){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.isEqualNode=function(p){var I,T,S;if(!b.__super__.isEqualNode.apply(this,arguments).isEqualNode(p)||p.namespaceURI!==this.namespaceURI||p.prefix!==this.prefix||p.localName!==this.localName||p.attribs.length!==this.attribs.length)return!1;for(I=T=0,S=this.attribs.length-1;0<=S?T<=S:T>=S;I=0<=S?++T:--T)if(!this.attribs[I].isEqualNode(p.attribs[I]))return!1;return!0},b})(r)}).call(Ni)});var Xt=$((Oi,Pi)=>{(function(){var t,e,s=function(r,d){for(var a in d)m.call(d,a)&&(r[a]=d[a]);function c(){this.constructor=r}return c.prototype=d.prototype,r.prototype=new c,r.__super__=d.prototype,r},m={}.hasOwnProperty;e=ct(),Pi.exports=t=(function(r){s(d,r);function d(a){d.__super__.constructor.call(this,a),this.value=""}return Object.defineProperty(d.prototype,"data",{get:function(){return this.value},set:function(a){return this.value=a||""}}),Object.defineProperty(d.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(d.prototype,"textContent",{get:function(){return this.value},set:function(a){return this.value=a||""}}),d.prototype.clone=function(){return Object.create(this)},d.prototype.substringData=function(a,c){throw new Error("This DOM method is not implemented."+this.debugInfo())},d.prototype.appendData=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},d.prototype.insertData=function(a,c){throw new Error("This DOM method is not implemented."+this.debugInfo())},d.prototype.deleteData=function(a,c){throw new Error("This DOM method is not implemented."+this.debugInfo())},d.prototype.replaceData=function(a,c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},d.prototype.isEqualNode=function(a){return!(!d.__super__.isEqualNode.apply(this,arguments).isEqualNode(a)||a.data!==this.data)},d})(e)}).call(Oi)});var de=$((Mi,Li)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;t=K(),s=Xt(),Li.exports=e=(function(d){m(a,d);function a(c,u){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=t.CData,this.value=this.stringify.cdata(u)}return a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return this.options.writer.cdata(this,this.options.writer.filterOptions(c))},a})(s)}).call(Mi)});var ue=$((Ri,Fi)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;t=K(),e=Xt(),Fi.exports=s=(function(d){m(a,d);function a(c,u){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=t.Comment,this.value=this.stringify.comment(u)}return a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return this.options.writer.comment(this,this.options.writer.filterOptions(c))},a})(e)}).call(Ri)});var pe=$(($i,Ui)=>{(function(){var t,e,s,m,r=function(a,c){for(var u in c)d.call(c,u)&&(a[u]=c[u]);function f(){this.constructor=a}return f.prototype=c.prototype,a.prototype=new f,a.__super__=c.prototype,a},d={}.hasOwnProperty;m=gt().isObject,s=ct(),t=K(),Ui.exports=e=(function(a){r(c,a);function c(u,f,y,g){var b;c.__super__.constructor.call(this,u),m(f)&&(b=f,f=b.version,y=b.encoding,g=b.standalone),f||(f="1.0"),this.type=t.Declaration,this.version=this.stringify.xmlVersion(f),y!=null&&(this.encoding=this.stringify.xmlEncoding(y)),g!=null&&(this.standalone=this.stringify.xmlStandalone(g))}return c.prototype.toString=function(u){return this.options.writer.declaration(this,this.options.writer.filterOptions(u))},c})(s)}).call($i)});var fe=$((Bi,qi)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;s=ct(),t=K(),qi.exports=e=(function(d){m(a,d);function a(c,u,f,y,g,b){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(f==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(u));if(!y)throw new Error("Missing DTD attribute type. "+this.debugInfo(u));if(!g)throw new Error("Missing DTD attribute default. "+this.debugInfo(u));if(g.indexOf("#")!==0&&(g="#"+g),!g.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(u));if(b&&!g.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(u));this.elementName=this.stringify.name(u),this.type=t.AttributeDeclaration,this.attributeName=this.stringify.name(f),this.attributeType=this.stringify.dtdAttType(y),b&&(this.defaultValue=this.stringify.dtdAttDefault(b)),this.defaultValueType=g}return a.prototype.toString=function(c){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(c))},a})(s)}).call(Bi)});var he=$((zi,ji)=>{(function(){var t,e,s,m,r=function(a,c){for(var u in c)d.call(c,u)&&(a[u]=c[u]);function f(){this.constructor=a}return f.prototype=c.prototype,a.prototype=new f,a.__super__=c.prototype,a},d={}.hasOwnProperty;m=gt().isObject,s=ct(),t=K(),ji.exports=e=(function(a){r(c,a);function c(u,f,y,g){if(c.__super__.constructor.call(this,u),y==null)throw new Error("Missing DTD entity name. "+this.debugInfo(y));if(g==null)throw new Error("Missing DTD entity value. "+this.debugInfo(y));if(this.pe=!!f,this.name=this.stringify.name(y),this.type=t.EntityDeclaration,!m(g))this.value=this.stringify.dtdEntityValue(g),this.internal=!0;else{if(!g.pubID&&!g.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(y));if(g.pubID&&!g.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(y));if(this.internal=!1,g.pubID!=null&&(this.pubID=this.stringify.dtdPubID(g.pubID)),g.sysID!=null&&(this.sysID=this.stringify.dtdSysID(g.sysID)),g.nData!=null&&(this.nData=this.stringify.dtdNData(g.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(y))}}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(c.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(c.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(c.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(c.prototype,"xmlVersion",{get:function(){return null}}),c.prototype.toString=function(u){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(u))},c})(s)}).call(zi)});var me=$((Vi,Xi)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;s=ct(),t=K(),Xi.exports=e=(function(d){m(a,d);function a(c,u,f){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing DTD element name. "+this.debugInfo());f||(f="(#PCDATA)"),Array.isArray(f)&&(f="("+f.join(",")+")"),this.name=this.stringify.name(u),this.type=t.ElementDeclaration,this.value=this.stringify.dtdElementValue(f)}return a.prototype.toString=function(c){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(c))},a})(s)}).call(Vi)});var ge=$((Gi,Wi)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;s=ct(),t=K(),Wi.exports=e=(function(d){m(a,d);function a(c,u,f){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing DTD notation name. "+this.debugInfo(u));if(!f.pubID&&!f.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(u));this.name=this.stringify.name(u),this.type=t.NotationDeclaration,f.pubID!=null&&(this.pubID=this.stringify.dtdPubID(f.pubID)),f.sysID!=null&&(this.sysID=this.stringify.dtdSysID(f.sysID))}return Object.defineProperty(a.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(a.prototype,"systemId",{get:function(){return this.sysID}}),a.prototype.toString=function(c){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(c))},a})(s)}).call(Gi)});var ye=$((Hi,Ki)=>{(function(){var t,e,s,m,r,d,a,c,u,f=function(g,b){for(var p in b)y.call(b,p)&&(g[p]=b[p]);function I(){this.constructor=g}return I.prototype=b.prototype,g.prototype=new I,g.__super__=b.prototype,g},y={}.hasOwnProperty;u=gt().isObject,c=ct(),t=K(),e=fe(),m=he(),s=me(),r=ge(),a=ce(),Ki.exports=d=(function(g){f(b,g);function b(p,I,T){var S,N,x,v,o,n;if(b.__super__.constructor.call(this,p),this.type=t.DocType,p.children){for(v=p.children,N=0,x=v.length;N<x;N++)if(S=v[N],S.type===t.Element){this.name=S.name;break}}this.documentObject=p,u(I)&&(o=I,I=o.pubID,T=o.sysID),T==null&&(n=[I,T],T=n[0],I=n[1]),I!=null&&(this.pubID=this.stringify.dtdPubID(I)),T!=null&&(this.sysID=this.stringify.dtdSysID(T))}return Object.defineProperty(b.prototype,"entities",{get:function(){var p,I,T,S,N;for(S={},N=this.children,I=0,T=N.length;I<T;I++)p=N[I],p.type===t.EntityDeclaration&&!p.pe&&(S[p.name]=p);return new a(S)}}),Object.defineProperty(b.prototype,"notations",{get:function(){var p,I,T,S,N;for(S={},N=this.children,I=0,T=N.length;I<T;I++)p=N[I],p.type===t.NotationDeclaration&&(S[p.name]=p);return new a(S)}}),Object.defineProperty(b.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(b.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(b.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),b.prototype.element=function(p,I){var T;return T=new s(this,p,I),this.children.push(T),this},b.prototype.attList=function(p,I,T,S,N){var x;return x=new e(this,p,I,T,S,N),this.children.push(x),this},b.prototype.entity=function(p,I){var T;return T=new m(this,!1,p,I),this.children.push(T),this},b.prototype.pEntity=function(p,I){var T;return T=new m(this,!0,p,I),this.children.push(T),this},b.prototype.notation=function(p,I){var T;return T=new r(this,p,I),this.children.push(T),this},b.prototype.toString=function(p){return this.options.writer.docType(this,this.options.writer.filterOptions(p))},b.prototype.ele=function(p,I){return this.element(p,I)},b.prototype.att=function(p,I,T,S,N){return this.attList(p,I,T,S,N)},b.prototype.ent=function(p,I){return this.entity(p,I)},b.prototype.pent=function(p,I){return this.pEntity(p,I)},b.prototype.not=function(p,I){return this.notation(p,I)},b.prototype.up=function(){return this.root()||this.documentObject},b.prototype.isEqualNode=function(p){return!(!b.__super__.isEqualNode.apply(this,arguments).isEqualNode(p)||p.name!==this.name||p.publicId!==this.publicId||p.systemId!==this.systemId)},b})(c)}).call(Hi)});var ve=$((Yi,Ji)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;t=K(),e=ct(),Ji.exports=s=(function(d){m(a,d);function a(c,u){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=t.Raw,this.value=this.stringify.raw(u)}return a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return this.options.writer.raw(this,this.options.writer.filterOptions(c))},a})(e)}).call(Yi)});var be=$((Qi,Zi)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;t=K(),e=Xt(),Zi.exports=s=(function(d){m(a,d);function a(c,u){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=t.Text,this.value=this.stringify.text(u)}return Object.defineProperty(a.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(a.prototype,"wholeText",{get:function(){var c,u,f;for(f="",u=this.previousSibling;u;)f=u.data+f,u=u.previousSibling;for(f+=this.data,c=this.nextSibling;c;)f=f+c.data,c=c.nextSibling;return f}}),a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return this.options.writer.text(this,this.options.writer.filterOptions(c))},a.prototype.splitText=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},a.prototype.replaceWholeText=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},a})(e)}).call(Qi)});var we=$((tn,en)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;t=K(),e=Xt(),en.exports=s=(function(d){m(a,d);function a(c,u,f){if(a.__super__.constructor.call(this,c),u==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=t.ProcessingInstruction,this.target=this.stringify.insTarget(u),this.name=this.target,f&&(this.value=this.stringify.insValue(f))}return a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(c))},a.prototype.isEqualNode=function(c){return!(!a.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.target!==this.target)},a})(e)}).call(tn)});var je=$((nn,rn)=>{(function(){var t,e,s,m=function(d,a){for(var c in a)r.call(a,c)&&(d[c]=a[c]);function u(){this.constructor=d}return u.prototype=a.prototype,d.prototype=new u,d.__super__=a.prototype,d},r={}.hasOwnProperty;s=ct(),t=K(),rn.exports=e=(function(d){m(a,d);function a(c){a.__super__.constructor.call(this,c),this.type=t.Dummy}return a.prototype.clone=function(){return Object.create(this)},a.prototype.toString=function(c){return""},a})(s)}).call(nn)});var an=$((on,sn)=>{(function(){var t;sn.exports=t=(function(){function e(s){this.nodes=s}return Object.defineProperty(e.prototype,"length",{get:function(){return this.nodes.length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.item=function(s){return this.nodes[s]||null},e})()}).call(on)});var dn=$((cn,ln)=>{(function(){ln.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(cn)});var ct=$((un,pn)=>{(function(){var t,e,s,m,r,d,a,c,u,f,y,g,b,p,I,T,S,N,x,v={}.hasOwnProperty;x=gt(),N=x.isObject,S=x.isFunction,T=x.isEmpty,I=x.getValue,c=null,s=null,m=null,r=null,d=null,b=null,p=null,g=null,a=null,e=null,y=null,u=null,t=null,pn.exports=f=(function(){function o(n){this.parent=n,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,c||(c=le(),s=de(),m=ue(),r=pe(),d=ye(),b=ve(),p=be(),g=we(),a=je(),e=K(),y=an(),u=ce(),t=dn())}return Object.defineProperty(o.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(o.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(o.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(o.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(o.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new y(this.children)),this.childNodeList}}),Object.defineProperty(o.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(o.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(o.prototype,"previousSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n-1]||null}}),Object.defineProperty(o.prototype,"nextSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n+1]||null}}),Object.defineProperty(o.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(o.prototype,"textContent",{get:function(){var n,C,D,E,h;if(this.nodeType===e.Element||this.nodeType===e.DocumentFragment){for(h="",E=this.children,C=0,D=E.length;C<D;C++)n=E[C],n.textContent&&(h+=n.textContent);return h}else return null},set:function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),o.prototype.setParent=function(n){var C,D,E,h,w;for(this.parent=n,n&&(this.options=n.options,this.stringify=n.stringify),h=this.children,w=[],D=0,E=h.length;D<E;D++)C=h[D],w.push(C.setParent(this));return w},o.prototype.element=function(n,C,D){var E,h,w,A,O,P,R,L,M,F,U;if(P=null,C===null&&D==null&&(M=[{},null],C=M[0],D=M[1]),C==null&&(C={}),C=I(C),N(C)||(F=[C,D],D=F[0],C=F[1]),n!=null&&(n=I(n)),Array.isArray(n))for(w=0,R=n.length;w<R;w++)h=n[w],P=this.element(h);else if(S(n))P=this.element(n.apply());else if(N(n)){for(O in n)if(v.call(n,O))if(U=n[O],S(U)&&(U=U.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)P=this.attribute(O.substr(this.stringify.convertAttKey.length),U);else if(!this.options.separateArrayItems&&Array.isArray(U)&&T(U))P=this.dummy();else if(N(U)&&T(U))P=this.element(O);else if(!this.options.keepNullNodes&&U==null)P=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray(U))for(A=0,L=U.length;A<L;A++)h=U[A],E={},E[O]=h,P=this.element(E);else N(U)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?P=this.element(U):(P=this.element(O),P.element(U)):P=this.element(O,U)}else!this.options.keepNullNodes&&D===null?P=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&n.indexOf(this.stringify.convertTextKey)===0?P=this.text(D):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&n.indexOf(this.stringify.convertCDataKey)===0?P=this.cdata(D):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&n.indexOf(this.stringify.convertCommentKey)===0?P=this.comment(D):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&n.indexOf(this.stringify.convertRawKey)===0?P=this.raw(D):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&n.indexOf(this.stringify.convertPIKey)===0?P=this.instruction(n.substr(this.stringify.convertPIKey.length),D):P=this.node(n,C,D);if(P==null)throw new Error("Could not create any elements with: "+n+". "+this.debugInfo());return P},o.prototype.insertBefore=function(n,C,D){var E,h,w,A,O;if(n?.type)return w=n,A=C,w.setParent(this),A?(h=children.indexOf(A),O=children.splice(h),children.push(w),Array.prototype.push.apply(children,O)):children.push(w),w;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return h=this.parent.children.indexOf(this),O=this.parent.children.splice(h),E=this.parent.element(n,C,D),Array.prototype.push.apply(this.parent.children,O),E},o.prototype.insertAfter=function(n,C,D){var E,h,w;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return h=this.parent.children.indexOf(this),w=this.parent.children.splice(h+1),E=this.parent.element(n,C,D),Array.prototype.push.apply(this.parent.children,w),E},o.prototype.remove=function(){var n,C;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return n=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[n,n-n+1].concat(C=[])),this.parent},o.prototype.node=function(n,C,D){var E,h;return n!=null&&(n=I(n)),C||(C={}),C=I(C),N(C)||(h=[C,D],D=h[0],C=h[1]),E=new c(this,n,C),D!=null&&E.text(D),this.children.push(E),E},o.prototype.text=function(n){var C;return N(n)&&this.element(n),C=new p(this,n),this.children.push(C),this},o.prototype.cdata=function(n){var C;return C=new s(this,n),this.children.push(C),this},o.prototype.comment=function(n){var C;return C=new m(this,n),this.children.push(C),this},o.prototype.commentBefore=function(n){var C,D,E;return D=this.parent.children.indexOf(this),E=this.parent.children.splice(D),C=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,E),this},o.prototype.commentAfter=function(n){var C,D,E;return D=this.parent.children.indexOf(this),E=this.parent.children.splice(D+1),C=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,E),this},o.prototype.raw=function(n){var C;return C=new b(this,n),this.children.push(C),this},o.prototype.dummy=function(){var n;return n=new a(this),n},o.prototype.instruction=function(n,C){var D,E,h,w,A;if(n!=null&&(n=I(n)),C!=null&&(C=I(C)),Array.isArray(n))for(w=0,A=n.length;w<A;w++)D=n[w],this.instruction(D);else if(N(n))for(D in n)v.call(n,D)&&(E=n[D],this.instruction(D,E));else S(C)&&(C=C.apply()),h=new g(this,n,C),this.children.push(h);return this},o.prototype.instructionBefore=function(n,C){var D,E,h;return E=this.parent.children.indexOf(this),h=this.parent.children.splice(E),D=this.parent.instruction(n,C),Array.prototype.push.apply(this.parent.children,h),this},o.prototype.instructionAfter=function(n,C){var D,E,h;return E=this.parent.children.indexOf(this),h=this.parent.children.splice(E+1),D=this.parent.instruction(n,C),Array.prototype.push.apply(this.parent.children,h),this},o.prototype.declaration=function(n,C,D){var E,h;return E=this.document(),h=new r(E,n,C,D),E.children.length===0?E.children.unshift(h):E.children[0].type===e.Declaration?E.children[0]=h:E.children.unshift(h),E.root()||E},o.prototype.dtd=function(n,C){var D,E,h,w,A,O,P,R,L,M;for(E=this.document(),h=new d(E,n,C),L=E.children,w=A=0,P=L.length;A<P;w=++A)if(D=L[w],D.type===e.DocType)return E.children[w]=h,h;for(M=E.children,w=O=0,R=M.length;O<R;w=++O)if(D=M[w],D.isRoot)return E.children.splice(w,0,h),h;return E.children.push(h),h},o.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},o.prototype.root=function(){var n;for(n=this;n;){if(n.type===e.Document)return n.rootObject;if(n.isRoot)return n;n=n.parent}},o.prototype.document=function(){var n;for(n=this;n;){if(n.type===e.Document)return n;n=n.parent}},o.prototype.end=function(n){return this.document().end(n)},o.prototype.prev=function(){var n;if(n=this.parent.children.indexOf(this),n<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[n-1]},o.prototype.next=function(){var n;if(n=this.parent.children.indexOf(this),n===-1||n===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[n+1]},o.prototype.importDocument=function(n){var C;return C=n.root().clone(),C.parent=this,C.isRoot=!1,this.children.push(C),this},o.prototype.debugInfo=function(n){var C,D;return n=n||this.name,n==null&&!((C=this.parent)!=null&&C.name)?"":n==null?"parent: <"+this.parent.name+">":(D=this.parent)!=null&&D.name?"node: <"+n+">, parent: <"+this.parent.name+">":"node: <"+n+">"},o.prototype.ele=function(n,C,D){return this.element(n,C,D)},o.prototype.nod=function(n,C,D){return this.node(n,C,D)},o.prototype.txt=function(n){return this.text(n)},o.prototype.dat=function(n){return this.cdata(n)},o.prototype.com=function(n){return this.comment(n)},o.prototype.ins=function(n,C){return this.instruction(n,C)},o.prototype.doc=function(){return this.document()},o.prototype.dec=function(n,C,D){return this.declaration(n,C,D)},o.prototype.e=function(n,C,D){return this.element(n,C,D)},o.prototype.n=function(n,C,D){return this.node(n,C,D)},o.prototype.t=function(n){return this.text(n)},o.prototype.d=function(n){return this.cdata(n)},o.prototype.c=function(n){return this.comment(n)},o.prototype.r=function(n){return this.raw(n)},o.prototype.i=function(n,C){return this.instruction(n,C)},o.prototype.u=function(){return this.up()},o.prototype.importXMLBuilder=function(n){return this.importDocument(n)},o.prototype.replaceChild=function(n,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.removeChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.appendChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.hasChildNodes=function(){return this.children.length!==0},o.prototype.cloneNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isSupported=function(n,C){return!0},o.prototype.hasAttributes=function(){return this.attribs.length!==0},o.prototype.compareDocumentPosition=function(n){var C,D;return C=this,C===n?0:this.document()!==n.document()?(D=t.Disconnected|t.ImplementationSpecific,Math.random()<.5?D|=t.Preceding:D|=t.Following,D):C.isAncestor(n)?t.Contains|t.Preceding:C.isDescendant(n)?t.Contains|t.Following:C.isPreceding(n)?t.Preceding:t.Following},o.prototype.isSameNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.lookupPrefix=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isDefaultNamespace=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.lookupNamespaceURI=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.isEqualNode=function(n){var C,D,E;if(n.nodeType!==this.nodeType||n.children.length!==this.children.length)return!1;for(C=D=0,E=this.children.length-1;0<=E?D<=E:D>=E;C=0<=E?++D:--D)if(!this.children[C].isEqualNode(n.children[C]))return!1;return!0},o.prototype.getFeature=function(n,C){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.setUserData=function(n,C,D){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.getUserData=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},o.prototype.contains=function(n){return n?n===this||this.isDescendant(n):!1},o.prototype.isDescendant=function(n){var C,D,E,h,w;for(w=this.children,E=0,h=w.length;E<h;E++)if(C=w[E],n===C||(D=C.isDescendant(n),D))return!0;return!1},o.prototype.isAncestor=function(n){return n.isDescendant(this)},o.prototype.isPreceding=function(n){var C,D;return C=this.treePosition(n),D=this.treePosition(this),C===-1||D===-1?!1:C<D},o.prototype.isFollowing=function(n){var C,D;return C=this.treePosition(n),D=this.treePosition(this),C===-1||D===-1?!1:C>D},o.prototype.treePosition=function(n){var C,D;return D=0,C=!1,this.foreachTreeNode(this.document(),function(E){if(D++,!C&&E===n)return C=!0}),C?D:-1},o.prototype.foreachTreeNode=function(n,C){var D,E,h,w,A;for(n||(n=this.document()),w=n.children,E=0,h=w.length;E<h;E++){if(D=w[E],A=C(D))return A;if(A=this.foreachTreeNode(D,C),A)return A}},o})()}).call(un)});var Ve=$((fn,hn)=>{(function(){var t,e=function(m,r){return function(){return m.apply(r,arguments)}},s={}.hasOwnProperty;hn.exports=t=(function(){function m(r){this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this);var d,a,c;r||(r={}),this.options=r,this.options.version||(this.options.version="1.0"),a=r.stringify||{};for(d in a)s.call(a,d)&&(c=a[d],this[d]=c)}return m.prototype.name=function(r){return this.options.noValidation?r:this.assertLegalName(""+r||"")},m.prototype.text=function(r){return this.options.noValidation?r:this.assertLegalChar(this.textEscape(""+r||""))},m.prototype.cdata=function(r){return this.options.noValidation?r:(r=""+r||"",r=r.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(r))},m.prototype.comment=function(r){if(this.options.noValidation)return r;if(r=""+r||"",r.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+r);return this.assertLegalChar(r)},m.prototype.raw=function(r){return this.options.noValidation?r:""+r||""},m.prototype.attValue=function(r){return this.options.noValidation?r:this.assertLegalChar(this.attEscape(r=""+r||""))},m.prototype.insTarget=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.insValue=function(r){if(this.options.noValidation)return r;if(r=""+r||"",r.match(/\?>/))throw new Error("Invalid processing instruction value: "+r);return this.assertLegalChar(r)},m.prototype.xmlVersion=function(r){if(this.options.noValidation)return r;if(r=""+r||"",!r.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+r);return r},m.prototype.xmlEncoding=function(r){if(this.options.noValidation)return r;if(r=""+r||"",!r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+r);return this.assertLegalChar(r)},m.prototype.xmlStandalone=function(r){return this.options.noValidation?r:r?"yes":"no"},m.prototype.dtdPubID=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdSysID=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdElementValue=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdAttType=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdAttDefault=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdEntityValue=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.dtdNData=function(r){return this.options.noValidation?r:this.assertLegalChar(""+r||"")},m.prototype.convertAttKey="@",m.prototype.convertPIKey="?",m.prototype.convertTextKey="#text",m.prototype.convertCDataKey="#cdata",m.prototype.convertCommentKey="#comment",m.prototype.convertRawKey="#raw",m.prototype.assertLegalChar=function(r){var d,a;if(this.options.noValidation)return r;if(d="",this.options.version==="1.0"){if(d=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,a=r.match(d))throw new Error("Invalid character in string: "+r+" at index "+a.index)}else if(this.options.version==="1.1"&&(d=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,a=r.match(d)))throw new Error("Invalid character in string: "+r+" at index "+a.index);return r},m.prototype.assertLegalName=function(r){var d;if(this.options.noValidation)return r;if(this.assertLegalChar(r),d=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!r.match(d))throw new Error("Invalid character in name");return r},m.prototype.textEscape=function(r){var d;return this.options.noValidation?r:(d=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,r.replace(d,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},m.prototype.attEscape=function(r){var d;return this.options.noValidation?r:(d=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,r.replace(d,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},m})()}).call(fn)});var Gt=$((mn,gn)=>{(function(){gn.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(mn)});var Xe=$((yn,vn)=>{(function(){var t,e,s,m,r,d,a,c,u,f,y,g,b,p,I,T,S,N={}.hasOwnProperty;S=gt().assign,t=K(),u=pe(),f=ye(),s=de(),m=ue(),g=le(),p=ve(),I=be(),b=we(),y=je(),r=fe(),d=me(),a=he(),c=ge(),e=Gt(),vn.exports=T=(function(){function x(v){var o,n,C;v||(v={}),this.options=v,n=v.writer||{};for(o in n)N.call(n,o)&&(C=n[o],this["_"+o]=this[o],this[o]=C)}return x.prototype.filterOptions=function(v){var o,n,C,D,E,h,w,A;return v||(v={}),v=S({},this.options,v),o={writer:this},o.pretty=v.pretty||!1,o.allowEmpty=v.allowEmpty||!1,o.indent=(n=v.indent)!=null?n:"  ",o.newline=(C=v.newline)!=null?C:`
`,o.offset=(D=v.offset)!=null?D:0,o.dontPrettyTextNodes=(E=(h=v.dontPrettyTextNodes)!=null?h:v.dontprettytextnodes)!=null?E:0,o.spaceBeforeSlash=(w=(A=v.spaceBeforeSlash)!=null?A:v.spacebeforeslash)!=null?w:"",o.spaceBeforeSlash===!0&&(o.spaceBeforeSlash=" "),o.suppressPrettyCount=0,o.user={},o.state=e.None,o},x.prototype.indent=function(v,o,n){var C;return!o.pretty||o.suppressPrettyCount?"":o.pretty&&(C=(n||0)+o.offset+1,C>0)?new Array(C).join(o.indent):""},x.prototype.endline=function(v,o,n){return!o.pretty||o.suppressPrettyCount?"":o.newline},x.prototype.attribute=function(v,o,n){var C;return this.openAttribute(v,o,n),C=" "+v.name+'="'+v.value+'"',this.closeAttribute(v,o,n),C},x.prototype.cdata=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<![CDATA[",o.state=e.InsideTag,C+=v.value,o.state=e.CloseTag,C+="]]>"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.comment=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<!-- ",o.state=e.InsideTag,C+=v.value,o.state=e.CloseTag,C+=" -->"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.declaration=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<?xml",o.state=e.InsideTag,C+=' version="'+v.version+'"',v.encoding!=null&&(C+=' encoding="'+v.encoding+'"'),v.standalone!=null&&(C+=' standalone="'+v.standalone+'"'),o.state=e.CloseTag,C+=o.spaceBeforeSlash+"?>",C+=this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.docType=function(v,o,n){var C,D,E,h,w;if(n||(n=0),this.openNode(v,o,n),o.state=e.OpenTag,h=this.indent(v,o,n),h+="<!DOCTYPE "+v.root().name,v.pubID&&v.sysID?h+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(h+=' SYSTEM "'+v.sysID+'"'),v.children.length>0){for(h+=" [",h+=this.endline(v,o,n),o.state=e.InsideTag,w=v.children,D=0,E=w.length;D<E;D++)C=w[D],h+=this.writeChildNode(C,o,n+1);o.state=e.CloseTag,h+="]"}return o.state=e.CloseTag,h+=o.spaceBeforeSlash+">",h+=this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),h},x.prototype.element=function(v,o,n){var C,D,E,h,w,A,O,P,R,L,M,F,U,Y;n||(n=0),L=!1,M="",this.openNode(v,o,n),o.state=e.OpenTag,M+=this.indent(v,o,n)+"<"+v.name,F=v.attribs;for(R in F)N.call(F,R)&&(C=F[R],M+=this.attribute(C,o,n));if(E=v.children.length,h=E===0?null:v.children[0],E===0||v.children.every(function(at){return(at.type===t.Text||at.type===t.Raw)&&at.value===""}))o.allowEmpty?(M+=">",o.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,o,n)):(o.state=e.CloseTag,M+=o.spaceBeforeSlash+"/>"+this.endline(v,o,n));else if(o.pretty&&E===1&&(h.type===t.Text||h.type===t.Raw)&&h.value!=null)M+=">",o.state=e.InsideTag,o.suppressPrettyCount++,L=!0,M+=this.writeChildNode(h,o,n+1),o.suppressPrettyCount--,L=!1,o.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,o,n);else{if(o.dontPrettyTextNodes){for(U=v.children,w=0,O=U.length;w<O;w++)if(D=U[w],(D.type===t.Text||D.type===t.Raw)&&D.value!=null){o.suppressPrettyCount++,L=!0;break}}for(M+=">"+this.endline(v,o,n),o.state=e.InsideTag,Y=v.children,A=0,P=Y.length;A<P;A++)D=Y[A],M+=this.writeChildNode(D,o,n+1);o.state=e.CloseTag,M+=this.indent(v,o,n)+"</"+v.name+">",L&&o.suppressPrettyCount--,M+=this.endline(v,o,n),o.state=e.None}return this.closeNode(v,o,n),M},x.prototype.writeChildNode=function(v,o,n){switch(v.type){case t.CData:return this.cdata(v,o,n);case t.Comment:return this.comment(v,o,n);case t.Element:return this.element(v,o,n);case t.Raw:return this.raw(v,o,n);case t.Text:return this.text(v,o,n);case t.ProcessingInstruction:return this.processingInstruction(v,o,n);case t.Dummy:return"";case t.Declaration:return this.declaration(v,o,n);case t.DocType:return this.docType(v,o,n);case t.AttributeDeclaration:return this.dtdAttList(v,o,n);case t.ElementDeclaration:return this.dtdElement(v,o,n);case t.EntityDeclaration:return this.dtdEntity(v,o,n);case t.NotationDeclaration:return this.dtdNotation(v,o,n);default:throw new Error("Unknown XML node type: "+v.constructor.name)}},x.prototype.processingInstruction=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<?",o.state=e.InsideTag,C+=v.target,v.value&&(C+=" "+v.value),o.state=e.CloseTag,C+=o.spaceBeforeSlash+"?>",C+=this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.raw=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n),o.state=e.InsideTag,C+=v.value,o.state=e.CloseTag,C+=this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.text=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n),o.state=e.InsideTag,C+=v.value,o.state=e.CloseTag,C+=this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.dtdAttList=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<!ATTLIST",o.state=e.InsideTag,C+=" "+v.elementName+" "+v.attributeName+" "+v.attributeType,v.defaultValueType!=="#DEFAULT"&&(C+=" "+v.defaultValueType),v.defaultValue&&(C+=' "'+v.defaultValue+'"'),o.state=e.CloseTag,C+=o.spaceBeforeSlash+">"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.dtdElement=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<!ELEMENT",o.state=e.InsideTag,C+=" "+v.name+" "+v.value,o.state=e.CloseTag,C+=o.spaceBeforeSlash+">"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.dtdEntity=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<!ENTITY",o.state=e.InsideTag,v.pe&&(C+=" %"),C+=" "+v.name,v.value?C+=' "'+v.value+'"':(v.pubID&&v.sysID?C+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(C+=' SYSTEM "'+v.sysID+'"'),v.nData&&(C+=" NDATA "+v.nData)),o.state=e.CloseTag,C+=o.spaceBeforeSlash+">"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.dtdNotation=function(v,o,n){var C;return this.openNode(v,o,n),o.state=e.OpenTag,C=this.indent(v,o,n)+"<!NOTATION",o.state=e.InsideTag,C+=" "+v.name,v.pubID&&v.sysID?C+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.pubID?C+=' PUBLIC "'+v.pubID+'"':v.sysID&&(C+=' SYSTEM "'+v.sysID+'"'),o.state=e.CloseTag,C+=o.spaceBeforeSlash+">"+this.endline(v,o,n),o.state=e.None,this.closeNode(v,o,n),C},x.prototype.openNode=function(v,o,n){},x.prototype.closeNode=function(v,o,n){},x.prototype.openAttribute=function(v,o,n){},x.prototype.closeAttribute=function(v,o,n){},x})()}).call(yn)});var Ce=$((bn,wn)=>{(function(){var t,e,s=function(r,d){for(var a in d)m.call(d,a)&&(r[a]=d[a]);function c(){this.constructor=r}return c.prototype=d.prototype,r.prototype=new c,r.__super__=d.prototype,r},m={}.hasOwnProperty;e=Xe(),wn.exports=t=(function(r){s(d,r);function d(a){d.__super__.constructor.call(this,a)}return d.prototype.document=function(a,c){var u,f,y,g,b;for(c=this.filterOptions(c),g="",b=a.children,f=0,y=b.length;f<y;f++)u=b[f],g+=this.writeChildNode(u,c,0);return c.pretty&&g.slice(-c.newline.length)===c.newline&&(g=g.slice(0,-c.newline.length)),g},d})(e)}).call(bn)});var Ge=$((Cn,In)=>{(function(){var t,e,s,m,r,d,a,c,u=function(y,g){for(var b in g)f.call(g,b)&&(y[b]=g[b]);function p(){this.constructor=y}return p.prototype=g.prototype,y.prototype=new p,y.__super__=g.prototype,y},f={}.hasOwnProperty;c=gt().isPlainObject,s=qe(),e=Ti(),r=ct(),t=K(),a=Ve(),d=Ce(),In.exports=m=(function(y){u(g,y);function g(b){g.__super__.constructor.call(this,null),this.name="#document",this.type=t.Document,this.documentURI=null,this.domConfig=new e,b||(b={}),b.writer||(b.writer=new d),this.options=b,this.stringify=new a(b)}return Object.defineProperty(g.prototype,"implementation",{value:new s}),Object.defineProperty(g.prototype,"doctype",{get:function(){var b,p,I,T;for(T=this.children,p=0,I=T.length;p<I;p++)if(b=T[p],b.type===t.DocType)return b;return null}}),Object.defineProperty(g.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(g.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(g.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(g.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].encoding:null}}),Object.defineProperty(g.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(g.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(g.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(g.prototype,"origin",{get:function(){return null}}),Object.defineProperty(g.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(g.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(g.prototype,"contentType",{get:function(){return null}}),g.prototype.end=function(b){var p;return p={},b?c(b)&&(p=b,b=this.options.writer):b=this.options.writer,b.document(this,b.filterOptions(p))},g.prototype.toString=function(b){return this.options.writer.document(this,this.options.writer.filterOptions(b))},g.prototype.createElement=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createTextNode=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createComment=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createCDATASection=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createProcessingInstruction=function(b,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createAttribute=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createEntityReference=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.getElementsByTagName=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.importNode=function(b,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createElementNS=function(b,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createAttributeNS=function(b,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.getElementsByTagNameNS=function(b,p){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.getElementById=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.adoptNode=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.renameNode=function(b,p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.getElementsByClassName=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createEvent=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createNodeIterator=function(b,p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},g.prototype.createTreeWalker=function(b,p,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},g})(r)}).call(Cn)});var _n=$((Tn,xn)=>{(function(){var t,e,s,m,r,d,a,c,u,f,y,g,b,p,I,T,S,N,x,v,o,n,C,D,E={}.hasOwnProperty;D=gt(),n=D.isObject,o=D.isFunction,C=D.isPlainObject,v=D.getValue,t=K(),g=Ge(),p=le(),m=de(),r=ue(),T=ve(),x=be(),I=we(),f=pe(),y=ye(),d=fe(),c=he(),a=me(),u=ge(),s=ze(),N=Ve(),S=Ce(),e=Gt(),xn.exports=b=(function(){function h(w,A,O){var P;this.name="?xml",this.type=t.Document,w||(w={}),P={},w.writer?C(w.writer)&&(P=w.writer,w.writer=new S):w.writer=new S,this.options=w,this.writer=w.writer,this.writerOptions=this.writer.filterOptions(P),this.stringify=new N(w),this.onDataCallback=A||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return h.prototype.createChildNode=function(w){var A,O,P,R,L,M,F,U;switch(w.type){case t.CData:this.cdata(w.value);break;case t.Comment:this.comment(w.value);break;case t.Element:P={},F=w.attribs;for(O in F)E.call(F,O)&&(A=F[O],P[O]=A.value);this.node(w.name,P);break;case t.Dummy:this.dummy();break;case t.Raw:this.raw(w.value);break;case t.Text:this.text(w.value);break;case t.ProcessingInstruction:this.instruction(w.target,w.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+w.constructor.name)}for(U=w.children,L=0,M=U.length;L<M;L++)R=U[L],this.createChildNode(R),R.type===t.Element&&this.up();return this},h.prototype.dummy=function(){return this},h.prototype.node=function(w,A,O){var P;if(w==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(w));return this.openCurrent(),w=v(w),A==null&&(A={}),A=v(A),n(A)||(P=[A,O],O=P[0],A=P[1]),this.currentNode=new p(this,w,A),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},h.prototype.element=function(w,A,O){var P,R,L,M,F,U;if(this.currentNode&&this.currentNode.type===t.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(w)||n(w)||o(w))for(M=this.options.noValidation,this.options.noValidation=!0,U=new g(this.options).element("TEMP_ROOT"),U.element(w),this.options.noValidation=M,F=U.children,R=0,L=F.length;R<L;R++)P=F[R],this.createChildNode(P),P.type===t.Element&&this.up();else this.node(w,A,O);return this},h.prototype.attribute=function(w,A){var O,P;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(w));if(w!=null&&(w=v(w)),n(w))for(O in w)E.call(w,O)&&(P=w[O],this.attribute(O,P));else o(A)&&(A=A.apply()),this.options.keepNullAttributes&&A==null?this.currentNode.attribs[w]=new s(this,w,""):A!=null&&(this.currentNode.attribs[w]=new s(this,w,A));return this},h.prototype.text=function(w){var A;return this.openCurrent(),A=new x(this,w),this.onData(this.writer.text(A,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.cdata=function(w){var A;return this.openCurrent(),A=new m(this,w),this.onData(this.writer.cdata(A,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.comment=function(w){var A;return this.openCurrent(),A=new r(this,w),this.onData(this.writer.comment(A,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.raw=function(w){var A;return this.openCurrent(),A=new T(this,w),this.onData(this.writer.raw(A,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.instruction=function(w,A){var O,P,R,L,M;if(this.openCurrent(),w!=null&&(w=v(w)),A!=null&&(A=v(A)),Array.isArray(w))for(O=0,L=w.length;O<L;O++)P=w[O],this.instruction(P);else if(n(w))for(P in w)E.call(w,P)&&(R=w[P],this.instruction(P,R));else o(A)&&(A=A.apply()),M=new I(this,w,A),this.onData(this.writer.processingInstruction(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},h.prototype.declaration=function(w,A,O){var P;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return P=new f(this,w,A,O),this.onData(this.writer.declaration(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.doctype=function(w,A,O){if(this.openCurrent(),w==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new y(this,A,O),this.currentNode.rootNodeName=w,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},h.prototype.dtdElement=function(w,A){var O;return this.openCurrent(),O=new a(this,w,A),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.attList=function(w,A,O,P,R){var L;return this.openCurrent(),L=new d(this,w,A,O,P,R),this.onData(this.writer.dtdAttList(L,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.entity=function(w,A){var O;return this.openCurrent(),O=new c(this,!1,w,A),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.pEntity=function(w,A){var O;return this.openCurrent(),O=new c(this,!0,w,A),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.notation=function(w,A){var O;return this.openCurrent(),O=new u(this,w,A),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},h.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},h.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},h.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},h.prototype.openNode=function(w){var A,O,P,R;if(!w.isOpen){if(!this.root&&this.currentLevel===0&&w.type===t.Element&&(this.root=w),O="",w.type===t.Element){this.writerOptions.state=e.OpenTag,O=this.writer.indent(w,this.writerOptions,this.currentLevel)+"<"+w.name,R=w.attribs;for(P in R)E.call(R,P)&&(A=R[P],O+=this.writer.attribute(A,this.writerOptions,this.currentLevel));O+=(w.children?">":"/>")+this.writer.endline(w,this.writerOptions,this.currentLevel),this.writerOptions.state=e.InsideTag}else this.writerOptions.state=e.OpenTag,O=this.writer.indent(w,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+w.rootNodeName,w.pubID&&w.sysID?O+=' PUBLIC "'+w.pubID+'" "'+w.sysID+'"':w.sysID&&(O+=' SYSTEM "'+w.sysID+'"'),w.children?(O+=" [",this.writerOptions.state=e.InsideTag):(this.writerOptions.state=e.CloseTag,O+=">"),O+=this.writer.endline(w,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),w.isOpen=!0}},h.prototype.closeNode=function(w){var A;if(!w.isClosed)return A="",this.writerOptions.state=e.CloseTag,w.type===t.Element?A=this.writer.indent(w,this.writerOptions,this.currentLevel)+"</"+w.name+">"+this.writer.endline(w,this.writerOptions,this.currentLevel):A=this.writer.indent(w,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(w,this.writerOptions,this.currentLevel),this.writerOptions.state=e.None,this.onData(A,this.currentLevel),w.isClosed=!0},h.prototype.onData=function(w,A){return this.documentStarted=!0,this.onDataCallback(w,A+1)},h.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},h.prototype.debugInfo=function(w){return w==null?"":"node: <"+w+">"},h.prototype.ele=function(){return this.element.apply(this,arguments)},h.prototype.nod=function(w,A,O){return this.node(w,A,O)},h.prototype.txt=function(w){return this.text(w)},h.prototype.dat=function(w){return this.cdata(w)},h.prototype.com=function(w){return this.comment(w)},h.prototype.ins=function(w,A){return this.instruction(w,A)},h.prototype.dec=function(w,A,O){return this.declaration(w,A,O)},h.prototype.dtd=function(w,A,O){return this.doctype(w,A,O)},h.prototype.e=function(w,A,O){return this.element(w,A,O)},h.prototype.n=function(w,A,O){return this.node(w,A,O)},h.prototype.t=function(w){return this.text(w)},h.prototype.d=function(w){return this.cdata(w)},h.prototype.c=function(w){return this.comment(w)},h.prototype.r=function(w){return this.raw(w)},h.prototype.i=function(w,A){return this.instruction(w,A)},h.prototype.att=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},h.prototype.a=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},h.prototype.ent=function(w,A){return this.entity(w,A)},h.prototype.pent=function(w,A){return this.pEntity(w,A)},h.prototype.not=function(w,A){return this.notation(w,A)},h})()}).call(Tn)});var An=$((En,Sn)=>{(function(){var t,e,s,m,r=function(a,c){for(var u in c)d.call(c,u)&&(a[u]=c[u]);function f(){this.constructor=a}return f.prototype=c.prototype,a.prototype=new f,a.__super__=c.prototype,a},d={}.hasOwnProperty;t=K(),m=Xe(),e=Gt(),Sn.exports=s=(function(a){r(c,a);function c(u,f){this.stream=u,c.__super__.constructor.call(this,f)}return c.prototype.endline=function(u,f,y){return u.isLastRootNode&&f.state===e.CloseTag?"":c.__super__.endline.call(this,u,f,y)},c.prototype.document=function(u,f){var y,g,b,p,I,T,S,N,x;for(S=u.children,g=b=0,I=S.length;b<I;g=++b)y=S[g],y.isLastRootNode=g===u.children.length-1;for(f=this.filterOptions(f),N=u.children,x=[],p=0,T=N.length;p<T;p++)y=N[p],x.push(this.writeChildNode(y,f,0));return x},c.prototype.attribute=function(u,f,y){return this.stream.write(c.__super__.attribute.call(this,u,f,y))},c.prototype.cdata=function(u,f,y){return this.stream.write(c.__super__.cdata.call(this,u,f,y))},c.prototype.comment=function(u,f,y){return this.stream.write(c.__super__.comment.call(this,u,f,y))},c.prototype.declaration=function(u,f,y){return this.stream.write(c.__super__.declaration.call(this,u,f,y))},c.prototype.docType=function(u,f,y){var g,b,p,I;if(y||(y=0),this.openNode(u,f,y),f.state=e.OpenTag,this.stream.write(this.indent(u,f,y)),this.stream.write("<!DOCTYPE "+u.root().name),u.pubID&&u.sysID?this.stream.write(' PUBLIC "'+u.pubID+'" "'+u.sysID+'"'):u.sysID&&this.stream.write(' SYSTEM "'+u.sysID+'"'),u.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(u,f,y)),f.state=e.InsideTag,I=u.children,b=0,p=I.length;b<p;b++)g=I[b],this.writeChildNode(g,f,y+1);f.state=e.CloseTag,this.stream.write("]")}return f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+">"),this.stream.write(this.endline(u,f,y)),f.state=e.None,this.closeNode(u,f,y)},c.prototype.element=function(u,f,y){var g,b,p,I,T,S,N,x,v,o;y||(y=0),this.openNode(u,f,y),f.state=e.OpenTag,this.stream.write(this.indent(u,f,y)+"<"+u.name),v=u.attribs;for(N in v)d.call(v,N)&&(g=v[N],this.attribute(g,f,y));if(p=u.children.length,I=p===0?null:u.children[0],p===0||u.children.every(function(n){return(n.type===t.Text||n.type===t.Raw)&&n.value===""}))f.allowEmpty?(this.stream.write(">"),f.state=e.CloseTag,this.stream.write("</"+u.name+">")):(f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+"/>"));else if(f.pretty&&p===1&&(I.type===t.Text||I.type===t.Raw)&&I.value!=null)this.stream.write(">"),f.state=e.InsideTag,f.suppressPrettyCount++,x=!0,this.writeChildNode(I,f,y+1),f.suppressPrettyCount--,x=!1,f.state=e.CloseTag,this.stream.write("</"+u.name+">");else{for(this.stream.write(">"+this.endline(u,f,y)),f.state=e.InsideTag,o=u.children,T=0,S=o.length;T<S;T++)b=o[T],this.writeChildNode(b,f,y+1);f.state=e.CloseTag,this.stream.write(this.indent(u,f,y)+"</"+u.name+">")}return this.stream.write(this.endline(u,f,y)),f.state=e.None,this.closeNode(u,f,y)},c.prototype.processingInstruction=function(u,f,y){return this.stream.write(c.__super__.processingInstruction.call(this,u,f,y))},c.prototype.raw=function(u,f,y){return this.stream.write(c.__super__.raw.call(this,u,f,y))},c.prototype.text=function(u,f,y){return this.stream.write(c.__super__.text.call(this,u,f,y))},c.prototype.dtdAttList=function(u,f,y){return this.stream.write(c.__super__.dtdAttList.call(this,u,f,y))},c.prototype.dtdElement=function(u,f,y){return this.stream.write(c.__super__.dtdElement.call(this,u,f,y))},c.prototype.dtdEntity=function(u,f,y){return this.stream.write(c.__super__.dtdEntity.call(this,u,f,y))},c.prototype.dtdNotation=function(u,f,y){return this.stream.write(c.__super__.dtdNotation.call(this,u,f,y))},c})(m)}).call(En)});var Nn=$((Dn,Tt)=>{(function(){var t,e,s,m,r,d,a,c,u,f;f=gt(),c=f.assign,u=f.isFunction,s=qe(),m=Ge(),r=_n(),a=Ce(),d=An(),t=K(),e=Gt(),Tt.exports.create=function(y,g,b,p){var I,T;if(y==null)throw new Error("Root element needs a name.");return p=c({},g,b,p),I=new m(p),T=I.element(y),p.headless||(I.declaration(p),(p.pubID!=null||p.sysID!=null)&&I.dtd(p)),T},Tt.exports.begin=function(y,g,b){var p;return u(y)&&(p=[y,g],g=p[0],b=p[1],y={}),g?new r(y,g,b):new m(y)},Tt.exports.stringWriter=function(y){return new a(y)},Tt.exports.streamWriter=function(y,g){return new d(y,g)},Tt.exports.implementation=new s,Tt.exports.nodeType=t,Tt.exports.writerState=e}).call(Dn)});var kn=$(We=>{(function(){"use strict";var t,e,s,m,r,d={}.hasOwnProperty;t=Nn(),e=ae().defaults,m=function(a){return typeof a=="string"&&(a.indexOf("&")>=0||a.indexOf(">")>=0||a.indexOf("<")>=0)},r=function(a){return"<![CDATA["+s(a)+"]]>"},s=function(a){return a.replace("]]>","]]]]><![CDATA[>")},We.Builder=(function(){function a(c){var u,f,y;this.options={},f=e["0.2"];for(u in f)d.call(f,u)&&(y=f[u],this.options[u]=y);for(u in c)d.call(c,u)&&(y=c[u],this.options[u]=y)}return a.prototype.buildObject=function(c){var u,f,y,g,b;return u=this.options.attrkey,f=this.options.charkey,Object.keys(c).length===1&&this.options.rootName===e["0.2"].rootName?(b=Object.keys(c)[0],c=c[b]):b=this.options.rootName,y=(function(p){return function(I,T){var S,N,x,v,o,n;if(typeof T!="object")p.options.cdata&&m(T)?I.raw(r(T)):I.txt(T);else if(Array.isArray(T)){for(v in T)if(d.call(T,v)){N=T[v];for(o in N)x=N[o],I=y(I.ele(o),x).up()}}else for(o in T)if(d.call(T,o))if(N=T[o],o===u){if(typeof N=="object")for(S in N)n=N[S],I=I.att(S,n)}else if(o===f)p.options.cdata&&m(N)?I=I.raw(r(N)):I=I.txt(N);else if(Array.isArray(N))for(v in N)d.call(N,v)&&(x=N[v],typeof x=="string"?p.options.cdata&&m(x)?I=I.ele(o).raw(r(x)).up():I=I.ele(o,x).up():I=y(I.ele(o),x).up());else typeof N=="object"?I=y(I.ele(o),N).up():typeof N=="string"&&p.options.cdata&&m(N)?I=I.ele(o).raw(r(N)).up():(N==null&&(N=""),I=I.ele(o,N.toString()).up());return I}})(this),g=t.create(b,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),y(g,c).end(this.options.renderOpts)},a})()}).call(We)});var On=$(Ie=>{(function(t){t.parser=function(l,i){return new s(l,i)},t.SAXParser=s,t.SAXStream=y,t.createStream=u,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function s(l,i){if(!(this instanceof s))return new s(l,i);var k=this;r(k),k.q=k.c="",k.bufferCheckPosition=t.MAX_BUFFER_LENGTH,k.encoding=null,k.opt=i||{},k.opt.lowercase=k.opt.lowercase||k.opt.lowercasetags,k.looseCase=k.opt.lowercase?"toLowerCase":"toUpperCase",k.opt.maxEntityCount=k.opt.maxEntityCount||512,k.opt.maxEntityDepth=k.opt.maxEntityDepth||4,k.entityCount=k.entityDepth=0,k.tags=[],k.closed=k.closedRoot=k.sawRoot=!1,k.tag=k.error=null,k.strict=!!l,k.noscript=!!(l||k.opt.noscript),k.state=h.BEGIN,k.strictEntities=k.opt.strictEntities,k.ENTITIES=k.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),k.attribList=[],k.opt.xmlns&&(k.ns=Object.create(T)),k.opt.unquotedAttributeValues===void 0&&(k.opt.unquotedAttributeValues=!l),k.trackPosition=k.opt.position!==!1,k.trackPosition&&(k.position=k.line=k.column=0),A(k,"onready")}Object.create||(Object.create=function(l){function i(){}i.prototype=l;var k=new i;return k}),Object.keys||(Object.keys=function(l){var i=[];for(var k in l)l.hasOwnProperty(k)&&i.push(k);return i});function m(l){for(var i=Math.max(t.MAX_BUFFER_LENGTH,10),k=0,_=0,z=e.length;_<z;_++){var G=l[e[_]].length;if(G>i)switch(e[_]){case"textNode":F(l);break;case"cdata":M(l,"oncdata",l.cdata),l.cdata="";break;case"script":M(l,"onscript",l.script),l.script="";break;default:Y(l,"Max buffer length exceeded: "+e[_])}k=Math.max(k,G)}var H=t.MAX_BUFFER_LENGTH-k;l.bufferCheckPosition=H+l.position}function r(l){for(var i=0,k=e.length;i<k;i++)l[e[i]]=""}function d(l){F(l),l.cdata!==""&&(M(l,"oncdata",l.cdata),l.cdata=""),l.script!==""&&(M(l,"onscript",l.script),l.script="")}s.prototype={end:function(){at(this)},write:ee,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){d(this)}};var a;try{a=require("stream").Stream}catch{a=function(){}}a||(a=function(){});var c=t.EVENTS.filter(function(l){return l!=="error"&&l!=="end"});function u(l,i){return new y(l,i)}function f(l,i){if(l.length>=2){if(l[0]===255&&l[1]===254)return"utf-16le";if(l[0]===254&&l[1]===255)return"utf-16be"}return l.length>=3&&l[0]===239&&l[1]===187&&l[2]===191?"utf8":l.length>=4?l[0]===60&&l[1]===0&&l[2]===63&&l[3]===0?"utf-16le":l[0]===0&&l[1]===60&&l[2]===0&&l[3]===63?"utf-16be":"utf8":i?"utf8":null}function y(l,i){if(!(this instanceof y))return new y(l,i);a.apply(this),this._parser=new s(l,i),this.writable=!0,this.readable=!0;var k=this;this._parser.onend=function(){k.emit("end")},this._parser.onerror=function(_){k.emit("error",_),k._parser.error=null},this._decoder=null,this._decoderBuffer=null,c.forEach(function(_){Object.defineProperty(k,"on"+_,{get:function(){return k._parser["on"+_]},set:function(z){if(!z)return k.removeAllListeners(_),k._parser["on"+_]=z,z;k.on(_,z)},enumerable:!0,configurable:!1})})}y.prototype=Object.create(a.prototype,{constructor:{value:y}}),y.prototype._decodeBuffer=function(l,i){if(this._decoderBuffer&&(l=Buffer.concat([this._decoderBuffer,l]),this._decoderBuffer=null),!this._decoder){var k=f(l,i);if(!k)return this._decoderBuffer=l,"";this._parser.encoding=k,this._decoder=new TextDecoder(k)}return this._decoder.decode(l,{stream:!i})},y.prototype.write=function(l){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(l))l=this._decodeBuffer(l,!1);else if(this._decoderBuffer){var i=this._decodeBuffer(Buffer.alloc(0),!0);i&&(this._parser.write(i),this.emit("data",i))}return this._parser.write(l.toString()),this.emit("data",l),!0},y.prototype.end=function(l){if(l&&l.length&&this.write(l),this._decoderBuffer){var i=this._decodeBuffer(Buffer.alloc(0),!0);i&&(this._parser.write(i),this.emit("data",i))}else if(this._decoder){var k=this._decoder.decode();k&&(this._parser.write(k),this.emit("data",k))}return this._parser.end(),!0},y.prototype.on=function(l,i){var k=this;return!k._parser["on"+l]&&c.indexOf(l)!==-1&&(k._parser["on"+l]=function(){var _=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);_.splice(0,0,l),k.emit.apply(k,_)}),a.prototype.on.call(k,l,i)};var g="[CDATA[",b="DOCTYPE",p="http://www.w3.org/XML/1998/namespace",I="http://www.w3.org/2000/xmlns/",T={xml:p,xmlns:I},S=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,x=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function o(l){return l===" "||l===`
`||l==="\r"||l==="	"}function n(l){return l==='"'||l==="'"}function C(l){return l===">"||o(l)}function D(l,i){return l.test(i)}function E(l,i){return!D(l,i)}var h=0;t.STATE={BEGIN:h++,BEGIN_WHITESPACE:h++,TEXT:h++,TEXT_ENTITY:h++,OPEN_WAKA:h++,SGML_DECL:h++,SGML_DECL_QUOTED:h++,DOCTYPE:h++,DOCTYPE_QUOTED:h++,DOCTYPE_DTD:h++,DOCTYPE_DTD_QUOTED:h++,COMMENT_STARTING:h++,COMMENT:h++,COMMENT_ENDING:h++,COMMENT_ENDED:h++,CDATA:h++,CDATA_ENDING:h++,CDATA_ENDING_2:h++,PROC_INST:h++,PROC_INST_BODY:h++,PROC_INST_ENDING:h++,OPEN_TAG:h++,OPEN_TAG_SLASH:h++,ATTRIB:h++,ATTRIB_NAME:h++,ATTRIB_NAME_SAW_WHITE:h++,ATTRIB_VALUE:h++,ATTRIB_VALUE_QUOTED:h++,ATTRIB_VALUE_CLOSED:h++,ATTRIB_VALUE_UNQUOTED:h++,ATTRIB_VALUE_ENTITY_Q:h++,ATTRIB_VALUE_ENTITY_U:h++,CLOSE_TAG:h++,CLOSE_TAG_SAW_WHITE:h++,SCRIPT:h++,SCRIPT_ENDING:h++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(l){var i=t.ENTITIES[l],k=typeof i=="number"?String.fromCharCode(i):i;t.ENTITIES[l]=k});for(var w in t.STATE)t.STATE[t.STATE[w]]=w;h=t.STATE;function A(l,i,k){l[i]&&l[i](k)}function O(l){var i=l&&l.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return i?i[2]:null}function P(l){return l?l.toLowerCase().replace(/[^a-z0-9]/g,""):null}function R(l,i){let k=P(l),_=P(i);return!k||!_?!0:_==="utf16"?k==="utf16le"||k==="utf16be":k===_}function L(l,i){if(!(!l.strict||!l.encoding||!i||i.name!=="xml")){var k=O(i.body);k&&!R(l.encoding,k)&&j(l,"XML declaration encoding "+k+" does not match detected stream encoding "+l.encoding.toUpperCase())}}function M(l,i,k){l.textNode&&F(l),A(l,i,k)}function F(l){l.textNode=U(l.opt,l.textNode),l.textNode&&A(l,"ontext",l.textNode),l.textNode=""}function U(l,i){return l.trim&&(i=i.trim()),l.normalize&&(i=i.replace(/\s+/g," ")),i}function Y(l,i){return F(l),l.trackPosition&&(i+=`
Line: `+l.line+`
Column: `+l.column+`
Char: `+l.c),i=new Error(i),l.error=i,A(l,"onerror",i),l}function at(l){return l.sawRoot&&!l.closedRoot&&j(l,"Unclosed root tag"),l.state!==h.BEGIN&&l.state!==h.BEGIN_WHITESPACE&&l.state!==h.TEXT&&Y(l,"Unexpected end"),F(l),l.c="",l.closed=!0,A(l,"onend"),s.call(l,l.strict,l.opt),l}function j(l,i){if(typeof l!="object"||!(l instanceof s))throw new Error("bad call to strictFail");l.strict&&Y(l,i)}function Fe(l){l.strict||(l.tagName=l.tagName[l.looseCase]());var i=l.tags[l.tags.length-1]||l,k=l.tag={name:l.tagName,attributes:{}};l.opt.xmlns&&(k.ns=i.ns),l.attribList.length=0,M(l,"onopentagstart",k)}function qt(l,i){var k=l.indexOf(":"),_=k<0?["",l]:l.split(":"),z=_[0],G=_[1];return i&&l==="xmlns"&&(z="xmlns",G=""),{prefix:z,local:G}}function zt(l){if(l.strict||(l.attribName=l.attribName[l.looseCase]()),l.attribList.indexOf(l.attribName)!==-1||l.tag.attributes.hasOwnProperty(l.attribName)){l.attribName=l.attribValue="";return}if(l.opt.xmlns){var i=qt(l.attribName,!0),k=i.prefix,_=i.local;if(k==="xmlns")if(_==="xml"&&l.attribValue!==p)j(l,"xml: prefix must be bound to "+p+`
Actual: `+l.attribValue);else if(_==="xmlns"&&l.attribValue!==I)j(l,"xmlns: prefix must be bound to "+I+`
Actual: `+l.attribValue);else{var z=l.tag,G=l.tags[l.tags.length-1]||l;z.ns===G.ns&&(z.ns=Object.create(G.ns)),z.ns[_]=l.attribValue}l.attribList.push([l.attribName,l.attribValue])}else l.tag.attributes[l.attribName]=l.attribValue,M(l,"onattribute",{name:l.attribName,value:l.attribValue});l.attribName=l.attribValue=""}function vt(l,i){if(l.opt.xmlns){var k=l.tag,_=qt(l.tagName);k.prefix=_.prefix,k.local=_.local,k.uri=k.ns[_.prefix]||"",k.prefix&&!k.uri&&(j(l,"Unbound namespace prefix: "+JSON.stringify(l.tagName)),k.uri=_.prefix);var z=l.tags[l.tags.length-1]||l;k.ns&&z.ns!==k.ns&&Object.keys(k.ns).forEach(function(si){M(l,"onopennamespace",{prefix:si,uri:k.ns[si]})});for(var G=0,H=l.attribList.length;G<H;G++){var Z=l.attribList[G],it=Z[0],W=Z[1],J=qt(it,!0),lt=J.prefix,ar=J.local,oi=lt===""?"":k.ns[lt]||"",Ue={name:it,value:W,prefix:lt,local:ar,uri:oi};lt&&lt!=="xmlns"&&!oi&&(j(l,"Unbound namespace prefix: "+JSON.stringify(lt)),Ue.uri=lt),l.tag.attributes[it]=Ue,M(l,"onattribute",Ue)}l.attribList.length=0}l.tag.isSelfClosing=!!i,l.sawRoot=!0,l.tags.push(l.tag),M(l,"onopentag",l.tag),i||(!l.noscript&&l.tagName.toLowerCase()==="script"?l.state=h.SCRIPT:l.state=h.TEXT,l.tag=null,l.tagName=""),l.attribName=l.attribValue="",l.attribList.length=0}function jt(l){if(!l.tagName){j(l,"Weird empty close tag."),l.textNode+="</>",l.state=h.TEXT;return}if(l.script){if(l.tagName!=="script"){l.script+="</"+l.tagName+">",l.tagName="",l.state=h.SCRIPT;return}M(l,"onscript",l.script),l.script=""}var i=l.tags.length,k=l.tagName;l.strict||(k=k[l.looseCase]());for(var _=k;i--;){var z=l.tags[i];if(z.name!==_)j(l,"Unexpected close tag");else break}if(i<0){j(l,"Unmatched closing tag: "+l.tagName),l.textNode+="</"+l.tagName+">",l.state=h.TEXT;return}l.tagName=k;for(var G=l.tags.length;G-- >i;){var H=l.tag=l.tags.pop();l.tagName=l.tag.name,M(l,"onclosetag",l.tagName);var Z={};for(var it in H.ns)Z[it]=H.ns[it];var W=l.tags[l.tags.length-1]||l;l.opt.xmlns&&H.ns!==W.ns&&Object.keys(H.ns).forEach(function(J){var lt=H.ns[J];M(l,"onclosenamespace",{prefix:J,uri:lt})})}i===0&&(l.closedRoot=!0),l.tagName=l.attribValue=l.attribName="",l.attribList.length=0,l.state=h.TEXT}function $e(l){var i=l.entity,k=i.toLowerCase(),_,z="";return l.ENTITIES[i]?l.ENTITIES[i]:l.ENTITIES[k]?l.ENTITIES[k]:(i=k,i.charAt(0)==="#"&&(i.charAt(1)==="x"?(i=i.slice(2),_=parseInt(i,16),z=_.toString(16)):(i=i.slice(1),_=parseInt(i,10),z=_.toString(10))),i=i.replace(/^0+/,""),isNaN(_)||z.toLowerCase()!==i||_<0||_>1114111?(j(l,"Invalid character entity"),"&"+l.entity+";"):String.fromCodePoint(_))}function te(l,i){i==="<"?(l.state=h.OPEN_WAKA,l.startTagPosition=l.position):o(i)||(j(l,"Non-whitespace before first tag."),l.textNode=i,l.state=h.TEXT)}function Vt(l,i){var k="";return i<l.length&&(k=l.charAt(i)),k}function ee(l){var i=this;if(this.error)throw this.error;if(i.closed)return Y(i,"Cannot write after close. Assign an onready handler.");if(l===null)return at(i);typeof l=="object"&&(l=l.toString());for(var k=0,_="";_=Vt(l,k++),i.c=_,!!_;)switch(i.trackPosition&&(i.position++,_===`
`?(i.line++,i.column=0):i.column++),i.state){case h.BEGIN:if(i.state=h.BEGIN_WHITESPACE,_==="\uFEFF")continue;te(i,_);continue;case h.BEGIN_WHITESPACE:te(i,_);continue;case h.TEXT:if(i.sawRoot&&!i.closedRoot){for(var G=k-1;_&&_!=="<"&&_!=="&";)_=Vt(l,k++),_&&i.trackPosition&&(i.position++,_===`
`?(i.line++,i.column=0):i.column++);i.textNode+=l.substring(G,k-1)}_==="<"&&!(i.sawRoot&&i.closedRoot&&!i.strict)?(i.state=h.OPEN_WAKA,i.startTagPosition=i.position):(!o(_)&&(!i.sawRoot||i.closedRoot)&&j(i,"Text data outside of root node."),_==="&"?i.state=h.TEXT_ENTITY:i.textNode+=_);continue;case h.SCRIPT:_==="<"?i.state=h.SCRIPT_ENDING:i.script+=_;continue;case h.SCRIPT_ENDING:_==="/"?i.state=h.CLOSE_TAG:(i.script+="<"+_,i.state=h.SCRIPT);continue;case h.OPEN_WAKA:if(_==="!")i.state=h.SGML_DECL,i.sgmlDecl="";else if(!o(_))if(D(S,_))i.state=h.OPEN_TAG,i.tagName=_;else if(_==="/")i.state=h.CLOSE_TAG,i.tagName="";else if(_==="?")i.state=h.PROC_INST,i.procInstName=i.procInstBody="";else{if(j(i,"Unencoded <"),i.startTagPosition+1<i.position){var z=i.position-i.startTagPosition;_=new Array(z).join(" ")+_}i.textNode+="<"+_,i.state=h.TEXT}continue;case h.SGML_DECL:if(i.sgmlDecl+_==="--"){i.state=h.COMMENT,i.comment="",i.sgmlDecl="";continue}i.doctype&&i.doctype!==!0&&i.sgmlDecl?(i.state=h.DOCTYPE_DTD,i.doctype+="<!"+i.sgmlDecl+_,i.sgmlDecl=""):(i.sgmlDecl+_).toUpperCase()===g?(M(i,"onopencdata"),i.state=h.CDATA,i.sgmlDecl="",i.cdata=""):(i.sgmlDecl+_).toUpperCase()===b?(i.state=h.DOCTYPE,(i.doctype||i.sawRoot)&&j(i,"Inappropriately located doctype declaration"),i.doctype="",i.sgmlDecl=""):_===">"?(M(i,"onsgmldeclaration",i.sgmlDecl),i.sgmlDecl="",i.state=h.TEXT):(n(_)&&(i.state=h.SGML_DECL_QUOTED),i.sgmlDecl+=_);continue;case h.SGML_DECL_QUOTED:_===i.q&&(i.state=h.SGML_DECL,i.q=""),i.sgmlDecl+=_;continue;case h.DOCTYPE:_===">"?(i.state=h.TEXT,M(i,"ondoctype",i.doctype),i.doctype=!0):(i.doctype+=_,_==="["?i.state=h.DOCTYPE_DTD:n(_)&&(i.state=h.DOCTYPE_QUOTED,i.q=_));continue;case h.DOCTYPE_QUOTED:i.doctype+=_,_===i.q&&(i.q="",i.state=h.DOCTYPE);continue;case h.DOCTYPE_DTD:_==="]"?(i.doctype+=_,i.state=h.DOCTYPE):_==="<"?(i.state=h.OPEN_WAKA,i.startTagPosition=i.position):n(_)?(i.doctype+=_,i.state=h.DOCTYPE_DTD_QUOTED,i.q=_):i.doctype+=_;continue;case h.DOCTYPE_DTD_QUOTED:i.doctype+=_,_===i.q&&(i.state=h.DOCTYPE_DTD,i.q="");continue;case h.COMMENT:_==="-"?i.state=h.COMMENT_ENDING:i.comment+=_;continue;case h.COMMENT_ENDING:_==="-"?(i.state=h.COMMENT_ENDED,i.comment=U(i.opt,i.comment),i.comment&&M(i,"oncomment",i.comment),i.comment=""):(i.comment+="-"+_,i.state=h.COMMENT);continue;case h.COMMENT_ENDED:_!==">"?(j(i,"Malformed comment"),i.comment+="--"+_,i.state=h.COMMENT):i.doctype&&i.doctype!==!0?i.state=h.DOCTYPE_DTD:i.state=h.TEXT;continue;case h.CDATA:for(var G=k-1;_&&_!=="]";)_=Vt(l,k++),_&&i.trackPosition&&(i.position++,_===`
`?(i.line++,i.column=0):i.column++);i.cdata+=l.substring(G,k-1),_==="]"&&(i.state=h.CDATA_ENDING);continue;case h.CDATA_ENDING:_==="]"?i.state=h.CDATA_ENDING_2:(i.cdata+="]"+_,i.state=h.CDATA);continue;case h.CDATA_ENDING_2:_===">"?(i.cdata&&M(i,"oncdata",i.cdata),M(i,"onclosecdata"),i.cdata="",i.state=h.TEXT):_==="]"?i.cdata+="]":(i.cdata+="]]"+_,i.state=h.CDATA);continue;case h.PROC_INST:_==="?"?i.state=h.PROC_INST_ENDING:o(_)?i.state=h.PROC_INST_BODY:i.procInstName+=_;continue;case h.PROC_INST_BODY:if(!i.procInstBody&&o(_))continue;_==="?"?i.state=h.PROC_INST_ENDING:i.procInstBody+=_;continue;case h.PROC_INST_ENDING:if(_===">"){let W={name:i.procInstName,body:i.procInstBody};L(i,W),M(i,"onprocessinginstruction",W),i.procInstName=i.procInstBody="",i.state=h.TEXT}else i.procInstBody+="?"+_,i.state=h.PROC_INST_BODY;continue;case h.OPEN_TAG:D(N,_)?i.tagName+=_:(Fe(i),_===">"?vt(i):_==="/"?i.state=h.OPEN_TAG_SLASH:(o(_)||j(i,"Invalid character in tag name"),i.state=h.ATTRIB));continue;case h.OPEN_TAG_SLASH:_===">"?(vt(i,!0),jt(i)):(j(i,"Forward-slash in opening tag not followed by >"),i.state=h.ATTRIB);continue;case h.ATTRIB:if(o(_))continue;_===">"?vt(i):_==="/"?i.state=h.OPEN_TAG_SLASH:D(S,_)?(i.attribName=_,i.attribValue="",i.state=h.ATTRIB_NAME):j(i,"Invalid attribute name");continue;case h.ATTRIB_NAME:_==="="?i.state=h.ATTRIB_VALUE:_===">"?(j(i,"Attribute without value"),i.attribValue=i.attribName,zt(i),vt(i)):o(_)?i.state=h.ATTRIB_NAME_SAW_WHITE:D(N,_)?i.attribName+=_:j(i,"Invalid attribute name");continue;case h.ATTRIB_NAME_SAW_WHITE:if(_==="=")i.state=h.ATTRIB_VALUE;else{if(o(_))continue;j(i,"Attribute without value"),i.tag.attributes[i.attribName]="",i.attribValue="",M(i,"onattribute",{name:i.attribName,value:""}),i.attribName="",_===">"?vt(i):D(S,_)?(i.attribName=_,i.state=h.ATTRIB_NAME):(j(i,"Invalid attribute name"),i.state=h.ATTRIB)}continue;case h.ATTRIB_VALUE:if(o(_))continue;n(_)?(i.q=_,i.state=h.ATTRIB_VALUE_QUOTED):(i.opt.unquotedAttributeValues||Y(i,"Unquoted attribute value"),i.state=h.ATTRIB_VALUE_UNQUOTED,i.attribValue=_);continue;case h.ATTRIB_VALUE_QUOTED:if(_!==i.q){_==="&"?i.state=h.ATTRIB_VALUE_ENTITY_Q:i.attribValue+=_;continue}zt(i),i.q="",i.state=h.ATTRIB_VALUE_CLOSED;continue;case h.ATTRIB_VALUE_CLOSED:o(_)?i.state=h.ATTRIB:_===">"?vt(i):_==="/"?i.state=h.OPEN_TAG_SLASH:D(S,_)?(j(i,"No whitespace between attributes"),i.attribName=_,i.attribValue="",i.state=h.ATTRIB_NAME):j(i,"Invalid attribute name");continue;case h.ATTRIB_VALUE_UNQUOTED:if(!C(_)){_==="&"?i.state=h.ATTRIB_VALUE_ENTITY_U:i.attribValue+=_;continue}zt(i),_===">"?vt(i):i.state=h.ATTRIB;continue;case h.CLOSE_TAG:if(i.tagName)_===">"?jt(i):D(N,_)?i.tagName+=_:i.script?(i.script+="</"+i.tagName+_,i.tagName="",i.state=h.SCRIPT):(o(_)||j(i,"Invalid tagname in closing tag"),i.state=h.CLOSE_TAG_SAW_WHITE);else{if(o(_))continue;E(S,_)?i.script?(i.script+="</"+_,i.state=h.SCRIPT):j(i,"Invalid tagname in closing tag."):i.tagName=_}continue;case h.CLOSE_TAG_SAW_WHITE:if(o(_))continue;_===">"?jt(i):j(i,"Invalid characters in closing tag");continue;case h.TEXT_ENTITY:case h.ATTRIB_VALUE_ENTITY_Q:case h.ATTRIB_VALUE_ENTITY_U:var H,Z;switch(i.state){case h.TEXT_ENTITY:H=h.TEXT,Z="textNode";break;case h.ATTRIB_VALUE_ENTITY_Q:H=h.ATTRIB_VALUE_QUOTED,Z="attribValue";break;case h.ATTRIB_VALUE_ENTITY_U:H=h.ATTRIB_VALUE_UNQUOTED,Z="attribValue";break}if(_===";"){var it=$e(i);i.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(it)?((i.entityCount+=1)>i.opt.maxEntityCount&&Y(i,"Parsed entity count exceeds max entity count"),(i.entityDepth+=1)>i.opt.maxEntityDepth&&Y(i,"Parsed entity depth exceeds max entity depth"),i.entity="",i.state=H,i.write(it),i.entityDepth-=1):(i[Z]+=it,i.entity="",i.state=H)}else D(i.entity.length?v:x,_)?i.entity+=_:(j(i,"Invalid character in entity name"),i[Z]+="&"+i.entity+_,i.entity="",i.state=H);continue;default:throw new Error(i,"Unknown state: "+i.state)}return i.position>=i.bufferCheckPosition&&m(i),i}String.fromCodePoint||(function(){var l=String.fromCharCode,i=Math.floor,k=function(){var _=16384,z=[],G,H,Z=-1,it=arguments.length;if(!it)return"";for(var W="";++Z<it;){var J=Number(arguments[Z]);if(!isFinite(J)||J<0||J>1114111||i(J)!==J)throw RangeError("Invalid code point: "+J);J<=65535?z.push(J):(J-=65536,G=(J>>10)+55296,H=J%1024+56320,z.push(G,H)),(Z+1===it||z.length>_)&&(W+=l.apply(null,z),z.length=0)}return W};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:k,configurable:!0,writable:!0}):String.fromCodePoint=k})()})(typeof Ie>"u"?Ie.sax={}:Ie)});var Pn=$(He=>{(function(){"use strict";He.stripBOM=function(t){return t[0]==="\uFEFF"?t.substring(1):t}}).call(He)});var Ke=$(At=>{(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),At.normalize=function(e){return e.toLowerCase()},At.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},At.stripPrefix=function(e){return e.replace(t,"")},At.parseNumbers=function(e){return isNaN(e)||(e=e%1===0?parseInt(e,10):parseFloat(e)),e},At.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e=e.toLowerCase()==="true"),e}}).call(At)});var Mn=$(bt=>{(function(){"use strict";var t,e,s,m,r,d,a,c,u,f=function(b,p){return function(){return b.apply(p,arguments)}},y=function(b,p){for(var I in p)g.call(p,I)&&(b[I]=p[I]);function T(){this.constructor=b}return T.prototype=p.prototype,b.prototype=new T,b.__super__=p.prototype,b},g={}.hasOwnProperty;c=On(),m=require("events"),t=Pn(),a=Ke(),u=require("timers").setImmediate,e=ae().defaults,r=function(b){return typeof b=="object"&&b!=null&&Object.keys(b).length===0},d=function(b,p,I){var T,S,N;for(T=0,S=b.length;T<S;T++)N=b[T],p=N(p,I);return p},s=function(b,p,I){var T;return T=Object.create(null),T.value=I,T.writable=!0,T.enumerable=!0,T.configurable=!0,Object.defineProperty(b,p,T)},bt.Parser=(function(b){y(p,b);function p(I){this.parseStringPromise=f(this.parseStringPromise,this),this.parseString=f(this.parseString,this),this.reset=f(this.reset,this),this.assignOrPush=f(this.assignOrPush,this),this.processAsync=f(this.processAsync,this);var T,S,N;if(!(this instanceof bt.Parser))return new bt.Parser(I);this.options={},S=e["0.2"];for(T in S)g.call(S,T)&&(N=S[T],this.options[T]=N);for(T in I)g.call(I,T)&&(N=I[T],this.options[T]=N);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(a.normalize)),this.reset()}return p.prototype.processAsync=function(){var I,T;try{return this.remaining.length<=this.options.chunkSize?(I=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(I),this.saxParser.close()):(I=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(I),u(this.processAsync))}catch(S){if(T=S,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(T)}},p.prototype.assignOrPush=function(I,T,S){return T in I?(I[T]instanceof Array||s(I,T,[I[T]]),I[T].push(S)):this.options.explicitArray?s(I,T,[S]):s(I,T,S)},p.prototype.reset=function(){var I,T,S,N;return this.removeAllListeners(),this.saxParser=c.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(x){return function(v){if(x.saxParser.resume(),!x.saxParser.errThrown)return x.saxParser.errThrown=!0,x.emit("error",v)}})(this),this.saxParser.onend=(function(x){return function(){if(!x.saxParser.ended)return x.saxParser.ended=!0,x.emit("end",x.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,N=[],I=this.options.attrkey,T=this.options.charkey,this.saxParser.onopentag=(function(x){return function(v){var o,n,C,D,E;if(C={},C[T]="",!x.options.ignoreAttrs){E=v.attributes;for(o in E)g.call(E,o)&&(!(I in C)&&!x.options.mergeAttrs&&(C[I]={}),n=x.options.attrValueProcessors?d(x.options.attrValueProcessors,v.attributes[o],o):v.attributes[o],D=x.options.attrNameProcessors?d(x.options.attrNameProcessors,o):o,x.options.mergeAttrs?x.assignOrPush(C,D,n):s(C[I],D,n))}return C["#name"]=x.options.tagNameProcessors?d(x.options.tagNameProcessors,v.name):v.name,x.options.xmlns&&(C[x.options.xmlnskey]={uri:v.uri,local:v.local}),N.push(C)}})(this),this.saxParser.onclosetag=(function(x){return function(){var v,o,n,C,D,E,h,w,A,O;if(E=N.pop(),D=E["#name"],(!x.options.explicitChildren||!x.options.preserveChildrenOrder)&&delete E["#name"],E.cdata===!0&&(v=E.cdata,delete E.cdata),A=N[N.length-1],E[T].match(/^\s*$/)&&!v?(o=E[T],delete E[T]):(x.options.trim&&(E[T]=E[T].trim()),x.options.normalize&&(E[T]=E[T].replace(/\s{2,}/g," ").trim()),E[T]=x.options.valueProcessors?d(x.options.valueProcessors,E[T],D):E[T],Object.keys(E).length===1&&T in E&&!x.EXPLICIT_CHARKEY&&(E=E[T])),r(E)&&(typeof x.options.emptyTag=="function"?E=x.options.emptyTag():E=x.options.emptyTag!==""?x.options.emptyTag:o),x.options.validator!=null&&(O="/"+(function(){var P,R,L;for(L=[],P=0,R=N.length;P<R;P++)C=N[P],L.push(C["#name"]);return L})().concat(D).join("/"),(function(){var P;try{return E=x.options.validator(O,A&&A[D],E)}catch(R){return P=R,x.emit("error",P)}})()),x.options.explicitChildren&&!x.options.mergeAttrs&&typeof E=="object"){if(!x.options.preserveChildrenOrder)C={},x.options.attrkey in E&&(C[x.options.attrkey]=E[x.options.attrkey],delete E[x.options.attrkey]),!x.options.charsAsChildren&&x.options.charkey in E&&(C[x.options.charkey]=E[x.options.charkey],delete E[x.options.charkey]),Object.getOwnPropertyNames(E).length>0&&(C[x.options.childkey]=E),E=C;else if(A){A[x.options.childkey]=A[x.options.childkey]||[],h={};for(n in E)g.call(E,n)&&s(h,n,E[n]);A[x.options.childkey].push(h),delete E["#name"],Object.keys(E).length===1&&T in E&&!x.EXPLICIT_CHARKEY&&(E=E[T])}}return N.length>0?x.assignOrPush(A,D,E):(x.options.explicitRoot&&(w=E,E={},s(E,D,w)),x.resultObject=E,x.saxParser.ended=!0,x.emit("end",x.resultObject))}})(this),S=(function(x){return function(v){var o,n;if(n=N[N.length-1],n)return n[T]+=v,x.options.explicitChildren&&x.options.preserveChildrenOrder&&x.options.charsAsChildren&&(x.options.includeWhiteChars||v.replace(/\\n/g,"").trim()!=="")&&(n[x.options.childkey]=n[x.options.childkey]||[],o={"#name":"__text__"},o[T]=v,x.options.normalize&&(o[T]=o[T].replace(/\s{2,}/g," ").trim()),n[x.options.childkey].push(o)),n}})(this),this.saxParser.ontext=S,this.saxParser.oncdata=(function(x){return function(v){var o;if(o=S(v),o)return o.cdata=!0}})(this)},p.prototype.parseString=function(I,T){var S;T!=null&&typeof T=="function"&&(this.on("end",function(N){return this.reset(),T(null,N)}),this.on("error",function(N){return this.reset(),T(N)}));try{return I=I.toString(),I.trim()===""?(this.emit("end",null),!0):(I=t.stripBOM(I),this.options.async?(this.remaining=I,u(this.processAsync),this.saxParser):this.saxParser.write(I).close())}catch(N){if(S=N,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw S}else return this.emit("error",S),this.saxParser.errThrown=!0}},p.prototype.parseStringPromise=function(I){return new Promise((function(T){return function(S,N){return T.parseString(I,function(x,v){return x?N(x):S(v)})}})(this))},p})(m),bt.parseString=function(b,p,I){var T,S,N;return I!=null?(typeof I=="function"&&(T=I),typeof p=="object"&&(S=p)):(typeof p=="function"&&(T=p),S={}),N=new bt.Parser(S),N.parseString(b,T)},bt.parseStringPromise=function(b,p){var I,T;return typeof p=="object"&&(I=p),T=new bt.Parser(I),T.parseStringPromise(b)}}).call(bt)});var Wt=$(wt=>{(function(){"use strict";var t,e,s,m,r=function(a,c){for(var u in c)d.call(c,u)&&(a[u]=c[u]);function f(){this.constructor=a}return f.prototype=c.prototype,a.prototype=new f,a.__super__=c.prototype,a},d={}.hasOwnProperty;e=ae(),t=kn(),s=Mn(),m=Ke(),wt.defaults=e.defaults,wt.processors=m,wt.ValidationError=(function(a){r(c,a);function c(u){this.message=u}return c})(Error),wt.Builder=t.Builder,wt.Parser=s.Parser,wt.parseString=s.parseString,wt.parseStringPromise=s.parseStringPromise}).call(wt)});var so={};fr(so,{activate:()=>ro,deactivate:()=>oo});module.exports=hr(so);var V=B(require("vscode"));var q=B(require("vscode")),se=B(require("fs")),rt=B(require("path"));function ut(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function mr(t){return t==="high"?"I":t==="medium"?"II":"III"}function gr(t){let e={total:t.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let s of t)e[s.status]++,e[s.severity]++;return e}function ci(t){return JSON.stringify(t).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function li(t){let e=ci(Object.fromEntries(t.stigs.flatMap(s=>s.rules.map(m=>[m.uuid,m]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${ut(t.title)}</title>
<style>${Cr}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1>${ut(t.title)}</h1>
    <span class="chip chip-accent">CKLB v${ut(t.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${yr(t.target_data)}
</header>

${t.stigs.map((s,m)=>vr(s,m)).join(`
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
const TARGET = ${ci(t.target_data)};
${wr}
</script>
</body>
</html>`}function yr(t){let e=[t.host_name&&`Host: ${t.host_name}`,t.ip_address&&`IP: ${t.ip_address}`,t.fqdn&&`FQDN: ${t.fqdn}`,t.mac_address&&`MAC: ${t.mac_address}`,t.target_type&&`Type: ${t.target_type}`,t.role&&t.role!=="None"&&`Role: ${t.role}`].filter(Boolean);return e.length?`<div class="target-row">${e.map(s=>`<span class="chip">${ut(s)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function vr(t,e){let s=gr(t.rules),m=r=>s.total?Math.round(r/s.total*100):0;return`
<section class="stig" data-idx="${e}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${ut(t.display_name||t.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${ut(t.release_info)}</span>
      <span class="chip">Version ${ut(t.version)}</span>
      <span class="chip">${t.size} rules</span>
    </div>
  </div>

  <!-- stat cards -->
  <div class="cards">
    <div class="card card-total"><div class="card-n">${s.total}</div><div class="card-l">Total</div></div>
    <div class="card card-open"><div class="card-n">${s.open}</div><div class="card-l">Open</div></div>
    <div class="card card-naf"><div class="card-n">${s.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
    <div class="card card-nr"><div class="card-n">${s.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
    <div class="card card-na"><div class="card-n">${s.not_applicable}</div><div class="card-l">Not Applicable</div></div>
  </div>

  <!-- severity bar -->
  <div class="sev-bar">
    <div class="sev-seg sev-high" style="width:${m(s.high)}%"><span>CAT I \xB7 ${s.high}</span></div>
    <div class="sev-seg sev-med"  style="width:${m(s.medium)}%"><span>CAT II \xB7 ${s.medium}</span></div>
    <div class="sev-seg sev-low"  style="width:${m(s.low)}%"><span>CAT III \xB7 ${s.low}</span></div>
  </div>

  <!-- completion bar -->
  <div class="completion">
    <div class="completion-label">Completion: ${m(s.not_a_finding+s.not_applicable)}%</div>
    <div class="completion-track">
      <div class="completion-fill completion-naf" style="width:${m(s.not_a_finding)}%"></div>
      <div class="completion-fill completion-na"  style="width:${m(s.not_applicable)}%"></div>
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
      <option value="not_reviewed">Not Reviewed (${s.not_reviewed})</option>
      <option value="open">Open (${s.open})</option>
      <option value="not_a_finding">Not a Finding (${s.not_a_finding})</option>
      <option value="not_applicable">Not Applicable (${s.not_applicable})</option>
    </select>
    <select class="flt" data-kind="severity">
      <option value="">All Severities</option>
      <option value="high">CAT I \u2013 High (${s.high})</option>
      <option value="medium">CAT II \u2013 Medium (${s.medium})</option>
      <option value="low">CAT III \u2013 Low (${s.low})</option>
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
        ${t.rules.map(r=>br(r,t.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function br(t,e){let s=`${t.group_id} ${t.rule_version} ${t.rule_title} ${t.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${t.uuid}" data-stig="${e}"
    data-sev="${t.severity}" data-status="${t.status}" data-search="${ut(s)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${t.uuid}" data-stig="${e}" /></td>
  <td><span class="pill sev-${t.severity}">CAT ${mr(t.severity)}</span></td>
  <td><code>${ut(t.group_id)}</code></td>
  <td><code>${ut(t.rule_version)}</code></td>
  <td class="td-title">${ut(t.rule_title)}</td>
  <td><select class="inline-status st-${t.status}" data-uuid="${t.uuid}" data-stig="${e}">
    <option value="not_reviewed" ${t.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${t.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${t.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${t.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var wr=`
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
`,Cr=`
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
`;var Ir={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Tr={high:"CAT I",medium:"CAT II",low:"CAT III"};function di(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function ne(t){let s=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(di).join(",")];for(let m of t.stigs)for(let r of m.rules)s.push([r.group_id,r.rule_id,r.rule_version,Tr[r.severity]||r.severity,Ir[r.status]||r.status,r.rule_title,r.finding_details,r.comments,r.ccis.join("; "),r.srg_id].map(di).join(","));return s.join(`\r
`)}function tt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var xr={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function X(t,e){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${tt(t)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${tt(e)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function _r(t){let e=[X("Vuln_Num",t.group_id),X("Severity",t.severity),X("Group_Title",t.group_title),X("Rule_ID",t.rule_id),X("Rule_Ver",t.rule_version),X("Rule_Title",t.rule_title),X("Vuln_Discuss",t.discussion),X("IA_Controls",t.ia_controls),X("Check_Content",t.check_content),X("Fix_Text",t.fix_text),X("False_Positives",t.false_positives),X("False_Negatives",t.false_negatives),X("Documentable",t.documentable),X("Mitigations",t.mitigations),X("Potential_Impact",t.potential_impacts),X("Third_Party_Tools",t.third_party_tools),X("Mitigation_Control",t.mitigation_control),X("Responsibility",t.responsibility),X("Security_Override_Guidance",t.security_override_guidance),X("Check_Content_Ref",t.check_content_ref?.href||""),X("Weight",t.weight),X("Class",t.classification),X("STIGRef",t.stig_ref||""),X("TargetKey",t.target_key||"")];for(let s of t.ccis)e.push(X("CCI_REF",s));for(let s of t.legacy_ids)e.push(X("Legacy_ID",s));return`      <VULN>
${e.join(`
`)}
        <STATUS>${tt(xr[t.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${tt(t.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${tt(t.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function pt(t,e){return`          <SI_DATA>
            <SID_NAME>${tt(t)}</SID_NAME>
            <SID_DATA>${tt(e)}</SID_DATA>
          </SI_DATA>`}function Er(t){let e=[pt("version",t.version),pt("classification","UNCLASSIFIED"),pt("customname",""),pt("stigid",t.stig_id),pt("description",""),pt("filename",""),pt("releaseinfo",t.release_info),pt("title",t.stig_name),pt("uuid",t.uuid),pt("notice","terms-of-use"),pt("source","")].join(`
`),s=t.rules.map(_r).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${e}
        </STIG_INFO>
${s}
    </iSTIG>`}function re(t){let e=t.target_data,s=e.is_web_database?"true":"false",m=`  <ASSET>
    <ROLE>${tt(e.role)}</ROLE>
    <ASSET_TYPE>${tt(e.target_type)}</ASSET_TYPE>
    <HOST_NAME>${tt(e.host_name)}</HOST_NAME>
    <HOST_IP>${tt(e.ip_address)}</HOST_IP>
    <HOST_MAC>${tt(e.mac_address)}</HOST_MAC>
    <HOST_FQDN>${tt(e.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${tt(e.comments)}</TARGET_COMMENT>
    <TECH_AREA>${tt(e.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${s}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${tt(e.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${tt(e.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`,r=t.stigs.map(Er).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${m}
  <STIGS>
${r}
  </STIGS>
</CHECKLIST>`}var Sr={high:"CAT I",medium:"CAT II",low:"CAT III"};function ui(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function oe(t){let s=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(ui).join(",")],m=1;for(let r of t.stigs){let d=r.rules.filter(a=>a.status==="open");for(let a of d)s.push([String(m++),a.group_id,a.rule_id,a.rule_version,Sr[a.severity]||a.severity,a.rule_title,`${r.stig_name} ${r.release_info}`,a.finding_details,"","","","","","","Ongoing",a.comments,a.ccis.join("; "),t.target_data.host_name].map(ui).join(","))}return s.join(`\r
`)}var dt=class t{constructor(e){this._context=e}static get activeDocumentUri(){return t._activeDocumentUri}static register(e){return q.window.registerCustomEditorProvider("stigViewer.cklbEditor",new t(e),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(e,s,m){s.webview.options={enableScripts:!0},(()=>{try{let c=JSON.parse(e.getText());s.webview.html=li(c)}catch(c){s.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(c)}</pre></body></html>`}})(),t._activeDocumentUri=e.uri,s.onDidChangeViewState(()=>{s.active&&(t._activeDocumentUri=e.uri)});let d,a=q.workspace.onDidChangeTextDocument(c=>{c.document.uri.toString()===e.uri.toString()&&(clearTimeout(d),d=setTimeout(()=>{try{let u=JSON.parse(e.getText()),f=Object.fromEntries(u.stigs.flatMap(y=>y.rules.map(g=>[g.uuid,g])));s.webview.postMessage({type:"dataUpdate",rules:f})}catch{}},150))});s.webview.onDidReceiveMessage(async c=>{if(c.type==="saveRule"){let{ruleUuid:u,stigUuid:f,status:y,finding_details:g,comments:b}=c;try{let p=JSON.parse(e.getText()),T=p.stigs.find(S=>S.uuid===f)?.rules.find(S=>S.uuid===u);if(T){T.status=y,T.finding_details=g,T.comments=b;let S=new q.WorkspaceEdit,N=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));S.replace(e.uri,N,JSON.stringify(p,null,2)),await q.workspace.applyEdit(S)}}catch(p){q.window.showErrorMessage(`Save failed: ${p}`)}}if(c.type==="saveTargetData")try{let u=JSON.parse(e.getText());Object.assign(u.target_data,c.targetData);let f=new q.WorkspaceEdit,y=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));f.replace(e.uri,y,JSON.stringify(u,null,2)),await q.workspace.applyEdit(f),q.window.showInformationMessage("Target data updated")}catch(u){q.window.showErrorMessage(`Save target data failed: ${u}`)}if(c.type==="exportPoam")try{let u=JSON.parse(e.getText()),f=oe(u),y=u.stigs.reduce((p,I)=>p+I.rules.filter(T=>T.status==="open").length,0),g=rt.basename(e.uri.fsPath,".cklb")+"_POAM.csv",b=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),g)),filters:{CSV:["csv"]},title:`Export POA&M (${y} open findings)`});b&&(se.writeFileSync(b.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported POA&M (${y} findings) \u2192 ${rt.basename(b.fsPath)}`))}catch(u){q.window.showErrorMessage(`POA&M export failed: ${u}`)}if(c.type==="exportCsv")try{let u=JSON.parse(e.getText()),f=ne(u),y=rt.basename(e.uri.fsPath,".cklb")+".csv",g=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),y)),filters:{CSV:["csv"]},title:"Export Summary CSV"});g&&(se.writeFileSync(g.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CSV \u2192 ${rt.basename(g.fsPath)}`))}catch(u){q.window.showErrorMessage(`CSV export failed: ${u}`)}if(c.type==="exportCkl")try{let u=JSON.parse(e.getText()),f=re(u),y=rt.basename(e.uri.fsPath,".cklb")+".ckl",g=await q.window.showSaveDialog({defaultUri:q.Uri.file(rt.join(rt.dirname(e.uri.fsPath),y)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});g&&(se.writeFileSync(g.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CKL \u2192 ${rt.basename(g.fsPath)}`))}catch(u){q.window.showErrorMessage(`CKL export failed: ${u}`)}if(c.type==="bulkSaveRules"){let{ruleUuids:u,stigUuid:f,status:y,comments:g}=c;try{let b=JSON.parse(e.getText()),p=b.stigs.find(N=>N.uuid===f);if(!p)return;let I=0;for(let N of p.rules)u.includes(N.uuid)&&(N.status=y,g&&(N.comments=g),I++);let T=new q.WorkspaceEdit,S=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));T.replace(e.uri,S,JSON.stringify(b,null,2)),await q.workspace.applyEdit(T),q.window.showInformationMessage(`Bulk updated ${I} rules \u2192 ${y.replace(/_/g," ")}`)}catch(b){q.window.showErrorMessage(`Bulk save failed: ${b}`)}}}),s.onDidDispose(()=>a.dispose())}};var kt=B(require("vscode")),_e=B(require("fs")),Ot=B(require("path")),Ee=B(Wt());var et=[];for(let t=0;t<256;++t)et.push((t+256).toString(16).slice(1));function Ln(t,e=0){return(et[t[e+0]]+et[t[e+1]]+et[t[e+2]]+et[t[e+3]]+"-"+et[t[e+4]]+et[t[e+5]]+"-"+et[t[e+6]]+et[t[e+7]]+"-"+et[t[e+8]]+et[t[e+9]]+"-"+et[t[e+10]]+et[t[e+11]]+et[t[e+12]]+et[t[e+13]]+et[t[e+14]]+et[t[e+15]]).toLowerCase()}var Rn=require("node:crypto"),xe=new Uint8Array(256),Te=xe.length;function Ye(){return Te>xe.length-16&&((0,Rn.randomFillSync)(xe),Te=0),xe.slice(Te,Te+=16)}var Fn=require("node:crypto"),Je={randomUUID:Fn.randomUUID};function Ar(t,e,s){t=t||{};let m=t.random??t.rng?.()??Ye();if(m.length<16)throw new Error("Random bytes length must be >= 16");if(m[6]=m[6]&15|64,m[8]=m[8]&63|128,e){if(s=s||0,s<0||s+16>e.length)throw new RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`);for(let r=0;r<16;++r)e[s+r]=m[r];return e}return Ln(m)}function Dr(t,e,s){return Je.randomUUID&&!e&&!t?Je.randomUUID():Ar(t,e,s)}var Ct=Dr;function xt(t){return t==null?[]:Array.isArray(t)?t:[t]}function st(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?st(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}function ft(t,e){let s=t.match(new RegExp(`<${e}>([\\s\\S]*?)<\\/${e}>`));return s?s[1].trim():""}function Nr(t){let e=t.match(/(V-\d+)/);return e?e[1]:t}function kr(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}function Or(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}function Pr(t){let e=t;if(e.Benchmark)return e.Benchmark;let s=t["data-stream-collection"];if(s?.component!=null)for(let m of xt(s.component)){let r=m.Benchmark;if(r)return r}return null}async function $n(t){let e=t.fsPath,s=_e.readFileSync(e,"utf-8"),m=await(0,Ee.parseStringPromise)(s,{explicitArray:!1,tagNameProcessors:[Ee.processors.stripPrefix]}),r=Pr(m);if(!r)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let a=(r.$||{}).id||"",c=st(r.title),u=st(r.version),f="";for(let n of xt(r["plain-text"]))if((n?.$||{}).id==="release-info"){f=st(n);break}let y=Ct(),g=Ct(),b=new Date().toISOString(),p=xt(r.Group),I=[];for(let n of p){let C=n?.$||{},D=Nr(C.id||""),E=st(n.title),h=st(n.description);for(let w of xt(n.Rule)){let A=w?.$||{},O=kr(A.id||""),P=Or(A.severity),R=A.weight||"10.0",L=st(w.version),M=st(w.title),F=st(w.description),U=ft(F,"VulnDiscussion"),Y=ft(F,"FalsePositives"),at=ft(F,"FalseNegatives"),j=ft(F,"Documentable"),Fe=ft(F,"Mitigations"),qt=ft(F,"SeverityOverrideGuidance"),zt=ft(F,"PotentialImpacts"),vt=ft(F,"ThirdPartyTools"),jt=ft(F,"MitigationControl"),$e=ft(F,"Responsibility"),te=ft(F,"IAControls"),Vt=st(w.fixtext),ee=xt(w.check),l="",i={href:"",name:""},_=ee.find(W=>W["check-content"])||ee[0];if(_){l=st(_["check-content"]);let W=xt(_["check-content-ref"])[0];W?.$&&(i={href:W.$.href||"",name:W.$.name||""})}let z=[],G=[];for(let W of xt(w.ident)){let J=W?.$?.system||"",lt=st(W);J.includes("cci")?z.push(lt):J.includes("legacy")&&G.push(lt)}let H=null,Z=null;for(let W of xt(w.reference))W?.identifier&&(H=st(W.identifier)),W?.title&&(Z=st(W.title));let it=Ct();I.push({uuid:it,stig_uuid:y,target_key:H,stig_ref:Z,group_id:D,rule_id:O,rule_id_src:O,weight:R,classification:"Unclassified",severity:P,rule_version:L,group_title:E,rule_title:M,fix_text:Vt,false_positives:Y,false_negatives:at,discussion:U,check_content:l,documentable:j,mitigations:Fe,potential_impacts:zt,third_party_tools:vt,mitigation_control:jt,responsibility:$e,security_override_guidance:qt,ia_controls:te,check_content_ref:i,legacy_ids:G,ccis:z,group_tree:[{id:D,title:E,description:h}],createdAt:b,updatedAt:b,STIGUuid:y,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:E})}}let T={stig_name:c,display_name:c,stig_id:a,release_info:f,version:u,uuid:y,reference_identifier:a,size:I.length,rules:I},N={title:c,id:g,stigs:[T],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},x=Ot.basename(e).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),v=Ot.join(Ot.dirname(e),x);_e.writeFileSync(v,JSON.stringify(N,null,2));let o=kt.Uri.file(v);await kt.commands.executeCommand("vscode.openWith",o,"stigViewer.cklbEditor"),kt.window.showInformationMessage(`Imported ${I.length} rules from XCCDF \u2192 ${x}`)}var Pt=B(require("vscode")),Ae=B(require("fs")),Mt=B(require("path")),De=B(Wt());function Se(t){return t==null?[]:Array.isArray(t)?t:[t]}function Q(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Q(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var Mr={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function Lr(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}async function Un(t){let e=t.fsPath,s=Ae.readFileSync(e,"utf-8"),r=(await(0,De.parseStringPromise)(s,{explicitArray:!1,tagNameProcessors:[De.processors.stripPrefix]})).CHECKLIST;if(!r)throw new Error("No <CHECKLIST> element found in the CKL file.");let d=r.ASSET||{},a={target_type:Q(d.ASSET_TYPE)||"Computing",host_name:Q(d.HOST_NAME),ip_address:Q(d.HOST_IP),mac_address:Q(d.HOST_MAC),fqdn:Q(d.HOST_FQDN),comments:Q(d.TARGET_COMMENT),role:Q(d.ROLE)||"None",is_web_database:Q(d.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Q(d.TECH_AREA),web_db_site:Q(d.WEB_DB_SITE),web_db_instance:Q(d.WEB_DB_INSTANCE),classification:null},c=Se(r.STIGS?.iSTIG),u=Ct(),f=new Date().toISOString(),y=[];for(let S of c){let N=new Map;for(let h of Se(S.STIG_INFO?.SI_DATA))N.set(Q(h.SID_NAME),Q(h.SID_DATA));let x=N.get("uuid")||Ct(),v=N.get("title")||"",o=N.get("stigid")||"",n=N.get("version")||"",C=N.get("releaseinfo")||"",D=Se(S.VULN),E=[];for(let h of D){let w=new Map,A=[],O=[];for(let U of Se(h.STIG_DATA)){let Y=Q(U.VULN_ATTRIBUTE),at=Q(U.ATTRIBUTE_DATA);Y==="CCI_REF"?A.push(at):Y==="Legacy_ID"&&at?O.push(at):w.set(Y,at)}let P=w.get("Vuln_Num")||"",R=w.get("Rule_ID")||"",L=Ct(),M=Q(h.STATUS),F=Mr[M]||"not_reviewed";E.push({uuid:L,stig_uuid:x,target_key:w.get("TargetKey")||null,stig_ref:w.get("STIGRef")||null,group_id:P,rule_id:R,rule_id_src:R,weight:w.get("Weight")||"10.0",classification:w.get("Class")||"Unclassified",severity:Lr(w.get("Severity")),rule_version:w.get("Rule_Ver")||"",group_title:w.get("Group_Title")||"",rule_title:w.get("Rule_Title")||"",fix_text:w.get("Fix_Text")||"",false_positives:w.get("False_Positives")||"",false_negatives:w.get("False_Negatives")||"",discussion:w.get("Vuln_Discuss")||"",check_content:w.get("Check_Content")||"",documentable:w.get("Documentable")||"",mitigations:w.get("Mitigations")||"",potential_impacts:w.get("Potential_Impact")||"",third_party_tools:w.get("Third_Party_Tools")||"",mitigation_control:w.get("Mitigation_Control")||"",responsibility:w.get("Responsibility")||"",security_override_guidance:w.get("Security_Override_Guidance")||"",ia_controls:w.get("IA_Controls")||"",check_content_ref:{href:w.get("Check_Content_Ref")||"",name:""},legacy_ids:O,ccis:A,group_tree:[{id:P,title:w.get("Group_Title")||"",description:""}],createdAt:f,updatedAt:f,STIGUuid:x,status:F,overrides:{},comments:Q(h.COMMENTS),finding_details:Q(h.FINDING_DETAILS),srg_id:w.get("Group_Title")||""})}y.push({stig_name:v,display_name:v,stig_id:o,release_info:C,version:n,uuid:x,reference_identifier:o,size:E.length,rules:E})}let g={title:y[0]?.stig_name||"Imported CKL",id:u,stigs:y,active:!0,mode:1,has_path:!0,target_data:a,cklb_version:"1"},b=Mt.basename(e,".ckl")+".cklb",p=Mt.join(Mt.dirname(e),b);Ae.writeFileSync(p,JSON.stringify(g,null,2));let I=Pt.Uri.file(p);await Pt.commands.executeCommand("vscode.openWith",I,"stigViewer.cklbEditor");let T=y.reduce((S,N)=>S+N.rules.length,0);Pt.window.showInformationMessage(`Imported ${T} rules from CKL \u2192 ${b}`)}var Lt=B(require("vscode")),Ht=B(require("fs"));async function Bn(t){let e=await Lt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!e?.[0])return;let s=t;if(!s){let g=await Lt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!g?.[0])return;s=g[0]}let m=JSON.parse(Ht.readFileSync(e[0].fsPath,"utf-8")),r=JSON.parse(Ht.readFileSync(s.fsPath,"utf-8")),d=new Map;for(let g of m.stigs)for(let b of g.rules)d.set(b.rule_version,b);let a=0,c=0,u=0;for(let g of r.stigs)for(let b of g.rules){u++;let p=d.get(b.rule_version);p?(b.status=p.status,b.finding_details=p.finding_details,b.comments=p.comments,b.updatedAt=new Date().toISOString(),a++):c++}let f=new Set;for(let g of r.stigs)for(let b of g.rules)f.add(b.rule_version);let y=0;for(let g of d.keys())f.has(g)||y++;Ht.writeFileSync(s.fsPath,JSON.stringify(r,null,2)),await Lt.commands.executeCommand("vscode.openWith",s,"stigViewer.cklbEditor"),Lt.window.showInformationMessage(`Merge complete: ${a} carried forward, ${c} new rules, ${y} removed from old STIG`)}var ht=B(require("vscode")),qn=B(require("fs")),ke=class t{static async show(e){if(t._panel){t._panel.reveal(),await t._refresh();return}let s=ht.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",ht.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=s,s.onDidDispose(()=>{t._panel=void 0}),s.webview.onDidReceiveMessage(async m=>{if(m.type==="openFile"){let r=ht.Uri.file(m.path);await ht.commands.executeCommand("vscode.openWith",r,"stigViewer.cklbEditor")}m.type==="refresh"&&await t._refresh()}),await t._refresh()}static async _refresh(){let e=t._panel;if(!e)return;let s=await ht.workspace.findFiles("**/*.cklb","**/node_modules/**"),m=[];for(let r of s)try{let d=qn.readFileSync(r.fsPath,"utf-8"),a=JSON.parse(d);for(let c of a.stigs){let u={file:ht.workspace.asRelativePath(r),uri:r.fsPath,title:a.title,hostName:a.target_data.host_name||"\u2014",stigName:c.display_name||c.stig_name,total:c.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let f of c.rules)u[f.status]++,u[f.severity]++;m.push(u)}}catch{}e.webview.html=Rr(m)}};function Rr(t){let e={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let d of t)e.total+=d.total,e.open+=d.open,e.not_a_finding+=d.not_a_finding,e.not_reviewed+=d.not_reviewed,e.not_applicable+=d.not_applicable,e.high+=d.high,e.medium+=d.medium,e.low+=d.low;let s=d=>e.total?Math.round(d/e.total*100):0,m=s(e.not_a_finding+e.not_applicable),r=t.map(d=>{let a=d.total?Math.round((d.not_a_finding+d.not_applicable)/d.total*100):0;return`<tr class="row" data-path="${Ne(d.uri)}">
      <td class="td-host">${Ne(d.hostName)}</td>
      <td class="td-stig">${Ne(d.stigName)}</td>
      <td class="td-n">${d.total}</td>
      <td class="td-n td-open">${d.open}</td>
      <td class="td-n td-naf">${d.not_a_finding}</td>
      <td class="td-n td-nr">${d.not_reviewed}</td>
      <td class="td-n td-na">${d.not_applicable}</td>
      <td class="td-n">${a}%</td>
      <td class="td-file">${Ne(d.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${Fr}</style>
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
  <div class="sev-seg sev-high" style="width:${s(e.high)}%"><span>CAT I \xB7 ${e.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${s(e.medium)}%"><span>CAT II \xB7 ${e.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${s(e.low)}%"><span>CAT III \xB7 ${e.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${m}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${s(e.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${s(e.not_applicable)}%"></div>
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
</body></html>`}function Ne(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var Fr=`
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
`;var Rt=B(require("vscode")),Qe=B(require("fs")),zn={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},jn={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function $r(t){return t==="high"?"I":t==="medium"?"II":"III"}var Oe=class{static async show(e){let s=e;if(!s){let x=await Rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!x?.[0])return;s=x[0]}let m=await Rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!m?.[0])return;let r=JSON.parse(Qe.readFileSync(s.fsPath,"utf-8")),d=JSON.parse(Qe.readFileSync(m[0].fsPath,"utf-8")),a=new Map;for(let x of r.stigs)for(let v of x.rules)a.set(v.rule_version,v);let c=new Map;for(let x of d.stigs)for(let v of x.rules)c.set(v.rule_version,v);let u=[],f=new Set([...a.keys(),...c.keys()]);for(let x of f){let v=a.get(x),o=c.get(x);if(v&&o){let n="unchanged";v.status!==o.status&&(n=jn[o.status]>jn[v.status]?"improved":"regression"),u.push({ruleVersion:x,groupId:o.group_id,ruleTitle:o.rule_title,severity:o.severity,statusA:v.status,statusB:o.status,change:n})}else o&&!v?u.push({ruleVersion:x,groupId:o.group_id,ruleTitle:o.rule_title,severity:o.severity,statusA:"",statusB:o.status,change:"new"}):v&&!o&&u.push({ruleVersion:x,groupId:v.group_id,ruleTitle:v.rule_title,severity:v.severity,statusA:v.status,statusB:"",change:"removed"})}let y={regression:0,new:1,improved:2,removed:3,unchanged:4};u.sort((x,v)=>y[x.change]-y[v.change]);let g=u.filter(x=>x.change==="regression").length,b=u.filter(x=>x.change==="improved").length,p=u.filter(x=>x.change==="new").length,I=u.filter(x=>x.change==="removed").length,T=u.filter(x=>x.change==="unchanged").length,S=u.filter(x=>x.change!=="unchanged"),N=Rt.window.createWebviewPanel("stigViewer.diff","STIG Diff",Rt.ViewColumn.One,{enableScripts:!0});N.webview.html=Ur(s.fsPath,m[0].fsPath,S,u,{regressions:g,improvements:b,newRules:p,removed:I,unchanged:T})}};function Kt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ur(t,e,s,m,r){let d=t.split("/").pop()||t,a=e.split("/").pop()||e,c={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},u={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},f=y=>y.map(g=>`<tr class="row ${u[g.change]}" data-change="${g.change}">
    <td><span class="pill sev-${g.severity}">CAT ${$r(g.severity)}</span></td>
    <td><code>${Kt(g.groupId)}</code></td>
    <td><code>${Kt(g.ruleVersion)}</code></td>
    <td class="td-title">${Kt(g.ruleTitle)}</td>
    <td>${g.statusA?`<span class="pill st-${g.statusA}">${zn[g.statusA]||g.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${g.statusB?`<span class="pill st-${g.statusB}">${zn[g.statusB]||g.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${u[g.change]}">${c[g.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${Br}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${Kt(d)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${Kt(a)}</span>
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
      ${f(s)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(s)};
const ALL     = ${JSON.stringify(m)};

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
</body></html>`}var Br=`
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
`;var Ft=B(require("vscode")),Yt=B(require("fs")),Me=B(Wt());function Vn(t){return t==null?[]:Array.isArray(t)?t:[t]}function Pe(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Pe(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var qr={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function zr(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}async function Xn(t){let e=t;if(!e){let g=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!g?.[0])return;e=g[0]}let s=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!s?.[0])return;let m=JSON.parse(Yt.readFileSync(e.fsPath,"utf-8")),r=Yt.readFileSync(s[0].fsPath,"utf-8"),d=await(0,Me.parseStringPromise)(r,{explicitArray:!1,tagNameProcessors:[Me.processors.stripPrefix]}),a=null;if(d.TestResult?a=d.TestResult:d.Benchmark?.TestResult&&(a=d.Benchmark.TestResult,Array.isArray(a)&&(a=a[a.length-1])),!a)throw new Error("No <TestResult> element found in the XCCDF results file.");let c=new Map;for(let g of Vn(a["rule-result"])){let b=g?.$?.idref||"",p=zr(b),I=Pe(g.result).toLowerCase(),T=qr[I]||"not_reviewed",S="",N=Vn(g.check)[0];N&&(S=Pe(N["check-content"])),!S&&g.message&&(S=Pe(g.message)),c.set(p,{status:T,detail:S})}let u=0,f=0,y=new Date().toISOString();for(let g of m.stigs)for(let b of g.rules){let p=c.get(b.rule_id);p?(b.status=p.status,p.detail&&(b.finding_details=p.detail),b.updatedAt=y,u++):f++}Yt.writeFileSync(e.fsPath,JSON.stringify(m,null,2)),await Ft.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),Ft.window.showInformationMessage(`SCAP import: ${u} rules updated, ${f} unmatched`)}var mt=B(require("vscode")),yt=B(require("fs")),Dt=B(require("path"));function jr(t){let e=Dt.join(__dirname,"..","scan-patterns.json"),s=t||e;if(!yt.existsSync(s))throw new Error(`Scan patterns file not found: ${s}`);return JSON.parse(yt.readFileSync(s,"utf-8"))}function Vr(t,e){let s=[e.rule_title,e.discussion,e.check_content,e.group_title].join(" ").toLowerCase();return t.ruleKeywords.some(m=>s.includes(m.toLowerCase()))}function Gn(t){let e=t.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${e}$`)}function Ze(t,e){let s=t.replace(/\\/g,"/");return e.some(m=>{if(m.includes("{")){let r=m.match(/^(.*)\{([^}]+)\}(.*)$/);if(r){let[,d,a,c]=r;return a.split(",").some(u=>{let f=d+u.trim()+c;return Gn(f).test(s)})}}return Gn(m).test(s)})}function Xr(t,e){let s=[];function m(r){let d;try{d=yt.readdirSync(r,{withFileTypes:!0})}catch{return}for(let a of d){let c=Dt.join(r,a.name),u=Dt.relative(t,c);Ze(u,e)||(a.isDirectory()?Ze(u+"/",e)||m(c):a.isFile()&&s.push(c))}}return m(t),s}function Gr(t,e,s){let m;try{let a=yt.readFileSync(t);if(a.includes(0))return[];m=a.toString("utf-8")}catch{return[]}let r=m.split(`
`),d=[];for(let a of e){let c=s?"g":"gi",u;try{u=new RegExp(a,c)}catch{continue}for(let f=0;f<r.length;f++)u.test(r[f])&&d.push({line:f+1,content:r[f].trim().substring(0,200)}),u.lastIndex=0}return d}async function Wn(t){let e=t;if(!e){let u=await mt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!u?.[0])return;e=u[0]}let s=await mt.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!s?.[0])return;let m=await mt.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!m)return;let r;if(m.includes("custom")){let u=await mt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!u?.[0])return;r=u[0].fsPath}let d=jr(r),a=JSON.parse(yt.readFileSync(e.fsPath,"utf-8")),c=s[0].fsPath;await mt.window.withProgress({location:mt.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(u,f)=>{u.report({message:"Discovering files..."});let y=Xr(c,d.excludeGlobs);if(f.isCancellationRequested)return;let g=[],b=new Date().toISOString(),p=0,I=0,T=0,S=0,N=a.stigs.reduce((v,o)=>v+o.rules.length,0);for(let v of a.stigs)for(let o of v.rules){if(f.isCancellationRequested)return;let n=d.scanPatterns.filter(P=>Vr(P,o));if(n.length===0)continue;p++,u.report({message:`Scanning ${o.group_id} (${p}/${N})`,increment:1/N*100});let C=[],D=[];for(let P of n){let R=y.filter(M=>{let F=Dt.relative(c,M);return Ze(F,P.fileGlobs)}),L=!1;for(let M of R){if(f.isCancellationRequested)return;let F=Gr(M,P.patterns,P.caseSensitive);if(F.length>0){L=!0;let U=Dt.relative(c,M);for(let Y of F)C.push({file:U,line:Y.line,content:Y.content,patternId:P.id})}}L&&D.push(P.name)}let E=n.some(P=>P.matchMeansOpen),h=n.filter(P=>P.matchMeansOpen),w=C.filter(P=>h.some(R=>R.id===P.patternId)),A,O;if(w.length>0){A="open",T++;let P=n.find(R=>R.findingDetailOverride&&C.some(L=>L.patternId===R.id));if(P?.findingDetailOverride){let R=C.filter(L=>L.patternId===P.id).slice(0,20).map(L=>`  ${L.file}:${L.line} \u2014 ${L.content}`).join(`
`);O=P.findingDetailOverride.replace("{count}",String(C.filter(L=>L.patternId===P.id).length)).replace("{matches}",R).replace("{file}",C[0]?.file||"")}else{let R=w.slice(0,20).map(M=>`  ${M.file}:${M.line} \u2014 ${M.content}`).join(`
`),L=w.length>20?`
  ... and ${w.length-20} more`:"";O=`[AUTO-SCAN] Found ${w.length} potential issue(s) matching: ${D.join(", ")}

${R}${L}`}}else if(E)A="not_a_finding",S++,O=`[AUTO-SCAN] Scanned ${y.length} files for: ${n.map(P=>P.name).join(", ")}. No issues detected.`;else{let P=C.slice(0,10);if(P.length>0){A="not_reviewed";let R=n.find(L=>L.findingDetailOverride);R?.findingDetailOverride?O=R.findingDetailOverride.replace("{count}",String(C.length)).replace("{matches}",P.map(L=>L.file).join(", ")).replace("{file}",P[0]?.file||""):O=`[AUTO-SCAN] Found relevant files: ${P.map(L=>L.file).join(", ")}. Manual review required.`}else continue}o.status=A,o.finding_details=O,o.updatedAt=b,I++}yt.writeFileSync(e.fsPath,JSON.stringify(a,null,2)),await mt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let x=N-I;mt.window.showInformationMessage(`Scan complete: ${I} rules evaluated (${T} open, ${S} not a finding, ${x} unmatched \u2014 review manually)`)})}var $t=B(require("vscode")),Jt=B(require("fs"));var ti=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function Wr(t,e){let s=[];if(t.taxa)for(let r of t.taxa){let d=ei(r.id);d&&s.push(d)}if(e?.relationships){for(let r of e.relationships)if(r.target.toolComponent?.name?.toUpperCase()==="CWE"||r.target.id.startsWith("CWE-")){let d=ei(r.target.id);d&&s.push(d)}}if(e?.properties?.tags)for(let r of e.properties.tags){let d=r.match(/cwe[/-](\d+)/i);d&&s.push(parseInt(d[1],10))}let m=ei(t.ruleId);return m&&s.push(m),[...new Set(s)]}function ei(t){let e=t.match(/(?:CWE-?)(\d+)/i);return e?parseInt(e[1],10):null}async function Hn(t){let e=t;if(!e){let p=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!p?.[0])return;e=p[0]}let s=await $t.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!s?.length)return;let m=JSON.parse(Jt.readFileSync(e.fsPath,"utf-8")),r=new Date().toISOString(),d=[];for(let p of m.stigs)d.push(...p.rules);let a=new Map,c=0,u=0,f=new Set,y=[];for(let p of s){let I=JSON.parse(Jt.readFileSync(p.fsPath,"utf-8"));for(let T of I.runs){let S=T.tool.driver.name;y.includes(S)||y.push(S);let N=new Map;if(T.tool.driver.rules)for(let x of T.tool.driver.rules)N.set(x.id,x);for(let x of T.results){c++;let v=N.get(x.ruleId),o=Wr(x,v);if(o.length===0)continue;let n=x.locations?.[0]?.physicalLocation,C=n?.artifactLocation?.uri||"",D=n?.region?.startLine||0,E=!1;for(let h of o){let w=ti.get(h);if(!w){f.add(h);continue}for(let A of d){let O=`${A.rule_title} ${A.discussion} ${A.check_content}`.toLowerCase();w.keywords.some(P=>O.includes(P.toLowerCase()))&&(a.has(A.uuid)||a.set(A.uuid,[]),a.get(A.uuid).push({tool:S,cwe:h,file:C.replace(/^file:\/\//,""),line:D,message:x.message.text.substring(0,300)}),E=!0)}}E&&u++}}}let g=0;for(let[p,I]of a){let T=d.find(x=>x.uuid===p);if(!T)continue;T.status="open",g++;let S=new Map;for(let x of I){let v=`CWE-${x.cwe}`;S.has(v)||S.set(v,[]),S.get(v).push(x)}let N=[`[SARIF IMPORT] ${I.length} finding(s) from: ${y.join(", ")}
`];for(let[x,v]of S){let o=ti.get(parseInt(x.replace("CWE-","")))?.name||x;N.push(`${x} \u2014 ${o}:`);let n=v.slice(0,10);for(let C of n)N.push(`  ${C.file}:${C.line} \u2014 ${C.message}`);v.length>10&&N.push(`  ... and ${v.length-10} more`)}T.finding_details=N.join(`
`),T.updatedAt=r}Jt.writeFileSync(e.fsPath,JSON.stringify(m,null,2)),await $t.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let b=`SARIF import: ${c} findings processed, ${u} mapped to ${g} rules`;f.size>0&&(b+=` (${f.size} unmapped CWEs: ${[...f].slice(0,5).map(p=>`CWE-${p}`).join(", ")}${f.size>5?"...":""})`),$t.window.showInformationMessage(b)}var _t=B(require("vscode")),Qt=B(require("fs"));function Hr(t){let e=[];if(!t.vulnerabilities)return e;for(let[s,m]of Object.entries(t.vulnerabilities))for(let r of m.via)typeof r=="object"&&e.push({name:s,severity:r.severity,title:r.title,url:r.url,cwe:r.cwe?.[0],fixAvailable:m.fixAvailable?"Yes":"No"});return e}function Kn(t){let e=[],s=Array.isArray(t)?t:t.dependencies||[];for(let m of s)if(m.vulns?.length)for(let r of m.vulns)e.push({name:m.name,version:m.version,id:r.id,description:r.description,fixAvailable:r.fix_versions?.length?r.fix_versions.join(", "):"No"});return e}function Kr(t){if(t.vulnerabilities&&typeof t.vulnerabilities=="object")return{entries:Hr(t),source:"npm audit"};if(Array.isArray(t)&&t[0]?.vulns!==void 0)return{entries:Kn(t),source:"pip-audit"};if(t.dependencies&&Array.isArray(t.dependencies))return{entries:Kn(t),source:"pip-audit"};if(Array.isArray(t))return{entries:t.map(e=>({name:e.name||e.package||e.module||"",version:e.version||e.installed_version||"",severity:e.severity||e.level||"",title:e.title||e.advisory||e.description||"",id:e.id||e.cve||e.advisory_id||"",url:e.url||e.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function Yn(t){let e=t;if(!e){let y=await _t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!y?.[0])return;e=y[0]}let s=await _t.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!s?.[0])return;let m=JSON.parse(Qt.readFileSync(e.fsPath,"utf-8")),r=JSON.parse(Qt.readFileSync(s[0].fsPath,"utf-8")),{entries:d,source:a}=Kr(r);if(d.length===0){_t.window.showInformationMessage(`No vulnerabilities found in ${a} output.`);return}let c=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],u=new Date().toISOString(),f=0;for(let y of m.stigs)for(let g of y.rules){let b=`${g.rule_title} ${g.discussion} ${g.check_content}`.toLowerCase();if(!c.some(x=>b.includes(x)))continue;f++,g.status="open",g.updatedAt=u;let I={};for(let x of d){let v=(x.severity||"unknown").toLowerCase();I[v]=(I[v]||0)+1}let T=Object.entries(I).map(([x,v])=>`${v} ${x}`).join(", "),S=[`[AUDIT IMPORT] ${d.length} vulnerable dependencies found via ${a}`,`Severity breakdown: ${T}
`],N=d.slice(0,25);for(let x of N){let v=[x.name];x.version&&v.push(`v${x.version}`),x.severity&&v.push(`[${x.severity}]`),x.title&&v.push(`\u2014 ${x.title}`),x.id&&v.push(`(${x.id})`),x.fixAvailable&&x.fixAvailable!=="No"&&v.push(`fix: ${x.fixAvailable}`),S.push(`  ${v.join(" ")}`)}d.length>25&&S.push(`  ... and ${d.length-25} more`),g.finding_details=S.join(`
`)}Qt.writeFileSync(e.fsPath,JSON.stringify(m,null,2)),await _t.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),f>0?_t.window.showInformationMessage(`Imported ${d.length} vulnerabilities from ${a} \u2192 ${f} STIG rule(s) marked open`):_t.window.showWarningMessage(`Imported ${d.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var Et=B(require("vscode")),Zt=B(require("fs")),St=B(require("path")),Jn=B(require("zlib"));var ii=class{constructor(){this.files=[]}addFile(e,s){let m=typeof s=="string"?Buffer.from(s,"utf-8"):s,r=Jn.deflateRawSync(m),d=this.crc32(m);this.files.push({name:e,data:m,crc:d,compressedData:r})}build(){let e=[],s=[],m=0;for(let c of this.files){let u=Buffer.from(c.name,"utf-8"),f=Buffer.alloc(30+u.length);f.writeUInt32LE(67324752,0),f.writeUInt16LE(20,4),f.writeUInt16LE(0,6),f.writeUInt16LE(8,8),f.writeUInt16LE(0,10),f.writeUInt16LE(0,12),f.writeUInt32LE(c.crc,14),f.writeUInt32LE(c.compressedData.length,18),f.writeUInt32LE(c.data.length,22),f.writeUInt16LE(u.length,26),f.writeUInt16LE(0,28),u.copy(f,30);let y=Buffer.alloc(46+u.length);y.writeUInt32LE(33639248,0),y.writeUInt16LE(20,4),y.writeUInt16LE(20,6),y.writeUInt16LE(0,8),y.writeUInt16LE(8,10),y.writeUInt16LE(0,12),y.writeUInt16LE(0,14),y.writeUInt32LE(c.crc,16),y.writeUInt32LE(c.compressedData.length,20),y.writeUInt32LE(c.data.length,24),y.writeUInt16LE(u.length,28),y.writeUInt16LE(0,30),y.writeUInt16LE(0,32),y.writeUInt16LE(0,34),y.writeUInt16LE(0,36),y.writeUInt32LE(0,38),y.writeUInt32LE(m,42),u.copy(y,46),e.push(f,c.compressedData),s.push(y),m+=f.length+c.compressedData.length}let r=m,d=0;for(let c of s)e.push(c),d+=c.length;let a=Buffer.alloc(22);return a.writeUInt32LE(101010256,0),a.writeUInt16LE(0,4),a.writeUInt16LE(0,6),a.writeUInt16LE(this.files.length,8),a.writeUInt16LE(this.files.length,10),a.writeUInt32LE(d,12),a.writeUInt32LE(r,16),a.writeUInt16LE(0,20),e.push(a),Buffer.concat(e)}crc32(e){let s=4294967295;for(let m=0;m<e.length;m++){s^=e[m];for(let r=0;r<8;r++)s=s>>>1^(s&1?3988292384:0)}return(s^4294967295)>>>0}};function Yr(t){let e=[];e.push("STIG ASSESSMENT EVIDENCE PACKAGE"),e.push(`================================
`),e.push(`Generated: ${new Date().toISOString()}`),e.push(`Title: ${t.title}`),e.push(`Host: ${t.target_data.host_name||"N/A"}`),e.push(`IP: ${t.target_data.ip_address||"N/A"}`),e.push(`FQDN: ${t.target_data.fqdn||"N/A"}
`);for(let s of t.stigs){let m={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let c of s.rules)m[c.status]++,m[c.severity]++;let r=s.rules.length,d=r?Math.round((m.not_a_finding+m.not_applicable)/r*100):0;e.push(`STIG: ${s.stig_name}`),e.push(`  ${s.release_info} | Version ${s.version}`),e.push(`  Total Rules: ${r}`),e.push(`  Open: ${m.open} | Not a Finding: ${m.not_a_finding} | Not Reviewed: ${m.not_reviewed} | Not Applicable: ${m.not_applicable}`),e.push(`  CAT I: ${m.high} | CAT II: ${m.medium} | CAT III: ${m.low}`),e.push(`  Completion: ${d}%
`);let a=s.rules.filter(c=>c.status==="open");if(a.length>0){e.push("  OPEN FINDINGS:");for(let c of a){let u=c.severity==="high"?"I":c.severity==="medium"?"II":"III";if(e.push(`    [CAT ${u}] ${c.group_id} \u2014 ${c.rule_title}`),c.finding_details){let f=c.finding_details.substring(0,200).replace(/\n/g,`
      `);e.push(`      ${f}`)}}e.push("")}}return e.push(`
PACKAGE CONTENTS:`),e.push("  checklist.cklb    \u2014 Full checklist in JSON format"),e.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),e.push("  summary.csv       \u2014 All rules with status and findings"),e.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),e.push("  report.txt        \u2014 This summary report"),e.join(`
`)}async function Qn(t){let e=t;if(!e){let y=await Et.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!y?.[0])return;e=y[0]}let s=JSON.parse(Zt.readFileSync(e.fsPath,"utf-8")),m=St.basename(e.fsPath,".cklb"),r=new ii;if(r.addFile("checklist.cklb",JSON.stringify(s,null,2)),r.addFile("checklist.ckl",re(s)),r.addFile("summary.csv",ne(s)),r.addFile("poam.csv",oe(s)),r.addFile("report.txt",Yr(s)),(await Et.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let y=await Et.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(y)for(let g of y){let b="evidence/"+St.basename(g.fsPath);r.addFile(b,Zt.readFileSync(g.fsPath))}}let a=`${m}_evidence_${new Date().toISOString().slice(0,10)}.zip`,c=await Et.window.showSaveDialog({defaultUri:Et.Uri.file(St.join(St.dirname(e.fsPath),a)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!c)return;Zt.writeFileSync(c.fsPath,r.build());let u=s.stigs.reduce((y,g)=>y+g.rules.length,0),f=s.stigs.reduce((y,g)=>y+g.rules.filter(b=>b.status==="open").length,0);Et.window.showInformationMessage(`Evidence package saved: ${u} rules, ${f} open findings \u2192 ${St.basename(c.fsPath)}`)}var nt=B(require("vscode")),Bt=B(require("fs")),Nt=B(require("path"));var Le=B(Wt()),tr={"CCI-000005":{control:"AC-2",title:"Account Management",definition:"The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts."},"CCI-000009":{control:"AC-2",title:"Account Management",definition:"The organization reviews information system accounts for compliance with account management requirements."},"CCI-000010":{control:"AC-2",title:"Account Management",definition:"The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts."},"CCI-000012":{control:"AC-2",title:"Account Management",definition:"The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions."},"CCI-000015":{control:"AC-2 (1)",title:"Account Management | Automated System Account Management",definition:"The organization employs automated mechanisms to support the management of information system accounts."},"CCI-000017":{control:"AC-2 (2)",title:"Account Management | Removal of Temporary/Emergency Accounts",definition:"The information system automatically removes or disables temporary and emergency accounts after a defined time period."},"CCI-000018":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after a defined time period."},"CCI-000019":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The organization defines the time period after which the information system automatically disables inactive accounts."},"CCI-000020":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after the organization-defined time period."},"CCI-000023":{control:"AC-2 (4)",title:"Account Management | Automated Audit Actions",definition:"The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles."},"CCI-000032":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources."},"CCI-000033":{control:"AC-3 (3)",title:"Access Enforcement | Mandatory Access Control",definition:"The information system enforces organization-defined mandatory access control policy."},"CCI-000038":{control:"AC-6",title:"Least Privilege",definition:"The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks."},"CCI-000039":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions and security-relevant information."},"CCI-000040":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions."},"CCI-000044":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period."},"CCI-000045":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The organization defines the number of consecutive invalid logon attempts allowed."},"CCI-000047":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded."},"CCI-000048":{control:"AC-8",title:"System Use Notification",definition:"The information system displays an approved system use notification message or banner before granting access."},"CCI-000050":{control:"AC-8",title:"System Use Notification",definition:"The information system retains the notification message or banner on the screen until users acknowledge the usage conditions."},"CCI-000054":{control:"AC-10",title:"Concurrent Session Control",definition:"The information system limits the number of concurrent sessions for each account to an organization-defined number."},"CCI-000056":{control:"AC-11",title:"Session Lock",definition:"The information system initiates a session lock after the organization-defined time period of inactivity."},"CCI-000057":{control:"AC-11",title:"Session Lock",definition:"The information system provides the capability for users to initiate a session lock for display devices."},"CCI-000058":{control:"AC-11 (1)",title:"Session Lock | Pattern-Hiding Displays",definition:"The information system conceals, via the session lock, information previously visible on the display."},"CCI-000060":{control:"AC-11",title:"Session Lock",definition:"The organization defines the time period of inactivity after which the information system initiates a session lock."},"CCI-000068":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions."},"CCI-000070":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions."},"CCI-000082":{control:"AC-17 (9)",title:"Remote Access | Disconnect/Disable Access",definition:"The organization provides the capability to expeditiously disconnect or disable remote access."},"CCI-000213":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies."},"CCI-001084":{control:"SC-3",title:"Security Function Isolation",definition:"The information system isolates security functions from nonsecurity functions."},"CCI-000126":{control:"AU-2",title:"Audit Events",definition:"The organization determines that the information system is capable of auditing organization-defined auditable events."},"CCI-000130":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes what type of event occurred."},"CCI-000131":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes when an event occurred."},"CCI-000132":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes where the event occurred."},"CCI-000133":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the source of the event."},"CCI-000134":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the outcome of the event."},"CCI-000135":{control:"AU-3 (1)",title:"Content of Audit Records | Additional Audit Information",definition:"The information system generates audit records containing organization-defined additional, more detailed information."},"CCI-000136":{control:"AU-3 (2)",title:"Content of Audit Records | Centralized Management",definition:"The information system provides centralized management and configuration of the content to be captured in audit records."},"CCI-000139":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system alerts designated personnel in the event of an audit processing failure."},"CCI-000140":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system takes organization-defined actions in the event of an audit processing failure."},"CCI-000154":{control:"AU-6",title:"Audit Review, Analysis, and Reporting",definition:"The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity."},"CCI-000158":{control:"AU-7",title:"Audit Reduction and Report Generation",definition:"The information system provides an audit reduction and report generation capability."},"CCI-000162":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized access."},"CCI-000163":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized modification."},"CCI-000164":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized deletion."},"CCI-000166":{control:"AU-10",title:"Non-repudiation",definition:"The information system protects against an individual falsely denying having performed a particular action."},"CCI-000167":{control:"AU-10",title:"Non-repudiation",definition:"The information system provides irrefutable evidence that a specific action was performed."},"CCI-000169":{control:"AU-12",title:"Audit Generation",definition:"The information system provides audit record generation capability for the auditable events defined."},"CCI-000171":{control:"AU-12",title:"Audit Generation",definition:"The information system allows designated personnel to select which auditable events are to be audited by specific components."},"CCI-000172":{control:"AU-12 (3)",title:"Audit Generation | Changes by Authorized Individuals",definition:"The information system provides the capability for authorized individuals to change the auditing to be performed on specific components."},"CCI-001464":{control:"AU-4",title:"Audit Storage Capacity",definition:"The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded."},"CCI-001487":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information and audit tools from unauthorized access, modification, and deletion."},"CCI-001493":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users."},"CCI-001494":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only a defined subset of privileged users."},"CCI-001495":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization defines the subset of privileged users authorized for audit management."},"CCI-001496":{control:"AU-9 (5)",title:"Protection of Audit Information | Dual Authorization",definition:"The organization enforces dual authorization for movement and/or deletion of organization-defined audit information."},"CCI-001851":{control:"AU-4 (1)",title:"Audit Storage Capacity | Transfer to Alternate Storage",definition:"The information system off-loads audit records onto a different system or media."},"CCI-001855":{control:"AU-5 (1)",title:"Response to Audit Processing Failures | Audit Storage Capacity",definition:"The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage."},"CCI-001857":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The information system provides an alert in real-time to organization-defined personnel when audit failure events occur."},"CCI-001858":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The organization defines the audit failure events requiring real-time alerts."},"CCI-000345":{control:"CM-5",title:"Access Restrictions for Change",definition:"The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system."},"CCI-000363":{control:"CM-6",title:"Configuration Settings",definition:"The organization defines security configuration settings for the information system components."},"CCI-000366":{control:"CM-6",title:"Configuration Settings",definition:"The organization ensures that the information system components comply with organization-defined configuration settings."},"CCI-000370":{control:"CM-6",title:"Configuration Settings",definition:"The organization establishes and documents configuration settings for information technology products employed within the information system."},"CCI-000379":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities."},"CCI-000381":{control:"CM-7",title:"Least Functionality",definition:"The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services."},"CCI-000382":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services."},"CCI-001749":{control:"CM-5 (3)",title:"Access Restrictions for Change | Signed Components",definition:"The information system prevents the installation of software and firmware components without verification that the component has been digitally signed."},"CCI-001812":{control:"CM-11",title:"User-Installed Software",definition:"The organization defines policies governing the installation of software by users."},"CCI-001813":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system enforces access restrictions and supports auditing of the enforcement actions."},"CCI-001814":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system supports auditing of the enforcement actions."},"CCI-000185":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system validates certificates by constructing and verifying a certification path."},"CCI-000186":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system enforces authorized access to the corresponding private key."},"CCI-000187":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system maps the authenticated identity to the account of the individual or group."},"CCI-000192":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of uppercase characters used."},"CCI-000193":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of lowercase characters used."},"CCI-000194":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of numeric characters used."},"CCI-000195":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of special characters used."},"CCI-000196":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, stores only cryptographically-protected passwords."},"CCI-000197":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, transmits only cryptographically-protected passwords."},"CCI-000198":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password lifetime restrictions."},"CCI-000199":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces maximum password lifetime restrictions."},"CCI-000200":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system prohibits password reuse for a defined number of generations."},"CCI-000205":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password length."},"CCI-000764":{control:"IA-2",title:"Identification and Authentication (Organizational Users)",definition:"The information system uniquely identifies and authenticates organizational users."},"CCI-000765":{control:"IA-2 (1)",title:"Identification and Authentication | Multi-Factor Authentication to Privileged Accounts",definition:"The information system implements multifactor authentication for network access to privileged accounts."},"CCI-000766":{control:"IA-2 (2)",title:"Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for network access to non-privileged accounts."},"CCI-000767":{control:"IA-2 (3)",title:"Identification and Authentication | Local Access to Privileged Accounts",definition:"The information system implements multifactor authentication for local access to privileged accounts."},"CCI-000768":{control:"IA-2 (4)",title:"Identification and Authentication | Local Access to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for local access to non-privileged accounts."},"CCI-000770":{control:"IA-2 (5)",title:"Identification and Authentication | Group Authentication",definition:"The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed."},"CCI-000778":{control:"IA-3",title:"Device Identification and Authentication",definition:"The information system uniquely identifies and authenticates devices before establishing a connection."},"CCI-000795":{control:"IA-4",title:"Identifier Management",definition:"The organization manages information system identifiers for users and devices."},"CCI-000803":{control:"IA-7",title:"Cryptographic Module Authentication",definition:"The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws."},"CCI-001941":{control:"IA-2 (8)",title:"Identification and Authentication | Network Access to Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to privileged accounts."},"CCI-001942":{control:"IA-2 (9)",title:"Identification and Authentication | Network Access to Non-Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts."},"CCI-001953":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials."},"CCI-001954":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts PIV credentials from other agencies."},"CCI-002007":{control:"IA-5",title:"Authenticator Management",definition:"The organization manages information system authenticators."},"CCI-002009":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, enforces the password complexity defined by the organization."},"CCI-002010":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces the number of characters that are changed when new passwords are created."},"CCI-002041":{control:"IA-11",title:"Re-authentication",definition:"The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication."},"CCI-000877":{control:"MA-4",title:"Nonlocal Maintenance",definition:"The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities."},"CCI-001880":{control:"MA-4 (6)",title:"Nonlocal Maintenance | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications."},"CCI-001199":{control:"SC-28",title:"Protection of Information at Rest",definition:"The information system protects the confidentiality and integrity of information at rest."},"CCI-000924":{control:"PE-2",title:"Physical Access Authorizations",definition:"The organization develops, approves, and maintains a list of individuals with authorized access to the facility."},"CCI-001643":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization scans for vulnerabilities in the information system and hosted applications."},"CCI-001644":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization defines the frequency at which vulnerability scans are conducted."},"CCI-002233":{control:"SA-11",title:"Developer Security Testing and Evaluation",definition:"The organization requires the developer of the information system to create and implement a security assessment plan."},"CCI-003123":{control:"SA-11 (1)",title:"Developer Security Testing and Evaluation | Static Code Analysis",definition:"The organization requires the developer to employ static code analysis tools."},"CCI-001130":{control:"SC-5",title:"Denial of Service Protection",definition:"The information system protects against or limits the effects of organization-defined types of denial-of-service attacks."},"CCI-001184":{control:"SC-23",title:"Session Authenticity",definition:"The information system protects the authenticity of communications sessions."},"CCI-001188":{control:"SC-23 (1)",title:"Session Authenticity | Invalidate Session Identifiers at Logout",definition:"The information system invalidates session identifiers upon user logout or other session termination."},"CCI-002418":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system protects the confidentiality and integrity of transmitted information."},"CCI-002420":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission."},"CCI-002421":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to recognize changes to information during transmission."},"CCI-002422":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception."},"CCI-002450":{control:"SC-13",title:"Cryptographic Protection",definition:"The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies."},"CCI-002530":{control:"SC-17",title:"Public Key Infrastructure Certificates",definition:"The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider."},"CCI-002824":{control:"SI-16",title:"Memory Protection",definition:"The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution."},"CCI-003568":{control:"SC-28 (1)",title:"Protection of Information at Rest | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest."},"CCI-001310":{control:"SI-10",title:"Information Input Validation",definition:"The information system checks the validity of organization-defined information inputs."},"CCI-001312":{control:"SI-11",title:"Error Handling",definition:"The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries."},"CCI-001314":{control:"SI-11",title:"Error Handling",definition:"The information system reveals error messages only to authorized personnel."},"CCI-002235":{control:"SI-2 (2)",title:"Flaw Remediation | Automated Flaw Remediation Status",definition:"The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation."},"CCI-002605":{control:"SI-6",title:"Security Function Verification",definition:"The information system verifies the correct operation of security-relevant software and firmware."},"CCI-002617":{control:"SI-2",title:"Flaw Remediation",definition:"The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source."},"CCI-002699":{control:"SI-6",title:"Security Function Verification",definition:"The information system notifies defined personnel of failed security verification tests."},"CCI-002702":{control:"SI-6",title:"Security Function Verification",definition:"The information system implements organization-defined security safeguards when anomalies in security function verification are discovered."},"CCI-000537":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of user-level information contained in the information system."},"CCI-000538":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of system-level information contained in the information system."},"CCI-000539":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of information system documentation including security-related documentation."},"CCI-001682":{control:"PM-6",title:"Information Security Measures of Performance",definition:"The organization develops, monitors, and reports on the results of information security measures of performance."},"CCI-000971":{control:"PS-4",title:"Personnel Termination",definition:"The organization, upon termination of individual employment, disables information system access within the organization-defined time period."}};function Zn(t){return t==null?[]:Array.isArray(t)?t:[t]}function er(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?er(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}async function ir(t){let e=await(0,Le.parseStringPromise)(t,{explicitArray:!1,tagNameProcessors:[Le.processors.stripPrefix]}),s=e.cci_list??e["cci-list"];if(!s)throw new Error("Not a valid CCI List XML \u2014 no <cci_list> root element found.");let m=Zn((s.cci_items??s["cci-items"])?.cci_item??(s.cci_items??s["cci-items"])?.["cci-item"]);if(m.length===0)throw new Error("No <cci_item> elements found in the CCI List XML.");let r={};for(let d of m){let a=d?.$?.id||"";if(!a.startsWith("CCI-"))continue;let c=er(d.definition),u=Zn(d.references?.reference),f="",y="";for(let g of u){let b=g?.$??g??{},p=String(b.version??"");if((p==="5"||p==="4")&&(f=b.index??"",y=b.title??"",p==="5"))break}if(!f&&u.length>0){let g=u[u.length-1],b=g?.$??g??{};f=b.index??"",y=b.title??""}f&&(r[a]={control:f,title:y,definition:c})}return r}var ni=/^[A-Z]{2}-\d+(\s*\(\d+\))?$/;function ri(t){let e=[],s="",m=!1;for(let r=0;r<t.length;r++){let d=t[r];m?d==='"'?r+1<t.length&&t[r+1]==='"'?(s+='"',r++):m=!1:s+=d:d==='"'?m=!0:d===","?(e.push(s.trim()),s=""):s+=d}return e.push(s.trim()),e}function rr(t){let e=t.split(/\r?\n/).filter(y=>y.trim().length>0);if(e.length<2)return[];let s=ri(e[0]),m=s.map(y=>y.toLowerCase().replace(/[_\s-]+/g," ").trim()),r=-1;for(let y=0;y<s.length;y++){let g=m[y];if(g.includes("control")&&(g.includes("id")||g.includes("identifier"))){r=y;break}}if(r<0)for(let y=0;y<s.length;y++){let g=0;for(let b=1;b<Math.min(e.length,10);b++){let p=ri(e[b]);p[y]&&ni.test(p[y].trim())&&g++}if(g>=Math.min(e.length-1,3)){r=y;break}}if(r<0)for(let y=0;y<s.length;y++){if(ni.test(s[y].trim()))continue;let g=m[y];if(g.includes("control")||g==="id"){r=y;break}}r<0&&(r=0);let d=m.findIndex((y,g)=>g!==r&&(y.includes("title")||y.includes("name"))),a=m.findIndex((y,g)=>g!==r&&y.includes("family")),c=m.findIndex((y,g)=>g!==r&&(y.includes("description")||y.includes("text"))),u=new Set,f=[];for(let y=1;y<e.length;y++){let g=ri(e[y]),b=(g[r]??"").trim();if(!b||!ni.test(b))continue;let p=b.replace(/\s+/g," ");if(u.has(p))continue;u.add(p);let I={controlId:p};d>=0&&g[d]&&(I.title=g[d].trim()),a>=0&&g[a]&&(I.family=g[a].trim()),c>=0&&g[c]&&(I.description=g[c].trim());let T={};for(let S=0;S<s.length;S++)S===r||S===d||S===a||S===c||g[S]?.trim()&&(T[s[S]]=g[S].trim());Object.keys(T).length>0&&(I.extra=T),f.push(I)}return f}function Jr(t){return t.replace(/\s*\(\d+\)$/,"").trim()}function Qr(t){return t==="not_a_finding"||t==="not_applicable"?"passing":t==="open"?"open":"not_reviewed"}function Zr(t){return t.length===0?"not_covered":t.every(m=>m.mappedStatus==="passing")?"fully_satisfied":t.some(m=>m.mappedStatus==="passing")?"partially_satisfied":"at_risk"}var nr={not_covered:0,at_risk:1,partially_satisfied:2,fully_satisfied:3};function or(t,e,s){let m={...tr,...s},r=new Map;for(let[f,y]of Object.entries(m)){let g=y.control;r.has(g)||r.set(g,new Set),r.get(g).add(f)}let d=new Map,a=0;for(let f of t.stigs)for(let y of f.rules)for(let g of y.ccis){if(!m[g]){a++;continue}d.has(g)||d.set(g,[]),d.get(g).push({rule:y,cci:g})}let c=[];for(let f of e){let y=!f.controlId.includes("("),g=new Set;if(y){for(let[I,T]of r.entries())if(Jr(I)===f.controlId)for(let S of T)g.add(S)}else{let I=r.get(f.controlId);if(I)for(let T of I)g.add(T)}let b=new Set,p=[];for(let I of g){let T=d.get(I)??[];for(let{rule:S}of T){let N=`${S.group_id}::${I}`;b.has(N)||(b.add(N),p.push({groupId:S.group_id,ruleVersion:S.rule_version,severity:S.severity,ruleTitle:S.rule_title,status:S.status,mappedStatus:Qr(S.status),cci:I}))}}c.push({control:f,status:Zr(p),mappedRules:p,ccis:[...g].sort()})}c.sort((f,y)=>{let g=nr[f.status]-nr[y.status];return g!==0?g:f.control.controlId.localeCompare(y.control.controlId,void 0,{numeric:!0})});let u=t.stigs.map(f=>f.display_name||f.stig_name).join(", ");return{analyzedAt:new Date().toISOString(),checklistTitle:t.title,stigName:u,totalNistControls:e.length,coveredControls:c.filter(f=>f.status!=="not_covered").length,uncoveredControls:c.filter(f=>f.status==="not_covered").length,fullySatisfiedControls:c.filter(f=>f.status==="fully_satisfied").length,partiallySatisfiedControls:c.filter(f=>f.status==="partially_satisfied").length,atRiskControls:c.filter(f=>f.status==="at_risk").length,controlMappings:c,unmappedCciCount:a}}function Ut(t){return t.includes(",")||t.includes('"')||t.includes(`
`)?`"${t.replace(/"/g,'""')}"`:t}function sr(t){let e="Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details",s=t.controlMappings.map(m=>{let r=m.mappedRules.filter(u=>u.mappedStatus==="passing").length,d=m.mappedRules.filter(u=>u.mappedStatus==="open").length,a=m.mappedRules.filter(u=>u.mappedStatus==="not_reviewed").length,c=m.mappedRules.map(u=>`${u.groupId} (${u.status.replace(/_/g," ")})`).join("; ");return[Ut(m.control.controlId),Ut(m.control.title??""),Ut(m.control.family??""),Ut(m.status.replace(/_/g," ")),String(m.mappedRules.length),String(r),String(d),String(a),Ut(m.ccis.join(", ")),Ut(c)].join(",")});return[e,...s].join(`
`)}var Re=class t{static async show(e){let s=e;if(!s){let y=await nt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select STIG Checklist for Crosswalk"});if(!y?.[0])return;s=y[0]}let m=JSON.parse(Bt.readFileSync(s.fsPath,"utf-8")),r=await nt.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select NIST 800-53 Controls CSV"});if(!r?.[0])return;let d=Bt.readFileSync(r[0].fsPath,"utf-8"),a=rr(d);if(a.length===0){nt.window.showErrorMessage("No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.");return}let c;if((await nt.window.showQuickPick(["Use bundled CCI mapping (covers common CCIs)","Import full CCI List XML from DISA"],{title:"CCI Mapping Source"}))?.includes("Import")){let y=await nt.window.showOpenDialog({canSelectMany:!1,filters:{"CCI List (XML)":["xml","XML"],"All Files":["*"]},title:"Select U_CCI_List.xml (extract U_CCI_List.zip from cyber.mil first)"});if(y?.[0])try{let g=Bt.readFileSync(y[0].fsPath,"utf-8");c=await ir(g),nt.window.showInformationMessage(`Loaded ${Object.keys(c).length} CCI entries from XML.`)}catch(g){nt.window.showWarningMessage(`Failed to parse CCI List XML: ${g}. Falling back to bundled map.`)}}let f=or(m,a,c);if(f.unmappedCciCount>0&&nt.window.showInformationMessage(`${f.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`),t._panel)t._panel.reveal();else{let y=nt.window.createWebviewPanel("stigViewer.crosswalk",`NIST 800-53 Crosswalk \u2014 ${m.title}`,nt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=y,y.onDidDispose(()=>{t._panel=void 0}),y.webview.onDidReceiveMessage(async g=>{if(g.type==="exportCsv"){let b=Nt.basename(s.fsPath,".cklb")+"_NIST_crosswalk.csv",p=await nt.window.showSaveDialog({defaultUri:nt.Uri.file(Nt.join(Nt.dirname(s.fsPath),b)),filters:{CSV:["csv"]},title:"Export Crosswalk Report"});p&&(Bt.writeFileSync(p.fsPath,sr(f),"utf-8"),nt.window.showInformationMessage(`Exported crosswalk \u2192 ${Nt.basename(p.fsPath)}`))}})}t._panel.webview.html=io(f)}};function ot(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function to(t){switch(t){case"fully_satisfied":return'<span class="st-icon st-sat">\u2714</span>';case"partially_satisfied":return'<span class="st-icon st-par">\u25D1</span>';case"at_risk":return'<span class="st-icon st-risk">\u26A0</span>';default:return'<span class="st-icon st-gap">\u25CF</span>'}}function eo(t){return t.replace(/_/g," ")}function io(t){let s=[...new Set(t.controlMappings.map(d=>d.control.family).filter(Boolean))].sort().map(d=>`<option value="${ot(d)}">${ot(d)}</option>`).join(""),m=t.totalNistControls?Math.round(t.coveredControls/t.totalNistControls*100):0,r=t.controlMappings.map((d,a)=>{let c=d.mappedRules.filter(p=>p.mappedStatus==="passing").length,u=d.mappedRules.filter(p=>p.mappedStatus==="open").length,f=d.mappedRules.filter(p=>p.mappedStatus==="not_reviewed").length,y=d.mappedRules.map(p=>{let I=p.severity==="high"?"sev-high":p.severity==="medium"?"sev-med":"sev-low",T=p.mappedStatus==="passing"?"rs-pass":p.mappedStatus==="open"?"rs-open":"rs-nr";return`<tr>
        <td class="sub-td">${ot(p.groupId)}</td>
        <td class="sub-td">${ot(p.ruleVersion)}</td>
        <td class="sub-td ${I}">${p.severity==="high"?"CAT I":p.severity==="medium"?"CAT II":"CAT III"}</td>
        <td class="sub-td ${T}">${ot(eo(p.status))}</td>
        <td class="sub-td sub-title">${ot(p.ruleTitle)}</td>
        <td class="sub-td sub-cci">${ot(p.cci)}</td>
      </tr>`}).join(""),g=d.control.description?`<div class="ctrl-desc">${ot(d.control.description)}</div>`:d.status==="not_covered"?'<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>':"",b=d.mappedRules.length>0?`<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${y}</tbody>
    </table>`:"";return`<tr class="cw-row" data-idx="${a}" data-status="${d.status}" data-family="${ot(d.control.family??"")}">
      <td class="td-st">${to(d.status)}</td>
      <td class="td-ctrl">${ot(d.control.controlId)}</td>
      <td class="td-title">${ot(d.control.title??"")}</td>
      <td class="td-fam">${ot(d.control.family??"")}</td>
      <td class="td-n">${d.mappedRules.length}</td>
      <td class="td-n td-pass">${c||""}</td>
      <td class="td-n td-open">${u||""}</td>
      <td class="td-n td-nr">${f||""}</td>
      <td class="td-ccis">${ot(d.ccis.slice(0,5).join(", "))}${d.ccis.length>5?"\u2026":""}</td>
    </tr>
    <tr class="cw-detail" data-idx="${a}" style="display:none">
      <td colspan="9">
        <div class="detail-wrap">${g}${b}</div>
      </td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>NIST 800-53 Crosswalk</title>
<style>${no}</style>
</head>
<body>

<header class="hdr">
  <h1>NIST 800-53 Crosswalk</h1>
  <span class="chip">${ot(t.checklistTitle)}</span>
  <span class="chip">${ot(t.stigName)}</span>
</header>

<div class="cards">
  <div class="card"><div class="card-n">${t.totalNistControls}</div><div class="card-l">Total Controls</div></div>
  <div class="card card-cov"><div class="card-n">${t.coveredControls}</div><div class="card-l">Covered</div></div>
  <div class="card card-gap"><div class="card-n">${t.uncoveredControls}</div><div class="card-l">Gaps</div></div>
  <div class="card card-sat"><div class="card-n">${t.fullySatisfiedControls}</div><div class="card-l">Fully Satisfied</div></div>
  <div class="card card-par"><div class="card-n">${t.partiallySatisfiedControls}</div><div class="card-l">Partial</div></div>
  <div class="card card-risk"><div class="card-n">${t.atRiskControls}</div><div class="card-l">At Risk</div></div>
  <div class="card card-pct"><div class="card-n">${m}%</div><div class="card-l">Coverage</div></div>
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
    ${s}
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
</body></html>`}var no=`
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
`;function ro(t){t.subscriptions.push(dt.register(t)),t.subscriptions.push(V.commands.registerCommand("stigViewer.openFile",async()=>{let e=await V.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});e?.[0]&&await V.commands.executeCommand("vscode.openWith",e[0],"stigViewer.cklbEditor")})),t.subscriptions.push(V.commands.registerCommand("stigViewer.importXccdf",async e=>{if(!e){let s=await V.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!s?.[0])return;e=s[0]}try{await $n(e)}catch(s){V.window.showErrorMessage(`XCCDF import failed: ${s}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.importCkl",async e=>{if(!e){let s=await V.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!s?.[0])return;e=s[0]}try{await Un(e)}catch(s){V.window.showErrorMessage(`CKL import failed: ${s}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await Xn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`SCAP import failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.mergeFindings",async()=>{try{await Bn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`Merge failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.dashboard",async()=>{try{await ke.show(t)}catch(e){V.window.showErrorMessage(`Dashboard failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.diffChecklists",async()=>{try{await Oe.show(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`Diff failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.scanRepo",async()=>{try{await Wn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`Repo scan failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.importSarif",async()=>{try{await Hn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`SARIF import failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.importAudit",async()=>{try{await Yn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`Dependency audit import failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.exportEvidence",async()=>{try{await Qn(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`Evidence package failed: ${e}`)}})),t.subscriptions.push(V.commands.registerCommand("stigViewer.nistCrosswalk",async()=>{try{await Re.show(dt.activeDocumentUri)}catch(e){V.window.showErrorMessage(`NIST crosswalk failed: ${e}`)}}))}function oo(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
