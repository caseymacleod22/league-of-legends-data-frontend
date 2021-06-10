export function getChampionData() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/champion.json')
    .then(res => res.json())
}