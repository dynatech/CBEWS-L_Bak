import React, { useEffect } from 'react';

const withDarkMode = <T extends React.ElementType>(WrappedComponent: T) => {
  type Props = React.ComponentProps<T>;

  return (props: Props) => {
    useEffect(() => {
      const setDarkMode = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      setDarkMode();
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeMediaQuery.addEventListener('change', setDarkMode);

      return () => {
        darkModeMediaQuery.removeEventListener('change', setDarkMode);
      };
    }, []);

    return React.createElement(WrappedComponent, props);
  };
};

export default withDarkMode;