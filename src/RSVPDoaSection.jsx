import React, { useState, useEffect } from "react";

const RSVPSection = () => {
  const [rsvp, setRsvp] = useState({ name: "", status: "", guests: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = JSON.parse(localStorage.getItem("rsvpData")) || [];
    const newData = [...prevData, rsvp];
    localStorage.setItem("rsvpData", JSON.stringify(newData));
    alert("Terima kasih! RSVP Anda telah tercatat.");
    setRsvp({ name: "", status: "", guests: 1 });
  };

  return (
    <section className="py-8 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Konfirmasi Kehadiran
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full p-2 border rounded"
          value={rsvp.name}
          onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={rsvp.status}
          onChange={(e) => setRsvp({ ...rsvp, status: e.target.value })}
          required
        >
          <option value="">Konfirmasi Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
          <option value="Masih Ragu">Masih Ragu</option>
        </select>
        <input
          type="number"
          min={1}
          placeholder="Jumlah Tamu"
          className="w-full p-2 border rounded"
          value={rsvp.guests}
          onChange={(e) =>
            setRsvp({ ...rsvp, guests: parseInt(e.target.value) })
          }
        />
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-700 text-white px-4 py-2 rounded"
        >
          Kirim RSVP
        </button>
      </form>
    </section>
  );
};

const DoaSection = () => {
  const [doa, setDoa] = useState({ name: "", message: "" });
  const [doaList, setDoaList] = useState([]);

  // Load data dari localStorage saat komponen dimount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("doaData")) || [];
    setDoaList(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = JSON.parse(localStorage.getItem("doaData")) || [];
    const newData = [...prevData, doa];
    localStorage.setItem("doaData", JSON.stringify(newData));
    setDoaList(newData); // Update tampilan doaList
    alert("Terima kasih atas doa dan ucapannya 🙏");
    setDoa({ name: "", message: "" });
  };

  return (
    <section className="py-8 bg-rose-100 shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Kirim Doa & Ucapan
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama Anda"
          className="w-full p-2 border rounded"
          value={doa.name}
          onChange={(e) => setDoa({ ...doa, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Tulis doa & ucapan..."
          className="w-full p-2 border rounded h-28"
          value={doa.message}
          onChange={(e) => setDoa({ ...doa, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-700 text-white px-4 py-2 rounded "
        >
          Kirim Ucapan
        </button>
      </form>

      {/* Tampilkan ucapan di bawahnya */}
      <div className="mt-8 max-w-md mx-auto text-left space-y-4">
        <h3 className="text-lg font-semibold mb-2 text-center">
          Ucapan & Doa:
        </h3>

        {/* Semua ucapan bisa di-scroll */}
        <div className="max-h-96 overflow-y-auto space-y-4">
          {doaList.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-2">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingSection = () => {
  return (
    <section className="py-8 bg-pink-200 text-center">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Merupakan Kehormatan Bagi Kami
      </h2>
      <p className="text-lg mb-4">
        Merupakan kehormatan serta kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai.
      </p>
      <p className="text-lg mb-4">
        Wassalamualaikum Warahmatullahi Wabarakatuh
      </p>
      <p className="text-lg font-semibold">
        Turut berbahagia, segenap keluarga besar
      </p>
    </section>
  );
};

export { RSVPSection, DoaSection, ClosingSection };
