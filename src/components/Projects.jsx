import React from 'react'
import "./project.css"
const Projects = () => {
  return (
    <>
      <div className="container projects my-4">
  <h1>PROJECTS</h1>
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/projects/BloggerStop.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-md-block">
          <h5>BloggerStop</h5>
          <p>BloggersTop is a responsive template for a blogging website where contributors can contribute their blogs to let their blogs reach a larger audience.</p>
          <a href="https://github.com/aarav-gargg/Bloggerstop" target='_blank' className='sliderImage'>
            <img src="/assets/skills/github.png" alt="" />
          </a>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/projects/Simplex.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-md-block">
          <h5>Simplex</h5>
          <p>Simplex is a cutting-edge AI image generator designed to transform your creative ideas into stunning visuals effortlessly. Leveraging the latest advancements in machine learning and neural networks, Simplex offers a user-friendly platform where anyone can generate high-quality images for free.</p>
          <a href="https://github.com/aarav-gargg/Simplex" target='_blank' className='sliderImage'>
            <img src="/assets/skills/github.png" alt="" />
          </a>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/hero.png" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-md-block">
          <h5>UniFind</h5>
          <p>Some representative placeholder content for the third slide.</p>
          <a href="https://github.com/aarav-gargg/UniFind" target='_blank' className='sliderImage'>
            <img src="/assets/skills/github.png" alt="" />
          </a>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Projects
