import v8 from "v8"
import vm from "vm"

v8.setFlagsFromString('--expose_gc');
export const gc: () => void = vm.runInNewContext('gc');

export default gc
