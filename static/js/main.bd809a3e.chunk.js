(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__272Jp",label:"ContactForm_label__2Crum",input:"ContactForm_input__NozXH",btnSubmit:"ContactForm_btnSubmit__y4zNW"}},,function(t,e,n){t.exports={list:"ContactList_list__2scac",item:"ContactList_item__1KI3X",name:"ContactList_name__2ySJg",number:"ContactList_number__U1rKZ",button:"ContactList_button__39b8b"}},,,function(t,e,n){t.exports={label:"Filter_label__26cwX",input:"Filter_input__3r2mA",span:"Filter_span__362hz"}},,,function(t,e,n){t.exports={container:"Container_container__3I0k6"}},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=(n(17),n(11)),i=n(3),l=n(10),u=n.n(l),b=n(0),m=function(t){var e=t.children;return Object(b.jsx)("div",{className:u.a.container,children:e})},j=n(21),d=n(2),O=n.n(d);function f(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],m=l[1],d=Object(j.a)(),f=Object(j.a)(),h=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},_=function(){o(""),m("")};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:O.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,id:Object(j.a)(),number:u}),_()},children:[Object(b.jsx)("label",{className:O.a.label,htmlFor:d,children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:d,value:r,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:O.a.input,required:!0}),Object(b.jsx)("label",{className:O.a.label,htmlFor:f,children:"Number"}),Object(b.jsx)("input",{type:"tel",name:"number",id:f,value:u,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",className:O.a.input,required:!0}),Object(b.jsx)("button",{type:"submit",className:O.a.btnSubmit,children:"Add contact"})]})})}var h=n(7),_=n.n(h),p=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:_.a.label,children:[Object(b.jsx)("span",{className:_.a.span,children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",className:_.a.input,value:e,onChange:n})]})},x=n(4),C=n.n(x),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:C.a.item,children:[Object(b.jsx)("p",{className:C.a.name,children:a}),Object(b.jsx)("p",{className:C.a.number,children:c}),Object(b.jsx)("button",{type:"button",className:C.a.button,onClick:function(){n(e)},children:"Delete"})]},e)}))})};n(19);function N(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{className:"title",children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(t){if(console.log(t),n.find((function(e){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("".concat(t.name," is already in contacts"));else{var e={id:Object(j.a)(),name:t.name,number:t.number};c((function(t){return[e].concat(Object(s.a)(t))}))}}}),Object(b.jsx)("h2",{className:"title",children:"Contacts"}),Object(b.jsx)(p,{value:l,onChange:function(t){u(t.currentTarget.value)}}),Object(b.jsx)(v,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})})})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.bd809a3e.chunk.js.map