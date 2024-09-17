export const recentCard = [
  {
    title: "Tuscany, Italy",
    description:
      "The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic landscape.",
    imagePath: "../public/img/tuscany-img.png",
  },
  {
    title: "Tokyo, Japan",
    description:
      "Tokyo is well known for its temples, oceans, Shinto shrines and wooden houses. It’s time to visit tokyo.",
    imagePath: "../public/img/tokyo-img.png",
  },
  {
    title: "Lofoten island, Norway",
    description:
      "featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for your next postcard.",
    imagePath: "../public/img/lofoten-island-img.png",
  },
];

export default function RecentCard({ title, description, imagePath = 0 }) {
  return (
    <div className="flex flex-row gap-5 justify-evenly">
      <figure>
        <img src={imagePath} alt="" />
      </figure>
      <div className="md:w-[358px]">
        <h3 className="">{title}</h3>
        <p className="leading-normal mt-2text-[#576074]">
          {description}
          <span className="text-base">
            <a href="">view full blog...</a>
          </span>
        </p>
      </div>
    </div>
  );
}
