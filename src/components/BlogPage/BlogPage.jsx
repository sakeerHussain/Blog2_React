import BlogEntry from "../BlogEntry/BlogEntry";
import IntroMenu from "../IntroMenu/IntroMenu";
import blogData from "../../data";
export default function BlogPage () {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-8 col-md-12">
          {
           blogData.map(entry => (
            <BlogEntry 
            key={entry.id}
            title={entry.title}
            description ={entry.description}
            date= {entry.date}
            comments= {entry.comments}
            imageUrl= {entry.imageUrl}
              />
           ))
            
          }

        </div>
        <IntroMenu />
      </div>
    </div>
  );
}
