counter = 0

function slideshow(direction){

    var image = document.getElementById("image");

    if(direction == true){
        counter = counter + 1;
    }

    else{
        counter = counter - 1;
    }
    if(counter % 5 == 0){
        image.src = "https://images.unsplash.com/photo-1537457661141-6ff848806272?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950549254131e1ed42c694e2b6d436e8&auto=format&fit=crop&w=1601&q=80";
    }

    else if(counter % 5 == 1){
        image.src = "https://images.unsplash.com/photo-1537504734155-cc0e3dcaa222?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d56ddf96cc3f7058bf43f179417a431d&auto=format&fit=crop&w=634&q=80";
    }

    else if(counter % 5 == 2){
        image.src = "https://images.unsplash.com/photo-1537517812565-2d44597c3eff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38a5865008eb0da603a833b507781973&auto=format&fit=crop&w=500&q=60";
    }

    else if(counter % 5 == 3){
        image.src = "https://images.unsplash.com/photo-1537511734352-1a1b21605f70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b5abec6ab4c6fcce052c1c7be3c538&auto=format&fit=crop&w=634&q=80";
    }

    else{
        image.src = "https://images.unsplash.com/photo-1537464976111-32238740972e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfd24ee1151c895aa8bad12346753cf2&auto=format&fit=crop&w=500&q=60";
    }
}