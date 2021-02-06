function mainJS() {
  let timerId;
  function writeText() {
    const text = document.getElementById('videoText');
    const textContainer = document.querySelector('.js_main_title');
    let textArr = text.textContent.split('');
    function writeChar(i) {
      if (text.getAttribute('data-change') === 'true') {
        clearTimeout(timerId);
        textContainer.innerHTML = '';
        textArr = text.textContent.split('');
        text.setAttribute('data-change', 'false');
        writeChar(0);
      } else {
        if (i < textArr.length) {
          textContainer.innerHTML += textArr[i];
          if (textArr[i] === '.') {
            textContainer.innerHTML += '<br>';
          }
          timerId = setTimeout(function() {
            writeChar(++i);
          }, 100);
        } else {
          timerId = setTimeout(function() {
            textContainer.textContent = '';
            writeChar(0);
          }, 3000);
        }
      }
    }
    writeChar(0);
  }
  writeText();
}


export default mainJS;
