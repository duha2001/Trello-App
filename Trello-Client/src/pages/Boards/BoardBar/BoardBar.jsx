import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { capitalizeFirstLetter } from '~/utils/formatter';

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};
function BoardBar({ board }) {
  // const {board} = props
  // const board = props.board (Object Detructuring)
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.Trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        paddingX: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label='Filters'
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' },
            },
          }}
        >
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1695276986~exp=1695277586~hmac=2f3cc0373cf0c382096fb234b26bbf053c5df34acaf098980898cc02523de37a'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=826&t=st=1695277001~exp=1695277601~hmac=34b37378d1d43e69481da9bbd6e7586388c03d5fd861ccc0b09dd0ae45fbc131'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=826&t=st=1695277015~exp=1695277615~hmac=2845759ef5ec7552e6f271ca252a50a4d04671b53efe56bfa84b9c6ba9417ba0'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?w=826&t=st=1695277029~exp=1695277629~hmac=731e6ffac59500c30c9f5d670f528f22f0bc8d85e2147ef2107995b1a872e437'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=826&t=st=1695277041~exp=1695277641~hmac=74974a2cbde95f6a753772169a038dafadd39f6b180728f44373c4d35be51221'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1695277052~exp=1695277652~hmac=10e3741f251ac2dbf2957f7ea23ec689d09613c9b097ef03c102372378e15699'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=826&t=st=1695277060~exp=1695277660~hmac=0ffafebca5437cfba392f477053dc2f224d6db23905d049243835addb88bb978'
            />
          </Tooltip>
          <Tooltip title='anhdudev'>
            <Avatar
              alt='Remy Sharp'
              src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=826&t=st=1695277073~exp=1695277673~hmac=031604030db954ce06532f7cb2e3b57cacf72683e8560c8712af6ec0929cc445'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
