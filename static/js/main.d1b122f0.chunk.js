(this["webpackJsonpimage-base64"]=this["webpackJsonpimage-base64"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(9),i=a.n(s),r=a(6),l=a(20),o=a(21),j=a(0),b=function(e){var t=e.image64,a=e.setImage64,n=Object(c.useRef)(null),s=Object(c.useState)(""),i=Object(r.a)(s,2),b=i[0],d=i[1],u=function(e){e.preventDefault(),n.current.click()},m=function(e){var t=new FileReader;e&&(t.readAsDataURL(e),t.onload=function(){var e=t.result;console.log(e),a(e)},t.onerror=function(e){console.log("error: ",e)})};return Object(j.jsxs)("div",{className:"imageContainer",children:[Object(j.jsxs)("div",{className:"imageDisplay",onClick:t?function(){}:u,children:[t?Object(j.jsx)("img",{src:t}):Object(j.jsxs)("div",{className:"noImageDiv",children:[Object(j.jsx)(l.a,{}),"No file Selected."]}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"fileName",children:b}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),a("")},children:Object(j.jsx)(o.a,{})})]})]}),Object(j.jsxs)("div",{className:"imageUploader",children:[Object(j.jsx)("input",{type:"file",onChange:function(e){d(e.target.files[0].name),m(e.target.files[0])},accept:"image/*",hidden:!0,ref:n}),Object(j.jsx)("button",{onClick:u,children:"Select an Image"})]})]})},d=a(22),u=a(23),m=function(e){var t=e.image64,a=e.setImage64,n=Object(c.useRef)("null"),s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],o=i[1];return Object(j.jsxs)("div",{className:"textareaContainer",children:[Object(j.jsx)("textarea",{onChange:function(e){o(e.target.value)},value:l||t,ref:n,placeholder:"Upload an image to automatically generate its Base64 value or paste a Base64 value here to generate an image."}),Object(j.jsxs)("div",{className:"textareabtns",children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),"data:image"===l.substr(0,10)?a(l):alert("Invalid Base64 format")},children:"Generate Image"}),Object(j.jsxs)("button",{onClick:function(e){e.preventDefault(),t&&(navigator.clipboard.writeText(t),alert("Copied to clipboard"))},children:[Object(j.jsx)(d.a,{})," Copy"]}),Object(j.jsxs)("button",{onClick:function(e){e.preventDefault(),o(""),a("")},children:[Object(j.jsx)(u.a,{})," Reset"]})]})]})},O=a(24),x=(a(18),function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],o=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)("h2",{children:"Image"}),Object(j.jsx)(O.a,{}),Object(j.jsx)("h2",{children:"Base64"})]}),Object(j.jsxs)("div",{className:"switcher",children:[Object(j.jsx)("div",{className:"showComp ".concat(a?"activeComp":""),onClick:function(){n(!0)},children:"Image"}),Object(j.jsx)("div",{className:"showComp ".concat(a?"":"activeComp"),onClick:function(){n(!1)},children:"Code"})]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("form",{children:a?Object(j.jsx)(b,{image64:l,setImage64:o}):Object(j.jsx)(m,{image64:l,setImage64:o})})})]})});i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d1b122f0.chunk.js.map