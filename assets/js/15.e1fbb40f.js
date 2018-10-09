(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{183:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Modules are simple "),a("a",{attrs:{href:"https://vuex.vuejs.org/en/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex Modules"),a("OutboundLink")],1),t._v(" that correspond to the Models. Vuex ORM will use modules to interact with Vuex Store. Vuex ORM will register predefined state, getters, actions, and mutations for interacting with store easily. However, you are free to add any additional modules you wish.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Vuex ORM doesn't require defining any specific module. You can leave them empty when registering to the database.")]),t._v(" "),t._m(2),a("p",[t._v("However, you may add additional state, getters, actions, and mutations.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Vuex ORM will create the schema based on registered models inside the Vuex Store. For example, when you install Vuex ORM with User and Post model, the inside of the Vuex Store would become:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("You may interact with the Store as you ordinally would with Vuex. If you have defined some additional state, getters, actions, and mutations, you can call them through the Vuex Module syntax.")]),t._v(" "),t._m(8),a("p",[t._v("However, Vuex ORM has predefined getters, actions, and mutations to store, modify and search data. See "),a("router-link",{attrs:{to:"./../store/retrieving-data.html"}},[t._v("Interacting With Store")]),t._v(" for their usage.")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"modules-and-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-and-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Modules and Store")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"defining-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining Modules")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// users module.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndatabase"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("register")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" users"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" count\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndatabase"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("register")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" users"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("WARNING:")]),this._v(" Do not create state named "),s("code",[this._v("data")]),this._v(". The key name "),s("code",[this._v("data")]),this._v(" is reserved, and Vuex ORM will override its value when storing data.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"inside-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inside-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Inside Store")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" entity "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'users'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Post")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" entity "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'posts'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstore"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*\n  {\n    entities: {\n      users: {\n        data: {}\n      },\n      posts: {\n        data: {}\n      }\n    }\n  }\n*/")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"interacting-with-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-store","aria-hidden":"true"}},[this._v("#")]),this._v(" Interacting With Store")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" count\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Get state.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Commit mutation.")]),t._v("\nstore"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("commit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'entities/users/add'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);