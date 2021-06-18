import Title from '../Title/Title'

const Champions = (props) => {
    let championArr = []

    for (const key in props.data) {
        let champion = props.data[key].name
        championArr.push(champion)
    }
        // console.log(championArr)

    return (
        <div id='championnames'>
            {championArr.map((champ) => {
                return (
                <div>
                    <div>{champ} </div>
                    <Title/>
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