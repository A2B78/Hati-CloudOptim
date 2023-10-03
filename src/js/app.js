import '../scss/app.scss';


function loadServer(i) {
    
    let template = document.querySelector('#server-template');

    let servers = document.querySelector('.server-list');

    let clone = document.importNode(template.content, true);

    clone.querySelector('.server-name').textContent = `cloud` + i;

    for (let elm of clone.querySelectorAll('.server')) {
        const cpuUsage = Math.floor(Math.random() * 100);
        const memoryUsage = Math.floor(Math.random() * 100);
        elm.querySelector('.server-cpuUsage').textContent = `CPU utilisé : ${cpuUsage}%`;
        elm.querySelector('.server-memoryUsage').textContent = `Mémoire utilisée : ${memoryUsage}%`;
    }

    let button = clone.querySelector('.favorite-button');
    button.addEventListener('click', function () {
        alert("Le serveur a été ajouté au favoris");
        button.classList.add('enabled');
    });

    servers.appendChild(clone);
}

function refreshServerData() {
    const serverElements = document.querySelectorAll('.server');
    serverElements.forEach(function (serverElement) {
        const cpuElement = serverElement.querySelector('.server-cpuUsage');
        const memoryElement = serverElement.querySelector('.server-memoryUsage');

        const newCPUPercentage = Math.floor(Math.random() * 100);
        const newMemoryPercentage = Math.floor(Math.random() * 100);

        cpuElement.textContent = `CPU utilisé : ${newCPUPercentage}%`;
        memoryElement.textContent = `Mémoire utilisée : ${newMemoryPercentage}%`;
    });
}

// document.getElementById('refresh-buttonT').addEventListener('click', function () {
//     refreshServerData();
// });
// document.getElementById('refresh-buttonB').addEventListener('click', function () {
//     refreshServerData();
// });
function addRefreshListener(buttonId) {
    document.getElementById(buttonId).addEventListener('click', refreshServerData);
  }
  
  addRefreshListener('refresh-buttonT');
  addRefreshListener('refresh-buttonB');
for (let i = 0; i < 9; i++) {
    loadServer(i);
}
