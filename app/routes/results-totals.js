import Route from '@ember/routing/route';

export default class ResultsTotalsRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8081/api/totalResults').then(response => response.json());

        return response;
    }

}
