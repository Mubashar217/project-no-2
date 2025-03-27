import React from 'react'

function Header(props) {
  return (
  <div>

<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-1 gap-4 mb-4">
       <h1 className='text-center font-bold  text-4xl text-grey-9 00'>The Quran Academy </h1>
      </div>
      <div className="flex items-center justify-center h-90 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
         <img src="22.gif" alt="Image 4" className="w-1200 h-full"/>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="111.png" alt="Image 5" className="w-140 h-full"/>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="112.png" alt="Image 6" className="w-140 h-full"/>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="113.png" alt="Image 7" className="w-140 h-full"/>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="114.png" alt="Image 8" className="w-140 h-full"/>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
         <img src="330.gif" alt="Image 9" className="w-1200 h-full"/>
      </div>
      <div className="grid grid-cols-2 gap-4">
        
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="3.jpg" alt="Image 12" className="w-140 h-full"/>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <img src="334.gif" alt="Image 13" className="w-140 h-full"/>
         </div>
      </div>
   </div>
</div>


  </div>
  )
}

export default Header;