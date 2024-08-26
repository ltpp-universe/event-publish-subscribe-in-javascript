"use strict";var t=new(function(){function t(){this.event_map=new Map}return t.prototype.add=function(t,e){void 0===e&&(e=function(){});var n=this.event_map.get(t);(null==n?void 0:n.length)?n.push(e):this.event_map.set(t,[e])},t}());exports.event_listener=t;
//# sourceMappingURL=bundle.cjs.js.map
