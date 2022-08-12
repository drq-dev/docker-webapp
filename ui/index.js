const updateJoke = async () => {
  const response = await fetch("http://localhost:3000");
  if (!response.ok) return "Witze können nicht geladen werden.";

  const { joke } = await response.json();

  const jokeParagraph = document.querySelector("#joke");
  jokeParagraph.innerHTML = joke;
};

const button = document.querySelector("button");
button.addEventListener("click", updateJoke);

updateJoke();
