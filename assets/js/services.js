function dynamic_div_selection() {
    let url = window.location.href;
    switch (url.split("#")[1]) {
        case "staff_augmentation":
            div1_para()
            break;
        case "serverless_software_development":
            div2_para()
            break;
        case "identity_access_management_solutions":
            div3_para()
            break;
        case "microservices_big_data":
            div4_para()
            break;
    }
}

window.onload = dynamic_div_selection

function div1_para()
{
document.getElementById("staff_augmentation").style.backgroundColor = "#f5f5f5";
document.getElementById("serverless_software_development").style.backgroundColor = "#fff";
document.getElementById("identity_access_management_solutions").style.backgroundColor = "#fff";
document.getElementById("microservices_big_data").style.backgroundColor = "#fff";
document.getElementById("ph1").innerHTML = "How do we approach";
document.getElementById("pb1").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la borum.<";
document.getElementById("ph2").innerHTML = "How we build";
document.getElementById("pb2").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pari atur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la borum.";
}
function div2_para()
{
document.getElementById("staff_augmentation").style.backgroundColor = "#fff";
document.getElementById("serverless_software_development").style.backgroundColor = "#f5f5f5";
document.getElementById("identity_access_management_solutions").style.backgroundColor = "#fff";
document.getElementById("microservices_big_data").style.backgroundColor = "#fff";
document.getElementById("ph1").innerHTML = "How do we approach";
document.getElementById("pb1").innerHTML = "serverless_software_development-body1";
document.getElementById("ph2").innerHTML = "How we build";
document.getElementById("pb2").innerHTML = "serverless_software_development-body2";
}
function div3_para()
{
document.getElementById("staff_augmentation").style.backgroundColor = "#fff";
document.getElementById("serverless_software_development").style.backgroundColor = "#fff";
document.getElementById("identity_access_management_solutions").style.backgroundColor = "#f5f5f5";
document.getElementById("microservices_big_data").style.backgroundColor = "#fff";
document.getElementById("ph1").innerHTML = "How do we approach";
document.getElementById("pb1").innerHTML = "identity_access_management_solutions-body1";
document.getElementById("ph2").innerHTML = "How we build";
document.getElementById("pb2").innerHTML = "identity_access_management_solutions-body2";
}
function div4_para()
{
document.getElementById("staff_augmentation").style.backgroundColor = "#fff";
document.getElementById("serverless_software_development").style.backgroundColor = "#fff";
document.getElementById("identity_access_management_solutions").style.backgroundColor = "#fff";
document.getElementById("microservices_big_data").style.backgroundColor = "#f5f5f5";
document.getElementById("ph1").innerHTML = "How do we approach";
document.getElementById("pb1").innerHTML = "microservices_big_data-body1";
document.getElementById("ph2").innerHTML = "How we build";
document.getElementById("pb2").innerHTML = "microservices_big_data-body2";
}
function specific_div()
{
document.getElementById('cases').scrollIntoView();
}
