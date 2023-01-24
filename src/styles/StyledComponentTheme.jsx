import { ThemeProvider } from 'styled-components'

import { theme } from './themeCustomerPortal'

const StyledComponentsThemeProvider = ({
  children,
}) => (
  <div>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
)

export default StyledComponentsThemeProvider