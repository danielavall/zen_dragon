function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    if (firstName === '' || lastName === '' || gender === '' || address === '' || email === '') {
        alert('Semua kolom harus diisi.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Email tidak valid.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var dropdownState = 0;

function dropdown(){
    var dropdownList = document.getElementById("dropdown-menu");

    if(dropdownState == 1){
        dropdownList.style.display = "block";
        dropdownState = 0;
    }else{
        dropdownList.style.display = "none";
        dropdownState = 1;
    }
}

var pos_char = 0;
var i = 0;

function toggleSlide(num){
    console.log(pos_char);
    var curr_char = document.getElementById("char-slide-curr");

    if(pos_char == -4285){
        console.log("Max");
    }else{
        pos_char += num;
        curr_char.style.marginTop = pos_char+"px";
    }
}

document.querySelectorAll('.photo-container img').forEach(photo => {
    photo.addEventListener('click', function() {
        this.classList.remove('shake');
        this.style.filter = 'blur(0)';
        this.nextElementSibling.style.display = 'flex';
    });
});

var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: 'U9DIsxT3cfY', 
                playerVars: {
                    'autoplay': 1,
                    'loop': 0, 
                    'controls': 0, 
                },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.ENDED) {
                window.location.href = 'isleBarksNext1.html';
            }
        }