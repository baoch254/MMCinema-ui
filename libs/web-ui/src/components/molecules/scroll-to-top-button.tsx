import React from 'react';

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const ScrollToTopButton = ({ containerRef }: Props) => {
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 999,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 hover:text-gray-800"
      onClick={() => containerRef.current?.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
           className="jsx-c9bc8558a8709662 h-5 w-5 ">
        <path fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd" className="jsx-c9bc8558a8709662"></path>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;
