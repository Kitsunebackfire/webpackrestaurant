import { homeContent } from './home'
import { menuContent } from './menu'
import { contactContent } from './contact'


function pageLoad() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    // content Functions to add to content div

    /// restaurant name /// 
    let divName = document.createElement("div");
    divName.textContent = "El Restaurante";
    divName.classList.add('name');
    content.appendChild(divName);

    /// nav bar control ///
    let divNavBar = document.createElement("div");
    divNavBar.classList.add('navBar');
    let homeBtn = document.createElement("span");
    homeBtn.classList.add('navBtn');
    homeBtn.setAttribute("id", 'homeBtn');
    homeBtn.innerText = "Home";
    divNavBar.appendChild(homeBtn);
    let menuBtn = document.createElement("span");
    menuBtn.classList.add('navBtn');
    menuBtn.setAttribute("id", 'menuBtn');
    menuBtn.innerText = "Menu";
    divNavBar.appendChild(menuBtn);
    let contactBtn = document.createElement("span");
    contactBtn.classList.add("navBtn");
    contactBtn.setAttribute("id", 'contactBtn');
    contactBtn.innerText = "Contact";
    divNavBar.appendChild(contactBtn);
    content.appendChild(divNavBar);


    /// where content from pages go ////
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'contentDiv');
    contentDiv.setAttribute('class', 'mainContent');
    content.appendChild(contentDiv);



    homeBtn.addEventListener('click', homeContent);
    menuBtn.addEventListener('click', menuContent);
    contactBtn.addEventListener('click', contactContent);

    homeContent();



}
pageLoad();