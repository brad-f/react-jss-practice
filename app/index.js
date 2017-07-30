import React from 'react'
import ReactDOM from 'react-dom'
import injectSheet, {ThemeProvider} from 'react-jss'

const Button = ({classes, children}) => (
  <button className={classes.button}>
    <span className={classes.label}>
      {children}
    </span>
  </button>
)

const styles = theme => ({
  button: {
    background: theme.colorPrimary
  },
  label: {
    fontWeight: 'bold'
  }
})

const StyledButton = injectSheet(styles)(Button)

const theme = {
  colorPrimary: 'green'
}

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledButton>I am a button with green background</StyledButton>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
