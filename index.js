'use strict';

const poetryDBBaseUrl = "http://poetrydb.org/title"
const museumKey = "gjfVQVNJ"

// function showWelcomePage(){
//     // loads the first page of the quiz
//     console.log('showWelcomePageRan');
// }


function searchPoetryDB(){
    // search the poetry db for results
}

function searchMuseumDB(){
    // search the museum db for results
}

// function searchBothApis(){
//     // search Poetry DB function
//     searchPoetryDB();
//     // search Museum DB function
//     searchMuseumDB();
// }

function getDataFromApi(){
    console.log('getDataFromApi ran');
}
// need logic to handle 0 results, image only, poetry only, image and poetry

// function restartSearch(){
//     // start quiz over after receiving only a poem or image result.
// }

function handleApp(){
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const query = $('#js-search-term').val();
        console.log(query);
        getDataFromApi(query);
    })



    // First draft
    // // Show welcome page not needed because I'm showing 1 page
    // various search results
    // showWelcomePage();

    // Event listener on the parent element (container for the search)
    // $('.contentContainer').on('submit', 'form.searchForm', searchBothApis);

}

$(handleApp);

// sample data returned by query: http://poetrydb.org/title/horse/all.json
[ 
    {
        "title": "Sonnet XLI: Having This Day My Horse",
        "author": "Sir Philip Sidney",
        "lines": [
            "Having this day my horse, my hand, my lance",
            "Guided so well that I obtain'd the prize,",
            "Both by the judgment of the English eyes",
            "And of some sent from that sweet enemy France;",
            "Horsemen my skill in horsemanship advance,",
            "Town folks my strength; a daintier judge applies",
            "His praise to sleight which from good use doth rise;",
            "Some lucky wits impute it but to chance;",
            "Others, because of both sides I do take",
            "My blood from them who did excel in this,",
            "Think Nature me a man of arms did make.",
            "How far they shot awry! The true cause is,",
            "Stella look'd on, and from her heav'nly face",
            "Sent forth the beams which made so fair my race."
            ],
        "linecount": 14
    }
]

// sample data returned by query: 
//https://www.rijksmuseum.nl/api/en/collection?p=1&ps=12&title=horse&key=gjfVQVNJ&format=json

[
    {
        "elapsedMilliseconds": 0,
        "count": 133,
        "countFacets": {
            "hasimage": 97,
            "ondisplay": 7
        },
        "artObjects": [
            {
                "links": {
                    "self": "https://www.rijksmuseum.nl/api/en/collection/SK-A-1610",
                    "web": "https://www.rijksmuseum.nl/en/collection/SK-A-1610" // this is the image to return
                    },
                "id": "en-SK-A-1610",
                "objectNumber": "SK-A-1610",
                "title": "The Grey Horse", // this is the title matching the search
                "hasImage": true,
                "principalOrFirstMaker": "Philips Wouwerman",
                "longTitle": "The Grey Horse, Philips Wouwerman, c. 1646",
                "showImage": false,
                "permitDownload": false,
                "webImage": {
                    "guid": "6680ec54-c926-49eb-9056-d5bda9357b09",
                    "offsetPercentageX": 0,
                    "offsetPercentageY": 0,
                    "width": 2682,
                    "height": 2682,
                    "url": "https://lh3.googleusercontent.com/lbA5lBAwvVhXUZsWmohjWxeXC3Ygw7oOI_5gcumOMI8pbbJosYOvxPRfmMf_J88y_hbaGAoxzzqwmacMwZyVxBXcqg"
                },
                "headerImage": {
                    "guid": "dcc4ec1c-5242-4577-bed3-bc73be598748",
                    "offsetPercentageX": 0,
                    "offsetPercentageY": 0,
                    "width": 460,
                    "height": 460,
                    "url": "https://lh3.googleusercontent.com/lTGpM4PHKwHQ789KdVapQQ3vm4vDP6yH1FJ1gD0ynLUvVSFem4IRNKDEaO5gli8vVfipBsgbjeU6xNaKCRO2N4lkpQQ"
                },
                "productionPlaces": []
            },
        ]

    }
]

