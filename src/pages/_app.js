import '../../styles/globals.css'
import ProviderTimerContext from '../contexts/timer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderTimerContext>
        <Component {...pageProps} />
      </ProviderTimerContext>
    </>
  )
}

export default MyApp
