export function contactContent() {
    contentDiv.innerHTML = "";
    /// nav bar underline control ///
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "none";
    contactBtn.style.textDecoration = "underline";

    let contactDivContainer = document.createElement('div');
    contactDivContainer.classList.add("contactContent");

    let phoneNumber = document.createElement('div');
    phoneNumber.innerText = '817-123-4567';
    phoneNumber.classList.add('contactstuff')
    contactDivContainer.appendChild(phoneNumber);

    let addressStreet = document.createElement('div');
    addressStreet.innerText = "123 Burrito Way";
    addressStreet.setAttribute('class', 'contactstuff');
    contactDivContainer.appendChild(addressStreet);

    let addressCityState = document.createElement('div');
    addressCityState.innerText = "Fort Worth, Texas 76244";
    addressCityState.setAttribute('class', 'contactstuff');
    contactDivContainer.appendChild(addressCityState);

    contentDiv.appendChild(contactDivContainer);

}