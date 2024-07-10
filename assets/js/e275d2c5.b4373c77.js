"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[204],{1823:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:4},l="JupyterLite",a={id:"labs/jupyterlite",title:"JupyterLite",description:"JupyterLite is a responsive python notebook environment we provide for your learners' best experience.",source:"@site/docs/labs/jupyterlite.md",sourceDirName:"labs",slug:"/labs/jupyterlite",permalink:"/docs/labs/jupyterlite",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/jupyterlite.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JupyterLab",permalink:"/docs/labs/jupyterlab"},next:{title:"JupyterLite vs JupyterLab",permalink:"/docs/labs/jupyterlite-vs-jupyterlab"}},o={},d=[{value:"Using JupyterLite",id:"using-jupyterlite",level:2},{value:"Installing Packages",id:"installing-packages",level:3},{value:"Downloading Data",id:"downloading-data",level:3},{value:"Should you use JupyterLite?",id:"should-you-use-jupyterlite",level:2},{value:"Unsupported Libraries",id:"unsupported-libraries",level:3},{value:"Additional Caveats",id:"additional-caveats",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"jupyterlite",children:"JupyterLite"}),"\n",(0,t.jsx)(n.p,{children:"JupyterLite is a responsive python notebook environment we provide for your learners' best experience."}),"\n",(0,t.jsx)(n.h2,{id:"using-jupyterlite",children:"Using JupyterLite"}),"\n",(0,t.jsx)(n.h3,{id:"installing-packages",children:"Installing Packages"}),"\n",(0,t.jsxs)(n.p,{children:["Installing packages in JupyterLab is usually done with a package manager such as ",(0,t.jsx)(n.code,{children:"pip"}),", ",(0,t.jsx)(n.code,{children:"conda"})," or ",(0,t.jsx)(n.code,{children:"mamba"})," like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"!pip install numpy pandas\n!conda install -c conda-forge numpy pandas\n!mamba install numpy pandas\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In JupyterLite you simply use the ",(0,t.jsx)(n.code,{children:"%pip"})," magic command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"%pip install numpy pandas\n"})}),"\n",(0,t.jsx)(n.h3,{id:"downloading-data",children:"Downloading Data"}),"\n",(0,t.jsx)(n.p,{children:"You may be accustomed to loading data the following way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pandas as pd\n\nURL = 'https://www.url.to/my/dataset.csv'\n\ndf = pd.read_csv(URL)\n"})}),"\n",(0,t.jsx)(n.p,{children:"In JupyterLite, you must use the following method instead:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nimport skillsnetwork\n\nURL = 'https://www.url.to/my/dataset.csv'\n\nawait skillsnetwork.download_dataset(URL)\ndf = pd.read_csv('dataset.csv')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"should-you-use-jupyterlite",children:"Should you use JupyterLite?"}),"\n",(0,t.jsx)(n.p,{children:"For python-notebook labs, we recommend you use JupyterLite for your learners' best experience."}),"\n",(0,t.jsx)(n.p,{children:"However, sometimes JupyterLite may not be an option for you - we lay out these cases in the next sections."}),"\n",(0,t.jsxs)(n.p,{children:["For more information on why JupyterLite is preferred over JupyterLab see ",(0,t.jsx)(n.a,{href:"./jupyterlite-vs-jupyterlab",children:"JupyterLite vs JupyterLab"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"unsupported-libraries",children:"Unsupported Libraries"}),"\n",(0,t.jsxs)(n.p,{children:["The following libraries are currently unsupported in JupyterLite\nIf your lab requires them, you should use ",(0,t.jsx)(n.a,{href:"./jupyterlab",children:"JupyterLab"})," instead:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pytorch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tensorflow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"requests"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"wordcloud"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pyspark"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sqlite3"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-caveats",children:"Additional Caveats"}),"\n",(0,t.jsxs)(n.p,{children:["Even if your lab uses libraries supported by JupyterLite, there are specific scenarios where you may want to consider using ",(0,t.jsx)(n.a,{href:"./jupyterlab",children:"JupyterLab"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Your lab has highly cpu-intensive code cells.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For example, ",(0,t.jsx)(n.code,{children:"sklearn.manifold.TSNE.fit_transform"})," was found to be impractical in JupyterLite."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Large datasets (>100MB+) are being used.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Loading large datasets may be inconvenient for your learners on jupyterlite - they will load faster with JupyterLab."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);