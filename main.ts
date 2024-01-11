import { doc } from "https://deno.land/x/deno_doc@0.89.1/mod.ts";

async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname !== "/" && request.method !== "GET") {
    return new Response("Not found", { status: 404 });
  }

  const specifier = url.searchParams.get("specifier");
  if (!specifier) {
    return new Response("Missing specifier", { status: 400 });
  }

  const importMap = url.searchParams.get("importMap") ?? undefined;
  const includeAll = url.searchParams.get("includeAll");
  const data = await doc(specifier, {
    importMap,
    includeAll: includeAll !== null ? Boolean(includeAll) : undefined,
  });
  return Response.json(data);
}

if (import.meta.main) {
  Deno.serve(handle);
}
