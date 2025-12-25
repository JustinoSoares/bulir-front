import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
  type MyServicesType = {
    id: string
    name: string
    description: string
    price: number
    userId: string
    createdAt: string
  }
export default function CardService ({name, description, createdAt}: MyServicesType) {

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, minHeight: 100 }}>
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
        <h2 className='text-lg font-semibold mb-2'>{name}</h2>
        <p className='text-gray-600'>
         {description}
        </p>
      </CardContent>
      <CardActions className='flex items-center justify-between'>
        <Button size='small'>Solicitar </Button>
        {/* <Button size='small'>Learn More</Button> */}
        <p className='text-gray-500 text-sm'>
          {createdAt.slice(0, 10)}
        </p>
      </CardActions>
    </Card>
  )
}
