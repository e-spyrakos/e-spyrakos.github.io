//
const hide = document.querySelector('.hide');
const newsRow = document.querySelector('.row');
const newsColumn = document.querySelector('.news-col');
const newsImage = document.querySelector('.news-col img');
const newsHeading = document.querySelector('.news-col h3');
const newsParagraph = document.querySelector('.news-col p');
const newsItemId = document.querySelector('#hidden-id');

// Example usage:
const filePath = 'events.json'; // Path to your local JSON file
var newArray = new Array();

loadJSON(filePath)
  .then(dataArray => {
    if (dataArray) {
      console.log("JSON data loaded successfully:", dataArray);
      newArray = dataArray;
      // Now you can work with the dataArray
      functionNewsCards();
    }
  });

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

/*If you want to show all cards*/
const functionNewsCards = () => {
     newArray.map((data) => {
        //console.log(data)
        //using template literals to keep string from breaking
        newsRow.innerHTML += `
        <div class="news-col" style="background-color: ${data.bgColor}">
          <div class="image">
            <img src="${data.imageUrl}" alt=""></div>
            <h3>${data.Heading}</h3>
            <h5>Date:&nbsp${data.Date}</h5>
            <h5>Venue:&nbsp${data.Venue}</h5>
            <p>${data.para}</p>
            <div id="hidden-id">${data.id}</div>
            <a href="" class="more-btn">Read More</a>
        </div>
      </div>`
     })
}

function clickNewsItem() {
  itemId = document.getElementById("hidden-id").innerHTML;
  window.location = "news.html";
  //alert("ID = " + itemId);
}

//functionNewsCards();

//setInterval(randomCard, 3000);
