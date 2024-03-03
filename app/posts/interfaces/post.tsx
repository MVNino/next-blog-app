interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface ShowPostProps {
  params: {
    id: number;
  };
}
