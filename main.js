function setup(){
    canvas= createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO)
    video.size(350,300)
    video.hide()
    posenet=ml5.poseNet(video,model_loaded)
    posenet.on('pose',gotposes)
}
function gotposes(results){
    if(results.length>0){
console.log(results)
    }
}
function model_loaded(){
console.log("model is loaded")
}
function take_snapshot(){
save("AI.png")
}
function draw(){
    image(video,0,0,350,300)
}