import React from "react";

const EmblaCarouselDotButton = ({ index, onClick, isSelected }) => {
  const dotColor = isSelected ? "text-blue-500" : "text-gray-500";
  return (
    <button
      className={`${dotColor} mx-2 px-2 py-1 rounded-full focus:outline-none`}
      onClick={() => onClick(index)}
    >
      &bull;
    </button>
  );
};

const useDotButton = (embla) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  React.useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();
    return () => embla.off("select", onSelect);
  }, [embla]);

  const scrollTo = (index) => {
    if (embla && index >= 0 && index < scrollSnaps.length) {
      embla.scrollTo(index);
    }
  };

  const onDotButtonClick = (index) => {
    setSelectedIndex(index);
    scrollTo(index);
  };

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export { EmblaCarouselDotButton, useDotButton };
