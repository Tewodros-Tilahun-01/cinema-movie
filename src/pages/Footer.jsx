import React from 'react'
import "./footer.css"
import FooterNavItem from "../components/FooterNavItem"
function Footer() {
    const usefulLinks = [
        "home",
        "movies",
        "my List",
        "terms of sercie",
        "Privacy Policy"

    ];
    const locations = [
        "Dolorum optio",
        "Non rem rerum",
        "Cras fermentum",
        "Justo eget",
        "fermentum iaculis"

    ];
    return (
        <footer id='footer' className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/#" className="logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>
                                cras fermentum odio eu feugiat lide par naso tierra. justo eget
                                nada terra videa magna valies darta donna mare fermentum iaculis eu non diam phasellus.
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://twitter.com" className="twitter">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="https://facebook.com" className="facebook">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="https://instagram.com" className="instagram">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="https://youtube.com" className="youtube">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>

                            </div>
                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>useful Links</h4>
                            <ul>
                                {usefulLinks.map(link => <FooterNavItem key={link} name={link} />
                                )}
                            </ul>

                        </div>
                        <div className="col-lg-2 col-6 footer-links">
                            <h4>useful Links</h4>
                            <ul>
                                {locations.map((link) => <FooterNavItem key={link} name={link} />
                                )}
                            </ul>

                        </div>
                        <div className="col-lg-3 col-md-12 footer-contact tect-center">
                            <h4>Contact Us</h4>
                            <p>
                                Street Name
                                <br />
                                City Name,State 123456
                                <br />
                                <strong>phone:</strong>+1 2345 6789 00
                                <br />
                                <strong>Email:</strong>info@example.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright{"   "}
                        <strong>
                            <span>DStudio Technology</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="/#">DStudio Technology</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer