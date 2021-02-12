window.addEventListener("load", () => {
    const high = document.querySelector(".high").innerHTML;
    const wind = document.querySelector(".wind").innerHTML;
    const chill = document.querySelector(".chill");

    var windChill = Math.round((35.74 + (0.6215 * high)) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * high * Math.pow(wind, 0.16)));
    chill.textContent = windChill;
});