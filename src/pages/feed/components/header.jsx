import Styles from "../Styles.module.css";
import Logo from "../../../assets/logo.png"
const Header = () => {
    return(
        <>
            <div className={Styles.header} >
                <div>
                    <img className={Styles.Logo} src={Logo} alt="logo"/>
                </div>
                <div className={Styles.authlink}>
                    <a href="#" className={Styles.register}>ثبت نام </a>
                    <a href="#" className={Styles.login}>ورود</a>
                </div>
            </div>
        
        
        
        </>
    )
}

export default Header;