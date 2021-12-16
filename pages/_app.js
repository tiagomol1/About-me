import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tiago Murilo</title>
                <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp