import {
  Container 
} from "react-bootstrap";
import BlogNavbar from "components/BlogNavbar";

export default function PageLayout({children, className}){

  return (
    <Container>
      <BlogNavbar />

      <div className={`page-wrapper ${className}`}>
        {children}
      </div>

      <footer className="page-footer">
        <div>
          <a href="kamilbalda.com">kamilbalda.com</a>
        </div>
      </footer>
    </Container>
  )
}