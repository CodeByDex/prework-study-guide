const myimage = document.querySelector("img");

myimage.onclick = () => {
    const currentsrc = myimage.getAttribute("src");

    if (currentsrc === "assets/bowtie-cat.png") {
        myimage.setAttribute("src", "assets/Fineas.jpg");
    } else {
        myimage.setAttribute("src", "assets/bowtie-cat.png");
    }
}

const myheading = document.querySelector("h1");
const btnChangeUser = document.querySelector("button");

function SetUserName () {
    const userName = prompt("Please Enter your User Name");
    localStorage.setItem("name", userName);
    myheading.textContent = "Welcome " + localStorage.getItem("name");
}

if (!localStorage.getItem("name")) {
    SetUserName()
} else {
    myheading.textContent = "Welcome" + localStorage.getItem("name");
}

btnChangeUser.onclick = () => {
    SetUserName();
}