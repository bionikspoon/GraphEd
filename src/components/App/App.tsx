import { SwipeableDrawer, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import styles from './App.module.css'
import logo from './logo.svg'
import withMuiTheme from '../../withMuiTheme'
class App extends Component {
  public state = { navOpen: false }
  public render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            src={logo}
            className={styles.logo}
            alt="logo"
            onClick={this.handleToggleNav(true)}
          />
          <p>
            Edit <code className={styles.code}>src/App.js</code> and save to
            reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SwipeableDrawer
          onClose={this.handleToggleNav(false)}
          onOpen={this.handleToggleNav(true)}
          open={this.state.navOpen}
        >
          <Typography variant="h1">Hello World</Typography>
        </SwipeableDrawer>
      </div>
    )
  }

  private handleToggleNav = (navOpen: boolean) => () => {
    this.setState({ navOpen })
  }
}

export default withMuiTheme(App)
