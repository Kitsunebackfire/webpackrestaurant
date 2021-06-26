/// content display functions that go into content div /////
export function homeContent() {
    contentDiv.innerHTML = "";
    /// nav bar underline control ///
    homeBtn.style.textDecoration = "underline";
    menuBtn.style.textDecoration = "none";
    contactBtn.style.textDecoration = "none";

    //// content /////
    let divMainContent = document.createElement('div');
    divMainContent.setAttribute("class", "mainContent");

    let divDescription = document.createElement('div');
    divDescription.setAttribute("id", 'description');
    divDescription.innerText = "Fine Mexicano Dining-ero";
    divMainContent.appendChild(divDescription);

    let circleImg = document.createElement("img");
    circleImg.src = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/09/21/MW611_Molly-Making-Apple-Pie-Bars.JPG.rend.hgtvcom.616.462.suffix/1600782892905.jpeg";
    circleImg.setAttribute("id", 'imgCook');
    divMainContent.appendChild(circleImg);

    let divLowerDescription = document.createElement('div');
    divLowerDescription.setAttribute("id", 'description');
    divLowerDescription.innerText = "Order online or visit us today!";
    divMainContent.appendChild(divLowerDescription);

    contentDiv.appendChild(divMainContent);
};