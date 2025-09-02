'use client'
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const togleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full min-h-screen bg-[#F7F7F7] ">

      {/* Navbar */}
      <nav className="bg-[#333333] px-5 md:px-10 py-2 fixed w-full top-0 z-30">
        <div className="flex justify-between text-[#F7F7F7]">
          <Image src="/asset/logo-hellaw-putih.png" alt="Profile" width={100} height={100}/>
          <div className="hidden md:flex gap-6 font-semibold items-center">
            <a href="#home">Home</a>
            <a href="#biografi">Biografi</a>
            <a href="#agenda">Agenda</a>
            <a href="#galery">Galery</a>
            <a href="#crew">Crew</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex md:hidden font-semibold items-center">
            <button onClick={togleMenu}><GiHamburgerMenu /></button>
          </div>
        </div>
        
        {isOpen && (
          <div className="flex flex-col gap-3 py-2 font-semibold text-sm text-left text-[#F7F7F7]">
          <a href="#home">Home</a>
          <a href="#biografi">Biografi</a>
          <a href="#agenda">Agenda</a>
          <a href="#galery">Galery</a>
          <a href="#crew">Crew</a>
          <a href="#contact">Contact</a>
        </div>
        )}
      </nav>

      {/* Section */}
      <div className="flex flex-col p-1 md:p-10">
        {/* Section 1 - Welcome */}
        <section className="py-[10rem] lg:py-0" id="home">
            <Image src="/asset/WELCOME_transparent.png" className="justify-self-center" alt="Profile" width={1000} height={1000} />
        </section>

        {/* Section 2 - Bigrafi */}
        <section className="flex flex-col gap-8 pt-24 mb-[5rem] px-2 md:gap-16 md:px-10" id="biografi">
          <h1 className="text-xl text-[#333333] font-bold text-center md:text-3xl ">Bigorafi</h1>
          <div className="flex gap-[10rem]  items-center">
            <div className="text-sm md:text-base flex flex-col gap-5 text-[#7F807B] text-justify lg:text-left">
              <p>Hellaw adalah sebuah band yang berdiri sejak tahun 2021. Sejak awal terbentuk, Hellaw hadir dengan semangat untuk terus berkarya dan menghadirkan hiburan yang berkesan bagi setiap pendengarnya. Dengan gaya bermusik yang fleksibel dan penuh energi, Hellaw mampu membawakan penampilan yang cocok untuk berbagai suasana, mulai dari acara pernikahan, engagement, hingga panggung-panggung musik di kafe dan event lainnya.</p>

              <p>Salah satu tempat yang menjadi panggung rutin Hellaw adalah Lektur Coffee, di mana band ini sering tampil secara live dan berinteraksi langsung dengan penikmat musik. Konsistensi Hellaw dalam bermusik menjadi bukti komitmen mereka untuk terus berkembang, menghadirkan karya, dan memberikan pengalaman musik terbaik bagi setiap audiens.</p>

              <p>Bagi Hellaw, musik bukan sekadar hiburan, melainkan juga cara untuk menyampaikan perasaan, membangun suasana, serta menemani momen-momen penting dalam hidup banyak orang. Dengan perjalanan yang terus berlanjut, Hellaw siap melangkah lebih jauh dan memperluas jangkauan karya mereka.</p>
            </div>
            <Image src="/asset/bio.png" alt="Profile" width={500} height={500} className="hidden lg:inline"/>
          </div>
        </section>

        {/* Section 3 - Agenda */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-8 px-2 md:gap-16 md:px-10" id="agenda">
          <h1 className="text-xl text-[#333333] font-bold text-center md:text-3xl ">Agenda</h1>
          
          {/* Card Agenda */}
          <div className="flex flex-col gap-6">
            <div className="w-full px-2 py-3 bg-[#333333] md:px-4 md:py-5">
              <div className="flex justify-between text-xs text-[#F7F7F7] md:text-base  md:font-bold">
                <p>19/06/2025</p>
                <div className="flex gap-2 md:gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-2 py-3 bg-[#333333] md:px-4 md:py-5">
              <div className="flex justify-between text-xs text-[#F7F7F7] md:text-base  md:font-bold">
                <p>19/06/2025</p>
                <div className="flex gap-2 md:gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-2 py-3 bg-[#333333] md:px-4 md:py-5">
              <div className="flex justify-between text-xs text-[#F7F7F7] md:text-base  md:font-bold">
                <p>19/06/2025</p>
                <div className="flex gap-2 md:gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-2 py-3 bg-[#333333] md:px-4 md:py-5">
              <div className="flex justify-between text-xs text-[#F7F7F7] md:text-base  md:font-bold">
                <p>19/06/2025</p>
                <div className="flex gap-2 md:gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-2 py-3 bg-[#333333] md:px-4 md:py-5">
              <div className="flex justify-between text-xs text-[#F7F7F7] md:text-base  md:font-bold">
                <p>19/06/2025</p>
                <div className="flex gap-2 md:gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Galery */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-8 px-2 md:gap-16 md:px-10" id="galery">
          <h1 className="text-xl text-[#333333] font-bold text-center md:text-3xl ">Galery</h1>
          {/* cards galery */}
          <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="relative w-full h-64 z-10">
                <Image src="/asset/bio.png" alt="Profile" layout="fill" className="object-cover" />
              </div>
              <div className="flex  flex-col gap-3 text-sm md:text-base">
                <div className="flex flex-col gap-1 text-[#333333] font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 mb-10">
              <div className="relative w-full h-64 z-10">
                <Image src="/asset/bio.png" alt="Profile" layout="fill" objectFit="cover" />
              </div>
              <div className="flex  flex-col gap-3 text-sm md:text-base">
                <div className="flex flex-col gap-1 text-[#333333] font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 mb-10">
              <div className="relative w-full h-64 z-10">
                <Image src="/asset/bio.png" alt="Profile" layout="fill" objectFit="cover" />
              </div>
              <div className="flex  flex-col gap-3 text-sm md:text-base">
                <div className="flex flex-col gap-1 text-[#333333] font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 mb-10">
              <div className="relative w-full h-64 z-10">
                <Image src="/asset/bio.png" alt="Profile" layout="fill" objectFit="cover" />
              </div>
              <div className="flex  flex-col gap-3 text-sm md:text-base">
                <div className="flex flex-col gap-1 text-[#333333] font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 mb-10">
              <div className="relative w-full h-64 z-10">
                <Image src="/asset/bio.png" alt="Profile" layout="fill" objectFit="cover" />
              </div>
              <div className="flex  flex-col gap-3 text-sm md:text-base">
                <div className="flex flex-col gap-1 text-[#333333] font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Crew */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-8 px-2 md:gap-16 md:px-10" id="crew">
          <h1 className="text-xl text-[#333333] font-bold text-center md:text-3xl ">Crew</h1>
          <div className="grid grid-cols-2 gap-2 items-center">
            <Image src="/asset/kirom-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
            <div className="flex flex-col gap-2 text-[#7F807B] justify-self-center">
              <h1 className="text-[#333333] font-bold text-sm md:text-xl lg:text-2xl">RIZKY KIRROMUTTAQILLAH</h1>
              <h1 className="text-[#333333] font-bold text-sm md:text-xl">Gitaris / Vokalis</h1>
              <div className="flex flex-col text-xs md:text-base">
                <p>Umur:</p>
                <p>24</p>
                <p>Moto:</p>
                <p>Gitar adalah hidup hidup adalah gitar</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="flex flex-col gap-2 text-[#7F807B] justify-self-center text-right">
              <h1 className="text-[#333333] font-bold text-sm md:text-xl lg:text-2xl">RIKFI MAULIDIAN</h1>
              <h1 className="text-[#333333] font-bold text-sm md:text-xl">Gitaris Melodi</h1>
              <div className="flex flex-col text-xs md:text-base">
                <p>Umur:</p>
                <p>24</p>
                <p>Moto:</p>
                <p>Gitar adalah hidup hidup adalah gitar</p>
              </div>
            </div>
            <Image src="/asset/kongo-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
          </div>
        </section>

        {/* Section 3 - Contact */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-8 px-2 md:gap-16 md:px-10" id="contact">
          <h1 className="text-xl text-[#333333] font-bold text-center md:text-3xl ">Contact</h1>
          <div className="grid grid-cols-2  items-center">
            <Image src="/asset/logo-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
            <div className="flex flex-col gap-4 text-[#7F807B] justify-self-center">
              <h1 className="text-[#333333] font-bold text-sm md:text-xl lg:text-2xl">For More Information:</h1>
              <div className="flex gap-2">
                <FaWhatsapp className="text-2xl"/>
                <a href="">+62 *********</a>
              </div>
              <div className="flex gap-2">
                <a href="https://www.tiktok.com/@hellaw.jkt"><FaTiktok className="text-2xl"/></a>
                <a href="https://www.tiktok.com/@hellaw.jkt">@hellaw.jkt</a>
              </div>
              <div className="flex gap-2">
                <a href="https://www.youtube.com/@hellawjakarta"><FaYoutube className="text-2xl"/></a>
                <a href="https://www.youtube.com/@hellawjakarta">@hellawjakarta</a>
              </div>
              <div className="flex gap-2">
                <a href="https://www.instagram.com/hellaw.jkt/"><FaInstagram className="text-2xl"/></a>
                <a href="https://www.instagram.com/hellaw.jkt/">@hellaw.jkt</a>
              </div>
            </div>
          </div>
        </section>

        <div className="hidden md:flex h-[20rem]">

        </div>
      </div>

      <footer className="w-full bg-[#333333] flex justify-between text-[#F7F7F7] px-3 py-4 md:px-15 md:py-10">
        <div>
          <p>&copy; 2025 hellaw.jkt. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <a href=""><FaWhatsapp className="text-2xl"/></a>
          <a href=""><FaYoutube className="text-2xl"/></a>
          <a href=""><FaInstagram className="text-2xl"/></a>
        </div>
      </footer>
    </div>
  );
}
