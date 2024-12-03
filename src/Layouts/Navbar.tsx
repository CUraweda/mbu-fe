import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
  return (
    <div>
        <div className="mx-4 mt-4">
          <div className="justify-between p-2 bg-white rounded-lg navbar text-slate-800">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="ml-auto ">
              <div className="flex items-center justify-center">
                {/* notification */}
                <div className="items-center h-full m-auto mr-8 indicator">
                  <IoMdNotificationsOutline
                    size={30}
                    className="w-full text-2xl font-bold "
                  />
                  
                </div>
                {/* profile */}
                <div className="text-right">
                  <p className="text-sm font-semibold lg:text-base">John Doe</p>
                  <p className="text-xs">Super Admin</p>
                </div>
                <details className="dropdown dropdown-end">
                  <summary className="btn btn-ghost hover:bg-transparent">
                    <div className="avatar">
                      <div className="flex items-center justify-center w-8 border border-black rounded-full">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          alt="Logout Icon"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <div>Logout</div>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar