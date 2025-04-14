
import { Blog } from '../model/blog.model'

type Props = {
  title: string
  blogs: Blog[]
}

const BlogList = ({blogs, title}: Props) => {
  return (
    <div className="blog-list">
      <h2> {title }</h2>
             {blogs.map((blog)=> (
      <div className="blog-preview" key={blog.id}>
         <h2>{blog.title}</h2> 
        <p>Written by {blog.author}</p>
      </div>
     )) }
    </div>

  );
}
export default BlogList;