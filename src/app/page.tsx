import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F7F7F7] ">

      {/* Navbar */}
      <nav className="bg-[#333333] px-10 py-1 sticky top-0">
        <div className="flex justify-between text-[#F7F7F7]">
          <Image src="/asset/logo-hellaw-putih.png" alt="Profile" width={100} height={100} className=""/>
          <div className="flex gap-6 font-semibold items-center">
            <a href="#home">Home</a>
            <a href="#biografi">Biografi</a>
            <a href="#agenda">Agenda</a>
            <a href="#galery">Galery</a>
            <a href="#crew">Crew</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Section */}
      <div className="flex flex-col p-10">
        {/* Section 1 - Welcome */}
        <section className="" id="home">
            <Image src="/asset/WELCOME_transparent.png" className="justify-self-center" alt="Profile" width={1000} height={1000} />
        </section>

        {/* Section 2 - Bigrafi */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-16 px-10" id="biografi">
          <h1 className="text-3xl text-[#333333] font-bold text-center">Bigorafi</h1>
          <div className="flex gap-[10rem]  items-center">
            <div className="flex text-[#7F807B]">
              <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih. Misalnya, Voice of Baceprot (VoB) dari Garut dikenal sebagai band metal hijab yang menembus festival internasional, sementara Naif dari Jakarta membawa warna retro pop rock dan bertahan lebih dari dua dekade dengan hits seperti “Mobil Balap” dan “Posesif.” Band folk-pop Fourtwnty mempopulerkan nuansa “senja” lewat lagu “Zona Nyaman,” sedangkan Senyawa dari Yogyakarta menggabungkan tradisi musik Nusantara dengan eksperimen avant-garde. Samsons sukses besar secara komersial dengan album debut multi-platinum Naluri Lelaki, dan band indie Perunggu muncul lebih baru dengan karya Memorandum yang sarat kritik sosial. Dari contoh-contoh ini, biografi band dapat ditulis dengan menyoroti latar kota asal, formasi anggota, gaya musik, karya yang melambungkan nama mereka, penghargaan atau pencapaian penting, serta kontribusi unik yang membedakan mereka di dunia musik.</p>
            </div>
            <Image src="/asset/bio.png" alt="Profile" width={500} height={500} />
          </div>
        </section>

        {/* Section 3 - Agenda */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-16 px-10" id="agenda">
          <h1 className="text-3xl text-[#333333] font-bold text-center">Agenda</h1>
          
          {/* Card Agenda */}
          <div className="flex flex-col gap-6">
            <div className="w-full px-4 py-5 bg-[#333333]">
              <div className="flex justify-between text-base font-bold text-[#F7F7F7]">
                <p className="">19/06/2025</p>
                <div className="flex gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-[#333333]">
              <div className="flex justify-between text-base font-bold text-[#F7F7F7]">
                <p className="">19/06/2025</p>
                <div className="flex gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-[#333333]">
              <div className="flex justify-between text-base font-bold text-[#F7F7F7]">
                <p className="">19/06/2025</p>
                <div className="flex gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-[#333333]">
              <div className="flex justify-between text-base font-bold text-[#F7F7F7]">
                <p className="">19/06/2025</p>
                <div className="flex gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-[#333333]">
              <div className="flex justify-between text-base font-bold text-[#F7F7F7]">
                <p className="">19/06/2025</p>
                <div className="flex gap-4">
                  <p>Live Perfoming - JKT</p>
                  <p>Lektur Cofee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Galery */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-16 px-10" id="galery">
          <h1 className="text-3xl text-[#333333] font-bold text-center">Galery</h1>
          {/* cards galery */}
          <div className="grid grid-cols-3 gap-10">
            {/* card */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="w-full h-64 bg-amber-950">
              </div>
              <div className="flex  flex-col gap-3">
                <div className="flex flex-col gap-1 text-[#333333] text-base font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="w-full h-64 bg-amber-950">
              </div>
              <div className="flex  flex-col gap-3">
                <div className="flex flex-col gap-1 text-[#333333] text-base font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="w-full h-64 bg-amber-950">
              </div>
              <div className="flex  flex-col gap-3">
                <div className="flex flex-col gap-1 text-[#333333] text-base font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="w-full h-64 bg-amber-950">
              </div>
              <div className="flex  flex-col gap-3">
                <div className="flex flex-col gap-1 text-[#333333] text-base font-bold">
                  <p>30-12-2025</p>
                  <p>Live Perfom Lektur Cofee</p>
                </div>
                <p>Sebuah band biasanya memiliki biografi yang mencakup asal-usul, genre, personel, perjalanan karier, hingga prestasi yang diraih...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Crew */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-16 px-10" id="crew">
          <h1 className="text-3xl text-[#333333] font-bold text-center">Crew</h1>
          <div className="grid grid-cols-2  items-center">
            <Image src="/asset/kirom-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
            <div className="flex flex-col gap-2 text-[#7F807B] justify-self-center">
              <h1 className="text-2xl text-[#333333] font-bold">RIZKY KIRROMUTTAQILLAH</h1>
              <h1 className="text-base text-[#333333] font-bold">Gitaris / Vokalis</h1>
              <p>Umur:</p>
              <p>24</p>
              <p>Moto:</p>
              <p>Gitar adalah hidup hidup adalah gitar</p>
            </div>
          </div>

          <div className="grid grid-cols-2  items-center">
            <div className="flex flex-col gap-2 text-[#7F807B] justify-self-center text-right">
              <h1 className="text-2xl text-[#333333] font-bold">RIKFI MAULIDIAN</h1>
              <h1 className="text-base text-[#333333] font-bold">Gitaris Melodi</h1>
              <p>Umur:</p>
              <p>24</p>
              <p>Moto:</p>
              <p>Gitar adalah hidup hidup adalah gitar</p>
            </div>
            <Image src="/asset/kongo-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
          </div>
        </section>

        {/* Section 3 - Contact */}
        <section className="pt-24 mb-[5rem] flex flex-col gap-16 px-10" id="contact">
          <h1 className="text-3xl text-[#333333] font-bold text-center">Contact</h1>
          <div className="grid grid-cols-2  items-center">
            <Image src="/asset/logo-hellaw.png" alt="Profile" width={350} height={350} className="justify-self-center"/>
            <div className="flex flex-col gap-2 text-[#7F807B] justify-self-center">
              <h1 className="text-2xl text-[#333333] font-bold">For More Information:</h1>
              <div className="flex gap-2">
                <FaWhatsapp className="text-2xl"/>
                <p>+62 ********</p>
              </div>
              <div className="flex gap-2">
                <FaYoutube className="text-2xl"/>
                <p>+62 ********</p>
              </div>
              <div className="flex gap-2">
                <FaInstagram className="text-2xl"/>
                <p>+62 ********</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[20rem]">

        </div>
      </div>

      <footer className="w-full px-15 py-10 bg-[#333333] flex justify-between text-[#F7F7F7]">
        <div>
          <p>&copy; 2025 hellaw.jkt. All rights reserved.</p>
        </div>
        <div className="flex gap-10 items-center  ">
          <a href=""><FaWhatsapp className="text-2xl"/></a>
          <a href=""><FaYoutube className="text-2xl"/></a>
          <a href=""><FaInstagram className="text-2xl"/></a>
        </div>
      </footer>
    </div>
  );
}
