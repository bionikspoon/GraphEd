import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core'
import React from 'react'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
  },
})

export default <P extends object>(Component: React.ComponentType<P>) =>
  function withRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
