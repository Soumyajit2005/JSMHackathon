import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Grid,
  Skeleton,
  Box,
  Container,
} from '@mui/material'
import { styled } from '@mui/system'

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s, box-shadow 0.3s',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.5)',
  },
}))

const Description = styled(Typography)(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '100px',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.paper,
  },
}))

const Books = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(
          `https://potterapi-fedeperin.vercel.app/en/books?search=${search}`,
          {
            signal: controller.signal,
          }
        )
        setBooks(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request cancelled', error.message)
          return
        }
        setError(true)
        setLoading(false)
      }
    })()

    return () => {
      controller.abort()
    }
  }, [search])

  if (error) {
    return <Typography color="error">There was an error fetching the books.</Typography>
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" mb={3} textAlign="center">
        Explore Books
      </Typography>
      <Box mb={4}>
        <TextField
          variant="outlined"
          placeholder="Search for books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: 'background.paper',
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-input': {
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'text.primary',
            },
          }}
        />
      </Box>
      {loading ? (
        <Grid container spacing={3}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Skeleton variant="rectangular" height={180} />
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                  <Skeleton variant="text" width="80%" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Typography variant="h6" component="h2" mb={2}>
            {books.length ? `Found ${books.length} books` : 'No books found'}
          </Typography>
          <Grid container spacing={3}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.number}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="180"
                    image={book.cover}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                      {book.title}
                    </Typography>
                    <Description variant="body2" color="text.secondary" mb={1}>
                      {book.description}
                    </Description>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Release Date:</strong> {book.releaseDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Pages:</strong> {book.pages}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  )
}

export default Books