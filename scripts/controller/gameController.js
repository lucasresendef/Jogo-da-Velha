class gameController {
  constructor() {
    this.array = [];

    this.playerX = document.querySelector("#playerX");
    this.playerO = document.querySelector("#playerO");
    this.gamer = document.querySelector("#gamer")
    this.restart = document.querySelector(".footer");

    this.casaumum = document.querySelector("#casaumum");
    this.casadoisum = document.querySelector("#casadoisum");
    this.casatresum = document.querySelector("#casatresum");
    this.casaumdois = document.querySelector("#casaumdois");
    this.casadoisdois = document.querySelector("#casadoisdois");
    this.casatresdois = document.querySelector("#casatresdois");
    this.casaumtres = document.querySelector("#casaumtres");
    this.casadoistres = document.querySelector("#casadoistres");
    this.casatrestres = document.querySelector("#casatrestres");
    this.appendletters();
    this.wins();
    this.clearAll();
    this.reload();
  }

  appendletters() {
    this.casaumum.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casaumum.innerHTML == "") {
            this.casaumum.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casaumum.innerHTML == "") {
            this.casaumum.style.color = "#FFFFFF";
            this.casaumum.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casadoisum.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casadoisum.innerHTML == "") {
            this.casadoisum.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casadoisum.innerHTML == "") {
            this.casadoisum.style.color = "#FFFFFF";
            this.casadoisum.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casatresum.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casatresum.innerHTML == "") {
            this.casatresum.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casatresum.innerHTML == "") {
            this.casatresum.style.color = "#FFFFFF";
            this.casatresum.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casaumdois.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casaumdois.innerHTML == "") {
            this.casaumdois.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casaumdois.innerHTML == "") {
            this.casaumdois.innerHTML = "O";
            this.casaumdois.style.color = "#FFFFFF";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casadoisdois.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casadoisdois.innerHTML == "") {
            this.casadoisdois.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casadoisdois.innerHTML == "") {
            this.casadoisdois.style.color = "#FFFFFF";
            this.casadoisdois.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casatresdois.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casatresdois.innerHTML == "") {
            this.casatresdois.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casatresdois.innerHTML == "") {
            this.casatresdois.style.color = "#FFFFFF";
            this.casatresdois.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casaumtres.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casaumtres.innerHTML == "") {
            this.casaumtres.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casaumtres.innerHTML == "") {
            this.casaumtres.style.color = "#FFFFFF";
            this.casaumtres.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        }
      }
    });
    this.casadoistres.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casadoistres.innerHTML == "") {
            this.casadoistres.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casadoistres.innerHTML == "") {
            this.casadoistres.style.color = "#FFFFFF";
            this.casadoistres.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }
          this.clearAll();
          console.log(this.array);
        }
      }
    });

    this.casatrestres.addEventListener("click", (e) => {
      if (!this.wins() && !this.tie()) {
        if (this.player() == 1) {
          if (this.casatrestres.innerHTML == "") {
            this.casatrestres.innerHTML = "X";
            this.array.push("X");
          } else {
            alert("Casa ocupada");
          }

          this.clearAll();
          console.log(this.array);
        } else {
          if (this.casatrestres.innerHTML == "") {
            this.casatrestres.style.color = "#FFFFFF";
            this.casatrestres.innerHTML = "O";
            this.array.push("O");
          } else {
            alert("Casa ocupada");
          }
          this.clearAll();
          console.log(this.array);
        }
      }
    });
  }

  player() {
    let array = this.array[this.array.length - 1];

    if (array == "X") {
      this.gamer.innerHTML = "X's TURN";
      this.playerX.style.backgroundColor = "#87ceeb";
      this.playerO.style.backgroundColor = "#FFFFFF";
      return 0;
    } else {
      this.gamer.innerHTML = "O's TURN";
      this.playerO.style.backgroundColor = "#87ceeb";
      this.playerX.style.backgroundColor = "#FFFFFF";
      return 1;
    }
  }

  tie() {
    let crowded = this.array.length;
    if (crowded > 8 && !this.wins()) {
      window.location.href = "../views/tie.html";
    }
  }
  wins() {
    //LINE 1
    if (
      this.casaumum.innerHTML == "X" &&
      this.casaumdois.innerHTML == "X" &&
      this.casaumtres.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumum.innerHTML == "O" &&
      this.casaumdois.innerHTML == "O" &&
      this.casaumtres.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //LINE 2
    if (
      this.casadoisum.innerHTML == "X" &&
      this.casadoisdois.innerHTML == "X" &&
      this.casadoistres.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casadoisum.innerHTML == "O" &&
      this.casadoisdois.innerHTML == "O" &&
      this.casadoistres.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //LINE 3
    if (
      this.casatresum.innerHTML == "X" &&
      this.casatresdois.innerHTML == "X" &&
      this.casatrestres.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casatresum.innerHTML == "O" &&
      this.casatresdois.innerHTML == "O" &&
      this.casatrestres.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //COLUMN 1
    if (
      this.casaumum.innerHTML == "X" &&
      this.casadoisum.innerHTML == "X" &&
      this.casatresum.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumum.innerHTML == "O" &&
      this.casadoisum.innerHTML == "O" &&
      this.casatresum.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //COLUMN 2
    if (
      this.casaumdois.innerHTML == "X" &&
      this.casadoisdois.innerHTML == "X" &&
      this.casatresdois.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumdois.innerHTML == "O" &&
      this.casadoisdois.innerHTML == "O" &&
      this.casatresdois.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    // COLUMN 3
    if (
      this.casaumtres.innerHTML == "X" &&
      this.casadoistres.innerHTML == "X" &&
      this.casatrestres.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumtres.innerHTML == "O" &&
      this.casadoistres.innerHTML == "O" &&
      this.casatrestres.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //DIAGONAL 1
    if (
      this.casaumum.innerHTML == "X" &&
      this.casadoisdois.innerHTML == "X" &&
      this.casatrestres.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumum.innerHTML == "O" &&
      this.casadoisdois.innerHTML == "O" &&
      this.casatrestres.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
    //DIAGONAL 2
    if (
      this.casaumtres.innerHTML == "X" &&
      this.casadoisdois.innerHTML == "X" &&
      this.casatresum.innerHTML == "X"
    ) {
      window.location.href = "../views/xwon.html";
    }
    if (
      this.casaumtres.innerHTML == "O" &&
      this.casadoisdois.innerHTML == "O" &&
      this.casatresum.innerHTML == "O"
    ) {
      window.location.href = "../views/owon.html";
    }
  }

  clearAll() {
    if (this.tie() || this.wins()) {
      this.array = [];
      this.casaumum.innerHTML == "";
      this.casaumdois.innerHTML == "";
      this.casaumtres.innerHTML == "";
      this.casaumdois.innerHTML == "";
      this.casadoisdois.innerHTML == "";
      this.casatresdois.innerHTML == "";
      this.casaumtres.innerHTML == "";
      this.casadoistres.innerHTML == "";
      this.casatrestres.innerHTML == "";
    }
  }
  reload() {
    this.restart.addEventListener("click", (e) => {
      window.location.href = '/main.html'
      location.reload();
    });
  }
}
