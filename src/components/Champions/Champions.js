const Champions = (props) => {
    let championArr = []

    for (const key in props.data) {
        let champion = props.data[key].name
        championArr.push(champion)
    }

    return (
        <div id='championnames'>
            {championArr.map((champ) => {
                return (
                <div>
                    <div>
                        <a href="">{champ}</a> 
                    </div>
                </div>
                )
            })}
        </div>
    )

    // const champion = Object.keys(props.data)
    // console.log(champion)



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