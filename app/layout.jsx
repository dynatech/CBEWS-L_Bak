import '@styles/globals.css';
import Nav from "@components/Nav";
import Menu from '@components/Menu';
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
                <Provider>
                    <div className="main">
                    </div>
                    <main className='app' style={{minHeight: '100vh'}}>
                        <Nav />
                        <Menu />
                        <div>
                            {children}
                        </div>
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout