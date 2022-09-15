let mainDiv = document.querySelector(".wrap");
let btn = document.querySelector("#btn");
let floors = document.querySelector(".floors");
let lifts = document.querySelector(".lifts");
btn.addEventListener("click", () => {
  buildFloors(Number(floors.value));
});


function buildFloors(floorNum) {
  for (i = 1; i <= floorNum; i++) {
    mainDiv.insertAdjacentHTML(
      "afterend",
      `<div class="floor"><div class='btnDiv'>${upDownBtnPlacer(i)}</div>
     <div class='liftDiv'>${i === 1 ? buildLifts(Number(lifts.value)) : ""}</div>
      </div>`
    );
  }
}

function buildLifts(liftNum) {
  let allLiftHtml = ``;
  for (index = 0; index < liftNum; index++) {
    allLiftHtml += `<div class='lift'></div>`;
  }
  return allLiftHtml;
}

function upDownBtnPlacer(index) {
  if (index === 1) {
    return `<button class='btn'>up</button>`;
  } else if (index === Number(floors.value)) {
    return `<button class='btn'>down</button>`;
  } else {
    return `<button class="btn">up</button>
    <button class="btn">down</button>`;
  }
}

console.log('hello9 world')
