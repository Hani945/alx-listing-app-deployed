import { NextApiRequest, NextApiResponse } from 'next';

interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

// Mock data for reviews
const mockReviews: Record<string, Review[]> = {
  '1': [
    {
      id: 'r1',
      userName: 'John Doe',
      rating: 5,
      date: '2023-10-15',
      comment: 'Amazing place! The apartment was clean, modern, and in a great location. Would definitely stay here again!',
    },
    {
      id: 'r2',
      userName: 'Jane Smith',
      rating: 4,
      date: '2023-09-28',
      comment: 'Lovely apartment with great amenities. The host was very responsive and helpful throughout our stay.',
    },
  ],
  '2': [
    {
      id: 'r3',
      userName: 'Alex Johnson',
      rating: 5,
      date: '2023-11-02',
      comment: 'Perfect studio for a weekend getaway. Clean, cozy, and had everything we needed.',
    },
  ],
  '3': [
    {
      id: 'r4',
      userName: 'Sarah Williams',
      rating: 5,
      date: '2023-10-20',
      comment: 'Absolutely stunning penthouse with breathtaking views! The place was even better than the photos.',
    },
    {
      id: 'r5',
      userName: 'Michael Brown',
      rating: 4,
      date: '2023-09-15',
      comment: 'Great location and beautiful space. The amenities were top-notch and the host was very accommodating.',
    },
    {
      id: 'r6',
      userName: 'Emily Davis',
      rating: 5,
      date: '2023-08-30',
      comment: 'Could not have asked for a better stay. The penthouse was luxurious and had everything we needed.',
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review[] | { error: string }>
) {
  const { id } = req.query;

  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    if (typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid property ID' });
    }

    // In a real application, you would fetch reviews from a database
    // For now, we'll return mock data based on the property ID
    const reviews = mockReviews[id] || [];

    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(reviews);
    }, 300);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
