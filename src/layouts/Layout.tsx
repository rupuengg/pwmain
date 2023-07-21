import React, { useMemo } from "react";
import { PWLayout } from "./PWLayout";
import { PanacheLayout } from "./PanacheLayout";

export enum E_Layout {
  PW = `PW`,
  PANACHE = `Panache`,
}

export interface ILayout {
  layout: E_Layout;
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<ILayout> = (props: ILayout) => {
  const { layout, children } = props;

  const Layout: JSX.Element = useMemo(() => {
    switch (layout) {
      case E_Layout.PW:
        return <PWLayout>{children}</PWLayout>;
      case E_Layout.PANACHE:
        return <PanacheLayout>{children}</PanacheLayout>;
      default:
        return <div>No Layout selected</div>;
    }
  }, [layout, children]);

  return <div className={'layout'} style={{ width: '100%', height: '100vh' }}>{Layout}</div>
}