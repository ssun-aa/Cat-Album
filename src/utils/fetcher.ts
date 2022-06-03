import axios from 'axios';

const textImageApi = async (text: string): Promise<string> => {
  try {
    const OPEN_API_DOMAIN = 'https://cataas.com';
    const response = await axios.get(
      `${OPEN_API_DOMAIN}/cat/says/${text}?json=true`
    );

    const { url } = response.data;
    return `${OPEN_API_DOMAIN}${url}`;
  } catch (e) {
    return 'error';
  }
};

const tagImageApi = async (tag: number) => {
  try {
    const OPEN_API_DOMAIN = 'https://api.thecatapi.com/v1/images/search';
    const response = await axios.get(OPEN_API_DOMAIN, {
      params: { category_ids: tag, limit: 100 },
    });

    return response.data;
  } catch (e) {
    return 'error';
  }
};

export { textImageApi, tagImageApi };
