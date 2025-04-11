<template>
  <div class="home">
    <!-- СЕКЦІЯ навігації-->
    <nav class="navbar">
      <!-- Логотип -->
      <div class="logo-navbar">
        <img src="@/assets/logo-haircut.png" alt="Logo Haircut" />
      </div>

      <!-- Бургер-меню -->
      <button class="burger-menu" id="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- верх навігації -->
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#about">Про нас</a></li>
        <li><a href="#services">Послуги</a></li>
        <li><a href="#team">Майстри</a></li>
        <li><a href="#contact">Контакти</a></li>
      </ul>

      <!-- Іконка Instagram -->
      <div class="social">
        <a href="https://www.instagram.com" target="_blank">
          <img src="@/assets/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </nav>


    <section id="welcome" class="section welcome">
      <!-- Фонове зображення -->
      <div class="barbershop-photo"></div>

      <!-- Контент поверх зображення -->
      <div class="welcome-content">
        <!-- Логотип -->
        <div class="logo-welcome-desktop">
          <img src="@/assets/logo-haircut.png" alt="Logo Haircut" />
        </div>

        <!-- Текст привітання -->
        <p class="welcome-text-desktop">
          ПРОФЕСІЙНІ БАРБЕР ПОСЛУГИ В УЖГОРОДІ
        </p>

        <!-- кнопка "Записатися" -->
        <button class="booking-button" @click="$router.push('/auth')">Записатись</button>
      </div>
    </section>



    <!-- СЕКЦІЯ: Про нас ------------------------------------------------->
    <section id="about" class="section about">
      <h1>ПРО НАС</h1>
      <h5>
        Доброго дня! Ласкаво просимо до Bliss & Shine Studio!
        При створенні нашого барбер-простору, ми керувалися десятирічним досвідом в сфері стрижок для чоловіків та
        жінок, колористикою
        та покрасками для жінок та чоловіків. За допомогою чудового та позитивного персоналу - ми подаруєм не тільки
        настрій від стрижки,
        а й від простого перебування в нас. У нашому барбершопі ви отримаєте індивідуальну консультацію з вибору зачіски
        та догляду за зовнішністю, а також
        цілий спектр послуг, щоб наша взаємодія стала для вас позитивним та незабутнім досвідом. Записуйтесь - поки є
        місця :)
      </h5>
    </section>

    <section id="services" class="section services">
      <h2 class="services-title">Послуги та ціни</h2>
      <div class="services-prices">
        <!-- Таблиця для комп'ютерів -->
        <table class="services-table">
          <thead>
            <tr>
              <th></th>
              <th>Богдана</th>
              <th>Іван</th>
              <th>Світлана</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Класична стрижка</th>
              <td>400 ₴</td>
              <td>400 ₴</td>
              <td>600 ₴</td>
            </tr>
            <tr>
              <th>Класична стрижка + стрижка бороди</th>
              <td>700 ₴</td>
              <td>900 ₴</td>
              <td>400 ₴</td>
            </tr>
            <tr>
              <th>
                Full service
                <br />
                <span class="description">(стрижка + борода + догляд за обличчям)</span>
              </th>
              <td>1200 ₴</td>
              <td>400 ₴</td>
              <td>1500 ₴</td>
            </tr>
            <tr>
              <th>
                Дитяча стрижка
                <br />
                <span class="description">(6-12 років)</span>
              </th>
              <td>250 ₴</td>
              <td>400 ₴</td>
              <td>350 ₴</td>
            </tr>
            <tr>
              <th>Стрижка машинкою</th>
              <td>250 ₴</td>
              <td>350 ₴</td>
              <td>400 ₴</td>
            </tr>
            <tr>
              <th>Стрижка бороди</th>
              <td>300 ₴</td>
              <td>400 ₴</td>
              <td>400 ₴</td>
            </tr>
            <tr>
              <th>Стрижка + фарбування бороди</th>
              <td>600 ₴</td>
              <td>800 ₴</td>
              <td>400 ₴</td>
            </tr>
            <tr>
              <th>Видалення волосся воском</th>
              <td>150 ₴</td>
              <td>150 ₴</td>
              <td>400 ₴</td>
            </tr>
          </tbody>
        </table>

        <!-- Мобільний вигляд -->
        <div class="services-prices">
          <div class="service-item">
            <div class="service-name">Класична стрижка</div>
            <div class="service-prices">
              <span>Богдана: 400 ₴</span>
              <span>Іван: 400 ₴</span>
              <span>Світлана: 600 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Класична стрижка + стрижка бороди</div>
            <div class="service-prices">
              <span>Богдана: 700 ₴</span>
              <span>Іван: 900 ₴</span>
              <span>Світлана: 400 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Full service</div>
            <div class="service-description">(стрижка + борода + догляд за обличчям)</div>
            <div class="service-prices">
              <span>Богдана: 1200 ₴</span>
              <span>Іван: 400 ₴</span>
              <span>Світлана: 1500 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Дитяча стрижка</div>
            <div class="service-description">(6-12 років)</div>
            <div class="service-prices">
              <span>Богдана: 250 ₴</span>
              <span>Іван: 400 ₴</span>
              <span>Світлана: 350 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Стрижка машинкою</div>
            <div class="service-prices">
              <span>Богдана: 250 ₴</span>
              <span>Іван: 350 ₴</span>
              <span>Світлана: 400 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Стрижка бороди</div>
            <div class="service-prices">
              <span>Богдана: 300 ₴</span>
              <span>Іван: 400 ₴</span>
              <span>Світлана: 400 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Стрижка + фарбування бороди</div>
            <div class="service-prices">
              <span>Богдана: 600 ₴</span>
              <span>Іван: 800 ₴</span>
              <span>Світлана: 400 ₴</span>
            </div>
          </div>

          <div class="service-item">
            <div class="service-name">Видалення волосся воском</div>
            <div class="service-prices">
              <span>Богдана: 150 ₴</span>
              <span>Іван: 150 ₴</span>
              <span>Світлана: 400 ₴</span>
            </div>
          </div>
        </div>


      </div>
      <button class="booking-button" @click="$router.push('/auth')">Записатись</button>
    </section>


    <!-- СЕКЦІЯ: Team ------------------------------------------------->
    <section id="team" class="section team">
      <h2>Наша команда</h2>
      <div class="team-view">
        <!-- Перукар 1 -->
        <div class="team-view-person">
          <div class="team-view-person-img">
            <img src="@/assets/perykar1.png" alt="Перукар №1">
          </div>
          <div class="team-view-person-block">
            <div class="team-view-person-name">Богдана</div>
            <div class="team-view-person-position">Супер пупер Барбер</div>
            <button class="booking-button" @click="$router.push('/auth')">Записатись</button>
          </div>
        </div>
        <!-- Перукар 2 -->
        <div class="team-view-person">
          <div class="team-view-person-img">
            <img src="@/assets/perykar2.png" alt="Перукар №2">
          </div>
          <div class="team-view-person-block">
            <div class="team-view-person-name">Іван</div>
            <div class="team-view-person-position">Топ барбер</div>
            <button class="booking-button" @click="$router.push('/auth')">Записатись</button>
          </div>
        </div>
        <!-- Перукар 3 -->
        <div class="team-view-person">
          <div class="team-view-person-img">
            <img src="@/assets/perykar3.png" alt="Перукар №3">
          </div>
          <div class="team-view-person-block">
            <div class="team-view-person-name">Світлана</div>
            <div class="team-view-person-position">Топ барбер</div>
            <button class="booking-button" @click="$router.push('/auth')">Записатись</button>
          </div>
        </div>
      </div>
      <p>Майстри з великим досвідом, які працюють для вашого комфорту.</p>
    </section>

    <!-- СЕКЦІЯ: Inst Subs ------------------------------------------------->
    <section id="instagram" class="section instagram">
      <div class="instagram-content">
        <h2>СЛІДКУЙТЕ ЗА НАМИ В INSTAGRAM</h2>
        <a class="booking-button" href="https://www.instagram.com/trikurbogdana/">Підписатись</a>
      </div>
      <div class="circle-container">
        <!-- SVG з текстом по колу -->
        <svg viewBox="0 0 100 100" class="circle-svg">
          <defs>
            <path id="circlePath" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"></path>
          </defs>
          <text class="circle-text">
            <textPath xlink:href="#circlePath" textLength="251">
              СЛІДКУЙТЕ ЗА НАМИ В INSTAGRAM • FOLLOW US ON INSTAGRAM •
            </textPath>
          </text>
        </svg>
        <!-- Зображення поверх кола -->
        <img src="@/assets/inst-tel.png" alt="Instagram Preview" class="image-over-circle" />
      </div>
    </section>


    <!-- СЕКЦІЯ: Контакти -->
    <section id="contact" class="section contact">
      <h2>Контакти</h2>
      <div class="contact-info">
        <div class="contact-item">
          <h4>Адреса</h4>
          <button class="contact-button">Мальовнича 9, Ужгород</button>
        </div>
        <div class="contact-item">
          <h4>Телефон</h4>
          <button class="contact-button">+380 50 700 0748</button>
        </div>
        <div class="contact-item">
          <h4>Графік роботи</h4>
          <button class="contact-button">Пн-Сб 9:00-19:00</button>
        </div>
      </div>
      <p class="contact-note">
        Поряд з салоном завжди є вільні місця для паркування.
      </p>
      <!-- Інтеграція мапи -->
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8843089732954!2d22.2846462!3d48.6366011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739183734a62d37%3A0x8e201155440207f3!2z0KLQkNCk0KDRltC70YwsIDksINCY0LLRgdGM0LrQsNGFLCDQm9C10LrRgdCw0LvRjNC90ZbRlywg0KHRgNC-0YHQvy4sIDg4MDAw!5e0!3m2!1sbg!2sua!4v1675861523586!5m2!1sbg!2sua"
          width="90%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Кнопка повернення нагору -->
        <button class="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });">
          <svg xmlns="http://www.w3.org/2000/svg" class="back-to-top-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <!-- Навігація -->
        <div class="footer-nav">
          <a href="#about" class="footer-link">Про нас</a>
          <a href="#services" class="footer-link">Послуги та ціни</a>
          <a href="#team" class="footer-link">Наша команда</a>
          <a href="#contact" class="footer-link">Контакти</a>
        </div>

        <!-- Логотип -->
        <div class="footer-logo">
          <img src="@/assets/logo-haircut.png" alt="Logo Haircut" />
        </div>

        <!-- Копірайт -->
        <p class="footer-copyright">
          © ВСІ ПРАВА ЗАХИЩЕНІ 2024
        </p>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    // Toggle the active class for mobile menu
    burgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Close the menu when a menu item is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  },
};
</script>



