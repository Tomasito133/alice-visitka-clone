const stats = [
  {
    label: "на дизайн лендинга",
    value: "7–14 дней",
  },
  {
    label: "итерации правок включены",
    value: "2 раунда",
  },
  {
    label: "адаптация",
    value: "Mobile‑first",
  },
  {
    label: "готово к передаче",
    value: "Figma‑ready",
  },
];

const benefits = [
  {
    title: "Сильный визуал + ясная логика",
    description:
      "Каждый экран решает конкретную задачу: донести ценность, снять возражения и подтолкнуть к следующему шагу.",
  },
  {
    title: "Premium‑first эстетика",
    description:
      "Чистая типографика, глубина слоёв, аккуратные градиенты и неоновые акценты вместо шаблонной сетки.",
  },
  {
    title: "Дизайн под конверсию",
    description:
      "Один главный CTA в фокусе, последовательные сценарии, конкретные офферы и понятная структура блоков.",
  },
  {
    title: "Mobile‑first подход",
    description:
      "Сначала удобство на телефоне: иерархия, крупные зоны нажатия, читаемые тексты и быстрые загрузки.",
  },
];

const scenarios = [
  {
    tag: "SaaS и сервисы",
    title: "Сложный продукт — простое объяснение",
    description:
      "Упаковка онбординга, тарифов и ключевых сценариев так, чтобы продукт становился понятным за один скролл.",
  },
  {
    tag: "Лендинги и промо",
    title: "Hero, который продаёт, а не просто «красиво»",
    description:
      "Сильный первый экран, социальные доказательства и сценарий, который ведёт к заявке без лишнего шума.",
  },
  {
    tag: "Портфолио и личный бренд",
    title: "Визуальный личный бренд под премиум‑аудиторию",
    description:
      "Стильная подача экспертизы, которой доверяют сильные клиенты и партнёры с первого контакта.",
  },
];

const pricing = [
  {
    label: "Быстрый старт",
    title: "Дизайн лендинга",
    price: "45 000 – 90 000 ₽",
    time: "7–14 рабочих дней",
    features: [
      "Бриф и структура экранов",
      "Desktop + mobile дизайн в Figma",
      "До 2 раундов правок",
    ],
    highlight: false,
  },
  {
    label: "Популярно",
    title: "Многостраничный сайт",
    price: "85 000 – 220 000 ₽",
    time: "14–30 рабочих дней",
    features: [
      "Карта страниц и UI‑концепт",
      "Ключевые шаблоны и адаптация",
      "Система компонентов и стилей",
    ],
    highlight: true,
  },
  {
    label: "Point solution",
    title: "Digital‑art / иллюстрации",
    price: "6 000 – 25 000 ₽",
    time: "2–7 рабочих дней",
    features: [
      "Скетч и арт‑дирекшн",
      "Финал в высоком качестве",
      "1–2 раунда правок по цвету/композиции",
    ],
    highlight: false,
  },
];

