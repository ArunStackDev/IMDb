import React from 'react'

function Pages({currPage, pagedecrement, pageincrement}) {
  return (
    <div className="flex justify-center items-center gap-10 mt-10 mb-5 bg-gray-500/80 w-1/8 rounded-full p-3 text-white mx-auto">
       <i className="fa-solid fa-backward-step hover:text-gray-900 font-bold cursor-pointer" onClick={pagedecrement}></i>
       <span className=" text-black ">{currPage}</span>
       <i className="fa-solid fa-forward-step hover:text-gray-900 font-bold cursor-pointer" onClick={pageincrement}></i>
    </div>
  )
}

export default Pages