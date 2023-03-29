import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import './Card.css'

export default function ProjectCard(
  { props, 
    imgSrc, 
    imgAltTag, 
    cardTitle, 
    cardDescription, 
    btn1Text, 
    btn1Url, 
    btn2Text, 
    btn2Url,
    techUsed }) {
      
  return (
    <Card className='project-card'
      
      sx={{ maxWidth: 345 }}>
      { imgSrc ?
        <CardMedia
          sx={{ height: 140 }}
          image={ imgSrc }
          title={ imgAltTag }
        />
      : 
        <></>
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { cardTitle }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { cardDescription }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { techUsed }
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant='contained'
          href={ btn1Url }
          target='_blank'
          aria-label={ `${cardTitle} ${btn1Text}` }>
          { btn1Text }
        </Button>
        <Button 
          size="small" 
          variant='contained'
          href={btn2Url}
          target='_blank'
          aria-label={ `${cardTitle} ${btn2Text}` }>
          { btn2Text }
        </Button>
      </CardActions>
    </Card>
  )
}