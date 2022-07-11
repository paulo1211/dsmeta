import logo from '../../assets/img/logo.svg'
import './styles.css'


function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMETA"/>
            <h1>DSMeta</h1>
            <p><a href="https://www.linkedin.com/in/paulo-ricardo-sales-araujo/">Desenvolvido por Paulo Ricardo</a></p>
        </div>
    </header>
    )
  }
  
  export default Header
  