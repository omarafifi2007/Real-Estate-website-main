import "./Footer.css";

function Footer() {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="../../public/logo2.png" alt="logo2" width={120} />
                    <div className="secondaryText">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </div>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">Egypt Cairo</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
