function navShow() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    } 
  }

  $(window).resize(function(){
    var x = document.getElementById("navLinks");
    if (x.style.display === "none") {
      x.style.display = "flex";
  }
  });


  let API_KEY = "GJtgsPlioJ_miak48x4uvtYkVO-YdkCo03BDR4197pI";
  let endPoint = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}`
  
  // Set reference variables to the necessary id'z
  let unsplashIMG = document.querySelector('#unsplash_IMG');
  let imageURL = document.querySelector('#img_URL');
  let IMGcreator = document.querySelector('#IMG_creator');
  
  let btn = document.querySelector('.testBtn');
  btn.addEventListener('click', function() {
      clearTimeout(clearTimer);
  })
  let clearTimer;
  
  let fetchImage = () => {
      clearTimer = setInterval(() => {
          
      
      //fetch data from the server
      fetch(endPoint)
          .then((response) => {
              return response.json();
          })
          .then((jsonData) => {
              //Sets the image using the JSON data returned
              unsplashIMG.src = jsonData.urls.regular;
              // Sets the URL using the JSON data returned
              imageURL.setAttribute('href', jsonData.links.html);
              // Sets the creators name using the JSON data returned
              IMGcreator.innerText = jsonData.user.name;
              // Sets the creators URL using the JSON data returned
              IMGcreator.setAttribute('href', jsonData.user.portfolio_url);
          })
          .catch((err) =>  {
              console.log("Something Bad Happened " + err);
          })
      }, 5000)
  }
  fetchImage();