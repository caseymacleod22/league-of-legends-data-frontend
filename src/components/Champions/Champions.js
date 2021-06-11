const Champions = (props) => {
const championName = Object.keys(props.data)
console.log(championName)

return (
    <div>
        {championName.map((champion) => {
            return (
                <div>
                    {champion}
                </div>
            )
        })}
    </div>
)
}

export default Champions