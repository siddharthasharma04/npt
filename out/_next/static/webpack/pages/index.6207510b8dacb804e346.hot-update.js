/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/clock/clock.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/clock/clock.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".clock_clock__2vh7v {\\n  position: relative;\\n  width: 200px;\\n  height: 200px;\\n  background: #dcc06d;\\n  margin: 40px auto 0;\\n  border-radius: 50%;\\n  border: 8px solid #bb9a3a;\\n  -webkit-box-shadow: 0 0 8px 3px rgba(33, 33, 33, 0.4) inset;\\n          box-shadow: 0 0 8px 3px rgba(33, 33, 33, 0.4) inset;\\n}\\n.clock_clock__2vh7v img {\\n  position: absolute;\\n  top: calc(50% - 50px);\\n  left: calc(50% - 40px);\\n  width: 80px;\\n}\\n.clock_clock__2vh7v .clock_min__3POxa, .clock_clock__2vh7v .clock_sec__YdeDU {\\n  width: 8px;\\n  background: #8f731d;\\n  border-radius: 8px;\\n  position: absolute;\\n  top: 50%;\\n  left: calc(50% - 4px);\\n  -webkit-transform-origin: top;\\n          transform-origin: top;\\n  z-index: 5;\\n}\\n.clock_clock__2vh7v .clock_min__3POxa {\\n  height: 60px;\\n  -webkit-animation: clock_spin__xsqlV 30s linear infinite;\\n          animation: clock_spin__xsqlV 30s linear infinite;\\n}\\n.clock_clock__2vh7v .clock_sec__YdeDU {\\n  height: 80px;\\n  -webkit-animation: clock_spin__xsqlV 6s linear infinite;\\n          animation: clock_spin__xsqlV 6s linear infinite;\\n}\\n@-webkit-keyframes clock_spin__xsqlV {\\n  0% {\\n    -webkit-transform: rotate(-180deg);\\n            transform: rotate(-180deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(180deg);\\n            transform: rotate(180deg);\\n  }\\n}\\n@keyframes clock_spin__xsqlV {\\n  0% {\\n    -webkit-transform: rotate(-180deg);\\n            transform: rotate(-180deg);\\n  }\\n  100% {\\n    -webkit-transform: rotate(180deg);\\n            transform: rotate(180deg);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://clock.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACA,2DAAA;UAAA,mDAAA;AACJ;AAAI;EACI,kBAAA;EACJ,qBAAA;EACA,sBAAA;EACA,WAAA;AAEJ;AAAI;EACI,UAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,qBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,UAAA;AAER;AAAI;EACI,YAAA;EACA,wDAAA;UAAA,gDAAA;AAER;AAAI;EACI,YAAA;EACA,uDAAA;UAAA,+CAAA;AAER;AAAI;EACI;IACI,kCAAA;YAAA,0BAAA;EAEV;EAAM;IACI,iCAAA;YAAA,yBAAA;EAEV;AACF;AARI;EACI;IACI,kCAAA;YAAA,0BAAA;EAEV;EAAM;IACI,iCAAA;YAAA,yBAAA;EAEV;AACF\",\"sourcesContent\":[\".clock{\\n    position: relative;\\n    width: 200px;\\n    height: 200px;\\n    background: #dcc06d;\\n    margin: 40px auto 0;\\n    border-radius: 50%;\\n    border: 8px solid #bb9a3a;\\n    box-shadow: 0 0 8px 3px rgba($color: #212121, $alpha: 0.4) inset;\\n    img{\\n        position: absolute;\\n    top: calc(50% - 50px);\\n    left: calc(50% - 40px);\\n    width: 80px;\\n    }\\n    .min,.sec{\\n        width: 8px;\\n        background: #8f731d;\\n        border-radius: 8px;\\n        position: absolute;\\n        top: 50%;\\n        left: calc(50% - 4px);\\n        transform-origin: top;\\n        z-index: 5;\\n    }\\n    .min{\\n        height: 60px;\\n        animation: spin 30s linear infinite;\\n    }\\n    .sec{\\n        height: 80px;\\n        animation: spin 6s linear infinite;\\n    }\\n    @keyframes spin {\\n        0% {\\n            transform: rotate(-180deg)\\n        }\\n        100% {\\n            transform: rotate(180deg)\\n        }\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"clock\": \"clock_clock__2vh7v\",\n\t\"min\": \"clock_min__3POxa\",\n\t\"sec\": \"clock_sec__YdeDU\",\n\t\"spin\": \"clock_spin__xsqlV\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Nsb2NrL2Nsb2NrLm1vZHVsZS5zY3NzPzFmMmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLCtEQUErRCx1QkFBdUIsaUJBQWlCLGtCQUFrQix3QkFBd0Isd0JBQXdCLHVCQUF1Qiw4QkFBOEIsZ0VBQWdFLGdFQUFnRSxHQUFHLDJCQUEyQix1QkFBdUIsMEJBQTBCLDJCQUEyQixnQkFBZ0IsR0FBRyxnRkFBZ0YsZUFBZSx3QkFBd0IsdUJBQXVCLHVCQUF1QixhQUFhLDBCQUEwQixrQ0FBa0Msa0NBQWtDLGVBQWUsR0FBRyx5Q0FBeUMsaUJBQWlCLDZEQUE2RCw2REFBNkQsR0FBRyx5Q0FBeUMsaUJBQWlCLDREQUE0RCw0REFBNEQsR0FBRyx3Q0FBd0MsUUFBUSx5Q0FBeUMseUNBQXlDLEtBQUssVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssR0FBRyxnQ0FBZ0MsUUFBUSx5Q0FBeUMseUNBQXlDLEtBQUssVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssR0FBRyxPQUFPLGtGQUFrRixXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssZ0NBQWdDLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQiwwQkFBMEIseUJBQXlCLGdDQUFnQyx1RUFBdUUsVUFBVSw2QkFBNkIsNEJBQTRCLDZCQUE2QixrQkFBa0IsT0FBTyxnQkFBZ0IscUJBQXFCLDhCQUE4Qiw2QkFBNkIsNkJBQTZCLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLHFCQUFxQixPQUFPLFdBQVcsdUJBQXVCLDhDQUE4QyxPQUFPLFdBQVcsdUJBQXVCLDZDQUE2QyxPQUFPLHVCQUF1QixjQUFjLG1EQUFtRCxnQkFBZ0Isa0RBQWtELE9BQU8sR0FBRyxtQkFBbUI7QUFDamxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2NvbXBvbmVudC9jbG9jay9jbG9jay5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jbG9ja19jbG9ja19fMnZoN3Yge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNkY2MwNmQ7XFxuICBtYXJnaW46IDQwcHggYXV0byAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiA4cHggc29saWQgI2JiOWEzYTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAzcHggcmdiYSgzMywgMzMsIDMzLCAwLjQpIGluc2V0O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDNweCByZ2JhKDMzLCAzMywgMzMsIDAuNCkgaW5zZXQ7XFxufVxcbi5jbG9ja19jbG9ja19fMnZoN3YgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XFxuICB3aWR0aDogODBweDtcXG59XFxuLmNsb2NrX2Nsb2NrX18ydmg3diAuY2xvY2tfbWluX18zUE94YSwgLmNsb2NrX2Nsb2NrX18ydmg3diAuY2xvY2tfc2VjX19ZZGVEVSB7XFxuICB3aWR0aDogOHB4O1xcbiAgYmFja2dyb3VuZDogIzhmNzMxZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gIHotaW5kZXg6IDU7XFxufVxcbi5jbG9ja19jbG9ja19fMnZoN3YgLmNsb2NrX21pbl9fM1BPeGEge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGNsb2NrX3NwaW5fX3hzcWxWIDMwcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogY2xvY2tfc3Bpbl9feHNxbFYgMzBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLmNsb2NrX2Nsb2NrX18ydmg3diAuY2xvY2tfc2VjX19ZZGVEVSB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2xvY2tfc3Bpbl9feHNxbFYgNnMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IGNsb2NrX3NwaW5fX3hzcWxWIDZzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNsb2NrX3NwaW5fX3hzcWxWIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjbG9ja19zcGluX194c3FsViB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jbG9jay5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDSixxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLFVBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QUFFUjtBQUFJO0VBQ0k7SUFDSSxrQ0FBQTtZQUFBLDBCQUFBO0VBRVY7RUFBTTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUFFVjtBQUNGO0FBUkk7RUFDSTtJQUNJLGtDQUFBO1lBQUEsMEJBQUE7RUFFVjtFQUFNO0lBQ0ksaUNBQUE7WUFBQSx5QkFBQTtFQUVWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNsb2Nre1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogI2RjYzA2ZDtcXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjYmI5YTNhO1xcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDNweCByZ2JhKCRjb2xvcjogIzIxMjEyMSwgJGFscGhhOiAwLjQpIGluc2V0O1xcbiAgICBpbWd7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIH1cXG4gICAgLm1pbiwuc2Vje1xcbiAgICAgICAgd2lkdGg6IDhweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM4ZjczMWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgIH1cXG4gICAgLm1pbntcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAzMHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB9XFxuICAgIC5zZWN7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICBhbmltYXRpb246IHNwaW4gNnMgbGluZWFyIGluZmluaXRlO1xcbiAgICB9XFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZylcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjbG9ja1wiOiBcImNsb2NrX2Nsb2NrX18ydmg3dlwiLFxuXHRcIm1pblwiOiBcImNsb2NrX21pbl9fM1BPeGFcIixcblx0XCJzZWNcIjogXCJjbG9ja19zZWNfX1lkZURVXCIsXG5cdFwic3BpblwiOiBcImNsb2NrX3NwaW5fX3hzcWxWXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/clock/clock.module.scss\n");

/***/ })

});