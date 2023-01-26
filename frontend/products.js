
function gotoinspiron()
{
    window.location.href="./productsview.html"
}

function gotovostro()
{
    window.location.href="./vostroview.html"
}

function gotogseries()
{
    window.location.href="./gseriesview.html"
}

function gotoalienware()
{
    window.location.href="./alienwareview.html"
}

function gotoxps()
{
    window.location.href="./xpsview.html"
}

let name=localStorage.getItem("username");
console.log(name)

if(name)
{
    
document.getElementById("signin").innerText=name;

document.getElementById("dropdowntools").innerHTML="";

let button=document.createElement("button")
button.innerText="Log Out"
document.getElementById("dropdowntools").append(button)

button.addEventListener("click",()=>{
localStorage.removeItem("username");

document.getElementById("signin").innerText="Sign In";
document.getElementById("dropdowntools").innerHTML=`<h3 style="margin-top:-10px">Welcome to Tech World</h3>
                <p>My Account</p>
                <ul>
                    <li>Place orders quickly and easily</li>
                    <li>View orders and track your shipping status </li>
                    <li>Create and access a list of your products</li>
                </ul>

                <!-- <button style="background-color:rgb(0,118,206);color:white;border:0px">Sign In</button> <br> -->
                <button style="cursor:pointer;background-color:rgb(0,118,206);color:white;border:0px"><a style="text-decoration: none;color:white"
                    href="./signin.html">Sign In</a></button>
                    <button style="cursor:pointer;color:rgb(0,118,206);border:1px"><a style="text-decoration: none;;"
                        href="./signup.html">Create an account</a></button>
                <!-- <button>t</button><br> -->
                <button>Premier Sign In</button><br>
                <button>Partner Program</button><br>
`

})

}

else if(name==null){
document.getElementById("signin").innerText="Sign In";
}









