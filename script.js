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
        window.location.href = "/dashboard/index.html";
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

  document.addEventListener("DOMContentLoaded", function() {
    var scrollBtn = document.getElementById("scrollBtn");
    var targetDiv = document.getElementById("targetDiv");

    scrollBtn.addEventListener("click", function() {
        // Tính toán vị trí y của targetDiv
        var targetY = targetDiv.getBoundingClientRect().top + window.pageYOffset;

        // Tính toán khoảng cách để căn giữa theo trục y
        var offsetY = targetY - ((window.innerHeight - targetDiv.offsetHeight) / 2);

        // Cuộn đến vị trí của targetDiv với căn giữa theo trục y
        window.scrollTo({ top: offsetY, behavior: 'smooth' });
    });
});


const options = document.querySelectorAll('input[type="radio"]');
const optionContents = document.querySelectorAll('.option-content');

options.forEach((option, index) => {
  option.addEventListener('change', () => {
    optionContents.forEach(content => {
      content.classList.remove('show');
    });
    optionContents[index].classList.add('show');
  });
});
