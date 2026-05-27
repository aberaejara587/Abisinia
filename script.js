let totalPoints = 2500;

function updatePoints() {
  document.getElementById("points").innerText = totalPoints;
}

function completeTask(points) {
  totalPoints += points;
  updatePoints();

  alert("Task Completed Successfully!");
}

function playGame() {
  let reward = Math.floor(Math.random() * 500);

  totalPoints += reward;

  updatePoints();

  alert("You Won " + reward + " Points!");
}

function claimReward() {
  totalPoints += 200;

  updatePoints();

  alert("Reward Claimed!");
}

function inviteFriends() {
  navigator.clipboard.writeText(
    "https://t.me/your_bot"
  );

  alert("Invite Link Copied!");
}