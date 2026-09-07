<script setup>
const checklist = [
  'Анализ и разработка стратегии налогового и бухгалтерского учёта, подходящей именно для вашего бизнеса',
  'Налоговые и бухгалтерские консультации',
  'Подготовка и сдача всей бухгалтерской и налоговой отчётности',
  'Ведение бухгалтерского учёта (полный или частичный)',
  'Обработка первичных документов',
  'Расчёт налогов',
  'Расчёт зарплаты и страховых взносов',
  'Кадровый учёт'
]

const cards = [
  { title: 'Разовые консультации', text: 'Точечная помощь по конкретному вопросу — без долгосрочных обязательств.' },
  { title: 'Открытие и ликвидация', text: 'Сопровождение бизнеса от регистрации ИП/ТОО до закрытия без хвостов и штрафов.' },
  { title: 'Кадровое делопроизводство', text: 'Приказы, трудовые договоры, учёт кадров — в соответствии с трудовым законодательством РК.' }
]
</script>

<template>
  <section id="services" class="section services">
    <div class="container services__grid">
      <div class="services__intro">
        <h2 class="eyebrow-heading">Комплексное сопровождение «под ключ»</h2>
        <p class="services__note">
          Мы гарантируем качественную и своевременную работу — не на словах,
          а подписанием договора.
        </p>
        <a href="#contact" class="btn btn-primary">Диагностика бухгалтерии</a>
      </div>

      <ul class="services__list">
        <li v-for="item in checklist" :key="item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="10" fill="var(--blue)" opacity="0.12" />
            <path d="M6 10.5 8.5 13 14 7.5" stroke="var(--blue)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="container services__cards">
      <article v-for="c in cards" :key="c.title" class="service-card">
        <h3>{{ c.title }}</h3>
        <p>{{ c.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: minmax(240px, 380px) 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.services__note {
  margin-top: 1.25rem;
  opacity: 0.8;
  max-width: 32ch;
}

.services__intro .btn {
  margin-top: 2rem;
}

.services__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem clamp(1.5rem, 3vw, 3rem);
}

.services__list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: var(--fs-body);
}

.services__list svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.services__cards {
  margin-top: clamp(2.5rem, 4vw, 4rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--gap);
}

.service-card {
  padding: 1.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.service-card:hover {
  box-shadow: var(--shadow-card);
  transform: translateY(-2px);
}

.service-card h3 {
  font-size: var(--fs-body);
  font-weight: 500;
  color: var(--ink);
}

.service-card p {
  margin-top: 0.6rem;
  font-size: var(--fs-small);
  opacity: 0.75;
}

@media (max-width: 900px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
  .services__list {
    grid-template-columns: 1fr;
  }
}
</style>
