<template>
  <div>
    <!-- <TheHead/> -->
    <Welcome />
    <Knowledge/>
    <Projects/>
    <WorkExperience />
    <!-- <CTA/> -->
    <Contact class="mt-10 mb-10"/>
    <Freelancer/>
  </div>
</template>

<script>
import TheHead from '@/components/Header'
import Welcome from '@/components/Index/Welcome'
import Knowledge from '~/components/Index/Knowledge';
import Projects from '~/components/Index/Projects';
import WorkExperience from '~/components/Index/WorkExperience';
import CTA from '~/components/Index/CTA';
import Contact from '~/components/Index/Contact';
import Freelancer from '~/components/Index/Freelancer';
export default ({
  components:{
    TheHead,
    Welcome,
    Knowledge,
    Projects,
    WorkExperience,
    CTA,
    Contact,
    Freelancer
  }
})
</script>
