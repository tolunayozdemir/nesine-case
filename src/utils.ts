export const classnames = (obj: { [key in string]: boolean }) => {
  return Object.entries(obj)
    .filter((e) => e[1])
    .map((e) => e[0])
    .join(" ");
};
