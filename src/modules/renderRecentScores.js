import renderScoreCard from './displayScoreCard.js';

const renderRecentScores = async (gameID, scoreConatiner) => {
  const results = await renderScoreCard(gameID);
  results.reverse();
  scoreConatiner.innerHTML = '';
  let html = '';
  results.forEach((result) => {
    html += `
        <li class="items"> ${result.user}:${result.score} </li>
        `;
  });
  scoreConatiner.insertAdjacentHTML('afterbegin', html);
};

export default renderRecentScores;