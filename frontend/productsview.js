

let url = "http://localhost:4500/products/homelaptops"
async function fetchData() {
    try {
        let fetchedData = await fetch(
            "http://localhost:4500/products/homelaptops/inspiron"
        );
        let data = await fetchedData.json();
        console.log(data)
        display(data)
        document.querySelector("#sorting").addEventListener("change", function (){
            let selected = document.querySelector("#sorting").value;
            
            if(selected=="low")
            {
                data.sort((a,b)=>{
                return a.price -b.price
               })
               display(data);
            }
            else if(selected=="high")
            {
                data.sort((a,b)=>{
                return b.price -a.price
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
        div.setAttribute("class", "container")
        let imagediv = document.createElement("div");
        let pricediv = document.createElement("div");
        let off = document.createElement("p");
        off.innerText = "₹2500 OFF | FREE SHIPPINGs";
        let online = document.createElement("p");
        online.innerText = "Online Price: ₹ " + elem.onlineprice;
        let price = document.createElement("p");
        price.innerHTML = `<b>Price:</b>  ₹`+elem.price;
        let dat = document.createElement("p");
        dat.innerText = "Price inclusive of GST. Free Delivery.";
        let del = document.createElement("p");
        del.innerText = "Usually delivered in 2-4 days";
        let e = document.createElement("p");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let infodiv = document.createElement("div");
        let title = document.createElement("h3");
        title.innerText = elem.title;
        let order_code = document.createElement("p");
        order_code.innerText = "Order Code: d560918win9s";
        let Processor = document.createElement("p");
        Processor.innerHTML = `<b>Processor:</b>` + elem.Processor
        let OS = document.createElement("p");
        OS.innerHTML = `<b>OS:</b>` + elem.OS
        let Graphics = document.createElement("p");
        Graphics.innerHTML = `<b>Graphics:</b>` + elem.Graphics;
        let Memory = document.createElement("p");
        Memory.innerHTML = `<b>Memory:</b>` + elem.Memory;
        let Storage = document.createElement("p");
        Storage.innerHTML = `<b>Storage:</b>` + elem.Storage;
        let Display = document.createElement("p");
        Display.innerHTML = `<b>Display:</b>` + elem.Display;

        infodiv.append(title, order_code, Processor, OS, Graphics, Memory, Storage, Display);
        imagediv.append(image)
        div.append(imagediv, infodiv, pricediv)
        pricediv.append(off, online, price, dat, del, e)

        let div1 = document.createElement("div");
        div1.append(div)
        document.querySelector("#render").append(div1)

    })
}




function homechecked() {
    var checkBox = document.getElementById("home");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "http://localhost:4500/products/homelaptops/"
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

function businesschecked(){
    var checkBox = document.getElementById("business");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "http://localhost:4500/products/businesslaptops/"
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

function inspironchecked(){
    var checkBox = document.getElementById("inspiron");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "http://localhost:4500/products/homelaptops/inspiron"
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

function vostrochecked(){
    var checkBox = document.getElementById("vostro");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "http://localhost:4500/products/homelaptops/vostro"
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

function xpschecked(){
    var checkBox = document.getElementById("xps");
    if (checkBox.checked == true) {
        async function fetchData() {
            try {
                let fetchedData = await fetch(
                    "http://localhost:4500/products/homelaptops/xps"
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

