import Ticket from "@/components/Ticket";

export default function Page() {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(<Ticket />);
  }
  return (
    <section className="mt-10">
      <h3>Visit List</h3>
      {list}
    </section>
  );
}
