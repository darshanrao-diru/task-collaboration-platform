import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Placeholder for login logic
    res.status(200).json({ token: 'mock-token-123' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
