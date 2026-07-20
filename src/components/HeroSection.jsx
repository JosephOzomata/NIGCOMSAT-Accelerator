import heroImage from "../images/hero.png";

function Hero (){
   return(
      <section className="bg-[#F7F3EB] min-h-screen">
         <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="grid grid-cols-2 gap-12 items-center">
               {/* ================= LEFT SIDE START ================= */}
               <div>

                  {/* Badge */}
                  <div className="inline-block bg-gray-200 text-blue-600 rounded-full px-4 py-2 mb-6">
                     NigComSat • 20th Anniversary • 2026
                  </div>
                  {/* End Badge */}

                  {/* Heading */}
                 <h1 className="text-7xl font-bold text-blue-600 leading-none mb-6">
                     SpaceFest
                     <br />
                     2026
                 </h1>

                  {/* Description */}
                  <p className="text-xl text-gray-800 leading-9 mb-8">
                     Nigeria's premier university space research showcase,
                     bringing together the next generation of space scientists,
                     engineers, policy leaders and innovators.
                  </p>

                  {/* Buttons Container */}
                  <div className="flex gap-5">
 
                     <button className="bg-blue-600 text-white px-8 py-4 rounded-full">
                       Learn More
                     </button>

                     <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full">
                        View Winners
                     </button>

                  </div>
                  {/* End Buttons Container */}

               </div>
               {/* ================= LEFT SIDE END ================= */}
            
               <div>
                  <img
                     src={heroImage}
                     alt="Space Illustration"
                     className="w-full"
                  />
               </div>

            </div>

            <div className="grid grid-cols-4 gap-6 mt-20">

               {/* Card 1 */}
               <div className="bg-white rounded-2xl p-6 shadow">
                  <h2 className="text-4xl font-bold">1728</h2>
                  <p>Public Votes</p>
               </div>

               {/* Card 2 */}
               <div className="bg-white rounded-2xl p-6 shadow">
                  <h2 className="text-4xl font-bold">2</h2>
                  <p>Research Tracks</p>
               </div>

               {/* Card 3 */}
               <div className="bg-white rounded-2xl p-6 shadow">
                  <h2 className="text-4xl font-bold">3</h2>
                  <p>Finalists</p>
               </div>

               {/* Card 4 */}
               <div className="bg-white rounded-2xl p-6 shadow">
                  <h2 className="text-4xl font-bold">20</h2>
                  <p>Years of Impact</p>
               </div>

            </div>

         </div>

      </section>
   );
}

export default Hero