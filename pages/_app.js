import '../styles/globals.scss'

function MyApp({Component, pageProps: {...pageProps}}) {

    return(
    <>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
