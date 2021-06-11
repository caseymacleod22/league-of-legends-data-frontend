const Champions = (props) => {
    for (const [key, value] of Object.entries(props.data)) {
        console.log(`${key}: ${value}}`)
    }
}

export default Champions