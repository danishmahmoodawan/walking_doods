

function Home() {
  return (
    <div className="App">
    <section className="first_section"></section>

    <section className="second_section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 text-center"> <img className="image_img" src="assets/images/image_1.svg" alt="image_1"> </div>
                    <div className="col-12 col-md-9"> <img className="walking_doods" src="assets/images/walkdoodds.svg" alt="walking_doods"> </div>
                </div>
            </div>
            
        </section>
        
        <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#zerosection">Zero</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadmapsection">Roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teamsection">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqsection">FAQs</a>
                        </li>
                    </ul>
                    <span className="navbar-text" >
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="images/twitter.svg"/>
                            </a>
                            <a href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>
                            <img className="seicon" src="images/discord.svg"/>
                            </a>
                            <a href="">
                            <img className="seicon" src="images/opensea.svg"/>
                            </a>
                    </span>
                </div>
            </nav>
        </div>
        
    </div>
  );
}

export default Home;
