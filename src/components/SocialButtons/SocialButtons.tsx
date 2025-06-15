import "./SocialButtons.css";

const socialIcons = [
  {
    src: "google.png",
    alt: "google",
    link: "http://localhost:5000/auth/google",
  },
  {
    src: "github.png",
    alt: "github",
    link: "http://localhost:5000/auth/github",
  },
  {
    src: "facebook.png",
    alt: "facebook",
    link: "http://localhost:5000/auth/facebook",
  },
];

export const SocialButtons = () => {
  return (
    <div className="social__buttons">
      {socialIcons.map((icon) => (
        <a key={icon.alt} href={icon.link}>
          <button key={icon.alt} className="social__btn">
            <img src={icon.src} alt={icon.alt} className="social__img" />
          </button>
        </a>
      ))}
    </div>
  );
};
