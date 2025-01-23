import { app_name } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'
import Search from './search'

export default function Header() {
  return (
    <header className='bg-black  text-white'>
      <div className='px-3 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1 '
            >
              <div className='flex gap-2'>
                <Image
                  src='/icons/logo.svg'
                  width={30}
                  height={30}
                  alt={`${app_name} logo`}
                />
                <span className='text-[20px]'>
                  {app_name}
                </span>
              </div>
            </Link>
          </div>
            <div className='hidden md:block flex-1 max-w-xl'>
              <Search />
            </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
        <Button
          variant='ghost'
          className='header-button flex items-center gap-1 text-base [&_svg]:size-6'
        >
          <MenuIcon />
          All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className='header-button !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}