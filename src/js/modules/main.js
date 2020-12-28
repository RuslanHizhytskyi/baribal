function mainJS() {
  let timerId;
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
        timerId = setTimeout(function() {
          writeChar(++i);
        }, 150);
      } else {
        timerId = setTimeout(function() {
          textContainer.textContent = '';
          writeChar(0);
        }, 4000);
      }
    }
    writeChar(0);
  }
  writeText();

  function showWideo() {
    document.addEventListener('DOMContentLoaded', () => {
      const videoSrc = document.querySelector('.main__video source');
      const videoName = {
        p360: 'barber_30_360p',
        p480: 'barber_30_480p',
        p720: 'barber_30_HD',
        p1080: 'barber_30_fullHD'
      };
      let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (viewportWidth < 640) {
        videoSrc.src = `video/${videoName.p360}.mp4`;
      } else if (viewportWidth < 854) {
        videoSrc.src = `video/${videoName.p480}.mp4`;
      } else if (viewportWidth < 1280) {
        videoSrc.src = `video/${videoName.p720}.mp4`;
      } else {
        videoSrc.src = `video/${videoName.p1080}.mp4`;
      }
    });
    setTimeout(() => {
      clearTimeout(timerId);
      document.querySelector('.main__bg_video').style.cssText = 'z-index: 5';
      document.querySelector('.main__bg_img_wrapper').style.cssText = 'display: none';
      document.querySelector('.main__video').setAttribute('autoplay', '');
    }, 7000);
  }
  showWideo();
}


export default mainJS;