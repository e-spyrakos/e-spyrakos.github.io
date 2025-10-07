const body = document.querySelector('body');
const hide = document.querySelector('.hide');
const cardContainer = document.querySelector('.container');

const newsCard = document.querySelector('.news-card');
const newsImage = document.querySelector('.news-card img');
const newsHeading = document.querySelector('.news-card h3');
const newsDate = document.querySelector('.news-card .news-date');
const newsVenue = document.querySelector('.news-card .news-venue');
//const newsParagraph = document.querySelector('.news-card p');
const newsItemId = document.querySelector('#hidden-id');

const jsonFilePath = 'events.json'; // Path to your local JSON file

var newArray = new Array();

loadJSON(jsonFilePath)
  .then(dataArray => {
    if (dataArray) {
      //console.log("length = ", dataArray.length);
      console.log("JSON data loaded successfully:", dataArray);
      newArray = dataArray;
      // Now you can work with the dataArray
      randomNewsItem();
    }
  });

  /*Load Json data into an array
  Code from Gemini*/
  async function loadJSON(jsonFilePath) {
    try {
      const response = await fetch(jsonFilePath);

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

function clickNewsItem() {
  itemId = document.getElementById("hidden-id").innerHTML;
  window.location = "news.html";
  //alert("ID = " + itemId);
}

function randomNewsItem(){
    //Get a Random Index into the Arrays
    let i = Math.floor(Math.random() * newArray.length);
    newsCard.style.backgroundColor  = newArray[i].bgColor;
    newsImage.src = newArray[i].imageUrl;
    newsHeading.innerHTML = newArray[i].Heading;
    newsDate.innerHTML = "Date: " + newArray[i].Date;
    newsVenue.innerHTML = "Venue: " + newArray[i].Venue;
    //newsParagraph.innerHTML = newArray[i].para;
    newsItemId.innerHTML = newArray[i].id;
    hide.style.display = "block";

    setTimeout(randomNewsItem, 3000);
}

//setInterval(randomCard, 3000);
