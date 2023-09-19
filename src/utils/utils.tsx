const replaceClassName = (element: Element, from: string, to: string, condition: boolean) => {
    element.classList.toggle(from, !condition);
    element.classList.toggle(to, condition);
  };

  

const replaceClassNameOnIntersect = (entry: IntersectionObserverEntry, from: string, to: string) => {
  if (!(entry.target.classList.contains(from) || entry.target.classList.contains(to))) return null;
  entry.target.classList.toggle(from, !entry.isIntersecting);
  entry.target.classList.toggle(to, entry.isIntersecting);
};

export default {replaceClassName, replaceClassNameOnIntersect}