export const inactivityTime = ( setModalUnauthorized, setInactivoUser) => {
  let tiempoInactivo;

    const reiniciarTemporizador = () => {
      clearTimeout(tiempoInactivo);
      tiempoInactivo = setTimeout(() => {
        setInactivoUser(true);
        setModalUnauthorized(true);
      }, 1800000000);
    };

    reiniciarTemporizador();

    const manejarActividad = () => {
      setInactivoUser(false);
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
}