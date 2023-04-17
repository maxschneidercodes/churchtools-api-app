import { churchtoolsClient, activateLogging } from '@churchtools/churchtools-client';
import { wrapper } from 'axios-cookiejar-support';
import tough from 'tough-cookie';

churchtoolsClient.setCookieJar(wrapper, new tough.CookieJar());
churchtoolsClient.setBaseUrl('https://jobs.church.tools/');

activateLogging();
churchtoolsClient.get('/whoami').then(whoAmI => {
    console.dir(whoAmI);
});


export default churchtoolsClient