import React, { useState, useEffect } from 'react';

const Loader: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obj = document.querySelector('.preloader') as HTMLElement;
    const inner = document.querySelector('.preloader_inner') as HTMLElement;
    const page = document.querySelector('.content') as HTMLElement;

    obj.classList.add('show');
    page.classList.remove('show');

    let w = 0;
    const t = setInterval(() => {
      w = w + 1;
      setProgress(w);

      inner.textContent = w + '%';
      if (w === 100) {
        obj.classList.remove('show');
        page.classList.add('show');
        clearInterval(t);
        w = 0;
        if (onSuccess) {
          onSuccess();
        }
      }
    }, 20);

    return () => clearInterval(t);
  }, [onSuccess]);

  return (
    <div className="preloader">
      <div className="preloader_inner">{progress}%</div>
    </div>
  );
};

export default Loader;