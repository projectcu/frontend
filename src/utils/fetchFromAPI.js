import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: 50 },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fallbackData = {
  items: [
    {
      id: { videoId: 'dQw4w9WgXcQ' },
      snippet: {
        title: 'Demo Video 1',
        channelTitle: 'Demo Channel',
        thumbnails: {
          high: { url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
        },
      },
    },
  ],
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('RapidAPI fetch failed:', error.response?.status || error.message);
    return fallbackData;
  }
};
