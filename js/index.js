// moblenab區塊
var navicon = document.querySelector('.navicon');
var nav_list = document.querySelector('.nav_list');
var flag = 0;
navicon.addEventListener('click', function () {
    if (flag === 0) {
        nav_list.style.display = 'block';
        document.body.style.backgroundColor = 'rgba(0,0,0, .3)';
        flag++;
    } else if (flag === 1) {
        nav_list.style.display = 'none';
        document.body.style.backgroundColor = '';
        flag--;
    }
})


