"use client";

import React from "react";
import {
  FaHome,
  FaRegListAlt,
  FaUserAlt,
  FaEllipsisH,
} from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

import { signOut } from "next-auth/react";

import { useRouter } from 'next/navigation'


function AutoDocsNavbar({ session }) {

  // https://github.com/apps/probot-geist/installations/new
  const appName = 'probot-geist';
  const redirectURL = 'http://localhost:3000/home'; // Replace with your actual redirect URL

  const state = encodeURIComponent(JSON.stringify(redirectURL));
  const installationURL = `https://github.com/apps/${appName}/installations/new?state=${state}`;
  const githubUserURL = `https://github.com/${session?.user?.name}/`;

  const router = useRouter();

  // Function to handle redirect after GitHub App installation
  const handleRedirect = (event) => {
    event.preventDefault();
    router.push(redirectURL);
  };

  const NavItem = ({ icon, label, link }) => {

    return (
      <a href={link} target={label === "Grant Access" || label === "Profile" ? "_blank" : "_self"}>
        <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-6 flex items-center space-x-2">
          {icon}

          <span>{label}</span>
        </div>
      </a>
    );
  }




  return (
    <div style={{ width: "20%" }} className="flex-none bg-gray-800 text-white p-4 overflow-y-auto">
      <div className="flex flex-col items-center">
        <VscGithubAlt className="text-gray-200 text-4xl mb-4" />

        {session?.user?.image && <img
          style={{
            height: "120px",
            width: "90px",
            paddingBottom: "30px"
          }}
          className="h-8 w-8 rounded-full"
          src={session?.user?.image}
          alt="User profile"
        />}


        <nav className="mb-4">
          <hr />
          <h2
            style={{
              padding: "12px",
              paddingTop: "50px",
              fontSize: "20px",
              fontWeight: "bold"
            }}

          >
            🤖 AutoDocs AI
          <br />
          </h2>

          <hr />
          <h2
            style={{
              padding: "12px",
              paddingTop: "50px",
              fontSize: "20px",
              fontWeight: "bold"
            }}

          >
            Hello {session?.user?.name} 👋🏾
          </h2>
          <br />
          <hr />
          <br />
          <NavItem link={"#"} icon={<FaHome className="text-xl" />} label="Home" />

          <NavItem link={installationURL} icon={<FaRegListAlt className="text-xl" />} label="Grant Access" />
          <NavItem link={githubUserURL} icon={<FaUserAlt className="text-xl" />} label="Profile" />
          <NavItem link={"#"} icon={<FaEllipsisH className="text-xl" />} label="More" />
        </nav>
        <button onClick={() => signOut()} className="w-full bg-red-500 text-white rounded-full py-3 font-bold">
          Sign Out
        </button>

      </div>
    </div>
  );
}


export default AutoDocsNavbar;
