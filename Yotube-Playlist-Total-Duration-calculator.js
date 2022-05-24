let a = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer")
let playlist = []
for (let i = 0; i < a.length; i++) {
    const ref=a[i].innerHTML;
    if(ref.length > 5){
        playlist.push(ref.trim().split(':'))
    }
}
let time=0; // seconds
playlist.forEach(e=>{
    i=1;
    e.reverse().forEach(t=>{
        time+=i*parseInt(t)
        i= i*60
    })
})
let hr=Math.round(time/3600)
let min=Math.round((time%3600)/60)
let sec=time%60
console.log(`${hr}:${min}:${sec}`)