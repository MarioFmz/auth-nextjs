import { AdminLayout } from "../../components/layouts";

export default function AdminPage() {
  return (
    <>
      <AdminLayout title="Admin Page" pageDescription="La pagina de control">
        <h1>This page is protected by Middleware</h1>
        <p>Only admin users can see this page.</p>
        <p>
          To learn more about the NextAuth middleware see&nbsp;
          <a href="https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs#middleware">
            the docs
          </a>
          .
        </p>
      </AdminLayout>
    </>
  );
}
