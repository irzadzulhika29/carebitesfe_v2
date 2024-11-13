import React from "react";

const PickupForm = ({
  pickupLocation,
  setPickupLocation,
  date,
  setDate,
  time,
  setTime,
  selectedKota,
  setSelectedKota,
  selectedKecamatan,
  setSelectedKecamatan,
  selectedKelurahan,
  setSelectedKelurahan,
  kotaData,
}) => {
  const kecamatanData = selectedKota ? kotaData[selectedKota] : {};



 

  return (
    <section className="p-3 rounded-md bg-white shadow-md">
      <h1 className="mb-5 text-xl font-bold">Informasi Pengambilan Produk</h1>
      <form className="flex flex-col gap-5">
        {/* Kota */}
        <div className="flex flex-col">
          <label>Kota</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKota}
            onChange={(e) => {
              setSelectedKota(e.target.value);
              setSelectedKecamatan("");
              setSelectedKelurahan("");
            }}
          >
            <option value="">-- Pilih Kota --</option>
            {Object.keys(kotaData).map((kota, index) => (
              <option key={index} value={kota}>
                {kota}
              </option>
            ))}
          </select>
        </div>

        {/* Kecamatan */}
        <div className="flex flex-col">
          <label>Kecamatan</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKecamatan}
            onChange={(e) => {
              setSelectedKecamatan(e.target.value);
              setSelectedKelurahan("");
            }}
            disabled={!selectedKota}
          >
            <option value="">-- Pilih Kecamatan --</option>
            {Object.keys(kecamatanData).map((kecamatan, index) => (
              <option key={index} value={kecamatan}>
                {kecamatan}
              </option>
            ))}
          </select>
        </div>

        {/* Kelurahan */}
        <div className="flex flex-col">
          <label>Kelurahan</label>
          <select
            className="border rounded p-1 mt-2"
            value={selectedKelurahan}
            onChange={(e) => setSelectedKelurahan(e.target.value)}
            disabled={!selectedKecamatan}
          >
            <option value="">-- Pilih Kelurahan --</option>
            {selectedKecamatan &&
              kecamatanData[selectedKecamatan]?.map((kelurahan, index) => (
                <option key={index} value={kelurahan}>
                  {kelurahan}
                </option>
              ))}
          </select>
        </div>

        {/* Alamat */}
        <div className="flex flex-col">
          <label>Alamat Lengkap</label>
          <input
            className="border rounded p-1 mt-2"
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>

        {/* Tanggal */}
        <div className="flex flex-col">
          <label>Tanggal Pengambilan</label>
          <input
            className="border rounded p-1 mt-2"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Jam */}
        <div className="flex flex-col">
          <label>Jam Pengambilan</label>
          <input
            className="border rounded p-1 mt-2"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default PickupForm;
