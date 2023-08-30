(()=>{"use strict";var t={122:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([t.id,"* {\n\tfont-family: arial, sans-serif;\n\tpadding: 0;\n\tbox-sizing: inherit;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tposition: relative;\n\tmin-height: 100vh;\n\ttransition: all 0.3s;\n}\n",""]);const c=i},63:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([t.id,".bookle-logo {\n\tmax-width: 260px;\n\theight: auto;\n}\n",""]);const c=i},833:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([t.id,".bar {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin: 20px auto;\n\tpadding: 0 30px;\n\tborder-radius: 30px;\n\tborder: 1px solid #dcdcdc;\n}\n.bar:hover {\n\tbox-shadow: 1px 1px 8px 1px #dcdcdc;\n}\n.bar:focus-within {\n\tbox-shadow: 1px 1px 8px 1px #dcdcdc;\n\toutline: none;\n}\n.search-tool {\n\theight: 20px;\n\tline-height: 20px;\n\twidth: 20px;\n\tmargin-top: 3px;\n\tcolor: #9aa0a6;\n\tdisplay: inline-block;\n\tfill: currentColor;\n}\n\n.cancel-btn {\n\tcursor: pointer;\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.searchbar {\n\theight: 45px;\n\twidth: 100%;\n\tpadding: 0 10px;\n\tborder: none;\n\tfont-size: 16px;\n\toutline: none;\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var r={},i=[],c=0;c<t.length;c++){var s=t[c],l=a.base?s[0]+a.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var m=o(A,a);a.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=a(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var c=n(r[i]);e[c].references--}for(var s=a(t,o),l=0;l<r.length;l++){var d=n(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return t[a](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),a=n(795),o=n.n(a),r=n(569),i=n.n(r),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),A=n(122),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(A.Z,m),A.Z&&A.Z.locals&&A.Z.locals;var v=n(63),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var h=n(833),x={};x.styleTagTransform=p(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),e()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;const C=document.getElementById("main"),b=document.createElement("section");b.id="header";const g=document.createElement("section");g.classList="searchbar";const I=document.createElement("section");I.classList="results",b.appendChild(function(){const t=new Image;return t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABOCAYAAADGvGi0AAAc8ElEQVR4nO2deXiU1dn/v9/zzBO2BBAyCVIU9bUur+9LxSyAVplJAlWqti5QpVjrUm1xq9ZqW4OOEl77U6y+WrWVWqvWouLWuqBkmeBOFpVa+9aliisww5qwZWaec//+CCoJkzxnJjPJDM7nuri48sx9zvlm8sw9zznnPvcN5MiRI0eOHDlydIfxLvpr2n4FcHzaBye2ayCstISECDnCd56fV/B/6R43x8Aw9bq2o5XinN6t5MNg9fD/6R9FObrjiXuV6mQCJf0hQAGAIgjAQ8C/YMsnECyDlufadPtTrYGx2/pDR470oyweSvC83mwEbAWQcwgDhBpoAd0hMI7E2bT40Ai74H3f/C0/Kwl8NnSgdeXI8VUg4xxCV1isFBaOsAve99e0zx1oNTly7OlkuEP4HBaTvL2ipv2xkis3jBhoNTly7KlkiUPYCXnS8OF2i/+6jd8YaCk5cuyJxF9UzGAIHijK86KvZpO/sXpky0DryfHVofTBU8TNpuW0R+Pu3GUL2fWEsBOS+aT1zDcDbQcNtJYcOfYkstIhAABBr22r545eEN57oLXkyLGnkPSUQUT+B9p5rC+DxxQtj6BQwL1JdTQoMwh6TdsT2M+WIb8HcGJfdOTIkaOT5NcQiA+DV49sTaGWuzHzYatiwrFnC9W1JMy++YkTKuZvmt4wb+SyFGrJkeMrSWZNGZbMchrmDV+0LdZxiAieNW5H6xZfIJh1C6Q5cmQameUQdrIiMLotuPKZ40VksVED8lCqsllplpUjxx5PRjoEAMCSWU6kbcf5AD4ysldycnoF5cix55O5DgHASzd4250YzjWxJXmsL/DB4HRrypFjTyajHQIALL8mv1ZE7jIwHQZrdFXaBeXIsQeT8Q4BAIiY0XFYEhPSrSVHjj2ZrHAIDdV7fSgi61wNyTH9ICdHjj2WrHAIndA15oGCnEPIkaMPZJFDEPcgKOYcQo4cfSFrHIKAYVcb4fb+0JIjx55K1jgEwiSUWT5Mv5IcOfZcssYhADjM3URWpV1Fjhx7MFkR/z/h8jXDAFS6Gmq1Ku1icmQdvgXt1ygwYGovgnuC1flnp1FSxpIVDmHUyGFnkHCNQtTQH/SHnhzZg29B+1WJOQN5VGItvaaK35PJeIfgC4TyFRFwsxNg1fI3n23qB0k5soSKmrZfAKwxbyGPSKzl9MaAP5Y+VZlNxjsEWkNvB1Dsaii4DUtmOelXlCMbqKjZcjmI640biCzRsZbZX2VnAGS4Q/DXtF1B4gdudgJp3xaL/KE/NOXIfPzzt1wK4kZTe4E8LLGW72eDM5BA50YAA9Dp6D8zHUIgoPzW5b8m8XMTcwruXhEY3ZYuOeLzedarLUc4ClMpPEJDDlSQfaBVgVYYojS2Q+l2DX5Mqneh5TWLWD7aGfY6GxsH/CaTIDxRbR9BLVNFeAQVDhSNfUShQAFDtUZMgE2Wcj4VWm8T8hoEz3usWDP9GHD9iVAxv/0iKPzGvIU8GHxj6ZxMe7pcM33CMMsZ7AdlKrRMBNWBAqc4/IIaDAChSr0dWq0G5B2QLVRSXxjLf7Gv91vGOQRfzaZS0lpIYKqJvQCtkbYdV6dDS6iqdCKE54Rl6yyQXu5Mwq1AAATU57UpMRRQQxVQDJFSEKdrAGFuDYWqyh8G5e6i2uY30qGxNyLL7MMVcU7UwSwCRSDBnUnCqb6s9KsUPAAKAauQgm8AnAUAEcdeH1uGR7SFu/Iqo6/1t/5E8de0zwV5q6m9iCwOrlx6RqY4AwEYmlZ6JBzOpaNPEsgQCND5RxN0jRJQQ6BwAMADABwrwuowt4bClaV/oti3Fja88mkyGgbcIRwWeCvPi3H7wqOqCH6HxLHGjUXe7Yhhxss3eNtTqWltRdmRSnCtCDqPUyebaV+hCCIXQnBhqLKsVlNdPaZuxaupUxqfaJ1nimheS4Vpgr7Ix2hROJ+C8yN1diO1VNvTYy+lUmuq8M1vPx/kb03tBfKX4MqlP8gUZ7DGXzIppHgDNY/p/IMlESKkUCTgFSKxS0JVZbdo1TF/zLK/b02ki6QdAoEb/DVbAsm270SGkByZVEvBakecb70cGBnqm4Yv+cxXUmhb6mYB5kjqy21MU6KnhavK7+8QXDquvml9qgeQIAqjMfs3AM5gikPOCPig+GKk1l5sR6OXcAZcQ8n7C9/8tnOoeCcNfZ+IPBBcufTMTHAGn51QMtSzTd0A4IKUdaowCIIrVdSetaZq0uxEvoT6cNtwBIm9+/YvOWcAyAsQ7X9+3siUxR2sqyivUJb6uwBzUtVnPETkDA+cleFpZUZTIlOitR5fzPGsJHFGKvvtDonTox77zWidx5/OcUzxLWj7IZVaZOoMAP3nTHEGId8RB9rb0IRUOoNdUWp/iH4+VFH2Q+MmaRGSJkSwRjs4o+GqgmOC84a/nap+wxXl58bEWaaMzkv0HQX1NSem60MVZWelor9IrX22JusAjk1Ff25QoViDtZE6+/z+GK8nKmo2n6FE3W3+ZID7G6K/yQxnUFU6EZb1ikAZhOQnjwJsEPeEq0ovNbTPEkR+uy3WcXDj1fl/TmW34cqynwllkVLKSmW/biilLBB/DFeU/rQv/URq7UtJ3K2A/tUPWAR+F63z/Kw/x/0c/3VbZoPWPaDZPSwa9wVjC3+IQCAt23WJsGZ66X8JWA+gsL/GFOFvwlVlP3KzyxqHIOCwYR61Vyr7DFWWnyPAwlT2mShC3hyqLD8zmbaRevssMpEttnTAhZFau1/j/n017d+jhftg6ARFcG/QWXhWJjiDkK9sDB1ZSkFK72UTHEffGa6c1OtUL2scAomzhPa7FTXti3yBjfv1tb81VZMmazi/S74HvVaAJmg07vw/6cVNDVm0rrKsLJE2kQZ7kjj4ffJjcjWAVwVoAPCqdrgm2b5E8LtovefIZNsngm9++6kE/wzTJyLBn4KxhWdngjOQAJRYeIBQ4xJvrbdrwXIAf9DArdC4F8CrGoia9qCUsgSxxauPm9hjucQB33ZMBAI2yHNp22f6a7bct3WrvrLp+uEJr9avP27S8NgO/RCVSvD3128I1CKb+qlRda271Yv4rGLieA+t4wGcB9A44asCbA39cPiooyZ4X3rJdQtVnsHwaAwPKQU7Mf1oFWCRTc9TrNy+2z61BIeMi8ZiJ5DOeYB1uLF+BVsc/kWewQTOQNoCxKbWtJ1EcDFpdt+K4I/B2MIfZYIzAIDwC6U/IVCRSBuSK0Tk5o5teX/b55VXdksAtP64ScN1VH9PHPyiMy7BDVVsRdXtAOIWNsqaJ4RdIWCTOCc/nw1H/7LduDjs50Qjej4V9jW11xofC3iSt771iOL65jviOQMAGNvw+odF9S23e+tbDhfKqRo6geAQtZ/O6wiYWMZs+1oqjDftWYCPSHWipzJallcV/X08ZwAA9G//JG9a9E5PpT6C5MnQ8onpGFQY7wyyEzhIlBj++W0nKqqHEnAGd2eSM/jMV1KotRhlDwcA0XoDRWYX1jVNKapvfiieMwCA0UtXtHnrmhdtlWGHAbjdrHPMXFsxaXq8l/rwhCB/h9CsqlJvvQCKQKEQRQT2QUKLY5zgyZeGIwPtlS8HCowe2ddVTT405jgXGrtCLc8Ojg6ePfLFFzcaqwIEdS2PflJZ3jhIy4OiYFQvQiCXhP2ld3mDLT3uoHTU5h2qKRcbywefzpPI91mFzYZNQEKAyOPyLJZHmLdYUeLePN1xBHM7nsu7Y9C3Iv8yHcsE/4LN36aoJYDhE5HIH4LVBeehM7wvI7A96koRDDexJfRbHgszRtW1GH++9m9s3AHgwnBl+TaBuIb8k86NEkBd9zMRyZeDB24PVuebFFAxxhfYOFJ5PNMAzBTyVJPtJIL/Ndgjjb5AqKIxUOQ6DxboXypl6g704942fI+tLxrP03ZlXH3Tepl52LdDG4cuobiXrO+c4+lfAOhxO5KUX9D0yU7LI3l29PRkzyPwWGyQlsjxsY2eh0F+181eAZZYUo0UxnL45m8+lrAeBZFnYi8ii4LVBecjg5zB+uMmDXci8mMjSSL/F9XweRtb3csOxKHQGfqrsNU+DVAuUz5OCL1QfiLQ9MSuVzNqytAY2GtTQ3XBkobqgllwohMFUm/UkDyUniGNvkAovzez8LSJYx3HmW3SpRCtW52C2WxtTcoZfCFtyVsRZ4g+HdArTew1MCfkK4ubPVqexd4CfN9oYI0mTyw2p6+Hk1iKqGdYbDbgvG5iL8BpsmxoSuIhKuZvmk5ajwMYZDS2yF2Z5gwAQEec0wHp9d7shFug9Yljk3QGMnOmtc7adqwjyuj3p5ZLul/LKIewK8Gr91oZjN40XbTZMVaSB9MefF1vNtrxzDaJNxCNiBLO3vkY1mfGPtm6zdHq+xra9cOpoDxUclq812Iez2yTeAMNdDhQczgDHcno7Q6PxHYNzxyt3Ve0FWDFGDFzWr3gv3ZLpSjPEyaZsgBAgE+CK5fORYY5AwDQoOH7IdVFja+9l2j/q4+b6A1VlF8Z3vD+ewJ50iImGjVU8IX9pQd3vZTJBAI6OC//CojhMWioi4+5bmOPbwZ1/JXV3VC4zVvf9I6hSiP2Dja/pWgZbXMK+b24L2ga6VfgrYOnd7ybgDxXBlVF/mlZMNumFZ7al7F889t9tPA3AkNM2xAYV/GNGUbReP3Jpm9+cy/ROMrNTkN/6h217U7TfgXgmqpJk8OVZferHZ5PQPk1oPZLVJ8GuqSLy2yHsJOG6vyFEDFJgGJZynNlvBc2+g4fqYkStw40dEypWFqCfWI6ulBr98QWWuuy8FFHFex6TWoxQiuUurdFzBOL3NwXnT1hac9CDQP9QJm8kGTgjch4pfgUiKEJtyVq/Ne1pzUUOFGieR3fNFmzsoSLuOStiJvdmukThoUrys9dU1HWqkS/IsAcKrP1lXhQdX2ayAqHAAAfrV1zoQjc6y6QJ/sCod3m4FHlmWLyh1Gadd7a1z9LUmavjG14/UOlZLmrBqUsPSTaJdDHUdaRyuTvpfgcj8XqPsjsEU7b/hE7A5l6l6DAWIdnUlJjkIUAhiXTFsAgKt5Xcl5LovEZaUPT3Yl32lmP9/Z6uLL8oFBV2c2IDvpUKIuMpwVxEI2IaP2ACI7y1rd0yWaeNQ7hvdu+3gGNX7nZEbDhGbrbHJzkfxoNZKlnkpBnjBBLTeyU1od2aSc8tCfbXSHEqP9kIeRZQ9OBqcRNHDF8n4PnDcjYcSBM7jtuKTp6xT+6XxWfz7O2svy7ocqyZQJ5G4KfKoURfdDyIYhfim3vUxxsnVPc0Pwyu625ZI1DAICgXvggRFzjDUg5uvs1DX7dZAwNNiejzRRqrjC0PKhbu4N6suzaDGnVD8AoszU1DaLm0gT5y6nXbU4oFDxdaOj93K2cf+8aD7C2clJxqKL8qrXc+j4hjwOYlvz4EAGWEjyhcNT4/yiqa/71mGUv9/gZyiqHgEBAC/ikmxkF39ztGsToZJmOxRJe5U0EBc+/TeyE7BKBKcpMvx2NplW/x/D9EYp7puxkEPc1DBIeZan7plz6sfGiZLpQRvcdNwjAUGX50aHKssUC/TEoNUphn2THFa03ELyRor9eXN88w1vf9BSXLHE99p1dDgEAqF92t2HRzmpPu2KwDwzs7T3AOCIxGbZvxwYjQ6276NVQRvrxKjYlrioB2mB0dkRIM70JIY+IyEwTS4KHDCkcaZ6GPV2Icl0P0ZoHhivKVgLyPIDTlGlEZhxIrhDyzMiOvHHe+qYrihtajb6APifrHIKGGC2YDc/PG73rzxQxi8o8bEla97HHRSJGgUJk15uCdNevNSRd6bl3wSy5iKQ2P4NAHtbRltOD8woeA7RRTgwBL556bfvAZnaie7StUtgHxH8nP4jeocE/UqtSb13T5OK6pvt6OvvgqiV5EQOEQ6NvQKXyui6+UG0xabeu9qhkV7iN+HSkZRTPDqLLqUeKuOpXCpTnkl6hN2Nvs3h8AZO6IeP2JbI4+MbSL4qobI/KJSJwDVMnQGXxnkmB9WbveRoQ6JQEt8VDi36XlMvyOoaMHVPfdI43uKK1r31mn0NQhllmVEcXxyHQRod7YnkR41OQyTBIHKNTigLppp9G+iMqL636o9ttI/2kJBV+uzv6z91Tpb8SGLFBRP/ETAfGD/UMuiU1WhKHQIreh060hibkCYFMLz6m9RBvXcvNiRy8cyPrHIIiXfMeCiDrY2vW7nqNoNFcSqnk93dNEFpm/VN10UuIkX5LwTiPQVJYZv0TdI8ZcUEE9/aUA7Fx3vAnRGSxkRbirKk1bSf0VU8yCFWfTwR3otdCUGPb2M9b33JScX1LbTqmh1nnECA4xs2EkA1vBQ7rFvUlRqHIZGIJLBJFREz776KXUGah1I5T6W7UB8TsKDeBf/ZpmM7kJr1mOpKYXGyyDQ0AFrnIF2jrtxyGn0Pdx/dh50Kjd9SOfYsamueNXtb8cYqkxSW7HMLMhy0Cx7mZCXaP1Is5HqPc9AJ89wOfz+hATaKsmT5hGEnXY9AAYCm8suvPUUsZ6XeUOkmCZgeCEkWewzAxOMYNAFFHGcZbxBlHZFGwOv9ct+QmjYHh67SYpjBnsbJpfFYgVYhKJi6EWwDcoS357+L6lqlF9c0PmYQ1p4Kscgj+w489E+QoV0PB890v7d346ipAr3JrSsFe+Z6trgVmk0E5g84xOgZLvtf9m2CIf8cqMdCvgFFRbaeltkRU2WcrosDNTqBXDZ6+Y1UyYwjkX4kcYW6cV/AIRJaY9c5TfTVb+nwSMxGiwuXa8HcR4G0h5nKHPbaovvmCMctadoteTDdZ4xB8gQ8GQ1TAxFY7fCLuC1Txr3fDcXBNyHdYSvfRN1SVjICg2sSWkLg6KWb66cg1EjSLuzBFajECgquMxhf1RGfWpWTgViR4hDm6FReImC1iknLblJp1X0tKWhKMq29arzSNyt8R+EdxXfOdJnk1TQn5ysasrSyfYmqfNQ6BHu/vSJPILdm85dN/NcbtQ+v7TcZSCmPFGnpTQgJdiAlvBWGU/1E7jLvPLgpG+qE4ztH2DQnIc8WhdQsVjKIPjXWmiBeuLwgLcKGJLcG9BmPw3enW1GVMZRY3AeCUkL90RqrGFZ/PIxYeEC0vhqvKbvx4yhTXyM2scAgVNVsuJ2FUu0A0/9p6V2ncRB6FDa2vAzCaixM4b21F+Y8TkNkjocqySwCaTUMELxUHm+JmV7Irosb6RfCTSK3tWpjDhEitfZFA/dDQ/NWBqBTdWF3wkEAeM7El8a2K+e1G25YpYcegv2itzbJRk3/aUFXS561jARhS7XcQqFAKSgSX5w2Nvb6matLk3tpltkMIBJS/pu0m0CxrEoAOItZj1iQCQnCB6fBCuSNUVX6RJFlAWQCGK8svA2C+D070mLmYhBDaXL/g95FaO+kbXwTcWRnKuMQ6lZ6f7Hh9ZRs4FxCztPyKN/oCmw9MsyQAgPell9qVsswqUxPeiFbPhadNTDoNnZSU2OHK0kWk6vKFQOBgOPqlcGX5DT0tnGesQ/DVbCr1e34WJNVlxo00bmmYN7LX/frC+qanAQmadKcAQuTWdZVl931SWT7avcWXrD5uojfsL1ssEOOpBzXqvPXNz/VmY1U6T4vATL8CSdwRqbPvTTRhiQRRGK2zH0ikMpQADZbfSevx695YcVX+WnF4saH5MNrqTwgE+uUzYDuRG6G1kbNSxCFaqxWhyvLdTu26sbai5D/CI1QQ4Dlx+1ZQAvn5ELU17tNCRjmEIwPtRb6atjP9C9r/SnqaSLrGHHyOCNZ0tG93/fYkIMqSuaJhvI0jwByb8m64smyem+deVzHla+GK0msY8bwDhfip0OKh0QHFC7qfT+8OCRHNuRrm+gn8INJhvxet91wlQcRN4Po5smzo2Gid5+pI1H6XxOnm8hERhxckv5iYGoJX5/9FIH8zsSV4lM++zCg9X1/Zq/GNTaC63NS+s7qTPL+2ouyBcEXJEW5PqeumlxwSqii9FaL+CbqnbFPEIXD0S2uqSr/Tddw4+BdsaSFc0419JEDYbWATKDJciDEEXbe04iFAVMfw7eXX5NeatglVlF4I8rZEx9KAKAct8HAFRVZp4VZFGSbA/hoyCWCJSmKKQciPvfUtxqXZIvX2hRQko18rQTMVmkRklYBbCRlG4f4iKNdAmVKJ6xfBxXnTor3q8S9oP49gr7+jAK3Bq/KNsgz1xNELwnt7MPgtgu5PRYJITKP0+avz33QzLX3wFFdn13Laoz2+dwJwXWX54wL5Tk82PaLxPi2+JJB3BFgPTaGSkRA5UCBTCGWWAKiroDdjw/TksU+2bvv8Ul9Kue1LmFc/6hUaHAnrAQGEgjMTcQYA4G1ouT3kL5lMpRLal1YAYaEMImUCgJQvvhKT+Bx1onFvYbAloRoXdkX09mi9PZmmadl3ojplThLBpC+P4hFCAMYFH7oigvvtqqjZHLkfeOEq72r/gs0/Bax7XY2JPEvhvsMCb03aPbo1tRCQTR15Z+3I275CURkl7PkChQNE5ICd/QCUnc+SNDlQuTuCsPbwO7s6g85hshzRuLShOt8opn1XCEhR4Y6zAfQ6Z083GvK0t03/yG2q0B0SYm+Inq3BgdUvXGZHoz8a6KlCd4JXjbhPBE+b2JI4vMiz7zXp1gQAI198cWNntK1OurhuX9Fat9HijDHLmj7o/lrWOgQBolrkosZ5+f+bbB9c8lYkNlSfTPCvqdRmjn48us2emWwxGM5CJG975GRABki/PJk3LPLdVNV/SDU7sON8QIxOiZK80lezudctuVRR3ND6b2r6BNq4dmbKEIQteCq8tU0t8V7OTocg+JSifY3VBX1+TB37ZOu2wlHjTxFhWlKX9wTBG72jDpiZbCKLL/o5Ads8G2KngOhX/QBu8lixk3kkUpb3INW8Ul34KbSY1mqwFNW9JYHPEk//ngTeYMvbluRNhpP2HJhfIviHKEzuLW9C9jkEwdIdMTmioXq4eyo1Q7hkiVPc0HQZyePT/SingdUQmeGtb7rCJMedCZwFx66MXkbRx2uH6dXvcA2pTrSropf3tUxcf9Awb/g9IjDMFM2DRngK/l96FX1JYcMrn24esvFogjea1OvoCxTcGRumJxXXNb/fm13WOAQRaYDI1Ibq/BmmlZ4TxVvX9LSV5zmYxELoVD8G6x2E3GDtyDu4qKElLXv1nmnO03lO5GAIF2qkVv/O/m7KU5FDPJUdroluMwkHHedBxChSUMgL/NduSe8R8l34+tL3Orz1TVdY1GVa4FqzI2EcNIP6aG9D89zuC4jxyGiHIJCwiCx2HH1MsLqgsqG6YLdTjKlm9NIVbd665p9DsB+A6/v6xKCB1aAs0Nag8d76litTeXAlHpyBNnta5Od5VnQ/gNf39YlBNNaC/HWetg+wq6KXc5p5WflM4fnq0R9DxCgGgJ27SPeUXLkh6foHyeBtaH2tuKHZT4qf4F+11n16eqRIPcETvI3Nk4rqWl80bhfvomEcQmoQaKGsJxAWIExBSFNateMse/7qvd7AABfvlJkzrdDGVX5ozgBlqkBPUFA9btdq6BipVsKR5eLhM8Uj92tM1dQgGeRhWLFRHj/IGdDOVC3WBKV63m7WgKPgvAlYywF52jMy1shS9yKvJvRXHEKP49e015I0SvACkd82VBdclA4dJqyZfmSRFYudKEqmi+gpnYFKvbJOQ1ZYgjpLyWOj6lqTytSU7Pb/VxYpKbHDBTJeKc++MaULLI2hjsI2j1btWsc+8mL4KjY2ZuzcWlpgd7QPGm9pZ19qVQBgGBSiInqjdtQneZsj73OWeRRkjv5ho+/wkVGPZ38IiwHJB6ko3OZoJ6xEfehtbF6b6NZ1jhw5cuTIkSNHjhw5ciTI/weVqkTnzzyLKQAAAABJRU5ErkJggg==",t.className="bookle-logo",t}()),g.appendChild(function(){const t=document.createElement("div");t.className="bar";const e=document.createElement("span");e.className="search-tool",e.innerHTML='<svg\n\t    focusable="false"\n\t    xmlns="http://www.w3.org/2000/svg"\n\t    viewBox="0 0 24 24"\n\t>\n\t    <path\n\t        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"\n\t    ></path>\n\t</svg>',t.appendChild(e);const n=document.createElement("input");n.className="searchbar",n.setAttribute("type","text"),n.setAttribute("title","search"),n.setAttribute("placeholder","Book category: fantasy, fiction..."),t.appendChild(n);const a=document.createElement("span");return a.setAttribute("class","search-tool hide cancel-btn"),a.innerHTML='<svg\n\tfocusable="false"\n\txmlns="http://www.w3.org/2000/svg"\n\tviewBox="0 0 24 24"\n\t>\n\t<path\n\t    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\n\t></path>\n\t</svg>',t.appendChild(a),t}()),I.appendChild(function(){const t=document.createElement("p");return t.innerHTML="POPPO",t}()),C.appendChild(b),C.appendChild(g),C.appendChild(I)})()})();