import React from 'react';

const MyComponent = ({ children }) => {
  return (
    <div style={styles.safeArea}>
      <div style={styles.scroll}>
        <div style={{ height: 20 }}></div>
        <div style={styles.view}>{children}</div>
        <div style={{ height: 20 }}></div>
      </div>
    </div>
  );
};

const styles = {
  safeArea: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff', // Color de fondo deseado
  },
  scroll: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '15px',
    backgroundColor: '#ffffff', // Color de fondo deseado
  },
  view: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '10px',
  },
};

export default MyComponent;
