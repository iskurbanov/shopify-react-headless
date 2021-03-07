import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

import { Badge, Box, Icon, Image } from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";


const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Box borderBottom="0.25pt white solid" backgroundColor="#FFA8E2" display="flex" flexDir="row" p="2rem" justifyContent="space-between" alignItems="center">
      <Icon fill="white" cursor="pointer" onClick={() => openMenu()} as={MdDehaze} w={30} h={30}></Icon>
      <Link to="/"><Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100}/></Link>
      <Box>
      <Icon fill="white" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30}></Icon>
        <Badge backgroundColor="#FF38BD" borderRadius="50%">{checkout?.lineItems?.length}</Badge>
      </Box>
    </Box>
  )
}

export default Navbar
