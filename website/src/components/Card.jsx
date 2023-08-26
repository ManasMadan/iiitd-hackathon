// import React from "react";
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// export default function Card() {
//   return (
//     <div className="bg-white py-6 sm:py-8 lg:py-12">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//         <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
//           Our Services
//         </h2>
//         <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
//           <div className="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
//             <div className="h-2 bg-pink-500" />
//             <div className="flex flex-1 flex-col p-6 pt-8">
//               <div className="mb-12">
//                 <div className="mb-2 text-center text-2xl font-bold text-gray-800">
//                   3D Printing Parts and Modular Automatic Space Assembly
//                 </div>
//                 <p className="mb-8 px-8 text-center text-gray-500">
//                   3D printing allows for the on-demand production of components
//                   using raw materials available in space or brought from Earth.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">Reduced Payload Mass</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">Customization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">Resource Utilization</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       {/* <circle
//                     cx={8}
//                     cy={8}
//                     r={8}
//                     fill="currentColor"
//                     className="text-gray-300"
//                   /> */}
//                       {/* <circle
//                     cx={8}
//                     cy={8}
//                     r={3}
//                     fill="currentColor"
//                     className="text-gray-500"
//                   /> */}
//                     </svg>
//                     {/* <span className="text-gray-600">Comunity support</span> */}
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 {/* <a
//               href="#"
//               className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
//             >
//               $0 / Free
//             </a> */}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500">
//             <div className="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">
//               Popular choice
//             </div>
//             <div className="flex flex-1 flex-col p-6 pt-8">
//               <div className="mb-12">
//                 <div className="mb-2 text-center text-2xl font-bold text-gray-800">
//                   Space based data centres
//                 </div>
//                 <p className="mx-auto mb-8 px-8 text-center text-gray-500">
//                   Avanced feaures for organizations for high safety and
//                   extremely fast data transmission.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">
//                       Maintenance and Upgrades
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">
//                       Linking satellites for long range transmission
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">
//                       Data travel at light speed
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 shrink-0"
//                   fill="none"
//                   viewBox="0 0 16 16"
//                 >
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={8}
//                     fill="currentColor"
//                     className="text-gray-300"
//                   />
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={3}
//                     fill="currentColor"
//                     className="text-gray-500"
//                   />
//                 </svg> */}
//                     {/* <span className="text-gray-600">Data travel at light speed</span> */}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 shrink-0"
//                   fill="none"
//                   viewBox="0 0 16 16"
//                 >
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={8}
//                     fill="currentColor"
//                     className="text-gray-300"
//                   />
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={3}
//                     fill="currentColor"
//                     className="text-gray-500"
//                   />
//                 </svg> */}
//                     {/* <span className="text-gray-600">10 Webhooks</span> */}
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 {/* <a
//               href="#"
//               className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
//             >
//               $19
//             </a> */}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
//             <div className="h-2 bg-gray-800" />
//             <div className="flex flex-1 flex-col p-6 pt-8">
//               <div className="mb-12">
//                 <div className="mb-2 text-center text-2xl font-bold text-gray-800">
//                   Space Advertising
//                 </div>
//                 <p className="mx-auto mb-8 px-8 text-center text-gray-500">
//                   Responsible space exploration and environmental stewardship is
//                   essential to ensure a sustainable and positive future for both
//                   space and advertising industries.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">High-powered lasers </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">Global Visibility</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 shrink-0"
//                       fill="none"
//                       viewBox="0 0 16 16"
//                     >
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={8}
//                         fill="currentColor"
//                         className="text-gray-300"
//                       />
//                       <circle
//                         cx={8}
//                         cy={8}
//                         r={3}
//                         fill="currentColor"
//                         className="text-gray-500"
//                       />
//                     </svg>
//                     <span className="text-gray-600">
//                       Advancements in Technology
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 shrink-0"
//                   fill="none"
//                   viewBox="0 0 16 16"
//                 >
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={8}
//                     fill="currentColor"
//                     className="text-gray-300"
//                   />
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={3}
//                     fill="currentColor"
//                     className="text-gray-500"
//                   />
//                 </svg> */}
//                     {/* <span className="text-gray-600">Email and phone support</span> */}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 shrink-0"
//                   fill="none"
//                   viewBox="0 0 16 16"
//                 >
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={8}
//                     fill="currentColor"
//                     className="text-gray-300"
//                   />
//                   <circle
//                     cx={8}
//                     cy={8}
//                     r={3}
//                     fill="currentColor"
//                     className="text-gray-500"
//                   />
//                 </svg> */}
//                     {/* <span className="text-gray-600">Unlimited Webhooks</span> */}
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-auto">
//                 {/* <a
//               href="#"
//               className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
//             >
//               $49
//             </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const Card = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="services">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Our Services
        </h2>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
            <div className="h-2 bg-pink-500" />
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  3D Printing Parts and Modular Automatic Space Assembly
                </div>
                <p className="mb-8 px-8 text-center text-gray-500">
                  3D printing allows for the on-demand production of components
                  using raw materials available in space or brought from Earth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">Reduced Payload Mass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">Customization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">Resource Utilization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      {/* <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      /> */}
                      {/* <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      /> */}
                    </svg>
                    {/* <span className="text-gray-600">Comunity support</span> */}
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                {/* <a
                  href="#"
                  className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  $0 / Free
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500">
            <div className="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">
              Popular choice
            </div>
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  Space based data centres
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Avanced feaures for organizations for high safety and
                  extremely fast data transmission.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Maintenance and Upgrades
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Linking satellites for long range transmission
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Data travel at light speed
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg> */}
                    {/* <span className="text-gray-600">Data travel at light speed</span> */}
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg> */}
                    {/* <span className="text-gray-600">10 Webhooks</span> */}
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                {/* <a
                  href="#"
                  className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  $19
                </a> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
            <div className="h-2 bg-gray-800" />
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  Space Advertising
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Responsible space exploration and environmental stewardship is
                  essential to ensure a sustainable and positive future for both
                  space and advertising industries.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">High-powered lasers </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">Global Visibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Advancements in Technology
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg> */}
                    {/* <span className="text-gray-600">Email and phone support</span> */}
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <circle
                        cx={8}
                        cy={8}
                        r={8}
                        fill="currentColor"
                        className="text-gray-300"
                      />
                      <circle
                        cx={8}
                        cy={8}
                        r={3}
                        fill="currentColor"
                        className="text-gray-500"
                      />
                    </svg> */}
                    {/* <span className="text-gray-600">Unlimited Webhooks</span> */}
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                {/* <a
                  href="#"
                  className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  $49
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
