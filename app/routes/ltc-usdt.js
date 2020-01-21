import Route from '@ember/routing/route';

export default class LtcUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8080/api/accessTradeTracker/ltcusdt').then(response => response.json());

        return response;
    }

}
