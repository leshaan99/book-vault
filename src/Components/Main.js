import React from 'react'

export const Main = () => {
  return (
    <div>
      <div className='header'>
        <div className='row1'>
          <h1>Books Are A Uniquely Portable Magic</h1>
        </div>
        <div className='row2'>
          <h2>Find your book</h2>
          <div className='search'>
            <input type='text' placeholder='Enter Your book name' />
            <button className='search'>Search</button>
          </div>
        </div>
      </div>
      <div className='container'>

      </div>
    </div>
  )
}

export default Main;