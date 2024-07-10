"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[652],{3030:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(4848),r=i(8453);const o={},t="Free APIs Available in Skills Network Labs",a={id:"labs/free-apis",title:"Free APIs Available in Skills Network Labs",description:"While taking labs within Skills Network Labs, your learners will have free access to some APIs.",source:"@site/docs/labs/free-apis.md",sourceDirName:"labs",slug:"/labs/free-apis",permalink:"/docs/labs/free-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/free-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Author Jupyter Notebooks on Your Machine",permalink:"/docs/labs/edit-jupyterlab-instructions-computer"},next:{title:"Access File Library within Author Workbench",permalink:"/docs/labs/jupyterlab-filelibrary"}},l={},c=[{value:"Learner Quotas",id:"learner-quotas",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Free APIs",id:"free-apis",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Usage",id:"usage",level:4},{value:"watsonx.ai",id:"watsonxai",level:4},{value:"OpenAI",id:"openai",level:4},{value:"Anthropic",id:"anthropic",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"free-apis-available-in-skills-network-labs",children:"Free APIs Available in Skills Network Labs"}),"\n",(0,s.jsx)(n.p,{children:"While taking labs within Skills Network Labs, your learners will have free access to some APIs.\nThis helps learners get started with the interesting stuff right away, without immediately worrying about registration."}),"\n",(0,s.jsx)(n.h2,{id:"learner-quotas",children:"Learner Quotas"}),"\n",(0,s.jsx)(n.p,{children:"Learner usage of Skills Network-provided APIs is subject to a quota. The quota is based on actual cost, so if you choose lower-cost APIs (e.g. lower cost models), then your learners will be less likely to hit their quota."}),"\n",(0,s.jsx)(n.p,{children:"When a learner has reached their quota, they will receive an error message like this one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"RateLimitError: Error code: 429 - {'error': 'You have exceeded your usage quota for Skills Network-provided <api endpoint> for the day. Your quota will reset in 6 hours 32 minutes from now.'}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(n.p,{children:"These free Skills Network-provided APIs are available for learning and experimentation. They are not suitable when it comes to deploying an application."}),"\n",(0,s.jsx)(n.p,{children:"Learners will have access to these APIs within their:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cloud IDE (from their terminal/shell, or when running an application from within Cloud IDE)"}),"\n",(0,s.jsx)(n.li,{children:"JupyterLab IDE (from their notebook, or from the JupyterLab terminal/shell)"}),"\n",(0,s.jsx)(n.li,{children:"RStudio IDE"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Learners will ",(0,s.jsx)(n.em,{children:"not"})," have free access to these APIs within their:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Code Engine projects"}),"\n",(0,s.jsx)(n.li,{children:"JupyterLite"}),"\n",(0,s.jsx)(n.li,{children:"Kubernetes cluster namespaces"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift cluster namespaces"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"free-apis",children:"Free APIs"}),"\n",(0,s.jsx)(n.h3,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsx)(n.p,{children:"It is recommended that authors follow the instructions below using the default package version installed with pip. However, after doing so, please pin the version you used for your learners. If you encounter an error with the latest package version and the following instructions, please let us know!"}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install ibm-watsonx-ai\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Collecting ibm-watsonx-ai\n  Downloading ibm_watsonx_ai-0.2.0-py3-none-any.whl.metadata (8.1 kB)\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your lab instructions would state:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install ibm-watsonx-ai==0.2.0\n"})}),"\n",(0,s.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h4,{id:"watsonxai",children:"watsonx.ai"}),"\n",(0,s.jsxs)(n.p,{children:["To use the free Skills Network-provided watsonx.ai project, specify the ",(0,s.jsx)(n.code,{children:'"url"'})," and ",(0,s.jsx)(n.code,{children:'project_id = "skills-network"'})," (make sure to ",(0,s.jsx)(n.strong,{children:"leave out"})," ",(0,s.jsx)(n.code,{children:'"token"'})," and ",(0,s.jsx)(n.code,{children:'"apikey"'}),"). For example, you can modify ",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/watsonx/saas?topic=library-inferencing-foundation-model",children:"the example from the official documentation for the ibm_watsonx_ai library"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from ibm_watsonx_ai.foundation_models.utils.enums import ModelTypes\nfrom ibm_watsonx_ai.foundation_models import ModelInference\nimport json\n\nmy_credentials = {\n    "url"    : "https://us-south.ml.cloud.ibm.com"\n}\n\n\nmodel_id    = ModelTypes.FLAN_T5_XXL\ngen_parms   = None\nproject_id  = "skills-network" # <--- NOTE: specify "skills-network" as your project_id\nspace_id    = None\nverify      = False\n\nmodel = ModelInference(\n  model_id=model_id,\n  credentials=my_credentials,\n  params=gen_parms,\n  project_id=project_id,\n  space_id=space_id,\n  verify=verify,\n)\n\nprompt_txt = "In today\'s sales meeting, we "\ngen_parms_override = None\n\ngenerated_response = model.generate(prompt=prompt_txt, params=gen_parms_override)\n\nprint(json.dumps(generated_response, indent=2))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"openai",children:"OpenAI"}),"\n",(0,s.jsxs)(n.p,{children:["To use the free Skills Network-provided OpenAI API, no additional configuration is necessary. You can use ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/chat/create?lang=python",children:"the examples from the official documentation"})," without modification."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\nclient = OpenAI()\n\ncompletion = client.chat.completions.create(\n  model="gpt-4.0",\n  messages=[\n    {"role": "system", "content": "You are a helpful assistant."},\n    {"role": "user", "content": "Hello!"}\n  ]\n)\n\nprint(completion.choices[0].message)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"anthropic",children:"Anthropic"}),"\n",(0,s.jsxs)(n.p,{children:["To use the free Skills Network-provided Anthropic API, make sure to ",(0,s.jsx)(n.strong,{children:"leave out"})," the ",(0,s.jsx)(n.code,{children:'"apikey"'})," parameter in the Anthropic client. You can use ",(0,s.jsx)(n.a,{href:"https://docs.anthropic.com/en/api/client-sdks#python",children:"the example from the official documentation"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import anthropic\n\nclient = anthropic.Anthropic()\n\nmessage = client.messages.create(\n    model="claude-3-5-sonnet-20240620",\n    max_tokens=1024,\n    messages=[\n        {"role": "user", "content": "Hello, Claude"}\n    ]\n)\nprint(message.content)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);