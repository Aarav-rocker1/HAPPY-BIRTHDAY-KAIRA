function song() {
    document.getElementById("hbdMusic").play();
    document.getElementById("tap").style.display = "none";
    document.getElementById("hbd").style.display = "block";
    document.getElementById("images1").style.display = "block";
    document.getElementById("images2").style.display = "block";
    var i = 0;
    var v = 0;
    if (i==4) {
        i = 0;
        v = 0;
    }
        setTimeout(function next(){
            document.getElementById("images1").src = images[i];
            i++;
        },5000);
        
        setTimeout(function next(){
            document.getElementById("images1").src = images[i];
            i++;
        },10000);
        
        setTimeout(function next(){
            document.getElementById("images1").src = images[i];
            i++;
        },15000);

        setTimeout(function next(){
            document.getElementById("images2").src = images2[v];
            v++;
        },5000);
        
        setTimeout(function next(){
            document.getElementById("images2").src = images2[v];
            v++;
        },10000);
        
        setTimeout(function next(){
            document.getElementById("images2").src = images2[v];
            v++;
        },15000);
}

function load() {
    document.getElementById("hbd").style.display = "none";
    document.getElementById("images1").style.display = "none";
    document.getElementById("images2").style.display = "none";

}

var images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
]

var images2 = [
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
]