<style>
/* Базові стилі для сторінки */
.home {
  line-height: 1.6;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  /* Забороняє горизонтальний скрол */
}


/* SECTIONS */
.section {
  padding: 50px 20px;
  background-color: white;
}

/* Центрування заголовків */
.section h1,
.section h2 {
  text-align: center;
}

/* Центрування тексту та списків */
.section p,
.section ul {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}


/* SECTION: навігації */
.navbar {
  position: fixed;
  top: 0;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Логотип */
.logo-navbar img {
  max-width: 120px;
}

/* Навігація */
.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
}

.nav-menu li a:hover {
  color: #635949;
}

/* Соціальні іконки */
.social img {
  max-width: 30px;
}

/* Бургер-меню */
.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 900;
}

.burger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background: #000;
  border-radius: 2px;
}

/* Мобільна версія */
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
    margin-right: 20px;
  }

  .nav-menu {
    position: fixed;
    top: 85px;
    right: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    padding-top: 50px;
    /* Піднімаємо текст вгору */
  }

  .nav-menu li a {
    font-size: 22px;
    /* Збільшуємо текст меню */
    font-weight: bold;
    color: #000;
    /* Чорний колір тексту */
  }

  .nav-menu li a:hover {
    color: #635949;
    /* Колір при наведенні */
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .social {
    display: none;
  }
}




