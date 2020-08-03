import React from 'react';

const Error = () => {
  return (
    <div className="error">
      <p className="error__message">Ошибка загрузки предложений</p>
      <button className="error__button">Попробовать снова</button>
    </div>
  );
};

export default Error;
