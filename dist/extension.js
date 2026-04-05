"use strict";var oi=Object.create;var te=Object.defineProperty;var si=Object.getOwnPropertyDescriptor;var ai=Object.getOwnPropertyNames;var ci=Object.getPrototypeOf,li=Object.prototype.hasOwnProperty;var $=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ui=(e,t)=>{for(var s in t)te(e,s,{get:t[s],enumerable:!0})},ar=(e,t,s,w)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ai(t))!li.call(e,o)&&o!==s&&te(e,o,{get:()=>t[o],enumerable:!(w=si(t,o))||w.enumerable});return e};var U=(e,t,s)=>(s=e!=null?oi(ci(e)):{},ar(t||!e||!e.__esModule?te(s,"default",{value:e,enumerable:!0}):s,e)),di=e=>ar(te({},"__esModule",{value:!0}),e);var ce=$(je=>{(function(){je.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(je)});var mt=$((yr,It)=>{(function(){var e,t,s,w,o,p,c,l=[].slice,d={}.hasOwnProperty;e=function(){var m,T,_,b,h,v;if(v=arguments[0],h=2<=arguments.length?l.call(arguments,1):[],o(Object.assign))Object.assign.apply(null,arguments);else for(m=0,_=h.length;m<_;m++)if(b=h[m],b!=null)for(T in b)d.call(b,T)&&(v[T]=b[T]);return v},o=function(m){return!!m&&Object.prototype.toString.call(m)==="[object Function]"},p=function(m){var T;return!!m&&((T=typeof m)=="function"||T==="object")},s=function(m){return o(Array.isArray)?Array.isArray(m):Object.prototype.toString.call(m)==="[object Array]"},w=function(m){var T;if(s(m))return!m.length;for(T in m)if(d.call(m,T))return!1;return!0},c=function(m){var T,_;return p(m)&&(_=Object.getPrototypeOf(m))&&(T=_.constructor)&&typeof T=="function"&&T instanceof T&&Function.prototype.toString.call(T)===Function.prototype.toString.call(Object)},t=function(m){return o(m.valueOf)?m.valueOf():m},It.exports.assign=e,It.exports.isFunction=o,It.exports.isObject=p,It.exports.isArray=s,It.exports.isEmpty=w,It.exports.isPlainObject=c,It.exports.getValue=t}).call(yr)});var Xe=$((wr,br)=>{(function(){var e;br.exports=e=(function(){function t(){}return t.prototype.hasFeature=function(s,w){return!0},t.prototype.createDocumentType=function(s,w,o){throw new Error("This DOM method is not implemented.")},t.prototype.createDocument=function(s,w,o){throw new Error("This DOM method is not implemented.")},t.prototype.createHTMLDocument=function(s){throw new Error("This DOM method is not implemented.")},t.prototype.getFeature=function(s,w){throw new Error("This DOM method is not implemented.")},t})()}).call(wr)});var Tr=$((vr,_r)=>{(function(){var e;_r.exports=e=(function(){function t(){}return t.prototype.handleError=function(s){throw new Error(s)},t})()}).call(vr)});var Cr=$((Ir,Er)=>{(function(){var e;Er.exports=e=(function(){function t(s){this.arr=s||[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.arr.length}}),t.prototype.item=function(s){return this.arr[s]||null},t.prototype.contains=function(s){return this.arr.indexOf(s)!==-1},t})()}).call(Ir)});var Sr=$((xr,Dr)=>{(function(){var e,t,s;t=Tr(),s=Cr(),Dr.exports=e=(function(){function w(){var o;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new t,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=o=Object.create(this.defaultParams)}return Object.defineProperty(w.prototype,"parameterNames",{get:function(){return new s(Object.keys(this.defaultParams))}}),w.prototype.getParameter=function(o){return this.params.hasOwnProperty(o)?this.params[o]:null},w.prototype.canSetParameter=function(o,p){return!0},w.prototype.setParameter=function(o,p){return p!=null?this.params[o]=p:delete this.params[o]},w})()}).call(xr)});var K=$((Nr,Ar)=>{(function(){Ar.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(Nr)});var Ve=$((kr,Or)=>{(function(){var e,t,s;e=K(),s=at(),Or.exports=t=(function(){function w(o,p,c){if(this.parent=o,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),p==null)throw new Error("Missing attribute name. "+this.debugInfo(p));this.name=this.stringify.name(p),this.value=this.stringify.attValue(c),this.type=e.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(w.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(w.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(w.prototype,"textContent",{get:function(){return this.value},set:function(o){return this.value=o||""}}),Object.defineProperty(w.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(w.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(w.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"specified",{get:function(){return!0}}),w.prototype.clone=function(){return Object.create(this)},w.prototype.toString=function(o){return this.options.writer.attribute(this,this.options.writer.filterOptions(o))},w.prototype.debugInfo=function(o){return o=o||this.name,o==null?"parent: <"+this.parent.name+">":"attribute: {"+o+"}, parent: <"+this.parent.name+">"},w.prototype.isEqualNode=function(o){return!(o.namespaceURI!==this.namespaceURI||o.prefix!==this.prefix||o.localName!==this.localName||o.value!==this.value)},w})()}).call(kr)});var le=$((Lr,Pr)=>{(function(){var e;Pr.exports=e=(function(){function t(s){this.nodes=s}return Object.defineProperty(t.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.getNamedItem=function(s){return this.nodes[s]},t.prototype.setNamedItem=function(s){var w;return w=this.nodes[s.nodeName],this.nodes[s.nodeName]=s,w||null},t.prototype.removeNamedItem=function(s){var w;return w=this.nodes[s],delete this.nodes[s],w||null},t.prototype.item=function(s){return this.nodes[Object.keys(this.nodes)[s]]||null},t.prototype.getNamedItemNS=function(s,w){throw new Error("This DOM method is not implemented.")},t.prototype.setNamedItemNS=function(s){throw new Error("This DOM method is not implemented.")},t.prototype.removeNamedItemNS=function(s,w){throw new Error("This DOM method is not implemented.")},t})()}).call(Lr)});var ue=$((Mr,Rr)=>{(function(){var e,t,s,w,o,p,c,l,d,m=function(_,b){for(var h in b)T.call(b,h)&&(_[h]=b[h]);function v(){this.constructor=_}return v.prototype=b.prototype,_.prototype=new v,_.__super__=b.prototype,_},T={}.hasOwnProperty;d=mt(),l=d.isObject,c=d.isFunction,p=d.getValue,o=at(),e=K(),t=Ve(),w=le(),Rr.exports=s=(function(_){m(b,_);function b(h,v,E){var k,N,I,f;if(b.__super__.constructor.call(this,h),v==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(v),this.type=e.Element,this.attribs={},this.schemaTypeInfo=null,E!=null&&this.attribute(E),h.type===e.Document&&(this.isRoot=!0,this.documentObject=h,h.rootObject=this,h.children)){for(f=h.children,N=0,I=f.length;N<I;N++)if(k=f[N],k.type===e.DocType){k.name=this.name;break}}}return Object.defineProperty(b.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(b.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(b.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(b.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(b.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(b.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new w(this.attribs)),this.attributeMap}}),b.prototype.clone=function(){var h,v,E,k;E=Object.create(this),E.isRoot&&(E.documentObject=null),E.attribs={},k=this.attribs;for(v in k)T.call(k,v)&&(h=k[v],E.attribs[v]=h.clone());return E.children=[],this.children.forEach(function(N){var I;return I=N.clone(),I.parent=E,E.children.push(I)}),E},b.prototype.attribute=function(h,v){var E,k;if(h!=null&&(h=p(h)),l(h))for(E in h)T.call(h,E)&&(k=h[E],this.attribute(E,k));else c(v)&&(v=v.apply()),this.options.keepNullAttributes&&v==null?this.attribs[h]=new t(this,h,""):v!=null&&(this.attribs[h]=new t(this,h,v));return this},b.prototype.removeAttribute=function(h){var v,E,k;if(h==null)throw new Error("Missing attribute name. "+this.debugInfo());if(h=p(h),Array.isArray(h))for(E=0,k=h.length;E<k;E++)v=h[E],delete this.attribs[v];else delete this.attribs[h];return this},b.prototype.toString=function(h){return this.options.writer.element(this,this.options.writer.filterOptions(h))},b.prototype.att=function(h,v){return this.attribute(h,v)},b.prototype.a=function(h,v){return this.attribute(h,v)},b.prototype.getAttribute=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h].value:null},b.prototype.setAttribute=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNode=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h]:null},b.prototype.setAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.removeAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setAttributeNS=function(h,v,E){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.removeAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getAttributeNodeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setAttributeNodeNS=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagNameNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.hasAttribute=function(h){return this.attribs.hasOwnProperty(h)},b.prototype.hasAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setIdAttribute=function(h,v){return this.attribs.hasOwnProperty(h)?this.attribs[h].isId:v},b.prototype.setIdAttributeNS=function(h,v,E){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.setIdAttributeNode=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByTagNameNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.getElementsByClassName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},b.prototype.isEqualNode=function(h){var v,E,k;if(!b.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.namespaceURI!==this.namespaceURI||h.prefix!==this.prefix||h.localName!==this.localName||h.attribs.length!==this.attribs.length)return!1;for(v=E=0,k=this.attribs.length-1;0<=k?E<=k:E>=k;v=0<=k?++E:--E)if(!this.attribs[v].isEqualNode(h.attribs[v]))return!1;return!0},b})(o)}).call(Mr)});var Vt=$((Fr,$r)=>{(function(){var e,t,s=function(o,p){for(var c in p)w.call(p,c)&&(o[c]=p[c]);function l(){this.constructor=o}return l.prototype=p.prototype,o.prototype=new l,o.__super__=p.prototype,o},w={}.hasOwnProperty;t=at(),$r.exports=e=(function(o){s(p,o);function p(c){p.__super__.constructor.call(this,c),this.value=""}return Object.defineProperty(p.prototype,"data",{get:function(){return this.value},set:function(c){return this.value=c||""}}),Object.defineProperty(p.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(p.prototype,"textContent",{get:function(){return this.value},set:function(c){return this.value=c||""}}),p.prototype.clone=function(){return Object.create(this)},p.prototype.substringData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.appendData=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.insertData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.deleteData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.replaceData=function(c,l,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.isEqualNode=function(c){return!(!p.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.data!==this.data)},p})(t)}).call(Fr)});var de=$((Br,Ur)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),s=Vt(),Ur.exports=t=(function(p){w(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=e.CData,this.value=this.stringify.cdata(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.cdata(this,this.options.writer.filterOptions(l))},c})(s)}).call(Br)});var pe=$((qr,jr)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Vt(),jr.exports=s=(function(p){w(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=e.Comment,this.value=this.stringify.comment(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.comment(this,this.options.writer.filterOptions(l))},c})(t)}).call(qr)});var fe=$((Xr,Vr)=>{(function(){var e,t,s,w,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;w=mt().isObject,s=at(),e=K(),Vr.exports=t=(function(c){o(l,c);function l(d,m,T,_){var b;l.__super__.constructor.call(this,d),w(m)&&(b=m,m=b.version,T=b.encoding,_=b.standalone),m||(m="1.0"),this.type=e.Declaration,this.version=this.stringify.xmlVersion(m),T!=null&&(this.encoding=this.stringify.xmlEncoding(T)),_!=null&&(this.standalone=this.stringify.xmlStandalone(_))}return l.prototype.toString=function(d){return this.options.writer.declaration(this,this.options.writer.filterOptions(d))},l})(s)}).call(Xr)});var he=$((Gr,zr)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;s=at(),e=K(),zr.exports=t=(function(p){w(c,p);function c(l,d,m,T,_,b){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(m==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(d));if(!T)throw new Error("Missing DTD attribute type. "+this.debugInfo(d));if(!_)throw new Error("Missing DTD attribute default. "+this.debugInfo(d));if(_.indexOf("#")!==0&&(_="#"+_),!_.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(d));if(b&&!_.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(d));this.elementName=this.stringify.name(d),this.type=e.AttributeDeclaration,this.attributeName=this.stringify.name(m),this.attributeType=this.stringify.dtdAttType(T),b&&(this.defaultValue=this.stringify.dtdAttDefault(b)),this.defaultValueType=_}return c.prototype.toString=function(l){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(l))},c})(s)}).call(Gr)});var ge=$((Wr,Hr)=>{(function(){var e,t,s,w,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;w=mt().isObject,s=at(),e=K(),Hr.exports=t=(function(c){o(l,c);function l(d,m,T,_){if(l.__super__.constructor.call(this,d),T==null)throw new Error("Missing DTD entity name. "+this.debugInfo(T));if(_==null)throw new Error("Missing DTD entity value. "+this.debugInfo(T));if(this.pe=!!m,this.name=this.stringify.name(T),this.type=e.EntityDeclaration,!w(_))this.value=this.stringify.dtdEntityValue(_),this.internal=!0;else{if(!_.pubID&&!_.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(T));if(_.pubID&&!_.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(T));if(this.internal=!1,_.pubID!=null&&(this.pubID=this.stringify.dtdPubID(_.pubID)),_.sysID!=null&&(this.sysID=this.stringify.dtdSysID(_.sysID)),_.nData!=null&&(this.nData=this.stringify.dtdNData(_.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(T))}}return Object.defineProperty(l.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(l.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(l.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(l.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(l.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(l.prototype,"xmlVersion",{get:function(){return null}}),l.prototype.toString=function(d){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(d))},l})(s)}).call(Wr)});var me=$((Kr,Yr)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;s=at(),e=K(),Yr.exports=t=(function(p){w(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());m||(m="(#PCDATA)"),Array.isArray(m)&&(m="("+m.join(",")+")"),this.name=this.stringify.name(d),this.type=e.ElementDeclaration,this.value=this.stringify.dtdElementValue(m)}return c.prototype.toString=function(l){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(l))},c})(s)}).call(Kr)});var ye=$((Jr,Qr)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;s=at(),e=K(),Qr.exports=t=(function(p){w(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD notation name. "+this.debugInfo(d));if(!m.pubID&&!m.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(d));this.name=this.stringify.name(d),this.type=e.NotationDeclaration,m.pubID!=null&&(this.pubID=this.stringify.dtdPubID(m.pubID)),m.sysID!=null&&(this.sysID=this.stringify.dtdSysID(m.sysID))}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),c.prototype.toString=function(l){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(l))},c})(s)}).call(Jr)});var we=$((Zr,tn)=>{(function(){var e,t,s,w,o,p,c,l,d,m=function(_,b){for(var h in b)T.call(b,h)&&(_[h]=b[h]);function v(){this.constructor=_}return v.prototype=b.prototype,_.prototype=new v,_.__super__=b.prototype,_},T={}.hasOwnProperty;d=mt().isObject,l=at(),e=K(),t=he(),w=ge(),s=me(),o=ye(),c=le(),tn.exports=p=(function(_){m(b,_);function b(h,v,E){var k,N,I,f,i,n;if(b.__super__.constructor.call(this,h),this.type=e.DocType,h.children){for(f=h.children,N=0,I=f.length;N<I;N++)if(k=f[N],k.type===e.Element){this.name=k.name;break}}this.documentObject=h,d(v)&&(i=v,v=i.pubID,E=i.sysID),E==null&&(n=[v,E],E=n[0],v=n[1]),v!=null&&(this.pubID=this.stringify.dtdPubID(v)),E!=null&&(this.sysID=this.stringify.dtdSysID(E))}return Object.defineProperty(b.prototype,"entities",{get:function(){var h,v,E,k,N;for(k={},N=this.children,v=0,E=N.length;v<E;v++)h=N[v],h.type===e.EntityDeclaration&&!h.pe&&(k[h.name]=h);return new c(k)}}),Object.defineProperty(b.prototype,"notations",{get:function(){var h,v,E,k,N;for(k={},N=this.children,v=0,E=N.length;v<E;v++)h=N[v],h.type===e.NotationDeclaration&&(k[h.name]=h);return new c(k)}}),Object.defineProperty(b.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(b.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(b.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),b.prototype.element=function(h,v){var E;return E=new s(this,h,v),this.children.push(E),this},b.prototype.attList=function(h,v,E,k,N){var I;return I=new t(this,h,v,E,k,N),this.children.push(I),this},b.prototype.entity=function(h,v){var E;return E=new w(this,!1,h,v),this.children.push(E),this},b.prototype.pEntity=function(h,v){var E;return E=new w(this,!0,h,v),this.children.push(E),this},b.prototype.notation=function(h,v){var E;return E=new o(this,h,v),this.children.push(E),this},b.prototype.toString=function(h){return this.options.writer.docType(this,this.options.writer.filterOptions(h))},b.prototype.ele=function(h,v){return this.element(h,v)},b.prototype.att=function(h,v,E,k,N){return this.attList(h,v,E,k,N)},b.prototype.ent=function(h,v){return this.entity(h,v)},b.prototype.pent=function(h,v){return this.pEntity(h,v)},b.prototype.not=function(h,v){return this.notation(h,v)},b.prototype.up=function(){return this.root()||this.documentObject},b.prototype.isEqualNode=function(h){return!(!b.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.name!==this.name||h.publicId!==this.publicId||h.systemId!==this.systemId)},b})(l)}).call(Zr)});var be=$((en,rn)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=at(),rn.exports=s=(function(p){w(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=e.Raw,this.value=this.stringify.raw(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.raw(this,this.options.writer.filterOptions(l))},c})(t)}).call(en)});var ve=$((nn,on)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Vt(),on.exports=s=(function(p){w(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=e.Text,this.value=this.stringify.text(d)}return Object.defineProperty(c.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(c.prototype,"wholeText",{get:function(){var l,d,m;for(m="",d=this.previousSibling;d;)m=d.data+m,d=d.previousSibling;for(m+=this.data,l=this.nextSibling;l;)m=m+l.data,l=l.nextSibling;return m}}),c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.text(this,this.options.writer.filterOptions(l))},c.prototype.splitText=function(l){throw new Error("This DOM method is not implemented."+this.debugInfo())},c.prototype.replaceWholeText=function(l){throw new Error("This DOM method is not implemented."+this.debugInfo())},c})(t)}).call(nn)});var _e=$((sn,an)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Vt(),an.exports=s=(function(p){w(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=e.ProcessingInstruction,this.target=this.stringify.insTarget(d),this.name=this.target,m&&(this.value=this.stringify.insValue(m))}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(l))},c.prototype.isEqualNode=function(l){return!(!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(l)||l.target!==this.target)},c})(t)}).call(sn)});var Ge=$((cn,ln)=>{(function(){var e,t,s,w=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;s=at(),e=K(),ln.exports=t=(function(p){w(c,p);function c(l){c.__super__.constructor.call(this,l),this.type=e.Dummy}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return""},c})(s)}).call(cn)});var pn=$((un,dn)=>{(function(){var e;dn.exports=e=(function(){function t(s){this.nodes=s}return Object.defineProperty(t.prototype,"length",{get:function(){return this.nodes.length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.item=function(s){return this.nodes[s]||null},t})()}).call(un)});var gn=$((fn,hn)=>{(function(){hn.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(fn)});var at=$((mn,yn)=>{(function(){var e,t,s,w,o,p,c,l,d,m,T,_,b,h,v,E,k,N,I,f={}.hasOwnProperty;I=mt(),N=I.isObject,k=I.isFunction,E=I.isEmpty,v=I.getValue,l=null,s=null,w=null,o=null,p=null,b=null,h=null,_=null,c=null,t=null,T=null,d=null,e=null,yn.exports=m=(function(){function i(n){this.parent=n,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,l||(l=ue(),s=de(),w=pe(),o=fe(),p=we(),b=be(),h=ve(),_=_e(),c=Ge(),t=K(),T=pn(),d=le(),e=gn())}return Object.defineProperty(i.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(i.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(i.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(i.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(i.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new T(this.children)),this.childNodeList}}),Object.defineProperty(i.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(i.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(i.prototype,"previousSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n-1]||null}}),Object.defineProperty(i.prototype,"nextSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n+1]||null}}),Object.defineProperty(i.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(i.prototype,"textContent",{get:function(){var n,y,S,x,u;if(this.nodeType===t.Element||this.nodeType===t.DocumentFragment){for(u="",x=this.children,y=0,S=x.length;y<S;y++)n=x[y],n.textContent&&(u+=n.textContent);return u}else return null},set:function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),i.prototype.setParent=function(n){var y,S,x,u,g;for(this.parent=n,n&&(this.options=n.options,this.stringify=n.stringify),u=this.children,g=[],S=0,x=u.length;S<x;S++)y=u[S],g.push(y.setParent(this));return g},i.prototype.element=function(n,y,S){var x,u,g,D,O,L,R,M,P,F,B;if(L=null,y===null&&S==null&&(P=[{},null],y=P[0],S=P[1]),y==null&&(y={}),y=v(y),N(y)||(F=[y,S],S=F[0],y=F[1]),n!=null&&(n=v(n)),Array.isArray(n))for(g=0,R=n.length;g<R;g++)u=n[g],L=this.element(u);else if(k(n))L=this.element(n.apply());else if(N(n)){for(O in n)if(f.call(n,O))if(B=n[O],k(B)&&(B=B.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)L=this.attribute(O.substr(this.stringify.convertAttKey.length),B);else if(!this.options.separateArrayItems&&Array.isArray(B)&&E(B))L=this.dummy();else if(N(B)&&E(B))L=this.element(O);else if(!this.options.keepNullNodes&&B==null)L=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray(B))for(D=0,M=B.length;D<M;D++)u=B[D],x={},x[O]=u,L=this.element(x);else N(B)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?L=this.element(B):(L=this.element(O),L.element(B)):L=this.element(O,B)}else!this.options.keepNullNodes&&S===null?L=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&n.indexOf(this.stringify.convertTextKey)===0?L=this.text(S):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&n.indexOf(this.stringify.convertCDataKey)===0?L=this.cdata(S):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&n.indexOf(this.stringify.convertCommentKey)===0?L=this.comment(S):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&n.indexOf(this.stringify.convertRawKey)===0?L=this.raw(S):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&n.indexOf(this.stringify.convertPIKey)===0?L=this.instruction(n.substr(this.stringify.convertPIKey.length),S):L=this.node(n,y,S);if(L==null)throw new Error("Could not create any elements with: "+n+". "+this.debugInfo());return L},i.prototype.insertBefore=function(n,y,S){var x,u,g,D,O;if(n?.type)return g=n,D=y,g.setParent(this),D?(u=children.indexOf(D),O=children.splice(u),children.push(g),Array.prototype.push.apply(children,O)):children.push(g),g;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return u=this.parent.children.indexOf(this),O=this.parent.children.splice(u),x=this.parent.element(n,y,S),Array.prototype.push.apply(this.parent.children,O),x},i.prototype.insertAfter=function(n,y,S){var x,u,g;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return u=this.parent.children.indexOf(this),g=this.parent.children.splice(u+1),x=this.parent.element(n,y,S),Array.prototype.push.apply(this.parent.children,g),x},i.prototype.remove=function(){var n,y;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return n=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[n,n-n+1].concat(y=[])),this.parent},i.prototype.node=function(n,y,S){var x,u;return n!=null&&(n=v(n)),y||(y={}),y=v(y),N(y)||(u=[y,S],S=u[0],y=u[1]),x=new l(this,n,y),S!=null&&x.text(S),this.children.push(x),x},i.prototype.text=function(n){var y;return N(n)&&this.element(n),y=new h(this,n),this.children.push(y),this},i.prototype.cdata=function(n){var y;return y=new s(this,n),this.children.push(y),this},i.prototype.comment=function(n){var y;return y=new w(this,n),this.children.push(y),this},i.prototype.commentBefore=function(n){var y,S,x;return S=this.parent.children.indexOf(this),x=this.parent.children.splice(S),y=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,x),this},i.prototype.commentAfter=function(n){var y,S,x;return S=this.parent.children.indexOf(this),x=this.parent.children.splice(S+1),y=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,x),this},i.prototype.raw=function(n){var y;return y=new b(this,n),this.children.push(y),this},i.prototype.dummy=function(){var n;return n=new c(this),n},i.prototype.instruction=function(n,y){var S,x,u,g,D;if(n!=null&&(n=v(n)),y!=null&&(y=v(y)),Array.isArray(n))for(g=0,D=n.length;g<D;g++)S=n[g],this.instruction(S);else if(N(n))for(S in n)f.call(n,S)&&(x=n[S],this.instruction(S,x));else k(y)&&(y=y.apply()),u=new _(this,n,y),this.children.push(u);return this},i.prototype.instructionBefore=function(n,y){var S,x,u;return x=this.parent.children.indexOf(this),u=this.parent.children.splice(x),S=this.parent.instruction(n,y),Array.prototype.push.apply(this.parent.children,u),this},i.prototype.instructionAfter=function(n,y){var S,x,u;return x=this.parent.children.indexOf(this),u=this.parent.children.splice(x+1),S=this.parent.instruction(n,y),Array.prototype.push.apply(this.parent.children,u),this},i.prototype.declaration=function(n,y,S){var x,u;return x=this.document(),u=new o(x,n,y,S),x.children.length===0?x.children.unshift(u):x.children[0].type===t.Declaration?x.children[0]=u:x.children.unshift(u),x.root()||x},i.prototype.dtd=function(n,y){var S,x,u,g,D,O,L,R,M,P;for(x=this.document(),u=new p(x,n,y),M=x.children,g=D=0,L=M.length;D<L;g=++D)if(S=M[g],S.type===t.DocType)return x.children[g]=u,u;for(P=x.children,g=O=0,R=P.length;O<R;g=++O)if(S=P[g],S.isRoot)return x.children.splice(g,0,u),u;return x.children.push(u),u},i.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},i.prototype.root=function(){var n;for(n=this;n;){if(n.type===t.Document)return n.rootObject;if(n.isRoot)return n;n=n.parent}},i.prototype.document=function(){var n;for(n=this;n;){if(n.type===t.Document)return n;n=n.parent}},i.prototype.end=function(n){return this.document().end(n)},i.prototype.prev=function(){var n;if(n=this.parent.children.indexOf(this),n<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[n-1]},i.prototype.next=function(){var n;if(n=this.parent.children.indexOf(this),n===-1||n===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[n+1]},i.prototype.importDocument=function(n){var y;return y=n.root().clone(),y.parent=this,y.isRoot=!1,this.children.push(y),this},i.prototype.debugInfo=function(n){var y,S;return n=n||this.name,n==null&&!((y=this.parent)!=null&&y.name)?"":n==null?"parent: <"+this.parent.name+">":(S=this.parent)!=null&&S.name?"node: <"+n+">, parent: <"+this.parent.name+">":"node: <"+n+">"},i.prototype.ele=function(n,y,S){return this.element(n,y,S)},i.prototype.nod=function(n,y,S){return this.node(n,y,S)},i.prototype.txt=function(n){return this.text(n)},i.prototype.dat=function(n){return this.cdata(n)},i.prototype.com=function(n){return this.comment(n)},i.prototype.ins=function(n,y){return this.instruction(n,y)},i.prototype.doc=function(){return this.document()},i.prototype.dec=function(n,y,S){return this.declaration(n,y,S)},i.prototype.e=function(n,y,S){return this.element(n,y,S)},i.prototype.n=function(n,y,S){return this.node(n,y,S)},i.prototype.t=function(n){return this.text(n)},i.prototype.d=function(n){return this.cdata(n)},i.prototype.c=function(n){return this.comment(n)},i.prototype.r=function(n){return this.raw(n)},i.prototype.i=function(n,y){return this.instruction(n,y)},i.prototype.u=function(){return this.up()},i.prototype.importXMLBuilder=function(n){return this.importDocument(n)},i.prototype.replaceChild=function(n,y){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.removeChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.appendChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.hasChildNodes=function(){return this.children.length!==0},i.prototype.cloneNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isSupported=function(n,y){return!0},i.prototype.hasAttributes=function(){return this.attribs.length!==0},i.prototype.compareDocumentPosition=function(n){var y,S;return y=this,y===n?0:this.document()!==n.document()?(S=e.Disconnected|e.ImplementationSpecific,Math.random()<.5?S|=e.Preceding:S|=e.Following,S):y.isAncestor(n)?e.Contains|e.Preceding:y.isDescendant(n)?e.Contains|e.Following:y.isPreceding(n)?e.Preceding:e.Following},i.prototype.isSameNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.lookupPrefix=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isDefaultNamespace=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.lookupNamespaceURI=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isEqualNode=function(n){var y,S,x;if(n.nodeType!==this.nodeType||n.children.length!==this.children.length)return!1;for(y=S=0,x=this.children.length-1;0<=x?S<=x:S>=x;y=0<=x?++S:--S)if(!this.children[y].isEqualNode(n.children[y]))return!1;return!0},i.prototype.getFeature=function(n,y){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.setUserData=function(n,y,S){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.getUserData=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.contains=function(n){return n?n===this||this.isDescendant(n):!1},i.prototype.isDescendant=function(n){var y,S,x,u,g;for(g=this.children,x=0,u=g.length;x<u;x++)if(y=g[x],n===y||(S=y.isDescendant(n),S))return!0;return!1},i.prototype.isAncestor=function(n){return n.isDescendant(this)},i.prototype.isPreceding=function(n){var y,S;return y=this.treePosition(n),S=this.treePosition(this),y===-1||S===-1?!1:y<S},i.prototype.isFollowing=function(n){var y,S;return y=this.treePosition(n),S=this.treePosition(this),y===-1||S===-1?!1:y>S},i.prototype.treePosition=function(n){var y,S;return S=0,y=!1,this.foreachTreeNode(this.document(),function(x){if(S++,!y&&x===n)return y=!0}),y?S:-1},i.prototype.foreachTreeNode=function(n,y){var S,x,u,g,D;for(n||(n=this.document()),g=n.children,x=0,u=g.length;x<u;x++){if(S=g[x],D=y(S))return D;if(D=this.foreachTreeNode(S,y),D)return D}},i})()}).call(mn)});var ze=$((wn,bn)=>{(function(){var e,t=function(w,o){return function(){return w.apply(o,arguments)}},s={}.hasOwnProperty;bn.exports=e=(function(){function w(o){this.assertLegalName=t(this.assertLegalName,this),this.assertLegalChar=t(this.assertLegalChar,this);var p,c,l;o||(o={}),this.options=o,this.options.version||(this.options.version="1.0"),c=o.stringify||{};for(p in c)s.call(c,p)&&(l=c[p],this[p]=l)}return w.prototype.name=function(o){return this.options.noValidation?o:this.assertLegalName(""+o||"")},w.prototype.text=function(o){return this.options.noValidation?o:this.assertLegalChar(this.textEscape(""+o||""))},w.prototype.cdata=function(o){return this.options.noValidation?o:(o=""+o||"",o=o.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(o))},w.prototype.comment=function(o){if(this.options.noValidation)return o;if(o=""+o||"",o.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+o);return this.assertLegalChar(o)},w.prototype.raw=function(o){return this.options.noValidation?o:""+o||""},w.prototype.attValue=function(o){return this.options.noValidation?o:this.assertLegalChar(this.attEscape(o=""+o||""))},w.prototype.insTarget=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.insValue=function(o){if(this.options.noValidation)return o;if(o=""+o||"",o.match(/\?>/))throw new Error("Invalid processing instruction value: "+o);return this.assertLegalChar(o)},w.prototype.xmlVersion=function(o){if(this.options.noValidation)return o;if(o=""+o||"",!o.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+o);return o},w.prototype.xmlEncoding=function(o){if(this.options.noValidation)return o;if(o=""+o||"",!o.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+o);return this.assertLegalChar(o)},w.prototype.xmlStandalone=function(o){return this.options.noValidation?o:o?"yes":"no"},w.prototype.dtdPubID=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdSysID=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdElementValue=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdAttType=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdAttDefault=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdEntityValue=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.dtdNData=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},w.prototype.convertAttKey="@",w.prototype.convertPIKey="?",w.prototype.convertTextKey="#text",w.prototype.convertCDataKey="#cdata",w.prototype.convertCommentKey="#comment",w.prototype.convertRawKey="#raw",w.prototype.assertLegalChar=function(o){var p,c;if(this.options.noValidation)return o;if(p="",this.options.version==="1.0"){if(p=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=o.match(p))throw new Error("Invalid character in string: "+o+" at index "+c.index)}else if(this.options.version==="1.1"&&(p=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=o.match(p)))throw new Error("Invalid character in string: "+o+" at index "+c.index);return o},w.prototype.assertLegalName=function(o){var p;if(this.options.noValidation)return o;if(this.assertLegalChar(o),p=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!o.match(p))throw new Error("Invalid character in name");return o},w.prototype.textEscape=function(o){var p;return this.options.noValidation?o:(p=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,o.replace(p,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},w.prototype.attEscape=function(o){var p;return this.options.noValidation?o:(p=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,o.replace(p,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},w})()}).call(wn)});var Gt=$((vn,_n)=>{(function(){_n.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(vn)});var We=$((Tn,In)=>{(function(){var e,t,s,w,o,p,c,l,d,m,T,_,b,h,v,E,k,N={}.hasOwnProperty;k=mt().assign,e=K(),d=fe(),m=we(),s=de(),w=pe(),_=ue(),h=be(),v=ve(),b=_e(),T=Ge(),o=he(),p=me(),c=ge(),l=ye(),t=Gt(),In.exports=E=(function(){function I(f){var i,n,y;f||(f={}),this.options=f,n=f.writer||{};for(i in n)N.call(n,i)&&(y=n[i],this["_"+i]=this[i],this[i]=y)}return I.prototype.filterOptions=function(f){var i,n,y,S,x,u,g,D;return f||(f={}),f=k({},this.options,f),i={writer:this},i.pretty=f.pretty||!1,i.allowEmpty=f.allowEmpty||!1,i.indent=(n=f.indent)!=null?n:"  ",i.newline=(y=f.newline)!=null?y:`
`,i.offset=(S=f.offset)!=null?S:0,i.dontPrettyTextNodes=(x=(u=f.dontPrettyTextNodes)!=null?u:f.dontprettytextnodes)!=null?x:0,i.spaceBeforeSlash=(g=(D=f.spaceBeforeSlash)!=null?D:f.spacebeforeslash)!=null?g:"",i.spaceBeforeSlash===!0&&(i.spaceBeforeSlash=" "),i.suppressPrettyCount=0,i.user={},i.state=t.None,i},I.prototype.indent=function(f,i,n){var y;return!i.pretty||i.suppressPrettyCount?"":i.pretty&&(y=(n||0)+i.offset+1,y>0)?new Array(y).join(i.indent):""},I.prototype.endline=function(f,i,n){return!i.pretty||i.suppressPrettyCount?"":i.newline},I.prototype.attribute=function(f,i,n){var y;return this.openAttribute(f,i,n),y=" "+f.name+'="'+f.value+'"',this.closeAttribute(f,i,n),y},I.prototype.cdata=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<![CDATA[",i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+="]]>"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.comment=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!-- ",i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=" -->"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.declaration=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<?xml",i.state=t.InsideTag,y+=' version="'+f.version+'"',f.encoding!=null&&(y+=' encoding="'+f.encoding+'"'),f.standalone!=null&&(y+=' standalone="'+f.standalone+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+"?>",y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.docType=function(f,i,n){var y,S,x,u,g;if(n||(n=0),this.openNode(f,i,n),i.state=t.OpenTag,u=this.indent(f,i,n),u+="<!DOCTYPE "+f.root().name,f.pubID&&f.sysID?u+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.sysID&&(u+=' SYSTEM "'+f.sysID+'"'),f.children.length>0){for(u+=" [",u+=this.endline(f,i,n),i.state=t.InsideTag,g=f.children,S=0,x=g.length;S<x;S++)y=g[S],u+=this.writeChildNode(y,i,n+1);i.state=t.CloseTag,u+="]"}return i.state=t.CloseTag,u+=i.spaceBeforeSlash+">",u+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),u},I.prototype.element=function(f,i,n){var y,S,x,u,g,D,O,L,R,M,P,F,B,Y;n||(n=0),M=!1,P="",this.openNode(f,i,n),i.state=t.OpenTag,P+=this.indent(f,i,n)+"<"+f.name,F=f.attribs;for(R in F)N.call(F,R)&&(y=F[R],P+=this.attribute(y,i,n));if(x=f.children.length,u=x===0?null:f.children[0],x===0||f.children.every(function(st){return(st.type===e.Text||st.type===e.Raw)&&st.value===""}))i.allowEmpty?(P+=">",i.state=t.CloseTag,P+="</"+f.name+">"+this.endline(f,i,n)):(i.state=t.CloseTag,P+=i.spaceBeforeSlash+"/>"+this.endline(f,i,n));else if(i.pretty&&x===1&&(u.type===e.Text||u.type===e.Raw)&&u.value!=null)P+=">",i.state=t.InsideTag,i.suppressPrettyCount++,M=!0,P+=this.writeChildNode(u,i,n+1),i.suppressPrettyCount--,M=!1,i.state=t.CloseTag,P+="</"+f.name+">"+this.endline(f,i,n);else{if(i.dontPrettyTextNodes){for(B=f.children,g=0,O=B.length;g<O;g++)if(S=B[g],(S.type===e.Text||S.type===e.Raw)&&S.value!=null){i.suppressPrettyCount++,M=!0;break}}for(P+=">"+this.endline(f,i,n),i.state=t.InsideTag,Y=f.children,D=0,L=Y.length;D<L;D++)S=Y[D],P+=this.writeChildNode(S,i,n+1);i.state=t.CloseTag,P+=this.indent(f,i,n)+"</"+f.name+">",M&&i.suppressPrettyCount--,P+=this.endline(f,i,n),i.state=t.None}return this.closeNode(f,i,n),P},I.prototype.writeChildNode=function(f,i,n){switch(f.type){case e.CData:return this.cdata(f,i,n);case e.Comment:return this.comment(f,i,n);case e.Element:return this.element(f,i,n);case e.Raw:return this.raw(f,i,n);case e.Text:return this.text(f,i,n);case e.ProcessingInstruction:return this.processingInstruction(f,i,n);case e.Dummy:return"";case e.Declaration:return this.declaration(f,i,n);case e.DocType:return this.docType(f,i,n);case e.AttributeDeclaration:return this.dtdAttList(f,i,n);case e.ElementDeclaration:return this.dtdElement(f,i,n);case e.EntityDeclaration:return this.dtdEntity(f,i,n);case e.NotationDeclaration:return this.dtdNotation(f,i,n);default:throw new Error("Unknown XML node type: "+f.constructor.name)}},I.prototype.processingInstruction=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<?",i.state=t.InsideTag,y+=f.target,f.value&&(y+=" "+f.value),i.state=t.CloseTag,y+=i.spaceBeforeSlash+"?>",y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.raw=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n),i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.text=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n),i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdAttList=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ATTLIST",i.state=t.InsideTag,y+=" "+f.elementName+" "+f.attributeName+" "+f.attributeType,f.defaultValueType!=="#DEFAULT"&&(y+=" "+f.defaultValueType),f.defaultValue&&(y+=' "'+f.defaultValue+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdElement=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ELEMENT",i.state=t.InsideTag,y+=" "+f.name+" "+f.value,i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdEntity=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ENTITY",i.state=t.InsideTag,f.pe&&(y+=" %"),y+=" "+f.name,f.value?y+=' "'+f.value+'"':(f.pubID&&f.sysID?y+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.sysID&&(y+=' SYSTEM "'+f.sysID+'"'),f.nData&&(y+=" NDATA "+f.nData)),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdNotation=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!NOTATION",i.state=t.InsideTag,y+=" "+f.name,f.pubID&&f.sysID?y+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.pubID?y+=' PUBLIC "'+f.pubID+'"':f.sysID&&(y+=' SYSTEM "'+f.sysID+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.openNode=function(f,i,n){},I.prototype.closeNode=function(f,i,n){},I.prototype.openAttribute=function(f,i,n){},I.prototype.closeAttribute=function(f,i,n){},I})()}).call(Tn)});var Te=$((En,Cn)=>{(function(){var e,t,s=function(o,p){for(var c in p)w.call(p,c)&&(o[c]=p[c]);function l(){this.constructor=o}return l.prototype=p.prototype,o.prototype=new l,o.__super__=p.prototype,o},w={}.hasOwnProperty;t=We(),Cn.exports=e=(function(o){s(p,o);function p(c){p.__super__.constructor.call(this,c)}return p.prototype.document=function(c,l){var d,m,T,_,b;for(l=this.filterOptions(l),_="",b=c.children,m=0,T=b.length;m<T;m++)d=b[m],_+=this.writeChildNode(d,l,0);return l.pretty&&_.slice(-l.newline.length)===l.newline&&(_=_.slice(0,-l.newline.length)),_},p})(t)}).call(En)});var He=$((xn,Dn)=>{(function(){var e,t,s,w,o,p,c,l,d=function(T,_){for(var b in _)m.call(_,b)&&(T[b]=_[b]);function h(){this.constructor=T}return h.prototype=_.prototype,T.prototype=new h,T.__super__=_.prototype,T},m={}.hasOwnProperty;l=mt().isPlainObject,s=Xe(),t=Sr(),o=at(),e=K(),c=ze(),p=Te(),Dn.exports=w=(function(T){d(_,T);function _(b){_.__super__.constructor.call(this,null),this.name="#document",this.type=e.Document,this.documentURI=null,this.domConfig=new t,b||(b={}),b.writer||(b.writer=new p),this.options=b,this.stringify=new c(b)}return Object.defineProperty(_.prototype,"implementation",{value:new s}),Object.defineProperty(_.prototype,"doctype",{get:function(){var b,h,v,E;for(E=this.children,h=0,v=E.length;h<v;h++)if(b=E[h],b.type===e.DocType)return b;return null}}),Object.defineProperty(_.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(_.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(_.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(_.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].encoding:null}}),Object.defineProperty(_.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(_.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(_.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(_.prototype,"origin",{get:function(){return null}}),Object.defineProperty(_.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(_.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(_.prototype,"contentType",{get:function(){return null}}),_.prototype.end=function(b){var h;return h={},b?l(b)&&(h=b,b=this.options.writer):b=this.options.writer,b.document(this,b.filterOptions(h))},_.prototype.toString=function(b){return this.options.writer.document(this,this.options.writer.filterOptions(b))},_.prototype.createElement=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createTextNode=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createComment=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createCDATASection=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createProcessingInstruction=function(b,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createAttribute=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createEntityReference=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByTagName=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.importNode=function(b,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createElementNS=function(b,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createAttributeNS=function(b,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByTagNameNS=function(b,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementById=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.adoptNode=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.renameNode=function(b,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByClassName=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createEvent=function(b){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createNodeIterator=function(b,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createTreeWalker=function(b,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_})(o)}).call(xn)});var An=$((Sn,Nn)=>{(function(){var e,t,s,w,o,p,c,l,d,m,T,_,b,h,v,E,k,N,I,f,i,n,y,S,x={}.hasOwnProperty;S=mt(),n=S.isObject,i=S.isFunction,y=S.isPlainObject,f=S.getValue,e=K(),_=He(),h=ue(),w=de(),o=pe(),E=be(),I=ve(),v=_e(),m=fe(),T=we(),p=he(),l=ge(),c=me(),d=ye(),s=Ve(),N=ze(),k=Te(),t=Gt(),Nn.exports=b=(function(){function u(g,D,O){var L;this.name="?xml",this.type=e.Document,g||(g={}),L={},g.writer?y(g.writer)&&(L=g.writer,g.writer=new k):g.writer=new k,this.options=g,this.writer=g.writer,this.writerOptions=this.writer.filterOptions(L),this.stringify=new N(g),this.onDataCallback=D||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return u.prototype.createChildNode=function(g){var D,O,L,R,M,P,F,B;switch(g.type){case e.CData:this.cdata(g.value);break;case e.Comment:this.comment(g.value);break;case e.Element:L={},F=g.attribs;for(O in F)x.call(F,O)&&(D=F[O],L[O]=D.value);this.node(g.name,L);break;case e.Dummy:this.dummy();break;case e.Raw:this.raw(g.value);break;case e.Text:this.text(g.value);break;case e.ProcessingInstruction:this.instruction(g.target,g.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+g.constructor.name)}for(B=g.children,M=0,P=B.length;M<P;M++)R=B[M],this.createChildNode(R),R.type===e.Element&&this.up();return this},u.prototype.dummy=function(){return this},u.prototype.node=function(g,D,O){var L;if(g==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(g));return this.openCurrent(),g=f(g),D==null&&(D={}),D=f(D),n(D)||(L=[D,O],O=L[0],D=L[1]),this.currentNode=new h(this,g,D),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},u.prototype.element=function(g,D,O){var L,R,M,P,F,B;if(this.currentNode&&this.currentNode.type===e.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(g)||n(g)||i(g))for(P=this.options.noValidation,this.options.noValidation=!0,B=new _(this.options).element("TEMP_ROOT"),B.element(g),this.options.noValidation=P,F=B.children,R=0,M=F.length;R<M;R++)L=F[R],this.createChildNode(L),L.type===e.Element&&this.up();else this.node(g,D,O);return this},u.prototype.attribute=function(g,D){var O,L;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(g));if(g!=null&&(g=f(g)),n(g))for(O in g)x.call(g,O)&&(L=g[O],this.attribute(O,L));else i(D)&&(D=D.apply()),this.options.keepNullAttributes&&D==null?this.currentNode.attribs[g]=new s(this,g,""):D!=null&&(this.currentNode.attribs[g]=new s(this,g,D));return this},u.prototype.text=function(g){var D;return this.openCurrent(),D=new I(this,g),this.onData(this.writer.text(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.cdata=function(g){var D;return this.openCurrent(),D=new w(this,g),this.onData(this.writer.cdata(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.comment=function(g){var D;return this.openCurrent(),D=new o(this,g),this.onData(this.writer.comment(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.raw=function(g){var D;return this.openCurrent(),D=new E(this,g),this.onData(this.writer.raw(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.instruction=function(g,D){var O,L,R,M,P;if(this.openCurrent(),g!=null&&(g=f(g)),D!=null&&(D=f(D)),Array.isArray(g))for(O=0,M=g.length;O<M;O++)L=g[O],this.instruction(L);else if(n(g))for(L in g)x.call(g,L)&&(R=g[L],this.instruction(L,R));else i(D)&&(D=D.apply()),P=new v(this,g,D),this.onData(this.writer.processingInstruction(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},u.prototype.declaration=function(g,D,O){var L;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return L=new m(this,g,D,O),this.onData(this.writer.declaration(L,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.doctype=function(g,D,O){if(this.openCurrent(),g==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new T(this,D,O),this.currentNode.rootNodeName=g,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},u.prototype.dtdElement=function(g,D){var O;return this.openCurrent(),O=new c(this,g,D),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.attList=function(g,D,O,L,R){var M;return this.openCurrent(),M=new p(this,g,D,O,L,R),this.onData(this.writer.dtdAttList(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.entity=function(g,D){var O;return this.openCurrent(),O=new l(this,!1,g,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.pEntity=function(g,D){var O;return this.openCurrent(),O=new l(this,!0,g,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.notation=function(g,D){var O;return this.openCurrent(),O=new d(this,g,D),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},u.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},u.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},u.prototype.openNode=function(g){var D,O,L,R;if(!g.isOpen){if(!this.root&&this.currentLevel===0&&g.type===e.Element&&(this.root=g),O="",g.type===e.Element){this.writerOptions.state=t.OpenTag,O=this.writer.indent(g,this.writerOptions,this.currentLevel)+"<"+g.name,R=g.attribs;for(L in R)x.call(R,L)&&(D=R[L],O+=this.writer.attribute(D,this.writerOptions,this.currentLevel));O+=(g.children?">":"/>")+this.writer.endline(g,this.writerOptions,this.currentLevel),this.writerOptions.state=t.InsideTag}else this.writerOptions.state=t.OpenTag,O=this.writer.indent(g,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+g.rootNodeName,g.pubID&&g.sysID?O+=' PUBLIC "'+g.pubID+'" "'+g.sysID+'"':g.sysID&&(O+=' SYSTEM "'+g.sysID+'"'),g.children?(O+=" [",this.writerOptions.state=t.InsideTag):(this.writerOptions.state=t.CloseTag,O+=">"),O+=this.writer.endline(g,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),g.isOpen=!0}},u.prototype.closeNode=function(g){var D;if(!g.isClosed)return D="",this.writerOptions.state=t.CloseTag,g.type===e.Element?D=this.writer.indent(g,this.writerOptions,this.currentLevel)+"</"+g.name+">"+this.writer.endline(g,this.writerOptions,this.currentLevel):D=this.writer.indent(g,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(g,this.writerOptions,this.currentLevel),this.writerOptions.state=t.None,this.onData(D,this.currentLevel),g.isClosed=!0},u.prototype.onData=function(g,D){return this.documentStarted=!0,this.onDataCallback(g,D+1)},u.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},u.prototype.debugInfo=function(g){return g==null?"":"node: <"+g+">"},u.prototype.ele=function(){return this.element.apply(this,arguments)},u.prototype.nod=function(g,D,O){return this.node(g,D,O)},u.prototype.txt=function(g){return this.text(g)},u.prototype.dat=function(g){return this.cdata(g)},u.prototype.com=function(g){return this.comment(g)},u.prototype.ins=function(g,D){return this.instruction(g,D)},u.prototype.dec=function(g,D,O){return this.declaration(g,D,O)},u.prototype.dtd=function(g,D,O){return this.doctype(g,D,O)},u.prototype.e=function(g,D,O){return this.element(g,D,O)},u.prototype.n=function(g,D,O){return this.node(g,D,O)},u.prototype.t=function(g){return this.text(g)},u.prototype.d=function(g){return this.cdata(g)},u.prototype.c=function(g){return this.comment(g)},u.prototype.r=function(g){return this.raw(g)},u.prototype.i=function(g,D){return this.instruction(g,D)},u.prototype.att=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.a=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.ent=function(g,D){return this.entity(g,D)},u.prototype.pent=function(g,D){return this.pEntity(g,D)},u.prototype.not=function(g,D){return this.notation(g,D)},u})()}).call(Sn)});var Ln=$((kn,On)=>{(function(){var e,t,s,w,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;e=K(),w=We(),t=Gt(),On.exports=s=(function(c){o(l,c);function l(d,m){this.stream=d,l.__super__.constructor.call(this,m)}return l.prototype.endline=function(d,m,T){return d.isLastRootNode&&m.state===t.CloseTag?"":l.__super__.endline.call(this,d,m,T)},l.prototype.document=function(d,m){var T,_,b,h,v,E,k,N,I;for(k=d.children,_=b=0,v=k.length;b<v;_=++b)T=k[_],T.isLastRootNode=_===d.children.length-1;for(m=this.filterOptions(m),N=d.children,I=[],h=0,E=N.length;h<E;h++)T=N[h],I.push(this.writeChildNode(T,m,0));return I},l.prototype.attribute=function(d,m,T){return this.stream.write(l.__super__.attribute.call(this,d,m,T))},l.prototype.cdata=function(d,m,T){return this.stream.write(l.__super__.cdata.call(this,d,m,T))},l.prototype.comment=function(d,m,T){return this.stream.write(l.__super__.comment.call(this,d,m,T))},l.prototype.declaration=function(d,m,T){return this.stream.write(l.__super__.declaration.call(this,d,m,T))},l.prototype.docType=function(d,m,T){var _,b,h,v;if(T||(T=0),this.openNode(d,m,T),m.state=t.OpenTag,this.stream.write(this.indent(d,m,T)),this.stream.write("<!DOCTYPE "+d.root().name),d.pubID&&d.sysID?this.stream.write(' PUBLIC "'+d.pubID+'" "'+d.sysID+'"'):d.sysID&&this.stream.write(' SYSTEM "'+d.sysID+'"'),d.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(d,m,T)),m.state=t.InsideTag,v=d.children,b=0,h=v.length;b<h;b++)_=v[b],this.writeChildNode(_,m,T+1);m.state=t.CloseTag,this.stream.write("]")}return m.state=t.CloseTag,this.stream.write(m.spaceBeforeSlash+">"),this.stream.write(this.endline(d,m,T)),m.state=t.None,this.closeNode(d,m,T)},l.prototype.element=function(d,m,T){var _,b,h,v,E,k,N,I,f,i;T||(T=0),this.openNode(d,m,T),m.state=t.OpenTag,this.stream.write(this.indent(d,m,T)+"<"+d.name),f=d.attribs;for(N in f)p.call(f,N)&&(_=f[N],this.attribute(_,m,T));if(h=d.children.length,v=h===0?null:d.children[0],h===0||d.children.every(function(n){return(n.type===e.Text||n.type===e.Raw)&&n.value===""}))m.allowEmpty?(this.stream.write(">"),m.state=t.CloseTag,this.stream.write("</"+d.name+">")):(m.state=t.CloseTag,this.stream.write(m.spaceBeforeSlash+"/>"));else if(m.pretty&&h===1&&(v.type===e.Text||v.type===e.Raw)&&v.value!=null)this.stream.write(">"),m.state=t.InsideTag,m.suppressPrettyCount++,I=!0,this.writeChildNode(v,m,T+1),m.suppressPrettyCount--,I=!1,m.state=t.CloseTag,this.stream.write("</"+d.name+">");else{for(this.stream.write(">"+this.endline(d,m,T)),m.state=t.InsideTag,i=d.children,E=0,k=i.length;E<k;E++)b=i[E],this.writeChildNode(b,m,T+1);m.state=t.CloseTag,this.stream.write(this.indent(d,m,T)+"</"+d.name+">")}return this.stream.write(this.endline(d,m,T)),m.state=t.None,this.closeNode(d,m,T)},l.prototype.processingInstruction=function(d,m,T){return this.stream.write(l.__super__.processingInstruction.call(this,d,m,T))},l.prototype.raw=function(d,m,T){return this.stream.write(l.__super__.raw.call(this,d,m,T))},l.prototype.text=function(d,m,T){return this.stream.write(l.__super__.text.call(this,d,m,T))},l.prototype.dtdAttList=function(d,m,T){return this.stream.write(l.__super__.dtdAttList.call(this,d,m,T))},l.prototype.dtdElement=function(d,m,T){return this.stream.write(l.__super__.dtdElement.call(this,d,m,T))},l.prototype.dtdEntity=function(d,m,T){return this.stream.write(l.__super__.dtdEntity.call(this,d,m,T))},l.prototype.dtdNotation=function(d,m,T){return this.stream.write(l.__super__.dtdNotation.call(this,d,m,T))},l})(w)}).call(kn)});var Mn=$((Pn,Et)=>{(function(){var e,t,s,w,o,p,c,l,d,m;m=mt(),l=m.assign,d=m.isFunction,s=Xe(),w=He(),o=An(),c=Te(),p=Ln(),e=K(),t=Gt(),Et.exports.create=function(T,_,b,h){var v,E;if(T==null)throw new Error("Root element needs a name.");return h=l({},_,b,h),v=new w(h),E=v.element(T),h.headless||(v.declaration(h),(h.pubID!=null||h.sysID!=null)&&v.dtd(h)),E},Et.exports.begin=function(T,_,b){var h;return d(T)&&(h=[T,_],_=h[0],b=h[1],T={}),_?new o(T,_,b):new w(T)},Et.exports.stringWriter=function(T){return new c(T)},Et.exports.streamWriter=function(T,_){return new p(T,_)},Et.exports.implementation=new s,Et.exports.nodeType=e,Et.exports.writerState=t}).call(Pn)});var Rn=$(Ke=>{(function(){"use strict";var e,t,s,w,o,p={}.hasOwnProperty;e=Mn(),t=ce().defaults,w=function(c){return typeof c=="string"&&(c.indexOf("&")>=0||c.indexOf(">")>=0||c.indexOf("<")>=0)},o=function(c){return"<![CDATA["+s(c)+"]]>"},s=function(c){return c.replace("]]>","]]]]><![CDATA[>")},Ke.Builder=(function(){function c(l){var d,m,T;this.options={},m=t["0.2"];for(d in m)p.call(m,d)&&(T=m[d],this.options[d]=T);for(d in l)p.call(l,d)&&(T=l[d],this.options[d]=T)}return c.prototype.buildObject=function(l){var d,m,T,_,b;return d=this.options.attrkey,m=this.options.charkey,Object.keys(l).length===1&&this.options.rootName===t["0.2"].rootName?(b=Object.keys(l)[0],l=l[b]):b=this.options.rootName,T=(function(h){return function(v,E){var k,N,I,f,i,n;if(typeof E!="object")h.options.cdata&&w(E)?v.raw(o(E)):v.txt(E);else if(Array.isArray(E)){for(f in E)if(p.call(E,f)){N=E[f];for(i in N)I=N[i],v=T(v.ele(i),I).up()}}else for(i in E)if(p.call(E,i))if(N=E[i],i===d){if(typeof N=="object")for(k in N)n=N[k],v=v.att(k,n)}else if(i===m)h.options.cdata&&w(N)?v=v.raw(o(N)):v=v.txt(N);else if(Array.isArray(N))for(f in N)p.call(N,f)&&(I=N[f],typeof I=="string"?h.options.cdata&&w(I)?v=v.ele(i).raw(o(I)).up():v=v.ele(i,I).up():v=T(v.ele(i),I).up());else typeof N=="object"?v=T(v.ele(i),N).up():typeof N=="string"&&h.options.cdata&&w(N)?v=v.ele(i).raw(o(N)).up():(N==null&&(N=""),v=v.ele(i,N.toString()).up());return v}})(this),_=e.create(b,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),T(_,l).end(this.options.renderOpts)},c})()}).call(Ke)});var Fn=$(Ie=>{(function(e){e.parser=function(a,r){return new s(a,r)},e.SAXParser=s,e.SAXStream=T,e.createStream=d,e.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function s(a,r){if(!(this instanceof s))return new s(a,r);var A=this;o(A),A.q=A.c="",A.bufferCheckPosition=e.MAX_BUFFER_LENGTH,A.encoding=null,A.opt=r||{},A.opt.lowercase=A.opt.lowercase||A.opt.lowercasetags,A.looseCase=A.opt.lowercase?"toLowerCase":"toUpperCase",A.opt.maxEntityCount=A.opt.maxEntityCount||512,A.opt.maxEntityDepth=A.opt.maxEntityDepth||4,A.entityCount=A.entityDepth=0,A.tags=[],A.closed=A.closedRoot=A.sawRoot=!1,A.tag=A.error=null,A.strict=!!a,A.noscript=!!(a||A.opt.noscript),A.state=u.BEGIN,A.strictEntities=A.opt.strictEntities,A.ENTITIES=A.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),A.attribList=[],A.opt.xmlns&&(A.ns=Object.create(E)),A.opt.unquotedAttributeValues===void 0&&(A.opt.unquotedAttributeValues=!a),A.trackPosition=A.opt.position!==!1,A.trackPosition&&(A.position=A.line=A.column=0),D(A,"onready")}Object.create||(Object.create=function(a){function r(){}r.prototype=a;var A=new r;return A}),Object.keys||(Object.keys=function(a){var r=[];for(var A in a)a.hasOwnProperty(A)&&r.push(A);return r});function w(a){for(var r=Math.max(e.MAX_BUFFER_LENGTH,10),A=0,C=0,j=t.length;C<j;C++){var z=a[t[C]].length;if(z>r)switch(t[C]){case"textNode":F(a);break;case"cdata":P(a,"oncdata",a.cdata),a.cdata="";break;case"script":P(a,"onscript",a.script),a.script="";break;default:Y(a,"Max buffer length exceeded: "+t[C])}A=Math.max(A,z)}var H=e.MAX_BUFFER_LENGTH-A;a.bufferCheckPosition=H+a.position}function o(a){for(var r=0,A=t.length;r<A;r++)a[t[r]]=""}function p(a){F(a),a.cdata!==""&&(P(a,"oncdata",a.cdata),a.cdata=""),a.script!==""&&(P(a,"onscript",a.script),a.script="")}s.prototype={end:function(){st(this)},write:Zt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){p(this)}};var c;try{c=require("stream").Stream}catch{c=function(){}}c||(c=function(){});var l=e.EVENTS.filter(function(a){return a!=="error"&&a!=="end"});function d(a,r){return new T(a,r)}function m(a,r){if(a.length>=2){if(a[0]===255&&a[1]===254)return"utf-16le";if(a[0]===254&&a[1]===255)return"utf-16be"}return a.length>=3&&a[0]===239&&a[1]===187&&a[2]===191?"utf8":a.length>=4?a[0]===60&&a[1]===0&&a[2]===63&&a[3]===0?"utf-16le":a[0]===0&&a[1]===60&&a[2]===0&&a[3]===63?"utf-16be":"utf8":r?"utf8":null}function T(a,r){if(!(this instanceof T))return new T(a,r);c.apply(this),this._parser=new s(a,r),this.writable=!0,this.readable=!0;var A=this;this._parser.onend=function(){A.emit("end")},this._parser.onerror=function(C){A.emit("error",C),A._parser.error=null},this._decoder=null,this._decoderBuffer=null,l.forEach(function(C){Object.defineProperty(A,"on"+C,{get:function(){return A._parser["on"+C]},set:function(j){if(!j)return A.removeAllListeners(C),A._parser["on"+C]=j,j;A.on(C,j)},enumerable:!0,configurable:!1})})}T.prototype=Object.create(c.prototype,{constructor:{value:T}}),T.prototype._decodeBuffer=function(a,r){if(this._decoderBuffer&&(a=Buffer.concat([this._decoderBuffer,a]),this._decoderBuffer=null),!this._decoder){var A=m(a,r);if(!A)return this._decoderBuffer=a,"";this._parser.encoding=A,this._decoder=new TextDecoder(A)}return this._decoder.decode(a,{stream:!r})},T.prototype.write=function(a){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(a))a=this._decodeBuffer(a,!1);else if(this._decoderBuffer){var r=this._decodeBuffer(Buffer.alloc(0),!0);r&&(this._parser.write(r),this.emit("data",r))}return this._parser.write(a.toString()),this.emit("data",a),!0},T.prototype.end=function(a){if(a&&a.length&&this.write(a),this._decoderBuffer){var r=this._decodeBuffer(Buffer.alloc(0),!0);r&&(this._parser.write(r),this.emit("data",r))}else if(this._decoder){var A=this._decoder.decode();A&&(this._parser.write(A),this.emit("data",A))}return this._parser.end(),!0},T.prototype.on=function(a,r){var A=this;return!A._parser["on"+a]&&l.indexOf(a)!==-1&&(A._parser["on"+a]=function(){var C=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);C.splice(0,0,a),A.emit.apply(A,C)}),c.prototype.on.call(A,a,r)};var _="[CDATA[",b="DOCTYPE",h="http://www.w3.org/XML/1998/namespace",v="http://www.w3.org/2000/xmlns/",E={xml:h,xmlns:v},k=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,I=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,f=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function i(a){return a===" "||a===`
`||a==="\r"||a==="	"}function n(a){return a==='"'||a==="'"}function y(a){return a===">"||i(a)}function S(a,r){return a.test(r)}function x(a,r){return!S(a,r)}var u=0;e.STATE={BEGIN:u++,BEGIN_WHITESPACE:u++,TEXT:u++,TEXT_ENTITY:u++,OPEN_WAKA:u++,SGML_DECL:u++,SGML_DECL_QUOTED:u++,DOCTYPE:u++,DOCTYPE_QUOTED:u++,DOCTYPE_DTD:u++,DOCTYPE_DTD_QUOTED:u++,COMMENT_STARTING:u++,COMMENT:u++,COMMENT_ENDING:u++,COMMENT_ENDED:u++,CDATA:u++,CDATA_ENDING:u++,CDATA_ENDING_2:u++,PROC_INST:u++,PROC_INST_BODY:u++,PROC_INST_ENDING:u++,OPEN_TAG:u++,OPEN_TAG_SLASH:u++,ATTRIB:u++,ATTRIB_NAME:u++,ATTRIB_NAME_SAW_WHITE:u++,ATTRIB_VALUE:u++,ATTRIB_VALUE_QUOTED:u++,ATTRIB_VALUE_CLOSED:u++,ATTRIB_VALUE_UNQUOTED:u++,ATTRIB_VALUE_ENTITY_Q:u++,ATTRIB_VALUE_ENTITY_U:u++,CLOSE_TAG:u++,CLOSE_TAG_SAW_WHITE:u++,SCRIPT:u++,SCRIPT_ENDING:u++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(a){var r=e.ENTITIES[a],A=typeof r=="number"?String.fromCharCode(r):r;e.ENTITIES[a]=A});for(var g in e.STATE)e.STATE[e.STATE[g]]=g;u=e.STATE;function D(a,r,A){a[r]&&a[r](A)}function O(a){var r=a&&a.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return r?r[2]:null}function L(a){return a?a.toLowerCase().replace(/[^a-z0-9]/g,""):null}function R(a,r){let A=L(a),C=L(r);return!A||!C?!0:C==="utf16"?A==="utf16le"||A==="utf16be":A===C}function M(a,r){if(!(!a.strict||!a.encoding||!r||r.name!=="xml")){var A=O(r.body);A&&!R(a.encoding,A)&&X(a,"XML declaration encoding "+A+" does not match detected stream encoding "+a.encoding.toUpperCase())}}function P(a,r,A){a.textNode&&F(a),D(a,r,A)}function F(a){a.textNode=B(a.opt,a.textNode),a.textNode&&D(a,"ontext",a.textNode),a.textNode=""}function B(a,r){return a.trim&&(r=r.trim()),a.normalize&&(r=r.replace(/\s+/g," ")),r}function Y(a,r){return F(a),a.trackPosition&&(r+=`
Line: `+a.line+`
Column: `+a.column+`
Char: `+a.c),r=new Error(r),a.error=r,D(a,"onerror",r),a}function st(a){return a.sawRoot&&!a.closedRoot&&X(a,"Unclosed root tag"),a.state!==u.BEGIN&&a.state!==u.BEGIN_WHITESPACE&&a.state!==u.TEXT&&Y(a,"Unexpected end"),F(a),a.c="",a.closed=!0,D(a,"onend"),s.call(a,a.strict,a.opt),a}function X(a,r){if(typeof a!="object"||!(a instanceof s))throw new Error("bad call to strictFail");a.strict&&Y(a,r)}function Fe(a){a.strict||(a.tagName=a.tagName[a.looseCase]());var r=a.tags[a.tags.length-1]||a,A=a.tag={name:a.tagName,attributes:{}};a.opt.xmlns&&(A.ns=r.ns),a.attribList.length=0,P(a,"onopentagstart",A)}function Ut(a,r){var A=a.indexOf(":"),C=A<0?["",a]:a.split(":"),j=C[0],z=C[1];return r&&a==="xmlns"&&(j="xmlns",z=""),{prefix:j,local:z}}function qt(a){if(a.strict||(a.attribName=a.attribName[a.looseCase]()),a.attribList.indexOf(a.attribName)!==-1||a.tag.attributes.hasOwnProperty(a.attribName)){a.attribName=a.attribValue="";return}if(a.opt.xmlns){var r=Ut(a.attribName,!0),A=r.prefix,C=r.local;if(A==="xmlns")if(C==="xml"&&a.attribValue!==h)X(a,"xml: prefix must be bound to "+h+`
Actual: `+a.attribValue);else if(C==="xmlns"&&a.attribValue!==v)X(a,"xmlns: prefix must be bound to "+v+`
Actual: `+a.attribValue);else{var j=a.tag,z=a.tags[a.tags.length-1]||a;j.ns===z.ns&&(j.ns=Object.create(z.ns)),j.ns[C]=a.attribValue}a.attribList.push([a.attribName,a.attribValue])}else a.tag.attributes[a.attribName]=a.attribValue,P(a,"onattribute",{name:a.attribName,value:a.attribValue});a.attribName=a.attribValue=""}function wt(a,r){if(a.opt.xmlns){var A=a.tag,C=Ut(a.tagName);A.prefix=C.prefix,A.local=C.local,A.uri=A.ns[C.prefix]||"",A.prefix&&!A.uri&&(X(a,"Unbound namespace prefix: "+JSON.stringify(a.tagName)),A.uri=C.prefix);var j=a.tags[a.tags.length-1]||a;A.ns&&j.ns!==A.ns&&Object.keys(A.ns).forEach(function(sr){P(a,"onopennamespace",{prefix:sr,uri:A.ns[sr]})});for(var z=0,H=a.attribList.length;z<H;z++){var tt=a.attribList[z],nt=tt[0],W=tt[1],J=Ut(nt,!0),ct=J.prefix,ii=J.local,or=ct===""?"":A.ns[ct]||"",Be={name:nt,value:W,prefix:ct,local:ii,uri:or};ct&&ct!=="xmlns"&&!or&&(X(a,"Unbound namespace prefix: "+JSON.stringify(ct)),Be.uri=ct),a.tag.attributes[nt]=Be,P(a,"onattribute",Be)}a.attribList.length=0}a.tag.isSelfClosing=!!r,a.sawRoot=!0,a.tags.push(a.tag),P(a,"onopentag",a.tag),r||(!a.noscript&&a.tagName.toLowerCase()==="script"?a.state=u.SCRIPT:a.state=u.TEXT,a.tag=null,a.tagName=""),a.attribName=a.attribValue="",a.attribList.length=0}function jt(a){if(!a.tagName){X(a,"Weird empty close tag."),a.textNode+="</>",a.state=u.TEXT;return}if(a.script){if(a.tagName!=="script"){a.script+="</"+a.tagName+">",a.tagName="",a.state=u.SCRIPT;return}P(a,"onscript",a.script),a.script=""}var r=a.tags.length,A=a.tagName;a.strict||(A=A[a.looseCase]());for(var C=A;r--;){var j=a.tags[r];if(j.name!==C)X(a,"Unexpected close tag");else break}if(r<0){X(a,"Unmatched closing tag: "+a.tagName),a.textNode+="</"+a.tagName+">",a.state=u.TEXT;return}a.tagName=A;for(var z=a.tags.length;z-- >r;){var H=a.tag=a.tags.pop();a.tagName=a.tag.name,P(a,"onclosetag",a.tagName);var tt={};for(var nt in H.ns)tt[nt]=H.ns[nt];var W=a.tags[a.tags.length-1]||a;a.opt.xmlns&&H.ns!==W.ns&&Object.keys(H.ns).forEach(function(J){var ct=H.ns[J];P(a,"onclosenamespace",{prefix:J,uri:ct})})}r===0&&(a.closedRoot=!0),a.tagName=a.attribValue=a.attribName="",a.attribList.length=0,a.state=u.TEXT}function $e(a){var r=a.entity,A=r.toLowerCase(),C,j="";return a.ENTITIES[r]?a.ENTITIES[r]:a.ENTITIES[A]?a.ENTITIES[A]:(r=A,r.charAt(0)==="#"&&(r.charAt(1)==="x"?(r=r.slice(2),C=parseInt(r,16),j=C.toString(16)):(r=r.slice(1),C=parseInt(r,10),j=C.toString(10))),r=r.replace(/^0+/,""),isNaN(C)||j.toLowerCase()!==r||C<0||C>1114111?(X(a,"Invalid character entity"),"&"+a.entity+";"):String.fromCodePoint(C))}function Qt(a,r){r==="<"?(a.state=u.OPEN_WAKA,a.startTagPosition=a.position):i(r)||(X(a,"Non-whitespace before first tag."),a.textNode=r,a.state=u.TEXT)}function Xt(a,r){var A="";return r<a.length&&(A=a.charAt(r)),A}function Zt(a){var r=this;if(this.error)throw this.error;if(r.closed)return Y(r,"Cannot write after close. Assign an onready handler.");if(a===null)return st(r);typeof a=="object"&&(a=a.toString());for(var A=0,C="";C=Xt(a,A++),r.c=C,!!C;)switch(r.trackPosition&&(r.position++,C===`
`?(r.line++,r.column=0):r.column++),r.state){case u.BEGIN:if(r.state=u.BEGIN_WHITESPACE,C==="\uFEFF")continue;Qt(r,C);continue;case u.BEGIN_WHITESPACE:Qt(r,C);continue;case u.TEXT:if(r.sawRoot&&!r.closedRoot){for(var z=A-1;C&&C!=="<"&&C!=="&";)C=Xt(a,A++),C&&r.trackPosition&&(r.position++,C===`
`?(r.line++,r.column=0):r.column++);r.textNode+=a.substring(z,A-1)}C==="<"&&!(r.sawRoot&&r.closedRoot&&!r.strict)?(r.state=u.OPEN_WAKA,r.startTagPosition=r.position):(!i(C)&&(!r.sawRoot||r.closedRoot)&&X(r,"Text data outside of root node."),C==="&"?r.state=u.TEXT_ENTITY:r.textNode+=C);continue;case u.SCRIPT:C==="<"?r.state=u.SCRIPT_ENDING:r.script+=C;continue;case u.SCRIPT_ENDING:C==="/"?r.state=u.CLOSE_TAG:(r.script+="<"+C,r.state=u.SCRIPT);continue;case u.OPEN_WAKA:if(C==="!")r.state=u.SGML_DECL,r.sgmlDecl="";else if(!i(C))if(S(k,C))r.state=u.OPEN_TAG,r.tagName=C;else if(C==="/")r.state=u.CLOSE_TAG,r.tagName="";else if(C==="?")r.state=u.PROC_INST,r.procInstName=r.procInstBody="";else{if(X(r,"Unencoded <"),r.startTagPosition+1<r.position){var j=r.position-r.startTagPosition;C=new Array(j).join(" ")+C}r.textNode+="<"+C,r.state=u.TEXT}continue;case u.SGML_DECL:if(r.sgmlDecl+C==="--"){r.state=u.COMMENT,r.comment="",r.sgmlDecl="";continue}r.doctype&&r.doctype!==!0&&r.sgmlDecl?(r.state=u.DOCTYPE_DTD,r.doctype+="<!"+r.sgmlDecl+C,r.sgmlDecl=""):(r.sgmlDecl+C).toUpperCase()===_?(P(r,"onopencdata"),r.state=u.CDATA,r.sgmlDecl="",r.cdata=""):(r.sgmlDecl+C).toUpperCase()===b?(r.state=u.DOCTYPE,(r.doctype||r.sawRoot)&&X(r,"Inappropriately located doctype declaration"),r.doctype="",r.sgmlDecl=""):C===">"?(P(r,"onsgmldeclaration",r.sgmlDecl),r.sgmlDecl="",r.state=u.TEXT):(n(C)&&(r.state=u.SGML_DECL_QUOTED),r.sgmlDecl+=C);continue;case u.SGML_DECL_QUOTED:C===r.q&&(r.state=u.SGML_DECL,r.q=""),r.sgmlDecl+=C;continue;case u.DOCTYPE:C===">"?(r.state=u.TEXT,P(r,"ondoctype",r.doctype),r.doctype=!0):(r.doctype+=C,C==="["?r.state=u.DOCTYPE_DTD:n(C)&&(r.state=u.DOCTYPE_QUOTED,r.q=C));continue;case u.DOCTYPE_QUOTED:r.doctype+=C,C===r.q&&(r.q="",r.state=u.DOCTYPE);continue;case u.DOCTYPE_DTD:C==="]"?(r.doctype+=C,r.state=u.DOCTYPE):C==="<"?(r.state=u.OPEN_WAKA,r.startTagPosition=r.position):n(C)?(r.doctype+=C,r.state=u.DOCTYPE_DTD_QUOTED,r.q=C):r.doctype+=C;continue;case u.DOCTYPE_DTD_QUOTED:r.doctype+=C,C===r.q&&(r.state=u.DOCTYPE_DTD,r.q="");continue;case u.COMMENT:C==="-"?r.state=u.COMMENT_ENDING:r.comment+=C;continue;case u.COMMENT_ENDING:C==="-"?(r.state=u.COMMENT_ENDED,r.comment=B(r.opt,r.comment),r.comment&&P(r,"oncomment",r.comment),r.comment=""):(r.comment+="-"+C,r.state=u.COMMENT);continue;case u.COMMENT_ENDED:C!==">"?(X(r,"Malformed comment"),r.comment+="--"+C,r.state=u.COMMENT):r.doctype&&r.doctype!==!0?r.state=u.DOCTYPE_DTD:r.state=u.TEXT;continue;case u.CDATA:for(var z=A-1;C&&C!=="]";)C=Xt(a,A++),C&&r.trackPosition&&(r.position++,C===`
`?(r.line++,r.column=0):r.column++);r.cdata+=a.substring(z,A-1),C==="]"&&(r.state=u.CDATA_ENDING);continue;case u.CDATA_ENDING:C==="]"?r.state=u.CDATA_ENDING_2:(r.cdata+="]"+C,r.state=u.CDATA);continue;case u.CDATA_ENDING_2:C===">"?(r.cdata&&P(r,"oncdata",r.cdata),P(r,"onclosecdata"),r.cdata="",r.state=u.TEXT):C==="]"?r.cdata+="]":(r.cdata+="]]"+C,r.state=u.CDATA);continue;case u.PROC_INST:C==="?"?r.state=u.PROC_INST_ENDING:i(C)?r.state=u.PROC_INST_BODY:r.procInstName+=C;continue;case u.PROC_INST_BODY:if(!r.procInstBody&&i(C))continue;C==="?"?r.state=u.PROC_INST_ENDING:r.procInstBody+=C;continue;case u.PROC_INST_ENDING:if(C===">"){let W={name:r.procInstName,body:r.procInstBody};M(r,W),P(r,"onprocessinginstruction",W),r.procInstName=r.procInstBody="",r.state=u.TEXT}else r.procInstBody+="?"+C,r.state=u.PROC_INST_BODY;continue;case u.OPEN_TAG:S(N,C)?r.tagName+=C:(Fe(r),C===">"?wt(r):C==="/"?r.state=u.OPEN_TAG_SLASH:(i(C)||X(r,"Invalid character in tag name"),r.state=u.ATTRIB));continue;case u.OPEN_TAG_SLASH:C===">"?(wt(r,!0),jt(r)):(X(r,"Forward-slash in opening tag not followed by >"),r.state=u.ATTRIB);continue;case u.ATTRIB:if(i(C))continue;C===">"?wt(r):C==="/"?r.state=u.OPEN_TAG_SLASH:S(k,C)?(r.attribName=C,r.attribValue="",r.state=u.ATTRIB_NAME):X(r,"Invalid attribute name");continue;case u.ATTRIB_NAME:C==="="?r.state=u.ATTRIB_VALUE:C===">"?(X(r,"Attribute without value"),r.attribValue=r.attribName,qt(r),wt(r)):i(C)?r.state=u.ATTRIB_NAME_SAW_WHITE:S(N,C)?r.attribName+=C:X(r,"Invalid attribute name");continue;case u.ATTRIB_NAME_SAW_WHITE:if(C==="=")r.state=u.ATTRIB_VALUE;else{if(i(C))continue;X(r,"Attribute without value"),r.tag.attributes[r.attribName]="",r.attribValue="",P(r,"onattribute",{name:r.attribName,value:""}),r.attribName="",C===">"?wt(r):S(k,C)?(r.attribName=C,r.state=u.ATTRIB_NAME):(X(r,"Invalid attribute name"),r.state=u.ATTRIB)}continue;case u.ATTRIB_VALUE:if(i(C))continue;n(C)?(r.q=C,r.state=u.ATTRIB_VALUE_QUOTED):(r.opt.unquotedAttributeValues||Y(r,"Unquoted attribute value"),r.state=u.ATTRIB_VALUE_UNQUOTED,r.attribValue=C);continue;case u.ATTRIB_VALUE_QUOTED:if(C!==r.q){C==="&"?r.state=u.ATTRIB_VALUE_ENTITY_Q:r.attribValue+=C;continue}qt(r),r.q="",r.state=u.ATTRIB_VALUE_CLOSED;continue;case u.ATTRIB_VALUE_CLOSED:i(C)?r.state=u.ATTRIB:C===">"?wt(r):C==="/"?r.state=u.OPEN_TAG_SLASH:S(k,C)?(X(r,"No whitespace between attributes"),r.attribName=C,r.attribValue="",r.state=u.ATTRIB_NAME):X(r,"Invalid attribute name");continue;case u.ATTRIB_VALUE_UNQUOTED:if(!y(C)){C==="&"?r.state=u.ATTRIB_VALUE_ENTITY_U:r.attribValue+=C;continue}qt(r),C===">"?wt(r):r.state=u.ATTRIB;continue;case u.CLOSE_TAG:if(r.tagName)C===">"?jt(r):S(N,C)?r.tagName+=C:r.script?(r.script+="</"+r.tagName+C,r.tagName="",r.state=u.SCRIPT):(i(C)||X(r,"Invalid tagname in closing tag"),r.state=u.CLOSE_TAG_SAW_WHITE);else{if(i(C))continue;x(k,C)?r.script?(r.script+="</"+C,r.state=u.SCRIPT):X(r,"Invalid tagname in closing tag."):r.tagName=C}continue;case u.CLOSE_TAG_SAW_WHITE:if(i(C))continue;C===">"?jt(r):X(r,"Invalid characters in closing tag");continue;case u.TEXT_ENTITY:case u.ATTRIB_VALUE_ENTITY_Q:case u.ATTRIB_VALUE_ENTITY_U:var H,tt;switch(r.state){case u.TEXT_ENTITY:H=u.TEXT,tt="textNode";break;case u.ATTRIB_VALUE_ENTITY_Q:H=u.ATTRIB_VALUE_QUOTED,tt="attribValue";break;case u.ATTRIB_VALUE_ENTITY_U:H=u.ATTRIB_VALUE_UNQUOTED,tt="attribValue";break}if(C===";"){var nt=$e(r);r.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(nt)?((r.entityCount+=1)>r.opt.maxEntityCount&&Y(r,"Parsed entity count exceeds max entity count"),(r.entityDepth+=1)>r.opt.maxEntityDepth&&Y(r,"Parsed entity depth exceeds max entity depth"),r.entity="",r.state=H,r.write(nt),r.entityDepth-=1):(r[tt]+=nt,r.entity="",r.state=H)}else S(r.entity.length?f:I,C)?r.entity+=C:(X(r,"Invalid character in entity name"),r[tt]+="&"+r.entity+C,r.entity="",r.state=H);continue;default:throw new Error(r,"Unknown state: "+r.state)}return r.position>=r.bufferCheckPosition&&w(r),r}String.fromCodePoint||(function(){var a=String.fromCharCode,r=Math.floor,A=function(){var C=16384,j=[],z,H,tt=-1,nt=arguments.length;if(!nt)return"";for(var W="";++tt<nt;){var J=Number(arguments[tt]);if(!isFinite(J)||J<0||J>1114111||r(J)!==J)throw RangeError("Invalid code point: "+J);J<=65535?j.push(J):(J-=65536,z=(J>>10)+55296,H=J%1024+56320,j.push(z,H)),(tt+1===nt||j.length>C)&&(W+=a.apply(null,j),j.length=0)}return W};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:A,configurable:!0,writable:!0}):String.fromCodePoint=A})()})(typeof Ie>"u"?Ie.sax={}:Ie)});var $n=$(Ye=>{(function(){"use strict";Ye.stripBOM=function(e){return e[0]==="\uFEFF"?e.substring(1):e}}).call(Ye)});var Je=$(Nt=>{(function(){"use strict";var e;e=new RegExp(/(?!xmlns)^.*:/),Nt.normalize=function(t){return t.toLowerCase()},Nt.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},Nt.stripPrefix=function(t){return t.replace(e,"")},Nt.parseNumbers=function(t){return isNaN(t)||(t=t%1===0?parseInt(t,10):parseFloat(t)),t},Nt.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t=t.toLowerCase()==="true"),t}}).call(Nt)});var Bn=$(bt=>{(function(){"use strict";var e,t,s,w,o,p,c,l,d,m=function(b,h){return function(){return b.apply(h,arguments)}},T=function(b,h){for(var v in h)_.call(h,v)&&(b[v]=h[v]);function E(){this.constructor=b}return E.prototype=h.prototype,b.prototype=new E,b.__super__=h.prototype,b},_={}.hasOwnProperty;l=Fn(),w=require("events"),e=$n(),c=Je(),d=require("timers").setImmediate,t=ce().defaults,o=function(b){return typeof b=="object"&&b!=null&&Object.keys(b).length===0},p=function(b,h,v){var E,k,N;for(E=0,k=b.length;E<k;E++)N=b[E],h=N(h,v);return h},s=function(b,h,v){var E;return E=Object.create(null),E.value=v,E.writable=!0,E.enumerable=!0,E.configurable=!0,Object.defineProperty(b,h,E)},bt.Parser=(function(b){T(h,b);function h(v){this.parseStringPromise=m(this.parseStringPromise,this),this.parseString=m(this.parseString,this),this.reset=m(this.reset,this),this.assignOrPush=m(this.assignOrPush,this),this.processAsync=m(this.processAsync,this);var E,k,N;if(!(this instanceof bt.Parser))return new bt.Parser(v);this.options={},k=t["0.2"];for(E in k)_.call(k,E)&&(N=k[E],this.options[E]=N);for(E in v)_.call(v,E)&&(N=v[E],this.options[E]=N);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}return h.prototype.processAsync=function(){var v,E;try{return this.remaining.length<=this.options.chunkSize?(v=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(v),this.saxParser.close()):(v=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(v),d(this.processAsync))}catch(k){if(E=k,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(E)}},h.prototype.assignOrPush=function(v,E,k){return E in v?(v[E]instanceof Array||s(v,E,[v[E]]),v[E].push(k)):this.options.explicitArray?s(v,E,[k]):s(v,E,k)},h.prototype.reset=function(){var v,E,k,N;return this.removeAllListeners(),this.saxParser=l.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(I){return function(f){if(I.saxParser.resume(),!I.saxParser.errThrown)return I.saxParser.errThrown=!0,I.emit("error",f)}})(this),this.saxParser.onend=(function(I){return function(){if(!I.saxParser.ended)return I.saxParser.ended=!0,I.emit("end",I.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,N=[],v=this.options.attrkey,E=this.options.charkey,this.saxParser.onopentag=(function(I){return function(f){var i,n,y,S,x;if(y={},y[E]="",!I.options.ignoreAttrs){x=f.attributes;for(i in x)_.call(x,i)&&(!(v in y)&&!I.options.mergeAttrs&&(y[v]={}),n=I.options.attrValueProcessors?p(I.options.attrValueProcessors,f.attributes[i],i):f.attributes[i],S=I.options.attrNameProcessors?p(I.options.attrNameProcessors,i):i,I.options.mergeAttrs?I.assignOrPush(y,S,n):s(y[v],S,n))}return y["#name"]=I.options.tagNameProcessors?p(I.options.tagNameProcessors,f.name):f.name,I.options.xmlns&&(y[I.options.xmlnskey]={uri:f.uri,local:f.local}),N.push(y)}})(this),this.saxParser.onclosetag=(function(I){return function(){var f,i,n,y,S,x,u,g,D,O;if(x=N.pop(),S=x["#name"],(!I.options.explicitChildren||!I.options.preserveChildrenOrder)&&delete x["#name"],x.cdata===!0&&(f=x.cdata,delete x.cdata),D=N[N.length-1],x[E].match(/^\s*$/)&&!f?(i=x[E],delete x[E]):(I.options.trim&&(x[E]=x[E].trim()),I.options.normalize&&(x[E]=x[E].replace(/\s{2,}/g," ").trim()),x[E]=I.options.valueProcessors?p(I.options.valueProcessors,x[E],S):x[E],Object.keys(x).length===1&&E in x&&!I.EXPLICIT_CHARKEY&&(x=x[E])),o(x)&&(typeof I.options.emptyTag=="function"?x=I.options.emptyTag():x=I.options.emptyTag!==""?I.options.emptyTag:i),I.options.validator!=null&&(O="/"+(function(){var L,R,M;for(M=[],L=0,R=N.length;L<R;L++)y=N[L],M.push(y["#name"]);return M})().concat(S).join("/"),(function(){var L;try{return x=I.options.validator(O,D&&D[S],x)}catch(R){return L=R,I.emit("error",L)}})()),I.options.explicitChildren&&!I.options.mergeAttrs&&typeof x=="object"){if(!I.options.preserveChildrenOrder)y={},I.options.attrkey in x&&(y[I.options.attrkey]=x[I.options.attrkey],delete x[I.options.attrkey]),!I.options.charsAsChildren&&I.options.charkey in x&&(y[I.options.charkey]=x[I.options.charkey],delete x[I.options.charkey]),Object.getOwnPropertyNames(x).length>0&&(y[I.options.childkey]=x),x=y;else if(D){D[I.options.childkey]=D[I.options.childkey]||[],u={};for(n in x)_.call(x,n)&&s(u,n,x[n]);D[I.options.childkey].push(u),delete x["#name"],Object.keys(x).length===1&&E in x&&!I.EXPLICIT_CHARKEY&&(x=x[E])}}return N.length>0?I.assignOrPush(D,S,x):(I.options.explicitRoot&&(g=x,x={},s(x,S,g)),I.resultObject=x,I.saxParser.ended=!0,I.emit("end",I.resultObject))}})(this),k=(function(I){return function(f){var i,n;if(n=N[N.length-1],n)return n[E]+=f,I.options.explicitChildren&&I.options.preserveChildrenOrder&&I.options.charsAsChildren&&(I.options.includeWhiteChars||f.replace(/\\n/g,"").trim()!=="")&&(n[I.options.childkey]=n[I.options.childkey]||[],i={"#name":"__text__"},i[E]=f,I.options.normalize&&(i[E]=i[E].replace(/\s{2,}/g," ").trim()),n[I.options.childkey].push(i)),n}})(this),this.saxParser.ontext=k,this.saxParser.oncdata=(function(I){return function(f){var i;if(i=k(f),i)return i.cdata=!0}})(this)},h.prototype.parseString=function(v,E){var k;E!=null&&typeof E=="function"&&(this.on("end",function(N){return this.reset(),E(null,N)}),this.on("error",function(N){return this.reset(),E(N)}));try{return v=v.toString(),v.trim()===""?(this.emit("end",null),!0):(v=e.stripBOM(v),this.options.async?(this.remaining=v,d(this.processAsync),this.saxParser):this.saxParser.write(v).close())}catch(N){if(k=N,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw k}else return this.emit("error",k),this.saxParser.errThrown=!0}},h.prototype.parseStringPromise=function(v){return new Promise((function(E){return function(k,N){return E.parseString(v,function(I,f){return I?N(I):k(f)})}})(this))},h})(w),bt.parseString=function(b,h,v){var E,k,N;return v!=null?(typeof v=="function"&&(E=v),typeof h=="object"&&(k=h)):(typeof h=="function"&&(E=h),k={}),N=new bt.Parser(k),N.parseString(b,E)},bt.parseStringPromise=function(b,h){var v,E;return typeof h=="object"&&(v=h),E=new bt.Parser(v),E.parseStringPromise(b)}}).call(bt)});var Ee=$(vt=>{(function(){"use strict";var e,t,s,w,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;t=ce(),e=Rn(),s=Bn(),w=Je(),vt.defaults=t.defaults,vt.processors=w,vt.ValidationError=(function(c){o(l,c);function l(d){this.message=d}return l})(Error),vt.Builder=e.Builder,vt.Parser=s.Parser,vt.parseString=s.parseString,vt.parseStringPromise=s.parseStringPromise}).call(vt)});var Zi={};ui(Zi,{activate:()=>Ji,deactivate:()=>Qi});module.exports=di(Zi);var V=U(require("vscode"));var q=U(require("vscode")),ae=U(require("fs")),it=U(require("path"));function lt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pi(e){return e==="high"?"I":e==="medium"?"II":"III"}function fi(e){let t={total:e.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let s of e)t[s.status]++,t[s.severity]++;return t}function cr(e){return JSON.stringify(e).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function lr(e){let t=cr(Object.fromEntries(e.stigs.flatMap(s=>s.rules.map(w=>[w.uuid,w]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${lt(e.title)}</title>
<style>${wi}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1>${lt(e.title)}</h1>
    <span class="chip chip-accent">CKLB v${lt(e.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${hi(e.target_data)}
</header>

${e.stigs.map((s,w)=>gi(s,w)).join(`
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
  <button id="detailClose" class="detail-close" title="Close">&times;</button>
  <div id="detailBody"></div>
</aside>

<script>
const vscode = acquireVsCodeApi();
const RULES = ${t};
const TARGET = ${cr(e.target_data)};
${yi}
</script>
</body>
</html>`}function hi(e){let t=[e.host_name&&`Host: ${e.host_name}`,e.ip_address&&`IP: ${e.ip_address}`,e.fqdn&&`FQDN: ${e.fqdn}`,e.mac_address&&`MAC: ${e.mac_address}`,e.target_type&&`Type: ${e.target_type}`,e.role&&e.role!=="None"&&`Role: ${e.role}`].filter(Boolean);return t.length?`<div class="target-row">${t.map(s=>`<span class="chip">${lt(s)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function gi(e,t){let s=fi(e.rules),w=o=>s.total?Math.round(o/s.total*100):0;return`
<section class="stig" data-idx="${t}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${lt(e.display_name||e.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${lt(e.release_info)}</span>
      <span class="chip">Version ${lt(e.version)}</span>
      <span class="chip">${e.size} rules</span>
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
    <div class="sev-seg sev-high" style="width:${w(s.high)}%"><span>CAT I \xB7 ${s.high}</span></div>
    <div class="sev-seg sev-med"  style="width:${w(s.medium)}%"><span>CAT II \xB7 ${s.medium}</span></div>
    <div class="sev-seg sev-low"  style="width:${w(s.low)}%"><span>CAT III \xB7 ${s.low}</span></div>
  </div>

  <!-- completion bar -->
  <div class="completion">
    <div class="completion-label">Completion: ${w(s.not_a_finding+s.not_applicable)}%</div>
    <div class="completion-track">
      <div class="completion-fill completion-naf" style="width:${w(s.not_a_finding)}%"></div>
      <div class="completion-fill completion-na"  style="width:${w(s.not_applicable)}%"></div>
    </div>
  </div>

  <!-- bulk action bar -->
  <div class="bulk-bar hidden" data-stig="${e.uuid}">
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
  <div class="filters" data-stig="${e.uuid}">
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
        <th style="width:36px"><input type="checkbox" class="select-all" data-stig="${e.uuid}" title="Select all" /></th>
        <th style="width:72px">CAT</th>
        <th style="width:90px">Vuln ID</th>
        <th style="width:130px">Rule Ver</th>
        <th>Title</th>
        <th style="width:120px">Status</th>
      </tr></thead>
      <tbody>
        ${e.rules.map(o=>mi(o,e.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function mi(e,t){let s=`${e.group_id} ${e.rule_version} ${e.rule_title} ${e.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${e.uuid}" data-stig="${t}"
    data-sev="${e.severity}" data-status="${e.status}" data-search="${lt(s)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${e.uuid}" data-stig="${t}" /></td>
  <td><span class="pill sev-${e.severity}">CAT ${pi(e.severity)}</span></td>
  <td><code>${lt(e.group_id)}</code></td>
  <td><code>${lt(e.rule_version)}</code></td>
  <td class="td-title">${lt(e.rule_title)}</td>
  <td><select class="inline-status st-${e.status}" data-uuid="${e.uuid}" data-stig="${t}">
    <option value="not_reviewed" ${e.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${e.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${e.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${e.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var yi=`
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
const panel   = document.getElementById('detailPanel');
const body    = document.getElementById('detailBody');
const close   = document.getElementById('detailClose');
const drop    = document.getElementById('detailBackdrop');

function hide() { panel.classList.add('hidden'); drop.classList.add('hidden'); }
close.onclick = hide;
drop.onclick  = hide;

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

    <details class="d-sec" open><summary>Discussion</summary><div class="d-text">\${fmt(r.discussion)}</div></details>
    <details class="d-sec" open><summary>Check Content</summary><div class="d-text">\${fmt(r.check_content)}</div></details>
    <details class="d-sec"><summary>Fix Text</summary><div class="d-text">\${fmt(r.fix_text)}</div></details>

    <details class="d-sec" open>
      <summary>Finding Details</summary>
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
      <textarea id="dFd" class="d-ta" rows="4" placeholder="Enter finding details\u2026">\${h(r.finding_details||'')}</textarea>
    </details>
    <details class="d-sec">
      <summary>Comments</summary>
      <textarea id="dCm" class="d-ta" rows="3" placeholder="Enter comments\u2026">\${h(r.comments||'')}</textarea>
    </details>

    <button class="btn-save" id="dSave">Save Changes</button>
  \`;

  document.getElementById('dTpl').onchange = function() {
    if (this.value) {
      const ta = document.getElementById('dFd');
      const pos = ta.selectionStart || ta.value.length;
      ta.value = ta.value.substring(0, pos) + this.value + ta.value.substring(pos);
      ta.focus();
      this.selectedIndex = 0;
    }
  };

  // Auto-save helper for this rule
  function doSave() {
    const ns = document.getElementById('dSt').value;
    const fd = document.getElementById('dFd').value;
    const cm = document.getElementById('dCm').value;
    vscode.postMessage({ type:'saveRule', ruleUuid:r.uuid, stigUuid, status:ns, finding_details:fd, comments:cm });
    // Update table row live
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
    // Flash saved indicator
    const btn = document.getElementById('dSave');
    if (btn) { btn.textContent = 'Saved'; btn.classList.add('btn-saved'); setTimeout(() => { btn.textContent = 'Save Changes'; btn.classList.remove('btn-saved'); }, 1500); }
  }

  // Auto-save on status change
  document.getElementById('dSt').onchange = doSave;
  // Auto-save on blur from text fields
  document.getElementById('dFd').onblur = doSave;
  document.getElementById('dCm').onblur = doSave;
  // Manual save button
  document.getElementById('dSave').onclick = doSave;
}

function h(s){if(!s)return'';const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function fmt(s){if(!s)return'<span class="muted">None</span>';return h(s).replace(/\\\\r\\\\n|\\\\n|\\n/g,'<br>').replace(/(\\$[^<]{2,})/g,'<code>$1</code>');}

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

  // Don't capture keys when typing in inputs/textareas/selects
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

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
`,wi=`
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
.detail{position:fixed;top:0;right:0;bottom:0;width:min(580px,92vw);background:var(--bg);border-left:1px solid var(--border);z-index:100;overflow-y:auto;padding:24px 22px 40px;transform:translateX(0);transition:transform .2s}
.detail.hidden{transform:translateX(110%)}
.backdrop.hidden{display:none}
.detail-close{position:sticky;top:0;float:right;background:none;border:none;color:var(--fg);font-size:1.6em;cursor:pointer;line-height:1;padding:0 4px;z-index:2}

.d-top{display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:.9em}
.d-title{font-size:1.05em;font-weight:600;margin-bottom:14px;line-height:1.4}

.d-status-row{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding:10px 12px;background:var(--card);border-radius:6px;border:1px solid var(--border)}
.d-status-row label{font-weight:600;font-size:.85em}
.d-status-row select{flex:1;background:var(--inp-bg);color:var(--inp-fg);border:1px solid var(--inp-bd);border-radius:4px;padding:5px 8px;font-size:.9em}

.d-meta{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:.82em;margin-bottom:16px;color:var(--gray)}
.d-meta b{color:var(--fg)}
.d-meta code{background:var(--card);padding:1px 5px;border-radius:3px;font-size:.9em}

.d-sec{margin-bottom:10px;border:1px solid var(--border);border-radius:6px;overflow:hidden}
.d-sec summary{padding:8px 12px;background:var(--card);cursor:pointer;font-weight:600;font-size:.88em;user-select:none}
.d-sec summary:hover{background:var(--hover)}
.d-text{padding:10px 12px;font-size:.85em;line-height:1.55;white-space:pre-wrap;word-break:break-word}
.d-text code{background:var(--card);padding:1px 5px;border-radius:3px;font-size:.88em}

.d-ta{width:100%;background:var(--inp-bg);color:var(--inp-fg);border:none;padding:10px 12px;font-family:inherit;font-size:.85em;resize:vertical;outline:none}
.d-ta:focus{box-shadow:inset 0 0 0 1px var(--accent)}

.btn-save{display:block;width:100%;margin-top:14px;padding:10px;background:var(--btn-bg);color:var(--btn-fg);border:none;border-radius:6px;font-size:.92em;font-weight:600;cursor:pointer}
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
`;var bi={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},vi={high:"CAT I",medium:"CAT II",low:"CAT III"};function ur(e){return e?e.includes('"')||e.includes(",")||e.includes(`
`)||e.includes("\r")?'"'+e.replace(/"/g,'""')+'"':e:""}function ee(e){let s=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(ur).join(",")];for(let w of e.stigs)for(let o of w.rules)s.push([o.group_id,o.rule_id,o.rule_version,vi[o.severity]||o.severity,bi[o.status]||o.status,o.rule_title,o.finding_details,o.comments,o.ccis.join("; "),o.srg_id].map(ur).join(","));return s.join(`\r
`)}function et(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var _i={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function G(e,t){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${et(e)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${et(t)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function Ti(e){let t=[G("Vuln_Num",e.group_id),G("Severity",e.severity),G("Group_Title",e.group_title),G("Rule_ID",e.rule_id),G("Rule_Ver",e.rule_version),G("Rule_Title",e.rule_title),G("Vuln_Discuss",e.discussion),G("IA_Controls",e.ia_controls),G("Check_Content",e.check_content),G("Fix_Text",e.fix_text),G("False_Positives",e.false_positives),G("False_Negatives",e.false_negatives),G("Documentable",e.documentable),G("Mitigations",e.mitigations),G("Potential_Impact",e.potential_impacts),G("Third_Party_Tools",e.third_party_tools),G("Mitigation_Control",e.mitigation_control),G("Responsibility",e.responsibility),G("Security_Override_Guidance",e.security_override_guidance),G("Check_Content_Ref",e.check_content_ref?.href||""),G("Weight",e.weight),G("Class",e.classification),G("STIGRef",e.stig_ref||""),G("TargetKey",e.target_key||"")];for(let s of e.ccis)t.push(G("CCI_REF",s));for(let s of e.legacy_ids)t.push(G("Legacy_ID",s));return`      <VULN>
${t.join(`
`)}
        <STATUS>${et(_i[e.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${et(e.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${et(e.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function ut(e,t){return`          <SI_DATA>
            <SID_NAME>${et(e)}</SID_NAME>
            <SID_DATA>${et(t)}</SID_DATA>
          </SI_DATA>`}function Ii(e){let t=[ut("version",e.version),ut("classification","UNCLASSIFIED"),ut("customname",""),ut("stigid",e.stig_id),ut("description",""),ut("filename",""),ut("releaseinfo",e.release_info),ut("title",e.stig_name),ut("uuid",e.uuid),ut("notice","terms-of-use"),ut("source","")].join(`
`),s=e.rules.map(Ti).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${t}
        </STIG_INFO>
${s}
    </iSTIG>`}function re(e){let t=e.target_data,s=t.is_web_database?"true":"false",w=`  <ASSET>
    <ROLE>${et(t.role)}</ROLE>
    <ASSET_TYPE>${et(t.target_type)}</ASSET_TYPE>
    <HOST_NAME>${et(t.host_name)}</HOST_NAME>
    <HOST_IP>${et(t.ip_address)}</HOST_IP>
    <HOST_MAC>${et(t.mac_address)}</HOST_MAC>
    <HOST_FQDN>${et(t.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${et(t.comments)}</TARGET_COMMENT>
    <TECH_AREA>${et(t.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${s}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${et(t.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${et(t.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`,o=e.stigs.map(Ii).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${w}
  <STIGS>
${o}
  </STIGS>
</CHECKLIST>`}var Ei={high:"CAT I",medium:"CAT II",low:"CAT III"};function dr(e){return e?e.includes('"')||e.includes(",")||e.includes(`
`)||e.includes("\r")?'"'+e.replace(/"/g,'""')+'"':e:""}function ne(e){let s=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(dr).join(",")],w=1;for(let o of e.stigs){let p=o.rules.filter(c=>c.status==="open");for(let c of p)s.push([String(w++),c.group_id,c.rule_id,c.rule_version,Ei[c.severity]||c.severity,c.rule_title,`${o.stig_name} ${o.release_info}`,c.finding_details,"","","","","","","Ongoing",c.comments,c.ccis.join("; "),e.target_data.host_name].map(dr).join(","))}return s.join(`\r
`)}var Q=U(require("vscode")),ie="stigWorkbench.licenseKey",Ci="https://api.stigworkbench.com/v1/license/validate",Tt=null,kt=0,pr=1800*1e3,oe;function fr(e){oe=e,e.onDidChange(t=>{t.key===ie&&(Tt=null,kt=0)})}async function qe(){return oe?.get(ie)}async function xi(e){await oe?.store(ie,e),Tt=null,kt=0}async function Di(){await oe?.delete(ie),Tt=null,kt=0}async function hr(e){try{let t=new AbortController,s=setTimeout(()=>t.abort(),5e3),w=await fetch(Ci,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:e}),signal:t.signal});return clearTimeout(s),w.ok?await w.json():{valid:!1,message:`Server returned ${w.status}`}}catch{return Tt===!0?{valid:!0,message:"Offline \u2014 using cached validation"}:{valid:!1,message:"Could not reach license server. Check your connection."}}}async function Ue(){let e=Date.now();if(Tt!==null&&e<kt)return Tt;let t=await qe();if(!t)return Tt=!1,kt=e+pr,!1;let s=await hr(t);return Tt=s.valid,kt=e+pr,s.valid}async function gt(){if(await Ue())return!0;let t=await Q.window.showInformationMessage("This is a STIG Workbench Pro feature. Enter a license key to unlock.","Enter License Key","Get a License","Cancel");return t==="Enter License Key"?(await se(),await Ue()):(t==="Get a License"&&Q.env.openExternal(Q.Uri.parse("https://www.stigworkbench.com")),!1)}async function se(){let e=await Q.window.showInputBox({prompt:"Enter your STIG Workbench Pro license key",placeHolder:"SW-XXXX-XXXX-XXXX-XXXX",password:!1,ignoreFocusOut:!0});if(!e)return;let t=e.trim();t&&await Q.window.withProgress({location:Q.ProgressLocation.Notification,title:"Validating license..."},async()=>{let s=await hr(t);s.valid?(await xi(t),Q.window.showInformationMessage("License activated! Pro features are now unlocked.")):Q.window.showErrorMessage(`Invalid license key. ${s.message||"Please check and try again."}`)})}async function gr(){let e=await qe();if(!e){let s=await Q.window.showInformationMessage("STIG Workbench: Free tier. No Pro license key entered.","Enter License Key","Get a License");s==="Enter License Key"&&await se(),s==="Get a License"&&Q.env.openExternal(Q.Uri.parse("https://www.stigworkbench.com"));return}if(await Ue()){let s=e.substring(0,7)+"..."+e.substring(e.length-4);Q.window.showInformationMessage(`STIG Workbench Pro \u2014 Licensed (${s})`)}else Q.window.showWarningMessage("STIG Workbench: License key is stored but could not be validated. Check your connection or key.")}async function mr(){if(!await qe()){Q.window.showInformationMessage("No license key is stored.");return}await Q.window.showWarningMessage("Remove your Pro license key? Pro features will be locked.",{modal:!0},"Remove")==="Remove"&&(await Di(),Q.window.showInformationMessage("License key removed. Pro features are now locked."))}var dt=class e{constructor(t){this._context=t}static get activeDocumentUri(){return e._activeDocumentUri}static register(t){return q.window.registerCustomEditorProvider("stigViewer.cklbEditor",new e(t),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(t,s,w){s.webview.options={enableScripts:!0},(()=>{try{let l=JSON.parse(t.getText());s.webview.html=lr(l)}catch(l){s.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(l)}</pre></body></html>`}})(),e._activeDocumentUri=t.uri,s.onDidChangeViewState(()=>{s.active&&(e._activeDocumentUri=t.uri)});let p,c=q.workspace.onDidChangeTextDocument(l=>{l.document.uri.toString()===t.uri.toString()&&(clearTimeout(p),p=setTimeout(()=>{try{let d=JSON.parse(t.getText()),m=Object.fromEntries(d.stigs.flatMap(T=>T.rules.map(_=>[_.uuid,_])));s.webview.postMessage({type:"dataUpdate",rules:m})}catch{}},150))});s.webview.onDidReceiveMessage(async l=>{if(l.type==="saveRule"){let{ruleUuid:d,stigUuid:m,status:T,finding_details:_,comments:b}=l;try{let h=JSON.parse(t.getText()),E=h.stigs.find(k=>k.uuid===m)?.rules.find(k=>k.uuid===d);if(E){E.status=T,E.finding_details=_,E.comments=b;let k=new q.WorkspaceEdit,N=new q.Range(t.positionAt(0),t.positionAt(t.getText().length));k.replace(t.uri,N,JSON.stringify(h,null,2)),await q.workspace.applyEdit(k)}}catch(h){q.window.showErrorMessage(`Save failed: ${h}`)}}if(l.type==="saveTargetData")try{let d=JSON.parse(t.getText());Object.assign(d.target_data,l.targetData);let m=new q.WorkspaceEdit,T=new q.Range(t.positionAt(0),t.positionAt(t.getText().length));m.replace(t.uri,T,JSON.stringify(d,null,2)),await q.workspace.applyEdit(m),q.window.showInformationMessage("Target data updated")}catch(d){q.window.showErrorMessage(`Save target data failed: ${d}`)}if(l.type==="exportPoam"){if(!await gt())return;try{let d=JSON.parse(t.getText()),m=ne(d),T=d.stigs.reduce((h,v)=>h+v.rules.filter(E=>E.status==="open").length,0),_=it.basename(t.uri.fsPath,".cklb")+"_POAM.csv",b=await q.window.showSaveDialog({defaultUri:q.Uri.file(it.join(it.dirname(t.uri.fsPath),_)),filters:{CSV:["csv"]},title:`Export POA&M (${T} open findings)`});b&&(ae.writeFileSync(b.fsPath,m,"utf-8"),q.window.showInformationMessage(`Exported POA&M (${T} findings) \u2192 ${it.basename(b.fsPath)}`))}catch(d){q.window.showErrorMessage(`POA&M export failed: ${d}`)}}if(l.type==="exportCsv")try{let d=JSON.parse(t.getText()),m=ee(d),T=it.basename(t.uri.fsPath,".cklb")+".csv",_=await q.window.showSaveDialog({defaultUri:q.Uri.file(it.join(it.dirname(t.uri.fsPath),T)),filters:{CSV:["csv"]},title:"Export Summary CSV"});_&&(ae.writeFileSync(_.fsPath,m,"utf-8"),q.window.showInformationMessage(`Exported CSV \u2192 ${it.basename(_.fsPath)}`))}catch(d){q.window.showErrorMessage(`CSV export failed: ${d}`)}if(l.type==="exportCkl")try{let d=JSON.parse(t.getText()),m=re(d),T=it.basename(t.uri.fsPath,".cklb")+".ckl",_=await q.window.showSaveDialog({defaultUri:q.Uri.file(it.join(it.dirname(t.uri.fsPath),T)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});_&&(ae.writeFileSync(_.fsPath,m,"utf-8"),q.window.showInformationMessage(`Exported CKL \u2192 ${it.basename(_.fsPath)}`))}catch(d){q.window.showErrorMessage(`CKL export failed: ${d}`)}if(l.type==="bulkSaveRules"){let{ruleUuids:d,stigUuid:m,status:T,comments:_}=l;try{let b=JSON.parse(t.getText()),h=b.stigs.find(N=>N.uuid===m);if(!h)return;let v=0;for(let N of h.rules)d.includes(N.uuid)&&(N.status=T,_&&(N.comments=_),v++);let E=new q.WorkspaceEdit,k=new q.Range(t.positionAt(0),t.positionAt(t.getText().length));E.replace(t.uri,k,JSON.stringify(b,null,2)),await q.workspace.applyEdit(E),q.window.showInformationMessage(`Bulk updated ${v} rules \u2192 ${T.replace(/_/g," ")}`)}catch(b){q.window.showErrorMessage(`Bulk save failed: ${b}`)}}}),s.onDidDispose(()=>c.dispose())}};var Ot=U(require("vscode")),De=U(require("fs")),Lt=U(require("path")),Se=U(Ee());var rt=[];for(let e=0;e<256;++e)rt.push((e+256).toString(16).slice(1));function Un(e,t=0){return(rt[e[t+0]]+rt[e[t+1]]+rt[e[t+2]]+rt[e[t+3]]+"-"+rt[e[t+4]]+rt[e[t+5]]+"-"+rt[e[t+6]]+rt[e[t+7]]+"-"+rt[e[t+8]]+rt[e[t+9]]+"-"+rt[e[t+10]]+rt[e[t+11]]+rt[e[t+12]]+rt[e[t+13]]+rt[e[t+14]]+rt[e[t+15]]).toLowerCase()}var qn=require("node:crypto"),xe=new Uint8Array(256),Ce=xe.length;function Qe(){return Ce>xe.length-16&&((0,qn.randomFillSync)(xe),Ce=0),xe.slice(Ce,Ce+=16)}var jn=require("node:crypto"),Ze={randomUUID:jn.randomUUID};function Si(e,t,s){e=e||{};let w=e.random??e.rng?.()??Qe();if(w.length<16)throw new Error("Random bytes length must be >= 16");if(w[6]=w[6]&15|64,w[8]=w[8]&63|128,t){if(s=s||0,s<0||s+16>t.length)throw new RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`);for(let o=0;o<16;++o)t[s+o]=w[o];return t}return Un(w)}function Ni(e,t,s){return Ze.randomUUID&&!t&&!e?Ze.randomUUID():Si(e,t,s)}var _t=Ni;function Ct(e){return e==null?[]:Array.isArray(e)?e:[e]}function ot(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?ot(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}function pt(e,t){let s=e.match(new RegExp(`<${t}>([\\s\\S]*?)<\\/${t}>`));return s?s[1].trim():""}function Ai(e){let t=e.match(/(V-\d+)/);return t?t[1]:e}function ki(e){let t=e.match(/(SV-\d+r\d+_rule)/);return t?t[1]:e}function Oi(e){let t=(e||"").toLowerCase();return t==="high"?"high":t==="medium"?"medium":"low"}function Li(e){let t=e;if(t.Benchmark)return t.Benchmark;let s=e["data-stream-collection"];if(s?.component!=null)for(let w of Ct(s.component)){let o=w.Benchmark;if(o)return o}return null}async function Xn(e){let t=e.fsPath,s=De.readFileSync(t,"utf-8"),w=await(0,Se.parseStringPromise)(s,{explicitArray:!1,tagNameProcessors:[Se.processors.stripPrefix]}),o=Li(w);if(!o)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let c=(o.$||{}).id||"",l=ot(o.title),d=ot(o.version),m="";for(let n of Ct(o["plain-text"]))if((n?.$||{}).id==="release-info"){m=ot(n);break}let T=_t(),_=_t(),b=new Date().toISOString(),h=Ct(o.Group),v=[];for(let n of h){let y=n?.$||{},S=Ai(y.id||""),x=ot(n.title),u=ot(n.description);for(let g of Ct(n.Rule)){let D=g?.$||{},O=ki(D.id||""),L=Oi(D.severity),R=D.weight||"10.0",M=ot(g.version),P=ot(g.title),F=ot(g.description),B=pt(F,"VulnDiscussion"),Y=pt(F,"FalsePositives"),st=pt(F,"FalseNegatives"),X=pt(F,"Documentable"),Fe=pt(F,"Mitigations"),Ut=pt(F,"SeverityOverrideGuidance"),qt=pt(F,"PotentialImpacts"),wt=pt(F,"ThirdPartyTools"),jt=pt(F,"MitigationControl"),$e=pt(F,"Responsibility"),Qt=pt(F,"IAControls"),Xt=ot(g.fixtext),Zt=Ct(g.check),a="",r={href:"",name:""},C=Zt.find(W=>W["check-content"])||Zt[0];if(C){a=ot(C["check-content"]);let W=Ct(C["check-content-ref"])[0];W?.$&&(r={href:W.$.href||"",name:W.$.name||""})}let j=[],z=[];for(let W of Ct(g.ident)){let J=W?.$?.system||"",ct=ot(W);J.includes("cci")?j.push(ct):J.includes("legacy")&&z.push(ct)}let H=null,tt=null;for(let W of Ct(g.reference))W?.identifier&&(H=ot(W.identifier)),W?.title&&(tt=ot(W.title));let nt=_t();v.push({uuid:nt,stig_uuid:T,target_key:H,stig_ref:tt,group_id:S,rule_id:O,rule_id_src:O,weight:R,classification:"Unclassified",severity:L,rule_version:M,group_title:x,rule_title:P,fix_text:Xt,false_positives:Y,false_negatives:st,discussion:B,check_content:a,documentable:X,mitigations:Fe,potential_impacts:qt,third_party_tools:wt,mitigation_control:jt,responsibility:$e,security_override_guidance:Ut,ia_controls:Qt,check_content_ref:r,legacy_ids:z,ccis:j,group_tree:[{id:S,title:x,description:u}],createdAt:b,updatedAt:b,STIGUuid:T,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:x})}}let E={stig_name:l,display_name:l,stig_id:c,release_info:m,version:d,uuid:T,reference_identifier:c,size:v.length,rules:v},N={title:l,id:_,stigs:[E],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},I=Lt.basename(t).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),f=Lt.join(Lt.dirname(t),I);De.writeFileSync(f,JSON.stringify(N,null,2));let i=Ot.Uri.file(f);await Ot.commands.executeCommand("vscode.openWith",i,"stigViewer.cklbEditor"),Ot.window.showInformationMessage(`Imported ${v.length} rules from XCCDF \u2192 ${I}`)}var Pt=U(require("vscode")),Ae=U(require("fs")),Mt=U(require("path")),ke=U(Ee());function Ne(e){return e==null?[]:Array.isArray(e)?e:[e]}function Z(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?Z(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}var Pi={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function Mi(e){let t=(e||"").toLowerCase();return t==="high"?"high":t==="medium"?"medium":"low"}async function Vn(e){let t=e.fsPath,s=Ae.readFileSync(t,"utf-8"),o=(await(0,ke.parseStringPromise)(s,{explicitArray:!1,tagNameProcessors:[ke.processors.stripPrefix]})).CHECKLIST;if(!o)throw new Error("No <CHECKLIST> element found in the CKL file.");let p=o.ASSET||{},c={target_type:Z(p.ASSET_TYPE)||"Computing",host_name:Z(p.HOST_NAME),ip_address:Z(p.HOST_IP),mac_address:Z(p.HOST_MAC),fqdn:Z(p.HOST_FQDN),comments:Z(p.TARGET_COMMENT),role:Z(p.ROLE)||"None",is_web_database:Z(p.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Z(p.TECH_AREA),web_db_site:Z(p.WEB_DB_SITE),web_db_instance:Z(p.WEB_DB_INSTANCE),classification:null},l=Ne(o.STIGS?.iSTIG),d=_t(),m=new Date().toISOString(),T=[];for(let k of l){let N=new Map;for(let u of Ne(k.STIG_INFO?.SI_DATA))N.set(Z(u.SID_NAME),Z(u.SID_DATA));let I=N.get("uuid")||_t(),f=N.get("title")||"",i=N.get("stigid")||"",n=N.get("version")||"",y=N.get("releaseinfo")||"",S=Ne(k.VULN),x=[];for(let u of S){let g=new Map,D=[],O=[];for(let B of Ne(u.STIG_DATA)){let Y=Z(B.VULN_ATTRIBUTE),st=Z(B.ATTRIBUTE_DATA);Y==="CCI_REF"?D.push(st):Y==="Legacy_ID"&&st?O.push(st):g.set(Y,st)}let L=g.get("Vuln_Num")||"",R=g.get("Rule_ID")||"",M=_t(),P=Z(u.STATUS),F=Pi[P]||"not_reviewed";x.push({uuid:M,stig_uuid:I,target_key:g.get("TargetKey")||null,stig_ref:g.get("STIGRef")||null,group_id:L,rule_id:R,rule_id_src:R,weight:g.get("Weight")||"10.0",classification:g.get("Class")||"Unclassified",severity:Mi(g.get("Severity")),rule_version:g.get("Rule_Ver")||"",group_title:g.get("Group_Title")||"",rule_title:g.get("Rule_Title")||"",fix_text:g.get("Fix_Text")||"",false_positives:g.get("False_Positives")||"",false_negatives:g.get("False_Negatives")||"",discussion:g.get("Vuln_Discuss")||"",check_content:g.get("Check_Content")||"",documentable:g.get("Documentable")||"",mitigations:g.get("Mitigations")||"",potential_impacts:g.get("Potential_Impact")||"",third_party_tools:g.get("Third_Party_Tools")||"",mitigation_control:g.get("Mitigation_Control")||"",responsibility:g.get("Responsibility")||"",security_override_guidance:g.get("Security_Override_Guidance")||"",ia_controls:g.get("IA_Controls")||"",check_content_ref:{href:g.get("Check_Content_Ref")||"",name:""},legacy_ids:O,ccis:D,group_tree:[{id:L,title:g.get("Group_Title")||"",description:""}],createdAt:m,updatedAt:m,STIGUuid:I,status:F,overrides:{},comments:Z(u.COMMENTS),finding_details:Z(u.FINDING_DETAILS),srg_id:g.get("Group_Title")||""})}T.push({stig_name:f,display_name:f,stig_id:i,release_info:y,version:n,uuid:I,reference_identifier:i,size:x.length,rules:x})}let _={title:T[0]?.stig_name||"Imported CKL",id:d,stigs:T,active:!0,mode:1,has_path:!0,target_data:c,cklb_version:"1"},b=Mt.basename(t,".ckl")+".cklb",h=Mt.join(Mt.dirname(t),b);Ae.writeFileSync(h,JSON.stringify(_,null,2));let v=Pt.Uri.file(h);await Pt.commands.executeCommand("vscode.openWith",v,"stigViewer.cklbEditor");let E=T.reduce((k,N)=>k+N.rules.length,0);Pt.window.showInformationMessage(`Imported ${E} rules from CKL \u2192 ${b}`)}var Rt=U(require("vscode")),zt=U(require("fs"));async function Gn(e){let t=await Rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!t?.[0])return;let s=e;if(!s){let _=await Rt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!_?.[0])return;s=_[0]}let w=JSON.parse(zt.readFileSync(t[0].fsPath,"utf-8")),o=JSON.parse(zt.readFileSync(s.fsPath,"utf-8")),p=new Map;for(let _ of w.stigs)for(let b of _.rules)p.set(b.rule_version,b);let c=0,l=0,d=0;for(let _ of o.stigs)for(let b of _.rules){d++;let h=p.get(b.rule_version);h?(b.status=h.status,b.finding_details=h.finding_details,b.comments=h.comments,b.updatedAt=new Date().toISOString(),c++):l++}let m=new Set;for(let _ of o.stigs)for(let b of _.rules)m.add(b.rule_version);let T=0;for(let _ of p.keys())m.has(_)||T++;zt.writeFileSync(s.fsPath,JSON.stringify(o,null,2)),await Rt.commands.executeCommand("vscode.openWith",s,"stigViewer.cklbEditor"),Rt.window.showInformationMessage(`Merge complete: ${c} carried forward, ${l} new rules, ${T} removed from old STIG`)}var ft=U(require("vscode")),zn=U(require("fs")),Le=class e{static async show(t){if(e._panel){e._panel.reveal(),await e._refresh();return}let s=ft.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",ft.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});e._panel=s,s.onDidDispose(()=>{e._panel=void 0}),s.webview.onDidReceiveMessage(async w=>{if(w.type==="openFile"){let o=ft.Uri.file(w.path);await ft.commands.executeCommand("vscode.openWith",o,"stigViewer.cklbEditor")}w.type==="refresh"&&await e._refresh()}),await e._refresh()}static async _refresh(){let t=e._panel;if(!t)return;let s=await ft.workspace.findFiles("**/*.cklb","**/node_modules/**"),w=[];for(let o of s)try{let p=zn.readFileSync(o.fsPath,"utf-8"),c=JSON.parse(p);for(let l of c.stigs){let d={file:ft.workspace.asRelativePath(o),uri:o.fsPath,title:c.title,hostName:c.target_data.host_name||"\u2014",stigName:l.display_name||l.stig_name,total:l.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let m of l.rules)d[m.status]++,d[m.severity]++;w.push(d)}}catch{}t.webview.html=Ri(w)}};function Ri(e){let t={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let p of e)t.total+=p.total,t.open+=p.open,t.not_a_finding+=p.not_a_finding,t.not_reviewed+=p.not_reviewed,t.not_applicable+=p.not_applicable,t.high+=p.high,t.medium+=p.medium,t.low+=p.low;let s=p=>t.total?Math.round(p/t.total*100):0,w=s(t.not_a_finding+t.not_applicable),o=e.map(p=>{let c=p.total?Math.round((p.not_a_finding+p.not_applicable)/p.total*100):0;return`<tr class="row" data-path="${Oe(p.uri)}">
      <td class="td-host">${Oe(p.hostName)}</td>
      <td class="td-stig">${Oe(p.stigName)}</td>
      <td class="td-n">${p.total}</td>
      <td class="td-n td-open">${p.open}</td>
      <td class="td-n td-naf">${p.not_a_finding}</td>
      <td class="td-n td-nr">${p.not_reviewed}</td>
      <td class="td-n td-na">${p.not_applicable}</td>
      <td class="td-n">${c}%</td>
      <td class="td-file">${Oe(p.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${Fi}</style>
</head>
<body>

<header class="hdr">
  <div class="hdr-row">
    <h1>STIG Dashboard</h1>
    <span class="chip">${e.length} checklists</span>
    <button class="btn-refresh" id="btnRefresh">Refresh</button>
  </div>
</header>

<div class="cards">
  <div class="card card-total"><div class="card-n">${t.total}</div><div class="card-l">Total Rules</div></div>
  <div class="card card-open"><div class="card-n">${t.open}</div><div class="card-l">Open</div></div>
  <div class="card card-naf"><div class="card-n">${t.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
  <div class="card card-nr"><div class="card-n">${t.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
  <div class="card card-na"><div class="card-n">${t.not_applicable}</div><div class="card-l">Not Applicable</div></div>
</div>

<div class="sev-bar">
  <div class="sev-seg sev-high" style="width:${s(t.high)}%"><span>CAT I \xB7 ${t.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${s(t.medium)}%"><span>CAT II \xB7 ${t.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${s(t.low)}%"><span>CAT III \xB7 ${t.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${w}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${s(t.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${s(t.not_applicable)}%"></div>
  </div>
</div>

${e.length===0?'<p class="muted">No .cklb files found in this workspace.</p>':`
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
    <tbody>${o}</tbody>
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
</body></html>`}function Oe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var Fi=`
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
`;var Ft=U(require("vscode")),tr=U(require("fs")),Wn={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Hn={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function $i(e){return e==="high"?"I":e==="medium"?"II":"III"}var Pe=class{static async show(t){let s=t;if(!s){let I=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!I?.[0])return;s=I[0]}let w=await Ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!w?.[0])return;let o=JSON.parse(tr.readFileSync(s.fsPath,"utf-8")),p=JSON.parse(tr.readFileSync(w[0].fsPath,"utf-8")),c=new Map;for(let I of o.stigs)for(let f of I.rules)c.set(f.rule_version,f);let l=new Map;for(let I of p.stigs)for(let f of I.rules)l.set(f.rule_version,f);let d=[],m=new Set([...c.keys(),...l.keys()]);for(let I of m){let f=c.get(I),i=l.get(I);if(f&&i){let n="unchanged";f.status!==i.status&&(n=Hn[i.status]>Hn[f.status]?"improved":"regression"),d.push({ruleVersion:I,groupId:i.group_id,ruleTitle:i.rule_title,severity:i.severity,statusA:f.status,statusB:i.status,change:n})}else i&&!f?d.push({ruleVersion:I,groupId:i.group_id,ruleTitle:i.rule_title,severity:i.severity,statusA:"",statusB:i.status,change:"new"}):f&&!i&&d.push({ruleVersion:I,groupId:f.group_id,ruleTitle:f.rule_title,severity:f.severity,statusA:f.status,statusB:"",change:"removed"})}let T={regression:0,new:1,improved:2,removed:3,unchanged:4};d.sort((I,f)=>T[I.change]-T[f.change]);let _=d.filter(I=>I.change==="regression").length,b=d.filter(I=>I.change==="improved").length,h=d.filter(I=>I.change==="new").length,v=d.filter(I=>I.change==="removed").length,E=d.filter(I=>I.change==="unchanged").length,k=d.filter(I=>I.change!=="unchanged"),N=Ft.window.createWebviewPanel("stigViewer.diff","STIG Diff",Ft.ViewColumn.One,{enableScripts:!0});N.webview.html=Bi(s.fsPath,w[0].fsPath,k,d,{regressions:_,improvements:b,newRules:h,removed:v,unchanged:E})}};function Wt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Bi(e,t,s,w,o){let p=e.split("/").pop()||e,c=t.split("/").pop()||t,l={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},d={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},m=T=>T.map(_=>`<tr class="row ${d[_.change]}" data-change="${_.change}">
    <td><span class="pill sev-${_.severity}">CAT ${$i(_.severity)}</span></td>
    <td><code>${Wt(_.groupId)}</code></td>
    <td><code>${Wt(_.ruleVersion)}</code></td>
    <td class="td-title">${Wt(_.ruleTitle)}</td>
    <td>${_.statusA?`<span class="pill st-${_.statusA}">${Wn[_.statusA]||_.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${_.statusB?`<span class="pill st-${_.statusB}">${Wn[_.statusB]||_.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${d[_.change]}">${l[_.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${Ui}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${Wt(p)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${Wt(c)}</span>
  </div>
</header>

<div class="cards">
  <div class="card card-reg"><div class="card-n">${o.regressions}</div><div class="card-l">Regressions</div></div>
  <div class="card card-imp"><div class="card-n">${o.improvements}</div><div class="card-l">Improvements</div></div>
  <div class="card card-new"><div class="card-n">${o.newRules}</div><div class="card-l">New Rules</div></div>
  <div class="card card-rem"><div class="card-n">${o.removed}</div><div class="card-l">Removed</div></div>
  <div class="card card-unc"><div class="card-n">${o.unchanged}</div><div class="card-l">Unchanged</div></div>
</div>

<div class="filters">
  <label><input type="checkbox" id="showUnchanged" /> Show ${o.unchanged} unchanged rules</label>
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
      ${m(s)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(s)};
const ALL     = ${JSON.stringify(w)};

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
</body></html>`}var Ui=`
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
`;var $t=U(require("vscode")),Ht=U(require("fs")),Re=U(Ee());function Kn(e){return e==null?[]:Array.isArray(e)?e:[e]}function Me(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?Me(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}var qi={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function ji(e){let t=e.match(/(SV-\d+r\d+_rule)/);return t?t[1]:e}async function Yn(e){let t=e;if(!t){let _=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!_?.[0])return;t=_[0]}let s=await $t.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!s?.[0])return;let w=JSON.parse(Ht.readFileSync(t.fsPath,"utf-8")),o=Ht.readFileSync(s[0].fsPath,"utf-8"),p=await(0,Re.parseStringPromise)(o,{explicitArray:!1,tagNameProcessors:[Re.processors.stripPrefix]}),c=null;if(p.TestResult?c=p.TestResult:p.Benchmark?.TestResult&&(c=p.Benchmark.TestResult,Array.isArray(c)&&(c=c[c.length-1])),!c)throw new Error("No <TestResult> element found in the XCCDF results file.");let l=new Map;for(let _ of Kn(c["rule-result"])){let b=_?.$?.idref||"",h=ji(b),v=Me(_.result).toLowerCase(),E=qi[v]||"not_reviewed",k="",N=Kn(_.check)[0];N&&(k=Me(N["check-content"])),!k&&_.message&&(k=Me(_.message)),l.set(h,{status:E,detail:k})}let d=0,m=0,T=new Date().toISOString();for(let _ of w.stigs)for(let b of _.rules){let h=l.get(b.rule_id);h?(b.status=h.status,h.detail&&(b.finding_details=h.detail),b.updatedAt=T,d++):m++}Ht.writeFileSync(t.fsPath,JSON.stringify(w,null,2)),await $t.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor"),$t.window.showInformationMessage(`SCAP import: ${d} rules updated, ${m} unmatched`)}var ht=U(require("vscode")),yt=U(require("fs")),At=U(require("path"));function Xi(e){let t=At.join(__dirname,"..","scan-patterns.json"),s=e||t;if(!yt.existsSync(s))throw new Error(`Scan patterns file not found: ${s}`);return JSON.parse(yt.readFileSync(s,"utf-8"))}function Vi(e,t){let s=[t.rule_title,t.discussion,t.check_content,t.group_title].join(" ").toLowerCase();return e.ruleKeywords.some(w=>s.includes(w.toLowerCase()))}function Jn(e){let t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`)}function er(e,t){let s=e.replace(/\\/g,"/");return t.some(w=>{if(w.includes("{")){let o=w.match(/^(.*)\{([^}]+)\}(.*)$/);if(o){let[,p,c,l]=o;return c.split(",").some(d=>{let m=p+d.trim()+l;return Jn(m).test(s)})}}return Jn(w).test(s)})}function Gi(e,t){let s=[];function w(o){let p;try{p=yt.readdirSync(o,{withFileTypes:!0})}catch{return}for(let c of p){let l=At.join(o,c.name),d=At.relative(e,l);er(d,t)||(c.isDirectory()?er(d+"/",t)||w(l):c.isFile()&&s.push(l))}}return w(e),s}function zi(e,t,s){let w;try{let c=yt.readFileSync(e);if(c.includes(0))return[];w=c.toString("utf-8")}catch{return[]}let o=w.split(`
`),p=[];for(let c of t){let l=s?"g":"gi",d;try{d=new RegExp(c,l)}catch{continue}for(let m=0;m<o.length;m++)d.test(o[m])&&p.push({line:m+1,content:o[m].trim().substring(0,200)}),d.lastIndex=0}return p}async function Qn(e){let t=e;if(!t){let d=await ht.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!d?.[0])return;t=d[0]}let s=await ht.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!s?.[0])return;let w=await ht.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!w)return;let o;if(w.includes("custom")){let d=await ht.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!d?.[0])return;o=d[0].fsPath}let p=Xi(o),c=JSON.parse(yt.readFileSync(t.fsPath,"utf-8")),l=s[0].fsPath;await ht.window.withProgress({location:ht.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(d,m)=>{d.report({message:"Discovering files..."});let T=Gi(l,p.excludeGlobs);if(m.isCancellationRequested)return;let _=[],b=new Date().toISOString(),h=0,v=0,E=0,k=0,N=c.stigs.reduce((f,i)=>f+i.rules.length,0);for(let f of c.stigs)for(let i of f.rules){if(m.isCancellationRequested)return;let n=p.scanPatterns.filter(L=>Vi(L,i));if(n.length===0)continue;h++,d.report({message:`Scanning ${i.group_id} (${h}/${N})`,increment:1/N*100});let y=[],S=[];for(let L of n){let R=T.filter(P=>{let F=At.relative(l,P);return er(F,L.fileGlobs)}),M=!1;for(let P of R){if(m.isCancellationRequested)return;let F=zi(P,L.patterns,L.caseSensitive);if(F.length>0){M=!0;let B=At.relative(l,P);for(let Y of F)y.push({file:B,line:Y.line,content:Y.content,patternId:L.id})}}M&&S.push(L.name)}let x=n.some(L=>L.matchMeansOpen),u=n.filter(L=>L.matchMeansOpen),g=y.filter(L=>u.some(R=>R.id===L.patternId)),D,O;if(g.length>0){D="open",E++;let L=n.find(R=>R.findingDetailOverride&&y.some(M=>M.patternId===R.id));if(L?.findingDetailOverride){let R=y.filter(M=>M.patternId===L.id).slice(0,20).map(M=>`  ${M.file}:${M.line} \u2014 ${M.content}`).join(`
`);O=L.findingDetailOverride.replace("{count}",String(y.filter(M=>M.patternId===L.id).length)).replace("{matches}",R).replace("{file}",y[0]?.file||"")}else{let R=g.slice(0,20).map(P=>`  ${P.file}:${P.line} \u2014 ${P.content}`).join(`
`),M=g.length>20?`
  ... and ${g.length-20} more`:"";O=`[AUTO-SCAN] Found ${g.length} potential issue(s) matching: ${S.join(", ")}

${R}${M}`}}else if(x)D="not_a_finding",k++,O=`[AUTO-SCAN] Scanned ${T.length} files for: ${n.map(L=>L.name).join(", ")}. No issues detected.`;else{let L=y.slice(0,10);if(L.length>0){D="not_reviewed";let R=n.find(M=>M.findingDetailOverride);R?.findingDetailOverride?O=R.findingDetailOverride.replace("{count}",String(y.length)).replace("{matches}",L.map(M=>M.file).join(", ")).replace("{file}",L[0]?.file||""):O=`[AUTO-SCAN] Found relevant files: ${L.map(M=>M.file).join(", ")}. Manual review required.`}else continue}i.status=D,i.finding_details=O,i.updatedAt=b,v++}yt.writeFileSync(t.fsPath,JSON.stringify(c,null,2)),await ht.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor");let I=N-v;ht.window.showInformationMessage(`Scan complete: ${v} rules evaluated (${E} open, ${k} not a finding, ${I} unmatched \u2014 review manually)`)})}var Bt=U(require("vscode")),Kt=U(require("fs"));var rr=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function Wi(e,t){let s=[];if(e.taxa)for(let o of e.taxa){let p=nr(o.id);p&&s.push(p)}if(t?.relationships){for(let o of t.relationships)if(o.target.toolComponent?.name?.toUpperCase()==="CWE"||o.target.id.startsWith("CWE-")){let p=nr(o.target.id);p&&s.push(p)}}if(t?.properties?.tags)for(let o of t.properties.tags){let p=o.match(/cwe[/-](\d+)/i);p&&s.push(parseInt(p[1],10))}let w=nr(e.ruleId);return w&&s.push(w),[...new Set(s)]}function nr(e){let t=e.match(/(?:CWE-?)(\d+)/i);return t?parseInt(t[1],10):null}async function Zn(e){let t=e;if(!t){let h=await Bt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!h?.[0])return;t=h[0]}let s=await Bt.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!s?.length)return;let w=JSON.parse(Kt.readFileSync(t.fsPath,"utf-8")),o=new Date().toISOString(),p=[];for(let h of w.stigs)p.push(...h.rules);let c=new Map,l=0,d=0,m=new Set,T=[];for(let h of s){let v=JSON.parse(Kt.readFileSync(h.fsPath,"utf-8"));for(let E of v.runs){let k=E.tool.driver.name;T.includes(k)||T.push(k);let N=new Map;if(E.tool.driver.rules)for(let I of E.tool.driver.rules)N.set(I.id,I);for(let I of E.results){l++;let f=N.get(I.ruleId),i=Wi(I,f);if(i.length===0)continue;let n=I.locations?.[0]?.physicalLocation,y=n?.artifactLocation?.uri||"",S=n?.region?.startLine||0,x=!1;for(let u of i){let g=rr.get(u);if(!g){m.add(u);continue}for(let D of p){let O=`${D.rule_title} ${D.discussion} ${D.check_content}`.toLowerCase();g.keywords.some(L=>O.includes(L.toLowerCase()))&&(c.has(D.uuid)||c.set(D.uuid,[]),c.get(D.uuid).push({tool:k,cwe:u,file:y.replace(/^file:\/\//,""),line:S,message:I.message.text.substring(0,300)}),x=!0)}}x&&d++}}}let _=0;for(let[h,v]of c){let E=p.find(I=>I.uuid===h);if(!E)continue;E.status="open",_++;let k=new Map;for(let I of v){let f=`CWE-${I.cwe}`;k.has(f)||k.set(f,[]),k.get(f).push(I)}let N=[`[SARIF IMPORT] ${v.length} finding(s) from: ${T.join(", ")}
`];for(let[I,f]of k){let i=rr.get(parseInt(I.replace("CWE-","")))?.name||I;N.push(`${I} \u2014 ${i}:`);let n=f.slice(0,10);for(let y of n)N.push(`  ${y.file}:${y.line} \u2014 ${y.message}`);f.length>10&&N.push(`  ... and ${f.length-10} more`)}E.finding_details=N.join(`
`),E.updatedAt=o}Kt.writeFileSync(t.fsPath,JSON.stringify(w,null,2)),await Bt.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor");let b=`SARIF import: ${l} findings processed, ${d} mapped to ${_} rules`;m.size>0&&(b+=` (${m.size} unmapped CWEs: ${[...m].slice(0,5).map(h=>`CWE-${h}`).join(", ")}${m.size>5?"...":""})`),Bt.window.showInformationMessage(b)}var xt=U(require("vscode")),Yt=U(require("fs"));function Hi(e){let t=[];if(!e.vulnerabilities)return t;for(let[s,w]of Object.entries(e.vulnerabilities))for(let o of w.via)typeof o=="object"&&t.push({name:s,severity:o.severity,title:o.title,url:o.url,cwe:o.cwe?.[0],fixAvailable:w.fixAvailable?"Yes":"No"});return t}function ti(e){let t=[],s=Array.isArray(e)?e:e.dependencies||[];for(let w of s)if(w.vulns?.length)for(let o of w.vulns)t.push({name:w.name,version:w.version,id:o.id,description:o.description,fixAvailable:o.fix_versions?.length?o.fix_versions.join(", "):"No"});return t}function Ki(e){if(e.vulnerabilities&&typeof e.vulnerabilities=="object")return{entries:Hi(e),source:"npm audit"};if(Array.isArray(e)&&e[0]?.vulns!==void 0)return{entries:ti(e),source:"pip-audit"};if(e.dependencies&&Array.isArray(e.dependencies))return{entries:ti(e),source:"pip-audit"};if(Array.isArray(e))return{entries:e.map(t=>({name:t.name||t.package||t.module||"",version:t.version||t.installed_version||"",severity:t.severity||t.level||"",title:t.title||t.advisory||t.description||"",id:t.id||t.cve||t.advisory_id||"",url:t.url||t.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function ei(e){let t=e;if(!t){let T=await xt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!T?.[0])return;t=T[0]}let s=await xt.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!s?.[0])return;let w=JSON.parse(Yt.readFileSync(t.fsPath,"utf-8")),o=JSON.parse(Yt.readFileSync(s[0].fsPath,"utf-8")),{entries:p,source:c}=Ki(o);if(p.length===0){xt.window.showInformationMessage(`No vulnerabilities found in ${c} output.`);return}let l=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],d=new Date().toISOString(),m=0;for(let T of w.stigs)for(let _ of T.rules){let b=`${_.rule_title} ${_.discussion} ${_.check_content}`.toLowerCase();if(!l.some(I=>b.includes(I)))continue;m++,_.status="open",_.updatedAt=d;let v={};for(let I of p){let f=(I.severity||"unknown").toLowerCase();v[f]=(v[f]||0)+1}let E=Object.entries(v).map(([I,f])=>`${f} ${I}`).join(", "),k=[`[AUDIT IMPORT] ${p.length} vulnerable dependencies found via ${c}`,`Severity breakdown: ${E}
`],N=p.slice(0,25);for(let I of N){let f=[I.name];I.version&&f.push(`v${I.version}`),I.severity&&f.push(`[${I.severity}]`),I.title&&f.push(`\u2014 ${I.title}`),I.id&&f.push(`(${I.id})`),I.fixAvailable&&I.fixAvailable!=="No"&&f.push(`fix: ${I.fixAvailable}`),k.push(`  ${f.join(" ")}`)}p.length>25&&k.push(`  ... and ${p.length-25} more`),_.finding_details=k.join(`
`)}Yt.writeFileSync(t.fsPath,JSON.stringify(w,null,2)),await xt.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor"),m>0?xt.window.showInformationMessage(`Imported ${p.length} vulnerabilities from ${c} \u2192 ${m} STIG rule(s) marked open`):xt.window.showWarningMessage(`Imported ${p.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var Dt=U(require("vscode")),Jt=U(require("fs")),St=U(require("path")),ri=U(require("zlib"));var ir=class{constructor(){this.files=[]}addFile(t,s){let w=typeof s=="string"?Buffer.from(s,"utf-8"):s,o=ri.deflateRawSync(w),p=this.crc32(w);this.files.push({name:t,data:w,crc:p,compressedData:o})}build(){let t=[],s=[],w=0;for(let l of this.files){let d=Buffer.from(l.name,"utf-8"),m=Buffer.alloc(30+d.length);m.writeUInt32LE(67324752,0),m.writeUInt16LE(20,4),m.writeUInt16LE(0,6),m.writeUInt16LE(8,8),m.writeUInt16LE(0,10),m.writeUInt16LE(0,12),m.writeUInt32LE(l.crc,14),m.writeUInt32LE(l.compressedData.length,18),m.writeUInt32LE(l.data.length,22),m.writeUInt16LE(d.length,26),m.writeUInt16LE(0,28),d.copy(m,30);let T=Buffer.alloc(46+d.length);T.writeUInt32LE(33639248,0),T.writeUInt16LE(20,4),T.writeUInt16LE(20,6),T.writeUInt16LE(0,8),T.writeUInt16LE(8,10),T.writeUInt16LE(0,12),T.writeUInt16LE(0,14),T.writeUInt32LE(l.crc,16),T.writeUInt32LE(l.compressedData.length,20),T.writeUInt32LE(l.data.length,24),T.writeUInt16LE(d.length,28),T.writeUInt16LE(0,30),T.writeUInt16LE(0,32),T.writeUInt16LE(0,34),T.writeUInt16LE(0,36),T.writeUInt32LE(0,38),T.writeUInt32LE(w,42),d.copy(T,46),t.push(m,l.compressedData),s.push(T),w+=m.length+l.compressedData.length}let o=w,p=0;for(let l of s)t.push(l),p+=l.length;let c=Buffer.alloc(22);return c.writeUInt32LE(101010256,0),c.writeUInt16LE(0,4),c.writeUInt16LE(0,6),c.writeUInt16LE(this.files.length,8),c.writeUInt16LE(this.files.length,10),c.writeUInt32LE(p,12),c.writeUInt32LE(o,16),c.writeUInt16LE(0,20),t.push(c),Buffer.concat(t)}crc32(t){let s=4294967295;for(let w=0;w<t.length;w++){s^=t[w];for(let o=0;o<8;o++)s=s>>>1^(s&1?3988292384:0)}return(s^4294967295)>>>0}};function Yi(e){let t=[];t.push("STIG ASSESSMENT EVIDENCE PACKAGE"),t.push(`================================
`),t.push(`Generated: ${new Date().toISOString()}`),t.push(`Title: ${e.title}`),t.push(`Host: ${e.target_data.host_name||"N/A"}`),t.push(`IP: ${e.target_data.ip_address||"N/A"}`),t.push(`FQDN: ${e.target_data.fqdn||"N/A"}
`);for(let s of e.stigs){let w={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let l of s.rules)w[l.status]++,w[l.severity]++;let o=s.rules.length,p=o?Math.round((w.not_a_finding+w.not_applicable)/o*100):0;t.push(`STIG: ${s.stig_name}`),t.push(`  ${s.release_info} | Version ${s.version}`),t.push(`  Total Rules: ${o}`),t.push(`  Open: ${w.open} | Not a Finding: ${w.not_a_finding} | Not Reviewed: ${w.not_reviewed} | Not Applicable: ${w.not_applicable}`),t.push(`  CAT I: ${w.high} | CAT II: ${w.medium} | CAT III: ${w.low}`),t.push(`  Completion: ${p}%
`);let c=s.rules.filter(l=>l.status==="open");if(c.length>0){t.push("  OPEN FINDINGS:");for(let l of c){let d=l.severity==="high"?"I":l.severity==="medium"?"II":"III";if(t.push(`    [CAT ${d}] ${l.group_id} \u2014 ${l.rule_title}`),l.finding_details){let m=l.finding_details.substring(0,200).replace(/\n/g,`
      `);t.push(`      ${m}`)}}t.push("")}}return t.push(`
PACKAGE CONTENTS:`),t.push("  checklist.cklb    \u2014 Full checklist in JSON format"),t.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),t.push("  summary.csv       \u2014 All rules with status and findings"),t.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),t.push("  report.txt        \u2014 This summary report"),t.join(`
`)}async function ni(e){let t=e;if(!t){let T=await Dt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!T?.[0])return;t=T[0]}let s=JSON.parse(Jt.readFileSync(t.fsPath,"utf-8")),w=St.basename(t.fsPath,".cklb"),o=new ir;if(o.addFile("checklist.cklb",JSON.stringify(s,null,2)),o.addFile("checklist.ckl",re(s)),o.addFile("summary.csv",ee(s)),o.addFile("poam.csv",ne(s)),o.addFile("report.txt",Yi(s)),(await Dt.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let T=await Dt.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(T)for(let _ of T){let b="evidence/"+St.basename(_.fsPath);o.addFile(b,Jt.readFileSync(_.fsPath))}}let c=`${w}_evidence_${new Date().toISOString().slice(0,10)}.zip`,l=await Dt.window.showSaveDialog({defaultUri:Dt.Uri.file(St.join(St.dirname(t.fsPath),c)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!l)return;Jt.writeFileSync(l.fsPath,o.build());let d=s.stigs.reduce((T,_)=>T+_.rules.length,0),m=s.stigs.reduce((T,_)=>T+_.rules.filter(b=>b.status==="open").length,0);Dt.window.showInformationMessage(`Evidence package saved: ${d} rules, ${m} open findings \u2192 ${St.basename(l.fsPath)}`)}function Ji(e){fr(e.secrets),e.subscriptions.push(dt.register(e)),e.subscriptions.push(V.commands.registerCommand("stigViewer.openFile",async()=>{let t=await V.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});t?.[0]&&await V.commands.executeCommand("vscode.openWith",t[0],"stigViewer.cklbEditor")})),e.subscriptions.push(V.commands.registerCommand("stigViewer.importXccdf",async t=>{if(!t){let s=await V.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!s?.[0])return;t=s[0]}try{await Xn(t)}catch(s){V.window.showErrorMessage(`XCCDF import failed: ${s}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.importCkl",async t=>{if(!t){let s=await V.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!s?.[0])return;t=s[0]}try{await Vn(t)}catch(s){V.window.showErrorMessage(`CKL import failed: ${s}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await Yn(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`SCAP import failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.mergeFindings",async()=>{if(await gt())try{await Gn(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`Merge failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.dashboard",async()=>{if(await gt())try{await Le.show(e)}catch(t){V.window.showErrorMessage(`Dashboard failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.diffChecklists",async()=>{if(await gt())try{await Pe.show(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`Diff failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.scanRepo",async()=>{if(await gt())try{await Qn(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`Repo scan failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.importSarif",async()=>{if(await gt())try{await Zn(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`SARIF import failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.importAudit",async()=>{if(await gt())try{await ei(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`Dependency audit import failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.exportEvidence",async()=>{if(await gt())try{await ni(dt.activeDocumentUri)}catch(t){V.window.showErrorMessage(`Evidence package failed: ${t}`)}})),e.subscriptions.push(V.commands.registerCommand("stigViewer.enterLicense",se)),e.subscriptions.push(V.commands.registerCommand("stigViewer.licenseStatus",gr)),e.subscriptions.push(V.commands.registerCommand("stigViewer.removeLicense",mr))}function Qi(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
