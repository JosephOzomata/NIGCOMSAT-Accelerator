import React from 'react'

const Portfolio = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen mt-50">
            <h1 className="text-4xl font-bold text-center">Portfolio</h1>
            <div className="w-full  flex items-center justify-center mt-8">
                <div className='w-[60%]  grid grid-cols-3 gap-4 text-center'>
                    <p className="text-lg font-semibold border-b-2 border-b-black">Cohort 1</p>
                    <p className="text-lg font-semibold border-b-2 border-b-black">Cohort 2</p>
                    <p className="text-lg font-semibold border-b-2 border-b-black">Cohort 3</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
                <div className="bg-gray-200 h-64 flex items-center justify-center">

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
