let o = document.getElementById('option');
let schedule_pd = document.getElementById('schedule-pd');
let schedule_code = document.getElementById('schedule-code');
let b = document.getElementsByTagName('button');
let td = document.getElementById('track-dropdown');

b[0].onclick = function () {

    o.style.display = "block";
}

o.onclick = function() {

    o.style.display = "none";

    if(schedule_pd.style.display === "none") {
        schedule_pd.style.display = "flex"
        schedule_code.style.display = "none";
        b[0].innerHTML = "Product Design";
        o.innerHTML = "Code";
    } else {
        schedule_pd.style.display = "none"
        schedule_code.style.display = "flex";
        b[0].innerHTML = "Code"
        o.innerHTML = "Product Design"
    }

}

td.onmouseleave = function() {
        o.style.display = "none"
}