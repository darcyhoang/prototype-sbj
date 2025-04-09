document.addEventListener("DOMContentLoaded", function () {
  // Get button element
  const changeColorBtn = document.getElementById("changeColorBtn");
  const container = document.querySelector(".container");

  // Array of background colors to cycle through
  const colors = [
    "#ffffff", // White (default)
    "#f8f8e8", // Light yellow
    "#e8f8f8", // Light blue
    "#f8e8f8", // Light purple
    "#e8f8e8", // Light green
  ];

  let colorIndex = 0;

  // Add click event listener to button
  if (changeColorBtn) {
    changeColorBtn.addEventListener("click", function () {
      // Change to next color
      colorIndex = (colorIndex + 1) % colors.length;
      container.style.backgroundColor = colors[colorIndex];

      // Display a message
      console.log("Color changed to: " + colors[colorIndex]);
    });
  }

  // Function to create and insert navigation elements
  function createNavigation() {
    // Create Menu Button
    const menuBtn = document.createElement("button");
    menuBtn.className = "menu-btn";
    menuBtn.id = "menuBtn";
    menuBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path id="Path_163634" data-name="Path 163634" d="M7,2.5a1.631,1.631,0,0,0-.437-1.062A1.631,1.631,0,0,0,5.5,1h-3a1.631,1.631,0,0,0-1.062.438A1.631,1.631,0,0,0,1,2.5v3a1.631,1.631,0,0,0,.438,1.063A1.631,1.631,0,0,0,2.5,7h3a1.631,1.631,0,0,0,1.063-.437A1.631,1.631,0,0,0,7,5.5Zm0,8a1.631,1.631,0,0,0-.437-1.062A1.631,1.631,0,0,0,5.5,9h-3a1.631,1.631,0,0,0-1.062.438A1.631,1.631,0,0,0,1,10.5v3a1.631,1.631,0,0,0,.438,1.063A1.631,1.631,0,0,0,2.5,15h3a1.631,1.631,0,0,0,1.063-.437A1.631,1.631,0,0,0,7,13.5Zm2-8v3a1.631,1.631,0,0,0,.438,1.063A1.631,1.631,0,0,0,10.5,7h3a1.631,1.631,0,0,0,1.063-.437A1.631,1.631,0,0,0,15,5.5v-3a1.631,1.631,0,0,0-.437-1.062A1.631,1.631,0,0,0,13.5,1h-3a1.631,1.631,0,0,0-1.062.438A1.631,1.631,0,0,0,9,2.5Zm6,8A1.494,1.494,0,0,0,13.5,9h-3A1.494,1.494,0,0,0,9,10.5v3A1.494,1.494,0,0,0,10.5,15h3A1.494,1.494,0,0,0,15,13.5Z" transform="translate(-1 -1)" fill="#fff"/>
      </svg>
    `;

    // Create Navigation Overlay
    const navOverlay = document.createElement("div");
    navOverlay.className = "nav-overlay";
    navOverlay.id = "navOverlay";
    navOverlay.innerHTML = `
      <ul>
        <li><a href="index.html">Trang Chủ</a></li>
        <li><a href="chi-tiet-san-pham.html">Sản Phẩm</a></li>
        <li><a href="gioi-thieu.html">Giới Thiệu</a></li>
        <li><a href="danh-sach-cua-hang.html">Cửa Hàng</a></li>        
        <li><a href="lien-he.html">Liên Hệ</a></li>
      </ul>
    `;

    // Append elements to the body
    document.body.appendChild(menuBtn);
    document.body.appendChild(navOverlay);

    // Setup event listeners for the menu
    menuBtn.addEventListener("click", function () {
      navOverlay.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !menuBtn.contains(event.target) &&
        !navOverlay.contains(event.target)
      ) {
        navOverlay.classList.remove("active");
      }
    });
  }

  // Create the navigation on page load
  createNavigation();

  // Display welcome message in console
  console.log("Welcome to the Simple HTML Project!");
});
