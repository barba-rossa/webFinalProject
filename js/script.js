document.addEventListener("DOMContentLoaded", function() {
    const randomCharacterBtn = document.getElementById("randomCharacterBtn");
    const characterImage = document.getElementById("characterImage");

    randomCharacterBtn.addEventListener("click", function() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const character = data.results[randomIndex];
                const characterName = character.name;
                const characterImgSrc = character.image;
                characterImage.innerHTML = `
                    <img src="${characterImgSrc}" alt="${characterName}">
                    <p>You are ${characterName}</p>
                `;
            })
            .catch(error => {
                console.error("There was a problem with your fetch operation:", error);
            });
    });
});
