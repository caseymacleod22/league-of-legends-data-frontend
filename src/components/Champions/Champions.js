const Champions = (props) => {
    const champion = Object.keys(props.data)
    console.log(champion)

    return (
        <div>
            {champion.map((champs) => {
                return (
                    <div>{champs}</div>
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