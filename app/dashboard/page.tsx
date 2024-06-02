import { getServerSession } from "next-auth";
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const Dashboard = async () => {

  const session = await getServerSession() 

  if (!session) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You must be logged in to access this page.</p>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col gap-8 p-4 md:gap-12 md:p-6">
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
              <Button variant="outline" size="sm">
                Add Project
              </Button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Acme Website</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Redesigned the Acme company website.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">May 2023</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Startup Dashboard</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Developed a custom dashboard for a startup.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">April 2023</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">E-commerce Site</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Built an e-commerce website for a client.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                      <span className="text-sm font-medium">Michael Johnson</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">March 2023</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Mobile App</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Developed a mobile app for a client.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                      <span className="text-sm font-medium">Sarah Lee</span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">February 2023</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              <Button variant="outline" size="sm">
                Add Experience
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Front-end Developer</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Acme Inc. | January 2021 - Present</p>
                  <ul className="mt-4 list-disc pl-4 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      Developed and maintained responsive web applications using React, Next.js, and Tailwind CSS.
                    </li>
                    <li>
                      Collaborated with designers and backend developers to deliver high-quality user experiences.
                    </li>
                    <li>
                      Implemented new features and bug fixes, ensuring the codebase remained maintainable and scalable.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Web Developer Intern</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Startup Inc. | June 2020 - December 2020
                  </p>
                  <ul className="mt-4 list-disc pl-4 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      Assisted in the development and maintenance of a web-based application using React and Node.js.
                    </li>
                    <li>
                      Participated in daily stand-ups and collaborated with the team to identify and resolve issues.
                    </li>
                    <li>Gained experience in agile development practices and project management tools.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Education</h2>
              <Button variant="outline" size="sm">
                Add Education
              </Button>
            </div>
            <div className="mt-4 space-y-4">
              <Card>
                <CardContent>
                  <div className="flex items-center" />
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
  );
};

export default Dashboard;





function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}

