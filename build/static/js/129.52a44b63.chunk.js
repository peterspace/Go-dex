"use strict";(self.webpackChunkdex_2023=self.webpackChunkdex_2023||[]).push([[129],{4129:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var a=s(4165),n=s(5861),r=s(9439),c=s(2791),o=s(4373),l=s(8308),i=s(4029),d=s(9601),u=(s(4539),s(3728)),x=s(6631),f=s(1777),m=s(6501),b=s(5951),g=s(9491),p=s(6008),h=s(2069),v=s(4708),k=s(1846),j=s(1598),y=s(225),w=s(1434),Z=s(3988),S=s(184);var N=function(e){var t=e.walletAddress,s=e.chainId,N=(e.setNewTransaction,(0,c.useState)(0)),C=(0,r.Z)(N,2),T=C[0],L=C[1],M=(0,c.useState)([]),E=(0,r.Z)(M,2),I=E[0],O=E[1],A=(0,c.useState)(!1),R=(0,r.Z)(A,2),P=R[0],U=R[1],V=(0,c.useState)(!1),_=(0,r.Z)(V,2),q=(_[0],_[1],(0,c.useState)(!1)),B=(0,r.Z)(q,2),D=B[0],F=B[1],G=(0,c.useState)({}),H=(0,r.Z)(G,2),J=H[0],Q=H[1],W=(0,c.useState)({}),X=(0,r.Z)(W,2),z=X[0],K=X[1],Y=(0,c.useState)(m.Z),$=(0,r.Z)(Y,2),ee=$[0],te=$[1],se=(0,c.useState)(""),ae=(0,r.Z)(se,2),ne=(ae[0],ae[1]),re=(0,c.useState)(.1),ce=(0,r.Z)(re,2),oe=(ce[0],ce[1]),le=(0,c.useState)(""),ie=(0,r.Z)(le,2),de=ie[0],ue=ie[1],xe=(0,c.useState)([]),fe=(0,r.Z)(xe,2),me=fe[0],be=fe[1],ge=(0,c.useState)(""),pe=(0,r.Z)(ge,2),he=(pe[0],pe[1],(0,c.useState)()),ve=(0,r.Z)(he,2),ke=(ve[0],ve[1],(0,c.useState)()),je=(0,r.Z)(ke,2),ye=(je[0],je[1]),we=(0,c.useState)(),Ze=(0,r.Z)(we,2),Se=(Ze[0],Ze[1]),Ne=(0,c.useState)({status:"",message:""}),Ce=(0,r.Z)(Ne,2),Te=Ce[0],Le=Ce[1],Me=(0,l.mx)(),Ee="\n\t\tGovercity Connect >>\n\t\tTransact: Transfer\n\t\tToken: ".concat(null===J||void 0===J?void 0:J.symbol,"\n\t\tAddress: ").concat(t,"\n\t\t"),Ie=(0,l.QW)({message:Ee});Ie.data,Ie.signMessage;function Oe(){return Ae.apply(this,arguments)}function Ae(){return(Ae=(0,n.Z)((0,a.Z)().mark((function e(){var t,s,n,r,c,o,l,u,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inprogress"!==Te.status){e.next=2;break}return e.abrupt("return");case 2:return Le({status:"inprogress",message:"Transaction in progress..."}),t=new i.CH(de,me,Me.data),s=d.parseUnits(T.toString(),J.decimals.toString()),n=BigInt(s).toString(),r="10000000000000000",console.info("dexShareStr",r),c=n,o="10000000000000000",l=(null===z||void 0===z?void 0:z.address).toString(),ne(l),u=J.decimals.toString(),e.prev=13,e.next=16,t.getCrypto(J.testAddress,l,c,r,o,u,{value:o,gasLimit:3e6});case 16:return x=e.sent,e.next=19,x.wait();case 19:1===e.sent.status&&Le({status:"200",message:"Request sent"}),console.log(x),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(13),"CALL_EXCEPTION"===e.t0.code?Le({status:"error",message:"An Error occurred. Please check if you have sufficient balance"}):"ACTION_REJECTED"===e.t0.code?Le({status:"error",message:"User rejected transaction"}):Le({status:"error",message:"An Error occurred."}),console.error("dexSendToken",e.t0);case 28:case"end":return e.stop()}}),e,null,[[13,24]])})))).apply(this,arguments)}function Re(){return(Re=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null===t||void 0===t?void 0:t.length)<=5||Number(T)<0||Object.keys(z).length<=0)){e.next=3;break}return Le({status:"309",message:"One or more required fields are empty"}),e.abrupt("return");case 3:return e.next=5,Oe();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){O(b.Z),Q(b.Z[0])}),[]),(0,c.useEffect)((function(){if(0!==Object.keys(J).length){var e=m.Z.filter((function(e){return e.tokens.find((function(e){return e.toLowerCase().includes(J.symbol.toLowerCase())}))}));te(e)}0!==Object.keys(z).length&&K({})}),[J]),(0,c.useEffect)((function(){s&&function(){try{switch(s){case 5:ue(y.L),be(y.M),ye(18),Se("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),oe(.1);break;case 80001:ue(Z.L),be(Z.M),ye(18),Se("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),oe(.1);break;case 97:ue(w.L),be(w.M),ye(18),Se("0x4fabb145d64652a948d72533023f6e7a623c7c53"),oe(.1);break;case 1:ue(p.L),be(p.M),ye(18),Se("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),oe(.1);break;case 137:ue(h.L),be(h.M),ye(18),Se("0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"),oe(.1);break;case 56:ue(v.L),be(v.M),ye(18),Se("0x4fabb145d64652a948d72533023f6e7a623c7c53"),oe(.1);break;case 10:ue(j.L),be(j.M),ye(18),Se("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),oe(.1);break;case 42161:ue(k.L),be(k.M),ye(18),Se("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc"),oe(.1);break;default:console.warn("Please choose a token!")}}catch(e){console.log(e)}}()}),[s]),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("section",{className:"flex flex-col items-center",children:[(0,S.jsx)("section",{className:"relative mt-4",children:(0,S.jsxs)("div",{className:"flex flex-col",children:[(0,S.jsxs)("section",{className:"mt-6 flex flex-col",children:[(0,S.jsx)("span",{className:"mb-1 text-gray-600",children:"Required amount & token"}),(0,S.jsxs)("div",{className:"w-fit flex flex-row inputSection inputSectionColor",children:[(0,S.jsx)("input",{type:"text",className:"input",pattern:"[0-9]*.[0-9]*",placeholder:"0.0",value:T,onChange:function(e){L((function(t){return e.target.validity.valid?e.target.value:t}))}}),(0,S.jsx)("div",{className:"ml-auto mr-2",children:(0,S.jsx)(u.P6,{selectedTokenName:null===J||void 0===J?void 0:J.symbol,modalVisible:P,toggleModal:U,selectedTokenIcon:null===J||void 0===J?void 0:J.logoURI})})]}),(0,S.jsxs)("div",{className:"mt-6 text-gray-600",children:[(0,S.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,S.jsx)("span",{children:null===ee||void 0===ee?void 0:ee.length}),(0,S.jsx)("span",{children:"Banks available"})]}),(0,S.jsx)("button",{type:"button",className:"mt-2 px-6 py-3 w-full border rounded-md\n                                                flex flex-row gap-3 cursor-pointer text-gray-400\n                                                hover:border-gray-200/50 hover:text-gray-200\n                                                ",onClick:function(){return F(!0)},children:0!==Object.keys(z).length?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("img",{src:null===z||void 0===z?void 0:z.logoURI,alt:"bank logo",className:"w-[25px] h-[25px]"}),(0,S.jsx)("span",{children:null===z||void 0===z?void 0:z.name}),(0,S.jsx)("span",{className:"ml-auto text-xl text-success",children:(0,S.jsx)(o.Meg,{})})]}):(0,S.jsx)("span",{className:"text-center w-full",children:"Select a bank"})})]})]}),""!==Te.status&&(0,S.jsx)("section",{className:"mt-3 px-3 py-2 w-full h-fit flex flex-row gap-6 justify-center rounded-lg\n                ".concat("200"===Te.status?"success":"309"===Te.status?"warn":"inprogress"===Te.status?"info":"error","\n                            "),onClick:function(){return Le({status:"",message:""})},children:Te.message}),(0,S.jsx)("div",{className:"mx-auto mt-6 w-fit",children:(0,S.jsx)(u.o5,{disabled:(null===t||void 0===t?void 0:t.length)<=5||Number(T)<=0||!Object.keys(z).length>0||"inprogress"===Te.status,onClick:function(){return function(){return Re.apply(this,arguments)}()},children:"inprogress"!==Te.status?"Proceed":(0,S.jsx)(f.Z,{})})})]})}),(0,S.jsx)(x.Z,{visible:P,setVisible:U,title:"Choose your withdraw token",children:(0,S.jsx)("div",{className:"w-[500px] h-fit max-h-[400px] overflow-y-scroll",children:(0,S.jsx)("div",{className:"grid grid-cols-3 grid-flow-row gap-8",children:null===I||void 0===I?void 0:I.map((function(e,t){return(0,S.jsx)(g.Z,{currentItem:e,selectedToken:J,setSelectedToken:Q,setIsTokenModalVisible:U},t)}))})})}),(0,S.jsxs)(x.Z,{visible:D,setVisible:F,title:"Select Bank",children:[(0,S.jsx)("ul",{className:"mt-3 px-2 py-2 max-h-[600px] h-fit flex flex-col gap-2 border border-gray-200/10 rounded-md overflow-scroll scrollbar-hide",children:ee.map((function(e){return(0,S.jsxs)("li",{className:"px-6 py-3 border rounded-md\n                                                flex flex-row gap-3 cursor-pointer text-gray-400\n                                                hover:border-gray-200/50 hover:text-gray-200\n                                                ".concat((null===z||void 0===z?void 0:z.address)===e.address?"border-gray-200/50 text-gray-200 info":"border-gray-200/10 bg-black/30"),onClick:function(){return K(e)},children:[(0,S.jsx)("img",{src:e.logoURI,alt:"bank",className:"w-[25px] h-[25px]"}),(0,S.jsx)("span",{children:e.name}),(0,S.jsx)("span",{className:"ml-auto text-xl text-success\n                                    ".concat((null===z||void 0===z?void 0:z.address)===e.address?"visible":"invisible"),children:(0,S.jsx)(o.Meg,{})})]},e.address)}))}),(0,S.jsx)("button",{type:"button",className:"mt-3 ml-auto text-white",onClick:function(){return F(!1)},children:"Done"})]})]})})}}}]);
//# sourceMappingURL=129.52a44b63.chunk.js.map