/* SECTION: привітання ---------------------------*/
.welcome {
  position: relative;
  height: 100vh;
  /* Секція займає весь екран */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

/* Фонове зображення */
.barbershop-photo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/barbershop-photo.png");
  /* Замінити на шлях до вашого зображення */
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) blur(5px);
  /* Чорно-біле зображення із розмиттям */
  z-index: 1;
  /* Розташування за контентом */
}

/* Контент поверх */
.welcome-content {
  position: relative;
  z-index: 2;
  /* Розташування над фоном */
  color: white;
  /* Текст білий */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  /* Тінь для тексту */
}

/* Логотип */
.logo-welcome-desktop img {
  max-width: 250px;
  /* Збільшено логотип */
  margin-bottom: 20px;
}

/* Текст привітання */
.welcome-text-desktop {
  font-size: 36px;
  /* Збільшено розмір тексту */
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  line-height: 1.4;
}

/* Кнопка "Записатися" */
.booking-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #a08582;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 16px;
  padding: 12px 30px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.booking-button:hover {
  background-color: #777777;
  transform: scale(1.05);
}

/* Адаптація для телефонів */
@media (max-width: 768px) {
  .welcome {
    height: 100vh;
    padding: 20px;
  }

  .welcome-content {
    padding: 0 20px;
    font-size: 90%;
  }

  .logo-welcome-desktop img {
    max-width: 180px;
    /* Логотип менший на мобільних */
  }

  .welcome-text-desktop {
    font-size: 24px;
    /* Зменшено розмір тексту */
  }

  .booking-button {
    font-size: 16px;
    padding: 10px 24px;
  }
}




/* SECTION: About us */
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 100px;
  border-bottom: 2px solid #ddd;
  text-align: center;
}

