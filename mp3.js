let songs = [
    {
        songName: "Waltz of Four Left Feet",
        songArtist: "Shirebound and Busking",
        cover: "waltz.png",
        duration: "5:37",
        src : "./music/waltz.mp3"
    },
    {
        songName: "bad",
        songArtist: "wave to earth",
        cover: "bad.png",
        duration: "4:32",
        src: "./music/bad.mp3"
    },
    {
        songName: "intro(end of the world)",
        songArtist: "Ariana Grande",
        cover: "ariana.png",
        duration: "1:32",
        src: "./music/intro.mp3"
    },
    {
        songName: "ily",
        songArtist: "YB Neet, Bugoy na Koykoy",
        cover: "ily.png",
        duration: "2:59",
        src:"./music/ily.mp3"
    },
    {
        songName: "See You Again",
        songArtist: "Tyler, The Creator, Kali Uchis",
        cover: "see.png",
        duration: "3:00",
        src:"./music/see.mp3"
    },
    {
        songName: "Don't",
        songArtist: "Bryson Tiller",
        cover: "dont.png",
        duration: "3:18",
        src:"./music/dont.mp3"
    },
    {
        songName: "Nakauwi Na",
        songArtist: "Ang Bandang Shirley",
        cover: "nakauwi.png",
        duration: "5:28",
        src:"./music/nakauwi.mp3"
    }
];

let songContainer = document.querySelector(".songContainer");
let songTitle = document.querySelector(".songTitle");
let songArtist = document.querySelector(".songArtist");
let duration = document.querySelector(".time");
let songImg = document.querySelector(".songImg");



function displaySongs(){
for(let i=0;i<songs.length;i++){
    
     let song = songs[i];
     console.log(songs[i].songName);
     let songi = `
     <div class="song">
     <img class="songImg" src="${song.cover}" alt="" srcset="">
     <div class="sss">
     <div class="songTitleArtist">
      
       <p class="songTitle">${song.songName}</p>
       <p class="songArtist">${song.songArtist}</p>
       </div>
       <div class="time">
           <p>${song.duration}</p>
       </div>
       </div>
     `;
    songContainer.innerHTML += songi;
}

}

displaySongs();

let musicTitle = document.querySelector(".musicTitle");
let musicArtist = document.querySelector(".musicArtist");
let musicImg = document.querySelector(".musicPlayercontainer img");
let songsElements = document.querySelectorAll(".song");
let musicContainer = document.querySelector(".musicContainer");

songsElements.forEach(function(songElement) {
    songElement.addEventListener("click", function() {
        let songIndex = Array.from(songsElements).indexOf(songElement);
        let clickedSong = songs[songIndex];

        // Update music player with the clicked song details
        musicTitle.textContent = clickedSong.songName;
        musicArtist.textContent = clickedSong.songArtist;
        musicImg.setAttribute("src", clickedSong.cover);
        
        //song starts playing if you click
        let audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = clickedSong.src;
        audioPlayer.play();


        if (clickedSong.songName === "bad") {
            document.querySelector(".musicContainer").style.background = "radial-gradient(circle, rgba(123,130,136,1) 38%, rgba(155,163,164,1) 100%)";
        } else if(clickedSong.songName === "intro(end of the world)" ){
            document.querySelector(".musicContainer").style.background = " radial-gradient(circle, rgba(168,133,27,1) 0%, rgba(27,23,23,1) 97%)";
        } else if(clickedSong.songName === "ily" ){
            document.querySelector(".musicContainer").style.background = " radial-gradient(circle, rgba(215,196,196,1) 0%, rgba(190,122,122,1) 56%, rgba(167,52,52,1) 78%, rgba(0,0,0,1) 100%)";
        } else if(clickedSong.songName === "See You Again" ){
            document.querySelector(".musicContainer").style.background = " radial-gradient(circle, rgba(240,144,0,1) 0%, rgba(136,222,111,1) 100%)";
        } else if(clickedSong.songName === "Don't" ){
            document.querySelector(".musicContainer").style.background = " radial-gradient(circle, rgba(120,118,115,1) 12%, rgba(17,18,17,1) 100%)";
        }  else if(clickedSong.songName === "Nakauwi Na" ){
            document.querySelector(".musicContainer").style.background = " radial-gradient(circle, rgba(38,139,208,1) 30%, rgba(82,209,94,1) 100%)";
        } 
        
        
        
        
        
        else {
            // Reset background color if it's not the "bad" song
            document.querySelector(".musicContainer").style.background = "radial-gradient(circle, rgba(238,234,174,1) 9%, rgba(66,62,15,1) 89%)";
        }
        
    });

   
});