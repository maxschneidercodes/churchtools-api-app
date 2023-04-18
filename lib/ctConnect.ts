import { churchtoolsClient, activateLogging } from '@churchtools/churchtools-client';
import { wrapper } from 'axios-cookiejar-support';
import tough from 'tough-cookie';

const ChurchToolsClient = churchtoolsClient.ChurchToolsClient;
const clientA = new ChurchToolsClient();

activateLogging()

clientA.setCookieJar(wrapper, new tough.CookieJar());
clientA.setBaseUrl('https://jobs.church.tools');

export default clientA