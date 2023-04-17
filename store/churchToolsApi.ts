import { churchtoolsClient } from "@churchtools/churchtools-client";
const ChurchToolsClient = churchtoolsClient.ChurchToolsClient;

const clientA = new ChurchToolsClient();
clientA.setBaseUrl('https://jobs.church.tools/');

clientA.post('/login', {
    username: "churchtools",
    password: "Jobs2022"
}).then(result => {
    //@ts-ignore
    if (result.status === 'success') {
        console.log('Login to ChurchTools-Api successful!');
    }
})


export default clientA