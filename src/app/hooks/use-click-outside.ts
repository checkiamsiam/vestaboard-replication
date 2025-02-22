import { useEffect } from "react";

const useClickOutside = (
  refs: React.RefObject<any>[],
  func: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (
        refs.some(
          (ref) => ref.current && ref.current.contains(e.target as Node)
        )
      ) {
        return;
      }
      func();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, func]);
};

export default useClickOutside;
