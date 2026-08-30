import React from 'react'

const Bbody = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-20 max-w-7xl mx-auto gap-10 px-4">
      <div className="flex-1 space-y-8">
        <p className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Authentic Nepal Cricket Jersey
        </p>
        <p className="text-base lg:text-xl leading-8 text-slate-900 max-w-2xl">
          The Nepal National Team jersey tells a story of pride, passion, and relentless grit. Inspired by Nepal’s journey from humble beginnings to the world stage, the red, blue, and white, marked with "Chandra" and "Surya" on the shoulders symbolizes the weight of a nation carried by its players. Nepal at the center reflects the heartbeat of fans who cheer from the heart. Powered by T-10’s cutting-edge "Actiwick technology", this jersey isn’t just worn. It’s lived.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end gap-3">
          <div className="uppercase tracking-[0.2em] text-sm text-slate-500">starting at</div>
          <div className="font-bold text-4xl sm:text-5xl text-orange-500">Rs. 1,199</div>
        </div>
        <button type="button" className="bg-orange-500 px-8 py-4 text-2xl font-semibold text-white rounded-2xl shadow-lg">
          Shop now
        </button>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end items-center">
        <img src="/jersey.webp" alt="Nepal cricket jersey" className="max-w-full h-auto rounded-3xl shadow-2xl" />
      </div>
    </div>
  )
}

export default Bbody