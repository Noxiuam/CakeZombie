var header = document.getElementById("header");
var socialLinks;
var links;

var socialElements = [];
var linkElements = [];

localStorage.clear();

fetch("info.json", {"mode": "no-cors"})
    .then(response => response.json())
    .then(json => {
        let file = JSON.parse(JSON.stringify(json));

        let headerJson = file.header;
        let socialLinksJson = file.socialLinks;
        let linksJson = file.links;

        document.getElementById("name-id").innerText = headerJson.name;
        document.getElementById("desc-id").innerText = headerJson.description;
        document.getElementById("avatar").style.backgroundImage = headerJson.avatarUrl;

        socialLinks = document.getElementById("social-links-id");
        links = document.getElementById("links-id");
    
        if (socialLinks != undefined) {
            Object.keys(socialLinksJson).forEach(function(key) {
                socialElements.push(getSocialObj(socialLinksJson[key]))
                if (socialElements.length == Object.keys(socialLinksJson).length) {
                    addSocials();
                }
            });
        }

        if (links != undefined) {
            Object.keys(linksJson).forEach(function(key) {
                linkElements.push(getLinkObj(linksJson[key]))
                if (linkElements.length == Object.keys(linksJson).length) {
                    addLinks();
                }
            });
        }
    })

function addSocials() {
    for (var i = 0; i < socialElements.length; i++) {
        let image = socialElements[i].image;
        let link = socialElements[i].link;
        socialLinks.innerHTML += `<a href="${link}" class="social-link"> <img src="${image}"> </a>`;
    }
}

function addLinks() {
    for (var i = 0; i < linkElements.length; i++) {
        let text = linkElements[i].text;
        let link = linkElements[i].link;
        console.log(text);
        links.innerHTML += `<button onclick="window.location.href='${link}'"> ${text} </button> <br><br>`;
    }
}

function getSocialObj(json) {
    return { image: json.image, link: json.link };
}

function getLinkObj(json) {
    return { text: json.text, link: json.link };
}