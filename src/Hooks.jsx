import React, { useState, useContext, useEffect } from 'react';
// import ThemeContext from './context';

export default function Hooks(params) {
  const name = useFormInput('Seb');
  const surname = useFormInput('Maz');
  //   cosns theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div className={'theme'}>
      <input {...name} />
      <input {...surname} />
      <p>Width: {width}</p>
    </div>
  );
}

// Custom Hook - must always start with 'use'
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  //sideEffect - by default its Consistance and works on mount and update
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
