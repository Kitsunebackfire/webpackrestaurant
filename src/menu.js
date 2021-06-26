export function menuContent() {
    contentDiv.innerHTML = "";
    /// nav bar underline control ///
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "underline";
    contactBtn.style.textDecoration = "none";
    /////////////main container
    let divMenuContent = document.createElement('div');
    divMenuContent.classList.add('menuContent');

    //////////// menu rows
    ////////// Card 1 in card row 1 ////////////
    let cardRow = document.createElement('div');
    cardRow.classList.add("cardRow");


    let card = document.createElement('div');
    card.classList.add("card");
    cardRow.appendChild(card);

    let foodImg = document.createElement('img');
    foodImg.src = "https://i.redd.it/biqtkbuavrf21.png";
    foodImg.setAttribute('class', 'menuImages');
    card.appendChild(foodImg);

    let foodName = document.createElement('h4');
    foodName.innerHTML = "<b>Tacos</b>";
    card.appendChild(foodName);

    let foodDescription = document.createElement('p');
    foodDescription.classList.add("foodDescription");
    foodDescription.innerText = "Tacos with mexicano food and stuff";
    card.appendChild(foodDescription);
    /////////// Card 2 in card row 1 ///////////////
    let card2 = document.createElement('div');
    card2.classList.add("card");

    let foodImg2 = document.createElement('img');
    foodImg2.setAttribute('class', 'menuImages');
    foodImg2.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200318-seo-how-to-cook-beans-horizontal-final-14288-eb-1585337558.jpg?crop=0.6668421052631579xw:1xh;center,top&resize=480:*";
    card2.appendChild(foodImg2);

    let foodName2 = document.createElement('h4');
    foodName2.innerHTML = "<b>Beans</b>";
    card2.appendChild(foodName2);

    let foodDescription2 = document.createElement('p');
    foodDescription2.innerText = "beans bruh!";
    card2.appendChild(foodDescription2);
    cardRow.appendChild(card2);

    divMenuContent.appendChild(cardRow);

    contentDiv.appendChild(divMenuContent);
};