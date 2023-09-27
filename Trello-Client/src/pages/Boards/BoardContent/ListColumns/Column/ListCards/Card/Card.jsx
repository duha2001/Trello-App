import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card as Muicard } from '@mui/material';

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Muicard
        sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
          overflow: 'unset',
        }}
      >
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Frontend 1</Typography>
        </CardContent>
      </Muicard>
    );
  }
  return (
    <Muicard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset',
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.2.758746707.1695276915&semt=ais'
        title='green iguana'
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Build Frontend 1</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size='small' startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size='small' startIcon={<ModeCommentIcon />}>
          15
        </Button>
        <Button size='small' startIcon={<AttachmentIcon />}>
          10
        </Button>
      </CardActions>
    </Muicard>
  );
}

export default Card;
