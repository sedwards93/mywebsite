const toggleLight = () => {
  const lightbulb = document.getElementById("lightbulb");
  const name = document.getElementById("name");
  const body = document.getElementsByTagName("body");

  lightbulb.addEventListener("click", () => {
    if (name.innerHTML === "Symion.") {
      name.innerHTML = "Symioff.";
      document.body.className = "dark";
    } else {
      name.innerHTML = "Symion.";
      document.body.className = "light";
    }
  });
};

toggleLight();
