const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2019"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
logo.addEventListener("click", myFunction);
function myFunction() {
  let logoFun = document.getElementById(this.id);
  logoFun.style.backgroundColor = "green";
}

// Nav section
let navigation = document.querySelectorAll("a");
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];
//Change nav links to green
navigation.forEach(navLink => {
  navLink.style.color = "green";
});
// Call to action section
let cta_h1 = document.querySelector("h1");
cta_h1.textContent = siteContent.cta["h1"];
let btn = document.querySelector("button");
let btnText = document.createTextNode(siteContent["cta"]["button"]);
btn.appendChild(btnText);
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);
// Main section -- headers
let headers = document.querySelectorAll("h4");
headers.forEach(head => {
  head.style.color = "green";
});
headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
headers[5].textContent = siteContent["contact"]["contact-h4"];
// Main section -- paragraphs
let para = document.querySelectorAll("p");
para.forEach(paragraph => {
  paragraph.style.color = "dodgerblue";
});
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];
para[5].textContent = siteContent["contact"]["address"];
para[6].textContent = siteContent["contact"]["phone"];
para[7].textContent = siteContent["contact"]["email"];
para[8].textContent = siteContent["footer"]["copyright"];
// Main section -- image
let mainImage = document.getElementById("middle-img");
mainImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

mainImage.addEventListener("click", secondFunction);
function secondFunction() {
  let noImage = document.getElementById(this.id);
  noImage.style.display = "none";
}

//New Link Items
let nav = document.querySelector("nav");

let newLinks = ["Sign In", "Sign Out"];
newLinks.forEach(links => {
  let newItems = document.createElement("a");
  nav.appendChild(newItems);
  newItems.textContent = links;
  newItems.style.textDecoration = "none";
  newItems.style.color = "steelblue";
});
