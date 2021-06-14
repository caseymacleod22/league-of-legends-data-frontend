const Champions = (props) => {
const championName = props.data
console.log(championName)

return (
    <div>
        {/* {championName.map((champion) => {
            return (
                <div>
                    {champion}
                </div>
            )
        })} */}
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