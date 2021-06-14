const Champions = (props) => {
const championName = []
for (let i in props.data) {
    championName.push([i, props.data [i]])
}

return (
    <div>
        {championName.map((champion) => {
            return (
                <div>{champion.name}</div>
            )
        })}
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