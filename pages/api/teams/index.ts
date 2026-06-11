import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Placeholder for get teams
    res.status(200).json([
      { id: 1, name: 'Design Team', description: 'Design and UX team' },
      { id: 2, name: 'Development Team', description: 'Full-stack developers' },
    ]);
  } else if (req.method === 'POST') {
    // Placeholder for create team
    res.status(201).json({ message: 'Team created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
