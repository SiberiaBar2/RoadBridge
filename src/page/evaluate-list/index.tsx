import { defineComponent, onMounted } from 'vue'
import axios from 'axios'
import { log } from 'console'

export default defineComponent({
  name: 'EvaluateList',
  setup() {
    const openPdf = (url: string) => {
      fetch(url, {
        method: 'get'
      }).then((res) => {
        const responseData = res.blob()
        console.log(
          'responseData',
          responseData.then((res) => {
            console.log('res', res)

            const blob = new Blob([res], { type: 'application/pdf;charset=utf-8' })

            console.log('blob', blob)

            // const href = URL.createObjectURL(blob)
            // window.open(href, 'newWindow')

            const pdfObjectUrl = URL.createObjectURL(blob)

            // 将对象 URL 设置为 iframe 的 src
            const iframe = document.querySelector('iframe')
            console.log('iframe', iframe)

            if (iframe) {
              iframe.src = pdfObjectUrl
            }

            // 撤销对象 URL，释放资源
            URL.revokeObjectURL(pdfObjectUrl)
          })
        )
      })
    }

    onMounted(() => {
      openPdf(
        'http://192.168.3.110:9090/000000-bladex/upload/20231129/2e8297aaabf1a6a56d84168eb11e83fa.pdf'
      )
    })

    const openWindowPdf = (url: string) => {
      try {
        console.log('url', url)
        fetch(url, {
          method: 'get'
        }).then((res) => {
          const responseData = res.blob()
          responseData.then((res) => {
            console.log('res', res)

            const blob = new Blob([res], { type: 'application/pdf;charset=utf-8' })
            const href = URL.createObjectURL(blob)
            window.open(href, 'newWindow')
          })
        })
      } catch (error) {
        console.log('pdf error', error)
      }
    }
    return () => (
      <div>
        {/* <button
          name="111"
          value="222"
          onClick={() =>
            openPdf(
              'http://192.168.3.110:9090/000000-bladex/upload/20231129/2e8297aaabf1a6a56d84168eb11e83fa.pdf'
            )
          }
        >
          提交
        </button> */}
        <iframe style={{ width: '750px', height: '100%' }} frameborder="0"></iframe>

        <el-button
          onClick={() =>
            openWindowPdf(
              'http://192.168.3.110:9090/000000-bladex/upload/20231129/2e8297aaabf1a6a56d84168eb11e83fa.pdf'
            )
          }
          type='primary'
        >
          打开pdf
        </el-button>
      </div>
    )
  }
})
