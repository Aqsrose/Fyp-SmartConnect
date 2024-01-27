import Search from "@/components/Navbar/Search";
import Logo from "@/components/landingpage/Logo";
function Headerpage() {
  return (
    <section>
      <div className="shadow-sm pb-2 pt-2">
        <Logo />
        <div className="flex-row">
          <Search />
        </div>
      </div>
    </section>
  );
}

export default Headerpage;
