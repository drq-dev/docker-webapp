const displayJoke = (joke) => {
  const jokeParagraph = document.querySelector("#joke");
  jokeParagraph.innerHTML = joke;
};

const updateJoke = async () => {
  try {
    const response = await fetch("http://localhost:3000");
    const { joke } = await response.json();
    displayJoke(joke);
  } catch (error) {
    displayJoke("Witze können nicht geladen werden.");
  }
};

const button = document.querySelector("button");
button.addEventListener("click", updateJoke);

updateJoke();
