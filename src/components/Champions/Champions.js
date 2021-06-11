const Champions = (props) => {
    const map = new Map(Object.entries(props.data).forEach(([value]) => console.log(`${value}`)
    ))
    return (
        <div>
            {map}
        </div>
    )
}


export default Champions