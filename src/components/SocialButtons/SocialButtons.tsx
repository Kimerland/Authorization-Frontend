import "./SocialButtons.css";

const socialIcons = [
  { src: "google.png", alt: "google" },
  { src: "github.png", alt: "github" },
  { src: "facebook.png", alt: "facebook" },
];

export const SocialButtons = () => {
  return (
    <div className="social__buttons">
      {socialIcons.map((icon) => (
        <button key={icon.alt} className="social__btn">
          <img src={icon.src} alt={icon.alt} className="social__img" />
        </button>
      ))}
    </div>
  );
};
