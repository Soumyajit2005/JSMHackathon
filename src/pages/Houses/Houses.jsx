import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Card,
  CardContent,
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

const Houses = () => {
  const [houses, setHouses] = useState([])
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
          `https://potterapi-fedeperin.vercel.app/en/houses?search=${search}`,
          {
            signal: controller.signal,
          }
        )
        setHouses(response.data)
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
    return (
      <Typography color="error">
        There was an error fetching the houses.
      </Typography>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" mb={3} textAlign="center">
        Explore Houses
      </Typography>
      <Box mb={4}>
        <TextField
          variant="outlined"
          placeholder="Search for houses"
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
            {houses.length ? `Found ${houses.length} houses` : 'No houses found'}
          </Typography>
          <Grid container spacing={3}>
            {houses.map((house) => (
              <Grid item xs={12} sm={6} md={4} key={house.index}>
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                      {house.emoji} {house.house}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      <strong>Founder:</strong> {house.founder}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      <strong>Colors:</strong> {house.colors.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      <strong>Animal:</strong> {house.animal}
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

export default Houses