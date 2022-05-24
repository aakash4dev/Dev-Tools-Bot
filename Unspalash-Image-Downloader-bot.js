//paste it in dev tools after searching anything in unspalash
//e.g.- open https://unsplash.com/s/photos/cryptocurrency , and paste codes below in dev tools of your browser. it will download all the images which are loaded now.
const a = document.getElementsByClassName("untracked");
for (let i = 0; i < a.length; i++) {
  setTimeout(() => {
    a[i].click();
  }, i * 1000);
}
