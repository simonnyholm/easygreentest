export default async function Page({ params }: { params: { userid: string } }) {
  const paramId = params.userid;
  const res = await fetch(" https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  console.log("buller");

  return (
    <div>
      {params.userid}
      <p>Test if deployed</p>
    </div>
  );
}
