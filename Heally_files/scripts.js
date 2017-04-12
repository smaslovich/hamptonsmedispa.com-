function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],o=0,r=e.length;r>o;o++)i=e[o],s.push(function(){var t,e,o,r;for(o=i.addedNodes||[],r=[],t=0,e=o.length;e>t;t++)n=o[t],r.push(this.doSync(n));return r}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,o=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},o.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),o.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;r=[];for(n in e)i=e[n],t[""+n]=i,r.push(function(){var e,r,s,l;for(s=this.vendors,l=[],e=0,r=s.length;r>e;e++)o=s[e],l.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i);return l}.call(this));return r},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(o=i(t),n=o.getPropertyCSSValue(e),a=this.vendors,s=0,l=a.length;l>s;s++)r=a[s],n=n||o.getPropertyCSSValue("-"+r+"-"+e);return n},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this),function(){var t=document.documentElement,e=document.getElementsByClassName("navbar-default")[0],n=50,i=!1,o=function(){window.addEventListener("scroll",function(t){i||(i=!0,setTimeout(r,250))})},r=function(){var t=s();t>=n?e.classList.add("navbar-scroll"):e.classList.remove("navbar-scroll"),i=!1},s=function(){return window.pageYOffset||t.scrollTop};o()}(),function(){function t(t){t.preventDefault();var n=t.currentTarget,i=document.querySelector(n.getAttribute("href"));e(i.offsetTop-70,300)}function e(t,n){if(!(0>=n)){var i=t-document.body.scrollTop,o=i/n*10;setTimeout(function(){document.body.scrollTop=document.body.scrollTop+o,document.body.scrollTop!==t&&e(t,n-10)},10)}}var n=document.querySelectorAll("a.page-scroll");n=[].slice.call(n),n.forEach(function(e){e.addEventListener("click",t,!1)})}(),(new WOW).init();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),ScrollSpy=function(){function t(e){_classCallCheck(this,t),this.options=e,this.selector=this.options.target+" .nav li > a",this.offsets=[],this.target=[],this.activeTarget=null,this.scrollHeight=0,document.addEventListener("touchmove",this.handleScroll.bind(this),!1),document.addEventListener("scroll",this.handleScroll.bind(this),!1)}return _createClass(t,[{key:"handleScroll",value:function(){var t=window.scrollY+this.options.offset,e=document.body.scrollHeight,n=this.options.offset+e-document.body.clientHeight,i=this.offsets,o=this.targets,r=this.activeTarget,s=void 0;if(this.scrollHeight!=e&&this.refresh(),t>=n)return r!=(s=o[o.length-1])&&this.activate(s);if(r&&t<i[0])return this.activeTarget=null,this.clear();for(var l=i.length;l--;)r!=o[l]&&t>=i[l]&&(void 0===i[l+1]||t<i[l+1])&&this.activate(o[l])}},{key:"refresh",value:function(){var t=this,e=0;this.offsets=[],this.targets=[],this.scrollHeight=document.body.scrollHeight;var n=document.body.querySelectorAll(this.selector);n=[].slice.call(n);var i=[];n.forEach(function(n){var o=n.getAttribute("href"),r=/^#./.test(o)&&document.querySelector(o),s=r&&!t.isHidden(r)&&[r.offsetTop+e,o]||null;s&&i.push(s)}),i.sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t.offsets.push(e[0]),t.targets.push(e[1])})}},{key:"isHidden",value:function(t){return null===t.offsetParent}},{key:"activate",value:function(t){this.activeTarget=t,this.clear();var e=this.selector+'[href="'+t+'"]',n=this.getParents(e,function(t){return"li"===t.tagName.toLowerCase()});n.forEach(function(t){t.classList.add("active")})}},{key:"clear",value:function(){var t=this.getParents(this.selector,function(t){return t.classList.contains("active")});t.forEach(function(t){t.classList.remove("active")})}},{key:"getParents",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?function(){return!0}:arguments[1],n=this.getArrayFromNodeList(document.querySelectorAll(t)),i=document.querySelector(this.options.target),o=[];return n.forEach(function(t){for(var n=t.parentNode;n;)n.isSameNode(i)?n=null:(e(n)&&o.push(n),n=n.parentNode)}),o}},{key:"getArrayFromNodeList",value:function(t){return[].slice.call(t)}}]),t}();!function(){new ScrollSpy({target:".navbar-fixed-top",offset:80})}();