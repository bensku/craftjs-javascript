"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const java_io_1 = require("java.io");
const java_nio_file_1 = require("java.nio.file");
function walk(file, callback) {
    if (!file.isDirectory()) {
        callback(file);
        return;
    }
    for (const f of file.listFiles()) {
        walk(f, callback);
    }
}
function getTestBaseDir(base) {
    if (!base) {
        return __jsdir;
    }
    if (base[0] === '.') {
        return java_nio_file_1.Paths.get(__jsdir, base).toString();
    }
    const pluginDir = java_nio_file_1.Paths.get(__jsdir, 'plugins', base).toString();
    return pluginDir;
}
function runTests(base) {
    const baseDir = new java_io_1.File(getTestBaseDir(base));
    const testFiles = [];
    walk(baseDir, (f) => {
        if (!f.getName().match(/\.test\.js$/g) ||
            f.getPath().match('node_modules') // Exclude tests of node_modules
        ) {
            return;
        }
        testFiles.push(f);
    });
    const ownPath = new java_io_1.File(__filename).toPath().getParent();
    testFiles.forEach((f) => {
        const relative = ownPath.relativize(f.toPath());
        require(`./${f.getPath()}`, '.');
    });
}
global.runTests = runTests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStCO0FBQy9CLGlEQUFzQztBQU10QyxTQUFTLElBQUksQ0FBQyxJQUFVLEVBQUUsUUFBOEI7SUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZixPQUFPO0tBQ1I7SUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ25CO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQWE7SUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ25CLE9BQU8scUJBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVDO0lBQ0QsTUFBTSxTQUFTLEdBQUcscUJBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsSUFBYTtJQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxNQUFNLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2xCLElBQ0UsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUNsQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGdDQUFnQztVQUNsRTtZQUNBLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUUxRCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyJ9