import SidebarLayout from "@/layout/SidebarLayout";
import UserLayout from "@/layout/UserLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="main">
        <h1>Личный кабинет</h1>
        <SidebarLayout styleAside={{ paddingTop: "0px" }}>
          <UserLayout>{children}</UserLayout>
        </SidebarLayout>
      </div>
    </main>
  );
}
