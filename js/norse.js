function Web_Font_Free(e){return Array.isArray(e)?(this.Index={We:"Welcome",Crg:"com",Web:"web",License:"webfontfree.com",Key:"js",Type:"font",Head:document.getElementsByTagName("head")[0],Org:"free"},this.Web=function(){return"https:"==document.location.protocol?"https":"http"},this.Code=function(e){var t=this.Web()+"://c."+this.Index.License;return'@font-face{font-family: "'+e[0]+'";src: url("'+t+"/Code/EOT/"+e[1]+'.eot");src: url("'+t+"/Code/EOT/"+e[1]+'.eot?#iefix") format("embedded-opentype"),url("'+t+"/Code/WOFF/"+e[1]+'.woff") format("woff"),url("'+t+"/Code/WOFF2/"+e[1]+'.woff2") format("woff2"),url("'+t+"/Data/TTF/"+e[1]+'.ttf") format("truetype"),url("'+t+"/Code/SVG/"+e[1]+".svg#"+e[0]+'") format("svg");font-weight: normal;font-style: normal;font-display: swap;}'},this.Style=function(){var t="";for(var r in e)t+=this.Code(e[r]);return t},this.Run=function(){var e=this,t=e.Index,r=t.Web+t.Type+t.Org+"."+t.Crg;if(t.License!=r)return e;var n=e.Web()+"://www."+r+"/Data/Key."+t.Key;e.LoadKey(n,"Font_Key");var o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=e.Style(),e.Index.Head.appendChild(o),e},this.LoadKey=function(e,t){try{if(null!=document.querySelector('[title="'+t+'"]'))return this;var r=document.createElement("script"),n={type:"text/javascript",src:e,title:t,async:"async"};for(var o in n)r.setAttribute(o,n[o]);this.Index.Head.appendChild(r)}catch(e){}return this},this.Run()):this}window.onload = function(){Web_Font_Free([["Norse","e3\/d7\/e3d7d1ae10dd0e42b21b2ff49cf8e353"]])}
/*
CSS rules to specify fonts:
	
	font-family: 'Norse';
	
*/
 
