//loads the standard images which is cat from the beginning
const images = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/images');
        const myJson = await response.json();
        addImagesToPage(myJson);
    } catch (error) {
        alert(error);
    }

}

//Search for differnt tags in the api
const imageSeach = async () => {
    try {
        var searchContent;
        searchContent= document.getElementById('search-field');
        const response = await fetch('http://localhost:3000/api/images/'+ searchContent.value);
        const myJson = await response.json();
        addImagesToPage(myJson);
    } catch (error) {
        alert(error);
    }

}

function addImagesToPage (imageJson) {
    if (imageJson) {
        const imageArray = imageJson.photos.photo;
        imageArray.forEach(item => {
            appendFlickrImages(item.server, item.id, item.secret, item.title)
        });
    } else{
        alert("The server responded with 0 images");
    }

}

    function searchImages(){
        document.getElementById("gallery").innerHTML = '';
        imageSeach()
    }

  function  addListnerOnEnter() {
        var input = document.getElementById("search-field");
        input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("search-button").click();
            }     
            });
    }
    

// image object 
function Image(id, serverId, secret, title) {
    this.id = id;
    this.serverId = serverId;
    this.secret = secret;
    this.title = title;
}

function appendFlickrImages(serverId, id, secret, title) {
    const image = new Image(id, serverId, secret, title);
    let gallery = document.getElementById("gallery");
    let div = document.createElement("div");
    div.setAttribute("class", "column");
    gallery.appendChild(div);
    let card = document.createElement("div");
    card.setAttribute("class", "card")
    div.appendChild(card)

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "https://live.staticflickr.com/" + image.serverId + "/" + image.id + "_" + image.secret + "_w.jpg");
    imgElement.setAttribute("height", "768");
    imgElement.setAttribute("width", "1024");
    imgElement.setAttribute("class", "img")
    imgElement.setAttribute("alt", image.title);
    card.appendChild(imgElement);
    // item.querySelector('.img').appendChild('<img class="img" alt="cat" src="https://live.staticflickr.com/' + serverId + '/' + id + '_' + secret + '_w.jpg"/>');
}

window.onload = function () {
    images();
    addListnerOnEnter();
};