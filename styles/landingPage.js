import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(8, 2, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    padding: theme.spacing(2, 5, 8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3%',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    paddingBottom: theme.spacing(2),
  },
  buttonWidth: {
    padding: '0.1rem 5rem',
    margin: '0rem 4rem 0rem',
  },
  typed: {
    padding: '0.2rem 2rem 0.2rem 7rem',
    margin: '0rem 2rem 0.6rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0rem 1rem',
      margin: '0',
    },
  },
}))

export { useStyles }
