"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[793],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={},s="Free APIs Available in Skills Network Labs",p={unversionedId:"labs/free-apis",id:"labs/free-apis",title:"Free APIs Available in Skills Network Labs",description:"While taking labs within Skills Network Labs, your learners will have free access to some APIs.",source:"@site/docs/labs/free-apis.md",sourceDirName:"labs",slug:"/labs/free-apis",permalink:"/docs/labs/free-apis",draft:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/free-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Author Jupyter Notebooks on Your Machine",permalink:"/docs/labs/edit-jupyterlab-instructions-computer"},next:{title:"Manim for Animated Videos",permalink:"/docs/labs/misc/manim"}},u={},c=[{value:"Learner Quotas",id:"learner-quotas",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Free APIs",id:"free-apis",level:2},{value:"watsonx.ai",id:"watsonxai",level:3},{value:"OpenAI",id:"openai",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"free-apis-available-in-skills-network-labs"},"Free APIs Available in Skills Network Labs"),(0,a.kt)("p",null,"While taking labs within Skills Network Labs, your learners will have free access to some APIs.\nThis helps learners get started with the interesting stuff right away, without immediately worrying about registration."),(0,a.kt)("h2",{id:"learner-quotas"},"Learner Quotas"),(0,a.kt)("p",null,"Learner usage of Skills Network-provided APIs is subject to a quota. The quota is based on actual cost, so if you choose lower-cost APIs (e.g. lower cost models), then your learners will be less likely to hit their quota."),(0,a.kt)("p",null,"When a learner has reached their quota, they will receive an error message like this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RateLimitError: Error code: 429 - {'error': 'You have exceeded your usage quota for Skills Network-provided <api endpoint> for the day. Your quota will reset in 6 hours 32 minutes from now.'}\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"These free Skills Network-provided APIs are available for learning and experimentation. They are not suitable when it comes to deploying an application. "),(0,a.kt)("p",null,"Learners will have access to these APIs within their:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud IDE (from their terminal/shell, or when running an application from within Cloud IDE)"),(0,a.kt)("li",{parentName:"ul"},"JupyterLab IDE (from their notebook, or from the JupyterLab terminal/shell)"),(0,a.kt)("li",{parentName:"ul"},"Rstudio IDE")),(0,a.kt)("p",null,"Learners will ",(0,a.kt)("em",{parentName:"p"},"not")," have free access to these APIs within their:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code Engine projects"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes cluster namespaces"),(0,a.kt)("li",{parentName:"ul"},"OpenShift cluster namespaces")),(0,a.kt)("h2",{id:"free-apis"},"Free APIs"),(0,a.kt)("h3",{id:"watsonxai"},"watsonx.ai"),(0,a.kt)("p",null,"To use the free Skills Network-provided watsonx.ai project, you need to specify ",(0,a.kt)("inlineCode",{parentName:"p"},'"token": "skills-network"')," (not to be confused with ",(0,a.kt)("inlineCode",{parentName:"p"},'"apikey": "skills-network"')," ) and ",(0,a.kt)("inlineCode",{parentName:"p"},'project_id = "skills-network"'),". For example, you can modify ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/watsonx-as-a-service?topic=models-python-library#example-prompt-a-foundation-model-with-default-parameters"},"the example from the official documentation for the ibm_watson_machine_learning library"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom ibm_watson_machine_learning.foundation_models.utils.enums import ModelTypes\nfrom ibm_watson_machine_learning.foundation_models import Model\nimport json\n\nmy_credentials = {\n    "url"    : "https://us-south.ml.cloud.ibm.com",\n    "token" : "skills-network" # <--- NOTE: specify "skills-network" as your token (NOT as your apikey) \n}\n\n\nmodel_id    = ModelTypes.FLAN_T5_XXL\ngen_parms   = None\nproject_id  = "skills-network" # <--- NOTE: specify "skills-network" as your project_id\nspace_id    = None\nverify      = False\n\nmodel = Model( model_id, my_credentials, gen_parms, project_id, space_id, verify )   \n \nprompt_txt = "In today\'s sales meeting, we "\ngen_parms_override = None\n\ngenerated_response = model.generate( prompt_txt, gen_parms_override )\n\nprint( json.dumps( generated_response, indent=2 ) )\n')),(0,a.kt)("h3",{id:"openai"},"OpenAI"),(0,a.kt)("p",null,"To use the free Skills Network-provided OpenAI APIs, no additional configuration is necessary. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/chat/create"},"the examples from the official documentation")," without modification."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openai import OpenAI\nclient = OpenAI()\n\ncompletion = client.chat.completions.create(\n  model="gpt-3.5-turbo",\n  messages=[\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "Hello!"}\n  ]\n)\n\nprint(completion.choices[0].message)\n')))}d.isMDXComponent=!0}}]);