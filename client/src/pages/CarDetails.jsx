import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CarDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const [car, setCar] = React.useState(null);

  useEffect(() => {
    setCar(dummyCarData.find(car=> car._id === id));

  }, [id]);

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button>Back to all cars</button>
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default CarDetails