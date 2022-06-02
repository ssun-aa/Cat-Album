import axios from 'axios';

const fetcher = async (text: string): Promise<string> => {
  try {
    const OPEN_API_DOMAIN = 'https://cataas.com';
    const response = await axios.get(
      `${OPEN_API_DOMAIN}/cat/says/${text}?json=true`
    );

    const { url } = response.data;
    return `${OPEN_API_DOMAIN}${url}`;
  } catch (e: any) {
    return e.message;
  }
};

export { fetcher };
