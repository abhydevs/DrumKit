// document.querySelectorAll("button").addEventListener("click",handleclick);


for(var i=0; i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){;

    var letter= this.innerHTML;
    
    makesound(letter);
    animation(letter);;
 });

}

function makesound(key)
{
    switch (key) 
    {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
    
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            console.log("hello")
            break;
    }
}

document.addEventListener("keydown", function(event){
    makesound(event.key);
    animation(event.key);
});

function animation(currentkey)
{
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    activebutton.style.color="white";

    setTimeout(function()
    {
    activebutton.classList.remove("pressed");
    activebutton.style.color="#da0463";
    },100);
}
   

    