import {useState, useEffect} from 'react';

import { copy, linkIcon, loader, tick } from '../assets';

const Summary = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/*search*/}
      <div className="flex flex-col w-ful gap-2">
        <form action="" className="relative flex justify-center items-center"
          onSubmit={() => {

          }}
        >
          <img src={linkIcon} alt="link-icon" 
          className='absolute left-0 my-2 ml-3 w-5'/>

          <input 
            type="text" 
            placeholder='Paste or Enter url'
            value=''
            onChange={() => {}}
            required
            className='url_input peer-focus:border-gray-700 peer-focus:text-gray-700'
          />

          <button
            //no need for submit attribute since the button is inside a form
            className='submit_btn'
          >
            Enter
          </button>
        </form>

        {/*Browse url history */}
      </div>

      {/*display Results */}
    </section>
  )
}

export default Summary