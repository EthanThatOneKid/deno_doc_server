# deno_doc_server

A simple API wrapping https://deno.land/x/deno_doc 🦕

## Example

```ts
const data = await fetch(
  "http://deno-doc-server.deno.dev/?specifier=https://deno.land/x/deno_doc/mod.ts",
).then((res) => res.json());
```

---

Developed with [🦕](https://deno.land/) by
[**@EthanThatOneKid**](https://etok.codes/)
