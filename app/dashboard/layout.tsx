import { getServerSession } from "next-auth";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  FolderGit2,
  GraduationCap,
  LayoutDashboard,
  Menu,
  SearchIcon,
  Settings,
} from "lucide-react";
import NextBreadcrumbs, { BreadcrumbDemo } from "@/components/NextBreadcrumbs";
import NextBreadcrumb from "@/components/NextBreadcrumbs";

const navigation = [
  { Icon: LayoutDashboard, name: "Overview", href: "dashboard/" },
  { Icon: FolderGit2, name: "Projects", href: "dashboard/projects" },
  { Icon: BriefcaseBusiness, name: "Experience", href: "dashboard/experience" },
  { Icon: GraduationCap, name: "Education", href: "dashboard/education" },
  { Icon: Settings, name: "Settings", href: "dashboard/settings" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold"
              prefetch={false}
            >
              <BriefcaseIcon className="h-6 w-6" />
              <span className="">Portfolio CMS</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <item.Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            // onClick={() => {
            //   document.getElementById('sidebar')?.classList.toggle('-translate-x-full');
            // }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
          <NextBreadcrumb
            homeElement={"Home"}
            activeClasses="text-primary"
            containerClasses=""
            listClasses=""
            capitalizeLinks
          />
          {/* <BreadcrumbDemo /> */}
          <div className="flex-1">
            <form className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-8 w-full sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
              />
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src={session?.user?.image || "https://github.com/baydis.png"}
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/api/auth/signout"} className="">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div
          id="sidebar"
          className="fixed inset-y-0 left-0 z-50 w-64 transform -translate-x-full bg-gray-100/40 border-r p-4 transition-transform duration-300 ease-in-out dark:bg-gray-800/40 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            <div className="flex h-[60px] items-center px-6">
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold"
                prefetch={false}
              >
                <BriefcaseIcon className="h-6 w-6" />
                <span className="">Portfolio CMS</span>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-4 text-sm font-medium">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    prefetch={false}
                  >
                    <item.Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
