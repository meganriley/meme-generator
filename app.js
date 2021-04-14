const form = document.querySelector('form');
const image_input = document.querySelector('#img-url');
const top_text_input = document.querySelector('#text-top');
const bottom_text_input = document.querySelector('#text-bottom');
const results = document.querySelector('#maindiv');
const deleteForm = document.querySelector('#delete')


form.addEventListener('submit', function(e) {
    e.preventDefault();
    //creating and appending image element
    const image = document.createElement("img");
    image.setAttribute("id", "memeId");
    image.setAttribute("src", image_input.value);
    document.getElementById("maindiv").appendChild(image);
    image_input.value = '';
    //creating and appending top text element
    console.log(top_text_input.value);
    const newTopText = document.createElement('p');
    newTopText.setAttribute("id", "top");
    newTopText.innerText = `${top_text_input.value}`;
    document.getElementById("maindiv").appendChild(newTopText);
    top_text_input.value = '';
    //creating and appending bottom text element
    console.log(bottom_text_input.value);
    const newBottomText = document.createElement('p');
    newBottomText.setAttribute("id", "bottom");
    newBottomText.innerText = `${bottom_text_input.value}`;
    document.getElementById("maindiv").appendChild(newBottomText);
    bottom_text_input.value = '';
})

deleteForm.addEventListener('submit', function(e) {
    results.remove();
})