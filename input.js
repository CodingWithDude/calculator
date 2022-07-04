export class InputHandler {
  constructor(input) {
    this.input = input;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        this.input.displayCurrent.innerHTML = Number(e.key);
      }
      console.log(e.key, this.keys);
    });
  }
}
