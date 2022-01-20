

function Home() {
  return (
    <div className="App">
    <section class="first_section"></section>

    <section class="second_section">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3 text-center"> <img class="image_img" src="assets/images/image_1.svg" alt="image_1"> </div>
                    <div class="col-12 col-md-9"> <img class="walking_doods" src="assets/images/walkdoodds.svg" alt="walking_doods"> </div>
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
