import init, { format, version } from "@wasm-fmt/clang-format";
import * as WAStyle from "wastyle";


const source = `
#include <iostream>
using namespace std;
auto main() -> int{
    std::cout << "Hello World!" <<
    std::endl;
    return 0;}
    `;

// clang-format
async function clangformatdemo() {
    await init();
    console.log(version());
    const formatted1 = format(
        source,
        "main.cc",
        JSON.stringify({
            BasedOnStyle: "Chromium",
            IndentWidth: 4,
            ColumnLimit: 80,
        })
    );

    console.log(formatted1);
    const preEl1 = document.getElementById("preElem1") ?? errorExpression();
    preEl1.textContent = formatted1;
}

// wastyle
async function wastyleformatdemo() {
    const arrayBuffer = await (await fetch("node_modules/wastyle/dist/astyle.wasm")).arrayBuffer();
    await WAStyle.init(arrayBuffer);
    const [success, result] = WAStyle.format("#include <cstdio>\nint main(){int 🦄,a,*b=a,c=🦄*2,*d=nullptr;return -1;}", "pad-oper style=google");
    if (!success) {
        errorExpression("wastyle failed; check console");
    }
    const preEl2 = document.getElementById("preElem2") ?? errorExpression();
    preEl2.textContent = result;
    console.log(result);
}

clangformatdemo();
wastyleformatdemo();

//
// Utility
//

/**
 * 
 * @param {string} [text]
 * @throws {Error}
 * @returns {never}
 */
function errorExpression(text) {
    text = text ?? "error; check the console";
    alert(text);
    throw new Error(text);
}
