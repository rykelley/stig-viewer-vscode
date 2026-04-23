"use strict";var xr=Object.create;var oe=Object.defineProperty;var _r=Object.getOwnPropertyDescriptor;var Sr=Object.getOwnPropertyNames;var Er=Object.getPrototypeOf,Ar=Object.prototype.hasOwnProperty;var B=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Dr=(t,e)=>{for(var i in e)oe(t,i,{get:e[i],enumerable:!0})},hi=(t,e,i,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Sr(e))!Ar.call(t,n)&&n!==i&&oe(t,n,{get:()=>e[n],enumerable:!(l=_r(e,n))||l.enumerable});return t};var U=(t,e,i)=>(i=t!=null?xr(Er(t)):{},hi(e||!t||!t.__esModule?oe(i,"default",{value:t,enumerable:!0}):i,t)),kr=t=>hi(oe({},"__esModule",{value:!0}),t);var de=B(Ve=>{(function(){Ve.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(Ve)});var vt=B((wi,Tt)=>{(function(){var t,e,i,l,n,s,c,u=[].slice,d={}.hasOwnProperty;t=function(){var f,g,y,w,h,I;if(I=arguments[0],h=2<=arguments.length?u.call(arguments,1):[],n(Object.assign))Object.assign.apply(null,arguments);else for(f=0,y=h.length;f<y;f++)if(w=h[f],w!=null)for(g in w)d.call(w,g)&&(I[g]=w[g]);return I},n=function(f){return!!f&&Object.prototype.toString.call(f)==="[object Function]"},s=function(f){var g;return!!f&&((g=typeof f)=="function"||g==="object")},i=function(f){return n(Array.isArray)?Array.isArray(f):Object.prototype.toString.call(f)==="[object Array]"},l=function(f){var g;if(i(f))return!f.length;for(g in f)if(d.call(f,g))return!1;return!0},c=function(f){var g,y;return s(f)&&(y=Object.getPrototypeOf(f))&&(g=y.constructor)&&typeof g=="function"&&g instanceof g&&Function.prototype.toString.call(g)===Function.prototype.toString.call(Object)},e=function(f){return n(f.valueOf)?f.valueOf():f},Tt.exports.assign=t,Tt.exports.isFunction=n,Tt.exports.isObject=s,Tt.exports.isArray=i,Tt.exports.isEmpty=l,Tt.exports.isPlainObject=c,Tt.exports.getValue=e}).call(wi)});var je=B((bi,Ci)=>{(function(){var t;Ci.exports=t=(function(){function e(){}return e.prototype.hasFeature=function(i,l){return!0},e.prototype.createDocumentType=function(i,l,n){throw new Error("This DOM method is not implemented.")},e.prototype.createDocument=function(i,l,n){throw new Error("This DOM method is not implemented.")},e.prototype.createHTMLDocument=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.getFeature=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(bi)});var xi=B((Ii,Ti)=>{(function(){var t;Ti.exports=t=(function(){function e(){}return e.prototype.handleError=function(i){throw new Error(i)},e})()}).call(Ii)});var Ei=B((_i,Si)=>{(function(){var t;Si.exports=t=(function(){function e(i){this.arr=i||[]}return Object.defineProperty(e.prototype,"length",{get:function(){return this.arr.length}}),e.prototype.item=function(i){return this.arr[i]||null},e.prototype.contains=function(i){return this.arr.indexOf(i)!==-1},e})()}).call(_i)});var ki=B((Ai,Di)=>{(function(){var t,e,i;e=xi(),i=Ei(),Di.exports=t=(function(){function l(){var n;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=n=Object.create(this.defaultParams)}return Object.defineProperty(l.prototype,"parameterNames",{get:function(){return new i(Object.keys(this.defaultParams))}}),l.prototype.getParameter=function(n){return this.params.hasOwnProperty(n)?this.params[n]:null},l.prototype.canSetParameter=function(n,s){return!0},l.prototype.setParameter=function(n,s){return s!=null?this.params[n]=s:delete this.params[n]},l})()}).call(Ai)});var Y=B((Ni,Oi)=>{(function(){Oi.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(Ni)});var He=B((Pi,Mi)=>{(function(){var t,e,i;t=Y(),i=dt(),Mi.exports=e=(function(){function l(n,s,c){if(this.parent=n,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),s==null)throw new Error("Missing attribute name. "+this.debugInfo(s));this.name=this.stringify.name(s),this.value=this.stringify.attValue(c),this.type=t.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(l.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(l.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(l.prototype,"textContent",{get:function(){return this.value},set:function(n){return this.value=n||""}}),Object.defineProperty(l.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(l.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(l.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(l.prototype,"specified",{get:function(){return!0}}),l.prototype.clone=function(){return Object.create(this)},l.prototype.toString=function(n){return this.options.writer.attribute(this,this.options.writer.filterOptions(n))},l.prototype.debugInfo=function(n){return n=n||this.name,n==null?"parent: <"+this.parent.name+">":"attribute: {"+n+"}, parent: <"+this.parent.name+">"},l.prototype.isEqualNode=function(n){return!(n.namespaceURI!==this.namespaceURI||n.prefix!==this.prefix||n.localName!==this.localName||n.value!==this.value)},l})()}).call(Pi)});var ue=B((Li,Ri)=>{(function(){var t;Ri.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(i){return this.nodes[i]},e.prototype.setNamedItem=function(i){var l;return l=this.nodes[i.nodeName],this.nodes[i.nodeName]=i,l||null},e.prototype.removeNamedItem=function(i){var l;return l=this.nodes[i],delete this.nodes[i],l||null},e.prototype.item=function(i){return this.nodes[Object.keys(this.nodes)[i]]||null},e.prototype.getNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(i){throw new Error("This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(i,l){throw new Error("This DOM method is not implemented.")},e})()}).call(Li)});var pe=B((Fi,Bi)=>{(function(){var t,e,i,l,n,s,c,u,d,f=function(y,w){for(var h in w)g.call(w,h)&&(y[h]=w[h]);function I(){this.constructor=y}return I.prototype=w.prototype,y.prototype=new I,y.__super__=w.prototype,y},g={}.hasOwnProperty;d=vt(),u=d.isObject,c=d.isFunction,s=d.getValue,n=dt(),t=Y(),e=He(),l=ue(),Bi.exports=i=(function(y){f(w,y);function w(h,I,T){var E,k,x,v;if(w.__super__.constructor.call(this,h),I==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(I),this.type=t.Element,this.attribs={},this.schemaTypeInfo=null,T!=null&&this.attribute(T),h.type===t.Document&&(this.isRoot=!0,this.documentObject=h,h.rootObject=this,h.children)){for(v=h.children,k=0,x=v.length;k<x;k++)if(E=v[k],E.type===t.DocType){E.name=this.name;break}}}return Object.defineProperty(w.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(w.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(w.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new l(this.attribs)),this.attributeMap}}),w.prototype.clone=function(){var h,I,T,E;T=Object.create(this),T.isRoot&&(T.documentObject=null),T.attribs={},E=this.attribs;for(I in E)g.call(E,I)&&(h=E[I],T.attribs[I]=h.clone());return T.children=[],this.children.forEach(function(k){var x;return x=k.clone(),x.parent=T,T.children.push(x)}),T},w.prototype.attribute=function(h,I){var T,E;if(h!=null&&(h=s(h)),u(h))for(T in h)g.call(h,T)&&(E=h[T],this.attribute(T,E));else c(I)&&(I=I.apply()),this.options.keepNullAttributes&&I==null?this.attribs[h]=new e(this,h,""):I!=null&&(this.attribs[h]=new e(this,h,I));return this},w.prototype.removeAttribute=function(h){var I,T,E;if(h==null)throw new Error("Missing attribute name. "+this.debugInfo());if(h=s(h),Array.isArray(h))for(T=0,E=h.length;T<E;T++)I=h[T],delete this.attribs[I];else delete this.attribs[h];return this},w.prototype.toString=function(h){return this.options.writer.element(this,this.options.writer.filterOptions(h))},w.prototype.att=function(h,I){return this.attribute(h,I)},w.prototype.a=function(h,I){return this.attribute(h,I)},w.prototype.getAttribute=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h].value:null},w.prototype.setAttribute=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNode=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h]:null},w.prototype.setAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNS=function(h,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNodeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNodeNS=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.hasAttribute=function(h){return this.attribs.hasOwnProperty(h)},w.prototype.hasAttributeNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttribute=function(h,I){return this.attribs.hasOwnProperty(h)?this.attribs[h].isId:I},w.prototype.setIdAttributeNS=function(h,I,T){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttributeNode=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByClassName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.isEqualNode=function(h){var I,T,E;if(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.namespaceURI!==this.namespaceURI||h.prefix!==this.prefix||h.localName!==this.localName||h.attribs.length!==this.attribs.length)return!1;for(I=T=0,E=this.attribs.length-1;0<=E?T<=E:T>=E;I=0<=E?++T:--T)if(!this.attribs[I].isEqualNode(h.attribs[I]))return!1;return!0},w})(n)}).call(Fi)});var Gt=B(($i,Ui)=>{(function(){var t,e,i=function(n,s){for(var c in s)l.call(s,c)&&(n[c]=s[c]);function u(){this.constructor=n}return u.prototype=s.prototype,n.prototype=new u,n.__super__=s.prototype,n},l={}.hasOwnProperty;e=dt(),Ui.exports=t=(function(n){i(s,n);function s(c){s.__super__.constructor.call(this,c),this.value=""}return Object.defineProperty(s.prototype,"data",{get:function(){return this.value},set:function(c){return this.value=c||""}}),Object.defineProperty(s.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(s.prototype,"textContent",{get:function(){return this.value},set:function(c){return this.value=c||""}}),s.prototype.clone=function(){return Object.create(this)},s.prototype.substringData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},s.prototype.appendData=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},s.prototype.insertData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},s.prototype.deleteData=function(c,u){throw new Error("This DOM method is not implemented."+this.debugInfo())},s.prototype.replaceData=function(c,u,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},s.prototype.isEqualNode=function(c){return!(!s.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.data!==this.data)},s})(e)}).call($i)});var fe=B((qi,zi)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;t=Y(),i=Gt(),zi.exports=e=(function(s){l(c,s);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=t.CData,this.value=this.stringify.cdata(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.cdata(this,this.options.writer.filterOptions(u))},c})(i)}).call(qi)});var he=B((Vi,ji)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;t=Y(),e=Gt(),ji.exports=i=(function(s){l(c,s);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=t.Comment,this.value=this.stringify.comment(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.comment(this,this.options.writer.filterOptions(u))},c})(e)}).call(Vi)});var me=B((Hi,Xi)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)s.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},s={}.hasOwnProperty;l=vt().isObject,i=dt(),t=Y(),Xi.exports=e=(function(c){n(u,c);function u(d,f,g,y){var w;u.__super__.constructor.call(this,d),l(f)&&(w=f,f=w.version,g=w.encoding,y=w.standalone),f||(f="1.0"),this.type=t.Declaration,this.version=this.stringify.xmlVersion(f),g!=null&&(this.encoding=this.stringify.xmlEncoding(g)),y!=null&&(this.standalone=this.stringify.xmlStandalone(y))}return u.prototype.toString=function(d){return this.options.writer.declaration(this,this.options.writer.filterOptions(d))},u})(i)}).call(Hi)});var ge=B((Gi,Wi)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;i=dt(),t=Y(),Wi.exports=e=(function(s){l(c,s);function c(u,d,f,g,y,w){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(f==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(d));if(!g)throw new Error("Missing DTD attribute type. "+this.debugInfo(d));if(!y)throw new Error("Missing DTD attribute default. "+this.debugInfo(d));if(y.indexOf("#")!==0&&(y="#"+y),!y.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(d));if(w&&!y.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(d));this.elementName=this.stringify.name(d),this.type=t.AttributeDeclaration,this.attributeName=this.stringify.name(f),this.attributeType=this.stringify.dtdAttType(g),w&&(this.defaultValue=this.stringify.dtdAttDefault(w)),this.defaultValueType=y}return c.prototype.toString=function(u){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(u))},c})(i)}).call(Gi)});var ye=B((Ki,Yi)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)s.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},s={}.hasOwnProperty;l=vt().isObject,i=dt(),t=Y(),Yi.exports=e=(function(c){n(u,c);function u(d,f,g,y){if(u.__super__.constructor.call(this,d),g==null)throw new Error("Missing DTD entity name. "+this.debugInfo(g));if(y==null)throw new Error("Missing DTD entity value. "+this.debugInfo(g));if(this.pe=!!f,this.name=this.stringify.name(g),this.type=t.EntityDeclaration,!l(y))this.value=this.stringify.dtdEntityValue(y),this.internal=!0;else{if(!y.pubID&&!y.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(g));if(y.pubID&&!y.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(g));if(this.internal=!1,y.pubID!=null&&(this.pubID=this.stringify.dtdPubID(y.pubID)),y.sysID!=null&&(this.sysID=this.stringify.dtdSysID(y.sysID)),y.nData!=null&&(this.nData=this.stringify.dtdNData(y.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(g))}}return Object.defineProperty(u.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(u.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(u.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(u.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(u.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(u.prototype,"xmlVersion",{get:function(){return null}}),u.prototype.toString=function(d){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(d))},u})(i)}).call(Ki)});var ve=B((Ji,Qi)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;i=dt(),t=Y(),Qi.exports=e=(function(s){l(c,s);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());f||(f="(#PCDATA)"),Array.isArray(f)&&(f="("+f.join(",")+")"),this.name=this.stringify.name(d),this.type=t.ElementDeclaration,this.value=this.stringify.dtdElementValue(f)}return c.prototype.toString=function(u){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(u))},c})(i)}).call(Ji)});var we=B((Zi,tn)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;i=dt(),t=Y(),tn.exports=e=(function(s){l(c,s);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing DTD notation name. "+this.debugInfo(d));if(!f.pubID&&!f.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(d));this.name=this.stringify.name(d),this.type=t.NotationDeclaration,f.pubID!=null&&(this.pubID=this.stringify.dtdPubID(f.pubID)),f.sysID!=null&&(this.sysID=this.stringify.dtdSysID(f.sysID))}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),c.prototype.toString=function(u){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(u))},c})(i)}).call(Zi)});var be=B((en,nn)=>{(function(){var t,e,i,l,n,s,c,u,d,f=function(y,w){for(var h in w)g.call(w,h)&&(y[h]=w[h]);function I(){this.constructor=y}return I.prototype=w.prototype,y.prototype=new I,y.__super__=w.prototype,y},g={}.hasOwnProperty;d=vt().isObject,u=dt(),t=Y(),e=ge(),l=ye(),i=ve(),n=we(),c=ue(),nn.exports=s=(function(y){f(w,y);function w(h,I,T){var E,k,x,v,r,a;if(w.__super__.constructor.call(this,h),this.type=t.DocType,h.children){for(v=h.children,k=0,x=v.length;k<x;k++)if(E=v[k],E.type===t.Element){this.name=E.name;break}}this.documentObject=h,d(I)&&(r=I,I=r.pubID,T=r.sysID),T==null&&(a=[I,T],T=a[0],I=a[1]),I!=null&&(this.pubID=this.stringify.dtdPubID(I)),T!=null&&(this.sysID=this.stringify.dtdSysID(T))}return Object.defineProperty(w.prototype,"entities",{get:function(){var h,I,T,E,k;for(E={},k=this.children,I=0,T=k.length;I<T;I++)h=k[I],h.type===t.EntityDeclaration&&!h.pe&&(E[h.name]=h);return new c(E)}}),Object.defineProperty(w.prototype,"notations",{get:function(){var h,I,T,E,k;for(E={},k=this.children,I=0,T=k.length;I<T;I++)h=k[I],h.type===t.NotationDeclaration&&(E[h.name]=h);return new c(E)}}),Object.defineProperty(w.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(w.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(w.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),w.prototype.element=function(h,I){var T;return T=new i(this,h,I),this.children.push(T),this},w.prototype.attList=function(h,I,T,E,k){var x;return x=new e(this,h,I,T,E,k),this.children.push(x),this},w.prototype.entity=function(h,I){var T;return T=new l(this,!1,h,I),this.children.push(T),this},w.prototype.pEntity=function(h,I){var T;return T=new l(this,!0,h,I),this.children.push(T),this},w.prototype.notation=function(h,I){var T;return T=new n(this,h,I),this.children.push(T),this},w.prototype.toString=function(h){return this.options.writer.docType(this,this.options.writer.filterOptions(h))},w.prototype.ele=function(h,I){return this.element(h,I)},w.prototype.att=function(h,I,T,E,k){return this.attList(h,I,T,E,k)},w.prototype.ent=function(h,I){return this.entity(h,I)},w.prototype.pent=function(h,I){return this.pEntity(h,I)},w.prototype.not=function(h,I){return this.notation(h,I)},w.prototype.up=function(){return this.root()||this.documentObject},w.prototype.isEqualNode=function(h){return!(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.name!==this.name||h.publicId!==this.publicId||h.systemId!==this.systemId)},w})(u)}).call(en)});var Ce=B((rn,on)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;t=Y(),e=dt(),on.exports=i=(function(s){l(c,s);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=t.Raw,this.value=this.stringify.raw(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.raw(this,this.options.writer.filterOptions(u))},c})(e)}).call(rn)});var Ie=B((sn,an)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;t=Y(),e=Gt(),an.exports=i=(function(s){l(c,s);function c(u,d){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=t.Text,this.value=this.stringify.text(d)}return Object.defineProperty(c.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(c.prototype,"wholeText",{get:function(){var u,d,f;for(f="",d=this.previousSibling;d;)f=d.data+f,d=d.previousSibling;for(f+=this.data,u=this.nextSibling;u;)f=f+u.data,u=u.nextSibling;return f}}),c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.text(this,this.options.writer.filterOptions(u))},c.prototype.splitText=function(u){throw new Error("This DOM method is not implemented."+this.debugInfo())},c.prototype.replaceWholeText=function(u){throw new Error("This DOM method is not implemented."+this.debugInfo())},c})(e)}).call(sn)});var Te=B((cn,ln)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;t=Y(),e=Gt(),ln.exports=i=(function(s){l(c,s);function c(u,d,f){if(c.__super__.constructor.call(this,u),d==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=t.ProcessingInstruction,this.target=this.stringify.insTarget(d),this.name=this.target,f&&(this.value=this.stringify.insValue(f))}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(u))},c.prototype.isEqualNode=function(u){return!(!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(u)||u.target!==this.target)},c})(e)}).call(cn)});var Xe=B((dn,un)=>{(function(){var t,e,i,l=function(s,c){for(var u in c)n.call(c,u)&&(s[u]=c[u]);function d(){this.constructor=s}return d.prototype=c.prototype,s.prototype=new d,s.__super__=c.prototype,s},n={}.hasOwnProperty;i=dt(),t=Y(),un.exports=e=(function(s){l(c,s);function c(u){c.__super__.constructor.call(this,u),this.type=t.Dummy}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(u){return""},c})(i)}).call(dn)});var hn=B((pn,fn)=>{(function(){var t;fn.exports=t=(function(){function e(i){this.nodes=i}return Object.defineProperty(e.prototype,"length",{get:function(){return this.nodes.length||0}}),e.prototype.clone=function(){return this.nodes=null},e.prototype.item=function(i){return this.nodes[i]||null},e})()}).call(pn)});var yn=B((mn,gn)=>{(function(){gn.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(mn)});var dt=B((vn,wn)=>{(function(){var t,e,i,l,n,s,c,u,d,f,g,y,w,h,I,T,E,k,x,v={}.hasOwnProperty;x=vt(),k=x.isObject,E=x.isFunction,T=x.isEmpty,I=x.getValue,u=null,i=null,l=null,n=null,s=null,w=null,h=null,y=null,c=null,e=null,g=null,d=null,t=null,wn.exports=f=(function(){function r(a){this.parent=a,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,u||(u=pe(),i=fe(),l=he(),n=me(),s=be(),w=Ce(),h=Ie(),y=Te(),c=Xe(),e=Y(),g=hn(),d=ue(),t=yn())}return Object.defineProperty(r.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(r.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(r.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(r.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(r.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new g(this.children)),this.childNodeList}}),Object.defineProperty(r.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(r.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(r.prototype,"previousSibling",{get:function(){var a;return a=this.parent.children.indexOf(this),this.parent.children[a-1]||null}}),Object.defineProperty(r.prototype,"nextSibling",{get:function(){var a;return a=this.parent.children.indexOf(this),this.parent.children[a+1]||null}}),Object.defineProperty(r.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(r.prototype,"textContent",{get:function(){var a,b,A,S,m;if(this.nodeType===e.Element||this.nodeType===e.DocumentFragment){for(m="",S=this.children,b=0,A=S.length;b<A;b++)a=S[b],a.textContent&&(m+=a.textContent);return m}else return null},set:function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),r.prototype.setParent=function(a){var b,A,S,m,C;for(this.parent=a,a&&(this.options=a.options,this.stringify=a.stringify),m=this.children,C=[],A=0,S=m.length;A<S;A++)b=m[A],C.push(b.setParent(this));return C},r.prototype.element=function(a,b,A){var S,m,C,D,O,P,R,L,M,F,$;if(P=null,b===null&&A==null&&(M=[{},null],b=M[0],A=M[1]),b==null&&(b={}),b=I(b),k(b)||(F=[b,A],A=F[0],b=F[1]),a!=null&&(a=I(a)),Array.isArray(a))for(C=0,R=a.length;C<R;C++)m=a[C],P=this.element(m);else if(E(a))P=this.element(a.apply());else if(k(a)){for(O in a)if(v.call(a,O))if($=a[O],E($)&&($=$.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)P=this.attribute(O.substr(this.stringify.convertAttKey.length),$);else if(!this.options.separateArrayItems&&Array.isArray($)&&T($))P=this.dummy();else if(k($)&&T($))P=this.element(O);else if(!this.options.keepNullNodes&&$==null)P=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray($))for(D=0,L=$.length;D<L;D++)m=$[D],S={},S[O]=m,P=this.element(S);else k($)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?P=this.element($):(P=this.element(O),P.element($)):P=this.element(O,$)}else!this.options.keepNullNodes&&A===null?P=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&a.indexOf(this.stringify.convertTextKey)===0?P=this.text(A):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&a.indexOf(this.stringify.convertCDataKey)===0?P=this.cdata(A):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&a.indexOf(this.stringify.convertCommentKey)===0?P=this.comment(A):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&a.indexOf(this.stringify.convertRawKey)===0?P=this.raw(A):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&a.indexOf(this.stringify.convertPIKey)===0?P=this.instruction(a.substr(this.stringify.convertPIKey.length),A):P=this.node(a,b,A);if(P==null)throw new Error("Could not create any elements with: "+a+". "+this.debugInfo());return P},r.prototype.insertBefore=function(a,b,A){var S,m,C,D,O;if(a?.type)return C=a,D=b,C.setParent(this),D?(m=children.indexOf(D),O=children.splice(m),children.push(C),Array.prototype.push.apply(children,O)):children.push(C),C;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(a));return m=this.parent.children.indexOf(this),O=this.parent.children.splice(m),S=this.parent.element(a,b,A),Array.prototype.push.apply(this.parent.children,O),S},r.prototype.insertAfter=function(a,b,A){var S,m,C;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(a));return m=this.parent.children.indexOf(this),C=this.parent.children.splice(m+1),S=this.parent.element(a,b,A),Array.prototype.push.apply(this.parent.children,C),S},r.prototype.remove=function(){var a,b;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return a=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[a,a-a+1].concat(b=[])),this.parent},r.prototype.node=function(a,b,A){var S,m;return a!=null&&(a=I(a)),b||(b={}),b=I(b),k(b)||(m=[b,A],A=m[0],b=m[1]),S=new u(this,a,b),A!=null&&S.text(A),this.children.push(S),S},r.prototype.text=function(a){var b;return k(a)&&this.element(a),b=new h(this,a),this.children.push(b),this},r.prototype.cdata=function(a){var b;return b=new i(this,a),this.children.push(b),this},r.prototype.comment=function(a){var b;return b=new l(this,a),this.children.push(b),this},r.prototype.commentBefore=function(a){var b,A,S;return A=this.parent.children.indexOf(this),S=this.parent.children.splice(A),b=this.parent.comment(a),Array.prototype.push.apply(this.parent.children,S),this},r.prototype.commentAfter=function(a){var b,A,S;return A=this.parent.children.indexOf(this),S=this.parent.children.splice(A+1),b=this.parent.comment(a),Array.prototype.push.apply(this.parent.children,S),this},r.prototype.raw=function(a){var b;return b=new w(this,a),this.children.push(b),this},r.prototype.dummy=function(){var a;return a=new c(this),a},r.prototype.instruction=function(a,b){var A,S,m,C,D;if(a!=null&&(a=I(a)),b!=null&&(b=I(b)),Array.isArray(a))for(C=0,D=a.length;C<D;C++)A=a[C],this.instruction(A);else if(k(a))for(A in a)v.call(a,A)&&(S=a[A],this.instruction(A,S));else E(b)&&(b=b.apply()),m=new y(this,a,b),this.children.push(m);return this},r.prototype.instructionBefore=function(a,b){var A,S,m;return S=this.parent.children.indexOf(this),m=this.parent.children.splice(S),A=this.parent.instruction(a,b),Array.prototype.push.apply(this.parent.children,m),this},r.prototype.instructionAfter=function(a,b){var A,S,m;return S=this.parent.children.indexOf(this),m=this.parent.children.splice(S+1),A=this.parent.instruction(a,b),Array.prototype.push.apply(this.parent.children,m),this},r.prototype.declaration=function(a,b,A){var S,m;return S=this.document(),m=new n(S,a,b,A),S.children.length===0?S.children.unshift(m):S.children[0].type===e.Declaration?S.children[0]=m:S.children.unshift(m),S.root()||S},r.prototype.dtd=function(a,b){var A,S,m,C,D,O,P,R,L,M;for(S=this.document(),m=new s(S,a,b),L=S.children,C=D=0,P=L.length;D<P;C=++D)if(A=L[C],A.type===e.DocType)return S.children[C]=m,m;for(M=S.children,C=O=0,R=M.length;O<R;C=++O)if(A=M[C],A.isRoot)return S.children.splice(C,0,m),m;return S.children.push(m),m},r.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},r.prototype.root=function(){var a;for(a=this;a;){if(a.type===e.Document)return a.rootObject;if(a.isRoot)return a;a=a.parent}},r.prototype.document=function(){var a;for(a=this;a;){if(a.type===e.Document)return a;a=a.parent}},r.prototype.end=function(a){return this.document().end(a)},r.prototype.prev=function(){var a;if(a=this.parent.children.indexOf(this),a<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[a-1]},r.prototype.next=function(){var a;if(a=this.parent.children.indexOf(this),a===-1||a===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[a+1]},r.prototype.importDocument=function(a){var b;return b=a.root().clone(),b.parent=this,b.isRoot=!1,this.children.push(b),this},r.prototype.debugInfo=function(a){var b,A;return a=a||this.name,a==null&&!((b=this.parent)!=null&&b.name)?"":a==null?"parent: <"+this.parent.name+">":(A=this.parent)!=null&&A.name?"node: <"+a+">, parent: <"+this.parent.name+">":"node: <"+a+">"},r.prototype.ele=function(a,b,A){return this.element(a,b,A)},r.prototype.nod=function(a,b,A){return this.node(a,b,A)},r.prototype.txt=function(a){return this.text(a)},r.prototype.dat=function(a){return this.cdata(a)},r.prototype.com=function(a){return this.comment(a)},r.prototype.ins=function(a,b){return this.instruction(a,b)},r.prototype.doc=function(){return this.document()},r.prototype.dec=function(a,b,A){return this.declaration(a,b,A)},r.prototype.e=function(a,b,A){return this.element(a,b,A)},r.prototype.n=function(a,b,A){return this.node(a,b,A)},r.prototype.t=function(a){return this.text(a)},r.prototype.d=function(a){return this.cdata(a)},r.prototype.c=function(a){return this.comment(a)},r.prototype.r=function(a){return this.raw(a)},r.prototype.i=function(a,b){return this.instruction(a,b)},r.prototype.u=function(){return this.up()},r.prototype.importXMLBuilder=function(a){return this.importDocument(a)},r.prototype.replaceChild=function(a,b){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.removeChild=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.appendChild=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.hasChildNodes=function(){return this.children.length!==0},r.prototype.cloneNode=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isSupported=function(a,b){return!0},r.prototype.hasAttributes=function(){return this.attribs.length!==0},r.prototype.compareDocumentPosition=function(a){var b,A;return b=this,b===a?0:this.document()!==a.document()?(A=t.Disconnected|t.ImplementationSpecific,Math.random()<.5?A|=t.Preceding:A|=t.Following,A):b.isAncestor(a)?t.Contains|t.Preceding:b.isDescendant(a)?t.Contains|t.Following:b.isPreceding(a)?t.Preceding:t.Following},r.prototype.isSameNode=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.lookupPrefix=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isDefaultNamespace=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.lookupNamespaceURI=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isEqualNode=function(a){var b,A,S;if(a.nodeType!==this.nodeType||a.children.length!==this.children.length)return!1;for(b=A=0,S=this.children.length-1;0<=S?A<=S:A>=S;b=0<=S?++A:--A)if(!this.children[b].isEqualNode(a.children[b]))return!1;return!0},r.prototype.getFeature=function(a,b){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.setUserData=function(a,b,A){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getUserData=function(a){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.contains=function(a){return a?a===this||this.isDescendant(a):!1},r.prototype.isDescendant=function(a){var b,A,S,m,C;for(C=this.children,S=0,m=C.length;S<m;S++)if(b=C[S],a===b||(A=b.isDescendant(a),A))return!0;return!1},r.prototype.isAncestor=function(a){return a.isDescendant(this)},r.prototype.isPreceding=function(a){var b,A;return b=this.treePosition(a),A=this.treePosition(this),b===-1||A===-1?!1:b<A},r.prototype.isFollowing=function(a){var b,A;return b=this.treePosition(a),A=this.treePosition(this),b===-1||A===-1?!1:b>A},r.prototype.treePosition=function(a){var b,A;return A=0,b=!1,this.foreachTreeNode(this.document(),function(S){if(A++,!b&&S===a)return b=!0}),b?A:-1},r.prototype.foreachTreeNode=function(a,b){var A,S,m,C,D;for(a||(a=this.document()),C=a.children,S=0,m=C.length;S<m;S++){if(A=C[S],D=b(A))return D;if(D=this.foreachTreeNode(A,b),D)return D}},r})()}).call(vn)});var Ge=B((bn,Cn)=>{(function(){var t,e=function(l,n){return function(){return l.apply(n,arguments)}},i={}.hasOwnProperty;Cn.exports=t=(function(){function l(n){this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this);var s,c,u;n||(n={}),this.options=n,this.options.version||(this.options.version="1.0"),c=n.stringify||{};for(s in c)i.call(c,s)&&(u=c[s],this[s]=u)}return l.prototype.name=function(n){return this.options.noValidation?n:this.assertLegalName(""+n||"")},l.prototype.text=function(n){return this.options.noValidation?n:this.assertLegalChar(this.textEscape(""+n||""))},l.prototype.cdata=function(n){return this.options.noValidation?n:(n=""+n||"",n=n.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(n))},l.prototype.comment=function(n){if(this.options.noValidation)return n;if(n=""+n||"",n.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+n);return this.assertLegalChar(n)},l.prototype.raw=function(n){return this.options.noValidation?n:""+n||""},l.prototype.attValue=function(n){return this.options.noValidation?n:this.assertLegalChar(this.attEscape(n=""+n||""))},l.prototype.insTarget=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.insValue=function(n){if(this.options.noValidation)return n;if(n=""+n||"",n.match(/\?>/))throw new Error("Invalid processing instruction value: "+n);return this.assertLegalChar(n)},l.prototype.xmlVersion=function(n){if(this.options.noValidation)return n;if(n=""+n||"",!n.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+n);return n},l.prototype.xmlEncoding=function(n){if(this.options.noValidation)return n;if(n=""+n||"",!n.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+n);return this.assertLegalChar(n)},l.prototype.xmlStandalone=function(n){return this.options.noValidation?n:n?"yes":"no"},l.prototype.dtdPubID=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdSysID=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdElementValue=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdAttType=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdAttDefault=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdEntityValue=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.dtdNData=function(n){return this.options.noValidation?n:this.assertLegalChar(""+n||"")},l.prototype.convertAttKey="@",l.prototype.convertPIKey="?",l.prototype.convertTextKey="#text",l.prototype.convertCDataKey="#cdata",l.prototype.convertCommentKey="#comment",l.prototype.convertRawKey="#raw",l.prototype.assertLegalChar=function(n){var s,c;if(this.options.noValidation)return n;if(s="",this.options.version==="1.0"){if(s=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=n.match(s))throw new Error("Invalid character in string: "+n+" at index "+c.index)}else if(this.options.version==="1.1"&&(s=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=n.match(s)))throw new Error("Invalid character in string: "+n+" at index "+c.index);return n},l.prototype.assertLegalName=function(n){var s;if(this.options.noValidation)return n;if(this.assertLegalChar(n),s=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!n.match(s))throw new Error("Invalid character in name");return n},l.prototype.textEscape=function(n){var s;return this.options.noValidation?n:(s=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,n.replace(s,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},l.prototype.attEscape=function(n){var s;return this.options.noValidation?n:(s=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,n.replace(s,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},l})()}).call(bn)});var Wt=B((In,Tn)=>{(function(){Tn.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(In)});var We=B((xn,_n)=>{(function(){var t,e,i,l,n,s,c,u,d,f,g,y,w,h,I,T,E,k={}.hasOwnProperty;E=vt().assign,t=Y(),d=me(),f=be(),i=fe(),l=he(),y=pe(),h=Ce(),I=Ie(),w=Te(),g=Xe(),n=ge(),s=ve(),c=ye(),u=we(),e=Wt(),_n.exports=T=(function(){function x(v){var r,a,b;v||(v={}),this.options=v,a=v.writer||{};for(r in a)k.call(a,r)&&(b=a[r],this["_"+r]=this[r],this[r]=b)}return x.prototype.filterOptions=function(v){var r,a,b,A,S,m,C,D;return v||(v={}),v=E({},this.options,v),r={writer:this},r.pretty=v.pretty||!1,r.allowEmpty=v.allowEmpty||!1,r.indent=(a=v.indent)!=null?a:"  ",r.newline=(b=v.newline)!=null?b:`
`,r.offset=(A=v.offset)!=null?A:0,r.dontPrettyTextNodes=(S=(m=v.dontPrettyTextNodes)!=null?m:v.dontprettytextnodes)!=null?S:0,r.spaceBeforeSlash=(C=(D=v.spaceBeforeSlash)!=null?D:v.spacebeforeslash)!=null?C:"",r.spaceBeforeSlash===!0&&(r.spaceBeforeSlash=" "),r.suppressPrettyCount=0,r.user={},r.state=e.None,r},x.prototype.indent=function(v,r,a){var b;return!r.pretty||r.suppressPrettyCount?"":r.pretty&&(b=(a||0)+r.offset+1,b>0)?new Array(b).join(r.indent):""},x.prototype.endline=function(v,r,a){return!r.pretty||r.suppressPrettyCount?"":r.newline},x.prototype.attribute=function(v,r,a){var b;return this.openAttribute(v,r,a),b=" "+v.name+'="'+v.value+'"',this.closeAttribute(v,r,a),b},x.prototype.cdata=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<![CDATA[",r.state=e.InsideTag,b+=v.value,r.state=e.CloseTag,b+="]]>"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.comment=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<!-- ",r.state=e.InsideTag,b+=v.value,r.state=e.CloseTag,b+=" -->"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.declaration=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<?xml",r.state=e.InsideTag,b+=' version="'+v.version+'"',v.encoding!=null&&(b+=' encoding="'+v.encoding+'"'),v.standalone!=null&&(b+=' standalone="'+v.standalone+'"'),r.state=e.CloseTag,b+=r.spaceBeforeSlash+"?>",b+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.docType=function(v,r,a){var b,A,S,m,C;if(a||(a=0),this.openNode(v,r,a),r.state=e.OpenTag,m=this.indent(v,r,a),m+="<!DOCTYPE "+v.root().name,v.pubID&&v.sysID?m+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(m+=' SYSTEM "'+v.sysID+'"'),v.children.length>0){for(m+=" [",m+=this.endline(v,r,a),r.state=e.InsideTag,C=v.children,A=0,S=C.length;A<S;A++)b=C[A],m+=this.writeChildNode(b,r,a+1);r.state=e.CloseTag,m+="]"}return r.state=e.CloseTag,m+=r.spaceBeforeSlash+">",m+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),m},x.prototype.element=function(v,r,a){var b,A,S,m,C,D,O,P,R,L,M,F,$,J;a||(a=0),L=!1,M="",this.openNode(v,r,a),r.state=e.OpenTag,M+=this.indent(v,r,a)+"<"+v.name,F=v.attribs;for(R in F)k.call(F,R)&&(b=F[R],M+=this.attribute(b,r,a));if(S=v.children.length,m=S===0?null:v.children[0],S===0||v.children.every(function(lt){return(lt.type===t.Text||lt.type===t.Raw)&&lt.value===""}))r.allowEmpty?(M+=">",r.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,r,a)):(r.state=e.CloseTag,M+=r.spaceBeforeSlash+"/>"+this.endline(v,r,a));else if(r.pretty&&S===1&&(m.type===t.Text||m.type===t.Raw)&&m.value!=null)M+=">",r.state=e.InsideTag,r.suppressPrettyCount++,L=!0,M+=this.writeChildNode(m,r,a+1),r.suppressPrettyCount--,L=!1,r.state=e.CloseTag,M+="</"+v.name+">"+this.endline(v,r,a);else{if(r.dontPrettyTextNodes){for($=v.children,C=0,O=$.length;C<O;C++)if(A=$[C],(A.type===t.Text||A.type===t.Raw)&&A.value!=null){r.suppressPrettyCount++,L=!0;break}}for(M+=">"+this.endline(v,r,a),r.state=e.InsideTag,J=v.children,D=0,P=J.length;D<P;D++)A=J[D],M+=this.writeChildNode(A,r,a+1);r.state=e.CloseTag,M+=this.indent(v,r,a)+"</"+v.name+">",L&&r.suppressPrettyCount--,M+=this.endline(v,r,a),r.state=e.None}return this.closeNode(v,r,a),M},x.prototype.writeChildNode=function(v,r,a){switch(v.type){case t.CData:return this.cdata(v,r,a);case t.Comment:return this.comment(v,r,a);case t.Element:return this.element(v,r,a);case t.Raw:return this.raw(v,r,a);case t.Text:return this.text(v,r,a);case t.ProcessingInstruction:return this.processingInstruction(v,r,a);case t.Dummy:return"";case t.Declaration:return this.declaration(v,r,a);case t.DocType:return this.docType(v,r,a);case t.AttributeDeclaration:return this.dtdAttList(v,r,a);case t.ElementDeclaration:return this.dtdElement(v,r,a);case t.EntityDeclaration:return this.dtdEntity(v,r,a);case t.NotationDeclaration:return this.dtdNotation(v,r,a);default:throw new Error("Unknown XML node type: "+v.constructor.name)}},x.prototype.processingInstruction=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<?",r.state=e.InsideTag,b+=v.target,v.value&&(b+=" "+v.value),r.state=e.CloseTag,b+=r.spaceBeforeSlash+"?>",b+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.raw=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a),r.state=e.InsideTag,b+=v.value,r.state=e.CloseTag,b+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.text=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a),r.state=e.InsideTag,b+=v.value,r.state=e.CloseTag,b+=this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.dtdAttList=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<!ATTLIST",r.state=e.InsideTag,b+=" "+v.elementName+" "+v.attributeName+" "+v.attributeType,v.defaultValueType!=="#DEFAULT"&&(b+=" "+v.defaultValueType),v.defaultValue&&(b+=' "'+v.defaultValue+'"'),r.state=e.CloseTag,b+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.dtdElement=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<!ELEMENT",r.state=e.InsideTag,b+=" "+v.name+" "+v.value,r.state=e.CloseTag,b+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.dtdEntity=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<!ENTITY",r.state=e.InsideTag,v.pe&&(b+=" %"),b+=" "+v.name,v.value?b+=' "'+v.value+'"':(v.pubID&&v.sysID?b+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.sysID&&(b+=' SYSTEM "'+v.sysID+'"'),v.nData&&(b+=" NDATA "+v.nData)),r.state=e.CloseTag,b+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.dtdNotation=function(v,r,a){var b;return this.openNode(v,r,a),r.state=e.OpenTag,b=this.indent(v,r,a)+"<!NOTATION",r.state=e.InsideTag,b+=" "+v.name,v.pubID&&v.sysID?b+=' PUBLIC "'+v.pubID+'" "'+v.sysID+'"':v.pubID?b+=' PUBLIC "'+v.pubID+'"':v.sysID&&(b+=' SYSTEM "'+v.sysID+'"'),r.state=e.CloseTag,b+=r.spaceBeforeSlash+">"+this.endline(v,r,a),r.state=e.None,this.closeNode(v,r,a),b},x.prototype.openNode=function(v,r,a){},x.prototype.closeNode=function(v,r,a){},x.prototype.openAttribute=function(v,r,a){},x.prototype.closeAttribute=function(v,r,a){},x})()}).call(xn)});var xe=B((Sn,En)=>{(function(){var t,e,i=function(n,s){for(var c in s)l.call(s,c)&&(n[c]=s[c]);function u(){this.constructor=n}return u.prototype=s.prototype,n.prototype=new u,n.__super__=s.prototype,n},l={}.hasOwnProperty;e=We(),En.exports=t=(function(n){i(s,n);function s(c){s.__super__.constructor.call(this,c)}return s.prototype.document=function(c,u){var d,f,g,y,w;for(u=this.filterOptions(u),y="",w=c.children,f=0,g=w.length;f<g;f++)d=w[f],y+=this.writeChildNode(d,u,0);return u.pretty&&y.slice(-u.newline.length)===u.newline&&(y=y.slice(0,-u.newline.length)),y},s})(e)}).call(Sn)});var Ke=B((An,Dn)=>{(function(){var t,e,i,l,n,s,c,u,d=function(g,y){for(var w in y)f.call(y,w)&&(g[w]=y[w]);function h(){this.constructor=g}return h.prototype=y.prototype,g.prototype=new h,g.__super__=y.prototype,g},f={}.hasOwnProperty;u=vt().isPlainObject,i=je(),e=ki(),n=dt(),t=Y(),c=Ge(),s=xe(),Dn.exports=l=(function(g){d(y,g);function y(w){y.__super__.constructor.call(this,null),this.name="#document",this.type=t.Document,this.documentURI=null,this.domConfig=new e,w||(w={}),w.writer||(w.writer=new s),this.options=w,this.stringify=new c(w)}return Object.defineProperty(y.prototype,"implementation",{value:new i}),Object.defineProperty(y.prototype,"doctype",{get:function(){var w,h,I,T;for(T=this.children,h=0,I=T.length;h<I;h++)if(w=T[h],w.type===t.DocType)return w;return null}}),Object.defineProperty(y.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(y.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(y.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(y.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].encoding:null}}),Object.defineProperty(y.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(y.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===t.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(y.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(y.prototype,"origin",{get:function(){return null}}),Object.defineProperty(y.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(y.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(y.prototype,"contentType",{get:function(){return null}}),y.prototype.end=function(w){var h;return h={},w?u(w)&&(h=w,w=this.options.writer):w=this.options.writer,w.document(this,w.filterOptions(h))},y.prototype.toString=function(w){return this.options.writer.document(this,this.options.writer.filterOptions(w))},y.prototype.createElement=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTextNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createComment=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createCDATASection=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createProcessingInstruction=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttribute=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEntityReference=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.importNode=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createElementNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createAttributeNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByTagNameNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementById=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.adoptNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.renameNode=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.getElementsByClassName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createEvent=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createNodeIterator=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y.prototype.createTreeWalker=function(w,h,I){throw new Error("This DOM method is not implemented."+this.debugInfo())},y})(n)}).call(An)});var On=B((kn,Nn)=>{(function(){var t,e,i,l,n,s,c,u,d,f,g,y,w,h,I,T,E,k,x,v,r,a,b,A,S={}.hasOwnProperty;A=vt(),a=A.isObject,r=A.isFunction,b=A.isPlainObject,v=A.getValue,t=Y(),y=Ke(),h=pe(),l=fe(),n=he(),T=Ce(),x=Ie(),I=Te(),f=me(),g=be(),s=ge(),u=ye(),c=ve(),d=we(),i=He(),k=Ge(),E=xe(),e=Wt(),Nn.exports=w=(function(){function m(C,D,O){var P;this.name="?xml",this.type=t.Document,C||(C={}),P={},C.writer?b(C.writer)&&(P=C.writer,C.writer=new E):C.writer=new E,this.options=C,this.writer=C.writer,this.writerOptions=this.writer.filterOptions(P),this.stringify=new k(C),this.onDataCallback=D||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return m.prototype.createChildNode=function(C){var D,O,P,R,L,M,F,$;switch(C.type){case t.CData:this.cdata(C.value);break;case t.Comment:this.comment(C.value);break;case t.Element:P={},F=C.attribs;for(O in F)S.call(F,O)&&(D=F[O],P[O]=D.value);this.node(C.name,P);break;case t.Dummy:this.dummy();break;case t.Raw:this.raw(C.value);break;case t.Text:this.text(C.value);break;case t.ProcessingInstruction:this.instruction(C.target,C.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+C.constructor.name)}for($=C.children,L=0,M=$.length;L<M;L++)R=$[L],this.createChildNode(R),R.type===t.Element&&this.up();return this},m.prototype.dummy=function(){return this},m.prototype.node=function(C,D,O){var P;if(C==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(C));return this.openCurrent(),C=v(C),D==null&&(D={}),D=v(D),a(D)||(P=[D,O],O=P[0],D=P[1]),this.currentNode=new h(this,C,D),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},m.prototype.element=function(C,D,O){var P,R,L,M,F,$;if(this.currentNode&&this.currentNode.type===t.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(C)||a(C)||r(C))for(M=this.options.noValidation,this.options.noValidation=!0,$=new y(this.options).element("TEMP_ROOT"),$.element(C),this.options.noValidation=M,F=$.children,R=0,L=F.length;R<L;R++)P=F[R],this.createChildNode(P),P.type===t.Element&&this.up();else this.node(C,D,O);return this},m.prototype.attribute=function(C,D){var O,P;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(C));if(C!=null&&(C=v(C)),a(C))for(O in C)S.call(C,O)&&(P=C[O],this.attribute(O,P));else r(D)&&(D=D.apply()),this.options.keepNullAttributes&&D==null?this.currentNode.attribs[C]=new i(this,C,""):D!=null&&(this.currentNode.attribs[C]=new i(this,C,D));return this},m.prototype.text=function(C){var D;return this.openCurrent(),D=new x(this,C),this.onData(this.writer.text(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.cdata=function(C){var D;return this.openCurrent(),D=new l(this,C),this.onData(this.writer.cdata(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.comment=function(C){var D;return this.openCurrent(),D=new n(this,C),this.onData(this.writer.comment(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.raw=function(C){var D;return this.openCurrent(),D=new T(this,C),this.onData(this.writer.raw(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.instruction=function(C,D){var O,P,R,L,M;if(this.openCurrent(),C!=null&&(C=v(C)),D!=null&&(D=v(D)),Array.isArray(C))for(O=0,L=C.length;O<L;O++)P=C[O],this.instruction(P);else if(a(C))for(P in C)S.call(C,P)&&(R=C[P],this.instruction(P,R));else r(D)&&(D=D.apply()),M=new I(this,C,D),this.onData(this.writer.processingInstruction(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},m.prototype.declaration=function(C,D,O){var P;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return P=new f(this,C,D,O),this.onData(this.writer.declaration(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.doctype=function(C,D,O){if(this.openCurrent(),C==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new g(this,D,O),this.currentNode.rootNodeName=C,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},m.prototype.dtdElement=function(C,D){var O;return this.openCurrent(),O=new c(this,C,D),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.attList=function(C,D,O,P,R){var L;return this.openCurrent(),L=new s(this,C,D,O,P,R),this.onData(this.writer.dtdAttList(L,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.entity=function(C,D){var O;return this.openCurrent(),O=new u(this,!1,C,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.pEntity=function(C,D){var O;return this.openCurrent(),O=new u(this,!0,C,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.notation=function(C,D){var O;return this.openCurrent(),O=new d(this,C,D),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},m.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},m.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},m.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},m.prototype.openNode=function(C){var D,O,P,R;if(!C.isOpen){if(!this.root&&this.currentLevel===0&&C.type===t.Element&&(this.root=C),O="",C.type===t.Element){this.writerOptions.state=e.OpenTag,O=this.writer.indent(C,this.writerOptions,this.currentLevel)+"<"+C.name,R=C.attribs;for(P in R)S.call(R,P)&&(D=R[P],O+=this.writer.attribute(D,this.writerOptions,this.currentLevel));O+=(C.children?">":"/>")+this.writer.endline(C,this.writerOptions,this.currentLevel),this.writerOptions.state=e.InsideTag}else this.writerOptions.state=e.OpenTag,O=this.writer.indent(C,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+C.rootNodeName,C.pubID&&C.sysID?O+=' PUBLIC "'+C.pubID+'" "'+C.sysID+'"':C.sysID&&(O+=' SYSTEM "'+C.sysID+'"'),C.children?(O+=" [",this.writerOptions.state=e.InsideTag):(this.writerOptions.state=e.CloseTag,O+=">"),O+=this.writer.endline(C,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),C.isOpen=!0}},m.prototype.closeNode=function(C){var D;if(!C.isClosed)return D="",this.writerOptions.state=e.CloseTag,C.type===t.Element?D=this.writer.indent(C,this.writerOptions,this.currentLevel)+"</"+C.name+">"+this.writer.endline(C,this.writerOptions,this.currentLevel):D=this.writer.indent(C,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(C,this.writerOptions,this.currentLevel),this.writerOptions.state=e.None,this.onData(D,this.currentLevel),C.isClosed=!0},m.prototype.onData=function(C,D){return this.documentStarted=!0,this.onDataCallback(C,D+1)},m.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},m.prototype.debugInfo=function(C){return C==null?"":"node: <"+C+">"},m.prototype.ele=function(){return this.element.apply(this,arguments)},m.prototype.nod=function(C,D,O){return this.node(C,D,O)},m.prototype.txt=function(C){return this.text(C)},m.prototype.dat=function(C){return this.cdata(C)},m.prototype.com=function(C){return this.comment(C)},m.prototype.ins=function(C,D){return this.instruction(C,D)},m.prototype.dec=function(C,D,O){return this.declaration(C,D,O)},m.prototype.dtd=function(C,D,O){return this.doctype(C,D,O)},m.prototype.e=function(C,D,O){return this.element(C,D,O)},m.prototype.n=function(C,D,O){return this.node(C,D,O)},m.prototype.t=function(C){return this.text(C)},m.prototype.d=function(C){return this.cdata(C)},m.prototype.c=function(C){return this.comment(C)},m.prototype.r=function(C){return this.raw(C)},m.prototype.i=function(C,D){return this.instruction(C,D)},m.prototype.att=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},m.prototype.a=function(){return this.currentNode&&this.currentNode.type===t.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},m.prototype.ent=function(C,D){return this.entity(C,D)},m.prototype.pent=function(C,D){return this.pEntity(C,D)},m.prototype.not=function(C,D){return this.notation(C,D)},m})()}).call(kn)});var Ln=B((Pn,Mn)=>{(function(){var t,e,i,l,n=function(c,u){for(var d in u)s.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},s={}.hasOwnProperty;t=Y(),l=We(),e=Wt(),Mn.exports=i=(function(c){n(u,c);function u(d,f){this.stream=d,u.__super__.constructor.call(this,f)}return u.prototype.endline=function(d,f,g){return d.isLastRootNode&&f.state===e.CloseTag?"":u.__super__.endline.call(this,d,f,g)},u.prototype.document=function(d,f){var g,y,w,h,I,T,E,k,x;for(E=d.children,y=w=0,I=E.length;w<I;y=++w)g=E[y],g.isLastRootNode=y===d.children.length-1;for(f=this.filterOptions(f),k=d.children,x=[],h=0,T=k.length;h<T;h++)g=k[h],x.push(this.writeChildNode(g,f,0));return x},u.prototype.attribute=function(d,f,g){return this.stream.write(u.__super__.attribute.call(this,d,f,g))},u.prototype.cdata=function(d,f,g){return this.stream.write(u.__super__.cdata.call(this,d,f,g))},u.prototype.comment=function(d,f,g){return this.stream.write(u.__super__.comment.call(this,d,f,g))},u.prototype.declaration=function(d,f,g){return this.stream.write(u.__super__.declaration.call(this,d,f,g))},u.prototype.docType=function(d,f,g){var y,w,h,I;if(g||(g=0),this.openNode(d,f,g),f.state=e.OpenTag,this.stream.write(this.indent(d,f,g)),this.stream.write("<!DOCTYPE "+d.root().name),d.pubID&&d.sysID?this.stream.write(' PUBLIC "'+d.pubID+'" "'+d.sysID+'"'):d.sysID&&this.stream.write(' SYSTEM "'+d.sysID+'"'),d.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(d,f,g)),f.state=e.InsideTag,I=d.children,w=0,h=I.length;w<h;w++)y=I[w],this.writeChildNode(y,f,g+1);f.state=e.CloseTag,this.stream.write("]")}return f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+">"),this.stream.write(this.endline(d,f,g)),f.state=e.None,this.closeNode(d,f,g)},u.prototype.element=function(d,f,g){var y,w,h,I,T,E,k,x,v,r;g||(g=0),this.openNode(d,f,g),f.state=e.OpenTag,this.stream.write(this.indent(d,f,g)+"<"+d.name),v=d.attribs;for(k in v)s.call(v,k)&&(y=v[k],this.attribute(y,f,g));if(h=d.children.length,I=h===0?null:d.children[0],h===0||d.children.every(function(a){return(a.type===t.Text||a.type===t.Raw)&&a.value===""}))f.allowEmpty?(this.stream.write(">"),f.state=e.CloseTag,this.stream.write("</"+d.name+">")):(f.state=e.CloseTag,this.stream.write(f.spaceBeforeSlash+"/>"));else if(f.pretty&&h===1&&(I.type===t.Text||I.type===t.Raw)&&I.value!=null)this.stream.write(">"),f.state=e.InsideTag,f.suppressPrettyCount++,x=!0,this.writeChildNode(I,f,g+1),f.suppressPrettyCount--,x=!1,f.state=e.CloseTag,this.stream.write("</"+d.name+">");else{for(this.stream.write(">"+this.endline(d,f,g)),f.state=e.InsideTag,r=d.children,T=0,E=r.length;T<E;T++)w=r[T],this.writeChildNode(w,f,g+1);f.state=e.CloseTag,this.stream.write(this.indent(d,f,g)+"</"+d.name+">")}return this.stream.write(this.endline(d,f,g)),f.state=e.None,this.closeNode(d,f,g)},u.prototype.processingInstruction=function(d,f,g){return this.stream.write(u.__super__.processingInstruction.call(this,d,f,g))},u.prototype.raw=function(d,f,g){return this.stream.write(u.__super__.raw.call(this,d,f,g))},u.prototype.text=function(d,f,g){return this.stream.write(u.__super__.text.call(this,d,f,g))},u.prototype.dtdAttList=function(d,f,g){return this.stream.write(u.__super__.dtdAttList.call(this,d,f,g))},u.prototype.dtdElement=function(d,f,g){return this.stream.write(u.__super__.dtdElement.call(this,d,f,g))},u.prototype.dtdEntity=function(d,f,g){return this.stream.write(u.__super__.dtdEntity.call(this,d,f,g))},u.prototype.dtdNotation=function(d,f,g){return this.stream.write(u.__super__.dtdNotation.call(this,d,f,g))},u})(l)}).call(Pn)});var Fn=B((Rn,xt)=>{(function(){var t,e,i,l,n,s,c,u,d,f;f=vt(),u=f.assign,d=f.isFunction,i=je(),l=Ke(),n=On(),c=xe(),s=Ln(),t=Y(),e=Wt(),xt.exports.create=function(g,y,w,h){var I,T;if(g==null)throw new Error("Root element needs a name.");return h=u({},y,w,h),I=new l(h),T=I.element(g),h.headless||(I.declaration(h),(h.pubID!=null||h.sysID!=null)&&I.dtd(h)),T},xt.exports.begin=function(g,y,w){var h;return d(g)&&(h=[g,y],y=h[0],w=h[1],g={}),y?new n(g,y,w):new l(g)},xt.exports.stringWriter=function(g){return new c(g)},xt.exports.streamWriter=function(g,y){return new s(g,y)},xt.exports.implementation=new i,xt.exports.nodeType=t,xt.exports.writerState=e}).call(Rn)});var Bn=B(Ye=>{(function(){"use strict";var t,e,i,l,n,s={}.hasOwnProperty;t=Fn(),e=de().defaults,l=function(c){return typeof c=="string"&&(c.indexOf("&")>=0||c.indexOf(">")>=0||c.indexOf("<")>=0)},n=function(c){return"<![CDATA["+i(c)+"]]>"},i=function(c){return c.replace("]]>","]]]]><![CDATA[>")},Ye.Builder=(function(){function c(u){var d,f,g;this.options={},f=e["0.2"];for(d in f)s.call(f,d)&&(g=f[d],this.options[d]=g);for(d in u)s.call(u,d)&&(g=u[d],this.options[d]=g)}return c.prototype.buildObject=function(u){var d,f,g,y,w;return d=this.options.attrkey,f=this.options.charkey,Object.keys(u).length===1&&this.options.rootName===e["0.2"].rootName?(w=Object.keys(u)[0],u=u[w]):w=this.options.rootName,g=(function(h){return function(I,T){var E,k,x,v,r,a;if(typeof T!="object")h.options.cdata&&l(T)?I.raw(n(T)):I.txt(T);else if(Array.isArray(T)){for(v in T)if(s.call(T,v)){k=T[v];for(r in k)x=k[r],I=g(I.ele(r),x).up()}}else for(r in T)if(s.call(T,r))if(k=T[r],r===d){if(typeof k=="object")for(E in k)a=k[E],I=I.att(E,a)}else if(r===f)h.options.cdata&&l(k)?I=I.raw(n(k)):I=I.txt(k);else if(Array.isArray(k))for(v in k)s.call(k,v)&&(x=k[v],typeof x=="string"?h.options.cdata&&l(x)?I=I.ele(r).raw(n(x)).up():I=I.ele(r,x).up():I=g(I.ele(r),x).up());else typeof k=="object"?I=g(I.ele(r),k).up():typeof k=="string"&&h.options.cdata&&l(k)?I=I.ele(r).raw(n(k)).up():(k==null&&(k=""),I=I.ele(r,k.toString()).up());return I}})(this),y=t.create(w,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),g(y,u).end(this.options.renderOpts)},c})()}).call(Ye)});var $n=B(_e=>{(function(t){t.parser=function(p,o){return new i(p,o)},t.SAXParser=i,t.SAXStream=g,t.createStream=d,t.MAX_BUFFER_LENGTH=64*1024;var e=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function i(p,o){if(!(this instanceof i))return new i(p,o);var N=this;n(N),N.q=N.c="",N.bufferCheckPosition=t.MAX_BUFFER_LENGTH,N.encoding=null,N.opt=o||{},N.opt.lowercase=N.opt.lowercase||N.opt.lowercasetags,N.looseCase=N.opt.lowercase?"toLowerCase":"toUpperCase",N.opt.maxEntityCount=N.opt.maxEntityCount||512,N.opt.maxEntityDepth=N.opt.maxEntityDepth||4,N.entityCount=N.entityDepth=0,N.tags=[],N.closed=N.closedRoot=N.sawRoot=!1,N.tag=N.error=null,N.strict=!!p,N.noscript=!!(p||N.opt.noscript),N.state=m.BEGIN,N.strictEntities=N.opt.strictEntities,N.ENTITIES=N.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),N.attribList=[],N.opt.xmlns&&(N.ns=Object.create(T)),N.opt.unquotedAttributeValues===void 0&&(N.opt.unquotedAttributeValues=!p),N.trackPosition=N.opt.position!==!1,N.trackPosition&&(N.position=N.line=N.column=0),D(N,"onready")}Object.create||(Object.create=function(p){function o(){}o.prototype=p;var N=new o;return N}),Object.keys||(Object.keys=function(p){var o=[];for(var N in p)p.hasOwnProperty(N)&&o.push(N);return o});function l(p){for(var o=Math.max(t.MAX_BUFFER_LENGTH,10),N=0,_=0,V=e.length;_<V;_++){var G=p[e[_]].length;if(G>o)switch(e[_]){case"textNode":F(p);break;case"cdata":M(p,"oncdata",p.cdata),p.cdata="";break;case"script":M(p,"onscript",p.script),p.script="";break;default:J(p,"Max buffer length exceeded: "+e[_])}N=Math.max(N,G)}var K=t.MAX_BUFFER_LENGTH-N;p.bufferCheckPosition=K+p.position}function n(p){for(var o=0,N=e.length;o<N;o++)p[e[o]]=""}function s(p){F(p),p.cdata!==""&&(M(p,"oncdata",p.cdata),p.cdata=""),p.script!==""&&(M(p,"onscript",p.script),p.script="")}i.prototype={end:function(){lt(this)},write:re,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){s(this)}};var c;try{c=require("stream").Stream}catch{c=function(){}}c||(c=function(){});var u=t.EVENTS.filter(function(p){return p!=="error"&&p!=="end"});function d(p,o){return new g(p,o)}function f(p,o){if(p.length>=2){if(p[0]===255&&p[1]===254)return"utf-16le";if(p[0]===254&&p[1]===255)return"utf-16be"}return p.length>=3&&p[0]===239&&p[1]===187&&p[2]===191?"utf8":p.length>=4?p[0]===60&&p[1]===0&&p[2]===63&&p[3]===0?"utf-16le":p[0]===0&&p[1]===60&&p[2]===0&&p[3]===63?"utf-16be":"utf8":o?"utf8":null}function g(p,o){if(!(this instanceof g))return new g(p,o);c.apply(this),this._parser=new i(p,o),this.writable=!0,this.readable=!0;var N=this;this._parser.onend=function(){N.emit("end")},this._parser.onerror=function(_){N.emit("error",_),N._parser.error=null},this._decoder=null,this._decoderBuffer=null,u.forEach(function(_){Object.defineProperty(N,"on"+_,{get:function(){return N._parser["on"+_]},set:function(V){if(!V)return N.removeAllListeners(_),N._parser["on"+_]=V,V;N.on(_,V)},enumerable:!0,configurable:!1})})}g.prototype=Object.create(c.prototype,{constructor:{value:g}}),g.prototype._decodeBuffer=function(p,o){if(this._decoderBuffer&&(p=Buffer.concat([this._decoderBuffer,p]),this._decoderBuffer=null),!this._decoder){var N=f(p,o);if(!N)return this._decoderBuffer=p,"";this._parser.encoding=N,this._decoder=new TextDecoder(N)}return this._decoder.decode(p,{stream:!o})},g.prototype.write=function(p){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(p))p=this._decodeBuffer(p,!1);else if(this._decoderBuffer){var o=this._decodeBuffer(Buffer.alloc(0),!0);o&&(this._parser.write(o),this.emit("data",o))}return this._parser.write(p.toString()),this.emit("data",p),!0},g.prototype.end=function(p){if(p&&p.length&&this.write(p),this._decoderBuffer){var o=this._decodeBuffer(Buffer.alloc(0),!0);o&&(this._parser.write(o),this.emit("data",o))}else if(this._decoder){var N=this._decoder.decode();N&&(this._parser.write(N),this.emit("data",N))}return this._parser.end(),!0},g.prototype.on=function(p,o){var N=this;return!N._parser["on"+p]&&u.indexOf(p)!==-1&&(N._parser["on"+p]=function(){var _=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);_.splice(0,0,p),N.emit.apply(N,_)}),c.prototype.on.call(N,p,o)};var y="[CDATA[",w="DOCTYPE",h="http://www.w3.org/XML/1998/namespace",I="http://www.w3.org/2000/xmlns/",T={xml:h,xmlns:I},E=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,k=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,x=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function r(p){return p===" "||p===`
`||p==="\r"||p==="	"}function a(p){return p==='"'||p==="'"}function b(p){return p===">"||r(p)}function A(p,o){return p.test(o)}function S(p,o){return!A(p,o)}var m=0;t.STATE={BEGIN:m++,BEGIN_WHITESPACE:m++,TEXT:m++,TEXT_ENTITY:m++,OPEN_WAKA:m++,SGML_DECL:m++,SGML_DECL_QUOTED:m++,DOCTYPE:m++,DOCTYPE_QUOTED:m++,DOCTYPE_DTD:m++,DOCTYPE_DTD_QUOTED:m++,COMMENT_STARTING:m++,COMMENT:m++,COMMENT_ENDING:m++,COMMENT_ENDED:m++,CDATA:m++,CDATA_ENDING:m++,CDATA_ENDING_2:m++,PROC_INST:m++,PROC_INST_BODY:m++,PROC_INST_ENDING:m++,OPEN_TAG:m++,OPEN_TAG_SLASH:m++,ATTRIB:m++,ATTRIB_NAME:m++,ATTRIB_NAME_SAW_WHITE:m++,ATTRIB_VALUE:m++,ATTRIB_VALUE_QUOTED:m++,ATTRIB_VALUE_CLOSED:m++,ATTRIB_VALUE_UNQUOTED:m++,ATTRIB_VALUE_ENTITY_Q:m++,ATTRIB_VALUE_ENTITY_U:m++,CLOSE_TAG:m++,CLOSE_TAG_SAW_WHITE:m++,SCRIPT:m++,SCRIPT_ENDING:m++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(p){var o=t.ENTITIES[p],N=typeof o=="number"?String.fromCharCode(o):o;t.ENTITIES[p]=N});for(var C in t.STATE)t.STATE[t.STATE[C]]=C;m=t.STATE;function D(p,o,N){p[o]&&p[o](N)}function O(p){var o=p&&p.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return o?o[2]:null}function P(p){return p?p.toLowerCase().replace(/[^a-z0-9]/g,""):null}function R(p,o){let N=P(p),_=P(o);return!N||!_?!0:_==="utf16"?N==="utf16le"||N==="utf16be":N===_}function L(p,o){if(!(!p.strict||!p.encoding||!o||o.name!=="xml")){var N=O(o.body);N&&!R(p.encoding,N)&&H(p,"XML declaration encoding "+N+" does not match detected stream encoding "+p.encoding.toUpperCase())}}function M(p,o,N){p.textNode&&F(p),D(p,o,N)}function F(p){p.textNode=$(p.opt,p.textNode),p.textNode&&D(p,"ontext",p.textNode),p.textNode=""}function $(p,o){return p.trim&&(o=o.trim()),p.normalize&&(o=o.replace(/\s+/g," ")),o}function J(p,o){return F(p),p.trackPosition&&(o+=`
Line: `+p.line+`
Column: `+p.column+`
Char: `+p.c),o=new Error(o),p.error=o,D(p,"onerror",o),p}function lt(p){return p.sawRoot&&!p.closedRoot&&H(p,"Unclosed root tag"),p.state!==m.BEGIN&&p.state!==m.BEGIN_WHITESPACE&&p.state!==m.TEXT&&J(p,"Unexpected end"),F(p),p.c="",p.closed=!0,D(p,"onend"),i.call(p,p.strict,p.opt),p}function H(p,o){if(typeof p!="object"||!(p instanceof i))throw new Error("bad call to strictFail");p.strict&&J(p,o)}function Ue(p){p.strict||(p.tagName=p.tagName[p.looseCase]());var o=p.tags[p.tags.length-1]||p,N=p.tag={name:p.tagName,attributes:{}};p.opt.xmlns&&(N.ns=o.ns),p.attribList.length=0,M(p,"onopentagstart",N)}function Vt(p,o){var N=p.indexOf(":"),_=N<0?["",p]:p.split(":"),V=_[0],G=_[1];return o&&p==="xmlns"&&(V="xmlns",G=""),{prefix:V,local:G}}function jt(p){if(p.strict||(p.attribName=p.attribName[p.looseCase]()),p.attribList.indexOf(p.attribName)!==-1||p.tag.attributes.hasOwnProperty(p.attribName)){p.attribName=p.attribValue="";return}if(p.opt.xmlns){var o=Vt(p.attribName,!0),N=o.prefix,_=o.local;if(N==="xmlns")if(_==="xml"&&p.attribValue!==h)H(p,"xml: prefix must be bound to "+h+`
Actual: `+p.attribValue);else if(_==="xmlns"&&p.attribValue!==I)H(p,"xmlns: prefix must be bound to "+I+`
Actual: `+p.attribValue);else{var V=p.tag,G=p.tags[p.tags.length-1]||p;V.ns===G.ns&&(V.ns=Object.create(G.ns)),V.ns[_]=p.attribValue}p.attribList.push([p.attribName,p.attribValue])}else p.tag.attributes[p.attribName]=p.attribValue,M(p,"onattribute",{name:p.attribName,value:p.attribValue});p.attribName=p.attribValue=""}function bt(p,o){if(p.opt.xmlns){var N=p.tag,_=Vt(p.tagName);N.prefix=_.prefix,N.local=_.local,N.uri=N.ns[_.prefix]||"",N.prefix&&!N.uri&&(H(p,"Unbound namespace prefix: "+JSON.stringify(p.tagName)),N.uri=_.prefix);var V=p.tags[p.tags.length-1]||p;N.ns&&V.ns!==N.ns&&Object.keys(N.ns).forEach(function(fi){M(p,"onopennamespace",{prefix:fi,uri:N.ns[fi]})});for(var G=0,K=p.attribList.length;G<K;G++){var tt=p.attribList[G],nt=tt[0],W=tt[1],Q=Vt(nt,!0),pt=Q.prefix,Tr=Q.local,pi=pt===""?"":N.ns[pt]||"",ze={name:nt,value:W,prefix:pt,local:Tr,uri:pi};pt&&pt!=="xmlns"&&!pi&&(H(p,"Unbound namespace prefix: "+JSON.stringify(pt)),ze.uri=pt),p.tag.attributes[nt]=ze,M(p,"onattribute",ze)}p.attribList.length=0}p.tag.isSelfClosing=!!o,p.sawRoot=!0,p.tags.push(p.tag),M(p,"onopentag",p.tag),o||(!p.noscript&&p.tagName.toLowerCase()==="script"?p.state=m.SCRIPT:p.state=m.TEXT,p.tag=null,p.tagName=""),p.attribName=p.attribValue="",p.attribList.length=0}function Ht(p){if(!p.tagName){H(p,"Weird empty close tag."),p.textNode+="</>",p.state=m.TEXT;return}if(p.script){if(p.tagName!=="script"){p.script+="</"+p.tagName+">",p.tagName="",p.state=m.SCRIPT;return}M(p,"onscript",p.script),p.script=""}var o=p.tags.length,N=p.tagName;p.strict||(N=N[p.looseCase]());for(var _=N;o--;){var V=p.tags[o];if(V.name!==_)H(p,"Unexpected close tag");else break}if(o<0){H(p,"Unmatched closing tag: "+p.tagName),p.textNode+="</"+p.tagName+">",p.state=m.TEXT;return}p.tagName=N;for(var G=p.tags.length;G-- >o;){var K=p.tag=p.tags.pop();p.tagName=p.tag.name,M(p,"onclosetag",p.tagName);var tt={};for(var nt in K.ns)tt[nt]=K.ns[nt];var W=p.tags[p.tags.length-1]||p;p.opt.xmlns&&K.ns!==W.ns&&Object.keys(K.ns).forEach(function(Q){var pt=K.ns[Q];M(p,"onclosenamespace",{prefix:Q,uri:pt})})}o===0&&(p.closedRoot=!0),p.tagName=p.attribValue=p.attribName="",p.attribList.length=0,p.state=m.TEXT}function qe(p){var o=p.entity,N=o.toLowerCase(),_,V="";return p.ENTITIES[o]?p.ENTITIES[o]:p.ENTITIES[N]?p.ENTITIES[N]:(o=N,o.charAt(0)==="#"&&(o.charAt(1)==="x"?(o=o.slice(2),_=parseInt(o,16),V=_.toString(16)):(o=o.slice(1),_=parseInt(o,10),V=_.toString(10))),o=o.replace(/^0+/,""),isNaN(_)||V.toLowerCase()!==o||_<0||_>1114111?(H(p,"Invalid character entity"),"&"+p.entity+";"):String.fromCodePoint(_))}function ne(p,o){o==="<"?(p.state=m.OPEN_WAKA,p.startTagPosition=p.position):r(o)||(H(p,"Non-whitespace before first tag."),p.textNode=o,p.state=m.TEXT)}function Xt(p,o){var N="";return o<p.length&&(N=p.charAt(o)),N}function re(p){var o=this;if(this.error)throw this.error;if(o.closed)return J(o,"Cannot write after close. Assign an onready handler.");if(p===null)return lt(o);typeof p=="object"&&(p=p.toString());for(var N=0,_="";_=Xt(p,N++),o.c=_,!!_;)switch(o.trackPosition&&(o.position++,_===`
`?(o.line++,o.column=0):o.column++),o.state){case m.BEGIN:if(o.state=m.BEGIN_WHITESPACE,_==="\uFEFF")continue;ne(o,_);continue;case m.BEGIN_WHITESPACE:ne(o,_);continue;case m.TEXT:if(o.sawRoot&&!o.closedRoot){for(var G=N-1;_&&_!=="<"&&_!=="&";)_=Xt(p,N++),_&&o.trackPosition&&(o.position++,_===`
`?(o.line++,o.column=0):o.column++);o.textNode+=p.substring(G,N-1)}_==="<"&&!(o.sawRoot&&o.closedRoot&&!o.strict)?(o.state=m.OPEN_WAKA,o.startTagPosition=o.position):(!r(_)&&(!o.sawRoot||o.closedRoot)&&H(o,"Text data outside of root node."),_==="&"?o.state=m.TEXT_ENTITY:o.textNode+=_);continue;case m.SCRIPT:_==="<"?o.state=m.SCRIPT_ENDING:o.script+=_;continue;case m.SCRIPT_ENDING:_==="/"?o.state=m.CLOSE_TAG:(o.script+="<"+_,o.state=m.SCRIPT);continue;case m.OPEN_WAKA:if(_==="!")o.state=m.SGML_DECL,o.sgmlDecl="";else if(!r(_))if(A(E,_))o.state=m.OPEN_TAG,o.tagName=_;else if(_==="/")o.state=m.CLOSE_TAG,o.tagName="";else if(_==="?")o.state=m.PROC_INST,o.procInstName=o.procInstBody="";else{if(H(o,"Unencoded <"),o.startTagPosition+1<o.position){var V=o.position-o.startTagPosition;_=new Array(V).join(" ")+_}o.textNode+="<"+_,o.state=m.TEXT}continue;case m.SGML_DECL:if(o.sgmlDecl+_==="--"){o.state=m.COMMENT,o.comment="",o.sgmlDecl="";continue}o.doctype&&o.doctype!==!0&&o.sgmlDecl?(o.state=m.DOCTYPE_DTD,o.doctype+="<!"+o.sgmlDecl+_,o.sgmlDecl=""):(o.sgmlDecl+_).toUpperCase()===y?(M(o,"onopencdata"),o.state=m.CDATA,o.sgmlDecl="",o.cdata=""):(o.sgmlDecl+_).toUpperCase()===w?(o.state=m.DOCTYPE,(o.doctype||o.sawRoot)&&H(o,"Inappropriately located doctype declaration"),o.doctype="",o.sgmlDecl=""):_===">"?(M(o,"onsgmldeclaration",o.sgmlDecl),o.sgmlDecl="",o.state=m.TEXT):(a(_)&&(o.state=m.SGML_DECL_QUOTED),o.sgmlDecl+=_);continue;case m.SGML_DECL_QUOTED:_===o.q&&(o.state=m.SGML_DECL,o.q=""),o.sgmlDecl+=_;continue;case m.DOCTYPE:_===">"?(o.state=m.TEXT,M(o,"ondoctype",o.doctype),o.doctype=!0):(o.doctype+=_,_==="["?o.state=m.DOCTYPE_DTD:a(_)&&(o.state=m.DOCTYPE_QUOTED,o.q=_));continue;case m.DOCTYPE_QUOTED:o.doctype+=_,_===o.q&&(o.q="",o.state=m.DOCTYPE);continue;case m.DOCTYPE_DTD:_==="]"?(o.doctype+=_,o.state=m.DOCTYPE):_==="<"?(o.state=m.OPEN_WAKA,o.startTagPosition=o.position):a(_)?(o.doctype+=_,o.state=m.DOCTYPE_DTD_QUOTED,o.q=_):o.doctype+=_;continue;case m.DOCTYPE_DTD_QUOTED:o.doctype+=_,_===o.q&&(o.state=m.DOCTYPE_DTD,o.q="");continue;case m.COMMENT:_==="-"?o.state=m.COMMENT_ENDING:o.comment+=_;continue;case m.COMMENT_ENDING:_==="-"?(o.state=m.COMMENT_ENDED,o.comment=$(o.opt,o.comment),o.comment&&M(o,"oncomment",o.comment),o.comment=""):(o.comment+="-"+_,o.state=m.COMMENT);continue;case m.COMMENT_ENDED:_!==">"?(H(o,"Malformed comment"),o.comment+="--"+_,o.state=m.COMMENT):o.doctype&&o.doctype!==!0?o.state=m.DOCTYPE_DTD:o.state=m.TEXT;continue;case m.CDATA:for(var G=N-1;_&&_!=="]";)_=Xt(p,N++),_&&o.trackPosition&&(o.position++,_===`
`?(o.line++,o.column=0):o.column++);o.cdata+=p.substring(G,N-1),_==="]"&&(o.state=m.CDATA_ENDING);continue;case m.CDATA_ENDING:_==="]"?o.state=m.CDATA_ENDING_2:(o.cdata+="]"+_,o.state=m.CDATA);continue;case m.CDATA_ENDING_2:_===">"?(o.cdata&&M(o,"oncdata",o.cdata),M(o,"onclosecdata"),o.cdata="",o.state=m.TEXT):_==="]"?o.cdata+="]":(o.cdata+="]]"+_,o.state=m.CDATA);continue;case m.PROC_INST:_==="?"?o.state=m.PROC_INST_ENDING:r(_)?o.state=m.PROC_INST_BODY:o.procInstName+=_;continue;case m.PROC_INST_BODY:if(!o.procInstBody&&r(_))continue;_==="?"?o.state=m.PROC_INST_ENDING:o.procInstBody+=_;continue;case m.PROC_INST_ENDING:if(_===">"){let W={name:o.procInstName,body:o.procInstBody};L(o,W),M(o,"onprocessinginstruction",W),o.procInstName=o.procInstBody="",o.state=m.TEXT}else o.procInstBody+="?"+_,o.state=m.PROC_INST_BODY;continue;case m.OPEN_TAG:A(k,_)?o.tagName+=_:(Ue(o),_===">"?bt(o):_==="/"?o.state=m.OPEN_TAG_SLASH:(r(_)||H(o,"Invalid character in tag name"),o.state=m.ATTRIB));continue;case m.OPEN_TAG_SLASH:_===">"?(bt(o,!0),Ht(o)):(H(o,"Forward-slash in opening tag not followed by >"),o.state=m.ATTRIB);continue;case m.ATTRIB:if(r(_))continue;_===">"?bt(o):_==="/"?o.state=m.OPEN_TAG_SLASH:A(E,_)?(o.attribName=_,o.attribValue="",o.state=m.ATTRIB_NAME):H(o,"Invalid attribute name");continue;case m.ATTRIB_NAME:_==="="?o.state=m.ATTRIB_VALUE:_===">"?(H(o,"Attribute without value"),o.attribValue=o.attribName,jt(o),bt(o)):r(_)?o.state=m.ATTRIB_NAME_SAW_WHITE:A(k,_)?o.attribName+=_:H(o,"Invalid attribute name");continue;case m.ATTRIB_NAME_SAW_WHITE:if(_==="=")o.state=m.ATTRIB_VALUE;else{if(r(_))continue;H(o,"Attribute without value"),o.tag.attributes[o.attribName]="",o.attribValue="",M(o,"onattribute",{name:o.attribName,value:""}),o.attribName="",_===">"?bt(o):A(E,_)?(o.attribName=_,o.state=m.ATTRIB_NAME):(H(o,"Invalid attribute name"),o.state=m.ATTRIB)}continue;case m.ATTRIB_VALUE:if(r(_))continue;a(_)?(o.q=_,o.state=m.ATTRIB_VALUE_QUOTED):(o.opt.unquotedAttributeValues||J(o,"Unquoted attribute value"),o.state=m.ATTRIB_VALUE_UNQUOTED,o.attribValue=_);continue;case m.ATTRIB_VALUE_QUOTED:if(_!==o.q){_==="&"?o.state=m.ATTRIB_VALUE_ENTITY_Q:o.attribValue+=_;continue}jt(o),o.q="",o.state=m.ATTRIB_VALUE_CLOSED;continue;case m.ATTRIB_VALUE_CLOSED:r(_)?o.state=m.ATTRIB:_===">"?bt(o):_==="/"?o.state=m.OPEN_TAG_SLASH:A(E,_)?(H(o,"No whitespace between attributes"),o.attribName=_,o.attribValue="",o.state=m.ATTRIB_NAME):H(o,"Invalid attribute name");continue;case m.ATTRIB_VALUE_UNQUOTED:if(!b(_)){_==="&"?o.state=m.ATTRIB_VALUE_ENTITY_U:o.attribValue+=_;continue}jt(o),_===">"?bt(o):o.state=m.ATTRIB;continue;case m.CLOSE_TAG:if(o.tagName)_===">"?Ht(o):A(k,_)?o.tagName+=_:o.script?(o.script+="</"+o.tagName+_,o.tagName="",o.state=m.SCRIPT):(r(_)||H(o,"Invalid tagname in closing tag"),o.state=m.CLOSE_TAG_SAW_WHITE);else{if(r(_))continue;S(E,_)?o.script?(o.script+="</"+_,o.state=m.SCRIPT):H(o,"Invalid tagname in closing tag."):o.tagName=_}continue;case m.CLOSE_TAG_SAW_WHITE:if(r(_))continue;_===">"?Ht(o):H(o,"Invalid characters in closing tag");continue;case m.TEXT_ENTITY:case m.ATTRIB_VALUE_ENTITY_Q:case m.ATTRIB_VALUE_ENTITY_U:var K,tt;switch(o.state){case m.TEXT_ENTITY:K=m.TEXT,tt="textNode";break;case m.ATTRIB_VALUE_ENTITY_Q:K=m.ATTRIB_VALUE_QUOTED,tt="attribValue";break;case m.ATTRIB_VALUE_ENTITY_U:K=m.ATTRIB_VALUE_UNQUOTED,tt="attribValue";break}if(_===";"){var nt=qe(o);o.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(nt)?((o.entityCount+=1)>o.opt.maxEntityCount&&J(o,"Parsed entity count exceeds max entity count"),(o.entityDepth+=1)>o.opt.maxEntityDepth&&J(o,"Parsed entity depth exceeds max entity depth"),o.entity="",o.state=K,o.write(nt),o.entityDepth-=1):(o[tt]+=nt,o.entity="",o.state=K)}else A(o.entity.length?v:x,_)?o.entity+=_:(H(o,"Invalid character in entity name"),o[tt]+="&"+o.entity+_,o.entity="",o.state=K);continue;default:throw new Error(o,"Unknown state: "+o.state)}return o.position>=o.bufferCheckPosition&&l(o),o}String.fromCodePoint||(function(){var p=String.fromCharCode,o=Math.floor,N=function(){var _=16384,V=[],G,K,tt=-1,nt=arguments.length;if(!nt)return"";for(var W="";++tt<nt;){var Q=Number(arguments[tt]);if(!isFinite(Q)||Q<0||Q>1114111||o(Q)!==Q)throw RangeError("Invalid code point: "+Q);Q<=65535?V.push(Q):(Q-=65536,G=(Q>>10)+55296,K=Q%1024+56320,V.push(G,K)),(tt+1===nt||V.length>_)&&(W+=p.apply(null,V),V.length=0)}return W};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:N,configurable:!0,writable:!0}):String.fromCodePoint=N})()})(typeof _e>"u"?_e.sax={}:_e)});var Un=B(Je=>{(function(){"use strict";Je.stripBOM=function(t){return t[0]==="\uFEFF"?t.substring(1):t}}).call(Je)});var Qe=B(Dt=>{(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),Dt.normalize=function(e){return e.toLowerCase()},Dt.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},Dt.stripPrefix=function(e){return e.replace(t,"")},Dt.parseNumbers=function(e){return isNaN(e)||(e=e%1===0?parseInt(e,10):parseFloat(e)),e},Dt.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)&&(e=e.toLowerCase()==="true"),e}}).call(Dt)});var qn=B(Ct=>{(function(){"use strict";var t,e,i,l,n,s,c,u,d,f=function(w,h){return function(){return w.apply(h,arguments)}},g=function(w,h){for(var I in h)y.call(h,I)&&(w[I]=h[I]);function T(){this.constructor=w}return T.prototype=h.prototype,w.prototype=new T,w.__super__=h.prototype,w},y={}.hasOwnProperty;u=$n(),l=require("events"),t=Un(),c=Qe(),d=require("timers").setImmediate,e=de().defaults,n=function(w){return typeof w=="object"&&w!=null&&Object.keys(w).length===0},s=function(w,h,I){var T,E,k;for(T=0,E=w.length;T<E;T++)k=w[T],h=k(h,I);return h},i=function(w,h,I){var T;return T=Object.create(null),T.value=I,T.writable=!0,T.enumerable=!0,T.configurable=!0,Object.defineProperty(w,h,T)},Ct.Parser=(function(w){g(h,w);function h(I){this.parseStringPromise=f(this.parseStringPromise,this),this.parseString=f(this.parseString,this),this.reset=f(this.reset,this),this.assignOrPush=f(this.assignOrPush,this),this.processAsync=f(this.processAsync,this);var T,E,k;if(!(this instanceof Ct.Parser))return new Ct.Parser(I);this.options={},E=e["0.2"];for(T in E)y.call(E,T)&&(k=E[T],this.options[T]=k);for(T in I)y.call(I,T)&&(k=I[T],this.options[T]=k);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}return h.prototype.processAsync=function(){var I,T;try{return this.remaining.length<=this.options.chunkSize?(I=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(I),this.saxParser.close()):(I=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(I),d(this.processAsync))}catch(E){if(T=E,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(T)}},h.prototype.assignOrPush=function(I,T,E){return T in I?(I[T]instanceof Array||i(I,T,[I[T]]),I[T].push(E)):this.options.explicitArray?i(I,T,[E]):i(I,T,E)},h.prototype.reset=function(){var I,T,E,k;return this.removeAllListeners(),this.saxParser=u.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(x){return function(v){if(x.saxParser.resume(),!x.saxParser.errThrown)return x.saxParser.errThrown=!0,x.emit("error",v)}})(this),this.saxParser.onend=(function(x){return function(){if(!x.saxParser.ended)return x.saxParser.ended=!0,x.emit("end",x.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,k=[],I=this.options.attrkey,T=this.options.charkey,this.saxParser.onopentag=(function(x){return function(v){var r,a,b,A,S;if(b={},b[T]="",!x.options.ignoreAttrs){S=v.attributes;for(r in S)y.call(S,r)&&(!(I in b)&&!x.options.mergeAttrs&&(b[I]={}),a=x.options.attrValueProcessors?s(x.options.attrValueProcessors,v.attributes[r],r):v.attributes[r],A=x.options.attrNameProcessors?s(x.options.attrNameProcessors,r):r,x.options.mergeAttrs?x.assignOrPush(b,A,a):i(b[I],A,a))}return b["#name"]=x.options.tagNameProcessors?s(x.options.tagNameProcessors,v.name):v.name,x.options.xmlns&&(b[x.options.xmlnskey]={uri:v.uri,local:v.local}),k.push(b)}})(this),this.saxParser.onclosetag=(function(x){return function(){var v,r,a,b,A,S,m,C,D,O;if(S=k.pop(),A=S["#name"],(!x.options.explicitChildren||!x.options.preserveChildrenOrder)&&delete S["#name"],S.cdata===!0&&(v=S.cdata,delete S.cdata),D=k[k.length-1],S[T].match(/^\s*$/)&&!v?(r=S[T],delete S[T]):(x.options.trim&&(S[T]=S[T].trim()),x.options.normalize&&(S[T]=S[T].replace(/\s{2,}/g," ").trim()),S[T]=x.options.valueProcessors?s(x.options.valueProcessors,S[T],A):S[T],Object.keys(S).length===1&&T in S&&!x.EXPLICIT_CHARKEY&&(S=S[T])),n(S)&&(typeof x.options.emptyTag=="function"?S=x.options.emptyTag():S=x.options.emptyTag!==""?x.options.emptyTag:r),x.options.validator!=null&&(O="/"+(function(){var P,R,L;for(L=[],P=0,R=k.length;P<R;P++)b=k[P],L.push(b["#name"]);return L})().concat(A).join("/"),(function(){var P;try{return S=x.options.validator(O,D&&D[A],S)}catch(R){return P=R,x.emit("error",P)}})()),x.options.explicitChildren&&!x.options.mergeAttrs&&typeof S=="object"){if(!x.options.preserveChildrenOrder)b={},x.options.attrkey in S&&(b[x.options.attrkey]=S[x.options.attrkey],delete S[x.options.attrkey]),!x.options.charsAsChildren&&x.options.charkey in S&&(b[x.options.charkey]=S[x.options.charkey],delete S[x.options.charkey]),Object.getOwnPropertyNames(S).length>0&&(b[x.options.childkey]=S),S=b;else if(D){D[x.options.childkey]=D[x.options.childkey]||[],m={};for(a in S)y.call(S,a)&&i(m,a,S[a]);D[x.options.childkey].push(m),delete S["#name"],Object.keys(S).length===1&&T in S&&!x.EXPLICIT_CHARKEY&&(S=S[T])}}return k.length>0?x.assignOrPush(D,A,S):(x.options.explicitRoot&&(C=S,S={},i(S,A,C)),x.resultObject=S,x.saxParser.ended=!0,x.emit("end",x.resultObject))}})(this),E=(function(x){return function(v){var r,a;if(a=k[k.length-1],a)return a[T]+=v,x.options.explicitChildren&&x.options.preserveChildrenOrder&&x.options.charsAsChildren&&(x.options.includeWhiteChars||v.replace(/\\n/g,"").trim()!=="")&&(a[x.options.childkey]=a[x.options.childkey]||[],r={"#name":"__text__"},r[T]=v,x.options.normalize&&(r[T]=r[T].replace(/\s{2,}/g," ").trim()),a[x.options.childkey].push(r)),a}})(this),this.saxParser.ontext=E,this.saxParser.oncdata=(function(x){return function(v){var r;if(r=E(v),r)return r.cdata=!0}})(this)},h.prototype.parseString=function(I,T){var E;T!=null&&typeof T=="function"&&(this.on("end",function(k){return this.reset(),T(null,k)}),this.on("error",function(k){return this.reset(),T(k)}));try{return I=I.toString(),I.trim()===""?(this.emit("end",null),!0):(I=t.stripBOM(I),this.options.async?(this.remaining=I,d(this.processAsync),this.saxParser):this.saxParser.write(I).close())}catch(k){if(E=k,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw E}else return this.emit("error",E),this.saxParser.errThrown=!0}},h.prototype.parseStringPromise=function(I){return new Promise((function(T){return function(E,k){return T.parseString(I,function(x,v){return x?k(x):E(v)})}})(this))},h})(l),Ct.parseString=function(w,h,I){var T,E,k;return I!=null?(typeof I=="function"&&(T=I),typeof h=="object"&&(E=h)):(typeof h=="function"&&(T=h),E={}),k=new Ct.Parser(E),k.parseString(w,T)},Ct.parseStringPromise=function(w,h){var I,T;return typeof h=="object"&&(I=h),T=new Ct.Parser(I),T.parseStringPromise(w)}}).call(Ct)});var Kt=B(It=>{(function(){"use strict";var t,e,i,l,n=function(c,u){for(var d in u)s.call(u,d)&&(c[d]=u[d]);function f(){this.constructor=c}return f.prototype=u.prototype,c.prototype=new f,c.__super__=u.prototype,c},s={}.hasOwnProperty;e=de(),t=Bn(),i=qn(),l=Qe(),It.defaults=e.defaults,It.processors=l,It.ValidationError=(function(c){n(u,c);function u(d){this.message=d}return u})(Error),It.Builder=t.Builder,It.Parser=i.Parser,It.parseString=i.parseString,It.parseStringPromise=i.parseStringPromise}).call(It)});var Lo={};Dr(Lo,{activate:()=>Po,deactivate:()=>Mo});module.exports=kr(Lo);var j=U(require("vscode"));var q=U(require("vscode")),le=U(require("fs")),ot=U(require("path"));function ft(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Nr(t){return t==="high"?"I":t==="medium"?"II":"III"}function Or(t){let e={total:t.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let i of t)e[i.status]++,e[i.severity]++;return e}function mi(t){return JSON.stringify(t).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function gi(t){let e=mi(Object.fromEntries(t.stigs.flatMap(i=>i.rules.map(l=>[l.uuid,l]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${ft(t.title)}</title>
<style>${Fr}</style>
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
  ${Pr(t.target_data)}
</header>

${t.stigs.map((i,l)=>Mr(i,l)).join(`
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
const TARGET = ${mi(t.target_data)};
${Rr}
</script>
</body>
</html>`}function Pr(t){let e=[t.host_name&&`Host: ${t.host_name}`,t.ip_address&&`IP: ${t.ip_address}`,t.fqdn&&`FQDN: ${t.fqdn}`,t.mac_address&&`MAC: ${t.mac_address}`,t.target_type&&`Type: ${t.target_type}`,t.role&&t.role!=="None"&&`Role: ${t.role}`].filter(Boolean);return e.length?`<div class="target-row">${e.map(i=>`<span class="chip">${ft(i)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function Mr(t,e){let i=Or(t.rules),l=n=>i.total?Math.round(n/i.total*100):0;return`
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
        ${t.rules.map(n=>Lr(n,t.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function Lr(t,e){let i=`${t.group_id} ${t.rule_version} ${t.rule_title} ${t.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${t.uuid}" data-stig="${e}"
    data-sev="${t.severity}" data-status="${t.status}" data-search="${ft(i)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${t.uuid}" data-stig="${e}" /></td>
  <td><span class="pill sev-${t.severity}">CAT ${Nr(t.severity)}</span></td>
  <td><code>${ft(t.group_id)}</code></td>
  <td><code>${ft(t.rule_version)}</code></td>
  <td class="td-title">${ft(t.rule_title)}</td>
  <td><select class="inline-status st-${t.status}" data-uuid="${t.uuid}" data-stig="${e}">
    <option value="not_reviewed" ${t.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${t.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${t.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${t.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var Rr=`
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
`,Fr=`
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
`;var Br={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},$r={high:"CAT I",medium:"CAT II",low:"CAT III"};function yi(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function se(t){let i=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(yi).join(",")];for(let l of t.stigs)for(let n of l.rules)i.push([n.group_id,n.rule_id,n.rule_version,$r[n.severity]||n.severity,Br[n.status]||n.status,n.rule_title,n.finding_details,n.comments,n.ccis.join("; "),n.srg_id].map(yi).join(","));return i.join(`\r
`)}function et(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var Ur={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function X(t,e){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${et(t)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${et(e)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function qr(t){let e=[X("Vuln_Num",t.group_id),X("Severity",t.severity),X("Group_Title",t.group_title),X("Rule_ID",t.rule_id),X("Rule_Ver",t.rule_version),X("Rule_Title",t.rule_title),X("Vuln_Discuss",t.discussion),X("IA_Controls",t.ia_controls),X("Check_Content",t.check_content),X("Fix_Text",t.fix_text),X("False_Positives",t.false_positives),X("False_Negatives",t.false_negatives),X("Documentable",t.documentable),X("Mitigations",t.mitigations),X("Potential_Impact",t.potential_impacts),X("Third_Party_Tools",t.third_party_tools),X("Mitigation_Control",t.mitigation_control),X("Responsibility",t.responsibility),X("Security_Override_Guidance",t.security_override_guidance),X("Check_Content_Ref",t.check_content_ref?.href||""),X("Weight",t.weight),X("Class",t.classification),X("STIGRef",t.stig_ref||""),X("TargetKey",t.target_key||"")];for(let i of t.ccis)e.push(X("CCI_REF",i));for(let i of t.legacy_ids)e.push(X("Legacy_ID",i));return`      <VULN>
${e.join(`
`)}
        <STATUS>${et(Ur[t.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${et(t.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${et(t.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function ht(t,e){return`          <SI_DATA>
            <SID_NAME>${et(t)}</SID_NAME>
            <SID_DATA>${et(e)}</SID_DATA>
          </SI_DATA>`}function zr(t){let e=[ht("version",t.version),ht("classification","UNCLASSIFIED"),ht("customname",""),ht("stigid",t.stig_id),ht("description",""),ht("filename",""),ht("releaseinfo",t.release_info),ht("title",t.stig_name),ht("uuid",t.uuid),ht("notice","terms-of-use"),ht("source","")].join(`
`),i=t.rules.map(qr).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${e}
        </STIG_INFO>
${i}
    </iSTIG>`}function ae(t){let e=t.target_data,i=e.is_web_database?"true":"false",l=`  <ASSET>
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
  </ASSET>`,n=t.stigs.map(zr).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${l}
  <STIGS>
${n}
  </STIGS>
</CHECKLIST>`}var Vr={high:"CAT I",medium:"CAT II",low:"CAT III"};function vi(t){return t?t.includes('"')||t.includes(",")||t.includes(`
`)||t.includes("\r")?'"'+t.replace(/"/g,'""')+'"':t:""}function ce(t){let i=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(vi).join(",")],l=1;for(let n of t.stigs){let s=n.rules.filter(c=>c.status==="open");for(let c of s)i.push([String(l++),c.group_id,c.rule_id,c.rule_version,Vr[c.severity]||c.severity,c.rule_title,`${n.stig_name} ${n.release_info}`,c.finding_details,"","","","","","","Ongoing",c.comments,c.ccis.join("; "),t.target_data.host_name].map(vi).join(","))}return i.join(`\r
`)}var at=class t{constructor(e){this._context=e}static get activeDocumentUri(){return t._activeDocumentUri}static register(e){return q.window.registerCustomEditorProvider("stigViewer.cklbEditor",new t(e),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(e,i,l){i.webview.options={enableScripts:!0},(()=>{try{let u=JSON.parse(e.getText());i.webview.html=gi(u)}catch(u){i.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(u)}</pre></body></html>`}})(),t._activeDocumentUri=e.uri,i.onDidChangeViewState(()=>{i.active&&(t._activeDocumentUri=e.uri)});let s,c=q.workspace.onDidChangeTextDocument(u=>{u.document.uri.toString()===e.uri.toString()&&(clearTimeout(s),s=setTimeout(()=>{try{let d=JSON.parse(e.getText()),f=Object.fromEntries(d.stigs.flatMap(g=>g.rules.map(y=>[y.uuid,y])));i.webview.postMessage({type:"dataUpdate",rules:f})}catch{}},150))});i.webview.onDidReceiveMessage(async u=>{if(u.type==="saveRule"){let{ruleUuid:d,stigUuid:f,status:g,finding_details:y,comments:w}=u;try{let h=JSON.parse(e.getText()),T=h.stigs.find(E=>E.uuid===f)?.rules.find(E=>E.uuid===d);if(T){T.status=g,T.finding_details=y,T.comments=w;let E=new q.WorkspaceEdit,k=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));E.replace(e.uri,k,JSON.stringify(h,null,2)),await q.workspace.applyEdit(E)}}catch(h){q.window.showErrorMessage(`Save failed: ${h}`)}}if(u.type==="saveTargetData")try{let d=JSON.parse(e.getText());Object.assign(d.target_data,u.targetData);let f=new q.WorkspaceEdit,g=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));f.replace(e.uri,g,JSON.stringify(d,null,2)),await q.workspace.applyEdit(f),q.window.showInformationMessage("Target data updated")}catch(d){q.window.showErrorMessage(`Save target data failed: ${d}`)}if(u.type==="exportPoam")try{let d=JSON.parse(e.getText()),f=ce(d),g=d.stigs.reduce((h,I)=>h+I.rules.filter(T=>T.status==="open").length,0),y=ot.basename(e.uri.fsPath,".cklb")+"_POAM.csv",w=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),y)),filters:{CSV:["csv"]},title:`Export POA&M (${g} open findings)`});w&&(le.writeFileSync(w.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported POA&M (${g} findings) \u2192 ${ot.basename(w.fsPath)}`))}catch(d){q.window.showErrorMessage(`POA&M export failed: ${d}`)}if(u.type==="exportCsv")try{let d=JSON.parse(e.getText()),f=se(d),g=ot.basename(e.uri.fsPath,".cklb")+".csv",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),g)),filters:{CSV:["csv"]},title:"Export Summary CSV"});y&&(le.writeFileSync(y.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CSV \u2192 ${ot.basename(y.fsPath)}`))}catch(d){q.window.showErrorMessage(`CSV export failed: ${d}`)}if(u.type==="exportCkl")try{let d=JSON.parse(e.getText()),f=ae(d),g=ot.basename(e.uri.fsPath,".cklb")+".ckl",y=await q.window.showSaveDialog({defaultUri:q.Uri.file(ot.join(ot.dirname(e.uri.fsPath),g)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});y&&(le.writeFileSync(y.fsPath,f,"utf-8"),q.window.showInformationMessage(`Exported CKL \u2192 ${ot.basename(y.fsPath)}`))}catch(d){q.window.showErrorMessage(`CKL export failed: ${d}`)}if(u.type==="bulkSaveRules"){let{ruleUuids:d,stigUuid:f,status:g,comments:y}=u;try{let w=JSON.parse(e.getText()),h=w.stigs.find(k=>k.uuid===f);if(!h)return;let I=0;for(let k of h.rules)d.includes(k.uuid)&&(k.status=g,y&&(k.comments=y),I++);let T=new q.WorkspaceEdit,E=new q.Range(e.positionAt(0),e.positionAt(e.getText().length));T.replace(e.uri,E,JSON.stringify(w,null,2)),await q.workspace.applyEdit(T),q.window.showInformationMessage(`Bulk updated ${I} rules \u2192 ${g.replace(/_/g," ")}`)}catch(w){q.window.showErrorMessage(`Bulk save failed: ${w}`)}}}),i.onDidDispose(()=>c.dispose())}};var Pt=U(require("vscode")),Ae=U(require("fs")),Mt=U(require("path")),De=U(Kt());var it=[];for(let t=0;t<256;++t)it.push((t+256).toString(16).slice(1));function zn(t,e=0){return(it[t[e+0]]+it[t[e+1]]+it[t[e+2]]+it[t[e+3]]+"-"+it[t[e+4]]+it[t[e+5]]+"-"+it[t[e+6]]+it[t[e+7]]+"-"+it[t[e+8]]+it[t[e+9]]+"-"+it[t[e+10]]+it[t[e+11]]+it[t[e+12]]+it[t[e+13]]+it[t[e+14]]+it[t[e+15]]).toLowerCase()}var Vn=require("node:crypto"),Ee=new Uint8Array(256),Se=Ee.length;function Ze(){return Se>Ee.length-16&&((0,Vn.randomFillSync)(Ee),Se=0),Ee.slice(Se,Se+=16)}var jn=require("node:crypto"),ti={randomUUID:jn.randomUUID};function jr(t,e,i){t=t||{};let l=t.random??t.rng?.()??Ze();if(l.length<16)throw new Error("Random bytes length must be >= 16");if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){if(i=i||0,i<0||i+16>e.length)throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);for(let n=0;n<16;++n)e[i+n]=l[n];return e}return zn(l)}function Hr(t,e,i){return ti.randomUUID&&!e&&!t?ti.randomUUID():jr(t,e,i)}var ut=Hr;function _t(t){return t==null?[]:Array.isArray(t)?t:[t]}function ct(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?ct(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}function mt(t,e){let i=t.match(new RegExp(`<${e}>([\\s\\S]*?)<\\/${e}>`));return i?i[1].trim():""}function Xr(t){let e=t.match(/(V-\d+)/);return e?e[1]:t}function Gr(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}function Wr(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}function Kr(t){let e=t;if(e.Benchmark)return e.Benchmark;let i=t["data-stream-collection"];if(i?.component!=null)for(let l of _t(i.component)){let n=l.Benchmark;if(n)return n}return null}async function Hn(t){let e=t.fsPath,i=Ae.readFileSync(e,"utf-8"),l=await(0,De.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[De.processors.stripPrefix]}),n=Kr(l);if(!n)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let c=(n.$||{}).id||"",u=ct(n.title),d=ct(n.version),f="";for(let a of _t(n["plain-text"]))if((a?.$||{}).id==="release-info"){f=ct(a);break}let g=ut(),y=ut(),w=new Date().toISOString(),h=_t(n.Group),I=[];for(let a of h){let b=a?.$||{},A=Xr(b.id||""),S=ct(a.title),m=ct(a.description);for(let C of _t(a.Rule)){let D=C?.$||{},O=Gr(D.id||""),P=Wr(D.severity),R=D.weight||"10.0",L=ct(C.version),M=ct(C.title),F=ct(C.description),$=mt(F,"VulnDiscussion"),J=mt(F,"FalsePositives"),lt=mt(F,"FalseNegatives"),H=mt(F,"Documentable"),Ue=mt(F,"Mitigations"),Vt=mt(F,"SeverityOverrideGuidance"),jt=mt(F,"PotentialImpacts"),bt=mt(F,"ThirdPartyTools"),Ht=mt(F,"MitigationControl"),qe=mt(F,"Responsibility"),ne=mt(F,"IAControls"),Xt=ct(C.fixtext),re=_t(C.check),p="",o={href:"",name:""},_=re.find(W=>W["check-content"])||re[0];if(_){p=ct(_["check-content"]);let W=_t(_["check-content-ref"])[0];W?.$&&(o={href:W.$.href||"",name:W.$.name||""})}let V=[],G=[];for(let W of _t(C.ident)){let Q=W?.$?.system||"",pt=ct(W);Q.includes("cci")?V.push(pt):Q.includes("legacy")&&G.push(pt)}let K=null,tt=null;for(let W of _t(C.reference))W?.identifier&&(K=ct(W.identifier)),W?.title&&(tt=ct(W.title));let nt=ut();I.push({uuid:nt,stig_uuid:g,target_key:K,stig_ref:tt,group_id:A,rule_id:O,rule_id_src:O,weight:R,classification:"Unclassified",severity:P,rule_version:L,group_title:S,rule_title:M,fix_text:Xt,false_positives:J,false_negatives:lt,discussion:$,check_content:p,documentable:H,mitigations:Ue,potential_impacts:jt,third_party_tools:bt,mitigation_control:Ht,responsibility:qe,security_override_guidance:Vt,ia_controls:ne,check_content_ref:o,legacy_ids:G,ccis:V,group_tree:[{id:A,title:S,description:m}],createdAt:w,updatedAt:w,STIGUuid:g,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:S})}}let T={stig_name:u,display_name:u,stig_id:c,release_info:f,version:d,uuid:g,reference_identifier:c,size:I.length,rules:I},k={title:u,id:y,stigs:[T],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},x=Mt.basename(e).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),v=Mt.join(Mt.dirname(e),x);Ae.writeFileSync(v,JSON.stringify(k,null,2));let r=Pt.Uri.file(v);await Pt.commands.executeCommand("vscode.openWith",r,"stigViewer.cklbEditor"),Pt.window.showInformationMessage(`Imported ${I.length} rules from XCCDF \u2192 ${x}`)}var Lt=U(require("vscode")),Ne=U(require("fs")),Rt=U(require("path")),Oe=U(Kt());function ke(t){return t==null?[]:Array.isArray(t)?t:[t]}function Z(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Z(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var Yr={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function Jr(t){let e=(t||"").toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}async function Xn(t){let e=t.fsPath,i=Ne.readFileSync(e,"utf-8"),n=(await(0,Oe.parseStringPromise)(i,{explicitArray:!1,tagNameProcessors:[Oe.processors.stripPrefix]})).CHECKLIST;if(!n)throw new Error("No <CHECKLIST> element found in the CKL file.");let s=n.ASSET||{},c={target_type:Z(s.ASSET_TYPE)||"Computing",host_name:Z(s.HOST_NAME),ip_address:Z(s.HOST_IP),mac_address:Z(s.HOST_MAC),fqdn:Z(s.HOST_FQDN),comments:Z(s.TARGET_COMMENT),role:Z(s.ROLE)||"None",is_web_database:Z(s.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Z(s.TECH_AREA),web_db_site:Z(s.WEB_DB_SITE),web_db_instance:Z(s.WEB_DB_INSTANCE),classification:null},u=ke(n.STIGS?.iSTIG),d=ut(),f=new Date().toISOString(),g=[];for(let E of u){let k=new Map;for(let m of ke(E.STIG_INFO?.SI_DATA))k.set(Z(m.SID_NAME),Z(m.SID_DATA));let x=k.get("uuid")||ut(),v=k.get("title")||"",r=k.get("stigid")||"",a=k.get("version")||"",b=k.get("releaseinfo")||"",A=ke(E.VULN),S=[];for(let m of A){let C=new Map,D=[],O=[];for(let $ of ke(m.STIG_DATA)){let J=Z($.VULN_ATTRIBUTE),lt=Z($.ATTRIBUTE_DATA);J==="CCI_REF"?D.push(lt):J==="Legacy_ID"&&lt?O.push(lt):C.set(J,lt)}let P=C.get("Vuln_Num")||"",R=C.get("Rule_ID")||"",L=ut(),M=Z(m.STATUS),F=Yr[M]||"not_reviewed";S.push({uuid:L,stig_uuid:x,target_key:C.get("TargetKey")||null,stig_ref:C.get("STIGRef")||null,group_id:P,rule_id:R,rule_id_src:R,weight:C.get("Weight")||"10.0",classification:C.get("Class")||"Unclassified",severity:Jr(C.get("Severity")),rule_version:C.get("Rule_Ver")||"",group_title:C.get("Group_Title")||"",rule_title:C.get("Rule_Title")||"",fix_text:C.get("Fix_Text")||"",false_positives:C.get("False_Positives")||"",false_negatives:C.get("False_Negatives")||"",discussion:C.get("Vuln_Discuss")||"",check_content:C.get("Check_Content")||"",documentable:C.get("Documentable")||"",mitigations:C.get("Mitigations")||"",potential_impacts:C.get("Potential_Impact")||"",third_party_tools:C.get("Third_Party_Tools")||"",mitigation_control:C.get("Mitigation_Control")||"",responsibility:C.get("Responsibility")||"",security_override_guidance:C.get("Security_Override_Guidance")||"",ia_controls:C.get("IA_Controls")||"",check_content_ref:{href:C.get("Check_Content_Ref")||"",name:""},legacy_ids:O,ccis:D,group_tree:[{id:P,title:C.get("Group_Title")||"",description:""}],createdAt:f,updatedAt:f,STIGUuid:x,status:F,overrides:{},comments:Z(m.COMMENTS),finding_details:Z(m.FINDING_DETAILS),srg_id:C.get("Group_Title")||""})}g.push({stig_name:v,display_name:v,stig_id:r,release_info:b,version:a,uuid:x,reference_identifier:r,size:S.length,rules:S})}let y={title:g[0]?.stig_name||"Imported CKL",id:d,stigs:g,active:!0,mode:1,has_path:!0,target_data:c,cklb_version:"1"},w=Rt.basename(e,".ckl")+".cklb",h=Rt.join(Rt.dirname(e),w);Ne.writeFileSync(h,JSON.stringify(y,null,2));let I=Lt.Uri.file(h);await Lt.commands.executeCommand("vscode.openWith",I,"stigViewer.cklbEditor");let T=g.reduce((E,k)=>E+k.rules.length,0);Lt.window.showInformationMessage(`Imported ${T} rules from CKL \u2192 ${w}`)}var Ft=U(require("vscode")),Yt=U(require("fs"));async function Gn(t){let e=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!e?.[0])return;let i=t;if(!i){let y=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!y?.[0])return;i=y[0]}let l=JSON.parse(Yt.readFileSync(e[0].fsPath,"utf-8")),n=JSON.parse(Yt.readFileSync(i.fsPath,"utf-8")),s=new Map;for(let y of l.stigs)for(let w of y.rules)s.set(w.rule_version,w);let c=0,u=0,d=0;for(let y of n.stigs)for(let w of y.rules){d++;let h=s.get(w.rule_version);h?(w.status=h.status,w.finding_details=h.finding_details,w.comments=h.comments,w.updatedAt=new Date().toISOString(),c++):u++}let f=new Set;for(let y of n.stigs)for(let w of y.rules)f.add(w.rule_version);let g=0;for(let y of s.keys())f.has(y)||g++;Yt.writeFileSync(i.fsPath,JSON.stringify(n,null,2)),await Ft.commands.executeCommand("vscode.openWith",i,"stigViewer.cklbEditor"),Ft.window.showInformationMessage(`Merge complete: ${c} carried forward, ${u} new rules, ${g} removed from old STIG`)}var gt=U(require("vscode")),Wn=U(require("fs")),Me=class t{static async show(e){if(t._panel){t._panel.reveal(),await t._refresh();return}let i=gt.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",gt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=i,i.onDidDispose(()=>{t._panel=void 0}),i.webview.onDidReceiveMessage(async l=>{if(l.type==="openFile"){let n=gt.Uri.file(l.path);await gt.commands.executeCommand("vscode.openWith",n,"stigViewer.cklbEditor")}l.type==="refresh"&&await t._refresh()}),await t._refresh()}static async _refresh(){let e=t._panel;if(!e)return;let i=await gt.workspace.findFiles("**/*.cklb","**/node_modules/**"),l=[];for(let n of i)try{let s=Wn.readFileSync(n.fsPath,"utf-8"),c=JSON.parse(s);for(let u of c.stigs){let d={file:gt.workspace.asRelativePath(n),uri:n.fsPath,title:c.title,hostName:c.target_data.host_name||"\u2014",stigName:u.display_name||u.stig_name,total:u.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let f of u.rules)d[f.status]++,d[f.severity]++;l.push(d)}}catch{}e.webview.html=Qr(l)}};function Qr(t){let e={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let s of t)e.total+=s.total,e.open+=s.open,e.not_a_finding+=s.not_a_finding,e.not_reviewed+=s.not_reviewed,e.not_applicable+=s.not_applicable,e.high+=s.high,e.medium+=s.medium,e.low+=s.low;let i=s=>e.total?Math.round(s/e.total*100):0,l=i(e.not_a_finding+e.not_applicable),n=t.map(s=>{let c=s.total?Math.round((s.not_a_finding+s.not_applicable)/s.total*100):0;return`<tr class="row" data-path="${Pe(s.uri)}">
      <td class="td-host">${Pe(s.hostName)}</td>
      <td class="td-stig">${Pe(s.stigName)}</td>
      <td class="td-n">${s.total}</td>
      <td class="td-n td-open">${s.open}</td>
      <td class="td-n td-naf">${s.not_a_finding}</td>
      <td class="td-n td-nr">${s.not_reviewed}</td>
      <td class="td-n td-na">${s.not_applicable}</td>
      <td class="td-n">${c}%</td>
      <td class="td-file">${Pe(s.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${Zr}</style>
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
</body></html>`}function Pe(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var Zr=`
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
`;var Bt=U(require("vscode")),ei=U(require("fs")),Kn={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Yn={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function to(t){return t==="high"?"I":t==="medium"?"II":"III"}var Le=class{static async show(e){let i=e;if(!i){let x=await Bt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!x?.[0])return;i=x[0]}let l=await Bt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!l?.[0])return;let n=JSON.parse(ei.readFileSync(i.fsPath,"utf-8")),s=JSON.parse(ei.readFileSync(l[0].fsPath,"utf-8")),c=new Map;for(let x of n.stigs)for(let v of x.rules)c.set(v.rule_version,v);let u=new Map;for(let x of s.stigs)for(let v of x.rules)u.set(v.rule_version,v);let d=[],f=new Set([...c.keys(),...u.keys()]);for(let x of f){let v=c.get(x),r=u.get(x);if(v&&r){let a="unchanged";v.status!==r.status&&(a=Yn[r.status]>Yn[v.status]?"improved":"regression"),d.push({ruleVersion:x,groupId:r.group_id,ruleTitle:r.rule_title,severity:r.severity,statusA:v.status,statusB:r.status,change:a})}else r&&!v?d.push({ruleVersion:x,groupId:r.group_id,ruleTitle:r.rule_title,severity:r.severity,statusA:"",statusB:r.status,change:"new"}):v&&!r&&d.push({ruleVersion:x,groupId:v.group_id,ruleTitle:v.rule_title,severity:v.severity,statusA:v.status,statusB:"",change:"removed"})}let g={regression:0,new:1,improved:2,removed:3,unchanged:4};d.sort((x,v)=>g[x.change]-g[v.change]);let y=d.filter(x=>x.change==="regression").length,w=d.filter(x=>x.change==="improved").length,h=d.filter(x=>x.change==="new").length,I=d.filter(x=>x.change==="removed").length,T=d.filter(x=>x.change==="unchanged").length,E=d.filter(x=>x.change!=="unchanged"),k=Bt.window.createWebviewPanel("stigViewer.diff","STIG Diff",Bt.ViewColumn.One,{enableScripts:!0});k.webview.html=eo(i.fsPath,l[0].fsPath,E,d,{regressions:y,improvements:w,newRules:h,removed:I,unchanged:T})}};function Jt(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function eo(t,e,i,l,n){let s=t.split("/").pop()||t,c=e.split("/").pop()||e,u={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},d={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},f=g=>g.map(y=>`<tr class="row ${d[y.change]}" data-change="${y.change}">
    <td><span class="pill sev-${y.severity}">CAT ${to(y.severity)}</span></td>
    <td><code>${Jt(y.groupId)}</code></td>
    <td><code>${Jt(y.ruleVersion)}</code></td>
    <td class="td-title">${Jt(y.ruleTitle)}</td>
    <td>${y.statusA?`<span class="pill st-${y.statusA}">${Kn[y.statusA]||y.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${y.statusB?`<span class="pill st-${y.statusB}">${Kn[y.statusB]||y.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${d[y.change]}">${u[y.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${io}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${Jt(s)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${Jt(c)}</span>
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
</body></html>`}var io=`
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
`;var $t=U(require("vscode")),Qt=U(require("fs")),Fe=U(Kt());function Jn(t){return t==null?[]:Array.isArray(t)?t:[t]}function Re(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?Re(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}var no={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function ro(t){let e=t.match(/(SV-\d+r\d+_rule)/);return e?e[1]:t}async function Qn(t){let e=t;if(!e){let y=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!y?.[0])return;e=y[0]}let i=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!i?.[0])return;let l=JSON.parse(Qt.readFileSync(e.fsPath,"utf-8")),n=Qt.readFileSync(i[0].fsPath,"utf-8"),s=await(0,Fe.parseStringPromise)(n,{explicitArray:!1,tagNameProcessors:[Fe.processors.stripPrefix]}),c=null;if(s.TestResult?c=s.TestResult:s.Benchmark?.TestResult&&(c=s.Benchmark.TestResult,Array.isArray(c)&&(c=c[c.length-1])),!c)throw new Error("No <TestResult> element found in the XCCDF results file.");let u=new Map;for(let y of Jn(c["rule-result"])){let w=y?.$?.idref||"",h=ro(w),I=Re(y.result).toLowerCase(),T=no[I]||"not_reviewed",E="",k=Jn(y.check)[0];k&&(E=Re(k["check-content"])),!E&&y.message&&(E=Re(y.message)),u.set(h,{status:T,detail:E})}let d=0,f=0,g=new Date().toISOString();for(let y of l.stigs)for(let w of y.rules){let h=u.get(w.rule_id);h?(w.status=h.status,h.detail&&(w.finding_details=h.detail),w.updatedAt=g,d++):f++}Qt.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await $t.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),$t.window.showInformationMessage(`SCAP import: ${d} rules updated, ${f} unmatched`)}var yt=U(require("vscode")),wt=U(require("fs")),kt=U(require("path"));function oo(t){let e=kt.join(__dirname,"..","scan-patterns.json"),i=t||e;if(!wt.existsSync(i))throw new Error(`Scan patterns file not found: ${i}`);return JSON.parse(wt.readFileSync(i,"utf-8"))}function so(t,e){let i=[e.rule_title,e.discussion,e.check_content,e.group_title].join(" ").toLowerCase();return t.ruleKeywords.some(l=>i.includes(l.toLowerCase()))}function Zn(t){let e=t.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${e}$`)}function ii(t,e){let i=t.replace(/\\/g,"/");return e.some(l=>{if(l.includes("{")){let n=l.match(/^(.*)\{([^}]+)\}(.*)$/);if(n){let[,s,c,u]=n;return c.split(",").some(d=>{let f=s+d.trim()+u;return Zn(f).test(i)})}}return Zn(l).test(i)})}function ao(t,e){let i=[];function l(n){let s;try{s=wt.readdirSync(n,{withFileTypes:!0})}catch{return}for(let c of s){let u=kt.join(n,c.name),d=kt.relative(t,u);ii(d,e)||(c.isDirectory()?ii(d+"/",e)||l(u):c.isFile()&&i.push(u))}}return l(t),i}function co(t,e,i){let l;try{let c=wt.readFileSync(t);if(c.includes(0))return[];l=c.toString("utf-8")}catch{return[]}let n=l.split(`
`),s=[];for(let c of e){let u=i?"g":"gi",d;try{d=new RegExp(c,u)}catch{continue}for(let f=0;f<n.length;f++)d.test(n[f])&&s.push({line:f+1,content:n[f].trim().substring(0,200)}),d.lastIndex=0}return s}async function tr(t){let e=t;if(!e){let d=await yt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!d?.[0])return;e=d[0]}let i=await yt.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!i?.[0])return;let l=await yt.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!l)return;let n;if(l.includes("custom")){let d=await yt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!d?.[0])return;n=d[0].fsPath}let s=oo(n),c=JSON.parse(wt.readFileSync(e.fsPath,"utf-8")),u=i[0].fsPath;await yt.window.withProgress({location:yt.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(d,f)=>{d.report({message:"Discovering files..."});let g=ao(u,s.excludeGlobs);if(f.isCancellationRequested)return;let y=[],w=new Date().toISOString(),h=0,I=0,T=0,E=0,k=c.stigs.reduce((v,r)=>v+r.rules.length,0);for(let v of c.stigs)for(let r of v.rules){if(f.isCancellationRequested)return;let a=s.scanPatterns.filter(P=>so(P,r));if(a.length===0)continue;h++,d.report({message:`Scanning ${r.group_id} (${h}/${k})`,increment:1/k*100});let b=[],A=[];for(let P of a){let R=g.filter(M=>{let F=kt.relative(u,M);return ii(F,P.fileGlobs)}),L=!1;for(let M of R){if(f.isCancellationRequested)return;let F=co(M,P.patterns,P.caseSensitive);if(F.length>0){L=!0;let $=kt.relative(u,M);for(let J of F)b.push({file:$,line:J.line,content:J.content,patternId:P.id})}}L&&A.push(P.name)}let S=a.some(P=>P.matchMeansOpen),m=a.filter(P=>P.matchMeansOpen),C=b.filter(P=>m.some(R=>R.id===P.patternId)),D,O;if(C.length>0){D="open",T++;let P=a.find(R=>R.findingDetailOverride&&b.some(L=>L.patternId===R.id));if(P?.findingDetailOverride){let R=b.filter(L=>L.patternId===P.id).slice(0,20).map(L=>`  ${L.file}:${L.line} \u2014 ${L.content}`).join(`
`);O=P.findingDetailOverride.replace("{count}",String(b.filter(L=>L.patternId===P.id).length)).replace("{matches}",R).replace("{file}",b[0]?.file||"")}else{let R=C.slice(0,20).map(M=>`  ${M.file}:${M.line} \u2014 ${M.content}`).join(`
`),L=C.length>20?`
  ... and ${C.length-20} more`:"";O=`[AUTO-SCAN] Found ${C.length} potential issue(s) matching: ${A.join(", ")}

${R}${L}`}}else if(S)D="not_a_finding",E++,O=`[AUTO-SCAN] Scanned ${g.length} files for: ${a.map(P=>P.name).join(", ")}. No issues detected.`;else{let P=b.slice(0,10);if(P.length>0){D="not_reviewed";let R=a.find(L=>L.findingDetailOverride);R?.findingDetailOverride?O=R.findingDetailOverride.replace("{count}",String(b.length)).replace("{matches}",P.map(L=>L.file).join(", ")).replace("{file}",P[0]?.file||""):O=`[AUTO-SCAN] Found relevant files: ${P.map(L=>L.file).join(", ")}. Manual review required.`}else continue}r.status=D,r.finding_details=O,r.updatedAt=w,I++}wt.writeFileSync(e.fsPath,JSON.stringify(c,null,2)),await yt.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let x=k-I;yt.window.showInformationMessage(`Scan complete: ${I} rules evaluated (${T} open, ${E} not a finding, ${x} unmatched \u2014 review manually)`)})}var Ut=U(require("vscode")),Zt=U(require("fs"));var ni=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function lo(t,e){let i=[];if(t.taxa)for(let n of t.taxa){let s=ri(n.id);s&&i.push(s)}if(e?.relationships){for(let n of e.relationships)if(n.target.toolComponent?.name?.toUpperCase()==="CWE"||n.target.id.startsWith("CWE-")){let s=ri(n.target.id);s&&i.push(s)}}if(e?.properties?.tags)for(let n of e.properties.tags){let s=n.match(/cwe[/-](\d+)/i);s&&i.push(parseInt(s[1],10))}let l=ri(t.ruleId);return l&&i.push(l),[...new Set(i)]}function ri(t){let e=t.match(/(?:CWE-?)(\d+)/i);return e?parseInt(e[1],10):null}async function er(t){let e=t;if(!e){let h=await Ut.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!h?.[0])return;e=h[0]}let i=await Ut.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!i?.length)return;let l=JSON.parse(Zt.readFileSync(e.fsPath,"utf-8")),n=new Date().toISOString(),s=[];for(let h of l.stigs)s.push(...h.rules);let c=new Map,u=0,d=0,f=new Set,g=[];for(let h of i){let I=JSON.parse(Zt.readFileSync(h.fsPath,"utf-8"));for(let T of I.runs){let E=T.tool.driver.name;g.includes(E)||g.push(E);let k=new Map;if(T.tool.driver.rules)for(let x of T.tool.driver.rules)k.set(x.id,x);for(let x of T.results){u++;let v=k.get(x.ruleId),r=lo(x,v);if(r.length===0)continue;let a=x.locations?.[0]?.physicalLocation,b=a?.artifactLocation?.uri||"",A=a?.region?.startLine||0,S=!1;for(let m of r){let C=ni.get(m);if(!C){f.add(m);continue}for(let D of s){let O=`${D.rule_title} ${D.discussion} ${D.check_content}`.toLowerCase();C.keywords.some(P=>O.includes(P.toLowerCase()))&&(c.has(D.uuid)||c.set(D.uuid,[]),c.get(D.uuid).push({tool:E,cwe:m,file:b.replace(/^file:\/\//,""),line:A,message:x.message.text.substring(0,300)}),S=!0)}}S&&d++}}}let y=0;for(let[h,I]of c){let T=s.find(x=>x.uuid===h);if(!T)continue;T.status="open",y++;let E=new Map;for(let x of I){let v=`CWE-${x.cwe}`;E.has(v)||E.set(v,[]),E.get(v).push(x)}let k=[`[SARIF IMPORT] ${I.length} finding(s) from: ${g.join(", ")}
`];for(let[x,v]of E){let r=ni.get(parseInt(x.replace("CWE-","")))?.name||x;k.push(`${x} \u2014 ${r}:`);let a=v.slice(0,10);for(let b of a)k.push(`  ${b.file}:${b.line} \u2014 ${b.message}`);v.length>10&&k.push(`  ... and ${v.length-10} more`)}T.finding_details=k.join(`
`),T.updatedAt=n}Zt.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await Ut.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor");let w=`SARIF import: ${u} findings processed, ${d} mapped to ${y} rules`;f.size>0&&(w+=` (${f.size} unmapped CWEs: ${[...f].slice(0,5).map(h=>`CWE-${h}`).join(", ")}${f.size>5?"...":""})`),Ut.window.showInformationMessage(w)}var St=U(require("vscode")),te=U(require("fs"));function uo(t){let e=[];if(!t.vulnerabilities)return e;for(let[i,l]of Object.entries(t.vulnerabilities))for(let n of l.via)typeof n=="object"&&e.push({name:i,severity:n.severity,title:n.title,url:n.url,cwe:n.cwe?.[0],fixAvailable:l.fixAvailable?"Yes":"No"});return e}function ir(t){let e=[],i=Array.isArray(t)?t:t.dependencies||[];for(let l of i)if(l.vulns?.length)for(let n of l.vulns)e.push({name:l.name,version:l.version,id:n.id,description:n.description,fixAvailable:n.fix_versions?.length?n.fix_versions.join(", "):"No"});return e}function po(t){if(t.vulnerabilities&&typeof t.vulnerabilities=="object")return{entries:uo(t),source:"npm audit"};if(Array.isArray(t)&&t[0]?.vulns!==void 0)return{entries:ir(t),source:"pip-audit"};if(t.dependencies&&Array.isArray(t.dependencies))return{entries:ir(t),source:"pip-audit"};if(Array.isArray(t))return{entries:t.map(e=>({name:e.name||e.package||e.module||"",version:e.version||e.installed_version||"",severity:e.severity||e.level||"",title:e.title||e.advisory||e.description||"",id:e.id||e.cve||e.advisory_id||"",url:e.url||e.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function nr(t){let e=t;if(!e){let g=await St.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!g?.[0])return;e=g[0]}let i=await St.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!i?.[0])return;let l=JSON.parse(te.readFileSync(e.fsPath,"utf-8")),n=JSON.parse(te.readFileSync(i[0].fsPath,"utf-8")),{entries:s,source:c}=po(n);if(s.length===0){St.window.showInformationMessage(`No vulnerabilities found in ${c} output.`);return}let u=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],d=new Date().toISOString(),f=0;for(let g of l.stigs)for(let y of g.rules){let w=`${y.rule_title} ${y.discussion} ${y.check_content}`.toLowerCase();if(!u.some(x=>w.includes(x)))continue;f++,y.status="open",y.updatedAt=d;let I={};for(let x of s){let v=(x.severity||"unknown").toLowerCase();I[v]=(I[v]||0)+1}let T=Object.entries(I).map(([x,v])=>`${v} ${x}`).join(", "),E=[`[AUDIT IMPORT] ${s.length} vulnerable dependencies found via ${c}`,`Severity breakdown: ${T}
`],k=s.slice(0,25);for(let x of k){let v=[x.name];x.version&&v.push(`v${x.version}`),x.severity&&v.push(`[${x.severity}]`),x.title&&v.push(`\u2014 ${x.title}`),x.id&&v.push(`(${x.id})`),x.fixAvailable&&x.fixAvailable!=="No"&&v.push(`fix: ${x.fixAvailable}`),E.push(`  ${v.join(" ")}`)}s.length>25&&E.push(`  ... and ${s.length-25} more`),y.finding_details=E.join(`
`)}te.writeFileSync(e.fsPath,JSON.stringify(l,null,2)),await St.commands.executeCommand("vscode.openWith",e,"stigViewer.cklbEditor"),f>0?St.window.showInformationMessage(`Imported ${s.length} vulnerabilities from ${c} \u2192 ${f} STIG rule(s) marked open`):St.window.showWarningMessage(`Imported ${s.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var Et=U(require("vscode")),ee=U(require("fs")),At=U(require("path")),rr=U(require("zlib"));var oi=class{constructor(){this.files=[]}addFile(e,i){let l=typeof i=="string"?Buffer.from(i,"utf-8"):i,n=rr.deflateRawSync(l),s=this.crc32(l);this.files.push({name:e,data:l,crc:s,compressedData:n})}build(){let e=[],i=[],l=0;for(let u of this.files){let d=Buffer.from(u.name,"utf-8"),f=Buffer.alloc(30+d.length);f.writeUInt32LE(67324752,0),f.writeUInt16LE(20,4),f.writeUInt16LE(0,6),f.writeUInt16LE(8,8),f.writeUInt16LE(0,10),f.writeUInt16LE(0,12),f.writeUInt32LE(u.crc,14),f.writeUInt32LE(u.compressedData.length,18),f.writeUInt32LE(u.data.length,22),f.writeUInt16LE(d.length,26),f.writeUInt16LE(0,28),d.copy(f,30);let g=Buffer.alloc(46+d.length);g.writeUInt32LE(33639248,0),g.writeUInt16LE(20,4),g.writeUInt16LE(20,6),g.writeUInt16LE(0,8),g.writeUInt16LE(8,10),g.writeUInt16LE(0,12),g.writeUInt16LE(0,14),g.writeUInt32LE(u.crc,16),g.writeUInt32LE(u.compressedData.length,20),g.writeUInt32LE(u.data.length,24),g.writeUInt16LE(d.length,28),g.writeUInt16LE(0,30),g.writeUInt16LE(0,32),g.writeUInt16LE(0,34),g.writeUInt16LE(0,36),g.writeUInt32LE(0,38),g.writeUInt32LE(l,42),d.copy(g,46),e.push(f,u.compressedData),i.push(g),l+=f.length+u.compressedData.length}let n=l,s=0;for(let u of i)e.push(u),s+=u.length;let c=Buffer.alloc(22);return c.writeUInt32LE(101010256,0),c.writeUInt16LE(0,4),c.writeUInt16LE(0,6),c.writeUInt16LE(this.files.length,8),c.writeUInt16LE(this.files.length,10),c.writeUInt32LE(s,12),c.writeUInt32LE(n,16),c.writeUInt16LE(0,20),e.push(c),Buffer.concat(e)}crc32(e){let i=4294967295;for(let l=0;l<e.length;l++){i^=e[l];for(let n=0;n<8;n++)i=i>>>1^(i&1?3988292384:0)}return(i^4294967295)>>>0}};function fo(t){let e=[];e.push("STIG ASSESSMENT EVIDENCE PACKAGE"),e.push(`================================
`),e.push(`Generated: ${new Date().toISOString()}`),e.push(`Title: ${t.title}`),e.push(`Host: ${t.target_data.host_name||"N/A"}`),e.push(`IP: ${t.target_data.ip_address||"N/A"}`),e.push(`FQDN: ${t.target_data.fqdn||"N/A"}
`);for(let i of t.stigs){let l={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let u of i.rules)l[u.status]++,l[u.severity]++;let n=i.rules.length,s=n?Math.round((l.not_a_finding+l.not_applicable)/n*100):0;e.push(`STIG: ${i.stig_name}`),e.push(`  ${i.release_info} | Version ${i.version}`),e.push(`  Total Rules: ${n}`),e.push(`  Open: ${l.open} | Not a Finding: ${l.not_a_finding} | Not Reviewed: ${l.not_reviewed} | Not Applicable: ${l.not_applicable}`),e.push(`  CAT I: ${l.high} | CAT II: ${l.medium} | CAT III: ${l.low}`),e.push(`  Completion: ${s}%
`);let c=i.rules.filter(u=>u.status==="open");if(c.length>0){e.push("  OPEN FINDINGS:");for(let u of c){let d=u.severity==="high"?"I":u.severity==="medium"?"II":"III";if(e.push(`    [CAT ${d}] ${u.group_id} \u2014 ${u.rule_title}`),u.finding_details){let f=u.finding_details.substring(0,200).replace(/\n/g,`
      `);e.push(`      ${f}`)}}e.push("")}}return e.push(`
PACKAGE CONTENTS:`),e.push("  checklist.cklb    \u2014 Full checklist in JSON format"),e.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),e.push("  summary.csv       \u2014 All rules with status and findings"),e.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),e.push("  report.txt        \u2014 This summary report"),e.join(`
`)}async function or(t){let e=t;if(!e){let g=await Et.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!g?.[0])return;e=g[0]}let i=JSON.parse(ee.readFileSync(e.fsPath,"utf-8")),l=At.basename(e.fsPath,".cklb"),n=new oi;if(n.addFile("checklist.cklb",JSON.stringify(i,null,2)),n.addFile("checklist.ckl",ae(i)),n.addFile("summary.csv",se(i)),n.addFile("poam.csv",ce(i)),n.addFile("report.txt",fo(i)),(await Et.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let g=await Et.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(g)for(let y of g){let w="evidence/"+At.basename(y.fsPath);n.addFile(w,ee.readFileSync(y.fsPath))}}let c=`${l}_evidence_${new Date().toISOString().slice(0,10)}.zip`,u=await Et.window.showSaveDialog({defaultUri:Et.Uri.file(At.join(At.dirname(e.fsPath),c)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!u)return;ee.writeFileSync(u.fsPath,n.build());let d=i.stigs.reduce((g,y)=>g+y.rules.length,0),f=i.stigs.reduce((g,y)=>g+y.rules.filter(w=>w.status==="open").length,0);Et.window.showInformationMessage(`Evidence package saved: ${d} rules, ${f} open findings \u2192 ${At.basename(u.fsPath)}`)}var rt=U(require("vscode")),zt=U(require("fs")),Nt=U(require("path"));var Be=U(Kt()),ar={"CCI-000005":{control:"AC-2",title:"Account Management",definition:"The organization manages information system accounts, including establishing, activating, modifying, reviewing, disabling, and removing accounts."},"CCI-000009":{control:"AC-2",title:"Account Management",definition:"The organization reviews information system accounts for compliance with account management requirements."},"CCI-000010":{control:"AC-2",title:"Account Management",definition:"The organization requires approvals by organization-defined personnel or roles for requests to create information system accounts."},"CCI-000012":{control:"AC-2",title:"Account Management",definition:"The organization creates, enables, modifies, disables, and removes information system accounts in accordance with organization-defined procedures or conditions."},"CCI-000015":{control:"AC-2 (1)",title:"Account Management | Automated System Account Management",definition:"The organization employs automated mechanisms to support the management of information system accounts."},"CCI-000017":{control:"AC-2 (2)",title:"Account Management | Removal of Temporary/Emergency Accounts",definition:"The information system automatically removes or disables temporary and emergency accounts after a defined time period."},"CCI-000018":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after a defined time period."},"CCI-000019":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The organization defines the time period after which the information system automatically disables inactive accounts."},"CCI-000020":{control:"AC-2 (3)",title:"Account Management | Disable Inactive Accounts",definition:"The information system automatically disables inactive accounts after the organization-defined time period."},"CCI-000023":{control:"AC-2 (4)",title:"Account Management | Automated Audit Actions",definition:"The information system automatically audits account creation, modification, enabling, disabling, and removal actions and notifies organization-defined personnel or roles."},"CCI-000032":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources."},"CCI-000033":{control:"AC-3 (3)",title:"Access Enforcement | Mandatory Access Control",definition:"The information system enforces organization-defined mandatory access control policy."},"CCI-000038":{control:"AC-6",title:"Least Privilege",definition:"The organization employs the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks."},"CCI-000039":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions and security-relevant information."},"CCI-000040":{control:"AC-6 (1)",title:"Least Privilege | Authorize Access to Security Functions",definition:"The organization explicitly authorizes access to organization-defined security functions."},"CCI-000044":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system enforces a limit of consecutive invalid logon attempts by a user during a defined time period."},"CCI-000045":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The organization defines the number of consecutive invalid logon attempts allowed."},"CCI-000047":{control:"AC-7",title:"Unsuccessful Logon Attempts",definition:"The information system automatically locks the account/node until released by an administrator when the maximum number of unsuccessful attempts is exceeded."},"CCI-000048":{control:"AC-8",title:"System Use Notification",definition:"The information system displays an approved system use notification message or banner before granting access."},"CCI-000050":{control:"AC-8",title:"System Use Notification",definition:"The information system retains the notification message or banner on the screen until users acknowledge the usage conditions."},"CCI-000054":{control:"AC-10",title:"Concurrent Session Control",definition:"The information system limits the number of concurrent sessions for each account to an organization-defined number."},"CCI-000056":{control:"AC-11",title:"Session Lock",definition:"The information system initiates a session lock after the organization-defined time period of inactivity."},"CCI-000057":{control:"AC-11",title:"Session Lock",definition:"The information system provides the capability for users to initiate a session lock for display devices."},"CCI-000058":{control:"AC-11 (1)",title:"Session Lock | Pattern-Hiding Displays",definition:"The information system conceals, via the session lock, information previously visible on the display."},"CCI-000060":{control:"AC-11",title:"Session Lock",definition:"The organization defines the time period of inactivity after which the information system initiates a session lock."},"CCI-000068":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions."},"CCI-000070":{control:"AC-17 (2)",title:"Remote Access | Protection of Confidentiality/Integrity Using Encryption",definition:"The organization defines cryptographic requirements for protecting confidentiality and integrity of remote access sessions."},"CCI-000082":{control:"AC-17 (9)",title:"Remote Access | Disconnect/Disable Access",definition:"The organization provides the capability to expeditiously disconnect or disable remote access."},"CCI-000213":{control:"AC-3",title:"Access Enforcement",definition:"The information system enforces approved authorizations for logical access to information and system resources in accordance with applicable access control policies."},"CCI-001084":{control:"SC-3",title:"Security Function Isolation",definition:"The information system isolates security functions from nonsecurity functions."},"CCI-000126":{control:"AU-2",title:"Audit Events",definition:"The organization determines that the information system is capable of auditing organization-defined auditable events."},"CCI-000130":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes what type of event occurred."},"CCI-000131":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes when an event occurred."},"CCI-000132":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes where the event occurred."},"CCI-000133":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the source of the event."},"CCI-000134":{control:"AU-3",title:"Content of Audit Records",definition:"The information system generates audit records containing information that establishes the outcome of the event."},"CCI-000135":{control:"AU-3 (1)",title:"Content of Audit Records | Additional Audit Information",definition:"The information system generates audit records containing organization-defined additional, more detailed information."},"CCI-000136":{control:"AU-3 (2)",title:"Content of Audit Records | Centralized Management",definition:"The information system provides centralized management and configuration of the content to be captured in audit records."},"CCI-000139":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system alerts designated personnel in the event of an audit processing failure."},"CCI-000140":{control:"AU-5",title:"Response to Audit Processing Failures",definition:"The information system takes organization-defined actions in the event of an audit processing failure."},"CCI-000154":{control:"AU-6",title:"Audit Review, Analysis, and Reporting",definition:"The organization reviews and analyzes information system audit records for indications of inappropriate or unusual activity."},"CCI-000158":{control:"AU-7",title:"Audit Reduction and Report Generation",definition:"The information system provides an audit reduction and report generation capability."},"CCI-000162":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized access."},"CCI-000163":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized modification."},"CCI-000164":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information from unauthorized deletion."},"CCI-000166":{control:"AU-10",title:"Non-repudiation",definition:"The information system protects against an individual falsely denying having performed a particular action."},"CCI-000167":{control:"AU-10",title:"Non-repudiation",definition:"The information system provides irrefutable evidence that a specific action was performed."},"CCI-000169":{control:"AU-12",title:"Audit Generation",definition:"The information system provides audit record generation capability for the auditable events defined."},"CCI-000171":{control:"AU-12",title:"Audit Generation",definition:"The information system allows designated personnel to select which auditable events are to be audited by specific components."},"CCI-000172":{control:"AU-12 (3)",title:"Audit Generation | Changes by Authorized Individuals",definition:"The information system provides the capability for authorized individuals to change the auditing to be performed on specific components."},"CCI-001464":{control:"AU-4",title:"Audit Storage Capacity",definition:"The organization allocates audit record storage capacity and configures auditing to reduce the likelihood of capacity being exceeded."},"CCI-001487":{control:"AU-9",title:"Protection of Audit Information",definition:"The information system protects audit information and audit tools from unauthorized access, modification, and deletion."},"CCI-001493":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only an organization-defined subset of privileged users."},"CCI-001494":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization authorizes access to management of audit functionality to only a defined subset of privileged users."},"CCI-001495":{control:"AU-9 (4)",title:"Protection of Audit Information | Access by Subset of Privileged Users",definition:"The organization defines the subset of privileged users authorized for audit management."},"CCI-001496":{control:"AU-9 (5)",title:"Protection of Audit Information | Dual Authorization",definition:"The organization enforces dual authorization for movement and/or deletion of organization-defined audit information."},"CCI-001851":{control:"AU-4 (1)",title:"Audit Storage Capacity | Transfer to Alternate Storage",definition:"The information system off-loads audit records onto a different system or media."},"CCI-001855":{control:"AU-5 (1)",title:"Response to Audit Processing Failures | Audit Storage Capacity",definition:"The information system provides a warning to organization-defined personnel when allocated audit record storage volume reaches a defined percentage."},"CCI-001857":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The information system provides an alert in real-time to organization-defined personnel when audit failure events occur."},"CCI-001858":{control:"AU-5 (2)",title:"Response to Audit Processing Failures | Real-Time Alerts",definition:"The organization defines the audit failure events requiring real-time alerts."},"CCI-000345":{control:"CM-5",title:"Access Restrictions for Change",definition:"The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system."},"CCI-000363":{control:"CM-6",title:"Configuration Settings",definition:"The organization defines security configuration settings for the information system components."},"CCI-000366":{control:"CM-6",title:"Configuration Settings",definition:"The organization ensures that the information system components comply with organization-defined configuration settings."},"CCI-000370":{control:"CM-6",title:"Configuration Settings",definition:"The organization establishes and documents configuration settings for information technology products employed within the information system."},"CCI-000379":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities."},"CCI-000381":{control:"CM-7",title:"Least Functionality",definition:"The organization prohibits or restricts the use of organization-defined functions, ports, protocols, and/or services."},"CCI-000382":{control:"CM-7",title:"Least Functionality",definition:"The organization configures the information system to provide only essential capabilities and prohibits or restricts the use of prohibited functions, ports, protocols, and/or services."},"CCI-001749":{control:"CM-5 (3)",title:"Access Restrictions for Change | Signed Components",definition:"The information system prevents the installation of software and firmware components without verification that the component has been digitally signed."},"CCI-001812":{control:"CM-11",title:"User-Installed Software",definition:"The organization defines policies governing the installation of software by users."},"CCI-001813":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system enforces access restrictions and supports auditing of the enforcement actions."},"CCI-001814":{control:"CM-5 (1)",title:"Access Restrictions for Change | Automated Access Enforcement/Auditing",definition:"The information system supports auditing of the enforcement actions."},"CCI-000185":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system validates certificates by constructing and verifying a certification path."},"CCI-000186":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system enforces authorized access to the corresponding private key."},"CCI-000187":{control:"IA-5 (2)",title:"Authenticator Management | PKI-Based Authentication",definition:"The information system maps the authenticated identity to the account of the individual or group."},"CCI-000192":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of uppercase characters used."},"CCI-000193":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of lowercase characters used."},"CCI-000194":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of numeric characters used."},"CCI-000195":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces password complexity by the minimum number of special characters used."},"CCI-000196":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, stores only cryptographically-protected passwords."},"CCI-000197":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, transmits only cryptographically-protected passwords."},"CCI-000198":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password lifetime restrictions."},"CCI-000199":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces maximum password lifetime restrictions."},"CCI-000200":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system prohibits password reuse for a defined number of generations."},"CCI-000205":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces minimum password length."},"CCI-000764":{control:"IA-2",title:"Identification and Authentication (Organizational Users)",definition:"The information system uniquely identifies and authenticates organizational users."},"CCI-000765":{control:"IA-2 (1)",title:"Identification and Authentication | Multi-Factor Authentication to Privileged Accounts",definition:"The information system implements multifactor authentication for network access to privileged accounts."},"CCI-000766":{control:"IA-2 (2)",title:"Identification and Authentication | Multi-Factor Authentication to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for network access to non-privileged accounts."},"CCI-000767":{control:"IA-2 (3)",title:"Identification and Authentication | Local Access to Privileged Accounts",definition:"The information system implements multifactor authentication for local access to privileged accounts."},"CCI-000768":{control:"IA-2 (4)",title:"Identification and Authentication | Local Access to Non-Privileged Accounts",definition:"The information system implements multifactor authentication for local access to non-privileged accounts."},"CCI-000770":{control:"IA-2 (5)",title:"Identification and Authentication | Group Authentication",definition:"The organization requires individuals to be authenticated with an individual authenticator when a group authenticator is employed."},"CCI-000778":{control:"IA-3",title:"Device Identification and Authentication",definition:"The information system uniquely identifies and authenticates devices before establishing a connection."},"CCI-000795":{control:"IA-4",title:"Identifier Management",definition:"The organization manages information system identifiers for users and devices."},"CCI-000803":{control:"IA-7",title:"Cryptographic Module Authentication",definition:"The information system implements mechanisms for authentication to a cryptographic module that meet the requirements of applicable laws."},"CCI-001941":{control:"IA-2 (8)",title:"Identification and Authentication | Network Access to Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to privileged accounts."},"CCI-001942":{control:"IA-2 (9)",title:"Identification and Authentication | Network Access to Non-Privileged Accounts \u2014 Replay Resistant",definition:"The information system implements replay-resistant authentication mechanisms for network access to non-privileged accounts."},"CCI-001953":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts and electronically verifies Personal Identity Verification (PIV) credentials."},"CCI-001954":{control:"IA-2 (12)",title:"Identification and Authentication | Acceptance of PIV Credentials",definition:"The information system accepts PIV credentials from other agencies."},"CCI-002007":{control:"IA-5",title:"Authenticator Management",definition:"The organization manages information system authenticators."},"CCI-002009":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system, for password-based authentication, enforces the password complexity defined by the organization."},"CCI-002010":{control:"IA-5 (1)",title:"Authenticator Management | Password-Based Authentication",definition:"The information system enforces the number of characters that are changed when new passwords are created."},"CCI-002041":{control:"IA-11",title:"Re-authentication",definition:"The information system requires users to re-authenticate when organization-defined circumstances or situations require re-authentication."},"CCI-000877":{control:"MA-4",title:"Nonlocal Maintenance",definition:"The organization authorizes, monitors, and controls nonlocal maintenance and diagnostic activities."},"CCI-001880":{control:"MA-4 (6)",title:"Nonlocal Maintenance | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to protect the integrity and confidentiality of nonlocal maintenance and diagnostic communications."},"CCI-001199":{control:"SC-28",title:"Protection of Information at Rest",definition:"The information system protects the confidentiality and integrity of information at rest."},"CCI-000924":{control:"PE-2",title:"Physical Access Authorizations",definition:"The organization develops, approves, and maintains a list of individuals with authorized access to the facility."},"CCI-001643":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization scans for vulnerabilities in the information system and hosted applications."},"CCI-001644":{control:"RA-5",title:"Vulnerability Scanning",definition:"The organization defines the frequency at which vulnerability scans are conducted."},"CCI-002233":{control:"SA-11",title:"Developer Security Testing and Evaluation",definition:"The organization requires the developer of the information system to create and implement a security assessment plan."},"CCI-003123":{control:"SA-11 (1)",title:"Developer Security Testing and Evaluation | Static Code Analysis",definition:"The organization requires the developer to employ static code analysis tools."},"CCI-001130":{control:"SC-5",title:"Denial of Service Protection",definition:"The information system protects against or limits the effects of organization-defined types of denial-of-service attacks."},"CCI-001184":{control:"SC-23",title:"Session Authenticity",definition:"The information system protects the authenticity of communications sessions."},"CCI-001188":{control:"SC-23 (1)",title:"Session Authenticity | Invalidate Session Identifiers at Logout",definition:"The information system invalidates session identifiers upon user logout or other session termination."},"CCI-002418":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system protects the confidentiality and integrity of transmitted information."},"CCI-002420":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure of information during transmission."},"CCI-002421":{control:"SC-8 (1)",title:"Transmission Confidentiality and Integrity | Cryptographic or Alternate Physical Protection",definition:"The information system implements cryptographic mechanisms to recognize changes to information during transmission."},"CCI-002422":{control:"SC-8",title:"Transmission Confidentiality and Integrity",definition:"The information system maintains the confidentiality and integrity of information during preparation for transmission and during reception."},"CCI-002450":{control:"SC-13",title:"Cryptographic Protection",definition:"The information system implements FIPS-validated or NSA-approved cryptography in accordance with applicable laws and policies."},"CCI-002530":{control:"SC-17",title:"Public Key Infrastructure Certificates",definition:"The organization issues public key certificates under an appropriate certificate policy or obtains public key certificates from an approved service provider."},"CCI-002824":{control:"SI-16",title:"Memory Protection",definition:"The information system implements organization-defined security safeguards to protect its memory from unauthorized code execution."},"CCI-003568":{control:"SC-28 (1)",title:"Protection of Information at Rest | Cryptographic Protection",definition:"The information system implements cryptographic mechanisms to prevent unauthorized disclosure and modification of information at rest."},"CCI-001310":{control:"SI-10",title:"Information Input Validation",definition:"The information system checks the validity of organization-defined information inputs."},"CCI-001312":{control:"SI-11",title:"Error Handling",definition:"The information system generates error messages that provide information necessary for corrective actions without revealing information exploitable by adversaries."},"CCI-001314":{control:"SI-11",title:"Error Handling",definition:"The information system reveals error messages only to authorized personnel."},"CCI-002235":{control:"SI-2 (2)",title:"Flaw Remediation | Automated Flaw Remediation Status",definition:"The organization employs automated mechanisms to determine the state of information system components with regard to flaw remediation."},"CCI-002605":{control:"SI-6",title:"Security Function Verification",definition:"The information system verifies the correct operation of security-relevant software and firmware."},"CCI-002617":{control:"SI-2",title:"Flaw Remediation",definition:"The organization installs security-relevant software and firmware updates within the time period directed by an authoritative source."},"CCI-002699":{control:"SI-6",title:"Security Function Verification",definition:"The information system notifies defined personnel of failed security verification tests."},"CCI-002702":{control:"SI-6",title:"Security Function Verification",definition:"The information system implements organization-defined security safeguards when anomalies in security function verification are discovered."},"CCI-000537":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of user-level information contained in the information system."},"CCI-000538":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of system-level information contained in the information system."},"CCI-000539":{control:"CP-9",title:"Information System Backup",definition:"The organization conducts backups of information system documentation including security-related documentation."},"CCI-001682":{control:"PM-6",title:"Information Security Measures of Performance",definition:"The organization develops, monitors, and reports on the results of information security measures of performance."},"CCI-000971":{control:"PS-4",title:"Personnel Termination",definition:"The organization, upon termination of individual employment, disables information system access within the organization-defined time period."}};function sr(t){return t==null?[]:Array.isArray(t)?t:[t]}function cr(t){return t==null?"":typeof t=="string"?t:Array.isArray(t)?cr(t[0]):typeof t=="object"&&"_"in t?String(t._):String(t)}async function lr(t){let e=await(0,Be.parseStringPromise)(t,{explicitArray:!1,tagNameProcessors:[Be.processors.stripPrefix]}),i=e.cci_list??e["cci-list"];if(!i)throw new Error("Not a valid CCI List XML \u2014 no <cci_list> root element found.");let l=sr((i.cci_items??i["cci-items"])?.cci_item??(i.cci_items??i["cci-items"])?.["cci-item"]);if(l.length===0)throw new Error("No <cci_item> elements found in the CCI List XML.");let n={};for(let s of l){let c=s?.$?.id||"";if(!c.startsWith("CCI-"))continue;let u=cr(s.definition),d=sr(s.references?.reference),f="",g="";for(let y of d){let w=y?.$??y??{},h=String(w.version??"");if((h==="5"||h==="4")&&(f=w.index??"",g=w.title??"",h==="5"))break}if(!f&&d.length>0){let y=d[d.length-1],w=y?.$??y??{};f=w.index??"",g=w.title??""}f&&(n[c]={control:f,title:g,definition:u})}return n}var si=/^[A-Z]{2}-\d+(\s*\(\d+\))?$/;function ai(t){let e=[],i="",l=!1;for(let n=0;n<t.length;n++){let s=t[n];l?s==='"'?n+1<t.length&&t[n+1]==='"'?(i+='"',n++):l=!1:i+=s:s==='"'?l=!0:s===","?(e.push(i.trim()),i=""):i+=s}return e.push(i.trim()),e}function ur(t){let e=t.split(/\r?\n/).filter(g=>g.trim().length>0);if(e.length<2)return[];let i=ai(e[0]),l=i.map(g=>g.toLowerCase().replace(/[_\s-]+/g," ").trim()),n=-1;for(let g=0;g<i.length;g++){let y=l[g];if(y.includes("control")&&(y.includes("id")||y.includes("identifier"))){n=g;break}}if(n<0)for(let g=0;g<i.length;g++){let y=0;for(let w=1;w<Math.min(e.length,10);w++){let h=ai(e[w]);h[g]&&si.test(h[g].trim())&&y++}if(y>=Math.min(e.length-1,3)){n=g;break}}if(n<0)for(let g=0;g<i.length;g++){if(si.test(i[g].trim()))continue;let y=l[g];if(y.includes("control")||y==="id"){n=g;break}}n<0&&(n=0);let s=l.findIndex((g,y)=>y!==n&&(g.includes("title")||g.includes("name"))),c=l.findIndex((g,y)=>y!==n&&g.includes("family")),u=l.findIndex((g,y)=>y!==n&&(g.includes("description")||g.includes("text"))),d=new Set,f=[];for(let g=1;g<e.length;g++){let y=ai(e[g]),w=(y[n]??"").trim();if(!w||!si.test(w))continue;let h=w.replace(/\s+/g," ");if(d.has(h))continue;d.add(h);let I={controlId:h};s>=0&&y[s]&&(I.title=y[s].trim()),c>=0&&y[c]&&(I.family=y[c].trim()),u>=0&&y[u]&&(I.description=y[u].trim());let T={};for(let E=0;E<i.length;E++)E===n||E===s||E===c||E===u||y[E]?.trim()&&(T[i[E]]=y[E].trim());Object.keys(T).length>0&&(I.extra=T),f.push(I)}return f}function ho(t){return t.replace(/\s*\(\d+\)$/,"").trim()}function mo(t){return t==="not_a_finding"||t==="not_applicable"?"passing":t==="open"?"open":"not_reviewed"}function go(t){return t.length===0?"not_covered":t.every(l=>l.mappedStatus==="passing")?"fully_satisfied":t.some(l=>l.mappedStatus==="passing")?"partially_satisfied":"at_risk"}var dr={not_covered:0,at_risk:1,partially_satisfied:2,fully_satisfied:3};function pr(t,e,i){let l={...ar,...i},n=new Map;for(let[f,g]of Object.entries(l)){let y=g.control;n.has(y)||n.set(y,new Set),n.get(y).add(f)}let s=new Map,c=0;for(let f of t.stigs)for(let g of f.rules)for(let y of g.ccis){if(!l[y]){c++;continue}s.has(y)||s.set(y,[]),s.get(y).push({rule:g,cci:y})}let u=[];for(let f of e){let g=!f.controlId.includes("("),y=new Set;if(g){for(let[I,T]of n.entries())if(ho(I)===f.controlId)for(let E of T)y.add(E)}else{let I=n.get(f.controlId);if(I)for(let T of I)y.add(T)}let w=new Set,h=[];for(let I of y){let T=s.get(I)??[];for(let{rule:E}of T){let k=`${E.group_id}::${I}`;w.has(k)||(w.add(k),h.push({groupId:E.group_id,ruleVersion:E.rule_version,severity:E.severity,ruleTitle:E.rule_title,status:E.status,mappedStatus:mo(E.status),cci:I}))}}u.push({control:f,status:go(h),mappedRules:h,ccis:[...y].sort()})}u.sort((f,g)=>{let y=dr[f.status]-dr[g.status];return y!==0?y:f.control.controlId.localeCompare(g.control.controlId,void 0,{numeric:!0})});let d=t.stigs.map(f=>f.display_name||f.stig_name).join(", ");return{analyzedAt:new Date().toISOString(),checklistTitle:t.title,stigName:d,totalNistControls:e.length,coveredControls:u.filter(f=>f.status!=="not_covered").length,uncoveredControls:u.filter(f=>f.status==="not_covered").length,fullySatisfiedControls:u.filter(f=>f.status==="fully_satisfied").length,partiallySatisfiedControls:u.filter(f=>f.status==="partially_satisfied").length,atRiskControls:u.filter(f=>f.status==="at_risk").length,controlMappings:u,unmappedCciCount:c}}function qt(t){return t.includes(",")||t.includes('"')||t.includes(`
`)?`"${t.replace(/"/g,'""')}"`:t}function fr(t){let e="Control ID,Title,Family,Status,Mapped Rules,Passing,Open,Not Reviewed,CCIs,Rule Details",i=t.controlMappings.map(l=>{let n=l.mappedRules.filter(d=>d.mappedStatus==="passing").length,s=l.mappedRules.filter(d=>d.mappedStatus==="open").length,c=l.mappedRules.filter(d=>d.mappedStatus==="not_reviewed").length,u=l.mappedRules.map(d=>`${d.groupId} (${d.status.replace(/_/g," ")})`).join("; ");return[qt(l.control.controlId),qt(l.control.title??""),qt(l.control.family??""),qt(l.status.replace(/_/g," ")),String(l.mappedRules.length),String(n),String(s),String(c),qt(l.ccis.join(", ")),qt(u)].join(",")});return[e,...i].join(`
`)}var $e=class t{static async show(e){let i=e;if(!i){let g=await rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select STIG Checklist for Crosswalk"});if(!g?.[0])return;i=g[0]}let l=JSON.parse(zt.readFileSync(i.fsPath,"utf-8")),n=await rt.window.showOpenDialog({canSelectMany:!1,filters:{CSV:["csv"]},title:"Select NIST 800-53 Controls CSV"});if(!n?.[0])return;let s=zt.readFileSync(n[0].fsPath,"utf-8"),c=ur(s);if(c.length===0){rt.window.showErrorMessage("No valid NIST 800-53 control IDs found in the CSV. Expected values like AC-2, CM-7, SI-10.");return}let u;if((await rt.window.showQuickPick(["Use bundled CCI mapping (covers common CCIs)","Import full CCI List XML from DISA"],{title:"CCI Mapping Source"}))?.includes("Import")){let g=await rt.window.showOpenDialog({canSelectMany:!1,filters:{"CCI List (XML)":["xml","XML"],"All Files":["*"]},title:"Select U_CCI_List.xml (extract U_CCI_List.zip from cyber.mil first)"});if(g?.[0])try{let y=zt.readFileSync(g[0].fsPath,"utf-8");u=await lr(y),rt.window.showInformationMessage(`Loaded ${Object.keys(u).length} CCI entries from XML.`)}catch(y){rt.window.showWarningMessage(`Failed to parse CCI List XML: ${y}. Falling back to bundled map.`)}}let f=pr(l,c,u);if(f.unmappedCciCount>0&&rt.window.showInformationMessage(`${f.unmappedCciCount} CCIs in this checklist could not be mapped. Import the full CCI List XML for complete coverage.`),t._panel)t._panel.reveal();else{let g=rt.window.createWebviewPanel("stigViewer.crosswalk",`NIST 800-53 Crosswalk \u2014 ${l.title}`,rt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});t._panel=g,g.onDidDispose(()=>{t._panel=void 0}),g.webview.onDidReceiveMessage(async y=>{if(y.type==="exportCsv"){let w=Nt.basename(i.fsPath,".cklb")+"_NIST_crosswalk.csv",h=await rt.window.showSaveDialog({defaultUri:rt.Uri.file(Nt.join(Nt.dirname(i.fsPath),w)),filters:{CSV:["csv"]},title:"Export Crosswalk Report"});h&&(zt.writeFileSync(h.fsPath,fr(f),"utf-8"),rt.window.showInformationMessage(`Exported crosswalk \u2192 ${Nt.basename(h.fsPath)}`))}})}t._panel.webview.html=wo(f)}};function st(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function yo(t){switch(t){case"fully_satisfied":return'<span class="st-icon st-sat">\u2714</span>';case"partially_satisfied":return'<span class="st-icon st-par">\u25D1</span>';case"at_risk":return'<span class="st-icon st-risk">\u26A0</span>';default:return'<span class="st-icon st-gap">\u25CF</span>'}}function vo(t){return t.replace(/_/g," ")}function wo(t){let i=[...new Set(t.controlMappings.map(s=>s.control.family).filter(Boolean))].sort().map(s=>`<option value="${st(s)}">${st(s)}</option>`).join(""),l=t.totalNistControls?Math.round(t.coveredControls/t.totalNistControls*100):0,n=t.controlMappings.map((s,c)=>{let u=s.mappedRules.filter(h=>h.mappedStatus==="passing").length,d=s.mappedRules.filter(h=>h.mappedStatus==="open").length,f=s.mappedRules.filter(h=>h.mappedStatus==="not_reviewed").length,g=s.mappedRules.map(h=>{let I=h.severity==="high"?"sev-high":h.severity==="medium"?"sev-med":"sev-low",T=h.mappedStatus==="passing"?"rs-pass":h.mappedStatus==="open"?"rs-open":"rs-nr";return`<tr>
        <td class="sub-td">${st(h.groupId)}</td>
        <td class="sub-td">${st(h.ruleVersion)}</td>
        <td class="sub-td ${I}">${h.severity==="high"?"CAT I":h.severity==="medium"?"CAT II":"CAT III"}</td>
        <td class="sub-td ${T}">${st(vo(h.status))}</td>
        <td class="sub-td sub-title">${st(h.ruleTitle)}</td>
        <td class="sub-td sub-cci">${st(h.cci)}</td>
      </tr>`}).join(""),y=s.control.description?`<div class="ctrl-desc">${st(s.control.description)}</div>`:s.status==="not_covered"?'<div class="ctrl-desc muted">No STIG rules in this checklist map to this control. This control may be addressed by other STIGs or non-STIG evidence.</div>':"",w=s.mappedRules.length>0?`<table class="sub-tbl">
      <thead><tr><th>Vuln ID</th><th>Rule Version</th><th>CAT</th><th>Status</th><th>Rule Title</th><th>CCI</th></tr></thead>
      <tbody>${g}</tbody>
    </table>`:"";return`<tr class="cw-row" data-idx="${c}" data-status="${s.status}" data-family="${st(s.control.family??"")}">
      <td class="td-st">${yo(s.status)}</td>
      <td class="td-ctrl">${st(s.control.controlId)}</td>
      <td class="td-title">${st(s.control.title??"")}</td>
      <td class="td-fam">${st(s.control.family??"")}</td>
      <td class="td-n">${s.mappedRules.length}</td>
      <td class="td-n td-pass">${u||""}</td>
      <td class="td-n td-open">${d||""}</td>
      <td class="td-n td-nr">${f||""}</td>
      <td class="td-ccis">${st(s.ccis.slice(0,5).join(", "))}${s.ccis.length>5?"\u2026":""}</td>
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
<style>${bo}</style>
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
</body></html>`}var bo=`
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
`;var z=U(require("vscode")),di=U(require("path"));var Ot="The selected file is not valid HDF JSON. Expected structure: profiles[] with controls[].";function gr(t){let e;try{e=JSON.parse(t)}catch(l){throw new Error(`${Ot} (JSON parse error: ${l.message})`)}if(!e||typeof e!="object")throw new Error(Ot);let i=e;if(!Array.isArray(i.profiles)||i.profiles.length===0)throw new Error(Ot);for(let l of i.profiles){if(!l||typeof l!="object")throw new Error(Ot);if(!Array.isArray(l.controls))throw new Error(Ot);for(let n of l.controls){if(!n||typeof n!="object")throw new Error(Ot);if(typeof n.id!="string"||typeof n.title!="string")throw new Error(Ot);(!n.tags||typeof n.tags!="object")&&(n.tags={})}}return i}function yr(t){if(!t||t.length===0)return"not_reviewed";if(t.some(s=>s.status==="failed"))return"open";let i=t.some(s=>s.status==="error"),l=t.some(s=>s.status==="passed");return t.every(s=>s.status==="skipped")?"not_applicable":i&&!l?"not_reviewed":l?"not_a_finding":"not_reviewed"}function Co(t){let e=t.tags?.severity;return e==="high"||e==="medium"||e==="low"?e:typeof t.impact=="number"?t.impact>=.7?"high":t.impact>=.4?"medium":"low":"medium"}function ci(t,e){return t.descriptions?t.descriptions.find(l=>l.label===e)?.data??"":""}function Io(t){return t.desc?t.desc:ci(t,"default")}function vr(t){if(!t.results||t.results.length===0)return t.code?`[HDF IMPORT] No test results recorded.
InSpec control source (truncated):
${t.code.length>500?`${t.code.slice(0,500)}\u2026`:t.code}`:"";let e=["[HDF IMPORT] InSpec automated scan results:",""];for(let i=0;i<t.results.length;i++){let l=t.results[i];e.push(`Test ${i+1}: ${l.status.toUpperCase()}`),e.push(`  ${l.code_desc}`),l.message&&e.push(`  Message: ${l.message}`),l.exception&&e.push(`  Exception: ${l.exception}`),l.run_time!==void 0&&e.push(`  Duration: ${l.run_time}s`),l.start_time&&e.push(`  Started: ${l.start_time}`),e.push("")}return e.join(`
`).trim()}function To(t,e,i){return e?!t||!i?e:`${t}

--- HDF Import ---
${e}`:t}function xo(t,e,i){let l=e.passthrough;if(!l)return;let n=l.target;n&&(!t.host_name&&n.hostname&&(t.host_name=n.hostname),!t.fqdn&&n.fqdn&&(t.fqdn=n.fqdn),!t.ip_address&&n.ip_address&&(t.ip_address=n.ip_address),!t.mac_address&&n.mac_address&&(t.mac_address=n.mac_address));let s={};for(let[c,u]of Object.entries(l))c!=="target"&&(s[c]=u);if(Object.keys(s).length>0){let c=`[HDF passthrough] ${JSON.stringify(s)}`;t.comments?t.comments.includes("[HDF passthrough]")||(t.comments=`${t.comments}
${c}`):t.comments=c}if(i.length>1){let c=`[HDF] Scan covered ${i.length} profiles: ${i.map(u=>u.title||u.name).join(", ")}`;t.comments?t.comments.includes("[HDF] Scan covered")||(t.comments=`${t.comments}
${c}`):t.comments=c}}function li(t,e,i){let l={overwriteExistingStatus:i?.overwriteExistingStatus??!1,preserveExistingFindingDetails:i?.preserveExistingFindingDetails??!0,updateTargetData:i?.updateTargetData??!0},n=JSON.parse(JSON.stringify(t)),s=new Map,c=new Map;for(let v of n.stigs)for(let r of v.rules)r.rule_version&&s.set(r.rule_version,r),r.group_id&&c.set(r.group_id,r);let u=[],d={passed:0,failed:0,skipped:0,error:0,noResults:0},f=[],g=[],y=new Set,w=0,h=0,I=new Map;for(let v of e.profiles)for(let r of v.controls){if(w++,!r.results||r.results.length===0)d.noResults++;else{let S=r.results.some(O=>O.status==="failed"),m=r.results.some(O=>O.status==="error"),C=r.results.some(O=>O.status==="passed"),D=r.results.every(O=>O.status==="skipped");S?d.failed++:D?d.skipped++:C?d.passed++:m?d.error++:d.noResults++}r.tags?.stig_id||h++;let a,b,A=r.tags?.stig_id;if(A&&s.has(A)?(a=s.get(A),b="rule_version"):r.id&&c.has(r.id)?(a=c.get(r.id),b="group_id"):r.tags?.gid&&c.has(r.tags.gid)&&(a=c.get(r.tags.gid),b="gid_tag"),!a||!b){g.push(r.tags?.stig_id||r.id);continue}I.set(a.uuid,{control:r,rule:a,matchedBy:b})}let T=new Date().toISOString();for(let{control:v,rule:r,matchedBy:a}of I.values()){let b=yr(v.results),A=r.status,S=l.overwriteExistingStatus||r.status==="not_reviewed",m=A;S&&(r.status=b,m=b);let C=vr(v);C&&(r.finding_details=To(r.finding_details,C,l.preserveExistingFindingDetails)),r.updatedAt=T,y.add(r.uuid),f.push({ruleVersion:r.rule_version,groupId:r.group_id,oldStatus:A,newStatus:m,matchedBy:a})}let E=[];for(let v of n.stigs)for(let r of v.rules)y.has(r.uuid)||E.push(r.rule_version||r.group_id);l.updateTargetData&&xo(n.target_data,e,e.profiles),h>0&&u.push(`${h} HDF control(s) lacked tags.stig_id; matching fell back to control.id / tags.gid.`);let k=e.profiles[0],x={profileName:k?.title||k?.name||"(unknown profile)",profileVersion:k?.version,hostName:e.passthrough?.target?.hostname||e.passthrough?.target?.fqdn,totalControls:w,matchedRules:y.size,unmatchedControls:g.length,unmatchedRules:E.length,statusBreakdown:d,appliedChanges:f,unmatchedControlIds:g,unmatchedRuleVersions:E,warnings:u};return{updated:n,summary:x}}function _o(){return{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null}}function So(t,e,i){let l=Io(t),n=ci(t,"check"),s=ci(t,"fix"),c=Co(t),u=yr(t.results),d=vr(t),f=ut(),g=t.tags?.gid||t.id,y=t.tags?.rid||"",w=t.tags?.stig_id||t.id,h=t.tags?.gtitle||"",I=Array.isArray(t.tags?.cci)?[...t.tags.cci]:[],T=Array.isArray(t.tags?.legacy)?[...t.tags.legacy]:[];return{uuid:f,stig_uuid:e,target_key:null,stig_ref:null,group_id:g,rule_id:y,rule_id_src:y,weight:"10.0",classification:"Unclassified",severity:c,rule_version:w,group_title:h,rule_title:t.title,fix_text:s,false_positives:"",false_negatives:"",discussion:l,check_content:n,documentable:"",mitigations:"",potential_impacts:"",third_party_tools:"",mitigation_control:"",responsibility:"",security_override_guidance:"",ia_controls:"",check_content_ref:{href:"",name:""},legacy_ids:T,ccis:I,group_tree:[{id:g,title:h,description:l}],createdAt:i,updatedAt:i,STIGUuid:e,status:u,overrides:{},comments:"",finding_details:d,srg_id:h}}function wr(t){let e=new Date().toISOString(),i=ut(),l=[];for(let d of t.profiles){let f=ut(),g=d.controls.map(w=>So(w,f,e)),y=d.title||d.name||"InSpec Profile";l.push({stig_name:y,display_name:y,stig_id:d.name,release_info:d.version?`Version ${d.version}`:"",version:d.version||"1",uuid:f,reference_identifier:d.name,size:g.length,rules:g})}let n=_o(),s=t.passthrough?.target;if(s&&(s.hostname&&(n.host_name=s.hostname),s.fqdn&&(n.fqdn=s.fqdn),s.ip_address&&(n.ip_address=s.ip_address),s.mac_address&&(n.mac_address=s.mac_address)),t.passthrough){let d={};for(let[f,g]of Object.entries(t.passthrough))f!=="target"&&(d[f]=g);Object.keys(d).length>0&&(n.comments=`[HDF passthrough] ${JSON.stringify(d)}`)}let c=t.profiles[0];return{title:c?.title||c?.name||"InSpec / HDF Import",id:i,stigs:l,active:!0,mode:1,has_path:!0,target_data:n,cklb_version:"1"}}var hr={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"};function mr(t){return t.replace(/\|/g,"\\|").replace(/\n/g," ")}function br(t,e){let i=[];if(i.push("# HDF Import Report"),i.push(""),i.push(`**Source:** ${t.profileName}`),t.profileVersion&&i.push(`**Profile Version:** ${t.profileVersion}`),t.hostName&&i.push(`**Target Host:** ${t.hostName}`),i.push(`**Imported:** ${new Date().toISOString()}`),i.push(`**Checklist:** ${e}`),i.push(""),i.push("## Summary"),i.push(""),i.push("| Metric | Count |"),i.push("|--------|-------|"),i.push(`| HDF Controls | ${t.totalControls} |`),i.push(`| Matched to Checklist | ${t.matchedRules} |`),i.push(`| Unmatched HDF Controls | ${t.unmatchedControls} |`),i.push(`| Unmatched Checklist Rules | ${t.unmatchedRules} |`),i.push(""),i.push("## Status Breakdown (HDF Results)"),i.push(""),i.push("| Status | Count |"),i.push("|--------|-------|"),i.push(`| Open (failed) | ${t.statusBreakdown.failed} |`),i.push(`| Not a Finding (passed) | ${t.statusBreakdown.passed} |`),i.push(`| Not Applicable (skipped) | ${t.statusBreakdown.skipped} |`),i.push(`| Not Reviewed (error/no results) | ${t.statusBreakdown.error+t.statusBreakdown.noResults} |`),i.push(""),t.warnings.length>0){i.push("## Warnings"),i.push("");for(let l of t.warnings)i.push(`- ${l}`);i.push("")}if(i.push("## Rules Updated"),i.push(""),t.appliedChanges.length===0)i.push("_No rules were updated._");else{i.push("| Rule Version | Vuln ID | Old Status | New Status | Matched By |"),i.push("|--------------|---------|------------|------------|------------|");for(let l of t.appliedChanges)i.push(`| ${mr(l.ruleVersion)} | ${mr(l.groupId)} | ${hr[l.oldStatus]||l.oldStatus} | ${hr[l.newStatus]||l.newStatus} | ${l.matchedBy} |`)}if(i.push(""),i.push("## Unmatched HDF Controls"),i.push(""),i.push("These controls in the HDF file had no corresponding rule in the checklist. This may indicate a STIG version mismatch or that the HDF covers additional controls beyond the checklist's STIG."),i.push(""),t.unmatchedControlIds.length===0)i.push("_None._");else for(let l of t.unmatchedControlIds)i.push(`- ${l}`);if(i.push(""),i.push("## Unmatched Checklist Rules"),i.push(""),i.push("These rules in the checklist were not addressed by any HDF control. They retain their previous status."),i.push(""),t.unmatchedRuleVersions.length===0)i.push("_None._");else for(let l of t.unmatchedRuleVersions)i.push(`- ${l}`);return i.push(""),i.join(`
`)}async function Ir(t,e){let i=e;if(!i){let d=await z.window.showOpenDialog({canSelectMany:!1,filters:{"HDF / InSpec JSON":["json"]},title:"Select InSpec / HDF Results File"});if(!d?.[0])return;i=d[0]}let l;try{let d=await z.workspace.fs.readFile(i),f=new TextDecoder("utf-8").decode(d);l=gr(f)}catch(d){z.window.showErrorMessage(d.message);return}let n=at.activeDocumentUri,s;if(n){let d=await z.window.showQuickPick([{label:"Apply results to the current checklist",description:di.basename(n.fsPath),value:"apply"},{label:"Generate a new checklist from these results",description:l.profiles[0]?.title||l.profiles[0]?.name,value:"new"}],{placeHolder:"How should the HDF file be imported?"});if(!d)return;s=d.value}else s="new";let c=null,u=null;if(s==="apply"&&n)try{let d=await z.workspace.openTextDocument(n);c=JSON.parse(d.getText()),u=n}catch(d){z.window.showErrorMessage(`Failed to read active checklist: ${d}`);return}Eo(t,{hdf:l,checklistDoc:c,checklistUri:u,mode:s})}function Eo(t,e){let i=z.window.createWebviewPanel("stigWorkbenchHdfImport","HDF Import",z.ViewColumn.Active,{enableScripts:!0,retainContextWhenHidden:!0});i.webview.html=Oo();let l=()=>{if(e.mode==="apply"&&e.checklistDoc){let s=Cr(e.checklistDoc,e.hdf,ie());i.webview.postMessage({type:"showPreview",summary:s.summary,profile:ui(e.hdf),checklistTitle:e.checklistDoc.title,options:ie()})}else Do(i,e)},n=i.webview.onDidReceiveMessage(async s=>{if(s?.type==="ready"&&l(),s?.type==="reproject"&&e.mode==="apply"&&e.checklistDoc){let c=Cr(e.checklistDoc,e.hdf,s.options||ie());i.webview.postMessage({type:"updatePreview",summary:c.summary,options:s.options||ie()})}s?.type==="apply"&&e.mode==="apply"&&e.checklistDoc&&e.checklistUri&&await Ao(i,e,s.options||ie()),s?.type==="downloadReport"&&s.summary&&s.checklistTitle!==void 0&&await ko(s.summary,s.checklistTitle),s?.type==="cancel"&&i.dispose()});i.onDidDispose(()=>n.dispose())}function ie(){return{overwriteExistingStatus:!1,preserveExistingFindingDetails:!0,updateTargetData:!0}}function ui(t){let e=t.profiles[0];return{name:e?.title||e?.name||"(unknown)",version:e?.version||"",hostName:t.passthrough?.target?.hostname||t.passthrough?.target?.fqdn||"",inspecVersion:t.version||"",profileCount:t.profiles.length}}function Cr(t,e,i){let{summary:l}=li(t,e,i);return{summary:l}}async function Ao(t,e,i){if(!(!e.checklistDoc||!e.checklistUri))try{let{updated:l,summary:n}=li(e.checklistDoc,e.hdf,i),s=await z.workspace.openTextDocument(e.checklistUri),c=new z.WorkspaceEdit,u=new z.Range(s.positionAt(0),s.positionAt(s.getText().length));if(c.replace(s.uri,u,JSON.stringify(l,null,2)),!await z.workspace.applyEdit(c)){z.window.showErrorMessage("HDF import: failed to apply edit to the checklist.");return}await s.save(),await z.commands.executeCommand("vscode.openWith",e.checklistUri,"stigViewer.cklbEditor"),t.webview.postMessage({type:"showSummary",summary:n,profile:ui(e.hdf),checklistTitle:l.title}),z.window.showInformationMessage(`HDF import: ${n.matchedRules} rule(s) updated, ${n.unmatchedControls} unmatched control(s).`)}catch(l){z.window.showErrorMessage(`HDF import failed: ${l}`)}}async function Do(t,e){try{let i=wr(e.hdf),l=(i.title||"hdf-import").replace(/\s+/g,"-")+".cklb",n=await z.window.showSaveDialog({title:"Save New Checklist",defaultUri:z.Uri.file(l),filters:{"CKLB Checklist":["cklb"]}});if(!n){t.dispose();return}let s=new TextEncoder().encode(JSON.stringify(i,null,2));await z.workspace.fs.writeFile(n,s),await z.commands.executeCommand("vscode.openWith",n,"stigViewer.cklbEditor");let c=e.hdf.profiles.reduce((I,T)=>I+T.controls.length,0),u=0,d=0,f=0,g=0,y=0;for(let I of e.hdf.profiles)for(let T of I.controls){if(!T.results||T.results.length===0){y++;continue}let E=T.results.some(r=>r.status==="failed"),k=T.results.some(r=>r.status==="error"),x=T.results.some(r=>r.status==="passed"),v=T.results.every(r=>r.status==="skipped");E?d++:v?f++:x?u++:k?g++:y++}let w=ui(e.hdf),h={profileName:w.name,profileVersion:w.version,hostName:w.hostName,totalControls:c,matchedRules:c,unmatchedControls:0,unmatchedRules:0,statusBreakdown:{passed:u,failed:d,skipped:f,error:g,noResults:y},appliedChanges:[],unmatchedControlIds:[],unmatchedRuleVersions:[],warnings:[]};t.webview.postMessage({type:"showSummary",summary:h,profile:w,checklistTitle:i.title,modeB:!0}),z.window.showInformationMessage(`HDF import: created new checklist with ${c} rules.`)}catch(i){z.window.showErrorMessage(`HDF new-checklist import failed: ${i}`),t.dispose()}}async function ko(t,e){let i=br(t,e),l=`hdf-import-${(t.profileName||"report").replace(/\s+/g,"-")}.md`,n=await z.window.showSaveDialog({title:"Save HDF Import Report",defaultUri:z.Uri.file(l),filters:{Markdown:["md"]}});if(!n)return;let s=new TextEncoder().encode(i);await z.workspace.fs.writeFile(n,s),z.window.showInformationMessage(`HDF report saved: ${di.basename(n.fsPath)}`)}function No(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}function Oo(){let t=No();return`<!DOCTYPE html>
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
</html>`}function Po(t){t.subscriptions.push(at.register(t)),t.subscriptions.push(j.commands.registerCommand("stigViewer.openFile",async()=>{let e=await j.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});e?.[0]&&await j.commands.executeCommand("vscode.openWith",e[0],"stigViewer.cklbEditor")})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importXccdf",async e=>{if(!e){let i=await j.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!i?.[0])return;e=i[0]}try{await Hn(e)}catch(i){j.window.showErrorMessage(`XCCDF import failed: ${i}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importCkl",async e=>{if(!e){let i=await j.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!i?.[0])return;e=i[0]}try{await Xn(e)}catch(i){j.window.showErrorMessage(`CKL import failed: ${i}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await Qn(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`SCAP import failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.mergeFindings",async()=>{try{await Gn(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`Merge failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.dashboard",async()=>{try{await Me.show(t)}catch(e){j.window.showErrorMessage(`Dashboard failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.diffChecklists",async()=>{try{await Le.show(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`Diff failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.scanRepo",async()=>{try{await tr(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`Repo scan failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importSarif",async()=>{try{await er(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`SARIF import failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importAudit",async()=>{try{await nr(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`Dependency audit import failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.exportEvidence",async()=>{try{await or(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`Evidence package failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.nistCrosswalk",async()=>{try{await $e.show(at.activeDocumentUri)}catch(e){j.window.showErrorMessage(`NIST crosswalk failed: ${e}`)}})),t.subscriptions.push(j.commands.registerCommand("stigViewer.importHdf",async e=>{try{await Ir(t,e)}catch(i){j.window.showErrorMessage(`HDF import failed: ${i}`)}}))}function Mo(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
