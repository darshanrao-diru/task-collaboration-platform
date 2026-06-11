import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Placeholder for get tasks
    res.status(200).json([
      { id: 1, title: 'Task 1', status: 'TODO', priority: 'HIGH' },
      { id: 2, title: 'Task 2', status: 'IN_PROGRESS', priority: 'MEDIUM' },
    ]);
  } else if (req.method === 'POST') {
    // Placeholder for create task
    res.status(201).json({ message: 'Task created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
