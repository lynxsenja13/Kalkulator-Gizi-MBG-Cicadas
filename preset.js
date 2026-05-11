/* =========================
   DATABASE PRESET
========================= */

window.resepPreset = {

  "TAHU CRISPY": [

    {
      nama: "TAHU, MENTAH",
      berat: 30,
      satuan: "Gram"
    },

    {
      nama: "TEPUNG TERIGU",
      berat: 5,
      satuan: "Gram"
    },

    {
      nama: "MINYAK KELAPA",
      berat: 5,
      satuan: "Gram"
    }

  ],

  "TEMPE GORENG": [

    {
      nama: "TEMPE",
      berat: 50,
      satuan: "Gram"
    },

    {
      nama: "MINYAK KELAPA",
      berat: 5,
      satuan: "Gram"
    }

  ]

};


/* =========================
   TAMBAH PRESET
========================= */

function tambahPresetMenu(namaPreset) {

  const preset =
    window.resepPreset[namaPreset];

  if (!preset) {

    alert("Preset tidak ditemukan");

    return;

  }

  preset.forEach(item => {

    tambahBahanPreset(
      item.nama,
      item.berat,
      item.satuan
    );

  });

}


/* =========================
   TAMBAH BAHAN
========================= */

function tambahBahanPreset(
  nama,
  berat,
  satuan
) {

  const bahan = {
    nama,
    berat,
    satuan
  };

  STATE.bahanAktif.push(bahan);

  renderListBahan();

  hitungSemua();

}
