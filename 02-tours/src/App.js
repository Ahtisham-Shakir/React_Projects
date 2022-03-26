import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Fetching Tours From api
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      // console.log(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  // using useEffect Hook / (componentDidMount in classes)
  useEffect(() => {
    fetchTours();
  }, []);

  // Funtion to Remove Tour
  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  // When No Tour Left
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tour Left</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  // if loading is not true then show tours component else Loading component
  return (loading ? <Loading /> :
    (<main><Tours tours={tours} removeTour={removeTour} /></main>)
  )
}

export default App