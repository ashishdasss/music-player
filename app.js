console.log("welcome")
let audioElement = new Audio ("songs/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songitems"))
let masterSongName = document.getElementById("masterSongName")

// List of the songs 
// let songs = [
//     {songName:" Waving Flag ", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName:" Waving Flag 2", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName:" Waving Flag 3", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName:" Waving Flag 4", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName:" Waving Flag 5", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName:" Waving Flag 6", filePath:"songs/7.mp3", coverPath: "covers/6.jpg"},
// ]
let songs = [
    {songName:" Warriyo-Mortals ", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:" Cielo-HumaHuma", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:" Invincible-Deaf Kev", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:" My Heart", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:" Heroes Tonight", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:" Waving Flag ", filePath:"songs/7.mp3", coverPath: "covers/6.jpg"},
]

//  traversal of the songs 
songItems.forEach((element, i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<1){
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    } 
    else {
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // console.log("timeupdate")
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

// make all plays 
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener("click", (e)=>{
        makeAllplays()
        index = parseInt(e.target.id)
        // console.log(e.target)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.currentTime = 0;
        audioElement.src = `songs/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    })
})
// api calling on click 
document.getElementById('next').addEventListener('click', ()=>{
    if(index>=6){
        index = 0
    }
    else{
        index += 1
    }
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0;
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1
    }
    masterSongName.innerText = songs[index].songName
    audioElement.currentTime = 0;
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-pause-circle")
    gif.style.opacity = 1;
})