"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[897],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var o=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},l=Object.keys(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=o.createContext({}),u=function(t){var e=o.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(a),k=n,b=p["".concat(i,".").concat(k)]||p[k]||c[k]||l;return a?o.createElement(b,r(r({ref:e},d),{},{components:a})):o.createElement(b,r({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,r[1]=s;for(var u=2;u<l;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5298:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=a(3117),n=a(102),l=(a(7294),a(3905)),r=["components"],s={},i="Add a Lab to your Skills Network Course",u={unversionedId:"labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course",id:"labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course",title:"Add a Lab to your Skills Network Course",description:"Once you have created a lab, you then need to add it to your course via Studio. When you are adding a lab to your course, you embed your lab into a unit of your course. This way, learners will naturally progress through the course, and complete your labs as they go.",source:"@site/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course.md",sourceDirName:"labs/adding-labs-to-courses",slug:"/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course",draft:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/adding-labs-to-courses/add-a-lab-to-a-skills-network-course.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add a Lab to your Coursera Course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-a-coursera-course"},next:{title:"Add a Lab to your edX.org Course",permalink:"/docs/labs/adding-labs-to-courses/add-a-lab-to-an-edx-org-course"}},d={},c=[{value:"Add an Instructional Lab to your Course",id:"add-an-instructional-lab-to-your-course",level:2},{value:"Add a (Non-Instructional) Lab to your Course",id:"add-a-non-instructional-lab-to-your-course",level:2},{value:"Lab Launch Url",id:"lab-launch-url",level:3},{value:"Add a Datasette Lab to your Course",id:"add-a-datasette-lab-to-your-course",level:2},{value:"Step 1. Add a lab to your outline",id:"step-1-add-a-lab-to-your-outline",level:3},{value:"Step 2. Start writing your Custom LTI Parameters",id:"step-2-start-writing-your-custom-lti-parameters",level:3},{value:"Step 3. Upload your database file to the SN File Library",id:"step-3-upload-your-database-file-to-the-sn-file-library",level:3},{value:"Step 4. Copy your instructions url",id:"step-4-copy-your-instructions-url",level:3},{value:"Step 5. Paste your Custom Parameters into studio and save",id:"step-5-paste-your-custom-parameters-into-studio-and-save",level:3},{value:"Step 6. Test your lab",id:"step-6-test-your-lab",level:3}],p={toc:c};function k(t){var e=t.components,s=(0,n.Z)(t,r);return(0,l.kt)("wrapper",(0,o.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-a-lab-to-your-skills-network-course"},"Add a Lab to your Skills Network Course"),(0,l.kt)("p",null,"Once you have created a lab, you then need to ",(0,l.kt)("strong",{parentName:"p"},"add it to your course via Studio"),". When you are adding a lab to your course, you ",(0,l.kt)("strong",{parentName:"p"},"embed your lab into a unit of your course"),". This way, learners will naturally progress through the course, and complete your labs as they go."),(0,l.kt)("h2",{id:"add-an-instructional-lab-to-your-course"},"Add an Instructional Lab to your Course"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This section is only for instructional labs. If you wish to add a different lab type to your course, see the ",(0,l.kt)("a",{parentName:"p",href:"#add-a-non-instructional-lab-to-your-course"},"Add a (Non Instructional) Lab to your Course")," section below.")),(0,l.kt)("p",null,'As a Skills Network author, you can create "instructional labs". These are labs that include step by step instructions for working with tools external to Skills Network Labs, such as services on IBM Cloud. '),(0,l.kt)("p",null,"HTML files will be automatically generated from instructional labs so they can be easliy embedded or linked to from your course. To embed an instructional lab in your course, follow the steps below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On your course page, navigate to the lab you want (under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Labs"),' tab) and click "Add to Course"')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(1869).Z,width:"2624",height:"1056"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Copy the iFrame code provided ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3677).Z,width:"1138",height:"834"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Close the pop-up and navigate to your Course Outline in the ",(0,l.kt)("inlineCode",{parentName:"li"},"Content"),' tab on your course page. Press the "Edit in Studio" button to open the outline in Skills Network Studio')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(565).Z,width:"2606",height:"1282"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Select the unit you want to add your lab in, or create a new unit if one doesn't exist yet")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(7036).Z,width:"2616",height:"1652"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Within your desired unit, add a new HTML component")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(8079).Z,width:"2592",height:"1206"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Select iFrame Tool from the dropdown list")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(5089).Z,width:"2588",height:"1190"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Click on the Edit button")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(6308).Z,width:"2596",height:"1736"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Select the HTML option")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(4731).Z,width:"3188",height:"1128"})),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Remove all existing content, and paste the iFrame code you obtained from step 2. Then click OK to exit the HTML editor.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(9857).Z,width:"1592",height:"1272"})),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Click Save to save your work.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(5114).Z,width:"3170",height:"1114"})),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"Now, your instructional lab should be embedded into your unit. You can preview the unit by clicking the Preview button in the top right corner, or publish the unit if you are satisfied with everything.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(1830).Z,width:"2586",height:"1508"})),(0,l.kt)("h2",{id:"add-a-non-instructional-lab-to-your-course"},"Add a (Non-Instructional) Lab to your Course"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This section is only applicable for any lab type ",(0,l.kt)("em",{parentName:"p"},"other")," than an instructional lab. If you wish to add an instructional lab to your course, see the ",(0,l.kt)("a",{parentName:"p",href:"#add-an-instructional-lab-to-your-course"},"Add an Instructional Lab to your Course")," section.")),(0,l.kt)("p",null,"To add a (non-instructional) lab to your course in ",(0,l.kt)("strong",{parentName:"p"},"Studio"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Skills Network Studio, go to the unit you want your lab to be in. If it doesn't exist yet, you can create a new unit.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(7036).Z,width:"2616",height:"1652"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Click the green advanced button and select LTI Consumer")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3812).Z,width:"2594",height:"836"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(2721).Z,width:"2618",height:"802"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Edit the following properties of your LTI Consumer.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3161).Z,width:"2590",height:"1332"})),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI ID ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"sn_lti")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI URL ")," ",(0,l.kt)("td",null," See the ",(0,l.kt)("a",{href:"#lab-launch-url"},"Lab Launch Url")," section below.  ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI Launch Target ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"New Window")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Request user's username ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Request user's email ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Send extra parameters ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," "))),(0,l.kt)("h3",{id:"lab-launch-url"},"Lab Launch Url"),(0,l.kt)("p",null,"The Lab Launch url can be easily found in Author Workbench on your course page. Just follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On your course page, navigate to the lab you want (under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Labs"),' tab) and click "Embed"')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3126).Z,width:"2902",height:"1064"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Copy the the Lab's Launchg Url by clicking on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Copy")," button.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(2167).Z,width:"710",height:"471"})),(0,l.kt)("p",null,"Once everything has been added, your final configuration should look something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(9626).Z,width:"3270",height:"984"}),"\n",(0,l.kt)("img",{alt:"image",src:a(7426).Z,width:"3272",height:"988"}),"\n",(0,l.kt)("img",{alt:"image",src:a(7239).Z,width:"3278",height:"994"}),"\n",(0,l.kt)("img",{alt:"image",src:a(669).Z,width:"3270",height:"988"})),(0,l.kt)("h2",{id:"add-a-datasette-lab-to-your-course"},"Add a Datasette Lab to your Course"),(0,l.kt)("p",null,"Adding Datasette labs to your course involves a few steps. This guide will outline all the steps you must follow to successfully add a Datasette lab to your course or guided project outline."),(0,l.kt)("h3",{id:"step-1-add-a-lab-to-your-outline"},"Step 1. Add a lab to your outline"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Skills Network Studio, go to the unit you want your lab to be in. If it doesn't exist yet, you can create a new unit.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(7036).Z,width:"2616",height:"1652"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Click the green advanced button and select LTI Consumer")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3812).Z,width:"2594",height:"836"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(2721).Z,width:"2618",height:"802"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Edit the following properties of your LTI Consumer.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(3161).Z,width:"2590",height:"1332"})),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI ID ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"sn_lti")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI URL ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null," https://labs.cognitiveclass.ai/login/lti ")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Custom Parameters ")," ",(0,l.kt)("td",null," See ",(0,l.kt)("a",{href:"#step-2-start-writing-your-custom-lti-parameters"},"Step 2")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," LTI Launch Target ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"New Window")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Request user's username ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Request user's email ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," ")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Send extra parameters ")," ",(0,l.kt)("td",null," ",(0,l.kt)("code",null,"true")," "))),(0,l.kt)("h3",{id:"step-2-start-writing-your-custom-lti-parameters"},"Step 2. Start writing your Custom LTI Parameters"),(0,l.kt)("p",null,"Now you must create the Custom Parameters. The values you use in your Custom Parameters are very important."),(0,l.kt)("p",null,"Below are the parameters you will need. Some of the values will have to be obtained in the next steps."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"We strongly recommend you give each lab a unique path in the ",(0,l.kt)("inlineCode",{parentName:"strong"},"sn_labs_filepath")," value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n    "sn_labs_tool=datasette",\n    "sn_labs_filepath=/labs/datasette/lab.db",\n    "sn_asset_library_sqlite_db_url=<SEE STEP 3>",\n    "sn_asset_library_instructions_url=<SEE STEP 4>"\n]\n')),(0,l.kt)("h3",{id:"step-3-upload-your-database-file-to-the-sn-file-library"},"Step 3. Upload your database file to the SN File Library"),(0,l.kt)("p",null,"You must supply a database file as the value for ",(0,l.kt)("inlineCode",{parentName:"p"},"sn_asset_library_sqlite_db_url")," in your Custom Parameters."),(0,l.kt)("p",null,"To do this, you should upload a ",(0,l.kt)("inlineCode",{parentName:"p"},".db")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".sqlite")," file of your choice to the SN File Library. Head to the ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," tab of your course or guided project."),(0,l.kt)("p",null,"Here you can open the File Library and upload your database file.\n",(0,l.kt)("img",{alt:"image",src:a(5675).Z,width:"3250",height:"1876"})),(0,l.kt)("p",null,"Once you have uploaded your database file to SN File Library, select the file and copy the asset URL."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(8910).Z,width:"2970",height:"1616"})),(0,l.kt)("p",null,"Now you can add this URL to your Custom Parameters like so"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n    "sn_labs_tool=datasette",\n    "sn_labs_filepath=/labs/datasette/lab.db",\n    "sn_asset_library_sqlite_db_url=https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/datasette-test/datasets/MyDemoDataset.db",\n    "sn_asset_library_instructions_url=<SEE STEP 4>"\n]\n')),(0,l.kt)("h3",{id:"step-4-copy-your-instructions-url"},"Step 4. Copy your instructions url"),(0,l.kt)("p",null,"Finally, you just need an instructions URL."),(0,l.kt)("p",null,"This can be obtained by clicking opening the ",(0,l.kt)("inlineCode",{parentName:"p"},"embed")," popup on your lab in Author Workbench.\n",(0,l.kt)("img",{alt:"image",src:a(3450).Z,width:"3256",height:"1226"})),(0,l.kt)("p",null,"Now you can add this URL to your Custom Parameters like so"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n    "sn_labs_tool=datasette",\n    "sn_labs_filepath=/labs/datasette/lab.db",\n    "sn_asset_library_sqlite_db_url=https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/datasette-test/datasets/MyDemoDataset.db",\n    "sn_asset_library_instructions_url=https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/datasette-test/instructions.md"\n]\n')),(0,l.kt)("h3",{id:"step-5-paste-your-custom-parameters-into-studio-and-save"},"Step 5. Paste your Custom Parameters into studio and save"),(0,l.kt)("p",null,"Now that you have completed the steps above, you should have all the right parameters to complete the set up of your lab in SN Studio."),(0,l.kt)("p",null,"You should paste the Custom Parameters you built in the previous steps to complete the LTI Consumer object."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:a(1620).Z,width:"3256",height:"1226"})),(0,l.kt)("p",null,"Now you can click ",(0,l.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,l.kt)("h3",{id:"step-6-test-your-lab"},"Step 6. Test your lab"),(0,l.kt)("p",null,"It is important to test to ensure you set everything up correctly."),(0,l.kt)("p",null,"Click the ",(0,l.kt)("inlineCode",{parentName:"p"},"Publish")," button and then click ",(0,l.kt)("inlineCode",{parentName:"p"},"View Live Version"),"."),(0,l.kt)("p",null,"This will allow you preview the lab as a learner would see it."),(0,l.kt)("p",null,"If there are any issues, please double check that you followed all the steps above correctly."))}k.isMDXComponent=!0},565:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-Course-Outline-15215a8182aa658825658ce8ebcc2b9f.png"},1869:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-add-to-course-f3bbed2a88f79770898192d13c74976e.png"},3126:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-course-embed-lab-button-e93a4ca7fb77bd8a4d0139fc0b489518.png"},9626:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-edx-lti-consumer-params-1-f108eaf6354d4b6a9484918ffaba5da9.png"},7426:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-edx-lti-consumer-params-2-c343de07d706d2b70fb3f8fbd197fdad.png"},7239:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-edx-lti-consumer-params-3-4c022611adf90e9cf0d8c69b71808bf6.png"},669:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-edx-lti-consumer-params-4-0e96b26c08d00d7a118df7ee57525324.png"},3677:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-instructional-lab-modal-iframe-6c52e945d7ba09915ed198a5ad54e6e8.png"},2167:function(t,e,a){e.Z=a.p+"assets/images/SN-AW-skills-network-lab-modal-lab-launch-url-009448b985927f6fe14ed18cbae70674.png"},2721:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-LTI-Consumer-5a5625f221a121466c0113197e758804.png"},8079:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-add-HTML-component-c53d1046aa37f11529fdbb217a9ca3e1.png"},3812:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-add-advanced-component-c6fc4aecdd00ac22dae18f26cdb06df1.png"},7036:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-choose-unit-f3a37473f4a15553adabdbf2894c27a4.png"},3161:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-edit-LTI-Consumer-119dfcf36e60d21cac5e1ed027c8134f.png"},6308:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-edit-iFrame-2d94dc276366dffa534e4a6c8ec7c4f3.png"},9857:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-iFrame-HTML-edit-0e70bb308ed94d25ebfe153d27b3bcec.png"},4731:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-iFrame-HTML-989c09ce24a7e139c473a30ef8848ba9.png"},5089:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-iFrame-Tool-ab25f4fcc1aa9ac8e643f030af97e9d5.png"},5114:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-iFrame-save-d2c4d12cfaa0735beb581cc63d9f6da4.png"},1830:function(t,e,a){e.Z=a.p+"assets/images/SN-Studio-preview-unit-e48d9dfba9e69d1eb64186530b337a2c.png"},8910:function(t,e,a){e.Z=a.p+"assets/images/copy-file-url-5bc8dcb8b8afbaa2ca39633596ff76d1.png"},1620:function(t,e,a){e.Z=a.p+"assets/images/custom-params-datasette-e18ece9341949e4057ae72d321f5aeca.png"},3450:function(t,e,a){e.Z=a.p+"assets/images/embed-lab-d7f224e14ac2344decdcf2471d914e4d.png"},5675:function(t,e,a){e.Z=a.p+"assets/images/open-file-library-5a167d291d1ad69b44465a9c226b1341.png"}}]);