import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Box,
  Text,
  Image,
  SimpleGrid,
  Link
} from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'



const Cart = () => {

  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)


  return (
    <>
      <Drawer isOpen={isCartOpen} onClose={closeCart} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart</DrawerHeader>
            <DrawerBody>
              {checkout?.lineItems?.length ?
                <SimpleGrid columns={1} spacing={10}>
                  {checkout.lineItems && checkout.lineItems.map(item => (
                    <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                      </Box>
                      <Box display="flex" alignItems="center" justifyContent="center">
                        <Image src={item.variant.image.src} />
                      </Box>
                      <Box display="flex" flexDir="column" align="center" justify="center">
                        <Text fontSize="sm" fontWeight="bold">
                          {item.title}
                        </Text>
                        <Text fontSize="sm">
                          {item.variant.title}
                        </Text>
                      </Box>
                      <Box>
                        <Text height="100%" display="flex" align="center" justifyContent="center">
                          {item.variant.price}
                        </Text>
                      </Box>
                    </Grid>
                  ))}
                </SimpleGrid> :
                <Box h="100%" w="100%">
                  <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">Your Cart is empty!</Text>
                </Box>
              }
            </DrawerBody>
            <DrawerFooter>
              <Button w="100%">
                <Link w="100%" href={checkout?.webUrl}>
                  Checkout
                </Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Cart
