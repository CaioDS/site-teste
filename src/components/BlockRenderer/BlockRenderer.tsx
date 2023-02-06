import { Column } from '../Column';
import { Columns } from '../Columns';

export function BlockRenderer({ blocks }: any) {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/columns':
        return (
          <Columns
            key={block.id}
            columns={block.innerBlocks.length}
            attributes={block.attributes}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      case 'core/column':
        return (
          <Column attributes={block.attributes}>Oi Eu sou uma coluna</Column>
        );
      default:
        return null;
    }
  });
}
