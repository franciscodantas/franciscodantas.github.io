var btn = document.querySelector("#btn_in")
var main = document.querySelector(".main")
var footer = document.querySelector(".footer")

btn.addEventListener("click", function(){
    main.style.display = 'flex';
    footer.style.display = 'block';
})