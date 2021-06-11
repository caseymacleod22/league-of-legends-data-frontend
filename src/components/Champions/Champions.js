const Champions = (props) => {
    for (const [key, value] of Object.entries(props.data)) {
        console.log(`${key}: ${value}}`)
    }
    return (
        <div>
            TEST
        </div>
    )
}

export default Champions