import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import styles from './index.module.scss'
import Home from './views/home'

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.warp}>
        <Home></Home>
      </div>
    )
  }
})
