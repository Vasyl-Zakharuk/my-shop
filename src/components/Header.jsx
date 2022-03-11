function Header() {
    return (
        <nav className='green darken-1'>
            <div className='nav-wrapper'>
                <div className='brand-logo'>My Shop</div>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='!#'>Repo git</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
