"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[14],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7807:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},u="Create a Guided Project",c={unversionedId:"guided-projects/create-a-guided-project",id:"guided-projects/create-a-guided-project",title:"Create a Guided Project",description:"Guided Projects are in-browser learning experiences that allow learners to gain new skills without the need for additional installations. This article will walk you through the steps to create and publish a Guided Project.",source:"@site/docs/guided-projects/create-a-guided-project.md",sourceDirName:"guided-projects",slug:"/guided-projects/create-a-guided-project",permalink:"/docs/guided-projects/create-a-guided-project",editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/guided-projects/create-a-guided-project.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Create a Lab",permalink:"/docs/labs/create-a-lab"}},s={},d=[{value:"How to create a great Guided Project",id:"how-to-create-a-great-guided-project",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Authoring",id:"authoring",level:2},{value:"Edit Your Instructions",id:"edit-your-instructions",level:3},{value:"Preview Your Project",id:"preview-your-project",level:3},{value:"Get Published",id:"get-published",level:3}],p={toc:d};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-guided-project"},"Create a Guided Project"),(0,a.kt)("p",null,"Guided Projects are ",(0,a.kt)("strong",{parentName:"p"},"in-browser learning experiences")," that allow learners to gain new skills ",(0,a.kt)("strong",{parentName:"p"},"without the need for additional installations"),". This article will walk you through the steps to create and publish a Guided Project."),(0,a.kt)("h2",{id:"how-to-create-a-great-guided-project"},"How to create a great Guided Project"),(0,a.kt)("p",null,"First, think about what you aim to teach learners in your Guided Project. Maybe you want to demonstrate how to get a JavaScript application to print Hello World. Or maybe you want to walk learners through training a Machine Learning model with PyTorch."),(0,a.kt)("p",null,"Thinking of a great title for your Project is a great way to get yourself to think about what you'll be teaching. It's also a great way to tell your learners what you're going to teach them."),(0,a.kt)("p",null,"Once you've decided on the goal of your Project, decide which of our tools best suits your needs. Consult our ",(0,a.kt)("a",{parentName:"p",href:"https://skills.network/lab-tools"},"tools")," page to learn more about each tool."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some basic tools and their use cases:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud IDE")," for general purpose coding and web apps \ud83d\ude80"),(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"JupyterLite")," for data science and machine learning with Python \ud83e\udde0"),(0,a.kt)("li",{parentName:"ul"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"Intructional Lab")," for writing basic tutorials \ud83d\udca1"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Guided Project Screenshot",src:r(1989).Z,width:"1369",height:"869"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Guided Project")," to get started on authoring."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Upon creating a Guided Project in Author Workbench, you will see the following page with three major steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#edit-your-instructions"},"Edit Your Instructions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#preview-your-project"},"Preview Your Project")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#get-published"},"Get Published"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guided Project Screenshot",src:r(9811).Z,width:"1444",height:"916"})),(0,a.kt)("h2",{id:"authoring"},"Authoring"),(0,a.kt)("h3",{id:"edit-your-instructions"},"Edit Your Instructions"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Instructions")," to open an editor in a new tab and start authoring your project. Depending on your project type, your editing environment will be different. "),(0,a.kt)("p",null,"When you first open your project instructions, there will be some useful text already in the editor. It will walk you through the editor's features and help you get familiar with the environment. "),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't forget to ",(0,a.kt)("strong",{parentName:"p"},"save")," and ",(0,a.kt)("strong",{parentName:"p"},"publish")," your Guided Project!"))),(0,a.kt)("h3",{id:"preview-your-project"},"Preview Your Project"),(0,a.kt)("p",null,"Back on the Guided Project page, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Launch Project")," to preview the project in a new tab. Here, you can ",(0,a.kt)("strong",{parentName:"p"},"preview exactly how learners will experience your lab"),". Try out your instructions and see how it feels!"),(0,a.kt)("h3",{id:"get-published"},"Get Published"),(0,a.kt)("p",null,"To publish your Guided Project, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit for Review")," on the Guided Project Page. Upon submission, our curation team will review your content and we will reach out if there are any issues. Once published, changes you make to your instructions will update your Project instantly for learners. Congratulations on creating your Guided Project!"))}h.isMDXComponent=!0},1989:function(e,t,r){t.Z=r.p+"assets/images/create-guided-project-screenshot-d679e5fe7281ece20c1b1dc552375dee.png"},9811:function(e,t,r){t.Z=r.p+"assets/images/get-started-screenshot-3ca063614c5455673942ada18731a11c.png"}}]);