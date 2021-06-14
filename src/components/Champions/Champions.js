const Champions = (props) => {
const championName = []
for (let i in props.data) {
    championName.push([i, props.data [i]])
}
const champion = championName[75][1]['name']
console.log(championName[75][1]['name'])

return (
    <div>
        {champion}
    </div>
)
}

// const Champions = (props) => {
//     const champion = JSON.parse(props.data)
//     console.log(champion)

//     return (
//         <div>

//         </div>
//     )
// }

export default Champions