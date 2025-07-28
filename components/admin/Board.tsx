import React from 'react'

const Board = () => {
  return (
      <div className='flex flex-col @3xl:flex-row gap-2 text-white'>
          <div className='w-full h-50 rounded-2xl bg-red-600 space-y-2 p-2'>
            <div className='size-20 rounded-full shadow-xl shadow-red-700'></div>
            <p>total</p>
            <p className='text-xl font-bold @3xl:text-2xl'>Employees</p>
          </div>
          <div className='w-full h-50 rounded-2xl bg-green-600 p-2'>
            <div className='size-20 rounded-full shadow-xl shadow-green-700'></div>
            <p>total</p>
            <p className='text-xl font-bold @3xl:text-2xl'>Employees</p>
          </div>
      <div className='w-full h-50 rounded-2xl bg-blue-600 p-2'>
        <div className='size-20 rounded-full shadow-xl shadow-blue-700'></div>
            <p>total</p>
            <p className='text-xl font-bold @3xl:text-2xl'>Employees</p>
          </div>
    </div>
  )
}

export default Board