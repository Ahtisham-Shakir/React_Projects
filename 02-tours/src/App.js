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

  return (loading ? <Loading /> :
    (<main><Tours tours={tours}/></main>)
  )
}

export default App