<script setup>
import illustration from '../assets/img/illustration-contract.svg'
</script>

<template>
  <section class="section contract">
    <div class="container contract__grid">
      <div class="contract__copy">
        <h2 class="eyebrow-heading">Все условия сотрудничества пропишутся в договоре</h2>
        <p>
          Мы понимаем, что на словах можно говорить всё, что угодно, поэтому
          подкрепляем наше слово договором, где пропишем всю зону
          ответственности.
        </p>
      </div>
      <img class="contract__illustration" :src="illustration" alt="" role="presentation" width="546" height="364" loading="lazy" />
    </div>
  </section>
</template>

<style scoped>
.contract {
  background: var(--tint);
  border-radius: var(--radius);
}

.contract__grid {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
}

.contract__copy p {
  margin-top: 1.25rem;
  max-width: 48ch;
  opacity: 0.8;
}

.contract__illustration {
  width: clamp(220px, 30vw, 420px);
  height: auto;
  justify-self: center;
}

@media (max-width: 900px) {
  .contract__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .contract__copy p {
    margin-inline: auto;
  }
}
</style>
