// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    let categoryIDs = [];
    // collect 100 categories at random section 
    let offsetVal = Math.trunc(Math.random() * 25000);
    let categoryData = await axios.get('http://jservice.io/api/categories', {params: {count:100,offset:offsetVal}});
    
    // while we do not have 6 categories saved
    while (categoryIDs.length < 6) {
        // get 6 random categories from 100 chosen
        let categoryRandomIdx = Math.trunc(Math.random() * 100);
        let currentCategory = categoryData.data[categoryRandomIdx];
        // check they have at least 5 clues and are not already in array
        if ((currentCategory.clues_count >= 5) && !(categoryIDs.includes(currentCategory.id))) {
            // push to list if criteria met
            categoryIDs.push(currentCategory.id);
        };
    };
    // return 6 category ID list
    return categoryIDs;
};

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catID) {
    // get all info for one category
    let categoryInfo = await axios.get('http://jservice.io/api/category', {params: {id:catID}});
    // define useful category info
    let title = categoryInfo.data.title;
    let cluesData = categoryInfo.data.clues;
    let clues = [];
    // get top 5 clues
    for (let i=0; i<5; i++) {
        // get clue & corresponding data
        let clueData = cluesData[i];
        let clueAnswer = clueData.answer;
        let clueQuestion = clueData.question;
        // push clue data to current category clues array
        clues.push({'question':clueQuestion, 'answer':clueAnswer, 'showing':null});
    };
    // return category w/ info
    return {'title':title, 'clues':clues};
};


/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    $('button').text('RESTART')

    // empty current table
    $('table').empty()

    // get new category IDs
    let categoryIDs = await getCategoryIds();
    
    // create empty table
    $('table').append($('<tr>').addClass('titleRow'))
    for (let i=0; i<5; i++) {
        $('table').append($('<tr>').addClass(`row-${i}`))};

    // cycle through 6 category IDs
    for (let i=0; i<6; i++) {
        let category = await getCategory(categoryIDs[i]);
        let title = category.title
        $('.titleRow').append('<th>' + title + '</th>')
        // cycle through 5 questions and answers
        for (let j=0; j<5; j++) {
            let answer = category.clues[j].answer
            let question = category.clues[j].question
            // create table rows-columns with all corresponding data
            $(`.row-${j}`).append($('<td>').attr('id', `data-${j}-${i}`));
            $(`#data-${j}-${i}`).attr('value', 'null');
            $(`#data-${j}-${i}`).attr('question', question);
            $(`#data-${j}-${i}`).attr('answer', answer);
            $(`#data-${j}-${i}`).text('?');

        };
    };  
};

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    // if a table row-column data cell is clicked
    if (evt.target.tagName == 'TD') {
        // define cell clicked and its corresponding values
        let cell = document.getElementById(evt.target.id)
        let value = cell.getAttribute('value')
        let question = cell.getAttribute('question')
        let answer = cell.getAttribute('answer')
        // check current display & update
        // if has not been clicked
        // show question
        if (value == 'null') {
            $(`#${cell.id}`).attr('value', 'question');
            $(`#${cell.id}`).text(question);
        // if question is already showing 
        // show answer
        } else if (value == 'question') {
            $(`#${cell.id}`).attr('value', 'answer');
            $(`#${cell.id}`).text(answer);  
        // if answer is already displayed
        // do nothing & return           
        } else {
            return
        }
    };
};


/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
// await for table to be filled
async function setupAndStart() {
    await fillTable()

};

/** On click of start / restart button, set up game. */
// TODO
$('#start-button').on('click', setupAndStart);

/** On page load, add event handler for clicking clues */
// TODO
$('table').on('click', handleClick)
