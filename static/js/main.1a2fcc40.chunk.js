(this["webpackJsonpcymbal.live"]=this["webpackJsonpcymbal.live"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),o=(n(17),n(18),n(9)),u=n(1),s=n.n(u),l=n(7),h=n(2),p=n(3),f=n(5),m=n(6),v=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.show;return a.a.createElement("h1",null,"LIVE: ".concat(e.artist))}}]),n}(a.a.Component),w=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.shows;return a.a.createElement("div",null,a.a.createElement("h1",null,"Coming up..."),e.map((function(e){return a.a.createElement("p",{key:e.hashCode},e.time.toString(),e.artist,a.a.createElement("a",{href:e.link,target:"_blank"},"link"))})))}}]),n}(a.a.Component),d=n(8),b=n.n(d),y=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,[{key:"getShows",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch();case 2:return t=e.sent,n=this.parse(t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("2020-03-22.txt");case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)}))))},{key:"parse",value:function(e){var t=this,n=e.split("\n"),r=[];return n.map((function(e){var n=e.split("||");if(n&&!(n.length<3)&&t.datetimeParseable(n[1])){var a={artist:n[0],time:t.momentize(n[1]),link:n[2],hashCode:t.hash(e)};r.push(a)}})),r}},{key:"datetimeParseable",value:function(e){try{return b()(e).isValid()}catch(t){console.error("Cannot parse this weird date => ".concat(e))}}},{key:"momentize",value:function(e){return b()(e)}},{key:"hash",value:function(e){var t,n=0;for(t=0;t<this.length;t++)n=(n<<5)-n+this.charCodeAt(t),n|=0;return n}}]),e}(),k=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={nowPlaying:"Check back soon!",shows:[]},r}return Object(p.a)(n,[{key:"_getUpcomingShows",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y,e.next=3,t.getShows();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getUpcomingShows();case 2:if((t=e.sent)&&Array.isArray(t)&&!(t.length<1)){e.next=5;break}return e.abrupt("return");case 5:this.setState({nowPlaying:t[0],shows:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(v,{show:this.state.nowPlaying}),a.a.createElement(w,{shows:this.state.shows}))}}]),n}(a.a.Component);var g=function(){return o.a.initialize("UA-161532154-1"),o.a.pageview(window.location.pathname+window.location.search),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h1",null,"cymbal.live")),a.a.createElement("div",null,"say hello"),a.a.createElement("div",null,"request feature"),a.a.createElement("div",null,"support"),a.a.createElement("div",null,a.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.1a2fcc40.chunk.js.map