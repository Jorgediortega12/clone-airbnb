"use client"

import { TfiWorld } from "react-icons/tfi"
import { Categories, Container, Logo, Selector, UserMenu } from ".."
import { modalLanguaje, useRentModal, userLoginModal } from "@/hook"
import { useCallback } from "react"
import { useSession } from "next-auth/react"

export const Navbar = () => {
  const loginModal = userLoginModal();
  const rentModal = useRentModal(); 
  
  const selectedLanguage = modalLanguaje();
  const { data: session } = useSession();

  const onRent = useCallback(() => {
    if (!session) {
      return loginModal.onOpen();
    }

    rentModal.onOpen(); 
  }, [session, loginModal, rentModal])

  return (
    <div className="fixed w-full bg-white z-1o shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-2 md:gap-3">
            <Logo />
            <div className='flex items-center gap-2 transition-all duration-200 text-sm ml-32'>
              <p className='hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-full font-semibold'>Estadías</p>
              <p className='hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-full'>Experiencias</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-2'>
                <div onClick={onRent} className='hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-full text-sm font-semibold'>Pon tu espacio en Airbnb</div>
                <TfiWorld onClick={selectedLanguage.onOpen} size={30} className='hover:bg-[#f7f7f7] cursor-pointer p-2 rounded-full' />
              </div>
              <UserMenu />
            </div>
          </div>
          <Selector />
        </Container>
      </div>
      <Categories />
    </div>
  )
}
