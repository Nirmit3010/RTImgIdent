//https://teachablemachine.withgoogle.com/models/fgJau2n1Q/
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fgJau2n1Q/model.json", modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotResult(error, results){
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("guess_span").innerHTML=results[0].label;
        document.getElementById("accu_span").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
        if (results[0].label=="Water Bottle"){
            document.getElementById("update_emoji").innerHTML= "&#129482;";
        }
        else if (results[0].label=="Phone"){
            document.getElementById("update_emoji").innerHTML="&#128241;";
        }
        
        else if (results[0].label=="Spoon"){
            document.getElementById("update_emoji").innerHTML="&#129348;";
        }
        else if (results[0].label=="Watch"){
            document.getElementById("update_emoji").innerHTML="&#8986;";
        }
    }
}