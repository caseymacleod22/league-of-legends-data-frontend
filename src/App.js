import { useEffect, useState} from 'react'
import './App.css';
import { getChampionData } from './services/league-api';

function App() {

  const [appdata, setAppData] = useState([])

  async function getAppData() {
    const data = await getChampionData()
    setAppData(data.data)
    console.log(data)
  }

  useEffect(() => {
    getAppData()
  }, [])

  return (
    <h1>League of Legends</h1>
  )
}

export default App;
