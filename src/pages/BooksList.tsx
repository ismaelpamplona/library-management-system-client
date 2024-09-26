import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService'; // Import the service

// Define the Book interface
interface Book {
  id: number;
  title: string;
  author: string;
  published_date: string;
  isbn: string;
  pages: number;
  cover: string;
  language: string;
}

const BooksList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Books List
      </Typography>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid key={book.id} size={{ xs: 12, md: 4, sm: 4 }}>
            <Card>
              {/* <CardMedia
                component="img"
                height="140"
                image={book.cover}
                alt={book.title}
              /> */}
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ISBN: {book.isbn}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pages: {book.pages}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BooksList;
