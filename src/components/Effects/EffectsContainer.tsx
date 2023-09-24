import './effects.css';
import { useEffect, ReactNode } from 'react';

const effectList =[
  {
    from: 'hide',
    to: 'show'
  },
  {
    from: 'fromLeft',
    to: 'toLeft'
  } 
];

const replaceClassNameOnIntersect = (entry: IntersectionObserverEntry, from: string, to: string) => {
  if (!(entry.target.classList.contains(from) || entry.target.classList.contains(to))) return null;
  entry.target.classList.toggle(to, entry.isIntersecting);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    effectList.map((effect) => replaceClassNameOnIntersect(entry, effect.from, effect.to));
  });
});

interface Props
{
  children?: ReactNode;
  effects?: string;
}

const EffectsContainer = ({children, effects=""}: Props) => {
    useEffect(() => {
        const targetElements = document.querySelectorAll('.effects-container');
        targetElements.forEach((element) => observer.observe(element));
    });

    return (
        <section className={`effects-container ${effects}`}>{children}</section>
    )
}

export default EffectsContainer