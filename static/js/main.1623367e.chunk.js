(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(84)},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,n){},65:function(e,t){},82:function(e,t,n){e.exports=n.p+"static/media/sample.786c4bf0.jpg"},83:function(e,t,n){e.exports=n.p+"static/media/sample_video.82f43a96.MP4"},84:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),o=n(33),c=n.n(o),r=(n(42),n(5)),s=n(6),l=n(8),u=n(7),m=n(9),d=(n(43),n(44),n(21)),p=(n(81),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isEnd:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.videojs=d.a,this.player=Object(d.a)(this.videoNode,this.props,function(){console.log("onPlayerReady",this)}),this.player.on("on",function(){e.setState({isEnd:!1})}),this.player.on("ended",function(){e.setState({isEnd:!0}),e.player.exitFullscreen()})}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"video-content"},i.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js",crossOrigin:"anonymous"}),this.state.isEnd?i.a.createElement("div",{className:"end-screen-container"},i.a.createElement("div",null,i.a.createElement("h5",{class:"end-screen-title"},"Sample End screen..."),i.a.createElement("div",{class:"end-screen-items"},this.props.endScreenData.map(function(e){return i.a.createElement("div",{className:"end-screen-item"},i.a.createElement("img",{src:n(82),alt:e.name}),i.a.createElement("p",null,e.name))})))):"")}}]),t}(a.Component)),h=[{name:"sample1",img:"/sample.png",url:"url"},{name:"sample2",img:"/sample.png",url:"url"}],v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={autoplay:!0,controls:!0,sources:[{src:n(83),type:"video/mp4"}]};return i.a.createElement("div",null,"Sample Video :",i.a.createElement(p,Object.assign({},e,{endScreenData:h})))}}]),t}(a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(v,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.1623367e.chunk.js.map