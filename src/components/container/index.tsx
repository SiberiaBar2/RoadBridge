import { defineComponent } from 'vue'

export const ContentContainer = defineComponent({
  render() {
    return (
      <div
        style={{
          height: '100%',
          backgroundColor: 'rgb(233, 204, 211)',
          width: '100%'
        }}
      >
        <div
          style={{
            padding: '12px',
            borderRadius: '12px',
            height: 'calc(100% - 25px)',
            backgroundColor: '#fff',
            margin: '10px'
          }}
        >
          {this.$slots.default ? this.$slots.default?.() : null}
        </div>
      </div>
    )
  }
})
