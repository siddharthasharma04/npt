(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{6156:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,{Z:function(){return t}})},6071:function(e,n,r){"use strict";var t=r(3038),a=r(862);n.default=void 0;var o=a(r(7294)),i=r(1689),c=r(2441),s=r(5749),l={};function u(e,n,r,t){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var n=(0,i.resolveHref)(a,e.href,!0),r=t(n,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,j=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=o.Children.only(h),g=x&&"object"===typeof x&&x.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),_=t(y,2),N=_[0],w=_[1],O=o.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,o.useEffect)((function(){var e=w&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof b?b:r&&r.locale,a=l[d+"%"+p+(t?"%"+t:"")];e&&!a&&u(r,d,p,{locale:t})}),[p,d,w,b,n,r]);var C={ref:O,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=t.indexOf("#")<0),n[a?"replace":"push"](r,t,{shallow:o,locale:s,scroll:c}))}(e,r,d,p,v,m,j,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var E="undefined"!==typeof b?b:r&&r.locale,P=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,E,r&&r.locales,r&&r.domainLocales);C.href=P||(0,i.addBasePath)((0,i.addLocale)(p,E,r&&r.defaultLocale))}return o.default.cloneElement(x,C)};n.default=f},5749:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=t(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(7294),o=r(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3938:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var t=r(5893),a=r(6156);r(4428);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(1664),s=r(7294),l=r(6020),u=r.n(l),f=function(){return(0,t.jsxs)("div",{className:u().wrap,role:"img","aria-label":"NPS TRADERS (developing era)",children:[(0,t.jsx)("div",{className:"".concat(u().img),children:(0,t.jsx)("img",{src:"assets/images/logo/logo-icon.svg",alt:"Logo","aria-hidden":"true"})}),(0,t.jsxs)("div",{className:"".concat(u().content),"aria-hidden":"true",children:[(0,t.jsx)("span",{className:"".concat(u().main),children:"NP TRADERS"}),(0,t.jsx)("span",{className:u().small,children:"developing era"})]})]})},d=JSON.parse('{"t":[{"name":"Home","href":"/"},{"name":"About","href":"/"},{"name":"Products","href":"/"},{"name":"Blogs","href":"/"},{"name":"Top Deals","href":"/"}]}'),p=function(){var e=(0,s.useState)(!1),n=e[0],r=e[1],a=d.t;return(0,t.jsx)("header",{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"logo-container",children:(0,t.jsx)(c.default,{href:"/",children:(0,t.jsx)("a",{className:"nav-link",children:(0,t.jsx)(f,{})})})}),(0,t.jsxs)("nav",{"aria-label":"Main Navigation",children:[(0,t.jsx)("button",{"aria-controls":"main-nav",onClick:o,className:"nav-btn".concat(n?" open":""),"aria-label":"".concat(n?"Close":"Open"," Navigation"),children:i(Array(3)).map((function(e,n){return(0,t.jsx)("span",{className:"bar"},n)}))}),(0,t.jsx)("div",{id:"main-nav",className:"nav-aside".concat(n?" open":""),tabIndex:n?0:-1,children:(0,t.jsx)("ul",{className:"navbar",children:a.map((function(e,n){return(0,t.jsx)("li",{onClick:o,className:"nav-item",children:(0,t.jsx)(c.default,{href:e.href,children:(0,t.jsx)("a",{className:"nav-link",children:e.name})})},n)}))})})]})]})});function o(e){r(!n)}},h=r(1931),v=r.n(h),m=function(){return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{className:v().inner,children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row ".concat(v().top),children:[(0,t.jsxs)("nav",{className:"col-4","aria-labelledby":"com-ser",children:[(0,t.jsx)("h3",{id:"com-ser",children:"Customer Services"}),(0,t.jsxs)("ul",{className:v().navbar,children:[(0,t.jsx)("li",{children:"Help Center"}),(0,t.jsx)("li",{children:"Get Started with us"}),(0,t.jsx)("li",{children:"FAQs"}),(0,t.jsx)("li",{children:"Claims"}),(0,t.jsx)("li",{children:"Change Delivery"})]})]}),(0,t.jsxs)("nav",{className:"col-4",children:[(0,t.jsx)("h3",{children:"This Site"}),(0,t.jsxs)("ul",{className:v().navbar,children:[(0,t.jsx)("li",{children:"Store"}),(0,t.jsx)("li",{children:"Tracking"}),(0,t.jsx)("li",{children:"Products"}),(0,t.jsx)("li",{children:"Support"}),(0,t.jsx)("li",{children:"Profiling"})]})]}),(0,t.jsxs)("nav",{className:"col-4",children:[(0,t.jsx)("h3",{children:"Company Info"}),(0,t.jsxs)("ul",{className:v().navbar,children:[(0,t.jsx)("li",{children:"About NPS Traders"}),(0,t.jsx)("li",{children:"Media Relations"}),(0,t.jsx)("li",{children:"Investor Relations"}),(0,t.jsx)("li",{children:"Career"}),(0,t.jsx)("li",{children:"Community"})]})]})]}),(0,t.jsx)("div",{className:v().bottom,children:(0,t.jsx)("p",{className:"text-center",children:"\xa9 2021"})})]})})})};function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var x=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)(p,{}),(0,t.jsx)(n,b({},r)),(0,t.jsx)(m,{})]})}},6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3938)}])},1931:function(e){e.exports={inner:"footer_inner__1XXxM",top:"footer_top__2bUYY",bottom:"footer_bottom__2-fUI",navbar:"footer_navbar__3sfRn"}},6020:function(e){e.exports={wrap:"logo_wrap__LiwIo",img:"logo_img__2K9dE",content:"logo_content__RfcKI",main:"logo_main__x7v1J",small:"logo_small__2FucQ"}},4428:function(){},1664:function(e,n,r){e.exports=r(6071)},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,597],(function(){return n(6363),n(2441)}));var r=e.O();_N_E=r}]);