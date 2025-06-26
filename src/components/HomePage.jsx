import "@fortawesome/react-fontawesome"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import imgIphone from "../images/Frame 560 (2) (1).png";
import imgApple from "../images/1200px-Apple_gray_logo 1.png";
import imgShopIcon from "../images/Vector (1).png";
import "../css/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="home-PageDepartament">
            <div className="container">
                <ul className="col-links">
                    <li>
                        <Link to={""}>Woman’s Fashion</Link>
                        <FontAwesomeIcon className="icon-right" icon={faChevronRight}/>
                    </li>
                    <li>
                        <Link to={""}>Men’s Fashion</Link>
                        <FontAwesomeIcon className="icon-right" icon={faChevronRight}/>
                    </li>
                    <li>
                        <Link to={""}>Electronics</Link>
                    </li>
                    <li>
                        <Link to={""}>Home & Lifestyle</Link>
                    </li>
                    <li>
                        <Link to={""}>Medicine</Link>
                    </li>
                    <li>
                        <Link to={""}>Sports & Outdoor</Link>
                    </li>
                    <li>
                        <Link to={""}>Baby’s & Toys</Link>
                    </li>
                    <li>
                        <Link to={""}>Groceries & Pets</Link>
                    </li>
                    <li>
                        <Link to={""}>Health & Beauty</Link>
                    </li>
                </ul>
                <div className="Shop-Col">
                    <img className="img-main" src={imgIphone} alt="iphone" />
                    <div className="content-Shop">
                        <div className="iPhone-Series">
                            <img src={imgApple} alt="iPhone 14" />
                            <p>iPhone 14 Series</p>
                        </div>
                        <h3>Up to 10% off Voucher</h3>
                        <div className="shop-Now">
                            <Link to= {"/ShopNow"}>Shop Now</Link>
                            <img src={imgShopIcon} alt="shopNow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default HomePage;