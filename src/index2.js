import init, { format, version } from "../node_modules/@wasm-fmt/clang-format/clang-format.js";


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

clangformatdemo();

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
