<template>
  <div>
    <page-header title="Projects"></page-header>
    <v-layout class="cardLayout" row wrap>
      <my-card v-for="project of projects" v-bind:key="project.title" :title="project.title" :tags="project.tags" :description="project.description" :img="project.image"></my-card>
    </v-layout>
  </div>
</template>

<script>
import pageHeader from "~/components/pageHeader.vue"
// import myChips from "~/components/myChips.vue"
import myCard from "~/components/myCard.vue"

export default {
  components: {
    pageHeader,
    // myChips,
    myCard
  },
  data: function () {
    return {
      projects: [
        {
          title: 'Erin Tallard Fitness',
          tags: ['UI/UX', 'Vue.js'],
          description: 'The platform utilized by Erin Tallard Fitness to help and advocate for individuals to strive for practical and sustainable fit lifestyles.',
          image: "https://lh3.googleusercontent.com/eJNoyRUnYSgunEqsH21nnMNGm0V_a9EUxToiRI7_icd0TXdRBMUkLjJsx5guFAHQDot_kERBqO5FERWile5EpIO_yeDDY3SAH9OW4EQ8zM_7n6J48U8-3Sq-asTtTUjF6C6yH99Gy6Qsg-KHZ4G2QPqtxmfnceoXvmIwt9SQQU7I1QeGqOyscc4--7soUYuIB5VfsSQkrxo1-OA0XiO-JkDM6y-f_v5B7NS3TLxezBMnEekxo-IMVZzsWe_hYfZO2ZOAAsWv5XMMUXM3jJd3LVb43cZYVVH13ndL2uM5KT8tuJAeCYRtOUmg0VpqFqQ-oSOogobWkMN2CguW0MEPWVdD7iECjt2INQoyfQqco_HZL3NUFQQGS2VuCF66QwbePX_ynToc7I0cyhW4JY4Yv8pnudLBPqZKao1-Xf2BNgcU-UxSbnuenY_8DZ4ID16N1scrbgix-p3twvCtDtwM1D2C9L0dqrE6t3uTUVG4nszzLpmnkbbv_Ih90sS20YOuvE2kYYPKtMzlXWAzgMxVDK1CTzIu2T8LTh1qtitnmVyoPUMAfzzrUniJMaSgv6WSk9sAMdRiOVn0H2tR1N3z2HBg1lhCD5QMeOvM0DdhI7DaRX1zDxIgyV1Ls37XKvLI5Yr4kYO89bcEVCLtm4IYAXUi1TohiVeo4dTePJhE1vePA8tf6fsTmfU=w1920-h1080-no"
        },
        {
          title: 'Personal Site - V2',
          tags: ['UI/UX', 'Vue.js'],
          description: 'A webpage utlized to develop my personal brand, share my experiences, and showcase my work.',
          image: "https://lh3.googleusercontent.com/adaqEKpaTW5aVL4o6DFDYH53ptI9m4swTeLwm7eXdMqSEZjyoBTcZjHdTM0nJHSdJpm588tiSsxCNusRe5TiVku_Mb6oLUxRxhGGV1MBKErGXNf8j6HJlHZnoKEpFGUMSBIaAMYB5_3BEhjU2sJBQKKwV6dafeVkqyaPe79Mz12b1Y2tAGrLWORHUSQ9NjaO7gwVbBDeB9loa_WycM9XsgJ1syIYUuKbvLhRp0vgfQ2kiZV6qQsf5WbL3LRgZKXH_wgA-iwpT-_WrWEYudwA09vrQ322pSS_jrZgNJU0LaRnF6bDTyAbWWsVq-Dymb92w2GymAl5IIQADEOlfOUskY3nEZT4OObzp3bpenbICqnENiXLH5Jx-ZYEu2ZZxsl0IauCnW1NPnZsBlKbpBrc-HaIslv27aEb70TqI-75uTSflsAK9Lxjps9eVk4puhTE-rO_UT_0PPppfo2FEBuytP-MH_2U1MzD08InEkKisHrahDx6fCzxYySj1oqgLg5CmJQoarAlbW4WMTXAvKQQAavJvRLWDKnTeKQ1PpiaDvAqcrwXKgivw1Ralz1lRdPZy8nVzqZGM7PtUjMlQ4-Bm8FZTU-OGo2yKnVuqCuscCD7U-Xi8oWmSnk2fTEPsOmNar8EFzrCCrP2IhoF3gdCeH5c1ke3UY3rYvVZk3ECubQV3kObB_qBEw=w1920-h1080-no"
        },
        {
          title: 'Kohls Shark Tank',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'Amazon Alexa skill to advocate for the usage and potential of voice assistants along with voice user interfaces in retail.',
          image: "https://lh3.googleusercontent.com/uam79aApA9pB6pLQ6jdwhYAf__l-vKH0vMhkdTl1Zu57-kLoQv4bdn2nIDoZvwCJeffiuwYoAqS2eDsQRFAsS9jJNEp0LK_TIODIBHajf0quVhErnYnKyxcSfMzlLmXl9YwoQfCFZffo9Dq5JD1T2dz2kbshCrWDTVmYKL5j8nvjfV59x-DSmPkZ8psQL8gvGyEzjXjtbeZT4_-YloLHRJkDGcD4v7ZS4vfT1r_aTVh_g206FGE8MlUCVhPyiK0KQZ7OIllsgTnF4KeR-fPyKI2Gcz8iNlS1kmZDa6RHuvEbLI4Bz0yYIOhFIrcLtyXoVYg9KWHVylHcorE2S1T0ECBwID7XH9U2qdqnYWSs6pg--3CmBgvdlkKfQJyfPIKF3XVoc285akhB3yWt__PpFzTQnkL3ONr6ycZ20oY6SzLsM2RpYMW7rvhgl8LQhCe0Wm_zzIU3U4gzCIrgPZ--c5SfwAzw3kzmLKLyOpDwKg06vfob18GzSwVoSX6nIa01kmmzD-29MyR_ftz0OuPg9an4ZdzbyUF9AaijGrj4sp2UTcre1BoLOpnpdh422dnWBjjUd2cseZVALGS9HUAbraZVrnj4vYt4roPXLFVKHZFm78qGntuLN6xXhK-UyIwXF9vOSbvqN3O5pnfg3qJfW8VKtFa80WNoTWBjUqcodUKUfJHaCd9exg=w1920-h1080-no"
        },
        {
          title: 'Kohls Starlight',
          tags: ['HTML/CSS/JS', 'UI/UX'],
          description: 'A Google Cloud Platform budget monitoring web application.',
          image: "https://lh3.googleusercontent.com/7sUpMwb7CTBg9apEIwGUiKuwk55qsaHDCYBqN9hVooU42FmADrssX0j3XmEHOdKPrGlAoeFeIYqMN8ldhe8dsow456ZQ6NN0N9qNg8GhuaiZ6XNysECkKpp1yySKfydApC2kRAqtYM28eMBKUnkZxsoNQAcyrS216je-akqNmEOeIBgnbGs-SQQiHEzURjwuw-Ighim9oXesEUYflf-dT59V7R638G30d3E-MjytwWg1BCq66QNyP00O4a1uNzOeC5DuHiZKpm9GkJ5DqmZwbI4dk8ktW2hz98ehy2IsueEWYYdXbLbnDtpB-iC87QWNXcNOn9jxOMKMyPkNdlPxL-Vb8P9IKbofzGZ8Ql4hj2JvFa4LZYimMpoXltTKhVgpXDa9FUUJedK164IryCC1-0ElRLSjdzwplUuhnmie2BKMjATYVpcCuvwCCXn8Dwe4yF5iUr9h6LoOK79nj49gVguqTiIxHlrO1cG35LVfJh-DBu3wi2NB6Rdy5ilGny-077voBR0wPlmLoQf9e42cOCDtX6nbYnwyZMAHHmYI5ioWRwEGF3RU4x704KVDNUnbOTdihd_vTegRZwomBevyrbzXHp-vr0XO5B4s0Q4ajoQe565JqqEb56BBjQNrSd2FI5sog12Lvd9dxaT549kTviLFOWJtkmQhjhXg5j8nk-9qP-8XO-Y40Rw=w1920-h1080-no"
        },
        {
          title: 'Research Grants Database',
          tags: ['Rails', 'UI/UX'],
          description: 'Web application to submit and reward research grants.',
          image: "https://lh3.googleusercontent.com/hQ9B0QP38GuORD1BKZjiKfXiysF8umpXzCIi5ZsHFzgWeAKpUL9Xcd6cNXZQ4PAEIAKv-ddPE2xTGZXAz266KXZzmQWwTNCnj1WbO9kOEFnbcGn4s6L0WFdvCYCHjwUDIrb1oUfEd7XeOXMzu0FI1VZS0Bh8L1LtoV9SbaBfVDoa3ybZeSqm9E_bXaOj5b02a5Lit3QzPVFh51dJ8-bksEhpFSLyN6toV9Sp8nZ1eLG6AstLwq78467ptTEfNjUJA-RhsAvT5E9sQ84j-TGtEx_PQ_kFW-S6x0bHhTZRwTf27VkwbmaxlmU_TMJoa_PKNRYaEbVB-21bosgkv6TdlWzGZrewuzrAiReCLtzJ9myyIJcOlxtgcdjLO2Utc3OSP0XbSCnn_VNe3zuzBhVFcOFBYtTUiBKTWEWy8Wa2Ld32AihIoEWk4Ab6zxrDzi3Sw8OwnKut5GMiMwI3mqcXIFGzess_dlNDXBiDsSl_fBhYNSOgBJj48aklkrelywrW5KlerR_29bgyFjlq3i54UPq6R49JRsD165bJ2A5MXD8feXcBwdJnS_AbFl5abNUQDeMumwCFGzZJs-1xe4cQp0G6br33IVNFpF8AaaaERuJZl7iFAi1vFAEkZpGLsSActzX0QxPzpRCMgfEjEylvEt2caRVQkIU8EdjA8ylo_thxxrJjoVsjSws=w1920-h1080-no"
        },
        {
          title: 'GadCalc',
          tags: ['Android','UI/UX'],
          description: 'An application for university physicians to calculate dosages using medical guidelines.',
          image: "https://lh3.googleusercontent.com/pWPLCnSASPt2wtvZfud6LA3cO0dTVtXhvV-gCXOUR8hxlVZL4UP3K7rxG7h2TZFTul1fcpDgfct4gnU6uqmb5TLTlAXtdeRaSiZQOtGdPCJgsZ-k23bEay5dqS1vfYafTnczmJyZH7UKwJJdtbHA4aOjOAa4g054zxZW3oaB36IwZdj-a3tXXbe3FgRibMLBPgO1bWf23xl9FwpjymZKM4uNE3zW6T0gtx2mlyCcSflw8NfRFWU5R59V0ZZaSgnK8KExs-N9wLburRQSQGky-cPUwSdFbpo-OhgjG3OFtvz2BDiJSqB-asJQLJWZqRJ_QgEYZolu8zoX5FX4FEOO7Pg1Xk5qUIDofmZR0GlXvGrfYL82PcR_k8vOXJz9vCKMEMUhJ5K9a1TABDGCS5Y3tZR4cGIatHNT9KG7l5lK0L9I7XOnee7Jfsk0-h6kA4UUGm8ozHhxWdp17gIFy5VNTHwxBa-80j8jmy8Z9ddphxcZaD6EfQAAFdVfTGzG3HNwnrg3SIIZJ6OPECkvfLdfy5pNcAr6k5whc2wofKhHAvuvH_SkvLvYEA5wTYQnzziRxh0SR1X5yOyBTDZ1ikQrDS21CM9n4DRy3nWhNZomIknwBTytq1I7qq854hLNZCnbB2FuIf2YtlMvfkyl018qqY8fMfBIeNJ8ZDl9IdV-cjjG-nUfRKzpng=w1920-h1080-no"
        }, 
        {
          title: 'Personal Site - V1',
          tags: ['HTML/CSS/JS'],
          description: 'A website to display my computer science and graphic design projects.',
          image: "https://lh3.googleusercontent.com/cJgpP0AQNM8JnVSqyreM2kXWzncqle2ZfwYeHuyE_3ynL8Sl0G6hJYoCPJu8TbfJ3Sr-7h0nFijP6h5FAiUqlOs35pof_rpceSl25UxGHt3q6X3rYDpH7UrrBPdSevRMt8TF3n8s0Lyu9Pp0S_hocNUv-7M8HCC6NnKVWx_7jwUNTmNC9cvvJWTLULkdM-XVl3ZGzLU0_cHQ428VL8l5vSADZ-rjcHUCCJXvb_LHbVRb3jzey-rlfF-qXd5bXN-fwcY8VjuGvX0rERCvj7JoK5xMgeIeCC0rn1AfFxS2z9xpZXabq1wKTlWs3Qsz7D-MXVQ2Zt2fOZ-DjY0DAwfwt8XZCF5d7ExBfwfjrZSgf7UWTlAChwtFo1fvwmhCKl8D2qAOJFT7PQbf93gnirPc2AUcoX-knZy5-DJzQFOT24z26_Cz5ZAh1_bDBPyyC1SKipOEz-ENfPNORNfU6g__IW_l-3voWAXlx-F5mE9gbbufXCykBThtZVrd4eZAz6D3mpePRH2ZlJsnmzo79x7f7NNYl-Fzk4sHZEc19H7uPUBj9JfrpSpGGmU-DMeQf6U4GrVe_xLaohGOEENJihPdS0R7fJKXLQRidJDzibtwG_ef6efesVL1GHpy7nW6x5vMosCbODlbpoQjo1CFGBIxpjc92GLtexveknPlPfUOnrJKc1gukDMeYQ=w1920-h1080-no"
        },
        {
          title: 'Sudoku CLI',
          tags: ['Java'],
          description: 'A command line interface version of sudoku with brute force puzzle solving capabilities.',
          image: "https://lh3.googleusercontent.com/FkvVmNFDei_hcvG9UMi_7xLVitZfBZYlogXhl3cnZCDvSa06kWp9Yl7p8BstsDZxCkSwwTkUyE5lyvJim2kOuRdg-w5KUOtuVGhsTmxUOWgrbt9FHJwuXh1lyvDRJ_SRq2Gb-6eo3PAhmYOPjbdjYLtp6TsdHv_qBUx8FnB4Fdb7_mUC0LhNWS2gMlVS71l_Xy6OKLztBT_0NRy-i1xN00Rfmpy3oMKfOAjwfBqCkbLjgRPrI9A24Tw2QEUvw0t61P2Ifp33sztM4neNzXWZy_GZSPfU6FS3AeynXhggQcmim2mzxWsmdUBZW5Hx0u4EKQ2qgWrw7VQcumTvENf2nMxiR_Tb3ALdYp-us6nKvdVp9XXRl5soI8lnF4LJhfudxuP6H7jZrtyruFoB90-MznZ7YMbH8WoRDP9vEF_3NMqcJMlxSYYDSzrqUDBa0yQdR5KegbCna5T0eWHgK2uvqL_WvSSy_53V-2_zV6s-wvCuABhZvA_F2JDOmlRH5RpS7GLwOstf47nCboinMoDUzXwFSqhhrhpvBw4U0Wqb5Hk96JcRFCxQjdWae4DAN2uMeyT6nc_ip07AFV4CUY8i70JHGtEsk8uGCcKUrHa4Sjf1tp10tm-XAtKtae2VlZyU0BwCRn5Btv_7qHNAQABDFhS_050qmc9uzf5CYKAsSoKAZtCF2tIpD4E=w1920-h1080-no"
        },
      ]
      
    }
  }
  
}
</script>

<style lang="scss">
  
</style>