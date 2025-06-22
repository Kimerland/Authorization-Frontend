import Image from "next/image";
import "./SocialButtons.css";

const socialIcons = [
  {
    src: "/google.png",
    alt: "google",
    link: "http://localhost:5555/auth/google",
  },
  {
    src: "/github.png",
    alt: "github",
    link: "http://localhost:5555/auth/github",
  },
  {
    src: "/facebook.png",
    alt: "facebook",
    link: "http://localhost:5555/auth/facebook",
  },
];

export const SocialButtons = () => {
  return (
    <div className="social__buttons">
      {socialIcons.map((icon) => (
        <a key={icon.alt} href={icon.link}>
          <button className="social__btn">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={32}
              height={32}
              className="social__img"
            />
          </button>
        </a>
      ))}
    </div>
  );
};
