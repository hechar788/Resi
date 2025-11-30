# Repository Guidelines
- TypeScript everywhere; favor functional React components with explicit prop interfaces instead of `any`.
- Prettier enforces 2-space indentation, double quotes, and trailing commas; never commit manual formatting.
- PascalCase for components (`AccountCard.tsx`), camelCase for utilities, `use` prefixes for hooks, and schema files should export plural Drizzle tables (`customersTable`).
- Tailwind classes stay inline; extract repeat patterns into `cn` helpers inside `src/lib`.


## Project Structure & Module Organization
- File-based routes live in `src/routes`; each file exports `Route`, and folders map to URLs (`dashboard/index.tsx` → `/dashboard`).
- UI building blocks stay in `src/components`, domain helpers in `src/lib`, hooks in `src/hooks`, and mock/faker data in `src/data`.
- Drizzle schemas reside under `/db`, generated SQL migrations land in `/drizzle`, and client utilities use `src/db` + `src/db.ts`.
- Static assets live in `public/`, while `src/styles.css` and `router.tsx` host global styles plus provider wiring.


## Build, Test, and Development Commands
- `npm run dev` launches the Vite dev server on port 3000 with the Neon proxy plugin.
- `npm run build` bundles production assets; `npm run serve` previews that bundle locally.
- `npm run test` runs Vitest in CI mode; add `--watch` while iterating.
- `npm run lint`, `npm run format`, and `npm run check` enforce ESLint + Prettier (the last command auto-fixes both).
- Database workflows: `npm run db:generate` (emit Drizzle SQL), `npm run db:migrate` (apply locally), `npm run db:push` (sync schema), and `npm run db:studio` (open the Drizzle Studio inspector).


## Framework Usage Expectations
- Adhere to the following framework usage expectations when implementing aspects of the applications

    ## TanStack Query
    - Always use Query for server data fetching, caching, mutations, and background updates. 
    - Use `useQuery`/`useMutation` instead of ad-hoc fetch calls, and colocate query keys and data mappers under the relevant feature folder.

    ## TanStack Form
    - When creating forms, use TanStack Form for validation, submission, and controlled inputs. Prefer schema-backed validation (Zod) and reuse existing field components before introducing custom form logic.

    # TanStack Table
    - For sortable, filterable, or paginated tables, default to TanStack Table. Only hand-roll tables when the feature is too simple to justify the full table model.

    # TanStack Store 
    - Use Store when the state is client-only, cross-component, and not derived from server data. Keep stores small, domain-scoped, and avoid duplicating data already managed by Query.

    # ShadCN/UI
    - Extend or wrap existing primitives rather than creating new components from scratch unless required.
    - Use the **ShadCN/UI MCP server** before building. Use the following tools where applicable:
        - `List/search items`: Look for available ShadCN/UI components that could be used to implement a feature rather than building features from scratch.
        - `View metadata`: Inspect the item’s files, dependencies, and Radix/Tailwind requirements to confirm it fits before adding.
        - `Code demos`: Pull full demos (including variant/example items like spinner styles) before using installed components to understand implementation patterns and compare variations.
        - `Installing`: Grab the exact `npx shadcn@latest add <item>` and scaffold missing primitives from the repo root so Radix dependencies and files stay in sync.
        - `Post-add audit checklist`: After adding a component, run the MCP audit to ensure files landed, deps are installed, and required config/hooks (e.g., Tailwind, `cn`) are wired correctly.


## Server Function Guidelines
- Server functions should stay small, stateless, and validate all inputs at the boundary using Zod.
- Only server functions should talk to Drizzle/Neon; never call Drizzle directly from the client.
- Return clean, mapped DTOs rather than leaking raw DB rows to the client.
- Keep server functions colocated with their feature, not at top-level /server.
- Organise server functions using a domain-first folder structure. Use `src/server/<domain>/<subdomain>/<name>.ts` to keep related logic together and predictable (`src/server/  orders/items/addItem.ts`, `src/server/orders/items/removeItem.ts`).
- Do not colocate server functions inside routes or components unless the logic is truly one-off and will never be reused. Anything representing real domain behaviour (orders, merchants, customers, menus, onboarding, auth) belongs under `src/server/<domain>/`.
- Keep folders shallow and descriptive. Start with `src/server/<domain>/<action>.ts`, and introduce subfolders only when the domain grows (`orders/items/`, `merchant/profile/`, etc.).
- This structure ensures loaders, actions, and React Query hooks all call a single source of truth for domain logic.


## Routing Conventions
- Keep loader logic thin: fetch or assemble data, validate params, and return mapped DTOs.
- Move heavy logic into domain functions under src/features/<domain>/api.
- Keep actions side-effect focused (mutations, writes) and ensure all mutations validate inputs before DB access.
- Prefer small loaders per route instead of giant multi-purpose loaders.


## Documentation & JSDoc Standards
- All exported functions, classes, hooks, and server utilities must include a short JSDoc block describing what the function does and any important side-effects or constraints.
- Document all parameters and return values with @param and @returns tags, and annotate error cases when relevant (@throws).
- For complex functions or classes, include an @example block demonstrating typical usage; omit it when the function or method is simple.
- Keep descriptions concise and action-focused (one–three sentences). Avoid restating the function name; explain intent, inputs, and expected behavior.
- For server functions, document validation expectations, required permissions, and whether the call mutates persistent data.
- Update JSDoc whenever function signatures change—out-of-date comments are worse than none.
- Prefer documenting behavior rather than implementation details; internal logic can change, but the contract should remain clear.


## Testing Guidelines
- Vitest with `@testing-library/react` mirrors component behavior; co-locate tests as `ComponentName.test.tsx`, and mock requests via `vi.mock` while reusing `src/data` builders.
- Routes that load data must include loader and error tests. Loaders are unit-tested by mocking the repository/DB layer and using deterministic builders so tests never depend on live or changing database state.
- Add coverage for new hooks/components before opening a PR.
- Follow a “tests next to source” structure: for any module (`src/features/foo/bar.ts`), add specs under a sibling `__tests__` folder (e.g., `src/features/foo/__tests__/bar.test.ts`). This keeps unit tests close to the code they verify and ensures Vitest’s `src/**/__tests__` glob discovers them automatically.
- Prefer lightweight unit tests for domain helpers and hooks, RTL-based DOM tests for components, and only resort to integration tests when exercising router loaders/actions or cross-layer flows.
- Use deterministic faker data from `src/data` builders when mocking API responses, and keep a clear Arrange/Act/Assert structure with descriptive `describe/it` names so scenarios read like documentation.
- Don’t test library internals (e.g. React Query’s cache); focus on observable behavior: returned data, rendered DOM, and side effects.


## Commit & Pull Request Guidelines
- Follow the existing short, imperative history (`Update auth header`, `Add customer table`); keep subjects under 60 characters.
- Scope commits narrowly (UI copy, schema change, etc.) and include migration files whenever schemas move.
- Describe motivation + approach, list impacted routes/components.
- **DONT** take credit for any commits/pull requests


## Security & Configuration Tips
- Copy `.env.example` to `.env.local`, populate `VITE_CLERK_PUBLISHABLE_KEY`, `DATABASE_URL`, and Neon credentials, and never commit secrets.
- Neon claimable DBs expire after 72 hours, so rerun `npm run db:generate` + `npm run db:migrate` after provisioning a new instance.
- Rotate Clerk and Neon keys before sharing preview deployments.
