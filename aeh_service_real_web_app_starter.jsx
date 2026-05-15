export default function AEHServiceApp() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-700/40 bg-zinc-900 text-lg font-black text-yellow-500 shadow-lg shadow-yellow-900/20">
              AEH
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">AEH Service</h1>
              <p className="text-xs text-zinc-400">
                CRM · Agenda · Finanzas
              </p>
            </div>
          </div>

          <div className="rounded-full border border-yellow-700/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-500">
            Nivel 0
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4 pb-32">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Ingresos" value="€0" />
          <StatCard title="Clientes" value="0" />
          <StatCard title="Servicios" value="0" />
          <StatCard title="Reseñas" value="0" />
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Calendario</h2>
                <p className="text-sm text-zinc-400">
                  Agenda de servicios
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 transition hover:border-yellow-600/30 hover:text-yellow-500">
                  ←
                </button>

                <button className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 transition hover:border-yellow-600/30 hover:text-yellow-500">
                  →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs text-zinc-500">
              <div>L</div>
              <div>M</div>
              <div>X</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
              <div>D</div>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className="min-h-[90px] rounded-2xl border border-white/5 bg-white/[0.02] p-2 transition hover:border-yellow-600/30 hover:bg-yellow-500/[0.03]"
                >
                  <div className="text-sm font-semibold text-zinc-300">
                    {i + 1 <= 31 ? i + 1 : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Agenda</h2>
                  <p className="text-sm text-zinc-400">
                    Horarios del día
                  </p>
                </div>

                <button className="rounded-2xl bg-yellow-600 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500">
                  Nueva cita
                </button>
              </div>

              <div className="space-y-3">
                {[
                  "08:00",
                  "09:00",
                  "10:00",
                  "11:00",
                  "12:00",
                  "13:00",
                  "16:00",
                  "17:00",
                  "18:00",
                ].map((hour) => (
                  <div
                    key={hour}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/30 p-3"
                  >
                    <div className="w-16 text-sm font-semibold text-yellow-500">
                      {hour}
                    </div>

                    <div className="flex-1 rounded-xl border border-dashed border-white/10 p-3 text-sm text-zinc-500">
                      Hueco libre
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h2 className="mb-4 text-xl font-bold">Objetivos</h2>

              <div className="space-y-4">
                <ProgressItem title="Ingresos mensuales" />
                <ProgressItem title="Clientes activos" />
                <ProgressItem title="Servicios completados" />
                <ProgressItem title="Reseñas" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Clientes</h2>
                <p className="text-sm text-zinc-400">
                  Base de datos de clientes
                </p>
              </div>

              <button className="rounded-2xl bg-yellow-600 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500">
                Añadir
              </button>
            </div>

            <input
              placeholder="Buscar cliente..."
              className="mb-4 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-yellow-600/40"
            />

            <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-zinc-500">
              No hay clientes todavía
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Finanzas</h2>
                <p className="text-sm text-zinc-400">
                  Control económico
                </p>
              </div>

              <button className="rounded-2xl bg-yellow-600 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500">
                Registrar
              </button>
            </div>

            <div className="space-y-4">
              <FinanceRow title="Ingresos" value="€0" positive />
              <FinanceRow title="Gastos" value="€0" />
              <FinanceRow title="Beneficio neto" value="€0" gold />
              <FinanceRow title="Ticket medio" value="€0" />
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-12 text-center text-sm text-zinc-500">
              Aún no hay movimientos registrados
            </div>
          </div>
        </section>
      </main>

      <button className="fixed bottom-24 right-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-600 text-3xl font-light text-black shadow-2xl shadow-yellow-700/20 transition hover:scale-105 hover:bg-yellow-500">
        +
      </button>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-3xl items-center justify-around py-3">
          <NavItem icon="📊" label="Panel" active />
          <NavItem icon="📅" label="Agenda" />
          <NavItem icon="👥" label="Clientes" />
          <NavItem icon="💶" label="Finanzas" />
          <NavItem icon="⚙" label="Más" />
        </div>
      </nav>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-yellow-600/20 hover:bg-yellow-500/[0.03]">
      <div className="mb-2 text-sm text-zinc-400">{title}</div>
      <div className="text-4xl font-black tracking-tight">{value}</div>
    </div>
  );
}

function ProgressItem({ title }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-zinc-300">{title}</span>
        <span className="text-zinc-500">0%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-black/50">
        <div className="h-full w-0 rounded-full bg-yellow-500" />
      </div>
    </div>
  );
}

function FinanceRow({ title, value, positive, gold }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 p-4">
      <span className="text-zinc-300">{title}</span>
      <span
        className={`font-bold ${
          positive
            ? 'text-green-400'
            : gold
            ? 'text-yellow-500'
            : 'text-zinc-100'
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 text-xs transition ${
        active ? 'text-yellow-500' : 'text-zinc-500 hover:text-zinc-300'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
