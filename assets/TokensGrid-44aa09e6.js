import{j as e}from"./jsx-runtime-c3de6e4e.js";function d({tokens:s,hasRemValue:r}){return e.jsxs("table",{className:"tokens-grid sb-unstyled",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),r&&e.jsx("th",{children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(s).map(([n,t])=>{const i=r?Number(t.replace("rem",""))*16:null;return e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:t}),r&&e.jsxs("td",{children:[i,"px"]})]},n)})})]})}try{d.displayName="TokensGrid",d.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:null,description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{d as T};
//# sourceMappingURL=TokensGrid-44aa09e6.js.map