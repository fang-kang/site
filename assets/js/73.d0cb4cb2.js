(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{284:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Mock data is an integral part of the front-end development, the key link to separate the front and back-end development. By pre-agreed with the server-side interface, analog request data and even logic, can make the front-end development independent, will not be blocked by the development of the server.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("In my company project, the data is usually simulated by the backend using "),a("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),a("p",[a("a",{attrs:{href:"http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online Demo"),a("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-admin-template"),a("OutboundLink")],1),t._v(" previously used "),a("a",{attrs:{href:"https://easy-mock.com/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("easy-mock"),a("OutboundLink")],1),t._v(" to simulate data.\nIt is a pure front-end visualization and can quickly generate persistence services for analog data. Very easy to use and can also be combined with "),a("code",[t._v("swagger")]),t._v(", support for cross-domain, whether it is a team or a personal project is worth a try.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://easy-mock.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online Demo"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Since "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),a("OutboundLink")],1),t._v(" is a pure front-end personal project, all data is [mockjs] (https://github.com/ Nuysoft/Mock) Simulation generation. Its principle is: Intercept all requests and proxy to the local, and then mock data, so you will find that no requests are issued in "),a("code",[t._v("network")]),t._v(".")]),t._v(" "),a("p",[t._v("But its biggest problem is its implementation mechanism. It overrides the browser's "),a("code",[t._v("XMLHttpRequest")]),t._v(" object to intercept all requests and proxy to the local. In most cases it is quite convenient to use, but because it rewrites the "),a("code",[t._v("XMLHttpRequest")]),t._v(" object, so for example, the "),a("code",[t._v("progress")]),t._v(" method, or some third-party libraries that rely on "),a("code",[t._v("XMLHttpRequest")]),t._v(" will be incompatible with it. Looking at my project's "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues?utf8=%E2%9C%93&q=mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1),t._v(", you will know how many people have problems.")]),t._v(" "),t._m(6),t._v(" "),a("h2",{attrs:{id:"new-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-way"}},[t._v("#")]),t._v(" New way "),a("Badge",{attrs:{text:"v4.0.0+"}})],1),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The advantage of this way is to solve the previous pain points while preserving the advantages of "),a("code",[t._v("mockjs")]),t._v(". Since our mock is implemented entirely based on "),a("code",[t._v("webpack-dev-serve")]),t._v(", "),a("code",[t._v("mock-server")]),t._v(" will start automatically when you start the project, and it will also pass "),a("a",{attrs:{href:"https://github.com/paulmillr/chokidar",target:"_blank",rel:"noopener noreferrer"}},[t._v("chokidar"),a("OutboundLink")],1),t._v(" to observe the changes in the contents of the "),a("code",[t._v("mock")]),t._v(" folder. When a change occurs, the previously registered "),a("code",[t._v("mock-api")]),t._v(" interface is cleared and the new interface is dynamically remounted to support hot updates. If you are interested, you can look at the code "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/mock-server.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock-server.js"),a("OutboundLink")],1),t._v(". Since it is a real "),a("code",[t._v("server")]),t._v(", you can clearly know the data structure returned by the interface through "),a("code",[t._v("network")]),t._v(" of Chrome. At the same time, it solves the problem that the previous "),a("code",[t._v("mockjs")]),t._v(" will rewrite the "),a("code",[t._v("XMLHttpRequest")]),t._v(" object, which causes many third-party libraries to fail.")]),t._v(" "),a("p",[t._v("All requests for this project are sent via the packaged "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("request.js"),a("OutboundLink")],1),t._v(" by reading The source code can find that all requests are set to a "),a("code",[t._v("baseURL")]),t._v(", and this "),a("code",[t._v("baseURL")]),t._v(" is dynamically set by reading the "),a("code",[t._v("process.env.VUE_APP_BASE_API")]),t._v(" environment variable, so that we can use different environments for different environments. Api` address")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("If you don't want to use "),a("code",[t._v("mock-server")]),t._v(", just the "),a("code",[t._v("after")]),t._v(" Middleware of "),a("code",[t._v("webpack-dev-server")]),t._v(" from "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.config.js"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("For example, I need to add an api to get the number of comments below an article in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/api/article.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/api/article"),a("OutboundLink")],1),t._v(" through "),a("code",[t._v("fetchComments")]),t._v(". First create a new api:")]),t._v(" "),t._m(14),a("p",[t._v("After declaring the api, we need to find the corresponding mock folder "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/article.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/article.js"),a("OutboundLink")],1),t._v(", below Create a mock api that intercepts routes.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("The most common operation is: You have simulated some data locally, and after the backend completes the api, it gradually replaces the api of the original mock.")]),t._v(" "),a("p",[t._v("Let's take the "),a("code",[t._v("getRoles")]),t._v(" api in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/api/role.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/api/role.js"),a("OutboundLink")],1),t._v(" as an example. It was originally mocked in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/role/index.js"),a("OutboundLink")],1),t._v(". Now we need to switch it to real backend data, as long as it is in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/role/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/role/index.js"),a("OutboundLink")],1),t._v(" Find the corresponding route, then delete it. At this time you can view the real data in "),a("code",[t._v("network")]),t._v(".")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("Currently the project only starts a "),a("code",[t._v("mock-server")]),t._v(", of course you can also have your own other "),a("code",[t._v("mock-server")]),t._v(" or proxy interface. Some api can take this service, others can take another service. Just set them to a different "),a("code",[t._v("baseURL")]),t._v(". "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Then configure multiple "),a("code",[t._v("proxy")]),t._v(" according to the set url rules in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.config.js"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文档"),a("OutboundLink")],1)]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Now in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/mock/index.js#L19",target:"_blank",rel:"noopener noreferrer"}},[t._v("mock/index.js"),a("OutboundLink")],1),t._v(" also encapsulates a pure front-end mock method, you only Need to be in "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/main.js"),a("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(21),a("p",[t._v("This will become pure front-end mock data and the same as the mock way before the "),a("code",[t._v("v4.0")]),t._v(" version, the principle is as above. The online "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v(" that you are currently seeing is just that way.")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("There are many times when we encounter local use of mock data, online environments that use real data, or different environments that use different data.")]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("You need to ensure that your local simulated api is consistent with all other addresses except the root path. such as:")]),t._v(" "),t._m(24),a("p",[t._v("We can use the "),a("router-link",{attrs:{to:"/guide/essentials/deploy.html#environmental-variables"}},[t._v("environment variables")]),t._v(" to do different environments and request different api base path.")],1),t._v(" "),t._m(25),t._m(26),a("p",[t._v("Then create an "),a("code",[t._v("axios")]),t._v(" instance based on the environment variable to have a different "),a("code",[t._v("baseURL")]),t._v(".\n"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),a("OutboundLink")],1)]),t._v(" "),t._m(27),a("p",[t._v("In this way we can automatically switched local and online apis based on environment variables.")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),a("p",[t._v("Mock data is only import in the local environment.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mock-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mock-data"}},[this._v("#")]),this._v(" Mock Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[this._v("#")]),this._v(" Swagger")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("swagger")]),this._v(" is a REST APIs document generation tool that automatically generates documentation from code comments. It can be cross-platform, open source, supports most languages, community is good, in short, very good, highly recommended.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"easy-mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#easy-mock"}},[this._v("#")]),this._v(" Easy-mock")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The online version of "),a("code",[t._v("vue-admin-template")]),t._v(" is no longer using "),a("code",[t._v("easy-mock")]),t._v(". Because the online free service provided by "),a("code",[t._v("easy-mock")]),t._v(" is very unstable, it will hang from time to time. If you need it, you can build your own service according to its tutorial.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mockjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mockjs"}},[this._v("#")]),this._v(" Mockjs")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("It also has a problem because it is data that is simulated locally and does not actually take any network requests. Therefore, local debugging is very troublesome and can only be debugged by "),a("code",[t._v("console.log")]),t._v(". Take the example of "),a("code",[t._v("vue-element-admin")]),t._v(". If you want to find out what data is returned by the "),a("code",[t._v("getInfo()")]),t._v(" api, you can only know it by looking at the source code or manually "),a("code",[t._v("Debug")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After the "),e("code",[this._v("v4.0")]),this._v(" version, a "),e("code",[this._v("mock-server")]),this._v(" will be launched locally to simulate the data, and the online environment will continue to use "),e("code",[this._v("mockjs")]),this._v(" for simulation.(Because this project is a pure front-end project, you can also build an online server to provide data.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[this._v("#")]),this._v(" Remove")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, local requests are proxy to "),e("code",[this._v("http://localhost:${port}/mock")]),this._v(", and you can modify "),e("code",[this._v("proxy")]),this._v(" if you want to adjust to your own mock address.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change xxx-api/login => mock/login")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// detail: https://cli.vuejs.org/config/#devserver-proxy")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://localhost:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/mock")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nafter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mock/mock-server.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Please note: this operation requires a restart of the server.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[this._v("#")]),this._v(" Add")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you want to add mock data, just find the "),e("code",[this._v("mock")]),this._v(" file in the root folder, add the corresponding route, intercept it and simulate the data.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchComments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/article/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/comments")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Please note that the mock interception is based on routing. Please make sure that the mock data path will match your api route path(support regular)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fetchComments 的 mock")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// uUrl must match your api route")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example, the route of fetchComments may be /article/1/comments or /article/2/comments")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// So you need to match by regular")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/article/[A-Za-z0-9]/comments'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Must be the same type as your interface defines")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return result")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// req and res detail see")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://expressjs.com/zh-cn/api.html#req")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"change"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change"}},[this._v("#")]),this._v(" Change")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The declared in the api")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/roles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Find the corresponding route and delete")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/roles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" roles\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"multiple-servers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-servers"}},[this._v("#")]),this._v(" Multiple servers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"enable-pure-front-end-mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-pure-front-end-mock"}},[this._v("#")]),this._v(" Enable pure front end Mock")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mockXHR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../mock'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mockXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"switch-local-and-online-mock-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-local-and-online-mock-data"}},[this._v("#")]),this._v(" Switch local and online Mock data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Easy-Mock")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("https://api-dev/login   // Local request\n\nhttps://api-prod/login  // Online request\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env.development")]),t._v("\nVUE_APP_BASE_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/dev-api'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Inject the root path of the local api")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env.production")]),t._v("\nVUE_APP_BASE_API "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/prod-api'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Inject the root path of the production api")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create an axios instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// base_url of the API")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request timeout")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Mock.js")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When we use "),e("code",[this._v("Mock.js")]),this._v(" to simulate data locally, the real-world api method is used online. This is similar to the easy-mock method above. We mainly judge that when it is an online environment, we use real-world api. We only import "),e("code",[this._v("Mock.js")]),this._v(" locally.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use environment variables to determine is required")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mock'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// simulation data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);