.about h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.about h5 {
  font-size: 18px;
  max-width: 800px;
  line-height: 1.6;
  color: #555;
}

/* Адаптація для мобільних пристроїв */
@media (max-width: 768px) {
  .about {
    padding-top: 10px;
    padding-bottom: 50px;
  }

  .about h1 {
    font-size: 28px;
    /* Зменшено розмір заголовка */
  }

  .about h5 {
    font-size: 16px;
    /* Зменшено текст */
    max-width: 90%;
    /* Зменшено ширину тексту для зручності перегляду */
    line-height: 1.4;
    /* Трохи зменшено міжрядковий інтервал */
    padding: 0 15px;
    /* Додано відступи з боків */
  }
}


/* SECTION: Servise */
.services {
  text-align: center;
  padding: 50px 20px;
  border-bottom: 2px solid #ddd;
}

.services-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #333;
}

.services-prices {
  margin-top: 20px;
}

.services-table {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.services-table.no-border th,
.services-table.no-border td {
  border: none;
}

.services-table thead th {
  color: #333;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  text-align: center;
}

.services-table th,
.services-table td {
  padding: 14px;
  font-size: 16px;
  color: #555;
  text-align: center;
  border-bottom: 0.5px solid #ddd;
}

.services-table tbody th {
  text-align: left;
  font-weight: normal;
  padding-right: 10px;
  width: 40%;
}

.services-table .description {
  font-size: 14px;
  color: #888;
}

/* Кнопка "Записатися" */
.booking-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #a08582;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 16px;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.booking-button:hover {
  background-color: #777777;
  transform: scale(1.05);
}

/* Приховати картки на десктопній версії */
@media (min-width: 769px) {
  .services-prices .service-item {
    display: none; /* Приховуємо картки на ширині від 769px */
  }

  .services-table {
    display: table; /* Відображаємо таблицю на десктопі */
  }
}
/* Мобільна версія для карток */
@media (max-width: 768px) {
  .services-table {
    display: none;
  }

  .services-prices {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .services-prices .service-item {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .services-prices .service-item .service-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .services-prices .service-item .service-description {
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;
  }

  .services-prices .service-item .service-prices {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #555;
  }
}



/*SECTION Our team */
.team {
  text-align: center;
  padding: 50px 20px;
}

.team h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #333;
}

.team p {
  margin-top: 20px;
  font-size: 16px;
  color: #666;
}

/* Загальний контейнер для всіх майстрів */
.team-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  /* Відступ між майстрами */
}

/* Контейнер для одного майстра */
.team-view-person {
  width: 300px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-view-person:hover {
  transform: translateY(-5px);
}

/* Фото майстра */
.team-view-person-img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* Інформаційний блок */
.team-view-person-block {
  padding: 20px;
}

.team-view-person-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.team-view-person-position {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
}

/* Кнопка "Записатися" */
.team-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #a08582;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.team-button:hover {
  background-color: #8e6d68;
  transform: scale(1.05);
}


/* SECTION Instagram */
.instagram {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #323232;
  /* Темний фон */
  width: 100%;
  padding: 70px 0 42px;
  color: white;
}

.circle-container {
  position: relative;
  width: 400px;
  height: 400px;
  margin-right: 60px;
  /* Відступ між текстовим блоком і колом */
}

.circle-svg {
  width: 110%;
  height: 110%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  animation: spin 15s linear infinite;
  z-index: 1;
  /* Розташування під зображенням */
}

.circle-text {
  fill: white;
  /* Колір тексту */
  font-size: 3px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Зображення поверх кола */
.image-over-circle {
  position: absolute;
  top: 90%;
  /* Центруємо по вертикалі */
  left: 50%;
  /* Центруємо по горизонталі */
  transform: translate(-50%, -50%);
  z-index: 3;
  /* Зображення вище кола */
  height: 470px;
  width: auto;
  display: block;
}

/* Анімація обертання */
@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Контент тексту ліворуч */
.instagram-content {
  text-align: center;
  max-width: 400px;
}

.instagram-content h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.instagram-button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #a08582;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.instagram-button:hover {
  background-color: #8e6d68;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .instagram {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #323232;
    padding: 0;
  }

  .instagram-content {
    margin-bottom: 60px;
    padding-top: 0;
  }

  .instagram-content h2 {
    font-size: 34px; /* Збільшено розмір тексту */
    font-weight: 400; /* Зроблено тонший текст */
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  }

  .instagram-button {
    font-size: 14px;
    padding: 10px 24px;
    margin-bottom: 20px; /* Простір між кнопкою і кругом */
    background-color: #a85d5d; /* Яскравий відтінок для кнопки */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  .instagram-button:hover {
    background-color: #883c3c; /* Темніший відтінок для hover */
  }

  .circle-container {
    width: 280px; /* Зменшено для мобільних */
    height: 280px;
    margin: 0 auto;
  }

  .circle-svg {
    width: 130%;
    height: auto;
    animation: spin 15s linear infinite;
  }

  .image-over-circle {
    width: 140%;
    height: auto;
    max-width: 500px; /* Зображення обмежено для мобільних */
    margin: -20px auto 0; /* Вирівнювання зображення */
    left: 47%;
  }
}

