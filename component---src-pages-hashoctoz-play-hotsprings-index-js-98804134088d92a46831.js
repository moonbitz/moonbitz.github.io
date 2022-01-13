"use strict";(self.webpackChunkmoonbitz_website=self.webpackChunkmoonbitz_website||[]).push([[217],{5981:function(t,i,e){e.r(i),e.d(i,{default:function(){return A}});e(7294);var a=e(3431),s=e(5111),h=e(1721),n=function(){function t(t,i){this.p5=t,this.tokenData=i,this.hash=i.generationHash,this.owner=i.owner,this.name=i.metadata.name,this.rarity=i.rarity,this.createdAt=i.createdAt,this.thumb=i.metadata.thumbnailUri,this.origWidth=36,this.origHeight=36,this.width=this.origWidth,this.height=this.origHeight,this.x=0,this.y=0,this.direction=1,this.setupDialogues()}var i=t.prototype;return i.setImageData=function(t){this.imageData=t},i.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},i.setAttributes=function(t){this.attributes=t,this.setImages()},i.setImages=function(){var t;t=this.attributes.findIndex((function(t){return"body"===t.name})),this.bodyFill=this.imageData.bodyFill[this.attributes[t].value-1],this.body=this.imageData.body[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"eyes"===t.name})),this.eyes=this.imageData.eyes[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"mouth"===t.name})),this.mouth=this.imageData.mouth[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"hair"===t.name})),this.hair=this.imageData.hair[this.attributes[t].value-1],t=this.attributes.findIndex((function(t){return"extra"===t.name})),this.extra=this.imageData.extra[this.attributes[t].value-1]},i.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},i.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t},i.isHovered=function(t,i){return t>this.x-this.width/2&&t<this.x+this.width/2&&i>this.y-this.height/2&&i<this.y+this.height/2},i.setPosition=function(t,i){this.x=t,this.y=i},i.display=function(t){t.push(),!0===this.hover&&t.tint(200,255,100),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},t}(),o=function(t){function i(i,e){var a;return(a=t.call(this,i,e)||this).setupDialogues(),a}(0,h.Z)(i,t);var e=i.prototype;return e.flipDirection=function(){this.direction*=-1,setTimeout(this.flipDirection.bind(this),this.p5.random(4e3,8e3))},e.setupDialogues=function(){this.dialogues=[null!==this.owner.name?"My owner is "+this.owner.name+".":"Does my owner have a name?",null!==this.rarity?"I am "+Math.floor(100*this.rarity)+"% rare, so they say.":"Wait, I don't know my rarity?","My name is "+this.name+".","I was created by Moonbitz.","Check out twitter @moonbitzzz.","I love hot springs.","I am a generative NFT.","Mint your own HashOctoz at www.fxhash.xyz","We are HashOctoz!","We live on the Tezos blockchain.","There will be 500 unique HashOctoz when fully minted.","I was created on "+new Date(this.createdAt).toLocaleDateString()+"."]},e.randomizeDialogueIndex=function(){this.dialogueIndex=Math.floor(this.p5.random(this.dialogues.length))},e.createOctoGraphics=function(){var t=this.p5.createGraphics(this.origWidth,this.origHeight);t.pixelDensity(1),t.image(this.bodyFill,0,0),t.image(this.body,0,0),t.image(this.eyes,0,0),t.image(this.mouth,0,0),this.hair&&t.image(this.hair,0,0),this.extra&&t.image(this.extra,0,0),this.pg=t},e.createOctoImage=function(){var t=this.p5.createImage(this.pg.width,this.pg.height);t.copy(this.pg,0,0,this.pg.width,this.pg.height,0,0,t.width,t.height),this.img=t;var i=this.pg.height;this.y>90?i=24:this.y>65&&(i=25),this.maskImg=this.generateMaskImg(i),this.img.mask(this.maskImg)},e.generateMaskImg=function(t){var i=t+Math.floor(this.p5.random(-2,2)),e=this.p5.createGraphics(36,36);return e.pixelDensity(1),e.fill(255),e.rect(0,0,e.width,i),e.fill(0,0,200,40),e.rect(0,i,e.width,e.height),e},e.displayDialogue=function(t){this.p5.push(),this.p5.translate(0,.8*this.p5.height),this.p5.fill(0),this.p5.rect(0,.1*this.p5.height,this.p5.width,.1*this.p5.height),this.p5.image(this.img,.01*this.p5.width,0,.2*this.p5.width,.2*this.p5.width),this.p5.push(),this.p5.translate(.2*this.p5.width,-.01*this.p5.height),this.p5.fill(255),this.p5.noStroke(),this.p5.rect(0,0,.75*this.p5.width,.18*this.p5.height,.01*this.p5.width),this.p5.beginShape(),this.p5.vertex(.02*-this.p5.width,.15*this.p5.height),this.p5.vertex(0,.12*this.p5.height),this.p5.vertex(0,.14*this.p5.height),this.p5.endShape(),this.p5.fill(0),this.p5.textSize(.04*this.p5.height),this.p5.textAlign(this.p5.LEFT),this.p5.text(this.dialogues[this.dialogueIndex],.01*this.p5.width,.008*this.p5.height,.75*this.p5.width,.2*this.p5.height),this.p5.pop(),this.p5.pop()},e.display=function(t){t.push(),!0===this.hover&&t.tint(200,255,100),t.translate(this.x,this.y),t.scale(this.direction,1),t.imageMode(this.p5.CENTER),t.image(this.img,0,0),t.pop()},i}(n);var r,g,u,d,l,p,c,m,f=!1,y=1,v=[],b=!1,w=null,x=!1,I=[[50,34],[134,46],[164,56],[60,74],[96,72],[132,78],[40,92],[80,96],[114,98],[160,92]],M=!1,D=[],k="/assets/images-hotsprings",z={body:[],bodyFill:[],eyes:[],mouth:[],hair:[],extra:[]},H=200,C=150;function S(t){t.updateWithProps=function(t){},t.preload=function(t){return function(){fetch("https://api.fxhash.xyz/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"{\n        generativeToken(id: 5164) {\n          entireCollection {\n            createdAt\n            iteration\n            metadata\n            owner {\n              id\n              name\n            }\n            rarity\n            generationHash\n          }\n        }\n      }\n      "})}).then((function(t){return t.json()})).then((function(t){D=function(t){for(var i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),a=[t[e],t[i]];t[i]=a[0],t[e]=a[1]}return t}(D=t.data.generativeToken.entireCollection),f=!0,console.log("collectionData:",D),console.log("\n============================================================\nHashOctoz Playground: Hot Springs by Moonbitz\n\nMint your own HashOctoz NFT at https://www.fxhash.xyz/generative/5164\nCheck out our twitter at https://twitter.com/moonbitzzz\n============================================================\n      ")}));for(var i=0,e=Object.entries(z);i<e.length;i++){var a=e[i][0];if("body"===a)for(var s=0;s<10;s++)z[a].push(t.loadImage("/assets/images-octo/"+a+"/"+t.nf(s+1,2)+".png")),z.bodyFill.push(t.loadImage("/assets/images-octo/body-fill/"+t.nf(s+1,2)+".png"));else if("eyes"===a)for(var h=0;h<24;h++)z[a].push(t.loadImage("/assets/images-octo/"+a+"/"+t.nf(h+1,2)+".png"));else if("mouth"===a)for(var n=0;n<18;n++)z[a].push(t.loadImage("/assets/images-octo/"+a+"/"+t.nf(n+1,2)+".png"));else if("hair"===a)for(var o=0;o<17;o++)z[a].push(t.loadImage("/assets/images-octo/"+a+"/"+t.nf(o+1,2)+".png"));else if("extra"===a)for(var r=0;r<6;r++)z[a].push(t.loadImage("/assets/images-octo/"+a+"/"+t.nf(r+1,2)+".png"))}g=t.loadImage(k+"/bg/bg.png"),u=t.loadImage(k+"/bg/fg.png"),d=t.loadImage(k+"/bg/stars.png"),l=t.loadImage(k+"/bg/sky.png"),(p=t.createGraphics(H,C)).pixelDensity(1),P(t,p,260),c=t.loadImage(k+"/bg/steam.png"),(m=t.createGraphics(H,C)).pixelDensity(1)}}(t),t.setup=function(t,i){return function(){var i=O(t,H,C,t.windowWidth,t.windowHeight);t.createCanvas(i.w,i.h),t.noSmooth(),(r=t.createGraphics(200,150)).pixelDensity(1),r.textFont("PressStart2P"),r.textSize(8)}}(t),t.draw=function(t){return function(){if(t.background(0,0,0),t.fill(255),t.textFont("PressStart2P"),t.textSize(.05*t.width),t.textAlign(t.CENTER),t.text("loading",t.width/2,t.height/2),t.cursor(t.ARROW),function(t){if(!f)return;if(f&&!b){for(var i=0,e=0;e<D.length;e++)if(D[e].metadata&&D[e].metadata.attributes&&i<10){var a=new o(t,D[e]);a.setImageData(z),a.flipDirection(),a.setAttributes(D[e].metadata.attributes);var s=I[i][0]+Math.floor(t.random(-1,1)),h=I[i][1]+Math.floor(t.random(-4,4));a.setPosition(s,h),a.direction=t.random(1)<.5?-1:1,a.createOctoGraphics(),a.createOctoImage(),v.push(a),i++}b=!0}}(t),b){r.background(0,0,0),r.image(l,0,0),r.image(d,0,0),r.blendMode(t.BLEND),r.image(g,0,0),t.frameCount%30==0&&P(t,p,260),r.blendMode(t.SCREEN),r.image(p,0,0),r.blendMode(t.BLEND);for(var i=0;i<v.length;i++){v[i].hover=!1}for(var e=v.length-1;e>=0;e--){var a=v[e];if(a.isHovered(t.mouseX/y,t.mouseY/y)){t.cursor(t.HAND),a.hover=!0;break}}for(var s=0;s<v.length;s++){v[s].display(r)}r.blendMode(t.SCREEN),function(t,i,e,a){void 0===e&&(e=1);void 0===a&&(a=1);i.clear(),i.background(160+90*Math.sin(t.frameCount/80),180+80*Math.sin(t.frameCount/60),200+50*Math.sin(t.frameCount/50)),i.loadPixels();for(var s=0;s<i.height;s++)for(var h=0;h<i.width;h++){var n=4*s*i.width+4*h;i.pixels[n+3]=255*t.noise(h*e+a,s*e+a,.01*t.frameCount)}i.updatePixels()}(t,m,.01,t.frameCount/100),r.image(m,0,0),r.blendMode(t.ADD);var h=t.frameCount/10%30*-1;r.tint(255,50*Math.sin(-h/30*Math.PI)),r.image(c,0,h);var n=t.frameCount/20%20*-1;if(r.tint(255,30*Math.sin(-n/20*Math.PI)),r.image(c,-20,n+20),r.tint(180,255),r.blendMode(t.BLEND),r.image(u,0,0),r.tint(255,255),t.image(r,0,0,t.width,t.height),x&&w.displayDialogue(r),M){var k=function(t,i,e,a,s){var h=t.createGraphics(a*e,s*e);h.colorMode(t.RGB),h.noStroke();for(var n=0;n<i.length;n++){i[n].loadPixels();for(var o=i[n].pixels,r=0;r<o.length;r+=4){var g=o[r],u=o[r+1],d=o[r+2],l=o[r+3],p=r/4%i[n].width,c=Math.floor(r/4/i[n].width);h.fill(g,u,d,l),h.rect(p*e,c*e,e,e)}}return h}(t,[r],8,H,C);k.save("HashOctoz-Playground-HotSprings.png"),M=!1}}}}(t),t.mousePressed=function(t){return function(){for(var i=v.length-1;i>=0;i--){var e=v[i];if(e.isHovered(t.mouseX/y,t.mouseY/y)){t.cursor(t.HAND),e.hover=!0,w=e;break}}w&&!0===w.hover?(x=!0,w.randomizeDialogueIndex()):(x=!1,w=null)}}(t),t.keyTyped=function(t){return function(){"s"===t.key&&(M=!0)}}(t),t.windowResized=function(t,i){return function(){var i=O(t,H,C,t.windowWidth,t.windowHeight);t.resizeCanvas(i.w,i.h)}}(t)}function O(t,i,e,a,s){var h,n;return a>s?h=(n=e*(y=Math.floor(s/e*1)))*(i/e):n=(h=i*(y=Math.floor(a/i*1)))*(e/i),{w:h=Math.max(h,i),h:n=Math.max(n,e)}}function P(t,i,e){i.clear();for(var a=100,s=93,h=0;h<e;h++){var n=Math.floor(a+Math.cos(h)*t.random(70))+.5,o=Math.floor(s+Math.sin(h)*t.random(20))+.5;i.stroke(50,t.random(40,170),240,80),i.line(n,o,n+t.random(8),o)}return i}var T=e(5508);var E={name:"12ctaqo",styles:"html,body{background:darkslateblue;}"};function A(){return(0,a.jsx)(s.Z,{title:"HashOctoz Play: Hot Springs"},(0,a.jsx)(a.Global,{styles:E}),(0,a.jsx)(T.Z,{sketch:S}))}}}]);
//# sourceMappingURL=component---src-pages-hashoctoz-play-hotsprings-index-js-98804134088d92a46831.js.map