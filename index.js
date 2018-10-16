'use strict';

function showWelcomePage(){
    // loads the first page of the quiz
    console.log('showWelcomePageRan');
}


function searchPoetryDB(){
    // search the poetry db for results
}

function searchMuseumDB(){
    // search the museum db for results
}

function searchBothApis(){
    // search Poetry DB function
    searchPoetryDB();
    // search Museum DB function
    searchMuseumDB();
}

// need logic to handle 0 results, image only, poetry only, image and poetry

function restartSearch(){
    // start quiz over after receiving only a poem or image result.
}

function handleApp(){
    // Show welcome page
    showWelcomePage();

    // Event listener on the parent element (container for the search)
    $('.contentContainer').on('submit', 'form.searchForm', searchBothApis);

    // Event listener on the start over button to go back to Main page
    $('.contentContainer').on('click', 'restartSearch', restartSearch)
}

$(handleApp);