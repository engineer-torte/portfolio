<template>
  <main class="min-h-screen bg-white text-gray-800 px-4 py-12">
    <!-- Hero / Introduction -->
    <section class="text-center pt-24 py-16 odd:bg-emerald-100 border-t border-indigo-300">
      <UContainer class="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 class="text-4xl font-semibold tracking-tight mb-4">
          kubortfolio: 労力を減らし、可能性を広げる
        </h1>
        <p class="text-lg max-w-2xl mx-auto text-gray-600 mb-6">
          手間を省き、時間を生む。それが自動化の力。
        </p>
        <div class="flex justify-center gap-4 mt-16">
          <UButton
            v-for="section in sections"
            :key="section.id"
            :to="`#${section.id}`"
            size="lg"
            color="primary"
            variant="solid"
            class="rounded-full px-6"
          >
            {{ section.label }}
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- About -->
    <section
      id="about"
      class="odd:bg-emerald-100 py-16 border-t border-indigo-300"
    >
      <UContainer>
        <h2 class="text-3xl font-bold mb-2 text-center">
          {{ profile.name }}
        </h2>
        <p class="text-emerald-600 text-lg mb-6 text-center">
          “自動化で、誰かの「余裕」をつくる人。”
        </p>

        <div class="text-gray-700 text-left max-w-2xl mx-auto space-y-4">
          <p>こんにちは、Webエンジニアやってます。</p>
          <p>日々の業務では、PHP（Laravel）やPythonを使った開発を中心に、効率的で無駄のない仕組みづくりに取り組んでいます。</p>
          <p>特に、自動デプロイを含むGitLab CI/CDや、DevContainerによる環境構築の自動化といった“手間を減らす工夫”には自然と目が向きがちです。</p>
          <p>「どうせやるなら、ラクに、きれいに」──そんな気持ちが、日々の開発スタイルを形づくってくれました。</p>
          <p>コードの整理や共通化にも関心があり、「関数にひとつの責任を持たせる」ような意識でリファクタリングにも取り組んでいます。</p>
          <p>自分の書いたコードが誰かの助けになったとき、喜ばれたとき、「ああ、やっててよかったな」と実感します。</p>
          <p>最近はChatGPTやMicrosoft Copilotをオトモに調査しています。</p>
          <p>趣味はゲーム。原神やスターレイル、ゼンレスゾーンゼロ、雀魂、NIKKEなど、心惹かれる作品にじっくりのめり込むタイプです。</p>
          <p>中でも「自分が本当に好きだと思えるキャラクターを選ぶ」「そのキャラに合った立ち回りを探す」といった姿勢は、実は仕事にも通じているのかもしれません。</p>
          <p>柔軟に役割を変えながらも、自分らしさは大切に。そんなスタイルで、これからもコードと向き合っていきます。</p>
        </div>
        <div class="flex justify-center gap-4">
          <a
            href="https://github.com/engineer-torte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="lg"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-primary hover:text-white transition-colors"
          >
            <UIcon name="i-logos-github-icon" />
          </a>
          <a
            href="https://qiita.com/engineer-torte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qiita"
            size="lg"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-primary hover:text-white transition-colors"
          >
            <UIcon name="i-simple-icons-qiita" />
          </a>
          <a
            href="https://discord.gg/j2HguXkq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            size="lg"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-primary hover:text-white transition-colors"
          >
            <UIcon name="i-logos-discord-icon" />
          </a>
        </div>
      </UContainer>
    </section>

    <!-- Skils -->
    <section
      id="skills"
      class="odd:bg-emerald-100 py-16 border-t border-indigo-300"
    >
      <h2 class="text-2xl font-semibold text-center">
        スキル
      </h2>
      <p class="text-gray-600 text-center mt-2 mb-8">
        スキルバッジに触れてみてください！補足がポップアップします！
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <SkillBadge
          v-for="(skill, index) in skills"
          :key="index"
          :name="skill.name"
          :icon="skill.icon"
          :variant="skill.variant"
          :description="skill.description"
        />
      </div>
    </section>

    <!-- 個人制作物のコンテンツ -->
    <section
      id="personal-projects"
      class="odd:bg-emerald-100 py-16 border-t border-indigo-300"
    >
      <h2 class="text-2xl font-semibold text-center mb-8">
        個人制作物
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-6">
        <WorkCard
          v-for="(project, index) in projects"
          :key="index"
          :item="project"
        />
      </div>
    </section>

    <!-- 業務経験のコンテンツ -->
    <section
      id="work-experience"
      class="odd:bg-emerald-100 py-16 border-t border-indigo-300"
    >
      <h2 class="text-2xl font-semibold text-center mb-8">
        業務経験
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-6">
        <WorkCard
          v-for="(work, index) in works"
          :key="index"
          :item="work"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import profile from '@/assets/data/profile.json';
import sections from '@/assets/data/sections.json';
import skills from '@/assets/data/skills.json';
import projects from '@/assets/data/personal-projects.json';
import works from '@/assets/data/work-experience.json';
</script>
