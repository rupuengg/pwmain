import { Footer, Header } from "./Common";

export interface IPWLayout {
  children: JSX.Element | JSX.Element[] | string;
}

export const PWLayout: React.FC<IPWLayout> = ({ children }: IPWLayout) => {
  return <div>
    {/* Header */}
    <Header />

    {/* Content */}
    {children}

    {/* Footer */}
    <Footer />
  </div>
}