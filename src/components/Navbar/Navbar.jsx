import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const { Header } = Layout

const Navbar = () => {
  const location = useLocation()
  const selectedKey = location.pathname === '/' ? '1' : location.pathname.split('/')[1]

  return (
    <Layout>
      <Header className="bg-black flex items-center justify-between px-10">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <img src={logo} alt="logo" className="h-10 w-[12.5rem]" />
        </div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="horizontal"
          className="bg-black text-white flex-1 justify-end"
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key="1">
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="characters">
            <Link to="/characters" className="hover:text-yellow-500">
              Characters
            </Link>
          </Menu.Item>
          <Menu.Item key="books">
            <Link to="/books" className="hover:text-yellow-500">
              Books
            </Link>
          </Menu.Item>
          <Menu.Item key="spells">
            <Link to="/spells" className="hover:text-yellow-500">
              Spells
            </Link>
          </Menu.Item>
          <Menu.Item key="houses">
            <Link to="/houses" className="hover:text-yellow-500">
              Houses
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}

export default Navbar