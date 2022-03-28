import React,{useState, useEffect} from 'react'

function Weather() {
const [search, setSearch] = useState(null)
const [city, setCity] = useState("")
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6ecc2e9bea000ead5e8e73e067429bfb`).then((resp)=>{
      resp.json().then((result)=>{
        setCity(result.main)
      })
    })
  }, [search])

  return (
    <div className = "container-fluid">
      <div className = "inner-container">
        <input className="input-style" type = "search" placeholder = "Search City Name"
        value={search} onChange ={(e)=>{setSearch(e.target.value)}}/>

        {!city ? <p>No Data Available</p> :
          <>
          <div className= "searchdata">
          <br/>
          {search}
          </div>

          <div>
          <br/><br/>
          <h4>{city.temp}</h4>
          <p>Min : {city.temp_min}, Max : {city.temp_max}</p>
          </div>
          </>
        }

      </div>
    </div>
  )
}
export default Weather
