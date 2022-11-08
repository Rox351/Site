function downloadCode(link, code) {
  link.href = 'data:text/html;charset=utf-8,' + code;
}

document.getElementById('link').addEventListener('click', function () {
  downloadCode(this, txt.value);
}, false);