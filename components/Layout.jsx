import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Tienda Azul</title>
            </Head>
            <Nav />
            {children}
            <Footer />
        </>
    )
}