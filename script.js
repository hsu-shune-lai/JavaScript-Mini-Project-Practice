const LoveCalculate = () => {
  const firstName = document.getElementById("firstName").value.trim();
  const secondName = document.getElementById("secondName").value.trim();

  if (firstName === "" || secondName === "") {
    alert("Please enter both names");
  } else {
    const lovePercent = Math.floor(Math.random() * 100);
    const result = document.getElementById("result");

    // Assign colors to the names
    const firstNameColored = `<span style="color: #79204b;">${firstName}</span>`;
    const secondNameColored = `<span style="color: #79204b;">${secondName}</span>`;

    // Set the initial result with colored names and love percentage
    result.innerHTML = `${firstNameColored} and ${secondNameColored}'s Love Percent: ${lovePercent}%`;

    // Add appropriate message based on the love percentage
    if (lovePercent <= 30) {
      result.innerHTML += `<br><span style="color: red;">Not a good Match. Fighting</span>`;
    } else if (lovePercent >= 30 && lovePercent <= 70) {
      result.innerHTML += `<br><span style="color: orange;">There is potential. Give it a try!</span>`;
    } else {
      result.innerHTML += `<br><span style="color: green;">Great Match! Love is in the air</span>`;
    }
  }
};
