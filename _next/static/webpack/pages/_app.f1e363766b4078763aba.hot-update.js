/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/footer/footer.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/footer/footer.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".footer_inner__1XXxM {\\n  background-color: #212121;\\n  color: #fff;\\n}\\n\\n.footer_top__2bUYY {\\n  border-bottom: 1px solid #666;\\n  padding: 10px;\\n}\\n\\n.footer_bottom__2-fUI {\\n  padding: 10px;\\n}\\n.footer_bottom__2-fUI * {\\n  margin: 0;\\n}\\n\\n@media (max-width: 991.98px) {\\n  .footer_navbar__3sfRn {\\n    display: none;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://footer.module.scss\",\"webpack://../../styles/abstract/mixins/_media_query.scss\"],\"names\":[],\"mappings\":\"AACA;EACI,yBAAA;EACA,WAAA;AAAJ;;AAEA;EACI,6BAAA;EACA,aAAA;AACJ;;AACA;EACI,aAAA;AAEJ;AADI;EACI,SAAA;AAGR;;ACsEI;EDrEJ;IAEQ,aAAA;EAEN;AACF\",\"sourcesContent\":[\"@use '../../styles/abstract' as var;\\r\\n.inner{\\r\\n    background-color: #212121;\\r\\n    color: #fff;\\r\\n}\\r\\n.top{\\r\\n    border-bottom: 1px solid var.$dark-grey;\\r\\n    padding:10px;\\r\\n}\\r\\n.bottom{\\r\\n    padding:10px;\\r\\n    *{\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n}\\r\\n.navbar{\\r\\n    @include var.media-breakpoint-down(md){\\r\\n        display: none;\\r\\n    }\\r\\n}\\r\\n\\r\\n\",\"@use \\\"sass:list\\\";\\n@use \\\"sass:map\\\";\\n// @use \\\"../variables\\\";\\n\\n$grid-breakpoints: (\\n  xs: 0,\\n  sm: 320px, //added for old code compatibility\\n  md: 620px,\\n  lg: 992px,\\n  xl: 1600px\\n) !default;\\n\\n// Breakpoint viewport sizes and media queries.\\n//\\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\\n//\\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\\n//\\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\\n\\n// Name of the next breakpoint, or null for the last breakpoint.\\n//\\n//    >> breakpoint-next(sm)\\n//    md\\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    md\\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\\n//    md\\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map.keys($breakpoints)) {\\n  $n: list.index($breakpoint-names, $name);\\n  @return if($n != null and $n < list.length($breakpoint-names), list.nth($breakpoint-names, $n + 1), null);\\n}\\n\\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\\n//\\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    576px\\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\\n  $min: map.get($breakpoints, $name);\\n  @return if($min != 0, $min, null);\\n}\\n\\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\\n// The maximum value is calculated as the minimum of the next one less 0.02px\\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\\n//\\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    767.98px\\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\\n  $next: breakpoint-next($name, $breakpoints);\\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\\n}\\n\\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\\n// Useful for making responsive utilities.\\n//\\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\\"\\\"  (Returns a blank string)\\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\\"-sm\\\"\\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\\n  @return if(breakpoint-min($name, $breakpoints) == null, \\\"\\\", \\\"-#{$name}\\\");\\n}\\n\\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\\n// Makes the @content apply to the given breakpoint and wider.\\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($name, $breakpoints);\\n  @if $min {\\n    @media (min-width: $min) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\\n// Makes the @content apply to the given breakpoint and narrower.\\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\\n  $max: breakpoint-max($name, $breakpoints);\\n  @if $max {\\n    @media (max-width: $max) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media that spans multiple breakpoint widths.\\n// Makes the @content apply between the min and max breakpoints\\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($lower, $breakpoints);\\n  $max: breakpoint-max($upper, $breakpoints);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($lower, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($upper, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n\\n// Media between the breakpoint's minimum and maximum widths.\\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($name, $breakpoints);\\n  $max: breakpoint-max($name, $breakpoints);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($name, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($name, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"inner\": \"footer_inner__1XXxM\",\n\t\"top\": \"footer_top__2bUYY\",\n\t\"bottom\": \"footer_bottom__2-fUI\",\n\t\"navbar\": \"footer_navbar__3sfRn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3M/MTExNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsZ0VBQWdFLDhCQUE4QixnQkFBZ0IsR0FBRyx3QkFBd0Isa0NBQWtDLGtCQUFrQixHQUFHLDJCQUEyQixrQkFBa0IsR0FBRywyQkFBMkIsY0FBYyxHQUFHLGtDQUFrQywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRyxPQUFPLDhJQUE4SSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQUssNkRBQTZELFdBQVcsa0NBQWtDLG9CQUFvQixLQUFLLFNBQVMsZ0RBQWdELHFCQUFxQixLQUFLLFlBQVkscUJBQXFCLFVBQVUsc0JBQXNCLFNBQVMsU0FBUyxZQUFZLCtDQUErQywwQkFBMEIsU0FBUyxLQUFLLDhCQUE4QixvQkFBb0IsMkJBQTJCLDBJQUEwSSxrdEJBQWt0Qiw2Q0FBNkMsOEdBQThHLEdBQUcsa1BBQWtQLHVDQUF1QyxzQ0FBc0MsR0FBRyw2bUJBQTZtQixnREFBZ0QsdUVBQXVFLEdBQUcsMmJBQTJiLHVFQUF1RSxNQUFNLElBQUksR0FBRyxrT0FBa08sOENBQThDLGNBQWMsZ0NBQWdDLGlCQUFpQixPQUFPLEtBQUssUUFBUSxlQUFlLEtBQUssR0FBRyxxT0FBcU8sOENBQThDLGNBQWMsZ0NBQWdDLGlCQUFpQixPQUFPLEtBQUssUUFBUSxlQUFlLEtBQUssR0FBRyx3TUFBd00sK0NBQStDLCtDQUErQyx5Q0FBeUMsc0RBQXNELGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLDBEQUEwRCxpQkFBaUIsT0FBTyxLQUFLLHdCQUF3Qiw0REFBNEQsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLHlUQUF5VCw4Q0FBOEMsOENBQThDLHlDQUF5QyxzREFBc0QsaUJBQWlCLE9BQU8sS0FBSyx3QkFBd0IseURBQXlELGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLDJEQUEyRCxpQkFBaUIsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQ3Z4TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJfaW5uZXJfXzFYWHhNIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlcl90b3BfXzJiVVlZIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvb3Rlcl9ib3R0b21fXzItZlVJIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5mb290ZXJfYm90dG9tX18yLWZVSSAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuICAuZm9vdGVyX25hdmJhcl9fM3NmUm4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vZm9vdGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L21peGlucy9fbWVkaWFfcXVlcnkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7QUFESTtFQUNJLFNBQUE7QUFHUjs7QUNzRUk7RURyRUo7SUFFUSxhQUFBO0VBRU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuLi8uLi9zdHlsZXMvYWJzdHJhY3QnIGFzIHZhcjtcXHJcXG4uaW5uZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG4udG9we1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyLiRkYXJrLWdyZXk7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG59XFxyXFxuLmJvdHRvbXtcXHJcXG4gICAgcGFkZGluZzoxMHB4O1xcclxcbiAgICAqe1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi5uYXZiYXJ7XFxyXFxuICAgIEBpbmNsdWRlIHZhci5tZWRpYS1icmVha3BvaW50LWRvd24obWQpe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIixcIkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxuQHVzZSBcXFwic2FzczptYXBcXFwiO1xcbi8vIEB1c2UgXFxcIi4uL3ZhcmlhYmxlc1xcXCI7XFxuXFxuJGdyaWQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiAwLFxcbiAgc206IDMyMHB4LCAvL2FkZGVkIGZvciBvbGQgY29kZSBjb21wYXRpYmlsaXR5XFxuICBtZDogNjIwcHgsXFxuICBsZzogOTkycHgsXFxuICB4bDogMTYwMHB4XFxuKSAhZGVmYXVsdDtcXG5cXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxcbi8vXFxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxcbi8vXFxuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxcbi8vXFxuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0Llxcblxcbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cXG4vL1xcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcXG4vLyAgICBtZFxcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcXG4vLyAgICBtZFxcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXFxuLy8gICAgbWRcXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLmtleXMoJGJyZWFrcG9pbnRzKSkge1xcbiAgJG46IGxpc3QuaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcXG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsaXN0Lmxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIGxpc3QubnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcXG59XFxuXFxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50Llxcbi8vXFxuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXFxuLy8gICAgNTc2cHhcXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcXG4gICRtaW46IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XFxuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XFxufVxcblxcbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXFxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcXG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXFxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcXG4vL1xcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIDc2Ny45OHB4XFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xcbn1cXG5cXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250Llxcbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxcbi8vXFxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcXG4vLyAgICBcXFwiXFxcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXFxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcXG4vLyAgICBcXFwiLXNtXFxcIlxcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFxcXCJcXFwiLCBcXFwiLSN7JG5hbWV9XFxcIik7XFxufVxcblxcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcXG4gIEBpZiAkbWluIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfSBAZWxzZSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50Llxcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXFxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XFxuICBAaWYgJG1heCB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2Uge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XFxuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XFxuXFxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxcbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcXG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xcblxcbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbm5lclwiOiBcImZvb3Rlcl9pbm5lcl9fMVhYeE1cIixcblx0XCJ0b3BcIjogXCJmb290ZXJfdG9wX18yYlVZWVwiLFxuXHRcImJvdHRvbVwiOiBcImZvb3Rlcl9ib3R0b21fXzItZlVJXCIsXG5cdFwibmF2YmFyXCI6IFwiZm9vdGVyX25hdmJhcl9fM3NmUm5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./component/footer/footer.module.scss\n");

/***/ })

});