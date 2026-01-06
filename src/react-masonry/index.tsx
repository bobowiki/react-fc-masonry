import React, { useEffect, useMemo, useRef, useState } from 'react';

const containerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
};

export interface MasonryProps {
  breakpointCols?: { [key: string]: number } & { default: number };
  columnGap?: number;
  columnClassName?: string;
  children: React.ReactNode[];
  style?: React.CSSProperties;
  [key: string]: any;
}

export function Masonry(props: MasonryProps) {
  const {
    breakpointCols = {
      default: 6,
      1600: 5,
      1280: 4,
      1024: 3,
      768: 2,
      480: 2,
    },
    columnGap = 8,
    columnClassName = '',
    children,
    style = {},
    ...rest
  } = props;
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const columnCount = useMemo(() => {
    if (!breakpointCols) return 1;
    const windowWidth = width;
    let breakpointColsObject = breakpointCols ?? {};
    for (let breakpoint in breakpointColsObject) {
      if (
        Object.prototype.hasOwnProperty.call(breakpointColsObject, breakpoint)
      ) {
        const optBreakpoint = parseInt(breakpoint);
        const isCurrentBreakpoint =
          optBreakpoint > 0 && windowWidth <= optBreakpoint;
        if (isCurrentBreakpoint) {
          return breakpointColsObject[breakpoint];
        }
      }
    }
    return breakpointColsObject.default || 1;
  }, [breakpointCols, width]);

  const columnsList = useMemo(() => {
    if (!children || children.length === 0) return [];
    if (!columnCount || columnCount <= 0) return [];
    const columns: React.ReactNode[][] = Array.from({
      length: columnCount,
    }).map(() => []);
    children.forEach((item, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(item);
    });
    return columns;
  }, [children, columnCount]);

  useEffect(() => {
    if (!containerRef.current) return;
    setWidth(containerRef.current.clientWidth);
    const handleResize = () => {
      requestAnimationFrame(() => {
        const width = containerRef.current?.clientWidth ?? 0;
        setWidth(width);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        ...containerStyle,
        gap: columnGap,
        ...style,
      }}
      ref={containerRef}
      {...rest}
    >
      {columnsList.map((column, columnIndex) => (
        <div
          className={columnClassName}
          key={columnIndex}
          style={{
            width: `${100 / columnCount}%`,
          }}
        >
          {column.map((item) => item)}
        </div>
      ))}
    </div>
  );
}
