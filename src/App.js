import { useEffect, useState} from 'react'
import './App.css';
import { getChampionData } from './services/league-api';
import Champions from './components/Champions/Champions'
// import Title from './components/Title/Title'

function App() {

  const [appData, setAppData] = useState([])

  async function getAppData() {
    const data = await getChampionData()
    setAppData(data.data)
    // console.log(data)
  }

  useEffect(() => {
    getAppData()
  }, [])

  return (
    <div>
      <h1>League of Legends</h1>
      <div>
        <Champions data={appData}/>
        {/* <Title data={appData} /> */}
      </div>
    </div>
  )
}

export default App;
