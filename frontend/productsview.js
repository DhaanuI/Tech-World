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
    window.location.href="./index.html"

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



let url = "https://alive-plum-capybara.cyclic.app/products/homelaptops"
async function fetchData() {
    try {
        let fetchedData = await fetch(
            "https://alive-plum-capybara.cyclic.app/products/homelaptops/inspiron"
        );
        let data = await fetchedData.json();
        //console.log(data)
        display(data)
        document.querySelector("#sorting").addEventListener("change", function () {
            let selected = document.querySelector("#sorting").value;

            if (selected == "low") {
                data.sort((a, b) => {
                    return a.price - b.price
                })
                display(data);
            }
            else if (selected == "high") {
                data.sort((a, b) => {
                    return b.price - a.price
                })
                display(data);
            }
            else display(data)
        })
        //display(data);
    } catch (err) {
        alert("something went wrong");
    }
}
fetchData();

document.querySelector("#title").innerText = "Laptops & 2-in-1 PCs"
function display(data) {
    document.querySelector("#render").innerHTML = "";

    data.forEach((elem, index) => {

        let div = document.createElement("div");
        div.setAttribute("id", index)
        //div.setAttribute("onclick",clickme())
        let imagediv = document.createElement("div");
        let pricediv = document.createElement("div");
        let off = document.createElement("p");
        off.innerText = "₹2500 OFF | FREE SHIPPINGs";
        let online = document.createElement("p");
        online.innerText = "Online Price: ₹ " + elem.onlineprice;
        online.setAttribute("id", "product" + index + "online");
        let price = document.createElement("p");
        price.innerHTML = `<b>Price:</b>  ₹` + elem.price;
        price.setAttribute("id", "product" + index + "price");
        let dat = document.createElement("p");
        dat.innerText = "Price inclusive of GST. Free Delivery.";
        let del = document.createElement("p");
        del.innerText = "Usually delivered in 2-4 days";
        let e = document.createElement("p");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.setAttribute("id", elem._id);
        // image.setAttribute("id", "product"+i+"image");

        let infodiv = document.createElement("div");
        let title = document.createElement("h3");
        title.innerText = elem.title;
        let order_code = document.createElement("p");
        order_code.innerText = "Order Code: d560918win9s";
        let Processor = document.createElement("p");
        Processor.innerHTML = `<b>Processor:</b>` + elem.Processor
        Processor.setAttribute("id", "product" + index + "processor");

        let OS = document.createElement("p");
        OS.innerHTML = `<b>OS:</b>` + elem.OS
        OS.setAttribute("id", "product" + index + "os");

        let Graphics = document.createElement("p");
        Graphics.innerHTML = `<b>Graphics:</b>` + elem.Graphics;
        Graphics.setAttribute("id", "product" + index + "graphics");

        let Memory = document.createElement("p");
        Memory.innerHTML = `<b>Memory:</b>` + elem.Memory;
        Memory.setAttribute("id", "product" + index + "memory");

        let Storage = document.createElement("p");
        Storage.innerHTML = `<b>Storage:</b>` + elem.Storage;
        Storage.setAttribute("id", "product" + index + "storage");

        let Display = document.createElement("p");
        Display.innerHTML = `<b>Display:</b>` + elem.Display;

        infodiv.append(title, order_code, Processor, OS, Graphics, Memory, Storage, Display);
        imagediv.append(image)
        div.append(imagediv, infodiv, pricediv)
        pricediv.append(off, online, price, dat, del, e)

        let div1 = document.createElement("div");
        //div1.setAttribute("id", elem._id)
        div1.append(div)
        document.querySelector("#render").append(div1)

    })

    let a = document.querySelectorAll("#render>div");
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute("id", "product" + i);

    }





    let fun = document.querySelectorAll("#render>div");
    
    arr=[1]
    for (let i = 0; i < fun.length; i++) {
        fun[i].addEventListener("click", function (e) {
            
            
            
            image = document.querySelector("#product" + i + ">div>div>img").src;
            title = document.querySelector("#product" + i + " h3").innerText
            price = document.querySelector("#product" + i + "price").innerText
            online = document.querySelector("#product" + i + "online").innerText
            processor = document.querySelector("#product" + i + "processor").innerText
            memory = document.querySelector("#product" + i + "memory").innerText
            os = document.querySelector("#product" + i + "os").innerText
            storage = document.querySelector("#product" + i + "storage").innerText
            graphics = document.querySelector("#product" + i + "graphics").innerText
            quantity=1;
            userID=e.target.id

            // console.log(image)
            // console.log(name)
            // console.log(price, online, processor, memory, os, storage, graphics)
            let clickedobj={
                image,
                title,
                price,
                online, 
                processor, 
                memory, 
                os, 
                storage, 
                graphics,
                quantity,
                userID
            }

arr[0]=clickedobj

localStorage.setItem("clicked",JSON.stringify(arr))

window.location.href="./selectedproduct.html"

        });
    }

}






function homechecked() {
    var checkBox = document.getElementById("home");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "https://alive-plum-capybara.cyclic.app/products/homelaptops/"
                );
                let data = await fetchedData.json();
                console.log(data)
                display(data);
            } catch (err) {
                alert("something went wrong");
            }
        }
        fetchData();
    }
}

function businesschecked() {
    var checkBox = document.getElementById("business");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "https://alive-plum-capybara.cyclic.app/products/businesslaptops/"
                );
                let data = await fetchedData.json();
                console.log(data)
                display(data);
            } catch (err) {
                alert("something went wrong");
            }
        }
        fetchData();
    }
}

function inspironchecked() {
    var checkBox = document.getElementById("inspiron");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "https://alive-plum-capybara.cyclic.app/products/homelaptops/inspiron"
                );
                let data = await fetchedData.json();
                console.log(data)
                display(data);
            } catch (err) {
                alert("something went wrong");
            }
        }
        fetchData();
    }
}

function vostrochecked() {
    var checkBox = document.getElementById("vostro");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "https://alive-plum-capybara.cyclic.app/products/homelaptops/vostro"
                );
                let data = await fetchedData.json();
                console.log(data)
                display(data);
            } catch (err) {
                alert("something went wrong");
            }
        }
        fetchData();
    }
}

function xpschecked() {
    var checkBox = document.getElementById("xps");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "https://alive-plum-capybara.cyclic.app/products/homelaptops/xps"
                );
                let data = await fetchedData.json();
                console.log(data)
                display(data);
            } catch (err) {
                alert("something went wrong");
            }
        }
        fetchData();
    }
}

