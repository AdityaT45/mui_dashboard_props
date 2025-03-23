import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface NewsCardProps {
    image: string;
    title: string;
    author: string;
    date: string;
    description: string;
  }

  const NewsCard: React.FC<NewsCardProps> = ({ image, title, author, date, description }) => {
  return (
    <div >
    <Card sx={{ m: 2, ml: 0, width: "100%", borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={image} alt="news image" />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700, display: "block" }}>
            {title}
          </Typography>

          <Typography variant="button" color="#D6D6D6" sx={{ fontWeight: 400 }}>
            {author} &nbsp;&nbsp;&nbsp;&nbsp; {date}
          </Typography>

          <Typography variant="subtitle2" color="#7B7B7B" sx={{ fontWeight: 400, display: "block" }}>
            {description}
          </Typography>

          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>
            Continue Reading
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default NewsCard