const header = document.querySelector('.header'),
  headerNav = document.querySelector('.header__nav-wrapper'),
  headerShowBtn = document.querySelector('.header__nav-btn-show'),
  headerLogo = document.querySelector('.header__logo-img'),
  headerLogoSources = document.querySelectorAll('.header source');

header.classList.remove('header--no-js');

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

const callingLink = document.querySelector('.calling__input-link'),
  callingInput = document.querySelector('.calling__input');

if (callingLink) {
  callingLink.addEventListener('click', e => {
    e.preventDefault();
    callingInput.classList.remove('calling__input--error');
    const regex = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;

    if (!callingInput.value.match(regex)) {
      callingInput.classList.add('calling__input--error');
      callingInput.value = '';
    }
  });
}


let mobileSource = headerLogo,
  tabletSource,
  desktopSource,
  screenWidth = document.documentElement.scrollWidth;

headerLogoSources.forEach(source => {
  if (source.media == "(min-width: 1440px)") {
    desktopSource = source;
  } else if (source.media == "(min-width: 768px)") {
    tabletSource = source;
  }
});

window.addEventListener('scroll', showHeaderViaScroll);

if (header.classList.contains('header--no-js')) {
  window.removeEventListener('scroll', showHeaderViaScroll);
}

function showHeaderViaScroll() {
  if (window.pageYOffset > 200) {
    header.classList.add('header--fixed');
    if (screenWidth < 768) {
      mobileSource.src = 'img/logo-mobile-dark.png';
    } else if (screenWidth < 1440) {
      tabletSource.srcset = 'img/logo-tablet-open-menu.png';
    } else {
      desktopSource.srcset = 'img/logo-desktop-fixed.png';
    }
  } else {
    header.classList.remove('header--fixed');
    if (screenWidth < 768) {
      mobileSource.src = 'img/logo-mobile.png';
    } else if (screenWidth < 1440) {
      tabletSource.srcset = 'img/logo-tablet.png';
    } else {
      desktopSource.srcset = 'img/logo-desktop.png';
    }
  }
}

const addModal = document.querySelector('.add__modal'),
  addModalClose = document.querySelector('.add__modal-btn'),
  addModalOpen = document.querySelector('.add__show');

if (addModal) {
  addModalOpen.addEventListener('click', () => {
    addModal.classList.toggle('add__modal--show');
  });

  addModalClose.addEventListener('click', () => {
    addModal.classList.toggle('add__modal--show');
  });
}

const chooseNewCountry = document.querySelector('.append__choose-country--unselected'),
  appendDropdown = document.querySelector('.append__choose-dropdown'),
  appendRemove = document.querySelector('.append__choose-country--unselected .append__choose-remove'),
  dropdownClose = appendDropdown.querySelector('.dropdown__close');

  console.log(dropdownClose);


if (chooseNewCountry) {
  chooseNewCountry.addEventListener('click', e => {
    if (e.target !== dropdownClose) {
      appendDropdown.classList.add('dropdown-show');
      appendRemove.classList.add('hide');
    }
  });

  dropdownClose.addEventListener('click', () => {
    appendDropdown.classList.remove('dropdown-show');
    appendRemove.classList.remove('hide');
  });
}


