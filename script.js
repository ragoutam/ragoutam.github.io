let btn = document.querySelector('#btn');
let floors = document.querySelector('.floors');
let lifts = document.querySelector('.lifts');
let systemDiv = document.querySelector('#output');

btn.addEventListener('click',()=>{

floorBuilder(floors.value);

})

let floorBuilder = (floorNum)=>{
let floorHtml = ``;
for(i=floorNum;i>0;i--){
    floorHtml += `<div class="floor">
    <div class="buttonDiv">
    <button>up</button>
    <button>down</button>
    </div>
    </div>`
}
systemDiv.innerHTML = floorHtml
};



