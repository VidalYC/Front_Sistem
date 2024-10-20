import React from 'react';

function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-primary1 text-white fixed bottom-0 left-0 w-full">
      <p>© {new Date().getFullYear()} Universidad Popular del Cesar. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
