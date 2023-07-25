import { Route, Routes } from "react-router-dom"
import { Services } from "./Services"
import { ServicesAll } from "./ServicesAll"
import ErrorPage from "../../components/ErrorPage"

export interface IServiceNavigation { }

export const ServiceNavigation: React.FC<IServiceNavigation> = (props: IServiceNavigation) => {
  return <Routes>
    <Route path="/" element={<Services />} />
    <Route path="/all" element={<ServicesAll />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
}