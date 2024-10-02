import { Outlet } from 'react-router-dom'
import Header from '../js/Components/Header/index'
import Footer from '../js/Components/Footer/index'
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
