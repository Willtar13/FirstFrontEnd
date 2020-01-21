import Route from '@ember/routing/route';

export default class EthUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8080/api/accessTradeTracker/ethusdt').then(response => response.json());

        return response;
    }

}
