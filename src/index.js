import './style.css';

const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

async function createGame(name) {
  const response = await fetch(`${BASE_URL}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });
  const data = await response.json();
  return data;
}

async function addScore(gameId, user, score) {
  const response = await fetch(`${BASE_URL}/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  const data = await response.json();
  return data;
}

async function getScores(gameId) {
  const response = await fetch(`${BASE_URL}/games/${gameId}/scores/`);
  const data = await response.json();
  return data.result;
}

async function renderScores(gameId, scoreContainer) {
  const scores = await getScores(gameId);
  const reversedScores = scores.reverse();
  scoreContainer.innerHTML = '';
  reversedScores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.classList.add('items');
    listItem.innerText = `${score.user}: ${score.score}`;
    scoreContainer.appendChild(listItem);
  });
}

function resetInputs(nameInput, scoreInput) {
  nameInput.value = '';
  scoreInput.value = '';
}
