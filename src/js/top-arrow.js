
const scrollBtn = document.querySelector('.isShowBtn');

window.onscroll = () => {
  if (window.scrollY > 800) {
    scrollBtn.classList.remove('isShowBtn__hide');
  } else if (window.scrollY < 800) {
    scrollBtn.classList.add('isShowBtn__hide');
  };
  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
}

