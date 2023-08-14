import './sidebar.css';

import { Sidebar,Button } from 'flowbite-react';
import { HiInbox, HiShoppingBag, HiViewBoards } from 'react-icons/hi';
import InlineDropdown from './DropMenu';

export default function ContentSeparator() {
  return (
    <Sidebar>
      
      <Sidebar.Items className='sidebar_item_container'>
        
        <Sidebar.ItemGroup className='sidebar_item_group'>
          <Sidebar.Logo
        href="/"
      >
        <p>
          S.R. Ferros
        </p>
      </Sidebar.Logo>
          <Sidebar.Item
            href="/inventory"
            icon={HiViewBoards}
          >
            <p>
              Inventory
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/billing"
            icon={HiInbox}
          >
            <p>
              Billing
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/toll kanta"
            icon={HiInbox}
          >
            <p>
              Toll kanta
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/raiserequest"
            icon={HiInbox}
          >
            <p>
              Raise request
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/demandrequest"
            icon={HiInbox}
          >
            <p>
              Demand request
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='sidebar_item_group'>
          <Sidebar.Item>
            <InlineDropdown className='w-full'></InlineDropdown>
          </Sidebar.Item>
          <Sidebar.CTA className='p-0'>
            {/* <button className='w-full h-full  bg-blue-600 p-3 rounded-md text-white'>Logout</button> */}
            <Button className='w-full'>LOG OUT</Button>
          </Sidebar.CTA>
          {/* <Sidebar.Item
            className='p-0 px-0 sidebar_cta_button'
          >
            <Button className='w-full p-0 cta_button'>LogOut</Button>
          </Sidebar.Item> */}
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


