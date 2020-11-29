import { AppBar, Toolbar, Typography } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import { useStyles } from '../styles/landingPage'

const NavBar = (props) => {
  const classes = useStyles(props)
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <HomeRoundedIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
