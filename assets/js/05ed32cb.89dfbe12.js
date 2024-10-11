"use strict";(self.webpackChunkauthor_workbench_knowledgebase=self.webpackChunkauthor_workbench_knowledgebase||[]).push([[481],{1722:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(4848),t=o(8453);const s={sidebar_position:6},r="Cloud IDE",a={id:"labs/cloud-ide",title:"Cloud IDE",description:"Cloud IDE is a browser integrated development environment running in the cloud. It supports many programming languages and tools right out of the box so that the users can start working right away without the hassle of tedious setups.",source:"@site/docs/labs/cloud-ide.md",sourceDirName:"labs",slug:"/labs/cloud-ide",permalink:"/docs/labs/cloud-ide",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-skills-network/author-workbench-knowledgebase/tree/master/docs/labs/cloud-ide.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"JupyterLite vs JupyterLab",permalink:"/docs/labs/jupyterlite-vs-jupyterlab"},next:{title:"Author Jupyter Notebooks on Your Machine",permalink:"/docs/labs/edit-jupyterlab-instructions-computer"}},l={},d=[{value:"Launch a terminal",id:"launch-a-terminal",level:2},{value:"Docker",id:"docker",level:2},{value:"Volume Mount Points",id:"volume-mount-points",level:3},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Embeddable AI",id:"embeddable-ai",level:2},{value:"Using the provided Services",id:"using-the-provided-services",level:3},{value:"Building and Deploying to Code Engine",id:"building-and-deploying-to-code-engine",level:3},{value:"1. Create Code Engine Project",id:"1-create-code-engine-project",level:5},{value:"2. Click on Code Engine CLI Button",id:"2-click-on-code-engine-cli-button",level:5},{value:"3. Choose and deploy your desired Embeddable AI image",id:"3-choose-and-deploy-your-desired-embeddable-ai-image",level:5},{value:"Prerequisites:",id:"prerequisites",level:5},{value:"1. Log in to your IBM Cloud account",id:"1-log-in-to-your-ibm-cloud-account",level:5},{value:"2. Login to the IBM Entitled Registry",id:"2-login-to-the-ibm-entitled-registry",level:5},{value:"3. Choose and build your desired Embeddable AI image",id:"3-choose-and-build-your-desired-embeddable-ai-image",level:5},{value:"4 Create a namespace and log in to ICR",id:"4-create-a-namespace-and-log-in-to-icr",level:5},{value:"6. Push your image to your namespace",id:"6-push-your-image-to-your-namespace",level:5},{value:"7. Deploy the image to Code Engine",id:"7-deploy-the-image-to-code-engine",level:5},{value:"Americas",id:"americas",level:4},{value:"Europe",id:"europe",level:4},{value:"Asia Pacific",id:"asia-pacific",level:4},{value:"Framework-Specific Infomation",id:"framework-specific-infomation",level:2},{value:"Flutter Web and Cloud IDE",id:"flutter-web-and-cloud-ide",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cloud-ide",children:"Cloud IDE"})}),"\n",(0,i.jsx)(n.p,{children:"Cloud IDE is a browser integrated development environment running in the cloud. It supports many programming languages and tools right out of the box so that the users can start working right away without the hassle of tedious setups.\nUser interface of Cloud IDE, as shown below, comprises of course instructions on the left side and vscode-like development environment on the right side."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cloud IDE Screenshot",src:o(3939).A+"",width:"2551",height:"1567"})}),"\n",(0,i.jsx)(n.h2,{id:"launch-a-terminal",children:"Launch a terminal"}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.code,{children:"Terminal"})," in the menu of the development environment(on the right side of the screen). Then from the dropdown select ",(0,i.jsx)(n.code,{children:"New Terminal"})," and it should open up a new terminal for you."]}),"\n",(0,i.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Docker is an open source platform that is widely used to develop, ship and run applications. Cloud-IDE has built-in support for Docker. You can simply use ",(0,i.jsx)(n.code,{children:"docker"})," cli to run commands. Internally, the docker client(in your IDE) talks to docker daemon, running on a remote host, over a TCP connection. Default user(theia) is configured to run docker commands. Docker commands don't require root privileges. So, don't preface commands with ",(0,i.jsx)(n.code,{children:"sudo"})," or run them with root user. Some examples are:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker version\n"})}),"\n",(0,i.jsx)(n.p,{children:"It prints information about the docker client and engine."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker container list\n"})}),"\n",(0,i.jsx)(n.p,{children:"It lists the existing containers."}),"\n",(0,i.jsx)(n.h3,{id:"volume-mount-points",children:"Volume Mount Points"}),"\n",(0,i.jsxs)(n.p,{children:["Volume is mounted to persist data from a docker container. Currently, Cloud-IDE only allows mounting data from ",(0,i.jsx)(n.code,{children:"/home/project"})," directory. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker run -itd --name my-first-container -v /home/project/testDir:/app ubuntu:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It spins up ",(0,i.jsx)(n.code,{children:"my-first-container"})," using ",(0,i.jsx)(n.code,{children:"ubuntu:latest"})," image and mounts ",(0,i.jsx)(n.code,{children:"/home/project/testDir"}),"(if it exists in your environment) to the ",(0,i.jsx)(n.code,{children:"/app"})," directory  inside the container."]}),"\n",(0,i.jsxs)(n.p,{children:["See the docker ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/docker/",children:"documentation"})," for more commands."]}),"\n",(0,i.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes is an open source container orchestrator which allows to schedule docker containers on large scale compute nodes. It is now a de-facto standard for cloud-native application development and deployment. Cloud-IDE is already configured to support Kubernetes. It has a pre-installed command line tool called ",(0,i.jsx)(n.code,{children:"kubectl"})," that handles communication with remote kubernetes cluster. Here are a few examples:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl run my-first-pod --restart=Never --image=ubuntu -- sleep 10s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It creates a ",(0,i.jsx)(n.code,{children:"my-first-pod"})," that runs a container using ",(0,i.jsx)(n.code,{children:"ubuntu"})," image with ",(0,i.jsx)(n.code,{children:"sleep 10s"})," command. This container spawns ",(0,i.jsx)(n.code,{children:"sleep 10s"})," process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"kubectl get pods\n"})}),"\n",(0,i.jsx)(n.p,{children:"It prints existing pods in your namespace."}),"\n",(0,i.jsxs)(n.p,{children:["More commands can be found in the Kubernetes ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands",children:"documentation"})]}),"\n",(0,i.jsx)(n.h2,{id:"embeddable-ai",children:"Embeddable AI"}),"\n",(0,i.jsxs)(n.p,{children:["Cloud IDE supports various Embeddable AI services includes Text-To-Speech, Speech-To-Text, and various Watson NLP services (e.g. sentiment, emotion, etc.). Learners have immediate access to all of these services (via HTTP API calls) to learn, test, and embed in their applications. Moreover, Skills Network provides images for all of these services so learners can ",(0,i.jsx)(n.em,{children:"deploy"})," the services to the provided Code Engine Project, alongisde their applcations."]}),"\n",(0,i.jsx)(n.h3,{id:"using-the-provided-services",children:"Using the provided Services"}),"\n",(0,i.jsxs)(n.p,{children:["All of the services are available to all Cloud IDE learners, for all flavours of Cloud IDE. For example the Text-To-Speech can be accessed at: ",(0,i.jsx)(n.a,{href:"https://sn-watson-tts.labs.skills.network",children:"https://sn-watson-tts.labs.skills.network"}),". To help learners both know what services are available and how to use them the Skills Network Toolbox provides a page for each of the Embeddable AI services which shows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name and brief description"}),"\n",(0,i.jsx)(n.li,{children:"Available Models"}),"\n",(0,i.jsx)(n.li,{children:"Link to Documentation"}),"\n",(0,i.jsx)(n.li,{children:"Example Commands (with button to easily copy or run in terminal)"}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:(0,i.jsx)("u",{children:"View Screenshot"})})}),(0,i.jsx)("img",{width:"422",alt:"image",src:"https://user-images.githubusercontent.com/276912/215758158-2c8022b5-7d03-454e-a0bf-ed75e0d08d7d.png"})]}),"\n",(0,i.jsx)(n.p,{children:"Moreover, as an author, within Author IDE, you can add Buttons to your lab's markdown instructions to help learners open these pages with a simple button click."}),"\n",(0,i.jsx)(n.h3,{id:"building-and-deploying-to-code-engine",children:"Building and Deploying to Code Engine"}),"\n",(0,i.jsx)(n.p,{children:"If you would like to deploy any of the above-mentioned Embeddable AI NLP service and have it be available for anyone to use, you can follow these steps in order to deploy it. The deployment will be to IBM Cloud\u2019s Code Engine. IBM Cloud Code Engine is a fully managed, cloud-native service for running containerized workloads on IBM Cloud. It allows developers to deploy and run code in a secure, scalable and serverless environment, without having to worry about the underlying infrastructure."}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:(0,i.jsx)("u",{children:"Deploying to Skills Network Code Engine"})})}),(0,i.jsxs)(n.p,{children:["The following steps allow you to test deploy to a IBM's Code Engine envrionement which is managed by Skills Network. This deployment is relatively easier and is recommended to quickly test out that if everything is working just fine.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:"Note: This deployment is temporary and is deleted after a few days."})]}),(0,i.jsx)(n.h5,{id:"1-create-code-engine-project",children:"1. Create Code Engine Project"}),(0,i.jsxs)(n.p,{children:["In the left hand navigation pannel, there is an option for the Skills Network Toolbox. Simply open that and that expand the ",(0,i.jsx)(n.em,{children:"CLOUD"})," section and then click on ",(0,i.jsx)(n.em,{children:"Code Engine"}),". Finally cick on Create Project."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Create Code Engine Project",src:o(8697).A+"",title:"Create Code Engine Project",width:"2300",height:"1698"})}),(0,i.jsx)(n.h5,{id:"2-click-on-code-engine-cli-button",children:"2. Click on Code Engine CLI Button"}),(0,i.jsx)(n.p,{children:"From the same page simply click on Code Engine CLI button. This will open a new terminal and will login to a code engine project with everything alraedy set up for you."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Code Engine CLI",src:o(5318).A+"",title:"Code Engine CLI",width:"2200",height:"1270"})}),(0,i.jsx)(n.h5,{id:"3-choose-and-deploy-your-desired-embeddable-ai-image",children:"3. Choose and deploy your desired Embeddable AI image"}),(0,i.jsx)(n.p,{children:"To get started, simply run the following command in the terminal and choose the Watson's AI model you would like to use."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud cr image-list --restrict sn-labsassets\n"})}),(0,i.jsxs)(n.p,{children:["After you execute the above command, terminal will output all the different NLP images available. You can then simply choose one of them by copying it's url. For this example, let's say you want to deploy the ",(0,i.jsx)(n.code,{children:"us.icr.io/sn-labsassets/sentiment-bert-watson-nlp-runtime"})," model to Code Engine."]}),(0,i.jsx)(n.p,{children:"Then in the same terminal, run the following commands to deploy the model:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Choose a app name for your Code Engine application\nAPP_NAME="Replace with your Code Engine Application Name"\n\n# Replace with your desired Watson NLP image\nCONTAINER_IMAGE_URL="us.icr.io/sn-labsassets/sentiment-bert-watson-nlp-runtime"\n'})}),(0,i.jsxs)(n.p,{children:["You an also set a visibility for your application, we would recommened to keep it as ",(0,i.jsx)(n.code,{children:"project"})," to restrict any external traffic to it, and only allow the applications within your code engine project to be able to communicate with it as desired. For more infomration about visibility, check out the IBM Cloud Code Engine docs ",(0,i.jsx)(n.a,{href:"https://cloud.ibm.com/docs/codeengine?topic=codeengine-application-workloads#optionsvisibility",children:"here"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"VISIBILITY=project\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud ce application create \\\n--name ${APP_NAME} \\\n--env ACCEPT_LICENSE=true \\\n--image ${CONTAINER_IMAGE_URL} \\\n--registry-secret icr-secret \\\n--visibility ${VISIBILITY}\n"})}),(0,i.jsx)(n.p,{children:"After the application is ready, it will display the deployed NLP service URL in the terminal. You can then utilize this service URL in the same way as the other pre-existing Watson NLP services provided by Skills Network, and directly incorporate it into any of your other applications that have been deployed to Code Engine."})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:(0,i.jsx)("u",{children:"Deploying to your personal IBM Cloud account's Code Engine"})})}),(0,i.jsx)(n.p,{children:"The following steps allow you to deploy the Watson NLP models to your personal IBM Cloud account's Code Engine envrionement. This deployment has some prerequisites and extra steps but ensures that your deployment is permanent untill you delete it yourself."}),(0,i.jsx)(n.h5,{id:"prerequisites",children:"Prerequisites:"}),(0,i.jsxs)(n.p,{children:["Ensure that you have registered for a IBM Cloud account and have enabled the billing. You can ",(0,i.jsx)(n.a,{href:"https://cloud.ibm.com/registration?target=/codeengine/overview",children:"try it at no charge"})," and receive USD$200 in cloud credits."]}),(0,i.jsx)(n.h5,{id:"1-log-in-to-your-ibm-cloud-account",children:"1. Log in to your IBM Cloud account"}),(0,i.jsxs)(n.p,{children:["Using the ",(0,i.jsx)(n.code,{children:"ibmcloud login"})," command log into your own IBM Cloud account. Remember to replace ",(0,i.jsx)(n.code,{children:"USERNAME"})," with your IBM Cloud account email and then enter your password when promted to."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud login -u USERNAME\n"})}),(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"ibmcloud login --sso"})," command to login, if you have a federated ID."]}),(0,i.jsxs)(n.p,{children:["Then target any specific resource group in your account. By default, if you've completed the sign up process for your IBM Cloud account, you can use the ",(0,i.jsx)(n.code,{children:"Default"})," resource group."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud target -g Default\n"})}),(0,i.jsx)(n.h5,{id:"2-login-to-the-ibm-entitled-registry",children:"2. Login to the IBM Entitled Registry"}),(0,i.jsx)(n.p,{children:"You'll need to login to IBM Entitled Registry to download the desired Watson NLP models so you can deploy them to your own Code Engine project."}),(0,i.jsxs)(n.p,{children:["Go ",(0,i.jsx)(n.a,{href:"https://myibm.ibm.com/products-services/containerlibrary",children:"IBM's Container Library"})," to get an Entitlement Key. This Key gives you access to pulling and using the IBM Watson Speech Libraries for Embed. However, do note that ",(0,i.jsx)(n.strong,{children:"this key is only valid for a Year as a trial."})]}),(0,i.jsx)(n.p,{children:"Once you've obtained the Entitlement Key from the container software library you can login to the registry with the key, and pull the images."}),(0,i.jsx)(n.p,{children:"Replace it with your own IBM Entitlement Key."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'IBM_ENTITLEMENT_KEY="YOUR_IBM_ENTITLEMENT_KEY"\n'})}),(0,i.jsx)(n.p,{children:"Login to docker registry to pull the images."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo $IBM_ENTITLEMENT_KEY | docker login -u cp --password-stdin cp.icr.io\n"})}),(0,i.jsx)(n.h5,{id:"3-choose-and-build-your-desired-embeddable-ai-image",children:"3. Choose and build your desired Embeddable AI image"}),(0,i.jsxs)(n.p,{children:["Similar to deploying the image to Skills Network managed Code Engine, you will first need to choose a model from the ",(0,i.jsx)(n.a,{href:"https://www.ibm.com/docs/en/watson-libraries?topic=models-catalog",children:"model catalog"}),"."]}),(0,i.jsxs)(n.p,{children:["Using the same example as above, let's say you want to deploy the ",(0,i.jsx)(n.code,{children:"sentiment_aggregated-bert-workflow_lang_multi_stock"})," model to Code Engine."]}),(0,i.jsxs)(n.p,{children:["Simply copy it's ",(0,i.jsx)(n.em,{children:"Container Image"})," url as shown below."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Models Catalog Container Image Url",src:o(1400).A+"",width:"2254",height:"518"})}),(0,i.jsxs)(n.p,{children:["Now simply run the following commands in a terminal to download the chosen model to ",(0,i.jsx)(n.em,{children:"models"})," directory:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'CONTAINER_IMAGE_URL="Replace with the conatiner image url for your chosen model"\nmkdir models\ndocker run -it --rm -e ACCEPT_LICENSE=true -v `pwd`/models:/app/models ${CONTAINER_IMAGE_URL}\n'})}),(0,i.jsxs)(n.p,{children:["After this create a new file called ",(0,i.jsx)(n.code,{children:"Dockerfile"})," and add the following contents to it:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ARG TAG=1.0\nFROM cp.icr.io/cp/ai/watson-nlp-runtime:${TAG}\nCOPY models /app/models\n"})}),(0,i.jsx)(n.p,{children:"Finally build your image by executing this command in your terminal:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t my-watson-nlp-runtime:latest\n"})}),(0,i.jsx)(n.h5,{id:"4-create-a-namespace-and-log-in-to-icr",children:"4 Create a namespace and log in to ICR"}),(0,i.jsxs)(n.p,{children:["You will need to create a namespace before you can upload your images, and make sure you're targeting the ICR region you want, which right now is ",(0,i.jsx)(n.code,{children:"global"}),"."]}),(0,i.jsxs)(n.p,{children:["Choose a name for your namespace, specified as ",(0,i.jsx)(n.code,{children:"${NAMESPACE}"}),", and create the namespace. Currently, it's set to ",(0,i.jsx)(n.code,{children:"my-embeddable-ai"}),", you can choose to rename it to anything you choose."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NAMESPACE=my-embeddable-ai\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud cr region-set global\nibmcloud cr namespace-add ${NAMESPACE}\nibmcloud cr login\n"})}),(0,i.jsx)(n.h5,{id:"6-push-your-image-to-your-namespace",children:"6. Push your image to your namespace"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"REGISTRY=icr.io\n\n# Tag and push the image\ndocker tag my-watson-nlp-runtime:latest ${REGISTRY}/${NAMESPACE}/my-watson-nlp-runtime:latest\ndocker push ${REGISTRY}/${NAMESPACE}/my-watson-nlp-runtime:latest\n"})}),(0,i.jsx)(n.h5,{id:"7-deploy-the-image-to-code-engine",children:"7. Deploy the image to Code Engine"}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1:"})," Target a region and a resource group"]}),(0,i.jsx)(n.p,{children:"Choose the region closest to you and/or your target users. Picking a region closer to you or your users makes the browser extension faster. The further the region the longer the request to the model has to travel."}),(0,i.jsx)(n.p,{children:"You can choose any region from this list:"}),(0,i.jsx)(n.h4,{id:"americas",children:"Americas"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"us-south"})," - Dallas"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"br-sao"})," - Sao Paulo"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ca-tor"})," - Toronto"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"us-east"})," - Washington DC"]}),"\n"]}),(0,i.jsx)(n.h4,{id:"europe",children:"Europe"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eu-de"})," - Frankfurt"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eu-gb"})," - London"]}),"\n"]}),(0,i.jsx)(n.h4,{id:"asia-pacific",children:"Asia Pacific"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"au-syd"})," - Sydney"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jp-tok"})," - Tokyo"]}),"\n"]}),(0,i.jsx)(n.p,{children:"Use the following commands to target Dallas as the region and the Default resource group."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"REGION=us-south\nRESOURCE_GROUP=Default\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud target -r ${REGION} -g ${RESOURCE_GROUP}\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2:"})," Create and Select a new Code Engine project"]}),(0,i.jsxs)(n.p,{children:["In this example, a project named ",(0,i.jsx)(n.code,{children:"my-test-project"})," will be create in the resource group set by the previous command."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud ce project create --name my-test-project\nibmcloud ce project select --name my-test-project\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3:"})," Deploy Watson NLP Image"]}),(0,i.jsx)(n.p,{children:"Choose a app name for your Code Engine application and set the container image url you just copied."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'APP_NAME="Replace with your Code Engine Application Name"\n'})}),(0,i.jsxs)(n.p,{children:["You an also set a visibility for your application, we would recommened to keep it as ",(0,i.jsx)(n.code,{children:"project"})," to restrict any external traffic to it, and only allow the applications within your code engine project to be able to communicate with it as desired. For more infomration about visibility and other optional parameters, check out the IBM Cloud Code Engine docs ",(0,i.jsx)(n.a,{href:"https://cloud.ibm.com/docs/codeengine?topic=codeengine-application-workloads",children:"here"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"VISIBILITY=project\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ibmcloud ce application create \\\n  --name ${APP_NAME} \\\n  --port 1080 \\\n  --min-scale 1 --max-scale 2 \\\n  --cpu 2 --memory 8G \\\n  --image private.${REGISTRY}/${NAMESPACE}/my-watson-nlp-runtime:latest \\\n  --registry-secret ce-auto-icr-private-${REGION} \\\n  --visibility ${VISIBILITY} \\\n  --env ACCEPT_LICENSE=true\n"})}),(0,i.jsx)(n.p,{children:"After the application is ready, it will display the deployed NLP service URL in the terminal. You can then utilize this service URL in the same way as the other pre-existing Watson NLP services provided by Skills Network, and directly incorporate it into any of your other applications that have been deployed to Code Engine."})]}),"\n",(0,i.jsx)(n.h2,{id:"framework-specific-infomation",children:"Framework-Specific Infomation"}),"\n",(0,i.jsx)(n.h3,{id:"flutter-web-and-cloud-ide",children:"Flutter Web and Cloud IDE"}),"\n",(0,i.jsx)(n.p,{children:"Flutter Web\u2019s hot restart feature, which allows developers to see changes instantly by pressing r in the terminal, doesn\u2019t work as expected in the Cloud IDE due to differences in the environment."}),"\n",(0,i.jsxs)(n.p,{children:["However, there\u2019s a simple workaround with a bash script to mimic the hot reload functionality. Click ",(0,i.jsx)(n.a,{href:"/docs/labs/flutter-web-hot-restart",children:"here"})," for more information on how to use this workaround."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3939:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/cloud-ide-screenshot-c304d94dde20404ce727ac67c505c5e4.png"},5318:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/code-engine-cli-button-8ad3995a6077bf633ec4736bed9b48a7.png"},8697:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/code-engine-create-project-ea6626a715dce64b7846001a127b008c.png"},1400:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/models-catalog-container-image-url-1d72ae1cbc6d36684b5fc2b1e0ce4cd4.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);