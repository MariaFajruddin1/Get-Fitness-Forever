import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";

const TableChart = () => {
  const [source, setSource] = useState("AllEvents");
  return (
    <Wrapper>
      <p className="xl:w-[900px] mx-auto text-center text-[32px] lg:text-[56px] font-extrabold pt-10 lg:pt-20 text-black">
        FIND THE CLASS THAT SUITS YOU
      </p>
      <p className="mx-auto text-center lg:w-[795px] leading-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. the readable content of a page when looking at its layout.
      </p>
      <div>
        <div className="lg:mx-10 grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 ">
          <div
            className={
              source === "AllEvents"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("AllEvents")}
          >
            All Events
          </div>
          <div
            className={
              source === "KRUNCH-KORE"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("KRUNCH-KORE")}
          >
            KRUNCH & KORE
          </div>
          <div
            className={
              source === "CARDIO"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("CARDIO")}
          >
            CARDIO
          </div>
          <div
            className={
              source === "CROSSFIT"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("CROSSFIT")}
          >
            CROSSFIT
          </div>
          <div
            className={
              source === "OPEN-GYM"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("OPEN-GYM")}
          >
            OPEN GYM
          </div>
          <div
            className={
              source === "TOTAL-BODY"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("TOTAL-BODY")}
          >
            TOTAL BODY
          </div>
          <div
            className={
              source === "YOGA"
                ? "cursor-pointer text-sm font-bold justify-center items-center text-center bg-green px-5 py-4 mt-8 uppercase font-medium duration-500 transform"
                : "cursor-pointer text-sm font-bold justify-center items-center text-center bg-[#EEE] hover:bg-green duration-500 transform px-5 py-4 mt-8 px uppercase font-medium"
            }
            onClick={() => setSource("YOGA")}
          >
            YOGA
          </div>
        </div>
      </div>

      <div className="mt-5 lg:mx-20 justify-center 2xl:w-[1300px] overflow-hidden">
        <table>
          {/* DAYS */}
          <thead className="style={{ overflowX: 'auto', maxWidth: '100%' }}">
            <tr>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-2 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Monday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Tuesday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Wednesday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Thursday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Friday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4]">
                Saturday
              </th>
              <th className="uppercase bg-[#1d1d1d] text-[#FFF] py-4 lg:w-[1/7] md:w-[1/5] sm:w-[1/4] truncate">
                Sunday
              </th>
            </tr>
          </thead>
          {source === "AllEvents" && (
            <tbody className="text-center">
              {/* COLUMN 01 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform px-5 col-span-1 row-span-2"
                  rowSpan={2}
                >
                  KRUNCH & KORE <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4  hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 02 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 03 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  6:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
              </tr>
              {/* COLUMN 04 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  7:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] py-4 "></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  8:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  Cardio
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 07 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  1:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 08 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  2:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  GRASSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 09 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 10 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 11 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  5:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
              </tr>
              {/* COLUMN 12 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  6:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 13 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  7:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 14 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  8:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 15 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  9:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
            </tbody>
          )}

          {source === "KRUNCH-KORE" && (
            <tbody className="text-center">
              {/* COLUMN 01 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform px-5 col-span-1 row-span-2"
                  rowSpan={2}
                >
                  KRUNCH & KORE <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4  hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 02 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 07 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  1:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 08 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  2:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  GRASSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 14 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  8:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 15 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  9:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
            </tbody>
          )}

          {source === "CARDIO" && (
            <tbody className="text-center">
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  8:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  Cardio
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 08 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  2:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  GRASSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 09 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
            </tbody>
          )}

          {source === "CROSSFIT" && (
            <tbody className="text-center">
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 08 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  2:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  GRASSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 09 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 10 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
            </tbody>
          )}

          {source === "OPEN-GYM" && (
            <tbody className="text-center">
              {/* COLUMN 01 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform px-5 col-span-1 row-span-2"
                  rowSpan={2}
                >
                  KRUNCH & KORE <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4  hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 02 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 03 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  6:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 col-span-1 row-span-2"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
              </tr>
              {/* COLUMN 04 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  7:00 am
                </td>
                <td className="border border-[#EEE] text-[12px] py-4 "></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 07 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  1:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 13 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  7:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
              </tr>
            </tbody>
          )}

          {source === "TOTAL-BODY" && (
            <tbody className="text-center">
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 08 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  2:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  GRASSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 09 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
            </tbody>
          )}

          {source === "YOGA" && (
            <tbody className="text-center">
              {/* COLUMN 05 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  11:00 am
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CARDIO
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform">
                  OPEN GYM
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  TOTAL BODY
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"></td>
              </tr>
              {/* COLUMN 06 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  12:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={3}
                >
                  KRUNCH & KORE
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 09 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  3:00 pm
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  CROSSFIT
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
              </tr>
              {/* COLUMN 10 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  4:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
              {/* COLUMN 11 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  5:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td className="border border-[#EEE] text-[12px] font-bold py-4"></td>
                <td
                  className="border border-[#EEE] text-[12px] font-bold py-4 hover:bg-green duration-500 transform"
                  rowSpan={2}
                >
                  yoga
                  <br />
                  <span className="font-medium pt-1">KRUNCH & KORE</span>
                </td>
              </tr>
              {/* COLUMN 12 */}
              <tr>
                <td className="border border-[#EEE] text-[16px] font-normal py-4">
                  6:00 pm
                </td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
                <td className="border border-[#EEE] text-[12px] py-4"></td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </Wrapper>
  );
};

export default TableChart;
