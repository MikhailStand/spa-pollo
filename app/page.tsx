import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';

const bookingUrl =
  'https://widget.sonline.su/ru/services/1192266/?placeid=5531';

const services = [
  {
    title: 'SPA',
    text: 'Авторские ритуалы, хаммам, гидромассажная ванна и уходы за телом.',
    tags: ['Ритуалы', 'Бальнеотерапия', 'Хаммам'],
  },
  {
    title: 'Лицо',
    text: 'Медицинская, эстетическая и аппаратная косметология с деликатным подходом.',
    tags: ['Косметология', 'Уходы', 'Массаж лица'],
  },
  {
    title: 'Тело',
    text: 'Ручные и аппаратные техники для лёгкости, тонуса и глубокого расслабления.',
    tags: ['Массаж', 'Биостимуляция', 'Эпиляция'],
  },
  {
    title: 'Красота',
    text: 'Волосы, ногти, брови и макияж — всё для законченного образа в одном месте.',
    tags: ['Волосы', 'Маникюр', 'Brow bar'],
  },
];

const offers = [
  {
    title: 'Невесомость в Полло',
    description:
      'Гидромассажная ванна с хромотерапией, медитация на флотирующей кушетке и ароматерапия.',
    price: '3 500 ₽',
    note: 'Промокод: Баланс',
  },
  {
    title: 'Перезагрузка в Полло',
    description:
      'Парение в хаммаме, медитация на флотирующей кушетке, массажные очки и ароматерапия.',
    price: '4 000 ₽',
    note: 'Промокод: Баланс',
  },
];

