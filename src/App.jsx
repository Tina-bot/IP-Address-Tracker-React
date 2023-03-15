import Header from './components/Header.jsx'
import Map from './components/Map.jsx'
import Info from './components/Info.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [ipInfo, setIpInfo] = useState({
    ip: '8.8.8.8',
    ipCoords: [37.38605, -122.08385],
    location: 'California, US',
    timezone: '-07:00',
    isp: 'Google LLC'
  });

  const handleSubmit = (ip) => {
    setIpInfo((prevState) => ({
      ...prevState,
      ip
    }
    ))
    getIpInfo(ip)
  }

  const getIpInfo = async (ip) => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_SYdWRgtZ6wZIo7zuht2coAZS6lhx9&ipAddress=${ip}`)
    const data = await res.json()

    const isAvailable = data.location.city.length && data.location.timezone.length
    console.log(isAvailable);
    const newIpInfo = {
      ip: data.ip,
      ipCoords: [data.location.lat, data.location.lng],
      location: isAvailable ? `${data.location.city}, ${data.location.region}` : '',
      timezone: data.location.timezone,
      isp: data.isp
    }
    setIpInfo(newIpInfo)
  }


  return (
    <div className="App">
      <Header onSubmit={handleSubmit} />
      <Info ip={ipInfo.ip}
        location={ipInfo.location}
        timezone={ipInfo.timezone}
        isp={ipInfo.isp}
      />
      <Map position={ipInfo.ipCoords} />
    </div>
  )
}

export default App
