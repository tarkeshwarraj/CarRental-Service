import React from 'react'

const CarCard = ({car}) => {
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>
        <div>
            <img src={car.image} alt={car.name} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
            {car.isAvailable && <p className='absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}
        </div>

        <div className='p-4'>
            </div>        
    </div>
  )
}

export default CarCard