import {useState} from "react";
export default function BlogEntry({title, description, date, comments, imageUrl}) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription  =  description.length > 150 ? description.substring(0, 150)+ "..." : description;
    return(
        <div className="card mb-4">
        <img src={imageUrl} className="card-img-top" alt="Nature"/>
        <div className="card-body shadow">
          <h3 className="card-title"><b>{title}</b></h3>
          <h5 className="card-subtitle text-muted">Title description, <span className="text-muted">{date}</span></h5>
          <p className="card-text mt-3">{isExpanded ? description : truncatedDescription}</p>
          <div className="row">
            <div className="col-md-8 col-12">
              <button onClick={toggleDescription} className="btn btn-outline-dark"> {isExpanded ? "Read Less" : "Read More"} »</button>
            </div>
            <div className="col-md-4 d-none d-md-block text-end">
              <span className="text-muted"><b>Comments  </b><span className="badge bg-secondary">{comments}</span></span>
            </div>
          </div>
        </div>
      </div>
    )
}