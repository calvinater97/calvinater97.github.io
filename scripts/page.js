window.addEventListener('load', (event)=>{
    const lu = document.querySelector("#lastupdated");
    lu.testContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Data().getFullYear();
})