const faq = [
  {
    question: "Как запустить проект?",
    answer:
      "Напишите короткое сообщение в Telegram: ниша, цель, сроки и примерные ожидания по объёму. В ответ получите план этапов и диапазон стоимости.",
  },
  {
    question: "Можно ли уложиться в жёсткий дедлайн?",
    answer:
      "Да, если на выбранные даты есть свободный слот. Для срочных задач возможен отдельный коэффициент по срокам.",
  },
  {
    question: "Что вы получаете на выходе?",
    answer:
      "Готовые макеты в Figma, систематизированные стили и отступы, UI‑компоненты и рекомендации по передаче в разработку.",
  },
  {
    question: "Помогаете ли с внедрением дизайна?",
    answer:
      "Да, по договорённости могу сопровождать внедрение: ревью вёрстки, уточнение состояний и адаптаций.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#34115c,_#050312_55%,_#02010a_80%)] text-slate-100">
      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-24 top-64 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 text-xs font-semibold tracking-[0.18em]">
              AP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.18em] text-slate-200">
                ALICE
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                UI dark themes · digital art
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.24em] text-slate-400 md:flex">
            <a href="#benefits" className="hover:text-slate-100">
              Преимущества
            </a>
            <a href="#social-proof" className="hover:text-slate-100">
              Доверие
            </a>
            <a href="#pricing" className="hover:text-slate-100">
              Стоимость
            </a>
            <a href="#faq" className="hover:text-slate-100">
              FAQ
            </a>
          </nav>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-fuchsia-400/60 bg-fuchsia-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-100 shadow-[0_0_30px_rgba(244,114,182,0.4)] transition hover:border-fuchsia-300 hover:bg-fuchsia-500/20 md:inline-flex"
          >
            Обсудить в Telegram
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="border-b border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:py-24">
            <div className="flex-1 space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-200 backdrop-blur">
                Открыта к новым проектам
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
              </p>
              <div className="space-y-4">
                <h1 className="max-w-xl text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
                  Дизайн, который выглядит как art
                  <br />
                  и продаёт как продукт
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  Создаю премиальные тёмные интерфейсы и digital‑иллюстрации для
                  продуктов, которым важно выделяться, вызывать доверие и
                  превращать внимание в заявки.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_14px_45px_rgba(15,23,42,0.65)] transition hover:brightness-110"
                >
                  Обсудить проект в Telegram
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:bg-white/10"
                >
                  Смотреть пакеты услуг
                </a>
              </div>
              <dl className="grid gap-4 text-xs text-slate-300 sm:grid-cols-2 md:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-100">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-0.5 rounded-[32px] bg-gradient-to-br from-fuchsia-500/70 via-purple-500/60 to-cyan-400/70 opacity-70 blur-xl" />
                <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-950/70 via-slate-950/90 to-slate-950/95 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.9)]">
                  <div className="flex items-center justify-between pb-6">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Алиса Панькина
                      </p>
                      <p className="text-xs text-slate-300">
                        Digital‑художница · UI‑дизайнер
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[11px] font-semibold tracking-[0.18em] text-slate-950">
                      AP
                    </div>
                  </div>
                  <div className="space-y-4 border-y border-white/5 py-5 text-sm text-slate-200">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      visual style
                    </p>
                    <p className="text-base font-medium text-slate-50">
                      Luxury Neon · UI dark themes · visual storytelling
                    </p>
                    <p className="text-xs leading-relaxed text-slate-300">
                      Баланс между цифровым артом и понятной продуктовой
                      логикой. Интерфейсы, которые запоминаются и помогают
                      командам запускаться без десятка итераций.
                    </p>
                  </div>
                  <div className="pt-5 text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    Работает удалённо · Новосибирск, Россия
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          className="border-b border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                Преимущества
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Сильный визуал с понятной продуктовой логикой
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Делаем так, чтобы каждый экран работал: быстрее объяснял ценность,
                снимал трение и подвигал к действию — без визуального шума и
                потери стиля.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)] transition hover:border-fuchsia-400/40 hover:bg-white/[0.06]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen blur-2xl transition group-hover:opacity-100">
                    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.28),_transparent_55%)]" />
                  </div>
                  <div className="relative space-y-2">
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Process */}
        <section
          id="social-proof"
          className="border-b border-white/5 bg-black/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-start">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                  Почему со мной работают
                </p>
                <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                  Прозрачный процесс и результат, который можно передать в
                  разработку без хаоса
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Вместо разрозненных макетов — структура, визуальная система и
                  чёткие файлы: от первого концепта до UI‑компонентов и поддержки
                  внедрения.
                </p>

                <dl className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                  <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Этапы
                    </dt>
                    <dd>Бриф → сценарии → UI‑концепт → система компонентов</dd>
                  </div>
                  <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Формат
                    </dt>
                    <dd>Асинхронная работа, понятные чек‑поинты и дедлайны</dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Social proof
                </p>
                <div className="space-y-5">
                  <figure className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <blockquote className="text-sm text-slate-100">
                      «После редизайна презентация продукта стала внятной: клиенты
                      начали быстрее понимать ценность уже на первом экране».
                    </blockquote>
                    <figcaption className="text-xs text-slate-400">
                      СЕО SaaS‑сервиса
                    </figcaption>
                  </figure>
                  <figure className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <blockquote className="text-sm text-slate-100">
                      «Сильная визуальная система и чёткая структура помогли
                      команде запуститься в срок без лишних итераций и созвонов».
                    </blockquote>
                    <figcaption className="text-xs text-slate-400">
                      Product Manager B2B‑платформы
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="border-b border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                  Сценарии
                </p>
                <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                  Где такой дизайн даёт максимальный эффект
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Фокус на продуктах, где важна и визуальная дифференциация, и
                  понятный путь пользователя к целевому действию.
                </p>
              </div>
              <p className="max-w-xs text-xs text-slate-400">
                Если ваш сценарий ближе к кастомному кейсу — обсудим на созвоне и
                подберём формат.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {scenarios.map((item) => (
                <article
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm shadow-[0_16px_50px_rgba(15,23,42,0.9)] transition hover:border-cyan-300/50 hover:bg-white/[0.06]"
                >
                  <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-300">
                      {item.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="border-b border-white/5 bg-gradient-to-b from-black/40 via-black/20 to-transparent"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                Pricing
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Пакеты услуг и стартовые диапазоны
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Финальная стоимость зависит от объёма, сроков и глубины
                проработки. После брифа фиксируем конкретный состав работ и
                дедлайны.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.title}
                  className={`flex h-full flex-col justify-between rounded-3xl border bg-white/[0.04] p-5 text-sm shadow-[0_20px_70px_rgba(15,23,42,0.9)] ${
                    plan.highlight
                      ? "border-fuchsia-400/70 ring-2 ring-fuchsia-500/40"
                      : "border-white/12"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {plan.label}
                      </span>
                      {plan.highlight && (
                        <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-fuchsia-100">
                          Популярно
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-slate-50">
                      {plan.title}
                    </h3>
                    <p className="text-lg font-semibold text-slate-50">
                      {plan.price}
                    </p>
                    <p className="text-xs text-slate-300">{plan.time}</p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-200">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition ${
                        plan.highlight
                          ? "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-slate-950 hover:brightness-110"
                          : "border border-white/20 bg-white/5 text-slate-100 hover:bg-white/10"
                      }`}
                    >
                      Обсудить формат
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-white/5 bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                FAQ
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Частые вопросы перед стартом
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Если в списке нет вашего вопроса — напишите его в письме или
                первом сообщении в Telegram.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm shadow-[0_10px_40px_rgba(15,23,42,0.85)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm text-slate-100">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-lg text-slate-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-white/5 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-black">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-fuchsia-300">
                Готовы к запоминающемуся интерфейсу?
              </p>
              <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
                Напишите 3–4 строки о проекте: ниша, цель, сроки и желаемый
                формат.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                В ответ получите понятный план этапов, предложение по
                сотрудничеству и ориентировочные сроки старта.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_16px_60px_rgba(15,23,42,0.9)] transition hover:brightness-110"
                >
                  Написать в Telegram
                </a>
                <span className="text-xs text-slate-400">
                  Удалённо · проектно · ответ в рабочее время
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span>© Алиса Панькина · Digital artist · UI designer</span>
          <span>Premium dark visuals · конверсионные лендинги</span>
        </div>
      </footer>
    </div>
  );
}
