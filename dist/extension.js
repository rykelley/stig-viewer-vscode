"use strict";var Gn=Object.create;var Yt=Object.defineProperty;var zn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Hn=Object.getPrototypeOf,Kn=Object.prototype.hasOwnProperty;var B=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yn=(e,t)=>{for(var a in t)Yt(e,a,{get:t[a],enumerable:!0})},Qe=(e,t,a,b)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Wn(t))!Kn.call(e,o)&&o!==a&&Yt(e,o,{get:()=>t[o],enumerable:!(b=zn(t,o))||b.enumerable});return e};var j=(e,t,a)=>(a=e!=null?Gn(Hn(e)):{},Qe(t||!e||!e.__esModule?Yt(a,"default",{value:e,enumerable:!0}):a,e)),Jn=e=>Qe(Yt({},"__esModule",{value:!0}),e);var ee=B(Le=>{(function(){Le.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:`
`},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(Le)});var ht=B((nr,vt)=>{(function(){var e,t,a,b,o,p,c,l=[].slice,d={}.hasOwnProperty;e=function(){var m,T,_,w,h,v;if(v=arguments[0],h=2<=arguments.length?l.call(arguments,1):[],o(Object.assign))Object.assign.apply(null,arguments);else for(m=0,_=h.length;m<_;m++)if(w=h[m],w!=null)for(T in w)d.call(w,T)&&(v[T]=w[T]);return v},o=function(m){return!!m&&Object.prototype.toString.call(m)==="[object Function]"},p=function(m){var T;return!!m&&((T=typeof m)=="function"||T==="object")},a=function(m){return o(Array.isArray)?Array.isArray(m):Object.prototype.toString.call(m)==="[object Array]"},b=function(m){var T;if(a(m))return!m.length;for(T in m)if(d.call(m,T))return!1;return!0},c=function(m){var T,_;return p(m)&&(_=Object.getPrototypeOf(m))&&(T=_.constructor)&&typeof T=="function"&&T instanceof T&&Function.prototype.toString.call(T)===Function.prototype.toString.call(Object)},t=function(m){return o(m.valueOf)?m.valueOf():m},vt.exports.assign=e,vt.exports.isFunction=o,vt.exports.isObject=p,vt.exports.isArray=a,vt.exports.isEmpty=b,vt.exports.isPlainObject=c,vt.exports.getValue=t}).call(nr)});var Pe=B((ir,or)=>{(function(){var e;or.exports=e=(function(){function t(){}return t.prototype.hasFeature=function(a,b){return!0},t.prototype.createDocumentType=function(a,b,o){throw new Error("This DOM method is not implemented.")},t.prototype.createDocument=function(a,b,o){throw new Error("This DOM method is not implemented.")},t.prototype.createHTMLDocument=function(a){throw new Error("This DOM method is not implemented.")},t.prototype.getFeature=function(a,b){throw new Error("This DOM method is not implemented.")},t})()}).call(ir)});var cr=B((sr,ar)=>{(function(){var e;ar.exports=e=(function(){function t(){}return t.prototype.handleError=function(a){throw new Error(a)},t})()}).call(sr)});var dr=B((lr,ur)=>{(function(){var e;ur.exports=e=(function(){function t(a){this.arr=a||[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.arr.length}}),t.prototype.item=function(a){return this.arr[a]||null},t.prototype.contains=function(a){return this.arr.indexOf(a)!==-1},t})()}).call(lr)});var hr=B((pr,fr)=>{(function(){var e,t,a;t=cr(),a=dr(),fr.exports=e=(function(){function b(){var o;this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new t,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=o=Object.create(this.defaultParams)}return Object.defineProperty(b.prototype,"parameterNames",{get:function(){return new a(Object.keys(this.defaultParams))}}),b.prototype.getParameter=function(o){return this.params.hasOwnProperty(o)?this.params[o]:null},b.prototype.canSetParameter=function(o,p){return!0},b.prototype.setParameter=function(o,p){return p!=null?this.params[o]=p:delete this.params[o]},b})()}).call(pr)});var K=B((gr,mr)=>{(function(){mr.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(gr)});var Me=B((yr,br)=>{(function(){var e,t,a;e=K(),a=st(),br.exports=t=(function(){function b(o,p,c){if(this.parent=o,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),p==null)throw new Error("Missing attribute name. "+this.debugInfo(p));this.name=this.stringify.name(p),this.value=this.stringify.attValue(c),this.type=e.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(b.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(b.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(b.prototype,"textContent",{get:function(){return this.value},set:function(o){return this.value=o||""}}),Object.defineProperty(b.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(b.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(b.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(b.prototype,"specified",{get:function(){return!0}}),b.prototype.clone=function(){return Object.create(this)},b.prototype.toString=function(o){return this.options.writer.attribute(this,this.options.writer.filterOptions(o))},b.prototype.debugInfo=function(o){return o=o||this.name,o==null?"parent: <"+this.parent.name+">":"attribute: {"+o+"}, parent: <"+this.parent.name+">"},b.prototype.isEqualNode=function(o){return!(o.namespaceURI!==this.namespaceURI||o.prefix!==this.prefix||o.localName!==this.localName||o.value!==this.value)},b})()}).call(yr)});var re=B((wr,vr)=>{(function(){var e;vr.exports=e=(function(){function t(a){this.nodes=a}return Object.defineProperty(t.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.getNamedItem=function(a){return this.nodes[a]},t.prototype.setNamedItem=function(a){var b;return b=this.nodes[a.nodeName],this.nodes[a.nodeName]=a,b||null},t.prototype.removeNamedItem=function(a){var b;return b=this.nodes[a],delete this.nodes[a],b||null},t.prototype.item=function(a){return this.nodes[Object.keys(this.nodes)[a]]||null},t.prototype.getNamedItemNS=function(a,b){throw new Error("This DOM method is not implemented.")},t.prototype.setNamedItemNS=function(a){throw new Error("This DOM method is not implemented.")},t.prototype.removeNamedItemNS=function(a,b){throw new Error("This DOM method is not implemented.")},t})()}).call(wr)});var ne=B((_r,Tr)=>{(function(){var e,t,a,b,o,p,c,l,d,m=function(_,w){for(var h in w)T.call(w,h)&&(_[h]=w[h]);function v(){this.constructor=_}return v.prototype=w.prototype,_.prototype=new v,_.__super__=w.prototype,_},T={}.hasOwnProperty;d=ht(),l=d.isObject,c=d.isFunction,p=d.getValue,o=st(),e=K(),t=Me(),b=re(),Tr.exports=a=(function(_){m(w,_);function w(h,v,E){var k,N,I,f;if(w.__super__.constructor.call(this,h),v==null)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(v),this.type=e.Element,this.attribs={},this.schemaTypeInfo=null,E!=null&&this.attribute(E),h.type===e.Document&&(this.isRoot=!0,this.documentObject=h,h.rootObject=this,h.children)){for(f=h.children,N=0,I=f.length;N<I;N++)if(k=f[N],k.type===e.DocType){k.name=this.name;break}}}return Object.defineProperty(w.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(w.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(w.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(w.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(w.prototype,"attributes",{get:function(){return(!this.attributeMap||!this.attributeMap.nodes)&&(this.attributeMap=new b(this.attribs)),this.attributeMap}}),w.prototype.clone=function(){var h,v,E,k;E=Object.create(this),E.isRoot&&(E.documentObject=null),E.attribs={},k=this.attribs;for(v in k)T.call(k,v)&&(h=k[v],E.attribs[v]=h.clone());return E.children=[],this.children.forEach(function(N){var I;return I=N.clone(),I.parent=E,E.children.push(I)}),E},w.prototype.attribute=function(h,v){var E,k;if(h!=null&&(h=p(h)),l(h))for(E in h)T.call(h,E)&&(k=h[E],this.attribute(E,k));else c(v)&&(v=v.apply()),this.options.keepNullAttributes&&v==null?this.attribs[h]=new t(this,h,""):v!=null&&(this.attribs[h]=new t(this,h,v));return this},w.prototype.removeAttribute=function(h){var v,E,k;if(h==null)throw new Error("Missing attribute name. "+this.debugInfo());if(h=p(h),Array.isArray(h))for(E=0,k=h.length;E<k;E++)v=h[E],delete this.attribs[v];else delete this.attribs[h];return this},w.prototype.toString=function(h){return this.options.writer.element(this,this.options.writer.filterOptions(h))},w.prototype.att=function(h,v){return this.attribute(h,v)},w.prototype.a=function(h,v){return this.attribute(h,v)},w.prototype.getAttribute=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h].value:null},w.prototype.setAttribute=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNode=function(h){return this.attribs.hasOwnProperty(h)?this.attribs[h]:null},w.prototype.setAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNode=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNS=function(h,v,E){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.removeAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getAttributeNodeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setAttributeNodeNS=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.hasAttribute=function(h){return this.attribs.hasOwnProperty(h)},w.prototype.hasAttributeNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttribute=function(h,v){return this.attribs.hasOwnProperty(h)?this.attribs[h].isId:v},w.prototype.setIdAttributeNS=function(h,v,E){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.setIdAttributeNode=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByTagNameNS=function(h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.getElementsByClassName=function(h){throw new Error("This DOM method is not implemented."+this.debugInfo())},w.prototype.isEqualNode=function(h){var v,E,k;if(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.namespaceURI!==this.namespaceURI||h.prefix!==this.prefix||h.localName!==this.localName||h.attribs.length!==this.attribs.length)return!1;for(v=E=0,k=this.attribs.length-1;0<=k?E<=k:E>=k;v=0<=k?++E:--E)if(!this.attribs[v].isEqualNode(h.attribs[v]))return!1;return!0},w})(o)}).call(_r)});var Ut=B((Ir,Er)=>{(function(){var e,t,a=function(o,p){for(var c in p)b.call(p,c)&&(o[c]=p[c]);function l(){this.constructor=o}return l.prototype=p.prototype,o.prototype=new l,o.__super__=p.prototype,o},b={}.hasOwnProperty;t=st(),Er.exports=e=(function(o){a(p,o);function p(c){p.__super__.constructor.call(this,c),this.value=""}return Object.defineProperty(p.prototype,"data",{get:function(){return this.value},set:function(c){return this.value=c||""}}),Object.defineProperty(p.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(p.prototype,"textContent",{get:function(){return this.value},set:function(c){return this.value=c||""}}),p.prototype.clone=function(){return Object.create(this)},p.prototype.substringData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.appendData=function(c){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.insertData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.deleteData=function(c,l){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.replaceData=function(c,l,d){throw new Error("This DOM method is not implemented."+this.debugInfo())},p.prototype.isEqualNode=function(c){return!(!p.__super__.isEqualNode.apply(this,arguments).isEqualNode(c)||c.data!==this.data)},p})(t)}).call(Ir)});var ie=B((xr,Cr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),a=Ut(),Cr.exports=t=(function(p){b(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=e.CData,this.value=this.stringify.cdata(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.cdata(this,this.options.writer.filterOptions(l))},c})(a)}).call(xr)});var oe=B((Dr,Sr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Ut(),Sr.exports=a=(function(p){b(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=e.Comment,this.value=this.stringify.comment(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.comment(this,this.options.writer.filterOptions(l))},c})(t)}).call(Dr)});var se=B((Nr,Ar)=>{(function(){var e,t,a,b,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;b=ht().isObject,a=st(),e=K(),Ar.exports=t=(function(c){o(l,c);function l(d,m,T,_){var w;l.__super__.constructor.call(this,d),b(m)&&(w=m,m=w.version,T=w.encoding,_=w.standalone),m||(m="1.0"),this.type=e.Declaration,this.version=this.stringify.xmlVersion(m),T!=null&&(this.encoding=this.stringify.xmlEncoding(T)),_!=null&&(this.standalone=this.stringify.xmlStandalone(_))}return l.prototype.toString=function(d){return this.options.writer.declaration(this,this.options.writer.filterOptions(d))},l})(a)}).call(Nr)});var ae=B((kr,Or)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;a=st(),e=K(),Or.exports=t=(function(p){b(c,p);function c(l,d,m,T,_,w){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());if(m==null)throw new Error("Missing DTD attribute name. "+this.debugInfo(d));if(!T)throw new Error("Missing DTD attribute type. "+this.debugInfo(d));if(!_)throw new Error("Missing DTD attribute default. "+this.debugInfo(d));if(_.indexOf("#")!==0&&(_="#"+_),!_.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(d));if(w&&!_.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(d));this.elementName=this.stringify.name(d),this.type=e.AttributeDeclaration,this.attributeName=this.stringify.name(m),this.attributeType=this.stringify.dtdAttType(T),w&&(this.defaultValue=this.stringify.dtdAttDefault(w)),this.defaultValueType=_}return c.prototype.toString=function(l){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(l))},c})(a)}).call(kr)});var ce=B((Lr,Pr)=>{(function(){var e,t,a,b,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;b=ht().isObject,a=st(),e=K(),Pr.exports=t=(function(c){o(l,c);function l(d,m,T,_){if(l.__super__.constructor.call(this,d),T==null)throw new Error("Missing DTD entity name. "+this.debugInfo(T));if(_==null)throw new Error("Missing DTD entity value. "+this.debugInfo(T));if(this.pe=!!m,this.name=this.stringify.name(T),this.type=e.EntityDeclaration,!b(_))this.value=this.stringify.dtdEntityValue(_),this.internal=!0;else{if(!_.pubID&&!_.sysID)throw new Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(T));if(_.pubID&&!_.sysID)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(T));if(this.internal=!1,_.pubID!=null&&(this.pubID=this.stringify.dtdPubID(_.pubID)),_.sysID!=null&&(this.sysID=this.stringify.dtdSysID(_.sysID)),_.nData!=null&&(this.nData=this.stringify.dtdNData(_.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(T))}}return Object.defineProperty(l.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(l.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(l.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(l.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(l.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(l.prototype,"xmlVersion",{get:function(){return null}}),l.prototype.toString=function(d){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(d))},l})(a)}).call(Lr)});var le=B((Mr,Rr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;a=st(),e=K(),Rr.exports=t=(function(p){b(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD element name. "+this.debugInfo());m||(m="(#PCDATA)"),Array.isArray(m)&&(m="("+m.join(",")+")"),this.name=this.stringify.name(d),this.type=e.ElementDeclaration,this.value=this.stringify.dtdElementValue(m)}return c.prototype.toString=function(l){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(l))},c})(a)}).call(Mr)});var ue=B((Fr,Br)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;a=st(),e=K(),Br.exports=t=(function(p){b(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing DTD notation name. "+this.debugInfo(d));if(!m.pubID&&!m.sysID)throw new Error("Public or system identifiers are required for an external entity. "+this.debugInfo(d));this.name=this.stringify.name(d),this.type=e.NotationDeclaration,m.pubID!=null&&(this.pubID=this.stringify.dtdPubID(m.pubID)),m.sysID!=null&&(this.sysID=this.stringify.dtdSysID(m.sysID))}return Object.defineProperty(c.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(c.prototype,"systemId",{get:function(){return this.sysID}}),c.prototype.toString=function(l){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(l))},c})(a)}).call(Fr)});var de=B(($r,Ur)=>{(function(){var e,t,a,b,o,p,c,l,d,m=function(_,w){for(var h in w)T.call(w,h)&&(_[h]=w[h]);function v(){this.constructor=_}return v.prototype=w.prototype,_.prototype=new v,_.__super__=w.prototype,_},T={}.hasOwnProperty;d=ht().isObject,l=st(),e=K(),t=ae(),b=ce(),a=le(),o=ue(),c=re(),Ur.exports=p=(function(_){m(w,_);function w(h,v,E){var k,N,I,f,i,n;if(w.__super__.constructor.call(this,h),this.type=e.DocType,h.children){for(f=h.children,N=0,I=f.length;N<I;N++)if(k=f[N],k.type===e.Element){this.name=k.name;break}}this.documentObject=h,d(v)&&(i=v,v=i.pubID,E=i.sysID),E==null&&(n=[v,E],E=n[0],v=n[1]),v!=null&&(this.pubID=this.stringify.dtdPubID(v)),E!=null&&(this.sysID=this.stringify.dtdSysID(E))}return Object.defineProperty(w.prototype,"entities",{get:function(){var h,v,E,k,N;for(k={},N=this.children,v=0,E=N.length;v<E;v++)h=N[v],h.type===e.EntityDeclaration&&!h.pe&&(k[h.name]=h);return new c(k)}}),Object.defineProperty(w.prototype,"notations",{get:function(){var h,v,E,k,N;for(k={},N=this.children,v=0,E=N.length;v<E;v++)h=N[v],h.type===e.NotationDeclaration&&(k[h.name]=h);return new c(k)}}),Object.defineProperty(w.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(w.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(w.prototype,"internalSubset",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),w.prototype.element=function(h,v){var E;return E=new a(this,h,v),this.children.push(E),this},w.prototype.attList=function(h,v,E,k,N){var I;return I=new t(this,h,v,E,k,N),this.children.push(I),this},w.prototype.entity=function(h,v){var E;return E=new b(this,!1,h,v),this.children.push(E),this},w.prototype.pEntity=function(h,v){var E;return E=new b(this,!0,h,v),this.children.push(E),this},w.prototype.notation=function(h,v){var E;return E=new o(this,h,v),this.children.push(E),this},w.prototype.toString=function(h){return this.options.writer.docType(this,this.options.writer.filterOptions(h))},w.prototype.ele=function(h,v){return this.element(h,v)},w.prototype.att=function(h,v,E,k,N){return this.attList(h,v,E,k,N)},w.prototype.ent=function(h,v){return this.entity(h,v)},w.prototype.pent=function(h,v){return this.pEntity(h,v)},w.prototype.not=function(h,v){return this.notation(h,v)},w.prototype.up=function(){return this.root()||this.documentObject},w.prototype.isEqualNode=function(h){return!(!w.__super__.isEqualNode.apply(this,arguments).isEqualNode(h)||h.name!==this.name||h.publicId!==this.publicId||h.systemId!==this.systemId)},w})(l)}).call($r)});var pe=B((qr,jr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=st(),jr.exports=a=(function(p){b(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing raw text. "+this.debugInfo());this.type=e.Raw,this.value=this.stringify.raw(d)}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.raw(this,this.options.writer.filterOptions(l))},c})(t)}).call(qr)});var fe=B((Vr,Xr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Ut(),Xr.exports=a=(function(p){b(c,p);function c(l,d){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=e.Text,this.value=this.stringify.text(d)}return Object.defineProperty(c.prototype,"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(c.prototype,"wholeText",{get:function(){var l,d,m;for(m="",d=this.previousSibling;d;)m=d.data+m,d=d.previousSibling;for(m+=this.data,l=this.nextSibling;l;)m=m+l.data,l=l.nextSibling;return m}}),c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.text(this,this.options.writer.filterOptions(l))},c.prototype.splitText=function(l){throw new Error("This DOM method is not implemented."+this.debugInfo())},c.prototype.replaceWholeText=function(l){throw new Error("This DOM method is not implemented."+this.debugInfo())},c})(t)}).call(Vr)});var he=B((Gr,zr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;e=K(),t=Ut(),zr.exports=a=(function(p){b(c,p);function c(l,d,m){if(c.__super__.constructor.call(this,l),d==null)throw new Error("Missing instruction target. "+this.debugInfo());this.type=e.ProcessingInstruction,this.target=this.stringify.insTarget(d),this.name=this.target,m&&(this.value=this.stringify.insValue(m))}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(l))},c.prototype.isEqualNode=function(l){return!(!c.__super__.isEqualNode.apply(this,arguments).isEqualNode(l)||l.target!==this.target)},c})(t)}).call(Gr)});var Re=B((Wr,Hr)=>{(function(){var e,t,a,b=function(p,c){for(var l in c)o.call(c,l)&&(p[l]=c[l]);function d(){this.constructor=p}return d.prototype=c.prototype,p.prototype=new d,p.__super__=c.prototype,p},o={}.hasOwnProperty;a=st(),e=K(),Hr.exports=t=(function(p){b(c,p);function c(l){c.__super__.constructor.call(this,l),this.type=e.Dummy}return c.prototype.clone=function(){return Object.create(this)},c.prototype.toString=function(l){return""},c})(a)}).call(Wr)});var Jr=B((Kr,Yr)=>{(function(){var e;Yr.exports=e=(function(){function t(a){this.nodes=a}return Object.defineProperty(t.prototype,"length",{get:function(){return this.nodes.length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.item=function(a){return this.nodes[a]||null},t})()}).call(Kr)});var tn=B((Qr,Zr)=>{(function(){Zr.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(Qr)});var st=B((en,rn)=>{(function(){var e,t,a,b,o,p,c,l,d,m,T,_,w,h,v,E,k,N,I,f={}.hasOwnProperty;I=ht(),N=I.isObject,k=I.isFunction,E=I.isEmpty,v=I.getValue,l=null,a=null,b=null,o=null,p=null,w=null,h=null,_=null,c=null,t=null,T=null,d=null,e=null,rn.exports=m=(function(){function i(n){this.parent=n,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,l||(l=ne(),a=ie(),b=oe(),o=se(),p=de(),w=pe(),h=fe(),_=he(),c=Re(),t=K(),T=Jr(),d=re(),e=tn())}return Object.defineProperty(i.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(i.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(i.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(i.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(i.prototype,"childNodes",{get:function(){return(!this.childNodeList||!this.childNodeList.nodes)&&(this.childNodeList=new T(this.children)),this.childNodeList}}),Object.defineProperty(i.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(i.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(i.prototype,"previousSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n-1]||null}}),Object.defineProperty(i.prototype,"nextSibling",{get:function(){var n;return n=this.parent.children.indexOf(this),this.parent.children[n+1]||null}}),Object.defineProperty(i.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(i.prototype,"textContent",{get:function(){var n,y,S,C,u;if(this.nodeType===t.Element||this.nodeType===t.DocumentFragment){for(u="",C=this.children,y=0,S=C.length;y<S;y++)n=C[y],n.textContent&&(u+=n.textContent);return u}else return null},set:function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),i.prototype.setParent=function(n){var y,S,C,u,g;for(this.parent=n,n&&(this.options=n.options,this.stringify=n.stringify),u=this.children,g=[],S=0,C=u.length;S<C;S++)y=u[S],g.push(y.setParent(this));return g},i.prototype.element=function(n,y,S){var C,u,g,D,O,L,R,M,P,F,$;if(L=null,y===null&&S==null&&(P=[{},null],y=P[0],S=P[1]),y==null&&(y={}),y=v(y),N(y)||(F=[y,S],S=F[0],y=F[1]),n!=null&&(n=v(n)),Array.isArray(n))for(g=0,R=n.length;g<R;g++)u=n[g],L=this.element(u);else if(k(n))L=this.element(n.apply());else if(N(n)){for(O in n)if(f.call(n,O))if($=n[O],k($)&&($=$.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&O.indexOf(this.stringify.convertAttKey)===0)L=this.attribute(O.substr(this.stringify.convertAttKey.length),$);else if(!this.options.separateArrayItems&&Array.isArray($)&&E($))L=this.dummy();else if(N($)&&E($))L=this.element(O);else if(!this.options.keepNullNodes&&$==null)L=this.dummy();else if(!this.options.separateArrayItems&&Array.isArray($))for(D=0,M=$.length;D<M;D++)u=$[D],C={},C[O]=u,L=this.element(C);else N($)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&O.indexOf(this.stringify.convertTextKey)===0?L=this.element($):(L=this.element(O),L.element($)):L=this.element(O,$)}else!this.options.keepNullNodes&&S===null?L=this.dummy():!this.options.ignoreDecorators&&this.stringify.convertTextKey&&n.indexOf(this.stringify.convertTextKey)===0?L=this.text(S):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&n.indexOf(this.stringify.convertCDataKey)===0?L=this.cdata(S):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&n.indexOf(this.stringify.convertCommentKey)===0?L=this.comment(S):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&n.indexOf(this.stringify.convertRawKey)===0?L=this.raw(S):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&n.indexOf(this.stringify.convertPIKey)===0?L=this.instruction(n.substr(this.stringify.convertPIKey.length),S):L=this.node(n,y,S);if(L==null)throw new Error("Could not create any elements with: "+n+". "+this.debugInfo());return L},i.prototype.insertBefore=function(n,y,S){var C,u,g,D,O;if(n?.type)return g=n,D=y,g.setParent(this),D?(u=children.indexOf(D),O=children.splice(u),children.push(g),Array.prototype.push.apply(children,O)):children.push(g),g;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return u=this.parent.children.indexOf(this),O=this.parent.children.splice(u),C=this.parent.element(n,y,S),Array.prototype.push.apply(this.parent.children,O),C},i.prototype.insertAfter=function(n,y,S){var C,u,g;if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(n));return u=this.parent.children.indexOf(this),g=this.parent.children.splice(u+1),C=this.parent.element(n,y,S),Array.prototype.push.apply(this.parent.children,g),C},i.prototype.remove=function(){var n,y;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());return n=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[n,n-n+1].concat(y=[])),this.parent},i.prototype.node=function(n,y,S){var C,u;return n!=null&&(n=v(n)),y||(y={}),y=v(y),N(y)||(u=[y,S],S=u[0],y=u[1]),C=new l(this,n,y),S!=null&&C.text(S),this.children.push(C),C},i.prototype.text=function(n){var y;return N(n)&&this.element(n),y=new h(this,n),this.children.push(y),this},i.prototype.cdata=function(n){var y;return y=new a(this,n),this.children.push(y),this},i.prototype.comment=function(n){var y;return y=new b(this,n),this.children.push(y),this},i.prototype.commentBefore=function(n){var y,S,C;return S=this.parent.children.indexOf(this),C=this.parent.children.splice(S),y=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,C),this},i.prototype.commentAfter=function(n){var y,S,C;return S=this.parent.children.indexOf(this),C=this.parent.children.splice(S+1),y=this.parent.comment(n),Array.prototype.push.apply(this.parent.children,C),this},i.prototype.raw=function(n){var y;return y=new w(this,n),this.children.push(y),this},i.prototype.dummy=function(){var n;return n=new c(this),n},i.prototype.instruction=function(n,y){var S,C,u,g,D;if(n!=null&&(n=v(n)),y!=null&&(y=v(y)),Array.isArray(n))for(g=0,D=n.length;g<D;g++)S=n[g],this.instruction(S);else if(N(n))for(S in n)f.call(n,S)&&(C=n[S],this.instruction(S,C));else k(y)&&(y=y.apply()),u=new _(this,n,y),this.children.push(u);return this},i.prototype.instructionBefore=function(n,y){var S,C,u;return C=this.parent.children.indexOf(this),u=this.parent.children.splice(C),S=this.parent.instruction(n,y),Array.prototype.push.apply(this.parent.children,u),this},i.prototype.instructionAfter=function(n,y){var S,C,u;return C=this.parent.children.indexOf(this),u=this.parent.children.splice(C+1),S=this.parent.instruction(n,y),Array.prototype.push.apply(this.parent.children,u),this},i.prototype.declaration=function(n,y,S){var C,u;return C=this.document(),u=new o(C,n,y,S),C.children.length===0?C.children.unshift(u):C.children[0].type===t.Declaration?C.children[0]=u:C.children.unshift(u),C.root()||C},i.prototype.dtd=function(n,y){var S,C,u,g,D,O,L,R,M,P;for(C=this.document(),u=new p(C,n,y),M=C.children,g=D=0,L=M.length;D<L;g=++D)if(S=M[g],S.type===t.DocType)return C.children[g]=u,u;for(P=C.children,g=O=0,R=P.length;O<R;g=++O)if(S=P[g],S.isRoot)return C.children.splice(g,0,u),u;return C.children.push(u),u},i.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},i.prototype.root=function(){var n;for(n=this;n;){if(n.type===t.Document)return n.rootObject;if(n.isRoot)return n;n=n.parent}},i.prototype.document=function(){var n;for(n=this;n;){if(n.type===t.Document)return n;n=n.parent}},i.prototype.end=function(n){return this.document().end(n)},i.prototype.prev=function(){var n;if(n=this.parent.children.indexOf(this),n<1)throw new Error("Already at the first node. "+this.debugInfo());return this.parent.children[n-1]},i.prototype.next=function(){var n;if(n=this.parent.children.indexOf(this),n===-1||n===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());return this.parent.children[n+1]},i.prototype.importDocument=function(n){var y;return y=n.root().clone(),y.parent=this,y.isRoot=!1,this.children.push(y),this},i.prototype.debugInfo=function(n){var y,S;return n=n||this.name,n==null&&!((y=this.parent)!=null&&y.name)?"":n==null?"parent: <"+this.parent.name+">":(S=this.parent)!=null&&S.name?"node: <"+n+">, parent: <"+this.parent.name+">":"node: <"+n+">"},i.prototype.ele=function(n,y,S){return this.element(n,y,S)},i.prototype.nod=function(n,y,S){return this.node(n,y,S)},i.prototype.txt=function(n){return this.text(n)},i.prototype.dat=function(n){return this.cdata(n)},i.prototype.com=function(n){return this.comment(n)},i.prototype.ins=function(n,y){return this.instruction(n,y)},i.prototype.doc=function(){return this.document()},i.prototype.dec=function(n,y,S){return this.declaration(n,y,S)},i.prototype.e=function(n,y,S){return this.element(n,y,S)},i.prototype.n=function(n,y,S){return this.node(n,y,S)},i.prototype.t=function(n){return this.text(n)},i.prototype.d=function(n){return this.cdata(n)},i.prototype.c=function(n){return this.comment(n)},i.prototype.r=function(n){return this.raw(n)},i.prototype.i=function(n,y){return this.instruction(n,y)},i.prototype.u=function(){return this.up()},i.prototype.importXMLBuilder=function(n){return this.importDocument(n)},i.prototype.replaceChild=function(n,y){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.removeChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.appendChild=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.hasChildNodes=function(){return this.children.length!==0},i.prototype.cloneNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.normalize=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isSupported=function(n,y){return!0},i.prototype.hasAttributes=function(){return this.attribs.length!==0},i.prototype.compareDocumentPosition=function(n){var y,S;return y=this,y===n?0:this.document()!==n.document()?(S=e.Disconnected|e.ImplementationSpecific,Math.random()<.5?S|=e.Preceding:S|=e.Following,S):y.isAncestor(n)?e.Contains|e.Preceding:y.isDescendant(n)?e.Contains|e.Following:y.isPreceding(n)?e.Preceding:e.Following},i.prototype.isSameNode=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.lookupPrefix=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isDefaultNamespace=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.lookupNamespaceURI=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.isEqualNode=function(n){var y,S,C;if(n.nodeType!==this.nodeType||n.children.length!==this.children.length)return!1;for(y=S=0,C=this.children.length-1;0<=C?S<=C:S>=C;y=0<=C?++S:--S)if(!this.children[y].isEqualNode(n.children[y]))return!1;return!0},i.prototype.getFeature=function(n,y){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.setUserData=function(n,y,S){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.getUserData=function(n){throw new Error("This DOM method is not implemented."+this.debugInfo())},i.prototype.contains=function(n){return n?n===this||this.isDescendant(n):!1},i.prototype.isDescendant=function(n){var y,S,C,u,g;for(g=this.children,C=0,u=g.length;C<u;C++)if(y=g[C],n===y||(S=y.isDescendant(n),S))return!0;return!1},i.prototype.isAncestor=function(n){return n.isDescendant(this)},i.prototype.isPreceding=function(n){var y,S;return y=this.treePosition(n),S=this.treePosition(this),y===-1||S===-1?!1:y<S},i.prototype.isFollowing=function(n){var y,S;return y=this.treePosition(n),S=this.treePosition(this),y===-1||S===-1?!1:y>S},i.prototype.treePosition=function(n){var y,S;return S=0,y=!1,this.foreachTreeNode(this.document(),function(C){if(S++,!y&&C===n)return y=!0}),y?S:-1},i.prototype.foreachTreeNode=function(n,y){var S,C,u,g,D;for(n||(n=this.document()),g=n.children,C=0,u=g.length;C<u;C++){if(S=g[C],D=y(S))return D;if(D=this.foreachTreeNode(S,y),D)return D}},i})()}).call(en)});var Fe=B((nn,on)=>{(function(){var e,t=function(b,o){return function(){return b.apply(o,arguments)}},a={}.hasOwnProperty;on.exports=e=(function(){function b(o){this.assertLegalName=t(this.assertLegalName,this),this.assertLegalChar=t(this.assertLegalChar,this);var p,c,l;o||(o={}),this.options=o,this.options.version||(this.options.version="1.0"),c=o.stringify||{};for(p in c)a.call(c,p)&&(l=c[p],this[p]=l)}return b.prototype.name=function(o){return this.options.noValidation?o:this.assertLegalName(""+o||"")},b.prototype.text=function(o){return this.options.noValidation?o:this.assertLegalChar(this.textEscape(""+o||""))},b.prototype.cdata=function(o){return this.options.noValidation?o:(o=""+o||"",o=o.replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(o))},b.prototype.comment=function(o){if(this.options.noValidation)return o;if(o=""+o||"",o.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+o);return this.assertLegalChar(o)},b.prototype.raw=function(o){return this.options.noValidation?o:""+o||""},b.prototype.attValue=function(o){return this.options.noValidation?o:this.assertLegalChar(this.attEscape(o=""+o||""))},b.prototype.insTarget=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.insValue=function(o){if(this.options.noValidation)return o;if(o=""+o||"",o.match(/\?>/))throw new Error("Invalid processing instruction value: "+o);return this.assertLegalChar(o)},b.prototype.xmlVersion=function(o){if(this.options.noValidation)return o;if(o=""+o||"",!o.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+o);return o},b.prototype.xmlEncoding=function(o){if(this.options.noValidation)return o;if(o=""+o||"",!o.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+o);return this.assertLegalChar(o)},b.prototype.xmlStandalone=function(o){return this.options.noValidation?o:o?"yes":"no"},b.prototype.dtdPubID=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdSysID=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdElementValue=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdAttType=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdAttDefault=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdEntityValue=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.dtdNData=function(o){return this.options.noValidation?o:this.assertLegalChar(""+o||"")},b.prototype.convertAttKey="@",b.prototype.convertPIKey="?",b.prototype.convertTextKey="#text",b.prototype.convertCDataKey="#cdata",b.prototype.convertCommentKey="#comment",b.prototype.convertRawKey="#raw",b.prototype.assertLegalChar=function(o){var p,c;if(this.options.noValidation)return o;if(p="",this.options.version==="1.0"){if(p=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=o.match(p))throw new Error("Invalid character in string: "+o+" at index "+c.index)}else if(this.options.version==="1.1"&&(p=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,c=o.match(p)))throw new Error("Invalid character in string: "+o+" at index "+c.index);return o},b.prototype.assertLegalName=function(o){var p;if(this.options.noValidation)return o;if(this.assertLegalChar(o),p=/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,!o.match(p))throw new Error("Invalid character in name");return o},b.prototype.textEscape=function(o){var p;return this.options.noValidation?o:(p=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,o.replace(p,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},b.prototype.attEscape=function(o){var p;return this.options.noValidation?o:(p=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,o.replace(p,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},b})()}).call(nn)});var qt=B((sn,an)=>{(function(){an.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(sn)});var Be=B((cn,ln)=>{(function(){var e,t,a,b,o,p,c,l,d,m,T,_,w,h,v,E,k,N={}.hasOwnProperty;k=ht().assign,e=K(),d=se(),m=de(),a=ie(),b=oe(),_=ne(),h=pe(),v=fe(),w=he(),T=Re(),o=ae(),p=le(),c=ce(),l=ue(),t=qt(),ln.exports=E=(function(){function I(f){var i,n,y;f||(f={}),this.options=f,n=f.writer||{};for(i in n)N.call(n,i)&&(y=n[i],this["_"+i]=this[i],this[i]=y)}return I.prototype.filterOptions=function(f){var i,n,y,S,C,u,g,D;return f||(f={}),f=k({},this.options,f),i={writer:this},i.pretty=f.pretty||!1,i.allowEmpty=f.allowEmpty||!1,i.indent=(n=f.indent)!=null?n:"  ",i.newline=(y=f.newline)!=null?y:`
`,i.offset=(S=f.offset)!=null?S:0,i.dontPrettyTextNodes=(C=(u=f.dontPrettyTextNodes)!=null?u:f.dontprettytextnodes)!=null?C:0,i.spaceBeforeSlash=(g=(D=f.spaceBeforeSlash)!=null?D:f.spacebeforeslash)!=null?g:"",i.spaceBeforeSlash===!0&&(i.spaceBeforeSlash=" "),i.suppressPrettyCount=0,i.user={},i.state=t.None,i},I.prototype.indent=function(f,i,n){var y;return!i.pretty||i.suppressPrettyCount?"":i.pretty&&(y=(n||0)+i.offset+1,y>0)?new Array(y).join(i.indent):""},I.prototype.endline=function(f,i,n){return!i.pretty||i.suppressPrettyCount?"":i.newline},I.prototype.attribute=function(f,i,n){var y;return this.openAttribute(f,i,n),y=" "+f.name+'="'+f.value+'"',this.closeAttribute(f,i,n),y},I.prototype.cdata=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<![CDATA[",i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+="]]>"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.comment=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!-- ",i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=" -->"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.declaration=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<?xml",i.state=t.InsideTag,y+=' version="'+f.version+'"',f.encoding!=null&&(y+=' encoding="'+f.encoding+'"'),f.standalone!=null&&(y+=' standalone="'+f.standalone+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+"?>",y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.docType=function(f,i,n){var y,S,C,u,g;if(n||(n=0),this.openNode(f,i,n),i.state=t.OpenTag,u=this.indent(f,i,n),u+="<!DOCTYPE "+f.root().name,f.pubID&&f.sysID?u+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.sysID&&(u+=' SYSTEM "'+f.sysID+'"'),f.children.length>0){for(u+=" [",u+=this.endline(f,i,n),i.state=t.InsideTag,g=f.children,S=0,C=g.length;S<C;S++)y=g[S],u+=this.writeChildNode(y,i,n+1);i.state=t.CloseTag,u+="]"}return i.state=t.CloseTag,u+=i.spaceBeforeSlash+">",u+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),u},I.prototype.element=function(f,i,n){var y,S,C,u,g,D,O,L,R,M,P,F,$,Y;n||(n=0),M=!1,P="",this.openNode(f,i,n),i.state=t.OpenTag,P+=this.indent(f,i,n)+"<"+f.name,F=f.attribs;for(R in F)N.call(F,R)&&(y=F[R],P+=this.attribute(y,i,n));if(C=f.children.length,u=C===0?null:f.children[0],C===0||f.children.every(function(ot){return(ot.type===e.Text||ot.type===e.Raw)&&ot.value===""}))i.allowEmpty?(P+=">",i.state=t.CloseTag,P+="</"+f.name+">"+this.endline(f,i,n)):(i.state=t.CloseTag,P+=i.spaceBeforeSlash+"/>"+this.endline(f,i,n));else if(i.pretty&&C===1&&(u.type===e.Text||u.type===e.Raw)&&u.value!=null)P+=">",i.state=t.InsideTag,i.suppressPrettyCount++,M=!0,P+=this.writeChildNode(u,i,n+1),i.suppressPrettyCount--,M=!1,i.state=t.CloseTag,P+="</"+f.name+">"+this.endline(f,i,n);else{if(i.dontPrettyTextNodes){for($=f.children,g=0,O=$.length;g<O;g++)if(S=$[g],(S.type===e.Text||S.type===e.Raw)&&S.value!=null){i.suppressPrettyCount++,M=!0;break}}for(P+=">"+this.endline(f,i,n),i.state=t.InsideTag,Y=f.children,D=0,L=Y.length;D<L;D++)S=Y[D],P+=this.writeChildNode(S,i,n+1);i.state=t.CloseTag,P+=this.indent(f,i,n)+"</"+f.name+">",M&&i.suppressPrettyCount--,P+=this.endline(f,i,n),i.state=t.None}return this.closeNode(f,i,n),P},I.prototype.writeChildNode=function(f,i,n){switch(f.type){case e.CData:return this.cdata(f,i,n);case e.Comment:return this.comment(f,i,n);case e.Element:return this.element(f,i,n);case e.Raw:return this.raw(f,i,n);case e.Text:return this.text(f,i,n);case e.ProcessingInstruction:return this.processingInstruction(f,i,n);case e.Dummy:return"";case e.Declaration:return this.declaration(f,i,n);case e.DocType:return this.docType(f,i,n);case e.AttributeDeclaration:return this.dtdAttList(f,i,n);case e.ElementDeclaration:return this.dtdElement(f,i,n);case e.EntityDeclaration:return this.dtdEntity(f,i,n);case e.NotationDeclaration:return this.dtdNotation(f,i,n);default:throw new Error("Unknown XML node type: "+f.constructor.name)}},I.prototype.processingInstruction=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<?",i.state=t.InsideTag,y+=f.target,f.value&&(y+=" "+f.value),i.state=t.CloseTag,y+=i.spaceBeforeSlash+"?>",y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.raw=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n),i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.text=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n),i.state=t.InsideTag,y+=f.value,i.state=t.CloseTag,y+=this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdAttList=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ATTLIST",i.state=t.InsideTag,y+=" "+f.elementName+" "+f.attributeName+" "+f.attributeType,f.defaultValueType!=="#DEFAULT"&&(y+=" "+f.defaultValueType),f.defaultValue&&(y+=' "'+f.defaultValue+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdElement=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ELEMENT",i.state=t.InsideTag,y+=" "+f.name+" "+f.value,i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdEntity=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!ENTITY",i.state=t.InsideTag,f.pe&&(y+=" %"),y+=" "+f.name,f.value?y+=' "'+f.value+'"':(f.pubID&&f.sysID?y+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.sysID&&(y+=' SYSTEM "'+f.sysID+'"'),f.nData&&(y+=" NDATA "+f.nData)),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.dtdNotation=function(f,i,n){var y;return this.openNode(f,i,n),i.state=t.OpenTag,y=this.indent(f,i,n)+"<!NOTATION",i.state=t.InsideTag,y+=" "+f.name,f.pubID&&f.sysID?y+=' PUBLIC "'+f.pubID+'" "'+f.sysID+'"':f.pubID?y+=' PUBLIC "'+f.pubID+'"':f.sysID&&(y+=' SYSTEM "'+f.sysID+'"'),i.state=t.CloseTag,y+=i.spaceBeforeSlash+">"+this.endline(f,i,n),i.state=t.None,this.closeNode(f,i,n),y},I.prototype.openNode=function(f,i,n){},I.prototype.closeNode=function(f,i,n){},I.prototype.openAttribute=function(f,i,n){},I.prototype.closeAttribute=function(f,i,n){},I})()}).call(cn)});var ge=B((un,dn)=>{(function(){var e,t,a=function(o,p){for(var c in p)b.call(p,c)&&(o[c]=p[c]);function l(){this.constructor=o}return l.prototype=p.prototype,o.prototype=new l,o.__super__=p.prototype,o},b={}.hasOwnProperty;t=Be(),dn.exports=e=(function(o){a(p,o);function p(c){p.__super__.constructor.call(this,c)}return p.prototype.document=function(c,l){var d,m,T,_,w;for(l=this.filterOptions(l),_="",w=c.children,m=0,T=w.length;m<T;m++)d=w[m],_+=this.writeChildNode(d,l,0);return l.pretty&&_.slice(-l.newline.length)===l.newline&&(_=_.slice(0,-l.newline.length)),_},p})(t)}).call(un)});var $e=B((pn,fn)=>{(function(){var e,t,a,b,o,p,c,l,d=function(T,_){for(var w in _)m.call(_,w)&&(T[w]=_[w]);function h(){this.constructor=T}return h.prototype=_.prototype,T.prototype=new h,T.__super__=_.prototype,T},m={}.hasOwnProperty;l=ht().isPlainObject,a=Pe(),t=hr(),o=st(),e=K(),c=Fe(),p=ge(),fn.exports=b=(function(T){d(_,T);function _(w){_.__super__.constructor.call(this,null),this.name="#document",this.type=e.Document,this.documentURI=null,this.domConfig=new t,w||(w={}),w.writer||(w.writer=new p),this.options=w,this.stringify=new c(w)}return Object.defineProperty(_.prototype,"implementation",{value:new a}),Object.defineProperty(_.prototype,"doctype",{get:function(){var w,h,v,E;for(E=this.children,h=0,v=E.length;h<v;h++)if(w=E[h],w.type===e.DocType)return w;return null}}),Object.defineProperty(_.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(_.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(_.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(_.prototype,"xmlEncoding",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].encoding:null}}),Object.defineProperty(_.prototype,"xmlStandalone",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].standalone==="yes":!1}}),Object.defineProperty(_.prototype,"xmlVersion",{get:function(){return this.children.length!==0&&this.children[0].type===e.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(_.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(_.prototype,"origin",{get:function(){return null}}),Object.defineProperty(_.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(_.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(_.prototype,"contentType",{get:function(){return null}}),_.prototype.end=function(w){var h;return h={},w?l(w)&&(h=w,w=this.options.writer):w=this.options.writer,w.document(this,w.filterOptions(h))},_.prototype.toString=function(w){return this.options.writer.document(this,this.options.writer.filterOptions(w))},_.prototype.createElement=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createDocumentFragment=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createTextNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createComment=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createCDATASection=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createProcessingInstruction=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createAttribute=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createEntityReference=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByTagName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.importNode=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createElementNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createAttributeNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByTagNameNS=function(w,h){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementById=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.adoptNode=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.normalizeDocument=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.renameNode=function(w,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.getElementsByClassName=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createEvent=function(w){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createRange=function(){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createNodeIterator=function(w,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_.prototype.createTreeWalker=function(w,h,v){throw new Error("This DOM method is not implemented."+this.debugInfo())},_})(o)}).call(pn)});var mn=B((hn,gn)=>{(function(){var e,t,a,b,o,p,c,l,d,m,T,_,w,h,v,E,k,N,I,f,i,n,y,S,C={}.hasOwnProperty;S=ht(),n=S.isObject,i=S.isFunction,y=S.isPlainObject,f=S.getValue,e=K(),_=$e(),h=ne(),b=ie(),o=oe(),E=pe(),I=fe(),v=he(),m=se(),T=de(),p=ae(),l=ce(),c=le(),d=ue(),a=Me(),N=Fe(),k=ge(),t=qt(),gn.exports=w=(function(){function u(g,D,O){var L;this.name="?xml",this.type=e.Document,g||(g={}),L={},g.writer?y(g.writer)&&(L=g.writer,g.writer=new k):g.writer=new k,this.options=g,this.writer=g.writer,this.writerOptions=this.writer.filterOptions(L),this.stringify=new N(g),this.onDataCallback=D||function(){},this.onEndCallback=O||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return u.prototype.createChildNode=function(g){var D,O,L,R,M,P,F,$;switch(g.type){case e.CData:this.cdata(g.value);break;case e.Comment:this.comment(g.value);break;case e.Element:L={},F=g.attribs;for(O in F)C.call(F,O)&&(D=F[O],L[O]=D.value);this.node(g.name,L);break;case e.Dummy:this.dummy();break;case e.Raw:this.raw(g.value);break;case e.Text:this.text(g.value);break;case e.ProcessingInstruction:this.instruction(g.target,g.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+g.constructor.name)}for($=g.children,M=0,P=$.length;M<P;M++)R=$[M],this.createChildNode(R),R.type===e.Element&&this.up();return this},u.prototype.dummy=function(){return this},u.prototype.node=function(g,D,O){var L;if(g==null)throw new Error("Missing node name.");if(this.root&&this.currentLevel===-1)throw new Error("Document can only have one root node. "+this.debugInfo(g));return this.openCurrent(),g=f(g),D==null&&(D={}),D=f(D),n(D)||(L=[D,O],O=L[0],D=L[1]),this.currentNode=new h(this,g,D),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,O!=null&&this.text(O),this},u.prototype.element=function(g,D,O){var L,R,M,P,F,$;if(this.currentNode&&this.currentNode.type===e.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(g)||n(g)||i(g))for(P=this.options.noValidation,this.options.noValidation=!0,$=new _(this.options).element("TEMP_ROOT"),$.element(g),this.options.noValidation=P,F=$.children,R=0,M=F.length;R<M;R++)L=F[R],this.createChildNode(L),L.type===e.Element&&this.up();else this.node(g,D,O);return this},u.prototype.attribute=function(g,D){var O,L;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(g));if(g!=null&&(g=f(g)),n(g))for(O in g)C.call(g,O)&&(L=g[O],this.attribute(O,L));else i(D)&&(D=D.apply()),this.options.keepNullAttributes&&D==null?this.currentNode.attribs[g]=new a(this,g,""):D!=null&&(this.currentNode.attribs[g]=new a(this,g,D));return this},u.prototype.text=function(g){var D;return this.openCurrent(),D=new I(this,g),this.onData(this.writer.text(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.cdata=function(g){var D;return this.openCurrent(),D=new b(this,g),this.onData(this.writer.cdata(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.comment=function(g){var D;return this.openCurrent(),D=new o(this,g),this.onData(this.writer.comment(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.raw=function(g){var D;return this.openCurrent(),D=new E(this,g),this.onData(this.writer.raw(D,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.instruction=function(g,D){var O,L,R,M,P;if(this.openCurrent(),g!=null&&(g=f(g)),D!=null&&(D=f(D)),Array.isArray(g))for(O=0,M=g.length;O<M;O++)L=g[O],this.instruction(L);else if(n(g))for(L in g)C.call(g,L)&&(R=g[L],this.instruction(L,R));else i(D)&&(D=D.apply()),P=new v(this,g,D),this.onData(this.writer.processingInstruction(P,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},u.prototype.declaration=function(g,D,O){var L;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node.");return L=new m(this,g,D,O),this.onData(this.writer.declaration(L,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.doctype=function(g,D,O){if(this.openCurrent(),g==null)throw new Error("Missing root node name.");if(this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new T(this,D,O),this.currentNode.rootNodeName=g,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},u.prototype.dtdElement=function(g,D){var O;return this.openCurrent(),O=new c(this,g,D),this.onData(this.writer.dtdElement(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.attList=function(g,D,O,L,R){var M;return this.openCurrent(),M=new p(this,g,D,O,L,R),this.onData(this.writer.dtdAttList(M,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.entity=function(g,D){var O;return this.openCurrent(),O=new l(this,!1,g,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.pEntity=function(g,D){var O;return this.openCurrent(),O=new l(this,!0,g,D),this.onData(this.writer.dtdEntity(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.notation=function(g,D){var O;return this.openCurrent(),O=new d(this,g,D),this.onData(this.writer.dtdNotation(O,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},u.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},u.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},u.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},u.prototype.openNode=function(g){var D,O,L,R;if(!g.isOpen){if(!this.root&&this.currentLevel===0&&g.type===e.Element&&(this.root=g),O="",g.type===e.Element){this.writerOptions.state=t.OpenTag,O=this.writer.indent(g,this.writerOptions,this.currentLevel)+"<"+g.name,R=g.attribs;for(L in R)C.call(R,L)&&(D=R[L],O+=this.writer.attribute(D,this.writerOptions,this.currentLevel));O+=(g.children?">":"/>")+this.writer.endline(g,this.writerOptions,this.currentLevel),this.writerOptions.state=t.InsideTag}else this.writerOptions.state=t.OpenTag,O=this.writer.indent(g,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+g.rootNodeName,g.pubID&&g.sysID?O+=' PUBLIC "'+g.pubID+'" "'+g.sysID+'"':g.sysID&&(O+=' SYSTEM "'+g.sysID+'"'),g.children?(O+=" [",this.writerOptions.state=t.InsideTag):(this.writerOptions.state=t.CloseTag,O+=">"),O+=this.writer.endline(g,this.writerOptions,this.currentLevel);return this.onData(O,this.currentLevel),g.isOpen=!0}},u.prototype.closeNode=function(g){var D;if(!g.isClosed)return D="",this.writerOptions.state=t.CloseTag,g.type===e.Element?D=this.writer.indent(g,this.writerOptions,this.currentLevel)+"</"+g.name+">"+this.writer.endline(g,this.writerOptions,this.currentLevel):D=this.writer.indent(g,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(g,this.writerOptions,this.currentLevel),this.writerOptions.state=t.None,this.onData(D,this.currentLevel),g.isClosed=!0},u.prototype.onData=function(g,D){return this.documentStarted=!0,this.onDataCallback(g,D+1)},u.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},u.prototype.debugInfo=function(g){return g==null?"":"node: <"+g+">"},u.prototype.ele=function(){return this.element.apply(this,arguments)},u.prototype.nod=function(g,D,O){return this.node(g,D,O)},u.prototype.txt=function(g){return this.text(g)},u.prototype.dat=function(g){return this.cdata(g)},u.prototype.com=function(g){return this.comment(g)},u.prototype.ins=function(g,D){return this.instruction(g,D)},u.prototype.dec=function(g,D,O){return this.declaration(g,D,O)},u.prototype.dtd=function(g,D,O){return this.doctype(g,D,O)},u.prototype.e=function(g,D,O){return this.element(g,D,O)},u.prototype.n=function(g,D,O){return this.node(g,D,O)},u.prototype.t=function(g){return this.text(g)},u.prototype.d=function(g){return this.cdata(g)},u.prototype.c=function(g){return this.comment(g)},u.prototype.r=function(g){return this.raw(g)},u.prototype.i=function(g,D){return this.instruction(g,D)},u.prototype.att=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.a=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},u.prototype.ent=function(g,D){return this.entity(g,D)},u.prototype.pent=function(g,D){return this.pEntity(g,D)},u.prototype.not=function(g,D){return this.notation(g,D)},u})()}).call(hn)});var wn=B((yn,bn)=>{(function(){var e,t,a,b,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;e=K(),b=Be(),t=qt(),bn.exports=a=(function(c){o(l,c);function l(d,m){this.stream=d,l.__super__.constructor.call(this,m)}return l.prototype.endline=function(d,m,T){return d.isLastRootNode&&m.state===t.CloseTag?"":l.__super__.endline.call(this,d,m,T)},l.prototype.document=function(d,m){var T,_,w,h,v,E,k,N,I;for(k=d.children,_=w=0,v=k.length;w<v;_=++w)T=k[_],T.isLastRootNode=_===d.children.length-1;for(m=this.filterOptions(m),N=d.children,I=[],h=0,E=N.length;h<E;h++)T=N[h],I.push(this.writeChildNode(T,m,0));return I},l.prototype.attribute=function(d,m,T){return this.stream.write(l.__super__.attribute.call(this,d,m,T))},l.prototype.cdata=function(d,m,T){return this.stream.write(l.__super__.cdata.call(this,d,m,T))},l.prototype.comment=function(d,m,T){return this.stream.write(l.__super__.comment.call(this,d,m,T))},l.prototype.declaration=function(d,m,T){return this.stream.write(l.__super__.declaration.call(this,d,m,T))},l.prototype.docType=function(d,m,T){var _,w,h,v;if(T||(T=0),this.openNode(d,m,T),m.state=t.OpenTag,this.stream.write(this.indent(d,m,T)),this.stream.write("<!DOCTYPE "+d.root().name),d.pubID&&d.sysID?this.stream.write(' PUBLIC "'+d.pubID+'" "'+d.sysID+'"'):d.sysID&&this.stream.write(' SYSTEM "'+d.sysID+'"'),d.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(d,m,T)),m.state=t.InsideTag,v=d.children,w=0,h=v.length;w<h;w++)_=v[w],this.writeChildNode(_,m,T+1);m.state=t.CloseTag,this.stream.write("]")}return m.state=t.CloseTag,this.stream.write(m.spaceBeforeSlash+">"),this.stream.write(this.endline(d,m,T)),m.state=t.None,this.closeNode(d,m,T)},l.prototype.element=function(d,m,T){var _,w,h,v,E,k,N,I,f,i;T||(T=0),this.openNode(d,m,T),m.state=t.OpenTag,this.stream.write(this.indent(d,m,T)+"<"+d.name),f=d.attribs;for(N in f)p.call(f,N)&&(_=f[N],this.attribute(_,m,T));if(h=d.children.length,v=h===0?null:d.children[0],h===0||d.children.every(function(n){return(n.type===e.Text||n.type===e.Raw)&&n.value===""}))m.allowEmpty?(this.stream.write(">"),m.state=t.CloseTag,this.stream.write("</"+d.name+">")):(m.state=t.CloseTag,this.stream.write(m.spaceBeforeSlash+"/>"));else if(m.pretty&&h===1&&(v.type===e.Text||v.type===e.Raw)&&v.value!=null)this.stream.write(">"),m.state=t.InsideTag,m.suppressPrettyCount++,I=!0,this.writeChildNode(v,m,T+1),m.suppressPrettyCount--,I=!1,m.state=t.CloseTag,this.stream.write("</"+d.name+">");else{for(this.stream.write(">"+this.endline(d,m,T)),m.state=t.InsideTag,i=d.children,E=0,k=i.length;E<k;E++)w=i[E],this.writeChildNode(w,m,T+1);m.state=t.CloseTag,this.stream.write(this.indent(d,m,T)+"</"+d.name+">")}return this.stream.write(this.endline(d,m,T)),m.state=t.None,this.closeNode(d,m,T)},l.prototype.processingInstruction=function(d,m,T){return this.stream.write(l.__super__.processingInstruction.call(this,d,m,T))},l.prototype.raw=function(d,m,T){return this.stream.write(l.__super__.raw.call(this,d,m,T))},l.prototype.text=function(d,m,T){return this.stream.write(l.__super__.text.call(this,d,m,T))},l.prototype.dtdAttList=function(d,m,T){return this.stream.write(l.__super__.dtdAttList.call(this,d,m,T))},l.prototype.dtdElement=function(d,m,T){return this.stream.write(l.__super__.dtdElement.call(this,d,m,T))},l.prototype.dtdEntity=function(d,m,T){return this.stream.write(l.__super__.dtdEntity.call(this,d,m,T))},l.prototype.dtdNotation=function(d,m,T){return this.stream.write(l.__super__.dtdNotation.call(this,d,m,T))},l})(b)}).call(yn)});var _n=B((vn,_t)=>{(function(){var e,t,a,b,o,p,c,l,d,m;m=ht(),l=m.assign,d=m.isFunction,a=Pe(),b=$e(),o=mn(),c=ge(),p=wn(),e=K(),t=qt(),_t.exports.create=function(T,_,w,h){var v,E;if(T==null)throw new Error("Root element needs a name.");return h=l({},_,w,h),v=new b(h),E=v.element(T),h.headless||(v.declaration(h),(h.pubID!=null||h.sysID!=null)&&v.dtd(h)),E},_t.exports.begin=function(T,_,w){var h;return d(T)&&(h=[T,_],_=h[0],w=h[1],T={}),_?new o(T,_,w):new b(T)},_t.exports.stringWriter=function(T){return new c(T)},_t.exports.streamWriter=function(T,_){return new p(T,_)},_t.exports.implementation=new a,_t.exports.nodeType=e,_t.exports.writerState=t}).call(vn)});var Tn=B(Ue=>{(function(){"use strict";var e,t,a,b,o,p={}.hasOwnProperty;e=_n(),t=ee().defaults,b=function(c){return typeof c=="string"&&(c.indexOf("&")>=0||c.indexOf(">")>=0||c.indexOf("<")>=0)},o=function(c){return"<![CDATA["+a(c)+"]]>"},a=function(c){return c.replace("]]>","]]]]><![CDATA[>")},Ue.Builder=(function(){function c(l){var d,m,T;this.options={},m=t["0.2"];for(d in m)p.call(m,d)&&(T=m[d],this.options[d]=T);for(d in l)p.call(l,d)&&(T=l[d],this.options[d]=T)}return c.prototype.buildObject=function(l){var d,m,T,_,w;return d=this.options.attrkey,m=this.options.charkey,Object.keys(l).length===1&&this.options.rootName===t["0.2"].rootName?(w=Object.keys(l)[0],l=l[w]):w=this.options.rootName,T=(function(h){return function(v,E){var k,N,I,f,i,n;if(typeof E!="object")h.options.cdata&&b(E)?v.raw(o(E)):v.txt(E);else if(Array.isArray(E)){for(f in E)if(p.call(E,f)){N=E[f];for(i in N)I=N[i],v=T(v.ele(i),I).up()}}else for(i in E)if(p.call(E,i))if(N=E[i],i===d){if(typeof N=="object")for(k in N)n=N[k],v=v.att(k,n)}else if(i===m)h.options.cdata&&b(N)?v=v.raw(o(N)):v=v.txt(N);else if(Array.isArray(N))for(f in N)p.call(N,f)&&(I=N[f],typeof I=="string"?h.options.cdata&&b(I)?v=v.ele(i).raw(o(I)).up():v=v.ele(i,I).up():v=T(v.ele(i),I).up());else typeof N=="object"?v=T(v.ele(i),N).up():typeof N=="string"&&h.options.cdata&&b(N)?v=v.ele(i).raw(o(N)).up():(N==null&&(N=""),v=v.ele(i,N.toString()).up());return v}})(this),_=e.create(w,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),T(_,l).end(this.options.renderOpts)},c})()}).call(Ue)});var In=B(me=>{(function(e){e.parser=function(s,r){return new a(s,r)},e.SAXParser=a,e.SAXStream=T,e.createStream=d,e.MAX_BUFFER_LENGTH=64*1024;var t=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function a(s,r){if(!(this instanceof a))return new a(s,r);var A=this;o(A),A.q=A.c="",A.bufferCheckPosition=e.MAX_BUFFER_LENGTH,A.encoding=null,A.opt=r||{},A.opt.lowercase=A.opt.lowercase||A.opt.lowercasetags,A.looseCase=A.opt.lowercase?"toLowerCase":"toUpperCase",A.opt.maxEntityCount=A.opt.maxEntityCount||512,A.opt.maxEntityDepth=A.opt.maxEntityDepth||4,A.entityCount=A.entityDepth=0,A.tags=[],A.closed=A.closedRoot=A.sawRoot=!1,A.tag=A.error=null,A.strict=!!s,A.noscript=!!(s||A.opt.noscript),A.state=u.BEGIN,A.strictEntities=A.opt.strictEntities,A.ENTITIES=A.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),A.attribList=[],A.opt.xmlns&&(A.ns=Object.create(E)),A.opt.unquotedAttributeValues===void 0&&(A.opt.unquotedAttributeValues=!s),A.trackPosition=A.opt.position!==!1,A.trackPosition&&(A.position=A.line=A.column=0),D(A,"onready")}Object.create||(Object.create=function(s){function r(){}r.prototype=s;var A=new r;return A}),Object.keys||(Object.keys=function(s){var r=[];for(var A in s)s.hasOwnProperty(A)&&r.push(A);return r});function b(s){for(var r=Math.max(e.MAX_BUFFER_LENGTH,10),A=0,x=0,q=t.length;x<q;x++){var z=s[t[x]].length;if(z>r)switch(t[x]){case"textNode":F(s);break;case"cdata":P(s,"oncdata",s.cdata),s.cdata="";break;case"script":P(s,"onscript",s.script),s.script="";break;default:Y(s,"Max buffer length exceeded: "+t[x])}A=Math.max(A,z)}var H=e.MAX_BUFFER_LENGTH-A;s.bufferCheckPosition=H+s.position}function o(s){for(var r=0,A=t.length;r<A;r++)s[t[r]]=""}function p(s){F(s),s.cdata!==""&&(P(s,"oncdata",s.cdata),s.cdata=""),s.script!==""&&(P(s,"onscript",s.script),s.script="")}a.prototype={end:function(){ot(this)},write:Kt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){p(this)}};var c;try{c=require("stream").Stream}catch{c=function(){}}c||(c=function(){});var l=e.EVENTS.filter(function(s){return s!=="error"&&s!=="end"});function d(s,r){return new T(s,r)}function m(s,r){if(s.length>=2){if(s[0]===255&&s[1]===254)return"utf-16le";if(s[0]===254&&s[1]===255)return"utf-16be"}return s.length>=3&&s[0]===239&&s[1]===187&&s[2]===191?"utf8":s.length>=4?s[0]===60&&s[1]===0&&s[2]===63&&s[3]===0?"utf-16le":s[0]===0&&s[1]===60&&s[2]===0&&s[3]===63?"utf-16be":"utf8":r?"utf8":null}function T(s,r){if(!(this instanceof T))return new T(s,r);c.apply(this),this._parser=new a(s,r),this.writable=!0,this.readable=!0;var A=this;this._parser.onend=function(){A.emit("end")},this._parser.onerror=function(x){A.emit("error",x),A._parser.error=null},this._decoder=null,this._decoderBuffer=null,l.forEach(function(x){Object.defineProperty(A,"on"+x,{get:function(){return A._parser["on"+x]},set:function(q){if(!q)return A.removeAllListeners(x),A._parser["on"+x]=q,q;A.on(x,q)},enumerable:!0,configurable:!1})})}T.prototype=Object.create(c.prototype,{constructor:{value:T}}),T.prototype._decodeBuffer=function(s,r){if(this._decoderBuffer&&(s=Buffer.concat([this._decoderBuffer,s]),this._decoderBuffer=null),!this._decoder){var A=m(s,r);if(!A)return this._decoderBuffer=s,"";this._parser.encoding=A,this._decoder=new TextDecoder(A)}return this._decoder.decode(s,{stream:!r})},T.prototype.write=function(s){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(s))s=this._decodeBuffer(s,!1);else if(this._decoderBuffer){var r=this._decodeBuffer(Buffer.alloc(0),!0);r&&(this._parser.write(r),this.emit("data",r))}return this._parser.write(s.toString()),this.emit("data",s),!0},T.prototype.end=function(s){if(s&&s.length&&this.write(s),this._decoderBuffer){var r=this._decodeBuffer(Buffer.alloc(0),!0);r&&(this._parser.write(r),this.emit("data",r))}else if(this._decoder){var A=this._decoder.decode();A&&(this._parser.write(A),this.emit("data",A))}return this._parser.end(),!0},T.prototype.on=function(s,r){var A=this;return!A._parser["on"+s]&&l.indexOf(s)!==-1&&(A._parser["on"+s]=function(){var x=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);x.splice(0,0,s),A.emit.apply(A,x)}),c.prototype.on.call(A,s,r)};var _="[CDATA[",w="DOCTYPE",h="http://www.w3.org/XML/1998/namespace",v="http://www.w3.org/2000/xmlns/",E={xml:h,xmlns:v},k=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,N=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,I=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,f=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function i(s){return s===" "||s===`
`||s==="\r"||s==="	"}function n(s){return s==='"'||s==="'"}function y(s){return s===">"||i(s)}function S(s,r){return s.test(r)}function C(s,r){return!S(s,r)}var u=0;e.STATE={BEGIN:u++,BEGIN_WHITESPACE:u++,TEXT:u++,TEXT_ENTITY:u++,OPEN_WAKA:u++,SGML_DECL:u++,SGML_DECL_QUOTED:u++,DOCTYPE:u++,DOCTYPE_QUOTED:u++,DOCTYPE_DTD:u++,DOCTYPE_DTD_QUOTED:u++,COMMENT_STARTING:u++,COMMENT:u++,COMMENT_ENDING:u++,COMMENT_ENDED:u++,CDATA:u++,CDATA_ENDING:u++,CDATA_ENDING_2:u++,PROC_INST:u++,PROC_INST_BODY:u++,PROC_INST_ENDING:u++,OPEN_TAG:u++,OPEN_TAG_SLASH:u++,ATTRIB:u++,ATTRIB_NAME:u++,ATTRIB_NAME_SAW_WHITE:u++,ATTRIB_VALUE:u++,ATTRIB_VALUE_QUOTED:u++,ATTRIB_VALUE_CLOSED:u++,ATTRIB_VALUE_UNQUOTED:u++,ATTRIB_VALUE_ENTITY_Q:u++,ATTRIB_VALUE_ENTITY_U:u++,CLOSE_TAG:u++,CLOSE_TAG_SAW_WHITE:u++,SCRIPT:u++,SCRIPT_ENDING:u++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(s){var r=e.ENTITIES[s],A=typeof r=="number"?String.fromCharCode(r):r;e.ENTITIES[s]=A});for(var g in e.STATE)e.STATE[e.STATE[g]]=g;u=e.STATE;function D(s,r,A){s[r]&&s[r](A)}function O(s){var r=s&&s.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return r?r[2]:null}function L(s){return s?s.toLowerCase().replace(/[^a-z0-9]/g,""):null}function R(s,r){let A=L(s),x=L(r);return!A||!x?!0:x==="utf16"?A==="utf16le"||A==="utf16be":A===x}function M(s,r){if(!(!s.strict||!s.encoding||!r||r.name!=="xml")){var A=O(r.body);A&&!R(s.encoding,A)&&V(s,"XML declaration encoding "+A+" does not match detected stream encoding "+s.encoding.toUpperCase())}}function P(s,r,A){s.textNode&&F(s),D(s,r,A)}function F(s){s.textNode=$(s.opt,s.textNode),s.textNode&&D(s,"ontext",s.textNode),s.textNode=""}function $(s,r){return s.trim&&(r=r.trim()),s.normalize&&(r=r.replace(/\s+/g," ")),r}function Y(s,r){return F(s),s.trackPosition&&(r+=`
Line: `+s.line+`
Column: `+s.column+`
Char: `+s.c),r=new Error(r),s.error=r,D(s,"onerror",r),s}function ot(s){return s.sawRoot&&!s.closedRoot&&V(s,"Unclosed root tag"),s.state!==u.BEGIN&&s.state!==u.BEGIN_WHITESPACE&&s.state!==u.TEXT&&Y(s,"Unexpected end"),F(s),s.c="",s.closed=!0,D(s,"onend"),a.call(s,s.strict,s.opt),s}function V(s,r){if(typeof s!="object"||!(s instanceof a))throw new Error("bad call to strictFail");s.strict&&Y(s,r)}function Ae(s){s.strict||(s.tagName=s.tagName[s.looseCase]());var r=s.tags[s.tags.length-1]||s,A=s.tag={name:s.tagName,attributes:{}};s.opt.xmlns&&(A.ns=r.ns),s.attribList.length=0,P(s,"onopentagstart",A)}function Rt(s,r){var A=s.indexOf(":"),x=A<0?["",s]:s.split(":"),q=x[0],z=x[1];return r&&s==="xmlns"&&(q="xmlns",z=""),{prefix:q,local:z}}function Ft(s){if(s.strict||(s.attribName=s.attribName[s.looseCase]()),s.attribList.indexOf(s.attribName)!==-1||s.tag.attributes.hasOwnProperty(s.attribName)){s.attribName=s.attribValue="";return}if(s.opt.xmlns){var r=Rt(s.attribName,!0),A=r.prefix,x=r.local;if(A==="xmlns")if(x==="xml"&&s.attribValue!==h)V(s,"xml: prefix must be bound to "+h+`
Actual: `+s.attribValue);else if(x==="xmlns"&&s.attribValue!==v)V(s,"xmlns: prefix must be bound to "+v+`
Actual: `+s.attribValue);else{var q=s.tag,z=s.tags[s.tags.length-1]||s;q.ns===z.ns&&(q.ns=Object.create(z.ns)),q.ns[x]=s.attribValue}s.attribList.push([s.attribName,s.attribValue])}else s.tag.attributes[s.attribName]=s.attribValue,P(s,"onattribute",{name:s.attribName,value:s.attribValue});s.attribName=s.attribValue=""}function mt(s,r){if(s.opt.xmlns){var A=s.tag,x=Rt(s.tagName);A.prefix=x.prefix,A.local=x.local,A.uri=A.ns[x.prefix]||"",A.prefix&&!A.uri&&(V(s,"Unbound namespace prefix: "+JSON.stringify(s.tagName)),A.uri=x.prefix);var q=s.tags[s.tags.length-1]||s;A.ns&&q.ns!==A.ns&&Object.keys(A.ns).forEach(function(Je){P(s,"onopennamespace",{prefix:Je,uri:A.ns[Je]})});for(var z=0,H=s.attribList.length;z<H;z++){var Z=s.attribList[z],rt=Z[0],W=Z[1],J=Rt(rt,!0),at=J.prefix,Xn=J.local,Ye=at===""?"":A.ns[at]||"",Oe={name:rt,value:W,prefix:at,local:Xn,uri:Ye};at&&at!=="xmlns"&&!Ye&&(V(s,"Unbound namespace prefix: "+JSON.stringify(at)),Oe.uri=at),s.tag.attributes[rt]=Oe,P(s,"onattribute",Oe)}s.attribList.length=0}s.tag.isSelfClosing=!!r,s.sawRoot=!0,s.tags.push(s.tag),P(s,"onopentag",s.tag),r||(!s.noscript&&s.tagName.toLowerCase()==="script"?s.state=u.SCRIPT:s.state=u.TEXT,s.tag=null,s.tagName=""),s.attribName=s.attribValue="",s.attribList.length=0}function Bt(s){if(!s.tagName){V(s,"Weird empty close tag."),s.textNode+="</>",s.state=u.TEXT;return}if(s.script){if(s.tagName!=="script"){s.script+="</"+s.tagName+">",s.tagName="",s.state=u.SCRIPT;return}P(s,"onscript",s.script),s.script=""}var r=s.tags.length,A=s.tagName;s.strict||(A=A[s.looseCase]());for(var x=A;r--;){var q=s.tags[r];if(q.name!==x)V(s,"Unexpected close tag");else break}if(r<0){V(s,"Unmatched closing tag: "+s.tagName),s.textNode+="</"+s.tagName+">",s.state=u.TEXT;return}s.tagName=A;for(var z=s.tags.length;z-- >r;){var H=s.tag=s.tags.pop();s.tagName=s.tag.name,P(s,"onclosetag",s.tagName);var Z={};for(var rt in H.ns)Z[rt]=H.ns[rt];var W=s.tags[s.tags.length-1]||s;s.opt.xmlns&&H.ns!==W.ns&&Object.keys(H.ns).forEach(function(J){var at=H.ns[J];P(s,"onclosenamespace",{prefix:J,uri:at})})}r===0&&(s.closedRoot=!0),s.tagName=s.attribValue=s.attribName="",s.attribList.length=0,s.state=u.TEXT}function ke(s){var r=s.entity,A=r.toLowerCase(),x,q="";return s.ENTITIES[r]?s.ENTITIES[r]:s.ENTITIES[A]?s.ENTITIES[A]:(r=A,r.charAt(0)==="#"&&(r.charAt(1)==="x"?(r=r.slice(2),x=parseInt(r,16),q=x.toString(16)):(r=r.slice(1),x=parseInt(r,10),q=x.toString(10))),r=r.replace(/^0+/,""),isNaN(x)||q.toLowerCase()!==r||x<0||x>1114111?(V(s,"Invalid character entity"),"&"+s.entity+";"):String.fromCodePoint(x))}function Ht(s,r){r==="<"?(s.state=u.OPEN_WAKA,s.startTagPosition=s.position):i(r)||(V(s,"Non-whitespace before first tag."),s.textNode=r,s.state=u.TEXT)}function $t(s,r){var A="";return r<s.length&&(A=s.charAt(r)),A}function Kt(s){var r=this;if(this.error)throw this.error;if(r.closed)return Y(r,"Cannot write after close. Assign an onready handler.");if(s===null)return ot(r);typeof s=="object"&&(s=s.toString());for(var A=0,x="";x=$t(s,A++),r.c=x,!!x;)switch(r.trackPosition&&(r.position++,x===`
`?(r.line++,r.column=0):r.column++),r.state){case u.BEGIN:if(r.state=u.BEGIN_WHITESPACE,x==="\uFEFF")continue;Ht(r,x);continue;case u.BEGIN_WHITESPACE:Ht(r,x);continue;case u.TEXT:if(r.sawRoot&&!r.closedRoot){for(var z=A-1;x&&x!=="<"&&x!=="&";)x=$t(s,A++),x&&r.trackPosition&&(r.position++,x===`
`?(r.line++,r.column=0):r.column++);r.textNode+=s.substring(z,A-1)}x==="<"&&!(r.sawRoot&&r.closedRoot&&!r.strict)?(r.state=u.OPEN_WAKA,r.startTagPosition=r.position):(!i(x)&&(!r.sawRoot||r.closedRoot)&&V(r,"Text data outside of root node."),x==="&"?r.state=u.TEXT_ENTITY:r.textNode+=x);continue;case u.SCRIPT:x==="<"?r.state=u.SCRIPT_ENDING:r.script+=x;continue;case u.SCRIPT_ENDING:x==="/"?r.state=u.CLOSE_TAG:(r.script+="<"+x,r.state=u.SCRIPT);continue;case u.OPEN_WAKA:if(x==="!")r.state=u.SGML_DECL,r.sgmlDecl="";else if(!i(x))if(S(k,x))r.state=u.OPEN_TAG,r.tagName=x;else if(x==="/")r.state=u.CLOSE_TAG,r.tagName="";else if(x==="?")r.state=u.PROC_INST,r.procInstName=r.procInstBody="";else{if(V(r,"Unencoded <"),r.startTagPosition+1<r.position){var q=r.position-r.startTagPosition;x=new Array(q).join(" ")+x}r.textNode+="<"+x,r.state=u.TEXT}continue;case u.SGML_DECL:if(r.sgmlDecl+x==="--"){r.state=u.COMMENT,r.comment="",r.sgmlDecl="";continue}r.doctype&&r.doctype!==!0&&r.sgmlDecl?(r.state=u.DOCTYPE_DTD,r.doctype+="<!"+r.sgmlDecl+x,r.sgmlDecl=""):(r.sgmlDecl+x).toUpperCase()===_?(P(r,"onopencdata"),r.state=u.CDATA,r.sgmlDecl="",r.cdata=""):(r.sgmlDecl+x).toUpperCase()===w?(r.state=u.DOCTYPE,(r.doctype||r.sawRoot)&&V(r,"Inappropriately located doctype declaration"),r.doctype="",r.sgmlDecl=""):x===">"?(P(r,"onsgmldeclaration",r.sgmlDecl),r.sgmlDecl="",r.state=u.TEXT):(n(x)&&(r.state=u.SGML_DECL_QUOTED),r.sgmlDecl+=x);continue;case u.SGML_DECL_QUOTED:x===r.q&&(r.state=u.SGML_DECL,r.q=""),r.sgmlDecl+=x;continue;case u.DOCTYPE:x===">"?(r.state=u.TEXT,P(r,"ondoctype",r.doctype),r.doctype=!0):(r.doctype+=x,x==="["?r.state=u.DOCTYPE_DTD:n(x)&&(r.state=u.DOCTYPE_QUOTED,r.q=x));continue;case u.DOCTYPE_QUOTED:r.doctype+=x,x===r.q&&(r.q="",r.state=u.DOCTYPE);continue;case u.DOCTYPE_DTD:x==="]"?(r.doctype+=x,r.state=u.DOCTYPE):x==="<"?(r.state=u.OPEN_WAKA,r.startTagPosition=r.position):n(x)?(r.doctype+=x,r.state=u.DOCTYPE_DTD_QUOTED,r.q=x):r.doctype+=x;continue;case u.DOCTYPE_DTD_QUOTED:r.doctype+=x,x===r.q&&(r.state=u.DOCTYPE_DTD,r.q="");continue;case u.COMMENT:x==="-"?r.state=u.COMMENT_ENDING:r.comment+=x;continue;case u.COMMENT_ENDING:x==="-"?(r.state=u.COMMENT_ENDED,r.comment=$(r.opt,r.comment),r.comment&&P(r,"oncomment",r.comment),r.comment=""):(r.comment+="-"+x,r.state=u.COMMENT);continue;case u.COMMENT_ENDED:x!==">"?(V(r,"Malformed comment"),r.comment+="--"+x,r.state=u.COMMENT):r.doctype&&r.doctype!==!0?r.state=u.DOCTYPE_DTD:r.state=u.TEXT;continue;case u.CDATA:for(var z=A-1;x&&x!=="]";)x=$t(s,A++),x&&r.trackPosition&&(r.position++,x===`
`?(r.line++,r.column=0):r.column++);r.cdata+=s.substring(z,A-1),x==="]"&&(r.state=u.CDATA_ENDING);continue;case u.CDATA_ENDING:x==="]"?r.state=u.CDATA_ENDING_2:(r.cdata+="]"+x,r.state=u.CDATA);continue;case u.CDATA_ENDING_2:x===">"?(r.cdata&&P(r,"oncdata",r.cdata),P(r,"onclosecdata"),r.cdata="",r.state=u.TEXT):x==="]"?r.cdata+="]":(r.cdata+="]]"+x,r.state=u.CDATA);continue;case u.PROC_INST:x==="?"?r.state=u.PROC_INST_ENDING:i(x)?r.state=u.PROC_INST_BODY:r.procInstName+=x;continue;case u.PROC_INST_BODY:if(!r.procInstBody&&i(x))continue;x==="?"?r.state=u.PROC_INST_ENDING:r.procInstBody+=x;continue;case u.PROC_INST_ENDING:if(x===">"){let W={name:r.procInstName,body:r.procInstBody};M(r,W),P(r,"onprocessinginstruction",W),r.procInstName=r.procInstBody="",r.state=u.TEXT}else r.procInstBody+="?"+x,r.state=u.PROC_INST_BODY;continue;case u.OPEN_TAG:S(N,x)?r.tagName+=x:(Ae(r),x===">"?mt(r):x==="/"?r.state=u.OPEN_TAG_SLASH:(i(x)||V(r,"Invalid character in tag name"),r.state=u.ATTRIB));continue;case u.OPEN_TAG_SLASH:x===">"?(mt(r,!0),Bt(r)):(V(r,"Forward-slash in opening tag not followed by >"),r.state=u.ATTRIB);continue;case u.ATTRIB:if(i(x))continue;x===">"?mt(r):x==="/"?r.state=u.OPEN_TAG_SLASH:S(k,x)?(r.attribName=x,r.attribValue="",r.state=u.ATTRIB_NAME):V(r,"Invalid attribute name");continue;case u.ATTRIB_NAME:x==="="?r.state=u.ATTRIB_VALUE:x===">"?(V(r,"Attribute without value"),r.attribValue=r.attribName,Ft(r),mt(r)):i(x)?r.state=u.ATTRIB_NAME_SAW_WHITE:S(N,x)?r.attribName+=x:V(r,"Invalid attribute name");continue;case u.ATTRIB_NAME_SAW_WHITE:if(x==="=")r.state=u.ATTRIB_VALUE;else{if(i(x))continue;V(r,"Attribute without value"),r.tag.attributes[r.attribName]="",r.attribValue="",P(r,"onattribute",{name:r.attribName,value:""}),r.attribName="",x===">"?mt(r):S(k,x)?(r.attribName=x,r.state=u.ATTRIB_NAME):(V(r,"Invalid attribute name"),r.state=u.ATTRIB)}continue;case u.ATTRIB_VALUE:if(i(x))continue;n(x)?(r.q=x,r.state=u.ATTRIB_VALUE_QUOTED):(r.opt.unquotedAttributeValues||Y(r,"Unquoted attribute value"),r.state=u.ATTRIB_VALUE_UNQUOTED,r.attribValue=x);continue;case u.ATTRIB_VALUE_QUOTED:if(x!==r.q){x==="&"?r.state=u.ATTRIB_VALUE_ENTITY_Q:r.attribValue+=x;continue}Ft(r),r.q="",r.state=u.ATTRIB_VALUE_CLOSED;continue;case u.ATTRIB_VALUE_CLOSED:i(x)?r.state=u.ATTRIB:x===">"?mt(r):x==="/"?r.state=u.OPEN_TAG_SLASH:S(k,x)?(V(r,"No whitespace between attributes"),r.attribName=x,r.attribValue="",r.state=u.ATTRIB_NAME):V(r,"Invalid attribute name");continue;case u.ATTRIB_VALUE_UNQUOTED:if(!y(x)){x==="&"?r.state=u.ATTRIB_VALUE_ENTITY_U:r.attribValue+=x;continue}Ft(r),x===">"?mt(r):r.state=u.ATTRIB;continue;case u.CLOSE_TAG:if(r.tagName)x===">"?Bt(r):S(N,x)?r.tagName+=x:r.script?(r.script+="</"+r.tagName+x,r.tagName="",r.state=u.SCRIPT):(i(x)||V(r,"Invalid tagname in closing tag"),r.state=u.CLOSE_TAG_SAW_WHITE);else{if(i(x))continue;C(k,x)?r.script?(r.script+="</"+x,r.state=u.SCRIPT):V(r,"Invalid tagname in closing tag."):r.tagName=x}continue;case u.CLOSE_TAG_SAW_WHITE:if(i(x))continue;x===">"?Bt(r):V(r,"Invalid characters in closing tag");continue;case u.TEXT_ENTITY:case u.ATTRIB_VALUE_ENTITY_Q:case u.ATTRIB_VALUE_ENTITY_U:var H,Z;switch(r.state){case u.TEXT_ENTITY:H=u.TEXT,Z="textNode";break;case u.ATTRIB_VALUE_ENTITY_Q:H=u.ATTRIB_VALUE_QUOTED,Z="attribValue";break;case u.ATTRIB_VALUE_ENTITY_U:H=u.ATTRIB_VALUE_UNQUOTED,Z="attribValue";break}if(x===";"){var rt=ke(r);r.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(rt)?((r.entityCount+=1)>r.opt.maxEntityCount&&Y(r,"Parsed entity count exceeds max entity count"),(r.entityDepth+=1)>r.opt.maxEntityDepth&&Y(r,"Parsed entity depth exceeds max entity depth"),r.entity="",r.state=H,r.write(rt),r.entityDepth-=1):(r[Z]+=rt,r.entity="",r.state=H)}else S(r.entity.length?f:I,x)?r.entity+=x:(V(r,"Invalid character in entity name"),r[Z]+="&"+r.entity+x,r.entity="",r.state=H);continue;default:throw new Error(r,"Unknown state: "+r.state)}return r.position>=r.bufferCheckPosition&&b(r),r}String.fromCodePoint||(function(){var s=String.fromCharCode,r=Math.floor,A=function(){var x=16384,q=[],z,H,Z=-1,rt=arguments.length;if(!rt)return"";for(var W="";++Z<rt;){var J=Number(arguments[Z]);if(!isFinite(J)||J<0||J>1114111||r(J)!==J)throw RangeError("Invalid code point: "+J);J<=65535?q.push(J):(J-=65536,z=(J>>10)+55296,H=J%1024+56320,q.push(z,H)),(Z+1===rt||q.length>x)&&(W+=s.apply(null,q),q.length=0)}return W};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:A,configurable:!0,writable:!0}):String.fromCodePoint=A})()})(typeof me>"u"?me.sax={}:me)});var En=B(qe=>{(function(){"use strict";qe.stripBOM=function(e){return e[0]==="\uFEFF"?e.substring(1):e}}).call(qe)});var je=B(Ct=>{(function(){"use strict";var e;e=new RegExp(/(?!xmlns)^.*:/),Ct.normalize=function(t){return t.toLowerCase()},Ct.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},Ct.stripPrefix=function(t){return t.replace(e,"")},Ct.parseNumbers=function(t){return isNaN(t)||(t=t%1===0?parseInt(t,10):parseFloat(t)),t},Ct.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t=t.toLowerCase()==="true"),t}}).call(Ct)});var xn=B(yt=>{(function(){"use strict";var e,t,a,b,o,p,c,l,d,m=function(w,h){return function(){return w.apply(h,arguments)}},T=function(w,h){for(var v in h)_.call(h,v)&&(w[v]=h[v]);function E(){this.constructor=w}return E.prototype=h.prototype,w.prototype=new E,w.__super__=h.prototype,w},_={}.hasOwnProperty;l=In(),b=require("events"),e=En(),c=je(),d=require("timers").setImmediate,t=ee().defaults,o=function(w){return typeof w=="object"&&w!=null&&Object.keys(w).length===0},p=function(w,h,v){var E,k,N;for(E=0,k=w.length;E<k;E++)N=w[E],h=N(h,v);return h},a=function(w,h,v){var E;return E=Object.create(null),E.value=v,E.writable=!0,E.enumerable=!0,E.configurable=!0,Object.defineProperty(w,h,E)},yt.Parser=(function(w){T(h,w);function h(v){this.parseStringPromise=m(this.parseStringPromise,this),this.parseString=m(this.parseString,this),this.reset=m(this.reset,this),this.assignOrPush=m(this.assignOrPush,this),this.processAsync=m(this.processAsync,this);var E,k,N;if(!(this instanceof yt.Parser))return new yt.Parser(v);this.options={},k=t["0.2"];for(E in k)_.call(k,E)&&(N=k[E],this.options[E]=N);for(E in v)_.call(v,E)&&(N=v[E],this.options[E]=N);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}return h.prototype.processAsync=function(){var v,E;try{return this.remaining.length<=this.options.chunkSize?(v=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(v),this.saxParser.close()):(v=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(v),d(this.processAsync))}catch(k){if(E=k,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(E)}},h.prototype.assignOrPush=function(v,E,k){return E in v?(v[E]instanceof Array||a(v,E,[v[E]]),v[E].push(k)):this.options.explicitArray?a(v,E,[k]):a(v,E,k)},h.prototype.reset=function(){var v,E,k,N;return this.removeAllListeners(),this.saxParser=l.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(function(I){return function(f){if(I.saxParser.resume(),!I.saxParser.errThrown)return I.saxParser.errThrown=!0,I.emit("error",f)}})(this),this.saxParser.onend=(function(I){return function(){if(!I.saxParser.ended)return I.saxParser.ended=!0,I.emit("end",I.resultObject)}})(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,N=[],v=this.options.attrkey,E=this.options.charkey,this.saxParser.onopentag=(function(I){return function(f){var i,n,y,S,C;if(y={},y[E]="",!I.options.ignoreAttrs){C=f.attributes;for(i in C)_.call(C,i)&&(!(v in y)&&!I.options.mergeAttrs&&(y[v]={}),n=I.options.attrValueProcessors?p(I.options.attrValueProcessors,f.attributes[i],i):f.attributes[i],S=I.options.attrNameProcessors?p(I.options.attrNameProcessors,i):i,I.options.mergeAttrs?I.assignOrPush(y,S,n):a(y[v],S,n))}return y["#name"]=I.options.tagNameProcessors?p(I.options.tagNameProcessors,f.name):f.name,I.options.xmlns&&(y[I.options.xmlnskey]={uri:f.uri,local:f.local}),N.push(y)}})(this),this.saxParser.onclosetag=(function(I){return function(){var f,i,n,y,S,C,u,g,D,O;if(C=N.pop(),S=C["#name"],(!I.options.explicitChildren||!I.options.preserveChildrenOrder)&&delete C["#name"],C.cdata===!0&&(f=C.cdata,delete C.cdata),D=N[N.length-1],C[E].match(/^\s*$/)&&!f?(i=C[E],delete C[E]):(I.options.trim&&(C[E]=C[E].trim()),I.options.normalize&&(C[E]=C[E].replace(/\s{2,}/g," ").trim()),C[E]=I.options.valueProcessors?p(I.options.valueProcessors,C[E],S):C[E],Object.keys(C).length===1&&E in C&&!I.EXPLICIT_CHARKEY&&(C=C[E])),o(C)&&(typeof I.options.emptyTag=="function"?C=I.options.emptyTag():C=I.options.emptyTag!==""?I.options.emptyTag:i),I.options.validator!=null&&(O="/"+(function(){var L,R,M;for(M=[],L=0,R=N.length;L<R;L++)y=N[L],M.push(y["#name"]);return M})().concat(S).join("/"),(function(){var L;try{return C=I.options.validator(O,D&&D[S],C)}catch(R){return L=R,I.emit("error",L)}})()),I.options.explicitChildren&&!I.options.mergeAttrs&&typeof C=="object"){if(!I.options.preserveChildrenOrder)y={},I.options.attrkey in C&&(y[I.options.attrkey]=C[I.options.attrkey],delete C[I.options.attrkey]),!I.options.charsAsChildren&&I.options.charkey in C&&(y[I.options.charkey]=C[I.options.charkey],delete C[I.options.charkey]),Object.getOwnPropertyNames(C).length>0&&(y[I.options.childkey]=C),C=y;else if(D){D[I.options.childkey]=D[I.options.childkey]||[],u={};for(n in C)_.call(C,n)&&a(u,n,C[n]);D[I.options.childkey].push(u),delete C["#name"],Object.keys(C).length===1&&E in C&&!I.EXPLICIT_CHARKEY&&(C=C[E])}}return N.length>0?I.assignOrPush(D,S,C):(I.options.explicitRoot&&(g=C,C={},a(C,S,g)),I.resultObject=C,I.saxParser.ended=!0,I.emit("end",I.resultObject))}})(this),k=(function(I){return function(f){var i,n;if(n=N[N.length-1],n)return n[E]+=f,I.options.explicitChildren&&I.options.preserveChildrenOrder&&I.options.charsAsChildren&&(I.options.includeWhiteChars||f.replace(/\\n/g,"").trim()!=="")&&(n[I.options.childkey]=n[I.options.childkey]||[],i={"#name":"__text__"},i[E]=f,I.options.normalize&&(i[E]=i[E].replace(/\s{2,}/g," ").trim()),n[I.options.childkey].push(i)),n}})(this),this.saxParser.ontext=k,this.saxParser.oncdata=(function(I){return function(f){var i;if(i=k(f),i)return i.cdata=!0}})(this)},h.prototype.parseString=function(v,E){var k;E!=null&&typeof E=="function"&&(this.on("end",function(N){return this.reset(),E(null,N)}),this.on("error",function(N){return this.reset(),E(N)}));try{return v=v.toString(),v.trim()===""?(this.emit("end",null),!0):(v=e.stripBOM(v),this.options.async?(this.remaining=v,d(this.processAsync),this.saxParser):this.saxParser.write(v).close())}catch(N){if(k=N,this.saxParser.errThrown||this.saxParser.ended){if(this.saxParser.ended)throw k}else return this.emit("error",k),this.saxParser.errThrown=!0}},h.prototype.parseStringPromise=function(v){return new Promise((function(E){return function(k,N){return E.parseString(v,function(I,f){return I?N(I):k(f)})}})(this))},h})(b),yt.parseString=function(w,h,v){var E,k,N;return v!=null?(typeof v=="function"&&(E=v),typeof h=="object"&&(k=h)):(typeof h=="function"&&(E=h),k={}),N=new yt.Parser(k),N.parseString(w,E)},yt.parseStringPromise=function(w,h){var v,E;return typeof h=="object"&&(v=h),E=new yt.Parser(v),E.parseStringPromise(w)}}).call(yt)});var ye=B(bt=>{(function(){"use strict";var e,t,a,b,o=function(c,l){for(var d in l)p.call(l,d)&&(c[d]=l[d]);function m(){this.constructor=c}return m.prototype=l.prototype,c.prototype=new m,c.__super__=l.prototype,c},p={}.hasOwnProperty;t=ee(),e=Tn(),a=xn(),b=je(),bt.defaults=t.defaults,bt.processors=b,bt.ValidationError=(function(c){o(l,c);function l(d){this.message=d}return l})(Error),bt.Builder=e.Builder,bt.Parser=a.Parser,bt.parseString=a.parseString,bt.parseStringPromise=a.parseStringPromise}).call(bt)});var Ri={};Yn(Ri,{activate:()=>Pi,deactivate:()=>Mi});module.exports=Jn(Ri);var X=j(require("vscode"));var U=j(require("vscode")),te=j(require("fs")),nt=j(require("path"));function ct(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Qn(e){return e==="high"?"I":e==="medium"?"II":"III"}function Zn(e){let t={total:e.length,not_reviewed:0,open:0,not_a_finding:0,not_applicable:0,high:0,medium:0,low:0};for(let a of e)t[a.status]++,t[a.severity]++;return t}function Ze(e){return JSON.stringify(e).replace(/<\//g,"<\\/").replace(/<!--/g,"<\\!--")}function tr(e){let t=Ze(Object.fromEntries(e.stigs.flatMap(a=>a.rules.map(b=>[b.uuid,b]))));return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>${ct(e.title)}</title>
<style>${ii}</style>
</head>
<body>

<!-- \u2550\u2550\u2550 HEADER \u2550\u2550\u2550 -->
<header class="hdr">
  <div class="hdr-row">
    <h1>${ct(e.title)}</h1>
    <span class="chip chip-accent">CKLB v${ct(e.cklb_version)}</span>
    <div class="hdr-actions">
      <button class="btn-export" id="btnExportCsv">Export CSV</button>
      <button class="btn-export" id="btnExportCkl">Export CKL</button>
      <button class="btn-export" id="btnExportPoam">Export POA&amp;M</button>
    </div>
  </div>
  ${ti(e.target_data)}
</header>

${e.stigs.map((a,b)=>ei(a,b)).join(`
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
const RULES = ${t};
const TARGET = ${Ze(e.target_data)};
${ni}
</script>
</body>
</html>`}function ti(e){let t=[e.host_name&&`Host: ${e.host_name}`,e.ip_address&&`IP: ${e.ip_address}`,e.fqdn&&`FQDN: ${e.fqdn}`,e.mac_address&&`MAC: ${e.mac_address}`,e.target_type&&`Type: ${e.target_type}`,e.role&&e.role!=="None"&&`Role: ${e.role}`].filter(Boolean);return t.length?`<div class="target-row">${t.map(a=>`<span class="chip">${ct(a)}</span>`).join("")}<button class="btn-edit-target" id="editTargetBtn">Edit Target</button></div>`:'<p class="muted">No target data configured <button class="btn-edit-target" id="editTargetBtn">Edit Target</button></p>'}function ei(e,t){let a=Zn(e.rules),b=o=>a.total?Math.round(o/a.total*100):0;return`
<section class="stig" data-idx="${t}">
  <!-- title -->
  <div class="stig-title-row">
    <h2>${ct(e.display_name||e.stig_name)}</h2>
    <div class="chip-row">
      <span class="chip">${ct(e.release_info)}</span>
      <span class="chip">Version ${ct(e.version)}</span>
      <span class="chip">${e.size} rules</span>
    </div>
  </div>

  <!-- stat cards -->
  <div class="cards">
    <div class="card card-total"><div class="card-n">${a.total}</div><div class="card-l">Total</div></div>
    <div class="card card-open"><div class="card-n">${a.open}</div><div class="card-l">Open</div></div>
    <div class="card card-naf"><div class="card-n">${a.not_a_finding}</div><div class="card-l">Not a Finding</div></div>
    <div class="card card-nr"><div class="card-n">${a.not_reviewed}</div><div class="card-l">Not Reviewed</div></div>
    <div class="card card-na"><div class="card-n">${a.not_applicable}</div><div class="card-l">Not Applicable</div></div>
  </div>

  <!-- severity bar -->
  <div class="sev-bar">
    <div class="sev-seg sev-high" style="width:${b(a.high)}%"><span>CAT I \xB7 ${a.high}</span></div>
    <div class="sev-seg sev-med"  style="width:${b(a.medium)}%"><span>CAT II \xB7 ${a.medium}</span></div>
    <div class="sev-seg sev-low"  style="width:${b(a.low)}%"><span>CAT III \xB7 ${a.low}</span></div>
  </div>

  <!-- completion bar -->
  <div class="completion">
    <div class="completion-label">Completion: ${b(a.not_a_finding+a.not_applicable)}%</div>
    <div class="completion-track">
      <div class="completion-fill completion-naf" style="width:${b(a.not_a_finding)}%"></div>
      <div class="completion-fill completion-na"  style="width:${b(a.not_applicable)}%"></div>
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
      <option value="not_reviewed">Not Reviewed (${a.not_reviewed})</option>
      <option value="open">Open (${a.open})</option>
      <option value="not_a_finding">Not a Finding (${a.not_a_finding})</option>
      <option value="not_applicable">Not Applicable (${a.not_applicable})</option>
    </select>
    <select class="flt" data-kind="severity">
      <option value="">All Severities</option>
      <option value="high">CAT I \u2013 High (${a.high})</option>
      <option value="medium">CAT II \u2013 Medium (${a.medium})</option>
      <option value="low">CAT III \u2013 Low (${a.low})</option>
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
        ${e.rules.map(o=>ri(o,e.uuid)).join(`
`)}
      </tbody>
    </table>
  </div>
</section>`}function ri(e,t){let a=`${e.group_id} ${e.rule_version} ${e.rule_title} ${e.group_title}`.toLowerCase();return`<tr class="row" data-uuid="${e.uuid}" data-stig="${t}"
    data-sev="${e.severity}" data-status="${e.status}" data-search="${ct(a)}">
  <td class="td-cb"><input type="checkbox" class="row-cb" data-uuid="${e.uuid}" data-stig="${t}" /></td>
  <td><span class="pill sev-${e.severity}">CAT ${Qn(e.severity)}</span></td>
  <td><code>${ct(e.group_id)}</code></td>
  <td><code>${ct(e.rule_version)}</code></td>
  <td class="td-title">${ct(e.rule_title)}</td>
  <td><select class="inline-status st-${e.status}" data-uuid="${e.uuid}" data-stig="${t}">
    <option value="not_reviewed" ${e.status==="not_reviewed"?"selected":""}>Not Reviewed</option>
    <option value="open" ${e.status==="open"?"selected":""}>Open</option>
    <option value="not_a_finding" ${e.status==="not_a_finding"?"selected":""}>Not a Finding</option>
    <option value="not_applicable" ${e.status==="not_applicable"?"selected":""}>Not Applicable</option>
  </select></td>
</tr>`}var ni=`
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
`,ii=`
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
`;var oi={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},si={high:"CAT I",medium:"CAT II",low:"CAT III"};function er(e){return e?e.includes('"')||e.includes(",")||e.includes(`
`)||e.includes("\r")?'"'+e.replace(/"/g,'""')+'"':e:""}function Jt(e){let a=[["Vuln ID","Rule ID","Rule Version","Severity","Status","Title","Finding Details","Comments","CCIs","SRG ID"].map(er).join(",")];for(let b of e.stigs)for(let o of b.rules)a.push([o.group_id,o.rule_id,o.rule_version,si[o.severity]||o.severity,oi[o.status]||o.status,o.rule_title,o.finding_details,o.comments,o.ccis.join("; "),o.srg_id].map(er).join(","));return a.join(`\r
`)}function tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}var ai={not_reviewed:"Not_Reviewed",open:"Open",not_a_finding:"NotAFinding",not_applicable:"Not_Applicable"};function G(e,t){return`        <STIG_DATA>
          <VULN_ATTRIBUTE>${tt(e)}</VULN_ATTRIBUTE>
          <ATTRIBUTE_DATA>${tt(t)}</ATTRIBUTE_DATA>
        </STIG_DATA>`}function ci(e){let t=[G("Vuln_Num",e.group_id),G("Severity",e.severity),G("Group_Title",e.group_title),G("Rule_ID",e.rule_id),G("Rule_Ver",e.rule_version),G("Rule_Title",e.rule_title),G("Vuln_Discuss",e.discussion),G("IA_Controls",e.ia_controls),G("Check_Content",e.check_content),G("Fix_Text",e.fix_text),G("False_Positives",e.false_positives),G("False_Negatives",e.false_negatives),G("Documentable",e.documentable),G("Mitigations",e.mitigations),G("Potential_Impact",e.potential_impacts),G("Third_Party_Tools",e.third_party_tools),G("Mitigation_Control",e.mitigation_control),G("Responsibility",e.responsibility),G("Security_Override_Guidance",e.security_override_guidance),G("Check_Content_Ref",e.check_content_ref?.href||""),G("Weight",e.weight),G("Class",e.classification),G("STIGRef",e.stig_ref||""),G("TargetKey",e.target_key||"")];for(let a of e.ccis)t.push(G("CCI_REF",a));for(let a of e.legacy_ids)t.push(G("Legacy_ID",a));return`      <VULN>
${t.join(`
`)}
        <STATUS>${tt(ai[e.status]||"Not_Reviewed")}</STATUS>
        <FINDING_DETAILS>${tt(e.finding_details)}</FINDING_DETAILS>
        <COMMENTS>${tt(e.comments)}</COMMENTS>
        <SEVERITY_OVERRIDE></SEVERITY_OVERRIDE>
        <SEVERITY_JUSTIFICATION></SEVERITY_JUSTIFICATION>
      </VULN>`}function lt(e,t){return`          <SI_DATA>
            <SID_NAME>${tt(e)}</SID_NAME>
            <SID_DATA>${tt(t)}</SID_DATA>
          </SI_DATA>`}function li(e){let t=[lt("version",e.version),lt("classification","UNCLASSIFIED"),lt("customname",""),lt("stigid",e.stig_id),lt("description",""),lt("filename",""),lt("releaseinfo",e.release_info),lt("title",e.stig_name),lt("uuid",e.uuid),lt("notice","terms-of-use"),lt("source","")].join(`
`),a=e.rules.map(ci).join(`
`);return`    <iSTIG>
        <STIG_INFO>
${t}
        </STIG_INFO>
${a}
    </iSTIG>`}function Qt(e){let t=e.target_data,a=t.is_web_database?"true":"false",b=`  <ASSET>
    <ROLE>${tt(t.role)}</ROLE>
    <ASSET_TYPE>${tt(t.target_type)}</ASSET_TYPE>
    <HOST_NAME>${tt(t.host_name)}</HOST_NAME>
    <HOST_IP>${tt(t.ip_address)}</HOST_IP>
    <HOST_MAC>${tt(t.mac_address)}</HOST_MAC>
    <HOST_FQDN>${tt(t.fqdn)}</HOST_FQDN>
    <TARGET_COMMENT>${tt(t.comments)}</TARGET_COMMENT>
    <TECH_AREA>${tt(t.technology_area)}</TECH_AREA>
    <TARGET_KEY></TARGET_KEY>
    <WEB_OR_DATABASE>${a}</WEB_OR_DATABASE>
    <WEB_DB_SITE>${tt(t.web_db_site)}</WEB_DB_SITE>
    <WEB_DB_INSTANCE>${tt(t.web_db_instance)}</WEB_DB_INSTANCE>
  </ASSET>`,o=e.stigs.map(li).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<!--DISA STIG Viewer :: 2.x-->
<CHECKLIST>
${b}
  <STIGS>
${o}
  </STIGS>
</CHECKLIST>`}var ui={high:"CAT I",medium:"CAT II",low:"CAT III"};function rr(e){return e?e.includes('"')||e.includes(",")||e.includes(`
`)||e.includes("\r")?'"'+e.replace(/"/g,'""')+'"':e:""}function Zt(e){let a=[["POA&M ID","Vuln ID","Rule ID","Rule Version","Raw Severity","Weakness Description","Source","Finding Details","Point of Contact","Resources Required","Scheduled Completion Date","Milestones with Completion Dates","Milestone Changes","Identified By","Status","Comments","CCIs","Host Name"].map(rr).join(",")],b=1;for(let o of e.stigs){let p=o.rules.filter(c=>c.status==="open");for(let c of p)a.push([String(b++),c.group_id,c.rule_id,c.rule_version,ui[c.severity]||c.severity,c.rule_title,`${o.stig_name} ${o.release_info}`,c.finding_details,"","","","","","","Ongoing",c.comments,c.ccis.join("; "),e.target_data.host_name].map(rr).join(","))}return a.join(`\r
`)}var ut=class e{constructor(t){this._context=t}static get activeDocumentUri(){return e._activeDocumentUri}static register(t){return U.window.registerCustomEditorProvider("stigViewer.cklbEditor",new e(t),{webviewOptions:{retainContextWhenHidden:!0},supportsMultipleEditorsPerDocument:!1})}async resolveCustomTextEditor(t,a,b){a.webview.options={enableScripts:!0},(()=>{try{let l=JSON.parse(t.getText());a.webview.html=tr(l)}catch(l){a.webview.html=`<!DOCTYPE html><html><body>
          <h2 style="color:#f44;">Error parsing .cklb file</h2>
          <pre>${String(l)}</pre></body></html>`}})(),e._activeDocumentUri=t.uri,a.onDidChangeViewState(()=>{a.active&&(e._activeDocumentUri=t.uri)});let p,c=U.workspace.onDidChangeTextDocument(l=>{l.document.uri.toString()===t.uri.toString()&&(clearTimeout(p),p=setTimeout(()=>{try{let d=JSON.parse(t.getText()),m=Object.fromEntries(d.stigs.flatMap(T=>T.rules.map(_=>[_.uuid,_])));a.webview.postMessage({type:"dataUpdate",rules:m})}catch{}},150))});a.webview.onDidReceiveMessage(async l=>{if(l.type==="saveRule"){let{ruleUuid:d,stigUuid:m,status:T,finding_details:_,comments:w}=l;try{let h=JSON.parse(t.getText()),E=h.stigs.find(k=>k.uuid===m)?.rules.find(k=>k.uuid===d);if(E){E.status=T,E.finding_details=_,E.comments=w;let k=new U.WorkspaceEdit,N=new U.Range(t.positionAt(0),t.positionAt(t.getText().length));k.replace(t.uri,N,JSON.stringify(h,null,2)),await U.workspace.applyEdit(k)}}catch(h){U.window.showErrorMessage(`Save failed: ${h}`)}}if(l.type==="saveTargetData")try{let d=JSON.parse(t.getText());Object.assign(d.target_data,l.targetData);let m=new U.WorkspaceEdit,T=new U.Range(t.positionAt(0),t.positionAt(t.getText().length));m.replace(t.uri,T,JSON.stringify(d,null,2)),await U.workspace.applyEdit(m),U.window.showInformationMessage("Target data updated")}catch(d){U.window.showErrorMessage(`Save target data failed: ${d}`)}if(l.type==="exportPoam")try{let d=JSON.parse(t.getText()),m=Zt(d),T=d.stigs.reduce((h,v)=>h+v.rules.filter(E=>E.status==="open").length,0),_=nt.basename(t.uri.fsPath,".cklb")+"_POAM.csv",w=await U.window.showSaveDialog({defaultUri:U.Uri.file(nt.join(nt.dirname(t.uri.fsPath),_)),filters:{CSV:["csv"]},title:`Export POA&M (${T} open findings)`});w&&(te.writeFileSync(w.fsPath,m,"utf-8"),U.window.showInformationMessage(`Exported POA&M (${T} findings) \u2192 ${nt.basename(w.fsPath)}`))}catch(d){U.window.showErrorMessage(`POA&M export failed: ${d}`)}if(l.type==="exportCsv")try{let d=JSON.parse(t.getText()),m=Jt(d),T=nt.basename(t.uri.fsPath,".cklb")+".csv",_=await U.window.showSaveDialog({defaultUri:U.Uri.file(nt.join(nt.dirname(t.uri.fsPath),T)),filters:{CSV:["csv"]},title:"Export Summary CSV"});_&&(te.writeFileSync(_.fsPath,m,"utf-8"),U.window.showInformationMessage(`Exported CSV \u2192 ${nt.basename(_.fsPath)}`))}catch(d){U.window.showErrorMessage(`CSV export failed: ${d}`)}if(l.type==="exportCkl")try{let d=JSON.parse(t.getText()),m=Qt(d),T=nt.basename(t.uri.fsPath,".cklb")+".ckl",_=await U.window.showSaveDialog({defaultUri:U.Uri.file(nt.join(nt.dirname(t.uri.fsPath),T)),filters:{"CKL Checklist":["ckl"]},title:"Export CKL (XML)"});_&&(te.writeFileSync(_.fsPath,m,"utf-8"),U.window.showInformationMessage(`Exported CKL \u2192 ${nt.basename(_.fsPath)}`))}catch(d){U.window.showErrorMessage(`CKL export failed: ${d}`)}if(l.type==="bulkSaveRules"){let{ruleUuids:d,stigUuid:m,status:T,comments:_}=l;try{let w=JSON.parse(t.getText()),h=w.stigs.find(N=>N.uuid===m);if(!h)return;let v=0;for(let N of h.rules)d.includes(N.uuid)&&(N.status=T,_&&(N.comments=_),v++);let E=new U.WorkspaceEdit,k=new U.Range(t.positionAt(0),t.positionAt(t.getText().length));E.replace(t.uri,k,JSON.stringify(w,null,2)),await U.workspace.applyEdit(E),U.window.showInformationMessage(`Bulk updated ${v} rules \u2192 ${T.replace(/_/g," ")}`)}catch(w){U.window.showErrorMessage(`Bulk save failed: ${w}`)}}}),a.onDidDispose(()=>c.dispose())}};var St=j(require("vscode")),ve=j(require("fs")),Nt=j(require("path")),_e=j(ye());var et=[];for(let e=0;e<256;++e)et.push((e+256).toString(16).slice(1));function Cn(e,t=0){return(et[e[t+0]]+et[e[t+1]]+et[e[t+2]]+et[e[t+3]]+"-"+et[e[t+4]]+et[e[t+5]]+"-"+et[e[t+6]]+et[e[t+7]]+"-"+et[e[t+8]]+et[e[t+9]]+"-"+et[e[t+10]]+et[e[t+11]]+et[e[t+12]]+et[e[t+13]]+et[e[t+14]]+et[e[t+15]]).toLowerCase()}var Dn=require("node:crypto"),we=new Uint8Array(256),be=we.length;function Ve(){return be>we.length-16&&((0,Dn.randomFillSync)(we),be=0),we.slice(be,be+=16)}var Sn=require("node:crypto"),Xe={randomUUID:Sn.randomUUID};function di(e,t,a){e=e||{};let b=e.random??e.rng?.()??Ve();if(b.length<16)throw new Error("Random bytes length must be >= 16");if(b[6]=b[6]&15|64,b[8]=b[8]&63|128,t){if(a=a||0,a<0||a+16>t.length)throw new RangeError(`UUID byte range ${a}:${a+15} is out of buffer bounds`);for(let o=0;o<16;++o)t[a+o]=b[o];return t}return Cn(b)}function pi(e,t,a){return Xe.randomUUID&&!t&&!e?Xe.randomUUID():di(e,t,a)}var wt=pi;function Tt(e){return e==null?[]:Array.isArray(e)?e:[e]}function it(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?it(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}function dt(e,t){let a=e.match(new RegExp(`<${t}>([\\s\\S]*?)<\\/${t}>`));return a?a[1].trim():""}function fi(e){let t=e.match(/(V-\d+)/);return t?t[1]:e}function hi(e){let t=e.match(/(SV-\d+r\d+_rule)/);return t?t[1]:e}function gi(e){let t=(e||"").toLowerCase();return t==="high"?"high":t==="medium"?"medium":"low"}function mi(e){let t=e;if(t.Benchmark)return t.Benchmark;let a=e["data-stream-collection"];if(a?.component!=null)for(let b of Tt(a.component)){let o=b.Benchmark;if(o)return o}return null}async function Nn(e){let t=e.fsPath,a=ve.readFileSync(t,"utf-8"),b=await(0,_e.parseStringPromise)(a,{explicitArray:!1,tagNameProcessors:[_e.processors.stripPrefix]}),o=mi(b);if(!o)throw new Error("No XCCDF <Benchmark> found. Use a standalone *-xccdf.xml benchmark, or an SCAP 1.2/1.3 data stream (e.g. *Benchmark*.xml) that embeds the checklist.");let c=(o.$||{}).id||"",l=it(o.title),d=it(o.version),m="";for(let n of Tt(o["plain-text"]))if((n?.$||{}).id==="release-info"){m=it(n);break}let T=wt(),_=wt(),w=new Date().toISOString(),h=Tt(o.Group),v=[];for(let n of h){let y=n?.$||{},S=fi(y.id||""),C=it(n.title),u=it(n.description);for(let g of Tt(n.Rule)){let D=g?.$||{},O=hi(D.id||""),L=gi(D.severity),R=D.weight||"10.0",M=it(g.version),P=it(g.title),F=it(g.description),$=dt(F,"VulnDiscussion"),Y=dt(F,"FalsePositives"),ot=dt(F,"FalseNegatives"),V=dt(F,"Documentable"),Ae=dt(F,"Mitigations"),Rt=dt(F,"SeverityOverrideGuidance"),Ft=dt(F,"PotentialImpacts"),mt=dt(F,"ThirdPartyTools"),Bt=dt(F,"MitigationControl"),ke=dt(F,"Responsibility"),Ht=dt(F,"IAControls"),$t=it(g.fixtext),Kt=Tt(g.check),s="",r={href:"",name:""},x=Kt.find(W=>W["check-content"])||Kt[0];if(x){s=it(x["check-content"]);let W=Tt(x["check-content-ref"])[0];W?.$&&(r={href:W.$.href||"",name:W.$.name||""})}let q=[],z=[];for(let W of Tt(g.ident)){let J=W?.$?.system||"",at=it(W);J.includes("cci")?q.push(at):J.includes("legacy")&&z.push(at)}let H=null,Z=null;for(let W of Tt(g.reference))W?.identifier&&(H=it(W.identifier)),W?.title&&(Z=it(W.title));let rt=wt();v.push({uuid:rt,stig_uuid:T,target_key:H,stig_ref:Z,group_id:S,rule_id:O,rule_id_src:O,weight:R,classification:"Unclassified",severity:L,rule_version:M,group_title:C,rule_title:P,fix_text:$t,false_positives:Y,false_negatives:ot,discussion:$,check_content:s,documentable:V,mitigations:Ae,potential_impacts:Ft,third_party_tools:mt,mitigation_control:Bt,responsibility:ke,security_override_guidance:Rt,ia_controls:Ht,check_content_ref:r,legacy_ids:z,ccis:q,group_tree:[{id:S,title:C,description:u}],createdAt:w,updatedAt:w,STIGUuid:T,status:"not_reviewed",overrides:{},comments:"",finding_details:"",srg_id:C})}}let E={stig_name:l,display_name:l,stig_id:c,release_info:m,version:d,uuid:T,reference_identifier:c,size:v.length,rules:v},N={title:l,id:_,stigs:[E],active:!0,mode:1,has_path:!0,target_data:{target_type:"Non-Computing",host_name:"",ip_address:"",mac_address:"",fqdn:"",comments:"",role:"None",is_web_database:!1,technology_area:"",web_db_site:"",web_db_instance:"",classification:null},cklb_version:"1"},I=Nt.basename(t).replace(/-xccdf\.xml$/i,".cklb").replace(/\.xml$/i,".cklb"),f=Nt.join(Nt.dirname(t),I);ve.writeFileSync(f,JSON.stringify(N,null,2));let i=St.Uri.file(f);await St.commands.executeCommand("vscode.openWith",i,"stigViewer.cklbEditor"),St.window.showInformationMessage(`Imported ${v.length} rules from XCCDF \u2192 ${I}`)}var At=j(require("vscode")),Ie=j(require("fs")),kt=j(require("path")),Ee=j(ye());function Te(e){return e==null?[]:Array.isArray(e)?e:[e]}function Q(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?Q(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}var yi={Not_Reviewed:"not_reviewed",Open:"open",NotAFinding:"not_a_finding",Not_Applicable:"not_applicable"};function bi(e){let t=(e||"").toLowerCase();return t==="high"?"high":t==="medium"?"medium":"low"}async function An(e){let t=e.fsPath,a=Ie.readFileSync(t,"utf-8"),o=(await(0,Ee.parseStringPromise)(a,{explicitArray:!1,tagNameProcessors:[Ee.processors.stripPrefix]})).CHECKLIST;if(!o)throw new Error("No <CHECKLIST> element found in the CKL file.");let p=o.ASSET||{},c={target_type:Q(p.ASSET_TYPE)||"Computing",host_name:Q(p.HOST_NAME),ip_address:Q(p.HOST_IP),mac_address:Q(p.HOST_MAC),fqdn:Q(p.HOST_FQDN),comments:Q(p.TARGET_COMMENT),role:Q(p.ROLE)||"None",is_web_database:Q(p.WEB_OR_DATABASE).toLowerCase()==="true",technology_area:Q(p.TECH_AREA),web_db_site:Q(p.WEB_DB_SITE),web_db_instance:Q(p.WEB_DB_INSTANCE),classification:null},l=Te(o.STIGS?.iSTIG),d=wt(),m=new Date().toISOString(),T=[];for(let k of l){let N=new Map;for(let u of Te(k.STIG_INFO?.SI_DATA))N.set(Q(u.SID_NAME),Q(u.SID_DATA));let I=N.get("uuid")||wt(),f=N.get("title")||"",i=N.get("stigid")||"",n=N.get("version")||"",y=N.get("releaseinfo")||"",S=Te(k.VULN),C=[];for(let u of S){let g=new Map,D=[],O=[];for(let $ of Te(u.STIG_DATA)){let Y=Q($.VULN_ATTRIBUTE),ot=Q($.ATTRIBUTE_DATA);Y==="CCI_REF"?D.push(ot):Y==="Legacy_ID"&&ot?O.push(ot):g.set(Y,ot)}let L=g.get("Vuln_Num")||"",R=g.get("Rule_ID")||"",M=wt(),P=Q(u.STATUS),F=yi[P]||"not_reviewed";C.push({uuid:M,stig_uuid:I,target_key:g.get("TargetKey")||null,stig_ref:g.get("STIGRef")||null,group_id:L,rule_id:R,rule_id_src:R,weight:g.get("Weight")||"10.0",classification:g.get("Class")||"Unclassified",severity:bi(g.get("Severity")),rule_version:g.get("Rule_Ver")||"",group_title:g.get("Group_Title")||"",rule_title:g.get("Rule_Title")||"",fix_text:g.get("Fix_Text")||"",false_positives:g.get("False_Positives")||"",false_negatives:g.get("False_Negatives")||"",discussion:g.get("Vuln_Discuss")||"",check_content:g.get("Check_Content")||"",documentable:g.get("Documentable")||"",mitigations:g.get("Mitigations")||"",potential_impacts:g.get("Potential_Impact")||"",third_party_tools:g.get("Third_Party_Tools")||"",mitigation_control:g.get("Mitigation_Control")||"",responsibility:g.get("Responsibility")||"",security_override_guidance:g.get("Security_Override_Guidance")||"",ia_controls:g.get("IA_Controls")||"",check_content_ref:{href:g.get("Check_Content_Ref")||"",name:""},legacy_ids:O,ccis:D,group_tree:[{id:L,title:g.get("Group_Title")||"",description:""}],createdAt:m,updatedAt:m,STIGUuid:I,status:F,overrides:{},comments:Q(u.COMMENTS),finding_details:Q(u.FINDING_DETAILS),srg_id:g.get("Group_Title")||""})}T.push({stig_name:f,display_name:f,stig_id:i,release_info:y,version:n,uuid:I,reference_identifier:i,size:C.length,rules:C})}let _={title:T[0]?.stig_name||"Imported CKL",id:d,stigs:T,active:!0,mode:1,has_path:!0,target_data:c,cklb_version:"1"},w=kt.basename(t,".ckl")+".cklb",h=kt.join(kt.dirname(t),w);Ie.writeFileSync(h,JSON.stringify(_,null,2));let v=At.Uri.file(h);await At.commands.executeCommand("vscode.openWith",v,"stigViewer.cklbEditor");let E=T.reduce((k,N)=>k+N.rules.length,0);At.window.showInformationMessage(`Imported ${E} rules from CKL \u2192 ${w}`)}var Ot=j(require("vscode")),jt=j(require("fs"));async function kn(e){let t=await Ot.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select OLD (completed) checklist to carry findings FROM"});if(!t?.[0])return;let a=e;if(!a){let _=await Ot.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select NEW checklist to carry findings INTO"});if(!_?.[0])return;a=_[0]}let b=JSON.parse(jt.readFileSync(t[0].fsPath,"utf-8")),o=JSON.parse(jt.readFileSync(a.fsPath,"utf-8")),p=new Map;for(let _ of b.stigs)for(let w of _.rules)p.set(w.rule_version,w);let c=0,l=0,d=0;for(let _ of o.stigs)for(let w of _.rules){d++;let h=p.get(w.rule_version);h?(w.status=h.status,w.finding_details=h.finding_details,w.comments=h.comments,w.updatedAt=new Date().toISOString(),c++):l++}let m=new Set;for(let _ of o.stigs)for(let w of _.rules)m.add(w.rule_version);let T=0;for(let _ of p.keys())m.has(_)||T++;jt.writeFileSync(a.fsPath,JSON.stringify(o,null,2)),await Ot.commands.executeCommand("vscode.openWith",a,"stigViewer.cklbEditor"),Ot.window.showInformationMessage(`Merge complete: ${c} carried forward, ${l} new rules, ${T} removed from old STIG`)}var pt=j(require("vscode")),On=j(require("fs")),Ce=class e{static async show(t){if(e._panel){e._panel.reveal(),await e._refresh();return}let a=pt.window.createWebviewPanel("stigViewer.dashboard","STIG Dashboard",pt.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0});e._panel=a,a.onDidDispose(()=>{e._panel=void 0}),a.webview.onDidReceiveMessage(async b=>{if(b.type==="openFile"){let o=pt.Uri.file(b.path);await pt.commands.executeCommand("vscode.openWith",o,"stigViewer.cklbEditor")}b.type==="refresh"&&await e._refresh()}),await e._refresh()}static async _refresh(){let t=e._panel;if(!t)return;let a=await pt.workspace.findFiles("**/*.cklb","**/node_modules/**"),b=[];for(let o of a)try{let p=On.readFileSync(o.fsPath,"utf-8"),c=JSON.parse(p);for(let l of c.stigs){let d={file:pt.workspace.asRelativePath(o),uri:o.fsPath,title:c.title,hostName:c.target_data.host_name||"\u2014",stigName:l.display_name||l.stig_name,total:l.rules.length,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let m of l.rules)d[m.status]++,d[m.severity]++;b.push(d)}}catch{}t.webview.html=wi(b)}};function wi(e){let t={total:0,open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let p of e)t.total+=p.total,t.open+=p.open,t.not_a_finding+=p.not_a_finding,t.not_reviewed+=p.not_reviewed,t.not_applicable+=p.not_applicable,t.high+=p.high,t.medium+=p.medium,t.low+=p.low;let a=p=>t.total?Math.round(p/t.total*100):0,b=a(t.not_a_finding+t.not_applicable),o=e.map(p=>{let c=p.total?Math.round((p.not_a_finding+p.not_applicable)/p.total*100):0;return`<tr class="row" data-path="${xe(p.uri)}">
      <td class="td-host">${xe(p.hostName)}</td>
      <td class="td-stig">${xe(p.stigName)}</td>
      <td class="td-n">${p.total}</td>
      <td class="td-n td-open">${p.open}</td>
      <td class="td-n td-naf">${p.not_a_finding}</td>
      <td class="td-n td-nr">${p.not_reviewed}</td>
      <td class="td-n td-na">${p.not_applicable}</td>
      <td class="td-n">${c}%</td>
      <td class="td-file">${xe(p.file)}</td>
    </tr>`}).join(`
`);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Dashboard</title>
<style>${vi}</style>
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
  <div class="sev-seg sev-high" style="width:${a(t.high)}%"><span>CAT I \xB7 ${t.high}</span></div>
  <div class="sev-seg sev-med"  style="width:${a(t.medium)}%"><span>CAT II \xB7 ${t.medium}</span></div>
  <div class="sev-seg sev-low"  style="width:${a(t.low)}%"><span>CAT III \xB7 ${t.low}</span></div>
</div>

<div class="completion">
  <div class="completion-label">Overall Completion: ${b}%</div>
  <div class="completion-track">
    <div class="completion-fill completion-naf" style="width:${a(t.not_a_finding)}%"></div>
    <div class="completion-fill completion-na"  style="width:${a(t.not_applicable)}%"></div>
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
</body></html>`}function xe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var vi=`
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
`;var Lt=j(require("vscode")),Ge=j(require("fs")),Ln={not_reviewed:"Not Reviewed",open:"Open",not_a_finding:"Not a Finding",not_applicable:"Not Applicable"},Pn={open:0,not_reviewed:1,not_applicable:2,not_a_finding:3};function _i(e){return e==="high"?"I":e==="medium"?"II":"III"}var De=class{static async show(t){let a=t;if(!a){let I=await Lt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select FIRST checklist (baseline / old)"});if(!I?.[0])return;a=I[0]}let b=await Lt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select SECOND checklist (current / new)"});if(!b?.[0])return;let o=JSON.parse(Ge.readFileSync(a.fsPath,"utf-8")),p=JSON.parse(Ge.readFileSync(b[0].fsPath,"utf-8")),c=new Map;for(let I of o.stigs)for(let f of I.rules)c.set(f.rule_version,f);let l=new Map;for(let I of p.stigs)for(let f of I.rules)l.set(f.rule_version,f);let d=[],m=new Set([...c.keys(),...l.keys()]);for(let I of m){let f=c.get(I),i=l.get(I);if(f&&i){let n="unchanged";f.status!==i.status&&(n=Pn[i.status]>Pn[f.status]?"improved":"regression"),d.push({ruleVersion:I,groupId:i.group_id,ruleTitle:i.rule_title,severity:i.severity,statusA:f.status,statusB:i.status,change:n})}else i&&!f?d.push({ruleVersion:I,groupId:i.group_id,ruleTitle:i.rule_title,severity:i.severity,statusA:"",statusB:i.status,change:"new"}):f&&!i&&d.push({ruleVersion:I,groupId:f.group_id,ruleTitle:f.rule_title,severity:f.severity,statusA:f.status,statusB:"",change:"removed"})}let T={regression:0,new:1,improved:2,removed:3,unchanged:4};d.sort((I,f)=>T[I.change]-T[f.change]);let _=d.filter(I=>I.change==="regression").length,w=d.filter(I=>I.change==="improved").length,h=d.filter(I=>I.change==="new").length,v=d.filter(I=>I.change==="removed").length,E=d.filter(I=>I.change==="unchanged").length,k=d.filter(I=>I.change!=="unchanged"),N=Lt.window.createWebviewPanel("stigViewer.diff","STIG Diff",Lt.ViewColumn.One,{enableScripts:!0});N.webview.html=Ti(a.fsPath,b[0].fsPath,k,d,{regressions:_,improvements:w,newRules:h,removed:v,unchanged:E})}};function Vt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ti(e,t,a,b,o){let p=e.split("/").pop()||e,c=t.split("/").pop()||t,l={regression:"\u2193 Regression",improved:"\u2191 Improved",new:"+ New",removed:"\u2212 Removed",unchanged:"= Unchanged"},d={regression:"chg-reg",improved:"chg-imp",new:"chg-new",removed:"chg-rem",unchanged:"chg-unc"},m=T=>T.map(_=>`<tr class="row ${d[_.change]}" data-change="${_.change}">
    <td><span class="pill sev-${_.severity}">CAT ${_i(_.severity)}</span></td>
    <td><code>${Vt(_.groupId)}</code></td>
    <td><code>${Vt(_.ruleVersion)}</code></td>
    <td class="td-title">${Vt(_.ruleTitle)}</td>
    <td>${_.statusA?`<span class="pill st-${_.statusA}">${Ln[_.statusA]||_.statusA}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td>${_.statusB?`<span class="pill st-${_.statusB}">${Ln[_.statusB]||_.statusB}</span>`:'<span class="muted">\u2014</span>'}</td>
    <td><span class="pill ${d[_.change]}">${l[_.change]}</span></td>
  </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';">
<title>STIG Diff</title>
<style>${Ii}</style>
</head><body>
<header class="hdr">
  <h1>Checklist Diff</h1>
  <div class="diff-files">
    <span class="chip">A: ${Vt(p)}</span>
    <span class="arrow">\u2192</span>
    <span class="chip">B: ${Vt(c)}</span>
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
      ${m(a)}
    </tbody>
  </table>
</div>

<script>
const CHANGED = ${JSON.stringify(a)};
const ALL     = ${JSON.stringify(b)};

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
</body></html>`}var Ii=`
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
`;var Pt=j(require("vscode")),Xt=j(require("fs")),Ne=j(ye());function Mn(e){return e==null?[]:Array.isArray(e)?e:[e]}function Se(e){return e==null?"":typeof e=="string"?e:Array.isArray(e)?Se(e[0]):typeof e=="object"&&"_"in e?String(e._):String(e)}var Ei={pass:"not_a_finding",fail:"open",error:"open",unknown:"not_reviewed",notapplicable:"not_applicable",notchecked:"not_reviewed",informational:"not_reviewed",fixed:"not_a_finding"};function xi(e){let t=e.match(/(SV-\d+r\d+_rule)/);return t?t[1]:e}async function Rn(e){let t=e;if(!t){let _=await Pt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to update with SCAP results"});if(!_?.[0])return;t=_[0]}let a=await Pt.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Results":["xml"]},title:"Select SCAP XCCDF results file"});if(!a?.[0])return;let b=JSON.parse(Xt.readFileSync(t.fsPath,"utf-8")),o=Xt.readFileSync(a[0].fsPath,"utf-8"),p=await(0,Ne.parseStringPromise)(o,{explicitArray:!1,tagNameProcessors:[Ne.processors.stripPrefix]}),c=null;if(p.TestResult?c=p.TestResult:p.Benchmark?.TestResult&&(c=p.Benchmark.TestResult,Array.isArray(c)&&(c=c[c.length-1])),!c)throw new Error("No <TestResult> element found in the XCCDF results file.");let l=new Map;for(let _ of Mn(c["rule-result"])){let w=_?.$?.idref||"",h=xi(w),v=Se(_.result).toLowerCase(),E=Ei[v]||"not_reviewed",k="",N=Mn(_.check)[0];N&&(k=Se(N["check-content"])),!k&&_.message&&(k=Se(_.message)),l.set(h,{status:E,detail:k})}let d=0,m=0,T=new Date().toISOString();for(let _ of b.stigs)for(let w of _.rules){let h=l.get(w.rule_id);h?(w.status=h.status,h.detail&&(w.finding_details=h.detail),w.updatedAt=T,d++):m++}Xt.writeFileSync(t.fsPath,JSON.stringify(b,null,2)),await Pt.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor"),Pt.window.showInformationMessage(`SCAP import: ${d} rules updated, ${m} unmatched`)}var ft=j(require("vscode")),gt=j(require("fs")),Dt=j(require("path"));function Ci(e){let t=Dt.join(__dirname,"..","scan-patterns.json"),a=e||t;if(!gt.existsSync(a))throw new Error(`Scan patterns file not found: ${a}`);return JSON.parse(gt.readFileSync(a,"utf-8"))}function Di(e,t){let a=[t.rule_title,t.discussion,t.check_content,t.group_title].join(" ").toLowerCase();return e.ruleKeywords.some(b=>a.includes(b.toLowerCase()))}function Fn(e){let t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*\*/g,"__DOUBLESTAR__").replace(/\*/g,"[^/]*").replace(/__DOUBLESTAR__/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`)}function ze(e,t){let a=e.replace(/\\/g,"/");return t.some(b=>{if(b.includes("{")){let o=b.match(/^(.*)\{([^}]+)\}(.*)$/);if(o){let[,p,c,l]=o;return c.split(",").some(d=>{let m=p+d.trim()+l;return Fn(m).test(a)})}}return Fn(b).test(a)})}function Si(e,t){let a=[];function b(o){let p;try{p=gt.readdirSync(o,{withFileTypes:!0})}catch{return}for(let c of p){let l=Dt.join(o,c.name),d=Dt.relative(e,l);ze(d,t)||(c.isDirectory()?ze(d+"/",t)||b(l):c.isFile()&&a.push(l))}}return b(e),a}function Ni(e,t,a){let b;try{let c=gt.readFileSync(e);if(c.includes(0))return[];b=c.toString("utf-8")}catch{return[]}let o=b.split(`
`),p=[];for(let c of t){let l=a?"g":"gi",d;try{d=new RegExp(c,l)}catch{continue}for(let m=0;m<o.length;m++)d.test(o[m])&&p.push({line:m+1,content:o[m].trim().substring(0,200)}),d.lastIndex=0}return p}async function Bn(e){let t=e;if(!t){let d=await ft.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with scan results"});if(!d?.[0])return;t=d[0]}let a=await ft.window.showOpenDialog({canSelectFolders:!0,canSelectFiles:!1,canSelectMany:!1,title:"Select repository folder to scan"});if(!a?.[0])return;let b=await ft.window.showQuickPick(["Use default scan patterns","Select custom scan-patterns.json"],{title:"Scan pattern configuration"});if(!b)return;let o;if(b.includes("custom")){let d=await ft.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select scan-patterns.json"});if(!d?.[0])return;o=d[0].fsPath}let p=Ci(o),c=JSON.parse(gt.readFileSync(t.fsPath,"utf-8")),l=a[0].fsPath;await ft.window.withProgress({location:ft.ProgressLocation.Notification,title:"STIG Repo Scan",cancellable:!0},async(d,m)=>{d.report({message:"Discovering files..."});let T=Si(l,p.excludeGlobs);if(m.isCancellationRequested)return;let _=[],w=new Date().toISOString(),h=0,v=0,E=0,k=0,N=c.stigs.reduce((f,i)=>f+i.rules.length,0);for(let f of c.stigs)for(let i of f.rules){if(m.isCancellationRequested)return;let n=p.scanPatterns.filter(L=>Di(L,i));if(n.length===0)continue;h++,d.report({message:`Scanning ${i.group_id} (${h}/${N})`,increment:1/N*100});let y=[],S=[];for(let L of n){let R=T.filter(P=>{let F=Dt.relative(l,P);return ze(F,L.fileGlobs)}),M=!1;for(let P of R){if(m.isCancellationRequested)return;let F=Ni(P,L.patterns,L.caseSensitive);if(F.length>0){M=!0;let $=Dt.relative(l,P);for(let Y of F)y.push({file:$,line:Y.line,content:Y.content,patternId:L.id})}}M&&S.push(L.name)}let C=n.some(L=>L.matchMeansOpen),u=n.filter(L=>L.matchMeansOpen),g=y.filter(L=>u.some(R=>R.id===L.patternId)),D,O;if(g.length>0){D="open",E++;let L=n.find(R=>R.findingDetailOverride&&y.some(M=>M.patternId===R.id));if(L?.findingDetailOverride){let R=y.filter(M=>M.patternId===L.id).slice(0,20).map(M=>`  ${M.file}:${M.line} \u2014 ${M.content}`).join(`
`);O=L.findingDetailOverride.replace("{count}",String(y.filter(M=>M.patternId===L.id).length)).replace("{matches}",R).replace("{file}",y[0]?.file||"")}else{let R=g.slice(0,20).map(P=>`  ${P.file}:${P.line} \u2014 ${P.content}`).join(`
`),M=g.length>20?`
  ... and ${g.length-20} more`:"";O=`[AUTO-SCAN] Found ${g.length} potential issue(s) matching: ${S.join(", ")}

${R}${M}`}}else if(C)D="not_a_finding",k++,O=`[AUTO-SCAN] Scanned ${T.length} files for: ${n.map(L=>L.name).join(", ")}. No issues detected.`;else{let L=y.slice(0,10);if(L.length>0){D="not_reviewed";let R=n.find(M=>M.findingDetailOverride);R?.findingDetailOverride?O=R.findingDetailOverride.replace("{count}",String(y.length)).replace("{matches}",L.map(M=>M.file).join(", ")).replace("{file}",L[0]?.file||""):O=`[AUTO-SCAN] Found relevant files: ${L.map(M=>M.file).join(", ")}. Manual review required.`}else continue}i.status=D,i.finding_details=O,i.updatedAt=w,v++}gt.writeFileSync(t.fsPath,JSON.stringify(c,null,2)),await ft.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor");let I=N-v;ft.window.showInformationMessage(`Scan complete: ${v} rules evaluated (${E} open, ${k} not a finding, ${I} unmatched \u2014 review manually)`)})}var Mt=j(require("vscode")),Gt=j(require("fs"));var We=new Map([[89,{cweId:89,name:"SQL Injection",keywords:["injection","SQL","query","parameterized","prepared statement"],stigCategory:"Input Validation"}],[78,{cweId:78,name:"OS Command Injection",keywords:["injection","command","OS command","execute","system command"],stigCategory:"Input Validation"}],[77,{cweId:77,name:"Command Injection",keywords:["injection","command","execute"],stigCategory:"Input Validation"}],[94,{cweId:94,name:"Code Injection",keywords:["injection","code injection","eval","execute"],stigCategory:"Input Validation"}],[79,{cweId:79,name:"Cross-Site Scripting (XSS)",keywords:["cross-site scripting","XSS","script injection","output encoding","sanitize"],stigCategory:"Input Validation"}],[90,{cweId:90,name:"LDAP Injection",keywords:["injection","LDAP","directory"],stigCategory:"Input Validation"}],[91,{cweId:91,name:"XML Injection",keywords:["injection","XML","input validation"],stigCategory:"Input Validation"}],[917,{cweId:917,name:"Expression Language Injection",keywords:["injection","expression","template"],stigCategory:"Input Validation"}],[116,{cweId:116,name:"Improper Output Encoding",keywords:["output encoding","encoding","sanitize","neutralize"],stigCategory:"Input Validation"}],[20,{cweId:20,name:"Improper Input Validation",keywords:["input validation","validate","sanitize","user input","untrusted"],stigCategory:"Input Validation"}],[287,{cweId:287,name:"Improper Authentication",keywords:["authenticat","identity","login","credential"],stigCategory:"Authentication"}],[306,{cweId:306,name:"Missing Authentication",keywords:["authenticat","access control","login","identity"],stigCategory:"Authentication"}],[798,{cweId:798,name:"Hardcoded Credentials",keywords:["credential","password","embedded","hardcoded","hard-coded"],stigCategory:"Authentication"}],[259,{cweId:259,name:"Hardcoded Password",keywords:["password","embedded","hardcoded","hard-coded","credential"],stigCategory:"Authentication"}],[522,{cweId:522,name:"Insufficiently Protected Credentials",keywords:["credential","password","protect","cleartext","plain text"],stigCategory:"Authentication"}],[862,{cweId:862,name:"Missing Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[863,{cweId:863,name:"Incorrect Authorization",keywords:["authoriz","access control","permission","privilege"],stigCategory:"Access Control"}],[284,{cweId:284,name:"Improper Access Control",keywords:["access control","permission","privilege","authoriz"],stigCategory:"Access Control"}],[22,{cweId:22,name:"Path Traversal",keywords:["path traversal","directory traversal","file access","canonicalize"],stigCategory:"Access Control"}],[434,{cweId:434,name:"Unrestricted File Upload",keywords:["file upload","unrestricted","file type","content type"],stigCategory:"Access Control"}],[352,{cweId:352,name:"Cross-Site Request Forgery",keywords:["CSRF","cross-site request","token","forgery"],stigCategory:"Session Management"}],[327,{cweId:327,name:"Broken Crypto Algorithm",keywords:["cryptograph","encrypt","cipher","algorithm","FIPS","approved"],stigCategory:"Cryptography"}],[328,{cweId:328,name:"Weak Hash",keywords:["hash","cryptograph","MD5","SHA-1","FIPS"],stigCategory:"Cryptography"}],[326,{cweId:326,name:"Inadequate Encryption Strength",keywords:["encrypt","key length","strength","cryptograph","FIPS"],stigCategory:"Cryptography"}],[311,{cweId:311,name:"Missing Encryption of Sensitive Data",keywords:["encrypt","sensitive","cleartext","plain text","protect","transit"],stigCategory:"Cryptography"}],[319,{cweId:319,name:"Cleartext Transmission",keywords:["cleartext","plain text","encrypt","TLS","HTTPS","transit","transport"],stigCategory:"Cryptography"}],[209,{cweId:209,name:"Error Info Leak",keywords:["error","stack trace","diagnostic","verbose","information exposure"],stigCategory:"Error Handling"}],[215,{cweId:215,name:"Debug Info Leak",keywords:["debug","diagnostic","information exposure","verbose"],stigCategory:"Error Handling"}],[532,{cweId:532,name:"Log Info Leak",keywords:["log","sensitive","information exposure","audit"],stigCategory:"Logging"}],[614,{cweId:614,name:"Missing Secure Cookie Flag",keywords:["cookie","secure flag","session","httpOnly"],stigCategory:"Session Management"}],[1004,{cweId:1004,name:"Missing HttpOnly Cookie Flag",keywords:["cookie","httpOnly","session","script access"],stigCategory:"Session Management"}],[120,{cweId:120,name:"Buffer Overflow",keywords:["buffer overflow","buffer","memory","bounds"],stigCategory:"Buffer Handling"}],[119,{cweId:119,name:"Buffer Boundary Violation",keywords:["buffer","boundary","memory","bounds check"],stigCategory:"Buffer Handling"}],[787,{cweId:787,name:"Out-of-bounds Write",keywords:["buffer","out-of-bounds","memory","write"],stigCategory:"Buffer Handling"}],[125,{cweId:125,name:"Out-of-bounds Read",keywords:["buffer","out-of-bounds","memory","read"],stigCategory:"Buffer Handling"}],[190,{cweId:190,name:"Integer Overflow",keywords:["integer overflow","overflow","arithmetic"],stigCategory:"Buffer Handling"}],[362,{cweId:362,name:"Race Condition",keywords:["race condition","concurren","synchroniz","TOCTOU","time-of-check"],stigCategory:"Concurrency"}],[367,{cweId:367,name:"TOCTOU Race Condition",keywords:["race condition","TOCTOU","time-of-check","time-of-use"],stigCategory:"Concurrency"}],[755,{cweId:755,name:"Improper Exception Handling",keywords:["error handling","exception","catch","handle error"],stigCategory:"Error Handling"}],[754,{cweId:754,name:"Improper Check for Unusual Conditions",keywords:["error handling","exception","unusual condition","error check"],stigCategory:"Error Handling"}],[390,{cweId:390,name:"Detection of Error without Action",keywords:["error handling","exception","ignore","catch"],stigCategory:"Error Handling"}],[502,{cweId:502,name:"Insecure Deserialization",keywords:["deserializ","serializ","untrusted data","marshal","pickle"],stigCategory:"Input Validation"}],[1104,{cweId:1104,name:"Unmaintained Third-Party Component",keywords:["third-party","component","dependency","library","vulnerability","patch"],stigCategory:"Dependencies"}],[937,{cweId:937,name:"Known Vulnerable Component",keywords:["known vulnerabilit","component","dependency","library","patch","CVE"],stigCategory:"Dependencies"}],[778,{cweId:778,name:"Insufficient Logging",keywords:["log","audit","monitor","record","event"],stigCategory:"Logging"}],[117,{cweId:117,name:"Log Injection",keywords:["log","injection","audit","forging"],stigCategory:"Logging"}]]);function Ai(e,t){let a=[];if(e.taxa)for(let o of e.taxa){let p=He(o.id);p&&a.push(p)}if(t?.relationships){for(let o of t.relationships)if(o.target.toolComponent?.name?.toUpperCase()==="CWE"||o.target.id.startsWith("CWE-")){let p=He(o.target.id);p&&a.push(p)}}if(t?.properties?.tags)for(let o of t.properties.tags){let p=o.match(/cwe[/-](\d+)/i);p&&a.push(parseInt(p[1],10))}let b=He(e.ruleId);return b&&a.push(b),[...new Set(a)]}function He(e){let t=e.match(/(?:CWE-?)(\d+)/i);return t?parseInt(t[1],10):null}async function $n(e){let t=e;if(!t){let h=await Mt.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with SARIF findings"});if(!h?.[0])return;t=h[0]}let a=await Mt.window.showOpenDialog({canSelectMany:!0,filters:{SARIF:["sarif","json"]},title:"Select SARIF results file(s)"});if(!a?.length)return;let b=JSON.parse(Gt.readFileSync(t.fsPath,"utf-8")),o=new Date().toISOString(),p=[];for(let h of b.stigs)p.push(...h.rules);let c=new Map,l=0,d=0,m=new Set,T=[];for(let h of a){let v=JSON.parse(Gt.readFileSync(h.fsPath,"utf-8"));for(let E of v.runs){let k=E.tool.driver.name;T.includes(k)||T.push(k);let N=new Map;if(E.tool.driver.rules)for(let I of E.tool.driver.rules)N.set(I.id,I);for(let I of E.results){l++;let f=N.get(I.ruleId),i=Ai(I,f);if(i.length===0)continue;let n=I.locations?.[0]?.physicalLocation,y=n?.artifactLocation?.uri||"",S=n?.region?.startLine||0,C=!1;for(let u of i){let g=We.get(u);if(!g){m.add(u);continue}for(let D of p){let O=`${D.rule_title} ${D.discussion} ${D.check_content}`.toLowerCase();g.keywords.some(L=>O.includes(L.toLowerCase()))&&(c.has(D.uuid)||c.set(D.uuid,[]),c.get(D.uuid).push({tool:k,cwe:u,file:y.replace(/^file:\/\//,""),line:S,message:I.message.text.substring(0,300)}),C=!0)}}C&&d++}}}let _=0;for(let[h,v]of c){let E=p.find(I=>I.uuid===h);if(!E)continue;E.status="open",_++;let k=new Map;for(let I of v){let f=`CWE-${I.cwe}`;k.has(f)||k.set(f,[]),k.get(f).push(I)}let N=[`[SARIF IMPORT] ${v.length} finding(s) from: ${T.join(", ")}
`];for(let[I,f]of k){let i=We.get(parseInt(I.replace("CWE-","")))?.name||I;N.push(`${I} \u2014 ${i}:`);let n=f.slice(0,10);for(let y of n)N.push(`  ${y.file}:${y.line} \u2014 ${y.message}`);f.length>10&&N.push(`  ... and ${f.length-10} more`)}E.finding_details=N.join(`
`),E.updatedAt=o}Gt.writeFileSync(t.fsPath,JSON.stringify(b,null,2)),await Mt.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor");let w=`SARIF import: ${l} findings processed, ${d} mapped to ${_} rules`;m.size>0&&(w+=` (${m.size} unmapped CWEs: ${[...m].slice(0,5).map(h=>`CWE-${h}`).join(", ")}${m.size>5?"...":""})`),Mt.window.showInformationMessage(w)}var It=j(require("vscode")),zt=j(require("fs"));function ki(e){let t=[];if(!e.vulnerabilities)return t;for(let[a,b]of Object.entries(e.vulnerabilities))for(let o of b.via)typeof o=="object"&&t.push({name:a,severity:o.severity,title:o.title,url:o.url,cwe:o.cwe?.[0],fixAvailable:b.fixAvailable?"Yes":"No"});return t}function Un(e){let t=[],a=Array.isArray(e)?e:e.dependencies||[];for(let b of a)if(b.vulns?.length)for(let o of b.vulns)t.push({name:b.name,version:b.version,id:o.id,description:o.description,fixAvailable:o.fix_versions?.length?o.fix_versions.join(", "):"No"});return t}function Oi(e){if(e.vulnerabilities&&typeof e.vulnerabilities=="object")return{entries:ki(e),source:"npm audit"};if(Array.isArray(e)&&e[0]?.vulns!==void 0)return{entries:Un(e),source:"pip-audit"};if(e.dependencies&&Array.isArray(e.dependencies))return{entries:Un(e),source:"pip-audit"};if(Array.isArray(e))return{entries:e.map(t=>({name:t.name||t.package||t.module||"",version:t.version||t.installed_version||"",severity:t.severity||t.level||"",title:t.title||t.advisory||t.description||"",id:t.id||t.cve||t.advisory_id||"",url:t.url||t.reference||""})),source:"dependency audit"};throw new Error("Unrecognized audit format. Expected npm audit, pip-audit, or a JSON array of vulnerabilities.")}async function qn(e){let t=e;if(!t){let T=await It.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to populate with audit findings"});if(!T?.[0])return;t=T[0]}let a=await It.window.showOpenDialog({canSelectMany:!1,filters:{JSON:["json"]},title:"Select dependency audit JSON (npm audit, pip-audit, etc.)"});if(!a?.[0])return;let b=JSON.parse(zt.readFileSync(t.fsPath,"utf-8")),o=JSON.parse(zt.readFileSync(a[0].fsPath,"utf-8")),{entries:p,source:c}=Oi(o);if(p.length===0){It.window.showInformationMessage(`No vulnerabilities found in ${c} output.`);return}let l=["third-party","component","dependency","library","vulnerability","known vulnerabilit","patch","update","unsupported","software composition","package","module","open source"],d=new Date().toISOString(),m=0;for(let T of b.stigs)for(let _ of T.rules){let w=`${_.rule_title} ${_.discussion} ${_.check_content}`.toLowerCase();if(!l.some(I=>w.includes(I)))continue;m++,_.status="open",_.updatedAt=d;let v={};for(let I of p){let f=(I.severity||"unknown").toLowerCase();v[f]=(v[f]||0)+1}let E=Object.entries(v).map(([I,f])=>`${f} ${I}`).join(", "),k=[`[AUDIT IMPORT] ${p.length} vulnerable dependencies found via ${c}`,`Severity breakdown: ${E}
`],N=p.slice(0,25);for(let I of N){let f=[I.name];I.version&&f.push(`v${I.version}`),I.severity&&f.push(`[${I.severity}]`),I.title&&f.push(`\u2014 ${I.title}`),I.id&&f.push(`(${I.id})`),I.fixAvailable&&I.fixAvailable!=="No"&&f.push(`fix: ${I.fixAvailable}`),k.push(`  ${f.join(" ")}`)}p.length>25&&k.push(`  ... and ${p.length-25} more`),_.finding_details=k.join(`
`)}zt.writeFileSync(t.fsPath,JSON.stringify(b,null,2)),await It.commands.executeCommand("vscode.openWith",t,"stigViewer.cklbEditor"),m>0?It.window.showInformationMessage(`Imported ${p.length} vulnerabilities from ${c} \u2192 ${m} STIG rule(s) marked open`):It.window.showWarningMessage(`Imported ${p.length} vulnerabilities but no dependency-related STIG rules found in the checklist.`)}var Et=j(require("vscode")),Wt=j(require("fs")),xt=j(require("path")),jn=j(require("zlib"));var Ke=class{constructor(){this.files=[]}addFile(t,a){let b=typeof a=="string"?Buffer.from(a,"utf-8"):a,o=jn.deflateRawSync(b),p=this.crc32(b);this.files.push({name:t,data:b,crc:p,compressedData:o})}build(){let t=[],a=[],b=0;for(let l of this.files){let d=Buffer.from(l.name,"utf-8"),m=Buffer.alloc(30+d.length);m.writeUInt32LE(67324752,0),m.writeUInt16LE(20,4),m.writeUInt16LE(0,6),m.writeUInt16LE(8,8),m.writeUInt16LE(0,10),m.writeUInt16LE(0,12),m.writeUInt32LE(l.crc,14),m.writeUInt32LE(l.compressedData.length,18),m.writeUInt32LE(l.data.length,22),m.writeUInt16LE(d.length,26),m.writeUInt16LE(0,28),d.copy(m,30);let T=Buffer.alloc(46+d.length);T.writeUInt32LE(33639248,0),T.writeUInt16LE(20,4),T.writeUInt16LE(20,6),T.writeUInt16LE(0,8),T.writeUInt16LE(8,10),T.writeUInt16LE(0,12),T.writeUInt16LE(0,14),T.writeUInt32LE(l.crc,16),T.writeUInt32LE(l.compressedData.length,20),T.writeUInt32LE(l.data.length,24),T.writeUInt16LE(d.length,28),T.writeUInt16LE(0,30),T.writeUInt16LE(0,32),T.writeUInt16LE(0,34),T.writeUInt16LE(0,36),T.writeUInt32LE(0,38),T.writeUInt32LE(b,42),d.copy(T,46),t.push(m,l.compressedData),a.push(T),b+=m.length+l.compressedData.length}let o=b,p=0;for(let l of a)t.push(l),p+=l.length;let c=Buffer.alloc(22);return c.writeUInt32LE(101010256,0),c.writeUInt16LE(0,4),c.writeUInt16LE(0,6),c.writeUInt16LE(this.files.length,8),c.writeUInt16LE(this.files.length,10),c.writeUInt32LE(p,12),c.writeUInt32LE(o,16),c.writeUInt16LE(0,20),t.push(c),Buffer.concat(t)}crc32(t){let a=4294967295;for(let b=0;b<t.length;b++){a^=t[b];for(let o=0;o<8;o++)a=a>>>1^(a&1?3988292384:0)}return(a^4294967295)>>>0}};function Li(e){let t=[];t.push("STIG ASSESSMENT EVIDENCE PACKAGE"),t.push(`================================
`),t.push(`Generated: ${new Date().toISOString()}`),t.push(`Title: ${e.title}`),t.push(`Host: ${e.target_data.host_name||"N/A"}`),t.push(`IP: ${e.target_data.ip_address||"N/A"}`),t.push(`FQDN: ${e.target_data.fqdn||"N/A"}
`);for(let a of e.stigs){let b={open:0,not_a_finding:0,not_reviewed:0,not_applicable:0,high:0,medium:0,low:0};for(let l of a.rules)b[l.status]++,b[l.severity]++;let o=a.rules.length,p=o?Math.round((b.not_a_finding+b.not_applicable)/o*100):0;t.push(`STIG: ${a.stig_name}`),t.push(`  ${a.release_info} | Version ${a.version}`),t.push(`  Total Rules: ${o}`),t.push(`  Open: ${b.open} | Not a Finding: ${b.not_a_finding} | Not Reviewed: ${b.not_reviewed} | Not Applicable: ${b.not_applicable}`),t.push(`  CAT I: ${b.high} | CAT II: ${b.medium} | CAT III: ${b.low}`),t.push(`  Completion: ${p}%
`);let c=a.rules.filter(l=>l.status==="open");if(c.length>0){t.push("  OPEN FINDINGS:");for(let l of c){let d=l.severity==="high"?"I":l.severity==="medium"?"II":"III";if(t.push(`    [CAT ${d}] ${l.group_id} \u2014 ${l.rule_title}`),l.finding_details){let m=l.finding_details.substring(0,200).replace(/\n/g,`
      `);t.push(`      ${m}`)}}t.push("")}}return t.push(`
PACKAGE CONTENTS:`),t.push("  checklist.cklb    \u2014 Full checklist in JSON format"),t.push("  checklist.ckl     \u2014 Checklist in DISA CKL XML format"),t.push("  summary.csv       \u2014 All rules with status and findings"),t.push("  poam.csv          \u2014 Plan of Action & Milestones (open findings only)"),t.push("  report.txt        \u2014 This summary report"),t.join(`
`)}async function Vn(e){let t=e;if(!t){let T=await Et.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Select checklist to package as evidence"});if(!T?.[0])return;t=T[0]}let a=JSON.parse(Wt.readFileSync(t.fsPath,"utf-8")),b=xt.basename(t.fsPath,".cklb"),o=new Ke;if(o.addFile("checklist.cklb",JSON.stringify(a,null,2)),o.addFile("checklist.ckl",Qt(a)),o.addFile("summary.csv",Jt(a)),o.addFile("poam.csv",Zt(a)),o.addFile("report.txt",Li(a)),(await Et.window.showQuickPick(["Save package now","Attach additional evidence files first"],{title:"Evidence package"}))?.includes("Attach")){let T=await Et.window.showOpenDialog({canSelectMany:!0,title:"Select additional evidence files (screenshots, scan reports, etc.)"});if(T)for(let _ of T){let w="evidence/"+xt.basename(_.fsPath);o.addFile(w,Wt.readFileSync(_.fsPath))}}let c=`${b}_evidence_${new Date().toISOString().slice(0,10)}.zip`,l=await Et.window.showSaveDialog({defaultUri:Et.Uri.file(xt.join(xt.dirname(t.fsPath),c)),filters:{"ZIP Archive":["zip"]},title:"Save Evidence Package"});if(!l)return;Wt.writeFileSync(l.fsPath,o.build());let d=a.stigs.reduce((T,_)=>T+_.rules.length,0),m=a.stigs.reduce((T,_)=>T+_.rules.filter(w=>w.status==="open").length,0);Et.window.showInformationMessage(`Evidence package saved: ${d} rules, ${m} open findings \u2192 ${xt.basename(l.fsPath)}`)}function Pi(e){e.subscriptions.push(ut.register(e)),e.subscriptions.push(X.commands.registerCommand("stigViewer.openFile",async()=>{let t=await X.window.showOpenDialog({canSelectMany:!1,filters:{"STIG Checklist":["cklb"]},title:"Open STIG Checklist (.cklb)"});t?.[0]&&await X.commands.executeCommand("vscode.openWith",t[0],"stigViewer.cklbEditor")})),e.subscriptions.push(X.commands.registerCommand("stigViewer.importXccdf",async t=>{if(!t){let a=await X.window.showOpenDialog({canSelectMany:!1,filters:{"XCCDF Benchmark":["xml"]},title:"Import XCCDF Benchmark"});if(!a?.[0])return;t=a[0]}try{await Nn(t)}catch(a){X.window.showErrorMessage(`XCCDF import failed: ${a}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.importCkl",async t=>{if(!t){let a=await X.window.showOpenDialog({canSelectMany:!1,filters:{"CKL Checklist":["ckl"]},title:"Import CKL Checklist"});if(!a?.[0])return;t=a[0]}try{await An(t)}catch(a){X.window.showErrorMessage(`CKL import failed: ${a}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.importScapResults",async()=>{try{await Rn(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`SCAP import failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.mergeFindings",async()=>{try{await kn(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`Merge failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.dashboard",async()=>{try{await Ce.show(e)}catch(t){X.window.showErrorMessage(`Dashboard failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.diffChecklists",async()=>{try{await De.show(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`Diff failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.scanRepo",async()=>{try{await Bn(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`Repo scan failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.importSarif",async()=>{try{await $n(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`SARIF import failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.importAudit",async()=>{try{await qn(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`Dependency audit import failed: ${t}`)}})),e.subscriptions.push(X.commands.registerCommand("stigViewer.exportEvidence",async()=>{try{await Vn(ut.activeDocumentUri)}catch(t){X.window.showErrorMessage(`Evidence package failed: ${t}`)}}))}function Mi(){}0&&(module.exports={activate,deactivate});
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
