import ProviderTimerContext from '../contexts/timer'
import Layout from '../layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderTimerContext>
        <Layout>

          <Component {...pageProps} />
          
        </Layout>
      </ProviderTimerContext>
    </>
  )
}

export default MyApp
