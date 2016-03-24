import {Injectable} from 'angular2/core';
import { Category } from '../models/export';
import { RESTAURANT_TEST_DATA } from '../data/restaurant.data'
import { RestApiService, RestRequest } from 'ng2rest/rest';

const OMDB_BASE_URL: string = 'http://www.omdbapi.com';

@Injectable()
export class CategoryService {

    constructor() { 
        // private restApiService: RestApiService
        // this.restApiService.baseUrl = OMDB_BASE_URL;
        // this.restApiService.globalParameters['r'] = 'JSON';
    }
    
    public getRestaurant() : Category[] {
       // var omdbRequest = new RestRequest();
        console.log('getting movie');
        // this.restApiService.executeRequest<OmdbMovie>(omdbRequest).then(omdbMovie => {
        //     console.log(omdbMovie);
        // });
        var toReturn: Category[];
        return toReturn; //  RESTAURANT_TEST_DATA.menu.categories;
    }

}

export interface OmdbMovie {
    Actors?: string;
    Awards?:  string;
    BoxOffice?:  string;
    Country?:  string;
    DVD?:  string;
    Director?:  string;
    Genre?:  string;
    Language?:  string;
    Metascore?:  string;
    Plot?:  string;
    Poster?:  string;
    Production?:  string;
    Rated?:  string;
    Released?:  string;
    Response?:  string;
    Runtime?:  string;
    Title?:  string;
    Type?:  string;
    Website?:  string;
    Writer?:  string;
    Year?:  string;
    imdbID?:  string;
    imdbRating?:  string;
    imdbVotes?:  string;
    tomatoConsensus?:  string;
    tomatoFresh?:  string;
    tomatoImage?:  string;
    tomatoMeter?: string;
    tomatoRating?:  string;
    tomatoReviews?:  string;
    tomatoRotten?:  string;
    tomatoURL?:  string;
    tomatoUserMeter?: string;
    tomatoUserRating?:  string;
    tomatoUserReviews?:  string;
}