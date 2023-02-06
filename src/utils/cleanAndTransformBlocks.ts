import { randomUUID } from 'crypto';

export const cleanAndTransformBlocks = (blocksJSON: any) => {
  const parsedBlocks = JSON.parse(blocksJSON);

  const assignId = (blocks: any[]) => {
    blocks.forEach((block) => {
      block.id = randomUUID();
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(parsedBlocks);

  return parsedBlocks;
};
