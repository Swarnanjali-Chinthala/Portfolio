import { Link } from 'react-router-dom';
import './index.css';

export default function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <img
          src="https://res.cloudinary.com/ds1tsoaj9/image/upload/v1752733309/profilepic_nzs344.jpg"
          alt="Swarnanjali"
          className="profile-pic"
        />
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Swarnanjali — a passionate and dedicated MERN stack developer who loves transforming ideas into
          beautiful, responsive web applications. I enjoy solving complex problems, writing clean code, and constantly
          exploring new technologies to create modern user experiences. If you’d like to know more about my background,
          skills, and journey,&nbsp;
          <Link to="/about" className="about-link"><a href="#projects" className="click-here">Click Here</a></Link>.
        </p>
      </div>
    </main>
  );
}
