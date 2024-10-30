import SideImageLayout from "@/components/layout/SideImageLayout"
 
export default function Page() {
  return (
    <p>Login Page</p>
  )
}
 
Page.getLayout = function getLayout(page: any) {
  return (
      <SideImageLayout>{page}</SideImageLayout>
  )
}