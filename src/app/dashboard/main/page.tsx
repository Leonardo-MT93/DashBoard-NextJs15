import { WidgetsGrid} from '@/components';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Main Dashboard',
  description: 'Main Dashboard',
}

export default function MainPage () {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-gray-500 text-xl'>Informacion General</span>
      <WidgetsGrid />
    </div>
  )
}
