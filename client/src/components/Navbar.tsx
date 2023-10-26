import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { signOut, useSession } from 'next-auth/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const { data: session, status } = useSession();
  const user: any = session?.user!;
  console.log({ session }, status);

  const menuItems = [
    'Profile',
    'Dashboard',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar className='z-!important' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <Link href='/' color='foreground'>
          <NavbarBrand>
            <Image src='/logo.png' height={36} width={36} alt='logo' />
            <p className='font-bold text-inherit ml-3'>Dynamic Incheon NFT</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive={pathName === NAV_LINKS[1].href}>
          <Link
            color={`${
              pathName === NAV_LINKS[1].href ? 'primary' : 'foreground'
            }`}
            href={NAV_LINKS[1].href}
          >
            {NAV_LINKS[1].label}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === NAV_LINKS[2].href}>
          <Link
            href={NAV_LINKS[2].href}
            color={`${
              pathName === NAV_LINKS[2].href ? 'primary' : 'foreground'
            }`}
          >
            {NAV_LINKS[2].label}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === NAV_LINKS[3].href}>
          <Link
            color={`${
              pathName === NAV_LINKS[3].href ? 'primary' : 'foreground'
            }`}
            href={NAV_LINKS[3].href}
          >
            {NAV_LINKS[3].label}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        {session?.user ? (
          <NavbarItem>
            <Button
              as={Link}
              color='primary'
              href='/auth/login'
              variant='flat'
              onClick={() => {
                signOut({ redirect: true });
              }}
            >
              Sign out
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color='primary' href='/auth/login' variant='flat'>
              Sign up
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {NAV_LINKS.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={`${
                pathName === NAV_LINKS[index].href ? 'primary' : 'foreground'
              }`}
              className='w-full'
              href={NAV_LINKS[index].href}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
