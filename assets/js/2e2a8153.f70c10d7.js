"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[526],{4768:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course","title":"Coursera","description":"Once you have created a lab, you then need to add it to your course via Coursera. When you are adding a lab to your course, you embed your lab into a unit of your course. This way, learners will naturally progress through the course, and complete your labs as they go.","source":"@site/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course.md","sourceDirName":"labs/adding-labs-to-courses","slug":"/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course","permalink":"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Skills Network Portals","permalink":"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course"},"next":{"title":"edX","permalink":"/docs/labs/adding-labs-to-courses/add-a-lab-to-an-edx-org-course"}}');var t=a(4848),o=a(8453);const r={sidebar_position:2},i="Coursera",l={},d=[{value:"Add an Instructional Lab to your Course",id:"add-an-instructional-lab-to-your-course",level:2},{value:"Add a (Non-Instructional) Lab to your Course",id:"add-a-non-instructional-lab-to-your-course",level:2},{value:"Lab Launch Url",id:"lab-launch-url",level:3},{value:"LTI Credentials",id:"lti-credentials",level:3},{value:"Add a Datasette Lab to your Course",id:"add-a-datasette-lab-to-your-course",level:2},{value:"Step 1. Follow the guide: Add a (Non-Instructional) Lab to your Course",id:"step-1-follow-the-guide-add-a-non-instructional-lab-to-your-course",level:3},{value:"Step 2. Upload your database file to the SN File Library",id:"step-2-upload-your-database-file-to-the-sn-file-library",level:3},{value:"Step 3. Copy your instructions url",id:"step-3-copy-your-instructions-url",level:3},{value:"Step 4. Add custom parameters to your lti item",id:"step-4-add-custom-parameters-to-your-lti-item",level:3},{value:"Step 5. Test your lab",id:"step-5-test-your-lab",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"coursera",children:"Coursera"})}),"\n",(0,t.jsxs)(s.p,{children:["Once you have created a lab, you then need to ",(0,t.jsx)(s.strong,{children:"add it to your course via Coursera"}),". When you are adding a lab to your course, you ",(0,t.jsx)(s.strong,{children:"embed your lab into a unit of your course"}),". This way, learners will naturally progress through the course, and complete your labs as they go."]}),"\n",(0,t.jsx)(s.h2,{id:"add-an-instructional-lab-to-your-course",children:"Add an Instructional Lab to your Course"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["This section is only for instructional labs. If you wish to add a different lab type to your course, see the ",(0,t.jsx)(s.a,{href:"#add-a-non-instructional-lab-to-your-course",children:"Add a (Non-Instructional) Lab to your Course"})," section below."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'As a Skills Network author, you can create "instructional labs". These are labs that include step by step instructions for working with tools external to Skills Network Labs, such as services on IBM Cloud.'}),"\n",(0,t.jsx)(s.p,{children:"HTML files will be automatically generated from instructional labs so they can be easliy embedded or linked to from your course. To embed an instructional lab in your course, follow the steps below."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["On your course page, navigate to the lab you want (under the ",(0,t.jsx)(s.code,{children:"Labs"}),' tab) and click "Embed"']}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(3566).A+"",width:"3230",height:"1124"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Copy the JSON configuration provided"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(5087).A+"",width:"1018",height:"750"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Close the pop-up and navigate to your Course Outline in the ",(0,t.jsx)(s.code,{children:"Content"}),' tab on your course page. Press the "Edit in Coursera" button to open the outline in Coursera']}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(5428).A+"",width:"2344",height:"856"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Select the version of the course you want to add your instructional lab to"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(7919).A+"",width:"2968",height:"1074"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Navigate to the week and unit you wish to add your instructional lab in, and insert an ungraded plugin"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(403).A+"",width:"1744",height:"896"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"After naming your plugin as desired, click on the item to edit it"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'Click on the "Choose Plugin" button and select "Pop Up Template"'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(9769).A+"",width:"3330",height:"1520"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(8271).A+"",width:"1424",height:"1234"})}),"\n",(0,t.jsxs)(s.ol,{start:"8",children:["\n",(0,t.jsx)(s.li,{children:'After pressing "Continue", scroll down to the bottom of the page and select "Edit Configuration"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(3074).A+"",width:"3344",height:"1824"})}),"\n",(0,t.jsxs)(s.ol,{start:"9",children:["\n",(0,t.jsx)(s.li,{children:'Replace all existing content with the JSON you copied in step 2 and click "Save Configuration"'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(9429).A+"",width:"1632",height:"1492"})}),"\n",(0,t.jsxs)(s.ol,{start:"10",children:["\n",(0,t.jsx)(s.li,{children:"Now, your instructional lab should appear in the plugin. You can now publish your changes, or view your instructional lab as a learner."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(1919).A+"",width:"3332",height:"1264"})}),"\n",(0,t.jsx)(s.h2,{id:"add-a-non-instructional-lab-to-your-course",children:"Add a (Non-Instructional) Lab to your Course"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["This section is only applicable for any lab type ",(0,t.jsx)(s.em,{children:"other"})," than an instructional lab. If you wish to add an instructional lab to your course, see the ",(0,t.jsx)(s.a,{href:"#add-an-instructional-lab-to-your-course",children:"Add an Instructional Lab to your Course"})," section."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To add a (non-instructional) lab to your course in ",(0,t.jsx)(s.strong,{children:"Coursera"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"In Coursera, go to the week and unit you want your lab to be in and add a new App Item."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(2386).A+"",width:"1774",height:"716"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Add the following values to the corresponding fields within the App Item"}),"\n"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:" Launch URL "}),(0,t.jsxs)("td",{children:[" See the ",(0,t.jsx)("a",{href:"#lab-launch-url",children:"Lab Launch Url"})," section below.  "]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:" Consumer Key "}),(0,t.jsxs)("td",{children:[" See the ",(0,t.jsx)("a",{href:"#lti-credentials",children:"LTI Credentials"})," section below. "]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:" Secret "}),(0,t.jsxs)("td",{children:[" See the ",(0,t.jsx)("a",{href:"#lti-credentials",children:"LTI Credentials"})," section below. "]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:" Learner Privacy "}),(0,t.jsxs)("td",{children:[" ",(0,t.jsx)("code",{children:"Share learner ID, full name, and email address"})," "]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"lab-launch-url",children:"Lab Launch Url"}),"\n",(0,t.jsx)(s.p,{children:"The Lab Launch url can be easily found in Author Workbench on your course page. Just follow these steps:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["On your course page, navigate to the lab you want (under the ",(0,t.jsx)(s.code,{children:"Labs"}),' tab) and click "Embed"']}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(8077).A+"",width:"3256",height:"1134"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["Copy the the Lab's Launchg Url by clicking on the ",(0,t.jsx)(s.code,{children:"Copy"})," button."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(6023).A+"",width:"1142",height:"1222"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Now, go back to Coursera and click on ",(0,t.jsx)(s.code,{children:"App Manager"})," on the left side of your screen to create a new app name and configuration."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(3441).A+"",width:"752",height:"1110"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Click on ",(0,t.jsx)(s.code,{children:"Add app"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(1411).A+"",width:"1964",height:"720"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["Now, select ",(0,t.jsx)(s.code,{children:"LTI 1.1"})," and enter the Coursera credentials you copied earlier from the Author Workbench."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(428).A+"",width:"1334",height:"1454"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["After clicking ",(0,t.jsx)(s.strong,{children:"Continue"}),", name your app and set your learner privacy preferences. Then select ",(0,t.jsx)(s.code,{children:"Add App"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(8012).A+"",width:"1500",height:"1804"})}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"You can return to your 'App Item,' publish your newly created lab, and then launch it."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"lti-credentials",children:"LTI Credentials"}),"\n",(0,t.jsxs)(s.p,{children:["The consumer key and secret can be found in Author Workbench on your course page. Navigate to the ",(0,t.jsx)(s.code,{children:"Advanced"})," tab and and scroll to the ",(0,t.jsx)(s.code,{children:"LTI Credentials (Advanced Users Only)"})," section. Here, you will be able to copy the consumer key and secret. If you are publishing your course to Coursera, please use the ",(0,t.jsx)(s.code,{children:"LTI Credential (Coursera)"})," credentials. Otherwise, use ",(0,t.jsx)(s.code,{children:"LTI Credential (Skills Network / edX)"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(7938).A+"",width:"2328",height:"1566"})}),"\n",(0,t.jsx)(s.h2,{id:"add-a-datasette-lab-to-your-course",children:"Add a Datasette Lab to your Course"}),"\n",(0,t.jsx)(s.p,{children:"Adding Datasette labs to your course involves a few steps. This guide will outline all the steps you must follow to successfully add a Datasette lab to your course outline."}),"\n",(0,t.jsxs)(s.h3,{id:"step-1-follow-the-guide-add-a-non-instructional-lab-to-your-course",children:["Step 1. Follow the guide: ",(0,t.jsx)(s.a,{href:"#add-a-non-instructional-lab-to-your-course",children:"Add a (Non-Instructional) Lab to your Course"})]}),"\n",(0,t.jsxs)(s.p,{children:["Start by following the same workflow as adding a non-instructional lab to your course. The difference being now you paste ",(0,t.jsx)(s.code,{children:"https://labs.cognitiveclass.ai/login/lti"})," as your launch url"]}),"\n",(0,t.jsx)(s.h3,{id:"step-2-upload-your-database-file-to-the-sn-file-library",children:"Step 2. Upload your database file to the SN File Library"}),"\n",(0,t.jsxs)(s.p,{children:["You must supply a database file as the value for ",(0,t.jsx)(s.code,{children:"sn_asset_library_sqlite_db_url"})," in your Custom LTI Parameters."]}),"\n",(0,t.jsxs)(s.p,{children:["To do this, you should upload a ",(0,t.jsx)(s.code,{children:".db"})," or ",(0,t.jsx)(s.code,{children:".sqlite"})," file of your choice to the SN File Library. Head to the ",(0,t.jsx)(s.code,{children:"content"})," tab of your course or guided project."]}),"\n",(0,t.jsxs)(s.p,{children:["Here you can open the File Library and upload your database file.\n",(0,t.jsx)(s.img,{alt:"image",src:a(7165).A+"",width:"3250",height:"1876"})]}),"\n",(0,t.jsx)(s.p,{children:"Once you have uploaded your database file to SN File Library, select the file and copy the asset URL."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(7114).A+"",width:"2970",height:"1616"})}),"\n",(0,t.jsx)(s.h3,{id:"step-3-copy-your-instructions-url",children:"Step 3. Copy your instructions url"}),"\n",(0,t.jsx)(s.p,{children:"you will also need an instructions URL."}),"\n",(0,t.jsxs)(s.p,{children:["This can be obtained by clicking opening the ",(0,t.jsx)(s.code,{children:"embed"})," popup on your lab in Author Workbench.\n",(0,t.jsx)(s.img,{alt:"image",src:a(6229).A+"",width:"3256",height:"1226"})]}),"\n",(0,t.jsx)(s.h3,{id:"step-4-add-custom-parameters-to-your-lti-item",children:"Step 4. Add custom parameters to your lti item"}),"\n",(0,t.jsx)(s.p,{children:"Fill out the custom parameters for your lti item"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image",src:a(5409).A+"",width:"2526",height:"1248"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'[\n    "sn_labs_tool=datasette",\n    "sn_labs_filepath=/labs/datasette/lab.db",\n    "sn_asset_library_sqlite_db_url=<DB URL FROM STEP 2>",\n    "sn_asset_library_instructions_url=<INSTRUCTIONS URL FROM STEP 3>"\n]\n'})}),"\n",(0,t.jsx)(s.h3,{id:"step-5-test-your-lab",children:"Step 5. Test your lab"}),"\n",(0,t.jsx)(s.p,{children:"Your lab should now be set up to use Datasette. If there are any issues, please double check that you followed all the steps above correctly."})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5428:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-Course-Outline-Coursera-e07e3a2cdecc1549653ea1926d0fe3a1.png"},7938:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-LTI-Credentials-Coursera-bcaf37172f19551ccb68941a77b5f1bb.png"},3566:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-add-to-course-cf537bdd699beff6bd329606dbd591d9.png"},8077:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-course-embed-lab-button-307314c37f7e266478fe71dea62adfac.png"},1411:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-coursera-lab-app-manager-add-766467bf5a0acb8c1e7aecbe77c2f2e8.png"},8012:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-coursera-lab-app-manager-lti-config-7729c182d1b8160374717f3d830ed2f3.png"},428:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-coursera-lab-app-manager-lti-input-90e076391671a4233e1019ab07196582.png"},3441:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-coursera-lab-app-manager-b57fc242583e3e5ac02432a9bba22dc0.png"},6023:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-coursera-lab-modal-lab-launch-url-e8e6a03389c25844691c0dec10c78de4.png"},5087:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-AW-instructional-lab-modal-json-cfbd494b08e3767ff5b9ae63434ccb30.png"},9429:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-JSON-d15978ffa217f48683c5f0b179b4afdf.png"},2386:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-add-LTI-item-741addad45a56bda5e422b3328da2d53.png"},403:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-add-ungraded-plugin-ef07f270a42934b15cccb9f444399612.png"},9769:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-choose-plugin-button-1f3184f526eef1f7943916af3c6c4940.png"},3074:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-edit-configuration-225da09c2cec7cf91fce0933bd8295a5.png"},1919:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-instructional-lab-publish-view-as-learner-5754ae7ca85372efcedf4dcd2d1e9096.png"},8271:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-pop-up-template-ebc91001768c2899e64315e7558670dd.png"},7919:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/SN-Coursera-version-e4f0798ae7870dda2ae674186e7f471c.png"},7114:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/copy-file-url-5bc8dcb8b8afbaa2ca39633596ff76d1.png"},5409:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/coursera-custom-params-c63bfea729ae3a8437d33b347e197359.png"},6229:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/embed-lab-d7f224e14ac2344decdcf2471d914e4d.png"},7165:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/open-file-library-5a167d291d1ad69b44465a9c226b1341.png"},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>i});var n=a(6540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);