/* СЕКЦІЯ: Контакти */
.contact {
  text-align: center;
  padding: 50px 20px;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.contact-item {
  margin: 10px 20px;
}

.contact-item h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background-color: #f0f0f0;
}

/* Карта */
.map {
  margin-top: 30px;
  border-radius: 10px;
  overflow: hidden;
}
@media (max-width: 768px) {
  .contact {
    padding: 10px 5px; /* Менше відступів для мобільних */
  }

  .contact h2 {
    font-size: 28px; /* Збільшений розмір заголовка */
    margin-bottom: 5px;
  }

  .contact-info {
    display: flex;
    flex-direction: column; /* Вирівнюємо контактні елементи вертикально */
    gap: 10px;
    margin-bottom: 20px;
  }

  .contact-item {
    text-align: center; /* Центрування тексту для мобільних */
    margin: 0px 2px;
  }

  .contact-item h4 {
    font-size: 14px; /* Трохи зменшений розмір тексту */
    margin-bottom: 10px;
    color: #555;
  }

  .contact-button {
    font-size: 16px; /* Збільшений шрифт кнопки */
    padding: 12px 24px; /* Більші відступи */
    color: white;
    background-color: #a85d5d; /* Яскравіший відтінок */
    border: none; /* Прибрано рамки */
    border-radius: 25px; /* Закруглені краї */
    transition: all 0.3s ease-in-out;
  }

  .contact-button:hover {
    background-color: #883c3c; /* Темніший відтінок на hover */
  }

  .contact-note {
    font-size: 14px; /* Зменшений текст примітки */
    margin-top: 10px;
    color: #777;
    padding: 0 10px;
  }

  .map {
    margin-top: 20px;
    width: 100%; /* Займає весь екран */
    height: 300px; /* Зменшена висота для мобільних */
    border-radius: 10px;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}


/* SECTION: FOOTER */
.footer {
  background-color: white;
  padding: 20px 0;
  text-align: center;
  position: relative;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* Навігація */
.footer-nav {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.footer-link {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #a08582;
}

/* Логотип */
.footer-logo img {
  max-width: 100px;
}

/* Копірайт */
.footer-copyright {
  font-size: 12px;
  color: #888;
}

/* Кнопка повернення нагору */
.back-to-top {
  position: absolute;
  top: -30px;
  right: 20px;
  background-color: white;
  color: #333;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background-color: #333;
  color: white;
}

.back-to-top-icon {
  width: 20px;
  height: 20px;
}
@media (max-width: 768px) {
  .footer {
    padding: 30px 10px; /* Менше відступів для мобільних */
    text-align: center; /* Центруємо весь текст */
  }

  .footer-container {
    gap: 20px; /* Більший відступ між елементами */
  }

  /* Навігація */
  .footer-nav {
    flex-direction: column; /* Розташування навігації вертикально */
    gap: 10px; /* Відстань між пунктами меню */
  }

  .footer-link {
    font-size: 16px; /* Збільшений шрифт для читабельності */
    color: #333;
  }

  .footer-link:hover {
    color: #a08582; /* Збереження стилю на hover */
  }

  /* Логотип */
  .footer-logo img {
    max-width: 80px; /* Зменшення логотипа */
    margin-top: 15px;
  }

  /* Копірайт */
  .footer-copyright {
    font-size: 14px; /* Збільшення тексту */
    color: #888;
    margin-top: 10px;
  }

  /* Кнопка повернення нагору */
  .back-to-top {
    top: -20px; /* Менше зміщення вгору */
    right: 15px; /* Менше зміщення вправо */
    width: 50px; /* Збільшення розміру кнопки */
    height: 50px;
    background-color: #f0f0f0; /* Світліший фон */
    color: #333;
    border-radius: 25px; /* Кругла форма */
  }

  .back-to-top:hover {
    background-color: #a08582; /* Hover-ефект для мобільних */
    color: white;
  }

  .back-to-top-icon {
    width: 25px; /* Більша іконка для читабельності */
    height: 25px;
  }
}

</style>