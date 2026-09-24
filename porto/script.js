var tahunSekarang = new Date().getFullYear();
document.getElementById("year").textContent = tahunSekarang;

var tombolHamburger = document.getElementById("navToggle");
var menuNavigasi = document.getElementById("navLinks");

tombolHamburger.addEventListener("click", function () {
  menuNavigasi.classList.toggle("show");
});

var semuaTombolFilter = document.querySelectorAll(".filter-btn");
var semuaKartuMenu = document.querySelectorAll(".menu-card");
var teksKosong = document.getElementById("emptyState");


semuaTombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    semuaTombolFilter.forEach(function (t) {
      t.classList.remove("active");
    });

    tombol.classList.add("active");

    var kategoriDipilih = tombol.getAttribute("data-filter");
    var jumlahTerlihat = 0;

    semuaKartuMenu.forEach(function (kartu) {
      var kategoriKartu = kartu.getAttribute("data-category");

      if (kategoriDipilih === "all" || kategoriDipilih === kategoriKartu) {
        kartu.style.display = "block";
        jumlahTerlihat = jumlahTerlihat + 1;
      } else {
        kartu.style.display = "none";
      }
    });

    if (jumlahTerlihat === 0) {
      teksKosong.hidden = false;
    } else {
      teksKosong.hidden = true;
    }

  });
});