import Route from '@ember/routing/route';

export default class BnbUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8080/api/accessTradeTracker/bnbusdt').then(response => response.json());

        return response;
    }

}
