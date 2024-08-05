import './PopularPost.css';
export default function PopularPost() {
    return(
        <div className="card my-4">
    <div className="card-header">
      <h4>Popular Posts</h4>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex align-items-center">
        <img src="/assets/PostImg6.png" alt="Image" className="me-3" />
        <div>
          <span className="fw-bold">Lorem</span><br />
          <span>Sed mattis nunc</span>
        </div>
      </li>
      <li className="list-group-item d-flex align-items-center">
        <img src="/assets/PostImg5.png" alt="Image" className="me-3 "/>
        <div>
          <span className="fw-bold">Ipsum</span><br />
          <span>Praes tinci sed</span>
        </div>
      </li>
      <li className="list-group-item d-flex align-items-center">
        <img src="/assets/PostImg4.png" alt="Image" className="me-3" />
        <div>
          <span className="fw-bold">Dorum</span><br />
          <span>Ultricies congue</span>
        </div>
      </li>
      <li className="list-group-item d-flex align-items-center d-none d-md-flex">
        <img src="/assets/PostImg3.png" alt="Image" className="me-3" />
        <div>
          <span className="fw-bold">Mingsum</span><br />
          <span>Lorem ipsum dipsum</span>
        </div>
      </li>
    </ul>
  </div>
    )
}