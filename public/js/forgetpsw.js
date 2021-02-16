//ipt 判斷
const email_rgl = /^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
const email_ipt = document.querySelector('.email_ipt');
const btn = document.querySelector('.next');
const alert_bar = document.querySelector('.alert_bar');
email_ipt.addEventListener('blur', function () {
    if (this.value == '' || !email_rgl.test(this.value)) {
        alert_bar.classList.remove('success');
        alert_bar.classList.add('error');
        alert_bar.innerHTML = `＊格式錯誤，請重新輸入`;
    } else {
        alert_bar.classList.remove('error');
        alert_bar.classList.add('success');
        alert_bar.innerHTML = `格式正確`;
        btn.disabled = '';
    };
});


// btn
// btn.addEventListener('click', function () {
//     if (email_ipt.value == '' || !email_rgl.test(email_ipt.value)) {
//         alert('格式錯誤，請重新輸入');
//         window.location.href = '../../views/login/forgetpsw.html';
//     } else {
//         window.location.href = '../../views/login/checkcode.html';
//     }
// })

