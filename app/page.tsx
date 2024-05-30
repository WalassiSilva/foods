import Header from "./_components/Header";
import Search from "./_components/search";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </main>
  );
}
