import React, { useEffect } from "react";
import "./sidebar.css";
import { Sidebar, Button } from "flowbite-react";
import { HiInbox, HiViewBoards } from "react-icons/hi";
import {
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebasec";


export default function ContentSeparator() {
  const [user] = useAuthState(auth);
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Navigate("/login"); // Navigate to the login page after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    // Set session persistence
    setPersistence(auth, browserSessionPersistence)
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  }, []);

  const handleLoginClick = () => {
    // Route to the login page
    Navigate("/login");
  };

  return (
    <Sidebar>
      <Sidebar.Items className="sidebar_item_container">
        <Sidebar.ItemGroup className="sidebar_item_group">
          <Sidebar.Logo href="/">
            <p>S.R. Ferros</p>
          </Sidebar.Logo>
          <Sidebar.Item href="/inventory" icon={HiViewBoards}>
            <p>Inventory</p>
          </Sidebar.Item>
          <Sidebar.Item href="/billing" icon={HiInbox}>
            <p>Billing</p>
          </Sidebar.Item>
          <Sidebar.Item href="/toll kanta" icon={HiInbox}>
            <p>Toll kanta</p>
          </Sidebar.Item>
          <Sidebar.Item href="/repairrequest" icon={HiInbox}>
            <p>Repair request</p>
          </Sidebar.Item>
          <Sidebar.Item href="/demandrequest" icon={HiInbox}>
            <p>Demand request</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="sidebar_item_group">
          <Sidebar.CTA className="p-0">
            {user ? (
              <Button className="w-full" onClick={handleLogout}>
                LOG OUT
              </Button>
            ) : (
              <Button className="w-full" onClick={handleLoginClick}>
                LOG IN
              </Button>
            )}
          </Sidebar.CTA>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
