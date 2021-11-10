function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/v5Si4JcE9/.json', modelReady);
    }
    
    function modelReady()
    {
    classifier.classify(gotResults);    
    }
    
    function gotResults(error,results){
    console.log('Got Result');    
    }