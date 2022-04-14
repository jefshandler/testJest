import { shallowMount } from '@vue/test-utils'
//qual componente vai ser testado
import HelloWorld from '@/components/HelloWorld.vue'


describe('HelloWorld.vue', () => {
//Bloco de teste
  it('renders props.msg when passed', () => {
    const msg = 'new message'
//our component *- nosso componente    
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    //assertion / se correto - afirmação
    expect(wrapper.text()).toMatch(msg)
  })
})
