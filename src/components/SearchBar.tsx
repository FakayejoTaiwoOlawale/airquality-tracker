import React from 'react'
import { AQIData } from '../types/aqi'

const SearchBar = (data:AQIData[]) => {
  return (
    <div>
        <input type="search" name="searchbar" id="" className='w-4xl' data={data}/>
    </div>
  )
}

export default SearchBar