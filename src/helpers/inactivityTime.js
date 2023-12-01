export const inactivityTime = (setModalUnauthorized) => {
  let tiempoInactivo;

  const reiniciarTemporizador = () => {
    clearTimeout(tiempoInactivo);
    tiempoInactivo = setTimeout(() => {
      setModalUnauthorized(true);
    }, 180000000);
  };

  reiniciarTemporizador();

  const manejarActividad = () => {
    reiniciarTemporizador();
  };

  // Agrega los event listeners necesarios para detectar la actividad del usuario
  document.addEventListener("mousemove", manejarActividad);
  document.addEventListener("keydown", manejarActividad);

  return () => {
    // Limpia los event listeners cuando el componente se desmonta
    clearTimeout(tiempoInactivo);
    document.removeEventListener("mousemove", manejarActividad);
    document.removeEventListener("keydown", manejarActividad);
  };
};
