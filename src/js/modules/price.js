function price() {
  const buttonsWrapper = document.querySelector('.price__toggle_wrapper');
  const normalBarberButton = document.getElementById('normalBarber');
  const topBarberButton = document.getElementById('topBarber');
  const data = [
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579673',
      price: '400',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306440',
      topPrice: '500',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579963',
      price: '300',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306452',
      topPrice: '300',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579971',
      price: '250',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306488',
      topPrice: '300',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579997',
      price: '300',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306522',
      topPrice: '400',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6580018',
      price: '650',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306482',
      topPrice: '750',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579989',
      price: '600',
      topLink: 'https://n447728.yclients.com/company:424409?o=s6579989',
      topPrice: '700',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6580058',
      price: '350',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306597',
      topPrice: '400',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6579972',
      price: '150',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306501',
      topPrice: '150',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s6580003',
      price: '300',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306607',
      topPrice: '350',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s7961830',
      price: '300',
      topLink: 'https://n447728.yclients.com/company:424409?o=s7961830',
      topPrice: '300',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s7389640',
      price: '300',
      topLink: 'https://n447728.yclients.com/company:424409?o=s7389640',
      topPrice: '300',
    },
    {
      link: 'https://n447728.yclients.com/company:424409?o=s8031457',
      price: '1400',
      topLink: 'https://n447728.yclients.com/company:424409?o=s8306560',
      topPrice: '1500',
    },
  ];

  const nodeModules = [];
  document.querySelectorAll('.price__item').forEach((elem, index) => {
   nodeModules[index] = {
     link: elem.querySelector('.price__name'),
     price: elem.querySelector('.price__price')
   }
  });

  const toggleDate = (linkKey, priceKey) => {
    nodeModules.forEach((el, i) => {
      el.link.setAttribute('href', data[i][linkKey]);
      el.price.innerHTML = data[i][priceKey];
    })
  };

  buttonsWrapper.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('active') && evt.target.classList.contains('price__barber--normal')) {
      toggleDate('link', 'price');
      normalBarberButton.classList.add('active');
      topBarberButton.classList.remove('active');

    } else if (!evt.target.classList.contains('active') && evt.target.classList.contains('price__barber--top')) {
      toggleDate('topLink', 'topPrice');
      normalBarberButton.classList.remove('active');
      topBarberButton.classList.add('active');
    };
  })


};

export default price;
