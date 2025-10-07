var allPublications = new Array();
/*var allPublications = JSON.parse('publications.json');*/
/*var currentPublication = allPublications[0].question;
var answerA         = allQuestions[0].a;
and so on*/


/*Load Json data into an array
Code from Gemini*/
async function loadJSON(filePath) {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonData = await response.json(); // Parses the JSON response

    // Check if the JSON data is an array (important for your use case)
    if (Array.isArray(jsonData)) {
      return jsonData; // Return the array
    } else {
      throw new Error("JSON data is not an array.");
    }

  } catch (error) {
    console.error("Error loading JSON:", error);
    return null; // Or handle the error as needed (e.g., return an empty array)
  }
}

const container = document.querySelector('.json-content');
/*const listEntry = document.querySelector('.list-entry');
const entryAuthors = document.querySelector('.entry-authors');
const entryTitle = document.querySelector('.entry-title');
const entryReference = document.querySelector('.entry-reference'); */

// Example usage:
const filePath = 'publications.json'; // Path to your local JSON file

loadJSON(filePath)
  .then(dataArray => {
    if (dataArray) {
      console.log("JSON data loaded successfully:", dataArray);
      // Now you can work with the dataArray
      //reversedArray = dataArray.reverse();
      //slicedArray = dataArray.slice(0,5);
      var counter = 0;
      dataArray.forEach(item => {
        //console.log(item); // Example: print each item in the array
        counter += 1;
        container.innerHTML += `
        <div class="list-entry">
            <p class="entry-authors">${counter}</p>
            <p class="entry-authors">${item.authors}</p>
            <p class="entry-title">${item.title}</p>
            <p class="entry-reference">${item.reference}</p>
        </div>`
      });
    }
  });


/*
function loadPublications() {
    $.getJSON('publications.json', function (data) {
        allPublications = data.publications;
    })
    .error(function() {
        console.log('error: JSON not loaded');
    })
    .done(function() {
        console.log( "JSON loaded!" );
        showPublications();
    });
}
*/


/*If you want to show all cards*/
const showPublications = () => {
     allPublications.map((data) => {
        //console.log(data)
        //using template literals to keep string from breaking
        entryAuthors.innerHTML += `${data.authors}`
        entryTitle.innerHTML += `${data.title}`
        entryReference.innerHTML += `${data.reference}`

     })
}

/*showPublications();*/
