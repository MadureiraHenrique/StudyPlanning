import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import { ButtonComponent } from "../ui/button-component";
import { useEffect, useState } from "react";

export const Pomodoro = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [cycles, setcycles] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  //pesquisar: strict mode do react afeta em modo dev, diminui 2 em 2

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds != 0) return prevSeconds - 1;

        setMinutes((prevMinutes) => {
          if (prevMinutes != 0) {
            return prevMinutes - 1;
          }

          setcycles((cicle) => cicle + 1);
          setShowMessage(true);
          setIsRunning(false);
          return 24;
        });

        return 59;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (cycles === 0) return;
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [cycles]);

  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center p-2">
      {showMessage && (
        <div
          className={`bg-white rounded border border-(--color-border) border-l-6 border-l-(--color-highlight) z-50 top-1 right-2 absolute w-60 h-20 p-2 flex items-center flex-col transition`}
        >
          <p className="font-bold">Parabéns</p>
          <p>ciclo {cycles} concluído</p>
        </div>
      )}
      <h1 className="font-bold text-9xl">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h1>
      <div className="flex gap-2 items-center justify-center ">
        <ButtonComponent
          onClick={() => setIsRunning((prev) => !prev)}
          className="hover:bg-(--color-primary) transition"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </ButtonComponent>
        <ButtonComponent
          className="hover:bg-(--color-primary) transition"
          onClick={() => {
            setIsRunning(false);
            setMinutes(25);
            setSeconds(0);
          }}
        >
          <FaStop />
        </ButtonComponent>
      </div>
      <p className="font-bold text-white bg-(--color-text-primary) p-2 rounded-2xl">
        {cycles} ciclos
      </p>
    </div>
  );
};
