(self.webpackChunkmoonbitz_website=self.webpackChunkmoonbitz_website||[]).push([[241],{4441:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var n=function(){function t(t,e){this.p5=t,this.tokenData=e,this.hash=e.generationHash,this.owner=e.owner,this.name=e.metadata.name,this.rarity=e.rarity,this.createdAt=e.createdAt,this.thumb=e.metadata.thumbnailUri,this.origWidth=36,this.origHeight=36,this.width=this.origWidth,this.height=this.origHeight,this.x=0,this.y=0,this.direction=1}var e=t.prototype;return e.setId=function(t){this.id=t},e.setTokenData=function(t){this.tokenData=t},e.setImageData=function(t){this.imageData=t},e.setHoverPosition=function(t,e){this.hoverX=t,this.hoverY=e},e.setHoverSize=function(t,e){this.hoverW=t,this.hoverH=e},e.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},e.setAttributes=function(t){this.attributes=t,this.setImages()},e.setImages=function(){var t;t=this.attributes.findIndex((function(t){return"body"===t.name})),this.bodyFill=this.imageData.bodyFill[this.attributes[t].value-1],this.body=this.imageData.body[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"eyes"===t.name})),this.eyes=this.imageData.eyes[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"mouth"===t.name})),this.mouth=this.imageData.mouth[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"hair"===t.name})),this.hair=this.imageData.hair[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"extra"===t.name})),this.extra=this.imageData.extra[this.attributes[t].value-1]},e.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},e.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t},e.isHovered=function(t,e){return t>this.x-this.width/2&&t<this.x+this.width/2&&e>this.y-this.height/2&&e<this.y+this.height/2},e.setPosition=function(t,e){this.x=t,this.y=e},e.display=function(t){t.push(),!0===this.hover&&t.tint(200,255,100),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},t}()},2442:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return J}});i(7294);var n,a,r,o,s,h,u,c,p,l=i(5111),f=i(7361),g=i.n(f),d=i(1721),v=i(4441),m=function(){function t(t){switch(this.createdAt=t.createdAt,this.name=t.metadata.name,this.owner=t.owner,this.rarity=t.rarity,this.attributes=t.metadata.attributes,this.basic=[null!==this.owner.name?"I am "+this.name+".\nDid my owner call me?\n"+this.owner.name+"?":"I am "+this.name+".\nDoes my owner have a name?"],this.special=[],this.attributes[4].value){case 1:this.special.push("I think something's growing on my head.");case 2:this.special.push("Who's on my head?\nIs that...you...?");break;case 3:this.special.push("I don't want to take my helmet off yet.");break;case 4:case 5:this.special.push("You gotta fill up my helmet.")}switch(this.attributes[1].value){case 2:this.special.push("There's something in my eyes. I'm not crying.");break;case 7:this.special.push("Why is everyone sleeping?");break;case 8:case 9:this.special.push("What..What happened?");break;case 13:this.special.push("Something's fishy about this place...");break;case 14:this.special.push("Who woke me up?");break;case 15:case 16:this.special.push("Are you my owner?");break;case 20:case 21:case 22:this.special.push("I'm the coolest Octo in this room! ");break;case 23:this.special.push("I had a scary dream. Or was it a dream?");break;case 24:this.special.push("I can see better because my eye is big. Don't cheat on me!")}switch(this.attributes[2].value){case 1:case 8:this.special.push("Time to go hunting!");break;case 6:this.special.push("I'm hungry. I don't want to talk.");break;case 9:case 13:this.special.push("GM! Thanks for waking me up.");break;case 15:this.special.push("This is ketchup... it's not what you think it is...");break;case 16:case 17:this.special.push("Should I keep my beard? Hmm...");break;case 18:this.special.push("I drank too much last night.")}}var e=t.prototype;return e.getDialogueBasic=function(){return this.basic},e.getDialogueSpecial=function(){return this.special},t}(),y=i(3136),b=function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).dialogueIndex=-1,n}(0,d.Z)(e,t);var i=e.prototype;return i.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},i.setupDialogue=function(){var t=new m(this.tokenData);this.dialogue=t.getDialogueBasic().concat(t.getDialogueSpecial()),this.dialogue=(0,y.TV)(this.dialogue)},i.randomizeDialogueIndex=function(){this.dialogueIndex=Math.floor(this.p5.random(this.dialogue.length))},i.advanceDialogueIndex=function(){this.dialogueIndex++,this.dialogueIndex>=this.dialogue.length&&(this.dialogueIndex=0)},i.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},i.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t},i.displayDialogue=function(t){this.p5.push(),this.p5.translate(0,.8*this.p5.height),this.p5.fill(0),this.p5.rect(0,.1*this.p5.height,this.p5.width,.1*this.p5.height),this.p5.image(this.img,-.02*this.p5.width,0,.25*this.p5.width,.25*this.p5.width),this.p5.push(),this.p5.translate(.2*this.p5.width,-.01*this.p5.height),this.p5.fill(255),this.p5.noStroke(),this.p5.rect(0,0,.75*this.p5.width,.18*this.p5.height,.01*this.p5.width),this.p5.beginShape(),this.p5.vertex(.02*-this.p5.width,.15*this.p5.height),this.p5.vertex(0,.12*this.p5.height),this.p5.vertex(0,.14*this.p5.height),this.p5.endShape(),this.p5.fill(0),this.p5.textSize(.03*this.p5.height),this.p5.textAlign(this.p5.LEFT),this.p5.text(this.dialogue[this.dialogueIndex],.01*this.p5.width,.008*this.p5.height,.75*this.p5.width,.2*this.p5.height),this.p5.pop(),this.p5.pop()},i.display=function(t){t.push(),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},e}(v.Z),x="HashOctoz-Play-BusStop",w="/assets",_="/assets/images-busstop",I={},k=[],D=220,O=220,j=1,S=[],T=!1,z=!1,A=!1,H=0,P=0,W=[[84,120],[110,120],[136,120],[122,25]],C=[],F=[],M=[],E=240,G=["#ffffff","#ffff00"],R=0,$={hoverX:1,hoverY:190,hoverW:28,hoverH:28},Y="sunset",X=0,N=[{name:"waiting",duration:.5,boat:{x:240}},{name:"boat in",duration:3.2,easeType:"easeOutQuint",boat:{x:240}},{name:"boat stop",duration:.1,boat:{x:20}},{name:"boat out",duration:1.5,easeType:"easeInQuint",boat:{x:20}},{name:"shark in",duration:2.5,boat:{x:-220}},{name:"shark out",duration:2.5,boat:{x:-220}}];function Z(t){t.updateWithProps=function(t){},t.preload=function(t){return function(){(0,y.Iv)(5164).then((function(t){k=t.data.generativeToken.entireCollection,k=(0,y.TV)(k),z=!0,console.log("collectionData:",k)}));for(var e=[],i=0;i<k.length;i++)k[i].metadata&&k[i].metadata.attributes||e.push(i);for(var n=e.length-1;n>=0;n--)k.splice(e[n],1);k=(0,y.TV)(k),console.log("collectionData:",k),I=(0,y.EC)(t,w),a=t.loadImage(_+"/bg.png"),r=t.loadImage(_+"/bg-cloud.png"),o=t.loadImage(_+"/bg-sun.png");for(var p=0;p<4;p++)C.push(t.loadImage(_+"/reflection-"+t.nf(p+1,2)+".png")),F.push(t.loadImage(_+"/front-reflection-"+t.nf(p+1,2)+".png"));for(var l=0;l<5;l++)M.push(t.loadImage(_+"/boat-reflection-"+t.nf(l+1,2)+".png"));s=t.loadImage(_+"/station.png"),h=t.loadImage(_+"/boat-fill.png"),u=t.loadImage(_+"/boat-line.png"),c=t.loadImage(_+"/button.png")}}(t),t.setup=function(t,e){return function(){var e=Q(t,D,O,t.windowWidth,t.windowHeight);t.createCanvas(e.w,e.h),t.frameRate(30),t.noSmooth(),t.textFont("PressStart2P"),(n=t.createGraphics(220,220)).pixelDensity(1),n.textFont("PressStart2P"),n.textSize(8)}}(t),t.draw=function(t){return function(){if(t.background(0,0,0),t.fill(255),t.textSize(.05*t.width),t.textAlign(t.CENTER),t.text("loading",t.width/2,t.height/2),t.cursor(t.ARROW),function(t){if(!z)return;if(z&&!T){for(var e=0;e<4;e++){var i=new b(t,k[e]);i.setImageData(I),i.flipDirection(),i.setAttributes(k[e].metadata.attributes);var n=W[e][0],a=W[e][1];i.setPosition(n,a),i.direction=t.random(1)<.5?-1:1,i.createOctoGraphics(),i.createOctoImage(),S.push(i)}p=t.color(255),T=!0}}(t),T){var e=.001*t.deltaTime;H+=e,(P+=e)>=N[X].duration&&(X++,P=0,X>=N.length-1&&(X=0));var i=N[X].duration,l=N[X].easeType;if(l||(l="linear"),E=Math.floor(function(t,e,i,n,a){if(!e[i+1])return;var r=g()(e[i],n),o=g()(e[i+1],n);return t.lerp(r,o,a)}(t,N,X,"boat.x",(0,y.mv)(P/i,l))),"boat stop"===N[X].name){k=(0,y.TV)(k);for(var f=0;f<3;f++){var d=S[f];d.setTokenData(k[f]),d.setAttributes(k[f].metadata.attributes),d.createOctoGraphics(),d.createOctoImage()}}else if("waiting"===N[X].name){var v=S[3];v.setTokenData(k[3]),v.setAttributes(k[3].metadata.attributes),v.createOctoGraphics(),v.createOctoImage(),p=G[R=(R+1)%G.length]}n.background(0,0,0),n.push(),"night"===Y&&n.tint(0,0,250),n.image(a,0,0),n.pop(),n.image(o,0,0),n.push(),n.blendMode(n.ADD),n.noStroke(),"sunset"===Y?(n.drawingContext.filter="blur(9px)",n.fill(255,220),n.ellipse(169,61,50,50)):(n.tint(255,255,0),n.image(o,0,0)),n.pop(),n.push(),"night"===Y&&n.tint(0,0,250),n.image(r,0,0),n.pop(),B(n,C,0,90,6),B(n,F,0,134,9),n.push(),n.blendMode(n.ADD),n.drawingContext.filter="blur(1px)",B(n,C,0,90,6),B(n,F,0,134,9),n.pop(),n.image(s,0,0);for(var m=0;m<3;m++){S[m].display(n)}if(n.push(),n.translate(E,40),S[3].display(n),B(n,M,0,110,6),n.push(),n.tint(p),"night"===Y&&n.tint(100,0,250),n.image(h,0,0),n.pop(),n.image(u,0,0),n.pop(),n.push(),V(t,$,t.mouseX,t.mouseY,j)&&(t.cursor(t.HAND),n.tint(0,255,0)),n.image(c,$.hoverX,$.hoverY),n.pop(),t.push(),t.image(n,0,0,t.width,t.height),t.pop(),A)(0,y.mc)(t,[n],8,D,O).save(x),A=!1}}}(t),t.mouseReleased=U(t),t.keyTyped=function(t){return function(){"s"===t.key&&(A=!0)," "===t.key&&(Y="sunset"===Y?"night":"sunset")}}(t),t.windowResized=function(t,e){return function(){var e=Q(t,D,O,t.windowWidth,t.windowHeight);t.resizeCanvas(e.w,e.h)}}(t)}function B(t,e,i,n,a){t.push(),t.translate(i,n),t.image(e[Math.floor(H*a)%e.length],0,0),t.pop()}function V(t,e,i,n,a){return i/a>=e.hoverX&&i/a<e.hoverX+e.hoverW&&n/a>=e.hoverY&&n/a<e.hoverY+e.hoverH}function Q(t,e,i,n,a){var r,o;return n>a?r=(o=i*(j=Math.floor(a/i*1)))*(e/i):o=(r=e*(j=Math.floor(n/e*1)))*(i/e),{w:r=Math.max(r,e),h:o=Math.max(o,i)}}function U(t){return function(){V(0,$,t.mouseX,t.mouseY,j)&&(Y="sunset"===Y?"night":"sunset")}}var L=i(5508),q=i(3431),J=function(){return(0,q.jsx)(l.Z,{title:"HashOctoz Play: Bus Stop",background:"#333"},(0,q.jsx)(L.Z,{sketch:Z}))}},1989:function(t,e,i){var n=i(1789),a=i(401),r=i(7667),o=i(1327),s=i(1866);function h(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=n,h.prototype.delete=a,h.prototype.get=r,h.prototype.has=o,h.prototype.set=s,t.exports=h},8407:function(t,e,i){var n=i(7040),a=i(4125),r=i(2117),o=i(7518),s=i(3399);function h(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=n,h.prototype.delete=a,h.prototype.get=r,h.prototype.has=o,h.prototype.set=s,t.exports=h},7071:function(t,e,i){var n=i(852)(i(5639),"Map");t.exports=n},3369:function(t,e,i){var n=i(4785),a=i(1285),r=i(6e3),o=i(9916),s=i(5265);function h(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}h.prototype.clear=n,h.prototype.delete=a,h.prototype.get=r,h.prototype.has=o,h.prototype.set=s,t.exports=h},2705:function(t,e,i){var n=i(5639).Symbol;t.exports=n},9932:function(t){t.exports=function(t,e){for(var i=-1,n=null==t?0:t.length,a=Array(n);++i<n;)a[i]=e(t[i],i,t);return a}},8470:function(t,e,i){var n=i(7813);t.exports=function(t,e){for(var i=t.length;i--;)if(n(t[i][0],e))return i;return-1}},7786:function(t,e,i){var n=i(1811),a=i(327);t.exports=function(t,e){for(var i=0,r=(e=n(e,t)).length;null!=t&&i<r;)t=t[a(e[i++])];return i&&i==r?t:void 0}},4239:function(t,e,i){var n=i(2705),a=i(9607),r=i(2333),o=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?a(t):r(t)}},8458:function(t,e,i){var n=i(3560),a=i(5346),r=i(3218),o=i(346),s=/^\[object .+?Constructor\]$/,h=Function.prototype,u=Object.prototype,c=h.toString,p=u.hasOwnProperty,l=RegExp("^"+c.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!r(t)||a(t))&&(n(t)?l:s).test(o(t))}},531:function(t,e,i){var n=i(2705),a=i(9932),r=i(1469),o=i(3448),s=n?n.prototype:void 0,h=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(r(e))return a(e,t)+"";if(o(e))return h?h.call(e):"";var i=e+"";return"0"==i&&1/e==-Infinity?"-0":i}},1811:function(t,e,i){var n=i(1469),a=i(5403),r=i(5514),o=i(9833);t.exports=function(t,e){return n(t)?t:a(t,e)?[t]:r(o(t))}},4429:function(t,e,i){var n=i(5639)["__core-js_shared__"];t.exports=n},1957:function(t,e,i){var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=n},5050:function(t,e,i){var n=i(7019);t.exports=function(t,e){var i=t.__data__;return n(e)?i["string"==typeof e?"string":"hash"]:i.map}},852:function(t,e,i){var n=i(8458),a=i(7801);t.exports=function(t,e){var i=a(t,e);return n(i)?i:void 0}},9607:function(t,e,i){var n=i(2705),a=Object.prototype,r=a.hasOwnProperty,o=a.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=r.call(t,s),i=t[s];try{t[s]=void 0;var n=!0}catch(h){}var a=o.call(t);return n&&(e?t[s]=i:delete t[s]),a}},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},1789:function(t,e,i){var n=i(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:function(t,e,i){var n=i(4536),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var i=e[t];return"__lodash_hash_undefined__"===i?void 0:i}return a.call(e,t)?e[t]:void 0}},1327:function(t,e,i){var n=i(4536),a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:a.call(e,t)}},1866:function(t,e,i){var n=i(4536);t.exports=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},5403:function(t,e,i){var n=i(1469),a=i(3448),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!a(t))||(o.test(t)||!r.test(t)||null!=e&&t in Object(e))}},7019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:function(t,e,i){var n,a=i(4429),r=(n=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!r&&r in t}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,e,i){var n=i(8470),a=Array.prototype.splice;t.exports=function(t){var e=this.__data__,i=n(e,t);return!(i<0)&&(i==e.length-1?e.pop():a.call(e,i,1),--this.size,!0)}},2117:function(t,e,i){var n=i(8470);t.exports=function(t){var e=this.__data__,i=n(e,t);return i<0?void 0:e[i][1]}},7518:function(t,e,i){var n=i(8470);t.exports=function(t){return n(this.__data__,t)>-1}},3399:function(t,e,i){var n=i(8470);t.exports=function(t,e){var i=this.__data__,a=n(i,t);return a<0?(++this.size,i.push([t,e])):i[a][1]=e,this}},4785:function(t,e,i){var n=i(1989),a=i(8407),r=i(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(r||a),string:new n}}},1285:function(t,e,i){var n=i(5050);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},6e3:function(t,e,i){var n=i(5050);t.exports=function(t){return n(this,t).get(t)}},9916:function(t,e,i){var n=i(5050);t.exports=function(t){return n(this,t).has(t)}},5265:function(t,e,i){var n=i(5050);t.exports=function(t,e){var i=n(this,t),a=i.size;return i.set(t,e),this.size+=i.size==a?0:1,this}},4523:function(t,e,i){var n=i(8306);t.exports=function(t){var e=n(t,(function(t){return 500===i.size&&i.clear(),t})),i=e.cache;return e}},4536:function(t,e,i){var n=i(852)(Object,"create");t.exports=n},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,i){var n=i(1957),a="object"==typeof self&&self&&self.Object===Object&&self,r=n||a||Function("return this")();t.exports=r},5514:function(t,e,i){var n=i(4523),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,o=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(a,(function(t,i,n,a){e.push(n?a.replace(r,"$1"):i||t)})),e}));t.exports=o},327:function(t,e,i){var n=i(3448);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(i){}try{return t+""}catch(i){}}return""}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},7361:function(t,e,i){var n=i(7786);t.exports=function(t,e,i){var a=null==t?void 0:n(t,e);return void 0===a?i:a}},1469:function(t){var e=Array.isArray;t.exports=e},3560:function(t,e,i){var n=i(4239),a=i(3218);t.exports=function(t){if(!a(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,i){var n=i(4239),a=i(7005);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==n(t)}},8306:function(t,e,i){var n=i(3369);function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var i=function(){var n=arguments,a=e?e.apply(this,n):n[0],r=i.cache;if(r.has(a))return r.get(a);var o=t.apply(this,n);return i.cache=r.set(a,o)||r,o};return i.cache=new(a.Cache||n),i}a.Cache=n,t.exports=a},9833:function(t,e,i){var n=i(531);t.exports=function(t){return null==t?"":n(t)}}}]);
//# sourceMappingURL=component---src-pages-hashoctoz-play-busstop-index-js-4baf3bd06fbdaef4a1ce.js.map