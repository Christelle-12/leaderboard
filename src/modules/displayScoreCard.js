const renderScoreCard = async (gameID) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
  );
  const data = await response.json();
  return data.result;
};

export default renderScoreCard;
