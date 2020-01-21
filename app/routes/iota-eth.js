import Route from '@ember/routing/route';

export default class IotaEthRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8081/api/accessTradeTracker/iotaeth').then(response => response.json());

        return response;
    }

}
