"use strict";(self.webpackChunkmoonbitz_website=self.webpackChunkmoonbitz_website||[]).push([[544],{6307:function(t,i,e){e.r(i),e.d(i,{default:function(){return Z}});e(7294);var s=e(5111),a=e(1721),h=function(){function t(t,i){this.p5=t,this.tokenData=i,this.hash=i.generationHash,this.owner=i.owner,this.name=i.metadata.name,this.rarity=i.rarity,this.createdAt=i.createdAt,this.thumb=i.metadata.thumbnailUri,this.origWidth=36,this.origHeight=36,this.width=this.origWidth,this.height=this.origHeight,this.x=0,this.y=0,this.direction=1}var i=t.prototype;return i.setId=function(t){this.id=t},i.setImageData=function(t){this.imageData=t},i.setHoverPosition=function(t,i){this.hoverX=t,this.hoverY=i},i.setHoverSize=function(t,i){this.hoverW=t,this.hoverH=i},i.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},i.setAttributes=function(t){this.attributes=t,this.setImages()},i.setImages=function(){var t;t=this.attributes.findIndex((function(t){return"body"===t.name})),this.bodyFill=this.imageData.bodyFill[this.attributes[t].value-1],this.body=this.imageData.body[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"eyes"===t.name})),this.eyes=this.imageData.eyes[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"mouth"===t.name})),this.mouth=this.imageData.mouth[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"hair"===t.name})),this.hair=this.imageData.hair[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"extra"===t.name})),this.extra=this.imageData.extra[this.attributes[t].value-1]},i.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},i.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t},i.isHovered=function(t,i){return t>this.x-this.width/2&&t<this.x+this.width/2&&i>this.y-this.height/2&&i<this.y+this.height/2},i.setPosition=function(t,i){this.x=t,this.y=i},i.display=function(t){t.push(),!0===this.hover&&t.tint(200,255,100),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},t}(),o=function(){function t(t){switch(this.createdAt=t.createdAt,this.name=t.metadata.name,this.owner=t.owner,this.rarity=t.rarity,this.attributes=t.metadata.attributes,this.basic=[null!==this.owner.name?"I am "+this.name+".\nDid my owner call me?\n"+this.owner.name+"?":"I am "+this.name+".\nDoes my owner have a name?","I was created on "+new Date(this.createdAt).toLocaleDateString()+".",null!==this.rarity?"I am "+Math.floor(100*this.rarity)+"% rare, so they say.":"I don't know my rarity. That's ok."],this.options=["Who's on my head?","I don't want to take my helmet off yet.","I had a scary dream. Wait, was it a dream?","I can see better because my eye is big.","Who woke me up? I need more sleep.","I'm the coolest Octo in this room!","GM! Thanks for waking me up.","This is ketchup... it's not what you think it is...","Should I keep my beard? Hmm...","I think I drank too much last night.","I'm hungry. I don't want to talk."],this.special=[],this.attributes[4].value){case 1:case 2:this.special.push(this.options[0]);break;case 3:case 4:case 5:this.special.push(this.options[1])}switch(this.attributes[1].value){case 2:case 23:this.special.push(this.options[2]);break;case 24:this.special.push(this.options[3]);break;case 7:case 14:this.special.push(this.options[4]);break;case 20:case 21:case 22:this.special.push(this.options[5])}switch(this.attributes[2].value){case 9:case 13:this.special.push(this.options[6]);break;case 15:this.special.push(this.options[7]);break;case 16:case 17:this.special.push(this.options[8]);break;case 18:this.special.push(this.options[9]);break;case 6:this.special.push(this.options[10])}}var i=t.prototype;return i.getDialogueBasic=function(){return this.basic},i.getDialogueSpecial=function(){return this.special},t}(),n=e(3136),r=function(t){function i(i,e){var s;return(s=t.call(this,i,e)||this).dialogueIndex=-1,s}(0,a.Z)(i,t);var e=i.prototype;return e.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},e.setupDialogue=function(){var t=new o(this.tokenData);this.dialogue=t.getDialogueBasic().concat(t.getDialogueSpecial()),this.dialogue=(0,n.TV)(this.dialogue)},e.randomizeDialogueIndex=function(){this.dialogueIndex=Math.floor(this.p5.random(this.dialogue.length))},e.advanceDialogueIndex=function(){this.dialogueIndex++,this.dialogueIndex>=this.dialogue.length&&(this.dialogueIndex=0)},e.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},e.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t},e.displayDialogue=function(t){this.p5.push(),this.p5.translate(0,.8*this.p5.height),this.p5.fill(0),this.p5.rect(0,.1*this.p5.height,this.p5.width,.1*this.p5.height),this.p5.image(this.img,-.02*this.p5.width,0,.25*this.p5.width,.25*this.p5.width),this.p5.push(),this.p5.translate(.2*this.p5.width,-.01*this.p5.height),this.p5.fill(255),this.p5.noStroke(),this.p5.rect(0,0,.75*this.p5.width,.18*this.p5.height,.01*this.p5.width),this.p5.beginShape(),this.p5.vertex(.02*-this.p5.width,.15*this.p5.height),this.p5.vertex(0,.12*this.p5.height),this.p5.vertex(0,.14*this.p5.height),this.p5.endShape(),this.p5.fill(0),this.p5.textSize(.03*this.p5.height),this.p5.textAlign(this.p5.LEFT),this.p5.text(this.dialogue[this.dialogueIndex],.01*this.p5.width,.008*this.p5.height,.75*this.p5.width,.2*this.p5.height),this.p5.pop(),this.p5.pop()},e.display=function(t){t.push(),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},i}(h),p=function(){function t(t){this.p5=t;var i=this.p5.random(50,70),e=this.p5.random(50,70);this.pos=t.createVector(i,e),this.life=this.p5.random(1,4)}var i=t.prototype;return i.update=function(t){this.pos.add(0,-t*this.p5.random(1,8)),this.life-=t,(this.pos.y<30||this.life<=0)&&(this.pos.x=this.p5.random(50,70),this.pos.y=this.p5.random(50,70),this.life=this.p5.random(1,4))},i.display=function(t){t.push(),t.translate(Math.floor(this.pos.x)+.5,Math.floor(this.pos.y)+.5);var i=this.p5.map(this.life,4,0,255,0);t.stroke(255,i),t.point(0,0),t.pop()},t}();function l(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,i){if(!t)return;if("string"==typeof t)return u(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,i)}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,s=new Array(i);e<i;e++)s[e]=t[e];return s}var c,d,g,m,f,b,v,w,y,I=function(){function t(t){this.p5=t,this.dt=0,this.transitionElapsed=0,this.angle=0,this.hover=!1,this.hoverX=0,this.hoverY=0,this.hoverW=0,this.hoverH=0,this.hoverTint=this.p5.color(255),this.cableTint=this.p5.color(0),this.waterAlpha=1,this.capsuleTopAlpha=1,this.octoReady=!1,this.state="sleep",this.bubbles=[];for(var i=0;i<12;i++){var e=new p(t);this.bubbles.push(e)}}var i=t.prototype;return i.setId=function(t){this.id=t},i.setImages=function(t){this.imgs=t},i.setOcto=function(t){this.octo=t},i.setPosition=function(t,i){this.x=t,this.y=i},i.setHoverPosition=function(t,i){this.hoverX=t,this.hoverY=i},i.setHoverSize=function(t,i){this.hoverW=t,this.hoverH=i},i.updateDeltaTime=function(t){this.dt=t},i.setGlobalTint=function(t){this.globalTint=t},i.setWaterWhite=function(t){this.waterWhiteAlpha=t},i.setWaterGlow=function(t){this.waterGlow=5,this.waterGlowAlpha=t},i.setState=function(t){this.state=t},i.setCableTint=function(t){this.cableTint=t},i.fillWater=function(t){this.waterFilled=t},i.removeTop=function(t){this.capsuleTopOff=t},i.update=function(){this.angle+=this.dt;for(var t,i=l(this.bubbles);!(t=i()).done;){t.value.update(this.dt)}if("transition1"===this.state){this.transitionElapsed+=this.dt,this.transitionDuration=1;var e=this.transitionElapsed/this.transitionDuration,s=(0,n.mv)(e,"easeInCubic"),a=this.p5.lerp(10,150,s),h=this.p5.lerp(0,200,s),o=this.p5.lerp(120,250,s),r=this.p5.lerp(0,255,s);this.setGlobalTint(a),this.setWaterWhite(h),this.setWaterGlow(o),this.setCableTint(this.p5.color(r)),this.transitionElapsed>=this.transitionDuration&&(this.transitionElapsed=0,this.transitionDuration=1,this.state="transition2")}else if("transition2"===this.state){this.transitionElapsed+=this.dt;var p=this.transitionElapsed/this.transitionDuration,u=(0,n.mv)(p,"easeOutCubic"),c=this.p5.lerp(150,250,u);this.waterAlpha=this.p5.lerp(1,0,u),this.capsuleTopAlpha=this.p5.lerp(1,0,u),this.octoReady=!0,this.setGlobalTint(c),this.transitionElapsed>=this.transitionDuration&&(this.state="awake",this.waterFilled=!1,this.capsuleTopOff=!0)}else this.state},i.reset=function(){this.hoverTint=this.p5.color(255)},i.display=function(t){var i=this.imgs,e=i.capsuleBottomImg,s=i.capsuleTopImg,a=i.waterImg,h=i.waterWhiteImg,o=i.reflectionImg,n=i.cableImg,r=i.sleepOctoImg;if(t.push(),t.translate(this.x,this.y),t.tint(this.globalTint),t.image(e,0,0),this.hover&&(t.push(),t.blendMode(this.p5.SCREEN),t.noStroke(),t.fill(250*Math.abs(Math.sin(1*this.angle)),200,0),t.rect(59.5,78.5,3,3),t.pop()),t.push(),"awake"!==this.state?t.translate(Math.ceil(1*this.p5.sin(this.y*this.id+.5*this.angle)),Math.ceil(1.4*this.p5.sin(this.y*this.id+1*this.angle))):t.translate(0,2),this.hover&&t.tint(this.hoverTint),this.octo&&this.octoReady?this.octo.display(t):t.image(r,0,0),t.pop(),!0===this.waterFilled){t.push(),t.drawingContext.globalAlpha=this.waterAlpha,t.blendMode(this.p5.BLEND),t.tint(255,120),t.image(a,0,0);for(var p,u=l(this.bubbles);!(p=u()).done;){p.value.display(t)}t.blendMode(this.p5.SCREEN),t.tint(255,this.waterWhiteAlpha),t.image(h,0,0),t.blendMode(this.p5.SCREEN),t.tint(255,this.waterGlowAlpha),t.drawingContext.filter="blur("+this.waterGlow+"px)",t.image(a,0,0),t.drawingContext.filter="none",t.pop()}!1===this.capsuleTopOff&&(t.push(),t.drawingContext.globalAlpha=this.capsuleTopAlpha,t.tint(255),t.image(s,0,0),t.image(o,0,0),t.pop()),t.blendMode(this.p5.BLEND),t.tint(this.cableTint),t.image(n,0,0),t.tint(255),t.pop(),t.blendMode(this.p5.BLEND)},t}(),x="HashOctoz-Play-Wakeup",D="/assets",k="/assets/images-wakeup",T={},W=[],A=120,E=120,S=1,C=[],H=!1,M=null,O=!1,G=!1,P=!1,R=[[61,55],[61,55],[61,55]],z=[],F=[[-32,-80],[0,-64],[32,-48],[64,-32],[-64,-32],[-32,-16],[0,0],[32,16],[-64,32],[-32,48]],N=[[20,27],[52,42],[84,59]],B=[[17,26],[17,26],[17,26]];function X(t){t.updateWithProps=function(t){},t.preload=function(t){return function(){(0,n.Iv)(5164).then((function(t){W=t.data.generativeToken.entireCollection,W=(0,n.TV)(W),O=!0,console.log("collectionData:",W)})),W=(0,n.TV)(W),console.log("collectionData:",W),T=(0,n.EC)(t,D),d=t.loadImage(k+"/floor.png"),g=t.loadImage(k+"/capsule-bottom.png"),m=t.loadImage(k+"/capsule-top.png"),f=t.loadImage(k+"/water-2.png"),b=t.loadImage(k+"/water-white.png"),v=t.loadImage(k+"/reflection.png"),w=t.loadImage(k+"/cable.png"),y=t.loadImage(k+"/octo.png")}}(t),t.setup=function(t,i){return function(){var i=j(t,A,E,t.windowWidth,t.windowHeight);t.createCanvas(i.w,i.h),t.frameRate(30),t.noSmooth(),t.textFont("PressStart2P"),(c=t.createGraphics(120,120)).pixelDensity(1),c.textFont("PressStart2P"),c.textSize(8)}}(t),t.draw=function(t){return function(){if(t.background(0,0,0),t.fill(255),t.textSize(.05*t.width),t.textAlign(t.CENTER),t.text("loading",t.width/2,t.height/2),t.cursor(t.ARROW),function(t){if(!O)return;if(O&&!H){for(var i=0,e=0;e<W.length;e++)if(W[e].metadata&&W[e].metadata.attributes&&i<3){var s=new r(t,W[e]);s.setImageData(T),s.flipDirection(),s.setAttributes(W[e].metadata.attributes);var a=R[i][0],h=R[i][1];s.setPosition(a,h),s.direction=t.random(1)<.5?-1:1,s.createOctoGraphics(),s.createOctoImage(),C.push(s),i++}for(var o=0;o<10;o++){var n=new I(t);n.setId(o),n.setImages({capsuleBottomImg:g,capsuleTopImg:m,waterImg:f,waterWhiteImg:b,reflectionImg:v,cableImg:w,sleepOctoImg:y});var p=F[o][0],l=F[o][1];n.setPosition(p,l),o>=5&&o<=7?(n.setOcto(C[o-5]),n.octo.setupDialogue(),n.setHoverPosition(N[o-5][0],N[o-5][1]),n.setHoverSize(B[o-5][0],B[o-5][1])):n.setOcto(null),n.setCableTint(t.color(0)),n.fillWater(!0),n.removeTop(!1),n.setGlobalTint(10),n.setWaterWhite(0),n.setWaterGlow(120),z.push(n)}H=!0}}(t),H){var i=.001*t.deltaTime;i,c.background(0,0,0);for(var e=7;e>=5;e--){if(Y(t,z[e],t.mouseX,t.mouseY,S)){t.cursor(t.HAND),z[e].hover=!0,z[e].octo.hover=!0;break}z[e].hover=!1,z[e].octo.hover=!1,z[e].reset()}c.push(),c.tint(150),c.image(d,0,0),c.pop();for(var s=0;s<z.length;s++){var a=z[s];a.updateDeltaTime(i),a.update(),a.display(c)}for(var h=7;h>=5;h--)z[h].reset();if(t.push(),t.image(c,0,0,t.width,t.height),t.pop(),P&&M.displayDialogue(c),G)(0,n.mc)(t,[c],8,A,E).save(x),G=!1}}}(t),t.mouseReleased=L(t),t.keyTyped=function(t){return function(){"s"===t.key&&(G=!0)}}(t),t.windowResized=function(t,i){return function(){var i=j(t,A,E,t.windowWidth,t.windowHeight);t.resizeCanvas(i.w,i.h)}}(t)}function Y(t,i,e,s,a){return e/a>=i.hoverX&&e/a<i.hoverX+i.hoverW&&s/a>=i.hoverY&&s/a<i.hoverY+i.hoverH}function j(t,i,e,s,a){var h,o;return s>a?h=(o=e*(S=Math.floor(a/e*1)))*(i/e):o=(h=i*(S=Math.floor(s/i*1)))*(e/i),{w:h=Math.max(h,i),h:o=Math.max(o,e)}}function L(t){return function(){for(var i=7;i>=5;i--){var e=z[i];if(Y(0,e,t.mouseX,t.mouseY,S)){"sleep"===e.state?e.state="transition1":"awake"===e.state&&(P=!0,(M=e.octo).advanceDialogueIndex(),M.displayDialogue(c));break}}M&&!1===M.hover&&(P=!1,M=null)}}var V=e(5508),U=e(3431),Z=function(){return(0,U.jsx)(s.Z,{title:"HashOctoz Play: Wake Up",background:"#333"},(0,U.jsx)(V.Z,{sketch:X}))}}}]);
//# sourceMappingURL=component---src-pages-hashoctoz-play-wakeup-index-js-e9bef5689cc2bf65e698.js.map