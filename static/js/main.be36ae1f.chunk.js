(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,n){e.exports=n(237)},237:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),o=n(7),s=n(6),l=n(107),u=n(29),m=n(9),p=n(10),d=n(12),h=n(11),E=n(13),f=n(21),b=n.n(f),g=n(24),v=n(108),y=n.n(v).a.create({baseURL:"https://api-server-comps.herokuapp.com"}),O=n(17),S=Object(O.a)(),j=function(e){return function(t){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(y.get("/streams/".concat(e)));case 2:n=a.sent,t({type:"FETCH_STREAM",payload:n.data});case 4:case"end":return a.stop()}}))}},I=n(239),C=n(238),N=(n(38),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t=e.input,a=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(I.a,{name:"title",component:this.renderInput,label:"Insira um T\xedtulo"}),r.a.createElement(I.a,{name:"description1",component:this.renderInput,type:"text",label:"Descri\xe7\xe3o 1"}),r.a.createElement(I.a,{name:"description2",component:this.renderInput,type:"text",label:"Descri\xe7\xe3o 2"}),r.a.createElement(I.a,{name:"description3",component:this.renderInput,type:"text",label:"Descri\xe7\xe3o 3"}),r.a.createElement(I.a,{name:"description4",component:this.renderInput,type:"text",label:"Descri\xe7\xe3o 4"}),r.a.createElement(I.a,{name:"description5",component:this.renderInput,type:"text",label:"Descri\xe7\xe3o 5"}),r.a.createElement(I.a,{name:"img",component:this.renderInput,label:"Insira a url da imagem OCC"}),r.a.createElement("button",{className:"ui button primary"},"Enviar"))}}]),t}(r.a.Component)),k=Object(C.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="Voc\xea deve inserir um t\xedtulo"),e.description1||(t.description1="Voc\xea deve inserir a descri\xe7\xe3o 1"),e.description2||(t.description2="Voc\xea deve inserir a descri\xe7\xe3o 2"),e.img||(t.img="Voc\xea deve inserir uma imagem v\xe1lida do OCC"),t}})(N),w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Criar um Componente"),r.a.createElement(k,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),A=Object(o.b)(null,{createStream:function(e){return function(t,n){var a,r;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=n().auth.userId,c.next=3,b.a.awrap(y.post("/streams",Object(g.a)({},e,{userId:a})));case 3:r=c.sent,t({type:"CREATE_STREAM",payload:r.data}),S.push("/react-gh-pages");case 6:case"end":return c.stop()}}))}}})(w),T=n(20),x=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},D=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui button negative"},"Deletar"),r.a.createElement(T.a,{to:"/",className:"ui button"},"Cancel "))}},{key:"renderContent",value:function(){return this.props.stream?"Voc\xea est\xe1 certo de que quer deletar o componente com o t\xedtulo: ".concat(this.props.stream.title):"Voc\xea est\xe1 certo de que quer deletar o componente:?"}},{key:"render",value:function(){return r.a.createElement(x,{title:"Deletar Componente",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return S.push("/")}})}}]),t}(r.a.Component),_=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j,deleteStream:function(e){return function(t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(y.delete("/streams/".concat(e)));case 2:t({type:"DELETE_STREAM",payload:e}),S.push("/react-gh-pages");case 4:case"end":return n.stop()}}))}}})(D),M=n(44),R=n.n(M),L=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Editar Componente"),r.a.createElement(k,{initialValues:R.a.pick(this.props.stream,"title","img","description1","description2","description3","description4","description5"),onSubmit:this.onSubmit})):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component),q=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j,editStream:function(e,t){return function(n){var a;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.awrap(y.patch("/streams/".concat(e),t));case 2:a=r.sent,n({type:"EDIT_STREAM",payload:a.data}),S.push("/react-gh-pages");case 5:case"end":return r.stop()}}))}}})(L),V=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(T.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Editar"),r.a.createElement(T.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Deletar"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned"}),r.a.createElement("div",{className:"content"},r.a.createElement(T.a,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("img",{src:t.img}),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,t.description1),r.a.createElement("p",null,t.description2),r.a.createElement("p",null,t.description3),r.a.createElement("p",null,t.description4),r.a.createElement("p",null,t.description5))))}))}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(T.a,{to:"/streams/new",className:"ui button primary"},"Criar um Componente"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Midia Kit Livelo - Widgets"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.a.Component),U=Object(o.b)((function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}}),{fetchStreams:function(e){return function(e){var t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(y.get("/streams"));case 2:t=n.sent,e({type:"FETCH_STREAMS",payload:t.data});case 4:case"end":return n.stop()}}))}}})(V),F=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){if(!this.props.stream)return r.a.createElement("div",null,"Loading...");var e=this.props.stream,t=e.title,n=e.description1,a=e.description2,c=e.description3,i=e.description4,o=e.description5,s=e.img;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("img",{src:s}),r.a.createElement("p",null,n),r.a.createElement("p",null,a),r.a.createElement("p",null,c),r.a.createElement("p",null,i),r.a.createElement("p",null,o))}}]),t}(r.a.Component),G=Object(o.b)((function(e,t){return{stream:e.streams[t.match.params.id]}}),{fetchStream:j})(F),H=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"616158991092-dqk6lui6ul7t1a85sqksv8ntg4t36aqg.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sair"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Logar com Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),P=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(H),B=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(T.a,{to:"/react-gh-pages",className:"item"},"Home"),r.a.createElement("div",{className:"right menu"},r.a.createElement(T.a,{to:"/react-gh-pages",className:"item"},"Todos os Componentes"),r.a.createElement(P,null)))},J=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.b,{history:S},r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/react-gh-pages",exact:!0,component:U}),r.a.createElement(u.a,{path:"/streams/new",exact:!0,component:A}),r.a.createElement(u.a,{path:"/streams/edit/:id",exact:!0,component:q}),r.a.createElement(u.a,{path:"/streams/delete/:id",exact:!0,component:_}),r.a.createElement(u.a,{path:"/streams/:id",exact:!0,component:G})))))},K=n(240),X={isSignedIn:null,userId:null},W=n(37),z=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(g.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(g.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:K.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(g.a)({},e,{},R.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(g.a)({},e,Object(W.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return R.a.omit(e,t.payload);default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Y=Object(s.e)(z,Q(Object(s.a)(l.a)));i.a.render(r.a.createElement(o.a,{store:Y},r.a.createElement(J,null)),document.querySelector("#root"))},38:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.be36ae1f.chunk.js.map