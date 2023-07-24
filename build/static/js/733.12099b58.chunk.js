"use strict";(self.webpackChunkdex_2023=self.webpackChunkdex_2023||[]).push([[733],{9733:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(9439),a=n(2791),s=n(8920),c=n(6888),o=n(4165),i=n(5861),d=n(4029),l=n(9601),u=n(6856),x=n(1736),p=n(8308),h=n(8674),v=n(757),f=n(1221),b=n(3426),m=n(135),j=n(2460),k=n(4581),y=n(7846),g=n(9830),C=n(184),w=[{name:"Pay Cash",value:1},{name:"Get Crypto",value:2},{name:"Completed",value:3}];function Z(e){e.walletAddress;var t=e.chainId,n=e.tokensGoerli,s=e.tokensMumbai,c=(0,p.mA)(),Z=(c.address,c.connector,c.isConnected),P=(0,a.useState)([]),S=(0,r.Z)(P,2),N=S[0],I=S[1],R=(0,a.useState)([]),A=(0,r.Z)(R,2),T=A[0],E=A[1],M=(0,a.useState)([]),B=(0,r.Z)(M,2),F=B[0],L=B[1],U=(0,a.useState)([]),D=(0,r.Z)(U,2),X=D[0],G=D[1];console.log({checkData:X});var O=(0,a.useState)(.1),H=(0,r.Z)(O,2),K=(H[0],H[1]),_=(0,a.useState)(""),q=(0,r.Z)(_,2),J=q[0],Y=q[1],Q=(0,a.useState)([]),W=(0,r.Z)(Q,2),z=W[0],V=W[1],$=(0,a.useState)(),ee=(0,r.Z)($,2),te=(ee[0],ee[1],(0,a.useState)()),ne=(0,r.Z)(te,2),re=(ne[0],ne[1]),ae=(0,a.useState)(),se=(0,r.Z)(ae,2),ce=se[0],oe=se[1],ie=(0,a.useState)(),de=(0,r.Z)(ie,2),le=de[0],ue=de[1],xe=(0,a.useState)(!1),pe=(0,r.Z)(xe,2),he=(pe[0],pe[1],(0,a.useState)(!1)),ve=(0,r.Z)(he,2),fe=ve[0],be=ve[1],me=(0,a.useState)(!1),je=(0,r.Z)(me,2),ke=je[0],ye=je[1],ge=(0,a.useState)(!1),Ce=(0,r.Z)(ge,2),we=Ce[0],Ze=Ce[1],Pe=(0,a.useState)(null),Se=(0,r.Z)(Pe,2),Ne=Se[0],Ie=Se[1];console.log({activeTrade:Ne});var Re=(0,p.mx)();function Ae(){return Ae=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r,a,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new d.CH(J,z,Re.data),e.t0=le,e.next="Pay Cash"===e.t0?4:"Get Crypto"===e.t0?15:"Completed"===e.t0?26:37;break;case 4:return console.info("fetching Pay Cash transactions"),e.next=7,t.getBanksHasNotPaidCash();case 7:return r=e.sent,e.next=10,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=t.dexShare.toString(),a={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,tokenDecimals:t.tokenDecimals,dexShare:r,endBlock:t.endBlock,completed:t.completed,clientPaidCrypto:t.clientPaidCrypto,bankPaidCash:t.bankPaidCash,clientReceivedCash:t.clientReceivedCash,bankReceivedCrypto:t.bankReceivedCrypto,started:t.started},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:return n=e.sent,a=n.filter((function(e){return!1===e.bankPaidCash})),L(a),be(!0),e.abrupt("break",39);case 15:return console.info("fetching Get Crypto transactions"),e.next=18,t.getBanksHasNotReceivedCrypto();case 18:return r=e.sent,e.next=21,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=t.dexShare.toString(),a={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,tokenDecimals:t.tokenDecimals,dexShare:r,endBlock:t.endBlock,completed:t.completed,clientPaidCrypto:t.clientPaidCrypto,bankPaidCash:t.bankPaidCash,clientReceivedCash:t.clientReceivedCash,bankReceivedCrypto:t.bankReceivedCrypto,started:t.started},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 21:return n=e.sent,s=n.filter((function(e){return!1===e.bankReceivedCrypto})),E(s),ye(!0),e.abrupt("break",39);case 26:return console.info("fetching Completed transactions"),e.next=29,t.getBanksCompletedTransacts();case 29:return r=e.sent,e.next=32,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=t.dexShare.toString(),a={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,tokenDecimals:t.tokenDecimals,dexShare:r,endBlock:t.endBlock,completed:t.completed,clientPaidCrypto:t.clientPaidCrypto,bankPaidCash:t.bankPaidCash,clientReceivedCash:t.clientReceivedCash,bankReceivedCrypto:t.bankReceivedCrypto,started:t.started},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 32:return n=e.sent,c=n.filter((function(e){return!0===e.completed})),G(c),Ze(!0),e.abrupt("break",39);case 37:console.log("getClientsTransacts","in default"),r=["Please choose a transaction!"];case 39:case"end":return e.stop()}}),e)}))),Ae.apply(this,arguments)}function Te(){return(Te=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===Ne||void 0===Ne?void 0:Ne.txId)>0)){e.next=15;break}return e.prev=1,t=new d.CH(J,z,Re.data),e.next=5,t.bankPayCash(null===Ne||void 0===Ne?void 0:Ne.txId);case 5:return n=e.sent,e.next=8,n.wait();case 8:alert("Transaction completed. You have Paid the Client in Cash!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Upload Error"+e.t0),alert("Upload Error"+e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function Ee(){return(Ee=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===Ne||void 0===Ne?void 0:Ne.txId)>0)){e.next=15;break}return e.prev=1,t=new d.CH(J,z,Re.data),e.next=5,t.bankGetCrypto(null===Ne||void 0===Ne?void 0:Ne.txId,null===Ne||void 0===Ne?void 0:Ne.dexShare,{value:null===Ne||void 0===Ne?void 0:Ne.dexShare,gasLimit:3e6});case 5:return n=e.sent,e.next=8,n.wait();case 8:alert("Transaction completed. You have Received the Crypto!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Upload Error"+e.t0),alert("Upload Error"+e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){t&&function(){try{switch(t){case 5:Y(j.L),V(j.M),re(18),oe("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),K(.1),I(n);break;case 80001:Y(y.L),V(y.M),re(18),oe("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),K(.1),I(s);break;case 97:Y(k.L),V(k.M),re(18),oe("0x4fabb145d64652a948d72533023f6e7a623c7c53"),K(.1),I(n);break;case 1:Y(h.L),V(h.M),re(18),oe("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),K(.1),I(n);break;case 137:Y(v.L),V(v.M),re(18),oe("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),K(.1),I(s);break;case 56:Y(f.L),V(f.M),re(18),oe("0x4fabb145d64652a948d72533023f6e7a623c7c53"),K(.1),I(n);break;case 10:Y(m.L),V(m.M),re(18),oe("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),K(.1),I(n);break;case 42161:Y(b.L),V(b.M),re(18),oe("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),K(.1),I(n);break;default:console.warn("Please choose a token!")}}catch(e){console.log(e)}}()}),[t]),(0,a.useEffect)((function(){t&&void 0!==le&&function(){Ae.apply(this,arguments)}(),console.log("activeTransaction type",le)}),[le,ce]),(0,C.jsx)(C.Fragment,{children:Z?(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,C.jsx)("h5",{className:"text-gray-500",children:"Transaction Type:"}),(0,C.jsx)("div",{className:"my-3 flex flex-row gap-2 start",onChange:function(e){return ue(e.target.value)},children:w.map((function(e){return(0,C.jsxs)("label",{children:[(0,C.jsx)("input",{type:"radio",id:"tab",name:"tab",value:e.name,className:"peer sr-only"}),(0,C.jsx)("span",{className:"px-2 py-1 rounded-md cursor-pointer ".concat(e.name===le?"bg-sky-600 text-gray-200":"bg-black/50 text-gray-200/30"," border border-transparent peer-hover:border-gray-200/30 peer-checked:bg-sky-600 peer-checked:hover:border-transparent peer-checked:text-gray-200"),children:e.name})]},e.value)}))})]}),(0,C.jsxs)("div",{className:"overflow-x-auto relative",children:[le===w[0].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","action"]}),(0,C.jsx)(x.yO,{children:F.length>0?F.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){Ie(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:!0===(null===e||void 0===e?void 0:e.bankPaidCash)?(0,C.jsx)("button",{type:"button",children:"Paid"}):(0,C.jsx)("button",{type:"button",className:"bg-red-600 text-white cursor-pointer px-2 py-1",onClick:function(){!function(){Te.apply(this,arguments)}()},children:"Mark as cash paid"})})]}):null})},t)})):fe?F.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No active transactions"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]})})]}),le===w[1].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","action"]}),(0,C.jsx)(x.yO,{children:T.length>0?T.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){Ie(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:!0===(null===e||void 0===e?void 0:e.bankReceivedCrypto)?(0,C.jsx)("button",{type:"button",children:"Received"}):(0,C.jsx)("button",{type:"button",className:"bg-red-600 text-white cursor-pointer px-2 py-1",onClick:function(){!function(){Ee.apply(this,arguments)}()},children:"Get Crypto"})})]}):null})},t)})):ke?F.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No active transactions"}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{})]})})]}),le===w[2].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","completed"]}),(0,C.jsx)(x.yO,{children:X.length>0?X.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){Ie(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=N.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:e.completed?(0,C.jsx)(u.smy,{}):(0,C.jsx)(u.vB0,{})})]}):null})},t)})):we?X.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]})})]})]})]}):null})}var P=n(4539),S=n(6008),N=n(2069),I=n(4708),R=n(1846),A=n(1598),T=n(225),E=n(1434),M=n(3988),B=[{name:"Get Cash",value:1},{name:"Pay Crypto",value:2},{name:"Completed",value:3}];function F(e){var t=e.walletAddress,n=e.chainId,s=e.tokensGoerli,c=e.tokensMumbai,h=(0,p.mA)(),v=(h.address,h.connector,h.isConnected),f=(0,a.useState)([]),b=(0,r.Z)(f,2),m=b[0],j=b[1],k=(0,a.useState)([]),y=(0,r.Z)(k,2),w=y[0],Z=y[1],F=(0,a.useState)([]),L=(0,r.Z)(F,2),U=L[0],D=L[1],X=(0,a.useState)([]),G=(0,r.Z)(X,2),O=G[0],H=G[1],K=(0,a.useState)(.1),_=(0,r.Z)(K,2),q=(_[0],_[1]),J=(0,a.useState)(""),Y=(0,r.Z)(J,2),Q=Y[0],W=Y[1],z=(0,a.useState)([]),V=(0,r.Z)(z,2),$=V[0],ee=V[1],te=(0,a.useState)(),ne=(0,r.Z)(te,2),re=(ne[0],ne[1],(0,a.useState)()),ae=(0,r.Z)(re,2),se=(ae[0],ae[1]),ce=(0,a.useState)(),oe=(0,r.Z)(ce,2),ie=oe[0],de=oe[1],le=(0,a.useState)(),ue=(0,r.Z)(le,2),xe=ue[0],pe=ue[1],he=(0,a.useState)(!1),ve=(0,r.Z)(he,2),fe=(ve[0],ve[1],(0,a.useState)(null)),be=(0,r.Z)(fe,2),me=be[0],je=be[1];console.log({activeTrade:me});var ke=(0,a.useState)(!1),ye=(0,r.Z)(ke,2),ge=ye[0],Ce=ye[1],we=(0,a.useState)(!1),Ze=(0,r.Z)(we,2),Pe=Ze[0],Se=Ze[1],Ne=(0,a.useState)(!1),Ie=(0,r.Z)(Ne,2),Re=Ie[0],Ae=Ie[1],Te=(0,a.useState)({status:"",message:""}),Ee=(0,r.Z)(Te,2),Me=Ee[0],Be=Ee[1],Fe=(0,p.mx)(),Le="\n  Govercity Connect >>\n  Transact: Transfer\n  Address: ".concat(t,"\n  "),Ue=(0,p.QW)({message:Le}),De=(Ue.data,Ue.signMessage);function Xe(){return Xe=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r,a,s,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new d.CH(Q,$,Fe.data),e.t0=xe,e.next="Get Cash"===e.t0?4:"Pay Crypto"===e.t0?15:"Completed"===e.t0?26:37;break;case 4:return console.info("Fetching Get Cash transactions"),e.next=7,t.getBanksHasNotReceivedCash();case 7:return r=e.sent,e.next=10,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=t.CryptoPrice.toString(),a=t.dexShare.toString(),s={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,CryptoPriceRaw:r,tokenDecimals:t.tokenDecimals,dexShare:a,endBlock:t.endBlock,completed:t.completed,clientPaidCash:t.clientPaidCash,bankReceivedCash:t.bankReceivedCash,bankPaidCrypto:t.bankPaidCrypto,clientReceivedCrypto:t.clientReceivedCrypto,started:t.started},e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:return n=e.sent,a=n.filter((function(e){return!1===e.bankReceivedCash})),Z(a),Ce(!0),e.abrupt("break",38);case 15:return console.info("Fetching Pay Crypto transactions"),e.next=18,t.getBanksHasNotPaidCrypto();case 18:return r=e.sent,e.next=21,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=l.formatUnits(t.dexShare.toString(),"ether"),a={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,tokenDecimals:t.tokenDecimals,dexShare:r,endBlock:t.endBlock,completed:t.completed,clientPaidCash:t.clientPaidCash,bankReceivedCash:t.bankReceivedCash,bankPaidCrypto:t.bankPaidCrypto,clientReceivedCrypto:t.clientReceivedCrypto,started:t.started},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 21:return n=e.sent,s=n.filter((function(e){return!0===e.bankReceivedCash&&!1===e.bankPaidCrypto})),D(s),Se(!0),e.abrupt("break",38);case 26:return console.info("Fetching Completed transactions"),e.next=29,t.getBanksCompletedTransacts();case 29:return r=e.sent,e.next=32,Promise.all(r.map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.formatUnits(t.CryptoPrice.toString(),"ether"),r=l.formatUnits(t.dexShare.toString(),"ether"),a={txId:t.txId.toNumber(),token:t.token,client:t.client,bank:t.bank,CryptoPrice:n,tokenDecimals:t.tokenDecimals,dexShare:r,endBlock:t.endBlock,completed:t.completed,clientPaidCash:t.clientPaidCash,bankReceivedCash:t.bankReceivedCash,bankPaidCrypto:t.bankPaidCrypto,clientReceivedCrypto:t.clientReceivedCrypto,started:t.started},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 32:return n=e.sent,c=n.filter((function(e){return!0===e.completed})),H(c),Ae(!0),e.abrupt("break",38);case 37:console.warn("Please choose a transaction!");case 38:console.log(r);case 39:case"end":return e.stop()}}),e)}))),Xe.apply(this,arguments)}function Ge(){return(Ge=(0,i.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inprogress"!==Me.status){e.next=2;break}return e.abrupt("return");case 2:return Be({status:"inprogress",message:"Transaction in progress..."}),e.prev=3,e.next=6,Oe();case 6:if(!(t=e.sent).hash){e.next=15;break}return Be({status:"inprogress",message:"Approval granted."}),e.next=11,Ke();case 11:n=e.sent,console.log("cashOrder Status",n),e.next=17;break;case 15:Be({status:"error",message:"Approval declined"}),console.error("approvalErr",t);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),"ACTION_REJECTED"===e.t0.code?Be({status:"error",message:"User rejected transaction"}):"UNPREDICTABLE_GAS_LIMIT"===e.t0.code?Be({status:"error",message:"Error due to unpredictable gas limit"}):(Be({status:"error",message:"An error occured"}),console.error("transactionErr",e.t0));case 22:case"end":return e.stop()}}),e,null,[[3,19]])})))).apply(this,arguments)}function Oe(){return He.apply(this,arguments)}function He(){return(He=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return De(),t=l.parseUnits(null===me||void 0===me?void 0:me.CryptoPrice,"18").toString(),n=BigInt(t).toString(),console.info("amountStr",n),r=new d.CH(null===me||void 0===me?void 0:me.token,P,Fe.data),e.next=7,r.approve(Q.toString(),n);case 7:return a=e.sent,e.next=10,a.wait();case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ke(){return _e.apply(this,arguments)}function _e(){return(_e=(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===me||void 0===me?void 0:me.txId)>0)){e.next=18;break}return e.prev=1,t=new d.CH(Q,$,Fe.data),e.next=5,t.bankReceiveCash(null===me||void 0===me?void 0:me.txId,null===me||void 0===me?void 0:me.CryptoPriceRaw,null===me||void 0===me?void 0:me.dexShare,{value:null===me||void 0===me?void 0:me.dexShare,gasLimit:3e6});case 5:return n=e.sent,e.next=8,n.wait();case 8:return 1===(r=e.sent).status&&Be({status:"200",message:"Transfer Successful"}),console.log("sendTransaction",r),e.abrupt("return",r);case 14:e.prev=14,e.t0=e.catch(1),"CALL_EXCEPTION"===e.t0.code?Be({status:"error",message:"An Error occurred. Please check if you have sufficient balance"}):"ACTION_REJECTED"===e.t0.code?Be({status:"error",message:"User rejected transaction"}):Be({status:"error",message:"An Error occurred."}),console.error("dexSendToken",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){ge&&(Se(!1),Ae(!1)),Pe&&(Ce(!1),Ae(!1)),Re&&Ae(!1)}),[ge,Pe,Re]),(0,a.useEffect)((function(){n&&function(){try{switch(n){case 5:W(T.L),ee(T.M),se(18),de("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),q(.1),j(s);break;case 80001:W(M.L),ee(M.M),se(18),de("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),q(.1),j(c);break;case 97:W(E.L),ee(E.M),se(18),de("0x4fabb145d64652a948d72533023f6e7a623c7c53"),q(.1),j(s);break;case 1:W(S.L),ee(S.M),se(18),de("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),q(.1),j(s);break;case 137:W(N.L),ee(N.M),se(18),de("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),q(.1),j(c);break;case 56:W(I.L),ee(I.M),se(18),de("0x4fabb145d64652a948d72533023f6e7a623c7c53"),q(.1),j(s);break;case 10:W(A.L),ee(A.M),se(18),de("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),q(.1),j(s);break;case 42161:W(R.L),ee(R.M),se(18),de("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),q(.1),j(s);break;default:console.warn("Please choose a token!")}}catch(e){console.log(e)}}()}),[n]),(0,a.useEffect)((function(){n&&void 0!==xe&&function(){Xe.apply(this,arguments)}(),console.log("activeTransaction type",xe)}),[xe,ie]),(0,C.jsx)(C.Fragment,{children:v?(0,C.jsxs)("div",{children:[(0,C.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,C.jsx)("h5",{className:"text-gray-500",children:"Transaction Type:"}),(0,C.jsx)("div",{className:"my-3 flex flex-row gap-2 start",onChange:function(e){return pe(e.target.value)},children:B.map((function(e){return(0,C.jsxs)("label",{children:[(0,C.jsx)("input",{type:"radio",id:"tab",name:"tab",value:e.name,className:"peer sr-only"}),(0,C.jsx)("span",{className:"px-2 py-1 rounded-md cursor-pointer ".concat(e.name===xe?"bg-sky-600 text-gray-200":"bg-black/50 text-gray-200/30"," border border-transparent peer-hover:border-gray-200/30 peer-checked:bg-sky-600 peer-checked:hover:border-transparent peer-checked:text-gray-200"),children:e.name})]},e.value)}))})]}),(0,C.jsxs)("div",{className:"overflow-x-auto relative",children:[xe===B[0].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","action"]}),(0,C.jsx)(x.yO,{children:w.length>0?w.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){je(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:me?(0,C.jsx)("button",{type:"button",children:"Mark as Cash Received"}):(0,C.jsx)("button",{type:"button",className:"bg-red-600 text-white cursor-pointer px-2 py-1",onClick:function(){!function(){Ge.apply(this,arguments)}()},children:"Mark as Cash Received"})})]}):null})},t)})):ge?w.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No active transactions"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]})})]}),xe===B[1].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","action"]}),(0,C.jsx)(x.yO,{children:U.length>0?U.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){je(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:e.bankPaidCrypto?(0,C.jsx)(u.smy,{}):(0,C.jsx)(u.vB0,{})})]}):null})},t)})):Pe?U.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No active transactions"}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{})]})})]}),xe===B[2].name&&(0,C.jsxs)(x.X2,{children:[(0,C.jsx)(x.XK,{headArray:["Tx Id","client","amount","","completed"]}),(0,C.jsx)(x.yO,{children:O.length>0?O.map((function(e,t){var n,r;return(0,C.jsx)("tr",{className:"border-b border-gray-700 bg-transparent even:bg-gray-700/30 hover:bg-gray-400/20",onClick:function(){je(e)},children:(0,C.jsx)(C.Fragment,{children:(null===e||void 0===e?void 0:e.txId)>0?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("th",{scope:"row",className:"py-4 px-6 font-medium whitespace-nowrap text-white",children:[null===e||void 0===e?void 0:e.txId," "]}),console.info(e),(0,C.jsx)("td",{children:(0,g.Z)(null===e||void 0===e?void 0:e.client)}),(0,C.jsxs)("td",{children:[(0,C.jsx)("span",{children:null===e||void 0===e?void 0:e.CryptoPrice})," ",(0,C.jsx)("span",{children:null===(n=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===n?void 0:n.symbol})]}),(0,C.jsx)("td",{children:(0,C.jsx)("img",{src:null===(r=m.find((function(t){return(null===e||void 0===e?void 0:e.token)===t.testAddress})))||void 0===r?void 0:r.logoURI,alt:"",className:"w-[25px] h-[25px]"})}),(0,C.jsx)("td",{children:e.clientReceivedCash?(0,C.jsx)(u.smy,{}):(0,C.jsx)(u.vB0,{})})]}):null})},t)})):Re?O.length<=0&&(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"No transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]}):(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{children:"Fetching transaction data"}),(0,C.jsx)("td",{}),(0,C.jsx)("td",{})]})})]})]})]}):null})}var L="px-4 w-full border text-gray-300 text-xl\n        hover:border-gray-400 transition-colors duration-300",U=["getCash","getCrypto"],D=function(e){var t=e.walletAddress,n=e.chainId,o=(0,a.useState)(U[0]),i=(0,r.Z)(o,2),d=i[0],l=i[1];return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("section",{className:"flex flex-col items-center",children:(0,C.jsxs)("div",{className:"px-4 py-3 w-full rounded-3xl parentBgColor",children:[(0,C.jsx)("div",{className:"font-bold text-lg text-gray-200",children:(0,C.jsx)("span",{children:"Exchange"})}),(0,C.jsx)("section",{className:"mt-4",children:(0,C.jsxs)("div",{className:"mt-1 flex flex-row w-full h-[50px] justify-center rounded-xl optionSectionColor",children:[(0,C.jsx)("button",{id:"0",className:"rounded-tl-xl rounded-bl-xl ".concat(L,"\n\t                                         ").concat(d===U[0]?"border-gray-400":"border-transparent"),onClick:function(){return l(U[0])},children:"Cash Requests"}),(0,C.jsx)("button",{id:"1",className:"rounded-tr-xl rounded-br-xl ".concat(L,"\n\t                                         ").concat(d===U[1]?"border-gray-400":"border-transparent"),onClick:function(){return l(U[1])},children:"Crypto Requests"})]})}),(0,C.jsxs)("section",{className:"mt-5",children:[d===U[0]&&(0,C.jsx)(Z,{walletAddress:t,chainId:n,tokensGoerli:s.Z,tokensMumbai:c.Z}),d===U[1]&&(0,C.jsx)(F,{walletAddress:t,chainId:n,tokensGoerli:s.Z,tokensMumbai:c.Z})]})]})})})}},1736:function(e,t,n){n.d(t,{X2:function(){return a},XK:function(){return s},yO:function(){return c}});n(2791);var r=n(184),a=function(e){var t=e.children;return(0,r.jsx)("table",{className:" w-full text-gray-400",children:t})},s=function(e){var t=e.headArray;return(0,r.jsx)("thead",{className:"text-xs bg-gray-700 text-gray-400 uppercase",children:(0,r.jsx)("tr",{children:t.map((function(e,t){return(0,r.jsx)("th",{scope:"col",className:"py-3 px-6",children:e},t)}))})})},c=function(e){var t=e.children;return(0,r.jsx)("tbody",{className:"text-center",children:t})}}}]);
//# sourceMappingURL=733.12099b58.chunk.js.map