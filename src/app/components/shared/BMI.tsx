// "use client";

// import React, { useState } from "react";
// import Wrapper from "../shared/Wrapper";

// const BMI = () => {
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectActivity, setSelectActivity] = useState("");

//   const handleSelect = (gender: any) => {
//     setSelectedGender(gender);
//     setOpen(false);
//   };

//   const handleSelect1 = (activity: any) => {
//     setSelectActivity(activity);
//     setOpen1(false);
//   };
//   return (
//     <Wrapper>
//       <div className="w-[350px] ml:w-[380px] md:w-[100%]">
//         <p className="text-center text-3xl lg:text-5xl mt-32 font-semibold text-black">
//           What is BMI.
//         </p>
//         <p className="mx-auto text-center text:lg md:text-xl  md:leading-8 mt-5 md:mt-10">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its page when at its layout
//         </p>
//         <div className="lg:flex bg-[#FFF] gap-6 md:mx-10">
//           {/* Left side */}
//           <div className="w-[90%] xl:w-[50%] mt-5 md:mt-10">
//             <div className="md:flex gap-5">
//               <input
//                 className="sm:w-[340px] ml:w-[380px] md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
//                 placeholder="Height / Inch"
//                 type="text"
//               />
//               <input
//                 className="sm:w-[340px] ml:w-[380px] md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
//                 placeholder="Weight / lbs"
//                 type="text"
//               />
//             </div>

//             <div className="md:flex gap-5">
//               <input
//                 className="sm:w-[340px] ml:w-[380px] md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
//                 placeholder="Age"
//                 type="text"
//               />

//               <div className="relative inline-block text-left">
//                 <button
//                   onClick={() => setOpen(!open)}
//                   type="button"
//                   className="inline-flex justify-between items-center mx-auto md:mx-0 sm:w-[340px] ml:w-[380px] md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green"
//                 >
//                   {selectedGender || "Select Gender"}
//                   <svg
//                     className={`ml-2 w-5 h-5 ${
//                       open ? "transform rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   </svg>
//                 </button>
//                 {open && (
//                   <div className="absolute z-10 mt-2 w-[300px] shadow-lg ring-1 ring-black ring-opacity-5">
//                     <ul className="py-1 bg-[#f5f5f5]">
//                       <li
//                         onClick={() => handleSelect("Male")}
//                         className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                       >
//                         Male
//                       </li>
//                       <li
//                         onClick={() => handleSelect("Female")}
//                         className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                       >
//                         Female
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="relative inline-block text-left">
//               <button
//                 onClick={() => setOpen1(!open1)}
//                 type="button"
//                 className="inline-flex justify-between items-center mx-auto md:mx-0 w-[117%] sm:w-[340px] ml:w-[380px] md:w-[620px] lg:w-[190%] xl:w-[620px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green"
//               >
//                 {selectActivity || "Select an activity factor:"}
//                 <svg
//                   className={`ml-2 w-5 h-5 ${
//                     open1 ? "transform rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M19 9l-7 7-7-7"
//                   ></path>
//                 </svg>
//               </button>
//               {open1 && (
//                 <div className="absolute z-10 mt-2  shadow-lg ring-1 ring-black ring-opacity-5">
//                   <ul className="py-1 bg-[#f5f5f5] ml:w-[390px] md:w-[620px]">
//                     <li
//                       onClick={() =>
//                         handleSelect1("Little or no Exercise / desk job")
//                       }
//                       className="flex justify-start px-1 md:px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                     >
//                       Little or no Exercise / desk job
//                     </li>
//                     <li
//                       onClick={() =>
//                         handleSelect1(
//                           "Light exercise / sports 1 - 3 days/ week"
//                         )
//                       }
//                       className="flex justify-start px-1 md:px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                     >
//                       Light exercise / sports 1 - 3 days/ week
//                     </li>
//                     <li
//                       onClick={() =>
//                         handleSelect1(
//                           "Moderate exercise, sports 3 - 5 days/ week"
//                         )
//                       }
//                       className="flex justify-start px-1 md:px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                     >
//                       Moderate exercise, sports 3 - 5 days/ week
//                     </li>
//                     <li
//                       onClick={() =>
//                         handleSelect1(
//                           "Heavy Exercise / sports 6 - 7 days/ week"
//                         )
//                       }
//                       className="flex justify-start px-1 md:px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                     >
//                       Heavy Exercise / sports 6 - 7 days/ week
//                     </li>
//                     <li
//                       onClick={() =>
//                         handleSelect1(
//                           "Very heavy exercise / physical job / training 2 x / day"
//                         )
//                       }
//                       className="flex justify-start px-1 md:px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
//                     >
//                       Very heavy exercise / physical job / training 2 x / day
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <div className="group flex gap-6 justify-center items-center bg-green w-[180px] py-4 mt-8 uppercase font-medium font-[Heebo] text-[#1D1D1D] hover:bg-black hover:text-white">
//               <div>Calculate</div>
//               <div className="w-2 h-2 bg-black rounded-full group-hover:bg-white"></div>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="w-[100%]  lg:w-[650px] h-[340px] mt-10">
//             <div>
//               <table>
//                 <thead className="text-center">
//                   <tr>
//                     <th className="border border-[#EEE] border-t-0 border-l-0 py-4 px-10 md:px-28 uppercase">
//                       Bmi
//                     </th>
//                     <th className="border border-[#EEE] border-t-0 border-r-0 px-10 md:px-24 uppercase">
//                       Weight Status
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-center">
//                   <tr>
//                     <td className="border border-[#EEE] border-l-0 py-5">
//                       Below 18.5
//                     </td>
//                     <td className="border border-[#EEE] border-r-0">
//                       Underweight
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-[#EEE] border-l-0 py-5">
//                       18.5 - 24.9
//                     </td>
//                     <td className="border border-[#EEE] border-r-0">Healthy</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-[#EEE] border-l-0 py-5">
//                       25.0 - 29.9
//                     </td>
//                     <td className="border border-[#EEE] border-r-0">
//                       Overweight
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="border border-[#EEE] border-l-0 py-5">
//                       30.0 - and Above
//                     </td>
//                     <td className="border border-[#EEE] border-r-0">Obese</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default BMI;



import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [bmi, setBmi] = useState<string | null>(null);


  const calculateBMI = () => {
    if (!age || !height || !weight || !gender) {
      setModalMessage("All fields are required!");
      setModalVisible(true);
      return;
    }

    const calculatedBMI = Number(weight) / ((Number(height) / 100) ** 2);
    setBmi(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) setResult("Underweight");
    else if (calculatedBMI <= 24.9) setResult("Healthy");
    else if (calculatedBMI <= 29.9) setResult("Overweight");
    else if (calculatedBMI <= 34.9) setResult("Obese");
    else setResult("Extremely obese");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your age"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                className="border-gray-300"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
                className="border-gray-300"
              />
              <span>Female</span>
            </label>
          </div>

          <div>
            <label className="block text-gray-700">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your height"
            />
          </div>

          <div>
            <label className="block text-gray-700">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter your weight"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Calculate BMI
          </button>
        </div>

        {bmi && (
          <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded">
            <p className="text-lg font-bold">Your BMI is: {bmi}</p>
            <p className="text-gray-700">You are: {result}</p>
          </div>
        )}
      </div>

      {modalVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setModalVisible(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-700">{modalMessage}</p>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
