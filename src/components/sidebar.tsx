import { HomeIcon, MapIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '@/assets/logo.svg';

const Logo = () => {
  return (
    <Link className="flex items-center text-white" to="/">
      <img className="w-auto h-8" src={logo} alt="Shomrkm App" />
      <span className="text-xl font-semibold text-white">Shomrkm App</span>
    </Link>
  );
};

type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const SideNavigation = () => {
  const navigation = [
    { name: 'Dashbard', to: '/dashboard', icon: HomeIcon },
    { name: 'Map', to: '/map', icon: MapIcon },
  ] as SideNavigationItem[];

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className="group flex items-center p-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
        >
          <item.icon
            className="shrink-0 mr-4 w-6 h-6 text-gray-400 group-hover:text-gray-300"
            aria-hidden="true"
          />
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export const Sidebar = () => {
  return (
    <div className="hidden md:flex md:shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-1 h-0">
          <div className="flex shrink-0 items-center px-4 h-16 bg-gray-900">
            <Logo />
          </div>
          <div className="flex overflow-y-auto flex-col flex-1">
            <nav className="flex-1 py-4 px-2 space-y-1 bg-gray-800">
              <SideNavigation />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
