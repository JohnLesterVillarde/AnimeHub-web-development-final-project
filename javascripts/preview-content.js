document.addEventListener('DOMContentLoaded', () => {

  let trendingContents = document.querySelector(".trending-contents");
  let trending = trendingContents.querySelectorAll("figure");

  //contents of Peview Content
  let title = document.querySelector("#title");
  let image = document.querySelector("#image");

  let figureData = localStorage.getItem("figureData");
  figureData = JSON.parse(figureData);

  console.log(figureData.figureTitle);
  console.log(figureData.figureImage);
  title.textContent = figureData.figureTitle;
  image.src = figureData.figureImage;

  // if the preview content and trending contents is equal, hide it
  hideTrendingIfPreviewed(trending);

  // Preview the trending contents if click
  trendingContents.addEventListener("click", () => {
    trending.forEach((item) => {
      item.addEventListener("click", () => {
        let itemTitle = item.querySelector("b").textContent;
        let itemImage = item.querySelector("img").src;

        // if there is a hide item, display it back
        trending.forEach((displayedItems) => {
          if (displayedItems.style.display === "none") {
            displayedItems.style.display = "block";
          }
        });

        title.textContent = itemTitle;
        image.src = itemImage;

        //update the localStorage
        figureData.figureImage = image.src;
        figureData.figureTitle = title.textContent;
        localStorage.setItem('figureData', JSON.stringify(figureData));

        item.style.display = "none";
      });
    });
  });

  // function to hide trending content if it is previwed
  function hideTrendingIfPreviewed(trending) {
    trending.forEach((item) => {
      let itemTitle = item.querySelector("b").textContent;
      if (itemTitle.toUpperCase() === figureData.figureTitle) {
        console.log(itemTitle);
        item.style.display = "none";
      }
    });
  }

  // redirect to play video content when play video click
  document.querySelector(".play-now").addEventListener("click", (event) => {
    let previewContent = document.querySelector(".preview-content");
    let previewImage = previewContent.querySelector("img").src;
    let previewTitle = previewContent.querySelector("b").textContent;
    let playVideoData = { videoTitle: previewTitle, videoImage: previewImage };

    localStorage.setItem("videoToPlay", JSON.stringify(playVideoData));
    window.location.href = "play-video.html";
  });

  // Add to library
  let preview = document.querySelector(".preview-content");
  let add = preview.querySelector("button");
  let collectionList = localStorage.getItem("library");
  collectionList = JSON.parse(collectionList);
  addToLibraryList = [...collectionList];

  add.addEventListener("click", () => {
    console.log("click");

    // if (collectionList != null) {
    //   console.log("Array is not null ");
    //   //console.log(collectionList);

    //   addToLibraryList = [...collectionList];
    // }
    let objectImage = preview.querySelector("img").src;
    let objectTitle = preview.querySelector("b").textContent;
    let addObject = { image: objectImage, title: objectTitle }; //object

    //add new object to array list
    if (isAlreadyAdded(objectTitle)) {
      // object not added
      toggleNotification(`"${objectTitle}" Already Exist`);
      return;

    } else {
      addToLibraryList.push(addObject);
      toggleNotification(`"${objectTitle}" Added to your Library`);
      
      console.log("library " + objectTitle);
      localStorage.setItem("library", JSON.stringify(addToLibraryList));
      location.reload();
    }
    
  });

    // function to display notification
    function toggleNotification(message) {
      
      let notify = document.querySelector('.notify');
      if (notify.style.display !== 'block') {
        notify.querySelector('p').textContent = message;
        notify.style.display = 'block';

        setTimeout(() => {
          notify.style.display = 'none';
        }, 3000);

      } 
    }

    // function to check if item is already exist
    function isAlreadyAdded(title) {
      let isExist = false;
      addToLibraryList.forEach((item) => {
        if (item.title.toUpperCase() === title.toUpperCase()) {
          isExist = true;
        }
      });
    
      return isExist;
    }



})