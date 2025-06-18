
let shopboxs = document.querySelector(".shopbox1");
let shopboxs2 = document.querySelector(".shopbox2");
let shopboxs3= document.querySelector(".shopbox3");
let shopboxs4 = document.querySelector(".shopbox4");
let shopboxs5 = document.querySelector(".shopbox5");
let shopboxs6 = document.querySelector(".shopbox6");
let herosection = document.querySelector(".herosection");
let shops = document.querySelector(".shops");
let girlsshops=document.querySelector(".girlsshops")
let body = document.querySelector("body");
let shopsbutton=document.querySelectorAll(".shopsbutton")
let blogs=document.querySelector(".blogs")
let footer=document.querySelector('.footer')


shopboxs.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
footer.style.display="none"
    // Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


    // Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('shoppers stop.jpg')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"

// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"

let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$11";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"

let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    shopboxs.style.display="block"
    girlsshops.style.display = "block";
    
})




});
shopboxs2.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
    footer.style.display="none"


// Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


    // Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('tshirt.png')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"

// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"

let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$9";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"

let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    shopboxs.style.display="block"
    girlsshops.style.display = "block";
    
})




});
shopboxs3.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
    footer.style.display="none"

    // Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


// Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('jeans.png')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"

// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"

let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$15";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"

let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    shopboxs.style.display="block"
    girlsshops.style.display = "block";
    
})




});
shopboxs4.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
    footer.style.display="none"

    // Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


    // Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('girlstshirt.png')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"


// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"

let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$10";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"

let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    girlsshops.style.display="block"
    shopboxs.style.display="block"
    
})




});
shopboxs5.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
    footer.style.display="none"

    // Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


    // Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('kurti.png')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"

// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"


let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$12";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"

let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    girlsshops.style.display="block"
    shopboxs.style.display="block"
    
})




});
shopboxs6.addEventListener("click", function() {
    // Hide sections
    herosection.style.display = "none";
    shops.style.display = "none";
    girlsshops.style.display = "none";
    blogs.style.display="none"
    footer.style.display="none"

    // Create main div
    let maindiv = document.createElement("div");
    body.appendChild(maindiv);
    maindiv.style.height = "550px";
    maindiv.style.width = "100%";
    
    maindiv.style.marginTop = "100px";
    maindiv.style.display = "flex";


    // Create divleft
    let divleft = document.createElement("div"); // Create a new div
    maindiv.appendChild(divleft);
    divleft.style.height = "550px";
    divleft.style.width = "50%";
    
    divleft.style.marginTop = "100px";
    //divleft image
    let divleftimage=document.createElement("div");
    divleft.appendChild(divleftimage);
    divleftimage.style.height="390px"
    divleftimage.style.width="400px"
    divleftimage.style.backgroundColor="gray"
    divleftimage.style.marginTop="20px"
    divleftimage.style.backgroundImage="url('tops.png')"
    divleftimage.style.backgroundSize="cover"
divleftimage.style.position="fixed";
divleftimage.style.marginLeft="190px"
divleftimage.style.borderRadius="20px"

// Create divright
let divright = document.createElement("div"); // Create a new div
maindiv.appendChild(divright);
divright.style.height = "550px";
divright.style.width = "50%";
let divRightText=document.createElement("div");
    divright.appendChild(divRightText);
    divRightText.style.height="390px"
    divRightText.style.width="450px"
    divRightText.style.position="fixed"
    divRightText.style.marginTop="140px"

let h1=document.createElement('h1')
divRightText.appendChild(h1)

h1.innerText='Shoply Offer: Trending Shop Now'
h1.style.fontSize="35px"
h1.style.paddingTop="10px"

let h3=document.createElement('h3')
divRightText.appendChild(h3)
h3.innerText="Special Price";
h3.style.fontWeight="400px"
h3.style.fontSize="25px"
h3.style.paddingTop="10px"
let h2=document.createElement('h2')
divRightText.appendChild(h2)
h2.innerText="$10";
h2.style.fontWeight="400px"
h2.style.fontSize="25px"
h2.style.paddingTop="10px"


let p=document.createElement('p')
divRightText.appendChild(p)
p.innerText="Get 20% off on your first purchase";
p.style.fontWeight="300px"
p.style.paddingTop="10px"
let button=document.createElement('button')
divRightText.appendChild(button);
button.innerText="Back"
button.style.height="50px"
button.style.width="150px"
button.style.border="none"
button.style.backgroundColor="sienna"
button.style.marginTop="20px"
button.style.borderRadius="20px"
button.style.color="white"
button.style.fontSize="20px"
let button2=document.createElement('button')
divRightText.appendChild(button2);
button2.innerText="Add to Cart"
button2.style.height="50px"
button2.style.width="150px"
button2.style.border="none"
button2.style.backgroundColor="sienna"
button2.style.marginTop="20px"
button2.style.marginLeft="20px"
button2.style.borderRadius="20px"
button2.style.color="white"
button2.style.fontSize="20px"
button.addEventListener('click',function(){
    herosection.style.display="flex";
    shops.style.display="block"
    girlsshops.style.display="block"
    shopboxs.style.display="block"
    
})




});
shopsbutton.addEventListener("mouseover",function(){
    alert("added to item");
})
button.addEventListener('click', function() {
    // Reset visibility of all required sections
    herosection.style.display = "flex";
    shops.style.display = "block";
    shopboxs.style.display = "block";
    girlsshops.style.display = "block";

    // Scroll back to the top to make sure everything is visible
    window.scrollTo(0, 0);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        
            document.querySelectorAll('a[href^="#"]').forEach(nav => {
                nav.style.color = "initial"; // Use 'initial' to reset to default CSS color
            });
            
         
        })
        this.style.color="sienna";
    })

