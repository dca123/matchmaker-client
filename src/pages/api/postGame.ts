import { NextApiRequest, NextApiResponse } from 'next';

type postGameData = {
  radiantVictory: boolean;
  radiantHeroes: [string, string, string, string, string];
  direHeroes: [string, string, string, string, string];
};
const postGameData: postGameData = {
  radiantVictory: false,
  radiantHeroes: ['zuus', 'kunkka', 'luna', 'mars', 'medusa'],
  direHeroes: ['meepo', 'lich', 'lycan', 'elder_titan', 'antimage'],
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'GET') {
    res.status(200).json(postGameData);
  }
}
