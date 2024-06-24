import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { FoundCount } from "./FoundCount";

export function Navbar({ movies }) {
  return (
    <nav className="nav-bar">

      <Logo />

      <SearchInput />

      <FoundCount movies={movies} />

    </nav>
  );
}
