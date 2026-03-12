import DetailPage from "@/src/features/detail/DetailPage";

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return <DetailPage id={id} />;
}
