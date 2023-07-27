import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <section className="text-gray-600 body-font max-w-6xl mx-auto px-5 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 overflow-hidden bg-gray-200 rounded">
        <div className="w-24 h-full bg-red-500"></div>
      </div>
      <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
        <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0">Space The Final Frontier</h1>
        <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
        <div className="h-64 overflow-hidden rounded-lg">
          <Image width={200} height={200} alt="content" className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1621463678038-8fc7b01d13e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">Shooting Stars</h2>
        <p className="mt-2 text-base leading-relaxed">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        
      </div>
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
        <div className="h-64 overflow-hidden rounded-lg">
          <Image width={200} height={200} alt="content" className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1666660165383-0c63c6947e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">The Catalyzer</h2>
        <p className="mt-2 text-base leading-relaxed">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
       
      </div>
      <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
        <div className="h-64 overflow-hidden rounded-lg">
          <Image width={200} height={200} alt="content" className="object-cover object-center w-full h-full" src="https://images.unsplash.com/photo-1619181111792-36c39c41bf54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxjb25zdHJ1Y3Rpb24lMjBtZXRhcmlhbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">The 400 Blows</h2>
        <p className="mt-2 text-base leading-relaxed">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
      
      </div>
    </div>
  </div>
</section>
  )
}

export default Content