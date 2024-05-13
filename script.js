let slideIndex = 0;
let images = document.querySelectorAll(".image");
let slidesContainer = document.querySelector(".slides");
let pdfViewer = document.getElementById("pdf-viewer");
let pdfContainer = document.querySelector(".pdf-container");

images.forEach(function (image, index) {
  let slide = document.createElement("div");
  slide.className = "slide";

  if (image.dataset.type === "pdf") {
    slide.innerHTML = `<object type="application/pdf" data="${image.dataset.src}" width="100%" height="100%">
                         <p>Your browser does not support PDFs. <a href="${image.dataset.src}">Download the PDF</a> instead.</p>
                       </object>`;
    slide.classList.add("pdf-slide");
    slide.dataset.alt = image.dataset.alt;
  } else {
    slide.innerHTML = `<img src="${image.dataset.src}" alt="${image.dataset.alt}">`;
  }

  slidesContainer.appendChild(slide);

  image.addEventListener("click", function () {
    openLightbox();
    currentSlide(index);
  });
});

function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let pdfSlides = document.getElementsByClassName("pdf-slide");
  let currentSlide = slides[slideIndex];

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (currentSlide.classList.contains("pdf-slide")) {
    pdfViewer.data = currentSlide.querySelector("object").getAttribute("data");
    pdfContainer.style.display = "block";
  } else {
    pdfContainer.style.display = "none";
    currentSlide.style.display = "block";
  }
}

function login() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      var user = data.find(
        (u) =>
          u.email === email &&
          u.username === username &&
          u.password === password
      );
      if (user) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.href = "/Admin/index.html";
      } else if (password == "" && email == "" && username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your infomation";
      } else if (email == "") {
        document.getElementById("message").innerHTML =
          "Please enter your email";
      } else if (username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your username";
      } else if (password == "") {
        document.getElementById("message").innerHTML =
          "Please enter your password";
      } else {
        document.getElementById("message").innerHTML =
          "Invalid username or password.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

function signup() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Tạo dữ liệu mới để thêm vào JSON Server
  var newUser = {
    email: email,
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerHTML = "Sign up successful!";
      // Redirect or do something after successful sign up
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

fetch("/DataBase/database.json") // Đọc file JSON
  .then((response) => response.json())
  .then((data) => {
    // Chuyển đối tượng JSON thành chuỗi có định dạng để hiển thị
    const jsonContent = JSON.stringify(data, null, 2);

    // Hiển thị nội dung JSON trong phần tử <pre>
    document.getElementById("json-content").textContent = jsonContent;
  })
  .catch((error) => {
    console.error("Lỗi khi đọc file JSON:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  var scrollBtn = document.getElementById("scrollBtn");
  var targetDiv = document.getElementById("targetDiv");

  scrollBtn.addEventListener("click", function () {
    // Tính toán vị trí y của targetDiv
    var targetY = targetDiv.getBoundingClientRect().top + window.pageYOffset;

    // Tính toán khoảng cách để căn giữa theo trục y
    var offsetY = targetY - (window.innerHeight - targetDiv.offsetHeight) / 2 - 28;

    // Cuộn đến vị trí của targetDiv với căn giữa theo trục y
    window.scrollTo({ top: offsetY, behavior: "smooth" });
  });
});

const options = document.querySelectorAll('input[type="radio"]');
const optionContents = document.querySelectorAll(".option-content");

options.forEach((option, index) => {
  option.addEventListener("change", () => {
    optionContents.forEach((content) => {
      content.classList.remove("show");
    });
    optionContents[index].classList.add("show");
  });
});

console.log(options);

var currentPartIndex = 1;
var contentParts = document.querySelectorAll('.content-part');
var showMoreButton = document.getElementById('show-more-button');

showMoreButton.addEventListener('click', function() {
    if (currentPartIndex < contentParts.length) {
        contentParts[currentPartIndex].style.display = 'block';
        
        // Lấy tất cả các hình ảnh trong phần nội dung mới
        var imagesInNewContent = contentParts[currentPartIndex].querySelectorAll('.lazy-img');

        // Thêm lớp 'active' cho mỗi hình ảnh sau 1 giây
        setTimeout(function() {
            imagesInNewContent.forEach(function(image) {
                image.classList.add('active');
            });
        }, 100); // 1 giây (1000ms) delay

        currentPartIndex++;

        if (currentPartIndex === contentParts.length) {
            showMoreButton.textContent = 'No more content';
        }
    } else {
        alert('No more content available.');
    }
});





 function showbutton() {
  var hiddenContent = document.getElementById("hiddenContent");
  var product_active =document.getElementById("showButton");
  if  (product_active.classList.contains("a__hover")) {
    product_active.classList.remove("a__hover");
    product_active.classList.add("p_active_vip");
    hiddenContent.classList.remove("product_hidden_1");
    hiddenContent.classList.add("product_block_1");
  } 
  else if  (product_active.classList.contains("p_active_vip")) {
    product_active.classList.remove("p_active_vip");
    product_active.classList.add("a__hover");
    hiddenContent.classList.remove("product_block_1");
    hiddenContent.classList.add("product_hidden_1");
  } 
 
};

function show_profile() {
var show_menu_languages_ft = document.getElementById("languages_show");
 var show_menu_profiles = document.getElementById("profile_menu");
 if (show_menu_profiles.classList.contains("hidden_1")){
  show_menu_profiles.classList.remove("hidden_1");
  show_menu_profiles.classList.add("block_1");
  if (show_menu_languages_ft.classList.contains("block_1")){
    show_menu_languages_ft.classList.remove("block_1");
    show_menu_languages_ft.classList.add("hidden_1");
  }
 }
 else if (show_menu_profiles.classList.contains("block_1")){
  show_menu_profiles.classList.remove("block_1");
  show_menu_profiles.classList.add("hidden_1");

 }
} 


function show_menu_languages(){
  var show_menu_languages_ft = document.getElementById("languages_show");
 if (show_menu_languages_ft.classList.contains("hidden_1")){
  show_menu_languages_ft.classList.remove("hidden_1");
  show_menu_languages_ft.classList.add("block_1");
 }
 else if (show_menu_languages_ft.classList.contains("block_1")){
  show_menu_languages_ft.classList.remove("block_1");
  show_menu_languages_ft.classList.add("hidden_1");

 }
}


function show_menu_nav() {
  var menu_nav = document.getElementById("menu_nav")
  if(menu_nav.classList.contains("sm:hidden")){
    menu_nav.classList.remove("sm:hidden")
    menu_nav.classList.add("sm:flex-col")
    menu_nav.classList.add("sm:flex")
  }
  else if(menu_nav.classList.contains("sm:flex-col")){
    menu_nav.classList.remove("sm:flex-col")
    menu_nav.classList.remove("sm:flex")
    menu_nav.classList.add("sm:hidden")
  }
}
function show_image_preview() {
  var show_image_it = document.getElementById("show_image_it")
  if(show_image_it.classList.contains("hidden")){
    show_image_it.classList.remove("hidden")
    show_image_it.classList.add("block")
  }
  else if(show_image_it.classList.contains("block")){
    show_image_it.classList.remove("block")
    show_image_it.classList.add("hidden")
  }
}


function getValue() {
  var inputValue = document.getElementById('input_id').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/get_input_value', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Đã gửi giá trị thành công.');
      }
  };
  xhr.send(JSON.stringify({input_value: inputValue}));
}

