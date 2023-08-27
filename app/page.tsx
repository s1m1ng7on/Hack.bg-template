/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Bringing immersive gaming experiences to life with cutting-edge technology</h1>
      </div>

      <div className="container">
        <h2 className="section-title">FEATURED GAMES</h2>
        <div className="section-content">
          <div className="game-card">
            <h2 className="{kumbhSans.className}">Air Rush</h2>
            <h3>2023</h3>
            <p>Control your character in a 2D platformer, manipulate platforms to hinder opponents.</p>
            <button>VIEW</button>
          </div>
          <div className="game-card">
            <h2 className="{kumbhSans.className}">Kinter 2</h2>
            <h3>2022</h3>
            <p>Follow Kinter`&apos;`s action-packed adventures in Ancient Greece.</p>
            <button>VIEW</button>
          </div>
          <div className="game-card">
            <h2 className="{kumbhSans.className}">Kinter Classic</h2>
            <h3>2021</h3>
            <p>The original and the first - A CLASSIC of its kind.</p>
            <button>VIEW</button>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="section-content">
          <img className="gallery-image" src="image3.png" alt="" />
          <img className="gallery-image" src="image4.png" alt="" />
          <img className="gallery-image" src="image5.png" alt="" />
          <img className="gallery-image" src="image6.png" alt="" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Reviews</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="https://i.ytimg.com/vi/xYdI_NIGj2k/frame0.jpg" alt="avatar" />
            <h3 className="card-name">Ivan The Döner</h3>
            <p>
            Kinter Classic is a delightful platformer that not only provides hours of fun gameplay but also encourages learning. The variety of biomes and monsters keeps things exciting, and the quizzes add an educational twist that makes it perfect for both entertainment and knowledge enrichment.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://ludsport.net/wp-content/uploads/2023/02/screenshot758603.jpg" alt="avatar" />
            <h3 className="card-name">The Chechen</h3>
            <p>
            I absolutely love Kinter Classic! The visuals are stunning, and each level feels like a unique adventure. The combination of platforming challenges and quizzes keeps me engaged and motivated to improve my skills while expanding my knowledge. It is a game that entertains and educates in the best possible way.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://i.ytimg.com/vi/BHsLLQAhtMw/maxresdefault.jpg" alt="avatar" />
            <h3 className="card-name">Tosho The Hook</h3>
            <p>
            Kinter Classic is a nostalgic trip down memory lane with its classic 2D platforming mechanics. The diverse levels and beautifully designed biomes create a visually appealing world to explore. The addition of quizzes is a brilliant touch, making this game not only entertaining but also intellectually stimulating. Highly recommended for gamers of all ages!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="https://zvezden.com/wp-content/uploads/2023/05/emili-s-trotinetkata.webp" alt="avatar" />
            <h3 className="card-name">Emily The Scooter</h3>
            <p>
            Kinter Classic is a standout platformer that successfully blends fun and education. The level design is top-notch, offering a perfect balance of challenging obstacles and intriguing quizzes. I appreciate how the game seamlessly integrates knowledge-building into the gameplay, making it a great choice for those seeking both entertainment and mental stimulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
