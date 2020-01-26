import Route from '@ember/routing/route';

export default class XmrUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8081/api/accessTradeTrackerObject/xmrusdt').then(response => response.json());

        return response;
    }

}
