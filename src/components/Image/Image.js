const Image = (props) => {

    let imgArr = []

    for (const key in props.data) {
        let champImg = props.data[key].image.full
        // imgArr.push(champImg)
        console.log(champImg)
    }
    
    
    return (
        <div>
            {/* {imgArr.map((img) => {
                return (
                    <div>{img}</div>
                )
            })} */}
        </div>
    )
}
export default Image