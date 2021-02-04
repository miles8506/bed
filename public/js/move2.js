function move2(obj, target, callback) {
    clearInterval(obj.move);
    obj.move = setInterval(function () {
        var step = (target - window.pageYOffset) / 10;
        if (step < 0) {
            step = Math.floor(step);
        } else if (step > 0) {
            step = Math.ceil(step);
        }
        if (window.pageYOffset == target) {
            clearInterval(obj.move);
            if (callback) {
                callback();
            }
        }
        window.scroll(0, window.pageYOffset + step);
    }, 15);
}
// 上下移動
// move(哪一個盒子, 目標多遠且不要跟單位, 執行完上述代碼後需要調用的函數)