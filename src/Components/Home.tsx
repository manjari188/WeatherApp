import Search from "./Search";
import { useState } from 'react'
import axios from 'axios'


function Home() {

    const [resultName, setResultName] = useState<string>('');
    const [resultMinTemp, setResultMinTemp] = useState<string>('');
    const [resultMaxTemp, setResultMaxTemp] = useState<string>('');
    const [resultCurrentTemp, setResultCurrentTemp] = useState<string>('');
    const [feelsLike, setFeelsLike] = useState<string>('');
    const [resultIcon, setResultIcon] = useState<string>('');
    const [resultHumidity, setResultHumidity] = useState<string>('');
    const [resultPressure, setResultPressure] = useState<string>('');

    const handleSearch = async (searchTerm: string) => {
        const locationDetail = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        const weatherDetail = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationDetail.data[0].lat}&lon=${locationDetail.data[0].lon}&appid=${import.meta.env.VITE_REACT_APP_API_KEY}&units=metric`);
        setResultName(weatherDetail.data.name);
        setResultMinTemp(weatherDetail.data.main.temp_min);
        setResultMaxTemp(weatherDetail.data.main.temp_max);
        setResultCurrentTemp(weatherDetail.data.main.temp);
        setFeelsLike(weatherDetail.data.main.feels_like + '°C. ' + weatherDetail.data.weather[0].description + '.');
        setResultIcon(weatherDetail.data.weather[0].icon);
        setResultHumidity(weatherDetail.data.main.humidity);
        setResultPressure(weatherDetail.data.main.pressure);
    }

    return (
        <><Search handleSearch={handleSearch}></Search>
            <div className='temp-dashboard'>
                <h1>{resultName}</h1>
                {resultCurrentTemp && <div className='temp-result'>
                    <div className='temp-current'>
                        <h5 className='temp-current-val'>
                            <img src={`https://openweathermap.org/img/wn/${resultIcon}.png`} />
                            <span className='temp-current-text'>{resultCurrentTemp}°C</span></h5>
                        <h5 className='temp-current-feels'>Feels like {feelsLike}</h5>
                        <div className='temp-val-other'>
                            <div>
                                <span>Min: {resultMinTemp}°C</span>
                            </div>
                            <div>
                                <span>Max: {resultMaxTemp}°C</span>
                            </div>
                            <div>
                                <span>Humidity: {resultHumidity}%</span>
                            </div>
                            <div>
                                <span>Pressure: {resultPressure}hPa</span>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default Home;