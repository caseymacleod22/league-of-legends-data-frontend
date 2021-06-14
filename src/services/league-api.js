export function getChampionData() {
    const info = fetch ('http://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/champion.json')
    return (info)
    .then(res => res.json())
}