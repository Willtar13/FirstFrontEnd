import Route from '@ember/routing/route';

export default class ZrxEthFullRoute extends Route {
    async model () {
        
        let response = await fetch('http://localhost:8081/api/accessTradeTrackerObject/zrxeth').then(response => response.json());

        return response;
    }
    
}