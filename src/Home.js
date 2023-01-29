function Home() {
    return (
      <div>
       <div className="container">
        <div className="row">
            <div className="col">
                <ul className="list-unstyled d-flex justify-content-between">
                    <li><a href="#">Home</a></li>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/gallery">gallery</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
            </div>
        </div>
       </div>
      </div>
    );
  }
  
  export default Home;