import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CarDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate()
  const [car, setCar] = React.useState(null);

  

  return (
    <div>
      
    </div>
  )
}

export default CarDetails