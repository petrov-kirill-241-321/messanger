import React, { useEffect } from "react";
import s from "./NotFound.module.css";
import { NavLink } from "react-router-dom";

export function NotFound() {
  useEffect(() => {
    function createStar() {
      var body = document.body;
      var right = Math.random() * 500;
      var top = Math.random() * window.innerHeight; // ✅ Исправлено
      var star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      star.style.top = top + "px";

      function runStar() {
        if (right >= window.innerWidth) {
          // ✅ Исправлено
          star.remove();
        }
        right += 3;
        star.style.right = right + "px";
      }

      let moveInterval = setInterval(runStar, 10);

      setTimeout(() => {
        clearInterval(moveInterval);
        star.remove();
      }, 5000); // Удаляем звезду через 5 секунд, чтобы избежать перегрузки DOM
    }

    let starInterval = setInterval(createStar, 100);

    return () => clearInterval(starInterval); // ✅ Очистка при размонтировании
  }, []);

  return (
    <div className={s.notfoundcontainer}>
      <div className={s.text}>
        <div className={s.title}>ERROR</div>
        <h1>404</h1>
        <hr />
        <h1 className={s.title}>Page Not Found</h1>
        <NavLink className={s.home} to="/">
          Home
        </NavLink>
      </div>

      <div className={s.astronaut}>
        <img
          className="astronaut-img"
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt="Astronaut"
        />
      </div>
    </div>
  );
}
