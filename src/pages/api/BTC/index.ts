import { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '../../../libs/fetcher';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const API_URL = 'https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY'
    const data =await fetcher(API_URL)
    res.end(JSON.stringify(data))
}
export default handler