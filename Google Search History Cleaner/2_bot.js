const cl = (classname) => {
  return document.getElementsByClassName(classname);
};
const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

//click on search bar of google
document.getElementsByClassName("gLFyf gsfi")[0].click();

async function removeAll() {
  if (cl("sbai").length > 0) {
    await delay(500);
    cl("sbai")[0].click();
    removeAll();
  }
}
removeAll();
