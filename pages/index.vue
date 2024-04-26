<template>
  <div>
    <Welcome />
    <Knowledge/>
    <Projects/>
    <WorkExperience />
    <!-- <CTA/> -->
    <Contact class="mt-10"/>
  </div>
</template>

<script>
import Welcome from '@/components/Index/Welcome'
import Knowledge from '~/components/Index/Knowledge';
import Projects from '~/components/Index/Projects';
import WorkExperience from '~/components/Index/WorkExperience';
import CTA from '~/components/Index/CTA';
import Contact from '~/components/Index/Contact';
export default ({
  components:{
    Welcome,
    Knowledge,
    Projects,
    WorkExperience,
    CTA,
    Contact
  }
})
</script>
