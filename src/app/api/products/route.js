export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=50", {
    cache: "no-store",
  });

  const data = await res.json();
  return Response.json({ data });
}
