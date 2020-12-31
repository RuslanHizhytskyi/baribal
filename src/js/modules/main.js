function mainJS() {
  // let timerId;
  function writeText() {
    const text = 'Качество. надежность. профессионализм. результат.';
    const textContainer = document.querySelector('.js_main_title');
    const textArr = text.split('');
    function writeChar(i) {
      if (i < textArr.length) {
        textContainer.innerHTML += textArr[i];
        if (textArr[i] === '.') {
          textContainer.innerHTML += '<br>';
        }
        setTimeout(function() {
          writeChar(++i);
        }, 100);
      } else {
        setTimeout(function() {
          textContainer.textContent = '';
          writeChar(0);
        }, 3000);
      }
    }
    writeChar(0);
  }
  writeText();

  // document.addEventListener('DOMContentLoaded', () => {
  //   const videoElement = document.querySelector('.main__video');

  //   videoElement.play();
  // });
}


export default mainJS;