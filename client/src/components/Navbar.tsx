import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenu,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
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

  const getBlockchainFromChainID = (chainId: number) => {
    switch (chainId) {
      case 1:
        return 'Ethereum Mainnet';
      case 56:
        return 'Binance Smart Chain';
      case 137:
        return 'Polygon';
      case 80001:
        return 'Polygon Mumbai';
      default:
        return 'Unknown';
    }
  };

  let blockchain = '';
  if (session?.user && user.chainId) {
    blockchain = getBlockchainFromChainID(user.chainId);
  } else {
    blockchain = 'Unknown';
  }

  const truncateHexAddress = (hexAddress: string) => {
    const prefix = hexAddress.slice(0, 4); // Extract the '0x' prefix
    const truncatedAddress =
      hexAddress.slice(2, 4) + '...' + hexAddress.slice(-4);
    return prefix + truncatedAddress;
  };

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
        <NavbarItem isActive={pathName === NAV_LINKS[4].href}>
          <Link
            color={`${
              pathName === NAV_LINKS[4].href ? 'primary' : 'foreground'
            }`}
            href={NAV_LINKS[4].href}
          >
            {NAV_LINKS[4].label}
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
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                isBordered
                as='button'
                className='transition-transform'
                color='secondary'
                name='Jason Hughes'
                size='sm'
                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem key='profile' className='h-14 gap-2'>
                <p className='font-semibold'>Signed in as</p>
                <p className='font-semibold'>{truncateHexAddress(user.account)}</p>
              </DropdownItem>
              <DropdownItem key='settings'>{blockchain}</DropdownItem>
             
              <DropdownItem
                onPress={() => {
                  signOut({ redirect: true });
                }}
                key='logout'
                color='danger'
                as={Button}
                href='/auth/login'
                className='text-red-500 bg-transparent text-start'
              >
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button as={Link} color='success' href='/auth/login' variant='flat' className='text-lg'>
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
