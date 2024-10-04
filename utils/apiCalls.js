const params = {
  entity_type: "section",
  entity_slug: "آزمون-بخش-داکر-بازی-3539", // Static params
};
const AuthorizationHeader = {
  Authorization: `Bearer 57925|vK5JXxnZi7Q6P3FaDPKetO3pC4Bej98lLclh8JQqabfaef7d`,
};

export const getQuizInfo = async () => {
  const { data, status, error } = await useFetch(
    "https://api.sokanacademy.com/api/quizzes",
    {
      query: params,
      headers: {
        ...AuthorizationHeader,
      },
      transform: (_data) => _data.data,
    },
  );

  return { data, status, error };
};
export const postParticipation = async (quiz_id) => {
  try {
    const data = await $fetch(
      `https://api.sokanacademy.com/api/quizzes/${quiz_id}/participation`,
      {
        method: "POST",
        headers: {
          ...AuthorizationHeader,
        },
        params: params,
      },
    );
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getQuestion = async (url) => {
  const { data, status, error } = await useFetch(url, {
    query: params,
    headers: {
      ...AuthorizationHeader,
    },
    transform: (_data) => _data.data,
  });

  return { data, status, error };
};
export const postAnswer = async (url, optionsArray) => {
  try {
    const data = await $fetch(`${url}/answers`, {
      method: "POST",
      headers: {
        ...AuthorizationHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: optionsArray }),
      params: params,
    });

    return data.data;
  } catch (error) {
    throw error;
  }
};
