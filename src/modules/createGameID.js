const createGameID = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'My score new game',
    }),
  });

  const data = await response.json();
  return data;
};

export default createGameID;