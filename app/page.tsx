import Header from "./_components/header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </main>
  );
}
