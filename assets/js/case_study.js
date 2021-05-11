function dynamic_div_selection() {
    let url = window.location.href;
    switch (url.split("#")[1]) {
        case "belron":
            div1_para()
            break;
        case "toyota":
            div2_para()
            break;
        case "validus":
            div3_para()
            break;
        case "collums":
            div4_para()
            break;
    }
}

window.onload = dynamic_div_selection;

function div1_para() {
    ///
    var tag = document.createElement("A");
    tag.setAttribute("href", "#div_explanation");
    ///


    document.getElementById("belron").style.backgroundColor = "#f5f5f5";
    document.getElementById("toyota").style.backgroundColor = "#fff";
    document.getElementById("validus").style.backgroundColor = "#fff";
    document.getElementById("collums").style.backgroundColor = "#fff";
    document.getElementById("pb1").innerHTML = "Existing legacy systems are limited to how they can scale and what they can do for their end client. In the case of Belron a forward thinking plan was needed to implement AWS serverless into various aspects of their giant organisation. Westpoint put together a robust architecture plan which would allow for ease of scaling and cost savings using many various AWS micro services. Our Goal with Belron was a united one, we wanted to create a cost saving solution which could scale on demand and scale infinitely.";
    document.getElementById("pb2").innerHTML = "Based on AWS serverless services like API Gateway, Lambda, DynamoDB and Glue. Using API Gateway and Lambda we provided some endpoints that Belron could use to configure the system, and since Belron have business units across the world, these settings are applied only for the country the user is registered. Using only one endpoint, we could provide them the logic needed to automate a part of the work from business units, this endpoint registers data about the call in a DynamoDB table. The other side of the application is the analytics, where we use AWS Glue to automate the process of exporting data from a DynamoDB table to a Glue Database without the time overheads to manage migration or backup scripts. After that an Apache Spark job is triggered to generate analytics from the data in the Glue Database, in the end saving this data to a S3 Bucket and later querying all of this analytics using AWS Athena.";
    document.getElementById("pb3").innerHTML = "To build this project, Westpoint selected some of the best technologies available in the market. They are: AWS as the cloud environment, in which microservices such as Amazon API Gateway, AWS Lambda Functions and Layers, AWS Glue, Amazon DynamoDB and Amazon S3. Python as the main programming language for the application, used from AWS Lambdas to AWS Glue jobs. And Apache Spark was used inside AWS Glue Jobs to perform data analytics on the incoming data.";
    document.getElementById("pb4").innerHTML = "A Leading Global glass replacement company with business units across the globe tasked Westpoint to produce an application which would improve the efficiency and reduce costs of an existing and instrumental process. This application would then be used to facilitate a smooth workflow for multiple business units across Europe. Although we are unable to give specific details regarding the project as it is still ongoing we can highlight and detail the AWS services we implemented for cost saving and efficiency to Belron."
}
function div2_para() {
    document.getElementById("belron").style.backgroundColor = "#fff";
    document.getElementById("toyota").style.backgroundColor = "#f5f5f5";
    document.getElementById("validus").style.backgroundColor = "#fff";
    document.getElementById("collums").style.backgroundColor = "#fff";
    document.getElementById("pb1").innerHTML = "The world of Identity access management has been come increasingly significant and extremely sensitive. None more so than for giant enterprise companies who manage millions of users, each with personal data that must be protected. As this project is still on going we can not share specific details but we can say that Westpoint was tasked with creating a stable and secure platform for the use of Toyota North America end users. Previous consultancies were unable to deliver tangible results or did not have the relevant engineers to undertake such a task.";
    document.getElementById("pb2").innerHTML = "All of our engineers are not only certified AWS but have various certifications in IAM, IDP with the top 3 Security providers. This enabled all of our engineers to undertakes the project with experience and knowledge in DevOps and hard coding using Python, Groovy and others. We were able to please our client with significant victories and deliverables from the very start, which has enabled us to forge strong a working relationship with our client and given them enough confidence that we have been asked to take on another project with them.";
    document.getElementById("pb3").innerHTML = "To build this project, Westpoint selected some of the best technologies available in the market. They are: Forgerock as the AM and IDM provider, used for authentication and identity management. Groovy used as the programming language to create custom endpoints and IDM scripts. And JavaScript as the language to develop the frontend of the application.";
    document.getElementById("pb4").innerHTML = "Toyota North America connected with Westpoint to help with the build and deploy of an identity Access management Project. Although still underway and in full flow, the project has had significant victories so far. Our dedicated team for this Project have been utilising their extensive DevOps knowledge along with Specific Identity providers such as Forgerock and OAuth to make serious ground in a high security project."
}
function div3_para() {
    document.getElementById("belron").style.backgroundColor = "#fff";
    document.getElementById("toyota").style.backgroundColor = "#fff";
    document.getElementById("validus").style.backgroundColor = "#f5f5f5";
    document.getElementById("collums").style.backgroundColor = "#fff";
    document.getElementById("pb1").innerHTML = "Existing legacy systems are limited to how they can scale and what they can do for their end client. In the case of Belron a forward thinking plan was needed to implement AWS serverless into various aspects of their giant organisation. Westpoint put together a robust architecture plan which would allow for ease of scaling and cost savings using many various AWS micro services. Our Goal with Belron was a united one, we wanted to create a cost saving solution which could scale on demand and scale infinitely.";
    document.getElementById("pb2").innerHTML = "Based on AWS serverless services like API Gateway, Lambda, DynamoDB and Glue. Using API Gateway and Lambda we provided some endpoints that Belron could use to configure the system, and since Belron have business units across the world, these settings are applied only for the country the user is registered. Using only one endpoint, we could provide them the logic needed to automate a part of the work from business units, this endpoint registers data about the call in a DynamoDB table. The other side of the application is the analytics, where we use AWS Glue to automate the process of exporting data from a DynamoDB table to a Glue Database without the time overheads to manage migration or backup scripts. After that an Apache Spark job is triggered to generate analytics from the data in the Glue Database, in the end saving this data to a S3 Bucket and later querying all of this analytics using AWS Athena.";
    document.getElementById("pb3").innerHTML = "To build this project, Westpoint selected some of the best technologies available in the market. They are: AWS as the cloud environment, in which microservices such as Amazon API Gateway, AWS Lambda Functions and Layers, AWS Glue, Amazon DynamoDB and Amazon S3. Python as the main programming language for the application, used from AWS Lambdas to AWS Glue jobs. And Apache Spark was used inside AWS Glue Jobs to perform data analytics on the incoming data.";
    document.getElementById("pb4").innerHTML = "Validus is a leading independent financial services firm, had been spending most of their development resources maintaining the numerous advanced applications running within their business. Always wanting to be ahead of the their competitors, increasing their rate of productivity during and after application development process was deemed crucial. Westpoint solved this by providing Validus with a state of the art Serverless stack that was thought out end to end, becoming the  basis of most future development at Validus"
}
function div4_para() {
    document.getElementById("belron").style.backgroundColor = "#fff";
    document.getElementById("toyota").style.backgroundColor = "#fff";
    document.getElementById("validus").style.backgroundColor = "#fff";
    document.getElementById("collums").style.backgroundColor = "#f5f5f5";
    document.getElementById("pb1").innerHTML = "Collums is a robust, modularized application where each sub-application covers a specific aspect of the business. It serves both clinic staff members and end clients throughout the whole journey, starting with the client booking an appointment online, going through the treatment process accepting payment. Complementary functionalities such as report generation and customer marketing campaigns notification helps to give users a complete user experience.";
    document.getElementById("pb2").innerHTML = "Our challenge was to improve the app structure while adding news features without compromising existing architecture and avoiding downtime., Our team used cross functional expertises, such as ReactJS, AWS and NodeJS. The result was an application which was flexible and multifunctional. The project is currently live";
    document.getElementById("pb3").innerHTML = "To build this project, Westpoint selected some of the best technologies available in the market. They are: AWS EC2 with ELB to host a nodeJS API, Amazon SES as our main email sending tool, Route53 to create our SSL certificates, CloudFront to host several Collums apps with SSL certificates and cache, and ReactJS to build Collums’s frontend apps.";
    document.getElementById("pb4").innerHTML = " An award winning nationwide UK clinic tasked Westpoint to build an online booking application for skin treatments that includes functionalities such as appointment management, payment system, reports generation and marketing campaign notifications. This application was designed to be used in multiple clinics across Europe and North America to provide employees and clients a smooth and straightforward workflow."
}
