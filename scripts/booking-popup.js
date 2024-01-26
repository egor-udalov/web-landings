const buttons = document.getElementsByClassName('button-booking');

const bookingPopup = document.querySelector('.booking-popup');

const closeButton = document.querySelector('.booking-popup__close');

function openBookingPopup() {
  if (!bookingPopup.classList.contains('open')) {
    bookingPopup.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingPopup() {
  if (bookingPopup.classList.contains('open')) {
    bookingPopup.classList.remove('open');
    document.body.style.overflow = '';
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    if (!bookingPopup.classList.contains('open')) {
      openBookingPopup();
    }
  });
}

closeButton.addEventListener('click', closeBookingPopup);