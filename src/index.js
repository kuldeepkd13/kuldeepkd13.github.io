var typeData = new Typed(".role", {
    strings: [
      "Full Stack Web Developer",
      "NodeJs Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });



  const menuBtn = document.querySelector("#menu-icon-btn");
  const sidebarMenu = document.querySelector("#sidebar-menu");
  const closeBtn = document.querySelector("#close-icon");

  menuBtn.addEventListener("click", () => {
    sidebarMenu.style.right = '0px';
  });

  closeBtn.addEventListener("click", () => {
    sidebarMenu.style.right = '-250px';
  });

  GitHubCalendar(".calendar", "kuldeepkd13");
  GitHubCalendar(".calendar", "kuldeepkd13", { responsive: true });