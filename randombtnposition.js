const c = document.querySelector(".container");
      const b = document.querySelector(".btn-random");
      function change() {
        const { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
          { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
          i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
          j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

        b.style.left = i + "px";
        b.style.top = j + "px";
      }
      b.addEventListener("click", change);

function muncul() {
        const muncul = document.querySelector("#button");
        muncul.classList.remove("d-none");
      }
      setTimeout(muncul, 23000)
