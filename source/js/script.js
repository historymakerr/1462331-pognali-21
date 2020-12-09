const  header = document.querySelector('.header'),
  headerNav = document.querySelector('.header__nav-wrapper'),
  headerShowBtn = document.querySelector('.header__nav-btn-show'),
  headerLogo = document.querySelector('.header__logo-img'),
  headerLogoSources = document.querySelectorAll('.header source');

headerShowBtn.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav-wrapper--shown');
  header.classList.toggle('header--open-menu');

  headerShowBtn.classList.toggle('header__nav-btn-show--open');

  let screenWidth = document.documentElement.scrollWidth;

  if (screenWidth < 768) {
    if (headerNav.classList.contains('header__nav-wrapper--shown')) {
      headerLogo.src = "img/logo_mobile-via-open-menu.svg";
      headerLogo.width = '100';
    } else {
      headerLogo.src = "img/logo-mobile.svg";
      headerLogo.width = '96';
    }
  } else if (screenWidth < 1440) {
    let currentSource;

    headerLogoSources.forEach(source => {
      if (source.media == '(min-width: 768px)') {
        currentSource = source;
      }
    });

    if (headerNav.classList.contains('header__nav-wrapper--shown')) {
      currentSource.srcset = "img/logo-tablet-open-menu.png";
    } else {
      currentSource.srcset = "img/logo-tablet.png";
    }
  }
});
