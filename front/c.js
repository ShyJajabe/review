/**
 * Created by admin on 2017/5/18.
 */
onmessage = function (e) {
    var num = e.data;
    var r = 0;
    for (var i = 1; i < num; i++) {
        r += i;
    }
    postMessage(r);
}