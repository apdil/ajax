
function doAjax(url, method, async, args, callback){
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (ajax.status === 200 || ajax.status === 304) {
            if (ajax.readyState === 4) {
                console.log(ajax.response);
                document.querySelector('#para').textContent = ajax.response;
            }
        }
    };

    ajax.open('GET', 'text.txt', true);
    ajax.send();
}