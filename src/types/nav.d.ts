interface INavItem {
  label: string;
  href: string;
}

interface INavLegaciesProps {
  pathname: string;
}

interface INavLinkProps {
  item: { label: string; href: string };
  pathname: string;
}
