import { styled, Chip, emphasize } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListIcon from '@mui/icons-material/List';
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  }) as typeof Chip;

function BreadCrumb() {

  return (
    <div style={{margin:"10px"}} role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="doctors record"
          icon={<ListIcon fontSize="large"/>}
        />
        
        <StyledBreadcrumb
          component="a"
          label="add doctor"
          href="/add"
          icon={<AddBoxIcon/>}
        />
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumb