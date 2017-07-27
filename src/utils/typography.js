import Typography from 'typography'
import Wordpress2016Custom from './theme'

const typography = new Typography(Wordpress2016Custom)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
