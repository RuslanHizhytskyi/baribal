function language() {
  const langs = {
    ru: {
      mainBtn: 'З<br>А<br>П<br>И<br>С<br>А<br>Т<br>Ь<br>С<br>Я',
      headerNav1: 'о нас',
      headerNav2: 'услуги',
      headerNav3: 'мастера',
      headerNav4: 'портфолио',
      headerNav5: 'контакты',
      videoText: 'Качество. надежность. профессионализм. результат.',
      aboutUsTitle: 'О НАС',
      aboutUsText: 'Baribal Barbershop - это не просто стильное пространство для настоящих мужчин, а место в котором ценят твою уникальность! Мы не просто удивляем качеством , а вводим это в привычку, так как наша команда - профессионалы с большим опытом.  Наши барберы подберут наиболее подходящий образ для Вас, учитывая все пожелания, добавив в него стиль и уверенность в себе. В Baribal Barbershop используют только дорогую и проффесиональную косметику, которую можно приобрести у нас в заведении.',
      aboutUsBtn: 'ЗАПИСАТЬСЯ',
      priceTitle: 'УСЛУГИ',
      priceName1: 'мужская стрижка',
      priceName2: 'стрижка машинкой',
      priceName3: 'детская стрижка',
      priceName4: 'стрижка бороды',
      priceName5: 'стрижка бороды с опасной бритвой',
      priceName6: 'комплекс',
      priceName7: 'отец + сын',
      priceName8: 'укладка',
      priceName9: 'Камуфлирование седины',
      mastersTitle : 'мастера',
      masterName1: 'Сергей Обуховский',
      masterPosition1: 'Арт директор',
      masterText1: 'Лучший путь к успеху — это влюбиться в то, что ты делаешь.',
      masterName2: 'Сергей Борщик',
      masterPosition2: 'Барбер',
      masterText2: 'Всякое дело совершенствуется овладением техники. Всякий навык достигается упражнением.',
      masterName3: 'Александр Шапошников',
      masterPosition3: 'Барбер',
      masterText3: 'Мастера определяет способность с виду легко делать сложные вещи.',
      masterName4: 'Игорь Науменко',
      masterPosition4: 'Барбер',
      masterText4: 'Профессионал — тот, кто чувствует работу душой.',
      galleryTitle: 'ПОРТФОЛИО',
      contactTitle: 'контакты',
      contactAdress: 'Проспект Николая Бажана ,1а <br> ЖК “Заречный”'
    },
    ua: {
      mainBtn: 'З<br>А<br>П<br>И<br>С<br>А<br>Т<br>И<br>С<br>Ь',
      headerNav1: 'Про нас',
      headerNav2: 'Послуги ',
      headerNav3: 'Майстри ',
      headerNav4: 'Портфоліо ',
      headerNav5: 'Контакти',
      videoText: 'Якість. Надійність. Професіоналізм. Результат.',
      aboutUsTitle: 'Про нас',
      aboutUsText: 'Baribal Barbershop - це не просто стильний простір для справжніх чоловіків, а місце в якому цінують твою унікальність! Ми не просто дивуємо якістю, а вводимо це в звичку, так як наша команда - професіонали з великим досвідом. Наші Барбери підберуть найбільш відповідний образ для Вас, враховуючи всі побажання, додавши в нього стиль і впевненість у собі. У Baribal Barbershop використовують тільки дорогу і професійний косметику, яку можна придбати у нас в закладі.',
      aboutUsBtn: 'ЗАПИСАТИСЬ',
      priceTitle: 'Послуги',
      priceName1: 'Чоловіча стрижка',
      priceName2: 'Стрижка під насадку',
      priceName3: 'Дитяча стрижка',
      priceName4: 'Стрижка бороди',
      priceName5: 'Стрижка бороди з небезпечною бритвою',
      priceName6: 'Комплекс',
      priceName7: 'Батько + син',
      priceName8: 'Укладка',
      priceName9: 'камуфлювання сивини',
      mastersTitle : 'Майстри',
      masterName1: 'Сергій Обухівський',
      masterPosition1: 'Арт директор',
      masterText1: 'Кращий шлях до успіху - це закохатися в те, що ти робиш.',
      masterName2: 'Сергій Борщик',
      masterPosition2: 'Барбер',
      masterText2: 'Всяка справа вдосконалюється оволодінням техніки. Всякий навик досягається вправою.',
      masterName3: 'Олександр Шапошников',
      masterPosition3: 'Барбер',
      masterText3: 'Майстра визначає на вигляд легко робити складні речі.',
      masterName4: 'Ігор Науменко',
      masterPosition4: 'Барбер',
      masterText4: 'Професіонал той, хто відчуває роботу душею.',
      galleryTitle: 'Портфоліо',
      contactTitle: 'Контакти',
      contactAdress: 'Проспект Миколи Бажана ,1а <br> ЖК “Зарічний”'
    }
  };
  const nodesForTranslate = [];
  const uaBtn = document.getElementById('ua');
  const ruBtn = document.getElementById('ru');
  const videoText = document.getElementById('videoText');

  Object.keys(langs.ru).forEach(el => nodesForTranslate.push(document.getElementById(el)));

  let lang;

  if (localStorage.getItem('lang') === null) {
    lang = true;
    localStorage.setItem('lang', true);
  } else if (localStorage.getItem('lang') == 'false') {
    translateToUA();
  } else if (localStorage.getItem('lang') == 'true') {
    translateToRU();
  }

  function changeLanguage(lang) {
    nodesForTranslate.forEach(el => el.innerHTML = langs[lang][el.id]);
    videoText.setAttribute('data-change', 'true');
  }

  function translateToRU() {
    changeLanguage('ru');
    ruBtn.classList.add('header__language_active');
    uaBtn.classList.remove('header__language_active');
    lang = true;
  }
  function translateToUA() {
    changeLanguage('ua');
    ruBtn.classList.remove('header__language_active');
    uaBtn.classList.add('header__language_active');
    lang = false;
  }

  document.querySelector('.header__language').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('header__language_ru') && !lang) {
      translateToRU()
    } else if (evt.target.classList.contains('header__language_ua') && lang) {
      translateToUA()
    }
    localStorage.setItem('lang', lang);
  });
}


export default language;
