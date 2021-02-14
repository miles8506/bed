//手機正規
const phoneipt = document.querySelector('.phoneipt');
const alert_phone = document.querySelector('.alert_phone');
const rgl_phone = /^09\d{8}$/;
phoneipt.addEventListener('blur', function () {
    if (rgl_phone.test(this.value)) {
        alert_phone.innerHTML = '可使用該手機號碼';
        alert_phone.className = 'success';
    } else {
        alert_phone.innerHTML = '手機號碼格式錯誤，請重新檢查';
        alert_phone.className = 'error';
    };
});


//信用卡正規
const creditipt = document.querySelector('.credit_caript');
const alert_credit = document.querySelector('.alert_credit');
const rgl_credit = /^4\d{15}$/;
creditipt.addEventListener('blur', function () {
    if (rgl_credit.test(this.value)) {
        alert_credit.innerHTML = '可使用該信用卡號';
        alert_credit.className = 'success';
    } else {
        alert_credit.innerHTML = '信用卡格式錯誤，請重新檢查';
        alert_credit.className = 'error';
    };
});