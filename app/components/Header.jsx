import SiteBrand from './SiteBrand';
import Nav from './Nav';
import HeaderTools from './HeaderTools';

export default function Header() {
  return <header className="site-header">
    <div className="site-container">
      <div className="site-header__inner">
        <div className="site-header__col1">
          <SiteBrand />
        </div>
        <div className="site-header__col2">
          <Nav />
          <HeaderTools />
        </div>
      </div>
    </div>
  </header>
}