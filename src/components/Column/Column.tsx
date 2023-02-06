import { CSSProperties, ReactNode } from 'react';

type Attributes = {
  width?: string;
};

interface IColumnProps {
  children: ReactNode;
  attributes: any;
}

export const Column = (props: IColumnProps) => {
  const widthStyle: CSSProperties = props.attributes.width
    ? { maxWidth: props.attributes.width, flexGrow: 0 }
    : { flexGrow: 1, flexBasis: 1 };

  return (
    <div style={{ ...widthStyle }} className={`flex justify-center px-2`}>
      {props.children}
    </div>
  );
};
