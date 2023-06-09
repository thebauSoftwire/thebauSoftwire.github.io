function showRecipeDescription(id) {
    const recipeDescription = document.getElementById(id);
    const downArrowButton = document.getElementById(`${id}-down-button`);
    const upArrowButton = document.getElementById(`${id}-up-button`);

    if (recipeDescription.style.display === "none") {
        recipeDescription.style.display = "flex";
        upArrowButton.style.display = "flex";
        downArrowButton.style.display = "none";
    } else {
        recipeDescription.style.display = "none";
        upArrowButton.style.button = "none";
        downArrowButton.style.button = "flex";
    }
}

function hideRecipeDescription(id) {
    const recipeDescription = document.getElementById(id);
    const downArrowButton = document.getElementById(`${id}-down-button`);
    const upArrowButton = document.getElementById(`${id}-up-button`);

    if (recipeDescription.style.display === "flex") {
        recipeDescription.style.display = "none";
        upArrowButton.style.display = "none";
        downArrowButton.style.display = "flex";
    } else {
        recipeDescription.style.display = "flex";
        upArrowButton.style.button = "flex";
        downArrowButton.style.button = "none";
    }
}
