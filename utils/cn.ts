export const clsx = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return clsx(...classes);
};
