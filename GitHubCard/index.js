/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Pete1701')
.then(response => {
  console.log(response.data);  
  userCards.appendChild(gitCards(response.data));  
  });
// .catch(error => {
//   console.log("The data was not returned", error);
// });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/
function gitCards(obj) {
  const userCard = document.createElement("div"),
        userImg = document.createElement("img"),
        userCardInfo = document.createElement("div"),
        userName = document.createElement("h3"),
        userUsername = document.createElement("p"),
        userLocation = document.createElement("p"),
        userProfile = document.createElement("p"),
        userPage = document.createElement("a"),
        userFollowers = document.createElement("p"),
        userFollowing = document.createElement("p"),
        userBio = document.createElement("p");

  userCard.append(userImg, userCardInfo);
  userCardInfo.append(userName, userUsername, userLocation, userProfile, userFollowers, userFollowing, userBio);
  userProfile.append(userPage);

  userCard.classList.add('card');
  userCardInfo.classList.add('card-info');
  userName.classList.add('name');
  userUsername.classList.add('username');  

  userImg.src = obj.avatar_url;
  userName.textContent = obj.name;
  userUsername.textContent = obj.login;
  userLocation.textContent = `Location ${obj.location}`;
  userPage.href = obj.url;
  userFollowers.textContent = `Followers ${obj.followers}`;
  userFollowing.textContent = `Following ${obj.following}`;
  userBio.textContent = obj.bio;

  return userCard;
}

const userCards = document.querySelector('.cards');

/*<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// const tetondan = 'https://api.github.com/users/tetondan';
// const dustinmyers = 'https://api.github.com/users/dustinmyers';
// const justsml = 'https://api.github.com/users/justsml';
// const luishrd = 'https://api.github.com/users/luishrd';
// const bigknell = 'https://api.github.com/users/bigknell';


axios.get(`https://api.github.com/users/Pete1701/followers`)
.then(response => {
  // console.log(response.data);
  // for (let item in response.data) {
    response.data.forEach(item => {
      axios.get(item.url)
      .then(response => {
        console.log(response.data);
        userCards.append(gitCards(response.data));
      })
    })
  //userCards.appendChild(gitCards(response.data[item]));
  //userCards.appendChild(gitCards(response.data));  
})