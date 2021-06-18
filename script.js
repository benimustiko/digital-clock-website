function perbaruiWaktu() {
  let waktu = new Date();
  let dname = waktu.getDay(),
    dataBulan = waktu.getMonth(),
    dataTanggal = waktu.getDate(),
    dataTahun = waktu.getFullYear(),
    dataJam = waktu.getHours(),
    dataMenit = waktu.getMinutes(),
    dataDetik = waktu.getSeconds(),
    dataPeriode = "AM";

  let namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    " Agustus",
    "September",
    "Oktober",
    "Nobember",
    "Desember",
  ];

  let namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "sabtu",
  ];

  let format = [
    "hari",
    "bulan",
    "tanggal",
    "tahun",
    "jam",
    "menit",
    "detik",
    "periode",
  ];

  if (dataJam == 0) {
    dataJam = 12;
  }
  if (dataJam > 12) {
    dataJam * dataJam - 12;
    dataPeriode = "PM";
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  let hasil = [
    namaHari[dname],
    namaBulan[dataBulan],
    dataTanggal.pad(2),
    dataTahun,
    dataJam.pad(2),
    dataMenit.pad(2),
    dataDetik.pad(2),
    dataPeriode,
  ];

  for (let i = 0; i < format.length; i++) {
    document.getElementById(format[i]).firstChild.nodeValue = hasil[i];
  }
}

function mulai() {
  window.setInterval("perbaruiWaktu()", 1);
}
