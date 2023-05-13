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

    objectID.forEach((artistobject) => {
        //card elements
        const elemObj = createCardElements();

        //artistscard
        //push card to array
        
    });

   artistArray.forEach((artistobject) => {
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