console.log("Server VN")


function getValue() {
  var inputValue = document.getElementById('input_id').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/get_input_value', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Đã gửi giá trị thành công.');
      }
  };
  xhr.send(JSON.stringify({input_value: inputValue}));
}



function translateEnglishToVietnamese() {
    // Định nghĩa một bộ từ điển địa phương
    var dictionary = {
      "Home": "Trang chủ",
      "Pricing": "Giá",
      "Contact": "Liên hệ",
      // Thêm các cặp từ khác vào đây
  };

  // Hàm dịch văn bản từ tiếng Anh sang tiếng Việt
  function translateEnglishToVietnamese(text) {
      // Chia văn bản thành các từ
      var words = text.split(" ");
      // Duyệt qua từng từ
      for (var i = 0; i < words.length; i++) {
          // Nếu từ hiện tại có trong từ điển, thay thế bằng bản dịch
          if (dictionary.hasOwnProperty(words[i].toLowerCase())) {
              words[i] = dictionary[words[i].toLowerCase()];
          }
      }
      // Trả về văn bản đã dịch
      return words.join(" ");
  }

  // Hàm dịch văn bản trên trang web
  function translateTextOnPage() {
      var elements = document.querySelectorAll('*');
      elements.forEach(function(element) {
          if (element.nodeType === Node.TEXT_NODE && /[A-Za-z]/.test(element.nodeValue)) {
              var text = element.nodeValue.trim();
              if (text !== "") {
                  element.nodeValue = translateEnglishToVietnamese(text);
              }
          }
      });
  }

  window.onload = translateTextOnPage;
}


