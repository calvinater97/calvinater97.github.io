window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};
})
window.addEventListener("load", (event)=>{
    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})
function displayDate() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var myDate = document.getElementById("date");
    myDate.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
    myDate.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
}
displayDate();