!function(e){function t(t){for(var r,u,l=t[0],i=t[1],c=t[2],s=0,d=[];s<l.length;s++)u=l[s],a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={1:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;o.push([543,0]),n()}({124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateEntry=t.fetchInitialEntry=t.fetchUpdatedEntry=void 0;var r=n(181),a=n(125),o=n(84),u=n(127),l=t.fetchUpdatedEntry=function(){return function(e){(0,a.fetchEntryRequest)().then(function(e){return e.json()}).then(function(t){return e({type:r.ENTRY_FETCH_FINISHED,data:t})})}};t.fetchInitialEntry=function(){return function(e){e({type:r.ENTRY_FETCH_STARTED}),(0,a.fetchEntryRequest)().then(function(e){return e.json()}).then(function(t){return e({type:r.ENTRY_FETCH_FINISHED,data:t})})}},t.updateEntry=function(e,t){return function(n){n({type:r.ENTRY_UPDATE_STARTED}),(0,a.addEntryRequest)(e,t).then(function(e){if(200!==e.status)throw new Error("UNKNOWN_ENTRY_UPDATE_ERROR")}).then(function(){n({type:r.ENTRY_UPDATE_FINISHED}),n({type:o.ENTRY_HIDE_DISPLAY_MODAL}),l()(n),(0,u.fetchUpdatedStatus)()(n)}).catch(function(e){e instanceof Error&&"UNKNOWN_ENTRY_UPDATE_ERROR"===e.message&&n({type:r.ENTRY_UPDATE_FAILED})})}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchStatusRequest=function(){return fetch("/api/status")},t.fetchAuthRequest=function(){return fetch("/api/auth",{credentials:"same-origin"})},t.fetchEntryRequest=function(){return fetch("/api/entry")},t.updateAuthRequest=function(e){return fetch("/api/auth",{method:"post",credentials:"same-origin",body:JSON.stringify({pw:e})})},t.addEntryRequest=function(e,t){return fetch("/api/entry",{method:"put",credentials:"same-origin",body:JSON.stringify({identifier:e,comment:t})})}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STATUS_FETCH_STARTED="STATUS_FETCH_STARTED",t.STATUS_FETCH_FINISHED="STATUS_FETCH_FINISHED",t.STATUS_FETCH_FAILED="STATUS_FETCH_FAILED"},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUpdatedStatus=t.fetchInitialStatus=void 0;var r=n(126),a=n(125);t.fetchInitialStatus=function(){return function(e){e({type:r.STATUS_FETCH_STARTED}),(0,a.fetchStatusRequest)().then(function(e){return e.json()}).then(function(t){return e({type:r.STATUS_FETCH_FINISHED,data:t,derp:2})})}},t.fetchUpdatedStatus=function(){return function(e){(0,a.fetchStatusRequest)().then(function(e){return e.json()}).then(function(t){return e({type:r.STATUS_FETCH_FINISHED,data:t})})}}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeCurrentChallenge=t.toggleShowGraph=t.updateEntryValue=t.updateAuthValue=t.toggleDisplayModalEntry=t.toggleDisplayModalAuth=void 0;var r=n(84);t.toggleDisplayModalAuth=function(){return function(e){return e({type:r.AUTH_TOGGLE_DISPLAY_MODAL})}},t.toggleDisplayModalEntry=function(){return function(e){return e({type:r.ENTRY_TOGGLE_DISPLAY_MODAL})}},t.updateAuthValue=function(e){return function(t){return t({type:r.UPDATE_AUTH_VALUE,value:e})}},t.updateEntryValue=function(e){return function(t){return t({type:r.UPDATE_ENTRY_VALUE,value:e})}},t.toggleShowGraph=function(){return function(e){return e({type:r.TOGGLE_SHOW_GRAPH})}},t.changeCurrentChallenge=function(e,t){return function(n){return n({type:r.CHANGE_CURRENT_CHALLENGE,challenge:e,challenges:t})}}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ENTER_BUTTON=13},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTH_FETCH_STARTED="AUTH_FETCH_STARTED",t.AUTH_FETCH_FINISHED="AUTH_FETCH_FINISHED",t.AUTH_UPDATE_STARTED="AUTH_UPDATE_STARTED",t.AUTH_UPDATE_FINISHED="AUTH_UPDATE_FINISHED",t.AUTH_UPDATE_FAILED="AUTH_UPDATE_FAILED"},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateAuth=t.fetchAuth=void 0;var r=n(179),a=n(84),o=n(125);t.fetchAuth=function(){return function(e){e({type:r.AUTH_FETCH_STARTED}),(0,o.fetchAuthRequest)().then(function(e){return e.json()}).then(function(t){return e({type:r.AUTH_FETCH_FINISHED,status:t.status})})}},t.updateAuth=function(e){return function(t){t({type:r.AUTH_UPDATE_STARTED}),(0,o.updateAuthRequest)(e).then(function(e){if(200!==e.status)throw new Error("INCORRECT_PASSWORD_IDENTIFIER")}).then(function(){t({type:r.AUTH_UPDATE_FINISHED}),t({type:a.AUTH_HIDE_DISPLAY_MODAL})}).catch(function(e){e instanceof Error&&"INCORRECT_PASSWORD_IDENTIFIER"===e.message&&t({type:r.AUTH_UPDATE_FAILED})})}}},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ENTRY_FETCH_STARTED="ENTRY_FETCH_STARTED",t.ENTRY_FETCH_FINISHED="ENTRY_FETCH_FINISHED",t.ENTRY_FETCH_FAILED="ENTRY_FETCH_FAILED",t.ENTRY_UPDATE_STARTED="ENTRY_UPDATE_STARTED",t.ENTRY_UPDATE_FINISHED="ENTRY_UPDATE_FINISHED",t.ENTRY_UPDATE_FAILED="ENTRY_UPDATE_FAILED"},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseTransparent=t.parseArea=t.calculateTotalDays=t.parseGrowthDataSet=t.parseProgressDataSet=t.formatEntryDate=void 0;var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(n(311));t.formatEntryDate=function(e){return e.replace(" "," @ ")};var o=function(e){var t=e.split("-"),n=r(t,3),a=n[0],o=n[1],u=n[2];return new Date(a,o,u)};t.parseProgressDataSet=function(e,t,n){var r=o(t),u=e.map(function(e){return(0,a.default)(function(e){return o(e.split(" ")[0])}(e.added),r)}).reverse();return new Array(n).fill(0).map(function(e,t){return u.filter(function(e){return e<=t}).length})},t.parseGrowthDataSet=function(e,t){return new Array(e).fill(0).map(function(e,n){return t*n})},t.calculateTotalDays=function(e,t){return(0,a.default)(o(t),o(e))+1},t.parseArea=function(e,t){return new Array(e.length).fill(0).map(function(n,r){return e[r]>t[r]?e[r]-t[r]:0})},t.parseTransparent=function(e,t){return new Array(e.length).fill(0).map(function(n,r){return e[r]<=t[r]?e[r]:t[r]})}},286:function(e,t,n){},287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(126),o={fetchStarted:!1,fetchFinished:!1,fetchError:!1,statuses:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.STATUS_FETCH_STARTED:return r({},e,{fetchStarted:!0,fetchFinished:!1,fetchError:!1});case a.STATUS_FETCH_FINISHED:return r({},e,{fetchStarted:!1,fetchFinished:!0,fetchError:!1,statuses:t.data});case a.STATUS_FETCH_FAILED:return r({},e,{fetchStarted:!1,fetchFinished:!1,fetchError:!0});default:return e}}},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(181),o={fetchStarted:!1,fetchFinished:!1,fetchError:!1,entries:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.ENTRY_FETCH_STARTED:return r({},e,{fetchStarted:!0,fetchFinished:!1,fetchError:!1});case a.ENTRY_FETCH_FINISHED:return{fetchStarted:!1,fetchFinished:!0,fetchError:!1,entries:t.data};case a.ENTRY_FETCH_FAILED:return r({},e,{fetchStarted:!1,fetchFinished:!1,fetchError:!0});case a.ENTRY_UPDATE_STARTED:return r({},e,{updateStarted:!0,updateFinished:!1,updateFailed:!1});case a.ENTRY_UPDATE_FINISHED:return r({},e,{updateStarted:!1,updateFinished:!0,updateFailed:!1});case a.ENTRY_UPDATE_FAILED:return r({},e,{updateStarted:!1,updateFinished:!0,updateFailed:!0});default:return e}}},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.mapChallenges=function(e){return e.map(function(e){return{identifier:e.identifier}})},t.mapCurrentChallenge=function(e){var t=e.find(function(e){return e.progress.current});return t||e[0]},t.mapChangeCurrentChallenge=function(e,t){return t.find(function(t){return t.identifier===e})}},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(84),o=n(126),u=n(289),l={showModalAuth:!1,showModalEntry:!1,showGraph:!1,authValue:"",entryComment:"",currentChallenge:{}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case o.STATUS_FETCH_FINISHED:return r({},e,{currentChallenge:(0,u.mapCurrentChallenge)(t.data)});case a.CHANGE_CURRENT_CHALLENGE:return r({},e,{currentChallenge:(0,u.mapChangeCurrentChallenge)(t.challenge,t.challenges)});case a.AUTH_TOGGLE_DISPLAY_MODAL:return r({},e,{showModalAuth:!e.showModalAuth});case a.ENTRY_TOGGLE_DISPLAY_MODAL:return r({},e,{showModalEntry:!e.showModalEntry});case a.AUTH_HIDE_DISPLAY_MODAL:return r({},e,{showModalAuth:!1});case a.ENTRY_HIDE_DISPLAY_MODAL:return r({},e,{showModalEntry:!1,entryComment:""});case a.UPDATE_AUTH_VALUE:return r({},e,{authValue:t.value});case a.UPDATE_ENTRY_VALUE:return r({},e,{entryComment:t.value});case a.TOGGLE_SHOW_GRAPH:return r({},e,{showGraph:!e.showGraph});default:return e}}},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(179),o={fetchDone:!1,fetchStarted:!1,fetchFinished:!1,fetchFailed:!1,loggedIn:!1,updateStarted:!1,updateFinished:!1,updateFailed:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.AUTH_FETCH_STARTED:return r({},e,{fetchStarted:!0,fetchFinished:!1,fetchFailed:!1});case a.AUTH_FETCH_FINISHED:return r({},e,{loggedIn:t.status,fetchDone:!0,fetchStarted:!1,fetchFinished:!0});case a.AUTH_UPDATE_STARTED:return r({},e,{updateStarted:!0,updateFinished:!1,updateFailed:!1});case a.AUTH_UPDATE_FINISHED:return r({},e,{updateStarted:!1,updateFinished:!0,updateFailed:!1,loggedIn:!0});case a.AUTH_UPDATE_FAILED:return r({},e,{updateStarted:!1,updateFinished:!0,updateFailed:!0});default:return e}}},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(116),a=i(n(291)),o=i(n(290)),u=i(n(288)),l=i(n(287));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.combineReducers)({auth:a.default,display:o.default,entry:u.default,status:l.default});t.default=c},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[a.default];return(0,r.createStore)(o.default,e,(0,r.compose)(r.applyMiddleware.apply(void 0,t),function(e){return e}))};var r=n(116),a=u(n(293)),o=u(n(292));function u(e){return e&&e.__esModule?e:{default:e}}},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(128),c=n(124),f=n(178);var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"handleKeyDown",value:function(e){if(e.keyCode===f.ENTER_BUTTON)return this.props.updateEntry(this.props.currentChallenge.identifier,e.target.value)}},{key:"render",value:function(){var e=this,t=this.props,n=t.entryComment,r=t.updateStarted,a=t.updateFailed,u=t.currentChallenge;return o.default.createElement(l.Modal,{open:!0,onClose:this.props.toggleDisplayModalEntry,className:"modal-container"},o.default.createElement(l.Modal.Header,{icon:"lock",content:"Add entry"}),o.default.createElement(l.Modal.Content,null,o.default.createElement(l.Input,{placeholder:"Climbing",loading:r,value:n,onKeyUp:function(t){return e.handleKeyDown(t)},onChange:function(t){return e.props.updateEntryValue(t.target.value)},disabled:r}),a&&o.default.createElement("p",{className:"modal-incorrect-password"},"Something went wrong. Try again.")),o.default.createElement(l.Modal.Actions,null,o.default.createElement(l.Button,{color:"red",onClick:this.props.toggleDisplayModalEntry,inverted:!0},o.default.createElement(l.Icon,{name:"cancel"})," Cancel"),o.default.createElement(l.Button,{color:"green",onClick:function(){return e.props.updateEntry(u.identifier,n)},inverted:!0},o.default.createElement(l.Icon,{name:"checkmark"})," Post")))}}]),t}(),d={toggleDisplayModalEntry:i.toggleDisplayModalEntry,updateEntryValue:i.updateEntryValue,updateEntry:c.updateEntry};t.default=(0,u.connect)(function(e){var t=e.display,n=e.entry;return{entryComment:t.entryComment,updateStarted:n.updateStarted,updateFailed:n.updateFailed,currentChallenge:t.currentChallenge}},d)(s)},296:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(128),c=n(180),f=n(178);var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"handleKeyDown",value:function(e){if(e.keyCode===f.ENTER_BUTTON)return this.props.updateAuth(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props,n=t.authValue,r=t.updateStarted,a=t.updateFailed;return o.default.createElement(l.Modal,{open:!0,onClose:this.props.toggleDisplayModalAuth,size:"small",className:"modal-container"},o.default.createElement(l.Header,{icon:"lock",content:"Authenticate"}),o.default.createElement(l.Modal.Content,null,o.default.createElement(l.Input,{placeholder:"My secret password",loading:r,value:n,onKeyUp:function(t){return e.handleKeyDown(t)},onChange:function(t){return e.props.updateAuthValue(t.target.value)},disabled:r}),a&&o.default.createElement("p",{className:"modal-incorrect-password"},"Incorrect password. Try again.")),o.default.createElement(l.Modal.Actions,null,o.default.createElement(l.Button,{color:"red",onClick:this.props.toggleDisplayModalAuth,inverted:!0},o.default.createElement(l.Icon,{name:"cancel"})," Cancel"),o.default.createElement(l.Button,{color:"green",onClick:function(){return e.props.updateAuth(n)},inverted:!0},o.default.createElement(l.Icon,{name:"checkmark"})," Log in")))}}]),t}(),d={toggleDisplayModalAuth:i.toggleDisplayModalAuth,updateAuthValue:i.updateAuthValue,updateAuth:c.updateAuth};t.default=(0,u.connect)(function(e){var t=e.display,n=e.auth;return{authValue:t.authValue,updateStarted:n.updateStarted,updateFailed:n.updateFailed}},d)(s)},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(128),c=n(127),f=n(124);var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"handleRefreshPage",value:function(){this.props.fetchUpdatedStatus(),this.props.fetchUpdatedEntry()}},{key:"render",value:function(){var e=this,t=this.props,n=t.authFetchFinished,r=t.authFetchFailed,a=t.statusFetchFinished,u=t.statusFetchFailed,i=t.loggedIn,c=t.showGraph,f=t.challenges,s=t.currentChallenge,d=f.length,p=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(f)).reverse();return o.default.createElement(l.Menu,{fixed:"top",inverted:!0},o.default.createElement(l.Container,null,o.default.createElement(l.Menu.Item,{header:!0,className:"app-name"},"180 days challenge"),n&&a&&!r&&!u&&o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Dropdown,{item:!0,icon:"cog",simple:!0,className:"right"},o.default.createElement(l.Dropdown.Menu,null,p.map(function(t,n){return o.default.createElement(l.Dropdown.Item,{onClick:function(){return e.props.changeCurrentChallenge(t.identifier,f),!0},key:n},t.identifier===s.identifier?o.default.createElement("strong",null,"Challenge #"+(d-n)):o.default.createElement("span",null,"Challenge #"+(d-n)))}))),o.default.createElement(l.Menu.Item,{icon:!0,onClick:this.props.toggleShowGraph},c?o.default.createElement(l.Icon,{name:"list"}):o.default.createElement(l.Icon,{name:"chart line"})),o.default.createElement(o.default.Fragment,null,i?o.default.createElement(o.default.Fragment,null,s.progress.active&&o.default.createElement(l.Menu.Item,{icon:!0,onClick:this.props.toggleDisplayModalEntry},o.default.createElement(l.Icon,{name:"plus"}))):o.default.createElement(l.Menu.Item,{icon:!0,onClick:this.props.toggleDisplayModalAuth},o.default.createElement(l.Icon,{name:"lock"})))),o.default.createElement(l.Menu.Item,{icon:!0,onClick:this.handleRefreshPage,className:"menu-refresh "+(n&&a&&!r&&!u?"":"right")},o.default.createElement(l.Icon,{name:"refresh"}))))}}]),t}(),d={toggleDisplayModalAuth:i.toggleDisplayModalAuth,toggleDisplayModalEntry:i.toggleDisplayModalEntry,fetchUpdatedStatus:c.fetchUpdatedStatus,fetchUpdatedEntry:f.fetchUpdatedEntry,toggleShowGraph:i.toggleShowGraph,changeCurrentChallenge:i.changeCurrentChallenge};t.default=(0,u.connect)(function(e){var t=e.auth,n=e.status,r=e.display;return{authFetchFinished:t.fetchFinished,authFetchFailed:t.fetchFailed,statusFetchFinished:n.fetchFinished,statusFetchFailed:n.fetchFailed,loggedIn:t.loggedIn,showGraph:r.showGraph,currentChallenge:r.currentChallenge,challenges:n.statuses}},d)(s)},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GraphComponent=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=i(a),u=i(n(299)),l=n(182);function i(e){return e&&e.__esModule?e:{default:e}}t.GraphComponent=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.challenge,n=e.entries,r=t.progress,a=t.date_start,i=t.date_end,c=r.active,f=r.days_since_start,s=r.tick,d=c?f:(0,l.calculateTotalDays)(a,i),p=(0,l.parseProgressDataSet)(n,a,d),h=(0,l.parseGrowthDataSet)(d,s),E={chart:{type:"area"},title:null,plotOptions:{area:{stacking:!0,lineWidth:0,shadow:!1,marker:{enabled:!1},enableMouseTracking:!1,showInLegend:!1},line:{zIndex:5,marker:{enabled:!1}}},yAxis:{title:null},series:[{showInLegend:!1,type:"line",color:"#555",data:p},{showInLegend:!1,type:"line",color:"#55e",data:h},{fillColor:"#5e5",data:(0,l.parseArea)(p,h)},{fillColor:"#e55",data:(0,l.parseArea)(h,p)},{fillColor:"rgba(255,255,255,0)",data:(0,l.parseTransparent)(p,h)}]};return o.default.createElement(u.default,{config:E,ref:"chart"})}}]),t}()},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(300);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.statusFetched,n=e.entriesFetched,r=e.currentChallenge,a=e.challenges;if(!t||!n)return null;var u=a.find(function(e){return e.identifier===r.identifier}).entries;return o.default.createElement(l.Container,{className:"graph-container top-container"},o.default.createElement(i.GraphComponent,{challenge:r,entries:u}))}}]),t}();t.default=(0,u.connect)(function(e){var t=e.status,n=e.entry,r=e.display;return{statusFetched:t.fetchFinished,entriesFetched:n.fetchFinished,currentChallenge:r.currentChallenge,challenges:n.entries}})(c)},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RingComponent=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.RingComponent=function(e){var t=e.target,n=e.entries;return r.default.createElement("div",{className:"ring"},r.default.createElement("span",null,n," / ",t.toFixed(2)))}},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(302);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.fetchStarted,n=e.fetchFinished,r=e.fetchError,a=(e.statuses,e.currentChallenge);if(t&&!n)return o.default.createElement("div",{className:"ui segment"},o.default.createElement("div",{className:"ui active inverted dimmer"},o.default.createElement("div",{className:"ui text loader"},"Loading")));if(r)return o.default.createElement("p",null,"Error");var u=a.entries,c=a.target,f=a.progress,s=f.on_schedule,d=f.schedule_limit,p=f.active,h=f.successful;return p?o.default.createElement("div",{className:"status-component "+(s?"status-component-good":"status-component-bad")},o.default.createElement(l.Header,{as:"h1"},s?"You are ahead!":"You are behind"),o.default.createElement(i.RingComponent,{target:d,entries:u})):o.default.createElement("div",{className:"status-component "+(h?"status-component-good":"status-component-bad")},o.default.createElement(l.Header,{as:"h1"},h?"The challenge was successful!":"The challenge was failed"),o.default.createElement(i.RingComponent,{target:c,entries:u}))}}]),t}();t.default=(0,u.connect)(function(e){var t=e.status,n=e.display;return{fetchStarted:t.fetchStarted,fetchFinished:t.fetchFinished,fetchError:t.fetchError,statuses:t.statuses,currentChallenge:n.currentChallenge}})(c)},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=c(a),u=n(33),l=n(41),i=c(n(303));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return this.props.fetchFinished?o.default.createElement(l.Container,{className:"status-container top-container"},o.default.createElement(i.default,null)):null}}]),t}();t.default=(0,u.connect)(function(e){return{fetchFinished:e.status.fetchFinished}})(f)},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InfoRowComponent=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.InfoRowComponent=function(e){var t=e.label,n=e.text;return r.default.createElement("div",{className:"info-row"},r.default.createElement("div",{className:"info-label"},r.default.createElement("p",null,t)),r.default.createElement("div",{className:"info-value"},r.default.createElement("p",null,n)))}},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(305);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.entryFetchFinished,n=e.statusFetchFinished,r=e.entryFetchFailed,a=e.statusFetchFailed,u=e.currentChallenge;if(t&&n&&!r&&!a){var c=u.progress,f=u.date_start,s=u.date_end,d=u.entries,p=u.target,h=c.active,E=c.days_since_start,_=c.days_remaining,y=c.schedule_limit;return h?o.default.createElement(l.Segment,{inverted:!0,className:"info-container"},o.default.createElement(i.InfoRowComponent,{label:"Days since start",text:E}),o.default.createElement(i.InfoRowComponent,{label:"Days remaining",text:_}),o.default.createElement(i.InfoRowComponent,{label:"Entries",text:d}),o.default.createElement(i.InfoRowComponent,{label:"Target",text:p}),o.default.createElement(i.InfoRowComponent,{label:"Progress",text:y.toFixed(2)}),o.default.createElement(i.InfoRowComponent,{label:"Challenge started",text:f}),o.default.createElement(i.InfoRowComponent,{label:"Challenge end",text:s})):o.default.createElement(l.Segment,{inverted:!0,className:"info-container"},o.default.createElement(i.InfoRowComponent,{label:"Entries",text:d}),o.default.createElement(i.InfoRowComponent,{label:"Target",text:p}),o.default.createElement(i.InfoRowComponent,{label:"Challenge started",text:f}),o.default.createElement(i.InfoRowComponent,{label:"Challenge end",text:s}))}return null}}]),t}();t.default=(0,u.connect)(function(e){var t=e.status,n=e.entry,r=e.display;return{entryFetchFinished:n.fetchFinished,statusFetchFinished:t.fetchFinished,entryFetchFailed:n.fetchFailed,statusFetchFailed:t.fetchFailed,currentChallenge:r.currentChallenge}})(c)},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(33),l=n(41),i=n(182);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.entryFetchFinished,n=e.statusFetchFinished,r=e.entryFetchFailed,a=e.statusFetchFailed,u=e.challenges,c=e.currentChallenge;if(t&&n&&!r&&!a){var f=u.find(function(e){return e.identifier===c.identifier}).entries;return o.default.createElement(l.Segment,{className:"entry-container"},o.default.createElement("div",{className:"entries"},f.map(function(e){return o.default.createElement("div",{key:e.id,className:"entry"},o.default.createElement("strong",null,(0,i.formatEntryDate)(e.added)),o.default.createElement("p",null,e.comment||o.default.createElement("i",null,"No comment")))})))}return null}}]),t}();t.default=(0,u.connect)(function(e){var t=e.entry,n=e.status,r=e.display;return{entryFetchFinished:t.fetchFinished,statusFetchFinished:n.fetchFinished,entryFetchFailed:t.fetchFailed,statusFetchFailed:n.fetchFailed,challenges:t.entries,currentChallenge:r.currentChallenge}})(c)},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),o=y(a),u=n(33),l=y(n(526)),i=y(n(306)),c=y(n(304)),f=y(n(301)),s=y(n(297)),d=y(n(296)),p=y(n(295)),h=n(180),E=n(124),_=n(127);function y(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchAuth(),this.props.fetchInitialStatus(),this.props.fetchInitialEntry()}},{key:"render",value:function(){var e=this.props,t=e.showModalAuth,n=e.showModalEntry,r=e.showGraph;return o.default.createElement("div",null,t&&o.default.createElement(d.default,null),n&&o.default.createElement(p.default,null),o.default.createElement(s.default,null),r?o.default.createElement(f.default,null):o.default.createElement(o.default.Fragment,null,o.default.createElement(c.default,null),o.default.createElement(i.default,null),o.default.createElement(l.default,null)))}}]),t}(),T={fetchAuth:h.fetchAuth,fetchInitialStatus:_.fetchInitialStatus,fetchInitialEntry:E.fetchInitialEntry};t.default=(0,u.connect)(function(e){var t=e.display;return{showModalAuth:t.showModalAuth,showModalEntry:t.showModalEntry,showGraph:t.showGraph}},T)(m)},543:function(e,t,n){"use strict";var r=i(n(1)),a=i(n(82)),o=n(33),u=i(n(527)),l=i(n(294));function i(e){return e&&e.__esModule?e:{default:e}}n(286);var c=window.__INITIAL_STATE__,f=(0,l.default)(c);a.default.render(r.default.createElement(o.Provider,{store:f},r.default.createElement(u.default,null)),document.getElementById("app"))},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AUTH_TOGGLE_DISPLAY_MODAL="AUTH_TOGGLE_DISPLAY_MODAL",t.ENTRY_TOGGLE_DISPLAY_MODAL="ENTRY_TOGGLE_DISPLAY_MODAL",t.AUTH_HIDE_DISPLAY_MODAL="AUTH_HIDE_DISPLAY_MODAL",t.ENTRY_HIDE_DISPLAY_MODAL="ENTRY_HIDE_DISPLAY_MODAL",t.UPDATE_AUTH_VALUE="UPDATE_AUTH_VALUE",t.UPDATE_ENTRY_VALUE="UPDATE_ENTRY_VALUE",t.TOGGLE_SHOW_GRAPH="TOGGLE_SHOW_GRAPH",t.CHANGE_CURRENT_CHALLENGE="CHANGE_CURRENT_CHALLENGE"}});