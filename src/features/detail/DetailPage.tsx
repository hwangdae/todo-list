import { getTodo } from "./api/detailApi";

import DetailEditor from "./containers/DetailEditor";

const DetailPage = async ({ id }: { id: number }) => {
  const todo = await getTodo(id);
  return <DetailEditor todo={todo} />;
};

export default DetailPage;
