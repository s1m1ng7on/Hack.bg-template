/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">The original, remastered</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="image1.png" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
          Kinter Classic is an exciting 2D platformer game that takes players on a thrilling adventure through six captivating levels, each offering unique biomes, settings, and challenges. As the protagonist of the game, you embark on a quest to acquire knowledge and test your wits through engaging quizzes.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Environment</h2>
          <p>
          In this immersive platformer, you'll explore diverse landscapes, ranging from lush forests to icy tundras, scorching deserts to mystical caves, and futuristic cityscapes to ancient ruins. Each level presents its own distinct visual style, filled with vibrant colors, intricate details, and atmospheric soundtracks, enhancing the overall gaming experience.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="image2.png" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Difficulty</h2>
        <p>
        As you progress through the game, you'll encounter a wide variety of monsters and enemies, each with their own behaviors and abilities. From mischievous imps to towering bosses, you'll need to utilize your platforming skills, quick reflexes, and clever strategies to overcome these challenges and advance to the next level.
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="image3.png" />
          <img className="gallery-image" src="image4.png" />
          <img className="gallery-image" src="image5.png" />
          <img className="gallery-image" src="image6.png" />
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
            I absolutely love Kinter Classic! The visuals are stunning, and each level feels like a unique adventure. The combination of platforming challenges and quizzes keeps me engaged and motivated to improve my skills while expanding my knowledge. It's a game that entertains and educates in the best possible way.
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
