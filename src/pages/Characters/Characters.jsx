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
  Avatar,
  IconButton,
  Tooltip,
  Modal,
  Link,
} from '@mui/material'
import { styled } from '@mui/system'
import InfoIcon from '@mui/icons-material/Info'
import { motion } from 'framer-motion'

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

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(
          `https://potterapi-fedeperin.vercel.app/en/characters?search=${search}`,
          {
            signal: controller.signal,
          }
        )
        setCharacters(response.data)
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

  const handleOpen = (character) => {
    setSelectedCharacter(character)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedCharacter(null)
  }

  const getWikipediaUrl = (name) => {
    const formattedName = name.split(' ').join('_')
    return `https://en.wikipedia.org/wiki/${formattedName}`
  }

  if (error) {
    return (
      <Typography color="error">
        There was an error fetching the characters.
      </Typography>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" mb={3} textAlign="center">
        Explore Characters
      </Typography>
      <Box mb={4}>
        <TextField
          variant="outlined"
          placeholder="Search for characters"
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
            {characters.length ? `Found ${characters.length} characters` : 'No characters found'}
          </Typography>
          <Grid container spacing={3}>
            {characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} key={character.index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      height="180"
                      image={character.image}
                      alt={character.fullName}
                    />
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Avatar src={character.image} alt={character.fullName} />
                        <Box ml={2}>
                          <Typography variant="h6" component="h3" fontWeight="bold">
                            {character.fullName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {character.nickname}
                          </Typography>
                        </Box>
                        <Tooltip title="More Info">
                          <IconButton color="primary" onClick={() => handleOpen(character)}>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Description variant="body2" color="text.secondary" mb={1}>
                        <strong>House:</strong> {character.hogwartsHouse}
                      </Description>
                      <Description variant="body2" color="text.secondary" mb={1}>
                        <strong>Interpreted By:</strong> {character.interpretedBy}
                      </Description>
                      <Description variant="body2" color="text.secondary" mb={1}>
                        <strong>Birthdate:</strong> {character.birthdate}
                      </Description>
                      <Description variant="body2" color="text.secondary">
                        <strong>Children:</strong> {character.children.join(', ')}
                      </Description>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedCharacter && (
            <>
              <Typography variant="h6" component="h2" mb={2}>
                {selectedCharacter.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>Nickname:</strong> {selectedCharacter.nickname}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>House:</strong> {selectedCharacter.hogwartsHouse}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>Interpreted By:</strong> {selectedCharacter.interpretedBy}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>Birthdate:</strong> {selectedCharacter.birthdate}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                <strong>Children:</strong> {selectedCharacter.children.join(', ')}
              </Typography>
              <Link href={getWikipediaUrl(selectedCharacter.fullName)} target="_blank" rel="noopener">
                Learn more on Wikipedia
              </Link>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  )
}

export default Characters