//paste it in dev tools after searching anything in unspalash
const a = document.getElementsByClassName("untracked");
for (let i = 0; i < a.length; i++) {
  setTimeout(() => {
    a[i].click();
  }, i * 1000);
}
