
// <!-- Google Tag Manager -->
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-PLCX63C');
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager -->
(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-5TBSXSD');
// <!-- End Google Tag Manager -->




// Get the current page URL
var currentUrl = window.location.href;

// Define meta tags for each page
var metaTags = {
  "index.html": {
    keywords: "Medalert Life, ambulance, medical emergency, diagnostic services, medical treatment, emergency care, surgery, rehabilitation",
    description: "Medalert Life provides fast and reliable ambulance services, diagnostic services, and medical treatments for medical emergencies. Our team is available 24/7 to ensure you receive the medical care you need."
  },
  "health.html": {
    keywords: "health, wellness, nutrition, fitness, mental health",
    description: "Take control of your health and wellness. Get the latest information on nutrition, fitness, and mental health. Discover a healthier you today."
  },
  "blog.html": {
    keywords: "personal blog, lifestyle, fashion, food, travel",
    description: "Join me on my journey. Read about my experiences, thoughts, and tips on fashion, food, travel, and lifestyle. Welcome to my personal blog."
  },
  "travel.html": {
    keywords: "travel, adventure, holidays, destinations, attractions",
    description: "Discover the world with us. Explore exciting destinations, go on adventure holidays, and experience new attractions. Start planning your next trip today."
  },
  "shop.html": {
    keywords: "online shopping, fashion, electronics, home appliances, gifts",
    description: "Get the latest fashion, electronics, and home appliances at unbeatable prices. Shop now and enjoy fast and convenient delivery to your doorstep."
  }
};

// Update the meta tags based on the current page
if (currentUrl in metaTags) {
  document.querySelector('meta[name="keywords"]').setAttribute("content", metaTags[currentUrl].keywords);
  document.querySelector('meta[name="description"]').setAttribute("content", metaTags[currentUrl].description);
}





var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var p4 = document.querySelector(".p4");
var p5 = document.querySelector(".p5");

let count1 = 0;
var loop1 = p1.innerText;
setInterval(() => {

    if (count1 < loop1) {
        count1++;
        p1.innerText = count1
    }
}, 50)
let count2 = 0;
var loop2 = p2.innerText;
setInterval(() => {

    if (count2 < loop2) {
        count2++;
        p2.innerText = count2
    }
}, 50)
let count3 = 0;
var loop3 = p3.innerText;
setInterval(() => {

    if (count3 < loop3) {
        count3++;
        p3.innerText = count3
    }
}, 50)
let count4 = 0;
var loop4 = p4.innerText;
setInterval(() => {

    if (count4 < loop4) {
        count4++;
        p4.innerText = count4
    }
}, 50)
let count5 = 0;
var loop5 = p5.innerText;
setInterval(() => {

    if (count5 < loop5) {
        count5++;
        p5.innerText = count5
    }
}, 50)

// const leftbtn=document.querySelector("#prev");
// const rightbtn=document.querySelector("#next");
// rightbtn.addEventListener("click",function (event) {
//     // ////console.log("here");
//     const conent=document.querySelector(".carousel-inner");
//     conent.scrollLeft+=1100;
//     event.preventDefault();
// })
// leftbtn.addEventListener("click",function (event) {
//     // ////console.log("here");
//     const conent=document.querySelector(".carousel-inner");
//     conent.scrollLeft-=1100;
//     event.preventDefault();
// })



let hasClass = (arr) => {
    for (let i = 0; i < arr.length; i++)if (arr[i] == 'active') return true;
    return false;
}
const func = () => {
    let x = document.getElementById('Carousel-main');
    // ////console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        sClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        fClass.add('active')
    }
}

setInterval(() => {
    func()
}, 10000);

const handleClick = (e) => {
    let x = document.getElementById('Carousel-main');
    // ////console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        sClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        fClass.add('active')
    }
}
const handleClick1 = (e) => {
    let x = document.getElementById('Carousel-main');
    // ////console.log(x)
    let first = document.getElementById('itt-1')
    let second = document.getElementById('itt-2');
    let third = document.getElementById('itt-3');
    let fClass = first.classList;
    let sClass = second.classList;
    let tClass = third.classList;
    if (hasClass(fClass)) {
        fClass.remove('active')
        tClass.add('active')
    }
    else if (hasClass(sClass)) {
        sClass.remove('active')
        fClass.add('active')
    }
    else if (hasClass(tClass)) {
        tClass.remove('active')
        sClass.add('active')
    }
};



$("#submit").click(function () {
    var address = $("#address").val();
    var name = $("#name").val();
    var contact = $("#number").val();
    var ambulance = $("select[name='ambulance']").val();

    var message = "Address: " + address + "\n" +
      "Name: " + name + "\n" +
      "Contact: " + contact + "\n" +
      "Ambulance type: " + ambulance;

    window.location.href = "https://wa.me/+919752625048?text=" + encodeURIComponent(message);
  });

//           document.querySelector("#submit").click(function () {
//   var address = document.querySelector("#address").val();
//   var name = document.querySelector("#name").val();
//   var contact = document.querySelector("#number").val();
//   var ambulance = document.querySelector("select[name='ambulance']").val();

//   var message = "Address: " + address + "\n" +
//                 "Name: " + name + "\n" +
//                 "Contact: " + contact + "\n" +
//                 "Ambulance type: " + ambulance;

//   var phone_number = "+919752625048"; 

//   var whatsapp_url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);

//   window.open(whatsapp_url, '_blank');
// });



    // $(document).ready(function () {
    //   $(".navbar-toggler").click(function () {
    //     $(".navbar-nav").css("display", "grid");
    //     $(".navbar-toggler-icon").css({ "backgroundImage": "url(https://cdn-icons-png.flaticon.com/512/2976/2976286.png)" });
    //     // $(".navbar-toggler-icon").removeAttr("style");
    //   })


    // });
    
    $(document).ready(function() {
        $(".navbar-toggler").click(function() {
          $("#navbarNavDropdown ul").toggleClass("d-flex , position-relative , top-0 , left-0");
        });
      });
      
      var verificationCode = $('meta[name="google-site-verification"]').attr('content');
////console.log(verificationCode); // Output: wgeWV4xdEetKEkkXdkEIS-2byNi0kNdzyy5HRHW8jMg

      
$(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 40) {

      $(".navbar-nav").removeAttr("style");
      $(".navbar-toggler-icon").removeAttr("style");
      $("#action-buts").removeAttr("style");
      $(".container").css("display", "block");
    }
  }
  )

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader-container");
    loader.style.display = "none";
  });


  
      // console.clear();
function logAndClear(message) {
    console.clear();
    ////console.log(message);
  }
  
  logAndClear("Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.Do not enter or paste code that you do not understand.");

  
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", function () {
      card.style.backgroundColor = "#e6e6e6";
    });
    card.addEventListener("mouseleave", function () {
      card.style.backgroundColor = "white";
    });
  });
  alert("hello")