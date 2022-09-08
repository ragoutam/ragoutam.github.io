var btn = document.querySelector('#btn');
let floors = document.querySelector('.floors');
let lifts = document.querySelector('.lifts');
let systemDiv = document.querySelector('#output');



btn.addEventListener('click', () => {
    floorBuilder(floors.value);
});


let floorBuilder = (floorNum) => {
    let floorHtml = ``;
    for (i = floorNum; i > 0; i--) {
        let index = i;
        floorHtml += `<div class="floor">
    <div class="buttonDiv">
    <button>⬆️</button>
    <button>⬇️</button>
    </div>
    <div class="liftDiv">${liftBuilder(i)}</div>
    </div>`
    }
    systemDiv.innerHTML = floorHtml
};


function liftBuilder(indOfLoop) {

    let liftHtml = ``;
    for (index = 0; index < lifts.value; index++) {
        liftHtml += `<div class="lift"></div>`
    }
    if (indOfLoop===1) {
        return liftHtml
    }
    else {
        return '';
    }
}



