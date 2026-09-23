  const pages = document.querySelectorAll('.page'); //hamburger
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');

  function pindahHalaman(namaHalaman) {
    pages.forEach(function (page) {
      page.classList.toggle('active', page.id === namaHalaman);
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.toggle('active', link.dataset.page === namaHalaman);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navMenu.classList.remove('buka');
  }

  document.querySelectorAll('a[data-page]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      pindahHalaman(this.dataset.page);
    });
  });

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('buka');
  });