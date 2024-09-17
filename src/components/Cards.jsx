export const cardList = [
  {
    path: "../public/img/iceland-card-img.png",
    name: "Iceland",
    alt: "Image of Iceland",
  },
  {
    path: "../public/img/Italy-card-img.png",
    name: "Italy",
    alt: "Image of Italy",
  },
  {
    path: "../public/img/dubai-card-img.png",
    name: "Dubai",
    alt: "Image of Dubai",
  },
  {
    path: "../public/img/patagonia-card-img.png",
    name: "Patagonia",
    alt: "Image of Patagonia",
  },
];

export default function Cards({ path, name, alt = 0 }) {
  return (
    <li className="md:mt-6 w-1/4">
      <div className="flex flex-col items-center gap-3">
        <figure className="hover:scale-100 duration-200 scale-95 cursor-pointer">
          <a href="">
            <img className="rounded-lg" src={path} alt={alt} />
          </a>
        </figure>
        <div className="text-center">
          <h3 className="cursor-pointer">
            <a href="">{name}</a>
          </h3>
          <p className="text__primary cursor-pointer">
            <a href="">Discover</a>
          </p>
        </div>
      </div>
    </li>
  );
}
