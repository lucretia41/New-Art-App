const initApp = async () => {
    // get data
    const artists = await getDataFromApi();

    //render to page

    renderArtists(objectID);

    //add listeners
}

document.addEventListener("DOMContentLoaded", initApp);

const getDataFromApi = async () => {
    const fakeDataStream = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]"
    );
    const jsonData = await fakeDataStream.json();
    return jsonData.objectID;

};

renderArtists = (objectID) => {
    const main = document.querySelector("main");
    const artistArray = [];

    objectID.forEach((artistObject) => {
        //card elements
        const elemObj = createCardElements();

        //artistCard
        const artistCard = createArtistCard(elemObj, artistObject);

        //push card to array
        
    });

   artistArray.forEach((artistObject) => {
    main.appendChild(card);

   });
};

const createCardElements = () => {
    const article = document.createElement("article");
    const primaryImageSmall = document.createElement('img');
    const details = document.createElement("div");
    const like = document.createElement("div");
    const artistDisplayName = document.createElement("h2");
    const title = document.createElement("title");
    return { article, primaryImageSmall, like, artistDisplayName, details, title };

};

const createArtistCard = (elemObj, artistObject) => {
    const { article, primaryImageSmall, details, like, artistDisplayName, title } = elemObj;

    details.className = "details";
    like.classList.add("like");

    artistDisplayName.textContent = `${artistObject.artistDisplayName}`;
    Img.src = artistObject.primaryImageSmall;

    article.appendChild(primaryImageSmall);
    details.appendChild(artistDisplayName);
    details.appendChild(title);
    article.appendChild(details);
    article.appendChild(like);

    return article

}


