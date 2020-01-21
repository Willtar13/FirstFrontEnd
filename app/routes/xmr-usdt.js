import Route from '@ember/routing/route';

export default class XmrUsdtRoute extends Route {

    async model () {
        
        let response = await fetch('http://localhost:8080/api/accessTradeTracker/xmrusdt').then(response => response.json());

        return response;
    }

}
