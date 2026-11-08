<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import QualitySection from "@/components/quality/QualitySection.vue";
import MissionVisionSection from "@/components/mission/MissionVisionSection.vue";
import AccreditationSection from "@/components/accreditation/AccreditationSection.vue";
import ServicesSection from "@/components/services/ServicesSection.vue";
import QuoteSection from "@/components/quote/QuoteSection.vue";
</script>

<template>
  <AppHeader />
  <main id="contenido">
    <HeroSection />
    <AboutSection />
    <QualitySection />
    <MissionVisionSection />
    <AccreditationSection />
    <ServicesSection />
    <QuoteSection />
  </main>
</template>

<style scoped></style>
