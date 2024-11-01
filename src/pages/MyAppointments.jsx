import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const MyAppointments = () => {
  const { appointments, cancelAppointment } = useContext(AppContext);

  return (
    <div className="px-8 pt-8 transition-all delay-700 duration-700 ease-in-out">
      <h2 className="text-2xl font-medium text-gray-500 mb-6">My appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((p) => (
          <div
            key={p.id}
            className="flex flex-col md:flex-row items-center md:items-start border-b border-gray-200 pb-6 mb-6 md:space-x-4 transition-all delay-700 duration-700 ease-in-out"
          >
            {/* Doctor Image */}
            <img
              src={p.image}
              className="md:w-36  md:h-36  rounded-md object-cover bg-blue-100 mb-4 md:mb-0"
              alt={`${p.name}'s profile`}
            />

            {/* Doctor Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.speciality}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Address: </span>
                {p.address.line1}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold"> Date & Time: </span>
               {p.date} | {p.time}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex  md:flex-col  gap-2 mt-4 md:mt-0">
              <button className ="px-1 py-2 md:w-52 w-44 border rounded-md text-gray-600 border-gray-300 hover:bg-gray-100">
                Pay Online
              </button>
              <button
                onClick={() => cancelAppointment(p.id)}
                className="px-1 py-2 md:w-52 w-44  border rounded-md text-red-500 border-red-300 hover:bg-red-50"
              >
                Cancel appointment
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No appointments to show</p>
      )}
    </div>
  );
};

export default MyAppointments;