function BookingLink({ className = '' }: { className?: string }) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      Записаться онлайн
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Полло Спа — на главную">
          <span className="logo-mark">P</span>
          <span className="logo-text">
            <strong>POLLO</strong>
            <small>SPA LOUNGE</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#offers">Акции</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header-book" href={bookingUrl} target="_blank" rel="noreferrer">
          Записаться
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>

        <MobileMenu bookingUrl={bookingUrl} />
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> SPA · КОСМЕТОЛОГИЯ · КРАСОТА</p>
          <h1>
            Место, где тело
            <em>вспоминает тишину</em>
          </h1>
          <p className="hero-lead">
            Полло Спа в Королёве — пространство бережного ухода,
            восстановления и красоты с 30-летней историей.
          </p>
          <div className="hero-actions">
            <BookingLink />
            <a className="button button-ghost" href="tel:+74955000606">
              <Phone aria-hidden="true" size={17} strokeWidth={1.8} />
              +7 495 500 06 06
            </a>
          </div>
          <div className="hero-meta">
            <p><MapPin aria-hidden="true" size={17} />Королёв, проспект Космонавтов, 4В</p>
            <p><Clock3 aria-hidden="true" size={17} />Ежедневно, 09:00–21:00</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Интерьер Полло Спа">
          <figure className="hero-image-wrap">
            <img
              className="hero-image"
              src="images/treatment-room.jpg"
              alt="Светлый кабинет ухода в Полло Спа"
            />
          </figure>
          <figure className="hero-image-small">
            <img src="images/spa-bath.jpg" alt="Гидромассажная ванна в Полло Спа" />
          </figure>
        </div>

        <a className="scroll-cue" href="#about">
          Листайте
          <ArrowDownRight aria-hidden="true" size={20} />
        </a>
      </section>

      <section className="statement" id="about">
        <p className="section-kicker">Философия Полло</p>
        <div className="statement-grid">
          <h2>
            Красота начинается
            <span>с внутреннего баланса.</span>
          </h2>
          <div className="statement-copy">
            <p>
              Мы соединяем SPA-ритуалы, косметологию и классические
              бьюти-услуги в одном спокойном пространстве. Здесь не торопят —
              здесь слышат вас и подбирают уход по состоянию, а не по шаблону.
            </p>
            <p>
              Уже 30 лет Полло Спа остаётся местом, куда возвращаются за
              бережным отношением и качественным уходом. Накопленный опыт
              помогает сочетать проверенные методики с современными
              процедурами — спокойно, деликатно и с вниманием к деталям.
            </p>
            <a href="#services" className="text-link">
              Выбрать направление <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="facts" aria-label="Преимущества Полло Спа">
          <div><strong>30 лет</strong><span>на рынке красоты</span></div>
          <div><strong>4 направления</strong><span>ухода в одном месте</span></div>
          <div><strong>7 дней</strong><span>в неделю для вас</span></div>
          <div><strong>Лицензия</strong><span>на медицинскую деятельность</span></div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-head">
          <div>
            <p className="section-kicker light">Пространство заботы</p>
            <h2>Выберите своё<br />состояние</h2>
          </div>
          <p>
            От короткой процедуры до полноценного ритуала восстановления —
            программа найдётся под ваш ритм и настроение.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <a
              className="service-row"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              key={service.title}
            >
              <div className="service-title">
                <h3>{service.title}</h3>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <p>{service.text}</p>
              <span className="service-arrow"><ArrowUpRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="ritual-section">
        <div className="ritual-image">
          <img src="images/beauty-room.jpg" alt="Цветы в светлом интерьере Полло Спа" />
          <span className="image-caption">Полло Спа · Королёв</span>
        </div>
        <div className="ritual-copy">
          <p className="section-kicker">Сезонный ритуал</p>
          <h2>
            Чёрная смородина<br />
            <span className="vitamin-line">с витамином <em>C</em></span>
          </h2>
          <p>
            Ароматерапевтический SPA-уход для уставшей кожи: сахарный скраб
            с миндальным маслом, обёртывание и распаривание в гидромассажной
            ванне или хаммаме.
          </p>
          <div className="ritual-details">
            <div><span>Продолжительность</span><strong>120 минут</strong></div>
            <div><span>Стоимость</span><strong><s>10 000 ₽</s> 9 000 ₽</strong></div>
          </div>
          <BookingLink />
        </div>
      </section>

      <section className="offers-section" id="offers">
        <div className="section-head dark-text">
          <div>
            <p className="section-kicker">Акции</p>
            <h2>Пауза, которая<br />меняет день</h2>
          </div>
          <p>Готовые сочетания процедур для быстрого и глубокого восстановления.</p>
        </div>
        <div className="offers-grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <Sparkles className="offer-icon" aria-hidden="true" strokeWidth={1.3} />
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offer-bottom">
                <div><strong>{offer.price}</strong><span>{offer.note}</span></div>
                <a href={bookingUrl} target="_blank" rel="noreferrer" aria-label={`Записаться: ${offer.title}`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gift-section">
        <div>
          <p className="section-kicker light">Подарочный сертификат</p>
          <h2>Подарите не вещь.<br /><em>Подарите состояние.</em></h2>
        </div>
        <div className="gift-copy">
          <p>
            На любую сумму или процедуру. Сертификат действует один год,
            а использовать его можно за несколько посещений.
          </p>
          <a className="button button-light" href="tel:+74955000606">
            Узнать подробнее <Phone aria-hidden="true" size={17} />
          </a>
        </div>
      </section>

      <section className="contacts-section" id="contacts">
        <div className="contact-copy">
          <p className="section-kicker">Контакты</p>
          <h2>Увидимся<br />в Полло</h2>
          <p className="contact-address">Московская область, г. Королёв,<br />проспект Космонавтов, 4В, 2 этаж</p>
          <div className="contact-links">
            <a href="tel:+74955000606">+7 495 500 06 06</a>
            <a href="tel:+79852209901">+7 985 220 99 01</a>
            <a href="mailto:pollospa@mail.ru">pollospa@mail.ru</a>
          </div>
          <div className="contact-actions">
            <BookingLink />
            <a
              className="button button-outline"
              href="https://yandex.ru/maps/?text=%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%91%D0%B2%2C%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%2C%204%D0%92"
              target="_blank"
              rel="noreferrer"
            >
              Открыть на карте <MapPin aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-card-label">Режим работы</span>
          <strong>09:00<br />— 21:00</strong>
          <p>Ежедневно<br />без выходных</p>
          <span className="contact-card-line" />
          <small>Справа от лифта на втором этаже</small>
        </div>
      </section>

      <footer>
        <a className="logo footer-logo" href="#top" aria-label="Полло Спа — наверх">
          <span className="logo-mark">P</span>
          <span className="logo-text"><strong>POLLO</strong><small>SPA LOUNGE</small></span>
        </a>
        <div className="footer-links">
          <a href="http://pollospalounge.ru/politika-konfidencialnosti" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
          <span>© 2026</span>
        </div>
        <p className="disclaimer">
          Стоимость услуг носит информационный характер и может отличаться от
          актуальной. Точную стоимость уточняйте у администратора. Лицензия на
          медицинскую деятельность № Л041-01162-50/00301735 от 22.10.2015.
        </p>
      </footer>
    </main>
  );
}
