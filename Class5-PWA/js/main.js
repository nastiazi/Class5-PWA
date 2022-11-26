var projects = [
    { name: "Audio Tunnel", image: "images/img_1.jpg" },
    { name: "MonsteRow", image: "images/img_2.jpg" },
    { name: "פיזיוקיד", image: "images/img_3.jpg" },
    { name: "קפוץ לקרחון", image: "images/img_4.jpg" },
    { name: " פרטיול", image: "images/img_5.jpg" },
    { name: "מכונת הזמן", image: "images/img_6.jpg" },
    { name: "מכבי באדי", image: "images/img_7.png" },
    { name: "לימפי", image: "images/img_8.png" },
    { name: "לומדה להכשרת עובדי כלביה", image: "images/img_9.png" },
]

function createProjectsList() {
    var output = "";
    for (i = 0; i < projects.length; i++) {
        output += `
        <div class="col">
            <li class="card">
                <img class="bd-placeholder-img card-img-top" src=${projects[i].image} />
                <div class="card-body">
                    <h3 class="card-text">${projects[i].name}</h1>
                    <a class="btn btn-primary d-block" href="#">צפייה</a>
                </div>
            </li>
        </div>
        `
    }
    document.getElementById("projects-list").innerHTML = output
}

document.addEventListener("DOMContentLoaded", function (event) {
    createProjectsList();
});



if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("../service-worker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
