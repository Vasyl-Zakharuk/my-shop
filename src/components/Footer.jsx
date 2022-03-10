function Footer() {
    return (
        <footer className='page-footer green'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} zVp Studio create
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        Repo Git
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
