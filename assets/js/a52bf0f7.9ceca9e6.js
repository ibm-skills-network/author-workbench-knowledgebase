"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[302],{2565:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"labs/narration/dictionary","title":"Dictionary","description":"This is the narration dictionary page which is used to teach our AI narrator how to pronounce difficult acronyms and words (mostly libraries and products). For example if the narration pronounces, \\"IBM\\" as \\"ih-buh-mmm\\" instead of \\"eye-bee-em\\" this is the place to fix it!","source":"@site/docs/labs/narration/dictionary.md","sourceDirName":"labs/narration","slug":"/labs/narration/dictionary","permalink":"/docs/labs/narration/dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/narration/dictionary.md","tags":[],"version":"current","frontMatter":{"title":"Dictionary"},"sidebar":"tutorialSidebar","previous":{"title":"Upgrade Lab Tool Version","permalink":"/docs/labs/misc/upgrade-lab-tool-version"}}');var i=o(4848),r=o(8453);const a={title:"Dictionary"},s="Narration Pronounciation Dictionary",c={},l=[{value:"How to add a new word to the pronounciation dictionary",id:"how-to-add-a-new-word-to-the-pronounciation-dictionary",level:2},{value:"Important Notes:",id:"important-notes",level:2},{value:"The Dictionary",id:"the-dictionary",level:2}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"narration-pronounciation-dictionary",children:"Narration Pronounciation Dictionary"})}),"\n",(0,i.jsx)(e.p,{children:'This is the narration dictionary page which is used to teach our AI narrator how to pronounce difficult acronyms and words (mostly libraries and products). For example if the narration pronounces, "IBM" as "ih-buh-mmm" instead of "eye-bee-em" this is the place to fix it!'}),"\n",(0,i.jsx)(e.h2,{id:"how-to-add-a-new-word-to-the-pronounciation-dictionary",children:"How to add a new word to the pronounciation dictionary"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["Update the JSON below (within the ",(0,i.jsx)(e.code,{children:"START DICTIONARY"})," and ",(0,i.jsx)(e.code,{children:"END DICTIONARY"})," comments) with the new update:"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Key: The word as seen in the instructions in ",(0,i.jsx)(e.em,{children:"lowercase"})]}),"\n",(0,i.jsx)(e.li,{children:"Value: The correct pronounciation spelling (your best guess, use the existing mappings for good examples)"}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Create a new PR of your changes"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"important-notes",children:"Important Notes:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Make sure to keep the keys lowercase"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"the-dictionary",children:"The Dictionary"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'// START DICTIONARY\n{\n  "watsonx.ai": "watsonx-dot-AI",\n  "watsonx.data": "watsonx-dot-data",\n  "watsonx.governance": "watsonx-dot-governance",\n  "cics": "kicks",\n  "aspera": "uh-SPAIR-uh",\n  "qiskit": "kiss-kit",\n  "faiss": "fice",\n  "arff": "arf",\n  "caikit": "cake-it",\n  "catena-x": "kuh-TEE-nuh-X",\n  "ceph": "sef",\n  "cics": "kicks",\n  "cos": "C-O-S",\n  "cp4apps": "C-P-4-Apps",\n  "dall-e": "doll-E",\n  "envizi": "en-VEE-zee",\n  "graphiql": "graphee-Q-L",\n  "grpcurl": "G-R-P-curl",\n  "guac": "gwok",\n  "helayers": "H-E-layers",\n  "ieee": "I-triple-E",\n  "iscsi": "eye-SCUZZY",\n  "kserve": "kay-serv",\n  "maas360": "mass-three-sixty",\n  "microk8s": "micro-kates",\n  "mksysb": "make-sys-B",\n  "ollama": "oh-LAH-muh",\n  "onnx": "ON-ix",\n  "postgresql": "post-gress-Q-L",\n  "quarkus": "QUARK-us",\n  "siem": "sim",\n  "tidyr": "TIDY-er",\n  "topolvm": "topo-L-V-M",\n  "venv": "V-env",\n  "virtio": "virt-I-O",\n  "vite": "veet",\n  "z/os": "zed-O-S",\n  "kubecon": "koob-con",\n  "knative": "kay-nay-tiv",\n  "mnist": "em-nist",\n  "shutil": "shoo-till",\n  "rhods": "roads",\n  "jceks": "J-seeks",\n  "unfccc": "U-N-F-triple-C",\n  "tririga": "tri-reega",\n  "mas": "mass",\n  "kubectl": "cube-C-T-L",\n  "kubecost": "cube-cost",\n  "ripasso": "Wreepasso",\n  "siem": "Simm",\n  "z/vm": "zed-vm"\n}\n// END DICTIONARY\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var t=o(6540);const i={},r=t.createContext(i);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);