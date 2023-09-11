const Layout = ({ children }) => {
    return (
        <main className='flex justify-center items-center mx-16'>
            <div className="w-full pb-20">
                <div className="text-center pt-5">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout