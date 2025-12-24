import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

export default function CardService () {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 10,
          background:
            'linear-gradient(270deg, #31ecc6, #fff, #28b39c, grey, #2afadf)',
          backgroundSize: '600% 600%',
          animation: 'rgbGradient 10s ease infinite',

          '@keyframes rgbGradient': {
            '0%': {
              backgroundPosition: '0% 50%'
            },
            '50%': {
              backgroundPosition: '100% 50%'
            },
            '100%': {
              backgroundPosition: '0% 50%'
            }
          }
        }}
      />
      <CardContent>
        <h2 className='text-lg font-semibold mb-2'>
          Lizard
        </h2>
        <p className='text-gray-600'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </p>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
