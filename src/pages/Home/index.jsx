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
          Hi, I'm Swarnanjali — a passionate and dedicated React developer who specializes in building dynamic, responsive, and user-friendly web applications. I love crafting seamless user experiences with clean, efficient code, and I'm always exploring the latest in React and front-end technologies to stay ahead. If you’d like to know more about my background, skills, and journey, feel free to connect!,&nbsp;
          <Link to="/about" className="about-link"><a href="#projects" className="click-here">Click Here</a></Link>.
        </p>
      </div>
    </main>
  );
}
