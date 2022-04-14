import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue"

describe("Message.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(Message, {
      props: {
        msg: "Oi amigos",
      },
    });
    expect(wrapper.text()).toContain("Oi amigos");
  });
});
