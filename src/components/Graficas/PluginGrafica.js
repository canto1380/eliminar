export const backgroundPlugin = {
    id: "customBackground",
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const { top, left, width, height } = chartArea;
  
      ctx.save();
      ctx.fillStyle = "#FFFFFF"; // fondo blanco
      ctx.strokeStyle = "rgba(0,0,0,0.15)"; // borde gris suave
      ctx.lineWidth = 2;
  
      // Sombra
      ctx.shadowColor = "rgba(0,0,0,0.15)";
      ctx.shadowBlur = 12;
      ctx.shadowOffsetX = 4;
      ctx.shadowOffsetY = 4;
  
      // Dibujar rectángulo
      ctx.fillRect(left - 10, top - 10, width + 20, height + 20);
      ctx.strokeRect(left - 10, top - 10, width + 20, height + 20);
  
      ctx.restore();
    },
  };

  export const colorsGraphics = () => {
    const tituloPrincipal =  "rgb(1, 26, 75)"
    const leyenda = "rgb(0, 29, 85)"
    const tooltipBG = "rgba(17,24,39,0.95)"
    const tooltipBorde = "rgb(229, 231, 235)"
    const tooltipTitulo = "#F3F4F6"
    const tituloEjes = "rgb(0, 29, 85)"
    const valoresEjes = "rgba(0, 0, 0, 0.75)"
    const lineasEjes = "rgba(0,0,0,0.05)"

    return { 
      tituloPrincipal, 
      leyenda, 
      tooltipBG, 
      tooltipBorde, 
      tooltipTitulo, 
      tituloEjes, 
      valoresEjes, 
      lineasEjes 
    }
  }