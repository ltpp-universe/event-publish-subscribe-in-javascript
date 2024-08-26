var t=new(function(){function t(){this.event_map=new Map}return t.prototype.add=function(t,n){void 0===n&&(n=function(){});var e=this.event_map.get(t);(null==e?void 0:e.length)?e.push(n):this.event_map.set(t,[n])},t}());export{t as event_listener};
//# sourceMappingURL=bundle.esm.js.map
