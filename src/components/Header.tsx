'use client';

// import { AcmeLogo } from "./Logos/AcmeLogo";
import { MaruArchiveLogo } from './Logos/MaruArchiveLogo';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Chip } from '@nextui-org/chip';
import ShimmerButton from '@/components/magicui/shimmer-button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems = [
    {
      label: 'home',
      path: '/',
      target: '_self',
      disabled: false,
    },
    {
      label: 'projects',
      path: '/projects',
      target: '_self',
      disabled: true,
    },
    {
      label: 'blog',
      path: 'https://blog.rfqma.xyz',
      target: '_blank',
      disabled: false,
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-2">
          <MaruArchiveLogo />
          <p className="font-bold text-inherit">rfqma/maruarchive</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            isActive={pathname === item.path}
            key={`${item.label}-${index}`}
          >
            <Link
              color={pathname === item.path ? 'secondary' : 'foreground'}
              href={item.path}
              target={item.target}
              isDisabled={item.disabled}
            >
              {item.disabled ? (
                <div className="flex gap-2 items-center">
                  {item.label}
                  <Chip
                    color="primary"
                    size="sm"
                    radius="full"
                    variant="shadow"
                  >
                    coming soon
                  </Chip>
                </div>
              ) : (
                item.label
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="https://drive.google.com/file/d/1Fdgs_s1G10O0Nr5Vip0pjRTf0Z03jZgK/view?usp=sharing"
            variant="flat"
            target="_blank"
            size="sm"
          >
            resume
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <Link
            href="https://cloud.rfqma.xyz/s/6CZWQLmxxdKLrwf"
            target="_blank"
          >
            <ShimmerButton className="shadow-2xl" shimmerSize="0.1em">
              <span className="whitespace-pre-wrap text-center text-base font-normal leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                resume
              </span>
            </ShimmerButton>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={pathname === item.path}
            key={`${item}-${index}`}
          >
            <Link
              color={pathname === item.path ? 'secondary' : 'foreground'}
              className="w-full"
              href={item.path}
              target={item.target}
              size="lg"
              isDisabled={item.disabled}
            >
              {item.disabled ? (
                <div className="flex gap-2 items-center">
                  {item.label}
                  <Chip
                    color="primary"
                    size="sm"
                    radius="full"
                    variant="shadow"
                  >
                    coming soon
                  </Chip>
                </div>
              ) : (
                item.label
              )}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
