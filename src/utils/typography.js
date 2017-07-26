import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const theme = Wordpress2016
theme.googleFonts = []
theme.bodyFontFamily = [
  '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'PingFang SC', 
  'Hiragino Sans GB', 'Droid Sans Fallback', 'Microsoft YaHei', 'sans-serif',
]
theme.headerFontFamily = ['Avenir Next', ...theme.bodyFontFamily]
theme.overrideThemeStyles = ({ rhythm }, options) => ({
  h1: {
    fontFamily: theme.headerFontFamily.join(','),
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
