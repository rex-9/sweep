import axios from 'axios';

class SwapiService {
  private static instance: SwapiService;
  private baseURL: string;

  private constructor() {
    this.baseURL = 'https://swapi.dev/api/';
  }

  public static getInstance(): SwapiService {
    if (!SwapiService.instance) {
      SwapiService.instance = new SwapiService();
    }

    return SwapiService.instance;
  }

  public async getCharacters({ page = '', searchTerm = '', filters = {} }: { page: string; searchTerm: string; filters: { homeworld: string; film: string; species: string; } }) {
    const params = new URLSearchParams();
    if (searchTerm) {
      params.append('search', searchTerm);
    }
    if (page) {
      params.append('page', page);
    }
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        params.append(key, value);
      }
    }

    const response = await axios.get(`${this.baseURL}people/`, { params });
    return response.data;
  }
}

export default SwapiService.getInstance();
