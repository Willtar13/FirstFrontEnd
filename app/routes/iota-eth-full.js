import Route from '@ember/routing/route';

export default class IotaEthFullRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8081/api/accessTradeTrackerObject/iotaeth').then(response => response.json());

        return response;
    }
    
}
