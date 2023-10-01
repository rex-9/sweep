import axios from 'axios';

class SwapiService {
  private static instance: SwapiService;
  private static BASE_URL = 'https://swapi.dev/api';

  private constructor() {}

  public static getInstance(): SwapiService {
    if (!SwapiService.instance) {
      SwapiService.instance = new SwapiService();
    }

    return SwapiService.instance;
  }

  public getCharacters(page: number = 1): Promise<any> {
    return axios.get(`${SwapiService.BASE_URL}/people/?page=${page}`)
      .then(response => response.data);
  }

  public getHomeworld(url: string): Promise<any> {
    return axios.get(url)
      .then(response => response.data);
  }
}

export default SwapiService.getInstance();
