import React from 'react';

const ContainerComponent = ({ children }) => {
  return (
    <div style={styles.safeArea}>
      <div style={styles.scroll}>
        <div style={styles.view}>{children}</div>
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
    overflowY: 'auto', // Agregar desplazamiento vertical si es necesario
  },
  scroll: {
    display: 'flex',
    flexWrap: 'wrap', // Permitir que los elementos se envuelvan en varias filas
    padding: '15px',
    backgroundColor: '#ffffff', // Color de fondo deseado
  },
  view: {
    display: 'flex',
    flexDirection: 'row', // Organizar los elementos de izquierda a derecha
    flexWrap: 'wrap', // Permitir que los elementos hijos se envuelvan en varias filas
    justifyContent: 'space-between', // Distribuir elementos uniformemente en la fila
    gap: '10px',
  },
};

export default ContainerComponent;
