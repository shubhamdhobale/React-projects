import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <Link to='/'></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
      <div></div>
    </header>
  )
}

export default Header
