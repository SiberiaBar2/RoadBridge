import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import styles from './index.module.scss'
import { RouterView } from 'vue-router'

import { ContentContainer } from '@/components/container'
import { routes } from '@/router'

export default defineComponent({
  props: {
    value: { type: Number }
  },

  setup() {
    const collapse = ref(false)
    const router = useRouter()

    return () => (
      <div class={[styles.home]}>
        <el-menu
          background-color="#071526"
          active-text-color="#ffd04b"
          text-color="#fff"
          style={{
            height: '100%',
            width: '270px'
          }}
        >
          {routes.map((item, index) => {
            return (
              <el-sub-menu
                collaps={collapse}
                index={index + ''}
                key={item.path}
                v-slots={{
                  title: () => item.name
                }}
              >
                {item.children.map((ele, ind) => {
                  return (
                    <el-menu-item
                      key={ele.path}
                      index={index + '' + ind}
                      onClick={() => {
                        router.push(`${ele.path}`)
                      }}
                    >
                      {ele.name}
                    </el-menu-item>
                  )
                })}
              </el-sub-menu>
            )
          })}
        </el-menu>
        <ContentContainer>
          <RouterView
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </ContentContainer>
      </div>
    )
  }
})
