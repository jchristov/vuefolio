webpackJsonp([1],{"+CvP":function(e,t,n){"use strict";function a(e){n("jCpZ")}var r=n("x86n"),c=n("d9lZ"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-22728acc",null);t.a=o.exports},"/a9R":function(e,t){},"07PK":function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("fZjL"),s=n.n(c),i=n("SBt/"),o=n("3/U0"),u=n("0fbG");t.a={name:"HelloWorld",data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances")),exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances")),currencies:["EUR","BTC","ETH","USD"],currency:"ETH"}},computed:{portfolio:function(){return Object(i.a)(this.walletBalances,this.exchangeBalances)}},asyncComputed:{exchangeRates:{get:function(){var e=Object(o.a)(s()(this.portfolio));return console.log(e),e},default:null}},filters:{pretty:function(e){return r()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},components:{PortfolioTable:u.a},methods:{switchCurrency:function(){var e=this,t=this.currencies.findIndex(function(t){return t===e.currency});this.currency=this.currencies[(t+1)%4]}}}},"0fbG":function(e,t,n){"use strict";function a(e){n("/a9R")}var r=n("k6Hn"),c=n("TfiG"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-27ffc496",null);t.a=o.exports},"1NZg":function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),u=n("exGp"),l=n.n(u),p=n("RZG8"),f=n.n(p);t.a=function(){function e(e){return t.apply(this,arguments)}var t=l()(s.a.mark(function e(t){var n,a,c,i=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t.forEach(function(e,t){n[e.name]={},n[e.name].apiKey=e.apiKey,n[e.name].secret=e.apiSecret,n[e.name].proxy="https://cors-anywhere.herokuapp.com/"}),console.log(n),a={},c=f.a.exchanges.filter(function(e){return e in n}),console.log(c),e.next=8,o.a.all(c.map(function(){var e=l()(s.a.mark(function e(t){var r,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new f.a[t](n[t]),!r.apiKey){e.next=7;break}return e.next=4,r.fetchBalance();case 4:c=e.sent,a[t]={};for(o in c.total)0!==c.total[o]&&(a[t][o]=c.total[o]);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 8:console.log("Loaded exchanges:",c.join(", ")),localStorage.setItem("exchangeBalances",r()(a));case 10:case"end":return e.stop()}},e,this)}));return e}()},"3/U0":function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("d7EF"),s=n.n(c),i=n("W3Iv"),o=n.n(i),u=n("exGp"),l=n.n(u);t.a=function(){function e(e){return t.apply(this,arguments)}var t=l()(r.a.mark(function e(t){var n,a,c,i,u,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["EUR","USD","BTC","ETH"],a="https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+t.join(",")+"&tsyms="+n.join(","),e.next=4,fetch(a,{});case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.next=10,i.RAW;case 10:return u=e.sent,l={},o()(t).forEach(function(e){var t=s()(e,2),a=(t[0],t[1]);l[a]={},u.hasOwnProperty(a)?n.forEach(function(e,t){l[a][e]={},l[a][e].rate=u[a][e].PRICE,l[a][e].change=u[a][e].CHANGEPCT24HOUR}):(console.log(a+" was not in the CryptoCompare database"),l[a]={},n.forEach(function(e,t){l[a][e]={},l[a][e].rate=0,l[a][e].change=0}))}),e.abrupt("return",l);case 14:case"end":return e.stop()}},e,this)}));return e}()},Ix6N:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"exchanges"}},[n("p",[e._v("Overview of cryptocurrencies held on different exchanges")]),e._v(" "),n("table",[n("tbody",[n("tr",e._l(e.exchangeBalances,function(t,a){return n("th",{staticClass:"header"},[e._v("\n        "+e._s(e._f("capitalizeFirstLetter")(a))+"\n      ")])})),e._v(" "),n("tr",e._l(e.exchangeBalances,function(t,a){return n("td",e._l(t,function(t,a){return n("tr",[n("td",[e._v(e._s(a))]),n("td",[e._v(e._s(t))])])}))}))])])])},r=[],c={render:a,staticRenderFns:r};t.a=c},JZSy:function(e,t,n){"use strict";function a(){return localStorage.exchangeKeys?JSON.parse(localStorage.exchangeKeys):[{name:"bittrex",apiKey:"",apiSecret:""},{name:"liqui",apiKey:"",apiSecret:""},{name:"coinbase",apiKey:"",apiSecret:""},{name:"bl3p",apiKey:"",apiSecret:""},{name:"bitfinex",apiKey:"",apiSecret:""}]}function r(){return localStorage.walletKeys?JSON.parse(localStorage.walletKeys):[{name:"Bitcoin",publicKeys:[]},{name:"Ethereum",publicKeys:[]},{name:"Neo",publicKeys:[]},{name:"Ark",publicKeys:[]}]}var c=n("mvHQ"),s=n.n(c),i=n("ZMPs"),o=n("1NZg");t.a={name:"settings",data:function(){return{exchangeKeys:a(),walletKeys:r()}},methods:{changeExchangeKey:function(){localStorage.setItem("exchangeKeys",s()(this.exchangeKeys))},addWalletKey:function(e,t){e.publicKeys.push(t.target.value),localStorage.setItem("walletKeys",s()(this.walletKeys)),t.target.value=""},changeWalletKey:function(e,t,n){e.publicKeys[t]=n.target.value,""===n.target.value&&e.publicKeys.splice(t,1),localStorage.setItem("walletKeys",s()(this.walletKeys))},clearKeys:function(){localStorage.removeItem("exchangeKeys"),localStorage.removeItem("walletKeys"),this.walletKeys=r(),this.exchangeKeys=a()},sync:function(){Object(i.a)(this.walletKeys).then(function(e){return alert("Loaded balances from wallets")}),Object(o.a)(this.exchangeKeys).then(function(e){return alert("Loaded balances from exchanges")})},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}},LH93:function(e,t){},LzIP:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("button",{on:{click:e.switchCurrency}},[e._v("Switch Currency")]),e._v(" "),n("PortfolioTable",{attrs:{portfolio:e.portfolio,rates:e.exchangeRates,currency:e.currency}})],1)},r=[],c={render:a,staticRenderFns:r};t.a=c},M93x:function(e,t,n){"use strict";function a(e){n("fDhl")}var r=n("xJD8"),c=n("rvXn"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),c=n("/ocq"),s=n("PlbA"),i=n.n(s),o=n("gORT"),u=n("+CvP"),l=n("bfBb"),p=n("niH5");a.a.use(c.a),a.a.use(i.a);var f=[{path:"/",component:o.a},{path:"/wallets",component:u.a},{path:"/exchanges",component:l.a},{path:"/settings",component:p.a,props:{test:localStorage.test}}],v=new c.a({routes:f,mode:"history"});new a.a({el:"#app",template:"<App/>",components:{App:r.a},router:v}).$mount("#app")},Q3m2:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://blockchain.info/q/addressbalance/"+t+"?confirmations=6",e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,s={},s.BTC=c*Math.pow(10,-8),e.abrupt("return",s);case 10:case"end":return e.stop()}},e,this)}));return e}()},"SBt/":function(e,t,n){"use strict";function a(e,t){var n={};return i()(t).forEach(function(e){var t=c()(e,2),a=(t[0],t[1]);i()(a).forEach(function(e){var t=c()(e,2),a=t[0],r=t[1];n.hasOwnProperty(a)?n[a]+=r:n[a]=r})}),i()(e).forEach(function(e){var t=c()(e,2),a=(t[0],t[1]);i()(a).forEach(function(e){var t=c()(e,2),a=(t[0],t[1]);i()(a).forEach(function(e){var t=c()(e,2),a=t[0],r=t[1];n.hasOwnProperty(a)?n[a]+=r:n[a]=r})})}),n}t.a=a;var r=n("d7EF"),c=n.n(r),s=n("W3Iv"),i=n.n(s)},TfiG:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"portfoliotable"}},[n("h1",[e._v(" Total Value of Portfolio: "+e._s(e._f("round")(e.totalValue,2))+" "+e._s(e.currency)+" ")]),e._v(" "),n("h1",[e._v(" €, $, Ξ, B")]),e._v(" "),n("table",[n("tbody",[n("tr",[n("th",{staticClass:"str"},[e._v("Name")]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Price in "+e._s(e.currency))]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Balance")]),e._v(" "),n("th",{staticClass:"nr"},[e._v("Value in "+e._s(e.currency))]),e._v(" "),n("th",{staticClass:"nr"},[e._v("24h% Change")])]),e._v(" "),e._l(e.portfolio,function(t,a,r){return null!==e.rates?n("tr",[n("td",{staticClass:"str"},[e._v(e._s(a))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(e.rates[a][e.currency].rate,5)))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t,3)))]),e._v(" "),n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(t*e.rates[a][e.currency].rate,2)))]),e._v(" "),e.rates[a][e.currency].change>0?n("td",{staticClass:"nrpos"},[e._v(e._s(e._f("round")(e.rates[a][e.currency].change,2)))]):e.rates[a][e.currency].change<0?n("td",{staticClass:"nrneg"},[e._v(e._s(e._f("round")(e.rates[a][e.currency].change,2)))]):n("td",{staticClass:"nr"},[e._v(e._s(e._f("round")(e.rates[a][e.currency].change,2)))])]):e._e()})],2)])])},r=[],c={render:a,staticRenderFns:r};t.a=c},XSQ0:function(e,t){},ZM6X:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a);t.a={name:"exchanges",data:function(){return{exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances"))}},filters:{pretty:function(e){return r()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}},ZMPs:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),u=n("exGp"),l=n.n(u),p=n("Q3m2"),f=n("fQoU"),v=n("jHMd");t.a=function(){function e(e){return t.apply(this,arguments)}var t=l()(s.a.mark(function e(t){var n,a,c,i=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={},e.t0=s.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=19;break}if(a=e.t1.value,c=t[a],"Bitcoin"!==c.name){e.next=9;break}return n.btc={},e.next=9,o.a.all(c.publicKeys.map(function(){var e=l()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(t);case 2:n.btc[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 9:if("Ethereum"!==c.name){e.next=13;break}return n.ethereum={},e.next=13,o.a.all(c.publicKeys.map(function(){var e=l()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(t);case 2:n.ethereum[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 13:if("Neo"!==c.name){e.next=17;break}return n.neo={},e.next=17,o.a.all(c.publicKeys.map(function(){var e=l()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)(t);case 2:n.neo[t]=e.sent;case 3:case"end":return e.stop()}},e,i)}));return function(t){return e.apply(this,arguments)}}()));case 17:e.next=2;break;case 19:localStorage.setItem("walletBalances",r()(n));case 20:case"end":return e.stop()}},e,this)}));return e}()},bfBb:function(e,t,n){"use strict";function a(e){n("XSQ0")}var r=n("ZM6X"),c=n("Ix6N"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-58fe90b0",null);t.a=o.exports},d9lZ:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wallets"}},[n("p",[e._v("Overview of cryptocurrencies held in different wallets")]),e._v(" "),n("table",[n("tbody",[n("tr",e._l(e.walletBalances,function(t,a){return n("th",{staticClass:"header"},[e._v(e._s(e._f("capitalizeFirstLetter")(a)))])})),e._v(" "),n("tr",e._l(e.walletBalances,function(t,a){return n("td",e._l(t,function(t,a){return n("ul",[n("span",{staticClass:"address",attrs:{title:a}},[e._v(e._s(e._f("trimString")(a,25)))]),e._v(" "),e._l(t,function(t,a){return n("tr",[n("td",[e._v(e._s(a)+" ")]),n("td",[e._v(e._s(t))])])})],2)}))}))])])])},r=[],c={render:a,staticRenderFns:r};t.a=c},fDhl:function(e,t){},fEan:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("p",[e._v("Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets")]),e._v(" "),n("p",[e._v("For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)")]),e._v(" "),n("p",[e._v("Ark not implemented yet")]),e._v(" "),n("table",[n("tbody",[n("tr",e._l(e.exchangeKeys,function(t){return n("th",[n("p",[e._v(e._s(e.capitalizeFirstLetter(t.name)))])])})),e._v(" "),n("tr",e._l(e.exchangeKeys,function(t){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiKey,expression:"item.apiKey"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Key"},domProps:{value:t.apiKey},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiKey",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.apiSecret,expression:"item.apiSecret"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Secret"},domProps:{value:t.apiSecret},on:{change:e.changeExchangeKey,input:function(n){n.target.composing||e.$set(t,"apiSecret",n.target.value)}}})])})),e._v(" "),n("tr",e._l(e.walletKeys,function(t){return n("th",{attrs:{"vertical-align":"top"}},[n("p",[e._v(e._s(e.capitalizeFirstLetter(t.name)))])])})),e._v(" "),n("tr",e._l(e.walletKeys,function(t){return n("td",{attrs:{"vertical-align":"top"}},[e._l(t.publicKeys,function(a,r){return n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.publicKeys[r],expression:"wallet.publicKeys[index]"}],staticClass:"input",domProps:{value:t.publicKeys[r]},on:{change:function(n){e.changeWalletKey(t,r,n)},input:function(n){n.target.composing||e.$set(t.publicKeys,r,n.target.value)}}})])}),e._v(" "),n("input",{staticClass:"input",attrs:{value:"",placeholder:"Enter Public Key"},on:{change:function(n){e.addWalletKey(t,n)}}})],2)}))])]),e._v(" "),n("button",{on:{click:e.clearKeys}},[e._v("Clear")]),e._v(" "),n("button",{on:{click:e.sync}},[e._v("Synchronize")])])},r=[],c={render:a,staticRenderFns:r};t.a=c},fQoU:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s,i,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://api.ethplorer.io/getAddressInfo/"+t+"?apiKey=freekey",e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,s={},s.ETH=c.ETH.balance;for(i in c.tokens)o=c.tokens[i],u=o.tokenInfo.symbol,s[u]=o.balance*Math.pow(10,-18);return e.abrupt("return",s);case 11:case"end":return e.stop()}},e,this)}));return e}()},gORT:function(e,t,n){"use strict";function a(e){n("LH93")}var r=n("07PK"),c=n("LzIP"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-4103f610",null);t.a=o.exports},jCpZ:function(e,t){},jHMd:function(e,t,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);t.a=function(){function e(e){return t.apply(this,arguments)}var t=s()(r.a.mark(function e(t){var n,a,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cors-anywhere.herokuapp.com/http://api.neonwallet.com/v2/address/balance/"+t,e.next=3,fetch(n,{});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,s={},s.NEO=c.NEO.balance,s.GAS=c.GAS.balance,e.abrupt("return",s);case 11:case"end":return e.stop()}},e,this)}));return e}()},k6Hn:function(e,t,n){"use strict";var a=n("fZjL"),r=n.n(a);t.a={name:"portfoliotable",data:function(){return{total:0}},props:["portfolio","rates","currency"],computed:{totalValue:function(){var e=0,t=this.portfolio,n=this.rates,a=this.currency;return null!==n&&r()(t).forEach(function(r,c){e+=t[r]*n[r][a].rate}),e}},filters:{round:function(e,t){return e.toFixed(t)}}}},lxSn:function(e,t){},niH5:function(e,t,n){"use strict";function a(e){n("lxSn")}var r=n("JZSy"),c=n("fEan"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-96c6ce5a",null);t.a=o.exports},rvXn:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[e._v("Portfolio")]),e._v(" "),n("router-link",{attrs:{to:"/wallets"}},[e._v("Wallets")]),e._v(" "),n("router-link",{attrs:{to:"/exchanges"}},[e._v("Exchanges")]),e._v(" "),n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")]),e._v(" "),n("router-view")],1)},r=[],c={render:a,staticRenderFns:r};t.a=c},x86n:function(e,t,n){"use strict";var a=n("mvHQ"),r=n.n(a);t.a={data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances"))}},name:"Wallets",filters:{pretty:function(e){return r()(e,null,2)},capitalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},trimString:function(e,t){return e.length>t?e.substring(0,t)+"...":e}}}},xJD8:function(e,t,n){"use strict";t.a={}}},["NHnr"]);
//# sourceMappingURL=app.031979ea43a15a68a720.js.map