import '../scss/app.scss';


const favoriteButtons = document.querySelectorAll('.favorite-button');


const favoriteServers = [];


function updateFavoriteList() {
    const serverList = document.querySelector('.server-list');

    serverList.innerHTML = `
    <span>${server.name}</span>
    <span>Status: ${server.status}</span>
    <span>CPU Usage: ${server.cpuUsage}</span>
    <span>Memory Usage: ${server.memoryUsage}</span>
`;

    favoriteServers.forEach((server) => {
        serverList.appendChild(server);
    });
}

function handleFavoriteButtonClick(event) {
    const server = event.target.closest('.server');

    if (server) {
        const isFavorite = favoriteServers.includes(server);

        if (isFavorite) {
            favoriteServers.splice(favoriteServers.indexOf(server), 1);
            event.target.textContent = 'Favoris';
            event.target.classList.remove('favorited');
        } else {
            
            favoriteServers.push(server);
            event.target.textContent = 'Favorisé';
            event.target.classList.add('favorited');
        }


        updateFavoriteList();
    }
    alert(`${server.querySelector('h2').textContent} a été marqué comme favori!`);
}
favoriteButtons.forEach((button) => {
    button.addEventListener('click', handleFavoriteButtonClick);
});
const refreshButton = document.getElementById('refresh-button');


function refreshServerStatus() {

    const serverList = document.querySelector('.server-list');
    serverList.innerHTML = '';

    const serverData = [
        { name: 'Serveur 1', status: 'En ligne', cpu: '15%', memory: '30%' },
        { name: 'Serveur 2', status: 'Hors ligne', cpu: '0%', memory: '5%' },
        { name: 'Serveur 3', status: 'En ligne', cpu: '15%', memory: '20%' },
        { name: 'Serveur 4', status: 'En ligne', cpu: '15%', memory: '40%' }
    ];

    serverData.forEach((serverInfo) => {
        const serverElement = document.createElement('div');
        serverElement.classList.add('server');

        serverElement.innerHTML = `
            <h2>${serverInfo.name}</h2>
            <p>Statut : ${serverInfo.status}</p>
            <p>CPU utilisé : ${serverInfo.cpu}</p>
            <p>Mémoire utilisée : ${serverInfo.memory}</p>
            <button class="favorite-button">Favoris</button>
        `;

        serverList.appendChild(serverElement);
    });

    alert('L\'état des serveurs a été actualisé.');
}

refreshButton.addEventListener('click', refreshServerStatus);