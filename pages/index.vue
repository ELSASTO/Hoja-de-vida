<template>
  <div>
    <TheHead/>
    <Welcome />
    <Certificates/>
    <Knowledge id="Knowledge"/>
    <Projects id="Projects"/>
    <WorkExperience id="WorkExperience"/>
    <!-- <CTA/> -->
    <Contact class="mt-10 mb-10" id="Contact"/>
    <Freelancer id="Freelancer"/>
    <TheFooter/>
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
import Certificates from '~/components/Index/Certificates.vue';
import TheFooter from '~/components/TheFooter.vue';
export default ({
  components:{
    TheHead,
    Welcome,
    Knowledge,
    Projects,
    WorkExperience,
    CTA,
    Contact,
    Certificates,
    Freelancer,
    TheFooter
  }
})
</script>
