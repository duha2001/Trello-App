import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
  Trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#1976d2',
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#0984e3',
            borderRadius: '8px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Ở đây tạo một function để truyền props theme để có thể lấy cái theme để ghi đè cho chuẩn
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light,
            },
            // Overide đường viền của input khi hover
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
              },
            },
            // Overide đường viền của ô input khi nhấn vào
            '& fieldset': {
              borderWidth: '1px !important',
            },
          };
        },
      },
    },
  },
  // ...other properties
});

export default theme;
