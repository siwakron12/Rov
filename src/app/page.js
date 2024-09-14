"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  let [team, setTeam] = useState([])
  useEffect(() => {
    getData()
  }, [])
 
  async function getData() {
    try {
      let res = await fetch("https://sheetdb.io/api/v1/am9zly65p4p4t")
      let data = await res.json()
      setTeam(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  return (<div className=''>
    <div className="max-w-[1580px] mx-auto">
      <nav className="relative w-full bg-red-500 h-[280px] md:h-[450px] sm:h-[400px] rounded-b-3xl border-b-2 shadow-2xl">
        <Image
          className=" z-0 rounded-b-3xl object-cover"
          src="/rovHD.png"
          alt="คำอธิบายรูปภาพ"
          layout="fill"
          objectFit="cover"
        />
        <div className='p-3 rounded-xl bg-gray-700 opacity-80 absolute z-10 left-1/2 bottom-2 transform -translate-x-1/2  text-white font-extrabold shadow-2xl text-2xl text-center'>
          <p className="">จำนวนทีมทั้งหมด</p>
          <p className='text-center'>{team.length} ทีม</p>
        </div>

      </nav>
    </div>
    <div className='w-full lg:w-3/4 p-2 mx-auto'>
      <section className='my-4'>
        <h1 className='font-bold text-3xl text-center roboto'>รายชื่อทีมทั้งหมด</h1>
        <h1 className='text-2xl font-bold mt-8'>ระดับมัธยมศึกษาตอนปลาย</h1>
        <div className='shadow-blue-300 my-4 grid grid-cols-3 md:grid-cols-5  items-center border-2 border-blue-300 shadow-lg p-4 max-w-full place-items-center'>
          <p>วันเวลาที่สมัคร</p>
          <p>ชื่อทีม</p>
          <p>ประเภท</p>
          <p>หัวหน้าทีม</p>
          <p>	ชั้น</p>
        </div>
        {team.length > 0 ? (<>
          {team.map((item, index) => (
            item.select == "ระดับมัธยมศึกษาตอนปลาย" && (<div key={index} className='transition-all hover:-translate-y-2 my-2 grid md:grid-cols-5  grid-cols-3 place-items-center border-2 shadow-xl p-4 max-w-full'>
              <p>{item.time}</p>
              <p>{item.team}</p>
              <p>{item.select}</p>
              <p>{item.person}</p>
              <p>{item.room}</p>
            </div>)
            
          ))}
        </>) : (<p className='text-center'>wait for data...</p>)}

            <h1 className='text-2xl font-bold mt-8'>ระดับมัธยมศึกษาตอนต้น</h1>
        <div className=' shadow-red-300 my-4 grid-cols-3 md:grid-cols-5 grid items-center border-2 border-red-300 shadow-lg p-4 max-w-full place-items-center'>
          <p>วันเวลาที่สมัคร</p>
          <p>ชื่อทีม</p>
          <p>ประเภท</p>
          <p>หัวหน้าทีม</p>
          <p>	ชั้น</p>
        </div>
        {team.map((item, index) => (
            item.select == "ระดับมัธยมศึกษาตอนต้น" && (<div key={index} className='transition-all hover:-translate-y-2 my-2 grid grid-cols-3 md:grid-cols-5 place-items-center border-2 shadow-xl p-4 max-w-full'>
              <p>{item.time}</p>
              <p>{item.team}</p>
              <p>{item.select}</p>
              <p>{item.person}</p>
              <p>{item.room}</p>
            </div>)
            
          ))}



      </section>
    </div>
    
  </div>

  );
}
