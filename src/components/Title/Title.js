const Title = (props) => {
    let titleArr = []
    
    for (const key in props.data) {
        let champTitle = props.data[key].title
        titleArr.push(champTitle)
        // console.log(champTitle)
    }
    
    return (
        <div id='championtitle'>
            {titleArr.map((t) => {
                return (
                    <div>
                        {t}
                    </div>
                )
            })}
        </div>
    )
    }
    
    export default Title