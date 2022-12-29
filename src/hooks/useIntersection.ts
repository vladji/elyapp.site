import { useEffect, useState, useMemo, Dispatch, SetStateAction } from 'react';

type UseIntersection = () => {
  ref: Dispatch<SetStateAction<Element | null>>;
  inView: boolean;
};

export const useIntersection: UseIntersection = () => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [ref, setRef] = useState<Element | null>(null);

  const frozen = useMemo(
    () => entry?.isIntersecting,
    [entry],
  );

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !ref) return;

    const observer = new IntersectionObserver(updateEntry);

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, frozen]);

  return {
    ref: setRef,
    inView: !!entry?.isIntersecting,
  };
};
