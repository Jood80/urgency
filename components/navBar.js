import Link from 'next/link'
import { AppBar, Toolbar } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import { useStyles } from '../styles/landingPage'

const NavBar = (props) => {
  const classes = useStyles(props)
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <Link href="/">
          <HomeRoundedIcon className={classes.icon} />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
