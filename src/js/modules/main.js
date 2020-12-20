function writeText() {
  const text = 'Качество. надежность. профессионализм. результат.';
  const textContainer = document.querySelector('.js_main_title');
  const textArr = text.split('');
  function writeChar(i) {
    if (i < textArr.length) {
      textContainer.textContent += textArr[i];
      setTimeout(function() {
        writeChar(++i);
      }, 150);
    } else {
      setTimeout(function() {
        textContainer.textContent = '';
        writeChar(0);
      }, 4000);
    }
  }
  writeChar(0);
  console.log(textArr);

}


export default writeText;