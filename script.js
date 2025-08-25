const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click' ,()=>{
    container.classList.add('active');
})

loginBtn.addEventListener('click' ,()=>{
    container.classList.remove('active');
})

function openSupport() {
      window.open("https://m.me/yourpageid", "_blank");
    }

function openSupport() {
    document.querySelector('.support-container')
      ?.classList.toggle('open');
  }