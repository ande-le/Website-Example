let changed = false;

buttonClick = () => {
    console.log("Button clicked!");
    if (changed === false){
        document.getElementById("myPicture").src = "./media/baddiekafka.jpeg";
        changed = true;
    }

    else {
        document.getElementById("myPicture").src = "./media/cattemp.jpg";
        changed = false;
    }
}