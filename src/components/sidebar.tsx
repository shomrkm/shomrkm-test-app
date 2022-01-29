import { HomeIcon, MapIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '@/assets/logo.svg';

const Logo = () => {
  return (
    <Link className="flex items-center text-white" to="/">
      <img className="h-8 w-auto" src={logo} alt="Shomrkm App" />
      <span className="text-xl text-white font-semibold">Shomrkm App</span>
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
          className="text-gray-300, hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
        >
          <item.icon
            className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
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
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col  w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <Logo />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              <SideNavigation />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
