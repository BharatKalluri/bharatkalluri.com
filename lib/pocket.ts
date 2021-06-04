import axios, { AxiosResponse } from 'axios';


const {POCKET_CONSUMER_KEY, POCKET_ACCESS_TOKEN} = process.env;

const getPocketListEndpoint = 'https://getpocket.com/v3/get';

export const getReadingLog = async (): Promise<Record<string, any>> => {
    if (!POCKET_CONSUMER_KEY || !POCKET_ACCESS_TOKEN) {
        throw new Error(`Pocket creds missing`)
    }
    const postPayload = {
        'consumer_key': POCKET_CONSUMER_KEY,
        'access_token': POCKET_ACCESS_TOKEN,
        'tag': 'Recommended'
    };
    const response: AxiosResponse<any> = await axios.post(getPocketListEndpoint, postPayload);
    const jsonResponse = await response.data;
    // TODO: type the response object here
    return jsonResponse['list'];
};