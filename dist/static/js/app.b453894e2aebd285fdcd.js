webpackJsonp([1],{"+CvP":function(e,t,n){"use strict";function a(e){n("/go0")}var r=n("x86n"),c=n("vZkb"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-e05daf26",null);t.a=o.exports},"/go0":function(e,t){},"0cYl":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[e._v("Portfolio")]),e._v(" "),n("router-link",{attrs:{to:"/wallets"}},[e._v("Wallets")]),e._v(" "),n("router-link",{attrs:{to:"/exchanges"}},[e._v("Exchanges")]),e._v(" "),n("router-link",{attrs:{to:"/manual"}},[e._v("Manual Entry")]),e._v(" "),n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")]),e._v(" "),n("router-view")],1)},r=[],c={render:a,staticRenderFns:r};t.a=c},"0fbG":function(e,t,n){"use strict";function a(e){n("3gbP")}var r=n("k6Hn"),c=n("AHY3"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-677139a4",null);t.a=o.exports},"0j/3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"manual"}},[n("table",[n("tbody",[n("tr",[n("i",{staticClass:"fa fa-trash-o fa-2x",attrs:{"aria-hidden":"true"},on:{click:e.deleteManualEntries}})]),e._v(" "),e._l(e.manualBalances,function(t){return n("tr",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"item.description"}],staticClass:"input",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{change:function(n){e.changeManualEntry(t)},input:function(n){n.target.composing||e.$set(t,"description",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"item.token"}],staticClass:"input",attrs:{type:"text",placeholder:"Token"},domProps:{value:t.token},on:{change:function(n){e.changeManualEntry(t)},input:function(n){n.target.composing||e.$set(t,"token",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.balance,expression:"item.balance"}],staticClass:"input",attrs:{type:"text",placeholder:"Balance"},domProps:{value:t.balance},on:{change:function(n){e.changeManualEntry(t)},input:function(n){n.target.composing||e.$set(t,"balance",n.target.value)}}})])})],2)])])},r=[],c={render:a,staticRenderFns:r};t.a=c},"1NZg":function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),l=n("exGp"),u=n.n(l),p=n("RZG8"),f=n.n(p);t.a=function(){function e(e){return t.apply(this,arguments)}var t=u()(s.a.mark(function e(t){var n,a,c,i=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t.forEach(function(e,t){n[e.name]={},n[e.name].apiKey=e.apiKey,n[e.name].secret=e.apiSecret,n[e.name].proxy="https://cors-anywhere.herokuapp.com/"}),console.log(n),a={},c=f.a.exchanges.filter(function(e){return e in n}),console.log(c),e.next=8,o.a.all(c.map(function(){var e=u()(s.a.mark(function e(t){var r,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new f.a[t](n[t]),!r.apiKey){e.next=7;break}return e.next=4,r.fetchBalance();case 4:c=e.sent,a[t]={};for(o in c.total)0!==c.total[o]&&(a[t][o]=c.total[o]);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 8:console.log("Loaded exchanges:",c.join(", ")),localStorage.setItem("exchangeBalances",r()(a));case 10:case"end":return e.stop()}},e,this)}));return e}()},"3/U0":function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("d7EF"),s=n.n(c),i=n("W3Iv"),o=n.n(i),l=n("exGp"),u=n.n(l);t.a=function(){function e(e){return t.apply(this,arguments)}var t=u()(r.a.mark(function e(t){var n,a,c,i,l,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["EUR","USD","BTC","ETH"],a="https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+t.join(",")+"&tsyms="+n.join(","),e.next=4,fetch(a,{});case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.next=10,i.RAW;case 10:return l=e.sent,u={},o()(t).forEach(function(e){var t=s()(e,2),a=(t[0],t[1]);u[a]={},l.hasOwnProperty(a)?n.forEach(function(e,t){u[a][e]={},u[a][e].rate=l[a][e].PRICE,u[a][e].change=l[a][e].CHANGEPCT24HOUR}):(console.log(a+" was not in the CryptoCompare database"),u[a]={},n.forEach(function(e,t){u[a][e]={},u[a][e].rate=0,u[a][e].change=0}))}),e.abrupt("return",u);case 14:case"end":return e.stop()}},e,this)}));return e}()},"3gbP":function(e,t){},"7k8X":function(e,t,n){"use strict";function a(){return localStorage.manualBalances?JSON.parse(localStorage.getItem("manualBalances")):[{description:"",token:"",balance:""}]}var r=n("mvHQ"),c=n.n(r);t.a={data:function(){return{manualBalances:a()}},name:"Manual",methods:{changeManualEntry:function(e){if(""===e.description&&""===e.token&&""===e.balance){var t=this.manualBalances.indexOf(e);this.manualBalances.splice(t,1),localStorage.setItem("manualBalances",c()(this.manualBalances))}""!==e.description&&""!==e.token&&""!==e.balance&&this.manualBalances.indexOf(e)===this.manualBalances.length-1&&(this.manualBalances.push({description:"",token:"",balance:""}),localStorage.setItem("manualBalances",c()(this.manualBalances)))},deleteManualEntries:function(){localStorage.removeItem("manualBalances"),this.manualBalances=a()}}}},"8aaA":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"exchanges"}},[n("p",[e._v("Overview of cryptocurrencies held on different exchanges")]),e._v(" "),n("table",[n("tbody",[n("tr",e._l(e.exchangeBalances,function(t,a){return n("th",{staticClass:"header"},[e._v("\n        "+e._s(e._f("capitalizeFirstLetter")(a))+"\n      ")])})),e._v(" "),n("tr",e._l(e.exchangeBalances,function(t,a){return n("td",e._l(t,function(t,a){return n("tr",[n("td",[e._v(e._s(a))]),n("td",[e._v(e._s(e._f("round")(t,6)))])])}))}))])])])},r=[],c={render:a,staticRenderFns:r};t.a=c},AHY3:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"portfoliotable"}},[n("h1",[e._v(" Total Value of Portfolio: "+e._s(e._f("round")(e.totalValue,2))+" "+e._s(e.currency)+" ")]),e._v(" "),n("table",[n("tbody",[n("tr",[n("th",{staticClass:"str"}),e._v(" "),n("th",{staticClass:"str"},[e._v("Name")]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Balance")]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Price in "+e._s(e.currency))]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Value in "+e._s(e.currency))]),e._v(" "),n("th",{staticClass:"nr"},[e._v("24h% Change")])]),e._v(" "),e._l(e.portfolio,function(t){return null!==e.portfolio?n("tr",{staticClass:"portfolio"},[n("td",[n("i",{class:e.getIcon(t.name)})]),e._v(" "),n("td",{staticClass:"str"},[e._v(e._s(t.name))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t.balance,3)))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t.rate,5)))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t.holding,2)))]),e._v(" "),t["24hchange"]>0?n("td",{staticClass:"nrpos"},[e._v(e._s(e._f("round")(t["24hchange"],2)))]):t["24hchange"]<0?n("td",{staticClass:"nrneg"},[e._v(e._s(e._f("round")(t["24hchange"],2)))]):n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t["24hchange"],2)))])]):e._e()})],2)])])},r=[],c={render:a,staticRenderFns:r};t.a=c},B3Kk:function(e,t,n){"use strict";var a,r=n("mvHQ"),c=n.n(r),s=n("fZjL"),i=n.n(s),o=n("SBt/"),l=n("3/U0"),u=n("0fbG");a=localStorage.baseCurrency?localStorage.baseCurrency:"BTC",t.a={name:"Portfolio",data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances")),exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances")),manualBalances:JSON.parse(localStorage.getItem("manualBalances")),baseCurrency:a}},computed:{combinedBalances:function(){return this.walletBalances||this.exchangeBalances||this.manualBalances?Object(o.a)(this.walletBalances,this.exchangeBalances,this.manualBalances):null},myPortfolio:function(){var e=this;if(null!==this.exchangeRates){var t=[];return i()(this.combinedBalances).forEach(function(n,a){t[a]={name:n,balance:e.combinedBalances[n],rate:e.exchangeRates[n][e.baseCurrency].rate,holding:e.combinedBalances[n]*e.exchangeRates[n][e.baseCurrency].rate,"24hchange":e.exchangeRates[n][e.baseCurrency].change}}),t.sort(function(e,t){return parseFloat(t.holding)-parseFloat(e.holding)})}return null}},asyncComputed:{exchangeRates:{get:function(){if(null!==this.combinedBalances){return Object(l.a)(i()(this.combinedBalances))}},default:null}},filters:{pretty:function(e){return c()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},components:{PortfolioTable:u.a},methods:{switchBaseCurrency:function(e,t){this.baseCurrency=t,localStorage.setItem("baseCurrency",t)}}}},Dz3k:function(e,t,n){"use strict";function a(e){n("Z8FB")}var r=n("7k8X"),c=n("0j/3"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-2435a53a",null);t.a=o.exports},JZSy:function(e,t,n){"use strict";function a(){return localStorage.exchangeKeys?JSON.parse(localStorage.exchangeKeys):[{name:"bittrex",apiKey:"",apiSecret:""},{name:"liqui",apiKey:"",apiSecret:""},{name:"coinbase",apiKey:"",apiSecret:""},{name:"bl3p",apiKey:"",apiSecret:""},{name:"bitfinex2",apiKey:"",apiSecret:""},{name:"poloniex",apiKey:"",apiSecret:""}]}function r(){return localStorage.walletKeys?JSON.parse(localStorage.walletKeys):[{name:"Bitcoin",publicKeys:[]},{name:"Ethereum",publicKeys:[]},{name:"Neo",publicKeys:[]},{name:"Ark",publicKeys:[]}]}var c=n("mvHQ"),s=n.n(c),i=n("fjtl");t.a={name:"settings",data:function(){return{myIcon:"fa fa-refresh fa-2x",exchangeKeys:a(),walletKeys:r()}},methods:{changeExchangeKey:function(){localStorage.setItem("exchangeKeys",s()(this.exchangeKeys))},addWalletKey:function(e,t){e.publicKeys.push(t.target.value),localStorage.setItem("walletKeys",s()(this.walletKeys)),t.target.value=""},changeWalletKey:function(e,t,n){e.publicKeys[t]=n.target.value,""===n.target.value&&e.publicKeys.splice(t,1),localStorage.setItem("walletKeys",s()(this.walletKeys))},clearKeys:function(){localStorage.removeItem("exchangeKeys"),localStorage.removeItem("walletKeys"),localStorage.removeItem("exchangeBalances"),localStorage.removeItem("walletBalances"),this.walletKeys=r(),this.exchangeKeys=a()},sync:function(){var e=this;this.startRotating(),Object(i.a)(this.walletKeys,this.exchangeKeys).then(function(t){return e.stopRotating()})},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},startRotating:function(){this.myIcon="fa fa-spin fa-refresh fa-2x"},stopRotating:function(){this.myIcon="fa fa-refresh fa-2x"}}}},KOOW:function(e,t){},M93x:function(e,t,n){"use strict";function a(e){n("hUVr")}var r=n("xJD8"),c=n("0cYl"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),c=n("/ocq"),s=n("PlbA"),i=n.n(s),o=n("yRJc"),l=n("+CvP"),u=n("bfBb"),p=n("niH5"),f=n("Dz3k");a.a.use(c.a),a.a.use(i.a);var h=[{path:"/",component:o.a},{path:"/wallets",component:l.a},{path:"/exchanges",component:u.a},{path:"/manual",component:f.a},{path:"/settings",component:p.a,props:{test:localStorage.test}}],v=new c.a({routes:h,mode:"history"});new a.a({el:"#app",template:"<App/>",components:{App:r.a},router:v}).$mount("#app")},Q3m2:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://blockchain.info/q/addressbalance/"+t+"?confirmations=6",e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,s={},s.BTC=c*Math.pow(10,-8),e.abrupt("return",s);case 10:case"end":return e.stop()}},e,this)}));return e}()},Qzwg:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[null!==e.combinedBalances?n("span",[n("p",[e._v("Switch base currency:")]),e._v(" "),n("p",[n("button",{on:{click:function(t){e.switchBaseCurrency(t,"BTC")}}},[e._v("BTC")]),e._v(" "),n("button",{on:{click:function(t){e.switchBaseCurrency(t,"ETH")}}},[e._v("ETH")]),e._v(" "),n("button",{on:{click:function(t){e.switchBaseCurrency(t,"EUR")}}},[e._v("EUR")]),e._v(" "),n("button",{on:{click:function(t){e.switchBaseCurrency(t,"USD")}}},[e._v("USD")])]),e._v(" "),n("PortfolioTable",{attrs:{portfolio:e.myPortfolio,currency:e.baseCurrency}})],1):n("span",[n("p",[e._v("Hi. Go to Settings")])])])},r=[],c={render:a,staticRenderFns:r};t.a=c},"SBt/":function(e,t,n){"use strict";function a(e,t,n){var a={};return i()(t).forEach(function(e){var t=c()(e,2),n=(t[0],t[1]);i()(n).forEach(function(e){var t=c()(e,2),n=t[0],r=t[1];a.hasOwnProperty(n)?a[n]+=r:a[n]=r})}),i()(e).forEach(function(e){var t=c()(e,2),n=(t[0],t[1]);i()(n).forEach(function(e){var t=c()(e,2),n=(t[0],t[1]);i()(n).forEach(function(e){var t=c()(e,2),n=t[0],r=t[1];a.hasOwnProperty(n)?a[n]+=r:a[n]=r})})}),i()(n).forEach(function(e){""!==e[1].token&&(a.hasOwnProperty(e[1].token)?a[e[1].token]+=parseFloat(e[1].balance):a[e[1].token]=parseFloat(e[1].balance))}),a}t.a=a;var r=n("d7EF"),c=n.n(r),s=n("W3Iv"),i=n.n(s)},XicR:function(e,t){},Z8FB:function(e,t){},ZM6X:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a);t.a={name:"exchanges",data:function(){return{exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances"))}},filters:{pretty:function(e){return r()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},round:function(e,t){return e.toFixed(t)}}}},ZMPs:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),l=n("exGp"),u=n.n(l),p=n("Q3m2"),f=n("fQoU"),h=n("jHMd");t.a=function(){function e(e){return t.apply(this,arguments)}var t=u()(s.a.mark(function e(t){var n,a,c,i=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=s.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=19;break}if(a=e.t1.value,c=t[a],"Bitcoin"!==c.name){e.next=9;break}return n.bitcoin={},e.next=9,o.a.all(c.publicKeys.map(function(){var e=u()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(t);case 2:n.btc[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 9:if("Ethereum"!==c.name){e.next=13;break}return n.ethereum={},e.next=13,o.a.all(c.publicKeys.map(function(){var e=u()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(t);case 2:n.ethereum[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 13:if("Neo"!==c.name){e.next=17;break}return n.neo={},e.next=17,o.a.all(c.publicKeys.map(function(){var e=u()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(t);case 2:n.neo[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 17:e.next=2;break;case 19:localStorage.setItem("walletBalances",r()(n));case 20:case"end":return e.stop()}},e,this)}));return e}()},bfBb:function(e,t,n){"use strict";function a(e){n("ypnH")}var r=n("ZM6X"),c=n("8aaA"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-f14b5f9c",null);t.a=o.exports},fQoU:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s,i,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://api.ethplorer.io/getAddressInfo/"+t+"?apiKey=freekey",e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,s={},s.ETH=c.ETH.balance;for(i in c.tokens)o=c.tokens[i],l=o.tokenInfo.symbol,s[l]=o.balance*Math.pow(10,-18);return s.hasOwnProperty("MOD")&&(s.MOD*=Math.pow(10,18)),s.hasOwnProperty("RHOC")&&(s.RHOC*=Math.pow(10,10)),e.abrupt("return",s);case 13:case"end":return e.stop()}},e,this)}));return e}()},fjtl:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("//Fk"),s=n.n(c),i=n("exGp"),o=n.n(i),l=n("ZMPs"),u=n("1NZg");t.a=function(){function e(e,n){return t.apply(this,arguments)}var t=o()(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.all([Object(l.a)(t),Object(u.a)(n)]));case 1:case"end":return e.stop()}},e,this)}));return e}()},hUVr:function(e,t){},i3qI:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("p",[n("i",{class:e.myIcon,attrs:{"aria-hidden":"true"},on:{click:e.sync}}),e._v(" "),n("span",[e._v("   ")]),e._v(" "),n("i",{staticClass:"fa fa-trash-o fa-2x",attrs:{"aria-hidden":"true"},on:{click:e.clearKeys}})]),e._v(" "),n("table",[n("tbody",[n("tr",e._l(e.exchangeKeys.slice(0,4),function(t){return n("th",[n("p",[e._v(e._s(e.capitalizeFirstLetter(t.name)))])])})),e._v(" "),n("tr",e._l(e.exchangeKeys.slice(0,4),function(t){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiKey,expression:"item.apiKey"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Key"},domProps:{value:t.apiKey},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiKey",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiSecret,expression:"item.apiSecret"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Secret"},domProps:{value:t.apiSecret},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiSecret",n.target.value)}}})])})),e._v(" "),n("tr",e._l(e.exchangeKeys.slice(4,8),function(t){return n("th",[n("p",[e._v(e._s(e.capitalizeFirstLetter(t.name)))])])})),e._v(" "),n("tr",e._l(e.exchangeKeys.slice(4,8),function(t){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiKey,expression:"item.apiKey"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Key"},domProps:{value:t.apiKey},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiKey",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiSecret,expression:"item.apiSecret"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Secret"},domProps:{value:t.apiSecret},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiSecret",n.target.value)}}})])})),e._v(" "),n("tr",e._l(e.walletKeys,function(t){return n("th",{attrs:{"vertical-align":"top"}},[n("p",[e._v(e._s(e.capitalizeFirstLetter(t.name)))])])})),e._v(" "),n("tr",e._l(e.walletKeys,function(t){return n("td",{attrs:{"vertical-align":"top"}},[e._l(t.publicKeys,function(a,r){return n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.publicKeys[r],expression:"wallet.publicKeys[index]"}],staticClass:"input",domProps:{value:t.publicKeys[r]},on:{change:function(n){e.changeWalletKey(t,r,n)},input:function(n){n.target.composing||e.$set(t.publicKeys,r,n.target.value)}}})])}),e._v(" "),n("input",{staticClass:"input",attrs:{value:"",placeholder:"Enter Public Key"},on:{change:function(n){e.addWalletKey(t,n)}}})],2)}))])]),e._v(" "),n("h3",[e._v("Instructions")]),e._v(" "),n("p",[e._v("Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets and press the sync button")]),e._v(" "),n("p",[e._v('Then go back to "Portfolio"')]),e._v(" "),n("p",[e._v("For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)")]),e._v(" "),n("p",[e._v("For Ethereum: all ERC20 token balances are loaded as well")]),e._v(" "),n("p",[e._v("Ark not implemented yet")]),e._v(" "),n("p"),e._v(" "),n("h3",[e._v("If you enjoy using this web app, please consider donating. ")]),e._v(" "),e._m(0),e._v(" "),e._m(1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",{staticClass:"cc BTC"}),e._v("  3BUo1JcBpbG4JuG1QaPqCoPtDzPtGhh")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("i",{staticClass:"cc ETH"}),e._v("  0x4cf2E9f6DBAd97Fd901568D37Bb7EfAE2F4f3")])}],c={render:a,staticRenderFns:r};t.a=c},jHMd:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/http://api.neonwallet.com/v2/address/balance/"+t,e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,s={},s.NEO=c.NEO.balance,s.GAS=c.GAS.balance,e.abrupt("return",s);case 11:case"end":return e.stop()}},e,this)}));return e}()},k6Hn:function(e,t,n){"use strict";t.a={name:"portfoliotable",data:function(){return{total:0}},props:["portfolio","rates","currency"],computed:{totalValue:function(){var e=0,t=this.portfolio;return null!==t&&t.forEach(function(t){e+=t.holding}),e}},methods:{getIcon:function(e){return"cc "+e.toUpperCase()}},filters:{round:function(e,t){return e.toFixed(t)}}}},niH5:function(e,t,n){"use strict";function a(e){n("KOOW")}var r=n("JZSy"),c=n("i3qI"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-16b261dc",null);t.a=o.exports},vZkb:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wallets"}},[n("p",[e._v("Overview of cryptocurrencies held in different wallets")]),e._v(" "),n("table",[n("tbody",[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("tr",e._l(e.walletBalances,function(t,a){return n("td",e._l(t,function(t,a){return n("table",{staticClass:"subtable"},[n("tr",[n("td",{staticClass:"str address",attrs:{colspan:"2",title:a}},[n("a",{attrs:{href:"http://etherscan.io/address/ + address"}},[n("div",{staticStyle:{height:"100%",width:"100%"}},[e._v("\n                    "+e._s(e._f("trimString")(a,22))+"\n                  ")])])])]),n("tr"),e._l(t,function(t,a){return n("tr",[n("td",{staticClass:"str"},[e._v(e._s(a)+" ")]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t,3)))])])})],2)}))}))])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("i",{staticClass:"cc BTC largeicon"}),e._v(" Bitcoin ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("i",{staticClass:"cc ETH largeicon"}),e._v(" Ethereum ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("i",{staticClass:"cc NEO largeicon"}),e._v(" Neo ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("i",{staticClass:"cc IOTA-alt largeicon"}),e._v(" Iota ")])}],c={render:a,staticRenderFns:r};t.a=c},x86n:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a);t.a={data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances"))}},name:"Wallets",filters:{pretty:function(e){return r()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},trimString:function(e,t){return e.length>t?e.substring(0,t/2)+"..."+e.substring(e.length-t/2):e},round:function(e,t){return e.toFixed(t)}}}},xJD8:function(e,t,n){"use strict";t.a={}},yRJc:function(e,t,n){"use strict";function a(e){n("XicR")}var r=n("B3Kk"),c=n("Qzwg"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-4317712f",null);t.a=o.exports},ypnH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b453894e2aebd285fdcd.js.map