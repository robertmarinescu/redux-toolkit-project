import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import { addCustomer } from '../features/customerSlice'

interface ReservationCardTypes {
  name: string
  index: number
}

function ReservationCard({ name, index }: ReservationCardTypes) {

  const dispatch = useDispatch()

  const handleAddCustomer = () => {
    dispatch(removeReservation(index))
    dispatch(addCustomer(name))
  }

  return (
    <div onClick={handleAddCustomer} className='reservation-card-container'>{name}</div>
  )
}

export default ReservationCard
