// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Details;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ip = JSON.parse(req.body);
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_Gbkl0LMbdSflKjzBwMWwhFAnh827U&ipAddress=${ip}`;

    const response = await fetch(url);

    if (!response) new Error('Opps!');

    const data = await response.json();

    const details: Details = {
      ip: data.ip,
      isp: data.isp,
      location: {
        ...data.location,
      },
    };

    res.status(200).json(details);
  } catch (error) {
    console.log(error);
  }
}
