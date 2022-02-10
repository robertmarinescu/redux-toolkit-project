import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice'

function App() {

  const reservations = useSelector((state: RootState) => state.reservations.value)
  const [reservationNameInput, setReservationNameInput] = useState('')

  const dispatch = useDispatch()

  // const handleSetReservationNameInput = (event: any) => {
  //   setReservationNameInput(event.target.value)
  // }

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className="App">

      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, idx) => <ReservationCard key={idx} name={name} />)}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>

        <div className='customer-food-container'>
          <div className='customer-food-card-container'>
            <p>Rebecca Ionescu</p>
            <div className='customer-foods-container'>
              <div className='customer-food-container'></div>
              <div className='customer-food-input-container'>
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
