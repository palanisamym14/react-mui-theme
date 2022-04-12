import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export interface IPost{
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
}
interface FeaturedPostProps {
    post: IPost
}
export const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];
export default function Content(props: FeaturedPostProps) {
    const { post } = props;

    return (
        <Grid item>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5" color="primary">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}