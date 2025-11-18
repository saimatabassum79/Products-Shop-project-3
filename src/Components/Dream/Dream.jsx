import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Dream = () => {
  return (
    <div className="flex items-center gap-10">
      <div className=" w-[300px] px-20 container">
        <h1 className="text-[#560CE3] font-medium">Dream Your Next Trip</h1>
        <p className="text-3xl font-bold text-">
          discover when even you want to go
        </p>
        <p>
          Whether you’re looking for a romantic getawaamily-friendly solo
          journey to explore the world, a travel agency can provide tailored
          itinerary that exceeds your expectations.
        </p>
       <div className="flex items-center gap-3 "> <p className="text-2xl"><IoLocationOutline /> </p>
       <div>
        <h1 className="text-1xl" >Best Travel Agency</h1>
        <p>e you tired of the typical tourist destinatio and looking step out of your comfort</p>
       </div>
       </div>
      </div>
      <div>
        <img className="w-200 rounded-md" src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Dream;
