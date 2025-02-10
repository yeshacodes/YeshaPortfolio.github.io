/*function toggleSidebar() {
    console.log("Hamburger menu clicked!");
    document.querySelector(".sidebar").classList.toggle("open");
}*/

function toggleSidebar() {
    let sidebar = document.querySelector(".sidebar");
    let mainContent = document.querySelector(".main");

    sidebar.classList.toggle("open");
    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("open")) {
        localStorage.setItem("sidebarState", "open");
        mainContent.style.marginLeft = "250px";
        mainContent.style.width = "calc(100% - 250px)";
    } else {
        localStorage.setItem("sidebarState", "closed");
        mainContent.style.marginLeft = "0";
        mainContent.style.width = "100%";
    }
}

// Ensure Sidebar State Persists
document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let mainContent = document.querySelector(".main");
    let storedState = localStorage.getItem("sidebarState");

    if (storedState === "open") {
        sidebar.classList.add("open");
        sidebar.classList.remove("closed");
        mainContent.style.marginLeft = "250px";
        mainContent.style.width = "calc(100% - 250px)";
    } else {
        sidebar.classList.add("closed");
        sidebar.classList.remove("open");
        mainContent.style.marginLeft = "0";
        mainContent.style.width = "100%";
    }
});

function toggleReadMore(button) {
    var moreContent = button.nextElementSibling;
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        button.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        button.textContent = "Read More";
    }
}


