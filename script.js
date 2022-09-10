var btn = document.querySelector("#btn");
let floors = document.querySelector(".floors");
let lifts = document.querySelector(".lifts");
let systemDiv = document.querySelector("#output");

btn.addEventListener("click", () => {
  let floorHtml = floorBuilder(floors.value);
  systemDiv.innerHTML = floorHtml;
  let up = document.querySelectorAll(".up");
  let down = document.querySelectorAll(".down");

  for (i = 0; i < up.length; i++) {
    up[i].addEventListener("click", (e) => {
      if (e.target.dataset.floor === "1") {
        return;
      } else {
        liftMover(e.target.dataset.floor);
      }
    });
    down[i].addEventListener("click", (e) => {
      if (e.target.dataset.floor === "1") {
        return;
      } else {
        console.log("i am going");
      }
    });
  }
});

let floorBuilder = (floorNum) => {
  let floorHtml = ``;
  for (i = floorNum; i > 0; i--) {
    floorHtml += `<div class="floor">
    <div class="buttonDiv">
    <button class="up " data-floor="${i}">⬆️</button>
    <button class="down" data-floor="${i}" >⬇️</button>
    </div>
    <div class="liftDiv">${liftBuilder(i)}</div>
    </div>`;
  }

  return floorHtml;
};

function liftBuilder(indOfLoop) {
  let liftHtml = ``;
  for (index = 0; index < lifts.value; index++) {
    liftHtml += `<div class="lift " data-position="1"></div>`;
  }
  if (indOfLoop === 1) {
    return liftHtml;
  } else {
    return "";
  }
}

function liftMover(floorToGo) {
  let allLifts = document.querySelectorAll(".lift");

  for (ind = 0; ind < allLifts.length; i++) {
    if (!allLifts[ind].classList.contains("busy")) {
      let currentPosition = allLifts[ind].dataset.position;
      let movement = "";
      let roadToCross = 0;
      if (Number(floorToGo) > Number(currentPosition)) {
        roadToCross = Number(floorToGo) - Number(currentPosition);
        movement = "up";
        console.log(floorToGo);
      } else if (currentPosition === floorToGo) {
        console.log("heyy there is lift in your floor");
      } else {
        roadToCross = Number(currentPosition) - Number(floorToGo);
        movement = "down";
      }
      function isUp() {
        if (movement === "up") {
          return true;
        } else {
          return false;
        }
      }
      allLifts[ind].style.transition = `transform 2s`;
      let distance = -216 * roadToCross;
      console.log(movement,roadToCross,distance);
      let distanceDown = 216*roadToCross;
      allLifts[ind].style.transform = `translateY(${
        distance+'px'
      })`;
      allLifts[ind].classList.add('busy');
      setTimeout(()=>{allLifts[ind].classList.remove('busy')},2000)

    return;
    }
    
  }
}
