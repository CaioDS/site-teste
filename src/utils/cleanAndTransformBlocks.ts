import { randomUUID } from 'crypto';

export const cleanAndTransformBlocks = (blocksJSON: any) => {
  const parsedBlocks = JSON.parse(blocksJSON);

  const assignId = (blocks: any[]) => {
    blocks.forEach((block) => {
      block.id = 'b854d3bd-6c07-4240-a614-f325e19d9891';
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(parsedBlocks);

  return parsedBlocks;
};
