//>>built
define("dojox/data/AndOrReadStore","dojo/_base/declare dojo/_base/lang dojo/data/ItemFileReadStore dojo/data/util/filter dojo/_base/array dojo/_base/json".split(" "),function(w,d,y,z,A,u){return w("dojox.data.AndOrReadStore",[y],{_containsValue:function(m,t,u,h){return A.some(this.getValues(m,t),function(c){if(d.isString(h))return eval(h);if(null!==c&&!d.isObject(c)&&h){if(c.toString().match(h))return!0}else return u===c?!0:!1})},filter:function(m,t,w){var h=[];if(m.query){var c=u.fromJson(u.toJson(m.query));
if("object"==typeof c){var a=0,g;for(g in c)a++;if(1<a&&c.complexQuery){var a=c.complexQuery,n=!1;for(g in c)if("complexQuery"!==g){n||(a="( "+a+" )",n=!0);var k=m.query[g];d.isString(k)&&(k="'"+k+"'");a+=" AND "+g+":"+k;delete c[g]}c.complexQuery=a}}g=m.queryOptions?m.queryOptions.ignoreCase:!1;"string"!=typeof c&&(c=u.toJson(c),c=c.replace(/\\\\/g,"\\"));var c=c.replace(/\\"/g,'"'),a=d.trim(c.replace(/{|}/g,"")),b;if(a.match(/"? *complexQuery *"?:/)){for(var a=d.trim(a.replace(/"?\s*complexQuery\s*"?:/,
"")),n=["'",'"'],r,p=!1,c=0;c<n.length;c++)if(k=a.indexOf(n[c]),b=a.indexOf(n[c],1),r=a.indexOf(":",1),0===k&&-1!=b&&r<b){p=!0;break}p&&(a=a.replace(/^\"|^\'|\"$|\'$/g,""))}n=a;k=/^>=|^<=|^<|^>|^,|^NOT |^AND |^OR |^\(|^\)|^!|^&&|^\|\|/i;b=r="";var e=-1,p=!1,x="",f="";b="";b=-1;for(c=0;c<t.length;++c){var l=!0,v=t[c];if(null===v)l=!1;else{a=n;for(r="";0<a.length&&!p;){for(b=a.match(k);b&&!p;)a=d.trim(a.replace(b[0],"")),b=d.trim(b[0]).toUpperCase(),b="NOT"==b?"!":"AND"==b||","==b?"\x26\x26":"OR"==
b?"||":b,b=" "+b+" ",r+=b,b=a.match(k);if(0<a.length)if(l=(b=a.match(/:|>=|<=|>|</g))&&b.shift(),e=a.indexOf(l),-1==e){p=!0;break}else{x=d.trim(a.substring(0,e).replace(/\"|\'/g,""));a=d.trim(a.substring(e+l.length));if(b=a.match(/^\'|^\"/)){b=b[0];e=a.indexOf(b);b=a.indexOf(b,e+1);if(-1==b){p=!0;break}f=a.substring(e+l.length,b);a=b==a.length-1?"":d.trim(a.substring(b+1))}else if(b=a.match(/\s|\)|,/)){for(var f=Array(b.length),q=0;q<b.length;q++)f[q]=a.indexOf(b[q]);e=f[0];if(1<f.length)for(q=1;q<
f.length;q++)e=Math.min(e,f[q]);f=d.trim(a.substring(0,e));a=d.trim(a.substring(e))}else f=d.trim(a),a="";b=":"!=l?this.getValue(v,x)+l+f:z.patternToRegExp(f,g);r+=this._containsValue(v,x,f,b)}}l=eval(r)}l&&h.push(v)}p&&(h=[])}else for(c=0;c<t.length;++c)g=t[c],null!==g&&h.push(g);w(h,m)}})});
//# sourceMappingURL=AndOrReadStore.js.map