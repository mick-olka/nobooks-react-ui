export type Logo = {
  logoName: string;
  redirectTo?: string;
};

export type Menu = {
  links: { name: string; href: string }[];
};
