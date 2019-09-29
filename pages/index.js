// ===================================================|
// Pages: INDEX

import moment from 'moment';
import { mapState } from 'vuex';
import { isMobile } from 'mobile-device-detect';

// Components
import sections from '@/components/sections';

export default {
  head() {
    return {
      title: this.title
    };
  },

  async fetch({ app, store }) {
    await store.dispatch('contentful/fetchContent', {
      locale: app.i18n.locale
    });
  },

  data() {
    return {
      componentKey: 0
    };
  },

  computed: mapState({
    title: ({ contentful }) => contentful.data.title,
    sections: ({ contentful }) => contentful.data.sections
  }),

  methods: {
    sectionComponent(id) {
      return sections[id];
    },

    async retakeContent() {
      await this.$store.dispatch('contentful/fetchContent', {
        locale: this.$i18n.locale
      });

      this.componentKey += 1;

      document.body.classList.add('done');
    }
  },

  beforeMount() {
    this.retakeContent();
  },

  created() {
    moment.locale(this.$i18n.locale);

    if (process.client) {
      const device = isMobile ? 'mobile' : 'desktop';
      document.body.classList.add(device);
    }
  }
};
