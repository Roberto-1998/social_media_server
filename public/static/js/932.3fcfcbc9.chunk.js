"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[932],{4695:function(e,r,n){var a=n(1413),s=n(9439),i=n(2701),t=n(4585),o=n(5341),c=n(6069),l=n(5705),u=n(184);r.Z=function(e){var r=e.label,n=e.type,d=e.name,m=e.placeholder,f=(0,l.U$)({type:n,name:d,placeholder:m}),p=(0,s.Z)(f,2),h=p[0],x=p[1];return(0,u.jsxs)(i.NI,{isInvalid:x.error&&x.touched,mb:"6",children:[(0,u.jsx)(t.l,{noOfLines:1,children:r}),(0,u.jsx)(l.gN,(0,a.Z)((0,a.Z)({as:c.I},h),{},{type:n,name:d,placeholder:m})),(0,u.jsx)(o.J1,{children:x.error})]})}},6932:function(e,r,n){n.r(r);var a=n(1295),s=n(8537),i=n(8206),t=n(751),o=n(5946),c=n(2893),l=n(9229),u=n(2435),d=n(4087),m=n(7498),f=n(8618),p=n(9753),h=n(5911),x=n(2701),b=n(4695),v=n(2791),y=n(5705),j=n(8007),g=n(9434),w=n(7689),k=n(3437),Z=n(1087),A=n(184);r.default=function(){var e=(0,w.s0)(),r=(0,g.I0)(),n=(0,g.v9)((function(e){return e.user})),S=n.loading,q=n.error,P=n.userInfo,I=(0,a.p)(),O=(0,s.S)({base:"xs",md:"sm"}),C=(0,s.S)({base:"transparent",md:"bg-surface"});return(0,v.useEffect)((function(){P&&(e("/products"),I({description:"Account created. Welcome aboard. ",status:"success",isClosable:!0}))}),[e,I,P]),(0,A.jsx)(y.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:j.Ry({name:j.Z_().required("A name is required."),email:j.Z_().email("Invalid email.").required("An email address is required."),password:j.Z_().min(1,"Password is too short - must contain at least 1 character. ").required("Password is required"),confirmPassword:j.Z_().min(1,"Password is too short - must contain at least 1 character. ").required("Password is required").oneOf([j.iH("password"),null],"Password must match. ")}),onSubmit:function(e){r((0,k.z2)(e.name,e.email,e.password))},children:function(e){return(0,A.jsx)(i.W,{maxW:"lg",py:{base:"12",md:"24"},px:{base:"0",md:"8"},minH:"4xl",children:(0,A.jsxs)(t.K,{spacing:"8",children:[(0,A.jsx)(t.K,{spacing:"6",children:(0,A.jsxs)(t.K,{spacing:{base:"2",md:"3"},textAlign:"center",children:[(0,A.jsx)(o.X,{size:O,children:"Create an account."}),(0,A.jsxs)(c.U,{spacing:"1",justify:"center",children:[(0,A.jsx)(l.x,{color:"muted",children:"Already a user?"}),(0,A.jsx)(u.z,{as:Z.rU,to:"/registration",variant:"link",colorScheme:"orange",children:"Sign in"})]})]})}),(0,A.jsx)(d.xu,{py:{base:"0",md:"8"},px:{base:"4",md:"10"},bg:C,boxShadow:{base:"none",md:"xl"},children:(0,A.jsxs)(t.K,{spacing:"6",as:"form",onSubmit:e.handleSubmit,children:[q&&(0,A.jsxs)(m.b,{status:"error",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",children:[(0,A.jsx)(f.z,{}),(0,A.jsx)(p.C,{children:"We are sorry!"}),(0,A.jsx)(h.X,{children:q})]}),(0,A.jsx)(t.K,{spacing:"5",children:(0,A.jsxs)(x.NI,{children:[(0,A.jsx)(b.Z,{type:"text",name:"name",placeholder:"Your first and last name",label:"Full Name"}),(0,A.jsx)(b.Z,{type:"text",name:"email",placeholder:"you@example.com",label:"Email"}),(0,A.jsx)(b.Z,{type:"password",name:"password",placeholder:"your password",label:"Password"}),(0,A.jsx)(b.Z,{type:"password",name:"confirmPassword",placeholder:"Confirm your password",label:"Confirm your password"})]})}),(0,A.jsx)(t.K,{spacing:"6",children:(0,A.jsx)(u.z,{colorScheme:"orange",size:"lg",fontSize:"md",isLoading:S,type:"submit",children:"Sign up"})})]})})]})})}})}},8537:function(e,r,n){n.d(r,{S:function(){return d}});var a=n(9439),s=n(2625);var i=n(1413),t=n(9216),o=n(2791);var c=n(5310),l=n(6992);function u(e){var r,n,s=(0,l.Kn)(e)?e:{fallback:null!=e?e:"base"},u=(0,c.F)().__breakpoints.details.map((function(e){var r=e.minMaxQuery;return{breakpoint:e.breakpoint,query:r.replace("@media screen and ","")}})),d=u.map((function(e){return e.breakpoint===s.fallback})),m=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.ssr,s=void 0===n||n,c=r.fallback,l=(0,t.O)().getWindow,u=Array.isArray(e)?e:[e],d=Array.isArray(c)?c:[c];d=d.filter((function(e){return null!=e}));var m=(0,o.useState)((function(){return u.map((function(e,r){return{media:e,matches:s?!!d[r]:l().matchMedia(e).matches}}))})),f=(0,a.Z)(m,2),p=f[0],h=f[1];return(0,o.useEffect)((function(){var e=l();h(u.map((function(r){return{media:r,matches:e.matchMedia(r).matches}})));var r=u.map((function(r){return e.matchMedia(r)})),n=function(e){h((function(r){return r.slice().map((function(r){return r.media===e.media?(0,i.Z)((0,i.Z)({},r),{},{matches:e.matches}):r}))}))};return r.forEach((function(e){"function"===typeof e.addListener?e.addListener(n):e.addEventListener("change",n)})),function(){r.forEach((function(e){"function"===typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)}))}}),[l]),p.map((function(e){return e.matches}))}(u.map((function(e){return e.query})),{fallback:d,ssr:s.ssr});return null!=(n=null==(r=u[m.findIndex((function(e){return 1==e}))])?void 0:r.breakpoint)?n:s.fallback}function d(e,r){var n,i=u((0,l.Kn)(r)?r:{fallback:null!=r?r:"base"}),t=(0,c.F)();if(i){var o=Array.from((null==(n=t.__breakpoints)?void 0:n.keys)||[]);return function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.AV,a=Object.keys(e).indexOf(r);if(-1!==a)return e[r];for(var i=n.indexOf(r);i>=0;){var t=n[i];if(e.hasOwnProperty(t)){a=i;break}i-=1}return-1!==a?e[n[a]]:void 0}(Array.isArray(e)?Object.fromEntries(Object.entries((0,s.Yq)(e,o)).map((function(e){var r=(0,a.Z)(e,2);return[r[0],r[1]]}))):e,i,o)}}}}]);
//# sourceMappingURL=932.3fcfcbc9.chunk.js.map