import Header from "./_components/header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search";
import Image from "next/image";

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

      <div className="px-5 pt-5">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </main>
  );
}
