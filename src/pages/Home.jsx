import Button from "../components/Button";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <section className="hero__section text-left">
        <h1 className="text__primary">
          Let’s talk{" "}
          <span className="text__secondary">about your next trip!</span>{" "}
        </h1>
        <p className="mt-3">
          Share your favorite travel destination and we will feature it in our
          next blog!
        </p>
        <div className="mt-8 flex-row gap-6">
          <Button />
          <span>Watch highlight</span>
        </div>
      </section>
    </div>
  );
}
