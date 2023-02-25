import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type BlockStyle = {
  color?: { background: string };
};

type Attributes = {
  align: 'wide' | 'full';
  isStackedOnMobile: boolean;
  backgroundColor: string;
  style: BlockStyle;
};

interface IColumnsProps {
  columns: number;
  background?: string;
  children: ReactNode;
  attributes: Attributes;
}

export const Columns = (props: IColumnsProps) => {
  const backgroundStyle: CSSProperties = {
    backgroundColor:
      props.attributes.backgroundColor ??
      props.attributes.style.color?.background,
  };

  return (
    <div
      className={`${props.attributes.align === 'full' ? 'w-screen' : ' w-4/5'}`}
    >
      <div className={`columns-auto flex`} style={{ ...backgroundStyle }}>
        {props.children}
      </div>
    </div>
  );
};
