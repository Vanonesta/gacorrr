const symbols = ["🍒", "🍋", "🍉", "🍇", "⭐", "🔔"];
const spinButton = document.getElementById("spinButton");
const message = document.getElementById("message");
const backgroundMusic = document.getElementById("backgroundMusic");
const spinSound = document.getElementById("spinSound");
const jackpotSound = document.getElementById("jackpotSound");
const toggleMusicButton = document.getElementById("toggleMusic");

spinButton.addEventListener("click", () => {
  const slot1 = document.getElementById("slot1");
  const slot2 = document.getElementById("slot2");
  const slot3 = document.getElementById("slot3");

  // Play spin sound
  spinSound.play();

  // Randomize slot results
  const result1 = symbols[Math.floor(Math.random() * symbols.length)];
  const result2 = symbols[Math.floor(Math.random() * symbols.length)];
  const result3 = symbols[Math.floor(Math.random() * symbols.length)];

  slot1.textContent = result1;
  slot2.textContent = result2;
  slot3.textContent = result3;

  // Check results
  if (result1 === result2 && result2 === result3) {
    message.textContent = "🎉 Jackpot! Anda menang! 🎉";
    jackpotSound.play(); // Play jackpot sound
  } else {
    message.textContent = "Coba lagi!";
  }
});

// Music Toggle Functionality
toggleMusicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = "Matikan Musik";
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = "Hidupkan Musik";
  }
});