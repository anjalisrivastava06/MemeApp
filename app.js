let meme = document.getElementById('meme');
let title = document.getElementById('title');
let button = document.getElementById('btn');

//API URL
let url = "https://meme-api.com/gimme/"

let subreddits = ["dogmemes", "catmemes", "wholesomemes", "me_irl", "/r/puns"];

//Function to get random meme
let getMeme = () => {
    //Array of subreddits of your choice
    let randomSubreddit = subreddits[Math.floor(Math.random()* subreddits.length)];
    //fetch data from api
    fetch(url + randomSubreddit)
    .then((response) => response.json())
    .then(data => {
        //Choose a random subreddit from the subreddits array
        let memeImg = new Image();

        //Display meme image and title only after the image loads
        memeImg.onload = () =>{
            meme.src = data.url;
            title.innerHTML = data.title;
        }
        memeImg.src = data.url;
    });
}

//Call the getMeme() on button click and on window load
button.addEventListener('click', getMeme);
window.addEventListener('load', getMeme)