function myfunction()
            {
                var un = document.forms["myform"]["uname"].value;
                var pw = document.forms["myform"]["pass"].value;
                if(un=="Admin" && pw=="1234")
                {
                    window.location.href="Welcome/index.html";
                }
                else
                {
                    alert("invalid username and password");
                }

            } 
            let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
