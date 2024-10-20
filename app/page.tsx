import AccessMenu from "components/home/AccessMenu";
import Illustration from "components/home/Illustration";

export default function Home() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-14 px-4 md:px-32">
        <AccessMenu />
        <Illustration />
      </section>
    </>
  );
}
