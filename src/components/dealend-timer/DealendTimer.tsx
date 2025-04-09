import { useCallback, useEffect, useState } from "react";

const DealendTimer = () => {
  // Configura la fecha futura para 24 horas después
  const [futureDate] = useState(() => {
    const now = new Date().getTime();
    return new Date(now + 24 * 60 * 60 * 1000).getTime(); // 24 horas en milisegundos
  });

  // Función para calcular el tiempo restante
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = futureDate - now;

    // Si el tiempo ya terminó, devuelve ceros
    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalHours: 24 // Mostrará "24 Horas" al inicio
      };
    }

    // Cálculo de horas, minutos y segundos
    const totalHours = 24; // Siempre mostrará "24 Horas"
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
      totalHours
    };
  }, [futureDate]);

  // Estado para el tiempo restante
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Intervalo para actualizar cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Función para formatear a 2 dígitos
  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <div className="dealend-timer" id="dealend">
      <div className="dealend-timer">
        <div className="time-block">
          <div className="time">{timeLeft.totalHours}</div>
          <span className="day">Horas</span>
        </div>
        <span className="parentesis"></span>
        <div className="time-block">
          <div className="time">{formatTime(timeLeft.hours)}</div>
          <span className="dots">:</span>
        </div>
        <div className="time-block">
          <div className="time">{formatTime(timeLeft.minutes)}</div>
          <span className="dots">:</span>
        </div>
        <div className="time-block">
          <div className="time">{formatTime(timeLeft.seconds)}</div>
        </div>
        <span className="parentesis"></span>
      </div>
    </div>
  );
};

export default DealendTimer;