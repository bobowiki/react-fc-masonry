import React from 'react';
import { Masonry } from '../index';

const list = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  image: `https://picsum.photos/seed/tool${index + 1}/${
    [400, 420, 440][index % 3]
  }/${[300, 320, 340][(index + 1) % 3]}`,
}));

const breakpointColumnsObj = {
  default: 6,
  1600: 5,
  1280: 4,
  1024: 3,
  768: 2,
  480: 2,
  0: 1,
};

const Home = () => {
  return (
    <Masonry breakpointCols={breakpointColumnsObj} columnGap={16}>
      {list.map((it) => (
        <div key={it.id}>
          <img src={it.image} style={{ width: '100%', minHeight: 40 }} />
        </div>
      ))}
    </Masonry>
  );
};

export default Home;
