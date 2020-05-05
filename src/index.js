import compose from "@hacss/compose-plugins";
import copy from "@hacss/plugin-copy/src/index.js";
import del from "@hacss/plugin-delete/src/index.js";

export default spec => compose(del(Object.keys(spec)), copy(spec));
