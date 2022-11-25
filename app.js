// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = [];
let ballonColors = ["green","yellow","blue","pink","orange","brown","purple","red","black"]
for(let i=0; i<20; i++){
    ballonsMap.push(ballonColors[Math.floor(Math.random()*ballonColors.length)]);
}


// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    console.log(`Balloon number ${position+1} clicked`);
    ballonsMap[position] = "null";
    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        
        let noneShadow = "";
        if(color=="null"){
            noneShadow = "box-shadow: none !important;";
        }
        return `<div class="balloon active" style="background-color:${color}; ${noneShadow}" onclick="popBalloon(${position});"></div>`; // <--- render each balloon
    });

    let activeBalloons = ballonsMap.filter(e => e != "null").length;

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();