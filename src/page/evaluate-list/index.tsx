import { defineComponent, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'EvaluateList',
  setup() {
    const openPdf = (url: string) => {
      axios.get(url, { responseType: 'blob' }).then((data) => {
        const responseData = data.data
        const blob = new Blob([responseData], { type: 'application/pdf;charset=utf-8' })

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
    }

    onMounted(() => {
      openPdf(
        'http://192.168.3.110:9090/000000-bladex/upload/20231129/2e8297aaabf1a6a56d84168eb11e83fa.pdf'
      )
    })
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
      </div>
    )
  }
})
