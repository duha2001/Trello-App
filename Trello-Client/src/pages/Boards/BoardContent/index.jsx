import Box from '@mui/material/Box';
function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.Trello.appBarHeight} - ${theme.Trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      BOARD CONTENT
    </Box>
  );
}

export default BoardContent;
