const BASE_URL = 'https://api.omedacity.com'; // Ersetze dies durch die tatsächliche Basis-URL der API

const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// API-Anfragen definieren
export const getHeroStatistics = async () => {
  return await fetchFromApi('dashboard/hero_statistics.json');
};

export const getMatches = async () => {
  return await fetchFromApi('matches.json');
};

export const getPlayers = async () => {
  return await fetchFromApi('players.json');
};

export const getHeroes = async () => {
  return await fetchFromApi('heroes.json');
};

export const getMatchDetails = async (matchId) => {
  return await fetchFromApi(`matches/${matchId}.json`);
};
