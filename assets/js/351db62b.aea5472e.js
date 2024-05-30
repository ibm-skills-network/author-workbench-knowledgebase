"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[652],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={},i="Free APIs Available in Skills Network Labs",l={unversionedId:"labs/free-apis",id:"labs/free-apis",title:"Free APIs Available in Skills Network Labs",description:"While taking labs within Skills Network Labs, your learners will have free access to some APIs.",source:"@site/docs/labs/free-apis.md",sourceDirName:"labs",slug:"/labs/free-apis",permalink:"/docs/labs/free-apis",draft:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/free-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Author Jupyter Notebooks on Your Machine",permalink:"/docs/labs/edit-jupyterlab-instructions-computer"},next:{title:"Access File Library within Author Workbench",permalink:"/docs/labs/jupyterlab-filelibrary"}},s={},p=[{value:"Learner Quotas",id:"learner-quotas",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Free APIs",id:"free-apis",level:2},{value:"watsonx.ai",id:"watsonxai",level:3},{value:"Versioning",id:"versioning",level:4},{value:"Usage",id:"usage",level:4},{value:"OpenAI",id:"openai",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"free-apis-available-in-skills-network-labs"},"Free APIs Available in Skills Network Labs"),(0,a.yg)("p",null,"While taking labs within Skills Network Labs, your learners will have free access to some APIs.\nThis helps learners get started with the interesting stuff right away, without immediately worrying about registration."),(0,a.yg)("h2",{id:"learner-quotas"},"Learner Quotas"),(0,a.yg)("p",null,"Learner usage of Skills Network-provided APIs is subject to a quota. The quota is based on actual cost, so if you choose lower-cost APIs (e.g. lower cost models), then your learners will be less likely to hit their quota."),(0,a.yg)("p",null,"When a learner has reached their quota, they will receive an error message like this one:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"RateLimitError: Error code: 429 - {'error': 'You have exceeded your usage quota for Skills Network-provided <api endpoint> for the day. Your quota will reset in 6 hours 32 minutes from now.'}\n")),(0,a.yg)("h2",{id:"limitations"},"Limitations"),(0,a.yg)("p",null,"These free Skills Network-provided APIs are available for learning and experimentation. They are not suitable when it comes to deploying an application. "),(0,a.yg)("p",null,"Learners will have access to these APIs within their:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Cloud IDE (from their terminal/shell, or when running an application from within Cloud IDE)"),(0,a.yg)("li",{parentName:"ul"},"JupyterLab IDE (from their notebook, or from the JupyterLab terminal/shell)"),(0,a.yg)("li",{parentName:"ul"},"Rstudio IDE")),(0,a.yg)("p",null,"Learners will ",(0,a.yg)("em",{parentName:"p"},"not")," have free access to these APIs within their:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Code Engine projects"),(0,a.yg)("li",{parentName:"ul"},"JupyterLite"),(0,a.yg)("li",{parentName:"ul"},"Kubernetes cluster namespaces"),(0,a.yg)("li",{parentName:"ul"},"OpenShift cluster namespaces")),(0,a.yg)("h2",{id:"free-apis"},"Free APIs"),(0,a.yg)("h3",{id:"watsonxai"},"watsonx.ai"),(0,a.yg)("h4",{id:"versioning"},"Versioning"),(0,a.yg)("p",null,"It is recommended that authors follow the instructions below using the default ",(0,a.yg)("inlineCode",{parentName:"p"},"ibm-watsonx-ai")," version installed with pip. However, after doing so, please pin the version you used for your learners. If you encounter an error with the latest package version and the following instructions, please let us know!"),(0,a.yg)("p",null,"For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install ibm-watsonx-ai\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Collecting ibm-watsonx-ai\n  Downloading ibm_watsonx_ai-0.2.0-py3-none-any.whl.metadata (8.1 kB)\n...\n")),(0,a.yg)("p",null,"Your lab instructions would state:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install ibm-watsonx-ai==0.2.0\n")),(0,a.yg)("h4",{id:"usage"},"Usage"),(0,a.yg)("p",null,"To use the free Skills Network-provided watsonx.ai project, specify the ",(0,a.yg)("inlineCode",{parentName:"p"},'"url"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'project_id = "skills-network"')," (make sure to ",(0,a.yg)("strong",{parentName:"p"},"leave out")," ",(0,a.yg)("inlineCode",{parentName:"p"},'"token"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'"apikey"'),"). For example, you can modify ",(0,a.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/watsonx/saas?topic=library-inferencing-foundation-model"},"the example from the official documentation for the ibm_watsonx_ai library")," as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from ibm_watsonx_ai.foundation_models.utils.enums import ModelTypes\nfrom ibm_watsonx_ai.foundation_models import ModelInference\nimport json\n\nmy_credentials = {\n    "url"    : "https://us-south.ml.cloud.ibm.com"\n}\n\n\nmodel_id    = ModelTypes.FLAN_T5_XXL\ngen_parms   = None\nproject_id  = "skills-network" # <--- NOTE: specify "skills-network" as your project_id\nspace_id    = None\nverify      = False\n\nmodel = ModelInference(\n  model_id=model_id,\n  credentials=my_credentials,\n  params=gen_parms,\n  project_id=project_id,\n  space_id=space_id,\n  verify=verify,\n)\n\nprompt_txt = "In today\'s sales meeting, we "\ngen_parms_override = None\n\ngenerated_response = model.generate(prompt=prompt_txt, params=gen_parms_override)\n\nprint(json.dumps(generated_response, indent=2))\n')),(0,a.yg)("h3",{id:"openai"},"OpenAI"),(0,a.yg)("p",null,"To use the free Skills Network-provided OpenAI APIs, no additional configuration is necessary. You can use ",(0,a.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},"the examples from the official documentation")," without modification."),(0,a.yg)("p",null,"For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from openai import OpenAI\nclient = OpenAI()\n\ncompletion = client.chat.completions.create(\n  model="gpt-3.5-turbo",\n  messages=[\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "Hello!"}\n  ]\n)\n\nprint(completion.choices[0].message)\n')))}m.isMDXComponent=!0}}]);