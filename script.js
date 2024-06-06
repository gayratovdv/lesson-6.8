const limitUsers = document.getElementById("limitUsers");
const limitAge = document.querySelector("#limitAge");
const formUsers = document.querySelector(".formUsers");
const sortedCards = document.querySelector(".cardWrapper");
const cardsWrapper = document.querySelector(".cardsWrapper");

formUsers.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then(data => filterFunction(data.users.slice(0, limitUsers.value)));

  function filterFunction(users) {
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";

      const id = document.createElement("h3");
      id.textContent = `ID: ${user.id}`;
      id.className = "text";

      const userName = document.createElement("h5");
      userName.textContent = `userName: ${user.firstName}`;
      userName.className = "text";

      const userAge = document.createElement("p");
      userAge.textContent = `Age: ${user.age}`;
      userAge.className = "text";

      const userGender = document.createElement("p");
      userGender.textContent = `Gender: ${user.gender}`;
      userGender.className = "text";

      card.append(id, userName, userAge, userGender);
      cardsWrapper.append(card)
    });

    users.forEach((user) => {
      if (user.age > limitAge.value) {
        const card = document.createElement("div");
        card.className = "card";

        const id = document.createElement("h3");
        id.textContent = `ID: ${user.id}`;
        id.className = "text";

        const userName = document.createElement("h5");
        userName.textContent = `userName: ${user.firstName}`;
        userName.className = "text";

        const userAge = document.createElement("p");
        userAge.textContent = `Age: ${user.age}`;
        userAge.className = "text";

        const userGender = document.createElement("p");
        userGender.textContent = `Gender: ${user.gender}`;
        userGender.className = "text";

        card.append(id, userName, userAge, userGender);
        sortedCards.append(card);
      }
    });
  }
});
