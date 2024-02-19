import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ComboboxItem.md","filePath":"meta/ComboboxItem.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ComboboxItem.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "as",
      "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
      "type": "AsTag | Component",
      "required": false,
      "default": "'div'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "value",
      "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\n",
      "type": "AcceptableValue",
      "required": true
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "select",
      "description": "<p>Event handler called when the selecting item. <br> It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: SelectEvent<AcceptableValue>]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ComboboxItem.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComboboxItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ComboboxItem as default
};