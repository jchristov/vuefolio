webpackJsonp([1],{"+CvP":function(t,e,n){"use strict";function a(t){n("jCpZ")}var r=n("x86n"),c=n("d9lZ"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-22728acc",null);e.a=o.exports},"/a9R":function(t,e){},"0fbG":function(t,e,n){"use strict";function a(t){n("/a9R")}var r=n("k6Hn"),c=n("TfiG"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-27ffc496",null);e.a=o.exports},"1NZg":function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),u=n("exGp"),l=n.n(u),p=n("RZG8"),f=n.n(p);e.a=function(){function t(t){return e.apply(this,arguments)}var e=l()(s.a.mark(function t(e){var n,a,c,i=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={},e.forEach(function(t,e){n[t.name]={},n[t.name].apiKey=t.apiKey,n[t.name].secret=t.apiSecret,n[t.name].proxy="https://cors-anywhere.herokuapp.com/"}),console.log(n),a={},c=f.a.exchanges.filter(function(t){return t in n}),console.log(c),t.next=8,o.a.all(c.map(function(){var t=l()(s.a.mark(function t(e){var r,c,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=new f.a[e](n[e]),!r.apiKey){t.next=7;break}return t.next=4,r.fetchBalance();case 4:c=t.sent,a[e]={};for(o in c.total)0!==c.total[o]&&(a[e][o]=c.total[o]);case 7:return t.abrupt("return",r);case 8:case"end":return t.stop()}},t,i)}));return function(e){return t.apply(this,arguments)}}()));case 8:console.log("Loaded exchanges:",c.join(", ")),localStorage.setItem("exchangeBalances",r()(a));case 10:case"end":return t.stop()}},t,this)}));return t}()},"3/U0":function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("d7EF"),s=n.n(c),i=n("W3Iv"),o=n.n(i),u=n("exGp"),l=n.n(u);e.a=function(){function t(t){return e.apply(this,arguments)}var e=l()(r.a.mark(function t(e){var n,a,c,i,u,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=["EUR","USD","BTC","ETH"],a="https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+e.join(",")+"&tsyms="+n.join(","),t.next=4,fetch(a,{});case 4:return c=t.sent,t.next=7,c.json();case 7:return i=t.sent,t.next=10,i.RAW;case 10:return u=t.sent,l={},o()(e).forEach(function(t){var e=s()(t,2),a=(e[0],e[1]);l[a]={},u.hasOwnProperty(a)?n.forEach(function(t,e){l[a][t]={},l[a][t].rate=u[a][t].PRICE,l[a][t].change=u[a][t].CHANGEPCT24HOUR}):(console.log(a+" was not in the CryptoCompare database"),l[a]={},n.forEach(function(t,e){l[a][t]={},l[a][t].rate=0,l[a][t].change=0}))}),t.abrupt("return",l);case 14:case"end":return t.stop()}},t,this)}));return t}()},B3Kk:function(t,e,n){"use strict";var a,r=n("mvHQ"),c=n.n(r),s=n("fZjL"),i=n.n(s),o=n("SBt/"),u=n("3/U0"),l=n("0fbG");a=localStorage.preferredCurrency?localStorage.preferredCurrency:"BTC",e.a={name:"Portfolio",data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances")),exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances")),manualBalances:JSON.parse(localStorage.getItem("manualBalances")),currencies:["EUR","BTC","ETH","USD"],currency:a}},computed:{portfolio:function(){return this.walletBalances||this.exchangeBalances?Object(o.a)(this.walletBalances,this.exchangeBalances,this.manualBalances):null}},asyncComputed:{exchangeRates:{get:function(){if(null!==this.portfolio){return Object(u.a)(i()(this.portfolio))}},default:null}},filters:{pretty:function(t){return c()(t,null,2)},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},components:{PortfolioTable:l.a},methods:{switchCurrency:function(t,e){this.currency=e,localStorage.setItem("preferredCurrency",e)}}}},Ix6N:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"exchanges"}},[n("p",[t._v("Overview of cryptocurrencies held on different exchanges")]),t._v(" "),n("table",[n("tbody",[n("tr",t._l(t.exchangeBalances,function(e,a){return n("th",{staticClass:"header"},[t._v("\n        "+t._s(t._f("capitalizeFirstLetter")(a))+"\n      ")])})),t._v(" "),n("tr",t._l(t.exchangeBalances,function(e,a){return n("td",t._l(e,function(e,a){return n("tr",[n("td",[t._v(t._s(a))]),n("td",[t._v(t._s(t._f("round")(e,6)))])])}))}))])])])},r=[],c={render:a,staticRenderFns:r};e.a=c},JZSy:function(t,e,n){"use strict";function a(){return localStorage.exchangeKeys?JSON.parse(localStorage.exchangeKeys):[{name:"bittrex",apiKey:"",apiSecret:""},{name:"liqui",apiKey:"",apiSecret:""},{name:"coinbase",apiKey:"",apiSecret:""},{name:"bl3p",apiKey:"",apiSecret:""},{name:"bitfinex2",apiKey:"",apiSecret:""},{name:"poloniex",apiKey:"",apiSecret:""}]}function r(){return localStorage.walletKeys?JSON.parse(localStorage.walletKeys):[{name:"Bitcoin",publicKeys:[]},{name:"Ethereum",publicKeys:[]},{name:"Neo",publicKeys:[]},{name:"Ark",publicKeys:[]}]}var c=n("mvHQ"),s=n.n(c),i=n("fjtl");e.a={name:"settings",data:function(){return{myIcon:"fa fa-refresh fa-2x",exchangeKeys:a(),walletKeys:r()}},methods:{changeExchangeKey:function(){localStorage.setItem("exchangeKeys",s()(this.exchangeKeys))},addWalletKey:function(t,e){t.publicKeys.push(e.target.value),localStorage.setItem("walletKeys",s()(this.walletKeys)),e.target.value=""},changeWalletKey:function(t,e,n){t.publicKeys[e]=n.target.value,""===n.target.value&&t.publicKeys.splice(e,1),localStorage.setItem("walletKeys",s()(this.walletKeys))},clearKeys:function(){localStorage.removeItem("exchangeKeys"),localStorage.removeItem("walletKeys"),localStorage.removeItem("exchangeBalances"),localStorage.removeItem("walletBalances"),this.walletKeys=r(),this.exchangeKeys=a()},sync:function(){var t=this;this.startRotating(),Object(i.a)(this.walletKeys,this.exchangeKeys).then(function(e){return t.stopRotating()})},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},startRotating:function(){this.myIcon="fa fa-spin fa-refresh fa-2x"},stopRotating:function(){this.myIcon="fa fa-refresh fa-2x"}}}},M93x:function(t,e,n){"use strict";function a(t){n("fDhl")}var r=n("xJD8"),c=n("rvXn"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,null,null);e.a=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),c=n("/ocq"),s=n("PlbA"),i=n.n(s),o=n("yRJc"),u=n("+CvP"),l=n("bfBb"),p=n("niH5");a.a.use(c.a),a.a.use(i.a);var f=[{path:"/",component:o.a},{path:"/wallets",component:u.a},{path:"/exchanges",component:l.a},{path:"/settings",component:p.a,props:{test:localStorage.test}}],v=new c.a({routes:f,mode:"history"});new a.a({el:"#app",template:"<App/>",components:{App:r.a},router:v}).$mount("#app")},Q3m2:function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);e.a=function(){function t(t){return e.apply(this,arguments)}var e=s()(r.a.mark(function t(e){var n,a,c,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://blockchain.info/q/addressbalance/"+e+"?confirmations=6",t.next=3,fetch(n,{});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,s={},s.BTC=c*Math.pow(10,-8),t.abrupt("return",s);case 10:case"end":return t.stop()}},t,this)}));return t}()},QiGa:function(t,e){},"SBt/":function(t,e,n){"use strict";function a(t,e,n){var a={};return i()(e).forEach(function(t){var e=c()(t,2),n=(e[0],e[1]);i()(n).forEach(function(t){var e=c()(t,2),n=e[0],r=e[1];a.hasOwnProperty(n)?a[n]+=r:a[n]=r})}),i()(t).forEach(function(t){var e=c()(t,2),n=(e[0],e[1]);i()(n).forEach(function(t){var e=c()(t,2),n=(e[0],e[1]);i()(n).forEach(function(t){var e=c()(t,2),n=e[0],r=e[1];a.hasOwnProperty(n)?a[n]+=r:a[n]=r})})}),i()(n).forEach(function(t){""!==t[1].token&&(a.hasOwnProperty(t[1].token)?a[t[1].token]+=parseFloat(t[1].balance):a[t[1].token]=parseFloat(t[1].balance))}),a}e.a=a;var r=n("d7EF"),c=n.n(r),s=n("W3Iv"),i=n.n(s)},TfiG:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"portfoliotable"}},[n("h1",[t._v(" Total Value of Portfolio: "+t._s(t._f("round")(t.totalValue,2))+" "+t._s(t.currency)+" ")]),t._v(" "),n("table",[n("tbody",[n("tr",[n("th",{staticClass:"str"},[t._v("Name")]),t._v(" "),n("th",{staticClass:"nr"},[t._v("Balance")]),t._v(" "),n("th",{staticClass:"nr"},[t._v("Price in "+t._s(t.currency))]),t._v(" "),n("th",{staticClass:"nr"},[t._v("Value in "+t._s(t.currency))]),t._v(" "),n("th",{staticClass:"nr"},[t._v("24h% Change")])]),t._v(" "),t._l(t.portfolio,function(e,a,r){return null!==t.rates?n("tr",[n("td",{staticClass:"str"},[t._v(t._s(a))]),t._v(" "),n("td",{staticClass:"nr"},[t._v(t._s(t._f("round")(e,3)))]),t._v(" "),n("td",{staticClass:"nr"},[t._v(t._s(t._f("round")(t.rates[a][t.currency].rate,5)))]),t._v(" "),n("td",{staticClass:"nr"},[t._v(t._s(t._f("round")(e*t.rates[a][t.currency].rate,2)))]),t._v(" "),t.rates[a][t.currency].change>0?n("td",{staticClass:"nrpos"},[t._v(t._s(t._f("round")(t.rates[a][t.currency].change,2)))]):t.rates[a][t.currency].change<0?n("td",{staticClass:"nrneg"},[t._v(t._s(t._f("round")(t.rates[a][t.currency].change,2)))]):n("td",{staticClass:"nr"},[t._v(t._s(t._f("round")(t.rates[a][t.currency].change,2)))])]):t._e()})],2)])])},r=[],c={render:a,staticRenderFns:r};e.a=c},XSQ0:function(t,e){},ZM6X:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a);e.a={name:"exchanges",data:function(){return{exchangeBalances:JSON.parse(localStorage.getItem("exchangeBalances"))}},filters:{pretty:function(t){return r()(t,null,2)},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},round:function(t,e){return t.toFixed(e)}}}},ZMPs:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a),c=n("Xxa5"),s=n.n(c),i=n("//Fk"),o=n.n(i),u=n("exGp"),l=n.n(u),p=n("Q3m2"),f=n("fQoU"),v=n("jHMd");e.a=function(){function t(t){return e.apply(this,arguments)}var e=l()(s.a.mark(function t(e){var n,a,c,i=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n={},t.t0=s.a.keys(e);case 2:if((t.t1=t.t0()).done){t.next=19;break}if(a=t.t1.value,c=e[a],"Bitcoin"!==c.name){t.next=9;break}return n.btc={},t.next=9,o.a.all(c.publicKeys.map(function(){var t=l()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(e);case 2:n.btc[e]=t.sent;case 3:case"end":return t.stop()}},t,i)}));return function(e){return t.apply(this,arguments)}}()));case 9:if("Ethereum"!==c.name){t.next=13;break}return n.ethereum={},t.next=13,o.a.all(c.publicKeys.map(function(){var t=l()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.a)(e);case 2:n.ethereum[e]=t.sent;case 3:case"end":return t.stop()}},t,i)}));return function(e){return t.apply(this,arguments)}}()));case 13:if("Neo"!==c.name){t.next=17;break}return n.neo={},t.next=17,o.a.all(c.publicKeys.map(function(){var t=l()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.a)(e);case 2:n.neo[e]=t.sent;case 3:case"end":return t.stop()}},t,i)}));return function(e){return t.apply(this,arguments)}}()));case 17:t.next=2;break;case 19:localStorage.setItem("walletBalances",r()(n));case 20:case"end":return t.stop()}},t,this)}));return t}()},bfBb:function(t,e,n){"use strict";function a(t){n("XSQ0")}var r=n("ZM6X"),c=n("Ix6N"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-58fe90b0",null);e.a=o.exports},d9lZ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wallets"}},[n("p",[t._v("Overview of cryptocurrencies held in different wallets")]),t._v(" "),n("table",[n("tbody",[n("tr",t._l(t.walletBalances,function(e,a){return n("th",{staticClass:"header"},[t._v(t._s(t._f("capitalizeFirstLetter")(a)))])})),t._v(" "),n("tr",t._l(t.walletBalances,function(e,a){return n("td",t._l(e,function(e,a){return n("ul",[n("span",{staticClass:"address",attrs:{title:a}},[t._v(t._s(t._f("trimString")(a,25)))]),t._v(" "),t._l(e,function(e,a){return n("tr",[n("td",[t._v(t._s(a)+" ")]),n("td",[t._v(t._s(t._f("round")(e,6)))])])})],2)}))}))])])])},r=[],c={render:a,staticRenderFns:r};e.a=c},fDhl:function(t,e){},fEan:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settings"}},[n("p",[n("i",{class:t.myIcon,attrs:{"aria-hidden":"true"},on:{click:t.sync}}),t._v(" "),n("span",[t._v("   ")]),t._v(" "),n("i",{staticClass:"fa fa-trash-o fa-2x",attrs:{"aria-hidden":"true"},on:{click:t.clearKeys}})]),t._v(" "),n("table",[n("tbody",[n("tr",t._l(t.exchangeKeys.slice(0,4),function(e){return n("th",[n("p",[t._v(t._s(t.capitalizeFirstLetter(e.name)))])])})),t._v(" "),n("tr",t._l(t.exchangeKeys.slice(0,4),function(e){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiKey,expression:"item.apiKey"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Key"},domProps:{value:e.apiKey},on:{change:t.changeExchangeKey,input:function(n){n.target.composing||t.$set(e,"apiKey",n.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiSecret,expression:"item.apiSecret"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Secret"},domProps:{value:e.apiSecret},on:{change:t.changeExchangeKey,input:function(n){n.target.composing||t.$set(e,"apiSecret",n.target.value)}}})])})),t._v(" "),n("tr",t._l(t.exchangeKeys.slice(4,8),function(e){return n("th",[n("p",[t._v(t._s(t.capitalizeFirstLetter(e.name)))])])})),t._v(" "),n("tr",t._l(t.exchangeKeys.slice(4,8),function(e){return n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiKey,expression:"item.apiKey"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Key"},domProps:{value:e.apiKey},on:{change:t.changeExchangeKey,input:function(n){n.target.composing||t.$set(e,"apiKey",n.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.apiSecret,expression:"item.apiSecret"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter API Secret"},domProps:{value:e.apiSecret},on:{change:t.changeExchangeKey,input:function(n){n.target.composing||t.$set(e,"apiSecret",n.target.value)}}})])})),t._v(" "),n("tr",t._l(t.walletKeys,function(e){return n("th",{attrs:{"vertical-align":"top"}},[n("p",[t._v(t._s(t.capitalizeFirstLetter(e.name)))])])})),t._v(" "),n("tr",t._l(t.walletKeys,function(e){return n("td",{attrs:{"vertical-align":"top"}},[t._l(e.publicKeys,function(a,r){return n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.publicKeys[r],expression:"wallet.publicKeys[index]"}],staticClass:"input",domProps:{value:e.publicKeys[r]},on:{change:function(n){t.changeWalletKey(e,r,n)},input:function(n){n.target.composing||t.$set(e.publicKeys,r,n.target.value)}}})])}),t._v(" "),n("input",{staticClass:"input",attrs:{value:"",placeholder:"Enter Public Key"},on:{change:function(n){t.addWalletKey(e,n)}}})],2)}))])]),t._v(" "),n("h3",[t._v("Instructions")]),t._v(" "),n("p",[t._v("Enter API keys for exchanges and public keys for cryptocurrencies held in your own wallets and press the sync button")]),t._v(" "),n("p",[t._v('Then go back to "Portfolio"')]),t._v(" "),n("p",[t._v("For Bitcoin: export xpub key using your wallet software. Does not work with Segwit (yet?)")]),t._v(" "),n("p",[t._v("For Ethereum: all ERC20 token balances are loaded as well")]),t._v(" "),n("p",[t._v("Ark not implemented yet")]),t._v(" "),n("p")])},r=[],c={render:a,staticRenderFns:r};e.a=c},fQoU:function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);e.a=function(){function t(t){return e.apply(this,arguments)}var e=s()(r.a.mark(function t(e){var n,a,c,s,i,o,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://cors-anywhere.herokuapp.com/https://api.ethplorer.io/getAddressInfo/"+e+"?apiKey=freekey",t.next=3,fetch(n,{});case 3:return a=t.sent,t.next=6,a.json();case 6:c=t.sent,s={},s.ETH=c.ETH.balance;for(i in c.tokens)o=c.tokens[i],u=o.tokenInfo.symbol,s[u]=o.balance*Math.pow(10,-18);return s.hasOwnProperty("MOD")&&(s.MOD*=Math.pow(10,18)),s.hasOwnProperty("RHOC")&&(s.RHOC*=Math.pow(10,10)),t.abrupt("return",s);case 13:case"end":return t.stop()}},t,this)}));return t}()},fjtl:function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("//Fk"),s=n.n(c),i=n("exGp"),o=n.n(i),u=n("ZMPs"),l=n("1NZg");e.a=function(){function t(t,n){return e.apply(this,arguments)}var e=o()(r.a.mark(function t(e,n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s.a.all([Object(u.a)(e),Object(l.a)(n)]));case 1:case"end":return t.stop()}},t,this)}));return t}()},jCpZ:function(t,e){},jHMd:function(t,e,n){"use strict";var a=n("Xxa5"),r=n.n(a),c=n("exGp"),s=n.n(c);e.a=function(){function t(t){return e.apply(this,arguments)}var e=s()(r.a.mark(function t(e){var n,a,c,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://cors-anywhere.herokuapp.com/http://api.neonwallet.com/v2/address/balance/"+e,t.next=3,fetch(n,{});case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,s={},s.NEO=c.NEO.balance,s.GAS=c.GAS.balance,t.abrupt("return",s);case 11:case"end":return t.stop()}},t,this)}));return t}()},k6Hn:function(t,e,n){"use strict";var a=n("fZjL"),r=n.n(a);e.a={name:"portfoliotable",data:function(){return{total:0}},props:["portfolio","rates","currency"],computed:{totalValue:function(){var t=0,e=this.portfolio,n=this.rates,a=this.currency;return null!==n&&r()(e).forEach(function(r,c){t+=e[r]*n[r][a].rate}),t}},filters:{round:function(t,e){return t.toFixed(e)}}}},lxSn:function(t,e){},niH5:function(t,e,n){"use strict";function a(t){n("lxSn")}var r=n("JZSy"),c=n("fEan"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-96c6ce5a",null);e.a=o.exports},rvXn:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[t._v("Portfolio")]),t._v(" "),n("router-link",{attrs:{to:"/wallets"}},[t._v("Wallets")]),t._v(" "),n("router-link",{attrs:{to:"/exchanges"}},[t._v("Exchanges")]),t._v(" "),n("router-link",{attrs:{to:"/manual"}},[t._v("Manual Entry")]),t._v(" "),n("router-link",{attrs:{to:"/settings"}},[t._v("Settings")]),t._v(" "),n("router-view")],1)},r=[],c={render:a,staticRenderFns:r};e.a=c},tF2m:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[null!==t.portfolio?n("span",[n("p",[t._v("Switch currency:\n      "),n("button",{on:{click:function(e){t.switchCurrency(e,"BTC")}}},[t._v("Ƀ")]),t._v(" "),n("button",{on:{click:function(e){t.switchCurrency(e,"ETH")}}},[t._v("Ξ")]),t._v(" "),n("button",{on:{click:function(e){t.switchCurrency(e,"EUR")}}},[t._v("€")]),t._v(" "),n("button",{on:{click:function(e){t.switchCurrency(e,"USD")}}},[t._v("$")])]),t._v(" "),n("PortfolioTable",{attrs:{portfolio:t.portfolio,rates:t.exchangeRates,currency:t.currency}}),t._v(" "),t._m(0)],1):n("span",[n("p",[t._v("Hi. Go to Settings")])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"footer"}},[t._v("\n      If you enjoy using this web app, please consider donating. \n      "),n("i",{staticClass:"cc BTC"}),t._v("3BUo1JcBpbG4JuG1QaPqCoPtDzPtGhh \n      "),n("i",{staticClass:"cc ETH"}),t._v("ETH: 0x4cf2E9f6DBAd97Fd901568D37Bb7EfAE2F4f3\n    ")])}],c={render:a,staticRenderFns:r};e.a=c},x86n:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a);e.a={data:function(){return{walletBalances:JSON.parse(localStorage.getItem("walletBalances"))}},name:"Wallets",filters:{pretty:function(t){return r()(t,null,2)},capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},trimString:function(t,e){return t.length>e?t.substring(0,e)+"...":t},round:function(t,e){return t.toFixed(e)}}}},xJD8:function(t,e,n){"use strict";e.a={}},yRJc:function(t,e,n){"use strict";function a(t){n("QiGa")}var r=n("B3Kk"),c=n("tF2m"),s=n("VU/8"),i=a,o=s(r.a,c.a,!1,i,"data-v-46eb5970",null);e.a=o.exports}},["NHnr"]);
//# sourceMappingURL=app.21bb08a9b1a95b30e755.js.map