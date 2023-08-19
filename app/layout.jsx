import '@styles/globals.css';
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from '@components/Provider';

export const metadata = {
    title: 'CBEWS-L',
    description: 'Community Based Early Warning Information for Landslides'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout