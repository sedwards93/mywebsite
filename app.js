const toggleLight = () => {
  const lightbulb = document.getElementById("lightbulb");
  const name = document.getElementById("name");
  const body = document.getElementsByTagName("body");

  lightbulb.addEventListener("click", () => {
    if (name.innerHTML === "Symion.") {
      name.innerHTML = "Symioff.";
      document.body.className = "dark";
    } else if (name.innerHTML === "Symioff.") {
      name.innerText = "Symion.";
      document.body.className = "light";
    } else {
      console.log(name.innerHTML);
    }
  });
};

class TypeWriter {
  constructor(txtElement, words, wait = 500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt" id="name">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === this.words[2]) {
      document
        .getElementById("lightbulba")
        .classList.replace("hidden", "visible");
      return;
    } else if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

setTimeout(() => toggleLight(), 8000);
