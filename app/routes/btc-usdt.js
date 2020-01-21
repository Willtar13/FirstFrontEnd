import Route from '@ember/routing/route';

export default class BtcUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8080/api/accessTradeTracker/btcusdt').then(response => response.json());

        return response;
    }

}
