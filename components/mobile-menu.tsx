'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function MobileMenu({ bookingUrl }: { bookingUrl: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
      </button>

      {open && (
        <div className="mobile-menu-panel" id="mobile-menu">
          <nav aria-label="Мобильная навигация">
            <a href="#about" onClick={close}>О нас</a>
            <a href="#services" onClick={close}>Услуги</a>
            <a href="#offers" onClick={close}>Акции</a>
            <a href="#contacts" onClick={close}>Контакты</a>
          </nav>
          <a
            className="button button-primary mobile-menu-book"
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Записаться онлайн
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      )}
    </>
  );
}
