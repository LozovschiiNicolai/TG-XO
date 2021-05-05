export const useApiParams = () => {
  const request = async (url, method = "GET", body = null, headers = {}) => {
    try {
      if (body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error");
    }
  };
  const postUserData = async body =>
    await request("/api/session/SessionStart", "POST", body);

  const getGameData = async body =>
    await request("/api/session/GameUpdate", "POST", body);

  const postMoveData = async body =>
    await request("/api/session/MakeMove", "POST", body);

  const postRepeatRound = async body =>
    await request("/api/session/RepeatRound", "POST", body);

  return { postUserData, getGameData, postMoveData, postRepeatRound };
};
