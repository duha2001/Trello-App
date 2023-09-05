import Box from '@mui/material/Box';

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.Trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      BOARD BAR
    </Box>
  );
}

export default BoardBar;
