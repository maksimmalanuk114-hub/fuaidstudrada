var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];


if (img) {

    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    
    span.onclick = function() {
      modal.style.display = "none";
    }


    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
