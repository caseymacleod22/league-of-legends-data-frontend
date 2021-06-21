const Champions = (props) => {
    let championArr = []
    let titleArr = []

    for (const key in props.data) {
        let champion = props.data[key].name
        championArr.push(champion)
    }

    for (const key in props.data) {
        let champTitle = props.data[key].title
        titleArr.push(champTitle)
    }
        // console.log(championArr)
        console.log(titleArr)

    return (
        <div id='championnames'>
            {championArr.map((champ) => {
                return (
                <div>
                    <div>{champ} </div>
                </div>
                )
            })}
            <div>
                {titleArr.map((t) => {
                    return (
                        <div>{t}</div>
                    )
                })}
            </div>
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