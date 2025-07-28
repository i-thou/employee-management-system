import React from 'react'

const SideNavigation = () => {
  return (
    <div className='h-screen bg-white shadow-xl shadow-gray-100 border p-2 space-y-10 hidden @3xl:flex flex-col'>
      <h1 className='text-xl @3xl:text-4xl'>Emplora</h1>
      <hr />
      <aside>
        <nav className='space-y-5'>
          <a href="/dashboard" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/dashboard.svg" alt="an svg showing a dashboard" />Dashboard</a>
          <a href="/create" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/add.svg" alt="an svg showing a dashboard"  className='size-6'/>Create</a>
          <a href="/employees" className='flex gap-2 items-center text-xl @3xl:text-2xl items-center'><img src="/employees.svg" alt="an svg showing a dashboard" className='size-6'/>All Employees</a>
        </nav>
      </aside>
    </div>
  )
}

export default SideNavigation