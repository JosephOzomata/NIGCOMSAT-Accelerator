import React from 'react'

const AboutSpaceFest = () => {
  return (
    <>
      <div className='w-full'>
            <div className='w-full flex items-center justify-center'>
                <p className="text-6xl font-semibold">About Spacefest </p>
            </div>
        <div className='w-full p-8 grid grid-cols-2 gap-12 mt-6'>
            <div className='w-full text-4xl text-gray-800'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio iste, dolor repudiandae alias debitis repellat minima distinctio aliquid voluptatem vero consequatur fuga officiis explicabo, dolorum ipsam soluta neque. Iste dolorum commodi quae eaque ex?
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbQ6nYQ2mTXnl3UGALrW-UPhdm-gt4wVlkU3mfdXOBw&s=10" className='w-full rounded-2xl darkness-150' alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutSpaceFest
